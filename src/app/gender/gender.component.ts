import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  gender: String;
  constructor() { }

  ngOnInit() {
  }

  getGender() {
    return this.gender;
  }
  setGender(gender: String) {
    this.gender = gender;
  }

}
