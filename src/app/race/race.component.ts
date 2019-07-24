import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  race: String;
  constructor() { }

  ngOnInit() {
  }

  getRace() {
    return this.race;
  }
  setRace(race: String) {
    this.race = race;
  }

}
