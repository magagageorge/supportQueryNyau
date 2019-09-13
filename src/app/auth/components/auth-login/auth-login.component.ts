import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSocialLink, AUTH_OPTIONS, AuthOptions } from '../../auth.options';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getDeepFromObject } from '../../helpers';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

    model: any = {};
    formGroup: FormGroup;
    service: AuthService;
    protected config: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    provider: string;
    social_provider: string;
    errors: string[];
    messages: string[];
    submitted: boolean;
    login_failed: boolean = false;


    constructor(service: AuthService,router: Router, @Inject(AUTH_OPTIONS) AUTH_OPTIONS: AuthOptions, private formBuilder: FormBuilder) {
        this.service = service;

        this.config = AUTH_OPTIONS;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.model = {};
        this.submitted = false;
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');
        this.social_provider = this.getConfigValue('forms.social.provider');
    }

    ngOnInit() {
        var _this = this;
        /* If the loggedin user navigate to this route redirect to feed */
        this.service.isAuthenticated().subscribe(is_authenticated => {
            if (is_authenticated) {
                return _this.router.navigateByUrl('');
            }
        });

        this.formGroup = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }

    login(): void {
        this.submitted = true;
        // stop here if form is invalid
        if (this.formGroup.invalid) {
            return;
        }
        var _this = this;
        this.errors = this.messages = [];
        this.service.authenticate(this.provider, this.model).subscribe(function (result) {
            _this.submitted = false;
            var res_data = result.getResponse();
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
                window.location.reload();
            }
            else {
                _this.errors = result.getErrors();
                console.log(res_data);
            }

            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });

    }

    getConfigValue(key: string): any {
        return getDeepFromObject(this.config, key, null);
    }

}
