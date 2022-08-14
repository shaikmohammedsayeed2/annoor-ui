import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableModule } from 'ngx-easy-table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatPaginatorModule
  ]
})
export class FeaturesModule { }
