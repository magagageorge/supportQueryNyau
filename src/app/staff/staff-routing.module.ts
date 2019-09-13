import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';


const routes: Routes = [
  {path:'', component: DashBoardComponent},
  {path:'all-tickets', component: AllTicketsComponent},
  {path: 'all-tickets/:ticketNo', component : AllTicketsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
