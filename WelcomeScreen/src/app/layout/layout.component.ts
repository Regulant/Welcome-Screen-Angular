import { Component, OnInit } from '@angular/core';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  help: boolean = false;
  neuerTermin: boolean = false;
  terminListe: boolean = false;

  showOnlyOneElement(s: String){
    if(s == "help"){
      this.help = true;
      this.neuerTermin = false;
      this.terminListe = false;
    }else if(s == "neuerTermin"){
      this.help = false;
      this.neuerTermin = true;
      this.terminListe = false;
    }else if(s == "terminListe"){
      this.help = false;
      this.neuerTermin = false;
      this.terminListe = true;
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
