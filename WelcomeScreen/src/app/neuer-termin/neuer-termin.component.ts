import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-neuer-termin',
  templateUrl: './neuer-termin.component.html',
  styleUrls: ['./neuer-termin.component.css']
})
export class NeuerTerminComponent implements OnInit {


  datum: string = "Datum";
  uhrzeit: string = "Uhrzeit";

  constructor() { }

  ngOnInit() {
  }

}
