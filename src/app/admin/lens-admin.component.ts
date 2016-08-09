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
    processing = true;
    
    constructor(private _lensAdminService: LensAdminService) {}

    ngOnInit() {
        this._lensAdminService.getMessages()
            .subscribe(
                lenses => {
                    this.lensData = lenses;
                    this.processing = false;
                },
                error => console.log(error)
            );
    }
}