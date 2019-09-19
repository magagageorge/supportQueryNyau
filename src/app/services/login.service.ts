import { Injectable, Inject } from '@angular/core';
import { CrudService, CRUD_OPTIONS, CrudOptions, CrudProvider } from '../@crud';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AccountModel } from '../models/account-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  service:CrudService;
  crudprovider:CrudProvider;
  protected crudConfig:{};
  protected router:Router;
  redirectDelay:number;
  showMessages:any;
  provider:string;
  errors:string[];
  messages:string[]; 
  USER:AccountModel; 

  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,private _modalService:NgbModal,router:Router,private modalService:NgbModal) {
    this.service=service;
    this.crudConfig=CRUD_OPTIONS;
    this.router=router; 
  }

  

}
