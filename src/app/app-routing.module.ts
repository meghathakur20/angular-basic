import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
;

const routes: Routes = [
  { path: 'userdetails', loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule) },
  { path: 'useractions', loadChildren: () => import('./crud-user/crud-user.module').then(m => m.CrudUserModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }