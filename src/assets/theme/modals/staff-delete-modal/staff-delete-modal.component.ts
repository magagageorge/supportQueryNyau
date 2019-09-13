import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StaffService } from 'src/app/services/staff.service';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { Staff } from 'src/app/models/staff.model';

@Component({
  selector: 'app-staff-delete-modal',
  templateUrl: './staff-delete-modal.component.html',
  styleUrls: ['./staff-delete-modal.component.css']
})
export class StaffDeleteModalComponent implements OnInit {

  @Input() staff: Staff;


  
  constructor(public modal:NgbActiveModal,public settingsService: SettingsService) { }

  ngOnInit() {
  }

}
