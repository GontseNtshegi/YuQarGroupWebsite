import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import './vendor';
import { KasiflixGatewaySharedModule } from 'app/shared/shared.module';
import { KasiflixGatewayCoreModule } from 'app/core/core.module';
import { KasiflixGatewayAppRoutingModule } from './app-routing.module';
import { KasiflixGatewayHomeModule } from './home/home.module';
import { KasiflixGatewayEntityModule } from './entities/entity.module';
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { LayoutRoutingModule } from './layouts/layout-routing.module';
import { ProfileService } from './layouts/profiles/profile.service';
import { Ng2Webstorage } from 'ng2-webstorage';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AccountModule } from './account/account.module';
import { TranslateStore } from '@ngx-translate/core';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
//JhiMainComponent,
//LayoutRoutingModule,
// NavbarComponent,
// FooterComponent,
//ProfileService,
//PageRibbonComponent,
//ActiveMenuDirective,
// ErrorComponent
//} from './layouts'
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  imports: [
    BrowserModule,
    LayoutRoutingModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
    NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-', caseSensitive: true }),
    KasiflixGatewaySharedModule,
    KasiflixGatewayHomeModule,
    //KasiflixGatewayAdminModule,
    AdminRoutingModule,
    AccountModule,
    //KasiflixGatewayAccountModule,
    KasiflixGatewayEntityModule,
    KasiflixGatewayAppRoutingModule
    // jhipster-needle-angular-add-module JHipster will add new module here
  ],
  declarations: [
    JhiMainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    AboutComponent,
    ContactusComponent
  ],
  providers: [
    TranslateStore,
    ProfileService,
    TranslateService
    //customHttpProvider(),
    //PaginationConfig,
    //UserRouteAccessService
  ],
  bootstrap: [JhiMainComponent]
})
export class KasiflixGatewayAppModule {}
