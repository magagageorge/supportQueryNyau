import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule, routed_components } from './staffs-routing.module';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [...routed_components],
  imports: [
    CommonModule,
    StaffsRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StaffsModule { }
