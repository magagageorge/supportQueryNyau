import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { UsersComponent } from 'src/assets/theme/components/new/users/users.component';
import { AddNewComponent } from './add-new/add-new.component';
import { CustomerCategoriesComponent } from 'src/assets/theme/components/new/customer-categories/customer-categories.component';
import { DepartmentsComponent } from 'src/assets/theme/components/new/departments/departments.component';
import { StaffsComponent } from 'src/assets/theme/components/new/staffs/staffs.component';
import { CustomersComponent } from 'src/assets/theme/components/new/customers/customers.component';
import { SettingsComponent } from './settings/components/settings/settings.component';
import { ProfileComponent } from './AdminProfile/profile/profile.component';
import { EditProfileComponent } from './AdminProfile/edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'',component:DashBoardComponent},
  {path: 'all-tickets', component:AllTicketsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'all-tickets/:ticketNo', component: AllTicketsComponent},
  {path: 'add-new', component: AddNewComponent},
  {path: 'add-new/new-customer', component: CustomersComponent},
  {path: 'add-new/new-customer-category', component: CustomerCategoriesComponent},
  {path: 'add-new/new-department', component: DepartmentsComponent},
  {path: 'add-new/new-staff', component: StaffsComponent},
  {path: 'settings',loadChildren:'./settings/settings.module#SettingsModule'},
  {path: 'profile', component: ProfileComponent},
  {path: 'edit-profile', component: EditProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
