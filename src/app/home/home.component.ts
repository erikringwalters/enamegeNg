import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';
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
    this.raceComponent.setRace("any");
    this.lengthComponent.setLength("any");

  }

  gender: string;
  nameService: NameService = new NameService;

  setGender(gender: string) {
    this.gender = gender;
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
      this.raceComponent.setRace(
        this.raceComponent.races[
          this.getRandomNumber(0, this.raceComponent.races.length)
        ]
      )
    }
    if(length === "any") {
      this.lengthComponent.setLength(
        this.lengthComponent.lengths[
          this.getRandomNumber(0, this.lengthComponent.lengths.length)
        ]
      )
    }
  }

  genderChanged(gender: string) {
    this.setGender(gender);
  }

  //TODO: move this
  getRandomNumber(min, max) {
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
  }
}
