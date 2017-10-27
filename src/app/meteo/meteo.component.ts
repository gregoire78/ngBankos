import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  constructor(public meteo: HttpClient) {

    meteo.get('https://www.prevision-meteo.ch/services/json/paris')
      .subscribe(
      data => console.log(data)
      );

    console.log();

  }

  ngOnInit() {
  }

}
