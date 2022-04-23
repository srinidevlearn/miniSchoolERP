import { Component, OnInit, Self } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { takeUntil } from 'rxjs';
import { ActionBtnComponent } from 'src/app/shared/components/action-btn/action-btn.component';
import { AutoUnSubscribeService } from 'src/app/shared/services/auto-unsubscribe/auto-un-subscribe.service';
import { action } from 'src/app/utility/custom-types';
import { StudentDetailsHelper } from 'src/app/utility/jsonModifier.helper';
import { defaultColDefinition } from 'src/app/utility/utility';
import { StudentApiService } from '../../../services/student-api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers:[AutoUnSubscribeService]
})
export class StudentListComponent implements OnInit {
  toggleFilters:boolean = false;
  actionState: boolean = true;
  gridApi: any;
  gridColumnApi: any;
  selectedNodes: any;
  studentsLists=[];
  action!: action;
  constructor(private api:StudentApiService,@Self() private destroy$:AutoUnSubscribeService) { }

  ngOnInit(): void {
    this.loadStudentDetails()
  }

  defaultColDefinition = { ...defaultColDefinition,...{floatingFilter:this.toggleFilters} };
  
  columnDefs: ColDef[] = [
    {
      field: 'admissionNo',
      headerName: 'Admission No.',
      filter: 'agNumberColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
    {
      field: 'studentFirstName',
      headerName: 'FirstName',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
    {
      field: 'studentLastName',
      headerName: 'LastName',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
    {
      field: 'admissionDate',
      headerName: 'Addmission Date',
      filter: 'agDateColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
    {
      field: 'studentFatherName',
      headerName: 'Father Name',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
      {
      field: 'studentMotherName',
      headerName: 'Mother Name',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
    {
      field: 'studentGender',
      headerName: 'Gender',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
    {
      field: 'studentDOB',
      headerName: 'D.O.B',
      filter: 'agDateColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
    { field: 'studentCommunity', headerName:'Community',filter: 'agTextColumnFilter',hide:true },
    { field: 'studentCaste', headerName:'Caste', filter: 'agTextColumnFilter',hide:true },
    { field: 'studentSubCaste', headerName:'Sub Caste', filter: 'agTextColumnFilter',hide:true },
    { field: 'studentReligion', headerName:'Religion', filter: 'agTextColumnFilter',hide:true },
    { field: 'studentAadharNumber', headerName:'Aadhar Number', filter: 'agNumberColumnFilter',hide:true },
    { field: 'studentNationality', headerName:'Nationality', filter: 'agTextColumnFilter',hide:true },
    { field: 'studentBloodGroup', headerName:'Blood Group', filter: 'agTextColumnFilter',hide:true },
    { field: 'studentMotherToungue', headerName:'Mother Toungue', filter: 'agTextColumnFilter',hide:true },
    { field: 'studentLangaugeKnown', headerName:'Language', filter: 'agTextColumnFilter',hide:true },
    { field: 'studentEMINo', headerName:'EMI No.', filter: 'agTextColumnFilter',hide:true },
    { field: 'studentDiscount', headerName:'Discount', filter: 'agNumberColumnFilter',hide:true },
    { field: 'studentPreviousSchool', headerName:'Previous School', filter: 'agTextColumnFilter',hide:true },


    {
      headerName: 'Action',
      field: '',
      width: 100,
      pinned: 'right',
      filter: false,
      cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: (field: string, data: any) => {
          this.openSideNav();
          if (field === 'update') {
            // this.editSideNav(data);
          }
          if (field === 'add') {
          }
        },
      },
      cellRendererSelector: (params: ICellRendererParams) => {
        return {
          component: ActionBtnComponent,
          params: { values: ['add', 'update', 'delete'] },
        };
      },
    },
  ];
  
  closeSideNav() {
    this.actionState = false;
  }
  openSideNav() {
    this.actionState = true;
  }
  addFilters(){
    this.toggleFilters = !this.toggleFilters
    this.defaultColDefinition = {...defaultColDefinition,...{floatingFilter:this.toggleFilters}}
    // this.gridApi.redrawRows();
  }
  exportCSV() {
    // return this.gridApi.exportDataAsCsv();
    // let d = this.gridApi.getDataAsCsv();
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.getPinnedBottomRow(0).data
  }
  onSelectionChanged(event: any) {
    this.selectedNodes = this.gridApi.getSelectedRows();
  }
  captureFormAction(e: { type: action; data?: any }) {
    this.action = e.type;
    this.closeSideNav();
  }

  loadStudentDetails(){
    this.api.getAllStudentDetails().pipe(takeUntil(this.destroy$)).subscribe((students:any)=>{
      if(students?.length >0 ){

        this.studentsLists = ([...students.map((student:any)=>StudentDetailsHelper.apiToUIConfig(student))]) as any
      }
    })
  }

}
