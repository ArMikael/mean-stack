import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user) {
    console.log('AuthService - login method: ', user);
  }

  register(user) {
    console.log('AuthService - register method: ', user);
  }
}
