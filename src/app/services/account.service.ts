import { Injectable, Inject } from '@angular/core';
import { CrudService, CrudProvider, CRUD_OPTIONS, CrudOptions } from '../@crud';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getDeepFromObject } from '../@crud/helpers';
import { AccountModel } from '../models/account-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

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
  ACCOUNT_INFO:AccountModel=new AccountModel();
  main_module:string;
  
  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,private _modalService:NgbModal,router:Router,private modalService:NgbModal) { 
    this.service=service;
    this.crudConfig=CRUD_OPTIONS;
    this.router=router;
    this.getAccountInfo();
    this.main_module=this.router.url.split("/",2)[1];
  }

  getAccountInfo(){
    var _this=this;
    this.provider = this.getConfigValue('forms.getone.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='account/';

    return this.service.getone(this.provider,{}).subscribe(results=>{
      if(results.isSuccess){
        var data = results.getResultData();
        _this.ACCOUNT_INFO=data;
        console.log(_this.ACCOUNT_INFO);        
        if (_this.ACCOUNT_INFO.account_type.toLowerCase() != (_this.main_module).toLowerCase()) {
          _this.router.navigateByUrl(_this.ACCOUNT_INFO.account_type.toLowerCase());
        }
      }
    }); 
  }


  getConfigValue(key:string):any{
    return getDeepFromObject(this.crudConfig,key,null);
  }
  
}
