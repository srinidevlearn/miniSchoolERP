import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { action } from 'src/app/utility/custom-types';

@Component({
  selector: 'app-org-config-form',
  templateUrl: './org-configform.component.html',
  styleUrls: ['./org-configform.component.scss'],
})
export class OrgConfigformComponent implements OnInit {
  @Input() action:action = 'add';

  @Input() set orgConfigData(value: any) {
    let temp: any = {...this.orgFormModel};
    Object.keys(value).map((i) => {
      temp[i] = value[i] ? value[i] : this.orgFormModel[i];
    });
    this.orgForm = this.fb.group({ ...temp });
  }

  @Output() formAction = new EventEmitter<{ type: action; data?: any }>();

  orgFormModel: any = {
    name: '',
    category: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  };
  orgForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  cancel() {
    this.formAction.emit({
      type:'delete'
    })
  }
  submit() {
    this.formAction.emit({
      type:this.action,
      data:this.orgForm.value
    })
    console.log(this.orgForm.value)
  }

  ngOnInit(): void {}
}
