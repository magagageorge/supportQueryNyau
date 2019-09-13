import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuard } from './services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: './admin/admin.module#AdminModule' },
  { path: 'customer', canActivate: [AuthGuard], loadChildren: './customer/customer.module#CustomerModule' },
  { path: 'staff', canActivate: [AuthGuard], loadChildren: './staff/staff.module#StaffModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
