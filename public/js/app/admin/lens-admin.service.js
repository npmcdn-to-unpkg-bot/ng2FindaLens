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
    }
    LensAdminService.prototype.getMessages = function () {
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
    LensAdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LensAdminService);
    return LensAdminService;
}());
exports.LensAdminService = LensAdminService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2xlbnMtYWRtaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUV6RCxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTyx5QkFBeUIsQ0FBQyxDQUFBO0FBQ2pDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUduQztJQUVJLDBCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUQvQixXQUFNLEdBQVcsRUFBRSxDQUFDO0lBQ2MsQ0FBQztJQUVuQyxzQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQzthQUMvQixHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUNyQiwwQ0FBMEM7WUFDMUMsNFJBQTRSO1lBQzVSLHlCQUF5QjtZQUN6Qix1QkFBdUI7WUFDdkIsSUFBSTtZQUVKLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDRixtREFBbUQ7UUFDbkQsZ0JBQWdCO1FBQ2hCLHNDQUFzQztRQUN0QyxrQkFBa0I7UUFDbEIsTUFBTTtJQUNkLENBQUM7SUF2Qkw7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQXdCYix1QkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2Qlksd0JBQWdCLG1CQXVCNUIsQ0FBQSIsImZpbGUiOiJhZG1pbi9sZW5zLWFkbWluLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMZW5zIH0gZnJvbSAnLi4vY29tbW9uL2xlbnMnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExlbnNBZG1pblNlcnZpY2Uge1xuICAgIGxlbnNlczogTGVuc1tdID0gW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuICAgIGdldE1lc3NhZ2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJy9hcGkvbGVuc2VzJylcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBsZW5zID0gbmV3IExlbnMoZGF0YVtpXS5sZW5zTmFtZSwgJ251bGwnLCAwLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsIGZhbHNlLCAnbnVsbCcsICdudWxsJywgZmFsc2UsIGZhbHNlLCAnbnVsbCcsIGZhbHNlLCAwLCAwLCAwLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCAnbnVsbCcsICdudWxsJywgJ251bGwnLCBkYXRhW2ldLmJyYW5kKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobGVucyk7XG4gICAgICAgICAgICAgICAgLy8gICAgIG9ianMucHVzaChsZW5zKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XG4gICAgICAgICAgICAvLyAubWFwKHJlcyA9PiB7XG4gICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocmVzLmpzb24oKS5vYmopO1xuICAgICAgICAgICAgLy8gICAgIHJlcy5qc29uKCk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
