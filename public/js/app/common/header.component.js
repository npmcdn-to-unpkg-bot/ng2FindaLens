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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header',
            template: "\n        <!-- Navigation -->\n        <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Find-A-Lens</a>\n                </div>\n\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n                    <ul class=\"nav navbar-nav\">\n                        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->\n                        <li class=\"hidden\">\n                            <a ui-sref=\"home\">Home</a>\n                        </li>\n                        <li>\n                            <a ui-sref=\"canon\" ui-sref-active=\"active\">Canon</a>\n                        </li>\n                        <li>\n                            <a ui-sref=\"nikon\" ui-sref-active=\"active\">Nikon</a>\n                        </li>\n                        <li>\n                            <a href=\"/sony\">Sony</a>\n                        </li>\n                    </ul>\n<!--                    <button type=\"button\" ng-click=\"clickToOpen()\" class=\"btn navbar-btn pull-right\">Login</button>-->\n<!--                    <button type=\"button\" ng-click=\"\" class=\"btn navbar-btn btn-default pull-right\"><a href=\"/lenses\">Lenses</a></button>-->\n                    <p class=\"navbar-text navbar-right\"><a [routerLink]=\"['/lens-admin']\" class=\"navbar-link\">View Lenses</a></p>\n                </div>\n                <!-- /.navbar-collapse -->\n            </div>\n            <!-- /.container -->\n        </nav>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUErQ3BEO0lBQ0k7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQWhEbEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx5cUVBdUNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDbEMsQ0FBQzs7dUJBQUE7SUFNRixzQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksdUJBQWUsa0JBSzNCLENBQUEiLCJmaWxlIjoiY29tbW9uL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8IS0tIE5hdmlnYXRpb24gLS0+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItZXgxLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgW3JvdXRlckxpbmtdPVwiWycvJ11cIj5GaW5kLUEtTGVuczwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gQ29sbGVjdCB0aGUgbmF2IGxpbmtzLCBmb3JtcywgYW5kIG90aGVyIGNvbnRlbnQgZm9yIHRvZ2dsaW5nIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgbmF2YmFyLWV4MS1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBIaWRkZW4gbGkgaW5jbHVkZWQgdG8gcmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIGFib3V0IGxpbmsgd2hlbiBzY3JvbGxlZCB1cCBwYXN0IGFib3V0IHNlY3Rpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVwiaG9tZVwiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XCJjYW5vblwiIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlXCI+Q2Fub248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHVpLXNyZWY9XCJuaWtvblwiIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlXCI+Tmlrb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc29ueVwiPlNvbnk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmctY2xpY2s9XCJjbGlja1RvT3BlbigpXCIgY2xhc3M9XCJidG4gbmF2YmFyLWJ0biBwdWxsLXJpZ2h0XCI+TG9naW48L2J1dHRvbj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5nLWNsaWNrPVwiXCIgY2xhc3M9XCJidG4gbmF2YmFyLWJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCI+PGEgaHJlZj1cIi9sZW5zZXNcIj5MZW5zZXM8L2E+PC9idXR0b24+LS0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmF2YmFyLXRleHQgbmF2YmFyLXJpZ2h0XCI+PGEgW3JvdXRlckxpbmtdPVwiWycvbGVucy1hZG1pbiddXCIgY2xhc3M9XCJuYXZiYXItbGlua1wiPlZpZXcgTGVuc2VzPC9hPjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIC8ubmF2YmFyLWNvbGxhcHNlIC0tPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIC8uY29udGFpbmVyIC0tPlxuICAgICAgICA8L25hdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==