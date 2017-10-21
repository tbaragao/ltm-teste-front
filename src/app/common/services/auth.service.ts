import { Injectable } from '@angular/core';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';

import { ApiService } from 'app/common/services/api.service';
import { ECacheType } from 'app/common/type-cache.enum';
import { GlobalService } from 'app/global.service';
import { CacheService } from 'app/common/services/cache.service';
import { StartupService } from 'app/startup.service';


@Injectable()
export class AuthService {

    private readonly _nameToken: string;
    private readonly _accessToken: string;
    private readonly _nameEndPointAuthApi: string;
    private readonly _typeLogin: string;
    private readonly _authorizationUrl: string;
    private readonly _client_id: string;
    private readonly _redirect_uri: string;
    private readonly _response_type: string;
    private readonly _scope: string;
    private readonly _nameCurrentUser: string;
    private readonly _type: ECacheType;

    constructor(private apiAuth: ApiService<any>, private api: ApiService<any>, private router: Router, private startupService: StartupService) {

        this._nameToken = "TOKEN_AUTH";
        this._accessToken = "ACCESS_TOKEN";
        this._nameEndPointAuthApi = "AUTHAPI";
        this._typeLogin = GlobalService.getAuthSettings().TYPE_LOGIN;
        this._authorizationUrl = GlobalService.getEndPoints().AUTH + 'connect/authorize';
        this._client_id = GlobalService.getAuthSettings().CLIENT_ID;
        this._redirect_uri = GlobalService.getEndPoints().APP;
        this._response_type = "id_token token";
        this._scope = GlobalService.getAuthSettings().SCOPE;
        this._nameCurrentUser = "CURRENT_USER";
        this._type = ECacheType.COOKIE;

    }

    public loginSso() {

        this._reset();

        this.startupService.load();

        let state = Date.now() + "" + Math.random();
        localStorage["state"] = state;

        var url =
            this._authorizationUrl + "?" +
            "client_id=" + encodeURI(this._client_id) + "&" +
            "redirect_uri=" + encodeURI(this._redirect_uri) + "&" +
            "response_type=" + encodeURI(this._response_type) + "&" +
            "scope=" + encodeURI(this._scope) + "&" +
            "state=" + encodeURI(state) + "&" +
            "nonce=xyz";

        setTimeout(() => { window.location.href = url; }, 500)
    }

    public logout() {
        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this._reset();
                var authorizationUrl = GlobalService.getEndPoints().AUTH + 'account/logout?returnUrl=' + GlobalService.getEndPoints().APP;
                window.location.href = authorizationUrl;
            },
            "Tem certeza que deseja sair do sistema?"
        );

        GlobalService.operationExecuted.emit(conf);
    }

    public processTokenCallback() {

        if (window.location.href.indexOf("access_token") > -1) {

            let hash = window.location.hash.substr(1);

            let result = hash.split('&').reduce(function (result, item) {
                let parts = item.split('=');
                result[parts[0]] = parts[1];
                return result;
            }, {}) as any;

            if (!result.error) {
                if (result.state !== localStorage["state"]) {
                    localStorage.removeItem("state");
                    this.router.navigate(["/login"]);
                }
                else {
                    localStorage.removeItem("state");
                    this._acceptlogin(result, false)
                }
            }
        }

    }

    public getCurrentUser(callback) {
        var currentUser = this.currentUser();
        if (currentUser.isAuth)
            callback(currentUser, false);
        else {
            this.api.setResource('CurrentUser').get(null, true).subscribe(data => {
                CacheService.add(this._nameCurrentUser, JSON.stringify(data.data), this._type);
                callback(this.currentUser(), true);
            }, err => {
                this.loginSso();
            });
        }
    }

    public currentUser() {
        var currentUser = CacheService.get(this._nameCurrentUser, this._type);
        return {
            isAuth: currentUser ? true : false,
            claims: JSON.parse(currentUser),
            token: CacheService.get('ACCESS_TOKEN', ECacheType.COOKIE)
        }
    }

    public isAuthenticated(): boolean {
        const token = CacheService.get(this._nameToken, this._type);
        return token !== null;
    }

    private _acceptlogin(result, reload) {
        CacheService.add(this._nameToken, result.id_token, this._type, result.expires_in);
        CacheService.add(this._accessToken, result.access_token, this._type, result.expires_in);
        this.router.navigate(["/home"]);
        if (reload) window.location.reload();
    }

    private _reset() {
        CacheService.reset(this._type);
    }

    private makeUrl(url, noCache = false) {
        if (noCache) return url;
        return url + '?v=' + Math.random();
    }

}
