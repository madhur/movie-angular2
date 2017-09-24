import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  location;

  constructor(private router: Router) {
    this.location = this.router.url;
    this.router.events.subscribe((event => {
      this.location = window.location.pathname;
      console.log(this.location.pathname);
    }));

  }

}
