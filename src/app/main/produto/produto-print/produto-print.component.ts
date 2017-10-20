import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ProdutoService } from '../produto.service';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-produto-print',
    templateUrl: './produto-print.component.html',
    styleUrls: ['./produto-print.component.css'],
})
export class ProdutoPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private produtoService: ProdutoService, private route: ActivatedRoute) {
		this.vm = null;
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.vm = this.produtoService.initVM();

        this.produtoService.get({ id: this.id }).subscribe((data) => {
            this.vm.details = data.data;
        })

    }
    
	onPrint() {
        window.print();
	}
   


}
