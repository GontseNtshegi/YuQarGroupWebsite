import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import {EmbedVideoService} from 'ngx-embed-video'
import {DomSanitizer} from '@angular/platform-browser';

import { Account, LoginModalService, Principal } from '../shared';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    vimeoUrl : string;
    youtubeUrl: string;
    dailymotionUrl: string;
    vimeoUrl1 : string;
    youtubeUrl1: string;
    dailymotionUrl1: string;
    videoUrls: any[];
    dom: DomSanitizer;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private embedService: EmbedVideoService,
        private dom1: DomSanitizer

    ) {
        this.dom = dom1;

    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.vimeoUrl = 'https://www.youtube.com/watch?v=KhzGSHNhnbI';
        this.youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
        this.dailymotionUrl = 'https://www.youtube.com/watch?v=Fq5qs1c6DMM';
        this.vimeoUrl1 = 'https://www.youtube.com/watch?v=wStWbG0g1Tc';
        this.youtubeUrl1 = 'https://youtu.be/az5vU9CT4CY://www.youtube.com/watch?v=az5vU9CT4CY&feature=em-subs_digest';
        this.dailymotionUrl1 = 'https://youtu.be/e7RHF4mbNWk';

        this.videoUrls=[this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.vimeoUrl)), this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.youtubeUrl)), this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.dailymotionUrl)),
            this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.vimeoUrl1)), this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.youtubeUrl1)), this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.dailymotionUrl1))];
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
