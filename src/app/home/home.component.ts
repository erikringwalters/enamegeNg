import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.name = this.nameService.generateName("","","");
  }
  nameService: NameService = new NameService;

  //TODO: Get title from app component
  title = 'eNameGen';
}
