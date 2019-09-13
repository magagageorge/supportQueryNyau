import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';


@NgModule({
  declarations: [DashBoardComponent, AllTicketsComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    ThemeModule
  ]
})
export class StaffModule { }
