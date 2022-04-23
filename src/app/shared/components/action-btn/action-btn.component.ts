import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { debounceTime, of, take } from 'rxjs';
import { AgGridBottomSheetComponent } from '../table/table.component';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss'],
})
export class ActionBtnComponent implements ICellRendererAngularComp, OnInit {
  private params: any;
  menuButtonUIState: boolean = false;
  renderMenuButton: string[] = [];

  constructor(private _bottomSheet: MatBottomSheet) {}
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  btnClickedHandler(value: string) {
    let { data } = this.params;
    this.menuButtonUIState = false;
    this.params.clicked(value, data);
  }

  dynamicallyLoadMenu() {
    of(true)
      .pipe(debounceTime(500), take(1))
      .subscribe((d) => {
        this.renderMenuButton = this.params.values;
        this.menuButtonUIState = true;
      });
  }
  openBottomSheets() {
    let data = {
      columnDefinition: this.params?.columnApi?.columnModel?.columnDefs,
      data: this.params.data,
    };
    if (data.columnDefinition)
      this._bottomSheet.open(AgGridBottomSheetComponent, {
        data: data,
      });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
