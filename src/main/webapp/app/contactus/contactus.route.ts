import { Route } from '@angular/router';
import { UserRouteAccessService } from '../core/auth/user-route-access-service';
import { ContactusComponent } from './contactus.component';
export const ContactusRoute: Route = {
  path: 'contact',
  component: ContactusComponent,
  data: {
    authorities: [],
    pageTitle: 'contactus.title'
  },
  canActivate: [UserRouteAccessService]
};
