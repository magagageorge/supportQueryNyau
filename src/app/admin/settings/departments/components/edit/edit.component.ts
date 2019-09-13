import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgModel } from '@angular/forms';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { CrudService, CrudProvider, CRUD_OPTIONS, CrudOptions } from 'src/app/@crud';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getDeepFromObject } from 'src/app/@crud/helpers';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  settingsService: SettingsService;
  formGroup: FormGroup;
  config = {};
  model = {id:0,name:''};
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
      name: ['',[Validators.required]],
    });
    this.catId=this.route.snapshot.params.id;
    if(this.catId!=''){
      this.settingsService.SearchDepartment(this.catId).subscribe(department=>{
        if(department){
          this.model=department;
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
   this.crudService.getProvider(this.provider).crudconfig.route_url='utilities/departments/';
   return this.crudService.update(this.provider,this.model,{id:this.model.id}).subscribe(response=>{
     var data=response.getResultData();
     if(response.isSuccess){
        if(data.done){
          _this.settingsService.DEPARTMENTS_LIST.push(data.data);
        }
      // _this.messages.push(response.getMessages);

       _this.router.navigateByUrl('/admin/settings/departments/all');
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

