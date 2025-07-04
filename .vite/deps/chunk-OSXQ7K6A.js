import {
  _classCallCheck,
  _isNativeReflectConstruct,
  _objectSpread2,
  _setPrototypeOf,
  _slicedToArray,
  _toConsumableArray,
  deltaAngle,
  lerp
} from "./chunk-XOOIZ2R2.js";
import {
  Box3,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  Color,
  Euler,
  Float32BufferAttribute,
  Matrix4,
  Mesh,
  Quaternion,
  Spherical,
  Triangle,
  Vector2,
  Vector3,
  Vector4
} from "./chunk-5QEK7XQM.js";

// node_modules/maath/dist/vector2-d2bf51f1.esm.js
function zero() {
  return [0, 0];
}
function one() {
  return [1, 1];
}
function add(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}
function addValue(a, n) {
  return [a[0] + n, a[1] + n];
}
function sub(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
}
function subValue(a, n) {
  return [a[0] - n, a[1] - n];
}
function scale(a, n) {
  return [a[0] * n, a[1] * n];
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
function lengthSqr(a) {
  return a[0] * a[0] + a[1] * a[1];
}
function length(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
}
var vector2 = Object.freeze({
  __proto__: null,
  zero,
  one,
  add,
  addValue,
  sub,
  subValue,
  scale,
  dot,
  lengthSqr,
  length,
  distance
});

// node_modules/maath/dist/vector3-0a088b7f.esm.js
function zero2() {
  return [0, 0, 0];
}
function one2() {
  return [1, 1, 1];
}
function add2(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
function addValue2(a, n) {
  return [a[0] + n, a[1] + n, a[2] + n];
}
function sub2(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}
function subValue2(a, n) {
  return [a[0] - n, a[1] - n, a[2] - n];
}
function scale2(a, n) {
  return [a[0] * n, a[1] * n, a[2] * n];
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a, b) {
  var x = a[1] * b[2] - a[2] * b[1];
  var y = a[2] * b[0] - a[0] * b[2];
  var z = a[0] * b[1] - a[1] * b[0];
  return [x, y, z];
}
function lengthSqr2(a) {
  return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
}
function length2(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
function distance2(a, b) {
  return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]) + (a[2] - b[2]) * (a[2] - b[2]));
}
var vector3 = Object.freeze({
  __proto__: null,
  zero: zero2,
  one: one2,
  add: add2,
  addValue: addValue2,
  sub: sub2,
  subValue: subValue2,
  scale: scale2,
  dot: dot2,
  cross,
  lengthSqr: lengthSqr2,
  length: length2,
  distance: distance2
});

// node_modules/maath/dist/buffer-59a95d05.esm.js
function swizzle(buffer2) {
  var stride = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
  var swizzle2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "xyz";
  var o = {
    x: 0,
    y: 0,
    z: 0
  };
  for (var _i = 0; _i < buffer2.length; _i += stride) {
    o.x = buffer2[_i];
    o.y = buffer2[_i + 1];
    o.z = buffer2[_i + 2];
    var _swizzle$split = swizzle2.split(""), _swizzle$split2 = _slicedToArray(_swizzle$split, 3), x = _swizzle$split2[0], y = _swizzle$split2[1], z = _swizzle$split2[2];
    buffer2[_i] = o[x];
    buffer2[_i + 1] = o[y];
    if (stride === 3) {
      buffer2[_i + 2] = o[z];
    }
  }
  return buffer2;
}
function addAxis(buffer2, size) {
  var valueGenerator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    return Math.random();
  };
  var newSize = size + 1;
  var newBuffer = new Float32Array(buffer2.length / size * newSize);
  for (var _i2 = 0; _i2 < buffer2.length; _i2 += size) {
    var _j = _i2 / size * newSize;
    newBuffer[_j] = buffer2[_i2];
    newBuffer[_j + 1] = buffer2[_i2 + 1];
    if (size === 2) {
      newBuffer[_j + 2] = valueGenerator(_j);
    }
    if (size === 3) {
      newBuffer[_j + 2] = buffer2[_i2 + 2];
      newBuffer[_j + 3] = valueGenerator(_j);
    }
  }
  return newBuffer;
}
function lerp2(bufferA, bufferB, _final, t) {
  for (var _i3 = 0; _i3 < bufferA.length; _i3++) {
    _final[_i3] = lerp(bufferA[_i3], bufferB[_i3], t);
  }
}
function translate(buffer2, translationVector) {
  var stride = translationVector.length;
  for (var _i4 = 0; _i4 < buffer2.length; _i4 += stride) {
    buffer2[_i4] += translationVector[0];
    buffer2[_i4 + 1] += translationVector[1];
    buffer2[_i4 + 2] += translationVector[2];
  }
  return buffer2;
}
function rotate(buffer2, rotation) {
  var defaultRotation = {
    center: [0, 0, 0],
    q: new Quaternion().identity()
  };
  var v = new Vector3();
  var _defaultRotation$rota = _objectSpread2(_objectSpread2({}, defaultRotation), rotation), q = _defaultRotation$rota.q, center2 = _defaultRotation$rota.center;
  for (var _i5 = 0; _i5 < buffer2.length; _i5 += 3) {
    v.set(buffer2[_i5] - center2[0], buffer2[_i5 + 1] - center2[1], buffer2[_i5 + 2] - center2[2]);
    v.applyQuaternion(q);
    buffer2[_i5] = v.x + center2[0];
    buffer2[_i5 + 1] = v.y + center2[1];
    buffer2[_i5 + 2] = v.z + center2[1];
  }
  return buffer2;
}
function map(buffer2, stride, callback) {
  for (var _i6 = 0, _j2 = 0; _i6 < buffer2.length; _i6 += stride, _j2++) {
    if (stride === 3) {
      var res = callback([buffer2[_i6], buffer2[_i6 + 1], buffer2[_i6 + 2]], _j2);
      buffer2.set(res, _i6);
    } else {
      buffer2.set(callback([buffer2[_i6], buffer2[_i6 + 1]], _j2), _i6);
    }
  }
  return buffer2;
}
function reduce(b, stride, callback, acc) {
  for (var _i7 = 0, _j3 = 0; _i7 < b.length; _i7 += stride, _j3++) {
    if (stride === 2) {
      acc = callback(acc, [b[_i7], b[_i7 + 1]], _j3);
    } else {
      acc = callback(acc, [b[_i7], b[_i7 + 1], b[_i7 + 2]], _j3);
    }
  }
  return acc;
}
function expand(b, stride, opts) {
  var defaultExpandOptions = {
    center: [0, 0, 0]
  };
  var _defaultExpandOptions = _objectSpread2(_objectSpread2({}, defaultExpandOptions), opts), center2 = _defaultExpandOptions.center, distance3 = _defaultExpandOptions.distance;
  for (var _i8 = 0; _i8 < b.length; _i8 += stride) {
    b[_i8] = (b[_i8] - center2[0]) * (1 + distance3) + center2[0];
    b[_i8 + 1] = (b[_i8 + 1] - center2[1]) * (1 + distance3) + center2[1];
    if (stride === 3) {
      b[_i8 + 2] = (b[_i8 + 2] - center2[1]) * (1 + distance3) + center2[2];
    }
  }
  return b;
}
function center(myBuffer, stride) {
  return reduce(myBuffer, stride, function(acc, point) {
    if (stride === 3) {
      acc = add2(acc, point);
    } else {
      acc = add(acc, point);
    }
    return acc;
  }, zero());
}
function sort(myBuffer, stride, callback) {
  var indices = Int16Array.from({
    length: myBuffer.length / stride
  }, function(_, i) {
    return i;
  });
  indices.sort(function(a, b) {
    var pa = myBuffer.slice(a * stride, a * stride + stride);
    var pb = myBuffer.slice(b * stride, b * stride + stride);
    return callback(pa, pb);
  });
  var prevBuffer = myBuffer.slice(0);
  for (var _i9 = 0; _i9 < indices.length; _i9++) {
    var _j4 = indices[_i9];
    myBuffer.set(prevBuffer.slice(_j4 * stride, _j4 * stride + stride), _i9 * 3);
  }
  return myBuffer;
}
var buffer = Object.freeze({
  __proto__: null,
  swizzle,
  addAxis,
  lerp: lerp2,
  translate,
  rotate,
  map,
  reduce,
  expand,
  center,
  sort
});

// node_modules/maath/dist/easing-0f4db1c0.esm.js
var rsqw = function rsqw2(t) {
  var delta = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.01;
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1 / (2 * Math.PI);
  return a / Math.atan(1 / delta) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};
var exp = function exp2(t) {
  return 1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t);
};
var linear = function linear2(t) {
  return t;
};
var sine = {
  "in": function _in(x) {
    return 1 - Math.cos(x * Math.PI / 2);
  },
  out: function out(x) {
    return Math.sin(x * Math.PI / 2);
  },
  inOut: function inOut(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }
};
var cubic = {
  "in": function _in2(x) {
    return x * x * x;
  },
  out: function out2(x) {
    return 1 - Math.pow(1 - x, 3);
  },
  inOut: function inOut2(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
};
var quint = {
  "in": function _in3(x) {
    return x * x * x * x * x;
  },
  out: function out3(x) {
    return 1 - Math.pow(1 - x, 5);
  },
  inOut: function inOut3(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  }
};
var circ = {
  "in": function _in4(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  },
  out: function out4(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  },
  inOut: function inOut4(x) {
    return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  }
};
var quart = {
  "in": function _in5(t) {
    return t * t * t * t;
  },
  out: function out5(t) {
    return 1 - --t * t * t * t;
  },
  inOut: function inOut5(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  }
};
var expo = {
  "in": function _in6(x) {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  },
  out: function out6(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  },
  inOut: function inOut6(x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
  }
};
function damp(current, prop, target) {
  var smoothTime = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25;
  var delta = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.01;
  var maxSpeed = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Infinity;
  var easing2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : exp;
  var eps = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 1e-3;
  var vel = "velocity_" + prop;
  if (current.__damp === void 0) current.__damp = {};
  if (current.__damp[vel] === void 0) current.__damp[vel] = 0;
  if (Math.abs(current[prop] - target) <= eps) {
    current[prop] = target;
    return false;
  }
  smoothTime = Math.max(1e-4, smoothTime);
  var omega = 2 / smoothTime;
  var t = easing2(omega * delta);
  var change = current[prop] - target;
  var originalTo = target;
  var maxChange = maxSpeed * smoothTime;
  change = Math.min(Math.max(change, -maxChange), maxChange);
  target = current[prop] - change;
  var temp = (current.__damp[vel] + omega * change) * delta;
  current.__damp[vel] = (current.__damp[vel] - omega * temp) * t;
  var output = target + (change + temp) * t;
  if (originalTo - current[prop] > 0 === output > originalTo) {
    output = originalTo;
    current.__damp[vel] = (output - originalTo) / delta;
  }
  current[prop] = output;
  return true;
}
var isCamera = function isCamera2(v) {
  return v && v.isCamera;
};
var isLight = function isLight2(v) {
  return v && v.isLight;
};
var vl3d = new Vector3();
var _q1 = new Quaternion();
var _q2 = new Quaternion();
var _m1 = new Matrix4();
var _position = new Vector3();
function dampLookAt(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") vl3d.setScalar(target);
  else if (Array.isArray(target)) vl3d.set(target[0], target[1], target[2]);
  else vl3d.copy(target);
  var parent = current.parent;
  current.updateWorldMatrix(true, false);
  _position.setFromMatrixPosition(current.matrixWorld);
  if (isCamera(current) || isLight(current)) _m1.lookAt(_position, vl3d, current.up);
  else _m1.lookAt(vl3d, _position, current.up);
  dampQ(current.quaternion, _q2.setFromRotationMatrix(_m1), smoothTime, delta, maxSpeed, easing2, eps);
  if (parent) {
    _m1.extractRotation(parent.matrixWorld);
    _q1.setFromRotationMatrix(_m1);
    dampQ(current.quaternion, _q2.copy(current.quaternion).premultiply(_q1.invert()), smoothTime, delta, maxSpeed, easing2, eps);
  }
}
function dampAngle(current, prop, target, smoothTime, delta, maxSpeed, easing2, eps) {
  return damp(current, prop, current[prop] + deltaAngle(current[prop], target), smoothTime, delta, maxSpeed, easing2, eps);
}
var v2d = new Vector2();
var a2;
var b2;
function damp2(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v2d.setScalar(target);
  else if (Array.isArray(target)) v2d.set(target[0], target[1]);
  else v2d.copy(target);
  a2 = damp(current, "x", v2d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b2 = damp(current, "y", v2d.y, smoothTime, delta, maxSpeed, easing2, eps);
  return a2 || b2;
}
var v3d = new Vector3();
var a3;
var b3;
var c3;
function damp3(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v3d.setScalar(target);
  else if (Array.isArray(target)) v3d.set(target[0], target[1], target[2]);
  else v3d.copy(target);
  a3 = damp(current, "x", v3d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b3 = damp(current, "y", v3d.y, smoothTime, delta, maxSpeed, easing2, eps);
  c3 = damp(current, "z", v3d.z, smoothTime, delta, maxSpeed, easing2, eps);
  return a3 || b3 || c3;
}
var v4d = new Vector4();
var a4;
var b4;
var c4;
var d4;
function damp4(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (typeof target === "number") v4d.setScalar(target);
  else if (Array.isArray(target)) v4d.set(target[0], target[1], target[2], target[3]);
  else v4d.copy(target);
  a4 = damp(current, "x", v4d.x, smoothTime, delta, maxSpeed, easing2, eps);
  b4 = damp(current, "y", v4d.y, smoothTime, delta, maxSpeed, easing2, eps);
  c4 = damp(current, "z", v4d.z, smoothTime, delta, maxSpeed, easing2, eps);
  d4 = damp(current, "w", v4d.w, smoothTime, delta, maxSpeed, easing2, eps);
  return a4 || b4 || c4 || d4;
}
var rot = new Euler();
var aE;
var bE;
var cE;
function dampE(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (Array.isArray(target)) rot.set(target[0], target[1], target[2], target[3]);
  else rot.copy(target);
  aE = dampAngle(current, "x", rot.x, smoothTime, delta, maxSpeed, easing2, eps);
  bE = dampAngle(current, "y", rot.y, smoothTime, delta, maxSpeed, easing2, eps);
  cE = dampAngle(current, "z", rot.z, smoothTime, delta, maxSpeed, easing2, eps);
  return aE || bE || cE;
}
var col = new Color();
var aC;
var bC;
var cC;
function dampC(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (target instanceof Color) col.copy(target);
  else if (Array.isArray(target)) col.setRGB(target[0], target[1], target[2]);
  else col.set(target);
  aC = damp(current, "r", col.r, smoothTime, delta, maxSpeed, easing2, eps);
  bC = damp(current, "g", col.g, smoothTime, delta, maxSpeed, easing2, eps);
  cC = damp(current, "b", col.b, smoothTime, delta, maxSpeed, easing2, eps);
  return aC || bC || cC;
}
var qt = new Quaternion();
var v4result = new Vector4();
var v4velocity = new Vector4();
var v4error = new Vector4();
var aQ;
var bQ;
var cQ;
var dQ;
function dampQ(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  var cur = current;
  if (Array.isArray(target)) qt.set(target[0], target[1], target[2], target[3]);
  else qt.copy(target);
  var multi = current.dot(qt) > 0 ? 1 : -1;
  qt.x *= multi;
  qt.y *= multi;
  qt.z *= multi;
  qt.w *= multi;
  aQ = damp(current, "x", qt.x, smoothTime, delta, maxSpeed, easing2, eps);
  bQ = damp(current, "y", qt.y, smoothTime, delta, maxSpeed, easing2, eps);
  cQ = damp(current, "z", qt.z, smoothTime, delta, maxSpeed, easing2, eps);
  dQ = damp(current, "w", qt.w, smoothTime, delta, maxSpeed, easing2, eps);
  v4result.set(current.x, current.y, current.z, current.w).normalize();
  v4velocity.set(cur.__damp.velocity_x, cur.__damp.velocity_y, cur.__damp.velocity_z, cur.__damp.velocity_w);
  v4error.copy(v4result).multiplyScalar(v4velocity.dot(v4result) / v4result.dot(v4result));
  cur.__damp.velocity_x -= v4error.x;
  cur.__damp.velocity_y -= v4error.y;
  cur.__damp.velocity_z -= v4error.z;
  cur.__damp.velocity_w -= v4error.w;
  current.set(v4result.x, v4result.y, v4result.z, v4result.w);
  return aQ || bQ || cQ || dQ;
}
var spherical = new Spherical();
var aS;
var bS;
var cS;
function dampS(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  if (Array.isArray(target)) spherical.set(target[0], target[1], target[2]);
  else spherical.copy(target);
  aS = damp(current, "radius", spherical.radius, smoothTime, delta, maxSpeed, easing2, eps);
  bS = dampAngle(current, "phi", spherical.phi, smoothTime, delta, maxSpeed, easing2, eps);
  cS = dampAngle(current, "theta", spherical.theta, smoothTime, delta, maxSpeed, easing2, eps);
  return aS || bS || cS;
}
var mat = new Matrix4();
var mPos = new Vector3();
var mRot = new Quaternion();
var mSca = new Vector3();
var aM;
var bM;
var cM;
function dampM(current, target, smoothTime, delta, maxSpeed, easing2, eps) {
  var cur = current;
  if (cur.__damp === void 0) {
    cur.__damp = {
      position: new Vector3(),
      rotation: new Quaternion(),
      scale: new Vector3()
    };
    current.decompose(cur.__damp.position, cur.__damp.rotation, cur.__damp.scale);
  }
  if (Array.isArray(target)) mat.set.apply(mat, _toConsumableArray(target));
  else mat.copy(target);
  mat.decompose(mPos, mRot, mSca);
  aM = damp3(cur.__damp.position, mPos, smoothTime, delta, maxSpeed, easing2, eps);
  bM = dampQ(cur.__damp.rotation, mRot, smoothTime, delta, maxSpeed, easing2, eps);
  cM = damp3(cur.__damp.scale, mSca, smoothTime, delta, maxSpeed, easing2, eps);
  current.compose(cur.__damp.position, cur.__damp.rotation, cur.__damp.scale);
  return aM || bM || cM;
}
var easing = Object.freeze({
  __proto__: null,
  rsqw,
  exp,
  linear,
  sine,
  cubic,
  quint,
  circ,
  quart,
  expo,
  damp,
  dampLookAt,
  dampAngle,
  damp2,
  damp3,
  damp4,
  dampE,
  dampC,
  dampQ,
  dampS,
  dampM
});

// node_modules/maath/dist/geometry-0fb11825.esm.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var RoundedPlaneGeometry = function(_THREE$BufferGeometry) {
  _inherits(RoundedPlaneGeometry2, _THREE$BufferGeometry);
  var _super = _createSuper(RoundedPlaneGeometry2);
  function RoundedPlaneGeometry2() {
    var _this;
    var width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2;
    var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var radius = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.2;
    var segments = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 16;
    _classCallCheck(this, RoundedPlaneGeometry2);
    _this = _super.call(this);
    _this.parameters = {
      width,
      height,
      radius,
      segments
    };
    var wi = width / 2 - radius;
    var hi = height / 2 - radius;
    var ul = radius / width;
    var ur = (width - radius) / width;
    var vl = radius / height;
    var vh = (height - radius) / height;
    var positions = [wi, hi, 0, -wi, hi, 0, -wi, -hi, 0, wi, -hi, 0];
    var uvs = [ur, vh, ul, vh, ul, vl, ur, vl];
    var n = [3 * (segments + 1) + 3, 3 * (segments + 1) + 4, segments + 4, segments + 5, 2 * (segments + 1) + 4, 2, 1, 2 * (segments + 1) + 3, 3, 4 * (segments + 1) + 3, 4, 0];
    var indices = [n[0], n[1], n[2], n[0], n[2], n[3], n[4], n[5], n[6], n[4], n[6], n[7], n[8], n[9], n[10], n[8], n[10], n[11]];
    var phi, cos, sin, xc, yc, uc, vc, idx;
    for (var i = 0; i < 4; i++) {
      xc = i < 1 || i > 2 ? wi : -wi;
      yc = i < 2 ? hi : -hi;
      uc = i < 1 || i > 2 ? ur : ul;
      vc = i < 2 ? vh : vl;
      for (var j = 0; j <= segments; j++) {
        phi = Math.PI / 2 * (i + j / segments);
        cos = Math.cos(phi);
        sin = Math.sin(phi);
        positions.push(xc + radius * cos, yc + radius * sin, 0);
        uvs.push(uc + ul * cos, vc + vl * sin);
        if (j < segments) {
          idx = (segments + 1) * i + j + 4;
          indices.push(i, idx, idx + 1);
        }
      }
    }
    _this.setIndex(new BufferAttribute(new Uint32Array(indices), 1));
    _this.setAttribute("position", new BufferAttribute(new Float32Array(positions), 3));
    _this.setAttribute("uv", new BufferAttribute(new Float32Array(uvs), 2));
    return _this;
  }
  return RoundedPlaneGeometry2;
}(BufferGeometry);
function applyCylindricalUV(bufferGeometry) {
  var uvs = [];
  for (var i = 0; i < bufferGeometry.attributes.position.array.length / 3; i++) {
    var x = bufferGeometry.attributes.position.array[i * 3 + 0];
    var y = bufferGeometry.attributes.position.array[i * 3 + 1];
    var z = bufferGeometry.attributes.position.array[i * 3 + 2];
    uvs.push(Math.atan2(x, z) / Math.PI * 0.5 + 0.5, y / Math.PI * 0.5 + 0.5);
  }
  if (bufferGeometry.attributes.uv) delete bufferGeometry.attributes.uv;
  bufferGeometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  bufferGeometry.attributes.uv.needsUpdate = true;
  return bufferGeometry;
}
function applySphereUV(bufferGeometry) {
  var uvs = [];
  var vertices = [];
  for (var i = 0; i < bufferGeometry.attributes.position.array.length / 3; i++) {
    var x = bufferGeometry.attributes.position.array[i * 3 + 0];
    var y = bufferGeometry.attributes.position.array[i * 3 + 1];
    var z = bufferGeometry.attributes.position.array[i * 3 + 2];
    vertices.push(new Vector3(x, y, z));
  }
  var polarVertices = vertices.map(cartesian2polar);
  for (var _i = 0; _i < polarVertices.length / 3; _i++) {
    var tri = new Triangle(vertices[_i * 3 + 0], vertices[_i * 3 + 1], vertices[_i * 3 + 2]);
    var normal = tri.getNormal(new Vector3());
    for (var f = 0; f < 3; f++) {
      var vertex = polarVertices[_i * 3 + f];
      if (vertex.theta === 0 && (vertex.phi === 0 || vertex.phi === Math.PI)) {
        var alignedVertice = vertex.phi === 0 ? _i * 3 + 1 : _i * 3 + 0;
        vertex = {
          r: vertex.r,
          phi: vertex.phi,
          theta: polarVertices[alignedVertice].theta
        };
      }
      if (vertex.theta === Math.PI && cartesian2polar(normal).theta < Math.PI / 2) {
        vertex.theta = -Math.PI;
      }
      var canvasPoint = polar2canvas(vertex);
      uvs.push(1 - canvasPoint.x, 1 - canvasPoint.y);
    }
  }
  if (bufferGeometry.attributes.uv) delete bufferGeometry.attributes.uv;
  bufferGeometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
  bufferGeometry.attributes.uv.needsUpdate = true;
  return bufferGeometry;
}
function cartesian2polar(position) {
  var r = Math.sqrt(position.x * position.x + position.z * position.z + position.y * position.y);
  return {
    r,
    phi: Math.acos(position.y / r),
    theta: Math.atan2(position.z, position.x)
  };
}
function polar2canvas(polarPoint) {
  return {
    y: polarPoint.phi / Math.PI,
    x: (polarPoint.theta + Math.PI) / (2 * Math.PI)
  };
}
function applyBoxUV(bufferGeometry) {
  bufferGeometry.computeBoundingBox();
  var bboxSize = bufferGeometry.boundingBox.getSize(new Vector3());
  var boxSize = Math.min(bboxSize.x, bboxSize.y, bboxSize.z);
  var boxGeometry = new BoxGeometry(boxSize, boxSize, boxSize);
  var cube = new Mesh(boxGeometry);
  cube.rotation.set(0, 0, 0);
  cube.updateWorldMatrix(true, false);
  var transformMatrix = cube.matrix.clone().invert();
  var uvBbox = new Box3(new Vector3(-boxSize / 2, -boxSize / 2, -boxSize / 2), new Vector3(boxSize / 2, boxSize / 2, boxSize / 2));
  _applyBoxUV(bufferGeometry, transformMatrix, uvBbox, boxSize);
  bufferGeometry.attributes.uv.needsUpdate = true;
  return bufferGeometry;
}
function _applyBoxUV(geom, transformMatrix, bbox, bbox_max_size) {
  var coords = [];
  coords.length = 2 * geom.attributes.position.array.length / 3;
  var makeUVs = function makeUVs2(v02, v12, v22) {
    v02.applyMatrix4(transformMatrix);
    v12.applyMatrix4(transformMatrix);
    v22.applyMatrix4(transformMatrix);
    var n = new Vector3();
    n.crossVectors(v12.clone().sub(v02), v12.clone().sub(v22)).normalize();
    n.x = Math.abs(n.x);
    n.y = Math.abs(n.y);
    n.z = Math.abs(n.z);
    var uv0 = new Vector2();
    var uv1 = new Vector2();
    var uv2 = new Vector2();
    if (n.y > n.x && n.y > n.z) {
      uv0.x = (v02.x - bbox.min.x) / bbox_max_size;
      uv0.y = (bbox.max.z - v02.z) / bbox_max_size;
      uv1.x = (v12.x - bbox.min.x) / bbox_max_size;
      uv1.y = (bbox.max.z - v12.z) / bbox_max_size;
      uv2.x = (v22.x - bbox.min.x) / bbox_max_size;
      uv2.y = (bbox.max.z - v22.z) / bbox_max_size;
    } else if (n.x > n.y && n.x > n.z) {
      uv0.x = (v02.z - bbox.min.z) / bbox_max_size;
      uv0.y = (v02.y - bbox.min.y) / bbox_max_size;
      uv1.x = (v12.z - bbox.min.z) / bbox_max_size;
      uv1.y = (v12.y - bbox.min.y) / bbox_max_size;
      uv2.x = (v22.z - bbox.min.z) / bbox_max_size;
      uv2.y = (v22.y - bbox.min.y) / bbox_max_size;
    } else if (n.z > n.y && n.z > n.x) {
      uv0.x = (v02.x - bbox.min.x) / bbox_max_size;
      uv0.y = (v02.y - bbox.min.y) / bbox_max_size;
      uv1.x = (v12.x - bbox.min.x) / bbox_max_size;
      uv1.y = (v12.y - bbox.min.y) / bbox_max_size;
      uv2.x = (v22.x - bbox.min.x) / bbox_max_size;
      uv2.y = (v22.y - bbox.min.y) / bbox_max_size;
    }
    return {
      uv0,
      uv1,
      uv2
    };
  };
  if (geom.index) {
    for (var vi = 0; vi < geom.index.array.length; vi += 3) {
      var idx0 = geom.index.array[vi];
      var idx1 = geom.index.array[vi + 1];
      var idx2 = geom.index.array[vi + 2];
      var vx0 = geom.attributes.position.array[3 * idx0];
      var vy0 = geom.attributes.position.array[3 * idx0 + 1];
      var vz0 = geom.attributes.position.array[3 * idx0 + 2];
      var vx1 = geom.attributes.position.array[3 * idx1];
      var vy1 = geom.attributes.position.array[3 * idx1 + 1];
      var vz1 = geom.attributes.position.array[3 * idx1 + 2];
      var vx2 = geom.attributes.position.array[3 * idx2];
      var vy2 = geom.attributes.position.array[3 * idx2 + 1];
      var vz2 = geom.attributes.position.array[3 * idx2 + 2];
      var v0 = new Vector3(vx0, vy0, vz0);
      var v1 = new Vector3(vx1, vy1, vz1);
      var v2 = new Vector3(vx2, vy2, vz2);
      var uvs = makeUVs(v0, v1, v2);
      coords[2 * idx0] = uvs.uv0.x;
      coords[2 * idx0 + 1] = uvs.uv0.y;
      coords[2 * idx1] = uvs.uv1.x;
      coords[2 * idx1 + 1] = uvs.uv1.y;
      coords[2 * idx2] = uvs.uv2.x;
      coords[2 * idx2 + 1] = uvs.uv2.y;
    }
  } else {
    for (var _vi = 0; _vi < geom.attributes.position.array.length; _vi += 9) {
      var _vx = geom.attributes.position.array[_vi];
      var _vy = geom.attributes.position.array[_vi + 1];
      var _vz = geom.attributes.position.array[_vi + 2];
      var _vx2 = geom.attributes.position.array[_vi + 3];
      var _vy2 = geom.attributes.position.array[_vi + 4];
      var _vz2 = geom.attributes.position.array[_vi + 5];
      var _vx3 = geom.attributes.position.array[_vi + 6];
      var _vy3 = geom.attributes.position.array[_vi + 7];
      var _vz3 = geom.attributes.position.array[_vi + 8];
      var _v = new Vector3(_vx, _vy, _vz);
      var _v2 = new Vector3(_vx2, _vy2, _vz2);
      var _v3 = new Vector3(_vx3, _vy3, _vz3);
      var _uvs = makeUVs(_v, _v2, _v3);
      var _idx = _vi / 3;
      var _idx2 = _idx + 1;
      var _idx3 = _idx + 2;
      coords[2 * _idx] = _uvs.uv0.x;
      coords[2 * _idx + 1] = _uvs.uv0.y;
      coords[2 * _idx2] = _uvs.uv1.x;
      coords[2 * _idx2 + 1] = _uvs.uv1.y;
      coords[2 * _idx3] = _uvs.uv2.x;
      coords[2 * _idx3 + 1] = _uvs.uv2.y;
    }
  }
  if (geom.attributes.uv) delete geom.attributes.uv;
  geom.setAttribute("uv", new Float32BufferAttribute(coords, 2));
}
var geometry = Object.freeze({
  __proto__: null,
  RoundedPlaneGeometry,
  applyCylindricalUV,
  applySphereUV,
  applyBoxUV
});

// node_modules/maath/dist/three-eb2ad8c0.esm.js
function bufferToVectors(buffer2) {
  var stride = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
  var p = [];
  for (var i = 0, j = 0; i < buffer2.length; i += stride, j++) {
    if (stride === 3) {
      p[j] = new Vector3(buffer2[i], buffer2[i + 1], buffer2[i + 2]);
    } else {
      p[j] = new Vector2(buffer2[i], buffer2[i + 1]);
    }
  }
  return p;
}
function vectorsToBuffer(vectorArray) {
  var l = vectorArray.length;
  var stride = vectorArray[0].hasOwnProperty("z") ? 3 : 2;
  var buffer2 = new Float32Array(l * stride);
  for (var i = 0; i < l; i++) {
    var j = i * stride;
    buffer2[j] = vectorArray[i].x;
    buffer2[j + 1] = vectorArray[i].y;
    if (stride === 3) {
      buffer2[j + 2] = vectorArray[i].z;
    }
  }
  return buffer2;
}
var three = Object.freeze({
  __proto__: null,
  bufferToVectors,
  vectorsToBuffer
});

export {
  vector2,
  vector3,
  buffer,
  easing,
  geometry,
  three
};
//# sourceMappingURL=chunk-OSXQ7K6A.js.map
