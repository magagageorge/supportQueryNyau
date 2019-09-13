import { Injectable, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CUSTOMERS } from 'src/app/models/mock-customer';
import { Observable , of } from 'rxjs';
import { CustomerDeleteModalComponent } from 'src/assets/theme/modals/customer-delete-modal/customer-delete-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


const MODALS={
  customerDeleteModel:CustomerDeleteModalComponent
};


@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  CUSTOMER_LIST:Customer[]=[];
  activeCustomer:Customer;
  modalRef:any;


  constructor(private modalService:NgbModal) { 
    this.loadCustomers();
  }


  getCustomers(): Observable<Customer[]>{
    return of (CUSTOMERS);
  }

  loadCustomers(){
    this.getCustomers().subscribe(customers=>this.CUSTOMER_LIST=customers);
  }

  SearchCustomer(id:number):Observable<Customer>{
    return of(this.CUSTOMER_LIST.find((customer:Customer)=>customer.id==id));
}

SetActiveCustomer(id:number){
 this.SearchCustomer(id).subscribe(customer=>{
   this.activeCustomer=customer;
 });
}


confirmDeleteCustomer(customerId:string){
  this.modalRef=this.modalService.open(MODALS['customerDeleteModel']);
  this.modalRef.componentInstance.customerId=customerId;
}

deleteCustomer(customerId:string){
  this.modalRef.close();
   alert(customerId);

   /* an http request should be implemented here for delete operation  in  database */
}

}

