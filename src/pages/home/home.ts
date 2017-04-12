import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapService } from '../../providers/map-service';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public mapService: MapService) {
  }

  ionViewDidLoad() {
    this.mapService.initMap(this.mapElement.nativeElement);
  }

}
