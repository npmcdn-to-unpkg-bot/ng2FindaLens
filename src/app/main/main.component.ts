import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'main',
    template: `
        <h1>Main Component</h1>
    `
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}