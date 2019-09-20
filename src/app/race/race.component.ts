import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {
  @Input() raceIn: { race: string };
  @Output() raceOut: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.setSelectedRace(this.races[this.races.length - 1]);
  }

  selectedRace: string;

  races: string[] = [
    "human",
    "elf",
    "orc",
    "any"
  ]

  nameService: NameService = new NameService();

  changeRace(race: string) {
    this.raceOut.emit(race);
    this.setSelectedRace(race);
  }

  setSelectedRace(race: string) {
    this.selectedRace = race;
  }

}
