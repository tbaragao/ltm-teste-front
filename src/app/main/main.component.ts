import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { AuthService } from 'app/common/services/auth.service'
import { GlobalServiceCulture } from '../global.service.culture'
import { GlobalService, NotificationParameters } from '../global.service'
import { MainService } from './main.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: [GlobalServiceCulture, MainService]
})
export class MainComponent implements OnInit {

    vm: any;
    menuIsOpen: boolean;
    filter: string;

    constructor(private authService: AuthService, private globalServiceCulture: GlobalServiceCulture, private mainService: MainService, private sanitizer: DomSanitizer, private router: Router) {

        this.vm = {};
        this.menuIsOpen = true;
        this.vm.generalInfo = this.mainService.getInfosFields();
        this.vm.downloadUri = GlobalService.getEndPoints().DOWNLOAD;
        this.vm.avatar = null;
        
        this.mainService.updateCulture(this.vm);
        GlobalService.getChangeCultureEmitter().subscribe((culture) => {
            this.mainService.updateCulture(this.vm, culture);
        });
    }

    san(fileName) {
        var _url = "url('" + this.vm.downloadUri + "/usuario/" + fileName + "')";
        return this.sanitizer.sanitize(SecurityContext.HTML, _url)
    }

    onUpdateCulture(event, culture: string) {

        event.preventDefault();
        this.mainService.updateCulture(this.vm, culture);
        GlobalService.getChangeCultureEmitter().emit(culture);

    }

    ngOnInit() {

        this.authService.getCurrentUser((result, firstTime) => {

            if (result.isAuth) {
                if (result.claims.name != null) {
                    this.vm.userName = result.claims.name
                }

                if (result.claims.role != null) {
                    this.vm.userRole = result.claims.role
                }

                if (result.claims.tools != null) {
                    this.vm.menu = JSON.parse(result.claims.tools)
                }

                if (result.claims.avatar != null) {
                    this.vm.avatar = result.claims.avatar
                }

                if (result.claims.typerole != null) {
                    this.vm.typerole = result.claims.typerole
                    this.vm.userRole = this.vm.userRole + "- [" + this.vm.typerole + "]";
                }

                if (this.vm.typerole == "Team" && firstTime) {
                    this.router.navigate(["/dashboard/timesheet"]);
                }

            }
        });
    }

    onToggleMenu() {

        this.menuIsOpen = !this.menuIsOpen
    }

    onLogout(e) {
        e.preventDefault();
        this.authService.logout();
    }

    onFilter(filter) {
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("filter", {
            filter: filter
        }));
    }

}
