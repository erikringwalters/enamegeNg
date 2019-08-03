import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() {
  }

  name: string;
  rand: number;

  fragments1: string[] = ["aa", "ae", "ai", "ao", "au"];

  fragments2: string[] = ["ea", "ee", "ei", "eo", "eu"];

  fragments3: string[] = ["ia", "ie", "ii", "io", "iu"];

  getRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
  }

  generateName(gender: String, race: String, length: String) {
    this.name = "";
    this.name = this.name + this.fragments1[this.getRandomNumber(0, this.fragments1.length)];
    this.name = this.name + (this.fragments2[this.getRandomNumber(0, this.fragments2.length)]);
    this.name = this.name + (this.fragments3[this.getRandomNumber(0, this.fragments3.length)]);

    return this.name;
  }

}
