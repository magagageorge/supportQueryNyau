import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { FileComplaintComponent } from './file-complaint/file-complaint.component';
import { EditTicketDetailsComponent } from './edit-ticket-details/edit-ticket-details.component';


const routes: Routes = [
  {path: '', component: DashBoardComponent },
  {path: 'all-tickets', component: AllTicketsComponent},
  {path: 'new-complaint', component: FileComplaintComponent},
  {path: 'all-tickets/:ticketNo', component: AllTicketsComponent},
  {path: 'edit-ticket/:ticketNo', component: EditTicketDetailsComponent},
  {path: 'tickets',loadChildren:'./tickets/tickets.module#TicketsModule'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
