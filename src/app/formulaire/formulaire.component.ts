import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

  enregistrer(){
    console.log(`hello ${this.user.nom} ${this.user.prenom}`)
  }

}
