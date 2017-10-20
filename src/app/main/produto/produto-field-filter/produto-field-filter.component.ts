import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-produto-field-filter',
    templateUrl: './produto-field-filter.component.html',
    styleUrls: ['./produto-field-filter.component.css']
})
export class ProdutoFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
