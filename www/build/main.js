webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/descripcion/descripcion.module": [
		275,
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__descripcion_descripcion__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ligas = [];
        this.ligas = [
            {
                'title': 'Liga Deportiva Barrial "Carcelen Bajo"',
                'imgs': 'assets/imgs/descarga1.jpg',
                'description': 'Institucion con personeria juridica, fundada el 12 de Octubre de 1984,Ubicado en le Barrio Carcelen Bajo.Su infraesrtructura esta acorde con la demanda ponblacional del sector.',
                'color': '#E63135'
            },
            {
                'title': 'Liga Deportiva Barria "Catzuqui de Moncayo"',
                'icon': 'assets/imgs/logo.png',
                'description': 'Situada en el noroccidente del DMQ,su fundacion data del 5 de Abril de 1981;Actualmente cuneta con 15 equipos que participan en un torneo de una sola categoria',
                'color': '#0CA9EA'
            },
            {
                'title': 'Liga Deportiva Barrial "Pisulli"',
                'icon': 'html5',
                'description': 'Fundada el 15 de MArzo de 1985,ubicada en el noroccidente de Quito,en el Barrio Pisulli.Cuenta con infraestructua basica fruto con del esfuerzo y trabajo de los Dirigentes.',
                'color': '#F46529'
            },
            {
                'title': 'Liga Deportiva Barrial "Miraflores Batan Alto"',
                'icon': 'javascript',
                'description': 'Ubicada estrategicamente en el Parque Metroploitano de Quito,fundada el 09 de Octubre de 1988.Por su ubicacion cuenta con un entrono privilegiado de naturaleza ',
                'color': '#FFD439'
            },
            {
                'title': 'Liga Deportiva Barrial "Alma Lojana"',
                'icon': 'sass',
                'description': 'Fundada  el 5 de Diciembre de 1983,Se encuentra ubicada el el Barrio Alma Lojana,en el Sectro del antiguo peaje de la autpista General Rumiñahui.Cuenta con 29 equipos distribuidos en las categorias maxima,master y femenino',
                'color': '#CE6296'
            },
            {
                'title': 'Liga Deportiva Barrial "Eloy Alfaro"',
                'icon': 'nodejs',
                'description': 'Su fundacion data del 15 de Agosto de 1985 y esta ubicada en la calle Cardenal MAria de la Torre,frente al Parque Ecologico Santa Ana.Trasciende por su organizacion como el liderazgo e infraestructura',
                'color': '#78BD43'
            },
            {
                'title': 'Liga Deportiva Barrial "La Forestal ',
                'icon': 'python',
                'description': 'Ubicada en el Centro Oriente de Quito,al costado de la nueva via Simon Bolivar.Su fundacion fue el 19 de Junio de 1985;Acoge aprximadamente a 1000 deportistas',
                'color': '#3575AC'
            },
            {
                'title': 'Liga Deportiva Barrial "La Hospitalaria',
                'icon': 'markdown',
                'description': 'Su fecha de fundacion es el 26 de Julio de 1988;Ubicada a un costado de la autopista General Rumiñahui.Posee una infraestructura realizado gracias a la autogestion de directivos y deportistas',
                'color': '#412159'
            },
            {
                'title': 'Liga Deportiva Barrial "Caupichu"',
                'icon': 'tux',
                'description': 'Ubicada en el Sur de quito en el Barrio del mismo nombre,fue fundada el 12 de septiembre de 1992.Cuenta con un complejo deportivo compuesto de 2 canchas de futbol y dos canchas de indorfutbol,que son utilizadas aproximadamente por 2800 deportistas en futbol masculino y femenino;incluyendo las cateegorias infantojuveniles',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Eugenio Espejo"',
                'icon': 'tux',
                'description': 'Fundada el 1 de Agosto de 1988.Se ubica en el Barrio Eugenio Espejo,en Santa Barbara de Chillogallo.Su histora se forja en base a la vision de persona estusiastas, que con arcos de madera transformaron un espacio verde en cancha de futbol',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Gonzalez Suarez"',
                'icon': 'tux',
                'description': 'Es una de las ligas fundadoras de la ASOLIGAS,instituida el 24 de Julio de 1967;Ubicada en la Avenida Mariscal Sucre,Sector de la Raya , al Sur de Quito; se identifica por su trabajo constante en beneficio del deporte Barrial',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Magdalena Alta"',
                'icon': 'tux',
                'description': 'Fue fundada eñl 24 de mayo de 1996, siendo una de la mas jovenes organizaciones en cuanto a su trayectoria. Es el motor que dinamiza y llena de vida el sector de San Jose de Chilibulo.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Marquesa de Solanda"',
                'icon': 'tux',
                'description': 'Su fecha de fundacion es el 10 de agosto de 1989; institucion juridica, situada en el Barrio Solanda. Poseen una infraestructura basica en donde se cultiva una gran pasion al deporte.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Martha Bucaram"',
                'icon': 'tux',
                'description': 'Se encuantra ubicada en la ciudadela Ibarra, en las calles Jose Rodriguez y Emel Fiallos. Identificados con el deporte barrial, han gestionado sus obras con un gran trabajo dirigencial.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Nuevos Horizontes del Sur"',
                'icon': 'tux',
                'description': 'Se constituye eñl 12 de septiembre de 1998: y se encuantra ubicada en el barrio Nuevos Horizontes del Sur,en el sector de San Martin. Cuenta con 18 equipos filiales distribuidos en diferentes categorias.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Panamericada Sur"',
                'icon': 'tux',
                'description': 'Institucion juridica fundada el 9 de octubre de 1969, situada en el camino al Conde, sector El Blanqueado. Esta conformada con 51 equipos distribuidos en 4 categorias.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Quitus Colonial"',
                'icon': 'tux',
                'description': 'Organizacion deportiva ubicada en el sector oriental de la ciudad de Quito, fundada el 14 de agosto de 1995. actualmente cuenta con 16 equuipos de futbol masculino dividido en 2 series.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "San Francisco de Tanda"',
                'icon': 'tux',
                'description': 'Fundada el 23 de abril de 1992, ubicada en el camino El Nayon sector del Rancho San Francisco. Se han destacado en el hambito deportivo; pero principalmente es cuna de grandes artistas.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "San Jose de Guamani"',
                'icon': 'tux',
                'description': 'Su fundacion data el 17 de junio de 1977; se encuantra ubicada en el sector de la gasolinera de Guamani, en el sur de Quito. Institucion juridica que acoge acerca de 1000 deportistas de la capital.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Union"',
                'icon': 'tux',
                'description': 'El 8 de mayo de 1997 nace la institucion, ubicada en el sector de Guajalo, al sur de Quito. Se caracteriza por su trabajo esmerado y la buena organizacion de los directivos y sus equipos filiales.',
                'color': '#000'
            },
            {
                'title': 'Liga Deportiva Barrial "Vencedores de Tarqui"',
                'icon': 'tux',
                'description': 'Ubicada en el sector de la Mena Dos (ciudadela Tarqui); institucion juridica fundada el 13 de agosto de 1979; nace con grandes ideales gracias al trabajo de moradores y directivos que convirtieron en espacio deportivo, unos predios que estaban destinados a un proyecto de vivienda con fines lucro.',
                'color': '#000'
            },
        ];
    }
    ContactPage.prototype.openNavDetailsPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__descripcion_descripcion__["a" /* DescripcionPage */], { item: item });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/contact/contact.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>LIGAS BARRIALES</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let item of ligas" (click)="openNavDetailsPage(item)" icon-start>\n        <ion-icon [name]="\'imgs\' + item.imgs" [ngStyle]="{\'color\': item.color}" item-start></ion-icon>\n        {{ item.title }}\n      </button>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_draw__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet_draw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet_draw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
    }
    HomePage.prototype.ngOnInit = function () {
        this.drawMap();
    };
    HomePage.prototype.drawMap = function () {
        var _this = this;
        //Obtener la locacion del usuario
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.x = resp.coords.latitude;
            _this.y = resp.coords.longitude;
            //dibujar al mapa
            _this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet__["map"]('map').setView([_this.x, _this.y], 18);
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: 'AppTuto',
                maxZoom: 18
            }).addTo(_this.map);
            //Crear marcador de la ubicacion del usuario
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"]([_this.x, _this.y]).addTo(_this.map)
                .bindPopup("Tu Ubicacion").openPopup();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n <div id="map"></div>\n \n</ion-content>\n'/*ion-inline-end:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescripcionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the DescripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DescripcionPage = /** @class */ (function () {
    function DescripcionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.data.item;
    }
    DescripcionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescripcionPage');
    };
    DescripcionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descripcion',template:/*ion-inline-start:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/descripcion/descripcion.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ item.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-icon [name]="\'logo-\' + item.icon" [ngStyle]="{\'color\': item.color}" item-start></ion-icon>\n      {{ item.description }}\n</ion-content>\n'/*ion-inline-end:"/home/shady/Desktop/Ligas/LigasBarriales/src/pages/descripcion/descripcion.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], DescripcionPage);
    return DescripcionPage;
    var _a, _b;
}());

//# sourceMappingURL=descripcion.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(192);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/descripcion/descripcion.module#DescripcionPageModule', name: 'DescripcionPage', segment: 'descripcion', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/shady/Desktop/Ligas/LigasBarriales/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/shady/Desktop/Ligas/LigasBarriales/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map