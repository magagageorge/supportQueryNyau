import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { TicketCategories } from 'src/app/models/ticket-categories.model';

@Component({
  selector: 'app-ticket-category-delete-modal',
  templateUrl: './ticket-category-delete-modal.component.html',
  styleUrls: ['./ticket-category-delete-modal.component.css']
})
export class TicketCategoryDeleteModalComponent implements OnInit {

  @Input() category: TicketCategories;

  constructor(public modal:NgbActiveModal, public settingsService:SettingsService) { }

  ngOnInit() {
  }

}
