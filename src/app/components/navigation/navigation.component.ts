import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  navigationRoutes = [
    {
      title: 'Login',
      path: 'login'
    },
    {
      title: 'Register',
      path: 'register'
    },
    {
      title: 'Products List',
      path: 'products'
    },
    {
      title: 'Admin',
      path: 'admin'
    },
    {
      title: 'Reactive',
      path: 'reactive'
    }
  ];

  ngOnInit() {
  }

}
