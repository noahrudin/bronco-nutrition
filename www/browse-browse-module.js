(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse-browse-module"],{

/***/ "./src/app/browse/browse.module.ts":
/*!*****************************************!*\
  !*** ./src/app/browse/browse.module.ts ***!
  \*****************************************/
/*! exports provided: BrowsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsePageModule", function() { return BrowsePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _browse_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browse.page */ "./src/app/browse/browse.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BrowsePageModule = /** @class */ (function () {
    function BrowsePageModule() {
    }
    BrowsePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _browse_page__WEBPACK_IMPORTED_MODULE_5__["BrowsePage"]
                    }
                ])
            ],
            declarations: [_browse_page__WEBPACK_IMPORTED_MODULE_5__["BrowsePage"]]
        })
    ], BrowsePageModule);
    return BrowsePageModule;
}());



/***/ }),

/***/ "./src/app/browse/browse.page.html":
/*!*****************************************!*\
  !*** ./src/app/browse/browse.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Food Items\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-searchbar animated debounce=\"500\" placeholder=\"Search Here\" name=\"search\" (ionInput)=\"getFoodItems($event)\"></ion-searchbar>\n    <ion-list>\n        <ion-item *ngFor=\"let item of foodList;\">\n            {{item[0]}}\n            <ion-label item-right text-right>{{item[1]}}</ion-label>\n        </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/browse/browse.page.scss":
/*!*****************************************!*\
  !*** ./src/app/browse/browse.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh; }\n\nion-label {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/browse/browse.page.ts":
/*!***************************************!*\
  !*** ./src/app/browse/browse.page.ts ***!
  \***************************************/
/*! exports provided: BrowsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsePage", function() { return BrowsePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowsePage = /** @class */ (function () {
    function BrowsePage(navCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.foodDB = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]()
            .ref('foodSheet/');
        this.foodDB.on('value', function (foodList) {
            var foods = [];
            foodList.forEach(function (food) {
                foods.push(food.val());
                return false;
            });
            _this.foodList = foods;
        });
        this.foodList.shift(); // get rid of descriptions
        this.loadedFoodList = this.foodList;
    }
    // Austin, can you have this act like the selecting
    // list component in foodList.page.ts?
    BrowsePage.prototype.foodListClick = function () {
        this.navCtrl.navigateForward('foodlist');
    };
    BrowsePage.prototype.initializeFoodList = function () {
        this.foodList = this.loadedFoodList;
    };
    BrowsePage.prototype.getFoodItems = function (searchbar) {
        var _this = this;
        var search = searchbar.srcElement.value;
        this.initializeFoodList();
        if (!search) {
            return;
        }
        this.foodList = this.foodList.filter(function (val) {
            if (val && search) {
                if (val[0].indexOf(search) > -1 ||
                    val[0].toLowerCase().indexOf(search) > -1) {
                    _this.componentFoodItem = search;
                    return true;
                }
                return false;
            }
        });
    };
    BrowsePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./browse.page.html */ "./src/app/browse/browse.page.html"),
            styles: [__webpack_require__(/*! ./browse.page.scss */ "./src/app/browse/browse.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], BrowsePage);
    return BrowsePage;
}());



/***/ })

}]);