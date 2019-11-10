module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+uq9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"latex":"latex__34DCT"};

/***/ }),

/***/ "0lnO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1EpE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"split":"split__2Bl8C","splitchild":"splitchild__3Ip86"};

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./index.css
var index = __webpack_require__("xHuH");
var index_default = /*#__PURE__*/__webpack_require__.n(index);

// EXTERNAL MODULE: ./pages/fisica.css
var fisica = __webpack_require__("0lnO");
var fisica_default = /*#__PURE__*/__webpack_require__.n(fisica);

// EXTERNAL MODULE: ./components/latex.css
var latex = __webpack_require__("+uq9");
var latex_default = /*#__PURE__*/__webpack_require__.n(latex);

// CONCATENATED MODULE: ./components/latex.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var latex_Latex = function (_Component) {
	_inherits(Latex, _Component);

	function Latex() {
		_classCallCheck(this, Latex);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Latex.prototype.render = function render() {
		var equation = "{\\color{White} " + this.props.children + " }";
		return Object(preact_min["h"])("img", { src: "https://latex.codecogs.com/png.latex?" + equation,
			alt: this.props.children,
			title: this.props.children,
			"class": latex_default.a.latex });
	};

	return Latex;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/panel.css
var panel = __webpack_require__("P9k+");
var panel_default = /*#__PURE__*/__webpack_require__.n(panel);

// CONCATENATED MODULE: ./components/panel.js


function panel__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function panel__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function panel__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var panel_Panel = function (_Component) {
	panel__inherits(Panel, _Component);

	function Panel() {
		panel__classCallCheck(this, Panel);

		return panel__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Panel.prototype.render = function render() {
		return Object(preact_min["h"])(
			"div",
			{ "class": panel_default.a.panel },
			this.props.children
		);
	};

	return Panel;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/split.css
var split = __webpack_require__("1EpE");
var split_default = /*#__PURE__*/__webpack_require__.n(split);

// CONCATENATED MODULE: ./components/split.js


function split__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function split__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function split__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var split_Split = function (_Component) {
    split__inherits(Split, _Component);

    function Split() {
        split__classCallCheck(this, Split);

        return split__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Split.prototype.render = function render() {
        var percent = 100 / this.props.children.count;
        var children = null;
        if (Array.isArray(this.props.children)) {
            children = this.props.children.map(function (element) {
                return Object(preact_min["h"])(
                    "div",
                    { "class": split_default.a.splitchild },
                    element
                );
            });
        } else {
            children = Object(preact_min["h"])(
                "div",
                { "class": split_default.a.splitchild },
                this.props.children
            );
        }
        return Object(preact_min["h"])(
            "div",
            { "class": split_default.a.split },
            children
        );
    };

    return Split;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./pages/fisica.js
var _templateObject = _taggedTemplateLiteralLoose(['\x0Bec{v} = \x0Bec{v}_x + \x0Bec{v}_y'], ['\\vec{v} = \\vec{v}_x + \\vec{v}_y']),
    _templateObject2 = _taggedTemplateLiteralLoose(['left | \x0Bec{v}_x \right | = left | \x0Bec{v} \right | sin alpha'], ['\\left | \\vec{v}_x \\right | = \\left | \\vec{v} \\right | \\sin \\alpha']),
    _templateObject3 = _taggedTemplateLiteralLoose(['left | \x0Bec{v}_y \right | = left | \x0Bec{v} \right | cos alpha'], ['\\left | \\vec{v}_y \\right | = \\left | \\vec{v} \\right | \\cos \\alpha']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\x0Bec{v} + \x0Bec{w} = (\x0Bec{v}_x + \x0Bec{w}_x) + (\x0Bec{v}_y + \x0Bec{w}_y)'], ['\\vec{v} + \\vec{w} = (\\vec{v}_x + \\vec{w}_x) + (\\vec{v}_y + \\vec{w}_y)']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\x0Bec{v} - \x0Bec{w} = (\x0Bec{v}_x - \x0Bec{w}_x) + (\x0Bec{v}_y - \x0Bec{w}_y)'], ['\\vec{v} - \\vec{w} = (\\vec{v}_x - \\vec{w}_x) + (\\vec{v}_y - \\vec{w}_y)']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\x0Bec{v} cdot \x0Bec{w} = left | \x0Bec{v} \right | left | \x0Bec{w} \right | cos alpha'], ['\\vec{v} \\cdot \\vec{w} = \\left | \\vec{v} \\right | \\left | \\vec{w} \\right | \\cos \\alpha']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\x0Bec{a}'], ['\\vec{a}']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\x0Bec{b}'], ['\\vec{b}']),
    _templateObject9 = _taggedTemplateLiteralLoose(['Sigma \x0Bec{F} = 0 Longleftrightarrow Delta v = 0'], ['\\Sigma \\vec{F} = 0 \\Longleftrightarrow \\Delta v = 0']),
    _templateObject10 = _taggedTemplateLiteralLoose(['Sigma \x0Bec{F} = m \x0Bec{a}'], ['\\Sigma \\vec{F} = m \\vec{a}']),
    _templateObject11 = _taggedTemplateLiteralLoose(['\x0Bec{F}_{21} = -\x0Bec{F}_{12}'], ['\\vec{F}_{21} = -\\vec{F}_{12}']),
    _templateObject12 = _taggedTemplateLiteralLoose(['left | \x0Bec{F} \right | = G \frac{m_1 m_2}{s^2}'], ['\\left | \\vec{F} \\right | = G \\frac{m_1 m_2}{s^2}']),
    _templateObject13 = _taggedTemplateLiteralLoose(['G = 6.67 cdot 10^{-11} \frac{N m^2}{{kg}^2}'], ['G = 6.67 \\cdot 10^{-11} \\frac{N m^2}{{kg}^2}']),
    _templateObject14 = _taggedTemplateLiteralLoose(['left | \x0Bec{F} \right | = g m'], ['\\left | \\vec{F} \\right | = g m']),
    _templateObject15 = _taggedTemplateLiteralLoose(['g = 9.81 \frac{m}{s^2}'], ['g = 9.81 \\frac{m}{s^2}']),
    _templateObject16 = _taggedTemplateLiteralLoose(['g_{luna} = 1.62 \frac{m}{s^2}'], ['g_{luna} = 1.62 \\frac{m}{s^2}']),
    _templateObject17 = _taggedTemplateLiteralLoose(['g_{marte} = 3.71 \frac{m}{s^2}'], ['g_{marte} = 3.71 \\frac{m}{s^2}']),
    _templateObject18 = _taggedTemplateLiteralLoose(['left | \x0Bec{F} \right | leq mu_{s} left | \x0Bec{F}_{normale} \right |'], ['\\left | \\vec{F} \\right | \\leq \\mu_{s} \\left | \\vec{F}_{normale} \\right |']),
    _templateObject19 = _taggedTemplateLiteralLoose(['left | \x0Bec{F} \right | leq mu_{d} left | \x0Bec{F}_{normale} \right |'], ['\\left | \\vec{F} \\right | \\leq \\mu_{d} \\left | \\vec{F}_{normale} \\right |']),
    _templateObject20 = _taggedTemplateLiteralLoose(['F = -k x'], ['F = -k x']),
    _templateObject21 = _taggedTemplateLiteralLoose(['Delta \x0Bec{s} = \x0Bec{s}(fine) - \x0Bec{s}(inizio)'], ['\\Delta \\vec{s} = \\vec{s}(fine) - \\vec{s}(inizio)']),
    _templateObject22 = _taggedTemplateLiteralLoose(['\x0Bec{v} = \frac{Delta \x0Bec{s}}{Delta t}'], ['\\vec{v} = \\frac{\\Delta \\vec{s}}{\\Delta t}']),
    _templateObject23 = _taggedTemplateLiteralLoose(['\x0Bec{v} = lim_{Delta t \to 0} \frac{Delta \x0Bec{s}}{Delta t} = \frac{d \x0Bec{s}}{dt}'], ['\\vec{v} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{s}}{\\Delta t} = \\frac{d \\vec{s}}{dt}']),
    _templateObject24 = _taggedTemplateLiteralLoose(['\x0Bec{a} = \frac{Delta \x0Bec{v}}{Delta t}'], ['\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}']),
    _templateObject25 = _taggedTemplateLiteralLoose(['\x0Bec{a} = lim_{Delta v \to 0} \frac{Delta \x0Bec{v}}{Delta t} = \frac{d \x0Bec{v}}{d t} = \frac{d^2 \x0Bec{s}}{d t^2}'], ['\\vec{a} = \\lim_{\\Delta v \\to 0} \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{d \\vec{v}}{d t} = \\frac{d^2 \\vec{s}}{d t^2}']),
    _templateObject26 = _taggedTemplateLiteralLoose(['\x0Bec{p} = m \x0Bec{v}'], ['\\vec{p} = m \\vec{v}']),
    _templateObject27 = _taggedTemplateLiteralLoose(['Sigma \x0Bec{F} = 0 Longleftrightarrow Delta \x0Bec{p} = 0'], ['\\Sigma \\vec{F} = 0 \\Longleftrightarrow \\Delta \\vec{p} = 0']),
    _templateObject28 = _taggedTemplateLiteralLoose(['s(t) = v cdot Delta t + s(0)'], ['s(t) = v \\cdot \\Delta t + s(0)']),
    _templateObject29 = _taggedTemplateLiteralLoose(['v(t) = k'], ['v(t) = k']),
    _templateObject30 = _taggedTemplateLiteralLoose(['a(t) = 0'], ['a(t) = 0']),
    _templateObject31 = _taggedTemplateLiteralLoose(['s(t) = \frac{1}{2} a cdot (Delta t)^2 + v(0) cdot (Delta t) + s(0)'], ['s(t) = \\frac{1}{2} a \\cdot (\\Delta t)^2 + v(0) \\cdot (\\Delta t) + s(0)']),
    _templateObject32 = _taggedTemplateLiteralLoose(['v(t) = a Delta t + v(0)'], ['v(t) = a \\Delta t + v(0)']),
    _templateObject33 = _taggedTemplateLiteralLoose(['a(t) = k'], ['a(t) = k']),
    _templateObject34 = _taggedTemplateLiteralLoose(['omega = \frac{2 pi}{T}'], ['\\omega = \\frac{2 \\pi}{T}']),
    _templateObject35 = _taggedTemplateLiteralLoose(['s(t) = A sin (omega cdot t + phi)'], ['s(t) = A \\sin (\\omega \\cdot t + \\phi)']),
    _templateObject36 = _taggedTemplateLiteralLoose(['\frac{pi}{2}'], ['\\frac{\\pi}{2}']),
    _templateObject37 = _taggedTemplateLiteralLoose(['s(t) = A sin (omega cdot t + phi + \frac{pi}{2})'], ['s(t) = A \\sin (\\omega \\cdot t + \\phi + \\frac{\\pi}{2})']),
    _templateObject38 = _taggedTemplateLiteralLoose(['s(t) = A sin (omega cdot t + phi + pi)'], ['s(t) = A \\sin (\\omega \\cdot t + \\phi + \\pi)']),
    _templateObject39 = _taggedTemplateLiteralLoose(['phi'], ['\\phi']),
    _templateObject40 = _taggedTemplateLiteralLoose(['v = \frac{Delta s}{t} = \frac{2 pi cdot r}{T}'], ['v = \\frac{\\Delta s}{t} = \\frac{2 \\pi \\cdot r}{T}']),
    _templateObject41 = _taggedTemplateLiteralLoose(['a = \frac{v^2}{r} = r cdot omega^2 = v cdot omega'], ['a = \\frac{v^2}{r} = r \\cdot \\omega^2 = v \\cdot \\omega']),
    _templateObject42 = _taggedTemplateLiteralLoose(['F = m cdot a'], ['F = m \\cdot a']),
    _templateObject43 = _taggedTemplateLiteralLoose(['W = \x0Bec{F} cdot \x0Bec{s} = F cdot Delta s cdot cos(alpha )'], ['W = \\vec{F} \\cdot \\vec{s} = F \\cdot \\Delta s \\cdot cos(\\alpha )']),
    _templateObject44 = _taggedTemplateLiteralLoose(['E_c = \frac{1}{2} m v^2'], ['E_c = \\frac{1}{2} m v^2']),
    _templateObject45 = _taggedTemplateLiteralLoose(['Delta E_c = W'], ['\\Delta E_c = W']),
    _templateObject46 = _taggedTemplateLiteralLoose(['E_{p_g} = m cdot g cdot h'], ['E_{p_g} = m \\cdot g \\cdot h']),
    _templateObject47 = _taggedTemplateLiteralLoose(['E_{p_e} = \frac{1}{2} k x^2'], ['E_{p_e} = \\frac{1}{2} k x^2']),
    _templateObject48 = _taggedTemplateLiteralLoose(['E = E_k + E_p'], ['E = E_k + E_p']),
    _templateObject49 = _taggedTemplateLiteralLoose(['P = \frac{Delta E}{Delta t}'], ['P = \\frac{\\Delta E}{\\Delta t}']);



function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function fisica__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fisica__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function fisica__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var r = String.raw;

var _ref = Object(preact_min["h"])(
    'h1',
    null,
    'Fisica'
);

var _ref2 = Object(preact_min["h"])(
    'h2',
    null,
    'Vettori'
);

var _ref3 = Object(preact_min["h"])(
    'h3',
    null,
    'Componenti cartesiane'
);

var _ref4 = Object(preact_min["h"])(
    'p',
    null,
    'Usa le regole base della trigonometria:'
);

var _ref5 = Object(preact_min["h"])(
    'h3',
    null,
    'Somma'
);

var _ref6 = Object(preact_min["h"])(
    'p',
    null,
    'Scomponi in componenti, poi sommali:'
);

var _ref7 = Object(preact_min["h"])(
    'p',
    null,
    'Produce il vettore risultante dall\'applicazione della regola del parallelogramma.'
);

var _ref8 = Object(preact_min["h"])(
    'h3',
    null,
    'Differenza'
);

var _ref9 = Object(preact_min["h"])(
    'p',
    null,
    'Alla fine \xE8 sempre una somma:'
);

var _ref10 = Object(preact_min["h"])(
    'p',
    null,
    'Produce il vettore che parte da ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'w'
    ),
    ' e arriva a ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'v'
    ),
    '.'
);

var _ref11 = Object(preact_min["h"])(
    'h3',
    null,
    'Prodotto scalare'
);

var _ref12 = Object(preact_min["h"])(
    'p',
    null,
    'Si chiama scalare perch\xE8 il risultato \xE8 uno scalare, non un vettore.'
);

var _ref13 = Object(preact_min["h"])(
    'h2',
    null,
    'Leggi di Newton'
);

var _ref14 = Object(preact_min["h"])(
    'h3',
    null,
    '1\u1D43: Inerzia'
);

var _ref15 = Object(preact_min["h"])(
    'p',
    null,
    'Se un corpo puntiforme ha forza risultante nulla, allora la sua velocit\xE0 non cambia.'
);

var _ref16 = Object(preact_min["h"])(
    'h3',
    null,
    '2\u1D43: Proporzionalit\xE0'
);

var _ref17 = Object(preact_min["h"])(
    'p',
    null,
    'La forza risultante di un corpo \xE8 direttamente proporzionale alla sua accelerazione, e la costante di proporzionalit\xE0 \xE8 la ',
    Object(preact_min["h"])(
        'i',
        null,
        'massa'
    ),
    '.'
);

var _ref18 = Object(preact_min["h"])(
    'h3',
    null,
    '3\u1D43: Azione e reazione'
);

var _ref19 = Object(preact_min["h"])(
    'p',
    null,
    'Due corpi esercitano forze uguali e opposte uno sull\'altro.'
);

var _ref20 = Object(preact_min["h"])(
    'h2',
    null,
    'Forza di gravit\xE0'
);

var _ref21 = Object(preact_min["h"])(
    'h3',
    null,
    'Tra due corpi'
);

var _ref22 = Object(preact_min["h"])(
    'p',
    null,
    'Due corpi puntiformi si attirano uno verso l\'altro con forza:'
);

var _ref23 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'G'
    ),
    ' \xE8 la ',
    Object(preact_min["h"])(
        'i',
        null,
        'costante di gravitazione universale'
    ),
    ' e vale:'
);

var _ref24 = Object(preact_min["h"])(
    'h3',
    null,
    'Verso la Terra'
);

var _ref25 = Object(preact_min["h"])(
    'p',
    null,
    'Se nel sistema di riferimento consideriamo la Terra ferma, allora un corpo \xE8 attratto verso la Terra con forza ',
    Object(preact_min["h"])(
        'i',
        null,
        'peso'
    ),
    ' uguale a:'
);

var _ref26 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'g'
    ),
    ' \xE8 la ',
    Object(preact_min["h"])(
        'i',
        null,
        'costante di gravit\xE0'
    ),
    ' della Terra, e vale:'
);

var _ref27 = Object(preact_min["h"])(
    'h3',
    null,
    'Su pianeti diversi'
);

var _ref28 = Object(preact_min["h"])(
    'p',
    null,
    'Per pianeti diversi dalla Terra vale la stessa regola:'
);

var _ref29 = Object(preact_min["h"])(
    'p',
    null,
    'L\'unica differenza \xE8 che cambia la ',
    Object(preact_min["h"])(
        'i',
        null,
        'costante di gravit\xE0'
    ),
    ':'
);

var _ref30 = Object(preact_min["h"])(
    'h2',
    null,
    'Forze di contatto'
);

var _ref31 = Object(preact_min["h"])(
    panel_Panel,
    null,
    Object(preact_min["h"])(
        'h3',
        null,
        'Normale'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Si oppone alle forze applicate alla superficie di contatto.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Un libro appoggiato su un tavolo ha la ',
        Object(preact_min["h"])(
            'b',
            null,
            'forza di gravit\xE0'
        ),
        ' che lo attira verso il terreno e la ',
        Object(preact_min["h"])(
            'b',
            null,
            'forza normale'
        ),
        ' che lo trattiene dal cadere.'
    )
);

var _ref32 = Object(preact_min["h"])(
    'h3',
    null,
    'Attrito statico'
);

var _ref33 = Object(preact_min["h"])(
    'p',
    null,
    'Impedisce a un corpo di muoversi se non viene spinto da una forza che supera una certa soglia:'
);

var _ref34 = Object(preact_min["h"])(
    'h3',
    null,
    'Attrito dinamico'
);

var _ref35 = Object(preact_min["h"])(
    'p',
    null,
    'Rallenta i corpi che si stanno muovendo finch\xE8 essi non si fermano:'
);

var _ref36 = Object(preact_min["h"])(
    panel_Panel,
    null,
    Object(preact_min["h"])(
        'h3',
        null,
        'Tensione'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'E\' forza trasmessa tra due estremi di una fune.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Pu\xF2 essere redirezionata per mezzo di carrucole.'
    )
);

var _ref37 = Object(preact_min["h"])(
    'h3',
    null,
    'Elastica'
);

var _ref38 = Object(preact_min["h"])(
    'p',
    null,
    'Una molla cerca sempre di tornare alla sua posizione indeformata con forza:'
);

var _ref39 = Object(preact_min["h"])(
    'p',
    null,
    '(E\' negativa perch\xE8 la forza \xE8 opposta a quella applicata per deformarla.)'
);

var _ref40 = Object(preact_min["h"])(
    'h2',
    null,
    'Cinematica'
);

var _ref41 = Object(preact_min["h"])(
    'h3',
    null,
    'Spostamento'
);

var _ref42 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 un vettore che indica la posizione di un corpo rispetto a un\'origine.'
);

var _ref43 = Object(preact_min["h"])(
    'h3',
    null,
    'Velocit\xE0'
);

var _ref44 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 un vettore che misura la variazione di posizione nel tempo.'
);

var _ref45 = Object(preact_min["h"])(
    'p',
    null,
    'Se si considera un intervallo di tempo infinitesimale si dice ',
    Object(preact_min["h"])(
        'i',
        null,
        'velocit\xE0 istantanea'
    ),
    ':'
);

var _ref46 = Object(preact_min["h"])(
    'h3',
    null,
    'Accelerazione'
);

var _ref47 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 un vettore che misura la variazione di velocit\xE0 nel tempo.'
);

var _ref48 = Object(preact_min["h"])(
    'p',
    null,
    'Se si considera un intervallo di tempo infinitesimale si dice ',
    Object(preact_min["h"])(
        'i',
        null,
        'accelerazione istantanea'
    ),
    ':'
);

var _ref49 = Object(preact_min["h"])(
    'h3',
    null,
    'Quantit\xE0 di moto ',
    Object(preact_min["h"])(
        'small',
        null,
        '(momento lineare)'
    )
);

var _ref50 = Object(preact_min["h"])(
    'p',
    null,
    'La quantit\xE0 di moto \xE8 una propriet\xE0 vettoriale dei corpi:'
);

var _ref51 = Object(preact_min["h"])(
    'p',
    null,
    'Se la forza risultante \xE8 nulla, la quantit\xE0 di moto non cambia.'
);

var _ref52 = Object(preact_min["h"])(
    'h2',
    null,
    'Moto rettilineo uniforme'
);

var _ref53 = Object(preact_min["h"])(
    'h3',
    null,
    'Spostamento'
);

var _ref54 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'i',
        null,
        'legge oraria'
    ),
    ' \xE8:'
);

var _ref55 = Object(preact_min["h"])(
    'h3',
    null,
    'Velocit\xE0'
);

var _ref56 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 costante:'
);

var _ref57 = Object(preact_min["h"])(
    'h3',
    null,
    'Accelerazione'
);

var _ref58 = Object(preact_min["h"])(
    'p',
    null,
    'La velocit\xE0 non varia:'
);

var _ref59 = Object(preact_min["h"])(
    panel_Panel,
    null,
    Object(preact_min["h"])(
        'h3',
        null,
        'Forze'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Si applica la prima legge di Newton:'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'f(t) = 0'
        )
    )
);

var _ref60 = Object(preact_min["h"])(
    'h2',
    null,
    'Moto rettilineo uniformemente accelerato'
);

var _ref61 = Object(preact_min["h"])(
    'h3',
    null,
    'Spostamento'
);

var _ref62 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'i',
        null,
        'legge oraria'
    ),
    ' \xE8:'
);

var _ref63 = Object(preact_min["h"])(
    'h3',
    null,
    'Velocit\xE0'
);

var _ref64 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 una retta:'
);

var _ref65 = Object(preact_min["h"])(
    'h3',
    null,
    'Accelerazione'
);

var _ref66 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 costante:'
);

var _ref67 = Object(preact_min["h"])(
    panel_Panel,
    null,
    Object(preact_min["h"])(
        'h3',
        null,
        'Forze'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Si applica la prima legge di Newton:'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'f(t) = m a'
        )
    )
);

var _ref68 = Object(preact_min["h"])(
    'h2',
    null,
    'Moto armonico semplice'
);

var _ref69 = Object(preact_min["h"])(
    panel_Panel,
    null,
    Object(preact_min["h"])(
        'h3',
        null,
        'Ampiezza'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'E\' la distanza dal centro massima che raggiunge il corpo.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        '(L\'ampiezza di una sinusoide.)'
    )
);

var _ref70 = Object(preact_min["h"])(
    'h3',
    null,
    'Velocit\xE0 angolare'
);

var _ref71 = Object(preact_min["h"])(
    'p',
    null,
    'Indica quanto in fretta cambia la posizione del corpo.'
);

var _ref72 = Object(preact_min["h"])(
    'p',
    null,
    'Dipende dal periodo:'
);

var _ref73 = Object(preact_min["h"])(
    'h3',
    null,
    'Spostamento'
);

var _ref74 = Object(preact_min["h"])(
    'p',
    null,
    'E\' una sinusoide:'
);

var _ref75 = Object(preact_min["h"])(
    'h3',
    null,
    'Velocit\xE0'
);

var _ref76 = Object(preact_min["h"])(
    'h3',
    null,
    'Accelerazione'
);

var _ref77 = Object(preact_min["h"])(
    panel_Panel,
    null,
    Object(preact_min["h"])(
        'h3',
        null,
        'Forze'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Si applica la prima legge di Newton:'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'f(t) = m a'
        )
    )
);

var _ref78 = Object(preact_min["h"])(
    'h2',
    null,
    'Moti composti'
);

var _ref79 = Object(preact_min["h"])(
    panel_Panel,
    null,
    Object(preact_min["h"])(
        'h3',
        null,
        'Moto parabolico'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Il moto parabolico \xE8 dato sommando un moto rettilineo uniforme sull\'asse orizzontale e un moto rettilineo uniformemente accelerato sull\'asse verticale.'
    )
);

var _ref80 = Object(preact_min["h"])(
    'h3',
    null,
    'Moto circolare uniforme'
);

var _ref81 = Object(preact_min["h"])(
    'h2',
    null,
    'Moto circolare uniforme'
);

var _ref82 = Object(preact_min["h"])(
    'h3',
    null,
    'Velocit\xE0 angolare'
);

var _ref83 = Object(preact_min["h"])(
    'p',
    null,
    'Quanto cambia la fase nel tempo.'
);

var _ref84 = Object(preact_min["h"])(
    'h3',
    null,
    'Fase'
);

var _ref85 = Object(preact_min["h"])(
    'p',
    null,
    'E\' l\'angolo percorso dal corpo rispetto alla posizione iniziale.'
);

var _ref86 = Object(preact_min["h"])(
    'h3',
    null,
    'Velocit\xE0'
);

var _ref87 = Object(preact_min["h"])(
    'p',
    null,
    'Si applicano le formule per la circonferenza:'
);

var _ref88 = Object(preact_min["h"])(
    'h3',
    null,
    'Accelerazione'
);

var _ref89 = Object(preact_min["h"])(
    'p',
    null,
    'Il corpo ha sempre un accelerazione verso il centro che gli impedisce di abbandonare il moto:'
);

var _ref90 = Object(preact_min["h"])(
    'h3',
    null,
    'Forza centripeta'
);

var _ref91 = Object(preact_min["h"])(
    'h3',
    null,
    '\xC8 verso il centro e si calcola con:'
);

var _ref92 = Object(preact_min["h"])(
    'h2',
    null,
    'Lavoro ed energia'
);

var _ref93 = Object(preact_min["h"])(
    'h3',
    null,
    'Lavoro'
);

var _ref94 = Object(preact_min["h"])(
    'p',
    null,
    'E\' compiuto da una forza che sposta un corpo.'
);

var _ref95 = Object(preact_min["h"])(
    'p',
    null,
    '(Se la forza non \xE8 parallela allo spostamento, il prodotto scalare ci fa considerare solo la componente parallela.)'
);

var _ref96 = Object(preact_min["h"])(
    'h3',
    null,
    'Energia cinetica'
);

var _ref97 = Object(preact_min["h"])(
    'p',
    null,
    'Un corpo ha energia cinetica in ogni momento uguale a:'
);

var _ref98 = Object(preact_min["h"])(
    'p',
    null,
    'Se una forza effettua lavoro su un corpo, cambia la sua energia cinetica pari al lavoro effettuato:'
);

var _ref99 = Object(preact_min["h"])(
    'h3',
    null,
    'Energia potenziale gravitazionale'
);

var _ref100 = Object(preact_min["h"])(
    'p',
    null,
    'Un corpo ha energia potenziale in ogni momento pari a:'
);

var _ref101 = Object(preact_min["h"])(
    'p',
    null,
    '(Con ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'h'
    ),
    ' uguale a un altezza scelta come punto di riferimento.)'
);

var _ref102 = Object(preact_min["h"])(
    'h3',
    null,
    'Energia potenziale elastica'
);

var _ref103 = Object(preact_min["h"])(
    'p',
    null,
    'Una molla ha sempre energia potenziale elastica pari a:'
);

var _ref104 = Object(preact_min["h"])(
    'h3',
    null,
    'Forze conservative'
);

var _ref105 = Object(preact_min["h"])(
    'p',
    null,
    'Sono conservative le forze per le quali il lavoro compiuto non dipende dal percorso seguito per andare dalla partenza all\'arrivo.'
);

var _ref106 = Object(preact_min["h"])(
    'p',
    null,
    'Ad esempio, \xE8 conservativa la ',
    Object(preact_min["h"])(
        'b',
        null,
        'forza di gravit\xE0'
    ),
    ', ma non \xE8 conservativa la ',
    Object(preact_min["h"])(
        'del',
        null,
        'forza di attrito'
    ),
    '.'
);

var _ref107 = Object(preact_min["h"])(
    'p',
    null,
    'Se in un sistema ci sono solo forze conservative, allora l\'energia meccanica totale si conserva:'
);

var _ref108 = Object(preact_min["h"])(
    'h3',
    null,
    'Potenza'
);

var _ref109 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 la velocit\xE0 di trasferimento di energia:'
);

var fisica_Fisica = function (_Component) {
    fisica__inherits(Fisica, _Component);

    function Fisica() {
        fisica__classCallCheck(this, Fisica);

        return fisica__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Fisica.prototype.render = function render() {
        return Object(preact_min["h"])(
            'div',
            null,
            _ref,
            _ref2,
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref3,
                    _ref4,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject2)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject3)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref5,
                    _ref6,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject4)
                        )
                    ),
                    _ref7
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref8,
                    _ref9,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject5)
                        )
                    ),
                    _ref10
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref11,
                    _ref12,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject6)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Produce il modulo della proiezione di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject7)
                        ),
                        ' su ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject8)
                        ),
                        '.'
                    )
                )
            ),
            _ref13,
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref14,
                    _ref15,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject9)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref16,
                    _ref17,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject10)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref18,
                    _ref19,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject11)
                        )
                    )
                )
            ),
            _ref20,
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref21,
                    _ref22,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject12)
                        )
                    ),
                    _ref23,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject13)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref24,
                    _ref25,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject14)
                        )
                    ),
                    _ref26,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject15)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref27,
                    _ref28,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject14)
                        )
                    ),
                    _ref29,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject16)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject17)
                        )
                    )
                )
            ),
            _ref30,
            Object(preact_min["h"])(
                split_Split,
                null,
                _ref31,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref32,
                    _ref33,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject18)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref34,
                    _ref35,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject19)
                        )
                    )
                ),
                _ref36,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref37,
                    _ref38,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject20)
                        )
                    ),
                    _ref39
                )
            ),
            _ref40,
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref41,
                    _ref42,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject21)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref43,
                    _ref44,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject22)
                        )
                    ),
                    _ref45,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject23)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref46,
                    _ref47,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject24)
                        )
                    ),
                    _ref48,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject25)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref49,
                    _ref50,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject26)
                        )
                    ),
                    _ref51,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject27)
                        )
                    )
                )
            ),
            _ref52,
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref53,
                    _ref54,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject28)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref55,
                    _ref56,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject29)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref57,
                    _ref58,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject30)
                        )
                    )
                ),
                _ref59
            ),
            _ref60,
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref61,
                    _ref62,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject31)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref63,
                    _ref64,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject32)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref65,
                    _ref66,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject33)
                        )
                    )
                ),
                _ref67
            ),
            _ref68,
            Object(preact_min["h"])(
                split_Split,
                null,
                _ref69,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref70,
                    _ref71,
                    _ref72,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject34)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref73,
                    _ref74,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject35)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref75,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'E\' la sinusoide dello spostamento, sfasata di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject36)
                        ),
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject37)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref76,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'E\' la sinusoide della velocit\xE0, sfasata di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject36)
                        ),
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject38)
                        )
                    )
                ),
                _ref77
            ),
            _ref78,
            Object(preact_min["h"])(
                split_Split,
                null,
                _ref79,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref80,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il moto parabolico \xE8 dato sommando due moti armonici semplici: uno sull\'asse X, e l\'altro, sfasato di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject36)
                        ),
                        ', sull\'asse Y.'
                    )
                )
            ),
            _ref81,
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref82,
                    _ref83,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject34)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref84,
                    _ref85,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Si indica con ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject39)
                        ),
                        ', e generalmente si usa in radianti.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref86,
                    _ref87,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject40)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref88,
                    _ref89,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject41)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref90,
                    _ref91,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject42)
                        )
                    )
                )
            ),
            _ref92,
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref93,
                    _ref94,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject43)
                        )
                    ),
                    _ref95
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref96,
                    _ref97,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject44)
                        )
                    ),
                    _ref98,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject45)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref99,
                    _ref100,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject46)
                        )
                    ),
                    _ref101
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref102,
                    _ref103,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject47)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref104,
                    _ref105,
                    _ref106,
                    _ref107,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject48)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref108,
                    _ref109,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject49)
                        )
                    )
                )
            )
        );
    };

    return Fisica;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/copyright.css
var copyright = __webpack_require__("qMTX");
var copyright_default = /*#__PURE__*/__webpack_require__.n(copyright);

// CONCATENATED MODULE: ./components/copyright.js


function copyright__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function copyright__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function copyright__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var copyright__ref = Object(preact_min["h"])(
	"a",
	{ href: "https://creativecommons.org/licenses/by-sa/4.0/" },
	"CC BY-SA 4.0"
);

var copyright_Copyright = function (_Component) {
	copyright__inherits(Copyright, _Component);

	function Copyright() {
		copyright__classCallCheck(this, Copyright);

		return copyright__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Copyright.prototype.render = function render() {
		return Object(preact_min["h"])(
			"div",
			{ "class": copyright_default.a.copyright },
			"\xA9 2019 - Stefano Pigozzi - ",
			copyright__ref
		);
	};

	return Copyright;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var index__ref = Object(preact_min["h"])(
	'div',
	null,
	Object(preact_min["h"])(fisica_Fisica, null),
	Object(preact_min["h"])(copyright_Copyright, null)
);

var App = function (_Component) {
	index__inherits(App, _Component);

	function App() {
		index__classCallCheck(this, App);

		return index__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	App.prototype.render = function render() {
		return index__ref;
	};

	return App;
}(preact_min["Component"]);



/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "P9k+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"panel":"panel__22fOQ"};

/***/ }),

/***/ "qMTX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"copyright":"copyright__TBGn1"};

/***/ }),

/***/ "xHuH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map