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

/***/ "./node_modules/_preact@10.0.1@preact/dist/preact.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/_preact@10.0.1@preact/dist/preact.module.js ***!
  \******************************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return I; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrate\", function() { return L; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fragment\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRef\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidElement\", function() { return l; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return m; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return M; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContext\", function() { return O; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toChildArray\", function() { return x; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_unmount\", function() { return D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return n; });\nvar n,\n    l,\n    u,\n    t,\n    i,\n    r,\n    o,\n    f = {},\n    e = [],\n    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;\n\nfunction s(n, l) {\n  for (var u in l) n[u] = l[u];\n\n  return n;\n}\n\nfunction a(n) {\n  var l = n.parentNode;\n  l && l.removeChild(n);\n}\n\nfunction h(n, l, u) {\n  var t,\n      i,\n      r,\n      o,\n      f = arguments;\n  if (l = s({}, l), arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) u.push(f[t]);\n  if (null != u && (l.children = u), null != n && null != n.defaultProps) for (i in n.defaultProps) void 0 === l[i] && (l[i] = n.defaultProps[i]);\n  return o = l.key, null != (r = l.ref) && delete l.ref, null != o && delete l.key, v(n, l, o, r);\n}\n\nfunction v(l, u, t, i) {\n  var r = {\n    type: l,\n    props: u,\n    key: t,\n    ref: i,\n    __k: null,\n    __p: null,\n    __b: 0,\n    __e: null,\n    l: null,\n    __c: null,\n    constructor: void 0\n  };\n  return n.vnode && n.vnode(r), r;\n}\n\nfunction p() {\n  return {};\n}\n\nfunction d(n) {\n  return n.children;\n}\n\nfunction y(n) {\n  if (null == n || \"boolean\" == typeof n) return null;\n  if (\"string\" == typeof n || \"number\" == typeof n) return v(null, n, null, null);\n\n  if (null != n.__e || null != n.__c) {\n    var l = v(n.type, n.props, n.key, null);\n    return l.__e = n.__e, l;\n  }\n\n  return n;\n}\n\nfunction m(n, l) {\n  this.props = n, this.context = l;\n}\n\nfunction w(n, l) {\n  if (null == l) return n.__p ? w(n.__p, n.__p.__k.indexOf(n) + 1) : null;\n\n  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;\n\n  return \"function\" == typeof n.type ? w(n) : null;\n}\n\nfunction g(n) {\n  var l, u;\n\n  if (null != (n = n.__p) && null != n.__c) {\n    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {\n      n.__e = n.__c.base = u.__e;\n      break;\n    }\n\n    return g(n);\n  }\n}\n\nfunction k(l) {\n  (!l.__d && (l.__d = !0) && 1 === u.push(l) || i !== n.debounceRendering) && (i = n.debounceRendering, (n.debounceRendering || t)(_));\n}\n\nfunction _() {\n  var n, l, t, i, r, o, f;\n\n  for (u.sort(function (n, l) {\n    return l.__v.__b - n.__v.__b;\n  }); n = u.pop();) n.__d && (t = void 0, i = void 0, o = (r = (l = n).__v).__e, (f = l.__P) && (t = [], i = $(f, r, s({}, r), l.__n, void 0 !== f.ownerSVGElement, null, t, null == o ? w(r) : o), j(t, r), i != o && g(r)));\n}\n\nfunction b(n, l, u, t, i, r, o, c, s) {\n  var h,\n      v,\n      p,\n      d,\n      y,\n      m,\n      g,\n      k = u && u.__k || e,\n      _ = k.length;\n  if (c == f && (c = null != r ? r[0] : _ ? w(u, 0) : null), h = 0, l.__k = x(l.__k, function (u) {\n    if (null != u) {\n      if (u.__p = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) k[h] = void 0;else for (v = 0; v < _; v++) {\n        if ((p = k[v]) && u.key == p.key && u.type === p.type) {\n          k[v] = void 0;\n          break;\n        }\n\n        p = null;\n      }\n\n      if (d = $(n, u, p = p || f, t, i, r, o, c, s), (v = u.ref) && p.ref != v && (g || (g = [])).push(v, u.__c || d, u), null != d) {\n        if (null == m && (m = d), null != u.l) d = u.l, u.l = null;else if (r == p || d != c || null == d.parentNode) {\n          n: if (null == c || c.parentNode !== n) n.appendChild(d);else {\n            for (y = c, v = 0; (y = y.nextSibling) && v < _; v += 2) if (y == d) break n;\n\n            n.insertBefore(d, c);\n          }\n\n          \"option\" == l.type && (n.value = \"\");\n        }\n        c = d.nextSibling, \"function\" == typeof l.type && (l.l = d);\n      }\n    }\n\n    return h++, u;\n  }), l.__e = m, null != r && \"function\" != typeof l.type) for (h = r.length; h--;) null != r[h] && a(r[h]);\n\n  for (h = _; h--;) null != k[h] && D(k[h], k[h]);\n\n  if (g) for (h = 0; h < g.length; h++) A(g[h], g[++h], g[++h]);\n}\n\nfunction x(n, l, u) {\n  if (null == u && (u = []), null == n || \"boolean\" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var t = 0; t < n.length; t++) x(n[t], l, u);else u.push(l ? l(y(n)) : n);\n  return u;\n}\n\nfunction C(n, l, u, t, i) {\n  var r;\n\n  for (r in u) r in l || N(n, r, null, u[r], t);\n\n  for (r in l) i && \"function\" != typeof l[r] || \"value\" === r || \"checked\" === r || u[r] === l[r] || N(n, r, l[r], u[r], t);\n}\n\nfunction P(n, l, u) {\n  \"-\" === l[0] ? n.setProperty(l, u) : n[l] = \"number\" == typeof u && !1 === c.test(l) ? u + \"px\" : null == u ? \"\" : u;\n}\n\nfunction N(n, l, u, t, i) {\n  var r, o, f, e, c;\n  if (\"key\" === (l = i ? \"className\" === l ? \"class\" : l : \"class\" === l ? \"className\" : l) || \"children\" === l) ;else if (\"style\" === l) {\n    if (r = n.style, \"string\" == typeof u) r.cssText = u;else {\n      if (\"string\" == typeof t && (r.cssText = \"\", t = null), t) for (o in t) u && o in u || P(r, o, \"\");\n      if (u) for (f in u) t && u[f] === t[f] || P(r, f, u[f]);\n    }\n  } else \"o\" === l[0] && \"n\" === l[1] ? (e = l !== (l = l.replace(/Capture$/, \"\")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (t || n.addEventListener(l, T, e), (n.u || (n.u = {}))[l] = u) : n.removeEventListener(l, T, e)) : \"list\" !== l && \"tagName\" !== l && \"form\" !== l && !i && l in n ? n[l] = null == u ? \"\" : u : \"function\" != typeof u && \"dangerouslySetInnerHTML\" !== l && (l !== (l = l.replace(/^xlink:?/, \"\")) ? null == u || !1 === u ? n.removeAttributeNS(\"http://www.w3.org/1999/xlink\", l.toLowerCase()) : n.setAttributeNS(\"http://www.w3.org/1999/xlink\", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));\n}\n\nfunction T(l) {\n  return this.u[l.type](n.event ? n.event(l) : l);\n}\n\nfunction $(l, u, t, i, r, o, f, e, c) {\n  var a,\n      h,\n      v,\n      p,\n      y,\n      w,\n      g,\n      k,\n      _,\n      C,\n      P = u.type;\n\n  if (void 0 !== u.constructor) return null;\n  (a = n.__b) && a(u);\n\n  try {\n    n: if (\"function\" == typeof P) {\n      if (k = u.props, _ = (a = P.contextType) && i[a.__c], C = a ? _ ? _.props.value : a.__p : i, t.__c ? g = (h = u.__c = t.__c).__p = h.__E : (\"prototype\" in P && P.prototype.render ? u.__c = h = new P(k, C) : (u.__c = h = new m(k, C), h.constructor = P, h.render = H), _ && _.sub(h), h.props = k, h.state || (h.state = {}), h.context = C, h.__n = i, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && s(h.__s == h.state ? h.__s = s({}, h.__s) : h.__s, P.getDerivedStateFromProps(k, h.__s)), v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && f.push(h);else {\n        if (null == P.getDerivedStateFromProps && null == h.t && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, C), !h.t && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, C)) {\n          for (h.props = k, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = t.__e, u.__k = t.__k, a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__p = u);\n\n          break n;\n        }\n\n        null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, C);\n      }\n      p = h.props, y = h.state, h.context = C, h.props = k, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l, a = h.render(h.props, h.state, h.context), u.__k = x(null != a && a.type == d && null == a.key ? a.props.children : a), null != h.getChildContext && (i = s(s({}, i), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(p, y)), b(l, u, t, i, r, o, f, e, c), h.base = u.__e, a = h.__h, h.__h = [], a.some(function (n) {\n        n.call(h);\n      }), v || null == p || null == h.componentDidUpdate || h.componentDidUpdate(p, y, w), g && (h.__E = h.__p = null), h.t = null;\n    } else u.__e = z(t.__e, u, t, i, r, o, f, c);\n\n    (a = n.diffed) && a(u);\n  } catch (l) {\n    n.__e(l, u, t);\n  }\n\n  return u.__e;\n}\n\nfunction j(l, u) {\n  for (var t; t = l.pop();) try {\n    t.componentDidMount();\n  } catch (l) {\n    n.__e(l, t.__v);\n  }\n\n  n.__c && n.__c(u);\n}\n\nfunction z(n, l, u, t, i, r, o, c) {\n  var s,\n      a,\n      h,\n      v,\n      p,\n      d = u.props,\n      y = l.props;\n  if (i = \"svg\" === l.type || i, null == n && null != r) for (s = 0; s < r.length; s++) if (null != (a = r[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {\n    n = a, r[s] = null;\n    break;\n  }\n\n  if (null == n) {\n    if (null === l.type) return document.createTextNode(y);\n    n = i ? document.createElementNS(\"http://www.w3.org/2000/svg\", l.type) : document.createElement(l.type), r = null;\n  }\n\n  if (null === l.type) null != r && (r[r.indexOf(n)] = null), d !== y && (n.data = y);else if (l !== u) {\n    if (null != r && (r = e.slice.call(n.childNodes)), h = (d = u.props || f).dangerouslySetInnerHTML, v = y.dangerouslySetInnerHTML, !c) {\n      if (d === f) for (d = {}, p = 0; p < n.attributes.length; p++) d[n.attributes[p].name] = n.attributes[p].value;\n      (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || \"\"));\n    }\n\n    C(n, y, d, i, c), l.__k = l.props.children, v || b(n, l, u, t, \"foreignObject\" !== l.type && i, r, o, f, c), c || (\"value\" in y && void 0 !== y.value && y.value !== n.value && (n.value = null == y.value ? \"\" : y.value), \"checked\" in y && void 0 !== y.checked && y.checked !== n.checked && (n.checked = y.checked));\n  }\n  return n;\n}\n\nfunction A(l, u, t) {\n  try {\n    \"function\" == typeof l ? l(u) : l.current = u;\n  } catch (l) {\n    n.__e(l, t);\n  }\n}\n\nfunction D(l, u, t) {\n  var i, r, o;\n\n  if (n.unmount && n.unmount(l), (i = l.ref) && A(i, null, u), t || \"function\" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.l = null, null != (i = l.__c)) {\n    if (i.componentWillUnmount) try {\n      i.componentWillUnmount();\n    } catch (l) {\n      n.__e(l, u);\n    }\n    i.base = i.__P = null;\n  }\n\n  if (i = l.__k) for (o = 0; o < i.length; o++) i[o] && D(i[o], u, t);\n  null != r && a(r);\n}\n\nfunction H(n, l, u) {\n  return this.constructor(n, u);\n}\n\nfunction I(l, u, t) {\n  var i, o, c;\n  n.__p && n.__p(l, u), o = (i = t === r) ? null : t && t.__k || u.__k, l = h(d, null, [l]), c = [], $(u, i ? u.__k = l : (t || u).__k = l, o || f, f, void 0 !== u.ownerSVGElement, t && !i ? [t] : o ? null : e.slice.call(u.childNodes), c, t || f, i), j(c, l);\n}\n\nfunction L(n, l) {\n  I(n, l, r);\n}\n\nfunction M(n, l) {\n  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), v(n.type, l, l.key || n.key, l.ref || n.ref);\n}\n\nfunction O(n) {\n  var l = {},\n      u = {\n    __c: \"__cC\" + o++,\n    __p: n,\n    Consumer: function (n, l) {\n      return n.children(l);\n    },\n    Provider: function (n) {\n      var t,\n          i = this;\n      return this.getChildContext || (t = [], this.getChildContext = function () {\n        return l[u.__c] = i, l;\n      }, this.shouldComponentUpdate = function (l) {\n        n.value !== l.value && t.some(function (n) {\n          n.__P && (n.context = l.value, k(n));\n        });\n      }, this.sub = function (n) {\n        t.push(n);\n        var l = n.componentWillUnmount;\n\n        n.componentWillUnmount = function () {\n          t.splice(t.indexOf(n), 1), l && l.call(n);\n        };\n      }), n.children;\n    }\n  };\n  return u.Consumer.contextType = u, u;\n}\n\nn = {}, l = function (n) {\n  return null != n && void 0 === n.constructor;\n}, m.prototype.setState = function (n, l) {\n  var u = this.__s !== this.state && this.__s || (this.__s = s({}, this.state));\n  (\"function\" != typeof n || (n = n(u, this.props))) && s(u, n), null != n && this.__v && (this.t = !1, l && this.__h.push(l), k(this));\n}, m.prototype.forceUpdate = function (n) {\n  this.__v && (this.t = !0, n && this.__h.push(n), k(this));\n}, m.prototype.render = d, u = [], t = \"function\" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = n.debounceRendering, n.__e = function (n, l, u) {\n  for (var t; l = l.__p;) if ((t = l.__c) && !t.__p) try {\n    if (t.constructor && null != t.constructor.getDerivedStateFromError) t.setState(t.constructor.getDerivedStateFromError(n));else {\n      if (null == t.componentDidCatch) continue;\n      t.componentDidCatch(n);\n    }\n    return k(t.__E = t);\n  } catch (l) {\n    n = l;\n  }\n\n  throw n;\n}, r = f, o = 0;\n\n\n//# sourceURL=webpack:///./node_modules/_preact@10.0.1@preact/dist/preact.module.js?");

/***/ }),

/***/ "./src/components/Demo/index.less":
/*!****************************************!*\
  !*** ./src/components/Demo/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _styles = {\n  \"box\": {\n    \"width\": \"100vw\",\n    \"height\": \"100vw\",\n    \"background\": \"red\"\n  }\n};\n  \n  \n  \n  module.exports = _styles;\n  \n\n//# sourceURL=webpack:///./src/components/Demo/index.less?");

/***/ }),

/***/ "./src/components/Demo/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Demo/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst preact_1 = __webpack_require__(/*! preact */ \"./node_modules/_preact@10.0.1@preact/dist/preact.module.js\");\n\n__webpack_require__(/*! ./index.less */ \"./src/components/Demo/index.less\");\n\nclass Demo extends preact_1.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return preact_1.h(\"div\", {\n      className: \"box\"\n    }, this.props.data);\n  }\n\n}\n\nexports.default = Demo;\n\n//# sourceURL=webpack:///./src/components/Demo/index.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nconst preact_1 = __webpack_require__(/*! preact */ \"./node_modules/_preact@10.0.1@preact/dist/preact.module.js\");\n\nconst Demo_1 = __importDefault(__webpack_require__(/*! ./components/Demo */ \"./src/components/Demo/index.tsx\"));\n\nfunction start(ele) {\n  preact_1.render(preact_1.h(Demo_1.default, {\n    data: \"11113331\"\n  }), ele);\n}\n\nexports.start = start;\nstart(document.body);\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

/******/ });