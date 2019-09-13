import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { TicketCategories } from 'src/app/models/ticket-categories.model';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  settingsService: SettingsService;

  constructor(settingsService: SettingsService) {
    this.settingsService = settingsService;
  }

  ngOnInit() {
    if (this.settingsService.TICKET_CATEGORIES.length == 0) {
      this.settingsService.loadTicketCategories();
    }
  }

  EditCategory(category: TicketCategories) {

  }

}
