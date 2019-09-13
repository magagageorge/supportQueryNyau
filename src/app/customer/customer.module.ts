import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { FileComplaintComponent } from './file-complaint/file-complaint.component';
import { FormsModule } from '@angular/forms';
import { EditTicketDetailsComponent } from './edit-ticket-details/edit-ticket-details.component';
import { TicketsService } from 'src/app/services2/tickets.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashBoardComponent, AllTicketsComponent, FileComplaintComponent, EditTicketDetailsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ThemeModule,
    FormsModule,
    NgbModule
  ],
  providers:[TicketsService]

})
export class CustomerModule { }
