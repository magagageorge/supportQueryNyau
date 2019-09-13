import { Injectable, Inject } from '@angular/core';
import { TicketCategories } from 'src/app/models/ticket-categories.model';
import { Customer } from 'src/app/models/customer.model';
import { CrudService, CrudProvider, CRUD_OPTIONS, CrudOptions } from 'src/app/@crud';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getDeepFromObject } from 'src/app/@crud/helpers';
import { Observable, of } from 'rxjs';
import { TicketCategoryDeleteModalComponent } from 'src/assets/theme/modals/ticket-category-delete-modal/ticket-category-delete-modal.component';
import { CustomerDeleteModalComponent } from 'src/assets/theme/modals/customer-delete-modal/customer-delete-modal.component';
import { CustomerCategories } from 'src/app/models/customer-categories.model';
import { CustomerCategoryDeleteModalComponent } from 'src/assets/theme/modals/customer-category-delete-modal/customer-category-delete-modal.component';
import { Departments } from 'src/app/models/departments.model';
import { Staff } from 'src/app/models/staff.model';
import { StaffRoles } from 'src/app/models/staff-roles.model';
import { DepartmentDeleteModalComponent } from 'src/assets/theme/modals/department-delete-modal/department-delete-modal.component';
import { StaffDeleteModalComponent } from 'src/assets/theme/modals/staff-delete-modal/staff-delete-modal.component';
import { StaffRoleDeleteModalComponent } from 'src/assets/theme/modals/staff-role-delete-modal/staff-role-delete-modal.component';

const MODALS= {
  TicketCategoryDeleteModal : TicketCategoryDeleteModalComponent,
  CustomerDeleteModal: CustomerDeleteModalComponent,
  CustomerCategoryDeleteModal : CustomerCategoryDeleteModalComponent,
  DepartmentDeleteModal : DepartmentDeleteModalComponent,
  StaffDeleteModal : StaffDeleteModalComponent,
  StaffRoleDeleteModal : StaffRoleDeleteModalComponent,
};

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  TICKET_CATEGORIES:TicketCategories[]=[];
  CUSTOMER_CATEGORIES:CustomerCategories[]=[];
  CUSTOMERS_LIST:Customer[]=[];
  DEPARTMENTS_LIST:Departments[]=[];
  STAFFS_LIST:Staff[]=[];
  STAFF_ROLES:StaffRoles[]=[];
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
  activeCustomer : Customer;

  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,private _modalService:NgbModal,router:Router,private modalService:NgbModal) { 
    this.service=service;
    this.crudConfig=CRUD_OPTIONS;
    this.router=router;
    this.loadTicketCategories();
    this.loadCustomersList();
    this.loadCustomerCategories();
    this.loadStaffsList();
    this.loadDepartmentsList();
    this.loadStaffRoles();
  }



  //Ticket Categories
  loadTicketCategories(){
     this.provider=this.getConfigValue('forms.getall.provider');
     this.service.getProvider(this.provider).crudconfig.route_url='utilities/ticket-categories/';

     return this.service.getall(this.provider,{}).subscribe(results=>{
         if(results.isSuccess){
          var data=results.getResultData();
           this.TICKET_CATEGORIES=data;
           console.log(this.TICKET_CATEGORIES);
         }
     });
  }

  confirmDeleteTicketCat(category:TicketCategories){
    this.modalRef= this.modalService.open(MODALS['TicketCategoryDeleteModal']);
    this.modalRef.componentInstance.category=category;
  }

  deleteTicketCat(category:TicketCategories){
    var _this=this;
    this.provider=this.getConfigValue('forms.delete.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='utilities/ticket-categories/';
    this.service.delete(this.provider,{id:category.id}).subscribe(response=>{
       var data=response.getResultData();
       if(data.isSuccess){
         this.TICKET_CATEGORIES=this.TICKET_CATEGORIES.filter((x:any)=>x.id!==category.id);
       }
    });
    this.modalRef.close();
  }

  SearchTicketCategory(id:string):Observable<TicketCategories>{
    return of(this.TICKET_CATEGORIES.find(category=>(category.id===Number(id))));
  } 





  //Customers
  loadCustomersList(){
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='customer/customers/';

    return this.service.getall(this.provider,{}).subscribe(results=>{
      if(results.isSuccess){
        var data = results.getResultData();
        this.CUSTOMERS_LIST=data;
        console.log(this.CUSTOMERS_LIST);
      }
    }); 
  }

  confirmDeleteCustomer(customer: Customer){
    this.modalRef= this.modalService.open(MODALS['CustomerDeleteModal']);
    this.modalRef.componentInstance.customer=customer;
  }

  deleteCustomer(customer: Customer){
    var _this=this;
    this.provider=this.getConfigValue('forms.delete.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='customer/customers/';
    this.service.delete(this.provider,{id:customer.id}).subscribe(response=>{
       var data=response.getResultData();
       if(data.isSuccess){
         this.CUSTOMERS_LIST=this.CUSTOMERS_LIST.filter((x:any)=>x.id!==customer.id);
       }
    });
    this.modalRef.close();
  }

  SearchCustomer(id:string):Observable<Customer>{
    return of(this.CUSTOMERS_LIST.find(customer=>(customer.id===Number(id))));
  } 

  SetActiveCustomer(id:string){
    this.SearchCustomer(id).subscribe(customer=>{
      this.activeCustomer=customer;
    });
   }



  //Customer Categories
  loadCustomerCategories(){
    this.provider=this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='customer/customer-categories/';

    return this.service.getall(this.provider,{}).subscribe(results=>{
        if(results.isSuccess){
         var data=results.getResultData();
          this.CUSTOMER_CATEGORIES=data;
          console.log(this.CUSTOMER_CATEGORIES);
        }
    });
  }

  confirmDeleteCustomerCat(category:CustomerCategories){
    this.modalRef= this.modalService.open(MODALS['CustomerCategoryDeleteModal']);
    this.modalRef.componentInstance.category=category;
  }

  deleteCustomerCat(category:CustomerCategories){
    var _this=this;
    this.provider=this.getConfigValue('forms.delete.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='customer/customer-categories/';
    this.service.delete(this.provider,{id:category.id}).subscribe(response=>{
       var data=response.getResultData();
       if(data.isSuccess){
         this.CUSTOMER_CATEGORIES=this.CUSTOMER_CATEGORIES.filter((x:any)=>x.id!==category.id);
       }
    });
    this.modalRef.close();
  }

  SearchCustomerCategory(id:string):Observable<CustomerCategories>{
    return of(this.CUSTOMER_CATEGORIES.find(category=>(category.id===Number(id))));
  }




  //Departments
  loadDepartmentsList(){
    this.provider=this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='utilities/departments/';

    return this.service.getall(this.provider,{}).subscribe(results=>{
        if(results.isSuccess){
         var data=results.getResultData();
          this.DEPARTMENTS_LIST=data;
          console.log(this.DEPARTMENTS_LIST);
        }
    }); 
  }

  confirmDeleteDepartment(department: Departments){
    this.modalRef= this.modalService.open(MODALS['DepartmentDeleteModal']);
    this.modalRef.componentInstance.department=department;
  }

  deleteDepartment(department: Departments){
    var _this=this;
    this.provider=this.getConfigValue('forms.delete.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='utilities/departments/';
    this.service.delete(this.provider,{id:department.id}).subscribe(response=>{
       var data=response.getResultData();
       if(data.isSuccess){
         this.DEPARTMENTS_LIST=this.DEPARTMENTS_LIST.filter((x:any)=>x.id!==department.id);
       }
    });
    this.modalRef.close();
  }

  SearchDepartment(id:string):Observable<Departments>{
    return of(this.DEPARTMENTS_LIST.find(department=>(department.id===Number(id))));
  }
  
  

  //Staffs
  loadStaffsList(){
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='staff/staffs/';

    return this.service.getall(this.provider,{}).subscribe(results=>{
      if(results.isSuccess){
        var data = results.getResultData();
        this.STAFFS_LIST=data;
        console.log(this.STAFFS_LIST);
      }
    }); 
  }

  confirmDeleteStaff(staff: Staff){
    this.modalRef= this.modalService.open(MODALS['StaffDeleteModal']);
    this.modalRef.componentInstance.staff=staff;
  }

  deleteStaff(staff: Staff){
    var _this=this;
    this.provider=this.getConfigValue('forms.delete.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='staff/staffs/';
    this.service.delete(this.provider,{id:staff.id}).subscribe(response=>{
       var data=response.getResultData();
       if(data.isSuccess){
         this.STAFFS_LIST=this.STAFFS_LIST.filter((x:any)=>x.id!==staff.id);
       }
    });
    this.modalRef.close();
  }

  SearchStaff(id:string):Observable<Staff>{
    return of(this.STAFFS_LIST.find(staff=>(staff.id===Number(id))));
  }
  
  //Staff Roles
  loadStaffRoles(){
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='staff/staff-roles/';

    return this.service.getall(this.provider,{}).subscribe(results=>{
      if(results.isSuccess){
        var data = results.getResultData();
        this.STAFF_ROLES=data;
        console.log(this.STAFF_ROLES);
      }
    }); 
  }

  confirmDeleteStaffRole(role: StaffRoles){
    this.modalRef= this.modalService.open(MODALS['StaffRoleDeleteModal']);
    this.modalRef.componentInstance.role=role;
  }

  deleteStaffRole(role: StaffRoles){
    var _this=this;
    this.provider=this.getConfigValue('forms.delete.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='staff/staff-roles/';
    this.service.delete(this.provider,{id:role.id}).subscribe(response=>{
       var data=response.getResultData();
       if(data.isSuccess){
         this.STAFF_ROLES=this.STAFF_ROLES.filter((x:any)=>x.id!==role.id);
       }
    });
    this.modalRef.close();
  }

  SearchStaffRole(id:string):Observable<StaffRoles>{
    return of(this.STAFF_ROLES.find(role=>(role.id===Number(id))));
  } 




  getConfigValue(key:string):any{
    return getDeepFromObject(this.crudConfig,key,null)
  }
}
