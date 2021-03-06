(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Admin\Desktop\angular_sof\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../products.service */
      "jOXV");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(ProductsService) {
          _classCallCheck(this, SidebarComponent);

          this.ProductsService = ProductsService;
          this.products = [];
          this.select = " ";
          this.showprod = false;
        }

        _createClass(SidebarComponent, [{
          key: "showkids",
          value: function showkids() {
            this.select = 'Kids';
            this.showprod = true;
          }
        }, {
          key: "showcook",
          value: function showcook() {
            this.select = 'Cook';
            this.showprod = true;
          }
        }, {
          key: "showdrama",
          value: function showdrama() {
            this.select = 'Drama';
            this.showprod = true;
          }
        }, {
          key: "showscience",
          value: function showscience() {
            this.select = 'Science';
            this.showprod = true;
          } //select:string

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.products = this.ProductsService.getSeries();
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]));
      };

      SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 9,
        vars: 0,
        consts: [[1, "list-group", "border", "border-dark", 2, "width", "250px"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "bg-info", "text-light", 3, "click"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_Template_a_click_1_listener() {
              return ctx.showkids();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Kids ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_Template_a_click_3_listener() {
              return ctx.showcook();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " cook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_Template_a_click_5_listener() {
              return ctx.showdrama();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " drama ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidebarComponent_Template_a_click_7_listener() {
              return ctx.showscience();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " science ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
          }]
        }], function () {
          return [{
            type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9R8I":
    /*!**********************************************!*\
      !*** ./src/app/details/details.component.ts ***!
      \**********************************************/

    /*! exports provided: DetailsComponent */

    /***/
    function R8I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
        return DetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "kWWo");

      var DetailsComponent = /*#__PURE__*/function () {
        function DetailsComponent(actRoute, http, api) {
          _classCallCheck(this, DetailsComponent);

          this.actRoute = actRoute;
          this.http = http;
          this.api = api;
          this.serialNumber = '';
          this.products = [];
          this.baseurl = 'http://localhost:8000/api/';
        }

        _createClass(DetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.serialNumber = this.actRoute.snapshot.params['SerialNumber'];
            console.log('hi');
            console.log(this.serialNumber); // this.products = this.ProductsService.getSeries();
            // this.getprod();

            this.http.get(this.baseurl + 'get_by_id/' + this.serialNumber).subscribe(function (data) {
              _this.product_cat = data[0];
              console.log(data);
            });
          }
        }]);

        return DetailsComponent;
      }();

      DetailsComponent.??fac = function DetailsComponent_Factory(t) {
        return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      DetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DetailsComponent,
        selectors: [["app-details"]],
        decls: 17,
        vars: 4,
        consts: [[1, "card", "container-center", 2, "width", "18rem", "margin-left", "450px", "margin-right", "450px"], [1, "card-header", 2, "text-align", "center"], [1, "card-body"], [1, "card-text", 2, "text-align", "center"], ["width", "60%", 3, "src"], [1, "card-title", 2, "text-align", "center", "font-size", "20px"], [1, "card-text", 2, "text-align", "center", "font-size", "20px", "color", "gold"], [1, "card-text", 2, "text-align", "center", "font-size", "20px"]],
        template: function DetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " product price: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Description: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.product_cat.Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.product_cat.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.product_cat.Price, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.product_cat.Description, " ");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../products.service */
      "jOXV");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(ProductService) {
          _classCallCheck(this, HomeComponent);

          this.ProductService = ProductService;
          this.products = [];
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.products = this.ProductService.getSeries();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]));
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 65,
        vars: 10,
        consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "glow"], ["src", "https://upload.wikimedia.org/wikipedia/en/2/2a/Dune%2C_Chronicles_of_the_Imperium.jpg", "width", "250", "height", "250"], ["src", "https://target.scene7.com/is/image/Target/GUEST_f05d6482-18d5-487a-835d-b469cca54737", "width", "250", "height", "250"], ["src", "https://g.christianbook.com/dg/product/cbd/f450/437339.jpg", "width", "250", "height", "250"], ["src", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572098085l/18135._SY475_.jpg", "width", "250", "height", "250"], ["src", "https://images-na.ssl-images-amazon.com/images/I/51PGDJ98RGL._SX258_BO1,204,203,200_.jpg", "width", "250", "height", "250"], ["align", "center"], ["align", "center", 2, "font-family", "Edwardian Script ITC", "font-size", "100px"], ["src", "data:image/jpeg;base64,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8lE7Jx6MROxu7W+G/IOIHzXfIGBuLxTW7N6e/wDmnZ3+NYv+sf8AE5SxynLjxcZbZccb1+dNGGjovtL6iPJEREBERAREQFT9qMndioWxNc1tSsedQsFrDZCuEUy2XcLNzSizrs43ESRW4sija/wMtp1voAgjaqvbnar8H2Te38EHyMe3DawQWnxNfWjY7bAbrWorTiZSaV5Me7H4Xsg8R4SN72OEE75HCjTmP1U0ee6+Sdk5vw+GhbLGTh5i9he1xaY99DCPIFbFFPm5I8vFm5+z0kzoHYh0RDI5I3tja5rS2StOkE7VShYLsc9jMHGXscMPO6R1g+JjuDa6+q2KJ5uSbhjWJPY6YQtjbJFqbinTjU1xZpI8LCOas5clnkdg3yvhDsPKXkRtc1pYRTQ0HgVo0UebkTCKjAZS6PF4nEFzS2YMAAvUNAo3yVs5oPEA+q+oq2291p07KGfK3nGslDG92G7nbjThw67hec2wMzcQ3EwNDjp0lp+W+4scPktAiq6p4vOWW6upr7xS9n8tkjMkstd5IdwN6G54+/0XzJ8ukjnxEjgNLzbTYN+Inhy4q7REZeJzyuW/8pJ+J9BERS5hERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==", "width", "250", "height", "250"], ["src", "https://target.scene7.com/is/image/Target/GUEST_577d7649-1bff-4755-9e8d-eff7648639d6?wid=488&hei=488&fmt=pjpeg", "width", "250", "height", "250"], ["src", "https://images-na.ssl-images-amazon.com/images/I/51hhwijfPeL._AC_SY400_.jpg", "width", "250", "height", "250"], ["src", "https://cdn.shopify.com/s/files/1/0263/0589/products/IMG_9429_900x900.jpg?v=1532140622", "width", "250", "height", "250"], ["src", "https://covers.booktopia.com.au/600/9781542004527/9301/when-we-believed-in-mermaids.jpg", "width", "250", "height", "250"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "products of the week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h1", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " the newlist products!! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[18].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[12].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[8].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[7].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[4].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[19].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[17].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[6].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[10].Name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.products[5].Name, " ");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["*[_ngcontent-%COMP%]   parent[_ngcontent-%COMP%]   */[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] { \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    padding-left: 15%;\r\n    padding-right: 15%; }\r\n\r\n\r\n\r\n.col-sm-3[_ngcontent-%COMP%] {  \r\n    width: 300px;\r\n    height: 300px;\r\n    padding: 7em;\r\n    margin: 1%;  \r\n\r\n\r\n    color: #FFF;\r\n    background-color: hsla(195, 60%, 50%, 1); }\r\n\r\n@media screen and (min-width: 500px) {\r\n    .row[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        padding-left: 15%;\r\n        padding-right: 15%;\r\n      }\r\n    }\r\n\r\nbody[_ngcontent-%COMP%] {\r\n        background-color: black;\r\n        font-family: cursive;\r\n      }\r\n\r\n.glow[_ngcontent-%COMP%] {\r\n        font-size: 80px;\r\n        color: #fff;\r\n        text-align: center;\r\n        animation: glow 1s ease-in-out infinite alternate;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBRTs7QUFFeEIsVUFBVTs7QUFFVjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVUsRUFBRSxzQ0FBc0M7OztJQUdsRCxXQUFXO0lBQ1gsd0NBQXdDLEVBQUU7O0FBRTlDO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixrQkFBa0I7TUFDcEI7SUFDRjs7QUFDQTtRQUNJLHVCQUF1QjtRQUN2QixvQkFBb0I7TUFDdEI7O0FBRUE7UUFDRSxlQUFlO1FBQ2YsV0FBVztRQUNYLGtCQUFrQjtRQUdsQixpREFBaUQ7TUFDbkQiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiBwYXJlbnQgKi8gLnJvdyB7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUlOyB9XHJcblxyXG4vKiBjaGlsZCAqLyBcclxuXHJcbi5jb2wtc20tMyB7ICBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiA3ZW07XHJcbiAgICBtYXJnaW46IDElOyAvKiBpbXBvcnRhbnQsIG1hcmdpbiBiZXR3ZWVuIGNvbHVtbnMgKi8gXHJcblxyXG5cclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxOTUsIDYwJSwgNTAlLCAxKTsgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGJvZHkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZ2xvdyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb246IGdsb3cgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBnbG93IHtcclxuICAgICAgICBmcm9tIHtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZTYwMDczLCAwIDAgNDBweCAjZTYwMDczLCAwIDAgNTBweCAjZTYwMDczLCAwIDAgNjBweCAjZTYwMDczLCAwIDAgNzBweCAjZTYwMDczO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDIwcHggI2ZmZiwgMCAwIDMwcHggI2ZmNGRhNiwgMCAwIDQwcHggI2ZmNGRhNiwgMCAwIDUwcHggI2ZmNGRhNiwgMCAwIDYwcHggI2ZmNGRhNiwgMCAwIDcwcHggI2ZmNGRhNiwgMCAwIDgwcHggI2ZmNGRhNjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAiXX0= */", "body[_ngcontent-%COMP%] {\n    background-color: black;\n    font-family: cursive;\n  }\n  \n  .glow[_ngcontent-%COMP%] {\n    font-size: 80px;\n    color: #fff;\n    text-align: center;\n    -webkit-animation: glow 1s ease-in-out infinite alternate;\n    -moz-animation: glow 1s ease-in-out infinite alternate;\n    animation: glow 1s ease-in-out infinite alternate;\n  }\n  \n  @-webkit-keyframes glow {\n    from {\n      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;\n    }\n    \n    to {\n      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;\n    }\n  }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CJ1o":
    /*!****************************************!*\
      !*** ./src/app/show/show.component.ts ***!
      \****************************************/

    /*! exports provided: ShowComponent */

    /***/
    function CJ1o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowComponent", function () {
        return ShowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../products.service */
      "jOXV");
      /* harmony import */


      var _shopcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shopcart.service */
      "ka48");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1) {
        return ["/product", a1];
      };

      function ShowComponent_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " \xA0 \xA0 \xA0 \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShowComponent_div_3_ng_container_1_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

            var i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.add_product(i_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Add to Cart ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.select, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", i_r1.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Name : ", i_r1.Name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Price : ", i_r1.Price, " \u20AA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](5, _c0, i_r1.SerialNumber));
        }
      }

      function ShowComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ShowComponent_div_3_ng_container_1_Template, 19, 7, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var i_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.select == i_r1.category);
        }
      }

      var ShowComponent = /*#__PURE__*/function () {
        function ShowComponent(ProductsService, ShopcartService, http, apiservice) {
          _classCallCheck(this, ShowComponent);

          this.ProductsService = ProductsService;
          this.ShopcartService = ShopcartService;
          this.http = http;
          this.apiservice = apiservice;
          this.product = [];
          this.baseurl = 'http://localhost:8000/api/';
          this.headers = {
            'content-type': 'application/json'
          };
        }

        _createClass(ShowComponent, [{
          key: "addproducts",
          value: function addproducts(product) {
            var body = JSON.stringify(product);
            return this.http.post(this.baseurl + 'products', body, {
              headers: this.headers
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.product = this.ProductsService.getSeries();
            var body = JSON.stringify(this.product);
            console.log(body);
            this.apiservice.getProduct().subscribe(function (data) {
              _this2.product = data;
            });
          }
        }, {
          key: "add_product",
          value: function add_product(product) {
            var _this3 = this;

            // this.ShopcartService.addproduct(product);
            this.apiservice.get_this_item(product).subscribe(function (data) {
              console.log(data);

              if (data.length == 0) {
                _this3.apiservice.add_to_cart(product).subscribe(function (data) {
                  console.log(data);
                });
              } else {
                var id = Math.floor(Math.random() * 100000 + product.SerialNumber + 1).toString();
                var prod = new Product(id, product.Name, product.Price, product.category, product.Description, product.imgurl, localStorage.getItem('set'));
                console.log(prod);

                _this3.apiservice.add_to_cart(prod).subscribe(function (data) {
                  console.log(data);
                });
              }
            });
            alert('product added to the cart successfully');
          }
        }]);

        return ShowComponent;
      }();

      ShowComponent.??fac = function ShowComponent_Factory(t) {
        return new (t || ShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shopcart_service__WEBPACK_IMPORTED_MODULE_2__["ShopcartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
      };

      ShowComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ShowComponent,
        selectors: [["app-show"]],
        inputs: {
          select: "select"
        },
        decls: 4,
        vars: 1,
        consts: [[1, "container", "center"], [1, "row"], [1, "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card", "text-center"], [1, "card-header"], [1, "card-body", 2, "background-color", "rgb(39, 33, 25)"], [2, "width", "400px", "height", "300px", 3, "src"], [2, "color", "white"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "btn", "btn-sm", "btn-primary", 3, "click"]],
        template: function ShowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, ShowComponent_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.product);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ShowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-show',
            templateUrl: './show.component.html',
            styleUrls: ['./show.component.css']
          }]
        }], function () {
          return [{
            type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
          }, {
            type: _shopcart_service__WEBPACK_IMPORTED_MODULE_2__["ShopcartService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }];
        }, {
          select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var Product = function Product(SerialNumber, Name, Price, category, Description, imgurl, name) {
        _classCallCheck(this, Product);

        this.SerialNumber = SerialNumber;
        this.Name = Name;
        this.Price = Price;
        this.category = category;
        this.Description = Description;
        this.imgurl = imgurl;
        this.name = name;
      };
      /***/

    },

    /***/
    "LvIC":
    /*!**********************************************!*\
      !*** ./src/app/product/product.component.ts ***!
      \**********************************************/

    /*! exports provided: ProductComponent */

    /***/
    function LvIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
        return ProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _show_show_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../show/show.component */
      "CJ1o");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var ProductComponent = /*#__PURE__*/function () {
        function ProductComponent() {
          _classCallCheck(this, ProductComponent);
        }

        _createClass(ProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductComponent;
      }();

      ProductComponent.??fac = function ProductComponent_Factory(t) {
        return new (t || ProductComponent)();
      };

      ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductComponent,
        selectors: [["app-product"]],
        viewQuery: function ProductComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.products = _t.first);
          }
        },
        decls: 9,
        vars: 1,
        consts: [[1, "row"], [1, "column"], [3, "select"]],
        template: function ProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-show", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("select", ctx.products == null ? null : ctx.products.select);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _show_show_component__WEBPACK_IMPORTED_MODULE_3__["ShowComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
          }]
        }], function () {
          return [];
        }, {
          products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'final1';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [["routerLink", "pagenotfound", "routerLinkActive", "active-link"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "U0XV":
    /*!**********************************!*\
      !*** ./src/app/users.service.ts ***!
      \**********************************/

    /*! exports provided: UsersService */

    /***/
    function U0XV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UsersService = /*#__PURE__*/function () {
        function UsersService() {
          _classCallCheck(this, UsersService);
        }

        _createClass(UsersService, [{
          key: "getusers",
          value: function getusers() {
            return [new User('rosol mulla', 123456, 'rosol@gmail.com'), new User('jaber rammal', 159753, 'jaber@gmail.com')];
          }
        }]);

        return UsersService;
      }();

      UsersService.??fac = function UsersService_Factory(t) {
        return new (t || UsersService)();
      };

      UsersService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: UsersService,
        factory: UsersService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var User = function User(name, password, email) {
        _classCallCheck(this, User);

        this.name = name;
        this.password = password;
        this.email = email;
      };
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pagenotfound/pagenotfound.component */
      "sG/L");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./cart/cart.component */
      "c2A7");
      /* harmony import */


      var _product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./product/product.component */
      "LvIC");
      /* harmony import */


      var _show_show_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./show/show.component */
      "CJ1o");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./details/details.component */
      "9R8I");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"], _show_show_component__WEBPACK_IMPORTED_MODULE_13__["ShowComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_15__["DetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"], _show_show_component__WEBPACK_IMPORTED_MODULE_13__["ShowComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_15__["DetailsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bzTf":
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /*! exports provided: ContactComponent */

    /***/
    function bzTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);

          this.name1 = 'Jaber rammal';
          this.email1 = 'srks662@gmail.com';
          this.id = 316050988;
          this.name2 = 'rosol mulla';
          this.id1 = 207724659;
          this.email2 = 'rosolmulla99@gmail.com';
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.??fac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 19,
        vars: 6,
        consts: [[1, "center"], ["src", "assets/jaber.png"], ["src", "assets/rosol.png"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("name=", ctx.name1, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" id=", ctx.id, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" email=", ctx.email1, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("name=", ctx.name2, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" id=", ctx.id1, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" email= ", ctx.email2, " ");
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["img[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    padding: 5px;\r\n    width: 150px;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    text-align:center\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtFQUNkO0VBQ0E7SUFDRTtFQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG4gIC5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXJcclxuICB9XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "c2A7":
    /*!****************************************!*\
      !*** ./src/app/cart/cart.component.ts ***!
      \****************************************/

    /*! exports provided: CartComponent */

    /***/
    function c2A7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
        return CartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CartComponent_ng_container_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", i_r2.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r2.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](i_r2.Price);
        }
      }

      function CartComponent_ng_container_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.total_price, " ");
        }
      }

      var CartComponent = /*#__PURE__*/function () {
        function CartComponent(apiService) {
          _classCallCheck(this, CartComponent);

          this.apiService = apiService;
          this.carts = [];
          this.total_price = 0;
        }

        _createClass(CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.apiService.get_from_cart().subscribe(function (data) {
              _this4.carts = data;
              console.log(_this4.carts[0]);

              var _iterator = _createForOfIteratorHelper(_this4.carts),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var it = _step.value;
                  _this4.total_price += it.Price;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              console.log(_this4.total_price);
            });
          }
        }]);

        return CartComponent;
      }();

      CartComponent.??fac = function CartComponent_Factory(t) {
        return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      CartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CartComponent,
        selectors: [["app-cart"]],
        decls: 15,
        vars: 2,
        consts: [[1, "table"], [1, "thead-primary"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "border", "border-1"], [4, "ngIf"], [2, "width", "300px", "height", "300px", 3, "src"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CartComponent_ng_container_12_Template, 8, 3, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, CartComponent_ng_container_14_Template, 2, 1, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.carts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.carts.length > 0);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
          }]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 50,
        vars: 0,
        consts: [["id", "footer", 1, "footer-1"], [1, "main-footer", "widgets-dark", "typo-light"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-sm-6", "col-md-3"], [1, "widget", "subscribe", "no-box"], [1, "widget-title", 2, "color", "blue"], [1, "widget", "no-box"], [1, "widget-title"], ["href", "#.", "target", "_blank", 1, "btn", 2, "color", "blue", "background", "#000"], ["href", "srks662@gmail.com", "title", "glorythemes"], [1, "social-footer2"], [1, ""], ["title", "youtube", "target", "_blank", "href", "https://www.youtube.com/"], ["alt", "youtube", "width", "30", "height", "30", "src", "data:image/png;base64,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"], ["href", "https://www.facebook.com/", "target", "_blank", "title", "Facebook"], ["alt", "Facebook", "width", "30", "height", "30", "src", "data:image/png;base64,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"], ["href", "https://twitter.com", "target", "_blank", "title", "Twitter"], ["alt", "Twitter", "width", "30", "height", "30", "src", "data:image/png;base64,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"], ["title", "instagram", "target", "_blank", "href", "https://www.instagram.com/"], ["alt", "instagram", "width", "30", "height", "30", "src", "data:image/png;base64,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"], [1, "footer-copyright"], [1, "col-md-12", "text-center"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "old scroll company");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "old scroll is online book shop that sells special books ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Get access to your full Training and Marketing Suite.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Register Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "srks662@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "rosolmulla98@.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Copyright Company Name \xA9 2021. All rights reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["footer[_ngcontent-%COMP%]   .main-footer[_ngcontent-%COMP%]{  padding: 20px 0;  background: #252525;}\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{  padding-left: 0;  list-style: none;}\r\n\r\n.footer-copyright[_ngcontent-%COMP%] { background: #222; padding: 5px 0;}\r\n.footer-copyright[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {    display: inherit;}\r\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {    float: right;    margin-top: 5px;}\r\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {  list-style: none; margin: 0;  padding: 0;}\r\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { border-left: 1px solid #505050; display: inline-block;  line-height: 12px;  margin: 0;  padding: 0 8px;}\r\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{  color: #969696;}\r\n.footer-copyright[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child { border: medium none;  padding-left: 0;}\r\n.footer-copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #969696; margin: 2px 0 0;}\r\n\r\n.footer-top[_ngcontent-%COMP%]{  background: #252525;  padding-bottom: 30px; margin-bottom: 30px;  border-bottom: 3px solid #222;}\r\n\r\nfooter.transparent[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%], footer.transparent[_ngcontent-%COMP%]   .main-footer[_ngcontent-%COMP%]{  background: transparent;}\r\nfooter.transparent[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]{ background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3) ;}\r\n\r\nfooter.light[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]{ background: #f9f9f9;}\r\nfooter.light[_ngcontent-%COMP%]   .main-footer[_ngcontent-%COMP%]{  background: #f9f9f9;}\r\nfooter.light[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]{ background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3) ;}\r\n\r\n.footer-[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {    display: inline-block;}\r\n\r\n.widget[_ngcontent-%COMP%]{  padding: 20px;  margin-bottom: 40px;}\r\n.widget.widget-last[_ngcontent-%COMP%]{  margin-bottom: 0px;}\r\n.widget.no-box[_ngcontent-%COMP%]{ padding: 0; background-color: transparent;  margin-bottom: 40px;\r\n  box-shadow: none; -webkit-box-shadow: none; -moz-box-shadow: none; -ms-box-shadow: none; -o-box-shadow: none;}\r\n.widget.subscribe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{  margin-bottom: 18px;}\r\n.widget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{ color: #ff8d1e;}\r\n.widget[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{ color: #4b92dc;}\r\n.widget-title[_ngcontent-%COMP%] {margin-bottom: 20px;}\r\n.widget-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {background: #839FAD none repeat scroll 0 0;display: block; height: 1px;margin-top: 25px;position: relative;width: 20%;}\r\n.widget-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {background: inherit;content: \"\";height: inherit;    position: absolute;top: -4px;width: 50%;}\r\n.widget-title.text-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .widget-title.text-center[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {margin-left: auto;margin-right:auto;left: 0;right: 0;}\r\n.widget[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{ float: right; background: #7f7f7f;}\r\n.typo-light[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .typo-light[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{  color: #fff;}\r\nul.social-footer2[_ngcontent-%COMP%] { margin: 0;padding: 0; width: auto;}\r\nul.social-footer2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {display: inline-block;padding: 0;}\r\nul.social-footer2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {background-color:#ff8d1e;}\r\nul.social-footer2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {display: block; height:30px;width: 30px;text-align: center;}\r\n.btn[_ngcontent-%COMP%]{background-color: #ff8d1e; color:#fff;}\r\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus, .btn.active[_ngcontent-%COMP%] {background: #4b92dc;color: #fff;\r\n-ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\nbox-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\ntransition: all 250ms ease-in-out 0s;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQixlQUFlLEdBQUcsbUJBQW1CLENBQUM7QUFDNUQsWUFBWSxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7QUFFL0Msc0JBQXNCO0FBQ3RCLG9CQUFvQixnQkFBZ0IsRUFBRSxjQUFjLENBQUM7QUFDckQsNkJBQTZCLGdCQUFnQixDQUFDO0FBQzlDLDJCQUEyQixZQUFZLEtBQUssZUFBZSxDQUFDO0FBQzVELDRCQUE0QixnQkFBZ0IsRUFBRSxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQ3JFLDhCQUE4Qiw4QkFBOEIsRUFBRSxxQkFBcUIsR0FBRyxpQkFBaUIsR0FBRyxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBQ3JJLGdDQUFnQyxjQUFjLENBQUM7QUFDL0MsMENBQTBDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQztBQUNoRixzQkFBc0IsY0FBYyxFQUFFLGVBQWUsQ0FBQztBQUV0RCxlQUFlO0FBQ2YsY0FBYyxtQkFBbUIsR0FBRyxvQkFBb0IsRUFBRSxtQkFBbUIsR0FBRyw2QkFBNkIsQ0FBQztBQUU5Ryx1QkFBdUI7QUFDdkIsa0VBQWtFLHVCQUF1QixDQUFDO0FBQzFGLHNDQUFzQyxzREFBc0QsQ0FBQztBQUU3RixpQkFBaUI7QUFDakIsMEJBQTBCLG1CQUFtQixDQUFDO0FBQzlDLDRCQUE0QixtQkFBbUIsQ0FBQztBQUNoRCxnQ0FBZ0MsNERBQTRELENBQUM7QUFFN0YsYUFBYTtBQUNiLG9CQUFvQixxQkFBcUIsQ0FBQztBQUUxQzs7d0JBRXdCO0FBQ3hCLFVBQVUsYUFBYSxHQUFHLG1CQUFtQixDQUFDO0FBQzlDLHNCQUFzQixrQkFBa0IsQ0FBQztBQUN6QyxnQkFBZ0IsVUFBVSxFQUFFLDZCQUE2QixHQUFHLG1CQUFtQjtFQUM3RSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxtQkFBbUIsQ0FBQztBQUMvRyxzQkFBc0IsbUJBQW1CLENBQUM7QUFDMUMsY0FBYyxjQUFjLENBQUM7QUFDN0Isb0JBQW9CLGNBQWMsQ0FBQztBQUNuQyxlQUFlLG1CQUFtQixDQUFDO0FBQ25DLG9CQUFvQiwwQ0FBMEMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztBQUMxSSwyQkFBMkIsbUJBQW1CLENBQUMsV0FBVyxDQUFDLGVBQWUsS0FBSyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO0FBQ3ZILHNFQUFzRSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQzNILGdCQUFnQixZQUFZLEVBQUUsbUJBQW1CLENBQUM7QUFFbEQ7Ozs7Ozs7OztvQkFTb0IsV0FBVyxDQUFDO0FBRWhDLG9CQUFvQixTQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztBQUN0RCxzQkFBc0IscUJBQXFCLENBQUMsVUFBVSxDQUFDO0FBQ3ZELDhCQUE4Qix3QkFBd0IsQ0FBQztBQUN2RCx3QkFBd0IsY0FBYyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7QUFDbkYsS0FBSyx5QkFBeUIsRUFBRSxVQUFVLENBQUM7QUFDM0MscUNBQXFDLG1CQUFtQixDQUFDLFdBQVc7QUFHcEUsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3QywwQ0FBMEM7QUFLMUMsb0NBQW9DOztBQUVwQyIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciAubWFpbi1mb290ZXJ7ICBwYWRkaW5nOiAyMHB4IDA7ICBiYWNrZ3JvdW5kOiAjMjUyNTI1O31cclxuZm9vdGVyIHVseyAgcGFkZGluZy1sZWZ0OiAwOyAgbGlzdC1zdHlsZTogbm9uZTt9XHJcblxyXG4vKiBDb3B5IFJpZ2h0IEZvb3RlciAqL1xyXG4uZm9vdGVyLWNvcHlyaWdodCB7IGJhY2tncm91bmQ6ICMyMjI7IHBhZGRpbmc6IDVweCAwO31cclxuLmZvb3Rlci1jb3B5cmlnaHQgLmxvZ28geyAgICBkaXNwbGF5OiBpbmhlcml0O31cclxuLmZvb3Rlci1jb3B5cmlnaHQgbmF2IHsgICAgZmxvYXQ6IHJpZ2h0OyAgICBtYXJnaW4tdG9wOiA1cHg7fVxyXG4uZm9vdGVyLWNvcHlyaWdodCBuYXYgdWwgeyAgbGlzdC1zdHlsZTogbm9uZTsgbWFyZ2luOiAwOyAgcGFkZGluZzogMDt9XHJcbi5mb290ZXItY29weXJpZ2h0IG5hdiB1bCBsaSB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzUwNTA1MDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgbGluZS1oZWlnaHQ6IDEycHg7ICBtYXJnaW46IDA7ICBwYWRkaW5nOiAwIDhweDt9XHJcbi5mb290ZXItY29weXJpZ2h0IG5hdiB1bCBsaSBheyAgY29sb3I6ICM5Njk2OTY7fVxyXG4uZm9vdGVyLWNvcHlyaWdodCBuYXYgdWwgbGk6Zmlyc3QtY2hpbGQgeyBib3JkZXI6IG1lZGl1bSBub25lOyAgcGFkZGluZy1sZWZ0OiAwO31cclxuLmZvb3Rlci1jb3B5cmlnaHQgcCB7IGNvbG9yOiAjOTY5Njk2OyBtYXJnaW46IDJweCAwIDA7fVxyXG5cclxuLyogRm9vdGVyIFRvcCAqL1xyXG4uZm9vdGVyLXRvcHsgIGJhY2tncm91bmQ6ICMyNTI1MjU7ICBwYWRkaW5nLWJvdHRvbTogMzBweDsgbWFyZ2luLWJvdHRvbTogMzBweDsgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMjIyO31cclxuXHJcbi8qIEZvb3RlciB0cmFuc3BhcmVudCAqL1xyXG5mb290ZXIudHJhbnNwYXJlbnQgLmZvb3Rlci10b3AsIGZvb3Rlci50cmFuc3BhcmVudCAubWFpbi1mb290ZXJ7ICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XHJcbmZvb3Rlci50cmFuc3BhcmVudCAuZm9vdGVyLWNvcHlyaWdodHsgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDAsIDAsIDAsIDAuMykgO31cclxuXHJcbi8qIEZvb3RlciBsaWdodCAqL1xyXG5mb290ZXIubGlnaHQgLmZvb3Rlci10b3B7IGJhY2tncm91bmQ6ICNmOWY5Zjk7fVxyXG5mb290ZXIubGlnaHQgLm1haW4tZm9vdGVyeyAgYmFja2dyb3VuZDogI2Y5ZjlmOTt9XHJcbmZvb3Rlci5saWdodCAuZm9vdGVyLWNvcHlyaWdodHsgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgO31cclxuXHJcbi8qIEZvb3RlciA0ICovXHJcbi5mb290ZXItIC5sb2dvIHsgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO31cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT0gXHJcbiAgV2lkZ2V0cyBcclxuPT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ud2lkZ2V0eyAgcGFkZGluZzogMjBweDsgIG1hcmdpbi1ib3R0b206IDQwcHg7fVxyXG4ud2lkZ2V0LndpZGdldC1sYXN0eyAgbWFyZ2luLWJvdHRvbTogMHB4O31cclxuLndpZGdldC5uby1ib3h7IHBhZGRpbmc6IDA7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3gtc2hhZG93OiBub25lOyAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7IC1tb3otYm94LXNoYWRvdzogbm9uZTsgLW1zLWJveC1zaGFkb3c6IG5vbmU7IC1vLWJveC1zaGFkb3c6IG5vbmU7fVxyXG4ud2lkZ2V0LnN1YnNjcmliZSBweyAgbWFyZ2luLWJvdHRvbTogMThweDt9XHJcbi53aWRnZXQgbGkgYXsgY29sb3I6ICNmZjhkMWU7fVxyXG4ud2lkZ2V0IGxpIGE6aG92ZXJ7IGNvbG9yOiAjNGI5MmRjO31cclxuLndpZGdldC10aXRsZSB7bWFyZ2luLWJvdHRvbTogMjBweDt9XHJcbi53aWRnZXQtdGl0bGUgc3BhbiB7YmFja2dyb3VuZDogIzgzOUZBRCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO2Rpc3BsYXk6IGJsb2NrOyBoZWlnaHQ6IDFweDttYXJnaW4tdG9wOiAyNXB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt3aWR0aDogMjAlO31cclxuLndpZGdldC10aXRsZSBzcGFuOjphZnRlciB7YmFja2dyb3VuZDogaW5oZXJpdDtjb250ZW50OiBcIlwiO2hlaWdodDogaW5oZXJpdDsgICAgcG9zaXRpb246IGFic29sdXRlO3RvcDogLTRweDt3aWR0aDogNTAlO31cclxuLndpZGdldC10aXRsZS50ZXh0LWNlbnRlciBzcGFuLC53aWRnZXQtdGl0bGUudGV4dC1jZW50ZXIgc3Bhbjo6YWZ0ZXIge21hcmdpbi1sZWZ0OiBhdXRvO21hcmdpbi1yaWdodDphdXRvO2xlZnQ6IDA7cmlnaHQ6IDA7fVxyXG4ud2lkZ2V0IC5iYWRnZXsgZmxvYXQ6IHJpZ2h0OyBiYWNrZ3JvdW5kOiAjN2Y3ZjdmO31cclxuXHJcbi50eXBvLWxpZ2h0IGgxLCBcclxuLnR5cG8tbGlnaHQgaDIsIFxyXG4udHlwby1saWdodCBoMywgXHJcbi50eXBvLWxpZ2h0IGg0LCBcclxuLnR5cG8tbGlnaHQgaDUsIFxyXG4udHlwby1saWdodCBoNixcclxuLnR5cG8tbGlnaHQgcCxcclxuLnR5cG8tbGlnaHQgZGl2LFxyXG4udHlwby1saWdodCBzcGFuLFxyXG4udHlwby1saWdodCBzbWFsbHsgIGNvbG9yOiAjZmZmO31cclxuXHJcbnVsLnNvY2lhbC1mb290ZXIyIHsgbWFyZ2luOiAwO3BhZGRpbmc6IDA7IHdpZHRoOiBhdXRvO31cclxudWwuc29jaWFsLWZvb3RlcjIgbGkge2Rpc3BsYXk6IGlubGluZS1ibG9jaztwYWRkaW5nOiAwO31cclxudWwuc29jaWFsLWZvb3RlcjIgbGkgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjojZmY4ZDFlO31cclxudWwuc29jaWFsLWZvb3RlcjIgbGkgYSB7ZGlzcGxheTogYmxvY2s7IGhlaWdodDozMHB4O3dpZHRoOiAzMHB4O3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5idG57YmFja2dyb3VuZC1jb2xvcjogI2ZmOGQxZTsgY29sb3I6I2ZmZjt9XHJcbi5idG46aG92ZXIsIC5idG46Zm9jdXMsIC5idG4uYWN0aXZlIHtiYWNrZ3JvdW5kOiAjNGI5MmRjO2NvbG9yOiAjZmZmO1xyXG4td2Via2l0LWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuLW1vei1ib3gtc2hhZG93OiAwIDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbi1tcy1ib3gtc2hhZG93OiAwIDE1cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbi1vLWJveC1zaGFkb3c6IDAgMTVweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuYm94LXNoYWRvdzogMCAxNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4td2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwcztcclxuLW1vei10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMHM7XHJcbi1tcy10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQgMHM7XHJcbi1vLXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dCAwcztcclxudHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0IDBzO1xyXG5cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jOXV":
    /*!*************************************!*\
      !*** ./src/app/products.service.ts ***!
      \*************************************/

    /*! exports provided: ProductsService */

    /***/
    function jOXV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return ProductsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProductsService = /*#__PURE__*/function () {
        function ProductsService() {
          _classCallCheck(this, ProductsService);
        }

        _createClass(ProductsService, [{
          key: "getSeries",
          value: function getSeries() {
            return [new product(1, "The Elephant and the Bad Baby", 190.57, "Kids", "One day, an elephant offers a baby a ride through the town, and the set off on a great adventure. But when the elephant finds out that the bad baby has forgotten his manners, the adventure comes to an abrupt end.", "https://images-eu.ssl-images-amazon.com/images/I/512OxPhhIHL._SY445_SX342_QL70_ML2_.jpg"), new product(2, "Dogger", 58.4, "Kids", "Dogger is Dave???s special toy. He is soft, brown and worn in places, with one ear pointing up and the other flopping down. One day, after collecting his big sister Bella from school, watching the flags go up for the summer fair and enjoying ice-creams on the way home, Dave realises that Dogger is missing. The whole family searches for him, but Dogger is nowhere to be found. Dave is subdued when they visit the fair the following day, until remarkably he spots Dogger for sale on a toy stall. However, he is devasted when his beloved toy is sold to another child, but a selfless act of kindness from Bella ensures that all ends well.", "data:image/jpeg;base64,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"), new product(3, "Each Peach Pear Plum", 25, "Kids", "This classic book from author and illustrator team Janet and Allan Ahlberg is a real favourite with families. Each beautifully illustrated page encourages them to 'spy' another familiar fairy-tale or nursery rhyme character. The excellent rhyming text and charming illustrations work perfectly together, and children will love spotting all the hidden details in each picture.     ", "https://images-na.ssl-images-amazon.com/images/I/61-bN8pl9jL.jpg"), new product(4, "ten Little Fingers and Ten Little Toes", 39.7, "Kids", "Babies may be born in different countries, look a little different and have different needs, but one thing that most have in common are ten fingers and ten toes. This is the uniting theme of this perfect first book for sharing. From the swaddled newborn, to children sitting alone, then crawling together, and then standing, the illustrations show babies born all over the world in the country and cities, all with irresistibly chubby fingers and toes.  ", "https://images-na.ssl-images-amazon.com/images/I/514iPPraIHL._SX258_BO1,204,203,200_.jpg"), new product(5, "Not Now, Bernard", 68, "Kids", "This is the classic story of Bernard, whose distracted parents fail to notice he has been eaten and replaced by a monster. We follow Bernard as he does his best to attract his mum and dad's attention to the monster in the garden who wants to eat him - only to hear the repeated refrain of Not now, Bernard ", "https://images-na.ssl-images-amazon.com/images/I/51PGDJ98RGL._SX258_BO1,204,203,200_.jpg"), new product(6, "When We Believed in Mermaids", 170.9, "Drama", " Josie Bianci was killed years ago on a train during a terrorist attack. Gone forever. It???s what her sister, Kit, an ER doctor in Santa Cruz, has always believed. Yet all it takes is a few heart-wrenching seconds to upend Kit???s world. Live coverage of a club fire in Auckland has captured the image of a woman stumbling through the smoke and debris. Her resemblance to Josie is unbelievable. And unmistakable. With it comes a flood of emotions???grief, loss, and anger???that Kit finally has a chance to put to rest: by finding the sister who???s been living a lie.", "https://covers.booktopia.com.au/600/9781542004527/9301/when-we-believed-in-mermaids.jpg"), new product(7, "Where the Forest Meets the Stars", 790, "Drama", "After the loss of her mother and her own battle with breast cancer, Joanna Teale returns to her graduate research on nesting birds in rural Illinois, determined to prove that her recent hardships have not broken her. She throws herself into her work from dusk to dawn, until her solitary routine is disrupted by the appearance of a mysterious child who shows up at her cabin barefoot and covered in bruises. ", "https://images-na.ssl-images-amazon.com/images/I/51hhwijfPeL._AC_SY400_.jpg"), new product(8, "Romeo and Juliet", 7486, "Drama", "In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud. In this death-filled setting, the movement from love at first sight to the lovers??? final union in death seems almost inevitable. And yet, this play set in an extraordinary world has become the quintessential story of young love. In part because of its exquisite language, it is easy to respond as if it were about all young lovers. ", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572098085l/18135._SY475_.jpg"), new product(9, "The Crucible", 7486, "Drama", " I believe that the reader will discover here the essential nature of one of the strangest and most awful chapters in human history, Arthur Miller wrote of his classic play about the witch-hunts and trials in seventeenth-century Salem, Massachusetts. Based on historical people and real events, Miller's drama is a searing portrait of a community engulfed by hysteria. In the rigid theocracy of Salem, rumors that women are practicing witchcraft galvanize the town's most basic fears and suspicions; and when a young girl accuses Elizabeth Proctor of being a witch, self-righteous church leaders and townspeople insist that Elizabeth be brought to trial. The ruthlessness of the prosecutors and the eagerness of neighbor to testify against neighbor brilliantly illuminates the destructive power of socially sanctioned violence ", "https://g.christianbook.com/dg/product/cbd/f450/437339.jpg"), new product(10, "My Dark Vanessa", 7486, "Drama", "Exploring the psychological dynamics of the relationship between a precocious yet na??ve teenage girl and her magnetic and manipulative teacher, a brilliant, all-consuming read that marks the explosive debut of an extraordinary new writer            ", "https://target.scene7.com/is/image/Target/GUEST_7ee77a4b-f0ed-42ce-95f8-1d03f5d67547?wid=488&hei=488&fmt=pjpeg"), new product(11, "six seasons", 130, "Cook", "Even farmers market devotees need inspiration sometimes. For vegetable-centric (though not necessarily vegetarian) cooks hungry for fresh ideas, there???s Joshua McFadden???s Six Seasons. McFadden, the chef at Ava Gene???s in Portland, Oregon, advocates two additions to the four seasons: spring, early summer, midsummer, late summer, autumn and winter. With creative ideas for everything from juicy corn and tomatoes, to thick-skinned, cool-weather onions and rutabagas, McFadden???s recipes make even the humblest vegetables shine.        ", "https://cdn.shopify.com/s/files/1/0263/0589/products/IMG_9429_900x900.jpg?v=1532140622"), new product(12, "zaiton", 740, "Cook", "Yasmin Khan???s celebration of Palestinian recipes and culinary traditions provides the sort of immersive experience that usually requires several weeks of travel. It offers clearly written, engaging recipes like zaatar-spiced roast salmon, eggplant chickpea salad, and seared halloumi with oranges, dates and pomegranates. The book also provides thoughtful reporting and photography from Khan???s experiences of cooking and eating among Palestinian communities. She divides the culinary approaches into three traditions: traditional Levantine cuisine of the Galilee, the bread and meat-based West Bank, and the spicy, seafood-centric fare of the Gaza Strip.          ", "https://images-na.ssl-images-amazon.com/images/I/51Uah8PZnoL.jpg"), new product(13, "the North End Italian Cookbook", 11.7, "Cook", "Think of Boston's North End and you will envision a place filled with great food. Italian markets filled with strings of thick sausage, great wheels of cheese, bushels of seafood, slabs of dark chocolate, and mounds of fresh fruits and vegetables line the streets. For generations, the cooks of this Italian-American neighborhood have transformed these wonderful ingredients into memorable meals. For more than 30 years, Marguerite DiMino Buonopane, one of the North End's most celebrated cooks, has shared her secrets to creating this culinary magic in your own kitchen. Now she gathers more than 275 of her own mouthwatering recipes peppered with savory color photos. The result is a full-color, deluxe edition of a treasured cookbook classic. ", "https://target.scene7.com/is/image/Target/GUEST_f05d6482-18d5-487a-835d-b469cca54737"), new product(14, "dinner in an istant", 10.6, "Cook", "  Dinner in an Instant gives home cooks recipes for elevated dinners that never sacrifice convenience. It focuses on what you should make in the pressure cooker (rather than what you can make) because it does it better--faster, more easily, and more flavorfully. These delicious weeknight-friendly and company-worthy recipes ", "https://images-na.ssl-images-amazon.com/images/I/A1BcP9fnjkL.jpg"), new product(15, "the jemmima code", 29.7, "Cook", "Contextualize U.S. culinary traditions and conversations with Toni Tipton-Martin???s James Beard Award-winning work that surveys some 150 cookbooks by Black authors. From an 1866 ???Domestic Cook Book,??? to 20th- and 21st-century works by Edna Lewis and Jessica B. Harris, Tipton-Martin explores how Black cooks and food writers have shaped the U.S. culinary landscape with photography, annotated excerpts and recipes.   ", "data:image/jpeg;base64,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"), new product(16, "the lord of the rings", 14.66, "Science", "Tolkien's seminal three-volume epic chronicles the War of the Ring, in which Frodo the hobbit and his companions set out to destroy the evil Ring of Power and restore peace to Middle-earth. The beloved trilogy still casts a long shadow, having established some of the most familiar and enduring tropes in fantasy literature.       ", "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg"), new product(17, "The Hitchhiker's Guide To The Galaxy", 14.66, "Science", "   In the first, hilarious volume of Adams' Hitchhiker's series, reluctant galactic traveler Arthur Dent gets swept up in some literally Earth-shattering events involving aliens, sperm whales, a depressed robot, mice who are more than they seem, and some really, really bad poetry.   ", "https://img.discogs.com/NLoWY0XUEPNiEITJ-xO30xgUHdg=/fit-in/600x623/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13433019-1554114672-5693.jpeg.jpg"), new product(18, "Ender's Game", 19.77, "Science", " Young Andrew ender Wiggin, bred to be a genius, is drafted to Battle School where he trains to lead the century-long fight against the alien Buggers.", "https://target.scene7.com/is/image/Target/GUEST_577d7649-1bff-4755-9e8d-eff7648639d6?wid=488&hei=488&fmt=pjpeg"), new product(19, "The Dune Chronicles", 19.77, "Science", " Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny. ", "https://upload.wikimedia.org/wikipedia/en/2/2a/Dune%2C_Chronicles_of_the_Imperium.jpg"), new product(20, "Fahrenheit 451", 19.77, "Science", "In a far future world, television dominates, and books are outlawed. The totalitarian regime has ordered all books to be burned by firemen, whose job is to start the fires rather than stop them. But one fireman begins to see the value of the printed word. ", "data:image/jpeg;base64,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8lE7Jx6MROxu7W+G/IOIHzXfIGBuLxTW7N6e/wDmnZ3+NYv+sf8AE5SxynLjxcZbZccb1+dNGGjovtL6iPJEREBERAREQFT9qMndioWxNc1tSsedQsFrDZCuEUy2XcLNzSizrs43ESRW4sija/wMtp1voAgjaqvbnar8H2Te38EHyMe3DawQWnxNfWjY7bAbrWorTiZSaV5Me7H4Xsg8R4SN72OEE75HCjTmP1U0ee6+Sdk5vw+GhbLGTh5i9he1xaY99DCPIFbFFPm5I8vFm5+z0kzoHYh0RDI5I3tja5rS2StOkE7VShYLsc9jMHGXscMPO6R1g+JjuDa6+q2KJ5uSbhjWJPY6YQtjbJFqbinTjU1xZpI8LCOas5clnkdg3yvhDsPKXkRtc1pYRTQ0HgVo0UebkTCKjAZS6PF4nEFzS2YMAAvUNAo3yVs5oPEA+q+oq2291p07KGfK3nGslDG92G7nbjThw67hec2wMzcQ3EwNDjp0lp+W+4scPktAiq6p4vOWW6upr7xS9n8tkjMkstd5IdwN6G54+/0XzJ8ukjnxEjgNLzbTYN+Inhy4q7REZeJzyuW/8pJ+J9BERS5hERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==")];
          }
        }]);

        return ProductsService;
      }();

      ProductsService.??fac = function ProductsService_Factory(t) {
        return new (t || ProductsService)();
      };

      ProductsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ProductsService,
        factory: ProductsService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var product = function product(SerialNumber, Name, Price, category, Description, imgurl) {
        _classCallCheck(this, product);

        this.SerialNumber = SerialNumber;
        this.Name = Name;
        this.Price = Price;
        this.category = category;
        this.Description = Description;
        this.imgurl = imgurl;
      };
      /***/

    },

    /***/
    "kWWo":
    /*!********************************************!*\
      !*** ./src/app/navbar/navbar.component.ts ***!
      \********************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function kWWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.??fac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 17,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-purple", "bg-dark"], [1, "container-fluid"], ["routerLink", "/home", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/product", 1, "nav-link", "active"], ["routerLink", "/cart", 1, "nav-link", "active"], ["aria-current", "page", "routerLink", "/contact", 1, "nav-link", "active"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Old scroll");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".red[_ngcontent-%COMP%]{color:red;}\r\n.size20[_ngcontent-%COMP%]{font-size:20px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssU0FBUyxDQUFDO0FBQ2YsUUFBUSxjQUFjLENBQUMiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVke2NvbG9yOnJlZDt9XHJcbi5zaXplMjB7Zm9udC1zaXplOjIwcHg7fSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ka48":
    /*!*************************************!*\
      !*** ./src/app/shopcart.service.ts ***!
      \*************************************/

    /*! exports provided: ShopcartService */

    /***/
    function ka48(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopcartService", function () {
        return ShopcartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ShopcartService = /*#__PURE__*/function () {
        function ShopcartService() {
          _classCallCheck(this, ShopcartService);

          this.products = [];
          this.total_price = 0;
          this.count = 0;
        }

        _createClass(ShopcartService, [{
          key: "addproduct",
          value: function addproduct(product) {
            var flag = false;

            if (this.products) {
              var _iterator2 = _createForOfIteratorHelper(this.products),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var i = _step2.value;

                  if (i.SerialNumber == product.SerialNumber) {
                    flag = true;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            if (!flag) {
              this.products.push(product);
              alert("the product has added successfuly to the shopping cart");
            }
          }
        }, {
          key: "getproduct",
          value: function getproduct() {
            return this.products;
          }
        }, {
          key: "getcount",
          value: function getcount() {
            this.count = 0;

            var _iterator3 = _createForOfIteratorHelper(this.products),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var i = _step3.value;
                this.count -= -1;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return this.count;
          }
        }, {
          key: "getprince_total",
          value: function getprince_total() {
            this.total_price = 0;

            var _iterator4 = _createForOfIteratorHelper(this.products),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var i = _step4.value;
                this.total_price += i.Price;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return "your total price is" + " " + this.total_price + " " + "your total product quantity is" + " " + this.getcount();
          }
        }]);

        return ShopcartService;
      }();

      ShopcartService.??fac = function ShopcartService_Factory(t) {
        return new (t || ShopcartService)();
      };

      ShopcartService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ShopcartService,
        factory: ShopcartService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ShopcartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "sG/L":
    /*!********************************************************!*\
      !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
      \********************************************************/

    /*! exports provided: PagenotfoundComponent */

    /***/
    function sGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
        return PagenotfoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PagenotfoundComponent = /*#__PURE__*/function () {
        function PagenotfoundComponent() {
          _classCallCheck(this, PagenotfoundComponent);

          this.title = "undefined page you have to go back to the previues page";
          this.imgURL = "data:image/png;base64,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";
        }

        _createClass(PagenotfoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PagenotfoundComponent;
      }();

      PagenotfoundComponent.??fac = function PagenotfoundComponent_Factory(t) {
        return new (t || PagenotfoundComponent)();
      };

      PagenotfoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PagenotfoundComponent,
        selectors: [["app-pagenotfound"]],
        decls: 11,
        vars: 2,
        consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["align", "center"], ["width", "500", "height", "500", 3, "src"]],
        template: function PagenotfoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagenotfoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pagenotfound',
            templateUrl: './pagenotfound.component.html',
            styleUrls: ['./pagenotfound.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagenotfound/pagenotfound.component */
      "sG/L");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "kWWo");
      /* harmony import */


      var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart/cart.component */
      "c2A7");
      /* harmony import */


      var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./product/product.component */
      "LvIC");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./details/details.component */
      "9R8I");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: 'navbar',
        component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]
      }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
      }, {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]
      }, {
        path: 'cart/:price',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]
      }, {
        path: 'product',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]
      }, {
        path: 'product/:SerialNumber',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"]
      }, {
        path: '**',
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__["PagenotfoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../users.service */
      "U0XV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../api.service */
      "yTNM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(usersService, router, api) {
          _classCallCheck(this, LoginComponent);

          this.usersService = usersService;
          this.router = router;
          this.api = api;
          this.baseurl = 'http://localhost:3000/';
          this.headers = {
            'content-type': 'application/json'
          };
          this.user = [];
          this.flag = 0;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            // this.user = this.usersService.getusers();
            this.api.getuser().subscribe(function (data) {
              _this5.user = data;
              console.log(data);
            });
          }
        }, {
          key: "onsubmit",
          value: function onsubmit(loginform) {
            var _iterator5 = _createForOfIteratorHelper(this.user),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var i = _step5.value;

                if (i.name == loginform.value.name && i.password == loginform.value.password) {
                  localStorage.setItem('set', i.name);
                  alert('welcome to our website ' + loginform.value.name);
                  this.router.navigateByUrl('home');
                  this.flag = 1;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            if (this.flag == 0) {
              alert('you have to enter a valid details');
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 22,
        vars: 1,
        consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "box", 3, "ngSubmit"], ["loginform", "ngForm"], [1, "text-muted"], ["type", "name", "name", "name", "placeholder", "Username", "ngModel", ""], ["type", "password", "name", "password", "placeholder", "Password", "ngModel", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "meta", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

              return ctx.onsubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Please enter your login and password!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".box[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    padding: 40px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    background: #191919;\r\n    ;\r\n    text-align: center;\r\n    transition: 0.25s;\r\n    margin-top: 100px\r\n}\r\n.box[_ngcontent-%COMP%]   input[type=\"name\"][_ngcontent-%COMP%], .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #3498db;\r\n    padding: 10px 10px;\r\n    width: 250px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s\r\n}\r\n.box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    color: white;\r\n    text-transform: uppercase;\r\n    font-weight: 500\r\n}\r\n.box[_ngcontent-%COMP%]   input[type=\"name\"][_ngcontent-%COMP%]:focus, .box[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%]:focus {\r\n    width: 300px;\r\n    border-color: #2ecc71\r\n}\r\n.box[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: none;\r\n    display: block;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n    border: 2px solid #2ecc71;\r\n    padding: 14px 40px;\r\n    outline: none;\r\n    color: white;\r\n    border-radius: 24px;\r\n    transition: 0.25s;\r\n    cursor: pointer\r\n}\r\n.box[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n    background: #2ecc71\r\n}\r\n.forgot[_ngcontent-%COMP%] {\r\n    text-decoration: underline\r\n}\r\nul.social-network[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: inline;\r\n    margin-left: 0 !important;\r\n    padding: 0\r\n}\r\nul.social-network[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin: 0 5px\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover {\r\n    background-color: #3B5998\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover {\r\n    background-color: #33ccff\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover {\r\n    background-color: #BD3518\r\n}\r\n.social-network[_ngcontent-%COMP%]   a.icoFacebook[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoTwitter[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .social-network[_ngcontent-%COMP%]   a.icoGoogle[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\r\n    color: #fff\r\n}\r\na.socialIcon[_ngcontent-%COMP%]:hover, .socialHoverClass[_ngcontent-%COMP%] {\r\n    color: #44BCDD\r\n}\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    margin: 0 auto 0 auto;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 20px\r\n}\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    line-height: 50px;\r\n    text-align: center\r\n}\r\n.social-circle[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .triggeredHover[_ngcontent-%COMP%] {\r\n    transform: rotate(360deg);\r\n    transition: all 0.2s\r\n}\r\n.social-circle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    transition: all 0.8s;\r\n    transition: all 0.8s\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0VHO0FBQ0g7Ozs7O0dBS0c7QUFFSDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCO0FBQ0o7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CO0FBQ0o7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekI7QUFDSjtBQUVBOztJQUVJLFlBQVk7SUFDWjtBQUNKO0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCO0FBQ0o7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7OztJQUdJO0FBQ0o7QUFFQTs7SUFFSTtBQUNKO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjtBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQjtBQUNKO0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCO0FBQ0o7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEI7QUFDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLCB1cmwoL2Fzc2V0cy9qYWJlci5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXJcclxufVxyXG5cclxuLmxvZ2luX3BhZ2Uge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgcGFkZGluZzogMTAlIDAgMDtcclxuICAgIG1hcmdpbjogYXV0b1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg3LCA0MCwgMTk1LCAwLjgpO1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweFxyXG59XHJcblxyXG4uZm9ybSBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgU2Fucy1zZXJpZjtcclxuICAgIG91dGxpbmU6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweFxyXG59XHJcblxyXG4uZm9ybSBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6ICM0Q0FGNTA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uZm9ybSBidXR0b246aG92ZXIsXHJcbi5mb3JtIGJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzQzQTA0N1xyXG59XHJcblxyXG4uZm9ybSAubWVzc2FnZSB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAwO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG59XHJcblxyXG4uZm9ybSAubWVzc2FnZSBhIHtcclxuICAgIGNvbG9yOiAjNENBRjUwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5mb3JtIC5yZWdpc3Rlcl9mb3JtIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufSAqL1xyXG4vKiBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I5MmIyNywgIzE1NjVjMClcclxufSAqL1xyXG5cclxuLmJveCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTkxOTE5O1xyXG4gICAgO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxyXG59XHJcblxyXG4uYm94IGlucHV0W3R5cGU9XCJuYW1lXCJdLFxyXG4uYm94IGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDk4ZGI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzXHJcbn1cclxuXHJcbi5ib3ggaDEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDBcclxufVxyXG5cclxuLmJveCBpbnB1dFt0eXBlPVwibmFtZVwiXTpmb2N1cyxcclxuLmJveCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMmVjYzcxXHJcbn1cclxuXHJcbi5ib3ggYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmVjYzcxO1xyXG4gICAgcGFkZGluZzogMTRweCA0MHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uYm94IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZWNjNzFcclxufVxyXG5cclxuLmZvcmdvdCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZVxyXG59XHJcblxyXG51bC5zb2NpYWwtbmV0d29yayB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDBcclxufVxyXG5cclxudWwuc29jaWFsLW5ldHdvcmsgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwIDVweFxyXG59XHJcblxyXG4uc29jaWFsLW5ldHdvcmsgYS5pY29GYWNlYm9vazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I1OTk4XHJcbn1cclxuXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb1R3aXR0ZXI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzY2NmZlxyXG59XHJcblxyXG4uc29jaWFsLW5ldHdvcmsgYS5pY29Hb29nbGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JEMzUxOFxyXG59XHJcblxyXG4uc29jaWFsLW5ldHdvcmsgYS5pY29GYWNlYm9vazpob3ZlciBpLFxyXG4uc29jaWFsLW5ldHdvcmsgYS5pY29Ud2l0dGVyOmhvdmVyIGksXHJcbi5zb2NpYWwtbmV0d29yayBhLmljb0dvb2dsZTpob3ZlciBpIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbmEuc29jaWFsSWNvbjpob3ZlcixcclxuLnNvY2lhbEhvdmVyQ2xhc3Mge1xyXG4gICAgY29sb3I6ICM0NEJDRERcclxufVxyXG5cclxuLnNvY2lhbC1jaXJjbGUgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweFxyXG59XHJcblxyXG4uc29jaWFsLWNpcmNsZSBsaSBpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5zb2NpYWwtY2lyY2xlIGxpIGE6aG92ZXIgaSxcclxuLnRyaWdnZXJlZEhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yc1xyXG59XHJcblxyXG4uc29jaWFsLWNpcmNsZSBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuOHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC44c1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "yTNM":
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /*! exports provided: ApiService */

    /***/
    function yTNM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.baseurl = 'http://localhost:8000/api/';
          this.headers = {
            'content-type': 'application/json'
          };
        }

        _createClass(ApiService, [{
          key: "getProduct",
          value: function getProduct() {
            return this.http.get(this.baseurl + 'getallproducts');
          }
        }, {
          key: "getuser",
          value: function getuser() {
            return this.http.get(this.baseurl + 'get_user');
          }
        }, {
          key: "get_one_user",
          value: function get_one_user() {
            return this.http.get(this.baseurl + 'get_user/:user_email');
          }
        }, {
          key: "create_user",
          value: function create_user(user) {
            console.log(user);
            var Body = JSON.stringify(user);
            console.log(Body);
            return this.http.post(this.baseurl + 'create_newuser', Body, {
              headers: this.headers
            });
          }
        }, {
          key: "get_from_cart",
          value: function get_from_cart() {
            return this.http.get(this.baseurl + 'getbyemail/' + localStorage.getItem('set'));
          }
        }, {
          key: "add_to_cart",
          value: function add_to_cart(product) {
            product.name = localStorage.getItem('set');
            console.log(product);
            var Body = JSON.stringify(product);
            return this.http.post(this.baseurl + 'add_to_cart', Body, {
              headers: this.headers
            });
          }
        }, {
          key: "get_this_item",
          value: function get_this_item(product) {
            console.log(product.SerialNumber);
            return this.http.get(this.baseurl + 'get_pointer_item/' + product.SerialNumber);
          }
        }]);

        return ApiService;
      }();

      ApiService.??fac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ApiService,
        factory: ApiService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map