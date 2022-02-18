import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';

const routes: Routes = [
    { path: '', component: NavComponent, children: [
        { path: '', redirectTo: 'dashboard' },
        { path: 'main', component: MainComponent },
        { path: 'privacypolicy', component: PrivacyPolicyComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'aside', component: AsideComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
