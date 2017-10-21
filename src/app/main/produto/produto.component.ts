import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ProdutoService } from './produto.service';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService, NotificationParameters } from '../../global.service';


@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {

    vm: ViewModel<any>;

    operationConfimationYes: any;

    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;

    constructor(private produtoService: ProdutoService, private router: Router, private ref: ChangeDetectorRef) {

        this.vm = null;
    }

    ngOnInit() {

        this.vm = this.produtoService.initVM();
        this.produtoService.detectChanges(this.ref);
        this.updateCulture();

        this.produtoService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });

        GlobalService.getChangeCultureEmitter().subscribe((culture) => {
            this.updateCulture(culture);
        });

    }

    updateCulture(culture: string = null) {
        this.produtoService.updateCulture(culture).then(infos => {
            this.vm.infos = infos;
            this.vm.grid = this.produtoService.getInfoGrid(infos);
        });
    }


    public onFilter(modelFilter) {
        this.produtoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        })
    }

    public onExport() {
        this.produtoService.export().subscribe((result) => {
            var blob = new Blob([result._body], {
                type: 'application/vnd.ms-excel'
            });
            var downloadUrl = window.URL.createObjectURL(blob);
            window.location.href = downloadUrl;
        })
    }

    public onCreate() {
        this.vm.model = {};
        this.saveModal.show();
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("create", {
            model: this.vm.model
        }));
    }

    public onEdit(model) {
        this.editModal.show();
        this.produtoService.get({ id: model.produtoId }).subscribe((result) => {
            this.vm.model = result.data;
            GlobalService.getNotificationEmitter().emit(new NotificationParameters("edit", {
                model: this.vm.model
            }));
        })
    }

    public onSave(model) {
        this.produtoService.save(model).subscribe((result) => {
            this.onFilter(this.vm.modelFilter);
            if (!this.vm.manterTelaAberta) {
                this.saveModal.hide();
                this.editModal.hide();
            }
        });

    }

    public onDetails(model) {
        this.detailsModal.show();
        this.produtoService.get({ id: model.produtoId }).subscribe((result) => {
            this.vm.details = result.data;
        })
    }

    public onCancel() {
        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
    }

    onClearFilter() {
        this.vm.modelFilter = {};
    }

    public onPrint(model) {
        this.router.navigate(['/produto/print', model.produtoId]);
    }

    public onDeleteConfimation(model) {
        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                this.produtoService.delete(model).subscribe((result) => {
                    this.onFilter(this.vm.modelFilter);
                });
            }
        );
        GlobalService.getOperationExecutedEmitter().emit(conf);
    }

    public onConfimationYes() {
        this.operationConfimationYes();
    }

    public onPageChanged(pageConfig) {
        let modelFilter = this.produtoService.pagingConfig(this.vm.modelFilter, pageConfig);
        this.produtoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(order) {
        let modelFilter = this.produtoService.orderByConfig(this.vm.modelFilter, order);
        this.produtoService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

}
