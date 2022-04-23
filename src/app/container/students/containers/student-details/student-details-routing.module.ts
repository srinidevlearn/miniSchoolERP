import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterString } from 'src/app/utility/enums/routerStringDeclaration.enum';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent,
    children: [
      { path: 'list', component: StudentListComponent },
      { path: 'list/:action', component: StudentListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDetailsRoutingModule {}
