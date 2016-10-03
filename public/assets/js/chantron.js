(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define('chantron', factory) :
	(factory());
}(this, function () { 'use strict';

	var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
	function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

	var jquery = __commonjs(function (module, exports, global) {
	/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : __commonjs_global, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.4",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function() {
			return jQuery;
		} );
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));
	});

	var $ = (jquery && typeof jquery === 'object' && 'default' in jquery ? jquery['default'] : jquery);

	var underscore = __commonjs(function (module, exports, global) {
	//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (typeof exports !== 'undefined') {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (typeof define === 'function' && define.amd) {
	    define('underscore', [], function() {
	      return _;
	    });
	  }
	}.call(__commonjs_global));
	});

	var require$$1 = (underscore && typeof underscore === 'object' && 'default' in underscore ? underscore['default'] : underscore);

	var backbone = __commonjs(function (module, exports, global) {
	//     Backbone.js 1.3.3

	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self === self && self) ||
	            (typeof global == 'object' && global.global === global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (typeof define === 'function' && define.amd) {
	    define(['underscore', 'jquery', 'exports'], function(_, $$$, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $$$);
	    });

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require$$1, $$$;
	    try { $$$ = $; } catch (e) {}
	    factory(root, exports, _, $$$);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	})(function(root, Backbone, _, $$$) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $$$;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend({}, options, {validate: true}));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1};

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = {added: [], merged: [], removed: removed};
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] ||
	        this._byId[this.modelId(obj.attributes || obj)] ||
	        obj.cid && this._byId[obj.cid];
	    },

	    // Returns `true` if the model is in the collection.
	    has: function(obj) {
	      return this.get(obj) != null;
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return this.map(attr + '');
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function(model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function(eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function(eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;
	});
	});

	var Backbone = (backbone && typeof backbone === 'object' && 'default' in backbone ? backbone['default'] : backbone);

	var Navigation = Backbone.Model.extend();

	var ContactInfo = Backbone.Model.extend({
	    defaults: {
	        firstName: null,
	        lastName: null
	    }
	});

	require$$1.extend(ContactInfo, Backbone.Events);

	ContactInfo.on('change:firstName', function () {
	    console.log('changed first name!');
	});

	ContactInfo.on('change:lastName', function () {
	    console.log('changed last name!');
	});

	function home() {
	    this.view.set('backgroundImage', '/assets/images/m100.jpg');
	    this.view.resetPartial('content', this.view.partials.home);
	}

	function about() {
	    this.view.set('backgroundImage', '/assets/images/fiery-wise-pleiades.jpg');
	    this.view.resetPartial('content', this.view.partials.about);
	}

	function contact() {
	    this.view.set('backgroundImage', '/assets/images/ngc-1569.jpg');
	    this.view.resetPartial('content', this.view.partials.contact);
	}

	var Router = Backbone.Router.extend({
	    routes: {
	        '': home,
	        'home': home,
	        'about': about,
	        'contact': contact
	    },
	    initialize: function initialize(options) {
	        //
	    }
	});

	var DEFAULTS = {
		delay: 0,
		duration: 300,
		easing: 'linear'
	};

	function fade(t, params) {
		var targetOpacity;

		params = t.processParams(params, DEFAULTS);

		if (t.isIntro) {
			targetOpacity = t.getStyle('opacity');
			t.setStyle('opacity', 0);
		} else {
			targetOpacity = 0;
		}

		t.animateStyle('opacity', targetOpacity, params).then(t.complete);
	}

	var ractive = __commonjs(function (module, exports, global) {
	/*
		Ractive.js v0.8.0-edge
		Thu Sep 01 2016 18:46:30 GMT+0000 (UTC) - commit fbaba751cc3b07d2d452766f33eebb99190dc267

		http://ractivejs.org
		http://twitter.com/RactiveJS

		Released under the MIT License.
	*/


	(function (global, factory) {
	  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  ((function() { var current = global.Ractive; var next = factory(); next.noConflict = function() { global.Ractive = current; return next; }; return global.Ractive = next; })());
	}(__commonjs_global, function () { 'use strict';

	  var defaults = {
	  	// render placement:
	  	el:                     void 0,
	  	append:				    false,

	  	// template:
	  	template:               null,

	  	// parse:
	  	delimiters:             [ '{{', '}}' ],
	  	tripleDelimiters:       [ '{{{', '}}}' ],
	  	staticDelimiters:       [ '[[', ']]' ],
	  	staticTripleDelimiters: [ '[[[', ']]]' ],
	  	csp: 					true,
	  	interpolate:            false,
	  	preserveWhitespace:     false,
	  	sanitize:               false,
	  	stripComments:          true,

	  	// data & binding:
	  	data:                   {},
	  	computed:               {},
	  	magic:                  false,
	  	modifyArrays:           false,
	  	adapt:                  [],
	  	isolated:               false,
	  	twoway:                 true,
	  	lazy:                   false,

	  	// transitions:
	  	noIntro:                false,
	  	transitionsEnabled:     true,
	  	complete:               void 0,

	  	// css:
	  	css:                    null,
	  	noCssTransform:         false
	  };

	  // These are a subset of the easing equations found at
	  // https://raw.github.com/danro/easing-js - license info
	  // follows:

	  // --------------------------------------------------
	  // easing.js v0.5.4
	  // Generic set of easing functions with AMD support
	  // https://github.com/danro/easing-js
	  // This code may be freely distributed under the MIT license
	  // http://danro.mit-license.org/
	  // --------------------------------------------------
	  // All functions adapted from Thomas Fuchs & Jeremy Kahn
	  // Easing Equations (c) 2003 Robert Penner, BSD license
	  // https://raw.github.com/danro/easing-js/master/LICENSE
	  // --------------------------------------------------

	  // In that library, the functions named easeIn, easeOut, and
	  // easeInOut below are named easeInCubic, easeOutCubic, and
	  // (you guessed it) easeInOutCubic.
	  //
	  // You can add additional easing functions to this list, and they
	  // will be globally available.


	  var easing = {
	  	linear: function ( pos ) { return pos; },
	  	easeIn: function ( pos ) { return Math.pow( pos, 3 ); },
	  	easeOut: function ( pos ) { return ( Math.pow( ( pos - 1 ), 3 ) + 1 ); },
	  	easeInOut: function ( pos ) {
	  		if ( ( pos /= 0.5 ) < 1 ) { return ( 0.5 * Math.pow( pos, 3 ) ); }
	  		return ( 0.5 * ( Math.pow( ( pos - 2 ), 3 ) + 2 ) );
	  	}
	  };

	  var legacy = null;

	  /*global console, navigator */

	  var win = typeof window !== 'undefined' ? window : null;
	  var doc = win ? document : null;

	  var isClient = !!doc;
	  var isJsdom = ( typeof navigator !== 'undefined' && /jsDom/.test( navigator.appName ) );
	  var hasConsole = ( typeof console !== 'undefined' && typeof console.warn === 'function' && typeof console.warn.apply === 'function' );

	  var magicSupported;
	  try {
	  	Object.defineProperty({}, 'test', { value: 0 });
	  	magicSupported = true;
	  } catch ( e ) {
	  	magicSupported = false;
	  }

	  var svg = doc ?
	  	doc.implementation.hasFeature( 'http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1' ) :
	  	false;

	  var vendors = [ 'o', 'ms', 'moz', 'webkit' ];

	  var html   = 'http://www.w3.org/1999/xhtml';
	  var mathml = 'http://www.w3.org/1998/Math/MathML';
	  var svg$1    = 'http://www.w3.org/2000/svg';
	  var xlink  = 'http://www.w3.org/1999/xlink';
	  var xml    = 'http://www.w3.org/XML/1998/namespace';
	  var xmlns  = 'http://www.w3.org/2000/xmlns';

	  var namespaces = { html: html, mathml: mathml, svg: svg$1, xlink: xlink, xml: xml, xmlns: xmlns };

	  var createElement;
	  var matches;
	  var div;
	  var methodNames;
	  var unprefixed;
	  var prefixed;
	  var i;
	  var j;
	  var makeFunction;
	  // Test for SVG support
	  if ( !svg ) {
	  	createElement = function ( type, ns, extend ) {
	  		if ( ns && ns !== html ) {
	  			throw 'This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you\'re trying to render SVG in an older browser. See http://docs.ractivejs.org/latest/svg-and-older-browsers for more information';
	  		}

	  		return extend ?
	  			doc.createElement( type, extend ) :
	  			doc.createElement( type );
	  	};
	  } else {
	  	createElement = function ( type, ns, extend ) {
	  		if ( !ns || ns === html ) {
	  			return extend ?
	  				doc.createElement( type, extend ) :
	  				doc.createElement( type );
	  		}

	  		return extend ?
	  			doc.createElementNS( ns, type, extend ) :
	  			doc.createElementNS( ns, type );
	  	};
	  }

	  function createDocumentFragment () {
	  	return doc.createDocumentFragment();
	  }

	  function getElement ( input ) {
	  	var output;

	  	if ( !input || typeof input === 'boolean' ) { return; }

	  	if ( !win || !doc || !input ) {
	  		return null;
	  	}

	  	// We already have a DOM node - no work to do. (Duck typing alert!)
	  	if ( input.nodeType ) {
	  		return input;
	  	}

	  	// Get node from string
	  	if ( typeof input === 'string' ) {
	  		// try ID first
	  		output = doc.getElementById( input );

	  		// then as selector, if possible
	  		if ( !output && doc.querySelector ) {
	  			output = doc.querySelector( input );
	  		}

	  		// did it work?
	  		if ( output && output.nodeType ) {
	  			return output;
	  		}
	  	}

	  	// If we've been given a collection (jQuery, Zepto etc), extract the first item
	  	if ( input[0] && input[0].nodeType ) {
	  		return input[0];
	  	}

	  	return null;
	  }

	  if ( !isClient ) {
	  	matches = null;
	  } else {
	  	div = createElement( 'div' );
	  	methodNames = [ 'matches', 'matchesSelector' ];

	  	makeFunction = function ( methodName ) {
	  		return function ( node, selector ) {
	  			return node[ methodName ]( selector );
	  		};
	  	};

	  	i = methodNames.length;

	  	while ( i-- && !matches ) {
	  		unprefixed = methodNames[i];

	  		if ( div[ unprefixed ] ) {
	  			matches = makeFunction( unprefixed );
	  		} else {
	  			j = vendors.length;
	  			while ( j-- ) {
	  				prefixed = vendors[i] + unprefixed.substr( 0, 1 ).toUpperCase() + unprefixed.substring( 1 );

	  				if ( div[ prefixed ] ) {
	  					matches = makeFunction( prefixed );
	  					break;
	  				}
	  			}
	  		}
	  	}

	  	// IE8...
	  	if ( !matches ) {
	  		matches = function ( node, selector ) {
	  			var nodes, parentNode, i;

	  			parentNode = node.parentNode;

	  			if ( !parentNode ) {
	  				// empty dummy <div>
	  				div.innerHTML = '';

	  				parentNode = div;
	  				node = node.cloneNode();

	  				div.appendChild( node );
	  			}

	  			nodes = parentNode.querySelectorAll( selector );

	  			i = nodes.length;
	  			while ( i-- ) {
	  				if ( nodes[i] === node ) {
	  					return true;
	  				}
	  			}

	  			return false;
	  		};
	  	}
	  }

	  function detachNode ( node ) {
	  	if ( node && typeof node.parentNode !== 'unknown' && node.parentNode ) {
	  		node.parentNode.removeChild( node );
	  	}

	  	return node;
	  }

	  function safeToStringValue ( value ) {
	  	return ( value == null || !value.toString ) ? '' : '' + value;
	  }

	  function safeAttributeString ( string ) {
	  	return safeToStringValue( string )
	  		.replace( /&/g, '&amp;' )
	  		.replace( /"/g, '&quot;' )
	  		.replace( /'/g, '&#39;' );
	  }

	  var camel = /(-.)/g;
	  function camelize ( string ) {
	  	return string.replace( camel, function ( s ) { return s.charAt( 1 ).toUpperCase(); } );
	  }

	  var decamel = /[A-Z]/g;
	  function decamelize ( string ) {
	  	return string.replace( decamel, function ( s ) { return ("-" + (s.toLowerCase())); } );
	  }

	  var create;
	  var defineProperty;
	  var defineProperties;
	  try {
	  	Object.defineProperty({}, 'test', { get: function() {}, set: function() {} });

	  	if ( doc ) {
	  		Object.defineProperty( createElement( 'div' ), 'test', { value: 0 });
	  	}

	  	defineProperty = Object.defineProperty;
	  } catch ( err ) {
	  	// Object.defineProperty doesn't exist, or we're in IE8 where you can
	  	// only use it with DOM objects (what were you smoking, MSFT?)
	  	defineProperty = function ( obj, prop, desc ) {
	  		if ( desc.get ) obj[ prop ] = desc.get();
	  		else obj[ prop ] = desc.value;
	  	};
	  }

	  try {
	  	try {
	  		Object.defineProperties({}, { test: { value: 0 } });
	  	} catch ( err ) {
	  		// TODO how do we account for this? noMagic = true;
	  		throw err;
	  	}

	  	if ( doc ) {
	  		Object.defineProperties( createElement( 'div' ), { test: { value: 0 } });
	  	}

	  	defineProperties = Object.defineProperties;
	  } catch ( err ) {
	  	defineProperties = function ( obj, props ) {
	  		var prop;

	  		for ( prop in props ) {
	  			if ( props.hasOwnProperty( prop ) ) {
	  				defineProperty( obj, prop, props[ prop ] );
	  			}
	  		}
	  	};
	  }

	  try {
	  	Object.create( null );

	  	create = Object.create;
	  } catch ( err ) {
	  	// sigh
	  	create = (function () {
	  		var F = function () {};

	  		return function ( proto, props ) {
	  			var obj;

	  			if ( proto === null ) {
	  				return {};
	  			}

	  			F.prototype = proto;
	  			obj = new F();

	  			if ( props ) {
	  				Object.defineProperties( obj, props );
	  			}

	  			return obj;
	  		};
	  	}());
	  }

	  function extendObj ( target ) {
	  	var sources = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	  	var prop;

	  	sources.forEach( function ( source ) {
	  		for ( prop in source ) {
	  			if ( hasOwn.call( source, prop ) ) {
	  				target[ prop ] = source[ prop ];
	  			}
	  		}
	  	});

	  	return target;
	  }

	  function fillGaps ( target ) {
	  	var sources = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	  	sources.forEach( function ( s ) {
	  		for ( var key in s ) {
	  			if ( hasOwn.call( s, key ) && !( key in target ) ) {
	  				target[ key ] = s[ key ];
	  			}
	  		}
	  	});

	  	return target;
	  }

	  var hasOwn = Object.prototype.hasOwnProperty;

	  var toString = Object.prototype.toString;
	  // thanks, http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
	  function isArray ( thing ) {
	  	return toString.call( thing ) === '[object Array]';
	  }

	  function isEqual ( a, b ) {
	  	if ( a === null && b === null ) {
	  		return true;
	  	}

	  	if ( typeof a === 'object' || typeof b === 'object' ) {
	  		return false;
	  	}

	  	return a === b;
	  }

	  // http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
	  function isNumeric ( thing ) {
	  	return !isNaN( parseFloat( thing ) ) && isFinite( thing );
	  }

	  function isObject ( thing ) {
	  	return ( thing && toString.call( thing ) === '[object Object]' );
	  }

	  function noop () {}

	  var alreadyWarned = {};
	  var log;
	  var printWarning;
	  var welcome;
	  if ( hasConsole ) {
	  	var welcomeIntro = [
	  		("%cRactive.js %c0.8.0-edge-fbaba751cc3b07d2d452766f33eebb99190dc267 %cin debug mode, %cmore..."),
	  		'color: rgb(114, 157, 52); font-weight: normal;',
	  		'color: rgb(85, 85, 85); font-weight: normal;',
	  		'color: rgb(85, 85, 85); font-weight: normal;',
	  		'color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;'
	  	];
	  	var welcomeMessage = "You're running Ractive 0.8.0-edge-fbaba751cc3b07d2d452766f33eebb99190dc267 in debug mode - messages will be printed to the console to help you fix problems and optimise your application.\n\nTo disable debug mode, add this line at the start of your app:\n  Ractive.DEBUG = false;\n\nTo disable debug mode when your app is minified, add this snippet:\n  Ractive.DEBUG = /unminified/.test(function(){/*unminified*/});\n\nGet help and support:\n  http://docs.ractivejs.org\n  http://stackoverflow.com/questions/tagged/ractivejs\n  http://groups.google.com/forum/#!forum/ractive-js\n  http://twitter.com/ractivejs\n\nFound a bug? Raise an issue:\n  https://github.com/ractivejs/ractive/issues\n\n";

	  	welcome = function () {
	  		var hasGroup = !!console.groupCollapsed;
	  		console[ hasGroup ? 'groupCollapsed' : 'log' ].apply( console, welcomeIntro );
	  		console.log( welcomeMessage );
	  		if ( hasGroup ) {
	  			console.groupEnd( welcomeIntro );
	  		}

	  		welcome = noop;
	  	};

	  	printWarning = function ( message, args ) {
	  		welcome();

	  		// extract information about the instance this message pertains to, if applicable
	  		if ( typeof args[ args.length - 1 ] === 'object' ) {
	  			var options = args.pop();
	  			var ractive = options ? options.ractive : null;

	  			if ( ractive ) {
	  				// if this is an instance of a component that we know the name of, add
	  				// it to the message
	  				var name;
	  				if ( ractive.component && ( name = ractive.component.name ) ) {
	  					message = "<" + name + "> " + message;
	  				}

	  				var node;
	  				if ( node = ( options.node || ( ractive.fragment && ractive.fragment.rendered && ractive.find( '*' ) ) ) ) {
	  					args.push( node );
	  				}
	  			}
	  		}

	  		console.warn.apply( console, [ '%cRactive.js: %c' + message, 'color: rgb(114, 157, 52);', 'color: rgb(85, 85, 85);' ].concat( args ) );
	  	};

	  	log = function () {
	  		console.log.apply( console, arguments );
	  	};
	  } else {
	  	printWarning = log = welcome = noop;
	  }

	  function format ( message, args ) {
	  	return message.replace( /%s/g, function () { return args.shift(); } );
	  }

	  function fatal ( message ) {
	  	var args = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  	message = format( message, args );
	  	throw new Error( message );
	  }

	  function logIfDebug () {
	  	if ( Ractive.DEBUG ) {
	  		log.apply( null, arguments );
	  	}
	  }

	  function warn ( message ) {
	  	var args = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  	message = format( message, args );
	  	printWarning( message, args );
	  }

	  function warnOnce ( message ) {
	  	var args = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  	message = format( message, args );

	  	if ( alreadyWarned[ message ] ) {
	  		return;
	  	}

	  	alreadyWarned[ message ] = true;
	  	printWarning( message, args );
	  }

	  function warnIfDebug () {
	  	if ( Ractive.DEBUG ) {
	  		warn.apply( null, arguments );
	  	}
	  }

	  function warnOnceIfDebug () {
	  	if ( Ractive.DEBUG ) {
	  		warnOnce.apply( null, arguments );
	  	}
	  }

	  // Error messages that are used (or could be) in multiple places
	  var badArguments = 'Bad arguments';
	  var noRegistryFunctionReturn = 'A function was specified for "%s" %s, but no %s was returned';
	  var missingPlugin = function ( name, type ) { return ("Missing \"" + name + "\" " + type + " plugin. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#" + type + "s"); };

	  function findInViewHierarchy ( registryName, ractive, name ) {
	  	var instance = findInstance( registryName, ractive, name );
	  	return instance ? instance[ registryName ][ name ] : null;
	  }

	  function findInstance ( registryName, ractive, name ) {
	  	while ( ractive ) {
	  		if ( name in ractive[ registryName ] ) {
	  			return ractive;
	  		}

	  		if ( ractive.isolated ) {
	  			return null;
	  		}

	  		ractive = ractive.parent;
	  	}
	  }

	  function interpolate ( from, to, ractive, type ) {
	  	if ( from === to ) return null;

	  	if ( type ) {
	  		var interpol = findInViewHierarchy( 'interpolators', ractive, type );
	  		if ( interpol ) return interpol( from, to ) || null;

	  		fatal( missingPlugin( type, 'interpolator' ) );
	  	}

	  	return interpolators.number( from, to ) ||
	  	       interpolators.array( from, to ) ||
	  	       interpolators.object( from, to ) ||
	  	       null;
	  }

	  function snap ( to ) {
	  	return function () { return to; };
	  }

	  var interpolators = {
	  	number: function ( from, to ) {
	  		var delta;

	  		if ( !isNumeric( from ) || !isNumeric( to ) ) {
	  			return null;
	  		}

	  		from = +from;
	  		to = +to;

	  		delta = to - from;

	  		if ( !delta ) {
	  			return function () { return from; };
	  		}

	  		return function ( t ) {
	  			return from + ( t * delta );
	  		};
	  	},

	  	array: function ( from, to ) {
	  		var intermediate, interpolators, len, i;

	  		if ( !isArray( from ) || !isArray( to ) ) {
	  			return null;
	  		}

	  		intermediate = [];
	  		interpolators = [];

	  		i = len = Math.min( from.length, to.length );
	  		while ( i-- ) {
	  			interpolators[i] = interpolate( from[i], to[i] );
	  		}

	  		// surplus values - don't interpolate, but don't exclude them either
	  		for ( i=len; i<from.length; i+=1 ) {
	  			intermediate[i] = from[i];
	  		}

	  		for ( i=len; i<to.length; i+=1 ) {
	  			intermediate[i] = to[i];
	  		}

	  		return function ( t ) {
	  			var i = len;

	  			while ( i-- ) {
	  				intermediate[i] = interpolators[i]( t );
	  			}

	  			return intermediate;
	  		};
	  	},

	  	object: function ( from, to ) {
	  		var properties, len, interpolators, intermediate, prop;

	  		if ( !isObject( from ) || !isObject( to ) ) {
	  			return null;
	  		}

	  		properties = [];
	  		intermediate = {};
	  		interpolators = {};

	  		for ( prop in from ) {
	  			if ( hasOwn.call( from, prop ) ) {
	  				if ( hasOwn.call( to, prop ) ) {
	  					properties.push( prop );
	  					interpolators[ prop ] = interpolate( from[ prop ], to[ prop ] ) || snap( to[ prop ] );
	  				}

	  				else {
	  					intermediate[ prop ] = from[ prop ];
	  				}
	  			}
	  		}

	  		for ( prop in to ) {
	  			if ( hasOwn.call( to, prop ) && !hasOwn.call( from, prop ) ) {
	  				intermediate[ prop ] = to[ prop ];
	  			}
	  		}

	  		len = properties.length;

	  		return function ( t ) {
	  			var i = len, prop;

	  			while ( i-- ) {
	  				prop = properties[i];

	  				intermediate[ prop ] = interpolators[ prop ]( t );
	  			}

	  			return intermediate;
	  		};
	  	}
	  };

	  // TODO: deprecate in future release
	  var deprecations = {
	  	construct: {
	  		deprecated: 'beforeInit',
	  		replacement: 'onconstruct'
	  	},
	  	render: {
	  		deprecated: 'init',
	  		message: 'The "init" method has been deprecated ' +
	  			'and will likely be removed in a future release. ' +
	  			'You can either use the "oninit" method which will fire ' +
	  			'only once prior to, and regardless of, any eventual ractive ' +
	  			'instance being rendered, or if you need to access the ' +
	  			'rendered DOM, use "onrender" instead. ' +
	  			'See http://docs.ractivejs.org/latest/migrating for more information.'
	  	},
	  	complete: {
	  		deprecated: 'complete',
	  		replacement: 'oncomplete'
	  	}
	  };

	  var Hook = function Hook ( event ) {
	  	this.event = event;
	  	this.method = 'on' + event;
	  	this.deprecate = deprecations[ event ];
	  };

	  Hook.prototype.call = function call ( method, ractive, arg ) {
	  	if ( ractive[ method ] ) {
	  		arg ? ractive[ method ]( arg ) : ractive[ method ]();
	  		return true;
	  	}
	  };

	  Hook.prototype.fire = function fire ( ractive, arg ) {
	  	this.call( this.method, ractive, arg );

	  	// handle deprecations
	  	if ( !ractive[ this.method ] && this.deprecate && this.call( this.deprecate.deprecated, ractive, arg ) ) {
	  		if ( this.deprecate.message ) {
	  			warnIfDebug( this.deprecate.message );
	  		} else {
	  			warnIfDebug( 'The method "%s" has been deprecated in favor of "%s" and will likely be removed in a future release. See http://docs.ractivejs.org/latest/migrating for more information.', this.deprecate.deprecated, this.deprecate.replacement );
	  		}
	  	}

	  	// TODO should probably use internal method, in case ractive.fire was overwritten
	  	arg ? ractive.fire( this.event, arg ) : ractive.fire( this.event );
	  };

	  function addToArray ( array, value ) {
	  	var index = array.indexOf( value );

	  	if ( index === -1 ) {
	  		array.push( value );
	  	}
	  }

	  function arrayContains ( array, value ) {
	  	for ( var i = 0, c = array.length; i < c; i++ ) {
	  		if ( array[i] == value ) {
	  			return true;
	  		}
	  	}

	  	return false;
	  }

	  function arrayContentsMatch ( a, b ) {
	  	var i;

	  	if ( !isArray( a ) || !isArray( b ) ) {
	  		return false;
	  	}

	  	if ( a.length !== b.length ) {
	  		return false;
	  	}

	  	i = a.length;
	  	while ( i-- ) {
	  		if ( a[i] !== b[i] ) {
	  			return false;
	  		}
	  	}

	  	return true;
	  }

	  function ensureArray ( x ) {
	  	if ( typeof x === 'string' ) {
	  		return [ x ];
	  	}

	  	if ( x === undefined ) {
	  		return [];
	  	}

	  	return x;
	  }

	  function lastItem ( array ) {
	  	return array[ array.length - 1 ];
	  }

	  function removeFromArray ( array, member ) {
	  	if ( !array ) {
	  		return;
	  	}

	  	var index = array.indexOf( member );

	  	if ( index !== -1 ) {
	  		array.splice( index, 1 );
	  	}
	  }

	  function toArray ( arrayLike ) {
	  	var array = [], i = arrayLike.length;
	  	while ( i-- ) {
	  		array[i] = arrayLike[i];
	  	}

	  	return array;
	  }

	  var _Promise;
	  var PENDING = {};
	  var FULFILLED = {};
	  var REJECTED = {};
	  if ( typeof Promise === 'function' ) {
	  	// use native Promise
	  	_Promise = Promise;
	  } else {
	  	_Promise = function ( callback ) {
	  		var fulfilledHandlers = [],
	  			rejectedHandlers = [],
	  			state = PENDING,

	  			result,
	  			dispatchHandlers,
	  			makeResolver,
	  			fulfil,
	  			reject,

	  			promise;

	  		makeResolver = function ( newState ) {
	  			return function ( value ) {
	  				if ( state !== PENDING ) {
	  					return;
	  				}

	  				result = value;
	  				state = newState;

	  				dispatchHandlers = makeDispatcher( ( state === FULFILLED ? fulfilledHandlers : rejectedHandlers ), result );

	  				// dispatch onFulfilled and onRejected handlers asynchronously
	  				wait( dispatchHandlers );
	  			};
	  		};

	  		fulfil = makeResolver( FULFILLED );
	  		reject = makeResolver( REJECTED );

	  		try {
	  			callback( fulfil, reject );
	  		} catch ( err ) {
	  			reject( err );
	  		}

	  		promise = {
	  			// `then()` returns a Promise - 2.2.7
	  			then: function ( onFulfilled, onRejected ) {
	  				var promise2 = new _Promise( function ( fulfil, reject ) {

	  					var processResolutionHandler = function ( handler, handlers, forward ) {

	  						// 2.2.1.1
	  						if ( typeof handler === 'function' ) {
	  							handlers.push( function ( p1result ) {
	  								var x;

	  								try {
	  									x = handler( p1result );
	  									resolve( promise2, x, fulfil, reject );
	  								} catch ( err ) {
	  									reject( err );
	  								}
	  							});
	  						} else {
	  							// Forward the result of promise1 to promise2, if resolution handlers
	  							// are not given
	  							handlers.push( forward );
	  						}
	  					};

	  					// 2.2
	  					processResolutionHandler( onFulfilled, fulfilledHandlers, fulfil );
	  					processResolutionHandler( onRejected, rejectedHandlers, reject );

	  					if ( state !== PENDING ) {
	  						// If the promise has resolved already, dispatch the appropriate handlers asynchronously
	  						wait( dispatchHandlers );
	  					}

	  				});

	  				return promise2;
	  			}
	  		};

	  		promise[ 'catch' ] = function ( onRejected ) {
	  			return this.then( null, onRejected );
	  		};

	  		return promise;
	  	};

	  	_Promise.all = function ( promises ) {
	  		return new _Promise( function ( fulfil, reject ) {
	  			var result = [], pending, i, processPromise;

	  			if ( !promises.length ) {
	  				fulfil( result );
	  				return;
	  			}

	  			processPromise = function ( promise, i ) {
	  				if ( promise && typeof promise.then === 'function' ) {
	  					promise.then( function ( value ) {
	  						result[i] = value;
	  						--pending || fulfil( result );
	  					}, reject );
	  				}

	  				else {
	  					result[i] = promise;
	  					--pending || fulfil( result );
	  				}
	  			};

	  			pending = i = promises.length;
	  			while ( i-- ) {
	  				processPromise( promises[i], i );
	  			}
	  		});
	  	};

	  	_Promise.resolve = function ( value ) {
	  		return new _Promise( function ( fulfil ) {
	  			fulfil( value );
	  		});
	  	};

	  	_Promise.reject = function ( reason ) {
	  		return new _Promise( function ( fulfil, reject ) {
	  			reject( reason );
	  		});
	  	};
	  }

	  var Promise$1 = _Promise;

	  // TODO use MutationObservers or something to simulate setImmediate
	  function wait ( callback ) {
	  	setTimeout( callback, 0 );
	  }

	  function makeDispatcher ( handlers, result ) {
	  	return function () {
	  		var handler;

	  		while ( handler = handlers.shift() ) {
	  			handler( result );
	  		}
	  	};
	  }

	  function resolve ( promise, x, fulfil, reject ) {
	  	// Promise Resolution Procedure
	  	var then;

	  	// 2.3.1
	  	if ( x === promise ) {
	  		throw new TypeError( 'A promise\'s fulfillment handler cannot return the same promise' );
	  	}

	  	// 2.3.2
	  	if ( x instanceof _Promise ) {
	  		x.then( fulfil, reject );
	  	}

	  	// 2.3.3
	  	else if ( x && ( typeof x === 'object' || typeof x === 'function' ) ) {
	  		try {
	  			then = x.then; // 2.3.3.1
	  		} catch ( e ) {
	  			reject( e ); // 2.3.3.2
	  			return;
	  		}

	  		// 2.3.3.3
	  		if ( typeof then === 'function' ) {
	  			var called, resolvePromise, rejectPromise;

	  			resolvePromise = function ( y ) {
	  				if ( called ) {
	  					return;
	  				}
	  				called = true;
	  				resolve( promise, y, fulfil, reject );
	  			};

	  			rejectPromise = function ( r ) {
	  				if ( called ) {
	  					return;
	  				}
	  				called = true;
	  				reject( r );
	  			};

	  			try {
	  				then.call( x, resolvePromise, rejectPromise );
	  			} catch ( e ) {
	  				if ( !called ) { // 2.3.3.3.4.1
	  					reject( e ); // 2.3.3.3.4.2
	  					called = true;
	  					return;
	  				}
	  			}
	  		}

	  		else {
	  			fulfil( x );
	  		}
	  	}

	  	else {
	  		fulfil( x );
	  	}
	  }

	  var TransitionManager = function TransitionManager ( callback, parent ) {
	  	this.callback = callback;
	  	this.parent = parent;

	  	this.intros = [];
	  	this.outros = [];

	  	this.children = [];
	  	this.totalChildren = this.outroChildren = 0;

	  	this.detachQueue = [];
	  	this.outrosComplete = false;

	  	if ( parent ) {
	  		parent.addChild( this );
	  	}
	  };

	  TransitionManager.prototype.add = function add ( transition ) {
	  	var list = transition.isIntro ? this.intros : this.outros;
	  	list.push( transition );
	  };

	  TransitionManager.prototype.addChild = function addChild ( child ) {
	  	this.children.push( child );

	  	this.totalChildren += 1;
	  	this.outroChildren += 1;
	  };

	  TransitionManager.prototype.decrementOutros = function decrementOutros () {
	  	this.outroChildren -= 1;
	  	check( this );
	  };

	  TransitionManager.prototype.decrementTotal = function decrementTotal () {
	  	this.totalChildren -= 1;
	  	check( this );
	  };

	  TransitionManager.prototype.detachNodes = function detachNodes () {
	  	this.detachQueue.forEach( detach );
	  	this.children.forEach( _detachNodes );
	  };

	  TransitionManager.prototype.ready = function ready () {
	  	detachImmediate( this );
	  };

	  TransitionManager.prototype.remove = function remove ( transition ) {
	  	var list = transition.isIntro ? this.intros : this.outros;
	  	removeFromArray( list, transition );
	  	check( this );
	  };

	  TransitionManager.prototype.start = function start () {
	  	this.children.forEach( function ( c ) { return c.start(); } );
	  	this.intros.concat( this.outros ).forEach( function ( t ) { return t.start(); } );
	  	this.ready = true;
	  	check( this );
	  };

	  function detach ( element ) {
	  	element.detach();
	  }

	  function _detachNodes ( tm ) { // _ to avoid transpiler quirk
	  	tm.detachNodes();
	  }

	  function check ( tm ) {
	  	if ( !tm.ready || tm.outros.length || tm.outroChildren ) return;

	  	// If all outros are complete, and we haven't already done this,
	  	// we notify the parent if there is one, otherwise
	  	// start detaching nodes
	  	if ( !tm.outrosComplete ) {
	  		tm.outrosComplete = true;

	  		if ( tm.parent && !tm.parent.outrosComplete ) {
	  			tm.parent.decrementOutros( tm );
	  		} else {
	  			tm.detachNodes();
	  		}
	  	}

	  	// Once everything is done, we can notify parent transition
	  	// manager and call the callback
	  	if ( !tm.intros.length && !tm.totalChildren ) {
	  		if ( typeof tm.callback === 'function' ) {
	  			tm.callback();
	  		}

	  		if ( tm.parent && !tm.notifiedTotal ) {
	  			tm.notifiedTotal = true;
	  			tm.parent.decrementTotal();
	  		}
	  	}
	  }

	  // check through the detach queue to see if a node is up or downstream from a
	  // transition and if not, go ahead and detach it
	  function detachImmediate ( manager ) {
	  	var queue = manager.detachQueue;
	  	var outros = collectAllOutros( manager );

	  	var i = queue.length, j = 0, node, trans;
	  	start: while ( i-- ) {
	  		node = queue[i].node;
	  		j = outros.length;
	  		while ( j-- ) {
	  			trans = outros[j].element.node;
	  			// check to see if the node is, contains, or is contained by the transitioning node
	  			if ( trans === node || trans.contains( node ) || node.contains( trans ) ) continue start;
	  		}

	  		// no match, we can drop it
	  		queue[i].detach();
	  		queue.splice( i, 1 );
	  	}
	  }

	  function collectAllOutros ( manager, list ) {
	  	if ( !list ) {
	  		list = [];
	  		var parent = manager;
	  		while ( parent.parent ) parent = parent.parent;
	  		return collectAllOutros( parent, list );
	  	} else {
	  		var i = manager.children.length;
	  		while ( i-- ) {
	  			list = collectAllOutros( manager.children[i], list );
	  		}
	  		list = list.concat( manager.outros );
	  		return list;
	  	}
	  }

	  var changeHook = new Hook( 'change' );

	  var batch;

	  var runloop = {
	  	start: function ( instance, returnPromise ) {
	  		var promise, fulfilPromise;

	  		if ( returnPromise ) {
	  			promise = new Promise$1( function ( f ) { return ( fulfilPromise = f ); } );
	  		}

	  		batch = {
	  			previousBatch: batch,
	  			transitionManager: new TransitionManager( fulfilPromise, batch && batch.transitionManager ),
	  			fragments: [],
	  			tasks: [],
	  			immediateObservers: [],
	  			deferredObservers: [],
	  			ractives: [],
	  			instance: instance
	  		};

	  		return promise;
	  	},

	  	end: function () {
	  		flushChanges();

	  		if ( !batch.previousBatch ) batch.transitionManager.start();

	  		batch = batch.previousBatch;
	  	},

	  	addFragment: function ( fragment ) {
	  		addToArray( batch.fragments, fragment );
	  	},

	  	// TODO: come up with a better way to handle fragments that trigger their own update
	  	addFragmentToRoot: function ( fragment ) {
	  		if ( !batch ) return;

	  		var b = batch;
	  		while ( b.previousBatch ) {
	  			b = b.previousBatch;
	  		}

	  		addToArray( b.fragments, fragment );
	  	},

	  	addInstance: function ( instance ) {
	  		if ( batch ) addToArray( batch.ractives, instance );
	  	},

	  	addObserver: function ( observer, defer ) {
	  		addToArray( defer ? batch.deferredObservers : batch.immediateObservers, observer );
	  	},

	  	registerTransition: function ( transition ) {
	  		transition._manager = batch.transitionManager;
	  		batch.transitionManager.add( transition );
	  	},

	  	// synchronise node detachments with transition ends
	  	detachWhenReady: function ( thing ) {
	  		batch.transitionManager.detachQueue.push( thing );
	  	},

	  	scheduleTask: function ( task, postRender ) {
	  		var _batch;

	  		if ( !batch ) {
	  			task();
	  		} else {
	  			_batch = batch;
	  			while ( postRender && _batch.previousBatch ) {
	  				// this can't happen until the DOM has been fully updated
	  				// otherwise in some situations (with components inside elements)
	  				// transitions and decorators will initialise prematurely
	  				_batch = _batch.previousBatch;
	  			}

	  			_batch.tasks.push( task );
	  		}
	  	}
	  };

	  function dispatch ( observer ) {
	  	observer.dispatch();
	  }

	  function flushChanges () {
	  	var which = batch.immediateObservers;
	  	batch.immediateObservers = [];
	  	which.forEach( dispatch );

	  	// Now that changes have been fully propagated, we can update the DOM
	  	// and complete other tasks
	  	var i = batch.fragments.length;
	  	var fragment;

	  	which = batch.fragments;
	  	batch.fragments = [];
	  	var ractives = batch.ractives;
	  	batch.ractives = [];

	  	while ( i-- ) {
	  		fragment = which[i];

	  		// TODO deprecate this. It's annoying and serves no useful function
	  		var ractive = fragment.ractive;
	  		changeHook.fire( ractive, ractive.viewmodel.changes );
	  		ractive.viewmodel.changes = {};
	  		removeFromArray( ractives, ractive );

	  		fragment.update();
	  	}

	  	i = ractives.length;
	  	while ( i-- ) {
	  		var ractive$1 = ractives[i];
	  		changeHook.fire( ractive$1, ractive$1.viewmodel.changes );
	  		ractive$1.viewmodel.changes = {};
	  	}

	  	batch.transitionManager.ready();

	  	which = batch.deferredObservers;
	  	batch.deferredObservers = [];
	  	which.forEach( dispatch );

	  	var tasks = batch.tasks;
	  	batch.tasks = [];

	  	for ( i = 0; i < tasks.length; i += 1 ) {
	  		tasks[i]();
	  	}

	  	// If updating the view caused some model blowback - e.g. a triple
	  	// containing <option> elements caused the binding on the <select>
	  	// to update - then we start over
	  	if ( batch.fragments.length || batch.immediateObservers.length || batch.deferredObservers.length || batch.ractives.length ) return flushChanges();
	  }

	  var refPattern = /\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g;
	  var splitPattern = /([^\\](?:\\\\)*)\./;
	  var escapeKeyPattern = /\\|\./g;
	  var unescapeKeyPattern = /((?:\\)+)\1|\\(\.)/g;

	  function escapeKey ( key ) {
	  	if ( typeof key === 'string' ) {
	  		return key.replace( escapeKeyPattern, '\\$&' );
	  	}

	  	return key;
	  }

	  function normalise ( ref ) {
	  	return ref ? ref.replace( refPattern, '.$1' ) : '';
	  }

	  function splitKeypathI ( keypath ) {
	  	var result = [],
	  		match;

	  	keypath = normalise( keypath );

	  	while ( match = splitPattern.exec( keypath ) ) {
	  		var index = match.index + match[1].length;
	  		result.push( keypath.substr( 0, index ) );
	  		keypath = keypath.substr( index + 1 );
	  	}

	  	result.push(keypath);

	  	return result;
	  }

	  function unescapeKey ( key ) {
	  	if ( typeof key === 'string' ) {
	  		return key.replace( unescapeKeyPattern, '$1$2' );
	  	}

	  	return key;
	  }

	  function bind ( fn, context ) {
	  	if ( !/this/.test( fn.toString() ) ) return fn;

	  	var bound = fn.bind( context );
	  	for ( var prop in fn ) bound[ prop ] = fn[ prop ];

	  	return bound;
	  }

	  function set ( ractive, pairs ) {
	  	var promise = runloop.start( ractive, true );

	  	var i = pairs.length;
	  	while ( i-- ) {
	  		var ref = pairs[i], model = ref[0], value = ref[1];
	  		if ( typeof value === 'function' ) value = bind( value, ractive );
	  		model.set( value );
	  	}

	  	runloop.end();

	  	return promise;
	  }

	  var star = /\*/;
	  function gather ( ractive, keypath, base ) {
	  	if ( base === void 0 ) base = ractive.viewmodel;

	  	if ( star.test( keypath ) ) {
	  		return base.findMatches( splitKeypathI( keypath ) );
	  	} else {
	  		return [ base.joinAll( splitKeypathI( keypath ) ) ];
	  	}
	  }

	  function build ( ractive, keypath, value ) {
	  	var sets = [];

	  	// set multiple keypaths in one go
	  	if ( isObject( keypath ) ) {
	  		var loop = function ( k ) {
	  			if ( keypath.hasOwnProperty( k ) ) {
	  				sets.push.apply( sets, gather( ractive, k ).map( function ( m ) { return [ m, keypath[k] ]; } ) );
	  			}
	  		};

	  		for ( var k in keypath ) loop( k );

	  	}
	  	// set a single keypath
	  	else {
	  		sets.push.apply( sets, gather( ractive, keypath ).map( function ( m ) { return [ m, value ]; } ) );
	  	}

	  	return sets;
	  }

	  var errorMessage = 'Cannot add to a non-numeric value';

	  function add ( ractive, keypath, d ) {
	  	if ( typeof keypath !== 'string' || !isNumeric( d ) ) {
	  		throw new Error( 'Bad arguments' );
	  	}

	  	var sets = build( ractive, keypath, d );

	  	return set( ractive, sets.map( function ( pair ) {
	  		var model = pair[0], add = pair[1], value = model.get();
	  		if ( !isNumeric( add ) || !isNumeric( value ) ) throw new Error( errorMessage );
	  		return [ model, value + add ];
	  	}));
	  }

	  function Ractive$add ( keypath, d ) {
	  	return add( this, keypath, ( d === undefined ? 1 : +d ) );
	  }

	  var noAnimation = Promise$1.resolve();
	  defineProperty( noAnimation, 'stop', { value: noop });

	  var linear = easing.linear;

	  function getOptions ( options, instance ) {
	  	options = options || {};

	  	var easing;
	  	if ( options.easing ) {
	  		easing = typeof options.easing === 'function' ?
	  			options.easing :
	  			instance.easing[ options.easing ];
	  	}

	  	return {
	  		easing: easing || linear,
	  		duration: 'duration' in options ? options.duration : 400,
	  		complete: options.complete || noop,
	  		step: options.step || noop
	  	};
	  }

	  function protoAnimate ( ractive, model, to, options ) {
	  	options = getOptions( options, ractive );
	  	var from = model.get();

	  	// don't bother animating values that stay the same
	  	if ( isEqual( from, to ) ) {
	  		options.complete( options.to );
	  		return noAnimation; // TODO should this have .then and .catch methods?
	  	}

	  	var interpolator = interpolate( from, to, ractive, options.interpolator );

	  	// if we can't interpolate the value, set it immediately
	  	if ( !interpolator ) {
	  		runloop.start();
	  		model.set( to );
	  		runloop.end();

	  		return noAnimation;
	  	}

	  	return model.animate( from, to, options, interpolator );
	  }

	  function Ractive$animate ( keypath, to, options ) {
	  	if ( typeof keypath === 'object' ) {
	  		var keys = Object.keys( keypath );

	  		throw new Error( ("ractive.animate(...) no longer supports objects. Instead of ractive.animate({\n  " + (keys.map( function ( key ) { return ("'" + key + "': " + (keypath[ key ])); } ).join( '\n  ' )) + "\n}, {...}), do\n\n" + (keys.map( function ( key ) { return ("ractive.animate('" + key + "', " + (keypath[ key ]) + ", {...});"); } ).join( '\n' )) + "\n") );
	  	}


	  	return protoAnimate( this, this.viewmodel.joinAll( splitKeypathI( keypath ) ), to, options );
	  }

	  var detachHook = new Hook( 'detach' );

	  function Ractive$detach () {
	  	if ( this.isDetached ) {
	  		return this.el;
	  	}

	  	if ( this.el ) {
	  		removeFromArray( this.el.__ractive_instances__, this );
	  	}

	  	this.el = this.fragment.detach();
	  	this.isDetached = true;

	  	detachHook.fire( this );
	  	return this.el;
	  }

	  function Ractive$find ( selector ) {
	  	if ( !this.el ) throw new Error( ("Cannot call ractive.find('" + selector + "') unless instance is rendered to the DOM") );

	  	return this.fragment.find( selector );
	  }

	  function sortByDocumentPosition ( node, otherNode ) {
	  	if ( node.compareDocumentPosition ) {
	  		var bitmask = node.compareDocumentPosition( otherNode );
	  		return ( bitmask & 2 ) ? 1 : -1;
	  	}

	  	// In old IE, we can piggy back on the mechanism for
	  	// comparing component positions
	  	return sortByItemPosition( node, otherNode );
	  }

	  function sortByItemPosition ( a, b ) {
	  	var ancestryA = getAncestry( a.component || a._ractive.proxy );
	  	var ancestryB = getAncestry( b.component || b._ractive.proxy );

	  	var oldestA = lastItem( ancestryA );
	  	var oldestB = lastItem( ancestryB );
	  	var mutualAncestor;

	  	// remove items from the end of both ancestries as long as they are identical
	  	// - the final one removed is the closest mutual ancestor
	  	while ( oldestA && ( oldestA === oldestB ) ) {
	  		ancestryA.pop();
	  		ancestryB.pop();

	  		mutualAncestor = oldestA;

	  		oldestA = lastItem( ancestryA );
	  		oldestB = lastItem( ancestryB );
	  	}

	  	// now that we have the mutual ancestor, we can find which is earliest
	  	oldestA = oldestA.component || oldestA;
	  	oldestB = oldestB.component || oldestB;

	  	var fragmentA = oldestA.parentFragment;
	  	var fragmentB = oldestB.parentFragment;

	  	// if both items share a parent fragment, our job is easy
	  	if ( fragmentA === fragmentB ) {
	  		var indexA = fragmentA.items.indexOf( oldestA );
	  		var indexB = fragmentB.items.indexOf( oldestB );

	  		// if it's the same index, it means one contains the other,
	  		// so we see which has the longest ancestry
	  		return ( indexA - indexB ) || ancestryA.length - ancestryB.length;
	  	}

	  	// if mutual ancestor is a section, we first test to see which section
	  	// fragment comes first
	  	var fragments = mutualAncestor.iterations;
	  	if ( fragments ) {
	  		var indexA$1 = fragments.indexOf( fragmentA );
	  		var indexB$1 = fragments.indexOf( fragmentB );

	  		return ( indexA$1 - indexB$1 ) || ancestryA.length - ancestryB.length;
	  	}

	  	throw new Error( 'An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/ractivejs/ractive/issues - thanks!' );
	  }

	  function getParent ( item ) {
	  	var parentFragment = item.parentFragment;

	  	if ( parentFragment ) return parentFragment.owner;

	  	if ( item.component && ( parentFragment = item.component.parentFragment ) ) {
	  		return parentFragment.owner;
	  	}
	  }

	  function getAncestry ( item ) {
	  	var ancestry = [ item ];
	  	var ancestor = getParent( item );

	  	while ( ancestor ) {
	  		ancestry.push( ancestor );
	  		ancestor = getParent( ancestor );
	  	}

	  	return ancestry;
	  }


	  var Query = function Query ( ractive, selector, live, isComponentQuery ) {
	  	this.ractive = ractive;
	  	this.selector = selector;
	  	this.live = live;
	  	this.isComponentQuery = isComponentQuery;

	  	this.result = [];

	  	this.dirty = true;
	  };

	  Query.prototype.add = function add ( item ) {
	  	this.result.push( item );
	  	this.makeDirty();
	  };

	  Query.prototype.cancel = function cancel () {
	  	var liveQueries = this._root[ this.isComponentQuery ? 'liveComponentQueries' : 'liveQueries' ];
	  	var selector = this.selector;

	  	var index = liveQueries.indexOf( selector );

	  	if ( index !== -1 ) {
	  		liveQueries.splice( index, 1 );
	  		liveQueries[ selector ] = null;
	  	}
	  };

	  Query.prototype.init = function init () {
	  	this.dirty = false;
	  };

	  Query.prototype.makeDirty = function makeDirty () {
	  	var this$1 = this;

	  		if ( !this.dirty ) {
	  		this.dirty = true;

	  		// Once the DOM has been updated, ensure the query
	  		// is correctly ordered
	  		runloop.scheduleTask( function () { return this$1.update(); } );
	  	}
	  };

	  Query.prototype.remove = function remove ( nodeOrComponent ) {
	  	var index = this.result.indexOf( this.isComponentQuery ? nodeOrComponent.instance : nodeOrComponent );
	  	if ( index !== -1 ) this.result.splice( index, 1 );
	  };

	  Query.prototype.update = function update () {
	  	this.result.sort( this.isComponentQuery ? sortByItemPosition : sortByDocumentPosition );
	  	this.dirty = false;
	  };

	  Query.prototype.test = function test ( item ) {
	  	return this.isComponentQuery ?
	  		( !this.selector || item.name === this.selector ) :
	  		( item ? matches( item, this.selector ) : null );
	  };

	  function Ractive$findAll ( selector, options ) {
	  	if ( !this.el ) throw new Error( ("Cannot call ractive.findAll('" + selector + "', ...) unless instance is rendered to the DOM") );

	  	options = options || {};
	  	var liveQueries = this._liveQueries;

	  	// Shortcut: if we're maintaining a live query with this
	  	// selector, we don't need to traverse the parallel DOM
	  	var query = liveQueries[ selector ];
	  	if ( query ) {
	  		// Either return the exact same query, or (if not live) a snapshot
	  		return ( options && options.live ) ? query : query.slice();
	  	}

	  	query = new Query( this, selector, !!options.live, false );

	  	// Add this to the list of live queries Ractive needs to maintain,
	  	// if applicable
	  	if ( query.live ) {
	  		liveQueries.push( selector );
	  		liveQueries[ '_' + selector ] = query;
	  	}

	  	this.fragment.findAll( selector, query );

	  	query.init();
	  	return query.result;
	  }

	  function Ractive$findAllComponents ( selector, options ) {
	  	options = options || {};
	  	var liveQueries = this._liveComponentQueries;

	  	// Shortcut: if we're maintaining a live query with this
	  	// selector, we don't need to traverse the parallel DOM
	  	var query = liveQueries[ selector ];
	  	if ( query ) {
	  		// Either return the exact same query, or (if not live) a snapshot
	  		return ( options && options.live ) ? query : query.slice();
	  	}

	  	query = new Query( this, selector, !!options.live, true );

	  	// Add this to the list of live queries Ractive needs to maintain,
	  	// if applicable
	  	if ( query.live ) {
	  		liveQueries.push( selector );
	  		liveQueries[ '_' + selector ] = query;
	  	}

	  	this.fragment.findAllComponents( selector, query );

	  	query.init();
	  	return query.result;
	  }

	  function Ractive$findComponent ( selector ) {
	  	return this.fragment.findComponent( selector );
	  }

	  function Ractive$findContainer ( selector ) {
	  	if ( this.container ) {
	  		if ( this.container.component && this.container.component.name === selector ) {
	  			return this.container;
	  		} else {
	  			return this.container.findContainer( selector );
	  		}
	  	}

	  	return null;
	  }

	  function Ractive$findParent ( selector ) {

	  	if ( this.parent ) {
	  		if ( this.parent.component && this.parent.component.name === selector ) {
	  			return this.parent;
	  		} else {
	  			return this.parent.findParent ( selector );
	  		}
	  	}

	  	return null;
	  }

	  function enqueue ( ractive, event ) {
	  	if ( ractive.event ) {
	  		ractive._eventQueue.push( ractive.event );
	  	}

	  	ractive.event = event;
	  }

	  function dequeue ( ractive ) {
	  	if ( ractive._eventQueue.length ) {
	  		ractive.event = ractive._eventQueue.pop();
	  	} else {
	  		ractive.event = null;
	  	}
	  }

	  var starMaps = {};

	  // This function takes a keypath such as 'foo.bar.baz', and returns
	  // all the variants of that keypath that include a wildcard in place
	  // of a key, such as 'foo.bar.*', 'foo.*.baz', 'foo.*.*' and so on.
	  // These are then checked against the dependants map (ractive.viewmodel.depsMap)
	  // to see if any pattern observers are downstream of one or more of
	  // these wildcard keypaths (e.g. 'foo.bar.*.status')
	  function getPotentialWildcardMatches ( keypath ) {
	  	var keys, starMap, mapper, i, result, wildcardKeypath;

	  	keys = splitKeypathI( keypath );
	  	if( !( starMap = starMaps[ keys.length ]) ) {
	  		starMap = getStarMap( keys.length );
	  	}

	  	result = [];

	  	mapper = function ( star, i ) {
	  		return star ? '*' : keys[i];
	  	};

	  	i = starMap.length;
	  	while ( i-- ) {
	  		wildcardKeypath = starMap[i].map( mapper ).join( '.' );

	  		if ( !result.hasOwnProperty( wildcardKeypath ) ) {
	  			result.push( wildcardKeypath );
	  			result[ wildcardKeypath ] = true;
	  		}
	  	}

	  	return result;
	  }

	  // This function returns all the possible true/false combinations for
	  // a given number - e.g. for two, the possible combinations are
	  // [ true, true ], [ true, false ], [ false, true ], [ false, false ].
	  // It does so by getting all the binary values between 0 and e.g. 11
	  function getStarMap ( num ) {
	  	var ones = '', max, binary, starMap, mapper, i, j, l, map;

	  	if ( !starMaps[ num ] ) {
	  		starMap = [];

	  		while ( ones.length < num ) {
	  			ones += 1;
	  		}

	  		max = parseInt( ones, 2 );

	  		mapper = function ( digit ) {
	  			return digit === '1';
	  		};

	  		for ( i = 0; i <= max; i += 1 ) {
	  			binary = i.toString( 2 );
	  			while ( binary.length < num ) {
	  				binary = '0' + binary;
	  			}

	  			map = [];
	  			l = binary.length;
	  			for (j = 0; j < l; j++) {
	  				map.push( mapper( binary[j] ) );
	  			}
	  			starMap[i] = map;
	  		}

	  		starMaps[ num ] = starMap;
	  	}

	  	return starMaps[ num ];
	  }

	  var wildcardCache = {};

	  function fireEvent ( ractive, eventName, options ) {
	  	if ( options === void 0 ) options = {};

	  	if ( !eventName ) { return; }

	  	if ( !options.event ) {
	  		options.event = {
	  			name: eventName,
	  			// until event not included as argument default
	  			_noArg: true
	  		};
	  	} else {
	  		options.event.name = eventName;
	  	}

	  	var eventNames = getWildcardNames( eventName );

	  	return fireEventAs( ractive, eventNames, options.event, options.args, true );
	  }

	  function getWildcardNames ( eventName ) {
	  	if ( wildcardCache.hasOwnProperty( eventName ) ) {
	  		return wildcardCache[ eventName ];
	  	} else {
	  		return wildcardCache[ eventName ] = getPotentialWildcardMatches( eventName );
	  	}
	  }

	  function fireEventAs  ( ractive, eventNames, event, args, initialFire ) {

	  	if ( initialFire === void 0 ) initialFire = false;

	  	var subscribers, i, bubble = true;

	  	enqueue( ractive, event );

	  	for ( i = eventNames.length; i >= 0; i-- ) {
	  		subscribers = ractive._subs[ eventNames[ i ] ];

	  		if ( subscribers ) {
	  			bubble = notifySubscribers( ractive, subscribers, event, args ) && bubble;
	  		}
	  	}

	  	dequeue( ractive );

	  	if ( ractive.parent && bubble ) {

	  		if ( initialFire && ractive.component ) {
	  			var fullName = ractive.component.name + '.' + eventNames[ eventNames.length-1 ];
	  			eventNames = getWildcardNames( fullName );

	  			if( event && !event.component ) {
	  				event.component = ractive;
	  			}
	  		}

	  		fireEventAs( ractive.parent, eventNames, event, args );
	  	}

	  	return bubble;
	  }

	  function notifySubscribers ( ractive, subscribers, event, args ) {
	  	var originalEvent = null, stopEvent = false;

	  	if ( event && !event._noArg ) {
	  		args = [ event ].concat( args );
	  	}

	  	// subscribers can be modified inflight, e.g. "once" functionality
	  	// so we need to copy to make sure everyone gets called
	  	subscribers = subscribers.slice();

	  	for ( var i = 0, len = subscribers.length; i < len; i += 1 ) {
	  		if ( subscribers[ i ].apply( ractive, args ) === false ) {
	  			stopEvent = true;
	  		}
	  	}

	  	if ( event && !event._noArg && stopEvent && ( originalEvent = event.original ) ) {
	  		originalEvent.preventDefault && originalEvent.preventDefault();
	  		originalEvent.stopPropagation && originalEvent.stopPropagation();
	  	}

	  	return !stopEvent;
	  }

	  function Ractive$fire ( eventName ) {
	  	var args = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  	return fireEvent( this, eventName, { args: args });
	  }

	  function badReference ( key ) {
	  	throw new Error( ("An index or key reference (" + key + ") cannot have child properties") );
	  }

	  function resolveAmbiguousReference ( fragment, ref ) {
	  	var localViewmodel = fragment.findContext().root;
	  	var keys = splitKeypathI( ref );
	  	var key = keys[0];

	  	var hasContextChain;
	  	var crossedComponentBoundary;
	  	var aliases;

	  	while ( fragment ) {
	  		// repeated fragments
	  		if ( fragment.isIteration ) {
	  			if ( key === fragment.parent.keyRef ) {
	  				if ( keys.length > 1 ) badReference( key );
	  				return fragment.context.getKeyModel( fragment.key );
	  			}

	  			if ( key === fragment.parent.indexRef ) {
	  				if ( keys.length > 1 ) badReference( key );
	  				return fragment.context.getKeyModel( fragment.index );
	  			}
	  		}

	  		// alias node or iteration
	  		if ( ( ( aliases = fragment.owner.aliases ) || ( aliases = fragment.aliases ) ) && aliases.hasOwnProperty( key ) ) {
	  			var model = aliases[ key ];

	  			if ( keys.length === 1 ) return model;
	  			else if ( typeof model.joinAll === 'function' ) {
	  				return model.joinAll( keys.slice( 1 ) );
	  			}
	  		}

	  		if ( fragment.context ) {
	  			// TODO better encapsulate the component check
	  			if ( !fragment.isRoot || fragment.ractive.component ) hasContextChain = true;

	  			if ( fragment.context.has( key ) ) {
	  				if ( crossedComponentBoundary ) {
	  					return localViewmodel.createLink( key, fragment.context.joinKey( keys.shift() ), key ).joinAll( keys );
	  				}

	  				return fragment.context.joinAll( keys );
	  			}
	  		}

	  		if ( fragment.componentParent && !fragment.ractive.isolated ) {
	  			// ascend through component boundary
	  			fragment = fragment.componentParent;
	  			crossedComponentBoundary = true;
	  		} else {
	  			fragment = fragment.parent;
	  		}
	  	}

	  	if ( !hasContextChain ) {
	  		return localViewmodel.joinAll( keys );
	  	}
	  }

	  var stack = [];
	  var captureGroup;

	  function startCapturing () {
	  	stack.push( captureGroup = [] );
	  }

	  function stopCapturing () {
	  	var dependencies = stack.pop();
	  	captureGroup = stack[ stack.length - 1 ];
	  	return dependencies;
	  }

	  function capture ( model ) {
	  	if ( captureGroup ) {
	  		captureGroup.push( model );
	  	}
	  }

	  var KeyModel = function KeyModel ( key, parent ) {
	  	this.value = key;
	  	this.isReadonly = this.isKey = true;
	  	this.deps = [];
	  	this.links = [];
	  	this.parent = parent;
	  };

	  KeyModel.prototype.get = function get ( shouldCapture ) {
	  	if ( shouldCapture ) capture( this );
	  	return unescapeKey( this.value );
	  };

	  KeyModel.prototype.getKeypath = function getKeypath () {
	  	return unescapeKey( this.value );
	  };

	  KeyModel.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		var i = this.deps.length;
	  	while ( i-- ) this$1.deps[i].rebinding( next, previous, false );

	  	i = this.links.length;
	  	while ( i-- ) this$1.links[i].rebinding( next, previous, false );
	  };

	  KeyModel.prototype.register = function register ( dependant ) {
	  	this.deps.push( dependant );
	  };

	  KeyModel.prototype.registerLink = function registerLink ( link ) {
	  	addToArray( this.links, link );
	  };

	  KeyModel.prototype.unregister = function unregister ( dependant ) {
	  	removeFromArray( this.deps, dependant );
	  };

	  KeyModel.prototype.unregisterLink = function unregisterLink ( link ) {
	  	removeFromArray( this.links, link );
	  };

	  function bind$1               ( x ) { x.bind(); }
	  function cancel             ( x ) { x.cancel(); }
	  function handleChange       ( x ) { x.handleChange(); }
	  function mark               ( x ) { x.mark(); }
	  function marked             ( x ) { x.marked(); }
	  function render             ( x ) { x.render(); }
	  function teardown           ( x ) { x.teardown(); }
	  function unbind             ( x ) { x.unbind(); }
	  function unrender           ( x ) { x.unrender(); }
	  function unrenderAndDestroy ( x ) { x.unrender( true ); }
	  function update             ( x ) { x.update(); }
	  function toString$1           ( x ) { return x.toString(); }
	  function toEscapedString    ( x ) { return x.toString( true ); }

	  var KeypathModel = function KeypathModel ( parent, ractive ) {
	  	this.parent = parent;
	  	this.ractive = ractive;
	  	this.value = ractive ? parent.getKeypath( ractive ) : parent.getKeypath();
	  	this.deps = [];
	  	this.children = {};
	  	this.isReadonly = this.isKeypath = true;
	  };

	  KeypathModel.prototype.get = function get ( shouldCapture ) {
	  	if ( shouldCapture ) capture( this );
	  	return this.value;
	  };

	  KeypathModel.prototype.getChild = function getChild ( ractive ) {
	  	if ( !( ractive._guid in this.children ) ) {
	  		var model = new KeypathModel( this.parent, ractive );
	  		this.children[ ractive._guid ] = model;
	  		model.owner = this;
	  	}
	  	return this.children[ ractive._guid ];
	  };

	  KeypathModel.prototype.getKeypath = function getKeypath () {
	  	return this.value;
	  };

	  KeypathModel.prototype.handleChange = function handleChange$1 () {
	  	var this$1 = this;

	  		var keys = Object.keys( this.children );
	  	var i = keys.length;
	  	while ( i-- ) {
	  		this$1.children[ keys[i] ].handleChange();
	  	}

	  	this.deps.forEach( handleChange );
	  };

	  KeypathModel.prototype.rebindChildren = function rebindChildren ( next ) {
	  	var this$1 = this;

	  		var keys = Object.keys( this.children );
	  	var i = keys.length;
	  	while ( i-- ) {
	  		var child = this$1.children[keys[i]];
	  		child.value = next.getKeypath( child.ractive );
	  		child.handleChange();
	  	}
	  };

	  KeypathModel.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		var model = next ? next.getKeypathModel( this.ractive ) : undefined;

	  	var keys = Object.keys( this.children );
	  	var i = keys.length;
	  	while ( i-- ) {
	  		this$1.children[ keys[i] ].rebinding( next, previous, false );
	  	}

	  	i = this.deps.length;
	  	while ( i-- ) {
	  		this$1.deps[i].rebinding( model, this$1, false );
	  	}
	  };

	  KeypathModel.prototype.register = function register ( dep ) {
	  	this.deps.push( dep );
	  };

	  KeypathModel.prototype.removeChild = function removeChild( model ) {
	  	if ( model.ractive ) delete this.children[ model.ractive._guid ];
	  };

	  KeypathModel.prototype.teardown = function teardown () {
	  	var this$1 = this;

	  		if ( this.owner ) this.owner.removeChild( this );

	  	var keys = Object.keys( this.children );
	  	var i = keys.length;
	  	while ( i-- ) {
	  		this$1.children[ keys[i] ].teardown();
	  	}
	  };

	  KeypathModel.prototype.unregister = function unregister ( dep ) {
	  	removeFromArray( this.deps, dep );
	  	if ( !this.deps.length ) this.teardown();
	  };

	  var hasProp = Object.prototype.hasOwnProperty;

	  var shuffleTasks = { early: [], mark: [] };
	  var registerQueue = { early: [], mark: [] };

	  var ModelBase = function ModelBase ( parent ) {
	  	this.deps = [];

	  	this.children = [];
	  	this.childByKey = {};
	  	this.links = [];

	  	this.keyModels = {};

	  	this.unresolved = [];
	  	this.unresolvedByKey = {};

	  	this.bindings = [];
	  	this.patternObservers = [];

	  	if ( parent ) {
	  		this.parent = parent;
	  		this.root = parent.root;
	  	}
	  };

	  ModelBase.prototype.addUnresolved = function addUnresolved ( key, resolver ) {
	  	if ( !this.unresolvedByKey[ key ] ) {
	  		this.unresolved.push( key );
	  		this.unresolvedByKey[ key ] = [];
	  	}

	  	this.unresolvedByKey[ key ].push( resolver );
	  };

	  ModelBase.prototype.addShuffleTask = function addShuffleTask ( task, stage ) { if ( stage === void 0 ) stage = 'early';

	  	shuffleTasks[stage].push( task ); };
	  ModelBase.prototype.addShuffleRegister = function addShuffleRegister ( item, stage ) { if ( stage === void 0 ) stage = 'early';

	  	registerQueue[stage].push({ model: this, item: item }); };

	  ModelBase.prototype.clearUnresolveds = function clearUnresolveds ( specificKey ) {
	  	var this$1 = this;

	  		var i = this.unresolved.length;

	  	while ( i-- ) {
	  		var key = this$1.unresolved[i];

	  		if ( specificKey && key !== specificKey ) continue;

	  		var resolvers = this$1.unresolvedByKey[ key ];
	  		var hasKey = this$1.has( key );

	  		var j = resolvers.length;
	  		while ( j-- ) {
	  			if ( hasKey ) resolvers[j].attemptResolution();
	  			if ( resolvers[j].resolved ) resolvers.splice( j, 1 );
	  		}

	  		if ( !resolvers.length ) {
	  			this$1.unresolved.splice( i, 1 );
	  			this$1.unresolvedByKey[ key ] = null;
	  		}
	  	}
	  };

	  ModelBase.prototype.findMatches = function findMatches ( keys ) {
	  	var len = keys.length;

	  	var existingMatches = [ this ];
	  	var matches;
	  	var i;

	  	var loop = function (  ) {
	  		var key = keys[i];

	  		if ( key === '*' ) {
	  			matches = [];
	  			existingMatches.forEach( function ( model ) {
	  				matches.push.apply( matches, model.getValueChildren( model.get() ) );
	  			});
	  		} else {
	  			matches = existingMatches.map( function ( model ) { return model.joinKey( key ); } );
	  		}

	  		existingMatches = matches;
	  	};

	  		for ( i = 0; i < len; i += 1 ) loop(  );

	  	return matches;
	  };

	  ModelBase.prototype.getKeyModel = function getKeyModel ( key, skip ) {
	  	if ( key !== undefined && !skip ) return this.parent.getKeyModel( key, true );

	  	if ( !( key in this.keyModels ) ) this.keyModels[ key ] = new KeyModel( escapeKey( key ), this );

	  	return this.keyModels[ key ];
	  };

	  ModelBase.prototype.getKeypath = function getKeypath ( ractive ) {
	  	if ( ractive !== this.ractive && this._link ) return this._link.target.getKeypath( ractive );

	  	if ( !this.keypath ) {
	  		this.keypath = this.parent.isRoot ? this.key : ("" + (this.parent.getKeypath( ractive )) + "." + (escapeKey( this.key )));
	  	}

	  	return this.keypath;
	  };

	  ModelBase.prototype.getValueChildren = function getValueChildren ( value ) {
	  	var this$1 = this;

	  		var children;
	  	if ( isArray( value ) ) {
	  		children = [];
	  		if ( 'length' in this && this.length !== value.length ) {
	  			children.push( this.joinKey( 'length' ) );
	  		}
	  		value.forEach( function ( m, i ) {
	  			children.push( this$1.joinKey( i ) );
	  		});
	  	}

	  	else if ( isObject( value ) || typeof value === 'function' ) {
	  		children = Object.keys( value ).map( function ( key ) { return this$1.joinKey( key ); } );
	  	}

	  	else if ( value != null ) {
	  		return [];
	  	}

	  	return children;
	  };

	  ModelBase.prototype.getVirtual = function getVirtual ( shouldCapture ) {
	  	var this$1 = this;

	  		var value = this.get( shouldCapture, { virtual: false } );
	  	if ( isObject( value ) ) {
	  		var result = isArray( value ) ? [] : {};

	  		var keys = Object.keys( value );
	  		var i = keys.length;
	  		while ( i-- ) {
	  			var child = this$1.childByKey[ keys[i] ];
	  			if ( !child ) result[ keys[i] ] = value[ keys[i] ];
	  			else if ( child._link ) result[ keys[i] ] = child._link.getVirtual();
	  			else result[ keys[i] ] = child.getVirtual();
	  		}

	  		i = this.children.length;
	  		while ( i-- ) {
	  			var child$1 = this$1.children[i];
	  			if ( !( child$1.key in result ) && child$1._link ) {
	  				result[ child$1.key ] = child$1._link.getVirtual();
	  			}
	  		}

	  		return result;
	  	} else return value;
	  };

	  ModelBase.prototype.has = function has ( key ) {
	  	if ( this._link ) return this._link.has( key );

	  	var value = this.get();
	  	if ( !value ) return false;

	  	key = unescapeKey( key );
	  	if ( hasProp.call( value, key ) ) return true;

	  	// We climb up the constructor chain to find if one of them contains the key
	  	var constructor = value.constructor;
	  	while ( constructor !== Function && constructor !== Array && constructor !== Object ) {
	  		if ( hasProp.call( constructor.prototype, key ) ) return true;
	  		constructor = constructor.constructor;
	  	}

	  	return false;
	  };

	  ModelBase.prototype.joinAll = function joinAll ( keys, opts ) {
	  	var model = this;
	  	for ( var i = 0; i < keys.length; i += 1 ) {
	  		if ( opts && opts.lastLink === false && i + 1 === keys.length && model.childByKey[keys[i]] && model.childByKey[keys[i]]._link ) return model.childByKey[keys[i]];
	  		model = model.joinKey( keys[i], opts );
	  	}

	  	return model;
	  };

	  ModelBase.prototype.notifyUpstream = function notifyUpstream () {
	  	var parent = this.parent, prev = this;
	  	while ( parent ) {
	  		if ( parent.patternObservers.length ) parent.patternObservers.forEach( function ( o ) { return o.notify( prev.key ); } );
	  		parent.deps.forEach( handleChange );
	  		prev = parent;
	  		parent = parent.parent;
	  	}
	  };

	  ModelBase.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  	// tell the deps to move to the new target
	  	var this$1 = this;

	  		var i = this.deps.length;
	  	while ( i-- ) {
	  		if ( this$1.deps[i].rebinding ) this$1.deps[i].rebinding( next, previous, safe );
	  	}

	  	i = this.links.length;
	  	while ( i-- ) {
	  		var link = this$1.links[i];
	  		// only relink the root of the link tree
	  		if ( link.owner._link ) link.relinking( next, true, safe );
	  	}

	  	i = this.children.length;
	  	while ( i-- ) {
	  		var child = this$1.children[i];
	  		child.rebinding( next ? next.joinKey( child.key ) : undefined, child, safe );
	  	}

	  	i = this.unresolved.length;
	  	while ( i-- ) {
	  		var unresolved = this$1.unresolvedByKey[ this$1.unresolved[i] ];
	  		var c = unresolved.length;
	  		while ( c-- ) {
	  			unresolved[c].rebinding( next, previous );
	  		}
	  	}

	  	if ( this.keypathModel ) this.keypathModel.rebinding( next, previous, false );

	  	i = this.bindings.length;
	  	while ( i-- ) {
	  		this$1.bindings[i].rebinding( next, previous, safe );
	  	}
	  };

	  ModelBase.prototype.register = function register ( dep ) {
	  	this.deps.push( dep );
	  };

	  ModelBase.prototype.registerChange = function registerChange ( key, value ) {
	  	if ( !this.isRoot ) {
	  		this.root.registerChange( key, value );
	  	} else {
	  		this.changes[ key ] = value;
	  		runloop.addInstance( this.root.ractive );
	  	}
	  };

	  ModelBase.prototype.registerLink = function registerLink ( link ) {
	  	addToArray( this.links, link );
	  };

	  ModelBase.prototype.registerPatternObserver = function registerPatternObserver ( observer ) {
	  	this.patternObservers.push( observer );
	  	this.register( observer );
	  };

	  ModelBase.prototype.registerTwowayBinding = function registerTwowayBinding ( binding ) {
	  	this.bindings.push( binding );
	  };

	  ModelBase.prototype.removeUnresolved = function removeUnresolved ( key, resolver ) {
	  	var resolvers = this.unresolvedByKey[ key ];

	  	if ( resolvers ) {
	  		removeFromArray( resolvers, resolver );
	  	}
	  };

	  ModelBase.prototype.shuffled = function shuffled () {
	  	var this$1 = this;

	  		var i = this.children.length;
	  	while ( i-- ) {
	  		this$1.children[i].shuffled();
	  	}
	  	if ( this.wrapper ) {
	  		this.wrapper.teardown();
	  		this.wrapper = null;
	  		this.rewrap = true;
	  	}
	  };

	  ModelBase.prototype.unregister = function unregister ( dependant ) {
	  	removeFromArray( this.deps, dependant );
	  };

	  ModelBase.prototype.unregisterLink = function unregisterLink ( link ) {
	  	removeFromArray( this.links, link );
	  };

	  ModelBase.prototype.unregisterPatternObserver = function unregisterPatternObserver ( observer ) {
	  	removeFromArray( this.patternObservers, observer );
	  	this.unregister( observer );
	  };

	  ModelBase.prototype.unregisterTwowayBinding = function unregisterTwowayBinding ( binding ) {
	  	removeFromArray( this.bindings, binding );
	  };

	  ModelBase.prototype.updateFromBindings = function updateFromBindings$1 ( cascade ) {
	  	var this$1 = this;

	  		var i = this.bindings.length;
	  	while ( i-- ) {
	  		var value = this$1.bindings[i].getValue();
	  		if ( value !== this$1.value ) this$1.set( value );
	  	}

	  	// check for one-way bindings if there are no two-ways
	  	if ( !this.bindings.length ) {
	  		var oneway = findBoundValue( this.deps );
	  		if ( oneway && oneway.value !== this.value ) this.set( oneway.value );
	  	}

	  	if ( cascade ) {
	  		this.children.forEach( updateFromBindings );
	  		this.links.forEach( updateFromBindings );
	  		if ( this._link ) this._link.updateFromBindings( cascade );
	  	}
	  };

	  function updateFromBindings ( model ) {
	  	model.updateFromBindings( true );
	  }

	  function findBoundValue( list ) {
	  	var i = list.length;
	  	while ( i-- ) {
	  		if ( list[i].bound ) {
	  			var owner = list[i].owner;
	  			if ( owner ) {
	  				var value = owner.name === 'checked' ?
	  					owner.node.checked :
	  					owner.node.value;
	  				return { value: value };
	  			}
	  		}
	  	}
	  }

	  function fireShuffleTasks ( stage ) {
	  	if ( !stage ) {
	  		fireShuffleTasks( 'early' );
	  		fireShuffleTasks( 'mark' );
	  	} else {
	  		var tasks = shuffleTasks[stage];
	  		shuffleTasks[stage] = [];
	  		var i = tasks.length;
	  		while ( i-- ) tasks[i]();

	  		var register = registerQueue[stage];
	  		registerQueue[stage] = [];
	  		i = register.length;
	  		while ( i-- ) register[i].model.register( register[i].item );
	  	}
	  }

	  KeyModel.prototype.addShuffleTask = ModelBase.prototype.addShuffleTask;
	  KeyModel.prototype.addShuffleRegister = ModelBase.prototype.addShuffleRegister;
	  KeypathModel.prototype.addShuffleTask = ModelBase.prototype.addShuffleTask;
	  KeypathModel.prototype.addShuffleRegister = ModelBase.prototype.addShuffleRegister;

	  // this is the dry method of checking to see if a rebind applies to
	  // a particular keypath because in some cases, a dep may be bound
	  // directly to a particular keypath e.g. foo.bars.0.baz and need
	  // to avoid getting kicked to foo.bars.1.baz if foo.bars is unshifted
	  function rebindMatch ( template, next, previous ) {
	  	var keypath = template.r || template;

	  	// no valid keypath, go with next
	  	if ( !keypath || typeof keypath !== 'string' ) return next;

	  	// completely contextual ref, go with next
	  	if ( keypath === '.' || keypath[0] === '@' || (next || previous).isKey || (next || previous).isKeypath ) return next;

	  	var parts = keypath.split( '/' );
	  	var keys = splitKeypathI( parts[ parts.length - 1 ] );

	  	// check the keypath against the model keypath to see if it matches
	  	var model = next || previous;
	  	var i = keys.length;
	  	var match = true, shuffling = false;

	  	while ( model && i-- ) {
	  		if ( model.shuffling ) shuffling = true;
	  		// non-strict comparison to account for indices in keypaths
	  		if ( keys[i] != model.key ) match = false;
	  		model = model.parent;
	  	}

	  	// next is undefined, but keypath is shuffling and previous matches
	  	if ( !next && match && shuffling ) return previous;
	  	// next is defined, but doesn't match the keypath
	  	else if ( next && !match && shuffling ) return previous;
	  	else return next;
	  }

	  var LinkModel = (function (ModelBase) {
	  	function LinkModel ( parent, owner, target, key ) {
	  		ModelBase.call( this, parent );

	  		this.owner = owner;
	  		this.target = target;
	  		this.key = key === undefined ? owner.key : key;
	  		if ( owner.isLink ) this.sourcePath = "" + (owner.sourcePath) + "." + (this.key);

	  		target.registerLink( this );

	  		this.isReadonly = parent.isReadonly;

	  		this.isLink = true;
	  	}

	  	LinkModel.prototype = Object.create( ModelBase && ModelBase.prototype );
	  	LinkModel.prototype.constructor = LinkModel;

	  	LinkModel.prototype.animate = function animate ( from, to, options, interpolator ) {
	  		this.target.animate( from, to, options, interpolator );
	  	};

	  	LinkModel.prototype.get = function get ( shouldCapture, opts ) {
	  		if ( shouldCapture ) capture( this );
	  		return this.target.get( false, opts );
	  	};

	  	LinkModel.prototype.getKeypath = function getKeypath ( ractive ) {
	  		if ( ractive && ractive !== this.root.ractive ) return this.target.getKeypath( ractive );

	  		return ModelBase.prototype.getKeypath.call( this, ractive );
	  	};

	  	LinkModel.prototype.getKeypathModel = function getKeypathModel ( ractive ) {
	  		if ( !this.keypathModel ) this.keypathModel = new KeypathModel( this );
	  		if ( ractive && ractive !== this.root.ractive ) return this.keypathModel.getChild( ractive );
	  		return this.keypathModel;
	  	};

	  	LinkModel.prototype.handleChange = function handleChange$1 () {
	  		this.deps.forEach( handleChange );
	  		this.links.forEach( handleChange );
	  		this.notifyUpstream();
	  	};

	  	LinkModel.prototype.joinKey = function joinKey ( key ) {
	  		// TODO: handle nested links
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new LinkModel( this, this, this.target.joinKey( key ), key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	LinkModel.prototype.mark = function mark () {
	  		this.target.mark();
	  	};

	  	LinkModel.prototype.marked = function marked$1 () {
	  		this.links.forEach( marked );

	  		this.deps.forEach( handleChange );
	  		this.clearUnresolveds();
	  	};

	  	LinkModel.prototype.relinked = function relinked () {
	  		this.target.registerLink( this );
	  		this.children.forEach( function ( c ) { return c.relinked(); } );
	  	};

	  	LinkModel.prototype.relinking = function relinking ( target, root, safe ) {
	  		var this$1 = this;

	  		if ( root && this.sourcePath ) target = rebindMatch( this.sourcePath, target, this.target );
	  		if ( !target || this.target === target ) return;

	  		this.target.unregisterLink( this );
	  		if ( this.keypathModel ) this.keypathModel.rebindChildren( target );

	  		this.target = target;
	  		this.children.forEach( function ( c ) {
	  			c.relinking( target.joinKey( c.key ), false, safe );
	  		});

	  		if ( root ) this.addShuffleTask( function () {
	  			this$1.relinked();
	  			if ( !safe ) this$1.notifyUpstream();
	  		});
	  	};

	  	LinkModel.prototype.set = function set ( value ) {
	  		this.target.set( value );
	  	};

	  	LinkModel.prototype.shuffle = function shuffle ( newIndices ) {
	  		var this$1 = this;

	  		if ( this.shuffling ) return;
	  		this.shuffling = true;
	  		if ( !this.target.shuffling ) this.target.shuffle( newIndices );

	  		var i = newIndices.length;
	  		while ( i-- ) {
	  			var idx = newIndices[ i ];
	  			// nothing is actually changing, so move in the index and roll on
	  			if ( i === idx ) {
	  				continue;
	  			}

	  			// rebind the children on i to idx
	  			if ( i in this$1.childByKey ) this$1.childByKey[ i ].rebinding( !~idx ? undefined : this$1.joinKey( idx ), this$1.childByKey[ i ], true );

	  			if ( !~idx && this$1.keyModels[ i ] ) {
	  				this$1.keyModels[i].rebinding( undefined, this$1.keyModels[i], false );
	  			} else if ( ~idx && this$1.keyModels[ i ] ) {
	  				if ( !this$1.keyModels[ idx ] ) this$1.childByKey[ idx ].getKeyModel( idx );
	  				this$1.keyModels[i].rebinding( this$1.keyModels[ idx ], this$1.keyModels[i], false );
	  			}
	  		}

	  		var upstream = this.source().length !== this.source().value.length;

	  		this.links.forEach( function ( l ) { return l.shuffle( newIndices ); } );

	  		i = this.deps.length;
	  		while ( i-- ) {
	  			if ( this$1.deps[i].shuffle ) this$1.deps[i].shuffle( newIndices );
	  		}

	  		this.marked();

	  		if ( upstream ) this.notifyUpstream();

	  		this.shuffling = false;
	  	};

	  	LinkModel.prototype.source = function source () {
	  		if ( this.target.source ) return this.target.source();
	  		else return this.target;
	  	};

	  	LinkModel.prototype.teardown = function teardown$1 () {
	  		if ( this._link ) this._link.teardown();
	  		this.children.forEach( teardown );
	  	};

	  	return LinkModel;
	  }(ModelBase));

	  ModelBase.prototype.link = function link ( model, keypath ) {
	  	var lnk = this._link || new LinkModel( this.parent, this, model, this.key );
	  	lnk.sourcePath = keypath;
	  	if ( this._link ) this._link.relinking( model, true, false );
	  	this.rebinding( lnk, this, false );
	  	fireShuffleTasks();

	  	var unresolved = !this._link;
	  	this._link = lnk;
	  	if ( unresolved ) this.parent.clearUnresolveds();
	  	lnk.marked();
	  	return lnk;
	  };

	  ModelBase.prototype.unlink = function unlink () {
	  	if ( this._link ) {
	  		var ln = this._link;
	  		this._link = undefined;
	  		ln.rebinding( this, this._link );
	  		fireShuffleTasks();
	  		ln.teardown();
	  	}
	  };

	  var requestAnimationFrame;

	  // If window doesn't exist, we don't need requestAnimationFrame
	  if ( !win ) {
	  	requestAnimationFrame = null;
	  } else {
	  	// https://gist.github.com/paulirish/1579671
	  	(function(vendors, lastTime, win) {

	  		var x, setTimeout;

	  		if ( win.requestAnimationFrame ) {
	  			return;
	  		}

	  		for ( x = 0; x < vendors.length && !win.requestAnimationFrame; ++x ) {
	  			win.requestAnimationFrame = win[vendors[x]+'RequestAnimationFrame'];
	  		}

	  		if ( !win.requestAnimationFrame ) {
	  			setTimeout = win.setTimeout;

	  			win.requestAnimationFrame = function(callback) {
	  				var currTime, timeToCall, id;

	  				currTime = Date.now();
	  				timeToCall = Math.max( 0, 16 - (currTime - lastTime ) );
	  				id = setTimeout( function() { callback(currTime + timeToCall); }, timeToCall );

	  				lastTime = currTime + timeToCall;
	  				return id;
	  			};
	  		}

	  	}( vendors, 0, win ));

	  	requestAnimationFrame = win.requestAnimationFrame;
	  }

	  var rAF = requestAnimationFrame;

	  var getTime = ( win && win.performance && typeof win.performance.now === 'function' ) ?
	  	function () { return win.performance.now(); } :
	  	function () { return Date.now(); };

	  // TODO what happens if a transition is aborted?

	  var tickers = [];
	  var running = false;

	  function tick () {
	  	runloop.start();

	  	var now = getTime();

	  	var i;
	  	var ticker;

	  	for ( i = 0; i < tickers.length; i += 1 ) {
	  		ticker = tickers[i];

	  		if ( !ticker.tick( now ) ) {
	  			// ticker is complete, remove it from the stack, and decrement i so we don't miss one
	  			tickers.splice( i--, 1 );
	  		}
	  	}

	  	runloop.end();

	  	if ( tickers.length ) {
	  		rAF( tick );
	  	} else {
	  		running = false;
	  	}
	  }

	  var Ticker = function Ticker ( options ) {
	  	this.duration = options.duration;
	  	this.step = options.step;
	  	this.complete = options.complete;
	  	this.easing = options.easing;

	  	this.start = getTime();
	  	this.end = this.start + this.duration;

	  	this.running = true;

	  	tickers.push( this );
	  	if ( !running ) rAF( tick );
	  };

	  Ticker.prototype.tick = function tick$1 ( now ) {
	  	if ( !this.running ) return false;

	  	if ( now > this.end ) {
	  		if ( this.step ) this.step( 1 );
	  		if ( this.complete ) this.complete( 1 );

	  		return false;
	  	}

	  	var elapsed = now - this.start;
	  	var eased = this.easing( elapsed / this.duration );

	  	if ( this.step ) this.step( eased );

	  	return true;
	  };

	  Ticker.prototype.stop = function stop () {
	  	if ( this.abort ) this.abort();
	  	this.running = false;
	  };

	  var prefixers = {};

	  // TODO this is legacy. sooner we can replace the old adaptor API the better
	  function prefixKeypath ( obj, prefix ) {
	  	var prefixed = {}, key;

	  	if ( !prefix ) {
	  		return obj;
	  	}

	  	prefix += '.';

	  	for ( key in obj ) {
	  		if ( obj.hasOwnProperty( key ) ) {
	  			prefixed[ prefix + key ] = obj[ key ];
	  		}
	  	}

	  	return prefixed;
	  }

	  function getPrefixer ( rootKeypath ) {
	  	var rootDot;

	  	if ( !prefixers[ rootKeypath ] ) {
	  		rootDot = rootKeypath ? rootKeypath + '.' : '';

	  		prefixers[ rootKeypath ] = function ( relativeKeypath, value ) {
	  			var obj;

	  			if ( typeof relativeKeypath === 'string' ) {
	  				obj = {};
	  				obj[ rootDot + relativeKeypath ] = value;
	  				return obj;
	  			}

	  			if ( typeof relativeKeypath === 'object' ) {
	  				// 'relativeKeypath' is in fact a hash, not a keypath
	  				return rootDot ? prefixKeypath( relativeKeypath, rootKeypath ) : relativeKeypath;
	  			}
	  		};
	  	}

	  	return prefixers[ rootKeypath ];
	  }

	  var Model = (function (ModelBase) {
	  	function Model ( parent, key ) {
	  		ModelBase.call( this, parent );

	  		this.value = undefined;

	  		this.ticker = null;

	  		if ( parent ) {
	  			this.key = unescapeKey( key );
	  			this.isReadonly = parent.isReadonly;

	  			if ( parent.value ) {
	  				this.value = parent.value[ this.key ];
	  				if ( isArray( this.value ) ) this.length = this.value.length;
	  				this.adapt();
	  			}
	  		}
	  	}

	  	Model.prototype = Object.create( ModelBase && ModelBase.prototype );
	  	Model.prototype.constructor = Model;

	  	Model.prototype.adapt = function adapt () {
	  		var this$1 = this;

	  		var adaptors = this.root.adaptors;
	  		var len = adaptors.length;

	  		this.rewrap = false;

	  		// Exit early if no adaptors
	  		if ( len === 0 ) return;

	  		var value = this.value;

	  		// TODO remove this legacy nonsense
	  		var ractive = this.root.ractive;
	  		var keypath = this.getKeypath();

	  		// tear previous adaptor down if present
	  		if ( this.wrapper ) {
	  			var shouldTeardown = !this.wrapper.reset || this.wrapper.reset( value ) === false;

	  			if ( shouldTeardown ) {
	  				this.wrapper.teardown();
	  				this.wrapper = null;

	  				// don't branch for undefined values
	  				if ( this.value !== undefined ) {
	  					var parentValue = this.parent.value || this.parent.createBranch( this.key );
	  					if ( parentValue[ this.key ] !== this.value ) parentValue[ this.key ] = value;
	  				}
	  			} else {
	  				this.value = this.wrapper.get();
	  				return;
	  			}
	  		}

	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var adaptor = adaptors[i];
	  			if ( adaptor.filter( value, keypath, ractive ) ) {
	  				this$1.wrapper = adaptor.wrap( ractive, value, keypath, getPrefixer( keypath ) );
	  				this$1.wrapper.value = this$1.value;
	  				this$1.wrapper.__model = this$1; // massive temporary hack to enable array adaptor

	  				this$1.value = this$1.wrapper.get();

	  				break;
	  			}
	  		}
	  	};

	  	Model.prototype.animate = function animate ( from, to, options, interpolator ) {
	  		var this$1 = this;

	  		if ( this.ticker ) this.ticker.stop();

	  		var fulfilPromise;
	  		var promise = new Promise$1( function ( fulfil ) { return fulfilPromise = fulfil; } );

	  		this.ticker = new Ticker({
	  			duration: options.duration,
	  			easing: options.easing,
	  			step: function ( t ) {
	  				var value = interpolator( t );
	  				this$1.applyValue( value );
	  				if ( options.step ) options.step( t, value );
	  			},
	  			complete: function () {
	  				this$1.applyValue( to );
	  				if ( options.complete ) options.complete( to );

	  				this$1.ticker = null;
	  				fulfilPromise();
	  			}
	  		});

	  		promise.stop = this.ticker.stop;
	  		return promise;
	  	};

	  	Model.prototype.applyValue = function applyValue ( value ) {
	  		if ( isEqual( value, this.value ) ) return;

	  		// TODO deprecate this nonsense
	  		this.registerChange( this.getKeypath(), value );

	  		if ( this.parent.wrapper && this.parent.wrapper.set ) {
	  			this.parent.wrapper.set( this.key, value );
	  			this.parent.value = this.parent.wrapper.get();

	  			this.value = this.parent.value[ this.key ];
	  			this.adapt();
	  		} else if ( this.wrapper ) {
	  			this.value = value;
	  			this.adapt();
	  		} else {
	  			var parentValue = this.parent.value || this.parent.createBranch( this.key );
	  			parentValue[ this.key ] = value;

	  			this.value = value;
	  			this.adapt();
	  		}

	  		this.parent.clearUnresolveds();
	  		this.clearUnresolveds();

	  		// keep track of array length
	  		if ( isArray( value ) ) this.length = value.length;

	  		// notify dependants
	  		this.links.forEach( handleChange );
	  		this.children.forEach( mark );
	  		this.deps.forEach( handleChange );

	  		this.notifyUpstream();

	  		if ( this.key === 'length' && isArray( this.parent.value ) ) this.parent.length = this.parent.value.length;
	  	};

	  	Model.prototype.createBranch = function createBranch ( key ) {
	  		var branch = isNumeric( key ) ? [] : {};
	  		this.set( branch );

	  		return branch;
	  	};

	  	Model.prototype.get = function get ( shouldCapture, opts ) {
	  		if ( this._link ) return this._link.get( shouldCapture, opts );
	  		if ( shouldCapture ) capture( this );
	  		// if capturing, this value needs to be unwrapped because it's for external use
	  		if ( opts && opts.virtual ) return this.getVirtual( false );
	  		return shouldCapture && this.wrapper ? this.wrapper.value : this.value;
	  	};

	  	Model.prototype.getKeypathModel = function getKeypathModel ( ractive ) {
	  		if ( !this.keypathModel ) this.keypathModel = new KeypathModel( this );
	  		return this.keypathModel;
	  	};

	  	Model.prototype.joinKey = function joinKey ( key, opts ) {
	  		if ( this._link ) {
	  			if ( opts && !opts.lastLink === false && ( key === undefined || key === '' ) ) return this;
	  			return this._link.joinKey( key );
	  		}

	  		if ( key === undefined || key === '' ) return this;


	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new Model( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		if ( this.childByKey[ key ]._link ) return this.childByKey[ key ]._link;
	  		return this.childByKey[ key ];
	  	};

	  	Model.prototype.mark = function mark$1 () {
	  		if ( this._link ) return this._link.mark();

	  		var value = this.retrieve();

	  		if ( !isEqual( value, this.value ) ) {
	  			var old = this.value;
	  			this.value = value;

	  			// make sure the wrapper stays in sync
	  			if ( old !== value || this.rewrap ) this.adapt();

	  			// keep track of array lengths
	  			if ( isArray( value ) ) this.length = value.length;

	  			this.children.forEach( mark );
	  			this.links.forEach( marked );

	  			this.deps.forEach( handleChange );
	  			this.clearUnresolveds();
	  		}
	  	};

	  	Model.prototype.merge = function merge ( array, comparator ) {
	  		var oldArray = this.value, newArray = array;
	  		if ( oldArray === newArray ) oldArray = recreateArray( this );
	  		if ( comparator ) {
	  			oldArray = oldArray.map( comparator );
	  			newArray = newArray.map( comparator );
	  		}

	  		var oldLength = oldArray.length;

	  		var usedIndices = {};
	  		var firstUnusedIndex = 0;

	  		var newIndices = oldArray.map( function ( item ) {
	  			var index;
	  			var start = firstUnusedIndex;

	  			do {
	  				index = newArray.indexOf( item, start );

	  				if ( index === -1 ) {
	  					return -1;
	  				}

	  				start = index + 1;
	  			} while ( ( usedIndices[ index ] === true ) && start < oldLength );

	  			// keep track of the first unused index, so we don't search
	  			// the whole of newArray for each item in oldArray unnecessarily
	  			if ( index === firstUnusedIndex ) {
	  				firstUnusedIndex += 1;
	  			}
	  			// allow next instance of next "equal" to be found item
	  			usedIndices[ index ] = true;
	  			return index;
	  		});

	  		this.parent.value[ this.key ] = array;
	  		this.shuffle( newIndices );
	  	};

	  	Model.prototype.retrieve = function retrieve () {
	  		return this.parent.value ? this.parent.value[ this.key ] : undefined;
	  	};

	  	Model.prototype.set = function set ( value ) {
	  		if ( this.ticker ) this.ticker.stop();
	  		this.applyValue( value );
	  	};

	  	Model.prototype.shuffle = function shuffle ( newIndices ) {
	  		var this$1 = this;

	  		this.shuffling = true;
	  		var i = newIndices.length;
	  		while ( i-- ) {
	  			var idx = newIndices[ i ];
	  			// nothing is actually changing, so move in the index and roll on
	  			if ( i === idx ) {
	  				continue;
	  			}

	  			// rebind the children on i to idx
	  			if ( i in this$1.childByKey ) this$1.childByKey[ i ].rebinding( !~idx ? undefined : this$1.joinKey( idx ), this$1.childByKey[ i ], true );

	  			if ( !~idx && this$1.keyModels[ i ] ) {
	  				this$1.keyModels[i].rebinding( undefined, this$1.keyModels[i], false );
	  			} else if ( ~idx && this$1.keyModels[ i ] ) {
	  				if ( !this$1.keyModels[ idx ] ) this$1.childByKey[ idx ].getKeyModel( idx );
	  				this$1.keyModels[i].rebinding( this$1.keyModels[ idx ], this$1.keyModels[i], false );
	  			}
	  		}

	  		var upstream = this.length !== this.value.length;

	  		this.links.forEach( function ( l ) { return l.shuffle( newIndices ); } );
	  		fireShuffleTasks( 'early' );

	  		i = this.deps.length;
	  		while ( i-- ) {
	  			if ( this$1.deps[i].shuffle ) this$1.deps[i].shuffle( newIndices );
	  		}

	  		this.mark();
	  		fireShuffleTasks( 'mark' );

	  		if ( upstream ) this.notifyUpstream();
	  		this.shuffling = false;
	  	};

	  	Model.prototype.teardown = function teardown$1 () {
	  		if ( this._link ) this._link.teardown();
	  		this.children.forEach( teardown );
	  		if ( this.wrapper ) this.wrapper.teardown();
	  		if ( this.keypathModel ) this.keypathModel.teardown();
	  	};

	  	return Model;
	  }(ModelBase));

	  function recreateArray( model ) {
	  	var array = [];

	  	for ( var i = 0; i < model.length; i++ ) {
	  		array[ i ] = (model.childByKey[i] || {}).value;
	  	}

	  	return array;
	  }

	  var GlobalModel = (function (Model) {
	  	function GlobalModel ( ) {
	  		Model.call( this, null, '@global' );
	  		this.value = typeof global !== 'undefined' ? global : window;
	  		this.isRoot = true;
	  		this.root = this;
	  		this.adaptors = [];
	  	}

	  	GlobalModel.prototype = Object.create( Model && Model.prototype );
	  	GlobalModel.prototype.constructor = GlobalModel;

	  	GlobalModel.prototype.getKeypath = function getKeypath() {
	  		return '@global';
	  	};

	  	// global model doesn't contribute changes events because it has no instance
	  	GlobalModel.prototype.registerChange = function registerChange () {};

	  	return GlobalModel;
	  }(Model));

	  var GlobalModel$1 = new GlobalModel();

	  var keypathExpr = /^@[^\(]+\(([^\)]+)\)/;

	  function resolveReference ( fragment, ref ) {
	  	var context = fragment.findContext();

	  	// special references
	  	// TODO does `this` become `.` at parse time?
	  	if ( ref === '.' || ref === 'this' ) return context;
	  	if ( ref.indexOf( '@keypath' ) === 0 ) {
	  		var match = keypathExpr.exec( ref );
	  		if ( match && match[1] ) {
	  			var model = resolveReference( fragment, match[1] );
	  			if ( model ) return model.getKeypathModel();
	  		}
	  		return context.getKeypathModel();
	  	}
	  	if ( ref.indexOf( '@rootpath' ) === 0 ) {
	  		// check to see if this is an empty component root
	  		while ( context.isRoot && context.ractive.component ) {
	  			context = context.ractive.component.parentFragment.findContext();
	  		}

	  		var match$1 = keypathExpr.exec( ref );
	  		if ( match$1 && match$1[1] ) {
	  			var model$1 = resolveReference( fragment, match$1[1] );
	  			if ( model$1 ) return model$1.getKeypathModel( fragment.ractive.root );
	  		}
	  		return context.getKeypathModel( fragment.ractive.root );
	  	}
	  	if ( ref === '@index' || ref === '@key' ) {
	  		var repeater = fragment.findRepeatingFragment();
	  		// make sure the found fragment is actually an iteration
	  		if ( !repeater.isIteration ) return;
	  		return repeater.context.getKeyModel( repeater[ ref[1] === 'i' ? 'index' : 'key' ] );
	  	}
	  	if ( ref === '@this' ) {
	  		return fragment.ractive.viewmodel.getRactiveModel();
	  	}
	  	if ( ref === '@global' ) {
	  		return GlobalModel$1;
	  	}

	  	// ancestor references
	  	if ( ref[0] === '~' ) return fragment.ractive.viewmodel.joinAll( splitKeypathI( ref.slice( 2 ) ) );
	  	if ( ref[0] === '.' ) {
	  		var parts = ref.split( '/' );

	  		while ( parts[0] === '.' || parts[0] === '..' ) {
	  			var part = parts.shift();

	  			if ( part === '..' ) {
	  				context = context.parent;
	  			}
	  		}

	  		ref = parts.join( '/' );

	  		// special case - `{{.foo}}` means the same as `{{./foo}}`
	  		if ( ref[0] === '.' ) ref = ref.slice( 1 );
	  		return context.joinAll( splitKeypathI( ref ) );
	  	}

	  	return resolveAmbiguousReference( fragment, ref );
	  }

	  function Ractive$get ( keypath, opts ) {
	  	if ( typeof keypath !== 'string' ) return this.viewmodel.get( true, keypath );

	  	var keys = splitKeypathI( keypath );
	  	var key = keys[0];

	  	var model;

	  	if ( !this.viewmodel.has( key ) ) {
	  		// if this is an inline component, we may need to create
	  		// an implicit mapping
	  		if ( this.component && !this.isolated ) {
	  			model = resolveReference( this.component.parentFragment, key );

	  			if ( model ) {
	  				this.viewmodel.map( key, model );
	  			}
	  		}
	  	}

	  	model = this.viewmodel.joinAll( keys );
	  	return model.get( true, opts );
	  }

	  function gatherRefs( fragment ) {
	  	var key = {}, index = {};

	  	// walk up the template gather refs as we go
	  	while ( fragment ) {
	  		if ( fragment.parent && ( fragment.parent.indexRef || fragment.parent.keyRef ) ) {
	  			var ref = fragment.parent.indexRef;
	  			if ( ref && !( ref in index ) ) index[ref] = fragment.index;
	  			ref = fragment.parent.keyRef;
	  			if ( ref && !( ref in key ) ) key[ref] = fragment.key;
	  		}

	  		if ( fragment.componentParent && !fragment.ractive.isolated ) {
	  			fragment = fragment.componentParent;
	  		} else {
	  			fragment = fragment.parent;
	  		}
	  	}

	  	return { key: key, index: index };
	  }

	  // This function takes an array, the name of a mutator method, and the
	  // arguments to call that mutator method with, and returns an array that
	  // maps the old indices to their new indices.

	  // So if you had something like this...
	  //
	  //     array = [ 'a', 'b', 'c', 'd' ];
	  //     array.push( 'e' );
	  //
	  // ...you'd get `[ 0, 1, 2, 3 ]` - in other words, none of the old indices
	  // have changed. If you then did this...
	  //
	  //     array.unshift( 'z' );
	  //
	  // ...the indices would be `[ 1, 2, 3, 4, 5 ]` - every item has been moved
	  // one higher to make room for the 'z'. If you removed an item, the new index
	  // would be -1...
	  //
	  //     array.splice( 2, 2 );
	  //
	  // ...this would result in [ 0, 1, -1, -1, 2, 3 ].
	  //
	  // This information is used to enable fast, non-destructive shuffling of list
	  // sections when you do e.g. `ractive.splice( 'items', 2, 2 );

	  function getNewIndices ( length, methodName, args ) {
	  	var spliceArguments, newIndices = [], removeStart, removeEnd, balance, i;

	  	spliceArguments = getSpliceEquivalent( length, methodName, args );

	  	if ( !spliceArguments ) {
	  		return null; // TODO support reverse and sort?
	  	}

	  	balance = ( spliceArguments.length - 2 ) - spliceArguments[1];

	  	removeStart = Math.min( length, spliceArguments[0] );
	  	removeEnd = removeStart + spliceArguments[1];
	  	newIndices.startIndex = removeStart;

	  	for ( i = 0; i < removeStart; i += 1 ) {
	  		newIndices.push( i );
	  	}

	  	for ( ; i < removeEnd; i += 1 ) {
	  		newIndices.push( -1 );
	  	}

	  	for ( ; i < length; i += 1 ) {
	  		newIndices.push( i + balance );
	  	}

	  	// there is a net shift for the rest of the array starting with index + balance
	  	if ( balance !== 0 ) {
	  		newIndices.touchedFrom = spliceArguments[0];
	  	} else {
	  		newIndices.touchedFrom = length;
	  	}

	  	return newIndices;
	  }


	  // The pop, push, shift an unshift methods can all be represented
	  // as an equivalent splice
	  function getSpliceEquivalent ( length, methodName, args ) {
	  	switch ( methodName ) {
	  		case 'splice':
	  			if ( args[0] !== undefined && args[0] < 0 ) {
	  				args[0] = length + Math.max( args[0], -length );
	  			}

	  			if ( args[0] === undefined ) args[0] = 0;

	  			while ( args.length < 2 ) {
	  				args.push( length - args[0] );
	  			}

	  			if ( typeof args[1] !== 'number' ) {
	  				args[1] = length - args[0];
	  			}

	  			// ensure we only remove elements that exist
	  			args[1] = Math.min( args[1], length - args[0] );

	  			return args;

	  		case 'sort':
	  		case 'reverse':
	  			return null;

	  		case 'pop':
	  			if ( length ) {
	  				return [ length - 1, 1 ];
	  			}
	  			return [ 0, 0 ];

	  		case 'push':
	  			return [ length, 0 ].concat( args );

	  		case 'shift':
	  			return [ 0, length ? 1 : 0 ];

	  		case 'unshift':
	  			return [ 0, 0 ].concat( args );
	  	}
	  }

	  var arrayProto = Array.prototype;

	  function makeArrayMethod ( methodName ) {
	  	function path ( keypath ) {
	  		var args = [], len = arguments.length - 1;
	  		while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	  		return model( this.viewmodel.joinAll( splitKeypathI( keypath ) ), args );
	  	}

	  	function model ( mdl, args ) {
	  		var array = mdl.get();

	  		if ( !isArray( array ) ) {
	  			if ( array === undefined ) {
	  				array = [];
	  				var result$1 = arrayProto[ methodName ].apply( array, args );
	  				var promise$1 = runloop.start( this, true ).then( function () { return result$1; } );
	  				mdl.set( array );
	  				runloop.end();
	  				return promise$1;
	  			} else {
	  				throw new Error( ("shuffle array method " + methodName + " called on non-array at " + (mdl.getKeypath())) );
	  			}
	  		}

	  		var newIndices = getNewIndices( array.length, methodName, args );
	  		var result = arrayProto[ methodName ].apply( array, args );

	  		var promise = runloop.start( this, true ).then( function () { return result; } );
	  		promise.result = result;

	  		if ( newIndices ) {
	  			mdl.shuffle( newIndices );
	  		} else {
	  			mdl.set( result );
	  		}

	  		runloop.end();

	  		return promise;
	  	}

	  	return { path: path, model: model };
	  }

	  var comparators = {};

	  function getComparator ( option ) {
	  	if ( !option ) return null; // use existing arrays
	  	if ( option === true ) return JSON.stringify;
	  	if ( typeof option === 'function' ) return option;

	  	if ( typeof option === 'string' ) {
	  		return comparators[ option ] || ( comparators[ option ] = function ( thing ) { return thing[ option ]; } );
	  	}

	  	throw new Error( 'If supplied, options.compare must be a string, function, or `true`' ); // TODO link to docs
	  }

	  function merge$1 ( ractive, model, array, options ) {
	  	var promise = runloop.start( ractive, true );
	  	var value = model.get();

	  	if ( !isArray( value ) || !isArray( array ) ) {
	  		throw new Error( 'You cannot merge an array with a non-array' );
	  	}

	  	var comparator = getComparator( options && options.compare );
	  	model.merge( array, comparator );

	  	runloop.end();
	  	return promise;
	  }

	  function thisRactive$merge ( keypath, array, options ) {
	  	return merge$1( this, this.viewmodel.joinAll( splitKeypathI( keypath ) ), array, options );
	  }

	  var updateHook = new Hook( 'update' );

	  function update$2 ( ractive, model ) {
	  	if ( model.parent && model.parent.wrapper ) return update$2( ractive, model.parent );

	  	var promise = runloop.start( ractive, true );

	  	model.mark();
	  	model.registerChange( model.getKeypath(), model.get() );

	  	if ( !model.isRoot ) {
	  		// there may be unresolved refs that are now resolvable up the context tree
	  		var parent = model.parent, key = model.key;
	  		while ( parent && !parent.isRoot ) {
	  			if ( parent.clearUnresolveds ) parent.clearUnresolveds( key );
	  			key = parent.key;
	  			parent = parent.parent;
	  		}
	  	}

	  	// notify upstream of changes
	  	model.notifyUpstream();

	  	runloop.end();

	  	updateHook.fire( ractive, model );

	  	return promise;
	  }

	  function Ractive$update ( keypath ) {
	  	if ( keypath ) keypath = splitKeypathI( keypath );

	  	return update$2( this, keypath ? this.viewmodel.joinAll( keypath ) : this.viewmodel );
	  }

	  var modelPush = makeArrayMethod( 'push' ).model;
	  var modelPop = makeArrayMethod( 'pop' ).model;
	  var modelShift = makeArrayMethod( 'shift' ).model;
	  var modelUnshift = makeArrayMethod( 'unshift' ).model;
	  var modelSort = makeArrayMethod( 'sort' ).model;
	  var modelSplice = makeArrayMethod( 'splice' ).model;
	  var modelReverse = makeArrayMethod( 'reverse' ).model;

	  // TODO: at some point perhaps this could support relative * keypaths?
	  function build$1 ( el, keypath, value ) {
	  	var sets = [];

	  	// set multiple keypaths in one go
	  	if ( isObject( keypath ) ) {
	  		for ( var k in keypath ) {
	  			if ( keypath.hasOwnProperty( k ) ) {
	  				sets.push( [ findModel( el, k ).model, keypath[k] ] );
	  			}
	  		}

	  	}
	  	// set a single keypath
	  	else {
	  		sets.push( [ findModel( el, keypath ).model, value ] );
	  	}

	  	return sets;
	  }

	  // get relative keypaths and values
	  function get ( keypath ) {
	  	if ( !keypath ) return this._element.parentFragment.findContext().get( true );

	  	var model = resolveReference( this._element.parentFragment, keypath );

	  	return model ? model.get( true ) : undefined;
	  }

	  function resolve$1 ( path, ractive ) {
	  	var ref = findModel( this, path ), model = ref.model, instance = ref.instance;
	  	return model ? model.getKeypath( ractive || instance ) : path;
	  }

	  function findModel ( el, path ) {
	  	var frag = el._element.parentFragment;

	  	if ( typeof path !== 'string' ) {
	  		return { model: frag.findContext(), instance: path };
	  	}

	  	return { model: resolveReference( frag, path ), instance: frag.ractive };
	  }

	  // the usual mutation suspects
	  function add$1 ( keypath, value ) {
	  	if ( value === undefined ) value = 1;
	  	if ( !isNumeric( value ) ) throw new Error( 'Bad arguments' );
	  	return set( this.ractive, build$1( this, keypath, value ).map( function ( pair ) {
	  		var model = pair[0], val = pair[1], value = model.get();
	  		if ( !isNumeric( val ) || !isNumeric( value ) ) throw new Error( 'Cannot add non-numeric value' );
	  		return [ model, value + val ];
	  	}) );
	  }

	  function animate ( keypath, value, options ) {
	  	var model = findModel( this, keypath ).model;
	  	return protoAnimate( this.ractive, model, value, options );
	  }

	  function link ( source, dest ) {
	  	var there = findModel( this, source ).model, here = findModel( this, dest ).model;
	  	var promise = runloop.start( this.ractive, true );
	  	here.link( there, source );
	  	runloop.end();
	  	return promise;
	  }

	  function merge ( keypath, array, options ) {
	  	return merge$1( this.ractive, findModel( this, keypath ).model, array, options );
	  }

	  function pop ( keypath ) {
	  	return modelPop( findModel( this, keypath ).model, [] );
	  }

	  function push ( keypath ) {
	  	var values = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

	  	return modelPush( findModel( this, keypath ).model, values );
	  }

	  function reverse ( keypath ) {
	  	return modelReverse( findModel( this, keypath ).model, [] );
	  }

	  function set$1 ( keypath, value ) {
	  	return set( this.ractive, build$1( this, keypath, value ) );
	  }

	  function shift ( keypath ) {
	  	return modelShift( findModel( this, keypath ).model, [] );
	  }

	  function splice ( keypath, index, drop ) {
	  	var add = [], len = arguments.length - 3;
	  	while ( len-- > 0 ) add[ len ] = arguments[ len + 3 ];

	  	add.unshift( index, drop );
	  	return modelSplice( findModel( this, keypath ).model, add );
	  }

	  function sort ( keypath ) {
	  	return modelSort( findModel( this, keypath ).model, [] );
	  }

	  function subtract ( keypath, value ) {
	  	if ( value === undefined ) value = 1;
	  	if ( !isNumeric( value ) ) throw new Error( 'Bad arguments' );
	  	return set( this.ractive, build$1( this, keypath, value ).map( function ( pair ) {
	  		var model = pair[0], val = pair[1], value = model.get();
	  		if ( !isNumeric( val ) || !isNumeric( value ) ) throw new Error( 'Cannot add non-numeric value' );
	  		return [ model, value - val ];
	  	}) );
	  }

	  function toggle ( keypath ) {
	  	var ref = findModel( this, keypath ), model = ref.model;
	  	return set( this.ractive, [ [ model, !model.get() ] ] );
	  }

	  function unlink ( dest ) {
	  	var here = findModel( this, dest ).model;
	  	var promise = runloop.start( this.ractive, true );
	  	if ( here.owner && here.owner._link ) here.owner.unlink();
	  	runloop.end();
	  	return promise;
	  }

	  function unshift ( keypath ) {
	  	var add = [], len = arguments.length - 1;
	  	while ( len-- > 0 ) add[ len ] = arguments[ len + 1 ];

	  	return modelUnshift( findModel( this, keypath ).model, add );
	  }

	  function update$1 ( keypath ) {
	  	return update$2( this.ractive, findModel( this, keypath ).model );
	  }

	  function updateModel ( keypath, cascade ) {
	  	var ref = findModel( this, keypath ), model = ref.model;
	  	var promise = runloop.start( this.ractive, true );
	  	model.updateFromBindings( cascade );
	  	runloop.end();
	  	return promise;
	  }

	  // two-way binding related helpers
	  function isBound () {
	  	var ref = getBindingModel( this ), model = ref.model;
	  	return !!model;
	  }

	  function getBindingPath ( ractive ) {
	  	var ref = getBindingModel( this ), model = ref.model, instance = ref.instance;
	  	if ( model ) return model.getKeypath( ractive || instance );
	  }

	  function getBinding () {
	  	var ref = getBindingModel( this ), model = ref.model;
	  	if ( model ) return model.get( true );
	  }

	  function getBindingModel ( ctx ) {
	  	var el = ctx._element;
	  	return { model: el.binding && el.binding.model, instance: el.parentFragment.ractive };
	  }

	  function setBinding ( value ) {
	  	var ref = getBindingModel( this ), model = ref.model;
	  	return set( this.ractive, [ [ model, value ] ] );
	  }

	  // deprecated getters
	  function keypath () {
	  	warnOnceIfDebug( ("Object property keypath is deprecated, please use resolve() instead.") );
	  	return this.resolve();
	  }

	  function rootpath () {
	  	warnOnceIfDebug( ("Object property rootpath is deprecated, please use resolve( ractive.root ) instead.") );
	  	return this.resolve( this.ractive.root );
	  }

	  function context () {
	  	warnOnceIfDebug( ("Object property context is deprecated, please use get() instead.") );
	  	return this.get();
	  }

	  function index () {
	  	warnOnceIfDebug( ("Object property index is deprecated, you can use get( \"indexName\" ) instead.") );
	  	return gatherRefs( this._element.parentFragment ).index;
	  }

	  function key () {
	  	warnOnceIfDebug( ("Object property key is deprecated, you can use get( \"keyName\" ) instead.") );
	  	return gatherRefs( this._element.parentFragment ).key;
	  }

	  function addHelpers ( obj, element ) {
	  	defineProperties( obj, {
	  		_element: { value: element },
	  		ractive: { value: element.parentFragment.ractive },
	  		resolve: { value: resolve$1 },
	  		get: { value: get },

	  		add: { value: add$1 },
	  		animate: { value: animate },
	  		link: { value: link },
	  		merge: { value: merge },
	  		pop: { value: pop },
	  		push: { value: push },
	  		reverse: { value: reverse },
	  		set: { value: set$1 },
	  		shift: { value: shift },
	  		sort: { value: sort },
	  		splice: { value: splice },
	  		subtract: { value: subtract },
	  		toggle: { value: toggle },
	  		unlink: { value: unlink },
	  		unshift: { value: unshift },
	  		update: { value: update$1 },
	  		updateModel: { value: updateModel },

	  		isBound: { value: isBound },
	  		getBindingPath: { value: getBindingPath },
	  		getBinding: { value: getBinding },
	  		setBinding: { value: setBinding },

	  		keypath: { get: keypath },
	  		rootpath: { get: rootpath },
	  		context: { get: context },
	  		index: { get: index },
	  		key: { get: key }
	  	});

	  	return obj;
	  }

	  var query = doc && doc.querySelector;

	  function staticInfo( node ) {
	  	if ( typeof node === 'string' && query ) {
	  		node = query.call( document, node );
	  	}

	  	if ( !node || !node._ractive ) return {};

	  	var storage = node._ractive;

	  	return addHelpers( {}, storage.proxy );
	  }

	  function getNodeInfo( node ) {
	  	if ( typeof node === 'string' ) {
	  		node = this.find( node );
	  	}

	  	return staticInfo( node );
	  }

	  var insertHook = new Hook( 'insert' );

	  function Ractive$insert ( target, anchor ) {
	  	if ( !this.fragment.rendered ) {
	  		// TODO create, and link to, documentation explaining this
	  		throw new Error( 'The API has changed - you must call `ractive.render(target[, anchor])` to render your Ractive instance. Once rendered you can use `ractive.insert()`.' );
	  	}

	  	target = getElement( target );
	  	anchor = getElement( anchor ) || null;

	  	if ( !target ) {
	  		throw new Error( 'You must specify a valid target to insert into' );
	  	}

	  	target.insertBefore( this.detach(), anchor );
	  	this.el = target;

	  	( target.__ractive_instances__ || ( target.__ractive_instances__ = [] ) ).push( this );
	  	this.isDetached = false;

	  	fireInsertHook( this );
	  }

	  function fireInsertHook( ractive ) {
	  	insertHook.fire( ractive );

	  	ractive.findAllComponents('*').forEach( function ( child ) {
	  		fireInsertHook( child.instance );
	  	});
	  }

	  function link$1( there, here ) {
	  	if ( here === there || (there + '.').indexOf( here + '.' ) === 0 || (here + '.').indexOf( there + '.' ) === 0 ) {
	  		throw new Error( 'A keypath cannot be linked to itself.' );
	  	}

	  	var promise = runloop.start();
	  	var model;

	  	// may need to allow a mapping to resolve implicitly
	  	var sourcePath = splitKeypathI( there );
	  	if ( !this.viewmodel.has( sourcePath[0] ) && this.component ) {
	  		model = resolveReference( this.component.parentFragment, sourcePath[0] );
	  		model = model.joinAll( sourcePath.slice( 1 ) );
	  	}

	  	this.viewmodel.joinAll( splitKeypathI( here ) ).link( model || this.viewmodel.joinAll( sourcePath ), there );

	  	runloop.end();

	  	return promise;
	  }

	  var ReferenceResolver = function ReferenceResolver ( fragment, reference, callback ) {
	  	var this$1 = this;

	  		this.fragment = fragment;
	  	this.reference = normalise( reference );
	  	this.callback = callback;

	  	this.keys = splitKeypathI( reference );
	  	this.resolved = false;

	  	this.contexts = [];

	  	// TODO the consumer should take care of addUnresolved
	  	// we attach to all the contexts between here and the root
	  	// - whenever their values change, they can quickly
	  	// check to see if we can resolve
	  	while ( fragment ) {
	  		if ( fragment.context ) {
	  			fragment.context.addUnresolved( this$1.keys[0], this$1 );
	  			this$1.contexts.push( fragment.context );
	  		}

	  		fragment = fragment.componentParent || fragment.parent;
	  	}
	  };

	  ReferenceResolver.prototype.attemptResolution = function attemptResolution () {
	  	if ( this.resolved ) return;

	  	var model = resolveAmbiguousReference( this.fragment, this.reference );

	  	if ( model ) {
	  		this.resolved = true;
	  		this.callback( model );
	  	}
	  };

	  ReferenceResolver.prototype.forceResolution = function forceResolution () {
	  	if ( this.resolved ) return;

	  	var model = this.fragment.findContext().joinAll( this.keys );
	  	this.callback( model );
	  	this.resolved = true;
	  };

	  ReferenceResolver.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		if ( previous ) previous.removeUnresolved( this.keys[0], this );
	  	if ( next ) runloop.scheduleTask( function () { return next.addUnresolved( this$1.keys[0], this$1 ); } );
	  };

	  ReferenceResolver.prototype.unbind = function unbind () {
	  	var this$1 = this;

	  		removeFromArray( this.fragment.unresolved, this );

	  	if ( this.resolved ) return;

	  	this.contexts.forEach( function ( c ) { return c.removeUnresolved( this$1.keys[0], this$1 ); } );
	  };

	  function observe ( keypath, callback, options ) {
	  	var this$1 = this;

	  	var observers = [];
	  	var map;

	  	if ( isObject( keypath ) ) {
	  		map = keypath;
	  		options = callback || {};

	  		Object.keys( map ).forEach( function ( keypath ) {
	  			var callback = map[ keypath ];

	  			keypath.split( ' ' ).forEach( function ( keypath ) {
	  				observers.push( createObserver( this$1, keypath, callback, options ) );
	  			});
	  		});
	  	}

	  	else {
	  		var keypaths;

	  		if ( typeof keypath === 'function' ) {
	  			options = callback;
	  			callback = keypath;
	  			keypaths = [ '' ];
	  		} else {
	  			keypaths = keypath.split( ' ' );
	  		}

	  		keypaths.forEach( function ( keypath ) {
	  			observers.push( createObserver( this$1, keypath, callback, options || {} ) );
	  		});
	  	}

	  	// add observers to the Ractive instance, so they can be
	  	// cancelled on ractive.teardown()
	  	this._observers.push.apply( this._observers, observers );

	  	return {
	  		cancel: function () {
	  			observers.forEach( function ( observer ) {
	  				removeFromArray ( this$1._observers, observer );
	  				observer.cancel();
	  			} );
	  		}
	  	};
	  }

	  function createObserver ( ractive, keypath, callback, options ) {
	  	var viewmodel = ractive.viewmodel;

	  	var keys = splitKeypathI( keypath );
	  	var wildcardIndex = keys.indexOf( '*' );
	  	options.keypath = keypath;

	  	// normal keypath - no wildcards
	  	if ( !~wildcardIndex ) {
	  		var key = keys[0];
	  		var model;

	  		// if not the root model itself, check if viewmodel has key.
	  		if ( key !== '' && !viewmodel.has( key ) ) {
	  			// if this is an inline component, we may need to create an implicit mapping
	  			if ( ractive.component && !ractive.isolated ) {
	  				model = resolveReference( ractive.component.parentFragment, key );
	  				if ( model ) {
	  					viewmodel.map( key, model );
	  					model = viewmodel.joinAll( keys );
	  				}
	  			}
	  		} else {
	  			model = viewmodel.joinAll( keys );
	  		}

	  		return new Observer( ractive, model, callback, options );
	  	}

	  	// pattern observers - more complex case
	  	var baseModel = wildcardIndex === 0 ?
	  		viewmodel :
	  		viewmodel.joinAll( keys.slice( 0, wildcardIndex ) );

	  	return new PatternObserver( ractive, baseModel, keys.splice( wildcardIndex ), callback, options );
	  }

	  var Observer = function Observer ( ractive, model, callback, options ) {
	  	var this$1 = this;

	  		this.context = options.context || ractive;
	  	this.callback = callback;
	  	this.ractive = ractive;

	  	if ( model ) this.resolved( model );
	  	else {
	  		this.keypath = options.keypath;
	  		this.resolver = new ReferenceResolver( ractive.fragment, options.keypath, function ( model ) {
	  			this$1.resolved( model );
	  		});
	  	}

	  	if ( options.init !== false ) {
	  		this.dirty = true;
	  		this.dispatch();
	  	} else {
	  		this.oldValue = this.newValue;
	  	}

	  	this.defer = options.defer;
	  	this.once = options.once;
	  	this.strict = options.strict;

	  	this.dirty = false;
	  };

	  Observer.prototype.cancel = function cancel () {
	  	this.cancelled = true;
	  	if ( this.model ) {
	  		this.model.unregister( this );
	  	} else {
	  		this.resolver.unbind();
	  	}
	  };

	  Observer.prototype.dispatch = function dispatch () {
	  	if ( !this.cancelled ) {
	  		this.callback.call( this.context, this.newValue, this.oldValue, this.keypath );
	  		this.oldValue = this.newValue;
	  		this.dirty = false;
	  	}
	  };

	  Observer.prototype.handleChange = function handleChange () {
	  	var this$1 = this;

	  		if ( !this.dirty ) {
	  		var newValue = this.model.get();
	  		if ( isEqual( newValue, this.oldValue ) ) return;

	  		this.newValue = newValue;

	  		if ( this.strict && this.newValue === this.oldValue ) return;

	  		runloop.addObserver( this, this.defer );
	  		this.dirty = true;

	  		if ( this.once ) runloop.scheduleTask( function () { return this$1.cancel(); } );
	  	}
	  };

	  Observer.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		next = rebindMatch( this.keypath, next, previous );
	  	// TODO: set up a resolver if next is undefined?
	  	if ( next === this.model ) return false;

	  	if ( this.model ) this.model.unregister( this );
	  	if ( next ) next.addShuffleTask( function () { return this$1.resolved( next ); } );
	  };

	  Observer.prototype.resolved = function resolved ( model ) {
	  	this.model = model;
	  	this.keypath = model.getKeypath( this.ractive );

	  	this.oldValue = undefined;
	  	this.newValue = model.get();

	  	model.register( this );
	  };

	  var PatternObserver = function PatternObserver ( ractive, baseModel, keys, callback, options ) {
	  	var this$1 = this;

	  		this.context = options.context || ractive;
	  	this.ractive = ractive;
	  	this.baseModel = baseModel;
	  	this.keys = keys;
	  	this.callback = callback;

	  	var pattern = keys.join( '\\.' ).replace( /\*/g, '(.+)' );
	  	var baseKeypath = baseModel.getKeypath( ractive );
	  	this.pattern = new RegExp( ("^" + (baseKeypath ? baseKeypath + '\\.' : '') + "" + pattern + "$") );

	  	this.oldValues = {};
	  	this.newValues = {};

	  	this.defer = options.defer;
	  	this.once = options.once;
	  	this.strict = options.strict;

	  	this.dirty = false;
	  	this.changed = [];
	  	this.partial = false;

	  	var models = baseModel.findMatches( this.keys );

	  	models.forEach( function ( model ) {
	  		this$1.newValues[ model.getKeypath( this$1.ractive ) ] = model.get();
	  	});

	  	if ( options.init !== false ) {
	  		this.dispatch();
	  	} else {
	  		this.oldValues = this.newValues;
	  	}

	  	baseModel.registerPatternObserver( this );
	  };

	  PatternObserver.prototype.cancel = function cancel () {
	  	this.baseModel.unregisterPatternObserver( this );
	  };

	  PatternObserver.prototype.dispatch = function dispatch () {
	  	var this$1 = this;

	  		Object.keys( this.newValues ).forEach( function ( keypath ) {
	  		if ( this$1.newKeys && !this$1.newKeys[ keypath ] ) return;

	  		var newValue = this$1.newValues[ keypath ];
	  		var oldValue = this$1.oldValues[ keypath ];

	  		if ( this$1.strict && newValue === oldValue ) return;
	  		if ( isEqual( newValue, oldValue ) ) return;

	  		var args = [ newValue, oldValue, keypath ];
	  		if ( keypath ) {
	  			var wildcards = this$1.pattern.exec( keypath );
	  			if ( wildcards ) {
	  				args = args.concat( wildcards.slice( 1 ) );
	  			}
	  		}

	  		this$1.callback.apply( this$1.context, args );
	  	});

	  	if ( this.partial ) {
	  		for ( var k in this.newValues ) {
	  			this.oldValues[k] = this.newValues[k];
	  		}
	  	} else {
	  		this.oldValues = this.newValues;
	  	}

	  	this.newKeys = null;
	  	this.dirty = false;
	  };

	  PatternObserver.prototype.notify = function notify ( key ) {
	  	this.changed.push( key );
	  };

	  PatternObserver.prototype.shuffle = function shuffle ( newIndices ) {
	  	var this$1 = this;

	  		if ( !isArray( this.baseModel.value ) ) return;

	  	var base = this.baseModel.getKeypath( this.ractive );
	  	var max = this.baseModel.value.length;
	  	var suffix = this.keys.length > 1 ? '.' + this.keys.slice( 1 ).join( '.' ) : '';

	  	this.newKeys = {};
	  	for ( var i = 0; i < newIndices.length; i++ ) {
	  		if ( newIndices[ i ] === -1 || newIndices[ i ] === i ) continue;
	  		this$1.newKeys[ ("" + base + "." + i + "" + suffix) ] = true;
	  	}

	  	for ( var i$1 = newIndices.touchedFrom; i$1 < max; i$1++ ) {
	  		this$1.newKeys[ ("" + base + "." + i$1 + "" + suffix) ] = true;
	  	}
	  };

	  PatternObserver.prototype.handleChange = function handleChange () {
	  	var this$1 = this;

	  		if ( !this.dirty || this.changed.length ) {
	  		if ( !this.dirty ) this.newValues = {};

	  		// handle case where previously extant keypath no longer exists -
	  		// observer should still fire, with undefined as new value
	  		// TODO huh. according to the test suite that's not the case...
	  		// Object.keys( this.oldValues ).forEach( keypath => {
	  		// this.newValues[ keypath ] = undefined;
	  		// });

	  		if ( !this.changed.length ) {
	  			this.baseModel.findMatches( this.keys ).forEach( function ( model ) {
	  				var keypath = model.getKeypath( this$1.ractive );
	  				this$1.newValues[ keypath ] = model.get();
	  			});
	  			this.partial = false;
	  		} else {
	  			var ok = this.baseModel.isRoot ?
	  				this.changed :
	  				this.changed.map( function ( key ) { return this$1.baseModel.getKeypath( this$1.ractive ) + '.' + escapeKey( key ); } );

	  			this.baseModel.findMatches( this.keys ).forEach( function ( model ) {
	  				var keypath = model.getKeypath( this$1.ractive );
	  				// is this model on a changed keypath?
	  				if ( ok.filter( function ( k ) { return keypath.indexOf( k ) === 0 && ( keypath.length === k.length || keypath[k.length] === '.' ); } ).length ) {
	  					this$1.newValues[ keypath ] = model.get();
	  				}
	  			});
	  			this.partial = true;
	  		}

	  		runloop.addObserver( this, this.defer );
	  		this.dirty = true;
	  		this.changed.length = 0;

	  		if ( this.once ) this.cancel();
	  	}
	  };

	  function observeList ( keypath, callback, options ) {
	  	if ( typeof keypath !== 'string' ) {
	  		throw new Error( 'ractive.observeList() must be passed a string as its first argument' );
	  	}

	  	var model = this.viewmodel.joinAll( splitKeypathI( keypath ) );
	  	var observer = new ListObserver( this, model, callback, options || {} );

	  	// add observer to the Ractive instance, so it can be
	  	// cancelled on ractive.teardown()
	  	this._observers.push( observer );

	  	return {
	  		cancel: function () {
	  			observer.cancel();
	  		}
	  	};
	  }

	  function negativeOne () {
	  	return -1;
	  }

	  var ListObserver = function ListObserver ( context, model, callback, options ) {
	  	this.context = context;
	  	this.model = model;
	  	this.keypath = model.getKeypath();
	  	this.callback = callback;

	  	this.pending = null;

	  	model.register( this );

	  	if ( options.init !== false ) {
	  		this.sliced = [];
	  		this.shuffle([]);
	  		this.handleChange();
	  	} else {
	  		this.sliced = this.slice();
	  	}
	  };

	  ListObserver.prototype.handleChange = function handleChange () {
	  	if ( this.pending ) {
	  		// post-shuffle
	  		this.callback( this.pending );
	  		this.pending = null;
	  	}

	  	else {
	  		// entire array changed
	  		this.shuffle( this.sliced.map( negativeOne ) );
	  		this.handleChange();
	  	}
	  };

	  ListObserver.prototype.shuffle = function shuffle ( newIndices ) {
	  	var this$1 = this;

	  		var newValue = this.slice();

	  	var inserted = [];
	  	var deleted = [];
	  	var start;

	  	var hadIndex = {};

	  	newIndices.forEach( function ( newIndex, oldIndex ) {
	  		hadIndex[ newIndex ] = true;

	  		if ( newIndex !== oldIndex && start === undefined ) {
	  			start = oldIndex;
	  		}

	  		if ( newIndex === -1 ) {
	  			deleted.push( this$1.sliced[ oldIndex ] );
	  		}
	  	});

	  	if ( start === undefined ) start = newIndices.length;

	  	var len = newValue.length;
	  	for ( var i = 0; i < len; i += 1 ) {
	  		if ( !hadIndex[i] ) inserted.push( newValue[i] );
	  	}

	  	this.pending = { inserted: inserted, deleted: deleted, start: start };
	  	this.sliced = newValue;
	  };

	  ListObserver.prototype.slice = function slice () {
	  	var value = this.model.get();
	  	return isArray( value ) ? value.slice() : [];
	  };

	  var onceOptions = { init: false, once: true };

	  function observeOnce ( keypath, callback, options ) {
	  	if ( isObject( keypath ) || typeof keypath === 'function' ) {
	  		options = extendObj( callback || {}, onceOptions );
	  		return this.observe( keypath, options );
	  	}

	  	options = extendObj( options || {}, onceOptions );
	  	return this.observe( keypath, callback, options );
	  }

	  function trim ( str ) { return str.trim(); };

	  function notEmptyString ( str ) { return str !== ''; };

	  function Ractive$off ( eventName, callback ) {
	  	// if no arguments specified, remove all callbacks
	  	var this$1 = this;

	  	if ( !eventName ) {
	  		// TODO use this code instead, once the following issue has been resolved
	  		// in PhantomJS (tests are unpassable otherwise!)
	  		// https://github.com/ariya/phantomjs/issues/11856
	  		// defineProperty( this, '_subs', { value: create( null ), configurable: true });
	  		for ( eventName in this._subs ) {
	  			delete this._subs[ eventName ];
	  		}
	  	}

	  	else {
	  		// Handle multiple space-separated event names
	  		var eventNames = eventName.split( ' ' ).map( trim ).filter( notEmptyString );

	  		eventNames.forEach( function ( eventName ) {
	  			var subscribers = this$1._subs[ eventName ];

	  			// If we have subscribers for this event...
	  			if ( subscribers ) {
	  				// ...if a callback was specified, only remove that
	  				if ( callback ) {
	  					var index = subscribers.indexOf( callback );
	  					if ( index !== -1 ) {
	  						subscribers.splice( index, 1 );
	  					}
	  				}

	  				// ...otherwise remove all callbacks
	  				else {
	  					this$1._subs[ eventName ] = [];
	  				}
	  			}
	  		});
	  	}

	  	return this;
	  }

	  function Ractive$on ( eventName, callback ) {
	  	// allow multiple listeners to be bound in one go
	  	var this$1 = this;

	  	if ( typeof eventName === 'object' ) {
	  		var listeners = [];
	  		var n;

	  		for ( n in eventName ) {
	  			if ( eventName.hasOwnProperty( n ) ) {
	  				listeners.push( this.on( n, eventName[ n ] ) );
	  			}
	  		}

	  		return {
	  			cancel: function () {
	  				var listener;
	  				while ( listener = listeners.pop() ) listener.cancel();
	  			}
	  		};
	  	}

	  	// Handle multiple space-separated event names
	  	var eventNames = eventName.split( ' ' ).map( trim ).filter( notEmptyString );

	  	eventNames.forEach( function ( eventName ) {
	  		( this$1._subs[ eventName ] || ( this$1._subs[ eventName ] = [] ) ).push( callback );
	  	});

	  	return {
	  		cancel: function () { return this$1.off( eventName, callback ); }
	  	};
	  }

	  function Ractive$once ( eventName, handler ) {
	  	var listener = this.on( eventName, function () {
	  		handler.apply( this, arguments );
	  		listener.cancel();
	  	});

	  	// so we can still do listener.cancel() manually
	  	return listener;
	  }

	  var pop$1 = makeArrayMethod( 'pop' ).path;

	  var push$1 = makeArrayMethod( 'push' ).path;

	  var PREFIX = '/* Ractive.js component styles */';

	  // Holds current definitions of styles.
	  var styleDefinitions = [];

	  // Flag to tell if we need to update the CSS
	  var isDirty = false;

	  // These only make sense on the browser. See additional setup below.
	  var styleElement = null;
	  var useCssText = null;

	  function addCSS( styleDefinition ) {
	  	styleDefinitions.push( styleDefinition );
	  	isDirty = true;
	  }

	  function applyCSS() {

	  	// Apply only seems to make sense when we're in the DOM. Server-side renders
	  	// can call toCSS to get the updated CSS.
	  	if ( !doc || !isDirty ) return;

	  	if ( useCssText ) {
	  		styleElement.styleSheet.cssText = getCSS( null );
	  	} else {
	  		styleElement.innerHTML = getCSS( null );
	  	}

	  	isDirty = false;
	  }

	  function getCSS( cssIds ) {

	  	var filteredStyleDefinitions = cssIds ? styleDefinitions.filter( function ( style ) { return ~cssIds.indexOf( style.id ); } ) : styleDefinitions;

	  	return filteredStyleDefinitions.reduce( function ( styles, style ) { return ("" + styles + "\n\n/* {" + (style.id) + "} */\n" + (style.styles)); }, PREFIX );

	  }

	  // If we're on the browser, additional setup needed.
	  if ( doc && ( !styleElement || !styleElement.parentNode ) ) {

	  	styleElement = doc.createElement( 'style' );
	  	styleElement.type = 'text/css';

	  	doc.getElementsByTagName( 'head' )[ 0 ].appendChild( styleElement );

	  	useCssText = !!styleElement.styleSheet;
	  }

	  var renderHook = new Hook( 'render' );
	  var completeHook = new Hook( 'complete' );

	  function render$1 ( ractive, target, anchor, occupants ) {
	  	// if `noIntro` is `true`, temporarily disable transitions
	  	var transitionsEnabled = ractive.transitionsEnabled;
	  	if ( ractive.noIntro ) ractive.transitionsEnabled = false;

	  	var promise = runloop.start( ractive, true );
	  	runloop.scheduleTask( function () { return renderHook.fire( ractive ); }, true );

	  	if ( ractive.fragment.rendered ) {
	  		throw new Error( 'You cannot call ractive.render() on an already rendered instance! Call ractive.unrender() first' );
	  	}

	  	anchor = getElement( anchor ) || ractive.anchor;

	  	ractive.el = target;
	  	ractive.anchor = anchor;

	  	// ensure encapsulated CSS is up-to-date
	  	if ( ractive.cssId ) applyCSS();

	  	if ( target ) {
	  		( target.__ractive_instances__ || ( target.__ractive_instances__ = [] ) ).push( ractive );

	  		if ( anchor ) {
	  			var docFrag = doc.createDocumentFragment();
	  			ractive.fragment.render( docFrag );
	  			target.insertBefore( docFrag, anchor );
	  		} else {
	  			ractive.fragment.render( target, occupants );
	  		}
	  	}

	  	runloop.end();
	  	ractive.transitionsEnabled = transitionsEnabled;

	  	return promise.then( function () { return completeHook.fire( ractive ); } );
	  }

	  function Ractive$render ( target, anchor ) {
	  	if ( this.torndown ) {
	  		warnIfDebug( 'ractive.render() was called on a Ractive instance that was already torn down' );
	  		return Promise.resolve();
	  	}

	  	target = getElement( target ) || this.el;

	  	if ( !this.append && target ) {
	  		// Teardown any existing instances *before* trying to set up the new one -
	  		// avoids certain weird bugs
	  		var others = target.__ractive_instances__;
	  		if ( others ) others.forEach( teardown );

	  		// make sure we are the only occupants
	  		if ( !this.enhance ) {
	  			target.innerHTML = ''; // TODO is this quicker than removeChild? Initial research inconclusive
	  		}
	  	}

	  	var occupants = this.enhance ? toArray( target.childNodes ) : null;
	  	var promise = render$1( this, target, anchor, occupants );

	  	if ( occupants ) {
	  		while ( occupants.length ) target.removeChild( occupants.pop() );
	  	}

	  	return promise;
	  }

	  var adaptConfigurator = {
	  	extend: function ( Parent, proto, options ) {
	  		proto.adapt = combine( proto.adapt, ensureArray( options.adapt ) );
	  	},

	  	init: function () {}
	  };

	  function combine ( a, b ) {
	  	var c = a.slice();
	  	var i = b.length;

	  	while ( i-- ) {
	  		if ( !~c.indexOf( b[i] ) ) {
	  			c.push( b[i] );
	  		}
	  	}

	  	return c;
	  }

	  var selectorsPattern = /(?:^|\})?\s*([^\{\}]+)\s*\{/g;
	  var commentsPattern = /\/\*.*?\*\//g;
	  var selectorUnitPattern = /((?:(?:\[[^\]+]\])|(?:[^\s\+\>~:]))+)((?:::?[^\s\+\>\~\(:]+(?:\([^\)]+\))?)*\s*[\s\+\>\~]?)\s*/g;
	  var excludePattern = /^(?:@|\d+%)/;
	  var dataRvcGuidPattern = /\[data-ractive-css~="\{[a-z0-9-]+\}"]/g;

	  function trim$1 ( str ) {
	  	return str.trim();
	  }

	  function extractString ( unit ) {
	  	return unit.str;
	  }

	  function transformSelector ( selector, parent ) {
	  	var selectorUnits = [];
	  	var match;

	  	while ( match = selectorUnitPattern.exec( selector ) ) {
	  		selectorUnits.push({
	  			str: match[0],
	  			base: match[1],
	  			modifiers: match[2]
	  		});
	  	}

	  	// For each simple selector within the selector, we need to create a version
	  	// that a) combines with the id, and b) is inside the id
	  	var base = selectorUnits.map( extractString );

	  	var transformed = [];
	  	var i = selectorUnits.length;

	  	while ( i-- ) {
	  		var appended = base.slice();

	  		// Pseudo-selectors should go after the attribute selector
	  		var unit = selectorUnits[i];
	  		appended[i] = unit.base + parent + unit.modifiers || '';

	  		var prepended = base.slice();
	  		prepended[i] = parent + ' ' + prepended[i];

	  		transformed.push( appended.join( ' ' ), prepended.join( ' ' ) );
	  	}

	  	return transformed.join( ', ' );
	  }

	  function transformCss ( css, id ) {
	  	var dataAttr = "[data-ractive-css~=\"{" + id + "}\"]";

	  	var transformed;

	  	if ( dataRvcGuidPattern.test( css ) ) {
	  		transformed = css.replace( dataRvcGuidPattern, dataAttr );
	  	} else {
	  		transformed = css
	  		.replace( commentsPattern, '' )
	  		.replace( selectorsPattern, function ( match, $1 ) {
	  			// don't transform at-rules and keyframe declarations
	  			if ( excludePattern.test( $1 ) ) return match;

	  			var selectors = $1.split( ',' ).map( trim$1 );
	  			var transformed = selectors
	  				.map( function ( selector ) { return transformSelector( selector, dataAttr ); } )
	  				.join( ', ' ) + ' ';

	  			return match.replace( $1, transformed );
	  		});
	  	}

	  	return transformed;
	  }

	  function s4() {
	  	return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  }

	  function uuid() {
	  	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	  }

	  var cssConfigurator = {
	  	name: 'css',

	  	// Called when creating a new component definition
	  	extend: function ( Parent, proto, options ) {
	  		if ( !options.css ) return;

	  		var id = uuid();
	  		var styles = options.noCssTransform ? options.css : transformCss( options.css, id );

	  		proto.cssId = id;

	  		addCSS( { id: id, styles: styles } );

	  	},

	  	// Called when creating a new component instance
	  	init: function ( Parent, target, options ) {
	  		if ( !options.css ) return;

	  		warnIfDebug( ("\nThe css option is currently not supported on a per-instance basis and will be discarded. Instead, we recommend instantiating from a component definition with a css option.\n\nconst Component = Ractive.extend({\n\t...\n\tcss: '/* your css */',\n\t...\n});\n\nconst componentInstance = new Component({ ... })\n\t\t") );
	  	}

	  };

	  function validate ( data ) {
	  	// Warn if userOptions.data is a non-POJO
	  	if ( data && data.constructor !== Object ) {
	  		if ( typeof data === 'function' ) {
	  			// TODO do we need to support this in the new Ractive() case?
	  		} else if ( typeof data !== 'object' ) {
	  			fatal( ("data option must be an object or a function, `" + data + "` is not valid") );
	  		} else {
	  			warnIfDebug( 'If supplied, options.data should be a plain JavaScript object - using a non-POJO as the root object may work, but is discouraged' );
	  		}
	  	}
	  }

	  var dataConfigurator = {
	  	name: 'data',

	  	extend: function ( Parent, proto, options ) {
	  		var key;
	  		var value;

	  		// check for non-primitives, which could cause mutation-related bugs
	  		if ( options.data && isObject( options.data ) ) {
	  			for ( key in options.data ) {
	  				value = options.data[ key ];

	  				if ( value && typeof value === 'object' ) {
	  					if ( isObject( value ) || isArray( value ) ) {
	  						warnIfDebug( ("Passing a `data` option with object and array properties to Ractive.extend() is discouraged, as mutating them is likely to cause bugs. Consider using a data function instead:\n\n  // this...\n  data: function () {\n    return {\n      myObject: {}\n    };\n  })\n\n  // instead of this:\n  data: {\n    myObject: {}\n  }") );
	  					}
	  				}
	  			}
	  		}

	  		proto.data = combine$1( proto.data, options.data );
	  	},

	  	init: function ( Parent, ractive, options ) {
	  		var result = combine$1( Parent.prototype.data, options.data );

	  		if ( typeof result === 'function' ) result = result.call( ractive );

	  		// bind functions to the ractive instance at the top level,
	  		// unless it's a non-POJO (in which case alarm bells should ring)
	  		if ( result && result.constructor === Object ) {
	  			for ( var prop in result ) {
	  				if ( typeof result[ prop ] === 'function' ) result[ prop ] = bind( result[ prop ], ractive );
	  			}
	  		}

	  		return result || {};
	  	},

	  	reset: function ( ractive ) {
	  		var result = this.init( ractive.constructor, ractive, ractive.viewmodel );
	  		ractive.viewmodel.root.set( result );
	  		return true;
	  	}
	  };

	  function combine$1 ( parentValue, childValue ) {
	  	validate( childValue );

	  	var parentIsFn = typeof parentValue === 'function';
	  	var childIsFn = typeof childValue === 'function';

	  	// Very important, otherwise child instance can become
	  	// the default data object on Ractive or a component.
	  	// then ractive.set() ends up setting on the prototype!
	  	if ( !childValue && !parentIsFn ) {
	  		childValue = {};
	  	}

	  	// Fast path, where we just need to copy properties from
	  	// parent to child
	  	if ( !parentIsFn && !childIsFn ) {
	  		return fromProperties( childValue, parentValue );
	  	}

	  	return function () {
	  		var child = childIsFn ? callDataFunction( childValue, this ) : childValue;
	  		var parent = parentIsFn ? callDataFunction( parentValue, this ) : parentValue;

	  		return fromProperties( child, parent );
	  	};
	  }

	  function callDataFunction ( fn, context ) {
	  	var data = fn.call( context );

	  	if ( !data ) return;

	  	if ( typeof data !== 'object' ) {
	  		fatal( 'Data function must return an object' );
	  	}

	  	if ( data.constructor !== Object ) {
	  		warnOnceIfDebug( 'Data function returned something other than a plain JavaScript object. This might work, but is strongly discouraged' );
	  	}

	  	return data;
	  }

	  function fromProperties ( primary, secondary ) {
	  	if ( primary && secondary ) {
	  		for ( var key in secondary ) {
	  			if ( !( key in primary ) ) {
	  				primary[ key ] = secondary[ key ];
	  			}
	  		}

	  		return primary;
	  	}

	  	return primary || secondary;
	  }

	  var TEMPLATE_VERSION = 4;

	  var pattern = /\$\{([^\}]+)\}/g;

	  function fromExpression ( body, length ) {
	  	if ( length === void 0 ) length = 0;

	  	var args = new Array( length );

	  	while ( length-- ) {
	  		args[length] = "_" + length;
	  	}

	  	// Functions created directly with new Function() look like this:
	  	//     function anonymous (_0 /**/) { return _0*2 }
	  	//
	  	// With this workaround, we get a little more compact:
	  	//     function (_0){return _0*2}
	  	return new Function( [], ("return function (" + (args.join(',')) + "){return(" + body + ");};") )();
	  }

	  function fromComputationString ( str, bindTo ) {
	  	var hasThis;

	  	var functionBody = 'return (' + str.replace( pattern, function ( match, keypath ) {
	  		hasThis = true;
	  		return ("__ractive.get(\"" + keypath + "\")");
	  	}) + ');';

	  	if ( hasThis ) functionBody = "var __ractive = this; " + functionBody;
	  	var fn = new Function( functionBody );
	  	return hasThis ? fn.bind( bindTo ) : fn;
	  }

	  var functions = create( null );

	  function getFunction ( str, i ) {
	  	if ( functions[ str ] ) return functions[ str ];
	  	return functions[ str ] = createFunction( str, i );
	  }

	  function addFunctions( template ) {
	  	if ( !template ) return;

	  	var exp = template.e;

	  	if ( !exp ) return;

	  	Object.keys( exp ).forEach( function ( str ) {
	  		if ( functions[ str ] ) return;
	  		functions[ str ] = exp[ str ];
	  	});
	  }

	  var Parser;
	  var ParseError;
	  var leadingWhitespace = /^\s+/;
	  ParseError = function ( message ) {
	  	this.name = 'ParseError';
	  	this.message = message;
	  	try {
	  		throw new Error(message);
	  	} catch (e) {
	  		this.stack = e.stack;
	  	}
	  };

	  ParseError.prototype = Error.prototype;

	  Parser = function ( str, options ) {
	  	var this$1 = this;

	  	var items, item, lineStart = 0;

	  	this.str = str;
	  	this.options = options || {};
	  	this.pos = 0;

	  	this.lines = this.str.split( '\n' );
	  	this.lineEnds = this.lines.map( function ( line ) {
	  		var lineEnd = lineStart + line.length + 1; // +1 for the newline

	  		lineStart = lineEnd;
	  		return lineEnd;
	  	}, 0 );

	  	// Custom init logic
	  	if ( this.init ) this.init( str, options );

	  	items = [];

	  	while ( ( this$1.pos < this$1.str.length ) && ( item = this$1.read() ) ) {
	  		items.push( item );
	  	}

	  	this.leftover = this.remaining();
	  	this.result = this.postProcess ? this.postProcess( items, options ) : items;
	  };

	  Parser.prototype = {
	  	read: function ( converters ) {
	  		var this$1 = this;

	  		var pos, i, len, item;

	  		if ( !converters ) converters = this.converters;

	  		pos = this.pos;

	  		len = converters.length;
	  		for ( i = 0; i < len; i += 1 ) {
	  			this$1.pos = pos; // reset for each attempt

	  			if ( item = converters[i]( this$1 ) ) {
	  				return item;
	  			}
	  		}

	  		return null;
	  	},

	  	getLinePos: function ( char ) {
	  		var this$1 = this;

	  		var lineNum = 0, lineStart = 0, columnNum;

	  		while ( char >= this$1.lineEnds[ lineNum ] ) {
	  			lineStart = this$1.lineEnds[ lineNum ];
	  			lineNum += 1;
	  		}

	  		columnNum = char - lineStart;
	  		return [ lineNum + 1, columnNum + 1, char ]; // line/col should be one-based, not zero-based!
	  	},

	  	error: function ( message ) {
	  		var pos = this.getLinePos( this.pos );
	  		var lineNum = pos[0];
	  		var columnNum = pos[1];

	  		var line = this.lines[ pos[0] - 1 ];
	  		var numTabs = 0;
	  		var annotation = line.replace( /\t/g, function ( match, char ) {
	  			if ( char < pos[1] ) {
	  				numTabs += 1;
	  			}

	  			return '  ';
	  		}) + '\n' + new Array( pos[1] + numTabs ).join( ' ' ) + '^----';

	  		var error = new ParseError( ("" + message + " at line " + lineNum + " character " + columnNum + ":\n" + annotation) );

	  		error.line = pos[0];
	  		error.character = pos[1];
	  		error.shortMessage = message;

	  		throw error;
	  	},

	  	matchString: function ( string ) {
	  		if ( this.str.substr( this.pos, string.length ) === string ) {
	  			this.pos += string.length;
	  			return string;
	  		}
	  	},

	  	matchPattern: function ( pattern ) {
	  		var match;

	  		if ( match = pattern.exec( this.remaining() ) ) {
	  			this.pos += match[0].length;
	  			return match[1] || match[0];
	  		}
	  	},

	  	allowWhitespace: function () {
	  		this.matchPattern( leadingWhitespace );
	  	},

	  	remaining: function () {
	  		return this.str.substring( this.pos );
	  	},

	  	nextChar: function () {
	  		return this.str.charAt( this.pos );
	  	}
	  };

	  Parser.extend = function ( proto ) {
	  	var Parent = this, Child, key;

	  	Child = function ( str, options ) {
	  		Parser.call( this, str, options );
	  	};

	  	Child.prototype = create( Parent.prototype );

	  	for ( key in proto ) {
	  		if ( hasOwn.call( proto, key ) ) {
	  			Child.prototype[ key ] = proto[ key ];
	  		}
	  	}

	  	Child.extend = Parser.extend;
	  	return Child;
	  };

	  var Parser$1 = Parser;

	  var TEXT              = 1;
	  var INTERPOLATOR      = 2;
	  var TRIPLE            = 3;
	  var SECTION           = 4;
	  var INVERTED          = 5;
	  var CLOSING           = 6;
	  var ELEMENT           = 7;
	  var PARTIAL           = 8;
	  var COMMENT           = 9;
	  var DELIMCHANGE       = 10;
	  var ATTRIBUTE         = 13;
	  var CLOSING_TAG       = 14;
	  var COMPONENT         = 15;
	  var YIELDER           = 16;
	  var INLINE_PARTIAL    = 17;
	  var DOCTYPE           = 18;
	  var ALIAS             = 19;

	  var NUMBER_LITERAL    = 20;
	  var STRING_LITERAL    = 21;
	  var ARRAY_LITERAL     = 22;
	  var OBJECT_LITERAL    = 23;
	  var BOOLEAN_LITERAL   = 24;
	  var REGEXP_LITERAL    = 25;

	  var GLOBAL            = 26;
	  var KEY_VALUE_PAIR    = 27;


	  var REFERENCE         = 30;
	  var REFINEMENT        = 31;
	  var MEMBER            = 32;
	  var PREFIX_OPERATOR   = 33;
	  var BRACKETED         = 34;
	  var CONDITIONAL       = 35;
	  var INFIX_OPERATOR    = 36;

	  var INVOCATION        = 40;

	  var SECTION_IF        = 50;
	  var SECTION_UNLESS    = 51;
	  var SECTION_EACH      = 52;
	  var SECTION_WITH      = 53;
	  var SECTION_IF_WITH   = 54;

	  var ELSE              = 60;
	  var ELSEIF            = 61;

	  var EVENT             = 70;
	  var DECORATOR         = 71;
	  var TRANSITION        = 72;
	  var BINDING_FLAG      = 73;

	  var delimiterChangePattern = /^[^\s=]+/;
	  var whitespacePattern = /^\s+/;
	  function readDelimiterChange ( parser ) {
	  	var start, opening, closing;

	  	if ( !parser.matchString( '=' ) ) {
	  		return null;
	  	}

	  	start = parser.pos;

	  	// allow whitespace before new opening delimiter
	  	parser.allowWhitespace();

	  	opening = parser.matchPattern( delimiterChangePattern );
	  	if ( !opening ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	// allow whitespace (in fact, it's necessary...)
	  	if ( !parser.matchPattern( whitespacePattern ) ) {
	  		return null;
	  	}

	  	closing = parser.matchPattern( delimiterChangePattern );
	  	if ( !closing ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	// allow whitespace before closing '='
	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '=' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	return [ opening, closing ];
	  }

	  var regexpPattern = /^(\/(?:[^\n\r\u2028\u2029/\\[]|\\.|\[(?:[^\n\r\u2028\u2029\]\\]|\\.)*])+\/(?:([gimuy])(?![a-z]*\2))*(?![a-zA-Z_$0-9]))/;

	  function readNumberLiteral ( parser ) {
	  	var result;

	  	if ( result = parser.matchPattern( regexpPattern ) ) {
	  		return {
	  			t: REGEXP_LITERAL,
	  			v: result
	  		};
	  	}

	  	return null;
	  }

	  var pattern$1 = /[-/\\^$*+?.()|[\]{}]/g;

	  function escapeRegExp ( str ) {
	  	return str.replace( pattern$1, '\\$&' );
	  }

	  var regExpCache = {};

	  function getLowestIndex ( haystack, needles ) {
	  	return haystack.search( regExpCache[needles.join()] || ( regExpCache[needles.join()] = new RegExp( needles.map( escapeRegExp ).join( '|' ) ) ) );
	  }

	  // https://github.com/kangax/html-minifier/issues/63#issuecomment-37763316
	  var booleanAttributes = /^(allowFullscreen|async|autofocus|autoplay|checked|compact|controls|declare|default|defaultChecked|defaultMuted|defaultSelected|defer|disabled|enabled|formNoValidate|hidden|indeterminate|inert|isMap|itemScope|loop|multiple|muted|noHref|noResize|noShade|noValidate|noWrap|open|pauseOnExit|readOnly|required|reversed|scoped|seamless|selected|sortable|translate|trueSpeed|typeMustMatch|visible)$/i;
	  var voidElementNames = /^(?:area|base|br|col|command|doctype|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;

	  var htmlEntities = { quot: 34, amp: 38, apos: 39, lt: 60, gt: 62, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, copy: 169, ordf: 170, laquo: 171, not: 172, shy: 173, reg: 174, macr: 175, deg: 176, plusmn: 177, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, sup1: 185, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, Agrave: 192, Aacute: 193, Acirc: 194, Atilde: 195, Auml: 196, Aring: 197, AElig: 198, Ccedil: 199, Egrave: 200, Eacute: 201, Ecirc: 202, Euml: 203, Igrave: 204, Iacute: 205, Icirc: 206, Iuml: 207, ETH: 208, Ntilde: 209, Ograve: 210, Oacute: 211, Ocirc: 212, Otilde: 213, Ouml: 214, times: 215, Oslash: 216, Ugrave: 217, Uacute: 218, Ucirc: 219, Uuml: 220, Yacute: 221, THORN: 222, szlig: 223, agrave: 224, aacute: 225, acirc: 226, atilde: 227, auml: 228, aring: 229, aelig: 230, ccedil: 231, egrave: 232, eacute: 233, ecirc: 234, euml: 235, igrave: 236, iacute: 237, icirc: 238, iuml: 239, eth: 240, ntilde: 241, ograve: 242, oacute: 243, ocirc: 244, otilde: 245, ouml: 246, divide: 247, oslash: 248, ugrave: 249, uacute: 250, ucirc: 251, uuml: 252, yacute: 253, thorn: 254, yuml: 255, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, fnof: 402, circ: 710, tilde: 732, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, bull: 8226, hellip: 8230, permil: 8240, prime: 8242, Prime: 8243, lsaquo: 8249, rsaquo: 8250, oline: 8254, frasl: 8260, euro: 8364, image: 8465, weierp: 8472, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, 'int': 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830	};
	  var controlCharacters = [ 8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 157, 382, 376 ];
	  var entityPattern = new RegExp( '&(#?(?:x[\\w\\d]+|\\d+|' + Object.keys( htmlEntities ).join( '|' ) + '));?', 'g' );
	  var codePointSupport = typeof String.fromCodePoint === 'function';
	  var codeToChar = codePointSupport ? String.fromCodePoint : String.fromCharCode;

	  function decodeCharacterReferences ( html ) {
	  	return html.replace( entityPattern, function ( match, entity ) {
	  		var code;

	  		// Handle named entities
	  		if ( entity[0] !== '#' ) {
	  			code = htmlEntities[ entity ];
	  		} else if ( entity[1] === 'x' ) {
	  			code = parseInt( entity.substring( 2 ), 16 );
	  		} else {
	  			code = parseInt( entity.substring( 1 ), 10 );
	  		}

	  		if ( !code ) {
	  			return match;
	  		}

	  		return codeToChar( validateCode( code ) );
	  	});
	  }

	  var lessThan = /</g;
	  var greaterThan = />/g;
	  var amp = /&/g;
	  var invalid = 65533;

	  function escapeHtml ( str ) {
	  	return str
	  		.replace( amp, '&amp;' )
	  		.replace( lessThan, '&lt;' )
	  		.replace( greaterThan, '&gt;' );
	  }

	  // some code points are verboten. If we were inserting HTML, the browser would replace the illegal
	  // code points with alternatives in some cases - since we're bypassing that mechanism, we need
	  // to replace them ourselves
	  //
	  // Source: http://en.wikipedia.org/wiki/Character_encodings_in_HTML#Illegal_characters
	  function validateCode ( code ) {
	  	if ( !code ) {
	  		return invalid;
	  	}

	  	// line feed becomes generic whitespace
	  	if ( code === 10 ) {
	  		return 32;
	  	}

	  	// ASCII range. (Why someone would use HTML entities for ASCII characters I don't know, but...)
	  	if ( code < 128 ) {
	  		return code;
	  	}

	  	// code points 128-159 are dealt with leniently by browsers, but they're incorrect. We need
	  	// to correct the mistake or we'll end up with missing € signs and so on
	  	if ( code <= 159 ) {
	  		return controlCharacters[ code - 128 ];
	  	}

	  	// basic multilingual plane
	  	if ( code < 55296 ) {
	  		return code;
	  	}

	  	// UTF-16 surrogate halves
	  	if ( code <= 57343 ) {
	  		return invalid;
	  	}

	  	// rest of the basic multilingual plane
	  	if ( code <= 65535 ) {
	  		return code;
	  	} else if ( !codePointSupport ) {
	  		return invalid;
	  	}

	  	// supplementary multilingual plane 0x10000 - 0x1ffff
	  	if ( code >= 65536 && code <= 131071 ) {
	  		return code;
	  	}

	  	// supplementary ideographic plane 0x20000 - 0x2ffff
	  	if ( code >= 131072 && code <= 196607 ) {
	  		return code;
	  	}

	  	return invalid;
	  }

	  var expectedExpression = 'Expected a JavaScript expression';
	  var expectedParen = 'Expected closing paren';

	  // bulletproof number regex from https://gist.github.com/Rich-Harris/7544330
	  var numberPattern = /^(?:[+-]?)0*(?:(?:(?:[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/;

	  function readNumberLiteral$1 ( parser ) {
	  	var result;

	  	if ( result = parser.matchPattern( numberPattern ) ) {
	  		return {
	  			t: NUMBER_LITERAL,
	  			v: result
	  		};
	  	}

	  	return null;
	  }

	  function readBooleanLiteral ( parser ) {
	  	var remaining = parser.remaining();

	  	if ( remaining.substr( 0, 4 ) === 'true' ) {
	  		parser.pos += 4;
	  		return {
	  			t: BOOLEAN_LITERAL,
	  			v: 'true'
	  		};
	  	}

	  	if ( remaining.substr( 0, 5 ) === 'false' ) {
	  		parser.pos += 5;
	  		return {
	  			t: BOOLEAN_LITERAL,
	  			v: 'false'
	  		};
	  	}

	  	return null;
	  }

	  var stringMiddlePattern;
	  var escapeSequencePattern;
	  var lineContinuationPattern;
	  // Match one or more characters until: ", ', \, or EOL/EOF.
	  // EOL/EOF is written as (?!.) (meaning there's no non-newline char next).
	  stringMiddlePattern = /^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/;

	  // Match one escape sequence, including the backslash.
	  escapeSequencePattern = /^\\(?:['"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/;

	  // Match one ES5 line continuation (backslash + line terminator).
	  lineContinuationPattern = /^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/;

	  // Helper for defining getDoubleQuotedString and getSingleQuotedString.
	  function makeQuotedStringMatcher ( okQuote ) {
	  	return function ( parser ) {
	  		var literal = '"';
	  		var done = false;
	  		var next;

	  		while ( !done ) {
	  			next = ( parser.matchPattern( stringMiddlePattern ) || parser.matchPattern( escapeSequencePattern ) ||
	  				parser.matchString( okQuote ) );
	  			if ( next ) {
	  				if ( next === ("\"") ) {
	  					literal += "\\\"";
	  				} else if ( next === ("\\'") ) {
	  					literal += "'";
	  				} else {
	  					literal += next;
	  				}
	  			} else {
	  				next = parser.matchPattern( lineContinuationPattern );
	  				if ( next ) {
	  					// convert \(newline-like) into a \u escape, which is allowed in JSON
	  					literal += '\\u' + ( '000' + next.charCodeAt(1).toString(16) ).slice( -4 );
	  				} else {
	  					done = true;
	  				}
	  			}
	  		}

	  		literal += '"';

	  		// use JSON.parse to interpret escapes
	  		return JSON.parse( literal );
	  	};
	  }

	  var getSingleQuotedString = makeQuotedStringMatcher( ("\"") );
	  var getDoubleQuotedString = makeQuotedStringMatcher( ("'") );

	  function readStringLiteral ( parser ) {
	  	var start, string;

	  	start = parser.pos;

	  	if ( parser.matchString( '"' ) ) {
	  		string = getDoubleQuotedString( parser );

	  		if ( !parser.matchString( '"' ) ) {
	  			parser.pos = start;
	  			return null;
	  		}

	  		return {
	  			t: STRING_LITERAL,
	  			v: string
	  		};
	  	}

	  	if ( parser.matchString( ("'") ) ) {
	  		string = getSingleQuotedString( parser );

	  		if ( !parser.matchString( ("'") ) ) {
	  			parser.pos = start;
	  			return null;
	  		}

	  		return {
	  			t: STRING_LITERAL,
	  			v: string
	  		};
	  	}

	  	return null;
	  }

	  var namePattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*/;

	  var identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;

	  // http://mathiasbynens.be/notes/javascript-properties
	  // can be any name, string literal, or number literal
	  function readKey ( parser ) {
	  	var token;

	  	if ( token = readStringLiteral( parser ) ) {
	  		return identifier.test( token.v ) ? token.v : '"' + token.v.replace( /"/g, '\\"' ) + '"';
	  	}

	  	if ( token = readNumberLiteral$1( parser ) ) {
	  		return token.v;
	  	}

	  	if ( token = parser.matchPattern( namePattern ) ) {
	  		return token;
	  	}

	  	return null;
	  }

	  function readKeyValuePair ( parser ) {
	  	var start, key, value;

	  	start = parser.pos;

	  	// allow whitespace between '{' and key
	  	parser.allowWhitespace();

	  	var refKey = parser.nextChar() !== '\'' && parser.nextChar() !== '"';

	  	key = readKey( parser );
	  	if ( key === null ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	// allow whitespace between key and ':'
	  	parser.allowWhitespace();

	  	// es2015 shorthand property
	  	if ( refKey && ( parser.nextChar() === ',' || parser.nextChar() === '}' ) ) {
	  		if ( !namePattern.test( key ) ) {
	  			parser.error( ("Expected a valid reference, but found '" + key + "' instead.") );
	  		}

	  		return {
	  			t: KEY_VALUE_PAIR,
	  			k: key,
	  			v: {
	  				t: REFERENCE,
	  				n: key
	  			}
	  		};
	  	}

	  	// next character must be ':'
	  	if ( !parser.matchString( ':' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	// allow whitespace between ':' and value
	  	parser.allowWhitespace();

	  	// next expression must be a, well... expression
	  	value = readExpression( parser );
	  	if ( value === null ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	return {
	  		t: KEY_VALUE_PAIR,
	  		k: key,
	  		v: value
	  	};
	  }

	  function readKeyValuePairs ( parser ) {
	  	var start, pairs, pair, keyValuePairs;

	  	start = parser.pos;

	  	pair = readKeyValuePair( parser );
	  	if ( pair === null ) {
	  		return null;
	  	}

	  	pairs = [ pair ];

	  	if ( parser.matchString( ',' ) ) {
	  		keyValuePairs = readKeyValuePairs( parser );

	  		if ( !keyValuePairs ) {
	  			parser.pos = start;
	  			return null;
	  		}

	  		return pairs.concat( keyValuePairs );
	  	}

	  	return pairs;
	  }

	  function readObjectLiteral ( parser ) {
	  	var start, keyValuePairs;

	  	start = parser.pos;

	  	// allow whitespace
	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '{' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	keyValuePairs = readKeyValuePairs( parser );

	  	// allow whitespace between final value and '}'
	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '}' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	return {
	  		t: OBJECT_LITERAL,
	  		m: keyValuePairs
	  	};
	  }

	  function readExpressionList ( parser ) {
	  	parser.allowWhitespace();

	  	var expr = readExpression( parser );

	  	if ( expr === null ) return null;

	  	var expressions = [ expr ];

	  	// allow whitespace between expression and ','
	  	parser.allowWhitespace();

	  	if ( parser.matchString( ',' ) ) {
	  		var next = readExpressionList( parser );
	  		if ( next === null ) parser.error( expectedExpression );

	  		expressions.push.apply( expressions, next );
	  	}

	  	return expressions;
	  }

	  function readArrayLiteral ( parser ) {
	  	var start, expressionList;

	  	start = parser.pos;

	  	// allow whitespace before '['
	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '[' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	expressionList = readExpressionList( parser );

	  	if ( !parser.matchString( ']' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	return {
	  		t: ARRAY_LITERAL,
	  		m: expressionList
	  	};
	  }

	  function readLiteral ( parser ) {
	  	return readNumberLiteral$1( parser )  ||
	  	       readBooleanLiteral( parser ) ||
	  	       readStringLiteral( parser )  ||
	  	       readObjectLiteral( parser )  ||
	  	       readArrayLiteral( parser )   ||
	  	       readNumberLiteral( parser );
	  }

	  var prefixPattern = /^(?:~\/|(?:\.\.\/)+|\.\/(?:\.\.\/)*|\.)/;
	  var globals;
	  var keywords;
	  // if a reference is a browser global, we don't deference it later, so it needs special treatment
	  globals = /^(?:Array|console|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null|Object|Number|String|Boolean)\b/;

	  // keywords are not valid references, with the exception of `this`
	  keywords = /^(?:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|var|void|while|with)$/;

	  var legalReference = /^(?:[a-zA-Z$_0-9]|\\\.)+(?:(?:\.(?:[a-zA-Z$_0-9]|\\\.)+)|(?:\[[0-9]+\]))*/;
	  var relaxedName = /^[a-zA-Z_$][-\/a-zA-Z_$0-9]*/;
	  var specials = /^@(?:keypath|rootpath|index|key|this|global)/;
	  var specialCall = /^\s*\(/;
	  var spreadPattern = /^\s*\.{3}/;

	  function readReference ( parser ) {
	  	var startPos, prefix, name, global, reference, fullLength, lastDotIndex, spread;

	  	startPos = parser.pos;

	  	name = parser.matchPattern( specials );

	  	if ( name === '@keypath' || name === '@rootpath' ) {
	  		if ( parser.matchPattern( specialCall ) ) {
	  			var ref = readReference( parser );
	  			if ( !ref ) parser.error( ("Expected a valid reference for a keypath expression") );

	  			parser.allowWhitespace();

	  			if ( !parser.matchString( ')' ) ) parser.error( ("Unclosed keypath expression") );
	  			name += "(" + (ref.n) + ")";
	  		}
	  	}

	  	spread = !name && parser.spreadArgs && parser.matchPattern( spreadPattern );

	  	if ( !name ) {
	  		prefix = parser.matchPattern( prefixPattern ) || '';
	  		name = ( !prefix && parser.relaxedNames && parser.matchPattern( relaxedName ) ) ||
	  		       parser.matchPattern( legalReference );

	  		if ( !name && prefix === '.' ) {
	  			prefix = '';
	  			name = '.';
	  		} else if ( !name && prefix ) {
	  			name = prefix;
	  			prefix = '';
	  		}
	  	}

	  	if ( !name ) {
	  		return null;
	  	}

	  	// bug out if it's a keyword (exception for ancestor/restricted refs - see https://github.com/ractivejs/ractive/issues/1497)
	  	if ( !prefix && !parser.relaxedNames && keywords.test( name ) ) {
	  		parser.pos = startPos;
	  		return null;
	  	}

	  	// if this is a browser global, stop here
	  	if ( !prefix && globals.test( name ) ) {
	  		global = globals.exec( name )[0];
	  		parser.pos = startPos + global.length;

	  		return {
	  			t: GLOBAL,
	  			v: ( spread ? '...' : '' ) + global
	  		};
	  	}

	  	fullLength = ( spread ? 3 : 0 ) + ( prefix || '' ).length + name.length;
	  	reference = ( prefix || '' ) + normalise( name );

	  	if ( parser.matchString( '(' ) ) {
	  		// if this is a method invocation (as opposed to a function) we need
	  		// to strip the method name from the reference combo, else the context
	  		// will be wrong
	  		// but only if the reference was actually a member and not a refinement
	  		lastDotIndex = reference.lastIndexOf( '.' );
	  		if ( lastDotIndex !== -1 && name[ name.length - 1 ] !== ']' ) {
	  			var refLength = reference.length;
	  			reference = reference.substr( 0, lastDotIndex );
	  			parser.pos = startPos + (fullLength - ( refLength - lastDotIndex ) );
	  		} else {
	  			parser.pos -= 1;
	  		}
	  	}

	  	return {
	  		t: REFERENCE,
	  		n: ( spread ? '...' : '' ) + reference.replace( /^this\./, './' ).replace( /^this$/, '.' )
	  	};
	  }

	  function readBracketedExpression ( parser ) {
	  	if ( !parser.matchString( '(' ) ) return null;

	  	parser.allowWhitespace();

	  	var expr = readExpression( parser );

	  	if ( !expr ) parser.error( expectedExpression );

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( ')' ) ) parser.error( expectedParen );

	  	return {
	  		t: BRACKETED,
	  		x: expr
	  	};
	  }

	  function readPrimary ( parser ) {
	  	return readLiteral( parser )
	  		|| readReference( parser )
	  		|| readBracketedExpression( parser );
	  }

	  function readRefinement ( parser ) {
	  	// some things call for strict refinement (partial names), meaning no space between reference and refinement
	  	if ( !parser.strictRefinement ) {
	  		parser.allowWhitespace();
	  	}

	  	// "." name
	  	if ( parser.matchString( '.' ) ) {
	  		parser.allowWhitespace();

	  		var name = parser.matchPattern( namePattern );
	  		if ( name ) {
	  			return {
	  				t: REFINEMENT,
	  				n: name
	  			};
	  		}

	  		parser.error( 'Expected a property name' );
	  	}

	  	// "[" expression "]"
	  	if ( parser.matchString( '[' ) ) {
	  		parser.allowWhitespace();

	  		var expr = readExpression( parser );
	  		if ( !expr ) parser.error( expectedExpression );

	  		parser.allowWhitespace();

	  		if ( !parser.matchString( ']' ) ) parser.error( ("Expected ']'") );

	  		return {
	  			t: REFINEMENT,
	  			x: expr
	  		};
	  	}

	  	return null;
	  }

	  function readMemberOrInvocation ( parser ) {
	  	var expression = readPrimary( parser );

	  	if ( !expression ) return null;

	  	while ( expression ) {
	  		var refinement = readRefinement( parser );
	  		if ( refinement ) {
	  			expression = {
	  				t: MEMBER,
	  				x: expression,
	  				r: refinement
	  			};
	  		}

	  		else if ( parser.matchString( '(' ) ) {
	  			parser.allowWhitespace();
	  			var start = parser.spreadArgs;
	  			parser.spreadArgs = true;
	  			var expressionList = readExpressionList( parser );
	  			parser.spreadArgs = start;

	  			parser.allowWhitespace();

	  			if ( !parser.matchString( ')' ) ) {
	  				parser.error( expectedParen );
	  			}

	  			expression = {
	  				t: INVOCATION,
	  				x: expression
	  			};

	  			if ( expressionList ) expression.o = expressionList;
	  		}

	  		else {
	  			break;
	  		}
	  	}

	  	return expression;
	  }

	  var readTypeOf;
	  var makePrefixSequenceMatcher;
	  makePrefixSequenceMatcher = function ( symbol, fallthrough ) {
	  	return function ( parser ) {
	  		var expression;

	  		if ( expression = fallthrough( parser ) ) {
	  			return expression;
	  		}

	  		if ( !parser.matchString( symbol ) ) {
	  			return null;
	  		}

	  		parser.allowWhitespace();

	  		expression = readExpression( parser );
	  		if ( !expression ) {
	  			parser.error( expectedExpression );
	  		}

	  		return {
	  			s: symbol,
	  			o: expression,
	  			t: PREFIX_OPERATOR
	  		};
	  	};
	  };

	  // create all prefix sequence matchers, return readTypeOf
	  (function() {
	  	var i, len, matcher, prefixOperators, fallthrough;

	  	prefixOperators = '! ~ + - typeof'.split( ' ' );

	  	fallthrough = readMemberOrInvocation;
	  	for ( i = 0, len = prefixOperators.length; i < len; i += 1 ) {
	  		matcher = makePrefixSequenceMatcher( prefixOperators[i], fallthrough );
	  		fallthrough = matcher;
	  	}

	  	// typeof operator is higher precedence than multiplication, so provides the
	  	// fallthrough for the multiplication sequence matcher we're about to create
	  	// (we're skipping void and delete)
	  	readTypeOf = fallthrough;
	  }());

	  var readTypeof = readTypeOf;

	  var readLogicalOr;
	  var makeInfixSequenceMatcher;
	  makeInfixSequenceMatcher = function ( symbol, fallthrough ) {
	  	return function ( parser ) {
	  		var start, left, right;

	  		left = fallthrough( parser );
	  		if ( !left ) {
	  			return null;
	  		}

	  		// Loop to handle left-recursion in a case like `a * b * c` and produce
	  		// left association, i.e. `(a * b) * c`.  The matcher can't call itself
	  		// to parse `left` because that would be infinite regress.
	  		while ( true ) {
	  			start = parser.pos;

	  			parser.allowWhitespace();

	  			if ( !parser.matchString( symbol ) ) {
	  				parser.pos = start;
	  				return left;
	  			}

	  			// special case - in operator must not be followed by [a-zA-Z_$0-9]
	  			if ( symbol === 'in' && /[a-zA-Z_$0-9]/.test( parser.remaining().charAt( 0 ) ) ) {
	  				parser.pos = start;
	  				return left;
	  			}

	  			parser.allowWhitespace();

	  			// right operand must also consist of only higher-precedence operators
	  			right = fallthrough( parser );
	  			if ( !right ) {
	  				parser.pos = start;
	  				return left;
	  			}

	  			left = {
	  				t: INFIX_OPERATOR,
	  				s: symbol,
	  				o: [ left, right ]
	  			};

	  			// Loop back around.  If we don't see another occurrence of the symbol,
	  			// we'll return left.
	  		}
	  	};
	  };

	  // create all infix sequence matchers, and return readLogicalOr
	  (function() {
	  	var i, len, matcher, infixOperators, fallthrough;

	  	// All the infix operators on order of precedence (source: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Operator_Precedence)
	  	// Each sequence matcher will initially fall through to its higher precedence
	  	// neighbour, and only attempt to match if one of the higher precedence operators
	  	// (or, ultimately, a literal, reference, or bracketed expression) already matched
	  	infixOperators = '* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||'.split( ' ' );

	  	// A typeof operator is higher precedence than multiplication
	  	fallthrough = readTypeof;
	  	for ( i = 0, len = infixOperators.length; i < len; i += 1 ) {
	  		matcher = makeInfixSequenceMatcher( infixOperators[i], fallthrough );
	  		fallthrough = matcher;
	  	}

	  	// Logical OR is the fallthrough for the conditional matcher
	  	readLogicalOr = fallthrough;
	  }());

	  var readLogicalOr$1 = readLogicalOr;

	  // The conditional operator is the lowest precedence operator, so we start here
	  function getConditional ( parser ) {
	  	var start, expression, ifTrue, ifFalse;

	  	expression = readLogicalOr$1( parser );
	  	if ( !expression ) {
	  		return null;
	  	}

	  	start = parser.pos;

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '?' ) ) {
	  		parser.pos = start;
	  		return expression;
	  	}

	  	parser.allowWhitespace();

	  	ifTrue = readExpression( parser );
	  	if ( !ifTrue ) {
	  		parser.error( expectedExpression );
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( ':' ) ) {
	  		parser.error( 'Expected ":"' );
	  	}

	  	parser.allowWhitespace();

	  	ifFalse = readExpression( parser );
	  	if ( !ifFalse ) {
	  		parser.error( expectedExpression );
	  	}

	  	return {
	  		t: CONDITIONAL,
	  		o: [ expression, ifTrue, ifFalse ]
	  	};
	  }

	  function readExpression ( parser ) {
	  	// The conditional operator is the lowest precedence operator (except yield,
	  	// assignment operators, and commas, none of which are supported), so we
	  	// start there. If it doesn't match, it 'falls through' to progressively
	  	// higher precedence operators, until it eventually matches (or fails to
	  	// match) a 'primary' - a literal or a reference. This way, the abstract syntax
	  	// tree has everything in its proper place, i.e. 2 + 3 * 4 === 14, not 20.
	  	return getConditional( parser );
	  }

	  function flattenExpression ( expression ) {
	  	var refs, count = 0, stringified;

	  	extractRefs( expression, refs = [] );
	  	stringified = stringify( expression );

	  	refs = refs.map( function ( r ) { return r.indexOf( '...' ) === 0 ? r.substr( 3 ) : r; } );

	  	return {
	  		r: refs,
	  		s: getVars(stringified)
	  	};

	  	function getVars(expr) {
	  		var vars = [];
	  		for ( var i = count - 1; i >= 0; i-- ) {
	  			vars.push( ("spread$" + i) );
	  		}
	  		return vars.length ? ("(function(){var " + (vars.join(',')) + ";return(" + expr + ");})()") : expr;
	  	}

	  	function stringify ( node ) {
	  		switch ( node.t ) {
	  			case BOOLEAN_LITERAL:
	  			case GLOBAL:
	  			case NUMBER_LITERAL:
	  			case REGEXP_LITERAL:
	  				return node.v;

	  			case STRING_LITERAL:
	  				return JSON.stringify( String( node.v ) );

	  			case ARRAY_LITERAL:
	  				return '[' + ( node.m ? node.m.map( stringify ).join( ',' ) : '' ) + ']';

	  			case OBJECT_LITERAL:
	  				return '{' + ( node.m ? node.m.map( stringify ).join( ',' ) : '' ) + '}';

	  			case KEY_VALUE_PAIR:
	  				return node.k + ':' + stringify( node.v );

	  			case PREFIX_OPERATOR:
	  				return ( node.s === 'typeof' ? 'typeof ' : node.s ) + stringify( node.o );

	  			case INFIX_OPERATOR:
	  				return stringify( node.o[0] ) + ( node.s.substr( 0, 2 ) === 'in' ? ' ' + node.s + ' ' : node.s ) + stringify( node.o[1] );

	  			case INVOCATION:
	  				if ( node.spread ) {
	  					var id = count++;
	  					return ("(spread$" + id + " = " + (stringify(node.x)) + ").apply(spread$" + id + ", [].concat(" + (node.o ? node.o.map( function ( a ) { return a.n && a.n.indexOf( '...' ) === 0 ? stringify( a ) : '[' + stringify(a) + ']'; } ).join( ',' ) : '') + ") )");
	  				} else {
	  					return stringify( node.x ) + '(' + ( node.o ? node.o.map( stringify ).join( ',' ) : '' ) + ')';
	  				}

	  			case BRACKETED:
	  				return '(' + stringify( node.x ) + ')';

	  			case MEMBER:
	  				return stringify( node.x ) + stringify( node.r );

	  			case REFINEMENT:
	  				return ( node.n ? '.' + node.n : '[' + stringify( node.x ) + ']' );

	  			case CONDITIONAL:
	  				return stringify( node.o[0] ) + '?' + stringify( node.o[1] ) + ':' + stringify( node.o[2] );

	  			case REFERENCE:
	  				return '_' + refs.indexOf( node.n );

	  			default:
	  				throw new Error( 'Expected legal JavaScript' );
	  		}
	  	}
	  }

	  // TODO maybe refactor this?
	  function extractRefs ( node, refs ) {
	  	var i, list;

	  	if ( node.t === REFERENCE ) {
	  		if ( refs.indexOf( node.n ) === -1 ) {
	  			refs.unshift( node.n );
	  		}
	  	}

	  	list = node.o || node.m;
	  	if ( list ) {
	  		if ( isObject( list ) ) {
	  			extractRefs( list, refs );
	  		} else {
	  			i = list.length;
	  			while ( i-- ) {
	  				if ( list[i].n && list[i].n.indexOf('...') === 0 ) {
	  					node.spread = true;
	  				}
	  				extractRefs( list[i], refs );
	  			}
	  		}
	  	}

	  	if ( node.x ) {
	  		extractRefs( node.x, refs );
	  	}

	  	if ( node.r ) {
	  		extractRefs( node.r, refs );
	  	}

	  	if ( node.v ) {
	  		extractRefs( node.v, refs );
	  	}
	  }

	  // simple JSON parser, without the restrictions of JSON parse
	  // (i.e. having to double-quote keys).
	  //
	  // If passed a hash of values as the second argument, ${placeholders}
	  // will be replaced with those values

	  var specials$1 = {
	  	'true': true,
	  	'false': false,
	  	'null': null,
	  	undefined: undefined
	  };

	  var specialsPattern = new RegExp( '^(?:' + Object.keys( specials$1 ).join( '|' ) + ')' );
	  var numberPattern$1 = /^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/;
	  var placeholderPattern = /\$\{([^\}]+)\}/g;
	  var placeholderAtStartPattern = /^\$\{([^\}]+)\}/;
	  var onlyWhitespace = /^\s*$/;

	  var JsonParser = Parser$1.extend({
	  	init: function ( str, options ) {
	  		this.values = options.values;
	  		this.allowWhitespace();
	  	},

	  	postProcess: function ( result ) {
	  		if ( result.length !== 1 || !onlyWhitespace.test( this.leftover ) ) {
	  			return null;
	  		}

	  		return { value: result[0].v };
	  	},

	  	converters: [
	  		function getPlaceholder ( parser ) {
	  			if ( !parser.values ) return null;

	  			var placeholder = parser.matchPattern( placeholderAtStartPattern );

	  			if ( placeholder && ( parser.values.hasOwnProperty( placeholder ) ) ) {
	  				return { v: parser.values[ placeholder ] };
	  			}
	  		},

	  		function getSpecial ( parser ) {
	  			var special = parser.matchPattern( specialsPattern );
	  			if ( special ) return { v: specials$1[ special ] };
	  		},

	  		function getNumber ( parser ) {
	  			var number = parser.matchPattern( numberPattern$1 );
	  			if ( number ) return { v: +number };
	  		},

	  		function getString ( parser ) {
	  			var stringLiteral = readStringLiteral( parser );
	  			var values = parser.values;

	  			if ( stringLiteral && values ) {
	  				return {
	  					v: stringLiteral.v.replace( placeholderPattern, function ( match, $1 ) { return ( $1 in values ? values[ $1 ] : $1 ); } )
	  				};
	  			}

	  			return stringLiteral;
	  		},

	  		function getObject ( parser ) {
	  			if ( !parser.matchString( '{' ) ) return null;

	  			var result = {};

	  			parser.allowWhitespace();

	  			if ( parser.matchString( '}' ) ) {
	  				return { v: result };
	  			}

	  			var pair;
	  			while ( pair = getKeyValuePair( parser ) ) {
	  				result[ pair.key ] = pair.value;

	  				parser.allowWhitespace();

	  				if ( parser.matchString( '}' ) ) {
	  					return { v: result };
	  				}

	  				if ( !parser.matchString( ',' ) ) {
	  					return null;
	  				}
	  			}

	  			return null;
	  		},

	  		function getArray ( parser ) {
	  			if ( !parser.matchString( '[' ) ) return null;

	  			var result = [];

	  			parser.allowWhitespace();

	  			if ( parser.matchString( ']' ) ) {
	  				return { v: result };
	  			}

	  			var valueToken;
	  			while ( valueToken = parser.read() ) {
	  				result.push( valueToken.v );

	  				parser.allowWhitespace();

	  				if ( parser.matchString( ']' ) ) {
	  					return { v: result };
	  				}

	  				if ( !parser.matchString( ',' ) ) {
	  					return null;
	  				}

	  				parser.allowWhitespace();
	  			}

	  			return null;
	  		}
	  	]
	  });

	  function getKeyValuePair ( parser ) {
	  	parser.allowWhitespace();

	  	var key = readKey( parser );

	  	if ( !key ) return null;

	  	var pair = { key: key };

	  	parser.allowWhitespace();
	  	if ( !parser.matchString( ':' ) ) {
	  		return null;
	  	}
	  	parser.allowWhitespace();

	  	var valueToken = parser.read();

	  	if ( !valueToken ) return null;

	  	pair.value = valueToken.v;
	  	return pair;
	  }

	  function parseJSON ( str, values ) {
	  	var parser = new JsonParser( str, { values: values });
	  	return parser.result;
	  }

	  var methodCallPattern = /^([a-zA-Z_$][a-zA-Z_$0-9]*)\(.*\)\s*$/;
	  var ExpressionParser;
	  ExpressionParser = Parser$1.extend({
	  	converters: [ readExpression ],
	  	spreadArgs: true
	  });

	  // TODO clean this up, it's shocking
	  function processDirective ( tokens, parentParser, type ) {
	  	var result,
	  		match,
	  		token,
	  		colonIndex,
	  		directiveName,
	  		directiveArgs,
	  		parsed;

	  	if ( typeof tokens === 'string' ) {
	  		if ( type === DECORATOR || type === TRANSITION ) {
	  			var parser = new ExpressionParser( ("[" + tokens + "]") );
	  			return { a: flattenExpression( parser.result[0] ) };
	  		}

	  		if ( type === EVENT && ( match = methodCallPattern.exec( tokens ) ) ) {
	  			warnOnceIfDebug( ("Unqualified method events are deprecated. Prefix methods with '@this.' to call methods on the current Ractive instance.") );
	  			tokens = "@this." + (match[1]) + "" + (tokens.substr(match[1].length));
	  		}

	  		if ( type === EVENT && ~tokens.indexOf( '(' ) ) {
	  			var parser$1 = new ExpressionParser( '[' + tokens + ']' );
	  			if ( parser$1.result && parser$1.result[0] ) {
	  				if ( parser$1.remaining().length ) {
	  					parentParser.error( ("Invalid input after event expression '" + (parser$1.remaining()) + "'") );
	  				}
	  				return { x: flattenExpression( parser$1.result[0] ) };
	  			}

	  			if ( tokens.indexOf( ':' ) > tokens.indexOf( '(' ) || !~tokens.indexOf( ':' ) ) {
	  				parentParser.error( ("Invalid input in event expression '" + tokens + "'") );
	  			}

	  		}

	  		if ( tokens.indexOf( ':' ) === -1 ) {
	  			return tokens.trim();
	  		}

	  		tokens = [ tokens ];
	  	}

	  	result = {};

	  	directiveName = [];
	  	directiveArgs = [];

	  	if ( tokens ) {
	  		while ( tokens.length ) {
	  			token = tokens.shift();

	  			if ( typeof token === 'string' ) {
	  				colonIndex = token.indexOf( ':' );

	  				if ( colonIndex === -1 ) {
	  					directiveName.push( token );
	  				} else {
	  					// is the colon the first character?
	  					if ( colonIndex ) {
	  						// no
	  						directiveName.push( token.substr( 0, colonIndex ) );
	  					}

	  					// if there is anything after the colon in this token, treat
	  					// it as the first token of the directiveArgs fragment
	  					if ( token.length > colonIndex + 1 ) {
	  						directiveArgs[0] = token.substring( colonIndex + 1 );
	  					}

	  					break;
	  				}
	  			}

	  			else {
	  				directiveName.push( token );
	  			}
	  		}

	  		directiveArgs = directiveArgs.concat( tokens );
	  	}

	  	if ( !directiveName.length ) {
	  		result = '';
	  	} else if ( directiveArgs.length || typeof directiveName !== 'string' ) {
	  		result = {
	  			// TODO is this really necessary? just use the array
	  			n: ( directiveName.length === 1 && typeof directiveName[0] === 'string' ? directiveName[0] : directiveName )
	  		};

	  		if ( directiveArgs.length === 1 && typeof directiveArgs[0] === 'string' ) {
	  			parsed = parseJSON( '[' + directiveArgs[0] + ']' );
	  			result.a = parsed ? parsed.value : [ directiveArgs[0].trim() ];
	  		}

	  		else {
	  			result.d = directiveArgs;
	  		}
	  	} else {
	  		result = directiveName;
	  	}

	  	if ( directiveArgs.length ) {
	  		warnOnceIfDebug( ("Proxy events with arguments are deprecated. You can fire events with arguments using \"@this.fire('eventName', arg1, arg2, ...)\".") );
	  	}

	  	return result;
	  }

	  var attributeNamePattern = /^[^\s"'>\/=]+/;
	  var onPattern = /^on/;
	  var proxyEventPattern = /^on-([a-zA-Z\\*\\.$_][a-zA-Z\\*\\.$_0-9\-]+)$/;
	  var reservedEventNames = /^(?:change|reset|teardown|update|construct|config|init|render|unrender|detach|insert)$/;
	  var decoratorPattern = /^as-([a-z-A-Z][-a-zA-Z_0-9]*)$/;
	  var transitionPattern = /^([a-zA-Z](?:(?!-in-out)[-a-zA-Z_0-9])*)-(in|out|in-out)$/;
	  var directives = {
	  				   'intro-outro': { t: TRANSITION, v: 't0' },
	  				   intro: { t: TRANSITION, v: 't1' },
	  				   outro: { t: TRANSITION, v: 't2' },
	  				   lazy: { t: BINDING_FLAG, v: 'l' },
	  				   twoway: { t: BINDING_FLAG, v: 't' },
	  				   decorator: { t: DECORATOR }
	  				 };
	  var unquotedAttributeValueTextPattern = /^[^\s"'=<>`]+/;
	  function readAttribute ( parser ) {
	  	var attr, name, value, i, nearest, idx;

	  	parser.allowWhitespace();

	  	name = parser.matchPattern( attributeNamePattern );
	  	if ( !name ) {
	  		return null;
	  	}

	  	// check for accidental delimiter consumption e.g. <tag bool{{>attrs}} />
	  	nearest = name.length;
	  	for ( i = 0; i < parser.tags.length; i++ ) {
	  		if ( ~( idx = name.indexOf( parser.tags[ i ].open ) ) ) {
	  			if ( idx < nearest ) nearest = idx;
	  		}
	  	}
	  	if ( nearest < name.length ) {
	  		parser.pos -= name.length - nearest;
	  		name = name.substr( 0, nearest );
	  		return { n: name };
	  	}

	  	attr = { n: name };

	  	value = readAttributeValue( parser );
	  	if ( value != null ) { // not null/undefined
	  		attr.f = value;
	  	}

	  	return attr;
	  }

	  function readAttributeValue ( parser ) {
	  	var start, valueStart, startDepth, value;

	  	start = parser.pos;

	  	// next character must be `=`, `/`, `>` or whitespace
	  	if ( !/[=\/>\s]/.test( parser.nextChar() ) ) {
	  		parser.error( 'Expected `=`, `/`, `>` or whitespace' );
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '=' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	valueStart = parser.pos;
	  	startDepth = parser.sectionDepth;

	  	value = readQuotedAttributeValue( parser, ("'") ) ||
	  			readQuotedAttributeValue( parser, ("\"") ) ||
	  			readUnquotedAttributeValue( parser );

	  	if ( value === null ) {
	  		parser.error( 'Expected valid attribute value' );
	  	}

	  	if ( parser.sectionDepth !== startDepth ) {
	  		parser.pos = valueStart;
	  		parser.error( 'An attribute value must contain as many opening section tags as closing section tags' );
	  	}

	  	if ( !value.length ) {
	  		return '';
	  	}

	  	if ( value.length === 1 && typeof value[0] === 'string' ) {
	  		return decodeCharacterReferences( value[0] );
	  	}

	  	return value;
	  }

	  function readUnquotedAttributeValueToken ( parser ) {
	  	var start, text, haystack, needles, index;

	  	start = parser.pos;

	  	text = parser.matchPattern( unquotedAttributeValueTextPattern );

	  	if ( !text ) {
	  		return null;
	  	}

	  	haystack = text;
	  	needles = parser.tags.map( function ( t ) { return t.open; } ); // TODO refactor... we do this in readText.js as well

	  	if ( ( index = getLowestIndex( haystack, needles ) ) !== -1 ) {
	  		text = text.substr( 0, index );
	  		parser.pos = start + text.length;
	  	}

	  	return text;
	  }

	  function readUnquotedAttributeValue ( parser ) {
	  	var tokens, token;

	  	parser.inAttribute = true;

	  	tokens = [];

	  	token = readMustache( parser ) || readUnquotedAttributeValueToken( parser );
	  	while ( token ) {
	  		tokens.push( token );
	  		token = readMustache( parser ) || readUnquotedAttributeValueToken( parser );
	  	}

	  	if ( !tokens.length ) {
	  		return null;
	  	}

	  	parser.inAttribute = false;
	  	return tokens;
	  }

	  function readQuotedAttributeValue ( parser, quoteMark ) {
	  	var start, tokens, token;

	  	start = parser.pos;

	  	if ( !parser.matchString( quoteMark ) ) {
	  		return null;
	  	}

	  	parser.inAttribute = quoteMark;

	  	tokens = [];

	  	token = readMustache( parser ) || readQuotedStringToken( parser, quoteMark );
	  	while ( token !== null ) {
	  		tokens.push( token );
	  		token = readMustache( parser ) || readQuotedStringToken( parser, quoteMark );
	  	}

	  	if ( !parser.matchString( quoteMark ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.inAttribute = false;

	  	return tokens;
	  }

	  function readQuotedStringToken ( parser, quoteMark ) {
	  	var haystack = parser.remaining();

	  	var needles = parser.tags.map( function ( t ) { return t.open; } ); // TODO refactor... we do this in readText.js as well
	  	needles.push( quoteMark );

	  	var index = getLowestIndex( haystack, needles );

	  	if ( index === -1 ) {
	  		parser.error( 'Quoted attribute value must have a closing quote' );
	  	}

	  	if ( !index ) {
	  		return null;
	  	}

	  	parser.pos += index;
	  	return haystack.substr( 0, index );
	  }

	  function readAttributeOrDirective ( parser ) {
	  		var match,
	  			attribute,
	  		    directive;

	  		attribute = readAttribute( parser );

	  		if ( !attribute ) return null;

	  		// intro, outro, decorator
	  		if ( directive = directives[ attribute.n ] ) {
	  			attribute.t = directive.t;
	  			if ( directive.v ) attribute.v = directive.v;
	  			delete attribute.n; // no name necessary

	  			if ( directive.t === TRANSITION || directive.t === DECORATOR ) attribute.f = processDirective( attribute.f, parser );

	  			if ( directive.t === TRANSITION ) {
	  				warnOnceIfDebug( ("" + (directive.v === 't0' ? 'intro-outro' : directive.v === 't1' ? 'intro' : 'outro') + " is deprecated. To specify tranisitions, use the transition name suffixed with '-in', '-out', or '-in-out' as an attribute. Arguments can be specified in the attribute value as a simple list of expressions without mustaches.") );
	  			} else if ( directive.t === DECORATOR ) {
	  				warnOnceIfDebug( ("decorator is deprecated. To specify decorators, use the decorator name prefixed with 'as-' as an attribute. Arguments can be specified in the attribute value as a simple list of expressions without mustaches.") );
	  			}
	  		}

	  		// decorators
	  		else if ( match = decoratorPattern.exec( attribute.n ) ) {
	  			delete attribute.n;
	  			attribute.t = DECORATOR;
	  			attribute.f = processDirective( attribute.f, parser, DECORATOR );
	  			if ( typeof attribute.f === 'object' ) attribute.f.n = match[1];
	  			else attribute.f = match[1];
	  		}

	  		// transitions
	  		else if ( match = transitionPattern.exec( attribute.n ) ) {
	  			delete attribute.n;
	  			attribute.t = TRANSITION;
	  			attribute.f = processDirective( attribute.f, parser, TRANSITION );
	  			if ( typeof attribute.f === 'object' ) attribute.f.n = match[1];
	  			else attribute.f = match[1];
	  			attribute.v = match[2] === 'in-out' ? 't0' : match[2] === 'in' ? 't1' : 't2';
	  		}

	  		// on-click etc
	  		else if ( match = proxyEventPattern.exec( attribute.n ) ) {
	  			attribute.n = match[1];
	  			attribute.t = EVENT;
	  			attribute.f = processDirective( attribute.f, parser, EVENT );

	  			if ( reservedEventNames.test( attribute.f.n || attribute.f ) ) {
	  				parser.pos -= ( attribute.f.n || attribute.f ).length;
	  				parser.error( 'Cannot use reserved event names (change, reset, teardown, update, construct, config, init, render, unrender, detach, insert)' );
	  			}
	  		}

	  		else {
	  			if ( parser.sanitizeEventAttributes && onPattern.test( attribute.n ) ) {
	  				return { exclude: true };
	  			} else {
	  				attribute.f = attribute.f || ( attribute.f === '' ? '' : 0 );
	  				attribute.t = ATTRIBUTE;
	  			}
	  		}

	  		return attribute;
	  }

	  var delimiterChangeToken = { t: DELIMCHANGE, exclude: true };

	  function readMustache ( parser ) {
	  	var mustache, i;

	  	// If we're inside a <script> or <style> tag, and we're not
	  	// interpolating, bug out
	  	if ( parser.interpolate[ parser.inside ] === false ) {
	  		return null;
	  	}

	  	for ( i = 0; i < parser.tags.length; i += 1 ) {
	  		if ( mustache = readMustacheOfType( parser, parser.tags[i] ) ) {
	  			return mustache;
	  		}
	  	}

	  	if ( parser.inTag && !parser.inAttribute ) {
	  		mustache = readAttributeOrDirective( parser );
	  		if ( mustache ) {
	  			parser.allowWhitespace();
	  			return mustache;
	  		}
	  	}
	  }

	  function readMustacheOfType ( parser, tag ) {
	  	var start, mustache, reader, i;

	  	start = parser.pos;

	  	if ( parser.matchString( '\\' + tag.open ) ) {
	  		if ( start === 0 || parser.str[ start - 1 ] !== '\\' ) {
	  			return tag.open;
	  		}
	  	} else if ( !parser.matchString( tag.open ) ) {
	  		return null;
	  	}

	  	// delimiter change?
	  	if ( mustache = readDelimiterChange( parser ) ) {
	  		// find closing delimiter or abort...
	  		if ( !parser.matchString( tag.close ) ) {
	  			return null;
	  		}

	  		// ...then make the switch
	  		tag.open = mustache[0];
	  		tag.close = mustache[1];
	  		parser.sortMustacheTags();

	  		return delimiterChangeToken;
	  	}

	  	parser.allowWhitespace();

	  	// illegal section closer
	  	if ( parser.matchString( '/' ) ) {
	  		parser.pos -= 1;
	  		var rewind = parser.pos;
	  		if ( !readNumberLiteral( parser ) ) {
	  			parser.pos = rewind - ( tag.close.length );
	  			if ( parser.inAttribute ) {
	  				parser.pos = start;
	  				return null;
	  			} else {
	  				parser.error( 'Attempted to close a section that wasn\'t open' );
	  			}
	  		} else {
	  			parser.pos = rewind;
	  		}
	  	}

	  	for ( i = 0; i < tag.readers.length; i += 1 ) {
	  		reader = tag.readers[i];

	  		if ( mustache = reader( parser, tag ) ) {
	  			if ( tag.isStatic ) {
	  				mustache.s = true; // TODO make this `1` instead - more compact
	  			}

	  			if ( parser.includeLinePositions ) {
	  				mustache.p = parser.getLinePos( start );
	  			}

	  			return mustache;
	  		}
	  	}

	  	parser.pos = start;
	  	return null;
	  }

	  function refineExpression ( expression, mustache ) {
	  	var referenceExpression;

	  	if ( expression ) {
	  		while ( expression.t === BRACKETED && expression.x ) {
	  			expression = expression.x;
	  		}

	  		if ( expression.t === REFERENCE ) {
	  			mustache.r = expression.n;
	  		} else {
	  			if ( referenceExpression = getReferenceExpression( expression ) ) {
	  				mustache.rx = referenceExpression;
	  			} else {
	  				mustache.x = flattenExpression( expression );
	  			}
	  		}

	  		return mustache;
	  	}
	  }

	  // TODO refactor this! it's bewildering
	  function getReferenceExpression ( expression ) {
	  	var members = [], refinement;

	  	while ( expression.t === MEMBER && expression.r.t === REFINEMENT ) {
	  		refinement = expression.r;

	  		if ( refinement.x ) {
	  			if ( refinement.x.t === REFERENCE ) {
	  				members.unshift( refinement.x );
	  			} else {
	  				members.unshift( flattenExpression( refinement.x ) );
	  			}
	  		} else {
	  			members.unshift( refinement.n );
	  		}

	  		expression = expression.x;
	  	}

	  	if ( expression.t !== REFERENCE ) {
	  		return null;
	  	}

	  	return {
	  		r: expression.n,
	  		m: members
	  	};
	  }

	  function readTriple ( parser, tag ) {
	  	var expression = readExpression( parser ), triple;

	  	if ( !expression ) {
	  		return null;
	  	}

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	triple = { t: TRIPLE };
	  	refineExpression( expression, triple ); // TODO handle this differently - it's mysterious

	  	return triple;
	  }

	  function readUnescaped ( parser, tag ) {
	  	var expression, triple;

	  	if ( !parser.matchString( '&' ) ) {
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	expression = readExpression( parser );

	  	if ( !expression ) {
	  		return null;
	  	}

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	triple = { t: TRIPLE };
	  	refineExpression( expression, triple ); // TODO handle this differently - it's mysterious

	  	return triple;
	  }

	  var legalAlias = /^(?:[a-zA-Z$_0-9]|\\\.)+(?:(?:(?:[a-zA-Z$_0-9]|\\\.)+)|(?:\[[0-9]+\]))*/;
	  var asRE = /^as/i;

	  function readAliases( parser ) {
	  	var aliases = [], alias, start = parser.pos;

	  	parser.allowWhitespace();

	  	alias = readAlias( parser );

	  	if ( alias ) {
	  		alias.x = refineExpression( alias.x, {} );
	  		aliases.push( alias );

	  		parser.allowWhitespace();

	  		while ( parser.matchString(',') ) {
	  			alias = readAlias( parser );

	  			if ( !alias ) {
	  				parser.error( 'Expected another alias.' );
	  			}

	  			alias.x = refineExpression( alias.x, {} );
	  			aliases.push( alias );

	  			parser.allowWhitespace();
	  		}

	  		return aliases;
	  	}

	  	parser.pos = start;
	  	return null;
	  }

	  function readAlias( parser ) {
	  	var expr, alias, start = parser.pos;

	  	parser.allowWhitespace();

	  	expr = readExpression( parser, [] );

	  	if ( !expr ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchPattern( asRE ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	alias = parser.matchPattern( legalAlias );

	  	if ( !alias ) {
	  		parser.error( 'Expected a legal alias name.' );
	  	}

	  	return { n: alias, x: expr };
	  }

	  function readPartial ( parser, tag ) {
	  	if ( !parser.matchString( '>' ) ) return null;

	  	parser.allowWhitespace();

	  	// Partial names can include hyphens, so we can't use readExpression
	  	// blindly. Instead, we use the `relaxedNames` flag to indicate that
	  	// `foo-bar` should be read as a single name, rather than 'subtract
	  	// bar from foo'
	  	parser.relaxedNames = parser.strictRefinement = true;
	  	var expression = readExpression( parser );
	  	parser.relaxedNames = parser.strictRefinement = false;

	  	if ( !expression ) return null;

	  	var partial = { t: PARTIAL };
	  	refineExpression( expression, partial ); // TODO...

	  	parser.allowWhitespace();

	  	// check for alias context e.g. `{{>foo bar as bat, bip as bop}}` then
	  	// turn it into `{{#with bar as bat, bip as bop}}{{>foo}}{{/with}}`
	  	var aliases = readAliases( parser );
	  	if ( aliases ) {
	  		partial = {
	  			t: ALIAS,
	  			z: aliases,
	  			f: [ partial ]
	  		};
	  	}

	  	// otherwise check for literal context e.g. `{{>foo bar}}` then
	  	// turn it into `{{#with bar}}{{>foo}}{{/with}}`
	  	else {
	  		var context = readExpression( parser );
	  		if ( context) {
	  			partial = {
	  				t: SECTION,
	  				n: SECTION_WITH,
	  				f: [ partial ]
	  			};

	  			refineExpression( context, partial );
	  		}
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	return partial;
	  }

	  function readComment ( parser, tag ) {
	  	var index;

	  	if ( !parser.matchString( '!' ) ) {
	  		return null;
	  	}

	  	index = parser.remaining().indexOf( tag.close );

	  	if ( index !== -1 ) {
	  		parser.pos += index + tag.close.length;
	  		return { t: COMMENT };
	  	}
	  }

	  function readExpressionOrReference ( parser, expectedFollowers ) {
	  	var start, expression, i;

	  	start = parser.pos;
	  	expression = readExpression( parser );

	  	if ( !expression ) {
	  		// valid reference but invalid expression e.g. `{{new}}`?
	  		var ref = parser.matchPattern( /^(\w+)/ );
	  		if ( ref ) {
	  			return {
	  				t: REFERENCE,
	  				n: ref
	  			};
	  		}

	  		return null;
	  	}

	  	for ( i = 0; i < expectedFollowers.length; i += 1 ) {
	  		if ( parser.remaining().substr( 0, expectedFollowers[i].length ) === expectedFollowers[i] ) {
	  			return expression;
	  		}
	  	}

	  	parser.pos = start;
	  	return readReference( parser );
	  }

	  function readInterpolator ( parser, tag ) {
	  	var start, expression, interpolator, err;

	  	start = parser.pos;

	  	// TODO would be good for perf if we could do away with the try-catch
	  	try {
	  		expression = readExpressionOrReference( parser, [ tag.close ]);
	  	} catch ( e ) {
	  		err = e;
	  	}

	  	if ( !expression ) {
	  		if ( parser.str.charAt( start ) === '!' ) {
	  			// special case - comment
	  			parser.pos = start;
	  			return null;
	  		}

	  		if ( err ) {
	  			throw err;
	  		}
	  	}

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "' after reference") );

	  		if ( !expression ) {
	  			// special case - comment
	  			if ( parser.nextChar() === '!' ) {
	  				return null;
	  			}

	  			parser.error( ("Expected expression or legal reference") );
	  		}
	  	}

	  	interpolator = { t: INTERPOLATOR };
	  	refineExpression( expression, interpolator ); // TODO handle this differently - it's mysterious

	  	return interpolator;
	  }

	  var yieldPattern = /^yield\s*/;

	  function readYielder ( parser, tag ) {
	  	if ( !parser.matchPattern( yieldPattern ) ) return null;

	  	var name = parser.matchPattern( /^[a-zA-Z_$][a-zA-Z_$0-9\-]*/ );

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("expected legal partial name") );
	  	}

	  	var yielder = { t: YIELDER };
	  	if ( name ) yielder.n = name;

	  	return yielder;
	  }

	  function readClosing ( parser, tag ) {
	  	var start, remaining, index, closing;

	  	start = parser.pos;

	  	if ( !parser.matchString( tag.open ) ) {
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( '/' ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	remaining = parser.remaining();
	  	index = remaining.indexOf( tag.close );

	  	if ( index !== -1 ) {
	  		closing = {
	  			t: CLOSING,
	  			r: remaining.substr( 0, index ).split( ' ' )[0]
	  		};

	  		parser.pos += index;

	  		if ( !parser.matchString( tag.close ) ) {
	  			parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  		}

	  		return closing;
	  	}

	  	parser.pos = start;
	  	return null;
	  }

	  var elsePattern = /^\s*else\s*/;

	  function readElse ( parser, tag ) {
	  	var start = parser.pos;

	  	if ( !parser.matchString( tag.open ) ) {
	  		return null;
	  	}

	  	if ( !parser.matchPattern( elsePattern ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	return {
	  		t: ELSE
	  	};
	  }

	  var elsePattern$1 = /^\s*elseif\s+/;

	  function readElseIf ( parser, tag ) {
	  	var start = parser.pos;

	  	if ( !parser.matchString( tag.open ) ) {
	  		return null;
	  	}

	  	if ( !parser.matchPattern( elsePattern$1 ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	var expression = readExpression( parser );

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	return {
	  		t: ELSEIF,
	  		x: expression
	  	};
	  }

	  var handlebarsBlockCodes = {
	  	'each':    SECTION_EACH,
	  	'if':      SECTION_IF,
	  	'with':    SECTION_IF_WITH,
	  	'unless':  SECTION_UNLESS
	  };

	  var indexRefPattern = /^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/;
	  var keyIndexRefPattern = /^\s*,\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/;
	  var handlebarsBlockPattern = new RegExp( '^(' + Object.keys( handlebarsBlockCodes ).join( '|' ) + ')\\b' );
	  function readSection ( parser, tag ) {
	  	var start, expression, section, child, children, hasElse, block, unlessBlock, conditions, closed, i, expectedClose, aliasOnly = false;

	  	start = parser.pos;

	  	if ( parser.matchString( '^' ) ) {
	  		section = { t: SECTION, f: [], n: SECTION_UNLESS };
	  	} else if ( parser.matchString( '#' ) ) {
	  		section = { t: SECTION, f: [] };

	  		if ( parser.matchString( 'partial' ) ) {
	  			parser.pos = start - parser.standardDelimiters[0].length;
	  			parser.error( 'Partial definitions can only be at the top level of the template, or immediately inside components' );
	  		}

	  		if ( block = parser.matchPattern( handlebarsBlockPattern ) ) {
	  			expectedClose = block;
	  			section.n = handlebarsBlockCodes[ block ];
	  		}
	  	} else {
	  		return null;
	  	}

	  	parser.allowWhitespace();

	  	if ( block === 'with' ) {
	  		var aliases = readAliases( parser );
	  		if ( aliases ) {
	  			aliasOnly = true;
	  			section.z = aliases;
	  			section.t = ALIAS;
	  		}
	  	} else if ( block === 'each' ) {
	  		var alias = readAlias( parser );
	  		if ( alias ) {
	  			section.z = [ { n: alias.n, x: { r: '.' } } ];
	  			expression = alias.x;
	  		}
	  	}

	  	if ( !aliasOnly ) {
	  		if ( !expression ) expression = readExpression( parser );

	  		if ( !expression ) {
	  			parser.error( 'Expected expression' );
	  		}

	  		// optional index and key references
	  		if ( i = parser.matchPattern( indexRefPattern ) ) {
	  			var extra;

	  			if ( extra = parser.matchPattern( keyIndexRefPattern ) ) {
	  				section.i = i + ',' + extra;
	  			} else {
	  				section.i = i;
	  			}
	  		}
	  	}

	  	parser.allowWhitespace();

	  	if ( !parser.matchString( tag.close ) ) {
	  		parser.error( ("Expected closing delimiter '" + (tag.close) + "'") );
	  	}

	  	parser.sectionDepth += 1;
	  	children = section.f;

	  	conditions = [];

	  	do {
	  		if ( child = readClosing( parser, tag ) ) {
	  			if ( expectedClose && child.r !== expectedClose ) {
	  				parser.error( ("Expected " + (tag.open) + "/" + expectedClose + "" + (tag.close)) );
	  			}

	  			parser.sectionDepth -= 1;
	  			closed = true;
	  		}

	  		else if ( !aliasOnly && ( child = readElseIf( parser, tag ) ) ) {
	  			if ( section.n === SECTION_UNLESS ) {
	  				parser.error( '{{else}} not allowed in {{#unless}}' );
	  			}

	  			if ( hasElse ) {
	  				parser.error( 'illegal {{elseif...}} after {{else}}' );
	  			}

	  			if ( !unlessBlock ) {
	  				unlessBlock = [];
	  			}

	  			var mustache = {
	  				t: SECTION,
	  				n: SECTION_IF,
	  				f: children = []
	  			};
	  			refineExpression( child.x, mustache );

	  			unlessBlock.push( mustache );
	  		}

	  		else if ( !aliasOnly && ( child = readElse( parser, tag ) ) ) {
	  			if ( section.n === SECTION_UNLESS ) {
	  				parser.error( '{{else}} not allowed in {{#unless}}' );
	  			}

	  			if ( hasElse ) {
	  				parser.error( 'there can only be one {{else}} block, at the end of a section' );
	  			}

	  			hasElse = true;

	  			// use an unless block if there's no elseif
	  			if ( !unlessBlock ) {
	  				unlessBlock = [];
	  			}

	  			unlessBlock.push({
	  				t: SECTION,
	  				n: SECTION_UNLESS,
	  				f: children = []
	  			});
	  		}

	  		else {
	  			child = parser.read( READERS );

	  			if ( !child ) {
	  				break;
	  			}

	  			children.push( child );
	  		}
	  	} while ( !closed );

	  	if ( unlessBlock ) {
	  		section.l = unlessBlock;
	  	}

	  	if ( !aliasOnly ) {
	  		refineExpression( expression, section );
	  	}

	  	// TODO if a section is empty it should be discarded. Don't do
	  	// that here though - we need to clean everything up first, as
	  	// it may contain removeable whitespace. As a temporary measure,
	  	// to pass the existing tests, remove empty `f` arrays
	  	if ( !section.f.length ) {
	  		delete section.f;
	  	}

	  	return section;
	  }

	  var OPEN_COMMENT = '<!--';
	  var CLOSE_COMMENT = '-->';
	  function readHtmlComment ( parser ) {
	  	var start, content, remaining, endIndex, comment;

	  	start = parser.pos;

	  	if ( !parser.matchString( OPEN_COMMENT ) ) {
	  		return null;
	  	}

	  	remaining = parser.remaining();
	  	endIndex = remaining.indexOf( CLOSE_COMMENT );

	  	if ( endIndex === -1 ) {
	  		parser.error( 'Illegal HTML - expected closing comment sequence (\'-->\')' );
	  	}

	  	content = remaining.substr( 0, endIndex );
	  	parser.pos += endIndex + 3;

	  	comment = {
	  		t: COMMENT,
	  		c: content
	  	};

	  	if ( parser.includeLinePositions ) {
	  		comment.p = parser.getLinePos( start );
	  	}

	  	return comment;
	  }

	  var leadingLinebreak = /^[ \t\f\r\n]*\r?\n/;
	  var trailingLinebreak = /\r?\n[ \t\f\r\n]*$/;
	  function stripStandalones ( items ) {
	  	var i, current, backOne, backTwo, lastSectionItem;

	  	for ( i=1; i<items.length; i+=1 ) {
	  		current = items[i];
	  		backOne = items[i-1];
	  		backTwo = items[i-2];

	  		// if we're at the end of a [text][comment][text] sequence...
	  		if ( isString( current ) && isComment( backOne ) && isString( backTwo ) ) {

	  			// ... and the comment is a standalone (i.e. line breaks either side)...
	  			if ( trailingLinebreak.test( backTwo ) && leadingLinebreak.test( current ) ) {

	  				// ... then we want to remove the whitespace after the first line break
	  				items[i-2] = backTwo.replace( trailingLinebreak, '\n' );

	  				// and the leading line break of the second text token
	  				items[i] = current.replace( leadingLinebreak, '' );
	  			}
	  		}

	  		// if the current item is a section, and it is preceded by a linebreak, and
	  		// its first item is a linebreak...
	  		if ( isSection( current ) && isString( backOne ) ) {
	  			if ( trailingLinebreak.test( backOne ) && isString( current.f[0] ) && leadingLinebreak.test( current.f[0] ) ) {
	  				items[i-1] = backOne.replace( trailingLinebreak, '\n' );
	  				current.f[0] = current.f[0].replace( leadingLinebreak, '' );
	  			}
	  		}

	  		// if the last item was a section, and it is followed by a linebreak, and
	  		// its last item is a linebreak...
	  		if ( isString( current ) && isSection( backOne ) ) {
	  			lastSectionItem = lastItem( backOne.f );

	  			if ( isString( lastSectionItem ) && trailingLinebreak.test( lastSectionItem ) && leadingLinebreak.test( current ) ) {
	  				backOne.f[ backOne.f.length - 1 ] = lastSectionItem.replace( trailingLinebreak, '\n' );
	  				items[i] = current.replace( leadingLinebreak, '' );
	  			}
	  		}
	  	}

	  	return items;
	  }

	  function isString ( item ) {
	  	return typeof item === 'string';
	  }

	  function isComment ( item ) {
	  	return item.t === COMMENT || item.t === DELIMCHANGE;
	  }

	  function isSection ( item ) {
	  	return ( item.t === SECTION || item.t === INVERTED ) && item.f;
	  }

	  function trimWhitespace ( items, leadingPattern, trailingPattern ) {
	  	var item;

	  	if ( leadingPattern ) {
	  		item = items[0];
	  		if ( typeof item === 'string' ) {
	  			item = item.replace( leadingPattern, '' );

	  			if ( !item ) {
	  				items.shift();
	  			} else {
	  				items[0] = item;
	  			}
	  		}
	  	}

	  	if ( trailingPattern ) {
	  		item = lastItem( items );
	  		if ( typeof item === 'string' ) {
	  			item = item.replace( trailingPattern, '' );

	  			if ( !item ) {
	  				items.pop();
	  			} else {
	  				items[ items.length - 1 ] = item;
	  			}
	  		}
	  	}
	  }

	  var contiguousWhitespace = /[ \t\f\r\n]+/g;
	  var preserveWhitespaceElements = /^(?:pre|script|style|textarea)$/i;
	  var leadingWhitespace$1 = /^[ \t\f\r\n]+/;
	  var trailingWhitespace = /[ \t\f\r\n]+$/;
	  var leadingNewLine = /^(?:\r\n|\r|\n)/;
	  var trailingNewLine = /(?:\r\n|\r|\n)$/;

	  function cleanup ( items, stripComments, preserveWhitespace, removeLeadingWhitespace, removeTrailingWhitespace ) {
	  	if ( typeof items === 'string' ) return;

	  	var i,
	  		item,
	  		previousItem,
	  		nextItem,
	  		preserveWhitespaceInsideFragment,
	  		removeLeadingWhitespaceInsideFragment,
	  		removeTrailingWhitespaceInsideFragment,
	  		key;

	  	// First pass - remove standalones and comments etc
	  	stripStandalones( items );

	  	i = items.length;
	  	while ( i-- ) {
	  		item = items[i];

	  		// Remove delimiter changes, unsafe elements etc
	  		if ( item.exclude ) {
	  			items.splice( i, 1 );
	  		}

	  		// Remove comments, unless we want to keep them
	  		else if ( stripComments && item.t === COMMENT ) {
	  			items.splice( i, 1 );
	  		}
	  	}

	  	// If necessary, remove leading and trailing whitespace
	  	trimWhitespace( items, removeLeadingWhitespace ? leadingWhitespace$1 : null, removeTrailingWhitespace ? trailingWhitespace : null );

	  	i = items.length;
	  	while ( i-- ) {
	  		item = items[i];

	  		// Recurse
	  		if ( item.f ) {
	  			var isPreserveWhitespaceElement = item.t === ELEMENT && preserveWhitespaceElements.test( item.e );
	  			preserveWhitespaceInsideFragment = preserveWhitespace || isPreserveWhitespaceElement;

	  			if ( !preserveWhitespace && isPreserveWhitespaceElement ) {
	  				trimWhitespace( item.f, leadingNewLine, trailingNewLine );
	  			}

	  			if ( !preserveWhitespaceInsideFragment ) {
	  				previousItem = items[ i - 1 ];
	  				nextItem = items[ i + 1 ];

	  				// if the previous item was a text item with trailing whitespace,
	  				// remove leading whitespace inside the fragment
	  				if ( !previousItem || ( typeof previousItem === 'string' && trailingWhitespace.test( previousItem ) ) ) {
	  					removeLeadingWhitespaceInsideFragment = true;
	  				}

	  				// and vice versa
	  				if ( !nextItem || ( typeof nextItem === 'string' && leadingWhitespace$1.test( nextItem ) ) ) {
	  					removeTrailingWhitespaceInsideFragment = true;
	  				}
	  			}

	  			cleanup( item.f, stripComments, preserveWhitespaceInsideFragment, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespaceInsideFragment );

	  			// clean up name templates (events, decorators, etc)
	  			if ( isArray( item.f.n ) ) {
	  				cleanup( item.f.n, stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespace );
	  			}

	  			// clean up arg templates (events, decorators, etc)
	  			if ( isArray( item.f.d ) ) {
	  				cleanup( item.f.d, stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespace );
	  			}
	  		}

	  		// Split if-else blocks into two (an if, and an unless)
	  		if ( item.l ) {
	  			cleanup( item.l, stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespaceInsideFragment );

	  			item.l.forEach( function ( s ) { return s.l = 1; } );
	  			item.l.unshift( i + 1, 0 );
	  			items.splice.apply( items, item.l );
	  			delete item.l; // TODO would be nice if there was a way around this
	  		}

	  		// Clean up element attributes
	  		if ( item.a ) {
	  			for ( key in item.a ) {
	  				if ( item.a.hasOwnProperty( key ) && typeof item.a[ key ] !== 'string' ) {
	  					cleanup( item.a[ key ], stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespaceInsideFragment );
	  				}
	  			}
	  		}
	  		// Clean up conditional attributes
	  		if ( item.m ) {
	  			cleanup( item.m, stripComments, preserveWhitespace, removeLeadingWhitespaceInsideFragment, removeTrailingWhitespaceInsideFragment );
	  			if ( item.m.length < 1 ) delete item.m;
	  		}
	  	}

	  	// final pass - fuse text nodes together
	  	i = items.length;
	  	while ( i-- ) {
	  		if ( typeof items[i] === 'string' ) {
	  			if ( typeof items[i+1] === 'string' ) {
	  				items[i] = items[i] + items[i+1];
	  				items.splice( i + 1, 1 );
	  			}

	  			if ( !preserveWhitespace ) {
	  				items[i] = items[i].replace( contiguousWhitespace, ' ' );
	  			}

	  			if ( items[i] === '' ) {
	  				items.splice( i, 1 );
	  			}
	  		}
	  	}
	  }

	  var closingTagPattern = /^([a-zA-Z]{1,}:?[a-zA-Z0-9\-]*)\s*\>/;

	  function readClosingTag ( parser ) {
	  	var start, tag;

	  	start = parser.pos;

	  	// are we looking at a closing tag?
	  	if ( !parser.matchString( '</' ) ) {
	  		return null;
	  	}

	  	if ( tag = parser.matchPattern( closingTagPattern ) ) {
	  		if ( parser.inside && tag !== parser.inside ) {
	  			parser.pos = start;
	  			return null;
	  		}

	  		return {
	  			t: CLOSING_TAG,
	  			e: tag
	  		};
	  	}

	  	// We have an illegal closing tag, report it
	  	parser.pos -= 2;
	  	parser.error( 'Illegal closing tag' );
	  }

	  var tagNamePattern = /^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/;
	  var validTagNameFollower = /^[\s\n\/>]/;
	  var exclude = { exclude: true };
	  var disallowedContents;
	  // based on http://developers.whatwg.org/syntax.html#syntax-tag-omission
	  disallowedContents = {
	  	li: [ 'li' ],
	  	dt: [ 'dt', 'dd' ],
	  	dd: [ 'dt', 'dd' ],
	  	p: 'address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul'.split( ' ' ),
	  	rt: [ 'rt', 'rp' ],
	  	rp: [ 'rt', 'rp' ],
	  	optgroup: [ 'optgroup' ],
	  	option: [ 'option', 'optgroup' ],
	  	thead: [ 'tbody', 'tfoot' ],
	  	tbody: [ 'tbody', 'tfoot' ],
	  	tfoot: [ 'tbody' ],
	  	tr: [ 'tr', 'tbody' ],
	  	td: [ 'td', 'th', 'tr' ],
	  	th: [ 'td', 'th', 'tr' ]
	  };

	  function readElement ( parser ) {
	  	var start,
	  		element,
	  		attribute,
	  		selfClosing,
	  		children,
	  		partials,
	  		hasPartials,
	  		child,
	  		closed,
	  		pos,
	  		remaining,
	  		closingTag;

	  	start = parser.pos;

	  	if ( parser.inside || parser.inAttribute ) {
	  		return null;
	  	}

	  	if ( !parser.matchString( '<' ) ) {
	  		return null;
	  	}

	  	// if this is a closing tag, abort straight away
	  	if ( parser.nextChar() === '/' ) {
	  		return null;
	  	}

	  	element = {};
	  	if ( parser.includeLinePositions ) {
	  		element.p = parser.getLinePos( start );
	  	}

	  	if ( parser.matchString( '!' ) ) {
	  		element.t = DOCTYPE;
	  		if ( !parser.matchPattern( /^doctype/i ) ) {
	  			parser.error( 'Expected DOCTYPE declaration' );
	  		}

	  		element.a = parser.matchPattern( /^(.+?)>/ );
	  		return element;
	  	}

	  	element.t = ELEMENT;

	  	// element name
	  	element.e = parser.matchPattern( tagNamePattern );
	  	if ( !element.e ) {
	  		return null;
	  	}

	  	// next character must be whitespace, closing solidus or '>'
	  	if ( !validTagNameFollower.test( parser.nextChar() ) ) {
	  		parser.error( 'Illegal tag name' );
	  	}

	  	parser.allowWhitespace();

	  	parser.inTag = true;

	  	// directives and attributes
	  	while ( attribute = readMustache( parser ) ) {
	  		if ( attribute !== false ) {
	  			if ( !element.m ) element.m = [];
	  			element.m.push( attribute );
	  		}

	  		parser.allowWhitespace();
	  	}

	  	parser.inTag = false;

	  	// allow whitespace before closing solidus
	  	parser.allowWhitespace();

	  	// self-closing solidus?
	  	if ( parser.matchString( '/' ) ) {
	  		selfClosing = true;
	  	}

	  	// closing angle bracket
	  	if ( !parser.matchString( '>' ) ) {
	  		return null;
	  	}

	  	var lowerCaseName = element.e.toLowerCase();
	  	var preserveWhitespace = parser.preserveWhitespace;

	  	if ( !selfClosing && !voidElementNames.test( element.e ) ) {
	  		parser.elementStack.push( lowerCaseName );

	  		// Special case - if we open a script element, further tags should
	  		// be ignored unless they're a closing script element
	  		if ( lowerCaseName === 'script' || lowerCaseName === 'style' || lowerCaseName === 'textarea' ) {
	  			parser.inside = lowerCaseName;
	  		}

	  		children = [];
	  		partials = create( null );

	  		do {
	  			pos = parser.pos;
	  			remaining = parser.remaining();

	  			if ( !remaining ) {
	  				parser.error( ("Missing end " + (parser.elementStack.length > 1 ? 'tags' : 'tag') + " (" + (parser.elementStack.reverse().map( function ( x ) { return ("</" + x + ">"); } ).join( '' )) + ")") );
	  			}

	  			// if for example we're in an <li> element, and we see another
	  			// <li> tag, close the first so they become siblings
	  			if ( !canContain( lowerCaseName, remaining ) ) {
	  				closed = true;
	  			}

	  			// closing tag
	  			else if ( closingTag = readClosingTag( parser ) ) {
	  				closed = true;

	  				var closingTagName = closingTag.e.toLowerCase();

	  				// if this *isn't* the closing tag for the current element...
	  				if ( closingTagName !== lowerCaseName ) {
	  					// rewind parser
	  					parser.pos = pos;

	  					// if it doesn't close a parent tag, error
	  					if ( !~parser.elementStack.indexOf( closingTagName ) ) {
	  						var errorMessage = 'Unexpected closing tag';

	  						// add additional help for void elements, since component names
	  						// might clash with them
	  						if ( voidElementNames.test( closingTagName ) ) {
	  							errorMessage += " (<" + closingTagName + "> is a void element - it cannot contain children)";
	  						}

	  						parser.error( errorMessage );
	  					}
	  				}
	  			}

	  			// implicit close by closing section tag. TODO clean this up
	  			else if ( child = readClosing( parser, { open: parser.standardDelimiters[0], close: parser.standardDelimiters[1] } ) ) {
	  				closed = true;
	  				parser.pos = pos;
	  			}

	  			else {
	  				if ( child = parser.read( PARTIAL_READERS ) ) {
	  					if ( partials[ child.n ] ) {
	  						parser.pos = pos;
	  						parser.error( 'Duplicate partial definition' );
	  					}

	  					cleanup( child.f, parser.stripComments, preserveWhitespace, !preserveWhitespace, !preserveWhitespace );

	  					partials[ child.n ] = child.f;
	  					hasPartials = true;
	  				}

	  				else {
	  					if ( child = parser.read( READERS ) ) {
	  						children.push( child );
	  					} else {
	  						closed = true;
	  					}
	  				}
	  			}
	  		} while ( !closed );

	  		if ( children.length ) {
	  			element.f = children;
	  		}

	  		if ( hasPartials ) {
	  			element.p = partials;
	  		}

	  		parser.elementStack.pop();
	  	}

	  	parser.inside = null;

	  	if ( parser.sanitizeElements && parser.sanitizeElements.indexOf( lowerCaseName ) !== -1 ) {
	  		return exclude;
	  	}

	  	return element;
	  }

	  function canContain ( name, remaining ) {
	  	var match, disallowed;

	  	match = /^<([a-zA-Z][a-zA-Z0-9]*)/.exec( remaining );
	  	disallowed = disallowedContents[ name ];

	  	if ( !match || !disallowed ) {
	  		return true;
	  	}

	  	return !~disallowed.indexOf( match[1].toLowerCase() );
	  }

	  function readText ( parser ) {
	  	var index, remaining, disallowed, barrier;

	  	remaining = parser.remaining();

	  	if ( parser.textOnlyMode ) {
	  		disallowed = parser.tags.map( function ( t ) { return t.open; } );
	  		disallowed = disallowed.concat( parser.tags.map( function ( t ) { return '\\' + t.open; } ) );

	  		index = getLowestIndex( remaining, disallowed );
	  	} else {
	  		barrier = parser.inside ? '</' + parser.inside : '<';

	  		if ( parser.inside && !parser.interpolate[ parser.inside ] ) {
	  			index = remaining.indexOf( barrier );
	  		} else {
	  			disallowed = parser.tags.map( function ( t ) { return t.open; } );
	  			disallowed = disallowed.concat( parser.tags.map( function ( t ) { return '\\' + t.open; } ) );

	  			// http://developers.whatwg.org/syntax.html#syntax-attributes
	  			if ( parser.inAttribute === true ) {
	  				// we're inside an unquoted attribute value
	  				disallowed.push( ("\""), ("'"), ("="), ("<"), (">"), '`' );
	  			} else if ( parser.inAttribute ) {
	  				// quoted attribute value
	  				disallowed.push( parser.inAttribute );
	  			} else {
	  				disallowed.push( barrier );
	  			}

	  			index = getLowestIndex( remaining, disallowed );
	  		}
	  	}

	  	if ( !index ) {
	  		return null;
	  	}

	  	if ( index === -1 ) {
	  		index = remaining.length;
	  	}

	  	parser.pos += index;

	  	if ( ( parser.inside && parser.inside !== 'textarea' ) || parser.textOnlyMode ) {
	  		return remaining.substr( 0, index );
	  	} else {
	  		return decodeCharacterReferences( remaining.substr( 0, index ) );
	  	}
	  }

	  var startPattern = /^<!--\s*/;
	  var namePattern$1 = /s*>\s*([a-zA-Z_$][-a-zA-Z_$0-9]*)\s*/;
	  var finishPattern = /\s*-->/;

	  function readPartialDefinitionComment ( parser ) {
	  	var start = parser.pos;
	  	var open = parser.standardDelimiters[0];
	  	var close = parser.standardDelimiters[1];

	  	if ( !parser.matchPattern( startPattern ) || !parser.matchString( open ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	var name = parser.matchPattern( namePattern$1 );

	  	warnOnceIfDebug( ("Inline partial comments are deprecated.\nUse this...\n  {{#partial " + name + "}} ... {{/partial}}\n\n...instead of this:\n  <!-- {{>" + name + "}} --> ... <!-- {{/" + name + "}} -->'") );

	  	// make sure the rest of the comment is in the correct place
	  	if ( !parser.matchString( close ) || !parser.matchPattern( finishPattern ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	var content = [];
	  	var closed;

	  	var endPattern = new RegExp('^<!--\\s*' + escapeRegExp( open ) + '\\s*\\/\\s*' + name + '\\s*' + escapeRegExp( close ) + '\\s*-->');

	  	do {
	  		if ( parser.matchPattern( endPattern ) ) {
	  			closed = true;
	  		}

	  		else {
	  			var child = parser.read( READERS );
	  			if ( !child ) {
	  				parser.error( ("expected closing comment ('<!-- " + open + "/" + name + "" + close + " -->')") );
	  			}

	  			content.push( child );
	  		}
	  	} while ( !closed );

	  	return {
	  		t: INLINE_PARTIAL,
	  		f: content,
	  		n: name
	  	};
	  }

	  var partialDefinitionSectionPattern = /^#\s*partial\s+/;

	  function readPartialDefinitionSection ( parser ) {
	  	var start, name, content, child, closed;

	  	start = parser.pos;

	  	var delimiters = parser.standardDelimiters;

	  	if ( !parser.matchString( delimiters[0] ) ) {
	  		return null;
	  	}

	  	if ( !parser.matchPattern( partialDefinitionSectionPattern ) ) {
	  		parser.pos = start;
	  		return null;
	  	}

	  	name = parser.matchPattern( /^[a-zA-Z_$][a-zA-Z_$0-9\-\/]*/ );

	  	if ( !name ) {
	  		parser.error( 'expected legal partial name' );
	  	}

	  	if ( !parser.matchString( delimiters[1] ) ) {
	  		parser.error( ("Expected closing delimiter '" + (delimiters[1]) + "'") );
	  	}

	  	content = [];

	  	do {
	  		// TODO clean this up
	  		if ( child = readClosing( parser, { open: parser.standardDelimiters[0], close: parser.standardDelimiters[1] }) ) {
	  			if ( !child.r === 'partial' ) {
	  				parser.error( ("Expected " + (delimiters[0]) + "/partial" + (delimiters[1])) );
	  			}

	  			closed = true;
	  		}

	  		else {
	  			child = parser.read( READERS );

	  			if ( !child ) {
	  				parser.error( ("Expected " + (delimiters[0]) + "/partial" + (delimiters[1])) );
	  			}

	  			content.push( child );
	  		}
	  	} while ( !closed );

	  	return {
	  		t: INLINE_PARTIAL,
	  		n: name,
	  		f: content
	  	};
	  }

	  function readTemplate ( parser ) {
	  	var fragment = [];
	  	var partials = create( null );
	  	var hasPartials = false;

	  	var preserveWhitespace = parser.preserveWhitespace;

	  	while ( parser.pos < parser.str.length ) {
	  		var pos = parser.pos, item, partial;

	  		if ( partial = parser.read( PARTIAL_READERS ) ) {
	  			if ( partials[ partial.n ] ) {
	  				parser.pos = pos;
	  				parser.error( 'Duplicated partial definition' );
	  			}

	  			cleanup( partial.f, parser.stripComments, preserveWhitespace, !preserveWhitespace, !preserveWhitespace );

	  			partials[ partial.n ] = partial.f;
	  			hasPartials = true;
	  		} else if ( item = parser.read( READERS ) ) {
	  			fragment.push( item );
	  		} else  {
	  			parser.error( 'Unexpected template content' );
	  		}
	  	}

	  	var result = {
	  		v: TEMPLATE_VERSION,
	  		t: fragment
	  	};

	  	if ( hasPartials ) {
	  		result.p = partials;
	  	}

	  	return result;
	  }

	  function insertExpressions ( obj, expr ) {

	  	Object.keys( obj ).forEach( function ( key ) {
	  		if  ( isExpression( key, obj ) ) return addTo( obj, expr );

	  		var ref = obj[ key ];
	  		if ( hasChildren( ref ) ) insertExpressions( ref, expr );
	   	});
	  }

	  function isExpression( key, obj ) {
	  	return key === 's' && isArray( obj.r );
	  }

	  function addTo( obj, expr ) {
	  	var s = obj.s, r = obj.r;
	  	if ( !expr[ s ] ) expr[ s ] = fromExpression( s, r.length );
	  }

	  function hasChildren( ref ) {
	  	return isArray( ref ) || isObject( ref );
	  }

	  // See https://github.com/ractivejs/template-spec for information
	  // about the Ractive template specification

	  var STANDARD_READERS = [ readPartial, readUnescaped, readSection, readYielder, readInterpolator, readComment ];
	  var TRIPLE_READERS = [ readTriple ];
	  var STATIC_READERS = [ readUnescaped, readSection, readInterpolator ]; // TODO does it make sense to have a static section?

	  var StandardParser;

	  function parse ( template, options ) {
	  	return new StandardParser( template, options || {} ).result;
	  }

	  parse.computedStrings = function( computed ) {
	  	if ( !computed ) return [];

	  	Object.keys( computed ).forEach( function ( key ) {
	  		var value = computed[ key ];
	  		if ( typeof value === 'string' ) {
	  			computed[ key ] = fromComputationString( value );
	  		}
	  	});
	  };


	  var READERS = [ readMustache, readHtmlComment, readElement, readText ];
	  var PARTIAL_READERS = [ readPartialDefinitionComment, readPartialDefinitionSection ];

	  StandardParser = Parser$1.extend({
	  	init: function ( str, options ) {
	  		var tripleDelimiters = options.tripleDelimiters || [ '{{{', '}}}' ],
	  			staticDelimiters = options.staticDelimiters || [ '[[', ']]' ],
	  			staticTripleDelimiters = options.staticTripleDelimiters || [ '[[[', ']]]' ];

	  		this.standardDelimiters = options.delimiters || [ '{{', '}}' ];

	  		this.tags = [
	  			{ isStatic: false, isTriple: false, open: this.standardDelimiters[0], close: this.standardDelimiters[1], readers: STANDARD_READERS },
	  			{ isStatic: false, isTriple: true,  open: tripleDelimiters[0],        close: tripleDelimiters[1],        readers: TRIPLE_READERS },
	  			{ isStatic: true,  isTriple: false, open: staticDelimiters[0],        close: staticDelimiters[1],        readers: STATIC_READERS },
	  			{ isStatic: true,  isTriple: true,  open: staticTripleDelimiters[0],  close: staticTripleDelimiters[1],  readers: TRIPLE_READERS }
	  		];

	  		this.sortMustacheTags();

	  		this.sectionDepth = 0;
	  		this.elementStack = [];

	  		this.interpolate = {
	  			script: !options.interpolate || options.interpolate.script !== false,
	  			style: !options.interpolate || options.interpolate.style !== false,
	  			textarea: true
	  		};

	  		if ( options.sanitize === true ) {
	  			options.sanitize = {
	  				// blacklist from https://code.google.com/p/google-caja/source/browse/trunk/src/com/google/caja/lang/html/html4-elements-whitelist.json
	  				elements: 'applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title'.split( ' ' ),
	  				eventAttributes: true
	  			};
	  		}

	  		this.stripComments = options.stripComments !== false;
	  		this.preserveWhitespace = options.preserveWhitespace;
	  		this.sanitizeElements = options.sanitize && options.sanitize.elements;
	  		this.sanitizeEventAttributes = options.sanitize && options.sanitize.eventAttributes;
	  		this.includeLinePositions = options.includeLinePositions;
	  		this.textOnlyMode = options.textOnlyMode;
	  		this.csp = options.csp;
	  	},

	  	postProcess: function ( result ) {
	  		// special case - empty string
	  		if ( !result.length ) {
	  			return { t: [], v: TEMPLATE_VERSION };
	  		}

	  		if ( this.sectionDepth > 0 ) {
	  			this.error( 'A section was left open' );
	  		}

	  		cleanup( result[0].t, this.stripComments, this.preserveWhitespace, !this.preserveWhitespace, !this.preserveWhitespace );

	  		if ( this.csp !== false ) {
	  			var expr = {};
	  			insertExpressions( result[0].t, expr );
	  			if ( Object.keys( expr ).length ) result[0].e = expr;
	  		}

	  		return result[0];
	  	},

	  	converters: [
	  		readTemplate
	  	],

	  	sortMustacheTags: function () {
	  		// Sort in order of descending opening delimiter length (longer first),
	  		// to protect against opening delimiters being substrings of each other
	  		this.tags.sort( function ( a, b ) {
	  			return b.open.length - a.open.length;
	  		});
	  	}
	  });

	  var parseOptions = [
	  	'delimiters',
	  	'tripleDelimiters',
	  	'staticDelimiters',
	  	'staticTripleDelimiters',
	  	'csp',
	  	'interpolate',
	  	'preserveWhitespace',
	  	'sanitize',
	  	'stripComments'
	  ];

	  var TEMPLATE_INSTRUCTIONS = "Either preparse or use a ractive runtime source that includes the parser. ";

	  var COMPUTATION_INSTRUCTIONS = "Either use:\n\n\tRactive.parse.computedStrings( component.computed )\n\nat build time to pre-convert the strings to functions, or use functions instead of strings in computed properties.";


	  function throwNoParse ( method, error, instructions ) {
	  	if ( !method ) {
	  		fatal( ("Missing Ractive.parse - cannot parse " + error + ". " + instructions) );
	  	}
	  }

	  function createFunction ( body, length ) {
	  	throwNoParse( fromExpression, 'new expression function', TEMPLATE_INSTRUCTIONS );
	  	return fromExpression( body, length );
	  }

	  function createFunctionFromString ( str, bindTo ) {
	  	throwNoParse( fromComputationString, 'compution string "${str}"', COMPUTATION_INSTRUCTIONS );
	  	return fromComputationString( str, bindTo );
	  }

	  var parser = {

	  	fromId: function ( id, options ) {
	  		if ( !doc ) {
	  			if ( options && options.noThrow ) { return; }
	  			throw new Error( ("Cannot retrieve template #" + id + " as Ractive is not running in a browser.") );
	  		}

	  		if ( id ) id = id.replace( /^#/, '' );

	  		var template;

	  		if ( !( template = doc.getElementById( id ) )) {
	  			if ( options && options.noThrow ) { return; }
	  			throw new Error( ("Could not find template element with id #" + id) );
	  		}

	  		if ( template.tagName.toUpperCase() !== 'SCRIPT' ) {
	  			if ( options && options.noThrow ) { return; }
	  			throw new Error( ("Template element with id #" + id + ", must be a <script> element") );
	  		}

	  		return ( 'textContent' in template ? template.textContent : template.innerHTML );

	  	},

	  	isParsed: function ( template) {
	  		return !( typeof template === 'string' );
	  	},

	  	getParseOptions: function ( ractive ) {
	  		// Could be Ractive or a Component
	  		if ( ractive.defaults ) { ractive = ractive.defaults; }

	  		return parseOptions.reduce( function ( val, key ) {
	  			val[ key ] = ractive[ key ];
	  			return val;
	  		}, {});
	  	},

	  	parse: function ( template, options ) {
	  		throwNoParse( parse, 'template', TEMPLATE_INSTRUCTIONS );
	  		var parsed = parse( template, options );
	  		addFunctions( parsed );
	  		return parsed;
	  	},

	  	parseFor: function( template, ractive ) {
	  		return this.parse( template, this.getParseOptions( ractive ) );
	  	}
	  };

	  var templateConfigurator = {
	  	name: 'template',

	  	extend: function ( Parent, proto, options ) {
	  		// only assign if exists
	  		if ( 'template' in options ) {
	  			var template = options.template;

	  			if ( typeof template === 'function' ) {
	  				proto.template = template;
	  			} else {
	  				proto.template = parseTemplate( template, proto );
	  			}
	  		}
	  	},

	  	init: function ( Parent, ractive, options ) {
	  		// TODO because of prototypal inheritance, we might just be able to use
	  		// ractive.template, and not bother passing through the Parent object.
	  		// At present that breaks the test mocks' expectations
	  		var template = 'template' in options ? options.template : Parent.prototype.template;
	  		template = template || { v: TEMPLATE_VERSION, t: [] };

	  		if ( typeof template === 'function' ) {
	  			var fn = template;
	  			template = getDynamicTemplate( ractive, fn );

	  			ractive._config.template = {
	  				fn: fn,
	  				result: template
	  			};
	  		}

	  		template = parseTemplate( template, ractive );

	  		// TODO the naming of this is confusing - ractive.template refers to [...],
	  		// but Component.prototype.template refers to {v:1,t:[],p:[]}...
	  		// it's unnecessary, because the developer never needs to access
	  		// ractive.template
	  		ractive.template = template.t;

	  		if ( template.p ) {
	  			extendPartials( ractive.partials, template.p );
	  		}
	  	},

	  	reset: function ( ractive ) {
	  		var result = resetValue( ractive );

	  		if ( result ) {
	  			var parsed = parseTemplate( result, ractive );

	  			ractive.template = parsed.t;
	  			extendPartials( ractive.partials, parsed.p, true );

	  			return true;
	  		}
	  	}
	  };

	  function resetValue ( ractive ) {
	  	var initial = ractive._config.template;

	  	// If this isn't a dynamic template, there's nothing to do
	  	if ( !initial || !initial.fn ) {
	  		return;
	  	}

	  	var result = getDynamicTemplate( ractive, initial.fn );

	  	// TODO deep equality check to prevent unnecessary re-rendering
	  	// in the case of already-parsed templates
	  	if ( result !== initial.result ) {
	  		initial.result = result;
	  		return result;
	  	}
	  }

	  function getDynamicTemplate ( ractive, fn ) {
	  	return fn.call( ractive, {
	  		fromId: parser.fromId,
	  		isParsed: parser.isParsed,
	  		parse: function ( template, options ) {
	  			if ( options === void 0 ) options = parser.getParseOptions( ractive );

	  			return parser.parse( template, options );
	  		}
	  	});
	  }

	  function parseTemplate ( template, ractive ) {
	  	if ( typeof template === 'string' ) {
	  		// parse will validate and add expression functions
	  		template = parseAsString( template, ractive );
	  	}
	  	else {
	  		// need to validate and add exp for already parsed template
	  		validate$1( template );
	  		addFunctions( template );
	  	}

	  	return template;
	  }

	  function parseAsString ( template, ractive ) {
	  	// ID of an element containing the template?
	  	if ( template[0] === '#' ) {
	  		template = parser.fromId( template );
	  	}

	  	return parser.parseFor( template, ractive );
	  }

	  function validate$1( template ) {

	  	// Check that the template even exists
	  	if ( template == undefined ) {
	  		throw new Error( ("The template cannot be " + template + ".") );
	  	}

	  	// Check the parsed template has a version at all
	  	else if ( typeof template.v !== 'number' ) {
	  		throw new Error( 'The template parser was passed a non-string template, but the template doesn\'t have a version.  Make sure you\'re passing in the template you think you are.' );
	  	}

	  	// Check we're using the correct version
	  	else if ( template.v !== TEMPLATE_VERSION ) {
	  		throw new Error( ("Mismatched template version (expected " + TEMPLATE_VERSION + ", got " + (template.v) + ") Please ensure you are using the latest version of Ractive.js in your build process as well as in your app") );
	  	}
	  }

	  function extendPartials ( existingPartials, newPartials, overwrite ) {
	  	if ( !newPartials ) return;

	  	// TODO there's an ambiguity here - we need to overwrite in the `reset()`
	  	// case, but not initially...

	  	for ( var key in newPartials ) {
	  		if ( overwrite || !existingPartials.hasOwnProperty( key ) ) {
	  			existingPartials[ key ] = newPartials[ key ];
	  		}
	  	}
	  }

	  var registryNames = [
	  	'adaptors',
	  	'components',
	  	'computed',
	  	'decorators',
	  	'easing',
	  	'events',
	  	'interpolators',
	  	'partials',
	  	'transitions'
	  ];

	  var Registry = function Registry ( name, useDefaults ) {
	  	this.name = name;
	  	this.useDefaults = useDefaults;
	  };

	  Registry.prototype.extend = function extend ( Parent, proto, options ) {
	  	this.configure(
	  		this.useDefaults ? Parent.defaults : Parent,
	  		this.useDefaults ? proto : proto.constructor,
	  		options );
	  };

	  Registry.prototype.init = function init () {
	  	// noop
	  };

	  Registry.prototype.configure = function configure ( Parent, target, options ) {
	  	var name = this.name;
	  	var option = options[ name ];

	  	var registry = create( Parent[name] );

	  	for ( var key in option ) {
	  		registry[ key ] = option[ key ];
	  	}

	  	target[ name ] = registry;
	  };

	  Registry.prototype.reset = function reset ( ractive ) {
	  	var registry = ractive[ this.name ];
	  	var changed = false;

	  	Object.keys( registry ).forEach( function ( key ) {
	  		var item = registry[ key ];
	  			
	  		if ( item._fn ) {
	  			if ( item._fn.isOwner ) {
	  				registry[key] = item._fn;
	  			} else {
	  				delete registry[key];
	  			}
	  			changed = true;
	  		}
	  	});

	  	return changed;
	  };

	  var registries = registryNames.map( function ( name ) { return new Registry( name, name === 'computed' ); } );

	  function wrap ( parent, name, method ) {
	  	if ( !/_super/.test( method ) ) return method;

	  	function wrapper () {
	  		var superMethod = getSuperMethod( wrapper._parent, name );
	  		var hasSuper = '_super' in this;
	  		var oldSuper = this._super;

	  		this._super = superMethod;

	  		var result = method.apply( this, arguments );

	  		if ( hasSuper ) {
	  			this._super = oldSuper;
	  		} else {
	  			delete this._super;
	  		}

	  		return result;
	  	}

	  	wrapper._parent = parent;
	  	wrapper._method = method;

	  	return wrapper;
	  }

	  function getSuperMethod ( parent, name ) {
	  	if ( name in parent ) {
	  		var value = parent[ name ];

	  		return typeof value === 'function' ?
	  			value :
	  			function () { return value; };
	  	}

	  	return noop;
	  }

	  function getMessage( deprecated, correct, isError ) {
	  	return "options." + deprecated + " has been deprecated in favour of options." + correct + "."
	  		+ ( isError ? (" You cannot specify both options, please use options." + correct + ".") : '' );
	  }

	  function deprecateOption ( options, deprecatedOption, correct ) {
	  	if ( deprecatedOption in options ) {
	  		if( !( correct in options ) ) {
	  			warnIfDebug( getMessage( deprecatedOption, correct ) );
	  			options[ correct ] = options[ deprecatedOption ];
	  		} else {
	  			throw new Error( getMessage( deprecatedOption, correct, true ) );
	  		}
	  	}
	  }

	  function deprecate ( options ) {
	  	deprecateOption( options, 'beforeInit', 'onconstruct' );
	  	deprecateOption( options, 'init', 'onrender' );
	  	deprecateOption( options, 'complete', 'oncomplete' );
	  	deprecateOption( options, 'eventDefinitions', 'events' );

	  	// Using extend with Component instead of options,
	  	// like Human.extend( Spider ) means adaptors as a registry
	  	// gets copied to options. So we have to check if actually an array
	  	if ( isArray( options.adaptors ) ) {
	  		deprecateOption( options, 'adaptors', 'adapt' );
	  	}
	  }

	  var custom = {
	  	adapt: adaptConfigurator,
	  	css: cssConfigurator,
	  	data: dataConfigurator,
	  	template: templateConfigurator
	  };

	  var defaultKeys = Object.keys( defaults );

	  var isStandardKey = makeObj( defaultKeys.filter( function ( key ) { return !custom[ key ]; } ) );

	  // blacklisted keys that we don't double extend
	  var isBlacklisted = makeObj( defaultKeys.concat( registries.map( function ( r ) { return r.name; } ) ) );

	  var order = [].concat(
	  	defaultKeys.filter( function ( key ) { return !registries[ key ] && !custom[ key ]; } ),
	  	registries,
	  	//custom.data,
	  	custom.template,
	  	custom.css
	  );

	  var config = {
	  	extend: function ( Parent, proto, options ) { return configure( 'extend', Parent, proto, options ); },

	  	init: function ( Parent, ractive, options ) { return configure( 'init', Parent, ractive, options ); },

	  	reset: function ( ractive ) {
	  		return order.filter( function ( c ) {
	  			return c.reset && c.reset( ractive );
	  		}).map( function ( c ) { return c.name; } );
	  	},

	  	// this defines the order. TODO this isn't used anywhere in the codebase,
	  	// only in the test suite - should get rid of it
	  	order: order
	  };

	  function configure ( method, Parent, target, options ) {
	  	deprecate( options );

	  	for ( var key in options ) {
	  		if ( isStandardKey.hasOwnProperty( key ) ) {
	  			var value = options[ key ];

	  			// warn the developer if they passed a function and ignore its value

	  			// NOTE: we allow some functions on "el" because we duck type element lists
	  			// and some libraries or ef'ed-up virtual browsers (phantomJS) return a
	  			// function object as the result of querySelector methods
	  			if ( key !== 'el' && typeof value === 'function' ) {
	  				warnIfDebug( ("" + key + " is a Ractive option that does not expect a function and will be ignored"),
	  					method === 'init' ? target : null );
	  			}
	  			else {
	  				target[ key ] = value;
	  			}
	  		}
	  	}

	  	// disallow combination of `append` and `enhance`
	  	if ( options.append && options.enhance ) {
	  		throw new Error( 'Cannot use append and enhance at the same time' );
	  	}

	  	registries.forEach( function ( registry ) {
	  		registry[ method ]( Parent, target, options );
	  	});

	  	adaptConfigurator[ method ]( Parent, target, options );
	  	templateConfigurator[ method ]( Parent, target, options );
	  	cssConfigurator[ method ]( Parent, target, options );

	  	extendOtherMethods( Parent.prototype, target, options );
	  }

	  function extendOtherMethods ( parent, target, options ) {
	  	for ( var key in options ) {
	  		if ( !isBlacklisted[ key ] && options.hasOwnProperty( key ) ) {
	  			var member = options[ key ];

	  			// if this is a method that overwrites a method, wrap it:
	  			if ( typeof member === 'function' ) {
	  				member = wrap( parent, key, member );
	  			}

	  			target[ key ] = member;
	  		}
	  	}
	  }

	  function makeObj ( array ) {
	  	var obj = {};
	  	array.forEach( function ( x ) { return obj[x] = true; } );
	  	return obj;
	  }

	  var shouldRerender = [ 'template', 'partials', 'components', 'decorators', 'events' ];

	  var completeHook$1 = new Hook( 'complete' );
	  var resetHook = new Hook( 'reset' );
	  var renderHook$1 = new Hook( 'render' );
	  var unrenderHook = new Hook( 'unrender' );

	  function Ractive$reset ( data ) {
	  	data = data || {};

	  	if ( typeof data !== 'object' ) {
	  		throw new Error( 'The reset method takes either no arguments, or an object containing new data' );
	  	}

	  	// TEMP need to tidy this up
	  	data = dataConfigurator.init( this.constructor, this, { data: data });

	  	var promise = runloop.start( this, true );

	  	// If the root object is wrapped, try and use the wrapper's reset value
	  	var wrapper = this.viewmodel.wrapper;
	  	if ( wrapper && wrapper.reset ) {
	  		if ( wrapper.reset( data ) === false ) {
	  			// reset was rejected, we need to replace the object
	  			this.viewmodel.set( data );
	  		}
	  	} else {
	  		this.viewmodel.set( data );
	  	}

	  	// reset config items and track if need to rerender
	  	var changes = config.reset( this );
	  	var rerender;

	  	var i = changes.length;
	  	while ( i-- ) {
	  		if ( shouldRerender.indexOf( changes[i] ) > -1 ) {
	  			rerender = true;
	  			break;
	  		}
	  	}

	  	if ( rerender ) {
	  		unrenderHook.fire( this );
	  		this.fragment.resetTemplate( this.template );
	  		renderHook$1.fire( this );
	  		completeHook$1.fire( this );
	  	}

	  	runloop.end();

	  	resetHook.fire( this, data );

	  	return promise;
	  }

	  function collect( source, name, attr, dest ) {
	  	source.forEach( function ( item ) {
	  		// queue to rerender if the item is a partial and the current name matches
	  		if ( item.type === PARTIAL && ( item.refName ===  name || item.name === name ) ) {
	  			item.inAttribute = attr;
	  			dest.push( item );
	  			return; // go no further
	  		}

	  		// if it has a fragment, process its items
	  		if ( item.fragment ) {
	  			collect( item.fragment.iterations || item.fragment.items, name, attr, dest );
	  		}

	  		// or if it is itself a fragment, process its items
	  		else if ( isArray( item.items ) ) {
	  			collect( item.items, name, attr, dest );
	  		}

	  		// or if it is a component, step in and process its items
	  		else if ( item.type === COMPONENT && item.instance ) {
	  			// ...unless the partial is shadowed
	  			if ( item.instance.partials[ name ] ) return;
	  			collect( item.instance.fragment.items, name, attr, dest );
	  		}

	  		// if the item is an element, process its attributes too
	  		if ( item.type === ELEMENT ) {
	  			if ( isArray( item.attributes ) ) {
	  				collect( item.attributes, name, true, dest );
	  			}
	  		}
	  	});
	  }

	  function forceResetTemplate ( partial ) {
	  	partial.forceResetTemplate();
	  }

	  function resetPartial ( name, partial ) {
	  	var collection = [];
	  	collect( this.fragment.items, name, false, collection );

	  	var promise = runloop.start( this, true );

	  	this.partials[ name ] = partial;
	  	collection.forEach( forceResetTemplate );

	  	runloop.end();

	  	return promise;
	  }

	  var Item = function Item ( options ) {
	  	this.parentFragment = options.parentFragment;
	  	this.ractive = options.parentFragment.ractive;

	  	this.template = options.template;
	  	this.index = options.index;
	  	this.type = options.template.t;

	  	this.dirty = false;
	  };

	  Item.prototype.bubble = function bubble () {
	  	if ( !this.dirty ) {
	  		this.dirty = true;
	  		this.parentFragment.bubble();
	  	}
	  };

	  Item.prototype.destroyed = function destroyed () {};

	  Item.prototype.find = function find () {
	  	return null;
	  };

	  Item.prototype.findAll = function findAll () {
	  	// noop
	  };

	  Item.prototype.findComponent = function findComponent () {
	  	return null;
	  };

	  Item.prototype.findAllComponents = function findAllComponents () {
	  	// noop;
	  };

	  Item.prototype.findNextNode = function findNextNode () {
	  	return this.parentFragment.findNextNode( this );
	  };

	  Item.prototype.shuffled = function shuffled () {
	  	if ( this.fragment ) this.fragment.shuffled();
	  };

	  Item.prototype.valueOf = function valueOf () {
	  	return this.toString();
	  };

	  var ComputationChild = (function (Model) {
	  	function ComputationChild () {
	  		Model.apply(this, arguments);
	  	}

	  	ComputationChild.prototype = Object.create( Model && Model.prototype );
	  	ComputationChild.prototype.constructor = ComputationChild;

	  	ComputationChild.prototype.get = function get ( shouldCapture ) {
	  		if ( shouldCapture ) capture( this );

	  		var parentValue = this.parent.get();
	  		return parentValue ? parentValue[ this.key ] : undefined;
	  	};

	  	ComputationChild.prototype.handleChange = function handleChange$1 () {
	  		this.dirty = true;

	  		this.deps.forEach( handleChange );
	  		this.children.forEach( handleChange );
	  		this.clearUnresolveds(); // TODO is this necessary?
	  	};

	  	ComputationChild.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ComputationChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	return ComputationChild;
	  }(Model));

	  function createResolver ( proxy, ref, index ) {
	  	var resolver = proxy.fragment.resolve( ref, function ( model ) {
	  		removeFromArray( proxy.resolvers, resolver );
	  		proxy.models[ index ] = model;
	  		proxy.bubble();
	  	});

	  	proxy.resolvers.push( resolver );
	  }

	  var ExpressionProxy = (function (Model) {
	  	function ExpressionProxy ( fragment, template ) {
	  		var this$1 = this;

	  		Model.call( this, fragment.ractive.viewmodel, null );

	  		this.fragment = fragment;
	  		this.template = template;

	  		this.isReadonly = true;
	  		this.dirty = true;

	  		this.fn = getFunction( template.s, template.r.length );

	  		this.resolvers = [];
	  		this.models = this.template.r.map( function ( ref, index ) {
	  			var model = resolveReference( this$1.fragment, ref );

	  			if ( !model ) {
	  				createResolver( this$1, ref, index );
	  			}

	  			return model;
	  		});

	  		this.shuffle = undefined;

	  		this.bubble();
	  	}

	  	ExpressionProxy.prototype = Object.create( Model && Model.prototype );
	  	ExpressionProxy.prototype.constructor = ExpressionProxy;

	  	ExpressionProxy.prototype.bubble = function bubble ( actuallyChanged ) {
	  		// refresh the keypath
	  		if ( actuallyChanged === void 0 ) actuallyChanged = true;

	  		if ( this.registered ) delete this.root.expressions[ this.keypath ];
	  		this.keypath = undefined;

	  		if ( actuallyChanged ) {
	  			this.dirty = true;
	  			this.handleChange();
	  		}
	  	};

	  	ExpressionProxy.prototype.get = function get ( shouldCapture ) {
	  		if ( shouldCapture ) capture( this );

	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			this.value = this.getValue();
	  			this.adapt();
	  		}

	  		return shouldCapture && this.wrapper ? this.wrapper.value : this.value;
	  	};

	  	ExpressionProxy.prototype.getKeypath = function getKeypath () {
	  		var this$1 = this;

	  		if ( !this.template ) return '@undefined';
	  		if ( !this.keypath ) {
	  			this.keypath = '@' + this.template.s.replace( /_(\d+)/g, function ( match, i ) {
	  				if ( i >= this$1.models.length ) return match;

	  				var model = this$1.models[i];
	  				return model ? model.getKeypath() : '@undefined';
	  			});

	  			this.root.expressions[ this.keypath ] = this;
	  			this.registered = true;
	  		}

	  		return this.keypath;
	  	};

	  	ExpressionProxy.prototype.getValue = function getValue () {
	  		var this$1 = this;

	  		startCapturing();
	  		var result;

	  		try {
	  			var params = this.models.map( function ( m ) { return m ? m.get( true ) : undefined; } );
	  			result = this.fn.apply( this.fragment.ractive, params );
	  		} catch ( err ) {
	  			warnIfDebug( ("Failed to compute " + (this.getKeypath()) + ": " + (err.message || err)) );
	  		}

	  		var dependencies = stopCapturing();
	  		if ( this.dependencies ) this.dependencies.forEach( function ( d ) { return d.unregister( this$1 ); } );
	  		this.dependencies = dependencies;
	  		this.dependencies.forEach( function ( d ) { return d.register( this$1 ); } );

	  		return result;
	  	};

	  	ExpressionProxy.prototype.handleChange = function handleChange$1 () {
	  		this.dirty = true;

	  		this.links.forEach( marked );
	  		this.deps.forEach( handleChange );
	  		this.children.forEach( handleChange );

	  		this.clearUnresolveds();
	  	};

	  	ExpressionProxy.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ComputationChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	ExpressionProxy.prototype.mark = function mark () {
	  		this.handleChange();
	  	};

	  	ExpressionProxy.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  		var idx = this.models.indexOf( previous );

	  		if ( ~idx ) {
	  			next = rebindMatch( this.template.r[idx], next, previous );
	  			if ( next !== previous ) {
	  				previous.unregister( this );
	  				this.models.splice( idx, 1, next );
	  				// TODO: set up a resolver if there is no next?
	  				if ( next ) next.addShuffleRegister( this, 'mark' );
	  			}
	  		}
	  		this.bubble( !safe );
	  	};

	  	ExpressionProxy.prototype.retrieve = function retrieve () {
	  		return this.get();
	  	};

	  	ExpressionProxy.prototype.teardown = function teardown () {
	  		var this$1 = this;

	  		this.unbind();
	  		this.fragment = undefined;
	  		if ( this.dependencies ) this.dependencies.forEach( function ( d ) { return d.unregister( this$1 ); } );
	  		Model.prototype.teardown.call(this);
	  	};

	  	ExpressionProxy.prototype.unregister = function unregister( dep ) {
	  		Model.prototype.unregister.call( this, dep );
	  		if ( !this.deps.length ) this.teardown();
	  	};

	  	ExpressionProxy.prototype.unbind = function unbind$1 () {
	  		this.resolvers.forEach( unbind );
	  	};

	  	return ExpressionProxy;
	  }(Model));

	  var ReferenceExpressionChild = (function (Model) {
	  	function ReferenceExpressionChild ( parent, key ) {
	  		Model.call ( this, parent, key );
	  	}

	  	ReferenceExpressionChild.prototype = Object.create( Model && Model.prototype );
	  	ReferenceExpressionChild.prototype.constructor = ReferenceExpressionChild;

	  	ReferenceExpressionChild.prototype.applyValue = function applyValue ( value ) {
	  		if ( isEqual( value, this.value ) ) return;

	  		var parent = this.parent, keys = [ this.key ];
	  		while ( parent ) {
	  			if ( parent.base ) {
	  				var target = parent.model.joinAll( keys );
	  				target.applyValue( value );
	  				break;
	  			}

	  			keys.unshift( parent.key );

	  			parent = parent.parent;
	  		}
	  	};

	  	ReferenceExpressionChild.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ReferenceExpressionChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	ReferenceExpressionChild.prototype.retrieve = function retrieve () {
	  		var parent = this.parent.get();
	  		return parent && this.key in parent ? parent[ this.key ] : undefined;
	  	};

	  	return ReferenceExpressionChild;
	  }(Model));

	  var ReferenceExpressionProxy = (function (Model) {
	  	function ReferenceExpressionProxy ( fragment, template ) {
	  		var this$1 = this;

	  		Model.call( this, null, null );
	  		this.dirty = true;
	  		this.root = fragment.ractive.viewmodel;
	  		this.template = template;

	  		this.resolvers = [];

	  		this.base = resolve$2( fragment, template );
	  		var baseResolver;

	  		if ( !this.base ) {
	  			baseResolver = fragment.resolve( template.r, function ( model ) {
	  				this$1.base = model;
	  				this$1.bubble();

	  				removeFromArray( this$1.resolvers, baseResolver );
	  			});

	  			this.resolvers.push( baseResolver );
	  		}

	  		var intermediary = this.intermediary = {
	  			handleChange: function () { return this$1.handleChange(); },
	  			rebinding: function ( next, previous ) {
	  				if ( previous === this$1.base ) {
	  					next = rebindMatch( template, next, previous );
	  					if ( next !== this$1.base ) {
	  						this$1.base.unregister( intermediary );
	  						this$1.base = next;
	  						// TODO: if there is no next, set up a resolver?
	  					}
	  				} else {
	  					var idx = this$1.members.indexOf( previous );
	  					if ( ~idx ) {
	  						// only direct references will rebind... expressions handle themselves
	  						next = rebindMatch( template.m[idx].n, next, previous );
	  						if ( next !== this$1.members[idx] ) {
	  							this$1.members.splice( idx, 1, next );
	  							// TODO: if there is no next, set up a resolver?
	  						}
	  					}
	  				}

	  				if ( next !== previous ) previous.unregister( intermediary );
	  				if ( next ) next.addShuffleTask( function () { return next.register( intermediary ); } );

	  				this$1.bubble();
	  			}
	  		};

	  		this.members = template.m.map( function ( template, i ) {
	  			if ( typeof template === 'string' ) {
	  				return { get: function () { return template; } };
	  			}

	  			var model;
	  			var resolver;

	  			if ( template.t === REFERENCE ) {
	  				model = resolveReference( fragment, template.n );

	  				if ( model ) {
	  					model.register( intermediary );
	  				} else {
	  					resolver = fragment.resolve( template.n, function ( model ) {
	  						this$1.members[i] = model;

	  						model.register( intermediary );
	  						this$1.handleChange();

	  						removeFromArray( this$1.resolvers, resolver );
	  					});

	  					this$1.resolvers.push( resolver );
	  				}

	  				return model;
	  			}

	  			model = new ExpressionProxy( fragment, template );
	  			model.register( intermediary );
	  			return model;
	  		});

	  		this.isUnresolved = true;
	  		this.bubble();
	  	}

	  	ReferenceExpressionProxy.prototype = Object.create( Model && Model.prototype );
	  	ReferenceExpressionProxy.prototype.constructor = ReferenceExpressionProxy;

	  	ReferenceExpressionProxy.prototype.bubble = function bubble () {
	  		if ( !this.base ) return;
	  		if ( !this.dirty ) this.handleChange();
	  	};

	  	ReferenceExpressionProxy.prototype.forceResolution = function forceResolution () {
	  		this.resolvers.forEach( function ( resolver ) { return resolver.forceResolution(); } );
	  		this.dirty = true;
	  		this.bubble();
	  	};

	  	ReferenceExpressionProxy.prototype.get = function get ( shouldCapture ) {
	  		var this$1 = this;

	  		if ( this.dirty ) {
	  			this.bubble();

	  			var i = this.members.length, resolved = true;
	  			while ( resolved && i-- ) {
	  				if ( !this$1.members[i] ) resolved = false;
	  			}

	  			if ( this.base && resolved ) {
	  				var keys = this.members.map( function ( m ) { return escapeKey( String( m.get() ) ); } );
	  				var model = this.base.joinAll( keys );

	  				if ( model !== this.model ) {
	  					if ( this.model ) {
	  						this.model.unregister( this );
	  						this.model.unregisterTwowayBinding( this );
	  					}

	  					this.model = model;
	  					this.parent = model.parent;
	  					this.model.register( this );
	  					this.model.registerTwowayBinding( this );

	  					if ( this.keypathModel ) this.keypathModel.handleChange();
	  				}
	  			}

	  			this.value = this.model ? this.model.get( shouldCapture ) : undefined;
	  			this.dirty = false;
	  			this.mark();
	  			return this.value;
	  		} else {
	  			return this.model ? this.model.get( shouldCapture ) : undefined;
	  		}
	  	};

	  	// indirect two-way bindings
	  	ReferenceExpressionProxy.prototype.getValue = function getValue () {
	  		var this$1 = this;

	  		this.value = this.model ? this.model.get() : undefined;

	  		var i = this.bindings.length;
	  		while ( i-- ) {
	  			var value = this$1.bindings[i].getValue();
	  			if ( value !== this$1.value ) return value;
	  		}

	  		// check one-way bindings
	  		var oneway = findBoundValue( this.deps );
	  		if ( oneway ) return oneway.value;

	  		return this.value;
	  	};

	  	ReferenceExpressionProxy.prototype.getKeypath = function getKeypath () {
	  		return this.model ? this.model.getKeypath() : '@undefined';
	  	};

	  	ReferenceExpressionProxy.prototype.handleChange = function handleChange$1 () {
	  		this.dirty = true;
	  		this.mark();
	  	};

	  	ReferenceExpressionProxy.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ReferenceExpressionChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	ReferenceExpressionProxy.prototype.mark = function mark$1 () {
	  		if ( this.dirty ) {
	  			this.deps.forEach( handleChange );
	  		}

	  		this.links.forEach( marked );
	  		this.children.forEach( mark );
	  		this.clearUnresolveds();
	  	};

	  	ReferenceExpressionProxy.prototype.retrieve = function retrieve () {
	  		return this.value;
	  	};

	  	ReferenceExpressionProxy.prototype.rebinding = function rebinding () { }; // NOOP

	  	ReferenceExpressionProxy.prototype.set = function set ( value ) {
	  		if ( !this.model ) throw new Error( 'Unresolved reference expression. This should not happen!' );
	  		this.model.set( value );
	  	};

	  	ReferenceExpressionProxy.prototype.unbind = function unbind$1 () {
	  		this.resolvers.forEach( unbind );
	  		if ( this.model ) {
	  			this.model.unregister( this );
	  			this.model.unregisterTwowayBinding( this );
	  		}
	  	};

	  	return ReferenceExpressionProxy;
	  }(Model));

	  function resolve$2 ( fragment, template ) {
	  	if ( template.r ) {
	  		return resolveReference( fragment, template.r );
	  	}

	  	else if ( template.x ) {
	  		return new ExpressionProxy( fragment, template.x );
	  	}

	  	else if ( template.rx ) {
	  		return new ReferenceExpressionProxy( fragment, template.rx );
	  	}
	  }

	  function resolveAliases( section ) {
	  	if ( section.template.z ) {
	  		section.aliases = {};

	  		var refs = section.template.z;
	  		for ( var i = 0; i < refs.length; i++ ) {
	  			section.aliases[ refs[i].n ] = resolve$2( section.parentFragment, refs[i].x );
	  		}
	  	}
	  }

	  var Alias = (function (Item) {
	  	function Alias ( options ) {
	  		Item.call( this, options );

	  		this.fragment = null;
	  	}

	  	Alias.prototype = Object.create( Item && Item.prototype );
	  	Alias.prototype.constructor = Alias;

	  	Alias.prototype.bind = function bind () {
	  		resolveAliases( this );

	  		this.fragment = new Fragment({
	  			owner: this,
	  			template: this.template.f
	  		}).bind();
	  	};

	  	Alias.prototype.detach = function detach () {
	  		return this.fragment ? this.fragment.detach() : createDocumentFragment();
	  	};

	  	Alias.prototype.find = function find ( selector ) {
	  		if ( this.fragment ) {
	  			return this.fragment.find( selector );
	  		}
	  	};

	  	Alias.prototype.findAll = function findAll ( selector, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAll( selector, query );
	  		}
	  	};

	  	Alias.prototype.findComponent = function findComponent ( name ) {
	  		if ( this.fragment ) {
	  			return this.fragment.findComponent( name );
	  		}
	  	};

	  	Alias.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAllComponents( name, query );
	  		}
	  	};

	  	Alias.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.fragment && this.fragment.firstNode( skipParent );
	  	};

	  	Alias.prototype.rebinding = function rebinding () {
	  		var this$1 = this;

	  		if ( this.locked ) return;
	  		this.locked = true;
	  		runloop.scheduleTask( function () {
	  			this$1.locked = false;
	  			resolveAliases( this$1 );
	  		});
	  	};

	  	Alias.prototype.render = function render ( target ) {
	  		this.rendered = true;
	  		if ( this.fragment ) this.fragment.render( target );
	  	};

	  	Alias.prototype.toString = function toString ( escape ) {
	  		return this.fragment ? this.fragment.toString( escape ) : '';
	  	};

	  	Alias.prototype.unbind = function unbind () {
	  		this.aliases = {};
	  		if ( this.fragment ) this.fragment.unbind();
	  	};

	  	Alias.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( this.rendered && this.fragment ) this.fragment.unrender( shouldDestroy );
	  		this.rendered = false;
	  	};

	  	Alias.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			this.fragment.update();
	  		}
	  	};

	  	return Alias;
	  }(Item));

	  function findElement( start, orComponent ) {
	  	if ( orComponent === void 0 ) orComponent = true;

	  	while ( start && start.type !== ELEMENT && ( !orComponent || start.type !== COMPONENT ) ) {
	  		if ( start.owner ) start = start.owner;
	  		else if ( start.component ) start = start.component.parentFragment;
	  		else if ( start.parent ) start = start.parent;
	  		else if ( start.parentFragment ) start = start.parentFragment;
	  		else start = undefined;
	  	}

	  	return start;
	  }

	  function camelCase ( hyphenatedStr ) {
	  	return hyphenatedStr.replace( /-([a-zA-Z])/g, function ( match, $1 ) {
	  		return $1.toUpperCase();
	  	});
	  }

	  var space = /\s+/;
	  var specials$2 = { 'float': 'cssFloat' };
	  var remove = /\/\*(?:[\s\S]*?)\*\//g;
	  var escape = /url\(\s*(['"])(?:\\[\s\S]|(?!\1).)*\1\s*\)|url\((?:\\[\s\S]|[^)])*\)|(['"])(?:\\[\s\S]|(?!\1).)*\2/gi;
	  var value = /\0(\d+)/g;

	  function readStyle ( css ) {
	      var values = [];

	      if ( typeof css !== 'string' ) return {};

	      return css.replace( escape, function ( match ) { return ("\u0000" + (values.push( match ) - 1)); })
	          .replace( remove, '' )
	          .split( ';' )
	          .filter( function ( rule ) { return !!rule.trim(); } )
	          .map( function ( rule ) { return rule.replace( value, function ( match, n ) { return values[ n ]; } ); } )
	          .reduce(function ( rules, rule ) {
	              var i = rule.indexOf(':');
	              var name = camelCase( rule.substr( 0, i ).trim() );
	              rules[ specials$2[ name ] || name ] = rule.substr( i + 1 ).trim();
	              return rules;
	          }, {});
	  }

	  function readClass ( str ) {
	    var list = str.split( space );

	    // remove any empty entries
	    var i = list.length;
	    while ( i-- ) {
	      if ( !list[i] ) list.splice( i, 1 );
	    }

	    return list;
	  }

	  var textTypes = [ undefined, 'text', 'search', 'url', 'email', 'hidden', 'password', 'search', 'reset', 'submit' ];

	  function getUpdateDelegate ( attribute ) {
	  	var element = attribute.element, name = attribute.name;

	  	if ( name === 'id' ) return updateId;

	  	if ( name === 'value' ) {
	  		if ( attribute.interpolator ) attribute.interpolator.bound = true;

	  		// special case - selects
	  		if ( element.name === 'select' && name === 'value' ) {
	  			return element.getAttribute( 'multiple' ) ? updateMultipleSelectValue : updateSelectValue;
	  		}

	  		if ( element.name === 'textarea' ) return updateStringValue;

	  		// special case - contenteditable
	  		if ( element.getAttribute( 'contenteditable' ) != null ) return updateContentEditableValue;

	  		// special case - <input>
	  		if ( element.name === 'input' ) {
	  			var type = element.getAttribute( 'type' );

	  			// type='file' value='{{fileList}}'>
	  			if ( type === 'file' ) return noop; // read-only

	  			// type='radio' name='{{twoway}}'
	  			if ( type === 'radio' && element.binding && element.binding.attribute.name === 'name' ) return updateRadioValue;

	  			if ( ~textTypes.indexOf( type ) ) return updateStringValue;
	  		}

	  		return updateValue;
	  	}

	  	var node = element.node;

	  	// special case - <input type='radio' name='{{twoway}}' value='foo'>
	  	if ( attribute.isTwoway && name === 'name' ) {
	  		if ( node.type === 'radio' ) return updateRadioName;
	  		if ( node.type === 'checkbox' ) return updateCheckboxName;
	  	}

	  	if ( name === 'style' ) return updateStyleAttribute;

	  	if ( name.indexOf( 'style-' ) === 0 ) return updateInlineStyle;

	  	// special case - class names. IE fucks things up, again
	  	if ( name === 'class' && ( !node.namespaceURI || node.namespaceURI === html ) ) return updateClassName;

	  	if ( name.indexOf( 'class-' ) === 0 ) return updateInlineClass;

	  	if ( attribute.isBoolean ) {
	  		var type$1 = element.getAttribute( 'type' );
	  		if ( attribute.interpolator && name === 'checked' && ( type$1 === 'checkbox' || type$1 === 'radio' ) ) attribute.interpolator.bound = true;
	  		return updateBoolean;
	  	}

	  	if ( attribute.namespace && attribute.namespace !== attribute.node.namespaceURI ) return updateNamespacedAttribute;

	  	return updateAttribute;
	  }

	  function updateId ( reset ) {
	  	var ref = this, node = ref.node;
	  	var value = this.getValue();

	  	// remove the mapping to this node if it hasn't already been replaced
	  	if ( this.ractive.nodes[ node.id ] === node ) delete this.ractive.nodes[ node.id ];
	  	if ( reset ) return node.removeAttribute( 'id' );

	  	this.ractive.nodes[ value ] = node;

	  	node.id = value;
	  }

	  function updateMultipleSelectValue ( reset ) {
	  	var value = this.getValue();

	  	if ( !isArray( value ) ) value = [ value ];

	  	var options = this.node.options;
	  	var i = options.length;

	  	if ( reset ) {
	  		while ( i-- ) options[i].selected = false;
	  	} else {
	  		while ( i-- ) {
	  			var option = options[i];
	  			var optionValue = option._ractive ?
	  				option._ractive.value :
	  				option.value; // options inserted via a triple don't have _ractive

	  			option.selected = arrayContains( value, optionValue );
	  		}
	  	}
	  }

	  function updateSelectValue ( reset ) {
	  	var value = this.getValue();

	  	if ( !this.locked ) { // TODO is locked still a thing?
	  		this.node._ractive.value = value;

	  		var options = this.node.options;
	  		var i = options.length;
	  		var wasSelected = false;

	  		if ( reset ) {
	  			while ( i-- ) options[i].selected = false;
	  		} else {
	  			while ( i-- ) {
	  				var option = options[i];
	  				var optionValue = option._ractive ?
	  					option._ractive.value :
	  					option.value; // options inserted via a triple don't have _ractive
	  				if ( option.disabled && option.selected ) wasSelected = true;

	  				if ( optionValue == value ) { // double equals as we may be comparing numbers with strings
	  					option.selected = true;
	  					return;
	  				}
	  			}
	  		}

	  		if ( !wasSelected ) this.node.selectedIndex = -1;
	  	}
	  }


	  function updateContentEditableValue ( reset ) {
	  	var value = this.getValue();

	  	if ( !this.locked ) {
	  		if ( reset ) this.node.innerHTML = '';
	  		else this.node.innerHTML = value === undefined ? '' : value;
	  	}
	  }

	  function updateRadioValue ( reset ) {
	  	var node = this.node;
	  	var wasChecked = node.checked;

	  	var value = this.getValue();

	  	if ( reset ) return node.checked = false;

	  	//node.value = this.element.getAttribute( 'value' );
	  	node.value = this.node._ractive.value = value;
	  	node.checked = value === this.element.getAttribute( 'name' );

	  	// This is a special case - if the input was checked, and the value
	  	// changed so that it's no longer checked, the twoway binding is
	  	// most likely out of date. To fix it we have to jump through some
	  	// hoops... this is a little kludgy but it works
	  	if ( wasChecked && !node.checked && this.element.binding && this.element.binding.rendered ) {
	  		this.element.binding.group.model.set( this.element.binding.group.getValue() );
	  	}
	  }

	  function updateValue ( reset ) {
	  	if ( !this.locked ) {
	  		if ( reset ) {
	  			this.node.removeAttribute( 'value' );
	  			this.node.value = this.node._ractive.value = null;
	  			return;
	  		}

	  		var value = this.getValue();

	  		this.node.value = this.node._ractive.value = value;
	  		this.node.setAttribute( 'value', value );
	  	}
	  }

	  function updateStringValue ( reset ) {
	  	if ( !this.locked ) {
	  		if ( reset ) {
	  			this.node._ractive.value = '';
	  			this.node.removeAttribute( 'value' );
	  			return;
	  		}

	  		var value = this.getValue();

	  		this.node._ractive.value = value;

	  		this.node.value = safeToStringValue( value );
	  		this.node.setAttribute( 'value', safeToStringValue( value ) );
	  	}
	  }

	  function updateRadioName ( reset ) {
	  	if ( reset ) this.node.checked = false;
	  	else this.node.checked = ( this.getValue() == this.node._ractive.value );
	  }

	  function updateCheckboxName ( reset ) {
	  	var ref = this, element = ref.element, node = ref.node;
	  	var binding = element.binding;

	  	var value = this.getValue();
	  	var valueAttribute = element.getAttribute( 'value' );

	  	if ( reset ) {
	  		// TODO: WAT?
	  	}

	  	if ( !isArray( value ) ) {
	  		binding.isChecked = node.checked = ( value == valueAttribute );
	  	} else {
	  		var i = value.length;
	  		while ( i-- ) {
	  			if ( valueAttribute == value[i] ) {
	  				binding.isChecked = node.checked = true;
	  				return;
	  			}
	  		}
	  		binding.isChecked = node.checked = false;
	  	}
	  }

	  function updateStyleAttribute ( reset ) {
	  	var props = reset ? {} : readStyle( this.getValue() || '' );
	  	var style = this.node.style;
	  	var keys = Object.keys( props );
	  	var prev = this.previous || [];

	  	var i = 0;
	  	while ( i < keys.length ) {
	  		if ( keys[i] in style ) style[ keys[i] ] = props[ keys[i] ];
	  		i++;
	  	}

	  	// remove now-missing attrs
	  	i = prev.length;
	  	while ( i-- ) {
	  		if ( !~keys.indexOf( prev[i] ) && prev[i] in style ) style[ prev[i] ] = '';
	  	}

	  	this.previous = keys;
	  }

	  function updateInlineStyle ( reset ) {
	  	if ( !this.styleName ) {
	  		this.styleName = camelize( this.name.substr( 6 ) );
	  	}

	  	this.node.style[ this.styleName ] = reset ? '' : this.getValue();
	  }

	  function updateClassName ( reset ) {
	  	var value = reset ? [] : readClass( safeToStringValue( this.getValue() ) );
	  	var attr = readClass( this.node.className );
	  	var prev = this.previous || attr.slice( 0 );

	  	var i = 0;
	  	while ( i < value.length ) {
	  		if ( !~attr.indexOf( value[i] ) ) attr.push( value[i] );
	  		i++;
	  	}

	  	// remove now-missing classes
	  	i = prev.length;
	  	while ( i-- ) {
	  		if ( !~value.indexOf( prev[i] ) ) {
	  			var idx = attr.indexOf( prev[i] );
	  			if ( ~idx ) attr.splice( idx, 1 );
	  		}
	  	}

	  	var className = attr.join( ' ' );

	  	if ( className !== this.node.className ) {
	  		this.node.className = className;
	  	}

	  	this.previous = value;
	  }

	  function updateInlineClass ( reset ) {
	  	var name = this.name.substr( 6 );
	  	var attr = readClass( this.node.className );
	  	var value = reset ? false : this.getValue();

	  	if ( !this.inlineClass ) this.inlineClass = name;

	  	if ( value && !~attr.indexOf( name ) ) attr.push( name );
	  	else if ( !value && ~attr.indexOf( name ) ) attr.splice( attr.indexOf( name ), 1 );

	  	this.node.className = attr.join( ' ' );
	  }

	  function updateBoolean ( reset ) {
	  	// with two-way binding, only update if the change wasn't initiated by the user
	  	// otherwise the cursor will often be sent to the wrong place
	  	if ( !this.locked ) {
	  		if ( reset ) {
	  			if ( this.useProperty ) this.node[ this.propertyName ] = false;
	  			this.node.removeAttribute( this.propertyName );
	  			return;
	  		}

	  		if ( this.useProperty ) {
	  			this.node[ this.propertyName ] = this.getValue();
	  		} else {
	  			if ( this.getValue() ) {
	  				this.node.setAttribute( this.propertyName, '' );
	  			} else {
	  				this.node.removeAttribute( this.propertyName );
	  			}
	  		}
	  	}
	  }

	  function updateAttribute ( reset ) {
	  	if ( reset ) this.node.removeAttribute( this.name );
	  	else this.node.setAttribute( this.name, safeToStringValue( this.getString() ) );
	  }

	  function updateNamespacedAttribute ( reset ) {
	  	if ( reset ) this.node.removeAttributeNS( this.namespace, this.name.slice( this.name.indexOf( ':' ) + 1 ) );
	  	else this.node.setAttributeNS( this.namespace, this.name.slice( this.name.indexOf( ':' ) + 1 ), safeToStringValue( this.getString() ) );
	  }

	  var propertyNames = {
	  	'accept-charset': 'acceptCharset',
	  	accesskey: 'accessKey',
	  	bgcolor: 'bgColor',
	  	'class': 'className',
	  	codebase: 'codeBase',
	  	colspan: 'colSpan',
	  	contenteditable: 'contentEditable',
	  	datetime: 'dateTime',
	  	dirname: 'dirName',
	  	'for': 'htmlFor',
	  	'http-equiv': 'httpEquiv',
	  	ismap: 'isMap',
	  	maxlength: 'maxLength',
	  	novalidate: 'noValidate',
	  	pubdate: 'pubDate',
	  	readonly: 'readOnly',
	  	rowspan: 'rowSpan',
	  	tabindex: 'tabIndex',
	  	usemap: 'useMap'
	  };

	  function lookupNamespace ( node, prefix ) {
	  	var qualified = "xmlns:" + prefix;

	  	while ( node ) {
	  		if ( node.hasAttribute && node.hasAttribute( qualified ) ) return node.getAttribute( qualified );
	  		node = node.parentNode;
	  	}

	  	return namespaces[ prefix ];
	  }

	  var Attribute = (function (Item) {
	  	function Attribute ( options ) {
	  		Item.call( this, options );

	  		this.name = options.template.n;
	  		this.namespace = null;

	  		this.owner = options.owner || options.parentFragment.owner || options.element || findElement( options.parentFragment );
	  		this.element = options.element || (this.owner.attributeByName ? this.owner : findElement( options.parentFragment ) );
	  		this.parentFragment = options.parentFragment; // shared
	  		this.ractive = this.parentFragment.ractive;

	  		this.rendered = false;
	  		this.updateDelegate = null;
	  		this.fragment = null;

	  		this.element.attributeByName[ this.name ] = this;

	  		if ( !isArray( options.template.f ) ) {
	  			this.value = options.template.f;
	  			if ( this.value === 0 ) {
	  				this.value = '';
	  			}
	  		} else {
	  			this.fragment = new Fragment({
	  				owner: this,
	  				template: options.template.f
	  			});
	  		}

	  		this.interpolator = this.fragment &&
	  			this.fragment.items.length === 1 &&
	  			this.fragment.items[0].type === INTERPOLATOR &&
	  			this.fragment.items[0];

	  		if ( this.interpolator ) this.interpolator.owner = this;
	  	}

	  	Attribute.prototype = Object.create( Item && Item.prototype );
	  	Attribute.prototype.constructor = Attribute;

	  	Attribute.prototype.bind = function bind () {
	  		if ( this.fragment ) {
	  			this.fragment.bind();
	  		}
	  	};

	  	Attribute.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.parentFragment.bubble();
	  			this.element.bubble();
	  			this.dirty = true;
	  		}
	  	};

	  	Attribute.prototype.destroyed = function destroyed () {
	  		this.updateDelegate( true );
	  	};

	  	Attribute.prototype.getString = function getString () {
	  		return this.fragment ?
	  			this.fragment.toString() :
	  			this.value != null ? '' + this.value : '';
	  	};

	  	// TODO could getValue ever be called for a static attribute,
	  	// or can we assume that this.fragment exists?
	  	Attribute.prototype.getValue = function getValue () {
	  		return this.fragment ? this.fragment.valueOf() : booleanAttributes.test( this.name ) ? true : this.value;
	  	};

	  	Attribute.prototype.render = function render () {
	  		var node = this.element.node;
	  		this.node = node;

	  		// should we use direct property access, or setAttribute?
	  		if ( !node.namespaceURI || node.namespaceURI === namespaces.html ) {
	  			this.propertyName = propertyNames[ this.name ] || this.name;

	  			if ( node[ this.propertyName ] !== undefined ) {
	  				this.useProperty = true;
	  			}

	  			// is attribute a boolean attribute or 'value'? If so we're better off doing e.g.
	  			// node.selected = true rather than node.setAttribute( 'selected', '' )
	  			if ( booleanAttributes.test( this.name ) || this.isTwoway ) {
	  				this.isBoolean = true;
	  			}

	  			if ( this.propertyName === 'value' ) {
	  				node._ractive.value = this.value;
	  			}
	  		}

	  		if ( node.namespaceURI ) {
	  			var index = this.name.indexOf( ':' );
	  			if ( index !== -1 ) {
	  				this.namespace = lookupNamespace( node, this.name.slice( 0, index ) );
	  			} else {
	  				this.namespace = node.namespaceURI;
	  			}
	  		}

	  		this.rendered = true;
	  		this.updateDelegate = getUpdateDelegate( this );
	  		this.updateDelegate();
	  	};

	  	Attribute.prototype.toString = function toString () {
	  		var value = this.getValue();

	  		// Special case - select and textarea values (should not be stringified)
	  		if ( this.name === 'value' && ( this.element.getAttribute( 'contenteditable' ) !== undefined || ( this.element.name === 'select' || this.element.name === 'textarea' ) ) ) {
	  			return;
	  		}

	  		// Special case – bound radio `name` attributes
	  		if ( this.name === 'name' && this.element.name === 'input' && this.interpolator && this.element.getAttribute( 'type' ) === 'radio' ) {
	  			return ("name=\"{{" + (this.interpolator.model.getKeypath()) + "}}\"");
	  		}

	  		// Special case - style and class attributes and directives
	  		if ( this.owner === this.element && ( this.name === 'style' || this.name === 'class' || this.styleName || this.inlineClass ) ) {
	  			return;
	  		}

	  		if ( booleanAttributes.test( this.name ) ) return value ? this.name : '';
	  		if ( value == null ) return '';

	  		var str = safeAttributeString( this.getString() );
	  		return str ?
	  			("" + (this.name) + "=\"" + str + "\"") :
	  			this.name;
	  	};

	  	Attribute.prototype.unbind = function unbind () {
	  		if ( this.fragment ) this.fragment.unbind();
	  	};

	  	Attribute.prototype.unrender = function unrender () {
	  		this.updateDelegate( true );

	  		this.rendered = false;
	  	};

	  	Attribute.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			if ( this.fragment ) this.fragment.update();
	  			if ( this.rendered ) this.updateDelegate();
	  			if ( this.isTwoway && !this.locked ) {
	  				this.interpolator.twowayBinding.lastVal( true, this.interpolator.model.get() );
	  			}
	  		}
	  	};

	  	return Attribute;
	  }(Item));

	  var BindingFlag = (function (Item) {
	  	function BindingFlag ( options ) {
	  		Item.call( this, options );

	  		this.owner = options.owner || options.parentFragment.owner || findElement( options.parentFragment );
	  		this.element = this.owner.attributeByName ? this.owner : findElement( options.parentFragment );
	  		this.flag = options.template.v === 'l' ? 'lazy' : 'twoway';

	  		if ( this.element.type === ELEMENT ) {
	  			if ( isArray( options.template.f ) ) {
	  				this.fragment = new Fragment({
	  					owner: this,
	  					template: options.template.f
	  				});
	  			}

	  			this.interpolator = this.fragment &&
	  								this.fragment.items.length === 1 &&
	  								this.fragment.items[0].type === INTERPOLATOR &&
	  								this.fragment.items[0];
	  		}
	  	}

	  	BindingFlag.prototype = Object.create( Item && Item.prototype );
	  	BindingFlag.prototype.constructor = BindingFlag;

	  	BindingFlag.prototype.bind = function bind () {
	  		if ( this.fragment ) this.fragment.bind();
	  		set$2( this, this.getValue(), true );
	  	};

	  	BindingFlag.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.element.bubble();
	  			this.dirty = true;
	  		}
	  	};

	  	BindingFlag.prototype.getValue = function getValue () {
	  		if ( this.fragment ) return this.fragment.valueOf();
	  		else if ( 'value' in this ) return this.value;
	  		else if ( 'f' in this.template ) return this.template.f;
	  		else return true;
	  	};

	  	BindingFlag.prototype.render = function render () {
	  		set$2( this, this.getValue(), true );
	  	};

	  	BindingFlag.prototype.toString = function toString () { return ''; };

	  	BindingFlag.prototype.unbind = function unbind () {
	  		if ( this.fragment ) this.fragment.unbind();

	  		delete this.element[ this.flag ];
	  	};

	  	BindingFlag.prototype.unrender = function unrender () {
	  		if ( this.element.rendered ) this.element.recreateTwowayBinding();
	  	};

	  	BindingFlag.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			if ( this.fragment ) this.fragment.update();
	  			set$2( this, this.getValue(), true );
	  		}
	  	};

	  	return BindingFlag;
	  }(Item));

	  function set$2 ( flag, value, update ) {
	  	if ( value === 0 ) {
	  		flag.value = true;
	  	} else if ( value === 'true' ) {
	  		flag.value = true;
	  	} else if ( value === 'false' || value === '0' ) {
	  		flag.value = false;
	  	} else {
	  		flag.value = value;
	  	}

	  	var current = flag.element[ flag.flag ];
	  	flag.element[ flag.flag ] = flag.value;
	  	if ( update && !flag.element.attributes.binding && current !== flag.value ) {
	  		flag.element.recreateTwowayBinding();
	  	}

	  	return flag.value;
	  }

	  var div$1 = doc ? createElement( 'div' ) : null;

	  var attributes = false;
	  function inAttributes() { return attributes; }
	  function doInAttributes( fn ) {
	  	attributes = true;
	  	fn();
	  	attributes = false;
	  }

	  var ConditionalAttribute = (function (Item) {
	  	function ConditionalAttribute ( options ) {
	  		Item.call( this, options );

	  		this.attributes = [];

	  		this.owner = options.owner;

	  		this.fragment = new Fragment({
	  			ractive: this.ractive,
	  			owner: this,
	  			template: this.template
	  		});
	  		// this fragment can't participate in node-y things
	  		this.fragment.findNextNode = noop;

	  		this.dirty = false;
	  	}

	  	ConditionalAttribute.prototype = Object.create( Item && Item.prototype );
	  	ConditionalAttribute.prototype.constructor = ConditionalAttribute;

	  	ConditionalAttribute.prototype.bind = function bind () {
	  		this.fragment.bind();
	  	};

	  	ConditionalAttribute.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.dirty = true;
	  			this.owner.bubble();
	  		}
	  	};

	  	ConditionalAttribute.prototype.render = function render () {
	  		this.node = this.owner.node;
	  		if ( this.node ) {
	  			this.isSvg = this.node.namespaceURI === svg$1;
	  		}

	  		attributes = true;
	  		if ( !this.rendered ) this.fragment.render();
	  		attributes = false;

	  		this.rendered = true;
	  		this.dirty = true; // TODO this seems hacky, but necessary for tests to pass in browser AND node.js
	  		this.update();
	  	};

	  	ConditionalAttribute.prototype.toString = function toString () {
	  		return this.fragment.toString();
	  	};

	  	ConditionalAttribute.prototype.unbind = function unbind () {
	  		this.fragment.unbind();
	  	};

	  	ConditionalAttribute.prototype.unrender = function unrender () {
	  		this.rendered = false;
	  		this.fragment.unrender();
	  	};

	  	ConditionalAttribute.prototype.update = function update () {
	  		var this$1 = this;

	  		var str;
	  		var attrs;

	  		if ( this.dirty ) {
	  			this.dirty = false;

	  			attributes = true;
	  			this.fragment.update();
	  			attributes = false;

	  			if ( this.rendered && this.node ) {
	  				str = this.fragment.toString();
	  				attrs = parseAttributes( str, this.isSvg );

	  				// any attributes that previously existed but no longer do
	  				// must be removed
	  				this.attributes.filter( function ( a ) { return notIn( attrs, a ); } ).forEach( function ( a ) {
	  					this$1.node.removeAttribute( a.name );
	  				});

	  				attrs.forEach( function ( a ) {
	  					this$1.node.setAttribute( a.name, a.value );
	  				});

	  				this.attributes = attrs;
	  			}
	  		}
	  	};

	  	return ConditionalAttribute;
	  }(Item));

	  function parseAttributes ( str, isSvg ) {
	  	var tagName = isSvg ? 'svg' : 'div';
	  	return str
	  		? (div$1.innerHTML = "<" + tagName + " " + str + "></" + tagName + ">") &&
	  			toArray(div$1.childNodes[0].attributes)
	  		: [];
	  }

	  function notIn ( haystack, needle ) {
	  	var i = haystack.length;

	  	while ( i-- ) {
	  		if ( haystack[i].name === needle.name ) {
	  			return false;
	  		}
	  	}

	  	return true;
	  }

	  function processWrapper ( wrapper, array, methodName, newIndices ) {
	  	var __model = wrapper.__model;

	  	if ( newIndices ) {
	  		__model.shuffle( newIndices );
	  	} else {
	  		// If this is a sort or reverse, we just do root.set()...
	  		// TODO use merge logic?
	  		//root.viewmodel.mark( keypath );
	  	}
	  }

	  var mutatorMethods = [ 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift' ];
	  var patchedArrayProto = [];

	  mutatorMethods.forEach( function ( methodName ) {
	  	var method = function () {
	  		var this$1 = this;
	  		var args = [], len = arguments.length;
	  		while ( len-- ) args[ len ] = arguments[ len ];

	  		var newIndices = getNewIndices( this.length, methodName, args );

	  		// lock any magic array wrappers, so that things don't get fudged
	  		this._ractive.wrappers.forEach( function ( r ) { if ( r.magic ) r.magic.locked = true; } );

	  		// apply the underlying method
	  		var result = Array.prototype[ methodName ].apply( this, arguments );

	  		// trigger changes
	  		runloop.start();

	  		this._ractive.setting = true;
	  		var i = this._ractive.wrappers.length;
	  		while ( i-- ) {
	  			processWrapper( this$1._ractive.wrappers[i], this$1, methodName, newIndices );
	  		}

	  		runloop.end();

	  		this._ractive.setting = false;

	  		// unlock the magic arrays... magic... bah
	  		this._ractive.wrappers.forEach( function ( r ) { if ( r.magic ) r.magic.locked = false; } );

	  		return result;
	  	};

	  	defineProperty( patchedArrayProto, methodName, {
	  		value: method
	  	});
	  });

	  var patchArrayMethods;
	  var unpatchArrayMethods;

	  // can we use prototype chain injection?
	  // http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/#wrappers_prototype_chain_injection
	  if ( ({}).__proto__ ) {
	  	// yes, we can
	  	patchArrayMethods = function ( array ) { return array.__proto__ = patchedArrayProto; };
	  	unpatchArrayMethods = function ( array ) { return array.__proto__ = Array.prototype; };
	  }

	  else {
	  	// no, we can't
	  	patchArrayMethods = function ( array ) {
	  		var i = mutatorMethods.length;
	  		while ( i-- ) {
	  			var methodName = mutatorMethods[i];
	  			defineProperty( array, methodName, {
	  				value: patchedArrayProto[ methodName ],
	  				configurable: true
	  			});
	  		}
	  	};

	  	unpatchArrayMethods = function ( array ) {
	  		var i = mutatorMethods.length;
	  		while ( i-- ) {
	  			delete array[ mutatorMethods[i] ];
	  		}
	  	};
	  }

	  patchArrayMethods.unpatch = unpatchArrayMethods; // TODO export separately?
	  var patch = patchArrayMethods;

	  var errorMessage$1 = 'Something went wrong in a rather interesting way';

	  var arrayAdaptor = {
	  	filter: function ( object ) {
	  		// wrap the array if a) b) it's an array, and b) either it hasn't been wrapped already,
	  		// or the array didn't trigger the get() itself
	  		return isArray( object ) && ( !object._ractive || !object._ractive.setting );
	  	},
	  	wrap: function ( ractive, array, keypath ) {
	  		return new ArrayWrapper( ractive, array, keypath );
	  	}
	  };

	  var ArrayWrapper = function ArrayWrapper ( ractive, array ) {
	  	this.root = ractive;
	  	this.value = array;
	  	this.__model = null; // filled in later

	  	// if this array hasn't already been ractified, ractify it
	  	if ( !array._ractive ) {
	  		// define a non-enumerable _ractive property to store the wrappers
	  		defineProperty( array, '_ractive', {
	  			value: {
	  				wrappers: [],
	  				instances: [],
	  				setting: false
	  			},
	  			configurable: true
	  		});

	  		patch( array );
	  	}

	  	// store the ractive instance, so we can handle transitions later
	  	if ( !array._ractive.instances[ ractive._guid ] ) {
	  		array._ractive.instances[ ractive._guid ] = 0;
	  		array._ractive.instances.push( ractive );
	  	}

	  	array._ractive.instances[ ractive._guid ] += 1;
	  	array._ractive.wrappers.push( this );
	  };

	  ArrayWrapper.prototype.get = function get () {
	  	return this.value;
	  };

	  ArrayWrapper.prototype.reset = function reset ( value ) {
	  	return this.value === value;
	  };

	  ArrayWrapper.prototype.teardown = function teardown () {
	  	var array, storage, wrappers, instances, index;

	  	array = this.value;
	  	storage = array._ractive;
	  	wrappers = storage.wrappers;
	  	instances = storage.instances;

	  	// if teardown() was invoked because we're clearing the cache as a result of
	  	// a change that the array itself triggered, we can save ourselves the teardown
	  	// and immediate setup
	  	if ( storage.setting ) {
	  		return false; // so that we don't remove it from cached wrappers
	  	}

	  	index = wrappers.indexOf( this );
	  	if ( index === -1 ) {
	  		throw new Error( errorMessage$1 );
	  	}

	  	wrappers.splice( index, 1 );

	  	// if nothing else depends on this array, we can revert it to its
	  	// natural state
	  	if ( !wrappers.length ) {
	  		delete array._ractive;
	  		patch.unpatch( this.value );
	  	}

	  	else {
	  		// remove ractive instance if possible
	  		instances[ this.root._guid ] -= 1;
	  		if ( !instances[ this.root._guid ] ) {
	  			index = instances.indexOf( this.root );

	  			if ( index === -1 ) {
	  				throw new Error( errorMessage$1 );
	  			}

	  			instances.splice( index, 1 );
	  		}
	  	}
	  };

	  var magicAdaptor;

	  try {
	  	Object.defineProperty({}, 'test', { get: function() {}, set: function() {} });

	  	magicAdaptor = {
	  		filter: function ( value ) {
	  			return value && typeof value === 'object';
	  		},
	  		wrap: function ( ractive, value, keypath ) {
	  			return new MagicWrapper( ractive, value, keypath );
	  		}
	  	};
	  } catch ( err ) {
	  	magicAdaptor = false;
	  }

	  var magicAdaptor$1 = magicAdaptor;

	  function createOrWrapDescriptor ( originalDescriptor, ractive, keypath, wrapper ) {
	  	if ( originalDescriptor.set && originalDescriptor.set.__magic ) {
	  		originalDescriptor.set.__magic.dependants.push({ ractive: ractive, keypath: keypath });
	  		return originalDescriptor;
	  	}

	  	var setting;

	  	var dependants = [{ ractive: ractive, keypath: keypath }];

	  	var descriptor = {
	  		get: function () {
	  			return 'value' in originalDescriptor ? originalDescriptor.value : originalDescriptor.get.call( this );
	  		},
	  		set: function (value) {
	  			if ( setting ) return;

	  			if ( 'value' in originalDescriptor ) {
	  				originalDescriptor.value = value;
	  			} else {
	  				originalDescriptor.set.call( this, value );
	  			}

	  			if ( wrapper.locked ) return;
	  			setting = true;
	  			dependants.forEach( function (ref) {
	  				var ractive = ref.ractive;
	  				var keypath = ref.keypath;

	  				ractive.set( keypath, value );
	  			});
	  			setting = false;
	  		},
	  		enumerable: true
	  	};

	  	descriptor.set.__magic = { dependants: dependants, originalDescriptor: originalDescriptor };

	  	return descriptor;
	  }

	  function revert ( descriptor, ractive, keypath ) {
	  	if ( !descriptor.set || !descriptor.set.__magic ) return true;

	  	var dependants = descriptor.set.__magic;
	  	var i = dependants.length;
	  	while ( i-- ) {
	  		var dependant = dependants[i];
	  		if ( dependant.ractive === ractive && dependant.keypath === keypath ) {
	  			dependants.splice( i, 1 );
	  			return false;
	  		}
	  	}
	  }

	  var MagicWrapper = function MagicWrapper ( ractive, value, keypath ) {
	  	var this$1 = this;

	  		this.ractive = ractive;
	  	this.value = value;
	  	this.keypath = keypath;

	  	this.originalDescriptors = {};

	  	// wrap all properties with getters
	  	Object.keys( value ).forEach( function ( key ) {
	  		var originalDescriptor = Object.getOwnPropertyDescriptor( this$1.value, key );
	  		this$1.originalDescriptors[ key ] = originalDescriptor;

	  		var childKeypath = keypath ? ("" + keypath + "." + (escapeKey( key ))) : escapeKey( key );

	  		var descriptor = createOrWrapDescriptor( originalDescriptor, ractive, childKeypath, this$1 );



	  		Object.defineProperty( this$1.value, key, descriptor );
	  	});
	  };

	  MagicWrapper.prototype.get = function get () {
	  	return this.value;
	  };

	  MagicWrapper.prototype.reset = function reset ( value ) {
	  	return this.value === value;
	  };

	  MagicWrapper.prototype.set = function set ( key, value ) {
	  	this.value[ key ] = value;
	  };

	  MagicWrapper.prototype.teardown = function teardown () {
	  	var this$1 = this;

	  		Object.keys( this.value ).forEach( function ( key ) {
	  		var descriptor = Object.getOwnPropertyDescriptor( this$1.value, key );
	  		if ( !descriptor.set || !descriptor.set.__magic ) return;

	  		revert( descriptor );

	  		if ( descriptor.set.__magic.dependants.length === 1 ) {
	  			Object.defineProperty( this$1.value, key, descriptor.set.__magic.originalDescriptor );
	  		}
	  	});
	  };

	  var MagicArrayWrapper = function MagicArrayWrapper ( ractive, array, keypath ) {
	  	this.value = array;

	  	this.magic = true;

	  	this.magicWrapper = magicAdaptor$1.wrap( ractive, array, keypath );
	  	this.arrayWrapper = arrayAdaptor.wrap( ractive, array, keypath );
	  	this.arrayWrapper.magic = this.magicWrapper;

	  	// ugh, this really is a terrible hack
	  	Object.defineProperty( this, '__model', {
	  		get: function () {
	  			return this.arrayWrapper.__model;
	  		},
	  		set: function ( model ) {
	  			this.arrayWrapper.__model = model;
	  		}
	  	});
	  };

	  MagicArrayWrapper.prototype.get = function get () {
	  	return this.value;
	  };

	  MagicArrayWrapper.prototype.teardown = function teardown () {
	  	this.arrayWrapper.teardown();
	  	this.magicWrapper.teardown();
	  };

	  MagicArrayWrapper.prototype.reset = function reset ( value ) {
	  	return this.arrayWrapper.reset( value ) && this.magicWrapper.reset( value );
	  };

	  var magicArrayAdaptor = {
	  	filter: function ( object, keypath, ractive ) {
	  		return magicAdaptor$1.filter( object, keypath, ractive ) && arrayAdaptor.filter( object );
	  	},

	  	wrap: function ( ractive, array, keypath ) {
	  		return new MagicArrayWrapper( ractive, array, keypath );
	  	}
	  };

	  // TODO this is probably a bit anal, maybe we should leave it out
	  function prettify ( fnBody ) {
	  	var lines = fnBody
	  		.replace( /^\t+/gm, function ( tabs ) { return tabs.split( '\t' ).join( '  ' ); } )
	  		.split( '\n' );

	  	var minIndent = lines.length < 2 ? 0 :
	  		lines.slice( 1 ).reduce( function ( prev, line ) {
	  			return Math.min( prev, /^\s*/.exec( line )[0].length );
	  		}, Infinity );

	  	return lines.map( function ( line, i ) {
	  		return '    ' + ( i ? line.substring( minIndent ) : line );
	  	}).join( '\n' );
	  }

	  // Ditto. This function truncates the stack to only include app code
	  function truncateStack ( stack ) {
	  	if ( !stack ) return '';

	  	var lines = stack.split( '\n' );
	  	var name = Computation.name + '.getValue';

	  	var truncated = [];

	  	var len = lines.length;
	  	for ( var i = 1; i < len; i += 1 ) {
	  		var line = lines[i];

	  		if ( ~line.indexOf( name ) ) {
	  			return truncated.join( '\n' );
	  		} else {
	  			truncated.push( line );
	  		}
	  	}
	  }

	  var Computation = (function (Model) {
	  	function Computation ( viewmodel, signature, key ) {
	  		Model.call( this, null, null );

	  		this.root = this.parent = viewmodel;
	  		this.signature = signature;

	  		this.key = key; // not actually used, but helps with debugging
	  		this.isExpression = key && key[0] === '@';

	  		this.isReadonly = !this.signature.setter;

	  		this.context = viewmodel.computationContext;

	  		this.dependencies = [];

	  		this.children = [];
	  		this.childByKey = {};

	  		this.deps = [];

	  		this.dirty = true;

	  		// TODO: is there a less hackish way to do this?
	  		this.shuffle = undefined;
	  	}

	  	Computation.prototype = Object.create( Model && Model.prototype );
	  	Computation.prototype.constructor = Computation;

	  	Computation.prototype.get = function get ( shouldCapture ) {
	  		if ( shouldCapture ) capture( this );

	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			this.value = this.getValue();
	  			this.adapt();
	  		}

	  		// if capturing, this value needs to be unwrapped because it's for external use
	  		return shouldCapture && this.wrapper ? this.wrapper.value : this.value;
	  	};

	  	Computation.prototype.getValue = function getValue () {
	  		startCapturing();
	  		var result;

	  		try {
	  			result = this.signature.getter.call( this.context );
	  		} catch ( err ) {
	  			warnIfDebug( ("Failed to compute " + (this.getKeypath()) + ": " + (err.message || err)) );

	  			// TODO this is all well and good in Chrome, but...
	  			// ...also, should encapsulate this stuff better, and only
	  			// show it if Ractive.DEBUG
	  			if ( hasConsole ) {
	  				if ( console.groupCollapsed ) console.groupCollapsed( '%cshow details', 'color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;' );
	  				var functionBody = prettify( this.signature.getterString );
	  				var stack = this.signature.getterUseStack ? '\n\n' + truncateStack( err.stack ) : '';
	  				console.error( ("" + (err.name) + ": " + (err.message) + "\n\n" + functionBody + "" + stack) );
	  				if ( console.groupCollapsed ) console.groupEnd();
	  			}
	  		}

	  		var dependencies = stopCapturing();
	  		this.setDependencies( dependencies );

	  		return result;
	  	};

	  	Computation.prototype.handleChange = function handleChange$1 () {
	  		this.dirty = true;

	  		this.links.forEach( marked );
	  		this.deps.forEach( handleChange );
	  		this.children.forEach( handleChange );
	  		this.clearUnresolveds(); // TODO same question as on Model - necessary for primitives?
	  	};

	  	Computation.prototype.joinKey = function joinKey ( key ) {
	  		if ( key === undefined || key === '' ) return this;

	  		if ( !this.childByKey.hasOwnProperty( key ) ) {
	  			var child = new ComputationChild( this, key );
	  			this.children.push( child );
	  			this.childByKey[ key ] = child;
	  		}

	  		return this.childByKey[ key ];
	  	};

	  	Computation.prototype.mark = function mark () {
	  		this.handleChange();
	  	};

	  	Computation.prototype.rebinding = function rebinding ( next, previous ) {
	  		// computations will grab all of their deps again automagically
	  		if ( next !== previous ) this.handleChange();
	  	};

	  	Computation.prototype.set = function set ( value ) {
	  		if ( !this.signature.setter ) {
	  			throw new Error( ("Cannot set read-only computed value '" + (this.key) + "'") );
	  		}

	  		this.signature.setter( value );
	  	};

	  	Computation.prototype.setDependencies = function setDependencies ( dependencies ) {
	  		// unregister any soft dependencies we no longer have
	  		var this$1 = this;

	  		var i = this.dependencies.length;
	  		while ( i-- ) {
	  			var model = this$1.dependencies[i];
	  			if ( !~dependencies.indexOf( model ) ) model.unregister( this$1 );
	  		}

	  		// and add any new ones
	  		i = dependencies.length;
	  		while ( i-- ) {
	  			var model$1 = dependencies[i];
	  			if ( !~this$1.dependencies.indexOf( model$1 ) ) model$1.register( this$1 );
	  		}

	  		this.dependencies = dependencies;
	  	};

	  	Computation.prototype.teardown = function teardown () {
	  		var this$1 = this;

	  		var i = this.dependencies.length;
	  		while ( i-- ) {
	  			if ( this$1.dependencies[i] ) this$1.dependencies[i].unregister( this$1 );
	  		}
	  		if ( this.root.computations[this.key] === this ) delete this.root.computations[this.key];
	  		Model.prototype.teardown.call(this);
	  	};

	  	Computation.prototype.unregister = function unregister ( dependent ) {
	  		Model.prototype.unregister.call( this, dependent );
	  		// tear down expressions with no deps, because they will be replaced when needed
	  		if ( this.isExpression && this.deps.length === 0 ) this.teardown();
	  	};

	  	return Computation;
	  }(Model));

	  var RactiveModel = (function (Model) {
	  	function RactiveModel ( ractive ) {
	  		Model.call( this, null, '' );
	  		this.value = ractive;
	  		this.isRoot = true;
	  		this.root = this;
	  		this.adaptors = [];
	  		this.ractive = ractive;
	  		this.changes = {};
	  	}

	  	RactiveModel.prototype = Object.create( Model && Model.prototype );
	  	RactiveModel.prototype.constructor = RactiveModel;

	  	RactiveModel.prototype.getKeypath = function getKeypath() {
	  		return '@this';
	  	};

	  	return RactiveModel;
	  }(Model));

	  var hasProp$1 = Object.prototype.hasOwnProperty;

	  var RootModel = (function (Model) {
	  	function RootModel ( options ) {
	  		Model.call( this, null, null );

	  		// TODO deprecate this
	  		this.changes = {};

	  		this.isRoot = true;
	  		this.root = this;
	  		this.ractive = options.ractive; // TODO sever this link

	  		this.value = options.data;
	  		this.adaptors = options.adapt;
	  		this.adapt();

	  		this.computationContext = options.ractive;
	  		this.computations = {};

	  		// TODO this is only for deprecation of using expression keypaths
	  		this.expressions = {};
	  	}

	  	RootModel.prototype = Object.create( Model && Model.prototype );
	  	RootModel.prototype.constructor = RootModel;

	  	RootModel.prototype.applyChanges = function applyChanges () {
	  		this._changeHash = {};
	  		this.flush();

	  		return this._changeHash;
	  	};

	  	RootModel.prototype.compute = function compute ( key, signature ) {
	  		var computation = new Computation( this, signature, key );
	  		this.computations[ key ] = computation;

	  		return computation;
	  	};

	  	RootModel.prototype.createLink = function createLink ( keypath, target, targetPath ) {
	  		var this$1 = this;

	  		var keys = splitKeypathI( keypath );

	  		var model = this;
	  		while ( keys.length ) {
	  			var key = keys.shift();
	  			model = this$1.childByKey[ key ] || this$1.joinKey( key );
	  		}

	  		return model.link( target, targetPath );
	  	};

	  	RootModel.prototype.get = function get ( shouldCapture, options ) {
	  		var this$1 = this;

	  		if ( shouldCapture ) capture( this );

	  		if ( !options || options.virtual !== false ) {
	  			var result = this.getVirtual();
	  			var keys = Object.keys( this.computations );
	  			var i = keys.length;
	  			while ( i-- ) {
	  				var computation = this$1.computations[ keys[i] ];
	  				// exclude template expressions
	  				if ( !computation.isExpression ) {
	  					result[ keys[i] ] = computation.get();
	  				}
	  			}

	  			return result;
	  		} else {
	  			return this.value;
	  		}
	  	};

	  	RootModel.prototype.getKeypath = function getKeypath () {
	  		return '';
	  	};

	  	RootModel.prototype.getRactiveModel = function getRactiveModel() {
	  		return this.ractiveModel || ( this.ractiveModel = new RactiveModel( this.ractive ) );
	  	};

	  	RootModel.prototype.getValueChildren = function getValueChildren () {
	  		var children = Model.prototype.getValueChildren.call( this, this.value );

	  		this.children.forEach( function ( child ) {
	  			if ( child._link ) {
	  				var idx = children.indexOf( child );
	  				if ( ~idx ) children.splice( idx, 1, child._link );
	  				else children.push( child._link );
	  			}
	  		});

	  		for ( var k in this.computations ) {
	  			children.push( this.computations[k] );
	  		}

	  		return children;
	  	};

	  	RootModel.prototype.handleChange = function handleChange$1 () {
	  		this.deps.forEach( handleChange );
	  	};

	  	RootModel.prototype.has = function has ( key ) {
	  		var value = this.value;

	  		key = unescapeKey( key );
	  		if ( hasProp$1.call( value, key ) ) return true;

	  		// mappings/links and computations
	  		if ( key in this.computations || this.childByKey[key] && this.childByKey[key]._link ) return true;
	  		// TODO remove this after deprecation is done
	  		if ( key in this.expressions ) return true;

	  		// We climb up the constructor chain to find if one of them contains the key
	  		var constructor = value.constructor;
	  		while ( constructor !== Function && constructor !== Array && constructor !== Object ) {
	  			if ( hasProp$1.call( constructor.prototype, key ) ) return true;
	  			constructor = constructor.constructor;
	  		}

	  		return false;
	  	};

	  	RootModel.prototype.joinKey = function joinKey ( key, opts ) {
	  		if ( key === '@global' ) return GlobalModel$1;
	  		if ( key === '@this' ) return this.getRactiveModel();

	  		if ( this.expressions.hasOwnProperty( key ) ) {
	  			warnIfDebug( ("Accessing expression keypaths (" + (key.substr(1)) + ") from the instance is deprecated. You can used a getNodeInfo or event object to access keypaths with expression context.") );
	  			return this.expressions[ key ];
	  		}

	  		return this.computations.hasOwnProperty( key ) ? this.computations[ key ] :
	  		       Model.prototype.joinKey.call( this, key, opts );
	  	};

	  	RootModel.prototype.map = function map ( localKey, origin ) {
	  		var local = this.joinKey( localKey );
	  		local.link( origin );
	  	};

	  	RootModel.prototype.rebinding = function rebinding () {
	  	};

	  	RootModel.prototype.set = function set ( value ) {
	  		// TODO wrapping root node is a baaaad idea. We should prevent this
	  		var wrapper = this.wrapper;
	  		if ( wrapper ) {
	  			var shouldTeardown = !wrapper.reset || wrapper.reset( value ) === false;

	  			if ( shouldTeardown ) {
	  				wrapper.teardown();
	  				this.wrapper = null;
	  				this.value = value;
	  				this.adapt();
	  			}
	  		} else {
	  			this.value = value;
	  			this.adapt();
	  		}

	  		this.deps.forEach( handleChange );
	  		this.children.forEach( mark );
	  		this.clearUnresolveds(); // TODO do we need to do this with primitive values? if not, what about e.g. unresolved `length` property of null -> string?
	  	};

	  	RootModel.prototype.retrieve = function retrieve () {
	  		return this.value;
	  	};

	  	RootModel.prototype.update = function update () {
	  		// noop
	  	};

	  	return RootModel;
	  }(Model));

	  function getComputationSignature ( ractive, key, signature ) {
	  	var getter;
	  	var setter;

	  	// useful for debugging
	  	var getterString;
	  	var getterUseStack;
	  	var setterString;

	  	if ( typeof signature === 'function' ) {
	  		getter = bind( signature, ractive );
	  		getterString = signature.toString();
	  		getterUseStack = true;
	  	}

	  	if ( typeof signature === 'string' ) {
	  		getter = createFunctionFromString( signature, ractive );
	  		getterString = signature;
	  	}

	  	if ( typeof signature === 'object' ) {
	  		if ( typeof signature.get === 'string' ) {
	  			getter = createFunctionFromString( signature.get, ractive );
	  			getterString = signature.get;
	  		} else if ( typeof signature.get === 'function' ) {
	  			getter = bind( signature.get, ractive );
	  			getterString = signature.get.toString();
	  			getterUseStack = true;
	  		} else {
	  			fatal( '`%s` computation must have a `get()` method', key );
	  		}

	  		if ( typeof signature.set === 'function' ) {
	  			setter = bind( signature.set, ractive );
	  			setterString = signature.set.toString();
	  		}
	  	}

	  	return {
	  		getter: getter,
	  		setter: setter,
	  		getterString: getterString,
	  		setterString: setterString,
	  		getterUseStack: getterUseStack
	  	};
	  }

	  var constructHook = new Hook( 'construct' );

	  var registryNames$1 = [
	  	'adaptors',
	  	'components',
	  	'decorators',
	  	'easing',
	  	'events',
	  	'interpolators',
	  	'partials',
	  	'transitions'
	  ];

	  var uid = 0;

	  function construct ( ractive, options ) {
	  	if ( Ractive.DEBUG ) welcome();

	  	initialiseProperties( ractive );

	  	// TODO remove this, eventually
	  	defineProperty( ractive, 'data', { get: deprecateRactiveData });

	  	// TODO don't allow `onconstruct` with `new Ractive()`, there's no need for it
	  	constructHook.fire( ractive, options );

	  	// Add registries
	  	registryNames$1.forEach( function ( name ) {
	  		ractive[ name ] = extendObj( create( ractive.constructor[ name ] || null ), options[ name ] );
	  	});

	  	// Create a viewmodel
	  	var viewmodel = new RootModel({
	  		adapt: getAdaptors( ractive, ractive.adapt, options ),
	  		data: dataConfigurator.init( ractive.constructor, ractive, options ),
	  		ractive: ractive
	  	});

	  	ractive.viewmodel = viewmodel;

	  	// Add computed properties
	  	var computed = extendObj( create( ractive.constructor.prototype.computed ), options.computed );

	  	for ( var key in computed ) {
	  		var signature = getComputationSignature( ractive, key, computed[ key ] );
	  		viewmodel.compute( key, signature );
	  	}
	  }

	  function combine$2 ( a, b ) {
	  	var c = a.slice();
	  	var i = b.length;

	  	while ( i-- ) {
	  		if ( !~c.indexOf( b[i] ) ) {
	  			c.push( b[i] );
	  		}
	  	}

	  	return c;
	  }

	  function getAdaptors ( ractive, protoAdapt, options ) {
	  	protoAdapt = protoAdapt.map( lookup );
	  	var adapt = ensureArray( options.adapt ).map( lookup );

	  	adapt = combine$2( protoAdapt, adapt );

	  	var magic = 'magic' in options ? options.magic : ractive.magic;
	  	var modifyArrays = 'modifyArrays' in options ? options.modifyArrays : ractive.modifyArrays;

	  	if ( magic ) {
	  		if ( !magicSupported ) {
	  			throw new Error( 'Getters and setters (magic mode) are not supported in this browser' );
	  		}

	  		if ( modifyArrays ) {
	  			adapt.push( magicArrayAdaptor );
	  		}

	  		adapt.push( magicAdaptor$1 );
	  	}

	  	if ( modifyArrays ) {
	  		adapt.push( arrayAdaptor );
	  	}

	  	return adapt;


	  	function lookup ( adaptor ) {
	  		if ( typeof adaptor === 'string' ) {
	  			adaptor = findInViewHierarchy( 'adaptors', ractive, adaptor );

	  			if ( !adaptor ) {
	  				fatal( missingPlugin( adaptor, 'adaptor' ) );
	  			}
	  		}

	  		return adaptor;
	  	}
	  }

	  function initialiseProperties ( ractive ) {
	  	// Generate a unique identifier, for places where you'd use a weak map if it
	  	// existed
	  	ractive._guid = 'r-' + uid++;

	  	// events
	  	ractive._subs = create( null );

	  	// storage for item configuration from instantiation to reset,
	  	// like dynamic functions or original values
	  	ractive._config = {};

	  	// nodes registry
	  	ractive.nodes = {};

	  	// events
	  	ractive.event = null;
	  	ractive._eventQueue = [];

	  	// live queries
	  	ractive._liveQueries = [];
	  	ractive._liveComponentQueries = [];

	  	// observers
	  	ractive._observers = [];

	  	if(!ractive.component){
	  		ractive.root = ractive;
	  		ractive.parent = ractive.container = null; // TODO container still applicable?
	  	}

	  }

	  function deprecateRactiveData () {
	  	throw new Error( 'Using `ractive.data` is no longer supported - you must use the `ractive.get()` API instead' );
	  }

	  function getChildQueue ( queue, ractive ) {
	  	return queue[ ractive._guid ] || ( queue[ ractive._guid ] = [] );
	  }

	  function fire ( hookQueue, ractive ) {
	  	var childQueue = getChildQueue( hookQueue.queue, ractive );

	  	hookQueue.hook.fire( ractive );

	  	// queue is "live" because components can end up being
	  	// added while hooks fire on parents that modify data values.
	  	while ( childQueue.length ) {
	  		fire( hookQueue, childQueue.shift() );
	  	}

	  	delete hookQueue.queue[ ractive._guid ];
	  }

	  var HookQueue = function HookQueue ( event ) {
	  	this.hook = new Hook( event );
	  	this.inProcess = {};
	  	this.queue = {};
	  };

	  HookQueue.prototype.begin = function begin ( ractive ) {
	  	this.inProcess[ ractive._guid ] = true;
	  };

	  HookQueue.prototype.end = function end ( ractive ) {
	  	var parent = ractive.parent;

	  	// If this is *isn't* a child of a component that's in process,
	  	// it should call methods or fire at this point
	  	if ( !parent || !this.inProcess[ parent._guid ] ) {
	  		fire( this, ractive );
	  	}
	  	// elsewise, handoff to parent to fire when ready
	  	else {
	  		getChildQueue( this.queue, parent ).push( ractive );
	  	}

	  	delete this.inProcess[ ractive._guid ];
	  };

	  var configHook = new Hook( 'config' );
	  var initHook = new HookQueue( 'init' );

	  function initialise ( ractive, userOptions, options ) {
	  	Object.keys( ractive.viewmodel.computations ).forEach( function ( key ) {
	  		var computation = ractive.viewmodel.computations[ key ];

	  		if ( ractive.viewmodel.value.hasOwnProperty( key ) ) {
	  			computation.set( ractive.viewmodel.value[ key ] );
	  		}
	  	});

	  	// init config from Parent and options
	  	config.init( ractive.constructor, ractive, userOptions );

	  	configHook.fire( ractive );
	  	initHook.begin( ractive );

	  	var fragment;

	  	// Render virtual DOM
	  	if ( ractive.template ) {
	  		var cssIds;

	  		if ( options.cssIds || ractive.cssId ) {
	  			cssIds = options.cssIds ? options.cssIds.slice() : [];

	  			if ( ractive.cssId ) {
	  				cssIds.push( ractive.cssId );
	  			}
	  		}

	  		ractive.fragment = fragment = new Fragment({
	  			owner: ractive,
	  			template: ractive.template,
	  			cssIds: cssIds
	  		}).bind( ractive.viewmodel );
	  	}

	  	initHook.end( ractive );

	  	if ( fragment ) {
	  		// render automatically ( if `el` is specified )
	  		var el = getElement( ractive.el );
	  		if ( el ) {
	  			var promise = ractive.render( el, ractive.append );

	  			if ( Ractive.DEBUG_PROMISES ) {
	  				promise['catch']( function ( err ) {
	  					warnOnceIfDebug( 'Promise debugging is enabled, to help solve errors that happen asynchronously. Some browsers will log unhandled promise rejections, in which case you can safely disable promise debugging:\n  Ractive.DEBUG_PROMISES = false;' );
	  					warnIfDebug( 'An error happened during rendering', { ractive: ractive });
	  					logIfDebug( err );

	  					throw err;
	  				});
	  			}
	  		}
	  	}
	  }

	  var DOMEvent = function DOMEvent ( name, owner ) {
	  	if ( name.indexOf( '*' ) !== -1 ) {
	  		fatal( ("Only component proxy-events may contain \"*\" wildcards, <" + (owner.name) + " on-" + name + "=\"...\"/> is not valid") );
	  	}

	  	this.name = name;
	  	this.owner = owner;
	  	this.node = null;
	  	this.handler = null;
	  };

	  DOMEvent.prototype.listen = function listen ( directive ) {
	  	var node = this.node = this.owner.node;
	  	var name = this.name;

	  	if ( !( ("on" + name) in node ) ) {
	  		warnOnce( missingPlugin( name, 'events' ) );
	  		}

	  		node.addEventListener( name, this.handler = function( event ) {
	  		directive.fire({
	  				node: node,
	  			original: event
	  			});
	  		}, false );
	  };

	  DOMEvent.prototype.unlisten = function unlisten () {
	  	this.node.removeEventListener( this.name, this.handler, false );
	  };

	  var CustomEvent = function CustomEvent ( eventPlugin, owner ) {
	  	this.eventPlugin = eventPlugin;
	  	this.owner = owner;
	  	this.handler = null;
	  };

	  CustomEvent.prototype.listen = function listen ( directive ) {
	  	var node = this.owner.node;

	  	this.handler = this.eventPlugin( node, function ( event ) {
	  		if ( event === void 0 ) event = {};

	  			event.node = event.node || node;
	  		directive.fire( event );
	  	});
	  };

	  CustomEvent.prototype.unlisten = function unlisten () {
	  	this.handler.teardown();
	  };

	  var RactiveEvent = function RactiveEvent ( ractive, name ) {
	  	this.ractive = ractive;
	  	this.name = name;
	  	this.handler = null;
	  };

	  RactiveEvent.prototype.listen = function listen ( directive ) {
	  	var ractive = this.ractive;

	  	this.handler = ractive.on( this.name, function () {
	  		var event;

	  		// semi-weak test, but what else? tag the event obj ._isEvent ?
	  		if ( arguments.length && arguments[0] && arguments[0].node ) {
	  			event = Array.prototype.shift.call( arguments );
	  			event.component = ractive;
	  		}

	  		var args = Array.prototype.slice.call( arguments );
	  		directive.fire( event, args );

	  		// cancel bubbling
	  		return false;
	  	});
	  };

	  RactiveEvent.prototype.unlisten = function unlisten () {
	  	this.handler.cancel();
	  };

	  var specialPattern = /^(event|arguments)(\..+)?$/;
	  var dollarArgsPattern = /^\$(\d+)(\..+)?$/;

	  var EventDirective = function EventDirective ( options ) {
	  	var this$1 = this;

	  		this.owner = options.owner || options.parentFragment.owner || findElement( options.parentFragment );
	  	this.element = this.owner.attributeByName ? this.owner : findElement( options.parentFragment );
	  	this.template = options.template;
	  	this.parentFragment = options.parentFragment;
	  	this.ractive = options.parentFragment.ractive;

	  	this.events = [];

	  	if ( this.element.type === COMPONENT ) {
	  		this.template.n.split( '-' ).forEach( function ( n ) {
	  			this$1.events.push( new RactiveEvent( this$1.element.instance, n ) );
	  		});
	  	} else {
	  		this.template.n.split( '-' ).forEach( function ( n ) {
	  			var fn = findInViewHierarchy( 'events', this$1.ractive, n );
	  			// we need to pass in "this" in order to get
	  			// access to node when it is created.
	  			this$1.events.push(fn ? new CustomEvent( fn, this$1.element ) : new DOMEvent( n, this$1.element ));
	  		});
	  	}

	  	this.context = null;

	  	// method calls
	  	this.resolvers = null;
	  	this.models = null;

	  	// handler directive
	  	this.action = null;
	  	this.args = null;
	  };

	  EventDirective.prototype.bind = function bind () {
	  	var this$1 = this;

	  		this.context = this.parentFragment.findContext();

	  	var template = this.template.f;

	  	if ( template.x ) {
	  		this.fn = getFunction( template.x.s, template.x.r.length );
	  		this.resolvers = [];
	  		this.models = template.x.r.map( function ( ref, i ) {
	  			var specialMatch = specialPattern.exec( ref );
	  			if ( specialMatch ) {
	  				// on-click="foo(event.node)"
	  				return {
	  					special: specialMatch[1],
	  					keys: specialMatch[2] ? splitKeypathI( specialMatch[2].substr(1) ) : []
	  				};
	  			}

	  			var dollarMatch = dollarArgsPattern.exec( ref );
	  			if ( dollarMatch ) {
	  				// on-click="foo($1)"
	  				return {
	  					special: 'arguments',
	  					keys: [ dollarMatch[1] - 1 ].concat( dollarMatch[2] ? splitKeypathI( dollarMatch[2].substr( 1 ) ) : [] )
	  				};
	  			}

	  			var resolver;

	  			var model = resolveReference( this$1.parentFragment, ref );
	  			if ( !model ) {
	  				resolver = this$1.parentFragment.resolve( ref, function ( model ) {
	  					this$1.models[i] = model;
	  					removeFromArray( this$1.resolvers, resolver );
	  					model.register( this$1 );
	  				});

	  				this$1.resolvers.push( resolver );
	  			} else model.register( this$1 );

	  			return model;
	  		});
	  	}

	  	else {
	  		// TODO deprecate this style of directive
	  		this.action = typeof template === 'string' ? // on-click='foo'
	  			template :
	  			typeof template.n === 'string' ? // on-click='{{dynamic}}'
	  				template.n :
	  				new Fragment({
	  					owner: this,
	  					template: template.n
	  				});

	  		this.args = template.a ? // static arguments
	  			( typeof template.a === 'string' ? [ template.a ] : template.a ) :
	  			template.d ? // dynamic arguments
	  				new Fragment({
	  					owner: this,
	  					template: template.d
	  				}) :
	  				[]; // no arguments
	  	}

	  	if ( this.action && typeof this.action !== 'string' ) this.action.bind();
	  	if ( this.args && template.d ) this.args.bind();
	  };

	  EventDirective.prototype.bubble = function bubble () {
	  	if ( !this.dirty ) {
	  		this.dirty = true;
	  		this.owner.bubble();
	  	}
	  };

	  EventDirective.prototype.destroyed = function destroyed () {
	  	this.events.forEach( function ( e ) { return e.unlisten(); } );
	  };

	  EventDirective.prototype.fire = function fire ( event, passedArgs ) {

	  	// augment event object
	  	if ( passedArgs === void 0 ) passedArgs = [];

	  		if ( event && !event.hasOwnProperty( '_element' ) ) {
	  		   addHelpers( event, this.owner );
	  	}

	  	if ( this.fn ) {
	  		var values = [];

	  		if ( event ) passedArgs.unshift( event );

	  		if ( this.models ) {
	  			this.models.forEach( function ( model ) {
	  				if ( !model ) return values.push( undefined );

	  				if ( model.special ) {
	  					var obj = model.special === 'event' ? event : passedArgs;
	  					var keys = model.keys.slice();

	  					while ( keys.length ) obj = obj[ keys.shift() ];
	  					return values.push( obj );
	  				}

	  				if ( model.wrapper ) {
	  					return values.push( model.wrapper.value );
	  				}

	  				values.push( model.get() );
	  			});
	  		}

	  		// make event available as `this.event`
	  		var ractive = this.ractive;
	  		var oldEvent = ractive.event;

	  		ractive.event = event;
	  		var result = this.fn.apply( ractive, values ).pop();

	  		// Auto prevent and stop if return is explicitly false
	  		var original;
	  		if ( result === false && ( original = event.original ) ) {
	  			original.preventDefault && original.preventDefault();
	  			original.stopPropagation && original.stopPropagation();
	  		}

	  		ractive.event = oldEvent;
	  	}

	  	else {
	  		var action = this.action.toString();
	  		var args = this.template.f.d ? this.args.getArgsList() : this.args;

	  		if ( passedArgs.length ) args = args.concat( passedArgs );

	  		if ( event ) event.name = action;

	  		fireEvent( this.ractive, action, {
	  			event: event,
	  			args: args
	  		});
	  	}
	  };

	  EventDirective.prototype.handleChange = function handleChange () {};

	  EventDirective.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		if ( !this.models ) return;
	  	var idx = this.models.indexOf( previous );

	  	if ( ~idx ) {
	  		this.models.splice( idx, 1, next );
	  		previous.unregister( this );
	  		if ( next ) next.addShuffleTask( function () { return next.register( this$1 ); } );
	  	}
	  };

	  EventDirective.prototype.render = function render () {
	  	// render events after everything else, so they fire after bindings
	  	var this$1 = this;

	  		runloop.scheduleTask( function () { return this$1.events.forEach( function ( e ) { return e.listen( this$1 ); }, true ); } );
	  };

	  EventDirective.prototype.toString = function toString() { return ''; };

	  EventDirective.prototype.unbind = function unbind$1 () {
	  	var this$1 = this;

	  		var template = this.template.f;

	  	if ( template.m ) {
	  		if ( this.resolvers ) this.resolvers.forEach( unbind );
	  		this.resolvers = [];

	  		if ( this.models ) this.models.forEach( function ( m ) {
	  			if ( m.unregister ) m.unregister( this$1 );
	  		});
	  		this.models = null;
	  	}

	  	else {
	  		// TODO this is brittle and non-explicit, fix it
	  		if ( this.action && this.action.unbind ) this.action.unbind();
	  		if ( this.args && this.args.unbind ) this.args.unbind();
	  	}
	  };

	  EventDirective.prototype.unrender = function unrender () {
	  	this.events.forEach( function ( e ) { return e.unlisten(); } );
	  };

	  EventDirective.prototype.update = function update () {
	  	if ( this.method || !this.dirty ) return; // nothing to do

	  	this.dirty = false;

	  	// ugh legacy
	  	if ( this.action && this.action.update ) this.action.update();
	  	if ( this.args && this.args.update ) this.args.update();
	  };

	  // TODO it's unfortunate that this has to run every time a
	  // component is rendered... is there a better way?
	  function updateLiveQueries ( component ) {
	  	// Does this need to be added to any live queries?
	  	var instance = component.ractive;

	  	do {
	  		var liveQueries = instance._liveComponentQueries;

	  		var i = liveQueries.length;
	  		while ( i-- ) {
	  			var name = liveQueries[i];
	  			var query = liveQueries[ ("_" + name) ];

	  			if ( query.test( component ) ) {
	  				query.add( component.instance );
	  				// keep register of applicable selectors, for when we teardown
	  				component.liveQueries.push( query );
	  			}
	  		}
	  	} while ( instance = instance.parent );
	  }

	  function removeFromLiveComponentQueries ( component ) {
	  	var instance = component.ractive;

	  	while ( instance ) {
	  		var query = instance._liveComponentQueries[ ("_" + (component.name)) ];
	  		if ( query ) query.remove( component );

	  		instance = instance.parent;
	  	}
	  }

	  function makeDirty ( query ) {
	  	query.makeDirty();
	  }

	  var teardownHook = new Hook( 'teardown' );

	  var Component = (function (Item) {
	  	function Component ( options, ComponentConstructor ) {
	  		var this$1 = this;

	  		Item.call( this, options );
	  		this.type = COMPONENT; // override ELEMENT from super

	  		var instance = create( ComponentConstructor.prototype );

	  		this.instance = instance;
	  		this.name = options.template.e;
	  		this.parentFragment = options.parentFragment;

	  		this.liveQueries = [];

	  		if ( instance.el ) {
	  			warnIfDebug( ("The <" + (this.name) + "> component has a default 'el' property; it has been disregarded") );
	  		}

	  		var partials = options.template.p || {};
	  		if ( !( 'content' in partials ) ) partials.content = options.template.f || [];
	  		this._partials = partials; // TEMP

	  		this.yielders = {};

	  		// find container
	  		var fragment = options.parentFragment;
	  		var container;
	  		while ( fragment ) {
	  			if ( fragment.owner.type === YIELDER ) {
	  				container = fragment.owner.container;
	  				break;
	  			}

	  			fragment = fragment.parent;
	  		}

	  		// add component-instance-specific properties
	  		instance.parent = this.parentFragment.ractive;
	  		instance.container = container || null;
	  		instance.root = instance.parent.root;
	  		instance.component = this;

	  		construct( this.instance, { partials: partials });

	  		// for hackability, this could be an open option
	  		// for any ractive instance, but for now, just
	  		// for components and just for ractive...
	  		instance._inlinePartials = partials;

	  		this.attributeByName = {};

	  		this.attributes = [];
	  		var leftovers = [];
	  		( this.template.m || [] ).forEach( function ( template ) {
	  			switch ( template.t ) {
	  				case ATTRIBUTE:
	  				case EVENT:
	  				case TRANSITION:
	  					this$1.attributes.push( createItem({
	  						owner: this$1,
	  						parentFragment: this$1.parentFragment,
	  						template: template
	  					}) );
	  					break;

	  				case BINDING_FLAG:
	  				case DECORATOR:
	  					break;

	  				default:
	  					leftovers.push( template );
	  					break;
	  			}
	  		});

	  		this.attributes.push( new ConditionalAttribute({
	  			owner: this,
	  			parentFragment: this.parentFragment,
	  			template: leftovers
	  		}) );

	  		this.eventHandlers = [];
	  		if ( this.template.v ) this.setupEvents();
	  	}

	  	Component.prototype = Object.create( Item && Item.prototype );
	  	Component.prototype.constructor = Component;

	  	Component.prototype.bind = function bind$1$$ () {
	  		this.attributes.forEach( bind$1 );

	  		initialise( this.instance, {
	  			partials: this._partials
	  		}, {
	  			cssIds: this.parentFragment.cssIds
	  		});

	  		this.eventHandlers.forEach( bind$1 );

	  		this.bound = true;
	  	};

	  	Component.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.dirty = true;
	  			this.parentFragment.bubble();
	  		}
	  	};

	  	Component.prototype.checkYielders = function checkYielders () {
	  		var this$1 = this;

	  		Object.keys( this.yielders ).forEach( function ( name ) {
	  			if ( this$1.yielders[ name ].length > 1 ) {
	  				runloop.end();
	  				throw new Error( ("A component template can only have one {{yield" + (name ? ' ' + name : '') + "}} declaration at a time") );
	  			}
	  		});
	  	};

	  	Component.prototype.destroyed = function destroyed () {
	  		if ( this.instance.fragment ) this.instance.fragment.destroyed();
	  	};

	  	Component.prototype.detach = function detach () {
	  		return this.instance.fragment.detach();
	  	};

	  	Component.prototype.find = function find ( selector ) {
	  		return this.instance.fragment.find( selector );
	  	};

	  	Component.prototype.findAll = function findAll ( selector, query ) {
	  		this.instance.fragment.findAll( selector, query );
	  	};

	  	Component.prototype.findComponent = function findComponent ( name ) {
	  		if ( !name || this.name === name ) return this.instance;

	  		if ( this.instance.fragment ) {
	  			return this.instance.fragment.findComponent( name );
	  		}
	  	};

	  	Component.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		if ( query.test( this ) ) {
	  			query.add( this.instance );

	  			if ( query.live ) {
	  				this.liveQueries.push( query );
	  			}
	  		}

	  		this.instance.fragment.findAllComponents( name, query );
	  	};

	  	Component.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.instance.fragment.firstNode( skipParent );
	  	};

	  	Component.prototype.render = function render$1$$ ( target, occupants ) {
	  		render$1( this.instance, target, null, occupants );

	  		this.checkYielders();
	  		this.attributes.forEach( render );
	  		this.eventHandlers.forEach( render );
	  		updateLiveQueries( this );

	  		this.rendered = true;
	  	};

	  	Component.prototype.setupEvents = function setupEvents () {
	  		var this$1 = this;

	  		var handlers = this.eventHandlers;

	  		Object.keys( this.template.v ).forEach( function ( key ) {
	  			var eventNames = key.split( '-' );
	  			var template = this$1.template.v[ key ];

	  			eventNames.forEach( function ( eventName ) {
	  				var event = new RactiveEvent( this$1.instance, eventName );
	  				handlers.push( new EventDirective( this$1, event, template ) );
	  			});
	  		});
	  	};

	  	Component.prototype.shuffled = function shuffled () {
	  		this.liveQueries.forEach( makeDirty );
	  		Item.prototype.shuffled.call(this);
	  	};

	  	Component.prototype.toString = function toString () {
	  		return this.instance.toHTML();
	  	};

	  	Component.prototype.unbind = function unbind$1 () {
	  		this.bound = false;

	  		this.attributes.forEach( unbind );

	  		var instance = this.instance;
	  		instance.viewmodel.teardown();
	  		instance.fragment.unbind();
	  		instance._observers.forEach( cancel );

	  		removeFromLiveComponentQueries( this );

	  		if ( instance.fragment.rendered && instance.el.__ractive_instances__ ) {
	  			removeFromArray( instance.el.__ractive_instances__, instance );
	  		}

	  		teardownHook.fire( instance );
	  	};

	  	Component.prototype.unrender = function unrender$1 ( shouldDestroy ) {
	  		var this$1 = this;

	  		this.rendered = false;

	  		this.shouldDestroy = shouldDestroy;
	  		this.instance.unrender();
	  		this.attributes.forEach( unrender );
	  		this.eventHandlers.forEach( unrender );
	  		this.liveQueries.forEach( function ( query ) { return query.remove( this$1.instance ); } );
	  	};

	  	Component.prototype.update = function update$1 () {
	  		this.dirty = false;
	  		this.instance.fragment.update();
	  		this.checkYielders();
	  		this.attributes.forEach( update );
	  		this.eventHandlers.forEach( update );
	  	};

	  	return Component;
	  }(Item));

	  var missingDecorator = {
	  	update: noop,
	  	teardown: noop
	  };

	  var Decorator = function Decorator ( options ) {
	  	this.owner = options.owner || options.parentFragment.owner || findElement( options.parentFragment );
	  	this.element = this.owner.attributeByName ? this.owner : findElement( options.parentFragment );
	  	this.parentFragment = this.owner.parentFragment;
	  	this.ractive = this.owner.ractive;
	  	var template = this.template = options.template;

	  	this.dynamicName = typeof template.f.n === 'object';
	  	this.dynamicArgs = !!template.f.d;

	  	if ( this.dynamicName ) {
	  		this.nameFragment = new Fragment({
	  			owner: this,
	  			template: template.f.n
	  		});
	  	} else {
	  		this.name = template.f.n || template.f;
	  	}

	  	if ( this.dynamicArgs ) {
	  		this.argsFragment = new Fragment({
	  			owner: this,
	  			template: template.f.d
	  		});
	  	} else {
	  		if ( template.f.a && template.f.a.s ) {
	  			this.args = [];
	  		} else {
	  			this.args = template.f.a || [];
	  		}
	  	}

	  	this.node = null;
	  	this.intermediary = null;

	  	this.element.decorators.push( this );
	  };

	  Decorator.prototype.bind = function bind () {
	  	var this$1 = this;

	  		if ( this.dynamicName ) {
	  		this.nameFragment.bind();
	  		this.name = this.nameFragment.toString();
	  	}

	  	if ( this.dynamicArgs ) this.argsFragment.bind();

	  	// TODO: dry this up once deprecation is done
	  	if ( this.template.f.a && this.template.f.a.s ) {
	  		this.resolvers = [];
	  		this.models = this.template.f.a.r.map( function ( ref, i ) {
	  			var resolver;
	  			var model = resolveReference( this$1.parentFragment, ref );
	  			if ( !model ) {
	  				resolver = this$1.parentFragment.resolve( ref, function ( model ) {
	  					this$1.models[i] = model;
	  					removeFromArray( this$1.resolvers, resolver );
	  					model.register( this$1 );
	  				});

	  				this$1.resolvers.push( resolver );
	  			} else model.register( this$1 );

	  			return model;
	  		});
	  		this.argsFn = getFunction( this.template.f.a.s, this.template.f.a.r.length );
	  	}
	  };

	  Decorator.prototype.bubble = function bubble () {
	  	if ( !this.dirty ) {
	  		this.dirty = true;
	  		this.owner.bubble();
	  	}
	  };

	  Decorator.prototype.destroyed = function destroyed () {
	  	if ( this.intermediary ) this.intermediary.teardown();
	  };

	  Decorator.prototype.handleChange = function handleChange () { this.bubble(); };

	  Decorator.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  	var idx = this.models.indexOf( previous );
	  	if ( !~idx ) return;

	  	next = rebindMatch( this.template.f.a.r[ idx ], next, previous );
	  	if ( next === previous ) return;

	  	previous.unregister( this );
	  	this.models.splice( idx, 1, next );
	  	if ( next ) next.addShuffleRegister( this, 'mark' );

	  	if ( !safe ) this.bubble();
	  };

	  Decorator.prototype.render = function render () {
	  	var this$1 = this;

	  		runloop.scheduleTask( function () {
	  		var fn = findInViewHierarchy( 'decorators', this$1.ractive, this$1.name );

	  		if ( !fn ) {
	  			warnOnce( missingPlugin( this$1.name, 'decorator' ) );
	  			this$1.intermediary = missingDecorator;
	  			return;
	  		}

	  		this$1.node = this$1.element.node;

	  		var args;
	  		if ( this$1.argsFn ) {
	  			args = this$1.models.map( function ( model ) {
	  				if ( !model ) return undefined;

	  				return model.get();
	  			});
	  			args = this$1.argsFn.apply( this$1.ractive, args );
	  		} else {
	  			args = this$1.dynamicArgs ? this$1.argsFragment.getArgsList() : this$1.args;
	  		}

	  		this$1.intermediary = fn.apply( this$1.ractive, [ this$1.node ].concat( args ) );

	  		if ( !this$1.intermediary || !this$1.intermediary.teardown ) {
	  			throw new Error( ("The '" + (this$1.name) + "' decorator must return an object with a teardown method") );
	  		}
	  	}, true );
	  	this.rendered = true;
	  };

	  Decorator.prototype.toString = function toString () { return ''; };

	  Decorator.prototype.unbind = function unbind$1 () {
	  	var this$1 = this;

	  		if ( this.dynamicName ) this.nameFragment.unbind();
	  	if ( this.dynamicArgs ) this.argsFragment.unbind();
	  	if ( this.resolvers ) this.resolvers.forEach( unbind );
	  	if ( this.models ) this.models.forEach( function ( m ) {
	  		if ( m ) m.unregister( this$1 );
	  	});
	  };

	  Decorator.prototype.unrender = function unrender ( shouldDestroy ) {
	  	if ( ( !shouldDestroy || this.element.rendered ) && this.intermediary ) this.intermediary.teardown();
	  	this.rendered = false;
	  };

	  Decorator.prototype.update = function update () {
	  	if ( !this.dirty ) return;

	  	this.dirty = false;

	  	var nameChanged = false;

	  	if ( this.dynamicName && this.nameFragment.dirty ) {
	  		var name = this.nameFragment.toString();
	  		nameChanged = name !== this.name;
	  		this.name = name;
	  	}

	  	if ( this.intermediary ) {
	  		if ( nameChanged || !this.intermediary.update ) {
	  			this.unrender();
	  			this.render();
	  		}
	  		else {
	  			if ( this.dynamicArgs ) {
	  				if ( this.argsFragment.dirty ) {
	  					var args = this.argsFragment.getArgsList();
	  					this.intermediary.update.apply( this.ractive, args );
	  				}
	  			}
	  			else if ( this.argsFn ) {
	  				var args$1 = this.models.map( function ( model ) {
	  					if ( !model ) return undefined;

	  					return model.get();
	  				});
	  				this.intermediary.update.apply( this.ractive, this.argsFn.apply( this.ractive, args$1 ) );
	  			}
	  			else {
	  				this.intermediary.update.apply( this.ractive, this.args );
	  			}
	  		}
	  	}

	  	// need to run these for unrender/render cases
	  	// so can't just be in conditional if above

	  	if ( this.dynamicName && this.nameFragment.dirty ) {
	  		this.nameFragment.update();
	  	}

	  	if ( this.dynamicArgs && this.argsFragment.dirty ) {
	  		this.argsFragment.update();
	  	}
	  };

	  var Doctype = (function (Item) {
	  	function Doctype () {
	  		Item.apply(this, arguments);
	  	}

	  	Doctype.prototype = Object.create( Item && Item.prototype );
	  	Doctype.prototype.constructor = Doctype;

	  	Doctype.prototype.bind = function bind () {
	  		// noop
	  	};

	  	Doctype.prototype.render = function render () {
	  		// noop
	  	};

	  	Doctype.prototype.teardown = function teardown () {
	  		// noop
	  	};

	  	Doctype.prototype.toString = function toString () {
	  		return '<!DOCTYPE' + this.template.a + '>';
	  	};

	  	Doctype.prototype.unbind = function unbind () {
	  		// noop
	  	};

	  	Doctype.prototype.unrender = function unrender () {
	  		// noop
	  	};

	  	return Doctype;
	  }(Item));

	  function updateLiveQueries$1 ( element ) {
	  	// Does this need to be added to any live queries?
	  	var node = element.node;
	  	var instance = element.ractive;

	  	do {
	  		var liveQueries = instance._liveQueries;

	  		var i = liveQueries.length;
	  		while ( i-- ) {
	  			var selector = liveQueries[i];
	  			var query = liveQueries[ ("_" + selector) ];

	  			if ( query.test( node ) ) {
	  				query.add( node );
	  				// keep register of applicable selectors, for when we teardown
	  				element.liveQueries.push( query );
	  			}
	  		}
	  	} while ( instance = instance.parent );
	  }

	  // TODO element.parent currently undefined
	  function findParentForm ( element ) {
	  	while ( element = element.parent ) {
	  		if ( element.name === 'form' ) {
	  			return element;
	  		}
	  	}
	  }

	  function warnAboutAmbiguity ( description, ractive ) {
	  	warnOnceIfDebug( ("The " + description + " being used for two-way binding is ambiguous, and may cause unexpected results. Consider initialising your data to eliminate the ambiguity"), { ractive: ractive });
	  }

	  var Binding = function Binding ( element, name ) {
	  	if ( name === void 0 ) name = 'value';

	  		this.element = element;
	  	this.ractive = element.ractive;
	  	this.attribute = element.attributeByName[ name ];

	  	var interpolator = this.attribute.interpolator;
	  	interpolator.twowayBinding = this;

	  	var model = interpolator.model;

	  	// not bound?
	  	if ( !model ) {
	  		// try to force resolution
	  		interpolator.resolver.forceResolution();
	  		model = interpolator.model;

	  		warnAboutAmbiguity( ("'" + (interpolator.template.r) + "' reference"), this.ractive );
	  	}

	  	else if ( model.isUnresolved ) {
	  		// reference expressions (e.g. foo[bar])
	  		model.forceResolution();
	  		warnAboutAmbiguity( 'expression', this.ractive );
	  	}

	  	// TODO include index/key/keypath refs as read-only
	  	else if ( model.isReadonly ) {
	  		var keypath = model.getKeypath().replace( /^@/, '' );
	  			warnOnceIfDebug( ("Cannot use two-way binding on <" + (element.name) + "> element: " + keypath + " is read-only. To suppress this warning use <" + (element.name) + " twoway='false'...>"), { ractive: this.ractive });
	  		return false;
	  	}

	  	this.attribute.isTwoway = true;
	  	this.model = model;

	  	// initialise value, if it's undefined
	  	var value = model.get();
	  	this.wasUndefined = value === undefined;

	  	if ( value === undefined && this.getInitialValue ) {
	  		value = this.getInitialValue();
	  		model.set( value );
	  	}

	  	var parentForm = findParentForm( element );
	  	if ( parentForm ) {
	  		this.resetValue = value;
	  		parentForm.formBindings.push( this );
	  	}
	  };

	  Binding.prototype.bind = function bind () {
	  	this.model.registerTwowayBinding( this );
	  };

	  Binding.prototype.handleChange = function handleChange () {
	  	var this$1 = this;

	  		var value = this.getValue();
	  	if ( this.lastVal() === value ) return;

	  	runloop.start( this.root );
	  	this.attribute.locked = true;
	  	this.model.set( value );
	  	this.lastVal( true, value );

	  	// if the value changes before observers fire, unlock to be updatable cause something weird and potentially freezy is up
	  	if ( this.model.get() !== value ) this.attribute.locked = false;
	  	else runloop.scheduleTask( function () { return this$1.attribute.locked = false; } );

	  	runloop.end();
	  };

	  Binding.prototype.lastVal = function lastVal ( setting, value ) {
	  	if ( setting ) this.lastValue = value;
	  	else return this.lastValue;
	  };

	  Binding.prototype.rebinding = function rebinding ( next, previous ) {
	  	var this$1 = this;

	  		if ( this.model && this.model === previous ) previous.unregisterTwowayBinding( this );
	  	if ( next ) {
	  		this.model = next;
	  		runloop.scheduleTask( function () { return next.registerTwowayBinding( this$1 ); } );
	  	}
	     };

	  Binding.prototype.render = function render () {
	  	this.node = this.element.node;
	  	this.node._ractive.binding = this;
	  	this.rendered = true; // TODO is this used anywhere?
	  };

	  Binding.prototype.setFromNode = function setFromNode ( node ) {
	  	this.model.set( node.value );
	  };

	  Binding.prototype.unbind = function unbind () {
	  	this.model.unregisterTwowayBinding( this );
	  };

	  Binding.prototype.unrender = function unrender () {
	  	// noop?
	  };

	  // This is the handler for DOM events that would lead to a change in the model
	  // (i.e. change, sometimes, input, and occasionally click and keyup)
	  function handleDomEvent () {
	  	this._ractive.binding.handleChange();
	  }

	  var CheckboxBinding = (function (Binding) {
	  	function CheckboxBinding ( element ) {
	  		Binding.call( this, element, 'checked' );
	  	}

	  	CheckboxBinding.prototype = Object.create( Binding && Binding.prototype );
	  	CheckboxBinding.prototype.constructor = CheckboxBinding;

	  	CheckboxBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		this.node.addEventListener( 'change', handleDomEvent, false );

	  		if ( this.node.attachEvent ) {
	  			this.node.addEventListener( 'click', handleDomEvent, false );
	  		}
	  	};

	  	CheckboxBinding.prototype.unrender = function unrender () {
	  		this.node.removeEventListener( 'change', handleDomEvent, false );
	  		this.node.removeEventListener( 'click', handleDomEvent, false );
	  	};

	  	CheckboxBinding.prototype.getInitialValue = function getInitialValue () {
	  		return !!this.element.getAttribute( 'checked' );
	  	};

	  	CheckboxBinding.prototype.getValue = function getValue () {
	  		return this.node.checked;
	  	};

	  	CheckboxBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.model.set( node.checked );
	  	};

	  	return CheckboxBinding;
	  }(Binding));

	  function getBindingGroup ( group, model, getValue ) {
	  	var hash = "" + group + "-bindingGroup";
	  	return model[hash] || ( model[ hash ] = new BindingGroup( hash, model, getValue ) );
	  }

	  var BindingGroup = function BindingGroup ( hash, model, getValue ) {
	  	var this$1 = this;

	  		this.model = model;
	  	this.hash = hash;
	  	this.getValue = function () {
	  		this$1.value = getValue.call(this$1);
	  		return this$1.value;
	  	};

	  	this.bindings = [];
	  };

	  BindingGroup.prototype.add = function add ( binding ) {
	  	this.bindings.push( binding );
	  };

	  BindingGroup.prototype.bind = function bind () {
	  	this.value = this.model.get();
	  	this.model.registerTwowayBinding( this );
	  	this.bound = true;
	  };

	  BindingGroup.prototype.remove = function remove ( binding ) {
	  	removeFromArray( this.bindings, binding );
	  	if ( !this.bindings.length ) {
	  		this.unbind();
	  	}
	  };

	  BindingGroup.prototype.unbind = function unbind () {
	  	this.model.unregisterTwowayBinding( this );
	  	this.bound = false;
	  	delete this.model[this.hash];
	  };

	  var push$2 = [].push;

	  function getValue() {
	  	var all = this.bindings.filter(function ( b ) { return b.node && b.node.checked; }).map(function ( b ) { return b.element.getAttribute( 'value' ); });
	  	var res = [];
	  	all.forEach(function ( v ) { if ( !arrayContains( res, v ) ) res.push( v ); });
	  	return res;
	  }

	  var CheckboxNameBinding = (function (Binding) {
	  	function CheckboxNameBinding ( element ) {
	  		Binding.call( this, element, 'name' );

	  		this.checkboxName = true; // so that ractive.updateModel() knows what to do with this

	  		// Each input has a reference to an array containing it and its
	  		// group, as two-way binding depends on being able to ascertain
	  		// the status of all inputs within the group
	  		this.group = getBindingGroup( 'checkboxes', this.model, getValue );
	  		this.group.add( this );

	  		if ( this.noInitialValue ) {
	  			this.group.noInitialValue = true;
	  		}

	  		// If no initial value was set, and this input is checked, we
	  		// update the model
	  		if ( this.group.noInitialValue && this.element.getAttribute( 'checked' ) ) {
	  			var existingValue = this.model.get();
	  			var bindingValue = this.element.getAttribute( 'value' );

	  			if ( !arrayContains( existingValue, bindingValue ) ) {
	  				push$2.call( existingValue, bindingValue ); // to avoid triggering runloop with array adaptor
	  			}
	  		}
	  	}

	  	CheckboxNameBinding.prototype = Object.create( Binding && Binding.prototype );
	  	CheckboxNameBinding.prototype.constructor = CheckboxNameBinding;

	  	CheckboxNameBinding.prototype.bind = function bind () {
	  		if ( !this.group.bound ) {
	  			this.group.bind();
	  		}
	  	};

	  	CheckboxNameBinding.prototype.changed = function changed () {
	  		var wasChecked = !!this.isChecked;
	  		this.isChecked = this.node.checked;
	  		return this.isChecked === wasChecked;
	  	};

	  	CheckboxNameBinding.prototype.getInitialValue = function getInitialValue () {
	  		// This only gets called once per group (of inputs that
	  		// share a name), because it only gets called if there
	  		// isn't an initial value. By the same token, we can make
	  		// a note of that fact that there was no initial value,
	  		// and populate it using any `checked` attributes that
	  		// exist (which users should avoid, but which we should
	  		// support anyway to avoid breaking expectations)
	  		this.noInitialValue = true; // TODO are noInitialValue and wasUndefined the same thing?
	  		return [];
	  	};

	  	CheckboxNameBinding.prototype.getValue = function getValue$1 () {
	  		return this.group.value;
	  	};

	  	CheckboxNameBinding.prototype.handleChange = function handleChange () {
	  		this.isChecked = this.element.node.checked;
	  		this.group.value = this.model.get();
	  		var value = this.element.getAttribute( 'value' );
	  		if ( this.isChecked && !arrayContains( this.group.value, value ) ) {
	  			this.group.value.push( value );
	  		} else if ( !this.isChecked && arrayContains( this.group.value, value ) ) {
	  			removeFromArray( this.group.value, value );
	  		}
	  		// make sure super knows there's a change
	  		this.lastValue = null;
	  		Binding.prototype.handleChange.call(this);
	  	};

	  	CheckboxNameBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		var node = this.node;

	  		var existingValue = this.model.get();
	  		var bindingValue = this.element.getAttribute( 'value' );

	  		if ( isArray( existingValue ) ) {
	  			this.isChecked = arrayContains( existingValue, bindingValue );
	  		} else {
	  			this.isChecked = existingValue == bindingValue;
	  		}

	  		node.name = '{{' + this.model.getKeypath() + '}}';
	  		node.checked = this.isChecked;

	  		node.addEventListener( 'change', handleDomEvent, false );

	  		// in case of IE emergency, bind to click event as well
	  		if ( node.attachEvent ) {
	  			node.addEventListener( 'click', handleDomEvent, false );
	  		}
	  	};

	  	CheckboxNameBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.group.bindings.forEach( function ( binding ) { return binding.wasUndefined = true; } );

	  		if ( node.checked ) {
	  			var valueSoFar = this.group.getValue();
	  			valueSoFar.push( this.element.getAttribute( 'value' ) );

	  			this.group.model.set( valueSoFar );
	  		}
	  	};

	  	CheckboxNameBinding.prototype.unbind = function unbind () {
	  		this.group.remove( this );
	  	};

	  	CheckboxNameBinding.prototype.unrender = function unrender () {
	  		var node = this.element.node;

	  		node.removeEventListener( 'change', handleDomEvent, false );
	  		node.removeEventListener( 'click', handleDomEvent, false );
	  	};

	  	return CheckboxNameBinding;
	  }(Binding));

	  var ContentEditableBinding = (function (Binding) {
	  	function ContentEditableBinding () {
	  		Binding.apply(this, arguments);
	  	}

	  	ContentEditableBinding.prototype = Object.create( Binding && Binding.prototype );
	  	ContentEditableBinding.prototype.constructor = ContentEditableBinding;

	  	ContentEditableBinding.prototype.getInitialValue = function getInitialValue () {
	  		return this.element.fragment ? this.element.fragment.toString() : '';
	  	};

	  	ContentEditableBinding.prototype.getValue = function getValue () {
	  		return this.element.node.innerHTML;
	  	};

	  	ContentEditableBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		var node = this.node;

	  		node.addEventListener( 'change', handleDomEvent, false );
	  		node.addEventListener( 'blur', handleDomEvent, false );

	  		if ( !this.ractive.lazy ) {
	  			node.addEventListener( 'input', handleDomEvent, false );

	  			if ( node.attachEvent ) {
	  				node.addEventListener( 'keyup', handleDomEvent, false );
	  			}
	  		}
	  	};

	  	ContentEditableBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.model.set( node.innerHTML );
	  	};

	  	ContentEditableBinding.prototype.unrender = function unrender () {
	  		var node = this.node;

	  		node.removeEventListener( 'blur', handleDomEvent, false );
	  		node.removeEventListener( 'change', handleDomEvent, false );
	  		node.removeEventListener( 'input', handleDomEvent, false );
	  		node.removeEventListener( 'keyup', handleDomEvent, false );
	  	};

	  	return ContentEditableBinding;
	  }(Binding));

	  function handleBlur () {
	  	handleDomEvent.call( this );

	  	var value = this._ractive.binding.model.get();
	  	this.value = value == undefined ? '' : value;
	  }

	  function handleDelay ( delay ) {
	  	var timeout;

	  	return function () {
	  		var this$1 = this;

	  		if ( timeout ) clearTimeout( timeout );

	  		timeout = setTimeout( function () {
	  			var binding = this$1._ractive.binding;
	  			if ( binding.rendered ) handleDomEvent.call( this$1 );
	  			timeout = null;
	  		}, delay );
	  	};
	  }

	  var GenericBinding = (function (Binding) {
	  	function GenericBinding () {
	  		Binding.apply(this, arguments);
	  	}

	  	GenericBinding.prototype = Object.create( Binding && Binding.prototype );
	  	GenericBinding.prototype.constructor = GenericBinding;

	  	GenericBinding.prototype.getInitialValue = function getInitialValue () {
	  		return '';
	  	};

	  	GenericBinding.prototype.getValue = function getValue () {
	  		return this.node.value;
	  	};

	  	GenericBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		// any lazy setting for this element overrides the root
	  		// if the value is a number, it's a timeout
	  		var lazy = this.ractive.lazy;
	  		var timeout = false;

	  		if ( 'lazy' in this.element ) {
	  			lazy = this.element.lazy;
	  		}

	  		if ( isNumeric( lazy ) ) {
	  			timeout = +lazy;
	  			lazy = false;
	  		}

	  		this.handler = timeout ? handleDelay( timeout ) : handleDomEvent;

	  		var node = this.node;

	  		node.addEventListener( 'change', handleDomEvent, false );

	  		if ( !lazy ) {
	  			node.addEventListener( 'input', this.handler, false );

	  			if ( node.attachEvent ) {
	  				node.addEventListener( 'keyup', this.handler, false );
	  			}
	  		}

	  		node.addEventListener( 'blur', handleBlur, false );
	  	};

	  	GenericBinding.prototype.unrender = function unrender () {
	  		var node = this.element.node;
	  		this.rendered = false;

	  		node.removeEventListener( 'change', handleDomEvent, false );
	  		node.removeEventListener( 'input', this.handler, false );
	  		node.removeEventListener( 'keyup', this.handler, false );
	  		node.removeEventListener( 'blur', handleBlur, false );
	  	};

	  	return GenericBinding;
	  }(Binding));

	  function getSelectedOptions ( select ) {
	      return select.selectedOptions
	  		? toArray( select.selectedOptions )
	  		: select.options
	  			? toArray( select.options ).filter( function ( option ) { return option.selected; } )
	  			: [];
	  }

	  var MultipleSelectBinding = (function (Binding) {
	  	function MultipleSelectBinding () {
	  		Binding.apply(this, arguments);
	  	}

	  	MultipleSelectBinding.prototype = Object.create( Binding && Binding.prototype );
	  	MultipleSelectBinding.prototype.constructor = MultipleSelectBinding;

	  	MultipleSelectBinding.prototype.forceUpdate = function forceUpdate () {
	  		var this$1 = this;

	  		var value = this.getValue();

	  		if ( value !== undefined ) {
	  			this.attribute.locked = true;
	  			runloop.scheduleTask( function () { return this$1.attribute.locked = false; } );
	  			this.model.set( value );
	  		}
	  	};

	  	MultipleSelectBinding.prototype.getInitialValue = function getInitialValue () {
	  		return this.element.options
	  			.filter( function ( option ) { return option.getAttribute( 'selected' ); } )
	  			.map( function ( option ) { return option.getAttribute( 'value' ); } );
	  	};

	  	MultipleSelectBinding.prototype.getValue = function getValue () {
	  		var options = this.element.node.options;
	  		var len = options.length;

	  		var selectedValues = [];

	  		for ( var i = 0; i < len; i += 1 ) {
	  			var option = options[i];

	  			if ( option.selected ) {
	  				var optionValue = option._ractive ? option._ractive.value : option.value;
	  				selectedValues.push( optionValue );
	  			}
	  		}

	  		return selectedValues;
	  	};

	  	MultipleSelectBinding.prototype.handleChange = function handleChange () {
	  		var attribute = this.attribute;
	  		var previousValue = attribute.getValue();

	  		var value = this.getValue();

	  		if ( previousValue === undefined || !arrayContentsMatch( value, previousValue ) ) {
	  			Binding.prototype.handleChange.call(this);
	  		}

	  		return this;
	  	};

	  	MultipleSelectBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		this.node.addEventListener( 'change', handleDomEvent, false );

	  		if ( this.model.get() === undefined ) {
	  			// get value from DOM, if possible
	  			this.handleChange();
	  		}
	  	};

	  	MultipleSelectBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		var selectedOptions = getSelectedOptions( node );
	  		var i = selectedOptions.length;
	  		var result = new Array( i );

	  		while ( i-- ) {
	  			var option = selectedOptions[i];
	  			result[i] = option._ractive ? option._ractive.value : option.value;
	  		}

	  		this.model.set( result );
	  	};

	  	MultipleSelectBinding.prototype.setValue = function setValue () {
	  		throw new Error( 'TODO not implemented yet' );
	  	};

	  	MultipleSelectBinding.prototype.unrender = function unrender () {
	  		this.node.removeEventListener( 'change', handleDomEvent, false );
	  	};

	  	MultipleSelectBinding.prototype.updateModel = function updateModel () {
	  		if ( this.attribute.value === undefined || !this.attribute.value.length ) {
	  			this.keypath.set( this.initialValue );
	  		}
	  	};

	  	return MultipleSelectBinding;
	  }(Binding));

	  var NumericBinding = (function (GenericBinding) {
	  	function NumericBinding () {
	  		GenericBinding.apply(this, arguments);
	  	}

	  	NumericBinding.prototype = Object.create( GenericBinding && GenericBinding.prototype );
	  	NumericBinding.prototype.constructor = NumericBinding;

	  	NumericBinding.prototype.getInitialValue = function getInitialValue () {
	  		return undefined;
	  	};

	  	NumericBinding.prototype.getValue = function getValue () {
	  		var value = parseFloat( this.node.value );
	  		return isNaN( value ) ? undefined : value;
	  	};

	  	NumericBinding.prototype.setFromNode = function setFromNode( node ) {
	  		var value = parseFloat( node.value );
	  		if ( !isNaN( value ) ) this.model.set( value );
	  	};

	  	return NumericBinding;
	  }(GenericBinding));

	  var siblings = {};

	  function getSiblings ( hash ) {
	  	return siblings[ hash ] || ( siblings[ hash ] = [] );
	  }

	  var RadioBinding = (function (Binding) {
	  	function RadioBinding ( element ) {
	  		Binding.call( this, element, 'checked' );

	  		this.siblings = getSiblings( this.ractive._guid + this.element.getAttribute( 'name' ) );
	  		this.siblings.push( this );
	  	}

	  	RadioBinding.prototype = Object.create( Binding && Binding.prototype );
	  	RadioBinding.prototype.constructor = RadioBinding;

	  	RadioBinding.prototype.getValue = function getValue () {
	  		return this.node.checked;
	  	};

	  	RadioBinding.prototype.handleChange = function handleChange () {
	  		runloop.start( this.root );

	  		this.siblings.forEach( function ( binding ) {
	  			binding.model.set( binding.getValue() );
	  		});

	  		runloop.end();
	  	};

	  	RadioBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		this.node.addEventListener( 'change', handleDomEvent, false );

	  		if ( this.node.attachEvent ) {
	  			this.node.addEventListener( 'click', handleDomEvent, false );
	  		}
	  	};

	  	RadioBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		this.model.set( node.checked );
	  	};

	  	RadioBinding.prototype.unbind = function unbind () {
	  		removeFromArray( this.siblings, this );
	  	};

	  	RadioBinding.prototype.unrender = function unrender () {
	  		this.node.removeEventListener( 'change', handleDomEvent, false );
	  		this.node.removeEventListener( 'click', handleDomEvent, false );
	  	};

	  	return RadioBinding;
	  }(Binding));

	  function getValue$1() {
	  	var checked = this.bindings.filter( function ( b ) { return b.node.checked; } );
	  	if ( checked.length > 0 ) {
	  		return checked[0].element.getAttribute( 'value' );
	  	}
	  }

	  var RadioNameBinding = (function (Binding) {
	  	function RadioNameBinding ( element ) {
	  		Binding.call( this, element, 'name' );

	  		this.group = getBindingGroup( 'radioname', this.model, getValue$1 );
	  		this.group.add( this );

	  		if ( element.checked ) {
	  			this.group.value = this.getValue();
	  		}
	  	}

	  	RadioNameBinding.prototype = Object.create( Binding && Binding.prototype );
	  	RadioNameBinding.prototype.constructor = RadioNameBinding;

	  	RadioNameBinding.prototype.bind = function bind () {
	  		var this$1 = this;

	  		if ( !this.group.bound ) {
	  			this.group.bind();
	  		}

	  		// update name keypath when necessary
	  		this.nameAttributeBinding = {
	  			handleChange: function () { return this$1.node.name = "{{" + (this$1.model.getKeypath()) + "}}"; }
	  		};

	  		this.model.getKeypathModel().register( this.nameAttributeBinding );
	  	};

	  	RadioNameBinding.prototype.getInitialValue = function getInitialValue () {
	  		if ( this.element.getAttribute( 'checked' ) ) {
	  			return this.element.getAttribute( 'value' );
	  		}
	  	};

	  	RadioNameBinding.prototype.getValue = function getValue$1 () {
	  		return this.element.getAttribute( 'value' );
	  	};

	  	RadioNameBinding.prototype.handleChange = function handleChange () {
	  		// If this <input> is the one that's checked, then the value of its
	  		// `name` model gets set to its value
	  		if ( this.node.checked ) {
	  			this.group.value = this.getValue();
	  			Binding.prototype.handleChange.call(this);
	  		}
	  	};

	  	RadioNameBinding.prototype.lastVal = function lastVal ( setting, value ) {
	  		if ( setting ) this.group.lastValue = value;
	  		else return this.group.lastValue;
	  	};

	  	RadioNameBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);

	  		var node = this.node;

	  		node.name = "{{" + (this.model.getKeypath()) + "}}";
	  		node.checked = this.model.get() == this.element.getAttribute( 'value' );

	  		node.addEventListener( 'change', handleDomEvent, false );

	  		if ( node.attachEvent ) {
	  			node.addEventListener( 'click', handleDomEvent, false );
	  		}
	  	};

	  	RadioNameBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		if ( node.checked ) {
	  			this.group.model.set( this.element.getAttribute( 'value' ) );
	  		}
	  	};

	  	RadioNameBinding.prototype.unbind = function unbind () {
	  		this.group.remove( this );

	  		this.model.getKeypathModel().unregister( this.nameAttributeBinding );
	  	};

	  	RadioNameBinding.prototype.unrender = function unrender () {
	  		var node = this.node;

	  		node.removeEventListener( 'change', handleDomEvent, false );
	  		node.removeEventListener( 'click', handleDomEvent, false );
	  	};

	  	return RadioNameBinding;
	  }(Binding));

	  var SingleSelectBinding = (function (Binding) {
	  	function SingleSelectBinding () {
	  		Binding.apply(this, arguments);
	  	}

	  	SingleSelectBinding.prototype = Object.create( Binding && Binding.prototype );
	  	SingleSelectBinding.prototype.constructor = SingleSelectBinding;

	  	SingleSelectBinding.prototype.forceUpdate = function forceUpdate () {
	  		var this$1 = this;

	  		var value = this.getValue();

	  		if ( value !== undefined ) {
	  			this.attribute.locked = true;
	  			runloop.scheduleTask( function () { return this$1.attribute.locked = false; } );
	  			this.model.set( value );
	  		}
	  	};

	  	SingleSelectBinding.prototype.getInitialValue = function getInitialValue () {
	  		if ( this.element.getAttribute( 'value' ) !== undefined ) {
	  			return;
	  		}

	  		var options = this.element.options;
	  		var len = options.length;

	  		if ( !len ) return;

	  		var value;
	  		var optionWasSelected;
	  		var i = len;

	  		// take the final selected option...
	  		while ( i-- ) {
	  			var option = options[i];

	  			if ( option.getAttribute( 'selected' ) ) {
	  				if ( !option.getAttribute( 'disabled' ) ) {
	  					value = option.getAttribute( 'value' );
	  				}

	  				optionWasSelected = true;
	  				break;
	  			}
	  		}

	  		// or the first non-disabled option, if none are selected
	  		if ( !optionWasSelected ) {
	  			while ( ++i < len ) {
	  				if ( !options[i].getAttribute( 'disabled' ) ) {
	  					value = options[i].getAttribute( 'value' );
	  					break;
	  				}
	  			}
	  		}

	  		// This is an optimisation (aka hack) that allows us to forgo some
	  		// other more expensive work
	  		// TODO does it still work? seems at odds with new architecture
	  		if ( value !== undefined ) {
	  			this.element.attributeByName.value.value = value;
	  		}

	  		return value;
	  	};

	  	SingleSelectBinding.prototype.getValue = function getValue () {
	  		var options = this.node.options;
	  		var len = options.length;

	  		var i;
	  		for ( i = 0; i < len; i += 1 ) {
	  			var option = options[i];

	  			if ( options[i].selected && !options[i].disabled ) {
	  				return option._ractive ? option._ractive.value : option.value;
	  			}
	  		}
	  	};

	  	SingleSelectBinding.prototype.render = function render () {
	  		Binding.prototype.render.call(this);
	  		this.node.addEventListener( 'change', handleDomEvent, false );
	  	};

	  	SingleSelectBinding.prototype.setFromNode = function setFromNode ( node ) {
	  		var option = getSelectedOptions( node )[0];
	  		this.model.set( option._ractive ? option._ractive.value : option.value );
	  	};

	  	// TODO this method is an anomaly... is it necessary?
	  	SingleSelectBinding.prototype.setValue = function setValue ( value ) {
	  		this.model.set( value );
	  	};

	  	SingleSelectBinding.prototype.unrender = function unrender () {
	  		this.node.removeEventListener( 'change', handleDomEvent, false );
	  	};

	  	return SingleSelectBinding;
	  }(Binding));

	  function isBindable ( attribute ) {
	  	return attribute &&
	  		   attribute.template.f &&
	  	       attribute.template.f.length === 1 &&
	  	       attribute.template.f[0].t === INTERPOLATOR &&
	  	       !attribute.template.f[0].s;
	  }

	  function selectBinding ( element ) {
	  	var attributes = element.attributeByName;

	  	// contenteditable - bind if the contenteditable attribute is true
	  	// or is bindable and may thus become true...
	  	if ( element.getAttribute( 'contenteditable' ) || isBindable( attributes.contenteditable ) ) {
	  		// ...and this element also has a value attribute to bind
	  		return isBindable( attributes.value ) ? ContentEditableBinding : null;
	  	}

	  	// <input>
	  	if ( element.name === 'input' ) {
	  		var type = element.getAttribute( 'type' );

	  		if ( type === 'radio' || type === 'checkbox' ) {
	  			var bindName = isBindable( attributes.name );
	  			var bindChecked = isBindable( attributes.checked );

	  			// for radios we can either bind the name attribute, or the checked attribute - not both
	  			if ( bindName && bindChecked ) {
	  				if ( type === 'radio' ) {
	  					warnIfDebug( 'A radio input can have two-way binding on its name attribute, or its checked attribute - not both', { ractive: element.root });
	  				} else {
	  					// A checkbox with bindings for both name and checked - see https://github.com/ractivejs/ractive/issues/1749
	  					return CheckboxBinding;
	  				}
	  			}

	  			if ( bindName ) {
	  				return type === 'radio' ? RadioNameBinding : CheckboxNameBinding;
	  			}

	  			if ( bindChecked ) {
	  				return type === 'radio' ? RadioBinding : CheckboxBinding;
	  			}
	  		}

	  		if ( type === 'file' && isBindable( attributes.value ) ) {
	  			return Binding;
	  		}

	  		if ( isBindable( attributes.value ) ) {
	  			return ( type === 'number' || type === 'range' ) ? NumericBinding : GenericBinding;
	  		}

	  		return null;
	  	}

	  	// <select>
	  	if ( element.name === 'select' && isBindable( attributes.value ) ) {
	  		return element.getAttribute( 'multiple' ) ? MultipleSelectBinding : SingleSelectBinding;
	  	}

	  	// <textarea>
	  	if ( element.name === 'textarea' && isBindable( attributes.value ) ) {
	  		return GenericBinding;
	  	}
	  }

	  function makeDirty$1 ( query ) {
	  	query.makeDirty();
	  }

	  var endsWithSemi = /;\s*$/;

	  var Element = (function (Item) {
	  	function Element ( options ) {
	  		var this$1 = this;

	  		Item.call( this, options );

	  		this.liveQueries = []; // TODO rare case. can we handle differently?

	  		this.name = options.template.e.toLowerCase();
	  		this.isVoid = voidElementNames.test( this.name );

	  		// find parent element
	  		this.parent = findElement( this.parentFragment, false );

	  		if ( this.parent && this.parent.name === 'option' ) {
	  			throw new Error( ("An <option> element cannot contain other elements (encountered <" + (this.name) + ">)") );
	  		}

	  		this.decorators = [];

	  		// create attributes
	  		this.attributeByName = {};

	  		this.attributes = [];
	  		var leftovers = [];
	  		( this.template.m || [] ).forEach( function ( template ) {
	  			switch ( template.t ) {
	  				case ATTRIBUTE:
	  				case BINDING_FLAG:
	  				case DECORATOR:
	  				case EVENT:
	  				case TRANSITION:
	  					this$1.attributes.push( createItem({
	  						owner: this$1,
	  						parentFragment: this$1.parentFragment,
	  						template: template
	  					}) );
	  					break;

	  				default:
	  					leftovers.push( template );
	  					break;
	  			}
	  		});

	  		this.attributes.push( new ConditionalAttribute({
	  			owner: this,
	  			parentFragment: this.parentFragment,
	  			template: leftovers
	  		}) );

	  		var i = this.attributes.length;
	  		while ( i-- ) {
	  			var attr = this$1.attributes[ i ];
	  			if ( attr.name === 'type' ) this$1.attributes.unshift( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			else if ( attr.name === 'max' ) this$1.attributes.unshift( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			else if ( attr.name === 'min' ) this$1.attributes.unshift( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			else if ( attr.name === 'class' ) this$1.attributes.unshift( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			else if ( attr.name === 'value' ) {
	  				this$1.attributes.push( this$1.attributes.splice( i, 1 )[ 0 ] );
	  			}
	  		}

	  		// create children
	  		if ( options.template.f && !options.deferContent ) {
	  			this.fragment = new Fragment({
	  				template: options.template.f,
	  				owner: this,
	  				cssIds: null
	  			});
	  		}

	  		this.binding = null; // filled in later
	  	}

	  	Element.prototype = Object.create( Item && Item.prototype );
	  	Element.prototype.constructor = Element;

	  	Element.prototype.bind = function bind$1$$ () {
	  		this.attributes.binding = true;
	  		this.attributes.forEach( bind$1 );
	  		this.attributes.binding = false;

	  		if ( this.fragment ) this.fragment.bind();

	  		// create two-way binding if necessary
	  		if ( !this.binding ) this.recreateTwowayBinding();
	  	};

	  	Element.prototype.createTwowayBinding = function createTwowayBinding () {
	  		var shouldBind = 'twoway' in this ? this.twoway : this.ractive.twoway;

	  		if ( !shouldBind ) return null;

	  		var Binding = selectBinding( this );

	  		if ( !Binding ) return null;

	  		var binding = new Binding( this );

	  		return binding && binding.model ?
	  			binding :
	  			null;
	  	};

	  	Element.prototype.destroyed = function destroyed () {
	  		this.attributes.forEach( function ( a ) { return a.destroyed(); } );
	  		if ( this.fragment ) this.fragment.destroyed();
	  	};

	  	Element.prototype.detach = function detach () {
	  		// if this element is no longer rendered, the transitions are complete and the attributes can be torn down
	  		if ( !this.rendered ) this.destroyed();

	  		return detachNode( this.node );
	  	};

	  	Element.prototype.find = function find ( selector ) {
	  		if ( matches( this.node, selector ) ) return this.node;
	  		if ( this.fragment ) {
	  			return this.fragment.find( selector );
	  		}
	  	};

	  	Element.prototype.findAll = function findAll ( selector, query ) {
	  		// Add this node to the query, if applicable, and register the
	  		// query on this element
	  		var matches = query.test( this.node );
	  		if ( matches ) {
	  			query.add( this.node );
	  			if ( query.live ) this.liveQueries.push( query );
	  		}

	  		if ( this.fragment ) {
	  			this.fragment.findAll( selector, query );
	  		}
	  	};

	  	Element.prototype.findComponent = function findComponent ( name ) {
	  		if ( this.fragment ) {
	  			return this.fragment.findComponent( name );
	  		}
	  	};

	  	Element.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAllComponents( name, query );
	  		}
	  	};

	  	Element.prototype.findNextNode = function findNextNode () {
	  		return null;
	  	};

	  	Element.prototype.firstNode = function firstNode () {
	  		return this.node;
	  	};

	  	Element.prototype.getAttribute = function getAttribute ( name ) {
	  		var attribute = this.attributeByName[ name ];
	  		return attribute ? attribute.getValue() : undefined;
	  	};

	  	Element.prototype.recreateTwowayBinding = function recreateTwowayBinding () {
	  		if ( this.binding ) {
	  			this.binding.unbind();
	  			this.binding.unrender();
	  		}

	  		if ( this.binding = this.createTwowayBinding() ) {
	  			this.binding.bind();
	  			if ( this.rendered ) this.binding.render();
	  		}
	  	};

	  	Element.prototype.render = function render$1 ( target, occupants ) {
	  		// TODO determine correct namespace
	  		var this$1 = this;

	  		this.namespace = getNamespace( this );

	  		var node;
	  		var existing = false;

	  		if ( occupants ) {
	  			var n;
	  			while ( ( n = occupants.shift() ) ) {
	  				if ( n.nodeName.toUpperCase() === this$1.template.e.toUpperCase() && n.namespaceURI === this$1.namespace ) {
	  					this$1.node = node = n;
	  					existing = true;
	  					break;
	  				} else {
	  					detachNode( n );
	  				}
	  			}
	  		}

	  		if ( !node ) {
	  			node = createElement( this.template.e, this.namespace, this.getAttribute( 'is' ) );
	  			this.node = node;
	  		}

	  		defineProperty( node, '_ractive', {
	  			value: {
	  				proxy: this
	  			}
	  		});

	  		// Is this a top-level node of a component? If so, we may need to add
	  		// a data-ractive-css attribute, for CSS encapsulation
	  		if ( this.parentFragment.cssIds ) {
	  			node.setAttribute( 'data-ractive-css', this.parentFragment.cssIds.map( function ( x ) { return ("{" + x + "}"); } ).join( ' ' ) );
	  		}

	  		if ( existing && this.foundNode ) this.foundNode( node );

	  		if ( this.fragment ) {
	  			var children = existing ? toArray( node.childNodes ) : undefined;

	  			this.fragment.render( node, children );

	  			// clean up leftover children
	  			if ( children ) {
	  				children.forEach( detachNode );
	  			}
	  		}

	  		if ( existing ) {
	  			// store initial values for two-way binding
	  			if ( this.binding && this.binding.wasUndefined ) this.binding.setFromNode( node );
	  			// remove unused attributes
	  			var i = node.attributes.length;
	  			while ( i-- ) {
	  				var name = node.attributes[i].name;
	  				if ( !( name in this$1.attributeByName ) ) node.removeAttribute( name );
	  			}
	  		}

	  		this.attributes.forEach( render );

	  		if ( this.binding ) this.binding.render();

	  		updateLiveQueries$1( this );

	  		if ( this._introTransition && this.ractive.transitionsEnabled ) {
	  			this._introTransition.isIntro = true;
	  			runloop.registerTransition( this._introTransition );
	  		}

	  		if ( !existing ) {
	  			target.appendChild( node );
	  		}

	  		this.rendered = true;
	  	};

	  	Element.prototype.shuffled = function shuffled () {
	  		this.liveQueries.forEach( makeDirty$1 );
	  		Item.prototype.shuffled.call(this);
	  	};

	  	Element.prototype.toString = function toString () {
	  		var tagName = this.template.e;

	  		var attrs = this.attributes.map( stringifyAttribute ).join( '' );

	  		// Special case - selected options
	  		if ( this.name === 'option' && this.isSelected() ) {
	  			attrs += ' selected';
	  		}

	  		// Special case - two-way radio name bindings
	  		if ( this.name === 'input' && inputIsCheckedRadio( this ) ) {
	  			attrs += ' checked';
	  		}

	  		// Special case style and class attributes and directives
	  		var style, cls;
	  		this.attributes.forEach( function ( attr ) {
	  			if ( attr.name === 'class' ) {
	  				cls = ( cls || '' ) + ( cls ? ' ' : '' ) + safeAttributeString( attr.getString() );
	  			} else if ( attr.name === 'style' ) {
	  				style = ( style || '' ) + ( style ? ' ' : '' ) + safeAttributeString( attr.getString() );
	  				if ( style && !endsWithSemi.test( style ) ) style += ';';
	  			} else if ( attr.styleName ) {
	  				style = ( style || '' ) + ( style ? ' ' : '' ) +  "" + (decamelize( attr.styleName )) + ": " + (safeAttributeString( attr.getString() )) + ";";
	  			} else if ( attr.inlineClass && attr.getValue() ) {
	  				cls = ( cls || '' ) + ( cls ? ' ' : '' ) + attr.inlineClass;
	  			}
	  		});
	  		// put classes first, then inline style
	  		if ( style !== undefined ) attrs = ' style' + ( style ? ("=\"" + style + "\"") : '' ) + attrs;
	  		if ( cls !== undefined ) attrs = ' class' + (cls ? ("=\"" + cls + "\"") : '') + attrs;

	  		var str = "<" + tagName + "" + attrs + ">";

	  		if ( this.isVoid ) return str;

	  		// Special case - textarea
	  		if ( this.name === 'textarea' && this.getAttribute( 'value' ) !== undefined ) {
	  			str += escapeHtml( this.getAttribute( 'value' ) );
	  		}

	  		// Special case - contenteditable
	  		else if ( this.getAttribute( 'contenteditable' ) !== undefined ) {
	  			str += ( this.getAttribute( 'value' ) || '' );
	  		}

	  		if ( this.fragment ) {
	  			str += this.fragment.toString( !/^(?:script|style)$/i.test( this.template.e ) ); // escape text unless script/style
	  		}

	  		str += "</" + tagName + ">";
	  		return str;
	  	};

	  	Element.prototype.unbind = function unbind$1 () {
	  		this.attributes.forEach( unbind );

	  		if ( this.binding ) this.binding.unbind();
	  		if ( this.fragment ) this.fragment.unbind();
	  	};

	  	Element.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( !this.rendered ) return;
	  		this.rendered = false;

	  		// unrendering before intro completed? complete it now
	  		// TODO should be an API for aborting transitions
	  		var transition = this._introTransition;
	  		if ( transition && transition.complete ) transition.complete();

	  		// Detach as soon as we can
	  		if ( this.name === 'option' ) {
	  			// <option> elements detach immediately, so that
	  			// their parent <select> element syncs correctly, and
	  			// since option elements can't have transitions anyway
	  			this.detach();
	  		} else if ( shouldDestroy ) {
	  			runloop.detachWhenReady( this );
	  		}

	  		if ( this.fragment ) this.fragment.unrender();

	  		if ( this.binding ) this.binding.unrender();

	  		// outro transition
	  		if ( this._outroTransition && this.ractive.transitionsEnabled ) {
	  			this._outroTransition.isIntro = false;
	  			runloop.registerTransition( this._outroTransition );
	  		}

	  		removeFromLiveQueries( this );
	  		// TODO forms are a special case
	  	};

	  	Element.prototype.update = function update$1 () {
	  		if ( this.dirty ) {
	  			this.dirty = false;

	  			this.attributes.forEach( update );

	  			if ( this.fragment ) this.fragment.update();
	  		}
	  	};

	  	return Element;
	  }(Item));

	  function inputIsCheckedRadio ( element ) {
	  	var attributes = element.attributeByName;

	  	var typeAttribute  = attributes.type;
	  	var valueAttribute = attributes.value;
	  	var nameAttribute  = attributes.name;

	  	if ( !typeAttribute || ( typeAttribute.value !== 'radio' ) || !valueAttribute || !nameAttribute.interpolator ) {
	  		return;
	  	}

	  	if ( valueAttribute.getValue() === nameAttribute.interpolator.model.get() ) {
	  		return true;
	  	}
	  }

	  function stringifyAttribute ( attribute ) {
	  	var str = attribute.toString();
	  	return str ? ' ' + str : '';
	  }

	  function removeFromLiveQueries ( element ) {
	  	var i = element.liveQueries.length;
	  	while ( i-- ) {
	  		var query = element.liveQueries[i];
	  		query.remove( element.node );
	  	}
	  }

	  function getNamespace ( element ) {
	  	// Use specified namespace...
	  	var xmlns = element.getAttribute( 'xmlns' );
	  	if ( xmlns ) return xmlns;

	  	// ...or SVG namespace, if this is an <svg> element
	  	if ( element.name === 'svg' ) return svg$1;

	  	var parent = element.parent;

	  	if ( parent ) {
	  		// ...or HTML, if the parent is a <foreignObject>
	  		if ( parent.name === 'foreignobject' ) return html;

	  		// ...or inherit from the parent node
	  		return parent.node.namespaceURI;
	  	}

	  	return element.ractive.el.namespaceURI;
	  }

	  var Form = (function (Element) {
	  	function Form ( options ) {
	  		Element.call( this, options );
	  		this.formBindings = [];
	  	}

	  	Form.prototype = Object.create( Element && Element.prototype );
	  	Form.prototype.constructor = Form;

	  	Form.prototype.render = function render ( target, occupants ) {
	  		Element.prototype.render.call( this, target, occupants );
	  		this.node.addEventListener( 'reset', handleReset, false );
	  	};

	  	Form.prototype.unrender = function unrender ( shouldDestroy ) {
	  		this.node.removeEventListener( 'reset', handleReset, false );
	  		Element.prototype.unrender.call( this, shouldDestroy );
	  	};

	  	return Form;
	  }(Element));

	  function handleReset () {
	  	var element = this._ractive.proxy;

	  	runloop.start();
	  	element.formBindings.forEach( updateModel$1 );
	  	runloop.end();
	  }

	  function updateModel$1 ( binding ) {
	  	binding.model.set( binding.resetValue );
	  }

	  var Mustache = (function (Item) {
	  	function Mustache ( options ) {
	  		Item.call( this, options );

	  		this.parentFragment = options.parentFragment;
	  		this.template = options.template;
	  		this.index = options.index;
	  		if ( options.owner ) this.parent = options.owner;

	  		this.isStatic = !!options.template.s;

	  		this.model = null;
	  		this.dirty = false;
	  	}

	  	Mustache.prototype = Object.create( Item && Item.prototype );
	  	Mustache.prototype.constructor = Mustache;

	  	Mustache.prototype.bind = function bind () {
	  		// try to find a model for this view
	  		var this$1 = this;

	  		var model = resolve$2( this.parentFragment, this.template );
	  		var value = model ? model.get() : undefined;

	  		if ( this.isStatic ) {
	  			this.model = { get: function () { return value; } };
	  			return;
	  		}

	  		if ( model ) {
	  			model.register( this );
	  			this.model = model;
	  		} else {
	  			this.resolver = this.parentFragment.resolve( this.template.r, function ( model ) {
	  				this$1.model = model;
	  				model.register( this$1 );

	  				this$1.handleChange();
	  				this$1.resolver = null;
	  			});
	  		}
	  	};

	  	Mustache.prototype.handleChange = function handleChange () {
	  		this.bubble();
	  	};

	  	Mustache.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  		next = rebindMatch( this.template, next, previous );
	  		if ( this['static'] ) return false;
	  		if ( next === this.model ) return false;

	  		if ( this.model ) {
	  			this.model.unregister( this );
	  		}
	  		if ( next ) next.addShuffleRegister( this, 'mark' );
	  		this.model = next;
	  		if ( !safe ) this.handleChange();
	  		return true;
	  	};

	  	Mustache.prototype.unbind = function unbind () {
	  		if ( !this.isStatic ) {
	  			this.model && this.model.unregister( this );
	  			this.model = undefined;
	  			this.resolver && this.resolver.unbind();
	  		}
	  	};

	  	return Mustache;
	  }(Item));

	  var Interpolator = (function (Mustache) {
	  	function Interpolator () {
	  		Mustache.apply(this, arguments);
	  	}

	  	Interpolator.prototype = Object.create( Mustache && Mustache.prototype );
	  	Interpolator.prototype.constructor = Interpolator;

	  	Interpolator.prototype.bubble = function bubble () {
	  		if ( this.owner ) this.owner.bubble();
	  		Mustache.prototype.bubble.call(this);
	  	};

	  	Interpolator.prototype.detach = function detach () {
	  		return detachNode( this.node );
	  	};

	  	Interpolator.prototype.firstNode = function firstNode () {
	  		return this.node;
	  	};

	  	Interpolator.prototype.getString = function getString () {
	  		return this.model ? safeToStringValue( this.model.get() ) : '';
	  	};

	  	Interpolator.prototype.render = function render ( target, occupants ) {
	  		if ( inAttributes() ) return;
	  		var value = this.getString();

	  		this.rendered = true;

	  		if ( occupants ) {
	  			var n = occupants[0];
	  			if ( n && n.nodeType === 3 ) {
	  				occupants.shift();
	  				if ( n.nodeValue !== value ) {
	  					n.nodeValue = value;
	  				}
	  			} else {
	  				n = this.node = doc.createTextNode( value );
	  				if ( occupants[0] ) {
	  					target.insertBefore( n, occupants[0] );
	  				} else {
	  					target.appendChild( n );
	  				}
	  			}

	  			this.node = n;
	  		} else {
	  			this.node = doc.createTextNode( value );
	  			target.appendChild( this.node );
	  		}
	  	};

	  	Interpolator.prototype.toString = function toString ( escape ) {
	  		var string = this.getString();
	  		return escape ? escapeHtml( string ) : string;
	  	};

	  	Interpolator.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( shouldDestroy ) this.detach();
	  		this.rendered = false;
	  	};

	  	Interpolator.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			if ( this.rendered ) {
	  				this.node.data = this.getString();
	  			}
	  		}
	  	};

	  	Interpolator.prototype.valueOf = function valueOf () {
	  		return this.model ? this.model.get() : undefined;
	  	};

	  	return Interpolator;
	  }(Mustache));

	  var Input = (function (Element) {
	  	function Input () {
	  		Element.apply(this, arguments);
	  	}

	  	Input.prototype = Object.create( Element && Element.prototype );
	  	Input.prototype.constructor = Input;

	  	Input.prototype.render = function render ( target, occupants ) {
	  		Element.prototype.render.call( this, target, occupants );
	  		this.node.defaultValue = this.node.value;
	  	};

	  	return Input;
	  }(Element));

	  var Mapping = (function (Item) {
	  	function Mapping ( options ) {
	  		Item.call( this, options );

	  		this.name = options.template.n;

	  		this.owner = options.owner || options.parentFragment.owner || options.element || findElement( options.parentFragment );
	  		this.element = options.element || (this.owner.attributeByName ? this.owner : findElement( options.parentFragment ) );
	  		this.parentFragment = this.element.parentFragment; // shared
	  		this.ractive = this.parentFragment.ractive;

	  		this.fragment = null;

	  		this.element.attributeByName[ this.name ] = this;

	  		this.value = options.template.f;
	  	}

	  	Mapping.prototype = Object.create( Item && Item.prototype );
	  	Mapping.prototype.constructor = Mapping;

	  	Mapping.prototype.bind = function bind () {
	  		if ( this.fragment ) {
	  			this.fragment.bind();
	  		}

	  		var template = this.template.f;
	  		var viewmodel = this.element.instance.viewmodel;

	  		if ( template === 0 ) {
	  			// empty attributes are `true`
	  			viewmodel.joinKey( this.name ).set( true );
	  		}

	  		else if ( typeof template === 'string' ) {
	  			var parsed = parseJSON( template );
	  			viewmodel.joinKey( this.name ).set( parsed ? parsed.value : template );
	  		}

	  		else if ( isArray( template ) ) {
	  			createMapping( this, true );
	  		}
	  	};

	  	Mapping.prototype.render = function render () {};

	  	Mapping.prototype.unbind = function unbind () {
	  		if ( this.fragment ) this.fragment.unbind();
	  		if ( this.boundFragment ) this.boundFragment.unbind();

	  		if ( this.element.bound ) {
	  			if ( this.link.target === this.model ) this.link.owner.unlink();
	  		}
	  	};

	  	Mapping.prototype.unrender = function unrender () {};

	  	Mapping.prototype.update = function update () {
	  		if ( this.dirty ) {
	  			this.dirty = false;
	  			if ( this.fragment ) this.fragment.update();
	  			if ( this.boundFragment ) this.boundFragment.update();
	  			if ( this.rendered ) this.updateDelegate();
	  		}
	  	};

	  	return Mapping;
	  }(Item));

	  function createMapping ( item ) {
	  	var template = item.template.f;
	  	var viewmodel = item.element.instance.viewmodel;
	  	var childData = viewmodel.value;

	  	if ( template.length === 1 && template[0].t === INTERPOLATOR ) {
	  		item.model = resolve$2( item.parentFragment, template[0] );

	  		if ( !item.model ) {
	  			warnOnceIfDebug( ("The " + (item.name) + "='{{" + (template[0].r) + "}}' mapping is ambiguous, and may cause unexpected results. Consider initialising your data to eliminate the ambiguity"), { ractive: item.element.instance }); // TODO add docs page explaining item
	  			item.parentFragment.ractive.get( item.name ); // side-effect: create mappings as necessary
	  			item.model = item.parentFragment.findContext().joinKey( item.name );
	  		}

	  		item.link = viewmodel.createLink( item.name, item.model, template[0].r );

	  		if ( item.model.get() === undefined && item.name in childData ) {
	  			item.model.set( childData[ item.name ] );
	  		}
	  	}

	  	else {
	  		item.boundFragment = new Fragment({
	  			owner: item,
	  			template: template
	  		}).bind();

	  		item.model = viewmodel.joinKey( item.name );
	  		item.model.set( item.boundFragment.valueOf() );

	  		// item is a *bit* of a hack
	  		item.boundFragment.bubble = function () {
	  			Fragment.prototype.bubble.call( item.boundFragment );
	  			item.boundFragment.update();
	  			item.model.set( item.boundFragment.valueOf() );
	  		};
	  	}
	  }

	  function findParentSelect ( element ) {
	  	while ( element ) {
	  		if ( element.name === 'select' ) return element;
	  		element = element.parent;
	  	}
	  }

	  var Option = (function (Element) {
	  	function Option ( options ) {
	  		var template = options.template;
	  		if ( !template.a ) template.a = {};

	  		// If the value attribute is missing, use the element's content,
	  		// as long as it isn't disabled
	  		if ( template.a.value === undefined && !( 'disabled' in template.a ) ) {
	  			template.a.value = template.f || '';
	  		}

	  		Element.call( this, options );

	  		this.select = findParentSelect( this.parent );
	  	}

	  	Option.prototype = Object.create( Element && Element.prototype );
	  	Option.prototype.constructor = Option;

	  	Option.prototype.bind = function bind () {
	  		if ( !this.select ) {
	  			Element.prototype.bind.call(this);
	  			return;
	  		}

	  		// If the select has a value, it overrides the `selected` attribute on
	  		// this option - so we delete the attribute
	  		var selectedAttribute = this.attributeByName.selected;
	  		if ( selectedAttribute && this.select.getAttribute( 'value' ) !== undefined ) {
	  			var index = this.attributes.indexOf( selectedAttribute );
	  			this.attributes.splice( index, 1 );
	  			delete this.attributeByName.selected;
	  		}

	  		Element.prototype.bind.call(this);
	  		this.select.options.push( this );
	  	};

	  	Option.prototype.bubble = function bubble () {
	  		// if we're using content as value, may need to update here
	  		var value = this.getAttribute( 'value' );
	  		if ( this.node.value !== value ) {
	  			this.node._ractive.value = value;
	  		}
	  		Element.prototype.bubble.call(this);
	  	};

	  	Option.prototype.getAttribute = function getAttribute ( name ) {
	  		var attribute = this.attributeByName[ name ];
	  		return attribute ? attribute.getValue() : name === 'value' && this.fragment ? this.fragment.valueOf() : undefined;
	  	};

	  	Option.prototype.isSelected = function isSelected () {
	  		var optionValue = this.getAttribute( 'value' );

	  		if ( optionValue === undefined || !this.select ) {
	  			return false;
	  		}

	  		var selectValue = this.select.getAttribute( 'value' );

	  		if ( selectValue == optionValue ) {
	  			return true;
	  		}

	  		if ( this.select.getAttribute( 'multiple' ) && isArray( selectValue ) ) {
	  			var i = selectValue.length;
	  			while ( i-- ) {
	  				if ( selectValue[i] == optionValue ) {
	  					return true;
	  				}
	  			}
	  		}
	  	};

	  	Option.prototype.render = function render ( target, occupants ) {
	  		Element.prototype.render.call( this, target, occupants );

	  		if ( !this.attributeByName.value ) {
	  			this.node._ractive.value = this.getAttribute( 'value' );
	  		}
	  	};

	  	Option.prototype.unbind = function unbind () {
	  		Element.prototype.unbind.call(this);

	  		if ( this.select ) {
	  			removeFromArray( this.select.options, this );
	  		}
	  	};

	  	return Option;
	  }(Element));

	  function getPartialTemplate ( ractive, name, parentFragment ) {
	  	// If the partial in instance or view heirarchy instances, great
	  	var partial = getPartialFromRegistry( ractive, name, parentFragment || {} );
	  	if ( partial ) return partial;

	  	// Does it exist on the page as a script tag?
	  	partial = parser.fromId( name, { noThrow: true } );
	  	if ( partial ) {
	  		// parse and register to this ractive instance
	  		var parsed = parser.parseFor( partial, ractive );

	  		// register extra partials on the ractive instance if they don't already exist
	  		if ( parsed.p ) fillGaps( ractive.partials, parsed.p );

	  		// register (and return main partial if there are others in the template)
	  		return ractive.partials[ name ] = parsed.t;
	  	}
	  }

	  function getPartialFromRegistry ( ractive, name, parentFragment ) {
	  	// if there was an instance up-hierarchy, cool
	  	var partial = findParentPartial( name, parentFragment.owner );
	  	if ( partial ) return partial;

	  	// find first instance in the ractive or view hierarchy that has this partial
	  	var instance = findInstance( 'partials', ractive, name );

	  	if ( !instance ) { return; }

	  	partial = instance.partials[ name ];

	  	// partial is a function?
	  	var fn;
	  	if ( typeof partial === 'function' ) {
	  		fn = partial.bind( instance );
	  		fn.isOwner = instance.partials.hasOwnProperty(name);
	  		partial = fn.call( ractive, parser );
	  	}

	  	if ( !partial && partial !== '' ) {
	  		warnIfDebug( noRegistryFunctionReturn, name, 'partial', 'partial', { ractive: ractive });
	  		return;
	  	}

	  	// If this was added manually to the registry,
	  	// but hasn't been parsed, parse it now
	  	if ( !parser.isParsed( partial ) ) {
	  		// use the parseOptions of the ractive instance on which it was found
	  		var parsed = parser.parseFor( partial, instance );

	  		// Partials cannot contain nested partials!
	  		// TODO add a test for this
	  		if ( parsed.p ) {
	  			warnIfDebug( 'Partials ({{>%s}}) cannot contain nested inline partials', name, { ractive: ractive });
	  		}

	  		// if fn, use instance to store result, otherwise needs to go
	  		// in the correct point in prototype chain on instance or constructor
	  		var target = fn ? instance : findOwner( instance, name );

	  		// may be a template with partials, which need to be registered and main template extracted
	  		target.partials[ name ] = partial = parsed.t;
	  	}

	  	// store for reset
	  	if ( fn ) partial._fn = fn;

	  	return partial.v ? partial.t : partial;
	  }

	  function findOwner ( ractive, key ) {
	  	return ractive.partials.hasOwnProperty( key )
	  		? ractive
	  		: findConstructor( ractive.constructor, key);
	  }

	  function findConstructor ( constructor, key ) {
	  	if ( !constructor ) { return; }
	  	return constructor.partials.hasOwnProperty( key )
	  		? constructor
	  		: findConstructor( constructor._Parent, key );
	  }

	  function findParentPartial( name, parent ) {
	  	if ( parent ) {
	  		if ( parent.template && parent.template.p && parent.template.p[name] ) {
	  			return parent.template.p[name];
	  		} else if ( parent.parentFragment && parent.parentFragment.owner ) {
	  			return findParentPartial( name, parent.parentFragment.owner );
	  		}
	  	}
	  }

	  var Partial = (function (Mustache) {
	  	function Partial () {
	  		Mustache.apply(this, arguments);
	  	}

	  	Partial.prototype = Object.create( Mustache && Mustache.prototype );
	  	Partial.prototype.constructor = Partial;

	  	Partial.prototype.bind = function bind () {
	  		// keep track of the reference name for future resets
	  		this.refName = this.template.r;

	  		// name matches take priority over expressions
	  		var template = this.refName ? getPartialTemplate( this.ractive, this.refName, this.parentFragment ) || null : null;
	  		var templateObj;

	  		if ( template ) {
	  			this.named = true;
	  			this.setTemplate( this.template.r, template );
	  		}

	  		if ( !template ) {
	  			Mustache.prototype.bind.call(this);
	  			if ( this.model && ( templateObj = this.model.get() ) && typeof templateObj === 'object' && ( typeof templateObj.template === 'string' || isArray( templateObj.t ) ) ) {
	  				if ( templateObj.template ) {
	  					this.source = templateObj.template;
	  					templateObj = parsePartial( this.template.r, templateObj.template, this.ractive );
	  				} else {
	  					this.source = templateObj.t;
	  				}
	  				this.setTemplate( this.template.r, templateObj.t );
	  			} else if ( ( !this.model || typeof this.model.get() !== 'string' ) && this.refName ) {
	  				this.setTemplate( this.refName, template );
	  			} else {
	  				this.setTemplate( this.model.get() );
	  			}
	  		}

	  		this.fragment = new Fragment({
	  			owner: this,
	  			template: this.partialTemplate
	  		}).bind();
	  	};

	  	Partial.prototype.destroyed = function destroyed () {
	  		this.fragment.destroyed();
	  	};

	  	Partial.prototype.detach = function detach () {
	  		return this.fragment.detach();
	  	};

	  	Partial.prototype.find = function find ( selector ) {
	  		return this.fragment.find( selector );
	  	};

	  	Partial.prototype.findAll = function findAll ( selector, query ) {
	  		this.fragment.findAll( selector, query );
	  	};

	  	Partial.prototype.findComponent = function findComponent ( name ) {
	  		return this.fragment.findComponent( name );
	  	};

	  	Partial.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		this.fragment.findAllComponents( name, query );
	  	};

	  	Partial.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.fragment.firstNode( skipParent );
	  	};

	  	Partial.prototype.forceResetTemplate = function forceResetTemplate () {
	  		var this$1 = this;

	  		this.partialTemplate = undefined;

	  		// on reset, check for the reference name first
	  		if ( this.refName ) {
	  			this.partialTemplate = getPartialTemplate( this.ractive, this.refName, this.parentFragment );
	  		}

	  		// then look for the resolved name
	  		if ( !this.partialTemplate ) {
	  			this.partialTemplate = getPartialTemplate( this.ractive, this.name, this.parentFragment );
	  		}

	  		if ( !this.partialTemplate ) {
	  			warnOnceIfDebug( ("Could not find template for partial '" + (this.name) + "'") );
	  			this.partialTemplate = [];
	  		}

	  		if ( this.inAttribute ) {
	  			doInAttributes( function () { return this$1.fragment.resetTemplate( this$1.partialTemplate ); } );
	  		} else {
	  			this.fragment.resetTemplate( this.partialTemplate );
	  		}

	  		this.bubble();
	  	};

	  	Partial.prototype.render = function render ( target, occupants ) {
	  		this.fragment.render( target, occupants );
	  	};

	  	Partial.prototype.setTemplate = function setTemplate ( name, template ) {
	  		this.name = name;

	  		if ( !template && template !== null ) template = getPartialTemplate( this.ractive, name, this.parentFragment );

	  		if ( !template ) {
	  			warnOnceIfDebug( ("Could not find template for partial '" + name + "'") );
	  		}

	  		this.partialTemplate = template || [];
	  	};

	  	Partial.prototype.toString = function toString ( escape ) {
	  		return this.fragment.toString( escape );
	  	};

	  	Partial.prototype.unbind = function unbind () {
	  		Mustache.prototype.unbind.call(this);
	  		this.fragment.unbind();
	  	};

	  	Partial.prototype.unrender = function unrender ( shouldDestroy ) {
	  		this.fragment.unrender( shouldDestroy );
	  	};

	  	Partial.prototype.update = function update () {
	  		var template;

	  		if ( this.dirty ) {
	  			this.dirty = false;

	  			if ( !this.named ) {
	  				if ( this.model ) {
	  					template = this.model.get();
	  				}

	  				if ( template && typeof template === 'string' && template !== this.name ) {
	  					this.setTemplate( template );
	  					this.fragment.resetTemplate( this.partialTemplate );
	  				} else if ( template && typeof template === 'object' && ( typeof template.template === 'string' || isArray( template.t ) ) ) {
	  					if ( template.t !== this.source && template.template !== this.source ) {
	  						if ( template.template ) {
	  							this.source = template.template;
	  							template = parsePartial( this.name, template.template, this.ractive );
	  						} else {
	  							this.source = template.t;
	  						}
	  						this.setTemplate( this.name, template.t );
	  						this.fragment.resetTemplate( this.partialTemplate );
	  					}
	  				}
	  			}

	  			this.fragment.update();
	  		}
	  	};

	  	return Partial;
	  }(Mustache));

	  function parsePartial( name, partial, ractive ) {
	  	var parsed;

	  	try {
	  		parsed = parser.parse( partial, parser.getParseOptions( ractive ) );
	  	} catch (e) {
	  		warnIfDebug( ("Could not parse partial from expression '" + name + "'\n" + (e.message)) );
	  	}

	  	return parsed || { t: [] };
	  }

	  var RepeatedFragment = function RepeatedFragment ( options ) {
	  	this.parent = options.owner.parentFragment;

	  	// bit of a hack, so reference resolution works without another
	  	// layer of indirection
	  	this.parentFragment = this;
	  	this.owner = options.owner;
	  	this.ractive = this.parent.ractive;

	  	// encapsulated styles should be inherited until they get applied by an element
	  	this.cssIds = 'cssIds' in options ? options.cssIds : ( this.parent ? this.parent.cssIds : null );

	  	this.context = null;
	  	this.rendered = false;
	  	this.iterations = [];

	  	this.template = options.template;

	  	this.indexRef = options.indexRef;
	  	this.keyRef = options.keyRef;

	  	this.pendingNewIndices = null;
	  	this.previousIterations = null;

	  	// track array versus object so updates of type rest
	  	this.isArray = false;
	  };

	  RepeatedFragment.prototype.bind = function bind ( context ) {
	  	var this$1 = this;

	  		this.context = context;
	  	var value = context.get();

	  	// {{#each array}}...
	  	if ( this.isArray = isArray( value ) ) {
	  		// we can't use map, because of sparse arrays
	  		this.iterations = [];
	  		var max = value.length;
	  		for ( var i = 0; i < max; i += 1 ) {
	  			this$1.iterations[i] = this$1.createIteration( i, i );
	  		}
	  	}

	  	// {{#each object}}...
	  	else if ( isObject( value ) ) {
	  		this.isArray = false;

	  		// TODO this is a dreadful hack. There must be a neater way
	  		if ( this.indexRef ) {
	  			var refs = this.indexRef.split( ',' );
	  			this.keyRef = refs[0];
	  			this.indexRef = refs[1];
	  		}

	  		this.iterations = Object.keys( value ).map( function ( key, index ) {
	  			return this$1.createIteration( key, index );
	  		});
	  	}

	  	return this;
	  };

	  RepeatedFragment.prototype.bubble = function bubble () {
	  	this.owner.bubble();
	  };

	  RepeatedFragment.prototype.createIteration = function createIteration ( key, index ) {
	  	var fragment = new Fragment({
	  		owner: this,
	  		template: this.template
	  	});

	  	// TODO this is a bit hacky
	  	fragment.key = key;
	  	fragment.index = index;
	  	fragment.isIteration = true;

	  	var model = this.context.joinKey( key );

	  	// set up an iteration alias if there is one
	  	if ( this.owner.template.z ) {
	  		fragment.aliases = {};
	  		fragment.aliases[ this.owner.template.z[0].n ] = model;
	  	}

	  	return fragment.bind( model );
	  };

	  RepeatedFragment.prototype.destroyed = function destroyed () {
	  	this.iterations.forEach( function ( i ) { return i.destroyed(); } );
	  };

	  RepeatedFragment.prototype.detach = function detach () {
	  	var docFrag = createDocumentFragment();
	  	this.iterations.forEach( function ( fragment ) { return docFrag.appendChild( fragment.detach() ); } );
	  	return docFrag;
	  };

	  RepeatedFragment.prototype.find = function find ( selector ) {
	  	var this$1 = this;

	  		var len = this.iterations.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		var found = this$1.iterations[i].find( selector );
	  		if ( found ) return found;
	  	}
	  };

	  RepeatedFragment.prototype.findAll = function findAll ( selector, query ) {
	  	var this$1 = this;

	  		var len = this.iterations.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		this$1.iterations[i].findAll( selector, query );
	  	}
	  };

	  RepeatedFragment.prototype.findComponent = function findComponent ( name ) {
	  	var this$1 = this;

	  		var len = this.iterations.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		var found = this$1.iterations[i].findComponent( name );
	  		if ( found ) return found;
	  	}
	  };

	  RepeatedFragment.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  	var this$1 = this;

	  		var len = this.iterations.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		this$1.iterations[i].findAllComponents( name, query );
	  	}
	  };

	  RepeatedFragment.prototype.findNextNode = function findNextNode ( iteration ) {
	  	var this$1 = this;

	  		if ( iteration.index < this.iterations.length - 1 ) {
	  		for ( var i = iteration.index + 1; i < this$1.iterations.length; i++ ) {
	  			var node = this$1.iterations[ i ].firstNode( true );
	  			if ( node ) return node;
	  		}
	  	}

	  	return this.owner.findNextNode();
	  };

	  RepeatedFragment.prototype.firstNode = function firstNode ( skipParent ) {
	  	return this.iterations[0] ? this.iterations[0].firstNode( skipParent ) : null;
	  };

	  RepeatedFragment.prototype.rebinding = function rebinding ( next ) {
	  	var this$1 = this;

	  		this.context = next;
	  	this.iterations.forEach( function ( fragment ) {
	  		var model = next ? next.joinKey( fragment.key || fragment.index ) : undefined;
	  		if ( this$1.owner.template.z ) {
	  			fragment.aliases = {};
	  			fragment.aliases[ this$1.owner.template.z[0].n ] = model;
	  		}
	  	});
	  };

	  RepeatedFragment.prototype.render = function render ( target, occupants ) {
	  	// TODO use docFrag.cloneNode...

	  	if ( this.iterations ) {
	  		this.iterations.forEach( function ( fragment ) { return fragment.render( target, occupants ); } );
	  	}

	  	this.rendered = true;
	  };

	  RepeatedFragment.prototype.shuffle = function shuffle ( newIndices ) {
	  	var this$1 = this;

	  		if ( !this.pendingNewIndices ) this.previousIterations = this.iterations.slice();

	  	if ( !this.pendingNewIndices ) this.pendingNewIndices = [];

	  	this.pendingNewIndices.push( newIndices );

	  	var iterations = [];

	  	newIndices.forEach( function ( newIndex, oldIndex ) {
	  		if ( newIndex === -1 ) return;

	  		var fragment = this$1.iterations[ oldIndex ];
	  		iterations[ newIndex ] = fragment;

	  		if ( newIndex !== oldIndex && fragment ) fragment.dirty = true;
	  	});

	  	this.iterations = iterations;

	  	this.bubble();
	  };

	  RepeatedFragment.prototype.shuffled = function shuffled () {
	  	this.iterations.forEach( function ( i ) { return i.shuffled(); } );
	  };

	  RepeatedFragment.prototype.toString = function toString$1$$ ( escape ) {
	  	return this.iterations ?
	  		this.iterations.map( escape ? toEscapedString : toString$1 ).join( '' ) :
	  		'';
	  };

	  RepeatedFragment.prototype.unbind = function unbind$1 () {
	  	this.iterations.forEach( unbind );
	  	return this;
	  };

	  RepeatedFragment.prototype.unrender = function unrender$1 ( shouldDestroy ) {
	  	this.iterations.forEach( shouldDestroy ? unrenderAndDestroy : unrender );
	  	if ( this.pendingNewIndices && this.previousIterations ) {
	  		this.previousIterations.forEach( function ( fragment ) {
	  			if ( fragment.rendered ) shouldDestroy ? unrenderAndDestroy( fragment ) : unrender( fragment );
	  		});
	  	}
	  	this.rendered = false;
	  };

	  // TODO smart update
	  RepeatedFragment.prototype.update = function update$1 () {
	  	// skip dirty check, since this is basically just a facade

	  	var this$1 = this;

	  		if ( this.pendingNewIndices ) {
	  		this.updatePostShuffle();
	  		return;
	  	}

	  	if ( this.updating ) return;
	  	this.updating = true;

	  	var value = this.context.get(),
	  			  wasArray = this.isArray;

	  	var toRemove;
	  	var oldKeys;
	  	var reset = true;
	  	var i;

	  	if ( this.isArray = isArray( value ) ) {
	  		if ( wasArray ) {
	  			reset = false;
	  			if ( this.iterations.length > value.length ) {
	  				toRemove = this.iterations.splice( value.length );
	  			}
	  		}
	  	} else if ( isObject( value ) && !wasArray ) {
	  		reset = false;
	  		toRemove = [];
	  		oldKeys = {};
	  		i = this.iterations.length;

	  		while ( i-- ) {
	  			var fragment$1 = this$1.iterations[i];
	  			if ( fragment$1.key in value ) {
	  				oldKeys[ fragment$1.key ] = true;
	  			} else {
	  				this$1.iterations.splice( i, 1 );
	  				toRemove.push( fragment$1 );
	  			}
	  		}
	  	}

	  	if ( reset ) {
	  		toRemove = this.iterations;
	  		this.iterations = [];
	  	}

	  	if ( toRemove ) {
	  		toRemove.forEach( function ( fragment ) {
	  			fragment.unbind();
	  			fragment.unrender( true );
	  		});
	  	}

	  	// update the remaining ones
	  	this.iterations.forEach( update );

	  	// add new iterations
	  	var newLength = isArray( value ) ?
	  		value.length :
	  		isObject( value ) ?
	  			Object.keys( value ).length :
	  			0;

	  	var docFrag;
	  	var fragment;

	  	if ( newLength > this.iterations.length ) {
	  		docFrag = this.rendered ? createDocumentFragment() : null;
	  		i = this.iterations.length;

	  		if ( isArray( value ) ) {
	  			while ( i < value.length ) {
	  				fragment = this$1.createIteration( i, i );

	  				this$1.iterations.push( fragment );
	  				if ( this$1.rendered ) fragment.render( docFrag );

	  				i += 1;
	  			}
	  		}

	  		else if ( isObject( value ) ) {
	  			// TODO this is a dreadful hack. There must be a neater way
	  			if ( this.indexRef && !this.keyRef ) {
	  				var refs = this.indexRef.split( ',' );
	  				this.keyRef = refs[0];
	  				this.indexRef = refs[1];
	  			}

	  			Object.keys( value ).forEach( function ( key ) {
	  				if ( !oldKeys || !( key in oldKeys ) ) {
	  					fragment = this$1.createIteration( key, i );

	  					this$1.iterations.push( fragment );
	  					if ( this$1.rendered ) fragment.render( docFrag );

	  					i += 1;
	  				}
	  			});
	  		}

	  		if ( this.rendered ) {
	  			var parentNode = this.parent.findParentNode();
	  			var anchor = this.parent.findNextNode( this.owner );

	  			parentNode.insertBefore( docFrag, anchor );
	  		}
	  	}

	  	this.updating = false;
	  };

	  RepeatedFragment.prototype.updatePostShuffle = function updatePostShuffle () {
	  	var this$1 = this;

	  		var newIndices = this.pendingNewIndices[ 0 ];

	  	// map first shuffle through
	  	this.pendingNewIndices.slice( 1 ).forEach( function ( indices ) {
	  		newIndices.forEach( function ( newIndex, oldIndex ) {
	  			newIndices[ oldIndex ] = indices[ newIndex ];
	  		});
	  	});

	  	// This algorithm (for detaching incorrectly-ordered fragments from the DOM and
	  	// storing them in a document fragment for later reinsertion) seems a bit hokey,
	  	// but it seems to work for now
	  	var len = this.context.get().length, oldLen = this.previousIterations.length;
	  	var i;
	  	var removed = {};

	  	newIndices.forEach( function ( newIndex, oldIndex ) {
	  		var fragment = this$1.previousIterations[ oldIndex ];
	  		this$1.previousIterations[ oldIndex ] = null;

	  		if ( newIndex === -1 ) {
	  			removed[ oldIndex ] = fragment;
	  		} else if ( fragment.index !== newIndex ) {
	  			var model = this$1.context.joinKey( newIndex );
	  			fragment.index = newIndex;
	  			fragment.context = model;
	  			if ( this$1.owner.template.z ) {
	  				fragment.aliases = {};
	  				fragment.aliases[ this$1.owner.template.z[0].n ] = model;
	  			}
	  		}
	  	});

	  	// if the array was spliced outside of ractive, sometimes there are leftover fragments not in the newIndices
	  	this.previousIterations.forEach( function ( frag, i ) {
	  		if ( frag ) removed[ i ] = frag;
	  	});

	  	// create new/move existing iterations
	  	var docFrag = this.rendered ? createDocumentFragment() : null;
	  	var parentNode = this.rendered ? this.parent.findParentNode() : null;

	  	var contiguous = 'startIndex' in newIndices;
	  	i = contiguous ? newIndices.startIndex : 0;

	  	for ( i; i < len; i++ ) {
	  		var frag = this$1.iterations[i];

	  		if ( frag && contiguous ) {
	  			// attach any built-up iterations
	  			if ( this$1.rendered ) {
	  				if ( removed[i] ) docFrag.appendChild( removed[i].detach() );
	  				if ( docFrag.childNodes.length  ) parentNode.insertBefore( docFrag, frag.firstNode() );
	  			}
	  			continue;
	  		}

	  		if ( !frag ) this$1.iterations[i] = this$1.createIteration( i, i );

	  		if ( this$1.rendered ) {
	  			if ( removed[i] ) docFrag.appendChild( removed[i].detach() );

	  			if ( frag ) docFrag.appendChild( frag.detach() );
	  			else {
	  				this$1.iterations[i].render( docFrag );
	  			}
	  		}
	  	}

	  	// append any leftovers
	  	if ( this.rendered ) {
	  		for ( i = len; i < oldLen; i++ ) {
	  			if ( removed[i] ) docFrag.appendChild( removed[i].detach() );
	  		}

	  		if ( docFrag.childNodes.length ) {
	  			parentNode.insertBefore( docFrag, this.owner.findNextNode() );
	  		}
	  	}

	  	// trigger removal on old nodes
	  	Object.keys( removed ).forEach( function ( k ) { return removed[k].unbind().unrender( true ); } );

	  	this.iterations.forEach( update );

	  	this.pendingNewIndices = null;

	  	this.shuffled();
	  };

	  function isEmpty ( value ) {
	  	return !value ||
	  	       ( isArray( value ) && value.length === 0 ) ||
	  		   ( isObject( value ) && Object.keys( value ).length === 0 );
	  }

	  function getType ( value, hasIndexRef ) {
	  	if ( hasIndexRef || isArray( value ) ) return SECTION_EACH;
	  	if ( isObject( value ) || typeof value === 'function' ) return SECTION_IF_WITH;
	  	if ( value === undefined ) return null;
	  	return SECTION_IF;
	  }

	  var Section = (function (Mustache) {
	  	function Section ( options ) {
	  		Mustache.call( this, options );

	  		this.sectionType = options.template.n || null;
	  		this.templateSectionType = this.sectionType;
	  		this.subordinate = options.template.l === 1;
	  		this.fragment = null;
	  	}

	  	Section.prototype = Object.create( Mustache && Mustache.prototype );
	  	Section.prototype.constructor = Section;

	  	Section.prototype.bind = function bind () {
	  		Mustache.prototype.bind.call(this);

	  		if ( this.subordinate ) {
	  			this.sibling = this.parentFragment.items[ this.parentFragment.items.indexOf( this ) - 1 ];
	  			this.sibling.nextSibling = this;
	  		}

	  		// if we managed to bind, we need to create children
	  		if ( this.model ) {
	  			this.dirty = true;
	  			this.update();
	  		} else if ( this.sectionType && this.sectionType === SECTION_UNLESS && ( !this.sibling || !this.sibling.isTruthy() ) ) {
	  			this.fragment = new Fragment({
	  				owner: this,
	  				template: this.template.f
	  			}).bind();
	  		}
	  	};

	  	Section.prototype.destroyed = function destroyed () {
	  		if ( this.fragment ) this.fragment.destroyed();
	  	};

	  	Section.prototype.detach = function detach () {
	  		return this.fragment ? this.fragment.detach() : createDocumentFragment();
	  	};

	  	Section.prototype.find = function find ( selector ) {
	  		if ( this.fragment ) {
	  			return this.fragment.find( selector );
	  		}
	  	};

	  	Section.prototype.findAll = function findAll ( selector, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAll( selector, query );
	  		}
	  	};

	  	Section.prototype.findComponent = function findComponent ( name ) {
	  		if ( this.fragment ) {
	  			return this.fragment.findComponent( name );
	  		}
	  	};

	  	Section.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  		if ( this.fragment ) {
	  			this.fragment.findAllComponents( name, query );
	  		}
	  	};

	  	Section.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.fragment && this.fragment.firstNode( skipParent );
	  	};

	  	Section.prototype.isTruthy = function isTruthy () {
	  		if ( this.subordinate && this.sibling.isTruthy() ) return true;
	  		var value = !this.model ? undefined : this.model.isRoot ? this.model.value : this.model.get();
	  		return !!value && !isEmpty( value );
	  	};

	  	Section.prototype.rebinding = function rebinding ( next, previous, safe ) {
	  		if ( Mustache.prototype.rebinding.call( this, next, previous, safe ) ) {
	  			if ( this.fragment && this.sectionType !== SECTION_IF && this.sectionType !== SECTION_UNLESS ) {
	  				this.fragment.rebinding( next, previous );
	  			}
	  		}
	  	};

	  	Section.prototype.render = function render ( target, occupants ) {
	  		this.rendered = true;
	  		if ( this.fragment ) this.fragment.render( target, occupants );
	  	};

	  	Section.prototype.shuffle = function shuffle ( newIndices ) {
	  		if ( this.fragment && this.sectionType === SECTION_EACH ) {
	  			this.fragment.shuffle( newIndices );
	  		}
	  	};

	  	Section.prototype.toString = function toString ( escape ) {
	  		return this.fragment ? this.fragment.toString( escape ) : '';
	  	};

	  	Section.prototype.unbind = function unbind () {
	  		Mustache.prototype.unbind.call(this);
	  		if ( this.fragment ) this.fragment.unbind();
	  	};

	  	Section.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( this.rendered && this.fragment ) this.fragment.unrender( shouldDestroy );
	  		this.rendered = false;
	  	};

	  	Section.prototype.update = function update () {
	  		if ( !this.dirty ) return;

	  		if ( this.fragment && this.sectionType !== SECTION_IF && this.sectionType !== SECTION_UNLESS ) {
	  			this.fragment.context = this.model;
	  		}

	  		if ( !this.model && this.sectionType !== SECTION_UNLESS ) return;

	  		this.dirty = false;

	  		var value = !this.model ? undefined : this.model.isRoot ? this.model.value : this.model.get();
	  		var siblingFalsey = !this.subordinate || !this.sibling.isTruthy();
	  		var lastType = this.sectionType;

	  		// watch for switching section types
	  		if ( this.sectionType === null || this.templateSectionType === null ) this.sectionType = getType( value, this.template.i );
	  		if ( lastType && lastType !== this.sectionType && this.fragment ) {
	  			if ( this.rendered ) {
	  				this.fragment.unbind().unrender( true );
	  			}

	  			this.fragment = null;
	  		}

	  		var newFragment;

	  		if ( this.sectionType === SECTION_EACH ) {
	  			if ( this.fragment ) {
	  				this.fragment.update();
	  			} else {
	  				// TODO can this happen?
	  				newFragment = new RepeatedFragment({
	  					owner: this,
	  					template: this.template.f,
	  					indexRef: this.template.i
	  				}).bind( this.model );
	  			}
	  		}

	  		// WITH is now IF_WITH; WITH is only used for {{>partial context}}
	  		else if ( this.sectionType === SECTION_WITH ) {
	  			if ( this.fragment ) {
	  				this.fragment.update();
	  			} else {
	  				newFragment = new Fragment({
	  					owner: this,
	  					template: this.template.f
	  				}).bind( this.model );
	  			}
	  		}

	  		else if ( this.sectionType === SECTION_IF_WITH ) {
	  			if ( this.fragment ) {
	  				if ( isEmpty( value ) ) {
	  					if ( this.rendered ) {
	  						this.fragment.unbind().unrender( true );
	  					}

	  					this.fragment = null;
	  				} else {
	  					this.fragment.update();
	  				}
	  			} else if ( !isEmpty( value ) ) {
	  				newFragment = new Fragment({
	  					owner: this,
	  					template: this.template.f
	  				}).bind( this.model );
	  			}
	  		}

	  		else {
	  			var fragmentShouldExist = siblingFalsey && ( this.sectionType === SECTION_UNLESS ? isEmpty( value ) : !!value && !isEmpty( value ) );

	  			if ( this.fragment ) {
	  				if ( fragmentShouldExist ) {
	  					this.fragment.update();
	  				} else {
	  					if ( this.rendered ) {
	  						this.fragment.unbind().unrender( true );
	  					}

	  					this.fragment = null;
	  				}
	  			} else if ( fragmentShouldExist ) {
	  				newFragment = new Fragment({
	  					owner: this,
	  					template: this.template.f
	  				}).bind( null );
	  			}
	  		}

	  		if ( newFragment ) {
	  			if ( this.rendered ) {
	  				var parentNode = this.parentFragment.findParentNode();
	  				var anchor = this.parentFragment.findNextNode( this );

	  				if ( anchor ) {
	  					var docFrag = createDocumentFragment();
	  					newFragment.render( docFrag );

	  					// we use anchor.parentNode, not parentNode, because the sibling
	  					// may be temporarily detached as a result of a shuffle
	  					anchor.parentNode.insertBefore( docFrag, anchor );
	  				} else {
	  					newFragment.render( parentNode );
	  				}
	  			}

	  			this.fragment = newFragment;
	  		}

	  		if ( this.nextSibling ) {
	  			this.nextSibling.dirty = true;
	  			this.nextSibling.update();
	  		}
	  	};

	  	return Section;
	  }(Mustache));

	  function valueContains ( selectValue, optionValue ) {
	  	var i = selectValue.length;
	  	while ( i-- ) {
	  		if ( selectValue[i] == optionValue ) return true;
	  	}
	  }

	  var Select = (function (Element) {
	  	function Select ( options ) {
	  		Element.call( this, options );
	  		this.options = [];
	  	}

	  	Select.prototype = Object.create( Element && Element.prototype );
	  	Select.prototype.constructor = Select;

	  	Select.prototype.foundNode = function foundNode ( node ) {
	  		if ( this.binding ) {
	  			var selectedOptions = getSelectedOptions( node );

	  			if ( selectedOptions.length > 0 ) {
	  				this.selectedOptions = selectedOptions;
	  			}
	  		}
	  	};

	  	Select.prototype.render = function render ( target, occupants ) {
	  		Element.prototype.render.call( this, target, occupants );
	  		this.sync();

	  		var node = this.node;

	  		var i = node.options.length;
	  		while ( i-- ) {
	  			node.options[i].defaultSelected = node.options[i].selected;
	  		}

	  		this.rendered = true;
	  	};

	  	Select.prototype.sync = function sync () {
	  		var this$1 = this;

	  		var selectNode = this.node;

	  		if ( !selectNode ) return;

	  		var options = toArray( selectNode.options );

	  		if ( this.selectedOptions ) {
	  			options.forEach( function ( o ) {
	  				if ( this$1.selectedOptions.indexOf( o ) >= 0 ) o.selected = true;
	  				else o.selected = false;
	  			});
	  			this.binding.setFromNode( selectNode );
	  			delete this.selectedOptions;
	  			return;
	  		}

	  		var selectValue = this.getAttribute( 'value' );
	  		var isMultiple = this.getAttribute( 'multiple' );

	  		// If the <select> has a specified value, that should override
	  		// these options
	  		if ( selectValue !== undefined ) {
	  			var optionWasSelected;

	  			options.forEach( function ( o ) {
	  				var optionValue = o._ractive ? o._ractive.value : o.value;
	  				var shouldSelect = isMultiple ? valueContains( selectValue, optionValue ) : selectValue == optionValue;

	  				if ( shouldSelect ) {
	  					optionWasSelected = true;
	  				}

	  				o.selected = shouldSelect;
	  			});

	  			if ( !optionWasSelected && !isMultiple ) {
	  				if ( this.binding ) {
	  					this.binding.forceUpdate();
	  				}
	  			}
	  		}

	  		// Otherwise the value should be initialised according to which
	  		// <option> element is selected, if twoway binding is in effect
	  		else if ( this.binding ) {
	  			this.binding.forceUpdate();
	  		}
	  	};

	  	Select.prototype.update = function update () {
	  		Element.prototype.update.call(this);
	  		this.sync();
	  	};

	  	return Select;
	  }(Element));

	  var Textarea = (function (Input) {
	  	function Textarea( options ) {
	  		var template = options.template;

	  		options.deferContent = true;

	  		Input.call( this, options );

	  		// check for single interpolator binding
	  		if ( !this.attributeByName.value ) {
	  			if ( template.f && isBindable( { template: template } ) ) {
	  				this.attributes.push( createItem( {
	  					owner: this,
	  					template: { t: ATTRIBUTE, f: template.f, n: 'value' },
	  					parentFragment: this.parentFragment
	  				} ) );
	  			} else {
	  				this.fragment = new Fragment({ owner: this, cssIds: null, template: template.f });
	  			}
	  		}
	  	}

	  	Textarea.prototype = Object.create( Input && Input.prototype );
	  	Textarea.prototype.constructor = Textarea;

	  	Textarea.prototype.bubble = function bubble () {
	  		var this$1 = this;

	  		if ( !this.dirty ) {
	  			this.dirty = true;

	  			if ( this.rendered && !this.binding && this.fragment ) {
	  				runloop.scheduleTask( function () {
	  					this$1.dirty = false;
	  					this$1.node.value = this$1.fragment.toString();
	  				});
	  			}

	  			this.parentFragment.bubble(); // default behaviour
	  		}
	  	};

	  	return Textarea;
	  }(Input));

	  var Text = (function (Item) {
	  	function Text ( options ) {
	  		Item.call( this, options );
	  		this.type = TEXT;
	  	}

	  	Text.prototype = Object.create( Item && Item.prototype );
	  	Text.prototype.constructor = Text;

	  	Text.prototype.bind = function bind () {
	  		// noop
	  	};

	  	Text.prototype.detach = function detach () {
	  		return detachNode( this.node );
	  	};

	  	Text.prototype.firstNode = function firstNode () {
	  		return this.node;
	  	};

	  	Text.prototype.render = function render ( target, occupants ) {
	  		if ( inAttributes() ) return;
	  		this.rendered = true;

	  		if ( occupants ) {
	  			var n = occupants[0];
	  			if ( n && n.nodeType === 3 ) {
	  				occupants.shift();
	  				if ( n.nodeValue !== this.template ) {
	  					n.nodeValue = this.template;
	  				}
	  			} else {
	  				n = this.node = doc.createTextNode( this.template );
	  				if ( occupants[0] ) {
	  					target.insertBefore( n, occupants[0] );
	  				} else {
	  					target.appendChild( n );
	  				}
	  			}

	  			this.node = n;
	  		} else {
	  			this.node = doc.createTextNode( this.template );
	  			target.appendChild( this.node );
	  		}
	  	};

	  	Text.prototype.toString = function toString ( escape ) {
	  		return escape ? escapeHtml( this.template ) : this.template;
	  	};

	  	Text.prototype.unbind = function unbind () {
	  		// noop
	  	};

	  	Text.prototype.unrender = function unrender ( shouldDestroy ) {
	  		if ( this.rendered && shouldDestroy ) this.detach();
	  		this.rendered = false;
	  	};

	  	Text.prototype.update = function update () {
	  		// noop
	  	};

	  	Text.prototype.valueOf = function valueOf () {
	  		return this.template;
	  	};

	  	return Text;
	  }(Item));

	  var prefix;

	  if ( !isClient ) {
	  	prefix = null;
	  } else {
	  	var prefixCache = {};
	  	var testStyle = createElement( 'div' ).style;

	  	prefix = function ( prop ) {
	  		prop = camelCase( prop );

	  		if ( !prefixCache[ prop ] ) {
	  			if ( testStyle[ prop ] !== undefined ) {
	  				prefixCache[ prop ] = prop;
	  			}

	  			else {
	  				// test vendors...
	  				var capped = prop.charAt( 0 ).toUpperCase() + prop.substring( 1 );

	  				var i = vendors.length;
	  				while ( i-- ) {
	  					var vendor = vendors[i];
	  					if ( testStyle[ vendor + capped ] !== undefined ) {
	  						prefixCache[ prop ] = vendor + capped;
	  						break;
	  					}
	  				}
	  			}
	  		}

	  		return prefixCache[ prop ];
	  	};
	  }

	  var prefix$1 = prefix;

	  var visible;
	  var hidden = 'hidden';

	  if ( doc ) {
	  	var prefix$2;

	  	if ( hidden in doc ) {
	  		prefix$2 = '';
	  	} else {
	  		var i$1 = vendors.length;
	  		while ( i$1-- ) {
	  			var vendor = vendors[i$1];
	  			hidden = vendor + 'Hidden';

	  			if ( hidden in doc ) {
	  				prefix$2 = vendor;
	  				break;
	  			}
	  		}
	  	}

	  	if ( prefix$2 !== undefined ) {
	  		doc.addEventListener( prefix$2 + 'visibilitychange', onChange );
	  		onChange();
	  	} else {
	  		// gah, we're in an old browser
	  		if ( 'onfocusout' in doc ) {
	  			doc.addEventListener( 'focusout', onHide );
	  			doc.addEventListener( 'focusin', onShow );
	  		}

	  		else {
	  			win.addEventListener( 'pagehide', onHide );
	  			win.addEventListener( 'blur', onHide );

	  			win.addEventListener( 'pageshow', onShow );
	  			win.addEventListener( 'focus', onShow );
	  		}

	  		visible = true; // until proven otherwise. Not ideal but hey
	  	}
	  }

	  function onChange () {
	  	visible = !doc[ hidden ];
	  }

	  function onHide () {
	  	visible = false;
	  }

	  function onShow () {
	  	visible = true;
	  }

	  var unprefixPattern = new RegExp( '^-(?:' + vendors.join( '|' ) + ')-' );

	  function unprefix ( prop ) {
	  	return prop.replace( unprefixPattern, '' );
	  }

	  var vendorPattern = new RegExp( '^(?:' + vendors.join( '|' ) + ')([A-Z])' );

	  function hyphenate ( str ) {
	  	if ( !str ) return ''; // edge case

	  	if ( vendorPattern.test( str ) ) str = '-' + str;

	  	return str.replace( /[A-Z]/g, function ( match ) { return '-' + match.toLowerCase(); } );
	  }

	  var createTransitions;

	  if ( !isClient ) {
	  	createTransitions = null;
	  } else {
	  	var testStyle$1 = createElement( 'div' ).style;
	  	var linear$1 = function ( x ) { return x; };

	  	var canUseCssTransitions = {};
	  	var cannotUseCssTransitions = {};

	  	// determine some facts about our environment
	  	var TRANSITION$1;
	  	var TRANSITIONEND;
	  	var CSS_TRANSITIONS_ENABLED;
	  	var TRANSITION_DURATION;
	  	var TRANSITION_PROPERTY;
	  	var TRANSITION_TIMING_FUNCTION;

	  	if ( testStyle$1.transition !== undefined ) {
	  		TRANSITION$1 = 'transition';
	  		TRANSITIONEND = 'transitionend';
	  		CSS_TRANSITIONS_ENABLED = true;
	  	} else if ( testStyle$1.webkitTransition !== undefined ) {
	  		TRANSITION$1 = 'webkitTransition';
	  		TRANSITIONEND = 'webkitTransitionEnd';
	  		CSS_TRANSITIONS_ENABLED = true;
	  	} else {
	  		CSS_TRANSITIONS_ENABLED = false;
	  	}

	  	if ( TRANSITION$1 ) {
	  		TRANSITION_DURATION = TRANSITION$1 + 'Duration';
	  		TRANSITION_PROPERTY = TRANSITION$1 + 'Property';
	  		TRANSITION_TIMING_FUNCTION = TRANSITION$1 + 'TimingFunction';
	  	}

	  	createTransitions = function ( t, to, options, changedProperties, resolve ) {

	  		// Wait a beat (otherwise the target styles will be applied immediately)
	  		// TODO use a fastdom-style mechanism?
	  		setTimeout( function () {
	  			var jsTransitionsComplete;
	  			var cssTransitionsComplete;
	  			var cssTimeout;

	  			function transitionDone () { clearTimeout( cssTimeout ); }

	  			function checkComplete () {
	  				if ( jsTransitionsComplete && cssTransitionsComplete ) {
	  					t.unregisterCompleteHandler( transitionDone );
	  					// will changes to events and fire have an unexpected consequence here?
	  					t.ractive.fire( t.name + ':end', t.node, t.isIntro );
	  					resolve();
	  				}
	  			}

	  			// this is used to keep track of which elements can use CSS to animate
	  			// which properties
	  			var hashPrefix = ( t.node.namespaceURI || '' ) + t.node.tagName;

	  			// need to reset transition properties
	  			var style = t.node.style;
	  			var previous = {
	  				property: style[ TRANSITION_PROPERTY ],
	  				timing: style[ TRANSITION_TIMING_FUNCTION ],
	  				duration: style[ TRANSITION_DURATION ]
	  			};

	  			style[ TRANSITION_PROPERTY ] = changedProperties.map( prefix$1 ).map( hyphenate ).join( ',' );
	  			style[ TRANSITION_TIMING_FUNCTION ] = hyphenate( options.easing || 'linear' );
	  			style[ TRANSITION_DURATION ] = ( options.duration / 1000 ) + 's';

	  			function transitionEndHandler ( event ) {
	  				var index = changedProperties.indexOf( camelCase( unprefix( event.propertyName ) ) );

	  				if ( index !== -1 ) {
	  					changedProperties.splice( index, 1 );
	  				}

	  				if ( changedProperties.length ) {
	  					// still transitioning...
	  					return;
	  				}

	  				clearTimeout( cssTimeout );
	  				cssTransitionsDone();
	  			}

	  			function cssTransitionsDone () {
	  				style[ TRANSITION_PROPERTY ] = previous.property;
	  				style[ TRANSITION_TIMING_FUNCTION ] = previous.duration;
	  				style[ TRANSITION_DURATION ] = previous.timing;

	  				t.node.removeEventListener( TRANSITIONEND, transitionEndHandler, false );

	  				cssTransitionsComplete = true;
	  				checkComplete();
	  			}

	  			t.node.addEventListener( TRANSITIONEND, transitionEndHandler, false );

	  			// safety net in case transitionend never fires
	  			cssTimeout = setTimeout( function () {
	  				changedProperties = [];
	  				cssTransitionsDone();
	  			}, options.duration + ( options.delay || 0 ) + 50 );
	  			t.registerCompleteHandler( transitionDone );

	  			setTimeout( function () {
	  				var i = changedProperties.length;
	  				var hash;
	  				var originalValue;
	  				var index;
	  				var propertiesToTransitionInJs = [];
	  				var prop;
	  				var suffix;
	  				var interpolator;

	  				while ( i-- ) {
	  					prop = changedProperties[i];
	  					hash = hashPrefix + prop;

	  					if ( CSS_TRANSITIONS_ENABLED && !cannotUseCssTransitions[ hash ] ) {
	  						style[ prefix$1( prop ) ] = to[ prop ];

	  						// If we're not sure if CSS transitions are supported for
	  						// this tag/property combo, find out now
	  						if ( !canUseCssTransitions[ hash ] ) {
	  							originalValue = t.getStyle( prop );

	  							// if this property is transitionable in this browser,
	  							// the current style will be different from the target style
	  							canUseCssTransitions[ hash ] = ( t.getStyle( prop ) != to[ prop ] );
	  							cannotUseCssTransitions[ hash ] = !canUseCssTransitions[ hash ];

	  							// Reset, if we're going to use timers after all
	  							if ( cannotUseCssTransitions[ hash ] ) {
	  								style[ prefix$1( prop ) ] = originalValue;
	  							}
	  						}
	  					}

	  					if ( !CSS_TRANSITIONS_ENABLED || cannotUseCssTransitions[ hash ] ) {
	  						// we need to fall back to timer-based stuff
	  						if ( originalValue === undefined ) {
	  							originalValue = t.getStyle( prop );
	  						}

	  						// need to remove this from changedProperties, otherwise transitionEndHandler
	  						// will get confused
	  						index = changedProperties.indexOf( prop );
	  						if ( index === -1 ) {
	  							warnIfDebug( 'Something very strange happened with transitions. Please raise an issue at https://github.com/ractivejs/ractive/issues - thanks!', { node: t.node });
	  						} else {
	  							changedProperties.splice( index, 1 );
	  						}

	  						// TODO Determine whether this property is animatable at all

	  						suffix = /[^\d]*$/.exec( to[ prop ] )[0];
	  						interpolator = interpolate( parseFloat( originalValue ), parseFloat( to[ prop ] ) ) || ( function () { return to[ prop ]; } );

	  						// ...then kick off a timer-based transition
	  						propertiesToTransitionInJs.push({
	  							name: prefix$1( prop ),
	  							interpolator: interpolator,
	  							suffix: suffix
	  						});
	  					}
	  				}

	  				// javascript transitions
	  				if ( propertiesToTransitionInJs.length ) {
	  					var easing;

	  					if ( typeof options.easing === 'string' ) {
	  						easing = t.ractive.easing[ options.easing ];

	  						if ( !easing ) {
	  							warnOnceIfDebug( missingPlugin( options.easing, 'easing' ) );
	  							easing = linear$1;
	  						}
	  					} else if ( typeof options.easing === 'function' ) {
	  						easing = options.easing;
	  					} else {
	  						easing = linear$1;
	  					}

	  					new Ticker({
	  						duration: options.duration,
	  						easing: easing,
	  						step: function ( pos ) {
	  							var i = propertiesToTransitionInJs.length;
	  							while ( i-- ) {
	  								var prop = propertiesToTransitionInJs[i];
	  								t.node.style[ prop.name ] = prop.interpolator( pos ) + prop.suffix;
	  							}
	  						},
	  						complete: function () {
	  							jsTransitionsComplete = true;
	  							checkComplete();
	  						}
	  					});
	  				} else {
	  					jsTransitionsComplete = true;
	  				}

	  				if ( !changedProperties.length ) {
	  					// We need to cancel the transitionEndHandler, and deal with
	  					// the fact that it will never fire
	  					t.node.removeEventListener( TRANSITIONEND, transitionEndHandler, false );
	  					cssTransitionsComplete = true;
	  					checkComplete();
	  				}
	  			}, 0 );
	  		}, options.delay || 0 );
	  	};
	  }

	  var createTransitions$1 = createTransitions;

	  function resetStyle ( node, style ) {
	  	if ( style ) {
	  		node.setAttribute( 'style', style );
	  	} else {
	  		// Next line is necessary, to remove empty style attribute!
	  		// See http://stackoverflow.com/a/7167553
	  		node.getAttribute( 'style' );
	  		node.removeAttribute( 'style' );
	  	}
	  }

	  var getComputedStyle = win && ( win.getComputedStyle || legacy.getComputedStyle );
	  var resolved = Promise$1.resolve();

	  var names = {
	  	t0: 'intro-outro',
	  	t1: 'intro',
	  	t2: 'outro'
	  };

	  var Transition = function Transition ( options ) {
	  	this.owner = options.owner || options.parentFragment.owner || findElement( options.parentFragment );
	  	this.element = this.owner.attributeByName ? this.owner : findElement( options.parentFragment );
	  	this.ractive = this.owner.ractive;
	  	this.template = options.template;
	  	this.parentFragment = options.parentFragment;
	  	this.options = options;
	  	this.onComplete = [];
	  };

	  Transition.prototype.animateStyle = function animateStyle ( style, value, options ) {
	  	var this$1 = this;

	  		if ( arguments.length === 4 ) {
	  		throw new Error( 't.animateStyle() returns a promise - use .then() instead of passing a callback' );
	  	}

	  	// Special case - page isn't visible. Don't animate anything, because
	  	// that way you'll never get CSS transitionend events
	  	if ( !visible ) {
	  		this.setStyle( style, value );
	  		return resolved;
	  	}

	  	var to;

	  	if ( typeof style === 'string' ) {
	  		to = {};
	  		to[ style ] = value;
	  	} else {
	  		to = style;

	  		// shuffle arguments
	  		options = value;
	  	}

	  	// As of 0.3.9, transition authors should supply an `option` object with
	  	// `duration` and `easing` properties (and optional `delay`), plus a
	  	// callback function that gets called after the animation completes

	  	// TODO remove this check in a future version
	  	if ( !options ) {
	  		warnOnceIfDebug( 'The "%s" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340', this.name );
	  		options = this;
	  	}

	  	return new Promise$1( function ( fulfil ) {
	  		// Edge case - if duration is zero, set style synchronously and complete
	  		if ( !options.duration ) {
	  			this$1.setStyle( to );
	  			fulfil();
	  			return;
	  		}

	  		// Get a list of the properties we're animating
	  		var propertyNames = Object.keys( to );
	  		var changedProperties = [];

	  		// Store the current styles
	  		var computedStyle = getComputedStyle( this$1.owner.node );

	  		var i = propertyNames.length;
	  		while ( i-- ) {
	  			var prop = propertyNames[i];
	  			var current = computedStyle[ prefix$1( prop ) ];

	  			if ( current === '0px' ) current = 0;

	  			// we need to know if we're actually changing anything
	  			if ( current != to[ prop ] ) { // use != instead of !==, so we can compare strings with numbers
	  				changedProperties.push( prop );

	  				// make the computed style explicit, so we can animate where
	  				// e.g. height='auto'
	  				this$1.owner.node.style[ prefix$1( prop ) ] = current;
	  			}
	  		}

	  		// If we're not actually changing anything, the transitionend event
	  		// will never fire! So we complete early
	  		if ( !changedProperties.length ) {
	  			fulfil();
	  			return;
	  		}

	  		createTransitions$1( this$1, to, options, changedProperties, fulfil );
	  	});
	  };

	  Transition.prototype.bind = function bind () {
	  	var this$1 = this;

	  		var options = this.options;
	  	if ( options.template ) {
	  		if ( options.template.v === 't0' || options.template.v == 't1' ) this.element._introTransition = this;
	  		if ( options.template.v === 't0' || options.template.v == 't2' ) this.element._outroTransition = this;
	  		this.eventName = names[ options.template.v ];
	  	}

	  	var ractive = this.owner.ractive;

	  	if ( options.name ) {
	  		this.name = options.name;
	  	} else {
	  		var name = options.template.f;
	  		if ( typeof name.n === 'string' ) name = name.n;

	  		if ( typeof name !== 'string' ) {
	  			var fragment = new Fragment({
	  				owner: this.owner,
	  				template: name.n
	  			}).bind(); // TODO need a way to capture values without bind()

	  			name = fragment.toString();
	  			fragment.unbind();

	  			if ( name === '' ) {
	  				// empty string okay, just no transition
	  				return;
	  			}
	  		}

	  		this.name = name;
	  	}

	  	if ( options.params ) {
	  		this.params = options.params;
	  	} else {
	  		if ( options.template.f.a && !options.template.f.a.s ) {
	  			this.params = options.template.f.a;
	  		}

	  		else if ( options.template.f.d ) {
	  			// TODO is there a way to interpret dynamic arguments without all the
	  			// 'dependency thrashing'?
	  			var fragment$1 = new Fragment({
	  				owner: this.owner,
	  				template: options.template.f.d
	  			}).bind();

	  			this.params = fragment$1.getArgsList();
	  			fragment$1.unbind();
	  		}
	  	}

	  	if ( typeof this.name === 'function' ) {
	  		this._fn = this.name;
	  		this.name = this._fn.name;
	  	} else {
	  		this._fn = findInViewHierarchy( 'transitions', ractive, this.name );
	  	}

	  	if ( !this._fn ) {
	  		warnOnceIfDebug( missingPlugin( this.name, 'transition' ), { ractive: ractive });
	  	}

	  	// TODO: dry up after deprecation is done
	  	if ( options.template && this.template.f.a && this.template.f.a.s ) {
	  		this.resolvers = [];
	  		this.models = this.template.f.a.r.map( function ( ref, i ) {
	  			var resolver;
	  			var model = resolveReference( this$1.parentFragment, ref );
	  			if ( !model ) {
	  				resolver = this$1.parentFragment.resolve( ref, function ( model ) {
	  					this$1.models[i] = model;
	  					removeFromArray( this$1.resolvers, resolver );
	  					model.register( this$1 );
	  				});

	  				this$1.resolvers.push( resolver );
	  			} else model.register( this$1 );

	  			return model;
	  		});
	  		this.argsFn = getFunction( this.template.f.a.s, this.template.f.a.r.length );
	  	}
	  };

	  Transition.prototype.destroyed = function destroyed () {};

	  Transition.prototype.getStyle = function getStyle ( props ) {
	  	var computedStyle = getComputedStyle( this.owner.node );

	  	if ( typeof props === 'string' ) {
	  		var value = computedStyle[ prefix$1( props ) ];
	  		return value === '0px' ? 0 : value;
	  	}

	  	if ( !isArray( props ) ) {
	  		throw new Error( 'Transition$getStyle must be passed a string, or an array of strings representing CSS properties' );
	  	}

	  	var styles = {};

	  	var i = props.length;
	  	while ( i-- ) {
	  		var prop = props[i];
	  		var value$1 = computedStyle[ prefix$1( prop ) ];

	  		if ( value$1 === '0px' ) value$1 = 0;
	  		styles[ prop ] = value$1;
	  	}

	  	return styles;
	  };

	  Transition.prototype.processParams = function processParams ( params, defaults ) {
	  	if ( typeof params === 'number' ) {
	  		params = { duration: params };
	  	}

	  	else if ( typeof params === 'string' ) {
	  		if ( params === 'slow' ) {
	  			params = { duration: 600 };
	  		} else if ( params === 'fast' ) {
	  			params = { duration: 200 };
	  		} else {
	  			params = { duration: 400 };
	  		}
	  	} else if ( !params ) {
	  		params = {};
	  	}

	  	return extendObj( {}, defaults, params );
	  };

	  Transition.prototype.rebinding = function rebinding ( next, previous ) {
	  	var idx = this.models.indexOf( previous );
	  	if ( !~idx ) return;

	  	next = rebindMatch( this.template.f.a.r[ idx ], next, previous );
	  	if ( next === previous ) return;

	  	previous.unregister( this );
	  	this.models.splice( idx, 1, next );
	  	if ( next ) next.addShuffleRegister( this, 'mark' );
	  };

	  Transition.prototype.registerCompleteHandler = function registerCompleteHandler ( fn ) {
	  	addToArray( this.onComplete, fn );
	  };

	  Transition.prototype.render = function render () {};

	  Transition.prototype.setStyle = function setStyle ( style, value ) {
	  	if ( typeof style === 'string' ) {
	  		this.owner.node.style[ prefix$1( style ) ] = value;
	  	}

	  	else {
	  		var prop;
	  		for ( prop in style ) {
	  			if ( style.hasOwnProperty( prop ) ) {
	  				this.owner.node.style[ prefix$1( prop ) ] = style[ prop ];
	  			}
	  		}
	  	}

	  	return this;
	  };

	  Transition.prototype.start = function start () {
	  	var this$1 = this;

	  		var node = this.node = this.element.node;
	  	var originalStyle = node.getAttribute( 'style' );

	  	var completed;
	  	var args = this.params;

	  	// create t.complete() - we don't want this on the prototype,
	  	// because we don't want `this` silliness when passing it as
	  	// an argument
	  	this.complete = function ( noReset ) {
	  		if ( completed ) {
	  			return;
	  		}

	  		this$1.onComplete.forEach( function ( fn ) { return fn(); } );
	  		if ( !noReset && this$1.isIntro ) {
	  			resetStyle( node, originalStyle);
	  		}

	  		this$1._manager.remove( this$1 );

	  		completed = true;
	  	};

	  	// If the transition function doesn't exist, abort
	  	if ( !this._fn ) {
	  		this.complete();
	  		return;
	  	}

	  	// get expression args if supplied
	  	if ( this.argsFn ) {
	  		var values = this.models.map( function ( model ) {
	  			if ( !model ) return undefined;

	  			return model.get();
	  		});
	  		args = this.argsFn.apply( this.ractive, values );
	  	}

	  	var promise = this._fn.apply( this.ractive, [ this ].concat( args ) );
	  	if ( promise ) promise.then( this.complete );
	  };

	  Transition.prototype.toString = function toString () { return ''; };

	  Transition.prototype.unbind = function unbind$1 () {
	  	if ( this.resolvers ) this.resolvers.forEach( unbind );
	  };

	  Transition.prototype.unregisterCompleteHandler = function unregisterCompleteHandler ( fn ) {
	  	removeFromArray( this.onComplete, fn );
	  };

	  Transition.prototype.unrender = function unrender () {};

	  Transition.prototype.update = function update () {};

	  var elementCache = {};

	  var ieBug;
	  var ieBlacklist;

	  try {
	  	createElement( 'table' ).innerHTML = 'foo';
	  } catch ( err ) {
	  	ieBug = true;

	  	ieBlacklist = {
	  		TABLE:  [ '<table class="x">', '</table>' ],
	  		THEAD:  [ '<table><thead class="x">', '</thead></table>' ],
	  		TBODY:  [ '<table><tbody class="x">', '</tbody></table>' ],
	  		TR:     [ '<table><tr class="x">', '</tr></table>' ],
	  		SELECT: [ '<select class="x">', '</select>' ]
	  	};
	  }

	  function insertHtml ( html, node, docFrag ) {
	  	var nodes = [];

	  	// render 0 and false
	  	if ( html == null || html === '' ) return nodes;

	  	var container;
	  	var wrapper;
	  	var selectedOption;

	  	if ( ieBug && ( wrapper = ieBlacklist[ node.tagName ] ) ) {
	  		container = element( 'DIV' );
	  		container.innerHTML = wrapper[0] + html + wrapper[1];
	  		container = container.querySelector( '.x' );

	  		if ( container.tagName === 'SELECT' ) {
	  			selectedOption = container.options[ container.selectedIndex ];
	  		}
	  	}

	  	else if ( node.namespaceURI === svg$1 ) {
	  		container = element( 'DIV' );
	  		container.innerHTML = '<svg class="x">' + html + '</svg>';
	  		container = container.querySelector( '.x' );
	  	}

	  	else if ( node.tagName === 'TEXTAREA' ) {
	  		container = createElement( 'div' );

	  		if ( typeof container.textContent !== 'undefined' ) {
	  			container.textContent = html;
	  		} else {
	  			container.innerHTML = html;
	  		}
	  	}

	  	else {
	  		container = element( node.tagName );
	  		container.innerHTML = html;

	  		if ( container.tagName === 'SELECT' ) {
	  			selectedOption = container.options[ container.selectedIndex ];
	  		}
	  	}

	  	var child;
	  	while ( child = container.firstChild ) {
	  		nodes.push( child );
	  		docFrag.appendChild( child );
	  	}

	  	// This is really annoying. Extracting <option> nodes from the
	  	// temporary container <select> causes the remaining ones to
	  	// become selected. So now we have to deselect them. IE8, you
	  	// amaze me. You really do
	  	// ...and now Chrome too
	  	var i;
	  	if ( node.tagName === 'SELECT' ) {
	  		i = nodes.length;
	  		while ( i-- ) {
	  			if ( nodes[i] !== selectedOption ) {
	  				nodes[i].selected = false;
	  			}
	  		}
	  	}

	  	return nodes;
	  }

	  function element ( tagName ) {
	  	return elementCache[ tagName ] || ( elementCache[ tagName ] = createElement( tagName ) );
	  }

	  var Triple = (function (Mustache) {
	  	function Triple ( options ) {
	  		Mustache.call( this, options );
	  	}

	  	Triple.prototype = Object.create( Mustache && Mustache.prototype );
	  	Triple.prototype.constructor = Triple;

	  	Triple.prototype.detach = function detach () {
	  		var docFrag = createDocumentFragment();
	  		this.nodes.forEach( function ( node ) { return docFrag.appendChild( node ); } );
	  		return docFrag;
	  	};

	  	Triple.prototype.find = function find ( selector ) {
	  		var this$1 = this;

	  		var len = this.nodes.length;
	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var node = this$1.nodes[i];

	  			if ( node.nodeType !== 1 ) continue;

	  			if ( matches( node, selector ) ) return node;

	  			var queryResult = node.querySelector( selector );
	  			if ( queryResult ) return queryResult;
	  		}

	  		return null;
	  	};

	  	Triple.prototype.findAll = function findAll ( selector, query ) {
	  		var this$1 = this;

	  		var len = this.nodes.length;
	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var node = this$1.nodes[i];

	  			if ( node.nodeType !== 1 ) continue;

	  			if ( query.test( node ) ) query.add( node );

	  			var queryAllResult = node.querySelectorAll( selector );
	  			if ( queryAllResult ) {
	  				var numNodes = queryAllResult.length;
	  				var j;

	  				for ( j = 0; j < numNodes; j += 1 ) {
	  					query.add( queryAllResult[j] );
	  				}
	  			}
	  		}
	  	};

	  	Triple.prototype.findComponent = function findComponent () {
	  		return null;
	  	};

	  	Triple.prototype.firstNode = function firstNode () {
	  		return this.nodes[0];
	  	};

	  	Triple.prototype.render = function render ( target ) {
	  		var html = this.model ? this.model.get() : '';
	  		this.nodes = insertHtml( html, this.parentFragment.findParentNode(), target );
	  		this.rendered = true;
	  	};

	  	Triple.prototype.toString = function toString () {
	  		return this.model && this.model.get() != null ? decodeCharacterReferences( '' + this.model.get() ) : '';
	  	};

	  	Triple.prototype.unrender = function unrender () {
	  		if ( this.nodes ) this.nodes.forEach( function ( node ) { return detachNode( node ); } );
	  		this.rendered = false;
	  	};

	  	Triple.prototype.update = function update () {
	  		if ( this.rendered && this.dirty ) {
	  			this.dirty = false;

	  			this.unrender();
	  			var docFrag = createDocumentFragment();
	  			this.render( docFrag );

	  			var parentNode = this.parentFragment.findParentNode();
	  			var anchor = this.parentFragment.findNextNode( this );

	  			parentNode.insertBefore( docFrag, anchor );
	  		}
	  	};

	  	return Triple;
	  }(Mustache));

	  var Yielder = (function (Item) {
	  	function Yielder ( options ) {
	  		Item.call( this, options );

	  		this.container = options.parentFragment.ractive;
	  		this.component = this.container.component;

	  		this.containerFragment = options.parentFragment;
	  		this.parentFragment = this.component.parentFragment;

	  		// {{yield}} is equivalent to {{yield content}}
	  		this.name = options.template.n || '';
	  	}

	  	Yielder.prototype = Object.create( Item && Item.prototype );
	  	Yielder.prototype.constructor = Yielder;

	  	Yielder.prototype.bind = function bind () {
	  		var name = this.name;

	  		( this.component.yielders[ name ] || ( this.component.yielders[ name ] = [] ) ).push( this );

	  		// TODO don't parse here
	  		var template = this.container._inlinePartials[ name || 'content' ];

	  		if ( typeof template === 'string' ) {
	  			template = parse( template ).t;
	  		}

	  		if ( !template ) {
	  			warnIfDebug( ("Could not find template for partial \"" + name + "\""), { ractive: this.ractive });
	  			template = [];
	  		}

	  		this.fragment = new Fragment({
	  			owner: this,
	  			ractive: this.container.parent,
	  			template: template
	  		}).bind();
	  	};

	  	Yielder.prototype.bubble = function bubble () {
	  		if ( !this.dirty ) {
	  			this.containerFragment.bubble();
	  			this.dirty = true;
	  		}
	  	};

	  	Yielder.prototype.detach = function detach () {
	  		return this.fragment.detach();
	  	};

	  	Yielder.prototype.find = function find ( selector ) {
	  		return this.fragment.find( selector );
	  	};

	  	Yielder.prototype.findAll = function findAll ( selector, queryResult ) {
	  		this.fragment.find( selector, queryResult );
	  	};

	  	Yielder.prototype.findComponent = function findComponent ( name ) {
	  		return this.fragment.findComponent( name );
	  	};

	  	Yielder.prototype.findAllComponents = function findAllComponents ( name, queryResult ) {
	  		this.fragment.findAllComponents( name, queryResult );
	  	};

	  	Yielder.prototype.findNextNode = function findNextNode() {
	  		return this.containerFragment.findNextNode( this );
	  	};

	  	Yielder.prototype.firstNode = function firstNode ( skipParent ) {
	  		return this.fragment.firstNode( skipParent );
	  	};

	  	Yielder.prototype.render = function render ( target, occupants ) {
	  		return this.fragment.render( target, occupants );
	  	};

	  	Yielder.prototype.setTemplate = function setTemplate ( name ) {
	  		var template = this.parentFragment.ractive.partials[ name ];

	  		if ( typeof template === 'string' ) {
	  			template = parse( template ).t;
	  		}

	  		this.partialTemplate = template || []; // TODO warn on missing partial
	  	};

	  	Yielder.prototype.toString = function toString ( escape ) {
	  		return this.fragment.toString( escape );
	  	};

	  	Yielder.prototype.unbind = function unbind () {
	  		this.fragment.unbind();
	  		removeFromArray( this.component.yielders[ this.name ], this );
	  	};

	  	Yielder.prototype.unrender = function unrender ( shouldDestroy ) {
	  		this.fragment.unrender( shouldDestroy );
	  	};

	  	Yielder.prototype.update = function update () {
	  		this.dirty = false;
	  		this.fragment.update();
	  	};

	  	return Yielder;
	  }(Item));

	  // finds the component constructor in the registry or view hierarchy registries
	  function getComponentConstructor ( ractive, name ) {
	  	var instance = findInstance( 'components', ractive, name );
	  	var Component;

	  	if ( instance ) {
	  		Component = instance.components[ name ];

	  		// best test we have for not Ractive.extend
	  		if ( !Component._Parent ) {
	  			// function option, execute and store for reset
	  			var fn = Component.bind( instance );
	  			fn.isOwner = instance.components.hasOwnProperty( name );
	  			Component = fn();

	  			if ( !Component ) {
	  				warnIfDebug( noRegistryFunctionReturn, name, 'component', 'component', { ractive: ractive });
	  				return;
	  			}

	  			if ( typeof Component === 'string' ) {
	  				// allow string lookup
	  				Component = getComponentConstructor( ractive, Component );
	  			}

	  			Component._fn = fn;
	  			instance.components[ name ] = Component;
	  		}
	  	}

	  	return Component;
	  }

	  var constructors = {};
	  constructors[ ALIAS ] = Alias;
	  constructors[ DOCTYPE ] = Doctype;
	  constructors[ INTERPOLATOR ] = Interpolator;
	  constructors[ PARTIAL ] = Partial;
	  constructors[ SECTION ] = Section;
	  constructors[ TRIPLE ] = Triple;
	  constructors[ YIELDER ] = Yielder;

	  constructors[ ATTRIBUTE ] = Attribute;
	  constructors[ BINDING_FLAG ] = BindingFlag;
	  constructors[ DECORATOR ] = Decorator;
	  constructors[ EVENT ] = EventDirective;
	  constructors[ TRANSITION ] = Transition;

	  var specialElements = {
	  	doctype: Doctype,
	  	form: Form,
	  	input: Input,
	  	option: Option,
	  	select: Select,
	  	textarea: Textarea
	  };

	  function createItem ( options ) {
	  	if ( typeof options.template === 'string' ) {
	  		return new Text( options );
	  	}

	  	if ( options.template.t === ELEMENT ) {
	  		// could be component or element
	  		var ComponentConstructor = getComponentConstructor( options.parentFragment.ractive, options.template.e );
	  		if ( ComponentConstructor ) {
	  			return new Component( options, ComponentConstructor );
	  		}

	  		var tagName = options.template.e.toLowerCase();

	  		var ElementConstructor = specialElements[ tagName ] || Element;
	  		return new ElementConstructor( options );
	  	}

	  	var Item;

	  	// component mappings are a special case of attribute
	  	if ( options.template.t === ATTRIBUTE ) {
	  		var el = options.owner;
	  		if ( !el || ( el.type !== COMPONENT && el.type !== ELEMENT ) ) {
	  			el = findElement( options.parentFragment );
	  		}
	  		options.element = el;

	  		Item = el.type === COMPONENT ? Mapping : Attribute;
	  	} else {
	  		Item = constructors[ options.template.t ];
	  	}

	  	if ( !Item ) throw new Error( ("Unrecognised item type " + (options.template.t)) );

	  	return new Item( options );
	  }

	  // TODO all this code needs to die
	  function processItems ( items, values, guid, counter ) {
	  	if ( counter === void 0 ) counter = 0;

	  	return items.map( function ( item ) {
	  		if ( item.type === TEXT ) {
	  			return item.template;
	  		}

	  		if ( item.fragment ) {
	  			if ( item.fragment.iterations ) {
	  				return item.fragment.iterations.map( function ( fragment ) {
	  					return processItems( fragment.items, values, guid, counter );
	  				}).join( '' );
	  			} else {
	  				return processItems( item.fragment.items, values, guid, counter );
	  			}
	  		}

	  		var placeholderId = "" + guid + "-" + (counter++);
	  		var model = item.model || item.newModel;

	  		values[ placeholderId ] = model ?
	  			model.wrapper ?
	  				model.wrapper.value :
	  				model.get() :
	  			undefined;

	  		return '${' + placeholderId + '}';
	  	}).join( '' );
	  }

	  function unrenderAndDestroy$1 ( item ) {
	  	item.unrender( true );
	  }

	  var Fragment = function Fragment ( options ) {
	  	this.owner = options.owner; // The item that owns this fragment - an element, section, partial, or attribute

	  	this.isRoot = !options.owner.parentFragment;
	  	this.parent = this.isRoot ? null : this.owner.parentFragment;
	  	this.ractive = options.ractive || ( this.isRoot ? options.owner : this.parent.ractive );

	  	this.componentParent = ( this.isRoot && this.ractive.component ) ? this.ractive.component.parentFragment : null;

	  	this.context = null;
	  	this.rendered = false;

	  	// encapsulated styles should be inherited until they get applied by an element
	  	this.cssIds = 'cssIds' in options ? options.cssIds : ( this.parent ? this.parent.cssIds : null );

	  	this.resolvers = [];

	  	this.dirty = false;
	  	this.dirtyArgs = this.dirtyValue = true; // TODO getArgsList is nonsense - should deprecate legacy directives style

	  	this.template = options.template || [];
	  	this.createItems();
	  };

	  Fragment.prototype.bind = function bind$1$$ ( context ) {
	  	this.context = context;
	  	this.items.forEach( bind$1 );
	  	this.bound = true;

	  	// in rare cases, a forced resolution (or similar) will cause the
	  	// fragment to be dirty before it's even finished binding. In those
	  	// cases we update immediately
	  	if ( this.dirty ) this.update();

	  	return this;
	  };

	  Fragment.prototype.bubble = function bubble () {
	  	this.dirtyArgs = this.dirtyValue = true;

	  	if ( !this.dirty ) {
	  		this.dirty = true;

	  		if ( this.isRoot ) { // TODO encapsulate 'is component root, but not overall root' check?
	  			if ( this.ractive.component ) {
	  				this.ractive.component.bubble();
	  			} else if ( this.bound ) {
	  				runloop.addFragment( this );
	  			}
	  		} else {
	  			this.owner.bubble();
	  		}
	  	}
	  };

	  Fragment.prototype.createItems = function createItems () {
	  	// this is a hot code path
	  	var this$1 = this;

	  		var max = this.template.length;
	  	this.items = [];
	  	for ( var i = 0; i < max; i++ ) {
	  		this$1.items[i] = createItem({ parentFragment: this$1, template: this$1.template[i], index: i });
	  	}
	  };

	  Fragment.prototype.destroyed = function destroyed () {
	  	this.items.forEach( function ( i ) { return i.destroyed(); } );
	  };

	  Fragment.prototype.detach = function detach () {
	  	var docFrag = createDocumentFragment();
	  	this.items.forEach( function ( item ) { return docFrag.appendChild( item.detach() ); } );
	  	return docFrag;
	  };

	  Fragment.prototype.find = function find ( selector ) {
	  	var this$1 = this;

	  		var len = this.items.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		var found = this$1.items[i].find( selector );
	  		if ( found ) return found;
	  	}
	  };

	  Fragment.prototype.findAll = function findAll ( selector, query ) {
	  	var this$1 = this;

	  		if ( this.items ) {
	  		var len = this.items.length;
	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var item = this$1.items[i];

	  			if ( item.findAll ) {
	  				item.findAll( selector, query );
	  			}
	  		}
	  	}

	  	return query;
	  };

	  Fragment.prototype.findComponent = function findComponent ( name ) {
	  	var this$1 = this;

	  		var len = this.items.length;
	  	var i;

	  	for ( i = 0; i < len; i += 1 ) {
	  		var found = this$1.items[i].findComponent( name );
	  		if ( found ) return found;
	  	}
	  };

	  Fragment.prototype.findAllComponents = function findAllComponents ( name, query ) {
	  	var this$1 = this;

	  		if ( this.items ) {
	  		var len = this.items.length;
	  		var i;

	  		for ( i = 0; i < len; i += 1 ) {
	  			var item = this$1.items[i];

	  			if ( item.findAllComponents ) {
	  				item.findAllComponents( name, query );
	  			}
	  		}
	  	}

	  	return query;
	  };

	  Fragment.prototype.findContext = function findContext () {
	  	var fragment = this;
	  	while ( fragment && !fragment.context ) fragment = fragment.parent;
	  	if ( !fragment ) return this.ractive.viewmodel;
	  	else return fragment.context;
	  };

	  Fragment.prototype.findNextNode = function findNextNode ( item ) {
	  	// search for the next node going forward
	  	var this$1 = this;

	  		for ( var i = item.index + 1; i < this$1.items.length; i++ ) {
	  		if ( !this$1.items[ i ] ) continue;

	  		var node = this$1.items[ i ].firstNode( true );
	  		if ( node ) return node;
	  	}

	  	// if this is the root fragment, and there are no more items,
	  	// it means we're at the end...
	  	if ( this.isRoot ) {
	  		if ( this.ractive.component ) {
	  			return this.ractive.component.parentFragment.findNextNode( this.ractive.component );
	  		}

	  		// TODO possible edge case with other content
	  		// appended to this.ractive.el?
	  		return null;
	  	}

	  	return this.owner.findNextNode( this ); // the argument is in case the parent is a RepeatedFragment
	  };

	  Fragment.prototype.findParentNode = function findParentNode () {
	  	var fragment = this;

	  	do {
	  		if ( fragment.owner.type === ELEMENT ) {
	  			return fragment.owner.node;
	  		}

	  		if ( fragment.isRoot && !fragment.ractive.component ) { // TODO encapsulate check
	  			return fragment.ractive.el;
	  		}

	  		if ( fragment.owner.type === YIELDER ) {
	  			fragment = fragment.owner.containerFragment;
	  		} else {
	  			fragment = fragment.componentParent || fragment.parent; // TODO ugh
	  		}
	  	} while ( fragment );

	  	throw new Error( 'Could not find parent node' ); // TODO link to issue tracker
	  };

	  Fragment.prototype.findRepeatingFragment = function findRepeatingFragment () {
	  	var fragment = this;
	  	// TODO better check than fragment.parent.iterations
	  	while ( ( fragment.parent || fragment.componentParent ) && !fragment.isIteration ) {
	  		fragment = fragment.parent || fragment.componentParent;
	  	}

	  	return fragment;
	  };

	  Fragment.prototype.firstNode = function firstNode ( skipParent ) {
	  	var this$1 = this;

	  		var node;
	  	for ( var i = 0; i < this$1.items.length; i++ ) {
	  		node = this$1.items[i].firstNode( true );

	  		if ( node ) {
	  			return node;
	  		}
	  	}

	  	if ( skipParent ) return null;

	  	return this.parent.findNextNode( this.owner );
	  };

	  // TODO ideally, this would be deprecated in favour of an
	  // expression-like approach
	  Fragment.prototype.getArgsList = function getArgsList () {
	  	if ( this.dirtyArgs ) {
	  		var values = {};
	  		var source = processItems( this.items, values, this.ractive._guid );
	  		var parsed = parseJSON( '[' + source + ']', values );

	  		this.argsList = parsed ?
	  			parsed.value :
	  			[ this.toString() ];

	  		this.dirtyArgs = false;
	  	}

	  	return this.argsList;
	  };

	  Fragment.prototype.rebinding = function rebinding ( next ) {
	  	this.context = next;
	  };

	  Fragment.prototype.render = function render ( target, occupants ) {
	  	if ( this.rendered ) throw new Error( 'Fragment is already rendered!' );
	  	this.rendered = true;

	  	this.items.forEach( function ( item ) { return item.render( target, occupants ); } );
	  };

	  Fragment.prototype.resetTemplate = function resetTemplate ( template ) {
	  	var wasBound = this.bound;
	  	var wasRendered = this.rendered;

	  	// TODO ensure transitions are disabled globally during reset

	  	if ( wasBound ) {
	  		if ( wasRendered ) this.unrender( true );
	  		this.unbind();
	  	}

	  	this.template = template;
	  	this.createItems();

	  	if ( wasBound ) {
	  		this.bind( this.context );

	  		if ( wasRendered ) {
	  			var parentNode = this.findParentNode();
	  			var anchor = this.parent ? this.parent.findNextNode( this.owner ) : null;

	  			if ( anchor ) {
	  				var docFrag = createDocumentFragment();
	  				this.render( docFrag );
	  				parentNode.insertBefore( docFrag, anchor );
	  			} else {
	  				this.render( parentNode );
	  			}
	  		}
	  	}
	  };

	  Fragment.prototype.resolve = function resolve ( template, callback ) {
	  	if ( !this.context && this.parent.resolve ) {
	  		return this.parent.resolve( template, callback );
	  	}

	  	var resolver = new ReferenceResolver( this, template, callback );
	  	this.resolvers.push( resolver );

	  	return resolver; // so we can e.g. force resolution
	  };

	  Fragment.prototype.shuffled = function shuffled () {
	  	this.items.forEach( function ( i ) { return i.shuffled(); } );
	  };

	  Fragment.prototype.toHtml = function toHtml () {
	  	return this.toString();
	  };

	  Fragment.prototype.toString = function toString$1$$ ( escape ) {
	  	return this.items.map( escape ? toEscapedString : toString$1 ).join( '' );
	  };

	  Fragment.prototype.unbind = function unbind$1 () {
	  	this.items.forEach( unbind );
	  	this.bound = false;

	  	return this;
	  };

	  Fragment.prototype.unrender = function unrender$1 ( shouldDestroy ) {
	  	this.items.forEach( shouldDestroy ? unrenderAndDestroy$1 : unrender );
	  	this.rendered = false;
	  };

	  Fragment.prototype.update = function update$1 () {
	  	if ( this.dirty ) {
	  		if ( !this.updating ) {
	  			this.dirty = false;
	  			this.updating = true;
	  			this.items.forEach( update );
	  			this.updating = false;
	  		} else if ( this.isRoot ) {
	  			runloop.addFragmentToRoot( this );
	  		}
	  	}
	  };

	  Fragment.prototype.valueOf = function valueOf () {
	  	if ( this.items.length === 1 ) {
	  		return this.items[0].valueOf();
	  	}

	  	if ( this.dirtyValue ) {
	  		var values = {};
	  		var source = processItems( this.items, values, this.ractive._guid );
	  		var parsed = parseJSON( source, values );

	  		this.value = parsed ?
	  			parsed.value :
	  			this.toString();

	  		this.dirtyValue = false;
	  	}

	  	return this.value;
	  };

	  // TODO should resetTemplate be asynchronous? i.e. should it be a case
	  // of outro, update template, intro? I reckon probably not, since that
	  // could be achieved with unrender-resetTemplate-render. Also, it should
	  // conceptually be similar to resetPartial, which couldn't be async

	  function Ractive$resetTemplate ( template ) {
	  	templateConfigurator.init( null, this, { template: template });

	  	var transitionsEnabled = this.transitionsEnabled;
	  	this.transitionsEnabled = false;

	  	// Is this is a component, we need to set the `shouldDestroy`
	  	// flag, otherwise it will assume by default that a parent node
	  	// will be detached, and therefore it doesn't need to bother
	  	// detaching its own nodes
	  	var component = this.component;
	  	if ( component ) component.shouldDestroy = true;
	  	this.unrender();
	  	if ( component ) component.shouldDestroy = false;

	  	// remove existing fragment and create new one
	  	this.fragment.unbind().unrender( true );

	  	this.fragment = new Fragment({
	  		template: this.template,
	  		root: this,
	  		owner: this
	  	});

	  	var docFrag = createDocumentFragment();
	  	this.fragment.bind( this.viewmodel ).render( docFrag );
	  	this.el.insertBefore( docFrag, this.anchor );

	  	this.transitionsEnabled = transitionsEnabled;
	  }

	  var reverse$1 = makeArrayMethod( 'reverse' ).path;

	  function Ractive$set ( keypath, value ) {
	  	var ractive = this;

	  	return set( ractive, build( ractive, keypath, value ) );
	  }

	  var shift$1 = makeArrayMethod( 'shift' ).path;

	  var sort$1 = makeArrayMethod( 'sort' ).path;

	  var splice$1 = makeArrayMethod( 'splice' ).path;

	  function Ractive$subtract ( keypath, d ) {
	  	return add( this, keypath, ( d === undefined ? -1 : -d ) );
	  }

	  var teardownHook$1 = new Hook( 'teardown' );

	  // Teardown. This goes through the root fragment and all its children, removing observers
	  // and generally cleaning up after itself

	  function Ractive$teardown () {
	  	if ( this.torndown ) {
	  		warnIfDebug( 'ractive.teardown() was called on a Ractive instance that was already torn down' );
	  		return Promise$1.resolve();
	  	}

	  	this.torndown = true;
	  	this.fragment.unbind();
	  	this.viewmodel.teardown();

	  	this._observers.forEach( cancel );

	  	if ( this.fragment.rendered && this.el.__ractive_instances__ ) {
	  		removeFromArray( this.el.__ractive_instances__, this );
	  	}

	  	this.shouldDestroy = true;
	  	var promise = ( this.fragment.rendered ? this.unrender() : Promise$1.resolve() );

	  	teardownHook$1.fire( this );

	  	return promise;
	  }

	  function Ractive$toggle ( keypath ) {
	  	if ( typeof keypath !== 'string' ) {
	  		throw new TypeError( badArguments );
	  	}

	  	return set( this, gather( this, keypath ).map( function ( m ) { return [ m, !m.get() ]; } ) );
	  }

	  function Ractive$toCSS() {
	  	var cssIds = [ this.cssId ].concat( this.findAllComponents().map( function ( c ) { return c.cssId; } ) );
	  	var uniqueCssIds = Object.keys(cssIds.reduce( function ( ids, id ) { return (ids[id] = true, ids); }, {}));
	  	return getCSS( uniqueCssIds );
	  }

	  function Ractive$toHTML () {
	  	return this.fragment.toString( true );
	  }

	  function Ractive$transition ( name, node, params ) {

	  	if ( node instanceof HTMLElement ) {
	  		// good to go
	  	}
	  	else if ( isObject( node ) ) {
	  		// omitted, use event node
	  		params = node;
	  	}

	  	// if we allow query selector, then it won't work
	  	// simple params like "fast"

	  	// else if ( typeof node === 'string' ) {
	  	// 	// query selector
	  	// 	node = this.find( node )
	  	// }

	  	node = node || this.event.node;

	  	if ( !node || !node._ractive ) {
	  		fatal( ("No node was supplied for transition " + name) );
	  	}

	  	params = params || {};
	  	var owner = node._ractive.proxy;
	  	var transition = new Transition({ owner: owner, parentFragment: owner.parentFragment, name: name, params: params });
	  	transition.bind();

	  	var promise = runloop.start( this, true );
	  	runloop.registerTransition( transition );
	  	runloop.end();

	  	promise.then( function () { return transition.unbind(); } );
	  	return promise;
	  }

	  function unlink$1( here ) {
	  	var promise = runloop.start();
	  	this.viewmodel.joinAll( splitKeypathI( here ), { lastLink: false } ).unlink();
	  	runloop.end();
	  	return promise;
	  }

	  var unrenderHook$1 = new Hook( 'unrender' );

	  function Ractive$unrender () {
	  	if ( !this.fragment.rendered ) {
	  		warnIfDebug( 'ractive.unrender() was called on a Ractive instance that was not rendered' );
	  		return Promise$1.resolve();
	  	}

	  	var promise = runloop.start( this, true );

	  	// If this is a component, and the component isn't marked for destruction,
	  	// don't detach nodes from the DOM unnecessarily
	  	var shouldDestroy = !this.component || this.component.shouldDestroy || this.shouldDestroy;
	  	this.fragment.unrender( shouldDestroy );

	  	removeFromArray( this.el.__ractive_instances__, this );

	  	unrenderHook$1.fire( this );

	  	runloop.end();
	  	return promise;
	  }

	  var unshift$1 = makeArrayMethod( 'unshift' ).path;

	  function Ractive$updateModel ( keypath, cascade ) {
	  	var promise = runloop.start( this, true );

	  	if ( !keypath ) {
	  		this.viewmodel.updateFromBindings( true );
	  	} else {
	  		this.viewmodel.joinAll( splitKeypathI( keypath ) ).updateFromBindings( cascade !== false );
	  	}

	  	runloop.end();

	  	return promise;
	  }

	  var proto = {
	  	add: Ractive$add,
	  	animate: Ractive$animate,
	  	detach: Ractive$detach,
	  	find: Ractive$find,
	  	findAll: Ractive$findAll,
	  	findAllComponents: Ractive$findAllComponents,
	  	findComponent: Ractive$findComponent,
	  	findContainer: Ractive$findContainer,
	  	findParent: Ractive$findParent,
	  	fire: Ractive$fire,
	  	get: Ractive$get,
	  	getNodeInfo: getNodeInfo,
	  	insert: Ractive$insert,
	  	link: link$1,
	  	merge: thisRactive$merge,
	  	observe: observe,
	  	observeList: observeList,
	  	observeOnce: observeOnce,
	  	// TODO reinstate these
	  	// observeListOnce,
	  	off: Ractive$off,
	  	on: Ractive$on,
	  	once: Ractive$once,
	  	pop: pop$1,
	  	push: push$1,
	  	render: Ractive$render,
	  	reset: Ractive$reset,
	  	resetPartial: resetPartial,
	  	resetTemplate: Ractive$resetTemplate,
	  	reverse: reverse$1,
	  	set: Ractive$set,
	  	shift: shift$1,
	  	sort: sort$1,
	  	splice: splice$1,
	  	subtract: Ractive$subtract,
	  	teardown: Ractive$teardown,
	  	toggle: Ractive$toggle,
	  	toCSS: Ractive$toCSS,
	  	toCss: Ractive$toCSS,
	  	toHTML: Ractive$toHTML,
	  	toHtml: Ractive$toHTML,
	  	transition: Ractive$transition,
	  	unlink: unlink$1,
	  	unrender: Ractive$unrender,
	  	unshift: unshift$1,
	  	update: Ractive$update,
	  	updateModel: Ractive$updateModel
	  };

	  function wrap$1 ( method, superMethod, force ) {

	  	if ( force || needsSuper( method, superMethod ) )  {

	  		return function () {

	  			var hasSuper = ( '_super' in this ), _super = this._super, result;

	  			this._super = superMethod;

	  			result = method.apply( this, arguments );

	  			if ( hasSuper ) {
	  				this._super = _super;
	  			}

	  			return result;
	  		};
	  	}

	  	else {
	  		return method;
	  	}
	  }

	  function needsSuper ( method, superMethod ) {
	  	return typeof superMethod === 'function' && /_super/.test( method );
	  }

	  function unwrap ( Child ) {
	  	var options = {};

	  	while ( Child ) {
	  		addRegistries( Child, options );
	  		addOtherOptions( Child, options );

	  		if ( Child._Parent !== Ractive ) {
	  			Child = Child._Parent;
	  		} else {
	  			Child = false;
	  		}
	  	}

	  	return options;
	  }

	  function addRegistries ( Child, options ) {
	  	registries.forEach( function ( r ) {
	  		addRegistry(
	  			r.useDefaults ? Child.prototype : Child,
	  			options, r.name );
	  	});
	  }

	  function addRegistry ( target, options, name ) {
	  	var registry, keys = Object.keys( target[ name ] );

	  	if ( !keys.length ) { return; }

	  	if ( !( registry = options[ name ] ) ) {
	  		registry = options[ name ] = {};
	  	}

	  	keys
	  		.filter( function ( key ) { return !( key in registry ); } )
	  		.forEach( function ( key ) { return registry[ key ] = target[ name ][ key ]; } );
	  }

	  function addOtherOptions ( Child, options ) {
	  	Object.keys( Child.prototype ).forEach( function ( key ) {
	  		if ( key === 'computed' ) { return; }

	  		var value = Child.prototype[ key ];

	  		if ( !( key in options ) ) {
	  			options[ key ] = value._method ? value._method : value;
	  		}

	  		// is it a wrapped function?
	  		else if ( typeof options[ key ] === 'function'
	  				&& typeof value === 'function'
	  				&& options[ key ]._method ) {

	  			var result, needsSuper = value._method;

	  			if ( needsSuper ) { value = value._method; }

	  			// rewrap bound directly to parent fn
	  			result = wrap$1( options[ key ]._method, value );

	  			if ( needsSuper ) { result._method = result; }

	  			options[ key ] = result;
	  		}
	  	});
	  }

	  function extend () {
	  	var options = [], len = arguments.length;
	  	while ( len-- ) options[ len ] = arguments[ len ];

	  	if( !options.length ) {
	  		return extendOne( this );
	  	} else {
	  		return options.reduce( extendOne, this );
	  	}
	  }

	  function extendOne ( Parent, options ) {
	  	if ( options === void 0 ) options = {};

	  	var Child, proto;

	  	// if we're extending with another Ractive instance...
	  	//
	  	//   var Human = Ractive.extend(...), Spider = Ractive.extend(...);
	  	//   var Spiderman = Human.extend( Spider );
	  	//
	  	// ...inherit prototype methods and default options as well
	  	if ( options.prototype instanceof Ractive ) {
	  		options = unwrap( options );
	  	}

	  	Child = function ( options ) {
	  		if ( !( this instanceof Child ) ) return new Child( options );

	  		construct( this, options || {} );
	  		initialise( this, options || {}, {} );
	  	};

	  	proto = create( Parent.prototype );
	  	proto.constructor = Child;

	  	// Static properties
	  	defineProperties( Child, {
	  		// alias prototype as defaults
	  		defaults: { value: proto },

	  		// extendable
	  		extend: { value: extend, writable: true, configurable: true },

	  		// Parent - for IE8, can't use Object.getPrototypeOf
	  		_Parent: { value: Parent }
	  	});

	  	// extend configuration
	  	config.extend( Parent, proto, options );

	  	dataConfigurator.extend( Parent, proto, options );

	  	if ( options.computed ) {
	  		proto.computed = extendObj( create( Parent.prototype.computed ), options.computed );
	  	}

	  	Child.prototype = proto;

	  	return Child;
	  }

	  function joinKeys () {
	  	var keys = [], len = arguments.length;
	  	while ( len-- ) keys[ len ] = arguments[ len ];

	  	return keys.map( escapeKey ).join( '.' );
	  }

	  function splitKeypath ( keypath ) {
	  	return splitKeypathI( keypath ).map( unescapeKey );
	  }

	  // Ractive.js makes liberal use of things like Array.prototype.indexOf. In
	  // older browsers, these are made available via a shim - here, we do a quick
	  // pre-flight check to make sure that either a) we're not in a shit browser,
	  // or b) we're using a Ractive-legacy.js build
	  var FUNCTION = 'function';

	  if (
	  	typeof Date.now !== FUNCTION                 ||
	  	typeof String.prototype.trim !== FUNCTION    ||
	  	typeof Object.keys !== FUNCTION              ||
	  	typeof Array.prototype.indexOf !== FUNCTION  ||
	  	typeof Array.prototype.forEach !== FUNCTION  ||
	  	typeof Array.prototype.map !== FUNCTION      ||
	  	typeof Array.prototype.filter !== FUNCTION   ||
	  	( win && typeof win.addEventListener !== FUNCTION )
	  ) {
	  	throw new Error( 'It looks like you\'re attempting to use Ractive.js in an older browser. You\'ll need to use one of the \'legacy builds\' in order to continue - see http://docs.ractivejs.org/latest/legacy-builds for more information.' );
	  }

	  function Ractive ( options ) {
	  	if ( !( this instanceof Ractive ) ) return new Ractive( options );

	  	construct( this, options || {} );
	  	initialise( this, options || {}, {} );
	  }

	  extendObj( Ractive.prototype, proto, defaults );
	  Ractive.prototype.constructor = Ractive;

	  // alias prototype as `defaults`
	  Ractive.defaults = Ractive.prototype;

	  // static properties
	  defineProperties( Ractive, {

	  	// debug flag
	  	DEBUG:          { writable: true, value: true },
	  	DEBUG_PROMISES: { writable: true, value: true },

	  	// static methods:
	  	extend:         { value: extend },
	  	escapeKey:      { value: escapeKey },
	  	getNodeInfo:    { value: staticInfo },
	  	joinKeys:       { value: joinKeys },
	  	parse:          { value: parse },
	  	splitKeypath:   { value: splitKeypath },
	  	unescapeKey:    { value: unescapeKey },
	  	getCSS:         { value: getCSS },

	  	// namespaced constructors
	  	Promise:        { value: Promise$1 },

	  	// support
	  	enhance:        { writable: true, value: false },
	  	svg:            { value: svg },
	  	magic:          { value: magicSupported },

	  	// version
	  	VERSION:        { value: '0.8.0-edge-fbaba751cc3b07d2d452766f33eebb99190dc267' },

	  	// plugins
	  	adaptors:       { writable: true, value: {} },
	  	components:     { writable: true, value: {} },
	  	decorators:     { writable: true, value: {} },
	  	easing:         { writable: true, value: easing },
	  	events:         { writable: true, value: {} },
	  	interpolators:  { writable: true, value: interpolators },
	  	partials:       { writable: true, value: {} },
	  	transitions:    { writable: true, value: {} }
	  });

	  return Ractive;

	}));
	});

	var Ractive = (ractive && typeof ractive === 'object' && 'default' in ractive ? ractive['default'] : ractive);

	const lockProperty = '_ractiveAdaptorsBackboneLock';

	function acquireLock( key ) {
		key[lockProperty] = ( key[lockProperty] || 0 ) + 1;
		return function release() {
			key[lockProperty] -= 1;
			if ( !key[lockProperty] ) {
				delete key[lockProperty];
			}
		};
	}

	function isLocked( key ) {
		return !!key[lockProperty];
	}

	const adaptor = {
		// self-init, if being used as a <script> tag
		Backbone: ( typeof window !== 'undefined' && window.Backbone ) || null,

		filter ( object ) {
			if ( !adaptor.Backbone ) {
				throw new Error( 'Could not find Backbone. You must do `adaptor.Backbone = Backbone` - see https://github.com/ractivejs/ractive-adaptors-backbone#installation for more information' );
			}
			return object instanceof adaptor.Backbone.Model || object instanceof adaptor.Backbone.Collection;
		},
		wrap ( ractive, object, keypath, prefix ) {
			if ( object instanceof adaptor.Backbone.Model ) {
				return new BackboneModelWrapper( ractive, object, keypath, prefix );
			}

			return new BackboneCollectionWrapper( ractive, object, keypath, prefix );
		}
	};

	function BackboneModelWrapper ( ractive, model, keypath, prefix ) {
		this.value = model;

		model.on( 'change', this.modelChangeHandler = function () {
			const release = acquireLock( model );
			ractive.set( prefix( model.changed ) );
			release();
		});
	}

	BackboneModelWrapper.prototype = {
		teardown () {
			this.value.off( 'change', this.modelChangeHandler );
		},
		get () {
			return this.value.toJSON();
		},
		set ( keypath, value ) {
			// Only set if the model didn't originate the change itself, and
			// only if it's an immediate child property
			if ( !isLocked( this.value ) && keypath.indexOf( '.' ) === -1 ) {
				this.value.set( keypath, value );
			}
		},
		reset ( object ) {
			// If the new object is a Backbone model, assume this one is
			// being retired. Ditto if it's not a model at all
			if ( object instanceof adaptor.Backbone.Model || !(object instanceof Object) ) {
				return false;
			}

			// Otherwise if this is a POJO, reset the model
			//Backbone 1.1.2 no longer has reset and just uses set
			this.value.set( object );
		}
	};

	function BackboneCollectionWrapper ( ractive, collection, keypath ) {
		this.value = collection;

		collection.on( 'add remove reset sort', this.changeHandler = function () {
			// TODO smart merge. It should be possible, if awkward, to trigger smart
			// updates instead of a blunderbuss .set() approach
			const release = acquireLock( collection );
			ractive.set( keypath, collection.models );
			release();
		});
	}

	BackboneCollectionWrapper.prototype = {
		teardown () {
			this.value.off( 'add remove reset sort', this.changeHandler );
		},
		get () {
			return this.value.models;
		},
		reset ( models ) {
			if ( isLocked( this.value ) ) {
				return;
			}

			// If the new object is a Backbone collection, assume this one is
			// being retired. Ditto if it's not a collection at all
			if ( models instanceof adaptor.Backbone.Collection || Object.prototype.toString.call( models ) !== '[object Array]' ) {
				return false;
			}

			// Otherwise if this is a plain array, reset the collection
			this.value.reset( models );
		}
	};

	/**
	* Scroll to element.
	*
	* @param  {Element} $target The targetted element to scroll to
	* @param  {Object}  options Animate scroll options
	* @return {Void}
	*/
	$.scrollTo = function ($target, options) {
	    // Merge options with default settings.
	    var settings = $.extend({
	        $container: $("html, body"),
	        offset: 0,
	        speed: 400
	    }, options);

	    // Scroll to $target.
	    settings.$container.animate({
	        scrollTop: $target.offset().top + settings.offset
	    }, settings.speed);
	};

	/**
	 * Scroll here.
	 *
	 * @param  {Object}  options Animate scroll options
	 * @return {Element} Current selector element
	 */
	$.fn.scrollHere = function (options) {
	    $.scrollTo(this, options);
	    return this;
	};

	/**
	 * Initialize animate scroll plugin.
	 *
	 * @param  {Object} options Animate scroll options
	 * @return {Element}        Current selector element
	 */
	$.fn.animateScroll = function (options) {
	    return this.each(function () {
	        var $el = $(this),
	            $target = $($el.attr('href')),
	            elOptions = {};

	        // Get data-offset attribute.
	        if ($.isNumeric($el.data('offset'))) {
	            elOptions.offset = parseInt($el.data('offset'));
	        }

	        // Get data-speed attribute.
	        if ($.isNumeric($el.data('speed'))) {
	            elOptions.speed = parseInt($el.data('speed'));
	        }

	        $el.on('click', function (event) {
	            event.preventDefault();
	            $.scrollTo($target, $.extend(options, elOptions));
	        });
	    });
	};

	function scrollToDecorator(node) {
	    $(node).animateScroll();

	    return {
	        teardown: function teardown() {}
	    };
	}

	function isVisibleDecorator(node) {
	    var _this = this;

	    var isVisible, toggleClasses;

	    node = $(node);

	    isVisible = function isVisible() {
	        if (_this.get('responsiveMenu')) {
	            return true;
	        }

	        if (_this.get('window').width() > 720) {
	            return true;
	        }

	        return false;
	    };

	    toggleClasses = function toggleClasses() {
	        if (isVisible()) {
	            return node.removeClass('hidden');
	        }

	        node.addClass('hidden');
	    };

	    this.observe('responsiveMenu', toggleClasses);
	    window.addEventListener('resize', toggleClasses);

	    return {
	        teardown: function teardown() {
	            window.removeEventListener('resize', toggleClasses);
	        }
	    };
	}

	function fullHeightDecorator(node) {
	    var $node = $(node),
	        $window = $(window),
	        fullHeight;

	    fullHeight = function fullHeight() {
	        if ($node.height() >= $window.height()) {
	            return;
	        }

	        $node.height($window.height());
	    };

	    fullHeight();
	    window.addEventListener('resize', fullHeight);

	    return {
	        teardown: function teardown() {
	            window.removeEventListener('resize', fullHeight);
	        }
	    };
	}

	function highlightedDecorator(node, content) {
	    var _this = this;

	    var nav = $('#main'),
	        checkHighlighted,
	        checkPos,
	        applyClasses;

	    checkPos = function checkPos(event) {
	        return node.getBoundingClientRect().top < -100;
	    };

	    checkHighlighted = function checkHighlighted() {
	        if (checkPos() || _this.get('responsiveMenu')) {
	            return true;
	        }

	        return false;
	    };

	    applyClasses = function applyClasses() {
	        if (checkHighlighted()) {
	            nav.addClass('highlighted');
	        } else {
	            nav.removeClass('highlighted');
	        }
	    };

	    window.addEventListener('scroll', applyClasses);

	    return {
	        teardown: function teardown() {
	            window.removeListener('scroll', checkPos);
	        }
	    };
	}

	function responsiveMenuDecorator(node, content) {
	    var _this = this;

	    var nav = $('#main'),
	        toggleNav;

	    toggleNav = function toggleNav() {
	        if (_this.get('window').width() > 720) {
	            _this.set('responsiveMenu', false);
	            return;
	        }
	    };

	    toggleNav();
	    window.addEventListener('resize', toggleNav);

	    return {
	        teardown: function teardown() {
	            window.removeEventListener('resize', toggleNav);
	        }
	    };
	}

	var _this = this;

	Ractive.DEBUG = false;

	var ChantronRactive = Ractive.extend({
	    data: function data() {
	        return {
	            backgroundImage: '/assets/images/m100.jpg',
	            window: $(window),
	            isActive: function isActive(path) {
	                return _this.get('path') === path;
	            },
	            isVisible: function isVisible() {
	                return _this.get('window').width() > 720;
	            },
	            responsiveMenu: false
	        };
	    },
	    partials: {
	        'content': document.getElementById('home-template').innerHTML,
	        'home': document.getElementById('home-template').innerHTML,
	        'about': document.getElementById('about-template').innerHTML,
	        'contact': document.getElementById('contact-template').innerHTML
	    },
	    adapt: [adaptor],
	    transitions: {
	        fade: fade
	    },
	    decorators: {
	        highlighted: highlightedDecorator,
	        responsiveMenu: responsiveMenuDecorator,
	        fullHeight: fullHeightDecorator,
	        isVisible: isVisibleDecorator,
	        scrollTo: scrollToDecorator
	    }
	});

	adaptor.Backbone = Backbone;
	var Chantron = Backbone.View.extend({
	    router: new Router(),
	    template: $('#chantron-template').html(),
	    el: '#chantron',
	    initialize: function initialize(models) {
	        this.navigation = models.navigation;
	        this.contactInfo = models.contactInfo;
	        this.render();
	        this.router.view = this.ractive;
	        this.$el.appendTo(document.body);
	        Backbone.history.start({ pushState: true, root: '/' });
	    },
	    events: {
	        'click .navigation-list-item-link': 'navigate'
	    },
	    render: function render() {
	        this.ractive = new ChantronRactive({
	            el: this.el, // pass the view's element to ractive
	            template: this.template, // pass the view's template to ractive
	            data: {
	                navigation: this.navigation,
	                contactInfo: this.contactInfo,
	                path: window.location.pathname
	            },
	            router: this.router
	        });
	    },
	    navigate: function navigate(event) {
	        event.preventDefault();
	        var path = event.currentTarget.getAttribute('href');
	        this.ractive.set('path', path);
	        if (this.ractive.get('responsiveMenu')) {
	            this.ractive.set('responsiveMenu', false);
	        }

	        this.router.navigate(path, { trigger: true });
	    },
	    remove: function remove() {
	        this.ractive.teardown();
	        Backbone.View.prototype.remove.call(this);
	    }
	});

	var chantron = new Chantron({
	    navigation: new Navigation({
	        links: [{
	            text: 'Home',
	            href: '/'
	        }, {
	            text: 'Contact',
	            href: '/contact'
	        }, {
	            text: 'About',
	            href: '/about'
	        }]
	    }),
	    contactInfo: new ContactInfo()
	});

	window.chantron = chantron;

}));