import { Component, OnInit, Input } from '@angular/core';
import { TicketsService } from 'src/app/services2/tickets.service';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  ticketsService : TicketsService;
  TICKETS_LIST: Ticket[]=[];
  @Input() activeTicket: Ticket;

  constructor(ticketsService : TicketsService) {
    this.ticketsService = ticketsService;
   }

  ngOnInit() {
  }

}
