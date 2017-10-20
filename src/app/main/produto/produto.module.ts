import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ProdutoComponent } from './produto.component';

import { ProdutoContainerFilterComponent } from './produto-container-filter/produto-container-filter.component';
import { ProdutoFieldFilterComponent } from './produto-field-filter/produto-field-filter.component';

import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';

import { ProdutoFieldCreateComponent } from './produto-field-create/produto-field-create.component';
import { ProdutoFieldEditComponent } from './produto-field-edit/produto-field-edit.component';

import { ProdutoContainerCreateComponent } from './produto-container-create/produto-container-create.component';
import { ProdutoContainerEditComponent } from './produto-container-edit/produto-container-edit.component';

import { ProdutoPrintModule } from './produto-print/produto-print.module';
import { ProdutoRoutingModule } from './produto.routing.module';

import { ProdutoService } from './produto.service';
import { ProdutoServiceFields } from './produto.service.fields';

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
		ProdutoContainerFilterComponent,
		ProdutoFieldFilterComponent,
        ProdutoEditComponent,
		ProdutoCreateComponent,
		ProdutoDetailsComponent,
		ProdutoFieldCreateComponent,
		ProdutoFieldEditComponent,
		ProdutoContainerCreateComponent,
		ProdutoContainerEditComponent
    ],
    providers: [ProdutoService,ProdutoServiceFields, ApiService],
})
export class ProdutoModule {


}