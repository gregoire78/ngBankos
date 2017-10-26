import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* component */
import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';

/* pipe*/
import { PictoPipe } from './picto.pipe';
import { NumborPipe } from './numbor.pipe';

/* service */
import { HelloService } from './hello.service';
import { MovementListService } from './movement-list.service';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    PictoPipe,
    NumborPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HelloService,
    MovementListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
