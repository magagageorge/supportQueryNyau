import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-customer-left-menu',
  templateUrl: './customer-left-menu.component.html',
  styleUrls: ['./customer-left-menu.component.css']
})
export class CustomerLeftMenuComponent implements OnInit {

  menuService: MenuService;
  constructor(menuService: MenuService) {
    this.menuService = menuService;
   }

  ngOnInit() {
  }

}
