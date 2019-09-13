import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { AllComponent } from './components/all/all.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'all', component: AllComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketCategoriesRoutingModule { }

export const routed_components=[AllComponent,CreateComponent,EditComponent];
