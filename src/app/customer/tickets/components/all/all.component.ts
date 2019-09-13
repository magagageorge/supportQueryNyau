import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services2/tickets.service';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  ticketsService : TicketsService;
  constructor(ticketsService : TicketsService) {
    this.ticketsService = ticketsService;
   }

  ngOnInit() {
    if(this.ticketsService.TICKETS_LIST.length == 0){
      this.ticketsService.loadTicketsList();
    }
  }

  EditTicket(ticket : Ticket){

  }

}
