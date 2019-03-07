(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~account-account-module~foodlist-foodlist-module~login-login-module~recipedetails-recipedetai~2e537e95"],{

/***/ "./src/app/Recipe.ts":
/*!***************************!*\
  !*** ./src/app/Recipe.ts ***!
  \***************************/
/*! exports provided: Macro, Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Macro", function() { return Macro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Macro;
(function (Macro) {
    Macro[Macro["Carbohydrates"] = 0] = "Carbohydrates";
    Macro[Macro["Protein"] = 1] = "Protein";
    Macro[Macro["Fat"] = 2] = "Fat";
})(Macro || (Macro = {}));
var CARBS_STR = 'C';
var PROTEIN_STR = 'P';
var FAT_STR = 'F';
var Recipe = /** @class */ (function () {
    function Recipe(title, numServings, macros, prepTime, ingredients, steps) {
        this.title = title;
        this.numServings = numServings;
        this.macros = macros;
        this.prepTime = prepTime;
        this.ingredients = ingredients;
        this.steps = steps;
    }
    Object.defineProperty(Recipe.prototype, "getRecipeTitle", {
        get: function () {
            return this.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "getNumServings", {
        get: function () {
            return this.numServings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "getMacros", {
        get: function () {
            return this.macros;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "getPrepTime", {
        get: function () {
            return this.prepTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "getIngredients", {
        get: function () {
            return this.ingredients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "getSteps", {
        get: function () {
            return this.steps;
        },
        enumerable: true,
        configurable: true
    });
    Recipe.parseNumServings = function (servings) {
        return servings;
    };
    // parse out the 3 basic nutrition macros from
    // the firebase data store.
    Recipe.parseMacros = function (macros) {
        var returnArray = [];
        if (macros.indexOf('C') !== -1) {
            returnArray.push(Macro.Carbohydrates);
        }
        if (macros.indexOf('P') !== -1) {
            returnArray.push(Macro.Protein);
        }
        if (macros.indexOf('F') !== -1) {
            returnArray.push(Macro.Fat);
        }
        return returnArray;
    };
    Recipe.parseSteps = function (stepsStr) {
        var steps = stepsStr.split("\n");
        var regex = /\d. /;
        for (var i = 0; i < steps.length; i++) {
            steps[i] = steps[i].replace(regex, "");
        }
        return steps;
    };
    Recipe.parseIngredients = function (ingredientsStr) {
        return ingredientsStr.split("\n");
    };
    return Recipe;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: snapshotToRecipeArray, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToRecipeArray", function() { return snapshotToRecipeArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Recipe */ "./src/app/Recipe.ts");
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






var RECIPE_NAME_INDEX = 0;
var NUM_SERVINGS_INDEX = 1;
var MACROS_INDEX = 2;
var PREP_TIME_INDEX = 3;
var INGREDIENTS_INDEX = 4;
var STEPS_INDEX = 5;
var snapshotToRecipeArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        // package everything up into an easily usable Recipe object.
        var title = item[RECIPE_NAME_INDEX];
        var numServings = _Recipe__WEBPACK_IMPORTED_MODULE_5__["Recipe"].parseNumServings(item[NUM_SERVINGS_INDEX]);
        var macros = _Recipe__WEBPACK_IMPORTED_MODULE_5__["Recipe"].parseMacros(item[MACROS_INDEX]);
        var prepTime = item[PREP_TIME_INDEX];
        var ingredients = _Recipe__WEBPACK_IMPORTED_MODULE_5__["Recipe"].parseIngredients(item[INGREDIENTS_INDEX]);
        var steps = _Recipe__WEBPACK_IMPORTED_MODULE_5__["Recipe"].parseSteps(item[STEPS_INDEX]);
        var newRecipe = new _Recipe__WEBPACK_IMPORTED_MODULE_5__["Recipe"](title, numServings, macros, prepTime, ingredients, steps);
        returnArr.push(newRecipe);
    });
    return returnArr;
};
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, navCtrl) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.navCtrl = navCtrl;
        this.recipes = [];
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('recipeSheet/');
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                localStorage.setItem('user', JSON.stringify(_this.user));
                _this.username = localStorage.getItem(_this.user.email);
                _this.navCtrl.navigateRoot(['./home']);
            }
            else {
                localStorage.setItem('user', null);
            }
        });
        // grab recipe data from Firebase, and pack it into an array.
        this.ref.on('value', function (resp) {
            _this.recipes = [];
            _this.recipes = snapshotToRecipeArray(resp);
        });
    }
    AuthService.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, errorMsg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.LOCAL);
                        return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(email, password)];
                    case 1:
                        _a.sent();
                        this.navCtrl.navigateRoot(['./home']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        errorMsg = error_1.message;
                        alert('Error signing in: ' + errorMsg);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signOut()];
                    case 1:
                        _a.sent();
                        localStorage.removeItem('user');
                        this.navCtrl.navigateRoot(['./login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // ask firebase if we have a user logged in currently.
        get: function () {
            if (firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signup = function (firstname, lastname, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(email, password)];
                    case 1:
                        _a.sent();
                        this.confirm_Signup(email);
                        this.accountFirstLastName(firstname, lastname);
                        this.router.navigate(['./login']);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        alert("Error!" + e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.accountEmail = function () {
        return this.user.email;
    };
    AuthService.prototype.accountUserName = function () {
        return this.username;
    };
    AuthService.prototype.resetPassword = function (new_password, conf_password) {
        if (this.afAuth.auth.confirmPasswordReset(new_password, conf_password)) {
            this.user.updatePassword(new_password);
        }
        else {
            alert('Error!: Passwords must match!');
        }
    };
    AuthService.prototype.confirm_Signup = function (email) {
        this.user.sendEmailVerification();
    };
    AuthService.prototype.accountFirstLastName = function (firstname, lastname) {
        this.username = firstname + lastname;
    };
    Object.defineProperty(AuthService.prototype, "getRecipes", {
        get: function () {
            return this.recipes;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AuthService);
    return AuthService;
}());



/***/ })

}]);
//# sourceMappingURL=default~account-account-module~foodlist-foodlist-module~login-login-module~recipedetails-recipedetai~2e537e95.js.map