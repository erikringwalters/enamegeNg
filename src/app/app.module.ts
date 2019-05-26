import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { GenderComponent } from './gender/gender.component';
import { RaceComponent } from './race/race.component';
import { LengthComponent } from './length/length.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenderComponent,
    RaceComponent,
    LengthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
