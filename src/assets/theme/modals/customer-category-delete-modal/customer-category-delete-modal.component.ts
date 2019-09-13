import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { CustomerCategories } from 'src/app/models/customer-categories.model';

@Component({
  selector: 'app-customer-category-delete-modal',
  templateUrl: './customer-category-delete-modal.component.html',
  styleUrls: ['./customer-category-delete-modal.component.css']
})
export class CustomerCategoryDeleteModalComponent implements OnInit {

  @Input() category:CustomerCategories;
 
  constructor(public modal:NgbActiveModal, public settingsService:SettingsService) { }

  ngOnInit() {
  }

}
