import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KasiflixGatewaySharedModule } from 'app/shared/shared.module';

import { GatewayComponent } from './gateway.component';

import { gatewayRoute } from './gateway.route';

@NgModule({
  imports: [KasiflixGatewaySharedModule, RouterModule.forChild([gatewayRoute])],
  declarations: [GatewayComponent]
})
export class GatewayModule {}
