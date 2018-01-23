import { Component, OnInit } from '@angular/core';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  help: boolean = false;

  test(){
    console.log("TEST");
  }

  constructor() { }

  ngOnInit() {
  }

}
