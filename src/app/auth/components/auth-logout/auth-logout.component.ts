import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { getDeepFromObject } from 'src/app/@crud/helpers';
import { AuthService, AUTH_OPTIONS, AuthOptions } from '../..';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.scss']
})
export class AuthLogoutComponent implements OnInit {

    protected service: AuthService;
    protected config: {};
    protected router: Router;
    redirectDelay: number;
    provider: string;
	
    constructor(service: AuthService,router: Router,@Inject(AUTH_OPTIONS) AUTH_OPTIONS:AuthOptions) {
        this.service = service;
        this.config = AUTH_OPTIONS;  		
        this.router = router;
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.provider = this.getConfigValue('forms.logout.provider');
	}

    ngOnInit() {
         this.logout(this.provider);
    }

    logout(provider: string): void{
        var _this = this;
        this.service.logout(provider).subscribe(result=>{
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    }

    getConfigValue(key: string): any{
        return getDeepFromObject(this.config, key, null);
    }	


}
