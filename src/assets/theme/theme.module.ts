import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLeftMenuComponent } from './components/admin-left-menu/admin-left-menu.component';
import { CustomerLeftMenuComponent } from './components/customer-left-menu/customer-left-menu.component';
import { StaffLeftMenuComponent } from './components/staff-left-menu/staff-left-menu.component';
import { TopNavMenuComponent } from './components/top-nav-menu/top-nav-menu.component';
import { MainContentComponent } from './layouts/main-content/main-content.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';
import { CustomerLayoutComponent } from './layouts/customer-layout/customer-layout.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { RouterModule } from '@angular/router';
import { TicketDescriptionComponent } from './components/ticket-description/ticket-description.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchComponent } from './components/search/search.component';
import { CustomersComponent } from './components/new/customers/customers.component';
import { CustomerCategoriesComponent } from './components/new/customer-categories/customer-categories.component';
import { DepartmentsComponent } from './components/new/departments/departments.component';
import { StaffsComponent } from './components/new/staffs/staffs.component';
import { UsersComponent } from './components/new/users/users.component';
import { CustomerDeleteModalComponent } from './modals/customer-delete-modal/customer-delete-modal.component';
import { TicketDeleteModalComponent } from './modals/ticket-delete-modal/ticket-delete-modal.component';
import { StaffDeleteModalComponent } from './modals/staff-delete-modal/staff-delete-modal.component';
import { DropdownModalComponent } from './modals/dropdown-modal/dropdown-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { TicketEditComponent } from './components/ticket-edit/ticket-edit.component';
import { TicketCategoryDeleteModalComponent } from './modals/ticket-category-delete-modal/ticket-category-delete-modal.component';
import { CustomerCategoryDeleteModalComponent } from './modals/customer-category-delete-modal/customer-category-delete-modal.component';
import { DepartmentDeleteModalComponent } from './modals/department-delete-modal/department-delete-modal.component';
import { StaffRoleDeleteModalComponent } from './modals/staff-role-delete-modal/staff-role-delete-modal.component';
 

@NgModule({
  declarations: [AdminLeftMenuComponent, CustomerLeftMenuComponent, StaffLeftMenuComponent, TopNavMenuComponent, MainContentComponent, AdminLayoutComponent, StaffLayoutComponent, CustomerLayoutComponent, TicketListComponent, TicketDetailsComponent, TicketDescriptionComponent, SearchComponent, CustomersComponent, CustomerCategoriesComponent, DepartmentsComponent, StaffsComponent, UsersComponent, CustomerDeleteModalComponent, TicketDeleteModalComponent, StaffDeleteModalComponent , DropdownModalComponent, ProfileComponent, TicketEditComponent, TicketCategoryDeleteModalComponent, CustomerCategoryDeleteModalComponent, DepartmentDeleteModalComponent, StaffRoleDeleteModalComponent],
  exports: [AdminLeftMenuComponent, CustomerLeftMenuComponent, StaffLeftMenuComponent, TopNavMenuComponent, MainContentComponent, AdminLayoutComponent, StaffLayoutComponent, CustomerLayoutComponent, TicketListComponent, TicketDetailsComponent,  TicketDescriptionComponent, SearchComponent, CustomersComponent, CustomerCategoriesComponent, DepartmentsComponent, StaffsComponent, UsersComponent, CustomerDeleteModalComponent, TicketDeleteModalComponent, StaffDeleteModalComponent, DropdownModalComponent, ProfileComponent, TicketEditComponent,TicketCategoryDeleteModalComponent, CustomerCategoryDeleteModalComponent, DepartmentDeleteModalComponent, StaffRoleDeleteModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ThemeModule { }
