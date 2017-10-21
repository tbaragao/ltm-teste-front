import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ProdutoComponent } from './produto.component';

import { ProdutoFieldFilterComponent } from './produto-field-filter/produto-field-filter.component';
import { ProdutoFieldCreateComponent } from './produto-field-create/produto-field-create.component';
import { ProdutoFieldEditComponent } from './produto-field-edit/produto-field-edit.component';

import { ProdutoPrintModule } from './produto-print/produto-print.module';
import { ProdutoRoutingModule } from './produto.routing.module';

import { ProdutoService } from './produto.service';

import { ApiService } from 'app/common/services/api.service';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        CommonSharedModule,
        ProdutoRoutingModule,
        ProdutoPrintModule
    ],
    declarations: [
        ProdutoComponent,
        ProdutoFieldFilterComponent,
        ProdutoFieldCreateComponent,
        ProdutoFieldEditComponent,
    ],
    providers: [ProdutoService, ApiService],
})
export class ProdutoModule {


}
