import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  @Input() genderIn: { gender: string };
  @Output() genderOut: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  genders: string[] = [
    "unspecified",
    "masculine",
    "feminine",
    "any",
  ]

  nameService: NameService = new NameService();

  changeGender(gender: string) {
    this.genderOut.emit(gender);
  }


}
