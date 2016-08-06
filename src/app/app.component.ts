import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeaderComponent } from './header.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div class="container">
            <header></header>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})

export class AppComponent {}