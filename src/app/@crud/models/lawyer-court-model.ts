import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class  LawyerCourtModel{
  id:number;
  name:string;
  lawyer_id:number;
  created_at:string;
  updated_at:string;
}