import { Component, OnInit } from '@angular/core';
import { TICKETS } from 'src/app/services/mock-ticket';
import { Ticket } from 'src/app/services/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [];
  

  constructor(public ticketService: TicketService) { }

  ngOnInit() {
  }


}
