import { Component } from '@angular/core';
import { MovementListService } from './movement-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banquos';
  
  compteParent;

  constructor(public mvtarr: MovementListService){
      this.compteParent = mvtarr.compteParent;
  }

  recuperationEvent(event){
    alert(event)
  }
}
