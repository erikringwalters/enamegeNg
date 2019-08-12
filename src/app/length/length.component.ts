import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.setLength("any");
  }

  length: string;

  lengths: string[] = [
    "short",
    "medium",
    "long",
    "any"
  ]

  nameService: NameService = new NameService();

  getLength() {
    return this.length;
  }

  setLength(length: string) {
    this.length = length;
  }

}
