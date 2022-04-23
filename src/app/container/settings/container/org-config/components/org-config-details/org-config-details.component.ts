import { Component, OnInit } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { takeUntil } from 'rxjs';
import { ActionBtnComponent } from 'src/app/shared/components/action-btn/action-btn.component';
import { AutoUnSubscribeService } from 'src/app/shared/services/auto-unsubscribe/auto-un-subscribe.service';
import { action } from 'src/app/utility/custom-types';
import { defaultColDefinition } from 'src/app/utility/utility';
import { OrgApiService } from '../../services/org-api.service';

@Component({
  selector: 'app-org-config-details',
  templateUrl: './org-config-details.component.html',
  styleUrls: ['./org-config-details.component.scss'],
  providers:[AutoUnSubscribeService]
})
export class OrgConfigDetailsComponent implements OnInit {
  action!: action;
  actionState: boolean = false;
  loading: boolean = false;
  orgConfigurationData: any[] = [];
  gridApi: any;
  gridColumnApi: any;
  selectedNodes: any;
  constructor(private api:OrgApiService,private destroy$:AutoUnSubscribeService) {}

  ngOnInit(): void {
   this.api.getOrganizationConfig().pipe(takeUntil(this.destroy$)).subscribe((d:any)=>{
     this.orgConfigurationData = [...d];
   })
  }
  openSideNav() {
    this.actionState = true;
  }
  editSideNav(data: any) {
    // this.actionState
  }
  captureFormAction(e: { type: action; data?: any }) {
    this.action = e.type;
    this.closeSideNav();
    // if(e.data) this.singleFeesComponent = {...this.singleFeesComponent,...e.data}
  }
  closeSideNav() {
    this.actionState = false;
  }
  keysToHideOnMobileDevice:string[] = ['name','address'];
  columnDefs: ColDef[] = [
    { field: 'name'},
    { field: 'address' },
    { field: 'city',  },
    { field: 'state', },
    { field: 'country', },
    { field: 'pincode',  },
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
  defaultColDefinition = { ...defaultColDefinition };

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.getPinnedBottomRow(0).data
  }
  onSelectionChanged(event: any) {
    this.selectedNodes = this.gridApi.getSelectedRows();
  }
}
