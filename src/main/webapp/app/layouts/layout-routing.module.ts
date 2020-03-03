import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { navbarRoute } from './navbar/navbar.route';
import { errorRoute } from './error/error.route';
import { AboutRoute } from '../about/about.route';
import { ContactusRoute } from '../contactus/contactus.route';

const LAYOUT_ROUTES = [
  AboutRoute,
  ContactusRoute,
  navbarRoute
  // errorRoute
];

@NgModule({
  imports: [RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
