import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { GenderComponent } from '../gender/gender.component';
import { RaceComponent } from '../race/race.component';
import { LengthComponent } from '../length/length.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    GenderComponent,
    RaceComponent,
    LengthComponent]
})
export class HomeComponent implements OnInit {

  constructor(
    protected genderComponent: GenderComponent,
    protected raceComponent: RaceComponent,
    protected lengthComponent: LengthComponent
    ) { }

  ngOnInit() {
    this.setGender("any");
    this.setRace("any");
    this.setLength("any");

  }

  gender: string;
  race: string;
  length: string;
  nameService: NameService = new NameService;

  setGender(gender: string) {
    this.gender = gender;
  }

  setRace(race: string) {
    this.race = race;
  }

  setLength(length: string) {
    this.length = length;
  }

  //TODO: Get title from app component
  title = 'eNameGen';


  //TODO: DRY up this method
  changeAnyToItem(gender: string, race: string, length: string) {
    if(gender === "any") {
      this.setGender(
        this.genderComponent.genders[
          this.getRandomNumber(0, this.genderComponent.genders.length)
        ]
      )
    }
    if(race === "any") {
      this.setRace(
        this.raceComponent.races[
          this.getRandomNumber(0, this.raceComponent.races.length)
        ]
      )
    }
    if(length === "any") {
      this.setLength(
        this.lengthComponent.lengths[
          this.getRandomNumber(0, this.lengthComponent.lengths.length)
        ]
      )
    }
  }

  genderChanged(gender: string) {
    this.setGender(gender);
  }

  raceChanged(race: string) {
    this.setRace(race);
  }

  lengthChanged(length: string) {
    this.setLength(length);
  }

  //TODO: move this
  getRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
  }
}
