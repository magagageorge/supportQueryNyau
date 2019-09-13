import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer.model';
import { SettingsService } from 'src/app/admin/services/settings.service';

@Component({
  selector: 'app-customer-delete-modal',
  templateUrl: './customer-delete-modal.component.html',
  styleUrls: ['./customer-delete-modal.component.css']
})
export class CustomerDeleteModalComponent implements OnInit {

  @Input() customer:Customer;
  modal:NgbActiveModal;
  
  constructor(modal:NgbActiveModal, public settingsService:SettingsService) {
    this.modal=modal;
   }

  ngOnInit() {
  }

}
