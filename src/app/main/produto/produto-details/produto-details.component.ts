import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'app-produto-details',
    templateUrl: './produto-details.component.html',
    styleUrls: ['./produto-details.component.css'],
})
export class ProdutoDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {

		this.vm = this.produtoService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		if (this.id) {
			this.produtoService.get({ id: this.id }).subscribe((data) => {
				this.vm.details = data.data;
			})
		};

    }

    
}
