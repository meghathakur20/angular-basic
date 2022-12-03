import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSubmitSelectionComponent } from './user-submit-selection/user-submit-selection.component';
import { UserDetailsComponent } from './user-details.component';
import { ClearUserDetailsComponent } from './clear-user-details/clear-user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLandingComponent } from './user-landing/user-landing.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UserDetailsComponent,
    ClearUserDetailsComponent,
    UserListComponent,
    UserSubmitSelectionComponent,
    UserLandingComponent,
  ],
})
export class UserDetailsModule {}
