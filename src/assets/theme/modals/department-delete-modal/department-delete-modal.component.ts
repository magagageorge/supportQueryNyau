import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { Departments } from 'src/app/models/departments.model';

@Component({
  selector: 'app-department-delete-modal',
  templateUrl: './department-delete-modal.component.html',
  styleUrls: ['./department-delete-modal.component.css']
})
export class DepartmentDeleteModalComponent implements OnInit {

  @Input() department: Departments;

  constructor(public modal:NgbActiveModal, public settingsService:SettingsService) { }

  ngOnInit() {
  }

}
