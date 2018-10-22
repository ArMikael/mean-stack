import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user) {
    console.log('AuthService - login method: ', user);

    this.http.post( environment.serverUrl + 'api/auth', user)
      .subscribe((data: any) => {
        console.log(data);
      });
    console.log('AuthService - register method: ', user);
  }

  register(user) {
    this.http.post( environment.serverUrl + 'api/user', user)
      .subscribe((data: any) => {
        console.log(data);
      });
    console.log('AuthService - register method: ', user);
  }
}
