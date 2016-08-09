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
var LensAdminComponent = (function () {
    function LensAdminComponent(_lensAdminService) {
        this._lensAdminService = _lensAdminService;
        this.processing = true;
    }
    LensAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._lensAdminService.getMessages()
            .subscribe(function (lenses) {
            _this.lensData = lenses;
            _this.processing = false;
        }, function (error) { return console.log(error); });
    };
    LensAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lens-admin',
            templateUrl: 'lens-admin.component.html'
        }), 
        __metadata('design:paramtypes', [lens_admin_service_1.LensAdminService])
    ], LensAdminComponent);
    return LensAdminComponent;
}());
exports.LensAdminComponent = LensAdminComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2xlbnMtYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFTeEQ7SUFJSSw0QkFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFGdkQsZUFBVSxHQUFHLElBQUksQ0FBQztJQUV3QyxDQUFDO0lBRTNELHFDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUU7YUFDL0IsU0FBUyxDQUNOLFVBQUEsTUFBTTtZQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUM7SUFDVixDQUFDO0lBdEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMkJBQTJCO1NBRTNDLENBQUM7OzBCQUFBO0lBa0JGLHlCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSwwQkFBa0IscUJBZ0I5QixDQUFBIiwiZmlsZSI6ImFkbWluL2xlbnMtYWRtaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExlbnMgfSBmcm9tICcuLi9jb21tb24vbGVucyc7XG5pbXBvcnQgeyBMZW5zQWRtaW5TZXJ2aWNlIH0gZnJvbSAnLi9sZW5zLWFkbWluLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbGVucy1hZG1pbicsXG4gICAgdGVtcGxhdGVVcmw6ICdsZW5zLWFkbWluLmNvbXBvbmVudC5odG1sJ1xuICAgIFxufSlcblxuZXhwb3J0IGNsYXNzIExlbnNBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbGVuc0RhdGE6IExlbnNbXTtcbiAgICBwcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sZW5zQWRtaW5TZXJ2aWNlOiBMZW5zQWRtaW5TZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2xlbnNBZG1pblNlcnZpY2UuZ2V0TWVzc2FnZXMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBsZW5zZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlbnNEYXRhID0gbGVuc2VzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
