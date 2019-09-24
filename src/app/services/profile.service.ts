import { Injectable, Inject } from '@angular/core';
import { CrudService, CrudProvider, CRUD_OPTIONS, CrudOptions } from '../@crud';
import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AccountModel } from '../models/account-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getDeepFromObject } from '../@crud/helpers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

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
  USER : AccountModel[] = [];
  //USER : AccountModel = new AccountModel();
  activeUser : AccountModel;
  

  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,private _modalService:NgbModal,router:Router,private modalService:NgbModal,
   authGuardService : AuthGuard
  ) {
    this.service=service;
    this.crudConfig=CRUD_OPTIONS;
    this.router=router; 
    this.loadUserInfo();
  }

  loadUserInfo(){
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='account/';

    return this.service.getall(this.provider,{}).subscribe(results=>{
      if(results.isSuccess){
        var data = results.getResultData();
        this.USER=data;
        console.log(this.USER); 
      }
    });
  }

  SearchUser(id:string):Observable<AccountModel>{
    return of(this.USER.find(AccountModel=>(AccountModel.id===Number(id))));
  } 

  SetActiveUser(id:string){
    this.SearchUser(id).subscribe(AccountModel=>{
      this.activeUser=AccountModel;
    });
   }





  getConfigValue(key:string):any{
    return getDeepFromObject(this.crudConfig,key,null);
  }
}
