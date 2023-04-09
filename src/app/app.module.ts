import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery';
import { LightgalleryModule } from 'lightgallery/angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LightgalleryModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
