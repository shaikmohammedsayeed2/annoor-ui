import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './view-user/view-user.component';


@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
  UsersComponent,
  ViewUserComponent  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    RouterModule
  ],
  providers:[DatePipe]
})
export class UsersModule { }
