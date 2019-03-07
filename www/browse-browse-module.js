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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Recipes and Food\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n          <ion-button fill = \"outline\" expand=\"block\" lines = \"none\" (click)=foodListClick() detail>\r\n            Browse a la Carte Food Items\r\n          </ion-button>\r\n    <ion-searchbar animated debounce=\"500\" placeholder=\"Search Here\" name= \"search\"(ionInput)=\"getRecipes($event)\" ></ion-searchbar>\r\n    <ion-list>\r\n      <ion-card>\r\n        <ion-item *ngFor=\"let recipe of recipeList\" (click)=listItemClick(i) detail>\r\n        {{recipe}}\r\n        </ion-item>\r\n      </ion-card>\r\n    </ion-list>\r\n\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/browse/browse.page.scss":
/*!*****************************************!*\
  !*** ./src/app/browse/browse.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJvd3NlL0M6XFxVc2Vyc1xcbm9haC5ydWRpblxcRGVza3RvcFxcYnJvbmNvLW51dHJpdGlvbi9zcmNcXGFwcFxcYnJvd3NlXFxicm93c2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9icm93c2UvYnJvd3NlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICAvL292ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */"

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
        this.recipedb = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('masterSheet/');
        this.fooddb = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref('foodSheet/');
        this.recipedb.on('value', function (recipeList) {
            var recipes = [];
            recipeList.forEach(function (recipe) {
                recipes.push(recipe.val());
                return false;
            });
            _this.recipeList = recipes;
            _this.loadedRecipeList = recipes;
        });
    }
    //Austin, can you have this act like the selecting 
    //list component in recipelist.page.ts?
    BrowsePage.prototype.listItemClick = function (index) {
        //RecipeListPage.selectedRecipe = this.recipes[index + 1];
        this.navCtrl.navigateForward('recipedetails');
    };
    BrowsePage.prototype.foodListClick = function () {
        this.navCtrl.navigateForward('foodlist');
    };
    BrowsePage.prototype.initializeRecipes = function () {
        this.recipeList = this.loadedRecipeList;
    };
    BrowsePage.prototype.getRecipes = function (searchbar) {
        var _this = this;
        var search = searchbar.srcElement.value;
        this.initializeRecipes();
        this.recipeList = this.recipeList.filter(function (val) {
            if (val && search) {
                if ((val[0].indexOf(search) > -1) || (val[0].toLowerCase().indexOf(search) > -1)) {
                    _this.componentRecipe = search;
                    return true;
                }
                return false;
            }
        });
        // console.log(search, this.recipeList.length);
    };
    BrowsePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./browse.page.html */ "./src/app/browse/browse.page.html"),
            styles: [__webpack_require__(/*! ./browse.page.scss */ "./src/app/browse/browse.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], BrowsePage);
    return BrowsePage;
}());



/***/ })

}]);
//# sourceMappingURL=browse-browse-module.js.map