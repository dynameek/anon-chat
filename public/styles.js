(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n/*\n *\t@Purpose: Holds all my layout styling\n *\t@Author: Oguntuberu Nathan O.\n *\t@Date: 15-07-2018\n*/\n/* FLEXIBLE DISPLAYS\t*/\n.center-col-flex{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-content: center;\n}\n.center-row-flex{\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-content: center;\n}\n.row-flex{\n\tdisplay: flex;\n\tflex-direction: row;\n}\n/*\tGRID LAYOUT\t*/\n*[class^='col']{\n\twidth: 100%;\n}\n@media screen and (min-width: 600px) and (max-width: 1028px){\n\t.col-m-1{\n\t\twidth: 8.3%;\n\t}\n\t.col-m-2{\n\t\twidth: 16.6%;\n\t}\n\t.col-m-3{\n\t\twidth: 25%;\n\t}\n\t.col-m-4{\n\t\twidth: 33.3%;\n\t}\n\t.col-m-5{\n\t\twidth: 41.7%;\n\t}\n\t.col-m-6{\n\t\twidth: 50%;\n\t}\n\t.col-m-7{\n\t\twidth: 58.3%;\n\t}\n\t.col-m-8{\n\t\twidth: 66.4%;\n\t}\n\t.col-m-9{\n\t\twidth: 75%;\n\t}\n\t.col-m-10{\n\t\twidth: 83%;\n\t}\n\t.col-m-11{\n\t\twidth: 91.3%;\n\t}\n\t.col-m-12{\n\t\twidth: 100%;\n\t}\n}\n@media screen and (min-width: 1029px)\n{\n\t.col-l-1{\n\t\twidth: 8.3%;\n\t}\n\t.col-l-2{\n\t\twidth: 16.6%;\n\t}\n\t.col-l-3{\n\t\twidth: 25%;\n\t}\n\t.col-l-4{\n\t\twidth: 33.3%;\n\t}\n\t.col-l-5{\n\t\twidth: 41.7%;\n\t}\n\t.col-l-6{\n\t\twidth: 50%;\n\t}\n\t.col-l-7{\n\t\twidth: 58.3%;\n\t}\n\t.col-l-8{\n\t\twidth: 66.4%;\n\t}\n\t.col-l-9{\n\t\twidth: 75%;\n\t}\n\t.col-l-10{\n\t\twidth: 83%;\n\t}\n\t.col-l-11{\n\t\twidth: 91.3%;\n\t}\n\t.col-l-12{\n\t\twidth: 100%;\n\t}\n}\n/*\n *\n*/\n.ad{\n\t\n}\n.tower-ad{\n\tdisplay: none;\n}\n/*\n *\t@Purpose: Holds all my color options\n *\t@Author: Oguntuberu Nathan O.\n *\t@Date: 05-10-2018\n*/\n.bg-none{\n  background: none;\n}\n/*\tWHITE\t*/\n.bg-white{\n\tbackground: #fff;\n}\n.bg-grey{\n\tbackground: #ddd;\n}\n.bg-sky-grey{\n\tbackground: #efefef;\n}\n.white-font{\n\tcolor: #fff;\n}\n/*\tBLUE\t*/\n.bg-marine{\n\tbackground: #0A4F84;\n\tcolor: #fff;\n}\n.marine-font{\n\tcolor: #0A4F84;\n}\n.marine-border{\n\tborder-color: #0A4F84;\n}\n/*\t*/\n.bg-green{\n\tbackground: #18914A;\n\tcolor: #fff;\n}\n/*\t*/\n.bg-wine{\n\tbackground: #7A1A32;\n\tcolor: #fff;\n}\n.wine-font{\n\tcolor: #7A1A32\n}\n.wine-border{\n\tborder-color: #7A1A32\n}\n/*\tGold\t*/\n.bg-gold{\n\tbackground: #E09900;\n\tcolor: #fff;\n}\n/*\tFORE COLORS\t*/\n/*\n *\t@Purpose: Holds all my form styling\n *\t@Author: Oguntuberu Nathan O.\n *\t@Date: 15-07-2018\n*/\nform{\n\tbox-sizing: border-box;\n\tfloat: left;\n\twidth: 100%;\n\theight: auto;\n\t\n\tpadding: 15px;\n}\nbutton{\n\tbox-sizing: border-box;\n\tpadding: 7.5px 15px;\n}\ninput, textarea, select{\n\tbox-sizing: border-box;\n\tfloat: left;\n\twidth: 100%;\n\theight: auto;\n\t\n\tpadding: 7.5px;\n\tborder: 1px solid #ccc;\n\tmargin-bottom: 10px;\n\t\n\tfont-family: sans-serif;\n}\ninput[type='button']{\n\tpadding: 10px;\n\t\n\tfont-size: 0.95em;\n}\nlabel{\n\tdisplay: block;\n\twidth: 100%;\n\tmargin-bottom: 7.5px;\n}\n.form-group{\n\tmargin-bottom: 10px;\n}\n.form-actions{\n\tmargin-top: 10px;\n}\n/*\tform message toast display  */\n#form-message{\n\tmargin-bottom: 15px;\n\tpadding: 10px 5px;\n\ttext-align: center;\n\tdisplay: none;\n}\n/*\tFORM ADJECTIVES\t*/\n.form-wrapper{\n\tmin-height: 20px;\n\tmargin-bottom: 15px;\n}\n.form-title{\n\tpadding: 10px 15px;\n\tborder-bottom: 1px solid #ddd;\n}\n/*\tFORM BORDER\t*/\n.no-border{\n\tborder: none;\n}\n.rounded-corners{\n\tborder-radius: 3.5px;\n}\n.rounded-sides{\n\tborder-radius: 50px;\n}\n/*\tLENGTH\t*/\n.input-100{\n\twidth: 100%;\n}\n.input-75{\n\twidth: 75%;\n}\n.input-50{\n\twidth: 50%;\n}\n.input-33{\n\twidth: 33%;\n}\n.input-25{\n\twidth: 25%;\n}\n/*\n *\t@Purpose: Holds all my general styling\n *\t@Author: Oguntuberu Nathan O.\n *\t@Date: 15-07-2018\n*/\nhtml{\n\t\n}\nbody{\n\tmargin: 0;\n}\ndiv, section, header, footer, nav, ul, li{\n\tbox-sizing: border-box;\n\tfloat: left;\n\twidth: 100%;\n\theight: auto;\n}\nimg{\n\tfloat: left;\n\twidth: 100%;\n\theight: 100%;\n}\nh1, h2, h3, h4, h5, h6{\n\tbox-sizing: border-box;\n\tmargin: 0;\n}\nul{\n\tpadding: 0;\n}\nli{\n\tdisplay: block;\n}\n.page-wrapper{\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\tmin-height: 100vh;\n}\n.landing-wrapper, .full-screen{\n\twidth: 100%;\n\theight: 100vh;\n}\n.veil{\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, 0.6);\n}\n.dark-veil{\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, 0.8);\n}\n/*\t*/\n.page-section-wrap{\n\tmin-height: 91vh;\n\tpadding: 15px;\n}\n.card{\n\twidth: 100%;\n\tmin-height: 100px;\n\tpadding: 15px;\n\tbackground: #fff;\n\t\n\tbox-shadow: 0.5px 0.5px 2.5px #ccc;\n}\n/*\t*/\n.right{\n\tfloat: right;\n}\n/*\n *\t@Purpose: Holds all my link styling\n *\t@Author: Oguntuberu Nathan O.\n *\t@Date: 15-07-2018\n*/\na{\n\ttext-decoration: none;\n\tcolor: inherit;\n}\n.span-link{\n\tfont-weight: bold;\n}\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/anon-chat/ang-src/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map