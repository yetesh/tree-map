import { InMemoryDbService } from 'angular-in-memory-web-api';

/*
  Generated class for the InMemoryDataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let trees = [
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.814683075",
          "Y": "37.3441349515",
          "SPP": "Ligustrum lucidum",
          "DBH_IN": "13",
          "HEIGHT_FT": "23",
          "SPREAD_FT": "21",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8148630751",
          "Y": "37.3442849515",
          "SPP": "Acer platanoides",
          "DBH_IN": "10",
          "HEIGHT_FT": "23",
          "SPREAD_FT": "24",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8152530752",
          "Y": "37.3446149515",
          "SPP": "Acer platanoides",
          "DBH_IN": "6",
          "HEIGHT_FT": "23",
          "SPREAD_FT": "25",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8153930752",
          "Y": "37.3447349515",
          "SPP": "Acer platanoides",
          "DBH_IN": "8",
          "HEIGHT_FT": "21",
          "SPREAD_FT": "20",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8150730759",
          "Y": "37.3514649521",
          "SPP": "Vacant site -Large",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:09:36",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8147830758",
          "Y": "37.3510249521",
          "SPP": "Vacant site -Large",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:09:37",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8104730744",
          "Y": "37.3440749518",
          "SPP": "Vacant site -Medium",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:09:46",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8167930759",
          "Y": "37.3493349518",
          "SPP": "Prunus persica",
          "DBH_IN": "1",
          "HEIGHT_FT": "6",
          "SPREAD_FT": "6",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2011-04-21T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8167530759",
          "Y": "37.3492749518",
          "SPP": "Fraxinus velutina Glabra",
          "DBH_IN": "32",
          "HEIGHT_FT": "20",
          "SPREAD_FT": "2",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2011-04-21T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8165730759",
          "Y": "37.3491049518",
          "SPP": "Prunus",
          "DBH_IN": "2",
          "HEIGHT_FT": "11",
          "SPREAD_FT": "8",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2011-04-21T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": "nectarine"
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8164730758",
          "Y": "37.3489549518",
          "SPP": "Prunus",
          "DBH_IN": "5",
          "HEIGHT_FT": "12",
          "SPREAD_FT": "11",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2011-04-21T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": "prunus ilicifolia"
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8166730759",
          "Y": "37.3492049518",
          "SPP": "Vacant site -Large",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:09:49",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8194530764",
          "Y": "37.3499849517",
          "SPP": "Unknown",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:09:54",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8193030764",
          "Y": "37.3499349517",
          "SPP": "Unknown",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:09:54",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8176030759",
          "Y": "37.3479549516",
          "SPP": "Fraxinus velutina Glabra",
          "DBH_IN": "30",
          "HEIGHT_FT": "35",
          "SPREAD_FT": "30",
          "Inv_Date": "2011-04-21T00:00:00.000Z",
          "INSPECT_DT": "2011-04-21T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8150630753",
          "Y": "37.3457049516",
          "SPP": "Unknown",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-23T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:10:21",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8147930752",
          "Y": "37.3457449516",
          "SPP": "Vacant site -Medium",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-23T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:10:22",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8312167641",
          "Y": "37.3451762036",
          "SPP": "Vacant site -Medium",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-06-14T00:00:00.000Z",
          "INSPECT_DT": "2011-06-14T00:00:00.000Z",
          "Inspect_TM": "09:02:12",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8158730757",
          "Y": "37.3485349518",
          "SPP": "Cupressus sempervirens",
          "DBH_IN": "14",
          "HEIGHT_FT": "15",
          "SPREAD_FT": "5",
          "Inv_Date": "2011-04-23T00:00:00.000Z",
          "INSPECT_DT": "2011-04-23T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8159730757",
          "Y": "37.3486449518",
          "SPP": "Acer palmatum",
          "DBH_IN": "2",
          "HEIGHT_FT": "8",
          "SPREAD_FT": "4",
          "Inv_Date": "2011-04-23T00:00:00.000Z",
          "INSPECT_DT": "2011-04-23T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8162030758",
          "Y": "37.3488949518",
          "SPP": "Yucca Gloriosa",
          "DBH_IN": "9",
          "HEIGHT_FT": "10",
          "SPREAD_FT": "10",
          "Inv_Date": "2011-04-23T00:00:00.000Z",
          "INSPECT_DT": "2011-04-23T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8166030759",
          "Y": "37.3493349518",
          "SPP": "Misc. Species",
          "DBH_IN": "3",
          "HEIGHT_FT": "13",
          "SPREAD_FT": "10",
          "Inv_Date": "2011-04-23T00:00:00.000Z",
          "INSPECT_DT": "2011-04-23T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": "Arizona Cypress"
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.812623075",
          "Y": "37.3465549519",
          "SPP": "Ligustrum lucidum",
          "DBH_IN": "5",
          "HEIGHT_FT": "13",
          "SPREAD_FT": "10",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8100630745",
          "Y": "37.346004952",
          "SPP": "Acer platanoides",
          "DBH_IN": "6",
          "HEIGHT_FT": "18",
          "SPREAD_FT": "15",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8094430743",
          "Y": "37.345324952",
          "SPP": "Vacant site -Medium",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:11:42",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8141830755",
          "Y": "37.348984952",
          "SPP": "Unknown",
          "DBH_IN": "0",
          "HEIGHT_FT": "0",
          "SPREAD_FT": "0",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2014-08-28T00:00:00.000Z",
          "Inspect_TM": "02:11:44",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8147430758",
          "Y": "37.3508749521",
          "SPP": "Lagerstroemia indica",
          "DBH_IN": "2",
          "HEIGHT_FT": "10",
          "SPREAD_FT": "5",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8138530756",
          "Y": "37.3501349521",
          "SPP": "Lophostemon confertus",
          "DBH_IN": "3",
          "HEIGHT_FT": "18",
          "SPREAD_FT": "8",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": " "
        }
      },
      {
        "type": "Feature",
        "geometry": {},
        "properties": {
          "X": "-121.8138330756",
          "Y": "37.3501249521",
          "SPP": "Lophostemon confertus",
          "DBH_IN": "4",
          "HEIGHT_FT": "18",
          "SPREAD_FT": "8",
          "Inv_Date": "2011-04-27T00:00:00.000Z",
          "INSPECT_DT": "2011-04-27T00:00:00.000Z",
          "Inspect_TM": "12:00:00",
          "Notes": ""
        }
      }
    ];
    return {trees};
  }
}
