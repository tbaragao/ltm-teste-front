import { Injectable, EventEmitter } from '@angular/core'
import { Routes } from '@angular/router';
import { CacheService } from 'app/common/services/cache.service';
import { ECacheType } from 'app/common/type-cache.enum';

export class GlobalService {

    static operationExecuted = new EventEmitter<OperationExecutedParameters>();
    static operationRequesting = new EventEmitter<boolean>();
    static notification = new EventEmitter<NotificationParameters>();
    static changeCulture = new EventEmitter<string>();


    public static getNotificationEmitter() {

        if (!this.notification)
            this.notification = new EventEmitter<NotificationParameters>();
        return this.notification;
    }

    public static getOperationExecutedEmitter() {

        if (!this.operationExecuted)
            this.operationExecuted = new EventEmitter<OperationExecutedParameters>();
        return this.operationExecuted;
    }

    public static getOperationRequestingEmitter() {

        if (!this.operationRequesting)
            this.operationRequesting = new EventEmitter<boolean>();
        return this.operationRequesting;
    }

    public static getChangeCultureEmitter() {

        if (!this.changeCulture)
            this.changeCulture = new EventEmitter<string>();
        return this.changeCulture;
    }

    public static getEndPoints() {

        if (!this._endpoint) {
            this._endpoint = new EndPoints();
            return this._endpoint;
        }

        return this._endpoint;
    }

    public static setEndPoints(config: any) {
        GlobalService.getEndPoints().setConfigSettings(config);
    }

    public static getAuthSettings() {
        return new AuthSettings();
    }

    public static operationExecutedParameters(_selector: string, _operation: any, _message: string = null) {
        return new OperationExecutedParameters(_selector, _operation, _message);
    }

    private static _endpoint: EndPoints;

};

export class OperationExecutedParameters {


    public selector: string;
    public operation: any;
    public message: string;

    constructor(_selector: string, _operation: any, _message: string) {

        this.selector = _selector;
        this.operation = _operation;
        this.message = _message;
    }

}

export class NotificationParameters {

    public event: string;
    public otherEvents: string[];
    public data?: any;

    constructor(_event: string, _data?: any, _otherEvents?: string[]) {

        this.event = _event;
        this.data = _data;
        this.otherEvents = _otherEvents || [""];

    }

}

export class EndPoints {

    public DEFAULT: string;
    public AUTHAPI: string;
    public AUTH: string;
    public APP: string;
    public DOWNLOAD: string;

    constructor() {


    }

    setConfigSettings(configSettings) {
        if (configSettings) {
            this.init(configSettings);
        }
    }

    init(configSettings) {

        this.DEFAULT = configSettings.DEFAULT;
        this.AUTHAPI = configSettings.AUTHAPI;
        this.AUTH = configSettings.AUTH;
        this.APP = configSettings.APP;
        this.DOWNLOAD = this.DEFAULT + "/document/download/";

    }

};

export class AuthSettings {

    public readonly TYPE_LOGIN: string;
    public readonly CLIENT_ID: string;
    public readonly SCOPE: string;


    constructor() {
        this.TYPE_LOGIN = "SSO";
        this.CLIENT_ID = 'Target-spa';
        this.SCOPE = 'ssosa';
    }
};

