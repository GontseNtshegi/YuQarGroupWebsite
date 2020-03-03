import { Component, OnInit } from '@angular/core';
//import {Title} from '@angular/platform-browser';
import { Router, ActivatedRouteSnapshot, NavigationEnd, NavigationError } from '@angular/router';
//import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { AccountService } from 'app/core/auth/account.service';
import { JhiLanguageHelper } from 'app/core/language/language.helper';

@Component({
  selector: 'jhi-main',
  templateUrl: './main.component.html'
})
export class JhiMainComponent implements OnInit {
  // private translateService: TranslateService
  //private $storageService: StateStorageService
  constructor(private jhiLanguageHelper: JhiLanguageHelper, private router: Router) {}

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'kasiFlix';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
  private updateTitle(): void {
    let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
    if (!pageTitle) {
      pageTitle = 'global.title';
    }
    //this.translateService.get(pageTitle).subscribe(title => this.titleService.setTitle(title));
  }
  ngOnInit(): void {}
}
