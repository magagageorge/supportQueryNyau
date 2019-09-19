import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'all', component: AllComponent },
  //{ path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'details/:id', component: DetailsComponent},
  { path: 'ticket-details/:id', component: TicketDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }

export const routed_components=[AllComponent,CreateComponent,EditComponent, TicketDetailsComponent, DetailsComponent];

