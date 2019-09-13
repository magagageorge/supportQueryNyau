import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-admin-left-menu',
  templateUrl: './admin-left-menu.component.html',
  styleUrls: ['./admin-left-menu.component.css']
})
export class AdminLeftMenuComponent implements OnInit {

  menuService:MenuService;
  constructor(menuService:MenuService) {
    this.menuService=menuService;
   }
  ngOnInit() {
  }

}
