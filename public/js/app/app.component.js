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
var brand_choice_component_1 = require('./lens/brand-choice.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <div class=\"wrapper\">\n            <header></header>\n            <div id=\"content\">\n                <router-outlet></router-outlet>\n            </div>  <!--  end content -->\n\n            <div class=\"push\"></div>\n        </div>\n        <footer></footer>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            precompile: [main_component_1.MainComponent, lens_admin_component_1.LensAdminComponent, brand_choice_component_1.BrandChoiceComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCxpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCxpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQTtBQUM1RCwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCxxQ0FBbUMsOEJBQThCLENBQUMsQ0FBQTtBQUNsRSx1Q0FBcUMsK0JBQStCLENBQUMsQ0FBQTtBQW9CckU7SUFBQTtJQUEyQixDQUFDO0lBbEI1QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJSQVVUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxrQ0FBZSxDQUFDO1lBQ2pFLFVBQVUsRUFBRSxDQUFDLDhCQUFhLEVBQUUseUNBQWtCLEVBQUUsNkNBQW9CLENBQUM7U0FDeEUsQ0FBQzs7b0JBQUE7SUFFeUIsbUJBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsb0JBQVksZUFBRyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tbW9uL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21tb24vZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7IExlbnNBZG1pbkNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vbGVucy1hZG1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJhbmRDaG9pY2VDb21wb25lbnQgfSBmcm9tICcuL2xlbnMvYnJhbmQtY2hvaWNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8aGVhZGVyPjwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICA8L2Rpdj4gIDwhLS0gIGVuZCBjb250ZW50IC0tPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVzaFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnRdLFxuICAgIHByZWNvbXBpbGU6IFtNYWluQ29tcG9uZW50LCBMZW5zQWRtaW5Db21wb25lbnQsIEJyYW5kQ2hvaWNlQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
