import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ProdutoService } from '../produto.service';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-produto-field-create',
    templateUrl: './produto-field-create.component.html',
    styleUrls: ['./produto-field-create.component.css']
})
export class ProdutoFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private produtoService: ProdutoService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

	ngOnChanges() {
       this.ref.detectChanges()
	}

   


}
