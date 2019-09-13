import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/services/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-edit-ticket-details',
  templateUrl: './edit-ticket-details.component.html',
  styleUrls: ['./edit-ticket-details.component.css']
})
export class EditTicketDetailsComponent implements OnInit {

  tickets : Ticket[];
  
  constructor(public ticketService: TicketService) { }

  ngOnInit() {
  }

}
