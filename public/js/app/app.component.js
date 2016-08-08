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
var header_component_1 = require('./common/header.component');
var footer_component_1 = require('./common/footer.component');
var main_component_1 = require('./main/main.component');
var lens_admin_component_1 = require('./admin/lens-admin.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <div class=\"wrapper\">\n            <header></header>\n            <div id=\"content\">\n                <router-outlet></router-outlet>\n            </div>  <!--  end content -->\n\n            <div class=\"push\"></div>\n        </div>\n        <footer></footer>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            precompile: [main_component_1.MainComponent, lens_admin_component_1.LensAdminComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCxpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCxxQ0FBbUMsOEJBQThCLENBQUMsQ0FBQTtBQW9CbEU7SUFBQTtJQUEyQixDQUFDO0lBbEI1QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJSQVVUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxrQ0FBZSxDQUFDO1lBQ2pFLFVBQVUsRUFBRSxDQUFDLDhCQUFhLEVBQUUseUNBQWtCLENBQUM7U0FDbEQsQ0FBQzs7b0JBQUE7SUFFeUIsbUJBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsb0JBQVksZUFBRyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24vZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7IExlbnNBZG1pbkNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vbGVucy1hZG1pbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGhlYWRlcj48L2hlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgPC9kaXY+ICA8IS0tICBlbmQgY29udGVudCAtLT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1c2hcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEhlYWRlckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50XSxcbiAgICBwcmVjb21waWxlOiBbTWFpbkNvbXBvbmVudCwgTGVuc0FkbWluQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
