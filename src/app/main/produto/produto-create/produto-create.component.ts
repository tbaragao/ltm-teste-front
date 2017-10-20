import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProdutoService } from '../produto.service';

@Component({
    selector: 'app-produto-create',
    templateUrl: './produto-create.component.html',
    styleUrls: ['./produto-create.component.css'],
})
export class ProdutoCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
 
    constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = this.produtoService.initVM();
		this.produtoService.detectChanges(this.ref);
    }

    ngOnInit() {

       
    }

    onSave(model) {

        this.produtoService.save(model).subscribe((result) => {
            this.router.navigate(["/produto"])
        });
    }

}
