import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketsService } from 'src/app/services2/tickets.service';

@Component({
  selector: 'app-ticket-delete-modal',
  templateUrl: './ticket-delete-modal.component.html',
  styleUrls: ['./ticket-delete-modal.component.css']
})
export class TicketDeleteModalComponent implements OnInit {

  @Input() ticket : Ticket;


  constructor(public modal:NgbActiveModal,public ticketsService : TicketsService) {

   }

  ngOnInit() {
  }

}
