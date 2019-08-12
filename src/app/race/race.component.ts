import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  race: string;

  races: string[] = [
    "human",
    "elf",
    "orc",
    "any"
  ]

  nameService: NameService = new NameService();

  getRace() {
    return this.race;
  }

  setRace(race: string) {
    this.race = race;
  }
}
