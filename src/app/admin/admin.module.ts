import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { AddNewComponent } from './add-new/add-new.component';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashBoardComponent, AllTicketsComponent, AddNewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule,
    FormsModule,
    NgbModule
  ],
  providers:[SettingsService]
})
export class AdminModule { }
