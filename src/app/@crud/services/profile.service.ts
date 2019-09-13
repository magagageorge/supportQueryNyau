import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { CrudService } from './crud.service'
import { TokenService } from 'src/app/auth';

@Injectable()
export class ProfileService extends  CrudService{
    //protected injector: Injector;
    //protected providers: {};
    constructor(tokenService: TokenService,injector: Injector){
	    super(tokenService,injector);	
	}
}
