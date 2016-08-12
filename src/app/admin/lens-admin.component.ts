import { Component, OnInit } from '@angular/core';
import { Lens } from '../common/lens';
import { LensAdminService } from './lens-admin.service';
import { SpinnerComponent } from '../common/spinner.component';

@Component({
    moduleId: module.id,
    selector: 'lens-admin',
    templateUrl: 'lens-admin.component.html',
    directives: [SpinnerComponent]
})

export class LensAdminComponent implements OnInit {
    lensData: Lens[];
    processing = true;
    
    constructor(private _lensAdminService: LensAdminService) {}

    ngOnInit() {
        // this._lensAdminService.getStuff()
        //     .subscribe(
        //         lenses => {
        //             this.lensData = lenses;
        //             this.processing = false;
        //         },
        //         error => console.log(error)
        //     );
        
        this._lensAdminService.getLenses()
            .subscribe(
                lenses => {
                    this.lensData = lenses;
                    this.processing = false;
                },
                error => console.log(error)
            );
    }
}