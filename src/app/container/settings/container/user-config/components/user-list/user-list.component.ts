import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { takeUntil } from 'rxjs';
import { ActionBtnComponent } from 'src/app/shared/components/action-btn/action-btn.component';
import { AutoUnSubscribeService } from 'src/app/shared/services/auto-unsubscribe/auto-un-subscribe.service';
import { action } from 'src/app/utility/custom-types';
import { defaultColDefinition } from 'src/app/utility/utility';
import { OrgApiService } from '../../services/user-api.service';
export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control: any = controls.get(controlName);
      const checkControl: any = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors.matching) {
        return null;
      }

      if (
        control?.value &&
        checkControl?.value &&
        control?.value !== checkControl?.value
      ) {
        checkControl.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [AutoUnSubscribeService],
})
export class UserListComponent implements OnInit {
  action!: action;
  actionState: boolean = false;
  loading: boolean = false;
  orgLists: any[] = [];
  master: boolean = false;

  userForm: FormGroup;
  gridApi: any;
  gridColumnApi: any;
  selectedNodes: any;
  rowSelection = 'single';
  get usernamef() {
    return this.userForm.get('username');
  }
  get emailf() {
    return this.userForm.get('email');
  }
  get passwordf() {
    return this.userForm.get('password');
  }
  get orgNamef() {
    return this.userForm.get('orgName');
  }
  get confirm_passwordf() {
    if (this.userForm.get('confirm_password'))
      return this.userForm.get('confirm_password');
    return;
  }
  get f() {
    return this.userForm.controls;
  }

  columnDefs: ColDef[] = [

    { field: 'username' },
    { field: 'email' },
    { field: 'password' },
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
            this.addForm();
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

  rowData: any[] = [];
  constructor(
    public fb: FormBuilder,
    private api: OrgApiService,
    private destroy$: AutoUnSubscribeService
  ) {
    this.userForm = fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{5,}'
            ),
          ],
        ],
        confirm_password: ['', [Validators.required]],
      },
      {
        validators: [Validation.match('password', 'confirm_password')],
      }
    );
  }
  closeSideNav() {
    this.actionState = false;
  }
  submit() {
    console.log(this.userForm.value);
  }
  openSideNav() {
    this.actionState = true;
  }

  addForm() {
    this.userForm.reset();
  }

  editSideNav(data: any) {
    this.loadFormsDataWithValues(data);
  }

  ngOnInit(): void {
    if (this.master) {
      // this.userForm.addControl(
      //   'orgName',
      //   new FormControl('', Validators.required)
      // );
    }
    this.api
      .getOrgLists()
      .pipe(takeUntil(this.destroy$))
      .subscribe((d: any) => {
        // (this.orgLists = d.length ? [...d] : [])
        this.orgLists = [...d].map((i) => {
          i['action'] = '';
          return i;
        });
      });
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.gridApi.getPinnedBottomRow(0).data
  }
  onSelectionChanged(event: any) {
    this.selectedNodes = this.gridApi.getSelectedRows();
  }

  loadFormsDataWithValues(data: any) {
    this.userForm.patchValue({ ...data });
  }
}
