import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services2/tickets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  routeId:string;
  route: ActivatedRoute;

  constructor(public ticketsService : TicketsService, router:Router, route:ActivatedRoute) { 
    this.route = route;
  }

  ticket : Ticket[];

  ngOnInit() {
    this.routeId=this.route.snapshot.paramMap.get('id');
    if(this.routeId!=null){
      this.ticketsService.SetActiveTicket(this.routeId);
    }
  }

}
