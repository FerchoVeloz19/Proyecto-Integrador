import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import * as Leaflet from 'leaflet';
import 'leaflet-draw';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;
  x: any;
  y: any;

  constructor(public navCtrl: NavController,public geolocation: Geolocation) {

  }

  ngOnInit(): void {

    this.drawMap();

  }


  drawMap(): void {

    //Obtener la locacion del usuario
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.x=resp.coords.latitude;
      this.y=resp.coords.longitude;

      //dibujar al mapa
      this.map = Leaflet.map('map').setView([this.x, this.y], 18);
      Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'AppTuto',
        maxZoom: 18
      }).addTo(this.map);
  
      //Crear marcador de la ubicacion del usuario
      Leaflet.marker([this.x, this.y]).addTo(this.map)
      .bindPopup("Tu Ubicacion").openPopup();

    })
  }

}
