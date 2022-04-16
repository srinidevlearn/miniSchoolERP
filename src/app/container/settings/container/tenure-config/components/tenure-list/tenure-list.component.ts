import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize, takeUntil, tap } from 'rxjs';
import { AutoUnSubscribeService } from 'src/app/shared/services/auto-unsubscribe/auto-un-subscribe.service';
import { action } from 'src/app/utility/custom-types';
import { TenureConfigApiService } from '../../services/tenure-config-api.service';


@Component({
  selector: 'app-tenure-list',
  templateUrl: './tenure-list.component.html',
  styleUrls: ['./tenure-list.component.scss'],
  providers: [AutoUnSubscribeService],
})
export class TenureListComponent {
  action!: action;
  actionState: boolean = false;
  loading: boolean = false;
  tenures: any[] = [];

  tenureForm!: FormGroup;

  setStartDate: Date | null = new Date();
  setEndDate: Date | null = new Date();
  // tenurePeriod!:string;

  constructor(
    private destroy$: AutoUnSubscribeService,
    private router: ActivatedRoute,
    public api: TenureConfigApiService,
    private fb: FormBuilder
  ) {
    router.params
      .pipe(
        tap((d: { [key: string]: action }) => {
          let { action } = d;
          this.action = action;
        }),
        takeUntil(destroy$)
      )
      .subscribe();

    this.tenureForm = this.fb.group({
      tenurePeriod: ['', [Validators.required]],
      effectiveStartDate: ['', [Validators.required]],
      effectiveEndDate: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.api
      .getTenureConfig()
      .pipe(
        takeUntil(this.destroy$),
        tap((d: any) => {
          this.loading = true;
          this.tenures = [...d];
        }),
        finalize(() => (this.loading = false))
      )
      .subscribe();
  }



  openSideNav() {
    this.actionState = true;
  }

  closeSideNav() {
    this.actionState = false;
  }
  updateValue(key:any,event:any){
    let {value} = event.target;
    this.tenureForm.patchValue({[key]:value});
  }

  createForm() {
    this.tenureForm.setValue({
      tenurePeriod: '',
      effectiveStartDate: '',
      effectiveEndDate: '',
    });
    this.action = 'add';
  }

  get startDate() {
    return this.tenureForm.get('effectiveStartDate')?.value;
  }
  get endDate() {
    return this.tenureForm.get('effectiveEndDate')?.value;
  }

  get tenurePeriod() {
    return this.tenureForm.get('tenurePeriod')?.value;
  }

  editSideNav(tenure: any) {
    this.actionState = true;
    this.action = 'update';
    this.tenureForm.patchValue({ ...tenure });
  }

  submit() {
    let dateHlp = (date:Date|string|number) => new Date(date).getTime()
    let tenure: any = { ...this.tenureForm.getRawValue() };
    let { effectiveStartDate, effectiveEndDate } = tenure;
    tenure={...tenure,...{effectiveStartDate:dateHlp(effectiveStartDate),effectiveEndDate:dateHlp(effectiveEndDate)}}
    console.log(tenure)
   
  }
}
