webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.logOut = function () {
        this.navCtrl.popToRoot();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>K.U.R.E.I.L.</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="logOut()" style="color: black;">Log Out</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  Welcome to K.U.R.E.U.I.L. application !\n</ion-content>\n'/*ion-inline-end:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgotten-password/forgotten-password.module": [
		279,
		3
	],
	"../pages/home/home.module": [
		278,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_services__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenfication_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_password_services__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgotten_password_forgotten_password__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConnectionPage = /** @class */ (function () {
    function ConnectionPage(authenService, registerService, passwordService, alertCtl, navCtrl, toastCtl) {
        this.authenService = authenService;
        this.registerService = registerService;
        this.passwordService = passwordService;
        this.alertCtl = alertCtl;
        this.navCtrl = navCtrl;
        this.toastCtl = toastCtl;
    }
    ConnectionPage.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    ConnectionPage.prototype.login = function () {
        var _this = this;
        this.authenService.login(this.loginForm.value.email, this.loginForm.value.userPassword).subscribe(function (text) {
            //console.log("OK");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, function (error) {
            console.log(error);
        });
        this.email = "";
        this.password = "";
    };
    ConnectionPage.prototype.registerUser = function () {
        var _this = this;
        var alert = this.alertCtl.create({
            title: 'Registration',
            inputs: [
                {
                    name: 'Name',
                    placeholder: 'Your name',
                    type: 'text'
                },
                {
                    name: 'Email',
                    placeholder: 'Your email',
                    type: 'text'
                },
                {
                    name: 'Password',
                    placeholder: 'Your password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Register',
                    handler: function (data) {
                        if (data.Name != null && data.Email != null && data.Password != null) {
                            console.log("register");
                            _this.registerService.register(data.Name, data.Email, data.Password).subscribe(function () {
                                console.log("Success");
                            }, function () {
                                console.log("error");
                            });
                        }
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        alert.present();
    };
    ConnectionPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgotten_password_forgotten_password__["a" /* ForgottenPasswordPage */]);
        // const alert = this.alertCtl.create({
        //     title: 'Forgotten password',
        //     inputs: [
        //         {
        //             name: 'email',
        //             placeholder: 'abc@yahoo.fr',
        //             type: 'text',
        //             label: 'Email'
        //         }
        //     ],
        //     buttons: [
        //         {
        //             text: 'Reclaim',
        //             handler: (data) =>{
        //                 if(data.email != null) {
        //                     this.passwordService.forgotPassword(data.email).subscribe(() => {
        //
        //                     } , (error) => {
        //                         console.log(error);
        //                     });
        //                 }
        //             }
        //         },
        //         {
        //             text: 'Cancel',
        //             role: 'cancel'
        //         }
        //     ]
        // });
        // alert.present();
    };
    ConnectionPage.prototype.initializeForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'userPassword': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required)
        });
    };
    ConnectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connection',template:/*ion-inline-start:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/Connection/Connection.html"*/'<ion-header>\n  <ion-toolbar>\n      <ion-title text-center>K.U.R.E.U.I.L.</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row style="padding-top: 10%">\n    <ion-col text-center>\n      <h2 style="color: #4286f4">Connection</h2>\n    </ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form [formGroup]="loginForm" (ngSubmit)="login()">\n        <ion-label color="primary">Email</ion-label>\n        <ion-item>\n          <ion-input type="text" [ngModel]="email" formControlName="email" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-label color="primary" >Password</ion-label>\n        <ion-item>\n          <ion-input type="password" [ngModel]="password" formControlName="userPassword" placeholder="********"></ion-input>\n        </ion-item>\n      <button ion-button type="submit" round outline style="margin-left: 100px;">Login</button>\n    </form>\n    <ion-row>\n        <ion-col>\n            <button class="registerForgotbtn" ion-button clear (click)="registerUser()">Register</button>\n        </ion-col>\n        <ion-col>\n            <button class="registerForgotbtn" ion-button clear (click)="forgotPassword()">I forgot my password</button>\n        </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/Connection/Connection.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authenfication_services__["a" /* AuthenficationServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authenfication_services__["a" /* AuthenficationServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_services__["a" /* RegisterServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_register_services__["a" /* RegisterServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_password_services__["a" /* PasswordServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_password_services__["a" /* PasswordServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ToastController */]) === "function" && _f || Object])
    ], ConnectionPage);
    return ConnectionPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=Connection.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterServices = /** @class */ (function () {
    function RegisterServices(http) {
        this.http = http;
    }
    RegisterServices.prototype.register = function (name, email, password) {
        var data = { name: name, email: email, password: password };
        return this.http.post('http://localhost:8080' + '/user/register', data);
    };
    RegisterServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RegisterServices);
    return RegisterServices;
}());

//# sourceMappingURL=register.services.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenficationServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenficationServices = /** @class */ (function () {
    function AuthenficationServices(http) {
        this.http = http;
    }
    /**
     * Login with the email and password
     */
    AuthenficationServices.prototype.login = function (email, password) {
        var data = { email: email, password: password };
        return this.http.post('http://localhost:8080' + '/user/login', data, { responseType: 'text' });
    };
    AuthenficationServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenficationServices);
    return AuthenficationServices;
}());

//# sourceMappingURL=authenfication.services.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordServices = /** @class */ (function () {
    function PasswordServices(http) {
        this.http = http;
    }
    /**
     * Reset password with the email
     */
    PasswordServices.prototype.forgotPassword = function (email) {
        return this.http.post('http://localhost:8080' + '/account/reset-password/init', email);
    };
    PasswordServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PasswordServices);
    return PasswordServices;
}());

//# sourceMappingURL=password.services.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Connection_Connection__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authenfication_services__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_password_services__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_register_services__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgotten_password_forgotten_password__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_Connection_Connection__["a" /* ConnectionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgotten_password_forgotten_password__["a" /* ForgottenPasswordPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotten-password/forgotten-password.module#ForgottenPasswordPageModule', name: 'ForgottenPasswordPage', segment: 'forgotten-password', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_Connection_Connection__["a" /* ConnectionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgotten_password_forgotten_password__["a" /* ForgottenPasswordPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__services_authenfication_services__["a" /* AuthenficationServices */],
                __WEBPACK_IMPORTED_MODULE_9__services_password_services__["a" /* PasswordServices */],
                __WEBPACK_IMPORTED_MODULE_10__services_register_services__["a" /* RegisterServices */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Connection_Connection__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Connection_Connection__["a" /* ConnectionPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottenPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_password_services__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgottenPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgottenPasswordPage = /** @class */ (function () {
    function ForgottenPasswordPage(navCtrl, passwordService, toastCtl) {
        this.navCtrl = navCtrl;
        this.passwordService = passwordService;
        this.toastCtl = toastCtl;
    }
    ForgottenPasswordPage.prototype.cancelReset = function () {
        this.navCtrl.pop();
    };
    ForgottenPasswordPage.prototype.resetPassword = function (form) {
        var _this = this;
        if (form.value.email != null) {
            this.passwordService.forgotPassword(form.value.email).subscribe(function () {
                var succes = _this.toastCtl.create({
                    message: 'Password is reset',
                    duration: 3000,
                    position: 'top'
                });
            }, function (error) {
                var succes = _this.toastCtl.create({
                    message: error,
                    duration: 3000,
                    position: 'top'
                });
            });
        }
    };
    ForgottenPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotten-password',template:/*ion-inline-start:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/forgotten-password/forgotten-password.html"*/'<!--\n  Generated template for the ForgottenPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title text-center>K.U.R.E.U.I.L.</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="resetPassword(f)" class="reset" style="margin-top: 60px;">\n      <h3>Login</h3>\n      <ion-label>Type your e-mail</ion-label>\n      <input type="email" required name="email" [ngModel]="resetEmail" col-md-3>\n      <ion-row>\n          <input type="submit" ion-button [disabled]="!f.valid" color="primary" value="Claim new password">\n          <button ion-button clear (click)="cancelReset()">Cancel</button>\n      </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/forgotten-password/forgotten-password.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_password_services__["a" /* PasswordServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_password_services__["a" /* PasswordServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _c || Object])
    ], ForgottenPasswordPage);
    return ForgottenPasswordPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=forgotten-password.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map