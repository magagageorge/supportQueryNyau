

import { Injector, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DummyAuthProvider } from './providers/dummy-auth.provider';
import { EmailPassAuthProvider } from './providers/email-pass-auth.provider';
import { TokenService } from './services/token/token.service';
import { AuthSimpleToken,TokenClass } from './services/token/token';
import { TokenStorage,TokenLocalStorage  } from './services/token/token-storage';
import { defaultSettings, AUTH_USER_OPTIONS, AUTH_OPTIONS, AUTH_PROVIDERS, AUTH_INTERCEPTOR_HEADER, AUTH_TOKEN_CLASS, } from './auth.options';
//import { AuthComponent } from './components/auth.component';
import { deepExtend } from './helpers';
import { AuthOptions } from './auth.options';

import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';

export function nbAuthServiceFactory(config: any, tokenService: TokenService, injector: Injector): AuthService{
    var providers = config.providers || {};
    for (var key in providers) {
        if (providers.hasOwnProperty(key)) {
            var provider = providers[key];
            var object = injector.get(provider.service);
            object.setConfig(provider.config || {});
        }
    }
    return new AuthService(tokenService, injector, providers);
}

export function nbOptionsFactory(options: any): any{
    return deepExtend(defaultSettings, options);
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
	  ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
  AuthLoginComponent,
  AuthLogoutComponent
  ],
  exports: [
  AuthLoginComponent,
  AuthLogoutComponent
  ]
})
export class AuthModule {

static forRoot(nbAuthOptions?: AuthOptions): ModuleWithProviders{
        return {
            ngModule: AuthModule,
            providers: [
                { provide: AUTH_USER_OPTIONS, useValue: nbAuthOptions },
                { provide: AUTH_OPTIONS, useFactory: nbOptionsFactory, deps: [AUTH_USER_OPTIONS] },
                { provide: AUTH_PROVIDERS, useValue: {} },
                { provide: AUTH_TOKEN_CLASS, useValue: AuthSimpleToken },
                { provide: AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
                {
                    provide: AuthService,
                    useFactory: nbAuthServiceFactory,
                    deps: [AUTH_OPTIONS, TokenService, Injector],
                },
                { provide: TokenStorage, useClass: TokenLocalStorage },
                TokenService,
                DummyAuthProvider,
                EmailPassAuthProvider
            ],
        };
    }


}

