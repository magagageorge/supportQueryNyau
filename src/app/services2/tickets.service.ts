import { Injectable, Inject } from '@angular/core';
import { CrudService, CrudProvider, CRUD_OPTIONS, CrudOptions } from 'src/app/@crud';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getDeepFromObject } from 'src/app/@crud/helpers';
import { Observable, of } from 'rxjs';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketDeleteModalComponent } from 'src/assets/theme/modals/ticket-delete-modal/ticket-delete-modal.component';

const MODALS={
  TicketDeleteModal : TicketDeleteModalComponent
};

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  TICKETS_LIST : Ticket[]=[];
  service:CrudService;
  crudprovider:CrudProvider;
  protected crudConfig:{};
  protected router:Router;
  redirectDelay:number;
  showMessages:any;
  provider:string;
  errors:string[];
  messages:string[];
  
  modalRef : any;
  activeTicket : Ticket;

  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,private _modalService:NgbModal,router:Router,private modalService:NgbModal) { 
    this.service=service;
    this.crudConfig=CRUD_OPTIONS;
    this.router=router;
    this.loadTicketsList();

  }

  //Tickets
  loadTicketsList(){
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='utilities/tickets/';

    return this.service.getall(this.provider,{}).subscribe(results=>{
      if(results.isSuccess){
        var data = results.getResultData();
        this.TICKETS_LIST=data;
        console.log(this.TICKETS_LIST);
      }
    }); 
  }

  confirmDeleteTicket(ticket: Ticket){
    this.modalRef= this.modalService.open(MODALS['TicketDeleteModal']);
    this.modalRef.componentInstance.ticket=ticket;
  }

  deleteTicket(ticket: Ticket){
    var _this=this;
    this.provider=this.getConfigValue('forms.delete.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='utilities/tickets/';
    this.service.delete(this.provider,{id:ticket.id}).subscribe(response=>{
       var data=response.getResultData();
       if(data.isSuccess){
         this.TICKETS_LIST=this.TICKETS_LIST.filter((x:any)=>x.id!==ticket.id);
       }
    });
    this.modalRef.close();
  }

  SearchTicket(id:string):Observable<Ticket>{
    return of(this.TICKETS_LIST.find(ticket=>(ticket.id===Number(id))));
  } 

  SetActiveTicket(id:string){
    this.SearchTicket(id).subscribe(ticket=>{
      this.activeTicket=ticket;
    });
   }


  getConfigValue(key:string):any{
    return getDeepFromObject(this.crudConfig,key,null)
  }
}
