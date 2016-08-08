import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'header',
    template: `
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" [routerLink]="['/main']">Find-A-Lens</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav">
                        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                        <li class="hidden">
                            <a ui-sref="home">Home</a>
                        </li>
                        <li>
                            <a ui-sref="canon" ui-sref-active="active">Canon</a>
                        </li>
                        <li>
                            <a ui-sref="nikon" ui-sref-active="active">Nikon</a>
                        </li>
                        <li>
                            <a href="/sony">Sony</a>
                        </li>
                    </ul>
<!--                    <button type="button" ng-click="clickToOpen()" class="btn navbar-btn pull-right">Login</button>-->
<!--                    <button type="button" ng-click="" class="btn navbar-btn btn-default pull-right"><a href="/lenses">Lenses</a></button>-->
                    <p class="navbar-text navbar-right"><a [routerLink]="['/lens-admin']" class="navbar-link">View Lenses</a></p>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container -->
        </nav>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}