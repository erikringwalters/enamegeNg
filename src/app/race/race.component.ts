import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  race: string;

  races: string[] = [
    "human",
    "elf",
    "orc",
    "any"
  ]

  nameService: NameService = new NameService();

  constructor() { }

  ngOnInit() {
  }
}
