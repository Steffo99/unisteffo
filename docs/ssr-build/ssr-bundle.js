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
module.exports = {"split":"split__2Bl8C","splitparent":"splitparent__nqY7W","splitchild":"splitchild__3Ip86"};

/***/ }),

/***/ "36Ou":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5m9J":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "6adR":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;; /*! showdown v 1.9.1 - 02-11-2019 */
(function () {
  /**
   * Created by Tivie on 13-07-2015.
   */

  function getDefaultOpts(simple) {
    'use strict';

    var defaultOptions = {
      omitExtraWLInCodeBlocks: {
        defaultValue: false,
        describe: 'Omit the default extra whiteline added to code blocks',
        type: 'boolean'
      },
      noHeaderId: {
        defaultValue: false,
        describe: 'Turn on/off generated header id',
        type: 'boolean'
      },
      prefixHeaderId: {
        defaultValue: false,
        describe: 'Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic \'section-\' prefix',
        type: 'string'
      },
      rawPrefixHeaderId: {
        defaultValue: false,
        describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
        type: 'boolean'
      },
      ghCompatibleHeaderId: {
        defaultValue: false,
        describe: 'Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)',
        type: 'boolean'
      },
      rawHeaderId: {
        defaultValue: false,
        describe: 'Remove only spaces, \' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids',
        type: 'boolean'
      },
      headerLevelStart: {
        defaultValue: false,
        describe: 'The header blocks level start',
        type: 'integer'
      },
      parseImgDimensions: {
        defaultValue: false,
        describe: 'Turn on/off image dimension parsing',
        type: 'boolean'
      },
      simplifiedAutoLink: {
        defaultValue: false,
        describe: 'Turn on/off GFM autolink style',
        type: 'boolean'
      },
      excludeTrailingPunctuationFromURLs: {
        defaultValue: false,
        describe: 'Excludes trailing punctuation from links generated with autoLinking',
        type: 'boolean'
      },
      literalMidWordUnderscores: {
        defaultValue: false,
        describe: 'Parse midword underscores as literal underscores',
        type: 'boolean'
      },
      literalMidWordAsterisks: {
        defaultValue: false,
        describe: 'Parse midword asterisks as literal asterisks',
        type: 'boolean'
      },
      strikethrough: {
        defaultValue: false,
        describe: 'Turn on/off strikethrough support',
        type: 'boolean'
      },
      tables: {
        defaultValue: false,
        describe: 'Turn on/off tables support',
        type: 'boolean'
      },
      tablesHeaderId: {
        defaultValue: false,
        describe: 'Add an id to table headers',
        type: 'boolean'
      },
      ghCodeBlocks: {
        defaultValue: true,
        describe: 'Turn on/off GFM fenced code blocks support',
        type: 'boolean'
      },
      tasklists: {
        defaultValue: false,
        describe: 'Turn on/off GFM tasklist support',
        type: 'boolean'
      },
      smoothLivePreview: {
        defaultValue: false,
        describe: 'Prevents weird effects in live previews due to incomplete input',
        type: 'boolean'
      },
      smartIndentationFix: {
        defaultValue: false,
        description: 'Tries to smartly fix indentation in es6 strings',
        type: 'boolean'
      },
      disableForced4SpacesIndentedSublists: {
        defaultValue: false,
        description: 'Disables the requirement of indenting nested sublists by 4 spaces',
        type: 'boolean'
      },
      simpleLineBreaks: {
        defaultValue: false,
        description: 'Parses simple line breaks as <br> (GFM Style)',
        type: 'boolean'
      },
      requireSpaceBeforeHeadingText: {
        defaultValue: false,
        description: 'Makes adding a space between `#` and the header text mandatory (GFM Style)',
        type: 'boolean'
      },
      ghMentions: {
        defaultValue: false,
        description: 'Enables github @mentions',
        type: 'boolean'
      },
      ghMentionsLink: {
        defaultValue: 'https://github.com/{u}',
        description: 'Changes the link generated by @mentions. Only applies if ghMentions option is enabled.',
        type: 'string'
      },
      encodeEmails: {
        defaultValue: true,
        description: 'Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities',
        type: 'boolean'
      },
      openLinksInNewWindow: {
        defaultValue: false,
        description: 'Open all links in new windows',
        type: 'boolean'
      },
      backslashEscapesHTMLTags: {
        defaultValue: false,
        description: 'Support for HTML Tag escaping. ex: \<div>foo\</div>',
        type: 'boolean'
      },
      emoji: {
        defaultValue: false,
        description: 'Enable emoji support. Ex: `this is a :smile: emoji`',
        type: 'boolean'
      },
      underline: {
        defaultValue: false,
        description: 'Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`',
        type: 'boolean'
      },
      completeHTMLDocument: {
        defaultValue: false,
        description: 'Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags',
        type: 'boolean'
      },
      metadata: {
        defaultValue: false,
        description: 'Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).',
        type: 'boolean'
      },
      splitAdjacentBlockquotes: {
        defaultValue: false,
        description: 'Split adjacent blockquote blocks',
        type: 'boolean'
      }
    };
    if (simple === false) {
      return JSON.parse(JSON.stringify(defaultOptions));
    }
    var ret = {};
    for (var opt in defaultOptions) {
      if (defaultOptions.hasOwnProperty(opt)) {
        ret[opt] = defaultOptions[opt].defaultValue;
      }
    }
    return ret;
  }

  function allOptionsOn() {
    'use strict';

    var options = getDefaultOpts(true),
        ret = {};
    for (var opt in options) {
      if (options.hasOwnProperty(opt)) {
        ret[opt] = true;
      }
    }
    return ret;
  }

  /**
   * Created by Tivie on 06-01-2015.
   */

  // Private properties
  var showdown = {},
      parsers = {},
      extensions = {},
      globalOptions = getDefaultOpts(true),
      setFlavor = 'vanilla',
      flavor = {
    github: {
      omitExtraWLInCodeBlocks: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      strikethrough: true,
      tables: true,
      tablesHeaderId: true,
      ghCodeBlocks: true,
      tasklists: true,
      disableForced4SpacesIndentedSublists: true,
      simpleLineBreaks: true,
      requireSpaceBeforeHeadingText: true,
      ghCompatibleHeaderId: true,
      ghMentions: true,
      backslashEscapesHTMLTags: true,
      emoji: true,
      splitAdjacentBlockquotes: true
    },
    original: {
      noHeaderId: true,
      ghCodeBlocks: false
    },
    ghost: {
      omitExtraWLInCodeBlocks: true,
      parseImgDimensions: true,
      simplifiedAutoLink: true,
      excludeTrailingPunctuationFromURLs: true,
      literalMidWordUnderscores: true,
      strikethrough: true,
      tables: true,
      tablesHeaderId: true,
      ghCodeBlocks: true,
      tasklists: true,
      smoothLivePreview: true,
      simpleLineBreaks: true,
      requireSpaceBeforeHeadingText: true,
      ghMentions: false,
      encodeEmails: true
    },
    vanilla: getDefaultOpts(true),
    allOn: allOptionsOn()
  };

  /**
   * helper namespace
   * @type {{}}
   */
  showdown.helper = {};

  /**
   * TODO LEGACY SUPPORT CODE
   * @type {{}}
   */
  showdown.extensions = {};

  /**
   * Set a global option
   * @static
   * @param {string} key
   * @param {*} value
   * @returns {showdown}
   */
  showdown.setOption = function (key, value) {
    'use strict';

    globalOptions[key] = value;
    return this;
  };

  /**
   * Get a global option
   * @static
   * @param {string} key
   * @returns {*}
   */
  showdown.getOption = function (key) {
    'use strict';

    return globalOptions[key];
  };

  /**
   * Get the global options
   * @static
   * @returns {{}}
   */
  showdown.getOptions = function () {
    'use strict';

    return globalOptions;
  };

  /**
   * Reset global options to the default values
   * @static
   */
  showdown.resetOptions = function () {
    'use strict';

    globalOptions = getDefaultOpts(true);
  };

  /**
   * Set the flavor showdown should use as default
   * @param {string} name
   */
  showdown.setFlavor = function (name) {
    'use strict';

    if (!flavor.hasOwnProperty(name)) {
      throw Error(name + ' flavor was not found');
    }
    showdown.resetOptions();
    var preset = flavor[name];
    setFlavor = name;
    for (var option in preset) {
      if (preset.hasOwnProperty(option)) {
        globalOptions[option] = preset[option];
      }
    }
  };

  /**
   * Get the currently set flavor
   * @returns {string}
   */
  showdown.getFlavor = function () {
    'use strict';

    return setFlavor;
  };

  /**
   * Get the options of a specified flavor. Returns undefined if the flavor was not found
   * @param {string} name Name of the flavor
   * @returns {{}|undefined}
   */
  showdown.getFlavorOptions = function (name) {
    'use strict';

    if (flavor.hasOwnProperty(name)) {
      return flavor[name];
    }
  };

  /**
   * Get the default options
   * @static
   * @param {boolean} [simple=true]
   * @returns {{}}
   */
  showdown.getDefaultOptions = function (simple) {
    'use strict';

    return getDefaultOpts(simple);
  };

  /**
   * Get or set a subParser
   *
   * subParser(name)       - Get a registered subParser
   * subParser(name, func) - Register a subParser
   * @static
   * @param {string} name
   * @param {function} [func]
   * @returns {*}
   */
  showdown.subParser = function (name, func) {
    'use strict';

    if (showdown.helper.isString(name)) {
      if (typeof func !== 'undefined') {
        parsers[name] = func;
      } else {
        if (parsers.hasOwnProperty(name)) {
          return parsers[name];
        } else {
          throw Error('SubParser named ' + name + ' not registered!');
        }
      }
    }
  };

  /**
   * Gets or registers an extension
   * @static
   * @param {string} name
   * @param {object|function=} ext
   * @returns {*}
   */
  showdown.extension = function (name, ext) {
    'use strict';

    if (!showdown.helper.isString(name)) {
      throw Error('Extension \'name\' must be a string');
    }

    name = showdown.helper.stdExtName(name);

    // Getter
    if (showdown.helper.isUndefined(ext)) {
      if (!extensions.hasOwnProperty(name)) {
        throw Error('Extension named ' + name + ' is not registered!');
      }
      return extensions[name];

      // Setter
    } else {
      // Expand extension if it's wrapped in a function
      if (typeof ext === 'function') {
        ext = ext();
      }

      // Ensure extension is an array
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }

      var validExtension = validate(ext, name);

      if (validExtension.valid) {
        extensions[name] = ext;
      } else {
        throw Error(validExtension.error);
      }
    }
  };

  /**
   * Gets all extensions registered
   * @returns {{}}
   */
  showdown.getAllExtensions = function () {
    'use strict';

    return extensions;
  };

  /**
   * Remove an extension
   * @param {string} name
   */
  showdown.removeExtension = function (name) {
    'use strict';

    delete extensions[name];
  };

  /**
   * Removes all extensions
   */
  showdown.resetExtensions = function () {
    'use strict';

    extensions = {};
  };

  /**
   * Validate extension
   * @param {array} extension
   * @param {string} name
   * @returns {{valid: boolean, error: string}}
   */
  function validate(extension, name) {
    'use strict';

    var errMsg = name ? 'Error in ' + name + ' extension->' : 'Error in unnamed extension',
        ret = {
      valid: true,
      error: ''
    };

    if (!showdown.helper.isArray(extension)) {
      extension = [extension];
    }

    for (var i = 0; i < extension.length; ++i) {
      var baseMsg = errMsg + ' sub-extension ' + i + ': ',
          ext = extension[i];
      if (typeof ext !== 'object') {
        ret.valid = false;
        ret.error = baseMsg + 'must be an object, but ' + typeof ext + ' given';
        return ret;
      }

      if (!showdown.helper.isString(ext.type)) {
        ret.valid = false;
        ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + ' given';
        return ret;
      }

      var type = ext.type = ext.type.toLowerCase();

      // normalize extension type
      if (type === 'language') {
        type = ext.type = 'lang';
      }

      if (type === 'html') {
        type = ext.type = 'output';
      }

      if (type !== 'lang' && type !== 'output' && type !== 'listener') {
        ret.valid = false;
        ret.error = baseMsg + 'type ' + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
        return ret;
      }

      if (type === 'listener') {
        if (showdown.helper.isUndefined(ext.listeners)) {
          ret.valid = false;
          ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
          return ret;
        }
      } else {
        if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
          ret.valid = false;
          ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
          return ret;
        }
      }

      if (ext.listeners) {
        if (typeof ext.listeners !== 'object') {
          ret.valid = false;
          ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + ' given';
          return ret;
        }
        for (var ln in ext.listeners) {
          if (ext.listeners.hasOwnProperty(ln)) {
            if (typeof ext.listeners[ln] !== 'function') {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + ' must be a function but ' + typeof ext.listeners[ln] + ' given';
              return ret;
            }
          }
        }
      }

      if (ext.filter) {
        if (typeof ext.filter !== 'function') {
          ret.valid = false;
          ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + ' given';
          return ret;
        }
      } else if (ext.regex) {
        if (showdown.helper.isString(ext.regex)) {
          ext.regex = new RegExp(ext.regex, 'g');
        }
        if (!(ext.regex instanceof RegExp)) {
          ret.valid = false;
          ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + ' given';
          return ret;
        }
        if (showdown.helper.isUndefined(ext.replace)) {
          ret.valid = false;
          ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
          return ret;
        }
      }
    }
    return ret;
  }

  /**
   * Validate extension
   * @param {object} ext
   * @returns {boolean}
   */
  showdown.validateExtension = function (ext) {
    'use strict';

    var validateExtension = validate(ext, null);
    if (!validateExtension.valid) {
      console.warn(validateExtension.error);
      return false;
    }
    return true;
  };

  /**
   * showdownjs helper functions
   */

  if (!showdown.hasOwnProperty('helper')) {
    showdown.helper = {};
  }

  /**
   * Check if var is string
   * @static
   * @param {string} a
   * @returns {boolean}
   */
  showdown.helper.isString = function (a) {
    'use strict';

    return typeof a === 'string' || a instanceof String;
  };

  /**
   * Check if var is a function
   * @static
   * @param {*} a
   * @returns {boolean}
   */
  showdown.helper.isFunction = function (a) {
    'use strict';

    var getType = {};
    return a && getType.toString.call(a) === '[object Function]';
  };

  /**
   * isArray helper function
   * @static
   * @param {*} a
   * @returns {boolean}
   */
  showdown.helper.isArray = function (a) {
    'use strict';

    return Array.isArray(a);
  };

  /**
   * Check if value is undefined
   * @static
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
   */
  showdown.helper.isUndefined = function (value) {
    'use strict';

    return typeof value === 'undefined';
  };

  /**
   * ForEach helper function
   * Iterates over Arrays and Objects (own properties only)
   * @static
   * @param {*} obj
   * @param {function} callback Accepts 3 params: 1. value, 2. key, 3. the original array/object
   */
  showdown.helper.forEach = function (obj, callback) {
    'use strict';
    // check if obj is defined

    if (showdown.helper.isUndefined(obj)) {
      throw new Error('obj param is required');
    }

    if (showdown.helper.isUndefined(callback)) {
      throw new Error('callback param is required');
    }

    if (!showdown.helper.isFunction(callback)) {
      throw new Error('callback param must be a function/closure');
    }

    if (typeof obj.forEach === 'function') {
      obj.forEach(callback);
    } else if (showdown.helper.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        callback(obj[i], i, obj);
      }
    } else if (typeof obj === 'object') {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          callback(obj[prop], prop, obj);
        }
      }
    } else {
      throw new Error('obj does not seem to be an array or an iterable object');
    }
  };

  /**
   * Standardidize extension name
   * @static
   * @param {string} s extension name
   * @returns {string}
   */
  showdown.helper.stdExtName = function (s) {
    'use strict';

    return s.replace(/[_?*+\/\\.^-]/g, '').replace(/\s/g, '').toLowerCase();
  };

  function escapeCharactersCallback(wholeMatch, m1) {
    'use strict';

    var charCodeToEscape = m1.charCodeAt(0);
    return '¨E' + charCodeToEscape + 'E';
  }

  /**
   * Callback used to escape characters when passing through String.replace
   * @static
   * @param {string} wholeMatch
   * @param {string} m1
   * @returns {string}
   */
  showdown.helper.escapeCharactersCallback = escapeCharactersCallback;

  /**
   * Escape characters in a string
   * @static
   * @param {string} text
   * @param {string} charsToEscape
   * @param {boolean} afterBackslash
   * @returns {XML|string|void|*}
   */
  showdown.helper.escapeCharacters = function (text, charsToEscape, afterBackslash) {
    'use strict';
    // First we have to escape the escape characters so that
    // we can build a character class out of them

    var regexString = '([' + charsToEscape.replace(/([\[\]\\])/g, '\\$1') + '])';

    if (afterBackslash) {
      regexString = '\\\\' + regexString;
    }

    var regex = new RegExp(regexString, 'g');
    text = text.replace(regex, escapeCharactersCallback);

    return text;
  };

  /**
   * Unescape HTML entities
   * @param txt
   * @returns {string}
   */
  showdown.helper.unescapeHTMLEntities = function (txt) {
    'use strict';

    return txt.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  };

  var rgxFindMatchPos = function rgxFindMatchPos(str, left, right, flags) {
    'use strict';

    var f = flags || '',
        g = f.indexOf('g') > -1,
        x = new RegExp(left + '|' + right, 'g' + f.replace(/g/g, '')),
        l = new RegExp(left, f.replace(/g/g, '')),
        pos = [],
        t,
        s,
        m,
        start,
        end;

    do {
      t = 0;
      while (m = x.exec(str)) {
        if (l.test(m[0])) {
          if (!t++) {
            s = x.lastIndex;
            start = s - m[0].length;
          }
        } else if (t) {
          if (! --t) {
            end = m.index + m[0].length;
            var obj = {
              left: { start: start, end: s },
              match: { start: s, end: m.index },
              right: { start: m.index, end: end },
              wholeMatch: { start: start, end: end }
            };
            pos.push(obj);
            if (!g) {
              return pos;
            }
          }
        }
      }
    } while (t && (x.lastIndex = s));

    return pos;
  };

  /**
   * matchRecursiveRegExp
   *
   * (c) 2007 Steven Levithan <stevenlevithan.com>
   * MIT License
   *
   * Accepts a string to search, a left and right format delimiter
   * as regex patterns, and optional regex flags. Returns an array
   * of matches, allowing nested instances of left/right delimiters.
   * Use the "g" flag to return all matches, otherwise only the
   * first is returned. Be careful to ensure that the left and
   * right format delimiters produce mutually exclusive matches.
   * Backreferences are not supported within the right delimiter
   * due to how it is internally combined with the left delimiter.
   * When matching strings whose format delimiters are unbalanced
   * to the left or right, the output is intentionally as a
   * conventional regex library with recursion support would
   * produce, e.g. "<<x>" and "<x>>" both produce ["x"] when using
   * "<" and ">" as the delimiters (both strings contain a single,
   * balanced instance of "<x>").
   *
   * examples:
   * matchRecursiveRegExp("test", "\\(", "\\)")
   * returns: []
   * matchRecursiveRegExp("<t<<e>><s>>t<>", "<", ">", "g")
   * returns: ["t<<e>><s>", ""]
   * matchRecursiveRegExp("<div id=\"x\">test</div>", "<div\\b[^>]*>", "</div>", "gi")
   * returns: ["test"]
   */
  showdown.helper.matchRecursiveRegExp = function (str, left, right, flags) {
    'use strict';

    var matchPos = rgxFindMatchPos(str, left, right, flags),
        results = [];

    for (var i = 0; i < matchPos.length; ++i) {
      results.push([str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)]);
    }
    return results;
  };

  /**
   *
   * @param {string} str
   * @param {string|function} replacement
   * @param {string} left
   * @param {string} right
   * @param {string} flags
   * @returns {string}
   */
  showdown.helper.replaceRecursiveRegExp = function (str, replacement, left, right, flags) {
    'use strict';

    if (!showdown.helper.isFunction(replacement)) {
      var repStr = replacement;
      replacement = function replacement() {
        return repStr;
      };
    }

    var matchPos = rgxFindMatchPos(str, left, right, flags),
        finalStr = str,
        lng = matchPos.length;

    if (lng > 0) {
      var bits = [];
      if (matchPos[0].wholeMatch.start !== 0) {
        bits.push(str.slice(0, matchPos[0].wholeMatch.start));
      }
      for (var i = 0; i < lng; ++i) {
        bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));
        if (i < lng - 1) {
          bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
        }
      }
      if (matchPos[lng - 1].wholeMatch.end < str.length) {
        bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
      }
      finalStr = bits.join('');
    }
    return finalStr;
  };

  /**
   * Returns the index within the passed String object of the first occurrence of the specified regex,
   * starting the search at fromIndex. Returns -1 if the value is not found.
   *
   * @param {string} str string to search
   * @param {RegExp} regex Regular expression to search
   * @param {int} [fromIndex = 0] Index to start the search
   * @returns {Number}
   * @throws InvalidArgumentError
   */
  showdown.helper.regexIndexOf = function (str, regex, fromIndex) {
    'use strict';

    if (!showdown.helper.isString(str)) {
      throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
    }
    if (regex instanceof RegExp === false) {
      throw 'InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp';
    }
    var indexOf = str.substring(fromIndex || 0).search(regex);
    return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
  };

  /**
   * Splits the passed string object at the defined index, and returns an array composed of the two substrings
   * @param {string} str string to split
   * @param {int} index index to split string at
   * @returns {[string,string]}
   * @throws InvalidArgumentError
   */
  showdown.helper.splitAtIndex = function (str, index) {
    'use strict';

    if (!showdown.helper.isString(str)) {
      throw 'InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string';
    }
    return [str.substring(0, index), str.substring(index)];
  };

  /**
   * Obfuscate an e-mail address through the use of Character Entities,
   * transforming ASCII characters into their equivalent decimal or hex entities.
   *
   * Since it has a random component, subsequent calls to this function produce different results
   *
   * @param {string} mail
   * @returns {string}
   */
  showdown.helper.encodeEmailAddress = function (mail) {
    'use strict';

    var encode = [function (ch) {
      return '&#' + ch.charCodeAt(0) + ';';
    }, function (ch) {
      return '&#x' + ch.charCodeAt(0).toString(16) + ';';
    }, function (ch) {
      return ch;
    }];

    mail = mail.replace(/./g, function (ch) {
      if (ch === '@') {
        // this *must* be encoded. I insist.
        ch = encode[Math.floor(Math.random() * 2)](ch);
      } else {
        var r = Math.random();
        // roughly 10% raw, 45% hex, 45% dec
        ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
      }
      return ch;
    });

    return mail;
  };

  /**
   *
   * @param str
   * @param targetLength
   * @param padString
   * @returns {string}
   */
  showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
    'use strict';
    /*jshint bitwise: false*/
    // eslint-disable-next-line space-infix-ops

    targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
    /*jshint bitwise: true*/
    padString = String(padString || ' ');
    if (str.length > targetLength) {
      return String(str);
    } else {
      targetLength = targetLength - str.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return String(str) + padString.slice(0, targetLength);
    }
  };

  /**
   * POLYFILLS
   */
  // use this instead of builtin is undefined for IE8 compatibility
  if (typeof console === 'undefined') {
    console = {
      warn: function warn(msg) {
        'use strict';

        alert(msg);
      },
      log: function log(msg) {
        'use strict';

        alert(msg);
      },
      error: function error(msg) {
        'use strict';

        throw msg;
      }
    };
  }

  /**
   * Common regexes.
   * We declare some common regexes to improve performance
   */
  showdown.helper.regexes = {
    asteriskDashAndColon: /([*_:~])/g
  };

  /**
   * EMOJIS LIST
   */
  showdown.helper.emojis = {
    '+1': '\uD83D\uDC4D',
    '-1': '\uD83D\uDC4E',
    '100': '\uD83D\uDCAF',
    '1234': '\uD83D\uDD22',
    '1st_place_medal': '\uD83E\uDD47',
    '2nd_place_medal': '\uD83E\uDD48',
    '3rd_place_medal': '\uD83E\uDD49',
    '8ball': '\uD83C\uDFB1',
    'a': '\uD83C\uDD70\uFE0F',
    'ab': '\uD83C\uDD8E',
    'abc': '\uD83D\uDD24',
    'abcd': '\uD83D\uDD21',
    'accept': '\uD83C\uDE51',
    'aerial_tramway': '\uD83D\uDEA1',
    'airplane': '\u2708\uFE0F',
    'alarm_clock': '\u23F0',
    'alembic': '\u2697\uFE0F',
    'alien': '\uD83D\uDC7D',
    'ambulance': '\uD83D\uDE91',
    'amphora': '\uD83C\uDFFA',
    'anchor': '\u2693\uFE0F',
    'angel': '\uD83D\uDC7C',
    'anger': '\uD83D\uDCA2',
    'angry': '\uD83D\uDE20',
    'anguished': '\uD83D\uDE27',
    'ant': '\uD83D\uDC1C',
    'apple': '\uD83C\uDF4E',
    'aquarius': '\u2652\uFE0F',
    'aries': '\u2648\uFE0F',
    'arrow_backward': '\u25C0\uFE0F',
    'arrow_double_down': '\u23EC',
    'arrow_double_up': '\u23EB',
    'arrow_down': '\u2B07\uFE0F',
    'arrow_down_small': '\uD83D\uDD3D',
    'arrow_forward': '\u25B6\uFE0F',
    'arrow_heading_down': '\u2935\uFE0F',
    'arrow_heading_up': '\u2934\uFE0F',
    'arrow_left': '\u2B05\uFE0F',
    'arrow_lower_left': '\u2199\uFE0F',
    'arrow_lower_right': '\u2198\uFE0F',
    'arrow_right': '\u27A1\uFE0F',
    'arrow_right_hook': '\u21AA\uFE0F',
    'arrow_up': '\u2B06\uFE0F',
    'arrow_up_down': '\u2195\uFE0F',
    'arrow_up_small': '\uD83D\uDD3C',
    'arrow_upper_left': '\u2196\uFE0F',
    'arrow_upper_right': '\u2197\uFE0F',
    'arrows_clockwise': '\uD83D\uDD03',
    'arrows_counterclockwise': '\uD83D\uDD04',
    'art': '\uD83C\uDFA8',
    'articulated_lorry': '\uD83D\uDE9B',
    'artificial_satellite': '\uD83D\uDEF0',
    'astonished': '\uD83D\uDE32',
    'athletic_shoe': '\uD83D\uDC5F',
    'atm': '\uD83C\uDFE7',
    'atom_symbol': '\u269B\uFE0F',
    'avocado': '\uD83E\uDD51',
    'b': '\uD83C\uDD71\uFE0F',
    'baby': '\uD83D\uDC76',
    'baby_bottle': '\uD83C\uDF7C',
    'baby_chick': '\uD83D\uDC24',
    'baby_symbol': '\uD83D\uDEBC',
    'back': '\uD83D\uDD19',
    'bacon': '\uD83E\uDD53',
    'badminton': '\uD83C\uDFF8',
    'baggage_claim': '\uD83D\uDEC4',
    'baguette_bread': '\uD83E\uDD56',
    'balance_scale': '\u2696\uFE0F',
    'balloon': '\uD83C\uDF88',
    'ballot_box': '\uD83D\uDDF3',
    'ballot_box_with_check': '\u2611\uFE0F',
    'bamboo': '\uD83C\uDF8D',
    'banana': '\uD83C\uDF4C',
    'bangbang': '\u203C\uFE0F',
    'bank': '\uD83C\uDFE6',
    'bar_chart': '\uD83D\uDCCA',
    'barber': '\uD83D\uDC88',
    'baseball': '\u26BE\uFE0F',
    'basketball': '\uD83C\uDFC0',
    'basketball_man': '\u26F9\uFE0F',
    'basketball_woman': '\u26F9\uFE0F&zwj;\u2640\uFE0F',
    'bat': '\uD83E\uDD87',
    'bath': '\uD83D\uDEC0',
    'bathtub': '\uD83D\uDEC1',
    'battery': '\uD83D\uDD0B',
    'beach_umbrella': '\uD83C\uDFD6',
    'bear': '\uD83D\uDC3B',
    'bed': '\uD83D\uDECF',
    'bee': '\uD83D\uDC1D',
    'beer': '\uD83C\uDF7A',
    'beers': '\uD83C\uDF7B',
    'beetle': '\uD83D\uDC1E',
    'beginner': '\uD83D\uDD30',
    'bell': '\uD83D\uDD14',
    'bellhop_bell': '\uD83D\uDECE',
    'bento': '\uD83C\uDF71',
    'biking_man': '\uD83D\uDEB4',
    'bike': '\uD83D\uDEB2',
    'biking_woman': '\uD83D\uDEB4&zwj;\u2640\uFE0F',
    'bikini': '\uD83D\uDC59',
    'biohazard': '\u2623\uFE0F',
    'bird': '\uD83D\uDC26',
    'birthday': '\uD83C\uDF82',
    'black_circle': '\u26AB\uFE0F',
    'black_flag': '\uD83C\uDFF4',
    'black_heart': '\uD83D\uDDA4',
    'black_joker': '\uD83C\uDCCF',
    'black_large_square': '\u2B1B\uFE0F',
    'black_medium_small_square': '\u25FE\uFE0F',
    'black_medium_square': '\u25FC\uFE0F',
    'black_nib': '\u2712\uFE0F',
    'black_small_square': '\u25AA\uFE0F',
    'black_square_button': '\uD83D\uDD32',
    'blonde_man': '\uD83D\uDC71',
    'blonde_woman': '\uD83D\uDC71&zwj;\u2640\uFE0F',
    'blossom': '\uD83C\uDF3C',
    'blowfish': '\uD83D\uDC21',
    'blue_book': '\uD83D\uDCD8',
    'blue_car': '\uD83D\uDE99',
    'blue_heart': '\uD83D\uDC99',
    'blush': '\uD83D\uDE0A',
    'boar': '\uD83D\uDC17',
    'boat': '\u26F5\uFE0F',
    'bomb': '\uD83D\uDCA3',
    'book': '\uD83D\uDCD6',
    'bookmark': '\uD83D\uDD16',
    'bookmark_tabs': '\uD83D\uDCD1',
    'books': '\uD83D\uDCDA',
    'boom': '\uD83D\uDCA5',
    'boot': '\uD83D\uDC62',
    'bouquet': '\uD83D\uDC90',
    'bowing_man': '\uD83D\uDE47',
    'bow_and_arrow': '\uD83C\uDFF9',
    'bowing_woman': '\uD83D\uDE47&zwj;\u2640\uFE0F',
    'bowling': '\uD83C\uDFB3',
    'boxing_glove': '\uD83E\uDD4A',
    'boy': '\uD83D\uDC66',
    'bread': '\uD83C\uDF5E',
    'bride_with_veil': '\uD83D\uDC70',
    'bridge_at_night': '\uD83C\uDF09',
    'briefcase': '\uD83D\uDCBC',
    'broken_heart': '\uD83D\uDC94',
    'bug': '\uD83D\uDC1B',
    'building_construction': '\uD83C\uDFD7',
    'bulb': '\uD83D\uDCA1',
    'bullettrain_front': '\uD83D\uDE85',
    'bullettrain_side': '\uD83D\uDE84',
    'burrito': '\uD83C\uDF2F',
    'bus': '\uD83D\uDE8C',
    'business_suit_levitating': '\uD83D\uDD74',
    'busstop': '\uD83D\uDE8F',
    'bust_in_silhouette': '\uD83D\uDC64',
    'busts_in_silhouette': '\uD83D\uDC65',
    'butterfly': '\uD83E\uDD8B',
    'cactus': '\uD83C\uDF35',
    'cake': '\uD83C\uDF70',
    'calendar': '\uD83D\uDCC6',
    'call_me_hand': '\uD83E\uDD19',
    'calling': '\uD83D\uDCF2',
    'camel': '\uD83D\uDC2B',
    'camera': '\uD83D\uDCF7',
    'camera_flash': '\uD83D\uDCF8',
    'camping': '\uD83C\uDFD5',
    'cancer': '\u264B\uFE0F',
    'candle': '\uD83D\uDD6F',
    'candy': '\uD83C\uDF6C',
    'canoe': '\uD83D\uDEF6',
    'capital_abcd': '\uD83D\uDD20',
    'capricorn': '\u2651\uFE0F',
    'car': '\uD83D\uDE97',
    'card_file_box': '\uD83D\uDDC3',
    'card_index': '\uD83D\uDCC7',
    'card_index_dividers': '\uD83D\uDDC2',
    'carousel_horse': '\uD83C\uDFA0',
    'carrot': '\uD83E\uDD55',
    'cat': '\uD83D\uDC31',
    'cat2': '\uD83D\uDC08',
    'cd': '\uD83D\uDCBF',
    'chains': '\u26D3',
    'champagne': '\uD83C\uDF7E',
    'chart': '\uD83D\uDCB9',
    'chart_with_downwards_trend': '\uD83D\uDCC9',
    'chart_with_upwards_trend': '\uD83D\uDCC8',
    'checkered_flag': '\uD83C\uDFC1',
    'cheese': '\uD83E\uDDC0',
    'cherries': '\uD83C\uDF52',
    'cherry_blossom': '\uD83C\uDF38',
    'chestnut': '\uD83C\uDF30',
    'chicken': '\uD83D\uDC14',
    'children_crossing': '\uD83D\uDEB8',
    'chipmunk': '\uD83D\uDC3F',
    'chocolate_bar': '\uD83C\uDF6B',
    'christmas_tree': '\uD83C\uDF84',
    'church': '\u26EA\uFE0F',
    'cinema': '\uD83C\uDFA6',
    'circus_tent': '\uD83C\uDFAA',
    'city_sunrise': '\uD83C\uDF07',
    'city_sunset': '\uD83C\uDF06',
    'cityscape': '\uD83C\uDFD9',
    'cl': '\uD83C\uDD91',
    'clamp': '\uD83D\uDDDC',
    'clap': '\uD83D\uDC4F',
    'clapper': '\uD83C\uDFAC',
    'classical_building': '\uD83C\uDFDB',
    'clinking_glasses': '\uD83E\uDD42',
    'clipboard': '\uD83D\uDCCB',
    'clock1': '\uD83D\uDD50',
    'clock10': '\uD83D\uDD59',
    'clock1030': '\uD83D\uDD65',
    'clock11': '\uD83D\uDD5A',
    'clock1130': '\uD83D\uDD66',
    'clock12': '\uD83D\uDD5B',
    'clock1230': '\uD83D\uDD67',
    'clock130': '\uD83D\uDD5C',
    'clock2': '\uD83D\uDD51',
    'clock230': '\uD83D\uDD5D',
    'clock3': '\uD83D\uDD52',
    'clock330': '\uD83D\uDD5E',
    'clock4': '\uD83D\uDD53',
    'clock430': '\uD83D\uDD5F',
    'clock5': '\uD83D\uDD54',
    'clock530': '\uD83D\uDD60',
    'clock6': '\uD83D\uDD55',
    'clock630': '\uD83D\uDD61',
    'clock7': '\uD83D\uDD56',
    'clock730': '\uD83D\uDD62',
    'clock8': '\uD83D\uDD57',
    'clock830': '\uD83D\uDD63',
    'clock9': '\uD83D\uDD58',
    'clock930': '\uD83D\uDD64',
    'closed_book': '\uD83D\uDCD5',
    'closed_lock_with_key': '\uD83D\uDD10',
    'closed_umbrella': '\uD83C\uDF02',
    'cloud': '\u2601\uFE0F',
    'cloud_with_lightning': '\uD83C\uDF29',
    'cloud_with_lightning_and_rain': '\u26C8',
    'cloud_with_rain': '\uD83C\uDF27',
    'cloud_with_snow': '\uD83C\uDF28',
    'clown_face': '\uD83E\uDD21',
    'clubs': '\u2663\uFE0F',
    'cocktail': '\uD83C\uDF78',
    'coffee': '\u2615\uFE0F',
    'coffin': '\u26B0\uFE0F',
    'cold_sweat': '\uD83D\uDE30',
    'comet': '\u2604\uFE0F',
    'computer': '\uD83D\uDCBB',
    'computer_mouse': '\uD83D\uDDB1',
    'confetti_ball': '\uD83C\uDF8A',
    'confounded': '\uD83D\uDE16',
    'confused': '\uD83D\uDE15',
    'congratulations': '\u3297\uFE0F',
    'construction': '\uD83D\uDEA7',
    'construction_worker_man': '\uD83D\uDC77',
    'construction_worker_woman': '\uD83D\uDC77&zwj;\u2640\uFE0F',
    'control_knobs': '\uD83C\uDF9B',
    'convenience_store': '\uD83C\uDFEA',
    'cookie': '\uD83C\uDF6A',
    'cool': '\uD83C\uDD92',
    'policeman': '\uD83D\uDC6E',
    'copyright': '\xA9\uFE0F',
    'corn': '\uD83C\uDF3D',
    'couch_and_lamp': '\uD83D\uDECB',
    'couple': '\uD83D\uDC6B',
    'couple_with_heart_woman_man': '\uD83D\uDC91',
    'couple_with_heart_man_man': '\uD83D\uDC68&zwj;\u2764\uFE0F&zwj;\uD83D\uDC68',
    'couple_with_heart_woman_woman': '\uD83D\uDC69&zwj;\u2764\uFE0F&zwj;\uD83D\uDC69',
    'couplekiss_man_man': '\uD83D\uDC68&zwj;\u2764\uFE0F&zwj;\uD83D\uDC8B&zwj;\uD83D\uDC68',
    'couplekiss_man_woman': '\uD83D\uDC8F',
    'couplekiss_woman_woman': '\uD83D\uDC69&zwj;\u2764\uFE0F&zwj;\uD83D\uDC8B&zwj;\uD83D\uDC69',
    'cow': '\uD83D\uDC2E',
    'cow2': '\uD83D\uDC04',
    'cowboy_hat_face': '\uD83E\uDD20',
    'crab': '\uD83E\uDD80',
    'crayon': '\uD83D\uDD8D',
    'credit_card': '\uD83D\uDCB3',
    'crescent_moon': '\uD83C\uDF19',
    'cricket': '\uD83C\uDFCF',
    'crocodile': '\uD83D\uDC0A',
    'croissant': '\uD83E\uDD50',
    'crossed_fingers': '\uD83E\uDD1E',
    'crossed_flags': '\uD83C\uDF8C',
    'crossed_swords': '\u2694\uFE0F',
    'crown': '\uD83D\uDC51',
    'cry': '\uD83D\uDE22',
    'crying_cat_face': '\uD83D\uDE3F',
    'crystal_ball': '\uD83D\uDD2E',
    'cucumber': '\uD83E\uDD52',
    'cupid': '\uD83D\uDC98',
    'curly_loop': '\u27B0',
    'currency_exchange': '\uD83D\uDCB1',
    'curry': '\uD83C\uDF5B',
    'custard': '\uD83C\uDF6E',
    'customs': '\uD83D\uDEC3',
    'cyclone': '\uD83C\uDF00',
    'dagger': '\uD83D\uDDE1',
    'dancer': '\uD83D\uDC83',
    'dancing_women': '\uD83D\uDC6F',
    'dancing_men': '\uD83D\uDC6F&zwj;\u2642\uFE0F',
    'dango': '\uD83C\uDF61',
    'dark_sunglasses': '\uD83D\uDD76',
    'dart': '\uD83C\uDFAF',
    'dash': '\uD83D\uDCA8',
    'date': '\uD83D\uDCC5',
    'deciduous_tree': '\uD83C\uDF33',
    'deer': '\uD83E\uDD8C',
    'department_store': '\uD83C\uDFEC',
    'derelict_house': '\uD83C\uDFDA',
    'desert': '\uD83C\uDFDC',
    'desert_island': '\uD83C\uDFDD',
    'desktop_computer': '\uD83D\uDDA5',
    'male_detective': '\uD83D\uDD75\uFE0F',
    'diamond_shape_with_a_dot_inside': '\uD83D\uDCA0',
    'diamonds': '\u2666\uFE0F',
    'disappointed': '\uD83D\uDE1E',
    'disappointed_relieved': '\uD83D\uDE25',
    'dizzy': '\uD83D\uDCAB',
    'dizzy_face': '\uD83D\uDE35',
    'do_not_litter': '\uD83D\uDEAF',
    'dog': '\uD83D\uDC36',
    'dog2': '\uD83D\uDC15',
    'dollar': '\uD83D\uDCB5',
    'dolls': '\uD83C\uDF8E',
    'dolphin': '\uD83D\uDC2C',
    'door': '\uD83D\uDEAA',
    'doughnut': '\uD83C\uDF69',
    'dove': '\uD83D\uDD4A',
    'dragon': '\uD83D\uDC09',
    'dragon_face': '\uD83D\uDC32',
    'dress': '\uD83D\uDC57',
    'dromedary_camel': '\uD83D\uDC2A',
    'drooling_face': '\uD83E\uDD24',
    'droplet': '\uD83D\uDCA7',
    'drum': '\uD83E\uDD41',
    'duck': '\uD83E\uDD86',
    'dvd': '\uD83D\uDCC0',
    'e-mail': '\uD83D\uDCE7',
    'eagle': '\uD83E\uDD85',
    'ear': '\uD83D\uDC42',
    'ear_of_rice': '\uD83C\uDF3E',
    'earth_africa': '\uD83C\uDF0D',
    'earth_americas': '\uD83C\uDF0E',
    'earth_asia': '\uD83C\uDF0F',
    'egg': '\uD83E\uDD5A',
    'eggplant': '\uD83C\uDF46',
    'eight_pointed_black_star': '\u2734\uFE0F',
    'eight_spoked_asterisk': '\u2733\uFE0F',
    'electric_plug': '\uD83D\uDD0C',
    'elephant': '\uD83D\uDC18',
    'email': '\u2709\uFE0F',
    'end': '\uD83D\uDD1A',
    'envelope_with_arrow': '\uD83D\uDCE9',
    'euro': '\uD83D\uDCB6',
    'european_castle': '\uD83C\uDFF0',
    'european_post_office': '\uD83C\uDFE4',
    'evergreen_tree': '\uD83C\uDF32',
    'exclamation': '\u2757\uFE0F',
    'expressionless': '\uD83D\uDE11',
    'eye': '\uD83D\uDC41',
    'eye_speech_bubble': '\uD83D\uDC41&zwj;\uD83D\uDDE8',
    'eyeglasses': '\uD83D\uDC53',
    'eyes': '\uD83D\uDC40',
    'face_with_head_bandage': '\uD83E\uDD15',
    'face_with_thermometer': '\uD83E\uDD12',
    'fist_oncoming': '\uD83D\uDC4A',
    'factory': '\uD83C\uDFED',
    'fallen_leaf': '\uD83C\uDF42',
    'family_man_woman_boy': '\uD83D\uDC6A',
    'family_man_boy': '\uD83D\uDC68&zwj;\uD83D\uDC66',
    'family_man_boy_boy': '\uD83D\uDC68&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66',
    'family_man_girl': '\uD83D\uDC68&zwj;\uD83D\uDC67',
    'family_man_girl_boy': '\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66',
    'family_man_girl_girl': '\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67',
    'family_man_man_boy': '\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC66',
    'family_man_man_boy_boy': '\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66',
    'family_man_man_girl': '\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67',
    'family_man_man_girl_boy': '\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66',
    'family_man_man_girl_girl': '\uD83D\uDC68&zwj;\uD83D\uDC68&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67',
    'family_man_woman_boy_boy': '\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66',
    'family_man_woman_girl': '\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67',
    'family_man_woman_girl_boy': '\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66',
    'family_man_woman_girl_girl': '\uD83D\uDC68&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67',
    'family_woman_boy': '\uD83D\uDC69&zwj;\uD83D\uDC66',
    'family_woman_boy_boy': '\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66',
    'family_woman_girl': '\uD83D\uDC69&zwj;\uD83D\uDC67',
    'family_woman_girl_boy': '\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66',
    'family_woman_girl_girl': '\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67',
    'family_woman_woman_boy': '\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66',
    'family_woman_woman_boy_boy': '\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC66&zwj;\uD83D\uDC66',
    'family_woman_woman_girl': '\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67',
    'family_woman_woman_girl_boy': '\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC66',
    'family_woman_woman_girl_girl': '\uD83D\uDC69&zwj;\uD83D\uDC69&zwj;\uD83D\uDC67&zwj;\uD83D\uDC67',
    'fast_forward': '\u23E9',
    'fax': '\uD83D\uDCE0',
    'fearful': '\uD83D\uDE28',
    'feet': '\uD83D\uDC3E',
    'female_detective': '\uD83D\uDD75\uFE0F&zwj;\u2640\uFE0F',
    'ferris_wheel': '\uD83C\uDFA1',
    'ferry': '\u26F4',
    'field_hockey': '\uD83C\uDFD1',
    'file_cabinet': '\uD83D\uDDC4',
    'file_folder': '\uD83D\uDCC1',
    'film_projector': '\uD83D\uDCFD',
    'film_strip': '\uD83C\uDF9E',
    'fire': '\uD83D\uDD25',
    'fire_engine': '\uD83D\uDE92',
    'fireworks': '\uD83C\uDF86',
    'first_quarter_moon': '\uD83C\uDF13',
    'first_quarter_moon_with_face': '\uD83C\uDF1B',
    'fish': '\uD83D\uDC1F',
    'fish_cake': '\uD83C\uDF65',
    'fishing_pole_and_fish': '\uD83C\uDFA3',
    'fist_raised': '\u270A',
    'fist_left': '\uD83E\uDD1B',
    'fist_right': '\uD83E\uDD1C',
    'flags': '\uD83C\uDF8F',
    'flashlight': '\uD83D\uDD26',
    'fleur_de_lis': '\u269C\uFE0F',
    'flight_arrival': '\uD83D\uDEEC',
    'flight_departure': '\uD83D\uDEEB',
    'floppy_disk': '\uD83D\uDCBE',
    'flower_playing_cards': '\uD83C\uDFB4',
    'flushed': '\uD83D\uDE33',
    'fog': '\uD83C\uDF2B',
    'foggy': '\uD83C\uDF01',
    'football': '\uD83C\uDFC8',
    'footprints': '\uD83D\uDC63',
    'fork_and_knife': '\uD83C\uDF74',
    'fountain': '\u26F2\uFE0F',
    'fountain_pen': '\uD83D\uDD8B',
    'four_leaf_clover': '\uD83C\uDF40',
    'fox_face': '\uD83E\uDD8A',
    'framed_picture': '\uD83D\uDDBC',
    'free': '\uD83C\uDD93',
    'fried_egg': '\uD83C\uDF73',
    'fried_shrimp': '\uD83C\uDF64',
    'fries': '\uD83C\uDF5F',
    'frog': '\uD83D\uDC38',
    'frowning': '\uD83D\uDE26',
    'frowning_face': '\u2639\uFE0F',
    'frowning_man': '\uD83D\uDE4D&zwj;\u2642\uFE0F',
    'frowning_woman': '\uD83D\uDE4D',
    'middle_finger': '\uD83D\uDD95',
    'fuelpump': '\u26FD\uFE0F',
    'full_moon': '\uD83C\uDF15',
    'full_moon_with_face': '\uD83C\uDF1D',
    'funeral_urn': '\u26B1\uFE0F',
    'game_die': '\uD83C\uDFB2',
    'gear': '\u2699\uFE0F',
    'gem': '\uD83D\uDC8E',
    'gemini': '\u264A\uFE0F',
    'ghost': '\uD83D\uDC7B',
    'gift': '\uD83C\uDF81',
    'gift_heart': '\uD83D\uDC9D',
    'girl': '\uD83D\uDC67',
    'globe_with_meridians': '\uD83C\uDF10',
    'goal_net': '\uD83E\uDD45',
    'goat': '\uD83D\uDC10',
    'golf': '\u26F3\uFE0F',
    'golfing_man': '\uD83C\uDFCC\uFE0F',
    'golfing_woman': '\uD83C\uDFCC\uFE0F&zwj;\u2640\uFE0F',
    'gorilla': '\uD83E\uDD8D',
    'grapes': '\uD83C\uDF47',
    'green_apple': '\uD83C\uDF4F',
    'green_book': '\uD83D\uDCD7',
    'green_heart': '\uD83D\uDC9A',
    'green_salad': '\uD83E\uDD57',
    'grey_exclamation': '\u2755',
    'grey_question': '\u2754',
    'grimacing': '\uD83D\uDE2C',
    'grin': '\uD83D\uDE01',
    'grinning': '\uD83D\uDE00',
    'guardsman': '\uD83D\uDC82',
    'guardswoman': '\uD83D\uDC82&zwj;\u2640\uFE0F',
    'guitar': '\uD83C\uDFB8',
    'gun': '\uD83D\uDD2B',
    'haircut_woman': '\uD83D\uDC87',
    'haircut_man': '\uD83D\uDC87&zwj;\u2642\uFE0F',
    'hamburger': '\uD83C\uDF54',
    'hammer': '\uD83D\uDD28',
    'hammer_and_pick': '\u2692',
    'hammer_and_wrench': '\uD83D\uDEE0',
    'hamster': '\uD83D\uDC39',
    'hand': '\u270B',
    'handbag': '\uD83D\uDC5C',
    'handshake': '\uD83E\uDD1D',
    'hankey': '\uD83D\uDCA9',
    'hatched_chick': '\uD83D\uDC25',
    'hatching_chick': '\uD83D\uDC23',
    'headphones': '\uD83C\uDFA7',
    'hear_no_evil': '\uD83D\uDE49',
    'heart': '\u2764\uFE0F',
    'heart_decoration': '\uD83D\uDC9F',
    'heart_eyes': '\uD83D\uDE0D',
    'heart_eyes_cat': '\uD83D\uDE3B',
    'heartbeat': '\uD83D\uDC93',
    'heartpulse': '\uD83D\uDC97',
    'hearts': '\u2665\uFE0F',
    'heavy_check_mark': '\u2714\uFE0F',
    'heavy_division_sign': '\u2797',
    'heavy_dollar_sign': '\uD83D\uDCB2',
    'heavy_heart_exclamation': '\u2763\uFE0F',
    'heavy_minus_sign': '\u2796',
    'heavy_multiplication_x': '\u2716\uFE0F',
    'heavy_plus_sign': '\u2795',
    'helicopter': '\uD83D\uDE81',
    'herb': '\uD83C\uDF3F',
    'hibiscus': '\uD83C\uDF3A',
    'high_brightness': '\uD83D\uDD06',
    'high_heel': '\uD83D\uDC60',
    'hocho': '\uD83D\uDD2A',
    'hole': '\uD83D\uDD73',
    'honey_pot': '\uD83C\uDF6F',
    'horse': '\uD83D\uDC34',
    'horse_racing': '\uD83C\uDFC7',
    'hospital': '\uD83C\uDFE5',
    'hot_pepper': '\uD83C\uDF36',
    'hotdog': '\uD83C\uDF2D',
    'hotel': '\uD83C\uDFE8',
    'hotsprings': '\u2668\uFE0F',
    'hourglass': '\u231B\uFE0F',
    'hourglass_flowing_sand': '\u23F3',
    'house': '\uD83C\uDFE0',
    'house_with_garden': '\uD83C\uDFE1',
    'houses': '\uD83C\uDFD8',
    'hugs': '\uD83E\uDD17',
    'hushed': '\uD83D\uDE2F',
    'ice_cream': '\uD83C\uDF68',
    'ice_hockey': '\uD83C\uDFD2',
    'ice_skate': '\u26F8',
    'icecream': '\uD83C\uDF66',
    'id': '\uD83C\uDD94',
    'ideograph_advantage': '\uD83C\uDE50',
    'imp': '\uD83D\uDC7F',
    'inbox_tray': '\uD83D\uDCE5',
    'incoming_envelope': '\uD83D\uDCE8',
    'tipping_hand_woman': '\uD83D\uDC81',
    'information_source': '\u2139\uFE0F',
    'innocent': '\uD83D\uDE07',
    'interrobang': '\u2049\uFE0F',
    'iphone': '\uD83D\uDCF1',
    'izakaya_lantern': '\uD83C\uDFEE',
    'jack_o_lantern': '\uD83C\uDF83',
    'japan': '\uD83D\uDDFE',
    'japanese_castle': '\uD83C\uDFEF',
    'japanese_goblin': '\uD83D\uDC7A',
    'japanese_ogre': '\uD83D\uDC79',
    'jeans': '\uD83D\uDC56',
    'joy': '\uD83D\uDE02',
    'joy_cat': '\uD83D\uDE39',
    'joystick': '\uD83D\uDD79',
    'kaaba': '\uD83D\uDD4B',
    'key': '\uD83D\uDD11',
    'keyboard': '\u2328\uFE0F',
    'keycap_ten': '\uD83D\uDD1F',
    'kick_scooter': '\uD83D\uDEF4',
    'kimono': '\uD83D\uDC58',
    'kiss': '\uD83D\uDC8B',
    'kissing': '\uD83D\uDE17',
    'kissing_cat': '\uD83D\uDE3D',
    'kissing_closed_eyes': '\uD83D\uDE1A',
    'kissing_heart': '\uD83D\uDE18',
    'kissing_smiling_eyes': '\uD83D\uDE19',
    'kiwi_fruit': '\uD83E\uDD5D',
    'koala': '\uD83D\uDC28',
    'koko': '\uD83C\uDE01',
    'label': '\uD83C\uDFF7',
    'large_blue_circle': '\uD83D\uDD35',
    'large_blue_diamond': '\uD83D\uDD37',
    'large_orange_diamond': '\uD83D\uDD36',
    'last_quarter_moon': '\uD83C\uDF17',
    'last_quarter_moon_with_face': '\uD83C\uDF1C',
    'latin_cross': '\u271D\uFE0F',
    'laughing': '\uD83D\uDE06',
    'leaves': '\uD83C\uDF43',
    'ledger': '\uD83D\uDCD2',
    'left_luggage': '\uD83D\uDEC5',
    'left_right_arrow': '\u2194\uFE0F',
    'leftwards_arrow_with_hook': '\u21A9\uFE0F',
    'lemon': '\uD83C\uDF4B',
    'leo': '\u264C\uFE0F',
    'leopard': '\uD83D\uDC06',
    'level_slider': '\uD83C\uDF9A',
    'libra': '\u264E\uFE0F',
    'light_rail': '\uD83D\uDE88',
    'link': '\uD83D\uDD17',
    'lion': '\uD83E\uDD81',
    'lips': '\uD83D\uDC44',
    'lipstick': '\uD83D\uDC84',
    'lizard': '\uD83E\uDD8E',
    'lock': '\uD83D\uDD12',
    'lock_with_ink_pen': '\uD83D\uDD0F',
    'lollipop': '\uD83C\uDF6D',
    'loop': '\u27BF',
    'loud_sound': '\uD83D\uDD0A',
    'loudspeaker': '\uD83D\uDCE2',
    'love_hotel': '\uD83C\uDFE9',
    'love_letter': '\uD83D\uDC8C',
    'low_brightness': '\uD83D\uDD05',
    'lying_face': '\uD83E\uDD25',
    'm': '\u24C2\uFE0F',
    'mag': '\uD83D\uDD0D',
    'mag_right': '\uD83D\uDD0E',
    'mahjong': '\uD83C\uDC04\uFE0F',
    'mailbox': '\uD83D\uDCEB',
    'mailbox_closed': '\uD83D\uDCEA',
    'mailbox_with_mail': '\uD83D\uDCEC',
    'mailbox_with_no_mail': '\uD83D\uDCED',
    'man': '\uD83D\uDC68',
    'man_artist': '\uD83D\uDC68&zwj;\uD83C\uDFA8',
    'man_astronaut': '\uD83D\uDC68&zwj;\uD83D\uDE80',
    'man_cartwheeling': '\uD83E\uDD38&zwj;\u2642\uFE0F',
    'man_cook': '\uD83D\uDC68&zwj;\uD83C\uDF73',
    'man_dancing': '\uD83D\uDD7A',
    'man_facepalming': '\uD83E\uDD26&zwj;\u2642\uFE0F',
    'man_factory_worker': '\uD83D\uDC68&zwj;\uD83C\uDFED',
    'man_farmer': '\uD83D\uDC68&zwj;\uD83C\uDF3E',
    'man_firefighter': '\uD83D\uDC68&zwj;\uD83D\uDE92',
    'man_health_worker': '\uD83D\uDC68&zwj;\u2695\uFE0F',
    'man_in_tuxedo': '\uD83E\uDD35',
    'man_judge': '\uD83D\uDC68&zwj;\u2696\uFE0F',
    'man_juggling': '\uD83E\uDD39&zwj;\u2642\uFE0F',
    'man_mechanic': '\uD83D\uDC68&zwj;\uD83D\uDD27',
    'man_office_worker': '\uD83D\uDC68&zwj;\uD83D\uDCBC',
    'man_pilot': '\uD83D\uDC68&zwj;\u2708\uFE0F',
    'man_playing_handball': '\uD83E\uDD3E&zwj;\u2642\uFE0F',
    'man_playing_water_polo': '\uD83E\uDD3D&zwj;\u2642\uFE0F',
    'man_scientist': '\uD83D\uDC68&zwj;\uD83D\uDD2C',
    'man_shrugging': '\uD83E\uDD37&zwj;\u2642\uFE0F',
    'man_singer': '\uD83D\uDC68&zwj;\uD83C\uDFA4',
    'man_student': '\uD83D\uDC68&zwj;\uD83C\uDF93',
    'man_teacher': '\uD83D\uDC68&zwj;\uD83C\uDFEB',
    'man_technologist': '\uD83D\uDC68&zwj;\uD83D\uDCBB',
    'man_with_gua_pi_mao': '\uD83D\uDC72',
    'man_with_turban': '\uD83D\uDC73',
    'tangerine': '\uD83C\uDF4A',
    'mans_shoe': '\uD83D\uDC5E',
    'mantelpiece_clock': '\uD83D\uDD70',
    'maple_leaf': '\uD83C\uDF41',
    'martial_arts_uniform': '\uD83E\uDD4B',
    'mask': '\uD83D\uDE37',
    'massage_woman': '\uD83D\uDC86',
    'massage_man': '\uD83D\uDC86&zwj;\u2642\uFE0F',
    'meat_on_bone': '\uD83C\uDF56',
    'medal_military': '\uD83C\uDF96',
    'medal_sports': '\uD83C\uDFC5',
    'mega': '\uD83D\uDCE3',
    'melon': '\uD83C\uDF48',
    'memo': '\uD83D\uDCDD',
    'men_wrestling': '\uD83E\uDD3C&zwj;\u2642\uFE0F',
    'menorah': '\uD83D\uDD4E',
    'mens': '\uD83D\uDEB9',
    'metal': '\uD83E\uDD18',
    'metro': '\uD83D\uDE87',
    'microphone': '\uD83C\uDFA4',
    'microscope': '\uD83D\uDD2C',
    'milk_glass': '\uD83E\uDD5B',
    'milky_way': '\uD83C\uDF0C',
    'minibus': '\uD83D\uDE90',
    'minidisc': '\uD83D\uDCBD',
    'mobile_phone_off': '\uD83D\uDCF4',
    'money_mouth_face': '\uD83E\uDD11',
    'money_with_wings': '\uD83D\uDCB8',
    'moneybag': '\uD83D\uDCB0',
    'monkey': '\uD83D\uDC12',
    'monkey_face': '\uD83D\uDC35',
    'monorail': '\uD83D\uDE9D',
    'moon': '\uD83C\uDF14',
    'mortar_board': '\uD83C\uDF93',
    'mosque': '\uD83D\uDD4C',
    'motor_boat': '\uD83D\uDEE5',
    'motor_scooter': '\uD83D\uDEF5',
    'motorcycle': '\uD83C\uDFCD',
    'motorway': '\uD83D\uDEE3',
    'mount_fuji': '\uD83D\uDDFB',
    'mountain': '\u26F0',
    'mountain_biking_man': '\uD83D\uDEB5',
    'mountain_biking_woman': '\uD83D\uDEB5&zwj;\u2640\uFE0F',
    'mountain_cableway': '\uD83D\uDEA0',
    'mountain_railway': '\uD83D\uDE9E',
    'mountain_snow': '\uD83C\uDFD4',
    'mouse': '\uD83D\uDC2D',
    'mouse2': '\uD83D\uDC01',
    'movie_camera': '\uD83C\uDFA5',
    'moyai': '\uD83D\uDDFF',
    'mrs_claus': '\uD83E\uDD36',
    'muscle': '\uD83D\uDCAA',
    'mushroom': '\uD83C\uDF44',
    'musical_keyboard': '\uD83C\uDFB9',
    'musical_note': '\uD83C\uDFB5',
    'musical_score': '\uD83C\uDFBC',
    'mute': '\uD83D\uDD07',
    'nail_care': '\uD83D\uDC85',
    'name_badge': '\uD83D\uDCDB',
    'national_park': '\uD83C\uDFDE',
    'nauseated_face': '\uD83E\uDD22',
    'necktie': '\uD83D\uDC54',
    'negative_squared_cross_mark': '\u274E',
    'nerd_face': '\uD83E\uDD13',
    'neutral_face': '\uD83D\uDE10',
    'new': '\uD83C\uDD95',
    'new_moon': '\uD83C\uDF11',
    'new_moon_with_face': '\uD83C\uDF1A',
    'newspaper': '\uD83D\uDCF0',
    'newspaper_roll': '\uD83D\uDDDE',
    'next_track_button': '\u23ED',
    'ng': '\uD83C\uDD96',
    'no_good_man': '\uD83D\uDE45&zwj;\u2642\uFE0F',
    'no_good_woman': '\uD83D\uDE45',
    'night_with_stars': '\uD83C\uDF03',
    'no_bell': '\uD83D\uDD15',
    'no_bicycles': '\uD83D\uDEB3',
    'no_entry': '\u26D4\uFE0F',
    'no_entry_sign': '\uD83D\uDEAB',
    'no_mobile_phones': '\uD83D\uDCF5',
    'no_mouth': '\uD83D\uDE36',
    'no_pedestrians': '\uD83D\uDEB7',
    'no_smoking': '\uD83D\uDEAD',
    'non-potable_water': '\uD83D\uDEB1',
    'nose': '\uD83D\uDC43',
    'notebook': '\uD83D\uDCD3',
    'notebook_with_decorative_cover': '\uD83D\uDCD4',
    'notes': '\uD83C\uDFB6',
    'nut_and_bolt': '\uD83D\uDD29',
    'o': '\u2B55\uFE0F',
    'o2': '\uD83C\uDD7E\uFE0F',
    'ocean': '\uD83C\uDF0A',
    'octopus': '\uD83D\uDC19',
    'oden': '\uD83C\uDF62',
    'office': '\uD83C\uDFE2',
    'oil_drum': '\uD83D\uDEE2',
    'ok': '\uD83C\uDD97',
    'ok_hand': '\uD83D\uDC4C',
    'ok_man': '\uD83D\uDE46&zwj;\u2642\uFE0F',
    'ok_woman': '\uD83D\uDE46',
    'old_key': '\uD83D\uDDDD',
    'older_man': '\uD83D\uDC74',
    'older_woman': '\uD83D\uDC75',
    'om': '\uD83D\uDD49',
    'on': '\uD83D\uDD1B',
    'oncoming_automobile': '\uD83D\uDE98',
    'oncoming_bus': '\uD83D\uDE8D',
    'oncoming_police_car': '\uD83D\uDE94',
    'oncoming_taxi': '\uD83D\uDE96',
    'open_file_folder': '\uD83D\uDCC2',
    'open_hands': '\uD83D\uDC50',
    'open_mouth': '\uD83D\uDE2E',
    'open_umbrella': '\u2602\uFE0F',
    'ophiuchus': '\u26CE',
    'orange_book': '\uD83D\uDCD9',
    'orthodox_cross': '\u2626\uFE0F',
    'outbox_tray': '\uD83D\uDCE4',
    'owl': '\uD83E\uDD89',
    'ox': '\uD83D\uDC02',
    'package': '\uD83D\uDCE6',
    'page_facing_up': '\uD83D\uDCC4',
    'page_with_curl': '\uD83D\uDCC3',
    'pager': '\uD83D\uDCDF',
    'paintbrush': '\uD83D\uDD8C',
    'palm_tree': '\uD83C\uDF34',
    'pancakes': '\uD83E\uDD5E',
    'panda_face': '\uD83D\uDC3C',
    'paperclip': '\uD83D\uDCCE',
    'paperclips': '\uD83D\uDD87',
    'parasol_on_ground': '\u26F1',
    'parking': '\uD83C\uDD7F\uFE0F',
    'part_alternation_mark': '\u303D\uFE0F',
    'partly_sunny': '\u26C5\uFE0F',
    'passenger_ship': '\uD83D\uDEF3',
    'passport_control': '\uD83D\uDEC2',
    'pause_button': '\u23F8',
    'peace_symbol': '\u262E\uFE0F',
    'peach': '\uD83C\uDF51',
    'peanuts': '\uD83E\uDD5C',
    'pear': '\uD83C\uDF50',
    'pen': '\uD83D\uDD8A',
    'pencil2': '\u270F\uFE0F',
    'penguin': '\uD83D\uDC27',
    'pensive': '\uD83D\uDE14',
    'performing_arts': '\uD83C\uDFAD',
    'persevere': '\uD83D\uDE23',
    'person_fencing': '\uD83E\uDD3A',
    'pouting_woman': '\uD83D\uDE4E',
    'phone': '\u260E\uFE0F',
    'pick': '\u26CF',
    'pig': '\uD83D\uDC37',
    'pig2': '\uD83D\uDC16',
    'pig_nose': '\uD83D\uDC3D',
    'pill': '\uD83D\uDC8A',
    'pineapple': '\uD83C\uDF4D',
    'ping_pong': '\uD83C\uDFD3',
    'pisces': '\u2653\uFE0F',
    'pizza': '\uD83C\uDF55',
    'place_of_worship': '\uD83D\uDED0',
    'plate_with_cutlery': '\uD83C\uDF7D',
    'play_or_pause_button': '\u23EF',
    'point_down': '\uD83D\uDC47',
    'point_left': '\uD83D\uDC48',
    'point_right': '\uD83D\uDC49',
    'point_up': '\u261D\uFE0F',
    'point_up_2': '\uD83D\uDC46',
    'police_car': '\uD83D\uDE93',
    'policewoman': '\uD83D\uDC6E&zwj;\u2640\uFE0F',
    'poodle': '\uD83D\uDC29',
    'popcorn': '\uD83C\uDF7F',
    'post_office': '\uD83C\uDFE3',
    'postal_horn': '\uD83D\uDCEF',
    'postbox': '\uD83D\uDCEE',
    'potable_water': '\uD83D\uDEB0',
    'potato': '\uD83E\uDD54',
    'pouch': '\uD83D\uDC5D',
    'poultry_leg': '\uD83C\uDF57',
    'pound': '\uD83D\uDCB7',
    'rage': '\uD83D\uDE21',
    'pouting_cat': '\uD83D\uDE3E',
    'pouting_man': '\uD83D\uDE4E&zwj;\u2642\uFE0F',
    'pray': '\uD83D\uDE4F',
    'prayer_beads': '\uD83D\uDCFF',
    'pregnant_woman': '\uD83E\uDD30',
    'previous_track_button': '\u23EE',
    'prince': '\uD83E\uDD34',
    'princess': '\uD83D\uDC78',
    'printer': '\uD83D\uDDA8',
    'purple_heart': '\uD83D\uDC9C',
    'purse': '\uD83D\uDC5B',
    'pushpin': '\uD83D\uDCCC',
    'put_litter_in_its_place': '\uD83D\uDEAE',
    'question': '\u2753',
    'rabbit': '\uD83D\uDC30',
    'rabbit2': '\uD83D\uDC07',
    'racehorse': '\uD83D\uDC0E',
    'racing_car': '\uD83C\uDFCE',
    'radio': '\uD83D\uDCFB',
    'radio_button': '\uD83D\uDD18',
    'radioactive': '\u2622\uFE0F',
    'railway_car': '\uD83D\uDE83',
    'railway_track': '\uD83D\uDEE4',
    'rainbow': '\uD83C\uDF08',
    'rainbow_flag': '\uD83C\uDFF3\uFE0F&zwj;\uD83C\uDF08',
    'raised_back_of_hand': '\uD83E\uDD1A',
    'raised_hand_with_fingers_splayed': '\uD83D\uDD90',
    'raised_hands': '\uD83D\uDE4C',
    'raising_hand_woman': '\uD83D\uDE4B',
    'raising_hand_man': '\uD83D\uDE4B&zwj;\u2642\uFE0F',
    'ram': '\uD83D\uDC0F',
    'ramen': '\uD83C\uDF5C',
    'rat': '\uD83D\uDC00',
    'record_button': '\u23FA',
    'recycle': '\u267B\uFE0F',
    'red_circle': '\uD83D\uDD34',
    'registered': '\xAE\uFE0F',
    'relaxed': '\u263A\uFE0F',
    'relieved': '\uD83D\uDE0C',
    'reminder_ribbon': '\uD83C\uDF97',
    'repeat': '\uD83D\uDD01',
    'repeat_one': '\uD83D\uDD02',
    'rescue_worker_helmet': '\u26D1',
    'restroom': '\uD83D\uDEBB',
    'revolving_hearts': '\uD83D\uDC9E',
    'rewind': '\u23EA',
    'rhinoceros': '\uD83E\uDD8F',
    'ribbon': '\uD83C\uDF80',
    'rice': '\uD83C\uDF5A',
    'rice_ball': '\uD83C\uDF59',
    'rice_cracker': '\uD83C\uDF58',
    'rice_scene': '\uD83C\uDF91',
    'right_anger_bubble': '\uD83D\uDDEF',
    'ring': '\uD83D\uDC8D',
    'robot': '\uD83E\uDD16',
    'rocket': '\uD83D\uDE80',
    'rofl': '\uD83E\uDD23',
    'roll_eyes': '\uD83D\uDE44',
    'roller_coaster': '\uD83C\uDFA2',
    'rooster': '\uD83D\uDC13',
    'rose': '\uD83C\uDF39',
    'rosette': '\uD83C\uDFF5',
    'rotating_light': '\uD83D\uDEA8',
    'round_pushpin': '\uD83D\uDCCD',
    'rowing_man': '\uD83D\uDEA3',
    'rowing_woman': '\uD83D\uDEA3&zwj;\u2640\uFE0F',
    'rugby_football': '\uD83C\uDFC9',
    'running_man': '\uD83C\uDFC3',
    'running_shirt_with_sash': '\uD83C\uDFBD',
    'running_woman': '\uD83C\uDFC3&zwj;\u2640\uFE0F',
    'sa': '\uD83C\uDE02\uFE0F',
    'sagittarius': '\u2650\uFE0F',
    'sake': '\uD83C\uDF76',
    'sandal': '\uD83D\uDC61',
    'santa': '\uD83C\uDF85',
    'satellite': '\uD83D\uDCE1',
    'saxophone': '\uD83C\uDFB7',
    'school': '\uD83C\uDFEB',
    'school_satchel': '\uD83C\uDF92',
    'scissors': '\u2702\uFE0F',
    'scorpion': '\uD83E\uDD82',
    'scorpius': '\u264F\uFE0F',
    'scream': '\uD83D\uDE31',
    'scream_cat': '\uD83D\uDE40',
    'scroll': '\uD83D\uDCDC',
    'seat': '\uD83D\uDCBA',
    'secret': '\u3299\uFE0F',
    'see_no_evil': '\uD83D\uDE48',
    'seedling': '\uD83C\uDF31',
    'selfie': '\uD83E\uDD33',
    'shallow_pan_of_food': '\uD83E\uDD58',
    'shamrock': '\u2618\uFE0F',
    'shark': '\uD83E\uDD88',
    'shaved_ice': '\uD83C\uDF67',
    'sheep': '\uD83D\uDC11',
    'shell': '\uD83D\uDC1A',
    'shield': '\uD83D\uDEE1',
    'shinto_shrine': '\u26E9',
    'ship': '\uD83D\uDEA2',
    'shirt': '\uD83D\uDC55',
    'shopping': '\uD83D\uDECD',
    'shopping_cart': '\uD83D\uDED2',
    'shower': '\uD83D\uDEBF',
    'shrimp': '\uD83E\uDD90',
    'signal_strength': '\uD83D\uDCF6',
    'six_pointed_star': '\uD83D\uDD2F',
    'ski': '\uD83C\uDFBF',
    'skier': '\u26F7',
    'skull': '\uD83D\uDC80',
    'skull_and_crossbones': '\u2620\uFE0F',
    'sleeping': '\uD83D\uDE34',
    'sleeping_bed': '\uD83D\uDECC',
    'sleepy': '\uD83D\uDE2A',
    'slightly_frowning_face': '\uD83D\uDE41',
    'slightly_smiling_face': '\uD83D\uDE42',
    'slot_machine': '\uD83C\uDFB0',
    'small_airplane': '\uD83D\uDEE9',
    'small_blue_diamond': '\uD83D\uDD39',
    'small_orange_diamond': '\uD83D\uDD38',
    'small_red_triangle': '\uD83D\uDD3A',
    'small_red_triangle_down': '\uD83D\uDD3B',
    'smile': '\uD83D\uDE04',
    'smile_cat': '\uD83D\uDE38',
    'smiley': '\uD83D\uDE03',
    'smiley_cat': '\uD83D\uDE3A',
    'smiling_imp': '\uD83D\uDE08',
    'smirk': '\uD83D\uDE0F',
    'smirk_cat': '\uD83D\uDE3C',
    'smoking': '\uD83D\uDEAC',
    'snail': '\uD83D\uDC0C',
    'snake': '\uD83D\uDC0D',
    'sneezing_face': '\uD83E\uDD27',
    'snowboarder': '\uD83C\uDFC2',
    'snowflake': '\u2744\uFE0F',
    'snowman': '\u26C4\uFE0F',
    'snowman_with_snow': '\u2603\uFE0F',
    'sob': '\uD83D\uDE2D',
    'soccer': '\u26BD\uFE0F',
    'soon': '\uD83D\uDD1C',
    'sos': '\uD83C\uDD98',
    'sound': '\uD83D\uDD09',
    'space_invader': '\uD83D\uDC7E',
    'spades': '\u2660\uFE0F',
    'spaghetti': '\uD83C\uDF5D',
    'sparkle': '\u2747\uFE0F',
    'sparkler': '\uD83C\uDF87',
    'sparkles': '\u2728',
    'sparkling_heart': '\uD83D\uDC96',
    'speak_no_evil': '\uD83D\uDE4A',
    'speaker': '\uD83D\uDD08',
    'speaking_head': '\uD83D\uDDE3',
    'speech_balloon': '\uD83D\uDCAC',
    'speedboat': '\uD83D\uDEA4',
    'spider': '\uD83D\uDD77',
    'spider_web': '\uD83D\uDD78',
    'spiral_calendar': '\uD83D\uDDD3',
    'spiral_notepad': '\uD83D\uDDD2',
    'spoon': '\uD83E\uDD44',
    'squid': '\uD83E\uDD91',
    'stadium': '\uD83C\uDFDF',
    'star': '\u2B50\uFE0F',
    'star2': '\uD83C\uDF1F',
    'star_and_crescent': '\u262A\uFE0F',
    'star_of_david': '\u2721\uFE0F',
    'stars': '\uD83C\uDF20',
    'station': '\uD83D\uDE89',
    'statue_of_liberty': '\uD83D\uDDFD',
    'steam_locomotive': '\uD83D\uDE82',
    'stew': '\uD83C\uDF72',
    'stop_button': '\u23F9',
    'stop_sign': '\uD83D\uDED1',
    'stopwatch': '\u23F1',
    'straight_ruler': '\uD83D\uDCCF',
    'strawberry': '\uD83C\uDF53',
    'stuck_out_tongue': '\uD83D\uDE1B',
    'stuck_out_tongue_closed_eyes': '\uD83D\uDE1D',
    'stuck_out_tongue_winking_eye': '\uD83D\uDE1C',
    'studio_microphone': '\uD83C\uDF99',
    'stuffed_flatbread': '\uD83E\uDD59',
    'sun_behind_large_cloud': '\uD83C\uDF25',
    'sun_behind_rain_cloud': '\uD83C\uDF26',
    'sun_behind_small_cloud': '\uD83C\uDF24',
    'sun_with_face': '\uD83C\uDF1E',
    'sunflower': '\uD83C\uDF3B',
    'sunglasses': '\uD83D\uDE0E',
    'sunny': '\u2600\uFE0F',
    'sunrise': '\uD83C\uDF05',
    'sunrise_over_mountains': '\uD83C\uDF04',
    'surfing_man': '\uD83C\uDFC4',
    'surfing_woman': '\uD83C\uDFC4&zwj;\u2640\uFE0F',
    'sushi': '\uD83C\uDF63',
    'suspension_railway': '\uD83D\uDE9F',
    'sweat': '\uD83D\uDE13',
    'sweat_drops': '\uD83D\uDCA6',
    'sweat_smile': '\uD83D\uDE05',
    'sweet_potato': '\uD83C\uDF60',
    'swimming_man': '\uD83C\uDFCA',
    'swimming_woman': '\uD83C\uDFCA&zwj;\u2640\uFE0F',
    'symbols': '\uD83D\uDD23',
    'synagogue': '\uD83D\uDD4D',
    'syringe': '\uD83D\uDC89',
    'taco': '\uD83C\uDF2E',
    'tada': '\uD83C\uDF89',
    'tanabata_tree': '\uD83C\uDF8B',
    'taurus': '\u2649\uFE0F',
    'taxi': '\uD83D\uDE95',
    'tea': '\uD83C\uDF75',
    'telephone_receiver': '\uD83D\uDCDE',
    'telescope': '\uD83D\uDD2D',
    'tennis': '\uD83C\uDFBE',
    'tent': '\u26FA\uFE0F',
    'thermometer': '\uD83C\uDF21',
    'thinking': '\uD83E\uDD14',
    'thought_balloon': '\uD83D\uDCAD',
    'ticket': '\uD83C\uDFAB',
    'tickets': '\uD83C\uDF9F',
    'tiger': '\uD83D\uDC2F',
    'tiger2': '\uD83D\uDC05',
    'timer_clock': '\u23F2',
    'tipping_hand_man': '\uD83D\uDC81&zwj;\u2642\uFE0F',
    'tired_face': '\uD83D\uDE2B',
    'tm': '\u2122\uFE0F',
    'toilet': '\uD83D\uDEBD',
    'tokyo_tower': '\uD83D\uDDFC',
    'tomato': '\uD83C\uDF45',
    'tongue': '\uD83D\uDC45',
    'top': '\uD83D\uDD1D',
    'tophat': '\uD83C\uDFA9',
    'tornado': '\uD83C\uDF2A',
    'trackball': '\uD83D\uDDB2',
    'tractor': '\uD83D\uDE9C',
    'traffic_light': '\uD83D\uDEA5',
    'train': '\uD83D\uDE8B',
    'train2': '\uD83D\uDE86',
    'tram': '\uD83D\uDE8A',
    'triangular_flag_on_post': '\uD83D\uDEA9',
    'triangular_ruler': '\uD83D\uDCD0',
    'trident': '\uD83D\uDD31',
    'triumph': '\uD83D\uDE24',
    'trolleybus': '\uD83D\uDE8E',
    'trophy': '\uD83C\uDFC6',
    'tropical_drink': '\uD83C\uDF79',
    'tropical_fish': '\uD83D\uDC20',
    'truck': '\uD83D\uDE9A',
    'trumpet': '\uD83C\uDFBA',
    'tulip': '\uD83C\uDF37',
    'tumbler_glass': '\uD83E\uDD43',
    'turkey': '\uD83E\uDD83',
    'turtle': '\uD83D\uDC22',
    'tv': '\uD83D\uDCFA',
    'twisted_rightwards_arrows': '\uD83D\uDD00',
    'two_hearts': '\uD83D\uDC95',
    'two_men_holding_hands': '\uD83D\uDC6C',
    'two_women_holding_hands': '\uD83D\uDC6D',
    'u5272': '\uD83C\uDE39',
    'u5408': '\uD83C\uDE34',
    'u55b6': '\uD83C\uDE3A',
    'u6307': '\uD83C\uDE2F\uFE0F',
    'u6708': '\uD83C\uDE37\uFE0F',
    'u6709': '\uD83C\uDE36',
    'u6e80': '\uD83C\uDE35',
    'u7121': '\uD83C\uDE1A\uFE0F',
    'u7533': '\uD83C\uDE38',
    'u7981': '\uD83C\uDE32',
    'u7a7a': '\uD83C\uDE33',
    'umbrella': '\u2614\uFE0F',
    'unamused': '\uD83D\uDE12',
    'underage': '\uD83D\uDD1E',
    'unicorn': '\uD83E\uDD84',
    'unlock': '\uD83D\uDD13',
    'up': '\uD83C\uDD99',
    'upside_down_face': '\uD83D\uDE43',
    'v': '\u270C\uFE0F',
    'vertical_traffic_light': '\uD83D\uDEA6',
    'vhs': '\uD83D\uDCFC',
    'vibration_mode': '\uD83D\uDCF3',
    'video_camera': '\uD83D\uDCF9',
    'video_game': '\uD83C\uDFAE',
    'violin': '\uD83C\uDFBB',
    'virgo': '\u264D\uFE0F',
    'volcano': '\uD83C\uDF0B',
    'volleyball': '\uD83C\uDFD0',
    'vs': '\uD83C\uDD9A',
    'vulcan_salute': '\uD83D\uDD96',
    'walking_man': '\uD83D\uDEB6',
    'walking_woman': '\uD83D\uDEB6&zwj;\u2640\uFE0F',
    'waning_crescent_moon': '\uD83C\uDF18',
    'waning_gibbous_moon': '\uD83C\uDF16',
    'warning': '\u26A0\uFE0F',
    'wastebasket': '\uD83D\uDDD1',
    'watch': '\u231A\uFE0F',
    'water_buffalo': '\uD83D\uDC03',
    'watermelon': '\uD83C\uDF49',
    'wave': '\uD83D\uDC4B',
    'wavy_dash': '\u3030\uFE0F',
    'waxing_crescent_moon': '\uD83C\uDF12',
    'wc': '\uD83D\uDEBE',
    'weary': '\uD83D\uDE29',
    'wedding': '\uD83D\uDC92',
    'weight_lifting_man': '\uD83C\uDFCB\uFE0F',
    'weight_lifting_woman': '\uD83C\uDFCB\uFE0F&zwj;\u2640\uFE0F',
    'whale': '\uD83D\uDC33',
    'whale2': '\uD83D\uDC0B',
    'wheel_of_dharma': '\u2638\uFE0F',
    'wheelchair': '\u267F\uFE0F',
    'white_check_mark': '\u2705',
    'white_circle': '\u26AA\uFE0F',
    'white_flag': '\uD83C\uDFF3\uFE0F',
    'white_flower': '\uD83D\uDCAE',
    'white_large_square': '\u2B1C\uFE0F',
    'white_medium_small_square': '\u25FD\uFE0F',
    'white_medium_square': '\u25FB\uFE0F',
    'white_small_square': '\u25AB\uFE0F',
    'white_square_button': '\uD83D\uDD33',
    'wilted_flower': '\uD83E\uDD40',
    'wind_chime': '\uD83C\uDF90',
    'wind_face': '\uD83C\uDF2C',
    'wine_glass': '\uD83C\uDF77',
    'wink': '\uD83D\uDE09',
    'wolf': '\uD83D\uDC3A',
    'woman': '\uD83D\uDC69',
    'woman_artist': '\uD83D\uDC69&zwj;\uD83C\uDFA8',
    'woman_astronaut': '\uD83D\uDC69&zwj;\uD83D\uDE80',
    'woman_cartwheeling': '\uD83E\uDD38&zwj;\u2640\uFE0F',
    'woman_cook': '\uD83D\uDC69&zwj;\uD83C\uDF73',
    'woman_facepalming': '\uD83E\uDD26&zwj;\u2640\uFE0F',
    'woman_factory_worker': '\uD83D\uDC69&zwj;\uD83C\uDFED',
    'woman_farmer': '\uD83D\uDC69&zwj;\uD83C\uDF3E',
    'woman_firefighter': '\uD83D\uDC69&zwj;\uD83D\uDE92',
    'woman_health_worker': '\uD83D\uDC69&zwj;\u2695\uFE0F',
    'woman_judge': '\uD83D\uDC69&zwj;\u2696\uFE0F',
    'woman_juggling': '\uD83E\uDD39&zwj;\u2640\uFE0F',
    'woman_mechanic': '\uD83D\uDC69&zwj;\uD83D\uDD27',
    'woman_office_worker': '\uD83D\uDC69&zwj;\uD83D\uDCBC',
    'woman_pilot': '\uD83D\uDC69&zwj;\u2708\uFE0F',
    'woman_playing_handball': '\uD83E\uDD3E&zwj;\u2640\uFE0F',
    'woman_playing_water_polo': '\uD83E\uDD3D&zwj;\u2640\uFE0F',
    'woman_scientist': '\uD83D\uDC69&zwj;\uD83D\uDD2C',
    'woman_shrugging': '\uD83E\uDD37&zwj;\u2640\uFE0F',
    'woman_singer': '\uD83D\uDC69&zwj;\uD83C\uDFA4',
    'woman_student': '\uD83D\uDC69&zwj;\uD83C\uDF93',
    'woman_teacher': '\uD83D\uDC69&zwj;\uD83C\uDFEB',
    'woman_technologist': '\uD83D\uDC69&zwj;\uD83D\uDCBB',
    'woman_with_turban': '\uD83D\uDC73&zwj;\u2640\uFE0F',
    'womans_clothes': '\uD83D\uDC5A',
    'womans_hat': '\uD83D\uDC52',
    'women_wrestling': '\uD83E\uDD3C&zwj;\u2640\uFE0F',
    'womens': '\uD83D\uDEBA',
    'world_map': '\uD83D\uDDFA',
    'worried': '\uD83D\uDE1F',
    'wrench': '\uD83D\uDD27',
    'writing_hand': '\u270D\uFE0F',
    'x': '\u274C',
    'yellow_heart': '\uD83D\uDC9B',
    'yen': '\uD83D\uDCB4',
    'yin_yang': '\u262F\uFE0F',
    'yum': '\uD83D\uDE0B',
    'zap': '\u26A1\uFE0F',
    'zipper_mouth_face': '\uD83E\uDD10',
    'zzz': '\uD83D\uDCA4',

    /* special emojis :P */
    'octocat': '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
    'showdown': '<span style="font-family: \'Anonymous Pro\', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>'
  };

  /**
   * Created by Estevao on 31-05-2015.
   */

  /**
   * Showdown Converter class
   * @class
   * @param {object} [converterOptions]
   * @returns {Converter}
   */
  showdown.Converter = function (converterOptions) {
    'use strict';

    var
    /**
     * Options used by this converter
     * @private
     * @type {{}}
     */
    options = {},


    /**
     * Language extensions used by this converter
     * @private
     * @type {Array}
     */
    langExtensions = [],


    /**
     * Output modifiers extensions used by this converter
     * @private
     * @type {Array}
     */
    outputModifiers = [],


    /**
     * Event listeners
     * @private
     * @type {{}}
     */
    listeners = {},


    /**
     * The flavor set in this converter
     */
    setConvFlavor = setFlavor,


    /**
     * Metadata of the document
     * @type {{parsed: {}, raw: string, format: string}}
     */
    metadata = {
      parsed: {},
      raw: '',
      format: ''
    };

    _constructor();

    /**
     * Converter constructor
     * @private
     */
    function _constructor() {
      converterOptions = converterOptions || {};

      for (var gOpt in globalOptions) {
        if (globalOptions.hasOwnProperty(gOpt)) {
          options[gOpt] = globalOptions[gOpt];
        }
      }

      // Merge options
      if (typeof converterOptions === 'object') {
        for (var opt in converterOptions) {
          if (converterOptions.hasOwnProperty(opt)) {
            options[opt] = converterOptions[opt];
          }
        }
      } else {
        throw Error('Converter expects the passed parameter to be an object, but ' + typeof converterOptions + ' was passed instead.');
      }

      if (options.extensions) {
        showdown.helper.forEach(options.extensions, _parseExtension);
      }
    }

    /**
     * Parse extension
     * @param {*} ext
     * @param {string} [name='']
     * @private
     */
    function _parseExtension(ext, name) {

      name = name || null;
      // If it's a string, the extension was previously loaded
      if (showdown.helper.isString(ext)) {
        ext = showdown.helper.stdExtName(ext);
        name = ext;

        // LEGACY_SUPPORT CODE
        if (showdown.extensions[ext]) {
          console.warn('DEPRECATION WARNING: ' + ext + ' is an old extension that uses a deprecated loading method.' + 'Please inform the developer that the extension should be updated!');
          legacyExtensionLoading(showdown.extensions[ext], ext);
          return;
          // END LEGACY SUPPORT CODE
        } else if (!showdown.helper.isUndefined(extensions[ext])) {
          ext = extensions[ext];
        } else {
          throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
        }
      }

      if (typeof ext === 'function') {
        ext = ext();
      }

      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }

      var validExt = validate(ext, name);
      if (!validExt.valid) {
        throw Error(validExt.error);
      }

      for (var i = 0; i < ext.length; ++i) {
        switch (ext[i].type) {

          case 'lang':
            langExtensions.push(ext[i]);
            break;

          case 'output':
            outputModifiers.push(ext[i]);
            break;
        }
        if (ext[i].hasOwnProperty('listeners')) {
          for (var ln in ext[i].listeners) {
            if (ext[i].listeners.hasOwnProperty(ln)) {
              listen(ln, ext[i].listeners[ln]);
            }
          }
        }
      }
    }

    /**
     * LEGACY_SUPPORT
     * @param {*} ext
     * @param {string} name
     */
    function legacyExtensionLoading(ext, name) {
      if (typeof ext === 'function') {
        ext = ext(new showdown.Converter());
      }
      if (!showdown.helper.isArray(ext)) {
        ext = [ext];
      }
      var valid = validate(ext, name);

      if (!valid.valid) {
        throw Error(valid.error);
      }

      for (var i = 0; i < ext.length; ++i) {
        switch (ext[i].type) {
          case 'lang':
            langExtensions.push(ext[i]);
            break;
          case 'output':
            outputModifiers.push(ext[i]);
            break;
          default:
            // should never reach here
            throw Error('Extension loader error: Type unrecognized!!!');
        }
      }
    }

    /**
     * Listen to an event
     * @param {string} name
     * @param {function} callback
     */
    function listen(name, callback) {
      if (!showdown.helper.isString(name)) {
        throw Error('Invalid argument in converter.listen() method: name must be a string, but ' + typeof name + ' given');
      }

      if (typeof callback !== 'function') {
        throw Error('Invalid argument in converter.listen() method: callback must be a function, but ' + typeof callback + ' given');
      }

      if (!listeners.hasOwnProperty(name)) {
        listeners[name] = [];
      }
      listeners[name].push(callback);
    }

    function rTrimInputText(text) {
      var rsp = text.match(/^\s*/)[0].length,
          rgx = new RegExp('^\\s{0,' + rsp + '}', 'gm');
      return text.replace(rgx, '');
    }

    /**
     * Dispatch an event
     * @private
     * @param {string} evtName Event name
     * @param {string} text Text
     * @param {{}} options Converter Options
     * @param {{}} globals
     * @returns {string}
     */
    this._dispatch = function dispatch(evtName, text, options, globals) {
      if (listeners.hasOwnProperty(evtName)) {
        for (var ei = 0; ei < listeners[evtName].length; ++ei) {
          var nText = listeners[evtName][ei](evtName, text, this, options, globals);
          if (nText && typeof nText !== 'undefined') {
            text = nText;
          }
        }
      }
      return text;
    };

    /**
     * Listen to an event
     * @param {string} name
     * @param {function} callback
     * @returns {showdown.Converter}
     */
    this.listen = function (name, callback) {
      listen(name, callback);
      return this;
    };

    /**
     * Converts a markdown string into HTML
     * @param {string} text
     * @returns {*}
     */
    this.makeHtml = function (text) {
      //check if text is not falsy
      if (!text) {
        return text;
      }

      var globals = {
        gHtmlBlocks: [],
        gHtmlMdBlocks: [],
        gHtmlSpans: [],
        gUrls: {},
        gTitles: {},
        gDimensions: {},
        gListLevel: 0,
        hashLinkCounts: {},
        langExtensions: langExtensions,
        outputModifiers: outputModifiers,
        converter: this,
        ghCodeBlocks: [],
        metadata: {
          parsed: {},
          raw: '',
          format: ''
        }
      };

      // This lets us use ¨ trema as an escape char to avoid md5 hashes
      // The choice of character is arbitrary; anything that isn't
      // magic in Markdown will work.
      text = text.replace(/¨/g, '¨T');

      // Replace $ with ¨D
      // RegExp interprets $ as a special character
      // when it's in a replacement string
      text = text.replace(/\$/g, '¨D');

      // Standardize line endings
      text = text.replace(/\r\n/g, '\n'); // DOS to Unix
      text = text.replace(/\r/g, '\n'); // Mac to Unix

      // Stardardize line spaces
      text = text.replace(/\u00A0/g, '&nbsp;');

      if (options.smartIndentationFix) {
        text = rTrimInputText(text);
      }

      // Make sure text begins and ends with a couple of newlines:
      text = '\n\n' + text + '\n\n';

      // detab
      text = showdown.subParser('detab')(text, options, globals);

      /**
       * Strip any lines consisting only of spaces and tabs.
       * This makes subsequent regexs easier to write, because we can
       * match consecutive blank lines with /\n+/ instead of something
       * contorted like /[ \t]*\n+/
       */
      text = text.replace(/^[ \t]+$/mg, '');

      //run languageExtensions
      showdown.helper.forEach(langExtensions, function (ext) {
        text = showdown.subParser('runExtension')(ext, text, options, globals);
      });

      // run the sub parsers
      text = showdown.subParser('metadata')(text, options, globals);
      text = showdown.subParser('hashPreCodeTags')(text, options, globals);
      text = showdown.subParser('githubCodeBlocks')(text, options, globals);
      text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
      text = showdown.subParser('hashCodeTags')(text, options, globals);
      text = showdown.subParser('stripLinkDefinitions')(text, options, globals);
      text = showdown.subParser('blockGamut')(text, options, globals);
      text = showdown.subParser('unhashHTMLSpans')(text, options, globals);
      text = showdown.subParser('unescapeSpecialChars')(text, options, globals);

      // attacklab: Restore dollar signs
      text = text.replace(/¨D/g, '$$');

      // attacklab: Restore tremas
      text = text.replace(/¨T/g, '¨');

      // render a complete html document instead of a partial if the option is enabled
      text = showdown.subParser('completeHTMLDocument')(text, options, globals);

      // Run output modifiers
      showdown.helper.forEach(outputModifiers, function (ext) {
        text = showdown.subParser('runExtension')(ext, text, options, globals);
      });

      // update metadata
      metadata = globals.metadata;
      return text;
    };

    /**
     * Converts an HTML string into a markdown string
     * @param src
     * @param [HTMLParser] A WHATWG DOM and HTML parser, such as JSDOM. If none is supplied, window.document will be used.
     * @returns {string}
     */
    this.makeMarkdown = this.makeMd = function (src, HTMLParser) {

      // replace \r\n with \n
      src = src.replace(/\r\n/g, '\n');
      src = src.replace(/\r/g, '\n'); // old macs

      // due to an edge case, we need to find this: > <
      // to prevent removing of non silent white spaces
      // ex: <em>this is</em> <strong>sparta</strong>
      src = src.replace(/>[ \t]+</, '>¨NBSP;<');

      if (!HTMLParser) {
        if (window && window.document) {
          HTMLParser = window.document;
        } else {
          throw new Error('HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM');
        }
      }

      var doc = HTMLParser.createElement('div');
      doc.innerHTML = src;

      var globals = {
        preList: substitutePreCodeTags(doc)
      };

      // remove all newlines and collapse spaces
      clean(doc);

      // some stuff, like accidental reference links must now be escaped
      // TODO
      // doc.innerHTML = doc.innerHTML.replace(/\[[\S\t ]]/);

      var nodes = doc.childNodes,
          mdDoc = '';

      for (var i = 0; i < nodes.length; i++) {
        mdDoc += showdown.subParser('makeMarkdown.node')(nodes[i], globals);
      }

      function clean(node) {
        for (var n = 0; n < node.childNodes.length; ++n) {
          var child = node.childNodes[n];
          if (child.nodeType === 3) {
            if (!/\S/.test(child.nodeValue)) {
              node.removeChild(child);
              --n;
            } else {
              child.nodeValue = child.nodeValue.split('\n').join(' ');
              child.nodeValue = child.nodeValue.replace(/(\s)+/g, '$1');
            }
          } else if (child.nodeType === 1) {
            clean(child);
          }
        }
      }

      // find all pre tags and replace contents with placeholder
      // we need this so that we can remove all indentation from html
      // to ease up parsing
      function substitutePreCodeTags(doc) {

        var pres = doc.querySelectorAll('pre'),
            presPH = [];

        for (var i = 0; i < pres.length; ++i) {

          if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === 'code') {
            var content = pres[i].firstChild.innerHTML.trim(),
                language = pres[i].firstChild.getAttribute('data-language') || '';

            // if data-language attribute is not defined, then we look for class language-*
            if (language === '') {
              var classes = pres[i].firstChild.className.split(' ');
              for (var c = 0; c < classes.length; ++c) {
                var matches = classes[c].match(/^language-(.+)$/);
                if (matches !== null) {
                  language = matches[1];
                  break;
                }
              }
            }

            // unescape html entities in content
            content = showdown.helper.unescapeHTMLEntities(content);

            presPH.push(content);
            pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
          } else {
            presPH.push(pres[i].innerHTML);
            pres[i].innerHTML = '';
            pres[i].setAttribute('prenum', i.toString());
          }
        }
        return presPH;
      }

      return mdDoc;
    };

    /**
     * Set an option of this Converter instance
     * @param {string} key
     * @param {*} value
     */
    this.setOption = function (key, value) {
      options[key] = value;
    };

    /**
     * Get the option of this Converter instance
     * @param {string} key
     * @returns {*}
     */
    this.getOption = function (key) {
      return options[key];
    };

    /**
     * Get the options of this Converter instance
     * @returns {{}}
     */
    this.getOptions = function () {
      return options;
    };

    /**
     * Add extension to THIS converter
     * @param {{}} extension
     * @param {string} [name=null]
     */
    this.addExtension = function (extension, name) {
      name = name || null;
      _parseExtension(extension, name);
    };

    /**
     * Use a global registered extension with THIS converter
     * @param {string} extensionName Name of the previously registered extension
     */
    this.useExtension = function (extensionName) {
      _parseExtension(extensionName);
    };

    /**
     * Set the flavor THIS converter should use
     * @param {string} name
     */
    this.setFlavor = function (name) {
      if (!flavor.hasOwnProperty(name)) {
        throw Error(name + ' flavor was not found');
      }
      var preset = flavor[name];
      setConvFlavor = name;
      for (var option in preset) {
        if (preset.hasOwnProperty(option)) {
          options[option] = preset[option];
        }
      }
    };

    /**
     * Get the currently set flavor of this converter
     * @returns {string}
     */
    this.getFlavor = function () {
      return setConvFlavor;
    };

    /**
     * Remove an extension from THIS converter.
     * Note: This is a costly operation. It's better to initialize a new converter
     * and specify the extensions you wish to use
     * @param {Array} extension
     */
    this.removeExtension = function (extension) {
      if (!showdown.helper.isArray(extension)) {
        extension = [extension];
      }
      for (var a = 0; a < extension.length; ++a) {
        var ext = extension[a];
        for (var i = 0; i < langExtensions.length; ++i) {
          if (langExtensions[i] === ext) {
            langExtensions[i].splice(i, 1);
          }
        }
        for (var ii = 0; ii < outputModifiers.length; ++i) {
          if (outputModifiers[ii] === ext) {
            outputModifiers[ii].splice(i, 1);
          }
        }
      }
    };

    /**
     * Get all extension of THIS converter
     * @returns {{language: Array, output: Array}}
     */
    this.getAllExtensions = function () {
      return {
        language: langExtensions,
        output: outputModifiers
      };
    };

    /**
     * Get the metadata of the previously parsed document
     * @param raw
     * @returns {string|{}}
     */
    this.getMetadata = function (raw) {
      if (raw) {
        return metadata.raw;
      } else {
        return metadata.parsed;
      }
    };

    /**
     * Get the metadata format of the previously parsed document
     * @returns {string}
     */
    this.getMetadataFormat = function () {
      return metadata.format;
    };

    /**
     * Private: set a single key, value metadata pair
     * @param {string} key
     * @param {string} value
     */
    this._setMetadataPair = function (key, value) {
      metadata.parsed[key] = value;
    };

    /**
     * Private: set metadata format
     * @param {string} format
     */
    this._setMetadataFormat = function (format) {
      metadata.format = format;
    };

    /**
     * Private: set metadata raw text
     * @param {string} raw
     */
    this._setMetadataRaw = function (raw) {
      metadata.raw = raw;
    };
  };

  /**
   * Turn Markdown link shortcuts into XHTML <a> tags.
   */
  showdown.subParser('anchors', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('anchors.before', text, options, globals);

    var writeAnchorTag = function writeAnchorTag(wholeMatch, linkText, linkId, url, m5, m6, title) {
      if (showdown.helper.isUndefined(title)) {
        title = '';
      }
      linkId = linkId.toLowerCase();

      // Special case for explicit empty url
      if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
        url = '';
      } else if (!url) {
        if (!linkId) {
          // lower-case and turn embedded newlines into spaces
          linkId = linkText.toLowerCase().replace(/ ?\n/g, ' ');
        }
        url = '#' + linkId;

        if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
          url = globals.gUrls[linkId];
          if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
            title = globals.gTitles[linkId];
          }
        } else {
          return wholeMatch;
        }
      }

      //url = showdown.helper.escapeCharacters(url, '*_', false); // replaced line to improve performance
      url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);

      var result = '<a href="' + url + '"';

      if (title !== '' && title !== null) {
        title = title.replace(/"/g, '&quot;');
        //title = showdown.helper.escapeCharacters(title, '*_', false); // replaced line to improve performance
        title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        result += ' title="' + title + '"';
      }

      // optionLinksInNewWindow only applies
      // to external links. Hash links (#) open in same page
      if (options.openLinksInNewWindow && !/^#/.test(url)) {
        // escaped _
        result += ' rel="noopener noreferrer" target="¨E95Eblank"';
      }

      result += '>' + linkText + '</a>';

      return result;
    };

    // First, handle reference-style links: [link text] [id]
    text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);

    // Next, inline-style links: [link text](url "optional title")
    // cases with crazy urls like ./image/cat1).png
    text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);

    // normal cases
    text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);

    // handle reference-style shortcuts: [link text]
    // These must come last in case you've also got [link test][1]
    // or [link test](/foo)
    text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);

    // Lastly handle GithubMentions if option is enabled
    if (options.ghMentions) {
      text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function (wm, st, escape, mentions, username) {
        if (escape === '\\') {
          return st + mentions;
        }

        //check if options.ghMentionsLink is a string
        if (!showdown.helper.isString(options.ghMentionsLink)) {
          throw new Error('ghMentionsLink option must be a string');
        }
        var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
            target = '';
        if (options.openLinksInNewWindow) {
          target = ' rel="noopener noreferrer" target="¨E95Eblank"';
        }
        return st + '<a href="' + lnk + '"' + target + '>' + mentions + '</a>';
      });
    }

    text = globals.converter._dispatch('anchors.after', text, options, globals);
    return text;
  });

  // url allowed chars [a-z\d_.~:/?#[]@!$&'()*+,;=-]

  var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
      simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
      delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
      simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,
      delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
      replaceLink = function replaceLink(options) {
    'use strict';

    return function (wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
      link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var lnkTxt = link,
          append = '',
          target = '',
          lmc = leadingMagicChars || '',
          tmc = trailingMagicChars || '';
      if (/^www\./i.test(link)) {
        link = link.replace(/^www\./i, 'http://www.');
      }
      if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
        append = trailingPunctuation;
      }
      if (options.openLinksInNewWindow) {
        target = ' rel="noopener noreferrer" target="¨E95Eblank"';
      }
      return lmc + '<a href="' + link + '"' + target + '>' + lnkTxt + '</a>' + append + tmc;
    };
  },
      replaceMail = function replaceMail(options, globals) {
    'use strict';

    return function (wholeMatch, b, mail) {
      var href = 'mailto:';
      b = b || '';
      mail = showdown.subParser('unescapeSpecialChars')(mail, options, globals);
      if (options.encodeEmails) {
        href = showdown.helper.encodeEmailAddress(href + mail);
        mail = showdown.helper.encodeEmailAddress(mail);
      } else {
        href = href + mail;
      }
      return b + '<a href="' + href + '">' + mail + '</a>';
    };
  };

  showdown.subParser('autoLinks', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('autoLinks.before', text, options, globals);

    text = text.replace(delimUrlRegex, replaceLink(options));
    text = text.replace(delimMailRegex, replaceMail(options, globals));

    text = globals.converter._dispatch('autoLinks.after', text, options, globals);

    return text;
  });

  showdown.subParser('simplifiedAutoLinks', function (text, options, globals) {
    'use strict';

    if (!options.simplifiedAutoLink) {
      return text;
    }

    text = globals.converter._dispatch('simplifiedAutoLinks.before', text, options, globals);

    if (options.excludeTrailingPunctuationFromURLs) {
      text = text.replace(simpleURLRegex2, replaceLink(options));
    } else {
      text = text.replace(simpleURLRegex, replaceLink(options));
    }
    text = text.replace(simpleMailRegex, replaceMail(options, globals));

    text = globals.converter._dispatch('simplifiedAutoLinks.after', text, options, globals);

    return text;
  });

  /**
   * These are all the transformations that form block-level
   * tags like paragraphs, headers, and list items.
   */
  showdown.subParser('blockGamut', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('blockGamut.before', text, options, globals);

    // we parse blockquotes first so that we can have headings and hrs
    // inside blockquotes
    text = showdown.subParser('blockQuotes')(text, options, globals);
    text = showdown.subParser('headers')(text, options, globals);

    // Do Horizontal Rules:
    text = showdown.subParser('horizontalRule')(text, options, globals);

    text = showdown.subParser('lists')(text, options, globals);
    text = showdown.subParser('codeBlocks')(text, options, globals);
    text = showdown.subParser('tables')(text, options, globals);

    // We already ran _HashHTMLBlocks() before, in Markdown(), but that
    // was to escape raw HTML in the original Markdown source. This time,
    // we're escaping the markup we've just created, so that we don't wrap
    // <p> tags around block-level tags.
    text = showdown.subParser('hashHTMLBlocks')(text, options, globals);
    text = showdown.subParser('paragraphs')(text, options, globals);

    text = globals.converter._dispatch('blockGamut.after', text, options, globals);

    return text;
  });

  showdown.subParser('blockQuotes', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('blockQuotes.before', text, options, globals);

    // add a couple extra lines after the text and endtext mark
    text = text + '\n\n';

    var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;

    if (options.splitAdjacentBlockquotes) {
      rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
    }

    text = text.replace(rgx, function (bq) {
      // attacklab: hack around Konqueror 3.5.4 bug:
      // "----------bug".replace(/^-/g,"") == "bug"
      bq = bq.replace(/^[ \t]*>[ \t]?/gm, ''); // trim one level of quoting

      // attacklab: clean up hack
      bq = bq.replace(/¨0/g, '');

      bq = bq.replace(/^[ \t]+$/gm, ''); // trim whitespace-only lines
      bq = showdown.subParser('githubCodeBlocks')(bq, options, globals);
      bq = showdown.subParser('blockGamut')(bq, options, globals); // recurse

      bq = bq.replace(/(^|\n)/g, '$1  ');
      // These leading spaces screw with <pre> content, so we need to fix that:
      bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function (wholeMatch, m1) {
        var pre = m1;
        // attacklab: hack around Konqueror 3.5.4 bug:
        pre = pre.replace(/^  /mg, '¨0');
        pre = pre.replace(/¨0/g, '');
        return pre;
      });

      return showdown.subParser('hashBlock')('<blockquote>\n' + bq + '\n</blockquote>', options, globals);
    });

    text = globals.converter._dispatch('blockQuotes.after', text, options, globals);
    return text;
  });

  /**
   * Process Markdown `<pre><code>` blocks.
   */
  showdown.subParser('codeBlocks', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('codeBlocks.before', text, options, globals);

    // sentinel workarounds for lack of \A and \Z, safari\khtml bug
    text += '¨0';

    var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
    text = text.replace(pattern, function (wholeMatch, m1, m2) {
      var codeblock = m1,
          nextChar = m2,
          end = '\n';

      codeblock = showdown.subParser('outdent')(codeblock, options, globals);
      codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
      codeblock = showdown.subParser('detab')(codeblock, options, globals);
      codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
      codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing newlines

      if (options.omitExtraWLInCodeBlocks) {
        end = '';
      }

      codeblock = '<pre><code>' + codeblock + end + '</code></pre>';

      return showdown.subParser('hashBlock')(codeblock, options, globals) + nextChar;
    });

    // strip sentinel
    text = text.replace(/¨0/, '');

    text = globals.converter._dispatch('codeBlocks.after', text, options, globals);
    return text;
  });

  /**
   *
   *   *  Backtick quotes are used for <code></code> spans.
   *
   *   *  You can use multiple backticks as the delimiters if you want to
   *     include literal backticks in the code span. So, this input:
   *
   *         Just type ``foo `bar` baz`` at the prompt.
   *
   *       Will translate to:
   *
   *         <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
   *
   *    There's no arbitrary limit to the number of backticks you
   *    can use as delimters. If you need three consecutive backticks
   *    in your code, use four for delimiters, etc.
   *
   *  *  You can use spaces to get literal backticks at the edges:
   *
   *         ... type `` `bar` `` ...
   *
   *       Turns to:
   *
   *         ... type <code>`bar`</code> ...
   */
  showdown.subParser('codeSpans', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('codeSpans.before', text, options, globals);

    if (typeof text === 'undefined') {
      text = '';
    }
    text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function (wholeMatch, m1, m2, m3) {
      var c = m3;
      c = c.replace(/^([ \t]*)/g, ''); // leading whitespace
      c = c.replace(/[ \t]*$/g, ''); // trailing whitespace
      c = showdown.subParser('encodeCode')(c, options, globals);
      c = m1 + '<code>' + c + '</code>';
      c = showdown.subParser('hashHTMLSpans')(c, options, globals);
      return c;
    });

    text = globals.converter._dispatch('codeSpans.after', text, options, globals);
    return text;
  });

  /**
   * Create a full HTML document from the processed markdown
   */
  showdown.subParser('completeHTMLDocument', function (text, options, globals) {
    'use strict';

    if (!options.completeHTMLDocument) {
      return text;
    }

    text = globals.converter._dispatch('completeHTMLDocument.before', text, options, globals);

    var doctype = 'html',
        doctypeParsed = '<!DOCTYPE HTML>\n',
        title = '',
        charset = '<meta charset="utf-8">\n',
        lang = '',
        metadata = '';

    if (typeof globals.metadata.parsed.doctype !== 'undefined') {
      doctypeParsed = '<!DOCTYPE ' + globals.metadata.parsed.doctype + '>\n';
      doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
      if (doctype === 'html' || doctype === 'html5') {
        charset = '<meta charset="utf-8">';
      }
    }

    for (var meta in globals.metadata.parsed) {
      if (globals.metadata.parsed.hasOwnProperty(meta)) {
        switch (meta.toLowerCase()) {
          case 'doctype':
            break;

          case 'title':
            title = '<title>' + globals.metadata.parsed.title + '</title>\n';
            break;

          case 'charset':
            if (doctype === 'html' || doctype === 'html5') {
              charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
            } else {
              charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
            }
            break;

          case 'language':
          case 'lang':
            lang = ' lang="' + globals.metadata.parsed[meta] + '"';
            metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            break;

          default:
            metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
        }
      }
    }

    text = doctypeParsed + '<html' + lang + '>\n<head>\n' + title + charset + metadata + '</head>\n<body>\n' + text.trim() + '\n</body>\n</html>';

    text = globals.converter._dispatch('completeHTMLDocument.after', text, options, globals);
    return text;
  });

  /**
   * Convert all tabs to spaces
   */
  showdown.subParser('detab', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('detab.before', text, options, globals);

    // expand first n-1 tabs
    text = text.replace(/\t(?=\t)/g, '    '); // g_tab_width

    // replace the nth with two sentinels
    text = text.replace(/\t/g, '¨A¨B');

    // use the sentinel to anchor our regex so it doesn't explode
    text = text.replace(/¨B(.+?)¨A/g, function (wholeMatch, m1) {
      var leadingText = m1,
          numSpaces = 4 - leadingText.length % 4; // g_tab_width

      // there *must* be a better way to do this:
      for (var i = 0; i < numSpaces; i++) {
        leadingText += ' ';
      }

      return leadingText;
    });

    // clean up sentinels
    text = text.replace(/¨A/g, '    '); // g_tab_width
    text = text.replace(/¨B/g, '');

    text = globals.converter._dispatch('detab.after', text, options, globals);
    return text;
  });

  showdown.subParser('ellipsis', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('ellipsis.before', text, options, globals);

    text = text.replace(/\.\.\./g, '…');

    text = globals.converter._dispatch('ellipsis.after', text, options, globals);

    return text;
  });

  /**
   * Turn emoji codes into emojis
   *
   * List of supported emojis: https://github.com/showdownjs/showdown/wiki/Emojis
   */
  showdown.subParser('emoji', function (text, options, globals) {
    'use strict';

    if (!options.emoji) {
      return text;
    }

    text = globals.converter._dispatch('emoji.before', text, options, globals);

    var emojiRgx = /:([\S]+?):/g;

    text = text.replace(emojiRgx, function (wm, emojiCode) {
      if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
        return showdown.helper.emojis[emojiCode];
      }
      return wm;
    });

    text = globals.converter._dispatch('emoji.after', text, options, globals);

    return text;
  });

  /**
   * Smart processing for ampersands and angle brackets that need to be encoded.
   */
  showdown.subParser('encodeAmpsAndAngles', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('encodeAmpsAndAngles.before', text, options, globals);

    // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
    // http://bumppo.net/projects/amputator/
    text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, '&amp;');

    // Encode naked <'s
    text = text.replace(/<(?![a-z\/?$!])/gi, '&lt;');

    // Encode <
    text = text.replace(/</g, '&lt;');

    // Encode >
    text = text.replace(/>/g, '&gt;');

    text = globals.converter._dispatch('encodeAmpsAndAngles.after', text, options, globals);
    return text;
  });

  /**
   * Returns the string, with after processing the following backslash escape sequences.
   *
   * attacklab: The polite way to do this is with the new escapeCharacters() function:
   *
   *    text = escapeCharacters(text,"\\",true);
   *    text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
   *
   * ...but we're sidestepping its use of the (slow) RegExp constructor
   * as an optimization for Firefox.  This function gets called a LOT.
   */
  showdown.subParser('encodeBackslashEscapes', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('encodeBackslashEscapes.before', text, options, globals);

    text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
    text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);

    text = globals.converter._dispatch('encodeBackslashEscapes.after', text, options, globals);
    return text;
  });

  /**
   * Encode/escape certain characters inside Markdown code runs.
   * The point is that in code, these characters are literals,
   * and lose their special Markdown meanings.
   */
  showdown.subParser('encodeCode', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('encodeCode.before', text, options, globals);

    // Encode all ampersands; HTML entities are not
    // entities within a Markdown code span.
    text = text.replace(/&/g, '&amp;')
    // Do the angle bracket song and dance:
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // Now, escape characters that are magic in Markdown:
    .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);

    text = globals.converter._dispatch('encodeCode.after', text, options, globals);
    return text;
  });

  /**
   * Within tags -- meaning between < and > -- encode [\ ` * _ ~ =] so they
   * don't conflict with their use in Markdown for code, italics and strong.
   */
  showdown.subParser('escapeSpecialCharsWithinTagAttributes', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.before', text, options, globals);

    // Build a regex to find HTML tags.
    var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
        comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;

    text = text.replace(tags, function (wholeMatch) {
      return wholeMatch.replace(/(.)<\/?code>(?=.)/g, '$1`').replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
    });

    text = text.replace(comments, function (wholeMatch) {
      return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
    });

    text = globals.converter._dispatch('escapeSpecialCharsWithinTagAttributes.after', text, options, globals);
    return text;
  });

  /**
   * Handle github codeblocks prior to running HashHTML so that
   * HTML contained within the codeblock gets escaped properly
   * Example:
   * ```ruby
   *     def hello_world(x)
   *       puts "Hello, #{x}"
   *     end
   * ```
   */
  showdown.subParser('githubCodeBlocks', function (text, options, globals) {
    'use strict';

    // early exit if option is not enabled

    if (!options.ghCodeBlocks) {
      return text;
    }

    text = globals.converter._dispatch('githubCodeBlocks.before', text, options, globals);

    text += '¨0';

    text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function (wholeMatch, delim, language, codeblock) {
      var end = options.omitExtraWLInCodeBlocks ? '' : '\n';

      // First parse the github code block
      codeblock = showdown.subParser('encodeCode')(codeblock, options, globals);
      codeblock = showdown.subParser('detab')(codeblock, options, globals);
      codeblock = codeblock.replace(/^\n+/g, ''); // trim leading newlines
      codeblock = codeblock.replace(/\n+$/g, ''); // trim trailing whitespace

      codeblock = '<pre><code' + (language ? ' class="' + language + ' language-' + language + '"' : '') + '>' + codeblock + end + '</code></pre>';

      codeblock = showdown.subParser('hashBlock')(codeblock, options, globals);

      // Since GHCodeblocks can be false positives, we need to
      // store the primitive text and the parsed text in a global var,
      // and then return a token
      return '\n\n¨G' + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock: codeblock }) - 1) + 'G\n\n';
    });

    // attacklab: strip sentinel
    text = text.replace(/¨0/, '');

    return globals.converter._dispatch('githubCodeBlocks.after', text, options, globals);
  });

  showdown.subParser('hashBlock', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('hashBlock.before', text, options, globals);
    text = text.replace(/(^\n+|\n+$)/g, '');
    text = '\n\n¨K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
    text = globals.converter._dispatch('hashBlock.after', text, options, globals);
    return text;
  });

  /**
   * Hash and escape <code> elements that should not be parsed as markdown
   */
  showdown.subParser('hashCodeTags', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('hashCodeTags.before', text, options, globals);

    var repFunc = function repFunc(wholeMatch, match, left, right) {
      var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
      return '¨C' + (globals.gHtmlSpans.push(codeblock) - 1) + 'C';
    };

    // Hash naked <code>
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '<code\\b[^>]*>', '</code>', 'gim');

    text = globals.converter._dispatch('hashCodeTags.after', text, options, globals);
    return text;
  });

  showdown.subParser('hashElement', function (text, options, globals) {
    'use strict';

    return function (wholeMatch, m1) {
      var blockText = m1;

      // Undo double lines
      blockText = blockText.replace(/\n\n/g, '\n');
      blockText = blockText.replace(/^\n/, '');

      // strip trailing blank lines
      blockText = blockText.replace(/\n+$/g, '');

      // Replace the element text with a marker ("¨KxK" where x is its key)
      blockText = '\n\n¨K' + (globals.gHtmlBlocks.push(blockText) - 1) + 'K\n\n';

      return blockText;
    };
  });

  showdown.subParser('hashHTMLBlocks', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('hashHTMLBlocks.before', text, options, globals);

    var blockTags = ['pre', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'table', 'dl', 'ol', 'ul', 'script', 'noscript', 'form', 'fieldset', 'iframe', 'math', 'style', 'section', 'header', 'footer', 'nav', 'article', 'aside', 'address', 'audio', 'canvas', 'figure', 'hgroup', 'output', 'video', 'p'],
        repFunc = function repFunc(wholeMatch, match, left, right) {
      var txt = wholeMatch;
      // check if this html element is marked as markdown
      // if so, it's contents should be parsed as markdown
      if (left.search(/\bmarkdown\b/) !== -1) {
        txt = left + globals.converter.makeHtml(match) + right;
      }
      return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
    };

    if (options.backslashEscapesHTMLTags) {
      // encode backslash escaped HTML tags
      text = text.replace(/\\<(\/?[^>]+?)>/g, function (wm, inside) {
        return '&lt;' + inside + '&gt;';
      });
    }

    // hash HTML Blocks
    for (var i = 0; i < blockTags.length; ++i) {

      var opTagPos,
          rgx1 = new RegExp('^ {0,3}(<' + blockTags[i] + '\\b[^>]*>)', 'im'),
          patLeft = '<' + blockTags[i] + '\\b[^>]*>',
          patRight = '</' + blockTags[i] + '>';
      // 1. Look for the first position of the first opening HTML tag in the text
      while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {

        // if the HTML tag is \ escaped, we need to escape it and break


        //2. Split the text in that position
        var subTexts = showdown.helper.splitAtIndex(text, opTagPos),

        //3. Match recursively
        newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, 'im');

        // prevent an infinite loop
        if (newSubText1 === subTexts[1]) {
          break;
        }
        text = subTexts[0].concat(newSubText1);
      }
    }
    // HR SPECIAL CASE
    text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));

    // Special case for standalone HTML comments
    text = showdown.helper.replaceRecursiveRegExp(text, function (txt) {
      return '\n\n¨K' + (globals.gHtmlBlocks.push(txt) - 1) + 'K\n\n';
    }, '^ {0,3}<!--', '-->', 'gm');

    // PHP and ASP-style processor instructions (<?...?> and <%...%>)
    text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser('hashElement')(text, options, globals));

    text = globals.converter._dispatch('hashHTMLBlocks.after', text, options, globals);
    return text;
  });

  /**
   * Hash span elements that should not be parsed as markdown
   */
  showdown.subParser('hashHTMLSpans', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('hashHTMLSpans.before', text, options, globals);

    function hashHTMLSpan(html) {
      return '¨C' + (globals.gHtmlSpans.push(html) - 1) + 'C';
    }

    // Hash Self Closing tags
    text = text.replace(/<[^>]+?\/>/gi, function (wm) {
      return hashHTMLSpan(wm);
    });

    // Hash tags without properties
    text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function (wm) {
      return hashHTMLSpan(wm);
    });

    // Hash tags with properties
    text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function (wm) {
      return hashHTMLSpan(wm);
    });

    // Hash self closing tags without />
    text = text.replace(/<[^>]+?>/gi, function (wm) {
      return hashHTMLSpan(wm);
    });

    /*showdown.helper.matchRecursiveRegExp(text, '<code\\b[^>]*>', '</code>', 'gi');*/

    text = globals.converter._dispatch('hashHTMLSpans.after', text, options, globals);
    return text;
  });

  /**
   * Unhash HTML spans
   */
  showdown.subParser('unhashHTMLSpans', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('unhashHTMLSpans.before', text, options, globals);

    for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
      var repText = globals.gHtmlSpans[i],

      // limiter to prevent infinite loop (assume 10 as limit for recurse)
      limit = 0;

      while (/¨C(\d+)C/.test(repText)) {
        var num = RegExp.$1;
        repText = repText.replace('¨C' + num + 'C', globals.gHtmlSpans[num]);
        if (limit === 10) {
          console.error('maximum nesting of 10 spans reached!!!');
          break;
        }
        ++limit;
      }
      text = text.replace('¨C' + i + 'C', repText);
    }

    text = globals.converter._dispatch('unhashHTMLSpans.after', text, options, globals);
    return text;
  });

  /**
   * Hash and escape <pre><code> elements that should not be parsed as markdown
   */
  showdown.subParser('hashPreCodeTags', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('hashPreCodeTags.before', text, options, globals);

    var repFunc = function repFunc(wholeMatch, match, left, right) {
      // encode html entities
      var codeblock = left + showdown.subParser('encodeCode')(match, options, globals) + right;
      return '\n\n¨G' + (globals.ghCodeBlocks.push({ text: wholeMatch, codeblock: codeblock }) - 1) + 'G\n\n';
    };

    // Hash <pre><code>
    text = showdown.helper.replaceRecursiveRegExp(text, repFunc, '^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>', '^ {0,3}</code>\\s*</pre>', 'gim');

    text = globals.converter._dispatch('hashPreCodeTags.after', text, options, globals);
    return text;
  });

  showdown.subParser('headers', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('headers.before', text, options, globals);

    var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart),


    // Set text-style headers:
    //	Header 1
    //	========
    //
    //	Header 2
    //	--------
    //
    setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
        setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;

    text = text.replace(setextRegexH1, function (wholeMatch, m1) {

      var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
          hID = options.noHeaderId ? '' : ' id="' + headerId(m1) + '"',
          hLevel = headerLevelStart,
          hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
      return showdown.subParser('hashBlock')(hashBlock, options, globals);
    });

    text = text.replace(setextRegexH2, function (matchFound, m1) {
      var spanGamut = showdown.subParser('spanGamut')(m1, options, globals),
          hID = options.noHeaderId ? '' : ' id="' + headerId(m1) + '"',
          hLevel = headerLevelStart + 1,
          hashBlock = '<h' + hLevel + hID + '>' + spanGamut + '</h' + hLevel + '>';
      return showdown.subParser('hashBlock')(hashBlock, options, globals);
    });

    // atx-style headers:
    //  # Header 1
    //  ## Header 2
    //  ## Header 2 with closing hashes ##
    //  ...
    //  ###### Header 6
    //
    var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

    text = text.replace(atxStyle, function (wholeMatch, m1, m2) {
      var hText = m2;
      if (options.customizedHeaderId) {
        hText = m2.replace(/\s?\{([^{]+?)}\s*$/, '');
      }

      var span = showdown.subParser('spanGamut')(hText, options, globals),
          hID = options.noHeaderId ? '' : ' id="' + headerId(m2) + '"',
          hLevel = headerLevelStart - 1 + m1.length,
          header = '<h' + hLevel + hID + '>' + span + '</h' + hLevel + '>';

      return showdown.subParser('hashBlock')(header, options, globals);
    });

    function headerId(m) {
      var title, prefix;

      // It is separate from other options to allow combining prefix and customized
      if (options.customizedHeaderId) {
        var match = m.match(/\{([^{]+?)}\s*$/);
        if (match && match[1]) {
          m = match[1];
        }
      }

      title = m;

      // Prefix id to prevent causing inadvertent pre-existing style matches.
      if (showdown.helper.isString(options.prefixHeaderId)) {
        prefix = options.prefixHeaderId;
      } else if (options.prefixHeaderId === true) {
        prefix = 'section-';
      } else {
        prefix = '';
      }

      if (!options.rawPrefixHeaderId) {
        title = prefix + title;
      }

      if (options.ghCompatibleHeaderId) {
        title = title.replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '').replace(/¨T/g, '').replace(/¨D/g, '')
        // replace rest of the chars (&~$ are repeated as they might have been escaped)
        // borrowed from github's redcarpet (some they should produce similar results)
        .replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, '').toLowerCase();
      } else if (options.rawHeaderId) {
        title = title.replace(/ /g, '-')
        // replace previously escaped chars (&, ¨ and $)
        .replace(/&amp;/g, '&').replace(/¨T/g, '¨').replace(/¨D/g, '$')
        // replace " and '
        .replace(/["']/g, '-').toLowerCase();
      } else {
        title = title.replace(/[^\w]/g, '').toLowerCase();
      }

      if (options.rawPrefixHeaderId) {
        title = prefix + title;
      }

      if (globals.hashLinkCounts[title]) {
        title = title + '-' + globals.hashLinkCounts[title]++;
      } else {
        globals.hashLinkCounts[title] = 1;
      }
      return title;
    }

    text = globals.converter._dispatch('headers.after', text, options, globals);
    return text;
  });

  /**
   * Turn Markdown link shortcuts into XHTML <a> tags.
   */
  showdown.subParser('horizontalRule', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('horizontalRule.before', text, options, globals);

    var key = showdown.subParser('hashBlock')('<hr />', options, globals);
    text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
    text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
    text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);

    text = globals.converter._dispatch('horizontalRule.after', text, options, globals);
    return text;
  });

  /**
   * Turn Markdown image shortcuts into <img> tags.
   */
  showdown.subParser('images', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('images.before', text, options, globals);

    var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
        crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
        base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
        referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
        refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

    function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
      url = url.replace(/\s/g, '');
      return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
    }

    function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {

      var gUrls = globals.gUrls,
          gTitles = globals.gTitles,
          gDims = globals.gDimensions;

      linkId = linkId.toLowerCase();

      if (!title) {
        title = '';
      }
      // Special case for explicit empty url
      if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
        url = '';
      } else if (url === '' || url === null) {
        if (linkId === '' || linkId === null) {
          // lower-case and turn embedded newlines into spaces
          linkId = altText.toLowerCase().replace(/ ?\n/g, ' ');
        }
        url = '#' + linkId;

        if (!showdown.helper.isUndefined(gUrls[linkId])) {
          url = gUrls[linkId];
          if (!showdown.helper.isUndefined(gTitles[linkId])) {
            title = gTitles[linkId];
          }
          if (!showdown.helper.isUndefined(gDims[linkId])) {
            width = gDims[linkId].width;
            height = gDims[linkId].height;
          }
        } else {
          return wholeMatch;
        }
      }

      altText = altText.replace(/"/g, '&quot;')
      //altText = showdown.helper.escapeCharacters(altText, '*_', false);
      .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      //url = showdown.helper.escapeCharacters(url, '*_', false);
      url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
      var result = '<img src="' + url + '" alt="' + altText + '"';

      if (title && showdown.helper.isString(title)) {
        title = title.replace(/"/g, '&quot;')
        //title = showdown.helper.escapeCharacters(title, '*_', false);
        .replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
        result += ' title="' + title + '"';
      }

      if (width && height) {
        width = width === '*' ? 'auto' : width;
        height = height === '*' ? 'auto' : height;

        result += ' width="' + width + '"';
        result += ' height="' + height + '"';
      }

      result += ' />';

      return result;
    }

    // First, handle reference-style labeled images: ![alt text][id]
    text = text.replace(referenceRegExp, writeImageTag);

    // Next, handle inline images:  ![alt text](url =<width>x<height> "optional title")

    // base64 encoded images
    text = text.replace(base64RegExp, writeImageTagBase64);

    // cases with crazy urls like ./image/cat1).png
    text = text.replace(crazyRegExp, writeImageTag);

    // normal cases
    text = text.replace(inlineRegExp, writeImageTag);

    // handle reference-style shortcuts: ![img text]
    text = text.replace(refShortcutRegExp, writeImageTag);

    text = globals.converter._dispatch('images.after', text, options, globals);
    return text;
  });

  showdown.subParser('italicsAndBold', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('italicsAndBold.before', text, options, globals);

    // it's faster to have 3 separate regexes for each case than have just one
    // because of backtracing, in some cases, it could lead to an exponential effect
    // called "catastrophic backtrace". Ominous!

    function parseInside(txt, left, right) {
      /*
      if (options.simplifiedAutoLink) {
        txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
      }
      */
      return left + txt + right;
    }

    // Parse underscores
    if (options.literalMidWordUnderscores) {
      text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
        return parseInside(txt, '<strong><em>', '</em></strong>');
      });
      text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
        return parseInside(txt, '<strong>', '</strong>');
      });
      text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function (wm, txt) {
        return parseInside(txt, '<em>', '</em>');
      });
    } else {
      text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
        return (/\S$/.test(m) ? parseInside(m, '<strong><em>', '</em></strong>') : wm
        );
      });
      text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
        return (/\S$/.test(m) ? parseInside(m, '<strong>', '</strong>') : wm
        );
      });
      text = text.replace(/_([^\s_][\s\S]*?)_/g, function (wm, m) {
        // !/^_[^_]/.test(m) - test if it doesn't start with __ (since it seems redundant, we removed it)
        return (/\S$/.test(m) ? parseInside(m, '<em>', '</em>') : wm
        );
      });
    }

    // Now parse asterisks
    if (options.literalMidWordAsterisks) {
      text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function (wm, lead, txt) {
        return parseInside(txt, lead + '<strong><em>', '</em></strong>');
      });
      text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function (wm, lead, txt) {
        return parseInside(txt, lead + '<strong>', '</strong>');
      });
      text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function (wm, lead, txt) {
        return parseInside(txt, lead + '<em>', '</em>');
      });
    } else {
      text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function (wm, m) {
        return (/\S$/.test(m) ? parseInside(m, '<strong><em>', '</em></strong>') : wm
        );
      });
      text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function (wm, m) {
        return (/\S$/.test(m) ? parseInside(m, '<strong>', '</strong>') : wm
        );
      });
      text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function (wm, m) {
        // !/^\*[^*]/.test(m) - test if it doesn't start with ** (since it seems redundant, we removed it)
        return (/\S$/.test(m) ? parseInside(m, '<em>', '</em>') : wm
        );
      });
    }

    text = globals.converter._dispatch('italicsAndBold.after', text, options, globals);
    return text;
  });

  /**
   * Form HTML ordered (numbered) and unordered (bulleted) lists.
   */
  showdown.subParser('lists', function (text, options, globals) {
    'use strict';

    /**
     * Process the contents of a single ordered or unordered list, splitting it
     * into individual list items.
     * @param {string} listStr
     * @param {boolean} trimTrailing
     * @returns {string}
     */

    function processListItems(listStr, trimTrailing) {
      // The $g_list_level global keeps track of when we're inside a list.
      // Each time we enter a list, we increment it; when we leave a list,
      // we decrement. If it's zero, we're not in a list anymore.
      //
      // We do this because when we're not inside a list, we want to treat
      // something like this:
      //
      //    I recommend upgrading to version
      //    8. Oops, now this line is treated
      //    as a sub-list.
      //
      // As a single paragraph, despite the fact that the second line starts
      // with a digit-period-space sequence.
      //
      // Whereas when we're inside a list (or sub-list), that line will be
      // treated as the start of a sub-list. What a kludge, huh? This is
      // an aspect of Markdown's syntax that's hard to parse perfectly
      // without resorting to mind-reading. Perhaps the solution is to
      // change the syntax rules such that sub-lists must start with a
      // starting cardinal number; e.g. "1." or "a.".
      globals.gListLevel++;

      // trim trailing blank lines:
      listStr = listStr.replace(/\n{2,}$/, '\n');

      // attacklab: add sentinel to emulate \z
      listStr += '¨0';

      var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
          isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);

      // Since version 1.5, nesting sublists requires 4 spaces (or 1 tab) indentation,
      // which is a syntax breaking change
      // activating this option reverts to old behavior
      if (options.disableForced4SpacesIndentedSublists) {
        rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
      }

      listStr = listStr.replace(rgx, function (wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
        checked = checked && checked.trim() !== '';

        var item = showdown.subParser('outdent')(m4, options, globals),
            bulletStyle = '';

        // Support for github tasklists
        if (taskbtn && options.tasklists) {
          bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
          item = item.replace(/^[ \t]*\[(x|X| )?]/m, function () {
            var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            if (checked) {
              otp += ' checked';
            }
            otp += '>';
            return otp;
          });
        }

        // ISSUE #312
        // This input: - - - a
        // causes trouble to the parser, since it interprets it as:
        // <ul><li><li><li>a</li></li></li></ul>
        // instead of:
        // <ul><li>- - a</li></ul>
        // So, to prevent it, we will put a marker (¨A)in the beginning of the line
        // Kind of hackish/monkey patching, but seems more effective than overcomplicating the list parser
        item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function (wm2) {
          return '¨A' + wm2;
        });

        // m1 - Leading line or
        // Has a double return (multi paragraph) or
        // Has sublist
        if (m1 || item.search(/\n{2,}/) > -1) {
          item = showdown.subParser('githubCodeBlocks')(item, options, globals);
          item = showdown.subParser('blockGamut')(item, options, globals);
        } else {
          // Recursion for sub-lists:
          item = showdown.subParser('lists')(item, options, globals);
          item = item.replace(/\n$/, ''); // chomp(item)
          item = showdown.subParser('hashHTMLBlocks')(item, options, globals);

          // Colapse double linebreaks
          item = item.replace(/\n\n+/g, '\n\n');
          if (isParagraphed) {
            item = showdown.subParser('paragraphs')(item, options, globals);
          } else {
            item = showdown.subParser('spanGamut')(item, options, globals);
          }
        }

        // now we need to remove the marker (¨A)
        item = item.replace('¨A', '');
        // we can finally wrap the line in list item tags
        item = '<li' + bulletStyle + '>' + item + '</li>\n';

        return item;
      });

      // attacklab: strip sentinel
      listStr = listStr.replace(/¨0/g, '');

      globals.gListLevel--;

      if (trimTrailing) {
        listStr = listStr.replace(/\s+$/, '');
      }

      return listStr;
    }

    function styleStartNumber(list, listType) {
      // check if ol and starts by a number different than 1
      if (listType === 'ol') {
        var res = list.match(/^ *(\d+)\./);
        if (res && res[1] !== '1') {
          return ' start="' + res[1] + '"';
        }
      }
      return '';
    }

    /**
     * Check and parse consecutive lists (better fix for issue #142)
     * @param {string} list
     * @param {string} listType
     * @param {boolean} trimTrailing
     * @returns {string}
     */
    function parseConsecutiveLists(list, listType, trimTrailing) {
      // check if we caught 2 or more consecutive lists by mistake
      // we use the counterRgx, meaning if listType is UL we look for OL and vice versa
      var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
          ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
          counterRxg = listType === 'ul' ? olRgx : ulRgx,
          result = '';

      if (list.search(counterRxg) !== -1) {
        (function parseCL(txt) {
          var pos = txt.search(counterRxg),
              style = styleStartNumber(list, listType);
          if (pos !== -1) {
            // slice
            result += '\n\n<' + listType + style + '>\n' + processListItems(txt.slice(0, pos), !!trimTrailing) + '</' + listType + '>\n';

            // invert counterType and listType
            listType = listType === 'ul' ? 'ol' : 'ul';
            counterRxg = listType === 'ul' ? olRgx : ulRgx;

            //recurse
            parseCL(txt.slice(pos));
          } else {
            result += '\n\n<' + listType + style + '>\n' + processListItems(txt, !!trimTrailing) + '</' + listType + '>\n';
          }
        })(list);
      } else {
        var style = styleStartNumber(list, listType);
        result = '\n\n<' + listType + style + '>\n' + processListItems(list, !!trimTrailing) + '</' + listType + '>\n';
      }

      return result;
    }

    /** Start of list parsing **/
    text = globals.converter._dispatch('lists.before', text, options, globals);
    // add sentinel to hack around khtml/safari bug:
    // http://bugs.webkit.org/show_bug.cgi?id=11231
    text += '¨0';

    if (globals.gListLevel) {
      text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (wholeMatch, list, m2) {
        var listType = m2.search(/[*+-]/g) > -1 ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, true);
      });
    } else {
      text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function (wholeMatch, m1, list, m3) {
        var listType = m3.search(/[*+-]/g) > -1 ? 'ul' : 'ol';
        return parseConsecutiveLists(list, listType, false);
      });
    }

    // strip sentinel
    text = text.replace(/¨0/, '');
    text = globals.converter._dispatch('lists.after', text, options, globals);
    return text;
  });

  /**
   * Parse metadata at the top of the document
   */
  showdown.subParser('metadata', function (text, options, globals) {
    'use strict';

    if (!options.metadata) {
      return text;
    }

    text = globals.converter._dispatch('metadata.before', text, options, globals);

    function parseMetadataContents(content) {
      // raw is raw so it's not changed in any way
      globals.metadata.raw = content;

      // escape chars forbidden in html attributes
      // double quotes
      content = content
      // ampersand first
      .replace(/&/g, '&amp;')
      // double quotes
      .replace(/"/g, '&quot;');

      content = content.replace(/\n {4}/g, ' ');
      content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function (wm, key, value) {
        globals.metadata.parsed[key] = value;
        return '';
      });
    }

    text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function (wholematch, format, content) {
      parseMetadataContents(content);
      return '¨M';
    });

    text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function (wholematch, format, content) {
      if (format) {
        globals.metadata.format = format;
      }
      parseMetadataContents(content);
      return '¨M';
    });

    text = text.replace(/¨M/g, '');

    text = globals.converter._dispatch('metadata.after', text, options, globals);
    return text;
  });

  /**
   * Remove one level of line-leading tabs or spaces
   */
  showdown.subParser('outdent', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('outdent.before', text, options, globals);

    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"
    text = text.replace(/^(\t|[ ]{1,4})/gm, '¨0'); // attacklab: g_tab_width

    // attacklab: clean up hack
    text = text.replace(/¨0/g, '');

    text = globals.converter._dispatch('outdent.after', text, options, globals);
    return text;
  });

  /**
   *
   */
  showdown.subParser('paragraphs', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('paragraphs.before', text, options, globals);
    // Strip leading and trailing lines:
    text = text.replace(/^\n+/g, '');
    text = text.replace(/\n+$/g, '');

    var grafs = text.split(/\n{2,}/g),
        grafsOut = [],
        end = grafs.length; // Wrap <p> tags

    for (var i = 0; i < end; i++) {
      var str = grafs[i];
      // if this is an HTML marker, copy it
      if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
        grafsOut.push(str);

        // test for presence of characters to prevent empty lines being parsed
        // as paragraphs (resulting in undesired extra empty paragraphs)
      } else if (str.search(/\S/) >= 0) {
        str = showdown.subParser('spanGamut')(str, options, globals);
        str = str.replace(/^([ \t]*)/g, '<p>');
        str += '</p>';
        grafsOut.push(str);
      }
    }

    /** Unhashify HTML blocks */
    end = grafsOut.length;
    for (i = 0; i < end; i++) {
      var blockText = '',
          grafsOutIt = grafsOut[i],
          codeFlag = false;
      // if this is a marker for an html block...
      // use RegExp.test instead of string.search because of QML bug
      while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
        var delim = RegExp.$1,
            num = RegExp.$2;

        if (delim === 'K') {
          blockText = globals.gHtmlBlocks[num];
        } else {
          // we need to check if ghBlock is a false positive
          if (codeFlag) {
            // use encoded version of all text
            blockText = showdown.subParser('encodeCode')(globals.ghCodeBlocks[num].text, options, globals);
          } else {
            blockText = globals.ghCodeBlocks[num].codeblock;
          }
        }
        blockText = blockText.replace(/\$/g, '$$$$'); // Escape any dollar signs

        grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
        // Check if grafsOutIt is a pre->code
        if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
          codeFlag = true;
        }
      }
      grafsOut[i] = grafsOutIt;
    }
    text = grafsOut.join('\n');
    // Strip leading and trailing lines:
    text = text.replace(/^\n+/g, '');
    text = text.replace(/\n+$/g, '');
    return globals.converter._dispatch('paragraphs.after', text, options, globals);
  });

  /**
   * Run extension
   */
  showdown.subParser('runExtension', function (ext, text, options, globals) {
    'use strict';

    if (ext.filter) {
      text = ext.filter(text, globals.converter, options);
    } else if (ext.regex) {
      // TODO remove this when old extension loading mechanism is deprecated
      var re = ext.regex;
      if (!(re instanceof RegExp)) {
        re = new RegExp(re, 'g');
      }
      text = text.replace(re, ext.replace);
    }

    return text;
  });

  /**
   * These are all the transformations that occur *within* block-level
   * tags like paragraphs, headers, and list items.
   */
  showdown.subParser('spanGamut', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('spanGamut.before', text, options, globals);
    text = showdown.subParser('codeSpans')(text, options, globals);
    text = showdown.subParser('escapeSpecialCharsWithinTagAttributes')(text, options, globals);
    text = showdown.subParser('encodeBackslashEscapes')(text, options, globals);

    // Process anchor and image tags. Images must come first,
    // because ![foo][f] looks like an anchor.
    text = showdown.subParser('images')(text, options, globals);
    text = showdown.subParser('anchors')(text, options, globals);

    // Make links out of things like `<http://example.com/>`
    // Must come after anchors, because you can use < and >
    // delimiters in inline links like [this](<url>).
    text = showdown.subParser('autoLinks')(text, options, globals);
    text = showdown.subParser('simplifiedAutoLinks')(text, options, globals);
    text = showdown.subParser('emoji')(text, options, globals);
    text = showdown.subParser('underline')(text, options, globals);
    text = showdown.subParser('italicsAndBold')(text, options, globals);
    text = showdown.subParser('strikethrough')(text, options, globals);
    text = showdown.subParser('ellipsis')(text, options, globals);

    // we need to hash HTML tags inside spans
    text = showdown.subParser('hashHTMLSpans')(text, options, globals);

    // now we encode amps and angles
    text = showdown.subParser('encodeAmpsAndAngles')(text, options, globals);

    // Do hard breaks
    if (options.simpleLineBreaks) {
      // GFM style hard breaks
      // only add line breaks if the text does not contain a block (special case for lists)
      if (!/\n\n¨K/.test(text)) {
        text = text.replace(/\n+/g, '<br />\n');
      }
    } else {
      // Vanilla hard breaks
      text = text.replace(/  +\n/g, '<br />\n');
    }

    text = globals.converter._dispatch('spanGamut.after', text, options, globals);
    return text;
  });

  showdown.subParser('strikethrough', function (text, options, globals) {
    'use strict';

    function parseInside(txt) {
      if (options.simplifiedAutoLink) {
        txt = showdown.subParser('simplifiedAutoLinks')(txt, options, globals);
      }
      return '<del>' + txt + '</del>';
    }

    if (options.strikethrough) {
      text = globals.converter._dispatch('strikethrough.before', text, options, globals);
      text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function (wm, txt) {
        return parseInside(txt);
      });
      text = globals.converter._dispatch('strikethrough.after', text, options, globals);
    }

    return text;
  });

  /**
   * Strips link definitions from text, stores the URLs and titles in
   * hash references.
   * Link defs are in the form: ^[id]: url "optional title"
   */
  showdown.subParser('stripLinkDefinitions', function (text, options, globals) {
    'use strict';

    var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,
        base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;

    // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
    text += '¨0';

    var replaceFunc = function replaceFunc(wholeMatch, linkId, url, width, height, blankLines, title) {
      linkId = linkId.toLowerCase();
      if (url.match(/^data:.+?\/.+?;base64,/)) {
        // remove newlines
        globals.gUrls[linkId] = url.replace(/\s/g, '');
      } else {
        globals.gUrls[linkId] = showdown.subParser('encodeAmpsAndAngles')(url, options, globals); // Link IDs are case-insensitive
      }

      if (blankLines) {
        // Oops, found blank lines, so it's not a title.
        // Put back the parenthetical statement we stole.
        return blankLines + title;
      } else {
        if (title) {
          globals.gTitles[linkId] = title.replace(/"|'/g, '&quot;');
        }
        if (options.parseImgDimensions && width && height) {
          globals.gDimensions[linkId] = {
            width: width,
            height: height
          };
        }
      }
      // Completely remove the definition from the text
      return '';
    };

    // first we try to find base64 link references
    text = text.replace(base64Regex, replaceFunc);

    text = text.replace(regex, replaceFunc);

    // attacklab: strip sentinel
    text = text.replace(/¨0/, '');

    return text;
  });

  showdown.subParser('tables', function (text, options, globals) {
    'use strict';

    if (!options.tables) {
      return text;
    }

    var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,

    //singeColTblRgx = /^ {0,3}\|.+\|\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n(?: {0,3}\|.+\|\n)+(?:\n\n|¨0)/gm;
    singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;

    function parseStyles(sLine) {
      if (/^:[ \t]*--*$/.test(sLine)) {
        return ' style="text-align:left;"';
      } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
        return ' style="text-align:right;"';
      } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
        return ' style="text-align:center;"';
      } else {
        return '';
      }
    }

    function parseHeaders(header, style) {
      var id = '';
      header = header.trim();
      // support both tablesHeaderId and tableHeaderId due to error in documentation so we don't break backwards compatibility
      if (options.tablesHeaderId || options.tableHeaderId) {
        id = ' id="' + header.replace(/ /g, '_').toLowerCase() + '"';
      }
      header = showdown.subParser('spanGamut')(header, options, globals);

      return '<th' + id + style + '>' + header + '</th>\n';
    }

    function parseCells(cell, style) {
      var subText = showdown.subParser('spanGamut')(cell, options, globals);
      return '<td' + style + '>' + subText + '</td>\n';
    }

    function buildTable(headers, cells) {
      var tb = '<table>\n<thead>\n<tr>\n',
          tblLgn = headers.length;

      for (var i = 0; i < tblLgn; ++i) {
        tb += headers[i];
      }
      tb += '</tr>\n</thead>\n<tbody>\n';

      for (i = 0; i < cells.length; ++i) {
        tb += '<tr>\n';
        for (var ii = 0; ii < tblLgn; ++ii) {
          tb += cells[i][ii];
        }
        tb += '</tr>\n';
      }
      tb += '</tbody>\n</table>\n';
      return tb;
    }

    function parseTable(rawTable) {
      var i,
          tableLines = rawTable.split('\n');

      for (i = 0; i < tableLines.length; ++i) {
        // strip wrong first and last column if wrapped tables are used
        if (/^ {0,3}\|/.test(tableLines[i])) {
          tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, '');
        }
        if (/\|[ \t]*$/.test(tableLines[i])) {
          tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, '');
        }
        // parse code spans first, but we only support one line code spans
        tableLines[i] = showdown.subParser('codeSpans')(tableLines[i], options, globals);
      }

      var rawHeaders = tableLines[0].split('|').map(function (s) {
        return s.trim();
      }),
          rawStyles = tableLines[1].split('|').map(function (s) {
        return s.trim();
      }),
          rawCells = [],
          headers = [],
          styles = [],
          cells = [];

      tableLines.shift();
      tableLines.shift();

      for (i = 0; i < tableLines.length; ++i) {
        if (tableLines[i].trim() === '') {
          continue;
        }
        rawCells.push(tableLines[i].split('|').map(function (s) {
          return s.trim();
        }));
      }

      if (rawHeaders.length < rawStyles.length) {
        return rawTable;
      }

      for (i = 0; i < rawStyles.length; ++i) {
        styles.push(parseStyles(rawStyles[i]));
      }

      for (i = 0; i < rawHeaders.length; ++i) {
        if (showdown.helper.isUndefined(styles[i])) {
          styles[i] = '';
        }
        headers.push(parseHeaders(rawHeaders[i], styles[i]));
      }

      for (i = 0; i < rawCells.length; ++i) {
        var row = [];
        for (var ii = 0; ii < headers.length; ++ii) {
          if (showdown.helper.isUndefined(rawCells[i][ii])) {}
          row.push(parseCells(rawCells[i][ii], styles[ii]));
        }
        cells.push(row);
      }

      return buildTable(headers, cells);
    }

    text = globals.converter._dispatch('tables.before', text, options, globals);

    // find escaped pipe characters
    text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);

    // parse multi column tables
    text = text.replace(tableRgx, parseTable);

    // parse one column tables
    text = text.replace(singeColTblRgx, parseTable);

    text = globals.converter._dispatch('tables.after', text, options, globals);

    return text;
  });

  showdown.subParser('underline', function (text, options, globals) {
    'use strict';

    if (!options.underline) {
      return text;
    }

    text = globals.converter._dispatch('underline.before', text, options, globals);

    if (options.literalMidWordUnderscores) {
      text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function (wm, txt) {
        return '<u>' + txt + '</u>';
      });
      text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function (wm, txt) {
        return '<u>' + txt + '</u>';
      });
    } else {
      text = text.replace(/___(\S[\s\S]*?)___/g, function (wm, m) {
        return (/\S$/.test(m) ? '<u>' + m + '</u>' : wm
        );
      });
      text = text.replace(/__(\S[\s\S]*?)__/g, function (wm, m) {
        return (/\S$/.test(m) ? '<u>' + m + '</u>' : wm
        );
      });
    }

    // escape remaining underscores to prevent them being parsed by italic and bold
    text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);

    text = globals.converter._dispatch('underline.after', text, options, globals);

    return text;
  });

  /**
   * Swap back in all the special characters we've hidden.
   */
  showdown.subParser('unescapeSpecialChars', function (text, options, globals) {
    'use strict';

    text = globals.converter._dispatch('unescapeSpecialChars.before', text, options, globals);

    text = text.replace(/¨E(\d+)E/g, function (wholeMatch, m1) {
      var charCodeToReplace = parseInt(m1);
      return String.fromCharCode(charCodeToReplace);
    });

    text = globals.converter._dispatch('unescapeSpecialChars.after', text, options, globals);
    return text;
  });

  showdown.subParser('makeMarkdown.blockquote', function (node, globals) {
    'use strict';

    var txt = '';
    if (node.hasChildNodes()) {
      var children = node.childNodes,
          childrenLength = children.length;

      for (var i = 0; i < childrenLength; ++i) {
        var innerTxt = showdown.subParser('makeMarkdown.node')(children[i], globals);

        if (innerTxt === '') {
          continue;
        }
        txt += innerTxt;
      }
    }
    // cleanup
    txt = txt.trim();
    txt = '> ' + txt.split('\n').join('\n> ');
    return txt;
  });

  showdown.subParser('makeMarkdown.codeBlock', function (node, globals) {
    'use strict';

    var lang = node.getAttribute('language'),
        num = node.getAttribute('precodenum');
    return '```' + lang + '\n' + globals.preList[num] + '\n```';
  });

  showdown.subParser('makeMarkdown.codeSpan', function (node) {
    'use strict';

    return '`' + node.innerHTML + '`';
  });

  showdown.subParser('makeMarkdown.emphasis', function (node, globals) {
    'use strict';

    var txt = '';
    if (node.hasChildNodes()) {
      txt += '*';
      var children = node.childNodes,
          childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
      txt += '*';
    }
    return txt;
  });

  showdown.subParser('makeMarkdown.header', function (node, globals, headerLevel) {
    'use strict';

    var headerMark = new Array(headerLevel + 1).join('#'),
        txt = '';

    if (node.hasChildNodes()) {
      txt = headerMark + ' ';
      var children = node.childNodes,
          childrenLength = children.length;

      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
    }
    return txt;
  });

  showdown.subParser('makeMarkdown.hr', function () {
    'use strict';

    return '---';
  });

  showdown.subParser('makeMarkdown.image', function (node) {
    'use strict';

    var txt = '';
    if (node.hasAttribute('src')) {
      txt += '![' + node.getAttribute('alt') + '](';
      txt += '<' + node.getAttribute('src') + '>';
      if (node.hasAttribute('width') && node.hasAttribute('height')) {
        txt += ' =' + node.getAttribute('width') + 'x' + node.getAttribute('height');
      }

      if (node.hasAttribute('title')) {
        txt += ' "' + node.getAttribute('title') + '"';
      }
      txt += ')';
    }
    return txt;
  });

  showdown.subParser('makeMarkdown.links', function (node, globals) {
    'use strict';

    var txt = '';
    if (node.hasChildNodes() && node.hasAttribute('href')) {
      var children = node.childNodes,
          childrenLength = children.length;
      txt = '[';
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
      txt += '](';
      txt += '<' + node.getAttribute('href') + '>';
      if (node.hasAttribute('title')) {
        txt += ' "' + node.getAttribute('title') + '"';
      }
      txt += ')';
    }
    return txt;
  });

  showdown.subParser('makeMarkdown.list', function (node, globals, type) {
    'use strict';

    var txt = '';
    if (!node.hasChildNodes()) {
      return '';
    }
    var listItems = node.childNodes,
        listItemsLenght = listItems.length,
        listNum = node.getAttribute('start') || 1;

    for (var i = 0; i < listItemsLenght; ++i) {
      if (typeof listItems[i].tagName === 'undefined' || listItems[i].tagName.toLowerCase() !== 'li') {
        continue;
      }

      // define the bullet to use in list
      var bullet = '';
      if (type === 'ol') {
        bullet = listNum.toString() + '. ';
      } else {
        bullet = '- ';
      }

      // parse list item
      txt += bullet + showdown.subParser('makeMarkdown.listItem')(listItems[i], globals);
      ++listNum;
    }

    // add comment at the end to prevent consecutive lists to be parsed as one
    txt += '\n<!-- -->\n';
    return txt.trim();
  });

  showdown.subParser('makeMarkdown.listItem', function (node, globals) {
    'use strict';

    var listItemTxt = '';

    var children = node.childNodes,
        childrenLenght = children.length;

    for (var i = 0; i < childrenLenght; ++i) {
      listItemTxt += showdown.subParser('makeMarkdown.node')(children[i], globals);
    }
    // if it's only one liner, we need to add a newline at the end
    if (!/\n$/.test(listItemTxt)) {
      listItemTxt += '\n';
    } else {
      // it's multiparagraph, so we need to indent
      listItemTxt = listItemTxt.split('\n').join('\n    ').replace(/^ {4}$/gm, '').replace(/\n\n+/g, '\n\n');
    }

    return listItemTxt;
  });

  showdown.subParser('makeMarkdown.node', function (node, globals, spansOnly) {
    'use strict';

    spansOnly = spansOnly || false;

    var txt = '';

    // edge case of text without wrapper paragraph
    if (node.nodeType === 3) {
      return showdown.subParser('makeMarkdown.txt')(node, globals);
    }

    // HTML comment
    if (node.nodeType === 8) {
      return '<!--' + node.data + '-->\n\n';
    }

    // process only node elements
    if (node.nodeType !== 1) {
      return '';
    }

    var tagName = node.tagName.toLowerCase();

    switch (tagName) {

      //
      // BLOCKS
      //
      case 'h1':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 1) + '\n\n';
        }
        break;
      case 'h2':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 2) + '\n\n';
        }
        break;
      case 'h3':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 3) + '\n\n';
        }
        break;
      case 'h4':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 4) + '\n\n';
        }
        break;
      case 'h5':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 5) + '\n\n';
        }
        break;
      case 'h6':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.header')(node, globals, 6) + '\n\n';
        }
        break;

      case 'p':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.paragraph')(node, globals) + '\n\n';
        }
        break;

      case 'blockquote':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.blockquote')(node, globals) + '\n\n';
        }
        break;

      case 'hr':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.hr')(node, globals) + '\n\n';
        }
        break;

      case 'ol':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ol') + '\n\n';
        }
        break;

      case 'ul':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.list')(node, globals, 'ul') + '\n\n';
        }
        break;

      case 'precode':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.codeBlock')(node, globals) + '\n\n';
        }
        break;

      case 'pre':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.pre')(node, globals) + '\n\n';
        }
        break;

      case 'table':
        if (!spansOnly) {
          txt = showdown.subParser('makeMarkdown.table')(node, globals) + '\n\n';
        }
        break;

      //
      // SPANS
      //
      case 'code':
        txt = showdown.subParser('makeMarkdown.codeSpan')(node, globals);
        break;

      case 'em':
      case 'i':
        txt = showdown.subParser('makeMarkdown.emphasis')(node, globals);
        break;

      case 'strong':
      case 'b':
        txt = showdown.subParser('makeMarkdown.strong')(node, globals);
        break;

      case 'del':
        txt = showdown.subParser('makeMarkdown.strikethrough')(node, globals);
        break;

      case 'a':
        txt = showdown.subParser('makeMarkdown.links')(node, globals);
        break;

      case 'img':
        txt = showdown.subParser('makeMarkdown.image')(node, globals);
        break;

      default:
        txt = node.outerHTML + '\n\n';
    }

    // common normalization
    // TODO eventually

    return txt;
  });

  showdown.subParser('makeMarkdown.paragraph', function (node, globals) {
    'use strict';

    var txt = '';
    if (node.hasChildNodes()) {
      var children = node.childNodes,
          childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
    }

    // some text normalization
    txt = txt.trim();

    return txt;
  });

  showdown.subParser('makeMarkdown.pre', function (node, globals) {
    'use strict';

    var num = node.getAttribute('prenum');
    return '<pre>' + globals.preList[num] + '</pre>';
  });

  showdown.subParser('makeMarkdown.strikethrough', function (node, globals) {
    'use strict';

    var txt = '';
    if (node.hasChildNodes()) {
      txt += '~~';
      var children = node.childNodes,
          childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
      txt += '~~';
    }
    return txt;
  });

  showdown.subParser('makeMarkdown.strong', function (node, globals) {
    'use strict';

    var txt = '';
    if (node.hasChildNodes()) {
      txt += '**';
      var children = node.childNodes,
          childrenLength = children.length;
      for (var i = 0; i < childrenLength; ++i) {
        txt += showdown.subParser('makeMarkdown.node')(children[i], globals);
      }
      txt += '**';
    }
    return txt;
  });

  showdown.subParser('makeMarkdown.table', function (node, globals) {
    'use strict';

    var txt = '',
        tableArray = [[], []],
        headings = node.querySelectorAll('thead>tr>th'),
        rows = node.querySelectorAll('tbody>tr'),
        i,
        ii;
    for (i = 0; i < headings.length; ++i) {
      var headContent = showdown.subParser('makeMarkdown.tableCell')(headings[i], globals),
          allign = '---';

      if (headings[i].hasAttribute('style')) {
        var style = headings[i].getAttribute('style').toLowerCase().replace(/\s/g, '');
        switch (style) {
          case 'text-align:left;':
            allign = ':---';
            break;
          case 'text-align:right;':
            allign = '---:';
            break;
          case 'text-align:center;':
            allign = ':---:';
            break;
        }
      }
      tableArray[0][i] = headContent.trim();
      tableArray[1][i] = allign;
    }

    for (i = 0; i < rows.length; ++i) {
      var r = tableArray.push([]) - 1,
          cols = rows[i].getElementsByTagName('td');

      for (ii = 0; ii < headings.length; ++ii) {
        var cellContent = ' ';
        if (typeof cols[ii] !== 'undefined') {
          cellContent = showdown.subParser('makeMarkdown.tableCell')(cols[ii], globals);
        }
        tableArray[r].push(cellContent);
      }
    }

    var cellSpacesCount = 3;
    for (i = 0; i < tableArray.length; ++i) {
      for (ii = 0; ii < tableArray[i].length; ++ii) {
        var strLen = tableArray[i][ii].length;
        if (strLen > cellSpacesCount) {
          cellSpacesCount = strLen;
        }
      }
    }

    for (i = 0; i < tableArray.length; ++i) {
      for (ii = 0; ii < tableArray[i].length; ++ii) {
        if (i === 1) {
          if (tableArray[i][ii].slice(-1) === ':') {
            tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, '-') + ':';
          } else {
            tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, '-');
          }
        } else {
          tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
        }
      }
      txt += '| ' + tableArray[i].join(' | ') + ' |\n';
    }

    return txt.trim();
  });

  showdown.subParser('makeMarkdown.tableCell', function (node, globals) {
    'use strict';

    var txt = '';
    if (!node.hasChildNodes()) {
      return '';
    }
    var children = node.childNodes,
        childrenLength = children.length;

    for (var i = 0; i < childrenLength; ++i) {
      txt += showdown.subParser('makeMarkdown.node')(children[i], globals, true);
    }
    return txt.trim();
  });

  showdown.subParser('makeMarkdown.txt', function (node) {
    'use strict';

    var txt = node.nodeValue;

    // multiple spaces are collapsed
    txt = txt.replace(/ +/g, ' ');

    // replace the custom ¨NBSP; with a space
    txt = txt.replace(/¨NBSP;/g, ' ');

    // ", <, > and & should replace escaped html entities
    txt = showdown.helper.unescapeHTMLEntities(txt);

    // escape markdown magic characters
    // emphasis, strong and strikethrough - can appear everywhere
    // we also escape pipe (|) because of tables
    // and escape ` because of code blocks and spans
    txt = txt.replace(/([*_~|`])/g, '\\$1');

    // escape > because of blockquotes
    txt = txt.replace(/^(\s*)>/g, '\\$1>');

    // hash character, only troublesome at the beginning of a line because of headers
    txt = txt.replace(/^#/gm, '\\#');

    // horizontal rules
    txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, '$1\\$2$3');

    // dot, because of ordered lists, only troublesome at the beginning of a line when preceded by an integer
    txt = txt.replace(/^( {0,3}\d+)\./gm, '$1\\.');

    // +, * and -, at the beginning of a line becomes a list, so we need to escape them also (asterisk was already escaped)
    txt = txt.replace(/^( {0,3})([+-])/gm, '$1\\$2');

    // images and links, ] followed by ( is problematic, so we escape it
    txt = txt.replace(/]([\s]*)\(/g, '\\]$1\\(');

    // reference URIs must also be escaped
    txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, '\\[$1]:');

    return txt;
  });

  var root = this;

  // AMD Loader
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      'use strict';

      return showdown;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    // CommonJS/nodeJS Loader
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = showdown;

    // Regular Browser loader
  } else {
    root.showdown = showdown;
  }
}).call(this);

//# sourceMappingURL=showdown.js.map

/***/ }),

/***/ "J9SO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"thesis":"thesis__3uAQ4"};

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

// EXTERNAL MODULE: ./manifest.json
var manifest = __webpack_require__("ZcXo");
var manifest_default = /*#__PURE__*/__webpack_require__.n(manifest);

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["h"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["h"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ./pages/home.css
var home = __webpack_require__("36Ou");
var home_default = /*#__PURE__*/__webpack_require__.n(home);

// EXTERNAL MODULE: ./components/panel.css
var panel = __webpack_require__("P9k+");
var panel_default = /*#__PURE__*/__webpack_require__.n(panel);

// CONCATENATED MODULE: ./components/panel.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var panel_Panel = function (_Component) {
	_inherits(Panel, _Component);

	function Panel() {
		_classCallCheck(this, Panel);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Panel.prototype.getStyle = function getStyle() {
		return panel_default.a.panel;
	};

	Panel.prototype.render = function render() {
		var title = null;
		if (this.props.title !== undefined) {
			title = Object(preact_min["h"])(
				"h3",
				null,
				this.props.title
			);
		}

		return Object(preact_min["h"])(
			"div",
			{ "class": this.getStyle(), id: this.props.id },
			title,
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
        var title = null;
        if (this.props.title !== undefined) {
            title = Object(preact_min["h"])(
                "h2",
                null,
                this.props.title
            );
        }

        var children = void 0;
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
            title,
            Object(preact_min["h"])(
                "div",
                { "class": split_default.a.splitparent },
                children
            )
        );
    };

    return Split;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/todo.css
var todo = __webpack_require__("tO1d");
var todo_default = /*#__PURE__*/__webpack_require__.n(todo);

// CONCATENATED MODULE: ./components/todo.js


function todo__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function todo__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function todo__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var todo_Todo = function (_Component) {
	todo__inherits(Todo, _Component);

	function Todo() {
		todo__classCallCheck(this, Todo);

		return todo__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Todo.prototype.render = function render() {
		return Object(preact_min["h"])(
			"span",
			{ "class": todo_default.a.todo },
			this.props.children
		);
	};

	return Todo;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./pages/home.js


function home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var _ref = Object(preact_min["h"])(
    'h1',
    null,
    'Indice'
);

var _ref2 = Object(preact_min["h"])(
    split_Split,
    { title: 'Argomenti' },
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: '/statistica' },
                'Statistica ed elementi di probabilit\xE0'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Appunti scritti mentre studiavo per l\'esame di ',
            Object(preact_min["h"])(
                'a',
                { href: "http://personale.unimore.it/rubrica/contenutiad/llarocca/2019/58028/N0/N0/9999" },
                'Statistica ed elementi di probabilit\xE0'
            ),
            '  del ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/didattica/mlaurea.html?ID=54' },
                'corso triennale di Informatica'
            ),
            ' all\'',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/' },
                'Unimore'
            ),
            ' del Prof. ',
            Object(preact_min["h"])(
                'a',
                { href: "http://personale.unimore.it/rubrica/dettaglio/llarocca" },
                'Luca La Rocca'
            ),
            '.'
        ),
        Object(preact_min["h"])(
            'p',
            null,
            Object(preact_min["h"])(
                todo_Todo,
                null,
                'TODO: \xE8 ancora incompleto!'
            )
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: 'https://github.com/Steffo99/cleaver' },
                'Cleaver'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Progetto in Java sviluppato per l\'esame di ',
            Object(preact_min["h"])(
                'a',
                { href: 'http://personale.unimore.it/rubrica/contenutiad/gcabri/2019/58026/N0/N0/9999' },
                'Programmazione ad Oggetti'
            ),
            ' del ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/didattica/mlaurea.html?ID=54' },
                'corso triennale di Informatica'
            ),
            ' all\'',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/' },
                'Unimore'
            ),
            ', tenuto dai Prof. ',
            Object(preact_min["h"])(
                'a',
                { href: 'http://personale.unimore.it/rubrica/dettaglio/gcabri' },
                'Giacomo Cabri'
            ),
            ' e ',
            Object(preact_min["h"])(
                'a',
                { href: 'http://personale.unimore.it/Rubrica/Dettaglio/n.capodieci' },
                'Nicola Capodieci'
            ),
            '.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: '/fisica' },
                'Fisica'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Appunti delle ',
            Object(preact_min["h"])(
                'a',
                { href: 'http://personale.unimore.it/rubrica/contenutiad/brunetti/2019/58025/N0/N0/9999' },
                'lezioni di Fisica'
            ),
            ' del ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/didattica/mlaurea.html?ID=54' },
                'corso triennale di Informatica'
            ),
            ' all\'',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/' },
                'Unimore'
            ),
            ', tenute dalla ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://personale.unimore.it/rubrica/dettaglio/brunetti' },
                'Prof.ssa Rossella Brunetti'
            ),
            ' nel primo semestre dell\'Anno Accademico 2019/2020.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: 'https://github.com/Steffo99/appunti-universitari/tree/master/2019_SistemiOperativi/Arzigogoli' },
                'Sistemi Operativi'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Soluzioni agli ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://weblab.ing.unimore.it/people/andreolini/didattica/sistemi-operativi/index.html#arzigogoli' },
                'Arzigogoli'
            ),
            ' proposti dal ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://personale.unimore.it/rubrica/dettaglio/andreolini' },
                'Prof. Mauro Andreolini'
            ),
            ' durante le ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://personale.unimore.it/rubrica/contenutiad/andreolini/2019/58027/N0/N0/9999' },
                'lezioni di Sistemi Operativi'
            ),
            ' del ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/didattica/mlaurea.html?ID=54' },
                'corso triennale di Informatica'
            ),
            ' all\'',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/' },
                'Unimore'
            ),
            ' tenutesi nel primo semestre dell\'Anno Accademico 2019/2020.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: 'https://github.com/Steffo99/appunti-universitari/tree/master/2018_AlgoritmiEStruttureDati' },
                'Algoritmi e Strutture Dati'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Appunti delle ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://personale.unimore.it/rubrica/contenutiad/mmontangero/2018/58133/N0/N0/9999' },
                'lezioni di Algoritmi e Strutture Dati'
            ),
            ' del ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/didattica/mlaurea.html?ID=54' },
                'corso triennale di Informatica'
            ),
            ' all\'',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/' },
                'Unimore'
            ),
            ', tenute dalla ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://personale.unimore.it/rubrica/dettaglio/mmontangero' },
                'Prof.ssa Manuela Montangero'
            ),
            ' nel secondo semestre dell\'Anno Accademico 2018/2019.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: '/vldigeometria' },
                'Videolezioni di Geometria'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Ottime videolezioni di Geometria con licenza ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/' },
                'CC BY-NC-SA 4.0'
            ),
            ' che ho trovato sul ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://dolly.fim.unimore.it/2018/course/view.php?id=14#section-0' },
                'portale Dolly 2018'
            ),
            ' dell\'',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/' },
                'Unimore'
            ),
            '.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: '/mingwinstall' },
                'Come installare MinGW'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Un breve tutorial con immagini su come installare e configurare ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://it.wikipedia.org/wiki/MinGW' },
                'MinGW'
            ),
            ' per compilare programmi C e C++ su Windows.'
        )
    )
);

var _ref3 = Object(preact_min["h"])(
    split_Split,
    { title: 'Altri collegamenti utili' },
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: 'https://t.me/unimoreinfo' },
                '@unimoreinfo'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Il gruppo ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://telegram.org/' },
                'Telegram'
            ),
            ' del corso di Informatica dell\'Unimore!'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: 'https://calendar.google.com/calendar?cid=MmYza2o2M3VuZWQ1cmZqaGpmOGY0MWFrNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ' },
                'Calendario Lezioni'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Calendario Google ',
            Object(preact_min["h"])(
                'small',
                null,
                'quasi'
            ),
            ' sempre aggiornato delle lezioni e degli esami del secondo anno dell\'',
            Object(preact_min["h"])(
                'a',
                { href: 'https://www.unimore.it/' },
                'Unimore'
            ),
            ' durante l\'Anno Accademico 2019/2020.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: 'http://erre2.fermitech.info/dashboard' },
                'Erre2'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Portale contenente appunti e riassunti mantenuto da ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://github.com/LBindustries' },
                'Lorenzo Balugani'
            ),
            '.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: Object(preact_min["h"])(
                'a',
                { href: 'https://github.com/vezzalinistefano/Appunti-Algoritmi' },
                'vezzalinistefano/Appunti-Algoritmi'
            ) },
        Object(preact_min["h"])(
            'p',
            null,
            'Appunti di Algoritmi e Strutture Dati mantenuti da ',
            Object(preact_min["h"])(
                'a',
                { href: 'https://github.com/vezzalinistefano/' },
                'Vezzalini Stefano'
            ),
            '.'
        )
    )
);

var home_Home = function (_Component) {
    home__inherits(Home, _Component);

    function Home() {
        home__classCallCheck(this, Home);

        return home__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Home.prototype.render = function render() {
        return Object(preact_min["h"])(
            'div',
            { style: home_default.a.home },
            _ref,
            _ref2,
            _ref3
        );
    };

    return Home;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./pages/fisica.css
var fisica = __webpack_require__("0lnO");
var fisica_default = /*#__PURE__*/__webpack_require__.n(fisica);

// EXTERNAL MODULE: ./components/latex.css
var latex = __webpack_require__("+uq9");
var latex_default = /*#__PURE__*/__webpack_require__.n(latex);

// CONCATENATED MODULE: ./components/latex.js


function latex__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function latex__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function latex__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var latex_Latex = function (_Component) {
	latex__inherits(Latex, _Component);

	function Latex() {
		latex__classCallCheck(this, Latex);

		return latex__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Latex.prototype.render = function render() {
		var equation = '{\\color{White} ' + this.props.children + ' }';
		return Object(preact_min["h"])('img', { src: 'https://latex.codecogs.com/svg.latex?' + equation,
			alt: this.props.children,
			title: this.props.children,
			'class': latex_default.a.latex
		});
	};

	return Latex;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/plus.css
var plus = __webpack_require__("ddTt");
var plus_default = /*#__PURE__*/__webpack_require__.n(plus);

// CONCATENATED MODULE: ./components/plus.js


function plus__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function plus__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function plus__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var plus_Plus = function (_Component) {
	plus__inherits(Plus, _Component);

	function Plus() {
		plus__classCallCheck(this, Plus);

		return plus__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Plus.prototype.render = function render() {
		return Object(preact_min["h"])(
			"span",
			{ "class": plus_default.a.plus },
			this.props.children
		);
	};

	return Plus;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/minus.css
var minus = __webpack_require__("MeW5");
var minus_default = /*#__PURE__*/__webpack_require__.n(minus);

// CONCATENATED MODULE: ./components/minus.js


function minus__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function minus__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function minus__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var minus_Minus = function (_Component) {
	minus__inherits(Minus, _Component);

	function Minus() {
		minus__classCallCheck(this, Minus);

		return minus__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Minus.prototype.render = function render() {
		return Object(preact_min["h"])(
			"span",
			{ "class": minus_default.a.minus },
			this.props.children
		);
	};

	return Minus;
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
    _templateObject9 = _taggedTemplateLiteralLoose(['\x0Bec{c} = \x0Bec{a} \times \x0Bec{b}'], ['\\vec{c} = \\vec{a} \\times \\vec{b}']),
    _templateObject10 = _taggedTemplateLiteralLoose(['left | \x0Bec{c} \right | = left | \x0Bec{a} \right | cdot left | \x0Bec{b} \right | cdot sin(alpha)'], ['\\left | \\vec{c} \\right | = \\left | \\vec{a} \\right | \\cdot \\left | \\vec{b} \\right | \\cdot \\sin(\\alpha)']),
    _templateObject11 = _taggedTemplateLiteralLoose(['Sigma \x0Bec{F} = 0 Longleftrightarrow Delta v = 0'], ['\\Sigma \\vec{F} = 0 \\Longleftrightarrow \\Delta v = 0']),
    _templateObject12 = _taggedTemplateLiteralLoose(['Sigma \x0Bec{F} = m \x0Bec{a}'], ['\\Sigma \\vec{F} = m \\vec{a}']),
    _templateObject13 = _taggedTemplateLiteralLoose(['\x0Bec{F}_{21} = -\x0Bec{F}_{12}'], ['\\vec{F}_{21} = -\\vec{F}_{12}']),
    _templateObject14 = _taggedTemplateLiteralLoose(['left | \x0Bec{F} \right | = G \frac{m_1 m_2}{s^2}'], ['\\left | \\vec{F} \\right | = G \\frac{m_1 m_2}{s^2}']),
    _templateObject15 = _taggedTemplateLiteralLoose(['G = 6.67 cdot 10^{-11} \frac{N m^2}{{kg}^2}'], ['G = 6.67 \\cdot 10^{-11} \\frac{N m^2}{{kg}^2}']),
    _templateObject16 = _taggedTemplateLiteralLoose(['left | \x0Bec{F} \right | = g m'], ['\\left | \\vec{F} \\right | = g m']),
    _templateObject17 = _taggedTemplateLiteralLoose(['g = 9.81 \frac{m}{s^2}'], ['g = 9.81 \\frac{m}{s^2}']),
    _templateObject18 = _taggedTemplateLiteralLoose(['g_{luna} = 1.62 \frac{m}{s^2}'], ['g_{luna} = 1.62 \\frac{m}{s^2}']),
    _templateObject19 = _taggedTemplateLiteralLoose(['g_{marte} = 3.71 \frac{m}{s^2}'], ['g_{marte} = 3.71 \\frac{m}{s^2}']),
    _templateObject20 = _taggedTemplateLiteralLoose(['left | \x0Bec{F} \right | leq mu_{s} left | \x0Bec{F}_{normale} \right |'], ['\\left | \\vec{F} \\right | \\leq \\mu_{s} \\left | \\vec{F}_{normale} \\right |']),
    _templateObject21 = _taggedTemplateLiteralLoose(['left | \x0Bec{F} \right | leq mu_{d} left | \x0Bec{F}_{normale} \right |'], ['\\left | \\vec{F} \\right | \\leq \\mu_{d} \\left | \\vec{F}_{normale} \\right |']),
    _templateObject22 = _taggedTemplateLiteralLoose(['F = -k x'], ['F = -k x']),
    _templateObject23 = _taggedTemplateLiteralLoose(['Delta \x0Bec{s} = \x0Bec{s}(fine) - \x0Bec{s}(inizio)'], ['\\Delta \\vec{s} = \\vec{s}(fine) - \\vec{s}(inizio)']),
    _templateObject24 = _taggedTemplateLiteralLoose(['\x0Bec{v} = \frac{Delta \x0Bec{s}}{Delta t}'], ['\\vec{v} = \\frac{\\Delta \\vec{s}}{\\Delta t}']),
    _templateObject25 = _taggedTemplateLiteralLoose(['\x0Bec{v} = lim_{Delta t \to 0} \frac{Delta \x0Bec{s}}{Delta t} = \frac{d \x0Bec{s}}{dt}'], ['\\vec{v} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{s}}{\\Delta t} = \\frac{d \\vec{s}}{dt}']),
    _templateObject26 = _taggedTemplateLiteralLoose(['\x0Bec{a} = \frac{Delta \x0Bec{v}}{Delta t}'], ['\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}']),
    _templateObject27 = _taggedTemplateLiteralLoose(['\x0Bec{a} = lim_{Delta v \to 0} \frac{Delta \x0Bec{v}}{Delta t} = \frac{d \x0Bec{v}}{d t} = \frac{d^2 \x0Bec{s}}{d t^2}'], ['\\vec{a} = \\lim_{\\Delta v \\to 0} \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{d \\vec{v}}{d t} = \\frac{d^2 \\vec{s}}{d t^2}']),
    _templateObject28 = _taggedTemplateLiteralLoose(['\x0Bec{p} = m \x0Bec{v}'], ['\\vec{p} = m \\vec{v}']),
    _templateObject29 = _taggedTemplateLiteralLoose(['Sigma \x0Bec{F} = 0 Longleftrightarrow Delta \x0Bec{p} = 0'], ['\\Sigma \\vec{F} = 0 \\Longleftrightarrow \\Delta \\vec{p} = 0']),
    _templateObject30 = _taggedTemplateLiteralLoose(['s(t) = v cdot Delta t + s(0)'], ['s(t) = v \\cdot \\Delta t + s(0)']),
    _templateObject31 = _taggedTemplateLiteralLoose(['v(t) = k'], ['v(t) = k']),
    _templateObject32 = _taggedTemplateLiteralLoose(['a(t) = 0'], ['a(t) = 0']),
    _templateObject33 = _taggedTemplateLiteralLoose(['s(t) = \frac{1}{2} a cdot (Delta t)^2 + v(0) cdot (Delta t) + s(0)'], ['s(t) = \\frac{1}{2} a \\cdot (\\Delta t)^2 + v(0) \\cdot (\\Delta t) + s(0)']),
    _templateObject34 = _taggedTemplateLiteralLoose(['v(t) = a Delta t + v(0)'], ['v(t) = a \\Delta t + v(0)']),
    _templateObject35 = _taggedTemplateLiteralLoose(['a(t) = k'], ['a(t) = k']),
    _templateObject36 = _taggedTemplateLiteralLoose(['omega = \frac{2 pi}{T}'], ['\\omega = \\frac{2 \\pi}{T}']),
    _templateObject37 = _taggedTemplateLiteralLoose(['s(t) = A sin (omega cdot t + phi)'], ['s(t) = A \\sin (\\omega \\cdot t + \\phi)']),
    _templateObject38 = _taggedTemplateLiteralLoose(['\frac{pi}{2}'], ['\\frac{\\pi}{2}']),
    _templateObject39 = _taggedTemplateLiteralLoose(['v(t) = A sin (omega cdot t + phi + \frac{pi}{2})'], ['v(t) = A \\sin (\\omega \\cdot t + \\phi + \\frac{\\pi}{2})']),
    _templateObject40 = _taggedTemplateLiteralLoose(['pi'], ['\\pi']),
    _templateObject41 = _taggedTemplateLiteralLoose(['a(t) = A sin (omega cdot t + phi + pi)'], ['a(t) = A \\sin (\\omega \\cdot t + \\phi + \\pi)']),
    _templateObject42 = _taggedTemplateLiteralLoose(['phi'], ['\\phi']),
    _templateObject43 = _taggedTemplateLiteralLoose(['v = \frac{Delta s}{t} = \frac{2 pi cdot r}{T} = omega r'], ['v = \\frac{\\Delta s}{t} = \\frac{2 \\pi \\cdot r}{T} = \\omega r']),
    _templateObject44 = _taggedTemplateLiteralLoose(['a = \frac{v^2}{r} = r cdot omega^2 = v cdot omega'], ['a = \\frac{v^2}{r} = r \\cdot \\omega^2 = v \\cdot \\omega']),
    _templateObject45 = _taggedTemplateLiteralLoose(['F = m cdot a'], ['F = m \\cdot a']),
    _templateObject46 = _taggedTemplateLiteralLoose(['W = \x0Bec{F} cdot \x0Bec{s} = F cdot Delta s cdot cos(alpha )'], ['W = \\vec{F} \\cdot \\vec{s} = F \\cdot \\Delta s \\cdot cos(\\alpha )']),
    _templateObject47 = _taggedTemplateLiteralLoose(['E_c = \frac{1}{2} m v^2'], ['E_c = \\frac{1}{2} m v^2']),
    _templateObject48 = _taggedTemplateLiteralLoose(['Delta E_c = W'], ['\\Delta E_c = W']),
    _templateObject49 = _taggedTemplateLiteralLoose(['E_{p_g} = m cdot g cdot h'], ['E_{p_g} = m \\cdot g \\cdot h']),
    _templateObject50 = _taggedTemplateLiteralLoose(['E_{p_e} = \frac{1}{2} k x^2'], ['E_{p_e} = \\frac{1}{2} k x^2']),
    _templateObject51 = _taggedTemplateLiteralLoose(['E = E_k + E_p'], ['E = E_k + E_p']),
    _templateObject52 = _taggedTemplateLiteralLoose(['P = \frac{Delta E}{Delta t}'], ['P = \\frac{\\Delta E}{\\Delta t}']),
    _templateObject53 = _taggedTemplateLiteralLoose(['C_{elettrone} = 1.602 cdot 10^{-19}'], ['C_{elettrone} = 1.602 \\cdot 10^{-19}']),
    _templateObject54 = _taggedTemplateLiteralLoose(['left | \x0Bec{F}_{elettrica} \right | = \frac{-k cdot q_1 cdot q_2}{s^2}'], ['\\left | \\vec{F}_{elettrica} \\right | = \\frac{-k \\cdot q_1 \\cdot q_2}{s^2}']),
    _templateObject55 = _taggedTemplateLiteralLoose(['k'], ['k']),
    _templateObject56 = _taggedTemplateLiteralLoose(['k = 8.99 cdot 10^9 \frac{N cdot m^2}{C^2}'], ['k = 8.99 \\cdot 10^9 \\frac{N \\cdot m^2}{C^2}']),
    _templateObject57 = _taggedTemplateLiteralLoose(['epsilon_0'], ['\\epsilon_0']),
    _templateObject58 = _taggedTemplateLiteralLoose(['k = \frac{1}{4 pi cdot epsilon_0}'], ['k = \\frac{1}{4 \\pi \\cdot \\epsilon_0}']),
    _templateObject59 = _taggedTemplateLiteralLoose(['left | \x0Bec{F}_{elettrica} \right | = \frac{q_1 cdot q_2}{4 pi cdot epsilon_0 cdot s^2}'], ['\\left | \\vec{F}_{elettrica} \\right | = \\frac{q_1 \\cdot q_2}{4 \\pi \\cdot \\epsilon_0 \\cdot s^2}']),
    _templateObject60 = _taggedTemplateLiteralLoose(['\x0Bec{E} = \frac{\x0Bec{F}_{elettrica}}{q} = \frac{-k cdot q}{s^2}'], ['\\vec{E} = \\frac{\\vec{F}_{elettrica}}{q} = \\frac{-k \\cdot q}{s^2}']),
    _templateObject61 = _taggedTemplateLiteralLoose(['Phi_E = \x0Bec{E} cdot \x0Bec{A}'], ['\\Phi_E = \\vec{E} \\cdot \\vec{A}']),
    _templateObject62 = _taggedTemplateLiteralLoose(['Phi_E = \x0Bec{E} cdot \x0Bec{A} = E_perp cdot A cdot cos(alpha)'], ['\\Phi_E = \\vec{E} \\cdot \\vec{A} = E_\\perp \\cdot A \\cdot \\cos(\\alpha)']),
    _templateObject63 = _taggedTemplateLiteralLoose(['Phi_E = 4 pi cdot k cdot q = \frac{q}{epsilon_0}'], ['\\Phi_E = 4 \\pi \\cdot k \\cdot q = \\frac{q}{\\epsilon_0}']),
    _templateObject64 = _taggedTemplateLiteralLoose(['U_e'], ['U_e']),
    _templateObject65 = _taggedTemplateLiteralLoose(['V = \frac{U_e}{q}'], ['V = \\frac{U_e}{q}']),
    _templateObject66 = _taggedTemplateLiteralLoose(['V'], ['V']),
    _templateObject67 = _taggedTemplateLiteralLoose(['I = \frac{Delta q}{Delta t}'], ['I = \\frac{\\Delta q}{\\Delta t}']),
    _templateObject68 = _taggedTemplateLiteralLoose(['A'], ['A']),
    _templateObject69 = _taggedTemplateLiteralLoose(['P = \frac{Delta U_e}{Delta t} = I cdot Delta V = I^2 cdot R = \frac{(Delta V)^2}{R}'], ['P = \\frac{\\Delta U_e}{\\Delta t} = I \\cdot \\Delta V = I^2 \\cdot R = \\frac{(\\Delta V)^2}{R}']),
    _templateObject70 = _taggedTemplateLiteralLoose(['V = R cdot I'], ['V = R \\cdot I']),
    _templateObject71 = _taggedTemplateLiteralLoose(['R'], ['R']),
    _templateObject72 = _taggedTemplateLiteralLoose(['Omega'], ['\\Omega']),
    _templateObject73 = _taggedTemplateLiteralLoose(['R = \rho \frac{L_{unghezza}}{A_{rea}}'], ['R = \\rho \\frac{L_{unghezza}}{A_{rea}}']),
    _templateObject74 = _taggedTemplateLiteralLoose(['\rho'], ['\\rho']),
    _templateObject75 = _taggedTemplateLiteralLoose(['\rho = \rho_0 (1 + alpha(T - T_0))'], ['\\rho = \\rho_0 (1 + \\alpha(T - T_0))']),
    _templateObject76 = _taggedTemplateLiteralLoose(['C = \frac{q_{massima}}{Delta V}'], ['C = \\frac{q_{massima}}{\\Delta V}']),
    _templateObject77 = _taggedTemplateLiteralLoose(['C_{nuova} = kappa cdot \frac{epsilon_0 cdot A}{s}'], ['C_{nuova} = \\kappa \\cdot \\frac{\\epsilon_0 \\cdot A}{s}']),
    _templateObject78 = _taggedTemplateLiteralLoose(['kappa'], ['\\kappa']),
    _templateObject79 = _taggedTemplateLiteralLoose(['s'], ['s']),
    _templateObject80 = _taggedTemplateLiteralLoose(['Fa'], ['Fa']),
    _templateObject81 = _taggedTemplateLiteralLoose(['R_{serie} = sum_{i=1}^{n} R_i'], ['R_{serie} = \\sum_{i=1}^{n} R_i']),
    _templateObject82 = _taggedTemplateLiteralLoose(['R_{parallelo} = \frac{1}{sum_{i=1}^{n} \frac{1}{R_i}}'], ['R_{parallelo} = \\frac{1}{\\sum_{i=1}^{n} \\frac{1}{R_i}}']),
    _templateObject83 = _taggedTemplateLiteralLoose(['C_{serie} = \frac{1}{sum_{i=1}^{n} \frac{1}{C_i}}'], ['C_{serie} = \\frac{1}{\\sum_{i=1}^{n} \\frac{1}{C_i}}']),
    _templateObject84 = _taggedTemplateLiteralLoose(['C_{parallelo} = sum_{i=1}^{n} C_n'], ['C_{parallelo} = \\sum_{i=1}^{n} C_n']),
    _templateObject85 = _taggedTemplateLiteralLoose(['mu_0 = 4 pi cdot 10^{-7} \frac{H}{m}'], ['\\mu_0 = 4 \\pi \\cdot 10^{-7} \\frac{H}{m}']),
    _templateObject86 = _taggedTemplateLiteralLoose(['\frac{N}{A^2}'], ['\\frac{N}{A^2}']),
    _templateObject87 = _taggedTemplateLiteralLoose(['B'], ['B']),
    _templateObject88 = _taggedTemplateLiteralLoose(['Phi_{B_{i}} = \x0Bec{B} cdot \x0Bec{L}_n = B cdot L_i cdot sin(alpha) = B_parallel cdot L_i'], ['\\Phi_{B_{i}} = \\vec{B} \\cdot \\vec{L}_n = B \\cdot L_i \\cdot \\sin(\\alpha) = B_\\parallel \\cdot L_i']),
    _templateObject89 = _taggedTemplateLiteralLoose(['Phi_{B} = sum_{i=0}^{n_{lati}} Phi_{Bn}'], ['\\Phi_{B} = \\sum_{i=0}^{n_{lati}} \\Phi_{Bn}']),
    _templateObject90 = _taggedTemplateLiteralLoose(['Wb = T cdot m^2'], ['Wb = T \\cdot m^2']),
    _templateObject91 = _taggedTemplateLiteralLoose(['Phi_B = mu_0 cdot I'], ['\\Phi_B = \\mu_0 \\cdot I']),
    _templateObject92 = _taggedTemplateLiteralLoose(['\x0Bec{F}_{B} = q cdot (\x0Bec{v} \times \x0Bec{B})'], ['\\vec{F}_{B} = q \\cdot (\\vec{v} \\times \\vec{B})']),
    _templateObject93 = _taggedTemplateLiteralLoose(['\x0Bec{B}'], ['\\vec{B}']),
    _templateObject94 = _taggedTemplateLiteralLoose(['\x0Bec{v}'], ['\\vec{v}']),
    _templateObject95 = _taggedTemplateLiteralLoose(['\x0Bec{F}_{magnetica} = I cdot (\x0Bec{L} \times \x0Bec{B})'], ['\\vec{F}_{magnetica} = I \\cdot (\\vec{L} \\times \\vec{B})']),
    _templateObject96 = _taggedTemplateLiteralLoose(['I'], ['I']),
    _templateObject97 = _taggedTemplateLiteralLoose(['\x0Bec{L}'], ['\\vec{L}']),
    _templateObject98 = _taggedTemplateLiteralLoose(['left | \x0Bec{B} \right | = mu_0 cdot I cdot \frac{A_{vvolgimenti}}{L_{unghezzafilo}}'], ['\\left | \\vec{B} \\right | = \\mu_0 \\cdot I \\cdot \\frac{A_{vvolgimenti}}{L_{unghezzafilo}}']),
    _templateObject99 = _taggedTemplateLiteralLoose(['left | \x0Bec{B} \right | = \frac{mu cdot I}{2 pi r}'], ['\\left | \\vec{B} \\right | = \\frac{\\mu \\cdot I}{2 \\pi r}']),
    _templateObject100 = _taggedTemplateLiteralLoose(['Delta V_{indotta} = v cdot B cdot L'], ['\\Delta V_{indotta} = v \\cdot B \\cdot L']),
    _templateObject101 = _taggedTemplateLiteralLoose(['Phi_B = \x0Bec{B} cdot \x0Bec{A} = B cdot A cdot cos(alpha)'], ['\\Phi_B = \\vec{B} \\cdot \\vec{A} = B \\cdot A \\cdot \\cos(\\alpha)']),
    _templateObject102 = _taggedTemplateLiteralLoose(['Delta V_{indotta} = - \frac{Delta Phi_B}{Delta t}'], ['\\Delta V_{indotta} = - \\frac{\\Delta \\Phi_B}{\\Delta t}']),
    _templateObject103 = _taggedTemplateLiteralLoose(['Delta V_{indotta} = - \frac{N cdot Delta Phi_{B_{spira}}}{Delta t} = - \frac{N cdot B cdot A cdot cos(alpha)}{Delta t}'], ['\\Delta V_{indotta} = - \\frac{N \\cdot \\Delta \\Phi_{B_{spira}}}{\\Delta t} = - \\frac{N \\cdot B \\cdot A \\cdot cos(\\alpha)}{\\Delta t}']),
    _templateObject104 = _taggedTemplateLiteralLoose(['N'], ['N']),
    _templateObject105 = _taggedTemplateLiteralLoose(['E'], ['E']),
    _templateObject106 = _taggedTemplateLiteralLoose(['E = c cdot B'], ['E = c \\cdot B']),
    _templateObject107 = _taggedTemplateLiteralLoose(['c'], ['c']),
    _templateObject108 = _taggedTemplateLiteralLoose(['c = \frac{1}{sqrt{epsilon_0 cdot mu_0}} = 3.00 cdot 10^8 \frac{m}{s}'], ['c = \\frac{1}{\\sqrt{\\epsilon_0 \\cdot \\mu_0}} = 3.00 \\cdot 10^8 \\frac{m}{s}']),
    _templateObject109 = _taggedTemplateLiteralLoose(['A(t) = A_{max} cdot sin left ( \frac{2 pi}{lambda} - omega t + phi \right )'], ['A(t) = A_{max} \\cdot \\sin \\left ( \\frac{2 \\pi}{\\lambda} - \\omega t + \\phi \\right )']),
    _templateObject110 = _taggedTemplateLiteralLoose(['A_{max}'], ['A_{max}']),
    _templateObject111 = _taggedTemplateLiteralLoose(['\frac{2 pi}{lambda} = left | \x0Bec{k} \right |'], ['\\frac{2 \\pi}{\\lambda} = \\left | \\vec{k} \\right |']),
    _templateObject112 = _taggedTemplateLiteralLoose(['omega'], ['\\omega']),
    _templateObject113 = _taggedTemplateLiteralLoose(['\frac{1}{lambda} = R left ( \frac{1}{4} - \frac{1}{n^2} \right )'], ['\\frac{1}{\\lambda} = R \\left ( \\frac{1}{4} - \\frac{1}{n^2} \\right )']),
    _templateObject114 = _taggedTemplateLiteralLoose(['R = 1.097 cdot 10^7 \frac{1}{m}'], ['R = 1.097 \\cdot 10^7 \\frac{1}{m}']),
    _templateObject115 = _taggedTemplateLiteralLoose(['n'], ['n']),
    _templateObject116 = _taggedTemplateLiteralLoose(['h'], ['h']),
    _templateObject117 = _taggedTemplateLiteralLoose(['hbar = left ( \frac{h}{2 pi} \right )'], ['\\hbar = \\left ( \\frac{h}{2 \\pi} \\right )']),
    _templateObject118 = _taggedTemplateLiteralLoose(['m cdot v_n cdot 2 pi cdot r = n cdot h'], ['m \\cdot v_n \\cdot 2 \\pi \\cdot r = n \\cdot h']),
    _templateObject119 = _taggedTemplateLiteralLoose(['r_n = n^2 cdot a_0 = n^2 cdot \frac{hbar}{m_{elettrone} cdot k cdot e^2} '], ['r_n = n^2 \\cdot a_0 = n^2 \\cdot \\frac{\\hbar}{m_{elettrone} \\cdot k \\cdot e^2} ']),
    _templateObject120 = _taggedTemplateLiteralLoose(['a_0 = left ( \frac{h}{2 pi} \right )^2 cdot \frac{1}{m_{elettrone} cdot k cdot e^2} = 5.29 cdot 10^{-11} m'], ['a_0 = \\left ( \\frac{h}{2 \\pi} \\right )^2 \\cdot \\frac{1}{m_{elettrone} \\cdot k \\cdot e^2} = 5.29 \\cdot 10^{-11} m']),
    _templateObject121 = _taggedTemplateLiteralLoose(['E_n = \frac{1}{n^2} cdot E_1 = - \frac{1}{n^2} cdot \frac{a_0^2}{2 cdot m cdot hbar^4} = - \frac{1}{n^2} cdot \frac{m_{elettrone} cdot k^2 cdot e^4}{2 cdot hbar^2}'], ['E_n = \\frac{1}{n^2} \\cdot E_1 = - \\frac{1}{n^2} \\cdot \\frac{a_0^2}{2 \\cdot m \\cdot \\hbar^4} = - \\frac{1}{n^2} \\cdot \\frac{m_{elettrone} \\cdot k^2 \\cdot e^4}{2 \\cdot \\hbar^2}']),
    _templateObject122 = _taggedTemplateLiteralLoose(['10^1 eV'], ['10^1 eV']),
    _templateObject123 = _taggedTemplateLiteralLoose(['1 eV'], ['1 eV']),
    _templateObject124 = _taggedTemplateLiteralLoose(['lambda'], ['\\lambda']),
    _templateObject125 = _taggedTemplateLiteralLoose(['lambda_{max} cdot T'], ['\\lambda_{max} \\cdot T']),
    _templateObject126 = _taggedTemplateLiteralLoose(['E_{fotone} = h cdot f'], ['E_{fotone} = h \\cdot f']);



function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function fisica__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function fisica__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function fisica__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var r = String.raw;

var fisica__ref = Object(preact_min["h"])(
    'h1',
    null,
    'Fisica'
);

var fisica__ref2 = Object(preact_min["h"])(
    'p',
    null,
    'Usa le regole base della trigonometria:'
);

var fisica__ref3 = Object(preact_min["h"])(
    'p',
    null,
    'Scomponi in componenti, poi sommali:'
);

var _ref4 = Object(preact_min["h"])(
    'p',
    null,
    'Produce il vettore risultante dall\'applicazione della regola del parallelogramma.'
);

var _ref5 = Object(preact_min["h"])(
    'p',
    null,
    'Alla fine \xE8 sempre una somma:'
);

var _ref6 = Object(preact_min["h"])(
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

var _ref7 = Object(preact_min["h"])(
    'p',
    null,
    'Si chiama scalare perch\xE8 il risultato \xE8 uno scalare, non un vettore.'
);

var _ref8 = Object(preact_min["h"])(
    'p',
    null,
    'Si chiama vettoriale perch\xE8 il risultato \xE8 un altro vettore.'
);

var _ref9 = Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
        'a',
        { href: 'https://it.wikipedia.org/wiki/Regola_della_mano_destra' },
        'Regola della mano destra'
    )
);

var _ref10 = Object(preact_min["h"])(
    'p',
    null,
    'Non \xE8 commutativo!'
);

var _ref11 = Object(preact_min["h"])(
    'p',
    null,
    'Se un corpo puntiforme ha forza risultante nulla, allora la sua velocit\xE0 non cambia.'
);

var _ref12 = Object(preact_min["h"])(
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

var _ref13 = Object(preact_min["h"])(
    'p',
    null,
    'Due corpi esercitano forze uguali e opposte uno sull\'altro.'
);

var _ref14 = Object(preact_min["h"])(
    'p',
    null,
    'Due corpi puntiformi si attirano uno verso l\'altro con forza:'
);

var _ref15 = Object(preact_min["h"])(
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

var _ref16 = Object(preact_min["h"])(
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

var _ref17 = Object(preact_min["h"])(
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

var _ref18 = Object(preact_min["h"])(
    'p',
    null,
    'Per pianeti diversi dalla Terra vale la stessa regola:'
);

var _ref19 = Object(preact_min["h"])(
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

var _ref20 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Normale' },
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

var _ref21 = Object(preact_min["h"])(
    'p',
    null,
    'Impedisce a un corpo di muoversi se non viene spinto da una forza che supera una certa soglia:'
);

var _ref22 = Object(preact_min["h"])(
    'p',
    null,
    'Rallenta i corpi che si stanno muovendo finch\xE8 essi non si fermano:'
);

var _ref23 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Tensione' },
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

var _ref24 = Object(preact_min["h"])(
    'p',
    null,
    'Una molla cerca sempre di tornare alla sua posizione indeformata con forza:'
);

var _ref25 = Object(preact_min["h"])(
    'p',
    null,
    '(E\' negativa perch\xE8 la forza \xE8 opposta a quella applicata per deformarla.)'
);

var _ref26 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 un vettore che indica la posizione di un corpo rispetto a un\'origine.'
);

var _ref27 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 un vettore che misura la variazione di posizione nel tempo.'
);

var _ref28 = Object(preact_min["h"])(
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

var _ref29 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 un vettore che misura la variazione di velocit\xE0 nel tempo.'
);

var _ref30 = Object(preact_min["h"])(
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

var _ref31 = Object(preact_min["h"])(
    'span',
    null,
    'Quantit\xE0 di moto ',
    Object(preact_min["h"])(
        'small',
        null,
        '(momento lineare)'
    )
);

var _ref32 = Object(preact_min["h"])(
    'p',
    null,
    'La quantit\xE0 di moto \xE8 una propriet\xE0 vettoriale dei corpi:'
);

var _ref33 = Object(preact_min["h"])(
    'p',
    null,
    'Se la forza risultante \xE8 nulla, la quantit\xE0 di moto non cambia.'
);

var _ref34 = Object(preact_min["h"])(
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

var _ref35 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 costante:'
);

var _ref36 = Object(preact_min["h"])(
    'p',
    null,
    'La velocit\xE0 non varia:'
);

var _ref37 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Forze' },
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

var _ref38 = Object(preact_min["h"])(
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

var _ref39 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 una retta:'
);

var _ref40 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 costante:'
);

var _ref41 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Forze' },
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

var _ref42 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Ampiezza' },
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

var _ref43 = Object(preact_min["h"])(
    'p',
    null,
    'Indica quanto in fretta cambia la posizione del corpo.'
);

var _ref44 = Object(preact_min["h"])(
    'p',
    null,
    'Dipende dal periodo:'
);

var _ref45 = Object(preact_min["h"])(
    'p',
    null,
    'E\' una sinusoide:'
);

var _ref46 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Forze' },
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

var _ref47 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Moto parabolico' },
    Object(preact_min["h"])(
        'p',
        null,
        'Il moto parabolico \xE8 dato sommando un moto rettilineo uniforme sull\'asse orizzontale e un moto rettilineo uniformemente accelerato sull\'asse verticale.'
    )
);

var _ref48 = Object(preact_min["h"])(
    'h3',
    null,
    'Velocit\xE0 angolare'
);

var _ref49 = Object(preact_min["h"])(
    'p',
    null,
    'Quanto cambia la fase nel tempo.'
);

var _ref50 = Object(preact_min["h"])(
    'p',
    null,
    'E\' l\'angolo percorso dal corpo rispetto alla posizione iniziale.'
);

var _ref51 = Object(preact_min["h"])(
    'p',
    null,
    'Si applicano le formule per la circonferenza:'
);

var _ref52 = Object(preact_min["h"])(
    'p',
    null,
    'Il corpo ha sempre un accelerazione verso il centro che gli impedisce di abbandonare il moto:'
);

var _ref53 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 verso il centro e si calcola con:'
);

var _ref54 = Object(preact_min["h"])(
    'p',
    null,
    'E\' compiuto da una forza che sposta un corpo.'
);

var _ref55 = Object(preact_min["h"])(
    'p',
    null,
    '(Se la forza non \xE8 parallela allo spostamento, il prodotto scalare ci fa considerare solo la componente parallela.)'
);

var _ref56 = Object(preact_min["h"])(
    'p',
    null,
    'Un corpo ha energia cinetica in ogni momento uguale a:'
);

var _ref57 = Object(preact_min["h"])(
    'p',
    null,
    'Se una forza effettua lavoro su un corpo, cambia la sua energia cinetica pari al lavoro effettuato:'
);

var _ref58 = Object(preact_min["h"])(
    'p',
    null,
    'Un corpo ha energia potenziale in ogni momento pari a:'
);

var _ref59 = Object(preact_min["h"])(
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

var _ref60 = Object(preact_min["h"])(
    'p',
    null,
    'Una molla ha sempre energia potenziale elastica pari a:'
);

var _ref61 = Object(preact_min["h"])(
    'p',
    null,
    'Sono conservative le forze per le quali il lavoro compiuto non dipende dal percorso seguito per andare dalla partenza all\'arrivo.'
);

var _ref62 = Object(preact_min["h"])(
    'p',
    null,
    'Ad esempio, \xE8 conservativa la ',
    Object(preact_min["h"])(
        'i',
        null,
        'forza di gravit\xE0'
    ),
    ', ma ',
    Object(preact_min["h"])(
        'b',
        null,
        'non'
    ),
    ' \xE8 conservativa la forza di attrito.'
);

var _ref63 = Object(preact_min["h"])(
    'p',
    null,
    'Se in un sistema ci sono solo forze conservative, allora l\'energia meccanica totale si conserva:'
);

var _ref64 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 la velocit\xE0 di trasferimento di energia:'
);

var _ref65 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 una propriet\xE0 dei corpi che pu\xF2 essere ',
    Object(preact_min["h"])(
        plus_Plus,
        null,
        'positiva'
    ),
    ' o ',
    Object(preact_min["h"])(
        minus_Minus,
        null,
        'negativa'
    ),
    '.'
);

var _ref66 = Object(preact_min["h"])(
    'p',
    null,
    'Si conserva: in un sistema chiuso la carica totale \xE8 costante.'
);

var _ref67 = Object(preact_min["h"])(
    'p',
    null,
    'Cariche ',
    Object(preact_min["h"])(
        plus_Plus,
        null,
        'opp'
    ),
    Object(preact_min["h"])(
        minus_Minus,
        null,
        'oste'
    ),
    ' si attraggono; cariche ',
    Object(preact_min["h"])(
        plus_Plus,
        null,
        'uguali'
    ),
    ' si respingono.'
);

var _ref68 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Conduttori e isolanti' },
    Object(preact_min["h"])(
        'p',
        null,
        'Pi\xF9 ',
        Object(preact_min["h"])(
            'a',
            { href: 'https://it.wikipedia.org/wiki/Ione' },
            'ioni'
        ),
        ' ha un corpo, meglio la carica si muove attraverso di esso.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'I corpi in cui la carica si muove bene sono ',
        Object(preact_min["h"])(
            'i',
            null,
            'conduttori'
        ),
        ', mentre quelli in cui si muove difficilmente sono ',
        Object(preact_min["h"])(
            'i',
            null,
            'isolanti'
        ),
        '.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        Object(preact_min["h"])(
            'i',
            null,
            'Il corpo umano \xE8 un buon conduttore.'
        )
    )
);

var _ref69 = Object(preact_min["h"])(
    split_Split,
    { title: 'Polarizzazione' },
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Polarizzazione' },
        Object(preact_min["h"])(
            'p',
            null,
            'E\' possibile polarizzare un corpo per accumulare la carica di un segno in una certa zona.'
        )
    )
);

var _ref70 = Object(preact_min["h"])(
    split_Split,
    null,
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Messa a terra' },
        Object(preact_min["h"])(
            'p',
            null,
            'Se un corpo conduttore \xE8 in contatto con la Terra, le cariche su di esso saranno ',
            Object(preact_min["h"])(
                'i',
                null,
                'equilibrate'
            ),
            ' e il corpo diventer\xE0 elettricamente neutro (con stesso numero di ',
            Object(preact_min["h"])(
                plus_Plus,
                null,
                'cariche positive'
            ),
            ' e ',
            Object(preact_min["h"])(
                minus_Minus,
                null,
                'negative'
            ),
            ' all\'interno).'
        )
    )
);

var _ref71 = Object(preact_min["h"])(
    split_Split,
    null,
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Polarizzazione per strofinio' },
        Object(preact_min["h"])(
            'p',
            null,
            'Strofinando tra loro due corpi isolanti, essi si ',
            Object(preact_min["h"])(
                'i',
                null,
                'polarizzeranno per strofinio'
            ),
            '.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Polarizzazione per contatto' },
        Object(preact_min["h"])(
            'p',
            null,
            'Toccando un conduttore con un corpo carico, il conduttore potr\xE0 ',
            Object(preact_min["h"])(
                'i',
                null,
                'polarizzarsi per contatto'
            ),
            '.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Polarizzazione per induzione' },
        Object(preact_min["h"])(
            'p',
            null,
            'Se un corpo conduttore ha cariche "esterne" di un ',
            Object(preact_min["h"])(
                plus_Plus,
                null,
                'certo segno'
            ),
            ' vicino, esso avr\xE0 tutte le cariche del ',
            Object(preact_min["h"])(
                minus_Minus,
                null,
                'segno opposto'
            ),
            ' in equilibrio vicino alle cariche esterne, e tutte le cariche dello ',
            Object(preact_min["h"])(
                plus_Plus,
                null,
                'stesso segno'
            ),
            ' pi\xF9 lontano possibile da esse.'
        ),
        Object(preact_min["h"])(
            'p',
            null,
            'Mettendo a terra il conduttore, nuove cariche del ',
            Object(preact_min["h"])(
                minus_Minus,
                null,
                'segno opposto'
            ),
            ' saranno attratte all\'interno del corpo per equilibrare le cariche che si sono allontanate.'
        ),
        Object(preact_min["h"])(
            'p',
            null,
            'Staccando il conduttore da terra e rimuovendo le cariche esterne, esso si ritrover\xE0 ',
            Object(preact_min["h"])(
                minus_Minus,
                null,
                'caricato del segno opposto'
            ),
            ' rispetto alle cariche esterne.'
        )
    )
);

var _ref72 = Object(preact_min["h"])(
    'p',
    null,
    'Due corpi carichi si attraggono tra loro con forza:'
);

var _ref73 = Object(preact_min["h"])(
    'i',
    null,
    'costante di Coulomb'
);

var _ref74 = Object(preact_min["h"])(
    'i',
    null,
    'permeabilit\xE0 del vuoto'
);

var _ref75 = Object(preact_min["h"])(
    'p',
    null,
    'Misura che forza viene applicata in ogni punto su una carica unitaria:'
);

var _ref76 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 la differenza tra "quanto" campo elettrico ',
    Object(preact_min["h"])(
        plus_Plus,
        null,
        'entra'
    ),
    ' e quanto campo elettrico ',
    Object(preact_min["h"])(
        minus_Minus,
        null,
        'esce'
    ),
    ' da una certa area.'
);

var _ref77 = Object(preact_min["h"])(
    'p',
    null,
    'In qualsiasi superficie chiusa, il flusso elettrico \xE8 uguale alla componente perpendicolare del campo elettrico moltiplicato per l\'area.'
);

var _ref78 = Object(preact_min["h"])(
    'p',
    null,
    'Se il campo elettrico \xE8 uniforme, se ne pu\xF2 calcolare facilmente il valore:'
);

var _ref79 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        todo_Todo,
        null,
        'Circa. E\' una specie di integrale...'
    )
);

var _ref80 = Object(preact_min["h"])(
    'p',
    null,
    'Il flusso elettrico \xE8 direttamente proporzionale alla carica presente all\'interno della superficie.'
);

var _ref81 = Object(preact_min["h"])(
    'p',
    null,
    'Ovvero, i campi elettrostatici sono generati dalle cariche elettriche.'
);

var _ref82 = Object(preact_min["h"])(
    'i',
    null,
    'energia potenziale elettrica'
);

var _ref83 = Object(preact_min["h"])(
    'span',
    null,
    'Potenziale elettrico ',
    Object(preact_min["h"])(
        'small',
        null,
        '(tensione)'
    )
);

var _ref84 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 il valore dell\'energia potenziale elettrica per una carica unitaria.'
);

var _ref85 = Object(preact_min["h"])(
    'p',
    null,
    'In una batteria \xE8 detto ',
    Object(preact_min["h"])(
        'i',
        null,
        'forza elettromotrice'
    ),
    ', e corrisponde al lavoro compiuto da una batteria ideale per spostare una carica unitaria tra i due poli.'
);

var _ref86 = Object(preact_min["h"])(
    'span',
    null,
    'Corrente elettrica ',
    Object(preact_min["h"])(
        'small',
        null,
        '(intensit\xE0)'
    )
);

var _ref87 = Object(preact_min["h"])(
    'p',
    null,
    'Quanta carica passa attraverso un\'area (perpendicolare al flusso) nel tempo.'
);

var _ref88 = Object(preact_min["h"])(
    'p',
    null,
    'Fintanto che c\'\xE8 differenza di potenziale, ci sar\xE0 anche intensit\xE0 non nulla.'
);

var _ref89 = Object(preact_min["h"])(
    panel_Panel,
    { title: Object(preact_min["h"])(
            'span',
            null,
            'Corrente continua ',
            Object(preact_min["h"])(
                'small',
                null,
                '(',
                Object(preact_min["h"])(
                    'abbr',
                    { title: 'Direct Current' },
                    'DC'
                ),
                ')'
            )
        ) },
    Object(preact_min["h"])(
        'p',
        null,
        'Quando in un circuito la direzione della corrente \xE8 costante.'
    )
);

var _ref90 = Object(preact_min["h"])(
    panel_Panel,
    { title: Object(preact_min["h"])(
            'span',
            null,
            'Corrente alternata ',
            Object(preact_min["h"])(
                'small',
                null,
                '(',
                Object(preact_min["h"])(
                    'abbr',
                    { title: 'Alternate Current' },
                    'AC'
                ),
                ')'
            )
        ) },
    Object(preact_min["h"])(
        'p',
        null,
        'Quando in un circuito la direzione della corrente si alterna periodicamente.'
    )
);

var _ref91 = Object(preact_min["h"])(
    'p',
    null,
    'Possiamo calcolare la potenza di un circuito:'
);

var _ref92 = Object(preact_min["h"])(
    'p',
    null,
    'Riduce l\'intensit\xE0 di corrente, e converte parte del potenziale in calore.'
);

var _ref93 = Object(preact_min["h"])(
    'p',
    null,
    'Il potenziale utilizzato \xE8 pari a:'
);

var _ref94 = Object(preact_min["h"])(
    'i',
    null,
    'resistenza'
);

var _ref95 = Object(preact_min["h"])(
    'p',
    null,
    'La resistenza di un conduttore vale:'
);

var _ref96 = Object(preact_min["h"])(
    'i',
    null,
    'resistivit\xE0'
);

var _ref97 = Object(preact_min["h"])(
    'p',
    null,
    'Immagazzina potenziale elettrico, permettendo di riutilizzarla in seguito.'
);

var _ref98 = Object(preact_min["h"])(
    'p',
    null,
    'Per farlo, cattura cariche ',
    Object(preact_min["h"])(
        plus_Plus,
        null,
        'positive'
    ),
    ' e ',
    Object(preact_min["h"])(
        minus_Minus,
        null,
        'negative'
    ),
    ' sulle sue due armature; perch\xE8 questo avvenga, deve essere compiuto lavoro.'
);

var _ref99 = Object(preact_min["h"])(
    'p',
    null,
    'Ha una ',
    Object(preact_min["h"])(
        'b',
        null,
        'capacit\xE0'
    ),
    ' caratteristica, che in un condensatore a facce piane parallele \xE8:'
);

var _ref100 = Object(preact_min["h"])(
    'p',
    null,
    'Condensatori di capacit\xE0 maggiore immagazzinano pi\xF9 potenziale con meno carica.'
);

var _ref101 = Object(preact_min["h"])(
    'p',
    null,
    'La capacit\xE0 aumenta se viene messo qualcosa tra le armature:'
);

var _ref102 = Object(preact_min["h"])(
    'i',
    null,
    'costante dielettrica relativa'
);

var _ref103 = Object(preact_min["h"])(
    'p',
    null,
    'Se il campo elettrico creatosi tra le due armature supera la ',
    Object(preact_min["h"])(
        'i',
        null,
        'rigidit\xE0 dielettrica'
    ),
    ' del condensatore, la carica immagazzinata viene persa e ha luogo un ',
    Object(preact_min["h"])(
        'i',
        null,
        'breakdown'
    ),
    '.'
);

var _ref104 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Amperometro' },
    Object(preact_min["h"])(
        'p',
        null,
        'Misura la corrente elettrica se messo in serie.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        '(Funzionamento: ha una resistenza interna bassisima in modo da non influire significativamente sulla corrente.)'
    )
);

var _ref105 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Voltmetro' },
    Object(preact_min["h"])(
        'p',
        null,
        'Misura la differenza di potenziale se messo in parallelo.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        '(Funzionamento: ha una resistenza altissima in modo da non influire significativamente sulla tensione.)'
    )
);

var _ref106 = Object(preact_min["h"])(
    split_Split,
    { title: 'Principi di Kirchhoff' },
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Legge dei nodi' },
        Object(preact_min["h"])(
            'p',
            null,
            'Per nodo si intende un qualsiasi punto del circuito.'
        ),
        Object(preact_min["h"])(
            'p',
            null,
            'Da un nodo entra ed esce la stessa corrente.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Legge delle maglie' },
        Object(preact_min["h"])(
            'p',
            null,
            'Per maglia si intende un qualsiasi percorso chiuso all\'interno del circuito.'
        ),
        Object(preact_min["h"])(
            'p',
            null,
            'In una maglia chiusa, la somma delle differenze di potenziale \xE8 0.'
        )
    )
);

var _ref107 = Object(preact_min["h"])(
    split_Split,
    { title: 'Serie e Parallelo' },
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Circuito in serie' },
        Object(preact_min["h"])(
            'p',
            null,
            'Pi\xF9 parti di circuito sono ',
            Object(preact_min["h"])(
                'i',
                null,
                'in serie'
            ),
            ' se sono consecutive e senza biforcazioni.'
        ),
        Object(preact_min["h"])(
            'p',
            null,
            'Parti di circuito in serie sono attraversate dalla stessa corrente.'
        )
    ),
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Circuito in parallelo' },
        Object(preact_min["h"])(
            'p',
            null,
            'Pi\xF9 parti di circuito sono ',
            Object(preact_min["h"])(
                'i',
                null,
                'in parallelo'
            ),
            ' tra loro se hanno lo stesso punto di partenza e lo stesso punto di arrivo.'
        ),
        Object(preact_min["h"])(
            'p',
            null,
            'Parti di circuito in parallelo hanno la stessa differenza di potenziale.'
        )
    )
);

var _ref108 = Object(preact_min["h"])(
    'p',
    null,
    'Nei circuiti in serie, tutte le resistenze possono essere sostituite con una equivalente dalla resistenza della somma di tutte le quelle sostituite:'
);

var _ref109 = Object(preact_min["h"])(
    'p',
    null,
    'Nei circuiti in parallelo, tutte le resistenze possono essere sostituite con una equivalente dalla resistenza di:'
);

var _ref110 = Object(preact_min["h"])(
    'p',
    null,
    'Nei circuiti in serie, tutti i condensatori possono essere sostituiti con uno equivalente dalla capacit\xE0 di:'
);

var _ref111 = Object(preact_min["h"])(
    'p',
    null,
    'Nei circuiti in parallelo, tutte i condensatori possono essere sostituite con uno equivalente dalla capacit\xE0 della somma di tutti quelli sostituiti:'
);

var _ref112 = Object(preact_min["h"])(
    'p',
    null,
    'E\' una costante fisica fondamentale che rappresenta quanto un materiale si magnetizza facilmente.'
);

var _ref113 = Object(preact_min["h"])(
    'p',
    null,
    'Come un campo elettrico, ma per i magneti.'
);

var _ref114 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'T'
);

var _ref115 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 "quanto" campo magnetico ',
    Object(preact_min["h"])(
        'b',
        null,
        'attraversa'
    ),
    ' un percorso chiuso.'
);

var _ref116 = Object(preact_min["h"])(
    'p',
    null,
    'Per qualsiasi percorso chiuso, il flusso magnetico \xE8 uguale alla somma di tutti i "sottoflussi" magnetici calcolati sui suoi lati.'
);

var _ref117 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Legge di Gauss per i campi magnetici' },
    Object(preact_min["h"])(
        'p',
        null,
        'Il flusso magnetico attraverso qualsiasi superficie chiusa \xE8 sempre nullo.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Ovvero, non esistono monopoli magnetici.'
    )
);

var _ref118 = Object(preact_min["h"])(
    'p',
    null,
    'L\'intensit\xE0 di corrente che attraversa un percorso chiuso \xE8 direttamente proporzionale al flusso magnetico dello stesso percorso.'
);

var _ref119 = Object(preact_min["h"])(
    'span',
    null,
    'Forza magnetica su carica puntiforme ',
    Object(preact_min["h"])(
        'small',
        null,
        '(Forza di Lorentz)'
    )
);

var _ref120 = Object(preact_min["h"])(
    'p',
    null,
    'I campi magnetici applicano una forza sulle cariche vicine:'
);

var _ref121 = Object(preact_min["h"])(
    'p',
    null,
    'Si ha una forza massima se la velocit\xE0 \xE8 perpendicolare al campo magnetico.'
);

var _ref122 = Object(preact_min["h"])(
    'p',
    null,
    'In un campo magnetico uniforme, una velocit\xE0 perpendicolare al campo porta alla creazione di un moto circolare uniforme.'
);

var _ref123 = Object(preact_min["h"])(
    'p',
    null,
    'I campi magnetici influenzano ovviamente anche le cariche presenti in un conduttore:'
);

var _ref124 = Object(preact_min["h"])(
    'a',
    { href: 'https://it.openprof.com/wb/forza_di_lorentz_su_un_filo_percorso_da_corrente?ch=360' },
    '[1]'
);

var _ref125 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Campo magnetico in una spira' },
    Object(preact_min["h"])(
        'p',
        null,
        'Una spira in cui passa corrente produce un campo magnetico perpendicolare al piano creato dalla spira.'
    )
);

var _ref126 = Object(preact_min["h"])(
    'p',
    null,
    'Un solenoide sono tante spire avvolte in modo da formare una specie di cilindro.'
);

var _ref127 = Object(preact_min["h"])(
    'p',
    null,
    'All\'interno del solenoide si crea un campo (quasi) uniforme:'
);

var _ref128 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        'i',
        null,
        'Caso particolare della ',
        Object(preact_min["h"])(
            'a',
            { href: 'https://it.wikipedia.org/wiki/Legge_di_Amp%C3%A8re' },
            'Legge di Amp\xE8re'
        ),
        '.'
    )
);

var _ref129 = Object(preact_min["h"])(
    'p',
    null,
    'Il modulo del campo magnetico ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'B'
    ),
    ' prodotto da un filo in cui passa una corrente continua ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'I'
    ),
    ' alla distanza ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        's'
    ),
    ' \xE8:'
);

var _ref130 = Object(preact_min["h"])(
    'p',
    null,
    'Il campo magnetico cos\xEC creato gira attorno al filo in senso antiorario.'
);

var _ref131 = Object(preact_min["h"])(
    'p',
    null,
    'Due fili attraversati dalla ',
    Object(preact_min["h"])(
        plus_Plus,
        null,
        'stessa corrente'
    ),
    ' si attraggono, due fili attraversati da ',
    Object(preact_min["h"])(
        plus_Plus,
        null,
        'corr'
    ),
    Object(preact_min["h"])(
        minus_Minus,
        null,
        'enti'
    ),
    ' ',
    Object(preact_min["h"])(
        plus_Plus,
        null,
        'opp'
    ),
    Object(preact_min["h"])(
        minus_Minus,
        null,
        'oste'
    ),
    ' si respingono.'
);

var _ref132 = Object(preact_min["h"])(
    'p',
    null,
    'Un conduttore perpendicolare ad un campo magnetico pu\xF2 ottenere una differenza di potenziale se messo in movimento in un direzione perpendicolare alla direzione del conduttore e del campo.'
);

var _ref133 = Object(preact_min["h"])(
    'p',
    null,
    'La differenza di potenziale si crea a causa della forza magnetica, che fa spostare tutti gli elettroni verso un capo del conduttore.'
);

var _ref134 = Object(preact_min["h"])(
    'p',
    null,
    'Essa vale:'
);

var _ref135 = Object(preact_min["h"])(
    'p',
    null,
    'Dove ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'v'
    ),
    ' \xE8 la velocit\xE0 del conduttore, ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'B'
    ),
    ' \xE8 l\'intensit\xE0 del campo magnetico ed ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'L'
    ),
    ' \xE8 la lunghezza del conduttore.'
);

var _ref136 = Object(preact_min["h"])(
    'i',
    null,
    'Legge di Faraday-Neumann-Lenz'
);

var _ref137 = Object(preact_min["h"])(
    'p',
    null,
    'Dice che la forza elettromotrice media indotta in un percorso dipende dalla variazione nel tempo del flusso magnetico nello stesso percorso.'
);

var _ref138 = Object(preact_min["h"])(
    'p',
    null,
    'Il meno \xE8 dovuto alla ',
    Object(preact_min["h"])(
        'a',
        { href: 'https://it.wikipedia.org/wiki/Legge_di_Lenz' },
        'Legge di Lenz'
    ),
    ', che specifica qualitativamente il verso della forza elettromotrice indotta.'
);

var _ref139 = Object(preact_min["h"])(
    'p',
    null,
    'In un solenoide, la forza elettromotrice indotta \xE8 uguale a:'
);

var _ref140 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Legge di Amp\xE8re-Maxwell' },
    Object(preact_min["h"])(
        'p',
        null,
        'Correnti o campi elettrici variabili creano un campo magnetico.'
    )
);

var _ref141 = Object(preact_min["h"])(
    'p',
    null,
    'Si dice quindi che sono ',
    Object(preact_min["h"])(
        'i',
        null,
        'onde elettromagnetiche'
    ),
    '.'
);

var _ref142 = Object(preact_min["h"])(
    'p',
    null,
    'Esse sono legate dalla relazione:'
);

var _ref143 = Object(preact_min["h"])(
    'p',
    null,
    'I solidi, se portati ad alta temperatura, emettono luce con uno ',
    Object(preact_min["h"])(
        'a',
        { href: 'https://it.wikipedia.org/wiki/Spettro_continuo' },
        'spettro continuo'
    ),
    '.'
);

var _ref144 = Object(preact_min["h"])(
    'p',
    null,
    'I gas, invece, ad alta temperatura emettono luce solo con particolari lunghezze d\'onda.'
);

var _ref145 = Object(preact_min["h"])(
    'p',
    null,
    'In un gas di idrogeno, le lunghezze d\'onda emesse sono ricavabili con:'
);

var _ref146 = Object(preact_min["h"])(
    'p',
    null,
    'Una grandezza si dice quantizzata (o discreta) se pu\xF2 assumere solo determinati valori.'
);

var _ref147 = Object(preact_min["h"])(
    'p',
    null,
    'Una grandezza si dice continua se pu\xF2 assumere qualsiasi valore e quindi se non \xE8 quantizzata.'
);

var _ref148 = Object(preact_min["h"])(
    'p',
    null,
    'Energia, momento angolare e raggio sono quantizzati.'
);

var _ref149 = Object(preact_min["h"])(
    'p',
    null,
    'L\'energia degli elettroni \xE8 quantizzata.'
);

var _ref150 = Object(preact_min["h"])(
    'p',
    null,
    'Inoltre, per essi \xE8 valido che:'
);

var _ref151 = Object(preact_min["h"])(
    'p',
    null,
    'Ancora, il raggio delle orbite \xE8 uguale a:'
);

var _ref152 = Object(preact_min["h"])(
    'p',
    null,
    'Infine, in ogni stato, l\'energia \xE8 pari a:'
);

var _ref153 = Object(preact_min["h"])(
    'p',
    null,
    'Due elettroni non possono occupare lo stesso stato.'
);

var _ref154 = Object(preact_min["h"])(
    'p',
    null,
    'Questo modello funziona solo per atomi con numero atomico basso. Atomi con molti elettroni hanno comportamenti diversi, descritti dal modello di'
);

var _ref155 = Object(preact_min["h"])(
    split_Split,
    null,
    Object(preact_min["h"])(
        panel_Panel,
        { title: 'Nei solidi' },
        Object(preact_min["h"])(
            'p',
            null,
            'Nei solidi, le lunghezze d\'onda sono talmente tanto vicine da poter essere considerate una banda.'
        ),
        Object(preact_min["h"])(
            'p',
            null,
            'Possono per\xF2 comunque avere dei gap dovuti agli intervalli di energia non ammessi.'
        )
    )
);

var _ref156 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        todo_Todo,
        null,
        'Refactor this'
    )
);

var _ref157 = Object(preact_min["h"])(
    'p',
    null,
    'Se invece la banda di emissione si sovrappone a un altra, allora il corpo \xE8 un conduttore.'
);

var _ref158 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Lacune' },
    Object(preact_min["h"])(
        'p',
        null,
        'Legami in cui ',
        Object(preact_min["h"])(
            plus_Plus,
            null,
            'mancano elettroni'
        ),
        '.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        Object(preact_min["h"])(
            minus_Minus,
            null,
            'Elettroni'
        ),
        ' di altri legami possono spostarsi per colmare le ',
        Object(preact_min["h"])(
            plus_Plus,
            null,
            'lacune'
        ),
        ', creandone altre, e spostandole in direzione opposta a quella della corrente.'
    )
);

var _ref159 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Accettori e donori' },
    Object(preact_min["h"])(
        'p',
        null,
        'Se si inserisce in un cristallo semiconduttore si inserisce un atomo con numero atomico diverso, si otterr\xE0:'
    ),
    Object(preact_min["h"])(
        'ul',
        null,
        Object(preact_min["h"])(
            'li',
            null,
            'Con numero atomico maggiore, un semiconduttore di ',
            Object(preact_min["h"])(
                minus_Minus,
                null,
                'tipo N'
            ),
            ' con ',
            Object(preact_min["h"])(
                minus_Minus,
                null,
                'elettroni in eccesso'
            ),
            ' liberi di scorrere.'
        ),
        Object(preact_min["h"])(
            'li',
            null,
            'Con numero atomico minore, un semiconduttore di ',
            Object(preact_min["h"])(
                plus_Plus,
                null,
                'tipo P'
            ),
            ' con ',
            Object(preact_min["h"])(
                plus_Plus,
                null,
                'lacune in eccesso'
            ),
            ' libere di catturare elettroni da altri legami.'
        )
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Maggiore impurezza porta a maggiore conduttivit\xE0.'
    )
);

var _ref160 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Temperatura' },
    Object(preact_min["h"])(
        'p',
        null,
        'Aumentando la temperatura di un semiconduttore si aumenta la conduttivit\xE0, perch\xE8 eccita le particelle e favorisce il movimento di ',
        Object(preact_min["h"])(
            minus_Minus,
            null,
            'elettroni'
        ),
        ' e ',
        Object(preact_min["h"])(
            plus_Plus,
            null,
            'lacune'
        ),
        '.'
    )
);

var _ref161 = Object(preact_min["h"])(
    'span',
    null,
    'Ottica ',
    Object(preact_min["h"])(
        'small',
        null,
        '(non l\'abbiamo fatta)'
    )
);

var _ref162 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Assorbimento e riflessione' },
    Object(preact_min["h"])(
        'p',
        null,
        'I corpi possono assorbire o riflettere le onde elettromagnetiche che li colpiscono.'
    )
);

var _ref163 = Object(preact_min["h"])(
    'p',
    null,
    'Un corpo nero \xE8 un corpo che assorbe tutte le onde elettromagnetiche che riceve senza rifletterne nessuna.'
);

var _ref164 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Teoria di Planck per il corpo nero' },
    Object(preact_min["h"])(
        'p',
        null,
        'L\'energia assorbita e emessa dai corpi neri \xE8 quantizzata.'
    )
);

var _ref165 = Object(preact_min["h"])(
    'p',
    null,
    'Un onda magnetica con un quanto di energia \xE8 detta ',
    Object(preact_min["h"])(
        'i',
        null,
        'fotone'
    ),
    ':'
);

var _ref166 = Object(preact_min["h"])(
    panel_Panel,
    { title: 'Effetto fotoelettrico' },
    Object(preact_min["h"])(
        'p',
        null,
        'A volte, i fotoni che colpiscono un metallo possono estrarvi degli elettroni e creare una differenza di potenziale.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Perch\xE8 avvenga, la frequenza deve essere maggiore di una certa soglia.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Il numero di elettroni estratti dipende dall\'intensit\xE0 dell\'onda, mentre l\'energia cinetica degli elettroni dipende dalla frequenza.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Non c\'\xE8 nessun ritardo tra l\'assorbimento del fotone e l\'estrazione di elettroni.'
    )
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
            { style: fisica_default.a.fisica },
            fisica__ref,
            Object(preact_min["h"])(
                split_Split,
                { title: 'Vettori' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Componenti cartesiane' },
                    fisica__ref2,
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
                    { title: 'Somma' },
                    fisica__ref3,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject4)
                        )
                    ),
                    _ref4
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Differenza' },
                    _ref5,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject5)
                        )
                    ),
                    _ref6
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Prodotto scalare' },
                    _ref7,
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
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Prodotto vettoriale' },
                    _ref8,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                r(_templateObject9)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                r(_templateObject10)
                            )
                        ),
                        _ref9
                    ),
                    _ref10
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Leggi di Newton' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: '1\u1D43: Inerzia' },
                    _ref11,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject11)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: '2\u1D43: Proporzionalit\xE0' },
                    _ref12,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject12)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: '3\u1D43: Azione e reazione' },
                    _ref13,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject13)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Forza di gravit\xE0' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Tra due corpi' },
                    _ref14,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject14)
                        )
                    ),
                    _ref15,
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
                    { title: 'Verso la Terra' },
                    _ref16,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject16)
                        )
                    ),
                    _ref17,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject17)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Su pianeti diversi' },
                    _ref18,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject16)
                        )
                    ),
                    _ref19,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject18)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject19)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Forze di contatto' },
                _ref20,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Attrito statico' },
                    _ref21,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject20)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Attrito dinamico' },
                    _ref22,
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
                _ref23,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Elastica' },
                    _ref24,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject22)
                        )
                    ),
                    _ref25
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Cinematica' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Spostamento' },
                    _ref26,
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
                    { title: 'Velocit\xE0' },
                    _ref27,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject24)
                        )
                    ),
                    _ref28,
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
                    { title: 'Accelerazione' },
                    _ref29,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject26)
                        )
                    ),
                    _ref30,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject27)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: _ref31 },
                    _ref32,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject28)
                        )
                    ),
                    _ref33,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject29)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Moto rettilineo uniforme' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Spostamento' },
                    _ref34,
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
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Velocit\xE0' },
                    _ref35,
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
                    { title: 'Accelerazione' },
                    _ref36,
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
                _ref37
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Moto rettilineo uniformemente accelerato' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Spostamento' },
                    _ref38,
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
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Velocit\xE0' },
                    _ref39,
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
                    { title: 'Accelerazione' },
                    _ref40,
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
                _ref41
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Moto armonico semplice' },
                _ref42,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Velocit\xE0 angolare' },
                    _ref43,
                    _ref44,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject36)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Spostamento' },
                    _ref45,
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
                    { title: 'Velocit\xE0' },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'E\' la sinusoide dello spostamento, sfasata di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject38)
                        ),
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject39)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Accelerazione' },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'E\' la sinusoide della velocit\xE0, sfasata di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject40)
                        ),
                        ':'
                    ),
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
                _ref46
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Moti composti' },
                _ref47,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Moto circolare uniforme' },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il moto parabolico \xE8 dato sommando due moti armonici semplici: uno sull\'asse X, e l\'altro, sfasato di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject38)
                        ),
                        ', sull\'asse Y.'
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Moto circolare uniforme' },
                Object(preact_min["h"])(
                    panel_Panel,
                    null,
                    _ref48,
                    _ref49,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject36)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Fase' },
                    _ref50,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Si indica con ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject42)
                        ),
                        ', e generalmente si usa in radianti.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Velocit\xE0' },
                    _ref51,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject43)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Accelerazione' },
                    _ref52,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject44)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Forza centripeta' },
                    _ref53,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject45)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Lavoro ed energia' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Lavoro' },
                    _ref54,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject46)
                        )
                    ),
                    _ref55
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Energia cinetica' },
                    _ref56,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject47)
                        )
                    ),
                    _ref57,
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
                    { title: 'Energia potenziale gravitazionale' },
                    _ref58,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject49)
                        )
                    ),
                    _ref59
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Energia potenziale elastica' },
                    _ref60,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject50)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Forze conservative' },
                    _ref61,
                    _ref62,
                    _ref63,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject51)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Potenza' },
                    _ref64,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject52)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Elettrostatica' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Carica elettrica' },
                    _ref65,
                    _ref66,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Esiste un\'unit\xE0 elementare: ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject53)
                        ),
                        '.'
                    ),
                    _ref67
                ),
                _ref68
            ),
            _ref69,
            _ref70,
            _ref71,
            Object(preact_min["h"])(
                split_Split,
                { title: 'Forza elettrica' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Legge di Coulomb' },
                    _ref72,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject54)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject55)
                        ),
                        ' \xE8 la ',
                        _ref73,
                        ', e vale ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject56)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Permeabilit\xE0 dello spazio vuoto' },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La costante ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject55)
                        ),
                        ' \xE8 in realt\xE0 dipendente da un altra costante, ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject57)
                        ),
                        ', la ',
                        _ref74,
                        '.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject58)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject59)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Campo elettrico' },
                    _ref75,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject60)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Flusso elettrico' },
                    _ref76,
                    _ref77,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject61)
                        )
                    ),
                    _ref78,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject62)
                        )
                    ),
                    _ref79
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Legge di Gauss per i campi elettrostatici' },
                    _ref80,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject63)
                        )
                    ),
                    _ref81
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Energia elettrica' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Energia potenziale elettrica' },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Un corpo carico vicino ad altre cariche possiede un\'',
                        _ref82,
                        ' ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject64)
                        ),
                        '.'
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Circuiti elettrici' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: _ref83 },
                    _ref84,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject65)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La sua unit\xE0 di misura \xE8 il Volt (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject66)
                        ),
                        ').'
                    ),
                    _ref85
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: _ref86 },
                    _ref87,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject67)
                        )
                    ),
                    _ref88,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La sua unit\xE0 di misura \xE8 l\'Ampere (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject68)
                        ),
                        ').'
                    )
                ),
                _ref89,
                _ref90,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Potenza elettrica' },
                    _ref91,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject69)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Elementi di un circuito' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Resistore' },
                    _ref92,
                    _ref93,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject70)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Dove ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject71)
                        ),
                        ' \xE8 una costante detta ',
                        _ref94,
                        ' con unit\xE0 di misura Ohm (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject72)
                        ),
                        ').'
                    ),
                    _ref95,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject73)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject74)
                        ),
                        ' \xE8 la ',
                        _ref96,
                        ' del materiale, e varia in base alla temperatura:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject75)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Condensatore' },
                    _ref97,
                    _ref98,
                    _ref99,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject76)
                        )
                    ),
                    _ref100,
                    _ref101,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject77)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Dove ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject78)
                        ),
                        ' \xE8 la ',
                        _ref102,
                        ' del materiale inserito, ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject68)
                        ),
                        ' l\'area di una armatura e ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject79)
                        ),
                        ' la distanza tra le due armature.'
                    ),
                    _ref103,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La sua unit\xE0 di misura \xE8 il Farad (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject80)
                        ),
                        ')'
                    )
                ),
                _ref104,
                _ref105
            ),
            _ref106,
            _ref107,
            Object(preact_min["h"])(
                split_Split,
                { title: 'Resistenze equivalenti' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Circuiti in serie' },
                    _ref108,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject81)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Circuiti in parallelo' },
                    _ref109,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject82)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Condensatori equivalenti' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Circuiti in serie' },
                    _ref110,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject83)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Circuiti in parallelo' },
                    _ref111,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject84)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Magnetismo' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Permeabilit\xE0 magnetica dello spazio vuoto' },
                    _ref112,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject85)
                        ),
                        ' (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject86)
                        ),
                        ')'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Campo magnetico' },
                    _ref113,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject87)
                        ),
                        ', e la sua unit\xE0 di misura \xE8 il Tesla (',
                        _ref114,
                        ').'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Flusso magnetico' },
                    _ref115,
                    _ref116,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject88)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject89)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La sua unit\xE0 di misura \xE8 il Weber (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject90)
                        ),
                        ').'
                    )
                ),
                _ref117,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Legge di Amp\xE8re' },
                    _ref118,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject91)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Forze magnetiche' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: _ref119 },
                    _ref120,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject92)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Dove ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject93)
                        ),
                        ' \xE8 l\'intensit\xE0 del campo magnetico e ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject94)
                        ),
                        ' la velocit\xE0 della carica considerata.'
                    ),
                    _ref121,
                    _ref122
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Forza magnetica in un filo' },
                    _ref123,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject95)
                        ),
                        ' ',
                        _ref124
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Dove ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject96)
                        ),
                        ' \xE8 la corrente elettrica, ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject97)
                        ),
                        ' \xE8 un vettore che punta nella direzione di scorrimento della corrente e ha come modulo la lunghezza del conduttore.'
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Campi magnetici' },
                _ref125,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Campo magnetico di un solenoide' },
                    _ref126,
                    _ref127,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject98)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Legge di Oersted' },
                    _ref128,
                    _ref129,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject99)
                        )
                    ),
                    _ref130,
                    _ref131
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Induzione elettromagnetica' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Forza elettromotrice indotta' },
                    _ref132,
                    _ref133,
                    _ref134,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject100)
                        )
                    ),
                    _ref135
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Flusso magnetico in una spira' },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'In un campo magnetico ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject87)
                        ),
                        ' uniforme e perpendicolare al piano di una spira di area ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject68)
                        ),
                        ', il flusso magnetico si pu\xF2 determinare con la ',
                        _ref136,
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject101)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Legge di Faraday-Neumann-Lenz' },
                    _ref137,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject102)
                        )
                    ),
                    _ref138
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Faraday in un solenoide' },
                    _ref139,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject103)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Dove ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject104)
                        ),
                        ' \xE8 il numero delle spire del solenoide.'
                    )
                ),
                _ref140
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Elettromagnetismo' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Onde elettromagnetiche' },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Nel vuoto, il campo elettrico ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject105)
                        ),
                        ' e il campo magnetico ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject87)
                        ),
                        ' sono perpendicolari tra loro e la direzione di propagazione, e sono entrambe funzioni del tempo.'
                    ),
                    _ref141,
                    _ref142,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject106)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Dove ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject107)
                        ),
                        ' \xE8 la velocit\xE0 delle onde (luce) nel vuoto, e a sua volta \xE8 uguale a:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject108)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Formula delle onde' },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject109)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Dove ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject110)
                        ),
                        ' \xE8 l\'ampiezza massima che pu\xF2 avere l\'onda, ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject111)
                        ),
                        ' \xE8 il vettore d\'onda, ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject112)
                        ),
                        ' la frequenza angolare e ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject42)
                        ),
                        ' la fase.'
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: 'Spettroscopia' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Emissione' },
                    _ref143,
                    _ref144,
                    _ref145,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject113)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Con ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject114)
                        ),
                        ', detta costante di Rydberg, e ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject115)
                        ),
                        ' un numero intero.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Grandezza quantizzata' },
                    _ref146,
                    _ref147,
                    _ref148,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Nota costante quantica \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject116)
                        ),
                        ', la costante di Planck, ovvero il valore minimo possibile per la carica (talvolta espressa come ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject117)
                        ),
                        '.'
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Modello di Bohr' },
                    _ref149,
                    _ref150,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject118)
                        )
                    ),
                    _ref151,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject119)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Con ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject120)
                        ),
                        '.'
                    ),
                    _ref152,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject121)
                        )
                    ),
                    _ref153,
                    _ref154
                )
            ),
            _ref155,
            Object(preact_min["h"])(
                split_Split,
                { title: 'Semiconduttori' },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Semiconduttori' },
                    _ref156,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Se la banda di emissione con energia pi\xF9 alta di un corpo \xE8 assente o \xE8 separata da un gap dell\'ordine di grandezza maggiore di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject122)
                        ),
                        ', allora il corpo \xE8 un isolante.'
                    ),
                    _ref157,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Se il gap \xE8 invece dell\'ordine di grandezza di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject123)
                        ),
                        ', allora il corpo \xE8 un semiconduttore.'
                    )
                ),
                _ref158,
                _ref159,
                _ref160
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: _ref161 },
                _ref162,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Corpo nero' },
                    _ref163,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Le onde assorbite vengono poi riemesse sotto forma di un onda di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject124)
                        ),
                        ' variabile in base alla temperatura.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject125)
                        ),
                        ' \xE8 costante.'
                    )
                ),
                _ref164,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: 'Fotone' },
                    _ref165,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            r(_templateObject126)
                        )
                    )
                ),
                _ref166
            )
        );
    };

    return Fisica;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./pages/vldigeometria.css
var vldigeometria = __webpack_require__("jHTF");
var vldigeometria_default = /*#__PURE__*/__webpack_require__.n(vldigeometria);

// EXTERNAL MODULE: ./components/markdown.css
var markdown = __webpack_require__("MKE3");
var markdown_default = /*#__PURE__*/__webpack_require__.n(markdown);

// EXTERNAL MODULE: ../node_modules/showdown/dist/showdown.js
var showdown = __webpack_require__("6adR");
var showdown_default = /*#__PURE__*/__webpack_require__.n(showdown);

// CONCATENATED MODULE: ./components/markdown.js


function markdown__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function markdown__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function markdown__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var markdown_Markdown = function (_Component) {
       markdown__inherits(Markdown, _Component);

       function Markdown() {
              markdown__classCallCheck(this, Markdown);

              return markdown__possibleConstructorReturn(this, _Component.apply(this, arguments));
       }

       Markdown.prototype.render = function render() {
              var converter = new showdown_default.a.Converter();
              converter.setFlavor("github");
              var html = converter.makeHtml("" + this.props.children);
              // noinspection CheckTagEmptyBody
              return Object(preact_min["h"])("div", { style: markdown_default.a.markdown, dangerouslySetInnerHTML: { __html: html } });
       };

       return Markdown;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./pages/vldigeometria.js
var vldigeometria__templateObject = vldigeometria__taggedTemplateLiteralLoose(['\nTutte le videolezioni sono state pubblicate sotto licenza [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) dalla Prof.ssa Beatrice Ruini nell\'anno accademico 2018/2019 sul [portale Dolly 2018](https://dolly.fim.unimore.it/2018/course/view.php?id=14#section-0) (Moodle).\n\nPer comodit\xE0, ho estratto l\'url sorgente del video dall\'embed presente nella rispettiva pagina.\n\n1. [Definizione di Spazio Vettoriale](https://www.youtube.com/watch?v=7eHEzf4403c) (1:17:29)\n2. [Sottospazi vettoriali I](https://www.youtube.com/watch?v=FPqrULk5HBU) (37:15)\n3. [Sottospazi vettoriali II](https://www.youtube.com/watch?v=ubDWUw9hk0k) (43:26)\n4. [Sottospazi vettoriali III](https://www.youtube.com/watch?v=381n4NPb6Oc) (40:29)\n5. [Lineare dipendenza e indipendenza](https://www.youtube.com/watch?v=9YVQ5olYrh0) (56:12)\n6. [Basi di uno spazio vettoriale I](https://www.youtube.com/watch?v=mEF_lcTzEoE) (25:52)\n7. [Basi di uno spazio vettoriale II](https://www.youtube.com/watch?v=k1r9JfXY53k) (48:24)\n8. [Teorema di Grassmann](https://www.youtube.com/watch?v=3sqB-MMyCWM) (32:36)\n9. [Basi e Matrici](https://www.youtube.com/watch?v=Rd6AB_jE7YI) (27:06)\n10. [Definizione di Applicazioni Lineari](https://www.youtube.com/watch?v=rmd7ffZeVYk) (16:23)\n11. [Propriet\xE0 delle Applicazioni Lineari](https://www.youtube.com/watch?v=MH7ztQGkqmw) (31:58)\n12. [Definizione di determinante](https://www.youtube.com/watch?v=EwubcLwBdzk) (36:43)\n13. [Propriet\xE0 e metodo di triangolazione](https://www.youtube.com/watch?v=SFusGarV6HI) (22:36)\n14. [Teorema di Laplace](https://www.youtube.com/watch?v=BqZDWnKl2nQ) (29:03)\n15. [4 applicazioni del Teorema di Laplace](https://www.youtube.com/watch?v=2tr3y725GY0) (47:53)\n16. [Spazi vettoriali euclidei reali - Parte 1](https://www.youtube.com/watch?v=W7Z1hm-jwMM) (28:46)\n17. [Spazi vettoriali euclidei reali - Parte 2](https://www.youtube.com/watch?v=zjmKE9TMGm8) (27:17)\n18. [Autovalori e autovettori](https://www.youtube.com/watch?v=XlrlcnvcTtQ) (33:00)\n19. [Polinomio caratteristico](https://www.youtube.com/watch?v=61icRbgWTdI) (31:31)\n20. [Teorema diagonalizzabilit\xE0](https://www.youtube.com/watch?v=wm5V6en9OFo) (18:49)\n21. [Spazi affini](https://player.vimeo.com/video/291457587) (20:46)\n22. [Sottospazi affini](https://player.vimeo.com/video/291458991) (21:32)\n23. [Parallelismo e Riferimenti Affini](https://player.vimeo.com/video/291510181) (16:57)\n24. [Rappresentazione di Sottospazi Affini](https://player.vimeo.com/video/291510296) (31:17)\n25. [Spazi Euclidei](https://player.vimeo.com/video/291510612) (35:57)\n26. [Teoria dei ranghi](https://player.vimeo.com/video/291510964) (9:44)\n27. [Teoria dei ranghi 2](https://player.vimeo.com/video/291510862) (14:44)\n\nNell\'anno accademico 2018/2019 non sono stati trattati gli argomenti nei video 21, 22 e 23.\n                    '], ['\nTutte le videolezioni sono state pubblicate sotto licenza [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) dalla Prof.ssa Beatrice Ruini nell\'anno accademico 2018/2019 sul [portale Dolly 2018](https://dolly.fim.unimore.it/2018/course/view.php?id=14#section-0) (Moodle).\n\nPer comodit\xE0, ho estratto l\'url sorgente del video dall\'embed presente nella rispettiva pagina.\n\n1. [Definizione di Spazio Vettoriale](https://www.youtube.com/watch?v=7eHEzf4403c) (1:17:29)\n2. [Sottospazi vettoriali I](https://www.youtube.com/watch?v=FPqrULk5HBU) (37:15)\n3. [Sottospazi vettoriali II](https://www.youtube.com/watch?v=ubDWUw9hk0k) (43:26)\n4. [Sottospazi vettoriali III](https://www.youtube.com/watch?v=381n4NPb6Oc) (40:29)\n5. [Lineare dipendenza e indipendenza](https://www.youtube.com/watch?v=9YVQ5olYrh0) (56:12)\n6. [Basi di uno spazio vettoriale I](https://www.youtube.com/watch?v=mEF_lcTzEoE) (25:52)\n7. [Basi di uno spazio vettoriale II](https://www.youtube.com/watch?v=k1r9JfXY53k) (48:24)\n8. [Teorema di Grassmann](https://www.youtube.com/watch?v=3sqB-MMyCWM) (32:36)\n9. [Basi e Matrici](https://www.youtube.com/watch?v=Rd6AB_jE7YI) (27:06)\n10. [Definizione di Applicazioni Lineari](https://www.youtube.com/watch?v=rmd7ffZeVYk) (16:23)\n11. [Propriet\xE0 delle Applicazioni Lineari](https://www.youtube.com/watch?v=MH7ztQGkqmw) (31:58)\n12. [Definizione di determinante](https://www.youtube.com/watch?v=EwubcLwBdzk) (36:43)\n13. [Propriet\xE0 e metodo di triangolazione](https://www.youtube.com/watch?v=SFusGarV6HI) (22:36)\n14. [Teorema di Laplace](https://www.youtube.com/watch?v=BqZDWnKl2nQ) (29:03)\n15. [4 applicazioni del Teorema di Laplace](https://www.youtube.com/watch?v=2tr3y725GY0) (47:53)\n16. [Spazi vettoriali euclidei reali - Parte 1](https://www.youtube.com/watch?v=W7Z1hm-jwMM) (28:46)\n17. [Spazi vettoriali euclidei reali - Parte 2](https://www.youtube.com/watch?v=zjmKE9TMGm8) (27:17)\n18. [Autovalori e autovettori](https://www.youtube.com/watch?v=XlrlcnvcTtQ) (33:00)\n19. [Polinomio caratteristico](https://www.youtube.com/watch?v=61icRbgWTdI) (31:31)\n20. [Teorema diagonalizzabilit\xE0](https://www.youtube.com/watch?v=wm5V6en9OFo) (18:49)\n21. [Spazi affini](https://player.vimeo.com/video/291457587) (20:46)\n22. [Sottospazi affini](https://player.vimeo.com/video/291458991) (21:32)\n23. [Parallelismo e Riferimenti Affini](https://player.vimeo.com/video/291510181) (16:57)\n24. [Rappresentazione di Sottospazi Affini](https://player.vimeo.com/video/291510296) (31:17)\n25. [Spazi Euclidei](https://player.vimeo.com/video/291510612) (35:57)\n26. [Teoria dei ranghi](https://player.vimeo.com/video/291510964) (9:44)\n27. [Teoria dei ranghi 2](https://player.vimeo.com/video/291510862) (14:44)\n\nNell\'anno accademico 2018/2019 non sono stati trattati gli argomenti nei video 21, 22 e 23.\n                    ']);



function vldigeometria__taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function vldigeometria__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vldigeometria__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function vldigeometria__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var vldigeometria_r = String.raw;

var vldigeometria__ref = Object(preact_min["h"])(
	'h1',
	null,
	'Videolezioni di Geometria'
);

var vldigeometria_VlDiGeometria = function (_Component) {
	vldigeometria__inherits(VlDiGeometria, _Component);

	function VlDiGeometria() {
		vldigeometria__classCallCheck(this, VlDiGeometria);

		return vldigeometria__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	VlDiGeometria.prototype.render = function render() {
		//Imported from unimore-info-wiki
		return Object(preact_min["h"])(
			'div',
			{ style: vldigeometria_default.a.vldigeometria },
			vldigeometria__ref,
			Object(preact_min["h"])(
				panel_Panel,
				null,
				Object(preact_min["h"])(
					markdown_Markdown,
					null,
					vldigeometria_r(vldigeometria__templateObject)
				)
			)
		);
	};

	return VlDiGeometria;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./pages/mingwinstall.css
var mingwinstall = __webpack_require__("5m9J");
var mingwinstall_default = /*#__PURE__*/__webpack_require__.n(mingwinstall);

// CONCATENATED MODULE: ./pages/mingwinstall.js


function mingwinstall__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function mingwinstall__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function mingwinstall__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var mingwinstall__ref = Object(preact_min["h"])(
	'h1',
	null,
	'Come installare MinGW'
);

var mingwinstall__ref2 = Object(preact_min["h"])(
	panel_Panel,
	null,
	Object(preact_min["h"])(
		'p',
		null,
		' Scaricate ',
		Object(preact_min["h"])(
			'a',
			{ href: 'https://osdn.net/projects/mingw/downloads/68260/mingw-get-setup.exe/' },
			'l\'installer ufficiale'
		),
		', ed eseguitelo.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/mDZSqjV.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Dovrebbe comparire questa schermata. Cliccate su ',
		Object(preact_min["h"])(
			'code',
			null,
			'Install'
		),
		', poi scegliete una cartella di installazione (ricordatevela!) e poi ',
		Object(preact_min["h"])(
			'code',
			null,
			'Continue'
		),
		'. Lasciate stare le altre opzioni, dovrebbero essere tutte spuntate, tranne ',
		Object(preact_min["h"])(
			'code',
			null,
			'For all users'
		),
		', che dovrebbe essere disattivato.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/brdw8Xy.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Aspettate che finisca il download. Pochi secondi dopo, dovrebbe finire e dovrebbe apparire un tasto',
		Object(preact_min["h"])(
			'code',
			null,
			'Continue'
		),
		'. Premetelo.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/aPTwrxz.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Dovrebbe apparirvi questa finestra. L\'installer di MinGW \xE8 una specie di gestore pacchetti (tipo ',
		Object(preact_min["h"])(
			'code',
			null,
			'apt'
		),
		' su Ubuntu); potete scegliere quali pacchetti installare, e quindi quali funzionalit\xE0.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/5QLSkFN.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Nel nostro caso, dovrebbero servirci ',
		Object(preact_min["h"])(
			'code',
			null,
			'mingw32-base-bin'
		),
		' (per il C e alcune librerie C++) e',
		Object(preact_min["h"])(
			'code',
			null,
			'mingw32-gcc-g++-bin'
		),
		' (per il C++). Cliccate, quindi, sui due quadratini corrispondenti, e premete',
		Object(preact_min["h"])(
			'code',
			null,
			'Mark for Installation'
		),
		'. Dovrebbe comparire una freccia gialla sul quadratino.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/zP74nks.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Ora, \xE8 il momento di installare i pacchetti. Aprite il men\xF9 ',
		Object(preact_min["h"])(
			'code',
			null,
			'Installation'
		),
		', poi premete',
		Object(preact_min["h"])(
			'code',
			null,
			'Apply Changes'
		),
		', e di nuovo ',
		Object(preact_min["h"])(
			'code',
			null,
			'Apply'
		),
		'.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/jp4uz5B.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Lasciate che scarichi, ci vorr\xE0 un po\'. Guardatevi un video nel frattempo, fatevi una partitina a qualcosa, tornate dopo circa 10 minuti.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/Lq9IepY.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Una volta installato, dobbiamo aggiungere ',
		Object(preact_min["h"])(
			'code',
			null,
			'g++'
		),
		' ai programmi eseguibili da Prompt dei Comandi: premete il tasto ',
		Object(preact_min["h"])(
			'kbd',
			null,
			'Windows'
		),
		', e scrivete ',
		Object(preact_min["h"])(
			'code',
			null,
			'PATH'
		),
		'. Windows dovrebbe trovarvi automaticamente quell\'opzione.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/dy3b5Ub.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Dentro la finestra di ',
		Object(preact_min["h"])(
			'i',
			null,
			'Propriet\xE0 del Sistema'
		),
		', premete ',
		Object(preact_min["h"])(
			'code',
			null,
			'Variabili d\'ambiente'
		),
		'.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/FjYpT1n.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Trovate la variabile d\'ambiente globale ',
		Object(preact_min["h"])(
			'code',
			null,
			'Path'
		),
		', e fateci doppio click per modificarla.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/klZQ9So.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Ora dovreste vedere l\'elenco di tutte le cartelle contenenti programmi eseguibili da terminale: dobbiamo aggiungere quella di MinGW! Premete ',
		Object(preact_min["h"])(
			'code',
			null,
			'Sfoglia'
		),
		'.'
	),
	Object(preact_min["h"])('img', { src: 'https://i.imgur.com/F6lBCqS.png', alt: '' }),
	Object(preact_min["h"])(
		'p',
		null,
		' Trovate la cartella in cui avete installato MinGW (vi avevo detto di ricordarvela!); entrateci, poi selezionate la sottocartella ',
		Object(preact_min["h"])(
			'code',
			null,
			'bin'
		),
		' e premete ',
		Object(preact_min["h"])(
			'code',
			null,
			'OK'
		),
		' su tutte le finestre che avete aperto fino ad ora, chiudendole.'
	),
	Object(preact_min["h"])(
		'p',
		null,
		' Complimenti! Avete installato MinGW e potete compilare programmi C e C++ da Windows! Avete a disposizione',
		Object(preact_min["h"])(
			'code',
			null,
			'gcc'
		),
		' e ',
		Object(preact_min["h"])(
			'code',
			null,
			'g++'
		),
		' sul Prompt dei Comandi, e potete finalmente creare dei file .exe! '
	)
);

var mingwinstall_MingwInstall = function (_Component) {
	mingwinstall__inherits(MingwInstall, _Component);

	function MingwInstall() {
		mingwinstall__classCallCheck(this, MingwInstall);

		return mingwinstall__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	MingwInstall.prototype.render = function render() {
		//Imported from unimore-info-wiki
		return Object(preact_min["h"])(
			'div',
			{ style: mingwinstall_default.a.mingwinstall },
			mingwinstall__ref,
			mingwinstall__ref2
		);
	};

	return MingwInstall;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/copyright.css
var copyright = __webpack_require__("qMTX");
var copyright_default = /*#__PURE__*/__webpack_require__.n(copyright);

// CONCATENATED MODULE: ./components/copyright.js


function copyright__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function copyright__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function copyright__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var copyright__ref = Object(preact_min["h"])(
	'a',
	{ href: 'https://creativecommons.org/licenses/by-sa/4.0/' },
	'CC BY-SA 4.0'
);

var copyright__ref2 = Object(preact_min["h"])(
	'a',
	{ href: 'https://github.com/Steffo99/appuntiweb' },
	'Codice sorgente'
);

var copyright_Copyright = function (_Component) {
	copyright__inherits(Copyright, _Component);

	function Copyright() {
		copyright__classCallCheck(this, Copyright);

		return copyright__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	Copyright.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ 'class': copyright_default.a.copyright },
			'\xA9 2019 - Stefano Pigozzi - ',
			copyright__ref,
			' - ',
			copyright__ref2
		);
	};

	return Copyright;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./pages/statistica.css
var statistica = __webpack_require__("WViY");
var statistica_default = /*#__PURE__*/__webpack_require__.n(statistica);

// EXTERNAL MODULE: ./components/theorem.css
var theorem = __webpack_require__("oNmJ");
var theorem_default = /*#__PURE__*/__webpack_require__.n(theorem);

// CONCATENATED MODULE: ./components/theorem.js
function theorem__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function theorem__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function theorem__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var theorem_Theorem = function (_Panel) {
    theorem__inherits(Theorem, _Panel);

    function Theorem() {
        theorem__classCallCheck(this, Theorem);

        return theorem__possibleConstructorReturn(this, _Panel.apply(this, arguments));
    }

    Theorem.prototype.getStyle = function getStyle() {
        return _Panel.prototype.getStyle.call(this) + " " + theorem_default.a.theorem;
    };

    return Theorem;
}(panel_Panel);


// EXTERNAL MODULE: ./components/hypothesis.css
var hypothesis = __webpack_require__("pRAn");
var hypothesis_default = /*#__PURE__*/__webpack_require__.n(hypothesis);

// CONCATENATED MODULE: ./components/hypothesis.js


function hypothesis__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hypothesis__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function hypothesis__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var hypothesis__ref = Object(preact_min["h"])(
    "h4",
    null,
    "Ipotesi"
);

var hypothesis_Hypothesis = function (_Component) {
    hypothesis__inherits(Hypothesis, _Component);

    function Hypothesis() {
        hypothesis__classCallCheck(this, Hypothesis);

        return hypothesis__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Hypothesis.prototype.render = function render() {
        return Object(preact_min["h"])(
            "div",
            { "class": hypothesis_default.a.hypothesis },
            hypothesis__ref,
            this.props.children
        );
    };

    return Hypothesis;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/thesis.css
var thesis = __webpack_require__("J9SO");
var thesis_default = /*#__PURE__*/__webpack_require__.n(thesis);

// CONCATENATED MODULE: ./components/thesis.js


function thesis__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function thesis__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function thesis__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var thesis__ref = Object(preact_min["h"])(
    "h4",
    null,
    "Tesi"
);

var thesis_Thesis = function (_Component) {
    thesis__inherits(Thesis, _Component);

    function Thesis() {
        thesis__classCallCheck(this, Thesis);

        return thesis__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Thesis.prototype.render = function render() {
        return Object(preact_min["h"])(
            "div",
            { "class": thesis_default.a.thesis },
            thesis__ref,
            this.props.children
        );
    };

    return Thesis;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/proof.css
var proof = __webpack_require__("Oqef");
var proof_default = /*#__PURE__*/__webpack_require__.n(proof);

// CONCATENATED MODULE: ./components/proof.js


function proof__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function proof__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function proof__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var proof__ref = Object(preact_min["h"])(
    "h4",
    null,
    "Dimostrazione"
);

var proof_Proof = function (_Component) {
    proof__inherits(Proof, _Component);

    function Proof() {
        proof__classCallCheck(this, Proof);

        return proof__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Proof.prototype.render = function render() {
        return Object(preact_min["h"])(
            "div",
            { "class": proof_default.a.proof },
            proof__ref,
            this.props.children
        );
    };

    return Proof;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/example.css
var example = __webpack_require__("Xa+Z");
var example_default = /*#__PURE__*/__webpack_require__.n(example);

// CONCATENATED MODULE: ./components/example.js


function example__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function example__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function example__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var example_Example = function (_Component) {
    example__inherits(Example, _Component);

    function Example() {
        example__classCallCheck(this, Example);

        return example__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Example.prototype.render = function render() {
        return Object(preact_min["h"])(
            "blockquote",
            { "class": example_default.a.example },
            this.props.children
        );
    };

    return Example;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./pages/statistica.js
var statistica__templateObject = statistica__taggedTemplateLiteralLoose(['P(E) = \frac{casi favorevoli}{casi possibili}'], ['P(E) = \\frac{casi\\ favorevoli}{casi\\ possibili}']),
    statistica__templateObject2 = statistica__taggedTemplateLiteralLoose(['P(E) = \frac{successi}{prove totali}'], ['P(E) = \\frac{successi}{prove\\ totali}']),
    statistica__templateObject3 = statistica__taggedTemplateLiteralLoose(['Omega = left { 1, 2, 3, 4, 5, 6 \right }'], ['\\Omega = \\left \\{ 1, 2, 3, 4, 5, 6 \\right \\}']),
    statistica__templateObject4 = statistica__taggedTemplateLiteralLoose(['omega = 1'], ['\\omega = 1']),
    statistica__templateObject5 = statistica__taggedTemplateLiteralLoose(['E = left { 1, 2 \right }'], ['E = \\left \\{ 1, 2 \\right \\}']),
    statistica__templateObject6 = statistica__taggedTemplateLiteralLoose(['\bar{E} = left { 3, 4, 5, 6 \right }'], ['\\bar{E} = \\left \\{ 3, 4, 5, 6 \\right \\}']),
    statistica__templateObject7 = statistica__taggedTemplateLiteralLoose(['E cap F = left { 1 \right }'], ['E \\cap F = \\left \\{ 1 \\right \\}']),
    statistica__templateObject8 = statistica__taggedTemplateLiteralLoose(['E cup F = left { 1, 2, 3, 4 \right }'], ['E \\cup F = \\left \\{ 1, 2, 3, 4 \\right \\}']),
    statistica__templateObject9 = statistica__taggedTemplateLiteralLoose(['E setminus F = E cap \bar{F}'], ['E \\setminus F = E \\cap \\bar{F}']),
    statistica__templateObject10 = statistica__taggedTemplateLiteralLoose(['E subseteq F'], ['E \\subseteq F']),
    statistica__templateObject11 = statistica__taggedTemplateLiteralLoose(['E = emptyset'], ['E = \\emptyset']),
    statistica__templateObject12 = statistica__taggedTemplateLiteralLoose(['E cap F = emptyset'], ['E \\cap F = \\emptyset']),
    statistica__templateObject13 = statistica__taggedTemplateLiteralLoose(['mathcal{F}'], ['\\mathcal{F}']),
    statistica__templateObject14 = statistica__taggedTemplateLiteralLoose(['sigma'], ['\\sigma']),
    statistica__templateObject15 = statistica__taggedTemplateLiteralLoose(['Omega in mathcal{F}'], ['\\Omega \\in \\mathcal{F}']),
    statistica__templateObject16 = statistica__taggedTemplateLiteralLoose(['E in mathcal{F} implies \bar{E} in mathcal{F}'], ['E \\in \\mathcal{F} \\implies \\bar{E} \\in \\mathcal{F}']),
    statistica__templateObject17 = statistica__taggedTemplateLiteralLoose(['(E, F) in mathcal{F} implies (E cup F, E cap F) in mathcal{F}'], ['(E, F) \\in \\mathcal{F} \\implies (E \\cup F, E \\cap F) \\in \\mathcal{F}']),
    statistica__templateObject18 = statistica__taggedTemplateLiteralLoose(['E in mathcal{F} implies mathcal{F} = { emptyset, E, \bar{E}, Omega }'], ['E \\in \\mathcal{F} \\implies \\mathcal{F} = \\{ \\emptyset, E, \\bar{E}, \\Omega \\}']),
    statistica__templateObject19 = statistica__taggedTemplateLiteralLoose(['E_i'], ['E_i']),
    statistica__templateObject20 = statistica__taggedTemplateLiteralLoose(['E_1'], ['E_1']),
    statistica__templateObject21 = statistica__taggedTemplateLiteralLoose(['E_2'], ['E_2']),
    statistica__templateObject22 = statistica__taggedTemplateLiteralLoose(['E_3'], ['E_3']),
    statistica__templateObject23 = statistica__taggedTemplateLiteralLoose(['E_n'], ['E_n']),
    statistica__templateObject24 = statistica__taggedTemplateLiteralLoose(['\forall E in mathcal{F}, 0 leq P(E) leq 1'], ['\\forall E \\in \\mathcal{F}, 0 \\leq P(E) \\leq 1']),
    statistica__templateObject25 = statistica__taggedTemplateLiteralLoose(['P(Omega) = 1'], ['P(\\Omega) = 1']),
    statistica__templateObject26 = statistica__taggedTemplateLiteralLoose(['P left ( \bigcup_i E_i \right ) = sum_i P ( E_i )'], ['P \\left ( \\bigcup_i E_i \\right ) = \\sum_i P ( E_i )']),
    statistica__templateObject27 = statistica__taggedTemplateLiteralLoose(['P(\bar{E}) = 1 - P({E})'], ['P(\\bar{E}) = 1 - P({E})']),
    statistica__templateObject28 = statistica__taggedTemplateLiteralLoose(['F subseteq E implies P(F) leq P(E)'], ['F \\subseteq E \\implies P(F) \\leq P(E)']),
    statistica__templateObject29 = statistica__taggedTemplateLiteralLoose(['P(E cup F) = P(E) + P(F) - P(E cap F)'], ['P(E \\cup F) = P(E) + P(F) - P(E \\cap F)']),
    statistica__templateObject30 = statistica__taggedTemplateLiteralLoose(['P(E) = \frac{len(E)}{len(Omega)}'], ['P(E) = \\frac{len(E)}{len(\\Omega)}']),
    statistica__templateObject31 = statistica__taggedTemplateLiteralLoose(['\boldsymbol{D}_{n, k} = \frac{n!}{(n - k)!}'], ['\\boldsymbol{D}_{n, k} = \\frac{n!}{(n - k)!}']),
    statistica__templateObject32 = statistica__taggedTemplateLiteralLoose(['\boldsymbol{D}^{r}_{n, k} = n^k'], ['\\boldsymbol{D}^{r}_{n, k} = n^k']),
    statistica__templateObject33 = statistica__taggedTemplateLiteralLoose(['\boldsymbol{C}_{n, k} = \binom{n}{k} = \frac{n!}{(k)! cdot (n - k)!}'], ['\\boldsymbol{C}_{n, k} = \\binom{n}{k} = \\frac{n!}{(k)! \\cdot (n - k)!}']),
    statistica__templateObject34 = statistica__taggedTemplateLiteralLoose(['\boldsymbol{C}^{r}_{n, k} = \binom{n + k - 1}{k} = \frac{(n + k - 1)!}{(k)! cdot (n - 1)!}'], ['\\boldsymbol{C}^{r}_{n, k} = \\binom{n + k - 1}{k} = \\frac{(n + k - 1)!}{(k)! \\cdot (n - 1)!}']),
    statistica__templateObject35 = statistica__taggedTemplateLiteralLoose(['\boldsymbol{P}_n = n!'], ['\\boldsymbol{P}_n = n!']),
    statistica__templateObject36 = statistica__taggedTemplateLiteralLoose(['P(E|F) = \frac{P(E cap F)}{P(F)}'], ['P(E|F) = \\frac{P(E \\cap F)}{P(F)}']),
    statistica__templateObject37 = statistica__taggedTemplateLiteralLoose(['E cap F = emptyset Longleftrightarrow P(E|F) = P(F|E) = 0'], ['E \\cap F = \\emptyset \\Longleftrightarrow P(E|F) = P(F|E) = 0']),
    statistica__templateObject38 = statistica__taggedTemplateLiteralLoose(['P(E_1 cap \times cap E_n) = P(E_1) \times P(E_2 | E_1) \times dots \times P(E_n | E_1 cap E_2 cap dots cap E_{n-1})'], ['P(E_1 \\cap \\times \\cap E_n) = P(E_1) \\times P(E_2 | E_1) \\times \\dots \\times P(E_n | E_1 \\cap E_2 \\cap \\dots \\cap E_{n-1})']),
    statistica__templateObject39 = statistica__taggedTemplateLiteralLoose(['P(F) = sum_{i} P(F|E_i) cdot P(E_i)'], ['P(F) = \\sum_{i} P(F|E_i) \\cdot P(E_i)']),
    statistica__templateObject40 = statistica__taggedTemplateLiteralLoose(['P(F|G) = sum_i P(F|E_i cap G) cdot P(E_i | G)'], ['P(F|G) = \\sum_i P(F|E_i \\cap G) \\cdot P(E_i | G)']),
    statistica__templateObject41 = statistica__taggedTemplateLiteralLoose(['P(E_h | F) = \frac{P(F | E_h) cdot P(E_h)}{P(F)}'], ['P(E_h | F) = \\frac{P(F | E_h) \\cdot P(E_h)}{P(F)}']),
    statistica__templateObject42 = statistica__taggedTemplateLiteralLoose(['P(E cap F) = P(E) cdot P(F) Longleftrightarrow P(E|F) = P(E) Longleftrightarrow P(F|E) = P(F)'], ['P(E \\cap F) = P(E) \\cdot P(F) \\Longleftrightarrow P(E|F) = P(E) \\Longleftrightarrow P(F|E) = P(F)']),
    statistica__templateObject43 = statistica__taggedTemplateLiteralLoose(['P(E cap F cap G) = P(E) cdot P(F) cdot P(G)'], ['P(E \\cap F \\cap G) = P(E) \\cdot P(F) \\cdot P(G)']),
    statistica__templateObject44 = statistica__taggedTemplateLiteralLoose(['X(omega) : Omega \to mathbb{R}'], ['X(\\omega) : \\Omega \\to \\mathbb{R}']),
    statistica__templateObject45 = statistica__taggedTemplateLiteralLoose(['A_t = { omega | X(omega) leq t }'], ['A_t = \\{ \\omega | X(\\omega) \\leq t \\}']),
    statistica__templateObject46 = statistica__taggedTemplateLiteralLoose(['\forall t in mathbb{R}, A_t in mathcal{F}'], ['\\forall t \\in \\mathbb{R}, A_t \\in \\mathcal{F}']),
    statistica__templateObject47 = statistica__taggedTemplateLiteralLoose(['p_X : X \to [0, 1]'], ['p_X : X \\to [0, 1]']),
    statistica__templateObject48 = statistica__taggedTemplateLiteralLoose(['p_X (x) = \begin{cases}\n                            P([X = x]) quad se X mapsto x \\\n                            0 qquad qquad quad se X \notmapsto x\n                            end{cases}'], ['p_X (x) = \\begin{cases}\n                            P([X = x]) \\quad se\\ X \\mapsto x \\\\\n                            0 \\qquad \\qquad \\quad se\\ X \\not\\mapsto x\n                            \\end{cases}']),
    statistica__templateObject49 = statistica__taggedTemplateLiteralLoose(['f_X : X \to [0, 1]'], ['f_X : X \\to [0, 1]']),
    statistica__templateObject50 = statistica__taggedTemplateLiteralLoose(['P([a < X leq b]) = int_a^b f_X (x) dx'], ['P([a < X \\leq b]) = \\int_a^b f_X (x) dx']),
    statistica__templateObject51 = statistica__taggedTemplateLiteralLoose(['F_X : mathbb{R} \to [0, 1]'], ['F_X : \\mathbb{R} \\to [0, 1]']),
    statistica__templateObject52 = statistica__taggedTemplateLiteralLoose(['A_t'], ['A_t']),
    statistica__templateObject53 = statistica__taggedTemplateLiteralLoose(['F_X (t) = P(A_t) = \begin{cases}\n                            sum_{i = 0}^{t} p_X (x_i) quad nel discreto\\\n                            \\\n                            int_{-infty}^t f_X (x) dx quad nel continuo\n                            end{cases}'], ['F_X (t) = P(A_t) = \\begin{cases}\n                            \\sum_{i = 0}^{t} p_X (x_i) \\quad nel\\ discreto\\\\\n                            \\\\\n                            \\int_{-\\infty}^t f_X (x) dx \\quad nel\\ continuo\n                            \\end{cases}']),
    statistica__templateObject54 = statistica__taggedTemplateLiteralLoose(['\forall x_0 in mathbb{R}, F_X (x_0) = lim_{t \to x^+_0} F_X (t)'], ['\\forall x_0 \\in \\mathbb{R}, F_X (x_0) = \\lim_{t \\to x^+_0} F_X (t)']),
    statistica__templateObject55 = statistica__taggedTemplateLiteralLoose(['P([X = x_0]) = lim_{t \to x^+_0} F_X (t) - lim_{t \to x^-_0} F_X (t)'], ['P([X = x_0]) = \\lim_{t \\to x^+_0} F_X (t) - \\lim_{t \\to x^-_0} F_X (t)']),
    statistica__templateObject56 = statistica__taggedTemplateLiteralLoose(['f_Y (y) = int_{g(a)}^{g(b)} f_X ( g^{-1} (x) ) g^{-2} (x)'], ['f_Y (y) = \\int_{g(a)}^{g(b)} f_X ( g^{-1} (x) ) g^{-2} (x)']),
    statistica__templateObject57 = statistica__taggedTemplateLiteralLoose(['E(X) = int_0^{+infty} (1 - F_X (t)) dt - int_{-infty}^{0} F_X (t) dt'], ['E(X) = \\int_0^{+infty} (1 - F_X (t)) dt - \\int_{-\\infty}^{0} F_X (t) dt']),
    statistica__templateObject58 = statistica__taggedTemplateLiteralLoose(['E(X) = sum_i P(X = x_i) cdot x_i'], ['E(X) = \\sum_i P(X = x_i) \\cdot x_i']),
    statistica__templateObject59 = statistica__taggedTemplateLiteralLoose(['E(X) = int_{-infty}^{+infty} f_X (x) cdot x cdot dx'], ['E(X) = \\int_{-\\infty}^{+\\infty} f_X (x) \\cdot x \\cdot dx']),
    statistica__templateObject60 = statistica__taggedTemplateLiteralLoose(['x_{alpha}'], ['x_{\\alpha}']),
    statistica__templateObject61 = statistica__taggedTemplateLiteralLoose(['0 leq alpha leq 1'], ['0 \\leq \\alpha \\leq 1']),
    statistica__templateObject62 = statistica__taggedTemplateLiteralLoose(['P([X < x_{alpha}]) leq alpha leq P([X leq x_{alpha}])'], ['P([X < x_{\\alpha}]) \\leq \\alpha \\leq P([X \\leq x_{\\alpha}])']),
    statistica__templateObject63 = statistica__taggedTemplateLiteralLoose(['x_{0.5}'], ['x_{0.5}']),
    statistica__templateObject64 = statistica__taggedTemplateLiteralLoose(['x_{0.25}'], ['x_{0.25}']),
    statistica__templateObject65 = statistica__taggedTemplateLiteralLoose(['x_{0.75}'], ['x_{0.75}']),
    statistica__templateObject66 = statistica__taggedTemplateLiteralLoose(['\frac{n}{100}'], ['\\frac{n}{100}']),
    statistica__templateObject67 = statistica__taggedTemplateLiteralLoose(['Var(X) = E( (X - E(X) )^2 ) = E ( X^2 ) - (E(X))^2'], ['Var(X) = E( (X - E(X) )^2 ) = E ( X^2 ) - (E(X))^2']),
    statistica__templateObject68 = statistica__taggedTemplateLiteralLoose(['\forall k > 0, P([X geq k]) leq \frac{E(X)}{k}'], ['\\forall k > 0, P([X \\geq k]) \\leq \\frac{E(X)}{k}']),
    statistica__templateObject69 = statistica__taggedTemplateLiteralLoose(['P(X < k)'], ['P(X < k)']),
    statistica__templateObject70 = statistica__taggedTemplateLiteralLoose(['P(X geq k)'], ['P(X \\geq k)']),
    statistica__templateObject71 = statistica__taggedTemplateLiteralLoose(['E(X) = overline{k} cdot P(X < k) + k cdot P(X geq k)'], ['E(X) = \\overline{k} \\cdot P(X < k) + k \\cdot P(X \\geq k)']),
    statistica__templateObject72 = statistica__taggedTemplateLiteralLoose(['epsilon'], ['\\epsilon']),
    statistica__templateObject73 = statistica__taggedTemplateLiteralLoose(['\frac{Var(X)}{epsilon^2}'], ['\\frac{Var(X)}{\\epsilon^2}']),
    statistica__templateObject74 = statistica__taggedTemplateLiteralLoose(['\forall epsilon > 0, P([ left| X - E(X) \right| geq epsilon]) leq \frac{Var(X)}{epsilon^2}'], ['\\forall \\epsilon > 0, P([ \\left| X - E(X) \\right| \\geq \\epsilon]) \\leq \\frac{Var(X)}{\\epsilon^2}']),
    statistica__templateObject75 = statistica__taggedTemplateLiteralLoose(['\forall epsilon > 0, P([ left| X - E(X) \right| < epsilon]) geq 1 - \frac{Var(X)}{epsilon^2}'], ['\\forall \\epsilon > 0, P([ \\left| X - E(X) \\right| < \\epsilon]) \\geq 1 - \\frac{Var(X)}{\\epsilon^2}']),
    statistica__templateObject76 = statistica__taggedTemplateLiteralLoose(['mu_k = E ( X^k ) = \begin{cases}\n                                sum_i x_i^k p_X (x_i) qquad nel discreto\\\n                                \\\n                                int_{-infty}^{+infty} x^k f_X (x) dx qquad nel continuo\n                                end{cases}'], ['\\mu_k = E ( X^k ) = \\begin{cases}\n                                \\sum_i x_i^k p_X (x_i) \\qquad nel\\ discreto\\\\\n                                \\\\\n                                \\int_{-\\infty}^{+\\infty} x^k f_X (x) dx \\qquad nel\\ continuo\n                                \\end{cases}']),
    statistica__templateObject77 = statistica__taggedTemplateLiteralLoose(['m_X (t) = E( e^{t cdot X} )'], ['m_X (t) = E( e^{t \\cdot X} )']),
    statistica__templateObject78 = statistica__taggedTemplateLiteralLoose(['H_X (t) = E ( e^{i cdot t cdot X} )'], ['H_X (t) = E ( e^{i \\cdot t \\cdot X} )']),
    statistica__templateObject79 = statistica__taggedTemplateLiteralLoose(['X sim Distribuzione()'], ['X \\sim Distribuzione()']),
    statistica__templateObject80 = statistica__taggedTemplateLiteralLoose(['Ber(p)'], ['Ber(p)']),
    statistica__templateObject81 = statistica__taggedTemplateLiteralLoose(['f_X (k) : {0, 1} = \begin{cases}\n                            p quad se k = 1\\\n                            q quad se k = 0\\\n                            0 quad altrimenti\n                            end{cases} = p^x cdot q^{1 - k}'], ['f_X (k) : \\{0, 1\\} = \\begin{cases}\n                            p \\quad se\\ k = 1\\\\\n                            q \\quad se\\ k = 0\\\\\n                            0 \\quad altrimenti\n                            \\end{cases} = p^x \\cdot q^{1 - k}']),
    statistica__templateObject82 = statistica__taggedTemplateLiteralLoose(['Bin(n, p)'], ['Bin(n, p)']),
    statistica__templateObject83 = statistica__taggedTemplateLiteralLoose(['f_X (k) : {0..n} = \binom{n}{k} cdot p^k cdot q^{n - k}'], ['f_X (k) : \\{0..n\\} = \\binom{n}{k} \\cdot p^k \\cdot q^{n - k}']),
    statistica__templateObject84 = statistica__taggedTemplateLiteralLoose(['m_X (t) = (q + p cdot e^t) ^ n'], ['m_X (t) = (q + p \\cdot e^t) ^ n']),
    statistica__templateObject85 = statistica__taggedTemplateLiteralLoose(['E(X) = n cdot p'], ['E(X) = n \\cdot p']),
    statistica__templateObject86 = statistica__taggedTemplateLiteralLoose(['Var(X) = n cdot p cdot q'], ['Var(X) = n \\cdot p \\cdot q']),
    statistica__templateObject87 = statistica__taggedTemplateLiteralLoose(['f_X (k) : mathbb{N} = q^{k - 1} p'], ['f_X (k) : \\mathbb{N} = q^{k - 1} p']),
    statistica__templateObject88 = statistica__taggedTemplateLiteralLoose(['m_X (t) = \frac{p cdot e^t}{1 - q cdot e^t}'], ['m_X (t) = \\frac{p \\cdot e^t}{1 - q \\cdot e^t}']),
    statistica__templateObject89 = statistica__taggedTemplateLiteralLoose(['E(X) = \frac{1}{p}'], ['E(X) = \\frac{1}{p}']),
    statistica__templateObject90 = statistica__taggedTemplateLiteralLoose(['Var(X) = \frac{q}{p^2}'], ['Var(X) = \\frac{q}{p^2}']),
    statistica__templateObject91 = statistica__taggedTemplateLiteralLoose(['P([X = i + j | X > i ]) = P([X = j])'], ['P([X = i + j | X > i ]) = P([X = j])']),
    statistica__templateObject92 = statistica__taggedTemplateLiteralLoose(['overline{Bin}(n, p)'], ['\\overline{Bin}(n, p)']),
    statistica__templateObject93 = statistica__taggedTemplateLiteralLoose(['f_X (k) : { n .. +infty } in mathbb{N} = \binom{k - 1}{n - 1} cdot p^n cdot q^{k - n} '], ['f_X (k) : \\{ n .. +\\infty \\} \\in \\mathbb{N} = \\binom{k - 1}{n - 1} \\cdot p^n \\cdot q^{k - n} ']),
    statistica__templateObject94 = statistica__taggedTemplateLiteralLoose(['m_X (t) : { t < ln(\frac{1}{q}) } = left( \frac{p cdot e^t}{1 - q cdot e^t} \right) ^n'], ['m_X (t) : \\{ t < ln(\\frac{1}{q}) \\} = \\left( \\frac{p \\cdot e^t}{1 - q \\cdot e^t} \\right) ^n']),
    statistica__templateObject95 = statistica__taggedTemplateLiteralLoose(['E(X) = \frac{n}{p}'], ['E(X) = \\frac{n}{p}']),
    statistica__templateObject96 = statistica__taggedTemplateLiteralLoose(['Var(X) = \frac{n cdot q}{p^2}'], ['Var(X) = \\frac{n \\cdot q}{p^2}']),
    statistica__templateObject97 = statistica__taggedTemplateLiteralLoose(['Geo(p)'], ['Geo(p)']),
    statistica__templateObject98 = statistica__taggedTemplateLiteralLoose(['f_X (k) : mathbb{N} = p cdot q^k '], ['f_X (k) : \\mathbb{N} = p \\cdot q^k ']),
    statistica__templateObject99 = statistica__taggedTemplateLiteralLoose(['m_X (t) : left{ t < ln left( \frac{1}{q} \right) \right} = \frac{p}{1 - q cdot e^t}'], ['m_X (t) : \\left\\{ t < ln \\left( \\frac{1}{q} \\right) \\right\\} = \\frac{p}{1 - q \\cdot e^t}']),
    statistica__templateObject100 = statistica__taggedTemplateLiteralLoose(['E(X) = \frac{q}{p}'], ['E(X) = \\frac{q}{p}']),
    statistica__templateObject101 = statistica__taggedTemplateLiteralLoose(['f_X (k) : mathbb{N} = \binom{k + n - 1}{n - 1} cdot p^n cdot q^k '], ['f_X (k) : \\mathbb{N} = \\binom{k + n - 1}{n - 1} \\cdot p^n \\cdot q^k ']),
    statistica__templateObject102 = statistica__taggedTemplateLiteralLoose(['m_X (t) : left{ t < ln left( \frac{1}{q} \right) \right} = left( \frac{p cdot e^t}{1 - q cdot e^t} \right) ^n'], ['m_X (t) : \\left\\{ t < ln \\left( \\frac{1}{q} \\right) \\right\\} = \\left( \\frac{p \\cdot e^t}{1 - q \\cdot e^t} \\right) ^n']),
    statistica__templateObject103 = statistica__taggedTemplateLiteralLoose(['E(X) = \frac{n cdot q}{p}'], ['E(X) = \\frac{n \\cdot q}{p}']),
    statistica__templateObject104 = statistica__taggedTemplateLiteralLoose(['f_X (k) : {0..n} in mathbb{N} = \frac{\binom{K}{k} cdot \binom{N - K}{n - k}}{\binom{N}{n}}'], ['f_X (k) : \\{0..n\\} \\in \\mathbb{N} = \\frac{\\binom{K}{k} \\cdot \\binom{N - K}{n - k}}{\\binom{N}{n}}']),
    statistica__templateObject105 = statistica__taggedTemplateLiteralLoose(['E(X) = n cdot \frac{K}{N}'], ['E(X) = n \\cdot \\frac{K}{N}']),
    statistica__templateObject106 = statistica__taggedTemplateLiteralLoose(['Var(X) = n cdot \frac{K}{N} cdot \frac{N - K}{N} cdot \frac{N - n}{N - 1}'], ['Var(X) = n \\cdot \\frac{K}{N} \\cdot \\frac{N - K}{N} \\cdot \\frac{N - n}{N - 1}']),
    statistica__templateObject107 = statistica__taggedTemplateLiteralLoose(['X sim Bin(n, p)'], ['X \\sim Bin(n, p)']),
    statistica__templateObject108 = statistica__taggedTemplateLiteralLoose(['n \to +infty'], ['n \\to +\\infty']),
    statistica__templateObject109 = statistica__taggedTemplateLiteralLoose(['p \to 0'], ['p \\to 0']),
    statistica__templateObject110 = statistica__taggedTemplateLiteralLoose(['E(X) = n cdot p \to mu \neq 0'], ['E(X) = n \\cdot p \\to \\mu \\neq 0']),
    statistica__templateObject111 = statistica__taggedTemplateLiteralLoose(['Poi(mu)'], ['Poi(\\mu)']),
    statistica__templateObject112 = statistica__taggedTemplateLiteralLoose(['f_X (k) : mathbb{N} = \frac{e^{-mu} cdot mu^k}{k!}'], ['f_X (k) : \\mathbb{N} = \\frac{e^{-\\mu} \\cdot \\mu^k}{k!}']),
    statistica__templateObject113 = statistica__taggedTemplateLiteralLoose(['m_X (t) = e^{mu cdot (e^t - 1)}'], ['m_X (t) = e^{\\mu \\cdot (e^t - 1)}']),
    statistica__templateObject114 = statistica__taggedTemplateLiteralLoose(['E(X) = mu'], ['E(X) = \\mu']),
    statistica__templateObject115 = statistica__taggedTemplateLiteralLoose(['Var(X) = mu'], ['Var(X) = \\mu']),
    statistica__templateObject116 = statistica__taggedTemplateLiteralLoose(['E(X^2) = mu^2 + mu'], ['E(X^2) = \\mu^2 + \\mu']),
    statistica__templateObject117 = statistica__taggedTemplateLiteralLoose(['lambda'], ['\\lambda']),
    statistica__templateObject118 = statistica__taggedTemplateLiteralLoose(['mu = t cdot lambda'], ['\\mu = t \\cdot \\lambda']),
    statistica__templateObject119 = statistica__taggedTemplateLiteralLoose(['Poi(t cdot lambda)'], ['Poi(t \\cdot \\lambda)']),
    statistica__templateObject120 = statistica__taggedTemplateLiteralLoose(['Esp(lambda)'], ['Esp(\\lambda)']),
    statistica__templateObject121 = statistica__taggedTemplateLiteralLoose(['f_X (x) = \begin{cases}\n                            0 qquad qquad x < 0\\\n                            lambda cdot e^{-lambda cdot x} quad x > 0\n                            end{cases}'], ['f_X (x) = \\begin{cases}\n                            0 \\qquad \\qquad x < 0\\\\\n                            \\lambda \\cdot e^{-\\lambda \\cdot x} \\quad x > 0\n                            \\end{cases}']),
    statistica__templateObject122 = statistica__taggedTemplateLiteralLoose(['F_X (t) = \begin{cases}\n                            0 qquad qquad t < 0\\\n                            1 - e^{-lambda cdot t} quad t geq 0\n                            end{cases}'], ['F_X (t) = \\begin{cases}\n                            0 \\qquad \\qquad t < 0\\\\\n                            1 - e^{-\\lambda \\cdot t} \\quad t \\geq 0\n                            \\end{cases}']),
    statistica__templateObject123 = statistica__taggedTemplateLiteralLoose(['m_X (t) : { t | t < lambda } in mathbb{R} = \frac{lambda}{lambda - t}'], ['m_X (t) : \\{ t | t < \\lambda \\} \\in \\mathbb{R} = \\frac{\\lambda}{\\lambda - t}']),
    statistica__templateObject124 = statistica__taggedTemplateLiteralLoose(['E(X) = \frac{1}{lambda}'], ['E(X) = \\frac{1}{\\lambda}']),
    statistica__templateObject125 = statistica__taggedTemplateLiteralLoose(['Var(X) = \frac{1}{lambda^2}'], ['Var(X) = \\frac{1}{\\lambda^2}']),
    statistica__templateObject126 = statistica__taggedTemplateLiteralLoose(['P([X > s + t | X > s]) = P([X > t])'], ['P([X > s + t | X > s]) = P([X > t])']),
    _templateObject127 = statistica__taggedTemplateLiteralLoose(['Gamma(n, lambda)'], ['\\Gamma(n, \\lambda)']),
    _templateObject128 = statistica__taggedTemplateLiteralLoose(['f_X (x) = \begin{cases}\n                            0 qquad qquad qquad qquad qquad x < 0\\\n                            \frac{1}{(n-1)!} cdot lambda^n cdot x^{n-1} cdot e^{-lambda cdot x} quad k > 0\n                            end{cases}'], ['f_X (x) = \\begin{cases}\n                            0 \\qquad \\qquad \\qquad \\qquad \\qquad x < 0\\\\\n                            \\frac{1}{(n-1)!} \\cdot \\lambda^n \\cdot x^{n-1} \\cdot e^{-\\lambda \\cdot x} \\quad k > 0\n                            \\end{cases}']),
    _templateObject129 = statistica__taggedTemplateLiteralLoose(['m_X (t) : ( t < lambda ) in mathbb{R} = left( \frac{lambda}{lambda - t} \right) ^alpha'], ['m_X (t) : ( t < \\lambda ) \\in \\mathbb{R} = \\left( \\frac{\\lambda}{\\lambda - t} \\right) ^\\alpha']),
    _templateObject130 = statistica__taggedTemplateLiteralLoose(['E(X) = \frac{alpha}{lambda}'], ['E(X) = \\frac{\\alpha}{\\lambda}']),
    _templateObject131 = statistica__taggedTemplateLiteralLoose(['Var(X) = \frac{alpha}{lambda^2}'], ['Var(X) = \\frac{\\alpha}{\\lambda^2}']),
    _templateObject132 = statistica__taggedTemplateLiteralLoose(['[a, b]'], ['[a, b]']),
    _templateObject133 = statistica__taggedTemplateLiteralLoose(['Uni(a, b)'], ['Uni(a, b)']),
    _templateObject134 = statistica__taggedTemplateLiteralLoose(['P(X in (c, d)) = \frac{d - c}{b - a}'], ['P(X \\in (c, d)) = \\frac{d - c}{b - a}']),
    _templateObject135 = statistica__taggedTemplateLiteralLoose(['f_X (x) = \begin{cases}\n                                \frac{1}{b - a} qquad a leq x leq b\\\n                                0 qquad quad altrimenti    \n                            end{cases}'], ['f_X (x) = \\begin{cases}\n                                \\frac{1}{b - a} \\qquad a \\leq x \\leq b\\\\\n                                0 \\qquad \\quad altrimenti    \n                            \\end{cases}']),
    _templateObject136 = statistica__taggedTemplateLiteralLoose(['f_X (x) = \begin{cases}\n                                0 qquad quad x < a  \n                                \frac{1}{b - a} qquad a leq x leq b\\\n                                1 qquad quad x > b\n                            end{cases}'], ['f_X (x) = \\begin{cases}\n                                0 \\qquad \\quad x < a  \n                                \\frac{1}{b - a} \\qquad a \\leq x \\leq b\\\\\n                                1 \\qquad \\quad x > b\n                            \\end{cases}']),
    _templateObject137 = statistica__taggedTemplateLiteralLoose(['m_X (t) = \frac{e^{b cdot t} - e^{a cdot t}}{(b - a) cdot t}'], ['m_X (t) = \\frac{e^{b \\cdot t} - e^{a \\cdot t}}{(b - a) \\cdot t}']),
    _templateObject138 = statistica__taggedTemplateLiteralLoose(['E(X) = \frac{a + b}{2}'], ['E(X) = \\frac{a + b}{2}']),
    _templateObject139 = statistica__taggedTemplateLiteralLoose(['Var(X) = \frac{(b - a)^2}{12}'], ['Var(X) = \\frac{(b - a)^2}{12}']),
    _templateObject140 = statistica__taggedTemplateLiteralLoose(['Nor(mu, sigma^2)'], ['Nor(\\mu, \\sigma^2)']),
    _templateObject141 = statistica__taggedTemplateLiteralLoose(['f_X (x) = \frac{e^{-\frac{(x - mu)^2}{2 sigma^2}}}{sqrt{2 pi cdot sigma^2}}'], ['f_X (x) = \\frac{e^{-\\frac{(x - \\mu)^2}{2 \\sigma^2}}}{\\sqrt{2 \\pi \\cdot \\sigma^2}}']),
    _templateObject142 = statistica__taggedTemplateLiteralLoose(['m_X (t) = e^{mu cdot t + \frac{sigma^2 cdot t^2}{2}}'], ['m_X (t) = e^{\\mu \\cdot t + \\frac{\\sigma^2 \\cdot t^2}{2}}']),
    _templateObject143 = statistica__taggedTemplateLiteralLoose(['Var(X) = sigma^2'], ['Var(X) = \\sigma^2']),
    _templateObject144 = statistica__taggedTemplateLiteralLoose(['X sim Nor(m, v^2) implies alpha X + \beta sim Nor(alpha m + \beta, (alpha v)^2)'], ['X \\sim Nor(m, v^2) \\implies \\alpha X + \\beta \\sim Nor(\\alpha m + \\beta, (\\alpha v)^2)']),
    _templateObject145 = statistica__taggedTemplateLiteralLoose(['phi(z)'], ['\\phi(z)']),
    _templateObject146 = statistica__taggedTemplateLiteralLoose(['F_Z(z) = phi(z) = \frac{1}{sqrt{2 pi}} int_{-infty}^{z} e^{-\frac{x^2}{2}} dx'], ['F_Z(z) = \\phi(z) = \\frac{1}{\\sqrt{2 \\pi}} \\int_{-\\infty}^{z} e^{-\\frac{x^2}{2}} dx']),
    _templateObject147 = statistica__taggedTemplateLiteralLoose(['z_alpha'], ['z_\\alpha']),
    _templateObject148 = statistica__taggedTemplateLiteralLoose(['x_alpha = mu + z_alpha cdot sqrt{sigma^2}'], ['x_\\alpha = \\mu + z_\\alpha \\cdot \\sqrt{\\sigma^2}']),
    _templateObject149 = statistica__taggedTemplateLiteralLoose(['Z^2 sim chi^2 (v = 1)'], ['Z^2 \\sim \\chi^2 (v = 1)']),
    _templateObject150 = statistica__taggedTemplateLiteralLoose(['Gamma left( \frac{1}{2}, \frac{1}{2} \right) = chi^2 (v = 1)'], ['\\Gamma \\left( \\frac{1}{2}, \\frac{1}{2} \\right) = \\chi^2 (v = 1)']),
    _templateObject151 = statistica__taggedTemplateLiteralLoose(['chi^2 (n) + chi^2 (m) = chi^2 (n + m)'], ['\\chi^2 (n) + \\chi^2 (m) = \\chi^2 (n + m)']),
    _templateObject152 = statistica__taggedTemplateLiteralLoose(['T(v) = \frac{Nor(0, 1)}{sqrt{\frac{chi^2(v)}{v}}}'], ['T(v) = \\frac{Nor(0, 1)}{\\sqrt{\\frac{\\chi^2(v)}{v}}}']),
    _templateObject153 = statistica__taggedTemplateLiteralLoose(['Ipe(N, K, n) approx Bin(n, \frac{K}{N})'], ['Ipe(N, K, n) \\approx Bin(n, \\frac{K}{N})']),
    _templateObject154 = statistica__taggedTemplateLiteralLoose(['Bin(n, p) approx Poi(n cdot p)'], ['Bin(n, p) \\approx Poi(n \\cdot p)']),
    _templateObject155 = statistica__taggedTemplateLiteralLoose(['Bin(n, p) approx Nor(n cdot p, n cdot p cdot q)'], ['Bin(n, p) \\approx Nor(n \\cdot p, n \\cdot p \\cdot q)']),
    _templateObject156 = statistica__taggedTemplateLiteralLoose(['(k - \frac{1}{2}, k + \frac{1}{2})'], ['(k - \\frac{1}{2}, k + \\frac{1}{2})']),
    _templateObject157 = statistica__taggedTemplateLiteralLoose(['P(X < k) simeq P(Y leq k - \frac{1}{2})'], ['P(X < k) \\simeq P(Y \\leq k - \\frac{1}{2})']),
    _templateObject158 = statistica__taggedTemplateLiteralLoose(['P(X leq k) simeq P(Y leq k + \frac{1}{2})'], ['P(X \\leq k) \\simeq P(Y \\leq k + \\frac{1}{2})']),
    _templateObject159 = statistica__taggedTemplateLiteralLoose(['P(X geq k) simeq P(Y geq k - \frac{1}{2})'], ['P(X \\geq k) \\simeq P(Y \\geq k - \\frac{1}{2})']),
    _templateObject160 = statistica__taggedTemplateLiteralLoose(['P(X > k) simeq P(Y geq k + \frac{1}{2})'], ['P(X > k) \\simeq P(Y \\geq k + \\frac{1}{2})']),
    _templateObject161 = statistica__taggedTemplateLiteralLoose(['\boldsymbol{X}'], ['\\boldsymbol{X}']),
    _templateObject162 = statistica__taggedTemplateLiteralLoose(['X, Y'], ['X, Y']),
    _templateObject163 = statistica__taggedTemplateLiteralLoose(['F_{X, Y} (x, y) = P(X leq x, Y leq y)'], ['F_{X, Y} (x, y) = P(X \\leq x, Y \\leq y)']),
    _templateObject164 = statistica__taggedTemplateLiteralLoose(['F_X (x) = P(X leq x) = lim_{y \to +infty} F_{X, Y} (x, y)'], ['F_X (x) = P(X \\leq x) = \\lim_{y \\to +\\infty} F_{X, Y} (x, y)']),
    _templateObject165 = statistica__taggedTemplateLiteralLoose(['p_{X, Y} (x, y) = P(X = x, Y = y)'], ['p_{X, Y} (x, y) = P(X = x, Y = y)']),
    _templateObject166 = statistica__taggedTemplateLiteralLoose(['p_X (x) = sum_j p_{X, Y} (x_i, y_j)'], ['p_X (x) = \\sum_j p_{X, Y} (x_i, y_j)']),
    _templateObject167 = statistica__taggedTemplateLiteralLoose(['P(X_1 in A_1, dots, X_n in A_n) = P(X_1 in A_1) \times dots \times P(X_n in A_n)'], ['P(X_1 \\in A_1, \\dots, X_n \\in A_n) = P(X_1 \\in A_1) \\times \\dots \\times P(X_n \\in A_n)']),
    _templateObject168 = statistica__taggedTemplateLiteralLoose(['E(g(X, Y)) = sum_{i, j} g(x_i, y_i) cdot p_{X, Y} (x_i, y_i)'], ['E(g(X, Y)) = \\sum_{i, j} g(x_i, y_i) \\cdot p_{X, Y} (x_i, y_i)']),
    _templateObject169 = statistica__taggedTemplateLiteralLoose(['E(X + Y) = E(X) + E(Y)'], ['E(X + Y) = E(X) + E(Y)']),
    _templateObject170 = statistica__taggedTemplateLiteralLoose(['Cov(X, Y) = E((X - E(X) cdot (Y - E(Y)) = E(XY) - E(X) cdot E(Y)'], ['Cov(X, Y) = E((X - E(X) \\cdot (Y - E(Y)) = E(XY) - E(X) \\cdot E(Y)']),
    _templateObject171 = statistica__taggedTemplateLiteralLoose(['Cov(X, alpha) = 0'], ['Cov(X, \\alpha) = 0']),
    _templateObject172 = statistica__taggedTemplateLiteralLoose(['Cov(X, Y) = Cov(Y, X)'], ['Cov(X, Y) = Cov(Y, X)']),
    _templateObject173 = statistica__taggedTemplateLiteralLoose(['Cov(X, X) = Var(X)'], ['Cov(X, X) = Var(X)']),
    _templateObject174 = statistica__taggedTemplateLiteralLoose(['Cov(alpha X, \beta Y) = alpha cdot \beta cdot Cov(X, Y)'], ['Cov(\\alpha X, \\beta Y) = \\alpha \\cdot \\beta \\cdot Cov(X, Y)']),
    _templateObject175 = statistica__taggedTemplateLiteralLoose(['Cov(X + Y, V + W) = Cov(X, Y) + Cov(X, W) + Cov(Y, V) + Cov(Y, W)'], ['Cov(X + Y, V + W) = Cov(X, Y) + Cov(X, W) + Cov(Y, V) + Cov(Y, W)']),
    _templateObject176 = statistica__taggedTemplateLiteralLoose(['Cov(X, Y) = 0'], ['Cov(X, Y) = 0']),
    _templateObject177 = statistica__taggedTemplateLiteralLoose(['\boldsymbol{C_X}'], ['\\boldsymbol{C_X}']),
    _templateObject178 = statistica__taggedTemplateLiteralLoose(['\n                                \boldsymbol{C_X} = \n                                \begin{bmatrix}\n                                    Var(X_1) & Cov(X_1, X_2) & Cov(X_1, X_3)\\\n                                    Cov(X_2, X_1) & Var(X_2) & Cov(X_2, X_3)\\\n                                    Cov(X_3, X_1) & Cov(X_3, X_2) & Var(X_3)\n                                end{bmatrix}\n                            '], ['\n                                \\boldsymbol{C_X} = \n                                \\begin{bmatrix}\n                                    Var(X_1) & Cov(X_1, X_2) & Cov(X_1, X_3)\\\\\n                                    Cov(X_2, X_1) & Var(X_2) & Cov(X_2, X_3)\\\\\n                                    Cov(X_3, X_1) & Cov(X_3, X_2) & Var(X_3)\n                                \\end{bmatrix}\n                            ']),
    _templateObject179 = statistica__taggedTemplateLiteralLoose(['\rho_{X, Y} = \frac{Cov(X, Y)}{sqrt{Var(X)} cdot sqrt{Var(Y)}}'], ['\\rho_{X, Y} = \\frac{Cov(X, Y)}{\\sqrt{Var(X)} \\cdot \\sqrt{Var(Y)}}']),
    _templateObject180 = statistica__taggedTemplateLiteralLoose(['-1 leq \rho_{X, Y} leq 1'], ['-1 \\leq \\rho_{X, Y} \\leq 1']),
    _templateObject181 = statistica__taggedTemplateLiteralLoose(['Y = a X + b Longleftrightarrow | \rho_{X, Y} | = 1'], ['Y = a X + b \\Longleftrightarrow | \\rho_{X, Y} | = 1']),
    _templateObject182 = statistica__taggedTemplateLiteralLoose(['Var(X + Y) = Var(X) + Var(Y) + 2 cdot Cov(X, Y)'], ['Var(X + Y) = Var(X) + Var(Y) + 2 \\cdot Cov(X, Y)']),
    _templateObject183 = statistica__taggedTemplateLiteralLoose(['Var left( sum_i X_i \right) = sum_i Var(X_i)'], ['Var \\left( \\sum_i X_i \\right) = \\sum_i Var(X_i)']),
    _templateObject184 = statistica__taggedTemplateLiteralLoose(['M^{(k)}_n = \frac{1}{n} cdot sum_{i = 1}^n X_i^k '], ['M^{(k)}_n = \\frac{1}{n} \\cdot \\sum_{i = 1}^n X_i^k ']),
    _templateObject185 = statistica__taggedTemplateLiteralLoose(['overline{X}_n'], ['\\overline{X}_n']),
    _templateObject186 = statistica__taggedTemplateLiteralLoose(['m = E(X)'], ['m = E(X)']),
    _templateObject187 = statistica__taggedTemplateLiteralLoose(['S_0^2 = \frac{1}{n} cdot sum_{i = 1}^n (X_i - m)^2 = M_n^(2) - 2 cdot m cdot overline{X}_n + m^2'], ['S_0^2 = \\frac{1}{n} \\cdot \\sum_{i = 1}^n (X_i - m)^2 = M_n^(2) - 2 \\cdot m \\cdot \\overline{X}_n + m^2']),
    _templateObject188 = statistica__taggedTemplateLiteralLoose(['S_n^2 = \frac{1}{n - 1} cdot sum_{i = 1}^n (X_i - overline{X}_n)^2 = \frac{1}{n - 1} cdot ( n cdot M_2^{(2)} - n cdot overline{X}_n^2)'], ['S_n^2 = \\frac{1}{n - 1} \\cdot \\sum_{i = 1}^n (X_i - \\overline{X}_n)^2 = \\frac{1}{n - 1} \\cdot ( n \\cdot M_2^{(2)} - n \\cdot \\overline{X}_n^2)']),
    _templateObject189 = statistica__taggedTemplateLiteralLoose(['E(overline{X}_n) = E(X)'], ['E(\\overline{X}_n) = E(X)']),
    _templateObject190 = statistica__taggedTemplateLiteralLoose(['Var(overline{X}_n) = \frac{Var(X)}{n}'], ['Var(\\overline{X}_n) = \\frac{Var(X)}{n}']),
    _templateObject191 = statistica__taggedTemplateLiteralLoose(['E(S_0^2) = E(S_n^2) = Var(X)'], ['E(S_0^2) = E(S_n^2) = Var(X)']),
    _templateObject192 = statistica__taggedTemplateLiteralLoose(['X sim Nor(mu, sigma^2)'], ['X \\sim Nor(\\mu, \\sigma^2)']),
    _templateObject193 = statistica__taggedTemplateLiteralLoose(['overline{X}_n sim Nor left( mu, \frac{sigma^2}{n} \right)'], ['\\overline{X}_n \\sim Nor \\left( \\mu, \\frac{\\sigma^2}{n} \\right)']),
    _templateObject194 = statistica__taggedTemplateLiteralLoose(['S_0^2 sim \frac{sigma^2}{n} cdot chi^2 (n)'], ['S_0^2 \\sim \\frac{\\sigma^2}{n} \\cdot \\chi^2 (n)']),
    _templateObject195 = statistica__taggedTemplateLiteralLoose(['S_n^2 sim \frac{sigma^2}{n - 1} cdot chi^2 (n-1)'], ['S_n^2 \\sim \\frac{\\sigma^2}{n - 1} \\cdot \\chi^2 (n-1)']),
    _templateObject196 = statistica__taggedTemplateLiteralLoose(['E(X)'], ['E(X)']),
    _templateObject197 = statistica__taggedTemplateLiteralLoose(['\forall epsilon > 0, lim_{n \to +infty} P( | overline{X}_n - E(X) | < epsilon) = 1'], ['\\forall \\epsilon > 0, \\lim_{n \\to +\\infty} P( | \\overline{X}_n - E(X) | < \\epsilon) = 1']),
    _templateObject198 = statistica__taggedTemplateLiteralLoose(['P( | overline{X}_n - E(X) | < epsilon) \to 1'], ['P( | \\overline{X}_n - E(X) | < \\epsilon) \\to 1']),
    _templateObject199 = statistica__taggedTemplateLiteralLoose(['\forall epsilon > 0, P left( lim_{n \to +infty} | overline{X}_n - E(X) | < epsilon \right) = 1'], ['\\forall \\epsilon > 0, P \\left( \\lim_{n \\to +\\infty} | \\overline{X}_n - E(X) | < \\epsilon \\right) = 1']),
    _templateObject200 = statistica__taggedTemplateLiteralLoose(['Nor(0, 1) = Phi()'], ['Nor(0, 1) = \\Phi()']),
    _templateObject201 = statistica__taggedTemplateLiteralLoose(['overline{X}_n approx Nor left(E(X), \frac{Var(X)}{n} \right)'], ['\\overline{X}_n \\approx Nor \\left(E(X), \\frac{Var(X)}{n} \\right)']),
    _templateObject202 = statistica__taggedTemplateLiteralLoose(['\forall x in mathbb{R}, lim_{n \to +infty} P left( \frac{overline{X}_n - E(X)}{sqrt{\frac{Var(X)}{n}}} leq x \right) = Phi(x)'], ['\\forall x \\in \\mathbb{R}, \\lim_{n \\to +\\infty} P \\left( \\frac{\\overline{X}_n - E(X)}{\\sqrt{\\frac{Var(X)}{n}}} \\leq x \\right) = \\Phi(x)']),
    _templateObject203 = statistica__taggedTemplateLiteralLoose(['overline{Bin} (n, p) approx Nor left( \frac{n}{p}, \frac{n cdot (1 - p)}{p^2} \right)'], ['\\overline{Bin} (n, p) \\approx Nor \\left( \\frac{n}{p}, \\frac{n \\cdot (1 - p)}{p^2} \\right)']),
    _templateObject204 = statistica__taggedTemplateLiteralLoose(['Poi(lambda) approx Nor(lambda, lambda)'], ['Poi(\\lambda) \\approx Nor(\\lambda, \\lambda)']),
    _templateObject205 = statistica__taggedTemplateLiteralLoose(['Gamma (alpha, lambda) approx Nor left( \frac{alpha}{lambda}, \frac{alpha}{lambda^2} \right)'], ['\\Gamma (\\alpha, \\lambda) \\approx Nor \\left( \\frac{\\alpha}{\\lambda}, \\frac{\\alpha}{\\lambda^2} \\right)']),
    _templateObject206 = statistica__taggedTemplateLiteralLoose(['Y = sum_{i=1}^{n} X_i'], ['Y = \\sum_{i=1}^{n} X_i']),
    _templateObject207 = statistica__taggedTemplateLiteralLoose(['T(\boldsymbol{X})'], ['T(\\boldsymbol{X})']),
    _templateObject208 = statistica__taggedTemplateLiteralLoose(['T(\boldsymbol{X}) = \boldsymbol{X}'], ['T(\\boldsymbol{X}) = \\boldsymbol{X}']),
    _templateObject209 = statistica__taggedTemplateLiteralLoose(['E(T_n) = \theta'], ['E(T_n) = \\theta']),
    _templateObject210 = statistica__taggedTemplateLiteralLoose(['lim_{n \to +infty} E(T_n) = \theta'], ['\\lim_{n \\to +\\infty} E(T_n) = \\theta']),
    _templateObject211 = statistica__taggedTemplateLiteralLoose(['lim_{n \to +infty} E((T_n - \theta)^2) = 0'], ['\\lim_{n \\to +\\infty} E((T_n - \\theta)^2) = 0']),
    _templateObject212 = statistica__taggedTemplateLiteralLoose(['\forall epsilon > 0, lim_{n \to +infty} P( |T_n - \theta| < epsilon) = 1'], ['\\forall \\epsilon > 0, \\lim_{n \\to +\\infty} P( |T_n - \\theta| < \\epsilon) = 1']),
    _templateObject213 = statistica__taggedTemplateLiteralLoose(['lim_{n \to +infty} \frac{T_n - E(T_n)}{sqrt{Var(T_n)}} sim Nor(0, 1)'], ['\\lim_{n \\to +\\infty} \\frac{T_n - E(T_n)}{\\sqrt{Var(T_n)}} \\sim Nor(0, 1)']),
    _templateObject214 = statistica__taggedTemplateLiteralLoose(['\theta'], ['\\theta']),
    _templateObject215 = statistica__taggedTemplateLiteralLoose(['widehat{\theta}_M'], ['\\widehat{\\theta}_M']),
    _templateObject216 = statistica__taggedTemplateLiteralLoose(['\theta = g(E(X))'], ['\\theta = g(E(X))']),
    _templateObject217 = statistica__taggedTemplateLiteralLoose(['widehat{E(X)} = overline{X}_n'], ['\\widehat{E(X)} = \\overline{X}_n']),
    _templateObject218 = statistica__taggedTemplateLiteralLoose(['widehat{\theta}_M = g( overline{X}_n )'], ['\\widehat{\\theta}_M = g( \\overline{X}_n )']),
    _templateObject219 = statistica__taggedTemplateLiteralLoose(['M_n^2'], ['M_n^2']),
    _templateObject220 = statistica__taggedTemplateLiteralLoose(['M_n^3'], ['M_n^3']),
    _templateObject221 = statistica__taggedTemplateLiteralLoose(['widehat{\theta}_L'], ['\\widehat{\\theta}_L']),
    _templateObject222 = statistica__taggedTemplateLiteralLoose(['L'], ['L']),
    _templateObject223 = statistica__taggedTemplateLiteralLoose(['L(x_1, ..., x_n; \theta) = prod_{i=1}^n f_X(x_i; \theta)'], ['L(x_1, ..., x_n; \\theta) = \\prod_{i=1}^n f_X(x_i; \\theta)']),
    _templateObject224 = statistica__taggedTemplateLiteralLoose(['widehat{g(\theta)}_L = g(widehat{\theta}_L)'], ['\\widehat{g(\\theta)}_L = g(\\widehat{\\theta}_L)']),
    _templateObject225 = statistica__taggedTemplateLiteralLoose(['widehat{p}_M = widehat{p}_L = overline{X}_n'], ['\\widehat{p}_M = \\widehat{p}_L = \\overline{X}_n']),
    _templateObject226 = statistica__taggedTemplateLiteralLoose(['widehat{mu}_M = widehat{mu}_L = overline{X}_n'], ['\\widehat{\\mu}_M = \\widehat{\\mu}_L = \\overline{X}_n']),
    _templateObject227 = statistica__taggedTemplateLiteralLoose(['widehat{lambda}_M = widehat{lambda}_L = \frac{1}{overline{X}_n}'], ['\\widehat{\\lambda}_M = \\widehat{\\lambda}_L = \\frac{1}{\\overline{X}_n}']),
    _templateObject228 = statistica__taggedTemplateLiteralLoose(['widehat{mu}_L = overline{X}_n'], ['\\widehat{\\mu}_L = \\overline{X}_n']),
    _templateObject229 = statistica__taggedTemplateLiteralLoose(['widehat{sigma^2}_L = \frac{sum (X_i - overline{X}_n)^2 }{n}'], ['\\widehat{\\sigma^2}_L = \\frac{\\sum (X_i - \\overline{X}_n)^2 }{n}']),
    _templateObject230 = statistica__taggedTemplateLiteralLoose(['widehat{W}'], ['\\widehat{W}']),
    _templateObject231 = statistica__taggedTemplateLiteralLoose(['P( a < W < b ) = N'], ['P( a < W < b ) = N']),
    _templateObject232 = statistica__taggedTemplateLiteralLoose(['mu in left[ overline{x}_n - z_{1 - \frac{alpha}{2}} cdot sqrt{\frac{sigma^2}{n}}, overline{x}_n + z_{1 - \frac{alpha}{2}} cdot sqrt{\frac{sigma^2}{n}} \right]'], ['\\mu \\in \\left[ \\overline{x}_n - z_{1 - \\frac{\\alpha}{2}} \\cdot \\sqrt{\\frac{\\sigma^2}{n}}, \\overline{x}_n + z_{1 - \\frac{\\alpha}{2}} \\cdot \\sqrt{\\frac{\\sigma^2}{n}} \\right]']),
    _templateObject233 = statistica__taggedTemplateLiteralLoose(['mu in left( -infty, overline{x}_n + z_{1 - \frac{alpha}{2}} cdot sqrt{\frac{sigma^2}{n}} \right]'], ['\\mu \\in \\left( -\\infty, \\overline{x}_n + z_{1 - \\frac{\\alpha}{2}} \\cdot \\sqrt{\\frac{\\sigma^2}{n}} \\right]']),
    _templateObject234 = statistica__taggedTemplateLiteralLoose(['mu in left[ overline{x}_n - z_{1 - \frac{alpha}{2}} cdot sqrt{\frac{sigma^2}{n}}, +infty \right)'], ['\\mu \\in \\left[ \\overline{x}_n - z_{1 - \\frac{\\alpha}{2}} \\cdot \\sqrt{\\frac{\\sigma^2}{n}}, +\\infty \\right)']),
    _templateObject235 = statistica__taggedTemplateLiteralLoose(['mu in left[ overline{x}_n - t_{1 - \frac{alpha}{2}; n-1} cdot sqrt{\frac{s_n^2}{n}}, overline{x}_n + t_{1 - \frac{alpha}{2}; n-1} cdot sqrt{\frac{s_n^2}{n}} \right]'], ['\\mu \\in \\left[ \\overline{x}_n - t_{1 - \\frac{\\alpha}{2}; n-1} \\cdot \\sqrt{\\frac{s_n^2}{n}}, \\overline{x}_n + t_{1 - \\frac{\\alpha}{2}; n-1} \\cdot \\sqrt{\\frac{s_n^2}{n}} \\right]']),
    _templateObject236 = statistica__taggedTemplateLiteralLoose(['mu in left( -infty, overline{x}_n + t_{1 - \frac{alpha}{2}; n-1} cdot sqrt{\frac{s_n^2}{n}} \right]'], ['\\mu \\in \\left( -\\infty, \\overline{x}_n + t_{1 - \\frac{\\alpha}{2}; n-1} \\cdot \\sqrt{\\frac{s_n^2}{n}} \\right]']),
    _templateObject237 = statistica__taggedTemplateLiteralLoose(['mu in left[ overline{x}_n - t_{1 - \frac{alpha}{2}; n-1} cdot sqrt{\frac{s_n^2}{n}}, +infty \right)'], ['\\mu \\in \\left[ \\overline{x}_n - t_{1 - \\frac{\\alpha}{2}; n-1} \\cdot \\sqrt{\\frac{s_n^2}{n}}, +\\infty \\right)']),
    _templateObject238 = statistica__taggedTemplateLiteralLoose(['t_{alpha, v}'], ['t_{\\alpha, v}']),
    _templateObject239 = statistica__taggedTemplateLiteralLoose(['p in left[ overline{p} - z_{1 - \frac{alpha}{2}} cdot sqrt{\frac{overline{p} cdot (1 - overline{p})}{n+4}}, overline{p} + z_{1 - \frac{alpha}{2}} cdot sqrt{\frac{overline{p} cdot (1 - overline{p})}{n+4}} \right]'], ['p \\in \\left[ \\overline{p} - z_{1 - \\frac{\\alpha}{2}} \\cdot \\sqrt{\\frac{\\overline{p} \\cdot (1 - \\overline{p})}{n+4}}, \\overline{p} + z_{1 - \\frac{\\alpha}{2}} \\cdot \\sqrt{\\frac{\\overline{p} \\cdot (1 - \\overline{p})}{n+4}} \\right]']),
    _templateObject240 = statistica__taggedTemplateLiteralLoose(['m in left[ overline{x}_n - z_{1 - \frac{alpha}{2}} cdot sqrt{\frac{s^2_n}{n}}, overline{x}_n + z_{1 - \frac{alpha}{2}} cdot sqrt{\frac{s^2_n}{n}} \right]'], ['m \\in \\left[ \\overline{x}_n - z_{1 - \\frac{\\alpha}{2}} \\cdot \\sqrt{\\frac{s^2_n}{n}}, \\overline{x}_n + z_{1 - \\frac{\\alpha}{2}} \\cdot \\sqrt{\\frac{s^2_n}{n}} \\right]']);



function statistica__taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

function statistica__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function statistica__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function statistica__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var statistica_r = String.raw;

var statistica__ref = Object(preact_min["h"])(
    'h1',
    null,
    'Statistica ed Elementi di Probabilit\xE0'
);

var statistica__ref2 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Soggettiva" },
    Object(preact_min["h"])(
        'p',
        null,
        'Il prezzo che un individuo coerente riterrebbe equo per ricevere ',
        Object(preact_min["h"])(
            'b',
            null,
            '1'
        ),
        ' nel caso l\'evento si verificasse e ',
        Object(preact_min["h"])(
            'b',
            null,
            '0'
        ),
        ' nel caso l\'evento non si verificasse.'
    )
);

var statistica__ref3 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"omegone"'
);

var statistica__ref4 = Object(preact_min["h"])(
    'p',
    null,
    'L\'',
    Object(preact_min["h"])(
        'b',
        null,
        'insieme'
    ),
    ' di tutti gli esiti possibili di un esperimento.'
);

var statistica__ref5 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"omeghino"'
);

var statistica__ref6 = Object(preact_min["h"])(
    'p',
    null,
    'Un ',
    Object(preact_min["h"])(
        'b',
        null,
        'elemento'
    ),
    ' dello spazio campionario.'
);

var statistica__ref7 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"e"'
);

var statistica__ref8 = Object(preact_min["h"])(
    'p',
    null,
    'Un ',
    Object(preact_min["h"])(
        'b',
        null,
        'sottoinsieme'
    ),
    ' dello spazio campionario.'
);

var statistica__ref9 = Object(preact_min["h"])(
    'p',
    null,
    'Lo spazio campionario stesso \xE8 un ',
    Object(preact_min["h"])(
        'b',
        null,
        'evento certo'
    ),
    '.'
);

var statistica__ref10 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"not e"'
);

var statistica__ref11 = Object(preact_min["h"])(
    'p',
    null,
    'Il ',
    Object(preact_min["h"])(
        'b',
        null,
        'complementare'
    ),
    ' di un sottoinsieme.'
);

var statistica__ref12 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"e intersecato effe"'
);

var statistica__ref13 = Object(preact_min["h"])(
    'p',
    null,
    'L\'',
    Object(preact_min["h"])(
        'b',
        null,
        'intersezione'
    ),
    ' di pi\xF9 sottoinsiemi.'
);

var statistica__ref14 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"e unito a effe"'
);

var statistica__ref15 = Object(preact_min["h"])(
    'p',
    null,
    'L\'',
    Object(preact_min["h"])(
        'b',
        null,
        'unione'
    ),
    ' di pi\xF9 sottoinsiemi.'
);

var statistica__ref16 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"e meno effe"'
);

var statistica__ref17 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"e contenuto in effe"'
);

var statistica__ref18 = Object(preact_min["h"])(
    'p',
    null,
    'L\'',
    Object(preact_min["h"])(
        'b',
        null,
        'inclusione'
    ),
    ' del primo insieme in un altro.'
);

var statistica__ref19 = Object(preact_min["h"])(
    'p',
    null,
    'Se si verifica ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'E'
    ),
    ', allora si verifica anche ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'F'
    ),
    '.'
);

var statistica__ref20 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"e \xE8 impossibile"'
);

var statistica__ref21 = Object(preact_min["h"])(
    'p',
    null,
    'Un sottoinsieme ',
    Object(preact_min["h"])(
        'b',
        null,
        'vuoto'
    ),
    '.'
);

var statistica__ref22 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"e ed effe si escludono mutualmente"'
);

var statistica__ref23 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'disgiunzione'
    ),
    ' di due insiemi.'
);

var statistica__ref24 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"famiglia effe"'
);

var statistica__ref25 = Object(preact_min["h"])(
    'p',
    null,
    'I sottoinsiemi dello spazio campionario formano una ',
    Object(preact_min["h"])(
        'b',
        null,
        'famiglia'
    ),
    ' di sottoinsiemi detta ',
    Object(preact_min["h"])(
        'i',
        null,
        'famiglia degli eventi'
    ),
    '.'
);

var statistica__ref26 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"sigma algebra"'
);

var statistica__ref27 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"la partizione e composta da e uno, e due, e tre..."'
);

var statistica__ref28 = Object(preact_min["h"])(
    'p',
    null,
    'Un insieme di esiti e eventi:'
);

var statistica__ref29 = Object(preact_min["h"])(
    'ul',
    null,
    Object(preact_min["h"])(
        'li',
        null,
        Object(preact_min["h"])(
            'b',
            null,
            'Finito'
        ),
        '.'
    ),
    Object(preact_min["h"])(
        'li',
        null,
        'In cui tutti gli eventi hanno ',
        Object(preact_min["h"])(
            'b',
            null,
            'probabilit\xE0 diversa da 0'
        ),
        '.'
    ),
    Object(preact_min["h"])(
        'li',
        null,
        'In cui tutti gli eventi sono ',
        Object(preact_min["h"])(
            'b',
            null,
            'mutualmente esclusivi'
        ),
        '.'
    ),
    Object(preact_min["h"])(
        'li',
        null,
        'In cui l\'unione di tutti i suoi elementi ',
        Object(preact_min["h"])(
            'b',
            null,
            'copre lo spazio campionario'
        ),
        '.'
    )
);

var statistica__ref30 = Object(preact_min["h"])(
    example_Example,
    null,
    'Se lo spazio campionario fosse una torta, una sua partizione sarebbe l\'insieme delle fette di uno dei modi in cui si potrebbe tagliare.'
);

var statistica__ref31 = Object(preact_min["h"])(
    'p',
    null,
    'La probabilit\xE0 di un evento \xE8 un numero tra 0 e 1.'
);

var statistica__ref32 = Object(preact_min["h"])(
    'p',
    null,
    'La probabilit\xE0 dello spazio campionario \xE8 sempre 1.'
);

var statistica__ref33 = Object(preact_min["h"])(
    'p',
    null,
    'La probabilit\xE0 dell\'unione di eventi indipendenti \xE8 uguale alla somma delle loro probabilit\xE0.'
);

var statistica__ref34 = Object(preact_min["h"])(
    'p',
    null,
    'La probabilit\xE0 di un evento negato \xE8 uguale a 1 meno la probabilit\xE0 dell\'evento non negato.'
);

var statistica__ref35 = Object(preact_min["h"])(
    'p',
    null,
    'La probabilit\xE0 di un evento incluso in un altro \xE8 sempre minore o uguale alla probabilit\xE0 dell\'evento in cui \xE8 incluso.'
);

var statistica__ref36 = Object(preact_min["h"])(
    'p',
    null,
    'La probabilit\xE0 di un evento unito a un altro \xE8 uguale alla somma delle probabilit\xE0 dei due eventi meno la probabilit\xE0 della loro intersezione.'
);

var statistica__ref37 = Object(preact_min["h"])(
    example_Example,
    null,
    'Sommando le probabilit\xE0 dei due eventi, l\'intersezione viene contata due volte, e va quindi rimossa!'
);

var statistica__ref38 = Object(preact_min["h"])(
    'p',
    null,
    'Spazi campionari in cui ci sono un numero finito di esiti e ogni esito ha la stessa probabilit\xE0 di verificarsi.'
);

var statistica__ref39 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Spazi equiprobabili geometrici" },
    Object(preact_min["h"])(
        'p',
        null,
        'Gli spazi campionari possono avere un numero infinito di esiti: sono ',
        Object(preact_min["h"])(
            'i',
            null,
            'equiprobabili geometrici'
        ),
        ' se nessun esito \xE8 privilegiato rispetto agli altri.'
    )
);

var statistica__ref40 = Object(preact_min["h"])(
    'p',
    null,
    'Estraggo un numero, da un sacchetto con ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' numeri, mi segno che numero ho estratto e lo ',
    Object(preact_min["h"])(
        'b',
        null,
        'tengo fuori dal sacchetto'
    ),
    '. Ripeto per ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'k'
    ),
    ' volte.'
);

var statistica__ref41 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        'b',
        null,
        'Tengo conto'
    ),
    ' dell\'ordine in cui ho estratto i numeri.'
);

var statistica__ref42 = Object(preact_min["h"])(
    'p',
    null,
    'Estraggo un numero, da un sacchetto con ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' numeri, mi segno che numero ho estratto e lo ',
    Object(preact_min["h"])(
        'b',
        null,
        'rimetto nel sacchetto'
    ),
    '. Ripeto per ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'k'
    ),
    ' volte.'
);

var statistica__ref43 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        'b',
        null,
        'Tengo conto'
    ),
    ' dell\'ordine in cui ho estratto i numeri.'
);

var statistica__ref44 = Object(preact_min["h"])(
    'p',
    null,
    'Estraggo un numero, da un sacchetto con ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' numeri, mi segno che numero ho estratto e lo ',
    Object(preact_min["h"])(
        'b',
        null,
        'tengo fuori dal sacchetto'
    ),
    '. Ripeto per ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'k'
    ),
    ' volte.'
);

var statistica__ref45 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        'b',
        null,
        'Non mi interessa'
    ),
    ' l\'ordine in cui ho estratto i numeri.'
);

var statistica__ref46 = Object(preact_min["h"])(
    'p',
    null,
    'Estraggo un numero, da un sacchetto con ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' numeri, mi segno che numero ho estratto e lo ',
    Object(preact_min["h"])(
        'b',
        null,
        'rimetto nel sacchetto'
    ),
    '. Ripeto per ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'k'
    ),
    ' volte.'
);

var statistica__ref47 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        'b',
        null,
        'Non mi interessa'
    ),
    ' l\'ordine in cui ho estratto i numeri.'
);

var statistica__ref48 = Object(preact_min["h"])(
    'p',
    null,
    'Estraggo ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' numeri e guardo in quanti ordini diversi li posso mettere.'
);

var statistica__ref49 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"E dato F"'
);

var statistica__ref50 = Object(preact_min["h"])(
    'p',
    null,
    'La probabilit\xE0 che si verifichi ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'E'
    ),
    ' sapendo che ',
    Object(preact_min["h"])(
        'b',
        null,
        'si \xE8 gi\xE0 verificato'
    ),
    ' ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'F'
    ),
    '.'
);

var statistica__ref51 = Object(preact_min["h"])(
    example_Example,
    null,
    'Ricorda vagamente le pipe di ',
    Object(preact_min["h"])(
        'code',
        null,
        'bash'
    ),
    ', per\xF2 al contrario...'
);

var statistica__ref52 = Object(preact_min["h"])(
    'p',
    null,
    'Se due eventi sono mutualmente esclusivi, entrambe le loro probabilit\xE0 condizionate saranno uguali a 0.'
);

var statistica__ref53 = Object(preact_min["h"])(
    'p',
    null,
    'Si pu\xF2 sfruttare la formula inversa della probabilit\xE0 condizionata per calcolare catene di intersezioni:'
);

var statistica__ref54 = Object(preact_min["h"])(
    'p',
    null,
    'La probabilit\xE0 che si verifichi un evento \xE8 pari alla somma delle probabilit\xE0 dell\'evento stesso dati tutti gli eventi di una partizione.'
);

var statistica__ref55 = Object(preact_min["h"])(
    'p',
    null,
    'La legge delle alternative funziona anche quando ad essere partizionato \xE8 un ',
    Object(preact_min["h"])(
        'b',
        null,
        'evento'
    ),
    ':'
);

var statistica__ref56 = Object(preact_min["h"])(
    'p',
    null,
    'Tramite la ',
    Object(preact_min["h"])(
        'i',
        null,
        'formula di Bayes'
    ),
    ' possiamo risalire alla probabilit\xE0 di un evento condizionato a un altro partendo dalla probabilit\xE0 di quest\'ultimo condizionato al primo:'
);

var statistica__ref57 = Object(preact_min["h"])(
    example_Example,
    null,
    'In pratica, invertiamo gli eventi.'
);

var statistica__ref58 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"eventi indipendenti a due a due"'
);

var statistica__ref59 = Object(preact_min["h"])(
    'p',
    null,
    'Se due eventi sono indipendenti, sapere che uno dei due si \xE8 verificato non influisce sulle probabilit\xE0 che si sia verificato l\'altro.'
);

var statistica__ref60 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"eventi indipendenti a tre a tre, a quattro a quattro, a cinque a cinque..."'
);

var statistica__ref61 = Object(preact_min["h"])(
    'p',
    null,
    'Si pu\xF2 verificare l\'indipendenza di pi\xF9 eventi alla volta:'
);

var statistica__ref62 = Object(preact_min["h"])(
    'p',
    null,
    'Eventi indipendenti a due a due non sono per forza indipendenti a tre a tre, e viceversa.'
);

var statistica__ref63 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Famiglia di eventi indipendenti" },
    Object(preact_min["h"])(
        'p',
        null,
        'Un insieme di ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'n'
        ),
        ' eventi \xE8 una ',
        Object(preact_min["h"])(
            'i',
            null,
            'famiglia di eventi indipendenti'
        ),
        ' se, preso un qualsiasi numero di eventi da essa, essi risulteranno indipendenti.'
    ),
    Object(preact_min["h"])(
        example_Example,
        null,
        'Tutti gli eventi provenienti da essa saranno indipendenti sia a due a due, sia a tre a tre, sia a quattro a quattro, e cos\xEC via!'
    )
);

var statistica__ref64 = Object(preact_min["h"])(
    'abbr',
    { title: "Nome artigianale dato da Steffo." },
    'Insieme di ripartizione'
);

var statistica__ref65 = Object(preact_min["h"])(
    latex_Latex,
    null,
    't'
);

var statistica__ref66 = Object(preact_min["h"])(
    'p',
    null,
    'Per definizione, tutte le variabili aleatorie devono rispettare questa condizione:'
);

var statistica__ref67 = Object(preact_min["h"])(
    example_Example,
    null,
    'All\'aumentare di t, l\'insieme conterr\xE0 sempre pi\xF9 elementi.'
);

var statistica__ref68 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Supporto" },
    Object(preact_min["h"])(
        'blockquote',
        null,
        '"supporto di X"'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Il ',
        Object(preact_min["h"])(
            'b',
            null,
            'codominio'
        ),
        ' della variabile aleatoria \xE8 il suo ',
        Object(preact_min["h"])(
            'i',
            null,
            'supporto'
        ),
        '.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Per indicare che un valore ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'x_0'
        ),
        ' appartiene al supporto di ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'X'
        ),
        ', si usa la notazione ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'X \\mapsto x_0'
        ),
        '.'
    )
);

var statistica__ref69 = Object(preact_min["h"])(
    'i',
    null,
    'funzione probabilit\xE0'
);

var statistica__ref70 = Object(preact_min["h"])(
    'b',
    null,
    'discreta'
);

var statistica__ref71 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'X'
);

var statistica__ref72 = Object(preact_min["h"])(
    'i',
    null,
    'funzione densit\xE0'
);

var statistica__ref73 = Object(preact_min["h"])(
    'b',
    null,
    'continua'
);

var statistica__ref74 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'X'
);

var statistica__ref75 = Object(preact_min["h"])(
    'p',
    null,
    'A differenza della funzione probabilit\xE0, \xE8 possibile che la funzione densit\xE0 ',
    Object(preact_min["h"])(
        'b',
        null,
        'non esista'
    ),
    ' per una certa variabile aleatoria.'
);

var statistica__ref76 = Object(preact_min["h"])(
    example_Example,
    null,
    'Rappresenta "quanta" probabilit\xE0 c\'\xE8 in un\'unit\xE0 di x!'
);

var statistica__ref77 = Object(preact_min["h"])(
    'i',
    null,
    'funzione di ripartizione'
);

var statistica__ref78 = Object(preact_min["h"])(
    latex_Latex,
    null,
    't'
);

var statistica__ref79 = Object(preact_min["h"])(
    'li',
    null,
    '\xC8 sempre ',
    Object(preact_min["h"])(
        'b',
        null,
        'monotona crescente'
    ),
    ' (non strettamente).'
);

var statistica__ref80 = Object(preact_min["h"])('br', null);

var statistica__ref81 = Object(preact_min["h"])(
    'li',
    null,
    'Vale ',
    Object(preact_min["h"])(
        'b',
        null,
        '0'
    ),
    ' a ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        '-\\infty'
    ),
    ' e ',
    Object(preact_min["h"])(
        'b',
        null,
        '1'
    ),
    ' a ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        '+\\infty'
    ),
    '.'
);

var statistica__ref82 = Object(preact_min["h"])('br', null);

var statistica__ref83 = Object(preact_min["h"])(
    'b',
    null,
    'continua da destra'
);

var statistica__ref84 = Object(preact_min["h"])(
    'p',
    null,
    'Possiamo usare la funzione di ripartizione per calcolare la probabilit\xE0 di un certo valore reale:'
);

var statistica__ref85 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Nel discreto" },
    Object(preact_min["h"])(
        'p',
        null,
        'Nel discreto basta abbinare un nuovo valore a ogni valore della variabile originale.'
    )
);

var statistica__ref86 = Object(preact_min["h"])(
    'p',
    null,
    'Nel continuo applichiamo la formula dell\'integrazione per sostituzione:'
);

var statistica__ref87 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Nel... digitale" },
    Object(preact_min["h"])(
        'p',
        null,
        'Trasformare variabili aleatorie \xE8 molto utile nell\'informatica per creare distribuzioni partendo da una funzione ',
        Object(preact_min["h"])(
            'a',
            { href: "https://docs.python.org/3/library/random.html#random.random" },
            Object(preact_min["h"])(
                'code',
                null,
                'random()'
            )
        ),
        ' che restituisce numeri da 0 a 1 con una distribuzione lineare.'
    )
);

var statistica__ref88 = Object(preact_min["h"])(
    'p',
    null,
    'Ogni variabile aleatoria che ha una ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione di ripartizione'
    ),
    ' e un ',
    Object(preact_min["h"])(
        'b',
        null,
        'supporto finito'
    ),
    ' ha anche una ',
    Object(preact_min["h"])(
        'i',
        null,
        'media'
    ),
    ' (o ',
    Object(preact_min["h"])(
        'i',
        null,
        'valore medio'
    ),
    ' o ',
    Object(preact_min["h"])(
        'i',
        null,
        'atteso'
    ),
    '):'
);

var statistica__ref89 = Object(preact_min["h"])(
    'p',
    null,
    'Nel discreto, si pu\xF2 calcolare con:'
);

var statistica__ref90 = Object(preact_min["h"])(
    'p',
    null,
    'Nel continuo, si pu\xF2 calcolare con:'
);

var statistica__ref91 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Moda" },
    Object(preact_min["h"])(
        'p',
        null,
        'Valore per cui la ',
        Object(preact_min["h"])(
            'b',
            null,
            'funzione probabilit\xE0'
        ),
        ' o ',
        Object(preact_min["h"])(
            'b',
            null,
            'funzione densit\xE0'
        ),
        ' \xE8 ',
        Object(preact_min["h"])(
            'b',
            null,
            'massima'
        ),
        '.'
    )
);

var statistica__ref92 = Object(preact_min["h"])(
    'i',
    null,
    'quantile'
);

var statistica__ref93 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'X'
);

var statistica__ref94 = Object(preact_min["h"])('p', null);

var statistica__ref95 = Object(preact_min["h"])(
    'i',
    null,
    'mediana'
);

var statistica__ref96 = Object(preact_min["h"])(
    'i',
    null,
    'quartili'
);

var statistica__ref97 = Object(preact_min["h"])(
    'i',
    null,
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    '-esima percentile'
);

var statistica__ref98 = Object(preact_min["h"])(
    'p',
    null,
    '\xC8 un valore che indica quanto la variabile aleatoria si discosta generalmente dalla media:'
);

var statistica__ref99 = Object(preact_min["h"])(
    'p',
    null,
    'Data una variabile aleatoria non-negativa:'
);

var statistica__ref100 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        todo_Todo,
        null,
        'TODO: Ha senso questa minidimostrazione?'
    )
);

var statistica__ref101 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"disuguaglianza di cebicev"'
);

var statistica__ref102 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'X'
);

var statistica__ref103 = Object(preact_min["h"])(
    'p',
    null,
    'E anche:'
);

var statistica__ref104 = Object(preact_min["h"])(
    example_Example,
    null,
    'Serve per semplificare i calcoli quando la funzione di ripartizione \xE8 difficile da calcolare!'
);

var statistica__ref105 = Object(preact_min["h"])(
    'p',
    null,
    'Il ',
    Object(preact_min["h"])(
        'i',
        null,
        'momento'
    ),
    ' ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'k'
    ),
    '-esimo di una variabile aleatoria \xE8:'
);

var statistica__ref106 = Object(preact_min["h"])(
    example_Example,
    null,
    'La media di una variabile aleatoria \xE8 anche il suo primo momento.'
);

var statistica__ref107 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'i',
        null,
        'funzione generatrice dei momenti'
    ),
    ' \xE8:'
);

var statistica__ref108 = Object(preact_min["h"])(
    'p',
    null,
    'Se due variabile aleatorie hanno la stessa funzione generatrice dei momenti, allora esse hanno la ',
    Object(preact_min["h"])(
        'b',
        null,
        'stessa distribuzione'
    ),
    '.'
);

var statistica__ref109 = Object(preact_min["h"])(
    'p',
    null,
    'E\' la ',
    Object(preact_min["h"])(
        'b',
        null,
        'trasformata di Laplace'
    ),
    ' della variabile aleatoria di X.'
);

var statistica__ref110 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'i',
        null,
        'funzione caratteristica'
    ),
    ' \xE8:'
);

var statistica__ref111 = Object(preact_min["h"])(
    'p',
    null,
    'Se due variabile aleatorie hanno la stessa funzione caratteristica, allora esse hanno la ',
    Object(preact_min["h"])(
        'b',
        null,
        'stessa distribuzione'
    ),
    '.'
);

var statistica__ref112 = Object(preact_min["h"])(
    'p',
    null,
    'E\' la ',
    Object(preact_min["h"])(
        'b',
        null,
        'trasformata di Fourier'
    ),
    ' della variabile aleatoria di X.'
);

var statistica__ref113 = Object(preact_min["h"])(
    'p',
    null,
    'Per dire che una variabile ha una certa distribuzione, si usa la notazione:'
);

var statistica__ref114 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Prova di Bernoulli" },
    Object(preact_min["h"])(
        'p',
        null,
        'Una prova con solo due possibili esiti: ',
        Object(preact_min["h"])(
            plus_Plus,
            null,
            'successo'
        ),
        ' e ',
        Object(preact_min["h"])(
            minus_Minus,
            null,
            'insuccesso'
        ),
        '.'
    )
);

var statistica__ref115 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Schema di Bernoulli" },
    Object(preact_min["h"])(
        'p',
        null,
        'Una sequenza di prove di Bernoulli per le quali le probabilit\xE0 di successo e fallimento rimangono invariate.'
    )
);

var statistica__ref116 = Object(preact_min["h"])(
    'p',
    null,
    'Una variabile aleatoria che rappresenta una prova di Bernoulli:'
);

var statistica__ref117 = Object(preact_min["h"])(
    'ul',
    null,
    Object(preact_min["h"])(
        'li',
        null,
        'vale ',
        Object(preact_min["h"])(
            plus_Plus,
            null,
            '1'
        ),
        ' in caso di ',
        Object(preact_min["h"])(
            plus_Plus,
            null,
            'successo'
        ),
        '.'
    ),
    Object(preact_min["h"])(
        'li',
        null,
        'vale ',
        Object(preact_min["h"])(
            minus_Minus,
            null,
            '0'
        ),
        ' in caso di ',
        Object(preact_min["h"])(
            minus_Minus,
            null,
            'insuccesso'
        ),
        '.'
    )
);

var statistica__ref118 = Object(preact_min["h"])(
    'p',
    null,
    'La distribuzione bernoulliana ha come densit\xE0:'
);

var statistica__ref119 = Object(preact_min["h"])(
    'p',
    null,
    'Una variabile aleatoria che conta il numero di successi di ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' prove di uno schema di Bernoulli.'
);

var statistica__ref120 = Object(preact_min["h"])(
    'p',
    null,
    'La binomiale ha come densit\xE0:'
);

var statistica__ref121 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della binomiale \xE8:'
);

var statistica__ref122 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' di una binomiale \xE8:'
);

var statistica__ref123 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' di una binomiale \xE8:'
);

var statistica__ref124 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Distribuzione geometrica" },
    Object(preact_min["h"])(
        'p',
        null,
        'Una variabile aleatoria che conta il numero di prove in uno schema di Bernoulli fino alla comparsa del primo successo.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Il suo simbolo \xE8 ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'Geo(p)'
        ),
        '.'
    )
);

var statistica__ref125 = Object(preact_min["h"])(
    'p',
    null,
    'La geometrica ha come densit\xE0:'
);

var statistica__ref126 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della geometrica \xE8:'
);

var statistica__ref127 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della geometrica \xE8:'
);

var statistica__ref128 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della geometrica \xE8:'
);

var statistica__ref129 = Object(preact_min["h"])(
    'p',
    null,
    'La geometrica non tiene conto degli eventi avvenuti in passato: ha la propriet\xE0 dell\'assenza di memoria:'
);

var statistica__ref130 = Object(preact_min["h"])(
    example_Example,
    null,
    'Ovvero, riscalando opportunamente l\'asse Y posso prendere come 0 qualsiasi punto dell\'asse X.'
);

var statistica__ref131 = Object(preact_min["h"])(
    'p',
    null,
    'Una variabile aleatoria che conta il numero di prove in uno schema di Bernoulli necessarie perch\xE8 si verifichi l\'',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    '-esimo successo.'
);

var statistica__ref132 = Object(preact_min["h"])(
    'p',
    null,
    'La binomiale negativa ha come densit\xE0:'
);

var statistica__ref133 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della binomiale negativa \xE8:'
);

var statistica__ref134 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della binomiale negativa \xE8:'
);

var statistica__ref135 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della binomiale negativa \xE8:'
);

var statistica__ref136 = Object(preact_min["h"])(
    'p',
    null,
    'Una variabile aleatoria che conta il numero ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'k'
    ),
    ' di insuccessi consecutivi in uno schema di Bernoulli:'
);

var statistica__ref137 = Object(preact_min["h"])(
    'p',
    null,
    'La geometrica traslata ha come densit\xE0:'
);

var statistica__ref138 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della geometrica traslata \xE8:'
);

var statistica__ref139 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della geometrica traslata \xE8:'
);

var statistica__ref140 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della geometrica \xE8:'
);

var statistica__ref141 = Object(preact_min["h"])(
    'p',
    null,
    'La geometrica traslata non tiene conto degli eventi avvenuti in passato: ha la propriet\xE0 dell\'assenza di memoria:'
);

var statistica__ref142 = Object(preact_min["h"])(
    example_Example,
    null,
    'Ovvero, riscalando opportunamente l\'asse Y posso prendere come 0 qualsiasi punto dell\'asse X.'
);

var statistica__ref143 = Object(preact_min["h"])(
    'p',
    null,
    'Una variabile aleatoria che conta il numero di insuccessi in uno schema di Bernoulli prima che si verifichi l\'',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    '-esimo successo.'
);

var statistica__ref144 = Object(preact_min["h"])(
    'p',
    null,
    'La binomiale negativa traslata ha come densit\xE0:'
);

var statistica__ref145 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della binomiale negativa traslata \xE8:'
);

var statistica__ref146 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della binomiale negativa traslata \xE8:'
);

var statistica__ref147 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della binomiale negativa traslata \xE8:'
);

var statistica__ref148 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Distribuzione ipergeometrica" },
    Object(preact_min["h"])(
        'p',
        null,
        'Una variabile aleatoria che, sapendo il numero di successi ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'K'
        ),
        ' e di insuccessi ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'N-K'
        ),
        ', conta quanti successi si otterrebbero se se ne estraessero ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'n'
        ),
        ' in blocco.'
    ),
    Object(preact_min["h"])(
        'p',
        null,
        'Il suo simbolo \xE8 ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'Ipe(N, K, n)'
        ),
        '.'
    )
);

var statistica__ref149 = Object(preact_min["h"])(
    'p',
    null,
    'La ipergeometrica ha come densit\xE0:'
);

var statistica__ref150 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della ipergeometrica \xE8 trascurabile.'
);

var statistica__ref151 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della ipergeometrica \xE8:'
);

var statistica__ref152 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della ipergeometrica \xE8:'
);

var statistica__ref153 = Object(preact_min["h"])(
    'p',
    null,
    'Una variabile aleatoria che soddisfa tutte le seguenti caratteristiche:'
);

var statistica__ref154 = Object(preact_min["h"])(
    'p',
    null,
    'La poissoniana ha come densit\xE0:'
);

var statistica__ref155 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della poissoniana \xE8:'
);

var statistica__ref156 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della poissoniana \xE8:'
);

var statistica__ref157 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della poissoniana \xE8:'
);

var statistica__ref158 = Object(preact_min["h"])(
    'p',
    null,
    'Gli altri momenti della poissoniana sono:'
);

var statistica__ref159 = Object(preact_min["h"])(
    'p',
    null,
    'Una successione di ',
    Object(preact_min["h"])(
        'b',
        null,
        'arrivi'
    ),
    ' avvenuti in un certo arco temporale che:'
);

var statistica__ref160 = Object(preact_min["h"])(
    'li',
    null,
    'non sono sovrapposti.'
);

var statistica__ref161 = Object(preact_min["h"])(
    'li',
    null,
    'avvengono indipendentemente gli uni dagli altri.'
);

var statistica__ref162 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'N_t'
);

var statistica__ref163 = Object(preact_min["h"])(
    latex_Latex,
    null,
    't'
);

var statistica__ref164 = Object(preact_min["h"])(
    example_Example,
    null,
    'E\' paragonabile a una bernoulliana: ogni successo corrisponde a un arrivo, mentre il tempo \xE8 il numero di prove effettuate (ma nel continuo).'
);

var statistica__ref165 = Object(preact_min["h"])(
    'p',
    null,
    'L\'esponenziale ha come ',
    Object(preact_min["h"])(
        'b',
        null,
        'densit\xE0'
    ),
    ':'
);

var statistica__ref166 = Object(preact_min["h"])(
    'p',
    null,
    'L\'esponenziale ha come ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione di ripartizione'
    ),
    ':'
);

var _ref167 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' dell\'esponenziale \xE8:'
);

var _ref168 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' dell\'esponenziale \xE8:'
);

var _ref169 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' dell\'esponenziale \xE8:'
);

var _ref170 = Object(preact_min["h"])(
    'p',
    null,
    'L\'esponenziale non tiene conto degli eventi avvenuti in passato: ha la propriet\xE0 dell\'assenza di memoria:'
);

var _ref171 = Object(preact_min["h"])(
    example_Example,
    null,
    'Ovvero, riscalando opportunamente l\'asse Y posso prendere come 0 qualsiasi punto dell\'asse X.'
);

var _ref172 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'n'
);

var _ref173 = Object(preact_min["h"])(
    'p',
    null,
    'La legge gamma ha come densit\xE0:'
);

var _ref174 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della legge gamma \xE8:'
);

var _ref175 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della legge gamma \xE8:'
);

var _ref176 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della legge gamma \xE8:'
);

var _ref177 = Object(preact_min["h"])(
    'p',
    null,
    'Su di essa vale la seguente propriet\xE0:'
);

var _ref178 = Object(preact_min["h"])(
    'p',
    null,
    'La distribuzione uniforme ha come ',
    Object(preact_min["h"])(
        'b',
        null,
        'densit\xE0'
    ),
    ':'
);

var _ref179 = Object(preact_min["h"])(
    'p',
    null,
    'La distribuzione uniforme ha come ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione di ripartizione'
    ),
    ':'
);

var _ref180 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della distribuzione uniforme \xE8:'
);

var _ref181 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della distribuzione uniforme \xE8:'
);

var _ref182 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della distribuzione uniforme \xE8:'
);

var _ref183 = Object(preact_min["h"])(
    'p',
    null,
    'Una variabile aleatoria con una specifica distribuzione.'
);

var _ref184 = Object(preact_min["h"])(
    example_Example,
    null,
    Object(preact_min["h"])(
        latex_Latex,
        null,
        '\\mu'
    ),
    ' e ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        '\\sigma^2'
    ),
    ' sono rispettivamente la media e la varianza della distribuzione!'
);

var _ref185 = Object(preact_min["h"])(
    'p',
    null,
    'La distribuzione normale ha come densit\xE0:'
);

var _ref186 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'funzione generatrice dei momenti'
    ),
    ' della distribuzione normale \xE8:'
);

var _ref187 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'media'
    ),
    ' della distribuzione normale \xE8:'
);

var _ref188 = Object(preact_min["h"])(
    'p',
    null,
    'La ',
    Object(preact_min["h"])(
        'b',
        null,
        'varianza'
    ),
    ' della distribuzione normale \xE8:'
);

var _ref189 = Object(preact_min["h"])(
    'p',
    null,
    'Qualsiasi normale pu\xF2 essere trasformata in qualsiasi altra normale:'
);

var _ref190 = Object(preact_min["h"])(
    'p',
    null,
    'La distribuzione normale standard ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'Z'
    ),
    ' \xE8:'
);

var _ref191 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'Z \\sim Nor(0, 1)'
    )
);

var _ref192 = Object(preact_min["h"])(
    'p',
    null,
    'La distribuzione normale ha una particolare relazione con la distribuzione Gamma:'
);

var _ref193 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"chi-quadro a un grado di libert\xE0"'
);

var _ref194 = Object(preact_min["h"])(
    'p',
    null,
    'Esiste una distribuzione Gamma particolare:'
);

var _ref195 = Object(preact_min["h"])(
    'p',
    null,
    'Pi\xF9 chi-quadro possono essere sommate per aumentare i loro gradi di libert\xE0:'
);

var _ref196 = Object(preact_min["h"])(
    'p',
    null,
    'Un\'altra funzione particolare \xE8 la funzione T di Student:'
);

var _ref197 = Object(preact_min["h"])(
    'p',
    null,
    'La binomiale \xE8 come una ipergeometrica ma con ripetizioni, quindi per valori molto grandi di ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'N'
    ),
    ' rispetto a ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ', si pu\xF2 dire che:'
);

var _ref198 = Object(preact_min["h"])(
    'p',
    null,
    'La binomiale non \xE8 altro che una poissoniana a tempo discreto, quindi, se ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' \xE8 grande e ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n \\cdot p'
    ),
    ' \xE8 nell\'ordine di grandezza delle unit\xE0, allora:'
);

var _ref199 = Object(preact_min["h"])(
    'p',
    null,
    'Per il Teorema di De Moivre-Laplace, se una binomiale ha una ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' grande e ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'p'
    ),
    ' non vicina a 0 o 1, si pu\xF2 approssimare con:'
);

var _ref200 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'X'
);

var _ref201 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'Y'
);

var _ref202 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'k'
);

var _ref203 = Object(preact_min["h"])(
    'p',
    null,
    'Un vettore ',
    Object(preact_min["h"])(
        'b',
        null,
        'composto da variabili aleatorie'
    ),
    '.'
);

var _ref204 = Object(preact_min["h"])(
    'p',
    null,
    'I vettori aleatori hanno pi\xF9 funzioni di ripartizione che si differenziano in base al numero di parametri.'
);

var _ref205 = Object(preact_min["h"])(
    'p',
    null,
    'Se il numero di parametri coincide con la dimensione del vettore aleatorio, allora la funzione sar\xE0 una ',
    Object(preact_min["h"])(
        'i',
        null,
        'funzione di ripartizione congiunta'
    ),
    ':'
);

var _ref206 = Object(preact_min["h"])(
    'p',
    null,
    'Se il numero di parametri \xE8 minore della dimensione del vettore aleatorio, allora la funzione sar\xE0 una ',
    Object(preact_min["h"])(
        'i',
        null,
        'funzione di ripartizione marginale'
    ),
    ':'
);

var _ref207 = Object(preact_min["h"])(
    'p',
    null,
    'I vettori aleatori ',
    Object(preact_min["h"])(
        'b',
        null,
        'discreti'
    ),
    ' hanno pi\xF9 densit\xE0 che si differenziano in base al numero di parametri.'
);

var _ref208 = Object(preact_min["h"])(
    'p',
    null,
    'Se il numero di parametri coincide con la dimensione del vettore aleatorio, allora la funzione sar\xE0 una ',
    Object(preact_min["h"])(
        'i',
        null,
        'densit\xE0 congiunta'
    ),
    ':'
);

var _ref209 = Object(preact_min["h"])(
    'p',
    null,
    'Se il numero di parametri \xE8 minore della dimensione del vettore aleatorio, allora la funzione sar\xE0 una ',
    Object(preact_min["h"])(
        'i',
        null,
        'densit\xE0 marginale'
    ),
    ':'
);

var _ref210 = Object(preact_min["h"])(
    'p',
    null,
    'Pi\xF9 variabili aleatorie sono indipendenti se, per qualsiasi scelta di intervalli ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'A_i'
    ),
    ':'
);

var _ref211 = Object(preact_min["h"])(
    'p',
    null,
    'E\' possibile calcolare la media di qualsiasi funzione ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'g(X, Y)'
    ),
    ' avente elementi del vettore come variabili:'
);

var _ref212 = Object(preact_min["h"])(
    example_Example,
    null,
    'Solitamente si calcola la media di ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'x \\cdot y'
    ),
    '.'
);

var _ref213 = Object(preact_min["h"])(
    'p',
    null,
    'Le medie di pi\xF9 variabili aleatorie si possono sommare:'
);

var _ref214 = Object(preact_min["h"])(
    'p',
    null,
    'Un ',
    Object(preact_min["h"])(
        'b',
        null,
        'operatore'
    ),
    ' che misura la correlazione di due variabili aleatorie.'
);

var _ref215 = Object(preact_min["h"])(
    'p',
    null,
    'Si calcola con il valore atteso dei prodotti delle distanze dalla media:'
);

var _ref216 = Object(preact_min["h"])(
    'p',
    null,
    'Ha diverse propriet\xE0:'
);

var _ref217 = Object(preact_min["h"])(
    'b',
    null,
    'valore nullo'
);

var _ref218 = Object(preact_min["h"])(
    'b',
    null,
    'commutativa'
);

var _ref219 = Object(preact_min["h"])(
    'b',
    null,
    'semplificabile'
);

var _ref220 = Object(preact_min["h"])(
    'b',
    null,
    'lineare'
);

var _ref221 = Object(preact_min["h"])(
    'b',
    null,
    'distributiva'
);

var _ref222 = Object(preact_min["h"])(
    'p',
    null,
    'Due variabili sono ',
    Object(preact_min["h"])(
        'i',
        null,
        'variabili incorrelate'
    ),
    ' se:'
);

var _ref223 = Object(preact_min["h"])(
    'p',
    null,
    'Variabili indipendenti sono sempre incorrelate.'
);

var _ref224 = Object(preact_min["h"])(
    'p',
    null,
    'E\' sempre simmetrica e semidefinita positiva (tutti gli autovalori sono ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        '\\geq 0'
    ),
    '.'
);

var _ref225 = Object(preact_min["h"])(
    'p',
    null,
    'Un valore che misura come due variabili aleatorie sono correlate:'
);

var _ref226 = Object(preact_min["h"])(
    'p',
    null,
    'E\' sempre compreso tra -1 e 1:'
);

var _ref227 = Object(preact_min["h"])(
    'p',
    null,
    'Vale esattamente -1 o 1 solo se esiste un legame lineare tra le due variaibli:'
);

var _ref228 = Object(preact_min["h"])(
    'p',
    null,
    'La varianza di due variabili aleatorie sommate \xE8:'
);

var _ref229 = Object(preact_min["h"])(
    example_Example,
    null,
    'Si dimostra applicando le propriet\xE0 della covarianza!'
);

var _ref230 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'X_i'
);

var _ref231 = Object(preact_min["h"])(
    'b',
    null,
    'indipendenti'
);

var _ref232 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Campione casuale" },
    Object(preact_min["h"])(
        'p',
        null,
        'Una ',
        Object(preact_min["h"])(
            'b',
            null,
            'n-pla'
        ),
        ' di variabili aleatorie con la stessa distribuzione della variabile aleatoria ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'X'
        ),
        ' ("popolazione") ma ',
        Object(preact_min["h"])(
            'b',
            null,
            'indipendenti'
        ),
        ' tra loro.'
    ),
    Object(preact_min["h"])(
        example_Example,
        null,
        'Le variabili aleatorie sono come un lazy-load in programmazione; quando ci sar\xE0 bisogno del loro valore numerico, esse si ',
        Object(preact_min["h"])(
            'b',
            null,
            'realizzeranno'
        ),
        ' nel loro valore.'
    )
);

var _ref233 = Object(preact_min["h"])(
    'p',
    null,
    'Il valore dato dalla media aritmetica degli ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' elementi del campione elevati alla potenza ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'k'
    ),
    ':'
);

var _ref234 = Object(preact_min["h"])(
    'i',
    null,
    'media campionaria'
);

var _ref235 = Object(preact_min["h"])(
    'p',
    null,
    'La media aritmetica dello scarto quadratico medio degli elementi del campione.'
);

var _ref236 = Object(preact_min["h"])(
    'p',
    null,
    'Altrimenti:'
);

var _ref237 = Object(preact_min["h"])(
    'p',
    null,
    'Se calcoliamo la media della media campionaria, risulter\xE0 vero che:'
);

var _ref238 = Object(preact_min["h"])(
    example_Example,
    null,
    'Quindi, \xE8 possibile usare i campioni per trovare la media di una variabile aleatoria!'
);

var _ref239 = Object(preact_min["h"])(
    'p',
    null,
    'Se calcoliamo la varianza della media campionaria, risulter\xE0 vero che:'
);

var _ref240 = Object(preact_min["h"])(
    example_Example,
    null,
    'Quindi, possiamo stimare l\'errore della media calcolata tramite campioni!'
);

var _ref241 = Object(preact_min["h"])(
    'p',
    null,
    'Se calcoliamo la media della varianza campionaria, risulter\xE0 vero che:'
);

var _ref242 = Object(preact_min["h"])(
    example_Example,
    null,
    'Quindi, possiamo stimare l\'errore della media calcolata tramite campioni!'
);

var _ref243 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'X'
);

var _ref244 = Object(preact_min["h"])(
    'p',
    null,
    '...allora sappiamo anche la distribuzione della media campionaria!'
);

var _ref245 = Object(preact_min["h"])(
    'p',
    null,
    '...e anche della varianza campionaria!'
);

var _ref246 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Indipendenza" },
    Object(preact_min["h"])(
        'p',
        null,
        '...e che media campionaria e varianza campionaria sono indipendenti tra loro!'
    )
);

var _ref247 = Object(preact_min["h"])(
    'p',
    null,
    'Se la successione di variabili aleatorie ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X_n'
    ),
    ' all\'infinito ha la ',
    Object(preact_min["h"])(
        'b',
        null,
        'stessa funzione di ripartizione'
    ),
    ' della popolazione ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X'
    ),
    ', allora essa ',
    Object(preact_min["h"])(
        'i',
        null,
        'converge in distribuzione'
    ),
    '.'
);

var _ref248 = Object(preact_min["h"])(
    'p',
    null,
    'Se la successione di variabili aleatorie ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X_n'
    ),
    ' all\'infinito ha la ',
    Object(preact_min["h"])(
        'b',
        null,
        'stessa probabilit\xE0'
    ),
    ' della popolazione ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X'
    ),
    ', allora essa ',
    Object(preact_min["h"])(
        'i',
        null,
        'converge in probabilit\xE0'
    ),
    '.'
);

var _ref249 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        todo_Todo,
        null,
        'TODO: non sono certissimo della definizione'
    )
);

var _ref250 = Object(preact_min["h"])(
    'p',
    null,
    'Se la successione di variabili aleatorie ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X_n'
    ),
    ' all\'infinito ha la ',
    Object(preact_min["h"])(
        'b',
        null,
        'stessa probabilit\xE0 a '
    ),
    ' della popolazione ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X'
    ),
    ', allora essa ',
    Object(preact_min["h"])(
        'i',
        null,
        'converge quasi certamente'
    ),
    '.'
);

var _ref251 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        todo_Todo,
        null,
        'TODO: non sono certissimo della definizione'
    )
);

var _ref252 = Object(preact_min["h"])(
    'p',
    null,
    'Se la successione di variabili aleatorie ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X_n'
    ),
    ' all\'infinito ha la ',
    Object(preact_min["h"])(
        'b',
        null,
        'media del quadrato della distanza'
    ),
    ' tra la successione e la popolazione ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X'
    ),
    ' ',
    Object(preact_min["h"])(
        'b',
        null,
        'uguale a 0'
    ),
    ', allora essa ',
    Object(preact_min["h"])(
        'i',
        null,
        'converge in media quadratica'
    ),
    '.'
);

var _ref253 = Object(preact_min["h"])(
    'p',
    null,
    'In pi\xF9:'
);

var _ref254 = Object(preact_min["h"])(
    'b',
    null,
    'converge in probabilit\xE0'
);

var _ref255 = Object(preact_min["h"])(
    'p',
    null,
    'Ovvero:'
);

var _ref256 = Object(preact_min["h"])(
    'b',
    null,
    'converge quasi certamente'
);

var _ref257 = Object(preact_min["h"])(
    'p',
    null,
    'Ovvero:'
);

var _ref258 = Object(preact_min["h"])(
    example_Example,
    null,
    'Dimostra che l\'interpretazione frequentista della probabilit\xE0 \xE8 valida!'
);

var _ref259 = Object(preact_min["h"])(
    'b',
    null,
    'converge in distribuzione'
);

var _ref260 = Object(preact_min["h"])(
    'p',
    null,
    'Ovvero:'
);

var _ref261 = Object(preact_min["h"])(
    'p',
    null,
    'E\' una somma di ',
    Object(preact_min["h"])(
        'b',
        null,
        'bernoulliane'
    ),
    ', e quindi si approssima a una normale:'
);

var _ref262 = Object(preact_min["h"])(
    'p',
    null,
    'E\' una somma di ',
    Object(preact_min["h"])(
        'b',
        null,
        'geometriche'
    ),
    ', e quindi si approssima a una normale:'
);

var _ref263 = Object(preact_min["h"])(
    'p',
    null,
    'E\' una somma di altre ',
    Object(preact_min["h"])(
        'b',
        null,
        'poissoniane'
    ),
    ', e quindi si approssima a una normale:'
);

var _ref264 = Object(preact_min["h"])(
    'p',
    null,
    'E\' una somma di ',
    Object(preact_min["h"])(
        'b',
        null,
        'esponenziali'
    ),
    ', e quindi si approssima a una normale:'
);

var _ref265 = Object(preact_min["h"])(
    'p',
    null,
    'Se ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'n'
    ),
    ' \xE8 grande, allora:'
);

var _ref266 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Parametri sconosciuti" },
    Object(preact_min["h"])(
        'p',
        null,
        'Per indicare parametri sconosciuti di una legge si usa ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            '\\theta'
        ),
        '.'
    )
);

var _ref267 = Object(preact_min["h"])(
    'p',
    null,
    'Una variabile aleatoria funzione di un campione:'
);

var _ref268 = Object(preact_min["h"])(
    panel_Panel,
    { title: "Stimatore" },
    Object(preact_min["h"])(
        'p',
        null,
        'Una statistica ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'T_n'
        ),
        ' ottenuta da ',
        Object(preact_min["h"])(
            latex_Latex,
            null,
            'n'
        ),
        ' osservazioni, che stimi i parametri di una legge e sia indipendente da essi.'
    )
);

var _ref269 = Object(preact_min["h"])(
    'p',
    null,
    'Uno stimatore \xE8 ',
    Object(preact_min["h"])(
        'i',
        null,
        'corretto'
    ),
    ' se il suo valore atteso coincide con quello dei parametri che stima:'
);

var _ref270 = Object(preact_min["h"])(
    'p',
    null,
    'Uno stimatore \xE8 ',
    Object(preact_min["h"])(
        'i',
        null,
        'asintoticamente corretto'
    ),
    ' se, per infinite osservazioni, il suo valore atteso coincide con quello dei parametri che stima:'
);

var _ref271 = Object(preact_min["h"])(
    'p',
    null,
    'Uno stimatore \xE8 ',
    Object(preact_min["h"])(
        'i',
        null,
        'consistente in media quadratica'
    ),
    ' se:'
);

var _ref272 = Object(preact_min["h"])(
    'p',
    null,
    'Uno stimatore \xE8 ',
    Object(preact_min["h"])(
        'i',
        null,
        'consistente in probabilit\xE0'
    ),
    ' se:'
);

var _ref273 = Object(preact_min["h"])(
    'p',
    null,
    Object(preact_min["h"])(
        todo_Todo,
        null,
        'TODO: verificare che la mia modifica sia corretta'
    )
);

var _ref274 = Object(preact_min["h"])(
    'p',
    null,
    'Uno stimatore \xE8 ',
    Object(preact_min["h"])(
        'i',
        null,
        'asintoticamente normale'
    ),
    ' se:'
);

var _ref275 = Object(preact_min["h"])(
    'p',
    null,
    'Si pu\xF2 usare il ',
    Object(preact_min["h"])(
        'i',
        null,
        'metodo dei momenti'
    ),
    ' per ottenere uno stimatore di una popolazione ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X'
    ),
    '.'
);

var _ref276 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'M'
);

var _ref277 = Object(preact_min["h"])(
    latex_Latex,
    null,
    '\\theta'
);

var _ref278 = Object(preact_min["h"])(
    'p',
    null,
    'Visto che:'
);

var _ref279 = Object(preact_min["h"])(
    'p',
    null,
    'Allora:'
);

var _ref280 = Object(preact_min["h"])(
    'p',
    null,
    'Si pu\xF2 usare il ',
    Object(preact_min["h"])(
        'i',
        null,
        'metodo della massima verosomiglianza'
    ),
    ' per ottenere uno stimatore di una popolazione ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        'X'
    ),
    '.'
);

var _ref281 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'L'
);

var _ref282 = Object(preact_min["h"])(
    latex_Latex,
    null,
    '\\theta'
);

var _ref283 = Object(preact_min["h"])(
    'p',
    null,
    'Gli stimatori di massima verosomiglianza sono ',
    Object(preact_min["h"])(
        'b',
        null,
        'asintoticamente corretti'
    ),
    ', ',
    Object(preact_min["h"])(
        'b',
        null,
        'consistenti in probabilit\xE0'
    ),
    ' e ',
    Object(preact_min["h"])(
        'b',
        null,
        'asintoticamente normali'
    ),
    '.'
);

var _ref284 = Object(preact_min["h"])(
    'p',
    null,
    'Gli stimatori di massima verosomiglianza godono delle seguenti propriet\xE0:'
);

var _ref285 = Object(preact_min["h"])(
    'li',
    null,
    'Sono ',
    Object(preact_min["h"])(
        'b',
        null,
        'asintoticamente corretti'
    ),
    '.'
);

var _ref286 = Object(preact_min["h"])(
    'li',
    null,
    'Sono ',
    Object(preact_min["h"])(
        'b',
        null,
        'consistenti in probabilit\xE0'
    ),
    '.'
);

var _ref287 = Object(preact_min["h"])(
    'li',
    null,
    'Sono ',
    Object(preact_min["h"])(
        'b',
        null,
        'asintoticamente normali'
    ),
    '.'
);

var _ref288 = Object(preact_min["h"])(
    'b',
    null,
    'invarianti'
);

var _ref289 = Object(preact_min["h"])(
    'p',
    null,
    'Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:'
);

var _ref290 = Object(preact_min["h"])(
    'p',
    null,
    'Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:'
);

var _ref291 = Object(preact_min["h"])(
    'p',
    null,
    'Per il metodo dei momenti oppure per il metodo della massima verosomiglianza:'
);

var _ref292 = Object(preact_min["h"])(
    'p',
    null,
    'Per il metodo della massima verosomiglianza:'
);

var _ref293 = Object(preact_min["h"])('br', null);

var _ref294 = Object(preact_min["h"])(
    'blockquote',
    null,
    '"intervallo di confidenza al 95%"'
);

var _ref295 = Object(preact_min["h"])(
    'p',
    null,
    'L\'intervallo di valori di ',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        '\\theta'
    ),
    ' all\'interno del quale siamo "pi\xF9 o meno sicuri" si trovi il valore effettivo:'
);

var _ref296 = Object(preact_min["h"])(
    latex_Latex,
    null,
    ']a, b['
);

var _ref297 = Object(preact_min["h"])(
    'p',
    null,
    'Pu\xF2 anche essere ',
    Object(preact_min["h"])(
        'b',
        null,
        'unilatero'
    ),
    ' nel caso limiti la stima in una sola direzione, positiva o negativa.'
);

var _ref298 = Object(preact_min["h"])(
    'p',
    null,
    'Se conosciamo la varianza di una normale, allora possiamo ricavare velocemente gli intervalli di confidenza all\'',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        '\\alpha'
    ),
    '% con queste formule:'
);

var _ref299 = Object(preact_min["h"])(
    'p',
    null,
    'Se non conosciamo la varianza di una normale, allora possiamo ricavare velocemente gli intervalli di confidenza all\'',
    Object(preact_min["h"])(
        latex_Latex,
        null,
        '\\alpha'
    ),
    '% con queste formule:'
);

var _ref300 = Object(preact_min["h"])(
    latex_Latex,
    null,
    'v'
);

var _ref301 = Object(preact_min["h"])(
    'p',
    null,
    'L\'intervallo di confidenza per la proprorzione di una bernoulliana qualsiasi si ottiene da questa formula:'
);

var _ref302 = Object(preact_min["h"])(
    'p',
    null,
    'L\'intervallo di confidenza per la media di una qualsiasi popolazione si ottiene da questa formula:'
);

var statistica_Statistica = function (_Component) {
    statistica__inherits(Statistica, _Component);

    function Statistica() {
        statistica__classCallCheck(this, Statistica);

        return statistica__possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Statistica.prototype.render = function render() {
        /*
               <Split title={"Popolazioni"}>
                   <Panel title={"Popolazione"} id={"popolazione"}>
                       <p>
                           Gruppo <b>intero</b> di oggetti di cui si cercano informazioni.
                       </p>
                   </Panel>
                   <Panel title={"Popolazione tangibile"}>
                       <p>
                           Popolazione finita di oggetti concreti che possono essere campionati ciascuno solo una volta.
                       </p>
                   </Panel>
                   <Panel title={"Popolazione concettuale"}>
                       <p>
                           Popolazione di valori ottenuti da prove sperimentali indipendenti ripetute più volte.
                       </p>
                   </Panel>
               </Split>
               <Split title={"Campionamento"}>
                   <Panel title={"Campione"}>
                       <p>
                           Sottoinsieme della <a href={"#popolazione"}>popolazione</a> che contiene gli oggetti che si sono osservati.
                       </p>
                   </Panel>
                   <Panel title={<i>Simple random sample</i>}>
                       <p>
                           Campione di una data dimensione in cui qualsiasi selezione di <i>n</i> elementi ha la stessa probabilità di costituire il campione.
                       </p>
                   </Panel>
                   <Panel title={<i>Sample of convenience</i>}>
                       <p>
                           Campione ottenuto in un modo casuale non ben definito.
                       </p>
                   </Panel>
                   <Panel title={<i>Sample with replacement</i>}>
                       <p>
                           Campione ottenuto sostituendo nella popolazione gli elementi estratti con dei nuovi elementi.
                       </p>
                       <p>
                           Dire che un campione è ottenuto <i>with replacement</i> è equivalente a dire che la popolazione che si sta campionando è infinita, e quindi che tutti gli elementi sono indipendenti.
                       </p>
                   </Panel>
                   <Panel title={"Campione pesato"}>
                       <p>
                           Campione ottenuto da una popolazione in cui certi elementi hanno più probabilità di essere stati selezionati di altri.
                       </p>
                   </Panel>
                   <Panel title={<i>Stratified random sample</i>}>
                       <p>
                           Campione ottenuto da un sottoinsieme della popolazione detto <i>strato</i>.
                       </p>
                   </Panel>
                   <Panel title={<i>Cluster sample</i>}>
                       <p>
                           Campione ottenuto selezionando più <i>cluster</i> di elementi alla volta.
                       </p>
                   </Panel>
               </Split>
               <Split>
                   <Panel title={<i>Sampling variation</i>}>
                       <p>
                           Differenza di informazioni presente tra due campioni diversi della stessa popolazione.
                       </p>
                   </Panel>
                   <Panel title={"Indipendenza"}>
                       <p>
                           Gli elementi in un campione sono indipendenti se gli elementi estratti in precedenza non influsicono <small>significativamente</small> sulle probabilità di estrazione dell'elemento successivo.
                       </p>
                   </Panel>
               </Split>
               <Split title={"Tipi di prove sperimentali"}>
                   <Panel title={"A campione singolo"}>
                       <p>
                           Esperimento in cui c'è una sola popolazione da cui vengono estratti campioni.
                       </p>
                       <p>
                           Serve per verificare delle condizioni.
                       </p>
                   </Panel>
                   <Panel title={"Multicampione"}>
                       <p>
                           Esperimento in cui sono presenti più popolazioni (aventi caratteristiche differenti una dall'altra dette <i>fattori</i>) da cui vengono estratti campioni.
                       </p>
                       <p>
                           Serve per capire quali fattori influenzano il risultato dell'esperimento.
                       </p>
                   </Panel>
               </Split>
               <Split title={"Tipi di dato"}>
                   <Panel title={<span>Numerico<small> o quantitativo</small></span>}>
                       Il dato descrive un valore numerico relativo all'elemento, come ad esempio una quantità fisica.
                   </Panel>
                   <Panel title={<span>Categorico<small> o qualitativo</small></span>}>
                       Il dato indica una categoria a cui appartiene l'elemento, come ad esempio il suo colore.
                   </Panel>
               </Split>
         */
        return Object(preact_min["h"])(
            'div',
            { style: statistica_default.a.statistica },
            statistica__ref,
            Object(preact_min["h"])(
                split_Split,
                { title: "Tipi di probabilità" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Classica" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Frequentista" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject2)
                        )
                    )
                ),
                statistica__ref2
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Linguaggio matematico" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Spazio campionario" },
                    statistica__ref3,
                    statistica__ref4,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject3)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Esito" },
                    statistica__ref5,
                    statistica__ref6,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject4)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Evento" },
                    statistica__ref7,
                    statistica__ref8,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject5)
                        )
                    ),
                    statistica__ref9
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Not" },
                    statistica__ref10,
                    statistica__ref11,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject6)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "And" },
                    statistica__ref12,
                    statistica__ref13,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject7)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Or" },
                    statistica__ref14,
                    statistica__ref15,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject8)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Differenza" },
                    statistica__ref16,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject9)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Implicazione" },
                    statistica__ref17,
                    statistica__ref18,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject10)
                        )
                    ),
                    statistica__ref19
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Evento impossibile" },
                    statistica__ref20,
                    statistica__ref21,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject11)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Mutua esclusione" },
                    statistica__ref22,
                    statistica__ref23,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject12)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Famiglia degli eventi" },
                    statistica__ref24,
                    statistica__ref25,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject13)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Qualsiasi sottoinsieme appartenente a ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject13)
                        ),
                        ' \xE8 considerato un evento.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: Object(preact_min["h"])(
                            'span',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject14)
                            ),
                            '-algebra'
                        ) },
                    statistica__ref26,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Se la famiglia degli eventi soddisfa questi tre requisiti, allora viene detta ',
                        Object(preact_min["h"])(
                            'i',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject14)
                            ),
                            '-algebra'
                        ),
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'ol',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Lo spazio campionario \xE8 un evento: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject15)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Se un sottoinsieme \xE8 un evento, allora anche il suo complementare lo \xE8: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject16)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Se due sottoinsiemi sono eventi, allora lo sono anche la loro unione e intersezione: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject17)
                            )
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Un esempio: ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject18)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Partizione" },
                    statistica__ref27,
                    statistica__ref28,
                    statistica__ref29,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La partizione ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject19)
                        ),
                        ' \xE8 composta dagli eventi ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject20)
                        ),
                        ', ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject21)
                        ),
                        ', ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject22)
                        ),
                        ', fino a ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject23)
                        ),
                        '.'
                    ),
                    statistica__ref30
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Assiomi della probabilità" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Primo assioma della probabilità" },
                    statistica__ref31,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject24)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Secondo assioma della probabilità" },
                    statistica__ref32,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject25)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Terzo assioma della probabilità" },
                    statistica__ref33,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject26)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Conseguenze degli assiomi" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Probabilità di un evento negato" },
                    statistica__ref34,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject27)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Probabilità di un evento incluso" },
                    statistica__ref35,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject28)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Unione" },
                    statistica__ref36,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject29)
                        )
                    ),
                    statistica__ref37
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Spazi equiprobabili" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Cosa sono?" },
                    statistica__ref38,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject30)
                        )
                    )
                ),
                statistica__ref39
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Calcolo combinatorio" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Disposizioni" },
                    statistica__ref40,
                    statistica__ref41,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject31)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Disposizioni con ripetizione" },
                    statistica__ref42,
                    statistica__ref43,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject32)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Combinazioni" },
                    statistica__ref44,
                    statistica__ref45,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject33)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Combinazioni con ripetizione" },
                    statistica__ref46,
                    statistica__ref47,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject34)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Permutazioni" },
                    statistica__ref48,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject35)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Probabilità condizionata" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Eventi condizionati" },
                    statistica__ref49,
                    statistica__ref50,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject36)
                        )
                    ),
                    statistica__ref51
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Eventi mutualmente esclusivi" },
                    statistica__ref52,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject37)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Regola della catena" },
                    statistica__ref53,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject38)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Le alternative" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Legge delle alternative" },
                    statistica__ref54,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject39)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Legge condizionata delle alternative" },
                    statistica__ref55,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject40)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Formula di Bayes" },
                    statistica__ref56,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject41)
                        )
                    ),
                    statistica__ref57
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Eventi indipendenti" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Due eventi indipendenti" },
                    statistica__ref58,
                    statistica__ref59,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject42)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Più eventi indipendenti" },
                    statistica__ref60,
                    statistica__ref61,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject43)
                        )
                    ),
                    statistica__ref62
                ),
                statistica__ref63
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Variabili aleatorie" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Variabile aleatoria" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Una funzione che fa corrispondere un numero reale a ogni possibile esito dello spazio campionario. ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject44)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: statistica__ref64 },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Ad ogni variabile aleatoria sono associati gli eventi ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject45)
                        ),
                        ', che contengono tutti gli esiti a cui la variabile aleatoria associa un valore minore o uguale a ',
                        statistica__ref65,
                        '.'
                    ),
                    statistica__ref66,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject46)
                        )
                    ),
                    statistica__ref67
                ),
                statistica__ref68
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Densità" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Funzione probabilità" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La ',
                        statistica__ref69,
                        ' ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject47)
                        ),
                        ' di una variabile aleatoria ',
                        statistica__ref70,
                        ' ',
                        statistica__ref71,
                        ' \xE8 la funzione che associa ad ogni esito la sua probabilit\xE0:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject48)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Funzione densità" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La ',
                        statistica__ref72,
                        ' ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject49)
                        ),
                        ' di una variabile aleatoria ',
                        statistica__ref73,
                        ' ',
                        statistica__ref74,
                        ' \xE8 l\'equivalente continuo della funzione probabilit\xE0:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject50)
                        )
                    ),
                    statistica__ref75,
                    statistica__ref76
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Funzione di ripartizione" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Definizione" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Ogni variabile aleatoria ha una ',
                        statistica__ref77,
                        ' ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject51)
                        ),
                        ' associata, che rappresenta la probabilit\xE0 che la variabile aleatoria assuma un valore minore o uguale a ',
                        statistica__ref78,
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Si pu\xF2 dire che essa rappresenti la probabilit\xE0 dell\'evento ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject52)
                        ),
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject53)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Proprietà della funzione" },
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        statistica__ref79,
                        statistica__ref80,
                        statistica__ref81,
                        statistica__ref82,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            '\xC8 ',
                            statistica__ref83,
                            ': ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject54)
                            )
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Probabilità di un valore" },
                    statistica__ref84,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject55)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Trasformazioni di variabili aleatorie" },
                statistica__ref85,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Nel continuo (invertibile)" },
                    statistica__ref86,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject56)
                        )
                    )
                ),
                statistica__ref87
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Informazioni delle variabili aleatorie" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Media" },
                    statistica__ref88,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject57)
                        )
                    ),
                    statistica__ref89,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject58)
                        )
                    ),
                    statistica__ref90,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject59)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                statistica__ref91,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Quantili" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il ',
                        statistica__ref92,
                        ' ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject60)
                        ),
                        ' di ordine ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject61)
                        ),
                        ' della variabile aleatoria ',
                        statistica__ref93,
                        ' \xE8 il pi\xF9 piccolo numero tale che:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject62)
                        )
                    ),
                    statistica__ref94,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il quantile di ordine 0.5 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject63)
                        ),
                        ' \xE8 detto ',
                        statistica__ref95,
                        '.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'I quantili di ordine 0.25 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject64)
                        ),
                        ' e 0.75 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject65)
                        ),
                        ' sono detti ',
                        statistica__ref96,
                        '.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'I quantili di ordine ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject66)
                        ),
                        ' sono detti ',
                        statistica__ref97,
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Varianza" },
                    statistica__ref98,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject67)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Disuguaglianze notevoli" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Disuguaglianza di Markov" },
                    statistica__ref99,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject68)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Divide in due parti (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject69)
                        ),
                        ' e ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject70)
                        ),
                        ') la funzione X, la cui media risulter\xE0 uguale a:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject71)
                        )
                    ),
                    statistica__ref100
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Disuguaglianza di Čebyšëv" },
                    statistica__ref101,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Se la variabile aleatoria ',
                        statistica__ref102,
                        ' ha media e varianza, allora la probabilit\xE0 che essa abbia un valore a pi\xF9 di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject72)
                        ),
                        ' di distanza dal valore medio \xE8 minore o uguale a ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject73)
                        ),
                        '.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject74)
                        )
                    ),
                    statistica__ref103,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject75)
                        )
                    ),
                    statistica__ref104
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Un momento...!" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momento" },
                    statistica__ref105,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject76)
                        )
                    ),
                    statistica__ref106
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Funzione generatrice dei momenti" },
                    statistica__ref107,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject77)
                        )
                    ),
                    statistica__ref108,
                    statistica__ref109
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Funzione caratteristica" },
                    statistica__ref110,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject78)
                        )
                    ),
                    statistica__ref111,
                    statistica__ref112
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Prove e schemi" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Variabile con distribuzione" },
                    statistica__ref113,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject79)
                        )
                    )
                ),
                statistica__ref114,
                statistica__ref115
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Bernoulliana" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione bernoulliana" },
                    statistica__ref116,
                    statistica__ref117,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject80)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della bernoulliana" },
                    statistica__ref118,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject81)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Binomiale" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione binomiale" },
                    statistica__ref119,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject82)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della binomiale" },
                    statistica__ref120,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject83)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della binomiale" },
                    statistica__ref121,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject84)
                        )
                    ),
                    statistica__ref122,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject85)
                        )
                    ),
                    statistica__ref123,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject86)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Geometrica" },
                statistica__ref124,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della geometrica" },
                    statistica__ref125,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject87)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della geometrica" },
                    statistica__ref126,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject88)
                        )
                    ),
                    statistica__ref127,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject89)
                        )
                    ),
                    statistica__ref128,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject90)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Assenza di memoria della geometrica" },
                    statistica__ref129,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject91)
                        )
                    ),
                    statistica__ref130
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Binomiale negativa" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione binomiale negativa" },
                    statistica__ref131,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject92)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della binomiale negativa" },
                    statistica__ref132,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject93)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della binomiale negativa" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        statistica__ref133,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject94)
                            )
                        ),
                        statistica__ref134,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject95)
                            )
                        ),
                        statistica__ref135,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject96)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Geometrica traslata" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione geometrica traslata" },
                    statistica__ref136,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo rimane ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject97)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della geometrica tralsata" },
                    statistica__ref137,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject98)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della geometrica traslata" },
                    statistica__ref138,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject99)
                        )
                    ),
                    statistica__ref139,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject100)
                        )
                    ),
                    statistica__ref140,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject90)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Assenza di memoria della geometrica traslata" },
                    statistica__ref141,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject91)
                        )
                    ),
                    statistica__ref142
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Binomiale negativa traslata" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione binomiale negativa traslata" },
                    statistica__ref143,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo rimane ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject92)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della binomiale negativa traslata" },
                    statistica__ref144,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject101)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della binomiale negativa traslata" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        statistica__ref145,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject102)
                            )
                        ),
                        statistica__ref146,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject103)
                            )
                        ),
                        statistica__ref147,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject96)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Ipergeometrica" },
                statistica__ref148,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della ipergeometrica" },
                    statistica__ref149,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject104)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della ipergeometrica" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        statistica__ref150,
                        statistica__ref151,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject105)
                            )
                        ),
                        statistica__ref152,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject106)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Poissoniana" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione poissoniana" },
                    statistica__ref153,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Binomiale: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject107)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Il numero di prove tende a infinito: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject108)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'La probabilit\xE0 di successo tende a 0: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject109)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'La media \xE8 finita: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject110)
                            )
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject111)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della poissoniana" },
                    statistica__ref154,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject112)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della poissoniana" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        statistica__ref155,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject113)
                            )
                        ),
                        statistica__ref156,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject114)
                            )
                        ),
                        statistica__ref157,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject115)
                            )
                        ),
                        statistica__ref158,
                        Object(preact_min["h"])(
                            'ol',
                            { start: 2 },
                            Object(preact_min["h"])(
                                'li',
                                null,
                                Object(preact_min["h"])(
                                    latex_Latex,
                                    null,
                                    statistica_r(statistica__templateObject116)
                                )
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Un altro schema" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Schema di Poisson" },
                    statistica__ref159,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        statistica__ref160,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'hanno intensit\xE0 ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject117)
                            ),
                            ' costante.'
                        ),
                        statistica__ref161
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Processo di Poisson" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Una variabile aleatoria ',
                        statistica__ref162,
                        ' che conta il numero di arrivi di uno schema di Poisson di intensit\xE0 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject117)
                        ),
                        ' in un intervallo di tempo di durata ',
                        statistica__ref163,
                        '.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'E\' una distribuzione poissoniana con ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject118)
                        ),
                        ': ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject119)
                        )
                    ),
                    statistica__ref164
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Esponenziale" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione esponenziale" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Una variabile aleatoria che conta il tempo diwidehattesa prima del primo arrivo di un processo di Poisson di intensit\xE0 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject117)
                        ),
                        '.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject120)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità dell'esponenziale" },
                    statistica__ref165,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject121)
                        )
                    ),
                    statistica__ref166,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject122)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti dell'esponenziale" },
                    _ref167,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject123)
                        )
                    ),
                    _ref168,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject124)
                        )
                    ),
                    _ref169,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject125)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Assenza di memoria della esponenziale" },
                    _ref170,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject126)
                        )
                    ),
                    _ref171
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Legge gamma" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione gamma" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Una variabile aleatoria che conta il tempo diwidehattesa prima dell\'',
                        _ref172,
                        '-esimo arrivo di un processo di Poisson di intensit\xE0 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(statistica__templateObject117)
                        ),
                        '.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject127)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della legge gamma" },
                    _ref173,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject128)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della legge gamma" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        _ref174,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject129)
                            )
                        ),
                        _ref175,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject130)
                            )
                        ),
                        _ref176,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject131)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Uniforme" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione uniforme" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Una variabile aleatoria che pu\xF2 assumere qualsiasi valore in un intervallo ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject132)
                        ),
                        ' in modo equiprobabile.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject133)
                        )
                    ),
                    _ref177,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject134)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della distribuzione uniforme" },
                    _ref178,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject135)
                        )
                    ),
                    _ref179,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject136)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della distribuzione uniforme" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        _ref180,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject137)
                            )
                        ),
                        _ref181,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject138)
                            )
                        ),
                        _ref182,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject139)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Normale o Gaussiana" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione normale" },
                    _ref183,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject140)
                        ),
                        '.'
                    ),
                    _ref184
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità della distribuzione normale" },
                    _ref185,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject141)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momenti della distribuzione normale" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        _ref186,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject142)
                            )
                        ),
                        _ref187,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(statistica__templateObject114)
                            )
                        ),
                        _ref188,
                        Object(preact_min["h"])(
                            'p',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject143)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Trasformazione della normale" },
                    _ref189,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject144)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Normale standard" },
                    _ref190,
                    _ref191,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La sua funzione di ripartizione \xE8 detta ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject145)
                        ),
                        ' e vale:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject146)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Quantili normali" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Da un quantile ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject147)
                        ),
                        ' della normale standard \xE8 possibile risalire allo stesso quantile di qualsiasi altra normale:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject148)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Gamma e normale" },
                    _ref192,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject149)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "La funzione Chi" },
                    _ref193,
                    _ref194,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject150)
                        )
                    ),
                    _ref195,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject151)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "T di Student" },
                    _ref196,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject152)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Approssimazioni notevoli" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Ipergeometrica e binomiale" },
                    _ref197,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject153)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Binomiale e poissoniana" },
                    _ref198,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject154)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Binomiale e normale" },
                    _ref199,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject155)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Correzione di Yates" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Passando da una variabile discreta ',
                        _ref200,
                        ' a una continua ',
                        _ref201,
                        ', per ogni valore discreto ',
                        _ref202,
                        ' la probabilit\xE0 viene "spalmata" su tutto l\'intervallo ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject156)
                        ),
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject157)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject158)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject159)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject160)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Vettori aleatori" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Vettore aleatorio" },
                    _ref203,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il suo simbolo generalmente \xE8 ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject161)
                        ),
                        ' oppure ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject162)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Funzioni di ripartizione" },
                    _ref204,
                    _ref205,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject163)
                        )
                    ),
                    _ref206,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject164)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Densità discreta" },
                    _ref207,
                    _ref208,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject165)
                        )
                    ),
                    _ref209,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject166)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Più variabili aleatorie" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Indipendenza delle variabili aleatorie" },
                    _ref210,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject167)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Media dei vettori aleatori" },
                    _ref211,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject168)
                        )
                    ),
                    _ref212,
                    _ref213,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject169)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                null,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Covarianza" },
                    _ref214,
                    _ref215,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject170)
                        )
                    ),
                    _ref216,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Il suo ',
                            _ref217,
                            ' \xE8 0: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject171)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'E\' ',
                            _ref218,
                            ': ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject172)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'E\' ',
                            _ref219,
                            ': ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject173)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'E\' ',
                            _ref220,
                            ': ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject174)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'E\' ',
                            _ref221,
                            ': ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject175)
                            )
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Variabili incorrelate" },
                    _ref222,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject176)
                        )
                    ),
                    _ref223
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Matrice di covarianza" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Una matrice ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject177)
                        ),
                        ' che contiene la covarianza tra tutte le variabili di un vettore aleatorio ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject161)
                        ),
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject178)
                        )
                    ),
                    _ref224
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Coefficiente di correlazione" },
                    _ref225,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject179)
                        )
                    ),
                    _ref226,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject180)
                        )
                    ),
                    _ref227,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject181)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Varianza di variabili aleatorie sommate" },
                    _ref228,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject182)
                        )
                    ),
                    _ref229,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Se pi\xF9 variabili aleatorie ',
                        _ref230,
                        ' sono ',
                        _ref231,
                        ' (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject176)
                        ),
                        '), allora:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject183)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Campioni" },
                _ref232,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Momento campionario" },
                    _ref233,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject184)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Il momento campionario di primo ordine \xE8 la ',
                        _ref234,
                        ' ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject185)
                        ),
                        '.'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Varianza campionaria" },
                    _ref235,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Se \xE8 noto il valore medio ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject186)
                        ),
                        ' di X:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject187)
                        )
                    ),
                    _ref236,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject188)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Media-ception" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Media campionaria" },
                    _ref237,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject189)
                        )
                    ),
                    _ref238
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Varianza campionaria" },
                    _ref239,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject190)
                        )
                    ),
                    _ref240
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Correzione campionaria" },
                    _ref241,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject191)
                        )
                    ),
                    _ref242
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Campionamento di una distribuzione normale" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Campionamento di una distribuzione normale" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Se la popolazione ',
                        _ref243,
                        ' ha una distribuzione normale (',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject192)
                        ),
                        ')...'
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione della media campionaria" },
                    _ref244,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject193)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Distribuzione della varianza campionaria" },
                    _ref245,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject194)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject195)
                        )
                    )
                ),
                _ref246
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Quando i campioni hanno dimensioni infinite" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Convergenza in distribuzione" },
                    _ref247,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            '\\lim_{n \\to +\\infty} F_{X_n} (x) = F_X (x) \\implies X_n \\xrightarrow{d} X'
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Convergenza in probabilità" },
                    _ref248,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            '\\forall \\epsilon > 0, \\lim_{n \\to +\\infty} P( | X_n - X | < \\epsilon) = 1 \\implies X_n \\xrightarrow{p} X'
                        )
                    ),
                    _ref249
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Convergenza quasi certa" },
                    _ref250,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            '\\forall \\epsilon > 0, P left( \\lim_{n \\to +\\infty} | X_n - X | < \\epsilon) \right) = 1 \\implies X_n \\xrightarrow{qc} X'
                        )
                    ),
                    _ref251
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Convergenza in media quadratica" },
                    _ref252,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            '\\lim_{n \\to +\\infty} E( | X_n - X |^2 = 0 \\implies X_n \\xrightarrow{mq} X'
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Gerarchia delle convergenze" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            '\n                                \\begin{matrix}\n                                X_n \\xrightarrow{mq} X\\\\\n                                X_n \\xrightarrow{qc} X\n                                \\end{matrix} \\implies X_n \\xrightarrow{p} X \\implies X_n \\xrightarrow{d} X'
                        )
                    ),
                    _ref253,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            'X_n \\xrightarrow{p} x \\Longleftrightarrow X_n \\xrightarrow{d} x'
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "I grandi numeri" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Legge debole dei grandi numeri" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La successione delle medie campionarie ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject185)
                        ),
                        ' ',
                        _ref254,
                        ' alla media della popolazione ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject196)
                        ),
                        ', se essa esiste.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            '\\overline{X}_n \\xrightarrow{p} X'
                        )
                    ),
                    _ref255,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject197)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject198)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Legge forte dei grandi numeri" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La successione delle medie campionarie ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject185)
                        ),
                        ' ',
                        _ref256,
                        ' alla media della popolazione ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject196)
                        ),
                        ', se essa esiste.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            '\\overline{X}_n \\xrightarrow{qc} X'
                        )
                    ),
                    _ref257,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject199)
                        )
                    ),
                    _ref258
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Al limite" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Teorema centrale del limite" },
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'La successione delle medie campionarie ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject185)
                        ),
                        ' ',
                        _ref259,
                        ' a ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject200)
                        ),
                        '.'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject201)
                        )
                    ),
                    _ref260,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject202)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Altre approsimazioni" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Binomiale e normale" },
                    _ref261,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject155)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Binomiale negativa e normale" },
                    _ref262,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject203)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Poissoniana e normale" },
                    _ref263,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject204)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Gamma e normale" },
                    _ref264,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject205)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "In generale" },
                    _ref265,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject206)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Actually statistica" },
                _ref266,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Statistica" },
                    _ref267,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject207)
                        )
                    ),
                    Object(preact_min["h"])(
                        example_Example,
                        null,
                        'Ad esempio, sono statistiche media e varianza campionaria, cos\xEC come il campione stesso ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject208)
                        ),
                        '.'
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Stimatori" },
                _ref268,
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Corretto" },
                    _ref269,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject209)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Asintoticamente corretto" },
                    _ref270,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject210)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Consistente in media quadratica" },
                    _ref271,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject211)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Consistente in probabilità" },
                    _ref272,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject212)
                        )
                    ),
                    _ref273
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Asintoticamente normale" },
                    _ref274,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject213)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Metodo dei momenti" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Metodo dei momenti" },
                    _ref275,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Lo stimatore di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject214)
                        ),
                        ' cos\xEC ottenuto sar\xE0 indicato aggiungendo un cappellino e una ',
                        _ref276,
                        ' a ',
                        _ref277,
                        ': ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject215)
                        )
                    ),
                    _ref278,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject216)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject217)
                            )
                        )
                    ),
                    _ref279,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject218)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Se ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject214)
                        ),
                        ' non \xE8 esprimibile in termini di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject196)
                        ),
                        ', si possono usare i momenti successivi ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject219)
                        ),
                        ', ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject220)
                        ),
                        ', ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject220)
                        ),
                        '...'
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Metodo della massima verosomiglianza" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Metodo della massima verosomiglianza" },
                    _ref280,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Lo stimatore di ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject214)
                        ),
                        ' cos\xEC ottenuto sar\xE0 indicato aggiungendo un cappellino e una ',
                        _ref281,
                        ' a ',
                        _ref282,
                        ': ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject221)
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'Consiste nel trovare il massimo assoluto ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject221)
                        ),
                        ' della la funzione di verosomiglianza ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject222)
                        ),
                        ':'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject223)
                        )
                    ),
                    _ref283
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Proprietà degli stimatori di massima verosomiglianza" },
                    _ref284,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        _ref285,
                        _ref286,
                        _ref287,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Sono ',
                            _ref288,
                            ': ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject224)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Nuove stime notevoli" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Stima di una bernoulliana" },
                    _ref289,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject225)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Stima di una poissoniana" },
                    _ref290,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject226)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Stima di una esponenziale" },
                    _ref291,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject227)
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Stima di una normale" },
                    _ref292,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject228)
                            )
                        ),
                        _ref293,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject229)
                            )
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Intervalli di confidenza" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Confidenza" },
                    _ref294,
                    _ref295,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        'L\'intervallo di confidenza a N della stima ',
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject230)
                        ),
                        ' \xE8 l\'intervallo ',
                        _ref296,
                        ' tale che:'
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject231)
                        )
                    ),
                    _ref297
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Confidenza nella media di una normale" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Varianza nota" },
                    _ref298,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Intervalli bilateri: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject232)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Intervallo unilatero da sinistra: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject233)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Intervallo unilatero da destra: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject234)
                            )
                        )
                    )
                ),
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Varianza incognita" },
                    _ref299,
                    Object(preact_min["h"])(
                        'ul',
                        null,
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Intervalli bilateri: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject235)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Intervallo unilatero da sinistra: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject236)
                            )
                        ),
                        Object(preact_min["h"])(
                            'li',
                            null,
                            'Intervallo unilatero da destra: ',
                            Object(preact_min["h"])(
                                latex_Latex,
                                null,
                                statistica_r(_templateObject237)
                            )
                        )
                    ),
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject238)
                        ),
                        ' \xE8 un quantile della distribuzione di Student di parametro ',
                        _ref300,
                        '.'
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Confidenza per la proporzione di una bernoulliana" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Terzo metodo corretto" },
                    _ref301,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject239)
                        )
                    )
                )
            ),
            Object(preact_min["h"])(
                split_Split,
                { title: "Confidenza per la media di qualsiasi popolazione" },
                Object(preact_min["h"])(
                    panel_Panel,
                    { title: "Approssimando con la normale" },
                    _ref302,
                    Object(preact_min["h"])(
                        'p',
                        null,
                        Object(preact_min["h"])(
                            latex_Latex,
                            null,
                            statistica_r(_templateObject240)
                        )
                    )
                )
            )
        );
    };

    return Statistica;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












// noinspection JSUnusedGlobalSymbols

var index__ref = Object(preact_min["h"])(
	'div',
	{ id: 'app' },
	Object(preact_min["h"])(
		'h1',
		null,
		Object(preact_min["h"])(
			'a',
			{ href: '/' },
			'Appuntiweb'
		),
		' ',
		Object(preact_min["h"])(
			'small',
			null,
			'di ',
			Object(preact_min["h"])(
				'a',
				{ href: 'https://steffo.eu/' },
				'Steffo'
			)
		)
	),
	Object(preact_min["h"])(
		preact_router_es,
		null,
		Object(preact_min["h"])(home_Home, { path: '/' }),
		Object(preact_min["h"])(fisica_Fisica, { path: '/fisica' }),
		Object(preact_min["h"])(vldigeometria_VlDiGeometria, { path: '/vldigeometria' }),
		Object(preact_min["h"])(mingwinstall_MingwInstall, { path: '/mingwinstall' }),
		Object(preact_min["h"])(statistica_Statistica, { path: '/statistica' })
	),
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

/***/ "MKE3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"markdown":"markdown__2fpjQ"};

/***/ }),

/***/ "MeW5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"minus":"minus__2d_8r"};

/***/ }),

/***/ "Oqef":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "P9k+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"panel":"panel__22fOQ"};

/***/ }),

/***/ "WViY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Xa+Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"example":"example__2CnC8"};

/***/ }),

/***/ "ZcXo":
/***/ (function(module, exports) {

module.exports = {"name":"Appunti Web","short_name":"Appunti Web","start_url":"/appuntiweb/","display":"standalone","orientation":"portrait","background_color":"#0d193b","theme_color":"#a0ccff","icons":[{"src":"/assets/icon.png","type":"image/png","sizes":"800x800"}]}

/***/ }),

/***/ "ddTt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"plus":"plus__1JPyf"};

/***/ }),

/***/ "jHTF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oNmJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"theorem":"theorem__yukmA"};

/***/ }),

/***/ "pRAn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hypothesis":"hypothesis__Ma0m3"};

/***/ }),

/***/ "qMTX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"copyright":"copyright__TBGn1"};

/***/ }),

/***/ "tO1d":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"todo":"todo__5Soco"};

/***/ }),

/***/ "xHuH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map