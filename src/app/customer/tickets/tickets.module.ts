import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule, routed_components } from './tickets-routing.module';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [...routed_components],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    ThemeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TicketsModule { }
