import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudUserComponent } from './crud-user.component';
import { CrudUserService } from './crud-user.service';
import { CrudUserRoutingModule } from './crud-user.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CrudUserRoutingModule
  ],
  declarations: [CrudUserComponent],
  providers:[CrudUserService]
})
export class CrudUserModule { }