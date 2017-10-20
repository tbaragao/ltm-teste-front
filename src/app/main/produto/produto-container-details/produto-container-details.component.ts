import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'app-produto-container-details',
    templateUrl: './produto-container-details.component.html',
    styleUrls: ['./produto-container-details.component.css'],
})
export class ProdutoContainerDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.produtoService.initVM();
    }

    ngOnInit() {

       
    }

}
