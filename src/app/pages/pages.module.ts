import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './users/user/user.component';
import {UsersComponent} from './users/users.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    UserComponent,
    UsersComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    UserComponent,
    UsersComponent
  ]
})
export class PagesModule { }
