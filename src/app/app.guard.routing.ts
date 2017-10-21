import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from "app/common/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService){}

    canActivate() {
        var currentUser = this.authService.currentUser();
        if (currentUser.isAuth)
            return true;

        this.authService.loginSso();
        return false;
    }
}
