import { Component, OnInit, Input } from '@angular/core';
import { Mouvement } from '../models/mouvement';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  
  compte:Array<Mouvement>=[
    new Mouvement('abonnement yo', -300, 'description', new Date()),
    new Mouvement('abonnement yo', -300, 'description', new Date()),
    new Mouvement('salaire', +10000, 'description', new Date()),
    new Mouvement('loto', +3000000, 'description', new Date()),
    new Mouvement('abonnement yo', -300, 'description', new Date())
  ]

  constructor() {
   }

  ngOnInit() {
  }

}
