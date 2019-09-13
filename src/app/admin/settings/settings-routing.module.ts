import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'ticket-categories', loadChildren:'./ticket-categories/ticket-categories.module#TicketCategoriesModule' },
  { path:'customer-categories',loadChildren: './customer-categories/customer-categories.module#CustomerCategoriesModule'},
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  { path: 'departments', loadChildren: './departments/departments.module#DepartmentsModule'},
  { path: 'staff-roles', loadChildren: './staff-roles/staff-roles.module#StaffRolesModule'},
  { path: 'staffs', loadChildren: './staffs/staffs.module#StaffsModule'},
  { path: 'tickets', loadChildren: 'src/app/admin/settings/tickets/tickets.module#TicketsModule'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
