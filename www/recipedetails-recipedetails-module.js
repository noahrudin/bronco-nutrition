(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipedetails-recipedetails-module"],{

/***/ "./src/app/recipedetails/recipedetails.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/recipedetails/recipedetails.module.ts ***!
  \*******************************************************/
/*! exports provided: RecipeDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsPageModule", function() { return RecipeDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipedetails_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipedetails.page */ "./src/app/recipedetails/recipedetails.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecipeDetailsPageModule = /** @class */ (function () {
    function RecipeDetailsPageModule() {
    }
    RecipeDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _recipedetails_page__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsPage"]
                    }
                ])
            ],
            declarations: [_recipedetails_page__WEBPACK_IMPORTED_MODULE_5__["RecipeDetailsPage"]]
        })
    ], RecipeDetailsPageModule);
    return RecipeDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/recipedetails/recipedetails.page.html":
/*!*******************************************************!*\
  !*** ./src/app/recipedetails/recipedetails.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Details</ion-title>\n        <ion-buttons slot=\"primary\">\n            <ion-button fill='outline' (click)=\"bookmarkClick()\" [ngClass]=\"{'activated' : isBookmarked }\"><ion-icon name=\"bookmark\"></ion-icon></ion-button>\n          </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n  <ion-card-header>\n      <ion-card-title>{{recipeTitle}}</ion-card-title>\n      {{macroString}}\n  </ion-card-header>\n</ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Serving Size (People)</ion-card-subtitle>\n      <ion-card-title>{{servingSize}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Prep Time</ion-card-subtitle>\n      <ion-card-title>{{prepTime}}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Ingredients</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let ingredient of ingredients;\">\n          <ion-label text-wrap>{{ingredient.name}}</ion-label>\n          <ion-checkbox slot=\"end\" [(ngModel)]=\"ingredient.isChecked\"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Steps</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let step of steps;\">\n          {{step.str}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recipedetails/recipedetails.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/recipedetails/recipedetails.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ub255L0RvY3VtZW50cy9icm9uY28tbnV0cml0aW9uL3NyYy9hcHAvcmVjaXBlZGV0YWlscy9yZWNpcGVkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlZGV0YWlscy9yZWNpcGVkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIC8vb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recipedetails/recipedetails.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/recipedetails/recipedetails.page.ts ***!
  \*****************************************************/
/*! exports provided: RecipeDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailsPage", function() { return RecipeDetailsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Recipe */ "./src/app/Recipe.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipelist_recipelist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipelist/recipelist.page */ "./src/app/recipelist/recipelist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RecipeDetailsPage = /** @class */ (function () {
    function RecipeDetailsPage(navCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.ingredients = [];
        this.steps = [];
        this.recipeToDisplay = _recipelist_recipelist_page__WEBPACK_IMPORTED_MODULE_3__["RecipeListPage"].getSelectedRecipe;
        this.recipeTitle = this.recipeToDisplay.getRecipeTitle;
        this.servingSize = this.recipeToDisplay.getNumServings;
        this.prepTime = this.recipeToDisplay.getPrepTime;
        this.macros = this.recipeToDisplay.getMacros;
        // populate lists of ingredients and steps
        this.setupIngredientsList();
        this.setupStepsList();
        this.macroString = this.getMacroString();
        this.isBookmarked = false;
    }
    RecipeDetailsPage.prototype.bookmarkClick = function () {
        this.presentToast();
        this.bookmarkRecipe();
    };
    RecipeDetailsPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Recipe Bookmarked',
                            duration: 1500
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecipeDetailsPage.prototype.bookmarkRecipe = function () {
        //skeleton to be filled in by Austin/Tony
    };
    RecipeDetailsPage.prototype.isRecipeBookmarked = function () {
        // check and see if the recipe is saved to local storage.
        return true;
    };
    RecipeDetailsPage.prototype.setupIngredientsList = function () {
        for (var i = 0; i < this.recipeToDisplay.getIngredients.length; i++) {
            this.ingredients.push({
                name: this.recipeToDisplay.getIngredients[i]
            });
        }
    };
    RecipeDetailsPage.prototype.setupStepsList = function () {
        for (var i = 0; i < this.recipeToDisplay.getSteps.length; i++) {
            this.steps.push({
                str: this.recipeToDisplay.getSteps[i]
            });
        }
    };
    RecipeDetailsPage.prototype.stringifyMacro = function (macro) {
        if (macro === _Recipe__WEBPACK_IMPORTED_MODULE_1__["Macro"].Carbohydrates) {
            return 'Carbohydrates';
        }
        else if (macro === _Recipe__WEBPACK_IMPORTED_MODULE_1__["Macro"].Fat) {
            return 'Fats';
        }
        else {
            return 'Protein';
        }
    };
    RecipeDetailsPage.prototype.getMacroString = function () {
        var macroString = '';
        for (var i = 0; i < this.macros.length; i++) {
            macroString += this.stringifyMacro(this.macros[i]);
            if (i < this.macros.length - 1) {
                macroString += ', ';
            }
        }
        return macroString;
    };
    RecipeDetailsPage.prototype.ngOnInit = function () {
    };
    RecipeDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./recipedetails.page.html */ "./src/app/recipedetails/recipedetails.page.html"),
            styles: [__webpack_require__(/*! ./recipedetails.page.scss */ "./src/app/recipedetails/recipedetails.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], RecipeDetailsPage);
    return RecipeDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipedetails-recipedetails-module.js.map