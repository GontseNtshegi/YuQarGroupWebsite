import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { YuQarGroupSharedModule, UserRouteAccessService } from './shared';
import { KasiflixGatewayHomeModule } from './home/home.module';
import { KasiflixGatewayAdminModule } from './admin/admin.module';
import { KasiflixGatewayAccountModule } from './account/account.module';
import { KasiflixGatewayEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        YuQarGroupSharedModule,
        KasiflixGatewayHomeModule,
        KasiflixGatewayAdminModule,
        KasiflixGatewayAccountModule,
        KasiflixGatewayEntityModule,
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
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class KasiflixGatewayAppModule {}
