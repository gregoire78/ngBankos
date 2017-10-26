import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* component */
import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';

/* pipe*/
import { PictoPipe } from './picto.pipe';

/* service */
import { HelloService } from './hello.service';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    PictoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HelloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
