import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tenure } from 'src/app/mock.data.service';
import { action } from 'src/app/utility/custom-types';

@Component({
  selector: 'app-fees-forms',
  templateUrl: './feesforms.component.html',
  styleUrls: ['./feesforms.component.scss'],
})
export class FeesformsComponent implements OnInit {
  tenures: string[] = [...tenure];

  feesFormGroup!: FormGroup;
  @Input() action:action = 'add';

  @Output() formAction = new EventEmitter<{type:action,data?:any}>();

  @Input() set feesComponentConfig(value: any) {
    let temp: any = {...this.formModel};
    Object.keys(value).map((i) => {
      temp[i] = value[i] ? value[i] : this.formModel[i];
    });
    this.feesFormGroup = this.fb.group({ ...temp });
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.feesFormGroup);
  }

  cancel() {
    this.formAction.emit({
      type:'delete'
    })
  }
  submit() {
    this.formAction.emit({
      type:this.action,
      data:this.feesFormGroup.value
    })
  }

  formModel:any = {
    tenure:``,
    term1:0,
    term2:0,
    term3:0,
    books:0,
    uniforms:0,
    shoes:0
  };

  /**
   *  singleFeesComponent:any = {
    term1:0,
    term2:0,
    term3:0,
    books:0,
    uniform:0,
    shoes:0
  };
   */
}
