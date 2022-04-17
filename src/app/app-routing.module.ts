import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouterString } from './utility/enums/routerStringDeclaration.enum';

const routes: Routes = [
  {
    path: RouterString.AUTH,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  },
  {
    path: RouterString.CONTAINER,
    loadChildren: () =>
      import('./container/container.module').then((m) => m.ContainerModule),
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  },
  { path: '', redirectTo: RouterString.CONTAINER, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
