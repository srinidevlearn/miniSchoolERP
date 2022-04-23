import { Component, OnInit } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { ActionBtnComponent } from 'src/app/shared/components/action-btn/action-btn.component';
import { AutoUnSubscribeService } from 'src/app/shared/services/auto-unsubscribe/auto-un-subscribe.service';
import { action } from 'src/app/utility/custom-types';
import { defaultColDefinition } from 'src/app/utility/utility';
import { FeesComponentApiService } from '../../service/fees-component-api.service';

@Component({
  selector: 'app-feesdetails',
  templateUrl: './feesdetails.component.html',
  styleUrls: ['./feesdetails.component.scss'],
  providers: [AutoUnSubscribeService],
})
export class FeesdetailsComponent implements OnInit {
  action!: action;
  actionState: boolean = false;
  loading: boolean = false;
  feesComponents: any[] = [];
  singleFeesComponent: any = {
    term1: 0,
    term2: 0,
    term3: 0,
    books: 0,
    uniform: 0,
    shoes: 0,
  };
  gridApi: any;
  gridColumnApi: any;
  selectedNodes: any;
  toggleFilters:boolean = false
  constructor(private api: FeesComponentApiService) {}

  ngOnInit(): void {
    this.api
      .getFeesComponentConfigure()
      .pipe()
      .subscribe((d: any) => {
        this.feesComponents = [...d];
        console.log(d);
      });
  }

  captureFormAction(e: { type: action; data?: any }) {
    this.action = e.type;
    this.closeSideNav();
    // if(e.data) this.singleFeesComponent = {...this.singleFeesComponent,...e.data}
  }
  editSideNav(data: any) {
    this.singleFeesComponent = { ...data };
    this.action = 'add';
  }

  closeSideNav() {
    this.actionState = false;
  }
  openSideNav() {
    this.actionState = true;
  }
  columnDefs: ColDef[] = [
    {
      field: 'tenurePeriod',
      filter: 'agTextColumnFilter',
      filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
      },
    },
    { field: 'term1', filter: 'agNumberColumnFilter' },
    { field: 'term2', filter: 'agNumberColumnFilter' },
    { field: 'term3', filter: 'agNumberColumnFilter' },
    { field: 'books', filter: 'agNumberColumnFilter' },
    { field: 'uniform', filter: 'agNumberColumnFilter' },
    { field: 'shoes', filter: 'agNumberColumnFilter' },
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
            this.editSideNav(data);
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
  defaultColDefinition = { ...defaultColDefinition,...{floatingFilter:this.toggleFilters} };
  
  addFilters(){
    this.toggleFilters = !this.toggleFilters
    this.defaultColDefinition = {...defaultColDefinition,...{floatingFilter:this.toggleFilters}}
    // this.gridApi.redrawRows();
  }
  exportCSV() {
    // return this.gridApi.exportDataAsCsv();
    let d = this.gridApi.getDataAsCsv();
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.getPinnedBottomRow(0).data
  }
  onSelectionChanged(event: any) {
    this.selectedNodes = this.gridApi.getSelectedRows();
  }
}
