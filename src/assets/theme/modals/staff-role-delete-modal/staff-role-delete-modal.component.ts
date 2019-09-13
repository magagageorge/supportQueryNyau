import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { StaffRoles } from 'src/app/models/staff-roles.model';

@Component({
  selector: 'app-staff-role-delete-modal',
  templateUrl: './staff-role-delete-modal.component.html',
  styleUrls: ['./staff-role-delete-modal.component.css']
})
export class StaffRoleDeleteModalComponent implements OnInit {

  @Input() role: StaffRoles;

  constructor(public modal:NgbActiveModal, public settingsService:SettingsService) { }

  ngOnInit() {
  }

}
