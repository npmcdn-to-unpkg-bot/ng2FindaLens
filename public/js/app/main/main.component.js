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
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main',
            template: "\n        <div class=\"jumbotron \">\n            <div class=\"container\">\n                <h1 class=\"cover-heading\">Find-A-Lens new home page</h1>\n                <a ui-sref=\"brands\" class=\"\">Choose your camera brand</a>\n            </div>\n        </div> <!-- end jumbotron -->\n\n        <section id=\"intro\" style=\"height: 400px; background-color: #efefef;\">\n            <h2>Intro</h2>\n        </section>\n\n        <section id=\"intro2\" style=\"height: 300px; background-color: #ff6600;\">\n            <h2>Intro2</h2>\n        </section>\n\n        <section id=\"intro3\" style=\"height: 400px; background-color: #145a80;\">\n            <h2>Intro3</h2>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQTBCbEQ7SUFDSTtJQUFnQixDQUFDO0lBRWpCLGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBM0JsQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLCtyQkFtQlQ7U0FDSixDQUFDOztxQkFBQTtJQU1GLG9CQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxxQkFBYSxnQkFLekIsQ0FBQSIsImZpbGUiOiJtYWluL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21haW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb24gXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY292ZXItaGVhZGluZ1wiPkZpbmQtQS1MZW5zIG5ldyBob21lIHBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XCJicmFuZHNcIiBjbGFzcz1cIlwiPkNob29zZSB5b3VyIGNhbWVyYSBicmFuZDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gPCEtLSBlbmQganVtYm90cm9uIC0tPlxuXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiaW50cm9cIiBzdHlsZT1cImhlaWdodDogNDAwcHg7IGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XCI+XG4gICAgICAgICAgICA8aDI+SW50cm88L2gyPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJpbnRybzJcIiBzdHlsZT1cImhlaWdodDogMzAwcHg7IGJhY2tncm91bmQtY29sb3I6ICNmZjY2MDA7XCI+XG4gICAgICAgICAgICA8aDI+SW50cm8yPC9oMj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiaW50cm8zXCIgc3R5bGU9XCJoZWlnaHQ6IDQwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ1YTgwO1wiPlxuICAgICAgICAgICAgPGgyPkludHJvMzwvaDI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
