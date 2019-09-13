import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-top-nav-menu',
  templateUrl: './top-nav-menu.component.html',
  styleUrls: ['./top-nav-menu.component.css']
})
export class TopNavMenuComponent implements OnInit {

  menuService:MenuService;
  constructor(menuService:MenuService) {
    this.menuService=menuService;
   }

  ngOnInit() {
  }

}
