import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  element: String;

  clicker(element){
   console.log("Test")
  }

  constructor() { }

  ngOnInit() {
  }

}
