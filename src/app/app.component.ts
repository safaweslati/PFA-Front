import { Component } from '@angular/core';
import {FirstService} from "./first.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfa-interface';
  userName: string = '';
  userInterests = [];

  constructor(private service: FirstService) {}

  submitForm() {
    this.userInterests = this.service.predictInterests(this.userName);
  }
}
