import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { Serv1Service } from './dataservice/serv1.service';

const appRoutes: Routes = [
  {'path': '2', 'component': Comp3Component},
  {'path': '3', 'component': Comp3Component},
  { path: '', redirectTo: '2', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [Serv1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
