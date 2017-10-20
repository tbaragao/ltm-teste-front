import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-produto-field-edit',
    templateUrl: './produto-field-edit.component.html',
    styleUrls: ['./produto-field-edit.component.css']
})
export class ProdutoFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private produtoService: ProdutoService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

	ngOnChanges() {
       this.ref.detectChanges()
	}

        

   
}
