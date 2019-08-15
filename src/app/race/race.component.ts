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
  }

  race: string;

  races: string[] = [
    "human",
    "elf",
    "orc",
    "any"
  ]

  nameService: NameService = new NameService();

  changeRace(race: string) {
    this.raceOut.emit(race);
  }
}
