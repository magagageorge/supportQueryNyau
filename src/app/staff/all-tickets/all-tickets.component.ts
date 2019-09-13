import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/services/ticket';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  routeId:string;
  route:ActivatedRoute;

  constructor(public ticketService:TicketService,router:Router,route:ActivatedRoute) {
    this.route=route;
  }

  tickets : Ticket[];

  ngOnInit() {
    this.routeId=this.route.snapshot.paramMap.get('ticketNo');
    if(this.routeId!=null){
      this.ticketService.SetActiveTicket(this.routeId);
    }
  }

}
