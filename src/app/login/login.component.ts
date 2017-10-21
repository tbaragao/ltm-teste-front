import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/common/services/auth.service'
import { GlobalService } from '../global.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.authService.loginSso();
    }

}
