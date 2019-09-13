import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class  ServiceCategoryModel{
  id:number;
  parent_id:number;
  name:string;
  url:string;
  active:number;
}