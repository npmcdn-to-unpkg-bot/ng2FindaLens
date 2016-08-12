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
var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.visible = true;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SpinnerComponent.prototype, "visible", void 0);
    SpinnerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'spinner',
            template: "\n        <i *ngIf=\"visible\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBU2pEO0lBQUE7UUFDYSxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBRTVCLENBQUM7SUFGRztRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFSWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLGlGQUVUO1NBQ0osQ0FBQzs7d0JBQUE7SUFJRix1QkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksd0JBQWdCLG1CQUc1QixDQUFBIiwiZmlsZSI6ImNvbW1vbi9zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NwaW5uZXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpICpuZ0lmPVwidmlzaWJsZVwiIGNsYXNzPVwiZmEgZmEtc3Bpbm5lciBmYS1zcGluIGZhLTN4XCI+PC9pPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgdmlzaWJsZSA9IHRydWU7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
