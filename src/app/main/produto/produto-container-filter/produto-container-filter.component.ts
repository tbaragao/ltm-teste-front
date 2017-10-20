import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'app-produto-container-filter',
    templateUrl: './produto-container-filter.component.html',
    styleUrls: ['./produto-container-filter.component.css'],
})
export class ProdutoContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.produtoService.initVM();
    }

    ngOnInit() {

       
    }

}
