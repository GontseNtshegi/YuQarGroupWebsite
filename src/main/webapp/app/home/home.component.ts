import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
//import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // account: Account;
  //modalRef: NgbModalRef;
  //vimeoUrl: string;
  //youtubeUrl: string;
  //dailymotionUrl: string;
  //vimeoUrl1: string;
  //youtubeUrl1: string;
  //dailymotionUrl1: string;
  //videoUrls: any[];
  dom: DomSanitizer;
  //authSubscription: Subscription;

  constructor(
    //private principal: Principal,
    private accountService: AccountService,
    private loginModalService: LoginModalService,
    private eventManager: JhiEventManager,
    private embedService: EmbedVideoService,
    private dom1: DomSanitizer
  ) {
    this.dom = dom1;
    //this.account= acc;
  }

  ngOnInit(): void {
    //this.principal.identity().then((account) => {
    //      this.account = account;
    // });
    //this.registerAuthenticationSuccess();
    //this.vimeoUrl = 'https://www.youtube.com/watch?v=KhzGSHNhnbI';
    //this.youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
    //this.dailymotionUrl = 'https://www.youtube.com/watch?v=Fq5qs1c6DMM';
    //this.vimeoUrl1 = 'https://www.youtube.com/watch?v=wStWbG0g1Tc';
    //this.youtubeUrl1 = 'https://youtu.be/az5vU9CT4CY://www.youtube.com/watch?v=az5vU9CT4CY&feature=em-subs_digest';
    //this.dailymotionUrl1 = 'https://youtu.be/e7RHF4mbNWk';
    //
    //this.videoUrls = [
    //  this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.vimeoUrl)),
    //  this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.youtubeUrl)),
    //  this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.dailymotionUrl)),
    //  this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.vimeoUrl1)),
    //  this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.youtubeUrl1)),
    //  this.dom.bypassSecurityTrustHtml(this.embedService.embed(this.dailymotionUrl1))
    //];
  }
  registerAuthenticationSuccess(): void {
    // this.authSubscription = this.eventManager.subscribe('authenticationSuccess', message=> {
    //   this.accountService.identity().subscribe(account => {
    //     this.account = account;
    //   });
    // });
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    //if (this.authSubscription) {
    //  this.authSubscription.unsubscribe();
    //}
  }
}
