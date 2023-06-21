import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Login} from "../models/login.model";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path = 'api/user';

  constructor(private http: HttpClient) {
  }

  login(model: Login): Observable<User> {
    const formData: FormData = new FormData();
    formData.append('email', model.email);
    formData.append('password', model.password);
    return this.http.post<User>(`${this.path}/login`, formData);
  }

  register(user: User): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('age', user.age.toString());
    formData.append('gender', user.gender);
    formData.append('email', user.email);
    formData.append('password', user.password);
    return this.http.post<any>(`${this.path}/register`, formData);
  }
}
