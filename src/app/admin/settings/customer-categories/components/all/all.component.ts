import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { CustomerCategories } from 'src/app/models/customer-categories.model';

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
    if (this.settingsService.CUSTOMER_CATEGORIES.length == 0) {
      this.settingsService.loadCustomerCategories();
    }
  }

  EditCategory(category: CustomerCategories) {

  }

}
