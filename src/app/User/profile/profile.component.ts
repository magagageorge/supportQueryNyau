import { Component, OnInit, Inject, Input } from '@angular/core';
import { SettingsService } from '../../admin/services/settings.service';
import { CrudService, CRUD_OPTIONS, CrudOptions, CrudProvider } from 'src/app/@crud';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getDeepFromObject } from 'src/app/@crud/helpers';
import { AccountModel } from 'src/app/models/account-model';
import { ProfileService } from 'src/app/services/profile.service';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

//   profileService : ProfileService;
//   USER:AccountModel[]=[];
//   @Input() activeUser: AccountModel;

// constructor(profileService : ProfileService){
//   this.profileService = profileService;
// }

accountService:AccountService;
route:ActivatedRoute;

constructor(accountService:AccountService,route:ActivatedRoute,public router: Router, activatedRoute:ActivatedRoute) {
  this.accountService=accountService;
  this.route=route;
 }

 ngOnInit() { }



}
