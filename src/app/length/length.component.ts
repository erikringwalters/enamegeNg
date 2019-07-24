import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {

  length: String;
  constructor() { }

  ngOnInit() {
  }

  getLength() {
    return this.length;
  }
  setLength(length: String) {
    this.length = length;
  }

}
