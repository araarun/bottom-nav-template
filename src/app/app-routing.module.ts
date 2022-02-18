import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  { path: 'guest', loadChildren: () => import('./guest/guest.module').then(g => g.GuestModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(g => g.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
