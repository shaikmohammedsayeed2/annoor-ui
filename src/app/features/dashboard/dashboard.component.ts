import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { Columns, API, DefaultConfig, Config, APIDefinition, Pagination } from 'ngx-easy-table';
import { ExportToCsv } from 'export-to-csv';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public selected: any;
  @ViewChild('table', { static: true }) table!: APIDefinition;
  public data$!: Observable<any>;
  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private dashboardService: DashboardService
  ) {}

  public configuration!: Config;
  public columns!: Columns[];
  public paginationTotalItems!: number;
  pagination!: Pagination;
  public total: any;
  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
    this.configuration.fixedColumnWidth = true;
    // ... etc.
    this.columns = [
      { key: 'studentId', title: 'ID' },
      { key: 'studentName', title: 'Name' },
      { key: 'class', title: 'Class' },
      { key: 'section', title: 'Section' },
      { key: 'fatherName', title: 'Father Name' },
      { key: 'motherName', title: 'Mother Name' },
      { key: 'fatherPhoneNumber', title: 'Father PH' },
      { key: 'motherPhoneNumber', title: 'Mother PH' },
      { key: 'govtChildId', title: 'Child ID' },
      { key: 'edit', title: 'Edit' },
    ];
    this.data$ = this.dashboardService.getDashboardData();
  }

  exportToCSV(): void {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };
    const csvExporter = new ExportToCsv(options);
    this.data$.subscribe((val: any) => csvExporter.generateCsv(val));
  }
  onChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }

  goto(url: any) {
    this.router.navigate([url]);
  }

  goToEdit(row: any) {
    alert(JSON.stringify(row, null, 2));
    alert(row.studentId);
  }
}
