(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodlist-foodlist-module"],{

/***/ "./src/app/foodlist/foodlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/foodlist/foodlist.module.ts ***!
  \*********************************************/
/*! exports provided: FoodListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListPageModule", function() { return FoodListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _foodlist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodlist.page */ "./src/app/foodlist/foodlist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FoodListPageModule = /** @class */ (function () {
    function FoodListPageModule() {
    }
    FoodListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _foodlist_page__WEBPACK_IMPORTED_MODULE_5__["FoodListPage"]
                    }
                ])
            ],
            declarations: [_foodlist_page__WEBPACK_IMPORTED_MODULE_5__["FoodListPage"]]
        })
    ], FoodListPageModule);
    return FoodListPageModule;
}());



/***/ }),

/***/ "./src/app/foodlist/foodlist.page.html":
/*!*********************************************!*\
  !*** ./src/app/foodlist/foodlist.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Food and Snack List\n    </ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>Take a look at approved grazing items!\n      </ion-card-content></ion-card>\n  <ion-card>\n  <ion-list>\n    <ion-item [class.highlight]=\"item.selected\" *ngFor=\"let item of items; let i = index\">\n      {{item.title}}\n      <ion-label item-right text-right>Macro</ion-label>\n    </ion-item>\n  </ion-list></ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/foodlist/foodlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/foodlist/foodlist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RsaXN0L2Zvb2RsaXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/foodlist/foodlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/foodlist/foodlist.page.ts ***!
  \*******************************************/
/*! exports provided: FoodListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListPage", function() { return FoodListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FoodListPage = /** @class */ (function () {
    function FoodListPage(firebaseAuth, navCtrl) {
        this.firebaseAuth = firebaseAuth;
        this.navCtrl = navCtrl;
        this.items = [];
        // grab the recipes we got from firebase, and
        // put use their titles for the UI list.
        this.recipes = this.firebaseAuth.getRecipes;
        var i = 1;
        while (this.recipes[i]) { //check for valid element, live
            this.items.push({
                title: this.recipes[i].getRecipeTitle
            });
            i++;
        }
    }
    FoodListPage.prototype.ngOnInit = function () {
    };
    FoodListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./foodlist.page.html */ "./src/app/foodlist/foodlist.page.html"),
            styles: [__webpack_require__(/*! ./foodlist.page.scss */ "./src/app/foodlist/foodlist.page.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], FoodListPage);
    return FoodListPage;
}());



/***/ })

}]);
//# sourceMappingURL=foodlist-foodlist-module.js.map