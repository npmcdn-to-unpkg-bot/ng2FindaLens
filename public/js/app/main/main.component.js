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
var router_1 = require('@angular/router');
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () { };
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main',
            template: "\n        <div class=\"jumbotron \">\n            <div class=\"container\">\n                <h1 class=\"cover-heading\">Find-A-Lens new home page</h1>\n                <a [routerLink]=\"['/camera-choice']\" class=\"btn btn-default\">\n                    <span class=\"glyphicon glyphicon-check\"></span>\n                    Choose your camera Brand\n                </a>\n            </div>\n        </div> <!-- end jumbotron -->\n\n        <section id=\"intro\" style=\"height: 400px; background-color: #efefef;\">\n            <h2>Intro</h2>\n        </section>\n\n        <section id=\"intro2\" style=\"height: 300px; background-color: #ff6600;\">\n            <h2>Intro2</h2>\n        </section>\n\n        <section id=\"intro3\" style=\"height: 400px; background-color: #145a80;\">\n            <h2>Intro3</h2>\n        </section>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQThCcEQ7SUFDSTtJQUFnQixDQUFDO0lBRWpCLGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBL0JsQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLDgwQkFzQlQ7WUFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNsQyxDQUFDOztxQkFBQTtJQU1GLG9CQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxxQkFBYSxnQkFLekIsQ0FBQSIsImZpbGUiOiJtYWluL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21haW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb24gXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiY292ZXItaGVhZGluZ1wiPkZpbmQtQS1MZW5zIG5ldyBob21lIHBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2NhbWVyYS1jaG9pY2UnXVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGVja1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIHlvdXIgY2FtZXJhIEJyYW5kXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiA8IS0tIGVuZCBqdW1ib3Ryb24gLS0+XG5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJpbnRyb1wiIHN0eWxlPVwiaGVpZ2h0OiA0MDBweDsgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcIj5cbiAgICAgICAgICAgIDxoMj5JbnRybzwvaDI+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBpZD1cImludHJvMlwiIHN0eWxlPVwiaGVpZ2h0OiAzMDBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjYwMDtcIj5cbiAgICAgICAgICAgIDxoMj5JbnRybzI8L2gyPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJpbnRybzNcIiBzdHlsZT1cImhlaWdodDogNDAwcHg7IGJhY2tncm91bmQtY29sb3I6ICMxNDVhODA7XCI+XG4gICAgICAgICAgICA8aDI+SW50cm8zPC9oMj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
