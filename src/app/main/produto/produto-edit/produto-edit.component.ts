import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from 'app/common/model/viewmodel';
import { ProdutoService } from '../produto.service';
import { GlobalService, NotificationParameters} from '../../../global.service';

@Component({
    selector: 'app-produto-edit',
    templateUrl: './produto-edit.component.html',
    styleUrls: ['./produto-edit.component.css'],
})
export class ProdutoEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {

		 this.vm = null;

    }

    ngOnInit() {

		this.vm = this.produtoService.initVM();
		this.produtoService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

		setTimeout(() => {
        this.produtoService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
			GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })}, 250);

    }

    onSave(model) {

        this.produtoService.save(model).subscribe((result) => {
            this.router.navigate(["/produto"])
        });
    }

}
