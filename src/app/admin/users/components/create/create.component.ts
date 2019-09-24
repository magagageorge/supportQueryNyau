import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService, CRUD_OPTIONS, CrudOptions } from 'src/app/@crud';
import { Router, ActivatedRoute } from '@angular/router';
import { getDeepFromObject } from 'src/app/@crud/helpers';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  settingsService: SettingsService;
  formGroup: FormGroup;
  config = {};
  model = {id:0,username:'', account_type:'',email:'', status: '10'};
  messages: any[];
  errors: any[];
  crudService: CrudService;
  submitted:boolean=false;
  router:Router;
  catId:string;
  route:ActivatedRoute;
  provider:string;
  constructor(settingsService: SettingsService, crudService: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private formBuilder: FormBuilder,router:Router,route:ActivatedRoute) {
    this.settingsService = settingsService;
    this.route=route;
    this.router=router;
    this.config=CRUD_OPTIONS;
    this.crudService=crudService;
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: ['',[Validators.required]],
      account_type: ['',[Validators.required]],
      email: ['',[Validators.required]],

    });
  }

  create(){
    if(this.submitted || this.formGroup.invalid){
       return;
    }
    var _this=this;
    this.submitted=true;
    this.provider=this.getConfigValue('forms.create.provider');
    this.crudService.getProvider(this.provider).crudconfig.route_url='account/';
    return this.crudService.create(this.provider,this.model).subscribe(response=>{
      var data=response.getResultData();
      if(response.isSuccess){
         if(data.done){
           _this.settingsService.USERS.push(data.data);
         }
       // _this.messages.push(response.getMessages);

        _this.router.navigateByUrl('/admin/users/all');
      }else{
        _this.errors.push(response.getErrors());
      }
    })
  }

  get f() { return this.formGroup.controls; }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }

}
