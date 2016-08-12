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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var LensAdminService = (function () {
    function LensAdminService(_http) {
        this._http = _http;
        this.lenses = [];
        this._url = 'http://findalensapi.herokuapp.com/api';
        this._localUrl = 'http://localhost:8000/api';
    }
    LensAdminService.prototype.getStuff = function () {
        return this._http.get('/api/lenses')
            .map(function (response) {
            var data = response.json();
            var objs = [];
            // for (let i = 0; i < data.length; i++) {
            //     let lens = new Lens(data[i].lensName, 'null', 0, 'null', 'null', 'null', 'null', false, 'null', 'null', false, false, 'null', false, 0, 0, 0, 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', data[i].brand);
            //     console.log(lens);
            //     objs.push(lens);
            // }
            return data;
        });
        // .catch(error => Observable.throw(error.json()));
        // .map(res => {
        //     // console.log(res.json().obj);
        //     res.json();
        // });
    };
    LensAdminService.prototype.getLenses = function () {
        return this._http.get(this._localUrl + '/lenses')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    LensAdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LensAdminService);
    return LensAdminService;
}());
exports.LensAdminService = LensAdminService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2xlbnMtYWRtaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUV6RCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUduQztJQUtJLDBCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUovQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ1osU0FBSSxHQUFHLHVDQUF1QyxDQUFDO1FBQy9DLGNBQVMsR0FBRywyQkFBMkIsQ0FBQztJQUVkLENBQUM7SUFFbkMsbUNBQVEsR0FBUjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDL0IsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNULElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7WUFDckIsMENBQTBDO1lBQzFDLDRSQUE0UjtZQUM1Uix5QkFBeUI7WUFDekIsdUJBQXVCO1lBQ3ZCLElBQUk7WUFFSixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsbURBQW1EO1FBQ25ELGdCQUFnQjtRQUNoQixzQ0FBc0M7UUFDdEMsa0JBQWtCO1FBQ2xCLE1BQU07SUFDZCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzthQUM1QyxHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0osSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBbENMO1FBQUMsaUJBQVUsRUFBRTs7d0JBQUE7SUFtQ2IsdUJBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLHdCQUFnQixtQkFrQzVCLENBQUEiLCJmaWxlIjoiYWRtaW4vbGVucy1hZG1pbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGVucyB9IGZyb20gJy4uL2NvbW1vbi9sZW5zJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMZW5zQWRtaW5TZXJ2aWNlIHtcbiAgICBsZW5zZXM6IExlbnNbXSA9IFtdO1xuICAgIHByaXZhdGUgX3VybCA9ICdodHRwOi8vZmluZGFsZW5zYXBpLmhlcm9rdWFwcC5jb20vYXBpJztcbiAgICBwcml2YXRlIF9sb2NhbFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBnZXRTdHVmZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCcvYXBpL2xlbnNlcycpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgbGVucyA9IG5ldyBMZW5zKGRhdGFbaV0ubGVuc05hbWUsICdudWxsJywgMCwgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCBmYWxzZSwgJ251bGwnLCAnbnVsbCcsIGZhbHNlLCBmYWxzZSwgJ251bGwnLCBmYWxzZSwgMCwgMCwgMCwgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsICdudWxsJywgZGF0YVtpXS5icmFuZCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGxlbnMpO1xuICAgICAgICAgICAgICAgIC8vICAgICBvYmpzLnB1c2gobGVucyk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgICAgICAgICAgLy8gLm1hcChyZXMgPT4ge1xuICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlcy5qc29uKCkub2JqKTtcbiAgICAgICAgICAgIC8vICAgICByZXMuanNvbigpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ2V0TGVuc2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fbG9jYWxVcmwgKyAnL2xlbnNlcycpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
