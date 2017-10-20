import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'app-produto-container-create',
    templateUrl: './produto-container-create.component.html',
    styleUrls: ['./produto-container-create.component.css'],
})
export class ProdutoContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.produtoService.initVM();
    }

    ngOnInit() {

       
    }

}
