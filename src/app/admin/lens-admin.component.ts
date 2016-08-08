import { Component, OnInit } from '@angular/core';
import { Lens } from '../common/lens';
import { LensAdminService } from './lens-admin.service';

@Component({
    moduleId: module.id,
    selector: 'lens-admin',
    templateUrl: 'lens-admin.component.html'
})

export class LensAdminComponent implements OnInit {
    lensData: Lens[];
    
    constructor(private _lensAdminService: LensAdminService) {}

    ngOnInit() {
        this._lensAdminService.getMessages()
            .subscribe(
                lenses => {
                    this.lensData = lenses;
                },
                error => console.log(error)
            );
    }
}