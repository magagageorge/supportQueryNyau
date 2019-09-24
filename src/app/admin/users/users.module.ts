import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AllComponent } from './components/all/all.component';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [AllComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class UsersModule { }
