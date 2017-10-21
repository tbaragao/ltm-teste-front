import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./app.guard.routing";

const APP_ROUTES_CUSTOM: Routes = [

    { path: 'home', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/:operation', component: LoginComponent },

]

export const RoutingCustom: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES_CUSTOM);
