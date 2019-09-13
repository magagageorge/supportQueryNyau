import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/admin/services/settings.service';
import { Customer } from 'src/app/models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  routeId:string;
  route:ActivatedRoute;

  constructor(public settingsService:SettingsService,router:Router,route:ActivatedRoute) {
    this.route=route;
  }

  customer : Customer[];

  ngOnInit() {
    this.routeId=this.route.snapshot.paramMap.get('id');
    if(this.routeId!=null){
      this.settingsService.SetActiveCustomer(this.routeId);
    }
  }

}
