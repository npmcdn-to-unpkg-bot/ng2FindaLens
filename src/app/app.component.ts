import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { MainComponent } from './main/main.component';
import { LensAdminComponent } from './admin/lens-admin.component';

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
    precompile: [MainComponent, LensAdminComponent]
})

export class AppComponent {}