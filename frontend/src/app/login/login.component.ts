import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  showErrorMessage: boolean = false;

  constructor(private authService: AuthService, private router: Router, fb: FormBuilder) {
    this.form = fb.group({
      email: new FormControl(),
      password: new FormControl(),
    });

    localStorage.clear();
    authService.isLoggedIn = false;
  }

  onSubmit() {
    this.authService.login(this.form.getRawValue()).subscribe({
      next: (user) => {
        if (user === null) {
          this.showErrorMessage = true;
        } else {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.authService.userEmitChange(user);
          this.authService.isLoggedIn = true;
          this.router.navigate(['movies/next-month-projections']);
        }
      },
      error: (err) => {
        console.error(err.message);
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
