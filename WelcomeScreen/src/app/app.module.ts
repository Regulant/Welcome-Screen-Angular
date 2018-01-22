import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NeuerTerminComponent } from './neuer-termin/neuer-termin.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NeuerTerminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
