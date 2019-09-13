import { Component, OnInit, PipeTransform } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { CUSTOMERS } from 'src/app/models/mock-customer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  customers: Observable<Customer[]>;
  filter = new FormControl('');
  
  constructor(pipe:DecimalPipe) {
    this.customers = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
   }

  ngOnInit() {
  }

}

function search(text: String, pipe: PipeTransform): Customer[] {
  return CUSTOMERS.filter(customer => {
      const term = text.toLowerCase();
      return customer.name.toLowerCase(). includes(term)
      || pipe.transform(customer.id).includes(term);
      });

}
