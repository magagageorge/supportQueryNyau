import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketsService } from 'src/app/services2/tickets.service';

@Component({
  selector: 'app-charts1',
  templateUrl: './charts1.component.html',
  styleUrls: ['./charts1.component.css']
})
export class Charts1Component implements OnInit {

  ticket : Ticket[];
  Status = [];
  TicketNo = [];
  barchart = [];
  url = this.ticketService.loadTicketsList;

  constructor(private http: HttpClient, public ticketService : TicketsService ) { }

  // ngOnInit() {
  //   this.http.get(this.url).subscribe((result : Ticket[]) => {
  //     result.forEach(x => {
  //       this.TicketNo.push(x.id);
  //       this.Status.push(x.status);
  //     });
  //     this
  //     this.barchart = new Chart('canvas', {
  //       type: 'bar',
  //       data: {
  //         labels: this.Status,
  //         datasets: [
  //           {
  //             data: this.TicketNo,
  //             borderColor: '#3cb371',  
  //             backgroundColor: "#0000FF", 
  //           }
  //         ]
  //       },
  //       options: {  
  //         legend: {  
  //           display: false  
  //         },  
  //         scales: {  
  //           xAxes: [{  
  //             display: true  
  //           }],  
  //           yAxes: [{  
  //             display: true  
  //           }],  
  //         }  
  //       }
  //     });
  //   });
  // }

  ngOnInit(){}

}
