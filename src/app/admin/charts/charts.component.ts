import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { TicketsService } from 'src/app/services2/tickets.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/ticket.model';
import { callbackify } from 'util';
import { filter } from 'minimatch';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  TICKET : Ticket[];
  
  constructor( public ticketService : TicketsService) { 
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[]= ['OPEN', 'NEW', 'SOLVED', 'CLOSED'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [2,4,5,6], label: 'Tickets' },
  ];

  ngOnInit() {
  }

}
