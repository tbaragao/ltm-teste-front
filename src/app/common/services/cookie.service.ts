import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {

    public static get(key: string) {
        var _name = key + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(_name) == 0) return c.substring(_name.length, c.length);
        }
        return null;
    }

    public static add(key: string, data: any, seconds?: number) {
        if (seconds) {
            var date = new Date();
            date.setTime(date.getTime() + (seconds * 1000));
            var expires = "; expires=" + date.toUTCString();
        } else var expires = "";
        document.cookie = key + "=" + data + expires + "; path=/";
    }

    public static update(key: string, data: any, seconds?: number) {
        this.remove(key);
        this.add(key, data, seconds);
    }

    public static remove(key: string) {
        this.add(key, "", -1);
    }

    public static reset() {
        this.remove("CURRENT_USER");
        this.remove("TOKEN_AUTH");
        this.remove("ACCESS_TOKEN");
        this.remove("ARRAffinity");
    }

    public static clearAllCookies() {

        var cookies = document.cookie.split("; ");
        for (var c = 0; c < cookies.length; c++) {
            var d = window.location.hostname.split(".");
            while (d.length > 0) {
                var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                var p = location.pathname.split('/');
                document.cookie = cookieBase + '/';
                while (p.length > 0) {
                    document.cookie = cookieBase + p.join('/');
                    p.pop();
                };
                d.shift();
            }
        }
    }

}
