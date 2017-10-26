import { Injectable } from '@angular/core';
import { Mouvement } from './models/mouvement';

@Injectable()
export class MovementListService {
  
  constructor() { }

  getMouvements():Array<Mouvement>{
    return [
      new Mouvement('abonnement yo', -300, 'description', new Date()),
      new Mouvement('abonnement yo', -300, 'description', new Date()),
      new Mouvement('salaire', +10000, 'description', new Date()),
      new Mouvement('loto', +3000000, 'description', new Date()),
      new Mouvement('abonnement yo', -300, 'description', new Date())
    ]
  }
}
