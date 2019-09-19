import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { TicketService } from './services/ticket.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDeleteModalComponent } from 'src/assets/theme/modals/customer-delete-modal/customer-delete-modal.component';
import { TicketDeleteModalComponent } from 'src/assets/theme/modals/ticket-delete-modal/ticket-delete-modal.component';
import { DropdownModalComponent } from 'src/assets/theme/modals/dropdown-modal/dropdown-modal.component';
import { StaffDeleteModalComponent } from 'src/assets/theme/modals/staff-delete-modal/staff-delete-modal.component';
import { AuthModule, EmailPassAuthProvider } from './auth';
import { AuthGuard } from './services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { CrudModule } from './@crud/crud.module';
import { CrudService, CrudProvider } from './@crud';
import { TicketCategoryDeleteModalComponent } from 'src/assets/theme/modals/ticket-category-delete-modal/ticket-category-delete-modal.component';
import { CustomerCategoryDeleteModalComponent } from 'src/assets/theme/modals/customer-category-delete-modal/customer-category-delete-modal.component';
import { StaffRoleDeleteModalComponent } from 'src/assets/theme/modals/staff-role-delete-modal/staff-role-delete-modal.component';
import { DepartmentDeleteModalComponent } from 'src/assets/theme/modals/department-delete-modal/department-delete-modal.component';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ResetPasswordComponent,
    LogoutComponent
  ],

  entryComponents: [CustomerDeleteModalComponent, TicketDeleteModalComponent, StaffDeleteModalComponent, DropdownModalComponent, TicketCategoryDeleteModalComponent, CustomerCategoryDeleteModalComponent, DepartmentDeleteModalComponent, StaffRoleDeleteModalComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgbModule,
    AuthModule.forRoot({
      providers: {
        email: {
          service: EmailPassAuthProvider,
          config: {
            token: { key: 'token,' }
          }
        }
      }
    }),
    CrudModule.forRoot({
      providers: {
        crud: {
          service: CrudProvider,
          config: {
            token: { key: 'token,' }
          }
        }
      }
    })
  ],

  providers: [TicketService,AuthGuard,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
