import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NeuerTerminComponent } from './neuer-termin/neuer-termin.component';
import { TerminListeComponent } from './termin-liste/termin-liste.component';
import { HelpComponent } from './help/help.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NeuerTerminComponent,
    TerminListeComponent,
    HelpComponent 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
