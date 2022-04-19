import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UserListComponent, UserEditComponent, UserListItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
