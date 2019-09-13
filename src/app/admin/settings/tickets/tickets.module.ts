import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule , routed_components} from './tickets-routing.module';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [...routed_components],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class TicketsModule { }
