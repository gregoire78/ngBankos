import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* component */
import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';

/* pipe*/
import { PictoPipe } from './picto.pipe';
import { NumborPipe } from './numbor.pipe';

/* service */
import { HelloService } from './hello.service';
import { MovementListService } from './movement-list.service';
import { FormulaireComponent } from './formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    PictoPipe,
    NumborPipe,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    HelloService,
    MovementListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
