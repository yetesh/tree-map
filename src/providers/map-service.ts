import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// import data from 'http://gisdata-csjdotgis.opendata.arcgis.com/datasets/72632919cb5043bbbf21fb58be8b8395_2.geojson';
// const word = data[0];
// console.log(word); // output 'testing'

/*
  Generated class for the LocationTracker provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MapService {

  private latLng: any;
  private map: any;
  private markers: Array<any> = [];
  private infoWindow: any;
  private apiUrl: string = 'api/trees';

  constructor(private geolocation: Geolocation, private http: Http) {
  }

  initMap(div: any) {
    this.geolocation.getCurrentPosition().then((position: Geoposition) => {
      this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var mapOptions = {
        center: this.latLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(div, mapOptions);
      this.addMarkers();
    });

  }

  addMarkers() {
    this.http.get(this.apiUrl).toPromise()
      .then((r: Response) => {
        for (var i = 0; i < r.json().data.length; i++) {
          var data = r.json().data[i];
          var props = data.properties;
          var m = this.createMarker(props);
          this.markers.push(m);
        }
      }).catch(err => {
        console.log(err);
      });
  }

  createMarker(props) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(+props.Y, +props.X),
      map: this.map,
      title: props.SPP
    });

    var infoWindow = new google.maps.InfoWindow({
        content: `
          <h1>${props.SPP}</h1>
          <b>X:</b> ${props.X}<br>
          <b>Y:</b> ${props.Y}<br>
          <b>DBH_IN:</b> ${props.DBH_IN}<br>
          <b>HEIGHT_FT:</b> ${props.HEIGHT_FT}<br>
          <b>SPREAD_FT:</b> ${props.SPREAD_FT}<br>
          <b>INSPECT_DT:</b> ${props.INSPECT_DT}<br>
          <b>Inspect_TM:</b> ${props.Inspect_TM}<br>
          <b>Inv_Date:</b> ${props.Inv_Date}<br>
          <b>Notes:</b> ${props.Notes}<br>
        `
    });
    marker.addListener('click', function () {
      infoWindow.open(this.map, marker);
    });
    return marker;
  }

  hideAllMarkers() {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
  }

  removeAllMarkers() {
    this.hideAllMarkers();
    this.markers = [];
  }

}
