import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute, Router} from '@angular/router';
import { RouteStateService } from 'src/app/services/route-state.service';

@Component({
  selector: 'app-top-nav-menu',
  templateUrl: './top-nav-menu.component.html',
  styleUrls: ['./top-nav-menu.component.css']
})
export class TopNavMenuComponent implements OnInit {

  menuService:MenuService;
  accountService:AccountService;
  route:ActivatedRoute;
  main_module:string;
  constructor(menuService:MenuService,accountService:AccountService,route:ActivatedRoute,public router: Router, activatedRoute:ActivatedRoute) {
    this.menuService=menuService;
    this.accountService=accountService;
    this.route=route;
    this.main_module=this.router.url.split("/",2)[1];
   }

  ngOnInit() {
   if(this.accountService.ACCOUNT_INFO.account_type){
    if(this.accountService.ACCOUNT_INFO.account_type.toLowerCase()!=(this.main_module).toLowerCase()){
      this.router.navigateByUrl(this.accountService.ACCOUNT_INFO.account_type.toLowerCase());
    }
   }


  }

}
