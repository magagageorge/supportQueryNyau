import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule, routed_components } from './customers-routing.module';

import { ThemeModule } from 'src/assets/theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [...routed_components],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
