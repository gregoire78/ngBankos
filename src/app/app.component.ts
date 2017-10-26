import { Component } from '@angular/core';
import { Mouvement } from './models/mouvement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banquos';
  compteParent:Array<Mouvement>=[
    new Mouvement('abonnement yo', -300, 'description', new Date()),
    new Mouvement('abonnement yo', -300, 'description', new Date()),
    new Mouvement('salaire', +10000, 'description', new Date()),
    new Mouvement('loto', +3000000, 'description', new Date()),
    new Mouvement('abonnement yo', -300, 'description', new Date())
  ];
}
