import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { debounceTime, of, take } from 'rxjs';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss']
})
export class ActionBtnComponent implements ICellRendererAngularComp,OnInit {
  private params: any;
  renderMenuButton:string[]=[]

  constructor() { }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }


  btnClickedHandler(value:string) {
    let {data} = this.params

   this.params.clicked(value,data);
  }

  dynamicallyLoadMenu(){
    of(true).pipe(debounceTime(500),take(1)).subscribe(d=>{
      this.renderMenuButton = this.params.values
      // console.log(this.renderMenuButton,this.params,this.params.values)
    })
    
  }
  ngOnInit(): void {
  }
  ngOnDestroy():void{

  }

}
