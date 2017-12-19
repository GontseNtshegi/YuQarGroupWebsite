
import {Route} from '@angular/router';
import {AboutComponent} from './about.component';
import {UserRouteAccessService} from '../shared/auth/user-route-access-service';

export const AboutRoute:Route ={
  path: 'about',
  component: AboutComponent,
  data:{
      authorities: [],
      pageTitle: 'about.title'
  },
    canActivate: [UserRouteAccessService]
};

