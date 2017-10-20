import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable()
export class ProdutoServiceFields {


    constructor() {}

	getFormFields(moreFormControls? : any) {
		var formControls = Object.assign(moreFormControls || {},{
            nome : new FormControl(),
            descricao : new FormControl(),
            produtoId : new FormControl(),
            qtdeMinima : new FormControl(),
            valor : new FormControl(),
            ativo : new FormControl(),

        });
		return new FormGroup(formControls);
	}



	getInfosFields(moreInfosFields? : any) {
		var defaultInfosFields = Object.assign(moreInfosFields || {}, {
			nome: { label: 'nome', type: 'string', isKey: false, list:true   },
			descricao: { label: 'descricao', type: 'string', isKey: false, list:false   },
			produtoId: { label: 'produtoId', type: 'int', isKey: true, list:true   },
			qtdeMinima: { label: 'qtdeMinima', type: 'decimal', isKey: false, list:true   },
			valor: { label: 'valor', type: 'decimal', isKey: false, list:true   },
			ativo: { label: 'ativo', type: 'bool', isKey: false, list:true   },

        });
		return defaultInfosFields;
    }

}
