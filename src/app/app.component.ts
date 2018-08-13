import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild('sidenav') sidenav: MatSidenav;

  // reason = '';

  close() {
    // this.reason = reason;
    this.sidenav.close();
  }

  hamburgerToggle(msg: string) {
    this.sidenav.toggle()
  }
}


