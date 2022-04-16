import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { RootContainerComponents } from './container.component';
import { MaterialModule } from '../material/material.module';
import { OneColumnComponent } from './components/layout/one-column/one-column.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RootContainerComponents,OneColumnComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
