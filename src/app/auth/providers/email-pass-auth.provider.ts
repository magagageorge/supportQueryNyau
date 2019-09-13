import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { EmailPassAuthProviderConfig } from './email-pass-auth.options';
import { AuthResult } from '../services/auth-result';
import { AbstractAuthProvider } from './abstract-auth.provider';
import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { getDeepFromObject } from '../helpers';

/**
 * The most common authentication provider for email/password strategy.
 *
 *
 * @example
 *
 * Default settings object:
 *
 * ```
 * {
 *  baseEndpoint: '',
 *  login: {
 *    alwaysFail: false,
 *    rememberMe: true,
 *    endpoint: '/api/auth/login',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Login/Email combination is not correct, please try again.'],
 *    defaultMessages: ['You have been successfully logged in.'],
 *  },
 *  register: {
 *    alwaysFail: false,
 *    rememberMe: true,
 *    endpoint: '/api/auth/register',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully registered.'],
 *  },
 *  logout: {
 *    alwaysFail: false,
 *    endpoint: '/api/auth/logout',
 *    method: 'delete',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['You have been successfully logged out.'],
 *  },
 *  requestPass: {
 *    endpoint: '/api/auth/request-pass',
 *    method: 'post',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Reset password instructions have been sent to your email.'],
 *  },
 *  resetPass: {
 *    endpoint: '/api/auth/reset-pass',
 *    method: 'put',
 *    redirect: {
 *      success: '/',
 *      failure: null,
 *    },
 *    resetPasswordTokenKey: 'reset_password_token',
 *    defaultErrors: ['Something went wrong, please try again.'],
 *    defaultMessages: ['Your password has been successfully changed.'],
 *  },
 *  token: {
 *    key: 'data.token',
 *    getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
 *      this.getConfigValue('token.key')),
 *  },
 *  errors: {
 *    key: 'data.errors',
 *    getter: (module: string, res: HttpErrorResponse) => getDeepFromObject(res.error,
 *      this.getConfigValue('errors.key'),
 *      this.getConfigValue(`${module}.defaultErrors`)),
 *  },
 *  messages: {
 *    key: 'data.messages',
 *    getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
 *      this.getConfigValue('messages.key'),
 *      this.getConfigValue(`${module}.defaultMessages`)),
 *  },
 *}
 *
 * // Note, there is no need to copy over the whole object to change the settings you need.
 * // Also, this.getConfigValue call won't work outside ofthe default config declaration
 * // (which is inside of the `EmailPassAuthProvider` class), so you have to replace it with a custom helper function
 * // if you need it.
 * ```
 */
export class EmailPassAuthProvider extends AbstractAuthProvider {
    clear(data?: any): Observable<AuthResult> {
        throw new Error("Method not implemented.");
    }
    protected http: HttpClient;
    private route;
    protected defaultConfig: EmailPassAuthProviderConfig;
    constructor(http: HttpClient, route: ActivatedRoute) {
        super();
        var _this = this;
        _this.defaultConfig = {
            baseEndpoint: 'http://localhost/Cats-Support/frontend/web/auth/',
            login: {
                alwaysFail: false,
                rememberMe: true,
                // TODO: what does that mean?
                endpoint: 'login',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Wrong Username or Password, please try again.'],
                defaultMessages: ['You have been successfully logged in.'],
            },
            register: {
                alwaysFail: false,
                rememberMe: true,
                endpoint: 'register',
                method: 'post',
                redirect: {
                    success: '/start',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully registered.'],
            },
            logout: {
                alwaysFail: false,
                endpoint: 'logout',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['You have been successfully logged out.'],
            },
            requestPass: {
                endpoint: 'request-password-reset',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Reset password instructions have been sent to your email.'],
            },
            verifyCode: {
                alwaysFail: false,
                rememberMe: true,
                endpoint: 'verify-code',
                method: 'put',
                redirect: {
                    success: '/reset-password',
                    failure: null,
                },
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Reset Code Verified.'],
            },
            resetPass: {
                endpoint: 'reset-password',
                method: 'put',
                redirect: {
                    success: '/',
                    failure: null,
                },
                resetPasswordTokenKey: 'reset_password_token',
                defaultErrors: ['Something went wrong, please try again.'],
                defaultMessages: ['Your password has been successfully changed.'],
            },
            token: {
                key: 'data.token',
                getter: function (module, res) {
                    return getDeepFromObject(res.body, _this.getConfigValue('token.key').replace(',',''));
                },
            },
            errors: {
                key: 'data.errors',
                getter: function (module, res) {
                    return getDeepFromObject(res.error, _this.getConfigValue('errors.key'), _this.getConfigValue(module + ".defaultErrors"));
                },
            },
            messages: {
                key: 'data.messages',
                getter: function (module, res) {
                    return getDeepFromObject(res.body, _this.getConfigValue('messages.key'), _this.getConfigValue(module + ".defaultMessages"));
                },
            },
        };

        _this.http = http;
        _this.route = route;
        return _this;
    }
    authenticate(data?: any): Observable<AuthResult> {
        var _this = this;
        var method = this.getConfigValue('login.method');
        var url = this.getActionEndpoint('login');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
                if (_this.getConfigValue('login.alwaysFail')) {
                    throw _this.createFailResponse(data);
                }
                return res;
            }), this.validateToken('login'), map(function (res) {
                return new AuthResult(true, res, _this.getConfigValue('login.redirect.success'), [], _this.getConfigValue('messages.getter')('login', res), _this.getConfigValue('token.getter')('login', res));
            }), catchError(function (res) {
                var errors = [];
                if (res instanceof HttpErrorResponse) {
                    errors = _this.getConfigValue('errors.getter')('login', res);
                }
                else {
                    errors.push('Something went wrong,please check your Internet Connection.');

                    errors.push(res);
                }
                return observableOf(new AuthResult(false, res, _this.getConfigValue('login.redirect.failure'), errors));
            }));
    }
    register(data?: any): Observable<AuthResult> {
        var _this = this;
        var method = this.getConfigValue('register.method');
        var url = this.getActionEndpoint('register');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
                if (_this.getConfigValue('register.alwaysFail')) {
                    throw _this.createFailResponse(data);
                }
                return res;
            }), this.validateToken('register'), map(function (res) {
                return new AuthResult(true, res, _this.getConfigValue('register.redirect.success'), [], _this.getConfigValue('messages.getter')('register', res), _this.getConfigValue('token.getter')('register', res));
            }), catchError(function (res) {
                var errors = [];
                if (res instanceof HttpErrorResponse) {
                    if (res.status === 422) {
                        errors.push('This email has already been registered.If you have previously signed up with this email please try to login with it.');
                    } else {
                        errors = _this.getConfigValue('errors.getter')('register', res);
                    }

                }
                else {
                    errors.push('Something went wrong.');
                }
                return observableOf(new AuthResult(false, res, _this.getConfigValue('register.redirect.failure'), errors));
            }));
    }
    requestPassword(data?: any): Observable<AuthResult> {
        var _this = this;
        var method = this.getConfigValue('requestPass.method');
        var url = this.getActionEndpoint('requestPass');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
                if (_this.getConfigValue('requestPass.alwaysFail')) {
                    throw _this.createFailResponse();
                }
                return res;
            }), map(function (res) {
                return new AuthResult(true, res, _this.getConfigValue('requestPass.redirect.success'), [], _this.getConfigValue('messages.getter')('requestPass', res));
            }), catchError(function (res) {
                var errors = [];
                if (res instanceof HttpErrorResponse) {
                    errors = _this.getConfigValue('errors.getter')('requestPass', res);
                }
                else {
                    errors.push('Something went wrong.');
                }
                return observableOf(new AuthResult(false, res, _this.getConfigValue('requestPass.redirect.failure'), errors));
            }));
    }
    verifyCode(data?: any): Observable<AuthResult> {
        var _this = this;
        var method = this.getConfigValue('verifyCode.method');
        var url = this.getActionEndpoint('verifyCode');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
                if (_this.getConfigValue('verifyCode.alwaysFail')) {
                    throw _this.createFailResponse();
                }
                return res;
            }), this.validateToken('verifyCode'), map(function (res) {
                return new AuthResult(true, res, _this.getConfigValue('verifyCode.redirect.success'), [], _this.getConfigValue('messages.getter')('verifyCode', res), _this.getConfigValue('token.getter')('verifyCode', res));
            }), catchError(function (res) {
                var errors = [];
                if (res instanceof HttpErrorResponse) {
                    errors = _this.getConfigValue('errors.getter')('verifyCode', res);
                }
                else {
                    errors.push('Something went wrong.');
                }
                return observableOf(new AuthResult(false, res, _this.getConfigValue('verifyCode.redirect.failure'), errors));
            }));
    }
    resetPassword(data?: any): Observable<AuthResult> {
        var _this = this;
        if (data === void 0) { data = {}; }
        var tokenKey = this.getConfigValue('resetPass.resetPasswordTokenKey');
        data[tokenKey] = this.route.snapshot.queryParams[tokenKey];
        var method = this.getConfigValue('resetPass.method');
        var url = this.getActionEndpoint('resetPass');
        return this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
                if (_this.getConfigValue('resetPass.alwaysFail')) {
                    throw _this.createFailResponse();
                }
                return res;
            }), map(function (res) {
                return new AuthResult(true, res, _this.getConfigValue('resetPass.redirect.success'), [], _this.getConfigValue('messages.getter')('resetPass', res));
            }), catchError(function (res) {
                var errors = [];
                if (res instanceof HttpErrorResponse) {
                    errors = _this.getConfigValue('errors.getter')('resetPass', res);
                }
                else {
                    errors.push('Something went wrong.');
                }
                return observableOf(new AuthResult(false, res, _this.getConfigValue('resetPass.redirect.failure'), errors));
            }));
    }
    logout(): Observable<AuthResult> {
        var _this = this;
        var method = this.getConfigValue('logout.method');
        var url = this.getActionEndpoint('logout');
        //url=null;
        return observableOf({})
            .pipe(switchMap(function (res) {
                if (!url) {
                    return observableOf(res);
                }
                return _this.http.request(method, url, { observe: 'response' });
            }), map(function (res) {
                if (_this.getConfigValue('logout.alwaysFail')) {
                    throw _this.createFailResponse();
                }
                return res;
            }), map(function (res) {
                return new AuthResult(true, res, _this.getConfigValue('logout.redirect.success'), [], _this.getConfigValue('messages.getter')('logout', res));
            }), catchError(function (res) {
                var errors = [];
                if (res instanceof HttpErrorResponse) {
                    errors = _this.getConfigValue('errors.getter')('logout', res);
                }
                else {
                    errors.push('Something went wrong.');
                }
                return observableOf(new AuthResult(false, res, _this.getConfigValue('logout.redirect.failure'), errors));
            }));
    }
    protected validateToken(module: string): any {
        var _this = this;
        return map(function (res) {
            var token = _this.getConfigValue('token.getter')(module, res);
            if (!token) {
                var key = _this.getConfigValue('token.key');
                console.warn("EmailPassAuthProvider:\n                          Token is not provided under '" + key + "' key\n                          with getter '" + _this.getConfigValue('token.getter') + "', check your auth configuration.");
                throw new Error('Could not extract token from the response.');
            }
            return res;
        });
    }
    protected getActionEndpoint(action: string): string {
        var actionEndpoint = this.getConfigValue(action + ".endpoint");
        var baseEndpoint = this.getConfigValue('baseEndpoint');
        return baseEndpoint + actionEndpoint;
    }

    decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ctorParameters = function () {
        return [
            { type: HttpClient, },
            { type: ActivatedRoute, },
        ];
    }
}
