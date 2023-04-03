import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import {SsStorageRepository} from './../repository/index';

//import { CommonMethods} from '../global-methods/common.methods'


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) 
    { 
      
       
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
       return true;
    }
}