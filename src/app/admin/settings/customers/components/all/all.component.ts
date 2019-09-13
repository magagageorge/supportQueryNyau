import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  settingsService:SettingsService;

  constructor(settingsService:SettingsService) {
    this.settingsService = settingsService;
  }

  ngOnInit() {
    if(this.settingsService.CUSTOMERS_LIST.length==0){
      this.settingsService.loadCustomersList();
    }
  }

  EditCustomer(customer: Customer){

  }

}
