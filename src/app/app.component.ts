import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { MainComponent } from './main/main.component';
import { LensAdminComponent } from './admin/lens-admin.component';
import { BrandChoiceComponent } from './lens/brand-choice.component';
import { PhotoStyleComponent } from './lens/photo-style.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div class="wrapper">
            <header></header>
            <div id="content">
                <router-outlet></router-outlet>
            </div>  <!--  end content -->

            <div class="push"></div>
        </div>
        <footer></footer>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
    precompile: [MainComponent, LensAdminComponent, BrandChoiceComponent, PhotoStyleComponent]
})

export class AppComponent {}