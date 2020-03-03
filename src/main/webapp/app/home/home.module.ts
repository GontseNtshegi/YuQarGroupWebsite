import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmbedVideo } from 'ngx-embed-video';

import { KasiflixGatewaySharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [KasiflixGatewaySharedModule, EmbedVideo.forRoot(), RouterModule.forRoot([HOME_ROUTE], { useHash: true })],
  declarations: [HomeComponent],
  entryComponents: [],
  providers: []
})
export class KasiflixGatewayHomeModule {}
