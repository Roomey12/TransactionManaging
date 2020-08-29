(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");








const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    {
        path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [
            { path: 'registration', component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
            { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] }
        ]
    },
    { path: '**', redirectTo: '/' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(spinner, router) {
        this.spinner = spinner;
        this.router = router;
        this.title = 'Transactions';
    }
    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 500);
    }
    // Method for loging out
    onLogout() {
        localStorage.removeItem('token');
        this.router.navigate(['/user/login']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "navbar", "navbar-dark", "bg-dark"], ["routerLink", "/home", 1, "navbar-brand", "text-white"], ["routerLink", "user/login", 1, "btn", "btn-success", 2, "margin-left", "1200px"], [1, "btn", "btn-danger", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/transaction.service */ "./src/app/services/transaction.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/registration/registration.component */ "./src/app/user/registration/registration.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_transaction_service__WEBPACK_IMPORTED_MODULE_8__["TransactionService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _services_file_service__WEBPACK_IMPORTED_MODULE_10__["FileService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                progressBar: true
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
        _user_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                    _user_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_17__["NgxSpinnerModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                        progressBar: true
                    }),
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [
                    _services_transaction_service__WEBPACK_IMPORTED_MODULE_8__["TransactionService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                    _services_file_service__WEBPACK_IMPORTED_MODULE_10__["FileService"], {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    // Method for adding JSON Web Token to requests
    intercept(req, next) {
        if (localStorage.getItem('token') != null) {
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(succ => { }, err => {
                if (err.status == 401) {
                    localStorage.removeItem('token');
                    this.router.navigateByUrl('/user/login');
                }
            }));
        }
        else
            return next.handle(req.clone());
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/transaction.service */ "./src/app/services/transaction.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");








function HomeComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_div_12_Template_label_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const s_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.setStatus(s_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r7);
} }
function HomeComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_div_17_Template_label_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const t_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.setType(t_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r10);
} }
function HomeComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("UserName: ", ctx_r3.user.userName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r3.user.email, "");
} }
function HomeComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You can login.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_0_tr_76_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_tr_76_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const t_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.transactionToChange(t_r13.transactionId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_tr_76_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const t_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.deleteTransaction(t_r13.transactionId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r13.transactionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r13 == null ? null : t_r13.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r13 == null ? null : t_r13.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r13 == null ? null : t_r13.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r13 == null ? null : t_r13.amount);
} }
function HomeComponent_div_0_div_95_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_div_95_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const s_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.setStatusForChanging(s_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r17);
} }
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_0_div_12_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_div_0_div_17_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_div_0_div_18_Template, 5, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_0_div_19_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Import");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_div_0_Template_input_change_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.importTransactions($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Export data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Choose data to export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " TransactionId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.exportTransactions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "thead", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Client name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, HomeComponent_div_0_tr_76_Template, 16, 5, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "pagination-controls", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function HomeComponent_div_0_Template_pagination_controls_pageChange_79_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Change status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, HomeComponent_div_0_div_95_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changeStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](77, 6, ctx_r0.transactions, ctx_r0.config));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statuses);
} }
class HomeComponent {
    constructor(transactionService, toastr, authService, fileService) {
        this.transactionService = transactionService;
        this.toastr = toastr;
        this.authService = authService;
        this.fileService = fileService;
        this.pageNumber = 1;
        this.type = '';
        this.status = '';
    }
    // Method for loading data on page loads
    ngOnInit() {
        this.loadTransactions();
        this.loadStatuses();
        this.loadTypes();
        this.getUserProfile();
        this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.totalItems
        };
        console.log(this.config);
    }
    // Method for loading transaction types
    loadTypes() {
        this.transactionService.getTypes().subscribe((data) => {
            this.types = data;
        });
    }
    // Method for loading transaction statuses
    loadStatuses() {
        this.transactionService.getStatuses().subscribe((data) => {
            this.statuses = data;
        });
    }
    // Method for deleting transaction
    deleteTransaction(id) {
        var result = confirm("Are you sure that you want to delete this transaction?");
        if (result == true) {
            this.transactionService.deleteTransaction(id).subscribe(data => {
                this.toastr.success('Transaction was deleted.', 'Succesfully.');
                this.loadTransactions();
            });
        }
    }
    // Method for getting users profile
    getUserProfile() {
        this.authService.getUserProfile().subscribe((data) => {
            this.user = data;
        });
    }
    // Method for setting type for transaction filter
    setType(type) {
        this.type = type;
        document.getElementById('setType').innerHTML = type;
        this.loadTransactions();
    }
    // Method for setting status for transaction filter
    setStatus(status) {
        this.status = status;
        document.getElementById('setStatus').innerHTML = status;
        this.loadTransactions();
    }
    // Method for setting new status of transaction
    setStatusForChanging(status) {
        this.statusToEdit = status;
        document.getElementById('statusToEdit').innerHTML = status;
    }
    // Method for changing transaction status
    changeStatus() {
        if (!this.statusToEdit) {
            this.toastr.error('You need to set new status.', 'Error.');
        }
        else {
            let transaction = {
                transactionId: this.transactionToEdit,
                status: this.statusToEdit
            };
            this.transactionService.editTransaction(transaction).subscribe(data => {
                this.toastr.success('Transactions status was changed.', 'Success!');
                this.transactionToEdit = null;
                this.loadTransactions();
                document.getElementById('statusToEdit').innerHTML = "Status";
            }),
                err => {
                    console.log(err);
                };
        }
    }
    // Method for indicating which transactions status must be changed
    transactionToChange(transactionId) {
        this.transactionToEdit = transactionId;
    }
    // Method for loading transactions
    loadTransactions() {
        this.transactionService.getTransactions(this.type, this.status, this.pageNumber).
            subscribe((data) => {
            this.transactions = data["data"];
            this.totalItems = data["totalItems"];
            this.config = {
                itemsPerPage: 10,
                currentPage: this.pageNumber,
                totalItems: this.totalItems
            };
            this.loaded = true;
        });
    }
    // Method for exporting transactions in xlsx file
    exportTransactions() {
        let transactionId = document.getElementById('transactionId').checked;
        let status = document.getElementById('status').checked;
        let type = document.getElementById('type').checked;
        let clientName = document.getElementById('clientName').checked;
        let amount = document.getElementById('amount').checked;
        if (!transactionId && !status && !type && !clientName && !amount) {
            this.toastr.error('You need to choose at least 1 item.', 'Error.');
        }
        else {
            let body = {
                transStatus: this.status,
                transType: this.type,
                transactionId: transactionId,
                status: status,
                type: type,
                clientName: clientName,
                amount: amount
            };
            this.fileService.exportTransactions(body);
        }
    }
    // Method for importing transactions in csv file
    importTransactions(event) {
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append('file', file, file.name);
        this.fileService.importTransactions(formData).subscribe(data => {
            this.toastr.success('File was uploaded.', 'Success!');
            this.loadTransactions();
        });
    }
    // Method for changing page number and loading appropriate transactions
    pageChanged(event) {
        this.pageNumber = event;
        this.loadTransactions();
        this.config.currentPage = event;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 1, consts: [["class", "row mt-4 mx-4", 4, "ngIf"], [1, "row", "mt-4", "mx-4"], [1, "col-3"], [2, "border", "2px solid black", "width", "100%", "height", "35vh"], [1, "col-12", 2, "background-color", "cornflowerblue", "border-bottom", "2px solid black"], [1, "col-9"], [1, "row", "pl-3", "pr-2", "mb-5"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "setStatus", 1, "btn", "btn-outline-dark", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], [1, "dropdown", "mx-2"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "setType", 1, "btn", "btn-outline-dark", "dropdown-toggle"], ["class", "row mx-auto", 4, "ngIf"], ["for", "files", 1, "btn", "btn-outline-dark", "ml-auto"], ["id", "files", "type", "file", 2, "display", "none", 3, "change"], ["data-toggle", "modal", "data-target", "#modalexport", 1, "btn", "mx-2", "btn-outline-dark"], ["id", "modalexport", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-sm"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "required", "mx-auto"], [1, "text-center"], ["type", "checkbox", "id", "transactionId", "checked", ""], ["type", "checkbox", "id", "status", "checked", ""], ["type", "checkbox", "id", "type", "checked", ""], ["type", "checkbox", "id", "clientName", "checked", ""], ["type", "checkbox", "id", "amount", "checked", ""], [1, "form-row", "text-center"], [1, "form-group", "col-12"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "table-striped", "table-bordered", "col-12"], [1, "thead-dark"], ["scope", "col"], [3, "pageChange"], ["id", "modalchangetransaction", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "form-group", "required"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "id", "statusToEdit", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "form-row", "text-center", "my-2"], [1, "dropdown-item", "py-0", 2, "cursor", "pointer", 3, "click"], [1, "row", "mx-auto"], [1, "my-auto", "mx-3"], [1, "my-auto"], ["scope", "row"], ["data-toggle", "modal", "data-target", "#modalchangetransaction", 1, "btn", "btn-sm", "btn-primary", 2, "margin-right", "5px", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "dropdown-item", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 100, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: ["td[_ngcontent-%COMP%]{\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    border: 1px solid black!important;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:active{\r\n    background: white;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRke1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB0ZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






// Service for working with authorization and authentication
class AuthService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.authUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'auth/';
        // Model for validation data for registration
        this.formModel = this.fb.group({
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            Passwords: this.fb.group({
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
                ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }, { validator: this.comparePasswords })
        });
    }
    // Http request for registrating user
    register() {
        var body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            Password: this.formModel.value.Passwords.Password
        };
        return this.http.post(this.authUrl + 'register', body);
    }
    // Http request for authenticating user
    login(formData) {
        return this.http.post(this.authUrl + 'login', formData);
    }
    // Method for comparing passwords
    comparePasswords(fb) {
        let confirmPswrdCtrl = fb.get('ConfirmPassword');
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value != confirmPswrdCtrl.value)
                confirmPswrdCtrl.setErrors({ passwordMismatch: true });
            else
                confirmPswrdCtrl.setErrors(null);
        }
    }
    // Method for matching users role
    roleMatch(allowedRoles) {
        var isMatch = false;
        var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
        var userRole = payLoad.role;
        allowedRoles.forEach(element => {
            if (userRole == element) {
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    }
    // Method for getting users profile
    getUserProfile() {
        return this.http.get(this.authUrl + 'profile');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




// Service for working with files
class FileService {
    constructor(http) {
        this.http = http;
        this.fileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'file/';
    }
    // Method for exporting file with transactions
    exportTransactions(body) {
        let url = this.fileUrl + `export/excel?transType=${body.transType}&transStatus=${body.transStatus}&TransactionId=${body.transactionId}&Status=${body.status}&Type=${body.type}&ClientName=${body.clientName}&Amount=${body.amount}`;
        window.open(url);
    }
    // Method for importing file with transactions
    importTransactions(csv) {
        return this.http.post(this.fileUrl + 'import/csv', csv);
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/transaction.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/transaction.service.ts ***!
  \*************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




// Service for working with transactions
class TransactionService {
    constructor(http) {
        this.http = http;
        this.transactionUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'transaction/';
    }
    // Method for deleting transaction
    deleteTransaction(id) {
        return this.http.delete(this.transactionUrl + id);
    }
    // Method for editing transaction
    editTransaction(transaction) {
        return this.http.put(this.transactionUrl, transaction);
    }
    // Method for getting all transaction statuses
    getStatuses() {
        return this.http.get(this.transactionUrl + `statuses`);
    }
    // Method for getting all transaction types
    getTypes() {
        return this.http.get(this.transactionUrl + `types`);
    }
    // Method for getting transactions
    getTransactions(type, status, pageNumber) {
        return this.http.get(this.transactionUrl + `filtered?type=${type}&status=${status}&pageNumber=${pageNumber}&pageSize=10`);
    }
}
TransactionService.ɵfac = function TransactionService_Factory(t) { return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionService, factory: TransactionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class LoginComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
            UserName: '',
            Password: ''
        };
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null)
            this.router.navigateByUrl('/home');
    }
    // Method for submitting authentication data
    onSubmit(form) {
        this.authService.login(form.value).subscribe((res) => {
            localStorage.setItem('token', res.token);
            this.router.navigateByUrl('/home');
        }, err => {
            if (err.error == "Username or password is incorrect") {
                this.toastr.error('Username or password is incorrect.', 'Authentication failed.');
            }
            else {
                this.toastr.error('Something went wrong.', 'Authentication failed.');
            }
        });
    }
    // Method for showing or hidding password
    show_hide_password() {
        var input = document.getElementById('password-input');
        var eye = document.getElementById('passeye');
        if (input.getAttribute('type') == 'password') {
            eye.classList.add('view');
            input.setAttribute('type', 'text');
        }
        else {
            eye.classList.remove('view');
            input.setAttribute('type', 'password');
        }
        return false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 3, consts: [["src", "/assets/img/single_user.png", 1, "mx-auto", "d-block"], ["autocomplete", "off", 1, "mb-4", 3, "submit"], ["form", "ngForm"], [1, "form-group"], ["name", "UserName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["UserName", "ngModel"], [1, "password"], ["type", "password", "id", "password-input", "name", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Password", "ngModel"], ["href", "#", "id", "passeye", 1, "password-control", 3, "click"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.formModel.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.formModel.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_14_listener() { return ctx.show_hide_password(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formModel.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formModel.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["input.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus{\r\n    background-color: #636b7b;\r\n    color: #fff;\r\n    border: 1px solid #636b7b;\r\n\r\n}\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n}\r\n\r\nbutton[type=submit].btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    background-color: #04c582;\r\n    color: #fff;\r\n}\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(.text-danger){\r\n    color: #545d6a;\r\n    font-weight: 700;\r\n}\r\n\r\ndiv.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child:after{\r\n    content:'*';\r\n    color: #fff;\r\n    padding-left: 5px;\r\n}\r\n\r\n#toast-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    opacity:1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n.wrapped-div[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #2e3137;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n\r\n\r\n.tab-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border-bottom: 4px solid #fff;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    padding: 30px 40px 10px 40px;\r\n    cursor: pointer;\r\n    color: #545d6a;\r\n    border-bottom: 2px solid #545d6a;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n      margin: 0px 16px;\r\n  }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{\r\n    border: 1px solid #dc3545; \r\n }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{\r\n    text-transform: uppercase;\r\n    font-size: 0.9rem;\r\n }\r\n\r\n.password[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n}\r\n\r\n.password-control[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 11px;\r\n\tright: 6px;\r\n\tdisplay: inline-block;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;\r\n}\r\n\r\n.password-control.view[_ngcontent-%COMP%] {\r\n\tbackground: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7RUFDZjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7RUFDM0M7O0FBRUEsU0FBUzs7QUFDWDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFRTtJQUNFLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUVBO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7QUFFRDtJQUNHLHlCQUF5QjtDQUM1Qjs7QUFDQTtJQUNHLHlCQUF5QjtJQUN6QixpQkFBaUI7Q0FDcEI7O0FBQ0E7Q0FDQSxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLFlBQVk7Q0FDWixpRUFBaUU7QUFDbEU7O0FBQ0E7Q0FDQyxvRUFBb0U7QUFDckUiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5mb3JtLWNvbnRyb2wsaW5wdXQuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNmI3YjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYzNmI3YjtcclxuXHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPXN1Ym1pdF0uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGM1ODI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuZGl2LmZvcm0tZ3JvdXAgbGFiZWw6bm90KC50ZXh0LWRhbmdlcil7XHJcbiAgICBjb2xvcjogIzU0NWQ2YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmRpdi5mb3JtLWdyb3VwLnJlcXVpcmVkPmxhYmVsOmZpcnN0LWNoaWxkOmFmdGVye1xyXG4gICAgY29udGVudDonKic7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4jdG9hc3QtY29udGFpbmVyID4gZGl2IHtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZWQtZGl2IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmUzMTM3O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuXHJcbiAgLyogVGFicyAqL1xyXG4udGFiLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAudGFiLWhlYWRlciBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gIC50YWItaGVhZGVyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweCAxMHB4IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzU0NWQ2YTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTQ1ZDZhO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1oZWFkZXIgaDI6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgZm9ybXtcclxuICAgICAgbWFyZ2luOiAwcHggMTZweDtcclxuICB9XHJcblxyXG4gZGl2LmZvcm0tZ3JvdXAgaW5wdXQuaW52YWxpZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7IFxyXG4gfVxyXG4gZGl2LmZvcm0tZ3JvdXAgbGFiZWw6Zmlyc3QtY2hpbGR7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiB9XHJcbiAucGFzc3dvcmQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucGFzc3dvcmQtY29udHJvbCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTFweDtcclxuXHRyaWdodDogNnB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMjBweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc25pcHAucnUvZGVtby80OTUvdmlldy5zdmcpIDAgMCBuby1yZXBlYXQ7XHJcbn1cclxuLnBhc3N3b3JkLWNvbnRyb2wudmlldyB7XHJcblx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc25pcHAucnUvZGVtby80OTUvbm8tdmlldy5zdmcpIDAgMCBuby1yZXBlYXQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function RegistrationComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid email adress. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum 6 characters required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is mandatory. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegistrationComponent_label_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords missmatch. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegistrationComponent {
    constructor(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
        this.pas1 = "password";
        this.pas2 = "confirmPassword";
    }
    ngOnInit() {
        this.authService.formModel.reset();
    }
    // Method for submitting registration data
    onSubmit() {
        this.authService.register().subscribe((res) => {
            if (res.succeeded) {
                this.authService.formModel.reset();
                this.toastr.success('Now you can sign in.', 'Registration passed succesfully!');
            }
            else {
                res.errors.forEach(element => {
                    switch (element.code) {
                        case 'DuplicateUserName':
                            this.toastr.error('Login is already taken.', 'Registration failed.');
                            break;
                        default:
                            this.toastr.error(element.description, 'Registration failed.');
                            break;
                    }
                });
            }
        }, err => {
            console.log(err);
            this.toastr.error('Something went wrong.', 'Registration failed.');
        });
    }
    // Method for showing or hidding password
    show_hide_password(el) {
        if (el == "password") {
            var input = document.getElementById('password-input');
            var eye = document.getElementById('passeye');
        }
        else {
            var input = document.getElementById('confirm-password-input');
            var eye = document.getElementById('confirm-passeye');
        }
        if (input.getAttribute('type') == 'password') {
            eye.classList.add('view');
            input.setAttribute('type', 'text');
        }
        else {
            eye.classList.remove('view');
            input.setAttribute('type', 'password');
        }
        return false;
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 33, vars: 9, consts: [["autocomplete", "off", 1, "container", 3, "formGroup", "submit"], [1, "form-group", "required"], ["formControlName", "UserName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "Email", 1, "form-control"], ["formGroupName", "Passwords"], [1, "password"], ["type", "password", "id", "password-input", "formControlName", "Password", 1, "form-control"], ["href", "#", "id", "passeye", 1, "password-control", 3, "click"], ["type", "password", "id", "confirm-password-input", "formControlName", "ConfirmPassword", 1, "form-control"], ["href", "#", "id", "confirm-passeye", 1, "password-control", 3, "click"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", 3, "disabled"], [1, "text-danger"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegistrationComponent_Template_form_submit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UserName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegistrationComponent_label_5_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegistrationComponent_label_10_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegistrationComponent_label_11_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_a_click_18_listener() { return ctx.show_hide_password(ctx.pas1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegistrationComponent_label_19_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegistrationComponent_label_20_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_a_click_26_listener() { return ctx.show_hide_password(ctx.pas2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistrationComponent_label_27_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegistrationComponent_label_28_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authService.formModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("UserName").touched && (ctx.authService.formModel.get("UserName").errors == null ? null : ctx.authService.formModel.get("UserName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Email").touched && (ctx.authService.formModel.get("Email").errors == null ? null : ctx.authService.formModel.get("Email").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Email").touched && (ctx.authService.formModel.get("Email").errors == null ? null : ctx.authService.formModel.get("Email").errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Passwords.Password").touched && (ctx.authService.formModel.get("Passwords.Password").errors == null ? null : ctx.authService.formModel.get("Passwords.Password").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Passwords.Password").touched && (ctx.authService.formModel.get("Passwords.Password").errors == null ? null : ctx.authService.formModel.get("Passwords.Password").errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Passwords.ConfirmPassword").touched && (ctx.authService.formModel.get("Passwords.ConfirmPassword").errors == null ? null : ctx.authService.formModel.get("Passwords.ConfirmPassword").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Passwords.ConfirmPassword").touched && (ctx.authService.formModel.get("Passwords.ConfirmPassword").errors == null ? null : ctx.authService.formModel.get("Passwords.ConfirmPassword").errors.passwordMismatch));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.authService.formModel.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"]], styles: ["input.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus{\r\n    background-color: #636b7b;\r\n    color: #fff;\r\n    border: 1px solid #636b7b;\r\n\r\n}\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n}\r\n\r\nbutton[type=submit].btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    background-color: #04c582;\r\n    color: #fff;\r\n}\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(.text-danger){\r\n    color: #545d6a;\r\n    font-weight: 700;\r\n}\r\n\r\ndiv.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child:after{\r\n    content:'*';\r\n    color: #fff;\r\n    padding-left: 5px;\r\n}\r\n\r\n#toast-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    opacity:1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n.wrapped-div[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #2e3137;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n\r\n\r\n.tab-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border-bottom: 4px solid #fff;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    padding: 30px 40px 10px 40px;\r\n    cursor: pointer;\r\n    color: #545d6a;\r\n    border-bottom: 2px solid #545d6a;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n      margin: 0px 16px;\r\n  }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{\r\n    border: 1px solid #dc3545; \r\n }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{\r\n    text-transform: uppercase;\r\n    font-size: 0.9rem;\r\n }\r\n\r\n.password[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n }\r\n\r\n.password-control[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 11px;\r\n\tright: 6px;\r\n\tdisplay: inline-block;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;\r\n }\r\n\r\n.password-control.view[_ngcontent-%COMP%] {\r\n\tbackground: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtFQUNmOztBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztFQUMzQzs7QUFFQSxTQUFTOztBQUNYO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVFO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0FBRUE7TUFDSSxhQUFhO0VBQ2pCOztBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztBQUVEO0lBQ0cseUJBQXlCO0NBQzVCOztBQUNBO0lBQ0cseUJBQXlCO0lBQ3pCLGlCQUFpQjtDQUNwQjs7QUFDQTtDQUNBLGtCQUFrQjtDQUNsQjs7QUFDQTtDQUNBLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGlFQUFpRTtDQUNqRTs7QUFDQTtDQUNBLG9FQUFvRTtDQUNwRSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQuZm9ybS1jb250cm9sLGlucHV0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzZiN2I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MzZiN2I7XHJcblxyXG59XHJcblxyXG5pbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5idXR0b25bdHlwZT1zdWJtaXRdLmJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRjNTgyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmRpdi5mb3JtLWdyb3VwIGxhYmVsOm5vdCgudGV4dC1kYW5nZXIpe1xyXG4gICAgY29sb3I6ICM1NDVkNmE7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5kaXYuZm9ybS1ncm91cC5yZXF1aXJlZD5sYWJlbDpmaXJzdC1jaGlsZDphZnRlcntcclxuICAgIGNvbnRlbnQ6JyonO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVkLWRpdiB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJlMzEzNztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcblxyXG4gIC8qIFRhYnMgKi9cclxuLnRhYi1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgLnRhYi1oZWFkZXIgaDIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAudGFiLWhlYWRlciBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHggMTBweCA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM1NDVkNmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU0NWQ2YTtcclxuICB9XHJcblxyXG4gIC50YWItaGVhZGVyIGgyOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIGZvcm17XHJcbiAgICAgIG1hcmdpbjogMHB4IDE2cHg7XHJcbiAgfVxyXG5cclxuIGRpdi5mb3JtLWdyb3VwIGlucHV0LmludmFsaWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1OyBcclxuIH1cclxuIGRpdi5mb3JtLWdyb3VwIGxhYmVsOmZpcnN0LWNoaWxke1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gfVxyXG4gLnBhc3N3b3JkIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiB9XHJcbiAucGFzc3dvcmQtY29udHJvbCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTFweDtcclxuXHRyaWdodDogNnB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMjBweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc25pcHAucnUvZGVtby80OTUvdmlldy5zdmcpIDAgMCBuby1yZXBlYXQ7XHJcbiB9XHJcbiAucGFzc3dvcmQtY29udHJvbC52aWV3IHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zbmlwcC5ydS9kZW1vLzQ5NS9uby12aWV3LnN2ZykgMCAwIG5vLXJlcGVhdDtcclxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UserComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 10, vars: 0, consts: [[1, "wrapper"], [1, "wrapped-div"], [1, "tab-header"], ["routerLink", "/user/login", "routerLinkActive", "active", 1, "w-100", "col-4", "text-center"], ["routerLink", "/user/registration", "routerLinkActive", "active", 1, "w-100", "col-4", "text-center"], [1, "row"], [1, "col-md-10", "offset-md-1"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["input.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus{\r\n    background-color: #636b7b;\r\n    color: #fff;\r\n    border: 1px solid #636b7b;\r\n\r\n}\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n}\r\n\r\nbutton[type=submit].btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    background-color: #04c582;\r\n    color: #fff;\r\n}\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(.text-danger){\r\n    color: #545d6a;\r\n    font-weight: 700;\r\n}\r\n\r\ndiv.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child:after{\r\n    content:'*';\r\n    color: #fff;\r\n    padding-left: 5px;\r\n}\r\n\r\n#toast-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    opacity:1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n.wrapped-div[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #2e3137;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n\r\n\r\n.tab-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border-bottom: 4px solid #fff;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    padding: 30px 10px 10px 10px;\r\n    cursor: pointer;\r\n    color: #545d6a;\r\n    border-bottom: 2px solid #545d6a;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n      margin: 0px 16px;\r\n  }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{\r\n    border: 1px solid #dc3545; \r\n }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{\r\n    text-transform: uppercase;\r\n    font-size: 0.9rem;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtFQUNmOztBQUVBO0lBRUUsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUVaLHlDQUF5QztFQUMzQzs7QUFFQSxTQUFTOztBQUNYO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVFO0lBQ0UsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0FBRUE7TUFDSSxhQUFhO0VBQ2pCOztBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztBQUVEO0lBQ0cseUJBQXlCO0NBQzVCOztBQUNBO0lBQ0cseUJBQXlCO0lBQ3pCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQuZm9ybS1jb250cm9sLGlucHV0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MzZiN2I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MzZiN2I7XHJcblxyXG59XHJcblxyXG5pbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5idXR0b25bdHlwZT1zdWJtaXRdLmJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRjNTgyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmRpdi5mb3JtLWdyb3VwIGxhYmVsOm5vdCgudGV4dC1kYW5nZXIpe1xyXG4gICAgY29sb3I6ICM1NDVkNmE7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5kaXYuZm9ybS1ncm91cC5yZXF1aXJlZD5sYWJlbDpmaXJzdC1jaGlsZDphZnRlcntcclxuICAgIGNvbnRlbnQ6JyonO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVkLWRpdiB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJlMzEzNztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcblxyXG4gIC8qIFRhYnMgKi9cclxuLnRhYi1oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgLnRhYi1oZWFkZXIgaDIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAudGFiLWhlYWRlciBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM1NDVkNmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU0NWQ2YTtcclxuICB9XHJcblxyXG4gIC50YWItaGVhZGVyIGgyOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIGZvcm17XHJcbiAgICAgIG1hcmdpbjogMHB4IDE2cHg7XHJcbiAgfVxyXG5cclxuIGRpdi5mb3JtLWdyb3VwIGlucHV0LmludmFsaWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1OyBcclxuIH1cclxuIGRpdi5mb3JtLWdyb3VwIGxhYmVsOmZpcnN0LWNoaWxke1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://localhost:44392/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\roomey\Desktop\c#\TransactionsControl_CSV_Excel\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map