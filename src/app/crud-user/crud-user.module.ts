import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUserComponent } from './crud-user.component';
import { CrudUserService } from './crud-user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CrudUserComponent],
  providers:[CrudUserService]
})
export class CrudUserModule { }