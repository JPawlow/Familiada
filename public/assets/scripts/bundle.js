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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {\n    \"use strict\";\n\n    if (global.setImmediate) {\n        return;\n    }\n\n    var nextHandle = 1; // Spec says greater than zero\n    var tasksByHandle = {};\n    var currentlyRunningATask = false;\n    var doc = global.document;\n    var registerImmediate;\n\n    function setImmediate(callback) {\n      // Callback can either be a function or a string\n      if (typeof callback !== \"function\") {\n        callback = new Function(\"\" + callback);\n      }\n      // Copy function arguments\n      var args = new Array(arguments.length - 1);\n      for (var i = 0; i < args.length; i++) {\n          args[i] = arguments[i + 1];\n      }\n      // Store and register the task\n      var task = { callback: callback, args: args };\n      tasksByHandle[nextHandle] = task;\n      registerImmediate(nextHandle);\n      return nextHandle++;\n    }\n\n    function clearImmediate(handle) {\n        delete tasksByHandle[handle];\n    }\n\n    function run(task) {\n        var callback = task.callback;\n        var args = task.args;\n        switch (args.length) {\n        case 0:\n            callback();\n            break;\n        case 1:\n            callback(args[0]);\n            break;\n        case 2:\n            callback(args[0], args[1]);\n            break;\n        case 3:\n            callback(args[0], args[1], args[2]);\n            break;\n        default:\n            callback.apply(undefined, args);\n            break;\n        }\n    }\n\n    function runIfPresent(handle) {\n        // From the spec: \"Wait until any invocations of this algorithm started before this one have completed.\"\n        // So if we're currently running a task, we'll need to delay this invocation.\n        if (currentlyRunningATask) {\n            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a\n            // \"too much recursion\" error.\n            setTimeout(runIfPresent, 0, handle);\n        } else {\n            var task = tasksByHandle[handle];\n            if (task) {\n                currentlyRunningATask = true;\n                try {\n                    run(task);\n                } finally {\n                    clearImmediate(handle);\n                    currentlyRunningATask = false;\n                }\n            }\n        }\n    }\n\n    function installNextTickImplementation() {\n        registerImmediate = function(handle) {\n            process.nextTick(function () { runIfPresent(handle); });\n        };\n    }\n\n    function canUsePostMessage() {\n        // The test against `importScripts` prevents this implementation from being installed inside a web worker,\n        // where `global.postMessage` means something completely different and can't be used for this purpose.\n        if (global.postMessage && !global.importScripts) {\n            var postMessageIsAsynchronous = true;\n            var oldOnMessage = global.onmessage;\n            global.onmessage = function() {\n                postMessageIsAsynchronous = false;\n            };\n            global.postMessage(\"\", \"*\");\n            global.onmessage = oldOnMessage;\n            return postMessageIsAsynchronous;\n        }\n    }\n\n    function installPostMessageImplementation() {\n        // Installs an event handler on `global` for the `message` event: see\n        // * https://developer.mozilla.org/en/DOM/window.postMessage\n        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages\n\n        var messagePrefix = \"setImmediate$\" + Math.random() + \"$\";\n        var onGlobalMessage = function(event) {\n            if (event.source === global &&\n                typeof event.data === \"string\" &&\n                event.data.indexOf(messagePrefix) === 0) {\n                runIfPresent(+event.data.slice(messagePrefix.length));\n            }\n        };\n\n        if (global.addEventListener) {\n            global.addEventListener(\"message\", onGlobalMessage, false);\n        } else {\n            global.attachEvent(\"onmessage\", onGlobalMessage);\n        }\n\n        registerImmediate = function(handle) {\n            global.postMessage(messagePrefix + handle, \"*\");\n        };\n    }\n\n    function installMessageChannelImplementation() {\n        var channel = new MessageChannel();\n        channel.port1.onmessage = function(event) {\n            var handle = event.data;\n            runIfPresent(handle);\n        };\n\n        registerImmediate = function(handle) {\n            channel.port2.postMessage(handle);\n        };\n    }\n\n    function installReadyStateChangeImplementation() {\n        var html = doc.documentElement;\n        registerImmediate = function(handle) {\n            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted\n            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.\n            var script = doc.createElement(\"script\");\n            script.onreadystatechange = function () {\n                runIfPresent(handle);\n                script.onreadystatechange = null;\n                html.removeChild(script);\n                script = null;\n            };\n            html.appendChild(script);\n        };\n    }\n\n    function installSetTimeoutImplementation() {\n        registerImmediate = function(handle) {\n            setTimeout(runIfPresent, 0, handle);\n        };\n    }\n\n    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.\n    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);\n    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;\n\n    // Don't get fooled by e.g. browserify environments.\n    if ({}.toString.call(global.process) === \"[object process]\") {\n        // For Node.js before 0.9\n        installNextTickImplementation();\n\n    } else if (canUsePostMessage()) {\n        // For non-IE10 modern browsers\n        installPostMessageImplementation();\n\n    } else if (global.MessageChannel) {\n        // For web workers, where supported\n        installMessageChannelImplementation();\n\n    } else if (doc && \"onreadystatechange\" in doc.createElement(\"script\")) {\n        // For IE 6–8\n        installReadyStateChangeImplementation();\n\n    } else {\n        // For older browsers\n        installSetTimeoutImplementation();\n    }\n\n    attachTo.setImmediate = setImmediate;\n    attachTo.clearImmediate = clearImmediate;\n}(typeof self === \"undefined\" ? typeof global === \"undefined\" ? this : global : self));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/setimmediate/setImmediate.js?");

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== \"undefined\" && global) ||\n            (typeof self !== \"undefined\" && self) ||\n            window;\nvar apply = Function.prototype.apply;\n\n// DOM APIs, for completeness\n\nexports.setTimeout = function() {\n  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);\n};\nexports.setInterval = function() {\n  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);\n};\nexports.clearTimeout =\nexports.clearInterval = function(timeout) {\n  if (timeout) {\n    timeout.close();\n  }\n};\n\nfunction Timeout(id, clearFn) {\n  this._id = id;\n  this._clearFn = clearFn;\n}\nTimeout.prototype.unref = Timeout.prototype.ref = function() {};\nTimeout.prototype.close = function() {\n  this._clearFn.call(scope, this._id);\n};\n\n// Does not start the time, just sets up the members needed.\nexports.enroll = function(item, msecs) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = msecs;\n};\n\nexports.unenroll = function(item) {\n  clearTimeout(item._idleTimeoutId);\n  item._idleTimeout = -1;\n};\n\nexports._unrefActive = exports.active = function(item) {\n  clearTimeout(item._idleTimeoutId);\n\n  var msecs = item._idleTimeout;\n  if (msecs >= 0) {\n    item._idleTimeoutId = setTimeout(function onTimeout() {\n      if (item._onTimeout)\n        item._onTimeout();\n    }, msecs);\n  }\n};\n\n// setimmediate attaches itself to the global object\n__webpack_require__(/*! setimmediate */ \"./node_modules/setimmediate/setImmediate.js\");\n// On some exotic environments, it's not clear which object `setimmediate` was\n// able to install onto.  Search each possibility in the same order as the\n// `setimmediate` library.\nexports.setImmediate = (typeof self !== \"undefined\" && self.setImmediate) ||\n                       (typeof global !== \"undefined\" && global.setImmediate) ||\n                       (this && this.setImmediate);\nexports.clearImmediate = (typeof self !== \"undefined\" && self.clearImmediate) ||\n                         (typeof global !== \"undefined\" && global.clearImmediate) ||\n                         (this && this.clearImmediate);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/timers-browserify/main.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: actual, questions, default */
/***/ (function(module) {

eval("module.exports = {\"actual\":{\"ans\":[{\"lp\":1},{\"ans\":\"Owoce\",\"lp\":2,\"points\":19},{\"lp\":3},{\"lp\":4},{\"lp\":5}],\"team1\":0,\"team2\":2},\"questions\":{\"Atrybut świętego Mikołaja?\":[null,{\"ans\":\"Worek\",\"lp\":1,\"points\":35},{\"ans\":\"Czapka\",\"lp\":2,\"points\":23},{\"ans\":\"Broda\",\"lp\":3,\"points\":20},{\"ans\":\"Dzwonek\",\"lp\":4,\"points\":8},{\"ans\":\"Renifery\",\"lp\":5,\"points\":7}],\"Co jest slodkie, a przy tym zdrowe?\":[null,{\"ans\":\"Miod\",\"lp\":1,\"points\":51},{\"ans\":\"Owoce\",\"lp\":2,\"points\":19},{\"ans\":\"Bakalie\",\"lp\":3,\"points\":19},{\"ans\":\"Syrop\",\"lp\":4,\"points\":11},{\"ans\":\"Pocalunek\",\"lp\":5,\"points\":9}],\"Co można mieć do drugiej osoby?\":[null,{\"ans\":\"Sprawe\",\"lp\":1,\"points\":24},{\"ans\":\"Prosbe\",\"lp\":2,\"points\":22},{\"ans\":\"Pretensje\",\"lp\":3,\"points\":19},{\"ans\":\"Zal\",\"lp\":4,\"points\":15},{\"ans\":\"Zaufanie\",\"lp\":5,\"points\":7},{\"ans\":\"Slabosc\",\"lp\":6,\"points\":6}],\"Co ryczy na pastwisku?\":[null,{\"ans\":\"Krowa\",\"lp\":1,\"points\":55},{\"ans\":\"Owca\",\"lp\":2,\"points\":23},{\"ans\":\"Kon\",\"lp\":3,\"points\":10},{\"ans\":\"Rolnik\",\"lp\":4,\"points\":1}],\"Co w gospodarstwie domowym zużywa się najszybciej?\":[null,{\"ans\":\"Jedzenie\",\"lp\":1,\"points\":26},{\"ans\":\"Proszek do prania\",\"lp\":2,\"points\":21},{\"ans\":\"Papier toaletowy\",\"lp\":3,\"points\":18},{\"ans\":\"Mydlo\",\"lp\":4,\"points\":16},{\"ans\":\"Pasta do zebow\",\"lp\":5,\"points\":10},{\"ans\":\"Plyn do zmywania\",\"lp\":6,\"points\":6}],\"Co wysysa krew?\":[null,{\"ans\":\"Pijawka\",\"lp\":1,\"points\":44},{\"ans\":\"Komar\",\"lp\":2,\"points\":35},{\"ans\":\"Wampir\",\"lp\":3,\"points\":16},{\"ans\":\"Strzykawka\",\"lp\":4,\"points\":8}],\"Co zabieramy ze sobą na piknik?\":[null,{\"ans\":\"Koc\",\"lp\":1,\"points\":28},{\"ans\":\"Jedzenie\",\"lp\":2,\"points\":24},{\"ans\":\"Napoje\",\"lp\":3,\"points\":19},{\"ans\":\"Naczynia\",\"lp\":4,\"points\":10},{\"ans\":\"Grill\",\"lp\":5,\"points\":8},{\"ans\":\"Gry\",\"lp\":6,\"points\":7}],\"Co zawiera nota biograficzna w encyklopedii?\":[null,{\"ans\":\"Data urodzin\",\"lp\":1,\"points\":30},{\"ans\":\"Dziela\",\"lp\":2,\"points\":21},{\"ans\":\"Imie i nazwisko\",\"lp\":3,\"points\":18},{\"ans\":\"Miejsce urodzenia\",\"lp\":4,\"points\":11},{\"ans\":\"Data smierci\",\"lp\":5,\"points\":9},{\"ans\":\"Fakty z zycia\",\"lp\":6,\"points\":6}],\"Czego zazwyczaj nie reklamuje sie w telewizji i radiu?\":[null,{\"ans\":\"Chleba\",\"lp\":1,\"points\":28},{\"ans\":\"Papierosow\",\"lp\":2,\"points\":17},{\"ans\":\"Cukru\",\"lp\":3,\"points\":16},{\"ans\":\"Maki\",\"lp\":4,\"points\":12},{\"ans\":\"Warzyw\",\"lp\":5,\"points\":9},{\"ans\":\"Alkoholu\",\"lp\":6,\"points\":8}],\"Film który zaczyna się od słowa 'Dzień'?\":[null,{\"ans\":\"Dzien Swira\",\"lp\":1,\"points\":28},{\"ans\":\"Dzien niepodleglosci\",\"lp\":2,\"points\":21},{\"ans\":\"Dzien Swistaka\",\"lp\":3,\"points\":18},{\"ans\":\"Dzien Szakala\",\"lp\":4,\"points\":10},{\"ans\":\"Dzien Ojca\",\"lp\":5,\"points\":8},{\"ans\":\"Dzien Proby\",\"lp\":6,\"points\":5}],\"Jadalna jasna bulwa?\":[null,{\"ans\":\"Rzepa\",\"lp\":1,\"points\":36},{\"ans\":\"Ziemniak\",\"lp\":2,\"points\":29},{\"ans\":\"Seler\",\"lp\":3,\"points\":25}],\"Jakie moce mają superbohaterowie?\":[null,{\"ans\":\"Latanie\",\"lp\":1,\"points\":23},{\"ans\":\"Niewidzialnosc\",\"lp\":2,\"points\":18},{\"ans\":\"Sila\",\"lp\":3,\"points\":17},{\"ans\":\"Teleportacja\",\"lp\":4,\"points\":13},{\"ans\":\"Czytanie w myslach\",\"lp\":5,\"points\":12},{\"ans\":\"Szybkosc\",\"lp\":6,\"points\":10}],\"Kogo i czego potrzebowalibyscie do nakrecenia filmu?\":[null,{\"ans\":\"Aktorow\",\"lp\":1,\"points\":27},{\"ans\":\"Rezysera\",\"lp\":2,\"points\":20},{\"ans\":\"Scenariusza\",\"lp\":3,\"points\":15},{\"ans\":\"Kamery\",\"lp\":4,\"points\":13},{\"ans\":\"Pieniedzy\",\"lp\":5,\"points\":11},{\"ans\":\"Kateringu\",\"lp\":6,\"points\":9}],\"Którego urządzenia elektrycznego używamy rano?\":[null,{\"ans\":\"Ekspres\",\"lp\":1,\"points\":26},{\"ans\":\"Toster\",\"lp\":2,\"points\":23},{\"ans\":\"Radio\",\"lp\":3,\"points\":19},{\"ans\":\"Maszynka do golenia\",\"lp\":4,\"points\":18},{\"ans\":\"Lodowka\",\"lp\":5,\"points\":7},{\"ans\":\"Szczoteczka elektryczna\",\"lp\":6,\"points\":6}],\"Ozdoba meskiej szyi?\":[null,{\"ans\":\"Krawat\",\"lp\":1,\"points\":36},{\"ans\":\"Muszka\",\"lp\":2,\"points\":27},{\"ans\":\"Szalik\",\"lp\":3,\"points\":15},{\"ans\":\"Apaszka\",\"lp\":4,\"points\":10},{\"ans\":\"Lancuszek\",\"lp\":5,\"points\":6}],\"Po co w coś dmuchamy?\":[null,{\"ans\":\"Zgasic\",\"lp\":1,\"points\":46},{\"ans\":\"Ostudzic\",\"lp\":2,\"points\":30},{\"ans\":\"Napompowac\",\"lp\":3,\"points\":23}],\"Popularny nadmorski kurort?\":[null,{\"ans\":\"Ustka\",\"lp\":1,\"points\":28},{\"ans\":\"Wladyslawowow\",\"lp\":2,\"points\":20},{\"ans\":\"Hel\",\"lp\":3,\"points\":17},{\"ans\":\"Chalupy\",\"lp\":4,\"points\":17},{\"ans\":\"Kolobrzeg\",\"lp\":5,\"points\":9},{\"ans\":\"Sopot\",\"lp\":6,\"points\":6}],\"Potocznie ukrasc?\":[null,{\"ans\":\"Gwizdnac\",\"lp\":1,\"points\":29},{\"ans\":\"Buchnac\",\"lp\":2,\"points\":26},{\"ans\":\"Zwedzic\",\"lp\":3,\"points\":19},{\"ans\":\"Zakosic\",\"lp\":4,\"points\":13},{\"ans\":\"Podprowadzic\",\"lp\":5,\"points\":6}],\"Udawanie inaczje?\":[null,{\"ans\":\"Symulowanie\",\"lp\":1,\"points\":29},{\"ans\":\"Granie\",\"lp\":2,\"points\":26},{\"ans\":\"Pozorowanie\",\"lp\":3,\"points\":22},{\"ans\":\"Markowanie\",\"lp\":4,\"points\":10},{\"ans\":\"Parodiowanie\",\"lp\":5,\"points\":8}],\"Wymień najczęściej pieczone w Polsce ciasta?\":[null,{\"ans\":\"Szarlotka\",\"lp\":1,\"points\":24},{\"ans\":\"Sernik\",\"lp\":2,\"points\":22},{\"ans\":\"Drozdzowiec\",\"lp\":3,\"points\":21},{\"ans\":\"Makowiec\",\"lp\":4,\"points\":15},{\"ans\":\"Murzynek\",\"lp\":5,\"points\":8},{\"ans\":7,\"lp\":6}],\"Wymień rodzaje samolotów?\":[null,{\"ans\":\"Pasazerski\",\"lp\":1,\"points\":25},{\"ans\":\"Sportowy\",\"lp\":2,\"points\":24},{\"ans\":\"Mysliwski\",\"lp\":3,\"points\":22},{\"ans\":\"Bombowy\",\"lp\":4,\"points\":16},{\"ans\":\"Transportowy\",\"lp\":5,\"points\":6}],\"Wymień włoskie danie?\":[null,{\"ans\":\"Pomodoro\",\"lp\":1,\"points\":25},{\"ans\":\"Arancini\",\"lp\":2,\"points\":19},{\"ans\":\"Tiramisu\",\"lp\":3,\"points\":17},{\"ans\":\"Ricotta\",\"lp\":4,\"points\":10},{\"ans\":\"Gnocchi\",\"lp\":5,\"points\":6}],\"Wyraz który nie ma liczby pojedynczej?\":[null,{\"ans\":\"Drzwi\",\"lp\":1,\"points\":22},{\"ans\":\"Spodnie\",\"lp\":2,\"points\":20},{\"ans\":\"Nozyce\",\"lp\":3,\"points\":16},{\"ans\":\"Skrzypce\",\"lp\":4,\"points\":14},{\"ans\":\"Sanki\",\"lp\":5,\"points\":10},{\"ans\":\"Urodziny\",\"lp\":6,\"points\":8}]}};\n\n//# sourceURL=webpack:///./src/data.json?");

/***/ }),

/***/ "./src/scripts/QuestionsWraper.js":
/*!****************************************!*\
  !*** ./src/scripts/QuestionsWraper.js ***!
  \****************************************/
/*! exports provided: QuestionsWraper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QuestionsWraper\", function() { return QuestionsWraper; });\nclass QuestionsWraper {\n  constructor(questionsFile) {\n    this.questionsObject = [[], [], [], []];\n\n    for (let questionRecord in questionsFile.questions) {\n      let tableIndex = questionsFile.questions[questionRecord].length - 4;\n      this.questionsObject[tableIndex].push({\n        question: questionRecord,\n        answers: questionsFile.questions[questionRecord].slice(1)\n      });\n    }\n  }\n\n  selectQuestion(roundNumber) {\n    let randomQuestion;\n    console.log(this.questionsObject[3].length);\n\n    if (roundNumber == 1 || roundNumber == 2) {\n      return this.questionsObject[3].splice(Math.floor(Math.random() * this.questionsObject[3].length), 1)[0];\n    } else if (roundNumber == 3) {\n      return this.questionsObject[2].splice(Math.floor(Math.random() * this.questionsObject[2].length), 1)[0];\n    } else if (roundNumber == 4) {\n      return this.questionsObject[1].splice(Math.floor(Math.random() * this.questionsObject[1].length), 1)[0];\n    } else {\n      return this.questionsObject[0].splice(Math.floor(Math.random() * this.questionsObject[0].length), 1)[0];\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/scripts/QuestionsWraper.js?");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const answerFieldFill = '... ... ... ... ... ... ... ... ... ... ... ... ...';\n/**\n * @param {int} number\n * @param {string} text\n * @param {int} points\n */\n\nfunction setAnswer(number, text, points) {\n  if (!document.querySelector(`[data-answer-num=\"${number}\"]`)) {\n    throw new Error('The HTML for the answer does not exist, ' + 'make sure the question number you provided is in a 1-6 range');\n  }\n\n  const textContainer = document.querySelector(`[data-answer-num=\"${number}\"] .text`);\n  const pointsContainer = document.querySelector(`[data-answer-num=\"${number}\"] .points`);\n  textContainer.innerHTML = fillAnswerField(removeDiacritics(text));\n  pointsContainer.innerHTML = points;\n}\n/**\n * @param {string} text\n * @returns {string}\n */\n\n\nfunction fillAnswerField(text) {\n  const fillLength = answerFieldFill.length;\n\n  if (fillLength < text.length) {\n    return text.substring(0, fillLength - 3) + '...';\n  } else {\n    return text + answerFieldFill.substring(text.length);\n  }\n}\n/**\n * @param {TEAMS} team\n * @param {int} points\n */\n\n\nfunction setPoints(team, points) {\n  const teamPointContainer = document.querySelector(`.${team}-team .team-points`);\n\n  if (!teamPointContainer) {\n    throw new Error('The HTML for the team you provided does not exist, you probably have a typo in a team name');\n  }\n\n  document.querySelector(`.${team}-team .team-points`).innerHTML = points.toString();\n}\n/**\n * @param {TEAMS} team\n * @param {int} errorCnt\n */\n\n\nfunction setErrors(team, errorCnt) {\n  const errorIndicators = document.querySelectorAll(`.${team}-team .fail`);\n\n  if (!errorIndicators.length) {\n    throw new Error('The HTML for the team you provided does not exist, you probably have a typo in a team name');\n  }\n\n  for (let i = 0; i < errorIndicators.length; i++) {\n    if (i < errorCnt) {\n      errorIndicators[i].className = 'fail active';\n    } else {\n      errorIndicators[i].className = 'fail';\n    }\n  }\n}\n/**\n * @param {string} text\n */\n\n\nfunction setQuestion(text) {\n  document.querySelector('.question').innerHTML = removeDiacritics(text);\n}\n/**\n * @param {string} input\n * @returns {string}\n */\n\n\nfunction removeDiacritics(input) {\n  return input.replace(/\\u0142/g, \"l\").normalize('NFKD').replace(/[^\\w\\s.-_\\/]/g, '');\n}\n\nfunction setNumberOfAnswers(nofAnswers) {\n  [1, 2, 3, 4, 5, 6].forEach(number => {\n    setAnswer(number, '', 0);\n    document.querySelector(`[data-answer-num=\"${number}\"]`).style.display = number <= nofAnswers ? 'block' : 'none';\n  });\n}\n\nfunction gameOver(team) {\n  document.querySelector(\".WinText\").innerHTML = \"<h1>Gratulacje, wygrala druzyna \" + team + \"</h1><br>Aby zagrac ponownie, odswiez strone\";\n}\n\nmodule.exports = {\n  setAnswer,\n  fillAnswerField,\n  setPoints,\n  setErrors,\n  setQuestion,\n  removeDiacritics,\n  setNumberOfAnswers,\n  gameOver // getQuestion,\n\n};\n\n//# sourceURL=webpack:///./src/scripts/board.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teams */ \"./src/scripts/teams.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/scripts/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _speech__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speech */ \"./src/scripts/speech.js\");\n/* harmony import */ var _speech__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_speech__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.json */ \"./src/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data.json */ \"./src/data.json\", 1);\n/* harmony import */ var _QuestionsWraper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuestionsWraper */ \"./src/scripts/QuestionsWraper.js\");\n/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! timers */ \"./node_modules/timers-browserify/main.js\");\n/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet Wraper = new _QuestionsWraper__WEBPACK_IMPORTED_MODULE_4__[\"QuestionsWraper\"](_data_json__WEBPACK_IMPORTED_MODULE_3__);\nlet roundNumber = 0;\nlet question;\nlet team;\nlet totalScore = {\n  blue: 0,\n  red: 0\n};\nlet errors = {\n  blue: 0,\n  red: 0\n};\nlet beginningTeam = Math.random() > 0.5 ? _teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED : _teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE;\n\nlet highlightTeam = () => {\n  document.querySelectorAll('.team h4').forEach(x => {\n    x.style.color = \"\";\n  });\n  document.querySelector('.' + team + '-team h4').style.color = \"#0F0\";\n};\n\nlet setLine = answer => {\n  _board__WEBPACK_IMPORTED_MODULE_1___default.a.setAnswer(answer.lp, answer.ans, answer.points);\n};\n\nlet addPoints = (team, points) => {\n  _board__WEBPACK_IMPORTED_MODULE_1___default.a.setPoints(team, totalScore[team] += points);\n};\n\nlet switchTeam = () => {\n  team = enemyTeam();\n  highlightTeam();\n};\n\nlet enemyTeam = () => {\n  if (team == _teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED) {\n    return _teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE;\n  } else {\n    return _teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED;\n  }\n};\n\nlet newRound = () => {\n  errors = {\n    blue: 0,\n    red: 0\n  };\n  _board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED, 0);\n  team = beginningTeam;\n  _board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(_teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLUE, 0);\n  question = Wraper.selectQuestion(++roundNumber);\n  _board__WEBPACK_IMPORTED_MODULE_1___default.a.setNumberOfAnswers(question.answers.length);\n  _board__WEBPACK_IMPORTED_MODULE_1___default.a.setQuestion(question.question);\n  highlightTeam();\n  document.querySelector(\".WinText\").innerHTML = \"\";\n  beginningTeam = enemyTeam();\n};\n\nnewRound();\n_speech__WEBPACK_IMPORTED_MODULE_2___default.a.loadGrammar(['żółty', 'zielony', 'fioletowy', 'niebieski']);\n\ndocument.querySelector('.record').onclick = function () {\n  _speech__WEBPACK_IMPORTED_MODULE_2___default.a.start().then(result => {\n    for (let captured of result[0]) {\n      for (let [index, answer] of question.answers.entries()) {\n        console.log(question.answers);\n\n        if (_board__WEBPACK_IMPORTED_MODULE_1___default.a.removeDiacritics(captured.transcript) == answer.ans.toLowerCase()) {\n          setLine(answer);\n          addPoints(team, answer.points);\n          question.answers.splice(index, 1);\n\n          if (totalScore.red >= 300 || totalScore.blue >= 300) {\n            console.log(\"dupa\");\n            _board__WEBPACK_IMPORTED_MODULE_1___default.a.gameOver(team == _teams__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RED ? \"Czerwonych\" : \"Niebieskich\");\n            document.querySelector('.record').remove();\n            return;\n          }\n\n          if (errors[enemyTeam()] >= 3 || question.answers.length == 0) {\n            Object(timers__WEBPACK_IMPORTED_MODULE_5__[\"setTimeout\"])(newRound, 1000);\n          }\n\n          return;\n        }\n      }\n    }\n\n    _board__WEBPACK_IMPORTED_MODULE_1___default.a.setErrors(team, errors[team] += 1);\n\n    if (errors[enemyTeam()] >= 3 && errors[team] >= 1) {\n      Object(timers__WEBPACK_IMPORTED_MODULE_5__[\"setTimeout\"])(newRound, 1000);\n      return;\n    }\n\n    if (errors[team] < 3) return;\n\n    if (errors[team] == 3) {\n      switchTeam();\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/speech.js":
/*!*******************************!*\
  !*** ./src/scripts/speech.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\nlet SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;\nlet SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;\nlet recognition = new SpeechRecognition();\nlet speechRecognitionList = new SpeechGrammarList();\n\nfunction loadGrammar(words) {\n  let grammar = `#JSGF V1.0; grammar colors; public <color> = ${words.join(' | ')} ;`;\n  speechRecognitionList.addFromString(grammar, 1);\n  recognition.grammars = speechRecognitionList;\n  recognition.lang = 'pl-PL';\n  recognition.interimResults = false;\n  recognition.maxAlternatives = 10;\n}\n\nfunction start() {\n  return new Promise((resolve, reject) => {\n    recognition.onspeechend = () => {\n      recognition.stop();\n    };\n\n    recognition.onnomatch = () => {\n      reject('No match');\n    };\n\n    recognition.onerror = event => {\n      reject('Error occurred in recognition: ' + event.error);\n    };\n\n    recognition.onresult = event => {\n      resolve(event.results);\n    };\n\n    recognition.start();\n  });\n}\n\nmodule.exports = {\n  loadGrammar,\n  start\n};\n\n//# sourceURL=webpack:///./src/scripts/speech.js?");

/***/ }),

/***/ "./src/scripts/teams.js":
/*!******************************!*\
  !*** ./src/scripts/teams.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @enum {TEAMS}\r\n */\nconst TEAMS = {\n  BLUE: 'blue',\n  RED: 'red'\n};\nObject.freeze(TEAMS);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TEAMS);\n\n//# sourceURL=webpack:///./src/scripts/teams.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });