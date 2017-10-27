import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

/* component */
import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

/* pipe*/
import { PictoPipe } from './picto.pipe';
import { NumborPipe } from './numbor.pipe';

/* service */
import { HelloService } from './hello.service';
import { MovementListService } from './movement-list.service';
import { MeteoComponent } from './meteo/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    PictoPipe,
    NumborPipe,
    FormulaireComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HelloService,
    MovementListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
