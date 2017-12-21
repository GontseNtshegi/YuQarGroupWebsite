import {Route} from '@angular/router';
import {UserRouteAccessService} from '../shared/auth/user-route-access-service';
import {ContactusComponent} from './contactus.component';
export const ContactusRoute: Route ={
    path: 'contactus',
    component: ContactusComponent,
    data:{
        authorities: [],
        pageTitle: 'contactus.title'
    },
    canActivate: [UserRouteAccessService]
};
