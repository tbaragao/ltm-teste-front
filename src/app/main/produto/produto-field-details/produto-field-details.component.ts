
import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from 'app/common/model/viewmodel';

@Component({
    selector: 'app-produto-field-details',
    templateUrl: './produto-field-details.component.html',
    styleUrls: ['./produto-field-details.component.css']
})
export class ProdutoFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
