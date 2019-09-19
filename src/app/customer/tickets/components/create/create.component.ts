import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { CrudService, CrudProvider, CRUD_OPTIONS, CrudOptions } from 'src/app/@crud';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getDeepFromObject } from 'src/app/@crud/helpers';
import { TicketsService } from 'src/app/services2/tickets.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  ticketsService: TicketsService;
  formGroup: FormGroup;
  config = {};
  model = { id: 0, title: '', ticketNo:0 , status: 'NEW', category_id: 2, customer_id: 5 };
  messages: any[];
  errors: any[];
  crudService: CrudService;
  submitted: boolean = false;
  router: Router;
  catId: string;
  route: ActivatedRoute;
  provider: string;
  constructor(ticketsService: TicketsService, crudService: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private formBuilder: FormBuilder, router: Router, route: ActivatedRoute) {
    this.ticketsService = ticketsService;
    this.route = route;
    this.router = router;
    this.config = CRUD_OPTIONS;
    this.crudService = crudService;
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required]],
      // ticketNo: [, [Validators.required]],
      // status: ['', [Validators.required]],
    });
  }

  create() {
    if (this.submitted || this.formGroup.invalid) {
      return;
    }
    var _this = this;
    this.submitted = true;
    this.provider = this.getConfigValue('forms.create.provider');
    this.crudService.getProvider(this.provider).crudconfig.route_url = 'utilities/tickets/';
    return this.crudService.create(this.provider, this.model).subscribe(response => {
      var data = response.getResultData();
      if (response.isSuccess) {
        if (data.done) {
          _this.ticketsService.TICKETS_LIST.push(data.data);
        }
        // _this.messages.push(response.getMessages);

        _this.router.navigateByUrl('/customer/tickets/all');
      } else {
        _this.errors.push(response.getErrors());
      }
    })
  }

  get f() { return this.formGroup.controls; }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }

}
