import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
