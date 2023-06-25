import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  user: User | undefined;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.userEmitter.subscribe(user => {
      this.user = user as User;
    });

    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser')!!);
    }
  }

  redirectTo(adress: string) {
    this.router.navigate([adress]);
  }

  logOut() {
    localStorage.clear();
    this.user = undefined;
    this.router.navigate(['/login']);
  }
}
