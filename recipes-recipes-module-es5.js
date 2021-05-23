(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-item/recipe-item.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-item/recipe-item.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipeItemRecipeItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item\n[routerLink]=\"['./',recipeItem.id]\"\n>\n  <ion-avatar slot=\"start\">\n    <ion-img [src]=\"recipeItem.imageUrl\"></ion-img>\n  </ion-avatar>\n  <ion-label>\n    {{ recipeItem.title}}\n  </ion-label>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>RECIPES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-recipe-item\n      *ngFor=\"let recipe of recipes\"\n      [recipeItem]=\"recipe\"\n      > </app-recipe-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/recipes/recipe-item/recipe-item.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/recipes/recipe-item/recipe-item.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRecipesRecipeItemRecipeItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/recipes/recipe-item/recipe-item.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/recipes/recipe-item/recipe-item.component.ts ***!
      \**************************************************************/

    /*! exports provided: RecipeItemComponent */

    /***/
    function srcAppRecipesRecipeItemRecipeItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function () {
        return RecipeItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RecipeItemComponent = /*#__PURE__*/function () {
        function RecipeItemComponent() {
          _classCallCheck(this, RecipeItemComponent);
        }

        _createClass(RecipeItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RecipeItemComponent;
      }();

      RecipeItemComponent.ctorParameters = function () {
        return [];
      };

      RecipeItemComponent.propDecorators = {
        recipeItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      RecipeItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recipe-item.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-item/recipe-item.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recipe-item.component.scss */
        "./src/app/recipes/recipe-item/recipe-item.component.scss"))["default"]]
      })], RecipeItemComponent);
      /***/
    },

    /***/
    "./src/app/recipes/recipes-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/recipes/recipes-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: RecipesPageRoutingModule */

    /***/
    function srcAppRecipesRecipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPageRoutingModule", function () {
        return RecipesPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _recipes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recipes.page */
      "./src/app/recipes/recipes.page.ts");

      var routes = [{
        path: '',
        component: _recipes_page__WEBPACK_IMPORTED_MODULE_3__["RecipesPage"]
      }, {
        path: ':recipeId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | recipe-detail-recipe-detail-module */
          "recipe-detail-recipe-detail-module").then(__webpack_require__.bind(null,
          /*! ./recipe-detail/recipe-detail.module */
          "./src/app/recipes/recipe-detail/recipe-detail.module.ts")).then(function (m) {
            return m.RecipeDetailPageModule;
          });
        }
      }];

      var RecipesPageRoutingModule = function RecipesPageRoutingModule() {
        _classCallCheck(this, RecipesPageRoutingModule);
      };

      RecipesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RecipesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/recipes/recipes.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/recipes/recipes.module.ts ***!
      \*******************************************/

    /*! exports provided: RecipesPageModule */

    /***/
    function srcAppRecipesRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPageModule", function () {
        return RecipesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./recipes-routing.module */
      "./src/app/recipes/recipes-routing.module.ts");
      /* harmony import */


      var _recipes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./recipes.page */
      "./src/app/recipes/recipes.page.ts");
      /* harmony import */


      var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./recipe-item/recipe-item.component */
      "./src/app/recipes/recipe-item/recipe-item.component.ts");

      var RecipesPageModule = function RecipesPageModule() {
        _classCallCheck(this, RecipesPageModule);
      };

      RecipesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipesPageRoutingModule"]],
        declarations: [_recipes_page__WEBPACK_IMPORTED_MODULE_6__["RecipesPage"], _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__["RecipeItemComponent"]]
      })], RecipesPageModule);
      /***/
    },

    /***/
    "./src/app/recipes/recipes.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/recipes/recipes.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppRecipesRecipesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/recipes/recipes.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/recipes/recipes.page.ts ***!
      \*****************************************/

    /*! exports provided: RecipesPage */

    /***/
    function srcAppRecipesRecipesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesPage", function () {
        return RecipesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recipes.service */
      "./src/app/recipes/recipes.service.ts");

      var RecipesPage = /*#__PURE__*/function () {
        function RecipesPage(recipesService) {
          _classCallCheck(this, RecipesPage);

          this.recipesService = recipesService;
        }

        _createClass(RecipesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recipes = this.recipesService.getAllRecipes();
          }
        }]);

        return RecipesPage;
      }();

      RecipesPage.ctorParameters = function () {
        return [{
          type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]
        }];
      };

      RecipesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./recipes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./recipes.page.scss */
        "./src/app/recipes/recipes.page.scss"))["default"]]
      })], RecipesPage);
      /***/
    },

    /***/
    "./src/app/recipes/recipes.service.ts":
    /*!********************************************!*\
      !*** ./src/app/recipes/recipes.service.ts ***!
      \********************************************/

    /*! exports provided: RecipesService */

    /***/
    function srcAppRecipesRecipesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecipesService", function () {
        return RecipesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RecipesService = /*#__PURE__*/function () {
        function RecipesService() {
          _classCallCheck(this, RecipesService);

          this.recipes = [{
            id: 'r1',
            title: 'Pho Ga',
            imageUrl: 'https://steamykitchen.com/wp-content/uploads/2007/07/jaden1.jpg',
            ingredients: ['Chicken', 'Coriander', 'Ginger', 'Noodles']
          }, {
            id: 'r2',
            title: 'Falafel',
            imageUrl: 'https://toriavey.com/images/2011/01/Falafel-10-640x480.jpg',
            ingredients: ['Chickpeas', 'Baking Soda', 'Onion', 'Parsley']
          }];
        }

        _createClass(RecipesService, [{
          key: "getAllRecipes",
          value: function getAllRecipes() {
            return _toConsumableArray(this.recipes);
          }
        }, {
          key: "getRecipe",
          value: function getRecipe(recipeId) {
            return Object.assign({}, this.recipes.find(function (recipe) {
              return recipe.id === recipeId;
            }));
          }
        }, {
          key: "deleteRecipe",
          value: function deleteRecipe(recipeId) {
            this.recipes = this.recipes.filter(function (recipe) {
              return recipe.id !== recipeId;
            });
          }
        }]);

        return RecipesService;
      }();

      RecipesService.ctorParameters = function () {
        return [];
      };

      RecipesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], RecipesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=recipes-recipes-module-es5.js.map