import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { AuthGuard } from './services/auth-guard.service';
import { ProductComponent } from './components/product/product.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TrackByComponent } from './components/track-by/track-by.component';
import { MobxComponent } from './components/mobx/mobx.component';
import { MobxAngularModule } from 'mobx-angular';
import { MobXStore } from './app.mobx-store';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsListComponent,
    InputFormatDirective,
    NavigationComponent,
    ShortTextPipe,
    ProductComponent,
    ReactiveComponent,
    ChartsComponent,
    TrackByComponent,
    MobxComponent,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MobxAngularModule,
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
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule'
      },

      {
        path: 'products',
        component: ProductsListComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'products/:id',
        component: ProductComponent
      },

      {
        path: 'reactive',
        component: ReactiveComponent
      },

      {
        path: 'charts',
        component: ChartsComponent
      },

      {
        path: 'trackby',
        component: TrackByComponent
      },

      {
        path: 'mobx',
        component: MobxComponent
      },

      {
        path: 'dynamic-form',
        component: DynamicFormComponent
      },

      {
        path: '**',
        redirectTo: ''
      }

    ])
  ],
  providers: [MobXStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
