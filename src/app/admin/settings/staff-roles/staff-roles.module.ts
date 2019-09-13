import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRolesRoutingModule, routed_components } from './staff-roles-routing.module';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [...routed_components],
  imports: [
    CommonModule,
    StaffRolesRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StaffRolesModule { }
