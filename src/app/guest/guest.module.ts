import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ForgetpwdNextComponent } from './forgetpwd/forgetpwd-next/forgetpwd-next.component';

@NgModule({
  declarations: [
    GuestHomeComponent, LoginComponent, NewuserComponent, ForgetpwdComponent, ForgetpwdNextComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GuestRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,MatIconModule
  ]
})
export class GuestModule { }
