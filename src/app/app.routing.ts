import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./app.guard.routing";


const APP_ROUTES_DEFAULT: Routes = [
    {
        path: '', component: MainComponent, canActivate: [AuthGuard], children: [
            { path: 'produto', loadChildren: './main/produto/produto.module#ProdutoModule' },
        ]
    },

    { path: 'produto/print/:id', loadChildren: './main/produto/produto-print/produto-print.module#ProdutoPrintModule' },

]


export const RoutingDefault: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES_DEFAULT);


