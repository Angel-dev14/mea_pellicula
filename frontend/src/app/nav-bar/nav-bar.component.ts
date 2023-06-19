import { Component } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router: Router) {
  }

  redirectTo(adress: string) {
    this.router.navigate([adress]);
  }
}
