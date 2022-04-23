import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterString } from 'src/app/utility/enums/routerStringDeclaration.enum';

const routes: Routes = [
  {
    path: RouterString.STUDENTDETAILS,
    loadChildren: () =>
      import('./containers/student-details/student-details.module').then(
        (m) => m.StudentDetailsModule
      ),
  },
  {path:'',redirectTo:RouterString.STUDENTDETAILS,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
