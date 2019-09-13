import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/services/ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})

export class TicketDetailsComponent implements OnInit {

  //ticket : Ticket;
  //selectedTicket : Ticket;
  tickets: Ticket[];

  constructor(private ticketService: TicketService, ) { }

  //@Input() ticket: Ticket;

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getTickets()
    .subscribe(tickets => this.tickets = tickets);
    }



}
