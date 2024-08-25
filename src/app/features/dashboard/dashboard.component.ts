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
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';

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
  public columnsCopy: Columns[] = [];
  checked = new Set(['ID', 'name']);
  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
    this.configuration.resizeColumn = true;
    this.configuration.fixedColumnWidth = false;
    // ... etc.
    this.columnsCopy = [
      { key: 'admission_number', title: 'Admission Number' },
      { key: 'student_name', title: 'Student Name' },
      { key: 'mother_tongue', title: 'Mother Tongue' },
      { key: 'date_of_birth', title: 'DOB' },
      { key: 'nationality', title: 'Nationality' },
      { key: 'religion', title: 'Religion' },
      { key: 'caste', title: 'Caste' },
      { key: 'father_name', title: 'Father Name' },
      { key: 'mother_name', title: 'Mother Name' },
      { key: 'occupation', title: 'Occupation' },
      { key: 'student_aadhaar_number', title: 'Student Aadhaar No' },
      { key: 'student_id', title: 'Student Id' },
      { key: 'last_school_and_class', title: 'Last School and Class' },
      { key: 'date_of_admission', title: 'Date of Admission' },
      { key: 'class_on_admission', title: 'Class on Admission' },
      { key: 'record_and_sheet_submitted', title: 'Record and Sheet submitted' },
      { key: 'tc_submitted', title: 'TC Submitted' },
      { key: 'birth_marks', title: 'Birth Marks' },
      { key: 'medium', title: 'Medium' },
      { key: 'class_on_leaving', title: 'Class on Leaving' },
      { key: 'date_of_leaving', title: 'Date of Leaving' },
      { key: 'reason_of_leaving', title: 'Reason of Leaving' },
      { key: 'school_left_name', title: 'School Left Name' },
      { key: 'hm_or_principal_initial', title: 'HM or Principal Initial' },
    ];
    this.columns = this.columnsCopy;
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
  toggle(name: string): void {
    this.checked.has(name) ? this.checked.delete(name) : this.checked.add(name);
    this.columns = this.columnsCopy.filter((column) => this.checked.has(column.key));
  }
}
