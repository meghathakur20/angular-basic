import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUserComponent } from './crud-user.component';

;

const routes: Routes = [
  {path:'', component:CrudUserComponent}

]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudUserRoutingModule { }