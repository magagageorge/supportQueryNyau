import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService, CRUD_OPTIONS, CrudOptions } from 'src/app/@crud';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { getDeepFromObject } from 'src/app/@crud/helpers';
import { SettingsService } from 'src/app/admin/services/settings.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  accountService: AccountService;
  settingsService : SettingsService;
  formGroup: FormGroup;
  config = {};
  model = { id:0, username: '', email: ''};
  messages: any[];
  errors: any[];
  crudService: CrudService;
  submitted: boolean = false;
  router: Router;
  catId: string;
  route: ActivatedRoute;
  provider: string;
  constructor(accountService: AccountService, settingsService : SettingsService, crudService: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private formBuilder: FormBuilder, router: Router, route: ActivatedRoute) {
    this.accountService = accountService;
    this.settingsService = settingsService;
    this.route = route;
    this.router = router;
    this.config = CRUD_OPTIONS;
    this.crudService = crudService;
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: ['',[Validators.required]],
      email:['',[Validators.required]],
    });
    this.catId=this.route.snapshot.params.id;
    if(this.catId!=''){
      this.settingsService.SearchUser(this.catId).subscribe(user=>{
        if(user){
          this.model=user;
        }
      });      
    }
  }

   edit(){
    if(this.submitted || this.formGroup.invalid){
      return;
   }
   var _this=this;
   this.submitted=true;
   this.provider=this.getConfigValue('forms.create.provider');
   this.crudService.getProvider(this.provider).crudconfig.route_url='account/';
   return this.crudService.update(this.provider,this.model,{id:this.model.id}).subscribe(response=>{
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
