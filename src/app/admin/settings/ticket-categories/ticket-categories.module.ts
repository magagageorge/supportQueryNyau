import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketCategoriesRoutingModule,routed_components } from './ticket-categories-routing.module';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [...routed_components],
  imports: [
    CommonModule,
    TicketCategoriesRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TicketCategoriesModule { }
