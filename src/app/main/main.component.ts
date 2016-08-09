import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'main',
    template: `
        <div class="jumbotron ">
            <div class="container">
                <h1 class="cover-heading">Find-A-Lens new home page</h1>
                <a [routerLink]="['/camera-choice']" class="btn btn-default">
                    <span class="glyphicon glyphicon-check"></span>
                    Choose your camera Brand
                </a>
            </div>
        </div> <!-- end jumbotron -->

        <section id="intro" style="height: 400px; background-color: #efefef;">
            <h2>Intro</h2>
        </section>

        <section id="intro2" style="height: 300px; background-color: #ff6600;">
            <h2>Intro2</h2>
        </section>

        <section id="intro3" style="height: 400px; background-color: #145a80;">
            <h2>Intro3</h2>
        </section>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}