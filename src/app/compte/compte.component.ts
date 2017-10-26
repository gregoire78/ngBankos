import { Component, OnInit, Input } from '@angular/core';
import { Mouvement } from '../models/mouvement';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  
  @Input()
  compte:Array<Mouvement>;

  constructor() {
   }

  ngOnInit() {
  }

}
