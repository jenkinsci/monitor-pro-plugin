webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".job {\r\n  margin: 10px 10px 10px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header><h1>\r\n  {{title}}\r\n</h1>\r\n</header>\r\n<jobsBasicView [urlJenkins]=\"urlJenkins\"></jobsBasicView>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(elm) {
        this.title = 'Monitor Pro v1.0';
        this.urlJenkins = 'http://localhost:8080/jenkins'; // by default
        this.urlJenkins = elm.nativeElement.getAttribute('urlJenkins');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobs_basic_view_jobsBasicView_component__ = __webpack_require__("../../../../../src/app/jobs-basic-view/jobsBasicView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__commons_jenkinsService_service__ = __webpack_require__("../../../../../src/app/commons/jenkinsService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_job_component__ = __webpack_require__("../../../../../src/app/job/job.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jobs_basic_view_menu_config_jobsBasicViewMenuConfig_component__ = __webpack_require__("../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__commons_configService__ = __webpack_require__("../../../../../src/app/commons/configService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__commons_configServiceFactory__ = __webpack_require__("../../../../../src/app/commons/configServiceFactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__commons_configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__jobs_basic_view_jobsBasicView_component__["a" /* JobsBasicViewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__job_job_component__["a" /* JobComponent */],
            __WEBPACK_IMPORTED_MODULE_8__jobs_basic_view_menu_config_jobsBasicViewMenuConfig_component__["a" /* JobsBasicViewMenConfComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__commons_configService__["a" /* ConfigService */], {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* APP_INITIALIZER */], useFactory: __WEBPACK_IMPORTED_MODULE_10__commons_configServiceFactory__["a" /* configServiceFactory */],
                deps: [__WEBPACK_IMPORTED_MODULE_9__commons_configService__["a" /* ConfigService */]], multi: true
            },
            __WEBPACK_IMPORTED_MODULE_6__commons_jenkinsService_service__["a" /* JenkinsService */],
            __WEBPACK_IMPORTED_MODULE_11__commons_configPropService__["a" /* ConfigPropService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/commons/configPropService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/**
 * Created by mmariscalg on 27/02/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfigPropService = (function () {
    function ConfigPropService() {
    }
    ConfigPropService.prototype.getHideOK = function () {
        return this.hideOK;
    };
    ConfigPropService.prototype.setHideOK = function (hideOK) {
        this.hideOK = hideOK;
    };
    ConfigPropService.prototype.getBranches = function () {
        return this.branches;
    };
    ConfigPropService.prototype.setBranches = function (branches) {
        this.branches = branches;
    };
    ConfigPropService.prototype.getEmail = function () {
        return this.email;
    };
    ConfigPropService.prototype.setEmail = function (email) {
        this.email = email;
    };
    return ConfigPropService;
}());
ConfigPropService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ConfigPropService);

//# sourceMappingURL=configPropService.js.map

/***/ }),

/***/ "../../../../../src/app/commons/configService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
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
 * Created by frdiaz on 07/01/2017.
 * Modified by mmariscalg 27/06/2018
 */
var ConfigService = (function () {
    function ConfigService(http) {
        this.http = http;
    }
    /**
     * Load security configuration data from file
     * @returns {Promise<T>}
     */
    ConfigService.prototype.load = function () {
        var _this = this;
        console.log(window.location.toString());
        var rootUrl = window.location.pathname;
        return new Promise(function (resolve, reject) {
            _this.http.get('./assets/securityConfig.json')
                .map(function (res) { return res.json(); })
                .catch(function (error) {
                console.log('Deployed as plugin.');
                _this._configModel = { 'user': '', 'pass': '',
                    'jenkinsUrl': 'http://localhost:8080/jenkins/', 'jenkinsPlugin': true, 'emailList': '' };
                resolve();
            })
                .subscribe(function (data) {
                // Application run as standalone app
                _this.fillConfigModel(data);
                resolve();
            });
        });
    };
    ConfigService.prototype.fillConfigModel = function (newConfig) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(newConfig)) {
            this._configModel = newConfig;
        }
        return this._configModel;
    };
    ConfigService.prototype.getUser = function () {
        return this._configModel.user;
    };
    ConfigService.prototype.getPass = function () {
        return this._configModel.pass;
    };
    ConfigService.prototype.getJenkinsUrl = function () {
        return this._configModel.jenkinsUrl;
    };
    Object.defineProperty(ConfigService.prototype, "configModel", {
        get: function () {
            return this._configModel;
        },
        set: function (value) {
            this._configModel = value;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.getEmailList = function () {
        return this._configModel.emailList;
    };
    ConfigService.prototype.setEmailList = function (emails) {
        this._configModel.emailList = emails;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigService);

var _a;
//# sourceMappingURL=configService.js.map

/***/ }),

/***/ "../../../../../src/app/commons/configServiceFactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configServiceFactory;
/**
 * Created by frdiaz on 10/02/2017.
 */
function configServiceFactory(configurationService) {
    return function () { return configurationService.load(); };
}
//# sourceMappingURL=configServiceFactory.js.map

/***/ }),

/***/ "../../../../../src/app/commons/jenkinsService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JenkinsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configService__ = __webpack_require__("../../../../../src/app/commons/configService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_jobsGroup_model__ = __webpack_require__("../../../../../src/app/job/jobsGroup.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__ = __webpack_require__("../../../../../src/app/job/simpleJob.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
/**
 * Created by frdiaz on 02/12/2016.
 * Modified by mmariscalg on 22/06/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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








var JenkinsService = JenkinsService_1 = (function () {
    function JenkinsService(http, configService, configPropService) {
        this.http = http;
        this.configService = configService;
        this.configPropService = configPropService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        this.jobsGroupsFinded = {};
        this.jobsGroupsNamesList = [];
        this.jobsGroupsParam = {};
        this.groups = [];
        this.controlBranch = new Map();
    }
    /**
     * Configures headers to invoke the server
     * @param authentication
     */
    JenkinsService.prototype.configHeaders = function (authentication) {
        if (authentication) {
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
            this.headers.append('Authorization', 'Basic ' + btoa(this.configService.getUser() + ':' + this.configService.getPass()));
        }
        this.headers.append('Content-Type', 'application/json');
        this.resquestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: this.headers,
        });
    };
    /**
     * Retrieves the exists views in Jenkins
     * @param urlJenkins
     * @returns {Observable<R>}
     */
    JenkinsService.prototype.getViews = function (urlJenkins) {
        var invokeUrl = (urlJenkins !== null && urlJenkins !== undefined && urlJenkins === this.configService.getJenkinsUrl()) ?
            urlJenkins : this.configService.getJenkinsUrl();
        invokeUrl = invokeUrl + JenkinsService_1.endViewsUrl;
        console.log('Path:' + window.location.href);
        this.configHeaders((urlJenkins === null || urlJenkins === undefined || !window.location.href.includes(urlJenkins)));
        return this.http.post(invokeUrl, undefined, this.resquestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    JenkinsService.prototype.reset = function () {
        this.jobsGroupsFinded = {};
        this.jobsGroupsNamesList = [];
        this.groups = [];
        this.jobsGroupsParam = {};
    };
    /**
     * Starts retrieving and formatting process of the Jobs State Data.
     * @param urlFolderOfJobs
     * @returns {Observable<R>}
     */
    JenkinsService.prototype.getJobsStatus = function (urlFolderOfJobs) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (urlFolderOfJobs === undefined) {
                            this.invokedUrl = this.configService.getJenkinsUrl() + JenkinsService_1.endJobsDataUrl;
                        }
                        else {
                            this.invokedUrl = urlFolderOfJobs + JenkinsService_1.endJobsDataUrl;
                        }
                        return [4 /*yield*/, this.http.get(this.invokedUrl, this.resquestOptions)
                                .map(function (response) {
                                return _this.createJobData(response.json().jobs);
                            })
                                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); })
                                .toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Converts backend Jobs Objects in to frontend Jobs Objects
     * @param jobs
     */
    JenkinsService.prototype.createJobData = function (jobs) {
        return __awaiter(this, void 0, void 0, function () {
            var jobModelAux, _i, jobs_1, job, _a, _b, group_1, _c, _d, job, jobModel, principalJobModel, _e, _f, job, jobModel;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        jobModelAux = [];
                        _i = 0, jobs_1 = jobs;
                        _g.label = 1;
                    case 1:
                        if (!(_i < jobs_1.length)) return [3 /*break*/, 5];
                        job = jobs_1[_i];
                        if (!(job !== null)) return [3 /*break*/, 4];
                        if (!(job.buildable === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getJobsStatus(job.url)];
                    case 2:
                        _g.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        if (job.lastBuild !== null) {
                            this.addJobToAGroup(job);
                        }
                        _g.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        for (_a = 0, _b = this.jobsGroupsNamesList; _a < _b.length; _a++) {
                            group_1 = _b[_a];
                            if (group_1 === 'reminder' || this.jobsGroupsFinded[group_1].length === 0) {
                                for (_c = 0, _d = this.jobsGroupsFinded[group_1]; _c < _d.length; _c++) {
                                    job = _d[_c];
                                    jobModel = new __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__["a" /* SimpleJob */](job);
                                    jobModel.setStatusClass();
                                    jobModelAux.push((jobModel));
                                }
                            }
                            else {
                                principalJobModel = new __WEBPACK_IMPORTED_MODULE_4__job_jobsGroup_model__["a" /* JobsGroup */]();
                                principalJobModel.name = group_1;
                                for (_e = 0, _f = this.jobsGroupsFinded[group_1]; _e < _f.length; _e++) {
                                    job = _f[_e];
                                    jobModel = new __WEBPACK_IMPORTED_MODULE_5__job_simpleJob_model__["a" /* SimpleJob */](job);
                                    jobModel.setStatusClass();
                                    if (this.controlBranch.get(jobModel.name) !== undefined) {
                                        jobModel.master = this.controlBranch.get(jobModel.name);
                                        if (this.configPropService.getBranches() && jobModel.master !== '') {
                                            jobModel.result = 'SUCCESS_';
                                        }
                                    }
                                    if (jobModel.result !== 'SUCCESS') {
                                        if (this.jobsGroupsParam[jobModel.name] !== undefined) {
                                            jobModel.param = this.jobsGroupsParam[jobModel.name];
                                        }
                                        principalJobModel.result = jobModel.result;
                                        console.log('GROUP JOB Result: ' + principalJobModel.name + ' - ' + principalJobModel.result);
                                    }
                                    principalJobModel.jobsList.push(jobModel);
                                }
                                principalJobModel.setStatusClass();
                                jobModelAux.push((principalJobModel));
                            }
                        }
                        return [2 /*return*/, jobModelAux];
                }
            });
        });
    };
    /**
     * Adds the job to the correct group, according to a job's parameter.
     * @param job
     */
    JenkinsService.prototype.addJobToAGroup = function (job) {
        var _this = this;
        this.checkBranch(job.url).subscribe(function (res) {
            var control = '';
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var actionBranch = res_1[_i];
                if (actionBranch._class === 'hudson.plugins.git.util.BuildData') {
                    if (actionBranch.lastBuiltRevision.branch[0].name.search(new RegExp('ORIGIN\/MASTER', 'i')) === -1) {
                        control = actionBranch.lastBuiltRevision.branch[0].name;
                    }
                }
            }
            _this.controlBranch.set(job.name, control);
        }, function (error) { return console.log(error); });
        for (var _i = 0, _a = job.lastBuild.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            if (action._class === undefined || action._class === 'hudson.model.ParametersAction') {
                if (action.parameters !== undefined) {
                    var aux = [];
                    var auxParams = [];
                    for (var i = 0; i < action.parameters.length; i++) {
                        aux[i] = action.parameters[i].name;
                        auxParams[i] = action.parameters[i].value;
                    }
                    aux.sort();
                    var auxName = this.createPrintableGroup(aux);
                    var newGroup = { params: aux, id: auxName };
                    if (this.groups.length === 0) {
                        this.groups.push(newGroup);
                    }
                    else {
                        var found = false;
                        for (var i = 0; i < this.groups.length; i++) {
                            if (this.groups[i].params.length === action.parameters.length && this.groups[i].id === auxName) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            this.groups.push(newGroup);
                        }
                        if (this.jobsGroupsFinded[auxName] !== undefined) {
                            this.jobsGroupsFinded[auxName].push(job);
                        }
                        else {
                            this.jobsGroupsNamesList.push(auxName);
                            this.jobsGroupsFinded[auxName] = [job];
                        }
                        var auxParamsValues = this.createPrintableParams(auxParams);
                        if (this.jobsGroupsParam[job.name] === undefined) {
                            this.jobsGroupsParam[job.name] = auxParamsValues;
                        }
                    }
                }
                else {
                    if (this.jobsGroupsFinded['reminder'] !== undefined) {
                        this.jobsGroupsFinded['reminder'].push(job);
                    }
                    else {
                        this.jobsGroupsNamesList.push('reminder');
                        this.jobsGroupsFinded['reminder'] = [job];
                    }
                }
                break;
            }
        }
    };
    JenkinsService.prototype.checkBranch = function (job) {
        var jobUrl = job + 'lastBuild/api/json?tree=actions[lastBuiltRevision[branch[name]]]';
        return this.http.get(jobUrl)
            .map(function (response) { return response.json().actions; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    JenkinsService.prototype.createPrintableGroup = function (names) {
        var chain = '';
        for (var i = 0; i < names.length; i++) {
            if (i !== (names.length - 1)) {
                chain += names[i] + ' | ';
            }
            else {
                chain += names[i];
            }
        }
        return chain;
    };
    JenkinsService.prototype.createPrintableParams = function (values) {
        var chain = '';
        for (var i = 0; i < values.length; i++) {
            if (i !== (values.length - 1)) {
                chain += 'VALUE= ' + values[i] + ' | ';
            }
            else {
                chain += 'VALUE= ' + values[i];
            }
        }
        return chain;
    };
    JenkinsService.prototype.sendEmailIfFail = function (subject, content, job) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(job + 'send_mail/configSubmit', 
        // tslint:disable-next-line:max-line-length
        'json= {"from": "JENKINS-TEST-FAILURE-MAGNIFIER", "to": "' + this.configService.getEmailList() + '", "addDev": true, "subject": "' + subject + '", "content": "' + content + '", "chooseTemplate": ""}', options)
            .map(function (response) { return response; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    JenkinsService.prototype.submitForm = function () {
        console.log('Sends form to the Server');
    };
    JenkinsService.prototype.getJobsGroupsParam = function () {
        return this.jobsGroupsParam;
    };
    return JenkinsService;
}());
JenkinsService.endJobsDataUrl = 'api/json?tree=jobs[name,url,buildable,lastBuild[*,actions[parameters[*]]]]';
JenkinsService.endViewsUrl = 'api/json?tree=views[url,name],primaryView[url,name]';
JenkinsService = JenkinsService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__configService__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__configService__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__configPropService__["a" /* ConfigPropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__configPropService__["a" /* ConfigPropService */]) === "function" && _c || Object])
], JenkinsService);

var JenkinsService_1, _a, _b, _c;
//# sourceMappingURL=jenkinsService.service.js.map

/***/ }),

/***/ "../../../../../src/app/job/job.component.html":
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"isSimpleJob(jobModel)\">\r\n  <h2><a title=\"{{jobModel.name}}\" href=\"{{jobModel.urlJob}}\">Job: {{jobModel.name}}</a></h2>\r\n</header>\r\n<div *ngIf=\"isSimpleJob(jobModel)\" name=\"simpleJob\" class=\"slots\">\r\n  <div class=\"slot-1\"><h2><label for=\"lastBuild\">Last Build:</label>\r\n    <a id=\"lastBuild\" href=\"{{jobModel.urlJobExecution}}\">{{jobModel.displayLastExecNumber}}</a></h2></div>\r\n  <div class=\"slot-2\">{{jobModel.timestamp | date:\"dd/MM/yy hh:mm\"  }}</div>\r\n</div>\r\n\r\n<header *ngIf=\"!isSimpleJob(jobModel)\">\r\n  <h2>Group: {{jobModel.name}}</h2>\r\n</header>\r\n<div *ngIf=\"!isSimpleJob(jobModel)\" name=\"groupedJob\" class=\"slots\">\r\n  <div *ngIf=\"!hideOK\" class=\"slot-3\">\r\n    <h2>\r\n      <label for=\"configurations\">Builds:</label>\r\n    </h2>\r\n  </div>\r\n  <div *ngIf=\"hideOK&&errorAtLeastOne(jobModel)\" class=\"slot-3\">\r\n    <h2>\r\n      <label for=\"configurations\">Builds:</label>\r\n    </h2>\r\n  </div>\r\n  <ul id=\"configurations\">\r\n    <ng-template ngFor let-jobBuild [ngForOf]=\"jobModel.jobsList\">\r\n        <li *ngIf=\"!hideOK\">\r\n          <div class=\"slot-1\">\r\n            <span><a name=\"{{jobBuild.name}}\" href=\"{{jobBuild.urlJob}}\"> {{jobBuild.name}} </a></span>\r\n            <span><a name=\"build\" id=\"build\" href=\"{{jobBuild.urlJobExecution}}\"> | {{jobBuild.displayLastExecNumber}} </a></span>           \r\n            <span [ngSwitch]=\"jobBuild.result\"> &rArr;\r\n                <span *ngSwitchCase=\"'SUCCESS'\" class=\"job-exec-ok\">Result: OK</span>\r\n                <span *ngSwitchCase=\"'SUCCESS_'\" class=\"job-exec-ok\">Result: NO OK | Branch: {{jobBuild.master}}</span>\r\n                <span *ngSwitchCase=\"'FAILURE'\" class=\"job-exec-ko\">Result: KO &rArr; {{jobBuild.param}}</span>\r\n                <span *ngSwitchCase=\"'UNSTABLE'\" class=\"job-exec-un\">Result: UN</span>\r\n                <span *ngSwitchCase=\"'ABORTED'\">Result: - AB</span>\r\n                <span *ngSwitchCase=\"'DISABLED'\">Result: - N/A</span>\r\n                <span *ngSwitchDefault class=\"job-exec-unk\">Result: !</span>\r\n            </span>\r\n            <span name=\"OtherData\"> | {{jobBuild.timestamp | date:\"dd/MM/yy hh:mm\" }}</span>\r\n          </div>\r\n        </li>\r\n        <li *ngIf=\"hideOK&&jobBuild.result!=='SUCCESS'&&jobBuild.result!=='SUCCESS_'\">\r\n          <div class=\"slot-1\">\r\n            <span><a name=\"{{jobBuild.name}}\" href=\"{{jobBuild.urlJob}}\"> {{jobBuild.name}} </a></span>\r\n            <span><a name=\"build\" id=\"build\" href=\"{{jobBuild.urlJobExecution}}\"> | {{jobBuild.displayLastExecNumber}} </a></span>           \r\n            <span [ngSwitch]=\"jobBuild.result\"> &rArr;\r\n              <span *ngSwitchCase=\"'FAILURE'\" class=\"job-exec-ko\">Result: KO &rArr; {{jobBuild.param}}</span>\r\n              <span *ngSwitchCase=\"'UNSTABLE'\" class=\"job-exec-un\">Result: UN</span>\r\n              <span *ngSwitchCase=\"'ABORTED'\">Result: - AB</span>\r\n              <span *ngSwitchCase=\"'DISABLED'\">Result: - N/A</span>\r\n              <span *ngSwitchDefault class=\"job-exec-unk\">Result: !</span>\r\n            </span>\r\n            <span name=\"OtherData\"> | {{jobBuild.timestamp | date:\"dd/MM/yy hh:mm\" }}</span>\r\n          </div>\r\n        </li>\r\n    </ng-template>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/job/job.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simpleJob_model__ = __webpack_require__("../../../../../src/app/job/simpleJob.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_model__ = __webpack_require__("../../../../../src/app/job/job.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobsGroup_model__ = __webpack_require__("../../../../../src/app/job/jobsGroup.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
/**
 * Created by frdiaz on 12/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobComponent = (function () {
    function JobComponent(_propService) {
        this._propService = _propService;
    }
    JobComponent.prototype.calculateProgres = function () {
    };
    JobComponent.prototype.ngOnInit = function () {
        this.hideOK = this._propService.getHideOK();
        this.branches = this._propService.getBranches();
    };
    JobComponent.prototype.isSimpleJob = function (job) {
        if (job instanceof __WEBPACK_IMPORTED_MODULE_1__simpleJob_model__["a" /* SimpleJob */]) {
            return true;
        }
        else if (job instanceof __WEBPACK_IMPORTED_MODULE_3__jobsGroup_model__["a" /* JobsGroup */]) {
            return false;
        }
    };
    JobComponent.prototype.errorAtLeastOne = function (jobGroup) {
        var error = false;
        for (var i = 0; i < jobGroup.jobsList.length; i++) {
            if (jobGroup.jobsList[i].result !== 'SUCCESS' && jobGroup.jobsList[i].result !== 'SUCCESS_') {
                error = true;
                break;
            }
        }
        return error;
    };
    return JobComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__job_model__["a" /* Job */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__job_model__["a" /* Job */]) === "function" && _a || Object)
], JobComponent.prototype, "jobModel", void 0);
JobComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'job',
        template: __webpack_require__("../../../../../src/app/job/job.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__["a" /* ConfigPropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__["a" /* ConfigPropService */]) === "function" && _b || Object])
], JobComponent);

var _a, _b;
//# sourceMappingURL=job.component.js.map

/***/ }),

/***/ "../../../../../src/app/job/job.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
/**
 * Created by frdiaz on 30/12/2016.
 * Modified by mmariscalg on 27/02/2018
 */
var Job = (function () {
    function Job() {
        this.statusClass = 'basic project widget unknown';
    }
    Object.defineProperty(Job.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Changes the value of the statusClass attribute to set the Job's style class
     */
    Job.prototype.setStatusClass = function () {
        switch (this.result) {
            case 'SUCCESS':
                this.statusClass = 'successful';
                break;
            case 'SUCCESS_':
                this.statusClass = 'successful';
                break;
            case 'FAILURE':
                this.statusClass = 'failing';
                break;
            case 'UNSTABLE':
                this.statusClass = 'unstable';
                break;
            case 'ABORTED':
                this.statusClass = 'aborted';
                break;
            case 'DISABLED':
                this.statusClass = 'disabled';
                break;
            default:
                this.statusClass = 'unknown';
        }
    };
    /**
     * Returns a map with the jobs's styles classes
     * @returns {{basic: boolean, project: boolean, widget: boolean, unknown: boolean, failing: boolean,
     *  successful: boolean, unstable: boolean, aborted: boolean, disabled: boolean}}
     */
    Job.prototype.getClasses = function () {
        return {
            basic: true,
            project: true,
            widget: true,
            unknown: this.statusClass === 'unknown',
            failing: this.statusClass === 'failing',
            successful: this.statusClass === 'successful',
            unstable: this.statusClass === 'unstable',
            aborted: this.statusClass === 'aborted',
            disabled: this.statusClass === 'disabled'
        };
    };
    return Job;
}());

//# sourceMappingURL=job.model.js.map

/***/ }),

/***/ "../../../../../src/app/job/jobsGroup.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job_model__ = __webpack_require__("../../../../../src/app/job/job.model.ts");
/**
 * Created by frdiaz on 30/12/2016.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JobsGroup = (function (_super) {
    __extends(JobsGroup, _super);
    function JobsGroup() {
        var _this = _super.call(this) || this;
        _this.jobsList = [];
        _this.result = 'SUCCESS';
        return _this;
    }
    return JobsGroup;
}(__WEBPACK_IMPORTED_MODULE_0__job_model__["a" /* Job */]));

//# sourceMappingURL=jobsGroup.model.js.map

/***/ }),

/***/ "../../../../../src/app/job/simpleJob.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleJob; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__job_model__ = __webpack_require__("../../../../../src/app/job/job.model.ts");
/**
 * Created by frdiaz on 14/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SimpleJob = (function (_super) {
    __extends(SimpleJob, _super);
    function SimpleJob(jobData) {
        var _this = _super.call(this) || this;
        _this.name = jobData.name;
        _this.urlJob = jobData.url;
        _this.urlJobExecution = jobData.lastBuild.url;
        _this.lastExecTime = jobData.lastBuild.duration;
        _this.result = jobData.lastBuild.result;
        _this.timestamp = new Date(jobData.lastBuild.timestamp);
        _this.displayLastExecNumber = jobData.lastBuild.displayName;
        _this.master = '';
        return _this;
    }
    return SimpleJob;
}(__WEBPACK_IMPORTED_MODULE_0__job_model__["a" /* Job */]));

//# sourceMappingURL=simpleJob.model.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav id=\"menuLateral\">\r\n    <section [class.showSettings]=\"toggleSettings\">\r\n      <input id=\"settings-toggle\" type=\"checkbox\" class=\"settings\" [(ngModel)]=\"toggleSettings\"/>\r\n      <label for=\"settings-toggle\" title=\"Configure Build Monitor Settings\">Settings</label>\r\n\r\n      <ul>\r\n        <li class=\"settings-option\">\r\n          <label for=\"combViewSelction\">Views:</label>\r\n          <select [(ngModel)]=\"viewConfig.jobsViewSelected\" class=\"form-control\" id=\"combViewSelction\" name=\"combViewSelction\" (ngModelChange)=\"loadViewSelected()\" >\r\n            <option *ngFor=\"let view of viewConfig.views\" [selected]=\"view.name == viewConfig.jobsViewSelected.name\" [disabled]=\"view.name == viewConfig.jobsViewSelected.name\" [ngValue]=\"view\">{{view.name}}</option>\r\n          </select>\r\n        </li>\r\n        <li class=\"settings-option\">\r\n          <label for=\"combNumColumns\">Maximun number of columns:</label>\r\n          <select [(ngModel)]=\"viewConfig.numColSelected\" class=\"form-control\" id=\"combNumColumns\" name=\"combNumColumns\" (change)=\"setColumnsLayout()\" >\r\n            <option *ngFor=\"let numColumn of viewConfig.combNumColumns\" [value]=\"numColumn\">{{numColumn}}</option>\r\n          </select>\r\n        </li>\r\n      </ul>\r\n      \r\n      \r\n        <form *ngIf=\"toggleSettings\">\r\n        <fieldset>\r\n          <legend>Jenkins Configuration:</legend>\r\n        <ul>\r\n        <li class=\"settings-option\">          \r\n            <div>\r\n              <label for=\"inputPollInterval\">Refresh interval (in seconds):</label>\r\n              <input type=\"number\" [(ngModel)]=\"viewConfig.pollingInterval\" id=\"inputPollInterval\" name=\"inputPollInterval\" min=\"1\" max=\"60\">\r\n            </div>\r\n        </li>\r\n         <li class=\"settings-option\">\r\n            <div>\r\n              <label for=\"jenkinsUser\">Jenkins User:</label>\r\n              <input type=\"text\" name=\"jenkinsUser\" id=\"jenkinsUser\" [(ngModel)]=\"viewConfig.configuration.user\">            \r\n            </div>\r\n         </li>\r\n          <li class=\"settings-option\">\r\n            <div>\r\n              <label for=\"jenkinsPassword\">Jenkins Password:</label>\r\n              <input type=\"password\" name=\"jenkinsPassword\" id=\"jenkinsPassword\" [(ngModel)]=\"viewConfig.configuration.pass\">\r\n            </div>\r\n          </li>\r\n          <li class=\"settings-option\">\r\n            <div>\r\n              <label for=\"jenkinsUrl\">Jenkins Url:</label>\r\n              <input type=\"text\" name=\"jenkinsUrl\" id=\"jenkinsUrl\" [(ngModel)]=\"viewConfig.configuration.jenkinsUrl\">\r\n            </div>\r\n          </li>\r\n          <li class=\"settings-option\">\r\n            <div>\r\n              <label for=\"jenkinsHideOK\">Hide success builds:</label>\r\n            <div>\r\n            </div>\r\n              <input type=\"checkbox\" name=\"jenkinsHideOK\" id=\"jenkinsHideOK\" [(ngModel)]=\"viewConfig.hideOK\" (change)=\"hideBuilds()\">\r\n            </div>\r\n          </li>\r\n          <li class=\"settings-option\">\r\n            <div>\r\n              <label for=\"jenkinsMaster\">Hide errors NO Master branches:</label>\r\n            <div>\r\n            </div>\r\n              <input type=\"checkbox\" name=\"jenkinsMaster\" id=\"jenkinsMaster\" [(ngModel)]=\"viewConfig.branches\" (change)=\"allNoMasterOK()\">\r\n            </div>\r\n          </li>\r\n          <li class=\"settings-option\">\r\n            <div>\r\n              <label for=\"jenkinsEmail\">Send info email if group fails:</label>\r\n            <div>\r\n            </div>\r\n              <input type=\"checkbox\" name=\"jenkinsEmail\" id=\"jenkinsEmail\" [(ngModel)]=\"viewConfig.email\" (change)=\"sendEmail()\">\r\n            </div>\r\n          </li>\r\n          <li class=\"settings-option\">\r\n            <div>\r\n              <label for=\"emailList\">Email list:</label>\r\n              <input type=\"text\" name=\"emailList\" id=\"emailList\" [(ngModel)]=\"viewConfig.configuration.emailList\">\r\n            </div>\r\n          </li>\r\n          <li class=\"settings-option\">\r\n            <div>\r\n              <input type=\"submit\" (click)=\"onSubmit()\" value=\"Send\">\r\n            </div>          \r\n          </li>\r\n        </ul>\r\n        </fieldset>\r\n        </form>\r\n\r\n    </section>\r\n  </nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewMenConfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewMenuConfig_model__ = __webpack_require__("../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__ = __webpack_require__("../../../../../src/app/commons/jenkinsService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_configService__ = __webpack_require__("../../../../../src/app/commons/configService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
/**
 * Created by frdiaz on 20/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobsBasicViewMenConfComponent = (function () {
    function JobsBasicViewMenConfComponent(jenkinsService, configService, _propService) {
        this.jenkinsService = jenkinsService;
        this.configService = configService;
        this._propService = _propService;
        this.toggleSettings = false;
        this.onSelectedView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSelectNumColumn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSetPollingInterval = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onUnsuscribePrevious = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * Initialize the component. Load the initial configuration
     */
    JobsBasicViewMenConfComponent.prototype.ngOnInit = function () {
        this.loadViews();
    };
    JobsBasicViewMenConfComponent.prototype.loadViews = function () {
        var _this = this;
        console.log('URL JENKINS: ' + this.urlJenkins);
        if (this.viewConfig === undefined || this.viewConfig === null) {
            this.viewConfig = new __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewMenuConfig_model__["a" /* JobsBasicViewMenuConfig */]();
            this.viewConfig.configuration = this.configService.configModel;
            console.log('New configuration:' + this.viewConfig.configuration.jenkinsUrl);
        }
        else {
            console.log('Previous Url:' + this.viewConfig.configuration.jenkinsUrl);
            this.urlJenkins = this.viewConfig.configuration.jenkinsUrl;
            this.viewConfig.views.splice(0, this.viewConfig.views.length);
        }
        this.jenkinsService.getViews(this.urlJenkins).subscribe(function (views) {
            for (var _i = 0, _a = views.views; _i < _a.length; _i++) {
                var view = _a[_i];
                _this.viewConfig.views.push(view);
                if (view.name === views.primaryView.name) {
                    _this.viewConfig.jobsViewSelected = view;
                }
            }
            _this.viewConfig.configuration = _this.configService.configModel;
            _this.onSelectedView.next(_this.viewConfig.jobsViewSelected);
        }, function (error) {
            console.log(error);
            _this.onUnsuscribePrevious.next('Connection error.');
            alert('Connection to Jenkins Fails. Check the connection settings.');
            _this.toggleSettings = true;
        });
    };
    JobsBasicViewMenConfComponent.prototype.loadViewSelected = function () {
        this.onSelectedView.next(this.viewConfig.jobsViewSelected);
    };
    JobsBasicViewMenConfComponent.prototype.setColumnsLayout = function () {
        this.onSelectNumColumn.next(this.viewConfig.numColSelected);
    };
    JobsBasicViewMenConfComponent.prototype.onSubmit = function () {
        this.configService.configModel = this.viewConfig.configuration;
        this.loadViews();
        this.onSetPollingInterval.next(this.viewConfig.pollingInterval);
        console.log('Change plugin configuration: ' + this.viewConfig.pollingInterval);
    };
    JobsBasicViewMenConfComponent.prototype.hideBuilds = function () {
        this._propService.setHideOK(this.viewConfig.hideOK);
        this.loadViews();
    };
    JobsBasicViewMenConfComponent.prototype.allNoMasterOK = function () {
        this._propService.setBranches(this.viewConfig.branches);
        this.loadViews();
    };
    JobsBasicViewMenConfComponent.prototype.sendEmail = function () {
        this._propService.setEmail(this.viewConfig.email);
    };
    return JobsBasicViewMenConfComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], JobsBasicViewMenConfComponent.prototype, "urlJenkins", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], JobsBasicViewMenConfComponent.prototype, "onSelectedView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], JobsBasicViewMenConfComponent.prototype, "onSelectNumColumn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], JobsBasicViewMenConfComponent.prototype, "onSetPollingInterval", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], JobsBasicViewMenConfComponent.prototype, "onUnsuscribePrevious", void 0);
JobsBasicViewMenConfComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'menu-config',
        template: __webpack_require__("../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__["a" /* JenkinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__commons_jenkinsService_service__["a" /* JenkinsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__commons_configService__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__commons_configService__["a" /* ConfigService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__["a" /* ConfigPropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__commons_configPropService__["a" /* ConfigPropService */]) === "function" && _c || Object])
], JobsBasicViewMenConfComponent);

var _a, _b, _c;
//# sourceMappingURL=jobsBasicViewMenuConfig.component.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view-menu-config/jobsBasicViewMenuConfig.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewMenuConfig; });
/**
 * Created by frdiaz on 15/12/2016.
 * Modified by mmariscalg on 27/02/2018.
 */
var JobsBasicViewMenuConfig = (function () {
    function JobsBasicViewMenuConfig() {
        this.views = [];
        this.numColSelected = 1;
        this.combNumColumns = [1, 2, 3, 4, 5, 6, 7, 8];
        this.pollingInterval = 5;
        this.hideOK = false;
        this.branches = false;
        this.email = false;
        this.configuration = { 'user': 'monitor-pro', 'pass': '', 'jenkinsUrl': 'http://localhost:8080/jenkins/',
            'jenkinsPlugin': false, 'emailList': '' };
    }
    return JobsBasicViewMenuConfig;
}());

//# sourceMappingURL=jobsBasicViewMenuConfig.model.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view/jobsBasicView.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>View: {{jobsViewSelected.name}}</h2>\r\n<h2>Group filter \r\n  <input type=\"text\" placeholder=\"Search for groups..\" [(ngModel)]='listFilter' />\r\n</h2>\r\n<h4>\r\n  Filtering by: {{listFilter}}\r\n</h4>\r\n<header>\r\n  <menu-config (onSelectedView)=\"loadViewSelected($event)\" (onSelectNumColumn)=\"setColumnsLayout($event)\" (onSetPollingInterval)=\"setPollingInterval($event)\"  (onUnsuscribePrevious)=\"unsuscribePrevious($event)\" [urlJenkins]=\"urlJenkins\">Configuration Menu</menu-config>\r\n</header>\r\n\r\n<div>\r\n  <!-- Jobs List -->\r\n  <ul id=\"widgets\" [class] = \"viewConfig.classColumn\">\r\n    <li *ngFor=\"let jobData of filteredJobsModel\" [ngClass]=\"jobData.getClasses()\">\r\n      <job  [jobModel]=\"jobData\"></job>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view/jobsBasicView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewConfig__ = __webpack_require__("../../../../../src/app/jobs-basic-view/jobsBasicViewConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__ = __webpack_require__("../../../../../src/app/commons/jenkinsService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobsBasicView_model__ = __webpack_require__("../../../../../src/app/jobs-basic-view/jobsBasicView.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__commons_configPropService__ = __webpack_require__("../../../../../src/app/commons/configPropService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_jobsGroup_model__ = __webpack_require__("../../../../../src/app/job/jobsGroup.model.ts");
/**
 * Created by frdiaz on 02/12/2016.
 * Modified by mmariscalg on 22/06/2018.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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








var JobsBasicViewComponent = (function () {
    function JobsBasicViewComponent(jenkinsService, _propService) {
        this.jenkinsService = jenkinsService;
        this._propService = _propService;
        this.jobsModel = [];
        this.jobsModelEmail = [];
        this.jobsModelEmailStarted = false;
        this.filteredJobsModel = [];
        this._listFilter = '';
        this.params = {};
        this.jobsViewSelected = new __WEBPACK_IMPORTED_MODULE_4__jobsBasicView_model__["a" /* JobsBasicViewModel */](undefined, 'No view selected jet.');
    }
    Object.defineProperty(JobsBasicViewComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filteredJobsModel = this.listFilter ? this.performFilter(this.listFilter) : this.jobsModel;
        },
        enumerable: true,
        configurable: true
    });
    JobsBasicViewComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.jobsModel.filter(function (job) {
            return job.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    /**
     * Initializes the component. Load the initial configuration
     */
    JobsBasicViewComponent.prototype.ngOnInit = function () {
        this.viewConfig = new __WEBPACK_IMPORTED_MODULE_1__jobsBasicViewConfig__["a" /* JobsBasicViewConfig */]();
    };
    JobsBasicViewComponent.prototype.ngOnDestroy = function () {
        console.log('Llamada a ngOnDestroy.');
        if (!this.subscription != null) {
            console.log('Llamada a ngOnDestroy.');
            this.subscription.unsubscribe();
        }
    };
    JobsBasicViewComponent.prototype.updateJobs = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.jenkinsService.getJobsStatus(url)];
                    case 1:
                        _a.jobsModel = _b.sent();
                        this.filteredJobsModel = this.listFilter ? this.performFilter(this.listFilter) : this.jobsModel;
                        this.params = this.jenkinsService.getJobsGroupsParam();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Starts load of jobs status
     * @param url
     */
    JobsBasicViewComponent.prototype.initLoadJobsStatus = function (url) {
        var _this = this;
        this.jenkinsService.reset();
        this.updateJobs(url);
        /* Starts the polling configuration */
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
        this.timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].interval(this.viewConfig.pollingIntervalInMilSecond);
        this.subscription = this.timer
            .subscribe(function () {
            _this.jenkinsService.reset();
            _this.updateJobs(url);
            for (var _i = 0, _a = _this.jobsModel; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry instanceof __WEBPACK_IMPORTED_MODULE_6__job_jobsGroup_model__["a" /* JobsGroup */]) {
                    var entryGroup = entry;
                    for (var _b = 0, _c = entryGroup.jobsList; _b < _c.length; _b++) {
                        var subentry = _c[_b];
                        if (subentry.statusClass === 'failing') {
                            if (_this.jobsModelEmail.indexOf(subentry.name) === -1) {
                                if (_this._propService.getEmail() && _this.jobsModelEmailStarted) {
                                    _this.jenkinsService.sendEmailIfFail('New FAILURE: '
                                        + subentry.name, 'JOB  ' + subentry.name + ' crashed'
                                        + ((_this.params[subentry.name]) === undefined ? '' : ' with next PARAMS: ' + (_this.params[subentry.name]))
                                        + '. Please, for further details visit: ' + subentry.urlJob, subentry.urlJob)
                                        .subscribe(function (response) { return response; }, function (error) { return console.log(error); });
                                }
                                console.log('New FAILURE: ' + subentry.name);
                                _this.jobsModelEmail.push(subentry.name);
                            }
                        }
                        else {
                            if (_this.jobsModelEmail.indexOf(subentry.name) !== -1) {
                                console.log('New Success: ' + subentry.name);
                                _this.jobsModelEmail.splice(_this.jobsModelEmail.indexOf(subentry.name), 1);
                            }
                        }
                    }
                }
                else {
                    var simpleEntry = entry;
                    if (simpleEntry.statusClass === 'failing') {
                        if (_this.jobsModelEmail.indexOf(simpleEntry.name) === -1) {
                            if (_this._propService.getEmail() && _this.jobsModelEmailStarted) {
                                _this.jenkinsService.sendEmailIfFail('New FAILURE: '
                                    + simpleEntry.name, 'JOB  ' + simpleEntry.name + ' crashed'
                                    + ((_this.params[simpleEntry.name]) === undefined ? '' : ' with next PARAMS: ' + (_this.params[simpleEntry.name]))
                                    + '. Please, for further details visit: ' + simpleEntry.urlJob, simpleEntry.urlJob)
                                    .subscribe(function (response) { return response; }, function (error) { return console.log(error); });
                            }
                            console.log('New FAILURE: ' + simpleEntry.name);
                            _this.jobsModelEmail.push(simpleEntry.name);
                        }
                    }
                    else {
                        if (_this.jobsModelEmail.indexOf(simpleEntry.name) !== -1) {
                            console.log('New Success: ' + simpleEntry.name);
                            _this.jobsModelEmail.splice(_this.jobsModelEmail.indexOf(simpleEntry.name), 1);
                        }
                    }
                }
            }
            _this.jobsModelEmailStarted = true;
        });
        /* Ends the polling configuration */
    };
    /**
     * Sets the number of columns to the view
     */
    JobsBasicViewComponent.prototype.setColumnsLayout = function (numColumnsSelected) {
        this.viewConfig.classColumn = 'columns-' + numColumnsSelected;
    };
    /**
     * Loads data of selected view.
     */
    JobsBasicViewComponent.prototype.loadViewSelected = function (jobsViewSelected) {
        this.initLoadJobsStatus(jobsViewSelected.url);
        this.jobsViewSelected = jobsViewSelected;
    };
    /**
     * Changes value of polling interval and data reload
     */
    JobsBasicViewComponent.prototype.setPollingInterval = function (pollingIntervalInSec) {
        this.viewConfig.pollingIntervalInMilSecond = pollingIntervalInSec * 1000;
    };
    /**
     *
     * @param errorMesage
     */
    JobsBasicViewComponent.prototype.unsuscribePrevious = function (errorMesage) {
        if (this.subscription !== undefined) {
            this.subscription.unsubscribe();
        }
    };
    return JobsBasicViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], JobsBasicViewComponent.prototype, "urlJenkins", void 0);
JobsBasicViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'jobsBasicView',
        template: __webpack_require__("../../../../../src/app/jobs-basic-view/jobsBasicView.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__["a" /* JenkinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__commons_jenkinsService_service__["a" /* JenkinsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__commons_configPropService__["a" /* ConfigPropService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__commons_configPropService__["a" /* ConfigPropService */]) === "function" && _b || Object])
], JobsBasicViewComponent);

var _a, _b;
//# sourceMappingURL=jobsBasicView.component.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view/jobsBasicView.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewModel; });
/**
 * Created by frdiaz on 18/12/2016.
 */
var JobsBasicViewModel = (function () {
    function JobsBasicViewModel(url, name) {
        this.url = url;
        this.name = name;
    }
    return JobsBasicViewModel;
}());

//# sourceMappingURL=jobsBasicView.model.js.map

/***/ }),

/***/ "../../../../../src/app/jobs-basic-view/jobsBasicViewConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsBasicViewConfig; });
/**
 * Created by frdiaz on 15/12/2016.
 */
var JobsBasicViewConfig = (function () {
    function JobsBasicViewConfig() {
        this.classColumn = 'columns-1';
        this.pollingIntervalInMilSecond = 5000;
    }
    return JobsBasicViewConfig;
}());

//# sourceMappingURL=jobsBasicViewConfig.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map