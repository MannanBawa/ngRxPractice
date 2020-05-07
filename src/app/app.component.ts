import { Component } from '@angular/core';
import { truncate } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngRxPraccy';
  showCounter = true;
}
