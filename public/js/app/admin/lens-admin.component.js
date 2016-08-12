"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var lens_admin_service_1 = require('./lens-admin.service');
var spinner_component_1 = require('../common/spinner.component');
var LensAdminComponent = (function () {
    function LensAdminComponent(_lensAdminService) {
        this._lensAdminService = _lensAdminService;
        this.processing = true;
    }
    LensAdminComponent.prototype.ngOnInit = function () {
        // this._lensAdminService.getStuff()
        //     .subscribe(
        //         lenses => {
        //             this.lensData = lenses;
        //             this.processing = false;
        //         },
        //         error => console.log(error)
        //     );
        var _this = this;
        this._lensAdminService.getLenses()
            .subscribe(function (lenses) {
            _this.lensData = lenses;
            _this.processing = false;
        }, function (error) { return console.log(error); });
    };
    LensAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lens-admin',
            templateUrl: 'lens-admin.component.html',
            directives: [spinner_component_1.SpinnerComponent]
        }), 
        __metadata('design:paramtypes', [lens_admin_service_1.LensAdminService])
    ], LensAdminComponent);
    return LensAdminComponent;
}());
exports.LensAdminComponent = LensAdminComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2xlbnMtYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFDeEQsa0NBQWlDLDZCQUE2QixDQUFDLENBQUE7QUFTL0Q7SUFJSSw0QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFGdkQsZUFBVSxHQUFHLElBQUksQ0FBQztJQUV3QyxDQUFDO0lBRTNELHFDQUFRLEdBQVI7UUFDSSxvQ0FBb0M7UUFDcEMsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixzQ0FBc0M7UUFDdEMsdUNBQXVDO1FBQ3ZDLGFBQWE7UUFDYixzQ0FBc0M7UUFDdEMsU0FBUztRQVJiLGlCQWtCQztRQVJHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7YUFDN0IsU0FBUyxDQUNOLFVBQUEsTUFBTTtZQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFDVixDQUFDO0lBL0JMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQ2pDLENBQUM7OzBCQUFBO0lBMkJGLHlCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQXpCWSwwQkFBa0IscUJBeUI5QixDQUFBIiwiZmlsZSI6ImFkbWluL2xlbnMtYWRtaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExlbnMgfSBmcm9tICcuLi9jb21tb24vbGVucyc7XG5pbXBvcnQgeyBMZW5zQWRtaW5TZXJ2aWNlIH0gZnJvbSAnLi9sZW5zLWFkbWluLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdsZW5zLWFkbWluJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2xlbnMtYWRtaW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtTcGlubmVyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIExlbnNBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbGVuc0RhdGE6IExlbnNbXTtcbiAgICBwcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sZW5zQWRtaW5TZXJ2aWNlOiBMZW5zQWRtaW5TZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIHRoaXMuX2xlbnNBZG1pblNlcnZpY2UuZ2V0U3R1ZmYoKVxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAgICAgICBsZW5zZXMgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmxlbnNEYXRhID0gbGVuc2VzO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2xlbnNBZG1pblNlcnZpY2UuZ2V0TGVuc2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbGVuc2VzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5zRGF0YSA9IGxlbnNlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
