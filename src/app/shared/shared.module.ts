import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumnComponent } from '../container/components/layout/one-column/one-column.component';
import { MaterialModule } from '../material/material.module';
import { UrlMatcherPipe } from './pipes/url-matcher-pipe.pipe';
import { AgGridBottomSheetComponent, TableComponent } from './components/table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { ActionBtnComponent } from './components/action-btn/action-btn.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

const declaration =[UrlMatcherPipe,TableComponent,AgGridBottomSheetComponent]

@NgModule({
  declarations: [
    ...declaration,
    ActionBtnComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    AgGridModule.withComponents([ActionBtnComponent])
  ],
  exports:[...declaration]
})
export class SharedModule { }
