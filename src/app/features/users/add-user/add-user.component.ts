import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  studentFormGroup!: FormGroup;
  submitted=false
  constructor(private router:Router,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.initForm()
  }
  goto(url:any){
    this.router.navigate([url])
  }
  get studentDetailsForm() {
    return this.studentFormGroup.controls;
  }
  initForm() {
    let date = new Date()
    this.studentFormGroup = this.formBuilder.group({
      SId: [1234, Validators.required],
      SName: [null, Validators.required],
      SGender: ['male',Validators.required],
      SDOB: [null, Validators.required],
      SAadhaar: [null, Validators.required],
      SPhoto: [null, Validators.required],
      SSurname: [null, Validators.required],
      SGovtId: [null],
      SCaste: [null],
      SReligion: [null],
      SPlaceofBirth: [null],
      SNationality: [null],
      SDisabilityAny: [false],
      SMotherTounge: [null],
      SIdentificationMarks1: [null],
      SIdentificationMarks2: [null],
      SFacilitiesRequired: [null],
      DateOfAdmission: [this.datepipe.transform(date, 'yyyy-MM-dd')],
      FatherName: [null],
      MotherName: [null],
      FPhoneNo: [null],
      MPhoneNo: [null],
      MEmailAddress: [null],
      FEmailAddress: [null],
      MWhatsApp: [null],
      FWhatsApp: [null],
      MLiteracyStatus: [true],
      FLiteracyStatus: [null],
      FOccupation: [null],
      MOccupation: [null],
      FAadhaar: [null],
      MAadhaar: [null],
      BankIFSC:[null],
      BranchName:[null],
      AccountNumber:[null],
      RationCardNumber:[null]
    });
   

  }
  onSubmit(){
   alert('h1') 
  }
}
