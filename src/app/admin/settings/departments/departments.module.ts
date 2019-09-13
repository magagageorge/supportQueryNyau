import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule, routed_components } from './departments-routing.module';

import { ThemeModule } from 'src/assets/theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [...routed_components],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartmentsModule { }


