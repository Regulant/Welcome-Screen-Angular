import { Component, OnInit } from '@angular/core';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  help: boolean = false; //ABÄNDERN AUF FALSE WENN FERTIG!!
  neuerTermin: boolean = false;
  terminListe: boolean = false;

  show: String = null;

  setString(){
    if(this.help){
      this.show = '<app-help></app-help>';
    }else if(this.neuerTermin){
      this.show = "<app-neuer-termin></app-neuer-termin>";
    }else if(this.terminListe){
      this.show = "<app-termin-liste></app-termin-liste>";
    }
  }

  showOnlyOneElement(s: String){
    if(s == "help"){
      this.help = true;
      this.neuerTermin = false;
      this.terminListe = false;
      this.setString();
    }else if(s == "neuerTermin"){
      this.help = false;
      this.neuerTermin = true;
      this.terminListe = false;
      this.setString();
    }else if(s == "terminListe"){
      this.help = false;
      this.neuerTermin = false;
      this.terminListe = true;
      this.setString();
    }

  }

  constructor() { }

  ngOnInit() {
  }
}
