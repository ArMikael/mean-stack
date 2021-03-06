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
      title: 'Reactive',
      path: 'reactive'
    },
    {
      title: 'Charts',
      path: 'charts'
    },
    {
      title: 'Track By',
      path: 'trackby'
    },
    {
      title: 'MobX',
      path: 'mobx'
    },
    {
      title: 'Dynamic Form',
      path: 'dynamic-form'
    }
  ];

  ngOnInit() {
  }

}
