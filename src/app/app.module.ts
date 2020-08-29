import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GifsjaguarComponent } from './gifsjaguar/gifsjaguar.component';
import { BuscagifComponent } from './buscagif/buscagif.component';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GifsjaguarComponent,
    BuscagifComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
