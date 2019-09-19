import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { CrudService, CRUD_OPTIONS, CrudOptions, CrudProvider } from 'src/app/@crud';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { getDeepFromObject } from 'src/app/@crud/helpers';
import { AccountModel } from 'src/app/models/account-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  service:CrudService;
  crudprovider:CrudProvider;
  protected crudConfig:{};
  protected router:Router;
  redirectDelay:number;
  showMessages:any;
  provider:string;
  errors:string[];
  messages:string[];
  USER: AccountModel = new AccountModel();
  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,private _modalService:NgbModal,router:Router,private modalService:NgbModal) { 
    this.service = service;
    this.crudConfig = CRUD_OPTIONS;
    this.router = router;
  }

  loadUserProfile(){
    this.provider = this.getConfigValue('forms.getone.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='account/';

    return this.service.getall(this.provider,{}).subscribe(results=>{
      if(results.isSuccess){
        var data = results.getResultData();
        this.USER=data;
        console.log(this.USER);
      }
    }); 
  }

  ngOnInit() {
  }

  getConfigValue(key:string):any{
    return getDeepFromObject(this.crudConfig,key,null)
  }

}
