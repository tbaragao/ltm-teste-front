import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from 'app/common/services/api.service';
import { ServiceBase } from 'app/common/services/service.base';
import { ViewModel } from 'app/common/model/viewmodel';
import { GlobalService } from '../../global.service';
import { GlobalServiceCulture, Translated, TranslatedField } from '../../global.service.culture';
import { MainService } from '../main.service';

@Injectable()
export class ProdutoService extends ServiceBase {

    private _form: FormGroup;

    constructor(private api: ApiService<any>,
        private globalServiceCulture: GlobalServiceCulture,
        private mainService: MainService) {
        super();
        this._form = new FormGroup({
            nome: new FormControl(),
            descricao: new FormControl(),
            produtoId: new FormControl(),
            qtdeMinima: new FormControl(),
            valor: new FormControl(),
            ativo: new FormControl(),
        });
    }

    initVM(): ViewModel<any> {
        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " Produto",
            actionDescription: "",
            downloadUri: GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
            details: {},
            infos: this.getInfos(),
            grid: this.getInfoGrid(this.getInfos()),
            generalInfo: this.mainService.getInfos(),
            form: this._form,
            masks: this.masksConfig()
        });
    }

    getInfos() {
        return {
            produtoId: { label: '#', type: 'int', isKey: true, list: true },
            nome: { label: 'Nome', type: 'string', isKey: false, list: true },
            descricao: { label: 'Descrição', type: 'string', isKey: false, list: false },
            qtdeMinima: { label: 'Qtde. Mínima', type: 'decimal', isKey: false, list: true },
            valor: { label: 'Valor', type: 'decimal', isKey: false, list: true },
            ativo: { label: 'Ativo', type: 'bool', isKey: false, list: true },
        };
    }

    getInfoGrid(infos: any) {
        return super.getInfoGrid(infos)
    }

    updateCulture(culture: string = null) {
        return this.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    updateCultureMain(culture: string = null) {
        return this.mainService.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    getInfosTranslated(culture: string) {
        var grupo = "Produto";
        return this.globalServiceCulture.getResource(grupo, culture, this.getInfos(), (culture, infosFields) => {
            return new Promise((resolve, reject) => {
                var translated = new Translated([]);
                return resolve(this.globalServiceCulture.setResource(grupo, translated.get(culture), infosFields));
            });
        });
    }

    get(filters?: any): Observable<any> {
        return this.api.setResource('Produto').get(filters);
    }

    getDataCustom(filters?: any): Observable<any> {
        return this.api.setResource('Produto').getDataCustom(filters);
    }

    getDataListCustom(filters?: any): Observable<any> {
        return this.api.setResource('Produto').getDataListCustom(filters);
    }

    save(model: any): Observable<any> {
        if (model.produtoId != undefined)
            return this.api.setResource('Produto').put(model);

        return this.api.setResource('Produto').post(model);
    }

    delete(model: any): Observable<any> {
        return this.api.setResource('Produto').delete(model);
    }

    export(filters?: any): Observable<any> {
        return this.api.setResource('Produto').export(filters);
    }
}
