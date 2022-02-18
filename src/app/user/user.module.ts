import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { HeaderWithMenuComponent } from './header/header-with-menu/header-with-menu.component';
import { HeaderWithoutMenuComponent } from './header/header-without-menu/header-without-menu.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [UserHomeComponent, DashboardComponent, HeaderComponent, NavComponent, MainComponent,
    AsideComponent, FooterComponent, PrivacyPolicyComponent,
    HeaderWithMenuComponent, HeaderWithoutMenuComponent],
  imports: [
    CommonModule,MatSlideToggleModule,MatFormFieldModule,FormsModule, ReactiveFormsModule,
    UserRoutingModule,MatCardModule,MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatSidenavModule,MatButtonModule
  ]
})
export class UserModule { }
