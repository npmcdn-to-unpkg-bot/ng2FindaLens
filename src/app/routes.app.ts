import {provideRouter, RouterConfig} from '@angular/router';

import { MainComponent } from './main/main.component';
import { LensAdminComponent } from './admin/lens-admin.component';

export const routes: RouterConfig = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: 'lens-admin', component: LensAdminComponent }
    // { 
    //     path: 'auth', 
    //     component: AuthenticationComponent,
    //     children: [
    //         { path: '', component: SignupComponent },
    //         { path: 'signin', component: SigninComponent },
    //         { path: 'signup', component: SignupComponent },
    //         { path: 'logout', component: LogoutComponent },
    //     ]
    // }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];