import { Injectable } from '@angular/core';
import { Ticket } from 'src/app/services/ticket';
import { TICKETS } from 'src/app/services/mock-ticket';
import { Observable, of} from 'rxjs';
import { TicketDeleteModalComponent } from 'src/assets/theme/modals/ticket-delete-modal/ticket-delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

const MODALS={
  ticketDeleteModel : TicketDeleteModalComponent
};

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  TICKET_LIST:Ticket[]=[];
  activeTicket:Ticket;
  modalRef:any;
  
  constructor(private modalService:NgbModal) { 
    this.loadTickets();
  }

  getTickets(): Observable<Ticket[]>{
    return of (TICKETS);
  }

  loadTickets(){
    this.getTickets().subscribe(tickets=>this.TICKET_LIST=tickets);
  }

  SearchTicket(ticketNo:string):Observable<Ticket>{
      return of(this.TICKET_LIST.find((ticket:Ticket)=>ticket.ticketNo==Number(ticketNo)));
  }

  SetActiveTicket(ticketNo:string){
   this.SearchTicket(ticketNo).subscribe(ticket=>{
     this.activeTicket=ticket;
   });
  }

  confirmDeleteTicket(ticketId:number){
    this.modalRef= this.modalService.open(MODALS['ticketDeleteModel']);
    this.modalRef.componentInstance.ticketId=ticketId;
  }

  deleteTicket(ticketId:String){
    this.modalRef.close();
    alert(ticketId);
  }


  
}
