import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { LensAdminComponent } from './admin/lens-admin.component';
import { BrandChoiceComponent } from './lens/brand-choice.component';
import { PhotoStyleComponent } from './lens/photo-style.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'main', component: MainComponent },
    { path: 'lens-admin', component: LensAdminComponent },
    { path: 'camera-choice', component: BrandChoiceComponent },
    { path: 'photo-style/:brand', component: PhotoStyleComponent },
    { path: '**', component: MainComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);