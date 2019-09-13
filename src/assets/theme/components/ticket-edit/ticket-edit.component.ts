import { Component, OnInit, Input } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/services/ticket';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {

  tickets : Ticket[] = [];
  @Input() activeTicket:Ticket;

  constructor(public ticketService:TicketService) { }

  ngOnInit() {
  }

}
