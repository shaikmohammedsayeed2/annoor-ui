import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableModule } from 'ngx-easy-table';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersModule } from './users/users.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    NgbModule,
    UsersModule,
  ]
})
export class FeaturesModule { }
