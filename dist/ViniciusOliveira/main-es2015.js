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
/* harmony import */ var _core_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main-banner/main-banner.component */ "./src/app/core/main-banner/main-banner.component.ts");





const routes = [
    {
        path: '',
        component: _core_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_2__["MainBannerComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'ViniciusOliveira';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/main-banner/main-banner.component */ "./src/app/core/main-banner/main-banner.component.ts");
/* harmony import */ var _core_formacao_formacao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/formacao/formacao.component */ "./src/app/core/formacao/formacao.component.ts");
/* harmony import */ var ngx_horizontal_timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-horizontal-timeline */ "./node_modules/ngx-horizontal-timeline/__ivy_ngcc__/fesm2015/ngx-horizontal-timeline.js");
/* harmony import */ var _shared_components_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/lightbox/lightbox.component */ "./src/app/shared/components/lightbox/lightbox.component.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _core_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/knowledge/knowledge.component */ "./src/app/core/knowledge/knowledge.component.ts");
/* harmony import */ var _core_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/contact/contact.component */ "./src/app/core/contact/contact.component.ts");
/* harmony import */ var _shared_components_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/material.module */ "./src/app/shared/components/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-mgl-timeline */ "./node_modules/angular-mgl-timeline/__ivy_ngcc__/fesm2015/angular-mgl-timeline.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
/* harmony import */ var _core_about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/about/about.component */ "./src/app/core/about/about.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/nav/nav.component */ "./src/app/core/nav/nav.component.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _shared_components_button_burger_button_burger_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/components/button-burger/button-burger.component */ "./src/app/shared/components/button-burger/button-burger.component.ts");





// import { NavComponent } from './core/main-banner/nav/nav.component';





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
        _services_common_service__WEBPACK_IMPORTED_MODULE_23__["CommonService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_horizontal_timeline__WEBPACK_IMPORTED_MODULE_6__["NgxHorizontalTimelineModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _shared_components_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_18__["MglTimelineModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
        ],
        _shared_components_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _core_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_4__["MainBannerComponent"],
        _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_22__["NavComponent"],
        _core_formacao_formacao_component__WEBPACK_IMPORTED_MODULE_5__["FormacaoComponent"],
        _shared_components_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_7__["LightboxComponent"],
        _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
        _core_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_9__["KnowledgeComponent"],
        _core_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _core_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
        _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
        _shared_components_button_burger_button_burger_component__WEBPACK_IMPORTED_MODULE_24__["ButtonBurgerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_horizontal_timeline__WEBPACK_IMPORTED_MODULE_6__["NgxHorizontalTimelineModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _shared_components_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
        angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_18__["MglTimelineModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"]], exports: [_shared_components_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _core_main_banner_main_banner_component__WEBPACK_IMPORTED_MODULE_4__["MainBannerComponent"],
                    _core_nav_nav_component__WEBPACK_IMPORTED_MODULE_22__["NavComponent"],
                    _core_formacao_formacao_component__WEBPACK_IMPORTED_MODULE_5__["FormacaoComponent"],
                    _shared_components_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_7__["LightboxComponent"],
                    _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"],
                    _core_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_9__["KnowledgeComponent"],
                    _core_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _core_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"],
                    _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
                    _shared_components_button_burger_button_burger_component__WEBPACK_IMPORTED_MODULE_24__["ButtonBurgerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_horizontal_timeline__WEBPACK_IMPORTED_MODULE_6__["NgxHorizontalTimelineModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _shared_components_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                    angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_18__["MglTimelineModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'fill' } },
                    _services_common_service__WEBPACK_IMPORTED_MODULE_23__["CommonService"]
                ],
                exports: [
                    _shared_components_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AboutComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ol\u00E1, meu nome \u00E9 Vinicius Oliveira, tenho 24 anos, casado e sou Desenvolvedor Front-End.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello, my name is Vinicius Oliveira, I'm 24 years old, married and I'm Front-End Developer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Possuo conhecimento avan\u00E7ado em programa\u00E7\u00E3o de interface, arquitetura da informa\u00E7\u00E3o, usabilidade, acessibilidade, SEO e W3C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I have advanced knowledge in interface programming, information architecture, usability, accessibility, SEO and W3C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Comunicativo, organizado, inovador, planejador, bom relacionamento interpessoal, agilidade, versatilidade, flexibilidade, coragem, comprometimento, pontualidade, criatividade, detalhista e proativo s\u00E3o algumas das habilidades pessoais.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Communicative, organized, innovative, planner, good relationship interpersonal skills, agility, versatility, flexibility, courage, commitment, punctuality, creativity, detail and proactive are some personal skills.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Atualmente trabalho na empresa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " per\u00EDodo integral no cargo de Desenvolvedor Front End Angular (Pleno), estou alocado em cliente, Itau Unibanco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " I currently work for the company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " full time in the position of Front End Developer (Full)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sou apaixonado pelo que fa\u00E7o e o que me deixa mais feliz ainda \u00E9 a facilidade em aprender cada dia mais. Em meu workflow, em resumo costumo construir projeto em Angular 2+ utilizando HTML, CSS (Sass), JavaScript (TypeScript) e Git.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "I am passionate about what I do and what makes me even happier is the ease in learning more each day. In my workflow, in summary I usually build a project in Angular 2+ using HTML, CSS (Sass), JavaScript (TypeScript) and Git.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ficou interessado? Entre em contato comigo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AboutComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you interested? Please contact me. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutComponent {
    constructor(commonLanguage) {
        this.commonLanguage = commonLanguage;
        this.languageId = 'PT';
    }
    ngOnInit() {
        this.commonLanguage.emitirlanguage.subscribe(ev => {
            this.languageId = ev;
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 21, vars: 14, consts: [[1, "about"], [1, "container"], [1, "about__header"], [1, "about__header--title"], [1, "about__description"], ["class", "about__description--paragraph", 4, "ngIf"], [1, "button"], ["href", "https://drive.google.com/file/d/1jCc-m24HaUbHHV6iilLJCcp4W064YnuU/view", "target", "_blank", 1, "button__btn"], [1, "about__description--paragraph"], ["href", "https://www.ibm.com/br-pt", "target", "_blank"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AboutComponent_p_6_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutComponent_p_7_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_p_8_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutComponent_p_9_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AboutComponent_p_10_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AboutComponent_p_11_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AboutComponent_p_12_Template, 5, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AboutComponent_p_13_Template, 5, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AboutComponent_p_14_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AboutComponent_p_15_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AboutComponent_p_16_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AboutComponent_p_17_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Sobre" : "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "PT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "PT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "PT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "PT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "PT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "PT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.languageId === "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Baixar Curr\u00EDculo" : "Download Curriculum");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".about[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: #fff;\n}\n.about__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.about__header--title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Poppins\", sans-serif;\n  color: #0099b7;\n  font-weight: bold;\n}\n.about__description[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  display: flex;\n  flex-direction: column;\n}\n.about__description--paragraph[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  line-height: 20px;\n  text-align: center;\n}\n.about__description[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.about__description[_ngcontent-%COMP%]   .button__btn[_ngcontent-%COMP%] {\n  border: 1px solid #000;\n  background: transparent;\n  color: #0099b7;\n  font-weight: bold;\n  padding: 15px 30px;\n  border-radius: 4px;\n  font-family: \"Poppins\", sans-serif;\n  transition: all 0.3s;\n  position: absolute;\n}\n.about__description[_ngcontent-%COMP%]   .button__btn[_ngcontent-%COMP%]:hover {\n  background-color: #0099b7;\n  color: #fff;\n  border: none;\n  transform: translate(0, -4px);\n  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9hYm91dC9DOlxcVXNlcnNcXFZpbmljaXVzZGFTaWx2YU9saXZlXFxEZXNrdG9wXFxteXBvcnRmb2xpby9zcmNcXGFwcFxcY29yZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2Fib3V0L0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBRENJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ1I7QURBUTtFQUNJLGVBQUE7RUFDQSxrQ0VQRjtFRlFFLGNFRkw7RUZHSyxpQkFBQTtBQ0VaO0FEQ0k7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ1I7QURBUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRVo7QURBUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDRVo7QUREWTtFQU9JLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjRTVCVDtFRjZCUyxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxrQ0V2Q047RUZ3Q00sb0JBQUE7RUFDQSxrQkFBQTtBQ0poQjtBREtnQjtFQUNJLHlCRXJDYjtFRnNDYSxXRXZDWjtFRndDWSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtBQ0hwQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcclxuLmFib3V0IHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJi0tdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAmLS1wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAmX19idG4ge1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDkwZGVnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJnYmEoMCwgMTUzLCAxODMsIDEpIDAlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJnYmEoNDgsIDE5NCwgMjIzLCAxKSAxMDAlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJnYmEoMCwgMjEyLCAyNTUsIDEpIDEwMCVcclxuICAgICAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogc29saWQgMXB4ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5hYm91dCB7XG4gIHBhZGRpbmc6IDYwcHggMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5hYm91dF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWJvdXRfX2hlYWRlci0tdGl0bGUge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDk5Yjc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFib3V0X19kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hYm91dF9fZGVzY3JpcHRpb24tLXBhcmFncmFwaCB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0X19kZXNjcmlwdGlvbiAuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYWJvdXRfX2Rlc2NyaXB0aW9uIC5idXR0b25fX2J0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzAwOTliNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYWJvdXRfX2Rlc2NyaXB0aW9uIC5idXR0b25fX2J0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Yjc7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xuICBib3gtc2hhZG93OiAwIDRweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59IiwiLy8gZm9udHNcclxuJE9wZW5TYW5zOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4vL0NvbG9yc1xyXG4kcmVkX2Rhcms6ICNhNjAxNDA7XHJcbiRibGFjazogIzNhM2EzYTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzAwOTliNztcclxuXHJcbi8vTW9iaWxlXHJcbiRsaXR0bGU6IDMyMHB4O1xyXG4kc21hbGw6IDQ4MHB4O1xyXG4kbWVkaXVtOiA3NjhweDtcclxuJGxhcmdlOiAxMDI1cHg7XHJcblxyXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcclxuICBAaWYgJG1lZGlhID09ICRzbWFsbCB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbWVkaXVtIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbGFyZ2Uge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbGFyZ2UpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gJGxpdHRsZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsaXR0bGUpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gJHRhYmxldC1wb3J0cmFpdCB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OCkgYW5kIChtYXgtd2lkdGg6IDc2OSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _shared_components_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/lightbox/lightbox.component */ "./src/app/shared/components/lightbox/lightbox.component.ts");






function ContactComponent_app_loader_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
function ContactComponent_app_lightbox_37_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-lightbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ContactComponent_app_lightbox_37_Template_app_lightbox_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.modal = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.modal, "\n");
} }
class ContactComponent {
    constructor(commonLanguage) {
        this.commonLanguage = commonLanguage;
        this.languageId = 'PT';
        this.placeNome = 'Nome Sobrenome';
        this.placeEmail = 'meuemail@dominio.com';
        this.placeMsg = 'Digite sua Mensagem ...';
    }
    ngOnInit() {
        this.commonLanguage.emitirlanguage.subscribe(ev => {
            this.languageId = ev;
            if (this.languageId === 'PT') {
                this.placeNome = 'Nome Sobrenome';
                this.placeEmail = 'meuemail@dominio.com';
                this.placeMsg = 'Digite sua Mensagem ...';
            }
            else {
                this.placeNome = 'Name and Surname';
                this.placeEmail = 'myemail@dominio.com';
                this.placeMsg = 'Enter your Message ...';
            }
        });
    }
    onClick() {
        this.loader = true;
        setTimeout(() => {
            this.modal = 'E-mail enviado com sucesso!';
            this.loader = false;
        }, 2000);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 38, vars: 12, consts: [[1, "contact"], [1, "container"], [1, "contact__title"], [1, "contact__fast"], [1, "sociais"], ["rel", "noopener noreferrer", "href", "https://api.whatsapp.com/send?phone=+5511952216311&text=Ol\u00E1%21%20Seja%20Bem%20Vindo.", "target", "_blank", "title", "Link para contato via WhatsApp", 1, "float-whats"], ["src", "https://i.ibb.co/SVGDCFG/Whatsapp.png", "alt", "Whats", "title", "Whats"], [1, "description"], ["href", "tel:+5511952216311"], ["src", "https://i.ibb.co/dGydGtc/phone-i.png", "alt", "Number", "title", "Number"], ["href", "mailto:viniciussoliveira@gmail.com"], ["src", "https://i.ibb.co/NWwczbB/envelope.png", "alt", "Email", "title", "Email"], [1, "contact__filds"], [1, "contact__filds--line", "col-md-8"], ["for", "name", 1, "label"], ["onkeyup", "this.value=this.value.replace(/[<>$\u00A8\u00A8!@#1234567890*{}]/g,'')", "id", "name", "name", "name", "autocomplete", "off", "type", "text", 1, "text-input", 3, "placeholder"], ["for", "email", 1, "label"], ["id", "email", "name", "email", "autocomplete", "off", "type", "email", 1, "text-input", 3, "placeholder"], ["for", "mensagem", 1, "label"], ["autocomplete", "off", "id", "text_mensagem", "rows", "3", "onkeyup", "this.value=this.value.replace(/[<>$\u00A8\u00A8#*{}]/g,'')", 1, "text-input", "txt-mensagem", 3, "placeholder"], [1, "button"], [1, "button__btn", 3, "click"], [4, "ngIf"], ["class", "infos__lightbox", 3, "onClick", 4, "ngIf"], [1, "infos__lightbox", 3, "onClick"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "(11) 95221-6311");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_34_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ContactComponent_app_loader_36_Template, 1, 0, "app-loader", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ContactComponent_app_lightbox_37_Template, 2, 1, "app-lightbox", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.languageId === "PT" ? "Entre em Contato" : "Contact", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "(11) 95221-6311" : "+55 (11) 95221-6311");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.languageId === "PT" ? "E-mail" : "Email", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Nome" : "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeNome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "E-mail" : "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Mensagem" : "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Enviar" : "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _shared_components_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_4__["LightboxComponent"]], styles: [".contact[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: #f9f9f9;\n}\n.contact__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 36px;\n  font-family: \"Poppins\", sans-serif;\n  color: #0099b7;\n  font-weight: bold;\n}\n.contact__fast[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 30px 0;\n}\n.contact__fast[_ngcontent-%COMP%]   .sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n}\n.contact__fast[_ngcontent-%COMP%]   .sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.contact__fast[_ngcontent-%COMP%]   .sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  transition: 0.2s ease-in-out;\n}\n.contact__fast[_ngcontent-%COMP%]   .sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #000;\n  position: relative;\n}\n.contact__fast[_ngcontent-%COMP%]   .sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]::before {\n  content: \"\";\n  transition: width 0.3s;\n  width: 0%;\n  position: absolute;\n  bottom: -6px;\n  background-color: #0099b7;\n  height: 2px;\n  left: 0;\n}\n.contact__fast[_ngcontent-%COMP%]   .sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n}\n.contact__filds[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contact__filds--line[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n.contact__filds--line[_ngcontent-%COMP%]   .txt-mensagem[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  padding-left: 10px;\n  width: 100%;\n  border: none;\n  resize: none;\n}\n.contact__filds[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.contact__filds[_ngcontent-%COMP%]   .button__btn[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #0099b7 0%, #30c2df 100%, #00d4ff 100%);\n  color: #fff;\n  padding: 15px 30px;\n  border: solid 1px #fff;\n  border-radius: 4px;\n  font-family: \"Poppins\", sans-serif;\n  transition: all 0.3s;\n  position: absolute;\n}\n.contact__filds[_ngcontent-%COMP%]   .button__btn[_ngcontent-%COMP%]:hover {\n  background-color: #0099b7;\n  color: #000;\n  border: none;\n  transform: translate(0, -4px);\n  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);\n}\n.text-input[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  padding: 10px 14px;\n  border: none;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  transition: 0.1s ease-in;\n  width: 100%;\n  color: #212121;\n}\n.text-input[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 9px 6px rgba(0, 0, 0, 0.1);\n}\n.text-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 3px 6px rgba(40, 255, 230, 0.3);\n}\n.label[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 12px;\n  color: #474747;\n  display: block;\n  text-align: left;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 768px) {\n  .contact__filds--line[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .contact__fast[_ngcontent-%COMP%]   .sociais[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .contact__filds[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb250YWN0L0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxjb3JlXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9jb250YWN0L0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBREVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDRVBFO0VGUUYsY0VGRDtFRkdDLGlCQUFBO0FDQVI7QURFSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNBUjtBREVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBaEI7QURDZ0I7RUFDSSxpQkFBQTtBQ0NwQjtBREFvQjtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7QUNFeEI7QURDZ0I7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNDcEI7QURBb0I7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJFOUJqQjtFRitCaUIsV0FBQTtFQUNBLE9BQUE7QUNFeEI7QURDd0I7RUFDSSxXQUFBO0FDQzVCO0FETUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDSlI7QURLUTtFQUNJLGNBQUE7QUNIWjtBRElZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRmhCO0FES1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0haO0FESVk7RUFDSSwwRUFBQTtFQU1BLFdFdEVSO0VGdUVRLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDRS9FTjtFRmdGTSxvQkFBQTtFQUNBLGtCQUFBO0FDUGhCO0FEUWdCO0VBQ0kseUJFN0ViO0VGOEVhLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtBQ05wQjtBRGFBO0VBQ0ksb0NFaEdPO0VGaUdQLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ1ZKO0FEV0k7RUFDSSx3Q0FBQTtBQ1RSO0FEV0k7RUFDSSw2Q0FBQTtBQ1RSO0FEYUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtDRW5ITTtFRm9ITixlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVko7QURhQTtFQUdZO0lBQ0ksV0FBQTtFQ1pkO0FBQ0Y7QURpQkE7RUFLb0I7SUFDSSxlQUFBO0VDbkJ0QjtFRHlCVTtJQUNJLGdCQUFBO0VDdkJkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zYXNzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgJl9fZmFzdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAuc29jaWFpcyB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fZmlsZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYtLWxpbmUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgLnR4dC1tZW5zYWdlbSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICZfX2J0biB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgOTBkZWcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAxNTMsIDE4MywgMSkgMCUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmdiYSg0OCwgMTk0LCAyMjMsIDEpIDEwMCUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAyMTIsIDI1NSwgMSkgMTAwJVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LWlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAkT3BlblNhbnM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDlweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoNDAsIDI1NSwgMjMwLCAwLjMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNDc0NzQ3O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWN0IHtcclxuICAgICAgICAmX19maWxkcyB7XHJcbiAgICAgICAgICAgICYtLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29udGFjdCB7XHJcbiAgICAgICAgJl9fZmFzdCB7XHJcbiAgICAgICAgICAgIC5zb2NpYWlzIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fZmlsZHMge1xyXG4gICAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvbnRhY3Qge1xuICBwYWRkaW5nOiA2MHB4IDA7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG4uY29udGFjdF9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDA5OWI3O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWN0X19mYXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuLmNvbnRhY3RfX2Zhc3QgLnNvY2lhaXMgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5jb250YWN0X19mYXN0IC5zb2NpYWlzIGEgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY29udGFjdF9fZmFzdCAuc29jaWFpcyBhIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cbi5jb250YWN0X19mYXN0IC5zb2NpYWlzIGEgLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250YWN0X19mYXN0IC5zb2NpYWlzIGEgLmRlc2NyaXB0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICB3aWR0aDogMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWI3O1xuICBoZWlnaHQ6IDJweDtcbiAgbGVmdDogMDtcbn1cbi5jb250YWN0X19mYXN0IC5zb2NpYWlzIGEgLmRlc2NyaXB0aW9uOmhvdmVyOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWN0X19maWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3RfX2ZpbGRzLS1saW5lIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uY29udGFjdF9fZmlsZHMtLWxpbmUgLnR4dC1tZW5zYWdlbSB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICByZXNpemU6IG5vbmU7XG59XG4uY29udGFjdF9fZmlsZHMgLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRhY3RfX2ZpbGRzIC5idXR0b25fX2J0biB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwOTliNyAwJSwgIzMwYzJkZiAxMDAlLCAjMDBkNGZmIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250YWN0X19maWxkcyAuYnV0dG9uX19idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWI3O1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udGV4dC1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzIxMjEyMTtcbn1cbi50ZXh0LWlucHV0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA5cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi50ZXh0LWlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoNDAsIDI1NSwgMjMwLCAwLjMpO1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzQ3NDc0NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0X19maWxkcy0tbGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWN0X19mYXN0IC5zb2NpYWlzIGEgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgLmNvbnRhY3RfX2ZpbGRzIC5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn0iLCIvLyBmb250c1xyXG4kT3BlblNhbnM6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbi8vQ29sb3JzXHJcbiRyZWRfZGFyazogI2E2MDE0MDtcclxuJGJsYWNrOiAjM2EzYTNhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMDA5OWI3O1xyXG5cclxuLy9Nb2JpbGVcclxuJGxpdHRsZTogMzIwcHg7XHJcbiRzbWFsbDogNDgwcHg7XHJcbiRtZWRpdW06IDc2OHB4O1xyXG4kbGFyZ2U6IDEwMjVweDtcclxuXHJcbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xyXG4gIEBpZiAkbWVkaWEgPT0gJHNtYWxsIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRtZWRpdW0ge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRsYXJnZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsYXJnZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbGl0dGxlIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGxpdHRsZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkdGFibGV0LXBvcnRyYWl0IHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4KSBhbmQgKG1heC13aWR0aDogNzY5KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");



class FooterComponent {
    constructor(commonLanguage) {
        this.commonLanguage = commonLanguage;
        this.languageId = 'PT';
    }
    ngOnInit() {
        this.commonLanguage.emitirlanguage.subscribe(ev => {
            this.languageId = ev;
        });
    }
    scrollToElement(eve) {
        let sendServer;
        sendServer = this.commonLanguage.scrollToElement(eve);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 28, vars: 1, consts: [[1, "footer"], [1, "container"], [1, "col-md-10", "col-xs-12", "footer__items"], [1, "footer__items--small"], [1, "links"], ["href", "https://www.linkedin.com/in/vinicius-oliveira-89149b136/", "target", "_blank", "rel", "noopener", "aria-label", "LinkedIn"], [1, "icon", "icon--linkedin"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "viewBox", "0 0 30 30", "preserveAspectRatio", "xMinYMin meet"], ["fill", "#0084B1", "cx", "15", "cy", "15", "r", "15"], ["fill", "#FFF", "d", "M9.63 7.936c-.941 0-1.71.762-1.71 1.696 0 .963.794 1.719 1.699 1.7.891.021 1.703-.716 1.705-1.694A1.706 1.706 0 0 0 9.63 7.936z"], ["fill", "#FFF", "d", "M8.626 12.632a.468.468 0 0 0-.468.468v8.494c0 .258.21.468.468.468h1.991a.468.468 0 0 0 .468-.468V13.1a.469.469 0 0 0-.468-.468H8.626z"], ["fill", "#FFF", "d", "M18.855 12.391h-.511a2.863 2.863 0 0 0-2.51 1.481l-.026-.004v-1.042a.194.194 0 0 0-.194-.194H13.13a.194.194 0 0 0-.194.194v9.041c0 .107.087.194.194.194l2.538.001a.194.194 0 0 0 .194-.194v-5.224c0-.903.72-1.653 1.623-1.663a1.638 1.638 0 0 1 1.661 1.642v5.245c0 .107.087.194.194.194h2.545a.194.194 0 0 0 .194-.194v-6.254a3.223 3.223 0 0 0-3.224-3.223z"], ["href", "https://github.com/vinisilvaoliveira", "target", "_blank", "rel", "noopener", "aria-label", "GitHub"], [1, "icon", "icon--github"], ["d", "M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm2.85 23.761c-.457.088-.619-.192-.619-.433 0-.295.011-1.266.011-2.469 0-.84-.288-1.389-.611-1.667 2.005-.223 4.109-.984 4.109-4.441 0-.983-.348-1.786-.925-2.415.093-.228.401-1.143-.09-2.382 0 0-.754-.242-2.472.923A8.64 8.64 0 0 0 15 10.574a8.586 8.586 0 0 0-2.253.303c-1.719-1.165-2.475-.923-2.475-.923-.49 1.239-.181 2.154-.088 2.382a3.476 3.476 0 0 0-.926 2.415c0 3.449 2.101 4.221 4.099 4.448-.257.225-.49.622-.571 1.203-.513.23-1.816.628-2.619-.748 0 0-.475-.864-1.379-.927 0 0-.879-.011-.062.547 0 0 .59.277.999 1.316 0 0 .528 1.75 3.032 1.206.004.751.012 1.317.012 1.531 0 .238-.164.516-.614.434A8.998 8.998 0 0 1 6 15.223a9 9 0 0 1 18 0 9.001 9.001 0 0 1-6.15 8.538z"], ["fill", "#FFF", "d", "M14.999 6.222C10.03 6.222 6 10.252 6 15.223a9 9 0 0 0 6.155 8.539c.45.083.614-.195.614-.434 0-.214-.008-.78-.012-1.531-2.503.544-3.032-1.206-3.032-1.206-.409-1.04-.999-1.316-.999-1.316-.817-.558.062-.547.062-.547.903.064 1.379.927 1.379.927.803 1.375 2.106.978 2.619.748.082-.582.314-.978.571-1.203-1.998-.227-4.099-.999-4.099-4.448 0-.983.351-1.786.926-2.415-.093-.228-.401-1.143.088-2.382 0 0 .756-.242 2.475.923A8.628 8.628 0 0 1 15 10.575a8.597 8.597 0 0 1 2.253.303c1.718-1.165 2.472-.923 2.472-.923.491 1.239.182 2.154.09 2.382.577.629.925 1.432.925 2.415 0 3.457-2.104 4.218-4.109 4.441.323.278.611.827.611 1.667 0 1.203-.011 2.174-.011 2.469 0 .241.162.521.619.433a9.001 9.001 0 0 0-2.851-17.54z"], [1, "col-md-2", "col-xs-12", "footer__up"], [3, "click"], ["src", "https://i.ibb.co/wdXfTGf/up.png", "alt", "up", 2, "width", "10%"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vinicius Oliveira | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_25_listener() { return ctx.scrollToElement("main"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Topo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.languageId === "PT" ? "@Copyright todos os direitos reservados 2020." : "@Copyright all rights reserved 2020.", " ");
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px 0;\n}\n.footer__items[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer__items--small[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.footer__items--small[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  margin-right: 0px;\n}\n.footer__items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.footer__up[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n  cursor: pointer;\n}\n@media screen and (max-width: 600px) {\n  .footer__items[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .footer__items--small[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    margin-right: 0;\n  }\n  .footer__items[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .footer__up[_ngcontent-%COMP%] {\n    margin-top: -23px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvQzpcXFVzZXJzXFxWaW5pY2l1c2RhU2lsdmFPbGl2ZVxcRGVza3RvcFxcbXlwb3J0Zm9saW8vc3JjXFxhcHBcXGNvcmVcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtBQ0daO0FERlk7RUFDSSxpQkFBQTtBQ0loQjtBRERRO0VBQ0ksa0JBQUE7QUNHWjtBREFJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRVI7QURFQTtFQUVRO0lBQ0ksc0JBQUE7RUNBVjtFRENVO0lBQ0ksbUJBQUE7SUFDQSxlQUFBO0VDQ2Q7RURDVTtJQUNJLGFBQUE7RUNDZDtFREVNO0lBQ0ksaUJBQUE7RUNBVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICZfX2l0ZW1zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJi0tc21hbGwge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICAmX19pdGVtcyB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICYtLXNtYWxsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fdXAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG4uZm9vdGVyX19pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlcl9faXRlbXMtLXNtYWxsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZvb3Rlcl9faXRlbXMtLXNtYWxsIDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLmZvb3Rlcl9faXRlbXMgYSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5mb290ZXJfX3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZm9vdGVyX19pdGVtcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZm9vdGVyX19pdGVtcy0tc21hbGwge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5mb290ZXJfX2l0ZW1zIC5saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZm9vdGVyX191cCB7XG4gICAgbWFyZ2luLXRvcDogLTIzcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/formacao/formacao.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/formacao/formacao.component.ts ***!
  \*****************************************************/
/*! exports provided: FormacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormacaoComponent", function() { return FormacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-mgl-timeline */ "./node_modules/angular-mgl-timeline/__ivy_ngcc__/fesm2015/angular-mgl-timeline.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function FormacaoComponent_mgl_timeline_entry_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.udemy);
} }
function FormacaoComponent_mgl_timeline_entry_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mgl-timeline-entry", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expand", function FormacaoComponent_mgl_timeline_entry_8_Template_mgl_timeline_entry_expand_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onExpandEntry($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mgl-timeline-entry-header", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormacaoComponent_mgl_timeline_entry_8_Template_mgl_timeline_entry_header_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onHeaderClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mgl-timeline-entry-content", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormacaoComponent_mgl_timeline_entry_8_div_10_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mgl-timeline-entry-dot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormacaoComponent_mgl_timeline_entry_8_Template_mgl_timeline_entry_dot_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onDotClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mgl-timeline-entry-side", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.languageId === "PT" ? entry_r1.header : entry_r1.headerEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expandAnimationTiming", ctx_r0.contentAnimation ? "200ms ease" : "0ms")("collapseAnimationTiming", ctx_r0.contentAnimation ? "100ms ease" : "0ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", entry_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", entry_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r1.cursos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r1.periodo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.color ? "primary" : "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r0.size)("expandAnimationTiming", ctx_r0.dotAnimation ? "200ms ease" : "0ms")("collapseAnimationTiming", ctx_r0.dotAnimation ? "100ms ease" : "0ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.languageId === "PT" ? entry_r1.years : entry_r1.yearsEN, " ");
} }
class FormacaoComponent {
    constructor(commonLanguage) {
        this.commonLanguage = commonLanguage;
        this.languageId = 'PT';
        this.alternate = true;
        this.toggle = true;
        this.color = false;
        this.size = 40;
        this.expandEnabled = true;
        this.contentAnimation = true;
        this.dotAnimation = true;
        this.side = 'right';
        this.entries = [
            {
                header: 'Análise e Desenvolvimento de Sistemas',
                headerEN: 'Analysis and systems development',
                company: 'Universidade Nove de Julho - Barra Funda',
                years: 'Formado - 2018',
                yearsEN: 'Graduated - 2018',
                periodo: '2016 - 2018',
                link: 'https://www.uninove.br/unidade/memorial/',
                logo: '/assets/logo-uninove.png'
            },
            {
                header: 'Pós Graduação em Desenvolvimento Web',
                headerEN: 'Post Graduation in Web Development',
                company: 'Universidade Nove de Julho - Barra Funda',
                years: 'Formado - 2019',
                yearsEN: 'Graduated - 2019',
                periodo: '2018 - 2019',
                link: 'https://www.uninove.br/unidade/memorial/',
                logo: 'https://i.ibb.co/qj5M4KM/logo-uninove.png'
            },
            {
                header: 'Inglês',
                headerEN: 'English',
                company: 'Lexis Idiomas',
                years: 'Formação - 2023',
                yearsEN: 'Graduated - 2023',
                periodo: '2019 - 2023',
                link: 'http://www.lexisidiomas.com/',
                logo: 'https://i.ibb.co/gDjtvVX/logo-lexis.png'
            },
            {
                header: 'Cursos Udemy',
                headerEN: 'Udemy Courses',
                company: 'Udemy',
                years: 'Formação - 2023',
                yearsEN: 'Graduated - 2023',
                periodo: null,
                link: 'https://www.udemy.com/',
                logo: 'https://i.ibb.co/ykQhbKd/logo-udemy.png',
                cursos: [
                    {
                        udemy: 'Inglês Extremo - Curso Completo do Zero à Fluência',
                    },
                    {
                        udemy: 'Curso de Desenvolvimento WEB com ES6, TypeScript e Angular',
                    },
                    {
                        udemy: 'Curso moderno com JavaScript',
                    },
                    {
                        udemy: 'Construindo Aplicações Web com Angular',
                    },
                    {
                        udemy: 'Desenvolvimento completo Web',
                    },
                    {
                        udemy: 'Web Developer',
                    },
                    {
                        udemy: 'PHP 7',
                    },
                    {
                        udemy: 'Designer Grafico (basico)',
                    },
                    {
                        udemy: 'Git e Git Hub',
                    },
                    {
                        udemy: 'WordPress para Desenvolvedores: Criação de Temas do Zero',
                    },
                ]
            }
        ];
    }
    ngOnInit() {
        this.commonLanguage.emitirlanguage.subscribe(ev => {
            this.languageId = ev;
        });
    }
    onHeaderClick(event) {
        if (!this.expandEnabled) {
            event.stopPropagation();
        }
    }
    onDotClick(event) {
        if (!this.expandEnabled) {
            event.stopPropagation();
        }
    }
    onExpandEntry(expanded, index) {
        console.log(`Expand status of entry #${index} changed to ${expanded}`);
    }
}
FormacaoComponent.ɵfac = function FormacaoComponent_Factory(t) { return new (t || FormacaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
FormacaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormacaoComponent, selectors: [["app-formacao"]], decls: 9, vars: 5, consts: [[1, "formacao"], [1, "container"], [1, "formacao__header"], [1, "title"], [1, "row"], [1, "time-line"], [3, "toggle", "alternate", "side"], [3, "expand", 4, "ngFor", "ngForOf"], [3, "expand"], [3, "click"], [3, "expandAnimationTiming", "collapseAnimationTiming"], [1, "company"], ["alt", "", 3, "src"], ["target", "_blank", 3, "href"], ["class", "cursos", 4, "ngFor", "ngForOf"], [1, "periodo"], [3, "size", "expandAnimationTiming", "collapseAnimationTiming", "click"], [1, "years"], [1, "cursos"]], template: function FormacaoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mgl-timeline", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormacaoComponent_mgl_timeline_entry_8_Template, 16, 14, "mgl-timeline-entry", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Forma\u00E7\u00E3o Acad\u00EAmica" : "Academic education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggle", ctx.toggle)("alternate", ctx.alternate)("side", ctx.side);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entries);
    } }, directives: [angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_2__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_2__["ɵb"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_2__["ɵd"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_2__["ɵc"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_2__["ɵe"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_2__["ɵf"]], styles: [".formacao[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  background: #f9f9f9;\n}\n.formacao__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.formacao__header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"Poppins\", sans-serif;\n  color: #0099b7;\n  font-weight: bold;\n}\n.formacao[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\n.formacao[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n.formacao[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.formacao[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  margin-left: 10px;\n}\n.formacao[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .periodo[_ngcontent-%COMP%] {\n  color: #0099b7;\n  text-align: center;\n  font-size: 14px;\n}\n.formacao[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n  padding: 20px 0;\n}\n.formacao[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .cursos[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.formacao[_ngcontent-%COMP%]   .time-line[_ngcontent-%COMP%]   .cursos[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n  list-style: circle;\n}\n  .mgl-timeline-entry-card {\n  border-radius: 11px;\n  transition: all 0.3s;\n}\n  .mgl-timeline-entry-card:hover {\n  transform: translate(0, -4px);\n  box-shadow: 0px 16px 9px 1px rgba(0, 0, 0, 0.2);\n}\n@media screen and (max-width: 600px) {\n  .formacao__header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb3JtYWNhby9DOlxcVXNlcnNcXFZpbmljaXVzZGFTaWx2YU9saXZlXFxEZXNrdG9wXFxteXBvcnRmb2xpby9zcmNcXGFwcFxcY29yZVxcZm9ybWFjYW9cXGZvcm1hY2FvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2Zvcm1hY2FvL2Zvcm1hY2FvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2Zvcm1hY2FvL0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNESjtBREVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxrQ0VSRjtFRlNFLGNFSEw7RUZJSyxpQkFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0FDQVI7QURDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0VoQjtBREVRO0VBQ0ksY0UxQkw7RUYyQkssa0JBQUE7RUFDQSxlQUFBO0FDQVo7QURFUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FaO0FER1k7RUFDSSxpQkFBQTtBQ0RoQjtBREVnQjtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBcEI7QURRSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUNMUjtBRE1RO0VBQ0ksNkJBQUE7RUFDQSwrQ0FBQTtBQ0paO0FEYUE7RUFHWTtJQUNJLGtCQUFBO0VDYmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9ybWFjYW8vZm9ybWFjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5mb3JtYWNhbyB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgJl9faGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aW1lLWxpbmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tcGFueSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wZXJpb2RvIHtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnllYXJzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXJzb3Mge1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIC5tZ2wtdGltZWxpbmUtZW50cnktY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWdsLXRpbWVsaW5lLWVudHJ5LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgLmFjY2VudCB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZm9ybWFjYW8ge1xyXG4gICAgICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmZvcm1hY2FvIHtcbiAgcGFkZGluZzogNjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuLmZvcm1hY2FvX19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb3JtYWNhb19faGVhZGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwOTliNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9ybWFjYW8gLnRpbWUtbGluZSB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbi5mb3JtYWNhbyAudGltZS1saW5lIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9ybWFjYW8gLnRpbWUtbGluZSAuY29tcGFueSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvcm1hY2FvIC50aW1lLWxpbmUgLmNvbXBhbnkgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5mb3JtYWNhbyAudGltZS1saW5lIC5wZXJpb2RvIHtcbiAgY29sb3I6ICMwMDk5Yjc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvcm1hY2FvIC50aW1lLWxpbmUgLnllYXJzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uZm9ybWFjYW8gLnRpbWUtbGluZSAuY3Vyc29zIHVsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uZm9ybWFjYW8gLnRpbWUtbGluZSAuY3Vyc29zIHVsIGxpIHtcbiAgbWFyZ2luOiAxMHB4IDVweDtcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xufVxuXG46Om5nLWRlZXAgLm1nbC10aW1lbGluZS1lbnRyeS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG46Om5nLWRlZXAgLm1nbC10aW1lbGluZS1lbnRyeS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XG4gIGJveC1zaGFkb3c6IDBweCAxNnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvcm1hY2FvX19oZWFkZXIgLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iLCIvLyBmb250c1xyXG4kT3BlblNhbnM6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbi8vQ29sb3JzXHJcbiRyZWRfZGFyazogI2E2MDE0MDtcclxuJGJsYWNrOiAjM2EzYTNhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMDA5OWI3O1xyXG5cclxuLy9Nb2JpbGVcclxuJGxpdHRsZTogMzIwcHg7XHJcbiRzbWFsbDogNDgwcHg7XHJcbiRtZWRpdW06IDc2OHB4O1xyXG4kbGFyZ2U6IDEwMjVweDtcclxuXHJcbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xyXG4gIEBpZiAkbWVkaWEgPT0gJHNtYWxsIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRtZWRpdW0ge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRsYXJnZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsYXJnZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbGl0dGxlIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGxpdHRsZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkdGFibGV0LXBvcnRyYWl0IHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4KSBhbmQgKG1heC13aWR0aDogNzY5KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormacaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formacao',
                templateUrl: './formacao.component.html',
                styleUrls: ['./formacao.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/knowledge/knowledge.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/knowledge/knowledge.component.ts ***!
  \*******************************************************/
/*! exports provided: KnowledgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeComponent", function() { return KnowledgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");



class KnowledgeComponent {
    constructor(commonLanguage) {
        this.commonLanguage = commonLanguage;
        this.languageId = 'PT';
    }
    ngOnInit() {
        this.commonLanguage.emitirlanguage.subscribe(ev => {
            this.languageId = ev;
        });
    }
}
KnowledgeComponent.ɵfac = function KnowledgeComponent_Factory(t) { return new (t || KnowledgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
KnowledgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnowledgeComponent, selectors: [["app-knowledge"]], decls: 65, vars: 1, consts: [[1, "guideline"], [1, "container"], [1, "guideline__title"], [1, "knowledge"], ["href", "https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5", "target", "_blank"], [1, "knowledge__item"], ["src", "https://i.ibb.co/K2LzyWJ/html.png", "alt", "html"], [1, "knowledge__item--description"], ["href", "https://developer.mozilla.org/pt-BR/docs/Archive/CSS3", "target", "_blank"], ["src", "https://i.ibb.co/QrFchvv/css.png", "alt", "css"], ["href", "https://sass-lang.com/", "target", "_blank"], ["src", "https://i.ibb.co/0czS0Hd/sass.png", "alt", "sass"], ["href", "https://getbootstrap.com/", "target", "_blank"], ["src", "https://i.ibb.co/ZTYRVFr/boot.jpg", "alt", "bootstrap"], ["href", "https://br.wordpress.com/", "target", "_blank"], ["src", "https://i.ibb.co/nbGZWty/wordpress.jpg", "alt", "wordpress"], ["href", "https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript", "target", "_blank"], ["src", "https://i.ibb.co/xmf8byt/js.png", "alt", "JavaScrypt"], ["href", "https://jquery.com/", "target", "_blank"], ["src", "https://i.ibb.co/8jR5yt5/jq.png", "alt", "jquery"], ["href", "https://nodejs.org/en/", "target", "_blank"], ["src", "https://i.ibb.co/P6GG3sm/node.jpg", "alt", "node"], ["href", "https://www.mysql.com/", "target", "_blank"], ["src", "https://i.ibb.co/WD97R0q/mysql.png", "alt", "mysql"], ["href", "https://gulpjs.com/", "target", "_blank"], ["src", "https://i.ibb.co/Dfn4qDT/gulp.png", "alt", "golp"], ["href", "https://angular.io/", "target", "_blank"], ["src", "https://i.ibb.co/DGxbLGN/angular.png", "alt", "angular"], ["href", "https://git-scm.com/", "target", "_blank"], ["src", "https://i.ibb.co/qmxd7sP/git.png", "alt", "git"]], template: function KnowledgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "SASS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "WordPress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Java Script");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Jquery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "MySql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Gulp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.languageId === "PT" ? "Conhecimentos" : "knowledge", " ");
    } }, styles: [".guideline[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n.guideline__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 36px;\n  color: #0099b7;\n  font-weight: bold;\n  margin-bottom: 30px;\n}\n.guideline[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.guideline[_ngcontent-%COMP%]   .knowledge[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.2s ease-in-out;\n  color: #0099b7;\n}\n.guideline[_ngcontent-%COMP%]   .knowledge__item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 27px;\n  position: relative;\n}\n.guideline[_ngcontent-%COMP%]   .knowledge__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  transition: width 0.3s;\n  width: 0%;\n  position: absolute;\n  bottom: -2px;\n  background-color: #0099b7;\n  height: 2px;\n  left: 0;\n}\n.guideline[_ngcontent-%COMP%]   .knowledge__item[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n}\n.guideline[_ngcontent-%COMP%]   .knowledge__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n.guideline[_ngcontent-%COMP%]   .knowledge__item--description[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10px 0;\n  color: #000;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9rbm93bGVkZ2UvQzpcXFVzZXJzXFxWaW5pY2l1c2RhU2lsdmFPbGl2ZVxcRGVza3RvcFxcbXlwb3J0Zm9saW8vc3JjXFxhcHBcXGNvcmVcXGtub3dsZWRnZVxca25vd2xlZGdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2tub3dsZWRnZS9rbm93bGVkZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUva25vd2xlZGdlL0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0FDREo7QURFSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtDRUxFO0VGTUYsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURDUTtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjRVZMO0FEV1A7QURFUTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQVo7QURDWTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkV2QlQ7RUZ3QlMsV0FBQTtFQUNBLE9BQUE7QUNDaEI7QURFZ0I7RUFDSSxXQUFBO0FDQXBCO0FER1k7RUFDSSxnQkFBQTtBQ0RoQjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9rbm93bGVkZ2Uva25vd2xlZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uZ3VpZGVsaW5lIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDk5Yjc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5rbm93bGVkZ2Uge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICA6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI3cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5ndWlkZWxpbmUge1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG4uZ3VpZGVsaW5lX190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICMwMDk5Yjc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmd1aWRlbGluZSAua25vd2xlZGdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmd1aWRlbGluZSAua25vd2xlZGdlIDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgY29sb3I6ICMwMDk5Yjc7XG59XG4uZ3VpZGVsaW5lIC5rbm93bGVkZ2VfX2l0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDI3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ndWlkZWxpbmUgLmtub3dsZWRnZV9faXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgd2lkdGg6IDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTliNztcbiAgaGVpZ2h0OiAycHg7XG4gIGxlZnQ6IDA7XG59XG4uZ3VpZGVsaW5lIC5rbm93bGVkZ2VfX2l0ZW06aG92ZXI6OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmd1aWRlbGluZSAua25vd2xlZGdlX19pdGVtIGltZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG4uZ3VpZGVsaW5lIC5rbm93bGVkZ2VfX2l0ZW0tLWRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMDtcbiAgY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iLCIvLyBmb250c1xyXG4kT3BlblNhbnM6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbi8vQ29sb3JzXHJcbiRyZWRfZGFyazogI2E2MDE0MDtcclxuJGJsYWNrOiAjM2EzYTNhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMDA5OWI3O1xyXG5cclxuLy9Nb2JpbGVcclxuJGxpdHRsZTogMzIwcHg7XHJcbiRzbWFsbDogNDgwcHg7XHJcbiRtZWRpdW06IDc2OHB4O1xyXG4kbGFyZ2U6IDEwMjVweDtcclxuXHJcbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xyXG4gIEBpZiAkbWVkaWEgPT0gJHNtYWxsIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRtZWRpdW0ge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRsYXJnZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsYXJnZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbGl0dGxlIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGxpdHRsZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkdGFibGV0LXBvcnRyYWl0IHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4KSBhbmQgKG1heC13aWR0aDogNzY5KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowledgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-knowledge',
                templateUrl: './knowledge.component.html',
                styleUrls: ['./knowledge.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/main-banner/main-banner.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/main-banner/main-banner.component.ts ***!
  \***********************************************************/
/*! exports provided: MainBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBannerComponent", function() { return MainBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav/nav.component */ "./src/app/core/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/core/about/about.component.ts");
/* harmony import */ var _formacao_formacao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../formacao/formacao.component */ "./src/app/core/formacao/formacao.component.ts");
/* harmony import */ var _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../knowledge/knowledge.component */ "./src/app/core/knowledge/knowledge.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/core/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");












function MainBannerComponent_app_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class MainBannerComponent {
    constructor(renderer, commonLanguage, router) {
        this.renderer = renderer;
        this.commonLanguage = commonLanguage;
        this.router = router;
        this.slideIndex = 0;
        this.languageId = 'PT';
    }
    ngOnInit() {
        this.loader = true;
        setTimeout(() => {
            this.loader = false;
        }, 2000);
        this.showSlides();
        this.commonLanguage.emitirlanguage.subscribe(ev => {
            this.languageId = ev;
        });
        this.commonLanguage.emitirId.subscribe(ev => {
            this.scrollToElement(ev);
        });
    }
    scrollToElement(e) {
        if (document.getElementById(e)) {
            let classe;
            classe = e;
            window.scroll({
                top: document.getElementById(classe).offsetTop,
                left: 0,
                behavior: 'smooth',
            });
            console.log(document.getElementById(classe));
        }
    }
    showSlides() {
        let i;
        let slides = document.getElementsByClassName('mySlides');
        for (i = 0; i < slides.length; i++) {
            this.renderer.setStyle(slides[i], 'display', 'none');
            this.renderer.removeClass(slides[i], 'animation');
        }
        this.slideIndex++;
        if (this.slideIndex > slides.length) {
            this.slideIndex = 1;
        }
        this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
        this.renderer.addClass(slides[this.slideIndex - 1], 'animation');
        setTimeout(() => {
            this.showSlides();
        }, 6000);
    }
    onClick() {
        console.log("foi");
        this.router.navigate(['https://drive.google.com/file/d/1jCc-m24HaUbHHV6iilLJCcp4W064YnuU/view?usp=sharing']);
    }
}
MainBannerComponent.ɵfac = function MainBannerComponent_Factory(t) { return new (t || MainBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MainBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBannerComponent, selectors: [["app-main-banner"]], decls: 55, vars: 3, consts: [[4, "ngIf"], ["id", "main", 1, "main"], [1, "main__img"], [1, "main__menu"], [1, "main__color"], [1, "main__perfil"], [1, "main__perfil--description"], ["href", "https://www.linkedin.com/in/vinicius-oliveira-89149b136/", "target", "_blank"], ["src", "https://i.ibb.co/cD3J7v1/perfil.jpg", "alt", "logo"], [1, "button"], ["href", "https://drive.google.com/file/d/1jCc-m24HaUbHHV6iilLJCcp4W064YnuU/view", "target", "_blank", 1, "button__btn"], [1, "slideshow-container"], [1, "mySlides"], [1, "title"], [1, "description"], ["id", "about"], ["id", "academic"], ["id", "knowledge"], ["id", "contact"], ["id", "footer"]], template: function MainBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainBannerComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vinicius Oliveira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bruno Alves - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Senior Deloitte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\"O Vinicius tem seus objetivos claramente definidos, est\u00E1 sempre em busca de aprendizagem e de solu\u00E7\u00F5es eficientes para compartilhar com os membros da equipe\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ravi Queiroz - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Designer Bit Seguros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\"\u00D3timo profissional, do mesmo jeito que enviei o layout o Vinicius fez conforme enviei\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Andre Nascimento Freitas - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pleno Itau Unibanco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\"Profissioional dedicado, entrega sempre nos prazo estipulado, compartilha conhecimento e aprende muito rapido\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Danrley Candido - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Pleno Bit Pagg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\"Um excelente profissional, acompanho desde o inicio da carreira a competencia e a dedica\u00E7\u00E3o.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-formacao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.languageId === "PT" ? "Desenvolvedor Front End" : "Front End Developer", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Baixar Curr\u00EDculo" : "Download Curriculum");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _formacao_formacao_component__WEBPACK_IMPORTED_MODULE_6__["FormacaoComponent"], _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_7__["KnowledgeComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main__img[_ngcontent-%COMP%] {\n  background-image: url(\"https://i.ibb.co/dGVCcTt/main-banner.png\");\n  position: relative;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  height: 100vh;\n}\n.main__color[_ngcontent-%COMP%] {\n  background-color: rgba(24, 23, 22, 0.7);\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.main__color[_ngcontent-%COMP%]::before {\n  content: \" { \";\n  position: absolute;\n  left: 32%;\n  font-size: 8em;\n  color: #0099b7;\n}\n@media screen and (max-width: 800px) {\n  .main__color::before {\n    left: 25%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .main__color::before {\n    left: 25%;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .main__color::before {\n    left: 25%;\n    bottom: 39%;\n  }\n}\n@media screen and (max-width: 1440px) {\n  .main__color::before {\n    left: 34%;\n  }\n}\n@media screen and (max-width: 1600px) {\n  .main__color::before {\n    left: 37%;\n    bottom: 30%;\n  }\n}\n@media screen and (min-width: 1366px) {\n  .main__color::before {\n    bottom: 32%;\n    bottom: 30%;\n  }\n}\n.main__color::after {\n  content: \" } \";\n  position: absolute;\n  right: 32%;\n  font-size: 8em;\n  color: #0099b7;\n}\n@media screen and (min-width: 800px) {\n  .main__color[_ngcontent-%COMP%]::after {\n    right: 28%;\n    bottom: 30%;\n  }\n}\n@media screen and (min-width: 1024px) {\n  .main__color[_ngcontent-%COMP%]::after {\n    right: 30%;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .main__color[_ngcontent-%COMP%]::after {\n    right: 29%;\n  }\n}\n@media screen and (max-width: 1366px) {\n  .main__color[_ngcontent-%COMP%]::after {\n    right: 29%;\n    bottom: 32%;\n  }\n}\n@media screen and (min-width: 1440px) {\n  .main__color[_ngcontent-%COMP%]::after {\n    right: 32%;\n    bottom: 29%;\n  }\n}\n@media screen and (min-width: 1600px) {\n  .main__color[_ngcontent-%COMP%]::after {\n    right: 34%;\n    bottom: 30%;\n  }\n}\n.main__perfil[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.main__perfil--description[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.main__perfil--description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  margin-bottom: 30px;\n}\n.main__perfil--description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  text-align: center;\n  font-weight: 900;\n  margin-bottom: 30px;\n  white-space: nowrap;\n}\n.main__perfil--description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  margin-bottom: 30px;\n  white-space: nowrap;\n}\n.main__perfil[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.main__perfil[_ngcontent-%COMP%]   .button__btn[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  padding: 15px 30px;\n  border: solid 1px #fff;\n  border-radius: 4px;\n  font-family: \"Poppins\", sans-serif;\n  transition: all 0.3s;\n  position: absolute;\n}\n.main__perfil[_ngcontent-%COMP%]   .button__btn[_ngcontent-%COMP%]:hover {\n  background-color: #0099b7;\n  color: #000;\n  border: none;\n  transform: translate(0, -4px);\n  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);\n}\n.main__menu[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  position: absolute;\n  top: 15px;\n  flex-direction: column;\n}\n.slideshow-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  position: absolute;\n  bottom: 15px;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  padding: 30px;\n  width: 100%;\n}\n.mySlides[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.mySlides[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: \"Poppins\", sans-serif;\n  color: #0099b7;\n  margin-bottom: 10px;\n  text-align: center;\n}\n.mySlides[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.mySlides[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: center;\n}\n.animation[_ngcontent-%COMP%] {\n  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n@-webkit-keyframes slide-left {\n  0% {\n    transform: translateX(500px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes slide-left {\n  0% {\n    transform: translateX(500px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@media screen and (max-width: 1440px) {\n  .main__perfil[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n}\n@media screen and (max-width: 1400px) {\n  .main__perfil--description[_ngcontent-%COMP%] {\n    margin-top: -50%;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 1280px) {\n  .slideshow-container[_ngcontent-%COMP%] {\n    padding: 0px 30px;\n  }\n  .slideshow-container[_ngcontent-%COMP%]   .mySlides[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .main__img[_ngcontent-%COMP%] {\n    background-position: 46%;\n  }\n  .main__color[_ngcontent-%COMP%]::before {\n    left: 21%;\n    bottom: 31%;\n    font-size: 10em;\n  }\n  .main__color[_ngcontent-%COMP%]::after {\n    right: 21%;\n    bottom: 31%;\n    font-size: 10em;\n  }\n  .main__perfil[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n  .main__perfil--description[_ngcontent-%COMP%] {\n    margin-top: 0%;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n  .main[_ngcontent-%COMP%]   .slideshow-container[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .main__img[_ngcontent-%COMP%] {\n    background-position: 79%;\n  }\n  .main__color[_ngcontent-%COMP%]::before {\n    left: 1%;\n    bottom: 38%;\n  }\n  .main__color[_ngcontent-%COMP%]::after {\n    right: 1%;\n    bottom: 38%;\n  }\n  .main__perfil[_ngcontent-%COMP%] {\n    width: 200px;\n    margin-top: -80px;\n  }\n  .main__perfil--description[_ngcontent-%COMP%] {\n    margin-top: -49%;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .main__perfil--description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .main[_ngcontent-%COMP%]   .slideshow-container[_ngcontent-%COMP%] {\n    padding: 0 10px 18vw;\n  }\n  .main[_ngcontent-%COMP%]   .slideshow-container[_ngcontent-%COMP%]   .mySlides[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tYWluLWJhbm5lci9DOlxcVXNlcnNcXFZpbmljaXVzZGFTaWx2YU9saXZlXFxEZXNrdG9wXFxteXBvcnRmb2xpby9zcmNcXGFwcFxcY29yZVxcbWFpbi1iYW5uZXJcXG1haW4tYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL21haW4tYmFubmVyL21haW4tYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL21haW4tYmFubmVyL0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7QURFSTtFQUNJLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUNBUjtBREVJO0VBQ0ksdUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0FSO0FEQ1E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGNFbkJMO0FEb0JQO0FEQ1k7RUFQSjtJQVFRLFNBQUE7RUNFZDtBQUNGO0FERFk7RUFWSjtJQVdRLFNBQUE7RUNJZDtBQUNGO0FESFk7RUFiSjtJQWNRLFNBQUE7SUFDQSxXQUFBO0VDTWQ7QUFDRjtBRExZO0VBakJKO0lBa0JRLFNBQUE7RUNRZDtBQUNGO0FEUFk7RUFwQko7SUFxQlEsU0FBQTtJQUNBLFdBQUE7RUNVZDtBQUNGO0FEVFk7RUF4Qko7SUF5QlEsV0FBQTtJQUNBLFdBQUE7RUNZZDtBQUNGO0FEVlE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNFaERMO0FENERQO0FEVlk7RUFQSjtJQVFRLFVBQUE7SUFDQSxXQUFBO0VDYWQ7QUFDRjtBRFpZO0VBWEo7SUFZUSxVQUFBO0VDZWQ7QUFDRjtBRGRZO0VBZEo7SUFlUSxVQUFBO0VDaUJkO0FBQ0Y7QURoQlk7RUFqQko7SUFrQlEsVUFBQTtJQUNBLFdBQUE7RUNtQmQ7QUFDRjtBRGxCWTtFQXJCSjtJQXNCUSxVQUFBO0lBQ0EsV0FBQTtFQ3FCZDtBQUNGO0FEcEJZO0VBekJKO0lBMEJRLFVBQUE7SUFDQSxXQUFBO0VDdUJkO0FBQ0Y7QURwQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3NCUjtBRHJCUTtFQUNJLGtCQUFBO0FDdUJaO0FEckJZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ3VCaEI7QURyQlk7RUFDSSxlQUFBO0VBQ0EsV0V4RlI7RUZ5RlEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUN1QmhCO0FEckJZO0VBQ0ksZUFBQTtFQUNBLFdFaEdSO0VGaUdRLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3VCaEI7QURuQlE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNxQlo7QURwQlk7RUFDSSx1QkFBQTtFQUNBLFdFNUdSO0VGNkdRLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDRXJITjtFRnNITSxvQkFBQTtFQUNBLGtCQUFBO0FDc0JoQjtBRHJCZ0I7RUFDSSx5QkVuSGI7RUZvSGEsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0FDdUJwQjtBRGxCSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUNvQlI7QURoQkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ21CSjtBRGhCQTtFQUNJLFVBQUE7QUNtQko7QURsQkk7RUFDSSxlQUFBO0VBQ0Esa0NFM0pFO0VGNEpGLGNFdEpEO0VGdUpDLG1CQUFBO0VBQ0Esa0JBQUE7QUNvQlI7QURuQlE7RUFDSSxrQkFBQTtBQ3FCWjtBRGxCSTtFQUNJLFdFL0pBO0VGZ0tBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDb0JSO0FEaEJBO0VBQ0ksNEVBQUE7RUFDQSxvRUFBQTtBQ21CSjtBRGpCQTtFQUNJO0lBRUksNEJBQUE7RUNvQk47RURsQkU7SUFFSSx3QkFBQTtFQ29CTjtBQUNGO0FEbEJBO0VBQ0k7SUFFSSw0QkFBQTtFQ29CTjtFRGxCRTtJQUVJLHdCQUFBO0VDb0JOO0FBQ0Y7QURqQkE7RUFFUTtJQUNJLFlBQUE7RUNrQlY7QUFDRjtBRGRBO0VBR1k7SUFDSSxnQkFBQTtFQ2NkO0VEYmM7SUFDSSxtQkFBQTtFQ2VsQjtFRGJjO0lBQ0ksbUJBQUE7RUNlbEI7RURiYztJQUNJLG1CQUFBO0VDZWxCO0FBQ0Y7QURUQTtFQUNJO0lBQ0ksaUJBQUE7RUNXTjtFRFZNO0lBQ0ksVUFBQTtFQ1lWO0FBQ0Y7QURSQTtFQUVRO0lBQ0ksd0JBQUE7RUNTVjtFRE5VO0lBQ0ksU0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDUWQ7RUROVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ1FkO0VETE07SUFDSSxZQUFBO0VDT1Y7RUROVTtJQUNJLGNBQUE7RUNRZDtFRFBjO0lBQ0ksbUJBQUE7RUNTbEI7RURQYztJQUNJLG1CQUFBO0VDU2xCO0VEUGM7SUFDSSxtQkFBQTtFQ1NsQjtFRExNO0lBQ0ksb0JBQUE7RUNPVjtBQUNGO0FESEE7RUFFUTtJQUNJLHdCQUFBO0VDSVY7RUREVTtJQUNJLFFBQUE7SUFDQSxXQUFBO0VDR2Q7RUREVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDR2Q7RURBTTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtFQ0VWO0VERFU7SUFDSSxnQkFBQTtFQ0dkO0VERmM7SUFDSSxtQkFBQTtFQ0lsQjtFREZjO0lBQ0ksbUJBQUE7RUNJbEI7RURGYztJQUNJLG1CQUFBO0VDSWxCO0VEQU07SUFDSSxvQkFBQTtFQ0VWO0VERFU7SUFDSSxXQUFBO0VDR2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbWFpbi1iYW5uZXIvbWFpbi1iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJl9faW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2kuaWJiLmNvL2RHVkNjVHQvbWFpbi1iYW5uZXIucG5nXCIpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICAmX19jb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNCwgMjMsIDIyLCAwLjcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIHsgXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMzIlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDhlbTtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAvLyBib3R0b206IDI5JTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzklO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzQlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMzclO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAzMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDMyJTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCIgfSBcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMzIlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDhlbTtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAvLyBib3R0b206IDI5JTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyOCU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDMwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjklO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI5JTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzIlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMyJTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMjklO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM0JTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fcGVyZmlsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgJi0tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAmX19idG4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fbWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zbGlkZXNob3ctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm15U2xpZGVzIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcclxuICAgIGFuaW1hdGlvbjogc2xpZGUtbGVmdCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5tYWluIHtcclxuICAgICAgICAmX19wZXJmaWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgIC5tYWluIHtcclxuICAgICAgICAmX19wZXJmaWwge1xyXG4gICAgICAgICAgICAmLS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTAlO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuc2xpZGVzaG93LWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgLm15U2xpZGVzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubWFpbiB7XHJcbiAgICAgICAgJl9faW1nIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDYlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19jb2xvciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMSU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDMxJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjElO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAzMSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcGVyZmlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICAmLS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWRlc2hvdy1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubWFpbiB7XHJcbiAgICAgICAgJl9faW1nIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzklO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX19jb2xvciB7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxJTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzglO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzglO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX3BlcmZpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTgwcHg7XHJcbiAgICAgICAgICAgICYtLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00OSU7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zbGlkZXNob3ctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDE4dnc7XHJcbiAgICAgICAgICAgIC5teVNsaWRlcyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fX2ltZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaS5pYmIuY28vZEdWQ2NUdC9tYWluLWJhbm5lci5wbmdcIik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5tYWluX19jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDIzLCAyMiwgMC43KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWFpbl9fY29sb3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIHsgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzIlO1xuICBmb250LXNpemU6IDhlbTtcbiAgY29sb3I6ICMwMDk5Yjc7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubWFpbl9fY29sb3I6OmJlZm9yZSB7XG4gICAgbGVmdDogMjUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1haW5fX2NvbG9yOjpiZWZvcmUge1xuICAgIGxlZnQ6IDI1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5tYWluX19jb2xvcjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAyNSU7XG4gICAgYm90dG9tOiAzOSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAubWFpbl9fY29sb3I6OmJlZm9yZSB7XG4gICAgbGVmdDogMzQlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLm1haW5fX2NvbG9yOjpiZWZvcmUge1xuICAgIGxlZnQ6IDM3JTtcbiAgICBib3R0b206IDMwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIC5tYWluX19jb2xvcjo6YmVmb3JlIHtcbiAgICBib3R0b206IDMyJTtcbiAgICBib3R0b206IDMwJTtcbiAgfVxufVxuLm1haW5fX2NvbG9yOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIH0gXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMyJTtcbiAgZm9udC1zaXplOiA4ZW07XG4gIGNvbG9yOiAjMDA5OWI3O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLm1haW5fX2NvbG9yOjphZnRlciB7XG4gICAgcmlnaHQ6IDI4JTtcbiAgICBib3R0b206IDMwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluX19jb2xvcjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAzMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubWFpbl9fY29sb3I6OmFmdGVyIHtcbiAgICByaWdodDogMjklO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLm1haW5fX2NvbG9yOjphZnRlciB7XG4gICAgcmlnaHQ6IDI5JTtcbiAgICBib3R0b206IDMyJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIC5tYWluX19jb2xvcjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAzMiU7XG4gICAgYm90dG9tOiAyOSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAubWFpbl9fY29sb3I6OmFmdGVyIHtcbiAgICByaWdodDogMzQlO1xuICAgIGJvdHRvbTogMzAlO1xuICB9XG59XG4ubWFpbl9fcGVyZmlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbl9fcGVyZmlsLS1kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX19wZXJmaWwtLWRlc2NyaXB0aW9uIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5tYWluX19wZXJmaWwtLWRlc2NyaXB0aW9uIGgxIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1haW5fX3BlcmZpbC0tZGVzY3JpcHRpb24gaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ubWFpbl9fcGVyZmlsIC5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYWluX19wZXJmaWwgLmJ1dHRvbl9fYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLm1haW5fX3BlcmZpbCAuYnV0dG9uX19idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWI3O1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLm1haW5fX21lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zbGlkZXNob3ctY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15U2xpZGVzIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5teVNsaWRlcyAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDk5Yjc7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5teVNsaWRlcyAudGl0bGUgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5teVNsaWRlcyAuZGVzY3JpcHRpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYW5pbWF0aW9uIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1sZWZ0IDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5tYWluX19wZXJmaWwge1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gIC5tYWluX19wZXJmaWwtLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAtNTAlO1xuICB9XG4gIC5tYWluX19wZXJmaWwtLWRlc2NyaXB0aW9uIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAubWFpbl9fcGVyZmlsLS1kZXNjcmlwdGlvbiBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAubWFpbl9fcGVyZmlsLS1kZXNjcmlwdGlvbiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5zbGlkZXNob3ctY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgfVxuICAuc2xpZGVzaG93LWNvbnRhaW5lciAubXlTbGlkZXMge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluX19pbWcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2JTtcbiAgfVxuICAubWFpbl9fY29sb3I6OmJlZm9yZSB7XG4gICAgbGVmdDogMjElO1xuICAgIGJvdHRvbTogMzElO1xuICAgIGZvbnQtc2l6ZTogMTBlbTtcbiAgfVxuICAubWFpbl9fY29sb3I6OmFmdGVyIHtcbiAgICByaWdodDogMjElO1xuICAgIGJvdHRvbTogMzElO1xuICAgIGZvbnQtc2l6ZTogMTBlbTtcbiAgfVxuICAubWFpbl9fcGVyZmlsIHtcbiAgICB3aWR0aDogMjgwcHg7XG4gIH1cbiAgLm1haW5fX3BlcmZpbC0tZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICB9XG4gIC5tYWluX19wZXJmaWwtLWRlc2NyaXB0aW9uIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAubWFpbl9fcGVyZmlsLS1kZXNjcmlwdGlvbiBoMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAubWFpbl9fcGVyZmlsLS1kZXNjcmlwdGlvbiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuICAubWFpbiAuc2xpZGVzaG93LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluX19pbWcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDc5JTtcbiAgfVxuICAubWFpbl9fY29sb3I6OmJlZm9yZSB7XG4gICAgbGVmdDogMSU7XG4gICAgYm90dG9tOiAzOCU7XG4gIH1cbiAgLm1haW5fX2NvbG9yOjphZnRlciB7XG4gICAgcmlnaHQ6IDElO1xuICAgIGJvdHRvbTogMzglO1xuICB9XG4gIC5tYWluX19wZXJmaWwge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tdG9wOiAtODBweDtcbiAgfVxuICAubWFpbl9fcGVyZmlsLS1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogLTQ5JTtcbiAgfVxuICAubWFpbl9fcGVyZmlsLS1kZXNjcmlwdGlvbiBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLm1haW5fX3BlcmZpbC0tZGVzY3JpcHRpb24gaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLm1haW5fX3BlcmZpbC0tZGVzY3JpcHRpb24gaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLm1haW4gLnNsaWRlc2hvdy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMTBweCAxOHZ3O1xuICB9XG4gIC5tYWluIC5zbGlkZXNob3ctY29udGFpbmVyIC5teVNsaWRlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iLCIvLyBmb250c1xyXG4kT3BlblNhbnM6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbi8vQ29sb3JzXHJcbiRyZWRfZGFyazogI2E2MDE0MDtcclxuJGJsYWNrOiAjM2EzYTNhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMDA5OWI3O1xyXG5cclxuLy9Nb2JpbGVcclxuJGxpdHRsZTogMzIwcHg7XHJcbiRzbWFsbDogNDgwcHg7XHJcbiRtZWRpdW06IDc2OHB4O1xyXG4kbGFyZ2U6IDEwMjVweDtcclxuXHJcbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xyXG4gIEBpZiAkbWVkaWEgPT0gJHNtYWxsIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRtZWRpdW0ge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRsYXJnZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsYXJnZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbGl0dGxlIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGxpdHRsZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkdGFibGV0LXBvcnRyYWl0IHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4KSBhbmQgKG1heC13aWR0aDogNzY5KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-banner',
                templateUrl: './main-banner.component.html',
                styleUrls: ['./main-banner.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_button_burger_button_burger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/button-burger/button-burger.component */ "./src/app/shared/components/button-burger/button-burger.component.ts");





function NavComponent_div_0_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_0_li_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onChangeLanguage(item_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r3.languageId == item_r4.id ? "rgba(24, 23, 22, 0.7)" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.legend);
} }
function NavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LinkedIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavComponent_div_0_li_21_Template, 5, 5, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.languague);
} }
function NavComponent_div_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_1_li_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onChangeLanguage(item_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r7.languageId == item_r8.id ? "rgba(24, 23, 22, 0.7)" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.id);
} }
function NavComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavComponent_div_1_li_2_Template, 5, 5, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-button-burger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "LinkedIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Github");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.languague);
} }
function NavComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-button-burger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor(commonLanguage) {
        this.commonLanguage = commonLanguage;
        this.mudarIdioma = false;
        this.languageId = 'PT';
        this.topPosToStartShowing = 110;
        this.languague = [
            {
                id: 'PT',
                img: 'https://i.ibb.co/0ZsX49C/bandeira-PT.jpg',
                legend: 'Português',
            },
            {
                id: 'EN',
                img: 'https://i.ibb.co/M6wNVkf/bandeira-ENG.jpg',
                legend: 'English',
            }
        ];
    }
    ngOnInit() {
        this.showButton = false;
        this.checkScroll();
    }
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.showButton = true;
        }
        else {
            this.showButton = false;
        }
    }
    onChangeLanguage(ev) {
        this.languageId = ev;
        this.mudarIdioma = this.commonLanguage.changeLanguage(ev);
    }
    scrollToElement(eve) {
        let sendServer;
        sendServer = this.commonLanguage.scrollToElement(eve);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler() { return ctx.checkScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 17, vars: 7, consts: [["class", "idioma", 4, "ngIf"], ["class", "headerComponent", "id", "menuFixo", 4, "ngIf"], ["class", "hidden-lg hidden-md col-sm-2 col-xs-2 positionMenu", 4, "ngIf"], [1, "menu", "hidden-sm", "hidden-xs"], [3, "click"], [1, "idioma"], ["href", "https://www.linkedin.com/in/vinicius-oliveira-89149b136/", "target", "_blank", "rel", "noopener", "aria-label", "LinkedIn"], [1, "icon", "icon--linkedin"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "viewBox", "0 0 30 30", "preserveAspectRatio", "xMinYMin meet"], ["fill", "#0084B1", "cx", "15", "cy", "15", "r", "15"], ["fill", "#FFF", "d", "M9.63 7.936c-.941 0-1.71.762-1.71 1.696 0 .963.794 1.719 1.699 1.7.891.021 1.703-.716 1.705-1.694A1.706 1.706 0 0 0 9.63 7.936z"], ["fill", "#FFF", "d", "M8.626 12.632a.468.468 0 0 0-.468.468v8.494c0 .258.21.468.468.468h1.991a.468.468 0 0 0 .468-.468V13.1a.469.469 0 0 0-.468-.468H8.626z"], ["fill", "#FFF", "d", "M18.855 12.391h-.511a2.863 2.863 0 0 0-2.51 1.481l-.026-.004v-1.042a.194.194 0 0 0-.194-.194H13.13a.194.194 0 0 0-.194.194v9.041c0 .107.087.194.194.194l2.538.001a.194.194 0 0 0 .194-.194v-5.224c0-.903.72-1.653 1.623-1.663a1.638 1.638 0 0 1 1.661 1.642v5.245c0 .107.087.194.194.194h2.545a.194.194 0 0 0 .194-.194v-6.254a3.223 3.223 0 0 0-3.224-3.223z"], ["href", "https://github.com/vinisilvaoliveira", "target", "_blank", "rel", "noopener", "aria-label", "GitHub"], [1, "icon", "icon--github"], ["d", "M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm2.85 23.761c-.457.088-.619-.192-.619-.433 0-.295.011-1.266.011-2.469 0-.84-.288-1.389-.611-1.667 2.005-.223 4.109-.984 4.109-4.441 0-.983-.348-1.786-.925-2.415.093-.228.401-1.143-.09-2.382 0 0-.754-.242-2.472.923A8.64 8.64 0 0 0 15 10.574a8.586 8.586 0 0 0-2.253.303c-1.719-1.165-2.475-.923-2.475-.923-.49 1.239-.181 2.154-.088 2.382a3.476 3.476 0 0 0-.926 2.415c0 3.449 2.101 4.221 4.099 4.448-.257.225-.49.622-.571 1.203-.513.23-1.816.628-2.619-.748 0 0-.475-.864-1.379-.927 0 0-.879-.011-.062.547 0 0 .59.277.999 1.316 0 0 .528 1.75 3.032 1.206.004.751.012 1.317.012 1.531 0 .238-.164.516-.614.434A8.998 8.998 0 0 1 6 15.223a9 9 0 0 1 18 0 9.001 9.001 0 0 1-6.15 8.538z"], ["fill", "#FFF", "d", "M14.999 6.222C10.03 6.222 6 10.252 6 15.223a9 9 0 0 0 6.155 8.539c.45.083.614-.195.614-.434 0-.214-.008-.78-.012-1.531-2.503.544-3.032-1.206-3.032-1.206-.409-1.04-.999-1.316-.999-1.316-.817-.558.062-.547.062-.547.903.064 1.379.927 1.379.927.803 1.375 2.106.978 2.619.748.082-.582.314-.978.571-1.203-1.998-.227-4.099-.999-4.099-4.448 0-.983.351-1.786.926-2.415-.093-.228-.401-1.143.088-2.382 0 0 .756-.242 2.475.923A8.628 8.628 0 0 1 15 10.575a8.597 8.597 0 0 1 2.253.303c1.718-1.165 2.472-.923 2.472-.923.491 1.239.182 2.154.09 2.382.577.629.925 1.432.925 2.415 0 3.457-2.104 4.218-4.109 4.441.323.278.611.827.611 1.667 0 1.203-.011 2.174-.011 2.469 0 .241.162.521.619.433a9.001 9.001 0 0 0-2.851-17.54z"], [4, "ngFor", "ngForOf"], [1, "btn", 3, "id", "click"], ["alt", "", 3, "src"], ["id", "menuFixo", 1, "headerComponent"], [1, "languages"], [1, "hidden-lg", "hidden-md", "col-sm-2", "col-xs-2", "positionMenu"], [1, "networks"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavComponent_div_0_Template, 22, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_div_1_Template, 24, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_5_listener() { return ctx.scrollToElement("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_8_listener() { return ctx.scrollToElement("academic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_11_listener() { return ctx.scrollToElement("knowledge"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_14_listener() { return ctx.scrollToElement("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Sobre" : "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Forma\u00E7\u00E3o" : "Academic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Conhecimentos" : "Knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Contato" : "Contact");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_components_button_burger_button_burger_component__WEBPACK_IMPORTED_MODULE_3__["ButtonBurgerComponent"]], styles: [".idioma[_ngcontent-%COMP%] {\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n}\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n}\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 7px;\n}\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n}\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #0099b7;\n}\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.menu[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 100;\n  background-color: rgba(24, 23, 22, 0.7);\n  text-align: center;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  list-style: none;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 15px 30px;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0099b7;\n  font-size: 20px;\n  position: relative;\n  font-weight: 700;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  transition: width 0.3s;\n  width: 0%;\n  position: absolute;\n  bottom: -2px;\n  background-color: #fff;\n  height: 2px;\n  left: 0;\n}\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  width: 100%;\n}\n#menuFixo[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n#menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  top: 30px;\n  display: flex;\n  flex-direction: column;\n}\n#menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 5px 0px;\n  display: flex;\n  align-items: center;\n}\n#menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 7px;\n}\n#menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0099b7;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n}\n#menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n#menuFixo[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 30px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n}\n#menuFixo[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 5px 0px;\n  display: flex;\n  align-items: center;\n}\n#menuFixo[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#menuFixo[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 7px;\n}\n#menuFixo[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0099b7;\n  font-weight: bold;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n}\n#menuFixo[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n@media screen and (max-width: 768px) {\n  #menuFixo[_ngcontent-%COMP%] {\n    z-index: 10;\n    background: rgba(0, 0, 0, 0.7);\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: -7px;\n    display: flex;\n    justify-content: space-between;\n  }\n  #menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%] {\n    display: flex;\n    width: 63%;\n    position: initial;\n    flex-direction: initial;\n    top: initial;\n    left: initial;\n    padding: inherit;\n  }\n  #menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 8px 64px;\n  }\n  #menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #fff;\n  }\n  #menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n    color: #0099b7;\n  }\n  #menuFixo[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%] {\n    display: flex;\n    width: 50%;\n    justify-content: space-around;\n    position: initial;\n    flex-direction: initial;\n    top: initial;\n    left: initial;\n    padding: inherit;\n  }\n\n  .headerButons[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .positionMenu[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    z-index: 101;\n    width: 100%;\n    right: 20px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .positionMenu[_ngcontent-%COMP%] {\n    right: 4px;\n    top: 4px;\n  }\n\n  #menuFixo[_ngcontent-%COMP%] {\n    z-index: 10;\n    background: rgba(0, 0, 0, 0.7);\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: -7px;\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 0;\n  }\n  #menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  #menuFixo[_ngcontent-%COMP%]   .languages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 7px;\n    width: 70px;\n  }\n  #menuFixo[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%] {\n    display: flex;\n    width: 50%;\n    justify-content: space-around;\n    position: initial;\n    flex-direction: initial;\n    top: initial;\n    left: initial;\n    padding: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXYvQzpcXFVzZXJzXFxWaW5pY2l1c2RhU2lsdmFPbGl2ZVxcRGVza3RvcFxcbXlwb3J0Zm9saW8vc3JjXFxhcHBcXGNvcmVcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvbmF2L0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDREo7QURFSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQ0FSO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VoQjtBRERnQjtFQUNJLGlCQUFBO0FDR3BCO0FERGdCO0VBQ0ksV0VkWjtFRmVZLGtDRXBCVjtFRnFCVSxlQUFBO0FDR3BCO0FERm9CO0VBQ0kseUJFakJqQjtBRHFCUDtBREFZO0VBQ0ksZUFBQTtBQ0VoQjtBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FDQUo7QURDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURBUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNFWjtBRERZO0VBQ0ksY0UxQ1Q7RUYyQ1MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7QURGZ0I7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ0lwQjtBRERvQjtFQUNJLFdBQUE7QUNHeEI7QURLQTtFQUNJLFdBQUE7QUNGSjtBRElJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRlI7QURHUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNEWjtBREVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksaUJBQUE7QUNDcEI7QURDZ0I7RUFDSSxjRXZGYjtFRndGYSxpQkFBQTtFQUNBLGtDRS9GVjtFRmdHVSxlQUFBO0FDQ3BCO0FEQW9CO0VBQ0ksV0FBQTtBQ0V4QjtBRElJO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FER1E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRFo7QURFWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0FoQjtBRENnQjtFQUNJLGlCQUFBO0FDQ3BCO0FEQ2dCO0VBQ0ksY0VySGI7RUZzSGEsaUJBQUE7RUFDQSxrQ0U3SFY7RUY4SFUsZUFBQTtBQ0NwQjtBREFvQjtFQUNJLFdBQUE7QUNFeEI7QURNQTtFQUlJO0lBQ0ksV0FBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFQ05OO0VET007SUFDSSxhQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VDTFY7RURPYztJQUNJLGlCQUFBO0VDTGxCO0VETWtCO0lBQ0ksV0U1SmhCO0VEd0pOO0VES3NCO0lBQ0ksY0U3SnJCO0VEMEpMO0VEU007SUFDSSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDZCQUFBO0lBQ0EsaUJBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUNQVjs7RURVRTtJQUNJLGFBQUE7RUNQTjs7RURTRTtJQUNJLGFBQUE7SUFDQSx5QkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VDTk47QUFDRjtBRFNBO0VBSWdCO0lBQ0ksZUFBQTtFQ1ZsQjs7RURlRTtJQUNJLFVBQUE7SUFDQSxRQUFBO0VDWk47O0VEY0U7SUFDSSxXQUFBO0lBQ0EsOEJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsY0FBQTtFQ1hOO0VEWU07SUFDSSxVQUFBO0VDVlY7RURZYztJQUNJLFlBQUE7SUFDQSxXQUFBO0VDVmxCO0VEY007SUFDSSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDZCQUFBO0lBQ0EsaUJBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUNaVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uaWRpb21hIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkUG9wcGlucztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubWVudSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDIzLCAyMiwgMC43KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI21lbnVGaXhvIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIC5sYW5ndWFnZXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmV0d29ya3Mge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJFBvcHBpbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvLyAjbWVudUZpeG8ge1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvLyB9XHJcbiAgICAjbWVudUZpeG8ge1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAtN3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5sYW5ndWFnZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjMlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHRvcDogaW5pdGlhbDtcclxuICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcclxuICAgICAgICAgICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDY0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uZXR3b3JrcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHRvcDogaW5pdGlhbDtcclxuICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcclxuICAgICAgICAgICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyQnV0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnBvc2l0aW9uTWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTAxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmlkaW9tYSB7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9zaXRpb25NZW51IHtcclxuICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgfVxyXG4gICAgI21lbnVGaXhvIHtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAubGFuZ3VhZ2VzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uZXR3b3JrcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHRvcDogaW5pdGlhbDtcclxuICAgICAgICAgICAgbGVmdDogaW5pdGlhbDtcclxuICAgICAgICAgICAgcGFkZGluZzogaW5oZXJpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmlkaW9tYSB7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaWRpb21hIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5pZGlvbWEgdWwgbGkge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pZGlvbWEgdWwgbGkgLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pZGlvbWEgdWwgbGkgLmJ0biBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbi5pZGlvbWEgdWwgbGkgLmJ0biBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmlkaW9tYSB1bCBsaSAuYnRuIHNwYW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWI3O1xufVxuLmlkaW9tYSB1bCBsaSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ubWVudSB7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDIzLCAyMiwgMC43KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lbnUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5tZW51IHVsIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG59XG4ubWVudSB1bCBsaSBhIHtcbiAgY29sb3I6ICMwMDk5Yjc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1lbnUgdWwgbGkgYTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgd2lkdGg6IDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAycHg7XG4gIGxlZnQ6IDA7XG59XG4ubWVudSB1bCBsaSBhOmhvdmVyOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI21lbnVGaXhvIHtcbiAgei1pbmRleDogMTA7XG59XG4jbWVudUZpeG8gLmxhbmd1YWdlcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNtZW51Rml4byAubGFuZ3VhZ2VzIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI21lbnVGaXhvIC5sYW5ndWFnZXMgbGkgLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jbWVudUZpeG8gLmxhbmd1YWdlcyBsaSAuYnRuIGltZyB7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuI21lbnVGaXhvIC5sYW5ndWFnZXMgbGkgLmJ0biBzcGFuIHtcbiAgY29sb3I6ICMwMDk5Yjc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiNtZW51Rml4byAubGFuZ3VhZ2VzIGxpIC5idG4gc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuI21lbnVGaXhvIC5uZXR3b3JrcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4jbWVudUZpeG8gLm5ldHdvcmtzIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI21lbnVGaXhvIC5uZXR3b3JrcyBsaSAuYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNtZW51Rml4byAubmV0d29ya3MgbGkgLmJ0biBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cbiNtZW51Rml4byAubmV0d29ya3MgbGkgLmJ0biBzcGFuIHtcbiAgY29sb3I6ICMwMDk5Yjc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiNtZW51Rml4byAubmV0d29ya3MgbGkgLmJ0biBzcGFuOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNtZW51Rml4byB7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IC03cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgI21lbnVGaXhvIC5sYW5ndWFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDYzJTtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICBmbGV4LWRpcmVjdGlvbjogaW5pdGlhbDtcbiAgICB0b3A6IGluaXRpYWw7XG4gICAgbGVmdDogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xuICB9XG4gICNtZW51Rml4byAubGFuZ3VhZ2VzIGxpIC5idG4ge1xuICAgIHBhZGRpbmc6IDhweCA2NHB4O1xuICB9XG4gICNtZW51Rml4byAubGFuZ3VhZ2VzIGxpIC5idG4gc3BhbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgI21lbnVGaXhvIC5sYW5ndWFnZXMgbGkgLmJ0biBzcGFuOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwOTliNztcbiAgfVxuICAjbWVudUZpeG8gLm5ldHdvcmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgZmxleC1kaXJlY3Rpb246IGluaXRpYWw7XG4gICAgdG9wOiBpbml0aWFsO1xuICAgIGxlZnQ6IGluaXRpYWw7XG4gICAgcGFkZGluZzogaW5oZXJpdDtcbiAgfVxuXG4gIC5oZWFkZXJCdXRvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucG9zaXRpb25NZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5pZGlvbWEgdWwgbGkgLmJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnBvc2l0aW9uTWVudSB7XG4gICAgcmlnaHQ6IDRweDtcbiAgICB0b3A6IDRweDtcbiAgfVxuXG4gICNtZW51Rml4byB7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IC03cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cbiAgI21lbnVGaXhvIC5sYW5ndWFnZXMge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgI21lbnVGaXhvIC5sYW5ndWFnZXMgbGkgLmJ0biB7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG4gICNtZW51Rml4byAubmV0d29ya3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICBmbGV4LWRpcmVjdGlvbjogaW5pdGlhbDtcbiAgICB0b3A6IGluaXRpYWw7XG4gICAgbGVmdDogaW5pdGlhbDtcbiAgICBwYWRkaW5nOiBpbmhlcml0O1xuICB9XG59IiwiLy8gZm9udHNcclxuJE9wZW5TYW5zOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4vL0NvbG9yc1xyXG4kcmVkX2Rhcms6ICNhNjAxNDA7XHJcbiRibGFjazogIzNhM2EzYTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzAwOTliNztcclxuXHJcbi8vTW9iaWxlXHJcbiRsaXR0bGU6IDMyMHB4O1xyXG4kc21hbGw6IDQ4MHB4O1xyXG4kbWVkaXVtOiA3NjhweDtcclxuJGxhcmdlOiAxMDI1cHg7XHJcblxyXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcclxuICBAaWYgJG1lZGlhID09ICRzbWFsbCB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbWVkaXVtIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbGFyZ2Uge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbGFyZ2UpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gJGxpdHRsZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsaXR0bGUpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gJHRhYmxldC1wb3J0cmFpdCB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OCkgYW5kIChtYXgtd2lkdGg6IDc2OSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, { checkScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CommonService {
    constructor() {
        this.emitirlanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitirId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    changeLanguage(ev) {
        console.log(ev);
        if (ev === 'PT') {
            this.emitirlanguage.emit(ev);
            return this.languageEN = true;
        }
        else {
            this.emitirlanguage.emit(ev);
            return this.languageEN = false;
        }
    }
    scrollToElement(ev) {
        this.emitirId.emit(ev);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/button-burger/button-burger.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/button-burger/button-burger.component.ts ***!
  \****************************************************************************/
/*! exports provided: ButtonBurgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBurgerComponent", function() { return ButtonBurgerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ButtonBurgerComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBurgerComponent_li_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onChangeLanguage(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.languageId == item_r1.id ? "rgba(169, 169, 169, 0.7)" : "transparent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.legend);
} }
const _c0 = function (a0) { return { "sidenav--active": a0 }; };
class ButtonBurgerComponent {
    constructor(commonLanguage) {
        this.commonLanguage = commonLanguage;
        this.mudarIdioma = false;
        this.languageId = 'PT';
        this.open_menu = false;
        this.open_list = false;
        this.languague = [
            {
                id: 'PT',
                img: 'https://i.ibb.co/0ZsX49C/bandeira-PT.jpg',
                legend: 'Português',
            },
            {
                id: 'EN',
                img: 'https://i.ibb.co/M6wNVkf/bandeira-ENG.jpg',
                legend: 'English',
            }
        ];
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.open_menu = !this.open_menu;
    }
    toggleList() {
        this.open_list = !this.open_list;
    }
    onChangeLanguage(ev) {
        this.languageId = ev;
        this.mudarIdioma = this.commonLanguage.changeLanguage(ev);
    }
    scrollToElement(eve) {
        let sendServer;
        sendServer = this.commonLanguage.scrollToElement(eve);
        this.open_menu = !this.open_menu;
    }
}
ButtonBurgerComponent.ɵfac = function ButtonBurgerComponent_Factory(t) { return new (t || ButtonBurgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"])); };
ButtonBurgerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonBurgerComponent, selectors: [["app-button-burger"]], decls: 25, vars: 8, consts: [[1, "sidenav", 3, "ngClass"], [1, "open__background"], [1, "header"], [1, "header__left", "col-md-6"], [1, "header__right", "col-md-6"], [1, "closebtn", 3, "click"], [1, "fas", "fa-times"], [1, "menu"], [3, "click"], [1, "idioma"], [4, "ngFor", "ngForOf"], ["src", "https://i.ibb.co/6HQCZkg/menu.png", "alt", "Menu", 3, "click"], [1, "btn", 3, "id", "click"], ["alt", "", 3, "src"]], template: function ButtonBurgerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBurgerComponent_Template_span_click_5_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBurgerComponent_Template_li_click_9_listener() { return ctx.scrollToElement("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBurgerComponent_Template_li_click_12_listener() { return ctx.scrollToElement("academic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBurgerComponent_Template_li_click_15_listener() { return ctx.scrollToElement("knowledge"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBurgerComponent_Template_li_click_18_listener() { return ctx.scrollToElement("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ButtonBurgerComponent_li_23_Template, 5, 5, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonBurgerComponent_Template_img_click_24_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.open_menu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Sobre" : "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Forma\u00E7\u00E3o" : "Academic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Conhecimentos" : "Knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageId === "PT" ? "Contato" : "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languague);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".burger[_ngcontent-%COMP%] {\n  color: #0099b7;\n  font-size: 25px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70px;\n}\n\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n}\n\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 7px;\n}\n\n.idioma[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  font-family: \"Open Sans Regular\", Sans-Serif;\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  overflow-x: hidden;\n  transition: 0.2s;\n  box-shadow: 5px 0px 15px 0px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 5px 0px 15px 0px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 5px 0px 15px 0px rgba(0, 0, 0, 0.2);\n  opacity: 0;\n}\n\n.sidenav--active[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 1;\n}\n\n.sidenav--active[_ngcontent-%COMP%]   .app-button[_ngcontent-%COMP%] {\n  display: block;\n  transition: 1.5s;\n  opacity: 1;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 15px 0px 15px 15px;\n  text-decoration: none;\n  color: #fff;\n  display: block;\n  transition: 0.3s;\n  font-size: 18px;\n}\n\n.sidenav[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 60%;\n}\n\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-left: 50px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.closebtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.open__background[_ngcontent-%COMP%] {\n  padding: 5vw 2vw;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__left[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: start;\n}\n\n.header__right[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n}\n\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  padding: 15px 30px;\n}\n\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0099b7;\n  font-size: 20px;\n  position: relative;\n  font-weight: 700;\n  position: relative;\n}\n\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 15%;\n  height: 2px;\n  position: absolute;\n  top: 25px;\n  background-color: #fff;\n  left: -19%;\n}\n\n.menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 15%;\n  height: 2px;\n  position: absolute;\n  top: 25px;\n  background-color: #fff;\n  left: -19%;\n  transform: rotate(-88deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uLWJ1cmdlci9DOlxcVXNlcnNcXFZpbmljaXVzZGFTaWx2YU9saXZlXFxEZXNrdG9wXFxteXBvcnRmb2xpby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxidXR0b24tYnVyZ2VyXFxidXR0b24tYnVyZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idXR0b24tYnVyZ2VyL0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxzYXNzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi1idXJnZXIvYnV0dG9uLWJ1cmdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGNDS007RURKTixlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRUREOztBRktDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0FFRkY7O0FGR0U7RUFDQyxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRURIOztBRkVHO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUVBSjs7QUZDSTtFQUNDLGlCQUFBO0FFQ0w7O0FGQ0k7RUFDQyxXQ3JCRztFRHNCSCxrQ0MzQks7RUQ0QkwsZUFBQTtBRUNMOztBRktBO0VBQ0MsZUFBQTtBRUZEOztBRktBO0VBQ0MsNENBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0Esb0RBQUE7RUFDQSxVQUFBO0FFRkQ7O0FGR0M7RUFDQyxXQUFBO0VBQ0EsVUFBQTtBRURGOztBRkVFO0VBQ0MsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBRUFIOztBRktBO0VBQ0MsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFdDOURPO0VEK0RQLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUVGRDs7QUZLQTtFQUNDLGdCQUFBO0VBQ0EsVUFBQTtBRUZEOztBRktBO0VBSUMsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0MvRU87RURnRlAsZUFBQTtBRUxEOztBRlFBO0VBQ0MsZUFBQTtBRUxEOztBRlFBO0VBQ0MsZ0JBQUE7RUFDQSw4QkFBQTtBRUxEOztBRlFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FFTEQ7O0FGTUM7RUFDQyxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FFSkY7O0FGTUM7RUFDQyxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FFSkY7O0FGT0E7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7QUVKRDs7QUZLQztFQUNDLFVBQUE7RUFDQSxnQkFBQTtBRUhGOztBRklFO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBRUZIOztBRkdHO0VBQ0MsY0NuSEc7RURvSEgsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRURKOztBRkVJO0VBQ0MsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FFQUw7O0FGRUk7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRUFMIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uLWJ1cmdlci9idXR0b24tYnVyZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uYnVyZ2VyIHtcclxuXHRjb2xvcjogJGJsdWU7XHJcblx0Zm9udC1zaXplOiAyNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uaWRpb21hIHtcclxuXHR1bCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRsaSB7XHJcblx0XHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQuYnRuIHtcclxuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDdweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0XHRjb2xvcjogJHdoaXRlO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICRQb3BwaW5zO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4ucG9pbnRlciB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcblx0Zm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFJlZ3VsYXJcIiwgU2Fucy1TZXJpZjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDA7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0dHJhbnNpdGlvbjogMC4ycztcclxuXHRib3gtc2hhZG93OiA1cHggMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDVweCAwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5cdC1tb3otYm94LXNoYWRvdzogNXB4IDBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0b3BhY2l0eTogMDtcclxuXHQmLS1hY3RpdmUge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0LmFwcC1idXR0b24ge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0dHJhbnNpdGlvbjogMS41cztcclxuXHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG5cdHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMTVweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICR3aGl0ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0cmFuc2l0aW9uOiAwLjNzO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNpZGVuYXYgaHIge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0d2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuXHQvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ly8gdG9wOiAxMHB4O1xyXG5cdC8vIHJpZ2h0OiAxNXB4O1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxuXHRtYXJnaW4tbGVmdDogNTBweDtcclxuXHRjb2xvcjogJHdoaXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNsb3NlYnRuIGkge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm9wZW5fX2JhY2tncm91bmQge1xyXG5cdHBhZGRpbmc6IDV2dyAydnc7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Jl9fbGVmdCB7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcblx0fVxyXG5cdCZfX3JpZ2h0IHtcclxuXHRcdHdpZHRoOiA1MCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHR9XHJcbn1cclxuLm1lbnUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0dWwge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRsaSB7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdFx0cGFkZGluZzogMTVweCAzMHB4O1xyXG5cdFx0XHRhIHtcclxuXHRcdFx0XHRjb2xvcjogJGJsdWU7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHQmOjpiZWZvcmUge1xyXG5cdFx0XHRcdFx0Y29udGVudDogXCJcIjtcclxuXHRcdFx0XHRcdHdpZHRoOiAxNSU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDJweDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHRvcDogMjVweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRcdFx0XHRsZWZ0OiAtMTklO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQmOjphZnRlciB7XHJcblx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0XHRcdFx0d2lkdGg6IDE1JTtcclxuXHRcdFx0XHRcdGhlaWdodDogMnB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiAyNXB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRcdGxlZnQ6IC0xOSU7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtODhkZWcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLyBmb250c1xyXG4kT3BlblNhbnM6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRQb3BwaW5zOiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbi8vQ29sb3JzXHJcbiRyZWRfZGFyazogI2E2MDE0MDtcclxuJGJsYWNrOiAjM2EzYTNhO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibHVlOiAjMDA5OWI3O1xyXG5cclxuLy9Nb2JpbGVcclxuJGxpdHRsZTogMzIwcHg7XHJcbiRzbWFsbDogNDgwcHg7XHJcbiRtZWRpdW06IDc2OHB4O1xyXG4kbGFyZ2U6IDEwMjVweDtcclxuXHJcbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xyXG4gIEBpZiAkbWVkaWEgPT0gJHNtYWxsIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRtZWRpdW0ge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWVkaXVtKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJG1lZGlhID09ICRsYXJnZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsYXJnZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbGl0dGxlIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGxpdHRsZSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkdGFibGV0LXBvcnRyYWl0IHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4KSBhbmQgKG1heC13aWR0aDogNzY5KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYnVyZ2VyIHtcbiAgY29sb3I6ICMwMDk5Yjc7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uaWRpb21hIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWRpb21hIHVsIGxpIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWRpb21hIHVsIGxpIC5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWRpb21hIHVsIGxpIC5idG4gaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG4uaWRpb21hIHVsIGxpIC5idG4gc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlbmF2IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIFJlZ3VsYXJcIiwgU2Fucy1TZXJpZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm94LXNoYWRvdzogNXB4IDBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC1tb3otYm94LXNoYWRvdzogNXB4IDBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG9wYWNpdHk6IDA7XG59XG4uc2lkZW5hdi0tYWN0aXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2lkZW5hdi0tYWN0aXZlIC5hcHAtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IDEuNXM7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zaWRlbmF2IGEge1xuICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaWRlbmF2IGhyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsb3NlYnRuIGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcGVuX19iYWNrZ3JvdW5kIHtcbiAgcGFkZGluZzogNXZ3IDJ2dztcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2xlZnQge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuLmhlYWRlcl9fcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1lbnUgdWwge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm1lbnUgdWwgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbn1cbi5tZW51IHVsIGxpIGEge1xuICBjb2xvcjogIzAwOTliNztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZW51IHVsIGxpIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbGVmdDogLTE5JTtcbn1cbi5tZW51IHVsIGxpIGE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBsZWZ0OiAtMTklO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtODhkZWcpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonBurgerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button-burger',
                templateUrl: './button-burger.component.html',
                styleUrls: ['./button-burger.component.scss']
            }]
    }], function () { return [{ type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/lightbox/lightbox.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/lightbox/lightbox.component.ts ***!
  \******************************************************************/
/*! exports provided: LightboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxComponent", function() { return LightboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class LightboxComponent {
    constructor() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
LightboxComponent.ɵfac = function LightboxComponent_Factory(t) { return new (t || LightboxComponent)(); };
LightboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LightboxComponent, selectors: [["app-lightbox"]], outputs: { onClick: "onClick" }, ngContentSelectors: _c0, decls: 5, vars: 0, consts: [[1, "Lightbox"], [1, "Lightbox__box"], [1, "Lightbox__box--close", 3, "click"], [1, "fas", "fa-times"]], template: function LightboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LightboxComponent_Template_button_click_3_listener($event) { return ctx.onClick.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 140;\n  background-color: rgba(121, 121, 121, 0.9);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n}\n.Lightbox__box[_ngcontent-%COMP%] {\n  background: #fff;\n  -webkit-animation: show 0.7s forwards;\n          animation: show 0.7s forwards;\n  padding: 30px;\n  max-width: 800px;\n  border-radius: 6px;\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.16);\n  position: relative;\n  max-height: 90%;\n  overflow-y: auto;\n  width: 80% !important;\n  min-width: 350px;\n}\n.Lightbox__box--close[_ngcontent-%COMP%] {\n  background: none;\n  border: 0;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.Lightbox__box--close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n@media (max-width: 800px) {\n  .Lightbox__box[_ngcontent-%COMP%] {\n    max-width: 80%;\n  }\n}\n@-webkit-keyframes show {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes show {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGlnaHRib3gvQzpcXFVzZXJzXFxWaW5pY2l1c2RhU2lsdmFPbGl2ZVxcRGVza3RvcFxcbXlwb3J0Zm9saW8vc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcbGlnaHRib3hcXGxpZ2h0Ym94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9saWdodGJveC9saWdodGJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGlnaHRib3gvQzpcXFVzZXJzXFxWaW5pY2l1c2RhU2lsdmFPbGl2ZVxcRGVza3RvcFxcbXlwb3J0Zm9saW8vc3JjXFxhcHBcXHNhc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNERjtBREdFO0VBQ0UsZ0JFUkk7RUZTSixxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FERUk7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQU47QURFTTtFQUNFLGFBQUE7QUNBUjtBREdJO0VBdkJGO0lBd0JJLGNBQUE7RUNBSjtBQUNGO0FER0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ0FGO0VERUE7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNBRjtBQUNGO0FEUkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ0FGO0VERUE7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5MaWdodGJveCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE0MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuOSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgJl9fYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIGFuaW1hdGlvbjogc2hvdyAwLjdzIGZvcndhcmRzO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC1oZWlnaHQ6IDkwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gICAgJi0tY2xvc2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICByaWdodDogMTBweDtcclxuXHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzaG93IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuIiwiLkxpZ2h0Ym94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxNDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAxMjEsIDEyMSwgMC45KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5MaWdodGJveF9fYm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYW5pbWF0aW9uOiBzaG93IDAuN3MgZm9yd2FyZHM7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LWhlaWdodDogOTAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMzUwcHg7XG59XG4uTGlnaHRib3hfX2JveC0tY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbn1cbi5MaWdodGJveF9fYm94LS1jbG9zZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLkxpZ2h0Ym94X19ib3gge1xuICAgIG1heC13aWR0aDogODAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hvdyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59IiwiLy8gZm9udHNcclxuJE9wZW5TYW5zOiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4kUG9wcGluczogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4vL0NvbG9yc1xyXG4kcmVkX2Rhcms6ICNhNjAxNDA7XHJcbiRibGFjazogIzNhM2EzYTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmx1ZTogIzAwOTliNztcclxuXHJcbi8vTW9iaWxlXHJcbiRsaXR0bGU6IDMyMHB4O1xyXG4kc21hbGw6IDQ4MHB4O1xyXG4kbWVkaXVtOiA3NjhweDtcclxuJGxhcmdlOiAxMDI1cHg7XHJcblxyXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcclxuICBAaWYgJG1lZGlhID09ICRzbWFsbCB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbWVkaXVtIHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1lZGl1bSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRtZWRpYSA9PSAkbGFyZ2Uge1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbGFyZ2UpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gJGxpdHRsZSB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRsaXR0bGUpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gJHRhYmxldC1wb3J0cmFpdCB7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OCkgYW5kIChtYXgtd2lkdGg6IDc2OSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LightboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lightbox',
                templateUrl: './lightbox.component.html',
                styleUrls: ['./lightbox.component.scss']
            }]
    }], function () { return []; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], ngContentSelectors: _c0, decls: 8, vars: 0, consts: [[1, "Loader"], [1, "spinner"], [1, "rect1"], [1, "rect2"], [1, "rect3"], [1, "rect4"], [1, "rect5"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Loader[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 150;\n}\n.Loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 90px;\n  height: 80px;\n  text-align: center;\n  font-size: 10px;\n}\n.Loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #48a6c0;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  margin: 0 1px;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n.Loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.Loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.Loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.Loader[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n  }\n}\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL0M6XFxVc2Vyc1xcVmluaWNpdXNkYVNpbHZhT2xpdmVcXERlc2t0b3BcXG15cG9ydGZvbGlvL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDREY7QURHRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FESUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBRUEsNERBQUE7RUFDQSxvREFBQTtBQ0hKO0FETUU7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FDSko7QURPRTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7QUNMSjtBRFFFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ05KO0FEU0U7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0FDUEo7QURVRTtFQUNFO0lBR0UsOEJBQUE7RUNWSjtFRFlFO0lBQ0UsNEJBQUE7RUNWSjtBQUNGO0FEYUU7RUFDRTtJQUdFLHNCQUFBO0lBQ0EsOEJBQUE7RUNiSjtFRGVFO0lBQ0Usb0JBQUE7SUFDQSw0QkFBQTtFQ2JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uTG9hZGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB6LWluZGV4OiAxNTA7XHJcblxyXG4gIC5zcGlubmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc3Bpbm5lciA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNmMwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAxcHg7XHJcblxyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5zcGlubmVyIC5yZWN0MiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXIgLnJlY3QzIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxuICB9XHJcblxyXG4gIC5zcGlubmVyIC5yZWN0NCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gIH1cclxuXHJcbiAgLnNwaW5uZXIgLnJlY3Q1IHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgfVxyXG5cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcclxuICAgIDAlLFxyXG4gICAgNDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XHJcbiAgICAwJSxcclxuICAgIDQwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICB9XHJcbiAgICAyMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLkxvYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxNTA7XG59XG4uTG9hZGVyIC5zcGlubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLkxvYWRlciAuc3Bpbm5lciA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGE2YzA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMXB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG4uTG9hZGVyIC5zcGlubmVyIC5yZWN0MiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbn1cbi5Mb2FkZXIgLnNwaW5uZXIgLnJlY3QzIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG4uTG9hZGVyIC5zcGlubmVyIC5yZWN0NCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbn1cbi5Mb2FkZXIgLnNwaW5uZXIgLnJlY3Q1IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XG4gIDAlLCA0MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcbiAgMCUsIDQwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/material.module.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/components/material.module.ts ***!
  \******************************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tree.js");











































class DemoMaterialModule {
}
DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
                ]
            }]
    }], null, null); })();


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

module.exports = __webpack_require__(/*! C:\Users\ViniciusdaSilvaOlive\Desktop\myportfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map