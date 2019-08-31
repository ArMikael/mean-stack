import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ShortTextPipe } from './pipes/short-text.pipe';
import {AuthGuard} from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsListComponent,
    InputFormatDirective,
    NavigationComponent,
    ShortTextPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'register',
        component: RegisterComponent
      },

      {
        path: 'products-list',
        component: ProductsListComponent,
        canActivate: [AuthGuard]
      },

      {
        path: '**',
        redirectTo: ''
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
