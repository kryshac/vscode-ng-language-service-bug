import { Component } from '@angular/core';
import { TstComponent } from 'tst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // go to definition from here is working
    console.log(TstComponent);
  }
}
