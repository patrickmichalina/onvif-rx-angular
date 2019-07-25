import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ONVIFModule } from 'onvif-rx-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ONVIFModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
