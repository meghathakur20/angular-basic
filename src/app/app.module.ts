import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ClearUserDetailsComponent } from './clear-user-details/clear-user-details.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserDetailsComponent,
    ClearUserDetailsComponent,
    UserListComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
