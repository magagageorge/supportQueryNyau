import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { AddNewComponent } from './add-new/add-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from '../User/profile/profile.component';
import { AllComponent } from './Users/components/all/all.component';
import { ProfileAdminComponent } from './profile/profile-admin/profile-admin.component';
import { EditProfileComponent } from '../User/edit-profile/edit-profile.component';


@NgModule({
  declarations: [DashBoardComponent, AllTicketsComponent, AddNewComponent, ProfileComponent, AllComponent, ProfileAdminComponent, EditProfileComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:[SettingsService]
})
export class AdminModule { }
