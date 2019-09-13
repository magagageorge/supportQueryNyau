import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { StaffRoles } from 'src/app/models/staff-roles.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  settingsService : SettingsService;
  constructor(settingsService:SettingsService) {
    this.settingsService = settingsService;
   }

  ngOnInit() {
    if(this.settingsService.DEPARTMENTS_LIST.length == 0){
      this.settingsService.loadStaffRoles();
    }
  }

  EditStaffRole(role: StaffRoles){}

}
