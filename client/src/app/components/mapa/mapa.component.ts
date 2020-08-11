import { Component, OnInit, Input, ViewChild } from '@angular/core';
declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa', {static: true}) mapa;

  constructor() { }

  ngOnInit() {
    console.log(this.mapa.nativeElement);
    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    // https://account.mapbox.com/ pegar token no site;
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FicmllbHZlbGxvc28iLCJhIjoiY2tkbWE0Y2xhMTZxZDJ5cGRibG5xd2p4NSJ9.K7fLiEsOeh170iek-HWqcQ';
    const map = new mapboxgl.Map({
      container:  this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: 15
    });
    const marker = new mapboxgl.Marker()
        .setLngLat( [ lng, lat ] )
        .addTo( map );
  }
}