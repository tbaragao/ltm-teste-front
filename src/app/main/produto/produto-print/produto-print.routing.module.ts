import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutoPrintComponent } from './produto-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProdutoPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  ProdutoPrintRoutingModule {

}