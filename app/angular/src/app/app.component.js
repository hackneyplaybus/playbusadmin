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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    // Used to monitor the window size to display sidebar
    function AppComponent(ngZone) {
        this.ngZone = ngZone;
        this.show = false;
        this.width = window.innerWidth;
        //height: number = 0;
        this.leftMargin = '0px';
    }
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.onresize = function (e) {
            _this.ngZone.run(function () {
                _this.width = window.innerWidth;
                //this.height = window.innerHeight;
            });
        };
    };
    AppComponent.prototype.showSidebar = function () {
        if (this.width > 933) {
            this.show = false;
            this.leftMargin = '150px';
            return true;
        }
        this.leftMargin = '0px';
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'playbus-app',
        templateUrl: "./templates/app.component.html",
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map