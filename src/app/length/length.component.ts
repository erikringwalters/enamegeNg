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
    this.setSelectedLength(this.lengths[this.lengths.length - 1]);
  }

  selectedLength: string;

  lengths: string[] = [
    "short",
    "medium",
    "long",
    "any"
  ]

  nameService: NameService = new NameService();

  changeLength(length: string) {
    this.lengthOut.emit(length);
    this.setSelectedLength(length);
  }

  setSelectedLength(length: string) {
    this.selectedLength = length;
  }


}
