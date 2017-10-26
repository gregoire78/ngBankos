import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';
import { PictoPipe } from './picto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    PictoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
