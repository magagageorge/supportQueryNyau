import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class  Notification{
  id:number;
  delivered:number;
  seen:number;
  note:string;
  time:string;

}