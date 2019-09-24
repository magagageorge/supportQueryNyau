import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-admin-left-menu',
  templateUrl: './admin-left-menu.component.html',
  styleUrls: ['./admin-left-menu.component.css']
})
export class AdminLeftMenuComponent implements OnInit {

  menuService:MenuService;
  accountService : AccountService;
  constructor(menuService:MenuService, accountService : AccountService) {
    this.menuService=menuService;
    this.accountService = accountService;
   }
  ngOnInit() {
  }

}
