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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_preact@10.4.0@preact/dist/preact.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/_preact@10.4.0@preact/dist/preact.module.js ***!
  \******************************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return H; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrate\", function() { return I; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fragment\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRef\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidElement\", function() { return l; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return m; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return L; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContext\", function() { return M; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toChildArray\", function() { return x; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_unmount\", function() { return D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return n; });\nvar n,\n    l,\n    u,\n    i,\n    t,\n    o,\n    r,\n    f,\n    e = {},\n    c = [],\n    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;\n\nfunction a(n, l) {\n  for (var u in l) n[u] = l[u];\n\n  return n;\n}\n\nfunction v(n) {\n  var l = n.parentNode;\n  l && l.removeChild(n);\n}\n\nfunction h(n, l, u) {\n  var i,\n      t = arguments,\n      o = {};\n\n  for (i in l) \"key\" !== i && \"ref\" !== i && (o[i] = l[i]);\n\n  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);\n  if (null != u && (o.children = u), \"function\" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);\n  return p(n, o, l && l.key, l && l.ref, null);\n}\n\nfunction p(l, u, i, t, o) {\n  var r = {\n    type: l,\n    props: u,\n    key: i,\n    ref: t,\n    __k: null,\n    __: null,\n    __b: 0,\n    __e: null,\n    __d: void 0,\n    __c: null,\n    constructor: void 0,\n    __v: o\n  };\n  return null == o && (r.__v = r), n.vnode && n.vnode(r), r;\n}\n\nfunction y() {\n  return {};\n}\n\nfunction d(n) {\n  return n.children;\n}\n\nfunction m(n, l) {\n  this.props = n, this.context = l;\n}\n\nfunction w(n, l) {\n  if (null == l) return n.__ ? w(n.__, n.__.__k.indexOf(n) + 1) : null;\n\n  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;\n\n  return \"function\" == typeof n.type ? w(n) : null;\n}\n\nfunction g(n) {\n  var l, u;\n\n  if (null != (n = n.__) && null != n.__c) {\n    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {\n      n.__e = n.__c.base = u.__e;\n      break;\n    }\n\n    return g(n);\n  }\n}\n\nfunction k(l) {\n  (!l.__d && (l.__d = !0) && u.push(l) && !i++ || o !== n.debounceRendering) && ((o = n.debounceRendering) || t)(_);\n}\n\nfunction _() {\n  for (var n; i = u.length;) n = u.sort(function (n, l) {\n    return n.__v.__b - l.__v.__b;\n  }), u = [], n.some(function (n) {\n    var l, u, i, t, o, r, f;\n    n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = a({}, o)).__v = i, t = A(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == r ? w(o) : r), T(u, o), t != r && g(o)));\n  });\n}\n\nfunction b(n, l, u, i, t, o, r, f, s) {\n  var a,\n      h,\n      p,\n      y,\n      d,\n      m,\n      g,\n      k = u && u.__k || c,\n      _ = k.length;\n  if (f == e && (f = null != o ? o[0] : _ ? w(u, 0) : null), a = 0, l.__k = x(l.__k, function (u) {\n    if (null != u) {\n      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[a]) || p && u.key == p.key && u.type === p.type) k[a] = void 0;else for (h = 0; h < _; h++) {\n        if ((p = k[h]) && u.key == p.key && u.type === p.type) {\n          k[h] = void 0;\n          break;\n        }\n\n        p = null;\n      }\n\n      if (y = A(n, u, p = p || e, i, t, o, r, f, s), (h = u.ref) && p.ref != h && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(h, u.__c || y, u)), null != y) {\n        var c;\n        if (null == m && (m = y), void 0 !== u.__d) c = u.__d, u.__d = void 0;else if (o == p || y != f || null == y.parentNode) {\n          n: if (null == f || f.parentNode !== n) n.appendChild(y), c = null;else {\n            for (d = f, h = 0; (d = d.nextSibling) && h < _; h += 2) if (d == y) break n;\n\n            n.insertBefore(y, f), c = f;\n          }\n\n          \"option\" == l.type && (n.value = \"\");\n        }\n        f = void 0 !== c ? c : y.nextSibling, \"function\" == typeof l.type && (l.__d = f);\n      } else f && p.__e == f && f.parentNode != n && (f = w(p));\n    }\n\n    return a++, u;\n  }), l.__e = m, null != o && \"function\" != typeof l.type) for (a = o.length; a--;) null != o[a] && v(o[a]);\n\n  for (a = _; a--;) null != k[a] && D(k[a], k[a]);\n\n  if (g) for (a = 0; a < g.length; a++) j(g[a], g[++a], g[++a]);\n}\n\nfunction x(n, l, u) {\n  if (null == u && (u = []), null == n || \"boolean\" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) x(n[i], l, u);else u.push(l ? l(\"string\" == typeof n || \"number\" == typeof n ? p(null, n, null, null, n) : null != n.__e || null != n.__c ? p(n.type, n.props, n.key, null, n.__v) : n) : n);\n  return u;\n}\n\nfunction P(n, l, u, i, t) {\n  var o;\n\n  for (o in u) \"children\" === o || \"key\" === o || o in l || N(n, o, null, u[o], i);\n\n  for (o in l) t && \"function\" != typeof l[o] || \"children\" === o || \"key\" === o || \"value\" === o || \"checked\" === o || u[o] === l[o] || N(n, o, l[o], u[o], i);\n}\n\nfunction C(n, l, u) {\n  \"-\" === l[0] ? n.setProperty(l, u) : n[l] = \"number\" == typeof u && !1 === s.test(l) ? u + \"px\" : null == u ? \"\" : u;\n}\n\nfunction N(n, l, u, i, t) {\n  var o, r, f, e, c;\n  if (t ? \"className\" === l && (l = \"class\") : \"class\" === l && (l = \"className\"), \"style\" === l) {\n    if (o = n.style, \"string\" == typeof u) o.cssText = u;else {\n      if (\"string\" == typeof i && (o.cssText = \"\", i = null), i) for (e in i) u && e in u || C(o, e, \"\");\n      if (u) for (c in u) i && u[c] === i[c] || C(o, c, u[c]);\n    }\n  } else \"o\" === l[0] && \"n\" === l[1] ? (r = l !== (l = l.replace(/Capture$/, \"\")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, z, r), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, z, r)) : \"list\" !== l && \"tagName\" !== l && \"form\" !== l && \"type\" !== l && \"size\" !== l && !t && l in n ? n[l] = null == u ? \"\" : u : \"function\" != typeof u && \"dangerouslySetInnerHTML\" !== l && (l !== (l = l.replace(/^xlink:?/, \"\")) ? null == u || !1 === u ? n.removeAttributeNS(\"http://www.w3.org/1999/xlink\", l.toLowerCase()) : n.setAttributeNS(\"http://www.w3.org/1999/xlink\", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));\n}\n\nfunction z(l) {\n  this.l[l.type](n.event ? n.event(l) : l);\n}\n\nfunction A(l, u, i, t, o, r, f, e, c) {\n  var s,\n      v,\n      h,\n      p,\n      y,\n      w,\n      g,\n      k,\n      _,\n      x,\n      P = u.type;\n\n  if (void 0 !== u.constructor) return null;\n  (s = n.__b) && s(u);\n\n  try {\n    n: if (\"function\" == typeof P) {\n      if (k = u.props, _ = (s = P.contextType) && t[s.__c], x = s ? _ ? _.props.value : s.__ : t, i.__c ? g = (v = u.__c = i.__c).__ = v.__E : (\"prototype\" in P && P.prototype.render ? u.__c = v = new P(k, x) : (u.__c = v = new m(k, x), v.constructor = P, v.render = E), _ && _.sub(v), v.props = k, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = a({}, v.__s)), a(v.__s, P.getDerivedStateFromProps(k, v.__s))), p = v.props, y = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {\n        if (null == P.getDerivedStateFromProps && k !== p && null != v.componentWillReceiveProps && v.componentWillReceiveProps(k, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(k, v.__s, x) || u.__v === i.__v && !v.__) {\n          for (v.props = k, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), s = 0; s < u.__k.length; s++) u.__k[s] && (u.__k[s].__ = u);\n\n          break n;\n        }\n\n        null != v.componentWillUpdate && v.componentWillUpdate(k, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {\n          v.componentDidUpdate(p, y, w);\n        });\n      }\n      v.context = x, v.props = k, v.state = v.__s, (s = n.__r) && s(u), v.__d = !1, v.__v = u, v.__P = l, s = v.render(v.props, v.state, v.context), u.__k = null != s && s.type == d && null == s.key ? s.props.children : Array.isArray(s) ? s : [s], null != v.getChildContext && (t = a(a({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(p, y)), b(l, u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), g && (v.__E = v.__ = null), v.__e = !1;\n    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = $(i.__e, u, i, t, o, r, f, c);\n\n    (s = n.diffed) && s(u);\n  } catch (l) {\n    u.__v = null, n.__e(l, u, i);\n  }\n\n  return u.__e;\n}\n\nfunction T(l, u) {\n  n.__c && n.__c(u, l), l.some(function (u) {\n    try {\n      l = u.__h, u.__h = [], l.some(function (n) {\n        n.call(u);\n      });\n    } catch (l) {\n      n.__e(l, u.__v);\n    }\n  });\n}\n\nfunction $(n, l, u, i, t, o, r, f) {\n  var s,\n      a,\n      v,\n      h,\n      p,\n      y = u.props,\n      d = l.props;\n  if (t = \"svg\" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {\n    n = a, o[s] = null;\n    break;\n  }\n\n  if (null == n) {\n    if (null === l.type) return document.createTextNode(d);\n    n = t ? document.createElementNS(\"http://www.w3.org/2000/svg\", l.type) : document.createElement(l.type, d.is && {\n      is: d.is\n    }), o = null, f = !1;\n  }\n\n  if (null === l.type) y !== d && n.data != d && (n.data = d);else {\n    if (null != o && (o = c.slice.call(n.childNodes)), v = (y = u.props || e).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !f) {\n      if (y === e) for (y = {}, p = 0; p < n.attributes.length; p++) y[n.attributes[p].name] = n.attributes[p].value;\n      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || \"\"));\n    }\n\n    P(n, d, y, t, f), l.__k = l.props.children, h || b(n, l, u, i, \"foreignObject\" !== l.type && t, o, r, e, f), f || (\"value\" in d && void 0 !== d.value && d.value !== n.value && (n.value = null == d.value ? \"\" : d.value), \"checked\" in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked));\n  }\n  return n;\n}\n\nfunction j(l, u, i) {\n  try {\n    \"function\" == typeof l ? l(u) : l.current = u;\n  } catch (l) {\n    n.__e(l, i);\n  }\n}\n\nfunction D(l, u, i) {\n  var t, o, r;\n\n  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || j(t, null, u)), i || \"function\" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {\n    if (t.componentWillUnmount) try {\n      t.componentWillUnmount();\n    } catch (l) {\n      n.__e(l, u);\n    }\n    t.base = t.__P = null;\n  }\n\n  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && D(t[r], u, i);\n  null != o && v(o);\n}\n\nfunction E(n, l, u) {\n  return this.constructor(n, u);\n}\n\nfunction H(l, u, i) {\n  var t, o, f;\n  n.__ && n.__(l, u), o = (t = i === r) ? null : i && i.__k || u.__k, l = h(d, null, [l]), f = [], A(u, (t ? u : i || u).__k = l, o || e, e, void 0 !== u.ownerSVGElement, i && !t ? [i] : o ? null : c.slice.call(u.childNodes), f, i || e, t), T(f, l);\n}\n\nfunction I(n, l) {\n  H(n, l, r);\n}\n\nfunction L(n, l) {\n  return l = a(a({}, n.props), l), arguments.length > 2 && (l.children = c.slice.call(arguments, 2)), p(n.type, l, l.key || n.key, l.ref || n.ref, null);\n}\n\nfunction M(n) {\n  var l = {},\n      u = {\n    __c: \"__cC\" + f++,\n    __: n,\n    Consumer: function (n, l) {\n      return n.children(l);\n    },\n    Provider: function (n) {\n      var i,\n          t = this;\n      return this.getChildContext || (i = [], this.getChildContext = function () {\n        return l[u.__c] = t, l;\n      }, this.shouldComponentUpdate = function (n) {\n        t.props.value !== n.value && i.some(function (l) {\n          l.context = n.value, k(l);\n        });\n      }, this.sub = function (n) {\n        i.push(n);\n        var l = n.componentWillUnmount;\n\n        n.componentWillUnmount = function () {\n          i.splice(i.indexOf(n), 1), l && l.call(n);\n        };\n      }), n.children;\n    }\n  };\n  return u.Consumer.contextType = u, u;\n}\n\nn = {\n  __e: function (n, l) {\n    for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {\n      if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return k(u.__E = u);\n    } catch (l) {\n      n = l;\n    }\n\n    throw n;\n  }\n}, l = function (n) {\n  return null != n && void 0 === n.constructor;\n}, m.prototype.setState = function (n, l) {\n  var u;\n  u = this.__s !== this.state ? this.__s : this.__s = a({}, this.state), \"function\" == typeof n && (n = n(u, this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));\n}, m.prototype.forceUpdate = function (n) {\n  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));\n}, m.prototype.render = d, u = [], i = 0, t = \"function\" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, r = e, f = 0;\n\n\n//# sourceURL=webpack:///./node_modules/_preact@10.4.0@preact/dist/preact.module.js?");

/***/ }),

/***/ "./src/components/Demo/index.less":
/*!****************************************!*\
  !*** ./src/components/Demo/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _styles = {\n  \"box1\": {\n    \"position\": \"absolute\",\n    \"top\": 0,\n    \"left\": 0,\n    \"width\": \"100vw\",\n    \"height\": \"100vw\",\n    \"background\": \"red\"\n  }\n};\n  \n  \n  \n  module.exports = _styles;\n  \n\n//# sourceURL=webpack:///./src/components/Demo/index.less?");

/***/ }),

/***/ "./src/components/Demo/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Demo/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst preact_1 = __webpack_require__(/*! preact */ \"./node_modules/_preact@10.4.0@preact/dist/preact.module.js\");\n\n__webpack_require__(/*! ./index.less */ \"./src/components/Demo/index.less\");\n\nclass Demo extends preact_1.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return preact_1.h(\"div\", {\n      className: \"box1\"\n    }, this.props.data);\n  }\n\n}\n\nexports.default = Demo;\n\n//# sourceURL=webpack:///./src/components/Demo/index.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst preact_1 = __webpack_require__(/*! preact */ \"./node_modules/_preact@10.4.0@preact/dist/preact.module.js\");\n\nconst Demo_1 = __importDefault(__webpack_require__(/*! ./components/Demo */ \"./src/components/Demo/index.tsx\"));\n\nfunction start(ele) {\n  preact_1.render(preact_1.h(Demo_1.default, {\n    data: \"11113331\"\n  }), ele);\n}\n\nexports.start = start;\nconsole.log(1111111);\nstart(document.body);\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

/******/ });