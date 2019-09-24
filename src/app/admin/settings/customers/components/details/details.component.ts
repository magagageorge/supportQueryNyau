import { Component, OnInit, Input } from '@angular/core';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { Customer } from 'src/app/models/customer.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  settingsService : SettingsService;
  CUSTOMERS_LIST:Customer[]=[];
  @Input() activeCustomer: Customer;



  constructor(settingsService : SettingsService) {
    this.settingsService = settingsService;
   }

  ngOnInit() {
  }

}
