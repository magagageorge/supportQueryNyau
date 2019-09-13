import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/services/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-description',
  templateUrl: './ticket-description.component.html',
  styleUrls: ['./ticket-description.component.css']
})
export class TicketDescriptionComponent implements OnInit {

  tickets : Ticket[] = [];
  @Input() activeTicket:Ticket;

  constructor(public ticketService: TicketService) { }

  ngOnInit() {
  }

}
