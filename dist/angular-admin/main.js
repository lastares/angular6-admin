(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./_mock/_user.ts":
/*!************************!*\
  !*** ./_mock/_user.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/esm5/mock.js");

// TIPS: mockjs 一些优化细节见：http://ng-alain.com/docs/mock
// import * as Mock from 'mockjs';
var list = [];
var total = 50;
for (var i = 0; i < total; i += 1) {
    list.push({
        id: i + 1,
        disabled: i % 6 === 0,
        href: 'https://ant.design',
        avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        ][i % 2],
        no: "TradeCode " + i,
        title: "\u4E00\u4E2A\u4EFB\u52A1\u540D\u79F0 " + i,
        owner: '曲丽丽',
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 4,
        updatedAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        createdAt: new Date("2017-07-" + (Math.floor(i / 2) + 1)),
        progress: Math.ceil(Math.random() * 100),
    });
}
function genData(params) {
    var ret = list.slice();
    var pi = +params.pi, ps = +params.ps, start = (pi - 1) * ps;
    if (params.no) {
        ret = ret.filter(function (data) { return data.no.indexOf(params.no) > -1; });
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
function saveData(id, value) {
    var item = list.find(function (w) { return w.id === id; });
    if (!item) {
        return { msg: '无效用户信息' };
    }
    Object.assign(item, value);
    return { msg: 'ok' };
}
var USERS = {
    '/user': function (req) { return genData(req.queryString); },
    '/user/:id': function (req) { return list.find(function (w) { return w.id === +req.params.id; }); },
    'POST /user/:id': function (req) { return saveData(+req.params.id, req.body); },
    // 支持值为 Object 和 Array
    'GET /users': { users: [1, 2], total: 2 },
    // GET 可省略
    // '/users/1': Mock.mock({ id: 1, 'rank|3': '★★★' }),
    // POST 请求
    'POST /users/1': { uid: 1 },
    // 获取请求参数 queryString、headers、body
    '/qs': function (req) { return req.queryString.pi; },
    // 路由参数
    '/users/:id': function (req) { return req.params; },
    // 发送 Status 错误
    '/404': function () {
        throw new _delon_mock__WEBPACK_IMPORTED_MODULE_0__["MockStatusError"](404);
    },
};


/***/ }),

/***/ "./_mock/index.ts":
/*!************************!*\
  !*** ./_mock/index.ts ***!
  \************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_user */ "./_mock/_user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["USERS"]; });




/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": [
		"./src/app/routes/user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(settings, router, titleSrv) {
        this.settings = settings;
        this.router = router;
        this.titleSrv = titleSrv;
    }
    Object.defineProperty(AppComponent.prototype, "isFixed", {
        get: function () {
            return this.settings.layout.fixed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isBoxed", {
        get: function () {
            return this.settings.layout.boxed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isCollapsed", {
        get: function () {
            return this.settings.layout.collapsed;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (evt) { return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function () { return _this.titleSrv.setTitle(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.layout-fixed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isFixed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.layout-boxed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isBoxed", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.aside-collapsed'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], AppComponent.prototype, "isCollapsed", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_2__["TitleService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: StartupServiceFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupServiceFactory", function() { return StartupServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _delon_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delon.module */ "./src/app/delon.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/startup/startup.service */ "./src/app/core/startup/startup.service.ts");
/* harmony import */ var _core_net_default_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/net/default.interceptor */ "./src/app/core/net/default.interceptor.ts");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/esm5/auth.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh_Hans__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/zh-Hans */ "./node_modules/@angular/common/locales/zh-Hans.js");
/* harmony import */ var _angular_common_locales_zh_Hans__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh_Hans__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/json-schema/json-schema.module */ "./src/app/shared/json-schema/json-schema.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// angular i18n


Object(_angular_common__WEBPACK_IMPORTED_MODULE_13__["registerLocaleData"])(_angular_common_locales_zh_Hans__WEBPACK_IMPORTED_MODULE_14___default.a);
// @delon/form: JSON Schema form

function StartupServiceFactory(startupService) {
    return function () { return startupService.load(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _delon_module__WEBPACK_IMPORTED_MODULE_4__["DelonModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _routes_routes_module__WEBPACK_IMPORTED_MODULE_8__["RoutesModule"],
                // JSON-Schema form
                _shared_json_schema_json_schema_module__WEBPACK_IMPORTED_MODULE_15__["JsonSchemaModule"]
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'zh-Hans' },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _delon_auth__WEBPACK_IMPORTED_MODULE_12__["SimpleInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _core_net_default_interceptor__WEBPACK_IMPORTED_MODULE_11__["DefaultInterceptor"], multi: true },
                _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_10__["StartupService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: StartupServiceFactory,
                    deps: [_core_startup_startup_service__WEBPACK_IMPORTED_MODULE_10__["StartupService"]],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_1__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: []
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
// https://angular.io/guide/styleguide#style-04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/net/default.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/core/net/default.interceptor.ts ***!
  \*************************************************/
/*! exports provided: DefaultInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultInterceptor", function() { return DefaultInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
var DefaultInterceptor = /** @class */ (function () {
    function DefaultInterceptor(injector) {
        this.injector = injector;
    }
    Object.defineProperty(DefaultInterceptor.prototype, "msg", {
        get: function () {
            return this.injector.get(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]);
        },
        enumerable: true,
        configurable: true
    });
    DefaultInterceptor.prototype.goTo = function (url) {
        var _this = this;
        setTimeout(function () { return _this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]).navigateByUrl(url); });
    };
    DefaultInterceptor.prototype.handleData = function (event) {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        this.injector.get(_delon_theme__WEBPACK_IMPORTED_MODULE_6__["_HttpClient"]).end();
        // 业务处理：一些通用操作
        switch (event.status) {
            case 200:
                // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
                // 例如响应内容：
                //  错误内容：{ status: 1, msg: '非法参数' }
                //  正确内容：{ status: 0, response: {  } }
                // 则以下代码片断可直接适用
                // if (event instanceof HttpResponse) {
                //     const body: any = event.body;
                //     if (body && body.status !== 0) {
                //         this.msg.error(body.msg);
                //         // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                //         // this.http.get('/').subscribe() 并不会触发
                //         return throwError({});
                //     } else {
                //         // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                //         return of(new HttpResponse(Object.assign(event, { body: body.response })));
                //         // 或者依然保持完整的格式
                //         return of(event);
                //     }
                // }
                break;
            case 401:// 未登录状态码
                this.goTo('/passport/login');
                break;
            case 403:
            case 404:
            case 500:
                this.goTo("/" + event.status);
                break;
            default:
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                    console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', event);
                    this.msg.error(event.message);
                }
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event);
    };
    DefaultInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // 统一加上服务端前缀
        var url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://')) {
            url = _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].SERVER_URL + url;
        }
        var newReq = req.clone({
            url: url,
        });
        return next.handle(newReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (event) {
            // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] && event.status === 200)
                return _this.handleData(event);
            // 若一切都正常，则后续操作
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.handleData(err); }));
    };
    DefaultInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DefaultInterceptor);
    return DefaultInterceptor;
}());



/***/ }),

/***/ "./src/app/core/startup/startup.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/startup/startup.service.ts ***!
  \*************************************************/
/*! exports provided: StartupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupService", function() { return StartupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/esm5/auth.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/esm5/acl.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
var StartupService = /** @class */ (function () {
    function StartupService(menuService, settingService, aclService, titleService, tokenService, httpClient, injector) {
        this.menuService = menuService;
        this.settingService = settingService;
        this.aclService = aclService;
        this.titleService = titleService;
        this.tokenService = tokenService;
        this.httpClient = httpClient;
        this.injector = injector;
    }
    StartupService.prototype.viaHttp = function (resolve, reject) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["zip"])(this.httpClient.get('assets/tmp/app-data.json')).pipe(
        // 接收其他拦截器后产生的异常消息
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_a) {
            var appData = _a[0];
            resolve(null);
            return [appData];
        })).subscribe(function (_a) {
            var appData = _a[0];
            // application data
            var res = appData;
            // 应用信息：包括站点名、描述、年份
            _this.settingService.setApp(res.app);
            // 用户信息：包括姓名、头像、邮箱地址
            _this.settingService.setUser(res.user);
            // ACL：设置权限为全量
            _this.aclService.setFull(true);
            // 初始化菜单
            _this.menuService.add(res.menu);
            // 设置页面标题的后缀
            _this.titleService.suffix = res.app.name;
        }, function () { }, function () {
            resolve(null);
        });
    };
    StartupService.prototype.viaMock = function (resolve, reject) {
        // const tokenData = this.tokenService.get();
        // if (!tokenData.token) {
        //   this.injector.get(Router).navigateByUrl('/passport/login');
        //   resolve({});
        //   return;
        // }
        // mock
        var app = {
            name: "ng-alain",
            description: "Ng-zorro admin panel front-end framework"
        };
        var user = {
            name: 'Admin',
            avatar: './assets/tmp/img/avatar.jpg',
            email: 'cipchk@qq.com',
            token: '123456789'
        };
        // 应用信息：包括站点名、描述、年份
        this.settingService.setApp(app);
        // 用户信息：包括姓名、头像、邮箱地址
        this.settingService.setUser(user);
        // ACL：设置权限为全量
        this.aclService.setFull(true);
        // 初始化菜单
        this.menuService.add([
            {
                text: '主导航',
                group: true,
                children: [
                    {
                        text: '仪表盘',
                        link: '/dashboard',
                        icon: 'anticon anticon-appstore-o'
                    },
                    {
                        text: '快捷菜单',
                        icon: 'anticon anticon-rocket',
                        shortcut_root: true
                    },
                    {
                        "i18n": "用户管理",
                        text: '用户管理',
                        icon: 'anticon anticon-user',
                        // group: true,
                        children: [
                            {
                                text: '用户列表',
                                link: '/user/list',
                                icon: 'anticon anticon-appstore-o'
                            },
                        ]
                    }
                ]
            }
        ]);
        // 设置页面标题的后缀
        this.titleService.suffix = app.name;
        resolve({});
    };
    StartupService.prototype.load = function () {
        var _this = this;
        // only works with promises
        // https://github.com/angular/angular/issues/15088
        return new Promise(function (resolve, reject) {
            // http
            // this.viaHttp(resolve, reject);
            // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
            _this.viaMock(resolve, reject);
        });
    };
    StartupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_5__["DA_SERVICE_TOKEN"])),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_4__["MenuService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _delon_acl__WEBPACK_IMPORTED_MODULE_6__["ACLService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_4__["TitleService"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], StartupService);
    return StartupService;
}());



/***/ }),

/***/ "./src/app/delon.module.ts":
/*!*********************************!*\
  !*** ./src/app/delon.module.ts ***!
  \*********************************/
/*! exports provided: pageHeaderConfig, delonAuthConfig, DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageHeaderConfig", function() { return pageHeaderConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delonAuthConfig", function() { return delonAuthConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/esm5/abc.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/esm5/auth.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/esm5/acl.js");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @delon/cache */ "./node_modules/@delon/cache/esm5/cache.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/esm5/util.js");
/* harmony import */ var _delon_mock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @delon/mock */ "./node_modules/@delon/mock/esm5/mock.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_mock */ "./_mock/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * 进一步对基础模块的导入提炼
 * 有关模块注册指导原则请参考：https://github.com/cipchk/ng-alain/issues/180
 */










// mock



var MOCKMODULE = !_env_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production ? [_delon_mock__WEBPACK_IMPORTED_MODULE_10__["DelonMockModule"].forRoot({ data: _mock__WEBPACK_IMPORTED_MODULE_11__ })] : [];
// region: global config functions

function pageHeaderConfig() {
    return Object.assign(new _delon_abc__WEBPACK_IMPORTED_MODULE_5__["AdPageHeaderConfig"](), { home_i18n: 'home' });
}

function delonAuthConfig() {
    return Object.assign(new _delon_auth__WEBPACK_IMPORTED_MODULE_6__["DelonAuthConfig"](), {
        login_url: '/passport/login',
    });
}
// endregion
var DelonModule = /** @class */ (function () {
    function DelonModule(parentModule) {
        Object(_core_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, 'DelonModule');
    }
    DelonModule_1 = DelonModule;
    DelonModule.forRoot = function () {
        return {
            ngModule: DelonModule_1,
            providers: [
                // TIPS：若不需要路由复用需要移除以下代码及模板`<reuse-tab></reuse-tab>`
                {
                    provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteReuseStrategy"],
                    useClass: _delon_abc__WEBPACK_IMPORTED_MODULE_5__["ReuseTabStrategy"],
                    deps: [_delon_abc__WEBPACK_IMPORTED_MODULE_5__["ReuseTabService"]],
                },
                // TIPS：@delon/abc 有大量的全局配置信息，例如设置所有 `simple-table` 的页码默认为 `20` 行
                // { provide: SimpleTableConfig, useFactory: simpleTableConfig }
                { provide: _delon_abc__WEBPACK_IMPORTED_MODULE_5__["AdPageHeaderConfig"], useFactory: pageHeaderConfig },
                { provide: _delon_auth__WEBPACK_IMPORTED_MODULE_6__["DelonAuthConfig"], useFactory: delonAuthConfig },
            ],
        };
    };
    DelonModule = DelonModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"].forRoot(),
                _delon_theme__WEBPACK_IMPORTED_MODULE_4__["AlainThemeModule"].forRoot(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_5__["DelonABCModule"].forRoot(),
                _delon_auth__WEBPACK_IMPORTED_MODULE_6__["DelonAuthModule"].forRoot(),
                _delon_acl__WEBPACK_IMPORTED_MODULE_7__["DelonACLModule"].forRoot(),
                _delon_cache__WEBPACK_IMPORTED_MODULE_8__["DelonCacheModule"].forRoot(),
                _delon_util__WEBPACK_IMPORTED_MODULE_9__["DelonUtilModule"].forRoot()
            ].concat(MOCKMODULE),
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [DelonModule])
    ], DelonModule);
    return DelonModule;
    var DelonModule_1;
}());



/***/ }),

/***/ "./src/app/layout/default/default.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/default/default.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"router-progress-bar\" *ngIf=\"isFetching\"></div>\r\n  <layout-header class=\"header\"></layout-header>\r\n  <layout-sidebar class=\"aside\"></layout-sidebar>\r\n  <section class=\"content\">\r\n    <reuse-tab></reuse-tab>\r\n    <router-outlet></router-outlet>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/default/default.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/default/default.component.ts ***!
  \*****************************************************/
/*! exports provided: LayoutDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDefaultComponent", function() { return LayoutDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent(router, scroll, _message, menuSrv, settings) {
        var _this = this;
        this._message = _message;
        this.menuSrv = menuSrv;
        this.settings = settings;
        this.isFetching = false;
        // scroll to top in change page
        router.events.subscribe(function (evt) {
            if (!_this.isFetching && evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                _this.isFetching = true;
            }
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.isFetching = false;
                _message.error("\u65E0\u6CD5\u52A0\u8F7D" + evt.url + "\u8DEF\u7531", { nzDuration: 1000 * 3 });
                return;
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            setTimeout(function () {
                scroll.scrollToTop();
                _this.isFetching = false;
            }, 100);
        });
    }
    LayoutDefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layout/default/default.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["ScrollService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["MenuService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], LayoutDefaultComponent);
    return LayoutDefaultComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/fullscreen.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/default/header/components/fullscreen.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFullScreenComponent", function() { return HeaderFullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderFullScreenComponent = /** @class */ (function () {
    function HeaderFullScreenComponent() {
        this.status = false;
    }
    HeaderFullScreenComponent.prototype._resize = function () {
        this.status = screenfull__WEBPACK_IMPORTED_MODULE_1__["isFullscreen"];
    };
    HeaderFullScreenComponent.prototype._click = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_resize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderFullScreenComponent.prototype, "_click", null);
    HeaderFullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-fullscreen',
            template: "\n  <i class=\"anticon anticon-{{status ? 'shrink' : 'arrows-alt'}}\"></i>\n  {{ status ? '\u9000\u51FA\u5168\u5C4F' : '\u5168\u5C4F' }}\n  "
        })
    ], HeaderFullScreenComponent);
    return HeaderFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/icon.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/icon.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIconComponent", function() { return HeaderIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderIconComponent = /** @class */ (function () {
    function HeaderIconComponent() {
        this.loading = true;
    }
    HeaderIconComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () { return (_this.loading = false); }, 500);
    };
    HeaderIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-icon',
            template: "\n  <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n    <div class=\"item\" nz-dropdown>\n      <i class=\"anticon anticon-appstore-o\"></i>\n    </div>\n    <div nz-menu class=\"wd-xl animated jello\">\n      <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'\u6B63\u5728\u8BFB\u53D6\u6570\u636E...'\">\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-calendar bg-error text-white\"></i>\n            <small>Calendar</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-file bg-teal text-white\"></i>\n            <small>Files</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-cloud bg-success text-white\"></i>\n            <small>Cloud</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-star-o bg-magenta text-white\"></i>\n            <small>Star</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-team bg-purple text-white\"></i>\n            <small>Team</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-scan bg-warning text-white\"></i>\n            <small>QR</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-pay-circle-o bg-cyan text-white\"></i>\n            <small>Pay</small>\n          </div>\n          <div nz-col [nzSpan]=\"6\">\n            <i class=\"anticon anticon-printer bg-grey text-white\"></i>\n            <small>Print</small>\n          </div>\n        </div>\n      </nz-spin>\n    </div>\n  </nz-dropdown>\n  ",
        })
    ], HeaderIconComponent);
    return HeaderIconComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/notify.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/notify.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotifyComponent", function() { return HeaderNotifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/distance_in_words_to_now */ "./node_modules/date-fns/distance_in_words_to_now/index.js");
/* harmony import */ var date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 菜单通知
 */
var HeaderNotifyComponent = /** @class */ (function () {
    function HeaderNotifyComponent(msg) {
        this.msg = msg;
        this.data = [
            {
                title: '通知',
                list: [],
                emptyText: '你已查看所有通知',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                clearText: '清空通知',
            },
            {
                title: '消息',
                list: [],
                emptyText: '您已读完所有消息',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
                clearText: '清空消息',
            },
            {
                title: '待办',
                list: [],
                emptyText: '你已完成所有待办',
                emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
                clearText: '清空待办',
            },
        ];
        this.count = 5;
        this.loading = false;
    }
    HeaderNotifyComponent.prototype.updateNoticeData = function (notices) {
        var data = this.data.slice();
        data.forEach(function (i) { return (i.list = []); });
        notices.forEach(function (item) {
            var newItem = __assign({}, item);
            if (newItem.datetime)
                newItem.datetime = date_fns_distance_in_words_to_now__WEBPACK_IMPORTED_MODULE_1__(item.datetime, {
                    locale: window.__locale__,
                });
            if (newItem.extra && newItem.status) {
                newItem.color = {
                    todo: undefined,
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newItem.status];
            }
            data.find(function (w) { return w.title === newItem.type; }).list.push(newItem);
        });
        return data;
    };
    HeaderNotifyComponent.prototype.loadData = function () {
        var _this = this;
        if (this.loading)
            return;
        this.loading = true;
        setTimeout(function () {
            _this.data = _this.updateNoticeData([
                {
                    id: '000000001',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '你收到了 14 份新周报',
                    datetime: '2017-08-09',
                    type: '通知',
                },
                {
                    id: '000000002',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
                    title: '你推荐的 曲妮妮 已通过第三轮面试',
                    datetime: '2017-08-08',
                    type: '通知',
                },
                {
                    id: '000000003',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
                    title: '这种模板可以区分多种通知类型',
                    datetime: '2017-08-07',
                    read: true,
                    type: '通知',
                },
                {
                    id: '000000004',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
                    title: '左侧图标用于区分不同的类型',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000005',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
                    title: '内容不要超过两行字，超出时自动截断',
                    datetime: '2017-08-07',
                    type: '通知',
                },
                {
                    id: '000000006',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '曲丽丽 评论了你',
                    description: '描述信息描述信息描述信息',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000007',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '朱偏右 回复了你',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000008',
                    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                    title: '标题',
                    description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
                    datetime: '2017-08-07',
                    type: '消息',
                },
                {
                    id: '000000009',
                    title: '任务名称',
                    description: '任务需要在 2017-01-12 20:00 前启动',
                    extra: '未开始',
                    status: 'todo',
                    type: '待办',
                },
                {
                    id: '000000010',
                    title: '第三方紧急代码变更',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '马上到期',
                    status: 'urgent',
                    type: '待办',
                },
                {
                    id: '000000011',
                    title: '信息安全考试',
                    description: '指派竹尔于 2017-01-09 前完成更新并发布',
                    extra: '已耗时 8 天',
                    status: 'doing',
                    type: '待办',
                },
                {
                    id: '000000012',
                    title: 'ABCD 版本发布',
                    description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
                    extra: '进行中',
                    status: 'processing',
                    type: '待办',
                },
            ]);
            _this.loading = false;
        }, 1000);
    };
    HeaderNotifyComponent.prototype.clear = function (type) {
        this.msg.success("\u6E05\u7A7A\u4E86 " + type);
    };
    HeaderNotifyComponent.prototype.select = function (res) {
        this.msg.success("\u70B9\u51FB\u4E86 " + res.title + " \u7684 " + res.item.title);
    };
    HeaderNotifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-notify',
            template: "\n  <notice-icon\n    [data]=\"data\"\n    [count]=\"count\"\n    [loading]=\"loading\"\n    (select)=\"select($event)\"\n    (clear)=\"clear($event)\"\n    (popoverVisibleChange)=\"loadData()\"></notice-icon>\n  ",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], HeaderNotifyComponent);
    return HeaderNotifyComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/default/header/components/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSearchComponent", function() { return HeaderSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderSearchComponent = /** @class */ (function () {
    function HeaderSearchComponent(el) {
        this.el = el;
        this.focus = false;
        this.searchToggled = false;
    }
    Object.defineProperty(HeaderSearchComponent.prototype, "toggleChange", {
        set: function (value) {
            var _this = this;
            if (typeof value === 'undefined')
                return;
            this.searchToggled = true;
            this.focus = true;
            setTimeout(function () { return _this.qIpt.focus(); }, 300);
        },
        enumerable: true,
        configurable: true
    });
    HeaderSearchComponent.prototype.ngAfterViewInit = function () {
        this.qIpt = this.el.nativeElement.querySelector('.ant-input');
    };
    HeaderSearchComponent.prototype.qFocus = function () {
        this.focus = true;
    };
    HeaderSearchComponent.prototype.qBlur = function () {
        this.focus = false;
        this.searchToggled = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.header-search__focus'),
        __metadata("design:type", Object)
    ], HeaderSearchComponent.prototype, "focus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.header-search__toggled'),
        __metadata("design:type", Object)
    ], HeaderSearchComponent.prototype, "searchToggled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], HeaderSearchComponent.prototype, "toggleChange", null);
    HeaderSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-search',
            template: "\n  <nz-input-group nzAddOnBeforeIcon=\"anticon anticon-search\">\n    <input nz-input [(ngModel)]=\"q\" (focus)=\"qFocus()\" (blur)=\"qBlur()\"\n      [placeholder]=\"'\u641C\u7D22\uFF1A\u5458\u5DE5\u3001\u6587\u4EF6\u3001\u7167\u7247\u7B49'\">\n  </nz-input-group>\n  "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HeaderSearchComponent);
    return HeaderSearchComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/storage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/default/header/components/storage.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeaderStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStorageComponent", function() { return HeaderStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderStorageComponent = /** @class */ (function () {
    function HeaderStorageComponent(confirmServ, messageServ) {
        this.confirmServ = confirmServ;
        this.messageServ = messageServ;
    }
    HeaderStorageComponent.prototype._click = function () {
        var _this = this;
        this.confirmServ.confirm({
            nzTitle: 'Make sure clear all local storage?',
            nzOnOk: function () {
                localStorage.clear();
                _this.messageServ.success('Clear Finished!');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderStorageComponent.prototype, "_click", null);
    HeaderStorageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-storage',
            template: "\n  <i class=\"anticon anticon-tool\"></i>\n  \u6E05\u9664\u672C\u5730\u7F13\u5B58\n  "
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], HeaderStorageComponent);
    return HeaderStorageComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/task.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/task.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTaskComponent", function() { return HeaderTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderTaskComponent = /** @class */ (function () {
    function HeaderTaskComponent() {
        this.loading = true;
    }
    HeaderTaskComponent.prototype.change = function () {
        var _this = this;
        setTimeout(function () { return (_this.loading = false); }, 500);
    };
    HeaderTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-task',
            template: "\n  <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\" (nzVisibleChange)=\"change()\">\n    <div class=\"item\" nz-dropdown>\n      <nz-badge [nzDot]=\"true\">\n        <i class=\"anticon anticon-bell\"></i>\n      </nz-badge>\n    </div>\n    <div nz-menu class=\"wd-lg\">\n      <nz-card nzTitle=\"Notifications\" [nzLoading]=\"loading\" class=\"ant-card__body-nopadding\">\n        <ng-template #extra><i class=\"anticon anticon-plus\"></i></ng-template>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/1.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>cipchk</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/2.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>\u306F\u306A\u3055\u304D</strong>\n            <p class=\"mb0\">\u30CF\u30EB\u30AB\u30BD\u30E9\u30C8\u30AD\u30D8\u30C0\u30C4\u30D2\u30AB\u30EA </p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/3.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>\u82CF\u5148\u751F</strong>\n            <p class=\"mb0\">\u8BF7\u544A\u8BC9\u6211\uFF0C\u6211\u5E94\u8BE5\u8BF4\u70B9\u4EC0\u4E48\u597D\uFF1F</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/4.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>Kent</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"py-sm bg-grey-lighter-h point\">\n          <div nz-col [nzSpan]=\"4\" class=\"text-center\">\n            <nz-avatar [nzSrc]=\"'./assets/tmp/img/5.png'\"></nz-avatar>\n          </div>\n          <div nz-col [nzSpan]=\"20\">\n            <strong>Jefferson</strong>\n            <p class=\"mb0\">Please tell me what happened in a few words, don't go into details.</p>\n          </div>\n        </div>\n        <div nz-row class=\"pt-lg pb-lg\">\n          <div nz-col [nzSpan]=\"24\" class=\"border-top-1 text-center text-grey point\">\n            See All\n          </div>\n        </div>\n      </nz-card>\n    </div>\n  </nz-dropdown>\n  ",
        })
    ], HeaderTaskComponent);
    return HeaderTaskComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/components/user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/default/header/components/user.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserComponent", function() { return HeaderUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/esm5/auth.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HeaderUserComponent = /** @class */ (function () {
    function HeaderUserComponent(settings, router, tokenService) {
        this.settings = settings;
        this.router = router;
        this.tokenService = tokenService;
    }
    HeaderUserComponent.prototype.logout = function () {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
    };
    HeaderUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-user',
            template: "\n  <nz-dropdown nzPlacement=\"bottomRight\">\n    <div class=\"item d-flex align-items-center px-sm\" nz-dropdown>\n      <nz-avatar [nzSrc]=\"settings.user.avatar\" nzSize=\"small\" class=\"mr-sm\"></nz-avatar>\n      {{settings.user.name}}\n    </div>\n    <div nz-menu class=\"width-sm\">\n      <div nz-menu-item [nzDisabled]=\"true\"><i class=\"anticon anticon-user mr-sm\"></i>\u4E2A\u4EBA\u4E2D\u5FC3</div>\n      <div nz-menu-item [nzDisabled]=\"true\"><i class=\"anticon anticon-setting mr-sm\"></i>\u8BBE\u7F6E</div>\n      <li nz-menu-divider></li>\n      <div nz-menu-item (click)=\"logout()\"><i class=\"anticon anticon-setting mr-sm\"></i>\u9000\u51FA\u767B\u5F55</div>\n    </div>\n  </nz-dropdown>\n  ",
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_3__["DA_SERVICE_TOKEN"])),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], HeaderUserComponent);
    return HeaderUserComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n  <a [routerLink]=\"['/']\">\r\n    <img class=\"expanded\" src=\"./assets/logo-full.svg\" alt=\"{{settings.app.name}}\" style=\"max-height:40px;\" />\r\n    <img class=\"collapsed\" src=\"./assets/logo.svg\" alt=\"{{settings.app.name}}\" style=\"max-height:30px;\" />\r\n  </a>\r\n</div>\r\n<div class=\"top-nav-wrap\">\r\n  <ul class=\"top-nav\">\r\n    <!-- Menu -->\r\n    <li>\r\n      <div class=\"item\" (click)=\"toggleCollapsedSideabar()\">\r\n        <i class=\"anticon anticon-menu-{{settings.layout.collapsed ? 'unfold' : 'fold'}}\"></i>\r\n      </div>\r\n    </li>\r\n    <!-- Github Page -->\r\n    <li>\r\n      <a class=\"item\" href=\"//github.com/cipchk/ng-alain\" target=\"_blank\">\r\n        <i class=\"anticon anticon-github\"></i>\r\n      </a>\r\n    </li>\r\n    <!-- Lock Page -->\r\n    <li class=\"hidden-xs\">\r\n      <div class=\"item\" [routerLink]=\"['/lock']\">\r\n        <i class=\"anticon anticon-lock\"></i>\r\n      </div>\r\n    </li>\r\n    <!-- Search Button -->\r\n    <li class=\"header-search__btn\" (click)=\"searchToggleChange()\">\r\n      <div class=\"item\">\r\n        <i class=\"anticon anticon-search\"></i>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  <header-search class=\"header-search\" [toggleChange]=\"searchToggleStatus\"></header-search>\r\n  <ul class=\"top-nav\">\r\n    <!-- Notify -->\r\n    <li>\r\n      <header-notify></header-notify>\r\n    </li>\r\n    <!-- Task -->\r\n    <li class=\"hidden-xs\">\r\n      <header-task></header-task>\r\n    </li>\r\n    <!-- App Icons -->\r\n    <li class=\"hidden-xs\">\r\n      <header-icon></header-icon>\r\n    </li>\r\n    <!-- Settings -->\r\n    <li class=\"hidden-xs\">\r\n      <nz-dropdown nzTrigger=\"click\" nzPlacement=\"bottomRight\">\r\n        <div class=\"item\" nz-dropdown>\r\n          <i class=\"anticon anticon-setting\"></i>\r\n        </div>\r\n        <div nz-menu style=\"width:200px;\">\r\n          <div nz-menu-item>\r\n            <header-fullscreen></header-fullscreen>\r\n          </div>\r\n          <div nz-menu-item>\r\n            <header-storage></header-storage>\r\n          </div>\r\n        </div>\r\n      </nz-dropdown>\r\n    </li>\r\n    <li class=\"hidden-xs\">\r\n      <header-user></header-user>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/default/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/default/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(settings) {
        this.settings = settings;
    }
    HeaderComponent.prototype.toggleCollapsedSideabar = function () {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    };
    HeaderComponent.prototype.searchToggleChange = function () {
        this.searchToggleStatus = !this.searchToggleStatus;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/default/header/header.component.html")
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aside-inner\">\r\n  <nz-dropdown nzTrigger=\"click\" class=\"user-block clearfix\">\r\n    <div nz-dropdown class=\"user-block-dropdown\">\r\n      <nz-avatar class=\"avatar\" [nzIcon]=\"'user'\"></nz-avatar>\r\n      <div class=\"info\">\r\n        <strong>{{settings.user.name}}</strong>\r\n        <p class=\"text-truncate mb0\">{{settings.user.email}}</p>\r\n      </div>\r\n    </div>\r\n    <ul nz-menu>\r\n      <li nz-menu-item (click)=\"msgSrv.success('profile')\">个人资料</li>\r\n      <li nz-menu-item (click)=\"msgSrv.success('settings')\">设置</li>\r\n      <li nz-menu-item (click)=\"msgSrv.success('logout')\">登出</li>\r\n    </ul>\r\n  </nz-dropdown>\r\n  <sidebar-nav class=\"d-block py-lg\"></sidebar-nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/default/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/default/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settings, msgSrv) {
        this.settings = settings;
        this.msgSrv = msgSrv;
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/default/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["SettingsService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layout/fullscreen/fullscreen.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/fullscreen/fullscreen.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutFullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFullScreenComponent", function() { return LayoutFullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutFullScreenComponent = /** @class */ (function () {
    function LayoutFullScreenComponent() {
    }
    LayoutFullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-fullscreen',
            template: __webpack_require__(/*! ./fullscreen.component.html */ "./src/app/layout/fullscreen/fullscreen.component.html"),
        })
    ], LayoutFullScreenComponent);
    return LayoutFullScreenComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var _default_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/header/header.component */ "./src/app/layout/default/header/header.component.ts");
/* harmony import */ var _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default/sidebar/sidebar.component */ "./src/app/layout/default/sidebar/sidebar.component.ts");
/* harmony import */ var _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/header/components/search.component */ "./src/app/layout/default/header/components/search.component.ts");
/* harmony import */ var _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/header/components/notify.component */ "./src/app/layout/default/header/components/notify.component.ts");
/* harmony import */ var _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/header/components/task.component */ "./src/app/layout/default/header/components/task.component.ts");
/* harmony import */ var _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default/header/components/icon.component */ "./src/app/layout/default/header/components/icon.component.ts");
/* harmony import */ var _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/header/components/fullscreen.component */ "./src/app/layout/default/header/components/fullscreen.component.ts");
/* harmony import */ var _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default/header/components/storage.component */ "./src/app/layout/default/header/components/storage.component.ts");
/* harmony import */ var _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default/header/components/user.component */ "./src/app/layout/default/header/components/user.component.ts");
/* harmony import */ var _passport_passport_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./passport/passport.component */ "./src/app/layout/passport/passport.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var COMPONENTS = [
    _default_default_component__WEBPACK_IMPORTED_MODULE_2__["LayoutDefaultComponent"],
    _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_3__["LayoutFullScreenComponent"],
    _default_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _default_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
];
var HEADERCOMPONENTS = [
    _default_header_components_search_component__WEBPACK_IMPORTED_MODULE_6__["HeaderSearchComponent"],
    _default_header_components_notify_component__WEBPACK_IMPORTED_MODULE_7__["HeaderNotifyComponent"],
    _default_header_components_task_component__WEBPACK_IMPORTED_MODULE_8__["HeaderTaskComponent"],
    _default_header_components_icon_component__WEBPACK_IMPORTED_MODULE_9__["HeaderIconComponent"],
    _default_header_components_fullscreen_component__WEBPACK_IMPORTED_MODULE_10__["HeaderFullScreenComponent"],
    _default_header_components_storage_component__WEBPACK_IMPORTED_MODULE_11__["HeaderStorageComponent"],
    _default_header_components_user_component__WEBPACK_IMPORTED_MODULE_12__["HeaderUserComponent"]
];
// passport

var PASSPORT = [
    _passport_passport_component__WEBPACK_IMPORTED_MODULE_13__["LayoutPassportComponent"]
];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            providers: [],
            declarations: COMPONENTS.concat(HEADERCOMPONENTS, PASSPORT),
            exports: COMPONENTS.concat(PASSPORT)
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/passport/passport.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"wrap\">\r\n    <div class=\"top\">\r\n      <div class=\"head\">\r\n        <img class=\"logo\" src=\"./assets/logo-color.svg\">\r\n        <span class=\"title\">ng-alain</span>\r\n      </div>\r\n      <div class=\"desc\">武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫</div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <global-footer [links]=\"links\">\r\n      Copyright\r\n      <i class=\"anticon anticon-copyright\"></i> 2017\r\n      <a href=\"//github.com/cipchk\" target=\"_blank\">卡色</a>出品\r\n    </global-footer>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.less":
/*!*********************************************************!*\
  !*** ./src/app/layout/passport/passport.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n:host ::ng-deep .container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background: #f0f2f5;\n}\n:host ::ng-deep .wrap {\n  padding: 32px 0;\n  flex: 1;\n}\n:host ::ng-deep .ant-form-item {\n  margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n  :host ::ng-deep .container {\n    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');\n    background-repeat: no-repeat;\n    background-position: center 110px;\n    background-size: 100%;\n  }\n  :host ::ng-deep .wrap {\n    padding: 112px 0 24px;\n  }\n}\n:host ::ng-deep .top {\n  text-align: center;\n}\n:host ::ng-deep .header {\n  height: 44px;\n  line-height: 44px;\n}\n:host ::ng-deep .header a {\n  text-decoration: none;\n}\n:host ::ng-deep .logo {\n  height: 44px;\n  margin-right: 16px;\n}\n:host ::ng-deep .title {\n  font-size: 33px;\n  color: rgba(0, 0, 0, 0.85);\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  position: relative;\n  vertical-align: middle;\n}\n:host ::ng-deep .desc {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  margin-top: 12px;\n  margin-bottom: 40px;\n}\n"

/***/ }),

/***/ "./src/app/layout/passport/passport.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/passport/passport.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutPassportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPassportComponent", function() { return LayoutPassportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutPassportComponent = /** @class */ (function () {
    function LayoutPassportComponent() {
        this.links = [
            {
                title: '帮助',
                href: '',
            },
            {
                title: '隐私',
                href: '',
            },
            {
                title: '条款',
                href: '',
            },
        ];
    }
    LayoutPassportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'layout-passport',
            template: __webpack_require__(/*! ./passport.component.html */ "./src/app/layout/passport/passport.component.html"),
            styles: [__webpack_require__(/*! ./passport.component.less */ "./src/app/layout/passport/passport.component.less")],
        })
    ], LayoutPassportComponent);
    return LayoutPassportComponent;
}());



/***/ }),

/***/ "./src/app/routes/callback/callback.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/callback/callback.component.ts ***!
  \*******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/esm5/auth.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(socialService, route, router) {
        this.socialService = socialService;
        this.route = route;
        this.router = router;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.type = params['type'];
            _this.mockModel();
        });
    };
    CallbackComponent.prototype.mockModel = function () {
        this.socialService.callback({
            token: '123456789',
            name: 'cipchk',
            email: this.type + "@" + this.type + ".com",
            id: 10000,
            time: +new Date(),
        });
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: "",
            providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["SocialService"]],
        }),
        __metadata("design:paramtypes", [_delon_auth__WEBPACK_IMPORTED_MODULE_2__["SocialService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/routes/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n  <h1>Page Name</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/routes/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_1__["_HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/routes/exception/403.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/403.component.ts ***!
  \***************************************************/
/*! exports provided: Exception403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception403Component", function() { return Exception403Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception403Component = /** @class */ (function () {
    function Exception403Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception403Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-403',
            template: "<exception type=\"403\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception403Component);
    return Exception403Component;
}());



/***/ }),

/***/ "./src/app/routes/exception/404.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/404.component.ts ***!
  \***************************************************/
/*! exports provided: Exception404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception404Component", function() { return Exception404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception404Component = /** @class */ (function () {
    function Exception404Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-404',
            template: "<exception type=\"404\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception404Component);
    return Exception404Component;
}());



/***/ }),

/***/ "./src/app/routes/exception/500.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/exception/500.component.ts ***!
  \***************************************************/
/*! exports provided: Exception500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception500Component", function() { return Exception500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Exception500Component = /** @class */ (function () {
    function Exception500Component(modalSrv) {
        modalSrv.closeAll();
    }
    Exception500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'exception-500',
            template: "<exception type=\"500\" style=\"min-height: 500px; height: 80%;\"></exception>",
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalService"]])
    ], Exception500Component);
    return Exception500Component;
}());



/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.html":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"abs-center width-lg\">\r\n    <div class=\"py-lg text-center\">\r\n      <nz-avatar [nzSrc]=\"settings.user.avatar\" nzIcon=\"anticon anticon-user\" nzSize=\"large\"></nz-avatar>\r\n    </div>\r\n    <nz-card [nzBordered]=\"false\">\r\n      <p class=\"mb-sm\">输入密码后解锁屏幕。</p>\r\n      <form nz-form [formGroup]=\"f\" (ngSubmit)=\"submit()\" role=\"form\">\r\n        <nz-form-item>\r\n          <nz-form-control>\r\n            <nz-input-group nzSize=\"large\" nzSuffixIcon=\"anticon anticon-lock\">\r\n              <input type=\"password\" nz-input formControlName=\"password\">\r\n            </nz-input-group>\r\n            <nz-form-explain *ngIf=\"f.get('password').dirty && f.get('password').errors\">This field is required</nz-form-explain>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-row nzType=\"flex\" nzAlign=\"middle\">\r\n          <nz-col [nzOffset]=\"12\" [nzSpan]=\"12\" style=\"text-align:right;\">\r\n            <button nz-button nzSize=\"large\" [disabled]=\"!f.valid\" nzType=\"primary\">解锁</button>\r\n          </nz-col>\r\n        </nz-row>\r\n      </form>\r\n    </nz-card>\r\n    <div class=\"p-lg text-center text-sm\">\r\n      &copy; {{ settings.app.year }} - {{ settings.app.name }}\r\n      <br> {{ settings.app.description }}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/passport/lock/lock.component.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/passport/lock/lock.component.ts ***!
  \********************************************************/
/*! exports provided: UserLockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLockComponent", function() { return UserLockComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLockComponent = /** @class */ (function () {
    function UserLockComponent(settings, fb, router) {
        this.settings = settings;
        this.router = router;
        this.f = fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    UserLockComponent.prototype.submit = function () {
        // tslint:disable-next-line:forin
        for (var i in this.f.controls) {
            this.f.controls[i].markAsDirty();
            this.f.controls[i].updateValueAndValidity();
        }
        if (this.f.valid) {
            console.log('Valid!');
            console.log(this.f.value);
            this.router.navigate(['dashboard']);
        }
    };
    UserLockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'passport-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/routes/passport/lock/lock.component.html"),
        }),
        __metadata("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["SettingsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], UserLockComponent);
    return UserLockComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\r\n  <nz-tabset [nzAnimated]=\"false\" class=\"tabs\" (nzSelectChange)=\"switch($event)\">\r\n    <nz-tab nzTitle=\"账户密码登录\">\r\n      <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-user\">\r\n            <input nz-input formControlName=\"userName\" placeholder=\"admin\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"userName.dirty && userName.errors\">请输入账户名且至少五个字符！</nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-lock\">\r\n            <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"888888\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"password.dirty && password.errors\">\r\n            请输入密码！\r\n          </nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </nz-tab>\r\n    <nz-tab nzTitle=\"手机号登录\">\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-user\">\r\n            <input nz-input formControlName=\"mobile\" placeholder=\"手机号\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"mobile.dirty && mobile.errors\">请输入手机号且至少五个字符！</nz-form-explain>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control>\r\n          <nz-row [nzGutter]=\"8\">\r\n            <nz-col [nzSpan]=\"16\">\r\n              <nz-input-group nzSize=\"large\" nzPrefixIcon=\"anticon anticon-mail\">\r\n                <input nz-input formControlName=\"captcha\" placeholder=\"验证码\">\r\n              </nz-input-group>\r\n              <nz-form-explain *ngIf=\"mobile.dirty && mobile.errors\">\r\n                请输入验证码！\r\n              </nz-form-explain>\r\n            </nz-col>\r\n            <nz-col [nzSpan]=\"8\">\r\n              <button nz-button nzSize=\"large\" (click)=\"getCaptcha()\" [disabled]=\"count\" class=\"ant-btn__block\">{{ count ? count + 's' : '获取验证码' }}</button>\r\n            </nz-col>\r\n          </nz-row>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </nz-tab>\r\n  </nz-tabset>\r\n  <nz-form-item>\r\n    <nz-col [nzSpan]=\"12\">\r\n      <label nz-checkbox formControlName=\"remember\">自动登录</label>\r\n    </nz-col>\r\n    <nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n      <a class=\"forgot\" (click)=\"msg.error('请找欧阳锋')\">忘记密码？</a>\r\n    </nz-col>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <button nz-button type=\"submit\" nzType=\"primary\" nzSize=\"large\" [nzLoading]=\"loading\" class=\"ant-btn__block\">登录</button>\r\n  </nz-form-item>\r\n</form>\r\n<div class=\"other\">\r\n  其他登录方式\r\n  <i title=\"in fact Auth0 via window\" (click)=\"open('auth0', 'window')\" class=\"anticon anticon-alipay-circle icon\"></i>\r\n  <i title=\"in fact Github via redirect\" (click)=\"open('taobao')\" class=\"anticon anticon-taobao-circle icon\"></i>\r\n  <i title=\"真的是微博\" (click)=\"open('weibo', 'window')\" class=\"anticon anticon-weibo-circle icon\"></i>\r\n  <a class=\"register\" routerLink=\"/passport/register\">注册账户</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.less":
/*!************************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep .ant-tabs .ant-tabs-bar {\n  border-bottom: 0;\n  margin-bottom: 24px;\n  text-align: center;\n}\n:host ::ng-deep .ant-tabs-tab {\n  font-size: 16px;\n  line-height: 24px;\n}\n:host ::ng-deep .ant-input-affix-wrapper .ant-input:not(:first-child) {\n  padding-left: 34px;\n}\n:host ::ng-deep .icon {\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.2);\n  margin-left: 16px;\n  vertical-align: middle;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n:host ::ng-deep .icon:hover {\n  color: #1890ff;\n}\n:host ::ng-deep .other {\n  text-align: left;\n  margin-top: 24px;\n  line-height: 22px;\n}\n:host ::ng-deep .other nz-tooltip {\n  vertical-align: middle;\n}\n:host ::ng-deep .other .register {\n  float: right;\n}\n"

/***/ }),

/***/ "./src/app/routes/passport/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/passport/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var _delon_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/auth */ "./node_modules/@delon/auth/esm5/auth.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/esm5/abc.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/startup/startup.service */ "./src/app/core/startup/startup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(fb, router, msg, modalSrv, settingsService, socialService, reuseTabService, tokenService, startupSrv) {
        this.router = router;
        this.msg = msg;
        this.modalSrv = modalSrv;
        this.settingsService = settingsService;
        this.socialService = socialService;
        this.reuseTabService = reuseTabService;
        this.tokenService = tokenService;
        this.startupSrv = startupSrv;
        this.error = '';
        this.type = 0;
        this.loading = false;
        // region: get captcha
        this.count = 0;
        this.form = fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5)]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            remember: [true],
        });
        modalSrv.closeAll();
    }
    Object.defineProperty(UserLoginComponent.prototype, "userName", {
        // region: fields
        get: function () {
            return this.form.controls.userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "password", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "mobile", {
        get: function () {
            return this.form.controls.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserLoginComponent.prototype, "captcha", {
        get: function () {
            return this.form.controls.captcha;
        },
        enumerable: true,
        configurable: true
    });
    // endregion
    UserLoginComponent.prototype.switch = function (ret) {
        this.type = ret.index;
    };
    UserLoginComponent.prototype.getCaptcha = function () {
        var _this = this;
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // endregion
    UserLoginComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        if (this.type === 0) {
            this.userName.markAsDirty();
            this.userName.updateValueAndValidity();
            this.password.markAsDirty();
            this.password.updateValueAndValidity();
            if (this.userName.invalid || this.password.invalid)
                return;
        }
        else {
            this.mobile.markAsDirty();
            this.mobile.updateValueAndValidity();
            this.captcha.markAsDirty();
            this.captcha.updateValueAndValidity();
            if (this.mobile.invalid || this.captcha.invalid)
                return;
        }
        // mock http
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            if (_this.type === 0) {
                if (_this.userName.value !== 'admin' ||
                    _this.password.value !== '888888') {
                    _this.error = "\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF";
                    return;
                }
            }
            // 清空路由复用信息
            _this.reuseTabService.clear();
            // 设置Token信息
            _this.tokenService.set({
                token: '123456789',
                name: _this.userName.value,
                email: "cipchk@qq.com",
                id: 10000,
                time: +new Date(),
            });
            // 重新获取 StartupService 内容，若其包括 User 有关的信息的话
            // this.startupSrv.load().then(() => this.router.navigate(['/']));
            // 否则直接跳转
            _this.router.navigate(['/']);
        }, 1000);
    };
    // region: social
    UserLoginComponent.prototype.open = function (type, openType) {
        var _this = this;
        if (openType === void 0) { openType = 'href'; }
        var url = "";
        var callback = "";
        if (_env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production)
            callback = 'https://cipchk.github.io/ng-alain/callback/' + type;
        else
            callback = 'http://localhost:4200/callback/' + type;
        switch (type) {
            case 'auth0':
                url = "//cipchk.auth0.com/login?client=8gcNydIDzGBYxzqV0Vm1CX_RXH-wsWo5&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'github':
                url = "//github.com/login/oauth/authorize?client_id=9d6baae4b04a23fcafa2&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
            case 'weibo':
                url = "https://api.weibo.com/oauth2/authorize?client_id=1239507802&response_type=code&redirect_uri=" + decodeURIComponent(callback);
                break;
        }
        if (openType === 'window') {
            this.socialService
                .login(url, '/', {
                type: 'window',
            })
                .subscribe(function (res) {
                if (res) {
                    _this.settingsService.setUser(res);
                    _this.router.navigateByUrl('/');
                }
            });
        }
        else {
            this.socialService.login(url, '/', {
                type: 'href',
            });
        }
    };
    // endregion
    UserLoginComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'passport-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/routes/passport/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.less */ "./src/app/routes/passport/login/login.component.less")],
            providers: [_delon_auth__WEBPACK_IMPORTED_MODULE_5__["SocialService"]],
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_abc__WEBPACK_IMPORTED_MODULE_6__["ReuseTabService"])),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_delon_auth__WEBPACK_IMPORTED_MODULE_5__["DA_SERVICE_TOKEN"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_0__["SettingsService"],
            _delon_auth__WEBPACK_IMPORTED_MODULE_5__["SocialService"],
            _delon_abc__WEBPACK_IMPORTED_MODULE_6__["ReuseTabService"],
            _delon_auth__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _core_startup_startup_service__WEBPACK_IMPORTED_MODULE_8__["StartupService"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<result type=\"success\" [title]=\"title\" description=\"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。\">\r\n  <ng-template #title>\r\n    <div class=\"title\">你的账户：ng-alain@example.com 注册成功</div>\r\n  </ng-template>\r\n  <button (click)=\"msg.success('email')\" nz-button nzSize=\"large\" [nzType]=\"'primary'\">查看邮箱</button>\r\n  <button routerLink=\"/\" nz-button nzSize=\"large\">返回首页</button>\r\n</result>\r\n"

/***/ }),

/***/ "./src/app/routes/passport/register-result/register-result.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/routes/passport/register-result/register-result.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserRegisterResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterResultComponent", function() { return UserRegisterResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRegisterResultComponent = /** @class */ (function () {
    function UserRegisterResultComponent(msg) {
        this.msg = msg;
    }
    UserRegisterResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'passport-register-result',
            template: __webpack_require__(/*! ./register-result.component.html */ "./src/app/routes/passport/register-result/register-result.component.html")
        }),
        __metadata("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], UserRegisterResultComponent);
    return UserRegisterResultComponent;
}());



/***/ }),

/***/ "./src/app/routes/passport/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>注册</h3>\r\n<form nz-form [formGroup]=\"form\" (ngSubmit)=\"submit()\" role=\"form\">\r\n  <nz-alert *ngIf=\"error\" [nzType]=\"'error'\" [nzMessage]=\"error\" [nzShowIcon]=\"true\" class=\"mb-lg\"></nz-alert>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-user\">\r\n        <input nz-input formControlName=\"mail\" placeholder=\"邮箱\">\r\n      </nz-input-group>\r\n      <ng-container *ngIf=\"mail.dirty && mail.errors\">\r\n        <nz-form-explain *ngIf=\"mail.errors?.required\">请输入邮箱地址！</nz-form-explain>\r\n        <nz-form-explain *ngIf=\"mail.errors?.email\">邮箱地址格式错误！</nz-form-explain>\r\n      </ng-container>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-popover [nzPlacement]=\"'right'\" [nzTrigger]=\"'focus'\" [(nzVisible)]=\"visible\" nzOverlayClassName=\"register-password-cdk\"\r\n        [nzOverlayStyle]=\"{'width.px': 240}\">\r\n        <nz-input-group nzSize=\"large\" nz-popover nzAddonBeforeIcon=\"anticon anticon-lock\">\r\n          <input nz-input type=\"password\" formControlName=\"password\" placeholder=\"至少6位密码，区分大小写\">\r\n        </nz-input-group>\r\n        <nz-form-explain *ngIf=\"password.dirty && password.errors\">请输入密码！</nz-form-explain>\r\n        <ng-template #nzTemplate>\r\n          <div style=\"padding: 4px 0;\">\r\n            <ng-container [ngSwitch]=\"status\">\r\n              <div *ngSwitchCase=\"'ok'\" class=\"success\">强度：强</div>\r\n              <div *ngSwitchCase=\"'pass'\" class=\"warning\">强度：中</div>\r\n              <div *ngSwitchDefault class=\"error\">强度：太短</div>\r\n            </ng-container>\r\n            <div class=\"progress-{{status}}\">\r\n              <nz-progress [nzPercent]=\"progress\" [nzStatus]=\"passwordProgressMap[status]\" [nzStrokeWidth]=\"6\" [nzShowInfo]=\"false\"></nz-progress>\r\n            </div>\r\n            <p class=\"mt-sm\">请至少输入 6 个字符。请不要使用容易被猜到的密码。</p>\r\n          </div>\r\n        </ng-template>\r\n      </nz-popover>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-lock\">\r\n        <input nz-input type=\"password\" formControlName=\"confirm\" placeholder=\"确认密码\">\r\n      </nz-input-group>\r\n      <ng-container *ngIf=\"confirm.dirty && confirm.errors\">\r\n        <nz-form-explain *ngIf=\"confirm.errors?.required\">请确认密码！</nz-form-explain>\r\n        <nz-form-explain *ngIf=\"confirm.errors?.equar\">两次输入的密码不匹配！</nz-form-explain>\r\n      </ng-container>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-input-group nzSize=\"large\" [nzAddOnBefore]=\"addOnBeforeTemplate\">\r\n        <ng-template #addOnBeforeTemplate>\r\n          <nz-select formControlName=\"mobilePrefix\" style=\"width: 100px;\">\r\n            <nz-option [nzLabel]=\"'+86'\" [nzValue]=\"'+86'\"></nz-option>\r\n            <nz-option [nzLabel]=\"'+87'\" [nzValue]=\"'+87'\"></nz-option>\r\n          </nz-select>\r\n        </ng-template>\r\n        <input formControlName=\"mobile\" nz-input>\r\n      </nz-input-group>\r\n      <nz-form-explain *ngIf=\"mobile.dirty && mobile.errors\">请输入手机号！</nz-form-explain>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-row [nzGutter]=\"8\">\r\n        <nz-col [nzSpan]=\"16\">\r\n          <nz-input-group nzSize=\"large\" nzAddonBeforeIcon=\"anticon anticon-mail\">\r\n            <input nz-input formControlName=\"captcha\" placeholder=\"验证码\">\r\n          </nz-input-group>\r\n          <nz-form-explain *ngIf=\"captcha.dirty && captcha.errors\">请输入验证码！</nz-form-explain>\r\n        </nz-col>\r\n        <nz-col [nzSpan]=\"8\">\r\n          <button nz-button nzSize=\"large\" (click)=\"getCaptcha()\" [disabled]=\"count\" class=\"ant-btn__block\">{{ count ? count + 's' : '获取验证码' }}</button>\r\n        </nz-col>\r\n      </nz-row>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <button nz-button nzType=\"primary\" nzSize=\"large\" type=\"submit\" [nzLoading]=\"loading\" class=\"submit\">\r\n      <span>注册</span>\r\n    </button>\r\n    <a class=\"login\" routerLink=\"/passport/login\">使用已有账户登录</a>\r\n  </nz-form-item>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.less":
/*!******************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n:host {\n  display: block;\n  width: 368px;\n  margin: 0 auto;\n}\n:host ::ng-deep h3 {\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n:host ::ng-deep .submit {\n  width: 50%;\n}\n:host ::ng-deep .login {\n  float: right;\n  line-height: 40px;\n}\n::ng-deep .register-password-cdk .success,\n::ng-deep .register-password-cdk .warning,\n::ng-deep .register-password-cdk .error {\n  transition: color 0.3s;\n}\n::ng-deep .register-password-cdk .success {\n  color: #52c41a;\n}\n::ng-deep .register-password-cdk .warning {\n  color: #faad14;\n}\n::ng-deep .register-password-cdk .error {\n  color: #f5222d;\n}\n::ng-deep .register-password-cdk .progress-pass > .progress .ant-progress-bg {\n  background-color: #faad14;\n}\n"

/***/ }),

/***/ "./src/app/routes/passport/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/routes/passport/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(fb, router, msg) {
        this.router = router;
        this.msg = msg;
        this.error = '';
        this.type = 0;
        this.loading = false;
        this.visible = false;
        this.status = 'pool';
        this.progress = 0;
        this.passwordProgressMap = {
            ok: 'success',
            pass: 'normal',
            pool: 'exception',
        };
        // endregion
        // region: get captcha
        this.count = 0;
        this.form = fb.group({
            mail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    UserRegisterComponent_1.checkPassword.bind(this),
                ],
            ],
            confirm: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    UserRegisterComponent_1.passwordEquar,
                ],
            ],
            mobilePrefix: ['+86'],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^1\d{10}$/)]],
            captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    UserRegisterComponent_1 = UserRegisterComponent;
    UserRegisterComponent.checkPassword = function (control) {
        if (!control)
            return null;
        var self = this;
        self.visible = !!control.value;
        if (control.value && control.value.length > 9)
            self.status = 'ok';
        else if (control.value && control.value.length > 5)
            self.status = 'pass';
        else
            self.status = 'pool';
        if (self.visible)
            self.progress =
                control.value.length * 10 > 100 ? 100 : control.value.length * 10;
    };
    UserRegisterComponent.passwordEquar = function (control) {
        if (!control || !control.parent)
            return null;
        if (control.value !== control.parent.get('password').value) {
            return { equar: true };
        }
        return null;
    };
    Object.defineProperty(UserRegisterComponent.prototype, "mail", {
        // region: fields
        get: function () {
            return this.form.controls.mail;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "password", {
        get: function () {
            return this.form.controls.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "confirm", {
        get: function () {
            return this.form.controls.confirm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "mobile", {
        get: function () {
            return this.form.controls.mobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegisterComponent.prototype, "captcha", {
        get: function () {
            return this.form.controls.captcha;
        },
        enumerable: true,
        configurable: true
    });
    UserRegisterComponent.prototype.getCaptcha = function () {
        var _this = this;
        this.count = 59;
        this.interval$ = setInterval(function () {
            _this.count -= 1;
            if (_this.count <= 0)
                clearInterval(_this.interval$);
        }, 1000);
    };
    // endregion
    UserRegisterComponent.prototype.submit = function () {
        var _this = this;
        this.error = '';
        for (var i in this.form.controls) {
            this.form.controls[i].markAsDirty();
            this.form.controls[i].updateValueAndValidity();
        }
        if (this.form.invalid)
            return;
        // mock http
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.router.navigate(['/passport/register-result']);
        }, 1000);
    };
    UserRegisterComponent.prototype.ngOnDestroy = function () {
        if (this.interval$)
            clearInterval(this.interval$);
    };
    UserRegisterComponent = UserRegisterComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'passport-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/routes/passport/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.less */ "./src/app/routes/passport/register/register.component.less")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
    var UserRegisterComponent_1;
}());



/***/ }),

/***/ "./src/app/routes/routes-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RouteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteRoutingModule", function() { return RouteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _layout_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/passport/passport.component */ "./src/app/layout/passport/passport.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/routes/dashboard/dashboard.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/routes/callback/callback.component.ts");
/* harmony import */ var _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./passport/lock/lock.component */ "./src/app/routes/passport/lock/lock.component.ts");
/* harmony import */ var _exception_403_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exception/403.component */ "./src/app/routes/exception/403.component.ts");
/* harmony import */ var _exception_404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exception/404.component */ "./src/app/routes/exception/404.component.ts");
/* harmony import */ var _exception_500_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./exception/500.component */ "./src/app/routes/exception/500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// layout


// dashboard pages

// passport pages



// single pages





var routes = [
    {
        path: '',
        component: _layout_default_default_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDefaultComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], data: { title: '仪表盘', titleI18n: 'dashboard' } },
            // 业务子模块
            { path: 'user', loadChildren: './user/user.module#UserModule' }
            // { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' }
        ]
    },
    // 全屏布局
    // {
    //     path: 'fullscreen',
    //     component: LayoutFullScreenComponent,
    //     children: [
    //     ]
    // },
    // passport
    {
        path: 'passport',
        component: _layout_passport_passport_component__WEBPACK_IMPORTED_MODULE_4__["LayoutPassportComponent"],
        children: [
            { path: 'login', component: _passport_login_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"], data: { title: '登录', titleI18n: 'pro-login' } },
            { path: 'register', component: _passport_register_register_component__WEBPACK_IMPORTED_MODULE_7__["UserRegisterComponent"], data: { title: '注册', titleI18n: 'pro-register' } },
            { path: 'register-result', component: _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_8__["UserRegisterResultComponent"], data: { title: '注册结果', titleI18n: 'pro-register-result' } }
        ]
    },
    // 单页不包裹Layout
    { path: 'callback/:type', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_9__["CallbackComponent"] },
    { path: 'lock', component: _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_10__["UserLockComponent"], data: { title: '锁屏', titleI18n: 'lock' } },
    { path: '403', component: _exception_403_component__WEBPACK_IMPORTED_MODULE_11__["Exception403Component"] },
    { path: '404', component: _exception_404_component__WEBPACK_IMPORTED_MODULE_12__["Exception404Component"] },
    { path: '500', component: _exception_500_component__WEBPACK_IMPORTED_MODULE_13__["Exception500Component"] },
    { path: '**', redirectTo: 'dashboard' }
];
var RouteRoutingModule = /** @class */ (function () {
    function RouteRoutingModule() {
    }
    RouteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].useHash })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RouteRoutingModule);
    return RouteRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes-routing.module */ "./src/app/routes/routes-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/routes/dashboard/dashboard.component.ts");
/* harmony import */ var _passport_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passport/login/login.component */ "./src/app/routes/passport/login/login.component.ts");
/* harmony import */ var _passport_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passport/register/register.component */ "./src/app/routes/passport/register/register.component.ts");
/* harmony import */ var _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./passport/register-result/register-result.component */ "./src/app/routes/passport/register-result/register-result.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/routes/callback/callback.component.ts");
/* harmony import */ var _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passport/lock/lock.component */ "./src/app/routes/passport/lock/lock.component.ts");
/* harmony import */ var _exception_403_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exception/403.component */ "./src/app/routes/exception/403.component.ts");
/* harmony import */ var _exception_404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exception/404.component */ "./src/app/routes/exception/404.component.ts");
/* harmony import */ var _exception_500_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exception/500.component */ "./src/app/routes/exception/500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// dashboard pages

// passport pages



// single pages





var COMPONENTS = [
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    // passport pages
    _passport_login_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"],
    _passport_register_register_component__WEBPACK_IMPORTED_MODULE_5__["UserRegisterComponent"],
    _passport_register_result_register_result_component__WEBPACK_IMPORTED_MODULE_6__["UserRegisterResultComponent"],
    // single pages
    _callback_callback_component__WEBPACK_IMPORTED_MODULE_7__["CallbackComponent"],
    _passport_lock_lock_component__WEBPACK_IMPORTED_MODULE_8__["UserLockComponent"],
    _exception_403_component__WEBPACK_IMPORTED_MODULE_9__["Exception403Component"],
    _exception_404_component__WEBPACK_IMPORTED_MODULE_10__["Exception404Component"],
    _exception_500_component__WEBPACK_IMPORTED_MODULE_11__["Exception500Component"]
];
var COMPONENTS_NOROUNT = [];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _routes_routing_module__WEBPACK_IMPORTED_MODULE_2__["RouteRoutingModule"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/app/shared/json-schema/json-schema.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/json-schema/json-schema.module.ts ***!
  \**********************************************************/
/*! exports provided: SCHEMA_THIRDS_COMPONENTS, JsonSchemaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEMA_THIRDS_COMPONENTS", function() { return SCHEMA_THIRDS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaModule", function() { return JsonSchemaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/esm5/form.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
// import { UEditorWidget } from './widgets/ueditor/ueditor.widget';
var SCHEMA_THIRDS_COMPONENTS = [];
var JsonSchemaModule = /** @class */ (function () {
    function JsonSchemaModule(widgetRegistry) {
        // widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
        // widgetRegistry.register(UEditorWidget.KEY, UEditorWidget);
    }
    JsonSchemaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: SCHEMA_THIRDS_COMPONENTS,
            entryComponents: SCHEMA_THIRDS_COMPONENTS,
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_2__["DelonFormModule"].forRoot()
            ],
            exports: SCHEMA_THIRDS_COMPONENTS.slice()
        }),
        __metadata("design:paramtypes", [_delon_form__WEBPACK_IMPORTED_MODULE_2__["WidgetRegistry"]])
    ], JsonSchemaModule);
    return JsonSchemaModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/esm5/abc.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/esm5/acl.js");
/* harmony import */ var _delon_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @delon/form */ "./node_modules/@delon/form/esm5/form.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/esm5/antd.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/esm5/countdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// delon




// region: third libs


var THIRDMODULES = [
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
    ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"]
];
// endregion
// region: your componets & directives
var COMPONENTS = [];
var DIRECTIVES = [];
// endregion
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_4__["AlainThemeModule"].forChild(),
                _delon_abc__WEBPACK_IMPORTED_MODULE_5__["DelonABCModule"],
                _delon_acl__WEBPACK_IMPORTED_MODULE_6__["DelonACLModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_7__["DelonFormModule"]
            ].concat(THIRDMODULES),
            declarations: COMPONENTS.concat(DIRECTIVES),
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _delon_theme__WEBPACK_IMPORTED_MODULE_4__["AlainThemeModule"],
                _delon_abc__WEBPACK_IMPORTED_MODULE_5__["DelonABCModule"],
                _delon_acl__WEBPACK_IMPORTED_MODULE_6__["DelonACLModule"],
                _delon_form__WEBPACK_IMPORTED_MODULE_7__["DelonFormModule"]
            ].concat(THIRDMODULES, COMPONENTS, DIRECTIVES)
        })
    ], SharedModule);
    return SharedModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    SERVER_URL: "./",
    production: false,
    useHash: true,
    imageHost: 'http://angular.songyaofeng.com'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/esm5/theme.js");





Object(_delon_theme__WEBPACK_IMPORTED_MODULE_4__["preloaderFinished"])();
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () {
    return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
        preserveWhitespaces: false,
    });
};
bootstrap().then(function () {
    if (window.appBootstrap) {
        window.appBootstrap();
    }
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\www\angular-admin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map