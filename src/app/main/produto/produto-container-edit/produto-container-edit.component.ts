import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'app-produto-container-edit',
    templateUrl: './produto-container-edit.component.html',
    styleUrls: ['./produto-container-edit.component.css'],
})
export class ProdutoContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.produtoService.initVM();
    }

    ngOnInit() {

       
    }

}
