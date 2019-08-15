import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {
  @Input() lengthIn: { length: string };
  @Output() lengthOut: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  length: string;

  lengths: string[] = [
    "short",
    "medium",
    "long",
    "any"
  ]

  nameService: NameService = new NameService();

  changeLength(length: string) {
    this.lengthOut.emit(length);
  }

}
