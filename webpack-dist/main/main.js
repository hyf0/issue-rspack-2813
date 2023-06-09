/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js ***!
  \****************************************************************************************/
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => (/* binding */ ActionTypes),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "bindActionCreators": () => (/* binding */ bindActionCreators),
/* harmony export */   "combineReducers": () => (/* binding */ combineReducers),
/* harmony export */   "compose": () => (/* binding */ compose),
/* harmony export */   "createStore": () => (/* binding */ createStore),
/* harmony export */   "legacy_createStore": () => (/* binding */ legacy_createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}




/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.21.0/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/AsapQueue.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/AsapQueue.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapQueue": () => (/* binding */ AsapQueue)
/* harmony export */ });
/* harmony import */ var _makeRequestCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeRequestCall.js */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/makeRequestCall.js");
/* eslint-disable no-restricted-globals, @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, @typescript-eslint/no-non-null-assertion */ 
class AsapQueue {
    // Use the fastest means possible to execute a task in its own turn, with
    // priority over other events including IO, animation, reflow, and redraw
    // events in browsers.
    //
    // An exception thrown by a task will permanently interrupt the processing of
    // subsequent tasks. The higher level `asap` function ensures that if an
    // exception is thrown by a task, that the task queue will continue flushing as
    // soon as possible, but if you use `rawAsap` directly, you are responsible to
    // either ensure that no exceptions are thrown from your task, or to manually
    // call `rawAsap.requestFlush` if an exception is thrown.
    enqueueTask(task) {
        const { queue: q , requestFlush  } = this;
        if (!q.length) {
            requestFlush();
            this.flushing = true;
        }
        // Equivalent to push, but avoids a function call.
        q[q.length] = task;
    }
    constructor(){
        this.queue = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        this.pendingErrors = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        // @ts-ignore
        this.flushing = false;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        this.index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        this.capacity = 1024;
        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        this.flush = ()=>{
            const { queue: q  } = this;
            while(this.index < q.length){
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(let scan = 0, newLength = q.length - this.index; scan < newLength; scan++){
                        q[scan] = q[scan + this.index];
                    }
                    q.length -= this.index;
                    this.index = 0;
                }
            }
            q.length = 0;
            this.index = 0;
            this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = (err)=>{
            this.pendingErrors.push(err);
            this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = (0,_makeRequestCall_js__WEBPACK_IMPORTED_MODULE_0__.makeRequestCall)(this.flush);
        this.requestErrorThrow = (0,_makeRequestCall_js__WEBPACK_IMPORTED_MODULE_0__.makeRequestCallFromTimer)(()=>{
            // Throw first error
            if (this.pendingErrors.length) {
                throw this.pendingErrors.shift();
            }
        });
    }
} // The message channel technique was discovered by Malte Ubl and was the
 // original foundation for this library.
 // http://www.nonblocking.io/2011/06/windownexttick.html
 // Safari 6.0.5 (at least) intermittently fails to create message ports on a
 // page's first load. Thankfully, this version of Safari supports
 // MutationObservers, so we don't need to fall back in that case.
 // function makeRequestCallFromMessageChannel(callback) {
 //     var channel = new MessageChannel();
 //     channel.port1.onmessage = callback;
 //     return function requestCall() {
 //         channel.port2.postMessage(0);
 //     };
 // }
 // For reasons explained above, we are also unable to use `setImmediate`
 // under any circumstances.
 // Even if we were, there is another bug in Internet Explorer 10.
 // It is not sufficient to assign `setImmediate` to `requestFlush` because
 // `setImmediate` must be called *by name* and therefore must be wrapped in a
 // closure.
 // Never forget.
 // function makeRequestCallFromSetImmediate(callback) {
 //     return function requestCall() {
 //         setImmediate(callback);
 //     };
 // }
 // Safari 6.0 has a problem where timers will get lost while the user is
 // scrolling. This problem does not impact ASAP because Safari 6.0 supports
 // mutation observers, so that implementation is used instead.
 // However, if we ever elect to use timers in Safari, the prevalent work-around
 // is to add a scroll event listener that calls for a flush.
 // `setTimeout` does not call the passed callback if the delay is less than
 // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
 // even then.
 // This is for `asap.js` only.
 // Its name will be periodically randomized to break any code that depends on
 // // its existence.
 // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
 // ASAP was originally a nextTick shim included in Q. This was factored out
 // into this ASAP package. It was later adapted to RSVP which made further
 // amendments. These decisions, particularly to marginalize MessageChannel and
 // to capture the MutationObserver implementation in a closure, were integrated
 // back into ASAP proper.
 // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

//# sourceMappingURL=AsapQueue.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/RawTask.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/RawTask.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawTask": () => (/* binding */ RawTask)
/* harmony export */ });
// `call`, just like a function.
class RawTask {
    call() {
        try {
            this.task && this.task();
        } catch (error) {
            this.onError(error);
        } finally{
            this.task = null;
            this.release(this);
        }
    }
    constructor(onError, release){
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
}

//# sourceMappingURL=RawTask.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/TaskFactory.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/TaskFactory.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskFactory": () => (/* binding */ TaskFactory)
/* harmony export */ });
/* harmony import */ var _RawTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RawTask.js */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/RawTask.js");

class TaskFactory {
    create(task) {
        const tasks = this.freeTasks;
        const t1 = tasks.length ? tasks.pop() : new _RawTask_js__WEBPACK_IMPORTED_MODULE_0__.RawTask(this.onError, (t)=>tasks[tasks.length] = t
        );
        t1.task = task;
        return t1;
    }
    constructor(onError){
        this.onError = onError;
        this.freeTasks = [];
    }
}

//# sourceMappingURL=TaskFactory.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/asap.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/asap.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asap": () => (/* binding */ asap)
/* harmony export */ });
/* harmony import */ var _AsapQueue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapQueue.js */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/AsapQueue.js");
/* harmony import */ var _TaskFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskFactory.js */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/TaskFactory.js");


const asapQueue = new _AsapQueue_js__WEBPACK_IMPORTED_MODULE_0__.AsapQueue();
const taskFactory = new _TaskFactory_js__WEBPACK_IMPORTED_MODULE_1__.TaskFactory(asapQueue.registerPendingError);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */ function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
}

//# sourceMappingURL=asap.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapQueue": () => (/* reexport safe */ _AsapQueue_js__WEBPACK_IMPORTED_MODULE_1__.AsapQueue),
/* harmony export */   "TaskFactory": () => (/* reexport safe */ _TaskFactory_js__WEBPACK_IMPORTED_MODULE_2__.TaskFactory),
/* harmony export */   "asap": () => (/* reexport safe */ _asap_js__WEBPACK_IMPORTED_MODULE_0__.asap)
/* harmony export */ });
/* harmony import */ var _asap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asap.js */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/asap.js");
/* harmony import */ var _AsapQueue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapQueue.js */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/AsapQueue.js");
/* harmony import */ var _TaskFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskFactory.js */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/TaskFactory.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/types.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/makeRequestCall.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/makeRequestCall.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeRequestCall": () => (/* binding */ makeRequestCall),
/* harmony export */   "makeRequestCallFromMutationObserver": () => (/* binding */ makeRequestCallFromMutationObserver),
/* harmony export */   "makeRequestCallFromTimer": () => (/* binding */ makeRequestCallFromTimer)
/* harmony export */ });
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */ const scope = typeof global !== 'undefined' ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        const timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        const intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    let toggle = 1;
    const observer = new BrowserMutationObserver(callback);
    const node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ? // reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver : // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

//# sourceMappingURL=makeRequestCall.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/types.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/types.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invariant": () => (/* binding */ invariant)
/* harmony export */ });
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ function invariant(condition, format, ...args) {
    if (isProduction()) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        let error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            let argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1 // we don't care about invariant's own frame
        ;
        throw error;
    }
}
function isProduction() {
    return typeof process !== 'undefined' && "development" === 'production';
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/@react-dnd+shallowequal@4.0.2/node_modules/@react-dnd/shallowequal/dist/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-dnd+shallowequal@4.0.2/node_modules/@react-dnd/shallowequal/dist/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shallowEqual": () => (/* binding */ shallowEqual)
/* harmony export */ });
function shallowEqual(objA, objB, compare, compareContext) {
    let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (compareResult !== void 0) {
        return !!compareResult;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(let idx = 0; idx < keysA.length; idx++){
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        const valueA = objA[key];
        const valueB = objB[key];
        compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBeginDrag": () => (/* binding */ createBeginDrag)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var _utils_js_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/js_utils.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js");
/* harmony import */ var _local_setClientOffset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local/setClientOffset.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");




const ResetCoordinatesAction = {
    type: _types_js__WEBPACK_IMPORTED_MODULE_1__.INIT_COORDS,
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};
function createBeginDrag(manager) {
    return function beginDrag(sourceIds = [], options = {
        publishSource: true
    }) {
        const { publishSource =true , clientOffset , getSourceClientOffset ,  } = options;
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        // Initialize the coordinates using the client offset
        manager.dispatch((0,_local_setClientOffset_js__WEBPACK_IMPORTED_MODULE_2__.setClientOffset)(clientOffset));
        verifyInvariants(sourceIds, monitor, registry);
        // Get the draggable source
        const sourceId = getDraggableSource(sourceIds, monitor);
        if (sourceId == null) {
            manager.dispatch(ResetCoordinatesAction);
            return;
        }
        // Get the source client offset
        let sourceClientOffset = null;
        if (clientOffset) {
            if (!getSourceClientOffset) {
                throw new Error('getSourceClientOffset must be defined');
            }
            verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
            sourceClientOffset = getSourceClientOffset(sourceId);
        }
        // Initialize the full coordinates
        manager.dispatch((0,_local_setClientOffset_js__WEBPACK_IMPORTED_MODULE_2__.setClientOffset)(clientOffset, sourceClientOffset));
        const source = registry.getSource(sourceId);
        const item = source.beginDrag(monitor, sourceId);
        // If source.beginDrag returns null, this is an indicator to cancel the drag
        if (item == null) {
            return undefined;
        }
        verifyItemIsObject(item);
        registry.pinSource(sourceId);
        const itemType = registry.getSourceType(sourceId);
        return {
            type: _types_js__WEBPACK_IMPORTED_MODULE_1__.BEGIN_DRAG,
            payload: {
                itemType,
                item,
                sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
            }
        };
    };
}
function verifyInvariants(sourceIds, monitor, registry) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
    sourceIds.forEach(function(sourceId) {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
    });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)((0,_utils_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
    let sourceId = null;
    for(let i = sourceIds.length - 1; i >= 0; i--){
        if (monitor.canDragSource(sourceIds[i])) {
            sourceId = sourceIds[i];
            break;
        }
    }
    return sourceId;
}

//# sourceMappingURL=beginDrag.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/drop.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/drop.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDrop": () => (/* binding */ createDrop)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var _utils_js_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/js_utils.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}



function createDrop(manager) {
    return function drop(options = {}) {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyInvariants(monitor);
        const targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach((targetId, index)=>{
            const dropResult = determineDropResult(targetId, index, registry, monitor);
            const action = {
                type: _types_js__WEBPACK_IMPORTED_MODULE_1__.DROP,
                payload: {
                    dropResult: _objectSpread({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function verifyInvariants(monitor) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(monitor.isDragging(), 'Cannot call drop while not dragging.');
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    const target = registry.getTarget(targetId);
    let dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') {
        dropResult = index === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
}
function verifyDropResultType(dropResult) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof dropResult === 'undefined' || (0,_utils_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
}

//# sourceMappingURL=drop.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/endDrag.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/endDrag.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEndDrag": () => (/* binding */ createEndDrag)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");


function createEndDrag(manager) {
    return function endDrag() {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyIsDragging(monitor);
        const sourceId = monitor.getSourceId();
        if (sourceId != null) {
            const source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
        }
        return {
            type: _types_js__WEBPACK_IMPORTED_MODULE_1__.END_DRAG
        };
    };
}
function verifyIsDragging(monitor) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

//# sourceMappingURL=endDrag.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/hover.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/hover.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHover": () => (/* binding */ createHover)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var _utils_matchesType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/matchesType.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/matchesType.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");



function createHover(manager) {
    return function hover(targetIdsArg, { clientOffset  } = {}) {
        verifyTargetIdsIsArray(targetIdsArg);
        const targetIds = targetIdsArg.slice(0);
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        const draggedItemType = monitor.getItemType();
        removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
        checkInvariants(targetIds, monitor, registry);
        hoverAllTargets(targetIds, monitor, registry);
        return {
            type: _types_js__WEBPACK_IMPORTED_MODULE_1__.HOVER,
            payload: {
                targetIds,
                clientOffset: clientOffset || null
            }
        };
    };
}
function verifyTargetIdsIsArray(targetIdsArg) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(monitor.isDragging(), 'Cannot call hover while not dragging.');
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!monitor.didDrop(), 'Cannot call hover after drop.');
    for(let i = 0; i < targetIds.length; i++){
        const targetId = targetIds[i];
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
        const target = registry.getTarget(targetId);
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(target, 'Expected targetIds to be registered.');
    }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
    // Remove those targetIds that don't match the targetType.  This
    // fixes shallow isOver which would only be non-shallow because of
    // non-matching targets.
    for(let i = targetIds.length - 1; i >= 0; i--){
        const targetId = targetIds[i];
        const targetType = registry.getTargetType(targetId);
        if (!(0,_utils_matchesType_js__WEBPACK_IMPORTED_MODULE_2__.matchesType)(targetType, draggedItemType)) {
            targetIds.splice(i, 1);
        }
    }
}
function hoverAllTargets(targetIds, monitor, registry) {
    // Finally call hover on all matching targets.
    targetIds.forEach(function(targetId) {
        const target = registry.getTarget(targetId);
        target.hover(monitor, targetId);
    });
}

//# sourceMappingURL=hover.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BEGIN_DRAG": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.BEGIN_DRAG),
/* harmony export */   "DROP": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.DROP),
/* harmony export */   "END_DRAG": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.END_DRAG),
/* harmony export */   "HOVER": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.HOVER),
/* harmony export */   "INIT_COORDS": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS),
/* harmony export */   "PUBLISH_DRAG_SOURCE": () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.PUBLISH_DRAG_SOURCE),
/* harmony export */   "createDragDropActions": () => (/* binding */ createDragDropActions)
/* harmony export */ });
/* harmony import */ var _beginDrag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beginDrag.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/beginDrag.js");
/* harmony import */ var _drop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drop.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/drop.js");
/* harmony import */ var _endDrag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endDrag.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/endDrag.js");
/* harmony import */ var _hover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hover.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/hover.js");
/* harmony import */ var _publishDragSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publishDragSource.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");






function createDragDropActions(manager) {
    return {
        beginDrag: (0,_beginDrag_js__WEBPACK_IMPORTED_MODULE_1__.createBeginDrag)(manager),
        publishDragSource: (0,_publishDragSource_js__WEBPACK_IMPORTED_MODULE_2__.createPublishDragSource)(manager),
        hover: (0,_hover_js__WEBPACK_IMPORTED_MODULE_3__.createHover)(manager),
        drop: (0,_drop_js__WEBPACK_IMPORTED_MODULE_4__.createDrop)(manager),
        endDrag: (0,_endDrag_js__WEBPACK_IMPORTED_MODULE_5__.createEndDrag)(manager)
    };
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/local/setClientOffset.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setClientOffset": () => (/* binding */ setClientOffset)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");

function setClientOffset(clientOffset, sourceClientOffset) {
    return {
        type: _types_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS,
        payload: {
            sourceClientOffset: sourceClientOffset || null,
            clientOffset: clientOffset || null
        }
    };
}

//# sourceMappingURL=setClientOffset.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/publishDragSource.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPublishDragSource": () => (/* binding */ createPublishDragSource)
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");

function createPublishDragSource(manager) {
    return function publishDragSource() {
        const monitor = manager.getMonitor();
        if (monitor.isDragging()) {
            return {
                type: _types_js__WEBPACK_IMPORTED_MODULE_0__.PUBLISH_DRAG_SOURCE
            };
        }
        return;
    };
}

//# sourceMappingURL=publishDragSource.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BEGIN_DRAG": () => (/* binding */ BEGIN_DRAG),
/* harmony export */   "DROP": () => (/* binding */ DROP),
/* harmony export */   "END_DRAG": () => (/* binding */ END_DRAG),
/* harmony export */   "HOVER": () => (/* binding */ HOVER),
/* harmony export */   "INIT_COORDS": () => (/* binding */ INIT_COORDS),
/* harmony export */   "PUBLISH_DRAG_SOURCE": () => (/* binding */ PUBLISH_DRAG_SOURCE)
/* harmony export */ });
const INIT_COORDS = 'dnd-core/INIT_COORDS';
const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
const HOVER = 'dnd-core/HOVER';
const DROP = 'dnd-core/DROP';
const END_DRAG = 'dnd-core/END_DRAG';

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/registry.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/registry.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_SOURCE": () => (/* binding */ ADD_SOURCE),
/* harmony export */   "ADD_TARGET": () => (/* binding */ ADD_TARGET),
/* harmony export */   "REMOVE_SOURCE": () => (/* binding */ REMOVE_SOURCE),
/* harmony export */   "REMOVE_TARGET": () => (/* binding */ REMOVE_TARGET),
/* harmony export */   "addSource": () => (/* binding */ addSource),
/* harmony export */   "addTarget": () => (/* binding */ addTarget),
/* harmony export */   "removeSource": () => (/* binding */ removeSource),
/* harmony export */   "removeTarget": () => (/* binding */ removeTarget)
/* harmony export */ });
const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
const ADD_TARGET = 'dnd-core/ADD_TARGET';
const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: ADD_SOURCE,
        payload: {
            sourceId
        }
    };
}
function addTarget(targetId) {
    return {
        type: ADD_TARGET,
        payload: {
            targetId
        }
    };
}
function removeSource(sourceId) {
    return {
        type: REMOVE_SOURCE,
        payload: {
            sourceId
        }
    };
}
function removeTarget(targetId) {
    return {
        type: REMOVE_TARGET,
        payload: {
            targetId
        }
    };
}

//# sourceMappingURL=registry.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/DragDropManagerImpl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/DragDropManagerImpl.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropManagerImpl": () => (/* binding */ DragDropManagerImpl)
/* harmony export */ });
/* harmony import */ var _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/dragDrop/index.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/index.js");

class DragDropManagerImpl {
    receiveBackend(backend) {
        this.backend = backend;
    }
    getMonitor() {
        return this.monitor;
    }
    getBackend() {
        return this.backend;
    }
    getRegistry() {
        return this.monitor.registry;
    }
    getActions() {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */ const manager = this;
        const { dispatch  } = this.store;
        function bindActionCreator(actionCreator) {
            return (...args)=>{
                const action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        const actions = (0,_actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.createDragDropActions)(this);
        return Object.keys(actions).reduce((boundActions, key)=>{
            const action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
    constructor(store, monitor){
        this.isSetUp = false;
        this.handleRefCountChange = ()=>{
            const shouldSetUp = this.store.getState().refCount > 0;
            if (this.backend) {
                if (shouldSetUp && !this.isSetUp) {
                    this.backend.setup();
                    this.isSetUp = true;
                } else if (!shouldSetUp && this.isSetUp) {
                    this.backend.teardown();
                    this.isSetUp = false;
                }
            }
        };
        this.store = store;
        this.monitor = monitor;
        store.subscribe(this.handleRefCountChange);
    }
}

//# sourceMappingURL=DragDropManagerImpl.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropMonitorImpl": () => (/* binding */ DragDropMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var _utils_coords_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/coords.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/coords.js");
/* harmony import */ var _utils_dirtiness_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dirtiness.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/dirtiness.js");
/* harmony import */ var _utils_matchesType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/matchesType.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/matchesType.js");




class DragDropMonitorImpl {
    subscribeToStateChange(listener, options = {}) {
        const { handlerIds  } = options;
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof listener === 'function', 'listener must be a function.');
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        let prevStateId = this.store.getState().stateId;
        const handleChange = ()=>{
            const state = this.store.getState();
            const currentStateId = state.stateId;
            try {
                const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0,_utils_dirtiness_js__WEBPACK_IMPORTED_MODULE_1__.areDirty)(state.dirtyHandlerIds, handlerIds);
                if (!canSkipListener) {
                    listener();
                }
            } finally{
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    }
    subscribeToOffsetChange(listener) {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof listener === 'function', 'listener must be a function.');
        let previousState = this.store.getState().dragOffset;
        const handleChange = ()=>{
            const nextState = this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    }
    canDragSource(sourceId) {
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId);
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    }
    canDropOnTarget(targetId) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const target = this.registry.getTarget(targetId);
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(target, `Expected to find a valid target. targetId=${targetId}`);
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        return (0,_utils_matchesType_js__WEBPACK_IMPORTED_MODULE_2__.matchesType)(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
    isDragging() {
        return Boolean(this.getItemType());
    }
    isDraggingSource(sourceId) {
        // undefined on initial render
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId, true);
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (!this.isDragging() || !this.isSourcePublic()) {
            return false;
        }
        const sourceType = this.registry.getSourceType(sourceId);
        const draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) {
            return false;
        }
        return source.isDragging(this, sourceId);
    }
    isOverTarget(targetId, options = {
        shallow: false
    }) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const { shallow  } = options;
        if (!this.isDragging()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        if (draggedItemType && !(0,_utils_matchesType_js__WEBPACK_IMPORTED_MODULE_2__.matchesType)(targetType, draggedItemType)) {
            return false;
        }
        const targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        const index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        } else {
            return index > -1;
        }
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType;
    }
    getItem() {
        return this.store.getState().dragOperation.item;
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId;
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds;
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult;
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop;
    }
    isSourcePublic() {
        return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset;
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset;
    }
    getSourceClientOffset() {
        return (0,_utils_coords_js__WEBPACK_IMPORTED_MODULE_3__.getSourceClientOffset)(this.store.getState().dragOffset);
    }
    getDifferenceFromInitialOffset() {
        return (0,_utils_coords_js__WEBPACK_IMPORTED_MODULE_3__.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
    }
    constructor(store, registry){
        this.store = store;
        this.registry = registry;
    }
}

//# sourceMappingURL=DragDropMonitorImpl.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandlerRegistryImpl": () => (/* binding */ HandlerRegistryImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_asap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/asap */ "./node_modules/.pnpm/@react-dnd+asap@5.0.2/node_modules/@react-dnd/asap/dist/index.js");
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var _actions_registry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/registry.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/registry.js");
/* harmony import */ var _contracts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/contracts.js");
/* harmony import */ var _interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/interfaces.js");
/* harmony import */ var _utils_getNextUniqueId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getNextUniqueId.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/getNextUniqueId.js");






function getNextHandlerId(role) {
    const id = (0,_utils_getNextUniqueId_js__WEBPACK_IMPORTED_MODULE_2__.getNextUniqueId)().toString();
    switch(role){
        case _interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE:
            return `S${id}`;
        case _interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET:
            return `T${id}`;
        default:
            throw new Error(`Unknown Handler Role: ${role}`);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch(handlerId[0]){
        case 'S':
            return _interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE;
        case 'T':
            return _interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${handlerId}`);
    }
}
function mapContainsValue(map, searchValue) {
    const entries = map.entries();
    let isDone = false;
    do {
        const { done , value: [, value] ,  } = entries.next();
        if (value === searchValue) {
            return true;
        }
        isDone = !!done;
    }while (!isDone)
    return false;
}
class HandlerRegistryImpl {
    addSource(type, source) {
        (0,_contracts_js__WEBPACK_IMPORTED_MODULE_4__.validateType)(type);
        (0,_contracts_js__WEBPACK_IMPORTED_MODULE_4__.validateSourceContract)(source);
        const sourceId = this.addHandler(_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE, type, source);
        this.store.dispatch((0,_actions_registry_js__WEBPACK_IMPORTED_MODULE_5__.addSource)(sourceId));
        return sourceId;
    }
    addTarget(type, target) {
        (0,_contracts_js__WEBPACK_IMPORTED_MODULE_4__.validateType)(type, true);
        (0,_contracts_js__WEBPACK_IMPORTED_MODULE_4__.validateTargetContract)(target);
        const targetId = this.addHandler(_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET, type, target);
        this.store.dispatch((0,_actions_registry_js__WEBPACK_IMPORTED_MODULE_5__.addTarget)(targetId));
        return targetId;
    }
    containsHandler(handler) {
        return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
    getSource(sourceId, includePinned = false) {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(this.isSourceId(sourceId), 'Expected a valid source ID.');
        const isPinned = includePinned && sourceId === this.pinnedSourceId;
        const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    }
    getTarget(targetId) {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    }
    getSourceType(sourceId) {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    }
    getTargetType(targetId) {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    }
    isSourceId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === _interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE;
    }
    isTargetId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === _interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET;
    }
    removeSource(sourceId) {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch((0,_actions_registry_js__WEBPACK_IMPORTED_MODULE_5__.removeSource)(sourceId));
        (0,_react_dnd_asap__WEBPACK_IMPORTED_MODULE_0__.asap)(()=>{
            this.dragSources.delete(sourceId);
            this.types.delete(sourceId);
        });
    }
    removeTarget(targetId) {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch((0,_actions_registry_js__WEBPACK_IMPORTED_MODULE_5__.removeTarget)(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    }
    pinSource(sourceId) {
        const source = this.getSource(sourceId);
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    }
    unpinSource() {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_1__.invariant)(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    addHandler(role, type, handler) {
        const id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === _interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.SOURCE) {
            this.dragSources.set(id, handler);
        } else if (role === _interfaces_js__WEBPACK_IMPORTED_MODULE_3__.HandlerRole.TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    }
    constructor(store){
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
        this.store = store;
    }
}

//# sourceMappingURL=HandlerRegistryImpl.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/contracts.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/contracts.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateSourceContract": () => (/* binding */ validateSourceContract),
/* harmony export */   "validateTargetContract": () => (/* binding */ validateTargetContract),
/* harmony export */   "validateType": () => (/* binding */ validateType)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");

function validateSourceContract(source) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof target.hover === 'function', 'Expected hover to be a function.');
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach((t)=>validateType(t, false)
        );
        return;
    }
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

//# sourceMappingURL=contracts.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/createDragDropManager.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/createDragDropManager.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDragDropManager": () => (/* binding */ createDragDropManager)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js");
/* harmony import */ var _classes_DragDropManagerImpl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/DragDropManagerImpl.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/DragDropManagerImpl.js");
/* harmony import */ var _classes_DragDropMonitorImpl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/DragDropMonitorImpl.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/DragDropMonitorImpl.js");
/* harmony import */ var _classes_HandlerRegistryImpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/HandlerRegistryImpl.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/classes/HandlerRegistryImpl.js");
/* harmony import */ var _reducers_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/index.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/index.js");





function createDragDropManager(backendFactory, globalContext = undefined, backendOptions = {}, debugMode = false) {
    const store = makeStoreInstance(debugMode);
    const monitor = new _classes_DragDropMonitorImpl_js__WEBPACK_IMPORTED_MODULE_0__.DragDropMonitorImpl(store, new _classes_HandlerRegistryImpl_js__WEBPACK_IMPORTED_MODULE_1__.HandlerRegistryImpl(store));
    const manager = new _classes_DragDropManagerImpl_js__WEBPACK_IMPORTED_MODULE_2__.DragDropManagerImpl(store, monitor);
    const backend = backendFactory(manager, globalContext, backendOptions);
    manager.receiveBackend(backend);
    return manager;
}
function makeStoreInstance(debugMode) {
    // TODO: if we ever make a react-native version of this,
    // we'll need to consider how to pull off dev-tooling
    const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    return (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_reducers_index_js__WEBPACK_IMPORTED_MODULE_4__.reduce, debugMode && reduxDevTools && reduxDevTools({
        name: 'dnd-core',
        instanceId: 'dnd-core'
    }));
}

//# sourceMappingURL=createDragDropManager.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/interfaces.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/interfaces.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandlerRole": () => (/* binding */ HandlerRole)
/* harmony export */ });
var HandlerRole;
(function(HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/dragDrop/index.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");
/* harmony import */ var _actions_registry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/registry.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/registry.js");
/* harmony import */ var _utils_dirtiness_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dirtiness.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/dirtiness.js");
/* harmony import */ var _utils_equality_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/equality.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/equality.js");
/* harmony import */ var _utils_js_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/js_utils.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js");





function reduce(// eslint-disable-next-line @typescript-eslint/no-unused-vars
_state = _utils_dirtiness_js__WEBPACK_IMPORTED_MODULE_0__.NONE, action) {
    switch(action.type){
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_1__.HOVER:
            break;
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_2__.ADD_SOURCE:
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_2__.ADD_TARGET:
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_2__.REMOVE_TARGET:
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_2__.REMOVE_SOURCE:
            return _utils_dirtiness_js__WEBPACK_IMPORTED_MODULE_0__.NONE;
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_1__.BEGIN_DRAG:
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_1__.PUBLISH_DRAG_SOURCE:
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_1__.END_DRAG:
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_1__.DROP:
        default:
            return _utils_dirtiness_js__WEBPACK_IMPORTED_MODULE_0__.ALL;
    }
    const { targetIds =[] , prevTargetIds =[]  } = action.payload;
    const result = (0,_utils_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.xor)(targetIds, prevTargetIds);
    const didChange = result.length > 0 || !(0,_utils_equality_js__WEBPACK_IMPORTED_MODULE_4__.areArraysEqual)(targetIds, prevTargetIds);
    if (!didChange) {
        return _utils_dirtiness_js__WEBPACK_IMPORTED_MODULE_0__.NONE;
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    const innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) {
            result.push(prevInnermostTargetId);
        }
        if (innermostTargetId) {
            result.push(innermostTargetId);
        }
    }
    return result;
}

//# sourceMappingURL=dirtyHandlerIds.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dragOffset.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dragOffset.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/dragDrop/index.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");
/* harmony import */ var _utils_equality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/equality.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/equality.js");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}


const initialState = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function reduce(state = initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.INIT_COORDS:
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.HOVER:
            if ((0,_utils_equality_js__WEBPACK_IMPORTED_MODULE_1__.areCoordsEqual)(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return _objectSpread({}, state, {
                clientOffset: payload.clientOffset
            });
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.END_DRAG:
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.DROP:
            return initialState;
        default:
            return state;
    }
}

//# sourceMappingURL=dragOffset.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dragOperation.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dragOperation.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/dragDrop/index.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/dragDrop/types.js");
/* harmony import */ var _actions_registry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/registry.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/registry.js");
/* harmony import */ var _utils_js_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/js_utils.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}



const initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function reduce(state = initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.BEGIN_DRAG:
            return _objectSpread({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.PUBLISH_DRAG_SOURCE:
            return _objectSpread({}, state, {
                isSourcePublic: true
            });
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.HOVER:
            return _objectSpread({}, state, {
                targetIds: payload.targetIds
            });
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_1__.REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return _objectSpread({}, state, {
                targetIds: (0,_utils_js_utils_js__WEBPACK_IMPORTED_MODULE_2__.without)(state.targetIds, payload.targetId)
            });
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.DROP:
            return _objectSpread({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case _actions_dragDrop_index_js__WEBPACK_IMPORTED_MODULE_0__.END_DRAG:
            return _objectSpread({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return state;
    }
}

//# sourceMappingURL=dragOperation.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _utils_js_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/js_utils.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js");
/* harmony import */ var _dirtyHandlerIds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dirtyHandlerIds.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dirtyHandlerIds.js");
/* harmony import */ var _dragOffset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragOffset.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dragOffset.js");
/* harmony import */ var _dragOperation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dragOperation.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/dragOperation.js");
/* harmony import */ var _refCount_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refCount.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/refCount.js");
/* harmony import */ var _stateId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateId.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/stateId.js");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}






function reduce(state = {}, action) {
    return {
        dirtyHandlerIds: (0,_dirtyHandlerIds_js__WEBPACK_IMPORTED_MODULE_0__.reduce)(state.dirtyHandlerIds, {
            type: action.type,
            payload: _objectSpread({}, action.payload, {
                prevTargetIds: (0,_utils_js_utils_js__WEBPACK_IMPORTED_MODULE_1__.get)(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: (0,_dragOffset_js__WEBPACK_IMPORTED_MODULE_2__.reduce)(state.dragOffset, action),
        refCount: (0,_refCount_js__WEBPACK_IMPORTED_MODULE_3__.reduce)(state.refCount, action),
        dragOperation: (0,_dragOperation_js__WEBPACK_IMPORTED_MODULE_4__.reduce)(state.dragOperation, action),
        stateId: (0,_stateId_js__WEBPACK_IMPORTED_MODULE_5__.reduce)(state.stateId)
    };
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/refCount.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/refCount.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": () => (/* binding */ reduce)
/* harmony export */ });
/* harmony import */ var _actions_registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/registry.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/actions/registry.js");

function reduce(state = 0, action) {
    switch(action.type){
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_0__.ADD_SOURCE:
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_0__.ADD_TARGET:
            return state + 1;
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_0__.REMOVE_SOURCE:
        case _actions_registry_js__WEBPACK_IMPORTED_MODULE_0__.REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}

//# sourceMappingURL=refCount.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/stateId.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/reducers/stateId.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduce": () => (/* binding */ reduce)
/* harmony export */ });
function reduce(state = 0) {
    return state + 1;
}

//# sourceMappingURL=stateId.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/coords.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/coords.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "getDifferenceFromInitialOffset": () => (/* binding */ getDifferenceFromInitialOffset),
/* harmony export */   "getSourceClientOffset": () => (/* binding */ getSourceClientOffset),
/* harmony export */   "subtract": () => (/* binding */ subtract)
/* harmony export */ });
/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */ function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */ function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */ function getSourceClientOffset(state) {
    const { clientOffset , initialClientOffset , initialSourceClientOffset  } = state;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */ function getDifferenceFromInitialOffset(state) {
    const { clientOffset , initialClientOffset  } = state;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
}

//# sourceMappingURL=coords.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/dirtiness.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/dirtiness.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL": () => (/* binding */ ALL),
/* harmony export */   "NONE": () => (/* binding */ NONE),
/* harmony export */   "areDirty": () => (/* binding */ areDirty)
/* harmony export */ });
/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_utils.js */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js");

const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */ function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === NONE) {
        return false;
    }
    if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    const commonIds = (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_0__.intersection)(handlerIds, dirtyIds);
    return commonIds.length > 0;
}

//# sourceMappingURL=dirtiness.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/equality.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/equality.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areArraysEqual": () => (/* binding */ areArraysEqual),
/* harmony export */   "areCoordsEqual": () => (/* binding */ areCoordsEqual),
/* harmony export */   "strictEquality": () => (/* binding */ strictEquality)
/* harmony export */ });
const strictEquality = (a, b)=>a === b
;
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */ function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    } else if (!offsetA || !offsetB) {
        return false;
    } else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */ function areArraysEqual(a, b, isEqual = strictEquality) {
    if (a.length !== b.length) {
        return false;
    }
    for(let i = 0; i < a.length; ++i){
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=equality.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/getNextUniqueId.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/getNextUniqueId.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextUniqueId": () => (/* binding */ getNextUniqueId)
/* harmony export */ });
let nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}

//# sourceMappingURL=getNextUniqueId.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/js_utils.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "intersection": () => (/* binding */ intersection),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "without": () => (/* binding */ without),
/* harmony export */   "xor": () => (/* binding */ xor)
/* harmony export */ });
// cheap lodash replacements
/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */ function get(obj, path, defaultValue) {
    return path.split('.').reduce((a, c)=>a && a[c] ? a[c] : defaultValue || null
    , obj);
}
/**
 * drop-in replacement for _.without
 */ function without(items, item) {
    return items.filter((i)=>i !== item
    );
}
/**
 * drop-in replacement for _.isString
 * @param input
 */ function isString(input) {
    return typeof input === 'string';
}
/**
 * drop-in replacement for _.isString
 * @param input
 */ function isObject(input) {
    return typeof input === 'object';
}
/**
 * replacement for _.xor
 * @param itemsA
 * @param itemsB
 */ function xor(itemsA, itemsB) {
    const map = new Map();
    const insertItem = (item)=>{
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    map.forEach((count, key)=>{
        if (count === 1) {
            result.push(key);
        }
    });
    return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */ function intersection(itemsA, itemsB) {
    return itemsA.filter((t)=>itemsB.indexOf(t) > -1
    );
}

//# sourceMappingURL=js_utils.js.map

/***/ }),

/***/ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/matchesType.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/utils/matchesType.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchesType": () => (/* binding */ matchesType)
/* harmony export */ });
function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType) ? targetType.some((t)=>t === draggedItemType
    ) : targetType === draggedItemType;
}

//# sourceMappingURL=matchesType.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DndContext.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DndContext.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndContext": () => (/* binding */ DndContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

/**
 * Create the React Context
 */ const DndContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    dragDropManager: undefined
});

//# sourceMappingURL=DndContext.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DndProvider.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DndProvider.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndProvider": () => (/* binding */ DndProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var dnd_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dnd-core */ "./node_modules/.pnpm/dnd-core@16.0.1/node_modules/dnd-core/dist/createDragDropManager.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _DndContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DndContext.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DndContext.js");
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}




let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function DndProvider(_param) {
    var { children  } = _param, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    const [manager, isGlobalInstance] = getDndContextValue(props) // memoized from props
    ;
    /**
		 * If the global context was used to store the DND context
		 * then where theres no more references to it we should
		 * clean it up to avoid memory leaks
		 */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isGlobalInstance) {
            const context = getGlobalContext();
            ++refCount;
            return ()=>{
                if (--refCount === 0) {
                    context[INSTANCE_SYM] = null;
                }
            };
        }
        return;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DndContext_js__WEBPACK_IMPORTED_MODULE_2__.DndContext.Provider, {
        value: manager,
        children: children
    });
});
/**
 * A React component that provides the React-DnD context
 */ 
function getDndContextValue(props) {
    if ('manager' in props) {
        const manager = {
            dragDropManager: props.manager
        };
        return [
            manager,
            false
        ];
    }
    const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
    const isGlobalInstance = !props.context;
    return [
        manager,
        isGlobalInstance
    ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
    const ctx = context;
    if (!ctx[INSTANCE_SYM]) {
        ctx[INSTANCE_SYM] = {
            dragDropManager: (0,dnd_core__WEBPACK_IMPORTED_MODULE_3__.createDragDropManager)(backend, context, options, debugMode)
        };
    }
    return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
    return typeof global !== 'undefined' ? global : window;
}

//# sourceMappingURL=DndProvider.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DragPreviewImage.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DragPreviewImage.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragPreviewImage": () => (/* binding */ DragPreviewImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

/**
 * A utility for rendering a drag preview image
 */ const DragPreviewImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function DragPreviewImage({ connect , src  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (typeof Image === 'undefined') return;
        let connected = false;
        const img = new Image();
        img.src = src;
        img.onload = ()=>{
            connect(img);
            connected = true;
        };
        return ()=>{
            if (connected) {
                connect(null);
            }
        };
    });
    return null;
});

//# sourceMappingURL=DragPreviewImage.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndContext": () => (/* reexport safe */ _DndContext_js__WEBPACK_IMPORTED_MODULE_0__.DndContext),
/* harmony export */   "DndProvider": () => (/* reexport safe */ _DndProvider_js__WEBPACK_IMPORTED_MODULE_1__.DndProvider),
/* harmony export */   "DragPreviewImage": () => (/* reexport safe */ _DragPreviewImage_js__WEBPACK_IMPORTED_MODULE_2__.DragPreviewImage)
/* harmony export */ });
/* harmony import */ var _DndContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DndContext.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DndContext.js");
/* harmony import */ var _DndProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DndProvider.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DndProvider.js");
/* harmony import */ var _DragPreviewImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DragPreviewImage.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DragPreviewImage.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrag": () => (/* reexport safe */ _useDrag_index_js__WEBPACK_IMPORTED_MODULE_0__.useDrag),
/* harmony export */   "useDragDropManager": () => (/* reexport safe */ _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager),
/* harmony export */   "useDragLayer": () => (/* reexport safe */ _useDragLayer_js__WEBPACK_IMPORTED_MODULE_2__.useDragLayer),
/* harmony export */   "useDrop": () => (/* reexport safe */ _useDrop_index_js__WEBPACK_IMPORTED_MODULE_3__.useDrop)
/* harmony export */ });
/* harmony import */ var _useDrag_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDrag/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/index.js");
/* harmony import */ var _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDragDropManager.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js");
/* harmony import */ var _useDragLayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDragLayer.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragLayer.js");
/* harmony import */ var _useDrop_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDrop/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/index.js");






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollectedProps.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollectedProps.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCollectedProps": () => (/* binding */ useCollectedProps)
/* harmony export */ });
/* harmony import */ var _useMonitorOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMonitorOutput.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useMonitorOutput.js");

function useCollectedProps(collector, monitor, connector) {
    return (0,_useMonitorOutput_js__WEBPACK_IMPORTED_MODULE_0__.useMonitorOutput)(monitor, collector || (()=>({})
    ), ()=>connector.reconnect()
    );
}

//# sourceMappingURL=useCollectedProps.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollector.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollector.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCollector": () => (/* binding */ useCollector)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/.pnpm/fast-deep-equal@3.1.3/node_modules/fast-deep-equal/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js");



/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */ function useCollector(monitor, collect, onUpdate) {
    const [collected, setCollected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>collect(monitor)
    );
    const updateCollected = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const nextValue = collect(monitor);
        // This needs to be a deep-equality check because some monitor-collected values
        // include XYCoord objects that may be equivalent, but do not have instance equality.
        if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__(collected, nextValue)) {
            setCollected(nextValue);
            if (onUpdate) {
                onUpdate();
            }
        }
    }, [
        collected,
        monitor,
        onUpdate
    ]);
    // update the collected properties after react renders.
    // Note that the "Dustbin Stress Test" fails if this is not
    // done when the component updates
    (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(updateCollected);
    return [
        collected,
        updateCollected
    ];
}

//# sourceMappingURL=useCollector.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragSourceImpl": () => (/* binding */ DragSourceImpl)
/* harmony export */ });
class DragSourceImpl {
    beginDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        let result = null;
        if (typeof spec.item === 'object') {
            result = spec.item;
        } else if (typeof spec.item === 'function') {
            result = spec.item(monitor);
        } else {
            result = {};
        }
        return result !== null && result !== void 0 ? result : null;
    }
    canDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (typeof spec.canDrag === 'boolean') {
            return spec.canDrag;
        } else if (typeof spec.canDrag === 'function') {
            return spec.canDrag(monitor);
        } else {
            return true;
        }
    }
    isDragging(globalMonitor, target) {
        const spec = this.spec;
        const monitor = this.monitor;
        const { isDragging  } = spec;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
    }
    endDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        const connector = this.connector;
        const { end  } = spec;
        if (end) {
            end(monitor.getItem(), monitor);
        }
        connector.reconnect();
    }
    constructor(spec, monitor, connector){
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
}

//# sourceMappingURL=DragSourceImpl.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/connectors.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/connectors.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConnectDragPreview": () => (/* binding */ useConnectDragPreview),
/* harmony export */   "useConnectDragSource": () => (/* binding */ useConnectDragSource)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function useConnectDragSource(connector) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>connector.hooks.dragSource()
    , [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>connector.hooks.dragPreview()
    , [
        connector
    ]);
}

//# sourceMappingURL=connectors.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrag": () => (/* reexport safe */ _useDrag_js__WEBPACK_IMPORTED_MODULE_0__.useDrag)
/* harmony export */ });
/* harmony import */ var _useDrag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDrag.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrag": () => (/* binding */ useDrag)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var _useCollectedProps_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useCollectedProps.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollectedProps.js");
/* harmony import */ var _useOptionalFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useOptionalFactory.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useOptionalFactory.js");
/* harmony import */ var _connectors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connectors.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/connectors.js");
/* harmony import */ var _useDragSourceConnector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDragSourceConnector.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js");
/* harmony import */ var _useDragSourceMonitor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDragSourceMonitor.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js");
/* harmony import */ var _useRegisteredDragSource_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useRegisteredDragSource.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js");







/**
 * useDragSource hook
 * @param sourceSpec The drag source specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ function useDrag(specArg, deps) {
    const spec = (0,_useOptionalFactory_js__WEBPACK_IMPORTED_MODULE_1__.useOptionalFactory)(specArg, deps);
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
    const monitor = (0,_useDragSourceMonitor_js__WEBPACK_IMPORTED_MODULE_2__.useDragSourceMonitor)();
    const connector = (0,_useDragSourceConnector_js__WEBPACK_IMPORTED_MODULE_3__.useDragSourceConnector)(spec.options, spec.previewOptions);
    (0,_useRegisteredDragSource_js__WEBPACK_IMPORTED_MODULE_4__.useRegisteredDragSource)(spec, monitor, connector);
    return [
        (0,_useCollectedProps_js__WEBPACK_IMPORTED_MODULE_5__.useCollectedProps)(spec.collect, monitor, connector),
        (0,_connectors_js__WEBPACK_IMPORTED_MODULE_6__.useConnectDragSource)(connector),
        (0,_connectors_js__WEBPACK_IMPORTED_MODULE_6__.useConnectDragPreview)(connector), 
    ];
}

//# sourceMappingURL=useDrag.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDragSource": () => (/* binding */ useDragSource)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _DragSourceImpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragSourceImpl.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js");


function useDragSource(spec, monitor, connector) {
    const handler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _DragSourceImpl_js__WEBPACK_IMPORTED_MODULE_1__.DragSourceImpl(spec, monitor, connector)
    , [
        monitor,
        connector
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        handler.spec = spec;
    }, [
        spec
    ]);
    return handler;
}

//# sourceMappingURL=useDragSource.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDragSourceConnector": () => (/* binding */ useDragSourceConnector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _internals_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internals/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/SourceConnector.js");
/* harmony import */ var _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useDragDropManager.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js");
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useIsomorphicLayoutEffect.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js");




function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
    const manager = (0,_useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager)();
    const connector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _internals_index_js__WEBPACK_IMPORTED_MODULE_2__.SourceConnector(manager.getBackend())
    , [
        manager
    ]);
    (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(()=>{
        connector.dragSourceOptions = dragSourceOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragSource()
        ;
    }, [
        connector,
        dragSourceOptions
    ]);
    (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(()=>{
        connector.dragPreviewOptions = dragPreviewOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragPreview()
        ;
    }, [
        connector,
        dragPreviewOptions
    ]);
    return connector;
}

//# sourceMappingURL=useDragSourceConnector.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDragSourceMonitor": () => (/* binding */ useDragSourceMonitor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _internals_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internals/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js");
/* harmony import */ var _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useDragDropManager.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js");



function useDragSourceMonitor() {
    const manager = (0,_useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _internals_index_js__WEBPACK_IMPORTED_MODULE_2__.DragSourceMonitorImpl(manager)
    , [
        manager
    ]);
}

//# sourceMappingURL=useDragSourceMonitor.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDragType": () => (/* binding */ useDragType)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");


function useDragType(spec) {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const result = spec.type;
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(result != null, 'spec.type must be defined');
        return result;
    }, [
        spec
    ]);
}

//# sourceMappingURL=useDragType.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRegisteredDragSource": () => (/* binding */ useRegisteredDragSource)
/* harmony export */ });
/* harmony import */ var _internals_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internals/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/registration.js");
/* harmony import */ var _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useDragDropManager.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js");
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useIsomorphicLayoutEffect.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useDragSource_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDragSource.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js");
/* harmony import */ var _useDragType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDragType.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js");





function useRegisteredDragSource(spec, monitor, connector) {
    const manager = (0,_useDragDropManager_js__WEBPACK_IMPORTED_MODULE_0__.useDragDropManager)();
    const handler = (0,_useDragSource_js__WEBPACK_IMPORTED_MODULE_1__.useDragSource)(spec, monitor, connector);
    const itemType = (0,_useDragType_js__WEBPACK_IMPORTED_MODULE_2__.useDragType)(spec);
    (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function registerDragSource() {
        if (itemType != null) {
            const [handlerId, unregister] = (0,_internals_index_js__WEBPACK_IMPORTED_MODULE_4__.registerSource)(itemType, handler, manager);
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
        }
        return;
    }, [
        manager,
        monitor,
        connector,
        handler,
        itemType
    ]);
}

//# sourceMappingURL=useRegisteredDragSource.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDragDropManager": () => (/* binding */ useDragDropManager)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/DndContext.js");



/**
 * A hook to retrieve the DragDropManager from Context
 */ function useDragDropManager() {
    const { dragDropManager  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_core_index_js__WEBPACK_IMPORTED_MODULE_2__.DndContext);
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(dragDropManager != null, 'Expected drag drop context');
    return dragDropManager;
}

//# sourceMappingURL=useDragDropManager.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragLayer.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragLayer.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDragLayer": () => (/* binding */ useDragLayer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _useCollector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCollector.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollector.js");
/* harmony import */ var _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDragDropManager.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js");



/**
 * useDragLayer Hook
 * @param collector The property collector
 */ function useDragLayer(collect) {
    const dragDropManager = (0,_useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager)();
    const monitor = dragDropManager.getMonitor();
    const [collected, updateCollected] = (0,_useCollector_js__WEBPACK_IMPORTED_MODULE_2__.useCollector)(monitor, collect);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>monitor.subscribeToOffsetChange(updateCollected)
    );
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>monitor.subscribeToStateChange(updateCollected)
    );
    return collected;
}

//# sourceMappingURL=useDragLayer.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropTargetImpl": () => (/* binding */ DropTargetImpl)
/* harmony export */ });
class DropTargetImpl {
    canDrop() {
        const spec = this.spec;
        const monitor = this.monitor;
        return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
    hover() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.hover) {
            spec.hover(monitor.getItem(), monitor);
        }
    }
    drop() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.drop) {
            return spec.drop(monitor.getItem(), monitor);
        }
        return;
    }
    constructor(spec, monitor){
        this.spec = spec;
        this.monitor = monitor;
    }
}

//# sourceMappingURL=DropTargetImpl.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/connectors.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/connectors.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConnectDropTarget": () => (/* binding */ useConnectDropTarget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function useConnectDropTarget(connector) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>connector.hooks.dropTarget()
    , [
        connector
    ]);
}

//# sourceMappingURL=connectors.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrop": () => (/* reexport safe */ _useDrop_js__WEBPACK_IMPORTED_MODULE_0__.useDrop)
/* harmony export */ });
/* harmony import */ var _useDrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDrop.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAccept": () => (/* binding */ useAccept)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");


/**
 * Internal utility hook to get an array-version of spec.accept.
 * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
 * @param spec
 */ function useAccept(spec) {
    const { accept  } = spec;
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(spec.accept != null, 'accept must be defined');
        return Array.isArray(accept) ? accept : [
            accept
        ];
    }, [
        accept
    ]);
}

//# sourceMappingURL=useAccept.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDrop": () => (/* binding */ useDrop)
/* harmony export */ });
/* harmony import */ var _useCollectedProps_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useCollectedProps.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollectedProps.js");
/* harmony import */ var _useOptionalFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useOptionalFactory.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useOptionalFactory.js");
/* harmony import */ var _connectors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connectors.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/connectors.js");
/* harmony import */ var _useDropTargetConnector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDropTargetConnector.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js");
/* harmony import */ var _useDropTargetMonitor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDropTargetMonitor.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js");
/* harmony import */ var _useRegisteredDropTarget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useRegisteredDropTarget.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js");






/**
 * useDropTarget Hook
 * @param spec The drop target specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ function useDrop(specArg, deps) {
    const spec = (0,_useOptionalFactory_js__WEBPACK_IMPORTED_MODULE_0__.useOptionalFactory)(specArg, deps);
    const monitor = (0,_useDropTargetMonitor_js__WEBPACK_IMPORTED_MODULE_1__.useDropTargetMonitor)();
    const connector = (0,_useDropTargetConnector_js__WEBPACK_IMPORTED_MODULE_2__.useDropTargetConnector)(spec.options);
    (0,_useRegisteredDropTarget_js__WEBPACK_IMPORTED_MODULE_3__.useRegisteredDropTarget)(spec, monitor, connector);
    return [
        (0,_useCollectedProps_js__WEBPACK_IMPORTED_MODULE_4__.useCollectedProps)(spec.collect, monitor, connector),
        (0,_connectors_js__WEBPACK_IMPORTED_MODULE_5__.useConnectDropTarget)(connector), 
    ];
}

//# sourceMappingURL=useDrop.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDropTarget": () => (/* binding */ useDropTarget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _DropTargetImpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropTargetImpl.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js");


function useDropTarget(spec, monitor) {
    const dropTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _DropTargetImpl_js__WEBPACK_IMPORTED_MODULE_1__.DropTargetImpl(spec, monitor)
    , [
        monitor
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        dropTarget.spec = spec;
    }, [
        spec
    ]);
    return dropTarget;
}

//# sourceMappingURL=useDropTarget.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDropTargetConnector": () => (/* binding */ useDropTargetConnector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _internals_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internals/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/TargetConnector.js");
/* harmony import */ var _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useDragDropManager.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js");
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useIsomorphicLayoutEffect.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js");




function useDropTargetConnector(options) {
    const manager = (0,_useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager)();
    const connector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _internals_index_js__WEBPACK_IMPORTED_MODULE_2__.TargetConnector(manager.getBackend())
    , [
        manager
    ]);
    (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(()=>{
        connector.dropTargetOptions = options || null;
        connector.reconnect();
        return ()=>connector.disconnectDropTarget()
        ;
    }, [
        options
    ]);
    return connector;
}

//# sourceMappingURL=useDropTargetConnector.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDropTargetMonitor": () => (/* binding */ useDropTargetMonitor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _internals_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internals/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js");
/* harmony import */ var _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useDragDropManager.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js");



function useDropTargetMonitor() {
    const manager = (0,_useDragDropManager_js__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new _internals_index_js__WEBPACK_IMPORTED_MODULE_2__.DropTargetMonitorImpl(manager)
    , [
        manager
    ]);
}

//# sourceMappingURL=useDropTargetMonitor.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRegisteredDropTarget": () => (/* binding */ useRegisteredDropTarget)
/* harmony export */ });
/* harmony import */ var _internals_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../internals/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/registration.js");
/* harmony import */ var _useDragDropManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useDragDropManager.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDragDropManager.js");
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useIsomorphicLayoutEffect.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js");
/* harmony import */ var _useAccept_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAccept.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js");
/* harmony import */ var _useDropTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useDropTarget.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js");





function useRegisteredDropTarget(spec, monitor, connector) {
    const manager = (0,_useDragDropManager_js__WEBPACK_IMPORTED_MODULE_0__.useDragDropManager)();
    const dropTarget = (0,_useDropTarget_js__WEBPACK_IMPORTED_MODULE_1__.useDropTarget)(spec, monitor);
    const accept = (0,_useAccept_js__WEBPACK_IMPORTED_MODULE_2__.useAccept)(spec);
    (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function registerDropTarget() {
        const [handlerId, unregister] = (0,_internals_index_js__WEBPACK_IMPORTED_MODULE_4__.registerTarget)(accept, dropTarget, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        return unregister;
    }, [
        manager,
        monitor,
        dropTarget,
        connector,
        accept.map((a)=>a.toString()
        ).join('|'), 
    ]);
}

//# sourceMappingURL=useRegisteredDropTarget.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsomorphicLayoutEffect": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

// suppress the useLayoutEffect warning on server side.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

//# sourceMappingURL=useIsomorphicLayoutEffect.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useMonitorOutput.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useMonitorOutput.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMonitorOutput": () => (/* binding */ useMonitorOutput)
/* harmony export */ });
/* harmony import */ var _useCollector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCollector.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useCollector.js");
/* harmony import */ var _useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js");


function useMonitorOutput(monitor, collect, onCollect) {
    const [collected, updateCollected] = (0,_useCollector_js__WEBPACK_IMPORTED_MODULE_0__.useCollector)(monitor, collect, onCollect);
    (0,_useIsomorphicLayoutEffect_js__WEBPACK_IMPORTED_MODULE_1__.useIsomorphicLayoutEffect)(function subscribeToMonitorStateChange() {
        const handlerId = monitor.getHandlerId();
        if (handlerId == null) {
            return;
        }
        return monitor.subscribeToStateChange(updateCollected, {
            handlerIds: [
                handlerId
            ]
        });
    }, [
        monitor,
        updateCollected
    ]);
    return collected;
}

//# sourceMappingURL=useMonitorOutput.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useOptionalFactory.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/useOptionalFactory.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOptionalFactory": () => (/* binding */ useOptionalFactory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function useOptionalFactory(arg, deps) {
    const memoDeps = [
        ...deps || []
    ];
    if (deps == null && typeof arg !== 'function') {
        memoDeps.push(arg);
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return typeof arg === 'function' ? arg() : arg;
    }, memoDeps);
}

//# sourceMappingURL=useOptionalFactory.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndContext": () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.DndContext),
/* harmony export */   "DndProvider": () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.DndProvider),
/* harmony export */   "DragPreviewImage": () => (/* reexport safe */ _core_index_js__WEBPACK_IMPORTED_MODULE_0__.DragPreviewImage),
/* harmony export */   "useDrag": () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useDrag),
/* harmony export */   "useDragDropManager": () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useDragDropManager),
/* harmony export */   "useDragLayer": () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useDragLayer),
/* harmony export */   "useDrop": () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useDrop)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/core/index.js");
/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/index.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/hooks/index.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragSourceMonitorImpl": () => (/* binding */ DragSourceMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");

let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
    receiveHandlerId(sourceId) {
        this.sourceId = sourceId;
    }
    getHandlerId() {
        return this.sourceId;
    }
    canDrag() {
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        } finally{
            isCallingCanDrag = false;
        }
    }
    isDragging() {
        if (!this.sourceId) {
            return false;
        }
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        } finally{
            isCallingIsDragging = false;
        }
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    isDraggingSource(sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    }
    isOverTarget(targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds();
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic();
    }
    getSourceId() {
        return this.internalMonitor.getSourceId();
    }
    subscribeToOffsetChange(listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    }
    canDragSource(sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    }
    canDropOnTarget(targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.sourceId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

//# sourceMappingURL=DragSourceMonitorImpl.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropTargetMonitorImpl": () => (/* binding */ DropTargetMonitorImpl)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");

let isCallingCanDrop = false;
class DropTargetMonitorImpl {
    receiveHandlerId(targetId) {
        this.targetId = targetId;
    }
    getHandlerId() {
        return this.targetId;
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    canDrop() {
        // Cut out early if the target id has not been set. This should prevent errors
        // where the user has an older version of dnd-core like in
        // https://github.com/react-dnd/react-dnd/issues/1310
        if (!this.targetId) {
            return false;
        }
        (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        } finally{
            isCallingCanDrop = false;
        }
    }
    isOver(options) {
        if (!this.targetId) {
            return false;
        }
        return this.internalMonitor.isOverTarget(this.targetId, options);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.targetId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

//# sourceMappingURL=DropTargetMonitorImpl.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/SourceConnector.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/SourceConnector.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceConnector": () => (/* binding */ SourceConnector)
/* harmony export */ });
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/shallowequal */ "./node_modules/.pnpm/@react-dnd+shallowequal@4.0.2/node_modules/@react-dnd/shallowequal/dist/index.js");
/* harmony import */ var _isRef_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isRef.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/isRef.js");
/* harmony import */ var _wrapConnectorHooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapConnectorHooks.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js");



class SourceConnector {
    receiveHandlerId(newHandlerId) {
        if (this.handlerId === newHandlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get connectTarget() {
        return this.dragSource;
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal;
    }
    set dragSourceOptions(options) {
        this.dragSourceOptionsInternal = options;
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal;
    }
    set dragPreviewOptions(options) {
        this.dragPreviewOptionsInternal = options;
    }
    reconnect() {
        const didChange = this.reconnectDragSource();
        this.reconnectDragPreview(didChange);
    }
    reconnectDragSource() {
        const dragSource = this.dragSource;
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        if (didChange) {
            this.disconnectDragSource();
        }
        if (!this.handlerId) {
            return didChange;
        }
        if (!dragSource) {
            this.lastConnectedDragSource = dragSource;
            return didChange;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragSource = dragSource;
            this.lastConnectedDragSourceOptions = this.dragSourceOptions;
            this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
        }
        return didChange;
    }
    reconnectDragPreview(forceDidChange = false) {
        const dragPreview = this.dragPreview;
        // if nothing has changed then don't resubscribe
        const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (didChange) {
            this.disconnectDragPreview();
        }
        if (!this.handlerId) {
            return;
        }
        if (!dragPreview) {
            this.lastConnectedDragPreview = dragPreview;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragPreview = dragPreview;
            this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
            this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
        }
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource;
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview;
    }
    didDragSourceOptionsChange() {
        return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__.shallowEqual)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
        return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__.shallowEqual)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
    disconnectDragSource() {
        if (this.dragSourceUnsubscribe) {
            this.dragSourceUnsubscribe();
            this.dragSourceUnsubscribe = undefined;
        }
    }
    disconnectDragPreview() {
        if (this.dragPreviewUnsubscribe) {
            this.dragPreviewUnsubscribe();
            this.dragPreviewUnsubscribe = undefined;
            this.dragPreviewNode = null;
            this.dragPreviewRef = null;
        }
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
    clearDragSource() {
        this.dragSourceNode = null;
        this.dragSourceRef = null;
    }
    clearDragPreview() {
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
    }
    constructor(backend){
        this.hooks = (0,_wrapConnectorHooks_js__WEBPACK_IMPORTED_MODULE_1__.wrapConnectorHooks)({
            dragSource: (node, options)=>{
                this.clearDragSource();
                this.dragSourceOptions = options || null;
                if ((0,_isRef_js__WEBPACK_IMPORTED_MODULE_2__.isRef)(node)) {
                    this.dragSourceRef = node;
                } else {
                    this.dragSourceNode = node;
                }
                this.reconnectDragSource();
            },
            dragPreview: (node, options)=>{
                this.clearDragPreview();
                this.dragPreviewOptions = options || null;
                if ((0,_isRef_js__WEBPACK_IMPORTED_MODULE_2__.isRef)(node)) {
                    this.dragPreviewRef = node;
                } else {
                    this.dragPreviewNode = node;
                }
                this.reconnectDragPreview();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dragSourceRef = null;
        this.dragSourceOptionsInternal = null;
        // The drag preview may either be attached via ref or connect function
        this.dragPreviewRef = null;
        this.dragPreviewOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDragSource = null;
        this.lastConnectedDragSourceOptions = null;
        this.lastConnectedDragPreview = null;
        this.lastConnectedDragPreviewOptions = null;
        this.backend = backend;
    }
}

//# sourceMappingURL=SourceConnector.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/TargetConnector.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/TargetConnector.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TargetConnector": () => (/* binding */ TargetConnector)
/* harmony export */ });
/* harmony import */ var _react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/shallowequal */ "./node_modules/.pnpm/@react-dnd+shallowequal@4.0.2/node_modules/@react-dnd/shallowequal/dist/index.js");
/* harmony import */ var _isRef_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isRef.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/isRef.js");
/* harmony import */ var _wrapConnectorHooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapConnectorHooks.js */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js");



class TargetConnector {
    get connectTarget() {
        return this.dropTarget;
    }
    reconnect() {
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        if (didChange) {
            this.disconnectDropTarget();
        }
        const dropTarget = this.dropTarget;
        if (!this.handlerId) {
            return;
        }
        if (!dropTarget) {
            this.lastConnectedDropTarget = dropTarget;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDropTarget = dropTarget;
            this.lastConnectedDropTargetOptions = this.dropTargetOptions;
            this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
        }
    }
    receiveHandlerId(newHandlerId) {
        if (newHandlerId === this.handlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal;
    }
    set dropTargetOptions(options) {
        this.dropTargetOptionsInternal = options;
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget;
    }
    didOptionsChange() {
        return !(0,_react_dnd_shallowequal__WEBPACK_IMPORTED_MODULE_0__.shallowEqual)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
    disconnectDropTarget() {
        if (this.unsubscribeDropTarget) {
            this.unsubscribeDropTarget();
            this.unsubscribeDropTarget = undefined;
        }
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
    clearDropTarget() {
        this.dropTargetRef = null;
        this.dropTargetNode = null;
    }
    constructor(backend){
        this.hooks = (0,_wrapConnectorHooks_js__WEBPACK_IMPORTED_MODULE_1__.wrapConnectorHooks)({
            dropTarget: (node, options)=>{
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if ((0,_isRef_js__WEBPACK_IMPORTED_MODULE_2__.isRef)(node)) {
                    this.dropTargetRef = node;
                } else {
                    this.dropTargetNode = node;
                }
                this.reconnect();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dropTargetRef = null;
        this.dropTargetOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDropTarget = null;
        this.lastConnectedDropTargetOptions = null;
        this.backend = backend;
    }
}

//# sourceMappingURL=TargetConnector.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/isRef.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/isRef.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRef": () => (/* binding */ isRef)
/* harmony export */ });
function isRef(obj) {
    return(// eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current'));
}

//# sourceMappingURL=isRef.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/registration.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/registration.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerSource": () => (/* binding */ registerSource),
/* harmony export */   "registerTarget": () => (/* binding */ registerTarget)
/* harmony export */ });
function registerTarget(type, target, manager) {
    const registry = manager.getRegistry();
    const targetId = registry.addTarget(type, target);
    return [
        targetId,
        ()=>registry.removeTarget(targetId)
    ];
}
function registerSource(type, source, manager) {
    const registry = manager.getRegistry();
    const sourceId = registry.addSource(type, source);
    return [
        sourceId,
        ()=>registry.removeSource(sourceId)
    ];
}

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapConnectorHooks": () => (/* binding */ wrapConnectorHooks)
/* harmony export */ });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/.pnpm/@react-dnd+invariant@4.0.2/node_modules/@react-dnd/invariant/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");


function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    const displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' + `You can either wrap ${displayName} into a <div>, or turn it into a ` + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return (elementOrNode = null, options = null)=>{
        // When passed a node, call the hook straight away.
        if (!(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(elementOrNode)) {
            const node = elementOrNode;
            hook(node, options);
            // return the node so it can be chained (e.g. when within callback refs
            // <div ref={node => connectDragSource(connectDropTarget(node))}/>
            return node;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        const element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        const ref = options ? (node)=>hook(node, options)
         : hook;
        return cloneWithRef(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    const wrappedHooks = {};
    Object.keys(hooks).forEach((key)=>{
        const hook = hooks[key];
        // ref objects should be passed straight through without wrapping
        if (key.endsWith('Ref')) {
            wrappedHooks[key] = hooks[key];
        } else {
            const wrappedHook = wrapHookToRecognizeElement(hook);
            wrappedHooks[key] = ()=>wrappedHook
            ;
        }
    });
    return wrappedHooks;
}
function setRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    } else {
        ref.current = node;
    }
}
function cloneWithRef(element, newRef) {
    const previousRef = element.ref;
    (0,_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__.invariant)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element, {
            ref: newRef
        });
    } else {
        return (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element, {
            ref: (node)=>{
                setRef(previousRef, node);
                setRef(newRef, node);
            }
        });
    }
}

//# sourceMappingURL=wrapConnectorHooks.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dnd */ "./node_modules/.pnpm/react-dnd@16.0.1_react@18.2.0/node_modules/react-dnd/dist/index.js");


console.log(react_dnd__WEBPACK_IMPORTED_MODULE_0__)
})();

/******/ })()
;