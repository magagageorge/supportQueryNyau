import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-staff-left-menu',
  templateUrl: './staff-left-menu.component.html',
  styleUrls: ['./staff-left-menu.component.css']
})
export class StaffLeftMenuComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit() {
  }

}
