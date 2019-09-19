import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  accountService: AccountService;
  router: Router;
  main_module: string;
  constructor(accountService: AccountService, router: Router) {
    this.accountService = accountService;
    this.router = router;
    // this.main_module=this.router.url.split("/",2)[1];

   }

   ngOnInit(){
     
   }

}
