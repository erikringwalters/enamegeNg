import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {

  length: string;

  constructor() { }

  ngOnInit() {
  }
  nameService: NameService = new NameService();

}
