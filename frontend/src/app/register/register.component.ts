import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, fb: FormBuilder) {
    this.form = fb.group({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {
    this.setErrorMessage(false, '');
    this.authService.register(this.form.getRawValue()).subscribe({
      next: (mess) => {
        if (mess.message === 'Success') {
          this.router.navigate(['login']);
        } else {
          this.setErrorMessage(true, mess.message);
        }
      },
      error: (err) => {
        console.error(err.message);
        this.setErrorMessage(true, err.message);
      }
    });
  }

  setErrorMessage(bool: boolean, message: string) {
    this.showErrorMessage = bool;
    this.errorMessage = message;
  }
}
