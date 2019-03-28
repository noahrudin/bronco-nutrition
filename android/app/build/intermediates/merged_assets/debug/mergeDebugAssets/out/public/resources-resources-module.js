(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resources-resources-module"],{

/***/ "./src/app/resources/resources.module.ts":
/*!***********************************************!*\
  !*** ./src/app/resources/resources.module.ts ***!
  \***********************************************/
/*! exports provided: ResourcesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPageModule", function() { return ResourcesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resources_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources.page */ "./src/app/resources/resources.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ResourcesPageModule = /** @class */ (function () {
    function ResourcesPageModule() {
    }
    ResourcesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _resources_page__WEBPACK_IMPORTED_MODULE_5__["ResourcesPage"]
                    }
                ])
            ],
            declarations: [_resources_page__WEBPACK_IMPORTED_MODULE_5__["ResourcesPage"]]
        })
    ], ResourcesPageModule);
    return ResourcesPageModule;
}());



/***/ }),

/***/ "./src/app/resources/resources.page.html":
/*!***********************************************!*\
  !*** ./src/app/resources/resources.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Resources\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-grid fixed>\r\n      <ion-row align-items-stretch>\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-item detail=\"false\" lines=\"none\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"https://preco.boisestate.edu/wp-content/blogs.dir/1/files/2012/02/horton-brown_hilary_web-201x300.jpg\">\r\n                </ion-avatar>\r\n                Hilary Horton-Brown\r\n              </ion-item>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                  <div text-center>\r\n                      <h2>Director of Sports Nutrition</h2>\r\n                    </div>\r\n              </ion-list>\r\n            <ion-button expand=\"block\" justify-content-center fill=\"outline\" href=\"mailto:spiritfit@msn.com\"> \r\n              <ion-icon  slot=\"start\" name=\"mail\"></ion-icon>Contact</ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-item detail=\"false\" lines=\"none\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"https://broncosports.com/images/2013/3/6/8659141.jpeg\">\r\n                </ion-avatar>\r\n                Tyler Smith\r\n              </ion-item>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <ion-list>\r\n                  <div text-center>\r\n                      <h2>Associate Athletic Trainer LAT/ATC CISSN</h2>\r\n                    </div>\r\n              </ion-list>\r\n            <ion-button expand=\"block\" justify-content-center fill=\"outline\" href=\"mailto:tylersmith1@boisestate.edu\"> \r\n              <ion-icon slot=\"start\" name=\"mail\"></ion-icon>Contact</ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-item detail=\"false\" lines=\"none\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"http://grfx.cstv.com/photos/schools/bosu/sports/genrel/auto_headshot/12059303.jpeg\">\r\n                </ion-avatar>\r\n                Nicole Denno\r\n              </ion-item>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                  <div text-center>\r\n                      <h2>Assistant Athletic Trainer LAT/ATC</h2>\r\n                    </div>\r\n              </ion-list>\r\n            <ion-button expand=\"block\" justify-content-center fill=\"outline\" href=\"mailto:nicoledenno@boisestate.edu\"> \r\n              <ion-icon slot=\"start\" name=\"mail\"></ion-icon>Contact</ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-item detail=\"false\" lines=\"none\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img src=\"https://broncosports.com/images/2018/9/19/Whitmer_Tyler_150x225.jpg\">\r\n                </ion-avatar>\r\n                Tyler Whitmer\r\n              </ion-item>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <ion-list>\r\n                  <div text-center>\r\n                      <h2>Associate Director of Olympic Sports CSCS/SCCC</h2>\r\n                    </div>\r\n              </ion-list>\r\n            <ion-button expand=\"block\" justify-content-center fill=\"outline\" href=\"mailto:tylerwhitmer@boisestate.edu\"> \r\n              <ion-icon slot=\"start\" name=\"mail\"></ion-icon>Contact</ion-button>\r\n            </ion-card-content>\r\n          </ion-card>\r\n          \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/resources/resources.page.scss":
/*!***********************************************!*\
  !*** ./src/app/resources/resources.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2VzL0M6XFxVc2Vyc1xcYWRmb3lcXGlvbmljX0FwcFxcYnJvbmNvLW51dHJpdGlvbjIvc3JjXFxhcHBcXHJlc291cmNlc1xccmVzb3VyY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Jlc291cmNlcy9yZXNvdXJjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/resources/resources.page.ts":
/*!*********************************************!*\
  !*** ./src/app/resources/resources.page.ts ***!
  \*********************************************/
/*! exports provided: ResourcesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesPage", function() { return ResourcesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResourcesPage = /** @class */ (function () {
    function ResourcesPage() {
    }
    ResourcesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./resources.page.html */ "./src/app/resources/resources.page.html"),
            styles: [__webpack_require__(/*! ./resources.page.scss */ "./src/app/resources/resources.page.scss")]
        })
    ], ResourcesPage);
    return ResourcesPage;
}());



/***/ })

}]);
//# sourceMappingURL=resources-resources-module.js.map