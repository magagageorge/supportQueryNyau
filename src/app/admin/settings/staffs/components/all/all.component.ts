import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { Staff } from 'src/app/models/staff.model';

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
    if(this.settingsService.STAFFS_LIST.length == 0){
      this.settingsService.loadStaffsList();
    }
  }

  EditStaff(staff: Staff){}

}
