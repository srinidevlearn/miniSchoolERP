import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, EventEmitter, Input, OnInit, Output, Self } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { AutoUnSubscribeService } from 'src/app/shared/services/auto-unsubscribe/auto-un-subscribe.service';
import { action } from 'src/app/utility/custom-types';
import { IStudentDetails } from 'src/app/utility/interfaces/studentData';
import {
  generateBloodGroup,
  generateStudentClass,
} from 'src/app/utility/utility';
import { StudentApiService } from '../../../services/student-api.service';

@Component({
  selector: 'app-student-detail-form',
  templateUrl: './student-detail-form.component.html',
  styleUrls: ['./student-detail-form.component.scss'],

  providers: [
    AutoUnSubscribeService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class StudentDetailFormComponent implements OnInit {
  @Input() action: action = 'add';
  private _getStudentDetails: {} = {};
  @Input() set getStudentDetails(value:{[key:string]:any}){
    this._getStudentDetails = {...value}
  }
  @Output() formAction = new EventEmitter<{type:action,data?:any}>();
  cancel() {
    this.formAction.emit({
      type:'delete'
    })
  }

  studentPrimaryDetails!: FormGroup;
  studentReligionDetails!: FormGroup;
  studentIdDetails!: FormGroup;
  studentFeesRelatedInfoDetails!: FormGroup;
  classes: { label: string; value: string }[] = [];
  gender: { label: string; value: string }[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];
  bloodGroup: { label: string; value: string }[] = [];
  community: { label: string; value: string }[] = [
    { label: 'SC/ST', value: 'SC/ST,' },
    { label: 'MBC', value: 'MBC' },
    { label: 'BC', value: 'BC' },
    { label: 'BCM', value: 'BCM' },
    { label: 'OC', value: 'OC' },
  ];
  studentPrimaryDetailsGroupedKeys = [
    'admissionDate',
    'studentFirstName',
    'studentClass',
    'studentLastName',
    'studentFatherName',
    'studentMotherName',
    'studentGender',
    'studentDOB',
  ];

  studentReligionDetailsGroupedKeys = [
    'studentCommunity',
    'studentCaste',
    'studentSubCaste',
    'studentReligion',
  ];
  studentIdDetailsGroupedKeys = [
    'studentAadharNumber',
    'studentNationality',
    'studentBloodGroup',
    'studentMotherToungue',
    'studentLangaugeKnown',
  ];
  studentFeesRelatedInfoGroupedKeys = [
    'studentEMINo',
    'studentPreviousSchool',
    'studentDiscount',
  ];
  studentDetailBasedOnAdmissionNumber: { [key: string]: any } = {};

  get studentFirstNamef() {
    return this.studentPrimaryDetails.get('studentFirstName');
  }
  get studentLastNamef() {
    return this.studentPrimaryDetails.get('studentLastName');
  }

  get studentFatherNamef() {
    return this.studentPrimaryDetails.get('studentFatherName');
  }
  get studentMotherNamef() {
    return this.studentPrimaryDetails.get('studentMotherName');
  }

  get studentClassf() {
    return this.studentPrimaryDetails.get('studentClass');
  }
  get studentGenderf() {
    return this.studentPrimaryDetails.get('studentGender');
  }
  get studentDOB() {
    return this.studentPrimaryDetails.get('studentDOB')?.value;
  }
  get addmissionDatef() {
    return this.studentPrimaryDetails.get('addmissionDate')?.value;
  }
  get addmissionDate() {
    return this.studentPrimaryDetails.get('addmissionDate')?.value;
  }
  get studentCastef() {
    return this.studentReligionDetails.get('studentCaste');
  }
  get studentSubCastef() {
    return this.studentReligionDetails.get('studentSubCaste');
  }
  get studentCommunityf() {
    return this.studentReligionDetails.get('studentCommunity');
  }
  get studentReligionf() {
    return this.studentReligionDetails.get('studentReligion');
  }

  get studentAadharNumberf() {
    return this.studentIdDetails.get('studentAadharNumber');
  }
  get studentNationalityf() {
    return this.studentIdDetails.get('studentNationality');
  }
  get studentBloodGroupf() {
    return this.studentIdDetails.get('studentBloodGroup');
  }
 
  get studentLangaugeKnownf() {
    return this.studentIdDetails.get('studentLangaugeKnown');
  }
  get studentMotherTounguef() {
    return this.studentIdDetails.get('studentMotherToungue');
  }

  get studentEMINof() {
    return this.studentFeesRelatedInfoDetails.get('studentEMINo');
  }
  get studentPreviousSchoolf() {
    return this.studentFeesRelatedInfoDetails.get('studentPreviousSchool');
  }
  get studentDiscountf() {
    return this.studentFeesRelatedInfoDetails.get('studentDiscount');
  }

  get fstudentPrimaryDetails() {
    return this.studentPrimaryDetails;
  }
  get fstudentReligionDetails() {
    return this.studentReligionDetails;
  }
  get fstudentIdDetails() {
    return this.studentIdDetails;
  }
  get fstudentFeesRelatedInfoDetails() {
    return this.studentFeesRelatedInfoDetails;
  }
  get filledAllDetails() {
    return (
      this.studentPrimaryDetails.valid &&
      this.studentFeesRelatedInfoDetails.valid &&
      this.studentIdDetails.valid &&
      this.studentReligionDetails.valid
    );
  }

  constructor(
    @Self() private destroy$: AutoUnSubscribeService,
    private fb: FormBuilder
  ) {
    this.classes = generateStudentClass();
    this.bloodGroup = generateBloodGroup();
  }

  ngOnInit(): void {
    this.initChunkableForms({
      ...studentDetail,
    });
    this.studentIdDetails.valueChanges.subscribe(d=>{
      console.log(d)
    })
    /**
     * ...(Object.keys(this.studentDetailBasedOnAdmissionNumber)
        ? { ...this.studentDetailBasedOnAdmissionNumber }
        : {}
     */
  }

  updateValue(key: string, event: any) {
    let {value} = event.target;
    console.log(this.studentPrimaryDetails,key)
    this.studentPrimaryDetails.patchValue({[key]:value});
  }

  initChunkableForms(studentDetails: any = {}) {
    let studentPrimaryDetails: { [key: string]: any } = {};
    let studentReligionDetails: { [key: string]: any } = {};
    let studentIdDetails: { [key: string]: any } = {};
    let studentFeesRelatedInfoDetails: { [key: string]: any } = {};

    for (let i of Object.keys(studentDetails)) {
      if (this.studentPrimaryDetailsGroupedKeys.includes(i)) {
        studentPrimaryDetails[i] = [studentDetails[i], [Validators.required]];
      }
      if (this.studentReligionDetailsGroupedKeys.includes(i)) {
        studentReligionDetails[i] = [studentDetails[i], [Validators.required]];
      }
      if (this.studentIdDetailsGroupedKeys.includes(i)) {
        studentIdDetails[i] = [studentDetails[i], [Validators.required]];
      }
      if (this.studentFeesRelatedInfoGroupedKeys.includes(i)) {
        studentFeesRelatedInfoDetails[i] = [
          studentDetails[i],
          [Validators.required],
        ];
      }
    }

    this.studentPrimaryDetails = this.fb.group({ ...studentPrimaryDetails });
    this.studentReligionDetails = this.fb.group({ ...studentReligionDetails });
    this.studentIdDetails = this.fb.group({ ...studentIdDetails });
    this.studentFeesRelatedInfoDetails = this.fb.group({
      ...studentFeesRelatedInfoDetails,
    });
  }
  create() {
    let temp = {};
    temp = {
      ...this.studentPrimaryDetails.value,
      ...this.studentIdDetails.value,
      ...this.studentFeesRelatedInfoDetails.value,
      ...this.studentReligionDetails.value,
    };
    console.log(temp)
  }
  update() {
    let temp = {};
    temp = {
      ...this._getStudentDetails,
      ...this.studentPrimaryDetails.value,
      ...this.studentIdDetails.value,
      ...this.studentFeesRelatedInfoDetails.value,
      ...this.studentReligionDetails.value,
    };
    console.log(temp)

  }
}

export const studentDetail = {
  admissionNo: '',
  studentFirstName: '',
  studentLastName: '',
  studentClass: '',
  admissionDate: '',
  studentFatherName: '',
  studentMotherName: '',
  studentGender: '',
  studentDOB: '',
  studentBloodGroup: '',
  studentCaste: '',
  studentSubCaste: '',
  studentCommunity: '',
  studentReligion: '',
  studentNationality: '',
  studentAadharNumber: '',
  studentMotherToungue: '',
  studentLangaugeKnown: '',
  studentEMINo: '',
  studentPreviousSchool: '',
  studentDiscount: '',
};


