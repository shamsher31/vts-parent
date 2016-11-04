import { Component} from '@angular/core';
import { NavController, MenuController} from 'ionic-angular';
import { 
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsLatLng,
  GoogleMapsMarkerOptions,
  GoogleMapsMarker,
  AnimateCameraOptions,
  GoogleMapsPolylineOptions
} from 'ionic-native';

import { HomePage } from '../home/home';

@Component({
  selector: 'tracker-page',
  templateUrl: 'tracker.html'
})

export class TrackerPage {
  
  constructor(
    public navCtrl: NavController,
    public menu: MenuController) {
      this.menu.enable(true);
  }
  
  ngAfterViewInit() {
    this.loadMap();
  }
  
  loadMap() {
    
    // or create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');
    
    let map = new GoogleMap(element);

    // listen to MAP_READY event
    map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

    // create LatLng object
    let sourceLocation: GoogleMapsLatLng = new GoogleMapsLatLng(18.527468, 73.873057);
    let destLocation: GoogleMapsLatLng = new GoogleMapsLatLng(18.506154, 73.874948);
    let busLocation: GoogleMapsLatLng = new GoogleMapsLatLng(18.519121, 73.877070);
    
    let animateCamera: AnimateCameraOptions = {
      target: busLocation,
      zoom: 14,
      tilt: 30,
      duration: 4000
    }

    // move the map's camera to position
    map.animateCamera(animateCamera);

    // create source marker
    let sourceMarkerOptions: GoogleMapsMarkerOptions = {
      position: sourceLocation,
      title: 'Pune Station'
    };
    
    // create source marker
    let destMarkerOptions: GoogleMapsMarkerOptions = {
      position: destLocation,
      title: 'Poona College, Pune'
    };
    
    let busMarkerOptions: GoogleMapsMarkerOptions = {
      position: busLocation,
      title: 'Bus'
    }

    map.addMarker(sourceMarkerOptions)
      .then((sourceMarker: GoogleMapsMarker) => {
        sourceMarker.showInfoWindow();
      });
    
    map.addMarker(busMarkerOptions)
      .then((busMarker: GoogleMapsMarker) => {
        busMarker.showInfoWindow();
      });

    map.addMarker(destMarkerOptions)
      .then((destMarker: GoogleMapsMarker) => {
        destMarker.showInfoWindow();
      });
   
    let polyLine: GoogleMapsPolylineOptions = {
      points: [
        sourceLocation,
        destLocation
      ],
      googledesic: true,
      color: '#e74c3c',
      width: 2
    };
    
    map.addPolyline(polyLine);

  }
  
  stopTracker() {
    this.navCtrl.setRoot(HomePage);
  }
}
