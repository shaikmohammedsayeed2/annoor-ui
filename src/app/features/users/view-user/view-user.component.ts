import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  studentFormGroup!: FormGroup;
  submitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public datepipe: DatePipe,
    private _Activatedroute: ActivatedRoute,
    private usersService:UsersService
  ) {}

  ngOnInit(): void {
    this.initForm();
     this._Activatedroute.paramMap.subscribe((params) => {
       console.log(params);
       this.usersService.getStudentDataById(params.get('id')).subscribe((result:any)=>{
        console.log(result.details[0])
        this.patchInitialData(result.details[0])
        this.studentFormGroup.disable()
       })
     });
  }
  goto(url: any) {
    this.router.navigate([url]);
  }
  get studentDetailsForm() {
    return this.studentFormGroup.controls;
  }
  initForm() {
    let date = new Date();
    this.studentFormGroup = this.formBuilder.group({
      SId: [null],
      SName: [null],
      SGender: [null],
      SDOB: [null],
      SSection:[null],
      SClass:[null],
      SAadhaar: [null],
      SPhoto: [null],
      SSurname: [null],
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
      FLiteracyStatus: [true],
      FOccupation: [null],
      MOccupation: [null],
      FAadhaar: [null],
      MAadhaar: [null],
      BankIFSC: [null],
      BranchName: [null],
      AccountNumber: [null],
      RationCardNumber: [null],
      GuardianRequired: [false],
      GuardianName: [null],
      GuardianPhoneNo: [null],
      GuardianAadhaar: [null],
      GuardianEmail: [null],
      GuardianWhatsApp: [null],
      GuardianLiteracyStatus: [null],
      GuardianOccupation: [null],
    });
  }
  patchInitialData(data:any){
     let userData = {
       SId: data.studentId,
       SName: data.studentName,
       SDOB: this.datepipe.transform(data.dob, 'yyyy-MM-dd'),
       SAadhaar: data.aadhaarNumber,
       SPhoto: null,
       SGender: data.gender?'male':'female',
       SSurname: data.surname,
       SClass:data.class,
       SSection:data.section,
       SGovtId: data.govtChildId,
       SCaste: data.caste,
       SReligion: data.religion,
       SPlaceofBirth: data.placeOfBirth,
       SNationality: data.nationality,
       SDisabilityAny: data.disabilityIfAny,
       SMotherTounge: data.motherTounge,
       SIdentificationMarks1: data.identificationMark1,
       SIdentificationMarks2: data.identificationMark2,
       SFacilitiesRequired: data.facilitiesIfRequiredAny,
       DateOfAdmission: this.datepipe.transform(
         data.dateOfAdmission,
         'yyyy-MM-dd'
       ),
       FatherName: data.fatherName,
       MotherName: data.motherName,
       FPhoneNo: data.fPhoneNumber,
       MPhoneNo: data.mPhoneNumber,
       MEmailAddress: data.mEmail,
       FEmailAddress: data.fEmail,
       MWhatsApp: data.mWhatsApp,
       FWhatsApp: data.fWhatsApp,
       MLiteracyStatus: data.mLiteracy,
       FLiteracyStatus: data.fLiteracy,
       FOccupation: data.fOccupation,
       MOccupation: data.mOccupation,
       FAadhaar: data.fAadhaar,
       MAadhaar: data.mAadhaar,
       BankIFSC: data.bankIfsc,
       BranchName: data.branchName,
       AccountNumber: data.accountNumber,
       RationCardNumber: data.rationCardNumber,
       GuardianRequired: true,
       GuardianName: data.guardianName,
       GuardianPhoneNo: data.gPhoneNumber,
       GuardianAadhaar: data.gAadhaar,
       GuardianEmail: data.gEmail,
       GuardianWhatsApp: data.gWhatsApp,
       GuardianLiteracyStatus: data.gLiteracy,
       GuardianOccupation: data.gOccupation,
     };
     this.studentFormGroup.patchValue(userData);
  }
  onSubmit() {
    // console.log(this.studentDetailsForm["GuardianRequired"].value)
    alert('h1');
  }
}
