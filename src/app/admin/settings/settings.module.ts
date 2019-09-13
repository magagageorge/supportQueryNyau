import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ThemeModule } from 'src/assets/theme/theme.module';
import { SettingsComponent } from './components/settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ThemeModule,
    NgbModule
  ]
})
export class SettingsModule { }
