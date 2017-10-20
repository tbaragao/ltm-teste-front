import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProdutoComponent },
            { path: 'edit/:id', component: ProdutoEditComponent },
			{ path: 'details/:id', component: ProdutoDetailsComponent },
			{ path: 'create', component: ProdutoCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProdutoRoutingModule {

}