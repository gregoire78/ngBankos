import { Component, OnInit } from '@angular/core';
import { Mouvement } from '../models/mouvement';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  
  tab: Array<any>=[
    {title: 'Abonnement YP', somme: -300, desc: "desciption", date: new Date()},
    {title: 'Abonnement YP', somme: +62, desc: "desciption", date: new Date()},
    {title: 'salaire', somme: +50, desc: "desciption", date: new Date()},
    {title: 'chose', somme: -69.99, desc: "desciption", date: new Date()}
  ]

  compte:Array<Mouvement>=[
    new Mouvement('abonnement yo', -300, 'description', new Date()),
    new Mouvement('abonnement yo', -300, 'description', new Date()),
    new Mouvement('abonnement yo', +300, 'description', new Date()),
    new Mouvement('abonnement yo', +300, 'description', new Date()),
    new Mouvement('abonnement yo', -300, 'description', new Date()),
    
  ]

  constructor() {
   }

  ngOnInit() {
  }

}
