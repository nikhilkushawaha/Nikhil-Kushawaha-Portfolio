import {
  shallow,
  subscribeWithSelector,
  useDrag
} from "./chunk-PTB2TYMY.js";
import {
  require_react_dom
} from "./chunk-TNTPHDQH.js";
import {
  require_prop_types
} from "./chunk-X3MDYGI3.js";
import {
  create,
  require_jsx_runtime
} from "./chunk-HCNLMD7M.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS,
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/attr-accept/dist/es/index.js
var require_es = __commonJS({
  "node_modules/attr-accept/dist/es/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(file, acceptedFiles) {
      if (file && acceptedFiles) {
        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
        if (acceptedFilesArray.length === 0) {
          return true;
        }
        var fileName = file.name || "";
        var mimeType = (file.type || "").toLowerCase();
        var baseMimeType = mimeType.replace(/\/.*$/, "");
        return acceptedFilesArray.some(function(type) {
          var validType = type.trim().toLowerCase();
          if (validType.charAt(0) === ".") {
            return fileName.toLowerCase().endsWith(validType);
          } else if (validType.endsWith("/*")) {
            return baseMimeType === validType.replace(/\/.*$/, "");
          }
          return mimeType === validType;
        });
      }
      return true;
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports, module) {
    "use strict";
    module.exports = function isObject3(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/index.js"(exports, module) {
    "use strict";
    var isObject3 = require_isobject();
    function isObjectObject(o4) {
      return isObject3(o4) === true && Object.prototype.toString.call(o4) === "[object Object]";
    }
    module.exports = function isPlainObject(o4) {
      var ctor, prot;
      if (isObjectObject(o4) === false) return false;
      ctor = o4.constructor;
      if (typeof ctor !== "function") return false;
      prot = ctor.prototype;
      if (isObjectObject(prot) === false) return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/is-extendable/index.js
var require_is_extendable = __commonJS({
  "node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    var isPlainObject = require_is_plain_object();
    module.exports = function isExtendable(val) {
      return isPlainObject(val) || typeof val === "function" || Array.isArray(val);
    };
  }
});

// node_modules/for-in/index.js
var require_for_in = __commonJS({
  "node_modules/for-in/index.js"(exports, module) {
    "use strict";
    module.exports = function forIn(obj, fn, thisArg) {
      for (var key in obj) {
        if (fn.call(thisArg, obj[key], key, obj) === false) {
          break;
        }
      }
    };
  }
});

// node_modules/mixin-deep/index.js
var require_mixin_deep = __commonJS({
  "node_modules/mixin-deep/index.js"(exports, module) {
    "use strict";
    var isExtendable = require_is_extendable();
    var forIn = require_for_in();
    function mixinDeep(target, objects) {
      var len = arguments.length, i4 = 0;
      while (++i4 < len) {
        var obj = arguments[i4];
        if (isObject3(obj)) {
          forIn(obj, copy, target);
        }
      }
      return target;
    }
    function copy(val, key) {
      if (!isValidKey(key)) {
        return;
      }
      var obj = this[key];
      if (isObject3(val) && isObject3(obj)) {
        mixinDeep(obj, val);
      } else {
        this[key] = val;
      }
    }
    function isObject3(val) {
      return isExtendable(val) && !Array.isArray(val);
    }
    function isValidKey(key) {
      return key !== "__proto__" && key !== "constructor" && key !== "prototype";
    }
    module.exports = mixinDeep;
  }
});

// node_modules/get-value/index.js
var require_get_value = __commonJS({
  "node_modules/get-value/index.js"(exports, module) {
    module.exports = function(obj, prop, a4, b4, c4) {
      if (!isObject3(obj) || !prop) {
        return obj;
      }
      prop = toString(prop);
      if (a4) prop += "." + toString(a4);
      if (b4) prop += "." + toString(b4);
      if (c4) prop += "." + toString(c4);
      if (prop in obj) {
        return obj[prop];
      }
      var segs = prop.split(".");
      var len = segs.length;
      var i4 = -1;
      while (obj && ++i4 < len) {
        var key = segs[i4];
        while (key[key.length - 1] === "\\") {
          key = key.slice(0, -1) + "." + segs[++i4];
        }
        obj = obj[key];
      }
      return obj;
    };
    function isObject3(val) {
      return val !== null && (typeof val === "object" || typeof val === "function");
    }
    function toString(val) {
      if (!val) return "";
      if (Array.isArray(val)) {
        return val.join(".");
      }
      return val;
    }
  }
});

// node_modules/assign-symbols/index.js
var require_assign_symbols = __commonJS({
  "node_modules/assign-symbols/index.js"(exports, module) {
    "use strict";
    module.exports = function(receiver, objects) {
      if (receiver === null || typeof receiver === "undefined") {
        throw new TypeError("expected first argument to be an object.");
      }
      if (typeof objects === "undefined" || typeof Symbol === "undefined") {
        return receiver;
      }
      if (typeof Object.getOwnPropertySymbols !== "function") {
        return receiver;
      }
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var target = Object(receiver);
      var len = arguments.length, i4 = 0;
      while (++i4 < len) {
        var provider = Object(arguments[i4]);
        var names = Object.getOwnPropertySymbols(provider);
        for (var j3 = 0; j3 < names.length; j3++) {
          var key = names[j3];
          if (isEnumerable.call(provider, key)) {
            target[key] = provider[key];
          }
        }
      }
      return target;
    };
  }
});

// node_modules/split-string/node_modules/extend-shallow/index.js
var require_extend_shallow = __commonJS({
  "node_modules/split-string/node_modules/extend-shallow/index.js"(exports, module) {
    "use strict";
    var isExtendable = require_is_extendable();
    var assignSymbols = require_assign_symbols();
    module.exports = Object.assign || function(obj) {
      if (obj === null || typeof obj === "undefined") {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      if (!isObject3(obj)) {
        obj = {};
      }
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var val = arguments[i4];
        if (isString(val)) {
          val = toObject(val);
        }
        if (isObject3(val)) {
          assign(obj, val);
          assignSymbols(obj, val);
        }
      }
      return obj;
    };
    function assign(a4, b4) {
      for (var key in b4) {
        if (hasOwn(b4, key)) {
          a4[key] = b4[key];
        }
      }
    }
    function isString(val) {
      return val && typeof val === "string";
    }
    function toObject(str) {
      var obj = {};
      for (var i4 in str) {
        obj[i4] = str[i4];
      }
      return obj;
    }
    function isObject3(val) {
      return val && typeof val === "object" || isExtendable(val);
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/split-string/index.js
var require_split_string = __commonJS({
  "node_modules/split-string/index.js"(exports, module) {
    "use strict";
    var extend = require_extend_shallow();
    module.exports = function(str, options, fn) {
      if (typeof str !== "string") {
        throw new TypeError("expected a string");
      }
      if (typeof options === "function") {
        fn = options;
        options = null;
      }
      if (typeof options === "string") {
        options = { sep: options };
      }
      var opts = extend({ sep: "." }, options);
      var quotes = opts.quotes || ['"', "'", "`"];
      var brackets;
      if (opts.brackets === true) {
        brackets = {
          "<": ">",
          "(": ")",
          "[": "]",
          "{": "}"
        };
      } else if (opts.brackets) {
        brackets = opts.brackets;
      }
      var tokens = [];
      var stack = [];
      var arr = [""];
      var sep = opts.sep;
      var len = str.length;
      var idx = -1;
      var closeIdx;
      function expected() {
        if (brackets && stack.length) {
          return brackets[stack[stack.length - 1]];
        }
      }
      while (++idx < len) {
        var ch = str[idx];
        var next = str[idx + 1];
        var tok = { val: ch, idx, arr, str };
        tokens.push(tok);
        if (ch === "\\") {
          tok.val = keepEscaping(opts, str, idx) === true ? ch + next : next;
          tok.escaped = true;
          if (typeof fn === "function") {
            fn(tok);
          }
          arr[arr.length - 1] += tok.val;
          idx++;
          continue;
        }
        if (brackets && brackets[ch]) {
          stack.push(ch);
          var e4 = expected();
          var i4 = idx + 1;
          if (str.indexOf(e4, i4 + 1) !== -1) {
            while (stack.length && i4 < len) {
              var s4 = str[++i4];
              if (s4 === "\\") {
                s4++;
                continue;
              }
              if (quotes.indexOf(s4) !== -1) {
                i4 = getClosingQuote(str, s4, i4 + 1);
                continue;
              }
              e4 = expected();
              if (stack.length && str.indexOf(e4, i4 + 1) === -1) {
                break;
              }
              if (brackets[s4]) {
                stack.push(s4);
                continue;
              }
              if (e4 === s4) {
                stack.pop();
              }
            }
          }
          closeIdx = i4;
          if (closeIdx === -1) {
            arr[arr.length - 1] += ch;
            continue;
          }
          ch = str.slice(idx, closeIdx + 1);
          tok.val = ch;
          tok.idx = idx = closeIdx;
        }
        if (quotes.indexOf(ch) !== -1) {
          closeIdx = getClosingQuote(str, ch, idx + 1);
          if (closeIdx === -1) {
            arr[arr.length - 1] += ch;
            continue;
          }
          if (keepQuotes(ch, opts) === true) {
            ch = str.slice(idx, closeIdx + 1);
          } else {
            ch = str.slice(idx + 1, closeIdx);
          }
          tok.val = ch;
          tok.idx = idx = closeIdx;
        }
        if (typeof fn === "function") {
          fn(tok, tokens);
          ch = tok.val;
          idx = tok.idx;
        }
        if (tok.val === sep && tok.split !== false) {
          arr.push("");
          continue;
        }
        arr[arr.length - 1] += tok.val;
      }
      return arr;
    };
    function getClosingQuote(str, ch, i4, brackets) {
      var idx = str.indexOf(ch, i4);
      if (str.charAt(idx - 1) === "\\") {
        return getClosingQuote(str, ch, idx + 1);
      }
      return idx;
    }
    function keepQuotes(ch, opts) {
      if (opts.keepDoubleQuotes === true && ch === '"') return true;
      if (opts.keepSingleQuotes === true && ch === "'") return true;
      return opts.keepQuotes;
    }
    function keepEscaping(opts, str, idx) {
      if (typeof opts.keepEscaping === "function") {
        return opts.keepEscaping(str, idx);
      }
      return opts.keepEscaping === true || str[idx + 1] === "\\";
    }
  }
});

// node_modules/extend-shallow/node_modules/is-extendable/index.js
var require_is_extendable2 = __commonJS({
  "node_modules/extend-shallow/node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    module.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/extend-shallow/index.js
var require_extend_shallow2 = __commonJS({
  "node_modules/extend-shallow/index.js"(exports, module) {
    "use strict";
    var isObject3 = require_is_extendable2();
    module.exports = function extend(o4) {
      if (!isObject3(o4)) {
        o4 = {};
      }
      var len = arguments.length;
      for (var i4 = 1; i4 < len; i4++) {
        var obj = arguments[i4];
        if (isObject3(obj)) {
          assign(o4, obj);
        }
      }
      return o4;
    };
    function assign(a4, b4) {
      for (var key in b4) {
        if (hasOwn(b4, key)) {
          a4[key] = b4[key];
        }
      }
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/set-value/node_modules/is-extendable/index.js
var require_is_extendable3 = __commonJS({
  "node_modules/set-value/node_modules/is-extendable/index.js"(exports, module) {
    "use strict";
    module.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/set-value/index.js
var require_set_value = __commonJS({
  "node_modules/set-value/index.js"(exports, module) {
    "use strict";
    var split2 = require_split_string();
    var extend = require_extend_shallow2();
    var isPlainObject = require_is_plain_object();
    var isObject3 = require_is_extendable3();
    module.exports = function(obj, prop, val) {
      if (!isObject3(obj)) {
        return obj;
      }
      if (Array.isArray(prop)) {
        prop = [].concat.apply([], prop).join(".");
      }
      if (typeof prop !== "string") {
        return obj;
      }
      var keys = split2(prop, { sep: ".", brackets: true }).filter(isValidKey);
      var len = keys.length;
      var idx = -1;
      var current = obj;
      while (++idx < len) {
        var key = keys[idx];
        if (idx !== len - 1) {
          if (!isObject3(current[key])) {
            current[key] = {};
          }
          current = current[key];
          continue;
        }
        if (isPlainObject(current[key]) && isPlainObject(val)) {
          current[key] = extend({}, current[key], val);
        } else {
          current[key] = val;
        }
      }
      return obj;
    };
    function isValidKey(key) {
      return key !== "__proto__" && key !== "constructor" && key !== "prototype";
    }
  }
});

// node_modules/merge-value/index.js
var require_merge_value = __commonJS({
  "node_modules/merge-value/index.js"(exports, module) {
    "use strict";
    var isObject3 = require_is_extendable();
    var merge2 = require_mixin_deep();
    var get = require_get_value();
    var set = require_set_value();
    module.exports = function mergeValue(obj, prop, value) {
      if (!isObject3(obj)) {
        throw new TypeError("expected an object");
      }
      if (typeof prop !== "string" || value == null) {
        return merge2.apply(null, arguments);
      }
      if (typeof value === "string") {
        set(obj, prop, value);
        return obj;
      }
      var current = get(obj, prop);
      if (isObject3(value) && isObject3(current)) {
        value = merge2({}, current, value);
      }
      set(obj, prop, value);
      return obj;
    };
  }
});

// node_modules/leva/dist/vector-plugin-6f82aee9.esm.js
var import_react_dom3 = __toESM(require_react_dom());
var import_react3 = __toESM(require_react());

// node_modules/@radix-ui/react-portal/dist/index.mjs
var React5 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React3 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require_react(), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var Slot = React2.forwardRef((props3, forwardedRef) => {
  const { children, ...slotProps } = props3;
  const childrenArray = React2.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (React2.Children.count(newElement) > 1) return React2.Children.only(null);
        return React2.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React2.isValidElement(newElement) ? React2.cloneElement(newElement, void 0, newChildren) : null });
  }
  return (0, import_jsx_runtime.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = React2.forwardRef((props3, forwardedRef) => {
  const { children, ...slotProps } = props3;
  if (React2.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return React2.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
    });
  }
  return React2.Children.count(children) > 1 ? React2.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
};
function isSlottable(child) {
  return React2.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node2 = React3.forwardRef((props3, forwardedRef) => {
    const { asChild, ...primitiveProps } = props3;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return (0, import_jsx_runtime2.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node2.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node2 };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React4 = __toESM(require_react(), 1);
var useLayoutEffect2 = Boolean(globalThis == null ? void 0 : globalThis.document) ? React4.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-portal/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var PORTAL_NAME = "Portal";
var Portal = React5.forwardRef((props3, forwardedRef) => {
  var _a;
  const { container: containerProp, ...portalProps } = props3;
  const [mounted, setMounted] = React5.useState(false);
  useLayoutEffect2(() => setMounted(true), []);
  const container = containerProp || mounted && ((_a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a.body);
  return container ? import_react_dom.default.createPortal((0, import_jsx_runtime3.jsx)(Primitive.div, { ...portalProps, ref: forwardedRef }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;

// node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar) {
  var ctor, len;
  if (foo === bar) return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && dequal(foo[len], bar[len])) ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// node_modules/v8n/dist/v8n.esm.js
var Rule = function Rule2(name, fn, args, modifiers) {
  this.name = name;
  this.fn = fn;
  this.args = args;
  this.modifiers = modifiers;
};
Rule.prototype._test = function _test(value) {
  var fn = this.fn;
  try {
    testAux(this.modifiers.slice(), fn, this)(value);
  } catch (ex) {
    fn = function() {
      return false;
    };
  }
  try {
    return testAux(this.modifiers.slice(), fn, this)(value);
  } catch (ex$1) {
    return false;
  }
};
Rule.prototype._check = function _check(value) {
  try {
    testAux(this.modifiers.slice(), this.fn, this)(value);
  } catch (ex) {
    if (testAux(this.modifiers.slice(), function(it) {
      return it;
    }, this)(false)) {
      return;
    }
  }
  if (!testAux(this.modifiers.slice(), this.fn, this)(value)) {
    throw null;
  }
};
Rule.prototype._testAsync = function _testAsync(value) {
  var this$1 = this;
  return new Promise(function(resolve, reject) {
    testAsyncAux(
      this$1.modifiers.slice(),
      this$1.fn,
      this$1
    )(value).then(function(valid) {
      if (valid) {
        resolve(value);
      } else {
        reject(null);
      }
    }).catch(function(ex) {
      return reject(ex);
    });
  });
};
function pickFn(fn, variant) {
  if (variant === void 0) variant = "simple";
  return typeof fn === "object" ? fn[variant] : fn;
}
function testAux(modifiers, fn, rule) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAux(modifiers, fn, rule);
    return modifier.perform(nextFn, rule);
  } else {
    return pickFn(fn);
  }
}
function testAsyncAux(modifiers, fn, rule) {
  if (modifiers.length) {
    var modifier = modifiers.shift();
    var nextFn = testAsyncAux(modifiers, fn, rule);
    return modifier.performAsync(nextFn, rule);
  } else {
    return function(value) {
      return Promise.resolve(pickFn(fn, "async")(value));
    };
  }
}
var Modifier = function Modifier2(name, perform, performAsync) {
  this.name = name;
  this.perform = perform;
  this.performAsync = performAsync;
};
var ValidationError = function(Error2) {
  function ValidationError2(rule, value, cause, target) {
    var remaining = [], len = arguments.length - 4;
    while (len-- > 0) remaining[len] = arguments[len + 4];
    Error2.call(this, remaining);
    if (Error2.captureStackTrace) {
      Error2.captureStackTrace(this, ValidationError2);
    }
    this.rule = rule;
    this.value = value;
    this.cause = cause;
    this.target = target;
  }
  if (Error2) ValidationError2.__proto__ = Error2;
  ValidationError2.prototype = Object.create(Error2 && Error2.prototype);
  ValidationError2.prototype.constructor = ValidationError2;
  return ValidationError2;
}(Error);
var Context = function Context2(chain, nextRuleModifiers) {
  if (chain === void 0) chain = [];
  if (nextRuleModifiers === void 0) nextRuleModifiers = [];
  this.chain = chain;
  this.nextRuleModifiers = nextRuleModifiers;
};
Context.prototype._applyRule = function _applyRule(ruleFn, name) {
  var this$1 = this;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    this$1.chain.push(
      new Rule(name, ruleFn.apply(this$1, args), args, this$1.nextRuleModifiers)
    );
    this$1.nextRuleModifiers = [];
    return this$1;
  };
};
Context.prototype._applyModifier = function _applyModifier(modifier, name) {
  this.nextRuleModifiers.push(
    new Modifier(name, modifier.simple, modifier.async)
  );
  return this;
};
Context.prototype._clone = function _clone() {
  return new Context(this.chain.slice(), this.nextRuleModifiers.slice());
};
Context.prototype.test = function test(value) {
  return this.chain.every(function(rule) {
    return rule._test(value);
  });
};
Context.prototype.testAll = function testAll(value) {
  var err = [];
  this.chain.forEach(function(rule) {
    try {
      rule._check(value);
    } catch (ex) {
      err.push(new ValidationError(rule, value, ex));
    }
  });
  return err;
};
Context.prototype.check = function check(value) {
  this.chain.forEach(function(rule) {
    try {
      rule._check(value);
    } catch (ex) {
      throw new ValidationError(rule, value, ex);
    }
  });
};
Context.prototype.testAsync = function testAsync(value) {
  var this$1 = this;
  return new Promise(function(resolve, reject) {
    executeAsyncRules(value, this$1.chain.slice(), resolve, reject);
  });
};
function executeAsyncRules(value, rules, resolve, reject) {
  if (rules.length) {
    var rule = rules.shift();
    rule._testAsync(value).then(
      function() {
        executeAsyncRules(value, rules, resolve, reject);
      },
      function(cause) {
        reject(new ValidationError(rule, value, cause));
      }
    );
  } else {
    resolve(value);
  }
}
var consideredEmpty = function(value, considerTrimmedEmptyString) {
  if (considerTrimmedEmptyString && typeof value === "string" && value.trim().length === 0) {
    return true;
  }
  return value === void 0 || value === null;
};
function optional(validation, considerTrimmedEmptyString) {
  if (considerTrimmedEmptyString === void 0) considerTrimmedEmptyString = false;
  return {
    simple: function(value) {
      return consideredEmpty(value, considerTrimmedEmptyString) || validation.check(value) === void 0;
    },
    async: function(value) {
      return consideredEmpty(value, considerTrimmedEmptyString) || validation.testAsync(value);
    }
  };
}
function v8n() {
  return typeof Proxy !== "undefined" ? proxyContext(new Context()) : proxylessContext(new Context());
}
var customRules = {};
v8n.extend = function(newRules) {
  Object.assign(customRules, newRules);
};
v8n.clearCustomRules = function() {
  customRules = {};
};
function proxyContext(context) {
  return new Proxy(context, {
    get: function get(obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }
      var newContext = proxyContext(context._clone());
      if (prop in availableModifiers) {
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
      if (prop in customRules) {
        return newContext._applyRule(customRules[prop], prop);
      }
      if (prop in availableRules) {
        return newContext._applyRule(availableRules[prop], prop);
      }
    }
  });
}
function proxylessContext(context) {
  var addRuleSet = function(ruleSet, targetContext) {
    Object.keys(ruleSet).forEach(function(prop) {
      targetContext[prop] = function() {
        var args = [], len = arguments.length;
        while (len--) args[len] = arguments[len];
        var newContext = proxylessContext(targetContext._clone());
        var contextWithRuleApplied = newContext._applyRule(
          ruleSet[prop],
          prop
        ).apply(void 0, args);
        return contextWithRuleApplied;
      };
    });
    return targetContext;
  };
  var contextWithAvailableRules = addRuleSet(availableRules, context);
  var contextWithAllRules = addRuleSet(
    customRules,
    contextWithAvailableRules
  );
  Object.keys(availableModifiers).forEach(function(prop) {
    Object.defineProperty(contextWithAllRules, prop, {
      get: function() {
        var newContext = proxylessContext(contextWithAllRules._clone());
        return newContext._applyModifier(availableModifiers[prop], prop);
      }
    });
  });
  return contextWithAllRules;
}
var availableModifiers = {
  not: {
    simple: function(fn) {
      return function(value) {
        return !fn(value);
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.resolve(fn(value)).then(function(result) {
          return !result;
        }).catch(function() {
          return true;
        });
      };
    }
  },
  some: {
    simple: function(fn) {
      return function(value) {
        return split(value).some(function(item) {
          try {
            return fn(item);
          } catch (ex) {
            return false;
          }
        });
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.all(
          split(value).map(function(item) {
            try {
              return fn(item).catch(function() {
                return false;
              });
            } catch (ex) {
              return false;
            }
          })
        ).then(function(result) {
          return result.some(Boolean);
        });
      };
    }
  },
  every: {
    simple: function(fn) {
      return function(value) {
        return value !== false && split(value).every(fn);
      };
    },
    async: function(fn) {
      return function(value) {
        return Promise.all(split(value).map(fn)).then(function(result) {
          return result.every(Boolean);
        });
      };
    }
  },
  strict: {
    simple: function(fn, rule) {
      return function(value) {
        if (isSchemaRule(rule) && value && typeof value === "object") {
          return Object.keys(rule.args[0]).length === Object.keys(value).length && fn(value);
        }
        return fn(value);
      };
    },
    async: function(fn, rule) {
      return function(value) {
        return Promise.resolve(fn(value)).then(function(result) {
          if (isSchemaRule(rule) && value && typeof value === "object") {
            return Object.keys(rule.args[0]).length === Object.keys(value).length && result;
          }
          return result;
        }).catch(function() {
          return false;
        });
      };
    }
  }
};
function isSchemaRule(rule) {
  return rule && rule.name === "schema" && rule.args.length > 0 && typeof rule.args[0] === "object";
}
function split(value) {
  if (typeof value === "string") {
    return value.split("");
  }
  return value;
}
var availableRules = {
  // Value
  equal: function(expected) {
    return function(value) {
      return value == expected;
    };
  },
  exact: function(expected) {
    return function(value) {
      return value === expected;
    };
  },
  // Types
  number: function(allowInfinite) {
    if (allowInfinite === void 0) allowInfinite = true;
    return function(value) {
      return typeof value === "number" && (allowInfinite || isFinite(value));
    };
  },
  integer: function() {
    return function(value) {
      var isInteger = Number.isInteger || isIntegerPolyfill;
      return isInteger(value);
    };
  },
  numeric: function() {
    return function(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    };
  },
  string: function() {
    return testType("string");
  },
  boolean: function() {
    return testType("boolean");
  },
  undefined: function() {
    return testType("undefined");
  },
  null: function() {
    return testType("null");
  },
  array: function() {
    return testType("array");
  },
  object: function() {
    return testType("object");
  },
  instanceOf: function(instance) {
    return function(value) {
      return value instanceof instance;
    };
  },
  // Pattern
  pattern: function(expected) {
    return function(value) {
      return expected.test(value);
    };
  },
  lowercase: function() {
    return function(value) {
      return typeof value === "boolean" || value === value.toLowerCase() && value.trim() !== "";
    };
  },
  uppercase: function() {
    return function(value) {
      return value === value.toUpperCase() && value.trim() !== "";
    };
  },
  vowel: function() {
    return function(value) {
      return /^[aeiou]+$/i.test(value);
    };
  },
  consonant: function() {
    return function(value) {
      return /^(?=[^aeiou])([a-z]+)$/i.test(value);
    };
  },
  // Value at
  first: function(expected) {
    return function(value) {
      return value[0] == expected;
    };
  },
  last: function(expected) {
    return function(value) {
      return value[value.length - 1] == expected;
    };
  },
  // Length
  empty: function() {
    return function(value) {
      return value.length === 0;
    };
  },
  length: function(min2, max2) {
    return function(value) {
      return value.length >= min2 && value.length <= (max2 || min2);
    };
  },
  minLength: function(min2) {
    return function(value) {
      return value.length >= min2;
    };
  },
  maxLength: function(max2) {
    return function(value) {
      return value.length <= max2;
    };
  },
  // Range
  negative: function() {
    return function(value) {
      return value < 0;
    };
  },
  positive: function() {
    return function(value) {
      return value >= 0;
    };
  },
  between: function(a4, b4) {
    return function(value) {
      return value >= a4 && value <= b4;
    };
  },
  range: function(a4, b4) {
    return function(value) {
      return value >= a4 && value <= b4;
    };
  },
  lessThan: function(n4) {
    return function(value) {
      return value < n4;
    };
  },
  lessThanOrEqual: function(n4) {
    return function(value) {
      return value <= n4;
    };
  },
  greaterThan: function(n4) {
    return function(value) {
      return value > n4;
    };
  },
  greaterThanOrEqual: function(n4) {
    return function(value) {
      return value >= n4;
    };
  },
  // Divisible
  even: function() {
    return function(value) {
      return value % 2 === 0;
    };
  },
  odd: function() {
    return function(value) {
      return value % 2 !== 0;
    };
  },
  includes: function(expected) {
    return function(value) {
      return ~value.indexOf(expected);
    };
  },
  schema: function(schema3) {
    return testSchema(schema3);
  },
  // branching
  passesAnyOf: function() {
    var validations = [], len = arguments.length;
    while (len--) validations[len] = arguments[len];
    return function(value) {
      return validations.some(function(validation) {
        return validation.test(value);
      });
    };
  },
  optional
};
function testType(expected) {
  return function(value) {
    return Array.isArray(value) && expected === "array" || value === null && expected === "null" || typeof value === expected;
  };
}
function isIntegerPolyfill(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function testSchema(schema3) {
  return {
    simple: function(value) {
      var causes = [];
      Object.keys(schema3).forEach(function(key) {
        var nestedValidation = schema3[key];
        try {
          nestedValidation.check((value || {})[key]);
        } catch (ex) {
          ex.target = key;
          causes.push(ex);
        }
      });
      if (causes.length > 0) {
        throw causes;
      }
      return true;
    },
    async: function(value) {
      var causes = [];
      var nested = Object.keys(schema3).map(function(key) {
        var nestedValidation = schema3[key];
        return nestedValidation.testAsync((value || {})[key]).catch(function(ex) {
          ex.target = key;
          causes.push(ex);
        });
      });
      return Promise.all(nested).then(function() {
        if (causes.length > 0) {
          throw causes;
        }
        return true;
      });
    }
  };
}
var v8n_esm_default = v8n;

// node_modules/@stitches/react/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var e = "colors";
var t = "sizes";
var r = "space";
var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e4, t4) => "function" == typeof t4 ? { "()": Function.prototype.toString.call(t4) } : t4;
var o = () => {
  const e4 = /* @__PURE__ */ Object.create(null);
  return (t4, r4, ...n4) => {
    const o4 = ((e5) => JSON.stringify(e5, i))(t4);
    return o4 in e4 ? e4[o4] : e4[o4] = r4(t4, ...n4);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e4, t4) => Object.defineProperties(e4, Object.getOwnPropertyDescriptors(t4));
var a = (e4) => {
  for (const t4 in e4) return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e4) => e4.includes("-") ? e4 : e4.replace(/[A-Z]/g, (e5) => "-" + e5.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e4) => (t4) => e4(..."string" == typeof t4 ? String(t4).split(g) : [t4]);
var u = { appearance: (e4) => ({ WebkitAppearance: e4, appearance: e4 }), backfaceVisibility: (e4) => ({ WebkitBackfaceVisibility: e4, backfaceVisibility: e4 }), backdropFilter: (e4) => ({ WebkitBackdropFilter: e4, backdropFilter: e4 }), backgroundClip: (e4) => ({ WebkitBackgroundClip: e4, backgroundClip: e4 }), boxDecorationBreak: (e4) => ({ WebkitBoxDecorationBreak: e4, boxDecorationBreak: e4 }), clipPath: (e4) => ({ WebkitClipPath: e4, clipPath: e4 }), content: (e4) => ({ content: e4.includes('"') || e4.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e4) ? e4 : `"${e4}"` }), hyphens: (e4) => ({ WebkitHyphens: e4, hyphens: e4 }), maskImage: (e4) => ({ WebkitMaskImage: e4, maskImage: e4 }), maskSize: (e4) => ({ WebkitMaskSize: e4, maskSize: e4 }), tabSize: (e4) => ({ MozTabSize: e4, tabSize: e4 }), textSizeAdjust: (e4) => ({ WebkitTextSizeAdjust: e4, textSizeAdjust: e4 }), userSelect: (e4) => ({ WebkitUserSelect: e4, userSelect: e4 }), marginBlock: p((e4, t4) => ({ marginBlockStart: e4, marginBlockEnd: t4 || e4 })), marginInline: p((e4, t4) => ({ marginInlineStart: e4, marginInlineEnd: t4 || e4 })), maxSize: p((e4, t4) => ({ maxBlockSize: e4, maxInlineSize: t4 || e4 })), minSize: p((e4, t4) => ({ minBlockSize: e4, minInlineSize: t4 || e4 })), paddingBlock: p((e4, t4) => ({ paddingBlockStart: e4, paddingBlockEnd: t4 || e4 })), paddingInline: p((e4, t4) => ({ paddingInlineStart: e4, paddingInlineEnd: t4 || e4 })) };
var h = /([\d.]+)([^]*)/;
var f = (e4, t4) => e4.length ? e4.reduce((e5, r4) => (e5.push(...t4.map((e6) => e6.includes("&") ? e6.replace(/&/g, /[ +>|~]/.test(r4) && /&.*&/.test(e6) ? `:is(${r4})` : r4) : r4 + " " + e6)), e5), []) : t4;
var m = (e4, t4) => e4 in b && "string" == typeof t4 ? t4.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t5, r4, n4, i4) => r4 + ("stretch" === n4 ? `-moz-available${i4};${d(e4)}:${r4}-webkit-fill-available` : `-moz-fit-content${i4};${d(e4)}:${r4}fit-content`) + i4) : String(t4);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e4) => e4 ? e4 + "-" : "";
var k = (e4, t4, r4) => e4.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e5, n4, i4, o4, l4) => "$" == o4 == !!i4 ? e5 : (n4 || "--" == o4 ? "calc(" : "") + "var(--" + ("$" === o4 ? S(t4) + (l4.includes("$") ? "" : S(r4)) + l4.replace(/\$/g, "-") : l4) + ")" + (n4 || "--" == o4 ? "*" + (n4 || "") + (i4 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e4, t4, r4, n4, i4) => {
  let o4, l4, s4;
  const a4 = (e5, t5, r5) => {
    let c4, g4;
    const p4 = (e6) => {
      for (c4 in e6) {
        const R3 = 64 === c4.charCodeAt(0), z2 = R3 && Array.isArray(e6[c4]) ? e6[c4] : [e6[c4]];
        for (g4 of z2) {
          const e7 = /[A-Z]/.test($4 = c4) ? $4 : $4.replace(/-[^]/g, (e8) => e8[1].toUpperCase()), z3 = "object" == typeof g4 && g4 && g4.toString === B && (!n4.utils[e7] || !t5.length);
          if (e7 in n4.utils && !z3) {
            const t6 = n4.utils[e7];
            if (t6 !== l4) {
              l4 = t6, p4(t6(g4)), l4 = null;
              continue;
            }
          } else if (e7 in u) {
            const t6 = u[e7];
            if (t6 !== s4) {
              s4 = t6, p4(t6(g4)), s4 = null;
              continue;
            }
          }
          if (R3 && (b4 = c4.slice(1) in n4.media ? "@media " + n4.media[c4.slice(1)] : c4, c4 = b4.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e8, t6, r6, n5, i5, o5) => {
            const l5 = h.test(t6), s5 = 0.0625 * (l5 ? -1 : 1), [a5, c5] = l5 ? [n5, t6] : [t6, n5];
            return "(" + ("=" === r6[0] ? "" : ">" === r6[0] === l5 ? "max-" : "min-") + a5 + ":" + ("=" !== r6[0] && 1 === r6.length ? c5.replace(h, (e9, t7, n6) => Number(t7) + s5 * (">" === r6 ? 1 : -1) + n6) : c5) + (i5 ? ") and (" + (">" === i5[0] ? "min-" : "max-") + a5 + ":" + (1 === i5.length ? o5.replace(h, (e9, t7, r7) => Number(t7) + s5 * (">" === i5 ? -1 : 1) + r7) : o5) : "") + ")";
          })), z3) {
            const e8 = R3 ? r5.concat(c4) : [...r5], n5 = R3 ? [...t5] : f(t5, c4.split(y));
            void 0 !== o4 && i4(x(...o4)), o4 = void 0, a4(g4, n5, e8);
          } else void 0 === o4 && (o4 = [[], t5, r5]), c4 = R3 || 36 !== c4.charCodeAt(0) ? c4 : `--${S(n4.prefix)}${c4.slice(1).replace(/\$/g, "-")}`, g4 = z3 ? g4 : "number" == typeof g4 ? g4 && e7 in I ? String(g4) + "px" : String(g4) : k(m(e7, null == g4 ? "" : g4), n4.prefix, n4.themeMap[e7]), o4[0].push(`${R3 ? `${c4} ` : `${d(c4)}:`}${g4}`);
        }
      }
      var b4, $4;
    };
    p4(e5), void 0 !== o4 && i4(x(...o4)), o4 = void 0;
  };
  a4(e4, t4, r4);
};
var x = (e4, t4, r4) => `${r4.map((e5) => `${e5}{`).join("")}${t4.length ? `${t4.join(",")}{` : ""}${e4.join(";")}${t4.length ? "}" : ""}${Array(r4.length ? r4.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e4) => String.fromCharCode(e4 + (e4 > 25 ? 39 : 97));
var z = (e4) => ((e5) => {
  let t4, r4 = "";
  for (t4 = Math.abs(e5); t4 > 52; t4 = t4 / 52 | 0) r4 = R(t4 % 52) + r4;
  return R(t4 % 52) + r4;
})(((e5, t4) => {
  let r4 = t4.length;
  for (; r4; ) e5 = 33 * e5 ^ t4.charCodeAt(--r4);
  return e5;
})(5381, JSON.stringify(e4)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e4) => {
  if (e4.href && !e4.href.startsWith(location.origin)) return false;
  try {
    return !!e4.cssRules;
  } catch (e5) {
    return false;
  }
};
var E = (e4) => {
  let t4;
  const r4 = () => {
    const { cssRules: e5 } = t4.sheet;
    return [].map.call(e5, (r5, n5) => {
      const { cssText: i4 } = r5;
      let o4 = "";
      if (i4.startsWith("--sxs")) return "";
      if (e5[n5 - 1] && (o4 = e5[n5 - 1].cssText).startsWith("--sxs")) {
        if (!r5.cssRules.length) return "";
        for (const e6 in t4.rules) if (t4.rules[e6].group === r5) return `--sxs{--sxs:${[...t4.rules[e6].cache].join(" ")}}${i4}`;
        return r5.cssRules.length ? `${o4}${i4}` : "";
      }
      return i4;
    }).join("");
  }, n4 = () => {
    if (t4) {
      const { rules: e5, sheet: r5 } = t4;
      if (!r5.deleteRule) {
        for (; 3 === Object(Object(r5.cssRules)[0]).type; ) r5.cssRules.splice(0, 1);
        r5.cssRules = [];
      }
      for (const t5 in e5) delete e5[t5];
    }
    const i4 = Object(e4).styleSheets || [];
    for (const e5 of i4) if (j(e5)) {
      for (let i5 = 0, o5 = e5.cssRules; o5[i5]; ++i5) {
        const l5 = Object(o5[i5]);
        if (1 !== l5.type) continue;
        const s4 = Object(o5[i5 + 1]);
        if (4 !== s4.type) continue;
        ++i5;
        const { cssText: a4 } = l5;
        if (!a4.startsWith("--sxs")) continue;
        const c4 = a4.slice(14, -3).trim().split(/\s+/), d4 = W[c4[0]];
        d4 && (t4 || (t4 = { sheet: e5, reset: n4, rules: {}, toString: r4 }), t4.rules[d4] = { group: s4, index: i5, cache: new Set(c4) });
      }
      if (t4) break;
    }
    if (!t4) {
      const i5 = (e5, t5) => ({ type: t5, cssRules: [], insertRule(e6, t6) {
        this.cssRules.splice(t6, 0, i5(e6, { import: 3, undefined: 1 }[(e6.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return "@media{}" === e5 ? `@media{${[].map.call(this.cssRules, (e6) => e6.cssText).join("")}}` : e5;
      } });
      t4 = { sheet: e4 ? (e4.head || e4).appendChild(document.createElement("style")).sheet : i5("", "text/css"), rules: {}, reset: n4, toString: r4 };
    }
    const { sheet: o4, rules: l4 } = t4;
    for (let e5 = W.length - 1; e5 >= 0; --e5) {
      const t5 = W[e5];
      if (!l4[t5]) {
        const r5 = W[e5 + 1], n5 = l4[r5] ? l4[r5].index : o4.cssRules.length;
        o4.insertRule("@media{}", n5), o4.insertRule(`--sxs{--sxs:${e5}}`, n5), l4[t5] = { group: o4.cssRules[n5 + 1], index: n5, cache: /* @__PURE__ */ new Set([e5]) };
      }
      v(l4[t5]);
    }
  };
  return n4(), t4;
};
var v = (e4) => {
  const t4 = e4.group;
  let r4 = t4.cssRules.length;
  e4.apply = (e5) => {
    try {
      t4.insertRule(e5, r4), ++r4;
    } catch (e6) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e4, t4) => w(e4, () => (...r4) => {
  let n4 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t5 of r4) if (null != t5) if (t5[l]) {
    null == n4.type && (n4.type = t5[l].type);
    for (const e5 of t5[l].composers) n4.composers.add(e5);
  } else t5.constructor !== Object || t5.$$typeof ? null == n4.type && (n4.type = t5) : n4.composers.add(C(t5, e4));
  return null == n4.type && (n4.type = "span"), n4.composers.size || n4.composers.add(["PJLV", {}, [], [], {}, []]), P(e4, n4, t4);
});
var C = ({ variants: e4, compoundVariants: t4, defaultVariants: r4, ...n4 }, i4) => {
  const o4 = `${S(i4.prefix)}c-${z(n4)}`, l4 = [], s4 = [], d4 = /* @__PURE__ */ Object.create(null), g4 = [];
  for (const e5 in r4) d4[e5] = String(r4[e5]);
  if ("object" == typeof e4 && e4) for (const t5 in e4) {
    p4 = d4, u4 = t5, c.call(p4, u4) || (d4[t5] = "undefined");
    const r5 = e4[t5];
    for (const e5 in r5) {
      const n5 = { [t5]: String(e5) };
      "undefined" === String(e5) && g4.push(t5);
      const i5 = r5[e5], o5 = [n5, i5, !a(i5)];
      l4.push(o5);
    }
  }
  var p4, u4;
  if ("object" == typeof t4 && t4) for (const e5 of t4) {
    let { css: t5, ...r5 } = e5;
    t5 = "object" == typeof t5 && t5 || {};
    for (const e6 in r5) r5[e6] = String(r5[e6]);
    const n5 = [r5, t5, !a(t5)];
    s4.push(n5);
  }
  return [o4, n4, l4, s4, d4, g4];
};
var P = (e4, t4, r4) => {
  const [n4, i4, o4, a4] = L(t4.composers), c4 = "function" == typeof t4.type || t4.type.$$typeof ? ((e5) => {
    function t5() {
      for (let r5 = 0; r5 < t5[T].length; r5++) {
        const [n5, i5] = t5[T][r5];
        e5.rules[n5].apply(i5);
      }
      return t5[T] = [], null;
    }
    return t5[T] = [], t5.rules = {}, W.forEach((e6) => t5.rules[e6] = { apply: (r5) => t5[T].push([e6, r5]) }), t5;
  })(r4) : null, d4 = (c4 || r4).rules, g4 = `.${n4}${i4.length > 1 ? `:where(.${i4.slice(1).join(".")})` : ""}`, p4 = (l4) => {
    l4 = "object" == typeof l4 && l4 || A;
    const { css: s4, ...p5 } = l4, u4 = {};
    for (const e5 in o4) if (delete p5[e5], e5 in l4) {
      let t5 = l4[e5];
      "object" == typeof t5 && t5 ? u4[e5] = { "@initial": o4[e5], ...t5 } : (t5 = String(t5), u4[e5] = "undefined" !== t5 || a4.has(e5) ? t5 : o4[e5]);
    } else u4[e5] = o4[e5];
    const h4 = /* @__PURE__ */ new Set([...i4]);
    for (const [n5, i5, o5, l5] of t4.composers) {
      r4.rules.styled.cache.has(n5) || (r4.rules.styled.cache.add(n5), $(i5, [`.${n5}`], [], e4, (e5) => {
        d4.styled.apply(e5);
      }));
      const t5 = O(o5, u4, e4.media), s5 = O(l5, u4, e4.media, true);
      for (const i6 of t5) if (void 0 !== i6) for (const [t6, o6, l6] of i6) {
        const i7 = `${n5}-${z(o6)}-${t6}`;
        h4.add(i7);
        const s6 = (l6 ? r4.rules.resonevar : r4.rules.onevar).cache, a5 = l6 ? d4.resonevar : d4.onevar;
        s6.has(i7) || (s6.add(i7), $(o6, [`.${i7}`], [], e4, (e5) => {
          a5.apply(e5);
        }));
      }
      for (const t6 of s5) if (void 0 !== t6) for (const [i6, o6] of t6) {
        const t7 = `${n5}-${z(o6)}-${i6}`;
        h4.add(t7), r4.rules.allvar.cache.has(t7) || (r4.rules.allvar.cache.add(t7), $(o6, [`.${t7}`], [], e4, (e5) => {
          d4.allvar.apply(e5);
        }));
      }
    }
    if ("object" == typeof s4 && s4) {
      const t5 = `${n4}-i${z(s4)}-css`;
      h4.add(t5), r4.rules.inline.cache.has(t5) || (r4.rules.inline.cache.add(t5), $(s4, [`.${t5}`], [], e4, (e5) => {
        d4.inline.apply(e5);
      }));
    }
    for (const e5 of String(l4.className || "").trim().split(/\s+/)) e5 && h4.add(e5);
    const f4 = p5.className = [...h4].join(" ");
    return { type: t4.type, className: f4, selector: g4, props: p5, toString: () => f4, deferredInjector: c4 };
  };
  return s(p4, { className: n4, selector: g4, [l]: t4, toString: () => (r4.rules.styled.cache.has(n4) || p4(), n4) });
};
var L = (e4) => {
  let t4 = "";
  const r4 = [], n4 = {}, i4 = [];
  for (const [o4, , , , l4, s4] of e4) {
    "" === t4 && (t4 = o4), r4.push(o4), i4.push(...s4);
    for (const e5 in l4) {
      const t5 = l4[e5];
      (void 0 === n4[e5] || "undefined" !== t5 || s4.includes(t5)) && (n4[e5] = t5);
    }
  }
  return [t4, r4, n4, new Set(i4)];
};
var O = (e4, t4, r4, n4) => {
  const i4 = [];
  e: for (let [o4, l4, s4] of e4) {
    if (s4) continue;
    let e5, a4 = 0, c4 = false;
    for (e5 in o4) {
      const n5 = o4[e5];
      let i5 = t4[e5];
      if (i5 !== n5) {
        if ("object" != typeof i5 || !i5) continue e;
        {
          let e6, t5, o5 = 0;
          for (const l5 in i5) {
            if (n5 === String(i5[l5])) {
              if ("@initial" !== l5) {
                const e7 = l5.slice(1);
                (t5 = t5 || []).push(e7 in r4 ? r4[e7] : l5.replace(/^@media ?/, "")), c4 = true;
              }
              a4 += o5, e6 = true;
            }
            ++o5;
          }
          if (t5 && t5.length && (l4 = { ["@media " + t5.join(", ")]: l4 }), !e6) continue e;
        }
      }
    }
    (i4[a4] = i4[a4] || []).push([n4 ? "cv" : `${e5}-${o4[e5]}`, l4, c4]);
  }
  return i4;
};
var A = {};
var N = o();
var D = (e4, t4) => N(e4, () => (...r4) => {
  const n4 = () => {
    for (let n5 of r4) {
      n5 = "object" == typeof n5 && n5 || {};
      let r5 = z(n5);
      if (!t4.rules.global.cache.has(r5)) {
        if (t4.rules.global.cache.add(r5), "@import" in n5) {
          let e5 = [].indexOf.call(t4.sheet.cssRules, t4.rules.themed.group) - 1;
          for (let r6 of [].concat(n5["@import"])) r6 = r6.includes('"') || r6.includes("'") ? r6 : `"${r6}"`, t4.sheet.insertRule(`@import ${r6};`, e5++);
          delete n5["@import"];
        }
        $(n5, [], [], e4, (e5) => {
          t4.rules.global.apply(e5);
        });
      }
    }
    return "";
  };
  return s(n4, { toString: n4 });
});
var H = o();
var V = (e4, t4) => H(e4, () => (r4) => {
  const n4 = `${S(e4.prefix)}k-${z(r4)}`, i4 = () => {
    if (!t4.rules.global.cache.has(n4)) {
      t4.rules.global.cache.add(n4);
      const i5 = [];
      $(r4, [], [], e4, (e5) => i5.push(e5));
      const o4 = `@keyframes ${n4}{${i5.join("")}}`;
      t4.rules.global.apply(o4);
    }
    return n4;
  };
  return s(i4, { get name() {
    return i4();
  }, toString: i4 });
});
var G = class {
  constructor(e4, t4, r4, n4) {
    this.token = null == e4 ? "" : String(e4), this.value = null == t4 ? "" : String(t4), this.scale = null == r4 ? "" : String(r4), this.prefix = null == n4 ? "" : String(n4);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o();
var J = (e4, t4) => F(e4, () => (r4, n4) => {
  n4 = "object" == typeof r4 && r4 || Object(n4);
  const i4 = `.${r4 = (r4 = "string" == typeof r4 ? r4 : "") || `${S(e4.prefix)}t-${z(n4)}`}`, o4 = {}, l4 = [];
  for (const t5 in n4) {
    o4[t5] = {};
    for (const r5 in n4[t5]) {
      const i5 = `--${S(e4.prefix)}${t5}-${r5}`, s5 = k(String(n4[t5][r5]), e4.prefix, t5);
      o4[t5][r5] = new G(r5, s5, t5, e4.prefix), l4.push(`${i5}:${s5}`);
    }
  }
  const s4 = () => {
    if (l4.length && !t4.rules.themed.cache.has(r4)) {
      t4.rules.themed.cache.add(r4);
      const i5 = `${n4 === e4.theme ? ":root," : ""}.${r4}{${l4.join(";")}}`;
      t4.rules.themed.apply(i5);
    }
    return r4;
  };
  return { ...o4, get className() {
    return s4();
  }, selector: i4, toString: s4 };
});
var U = o();
var Y = o();
var q = (e4) => {
  const t4 = ((e5) => {
    let t5 = false;
    const r4 = U(e5, (e6) => {
      t5 = true;
      const r5 = "prefix" in (e6 = "object" == typeof e6 && e6 || {}) ? String(e6.prefix) : "", i4 = "object" == typeof e6.media && e6.media || {}, o4 = "object" == typeof e6.root ? e6.root || null : globalThis.document || null, l4 = "object" == typeof e6.theme && e6.theme || {}, s4 = { prefix: r5, media: i4, theme: l4, themeMap: "object" == typeof e6.themeMap && e6.themeMap || { ...n }, utils: "object" == typeof e6.utils && e6.utils || {} }, a4 = E(o4), c4 = { css: M(s4, a4), globalCss: D(s4, a4), keyframes: V(s4, a4), createTheme: J(s4, a4), reset() {
        a4.reset(), c4.theme.toString();
      }, theme: {}, sheet: a4, config: s4, prefix: r5, getCssText: a4.toString, toString: a4.toString };
      return String(c4.theme = c4.createTheme(l4)), c4;
    });
    return t5 || r4.reset(), r4;
  })(e4);
  return t4.styled = (({ config: e5, sheet: t5 }) => Y(e5, () => {
    const r4 = M(e5, t5);
    return (...e6) => {
      const t6 = r4(...e6), n4 = t6[l].type, i4 = import_react.default.forwardRef((e7, r5) => {
        const i5 = e7 && e7.as || n4, { props: o4, deferredInjector: l4 } = t6(e7);
        return delete o4.as, o4.ref = r5, l4 ? import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(i5, o4), import_react.default.createElement(l4, null)) : import_react.default.createElement(i5, o4);
      });
      return i4.className = t6.className, i4.displayName = `Styled.${n4.displayName || n4.name || n4}`, i4.selector = t6.selector, i4.toString = () => t6.selector, i4[l] = t6[l], i4;
    };
  }))(t4), t4;
};

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var React19 = __toESM(require_react(), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler == null ? void 0 : originalEventHandler(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler == null ? void 0 : ourEventHandler(event);
    }
  };
}

// node_modules/@radix-ui/react-context/dist/index.mjs
var React6 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React6.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props3) => {
      var _a;
      const { scope, children, ...context } = props3;
      const Context3 = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index2]) || BaseContext;
      const value = React6.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime4.jsx)(Context3.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      var _a;
      const Context3 = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index2]) || BaseContext;
      const context = React6.useContext(Context3);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React6.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React6.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React6.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React9 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React7 = __toESM(require_react(), 1);
function useCallbackRef(callback) {
  const callbackRef = React7.useRef(callback);
  React7.useEffect(() => {
    callbackRef.current = callback;
  });
  return React7.useMemo(() => (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, []);
}

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var React8 = __toESM(require_react(), 1);
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
  React8.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

// node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = React9.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = React9.forwardRef(
  (props3, forwardedRef) => {
    const {
      disableOutsidePointerEvents = false,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      onDismiss,
      ...layerProps
    } = props3;
    const context = React9.useContext(DismissableLayerContext);
    const [node, setNode] = React9.useState(null);
    const ownerDocument = (node == null ? void 0 : node.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document);
    const [, force] = React9.useState({});
    const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index2 = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index2 >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event) => {
      const target = event.target;
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
      if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
      onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event) => {
      const target = event.target;
      const isFocusInBranch = [...context.branches].some((branch) => branch.contains(target));
      if (isFocusInBranch) return;
      onFocusOutside == null ? void 0 : onFocusOutside(event);
      onInteractOutside == null ? void 0 : onInteractOutside(event);
      if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss();
    }, ownerDocument);
    useEscapeKeydown((event) => {
      const isHighestLayer = index2 === context.layers.size - 1;
      if (!isHighestLayer) return;
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
      if (!event.defaultPrevented && onDismiss) {
        event.preventDefault();
        onDismiss();
      }
    }, ownerDocument);
    React9.useEffect(() => {
      if (!node) return;
      if (disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
          ownerDocument.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(node);
      }
      context.layers.add(node);
      dispatchUpdate();
      return () => {
        if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
          ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
        }
      };
    }, [node, ownerDocument, disableOutsidePointerEvents, context]);
    React9.useEffect(() => {
      return () => {
        if (!node) return;
        context.layers.delete(node);
        context.layersWithOutsidePointerEventsDisabled.delete(node);
        dispatchUpdate();
      };
    }, [node, context]);
    React9.useEffect(() => {
      const handleUpdate = () => force({});
      document.addEventListener(CONTEXT_UPDATE, handleUpdate);
      return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return (0, import_jsx_runtime5.jsx)(
      Primitive.div,
      {
        ...layerProps,
        ref: composedRefs,
        style: {
          pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
          ...props3.style
        },
        onFocusCapture: composeEventHandlers(props3.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props3.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(
          props3.onPointerDownCapture,
          pointerDownOutside.onPointerDownCapture
        )
      }
    );
  }
);
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = React9.forwardRef((props3, forwardedRef) => {
  const context = React9.useContext(DismissableLayerContext);
  const ref = React9.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  React9.useEffect(() => {
    const node = ref.current;
    if (node) {
      context.branches.add(node);
      return () => {
        context.branches.delete(node);
      };
    }
  }, [context.branches]);
  return (0, import_jsx_runtime5.jsx)(Primitive.div, { ...props3, ref: composedRefs });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
  const isPointerInsideReactTreeRef = React9.useRef(false);
  const handleClickRef = React9.useRef(() => {
  });
  React9.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function() {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          );
        };
        var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
          ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent2();
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current);
      }
      isPointerInsideReactTreeRef.current = false;
    };
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    return () => {
      window.clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.current);
    };
  }, [ownerDocument, handlePointerDownOutside]);
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
  };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis == null ? void 0 : globalThis.document) {
  const handleFocusOutside = useCallbackRef(onFocusOutside);
  const isFocusInsideReactTreeRef = React9.useRef(false);
  React9.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
          discrete: false
        });
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    return () => ownerDocument.removeEventListener("focusin", handleFocus);
  }, [ownerDocument, handleFocusOutside]);
  return {
    onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
    onBlurCapture: () => isFocusInsideReactTreeRef.current = false
  };
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE);
  document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler, { once: true });
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event);
  } else {
    target.dispatchEvent(event);
  }
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var React10 = __toESM(require_react(), 1);
var useReactId = React10["useId".toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React10.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var React15 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v4) => ({
  x: v4,
  y: v4
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x3,
    y: y4,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y4,
    left: x3,
    right: x3 + width,
    bottom: y4 + height,
    x: x3,
    y: y4
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x3,
    y: y4
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i4 = 0; i4 < validMiddleware.length; i4++) {
    const {
      name,
      fn
    } = validMiddleware[i4];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x3,
      y: y4,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x3 = nextX != null ? nextX : x3;
    y4 = nextY != null ? nextY : y4;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x3,
          y: y4
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i4 = -1;
    }
  }
  return {
    x: x3,
    y: y4,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x3,
    y: y4,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x3,
    y: y4,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x3,
      y: y4,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x3,
      y: y4
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d4) => d4.overflows[0] <= 0).sort((a4, b4) => a4.overflows[1] - b4.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d4) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d4.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d4) => [d4.placement, d4.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a4, b4) => a4[1] - b4[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x3,
        y: y4,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x3 + diffCoords.x,
        y: y4 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x3,
        y: y4,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x4,
              y: y5
            } = _ref;
            return {
              x: x4,
              y: y5
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x3,
        y: y4
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x3,
          y: limitedCoords.y - y4,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x: x3,
        y: y4,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x: x3,
        y: y4
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e4) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css2 = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css2.transform !== "none" || css2.perspective !== "none" || (css2.containerType ? css2.containerType !== "normal" : false) || !webkit && (css2.backdropFilter ? css2.backdropFilter !== "none" : false) || !webkit && (css2.filter ? css2.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css2.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css2.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css2 = getComputedStyle2(element);
  let width = parseFloat(css2.width) || 0;
  let height = parseFloat(css2.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $4
  } = getCssDimensions(domElement);
  let x3 = ($4 ? round(rect.width) : rect.width) / width;
  let y4 = ($4 ? round(rect.height) : rect.height) / height;
  if (!x3 || !Number.isFinite(x3)) {
    x3 = 1;
  }
  if (!y4 || !Number.isFinite(y4)) {
    y4 = 1;
  }
  return {
    x: x3,
    y: y4
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x3 = (clientRect.left + visualOffsets.x) / scale.x;
  let y4 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css2 = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css2.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css2.paddingTop)) * iframeScale.y;
      x3 *= iframeScale.x;
      y4 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x3 += left;
      y4 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x3,
    y: y4
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x3 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y4 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x3 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x3,
    y: y4
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x3 = 0;
  let y4 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x3 = visualViewport.offsetLeft;
      y4 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x3,
    y: y4
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x3 = left * scale.x;
  const y4 = top * scale.y;
  return {
    width,
    height,
    x: x3,
    y: y4
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  let htmlX = 0;
  let htmlY = 0;
  if (documentElement && !isOffsetParentAnElement && !isFixed) {
    const htmlRect = documentElement.getBoundingClientRect();
    htmlY = htmlRect.top + scroll.scrollTop;
    htmlX = htmlRect.left + scroll.scrollLeft - // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect);
  }
  const x3 = rect.left + scroll.scrollLeft - offsets.x - htmlX;
  const y4 = rect.top + scroll.scrollTop - offsets.y - htmlY;
  return {
    x: x3,
    y: y4,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e4) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var arrow2 = arrow;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React11 = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;
function deepEqual(a4, b4) {
  if (a4 === b4) {
    return true;
  }
  if (typeof a4 !== typeof b4) {
    return false;
  }
  if (typeof a4 === "function" && a4.toString() === b4.toString()) {
    return true;
  }
  let length;
  let i4;
  let keys;
  if (a4 && b4 && typeof a4 === "object") {
    if (Array.isArray(a4)) {
      length = a4.length;
      if (length !== b4.length) return false;
      for (i4 = length; i4-- !== 0; ) {
        if (!deepEqual(a4[i4], b4[i4])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a4);
    length = keys.length;
    if (length !== Object.keys(b4).length) {
      return false;
    }
    for (i4 = length; i4-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b4, keys[i4])) {
        return false;
      }
    }
    for (i4 = length; i4-- !== 0; ) {
      const key = keys[i4];
      if (key === "_owner" && a4.$$typeof) {
        continue;
      }
      if (!deepEqual(a4[key], b4[key])) {
        return false;
      }
    }
    return true;
  }
  return a4 !== a4 && b4 !== b4;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React11.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React11.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React11.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React11.useState(null);
  const [_floating, _setFloating] = React11.useState(null);
  const setReference = React11.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React11.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React11.useRef(null);
  const floatingRef = React11.useRef(null);
  const dataRef = React11.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React11.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React11.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React11.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React11.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React11.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x3 = roundByDPR(elements.floating, data.x);
    const y4 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x3 + "px, " + y4 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x3,
      top: y4
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React11.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/@radix-ui/react-arrow/dist/index.mjs
var React12 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var NAME = "Arrow";
var Arrow = React12.forwardRef((props3, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props3;
  return (0, import_jsx_runtime6.jsx)(
    Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props3.asChild ? children : (0, import_jsx_runtime6.jsx)("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow.displayName = NAME;
var Root2 = Arrow;

// node_modules/@radix-ui/react-popper/node_modules/@radix-ui/react-context/dist/index.mjs
var React13 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
function createContextScope2(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React13.createContext(defaultContext);
    const index2 = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props3) {
      const { scope, children, ...context } = props3;
      const Context3 = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const value = React13.useMemo(() => context, Object.values(context));
      return (0, import_jsx_runtime7.jsx)(Context3.Provider, { value, children });
    }
    function useContext22(consumerName, scope) {
      const Context3 = (scope == null ? void 0 : scope[scopeName][index2]) || BaseContext;
      const context = React13.useContext(Context3);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [Provider, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React13.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return React13.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes2(createScope, ...createContextScopeDeps)];
}
function composeContextScopes2(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React13.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var React14 = __toESM(require_react(), 1);
function useSize(element) {
  const [size4, setSize] = React14.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size4;
}

// node_modules/@radix-ui/react-popper/dist/index.mjs
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = createContextScope2(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props3) => {
  const { __scopePopper, children } = props3;
  const [anchor, setAnchor] = React15.useState(null);
  return (0, import_jsx_runtime8.jsx)(PopperProvider, { scope: __scopePopper, anchor, onAnchorChange: setAnchor, children });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = React15.forwardRef(
  (props3, forwardedRef) => {
    const { __scopePopper, virtualRef, ...anchorProps } = props3;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = React15.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    React15.useEffect(() => {
      context.onAnchorChange((virtualRef == null ? void 0 : virtualRef.current) || ref.current);
    });
    return virtualRef ? null : (0, import_jsx_runtime8.jsx)(Primitive.div, { ...anchorProps, ref: composedRefs });
  }
);
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = React15.forwardRef(
  (props3, forwardedRef) => {
    var _a, _b, _c, _d, _e, _f;
    const {
      __scopePopper,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding: collisionPaddingProp = 0,
      sticky = "partial",
      hideWhenDetached = false,
      updatePositionStrategy = "optimized",
      onPlaced,
      ...contentProps
    } = props3;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = React15.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node));
    const [arrow4, setArrow] = React15.useState(null);
    const arrowSize = useSize(arrow4);
    const arrowWidth = (arrowSize == null ? void 0 : arrowSize.width) ?? 0;
    const arrowHeight = (arrowSize == null ? void 0 : arrowSize.height) ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [collisionBoundary];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
      padding: collisionPadding,
      boundary: boundary.filter(isNotNull),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        });
        return cleanup;
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({ mainAxis: sideOffset + arrowHeight, alignmentAxis: alignOffset }),
        avoidCollisions && shift3({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === "partial" ? limitShift3() : void 0,
          ...detectOverflowOptions
        }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached && hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = useCallbackRef(onPlaced);
    useLayoutEffect2(() => {
      if (isPositioned) {
        handlePlaced == null ? void 0 : handlePlaced();
      }
    }, [isPositioned, handlePlaced]);
    const arrowX = (_a = middlewareData.arrow) == null ? void 0 : _a.x;
    const arrowY = (_b = middlewareData.arrow) == null ? void 0 : _b.y;
    const cannotCenterArrow = ((_c = middlewareData.arrow) == null ? void 0 : _c.centerOffset) !== 0;
    const [contentZIndex, setContentZIndex] = React15.useState();
    useLayoutEffect2(() => {
      if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [content]);
    return (0, import_jsx_runtime8.jsx)(
      "div",
      {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: contentZIndex,
          ["--radix-popper-transform-origin"]: [
            (_d = middlewareData.transformOrigin) == null ? void 0 : _d.x,
            (_e = middlewareData.transformOrigin) == null ? void 0 : _e.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((_f = middlewareData.hide) == null ? void 0 : _f.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: props3.dir,
        children: (0, import_jsx_runtime8.jsx)(
          PopperContentProvider,
          {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: (0, import_jsx_runtime8.jsx)(
              Primitive.div,
              {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                  ...contentProps.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: !isPositioned ? "none" : void 0
                }
              }
            )
          }
        )
      }
    );
  }
);
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow = React15.forwardRef(function PopperArrow2(props3, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props3;
  const contentContext = useContentContext(ARROW_NAME, __scopePopper);
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0, import_jsx_runtime8.jsx)(
      "span",
      {
        ref: contentContext.onArrowChange,
        style: {
          position: "absolute",
          left: contentContext.arrowX,
          top: contentContext.arrowY,
          [baseSide]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[contentContext.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[contentContext.placedSide],
          visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: (0, import_jsx_runtime8.jsx)(
          Root2,
          {
            ...arrowProps,
            ref: forwardedRef,
            style: {
              ...arrowProps.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
  return value !== null;
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _a, _b, _c;
    const { placement, rects, middlewareData } = data;
    const cannotCenterArrow = ((_a = middlewareData.arrow) == null ? void 0 : _a.centerOffset) !== 0;
    const isArrowHidden = cannotCenterArrow;
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
    const arrowXCenter = (((_b = middlewareData.arrow) == null ? void 0 : _b.x) ?? 0) + arrowWidth / 2;
    const arrowYCenter = (((_c = middlewareData.arrow) == null ? void 0 : _c.y) ?? 0) + arrowHeight / 2;
    let x3 = "";
    let y4 = "";
    if (placedSide === "bottom") {
      x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y4 = `${-arrowHeight}px`;
    } else if (placedSide === "top") {
      x3 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
      y4 = `${rects.floating.height + arrowHeight}px`;
    } else if (placedSide === "right") {
      x3 = `${-arrowHeight}px`;
      y4 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    } else if (placedSide === "left") {
      x3 = `${rects.floating.width + arrowHeight}px`;
      y4 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
    }
    return { data: { x: x3, y: y4 } };
  }
});
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
var Root22 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow2 = PopperArrow;

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React22 = __toESM(require_react(), 1);
var React16 = __toESM(require_react(), 1);
function useStateMachine(initialState2, machine) {
  return React16.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState2);
}
var Presence = (props3) => {
  const { present, children } = props3;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React22.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef2(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React22.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React22.useState();
  const stylesRef = React22.useRef({});
  const prevPresentRef = React22.useRef(present);
  const prevAnimationNameRef = React22.useRef("none");
  const initialState2 = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState2, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React22.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || (styles == null ? void 0 : styles.display) === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React22.useCallback((node2) => {
      if (node2) stylesRef.current = getComputedStyle(node2);
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return (styles == null ? void 0 : styles.animationName) || "none";
}
function getElementRef2(element) {
  var _a, _b;
  let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React17 = __toESM(require_react(), 1);
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = useCallbackRef(onChange);
  const setValue = React17.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop) handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = React17.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = React17.useRef(value);
  const handleChange = useCallbackRef(onChange);
  React17.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var React18 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var NAME2 = "VisuallyHidden";
var VisuallyHidden = React18.forwardRef(
  (props3, forwardedRef) => {
    return (0, import_jsx_runtime9.jsx)(
      Primitive.span,
      {
        ...props3,
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props3.style
        }
      }
    );
  }
);
VisuallyHidden.displayName = NAME2;
var Root3 = VisuallyHidden;

// node_modules/@radix-ui/react-tooltip/dist/index.mjs
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider = (props3) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props3;
  const [isOpenDelayed, setIsOpenDelayed] = React19.useState(true);
  const isPointerInTransitRef = React19.useRef(false);
  const skipDelayTimerRef = React19.useRef(0);
  React19.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return (0, import_jsx_runtime10.jsx)(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayed,
      delayDuration,
      onOpen: React19.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        setIsOpenDelayed(false);
      }, []),
      onClose: React19.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: React19.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip = (props3) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props3;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props3.__scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = React19.useState(null);
  const contentId = useId();
  const openTimerRef = React19.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = React19.useRef(false);
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange == null ? void 0 : onOpenChange(open2);
    }
  });
  const stateAttribute = React19.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = React19.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = React19.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = React19.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
    }, delayDuration);
  }, [delayDuration, setOpen]);
  React19.useEffect(() => {
    return () => window.clearTimeout(openTimerRef.current);
  }, []);
  return (0, import_jsx_runtime10.jsx)(Root22, { ...popperScope, children: (0, import_jsx_runtime10.jsx)(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: React19.useCallback(() => {
        if (providerContext.isOpenDelayed) handleDelayedOpen();
        else handleOpen();
      }, [providerContext.isOpenDelayed, handleDelayedOpen, handleOpen]),
      onTriggerLeave: React19.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger = React19.forwardRef(
  (props3, forwardedRef) => {
    const { __scopeTooltip, ...triggerProps } = props3;
    const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = React19.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = React19.useRef(false);
    const hasPointerMoveOpenedRef = React19.useRef(false);
    const handlePointerUp = React19.useCallback(() => isPointerDownRef.current = false, []);
    React19.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return (0, import_jsx_runtime10.jsx)(Anchor, { asChild: true, ...popperScope, children: (0, import_jsx_runtime10.jsx)(
      Primitive.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props3.onPointerMove, (event) => {
          if (event.pointerType === "touch") return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props3.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props3.onPointerDown, () => {
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props3.onFocus, () => {
          if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: composeEventHandlers(props3.onBlur, context.onClose),
        onClick: composeEventHandlers(props3.onClick, context.onClose)
      }
    ) });
  }
);
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME2 = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME2, {
  forceMount: void 0
});
var TooltipPortal = (props3) => {
  const { __scopeTooltip, forceMount, children, container } = props3;
  const context = useTooltipContext(PORTAL_NAME2, __scopeTooltip);
  return (0, import_jsx_runtime10.jsx)(PortalProvider, { scope: __scopeTooltip, forceMount, children: (0, import_jsx_runtime10.jsx)(Presence, { present: forceMount || context.open, children: (0, import_jsx_runtime10.jsx)(Portal, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME2;
var CONTENT_NAME2 = "TooltipContent";
var TooltipContent = React19.forwardRef(
  (props3, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME2, props3.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props3;
    const context = useTooltipContext(CONTENT_NAME2, props3.__scopeTooltip);
    return (0, import_jsx_runtime10.jsx)(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? (0, import_jsx_runtime10.jsx)(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : (0, import_jsx_runtime10.jsx)(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }
);
var TooltipContentHoverable = React19.forwardRef((props3, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME2, props3.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME2, props3.__scopeTooltip);
  const ref = React19.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = React19.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = React19.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = React19.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  React19.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  React19.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  React19.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = (trigger == null ? void 0 : trigger.contains(target)) || (content == null ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return (0, import_jsx_runtime10.jsx)(TooltipContentImpl, { ...props3, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var TooltipContentImpl = React19.forwardRef(
  (props3, forwardedRef) => {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props3;
    const context = useTooltipContext(CONTENT_NAME2, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    React19.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    React19.useEffect(() => {
      if (context.trigger) {
        const handleScroll = (event) => {
          const target = event.target;
          if (target == null ? void 0 : target.contains(context.trigger)) onClose();
        };
        window.addEventListener("scroll", handleScroll, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll, { capture: true });
      }
    }, [context.trigger, onClose]);
    return (0, import_jsx_runtime10.jsx)(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: (0, import_jsx_runtime10.jsxs)(
          Content,
          {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              (0, import_jsx_runtime10.jsx)(Slottable, { children }),
              (0, import_jsx_runtime10.jsx)(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: (0, import_jsx_runtime10.jsx)(Root3, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
            ]
          }
        )
      }
    );
  }
);
TooltipContent.displayName = CONTENT_NAME2;
var ARROW_NAME2 = "TooltipArrow";
var TooltipArrow = React19.forwardRef(
  (props3, forwardedRef) => {
    const { __scopeTooltip, ...arrowProps } = props3;
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
      ARROW_NAME2,
      __scopeTooltip
    );
    return visuallyHiddenContentContext.isInside ? null : (0, import_jsx_runtime10.jsx)(Arrow2, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
TooltipArrow.displayName = ARROW_NAME2;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x: x3, y: y4 } = point;
  let inside = false;
  for (let i4 = 0, j3 = polygon.length - 1; i4 < polygon.length; j3 = i4++) {
    const xi = polygon[i4].x;
    const yi = polygon[i4].y;
    const xj = polygon[j3].x;
    const yj = polygon[j3].y;
    const intersect = yi > y4 !== yj > y4 && x3 < (xj - xi) * (y4 - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a4, b4) => {
    if (a4.x < b4.x) return -1;
    else if (a4.x > b4.x) return 1;
    else if (a4.y < b4.y) return -1;
    else if (a4.y > b4.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i4 = 0; i4 < points.length; i4++) {
    const p4 = points[i4];
    while (upperHull.length >= 2) {
      const q3 = upperHull[upperHull.length - 1];
      const r4 = upperHull[upperHull.length - 2];
      if ((q3.x - r4.x) * (p4.y - r4.y) >= (q3.y - r4.y) * (p4.x - r4.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p4);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i4 = points.length - 1; i4 >= 0; i4--) {
    const p4 = points[i4];
    while (lowerHull.length >= 2) {
      const q3 = lowerHull[lowerHull.length - 1];
      const r4 = lowerHull[lowerHull.length - 2];
      if ((q3.x - r4.x) * (p4.y - r4.y) >= (q3.y - r4.y) * (p4.x - r4.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p4);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Root32 = Tooltip;
var Trigger = TooltipTrigger;
var Content2 = TooltipContent;
var Arrow22 = TooltipArrow;

// node_modules/leva/dist/vector-plugin-6f82aee9.esm.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i4;
  for (i4 = 0; i4 < sourceKeys.length; i4++) {
    key = sourceKeys[i4];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i4;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i4 = 0; i4 < sourceSymbolKeys.length; i4++) {
      key = sourceSymbolKeys[i4];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var LevaErrors;
(function(LevaErrors2) {
  LevaErrors2[LevaErrors2["UNSUPPORTED_INPUT"] = 0] = "UNSUPPORTED_INPUT";
  LevaErrors2[LevaErrors2["NO_COMPONENT_FOR_TYPE"] = 1] = "NO_COMPONENT_FOR_TYPE";
  LevaErrors2[LevaErrors2["UNKNOWN_INPUT"] = 2] = "UNKNOWN_INPUT";
  LevaErrors2[LevaErrors2["DUPLICATE_KEYS"] = 3] = "DUPLICATE_KEYS";
  LevaErrors2[LevaErrors2["ALREADY_REGISTERED_TYPE"] = 4] = "ALREADY_REGISTERED_TYPE";
  LevaErrors2[LevaErrors2["CLIPBOARD_ERROR"] = 5] = "CLIPBOARD_ERROR";
  LevaErrors2[LevaErrors2["THEME_ERROR"] = 6] = "THEME_ERROR";
  LevaErrors2[LevaErrors2["PATH_DOESNT_EXIST"] = 7] = "PATH_DOESNT_EXIST";
  LevaErrors2[LevaErrors2["INPUT_TYPE_OVERRIDE"] = 8] = "INPUT_TYPE_OVERRIDE";
  LevaErrors2[LevaErrors2["EMPTY_KEY"] = 9] = "EMPTY_KEY";
})(LevaErrors || (LevaErrors = {}));
var ErrorList = {
  [LevaErrors.UNSUPPORTED_INPUT]: (type, path) => [`An input with type \`${type}\` input was found at path \`${path}\` but it's not supported yet.`],
  [LevaErrors.NO_COMPONENT_FOR_TYPE]: (type, path) => [`Type \`${type}\` found at path \`${path}\` can't be displayed in panel because no component supports it yet.`],
  [LevaErrors.UNKNOWN_INPUT]: (path, value) => [`input at path \`${path}\` is not recognized.`, value],
  [LevaErrors.DUPLICATE_KEYS]: (key, path, prevPath) => [`Key \`${key}\` of path \`${path}\` already exists at path \`${prevPath}\`. Even nested keys need to be unique. Rename one of the keys.`],
  [LevaErrors.ALREADY_REGISTERED_TYPE]: (type) => [`Type ${type} has already been registered. You can't register a component with the same type.`],
  [LevaErrors.CLIPBOARD_ERROR]: (value) => [`Error copying the value`, value],
  [LevaErrors.THEME_ERROR]: (category, key) => [`Error accessing the theme \`${category}.${key}\` value.`],
  [LevaErrors.PATH_DOESNT_EXIST]: (path) => [`Error getting the value at path \`${path}\`. There is probably an error in your \`render\` function.`],
  [LevaErrors.PATH_DOESNT_EXIST]: (path) => [`Error accessing the value at path \`${path}\``],
  [LevaErrors.INPUT_TYPE_OVERRIDE]: (path, type, wrongType) => [`Input at path \`${path}\` already exists with type: \`${type}\`. Its type cannot be overridden with type \`${wrongType}\`.`],
  [LevaErrors.EMPTY_KEY]: () => ["Keys can not be empty, if you want to hide a label use whitespace."]
};
function _log(fn, errorType, ...args) {
  const [message, ...rest2] = ErrorList[errorType](...args);
  console[fn]("LEVA: " + message, ...rest2);
}
var warn = _log.bind(null, "warn");
var log = _log.bind(null, "log");
var _excluded$a = ["value"];
var _excluded2$4 = ["schema"];
var _excluded3$1 = ["value"];
var Schemas = [];
var Plugins = {};
function getValueType(_ref) {
  let {
    value
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$a);
  for (let checker of Schemas) {
    const type = checker(value, settings);
    if (type) return type;
  }
  return void 0;
}
function register(type, _ref2) {
  let {
    schema: schema3
  } = _ref2, plugin2 = _objectWithoutProperties(_ref2, _excluded2$4);
  if (type in Plugins) {
    warn(LevaErrors.ALREADY_REGISTERED_TYPE, type);
    return;
  }
  Schemas.push((value, settings) => schema3(value, settings) && type);
  Plugins[type] = plugin2;
}
function createInternalPlugin(plugin2) {
  return plugin2;
}
function normalize$3(type, input, path, data) {
  const {
    normalize: _normalize
  } = Plugins[type];
  if (_normalize) return _normalize(input, path, data);
  if (typeof input !== "object" || !("value" in input)) return {
    value: input
  };
  const {
    value
  } = input, settings = _objectWithoutProperties(input, _excluded3$1);
  return {
    value,
    settings
  };
}
function sanitize$4(type, value, settings, prevValue, path, store) {
  const {
    sanitize: sanitize3
  } = Plugins[type];
  if (sanitize3) return sanitize3(value, settings, prevValue, path, store);
  return value;
}
function format$2(type, value, settings) {
  const {
    format: format3
  } = Plugins[type];
  if (format3) return format3(value, settings);
  return value;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i4 = 1; i4 < arguments.length; i4++) {
    var source = null != arguments[i4] ? arguments[i4] : {};
    i4 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var clamp2 = (x3, min2, max2) => x3 > max2 ? max2 : x3 < min2 ? min2 : x3;
var parseNumber = (v4) => {
  if (v4 === "" || typeof v4 === "number") return v4;
  try {
    const _v = evaluate2(v4);
    if (!isNaN(_v)) return _v;
  } catch (_unused) {
  }
  return parseFloat(v4);
};
var log10 = Math.log(10);
function getStep(number3) {
  let n4 = Math.abs(+String(number3).replace(".", ""));
  if (n4 === 0) return 0.01;
  while (n4 !== 0 && n4 % 10 === 0) n4 /= 10;
  const significantDigits = Math.floor(Math.log(n4) / log10) + 1;
  const numberLog = Math.floor(Math.log10(Math.abs(number3)));
  const step = Math.pow(10, numberLog - significantDigits);
  return Math.max(step, 1e-3);
}
var range = (v4, min2, max2) => {
  if (max2 === min2) return 0;
  const _v = clamp2(v4, min2, max2);
  return (_v - min2) / (max2 - min2);
};
var invertedRange = (p4, min2, max2) => p4 * (max2 - min2) + min2;
var getUid = () => "_" + Math.random().toString(36).substr(2, 9);
var parens = /\(([0-9+\-*/^ .]+)\)/;
var exp = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/;
var mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/;
var div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/;
var add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/;
var sub = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;
function evaluate2(expr) {
  if (isNaN(Number(expr))) {
    if (parens.test(expr)) {
      const newExpr = expr.replace(parens, (match, subExpr) => String(evaluate2(subExpr)));
      return evaluate2(newExpr);
    } else if (exp.test(expr)) {
      const newExpr = expr.replace(exp, (match, base, pow) => String(Math.pow(Number(base), Number(pow))));
      return evaluate2(newExpr);
    } else if (mul.test(expr)) {
      const newExpr = expr.replace(mul, (match, a4, b4) => String(Number(a4) * Number(b4)));
      return evaluate2(newExpr);
    } else if (div.test(expr)) {
      const newExpr = expr.replace(div, (match, a4, b4) => {
        if (b4 != 0) return String(Number(a4) / Number(b4));
        else throw new Error("Division by zero");
      });
      return evaluate2(newExpr);
    } else if (add.test(expr)) {
      const newExpr = expr.replace(add, (match, a4, b4) => String(Number(a4) + Number(b4)));
      return evaluate2(newExpr);
    } else if (sub.test(expr)) {
      const newExpr = expr.replace(sub, (match, a4, b4) => String(Number(a4) - Number(b4)));
      return evaluate2(newExpr);
    } else {
      return Number(expr);
    }
  }
  return Number(expr);
}
function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (!!object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
function omit(object, keys) {
  const obj = _objectSpread2({}, object);
  keys.forEach((k4) => k4 in object && delete obj[k4]);
  return obj;
}
function mapArrayToKeys(value, keys) {
  return value.reduce((acc, v4, i4) => Object.assign(acc, {
    [keys[i4]]: v4
  }), {});
}
function isObject(variable) {
  return Object.prototype.toString.call(variable) === "[object Object]";
}
var isEmptyObject = (obj) => isObject(obj) && Object.keys(obj).length === 0;
var SpecialInputs;
(function(SpecialInputs2) {
  SpecialInputs2["BUTTON"] = "BUTTON";
  SpecialInputs2["BUTTON_GROUP"] = "BUTTON_GROUP";
  SpecialInputs2["MONITOR"] = "MONITOR";
  SpecialInputs2["FOLDER"] = "FOLDER";
})(SpecialInputs || (SpecialInputs = {}));
var LevaInputs;
(function(LevaInputs2) {
  LevaInputs2["SELECT"] = "SELECT";
  LevaInputs2["IMAGE"] = "IMAGE";
  LevaInputs2["NUMBER"] = "NUMBER";
  LevaInputs2["COLOR"] = "COLOR";
  LevaInputs2["STRING"] = "STRING";
  LevaInputs2["BOOLEAN"] = "BOOLEAN";
  LevaInputs2["INTERVAL"] = "INTERVAL";
  LevaInputs2["VECTOR3D"] = "VECTOR3D";
  LevaInputs2["VECTOR2D"] = "VECTOR2D";
})(LevaInputs || (LevaInputs = {}));
var _excluded$9 = ["type", "__customInput"];
var _excluded2$3 = ["render", "label", "optional", "order", "disabled", "hint", "onChange", "onEditStart", "onEditEnd", "transient"];
var _excluded3 = ["type"];
function parseOptions(_input, key, mergedOptions = {}, customType) {
  var _commonOptions$option, _commonOptions$disabl;
  if (typeof _input !== "object" || Array.isArray(_input)) {
    return {
      type: customType,
      input: _input,
      options: _objectSpread2({
        key,
        label: key,
        optional: false,
        disabled: false,
        order: 0
      }, mergedOptions)
    };
  }
  if ("__customInput" in _input) {
    const {
      type: _type,
      __customInput
    } = _input, options = _objectWithoutProperties(_input, _excluded$9);
    return parseOptions(__customInput, key, options, _type);
  }
  const {
    render: render2,
    label,
    optional: optional2,
    order = 0,
    disabled,
    hint,
    onChange,
    onEditStart,
    onEditEnd,
    transient
  } = _input, inputWithType = _objectWithoutProperties(_input, _excluded2$3);
  const commonOptions = _objectSpread2({
    render: render2,
    key,
    label: label !== null && label !== void 0 ? label : key,
    hint,
    transient: transient !== null && transient !== void 0 ? transient : !!onChange,
    onEditStart,
    onEditEnd,
    disabled,
    optional: optional2,
    order
  }, mergedOptions);
  let {
    type
  } = inputWithType, input = _objectWithoutProperties(inputWithType, _excluded3);
  type = customType !== null && customType !== void 0 ? customType : type;
  if (type in SpecialInputs) {
    return {
      type,
      input,
      options: commonOptions
    };
  }
  let computedInput;
  if (customType && isObject(input) && "value" in input) computedInput = input.value;
  else computedInput = isEmptyObject(input) ? void 0 : input;
  return {
    type,
    input: computedInput,
    options: _objectSpread2(_objectSpread2({}, commonOptions), {}, {
      onChange,
      optional: (_commonOptions$option = commonOptions.optional) !== null && _commonOptions$option !== void 0 ? _commonOptions$option : false,
      disabled: (_commonOptions$disabl = commonOptions.disabled) !== null && _commonOptions$disabl !== void 0 ? _commonOptions$disabl : false
    })
  };
}
function normalizeInput(_input, key, path, data) {
  const parsedInputAndOptions = parseOptions(_input, key);
  const {
    type,
    input: parsedInput,
    options
  } = parsedInputAndOptions;
  if (type) {
    if (type in SpecialInputs)
      return parsedInputAndOptions;
    return {
      type,
      input: normalize$3(type, parsedInput, path, data),
      options
    };
  }
  let inputType = getValueType(parsedInput);
  if (inputType) return {
    type: inputType,
    input: normalize$3(inputType, parsedInput, path, data),
    options
  };
  inputType = getValueType({
    value: parsedInput
  });
  if (inputType) return {
    type: inputType,
    input: normalize$3(inputType, {
      value: parsedInput
    }, path, data),
    options
  };
  return false;
}
function updateInput(input, newValue, path, store, fromPanel) {
  const {
    value,
    type,
    settings
  } = input;
  input.value = sanitizeValue({
    type,
    value,
    settings
  }, newValue, path, store);
  input.fromPanel = fromPanel;
}
var ValueError = function ValueError2(message, value, error) {
  this.type = "LEVA_ERROR";
  this.message = "LEVA: " + message;
  this.previousValue = value;
  this.error = error;
};
function sanitizeValue({
  type,
  value,
  settings
}, newValue, path, store) {
  const _newValue = type !== "SELECT" && typeof newValue === "function" ? newValue(value) : newValue;
  let sanitizedNewValue;
  try {
    sanitizedNewValue = sanitize$4(type, _newValue, settings, value, path, store);
  } catch (e4) {
    throw new ValueError(`The value \`${newValue}\` did not result in a correct value.`, value, e4);
  }
  if (dequal(sanitizedNewValue, value)) {
    return value;
  }
  return sanitizedNewValue;
}
var debounce = (callback, wait, immediate = false) => {
  let timeout = 0;
  return function() {
    const args = arguments;
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, args);
    window.clearTimeout(timeout);
    timeout = window.setTimeout(next, wait);
    if (callNow) next();
  };
};
var multiplyStep = (event) => event.shiftKey ? 5 : event.altKey ? 1 / 5 : 1;
function render(element, container) {
  const error = console.error;
  console.error = () => {
  };
  import_react_dom3.default.render(element, container);
  console.error = error;
}
var _excluded$8 = ["value"];
var _excluded2$2 = ["min", "max"];
var schema$3 = (v4) => {
  if (typeof v4 === "number") return true;
  if (typeof v4 === "string") {
    const _v = parseFloat(v4);
    if (isNaN(_v)) return false;
    const suffix = v4.substring(("" + _v).length).trim();
    return suffix.length < 4;
  }
  return false;
};
var sanitize$3 = (v4, {
  min: _min = -Infinity,
  max: _max = Infinity,
  suffix
}) => {
  const _v = parseFloat(v4);
  if (v4 === "" || isNaN(_v)) throw Error("Invalid number");
  const f4 = clamp2(_v, _min, _max);
  return suffix ? f4 + suffix : f4;
};
var format$1 = (v4, {
  pad: _pad = 0,
  suffix
}) => {
  const f4 = parseFloat(v4).toFixed(_pad);
  return suffix ? f4 + suffix : f4;
};
var normalize$2 = (_ref) => {
  let {
    value
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$8);
  const {
    min: min2 = -Infinity,
    max: max2 = Infinity
  } = settings, _settings = _objectWithoutProperties(settings, _excluded2$2);
  let _value = parseFloat(value);
  const suffix = typeof value === "string" ? value.substring(("" + _value).length) : void 0;
  _value = clamp2(_value, min2, max2);
  let step = settings.step;
  if (!step) {
    if (Number.isFinite(min2)) {
      if (Number.isFinite(max2)) step = +(Math.abs(max2 - min2) / 100).toPrecision(1);
      else step = +(Math.abs(_value - min2) / 100).toPrecision(1);
    } else if (Number.isFinite(max2)) step = +(Math.abs(max2 - _value) / 100).toPrecision(1);
  }
  const padStep = step ? getStep(step) * 10 : getStep(_value);
  step = step || padStep / 10;
  const pad = Math.round(clamp2(Math.log10(1 / padStep), 0, 2));
  return {
    value: suffix ? _value + suffix : _value,
    settings: _objectSpread2({
      initialValue: _value,
      step,
      pad,
      min: min2,
      max: max2,
      suffix
    }, _settings)
  };
};
var sanitizeStep$1 = (v4, {
  step,
  initialValue
}) => {
  const steps = Math.round((v4 - initialValue) / step);
  return initialValue + steps * step;
};
var props$3 = Object.freeze({
  __proto__: null,
  schema: schema$3,
  sanitize: sanitize$3,
  format: format$1,
  normalize: normalize$2,
  sanitizeStep: sanitizeStep$1
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var InputContext = (0, import_react3.createContext)({});
function useInputContext() {
  return (0, import_react3.useContext)(InputContext);
}
var ThemeContext = (0, import_react3.createContext)(null);
var StoreContext = (0, import_react3.createContext)(null);
var PanelSettingsContext = (0, import_react3.createContext)(null);
function useStoreContext() {
  return (0, import_react3.useContext)(StoreContext);
}
function usePanelSettingsContext() {
  return (0, import_react3.useContext)(PanelSettingsContext);
}
function LevaStoreProvider({
  children,
  store
}) {
  return import_react3.default.createElement(StoreContext.Provider, {
    value: store
  }, children);
}
var getDefaultTheme = () => ({
  colors: {
    elevation1: "#292d39",
    elevation2: "#181c20",
    elevation3: "#373c4b",
    accent1: "#0066dc",
    accent2: "#007bff",
    accent3: "#3c93ff",
    highlight1: "#535760",
    highlight2: "#8c92a4",
    highlight3: "#fefefe",
    vivid1: "#ffcc00",
    folderWidgetColor: "$highlight2",
    folderTextColor: "$highlight3",
    toolTipBackground: "$highlight3",
    toolTipText: "$elevation2"
  },
  radii: {
    xs: "2px",
    sm: "3px",
    lg: "10px"
  },
  space: {
    xs: "3px",
    sm: "6px",
    md: "10px",
    rowGap: "7px",
    colGap: "7px"
  },
  fonts: {
    mono: `ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace`,
    sans: `system-ui, sans-serif`
  },
  fontSizes: {
    root: "11px",
    toolTip: "$root"
  },
  sizes: {
    rootWidth: "280px",
    controlWidth: "160px",
    numberInputMinWidth: "38px",
    scrubberWidth: "8px",
    scrubberHeight: "16px",
    rowHeight: "24px",
    folderTitleHeight: "20px",
    checkboxSize: "16px",
    joystickWidth: "100px",
    joystickHeight: "100px",
    colorPickerWidth: "$controlWidth",
    colorPickerHeight: "100px",
    imagePreviewWidth: "$controlWidth",
    imagePreviewHeight: "100px",
    monitorHeight: "60px",
    titleBarHeight: "39px"
  },
  shadows: {
    level1: "0 0 9px 0 #00000088",
    level2: "0 4px 14px #00000033"
  },
  borderWidths: {
    root: "0px",
    input: "1px",
    focus: "1px",
    hover: "1px",
    active: "1px",
    folder: "1px"
  },
  fontWeights: {
    label: "normal",
    folder: "normal",
    button: "normal"
  }
});
function createStateClass(value, options) {
  const [borderColor, bgColor] = value.split(" ");
  const css2 = {};
  if (borderColor !== "none") {
    css2.boxShadow = `${options.inset ? "inset " : ""}0 0 0 $borderWidths${[options.key]} $colors${borderColor !== "default" && borderColor || options.borderColor}`;
  }
  if (bgColor) {
    css2.backgroundColor = bgColor;
  }
  return css2;
}
var utils = {
  $inputStyle: () => (value) => createStateClass(value, {
    key: "$input",
    borderColor: "$highlight1",
    inset: true
  }),
  $focusStyle: () => (value) => createStateClass(value, {
    key: "$focus",
    borderColor: "$accent2"
  }),
  $hoverStyle: () => (value) => createStateClass(value, {
    key: "$hover",
    borderColor: "$accent1",
    inset: true
  }),
  $activeStyle: () => (value) => createStateClass(value, {
    key: "$active",
    borderColor: "$accent1",
    inset: true
  })
};
var {
  styled,
  css,
  createTheme,
  globalCss,
  keyframes
} = q({
  prefix: "leva",
  theme: getDefaultTheme(),
  utils: _objectSpread2(_objectSpread2({}, utils), {}, {
    $flex: () => ({
      display: "flex",
      alignItems: "center"
    }),
    $flexCenter: () => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }),
    $reset: () => ({
      outline: "none",
      fontSize: "inherit",
      fontWeight: "inherit",
      color: "inherit",
      fontFamily: "inherit",
      border: "none",
      backgroundColor: "transparent",
      appearance: "none"
    }),
    $draggable: () => ({
      touchAction: "none",
      WebkitUserDrag: "none",
      userSelect: "none"
    }),
    $focus: (value) => ({
      "&:focus": utils.$focusStyle()(value)
    }),
    $focusWithin: (value) => ({
      "&:focus-within": utils.$focusStyle()(value)
    }),
    $hover: (value) => ({
      "&:hover": utils.$hoverStyle()(value)
    }),
    $active: (value) => ({
      "&:active": utils.$activeStyle()(value)
    })
  })
});
var globalStyles = globalCss({
  ".leva__panel__dragged": {
    WebkitUserDrag: "none",
    userSelect: "none",
    input: {
      userSelect: "none"
    },
    "*": {
      cursor: "ew-resize !important"
    }
  }
});
function mergeTheme(newTheme) {
  const defaultTheme = getDefaultTheme();
  if (!newTheme) return {
    theme: defaultTheme,
    className: ""
  };
  Object.keys(newTheme).forEach((key) => {
    Object.assign(defaultTheme[key], newTheme[key]);
  });
  const customTheme = createTheme(defaultTheme);
  return {
    theme: defaultTheme,
    className: customTheme.className
  };
}
function useTh(category, key) {
  const {
    theme
  } = (0, import_react3.useContext)(ThemeContext);
  if (!(category in theme) || !(key in theme[category])) {
    warn(LevaErrors.THEME_ERROR, category, key);
    return "";
  }
  let _key = key;
  while (true) {
    let value = theme[category][_key];
    if (typeof value === "string" && value.charAt(0) === "$") _key = value.substr(1);
    else return value;
  }
}
var StyledInput = styled("input", {
  $reset: "",
  padding: "0 $sm",
  width: 0,
  minWidth: 0,
  flex: 1,
  height: "100%",
  variants: {
    levaType: {
      number: {
        textAlign: "right"
      }
    },
    as: {
      textarea: {
        padding: "$sm"
      }
    }
  }
});
var InnerLabel = styled("div", {
  $draggable: "",
  height: "100%",
  $flexCenter: "",
  position: "relative",
  padding: "0 $xs",
  fontSize: "0.8em",
  opacity: 0.8,
  cursor: "default",
  touchAction: "none",
  [`& + ${StyledInput}`]: {
    paddingLeft: 0
  }
});
var InnerNumberLabel = styled(InnerLabel, {
  cursor: "ew-resize",
  marginRight: "-$xs",
  textTransform: "uppercase",
  opacity: 0.3,
  "&:hover": {
    opacity: 1
  },
  variants: {
    dragging: {
      true: {
        backgroundColor: "$accent2",
        opacity: 1
      }
    }
  }
});
var InputContainer = styled("div", {
  $flex: "",
  position: "relative",
  borderRadius: "$sm",
  overflow: "hidden",
  color: "inherit",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  $inputStyle: "$elevation1",
  $hover: "",
  $focusWithin: "",
  variants: {
    textArea: {
      true: {
        height: "auto"
      }
    }
  }
});
var _excluded$7 = ["innerLabel", "value", "onUpdate", "onChange", "onKeyDown", "type", "id", "inputType", "rows"];
var _excluded2$1 = ["onUpdate"];
function ValueInput(_ref) {
  let {
    innerLabel,
    value,
    onUpdate,
    onChange,
    onKeyDown,
    type,
    id,
    inputType = "text",
    rows = 0
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$7);
  const {
    id: _id,
    emitOnEditStart,
    emitOnEditEnd,
    disabled
  } = useInputContext();
  const inputId = id || _id;
  const inputRef = (0, import_react3.useRef)(null);
  const isTextArea = rows > 0;
  const asType = isTextArea ? "textarea" : "input";
  const update = (0, import_react3.useCallback)((fn) => (event) => {
    const _value = event.currentTarget.value;
    fn(_value);
  }, []);
  import_react3.default.useEffect(() => {
    const ref = inputRef.current;
    const _onUpdate = update((value2) => {
      onUpdate(value2);
      emitOnEditEnd();
    });
    ref === null || ref === void 0 ? void 0 : ref.addEventListener("blur", _onUpdate);
    return () => ref === null || ref === void 0 ? void 0 : ref.removeEventListener("blur", _onUpdate);
  }, [update, onUpdate, emitOnEditEnd]);
  const onKeyPress = (0, import_react3.useCallback)((event) => {
    if (event.key === "Enter") {
      update(onUpdate)(event);
    }
  }, [update, onUpdate]);
  const inputProps = Object.assign({
    as: asType
  }, isTextArea ? {
    rows
  } : {}, props3);
  return import_react3.default.createElement(InputContainer, {
    textArea: isTextArea
  }, innerLabel && typeof innerLabel === "string" ? import_react3.default.createElement(InnerLabel, null, innerLabel) : innerLabel, import_react3.default.createElement(StyledInput, _extends({
    levaType: type,
    ref: inputRef,
    id: inputId,
    type: inputType,
    autoComplete: "off",
    spellCheck: "false",
    value,
    onChange: update(onChange),
    onFocus: () => emitOnEditStart(),
    onKeyPress,
    onKeyDown,
    disabled
  }, inputProps)));
}
function NumberInput(_ref2) {
  let {
    onUpdate
  } = _ref2, props3 = _objectWithoutProperties(_ref2, _excluded2$1);
  const _onUpdate = (0, import_react3.useCallback)((v4) => onUpdate(parseNumber(v4)), [onUpdate]);
  const onKeyDown = (0, import_react3.useCallback)((event) => {
    const dir = event.key === "ArrowUp" ? 1 : event.key === "ArrowDown" ? -1 : 0;
    if (dir) {
      event.preventDefault();
      const step = event.altKey ? 0.1 : event.shiftKey ? 10 : 1;
      onUpdate((v4) => parseFloat(v4) + dir * step);
    }
  }, [onUpdate]);
  return import_react3.default.createElement(ValueInput, _extends({}, props3, {
    onUpdate: _onUpdate,
    onKeyDown,
    type: "number"
  }));
}
var StyledFolder = styled("div", {});
var StyledWrapper = styled("div", {
  position: "relative",
  background: "$elevation2",
  transition: "height 300ms ease",
  variants: {
    fill: {
      true: {},
      false: {}
    },
    flat: {
      false: {},
      true: {}
    },
    isRoot: {
      true: {},
      false: {
        paddingLeft: "$md",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          width: "$borderWidths$folder",
          height: "100%",
          backgroundColor: "$folderWidgetColor",
          opacity: 0.4,
          transform: "translateX(-50%)"
        }
      }
    }
  },
  compoundVariants: [{
    isRoot: true,
    fill: false,
    css: {
      overflowY: "auto",
      maxHeight: "calc(100vh - 20px - $$titleBarHeight)"
    }
  }, {
    isRoot: true,
    flat: false,
    css: {
      borderRadius: "$lg"
    }
  }]
});
var StyledTitle = styled("div", {
  $flex: "",
  color: "$folderTextColor",
  userSelect: "none",
  cursor: "pointer",
  height: "$folderTitleHeight",
  fontWeight: "$folder",
  "> svg": {
    marginLeft: -4,
    marginRight: 4,
    cursor: "pointer",
    fill: "$folderWidgetColor",
    opacity: 0.6
  },
  "&:hover > svg": {
    fill: "$folderWidgetColor"
  },
  [`&:hover + ${StyledWrapper}::after`]: {
    opacity: 0.6
  },
  [`${StyledFolder}:hover > & + ${StyledWrapper}::after`]: {
    opacity: 0.6
  },
  [`${StyledFolder}:hover > & > svg`]: {
    opacity: 1
  }
});
var StyledContent = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "100%",
  rowGap: "$rowGap",
  transition: "opacity 250ms ease",
  variants: {
    toggled: {
      true: {
        opacity: 1,
        transitionDelay: "250ms"
      },
      false: {
        opacity: 0,
        transitionDelay: "0ms",
        pointerEvents: "none"
      }
    },
    isRoot: {
      true: {
        "& > div": {
          paddingLeft: "$md",
          paddingRight: "$md"
        },
        "& > div:first-of-type": {
          paddingTop: "$sm"
        },
        "& > div:last-of-type": {
          paddingBottom: "$sm"
        },
        [`> ${StyledFolder}:not(:first-of-type)`]: {
          paddingTop: "$sm",
          marginTop: "$md",
          borderTop: "$borderWidths$folder solid $colors$elevation1"
        }
      }
    }
  }
});
var StyledRow = styled("div", {
  position: "relative",
  zIndex: 100,
  display: "grid",
  rowGap: "$rowGap",
  gridTemplateRows: "minmax($sizes$rowHeight, max-content)",
  alignItems: "center",
  color: "$highlight2",
  [`${StyledContent} > &`]: {
    "&:first-of-type": {
      marginTop: "$rowGap"
    },
    "&:last-of-type": {
      marginBottom: "$rowGap"
    }
  },
  variants: {
    disabled: {
      true: {
        pointerEvents: "none"
      },
      false: {
        "&:hover,&:focus-within": {
          color: "$highlight3"
        }
      }
    }
  }
});
var StyledInputRow = styled(StyledRow, {
  gridTemplateColumns: "auto $sizes$controlWidth",
  columnGap: "$colGap"
});
var CopyLabelContainer = styled("div", {
  $flex: "",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  "& > div": {
    marginLeft: "$colGap",
    padding: "0 $xs",
    opacity: 0.4
  },
  "& > div:hover": {
    opacity: 0.8
  },
  "& > div > svg": {
    display: "none",
    cursor: "pointer",
    width: 13,
    minWidth: 13,
    height: 13,
    backgroundColor: "$elevation2"
  },
  "&:hover > div > svg": {
    display: "block"
  },
  variants: {
    align: {
      top: {
        height: "100%",
        alignItems: "flex-start",
        paddingTop: "$sm"
      }
    }
  }
});
var StyledOptionalToggle = styled("input", {
  $reset: "",
  height: 0,
  width: 0,
  opacity: 0,
  margin: 0,
  "& + label": {
    position: "relative",
    $flexCenter: "",
    height: "100%",
    userSelect: "none",
    cursor: "pointer",
    paddingLeft: 2,
    paddingRight: "$sm",
    pointerEvents: "auto"
  },
  "& + label:after": {
    content: '""',
    width: 6,
    height: 6,
    backgroundColor: "$elevation3",
    borderRadius: "50%",
    $activeStyle: ""
  },
  "&:focus + label:after": {
    $focusStyle: ""
  },
  "& + label:active:after": {
    backgroundColor: "$accent1",
    $focusStyle: ""
  },
  "&:checked + label:after": {
    backgroundColor: "$accent1"
  }
});
var StyledLabel = styled("label", {
  fontWeight: "$label",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "& > svg": {
    display: "block"
  }
});
var StyledInputWrapper$1 = styled("div", {
  opacity: 1,
  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        pointerEvents: "none",
        [`& ${StyledLabel}`]: {
          pointerEvents: "auto"
        }
      }
    }
  }
});
var Overlay = styled("div", {
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1e3,
  userSelect: "none"
});
var StyledToolTipContent = styled("div", {
  background: "$toolTipBackground",
  fontFamily: "$sans",
  fontSize: "$toolTip",
  padding: "$xs $sm",
  color: "$toolTipText",
  borderRadius: "$xs",
  boxShadow: "$level2",
  maxWidth: 260
});
var ToolTipArrow = styled(Arrow22, {
  fill: "$toolTipBackground"
});
function Portal2({
  children
}) {
  const {
    className
  } = (0, import_react3.useContext)(ThemeContext);
  return import_react3.default.createElement(Root, {
    className
  }, children);
}
var _excluded$6 = ["align"];
function OptionalToggle() {
  const {
    id,
    disable,
    disabled
  } = useInputContext();
  return import_react3.default.createElement(import_react3.default.Fragment, null, import_react3.default.createElement(StyledOptionalToggle, {
    id: id + "__disable",
    type: "checkbox",
    checked: !disabled,
    onChange: () => disable(!disabled)
  }), import_react3.default.createElement("label", {
    htmlFor: id + "__disable"
  }));
}
function RawLabel(props3) {
  const {
    id,
    optional: optional2,
    hint
  } = useInputContext();
  const htmlFor = props3.htmlFor || (id ? {
    htmlFor: id
  } : null);
  const title = !hint && typeof props3.children === "string" ? {
    title: props3.children
  } : null;
  return import_react3.default.createElement(import_react3.default.Fragment, null, optional2 && import_react3.default.createElement(OptionalToggle, null), hint !== void 0 ? import_react3.default.createElement(Root32, null, import_react3.default.createElement(Trigger, {
    asChild: true
  }, import_react3.default.createElement(StyledLabel, _extends({}, htmlFor, props3))), import_react3.default.createElement(Content2, {
    side: "top",
    sideOffset: 2
  }, import_react3.default.createElement(StyledToolTipContent, null, hint, import_react3.default.createElement(ToolTipArrow, null)))) : import_react3.default.createElement(StyledLabel, _extends({}, htmlFor, title, props3)));
}
function Label(_ref) {
  let {
    align
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$6);
  const {
    value,
    label,
    key,
    disabled
  } = useInputContext();
  const {
    hideCopyButton
  } = usePanelSettingsContext();
  const copyEnabled = !hideCopyButton && key !== void 0;
  const [copied, setCopied] = (0, import_react3.useState)(false);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify({
        [key]: value !== null && value !== void 0 ? value : ""
      }));
      setCopied(true);
    } catch (_unused) {
      warn(LevaErrors.CLIPBOARD_ERROR, {
        [key]: value
      });
    }
  };
  return import_react3.default.createElement(CopyLabelContainer, {
    align,
    onPointerLeave: () => setCopied(false)
  }, import_react3.default.createElement(RawLabel, props3), copyEnabled && !disabled && import_react3.default.createElement("div", {
    title: `Click to copy ${typeof label === "string" ? label : key} value`
  }, !copied ? import_react3.default.createElement("svg", {
    onClick: handleClick,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react3.default.createElement("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), import_react3.default.createElement("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  })) : import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react3.default.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), import_react3.default.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }))));
}
var _excluded$5 = ["toggled"];
var Svg = styled("svg", {
  fill: "currentColor",
  transition: "transform 350ms ease, fill 250ms ease"
});
function Chevron(_ref) {
  let {
    toggled
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$5);
  return import_react3.default.createElement(Svg, _extends({
    width: "9",
    height: "5",
    viewBox: "0 0 9 5",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: `rotate(${toggled ? 0 : -90}deg)`
    }
  }, props3), import_react3.default.createElement("path", {
    d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z"
  }));
}
var _excluded$4 = ["input"];
function Row(_ref) {
  let {
    input
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$4);
  if (input) return import_react3.default.createElement(StyledInputRow, props3);
  return import_react3.default.createElement(StyledRow, props3);
}
function useInputSetters({
  value,
  type,
  settings,
  setValue
}) {
  const [displayValue, setDisplayValue] = (0, import_react3.useState)(format$2(type, value, settings));
  const previousValueRef = (0, import_react3.useRef)(value);
  const settingsRef = (0, import_react3.useRef)(settings);
  settingsRef.current = settings;
  const setFormat = (0, import_react3.useCallback)((v4) => setDisplayValue(format$2(type, v4, settingsRef.current)), [type]);
  const onUpdate = (0, import_react3.useCallback)((updatedValue) => {
    try {
      setValue(updatedValue);
    } catch (error) {
      const {
        type: type2,
        previousValue
      } = error;
      if (type2 !== "LEVA_ERROR") throw error;
      setFormat(previousValue);
    }
  }, [setFormat, setValue]);
  (0, import_react3.useEffect)(() => {
    if (!dequal(value, previousValueRef.current)) {
      setFormat(value);
    }
    previousValueRef.current = value;
  }, [value, setFormat]);
  return {
    displayValue,
    onChange: setDisplayValue,
    onUpdate
  };
}
function useDrag2(handler, config) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  return useDrag((state) => {
    if (state.first) {
      document.body.classList.add("leva__panel__dragged");
      emitOnEditStart === null || emitOnEditStart === void 0 ? void 0 : emitOnEditStart();
    }
    const result = handler(state);
    if (state.last) {
      document.body.classList.remove("leva__panel__dragged");
      emitOnEditEnd === null || emitOnEditEnd === void 0 ? void 0 : emitOnEditEnd();
    }
    return result;
  }, config);
}
function useCanvas2d(fn) {
  const canvas = (0, import_react3.useRef)(null);
  const ctx = (0, import_react3.useRef)(null);
  const hasFired = (0, import_react3.useRef)(false);
  (0, import_react3.useEffect)(() => {
    const handleCanvas = debounce(() => {
      canvas.current.width = canvas.current.offsetWidth * window.devicePixelRatio;
      canvas.current.height = canvas.current.offsetHeight * window.devicePixelRatio;
      fn(canvas.current, ctx.current);
    }, 250);
    window.addEventListener("resize", handleCanvas);
    if (!hasFired.current) {
      handleCanvas();
      hasFired.current = true;
    }
    return () => window.removeEventListener("resize", handleCanvas);
  }, [fn]);
  (0, import_react3.useEffect)(() => {
    ctx.current = canvas.current.getContext("2d");
  }, []);
  return [canvas, ctx];
}
function useTransform() {
  const ref = (0, import_react3.useRef)(null);
  const local = (0, import_react3.useRef)({
    x: 0,
    y: 0
  });
  const set = (0, import_react3.useCallback)((point) => {
    Object.assign(local.current, point);
    if (ref.current) ref.current.style.transform = `translate3d(${local.current.x}px, ${local.current.y}px, 0)`;
  }, []);
  return [ref, set];
}
var _excluded$3 = ["__refCount"];
var getInputAtPath = (data, path) => {
  if (!data[path]) return null;
  const _data$path = data[path], input = _objectWithoutProperties(_data$path, _excluded$3);
  return input;
};
function useInput(path) {
  const store = useStoreContext();
  const [state, setState] = (0, import_react3.useState)(getInputAtPath(store.getData(), path));
  const set = (0, import_react3.useCallback)((value) => store.setValueAtPath(path, value, true), [path, store]);
  const setSettings = (0, import_react3.useCallback)((settings) => store.setSettingsAtPath(path, settings), [path, store]);
  const disable = (0, import_react3.useCallback)((flag) => store.disableInputAtPath(path, flag), [path, store]);
  const emitOnEditStart = (0, import_react3.useCallback)(() => store.emitOnEditStart(path), [path, store]);
  const emitOnEditEnd = (0, import_react3.useCallback)(() => store.emitOnEditEnd(path), [path, store]);
  (0, import_react3.useEffect)(() => {
    setState(getInputAtPath(store.getData(), path));
    const unsub = store.useStore.subscribe((s4) => getInputAtPath(s4.data, path), setState, {
      equalityFn: shallow
    });
    return () => unsub();
  }, [store, path]);
  return [state, {
    set,
    setSettings,
    disable,
    storeId: store.storeId,
    emitOnEditStart,
    emitOnEditEnd
  }];
}
var RangeGrid = styled("div", {
  variants: {
    hasRange: {
      true: {
        position: "relative",
        display: "grid",
        gridTemplateColumns: "auto $sizes$numberInputMinWidth",
        columnGap: "$colGap",
        alignItems: "center"
      }
    }
  }
});
var Range = styled("div", {
  position: "relative",
  width: "100%",
  height: 2,
  borderRadius: "$xs",
  backgroundColor: "$elevation1"
});
var Scrubber = styled("div", {
  position: "absolute",
  width: "$scrubberWidth",
  height: "$scrubberHeight",
  borderRadius: "$xs",
  boxShadow: "0 0 0 2px $colors$elevation2",
  backgroundColor: "$accent2",
  cursor: "pointer",
  $active: "none $accent1",
  $hover: "none $accent3",
  variants: {
    position: {
      left: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        transform: "translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))"
      },
      right: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        transform: "translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))"
      }
    }
  }
});
var RangeWrapper = styled("div", {
  position: "relative",
  $flex: "",
  height: "100%",
  cursor: "pointer",
  touchAction: "none"
});
var Indicator = styled("div", {
  position: "absolute",
  height: "100%",
  backgroundColor: "$accent2"
});
function RangeSlider({
  value,
  min: min2,
  max: max2,
  onDrag,
  step,
  initialValue
}) {
  const ref = (0, import_react3.useRef)(null);
  const scrubberRef = (0, import_react3.useRef)(null);
  const rangeWidth = (0, import_react3.useRef)(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");
  const bind = useDrag2(({
    event,
    first,
    xy: [x3],
    movement: [mx],
    memo
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === scrubberRef.current;
      memo = targetIsScrub ? value : invertedRange((x3 - left) / width, min2, max2);
    }
    const newValue = memo + invertedRange(mx / rangeWidth.current, 0, max2 - min2);
    onDrag(sanitizeStep$1(newValue, {
      step,
      initialValue
    }));
    return memo;
  });
  const pos = range(value, min2, max2);
  return import_react3.default.createElement(RangeWrapper, _extends({
    ref
  }, bind()), import_react3.default.createElement(Range, null, import_react3.default.createElement(Indicator, {
    style: {
      left: 0,
      right: `${(1 - pos) * 100}%`
    }
  })), import_react3.default.createElement(Scrubber, {
    ref: scrubberRef,
    style: {
      left: `calc(${pos} * (100% - ${scrubberWidth}))`
    }
  }));
}
var DraggableLabel = import_react3.default.memo(({
  label,
  onUpdate,
  step,
  innerLabelTrim
}) => {
  const [dragging, setDragging] = (0, import_react3.useState)(false);
  const bind = useDrag2(({
    active,
    delta: [dx],
    event,
    memo: _memo = 0
  }) => {
    setDragging(active);
    _memo += dx / 2;
    if (Math.abs(_memo) >= 1) {
      onUpdate((v4) => parseFloat(v4) + Math.floor(_memo) * step * multiplyStep(event));
      _memo = 0;
    }
    return _memo;
  });
  return import_react3.default.createElement(InnerNumberLabel, _extends({
    dragging,
    title: label.length > 1 ? label : ""
  }, bind()), label.slice(0, innerLabelTrim));
});
function Number$1({
  label,
  id,
  displayValue,
  onUpdate,
  onChange,
  settings,
  innerLabelTrim = 1
}) {
  const InnerLabel2 = innerLabelTrim > 0 && import_react3.default.createElement(DraggableLabel, {
    label,
    step: settings.step,
    onUpdate,
    innerLabelTrim
  });
  return import_react3.default.createElement(NumberInput, {
    id,
    value: String(displayValue),
    onUpdate,
    onChange,
    innerLabel: InnerLabel2
  });
}
function NumberComponent() {
  const props3 = useInputContext();
  const {
    label,
    value,
    onUpdate,
    settings,
    id
  } = props3;
  const {
    min: min2,
    max: max2
  } = settings;
  const hasRange = max2 !== Infinity && min2 !== -Infinity;
  return import_react3.default.createElement(Row, {
    input: true
  }, import_react3.default.createElement(Label, null, label), import_react3.default.createElement(RangeGrid, {
    hasRange
  }, hasRange && import_react3.default.createElement(RangeSlider, _extends({
    value: parseFloat(value),
    onDrag: onUpdate
  }, settings)), import_react3.default.createElement(Number$1, _extends({}, props3, {
    id,
    label: "value",
    innerLabelTrim: hasRange ? 0 : 1
  }))));
}
var {
  sanitizeStep
} = props$3;
var rest = _objectWithoutProperties(props$3, ["sanitizeStep"]);
var number = createInternalPlugin(_objectSpread2({
  component: NumberComponent
}, rest));
var schema$2 = (_o, s4) => v8n_esm_default().schema({
  options: v8n_esm_default().passesAnyOf(v8n_esm_default().object(), v8n_esm_default().array())
}).test(s4);
var sanitize$2 = (value, {
  values
}) => {
  if (values.indexOf(value) < 0) throw Error(`Selected value doesn't match Select options`);
  return value;
};
var format = (value, {
  values
}) => {
  return values.indexOf(value);
};
var normalize$1 = (input) => {
  let {
    value,
    options
  } = input;
  let keys;
  let values;
  if (Array.isArray(options)) {
    values = options;
    keys = options.map((o4) => String(o4));
  } else {
    values = Object.values(options);
    keys = Object.keys(options);
  }
  if (!("value" in input)) value = values[0];
  else if (!values.includes(value)) {
    keys.unshift(String(value));
    values.unshift(value);
  }
  if (!Object.values(options).includes(value)) options[String(value)] = value;
  return {
    value,
    settings: {
      keys,
      values
    }
  };
};
var props$2 = Object.freeze({
  __proto__: null,
  schema: schema$2,
  sanitize: sanitize$2,
  format,
  normalize: normalize$1
});
var SelectContainer = styled("div", {
  $flexCenter: "",
  position: "relative",
  "> svg": {
    pointerEvents: "none",
    position: "absolute",
    right: "$md"
  }
});
var NativeSelect = styled("select", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0
});
var PresentationalSelect = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "$rowHeight",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  padding: "0 $sm",
  cursor: "pointer",
  [`${NativeSelect}:focus + &`]: {
    $focusStyle: ""
  },
  [`${NativeSelect}:hover + &`]: {
    $hoverStyle: ""
  }
});
function Select({
  displayValue,
  value,
  onUpdate,
  id,
  settings,
  disabled
}) {
  const {
    keys,
    values
  } = settings;
  const lastDisplayedValue = (0, import_react3.useRef)();
  if (value === values[displayValue]) {
    lastDisplayedValue.current = keys[displayValue];
  }
  return import_react3.default.createElement(SelectContainer, null, import_react3.default.createElement(NativeSelect, {
    id,
    value: displayValue,
    onChange: (e4) => onUpdate(values[Number(e4.currentTarget.value)]),
    disabled
  }, keys.map((key, index2) => import_react3.default.createElement("option", {
    key,
    value: index2
  }, key))), import_react3.default.createElement(PresentationalSelect, null, lastDisplayedValue.current), import_react3.default.createElement(Chevron, {
    toggled: true
  }));
}
function SelectComponent() {
  const {
    label,
    value,
    displayValue,
    onUpdate,
    id,
    disabled,
    settings
  } = useInputContext();
  return import_react3.default.createElement(Row, {
    input: true
  }, import_react3.default.createElement(Label, null, label), import_react3.default.createElement(Select, {
    id,
    value,
    displayValue,
    onUpdate,
    settings,
    disabled
  }));
}
var select = createInternalPlugin(_objectSpread2({
  component: SelectComponent
}, props$2));
var schema$1 = (o4) => v8n_esm_default().string().test(o4);
var sanitize$1 = (v4) => {
  if (typeof v4 !== "string") throw Error(`Invalid string`);
  return v4;
};
var normalize = ({
  value,
  editable: _editable = true,
  rows: _rows = false
}) => {
  return {
    value,
    settings: {
      editable: _editable,
      rows: typeof _rows === "number" ? _rows : _rows ? 5 : 0
    }
  };
};
var props$1 = Object.freeze({
  __proto__: null,
  schema: schema$1,
  sanitize: sanitize$1,
  normalize
});
var _excluded$2 = ["displayValue", "onUpdate", "onChange", "editable"];
var NonEditableString = styled("div", {
  whiteSpace: "pre-wrap"
});
function String$1(_ref) {
  let {
    displayValue,
    onUpdate,
    onChange,
    editable = true
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$2);
  if (editable) return import_react3.default.createElement(ValueInput, _extends({
    value: displayValue,
    onUpdate,
    onChange
  }, props3));
  return import_react3.default.createElement(NonEditableString, null, displayValue);
}
function StringComponent() {
  const {
    label,
    settings,
    displayValue,
    onUpdate,
    onChange
  } = useInputContext();
  return import_react3.default.createElement(Row, {
    input: true
  }, import_react3.default.createElement(Label, null, label), import_react3.default.createElement(String$1, _extends({
    displayValue,
    onUpdate,
    onChange
  }, settings)));
}
var string = createInternalPlugin(_objectSpread2({
  component: StringComponent
}, props$1));
var schema = (o4) => v8n_esm_default().boolean().test(o4);
var sanitize = (v4) => {
  if (typeof v4 !== "boolean") throw Error("Invalid boolean");
  return v4;
};
var props = Object.freeze({
  __proto__: null,
  schema,
  sanitize
});
var StyledInputWrapper = styled("div", {
  position: "relative",
  $flex: "",
  height: "$rowHeight",
  input: {
    $reset: "",
    height: 0,
    width: 0,
    opacity: 0,
    margin: 0
  },
  label: {
    position: "relative",
    $flexCenter: "",
    userSelect: "none",
    cursor: "pointer",
    height: "$checkboxSize",
    width: "$checkboxSize",
    backgroundColor: "$elevation3",
    borderRadius: "$sm",
    $hover: ""
  },
  "input:focus + label": {
    $focusStyle: ""
  },
  "input:focus:checked + label, input:checked + label:hover": {
    $hoverStyle: "$accent3"
  },
  "input + label:active": {
    backgroundColor: "$accent1"
  },
  "input:checked + label:active": {
    backgroundColor: "$accent1"
  },
  "label > svg": {
    display: "none",
    width: "90%",
    height: "90%",
    stroke: "$highlight3"
  },
  "input:checked + label": {
    backgroundColor: "$accent2"
  },
  "input:checked + label > svg": {
    display: "block"
  }
});
function Boolean2({
  value,
  onUpdate,
  id,
  disabled
}) {
  return import_react3.default.createElement(StyledInputWrapper, null, import_react3.default.createElement("input", {
    id,
    type: "checkbox",
    checked: value,
    onChange: (e4) => onUpdate(e4.currentTarget.checked),
    disabled
  }), import_react3.default.createElement("label", {
    htmlFor: id
  }, import_react3.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, import_react3.default.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  }))));
}
function BooleanComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled,
    id
  } = useInputContext();
  return import_react3.default.createElement(Row, {
    input: true
  }, import_react3.default.createElement(Label, null, label), import_react3.default.createElement(Boolean2, {
    value,
    onUpdate,
    id,
    disabled
  }));
}
var boolean = createInternalPlugin(_objectSpread2({
  component: BooleanComponent
}, props));
var _excluded$1 = ["locked"];
function Coordinate({
  value,
  id,
  valueKey,
  settings,
  onUpdate,
  innerLabelTrim
}) {
  const valueRef = (0, import_react3.useRef)(value[valueKey]);
  valueRef.current = value[valueKey];
  const setValue = (0, import_react3.useCallback)((newValue) => onUpdate({
    [valueKey]: sanitizeValue({
      type: "NUMBER",
      value: valueRef.current,
      settings
    }, newValue)
  }), [onUpdate, settings, valueKey]);
  const number3 = useInputSetters({
    type: "NUMBER",
    value: value[valueKey],
    settings,
    setValue
  });
  return import_react3.default.createElement(Number$1, {
    id,
    label: valueKey,
    value: value[valueKey],
    displayValue: number3.displayValue,
    onUpdate: number3.onUpdate,
    onChange: number3.onChange,
    settings,
    innerLabelTrim
  });
}
var Container = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  gridAutoFlow: "column dense",
  alignItems: "center",
  variants: {
    withLock: {
      true: {
        gridTemplateColumns: "10px auto",
        "> svg": {
          cursor: "pointer"
        }
      }
    }
  }
});
function Lock(_ref) {
  let {
    locked
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$1);
  return import_react3.default.createElement("svg", _extends({
    width: "10",
    height: "10",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props3), locked ? import_react3.default.createElement("path", {
    d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }) : import_react3.default.createElement("path", {
    d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
function Vector({
  value,
  onUpdate,
  settings,
  innerLabelTrim
}) {
  const {
    id,
    setSettings
  } = useInputContext();
  const {
    lock,
    locked
  } = settings;
  return import_react3.default.createElement(Container, {
    withLock: lock
  }, lock && import_react3.default.createElement(Lock, {
    locked,
    onClick: () => setSettings({
      locked: !locked
    })
  }), Object.keys(value).map((key, i4) => import_react3.default.createElement(Coordinate, {
    id: i4 === 0 ? id : `${id}.${key}`,
    key,
    valueKey: key,
    value,
    settings: settings[key],
    onUpdate,
    innerLabelTrim
  })));
}
var normalizeKeyedNumberSettings = (value, settings) => {
  const _settings = {};
  let maxStep = 0;
  let minPad = Infinity;
  Object.entries(value).forEach(([key, v4]) => {
    _settings[key] = normalize$2(_objectSpread2({
      value: v4
    }, settings[key])).settings;
    maxStep = Math.max(maxStep, _settings[key].step);
    minPad = Math.min(minPad, _settings[key].pad);
  });
  for (let key in _settings) {
    const {
      step,
      min: min2,
      max: max2
    } = settings[key] || {};
    if (!isFinite(step) && (!isFinite(min2) || !isFinite(max2))) {
      _settings[key].step = maxStep;
      _settings[key].pad = minPad;
    }
  }
  return _settings;
};
var _excluded = ["lock"];
var _excluded2 = ["value"];
function getVectorSchema(dimension) {
  const isVectorArray = v8n_esm_default().array().length(dimension).every.number();
  const isVectorObject = (o4) => {
    if (!o4 || typeof o4 !== "object") return false;
    const values = Object.values(o4);
    return values.length === dimension && values.every((v4) => isFinite(v4));
  };
  return (o4) => {
    return isVectorArray.test(o4) || isVectorObject(o4);
  };
}
function getVectorType(value) {
  return Array.isArray(value) ? "array" : "object";
}
function convert(value, format3, keys) {
  if (getVectorType(value) === format3) return value;
  return format3 === "array" ? Object.values(value) : mapArrayToKeys(value, keys);
}
var sanitizeVector = (value, settings, previousValue) => {
  const _value = convert(value, "object", settings.keys);
  for (let key in _value) _value[key] = sanitize$3(_value[key], settings[key]);
  const _valueKeys = Object.keys(_value);
  let newValue = {};
  if (_valueKeys.length === settings.keys.length) newValue = _value;
  else {
    const _previousValue = convert(previousValue, "object", settings.keys);
    if (_valueKeys.length === 1 && settings.locked) {
      const lockedKey = _valueKeys[0];
      const lockedCoordinate = _value[lockedKey];
      const previousLockedCoordinate = _previousValue[lockedKey];
      const ratio = previousLockedCoordinate !== 0 ? lockedCoordinate / previousLockedCoordinate : 1;
      for (let key in _previousValue) {
        if (key === lockedKey) newValue[lockedKey] = lockedCoordinate;
        else newValue[key] = _previousValue[key] * ratio;
      }
    } else {
      newValue = _objectSpread2(_objectSpread2({}, _previousValue), _value);
    }
  }
  return convert(newValue, settings.format, settings.keys);
};
var formatVector = (value, settings) => convert(value, "object", settings.keys);
var isNumberSettings = (o4) => !!o4 && ("step" in o4 || "min" in o4 || "max" in o4);
function normalizeVector(value, settings, defaultKeys = []) {
  const {
    lock = false
  } = settings, _settings = _objectWithoutProperties(settings, _excluded);
  const format3 = Array.isArray(value) ? "array" : "object";
  const keys = format3 === "object" ? Object.keys(value) : defaultKeys;
  const _value = convert(value, "object", keys);
  const mergedSettings = isNumberSettings(_settings) ? keys.reduce((acc, k4) => Object.assign(acc, {
    [k4]: _settings
  }), {}) : _settings;
  const numberSettings = normalizeKeyedNumberSettings(_value, mergedSettings);
  return {
    value: format3 === "array" ? value : _value,
    settings: _objectSpread2(_objectSpread2({}, numberSettings), {}, {
      format: format3,
      keys,
      lock,
      locked: false
    })
  };
}
function getVectorPlugin(defaultKeys) {
  return {
    schema: getVectorSchema(defaultKeys.length),
    normalize: (_ref) => {
      let {
        value
      } = _ref, settings = _objectWithoutProperties(_ref, _excluded2);
      return normalizeVector(value, settings, defaultKeys);
    },
    format: (value, settings) => formatVector(value, settings),
    sanitize: (value, settings, prevValue) => sanitizeVector(value, settings, prevValue)
  };
}

// node_modules/colord/index.mjs
var r2 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t2 = function(r4) {
  return "string" == typeof r4 ? r4.length > 0 : "number" == typeof r4;
};
var n2 = function(r4, t4, n4) {
  return void 0 === t4 && (t4 = 0), void 0 === n4 && (n4 = Math.pow(10, t4)), Math.round(n4 * r4) / n4 + 0;
};
var e2 = function(r4, t4, n4) {
  return void 0 === t4 && (t4 = 0), void 0 === n4 && (n4 = 1), r4 > n4 ? n4 : r4 > t4 ? r4 : t4;
};
var u2 = function(r4) {
  return (r4 = isFinite(r4) ? r4 % 360 : 0) > 0 ? r4 : r4 + 360;
};
var a2 = function(r4) {
  return { r: e2(r4.r, 0, 255), g: e2(r4.g, 0, 255), b: e2(r4.b, 0, 255), a: e2(r4.a) };
};
var o2 = function(r4) {
  return { r: n2(r4.r), g: n2(r4.g), b: n2(r4.b), a: n2(r4.a, 3) };
};
var i2 = /^#([0-9a-f]{3,8})$/i;
var s2 = function(r4) {
  var t4 = r4.toString(16);
  return t4.length < 2 ? "0" + t4 : t4;
};
var h2 = function(r4) {
  var t4 = r4.r, n4 = r4.g, e4 = r4.b, u4 = r4.a, a4 = Math.max(t4, n4, e4), o4 = a4 - Math.min(t4, n4, e4), i4 = o4 ? a4 === t4 ? (n4 - e4) / o4 : a4 === n4 ? 2 + (e4 - t4) / o4 : 4 + (t4 - n4) / o4 : 0;
  return { h: 60 * (i4 < 0 ? i4 + 6 : i4), s: a4 ? o4 / a4 * 100 : 0, v: a4 / 255 * 100, a: u4 };
};
var b2 = function(r4) {
  var t4 = r4.h, n4 = r4.s, e4 = r4.v, u4 = r4.a;
  t4 = t4 / 360 * 6, n4 /= 100, e4 /= 100;
  var a4 = Math.floor(t4), o4 = e4 * (1 - n4), i4 = e4 * (1 - (t4 - a4) * n4), s4 = e4 * (1 - (1 - t4 + a4) * n4), h4 = a4 % 6;
  return { r: 255 * [e4, i4, o4, o4, s4, e4][h4], g: 255 * [s4, e4, e4, i4, o4, o4][h4], b: 255 * [o4, o4, s4, e4, e4, i4][h4], a: u4 };
};
var g2 = function(r4) {
  return { h: u2(r4.h), s: e2(r4.s, 0, 100), l: e2(r4.l, 0, 100), a: e2(r4.a) };
};
var d2 = function(r4) {
  return { h: n2(r4.h), s: n2(r4.s), l: n2(r4.l), a: n2(r4.a, 3) };
};
var f2 = function(r4) {
  return b2((n4 = (t4 = r4).s, { h: t4.h, s: (n4 *= ((e4 = t4.l) < 50 ? e4 : 100 - e4) / 100) > 0 ? 2 * n4 / (e4 + n4) * 100 : 0, v: e4 + n4, a: t4.a }));
  var t4, n4, e4;
};
var c2 = function(r4) {
  return { h: (t4 = h2(r4)).h, s: (u4 = (200 - (n4 = t4.s)) * (e4 = t4.v) / 100) > 0 && u4 < 200 ? n4 * e4 / 100 / (u4 <= 100 ? u4 : 200 - u4) * 100 : 0, l: u4 / 2, a: t4.a };
  var t4, n4, e4, u4;
};
var l2 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p2 = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v2 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m2 = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y2 = { string: [[function(r4) {
  var t4 = i2.exec(r4);
  return t4 ? (r4 = t4[1]).length <= 4 ? { r: parseInt(r4[0] + r4[0], 16), g: parseInt(r4[1] + r4[1], 16), b: parseInt(r4[2] + r4[2], 16), a: 4 === r4.length ? n2(parseInt(r4[3] + r4[3], 16) / 255, 2) : 1 } : 6 === r4.length || 8 === r4.length ? { r: parseInt(r4.substr(0, 2), 16), g: parseInt(r4.substr(2, 2), 16), b: parseInt(r4.substr(4, 2), 16), a: 8 === r4.length ? n2(parseInt(r4.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r4) {
  var t4 = v2.exec(r4) || m2.exec(r4);
  return t4 ? t4[2] !== t4[4] || t4[4] !== t4[6] ? null : a2({ r: Number(t4[1]) / (t4[2] ? 100 / 255 : 1), g: Number(t4[3]) / (t4[4] ? 100 / 255 : 1), b: Number(t4[5]) / (t4[6] ? 100 / 255 : 1), a: void 0 === t4[7] ? 1 : Number(t4[7]) / (t4[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t4) {
  var n4 = l2.exec(t4) || p2.exec(t4);
  if (!n4) return null;
  var e4, u4, a4 = g2({ h: (e4 = n4[1], u4 = n4[2], void 0 === u4 && (u4 = "deg"), Number(e4) * (r2[u4] || 1)), s: Number(n4[3]), l: Number(n4[4]), a: void 0 === n4[5] ? 1 : Number(n4[5]) / (n4[6] ? 100 : 1) });
  return f2(a4);
}, "hsl"]], object: [[function(r4) {
  var n4 = r4.r, e4 = r4.g, u4 = r4.b, o4 = r4.a, i4 = void 0 === o4 ? 1 : o4;
  return t2(n4) && t2(e4) && t2(u4) ? a2({ r: Number(n4), g: Number(e4), b: Number(u4), a: Number(i4) }) : null;
}, "rgb"], [function(r4) {
  var n4 = r4.h, e4 = r4.s, u4 = r4.l, a4 = r4.a, o4 = void 0 === a4 ? 1 : a4;
  if (!t2(n4) || !t2(e4) || !t2(u4)) return null;
  var i4 = g2({ h: Number(n4), s: Number(e4), l: Number(u4), a: Number(o4) });
  return f2(i4);
}, "hsl"], [function(r4) {
  var n4 = r4.h, a4 = r4.s, o4 = r4.v, i4 = r4.a, s4 = void 0 === i4 ? 1 : i4;
  if (!t2(n4) || !t2(a4) || !t2(o4)) return null;
  var h4 = function(r5) {
    return { h: u2(r5.h), s: e2(r5.s, 0, 100), v: e2(r5.v, 0, 100), a: e2(r5.a) };
  }({ h: Number(n4), s: Number(a4), v: Number(o4), a: Number(s4) });
  return b2(h4);
}, "hsv"]] };
var N2 = function(r4, t4) {
  for (var n4 = 0; n4 < t4.length; n4++) {
    var e4 = t4[n4][0](r4);
    if (e4) return [e4, t4[n4][1]];
  }
  return [null, void 0];
};
var x2 = function(r4) {
  return "string" == typeof r4 ? N2(r4.trim(), y2.string) : "object" == typeof r4 && null !== r4 ? N2(r4, y2.object) : [null, void 0];
};
var I2 = function(r4) {
  return x2(r4)[1];
};
var M2 = function(r4, t4) {
  var n4 = c2(r4);
  return { h: n4.h, s: e2(n4.s + 100 * t4, 0, 100), l: n4.l, a: n4.a };
};
var H2 = function(r4) {
  return (299 * r4.r + 587 * r4.g + 114 * r4.b) / 1e3 / 255;
};
var $2 = function(r4, t4) {
  var n4 = c2(r4);
  return { h: n4.h, s: n4.s, l: e2(n4.l + 100 * t4, 0, 100), a: n4.a };
};
var j2 = function() {
  function r4(r5) {
    this.parsed = x2(r5)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r4.prototype.isValid = function() {
    return null !== this.parsed;
  }, r4.prototype.brightness = function() {
    return n2(H2(this.rgba), 2);
  }, r4.prototype.isDark = function() {
    return H2(this.rgba) < 0.5;
  }, r4.prototype.isLight = function() {
    return H2(this.rgba) >= 0.5;
  }, r4.prototype.toHex = function() {
    return r5 = o2(this.rgba), t4 = r5.r, e4 = r5.g, u4 = r5.b, i4 = (a4 = r5.a) < 1 ? s2(n2(255 * a4)) : "", "#" + s2(t4) + s2(e4) + s2(u4) + i4;
    var r5, t4, e4, u4, a4, i4;
  }, r4.prototype.toRgb = function() {
    return o2(this.rgba);
  }, r4.prototype.toRgbString = function() {
    return r5 = o2(this.rgba), t4 = r5.r, n4 = r5.g, e4 = r5.b, (u4 = r5.a) < 1 ? "rgba(" + t4 + ", " + n4 + ", " + e4 + ", " + u4 + ")" : "rgb(" + t4 + ", " + n4 + ", " + e4 + ")";
    var r5, t4, n4, e4, u4;
  }, r4.prototype.toHsl = function() {
    return d2(c2(this.rgba));
  }, r4.prototype.toHslString = function() {
    return r5 = d2(c2(this.rgba)), t4 = r5.h, n4 = r5.s, e4 = r5.l, (u4 = r5.a) < 1 ? "hsla(" + t4 + ", " + n4 + "%, " + e4 + "%, " + u4 + ")" : "hsl(" + t4 + ", " + n4 + "%, " + e4 + "%)";
    var r5, t4, n4, e4, u4;
  }, r4.prototype.toHsv = function() {
    return r5 = h2(this.rgba), { h: n2(r5.h), s: n2(r5.s), v: n2(r5.v), a: n2(r5.a, 3) };
    var r5;
  }, r4.prototype.invert = function() {
    return w2({ r: 255 - (r5 = this.rgba).r, g: 255 - r5.g, b: 255 - r5.b, a: r5.a });
    var r5;
  }, r4.prototype.saturate = function(r5) {
    return void 0 === r5 && (r5 = 0.1), w2(M2(this.rgba, r5));
  }, r4.prototype.desaturate = function(r5) {
    return void 0 === r5 && (r5 = 0.1), w2(M2(this.rgba, -r5));
  }, r4.prototype.grayscale = function() {
    return w2(M2(this.rgba, -1));
  }, r4.prototype.lighten = function(r5) {
    return void 0 === r5 && (r5 = 0.1), w2($2(this.rgba, r5));
  }, r4.prototype.darken = function(r5) {
    return void 0 === r5 && (r5 = 0.1), w2($2(this.rgba, -r5));
  }, r4.prototype.rotate = function(r5) {
    return void 0 === r5 && (r5 = 15), this.hue(this.hue() + r5);
  }, r4.prototype.alpha = function(r5) {
    return "number" == typeof r5 ? w2({ r: (t4 = this.rgba).r, g: t4.g, b: t4.b, a: r5 }) : n2(this.rgba.a, 3);
    var t4;
  }, r4.prototype.hue = function(r5) {
    var t4 = c2(this.rgba);
    return "number" == typeof r5 ? w2({ h: r5, s: t4.s, l: t4.l, a: t4.a }) : n2(t4.h);
  }, r4.prototype.isEqual = function(r5) {
    return this.toHex() === w2(r5).toHex();
  }, r4;
}();
var w2 = function(r4) {
  return r4 instanceof j2 ? r4 : new j2(r4);
};
var S2 = [];
var k2 = function(r4) {
  r4.forEach(function(r5) {
    S2.indexOf(r5) < 0 && (r5(j2, y2), S2.push(r5));
  });
};

// node_modules/colord/plugins/names.mjs
function names_default(e4, f4) {
  var a4 = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, r4 = {};
  for (var d4 in a4) r4[a4[d4]] = d4;
  var l4 = {};
  e4.prototype.toName = function(f5) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var d5, i4, n4 = r4[this.toHex()];
    if (n4) return n4;
    if (null == f5 ? void 0 : f5.closest) {
      var o4 = this.toRgb(), t4 = 1 / 0, b4 = "black";
      if (!l4.length) for (var c4 in a4) l4[c4] = new e4(a4[c4]).toRgb();
      for (var g4 in a4) {
        var u4 = (d5 = o4, i4 = l4[g4], Math.pow(d5.r - i4.r, 2) + Math.pow(d5.g - i4.g, 2) + Math.pow(d5.b - i4.b, 2));
        u4 < t4 && (t4 = u4, b4 = g4);
      }
      return b4;
    }
  };
  f4.string.push([function(f5) {
    var r5 = f5.toLowerCase(), d5 = "transparent" === r5 ? "#0000" : a4[r5];
    return d5 ? new e4(d5).toRgb() : null;
  }, "name"]);
}

// node_modules/leva/dist/leva.esm.js
var import_react_dom4 = __toESM(require_react_dom());
var import_react8 = __toESM(require_react());

// node_modules/react-colorful/dist/index.mjs
var import_react6 = __toESM(require_react(), 1);
function u3() {
  return (u3 = Object.assign || function(e4) {
    for (var r4 = 1; r4 < arguments.length; r4++) {
      var t4 = arguments[r4];
      for (var n4 in t4) Object.prototype.hasOwnProperty.call(t4, n4) && (e4[n4] = t4[n4]);
    }
    return e4;
  }).apply(this, arguments);
}
function c3(e4, r4) {
  if (null == e4) return {};
  var t4, n4, o4 = {}, a4 = Object.keys(e4);
  for (n4 = 0; n4 < a4.length; n4++) r4.indexOf(t4 = a4[n4]) >= 0 || (o4[t4] = e4[t4]);
  return o4;
}
function i3(e4) {
  var t4 = (0, import_react6.useRef)(e4), n4 = (0, import_react6.useRef)(function(e5) {
    t4.current && t4.current(e5);
  });
  return t4.current = e4, n4.current;
}
var s3 = function(e4, r4, t4) {
  return void 0 === r4 && (r4 = 0), void 0 === t4 && (t4 = 1), e4 > t4 ? t4 : e4 < r4 ? r4 : e4;
};
var f3 = function(e4) {
  return "touches" in e4;
};
var v3 = function(e4) {
  return e4 && e4.ownerDocument.defaultView || self;
};
var d3 = function(e4, r4, t4) {
  var n4 = e4.getBoundingClientRect(), o4 = f3(r4) ? function(e5, r5) {
    for (var t5 = 0; t5 < e5.length; t5++) if (e5[t5].identifier === r5) return e5[t5];
    return e5[0];
  }(r4.touches, t4) : r4;
  return { left: s3((o4.pageX - (n4.left + v3(e4).pageXOffset)) / n4.width), top: s3((o4.pageY - (n4.top + v3(e4).pageYOffset)) / n4.height) };
};
var h3 = function(e4) {
  !f3(e4) && e4.preventDefault();
};
var m3 = import_react6.default.memo(function(o4) {
  var a4 = o4.onMove, l4 = o4.onKey, s4 = c3(o4, ["onMove", "onKey"]), m4 = (0, import_react6.useRef)(null), g4 = i3(a4), p4 = i3(l4), b4 = (0, import_react6.useRef)(null), _2 = (0, import_react6.useRef)(false), x3 = (0, import_react6.useMemo)(function() {
    var e4 = function(e5) {
      h3(e5), (f3(e5) ? e5.touches.length > 0 : e5.buttons > 0) && m4.current ? g4(d3(m4.current, e5, b4.current)) : t4(false);
    }, r4 = function() {
      return t4(false);
    };
    function t4(t5) {
      var n4 = _2.current, o5 = v3(m4.current), a5 = t5 ? o5.addEventListener : o5.removeEventListener;
      a5(n4 ? "touchmove" : "mousemove", e4), a5(n4 ? "touchend" : "mouseup", r4);
    }
    return [function(e5) {
      var r5 = e5.nativeEvent, n4 = m4.current;
      if (n4 && (h3(r5), !function(e6, r6) {
        return r6 && !f3(e6);
      }(r5, _2.current) && n4)) {
        if (f3(r5)) {
          _2.current = true;
          var o5 = r5.changedTouches || [];
          o5.length && (b4.current = o5[0].identifier);
        }
        n4.focus(), g4(d3(n4, r5, b4.current)), t4(true);
      }
    }, function(e5) {
      var r5 = e5.which || e5.keyCode;
      r5 < 37 || r5 > 40 || (e5.preventDefault(), p4({ left: 39 === r5 ? 0.05 : 37 === r5 ? -0.05 : 0, top: 40 === r5 ? 0.05 : 38 === r5 ? -0.05 : 0 }));
    }, t4];
  }, [p4, g4]), C2 = x3[0], E2 = x3[1], H3 = x3[2];
  return (0, import_react6.useEffect)(function() {
    return H3;
  }, [H3]), import_react6.default.createElement("div", u3({}, s4, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m4, onKeyDown: E2, tabIndex: 0, role: "slider" }));
});
var g3 = function(e4) {
  return e4.filter(Boolean).join(" ");
};
var p3 = function(r4) {
  var t4 = r4.color, n4 = r4.left, o4 = r4.top, a4 = void 0 === o4 ? 0.5 : o4, l4 = g3(["react-colorful__pointer", r4.className]);
  return import_react6.default.createElement("div", { className: l4, style: { top: 100 * a4 + "%", left: 100 * n4 + "%" } }, import_react6.default.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t4 } }));
};
var b3 = function(e4, r4, t4) {
  return void 0 === r4 && (r4 = 0), void 0 === t4 && (t4 = Math.pow(10, r4)), Math.round(t4 * e4) / t4;
};
var _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var y3 = function(e4) {
  var r4 = e4.s, t4 = e4.v, n4 = e4.a, o4 = (200 - r4) * t4 / 100;
  return { h: b3(e4.h), s: b3(o4 > 0 && o4 < 200 ? r4 * t4 / 100 / (o4 <= 100 ? o4 : 200 - o4) * 100 : 0), l: b3(o4 / 2), a: b3(n4, 2) };
};
var q2 = function(e4) {
  var r4 = y3(e4);
  return "hsl(" + r4.h + ", " + r4.s + "%, " + r4.l + "%)";
};
var k3 = function(e4) {
  var r4 = y3(e4);
  return "hsla(" + r4.h + ", " + r4.s + "%, " + r4.l + "%, " + r4.a + ")";
};
var I3 = function(e4) {
  var r4 = e4.h, t4 = e4.s, n4 = e4.v, o4 = e4.a;
  r4 = r4 / 360 * 6, t4 /= 100, n4 /= 100;
  var a4 = Math.floor(r4), l4 = n4 * (1 - t4), u4 = n4 * (1 - (r4 - a4) * t4), c4 = n4 * (1 - (1 - r4 + a4) * t4), i4 = a4 % 6;
  return { r: b3(255 * [n4, u4, l4, l4, c4, n4][i4]), g: b3(255 * [c4, n4, n4, u4, l4, l4][i4]), b: b3(255 * [l4, l4, c4, n4, n4, u4][i4]), a: b3(o4, 2) };
};
var L2 = function(e4) {
  var r4 = e4.r, t4 = e4.g, n4 = e4.b, o4 = e4.a, a4 = Math.max(r4, t4, n4), l4 = a4 - Math.min(r4, t4, n4), u4 = l4 ? a4 === r4 ? (t4 - n4) / l4 : a4 === t4 ? 2 + (n4 - r4) / l4 : 4 + (r4 - t4) / l4 : 0;
  return { h: b3(60 * (u4 < 0 ? u4 + 6 : u4)), s: b3(a4 ? l4 / a4 * 100 : 0), v: b3(a4 / 255 * 100), a: o4 };
};
var S3 = import_react6.default.memo(function(r4) {
  var t4 = r4.hue, n4 = r4.onChange, o4 = g3(["react-colorful__hue", r4.className]);
  return import_react6.default.createElement("div", { className: o4 }, import_react6.default.createElement(m3, { onMove: function(e4) {
    n4({ h: 360 * e4.left });
  }, onKey: function(e4) {
    n4({ h: s3(t4 + 360 * e4.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": b3(t4), "aria-valuemax": "360", "aria-valuemin": "0" }, import_react6.default.createElement(p3, { className: "react-colorful__hue-pointer", left: t4 / 360, color: q2({ h: t4, s: 100, v: 100, a: 1 }) })));
});
var T2 = import_react6.default.memo(function(r4) {
  var t4 = r4.hsva, n4 = r4.onChange, o4 = { backgroundColor: q2({ h: t4.h, s: 100, v: 100, a: 1 }) };
  return import_react6.default.createElement("div", { className: "react-colorful__saturation", style: o4 }, import_react6.default.createElement(m3, { onMove: function(e4) {
    n4({ s: 100 * e4.left, v: 100 - 100 * e4.top });
  }, onKey: function(e4) {
    n4({ s: s3(t4.s + 100 * e4.left, 0, 100), v: s3(t4.v - 100 * e4.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + b3(t4.s) + "%, Brightness " + b3(t4.v) + "%" }, import_react6.default.createElement(p3, { className: "react-colorful__saturation-pointer", top: 1 - t4.v / 100, left: t4.s / 100, color: q2(t4) })));
});
var F2 = function(e4, r4) {
  if (e4 === r4) return true;
  for (var t4 in e4) if (e4[t4] !== r4[t4]) return false;
  return true;
};
function Y2(e4, t4, l4) {
  var u4 = i3(l4), c4 = (0, import_react6.useState)(function() {
    return e4.toHsva(t4);
  }), s4 = c4[0], f4 = c4[1], v4 = (0, import_react6.useRef)({ color: t4, hsva: s4 });
  (0, import_react6.useEffect)(function() {
    if (!e4.equal(t4, v4.current.color)) {
      var r4 = e4.toHsva(t4);
      v4.current = { hsva: r4, color: t4 }, f4(r4);
    }
  }, [t4, e4]), (0, import_react6.useEffect)(function() {
    var r4;
    F2(s4, v4.current.hsva) || e4.equal(r4 = e4.fromHsva(s4), v4.current.color) || (v4.current = { hsva: s4, color: r4 }, u4(r4));
  }, [s4, e4, u4]);
  var d4 = (0, import_react6.useCallback)(function(e5) {
    f4(function(r4) {
      return Object.assign({}, r4, e5);
    });
  }, []);
  return [s4, d4];
}
var R2;
var V2 = "undefined" != typeof window ? import_react6.useLayoutEffect : import_react6.useEffect;
var $3 = function() {
  return R2 || ("undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0);
};
var J2 = /* @__PURE__ */ new Map();
var Q = function(e4) {
  V2(function() {
    var r4 = e4.current ? e4.current.ownerDocument : document;
    if (void 0 !== r4 && !J2.has(r4)) {
      var t4 = r4.createElement("style");
      t4.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, J2.set(r4, t4);
      var n4 = $3();
      n4 && t4.setAttribute("nonce", n4), r4.head.appendChild(t4);
    }
  }, []);
};
var U2 = function(t4) {
  var n4 = t4.className, o4 = t4.colorModel, a4 = t4.color, l4 = void 0 === a4 ? o4.defaultColor : a4, i4 = t4.onChange, s4 = c3(t4, ["className", "colorModel", "color", "onChange"]), f4 = (0, import_react6.useRef)(null);
  Q(f4);
  var v4 = Y2(o4, l4, i4), d4 = v4[0], h4 = v4[1], m4 = g3(["react-colorful", n4]);
  return import_react6.default.createElement("div", u3({}, s4, { ref: f4, className: m4 }), import_react6.default.createElement(T2, { hsva: d4, onChange: h4 }), import_react6.default.createElement(S3, { hue: d4.h, onChange: h4, className: "react-colorful__last-control" }));
};
var ee = function(r4) {
  var t4 = r4.className, n4 = r4.hsva, o4 = r4.onChange, a4 = { backgroundImage: "linear-gradient(90deg, " + k3(Object.assign({}, n4, { a: 0 })) + ", " + k3(Object.assign({}, n4, { a: 1 })) + ")" }, l4 = g3(["react-colorful__alpha", t4]), u4 = b3(100 * n4.a);
  return import_react6.default.createElement("div", { className: l4 }, import_react6.default.createElement("div", { className: "react-colorful__alpha-gradient", style: a4 }), import_react6.default.createElement(m3, { onMove: function(e4) {
    o4({ a: e4.left });
  }, onKey: function(e4) {
    o4({ a: s3(n4.a + e4.left) });
  }, "aria-label": "Alpha", "aria-valuetext": u4 + "%", "aria-valuenow": u4, "aria-valuemin": "0", "aria-valuemax": "100" }, import_react6.default.createElement(p3, { className: "react-colorful__alpha-pointer", left: n4.a, color: k3(n4) })));
};
var re = function(t4) {
  var n4 = t4.className, o4 = t4.colorModel, a4 = t4.color, l4 = void 0 === a4 ? o4.defaultColor : a4, i4 = t4.onChange, s4 = c3(t4, ["className", "colorModel", "color", "onChange"]), f4 = (0, import_react6.useRef)(null);
  Q(f4);
  var v4 = Y2(o4, l4, i4), d4 = v4[0], h4 = v4[1], m4 = g3(["react-colorful", n4]);
  return import_react6.default.createElement("div", u3({}, s4, { ref: f4, className: m4 }), import_react6.default.createElement(T2, { hsva: d4, onChange: h4 }), import_react6.default.createElement(S3, { hue: d4.h, onChange: h4 }), import_react6.default.createElement(ee, { hsva: d4, onChange: h4, className: "react-colorful__last-control" }));
};
var xe = { defaultColor: { r: 0, g: 0, b: 0, a: 1 }, toHsva: L2, fromHsva: I3, equal: F2 };
var Ce = function(r4) {
  return import_react6.default.createElement(re, u3({}, r4, { colorModel: xe }));
};
var Me = { defaultColor: { r: 0, g: 0, b: 0 }, toHsva: function(e4) {
  return L2({ r: e4.r, g: e4.g, b: e4.b, a: 1 });
}, fromHsva: function(e4) {
  return { r: (r4 = I3(e4)).r, g: r4.g, b: r4.b };
  var r4;
}, equal: F2 };
var Ne = function(r4) {
  return import_react6.default.createElement(U2, u3({}, r4, { colorModel: Me }));
};

// node_modules/react-dropzone/dist/es/index.js
var import_react7 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/tslib/tslib.es6.mjs
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e4) {
        reject(e4);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e4) {
        reject(e4);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t4[0] & 1) throw t4[1];
    return t4[1];
  }, trys: [], ops: [] }, f4, y4, t4, g4 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g4.next = verb(0), g4["throw"] = verb(1), g4["return"] = verb(2), typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
    return this;
  }), g4;
  function verb(n4) {
    return function(v4) {
      return step([n4, v4]);
    };
  }
  function step(op) {
    if (f4) throw new TypeError("Generator is already executing.");
    while (g4 && (g4 = 0, op[0] && (_2 = 0)), _2) try {
      if (f4 = 1, y4 && (t4 = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t4 = y4["return"]) && t4.call(y4), 0) : y4.next) && !(t4 = t4.call(y4, op[1])).done) return t4;
      if (y4 = 0, t4) op = [op[0] & 2, t4.value];
      switch (op[0]) {
        case 0:
        case 1:
          t4 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y4 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t4 = _2.trys, t4 = t4.length > 0 && t4[t4.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t4 || op[1] > t4[0] && op[1] < t4[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t4[1]) {
            _2.label = t4[1];
            t4 = op;
            break;
          }
          if (t4 && _2.label < t4[2]) {
            _2.label = t4[2];
            _2.ops.push(op);
            break;
          }
          if (t4[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e4) {
      op = [6, e4];
      y4 = 0;
    } finally {
      f4 = t4 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __read(o4, n4) {
  var m4 = typeof Symbol === "function" && o4[Symbol.iterator];
  if (!m4) return o4;
  var i4 = m4.call(o4), r4, ar = [], e4;
  try {
    while ((n4 === void 0 || n4-- > 0) && !(r4 = i4.next()).done) ar.push(r4.value);
  } catch (error) {
    e4 = { error };
  } finally {
    try {
      if (r4 && !r4.done && (m4 = i4["return"])) m4.call(i4);
    } finally {
      if (e4) throw e4.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i4 = 0; i4 < arguments.length; i4++)
    ar = ar.concat(__read(arguments[i4]));
  return ar;
}

// node_modules/file-selector/dist/es5/file.js
var COMMON_MIME_TYPES = /* @__PURE__ */ new Map([
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
  ["aac", "audio/aac"],
  ["abw", "application/x-abiword"],
  ["arc", "application/x-freearc"],
  ["avif", "image/avif"],
  ["avi", "video/x-msvideo"],
  ["azw", "application/vnd.amazon.ebook"],
  ["bin", "application/octet-stream"],
  ["bmp", "image/bmp"],
  ["bz", "application/x-bzip"],
  ["bz2", "application/x-bzip2"],
  ["cda", "application/x-cdf"],
  ["csh", "application/x-csh"],
  ["css", "text/css"],
  ["csv", "text/csv"],
  ["doc", "application/msword"],
  ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  ["eot", "application/vnd.ms-fontobject"],
  ["epub", "application/epub+zip"],
  ["gz", "application/gzip"],
  ["gif", "image/gif"],
  ["heic", "image/heic"],
  ["heif", "image/heif"],
  ["htm", "text/html"],
  ["html", "text/html"],
  ["ico", "image/vnd.microsoft.icon"],
  ["ics", "text/calendar"],
  ["jar", "application/java-archive"],
  ["jpeg", "image/jpeg"],
  ["jpg", "image/jpeg"],
  ["js", "text/javascript"],
  ["json", "application/json"],
  ["jsonld", "application/ld+json"],
  ["mid", "audio/midi"],
  ["midi", "audio/midi"],
  ["mjs", "text/javascript"],
  ["mp3", "audio/mpeg"],
  ["mp4", "video/mp4"],
  ["mpeg", "video/mpeg"],
  ["mpkg", "application/vnd.apple.installer+xml"],
  ["odp", "application/vnd.oasis.opendocument.presentation"],
  ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
  ["odt", "application/vnd.oasis.opendocument.text"],
  ["oga", "audio/ogg"],
  ["ogv", "video/ogg"],
  ["ogx", "application/ogg"],
  ["opus", "audio/opus"],
  ["otf", "font/otf"],
  ["png", "image/png"],
  ["pdf", "application/pdf"],
  ["php", "application/x-httpd-php"],
  ["ppt", "application/vnd.ms-powerpoint"],
  ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  ["rar", "application/vnd.rar"],
  ["rtf", "application/rtf"],
  ["sh", "application/x-sh"],
  ["svg", "image/svg+xml"],
  ["swf", "application/x-shockwave-flash"],
  ["tar", "application/x-tar"],
  ["tif", "image/tiff"],
  ["tiff", "image/tiff"],
  ["ts", "video/mp2t"],
  ["ttf", "font/ttf"],
  ["txt", "text/plain"],
  ["vsd", "application/vnd.visio"],
  ["wav", "audio/wav"],
  ["weba", "audio/webm"],
  ["webm", "video/webm"],
  ["webp", "image/webp"],
  ["woff", "font/woff"],
  ["woff2", "font/woff2"],
  ["xhtml", "application/xhtml+xml"],
  ["xls", "application/vnd.ms-excel"],
  ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  ["xml", "application/xml"],
  ["xul", "application/vnd.mozilla.xul+xml"],
  ["zip", "application/zip"],
  ["7z", "application/x-7z-compressed"],
  // Others
  ["mkv", "video/x-matroska"],
  ["mov", "video/quicktime"],
  ["msg", "application/vnd.ms-outlook"]
]);
function toFileWithPath(file, path) {
  var f4 = withMimeType(file);
  if (typeof f4.path !== "string") {
    var webkitRelativePath = file.webkitRelativePath;
    Object.defineProperty(f4, "path", {
      value: typeof path === "string" ? path : typeof webkitRelativePath === "string" && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }
  return f4;
}
function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf(".") !== -1;
  if (hasExtension && !file.type) {
    var ext = name.split(".").pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);
    if (type) {
      Object.defineProperty(file, "type", {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }
  return file;
}

// node_modules/file-selector/dist/es5/file-selector.js
var FILES_TO_IGNORE = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function fromEvent(evt) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      if (isObject2(evt) && isDataTransfer(evt)) {
        return [2, getDataTransferFiles(evt.dataTransfer, evt.type)];
      } else if (isChangeEvt(evt)) {
        return [2, getInputFiles(evt)];
      } else if (Array.isArray(evt) && evt.every(function(item) {
        return "getFile" in item && typeof item.getFile === "function";
      })) {
        return [2, getFsHandleFiles(evt)];
      }
      return [2, []];
    });
  });
}
function isDataTransfer(value) {
  return isObject2(value.dataTransfer);
}
function isChangeEvt(value) {
  return isObject2(value) && isObject2(value.target);
}
function isObject2(v4) {
  return typeof v4 === "object" && v4 !== null;
}
function getInputFiles(evt) {
  return fromList(evt.target.files).map(function(file) {
    return toFileWithPath(file);
  });
}
function getFsHandleFiles(handles) {
  return __awaiter(this, void 0, void 0, function() {
    var files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          return [4, Promise.all(handles.map(function(h4) {
            return h4.getFile();
          }))];
        case 1:
          files = _a.sent();
          return [2, files.map(function(file) {
            return toFileWithPath(file);
          })];
      }
    });
  });
}
function getDataTransferFiles(dt, type) {
  return __awaiter(this, void 0, void 0, function() {
    var items, files;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          if (dt === null) {
            return [2, []];
          }
          if (!dt.items) return [3, 2];
          items = fromList(dt.items).filter(function(item) {
            return item.kind === "file";
          });
          if (type !== "drop") {
            return [2, items];
          }
          return [4, Promise.all(items.map(toFilePromises))];
        case 1:
          files = _a.sent();
          return [2, noIgnoredFiles(flatten(files))];
        case 2:
          return [2, noIgnoredFiles(fromList(dt.files).map(function(file) {
            return toFileWithPath(file);
          }))];
      }
    });
  });
}
function noIgnoredFiles(files) {
  return files.filter(function(file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}
function fromList(items) {
  if (items === null) {
    return [];
  }
  var files = [];
  for (var i4 = 0; i4 < items.length; i4++) {
    var file = items[i4];
    files.push(file);
  }
  return files;
}
function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== "function") {
    return fromDataTransferItem(item);
  }
  var entry = item.webkitGetAsEntry();
  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }
  return fromDataTransferItem(item);
}
function flatten(items) {
  return items.reduce(function(acc, files) {
    return __spread(acc, Array.isArray(files) ? flatten(files) : [files]);
  }, []);
}
function fromDataTransferItem(item) {
  var file = item.getAsFile();
  if (!file) {
    return Promise.reject(item + " is not a File");
  }
  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}
function fromEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
    });
  });
}
function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function(resolve, reject) {
    var entries = [];
    function readEntries() {
      var _this = this;
      reader.readEntries(function(batch) {
        return __awaiter(_this, void 0, void 0, function() {
          var files, err_1, items;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                if (!!batch.length) return [3, 5];
                _a.label = 1;
              case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, Promise.all(entries)];
              case 2:
                files = _a.sent();
                resolve(files);
                return [3, 4];
              case 3:
                err_1 = _a.sent();
                reject(err_1);
                return [3, 4];
              case 4:
                return [3, 6];
              case 5:
                items = Promise.all(batch.map(fromEntry));
                entries.push(items);
                readEntries();
                _a.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(err) {
        reject(err);
      });
    }
    readEntries();
  });
}
function fromFileEntry(entry) {
  return __awaiter(this, void 0, void 0, function() {
    return __generator(this, function(_a) {
      return [2, new Promise(function(resolve, reject) {
        entry.file(function(file) {
          var fwp = toFileWithPath(file, entry.fullPath);
          resolve(fwp);
        }, function(err) {
          reject(err);
        });
      })];
    });
  });
}

// node_modules/react-dropzone/dist/es/utils/index.js
var import_attr_accept = __toESM(require_es());
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i4 = 1; i4 < arguments.length; i4++) {
    var source = null != arguments[i4] ? arguments[i4] : {};
    i4 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i4) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i4) || _unsupportedIterableToArray(arr, i4) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o4, minLen) {
  if (!o4) return;
  if (typeof o4 === "string") return _arrayLikeToArray(o4, minLen);
  var n4 = Object.prototype.toString.call(o4).slice(8, -1);
  if (n4 === "Object" && o4.constructor) n4 = o4.constructor.name;
  if (n4 === "Map" || n4 === "Set") return Array.from(o4);
  if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4)) return _arrayLikeToArray(o4, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
    arr2[i4] = arr[i4];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i4) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i4 && _arr.length === i4) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr2(accept) {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(accept) ? "one of ".concat(accept.join(", ")) : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr2(maxSize) {
  return {
    code: FILE_TOO_LARGE,
    message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr2(minSize) {
  return {
    code: FILE_TOO_SMALL,
    message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
  };
};
var TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files"
};
function fileAccepted(file, accept) {
  var isAcceptable = file.type === "application/x-moz-file" || (0, import_attr_accept.default)(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
}
function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    else if (isDefined(maxSize) && file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
  }
  return [true, null];
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function allFilesAccepted(_ref) {
  var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles;
  if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
    return false;
  }
  return files.every(function(file) {
    var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
    return accepted && sizeMatch;
  });
}
function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}
function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  return Array.prototype.some.call(event.dataTransfer.types, function(type) {
    return type === "Files" || type === "application/x-moz-file";
  });
}
function onDocumentDragOver(event) {
  event.preventDefault();
}
function isIe(userAgent) {
  return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
  return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
  var userAgent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.navigator.userAgent;
  return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers2() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function(event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return fns.some(function(fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }
      return isPropagationStopped(event);
    });
  };
}
function canUseFileSystemAccessAPI() {
  return "showOpenFilePicker" in window;
}
function filePickerOptionsTypes(accept) {
  accept = typeof accept === "string" ? accept.split(",") : accept;
  return [{
    description: "everything",
    // TODO: Need to handle filtering more elegantly than this!
    accept: Array.isArray(accept) ? (
      // Accept just MIME types as per spec
      // NOTE: accept can be https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers
      accept.filter(function(item) {
        return item === "audio/*" || item === "video/*" || item === "image/*" || item === "text/*" || /\w+\/[-+.\w]+/g.test(item);
      }).reduce(function(a4, b4) {
        return _objectSpread(_objectSpread({}, a4), {}, _defineProperty2({}, b4, []));
      }, {})
    ) : {}
  }];
}
function isAbort(v4) {
  return v4 instanceof DOMException && (v4.name === "AbortError" || v4.code === v4.ABORT_ERR);
}
function isSecurityError(v4) {
  return v4 instanceof DOMException && (v4.name === "SecurityError" || v4.code === v4.SECURITY_ERR);
}

// node_modules/react-dropzone/dist/es/index.js
var _excluded4 = ["children"];
var _excluded22 = ["open"];
var _excluded32 = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"];
var _excluded42 = ["refKey", "onChange", "onClick"];
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray2(arr);
}
function _slicedToArray2(arr, i4) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i4) || _unsupportedIterableToArray2(arr, i4) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o4, minLen) {
  if (!o4) return;
  if (typeof o4 === "string") return _arrayLikeToArray2(o4, minLen);
  var n4 = Object.prototype.toString.call(o4).slice(8, -1);
  if (n4 === "Object" && o4.constructor) n4 = o4.constructor.name;
  if (n4 === "Map" || n4 === "Set") return Array.from(o4);
  if (n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4)) return _arrayLikeToArray2(o4, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++) {
    arr2[i4] = arr[i4];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i4) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i4 && _arr.length === i4) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr)) return arr;
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i4 = 1; i4 < arguments.length; i4++) {
    var source = null != arguments[i4] ? arguments[i4] : {};
    i4 % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i4;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i4 = 0; i4 < sourceSymbolKeys.length; i4++) {
      key = sourceSymbolKeys[i4];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i4;
  for (i4 = 0; i4 < sourceKeys.length; i4++) {
    key = sourceKeys[i4];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var Dropzone = (0, import_react7.forwardRef)(function(_ref, ref) {
  var children = _ref.children, params = _objectWithoutProperties2(_ref, _excluded4);
  var _useDropzone = useDropzone(params), open = _useDropzone.open, props3 = _objectWithoutProperties2(_useDropzone, _excluded22);
  (0, import_react7.useImperativeHandle)(ref, function() {
    return {
      open
    };
  }, [open]);
  return import_react7.default.createElement(import_react7.Fragment, null, children(_objectSpread3(_objectSpread3({}, props3), {}, {
    open
  })));
});
Dropzone.displayName = "Dropzone";
var defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  maxFiles: 0,
  preventDropOnDocument: true,
  noClick: false,
  noKeyboard: false,
  noDrag: false,
  noDragEventsBubbling: false,
  validator: null,
  useFsAccessApi: true
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
  /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.draggedFiles Files in active drag
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */
  children: import_prop_types.default.func,
  /**
   * Set accepted file types.
   * See https://github.com/okonet/attr-accept for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all.
   * See: https://github.com/react-dropzone/react-dropzone/issues/276
   */
  accept: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.arrayOf(import_prop_types.default.string)]),
  /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */
  multiple: import_prop_types.default.bool,
  /**
   * If false, allow dropped items to take over the current browser window
   */
  preventDropOnDocument: import_prop_types.default.bool,
  /**
   * If true, disables click to open the native file selection dialog
   */
  noClick: import_prop_types.default.bool,
  /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */
  noKeyboard: import_prop_types.default.bool,
  /**
   * If true, disables drag 'n' drop
   */
  noDrag: import_prop_types.default.bool,
  /**
   * If true, stops drag event propagation to parents
   */
  noDragEventsBubbling: import_prop_types.default.bool,
  /**
   * Minimum file size (in bytes)
   */
  minSize: import_prop_types.default.number,
  /**
   * Maximum file size (in bytes)
   */
  maxSize: import_prop_types.default.number,
  /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */
  maxFiles: import_prop_types.default.number,
  /**
   * Enable/disable the dropzone
   */
  disabled: import_prop_types.default.bool,
  /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  getFilesFromEvent: import_prop_types.default.func,
  /**
   * Cb for when closing the file dialog with no selection
   */
  onFileDialogCancel: import_prop_types.default.func,
  /**
   * Cb for when opening the file dialog
   */
  onFileDialogOpen: import_prop_types.default.func,
  /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */
  useFsAccessApi: import_prop_types.default.bool,
  /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */
  onDragEnter: import_prop_types.default.func,
  /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */
  onDragLeave: import_prop_types.default.func,
  /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */
  onDragOver: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */
  onDrop: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */
  onDropAccepted: import_prop_types.default.func,
  /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */
  onDropRejected: import_prop_types.default.func,
  /**
   * Custom validation function
   * @param {File} file
   * @returns {FileError|FileError[]}
   */
  validator: import_prop_types.default.func
};
var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
function useDropzone() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _defaultProps$options = _objectSpread3(_objectSpread3({}, defaultProps), options), accept = _defaultProps$options.accept, disabled = _defaultProps$options.disabled, getFilesFromEvent = _defaultProps$options.getFilesFromEvent, maxSize = _defaultProps$options.maxSize, minSize = _defaultProps$options.minSize, multiple = _defaultProps$options.multiple, maxFiles = _defaultProps$options.maxFiles, onDragEnter = _defaultProps$options.onDragEnter, onDragLeave = _defaultProps$options.onDragLeave, onDragOver = _defaultProps$options.onDragOver, onDrop = _defaultProps$options.onDrop, onDropAccepted = _defaultProps$options.onDropAccepted, onDropRejected = _defaultProps$options.onDropRejected, onFileDialogCancel = _defaultProps$options.onFileDialogCancel, onFileDialogOpen = _defaultProps$options.onFileDialogOpen, useFsAccessApi = _defaultProps$options.useFsAccessApi, preventDropOnDocument = _defaultProps$options.preventDropOnDocument, noClick = _defaultProps$options.noClick, noKeyboard = _defaultProps$options.noKeyboard, noDrag = _defaultProps$options.noDrag, noDragEventsBubbling = _defaultProps$options.noDragEventsBubbling, validator = _defaultProps$options.validator;
  var onFileDialogOpenCb = (0, import_react7.useMemo)(function() {
    return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
  }, [onFileDialogOpen]);
  var onFileDialogCancelCb = (0, import_react7.useMemo)(function() {
    return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
  }, [onFileDialogCancel]);
  var rootRef = (0, import_react7.useRef)(null);
  var inputRef = (0, import_react7.useRef)(null);
  var _useReducer = (0, import_react7.useReducer)(reducer, initialState), _useReducer2 = _slicedToArray2(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
  var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive, draggedFiles = state.draggedFiles;
  var fsAccessApiWorksRef = (0, import_react7.useRef)(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && canUseFileSystemAccessAPI());
  var onWindowFocus = function onWindowFocus2() {
    if (!fsAccessApiWorksRef.current && isFileDialogActive) {
      setTimeout(function() {
        if (inputRef.current) {
          var files = inputRef.current.files;
          if (!files.length) {
            dispatch({
              type: "closeDialog"
            });
            onFileDialogCancelCb();
          }
        }
      }, 300);
    }
  };
  (0, import_react7.useEffect)(function() {
    window.addEventListener("focus", onWindowFocus, false);
    return function() {
      window.removeEventListener("focus", onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancelCb, fsAccessApiWorksRef]);
  var dragTargetsRef = (0, import_react7.useRef)([]);
  var onDocumentDrop = function onDocumentDrop2(event) {
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }
    event.preventDefault();
    dragTargetsRef.current = [];
  };
  (0, import_react7.useEffect)(function() {
    if (preventDropOnDocument) {
      document.addEventListener("dragover", onDocumentDragOver, false);
      document.addEventListener("drop", onDocumentDrop, false);
    }
    return function() {
      if (preventDropOnDocument) {
        document.removeEventListener("dragover", onDocumentDragOver);
        document.removeEventListener("drop", onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = (0, import_react7.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(draggedFiles2) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        dispatch({
          draggedFiles: draggedFiles2,
          isDragActive: true,
          type: "setDraggedFiles"
        });
        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
  var onDragOverCb = (0, import_react7.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var hasFiles = isEvtWithFiles(event);
    if (hasFiles && event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = "copy";
      } catch (_unused) {
      }
    }
    if (hasFiles && onDragOver) {
      onDragOver(event);
    }
    return false;
  }, [onDragOver, noDragEventsBubbling]);
  var onDragLeaveCb = (0, import_react7.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    var targets = dragTargetsRef.current.filter(function(target) {
      return rootRef.current && rootRef.current.contains(target);
    });
    var targetIdx = targets.indexOf(event.target);
    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }
    dragTargetsRef.current = targets;
    if (targets.length > 0) {
      return;
    }
    dispatch({
      isDragActive: false,
      type: "setDraggedFiles",
      draggedFiles: []
    });
    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave, noDragEventsBubbling]);
  var setFiles = (0, import_react7.useCallback)(function(files, event) {
    var acceptedFiles = [];
    var fileRejections = [];
    files.forEach(function(file) {
      var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray2(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
      var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray2(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
      var customErrors = validator ? validator(file) : null;
      if (accepted && sizeMatch && !customErrors) {
        acceptedFiles.push(file);
      } else {
        var errors = [acceptError, sizeError];
        if (customErrors) {
          errors = errors.concat(customErrors);
        }
        fileRejections.push({
          file,
          errors: errors.filter(function(e4) {
            return e4;
          })
        });
      }
    });
    if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
      acceptedFiles.forEach(function(file) {
        fileRejections.push({
          file,
          errors: [TOO_MANY_FILES_REJECTION]
        });
      });
      acceptedFiles.splice(0);
    }
    dispatch({
      acceptedFiles,
      fileRejections,
      type: "setFiles"
    });
    if (onDrop) {
      onDrop(acceptedFiles, fileRejections, event);
    }
    if (fileRejections.length > 0 && onDropRejected) {
      onDropRejected(fileRejections, event);
    }
    if (acceptedFiles.length > 0 && onDropAccepted) {
      onDropAccepted(acceptedFiles, event);
    }
  }, [dispatch, multiple, accept, minSize, maxSize, maxFiles, onDrop, onDropAccepted, onDropRejected, validator]);
  var onDropCb = (0, import_react7.useCallback)(function(event) {
    event.preventDefault();
    event.persist();
    stopPropagation(event);
    dragTargetsRef.current = [];
    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function(files) {
        if (isPropagationStopped(event) && !noDragEventsBubbling) {
          return;
        }
        setFiles(files, event);
      });
    }
    dispatch({
      type: "reset"
    });
  }, [getFilesFromEvent, setFiles, noDragEventsBubbling]);
  var openFileDialog = (0, import_react7.useCallback)(function() {
    if (fsAccessApiWorksRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      var opts = {
        multiple,
        types: filePickerOptionsTypes(accept)
      };
      window.showOpenFilePicker(opts).then(function(handles) {
        return getFilesFromEvent(handles);
      }).then(function(files) {
        setFiles(files, null);
        dispatch({
          type: "closeDialog"
        });
      }).catch(function(e4) {
        if (isAbort(e4)) {
          onFileDialogCancelCb(e4);
          dispatch({
            type: "closeDialog"
          });
        } else if (isSecurityError(e4)) {
          fsAccessApiWorksRef.current = false;
          if (inputRef.current) {
            inputRef.current.value = null;
            inputRef.current.click();
          }
        }
      });
      return;
    }
    if (inputRef.current) {
      dispatch({
        type: "openDialog"
      });
      onFileDialogOpenCb();
      inputRef.current.value = null;
      inputRef.current.click();
    }
  }, [dispatch, onFileDialogOpenCb, onFileDialogCancelCb, useFsAccessApi, setFiles, accept, multiple]);
  var onKeyDownCb = (0, import_react7.useCallback)(function(event) {
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }
    if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, openFileDialog]);
  var onFocusCb = (0, import_react7.useCallback)(function() {
    dispatch({
      type: "focus"
    });
  }, []);
  var onBlurCb = (0, import_react7.useCallback)(function() {
    dispatch({
      type: "blur"
    });
  }, []);
  var onClickCb = (0, import_react7.useCallback)(function() {
    if (noClick) {
      return;
    }
    if (isIeOrEdge()) {
      setTimeout(openFileDialog, 0);
    } else {
      openFileDialog();
    }
  }, [noClick, openFileDialog]);
  var composeHandler = function composeHandler2(fn) {
    return disabled ? null : fn;
  };
  var composeKeyboardHandler = function composeKeyboardHandler2(fn) {
    return noKeyboard ? null : composeHandler(fn);
  };
  var composeDragHandler = function composeDragHandler2(fn) {
    return noDrag ? null : composeHandler(fn);
  };
  var stopPropagation = function stopPropagation2(event) {
    if (noDragEventsBubbling) {
      event.stopPropagation();
    }
  };
  var getRootProps = (0, import_react7.useMemo)(function() {
    return function() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter2 = _ref2.onDragEnter, onDragOver2 = _ref2.onDragOver, onDragLeave2 = _ref2.onDragLeave, onDrop2 = _ref2.onDrop, rest2 = _objectWithoutProperties2(_ref2, _excluded32);
      return _objectSpread3(_objectSpread3(_defineProperty3({
        onKeyDown: composeKeyboardHandler(composeEventHandlers2(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers2(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers2(onBlur, onBlurCb)),
        onClick: composeHandler(composeEventHandlers2(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers2(onDragEnter2, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers2(onDragOver2, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers2(onDragLeave2, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers2(onDrop2, onDropCb)),
        role: typeof role === "string" && role !== "" ? role : "button"
      }, refKey, rootRef), !disabled && !noKeyboard ? {
        tabIndex: 0
      } : {}), rest2);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
  var onInputElementClick = (0, import_react7.useCallback)(function(event) {
    event.stopPropagation();
  }, []);
  var getInputProps = (0, import_react7.useMemo)(function() {
    return function() {
      var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest2 = _objectWithoutProperties2(_ref3, _excluded42);
      var inputProps = _defineProperty3({
        accept,
        multiple,
        type: "file",
        style: {
          display: "none"
        },
        onChange: composeHandler(composeEventHandlers2(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers2(onClick, onInputElementClick)),
        tabIndex: -1
      }, refKey, inputRef);
      return _objectSpread3(_objectSpread3({}, inputProps), rest2);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    files: draggedFiles,
    accept,
    minSize,
    maxSize,
    multiple,
    maxFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  return _objectSpread3(_objectSpread3({}, state), {}, {
    isDragAccept,
    isDragReject,
    isFocused: isFocused && !disabled,
    getRootProps,
    getInputProps,
    rootRef,
    inputRef,
    open: composeHandler(openFileDialog)
  });
}
function reducer(state, action) {
  switch (action.type) {
    case "focus":
      return _objectSpread3(_objectSpread3({}, state), {}, {
        isFocused: true
      });
    case "blur":
      return _objectSpread3(_objectSpread3({}, state), {}, {
        isFocused: false
      });
    case "openDialog":
      return _objectSpread3(_objectSpread3({}, initialState), {}, {
        isFileDialogActive: true
      });
    case "closeDialog":
      return _objectSpread3(_objectSpread3({}, state), {}, {
        isFileDialogActive: false
      });
    case "setDraggedFiles":
      var isDragActive = action.isDragActive, draggedFiles = action.draggedFiles;
      return _objectSpread3(_objectSpread3({}, state), {}, {
        draggedFiles,
        isDragActive
      });
    case "setFiles":
      return _objectSpread3(_objectSpread3({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });
    case "reset":
      return _objectSpread3({}, initialState);
    default:
      return state;
  }
}
function noop() {
}

// node_modules/leva/dist/leva.esm.js
var import_merge_value = __toESM(require_merge_value());
var join = (...args) => args.filter(Boolean).join(".");
function getKeyPath(path) {
  const dir = path.split(".");
  return [dir.pop(), dir.join(".") || void 0];
}
function getValuesForPaths(data, paths) {
  return Object.entries(pick(data, paths)).reduce(
    (acc, [, {
      value,
      disabled,
      key
    }]) => {
      acc[key] = disabled ? void 0 : value;
      return acc;
    },
    {}
  );
}
function useCompareMemoize(value, deep) {
  const ref = (0, import_react8.useRef)();
  const compare = deep ? dequal : shallow;
  if (!compare(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}
function useDeepMemo(fn, deps) {
  return (0, import_react8.useMemo)(fn, useCompareMemoize(deps, true));
}
function useToggle(toggled) {
  const wrapperRef = (0, import_react8.useRef)(null);
  const contentRef = (0, import_react8.useRef)(null);
  const firstRender = (0, import_react8.useRef)(true);
  (0, import_react8.useLayoutEffect)(() => {
    if (!toggled) {
      wrapperRef.current.style.height = "0px";
      wrapperRef.current.style.overflow = "hidden";
    }
  }, []);
  (0, import_react8.useEffect)(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    let timeout;
    const ref = wrapperRef.current;
    const fixHeight = () => {
      if (toggled) {
        ref.style.removeProperty("height");
        ref.style.removeProperty("overflow");
        contentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    };
    ref.addEventListener("transitionend", fixHeight, {
      once: true
    });
    const {
      height
    } = contentRef.current.getBoundingClientRect();
    ref.style.height = height + "px";
    if (!toggled) {
      ref.style.overflow = "hidden";
      timeout = window.setTimeout(() => ref.style.height = "0px", 50);
    }
    return () => {
      ref.removeEventListener("transitionend", fixHeight);
      clearTimeout(timeout);
    };
  }, [toggled]);
  return {
    wrapperRef,
    contentRef
  };
}
var useVisiblePaths = (store) => {
  const [paths, setPaths] = (0, import_react8.useState)(store.getVisiblePaths());
  (0, import_react8.useEffect)(() => {
    setPaths(store.getVisiblePaths());
    const unsub = store.useStore.subscribe(store.getVisiblePaths, setPaths, {
      equalityFn: shallow
    });
    return () => unsub();
  }, [store]);
  return paths;
};
function useValuesForPath(store, paths, initialData) {
  const valuesForPath = store.useStore((s4) => {
    const data = _objectSpread2(_objectSpread2({}, initialData), s4.data);
    return getValuesForPaths(data, paths);
  }, shallow);
  return valuesForPath;
}
function usePopin(margin = 3) {
  const popinRef = (0, import_react8.useRef)(null);
  const wrapperRef = (0, import_react8.useRef)(null);
  const [shown, setShow] = (0, import_react8.useState)(false);
  const show = (0, import_react8.useCallback)(() => setShow(true), []);
  const hide4 = (0, import_react8.useCallback)(() => setShow(false), []);
  (0, import_react8.useLayoutEffect)(() => {
    if (shown) {
      const {
        bottom,
        top,
        left
      } = popinRef.current.getBoundingClientRect();
      const {
        height
      } = wrapperRef.current.getBoundingClientRect();
      const direction = bottom + height > window.innerHeight - 40 ? "up" : "down";
      wrapperRef.current.style.position = "fixed";
      wrapperRef.current.style.zIndex = "10000";
      wrapperRef.current.style.left = left + "px";
      if (direction === "down") wrapperRef.current.style.top = bottom + margin + "px";
      else wrapperRef.current.style.bottom = window.innerHeight - top + margin + "px";
    }
  }, [margin, shown]);
  return {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide: hide4
  };
}
k2([names_default]);
var convertMap = {
  rgb: "toRgb",
  hsl: "toHsl",
  hsv: "toHsv",
  hex: "toHex"
};
v8n_esm_default.extend({
  color: () => (value) => w2(value).isValid()
});
var schema$22 = (o4) => v8n_esm_default().color().test(o4);
function convert2(color2, {
  format: format3,
  hasAlpha,
  isString
}) {
  const convertFn = convertMap[format3] + (isString && format3 !== "hex" ? "String" : "");
  const result = color2[convertFn]();
  return typeof result === "object" && !hasAlpha ? omit(result, ["a"]) : result;
}
var sanitize$22 = (v4, settings) => {
  const color2 = w2(v4);
  if (!color2.isValid()) throw Error("Invalid color");
  return convert2(color2, settings);
};
var format$12 = (v4, settings) => {
  return convert2(w2(v4), _objectSpread2(_objectSpread2({}, settings), {}, {
    isString: true,
    format: "hex"
  }));
};
var normalize$32 = ({
  value
}) => {
  const _f = I2(value);
  const format3 = _f === "name" ? "hex" : _f;
  const hasAlpha = typeof value === "object" ? "a" in value : _f === "hex" && value.length === 8 || /^(rgba)|(hsla)|(hsva)/.test(value);
  const settings = {
    format: format3,
    hasAlpha,
    isString: typeof value === "string"
  };
  return {
    value: sanitize$22(value, settings),
    settings
  };
};
var props$22 = Object.freeze({
  __proto__: null,
  schema: schema$22,
  sanitize: sanitize$22,
  format: format$12,
  normalize: normalize$32
});
var ColorPreview = styled("div", {
  position: "relative",
  boxSizing: "border-box",
  borderRadius: "$sm",
  overflow: "hidden",
  cursor: "pointer",
  height: "$rowHeight",
  width: "$rowHeight",
  backgroundColor: "#fff",
  backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
  $inputStyle: "",
  $hover: "",
  zIndex: 1,
  variants: {
    active: {
      true: {
        $inputStyle: "$accent1"
      }
    }
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "currentColor",
    zIndex: 1
  }
});
var PickerContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "$sizes$rowHeight auto",
  columnGap: "$colGap",
  alignItems: "center"
});
var PickerWrapper = styled("div", {
  width: "$colorPickerWidth",
  height: "$colorPickerHeight",
  ".react-colorful": {
    width: "100%",
    height: "100%",
    boxShadow: "$level2",
    cursor: "crosshair"
  },
  ".react-colorful__saturation": {
    borderRadius: "$sm $sm 0 0"
  },
  ".react-colorful__alpha, .react-colorful__hue": {
    height: 10
  },
  ".react-colorful__last-control": {
    borderRadius: "0 0 $sm $sm"
  },
  ".react-colorful__pointer": {
    height: 12,
    width: 12
  }
});
function convertToRgb(value, format3) {
  return format3 !== "rgb" ? w2(value).toRgb() : value;
}
function Color({
  value,
  displayValue,
  settings,
  onUpdate
}) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  const {
    format: format3,
    hasAlpha
  } = settings;
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide: hide4
  } = usePopin();
  const timer = (0, import_react8.useRef)(0);
  const [initialRgb, setInitialRgb] = (0, import_react8.useState)(() => convertToRgb(value, format3));
  const ColorPicker = hasAlpha ? Ce : Ne;
  const showPicker = () => {
    setInitialRgb(convertToRgb(value, format3));
    show();
    emitOnEditStart();
  };
  const hidePicker = () => {
    hide4();
    emitOnEditEnd();
    window.clearTimeout(timer.current);
  };
  const hideAfterDelay = () => {
    timer.current = window.setTimeout(hidePicker, 500);
  };
  (0, import_react8.useEffect)(() => {
    return () => window.clearTimeout(timer.current);
  }, []);
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement(ColorPreview, {
    ref: popinRef,
    active: shown,
    onClick: () => showPicker(),
    style: {
      color: displayValue
    }
  }), shown && import_react8.default.createElement(Portal2, null, import_react8.default.createElement(Overlay, {
    onPointerUp: hidePicker
  }), import_react8.default.createElement(PickerWrapper, {
    ref: wrapperRef,
    onMouseEnter: () => window.clearTimeout(timer.current),
    onMouseLeave: (e4) => e4.buttons === 0 && hideAfterDelay()
  }, import_react8.default.createElement(ColorPicker, {
    color: initialRgb,
    onChange: onUpdate
  }))));
}
function ColorComponent() {
  const {
    value,
    displayValue,
    label,
    onChange,
    onUpdate,
    settings
  } = useInputContext();
  return import_react8.default.createElement(Row, {
    input: true
  }, import_react8.default.createElement(Label, null, label), import_react8.default.createElement(PickerContainer, null, import_react8.default.createElement(Color, {
    value,
    displayValue,
    onChange,
    onUpdate,
    settings
  }), import_react8.default.createElement(ValueInput, {
    value: displayValue,
    onChange,
    onUpdate
  })));
}
var color = createInternalPlugin(_objectSpread2({
  component: ColorComponent
}, props$22));
function Vector3dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  return import_react8.default.createElement(Row, {
    input: true
  }, import_react8.default.createElement(Label, null, label), import_react8.default.createElement(Vector, {
    value: displayValue,
    settings,
    onUpdate
  }));
}
var vector3d = createInternalPlugin(_objectSpread2({
  component: Vector3dComponent
}, getVectorPlugin(["x", "y", "z"])));
var JoystickTrigger = styled("div", {
  $flexCenter: "",
  position: "relative",
  backgroundColor: "$elevation3",
  borderRadius: "$sm",
  cursor: "pointer",
  height: "$rowHeight",
  width: "$rowHeight",
  touchAction: "none",
  $draggable: "",
  $hover: "",
  "&:active": {
    cursor: "none"
  },
  "&::after": {
    content: '""',
    backgroundColor: "$accent2",
    height: 4,
    width: 4,
    borderRadius: 2
  }
});
var JoystickPlayground = styled("div", {
  $flexCenter: "",
  width: "$joystickWidth",
  height: "$joystickHeight",
  borderRadius: "$sm",
  boxShadow: "$level2",
  position: "fixed",
  zIndex: 1e4,
  overflow: "hidden",
  $draggable: "",
  transform: "translate(-50%, -50%)",
  variants: {
    isOutOfBounds: {
      true: {
        backgroundColor: "$elevation1"
      },
      false: {
        backgroundColor: "$elevation3"
      }
    }
  },
  "> div": {
    position: "absolute",
    $flexCenter: "",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "$highlight1",
    backgroundColor: "$elevation3",
    width: "80%",
    height: "80%",
    "&::after,&::before": {
      content: '""',
      position: "absolute",
      zindex: 10,
      backgroundColor: "$highlight1"
    },
    "&::before": {
      width: "100%",
      height: 1
    },
    "&::after": {
      height: "100%",
      width: 1
    }
  },
  "> span": {
    position: "relative",
    zindex: 100,
    width: 10,
    height: 10,
    backgroundColor: "$accent2",
    borderRadius: "50%"
  }
});
function Joystick({
  value,
  settings,
  onUpdate
}) {
  const timeout = (0, import_react8.useRef)();
  const outOfBoundsX = (0, import_react8.useRef)(0);
  const outOfBoundsY = (0, import_react8.useRef)(0);
  const stepMultiplier = (0, import_react8.useRef)(1);
  const [joystickShown, setShowJoystick] = (0, import_react8.useState)(false);
  const [isOutOfBounds, setIsOutOfBounds] = (0, import_react8.useState)(false);
  const [spanRef, set] = useTransform();
  const joystickeRef = (0, import_react8.useRef)(null);
  const playgroundRef = (0, import_react8.useRef)(null);
  (0, import_react8.useLayoutEffect)(() => {
    if (joystickShown) {
      const {
        top,
        left,
        width,
        height
      } = joystickeRef.current.getBoundingClientRect();
      playgroundRef.current.style.left = left + width / 2 + "px";
      playgroundRef.current.style.top = top + height / 2 + "px";
    }
  }, [joystickShown]);
  const {
    keys: [v1, v22],
    joystick
  } = settings;
  const yFactor = joystick === "invertY" ? 1 : -1;
  const {
    [v1]: {
      step: stepV1
    },
    [v22]: {
      step: stepV2
    }
  } = settings;
  const wpx = useTh("sizes", "joystickWidth");
  const hpx = useTh("sizes", "joystickHeight");
  const w3 = parseFloat(wpx) * 0.8 / 2;
  const h4 = parseFloat(hpx) * 0.8 / 2;
  const startOutOfBounds = (0, import_react8.useCallback)(() => {
    if (timeout.current) return;
    setIsOutOfBounds(true);
    if (outOfBoundsX.current) set({
      x: outOfBoundsX.current * w3
    });
    if (outOfBoundsY.current) set({
      y: outOfBoundsY.current * -h4
    });
    timeout.current = window.setInterval(() => {
      onUpdate((v4) => {
        const incX = stepV1 * outOfBoundsX.current * stepMultiplier.current;
        const incY = yFactor * stepV2 * outOfBoundsY.current * stepMultiplier.current;
        return Array.isArray(v4) ? {
          [v1]: v4[0] + incX,
          [v22]: v4[1] + incY
        } : {
          [v1]: v4[v1] + incX,
          [v22]: v4[v22] + incY
        };
      });
    }, 16);
  }, [w3, h4, onUpdate, set, stepV1, stepV2, v1, v22, yFactor]);
  const endOutOfBounds = (0, import_react8.useCallback)(() => {
    window.clearTimeout(timeout.current);
    timeout.current = void 0;
    setIsOutOfBounds(false);
  }, []);
  (0, import_react8.useEffect)(() => {
    function setStepMultiplier(event) {
      stepMultiplier.current = multiplyStep(event);
    }
    window.addEventListener("keydown", setStepMultiplier);
    window.addEventListener("keyup", setStepMultiplier);
    return () => {
      window.clearTimeout(timeout.current);
      window.removeEventListener("keydown", setStepMultiplier);
      window.removeEventListener("keyup", setStepMultiplier);
    };
  }, []);
  const bind = useDrag2(({
    first,
    active,
    delta: [dx, dy],
    movement: [mx, my]
  }) => {
    if (first) setShowJoystick(true);
    const _x = clamp2(mx, -w3, w3);
    const _y = clamp2(my, -h4, h4);
    outOfBoundsX.current = Math.abs(mx) > Math.abs(_x) ? Math.sign(mx - _x) : 0;
    outOfBoundsY.current = Math.abs(my) > Math.abs(_y) ? Math.sign(_y - my) : 0;
    let newX = value[v1];
    let newY = value[v22];
    if (active) {
      if (!outOfBoundsX.current) {
        newX += dx * stepV1 * stepMultiplier.current;
        set({
          x: _x
        });
      }
      if (!outOfBoundsY.current) {
        newY -= yFactor * dy * stepV2 * stepMultiplier.current;
        set({
          y: _y
        });
      }
      if (outOfBoundsX.current || outOfBoundsY.current) startOutOfBounds();
      else endOutOfBounds();
      onUpdate({
        [v1]: newX,
        [v22]: newY
      });
    } else {
      setShowJoystick(false);
      outOfBoundsX.current = 0;
      outOfBoundsY.current = 0;
      set({
        x: 0,
        y: 0
      });
      endOutOfBounds();
    }
  });
  return import_react8.default.createElement(JoystickTrigger, _extends({
    ref: joystickeRef
  }, bind()), joystickShown && import_react8.default.createElement(Portal2, null, import_react8.default.createElement(JoystickPlayground, {
    ref: playgroundRef,
    isOutOfBounds
  }, import_react8.default.createElement("div", null), import_react8.default.createElement("span", {
    ref: spanRef
  }))));
}
var Container$1 = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  variants: {
    withJoystick: {
      true: {
        gridTemplateColumns: "$sizes$rowHeight auto"
      },
      false: {
        gridTemplateColumns: "auto"
      }
    }
  }
});
function Vector2dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  return import_react8.default.createElement(Row, {
    input: true
  }, import_react8.default.createElement(Label, null, label), import_react8.default.createElement(Container$1, {
    withJoystick: !!settings.joystick
  }, settings.joystick && import_react8.default.createElement(Joystick, {
    value: displayValue,
    settings,
    onUpdate
  }), import_react8.default.createElement(Vector, {
    value: displayValue,
    settings,
    onUpdate
  })));
}
var _excluded$72 = ["joystick"];
var plugin = getVectorPlugin(["x", "y"]);
var normalize$22 = (_ref) => {
  let {
    joystick = true
  } = _ref, input = _objectWithoutProperties(_ref, _excluded$72);
  const {
    value,
    settings
  } = plugin.normalize(input);
  return {
    value,
    settings: _objectSpread2(_objectSpread2({}, settings), {}, {
      joystick
    })
  };
};
var vector2d = createInternalPlugin(_objectSpread2(_objectSpread2({
  component: Vector2dComponent
}, plugin), {}, {
  normalize: normalize$22
}));
var sanitize$12 = (v4) => {
  if (v4 === void 0) return void 0;
  if (v4 instanceof File) {
    try {
      return URL.createObjectURL(v4);
    } catch (e4) {
      return void 0;
    }
  }
  if (typeof v4 === "string" && v4.indexOf("blob:") === 0) return v4;
  throw Error(`Invalid image format [undefined | blob | File].`);
};
var schema$12 = (_o, s4) => typeof s4 === "object" && "image" in s4;
var normalize$12 = ({
  image: image2
}) => {
  return {
    value: image2
  };
};
var props$12 = Object.freeze({
  __proto__: null,
  sanitize: sanitize$12,
  schema: schema$12,
  normalize: normalize$12
});
var ImageContainer = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "$sizes$rowHeight auto 20px",
  columnGap: "$colGap",
  alignItems: "center"
});
var DropZone = styled("div", {
  $flexCenter: "",
  overflow: "hidden",
  height: "$rowHeight",
  background: "$elevation3",
  textAlign: "center",
  color: "inherit",
  borderRadius: "$sm",
  outline: "none",
  userSelect: "none",
  cursor: "pointer",
  $inputStyle: "",
  $hover: "",
  $focusWithin: "",
  $active: "$accent1 $elevation1",
  variants: {
    isDragAccept: {
      true: {
        $inputStyle: "$accent1",
        backgroundColor: "$elevation1"
      }
    }
  }
});
var ImagePreview = styled("div", {
  boxSizing: "border-box",
  borderRadius: "$sm",
  height: "$rowHeight",
  width: "$rowHeight",
  $inputStyle: "",
  backgroundSize: "cover",
  backgroundPosition: "center",
  variants: {
    hasImage: {
      true: {
        cursor: "pointer",
        $hover: "",
        $active: ""
      }
    }
  }
});
var ImageLargePreview = styled("div", {
  $flexCenter: "",
  width: "$imagePreviewWidth",
  height: "$imagePreviewHeight",
  borderRadius: "$sm",
  boxShadow: "$level2",
  pointerEvents: "none",
  $inputStyle: "",
  backgroundSize: "cover",
  backgroundPosition: "center"
});
var Instructions = styled("div", {
  fontSize: "0.8em",
  height: "100%",
  padding: "$rowGap $md"
});
var Remove = styled("div", {
  $flexCenter: "",
  top: "0",
  right: "0",
  marginRight: "$sm",
  height: "100%",
  cursor: "pointer",
  variants: {
    disabled: {
      true: {
        color: "$elevation3",
        cursor: "default"
      }
    }
  },
  "&::after,&::before": {
    content: '""',
    position: "absolute",
    height: 2,
    width: 10,
    borderRadius: 1,
    backgroundColor: "currentColor"
  },
  "&::after": {
    transform: "rotate(45deg)"
  },
  "&::before": {
    transform: "rotate(-45deg)"
  }
});
function ImageComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled
  } = useInputContext();
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide: hide4
  } = usePopin();
  const onDrop = (0, import_react8.useCallback)((acceptedFiles) => {
    if (acceptedFiles.length) onUpdate(acceptedFiles[0]);
  }, [onUpdate]);
  const clear = (0, import_react8.useCallback)((e4) => {
    e4.stopPropagation();
    onUpdate(void 0);
  }, [onUpdate]);
  const {
    getRootProps,
    getInputProps,
    isDragAccept
  } = useDropzone({
    maxFiles: 1,
    accept: "image/*",
    onDrop,
    disabled
  });
  return import_react8.default.createElement(Row, {
    input: true
  }, import_react8.default.createElement(Label, null, label), import_react8.default.createElement(ImageContainer, null, import_react8.default.createElement(ImagePreview, {
    ref: popinRef,
    hasImage: !!value,
    onPointerDown: () => !!value && show(),
    onPointerUp: hide4,
    style: {
      backgroundImage: value ? `url(${value})` : "none"
    }
  }), shown && !!value && import_react8.default.createElement(Portal2, null, import_react8.default.createElement(Overlay, {
    onPointerUp: hide4,
    style: {
      cursor: "pointer"
    }
  }), import_react8.default.createElement(ImageLargePreview, {
    ref: wrapperRef,
    style: {
      backgroundImage: `url(${value})`
    }
  })), import_react8.default.createElement(DropZone, getRootProps({
    isDragAccept
  }), import_react8.default.createElement("input", getInputProps()), import_react8.default.createElement(Instructions, null, isDragAccept ? "drop image" : "click or drop")), import_react8.default.createElement(Remove, {
    onClick: clear,
    disabled: !value
  })));
}
var image = createInternalPlugin(_objectSpread2({
  component: ImageComponent
}, props$12));
var number2 = v8n_esm_default().number();
var schema2 = (o4, s4) => v8n_esm_default().array().length(2).every.number().test(o4) && v8n_esm_default().schema({
  min: number2,
  max: number2
}).test(s4);
var format2 = (v4) => ({
  min: v4[0],
  max: v4[1]
});
var sanitize2 = (value, {
  bounds: [MIN, MAX]
}, prevValue) => {
  const _value = Array.isArray(value) ? format2(value) : value;
  const _newValue = {
    min: prevValue[0],
    max: prevValue[1]
  };
  const {
    min: min2,
    max: max2
  } = _objectSpread2(_objectSpread2({}, _newValue), _value);
  return [clamp2(Number(min2), MIN, Math.max(MIN, max2)), clamp2(Number(max2), Math.min(MAX, min2), MAX)];
};
var normalize2 = ({
  value,
  min: min2,
  max: max2
}) => {
  const boundsSettings = {
    min: min2,
    max: max2
  };
  const _settings = normalizeKeyedNumberSettings(format2(value), {
    min: boundsSettings,
    max: boundsSettings
  });
  const bounds = [min2, max2];
  const settings = _objectSpread2(_objectSpread2({}, _settings), {}, {
    bounds
  });
  const _value = sanitize2(format2(value), settings, value);
  return {
    value: _value,
    settings
  };
};
var props2 = Object.freeze({
  __proto__: null,
  schema: schema2,
  format: format2,
  sanitize: sanitize2,
  normalize: normalize2
});
var _excluded$62 = ["value", "bounds", "onDrag"];
var _excluded2$12 = ["bounds"];
var Container2 = styled("div", {
  display: "grid",
  columnGap: "$colGap",
  gridTemplateColumns: "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)"
});
function IntervalSlider(_ref) {
  let {
    value,
    bounds: [min2, max2],
    onDrag
  } = _ref, settings = _objectWithoutProperties(_ref, _excluded$62);
  const ref = (0, import_react8.useRef)(null);
  const minScrubberRef = (0, import_react8.useRef)(null);
  const maxScrubberRef = (0, import_react8.useRef)(null);
  const rangeWidth = (0, import_react8.useRef)(0);
  const scrubberWidth = useTh("sizes", "scrubberWidth");
  const bind = useDrag2(({
    event,
    first,
    xy: [x3],
    movement: [mx],
    memo: _memo = {}
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === minScrubberRef.current || (event === null || event === void 0 ? void 0 : event.target) === maxScrubberRef.current;
      _memo.pos = invertedRange((x3 - left) / width, min2, max2);
      const delta = Math.abs(_memo.pos - value.min) - Math.abs(_memo.pos - value.max);
      _memo.key = delta < 0 || delta === 0 && _memo.pos <= value.min ? "min" : "max";
      if (targetIsScrub) _memo.pos = value[_memo.key];
    }
    const newValue = _memo.pos + invertedRange(mx / rangeWidth.current, 0, max2 - min2);
    onDrag({
      [_memo.key]: sanitizeStep(newValue, settings[_memo.key])
    });
    return _memo;
  });
  const minStyle = `calc(${range(value.min, min2, max2)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  const maxStyle = `calc(${1 - range(value.max, min2, max2)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  return import_react8.default.createElement(RangeWrapper, _extends({
    ref
  }, bind()), import_react8.default.createElement(Range, null, import_react8.default.createElement(Indicator, {
    style: {
      left: minStyle,
      right: maxStyle
    }
  })), import_react8.default.createElement(Scrubber, {
    position: "left",
    ref: minScrubberRef,
    style: {
      left: minStyle
    }
  }), import_react8.default.createElement(Scrubber, {
    position: "right",
    ref: maxScrubberRef,
    style: {
      right: maxStyle
    }
  }));
}
function IntervalComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = useInputContext();
  const _settings = _objectWithoutProperties(settings, _excluded2$12);
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement(Row, {
    input: true
  }, import_react8.default.createElement(Label, null, label), import_react8.default.createElement(Container2, null, import_react8.default.createElement(IntervalSlider, _extends({
    value: displayValue
  }, settings, {
    onDrag: onUpdate
  })), import_react8.default.createElement(Vector, {
    value: displayValue,
    settings: _settings,
    onUpdate,
    innerLabelTrim: 0
  }))));
}
var interval = createInternalPlugin(_objectSpread2({
  component: IntervalComponent
}, props2));
var createEventEmitter = () => {
  const listenerMapping = /* @__PURE__ */ new Map();
  return {
    on: (topic, listener) => {
      let listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        listeners = /* @__PURE__ */ new Set();
        listenerMapping.set(topic, listeners);
      }
      listeners.add(listener);
    },
    off: (topic, listener) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        return;
      }
      listeners.delete(listener);
      if (listeners.size === 0) {
        listenerMapping.delete(topic);
      }
    },
    emit: (topic, ...args) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === void 0) {
        return;
      }
      for (const listener of listeners) {
        listener(...args);
      }
    }
  };
};
var _excluded$52 = ["type", "value"];
var _excluded23 = ["onChange", "transient", "onEditStart", "onEditEnd"];
var Store = function Store2() {
  const store = create(subscribeWithSelector(() => ({
    data: {}
  })));
  const eventEmitter = createEventEmitter();
  this.storeId = getUid();
  this.useStore = store;
  const folders = {};
  const orderedPaths = /* @__PURE__ */ new Set();
  this.getVisiblePaths = () => {
    const data = this.getData();
    const paths = Object.keys(data);
    const hiddenFolders = [];
    Object.entries(folders).forEach(([path, settings]) => {
      if (settings.render && paths.some((p4) => p4.indexOf(path) === 0) && !settings.render(this.get))
        hiddenFolders.push(path + ".");
    });
    const visiblePaths = [];
    orderedPaths.forEach((path) => {
      if (path in data && data[path].__refCount > 0 && hiddenFolders.every((p4) => path.indexOf(p4) === -1) && (!data[path].render || data[path].render(this.get))) {
        visiblePaths.push(path);
      }
    });
    return visiblePaths;
  };
  this.setOrderedPaths = (newPaths) => {
    newPaths.forEach((p4) => orderedPaths.add(p4));
  };
  this.orderPaths = (paths) => {
    this.setOrderedPaths(paths);
    return paths;
  };
  this.disposePaths = (paths) => {
    store.setState((s4) => {
      const data = s4.data;
      paths.forEach((path) => {
        if (path in data) {
          const input = data[path];
          input.__refCount--;
          if (input.__refCount === 0 && input.type in SpecialInputs) {
            delete data[path];
          }
        }
      });
      return {
        data
      };
    });
  };
  this.dispose = () => {
    store.setState(() => {
      return {
        data: {}
      };
    });
  };
  this.getFolderSettings = (path) => {
    return folders[path] || {};
  };
  this.getData = () => {
    return store.getState().data;
  };
  this.addData = (newData, override) => {
    store.setState((s4) => {
      const data = s4.data;
      Object.entries(newData).forEach(([path, newInputData]) => {
        let input = data[path];
        if (!!input) {
          const {
            type,
            value
          } = newInputData, rest2 = _objectWithoutProperties(newInputData, _excluded$52);
          if (type !== input.type) {
            warn(LevaErrors.INPUT_TYPE_OVERRIDE, type);
          } else {
            if (input.__refCount === 0 || override) {
              Object.assign(input, rest2);
            }
            input.__refCount++;
          }
        } else {
          data[path] = _objectSpread2(_objectSpread2({}, newInputData), {}, {
            __refCount: 1
          });
        }
      });
      return {
        data
      };
    });
  };
  this.setValueAtPath = (path, value, fromPanel) => {
    store.setState((s4) => {
      const data = s4.data;
      updateInput(data[path], value, path, this, fromPanel);
      return {
        data
      };
    });
  };
  this.setSettingsAtPath = (path, settings) => {
    store.setState((s4) => {
      const data = s4.data;
      data[path].settings = _objectSpread2(_objectSpread2({}, data[path].settings), settings);
      return {
        data
      };
    });
  };
  this.disableInputAtPath = (path, flag) => {
    store.setState((s4) => {
      const data = s4.data;
      data[path].disabled = flag;
      return {
        data
      };
    });
  };
  this.set = (values, fromPanel) => {
    store.setState((s4) => {
      const data = s4.data;
      Object.entries(values).forEach(([path, value]) => {
        try {
          updateInput(data[path], value, void 0, void 0, fromPanel);
        } catch (e4) {
          if (true) {
            console.warn(`[This message will only show in development]: \`set\` for path ${path} has failed.`, e4);
          }
        }
      });
      return {
        data
      };
    });
  };
  this.getInput = (path) => {
    try {
      return this.getData()[path];
    } catch (e4) {
      warn(LevaErrors.PATH_DOESNT_EXIST, path);
    }
  };
  this.get = (path) => {
    var _this$getInput;
    return (_this$getInput = this.getInput(path)) === null || _this$getInput === void 0 ? void 0 : _this$getInput.value;
  };
  this.emitOnEditStart = (path) => {
    eventEmitter.emit(`onEditStart:${path}`, this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.emitOnEditEnd = (path) => {
    eventEmitter.emit(`onEditEnd:${path}`, this.get(path), path, _objectSpread2(_objectSpread2({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.subscribeToEditStart = (path, listener) => {
    const _path = `onEditStart:${path}`;
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  this.subscribeToEditEnd = (path, listener) => {
    const _path = `onEditEnd:${path}`;
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  const _getDataFromSchema = (schema3, rootPath, mappedPaths) => {
    const data = {};
    Object.entries(schema3).forEach(([key, rawInput]) => {
      if (key === "") return warn(LevaErrors.EMPTY_KEY);
      let newPath = join(rootPath, key);
      if (rawInput.type === SpecialInputs.FOLDER) {
        const newData = _getDataFromSchema(rawInput.schema, newPath, mappedPaths);
        Object.assign(data, newData);
        if (!(newPath in folders)) folders[newPath] = rawInput.settings;
      } else if (key in mappedPaths) {
        warn(LevaErrors.DUPLICATE_KEYS, key, newPath, mappedPaths[key].path);
      } else {
        const normalizedInput = normalizeInput(rawInput, key, newPath, data);
        if (normalizedInput) {
          const {
            type,
            options,
            input
          } = normalizedInput;
          const {
            onChange,
            transient,
            onEditStart,
            onEditEnd
          } = options, _options = _objectWithoutProperties(options, _excluded23);
          data[newPath] = _objectSpread2(_objectSpread2(_objectSpread2({
            type
          }, _options), input), {}, {
            fromPanel: true
          });
          mappedPaths[key] = {
            path: newPath,
            onChange,
            transient,
            onEditStart,
            onEditEnd
          };
        } else {
          warn(LevaErrors.UNKNOWN_INPUT, newPath, rawInput);
        }
      }
    });
    return data;
  };
  this.getDataFromSchema = (schema3) => {
    const mappedPaths = {};
    const data = _getDataFromSchema(schema3, "", mappedPaths);
    return [data, mappedPaths];
  };
};
var levaStore = new Store();
function useCreateStore() {
  return (0, import_react8.useMemo)(() => new Store(), []);
}
if (typeof window !== "undefined") {
  window.__STORE = levaStore;
}
var defaultSettings$2 = {
  collapsed: false
};
function folder(schema3, settings) {
  return {
    type: SpecialInputs.FOLDER,
    schema: schema3,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings$2), settings)
  };
}
var defaultSettings$1 = {
  disabled: false
};
function button(onClick, settings) {
  return {
    type: SpecialInputs.BUTTON,
    onClick,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings$1), settings)
  };
}
function buttonGroup(opts) {
  return {
    type: SpecialInputs.BUTTON_GROUP,
    opts
  };
}
var defaultSettings = {
  graph: false,
  interval: 100
};
function monitor(objectOrFn, settings) {
  return {
    type: SpecialInputs.MONITOR,
    objectOrFn,
    settings: _objectSpread2(_objectSpread2({}, defaultSettings), settings)
  };
}
var isInput = (v4) => "__levaInput" in v4;
var buildTree = (paths, filter) => {
  const tree = {};
  const _filter = filter ? filter.toLowerCase() : null;
  paths.forEach((path) => {
    const [valueKey, folderPath] = getKeyPath(path);
    if (!_filter || valueKey.toLowerCase().indexOf(_filter) > -1) {
      (0, import_merge_value.default)(tree, folderPath, {
        [valueKey]: {
          __levaInput: true,
          path
        }
      });
    }
  });
  return tree;
};
var _excluded$42 = ["type", "label", "path", "valueKey", "value", "settings", "setValue", "disabled"];
function ControlInput(_ref) {
  let {
    type,
    label,
    path,
    valueKey,
    value,
    settings,
    setValue,
    disabled
  } = _ref, rest2 = _objectWithoutProperties(_ref, _excluded$42);
  const {
    displayValue,
    onChange,
    onUpdate
  } = useInputSetters({
    type,
    value,
    settings,
    setValue
  });
  const Input = Plugins[type].component;
  if (!Input) {
    warn(LevaErrors.NO_COMPONENT_FOR_TYPE, type, path);
    return null;
  }
  return import_react8.default.createElement(InputContext.Provider, {
    value: _objectSpread2({
      key: valueKey,
      path,
      id: "" + path,
      label,
      displayValue,
      value,
      onChange,
      onUpdate,
      settings,
      setValue,
      disabled
    }, rest2)
  }, import_react8.default.createElement(StyledInputWrapper$1, {
    disabled
  }, import_react8.default.createElement(Input, null)));
}
var StyledButton = styled("button", {
  display: "block",
  $reset: "",
  fontWeight: "$button",
  height: "$rowHeight",
  borderStyle: "none",
  borderRadius: "$sm",
  backgroundColor: "$elevation1",
  color: "$highlight1",
  "&:not(:disabled)": {
    color: "$highlight3",
    backgroundColor: "$accent2",
    cursor: "pointer",
    $hover: "$accent3",
    $active: "$accent3 $accent1",
    $focus: ""
  }
});
function Button({
  onClick,
  settings,
  label
}) {
  const store = useStoreContext();
  return import_react8.default.createElement(Row, null, import_react8.default.createElement(StyledButton, {
    disabled: settings.disabled,
    onClick: () => onClick(store.get)
  }, label));
}
var StyledButtonGroup = styled("div", {
  $flex: "",
  justifyContent: "flex-end",
  gap: "$colGap"
});
var StyledButtonGroupButton = styled("button", {
  $reset: "",
  cursor: "pointer",
  borderRadius: "$xs",
  "&:hover": {
    backgroundColor: "$elevation3"
  }
});
var getOpts = ({
  label: _label,
  opts: _opts
}) => {
  let label = typeof _label === "string" ? _label.trim() === "" ? null : _label : _label;
  let opts = _opts;
  if (typeof _opts.opts === "object") {
    if (opts.label !== void 0) {
      label = _opts.label;
    }
    opts = _opts.opts;
  }
  return {
    label,
    opts
  };
};
function ButtonGroup(props3) {
  const {
    label,
    opts
  } = getOpts(props3);
  const store = useStoreContext();
  return import_react8.default.createElement(Row, {
    input: !!label
  }, label && import_react8.default.createElement(Label, null, label), import_react8.default.createElement(StyledButtonGroup, null, Object.entries(opts).map(([label2, onClick]) => import_react8.default.createElement(StyledButtonGroupButton, {
    key: label2,
    onClick: () => onClick(store.get)
  }, label2))));
}
var Canvas = styled("canvas", {
  height: "$monitorHeight",
  width: "100%",
  display: "block",
  borderRadius: "$sm"
});
var POINTS = 100;
function push(arr, val) {
  arr.push(val);
  if (arr.length > POINTS) arr.shift();
}
var MonitorCanvas = (0, import_react8.forwardRef)(function({
  initialValue
}, ref) {
  const accentColor = useTh("colors", "highlight3");
  const backgroundColor = useTh("colors", "elevation2");
  const fillColor = useTh("colors", "highlight1");
  const [gradientTop, gradientBottom] = (0, import_react8.useMemo)(() => {
    return [w2(fillColor).alpha(0.4).toRgbString(), w2(fillColor).alpha(0.1).toRgbString()];
  }, [fillColor]);
  const points = (0, import_react8.useRef)([initialValue]);
  const min2 = (0, import_react8.useRef)(initialValue);
  const max2 = (0, import_react8.useRef)(initialValue);
  const raf = (0, import_react8.useRef)();
  const drawPlot = (0, import_react8.useCallback)((_canvas, _ctx) => {
    if (!_canvas) return;
    const {
      width,
      height
    } = _canvas;
    const path = new Path2D();
    const interval2 = width / POINTS;
    const verticalPadding = height * 0.05;
    for (let i4 = 0; i4 < points.current.length; i4++) {
      const p4 = range(points.current[i4], min2.current, max2.current);
      const x3 = interval2 * i4;
      const y4 = height - p4 * (height - verticalPadding * 2) - verticalPadding;
      path.lineTo(x3, y4);
    }
    _ctx.clearRect(0, 0, width, height);
    const gradientPath = new Path2D(path);
    gradientPath.lineTo(interval2 * (points.current.length + 1), height);
    gradientPath.lineTo(0, height);
    gradientPath.lineTo(0, 0);
    const gradient = _ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, gradientTop);
    gradient.addColorStop(1, gradientBottom);
    _ctx.fillStyle = gradient;
    _ctx.fill(gradientPath);
    _ctx.strokeStyle = backgroundColor;
    _ctx.lineJoin = "round";
    _ctx.lineWidth = 14;
    _ctx.stroke(path);
    _ctx.strokeStyle = accentColor;
    _ctx.lineWidth = 2;
    _ctx.stroke(path);
  }, [accentColor, backgroundColor, gradientTop, gradientBottom]);
  const [canvas, ctx] = useCanvas2d(drawPlot);
  (0, import_react8.useImperativeHandle)(ref, () => ({
    frame: (val) => {
      if (min2.current === void 0 || val < min2.current) min2.current = val;
      if (max2.current === void 0 || val > max2.current) max2.current = val;
      push(points.current, val);
      raf.current = requestAnimationFrame(() => drawPlot(canvas.current, ctx.current));
    }
  }), [canvas, ctx, drawPlot]);
  (0, import_react8.useEffect)(() => () => cancelAnimationFrame(raf.current), []);
  return import_react8.default.createElement(Canvas, {
    ref: canvas
  });
});
var parse = (val) => Number.isFinite(val) ? val.toPrecision(2) : val.toString();
var MonitorLog = (0, import_react8.forwardRef)(function({
  initialValue
}, ref) {
  const [val, set] = (0, import_react8.useState)(parse(initialValue));
  (0, import_react8.useImperativeHandle)(ref, () => ({
    frame: (v4) => set(parse(v4))
  }), []);
  return import_react8.default.createElement("div", null, val);
});
function getValue(o4) {
  return typeof o4 === "function" ? o4() : o4.current;
}
function Monitor({
  label,
  objectOrFn,
  settings
}) {
  const ref = (0, import_react8.useRef)();
  const initialValue = (0, import_react8.useRef)(getValue(objectOrFn));
  (0, import_react8.useEffect)(() => {
    const timeout = window.setInterval(() => {
      var _ref$current;
      if (document.hidden) return;
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.frame(getValue(objectOrFn));
    }, settings.interval);
    return () => window.clearInterval(timeout);
  }, [objectOrFn, settings.interval]);
  return import_react8.default.createElement(Row, {
    input: true
  }, import_react8.default.createElement(Label, {
    align: "top"
  }, label), settings.graph ? import_react8.default.createElement(MonitorCanvas, {
    ref,
    initialValue: initialValue.current
  }) : import_react8.default.createElement(MonitorLog, {
    ref,
    initialValue: initialValue.current
  }));
}
var _excluded$32 = ["type", "label", "key"];
var specialComponents = {
  [SpecialInputs.BUTTON]: Button,
  [SpecialInputs.BUTTON_GROUP]: ButtonGroup,
  [SpecialInputs.MONITOR]: Monitor
};
var Control = import_react8.default.memo(({
  path
}) => {
  const [input, {
    set,
    setSettings,
    disable,
    storeId,
    emitOnEditStart,
    emitOnEditEnd
  }] = useInput(path);
  if (!input) return null;
  const {
    type,
    label,
    key
  } = input, inputProps = _objectWithoutProperties(input, _excluded$32);
  if (type in SpecialInputs) {
    const SpecialInputForType = specialComponents[type];
    return import_react8.default.createElement(SpecialInputForType, _extends({
      label,
      path
    }, inputProps));
  }
  if (!(type in Plugins)) {
    log(LevaErrors.UNSUPPORTED_INPUT, type, path);
    return null;
  }
  return import_react8.default.createElement(ControlInput, _extends({
    key: storeId + path,
    type,
    label,
    storeId,
    path,
    valueKey: key,
    setValue: set,
    setSettings,
    disable,
    emitOnEditStart,
    emitOnEditEnd
  }, inputProps));
});
function FolderTitle({
  toggle,
  toggled,
  name
}) {
  return import_react8.default.createElement(StyledTitle, {
    onClick: () => toggle()
  }, import_react8.default.createElement(Chevron, {
    toggled
  }), import_react8.default.createElement("div", null, name));
}
var Folder = ({
  name,
  path,
  tree
}) => {
  const store = useStoreContext();
  const newPath = join(path, name);
  const {
    collapsed,
    color: color2
  } = store.getFolderSettings(newPath);
  const [toggled, setToggle] = (0, import_react8.useState)(!collapsed);
  const folderRef = (0, import_react8.useRef)(null);
  const widgetColor = useTh("colors", "folderWidgetColor");
  const textColor = useTh("colors", "folderTextColor");
  (0, import_react8.useLayoutEffect)(() => {
    folderRef.current.style.setProperty("--leva-colors-folderWidgetColor", color2 || widgetColor);
    folderRef.current.style.setProperty("--leva-colors-folderTextColor", color2 || textColor);
  }, [color2, widgetColor, textColor]);
  return import_react8.default.createElement(StyledFolder, {
    ref: folderRef
  }, import_react8.default.createElement(FolderTitle, {
    name,
    toggled,
    toggle: () => setToggle((t4) => !t4)
  }), import_react8.default.createElement(TreeWrapper, {
    parent: newPath,
    tree,
    toggled
  }));
};
var TreeWrapper = import_react8.default.memo(({
  isRoot: _isRoot = false,
  fill: _fill = false,
  flat: _flat = false,
  parent,
  tree,
  toggled
}) => {
  const {
    wrapperRef,
    contentRef
  } = useToggle(toggled);
  const store = useStoreContext();
  const getOrder = ([key, o4]) => {
    var _store$getInput;
    const order = isInput(o4) ? (_store$getInput = store.getInput(o4.path)) === null || _store$getInput === void 0 ? void 0 : _store$getInput.order : store.getFolderSettings(join(parent, key)).order;
    return order || 0;
  };
  const entries = Object.entries(tree).sort((a4, b4) => getOrder(a4) - getOrder(b4));
  return import_react8.default.createElement(StyledWrapper, {
    ref: wrapperRef,
    isRoot: _isRoot,
    fill: _fill,
    flat: _flat
  }, import_react8.default.createElement(StyledContent, {
    ref: contentRef,
    isRoot: _isRoot,
    toggled
  }, entries.map(([key, value]) => isInput(value) ? import_react8.default.createElement(Control, {
    key: value.path,
    valueKey: value.valueKey,
    path: value.path
  }) : import_react8.default.createElement(Folder, {
    key,
    name: key,
    path: parent,
    tree: value
  }))));
});
var StyledRoot = styled("div", {
  position: "relative",
  fontFamily: "$mono",
  fontSize: "$root",
  color: "$rootText",
  backgroundColor: "$elevation1",
  variants: {
    fill: {
      false: {
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1e3,
        width: "$rootWidth"
      },
      true: {
        position: "relative",
        width: "100%"
      }
    },
    flat: {
      false: {
        borderRadius: "$lg",
        boxShadow: "$level1"
      }
    },
    oneLineLabels: {
      true: {
        [`${StyledInputRow}`]: {
          gridTemplateColumns: "auto",
          gridAutoColumns: "minmax(max-content, 1fr)",
          gridAutoRows: "minmax($sizes$rowHeight), auto)",
          rowGap: 0,
          columnGap: 0,
          marginTop: "$rowGap"
        }
      }
    },
    hideTitleBar: {
      true: {
        $$titleBarHeight: "0px"
      },
      false: {
        $$titleBarHeight: "$sizes$titleBarHeight"
      }
    }
  },
  "&,*,*:after,*:before": {
    boxSizing: "border-box"
  },
  "*::selection": {
    backgroundColor: "$accent2"
  }
});
var iconWidth = 40;
var Icon = styled("i", {
  $flexCenter: "",
  width: iconWidth,
  userSelect: "none",
  cursor: "pointer",
  "> svg": {
    fill: "$highlight1",
    transition: "transform 350ms ease, fill 250ms ease"
  },
  "&:hover > svg": {
    fill: "$highlight3"
  },
  variants: {
    active: {
      true: {
        "> svg": {
          fill: "$highlight2"
        }
      }
    }
  }
});
var StyledTitleWithFilter = styled("div", {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  height: "$titleBarHeight",
  variants: {
    mode: {
      drag: {
        cursor: "grab"
      }
    }
  }
});
var FilterWrapper = styled("div", {
  $flex: "",
  position: "relative",
  width: "100%",
  overflow: "hidden",
  transition: "height 250ms ease",
  color: "$highlight3",
  paddingLeft: "$md",
  [`> ${Icon}`]: {
    height: 30
  },
  variants: {
    toggled: {
      true: {
        height: 30
      },
      false: {
        height: 0
      }
    }
  }
});
var StyledFilterInput = styled("input", {
  $reset: "",
  flex: 1,
  position: "relative",
  height: 30,
  width: "100%",
  backgroundColor: "transparent",
  fontSize: "10px",
  borderRadius: "$root",
  "&:focus": {},
  "&::placeholder": {
    color: "$highlight2"
  }
});
var TitleContainer = styled("div", {
  touchAction: "none",
  $flexCenter: "",
  flex: 1,
  "> svg": {
    fill: "$highlight1"
  },
  color: "$highlight1",
  variants: {
    drag: {
      true: {
        $draggable: "",
        "> svg": {
          transition: "fill 250ms ease"
        },
        "&:hover": {
          color: "$highlight3"
        },
        "&:hover > svg": {
          fill: "$highlight3"
        }
      }
    },
    filterEnabled: {
      false: {
        paddingRight: iconWidth
      }
    }
  }
});
var FilterInput = import_react8.default.forwardRef(({
  setFilter,
  toggle
}, ref) => {
  const [value, set] = (0, import_react8.useState)("");
  const debouncedOnChange = (0, import_react8.useMemo)(() => debounce(setFilter, 250), [setFilter]);
  const clear = () => {
    setFilter("");
    set("");
  };
  const _onChange = (e4) => {
    const v4 = e4.currentTarget.value;
    toggle(true);
    set(v4);
  };
  (0, import_react8.useEffect)(() => {
    debouncedOnChange(value);
  }, [value, debouncedOnChange]);
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement(StyledFilterInput, {
    ref,
    value,
    placeholder: "[Open filter with CMD+SHIFT+L]",
    onPointerDown: (e4) => e4.stopPropagation(),
    onChange: _onChange
  }), import_react8.default.createElement(Icon, {
    onClick: () => clear(),
    style: {
      visibility: value ? "visible" : "hidden"
    }
  }, import_react8.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "14",
    width: "14",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, import_react8.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }))));
});
function TitleWithFilter({
  setFilter,
  onDrag,
  onDragStart,
  onDragEnd,
  toggle,
  toggled,
  title,
  drag,
  filterEnabled,
  from
}) {
  const [filterShown, setShowFilter] = (0, import_react8.useState)(false);
  const inputRef = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    var _inputRef$current, _inputRef$current2;
    if (filterShown) (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    else (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
  }, [filterShown]);
  const bind = useDrag2(({
    offset: [x3, y4],
    first,
    last
  }) => {
    onDrag({
      x: x3,
      y: y4
    });
    if (first) {
      onDragStart({
        x: x3,
        y: y4
      });
    }
    if (last) {
      onDragEnd({
        x: x3,
        y: y4
      });
    }
  }, {
    filterTaps: true,
    from: ({
      offset: [x3, y4]
    }) => [(from === null || from === void 0 ? void 0 : from.x) || x3, (from === null || from === void 0 ? void 0 : from.y) || y4]
  });
  (0, import_react8.useEffect)(() => {
    const handleShortcut = (event) => {
      if (event.key === "L" && event.shiftKey && event.metaKey) {
        setShowFilter((f4) => !f4);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);
  return import_react8.default.createElement(import_react8.default.Fragment, null, import_react8.default.createElement(StyledTitleWithFilter, {
    mode: drag ? "drag" : void 0
  }, import_react8.default.createElement(Icon, {
    active: !toggled,
    onClick: () => toggle()
  }, import_react8.default.createElement(Chevron, {
    toggled,
    width: 12,
    height: 8
  })), import_react8.default.createElement(TitleContainer, _extends({}, drag ? bind() : {}, {
    drag,
    filterEnabled
  }), title === void 0 && drag ? import_react8.default.createElement("svg", {
    width: "20",
    height: "10",
    viewBox: "0 0 28 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, import_react8.default.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2"
  }), import_react8.default.createElement("circle", {
    cx: "14",
    cy: "2",
    r: "2"
  }), import_react8.default.createElement("circle", {
    cx: "26",
    cy: "2",
    r: "2"
  }), import_react8.default.createElement("circle", {
    cx: "2",
    cy: "12",
    r: "2"
  }), import_react8.default.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "2"
  }), import_react8.default.createElement("circle", {
    cx: "26",
    cy: "12",
    r: "2"
  })) : title), filterEnabled && import_react8.default.createElement(Icon, {
    active: filterShown,
    onClick: () => setShowFilter((f4) => !f4)
  }, import_react8.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    viewBox: "0 0 20 20"
  }, import_react8.default.createElement("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), import_react8.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  })))), import_react8.default.createElement(FilterWrapper, {
    toggled: filterShown
  }, import_react8.default.createElement(FilterInput, {
    ref: inputRef,
    setFilter,
    toggle
  })));
}
var _excluded$22 = ["store", "hidden", "theme", "collapsed"];
function LevaRoot(_ref) {
  let {
    store,
    hidden = false,
    theme,
    collapsed = false
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$22);
  const themeContext = useDeepMemo(() => mergeTheme(theme), [theme]);
  const [toggled, setToggle] = (0, import_react8.useState)(!collapsed);
  const computedToggled = typeof collapsed === "object" ? !collapsed.collapsed : toggled;
  const computedSetToggle = (0, import_react8.useMemo)(() => {
    if (typeof collapsed === "object") {
      return (value) => {
        if (typeof value === "function") {
          collapsed.onChange(!value(!collapsed.collapsed));
        } else {
          collapsed.onChange(!value);
        }
      };
    }
    return setToggle;
  }, [collapsed]);
  if (!store || hidden) return null;
  return import_react8.default.createElement(ThemeContext.Provider, {
    value: themeContext
  }, import_react8.default.createElement(LevaCore, _extends({
    store
  }, props3, {
    toggled: computedToggled,
    setToggle: computedSetToggle,
    rootClass: themeContext.className
  })));
}
var LevaCore = import_react8.default.memo(({
  store,
  rootClass,
  fill: _fill = false,
  flat: _flat = false,
  neverHide: _neverHide = false,
  oneLineLabels: _oneLineLabels = false,
  titleBar: _titleBar = {
    title: void 0,
    drag: true,
    filter: true,
    position: void 0,
    onDrag: void 0,
    onDragStart: void 0,
    onDragEnd: void 0
  },
  hideCopyButton: _hideCopyButton = false,
  toggled,
  setToggle
}) => {
  var _titleBar$drag, _titleBar$filter;
  const paths = useVisiblePaths(store);
  const [filter, setFilter] = (0, import_react8.useState)("");
  const tree = (0, import_react8.useMemo)(() => buildTree(paths, filter), [paths, filter]);
  const [rootRef, set] = useTransform();
  const shouldShow = _neverHide || paths.length > 0;
  const title = typeof _titleBar === "object" ? _titleBar.title || void 0 : void 0;
  const drag = typeof _titleBar === "object" ? (_titleBar$drag = _titleBar.drag) !== null && _titleBar$drag !== void 0 ? _titleBar$drag : true : true;
  const filterEnabled = typeof _titleBar === "object" ? (_titleBar$filter = _titleBar.filter) !== null && _titleBar$filter !== void 0 ? _titleBar$filter : true : true;
  const position = typeof _titleBar === "object" ? _titleBar.position || void 0 : void 0;
  const onDrag = typeof _titleBar === "object" ? _titleBar.onDrag || void 0 : void 0;
  const onDragStart = typeof _titleBar === "object" ? _titleBar.onDragStart || void 0 : void 0;
  const onDragEnd = typeof _titleBar === "object" ? _titleBar.onDragEnd || void 0 : void 0;
  import_react8.default.useEffect(() => {
    set({
      x: position === null || position === void 0 ? void 0 : position.x,
      y: position === null || position === void 0 ? void 0 : position.y
    });
  }, [position, set]);
  globalStyles();
  return import_react8.default.createElement(PanelSettingsContext.Provider, {
    value: {
      hideCopyButton: _hideCopyButton
    }
  }, import_react8.default.createElement(StyledRoot, {
    ref: rootRef,
    className: rootClass,
    fill: _fill,
    flat: _flat,
    oneLineLabels: _oneLineLabels,
    hideTitleBar: !_titleBar,
    style: {
      display: shouldShow ? "block" : "none"
    }
  }, _titleBar && import_react8.default.createElement(TitleWithFilter, {
    onDrag: (point) => {
      set(point);
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(point);
    },
    onDragStart: (point) => onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(point),
    onDragEnd: (point) => onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(point),
    setFilter,
    toggle: (flag) => setToggle((t4) => flag !== null && flag !== void 0 ? flag : !t4),
    toggled,
    title,
    drag,
    filterEnabled,
    from: position
  }), shouldShow && import_react8.default.createElement(StoreContext.Provider, {
    value: store
  }, import_react8.default.createElement(TreeWrapper, {
    isRoot: true,
    fill: _fill,
    flat: _flat,
    tree,
    toggled
  }))));
});
var _excluded$12 = ["isRoot"];
var rootInitialized = false;
var rootEl = null;
function Leva(_ref) {
  let {
    isRoot = false
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded$12);
  (0, import_react8.useEffect)(() => {
    rootInitialized = true;
    if (!isRoot && rootEl) {
      rootEl.remove();
      rootEl = null;
    }
    return () => {
      if (!isRoot) rootInitialized = false;
    };
  }, [isRoot]);
  return import_react8.default.createElement(LevaRoot, _extends({
    store: levaStore
  }, props3));
}
function useRenderRoot(isGlobalPanel) {
  (0, import_react8.useEffect)(() => {
    if (isGlobalPanel && !rootInitialized) {
      if (!rootEl) {
        rootEl = document.getElementById("leva__root") || Object.assign(document.createElement("div"), {
          id: "leva__root"
        });
        if (document.body) {
          document.body.appendChild(rootEl);
          render(import_react8.default.createElement(Leva, {
            isRoot: true
          }), rootEl);
        }
      }
      rootInitialized = true;
    }
  }, [isGlobalPanel]);
}
var _excluded5 = ["store"];
function LevaPanel(_ref) {
  let {
    store
  } = _ref, props3 = _objectWithoutProperties(_ref, _excluded5);
  const parentStore = useStoreContext();
  const _store = store === void 0 ? parentStore : store;
  return import_react8.default.createElement(LevaRoot, _extends({
    store: _store
  }, props3));
}
function parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  let schema3;
  let folderName = void 0;
  let folderSettings;
  let hookSettings;
  let deps;
  if (typeof schemaOrFolderName === "string") {
    folderName = schemaOrFolderName;
    schema3 = settingsOrDepsOrSchema;
    if (Array.isArray(depsOrSettingsOrFolderSettings)) {
      deps = depsOrSettingsOrFolderSettings;
    } else {
      if (depsOrSettingsOrFolderSettings) {
        if ("store" in depsOrSettingsOrFolderSettings) {
          hookSettings = depsOrSettingsOrFolderSettings;
          deps = depsOrSettings;
        } else {
          folderSettings = depsOrSettingsOrFolderSettings;
          if (Array.isArray(depsOrSettings)) {
            deps = depsOrSettings;
          } else {
            hookSettings = depsOrSettings;
            deps = depsOrUndefined;
          }
        }
      }
    }
  } else {
    schema3 = schemaOrFolderName;
    if (Array.isArray(settingsOrDepsOrSchema)) {
      deps = settingsOrDepsOrSchema;
    } else {
      hookSettings = settingsOrDepsOrSchema;
      deps = depsOrSettingsOrFolderSettings;
    }
  }
  return {
    schema: schema3,
    folderName,
    folderSettings,
    hookSettings,
    deps: deps || []
  };
}
function useControls(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  const {
    folderName,
    schema: schema3,
    folderSettings,
    hookSettings,
    deps
  } = parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined);
  const schemaIsFunction = typeof schema3 === "function";
  const depsChanged = (0, import_react8.useRef)(false);
  const firstRender = (0, import_react8.useRef)(true);
  const _schema = useDeepMemo(() => {
    depsChanged.current = true;
    const s4 = typeof schema3 === "function" ? schema3() : schema3;
    return folderName ? {
      [folderName]: folder(s4, folderSettings)
    } : s4;
  }, deps);
  const isGlobalPanel = !(hookSettings !== null && hookSettings !== void 0 && hookSettings.store);
  useRenderRoot(isGlobalPanel);
  const [store] = (0, import_react8.useState)(() => (hookSettings === null || hookSettings === void 0 ? void 0 : hookSettings.store) || levaStore);
  const [initialData, mappedPaths] = (0, import_react8.useMemo)(() => store.getDataFromSchema(_schema), [store, _schema]);
  const [allPaths, renderPaths, onChangePaths, onEditStartPaths, onEditEndPaths] = (0, import_react8.useMemo)(() => {
    const allPaths2 = [];
    const renderPaths2 = [];
    const onChangePaths2 = {};
    const onEditStartPaths2 = {};
    const onEditEndPaths2 = {};
    Object.values(mappedPaths).forEach(({
      path,
      onChange,
      onEditStart,
      onEditEnd,
      transient
    }) => {
      allPaths2.push(path);
      if (!!onChange) {
        onChangePaths2[path] = onChange;
        if (!transient) {
          renderPaths2.push(path);
        }
      } else {
        renderPaths2.push(path);
      }
      if (onEditStart) {
        onEditStartPaths2[path] = onEditStart;
      }
      if (onEditEnd) {
        onEditEndPaths2[path] = onEditEnd;
      }
    });
    return [allPaths2, renderPaths2, onChangePaths2, onEditStartPaths2, onEditEndPaths2];
  }, [mappedPaths]);
  const paths = (0, import_react8.useMemo)(() => store.orderPaths(allPaths), [allPaths, store]);
  const values = useValuesForPath(store, renderPaths, initialData);
  const set = (0, import_react8.useCallback)((values2) => {
    const _values = Object.entries(values2).reduce((acc, [p4, v4]) => Object.assign(acc, {
      [mappedPaths[p4].path]: v4
    }), {});
    store.set(_values, false);
  }, [store, mappedPaths]);
  const get = (0, import_react8.useCallback)((path) => store.get(mappedPaths[path].path), [store, mappedPaths]);
  (0, import_react8.useEffect)(() => {
    const shouldOverrideSettings = !firstRender.current && depsChanged.current;
    store.addData(initialData, shouldOverrideSettings);
    firstRender.current = false;
    depsChanged.current = false;
    return () => store.disposePaths(paths);
  }, [store, paths, initialData]);
  (0, import_react8.useEffect)(() => {
    const unsubscriptions = [];
    Object.entries(onChangePaths).forEach(([path, onChange]) => {
      onChange(store.get(path), path, _objectSpread2({
        initial: true,
        get: store.get
      }, store.getInput(path)));
      const unsub = store.useStore.subscribe((s4) => {
        const input = s4.data[path];
        const value = input.disabled ? void 0 : input.value;
        return [value, input];
      }, ([value, input]) => onChange(value, path, _objectSpread2({
        initial: false,
        get: store.get
      }, input)), {
        equalityFn: shallow
      });
      unsubscriptions.push(unsub);
    });
    return () => unsubscriptions.forEach((unsub) => unsub());
  }, [store, onChangePaths]);
  (0, import_react8.useEffect)(() => {
    const unsubscriptions = [];
    Object.entries(onEditStartPaths).forEach(([path, onEditStart]) => unsubscriptions.push(store.subscribeToEditStart(path, onEditStart)));
    Object.entries(onEditEndPaths).forEach(([path, onEditEnd]) => unsubscriptions.push(store.subscribeToEditEnd(path, onEditEnd)));
    return () => unsubscriptions.forEach((unsub) => unsub());
  }, [onEditStartPaths, onEditEndPaths, store]);
  if (schemaIsFunction) return [values, set, get];
  return values;
}
register(LevaInputs.SELECT, select);
register(LevaInputs.IMAGE, image);
register(LevaInputs.NUMBER, number);
register(LevaInputs.COLOR, color);
register(LevaInputs.STRING, string);
register(LevaInputs.BOOLEAN, boolean);
register(LevaInputs.INTERVAL, interval);
register(LevaInputs.VECTOR3D, vector3d);
register(LevaInputs.VECTOR2D, vector2d);
export {
  Leva,
  LevaInputs,
  LevaPanel,
  LevaStoreProvider,
  button,
  buttonGroup,
  folder,
  levaStore,
  monitor,
  useControls,
  useCreateStore,
  useStoreContext
};
/*! Bundled license information:

isobject/index.js:
  (*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-plain-object/index.js:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

for-in/index.js:
  (*!
   * for-in <https://github.com/jonschlinkert/for-in>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

get-value/index.js:
  (*!
   * get-value <https://github.com/jonschlinkert/get-value>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

assign-symbols/index.js:
  (*!
   * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

split-string/index.js:
  (*!
   * split-string <https://github.com/jonschlinkert/split-string>
   *
   * Copyright (c) 2015-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

set-value/index.js:
  (*!
   * set-value <https://github.com/jonschlinkert/set-value>
   *
   * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=leva.js.map
