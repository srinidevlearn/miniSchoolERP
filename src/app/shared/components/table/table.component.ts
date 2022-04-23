import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  _style: any = { 'width.%': 100, 'height.px': 250 };
  stopcolumnDrag: boolean = false;

  private _pinedData = new BehaviorSubject<any>(null);
  private readonly pinedData$ = this._pinedData.asObservable();

  private destroy$ = new Subject<void>();
  private _hideOnMobileDevice: string[] = [];
  constructor(public breakpointObserver: BreakpointObserver) {
   
  }

  // @Input() get pinedData() {
  //   return this._pinedData;
  // }

  @Input() set preSelectedNodes(value: any) {
    if (value && value.length && this.gridApi) {
      let symbols = value.map((i: any) => i.symbol).filter((i: any) => i);

      this.gridApi.getRenderedNodes().forEach(function (node: any) {
        if (symbols.includes(node.data.symbol)) {
          node.setSelected(true);
        }
      });
    }
  }

  @Input() set pinedData(value: {
    pinLastRow: boolean;
    payload: { [key: string]: any }[];
  }) {
    let { pinLastRow, payload } = value;
    if (pinLastRow && payload.length) {
      this._pinedData.next(payload);
    } else {
      // this._pinedData.next(null)
    }
  }

  @Input() set columnsToHideOnMobileDevice(keys: string[]) {
    if (!keys.length) keys = [];
    this._hideOnMobileDevice = [...keys];
  }

  @Input() set suppressDragLeaveHidesColumns(value: boolean) {
    this.stopcolumnDrag = value;
  }
  @Input() set tableStyle(value: { width?: number; height?: number }) {
    if (value) {
      let temp: any = {};
      if (value.width) temp['width.%'] = value.width;
      if (value.height) temp['height.px'] = value.height;
      this._style = {
        ...this._style,
        ...temp,
      };
    }
  }

  @Input() rowMultiSelectWithClick: boolean = false;

  @Input() defaultColDef: any = [];
  @Input() rowSelection: any = [];
  @Input() rowData: any = [];
  @Input() set filterModel(value: any) {
    if (value) {
      this.gridApi.setFilterModel(value);
    }
  }

  @Input() set sortModel(value: any) {
    const sortModel: { [key: string]: string }[] = [];
    if (this.gridApi) {
      if (value) {
        let temp: { [key: string]: string } = {};
        temp['colId'] = value;
        temp['sort'] = 'asc';
        sortModel.push(temp);
        this.gridApi.setSortModel(sortModel);
      } else {
        this.gridApi.setSortModel(null);
      }
    }
  }

  @Input() columnDefs: any = [];
  gridApi: any;
  gridColumnApi: any;

  @Output() selectedNodes: any = new EventEmitter();
  @Output() hoveredNode: any = new EventEmitter();

  @Input() set rowSelectionOnIndex(value: any[]) {
    value = [1, 2, 3, 4, 5, 6, 7, 8];
    if (value.length && this.gridApi) {
      this.gridApi.forEachNode((node: any) => {
        if (value.includes(node.data.index)) {
          this.gridApi.getDisplayedRowAtIndex(node.rowIndex).setSelected(true);
          // node.selectionChanged();
        }
      });
    }
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .pipe(takeUntil(this.destroy$),debounceTime(250))
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (this._hideOnMobileDevice.length > 0 && this.gridColumnApi) {
            this.gridColumnApi.setColumnsVisible(
              [...this._hideOnMobileDevice],
              false
            );
          }
        } else {
          if (this.gridColumnApi)
            this.gridColumnApi.setColumnsVisible(
              [...this._hideOnMobileDevice],
              true
            );
        }
      });
  }

  ngAfterViewInit() {
    this.pinedData$
      .pipe(takeUntil(this.destroy$), distinctUntilChanged())
      .subscribe((d) => {
        if (this.gridApi && d) {
          if (d.length) {
            this.gridApi.setPinnedBottomRowData(d);
          }
        }
        // if(this.gridApi && d){this.gridApi.setPinnedBottomRowData([...d]);this.gridApi.refreshCells()};
      });
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridApi.hideOverlay();
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged(event: any) {
    let selectedNodes = [...this.gridApi.getSelectedRows()];
    this.selectedNodes.emit({ selectedNodes });
  }

  onCellMouseOver(event: any) {
    this.hoveredNode.emit(event.data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

@Component({
  selector: 'ag-grid-bottomsheet',
  templateUrl: 'ag-grid-bottomsheet.html',
})
export class AgGridBottomSheetComponent {
  renderingData: { [key: string]: any; }={};
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AgGridBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  ngOnInit() {
    this.renderingData = this.renderData();
  }

  renderData() {
    let temp: { [key: string]: any } = {};
    let {columnDefinition} = this.data;
    columnDefinition = columnDefinition.sort((a:any,b:any)=>a.field.localeCompare(b.field))
    for (let colModel of columnDefinition) {
      let field = colModel?.field ? colModel?.field : null;
      if (field) {
        temp[field] = this.data.data[field];
      }
    }


    return temp;
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
