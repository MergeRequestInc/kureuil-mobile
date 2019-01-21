webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_chanel_edit_chanel__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chanel_services__ = __webpack_require__(78);
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
    function HomePage(navCtrl, chanelServices, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.chanelServices = chanelServices;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.logOut = function () {
        this.navCtrl.popToRoot();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.close();
        this.chanels = this.chanelServices.getChanel();
    };
    HomePage.prototype.onCreateCanal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_chanel_edit_chanel__["a" /* EditChanelPage */], { mode: 'New' });
    };
    HomePage.prototype.openMenu = function () {
        console.log(this.chanels.length);
        this.menuCtrl.open();
    };
    HomePage.prototype.onLoadChanel = function (chanel, index) {
        this.menuCtrl.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_chanel_edit_chanel__["a" /* EditChanelPage */], { chanel: chanel, index: index, mode: 'Edit' });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton #mynav>\n    <ion-title text-center>K.U.R.E.I.L.</ion-title>\n      <ion-buttons start>\n          <button ion-button (click)="openMenu()"><ion-icon name="menu"></ion-icon></button>\n      </ion-buttons>\n    <ion-buttons end>\n        <button ion-button (click)="onCreateCanal()"><ion-icon name="add"></ion-icon></button>\n      <!--<button ion-button (click)="logOut()" style="color: black;">Log Out</button>-->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu id="menu" [content]="mynav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title text-center>Chanels</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list *ngFor="let chanel of chanels; let i = index;">\n            <button ion-button clear block (click)="onLoadChanel(chanel, i)">{{chanel.chanelName}}</button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-content padding>\n    <h3>Welcome to K.U.R.E.U.I.L. application !</h3>\n    <ion-list *ngFor="let chanel of chanels">\n        <ion-card>\n            <ion-card-header>\n                {{chanel.chanelName}}\n            </ion-card-header>\n            <ion-card-content>\n                {{chanel.query}}\n            </ion-card-content>\n        </ion-card>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_chanel_services__["a" /* ChanelServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditChanelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chanel_services__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_chanel__ = __webpack_require__(255);
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
 * Generated class for the EditChanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditChanelPage = /** @class */ (function () {
    function EditChanelPage(navCtrl, navParams, chanelService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chanelService = chanelService;
        this.chanelDelete = null;
    }
    EditChanelPage.prototype.ionViewWillEnter = function () {
        this.mode = this.navParams.get('mode');
        if (this.mode == 'Edit') {
            this.chanelDelete = this.navParams.get('chanel');
            this.chanelName = this.chanelDelete.chanelName;
            this.query = this.chanelDelete.query;
            this.index = this.navParams.get('index');
        }
    };
    EditChanelPage.prototype.onAddChanel = function (form) {
        var data = new __WEBPACK_IMPORTED_MODULE_3__model_chanel__["a" /* Chanel */](form.value.chanelName, form.value.query);
        console.log(data);
        if (this.mode == 'New') {
            this.chanelService.addChanel(data);
            // this.chanelService.addChanel(data).subscribe(() => {
            //     console.log('successfully created chanel');
            //
            // }, (err)=> {
            //     console.log(err);
            // });
        }
        else {
            this.chanelService.editChanel(data, this.index);
            // this.chanelService.editChanel(data).subscribe(() => {
            //     console.log('successfully updated chanel');
            //
            // }, (err)=> {
            //     console.log(err);
            // });
        }
        this.navCtrl.pop();
    };
    EditChanelPage.prototype.deleteChanel = function () {
        if (this.chanelDelete != null) {
            // this.chanelService.deleteChanel(this.navParams.get('chanel')).subscribe(() => {
            //     console.log('Delete ok');
            // }, (error) => {
            //     console.log(error);
            // });
            this.chanelService.deleteChanel(this.chanelDelete, this.index);
        }
    };
    EditChanelPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    EditChanelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-chanel',template:/*ion-inline-start:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/edit-chanel/edit-chanel.html"*/'<!--\n  Generated template for the EditChanelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title text-center>K.U.R.E.U.I.L.</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="back()">Back</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>{{mode}} chanel</h3>\n\n  <form #f="ngForm" (ngSubmit)="onAddChanel(f)">\n    <ion-label>Chanel\'s Name</ion-label>\n    <ion-input [ngModel]="chanelName" type="text" name="chanelName" required></ion-input>\n    <ion-label>Query</ion-label>\n    <ion-textarea type="text" [ngModel]="query" name="query" required></ion-textarea>\n    <button text-center type="submit" ion-button color="primary" [disabled]="!f.valid">{{mode}}</button>\n    <button ion-button color="danger" [disabled]="!(mode == \'Edit\')" (click)="deleteChanel()">Delete</button>\n\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/edit-chanel/edit-chanel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_chanel_services__["a" /* ChanelServices */]])
    ], EditChanelPage);
    return EditChanelPage;
}());

//# sourceMappingURL=edit-chanel.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-chanel/edit-chanel.module": [
		282,
		1
	],
	"../pages/home/home.module": [
		281,
		0
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_services__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authenfication_services__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_password_services__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(101);
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
    function ConnectionPage(authenService, registerService, passwordService, alertCtl, navCtrl) {
        this.authenService = authenService;
        this.registerService = registerService;
        this.passwordService = passwordService;
        this.alertCtl = alertCtl;
        this.navCtrl = navCtrl;
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
        var _this = this;
        var alert = this.alertCtl.create({
            title: 'Forgotten password',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'abc@yahoo.fr',
                    type: 'text',
                    label: 'Email'
                }
            ],
            buttons: [
                {
                    text: 'Reclaim',
                    handler: function (data) {
                        if (data.email != null) {
                            _this.passwordService.forgotPassword(data.email);
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
            selector: 'page-connection',template:/*ion-inline-start:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/Connection/Connection.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title text-center>K.U.R.E.U.I.L.</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row style="padding-top: 10%">\n    <ion-col text-center>\n      <h2>Connection</h2>\n    </ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form [formGroup]="loginForm" (ngSubmit)="login()">\n        <ion-label>Email</ion-label>\n        <ion-item>\n          <ion-input type="text" [ngModel]="email" formControlName="email" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-label >Password</ion-label>\n        <ion-item>\n          <ion-input type="password" [ngModel]="password" formControlName="userPassword" placeholder="********"></ion-input>\n        </ion-item>\n      <button ion-button type="submit" round outline style="margin-left: 100px;">Login</button>\n    </form>\n    <ion-row>\n        <button ion-button style="border-radius: 10%;" outline block (click)="registerUser()">Register</button>\n        <!--<button ion-button style="border-radius: 10%;" block outline (click)="forgotPassword()">I forgot my password</button>-->\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/pages/Connection/Connection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authenfication_services__["a" /* AuthenficationServices */],
            __WEBPACK_IMPORTED_MODULE_1__services_register_services__["a" /* RegisterServices */], __WEBPACK_IMPORTED_MODULE_3__services_password_services__["a" /* PasswordServices */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */]])
    ], ConnectionPage);
    return ConnectionPage;
}());

//# sourceMappingURL=Connection.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenficationServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Connection_Connection__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authenfication_services__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_password_services__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_register_services__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_chanel_edit_chanel__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_chanel_services__ = __webpack_require__(78);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_chanel_edit_chanel__["a" /* EditChanelPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-chanel/edit-chanel.module#EditChanelPageModule', name: 'EditChanelPage', segment: 'edit-chanel', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_chanel_edit_chanel__["a" /* EditChanelPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__services_authenfication_services__["a" /* AuthenficationServices */],
                __WEBPACK_IMPORTED_MODULE_9__services_password_services__["a" /* PasswordServices */],
                __WEBPACK_IMPORTED_MODULE_10__services_register_services__["a" /* RegisterServices */],
                __WEBPACK_IMPORTED_MODULE_14__services_chanel_services__["a" /* ChanelServices */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chanel; });
var Chanel = /** @class */ (function () {
    function Chanel(chanelName, query) {
        this.chanelName = chanelName;
        this.query = query;
    }
    return Chanel;
}());

//# sourceMappingURL=chanel.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Connection_Connection__ = __webpack_require__(200);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mynav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/uydu/Desktop/Study/Epitech/Projet Fin d'etudes/kureuil-mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChanelServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
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


var ChanelServices = /** @class */ (function () {
    function ChanelServices(http) {
        this.http = http;
        this.chanels = [{
                chanelName: 'Chanel 1',
                query: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
            {
                chanelName: 'Chanel 2',
                query: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
            }
        ];
    }
    /*
    Create new chanel
    */
    ChanelServices.prototype.addChanel = function (chanel) {
        this.chanels.push(chanel);
        //return this.http.post('http://localhost:8080' + 'chanel-service/addChanel', chanel);
    };
    /*
    Edit existing chanel
     */
    ChanelServices.prototype.editChanel = function (chanel, index) {
        this.chanels[index] = chanel;
        //return this.http.post('http://localhost:8080' + 'chanel-service/editChanel', chanel);
    };
    /*
    Delete chanel
     */
    ChanelServices.prototype.deleteChanel = function (chanel, index) {
        //return this.http.post('http://localhost:8080' + 'chanel-service/delete-Chanel', chanel);
        this.chanels.splice(index, 1);
    };
    /*
    Get Chanel
     */
    ChanelServices.prototype.getChanel = function () {
        return this.chanels.slice();
    };
    ChanelServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChanelServices);
    return ChanelServices;
}());

//# sourceMappingURL=chanel.services.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map