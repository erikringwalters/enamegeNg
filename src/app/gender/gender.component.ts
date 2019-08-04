import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  gender: string;

  genders: string[] = [
    "masculine",
    "feminine",
    "any",
  ]

  nameService: NameService = new NameService();

  constructor() { }

  ngOnInit() {
  }


}
