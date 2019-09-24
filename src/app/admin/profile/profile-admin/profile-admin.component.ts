import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AccountService } from 'src/app/services/account.service';
import { AccountModel } from 'src/app/models/account-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  accountService:AccountService;
  route:ActivatedRoute;
  
  constructor(accountService:AccountService,route:ActivatedRoute,public router: Router, activatedRoute:ActivatedRoute) {
    this.accountService=accountService;
    this.route=route;
   }
  

  ngOnInit() {

  }

}
