import { Injectable, Inject } from '@angular/core';
import { CrudService, CRUD_OPTIONS, CrudOptions, CrudProvider } from '../@crud';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AccountModel } from '../models/account-model';
import { getDeepFromObject } from '../@crud/helpers';
import { AuthGuard } from './auth-guard.service';

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
  authGuardService : AuthGuard;
  USER: AccountModel = new AccountModel();

  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,private _modalService:NgbModal,router:Router,private modalService:NgbModal,
   authGuardService : AuthGuard
  ) {
    this.service=service;
    this.crudConfig=CRUD_OPTIONS;
    this.router=router; 
    this.authGuardService= authGuardService;
  }

  getUserInfo(){
    this.provider = this.getConfigValue('forms.getone.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='account/';

    return this.service.getone(this.provider,{}).subscribe(results=>{
      if(results.isSuccess){
        var data = results.getResultData();
        this.USER=data;
        console.log(this.USER); 


      }
    });
  }

  getConfigValue(key:string):any{
    return getDeepFromObject(this.crudConfig,key,null);
  }

}
