import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoPrintComponent } from './produto-print.component';
import { ProdutoPrintRoutingModule } from './produto-print.routing.module';

import { ProdutoService } from '../produto.service';
import { ApiService } from 'app/common/services/api.service';

import { ProdutoFieldDetailsComponent } from '../produto-field-details/produto-field-details.component';
import { CommonSharedModule } from 'app/common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        CommonSharedModule,
        ProdutoPrintRoutingModule,
    ],
    declarations: [
        ProdutoPrintComponent,
        ProdutoFieldDetailsComponent
    ],
    providers: [ProdutoService, ApiService],
    exports: [ProdutoFieldDetailsComponent]
})
export class ProdutoPrintModule {

}
