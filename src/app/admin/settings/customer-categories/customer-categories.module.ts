import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCategoriesRoutingModule, routed_components} from './customer-categories-routing.module';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [...routed_components],
  imports: [
    CommonModule,
    CustomerCategoriesRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerCategoriesModule { }
