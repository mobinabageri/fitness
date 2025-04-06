import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject, Injectable } from "@angular/core";

@Injectable()

export class permissionService{
    constructor(private router:Router , private service:AuthService){}

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
if(this.service.isAuth()){
    return true
}else{
    this.router.navigate(['/login']);
    return false
}

    }
}

export const AuthGuard :CanActivateFn =(next:ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{
return inject(permissionService).canActivate(next,state)
}