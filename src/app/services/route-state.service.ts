import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteStateService {

  // private pathParamState = new BehaviorSubject<string>();
  // pathParam: Observable<string>;
  constructor() { 
    //this.pathParam = this.pathParamState.asObservable();
  }

  // updatePathParamState(newPathParam: string){
  //   this.pathParamState.next(newPathParam);

  // }
}
