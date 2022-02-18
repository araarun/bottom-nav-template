import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { NewuserComponent } from './newuser/newuser.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { ForgetpwdNextComponent } from './forgetpwd/forgetpwd-next/forgetpwd-next.component';

const routes: Routes = [
    {
      path: '', component: GuestHomeComponent, children: [
        { path: '', redirectTo: 'login'},
        { path: 'login', component: LoginComponent },
        { path: 'newuser', component: NewuserComponent },
        { path: 'forgetpwd', component: ForgetpwdComponent },
        { path: 'forgetpwd-next', component: ForgetpwdNextComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GuestRoutingModule { }
