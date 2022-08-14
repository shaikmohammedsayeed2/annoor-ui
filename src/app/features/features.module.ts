import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableModule } from 'ngx-easy-table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatPaginatorModule,
    HttpClientModule,
    NgbModule
  ]
})
export class FeaturesModule { }
