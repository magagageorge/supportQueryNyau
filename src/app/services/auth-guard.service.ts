import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth';
import { AccountService } from './account.service';
import { AccountModel } from '../models/account-model';


@Injectable()
export class AuthGuard implements CanActivate {

  USER: AccountModel = new AccountModel();
  main_module:string;
  
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.main_module=this.router.url.split("/",2)[1];
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated()         
      .pipe(
        take(1),                              
        map((authenticated) => {         
          if (!authenticated){
            this.router.navigate(['/login']);  
            return false;
          }
          return true;
        }),
      )
  }  
  
   IsloggedIn(): boolean {	 
    if(this.authService.isAuthenticated()!=null ){
      return true;
    }else{
      return false;
    }
  }  


}

