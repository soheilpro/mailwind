import ks from "process";
import rt from "fs";
import Kt from "path";
import { hideBin as uf } from "yargs/helpers";
import tf from "yargs/yargs";
import en from "os";
import { spawn as rf } from "child_process";
var C = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ti(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Bs(e) {
  if (e.__esModule)
    return e;
  var u = e.default;
  if (typeof u == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
    };
    t.prototype = u.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), t;
}
var Pu = {}, Us = {}, ia = {};
ia.byteLength = cf;
ia.toByteArray = of;
ia.fromByteArray = ff;
var Bu = [], Cu = [], af = typeof Uint8Array < "u" ? Uint8Array : Array, un = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var qt = 0, nf = un.length; qt < nf; ++qt)
  Bu[qt] = un[qt], Cu[un.charCodeAt(qt)] = qt;
Cu["-".charCodeAt(0)] = 62;
Cu["_".charCodeAt(0)] = 63;
function Hs(e) {
  var u = e.length;
  if (u % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = e.indexOf("=");
  t === -1 && (t = u);
  var r = t === u ? 0 : 4 - t % 4;
  return [t, r];
}
function cf(e) {
  var u = Hs(e), t = u[0], r = u[1];
  return (t + r) * 3 / 4 - r;
}
function sf(e, u, t) {
  return (u + t) * 3 / 4 - t;
}
function of(e) {
  var u, t = Hs(e), r = t[0], a = t[1], n = new af(sf(e, r, a)), i = 0, c = a > 0 ? r - 4 : r, o;
  for (o = 0; o < c; o += 4)
    u = Cu[e.charCodeAt(o)] << 18 | Cu[e.charCodeAt(o + 1)] << 12 | Cu[e.charCodeAt(o + 2)] << 6 | Cu[e.charCodeAt(o + 3)], n[i++] = u >> 16 & 255, n[i++] = u >> 8 & 255, n[i++] = u & 255;
  return a === 2 && (u = Cu[e.charCodeAt(o)] << 2 | Cu[e.charCodeAt(o + 1)] >> 4, n[i++] = u & 255), a === 1 && (u = Cu[e.charCodeAt(o)] << 10 | Cu[e.charCodeAt(o + 1)] << 4 | Cu[e.charCodeAt(o + 2)] >> 2, n[i++] = u >> 8 & 255, n[i++] = u & 255), n;
}
function df(e) {
  return Bu[e >> 18 & 63] + Bu[e >> 12 & 63] + Bu[e >> 6 & 63] + Bu[e & 63];
}
function lf(e, u, t) {
  for (var r, a = [], n = u; n < t; n += 3)
    r = (e[n] << 16 & 16711680) + (e[n + 1] << 8 & 65280) + (e[n + 2] & 255), a.push(df(r));
  return a.join("");
}
function ff(e) {
  for (var u, t = e.length, r = t % 3, a = [], n = 16383, i = 0, c = t - r; i < c; i += n)
    a.push(lf(e, i, i + n > c ? c : i + n));
  return r === 1 ? (u = e[t - 1], a.push(
    Bu[u >> 2] + Bu[u << 4 & 63] + "=="
  )) : r === 2 && (u = (e[t - 2] << 8) + e[t - 1], a.push(
    Bu[u >> 10] + Bu[u >> 4 & 63] + Bu[u << 2 & 63] + "="
  )), a.join("");
}
var _i = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
_i.read = function(e, u, t, r, a) {
  var n, i, c = a * 8 - r - 1, o = (1 << c) - 1, d = o >> 1, s = -7, E = t ? a - 1 : 0, b = t ? -1 : 1, m = e[u + E];
  for (E += b, n = m & (1 << -s) - 1, m >>= -s, s += c; s > 0; n = n * 256 + e[u + E], E += b, s -= 8)
    ;
  for (i = n & (1 << -s) - 1, n >>= -s, s += r; s > 0; i = i * 256 + e[u + E], E += b, s -= 8)
    ;
  if (n === 0)
    n = 1 - d;
  else {
    if (n === o)
      return i ? NaN : (m ? -1 : 1) * (1 / 0);
    i = i + Math.pow(2, r), n = n - d;
  }
  return (m ? -1 : 1) * i * Math.pow(2, n - r);
};
_i.write = function(e, u, t, r, a, n) {
  var i, c, o, d = n * 8 - a - 1, s = (1 << d) - 1, E = s >> 1, b = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = r ? 0 : n - 1, v = r ? 1 : -1, P = u < 0 || u === 0 && 1 / u < 0 ? 1 : 0;
  for (u = Math.abs(u), isNaN(u) || u === 1 / 0 ? (c = isNaN(u) ? 1 : 0, i = s) : (i = Math.floor(Math.log(u) / Math.LN2), u * (o = Math.pow(2, -i)) < 1 && (i--, o *= 2), i + E >= 1 ? u += b / o : u += b * Math.pow(2, 1 - E), u * o >= 2 && (i++, o /= 2), i + E >= s ? (c = 0, i = s) : i + E >= 1 ? (c = (u * o - 1) * Math.pow(2, a), i = i + E) : (c = u * Math.pow(2, E - 1) * Math.pow(2, a), i = 0)); a >= 8; e[t + m] = c & 255, m += v, c /= 256, a -= 8)
    ;
  for (i = i << a | c, d += a; d > 0; e[t + m] = i & 255, m += v, i /= 256, d -= 8)
    ;
  e[t + m - v] |= P * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const u = ia, t = _i, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = c, e.SlowBuffer = M, e.INSPECT_MAX_BYTES = 50;
  const a = 2147483647;
  e.kMaxLength = a, c.TYPED_ARRAY_SUPPORT = n(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function n() {
    try {
      const y = new Uint8Array(1), h = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(h, Uint8Array.prototype), Object.setPrototypeOf(y, h), y.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(c.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (c.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(c.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (c.isBuffer(this))
        return this.byteOffset;
    }
  });
  function i(y) {
    if (y > a)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
    const h = new Uint8Array(y);
    return Object.setPrototypeOf(h, c.prototype), h;
  }
  function c(y, h, p) {
    if (typeof y == "number") {
      if (typeof h == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return E(y);
    }
    return o(y, h, p);
  }
  c.poolSize = 8192;
  function o(y, h, p) {
    if (typeof y == "string")
      return b(y, h);
    if (ArrayBuffer.isView(y))
      return v(y);
    if (y == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
      );
    if (ee(y, ArrayBuffer) || y && ee(y.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ee(y, SharedArrayBuffer) || y && ee(y.buffer, SharedArrayBuffer)))
      return P(y, h, p);
    if (typeof y == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const N = y.valueOf && y.valueOf();
    if (N != null && N !== y)
      return c.from(N, h, p);
    const L = I(y);
    if (L)
      return L;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function")
      return c.from(y[Symbol.toPrimitive]("string"), h, p);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
    );
  }
  c.from = function(y, h, p) {
    return o(y, h, p);
  }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);
  function d(y) {
    if (typeof y != "number")
      throw new TypeError('"size" argument must be of type number');
    if (y < 0)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
  }
  function s(y, h, p) {
    return d(y), y <= 0 ? i(y) : h !== void 0 ? typeof p == "string" ? i(y).fill(h, p) : i(y).fill(h) : i(y);
  }
  c.alloc = function(y, h, p) {
    return s(y, h, p);
  };
  function E(y) {
    return d(y), i(y < 0 ? 0 : O(y) | 0);
  }
  c.allocUnsafe = function(y) {
    return E(y);
  }, c.allocUnsafeSlow = function(y) {
    return E(y);
  };
  function b(y, h) {
    if ((typeof h != "string" || h === "") && (h = "utf8"), !c.isEncoding(h))
      throw new TypeError("Unknown encoding: " + h);
    const p = U(y, h) | 0;
    let N = i(p);
    const L = N.write(y, h);
    return L !== p && (N = N.slice(0, L)), N;
  }
  function m(y) {
    const h = y.length < 0 ? 0 : O(y.length) | 0, p = i(h);
    for (let N = 0; N < h; N += 1)
      p[N] = y[N] & 255;
    return p;
  }
  function v(y) {
    if (ee(y, Uint8Array)) {
      const h = new Uint8Array(y);
      return P(h.buffer, h.byteOffset, h.byteLength);
    }
    return m(y);
  }
  function P(y, h, p) {
    if (h < 0 || y.byteLength < h)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (y.byteLength < h + (p || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let N;
    return h === void 0 && p === void 0 ? N = new Uint8Array(y) : p === void 0 ? N = new Uint8Array(y, h) : N = new Uint8Array(y, h, p), Object.setPrototypeOf(N, c.prototype), N;
  }
  function I(y) {
    if (c.isBuffer(y)) {
      const h = O(y.length) | 0, p = i(h);
      return p.length === 0 || y.copy(p, 0, 0, h), p;
    }
    if (y.length !== void 0)
      return typeof y.length != "number" || ce(y.length) ? i(0) : m(y);
    if (y.type === "Buffer" && Array.isArray(y.data))
      return m(y.data);
  }
  function O(y) {
    if (y >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return y | 0;
  }
  function M(y) {
    return +y != y && (y = 0), c.alloc(+y);
  }
  c.isBuffer = function(h) {
    return h != null && h._isBuffer === !0 && h !== c.prototype;
  }, c.compare = function(h, p) {
    if (ee(h, Uint8Array) && (h = c.from(h, h.offset, h.byteLength)), ee(p, Uint8Array) && (p = c.from(p, p.offset, p.byteLength)), !c.isBuffer(h) || !c.isBuffer(p))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (h === p)
      return 0;
    let N = h.length, L = p.length;
    for (let H = 0, q = Math.min(N, L); H < q; ++H)
      if (h[H] !== p[H]) {
        N = h[H], L = p[H];
        break;
      }
    return N < L ? -1 : L < N ? 1 : 0;
  }, c.isEncoding = function(h) {
    switch (String(h).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, c.concat = function(h, p) {
    if (!Array.isArray(h))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (h.length === 0)
      return c.alloc(0);
    let N;
    if (p === void 0)
      for (p = 0, N = 0; N < h.length; ++N)
        p += h[N].length;
    const L = c.allocUnsafe(p);
    let H = 0;
    for (N = 0; N < h.length; ++N) {
      let q = h[N];
      if (ee(q, Uint8Array))
        H + q.length > L.length ? (c.isBuffer(q) || (q = c.from(q)), q.copy(L, H)) : Uint8Array.prototype.set.call(
          L,
          q,
          H
        );
      else if (c.isBuffer(q))
        q.copy(L, H);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      H += q.length;
    }
    return L;
  };
  function U(y, h) {
    if (c.isBuffer(y))
      return y.length;
    if (ArrayBuffer.isView(y) || ee(y, ArrayBuffer))
      return y.byteLength;
    if (typeof y != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y
      );
    const p = y.length, N = arguments.length > 2 && arguments[2] === !0;
    if (!N && p === 0)
      return 0;
    let L = !1;
    for (; ; )
      switch (h) {
        case "ascii":
        case "latin1":
        case "binary":
          return p;
        case "utf8":
        case "utf-8":
          return Ne(y).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return p * 2;
        case "hex":
          return p >>> 1;
        case "base64":
          return Y(y).length;
        default:
          if (L)
            return N ? -1 : Ne(y).length;
          h = ("" + h).toLowerCase(), L = !0;
      }
  }
  c.byteLength = U;
  function B(y, h, p) {
    let N = !1;
    if ((h === void 0 || h < 0) && (h = 0), h > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, h >>>= 0, p <= h))
      return "";
    for (y || (y = "utf8"); ; )
      switch (y) {
        case "hex":
          return J(this, h, p);
        case "utf8":
        case "utf-8":
          return A(this, h, p);
        case "ascii":
          return R(this, h, p);
        case "latin1":
        case "binary":
          return $(this, h, p);
        case "base64":
          return T(this, h, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return W(this, h, p);
        default:
          if (N)
            throw new TypeError("Unknown encoding: " + y);
          y = (y + "").toLowerCase(), N = !0;
      }
  }
  c.prototype._isBuffer = !0;
  function w(y, h, p) {
    const N = y[h];
    y[h] = y[p], y[p] = N;
  }
  c.prototype.swap16 = function() {
    const h = this.length;
    if (h % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let p = 0; p < h; p += 2)
      w(this, p, p + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const h = this.length;
    if (h % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let p = 0; p < h; p += 4)
      w(this, p, p + 3), w(this, p + 1, p + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const h = this.length;
    if (h % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let p = 0; p < h; p += 8)
      w(this, p, p + 7), w(this, p + 1, p + 6), w(this, p + 2, p + 5), w(this, p + 3, p + 4);
    return this;
  }, c.prototype.toString = function() {
    const h = this.length;
    return h === 0 ? "" : arguments.length === 0 ? A(this, 0, h) : B.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(h) {
    if (!c.isBuffer(h))
      throw new TypeError("Argument must be a Buffer");
    return this === h ? !0 : c.compare(this, h) === 0;
  }, c.prototype.inspect = function() {
    let h = "";
    const p = e.INSPECT_MAX_BYTES;
    return h = this.toString("hex", 0, p).replace(/(.{2})/g, "$1 ").trim(), this.length > p && (h += " ... "), "<Buffer " + h + ">";
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(h, p, N, L, H) {
    if (ee(h, Uint8Array) && (h = c.from(h, h.offset, h.byteLength)), !c.isBuffer(h))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof h
      );
    if (p === void 0 && (p = 0), N === void 0 && (N = h ? h.length : 0), L === void 0 && (L = 0), H === void 0 && (H = this.length), p < 0 || N > h.length || L < 0 || H > this.length)
      throw new RangeError("out of range index");
    if (L >= H && p >= N)
      return 0;
    if (L >= H)
      return -1;
    if (p >= N)
      return 1;
    if (p >>>= 0, N >>>= 0, L >>>= 0, H >>>= 0, this === h)
      return 0;
    let q = H - L, ie = N - p;
    const Ie = Math.min(q, ie), Ae = this.slice(L, H), De = h.slice(p, N);
    for (let ge = 0; ge < Ie; ++ge)
      if (Ae[ge] !== De[ge]) {
        q = Ae[ge], ie = De[ge];
        break;
      }
    return q < ie ? -1 : ie < q ? 1 : 0;
  };
  function F(y, h, p, N, L) {
    if (y.length === 0)
      return -1;
    if (typeof p == "string" ? (N = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, ce(p) && (p = L ? 0 : y.length - 1), p < 0 && (p = y.length + p), p >= y.length) {
      if (L)
        return -1;
      p = y.length - 1;
    } else if (p < 0)
      if (L)
        p = 0;
      else
        return -1;
    if (typeof h == "string" && (h = c.from(h, N)), c.isBuffer(h))
      return h.length === 0 ? -1 : z(y, h, p, N, L);
    if (typeof h == "number")
      return h = h & 255, typeof Uint8Array.prototype.indexOf == "function" ? L ? Uint8Array.prototype.indexOf.call(y, h, p) : Uint8Array.prototype.lastIndexOf.call(y, h, p) : z(y, [h], p, N, L);
    throw new TypeError("val must be string, number or Buffer");
  }
  function z(y, h, p, N, L) {
    let H = 1, q = y.length, ie = h.length;
    if (N !== void 0 && (N = String(N).toLowerCase(), N === "ucs2" || N === "ucs-2" || N === "utf16le" || N === "utf-16le")) {
      if (y.length < 2 || h.length < 2)
        return -1;
      H = 2, q /= 2, ie /= 2, p /= 2;
    }
    function Ie(De, ge) {
      return H === 1 ? De[ge] : De.readUInt16BE(ge * H);
    }
    let Ae;
    if (L) {
      let De = -1;
      for (Ae = p; Ae < q; Ae++)
        if (Ie(y, Ae) === Ie(h, De === -1 ? 0 : Ae - De)) {
          if (De === -1 && (De = Ae), Ae - De + 1 === ie)
            return De * H;
        } else
          De !== -1 && (Ae -= Ae - De), De = -1;
    } else
      for (p + ie > q && (p = q - ie), Ae = p; Ae >= 0; Ae--) {
        let De = !0;
        for (let ge = 0; ge < ie; ge++)
          if (Ie(y, Ae + ge) !== Ie(h, ge)) {
            De = !1;
            break;
          }
        if (De)
          return Ae;
      }
    return -1;
  }
  c.prototype.includes = function(h, p, N) {
    return this.indexOf(h, p, N) !== -1;
  }, c.prototype.indexOf = function(h, p, N) {
    return F(this, h, p, N, !0);
  }, c.prototype.lastIndexOf = function(h, p, N) {
    return F(this, h, p, N, !1);
  };
  function Z(y, h, p, N) {
    p = Number(p) || 0;
    const L = y.length - p;
    N ? (N = Number(N), N > L && (N = L)) : N = L;
    const H = h.length;
    N > H / 2 && (N = H / 2);
    let q;
    for (q = 0; q < N; ++q) {
      const ie = parseInt(h.substr(q * 2, 2), 16);
      if (ce(ie))
        return q;
      y[p + q] = ie;
    }
    return q;
  }
  function ue(y, h, p, N) {
    return Q(Ne(h, y.length - p), y, p, N);
  }
  function V(y, h, p, N) {
    return Q(Et(h), y, p, N);
  }
  function l(y, h, p, N) {
    return Q(Y(h), y, p, N);
  }
  function g(y, h, p, N) {
    return Q(et(h, y.length - p), y, p, N);
  }
  c.prototype.write = function(h, p, N, L) {
    if (p === void 0)
      L = "utf8", N = this.length, p = 0;
    else if (N === void 0 && typeof p == "string")
      L = p, N = this.length, p = 0;
    else if (isFinite(p))
      p = p >>> 0, isFinite(N) ? (N = N >>> 0, L === void 0 && (L = "utf8")) : (L = N, N = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const H = this.length - p;
    if ((N === void 0 || N > H) && (N = H), h.length > 0 && (N < 0 || p < 0) || p > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    L || (L = "utf8");
    let q = !1;
    for (; ; )
      switch (L) {
        case "hex":
          return Z(this, h, p, N);
        case "utf8":
        case "utf-8":
          return ue(this, h, p, N);
        case "ascii":
        case "latin1":
        case "binary":
          return V(this, h, p, N);
        case "base64":
          return l(this, h, p, N);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return g(this, h, p, N);
        default:
          if (q)
            throw new TypeError("Unknown encoding: " + L);
          L = ("" + L).toLowerCase(), q = !0;
      }
  }, c.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function T(y, h, p) {
    return h === 0 && p === y.length ? u.fromByteArray(y) : u.fromByteArray(y.slice(h, p));
  }
  function A(y, h, p) {
    p = Math.min(y.length, p);
    const N = [];
    let L = h;
    for (; L < p; ) {
      const H = y[L];
      let q = null, ie = H > 239 ? 4 : H > 223 ? 3 : H > 191 ? 2 : 1;
      if (L + ie <= p) {
        let Ie, Ae, De, ge;
        switch (ie) {
          case 1:
            H < 128 && (q = H);
            break;
          case 2:
            Ie = y[L + 1], (Ie & 192) === 128 && (ge = (H & 31) << 6 | Ie & 63, ge > 127 && (q = ge));
            break;
          case 3:
            Ie = y[L + 1], Ae = y[L + 2], (Ie & 192) === 128 && (Ae & 192) === 128 && (ge = (H & 15) << 12 | (Ie & 63) << 6 | Ae & 63, ge > 2047 && (ge < 55296 || ge > 57343) && (q = ge));
            break;
          case 4:
            Ie = y[L + 1], Ae = y[L + 2], De = y[L + 3], (Ie & 192) === 128 && (Ae & 192) === 128 && (De & 192) === 128 && (ge = (H & 15) << 18 | (Ie & 63) << 12 | (Ae & 63) << 6 | De & 63, ge > 65535 && ge < 1114112 && (q = ge));
        }
      }
      q === null ? (q = 65533, ie = 1) : q > 65535 && (q -= 65536, N.push(q >>> 10 & 1023 | 55296), q = 56320 | q & 1023), N.push(q), L += ie;
    }
    return k(N);
  }
  const D = 4096;
  function k(y) {
    const h = y.length;
    if (h <= D)
      return String.fromCharCode.apply(String, y);
    let p = "", N = 0;
    for (; N < h; )
      p += String.fromCharCode.apply(
        String,
        y.slice(N, N += D)
      );
    return p;
  }
  function R(y, h, p) {
    let N = "";
    p = Math.min(y.length, p);
    for (let L = h; L < p; ++L)
      N += String.fromCharCode(y[L] & 127);
    return N;
  }
  function $(y, h, p) {
    let N = "";
    p = Math.min(y.length, p);
    for (let L = h; L < p; ++L)
      N += String.fromCharCode(y[L]);
    return N;
  }
  function J(y, h, p) {
    const N = y.length;
    (!h || h < 0) && (h = 0), (!p || p < 0 || p > N) && (p = N);
    let L = "";
    for (let H = h; H < p; ++H)
      L += Ru[y[H]];
    return L;
  }
  function W(y, h, p) {
    const N = y.slice(h, p);
    let L = "";
    for (let H = 0; H < N.length - 1; H += 2)
      L += String.fromCharCode(N[H] + N[H + 1] * 256);
    return L;
  }
  c.prototype.slice = function(h, p) {
    const N = this.length;
    h = ~~h, p = p === void 0 ? N : ~~p, h < 0 ? (h += N, h < 0 && (h = 0)) : h > N && (h = N), p < 0 ? (p += N, p < 0 && (p = 0)) : p > N && (p = N), p < h && (p = h);
    const L = this.subarray(h, p);
    return Object.setPrototypeOf(L, c.prototype), L;
  };
  function te(y, h, p) {
    if (y % 1 !== 0 || y < 0)
      throw new RangeError("offset is not uint");
    if (y + h > p)
      throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(h, p, N) {
    h = h >>> 0, p = p >>> 0, N || te(h, p, this.length);
    let L = this[h], H = 1, q = 0;
    for (; ++q < p && (H *= 256); )
      L += this[h + q] * H;
    return L;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(h, p, N) {
    h = h >>> 0, p = p >>> 0, N || te(h, p, this.length);
    let L = this[h + --p], H = 1;
    for (; p > 0 && (H *= 256); )
      L += this[h + --p] * H;
    return L;
  }, c.prototype.readUint8 = c.prototype.readUInt8 = function(h, p) {
    return h = h >>> 0, p || te(h, 1, this.length), this[h];
  }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(h, p) {
    return h = h >>> 0, p || te(h, 2, this.length), this[h] | this[h + 1] << 8;
  }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(h, p) {
    return h = h >>> 0, p || te(h, 2, this.length), this[h] << 8 | this[h + 1];
  }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(h, p) {
    return h = h >>> 0, p || te(h, 4, this.length), (this[h] | this[h + 1] << 8 | this[h + 2] << 16) + this[h + 3] * 16777216;
  }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(h, p) {
    return h = h >>> 0, p || te(h, 4, this.length), this[h] * 16777216 + (this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3]);
  }, c.prototype.readBigUInt64LE = Ue(function(h) {
    h = h >>> 0, Ve(h, "offset");
    const p = this[h], N = this[h + 7];
    (p === void 0 || N === void 0) && _e(h, this.length - 8);
    const L = p + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24, H = this[++h] + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + N * 2 ** 24;
    return BigInt(L) + (BigInt(H) << BigInt(32));
  }), c.prototype.readBigUInt64BE = Ue(function(h) {
    h = h >>> 0, Ve(h, "offset");
    const p = this[h], N = this[h + 7];
    (p === void 0 || N === void 0) && _e(h, this.length - 8);
    const L = p * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h], H = this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + N;
    return (BigInt(L) << BigInt(32)) + BigInt(H);
  }), c.prototype.readIntLE = function(h, p, N) {
    h = h >>> 0, p = p >>> 0, N || te(h, p, this.length);
    let L = this[h], H = 1, q = 0;
    for (; ++q < p && (H *= 256); )
      L += this[h + q] * H;
    return H *= 128, L >= H && (L -= Math.pow(2, 8 * p)), L;
  }, c.prototype.readIntBE = function(h, p, N) {
    h = h >>> 0, p = p >>> 0, N || te(h, p, this.length);
    let L = p, H = 1, q = this[h + --L];
    for (; L > 0 && (H *= 256); )
      q += this[h + --L] * H;
    return H *= 128, q >= H && (q -= Math.pow(2, 8 * p)), q;
  }, c.prototype.readInt8 = function(h, p) {
    return h = h >>> 0, p || te(h, 1, this.length), this[h] & 128 ? (255 - this[h] + 1) * -1 : this[h];
  }, c.prototype.readInt16LE = function(h, p) {
    h = h >>> 0, p || te(h, 2, this.length);
    const N = this[h] | this[h + 1] << 8;
    return N & 32768 ? N | 4294901760 : N;
  }, c.prototype.readInt16BE = function(h, p) {
    h = h >>> 0, p || te(h, 2, this.length);
    const N = this[h + 1] | this[h] << 8;
    return N & 32768 ? N | 4294901760 : N;
  }, c.prototype.readInt32LE = function(h, p) {
    return h = h >>> 0, p || te(h, 4, this.length), this[h] | this[h + 1] << 8 | this[h + 2] << 16 | this[h + 3] << 24;
  }, c.prototype.readInt32BE = function(h, p) {
    return h = h >>> 0, p || te(h, 4, this.length), this[h] << 24 | this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3];
  }, c.prototype.readBigInt64LE = Ue(function(h) {
    h = h >>> 0, Ve(h, "offset");
    const p = this[h], N = this[h + 7];
    (p === void 0 || N === void 0) && _e(h, this.length - 8);
    const L = this[h + 4] + this[h + 5] * 2 ** 8 + this[h + 6] * 2 ** 16 + (N << 24);
    return (BigInt(L) << BigInt(32)) + BigInt(p + this[++h] * 2 ** 8 + this[++h] * 2 ** 16 + this[++h] * 2 ** 24);
  }), c.prototype.readBigInt64BE = Ue(function(h) {
    h = h >>> 0, Ve(h, "offset");
    const p = this[h], N = this[h + 7];
    (p === void 0 || N === void 0) && _e(h, this.length - 8);
    const L = (p << 24) + // Overflow
    this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + this[++h];
    return (BigInt(L) << BigInt(32)) + BigInt(this[++h] * 2 ** 24 + this[++h] * 2 ** 16 + this[++h] * 2 ** 8 + N);
  }), c.prototype.readFloatLE = function(h, p) {
    return h = h >>> 0, p || te(h, 4, this.length), t.read(this, h, !0, 23, 4);
  }, c.prototype.readFloatBE = function(h, p) {
    return h = h >>> 0, p || te(h, 4, this.length), t.read(this, h, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(h, p) {
    return h = h >>> 0, p || te(h, 8, this.length), t.read(this, h, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(h, p) {
    return h = h >>> 0, p || te(h, 8, this.length), t.read(this, h, !1, 52, 8);
  };
  function re(y, h, p, N, L, H) {
    if (!c.isBuffer(y))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (h > L || h < H)
      throw new RangeError('"value" argument is out of bounds');
    if (p + N > y.length)
      throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(h, p, N, L) {
    if (h = +h, p = p >>> 0, N = N >>> 0, !L) {
      const ie = Math.pow(2, 8 * N) - 1;
      re(this, h, p, N, ie, 0);
    }
    let H = 1, q = 0;
    for (this[p] = h & 255; ++q < N && (H *= 256); )
      this[p + q] = h / H & 255;
    return p + N;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(h, p, N, L) {
    if (h = +h, p = p >>> 0, N = N >>> 0, !L) {
      const ie = Math.pow(2, 8 * N) - 1;
      re(this, h, p, N, ie, 0);
    }
    let H = N - 1, q = 1;
    for (this[p + H] = h & 255; --H >= 0 && (q *= 256); )
      this[p + H] = h / q & 255;
    return p + N;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 1, 255, 0), this[p] = h & 255, p + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 2, 65535, 0), this[p] = h & 255, this[p + 1] = h >>> 8, p + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 2, 65535, 0), this[p] = h >>> 8, this[p + 1] = h & 255, p + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 4, 4294967295, 0), this[p + 3] = h >>> 24, this[p + 2] = h >>> 16, this[p + 1] = h >>> 8, this[p] = h & 255, p + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 4, 4294967295, 0), this[p] = h >>> 24, this[p + 1] = h >>> 16, this[p + 2] = h >>> 8, this[p + 3] = h & 255, p + 4;
  };
  function we(y, h, p, N, L) {
    Be(h, N, L, y, p, 7);
    let H = Number(h & BigInt(4294967295));
    y[p++] = H, H = H >> 8, y[p++] = H, H = H >> 8, y[p++] = H, H = H >> 8, y[p++] = H;
    let q = Number(h >> BigInt(32) & BigInt(4294967295));
    return y[p++] = q, q = q >> 8, y[p++] = q, q = q >> 8, y[p++] = q, q = q >> 8, y[p++] = q, p;
  }
  function Iu(y, h, p, N, L) {
    Be(h, N, L, y, p, 7);
    let H = Number(h & BigInt(4294967295));
    y[p + 7] = H, H = H >> 8, y[p + 6] = H, H = H >> 8, y[p + 5] = H, H = H >> 8, y[p + 4] = H;
    let q = Number(h >> BigInt(32) & BigInt(4294967295));
    return y[p + 3] = q, q = q >> 8, y[p + 2] = q, q = q >> 8, y[p + 1] = q, q = q >> 8, y[p] = q, p + 8;
  }
  c.prototype.writeBigUInt64LE = Ue(function(h, p = 0) {
    return we(this, h, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = Ue(function(h, p = 0) {
    return Iu(this, h, p, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(h, p, N, L) {
    if (h = +h, p = p >>> 0, !L) {
      const Ie = Math.pow(2, 8 * N - 1);
      re(this, h, p, N, Ie - 1, -Ie);
    }
    let H = 0, q = 1, ie = 0;
    for (this[p] = h & 255; ++H < N && (q *= 256); )
      h < 0 && ie === 0 && this[p + H - 1] !== 0 && (ie = 1), this[p + H] = (h / q >> 0) - ie & 255;
    return p + N;
  }, c.prototype.writeIntBE = function(h, p, N, L) {
    if (h = +h, p = p >>> 0, !L) {
      const Ie = Math.pow(2, 8 * N - 1);
      re(this, h, p, N, Ie - 1, -Ie);
    }
    let H = N - 1, q = 1, ie = 0;
    for (this[p + H] = h & 255; --H >= 0 && (q *= 256); )
      h < 0 && ie === 0 && this[p + H + 1] !== 0 && (ie = 1), this[p + H] = (h / q >> 0) - ie & 255;
    return p + N;
  }, c.prototype.writeInt8 = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 1, 127, -128), h < 0 && (h = 255 + h + 1), this[p] = h & 255, p + 1;
  }, c.prototype.writeInt16LE = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 2, 32767, -32768), this[p] = h & 255, this[p + 1] = h >>> 8, p + 2;
  }, c.prototype.writeInt16BE = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 2, 32767, -32768), this[p] = h >>> 8, this[p + 1] = h & 255, p + 2;
  }, c.prototype.writeInt32LE = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 4, 2147483647, -2147483648), this[p] = h & 255, this[p + 1] = h >>> 8, this[p + 2] = h >>> 16, this[p + 3] = h >>> 24, p + 4;
  }, c.prototype.writeInt32BE = function(h, p, N) {
    return h = +h, p = p >>> 0, N || re(this, h, p, 4, 2147483647, -2147483648), h < 0 && (h = 4294967295 + h + 1), this[p] = h >>> 24, this[p + 1] = h >>> 16, this[p + 2] = h >>> 8, this[p + 3] = h & 255, p + 4;
  }, c.prototype.writeBigInt64LE = Ue(function(h, p = 0) {
    return we(this, h, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = Ue(function(h, p = 0) {
    return Iu(this, h, p, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function he(y, h, p, N, L, H) {
    if (p + N > y.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("Index out of range");
  }
  function hu(y, h, p, N, L) {
    return h = +h, p = p >>> 0, L || he(y, h, p, 4), t.write(y, h, p, N, 23, 4), p + 4;
  }
  c.prototype.writeFloatLE = function(h, p, N) {
    return hu(this, h, p, !0, N);
  }, c.prototype.writeFloatBE = function(h, p, N) {
    return hu(this, h, p, !1, N);
  };
  function Du(y, h, p, N, L) {
    return h = +h, p = p >>> 0, L || he(y, h, p, 8), t.write(y, h, p, N, 52, 8), p + 8;
  }
  c.prototype.writeDoubleLE = function(h, p, N) {
    return Du(this, h, p, !0, N);
  }, c.prototype.writeDoubleBE = function(h, p, N) {
    return Du(this, h, p, !1, N);
  }, c.prototype.copy = function(h, p, N, L) {
    if (!c.isBuffer(h))
      throw new TypeError("argument should be a Buffer");
    if (N || (N = 0), !L && L !== 0 && (L = this.length), p >= h.length && (p = h.length), p || (p = 0), L > 0 && L < N && (L = N), L === N || h.length === 0 || this.length === 0)
      return 0;
    if (p < 0)
      throw new RangeError("targetStart out of bounds");
    if (N < 0 || N >= this.length)
      throw new RangeError("Index out of range");
    if (L < 0)
      throw new RangeError("sourceEnd out of bounds");
    L > this.length && (L = this.length), h.length - p < L - N && (L = h.length - p + N);
    const H = L - N;
    return this === h && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(p, N, L) : Uint8Array.prototype.set.call(
      h,
      this.subarray(N, L),
      p
    ), H;
  }, c.prototype.fill = function(h, p, N, L) {
    if (typeof h == "string") {
      if (typeof p == "string" ? (L = p, p = 0, N = this.length) : typeof N == "string" && (L = N, N = this.length), L !== void 0 && typeof L != "string")
        throw new TypeError("encoding must be a string");
      if (typeof L == "string" && !c.isEncoding(L))
        throw new TypeError("Unknown encoding: " + L);
      if (h.length === 1) {
        const q = h.charCodeAt(0);
        (L === "utf8" && q < 128 || L === "latin1") && (h = q);
      }
    } else
      typeof h == "number" ? h = h & 255 : typeof h == "boolean" && (h = Number(h));
    if (p < 0 || this.length < p || this.length < N)
      throw new RangeError("Out of range index");
    if (N <= p)
      return this;
    p = p >>> 0, N = N === void 0 ? this.length : N >>> 0, h || (h = 0);
    let H;
    if (typeof h == "number")
      for (H = p; H < N; ++H)
        this[H] = h;
    else {
      const q = c.isBuffer(h) ? h : c.from(h, L), ie = q.length;
      if (ie === 0)
        throw new TypeError('The value "' + h + '" is invalid for argument "value"');
      for (H = 0; H < N - p; ++H)
        this[H + p] = q[H % ie];
    }
    return this;
  };
  const ye = {};
  function mt(y, h, p) {
    ye[y] = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: h.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${y}]`, this.stack, delete this.name;
      }
      get code() {
        return y;
      }
      set code(L) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: L,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${y}]: ${this.message}`;
      }
    };
  }
  mt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(y) {
      return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), mt(
    "ERR_INVALID_ARG_TYPE",
    function(y, h) {
      return `The "${y}" argument must be of type number. Received type ${typeof h}`;
    },
    TypeError
  ), mt(
    "ERR_OUT_OF_RANGE",
    function(y, h, p) {
      let N = `The value of "${y}" is out of range.`, L = p;
      return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? L = xe(String(p)) : typeof p == "bigint" && (L = String(p), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (L = xe(L)), L += "n"), N += ` It must be ${h}. Received ${L}`, N;
    },
    RangeError
  );
  function xe(y) {
    let h = "", p = y.length;
    const N = y[0] === "-" ? 1 : 0;
    for (; p >= N + 4; p -= 3)
      h = `_${y.slice(p - 3, p)}${h}`;
    return `${y.slice(0, p)}${h}`;
  }
  function gt(y, h, p) {
    Ve(h, "offset"), (y[h] === void 0 || y[h + p] === void 0) && _e(h, y.length - (p + 1));
  }
  function Be(y, h, p, N, L, H) {
    if (y > p || y < h) {
      const q = typeof h == "bigint" ? "n" : "";
      let ie;
      throw H > 3 ? h === 0 || h === BigInt(0) ? ie = `>= 0${q} and < 2${q} ** ${(H + 1) * 8}${q}` : ie = `>= -(2${q} ** ${(H + 1) * 8 - 1}${q}) and < 2 ** ${(H + 1) * 8 - 1}${q}` : ie = `>= ${h}${q} and <= ${p}${q}`, new ye.ERR_OUT_OF_RANGE("value", ie, y);
    }
    gt(N, L, H);
  }
  function Ve(y, h) {
    if (typeof y != "number")
      throw new ye.ERR_INVALID_ARG_TYPE(h, "number", y);
  }
  function _e(y, h, p) {
    throw Math.floor(y) !== y ? (Ve(y, p), new ye.ERR_OUT_OF_RANGE(p || "offset", "an integer", y)) : h < 0 ? new ye.ERR_BUFFER_OUT_OF_BOUNDS() : new ye.ERR_OUT_OF_RANGE(
      p || "offset",
      `>= ${p ? 1 : 0} and <= ${h}`,
      y
    );
  }
  const je = /[^+/0-9A-Za-z-_]/g;
  function Se(y) {
    if (y = y.split("=")[0], y = y.trim().replace(je, ""), y.length < 2)
      return "";
    for (; y.length % 4 !== 0; )
      y = y + "=";
    return y;
  }
  function Ne(y, h) {
    h = h || 1 / 0;
    let p;
    const N = y.length;
    let L = null;
    const H = [];
    for (let q = 0; q < N; ++q) {
      if (p = y.charCodeAt(q), p > 55295 && p < 57344) {
        if (!L) {
          if (p > 56319) {
            (h -= 3) > -1 && H.push(239, 191, 189);
            continue;
          } else if (q + 1 === N) {
            (h -= 3) > -1 && H.push(239, 191, 189);
            continue;
          }
          L = p;
          continue;
        }
        if (p < 56320) {
          (h -= 3) > -1 && H.push(239, 191, 189), L = p;
          continue;
        }
        p = (L - 55296 << 10 | p - 56320) + 65536;
      } else
        L && (h -= 3) > -1 && H.push(239, 191, 189);
      if (L = null, p < 128) {
        if ((h -= 1) < 0)
          break;
        H.push(p);
      } else if (p < 2048) {
        if ((h -= 2) < 0)
          break;
        H.push(
          p >> 6 | 192,
          p & 63 | 128
        );
      } else if (p < 65536) {
        if ((h -= 3) < 0)
          break;
        H.push(
          p >> 12 | 224,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else if (p < 1114112) {
        if ((h -= 4) < 0)
          break;
        H.push(
          p >> 18 | 240,
          p >> 12 & 63 | 128,
          p >> 6 & 63 | 128,
          p & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return H;
  }
  function Et(y) {
    const h = [];
    for (let p = 0; p < y.length; ++p)
      h.push(y.charCodeAt(p) & 255);
    return h;
  }
  function et(y, h) {
    let p, N, L;
    const H = [];
    for (let q = 0; q < y.length && !((h -= 2) < 0); ++q)
      p = y.charCodeAt(q), N = p >> 8, L = p % 256, H.push(L), H.push(N);
    return H;
  }
  function Y(y) {
    return u.toByteArray(Se(y));
  }
  function Q(y, h, p, N) {
    let L;
    for (L = 0; L < N && !(L + p >= h.length || L >= y.length); ++L)
      h[L + p] = y[L];
    return L;
  }
  function ee(y, h) {
    return y instanceof h || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === h.name;
  }
  function ce(y) {
    return y !== y;
  }
  const Ru = function() {
    const y = "0123456789abcdef", h = new Array(256);
    for (let p = 0; p < 16; ++p) {
      const N = p * 16;
      for (let L = 0; L < 16; ++L)
        h[N + L] = y[p] + y[L];
    }
    return h;
  }();
  function Ue(y) {
    return typeof BigInt > "u" ? ef : y;
  }
  function ef() {
    throw new Error("BigInt not supported");
  }
})(Us);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const u = Us, t = ks, r = (i) => i && i.__esModule ? i : { default: i }, a = r(t), n = globalThis || void 0 || self;
  Object.defineProperty(e, "Buffer", { enumerable: !0, get: () => u.Buffer }), Object.defineProperty(e, "process", { enumerable: !0, get: () => a.default }), e.global = n;
})(Pu);
var Fs = { exports: {} }, qs = {}, Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
var ca = {}, h0 = {}, Hr = C && C.__assign || function() {
  return Hr = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, Hr.apply(this, arguments);
};
Object.defineProperty(h0, "__esModule", { value: !0 });
h0.flatten = void 0;
var bf = {
  xml: !1,
  decodeEntities: !0
};
h0.default = bf;
var Ec = {
  _useHtmlParser2: !0,
  xmlMode: !0
};
function hf(e) {
  return e != null && e.xml ? typeof e.xml == "boolean" ? Ec : Hr(Hr({}, Ec), e.xml) : e ?? void 0;
}
h0.flatten = hf;
var Ce = {}, p0 = {}, gu = {}, Nu = {}, Le = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
  var u;
  (function(r) {
    r.Root = "root", r.Text = "text", r.Directive = "directive", r.Comment = "comment", r.Script = "script", r.Style = "style", r.Tag = "tag", r.CDATA = "cdata", r.Doctype = "doctype";
  })(u = e.ElementType || (e.ElementType = {}));
  function t(r) {
    return r.type === u.Tag || r.type === u.Script || r.type === u.Style;
  }
  e.isTag = t, e.Root = u.Root, e.Text = u.Text, e.Directive = u.Directive, e.Comment = u.Comment, e.Script = u.Script, e.Style = u.Style, e.Tag = u.Tag, e.CDATA = u.CDATA, e.Doctype = u.Doctype;
})(Le);
var se = {}, dt = C && C.__extends || function() {
  var e = function(u, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (r[n] = a[n]);
    }, e(u, t);
  };
  return function(u, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(u, t);
    function r() {
      this.constructor = u;
    }
    u.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), S0 = C && C.__assign || function() {
  return S0 = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, S0.apply(this, arguments);
};
Object.defineProperty(se, "__esModule", { value: !0 });
se.cloneNode = se.hasChildren = se.isDocument = se.isDirective = se.isComment = se.isText = se.isCDATA = se.isTag = se.Element = se.Document = se.CDATA = se.NodeWithChildren = se.ProcessingInstruction = se.Comment = se.Text = se.DataNode = se.Node = void 0;
var ou = Le, yi = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(u) {
        this.parent = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(u) {
        this.prev = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(u) {
        this.next = u;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(u) {
      return u === void 0 && (u = !1), Ai(this, u);
    }, e;
  }()
);
se.Node = yi;
var sa = (
  /** @class */
  function(e) {
    dt(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.data = t, r;
    }
    return Object.defineProperty(u.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(yi)
);
se.DataNode = sa;
var js = (
  /** @class */
  function(e) {
    dt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = ou.ElementType.Text, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(sa)
);
se.Text = js;
var $s = (
  /** @class */
  function(e) {
    dt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = ou.ElementType.Comment, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(sa)
);
se.Comment = $s;
var Vs = (
  /** @class */
  function(e) {
    dt(u, e);
    function u(t, r) {
      var a = e.call(this, r) || this;
      return a.name = t, a.type = ou.ElementType.Directive, a;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(sa)
);
se.ProcessingInstruction = Vs;
var oa = (
  /** @class */
  function(e) {
    dt(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.children = t, r;
    }
    return Object.defineProperty(u.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(yi)
);
se.NodeWithChildren = oa;
var Ys = (
  /** @class */
  function(e) {
    dt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = ou.ElementType.CDATA, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(oa)
);
se.CDATA = Ys;
var Xs = (
  /** @class */
  function(e) {
    dt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = ou.ElementType.Root, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(oa)
);
se.Document = Xs;
var Ws = (
  /** @class */
  function(e) {
    dt(u, e);
    function u(t, r, a, n) {
      a === void 0 && (a = []), n === void 0 && (n = t === "script" ? ou.ElementType.Script : t === "style" ? ou.ElementType.Style : ou.ElementType.Tag);
      var i = e.call(this, a) || this;
      return i.name = t, i.attribs = r, i.type = n, i;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(r) {
          var a, n;
          return {
            name: r,
            value: t.attribs[r],
            namespace: (a = t["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[r],
            prefix: (n = t["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(oa)
);
se.Element = Ws;
function zs(e) {
  return (0, ou.isTag)(e);
}
se.isTag = zs;
function Qs(e) {
  return e.type === ou.ElementType.CDATA;
}
se.isCDATA = Qs;
function Ks(e) {
  return e.type === ou.ElementType.Text;
}
se.isText = Ks;
function Js(e) {
  return e.type === ou.ElementType.Comment;
}
se.isComment = Js;
function Zs(e) {
  return e.type === ou.ElementType.Directive;
}
se.isDirective = Zs;
function eo(e) {
  return e.type === ou.ElementType.Root;
}
se.isDocument = eo;
function pf(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
se.hasChildren = pf;
function Ai(e, u) {
  u === void 0 && (u = !1);
  var t;
  if (Ks(e))
    t = new js(e.data);
  else if (Js(e))
    t = new $s(e.data);
  else if (zs(e)) {
    var r = u ? tn(e.children) : [], a = new Ws(e.name, S0({}, e.attribs), r);
    r.forEach(function(o) {
      return o.parent = a;
    }), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = S0({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = S0({}, e["x-attribsPrefix"])), t = a;
  } else if (Qs(e)) {
    var r = u ? tn(e.children) : [], n = new Ys(r);
    r.forEach(function(d) {
      return d.parent = n;
    }), t = n;
  } else if (eo(e)) {
    var r = u ? tn(e.children) : [], i = new Xs(r);
    r.forEach(function(d) {
      return d.parent = i;
    }), e["x-mode"] && (i["x-mode"] = e["x-mode"]), t = i;
  } else if (Zs(e)) {
    var c = new Vs(e.name, e.data);
    e["x-name"] != null && (c["x-name"] = e["x-name"], c["x-publicId"] = e["x-publicId"], c["x-systemId"] = e["x-systemId"]), t = c;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
se.cloneNode = Ai;
function tn(e) {
  for (var u = e.map(function(r) {
    return Ai(r, !0);
  }), t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t];
  return u;
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(c, o, d, s) {
    s === void 0 && (s = d);
    var E = Object.getOwnPropertyDescriptor(o, d);
    (!E || ("get" in E ? !o.__esModule : E.writable || E.configurable)) && (E = { enumerable: !0, get: function() {
      return o[d];
    } }), Object.defineProperty(c, s, E);
  } : function(c, o, d, s) {
    s === void 0 && (s = d), c[s] = o[d];
  }), t = C && C.__exportStar || function(c, o) {
    for (var d in c)
      d !== "default" && !Object.prototype.hasOwnProperty.call(o, d) && u(o, c, d);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var r = Le, a = se;
  t(se, e);
  var n = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, i = (
    /** @class */
    function() {
      function c(o, d, s) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (s = d, d = n), typeof o == "object" && (d = o, o = void 0), this.callback = o ?? null, this.options = d ?? n, this.elementCB = s ?? null;
      }
      return c.prototype.onparserinit = function(o) {
        this.parser = o;
      }, c.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, c.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, c.prototype.onerror = function(o) {
        this.handleCallback(o);
      }, c.prototype.onclosetag = function() {
        this.lastNode = null;
        var o = this.tagStack.pop();
        this.options.withEndIndices && (o.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(o);
      }, c.prototype.onopentag = function(o, d) {
        var s = this.options.xmlMode ? r.ElementType.Tag : void 0, E = new a.Element(o, d, void 0, s);
        this.addNode(E), this.tagStack.push(E);
      }, c.prototype.ontext = function(o) {
        var d = this.lastNode;
        if (d && d.type === r.ElementType.Text)
          d.data += o, this.options.withEndIndices && (d.endIndex = this.parser.endIndex);
        else {
          var s = new a.Text(o);
          this.addNode(s), this.lastNode = s;
        }
      }, c.prototype.oncomment = function(o) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += o;
          return;
        }
        var d = new a.Comment(o);
        this.addNode(d), this.lastNode = d;
      }, c.prototype.oncommentend = function() {
        this.lastNode = null;
      }, c.prototype.oncdatastart = function() {
        var o = new a.Text(""), d = new a.CDATA([o]);
        this.addNode(d), o.parent = d, this.lastNode = o;
      }, c.prototype.oncdataend = function() {
        this.lastNode = null;
      }, c.prototype.onprocessinginstruction = function(o, d) {
        var s = new a.ProcessingInstruction(o, d);
        this.addNode(s);
      }, c.prototype.handleCallback = function(o) {
        if (typeof this.callback == "function")
          this.callback(o, this.dom);
        else if (o)
          throw o;
      }, c.prototype.addNode = function(o) {
        var d = this.tagStack[this.tagStack.length - 1], s = d.children[d.children.length - 1];
        this.options.withStartIndices && (o.startIndex = this.parser.startIndex), this.options.withEndIndices && (o.endIndex = this.parser.endIndex), d.children.push(o), s && (o.prev = s, s.next = o), o.parent = d, this.lastNode = null;
      }, c;
    }()
  );
  e.DomHandler = i, e.default = i;
})(Nu);
var m0 = {}, uo = {}, Ln = {}, vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var wn = {};
(function(e) {
  var u;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
  var t = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (u = String.fromCodePoint) !== null && u !== void 0 ? u : function(n) {
    var i = "";
    return n > 65535 && (n -= 65536, i += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), i += String.fromCharCode(n), i;
  };
  function r(n) {
    var i;
    return n >= 55296 && n <= 57343 || n > 1114111 ? 65533 : (i = t.get(n)) !== null && i !== void 0 ? i : n;
  }
  e.replaceCodePoint = r;
  function a(n) {
    return (0, e.fromCodePoint)(r(n));
  }
  e.default = a;
})(wn);
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(l, g, T, A) {
    A === void 0 && (A = T);
    var D = Object.getOwnPropertyDescriptor(g, T);
    (!D || ("get" in D ? !g.__esModule : D.writable || D.configurable)) && (D = { enumerable: !0, get: function() {
      return g[T];
    } }), Object.defineProperty(l, A, D);
  } : function(l, g, T, A) {
    A === void 0 && (A = T), l[A] = g[T];
  }), t = C && C.__setModuleDefault || (Object.create ? function(l, g) {
    Object.defineProperty(l, "default", { enumerable: !0, value: g });
  } : function(l, g) {
    l.default = g;
  }), r = C && C.__importStar || function(l) {
    if (l && l.__esModule)
      return l;
    var g = {};
    if (l != null)
      for (var T in l)
        T !== "default" && Object.prototype.hasOwnProperty.call(l, T) && u(g, l, T);
    return t(g, l), g;
  }, a = C && C.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
  var n = a(vi);
  e.htmlDecodeTree = n.default;
  var i = a(xi);
  e.xmlDecodeTree = i.default;
  var c = r(wn);
  e.decodeCodePoint = c.default;
  var o = wn;
  Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
    return o.replaceCodePoint;
  } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
    return o.fromCodePoint;
  } });
  var d;
  (function(l) {
    l[l.NUM = 35] = "NUM", l[l.SEMI = 59] = "SEMI", l[l.EQUALS = 61] = "EQUALS", l[l.ZERO = 48] = "ZERO", l[l.NINE = 57] = "NINE", l[l.LOWER_A = 97] = "LOWER_A", l[l.LOWER_F = 102] = "LOWER_F", l[l.LOWER_X = 120] = "LOWER_X", l[l.LOWER_Z = 122] = "LOWER_Z", l[l.UPPER_A = 65] = "UPPER_A", l[l.UPPER_F = 70] = "UPPER_F", l[l.UPPER_Z = 90] = "UPPER_Z";
  })(d || (d = {}));
  var s = 32, E;
  (function(l) {
    l[l.VALUE_LENGTH = 49152] = "VALUE_LENGTH", l[l.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", l[l.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(E = e.BinTrieFlags || (e.BinTrieFlags = {}));
  function b(l) {
    return l >= d.ZERO && l <= d.NINE;
  }
  function m(l) {
    return l >= d.UPPER_A && l <= d.UPPER_F || l >= d.LOWER_A && l <= d.LOWER_F;
  }
  function v(l) {
    return l >= d.UPPER_A && l <= d.UPPER_Z || l >= d.LOWER_A && l <= d.LOWER_Z || b(l);
  }
  function P(l) {
    return l === d.EQUALS || v(l);
  }
  var I;
  (function(l) {
    l[l.EntityStart = 0] = "EntityStart", l[l.NumericStart = 1] = "NumericStart", l[l.NumericDecimal = 2] = "NumericDecimal", l[l.NumericHex = 3] = "NumericHex", l[l.NamedEntity = 4] = "NamedEntity";
  })(I || (I = {}));
  var O;
  (function(l) {
    l[l.Legacy = 0] = "Legacy", l[l.Strict = 1] = "Strict", l[l.Attribute = 2] = "Attribute";
  })(O = e.DecodingMode || (e.DecodingMode = {}));
  var M = (
    /** @class */
    function() {
      function l(g, T, A) {
        this.decodeTree = g, this.emitCodePoint = T, this.errors = A, this.state = I.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = O.Strict;
      }
      return l.prototype.startEntity = function(g) {
        this.decodeMode = g, this.state = I.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, l.prototype.write = function(g, T) {
        switch (this.state) {
          case I.EntityStart:
            return g.charCodeAt(T) === d.NUM ? (this.state = I.NumericStart, this.consumed += 1, this.stateNumericStart(g, T + 1)) : (this.state = I.NamedEntity, this.stateNamedEntity(g, T));
          case I.NumericStart:
            return this.stateNumericStart(g, T);
          case I.NumericDecimal:
            return this.stateNumericDecimal(g, T);
          case I.NumericHex:
            return this.stateNumericHex(g, T);
          case I.NamedEntity:
            return this.stateNamedEntity(g, T);
        }
      }, l.prototype.stateNumericStart = function(g, T) {
        return T >= g.length ? -1 : (g.charCodeAt(T) | s) === d.LOWER_X ? (this.state = I.NumericHex, this.consumed += 1, this.stateNumericHex(g, T + 1)) : (this.state = I.NumericDecimal, this.stateNumericDecimal(g, T));
      }, l.prototype.addToNumericResult = function(g, T, A, D) {
        if (T !== A) {
          var k = A - T;
          this.result = this.result * Math.pow(D, k) + parseInt(g.substr(T, k), D), this.consumed += k;
        }
      }, l.prototype.stateNumericHex = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D) || m(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 16), this.emitNumericEntity(D, 3);
        }
        return this.addToNumericResult(g, A, T, 16), -1;
      }, l.prototype.stateNumericDecimal = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 10), this.emitNumericEntity(D, 2);
        }
        return this.addToNumericResult(g, A, T, 10), -1;
      }, l.prototype.emitNumericEntity = function(g, T) {
        var A;
        if (this.consumed <= T)
          return (A = this.errors) === null || A === void 0 || A.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (g === d.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === O.Strict)
          return 0;
        return this.emitCodePoint((0, c.replaceCodePoint)(this.result), this.consumed), this.errors && (g !== d.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, l.prototype.stateNamedEntity = function(g, T) {
        for (var A = this.decodeTree, D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14; T < g.length; T++, this.excess++) {
          var R = g.charCodeAt(T);
          if (this.treeIndex = B(A, D, this.treeIndex + Math.max(1, k), R), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === O.Attribute && // We shouldn't have consumed any characters after the entity,
            (k === 0 || // And there should be no invalid characters.
            P(R)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14, k !== 0) {
            if (R === d.SEMI)
              return this.emitNamedEntityData(this.treeIndex, k, this.consumed + this.excess);
            this.decodeMode !== O.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, l.prototype.emitNotTerminatedNamedEntity = function() {
        var g, T = this, A = T.result, D = T.decodeTree, k = (D[A] & E.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(A, k, this.consumed), (g = this.errors) === null || g === void 0 || g.missingSemicolonAfterCharacterReference(), this.consumed;
      }, l.prototype.emitNamedEntityData = function(g, T, A) {
        var D = this.decodeTree;
        return this.emitCodePoint(T === 1 ? D[g] & ~E.VALUE_LENGTH : D[g + 1], A), T === 3 && this.emitCodePoint(D[g + 2], A), A;
      }, l.prototype.end = function() {
        var g;
        switch (this.state) {
          case I.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== O.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case I.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case I.NumericHex:
            return this.emitNumericEntity(0, 3);
          case I.NumericStart:
            return (g = this.errors) === null || g === void 0 || g.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case I.EntityStart:
            return 0;
        }
      }, l;
    }()
  );
  e.EntityDecoder = M;
  function U(l) {
    var g = "", T = new M(l, function(A) {
      return g += (0, c.fromCodePoint)(A);
    });
    return function(D, k) {
      for (var R = 0, $ = 0; ($ = D.indexOf("&", $)) >= 0; ) {
        g += D.slice(R, $), T.startEntity(k);
        var J = T.write(
          D,
          // Skip the "&"
          $ + 1
        );
        if (J < 0) {
          R = $ + T.end();
          break;
        }
        R = $ + J, $ = J === 0 ? R + 1 : R;
      }
      var W = g + D.slice(R);
      return g = "", W;
    };
  }
  function B(l, g, T, A) {
    var D = (g & E.BRANCH_LENGTH) >> 7, k = g & E.JUMP_TABLE;
    if (D === 0)
      return k !== 0 && A === k ? T : -1;
    if (k) {
      var R = A - k;
      return R < 0 || R >= D ? -1 : l[T + R] - 1;
    }
    for (var $ = T, J = $ + D - 1; $ <= J; ) {
      var W = $ + J >>> 1, te = l[W];
      if (te < A)
        $ = W + 1;
      else if (te > A)
        J = W - 1;
      else
        return l[W + D];
    }
    return -1;
  }
  e.determineBranch = B;
  var w = U(n.default), F = U(i.default);
  function z(l, g) {
    return g === void 0 && (g = O.Legacy), w(l, g);
  }
  e.decodeHTML = z;
  function Z(l) {
    return w(l, O.Attribute);
  }
  e.decodeHTMLAttribute = Z;
  function ue(l) {
    return w(l, O.Strict);
  }
  e.decodeHTMLStrict = ue;
  function V(l) {
    return F(l, O.Strict);
  }
  e.decodeXML = V;
})(Ln);
var Dt = {}, Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
function mr(e) {
  for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1;
  return e;
}
Ni.default = new Map(/* @__PURE__ */ mr([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ mr([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ mr([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ mr([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Fr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0, e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var u = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  e.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(a, n) {
    return a.codePointAt(n);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(a, n) {
      return (a.charCodeAt(n) & 64512) === 55296 ? (a.charCodeAt(n) - 55296) * 1024 + a.charCodeAt(n + 1) - 56320 + 65536 : a.charCodeAt(n);
    }
  );
  function t(a) {
    for (var n = "", i = 0, c; (c = e.xmlReplacer.exec(a)) !== null; ) {
      var o = c.index, d = a.charCodeAt(o), s = u.get(d);
      s !== void 0 ? (n += a.substring(i, o) + s, i = o + 1) : (n += "".concat(a.substring(i, o), "&#x").concat((0, e.getCodePoint)(a, o).toString(16), ";"), i = e.xmlReplacer.lastIndex += +((d & 64512) === 55296));
    }
    return n + a.substr(i);
  }
  e.encodeXML = t, e.escape = t;
  function r(a, n) {
    return function(c) {
      for (var o, d = 0, s = ""; o = a.exec(c); )
        d !== o.index && (s += c.substring(d, o.index)), s += n.get(o[0].charCodeAt(0)), d = o.index + 1;
      return s + c.substring(d);
    };
  }
  e.escapeUTF8 = r(/[&<>'"]/g, u), e.escapeAttribute = r(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), e.escapeText = r(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(Fr);
var mf = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.encodeNonAsciiHTML = Dt.encodeHTML = void 0;
var gf = mf(Ni), to = Fr, Ef = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function Tf(e) {
  return ro(Ef, e);
}
Dt.encodeHTML = Tf;
function _f(e) {
  return ro(to.xmlReplacer, e);
}
Dt.encodeNonAsciiHTML = _f;
function ro(e, u) {
  for (var t = "", r = 0, a; (a = e.exec(u)) !== null; ) {
    var n = a.index;
    t += u.substring(r, n);
    var i = u.charCodeAt(n), c = gf.default.get(i);
    if (typeof c == "object") {
      if (n + 1 < u.length) {
        var o = u.charCodeAt(n + 1), d = typeof c.n == "number" ? c.n === o ? c.o : void 0 : c.n.get(o);
        if (d !== void 0) {
          t += d, r = e.lastIndex += 1;
          continue;
        }
      }
      c = c.v;
    }
    if (c !== void 0)
      t += c, r = n + 1;
    else {
      var s = (0, to.getCodePoint)(u, n);
      t += "&#x".concat(s.toString(16), ";"), r = e.lastIndex += +(s !== i);
    }
  }
  return t + u.substr(r);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLAttribute = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.DecodingMode = e.EntityDecoder = e.encodeHTML5 = e.encodeHTML4 = e.encodeNonAsciiHTML = e.encodeHTML = e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.encode = e.decodeStrict = e.decode = e.EncodingMode = e.EntityLevel = void 0;
  var u = Ln, t = Dt, r = Fr, a;
  (function(b) {
    b[b.XML = 0] = "XML", b[b.HTML = 1] = "HTML";
  })(a = e.EntityLevel || (e.EntityLevel = {}));
  var n;
  (function(b) {
    b[b.UTF8 = 0] = "UTF8", b[b.ASCII = 1] = "ASCII", b[b.Extensive = 2] = "Extensive", b[b.Attribute = 3] = "Attribute", b[b.Text = 4] = "Text";
  })(n = e.EncodingMode || (e.EncodingMode = {}));
  function i(b, m) {
    m === void 0 && (m = a.XML);
    var v = typeof m == "number" ? m : m.level;
    if (v === a.HTML) {
      var P = typeof m == "object" ? m.mode : void 0;
      return (0, u.decodeHTML)(b, P);
    }
    return (0, u.decodeXML)(b);
  }
  e.decode = i;
  function c(b, m) {
    var v;
    m === void 0 && (m = a.XML);
    var P = typeof m == "number" ? { level: m } : m;
    return (v = P.mode) !== null && v !== void 0 || (P.mode = u.DecodingMode.Strict), i(b, P);
  }
  e.decodeStrict = c;
  function o(b, m) {
    m === void 0 && (m = a.XML);
    var v = typeof m == "number" ? { level: m } : m;
    return v.mode === n.UTF8 ? (0, r.escapeUTF8)(b) : v.mode === n.Attribute ? (0, r.escapeAttribute)(b) : v.mode === n.Text ? (0, r.escapeText)(b) : v.level === a.HTML ? v.mode === n.ASCII ? (0, t.encodeNonAsciiHTML)(b) : (0, t.encodeHTML)(b) : (0, r.encodeXML)(b);
  }
  e.encode = o;
  var d = Fr;
  Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function() {
    return d.encodeXML;
  } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function() {
    return d.escape;
  } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function() {
    return d.escapeUTF8;
  } }), Object.defineProperty(e, "escapeAttribute", { enumerable: !0, get: function() {
    return d.escapeAttribute;
  } }), Object.defineProperty(e, "escapeText", { enumerable: !0, get: function() {
    return d.escapeText;
  } });
  var s = Dt;
  Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return s.encodeNonAsciiHTML;
  } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } });
  var E = Ln;
  Object.defineProperty(e, "EntityDecoder", { enumerable: !0, get: function() {
    return E.EntityDecoder;
  } }), Object.defineProperty(e, "DecodingMode", { enumerable: !0, get: function() {
    return E.DecodingMode;
  } }), Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function() {
    return E.decodeXML;
  } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return E.decodeHTMLAttribute;
  } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function() {
    return E.decodeXML;
  } });
})(uo);
var t0 = {};
Object.defineProperty(t0, "__esModule", { value: !0 });
t0.attributeNames = t0.elementNames = void 0;
t0.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
t0.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
var $t = C && C.__assign || function() {
  return $t = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, $t.apply(this, arguments);
}, yf = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), Af = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), vf = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && yf(u, e, t);
  return Af(u, e), u;
};
Object.defineProperty(m0, "__esModule", { value: !0 });
m0.render = void 0;
var Yu = vf(Le), qr = uo, ao = t0, xf = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function Nf(e) {
  return e.replace(/"/g, "&quot;");
}
function If(e, u) {
  var t;
  if (e) {
    var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? Nf : u.xmlMode || u.encodeEntities !== "utf8" ? qr.encodeXML : qr.escapeAttribute;
    return Object.keys(e).map(function(a) {
      var n, i, c = (n = e[a]) !== null && n !== void 0 ? n : "";
      return u.xmlMode === "foreign" && (a = (i = ao.attributeNames.get(a)) !== null && i !== void 0 ? i : a), !u.emptyAttrs && !u.xmlMode && c === "" ? a : "".concat(a, '="').concat(r(c), '"');
    }).join(" ");
  }
}
var Tc = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function da(e, u) {
  u === void 0 && (u = {});
  for (var t = ("length" in e) ? e : [e], r = "", a = 0; a < t.length; a++)
    r += Df(t[a], u);
  return r;
}
m0.render = da;
m0.default = da;
function Df(e, u) {
  switch (e.type) {
    case Yu.Root:
      return da(e.children, u);
    case Yu.Doctype:
    case Yu.Directive:
      return Pf(e);
    case Yu.Comment:
      return Rf(e);
    case Yu.CDATA:
      return wf(e);
    case Yu.Script:
    case Yu.Style:
    case Yu.Tag:
      return Of(e, u);
    case Yu.Text:
      return Lf(e, u);
  }
}
var Cf = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), Sf = /* @__PURE__ */ new Set(["svg", "math"]);
function Of(e, u) {
  var t;
  u.xmlMode === "foreign" && (e.name = (t = ao.elementNames.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && Cf.has(e.parent.name) && (u = $t($t({}, u), { xmlMode: !1 }))), !u.xmlMode && Sf.has(e.name) && (u = $t($t({}, u), { xmlMode: "foreign" }));
  var r = "<".concat(e.name), a = If(e.attribs, u);
  return a && (r += " ".concat(a)), e.children.length === 0 && (u.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    u.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    u.selfClosingTags && Tc.has(e.name)
  )) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += da(e.children, u)), (u.xmlMode || !Tc.has(e.name)) && (r += "</".concat(e.name, ">"))), r;
}
function Pf(e) {
  return "<".concat(e.data, ">");
}
function Lf(e, u) {
  var t, r = e.data || "";
  return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && xf.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? (0, qr.encodeXML)(r) : (0, qr.escapeText)(r)), r;
}
function wf(e) {
  return "<![CDATA[".concat(e.children[0].data, "]]>");
}
function Rf(e) {
  return "<!--".concat(e.data, "-->");
}
var Mf = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(gu, "__esModule", { value: !0 });
gu.innerText = gu.textContent = gu.getText = gu.getInnerHTML = gu.getOuterHTML = void 0;
var Hu = Nu, kf = Mf(m0), Bf = Le;
function no(e, u) {
  return (0, kf.default)(e, u);
}
gu.getOuterHTML = no;
function Uf(e, u) {
  return (0, Hu.hasChildren)(e) ? e.children.map(function(t) {
    return no(t, u);
  }).join("") : "";
}
gu.getInnerHTML = Uf;
function Sr(e) {
  return Array.isArray(e) ? e.map(Sr).join("") : (0, Hu.isTag)(e) ? e.name === "br" ? `
` : Sr(e.children) : (0, Hu.isCDATA)(e) ? Sr(e.children) : (0, Hu.isText)(e) ? e.data : "";
}
gu.getText = Sr;
function Rn(e) {
  return Array.isArray(e) ? e.map(Rn).join("") : (0, Hu.hasChildren)(e) && !(0, Hu.isComment)(e) ? Rn(e.children) : (0, Hu.isText)(e) ? e.data : "";
}
gu.textContent = Rn;
function Mn(e) {
  return Array.isArray(e) ? e.map(Mn).join("") : (0, Hu.hasChildren)(e) && (e.type === Bf.ElementType.Tag || (0, Hu.isCDATA)(e)) ? Mn(e.children) : (0, Hu.isText)(e) ? e.data : "";
}
gu.innerText = Mn;
var He = {};
Object.defineProperty(He, "__esModule", { value: !0 });
He.prevElementSibling = He.nextElementSibling = He.getName = He.hasAttrib = He.getAttributeValue = He.getSiblings = He.getParent = He.getChildren = void 0;
var Ii = Nu;
function io(e) {
  return (0, Ii.hasChildren)(e) ? e.children : [];
}
He.getChildren = io;
function co(e) {
  return e.parent || null;
}
He.getParent = co;
function Hf(e) {
  var u, t, r = co(e);
  if (r != null)
    return io(r);
  for (var a = [e], n = e.prev, i = e.next; n != null; )
    a.unshift(n), u = n, n = u.prev;
  for (; i != null; )
    a.push(i), t = i, i = t.next;
  return a;
}
He.getSiblings = Hf;
function Ff(e, u) {
  var t;
  return (t = e.attribs) === null || t === void 0 ? void 0 : t[u];
}
He.getAttributeValue = Ff;
function qf(e, u) {
  return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null;
}
He.hasAttrib = qf;
function Gf(e) {
  return e.name;
}
He.getName = Gf;
function jf(e) {
  for (var u, t = e.next; t !== null && !(0, Ii.isTag)(t); )
    u = t, t = u.next;
  return t;
}
He.nextElementSibling = jf;
function $f(e) {
  for (var u, t = e.prev; t !== null && !(0, Ii.isTag)(t); )
    u = t, t = u.prev;
  return t;
}
He.prevElementSibling = $f;
var nu = {};
Object.defineProperty(nu, "__esModule", { value: !0 });
nu.prepend = nu.prependChild = nu.append = nu.appendChild = nu.replaceElement = nu.removeElement = void 0;
function W0(e) {
  if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
  }
  e.next = null, e.prev = null, e.parent = null;
}
nu.removeElement = W0;
function Vf(e, u) {
  var t = u.prev = e.prev;
  t && (t.next = u);
  var r = u.next = e.next;
  r && (r.prev = u);
  var a = u.parent = e.parent;
  if (a) {
    var n = a.children;
    n[n.lastIndexOf(e)] = u, e.parent = null;
  }
}
nu.replaceElement = Vf;
function Yf(e, u) {
  if (W0(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
  } else
    u.prev = null;
}
nu.appendChild = Yf;
function Xf(e, u) {
  W0(u);
  var t = e.parent, r = e.next;
  if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
      var a = t.children;
      a.splice(a.lastIndexOf(r), 0, u);
    }
  } else
    t && t.children.push(u);
}
nu.append = Xf;
function Wf(e, u) {
  if (W0(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
  } else
    u.next = null;
}
nu.prependChild = Wf;
function zf(e, u) {
  W0(u);
  var t = e.parent;
  if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
  }
  e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u;
}
nu.prepend = zf;
var We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
We.findAll = We.existsOne = We.findOne = We.findOneChild = We.find = We.filter = void 0;
var la = Nu;
function Qf(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), so(e, Array.isArray(u) ? u : [u], t, r);
}
We.filter = Qf;
function so(e, u, t, r) {
  for (var a = [], n = [u], i = [0]; ; ) {
    if (i[0] >= n[0].length) {
      if (i.length === 1)
        return a;
      n.shift(), i.shift();
      continue;
    }
    var c = n[0][i[0]++];
    if (e(c) && (a.push(c), --r <= 0))
      return a;
    t && (0, la.hasChildren)(c) && c.children.length > 0 && (i.unshift(0), n.unshift(c.children));
  }
}
We.find = so;
function Kf(e, u) {
  return u.find(e);
}
We.findOneChild = Kf;
function oo(e, u, t) {
  t === void 0 && (t = !0);
  for (var r = null, a = 0; a < u.length && !r; a++) {
    var n = u[a];
    if ((0, la.isTag)(n))
      e(n) ? r = n : t && n.children.length > 0 && (r = oo(e, n.children, !0));
    else
      continue;
  }
  return r;
}
We.findOne = oo;
function lo(e, u) {
  return u.some(function(t) {
    return (0, la.isTag)(t) && (e(t) || lo(e, t.children));
  });
}
We.existsOne = lo;
function Jf(e, u) {
  for (var t = [], r = [u], a = [0]; ; ) {
    if (a[0] >= r[0].length) {
      if (r.length === 1)
        return t;
      r.shift(), a.shift();
      continue;
    }
    var n = r[0][a[0]++];
    (0, la.isTag)(n) && (e(n) && t.push(n), n.children.length > 0 && (a.unshift(0), r.unshift(n.children)));
  }
}
We.findAll = Jf;
var Eu = {};
Object.defineProperty(Eu, "__esModule", { value: !0 });
Eu.getElementsByTagType = Eu.getElementsByTagName = Eu.getElementById = Eu.getElements = Eu.testElement = void 0;
var At = Nu, fa = We, Gr = {
  tag_name: function(e) {
    return typeof e == "function" ? function(u) {
      return (0, At.isTag)(u) && e(u.name);
    } : e === "*" ? At.isTag : function(u) {
      return (0, At.isTag)(u) && u.name === e;
    };
  },
  tag_type: function(e) {
    return typeof e == "function" ? function(u) {
      return e(u.type);
    } : function(u) {
      return u.type === e;
    };
  },
  tag_contains: function(e) {
    return typeof e == "function" ? function(u) {
      return (0, At.isText)(u) && e(u.data);
    } : function(u) {
      return (0, At.isText)(u) && u.data === e;
    };
  }
};
function fo(e, u) {
  return typeof u == "function" ? function(t) {
    return (0, At.isTag)(t) && u(t.attribs[e]);
  } : function(t) {
    return (0, At.isTag)(t) && t.attribs[e] === u;
  };
}
function Zf(e, u) {
  return function(t) {
    return e(t) || u(t);
  };
}
function bo(e) {
  var u = Object.keys(e).map(function(t) {
    var r = e[t];
    return Object.prototype.hasOwnProperty.call(Gr, t) ? Gr[t](r) : fo(t, r);
  });
  return u.length === 0 ? null : u.reduce(Zf);
}
function e2(e, u) {
  var t = bo(e);
  return t ? t(u) : !0;
}
Eu.testElement = e2;
function u2(e, u, t, r) {
  r === void 0 && (r = 1 / 0);
  var a = bo(e);
  return a ? (0, fa.filter)(a, u, t, r) : [];
}
Eu.getElements = u2;
function t2(e, u, t) {
  return t === void 0 && (t = !0), Array.isArray(u) || (u = [u]), (0, fa.findOne)(fo("id", e), u, t);
}
Eu.getElementById = t2;
function r2(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, fa.filter)(Gr.tag_name(e), u, t, r);
}
Eu.getElementsByTagName = r2;
function a2(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, fa.filter)(Gr.tag_type(e), u, t, r);
}
Eu.getElementsByTagType = a2;
var ho = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uniqueSort = e.compareDocumentPosition = e.DocumentPosition = e.removeSubsets = void 0;
  var u = Nu;
  function t(i) {
    for (var c = i.length; --c >= 0; ) {
      var o = i[c];
      if (c > 0 && i.lastIndexOf(o, c - 1) >= 0) {
        i.splice(c, 1);
        continue;
      }
      for (var d = o.parent; d; d = d.parent)
        if (i.includes(d)) {
          i.splice(c, 1);
          break;
        }
    }
    return i;
  }
  e.removeSubsets = t;
  var r;
  (function(i) {
    i[i.DISCONNECTED = 1] = "DISCONNECTED", i[i.PRECEDING = 2] = "PRECEDING", i[i.FOLLOWING = 4] = "FOLLOWING", i[i.CONTAINS = 8] = "CONTAINS", i[i.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(r = e.DocumentPosition || (e.DocumentPosition = {}));
  function a(i, c) {
    var o = [], d = [];
    if (i === c)
      return 0;
    for (var s = (0, u.hasChildren)(i) ? i : i.parent; s; )
      o.unshift(s), s = s.parent;
    for (s = (0, u.hasChildren)(c) ? c : c.parent; s; )
      d.unshift(s), s = s.parent;
    for (var E = Math.min(o.length, d.length), b = 0; b < E && o[b] === d[b]; )
      b++;
    if (b === 0)
      return r.DISCONNECTED;
    var m = o[b - 1], v = m.children, P = o[b], I = d[b];
    return v.indexOf(P) > v.indexOf(I) ? m === c ? r.FOLLOWING | r.CONTAINED_BY : r.FOLLOWING : m === i ? r.PRECEDING | r.CONTAINS : r.PRECEDING;
  }
  e.compareDocumentPosition = a;
  function n(i) {
    return i = i.filter(function(c, o, d) {
      return !d.includes(c, o + 1);
    }), i.sort(function(c, o) {
      var d = a(c, o);
      return d & r.PRECEDING ? -1 : d & r.FOLLOWING ? 1 : 0;
    }), i;
  }
  e.uniqueSort = n;
})(ho);
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.getFeed = void 0;
var n2 = gu, z0 = Eu;
function i2(e) {
  var u = jr(l2, e);
  return u ? u.name === "feed" ? c2(u) : s2(u) : null;
}
ba.getFeed = i2;
function c2(e) {
  var u, t = e.children, r = {
    type: "atom",
    items: (0, z0.getElementsByTagName)("entry", t).map(function(i) {
      var c, o = i.children, d = { media: po(o) };
      uu(d, "id", "id", o), uu(d, "title", "title", o);
      var s = (c = jr("link", o)) === null || c === void 0 ? void 0 : c.attribs.href;
      s && (d.link = s);
      var E = at("summary", o) || at("content", o);
      E && (d.description = E);
      var b = at("updated", o);
      return b && (d.pubDate = new Date(b)), d;
    })
  };
  uu(r, "id", "id", t), uu(r, "title", "title", t);
  var a = (u = jr("link", t)) === null || u === void 0 ? void 0 : u.attribs.href;
  a && (r.link = a), uu(r, "description", "subtitle", t);
  var n = at("updated", t);
  return n && (r.updated = new Date(n)), uu(r, "author", "email", t, !0), r;
}
function s2(e) {
  var u, t, r = (t = (u = jr("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], a = {
    type: e.name.substr(0, 3),
    id: "",
    items: (0, z0.getElementsByTagName)("item", e.children).map(function(i) {
      var c = i.children, o = { media: po(c) };
      uu(o, "id", "guid", c), uu(o, "title", "title", c), uu(o, "link", "link", c), uu(o, "description", "description", c);
      var d = at("pubDate", c) || at("dc:date", c);
      return d && (o.pubDate = new Date(d)), o;
    })
  };
  uu(a, "title", "title", r), uu(a, "link", "link", r), uu(a, "description", "description", r);
  var n = at("lastBuildDate", r);
  return n && (a.updated = new Date(n)), uu(a, "author", "managingEditor", r, !0), a;
}
var o2 = ["url", "type", "lang"], d2 = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function po(e) {
  return (0, z0.getElementsByTagName)("media:content", e).map(function(u) {
    for (var t = u.attribs, r = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, a = 0, n = o2; a < n.length; a++) {
      var i = n[a];
      t[i] && (r[i] = t[i]);
    }
    for (var c = 0, o = d2; c < o.length; c++) {
      var i = o[c];
      t[i] && (r[i] = parseInt(t[i], 10));
    }
    return t.expression && (r.expression = t.expression), r;
  });
}
function jr(e, u) {
  return (0, z0.getElementsByTagName)(e, u, !0, 1)[0];
}
function at(e, u, t) {
  return t === void 0 && (t = !1), (0, n2.textContent)((0, z0.getElementsByTagName)(e, u, t, 1)).trim();
}
function uu(e, u, t, r, a) {
  a === void 0 && (a = !1);
  var n = at(t, r, a);
  n && (e[u] = n);
}
function l2(e) {
  return e === "rss" || e === "feed" || e === "rdf:RDF";
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(a, n, i, c) {
    c === void 0 && (c = i);
    var o = Object.getOwnPropertyDescriptor(n, i);
    (!o || ("get" in o ? !n.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return n[i];
    } }), Object.defineProperty(a, c, o);
  } : function(a, n, i, c) {
    c === void 0 && (c = i), a[c] = n[i];
  }), t = C && C.__exportStar || function(a, n) {
    for (var i in a)
      i !== "default" && !Object.prototype.hasOwnProperty.call(n, i) && u(n, a, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.hasChildren = e.isDocument = e.isComment = e.isText = e.isCDATA = e.isTag = void 0, t(gu, e), t(He, e), t(nu, e), t(We, e), t(Eu, e), t(ho, e), t(ba, e);
  var r = Nu;
  Object.defineProperty(e, "isTag", { enumerable: !0, get: function() {
    return r.isTag;
  } }), Object.defineProperty(e, "isCDATA", { enumerable: !0, get: function() {
    return r.isCDATA;
  } }), Object.defineProperty(e, "isText", { enumerable: !0, get: function() {
    return r.isText;
  } }), Object.defineProperty(e, "isComment", { enumerable: !0, get: function() {
    return r.isComment;
  } }), Object.defineProperty(e, "isDocument", { enumerable: !0, get: function() {
    return r.isDocument;
  } }), Object.defineProperty(e, "hasChildren", { enumerable: !0, get: function() {
    return r.hasChildren;
  } });
})(p0);
var It = C && C.__assign || function() {
  return It = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, It.apply(this, arguments);
}, f2 = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), b2 = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), h2 = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && f2(u, e, t);
  return b2(u, e), u;
};
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.merge = Ce.contains = Ce.root = Ce.parseHTML = Ce.text = Ce.xml = Ce.html = void 0;
var p2 = p0, kn = h2(h0);
function mo(e, u, t) {
  return e ? e(u ?? e._root.children, null, void 0, t).toString() : "";
}
function m2(e, u) {
  return !u && typeof e == "object" && e != null && !("length" in e) && !("type" in e);
}
function g2(e, u) {
  var t = m2(e) ? (u = e, void 0) : e, r = It(It(It({}, kn.default), this === null || this === void 0 ? void 0 : this._options), (0, kn.flatten)(u ?? {}));
  return mo(this, t, r);
}
Ce.html = g2;
function E2(e) {
  var u = It(It({}, this._options), { xmlMode: !0 });
  return mo(this, e, u);
}
Ce.xml = E2;
function T2(e) {
  for (var u = e || (this ? this.root() : []), t = "", r = 0; r < u.length; r++)
    t += (0, p2.textContent)(u[r]);
  return t;
}
Ce.text = T2;
function _2(e, u, t) {
  if (t === void 0 && (t = typeof u == "boolean" ? u : !1), !e || typeof e != "string")
    return null;
  typeof u == "boolean" && (t = u);
  var r = this.load(e, kn.default, !1);
  return t || r("script").remove(), r.root()[0].children.slice();
}
Ce.parseHTML = _2;
function y2() {
  return this(this._root);
}
Ce.root = y2;
function A2(e, u) {
  if (u === e)
    return !1;
  for (var t = u; t && t !== t.parent; )
    if (t = t.parent, t === e)
      return !0;
  return !1;
}
Ce.contains = A2;
function v2(e, u) {
  if (!(!_c(e) || !_c(u))) {
    for (var t = e.length, r = +u.length, a = 0; a < r; a++)
      e[t++] = u[a];
    return e.length = t, e;
  }
}
Ce.merge = v2;
function _c(e) {
  if (Array.isArray(e))
    return !0;
  if (typeof e != "object" || !Object.prototype.hasOwnProperty.call(e, "length") || typeof e.length != "number" || e.length < 0)
    return !1;
  for (var u = 0; u < e.length; u++)
    if (!(u in e))
      return !1;
  return !0;
}
var ha = {}, Pe = {}, Rt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isHtml = e.cloneDom = e.domEach = e.cssCase = e.camelCase = e.isCheerio = e.isTag = void 0;
  var u = Nu, t = Nu;
  Object.defineProperty(e, "isTag", { enumerable: !0, get: function() {
    return t.isTag;
  } });
  function r(s) {
    return s.cheerio != null;
  }
  e.isCheerio = r;
  function a(s) {
    return s.replace(/[_.-](\w|$)/g, function(E, b) {
      return b.toUpperCase();
    });
  }
  e.camelCase = a;
  function n(s) {
    return s.replace(/[A-Z]/g, "-$&").toLowerCase();
  }
  e.cssCase = n;
  function i(s, E) {
    for (var b = s.length, m = 0; m < b; m++)
      E(s[m], m);
    return s;
  }
  e.domEach = i;
  function c(s) {
    var E = "length" in s ? Array.prototype.map.call(s, function(m) {
      return (0, u.cloneNode)(m, !0);
    }) : [(0, u.cloneNode)(s, !0)], b = new u.Document(E);
    return E.forEach(function(m) {
      m.parent = b;
    }), E;
  }
  e.cloneDom = c;
  var o;
  (function(s) {
    s[s.LowerA = 97] = "LowerA", s[s.LowerZ = 122] = "LowerZ", s[s.UpperA = 65] = "UpperA", s[s.UpperZ = 90] = "UpperZ", s[s.Exclamation = 33] = "Exclamation";
  })(o || (o = {}));
  function d(s) {
    var E = s.indexOf("<");
    if (E < 0 || E > s.length - 3)
      return !1;
    var b = s.charCodeAt(E + 1);
    return (b >= o.LowerA && b <= o.LowerZ || b >= o.UpperA && b <= o.UpperZ || b === o.Exclamation) && s.includes(">", E + 2);
  }
  e.isHtml = d;
})(Rt);
Object.defineProperty(Pe, "__esModule", { value: !0 });
Pe.toggleClass = Pe.removeClass = Pe.addClass = Pe.hasClass = Pe.removeAttr = Pe.val = Pe.data = Pe.prop = Pe.attr = void 0;
var go = Ce, pe = Rt, yc = p0, Jt = Object.prototype.hasOwnProperty, F0 = /\s+/, rn = "data-", Ac = {
  null: null,
  true: !0,
  false: !1
}, Di = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, x2 = /^{[^]*}$|^\[[^]*]$/;
function $r(e, u, t) {
  var r;
  if (!(!e || !(0, pe.isTag)(e))) {
    if ((r = e.attribs) !== null && r !== void 0 || (e.attribs = {}), !u)
      return e.attribs;
    if (Jt.call(e.attribs, u))
      return !t && Di.test(u) ? u : e.attribs[u];
    if (e.name === "option" && u === "value")
      return (0, go.text)(e.children);
    if (e.name === "input" && (e.attribs.type === "radio" || e.attribs.type === "checkbox") && u === "value")
      return "on";
  }
}
function Zt(e, u, t) {
  t === null ? Eo(e, u) : e.attribs[u] = "".concat(t);
}
function N2(e, u) {
  if (typeof e == "object" || u !== void 0) {
    if (typeof u == "function") {
      if (typeof e != "string")
        throw new Error("Bad combination of arguments.");
      return (0, pe.domEach)(this, function(t, r) {
        (0, pe.isTag)(t) && Zt(t, e, u.call(t, r, t.attribs[e]));
      });
    }
    return (0, pe.domEach)(this, function(t) {
      (0, pe.isTag)(t) && (typeof e == "object" ? Object.keys(e).forEach(function(r) {
        var a = e[r];
        Zt(t, r, a);
      }) : Zt(t, e, u));
    });
  }
  return arguments.length > 1 ? this : $r(this[0], e, this.options.xmlMode);
}
Pe.attr = N2;
function vc(e, u, t) {
  return u in e ? (
    // @ts-expect-error TS doesn't like us accessing the value directly here.
    e[u]
  ) : !t && Di.test(u) ? $r(e, u, !1) !== void 0 : $r(e, u, t);
}
function an(e, u, t, r) {
  u in e ? e[u] = t : Zt(e, u, !r && Di.test(u) ? t ? "" : null : "".concat(t));
}
function I2(e, u) {
  var t = this, r;
  if (typeof e == "string" && u === void 0) {
    var a = this[0];
    if (!a || !(0, pe.isTag)(a))
      return;
    switch (e) {
      case "style": {
        var n = this.css(), i = Object.keys(n);
        return i.forEach(function(o, d) {
          n[d] = o;
        }), n.length = i.length, n;
      }
      case "tagName":
      case "nodeName":
        return a.name.toUpperCase();
      case "href":
      case "src": {
        var c = (r = a.attribs) === null || r === void 0 ? void 0 : r[e];
        return typeof URL < "u" && (e === "href" && (a.tagName === "a" || a.name === "link") || e === "src" && (a.tagName === "img" || a.tagName === "iframe" || a.tagName === "audio" || a.tagName === "video" || a.tagName === "source")) && c !== void 0 && this.options.baseURI ? new URL(c, this.options.baseURI).href : c;
      }
      case "innerText":
        return (0, yc.innerText)(a);
      case "textContent":
        return (0, yc.textContent)(a);
      case "outerHTML":
        return this.clone().wrap("<container />").parent().html();
      case "innerHTML":
        return this.html();
      default:
        return vc(a, e, this.options.xmlMode);
    }
  }
  if (typeof e == "object" || u !== void 0) {
    if (typeof u == "function") {
      if (typeof e == "object")
        throw new Error("Bad combination of arguments.");
      return (0, pe.domEach)(this, function(o, d) {
        (0, pe.isTag)(o) && an(o, e, u.call(o, d, vc(o, e, t.options.xmlMode)), t.options.xmlMode);
      });
    }
    return (0, pe.domEach)(this, function(o) {
      (0, pe.isTag)(o) && (typeof e == "object" ? Object.keys(e).forEach(function(d) {
        var s = e[d];
        an(o, d, s, t.options.xmlMode);
      }) : an(o, e, u, t.options.xmlMode));
    });
  }
}
Pe.prop = I2;
function xc(e, u, t) {
  var r, a = e;
  (r = a.data) !== null && r !== void 0 || (a.data = {}), typeof u == "object" ? Object.assign(a.data, u) : typeof u == "string" && t !== void 0 && (a.data[u] = t);
}
function Nc(e, u) {
  var t, r, a;
  u == null ? (t = Object.keys(e.attribs).filter(function(o) {
    return o.startsWith(rn);
  }), r = t.map(function(o) {
    return (0, pe.camelCase)(o.slice(rn.length));
  })) : (t = [rn + (0, pe.cssCase)(u)], r = [u]);
  for (var n = 0; n < t.length; ++n) {
    var i = t[n], c = r[n];
    if (Jt.call(e.attribs, i) && !Jt.call(e.data, c)) {
      if (a = e.attribs[i], Jt.call(Ac, a))
        a = Ac[a];
      else if (a === String(Number(a)))
        a = Number(a);
      else if (x2.test(a))
        try {
          a = JSON.parse(a);
        } catch {
        }
      e.data[c] = a;
    }
  }
  return u == null ? e.data : a;
}
function D2(e, u) {
  var t, r = this[0];
  if (!(!r || !(0, pe.isTag)(r))) {
    var a = r;
    return (t = a.data) !== null && t !== void 0 || (a.data = {}), e ? typeof e == "object" || u !== void 0 ? ((0, pe.domEach)(this, function(n) {
      (0, pe.isTag)(n) && (typeof e == "object" ? xc(n, e) : xc(n, e, u));
    }), this) : Jt.call(a.data, e) ? a.data[e] : Nc(a, e) : Nc(a);
  }
}
Pe.data = D2;
function C2(e) {
  var u = arguments.length === 0, t = this[0];
  if (!t || !(0, pe.isTag)(t))
    return u ? void 0 : this;
  switch (t.name) {
    case "textarea":
      return this.text(e);
    case "select": {
      var r = this.find("option:selected");
      if (!u) {
        if (this.attr("multiple") == null && typeof e == "object")
          return this;
        this.find("option").removeAttr("selected");
        for (var a = typeof e != "object" ? [e] : e, n = 0; n < a.length; n++)
          this.find('option[value="'.concat(a[n], '"]')).attr("selected", "");
        return this;
      }
      return this.attr("multiple") ? r.toArray().map(function(i) {
        return (0, go.text)(i.children);
      }) : r.attr("value");
    }
    case "input":
    case "option":
      return u ? this.attr("value") : this.attr("value", e);
  }
}
Pe.val = C2;
function Eo(e, u) {
  !e.attribs || !Jt.call(e.attribs, u) || delete e.attribs[u];
}
function Vr(e) {
  return e ? e.trim().split(F0) : [];
}
function S2(e) {
  for (var u = Vr(e), t = function(n) {
    (0, pe.domEach)(r, function(i) {
      (0, pe.isTag)(i) && Eo(i, u[n]);
    });
  }, r = this, a = 0; a < u.length; a++)
    t(a);
  return this;
}
Pe.removeAttr = S2;
function O2(e) {
  return this.toArray().some(function(u) {
    var t = (0, pe.isTag)(u) && u.attribs.class, r = -1;
    if (t && e.length)
      for (; (r = t.indexOf(e, r + 1)) > -1; ) {
        var a = r + e.length;
        if ((r === 0 || F0.test(t[r - 1])) && (a === t.length || F0.test(t[a])))
          return !0;
      }
    return !1;
  });
}
Pe.hasClass = O2;
function To(e) {
  if (typeof e == "function")
    return (0, pe.domEach)(this, function(d, s) {
      if ((0, pe.isTag)(d)) {
        var E = d.attribs.class || "";
        To.call([d], e.call(d, s, E));
      }
    });
  if (!e || typeof e != "string")
    return this;
  for (var u = e.split(F0), t = this.length, r = 0; r < t; r++) {
    var a = this[r];
    if ((0, pe.isTag)(a)) {
      var n = $r(a, "class", !1);
      if (!n)
        Zt(a, "class", u.join(" ").trim());
      else {
        for (var i = " ".concat(n, " "), c = 0; c < u.length; c++) {
          var o = "".concat(u[c], " ");
          i.includes(" ".concat(o)) || (i += o);
        }
        Zt(a, "class", i.trim());
      }
    }
  }
  return this;
}
Pe.addClass = To;
function _o(e) {
  if (typeof e == "function")
    return (0, pe.domEach)(this, function(a, n) {
      (0, pe.isTag)(a) && _o.call([a], e.call(a, n, a.attribs.class || ""));
    });
  var u = Vr(e), t = u.length, r = arguments.length === 0;
  return (0, pe.domEach)(this, function(a) {
    if ((0, pe.isTag)(a))
      if (r)
        a.attribs.class = "";
      else {
        for (var n = Vr(a.attribs.class), i = !1, c = 0; c < t; c++) {
          var o = n.indexOf(u[c]);
          o >= 0 && (n.splice(o, 1), i = !0, c--);
        }
        i && (a.attribs.class = n.join(" "));
      }
  });
}
Pe.removeClass = _o;
function yo(e, u) {
  if (typeof e == "function")
    return (0, pe.domEach)(this, function(E, b) {
      (0, pe.isTag)(E) && yo.call([E], e.call(E, b, E.attribs.class || "", u), u);
    });
  if (!e || typeof e != "string")
    return this;
  for (var t = e.split(F0), r = t.length, a = typeof u == "boolean" ? u ? 1 : -1 : 0, n = this.length, i = 0; i < n; i++) {
    var c = this[i];
    if ((0, pe.isTag)(c)) {
      for (var o = Vr(c.attribs.class), d = 0; d < r; d++) {
        var s = o.indexOf(t[d]);
        a >= 0 && s < 0 ? o.push(t[d]) : a <= 0 && s >= 0 && o.splice(s, 1);
      }
      c.attribs.class = o.join(" ");
    }
  }
  return this;
}
Pe.toggleClass = yo;
var K = {}, Ao = {}, be;
(function(e) {
  e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator";
})(be || (be = {}));
const P2 = {
  Unknown: null,
  QuirksMode: "quirks",
  IgnoreCase: !0,
  CaseSensitive: !1
};
var ve;
(function(e) {
  e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start";
})(ve || (ve = {}));
const Ic = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, L2 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, w2 = /* @__PURE__ */ new Map([
  [126, ve.Element],
  [94, ve.Start],
  [36, ve.End],
  [42, ve.Any],
  [33, ve.Not],
  [124, ve.Hyphen]
]), R2 = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function vo(e) {
  switch (e.type) {
    case be.Adjacent:
    case be.Child:
    case be.Descendant:
    case be.Parent:
    case be.Sibling:
    case be.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
const M2 = /* @__PURE__ */ new Set(["contains", "icontains"]);
function k2(e, u, t) {
  const r = parseInt(u, 16) - 65536;
  return r !== r || t ? u : r < 0 ? (
    // BMP codepoint
    String.fromCharCode(r + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
  );
}
function y0(e) {
  return e.replace(L2, k2);
}
function nn(e) {
  return e === 39 || e === 34;
}
function Dc(e) {
  return e === 32 || e === 9 || e === 10 || e === 12 || e === 13;
}
function B2(e) {
  const u = [], t = xo(u, `${e}`, 0);
  if (t < e.length)
    throw new Error(`Unmatched selector: ${e.slice(t)}`);
  return u;
}
function xo(e, u, t) {
  let r = [];
  function a(b) {
    const m = u.slice(t + b).match(Ic);
    if (!m)
      throw new Error(`Expected name, found ${u.slice(t)}`);
    const [v] = m;
    return t += b + v.length, y0(v);
  }
  function n(b) {
    for (t += b; t < u.length && Dc(u.charCodeAt(t)); )
      t++;
  }
  function i() {
    t += 1;
    const b = t;
    let m = 1;
    for (; m > 0 && t < u.length; t++)
      u.charCodeAt(t) === 40 && !c(t) ? m++ : u.charCodeAt(t) === 41 && !c(t) && m--;
    if (m)
      throw new Error("Parenthesis not matched");
    return y0(u.slice(b, t - 1));
  }
  function c(b) {
    let m = 0;
    for (; u.charCodeAt(--b) === 92; )
      m++;
    return (m & 1) === 1;
  }
  function o() {
    if (r.length > 0 && vo(r[r.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function d(b) {
    if (r.length > 0 && r[r.length - 1].type === be.Descendant) {
      r[r.length - 1].type = b;
      return;
    }
    o(), r.push({ type: b });
  }
  function s(b, m) {
    r.push({
      type: be.Attribute,
      name: b,
      action: m,
      value: a(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function E() {
    if (r.length && r[r.length - 1].type === be.Descendant && r.pop(), r.length === 0)
      throw new Error("Empty sub-selector");
    e.push(r);
  }
  if (n(0), u.length === t)
    return t;
  e:
    for (; t < u.length; ) {
      const b = u.charCodeAt(t);
      switch (b) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
          (r.length === 0 || r[0].type !== be.Descendant) && (o(), r.push({ type: be.Descendant })), n(1);
          break;
        }
        case 62: {
          d(be.Child), n(1);
          break;
        }
        case 60: {
          d(be.Parent), n(1);
          break;
        }
        case 126: {
          d(be.Sibling), n(1);
          break;
        }
        case 43: {
          d(be.Adjacent), n(1);
          break;
        }
        case 46: {
          s("class", ve.Element);
          break;
        }
        case 35: {
          s("id", ve.Equals);
          break;
        }
        case 91: {
          n(1);
          let m, v = null;
          u.charCodeAt(t) === 124 ? m = a(1) : u.startsWith("*|", t) ? (v = "*", m = a(2)) : (m = a(0), u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 61 && (v = m, m = a(1))), n(0);
          let P = ve.Exists;
          const I = w2.get(u.charCodeAt(t));
          if (I) {
            if (P = I, u.charCodeAt(t + 1) !== 61)
              throw new Error("Expected `=`");
            n(2);
          } else
            u.charCodeAt(t) === 61 && (P = ve.Equals, n(1));
          let O = "", M = null;
          if (P !== "exists") {
            if (nn(u.charCodeAt(t))) {
              const w = u.charCodeAt(t);
              let F = t + 1;
              for (; F < u.length && (u.charCodeAt(F) !== w || c(F)); )
                F += 1;
              if (u.charCodeAt(F) !== w)
                throw new Error("Attribute value didn't end");
              O = y0(u.slice(t + 1, F)), t = F + 1;
            } else {
              const w = t;
              for (; t < u.length && (!Dc(u.charCodeAt(t)) && u.charCodeAt(t) !== 93 || c(t)); )
                t += 1;
              O = y0(u.slice(w, t));
            }
            n(0);
            const B = u.charCodeAt(t) | 32;
            B === 115 ? (M = !1, n(1)) : B === 105 && (M = !0, n(1));
          }
          if (u.charCodeAt(t) !== 93)
            throw new Error("Attribute selector didn't terminate");
          t += 1;
          const U = {
            type: be.Attribute,
            name: m,
            action: P,
            value: O,
            namespace: v,
            ignoreCase: M
          };
          r.push(U);
          break;
        }
        case 58: {
          if (u.charCodeAt(t + 1) === 58) {
            r.push({
              type: be.PseudoElement,
              name: a(2).toLowerCase(),
              data: u.charCodeAt(t) === 40 ? i() : null
            });
            continue;
          }
          const m = a(1).toLowerCase();
          let v = null;
          if (u.charCodeAt(t) === 40)
            if (R2.has(m)) {
              if (nn(u.charCodeAt(t + 1)))
                throw new Error(`Pseudo-selector ${m} cannot be quoted`);
              if (v = [], t = xo(v, u, t + 1), u.charCodeAt(t) !== 41)
                throw new Error(`Missing closing parenthesis in :${m} (${u})`);
              t += 1;
            } else {
              if (v = i(), M2.has(m)) {
                const P = v.charCodeAt(0);
                P === v.charCodeAt(v.length - 1) && nn(P) && (v = v.slice(1, -1));
              }
              v = y0(v);
            }
          r.push({ type: be.Pseudo, name: m, data: v });
          break;
        }
        case 44: {
          E(), r = [], n(1);
          break;
        }
        default: {
          if (u.startsWith("/*", t)) {
            const P = u.indexOf("*/", t + 2);
            if (P < 0)
              throw new Error("Comment was not terminated");
            t = P + 2, r.length === 0 && n(0);
            break;
          }
          let m = null, v;
          if (b === 42)
            t += 1, v = "*";
          else if (b === 124) {
            if (v = "", u.charCodeAt(t + 1) === 124) {
              d(be.ColumnCombinator), n(2);
              break;
            }
          } else if (Ic.test(u.slice(t)))
            v = a(0);
          else
            break e;
          u.charCodeAt(t) === 124 && u.charCodeAt(t + 1) !== 124 && (m = v, u.charCodeAt(t + 1) === 42 ? (v = "*", t += 2) : v = a(1)), r.push(v === "*" ? { type: be.Universal, namespace: m } : { type: be.Tag, name: v, namespace: m });
        }
      }
    }
  return E(), t;
}
const No = ["\\", '"'], Io = [...No, "(", ")"], U2 = new Set(No.map((e) => e.charCodeAt(0))), Cc = new Set(Io.map((e) => e.charCodeAt(0))), Vt = new Set([
  ...Io,
  "~",
  "^",
  "$",
  "*",
  "+",
  "!",
  "|",
  ":",
  "[",
  "]",
  " ",
  "."
].map((e) => e.charCodeAt(0)));
function Do(e) {
  return e.map((u) => u.map(H2).join("")).join(", ");
}
function H2(e, u, t) {
  switch (e.type) {
    case be.Child:
      return u === 0 ? "> " : " > ";
    case be.Parent:
      return u === 0 ? "< " : " < ";
    case be.Sibling:
      return u === 0 ? "~ " : " ~ ";
    case be.Adjacent:
      return u === 0 ? "+ " : " + ";
    case be.Descendant:
      return " ";
    case be.ColumnCombinator:
      return u === 0 ? "|| " : " || ";
    case be.Universal:
      return e.namespace === "*" && u + 1 < t.length && "name" in t[u + 1] ? "" : `${Co(e.namespace)}*`;
    case be.Tag:
      return Sc(e);
    case be.PseudoElement:
      return `::${Qu(e.name, Vt)}${e.data === null ? "" : `(${Qu(e.data, Cc)})`}`;
    case be.Pseudo:
      return `:${Qu(e.name, Vt)}${e.data === null ? "" : `(${typeof e.data == "string" ? Qu(e.data, Cc) : Do(e.data)})`}`;
    case be.Attribute: {
      if (e.name === "id" && e.action === ve.Equals && e.ignoreCase === "quirks" && !e.namespace)
        return `#${Qu(e.value, Vt)}`;
      if (e.name === "class" && e.action === ve.Element && e.ignoreCase === "quirks" && !e.namespace)
        return `.${Qu(e.value, Vt)}`;
      const r = Sc(e);
      return e.action === ve.Exists ? `[${r}]` : `[${r}${F2(e.action)}="${Qu(e.value, U2)}"${e.ignoreCase === null ? "" : e.ignoreCase ? " i" : " s"}]`;
    }
  }
}
function F2(e) {
  switch (e) {
    case ve.Equals:
      return "";
    case ve.Element:
      return "~";
    case ve.Start:
      return "^";
    case ve.End:
      return "$";
    case ve.Any:
      return "*";
    case ve.Not:
      return "!";
    case ve.Hyphen:
      return "|";
    case ve.Exists:
      throw new Error("Shouldn't be here");
  }
}
function Sc(e) {
  return `${Co(e.namespace)}${Qu(e.name, Vt)}`;
}
function Co(e) {
  return e !== null ? `${e === "*" ? "*" : Qu(e, Vt)}|` : "";
}
function Qu(e, u) {
  let t = 0, r = "";
  for (let a = 0; a < e.length; a++)
    u.has(e.charCodeAt(a)) && (r += `${e.slice(t, a)}\\${e.charAt(a)}`, t = a + 1);
  return r.length > 0 ? r + e.slice(t) : e;
}
const q2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get AttributeAction() {
    return ve;
  },
  IgnoreCaseMode: P2,
  get SelectorType() {
    return be;
  },
  isTraversal: vo,
  parse: B2,
  stringify: Do
}, Symbol.toStringTag, { value: "Module" })), Q0 = /* @__PURE__ */ Bs(q2);
var Bn = {}, So = {}, Tu = {}, Mt = {}, oe = {}, lt = C && C.__extends || function() {
  var e = function(u, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (r[n] = a[n]);
    }, e(u, t);
  };
  return function(u, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(u, t);
    function r() {
      this.constructor = u;
    }
    u.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), O0 = C && C.__assign || function() {
  return O0 = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, O0.apply(this, arguments);
};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.cloneNode = oe.hasChildren = oe.isDocument = oe.isDirective = oe.isComment = oe.isText = oe.isCDATA = oe.isTag = oe.Element = oe.Document = oe.CDATA = oe.NodeWithChildren = oe.ProcessingInstruction = oe.Comment = oe.Text = oe.DataNode = oe.Node = void 0;
var du = Le, Ci = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(u) {
        this.parent = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(u) {
        this.prev = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(u) {
        this.next = u;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(u) {
      return u === void 0 && (u = !1), Si(this, u);
    }, e;
  }()
);
oe.Node = Ci;
var pa = (
  /** @class */
  function(e) {
    lt(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.data = t, r;
    }
    return Object.defineProperty(u.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Ci)
);
oe.DataNode = pa;
var Oo = (
  /** @class */
  function(e) {
    lt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = du.ElementType.Text, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(pa)
);
oe.Text = Oo;
var Po = (
  /** @class */
  function(e) {
    lt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = du.ElementType.Comment, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(pa)
);
oe.Comment = Po;
var Lo = (
  /** @class */
  function(e) {
    lt(u, e);
    function u(t, r) {
      var a = e.call(this, r) || this;
      return a.name = t, a.type = du.ElementType.Directive, a;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(pa)
);
oe.ProcessingInstruction = Lo;
var ma = (
  /** @class */
  function(e) {
    lt(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.children = t, r;
    }
    return Object.defineProperty(u.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Ci)
);
oe.NodeWithChildren = ma;
var wo = (
  /** @class */
  function(e) {
    lt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = du.ElementType.CDATA, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(ma)
);
oe.CDATA = wo;
var Ro = (
  /** @class */
  function(e) {
    lt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = du.ElementType.Root, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(ma)
);
oe.Document = Ro;
var Mo = (
  /** @class */
  function(e) {
    lt(u, e);
    function u(t, r, a, n) {
      a === void 0 && (a = []), n === void 0 && (n = t === "script" ? du.ElementType.Script : t === "style" ? du.ElementType.Style : du.ElementType.Tag);
      var i = e.call(this, a) || this;
      return i.name = t, i.attribs = r, i.type = n, i;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(r) {
          var a, n;
          return {
            name: r,
            value: t.attribs[r],
            namespace: (a = t["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[r],
            prefix: (n = t["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(ma)
);
oe.Element = Mo;
function ko(e) {
  return (0, du.isTag)(e);
}
oe.isTag = ko;
function Bo(e) {
  return e.type === du.ElementType.CDATA;
}
oe.isCDATA = Bo;
function Uo(e) {
  return e.type === du.ElementType.Text;
}
oe.isText = Uo;
function Ho(e) {
  return e.type === du.ElementType.Comment;
}
oe.isComment = Ho;
function Fo(e) {
  return e.type === du.ElementType.Directive;
}
oe.isDirective = Fo;
function qo(e) {
  return e.type === du.ElementType.Root;
}
oe.isDocument = qo;
function G2(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
oe.hasChildren = G2;
function Si(e, u) {
  u === void 0 && (u = !1);
  var t;
  if (Uo(e))
    t = new Oo(e.data);
  else if (Ho(e))
    t = new Po(e.data);
  else if (ko(e)) {
    var r = u ? cn(e.children) : [], a = new Mo(e.name, O0({}, e.attribs), r);
    r.forEach(function(o) {
      return o.parent = a;
    }), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = O0({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = O0({}, e["x-attribsPrefix"])), t = a;
  } else if (Bo(e)) {
    var r = u ? cn(e.children) : [], n = new wo(r);
    r.forEach(function(d) {
      return d.parent = n;
    }), t = n;
  } else if (qo(e)) {
    var r = u ? cn(e.children) : [], i = new Ro(r);
    r.forEach(function(d) {
      return d.parent = i;
    }), e["x-mode"] && (i["x-mode"] = e["x-mode"]), t = i;
  } else if (Fo(e)) {
    var c = new Lo(e.name, e.data);
    e["x-name"] != null && (c["x-name"] = e["x-name"], c["x-publicId"] = e["x-publicId"], c["x-systemId"] = e["x-systemId"]), t = c;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
oe.cloneNode = Si;
function cn(e) {
  for (var u = e.map(function(r) {
    return Si(r, !0);
  }), t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t];
  return u;
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(c, o, d, s) {
    s === void 0 && (s = d);
    var E = Object.getOwnPropertyDescriptor(o, d);
    (!E || ("get" in E ? !o.__esModule : E.writable || E.configurable)) && (E = { enumerable: !0, get: function() {
      return o[d];
    } }), Object.defineProperty(c, s, E);
  } : function(c, o, d, s) {
    s === void 0 && (s = d), c[s] = o[d];
  }), t = C && C.__exportStar || function(c, o) {
    for (var d in c)
      d !== "default" && !Object.prototype.hasOwnProperty.call(o, d) && u(o, c, d);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var r = Le, a = oe;
  t(oe, e);
  var n = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, i = (
    /** @class */
    function() {
      function c(o, d, s) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (s = d, d = n), typeof o == "object" && (d = o, o = void 0), this.callback = o ?? null, this.options = d ?? n, this.elementCB = s ?? null;
      }
      return c.prototype.onparserinit = function(o) {
        this.parser = o;
      }, c.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, c.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, c.prototype.onerror = function(o) {
        this.handleCallback(o);
      }, c.prototype.onclosetag = function() {
        this.lastNode = null;
        var o = this.tagStack.pop();
        this.options.withEndIndices && (o.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(o);
      }, c.prototype.onopentag = function(o, d) {
        var s = this.options.xmlMode ? r.ElementType.Tag : void 0, E = new a.Element(o, d, void 0, s);
        this.addNode(E), this.tagStack.push(E);
      }, c.prototype.ontext = function(o) {
        var d = this.lastNode;
        if (d && d.type === r.ElementType.Text)
          d.data += o, this.options.withEndIndices && (d.endIndex = this.parser.endIndex);
        else {
          var s = new a.Text(o);
          this.addNode(s), this.lastNode = s;
        }
      }, c.prototype.oncomment = function(o) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += o;
          return;
        }
        var d = new a.Comment(o);
        this.addNode(d), this.lastNode = d;
      }, c.prototype.oncommentend = function() {
        this.lastNode = null;
      }, c.prototype.oncdatastart = function() {
        var o = new a.Text(""), d = new a.CDATA([o]);
        this.addNode(d), o.parent = d, this.lastNode = o;
      }, c.prototype.oncdataend = function() {
        this.lastNode = null;
      }, c.prototype.onprocessinginstruction = function(o, d) {
        var s = new a.ProcessingInstruction(o, d);
        this.addNode(s);
      }, c.prototype.handleCallback = function(o) {
        if (typeof this.callback == "function")
          this.callback(o, this.dom);
        else if (o)
          throw o;
      }, c.prototype.addNode = function(o) {
        var d = this.tagStack[this.tagStack.length - 1], s = d.children[d.children.length - 1];
        this.options.withStartIndices && (o.startIndex = this.parser.startIndex), this.options.withEndIndices && (o.endIndex = this.parser.endIndex), d.children.push(o), s && (o.prev = s, s.next = o), o.parent = d, this.lastNode = null;
      }, c;
    }()
  );
  e.DomHandler = i, e.default = i;
})(Mt);
var K0 = {}, Go = {}, Un = {}, Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var Hn = {};
(function(e) {
  var u;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
  var t = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (u = String.fromCodePoint) !== null && u !== void 0 ? u : function(n) {
    var i = "";
    return n > 65535 && (n -= 65536, i += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), i += String.fromCharCode(n), i;
  };
  function r(n) {
    var i;
    return n >= 55296 && n <= 57343 || n > 1114111 ? 65533 : (i = t.get(n)) !== null && i !== void 0 ? i : n;
  }
  e.replaceCodePoint = r;
  function a(n) {
    return (0, e.fromCodePoint)(r(n));
  }
  e.default = a;
})(Hn);
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(l, g, T, A) {
    A === void 0 && (A = T);
    var D = Object.getOwnPropertyDescriptor(g, T);
    (!D || ("get" in D ? !g.__esModule : D.writable || D.configurable)) && (D = { enumerable: !0, get: function() {
      return g[T];
    } }), Object.defineProperty(l, A, D);
  } : function(l, g, T, A) {
    A === void 0 && (A = T), l[A] = g[T];
  }), t = C && C.__setModuleDefault || (Object.create ? function(l, g) {
    Object.defineProperty(l, "default", { enumerable: !0, value: g });
  } : function(l, g) {
    l.default = g;
  }), r = C && C.__importStar || function(l) {
    if (l && l.__esModule)
      return l;
    var g = {};
    if (l != null)
      for (var T in l)
        T !== "default" && Object.prototype.hasOwnProperty.call(l, T) && u(g, l, T);
    return t(g, l), g;
  }, a = C && C.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
  var n = a(Oi);
  e.htmlDecodeTree = n.default;
  var i = a(Pi);
  e.xmlDecodeTree = i.default;
  var c = r(Hn);
  e.decodeCodePoint = c.default;
  var o = Hn;
  Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
    return o.replaceCodePoint;
  } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
    return o.fromCodePoint;
  } });
  var d;
  (function(l) {
    l[l.NUM = 35] = "NUM", l[l.SEMI = 59] = "SEMI", l[l.EQUALS = 61] = "EQUALS", l[l.ZERO = 48] = "ZERO", l[l.NINE = 57] = "NINE", l[l.LOWER_A = 97] = "LOWER_A", l[l.LOWER_F = 102] = "LOWER_F", l[l.LOWER_X = 120] = "LOWER_X", l[l.LOWER_Z = 122] = "LOWER_Z", l[l.UPPER_A = 65] = "UPPER_A", l[l.UPPER_F = 70] = "UPPER_F", l[l.UPPER_Z = 90] = "UPPER_Z";
  })(d || (d = {}));
  var s = 32, E;
  (function(l) {
    l[l.VALUE_LENGTH = 49152] = "VALUE_LENGTH", l[l.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", l[l.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(E = e.BinTrieFlags || (e.BinTrieFlags = {}));
  function b(l) {
    return l >= d.ZERO && l <= d.NINE;
  }
  function m(l) {
    return l >= d.UPPER_A && l <= d.UPPER_F || l >= d.LOWER_A && l <= d.LOWER_F;
  }
  function v(l) {
    return l >= d.UPPER_A && l <= d.UPPER_Z || l >= d.LOWER_A && l <= d.LOWER_Z || b(l);
  }
  function P(l) {
    return l === d.EQUALS || v(l);
  }
  var I;
  (function(l) {
    l[l.EntityStart = 0] = "EntityStart", l[l.NumericStart = 1] = "NumericStart", l[l.NumericDecimal = 2] = "NumericDecimal", l[l.NumericHex = 3] = "NumericHex", l[l.NamedEntity = 4] = "NamedEntity";
  })(I || (I = {}));
  var O;
  (function(l) {
    l[l.Legacy = 0] = "Legacy", l[l.Strict = 1] = "Strict", l[l.Attribute = 2] = "Attribute";
  })(O = e.DecodingMode || (e.DecodingMode = {}));
  var M = (
    /** @class */
    function() {
      function l(g, T, A) {
        this.decodeTree = g, this.emitCodePoint = T, this.errors = A, this.state = I.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = O.Strict;
      }
      return l.prototype.startEntity = function(g) {
        this.decodeMode = g, this.state = I.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, l.prototype.write = function(g, T) {
        switch (this.state) {
          case I.EntityStart:
            return g.charCodeAt(T) === d.NUM ? (this.state = I.NumericStart, this.consumed += 1, this.stateNumericStart(g, T + 1)) : (this.state = I.NamedEntity, this.stateNamedEntity(g, T));
          case I.NumericStart:
            return this.stateNumericStart(g, T);
          case I.NumericDecimal:
            return this.stateNumericDecimal(g, T);
          case I.NumericHex:
            return this.stateNumericHex(g, T);
          case I.NamedEntity:
            return this.stateNamedEntity(g, T);
        }
      }, l.prototype.stateNumericStart = function(g, T) {
        return T >= g.length ? -1 : (g.charCodeAt(T) | s) === d.LOWER_X ? (this.state = I.NumericHex, this.consumed += 1, this.stateNumericHex(g, T + 1)) : (this.state = I.NumericDecimal, this.stateNumericDecimal(g, T));
      }, l.prototype.addToNumericResult = function(g, T, A, D) {
        if (T !== A) {
          var k = A - T;
          this.result = this.result * Math.pow(D, k) + parseInt(g.substr(T, k), D), this.consumed += k;
        }
      }, l.prototype.stateNumericHex = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D) || m(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 16), this.emitNumericEntity(D, 3);
        }
        return this.addToNumericResult(g, A, T, 16), -1;
      }, l.prototype.stateNumericDecimal = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 10), this.emitNumericEntity(D, 2);
        }
        return this.addToNumericResult(g, A, T, 10), -1;
      }, l.prototype.emitNumericEntity = function(g, T) {
        var A;
        if (this.consumed <= T)
          return (A = this.errors) === null || A === void 0 || A.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (g === d.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === O.Strict)
          return 0;
        return this.emitCodePoint((0, c.replaceCodePoint)(this.result), this.consumed), this.errors && (g !== d.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, l.prototype.stateNamedEntity = function(g, T) {
        for (var A = this.decodeTree, D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14; T < g.length; T++, this.excess++) {
          var R = g.charCodeAt(T);
          if (this.treeIndex = B(A, D, this.treeIndex + Math.max(1, k), R), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === O.Attribute && // We shouldn't have consumed any characters after the entity,
            (k === 0 || // And there should be no invalid characters.
            P(R)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14, k !== 0) {
            if (R === d.SEMI)
              return this.emitNamedEntityData(this.treeIndex, k, this.consumed + this.excess);
            this.decodeMode !== O.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, l.prototype.emitNotTerminatedNamedEntity = function() {
        var g, T = this, A = T.result, D = T.decodeTree, k = (D[A] & E.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(A, k, this.consumed), (g = this.errors) === null || g === void 0 || g.missingSemicolonAfterCharacterReference(), this.consumed;
      }, l.prototype.emitNamedEntityData = function(g, T, A) {
        var D = this.decodeTree;
        return this.emitCodePoint(T === 1 ? D[g] & ~E.VALUE_LENGTH : D[g + 1], A), T === 3 && this.emitCodePoint(D[g + 2], A), A;
      }, l.prototype.end = function() {
        var g;
        switch (this.state) {
          case I.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== O.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case I.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case I.NumericHex:
            return this.emitNumericEntity(0, 3);
          case I.NumericStart:
            return (g = this.errors) === null || g === void 0 || g.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case I.EntityStart:
            return 0;
        }
      }, l;
    }()
  );
  e.EntityDecoder = M;
  function U(l) {
    var g = "", T = new M(l, function(A) {
      return g += (0, c.fromCodePoint)(A);
    });
    return function(D, k) {
      for (var R = 0, $ = 0; ($ = D.indexOf("&", $)) >= 0; ) {
        g += D.slice(R, $), T.startEntity(k);
        var J = T.write(
          D,
          // Skip the "&"
          $ + 1
        );
        if (J < 0) {
          R = $ + T.end();
          break;
        }
        R = $ + J, $ = J === 0 ? R + 1 : R;
      }
      var W = g + D.slice(R);
      return g = "", W;
    };
  }
  function B(l, g, T, A) {
    var D = (g & E.BRANCH_LENGTH) >> 7, k = g & E.JUMP_TABLE;
    if (D === 0)
      return k !== 0 && A === k ? T : -1;
    if (k) {
      var R = A - k;
      return R < 0 || R >= D ? -1 : l[T + R] - 1;
    }
    for (var $ = T, J = $ + D - 1; $ <= J; ) {
      var W = $ + J >>> 1, te = l[W];
      if (te < A)
        $ = W + 1;
      else if (te > A)
        J = W - 1;
      else
        return l[W + D];
    }
    return -1;
  }
  e.determineBranch = B;
  var w = U(n.default), F = U(i.default);
  function z(l, g) {
    return g === void 0 && (g = O.Legacy), w(l, g);
  }
  e.decodeHTML = z;
  function Z(l) {
    return w(l, O.Attribute);
  }
  e.decodeHTMLAttribute = Z;
  function ue(l) {
    return w(l, O.Strict);
  }
  e.decodeHTMLStrict = ue;
  function V(l) {
    return F(l, O.Strict);
  }
  e.decodeXML = V;
})(Un);
var Ct = {}, Li = {};
Object.defineProperty(Li, "__esModule", { value: !0 });
function gr(e) {
  for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1;
  return e;
}
Li.default = new Map(/* @__PURE__ */ gr([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ gr([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ gr([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ gr([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Yr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0, e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var u = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  e.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(a, n) {
    return a.codePointAt(n);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(a, n) {
      return (a.charCodeAt(n) & 64512) === 55296 ? (a.charCodeAt(n) - 55296) * 1024 + a.charCodeAt(n + 1) - 56320 + 65536 : a.charCodeAt(n);
    }
  );
  function t(a) {
    for (var n = "", i = 0, c; (c = e.xmlReplacer.exec(a)) !== null; ) {
      var o = c.index, d = a.charCodeAt(o), s = u.get(d);
      s !== void 0 ? (n += a.substring(i, o) + s, i = o + 1) : (n += "".concat(a.substring(i, o), "&#x").concat((0, e.getCodePoint)(a, o).toString(16), ";"), i = e.xmlReplacer.lastIndex += +((d & 64512) === 55296));
    }
    return n + a.substr(i);
  }
  e.encodeXML = t, e.escape = t;
  function r(a, n) {
    return function(c) {
      for (var o, d = 0, s = ""; o = a.exec(c); )
        d !== o.index && (s += c.substring(d, o.index)), s += n.get(o[0].charCodeAt(0)), d = o.index + 1;
      return s + c.substring(d);
    };
  }
  e.escapeUTF8 = r(/[&<>'"]/g, u), e.escapeAttribute = r(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), e.escapeText = r(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(Yr);
var j2 = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.encodeNonAsciiHTML = Ct.encodeHTML = void 0;
var $2 = j2(Li), jo = Yr, V2 = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function Y2(e) {
  return $o(V2, e);
}
Ct.encodeHTML = Y2;
function X2(e) {
  return $o(jo.xmlReplacer, e);
}
Ct.encodeNonAsciiHTML = X2;
function $o(e, u) {
  for (var t = "", r = 0, a; (a = e.exec(u)) !== null; ) {
    var n = a.index;
    t += u.substring(r, n);
    var i = u.charCodeAt(n), c = $2.default.get(i);
    if (typeof c == "object") {
      if (n + 1 < u.length) {
        var o = u.charCodeAt(n + 1), d = typeof c.n == "number" ? c.n === o ? c.o : void 0 : c.n.get(o);
        if (d !== void 0) {
          t += d, r = e.lastIndex += 1;
          continue;
        }
      }
      c = c.v;
    }
    if (c !== void 0)
      t += c, r = n + 1;
    else {
      var s = (0, jo.getCodePoint)(u, n);
      t += "&#x".concat(s.toString(16), ";"), r = e.lastIndex += +(s !== i);
    }
  }
  return t + u.substr(r);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLAttribute = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.DecodingMode = e.EntityDecoder = e.encodeHTML5 = e.encodeHTML4 = e.encodeNonAsciiHTML = e.encodeHTML = e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.encode = e.decodeStrict = e.decode = e.EncodingMode = e.EntityLevel = void 0;
  var u = Un, t = Ct, r = Yr, a;
  (function(b) {
    b[b.XML = 0] = "XML", b[b.HTML = 1] = "HTML";
  })(a = e.EntityLevel || (e.EntityLevel = {}));
  var n;
  (function(b) {
    b[b.UTF8 = 0] = "UTF8", b[b.ASCII = 1] = "ASCII", b[b.Extensive = 2] = "Extensive", b[b.Attribute = 3] = "Attribute", b[b.Text = 4] = "Text";
  })(n = e.EncodingMode || (e.EncodingMode = {}));
  function i(b, m) {
    m === void 0 && (m = a.XML);
    var v = typeof m == "number" ? m : m.level;
    if (v === a.HTML) {
      var P = typeof m == "object" ? m.mode : void 0;
      return (0, u.decodeHTML)(b, P);
    }
    return (0, u.decodeXML)(b);
  }
  e.decode = i;
  function c(b, m) {
    var v;
    m === void 0 && (m = a.XML);
    var P = typeof m == "number" ? { level: m } : m;
    return (v = P.mode) !== null && v !== void 0 || (P.mode = u.DecodingMode.Strict), i(b, P);
  }
  e.decodeStrict = c;
  function o(b, m) {
    m === void 0 && (m = a.XML);
    var v = typeof m == "number" ? { level: m } : m;
    return v.mode === n.UTF8 ? (0, r.escapeUTF8)(b) : v.mode === n.Attribute ? (0, r.escapeAttribute)(b) : v.mode === n.Text ? (0, r.escapeText)(b) : v.level === a.HTML ? v.mode === n.ASCII ? (0, t.encodeNonAsciiHTML)(b) : (0, t.encodeHTML)(b) : (0, r.encodeXML)(b);
  }
  e.encode = o;
  var d = Yr;
  Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function() {
    return d.encodeXML;
  } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function() {
    return d.escape;
  } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function() {
    return d.escapeUTF8;
  } }), Object.defineProperty(e, "escapeAttribute", { enumerable: !0, get: function() {
    return d.escapeAttribute;
  } }), Object.defineProperty(e, "escapeText", { enumerable: !0, get: function() {
    return d.escapeText;
  } });
  var s = Ct;
  Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return s.encodeNonAsciiHTML;
  } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } });
  var E = Un;
  Object.defineProperty(e, "EntityDecoder", { enumerable: !0, get: function() {
    return E.EntityDecoder;
  } }), Object.defineProperty(e, "DecodingMode", { enumerable: !0, get: function() {
    return E.DecodingMode;
  } }), Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function() {
    return E.decodeXML;
  } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return E.decodeHTMLAttribute;
  } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function() {
    return E.decodeXML;
  } });
})(Go);
var r0 = {};
Object.defineProperty(r0, "__esModule", { value: !0 });
r0.attributeNames = r0.elementNames = void 0;
r0.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
r0.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
var Yt = C && C.__assign || function() {
  return Yt = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, Yt.apply(this, arguments);
}, W2 = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), z2 = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), Q2 = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && W2(u, e, t);
  return z2(u, e), u;
};
Object.defineProperty(K0, "__esModule", { value: !0 });
K0.render = void 0;
var Xu = Q2(Le), Xr = Go, Vo = r0, K2 = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function J2(e) {
  return e.replace(/"/g, "&quot;");
}
function Z2(e, u) {
  var t;
  if (e) {
    var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? J2 : u.xmlMode || u.encodeEntities !== "utf8" ? Xr.encodeXML : Xr.escapeAttribute;
    return Object.keys(e).map(function(a) {
      var n, i, c = (n = e[a]) !== null && n !== void 0 ? n : "";
      return u.xmlMode === "foreign" && (a = (i = Vo.attributeNames.get(a)) !== null && i !== void 0 ? i : a), !u.emptyAttrs && !u.xmlMode && c === "" ? a : "".concat(a, '="').concat(r(c), '"');
    }).join(" ");
  }
}
var Oc = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function ga(e, u) {
  u === void 0 && (u = {});
  for (var t = ("length" in e) ? e : [e], r = "", a = 0; a < t.length; a++)
    r += eb(t[a], u);
  return r;
}
K0.render = ga;
K0.default = ga;
function eb(e, u) {
  switch (e.type) {
    case Xu.Root:
      return ga(e.children, u);
    case Xu.Doctype:
    case Xu.Directive:
      return ab(e);
    case Xu.Comment:
      return cb(e);
    case Xu.CDATA:
      return ib(e);
    case Xu.Script:
    case Xu.Style:
    case Xu.Tag:
      return rb(e, u);
    case Xu.Text:
      return nb(e, u);
  }
}
var ub = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), tb = /* @__PURE__ */ new Set(["svg", "math"]);
function rb(e, u) {
  var t;
  u.xmlMode === "foreign" && (e.name = (t = Vo.elementNames.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && ub.has(e.parent.name) && (u = Yt(Yt({}, u), { xmlMode: !1 }))), !u.xmlMode && tb.has(e.name) && (u = Yt(Yt({}, u), { xmlMode: "foreign" }));
  var r = "<".concat(e.name), a = Z2(e.attribs, u);
  return a && (r += " ".concat(a)), e.children.length === 0 && (u.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    u.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    u.selfClosingTags && Oc.has(e.name)
  )) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += ga(e.children, u)), (u.xmlMode || !Oc.has(e.name)) && (r += "</".concat(e.name, ">"))), r;
}
function ab(e) {
  return "<".concat(e.data, ">");
}
function nb(e, u) {
  var t, r = e.data || "";
  return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && K2.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? (0, Xr.encodeXML)(r) : (0, Xr.escapeText)(r)), r;
}
function ib(e) {
  return "<![CDATA[".concat(e.children[0].data, "]]>");
}
function cb(e) {
  return "<!--".concat(e.data, "-->");
}
var sb = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu.innerText = Tu.textContent = Tu.getText = Tu.getInnerHTML = Tu.getOuterHTML = void 0;
var Fu = Mt, ob = sb(K0), db = Le;
function Yo(e, u) {
  return (0, ob.default)(e, u);
}
Tu.getOuterHTML = Yo;
function lb(e, u) {
  return (0, Fu.hasChildren)(e) ? e.children.map(function(t) {
    return Yo(t, u);
  }).join("") : "";
}
Tu.getInnerHTML = lb;
function Or(e) {
  return Array.isArray(e) ? e.map(Or).join("") : (0, Fu.isTag)(e) ? e.name === "br" ? `
` : Or(e.children) : (0, Fu.isCDATA)(e) ? Or(e.children) : (0, Fu.isText)(e) ? e.data : "";
}
Tu.getText = Or;
function Fn(e) {
  return Array.isArray(e) ? e.map(Fn).join("") : (0, Fu.hasChildren)(e) && !(0, Fu.isComment)(e) ? Fn(e.children) : (0, Fu.isText)(e) ? e.data : "";
}
Tu.textContent = Fn;
function qn(e) {
  return Array.isArray(e) ? e.map(qn).join("") : (0, Fu.hasChildren)(e) && (e.type === db.ElementType.Tag || (0, Fu.isCDATA)(e)) ? qn(e.children) : (0, Fu.isText)(e) ? e.data : "";
}
Tu.innerText = qn;
var Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.prevElementSibling = Fe.nextElementSibling = Fe.getName = Fe.hasAttrib = Fe.getAttributeValue = Fe.getSiblings = Fe.getParent = Fe.getChildren = void 0;
var wi = Mt;
function Xo(e) {
  return (0, wi.hasChildren)(e) ? e.children : [];
}
Fe.getChildren = Xo;
function Wo(e) {
  return e.parent || null;
}
Fe.getParent = Wo;
function fb(e) {
  var u, t, r = Wo(e);
  if (r != null)
    return Xo(r);
  for (var a = [e], n = e.prev, i = e.next; n != null; )
    a.unshift(n), u = n, n = u.prev;
  for (; i != null; )
    a.push(i), t = i, i = t.next;
  return a;
}
Fe.getSiblings = fb;
function bb(e, u) {
  var t;
  return (t = e.attribs) === null || t === void 0 ? void 0 : t[u];
}
Fe.getAttributeValue = bb;
function hb(e, u) {
  return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null;
}
Fe.hasAttrib = hb;
function pb(e) {
  return e.name;
}
Fe.getName = pb;
function mb(e) {
  for (var u, t = e.next; t !== null && !(0, wi.isTag)(t); )
    u = t, t = u.next;
  return t;
}
Fe.nextElementSibling = mb;
function gb(e) {
  for (var u, t = e.prev; t !== null && !(0, wi.isTag)(t); )
    u = t, t = u.prev;
  return t;
}
Fe.prevElementSibling = gb;
var iu = {};
Object.defineProperty(iu, "__esModule", { value: !0 });
iu.prepend = iu.prependChild = iu.append = iu.appendChild = iu.replaceElement = iu.removeElement = void 0;
function J0(e) {
  if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
  }
  e.next = null, e.prev = null, e.parent = null;
}
iu.removeElement = J0;
function Eb(e, u) {
  var t = u.prev = e.prev;
  t && (t.next = u);
  var r = u.next = e.next;
  r && (r.prev = u);
  var a = u.parent = e.parent;
  if (a) {
    var n = a.children;
    n[n.lastIndexOf(e)] = u, e.parent = null;
  }
}
iu.replaceElement = Eb;
function Tb(e, u) {
  if (J0(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
  } else
    u.prev = null;
}
iu.appendChild = Tb;
function _b(e, u) {
  J0(u);
  var t = e.parent, r = e.next;
  if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
      var a = t.children;
      a.splice(a.lastIndexOf(r), 0, u);
    }
  } else
    t && t.children.push(u);
}
iu.append = _b;
function yb(e, u) {
  if (J0(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
  } else
    u.next = null;
}
iu.prependChild = yb;
function Ab(e, u) {
  J0(u);
  var t = e.parent;
  if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
  }
  e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u;
}
iu.prepend = Ab;
var ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
ze.findAll = ze.existsOne = ze.findOne = ze.findOneChild = ze.find = ze.filter = void 0;
var Ea = Mt;
function vb(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), zo(e, Array.isArray(u) ? u : [u], t, r);
}
ze.filter = vb;
function zo(e, u, t, r) {
  for (var a = [], n = [u], i = [0]; ; ) {
    if (i[0] >= n[0].length) {
      if (i.length === 1)
        return a;
      n.shift(), i.shift();
      continue;
    }
    var c = n[0][i[0]++];
    if (e(c) && (a.push(c), --r <= 0))
      return a;
    t && (0, Ea.hasChildren)(c) && c.children.length > 0 && (i.unshift(0), n.unshift(c.children));
  }
}
ze.find = zo;
function xb(e, u) {
  return u.find(e);
}
ze.findOneChild = xb;
function Qo(e, u, t) {
  t === void 0 && (t = !0);
  for (var r = null, a = 0; a < u.length && !r; a++) {
    var n = u[a];
    if ((0, Ea.isTag)(n))
      e(n) ? r = n : t && n.children.length > 0 && (r = Qo(e, n.children, !0));
    else
      continue;
  }
  return r;
}
ze.findOne = Qo;
function Ko(e, u) {
  return u.some(function(t) {
    return (0, Ea.isTag)(t) && (e(t) || Ko(e, t.children));
  });
}
ze.existsOne = Ko;
function Nb(e, u) {
  for (var t = [], r = [u], a = [0]; ; ) {
    if (a[0] >= r[0].length) {
      if (r.length === 1)
        return t;
      r.shift(), a.shift();
      continue;
    }
    var n = r[0][a[0]++];
    (0, Ea.isTag)(n) && (e(n) && t.push(n), n.children.length > 0 && (a.unshift(0), r.unshift(n.children)));
  }
}
ze.findAll = Nb;
var _u = {};
Object.defineProperty(_u, "__esModule", { value: !0 });
_u.getElementsByTagType = _u.getElementsByTagName = _u.getElementById = _u.getElements = _u.testElement = void 0;
var vt = Mt, Ta = ze, Wr = {
  tag_name: function(e) {
    return typeof e == "function" ? function(u) {
      return (0, vt.isTag)(u) && e(u.name);
    } : e === "*" ? vt.isTag : function(u) {
      return (0, vt.isTag)(u) && u.name === e;
    };
  },
  tag_type: function(e) {
    return typeof e == "function" ? function(u) {
      return e(u.type);
    } : function(u) {
      return u.type === e;
    };
  },
  tag_contains: function(e) {
    return typeof e == "function" ? function(u) {
      return (0, vt.isText)(u) && e(u.data);
    } : function(u) {
      return (0, vt.isText)(u) && u.data === e;
    };
  }
};
function Jo(e, u) {
  return typeof u == "function" ? function(t) {
    return (0, vt.isTag)(t) && u(t.attribs[e]);
  } : function(t) {
    return (0, vt.isTag)(t) && t.attribs[e] === u;
  };
}
function Ib(e, u) {
  return function(t) {
    return e(t) || u(t);
  };
}
function Zo(e) {
  var u = Object.keys(e).map(function(t) {
    var r = e[t];
    return Object.prototype.hasOwnProperty.call(Wr, t) ? Wr[t](r) : Jo(t, r);
  });
  return u.length === 0 ? null : u.reduce(Ib);
}
function Db(e, u) {
  var t = Zo(e);
  return t ? t(u) : !0;
}
_u.testElement = Db;
function Cb(e, u, t, r) {
  r === void 0 && (r = 1 / 0);
  var a = Zo(e);
  return a ? (0, Ta.filter)(a, u, t, r) : [];
}
_u.getElements = Cb;
function Sb(e, u, t) {
  return t === void 0 && (t = !0), Array.isArray(u) || (u = [u]), (0, Ta.findOne)(Jo("id", e), u, t);
}
_u.getElementById = Sb;
function Ob(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Ta.filter)(Wr.tag_name(e), u, t, r);
}
_u.getElementsByTagName = Ob;
function Pb(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Ta.filter)(Wr.tag_type(e), u, t, r);
}
_u.getElementsByTagType = Pb;
var ed = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uniqueSort = e.compareDocumentPosition = e.DocumentPosition = e.removeSubsets = void 0;
  var u = Mt;
  function t(i) {
    for (var c = i.length; --c >= 0; ) {
      var o = i[c];
      if (c > 0 && i.lastIndexOf(o, c - 1) >= 0) {
        i.splice(c, 1);
        continue;
      }
      for (var d = o.parent; d; d = d.parent)
        if (i.includes(d)) {
          i.splice(c, 1);
          break;
        }
    }
    return i;
  }
  e.removeSubsets = t;
  var r;
  (function(i) {
    i[i.DISCONNECTED = 1] = "DISCONNECTED", i[i.PRECEDING = 2] = "PRECEDING", i[i.FOLLOWING = 4] = "FOLLOWING", i[i.CONTAINS = 8] = "CONTAINS", i[i.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(r = e.DocumentPosition || (e.DocumentPosition = {}));
  function a(i, c) {
    var o = [], d = [];
    if (i === c)
      return 0;
    for (var s = (0, u.hasChildren)(i) ? i : i.parent; s; )
      o.unshift(s), s = s.parent;
    for (s = (0, u.hasChildren)(c) ? c : c.parent; s; )
      d.unshift(s), s = s.parent;
    for (var E = Math.min(o.length, d.length), b = 0; b < E && o[b] === d[b]; )
      b++;
    if (b === 0)
      return r.DISCONNECTED;
    var m = o[b - 1], v = m.children, P = o[b], I = d[b];
    return v.indexOf(P) > v.indexOf(I) ? m === c ? r.FOLLOWING | r.CONTAINED_BY : r.FOLLOWING : m === i ? r.PRECEDING | r.CONTAINS : r.PRECEDING;
  }
  e.compareDocumentPosition = a;
  function n(i) {
    return i = i.filter(function(c, o, d) {
      return !d.includes(c, o + 1);
    }), i.sort(function(c, o) {
      var d = a(c, o);
      return d & r.PRECEDING ? -1 : d & r.FOLLOWING ? 1 : 0;
    }), i;
  }
  e.uniqueSort = n;
})(ed);
var _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.getFeed = void 0;
var Lb = Tu, Z0 = _u;
function wb(e) {
  var u = zr(Ub, e);
  return u ? u.name === "feed" ? Rb(u) : Mb(u) : null;
}
_a.getFeed = wb;
function Rb(e) {
  var u, t = e.children, r = {
    type: "atom",
    items: (0, Z0.getElementsByTagName)("entry", t).map(function(i) {
      var c, o = i.children, d = { media: ud(o) };
      tu(d, "id", "id", o), tu(d, "title", "title", o);
      var s = (c = zr("link", o)) === null || c === void 0 ? void 0 : c.attribs.href;
      s && (d.link = s);
      var E = nt("summary", o) || nt("content", o);
      E && (d.description = E);
      var b = nt("updated", o);
      return b && (d.pubDate = new Date(b)), d;
    })
  };
  tu(r, "id", "id", t), tu(r, "title", "title", t);
  var a = (u = zr("link", t)) === null || u === void 0 ? void 0 : u.attribs.href;
  a && (r.link = a), tu(r, "description", "subtitle", t);
  var n = nt("updated", t);
  return n && (r.updated = new Date(n)), tu(r, "author", "email", t, !0), r;
}
function Mb(e) {
  var u, t, r = (t = (u = zr("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], a = {
    type: e.name.substr(0, 3),
    id: "",
    items: (0, Z0.getElementsByTagName)("item", e.children).map(function(i) {
      var c = i.children, o = { media: ud(c) };
      tu(o, "id", "guid", c), tu(o, "title", "title", c), tu(o, "link", "link", c), tu(o, "description", "description", c);
      var d = nt("pubDate", c) || nt("dc:date", c);
      return d && (o.pubDate = new Date(d)), o;
    })
  };
  tu(a, "title", "title", r), tu(a, "link", "link", r), tu(a, "description", "description", r);
  var n = nt("lastBuildDate", r);
  return n && (a.updated = new Date(n)), tu(a, "author", "managingEditor", r, !0), a;
}
var kb = ["url", "type", "lang"], Bb = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function ud(e) {
  return (0, Z0.getElementsByTagName)("media:content", e).map(function(u) {
    for (var t = u.attribs, r = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, a = 0, n = kb; a < n.length; a++) {
      var i = n[a];
      t[i] && (r[i] = t[i]);
    }
    for (var c = 0, o = Bb; c < o.length; c++) {
      var i = o[c];
      t[i] && (r[i] = parseInt(t[i], 10));
    }
    return t.expression && (r.expression = t.expression), r;
  });
}
function zr(e, u) {
  return (0, Z0.getElementsByTagName)(e, u, !0, 1)[0];
}
function nt(e, u, t) {
  return t === void 0 && (t = !1), (0, Lb.textContent)((0, Z0.getElementsByTagName)(e, u, t, 1)).trim();
}
function tu(e, u, t, r, a) {
  a === void 0 && (a = !1);
  var n = nt(t, r, a);
  n && (e[u] = n);
}
function Ub(e) {
  return e === "rss" || e === "feed" || e === "rdf:RDF";
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(a, n, i, c) {
    c === void 0 && (c = i);
    var o = Object.getOwnPropertyDescriptor(n, i);
    (!o || ("get" in o ? !n.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return n[i];
    } }), Object.defineProperty(a, c, o);
  } : function(a, n, i, c) {
    c === void 0 && (c = i), a[c] = n[i];
  }), t = C && C.__exportStar || function(a, n) {
    for (var i in a)
      i !== "default" && !Object.prototype.hasOwnProperty.call(n, i) && u(n, a, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.hasChildren = e.isDocument = e.isComment = e.isText = e.isCDATA = e.isTag = void 0, t(Tu, e), t(Fe, e), t(iu, e), t(ze, e), t(_u, e), t(ed, e), t(_a, e);
  var r = Mt;
  Object.defineProperty(e, "isTag", { enumerable: !0, get: function() {
    return r.isTag;
  } }), Object.defineProperty(e, "isCDATA", { enumerable: !0, get: function() {
    return r.isCDATA;
  } }), Object.defineProperty(e, "isText", { enumerable: !0, get: function() {
    return r.isText;
  } }), Object.defineProperty(e, "isComment", { enumerable: !0, get: function() {
    return r.isComment;
  } }), Object.defineProperty(e, "isDocument", { enumerable: !0, get: function() {
    return r.isDocument;
  } }), Object.defineProperty(e, "hasChildren", { enumerable: !0, get: function() {
    return r.hasChildren;
  } });
})(So);
var kt = {
  trueFunc: function() {
    return !0;
  },
  falseFunc: function() {
    return !1;
  }
};
const Pc = /* @__PURE__ */ Ti(kt);
var ot = {}, g0 = {};
Object.defineProperty(g0, "__esModule", { value: !0 });
g0.isTraversal = void 0;
var mu = Q0, td = /* @__PURE__ */ new Map([
  [mu.SelectorType.Universal, 50],
  [mu.SelectorType.Tag, 30],
  [mu.SelectorType.Attribute, 1],
  [mu.SelectorType.Pseudo, 0]
]);
function Hb(e) {
  return !td.has(e.type);
}
g0.isTraversal = Hb;
var Fb = /* @__PURE__ */ new Map([
  [mu.AttributeAction.Exists, 10],
  [mu.AttributeAction.Equals, 8],
  [mu.AttributeAction.Not, 7],
  [mu.AttributeAction.Start, 6],
  [mu.AttributeAction.End, 6],
  [mu.AttributeAction.Any, 5]
]);
function qb(e) {
  for (var u = e.map(rd), t = 1; t < e.length; t++) {
    var r = u[t];
    if (!(r < 0))
      for (var a = t - 1; a >= 0 && r < u[a]; a--) {
        var n = e[a + 1];
        e[a + 1] = e[a], e[a] = n, u[a + 1] = u[a], u[a] = r;
      }
  }
}
g0.default = qb;
function rd(e) {
  var u, t, r = (u = td.get(e.type)) !== null && u !== void 0 ? u : -1;
  return e.type === mu.SelectorType.Attribute ? (r = (t = Fb.get(e.action)) !== null && t !== void 0 ? t : 4, e.action === mu.AttributeAction.Equals && e.name === "id" && (r = 9), e.ignoreCase && (r >>= 1)) : e.type === mu.SelectorType.Pseudo && (e.data ? e.name === "has" || e.name === "contains" ? r = 0 : Array.isArray(e.data) ? (r = Math.min.apply(Math, e.data.map(function(a) {
    return Math.min.apply(Math, a.map(rd));
  })), r < 0 && (r = 0)) : r = 2 : r = 3), r;
}
var ya = {}, Aa = {}, Gb = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.attributeRules = void 0;
var Er = Gb(kt), jb = /[-[\]{}()*+?.,\\^$|#\s]/g;
function Lc(e) {
  return e.replace(jb, "\\$&");
}
var $b = /* @__PURE__ */ new Set([
  "accept",
  "accept-charset",
  "align",
  "alink",
  "axis",
  "bgcolor",
  "charset",
  "checked",
  "clear",
  "codetype",
  "color",
  "compact",
  "declare",
  "defer",
  "dir",
  "direction",
  "disabled",
  "enctype",
  "face",
  "frame",
  "hreflang",
  "http-equiv",
  "lang",
  "language",
  "link",
  "media",
  "method",
  "multiple",
  "nohref",
  "noresize",
  "noshade",
  "nowrap",
  "readonly",
  "rel",
  "rev",
  "rules",
  "scope",
  "scrolling",
  "selected",
  "shape",
  "target",
  "text",
  "type",
  "valign",
  "valuetype",
  "vlink"
]);
function Tt(e, u) {
  return typeof e.ignoreCase == "boolean" ? e.ignoreCase : e.ignoreCase === "quirks" ? !!u.quirksMode : !u.xmlMode && $b.has(e.name);
}
Aa.attributeRules = {
  equals: function(e, u, t) {
    var r = t.adapter, a = u.name, n = u.value;
    return Tt(u, t) ? (n = n.toLowerCase(), function(i) {
      var c = r.getAttributeValue(i, a);
      return c != null && c.length === n.length && c.toLowerCase() === n && e(i);
    }) : function(i) {
      return r.getAttributeValue(i, a) === n && e(i);
    };
  },
  hyphen: function(e, u, t) {
    var r = t.adapter, a = u.name, n = u.value, i = n.length;
    return Tt(u, t) ? (n = n.toLowerCase(), function(o) {
      var d = r.getAttributeValue(o, a);
      return d != null && (d.length === i || d.charAt(i) === "-") && d.substr(0, i).toLowerCase() === n && e(o);
    }) : function(o) {
      var d = r.getAttributeValue(o, a);
      return d != null && (d.length === i || d.charAt(i) === "-") && d.substr(0, i) === n && e(o);
    };
  },
  element: function(e, u, t) {
    var r = t.adapter, a = u.name, n = u.value;
    if (/\s/.test(n))
      return Er.default.falseFunc;
    var i = new RegExp("(?:^|\\s)".concat(Lc(n), "(?:$|\\s)"), Tt(u, t) ? "i" : "");
    return function(o) {
      var d = r.getAttributeValue(o, a);
      return d != null && d.length >= n.length && i.test(d) && e(o);
    };
  },
  exists: function(e, u, t) {
    var r = u.name, a = t.adapter;
    return function(n) {
      return a.hasAttrib(n, r) && e(n);
    };
  },
  start: function(e, u, t) {
    var r = t.adapter, a = u.name, n = u.value, i = n.length;
    return i === 0 ? Er.default.falseFunc : Tt(u, t) ? (n = n.toLowerCase(), function(c) {
      var o = r.getAttributeValue(c, a);
      return o != null && o.length >= i && o.substr(0, i).toLowerCase() === n && e(c);
    }) : function(c) {
      var o;
      return !!(!((o = r.getAttributeValue(c, a)) === null || o === void 0) && o.startsWith(n)) && e(c);
    };
  },
  end: function(e, u, t) {
    var r = t.adapter, a = u.name, n = u.value, i = -n.length;
    return i === 0 ? Er.default.falseFunc : Tt(u, t) ? (n = n.toLowerCase(), function(c) {
      var o;
      return ((o = r.getAttributeValue(c, a)) === null || o === void 0 ? void 0 : o.substr(i).toLowerCase()) === n && e(c);
    }) : function(c) {
      var o;
      return !!(!((o = r.getAttributeValue(c, a)) === null || o === void 0) && o.endsWith(n)) && e(c);
    };
  },
  any: function(e, u, t) {
    var r = t.adapter, a = u.name, n = u.value;
    if (n === "")
      return Er.default.falseFunc;
    if (Tt(u, t)) {
      var i = new RegExp(Lc(n), "i");
      return function(o) {
        var d = r.getAttributeValue(o, a);
        return d != null && d.length >= n.length && i.test(d) && e(o);
      };
    }
    return function(c) {
      var o;
      return !!(!((o = r.getAttributeValue(c, a)) === null || o === void 0) && o.includes(n)) && e(c);
    };
  },
  not: function(e, u, t) {
    var r = t.adapter, a = u.name, n = u.value;
    return n === "" ? function(i) {
      return !!r.getAttributeValue(i, a) && e(i);
    } : Tt(u, t) ? (n = n.toLowerCase(), function(i) {
      var c = r.getAttributeValue(i, a);
      return (c == null || c.length !== n.length || c.toLowerCase() !== n) && e(i);
    }) : function(i) {
      return r.getAttributeValue(i, a) !== n && e(i);
    };
  }
};
var Ri = {}, ad = {};
const Vb = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), wc = "0".charCodeAt(0), Yb = "9".charCodeAt(0);
function Mi(e) {
  if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0];
  if (e === "odd")
    return [2, 1];
  let u = 0, t = 0, r = n(), a = i();
  if (u < e.length && e.charAt(u) === "n" && (u++, t = r * (a ?? 1), c(), u < e.length ? (r = n(), c(), a = i()) : r = a = 0), a === null || u < e.length)
    throw new Error(`n-th rule couldn't be parsed ('${e}')`);
  return [t, r * a];
  function n() {
    return e.charAt(u) === "-" ? (u++, -1) : (e.charAt(u) === "+" && u++, 1);
  }
  function i() {
    const o = u;
    let d = 0;
    for (; u < e.length && e.charCodeAt(u) >= wc && e.charCodeAt(u) <= Yb; )
      d = d * 10 + (e.charCodeAt(u) - wc), u++;
    return u === o ? null : d;
  }
  function c() {
    for (; u < e.length && Vb.has(e.charCodeAt(u)); )
      u++;
  }
}
function nd(e) {
  const u = e[0], t = e[1] - 1;
  if (t < 0 && u <= 0)
    return Pc.falseFunc;
  if (u === -1)
    return (n) => n <= t;
  if (u === 0)
    return (n) => n === t;
  if (u === 1)
    return t < 0 ? Pc.trueFunc : (n) => n >= t;
  const r = Math.abs(u), a = (t % r + r) % r;
  return u > 1 ? (n) => n >= t && n % r === a : (n) => n <= t && n % r === a;
}
function id(e) {
  const u = e[0];
  let t = e[1] - 1, r = 0;
  if (u < 0) {
    const a = -u, n = (t % a + a) % a;
    return () => {
      const i = n + a * r++;
      return i > t ? null : i;
    };
  }
  return u === 0 ? t < 0 ? (
    // There are no result — always return `null`
    () => null
  ) : (
    // Return `b` exactly once
    () => r++ === 0 ? t : null
  ) : (t < 0 && (t += u * Math.ceil(-t / u)), () => u * r++ + t);
}
function Gn(e) {
  return nd(Mi(e));
}
function Xb(e) {
  return id(Mi(e));
}
const Wb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compile: nd,
  default: Gn,
  generate: id,
  parse: Mi,
  sequence: Xb
}, Symbol.toStringTag, { value: "Module" })), zb = /* @__PURE__ */ Bs(Wb);
(function(e) {
  var u = C && C.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.filters = void 0;
  var t = u(zb), r = u(kt);
  function a(i, c) {
    return function(o) {
      var d = c.getParent(o);
      return d != null && c.isTag(d) && i(o);
    };
  }
  e.filters = {
    contains: function(i, c, o) {
      var d = o.adapter;
      return function(E) {
        return i(E) && d.getText(E).includes(c);
      };
    },
    icontains: function(i, c, o) {
      var d = o.adapter, s = c.toLowerCase();
      return function(b) {
        return i(b) && d.getText(b).toLowerCase().includes(s);
      };
    },
    // Location specific methods
    "nth-child": function(i, c, o) {
      var d = o.adapter, s = o.equals, E = (0, t.default)(c);
      return E === r.default.falseFunc ? r.default.falseFunc : E === r.default.trueFunc ? a(i, d) : function(m) {
        for (var v = d.getSiblings(m), P = 0, I = 0; I < v.length && !s(m, v[I]); I++)
          d.isTag(v[I]) && P++;
        return E(P) && i(m);
      };
    },
    "nth-last-child": function(i, c, o) {
      var d = o.adapter, s = o.equals, E = (0, t.default)(c);
      return E === r.default.falseFunc ? r.default.falseFunc : E === r.default.trueFunc ? a(i, d) : function(m) {
        for (var v = d.getSiblings(m), P = 0, I = v.length - 1; I >= 0 && !s(m, v[I]); I--)
          d.isTag(v[I]) && P++;
        return E(P) && i(m);
      };
    },
    "nth-of-type": function(i, c, o) {
      var d = o.adapter, s = o.equals, E = (0, t.default)(c);
      return E === r.default.falseFunc ? r.default.falseFunc : E === r.default.trueFunc ? a(i, d) : function(m) {
        for (var v = d.getSiblings(m), P = 0, I = 0; I < v.length; I++) {
          var O = v[I];
          if (s(m, O))
            break;
          d.isTag(O) && d.getName(O) === d.getName(m) && P++;
        }
        return E(P) && i(m);
      };
    },
    "nth-last-of-type": function(i, c, o) {
      var d = o.adapter, s = o.equals, E = (0, t.default)(c);
      return E === r.default.falseFunc ? r.default.falseFunc : E === r.default.trueFunc ? a(i, d) : function(m) {
        for (var v = d.getSiblings(m), P = 0, I = v.length - 1; I >= 0; I--) {
          var O = v[I];
          if (s(m, O))
            break;
          d.isTag(O) && d.getName(O) === d.getName(m) && P++;
        }
        return E(P) && i(m);
      };
    },
    // TODO determine the actual root element
    root: function(i, c, o) {
      var d = o.adapter;
      return function(s) {
        var E = d.getParent(s);
        return (E == null || !d.isTag(E)) && i(s);
      };
    },
    scope: function(i, c, o, d) {
      var s = o.equals;
      return !d || d.length === 0 ? e.filters.root(i, c, o) : d.length === 1 ? function(E) {
        return s(d[0], E) && i(E);
      } : function(E) {
        return d.includes(E) && i(E);
      };
    },
    hover: n("isHovered"),
    visited: n("isVisited"),
    active: n("isActive")
  };
  function n(i) {
    return function(o, d, s) {
      var E = s.adapter, b = E[i];
      return typeof b != "function" ? r.default.falseFunc : function(v) {
        return b(v) && o(v);
      };
    };
  }
})(ad);
var a0 = {};
Object.defineProperty(a0, "__esModule", { value: !0 });
a0.verifyPseudoArgs = a0.pseudos = void 0;
a0.pseudos = {
  empty: function(e, u) {
    var t = u.adapter;
    return !t.getChildren(e).some(function(r) {
      return t.isTag(r) || t.getText(r) !== "";
    });
  },
  "first-child": function(e, u) {
    var t = u.adapter, r = u.equals;
    if (t.prevElementSibling)
      return t.prevElementSibling(e) == null;
    var a = t.getSiblings(e).find(function(n) {
      return t.isTag(n);
    });
    return a != null && r(e, a);
  },
  "last-child": function(e, u) {
    for (var t = u.adapter, r = u.equals, a = t.getSiblings(e), n = a.length - 1; n >= 0; n--) {
      if (r(e, a[n]))
        return !0;
      if (t.isTag(a[n]))
        break;
    }
    return !1;
  },
  "first-of-type": function(e, u) {
    for (var t = u.adapter, r = u.equals, a = t.getSiblings(e), n = t.getName(e), i = 0; i < a.length; i++) {
      var c = a[i];
      if (r(e, c))
        return !0;
      if (t.isTag(c) && t.getName(c) === n)
        break;
    }
    return !1;
  },
  "last-of-type": function(e, u) {
    for (var t = u.adapter, r = u.equals, a = t.getSiblings(e), n = t.getName(e), i = a.length - 1; i >= 0; i--) {
      var c = a[i];
      if (r(e, c))
        return !0;
      if (t.isTag(c) && t.getName(c) === n)
        break;
    }
    return !1;
  },
  "only-of-type": function(e, u) {
    var t = u.adapter, r = u.equals, a = t.getName(e);
    return t.getSiblings(e).every(function(n) {
      return r(e, n) || !t.isTag(n) || t.getName(n) !== a;
    });
  },
  "only-child": function(e, u) {
    var t = u.adapter, r = u.equals;
    return t.getSiblings(e).every(function(a) {
      return r(e, a) || !t.isTag(a);
    });
  }
};
function Qb(e, u, t, r) {
  if (t === null) {
    if (e.length > r)
      throw new Error("Pseudo-class :".concat(u, " requires an argument"));
  } else if (e.length === r)
    throw new Error("Pseudo-class :".concat(u, " doesn't have any arguments"));
}
a0.verifyPseudoArgs = Qb;
var va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
va.aliases = void 0;
va.aliases = {
  // Links
  "any-link": ":is(a, area, link)[href]",
  link: ":any-link:not(:visited)",
  // Forms
  // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
  disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
  enabled: ":not(:disabled)",
  checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
  required: ":is(input, select, textarea)[required]",
  optional: ":is(input, select, textarea):not([required])",
  // JQuery extensions
  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
  selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
  checkbox: "[type=checkbox]",
  file: "[type=file]",
  password: "[type=password]",
  radio: "[type=radio]",
  reset: "[type=reset]",
  image: "[type=image]",
  submit: "[type=submit]",
  parent: ":not(:empty)",
  header: ":is(h1, h2, h3, h4, h5, h6)",
  button: ":is(button, input[type=button])",
  input: ":is(input, textarea, select, button)",
  text: "input:is(:not([type!='']), [type=text])"
};
var xa = {};
(function(e) {
  var u = C && C.__spreadArray || function(d, s, E) {
    if (E || arguments.length === 2)
      for (var b = 0, m = s.length, v; b < m; b++)
        (v || !(b in s)) && (v || (v = Array.prototype.slice.call(s, 0, b)), v[b] = s[b]);
    return d.concat(v || Array.prototype.slice.call(s));
  }, t = C && C.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.subselects = e.getNextSiblings = e.ensureIsTag = e.PLACEHOLDER_ELEMENT = void 0;
  var r = t(kt), a = g0;
  e.PLACEHOLDER_ELEMENT = {};
  function n(d, s) {
    return d === r.default.falseFunc ? r.default.falseFunc : function(E) {
      return s.isTag(E) && d(E);
    };
  }
  e.ensureIsTag = n;
  function i(d, s) {
    var E = s.getSiblings(d);
    if (E.length <= 1)
      return [];
    var b = E.indexOf(d);
    return b < 0 || b === E.length - 1 ? [] : E.slice(b + 1).filter(s.isTag);
  }
  e.getNextSiblings = i;
  function c(d) {
    return {
      xmlMode: !!d.xmlMode,
      lowerCaseAttributeNames: !!d.lowerCaseAttributeNames,
      lowerCaseTags: !!d.lowerCaseTags,
      quirksMode: !!d.quirksMode,
      cacheResults: !!d.cacheResults,
      pseudos: d.pseudos,
      adapter: d.adapter,
      equals: d.equals
    };
  }
  var o = function(d, s, E, b, m) {
    var v = m(s, c(E), b);
    return v === r.default.trueFunc ? d : v === r.default.falseFunc ? r.default.falseFunc : function(P) {
      return v(P) && d(P);
    };
  };
  e.subselects = {
    is: o,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */
    matches: o,
    where: o,
    not: function(d, s, E, b, m) {
      var v = m(s, c(E), b);
      return v === r.default.falseFunc ? d : v === r.default.trueFunc ? r.default.falseFunc : function(P) {
        return !v(P) && d(P);
      };
    },
    has: function(d, s, E, b, m) {
      var v = E.adapter, P = c(E);
      P.relativeSelector = !0;
      var I = s.some(function(w) {
        return w.some(a.isTraversal);
      }) ? (
        // Used as a placeholder. Will be replaced with the actual element.
        [e.PLACEHOLDER_ELEMENT]
      ) : void 0, O = m(s, P, I);
      if (O === r.default.falseFunc)
        return r.default.falseFunc;
      var M = n(O, v);
      if (I && O !== r.default.trueFunc) {
        var U = O.shouldTestNextSiblings, B = U === void 0 ? !1 : U;
        return function(w) {
          if (!d(w))
            return !1;
          I[0] = w;
          var F = v.getChildren(w), z = B ? u(u([], F, !0), i(w, v), !0) : F;
          return v.existsOne(M, z);
        };
      }
      return function(w) {
        return d(w) && v.existsOne(M, v.getChildren(w));
      };
    }
  };
})(xa);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.compilePseudoSelector = e.aliases = e.pseudos = e.filters = void 0;
  var u = Q0, t = ad;
  Object.defineProperty(e, "filters", { enumerable: !0, get: function() {
    return t.filters;
  } });
  var r = a0;
  Object.defineProperty(e, "pseudos", { enumerable: !0, get: function() {
    return r.pseudos;
  } });
  var a = va;
  Object.defineProperty(e, "aliases", { enumerable: !0, get: function() {
    return a.aliases;
  } });
  var n = xa;
  function i(c, o, d, s, E) {
    var b, m = o.name, v = o.data;
    if (Array.isArray(v)) {
      if (!(m in n.subselects))
        throw new Error("Unknown pseudo-class :".concat(m, "(").concat(v, ")"));
      return n.subselects[m](c, v, d, s, E);
    }
    var P = (b = d.pseudos) === null || b === void 0 ? void 0 : b[m], I = typeof P == "string" ? P : a.aliases[m];
    if (typeof I == "string") {
      if (v != null)
        throw new Error("Pseudo ".concat(m, " doesn't have any arguments"));
      var O = (0, u.parse)(I);
      return n.subselects.is(c, O, d, s, E);
    }
    if (typeof P == "function")
      return (0, r.verifyPseudoArgs)(P, m, v, 1), function(U) {
        return P(U, v) && c(U);
      };
    if (m in t.filters)
      return t.filters[m](c, v, d, s);
    if (m in r.pseudos) {
      var M = r.pseudos[m];
      return (0, r.verifyPseudoArgs)(M, m, v, 2), function(U) {
        return M(U, d, v) && c(U);
      };
    }
    throw new Error("Unknown pseudo-class :".concat(m));
  }
  e.compilePseudoSelector = i;
})(Ri);
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.compileGeneralSelector = void 0;
var Kb = Aa, Jb = Ri, Ou = Q0;
function sn(e, u) {
  var t = u.getParent(e);
  return t && u.isTag(t) ? t : null;
}
function Zb(e, u, t, r, a) {
  var n = t.adapter, i = t.equals;
  switch (u.type) {
    case Ou.SelectorType.PseudoElement:
      throw new Error("Pseudo-elements are not supported by css-select");
    case Ou.SelectorType.ColumnCombinator:
      throw new Error("Column combinators are not yet supported by css-select");
    case Ou.SelectorType.Attribute: {
      if (u.namespace != null)
        throw new Error("Namespaced attributes are not yet supported by css-select");
      return (!t.xmlMode || t.lowerCaseAttributeNames) && (u.name = u.name.toLowerCase()), Kb.attributeRules[u.action](e, u, t);
    }
    case Ou.SelectorType.Pseudo:
      return (0, Jb.compilePseudoSelector)(e, u, t, r, a);
    case Ou.SelectorType.Tag: {
      if (u.namespace != null)
        throw new Error("Namespaced tag names are not yet supported by css-select");
      var c = u.name;
      return (!t.xmlMode || t.lowerCaseTags) && (c = c.toLowerCase()), function(s) {
        return n.getName(s) === c && e(s);
      };
    }
    case Ou.SelectorType.Descendant: {
      if (t.cacheResults === !1 || typeof WeakSet > "u")
        return function(s) {
          for (var E = s; E = sn(E, n); )
            if (e(E))
              return !0;
          return !1;
        };
      var o = /* @__PURE__ */ new WeakSet();
      return function(s) {
        for (var E = s; E = sn(E, n); )
          if (!o.has(E)) {
            if (n.isTag(E) && e(E))
              return !0;
            o.add(E);
          }
        return !1;
      };
    }
    case "_flexibleDescendant":
      return function(s) {
        var E = s;
        do
          if (e(E))
            return !0;
        while (E = sn(E, n));
        return !1;
      };
    case Ou.SelectorType.Parent:
      return function(s) {
        return n.getChildren(s).some(function(E) {
          return n.isTag(E) && e(E);
        });
      };
    case Ou.SelectorType.Child:
      return function(s) {
        var E = n.getParent(s);
        return E != null && n.isTag(E) && e(E);
      };
    case Ou.SelectorType.Sibling:
      return function(s) {
        for (var E = n.getSiblings(s), b = 0; b < E.length; b++) {
          var m = E[b];
          if (i(s, m))
            break;
          if (n.isTag(m) && e(m))
            return !0;
        }
        return !1;
      };
    case Ou.SelectorType.Adjacent:
      return n.prevElementSibling ? function(s) {
        var E = n.prevElementSibling(s);
        return E != null && e(E);
      } : function(s) {
        for (var E = n.getSiblings(s), b, m = 0; m < E.length; m++) {
          var v = E[m];
          if (i(s, v))
            break;
          n.isTag(v) && (b = v);
        }
        return !!b && e(b);
      };
    case Ou.SelectorType.Universal: {
      if (u.namespace != null && u.namespace !== "*")
        throw new Error("Namespaced universal selectors are not yet supported by css-select");
      return e;
    }
  }
}
ya.compileGeneralSelector = Zb;
var e3 = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), u3 = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), t3 = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && e3(u, e, t);
  return u3(u, e), u;
}, r3 = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ot, "__esModule", { value: !0 });
ot.compileToken = ot.compileUnsafe = ot.compile = void 0;
var Ku = Q0, it = r3(kt), jn = t3(g0), a3 = ya, cd = xa;
function n3(e, u, t) {
  var r = sd(e, u, t);
  return (0, cd.ensureIsTag)(r, u.adapter);
}
ot.compile = n3;
function sd(e, u, t) {
  var r = typeof e == "string" ? (0, Ku.parse)(e) : e;
  return ki(r, u, t);
}
ot.compileUnsafe = sd;
function od(e) {
  return e.type === Ku.SelectorType.Pseudo && (e.name === "scope" || Array.isArray(e.data) && e.data.some(function(u) {
    return u.some(od);
  }));
}
var i3 = { type: Ku.SelectorType.Descendant }, c3 = {
  type: "_flexibleDescendant"
}, s3 = {
  type: Ku.SelectorType.Pseudo,
  name: "scope",
  data: null
};
function o3(e, u, t) {
  for (var r = u.adapter, a = !!(t != null && t.every(function(o) {
    var d = r.isTag(o) && r.getParent(o);
    return o === cd.PLACEHOLDER_ELEMENT || d && r.isTag(d);
  })), n = 0, i = e; n < i.length; n++) {
    var c = i[n];
    if (!(c.length > 0 && (0, jn.isTraversal)(c[0]) && c[0].type !== Ku.SelectorType.Descendant))
      if (a && !c.some(od))
        c.unshift(i3);
      else
        continue;
    c.unshift(s3);
  }
}
function ki(e, u, t) {
  var r;
  e.forEach(jn.default), t = (r = u.context) !== null && r !== void 0 ? r : t;
  var a = Array.isArray(t), n = t && (Array.isArray(t) ? t : [t]);
  if (u.relativeSelector !== !1)
    o3(e, u, n);
  else if (e.some(function(o) {
    return o.length > 0 && (0, jn.isTraversal)(o[0]);
  }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
  var i = !1, c = e.map(function(o) {
    if (o.length >= 2) {
      var d = o[0], s = o[1];
      d.type !== Ku.SelectorType.Pseudo || d.name !== "scope" || (a && s.type === Ku.SelectorType.Descendant ? o[1] = c3 : (s.type === Ku.SelectorType.Adjacent || s.type === Ku.SelectorType.Sibling) && (i = !0));
    }
    return d3(o, u, n);
  }).reduce(l3, it.default.falseFunc);
  return c.shouldTestNextSiblings = i, c;
}
ot.compileToken = ki;
function d3(e, u, t) {
  var r;
  return e.reduce(function(a, n) {
    return a === it.default.falseFunc ? it.default.falseFunc : (0, a3.compileGeneralSelector)(a, n, u, t, ki);
  }, (r = u.rootFunc) !== null && r !== void 0 ? r : it.default.trueFunc);
}
function l3(e, u) {
  return u === it.default.falseFunc || e === it.default.trueFunc ? e : e === it.default.falseFunc || u === it.default.trueFunc ? u : function(r) {
    return e(r) || u(r);
  };
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(M, U, B, w) {
    w === void 0 && (w = B);
    var F = Object.getOwnPropertyDescriptor(U, B);
    (!F || ("get" in F ? !U.__esModule : F.writable || F.configurable)) && (F = { enumerable: !0, get: function() {
      return U[B];
    } }), Object.defineProperty(M, w, F);
  } : function(M, U, B, w) {
    w === void 0 && (w = B), M[w] = U[B];
  }), t = C && C.__setModuleDefault || (Object.create ? function(M, U) {
    Object.defineProperty(M, "default", { enumerable: !0, value: U });
  } : function(M, U) {
    M.default = U;
  }), r = C && C.__importStar || function(M) {
    if (M && M.__esModule)
      return M;
    var U = {};
    if (M != null)
      for (var B in M)
        B !== "default" && Object.prototype.hasOwnProperty.call(M, B) && u(U, M, B);
    return t(U, M), U;
  }, a = C && C.__importDefault || function(M) {
    return M && M.__esModule ? M : { default: M };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.aliases = e.pseudos = e.filters = e.is = e.selectOne = e.selectAll = e.prepareContext = e._compileToken = e._compileUnsafe = e.compile = void 0;
  var n = r(So), i = a(kt), c = ot, o = xa, d = function(M, U) {
    return M === U;
  }, s = {
    adapter: n,
    equals: d
  };
  function E(M) {
    var U, B, w, F, z = M ?? s;
    return (U = z.adapter) !== null && U !== void 0 || (z.adapter = n), (B = z.equals) !== null && B !== void 0 || (z.equals = (F = (w = z.adapter) === null || w === void 0 ? void 0 : w.equals) !== null && F !== void 0 ? F : d), z;
  }
  function b(M) {
    return function(B, w, F) {
      var z = E(w);
      return M(B, z, F);
    };
  }
  e.compile = b(c.compile), e._compileUnsafe = b(c.compileUnsafe), e._compileToken = b(c.compileToken);
  function m(M) {
    return function(B, w, F) {
      var z = E(F);
      typeof B != "function" && (B = (0, c.compileUnsafe)(B, z, w));
      var Z = v(w, z.adapter, B.shouldTestNextSiblings);
      return M(B, Z, z);
    };
  }
  function v(M, U, B) {
    return B === void 0 && (B = !1), B && (M = P(M, U)), Array.isArray(M) ? U.removeSubsets(M) : U.getChildren(M);
  }
  e.prepareContext = v;
  function P(M, U) {
    for (var B = Array.isArray(M) ? M.slice(0) : [M], w = B.length, F = 0; F < w; F++) {
      var z = (0, o.getNextSiblings)(B[F], U);
      B.push.apply(B, z);
    }
    return B;
  }
  e.selectAll = m(function(M, U, B) {
    return M === i.default.falseFunc || !U || U.length === 0 ? [] : B.adapter.findAll(M, U);
  }), e.selectOne = m(function(M, U, B) {
    return M === i.default.falseFunc || !U || U.length === 0 ? null : B.adapter.findOne(M, U);
  });
  function I(M, U, B) {
    var w = E(B);
    return (typeof U == "function" ? U : (0, c.compile)(U, w))(M);
  }
  e.is = I, e.default = e.selectAll;
  var O = Ri;
  Object.defineProperty(e, "filters", { enumerable: !0, get: function() {
    return O.filters;
  } }), Object.defineProperty(e, "pseudos", { enumerable: !0, get: function() {
    return O.pseudos;
  } }), Object.defineProperty(e, "aliases", { enumerable: !0, get: function() {
    return O.aliases;
  } });
})(Bn);
var dd = {}, yu = {}, Bt = {}, de = {}, ft = C && C.__extends || function() {
  var e = function(u, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (r[n] = a[n]);
    }, e(u, t);
  };
  return function(u, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(u, t);
    function r() {
      this.constructor = u;
    }
    u.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), P0 = C && C.__assign || function() {
  return P0 = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, P0.apply(this, arguments);
};
Object.defineProperty(de, "__esModule", { value: !0 });
de.cloneNode = de.hasChildren = de.isDocument = de.isDirective = de.isComment = de.isText = de.isCDATA = de.isTag = de.Element = de.Document = de.CDATA = de.NodeWithChildren = de.ProcessingInstruction = de.Comment = de.Text = de.DataNode = de.Node = void 0;
var lu = Le, Bi = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(u) {
        this.parent = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(u) {
        this.prev = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(u) {
        this.next = u;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(u) {
      return u === void 0 && (u = !1), Ui(this, u);
    }, e;
  }()
);
de.Node = Bi;
var Na = (
  /** @class */
  function(e) {
    ft(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.data = t, r;
    }
    return Object.defineProperty(u.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Bi)
);
de.DataNode = Na;
var ld = (
  /** @class */
  function(e) {
    ft(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = lu.ElementType.Text, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Na)
);
de.Text = ld;
var fd = (
  /** @class */
  function(e) {
    ft(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = lu.ElementType.Comment, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Na)
);
de.Comment = fd;
var bd = (
  /** @class */
  function(e) {
    ft(u, e);
    function u(t, r) {
      var a = e.call(this, r) || this;
      return a.name = t, a.type = lu.ElementType.Directive, a;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Na)
);
de.ProcessingInstruction = bd;
var Ia = (
  /** @class */
  function(e) {
    ft(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.children = t, r;
    }
    return Object.defineProperty(u.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Bi)
);
de.NodeWithChildren = Ia;
var hd = (
  /** @class */
  function(e) {
    ft(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = lu.ElementType.CDATA, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Ia)
);
de.CDATA = hd;
var pd = (
  /** @class */
  function(e) {
    ft(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = lu.ElementType.Root, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Ia)
);
de.Document = pd;
var md = (
  /** @class */
  function(e) {
    ft(u, e);
    function u(t, r, a, n) {
      a === void 0 && (a = []), n === void 0 && (n = t === "script" ? lu.ElementType.Script : t === "style" ? lu.ElementType.Style : lu.ElementType.Tag);
      var i = e.call(this, a) || this;
      return i.name = t, i.attribs = r, i.type = n, i;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(r) {
          var a, n;
          return {
            name: r,
            value: t.attribs[r],
            namespace: (a = t["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[r],
            prefix: (n = t["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Ia)
);
de.Element = md;
function gd(e) {
  return (0, lu.isTag)(e);
}
de.isTag = gd;
function Ed(e) {
  return e.type === lu.ElementType.CDATA;
}
de.isCDATA = Ed;
function Td(e) {
  return e.type === lu.ElementType.Text;
}
de.isText = Td;
function _d(e) {
  return e.type === lu.ElementType.Comment;
}
de.isComment = _d;
function yd(e) {
  return e.type === lu.ElementType.Directive;
}
de.isDirective = yd;
function Ad(e) {
  return e.type === lu.ElementType.Root;
}
de.isDocument = Ad;
function f3(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
de.hasChildren = f3;
function Ui(e, u) {
  u === void 0 && (u = !1);
  var t;
  if (Td(e))
    t = new ld(e.data);
  else if (_d(e))
    t = new fd(e.data);
  else if (gd(e)) {
    var r = u ? on(e.children) : [], a = new md(e.name, P0({}, e.attribs), r);
    r.forEach(function(o) {
      return o.parent = a;
    }), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = P0({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = P0({}, e["x-attribsPrefix"])), t = a;
  } else if (Ed(e)) {
    var r = u ? on(e.children) : [], n = new hd(r);
    r.forEach(function(d) {
      return d.parent = n;
    }), t = n;
  } else if (Ad(e)) {
    var r = u ? on(e.children) : [], i = new pd(r);
    r.forEach(function(d) {
      return d.parent = i;
    }), e["x-mode"] && (i["x-mode"] = e["x-mode"]), t = i;
  } else if (yd(e)) {
    var c = new bd(e.name, e.data);
    e["x-name"] != null && (c["x-name"] = e["x-name"], c["x-publicId"] = e["x-publicId"], c["x-systemId"] = e["x-systemId"]), t = c;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
de.cloneNode = Ui;
function on(e) {
  for (var u = e.map(function(r) {
    return Ui(r, !0);
  }), t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t];
  return u;
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(c, o, d, s) {
    s === void 0 && (s = d);
    var E = Object.getOwnPropertyDescriptor(o, d);
    (!E || ("get" in E ? !o.__esModule : E.writable || E.configurable)) && (E = { enumerable: !0, get: function() {
      return o[d];
    } }), Object.defineProperty(c, s, E);
  } : function(c, o, d, s) {
    s === void 0 && (s = d), c[s] = o[d];
  }), t = C && C.__exportStar || function(c, o) {
    for (var d in c)
      d !== "default" && !Object.prototype.hasOwnProperty.call(o, d) && u(o, c, d);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var r = Le, a = de;
  t(de, e);
  var n = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, i = (
    /** @class */
    function() {
      function c(o, d, s) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (s = d, d = n), typeof o == "object" && (d = o, o = void 0), this.callback = o ?? null, this.options = d ?? n, this.elementCB = s ?? null;
      }
      return c.prototype.onparserinit = function(o) {
        this.parser = o;
      }, c.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, c.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, c.prototype.onerror = function(o) {
        this.handleCallback(o);
      }, c.prototype.onclosetag = function() {
        this.lastNode = null;
        var o = this.tagStack.pop();
        this.options.withEndIndices && (o.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(o);
      }, c.prototype.onopentag = function(o, d) {
        var s = this.options.xmlMode ? r.ElementType.Tag : void 0, E = new a.Element(o, d, void 0, s);
        this.addNode(E), this.tagStack.push(E);
      }, c.prototype.ontext = function(o) {
        var d = this.lastNode;
        if (d && d.type === r.ElementType.Text)
          d.data += o, this.options.withEndIndices && (d.endIndex = this.parser.endIndex);
        else {
          var s = new a.Text(o);
          this.addNode(s), this.lastNode = s;
        }
      }, c.prototype.oncomment = function(o) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += o;
          return;
        }
        var d = new a.Comment(o);
        this.addNode(d), this.lastNode = d;
      }, c.prototype.oncommentend = function() {
        this.lastNode = null;
      }, c.prototype.oncdatastart = function() {
        var o = new a.Text(""), d = new a.CDATA([o]);
        this.addNode(d), o.parent = d, this.lastNode = o;
      }, c.prototype.oncdataend = function() {
        this.lastNode = null;
      }, c.prototype.onprocessinginstruction = function(o, d) {
        var s = new a.ProcessingInstruction(o, d);
        this.addNode(s);
      }, c.prototype.handleCallback = function(o) {
        if (typeof this.callback == "function")
          this.callback(o, this.dom);
        else if (o)
          throw o;
      }, c.prototype.addNode = function(o) {
        var d = this.tagStack[this.tagStack.length - 1], s = d.children[d.children.length - 1];
        this.options.withStartIndices && (o.startIndex = this.parser.startIndex), this.options.withEndIndices && (o.endIndex = this.parser.endIndex), d.children.push(o), s && (o.prev = s, s.next = o), o.parent = d, this.lastNode = null;
      }, c;
    }()
  );
  e.DomHandler = i, e.default = i;
})(Bt);
var er = {}, vd = {}, $n = {}, Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var Fi = {};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var Vn = {};
(function(e) {
  var u;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
  var t = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (u = String.fromCodePoint) !== null && u !== void 0 ? u : function(n) {
    var i = "";
    return n > 65535 && (n -= 65536, i += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), i += String.fromCharCode(n), i;
  };
  function r(n) {
    var i;
    return n >= 55296 && n <= 57343 || n > 1114111 ? 65533 : (i = t.get(n)) !== null && i !== void 0 ? i : n;
  }
  e.replaceCodePoint = r;
  function a(n) {
    return (0, e.fromCodePoint)(r(n));
  }
  e.default = a;
})(Vn);
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(l, g, T, A) {
    A === void 0 && (A = T);
    var D = Object.getOwnPropertyDescriptor(g, T);
    (!D || ("get" in D ? !g.__esModule : D.writable || D.configurable)) && (D = { enumerable: !0, get: function() {
      return g[T];
    } }), Object.defineProperty(l, A, D);
  } : function(l, g, T, A) {
    A === void 0 && (A = T), l[A] = g[T];
  }), t = C && C.__setModuleDefault || (Object.create ? function(l, g) {
    Object.defineProperty(l, "default", { enumerable: !0, value: g });
  } : function(l, g) {
    l.default = g;
  }), r = C && C.__importStar || function(l) {
    if (l && l.__esModule)
      return l;
    var g = {};
    if (l != null)
      for (var T in l)
        T !== "default" && Object.prototype.hasOwnProperty.call(l, T) && u(g, l, T);
    return t(g, l), g;
  }, a = C && C.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
  var n = a(Hi);
  e.htmlDecodeTree = n.default;
  var i = a(Fi);
  e.xmlDecodeTree = i.default;
  var c = r(Vn);
  e.decodeCodePoint = c.default;
  var o = Vn;
  Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
    return o.replaceCodePoint;
  } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
    return o.fromCodePoint;
  } });
  var d;
  (function(l) {
    l[l.NUM = 35] = "NUM", l[l.SEMI = 59] = "SEMI", l[l.EQUALS = 61] = "EQUALS", l[l.ZERO = 48] = "ZERO", l[l.NINE = 57] = "NINE", l[l.LOWER_A = 97] = "LOWER_A", l[l.LOWER_F = 102] = "LOWER_F", l[l.LOWER_X = 120] = "LOWER_X", l[l.LOWER_Z = 122] = "LOWER_Z", l[l.UPPER_A = 65] = "UPPER_A", l[l.UPPER_F = 70] = "UPPER_F", l[l.UPPER_Z = 90] = "UPPER_Z";
  })(d || (d = {}));
  var s = 32, E;
  (function(l) {
    l[l.VALUE_LENGTH = 49152] = "VALUE_LENGTH", l[l.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", l[l.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(E = e.BinTrieFlags || (e.BinTrieFlags = {}));
  function b(l) {
    return l >= d.ZERO && l <= d.NINE;
  }
  function m(l) {
    return l >= d.UPPER_A && l <= d.UPPER_F || l >= d.LOWER_A && l <= d.LOWER_F;
  }
  function v(l) {
    return l >= d.UPPER_A && l <= d.UPPER_Z || l >= d.LOWER_A && l <= d.LOWER_Z || b(l);
  }
  function P(l) {
    return l === d.EQUALS || v(l);
  }
  var I;
  (function(l) {
    l[l.EntityStart = 0] = "EntityStart", l[l.NumericStart = 1] = "NumericStart", l[l.NumericDecimal = 2] = "NumericDecimal", l[l.NumericHex = 3] = "NumericHex", l[l.NamedEntity = 4] = "NamedEntity";
  })(I || (I = {}));
  var O;
  (function(l) {
    l[l.Legacy = 0] = "Legacy", l[l.Strict = 1] = "Strict", l[l.Attribute = 2] = "Attribute";
  })(O = e.DecodingMode || (e.DecodingMode = {}));
  var M = (
    /** @class */
    function() {
      function l(g, T, A) {
        this.decodeTree = g, this.emitCodePoint = T, this.errors = A, this.state = I.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = O.Strict;
      }
      return l.prototype.startEntity = function(g) {
        this.decodeMode = g, this.state = I.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, l.prototype.write = function(g, T) {
        switch (this.state) {
          case I.EntityStart:
            return g.charCodeAt(T) === d.NUM ? (this.state = I.NumericStart, this.consumed += 1, this.stateNumericStart(g, T + 1)) : (this.state = I.NamedEntity, this.stateNamedEntity(g, T));
          case I.NumericStart:
            return this.stateNumericStart(g, T);
          case I.NumericDecimal:
            return this.stateNumericDecimal(g, T);
          case I.NumericHex:
            return this.stateNumericHex(g, T);
          case I.NamedEntity:
            return this.stateNamedEntity(g, T);
        }
      }, l.prototype.stateNumericStart = function(g, T) {
        return T >= g.length ? -1 : (g.charCodeAt(T) | s) === d.LOWER_X ? (this.state = I.NumericHex, this.consumed += 1, this.stateNumericHex(g, T + 1)) : (this.state = I.NumericDecimal, this.stateNumericDecimal(g, T));
      }, l.prototype.addToNumericResult = function(g, T, A, D) {
        if (T !== A) {
          var k = A - T;
          this.result = this.result * Math.pow(D, k) + parseInt(g.substr(T, k), D), this.consumed += k;
        }
      }, l.prototype.stateNumericHex = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D) || m(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 16), this.emitNumericEntity(D, 3);
        }
        return this.addToNumericResult(g, A, T, 16), -1;
      }, l.prototype.stateNumericDecimal = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 10), this.emitNumericEntity(D, 2);
        }
        return this.addToNumericResult(g, A, T, 10), -1;
      }, l.prototype.emitNumericEntity = function(g, T) {
        var A;
        if (this.consumed <= T)
          return (A = this.errors) === null || A === void 0 || A.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (g === d.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === O.Strict)
          return 0;
        return this.emitCodePoint((0, c.replaceCodePoint)(this.result), this.consumed), this.errors && (g !== d.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, l.prototype.stateNamedEntity = function(g, T) {
        for (var A = this.decodeTree, D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14; T < g.length; T++, this.excess++) {
          var R = g.charCodeAt(T);
          if (this.treeIndex = B(A, D, this.treeIndex + Math.max(1, k), R), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === O.Attribute && // We shouldn't have consumed any characters after the entity,
            (k === 0 || // And there should be no invalid characters.
            P(R)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14, k !== 0) {
            if (R === d.SEMI)
              return this.emitNamedEntityData(this.treeIndex, k, this.consumed + this.excess);
            this.decodeMode !== O.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, l.prototype.emitNotTerminatedNamedEntity = function() {
        var g, T = this, A = T.result, D = T.decodeTree, k = (D[A] & E.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(A, k, this.consumed), (g = this.errors) === null || g === void 0 || g.missingSemicolonAfterCharacterReference(), this.consumed;
      }, l.prototype.emitNamedEntityData = function(g, T, A) {
        var D = this.decodeTree;
        return this.emitCodePoint(T === 1 ? D[g] & ~E.VALUE_LENGTH : D[g + 1], A), T === 3 && this.emitCodePoint(D[g + 2], A), A;
      }, l.prototype.end = function() {
        var g;
        switch (this.state) {
          case I.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== O.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case I.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case I.NumericHex:
            return this.emitNumericEntity(0, 3);
          case I.NumericStart:
            return (g = this.errors) === null || g === void 0 || g.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case I.EntityStart:
            return 0;
        }
      }, l;
    }()
  );
  e.EntityDecoder = M;
  function U(l) {
    var g = "", T = new M(l, function(A) {
      return g += (0, c.fromCodePoint)(A);
    });
    return function(D, k) {
      for (var R = 0, $ = 0; ($ = D.indexOf("&", $)) >= 0; ) {
        g += D.slice(R, $), T.startEntity(k);
        var J = T.write(
          D,
          // Skip the "&"
          $ + 1
        );
        if (J < 0) {
          R = $ + T.end();
          break;
        }
        R = $ + J, $ = J === 0 ? R + 1 : R;
      }
      var W = g + D.slice(R);
      return g = "", W;
    };
  }
  function B(l, g, T, A) {
    var D = (g & E.BRANCH_LENGTH) >> 7, k = g & E.JUMP_TABLE;
    if (D === 0)
      return k !== 0 && A === k ? T : -1;
    if (k) {
      var R = A - k;
      return R < 0 || R >= D ? -1 : l[T + R] - 1;
    }
    for (var $ = T, J = $ + D - 1; $ <= J; ) {
      var W = $ + J >>> 1, te = l[W];
      if (te < A)
        $ = W + 1;
      else if (te > A)
        J = W - 1;
      else
        return l[W + D];
    }
    return -1;
  }
  e.determineBranch = B;
  var w = U(n.default), F = U(i.default);
  function z(l, g) {
    return g === void 0 && (g = O.Legacy), w(l, g);
  }
  e.decodeHTML = z;
  function Z(l) {
    return w(l, O.Attribute);
  }
  e.decodeHTMLAttribute = Z;
  function ue(l) {
    return w(l, O.Strict);
  }
  e.decodeHTMLStrict = ue;
  function V(l) {
    return F(l, O.Strict);
  }
  e.decodeXML = V;
})($n);
var St = {}, qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
function Tr(e) {
  for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1;
  return e;
}
qi.default = new Map(/* @__PURE__ */ Tr([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ Tr([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ Tr([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ Tr([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Qr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0, e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var u = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  e.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(a, n) {
    return a.codePointAt(n);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(a, n) {
      return (a.charCodeAt(n) & 64512) === 55296 ? (a.charCodeAt(n) - 55296) * 1024 + a.charCodeAt(n + 1) - 56320 + 65536 : a.charCodeAt(n);
    }
  );
  function t(a) {
    for (var n = "", i = 0, c; (c = e.xmlReplacer.exec(a)) !== null; ) {
      var o = c.index, d = a.charCodeAt(o), s = u.get(d);
      s !== void 0 ? (n += a.substring(i, o) + s, i = o + 1) : (n += "".concat(a.substring(i, o), "&#x").concat((0, e.getCodePoint)(a, o).toString(16), ";"), i = e.xmlReplacer.lastIndex += +((d & 64512) === 55296));
    }
    return n + a.substr(i);
  }
  e.encodeXML = t, e.escape = t;
  function r(a, n) {
    return function(c) {
      for (var o, d = 0, s = ""; o = a.exec(c); )
        d !== o.index && (s += c.substring(d, o.index)), s += n.get(o[0].charCodeAt(0)), d = o.index + 1;
      return s + c.substring(d);
    };
  }
  e.escapeUTF8 = r(/[&<>'"]/g, u), e.escapeAttribute = r(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), e.escapeText = r(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(Qr);
var b3 = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(St, "__esModule", { value: !0 });
St.encodeNonAsciiHTML = St.encodeHTML = void 0;
var h3 = b3(qi), xd = Qr, p3 = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function m3(e) {
  return Nd(p3, e);
}
St.encodeHTML = m3;
function g3(e) {
  return Nd(xd.xmlReplacer, e);
}
St.encodeNonAsciiHTML = g3;
function Nd(e, u) {
  for (var t = "", r = 0, a; (a = e.exec(u)) !== null; ) {
    var n = a.index;
    t += u.substring(r, n);
    var i = u.charCodeAt(n), c = h3.default.get(i);
    if (typeof c == "object") {
      if (n + 1 < u.length) {
        var o = u.charCodeAt(n + 1), d = typeof c.n == "number" ? c.n === o ? c.o : void 0 : c.n.get(o);
        if (d !== void 0) {
          t += d, r = e.lastIndex += 1;
          continue;
        }
      }
      c = c.v;
    }
    if (c !== void 0)
      t += c, r = n + 1;
    else {
      var s = (0, xd.getCodePoint)(u, n);
      t += "&#x".concat(s.toString(16), ";"), r = e.lastIndex += +(s !== i);
    }
  }
  return t + u.substr(r);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLAttribute = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.DecodingMode = e.EntityDecoder = e.encodeHTML5 = e.encodeHTML4 = e.encodeNonAsciiHTML = e.encodeHTML = e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.encode = e.decodeStrict = e.decode = e.EncodingMode = e.EntityLevel = void 0;
  var u = $n, t = St, r = Qr, a;
  (function(b) {
    b[b.XML = 0] = "XML", b[b.HTML = 1] = "HTML";
  })(a = e.EntityLevel || (e.EntityLevel = {}));
  var n;
  (function(b) {
    b[b.UTF8 = 0] = "UTF8", b[b.ASCII = 1] = "ASCII", b[b.Extensive = 2] = "Extensive", b[b.Attribute = 3] = "Attribute", b[b.Text = 4] = "Text";
  })(n = e.EncodingMode || (e.EncodingMode = {}));
  function i(b, m) {
    m === void 0 && (m = a.XML);
    var v = typeof m == "number" ? m : m.level;
    if (v === a.HTML) {
      var P = typeof m == "object" ? m.mode : void 0;
      return (0, u.decodeHTML)(b, P);
    }
    return (0, u.decodeXML)(b);
  }
  e.decode = i;
  function c(b, m) {
    var v;
    m === void 0 && (m = a.XML);
    var P = typeof m == "number" ? { level: m } : m;
    return (v = P.mode) !== null && v !== void 0 || (P.mode = u.DecodingMode.Strict), i(b, P);
  }
  e.decodeStrict = c;
  function o(b, m) {
    m === void 0 && (m = a.XML);
    var v = typeof m == "number" ? { level: m } : m;
    return v.mode === n.UTF8 ? (0, r.escapeUTF8)(b) : v.mode === n.Attribute ? (0, r.escapeAttribute)(b) : v.mode === n.Text ? (0, r.escapeText)(b) : v.level === a.HTML ? v.mode === n.ASCII ? (0, t.encodeNonAsciiHTML)(b) : (0, t.encodeHTML)(b) : (0, r.encodeXML)(b);
  }
  e.encode = o;
  var d = Qr;
  Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function() {
    return d.encodeXML;
  } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function() {
    return d.escape;
  } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function() {
    return d.escapeUTF8;
  } }), Object.defineProperty(e, "escapeAttribute", { enumerable: !0, get: function() {
    return d.escapeAttribute;
  } }), Object.defineProperty(e, "escapeText", { enumerable: !0, get: function() {
    return d.escapeText;
  } });
  var s = St;
  Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return s.encodeNonAsciiHTML;
  } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } });
  var E = $n;
  Object.defineProperty(e, "EntityDecoder", { enumerable: !0, get: function() {
    return E.EntityDecoder;
  } }), Object.defineProperty(e, "DecodingMode", { enumerable: !0, get: function() {
    return E.DecodingMode;
  } }), Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function() {
    return E.decodeXML;
  } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return E.decodeHTMLAttribute;
  } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function() {
    return E.decodeXML;
  } });
})(vd);
var n0 = {};
Object.defineProperty(n0, "__esModule", { value: !0 });
n0.attributeNames = n0.elementNames = void 0;
n0.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
n0.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
var Xt = C && C.__assign || function() {
  return Xt = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, Xt.apply(this, arguments);
}, E3 = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), T3 = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), _3 = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && E3(u, e, t);
  return T3(u, e), u;
};
Object.defineProperty(er, "__esModule", { value: !0 });
er.render = void 0;
var Wu = _3(Le), Kr = vd, Id = n0, y3 = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function A3(e) {
  return e.replace(/"/g, "&quot;");
}
function v3(e, u) {
  var t;
  if (e) {
    var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? A3 : u.xmlMode || u.encodeEntities !== "utf8" ? Kr.encodeXML : Kr.escapeAttribute;
    return Object.keys(e).map(function(a) {
      var n, i, c = (n = e[a]) !== null && n !== void 0 ? n : "";
      return u.xmlMode === "foreign" && (a = (i = Id.attributeNames.get(a)) !== null && i !== void 0 ? i : a), !u.emptyAttrs && !u.xmlMode && c === "" ? a : "".concat(a, '="').concat(r(c), '"');
    }).join(" ");
  }
}
var Rc = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function Da(e, u) {
  u === void 0 && (u = {});
  for (var t = ("length" in e) ? e : [e], r = "", a = 0; a < t.length; a++)
    r += x3(t[a], u);
  return r;
}
er.render = Da;
er.default = Da;
function x3(e, u) {
  switch (e.type) {
    case Wu.Root:
      return Da(e.children, u);
    case Wu.Doctype:
    case Wu.Directive:
      return C3(e);
    case Wu.Comment:
      return P3(e);
    case Wu.CDATA:
      return O3(e);
    case Wu.Script:
    case Wu.Style:
    case Wu.Tag:
      return D3(e, u);
    case Wu.Text:
      return S3(e, u);
  }
}
var N3 = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), I3 = /* @__PURE__ */ new Set(["svg", "math"]);
function D3(e, u) {
  var t;
  u.xmlMode === "foreign" && (e.name = (t = Id.elementNames.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && N3.has(e.parent.name) && (u = Xt(Xt({}, u), { xmlMode: !1 }))), !u.xmlMode && I3.has(e.name) && (u = Xt(Xt({}, u), { xmlMode: "foreign" }));
  var r = "<".concat(e.name), a = v3(e.attribs, u);
  return a && (r += " ".concat(a)), e.children.length === 0 && (u.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    u.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    u.selfClosingTags && Rc.has(e.name)
  )) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += Da(e.children, u)), (u.xmlMode || !Rc.has(e.name)) && (r += "</".concat(e.name, ">"))), r;
}
function C3(e) {
  return "<".concat(e.data, ">");
}
function S3(e, u) {
  var t, r = e.data || "";
  return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && y3.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? (0, Kr.encodeXML)(r) : (0, Kr.escapeText)(r)), r;
}
function O3(e) {
  return "<![CDATA[".concat(e.children[0].data, "]]>");
}
function P3(e) {
  return "<!--".concat(e.data, "-->");
}
var L3 = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(yu, "__esModule", { value: !0 });
yu.innerText = yu.textContent = yu.getText = yu.getInnerHTML = yu.getOuterHTML = void 0;
var qu = Bt, w3 = L3(er), R3 = Le;
function Dd(e, u) {
  return (0, w3.default)(e, u);
}
yu.getOuterHTML = Dd;
function M3(e, u) {
  return (0, qu.hasChildren)(e) ? e.children.map(function(t) {
    return Dd(t, u);
  }).join("") : "";
}
yu.getInnerHTML = M3;
function Pr(e) {
  return Array.isArray(e) ? e.map(Pr).join("") : (0, qu.isTag)(e) ? e.name === "br" ? `
` : Pr(e.children) : (0, qu.isCDATA)(e) ? Pr(e.children) : (0, qu.isText)(e) ? e.data : "";
}
yu.getText = Pr;
function Yn(e) {
  return Array.isArray(e) ? e.map(Yn).join("") : (0, qu.hasChildren)(e) && !(0, qu.isComment)(e) ? Yn(e.children) : (0, qu.isText)(e) ? e.data : "";
}
yu.textContent = Yn;
function Xn(e) {
  return Array.isArray(e) ? e.map(Xn).join("") : (0, qu.hasChildren)(e) && (e.type === R3.ElementType.Tag || (0, qu.isCDATA)(e)) ? Xn(e.children) : (0, qu.isText)(e) ? e.data : "";
}
yu.innerText = Xn;
var qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
qe.prevElementSibling = qe.nextElementSibling = qe.getName = qe.hasAttrib = qe.getAttributeValue = qe.getSiblings = qe.getParent = qe.getChildren = void 0;
var Gi = Bt;
function Cd(e) {
  return (0, Gi.hasChildren)(e) ? e.children : [];
}
qe.getChildren = Cd;
function Sd(e) {
  return e.parent || null;
}
qe.getParent = Sd;
function k3(e) {
  var u, t, r = Sd(e);
  if (r != null)
    return Cd(r);
  for (var a = [e], n = e.prev, i = e.next; n != null; )
    a.unshift(n), u = n, n = u.prev;
  for (; i != null; )
    a.push(i), t = i, i = t.next;
  return a;
}
qe.getSiblings = k3;
function B3(e, u) {
  var t;
  return (t = e.attribs) === null || t === void 0 ? void 0 : t[u];
}
qe.getAttributeValue = B3;
function U3(e, u) {
  return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null;
}
qe.hasAttrib = U3;
function H3(e) {
  return e.name;
}
qe.getName = H3;
function F3(e) {
  for (var u, t = e.next; t !== null && !(0, Gi.isTag)(t); )
    u = t, t = u.next;
  return t;
}
qe.nextElementSibling = F3;
function q3(e) {
  for (var u, t = e.prev; t !== null && !(0, Gi.isTag)(t); )
    u = t, t = u.prev;
  return t;
}
qe.prevElementSibling = q3;
var cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
cu.prepend = cu.prependChild = cu.append = cu.appendChild = cu.replaceElement = cu.removeElement = void 0;
function ur(e) {
  if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
  }
  e.next = null, e.prev = null, e.parent = null;
}
cu.removeElement = ur;
function G3(e, u) {
  var t = u.prev = e.prev;
  t && (t.next = u);
  var r = u.next = e.next;
  r && (r.prev = u);
  var a = u.parent = e.parent;
  if (a) {
    var n = a.children;
    n[n.lastIndexOf(e)] = u, e.parent = null;
  }
}
cu.replaceElement = G3;
function j3(e, u) {
  if (ur(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
  } else
    u.prev = null;
}
cu.appendChild = j3;
function $3(e, u) {
  ur(u);
  var t = e.parent, r = e.next;
  if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
      var a = t.children;
      a.splice(a.lastIndexOf(r), 0, u);
    }
  } else
    t && t.children.push(u);
}
cu.append = $3;
function V3(e, u) {
  if (ur(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
  } else
    u.next = null;
}
cu.prependChild = V3;
function Y3(e, u) {
  ur(u);
  var t = e.parent;
  if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
  }
  e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u;
}
cu.prepend = Y3;
var Qe = {};
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.findAll = Qe.existsOne = Qe.findOne = Qe.findOneChild = Qe.find = Qe.filter = void 0;
var Ca = Bt;
function X3(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), Od(e, Array.isArray(u) ? u : [u], t, r);
}
Qe.filter = X3;
function Od(e, u, t, r) {
  for (var a = [], n = [u], i = [0]; ; ) {
    if (i[0] >= n[0].length) {
      if (i.length === 1)
        return a;
      n.shift(), i.shift();
      continue;
    }
    var c = n[0][i[0]++];
    if (e(c) && (a.push(c), --r <= 0))
      return a;
    t && (0, Ca.hasChildren)(c) && c.children.length > 0 && (i.unshift(0), n.unshift(c.children));
  }
}
Qe.find = Od;
function W3(e, u) {
  return u.find(e);
}
Qe.findOneChild = W3;
function Pd(e, u, t) {
  t === void 0 && (t = !0);
  for (var r = null, a = 0; a < u.length && !r; a++) {
    var n = u[a];
    if ((0, Ca.isTag)(n))
      e(n) ? r = n : t && n.children.length > 0 && (r = Pd(e, n.children, !0));
    else
      continue;
  }
  return r;
}
Qe.findOne = Pd;
function Ld(e, u) {
  return u.some(function(t) {
    return (0, Ca.isTag)(t) && (e(t) || Ld(e, t.children));
  });
}
Qe.existsOne = Ld;
function z3(e, u) {
  for (var t = [], r = [u], a = [0]; ; ) {
    if (a[0] >= r[0].length) {
      if (r.length === 1)
        return t;
      r.shift(), a.shift();
      continue;
    }
    var n = r[0][a[0]++];
    (0, Ca.isTag)(n) && (e(n) && t.push(n), n.children.length > 0 && (a.unshift(0), r.unshift(n.children)));
  }
}
Qe.findAll = z3;
var Au = {};
Object.defineProperty(Au, "__esModule", { value: !0 });
Au.getElementsByTagType = Au.getElementsByTagName = Au.getElementById = Au.getElements = Au.testElement = void 0;
var xt = Bt, Sa = Qe, Jr = {
  tag_name: function(e) {
    return typeof e == "function" ? function(u) {
      return (0, xt.isTag)(u) && e(u.name);
    } : e === "*" ? xt.isTag : function(u) {
      return (0, xt.isTag)(u) && u.name === e;
    };
  },
  tag_type: function(e) {
    return typeof e == "function" ? function(u) {
      return e(u.type);
    } : function(u) {
      return u.type === e;
    };
  },
  tag_contains: function(e) {
    return typeof e == "function" ? function(u) {
      return (0, xt.isText)(u) && e(u.data);
    } : function(u) {
      return (0, xt.isText)(u) && u.data === e;
    };
  }
};
function wd(e, u) {
  return typeof u == "function" ? function(t) {
    return (0, xt.isTag)(t) && u(t.attribs[e]);
  } : function(t) {
    return (0, xt.isTag)(t) && t.attribs[e] === u;
  };
}
function Q3(e, u) {
  return function(t) {
    return e(t) || u(t);
  };
}
function Rd(e) {
  var u = Object.keys(e).map(function(t) {
    var r = e[t];
    return Object.prototype.hasOwnProperty.call(Jr, t) ? Jr[t](r) : wd(t, r);
  });
  return u.length === 0 ? null : u.reduce(Q3);
}
function K3(e, u) {
  var t = Rd(e);
  return t ? t(u) : !0;
}
Au.testElement = K3;
function J3(e, u, t, r) {
  r === void 0 && (r = 1 / 0);
  var a = Rd(e);
  return a ? (0, Sa.filter)(a, u, t, r) : [];
}
Au.getElements = J3;
function Z3(e, u, t) {
  return t === void 0 && (t = !0), Array.isArray(u) || (u = [u]), (0, Sa.findOne)(wd("id", e), u, t);
}
Au.getElementById = Z3;
function eh(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Sa.filter)(Jr.tag_name(e), u, t, r);
}
Au.getElementsByTagName = eh;
function uh(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Sa.filter)(Jr.tag_type(e), u, t, r);
}
Au.getElementsByTagType = uh;
var Md = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uniqueSort = e.compareDocumentPosition = e.DocumentPosition = e.removeSubsets = void 0;
  var u = Bt;
  function t(i) {
    for (var c = i.length; --c >= 0; ) {
      var o = i[c];
      if (c > 0 && i.lastIndexOf(o, c - 1) >= 0) {
        i.splice(c, 1);
        continue;
      }
      for (var d = o.parent; d; d = d.parent)
        if (i.includes(d)) {
          i.splice(c, 1);
          break;
        }
    }
    return i;
  }
  e.removeSubsets = t;
  var r;
  (function(i) {
    i[i.DISCONNECTED = 1] = "DISCONNECTED", i[i.PRECEDING = 2] = "PRECEDING", i[i.FOLLOWING = 4] = "FOLLOWING", i[i.CONTAINS = 8] = "CONTAINS", i[i.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(r = e.DocumentPosition || (e.DocumentPosition = {}));
  function a(i, c) {
    var o = [], d = [];
    if (i === c)
      return 0;
    for (var s = (0, u.hasChildren)(i) ? i : i.parent; s; )
      o.unshift(s), s = s.parent;
    for (s = (0, u.hasChildren)(c) ? c : c.parent; s; )
      d.unshift(s), s = s.parent;
    for (var E = Math.min(o.length, d.length), b = 0; b < E && o[b] === d[b]; )
      b++;
    if (b === 0)
      return r.DISCONNECTED;
    var m = o[b - 1], v = m.children, P = o[b], I = d[b];
    return v.indexOf(P) > v.indexOf(I) ? m === c ? r.FOLLOWING | r.CONTAINED_BY : r.FOLLOWING : m === i ? r.PRECEDING | r.CONTAINS : r.PRECEDING;
  }
  e.compareDocumentPosition = a;
  function n(i) {
    return i = i.filter(function(c, o, d) {
      return !d.includes(c, o + 1);
    }), i.sort(function(c, o) {
      var d = a(c, o);
      return d & r.PRECEDING ? -1 : d & r.FOLLOWING ? 1 : 0;
    }), i;
  }
  e.uniqueSort = n;
})(Md);
var Oa = {};
Object.defineProperty(Oa, "__esModule", { value: !0 });
Oa.getFeed = void 0;
var th = yu, tr = Au;
function rh(e) {
  var u = Zr(sh, e);
  return u ? u.name === "feed" ? ah(u) : nh(u) : null;
}
Oa.getFeed = rh;
function ah(e) {
  var u, t = e.children, r = {
    type: "atom",
    items: (0, tr.getElementsByTagName)("entry", t).map(function(i) {
      var c, o = i.children, d = { media: kd(o) };
      ru(d, "id", "id", o), ru(d, "title", "title", o);
      var s = (c = Zr("link", o)) === null || c === void 0 ? void 0 : c.attribs.href;
      s && (d.link = s);
      var E = ct("summary", o) || ct("content", o);
      E && (d.description = E);
      var b = ct("updated", o);
      return b && (d.pubDate = new Date(b)), d;
    })
  };
  ru(r, "id", "id", t), ru(r, "title", "title", t);
  var a = (u = Zr("link", t)) === null || u === void 0 ? void 0 : u.attribs.href;
  a && (r.link = a), ru(r, "description", "subtitle", t);
  var n = ct("updated", t);
  return n && (r.updated = new Date(n)), ru(r, "author", "email", t, !0), r;
}
function nh(e) {
  var u, t, r = (t = (u = Zr("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], a = {
    type: e.name.substr(0, 3),
    id: "",
    items: (0, tr.getElementsByTagName)("item", e.children).map(function(i) {
      var c = i.children, o = { media: kd(c) };
      ru(o, "id", "guid", c), ru(o, "title", "title", c), ru(o, "link", "link", c), ru(o, "description", "description", c);
      var d = ct("pubDate", c) || ct("dc:date", c);
      return d && (o.pubDate = new Date(d)), o;
    })
  };
  ru(a, "title", "title", r), ru(a, "link", "link", r), ru(a, "description", "description", r);
  var n = ct("lastBuildDate", r);
  return n && (a.updated = new Date(n)), ru(a, "author", "managingEditor", r, !0), a;
}
var ih = ["url", "type", "lang"], ch = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function kd(e) {
  return (0, tr.getElementsByTagName)("media:content", e).map(function(u) {
    for (var t = u.attribs, r = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, a = 0, n = ih; a < n.length; a++) {
      var i = n[a];
      t[i] && (r[i] = t[i]);
    }
    for (var c = 0, o = ch; c < o.length; c++) {
      var i = o[c];
      t[i] && (r[i] = parseInt(t[i], 10));
    }
    return t.expression && (r.expression = t.expression), r;
  });
}
function Zr(e, u) {
  return (0, tr.getElementsByTagName)(e, u, !0, 1)[0];
}
function ct(e, u, t) {
  return t === void 0 && (t = !1), (0, th.textContent)((0, tr.getElementsByTagName)(e, u, t, 1)).trim();
}
function ru(e, u, t, r, a) {
  a === void 0 && (a = !1);
  var n = ct(t, r, a);
  n && (e[u] = n);
}
function sh(e) {
  return e === "rss" || e === "feed" || e === "rdf:RDF";
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(a, n, i, c) {
    c === void 0 && (c = i);
    var o = Object.getOwnPropertyDescriptor(n, i);
    (!o || ("get" in o ? !n.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return n[i];
    } }), Object.defineProperty(a, c, o);
  } : function(a, n, i, c) {
    c === void 0 && (c = i), a[c] = n[i];
  }), t = C && C.__exportStar || function(a, n) {
    for (var i in a)
      i !== "default" && !Object.prototype.hasOwnProperty.call(n, i) && u(n, a, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.hasChildren = e.isDocument = e.isComment = e.isText = e.isCDATA = e.isTag = void 0, t(yu, e), t(qe, e), t(cu, e), t(Qe, e), t(Au, e), t(Md, e), t(Oa, e);
  var r = Bt;
  Object.defineProperty(e, "isTag", { enumerable: !0, get: function() {
    return r.isTag;
  } }), Object.defineProperty(e, "isCDATA", { enumerable: !0, get: function() {
    return r.isCDATA;
  } }), Object.defineProperty(e, "isText", { enumerable: !0, get: function() {
    return r.isText;
  } }), Object.defineProperty(e, "isComment", { enumerable: !0, get: function() {
    return r.isComment;
  } }), Object.defineProperty(e, "isDocument", { enumerable: !0, get: function() {
    return r.isDocument;
  } }), Object.defineProperty(e, "hasChildren", { enumerable: !0, get: function() {
    return r.hasChildren;
  } });
})(dd);
var i0 = {}, ji = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getLimit = e.isFilter = e.filterNames = void 0, e.filterNames = /* @__PURE__ */ new Set([
    "first",
    "last",
    "eq",
    "gt",
    "nth",
    "lt",
    "even",
    "odd"
  ]);
  function u(r) {
    return r.type !== "pseudo" ? !1 : e.filterNames.has(r.name) ? !0 : r.name === "not" && Array.isArray(r.data) ? r.data.some(function(a) {
      return a.some(u);
    }) : !1;
  }
  e.isFilter = u;
  function t(r, a, n) {
    var i = a != null ? parseInt(a, 10) : NaN;
    switch (r) {
      case "first":
        return 1;
      case "nth":
      case "eq":
        return isFinite(i) ? i >= 0 ? i + 1 : 1 / 0 : 0;
      case "lt":
        return isFinite(i) ? i >= 0 ? Math.min(i, n) : 1 / 0 : 0;
      case "gt":
        return isFinite(i) ? 1 / 0 : 0;
      case "odd":
        return 2 * n;
      case "even":
        return 2 * n - 1;
      case "last":
      case "not":
        return 1 / 0;
    }
  }
  e.getLimit = t;
})(ji);
Object.defineProperty(i0, "__esModule", { value: !0 });
i0.groupSelectors = i0.getDocumentRoot = void 0;
var oh = ji;
function dh(e) {
  for (; e.parent; )
    e = e.parent;
  return e;
}
i0.getDocumentRoot = dh;
function lh(e) {
  for (var u = [], t = [], r = 0, a = e; r < a.length; r++) {
    var n = a[r];
    n.some(oh.isFilter) ? u.push(n) : t.push(n);
  }
  return [t, u];
}
i0.groupSelectors = lh;
(function(e) {
  var u = C && C.__assign || function() {
    return u = Object.assign || function(V) {
      for (var l, g = 1, T = arguments.length; g < T; g++) {
        l = arguments[g];
        for (var A in l)
          Object.prototype.hasOwnProperty.call(l, A) && (V[A] = l[A]);
      }
      return V;
    }, u.apply(this, arguments);
  }, t = C && C.__createBinding || (Object.create ? function(V, l, g, T) {
    T === void 0 && (T = g);
    var A = Object.getOwnPropertyDescriptor(l, g);
    (!A || ("get" in A ? !l.__esModule : A.writable || A.configurable)) && (A = { enumerable: !0, get: function() {
      return l[g];
    } }), Object.defineProperty(V, T, A);
  } : function(V, l, g, T) {
    T === void 0 && (T = g), V[T] = l[g];
  }), r = C && C.__setModuleDefault || (Object.create ? function(V, l) {
    Object.defineProperty(V, "default", { enumerable: !0, value: l });
  } : function(V, l) {
    V.default = l;
  }), a = C && C.__importStar || function(V) {
    if (V && V.__esModule)
      return V;
    var l = {};
    if (V != null)
      for (var g in V)
        g !== "default" && Object.prototype.hasOwnProperty.call(V, g) && t(l, V, g);
    return r(l, V), l;
  }, n = C && C.__spreadArray || function(V, l, g) {
    if (g || arguments.length === 2)
      for (var T = 0, A = l.length, D; T < A; T++)
        (D || !(T in l)) && (D || (D = Array.prototype.slice.call(l, 0, T)), D[T] = l[T]);
    return V.concat(D || Array.prototype.slice.call(l));
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.select = e.filter = e.some = e.is = e.aliases = e.pseudos = e.filters = void 0;
  var i = Q0, c = Bn, o = a(dd), d = a(kt), s = i0, E = ji, b = Bn;
  Object.defineProperty(e, "filters", { enumerable: !0, get: function() {
    return b.filters;
  } }), Object.defineProperty(e, "pseudos", { enumerable: !0, get: function() {
    return b.pseudos;
  } }), Object.defineProperty(e, "aliases", { enumerable: !0, get: function() {
    return b.aliases;
  } });
  var m = {
    type: i.SelectorType.Universal,
    namespace: null
  }, v = {
    type: i.SelectorType.Pseudo,
    name: "scope",
    data: null
  };
  function P(V, l, g) {
    return g === void 0 && (g = {}), I([V], l, g);
  }
  e.is = P;
  function I(V, l, g) {
    if (g === void 0 && (g = {}), typeof l == "function")
      return V.some(l);
    var T = (0, s.groupSelectors)((0, i.parse)(l)), A = T[0], D = T[1];
    return A.length > 0 && V.some((0, c._compileToken)(A, g)) || D.some(function(k) {
      return B(k, V, g).length > 0;
    });
  }
  e.some = I;
  function O(V, l, g, T) {
    var A = typeof g == "string" ? parseInt(g, 10) : NaN;
    switch (V) {
      case "first":
      case "lt":
        return l;
      case "last":
        return l.length > 0 ? [l[l.length - 1]] : l;
      case "nth":
      case "eq":
        return isFinite(A) && Math.abs(A) < l.length ? [A < 0 ? l[l.length + A] : l[A]] : [];
      case "gt":
        return isFinite(A) ? l.slice(A + 1) : [];
      case "even":
        return l.filter(function(k, R) {
          return R % 2 === 0;
        });
      case "odd":
        return l.filter(function(k, R) {
          return R % 2 === 1;
        });
      case "not": {
        var D = new Set(U(g, l, T));
        return l.filter(function(k) {
          return !D.has(k);
        });
      }
    }
  }
  function M(V, l, g) {
    return g === void 0 && (g = {}), U((0, i.parse)(V), l, g);
  }
  e.filter = M;
  function U(V, l, g) {
    if (l.length === 0)
      return [];
    var T = (0, s.groupSelectors)(V), A = T[0], D = T[1], k;
    if (A.length) {
      var R = ue(l, A, g);
      if (D.length === 0)
        return R;
      R.length && (k = new Set(R));
    }
    for (var $ = 0; $ < D.length && (k == null ? void 0 : k.size) !== l.length; $++) {
      var J = D[$], W = k ? l.filter(function(re) {
        return o.isTag(re) && !k.has(re);
      }) : l;
      if (W.length === 0)
        break;
      var R = B(J, l, g);
      if (R.length)
        if (k)
          R.forEach(function(re) {
            return k.add(re);
          });
        else {
          if ($ === D.length - 1)
            return R;
          k = new Set(R);
        }
    }
    return typeof k < "u" ? k.size === l.length ? l : (
      // Filter elements to preserve order
      l.filter(function(te) {
        return k.has(te);
      })
    ) : [];
  }
  function B(V, l, g) {
    var T;
    if (V.some(i.isTraversal)) {
      var A = (T = g.root) !== null && T !== void 0 ? T : (0, s.getDocumentRoot)(l[0]), D = u(u({}, g), { context: l, relativeSelector: !1 });
      return V.push(v), F(A, V, D, !0, l.length);
    }
    return F(l, V, g, !1, l.length);
  }
  function w(V, l, g, T) {
    if (g === void 0 && (g = {}), T === void 0 && (T = 1 / 0), typeof V == "function")
      return Z(l, V);
    var A = (0, s.groupSelectors)((0, i.parse)(V)), D = A[0], k = A[1], R = k.map(function($) {
      return F(l, $, g, !0, T);
    });
    return D.length && R.push(z(l, D, g, T)), R.length === 0 ? [] : R.length === 1 ? R[0] : o.uniqueSort(R.reduce(function($, J) {
      return n(n([], $, !0), J, !0);
    }));
  }
  e.select = w;
  function F(V, l, g, T, A) {
    var D = l.findIndex(E.isFilter), k = l.slice(0, D), R = l[D], $ = l.length - 1 === D ? A : 1 / 0, J = (0, E.getLimit)(R.name, R.data, $);
    if (J === 0)
      return [];
    var W = k.length === 0 && !Array.isArray(V) ? o.getChildren(V).filter(o.isTag) : k.length === 0 ? (Array.isArray(V) ? V : [V]).filter(o.isTag) : T || k.some(i.isTraversal) ? z(V, [k], g, J) : ue(V, [k], g), te = W.slice(0, J), re = O(R.name, te, R.data, g);
    if (re.length === 0 || l.length === D + 1)
      return re;
    var we = l.slice(D + 1), Iu = we.some(i.isTraversal);
    if (Iu) {
      if ((0, i.isTraversal)(we[0])) {
        var he = we[0].type;
        (he === i.SelectorType.Sibling || he === i.SelectorType.Adjacent) && (re = (0, c.prepareContext)(re, o, !0)), we.unshift(m);
      }
      g = u(u({}, g), {
        // Avoid absolutizing the selector
        relativeSelector: !1,
        /*
         * Add a custom root func, to make sure traversals don't match elements
         * that aren't a part of the considered tree.
         */
        rootFunc: function(hu) {
          return re.includes(hu);
        }
      });
    } else
      g.rootFunc && g.rootFunc !== d.trueFunc && (g = u(u({}, g), { rootFunc: d.trueFunc }));
    return we.some(E.isFilter) ? F(re, we, g, !1, A) : Iu ? (
      // Query existing elements to resolve traversal.
      z(re, [we], g, A)
    ) : (
      // If we don't have any more traversals, simply filter elements.
      ue(re, [we], g)
    );
  }
  function z(V, l, g, T) {
    var A = (0, c._compileToken)(l, g, V);
    return Z(V, A, T);
  }
  function Z(V, l, g) {
    g === void 0 && (g = 1 / 0);
    var T = (0, c.prepareContext)(V, o, l.shouldTestNextSiblings);
    return o.find(function(A) {
      return o.isTag(A) && l(A);
    }, T, !0, g);
  }
  function ue(V, l, g) {
    var T = (Array.isArray(V) ? V : [V]).filter(o.isTag);
    if (T.length === 0)
      return T;
    var A = (0, c._compileToken)(l, g);
    return A === d.trueFunc ? T : T.filter(A);
  }
})(Ao);
var fh = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), bh = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), hh = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && fh(u, e, t);
  return bh(u, e), u;
}, Wn = C && C.__spreadArray || function(e, u, t) {
  if (t || arguments.length === 2)
    for (var r = 0, a = u.length, n; r < a; r++)
      (n || !(r in u)) && (n || (n = Array.prototype.slice.call(u, 0, r)), n[r] = u[r]);
  return e.concat(n || Array.prototype.slice.call(u));
};
Object.defineProperty(K, "__esModule", { value: !0 });
K.addBack = K.add = K.end = K.slice = K.index = K.toArray = K.get = K.eq = K.last = K.first = K.has = K.not = K.is = K.filterArray = K.filter = K.map = K.each = K.contents = K.children = K.siblings = K.prevUntil = K.prevAll = K.prev = K.nextUntil = K.nextAll = K.next = K.closest = K.parentsUntil = K.parents = K.parent = K.find = void 0;
var Pa = Nu, E0 = hh(Ao), Lu = Rt, ph = Ce, ju = p0, mh = /^\s*[~+]/;
function gh(e) {
  var u;
  if (!e)
    return this._make([]);
  var t = this.toArray();
  if (typeof e != "string") {
    var r = (0, Lu.isCheerio)(e) ? e.toArray() : [e];
    return this._make(r.filter(function(i) {
      return t.some(function(c) {
        return (0, ph.contains)(c, i);
      });
    }));
  }
  var a = mh.test(e) ? t : this.children().toArray(), n = {
    context: t,
    root: (u = this._root) === null || u === void 0 ? void 0 : u[0],
    // Pass options that are recognized by `cheerio-select`
    xmlMode: this.options.xmlMode,
    lowerCaseTags: this.options.lowerCaseTags,
    lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
    pseudos: this.options.pseudos,
    quirksMode: this.options.quirksMode
  };
  return this._make(E0.select(e, a, n));
}
K.find = gh;
function $i(e) {
  return function(u) {
    for (var t = [], r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
    return function(a) {
      var n, i = e(u, this);
      return a && (i = Xi(i, a, this.options.xmlMode, (n = this._root) === null || n === void 0 ? void 0 : n[0])), this._make(
        // Post processing is only necessary if there is more than one element.
        this.length > 1 && i.length > 1 ? t.reduce(function(c, o) {
          return o(c);
        }, i) : i
      );
    };
  };
}
var rr = $i(function(e, u) {
  for (var t, r = [], a = 0; a < u.length; a++) {
    var n = e(u[a]);
    r.push(n);
  }
  return (t = new Array()).concat.apply(t, r);
}), Vi = $i(function(e, u) {
  for (var t = [], r = 0; r < u.length; r++) {
    var a = e(u[r]);
    a !== null && t.push(a);
  }
  return t;
});
function Yi(e) {
  for (var u = [], t = 1; t < arguments.length; t++)
    u[t - 1] = arguments[t];
  var r = null, a = $i(function(n, i) {
    var c = [];
    return (0, Lu.domEach)(i, function(o) {
      for (var d; (d = n(o)) && !(r != null && r(d, c.length)); o = d)
        c.push(d);
    }), c;
  }).apply(void 0, Wn([e], u, !1));
  return function(n, i) {
    var c = this;
    r = typeof n == "string" ? function(d) {
      return E0.is(d, n, c.options);
    } : n ? ar(n) : null;
    var o = a.call(this, i);
    return r = null, o;
  };
}
function T0(e) {
  return Array.from(new Set(e));
}
K.parent = Vi(function(e) {
  var u = e.parent;
  return u && !(0, Pa.isDocument)(u) ? u : null;
}, T0);
K.parents = rr(function(e) {
  for (var u = []; e.parent && !(0, Pa.isDocument)(e.parent); )
    u.push(e.parent), e = e.parent;
  return u;
}, ju.uniqueSort, function(e) {
  return e.reverse();
});
K.parentsUntil = Yi(function(e) {
  var u = e.parent;
  return u && !(0, Pa.isDocument)(u) ? u : null;
}, ju.uniqueSort, function(e) {
  return e.reverse();
});
function Eh(e) {
  var u, t = [];
  if (!e)
    return this._make(t);
  var r = {
    xmlMode: this.options.xmlMode,
    root: (u = this._root) === null || u === void 0 ? void 0 : u[0]
  }, a = typeof e == "string" ? function(n) {
    return E0.is(n, e, r);
  } : ar(e);
  return (0, Lu.domEach)(this, function(n) {
    for (; n && (0, Lu.isTag)(n); ) {
      if (a(n, 0)) {
        t.includes(n) || t.push(n);
        break;
      }
      n = n.parent;
    }
  }), this._make(t);
}
K.closest = Eh;
K.next = Vi(function(e) {
  return (0, ju.nextElementSibling)(e);
});
K.nextAll = rr(function(e) {
  for (var u = []; e.next; )
    e = e.next, (0, Lu.isTag)(e) && u.push(e);
  return u;
}, T0);
K.nextUntil = Yi(function(e) {
  return (0, ju.nextElementSibling)(e);
}, T0);
K.prev = Vi(function(e) {
  return (0, ju.prevElementSibling)(e);
});
K.prevAll = rr(function(e) {
  for (var u = []; e.prev; )
    e = e.prev, (0, Lu.isTag)(e) && u.push(e);
  return u;
}, T0);
K.prevUntil = Yi(function(e) {
  return (0, ju.prevElementSibling)(e);
}, T0);
K.siblings = rr(function(e) {
  return (0, ju.getSiblings)(e).filter(function(u) {
    return (0, Lu.isTag)(u) && u !== e;
  });
}, ju.uniqueSort);
K.children = rr(function(e) {
  return (0, ju.getChildren)(e).filter(Lu.isTag);
}, T0);
function Th() {
  var e = this.toArray().reduce(function(u, t) {
    return (0, Pa.hasChildren)(t) ? u.concat(t.children) : u;
  }, []);
  return this._make(e);
}
K.contents = Th;
function _h(e) {
  for (var u = 0, t = this.length; u < t && e.call(this[u], u, this[u]) !== !1; )
    ++u;
  return this;
}
K.each = _h;
function yh(e) {
  for (var u = [], t = 0; t < this.length; t++) {
    var r = this[t], a = e.call(r, t, r);
    a != null && (u = u.concat(a));
  }
  return this._make(u);
}
K.map = yh;
function ar(e) {
  return typeof e == "function" ? function(u, t) {
    return e.call(u, t, u);
  } : (0, Lu.isCheerio)(e) ? function(u) {
    return Array.prototype.includes.call(e, u);
  } : function(u) {
    return e === u;
  };
}
function Ah(e) {
  var u;
  return this._make(Xi(this.toArray(), e, this.options.xmlMode, (u = this._root) === null || u === void 0 ? void 0 : u[0]));
}
K.filter = Ah;
function Xi(e, u, t, r) {
  return typeof u == "string" ? E0.filter(u, e, { xmlMode: t, root: r }) : e.filter(ar(u));
}
K.filterArray = Xi;
function vh(e) {
  var u = this.toArray();
  return typeof e == "string" ? E0.some(u.filter(Lu.isTag), e, this.options) : e ? u.some(ar(e)) : !1;
}
K.is = vh;
function xh(e) {
  var u = this.toArray();
  if (typeof e == "string") {
    var t = new Set(E0.filter(e, u, this.options));
    u = u.filter(function(a) {
      return !t.has(a);
    });
  } else {
    var r = ar(e);
    u = u.filter(function(a, n) {
      return !r(a, n);
    });
  }
  return this._make(u);
}
K.not = xh;
function Nh(e) {
  var u = this;
  return this.filter(typeof e == "string" ? (
    // Using the `:has` selector here short-circuits searches.
    ":has(".concat(e, ")")
  ) : function(t, r) {
    return u._make(r).find(e).length > 0;
  });
}
K.has = Nh;
function Ih() {
  return this.length > 1 ? this._make(this[0]) : this;
}
K.first = Ih;
function Dh() {
  return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
K.last = Dh;
function Ch(e) {
  var u;
  return e = +e, e === 0 && this.length <= 1 ? this : (e < 0 && (e = this.length + e), this._make((u = this[e]) !== null && u !== void 0 ? u : []));
}
K.eq = Ch;
function Sh(e) {
  return e == null ? this.toArray() : this[e < 0 ? this.length + e : e];
}
K.get = Sh;
function Oh() {
  return Array.prototype.slice.call(this);
}
K.toArray = Oh;
function Ph(e) {
  var u, t;
  return e == null ? (u = this.parent().children(), t = this[0]) : typeof e == "string" ? (u = this._make(e), t = this[0]) : (u = this, t = (0, Lu.isCheerio)(e) ? e[0] : e), Array.prototype.indexOf.call(u, t);
}
K.index = Ph;
function Lh(e, u) {
  return this._make(Array.prototype.slice.call(this, e, u));
}
K.slice = Lh;
function wh() {
  var e;
  return (e = this.prevObject) !== null && e !== void 0 ? e : this._make([]);
}
K.end = wh;
function Rh(e, u) {
  var t = this._make(e, u), r = (0, ju.uniqueSort)(Wn(Wn([], this.get(), !0), t.get(), !0));
  return this._make(r);
}
K.add = Rh;
function Mh(e) {
  return this.prevObject ? this.add(e ? this.prevObject.filter(e) : this.prevObject) : this;
}
K.addBack = Mh;
var ne = {}, Ot = {};
Object.defineProperty(Ot, "__esModule", { value: !0 });
Ot.update = Ot.getParse = void 0;
var kh = p0, Mc = Nu;
function Bh(e) {
  return function(t, r, a, n) {
    if (typeof Pu.Buffer < "u" && Pu.Buffer.isBuffer(t) && (t = t.toString()), typeof t == "string")
      return e(t, r, a, n);
    var i = t;
    if (!Array.isArray(i) && (0, Mc.isDocument)(i))
      return i;
    var c = new Mc.Document([]);
    return Bd(i, c), c;
  };
}
Ot.getParse = Bh;
function Bd(e, u) {
  var t = Array.isArray(e) ? e : [e];
  u ? u.children = t : u = null;
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.parent && a.parent.children !== t && (0, kh.removeElement)(a), u ? (a.prev = t[r - 1] || null, a.next = t[r + 1] || null) : a.prev = a.next = null, a.parent = u;
  }
  return u;
}
Ot.update = Bd;
var Uh = C && C.__spreadArray || function(e, u, t) {
  if (t || arguments.length === 2)
    for (var r = 0, a = u.length, n; r < a; r++)
      (n || !(r in u)) && (n || (n = Array.prototype.slice.call(u, 0, r)), n[r] = u[r]);
  return e.concat(n || Array.prototype.slice.call(u));
};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.clone = ne.text = ne.toString = ne.html = ne.empty = ne.replaceWith = ne.remove = ne.insertBefore = ne.before = ne.insertAfter = ne.after = ne.wrapAll = ne.unwrap = ne.wrapInner = ne.wrap = ne.prepend = ne.append = ne.prependTo = ne.appendTo = ne._makeDomArray = void 0;
var $u = Nu, c0 = Ot, kc = Ce, Me = Rt, Hh = p0;
function Fh(e, u) {
  var t = this;
  return e == null ? [] : (0, Me.isCheerio)(e) ? u ? (0, Me.cloneDom)(e.get()) : e.get() : Array.isArray(e) ? e.reduce(function(r, a) {
    return r.concat(t._makeDomArray(a, u));
  }, []) : typeof e == "string" ? this._parse(e, this.options, !1, null).children : u ? (0, Me.cloneDom)([e]) : [e];
}
ne._makeDomArray = Fh;
function Ud(e) {
  return function() {
    for (var u = this, t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    var a = this.length - 1;
    return (0, Me.domEach)(this, function(n, i) {
      if ((0, $u.hasChildren)(n)) {
        var c = typeof t[0] == "function" ? t[0].call(n, i, u._render(n.children)) : t, o = u._makeDomArray(c, i < a);
        e(o, n.children, n);
      }
    });
  };
}
function bt(e, u, t, r, a) {
  for (var n, i, c = Uh([
    u,
    t
  ], r, !0), o = u === 0 ? null : e[u - 1], d = u + t >= e.length ? null : e[u + t], s = 0; s < r.length; ++s) {
    var E = r[s], b = E.parent;
    if (b) {
      var m = b.children, v = m.indexOf(E);
      v > -1 && (b.children.splice(v, 1), a === b && u > v && c[0]--);
    }
    E.parent = a, E.prev && (E.prev.next = (n = E.next) !== null && n !== void 0 ? n : null), E.next && (E.next.prev = (i = E.prev) !== null && i !== void 0 ? i : null), E.prev = s === 0 ? o : r[s - 1], E.next = s === r.length - 1 ? d : r[s + 1];
  }
  return o && (o.next = r[0]), d && (d.prev = r[r.length - 1]), e.splice.apply(e, c);
}
function qh(e) {
  var u = (0, Me.isCheerio)(e) ? e : this._make(e);
  return u.append(this), this;
}
ne.appendTo = qh;
function Gh(e) {
  var u = (0, Me.isCheerio)(e) ? e : this._make(e);
  return u.prepend(this), this;
}
ne.prependTo = Gh;
ne.append = Ud(function(e, u, t) {
  bt(u, u.length, 0, e, t);
});
ne.prepend = Ud(function(e, u, t) {
  bt(u, 0, 0, e, t);
});
function Hd(e) {
  return function(u) {
    for (var t = this.length - 1, r = this.parents().last(), a = 0; a < this.length; a++) {
      var n = this[a], i = typeof u == "function" ? u.call(n, a, n) : typeof u == "string" && !(0, Me.isHtml)(u) ? r.find(u).clone() : u, c = this._makeDomArray(i, a < t)[0];
      if (!(!c || !(0, $u.hasChildren)(c))) {
        for (var o = c, d = 0; d < o.children.length; ) {
          var s = o.children[d];
          (0, Me.isTag)(s) ? (o = s, d = 0) : d++;
        }
        e(n, o, [c]);
      }
    }
    return this;
  };
}
ne.wrap = Hd(function(e, u, t) {
  var r = e.parent;
  if (r) {
    var a = r.children, n = a.indexOf(e);
    (0, c0.update)([e], u), bt(a, n, 0, t, r);
  }
});
ne.wrapInner = Hd(function(e, u, t) {
  (0, $u.hasChildren)(e) && ((0, c0.update)(e.children, u), (0, c0.update)(t, e));
});
function jh(e) {
  var u = this;
  return this.parent(e).not("body").each(function(t, r) {
    u._make(r).replaceWith(r.children);
  }), this;
}
ne.unwrap = jh;
function $h(e) {
  var u = this[0];
  if (u) {
    for (var t = this._make(typeof e == "function" ? e.call(u, 0, u) : e).insertBefore(u), r = void 0, a = 0; a < t.length; a++)
      t[a].type === "tag" && (r = t[a]);
    for (var n = 0; r && n < r.children.length; ) {
      var i = r.children[n];
      i.type === "tag" ? (r = i, n = 0) : n++;
    }
    r && this._make(r).append(this);
  }
  return this;
}
ne.wrapAll = $h;
function Vh() {
  for (var e = this, u = [], t = 0; t < arguments.length; t++)
    u[t] = arguments[t];
  var r = this.length - 1;
  return (0, Me.domEach)(this, function(a, n) {
    var i = a.parent;
    if (!(!(0, $u.hasChildren)(a) || !i)) {
      var c = i.children, o = c.indexOf(a);
      if (!(o < 0)) {
        var d = typeof u[0] == "function" ? u[0].call(a, n, e._render(a.children)) : u, s = e._makeDomArray(d, n < r);
        bt(c, o + 1, 0, s, i);
      }
    }
  });
}
ne.after = Vh;
function Yh(e) {
  var u = this;
  typeof e == "string" && (e = this._make(e)), this.remove();
  var t = [];
  return this._makeDomArray(e).forEach(function(r) {
    var a = u.clone().toArray(), n = r.parent;
    if (n) {
      var i = n.children, c = i.indexOf(r);
      c < 0 || (bt(i, c + 1, 0, a, n), t.push.apply(t, a));
    }
  }), this._make(t);
}
ne.insertAfter = Yh;
function Xh() {
  for (var e = this, u = [], t = 0; t < arguments.length; t++)
    u[t] = arguments[t];
  var r = this.length - 1;
  return (0, Me.domEach)(this, function(a, n) {
    var i = a.parent;
    if (!(!(0, $u.hasChildren)(a) || !i)) {
      var c = i.children, o = c.indexOf(a);
      if (!(o < 0)) {
        var d = typeof u[0] == "function" ? u[0].call(a, n, e._render(a.children)) : u, s = e._makeDomArray(d, n < r);
        bt(c, o, 0, s, i);
      }
    }
  });
}
ne.before = Xh;
function Wh(e) {
  var u = this, t = this._make(e);
  this.remove();
  var r = [];
  return (0, Me.domEach)(t, function(a) {
    var n = u.clone().toArray(), i = a.parent;
    if (i) {
      var c = i.children, o = c.indexOf(a);
      o < 0 || (bt(c, o, 0, n, i), r.push.apply(r, n));
    }
  }), this._make(r);
}
ne.insertBefore = Wh;
function zh(e) {
  var u = e ? this.filter(e) : this;
  return (0, Me.domEach)(u, function(t) {
    (0, Hh.removeElement)(t), t.prev = t.next = t.parent = null;
  }), this;
}
ne.remove = zh;
function Qh(e) {
  var u = this;
  return (0, Me.domEach)(this, function(t, r) {
    var a = t.parent;
    if (a) {
      var n = a.children, i = typeof e == "function" ? e.call(t, r, t) : e, c = u._makeDomArray(i);
      (0, c0.update)(c, null);
      var o = n.indexOf(t);
      bt(n, o, 1, c, a), c.includes(t) || (t.parent = t.prev = t.next = null);
    }
  });
}
ne.replaceWith = Qh;
function Kh() {
  return (0, Me.domEach)(this, function(e) {
    (0, $u.hasChildren)(e) && (e.children.forEach(function(u) {
      u.next = u.prev = u.parent = null;
    }), e.children.length = 0);
  });
}
ne.empty = Kh;
function Jh(e) {
  var u = this;
  if (e === void 0) {
    var t = this[0];
    return !t || !(0, $u.hasChildren)(t) ? null : this._render(t.children);
  }
  return (0, Me.domEach)(this, function(r) {
    if ((0, $u.hasChildren)(r)) {
      r.children.forEach(function(n) {
        n.next = n.prev = n.parent = null;
      });
      var a = (0, Me.isCheerio)(e) ? e.toArray() : u._parse("".concat(e), u.options, !1, r).children;
      (0, c0.update)(a, r);
    }
  });
}
ne.html = Jh;
function Zh() {
  return this._render(this);
}
ne.toString = Zh;
function e6(e) {
  var u = this;
  return e === void 0 ? (0, kc.text)(this) : typeof e == "function" ? (0, Me.domEach)(this, function(t, r) {
    return u._make(t).text(e.call(t, r, (0, kc.text)([t])));
  }) : (0, Me.domEach)(this, function(t) {
    if ((0, $u.hasChildren)(t)) {
      t.children.forEach(function(a) {
        a.next = a.prev = a.parent = null;
      });
      var r = new $u.Text("".concat(e));
      (0, c0.update)(r, t);
    }
  });
}
ne.text = e6;
function u6() {
  return this._make((0, Me.cloneDom)(this.get()));
}
ne.clone = u6;
var La = {};
Object.defineProperty(La, "__esModule", { value: !0 });
La.css = void 0;
var zn = Rt;
function t6(e, u) {
  if (e != null && u != null || // When `prop` is a "plain" object
  typeof e == "object" && !Array.isArray(e))
    return (0, zn.domEach)(this, function(t, r) {
      (0, zn.isTag)(t) && Fd(t, e, u, r);
    });
  if (this.length !== 0)
    return qd(this[0], e);
}
La.css = t6;
function Fd(e, u, t, r) {
  if (typeof u == "string") {
    var a = qd(e), n = typeof t == "function" ? t.call(e, r, a[u]) : t;
    n === "" ? delete a[u] : n != null && (a[u] = n), e.attribs.style = r6(a);
  } else
    typeof u == "object" && Object.keys(u).forEach(function(i, c) {
      Fd(e, i, u[i], c);
    });
}
function qd(e, u) {
  if (!(!e || !(0, zn.isTag)(e))) {
    var t = a6(e.attribs.style);
    if (typeof u == "string")
      return t[u];
    if (Array.isArray(u)) {
      var r = {};
      return u.forEach(function(a) {
        t[a] != null && (r[a] = t[a]);
      }), r;
    }
    return t;
  }
}
function r6(e) {
  return Object.keys(e).reduce(function(u, t) {
    return "".concat(u).concat(u ? " " : "").concat(t, ": ").concat(e[t], ";");
  }, "");
}
function a6(e) {
  if (e = (e || "").trim(), !e)
    return {};
  for (var u = {}, t, r = 0, a = e.split(";"); r < a.length; r++) {
    var n = a[r], i = n.indexOf(":");
    if (i < 1 || i === n.length - 1) {
      var c = n.trimEnd();
      c.length > 0 && t !== void 0 && (u[t] += ";".concat(c));
    } else
      t = n.slice(0, i).trim(), u[t] = n.slice(i + 1).trim();
  }
  return u;
}
var s0 = {};
Object.defineProperty(s0, "__esModule", { value: !0 });
s0.serializeArray = s0.serialize = void 0;
var n6 = Rt, Bc = "input,select,textarea,keygen", i6 = /%20/g, Uc = /\r?\n/g;
function c6() {
  var e = this.serializeArray(), u = e.map(function(t) {
    return "".concat(encodeURIComponent(t.name), "=").concat(encodeURIComponent(t.value));
  });
  return u.join("&").replace(i6, "+");
}
s0.serialize = c6;
function s6() {
  var e = this;
  return this.map(function(u, t) {
    var r = e._make(t);
    return (0, n6.isTag)(t) && t.name === "form" ? r.find(Bc).toArray() : r.filter(Bc).toArray();
  }).filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
    // Convert each of the elements to its value(s)
  ).map(function(u, t) {
    var r, a = e._make(t), n = a.attr("name"), i = (r = a.val()) !== null && r !== void 0 ? r : "";
    return Array.isArray(i) ? i.map(function(c) {
      return { name: n, value: c.replace(Uc, `\r
`) };
    }) : { name: n, value: i.replace(Uc, `\r
`) };
  }).toArray();
}
s0.serializeArray = s6;
var o6 = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), d6 = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), nr = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && o6(u, e, t);
  return d6(u, e), u;
};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.Cheerio = void 0;
var l6 = nr(Pe), f6 = nr(K), b6 = nr(ne), h6 = nr(La), p6 = nr(s0), ir = (
  /** @class */
  function() {
    function e(u, t, r) {
      if (this.length = 0, this.options = r, this._root = t, u) {
        for (var a = 0; a < u.length; a++)
          this[a] = u[a];
        this.length = u.length;
      }
    }
    return e;
  }()
);
ha.Cheerio = ir;
ir.prototype.cheerio = "[cheerio object]";
ir.prototype.splice = Array.prototype.splice;
ir.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
Object.assign(ir.prototype, l6, f6, b6, h6, p6);
var m6 = C && C.__extends || function() {
  var e = function(u, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (r[n] = a[n]);
    }, e(u, t);
  };
  return function(u, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(u, t);
    function r() {
      this.constructor = u;
    }
    u.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), Wt = C && C.__assign || function() {
  return Wt = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, Wt.apply(this, arguments);
}, g6 = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), E6 = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), Gd = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && g6(u, e, t);
  return E6(u, e), u;
};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.getLoad = void 0;
var dn = Gd(h0), T6 = Gd(Ce), _6 = ha, A0 = Rt;
function y6(e, u) {
  return function t(r, a, n) {
    if (n === void 0 && (n = !0), r == null)
      throw new Error("cheerio.load() expects a string");
    var i = Wt(Wt({}, dn.default), (0, dn.flatten)(a)), c = e(r, i, n, null), o = (
      /** @class */
      function(s) {
        m6(E, s);
        function E() {
          return s !== null && s.apply(this, arguments) || this;
        }
        return E.prototype._make = function(b, m) {
          var v = d(b, m);
          return v.prevObject = this, v;
        }, E.prototype._parse = function(b, m, v, P) {
          return e(b, m, v, P);
        }, E.prototype._render = function(b) {
          return u(b, this.options);
        }, E;
      }(_6.Cheerio)
    );
    function d(s, E, b, m) {
      if (b === void 0 && (b = c), s && (0, A0.isCheerio)(s))
        return s;
      var v = Wt(Wt({}, i), (0, dn.flatten)(m)), P = typeof b == "string" ? [e(b, v, !1, null)] : "length" in b ? b : [b], I = (0, A0.isCheerio)(P) ? P : new o(P, null, v);
      if (I._root = I, !s)
        return new o(void 0, I, v);
      var O = typeof s == "string" && (0, A0.isHtml)(s) ? (
        // $(<html>)
        e(s, v, !1, null).children
      ) : A6(s) ? (
        // $(dom)
        [s]
      ) : Array.isArray(s) ? (
        // $([dom])
        s
      ) : void 0, M = new o(O, I, v);
      if (O)
        return M;
      if (typeof s != "string")
        throw new Error("Unexpected type of selector");
      var U = s, B = E ? typeof E == "string" ? (0, A0.isHtml)(E) ? (
        // $('li', '<ul>...</ul>')
        new o([e(E, v, !1, null)], I, v)
      ) : (
        // $('li', 'ul')
        (U = "".concat(E, " ").concat(U), I)
      ) : (0, A0.isCheerio)(E) ? (
        // $('li', $)
        E
      ) : (
        // $('li', node), $('li', [nodes])
        new o(Array.isArray(E) ? E : [E], I, v)
      ) : (
        // If we don't have a context, maybe we have a root, from loading
        I
      );
      return B ? B.find(U) : M;
    }
    return Object.assign(d, T6, {
      load: t,
      // `_root` and `_options` are used in static methods.
      _root: c,
      _options: i,
      // Add `fn` for plugins
      fn: o.prototype,
      // Add the prototype here to maintain `instanceof` behavior.
      prototype: o.prototype
    }), d;
  };
}
ca.getLoad = y6;
function A6(e) {
  return !!e.name || e.type === "root" || e.type === "text" || e.type === "comment";
}
var o0 = {}, q0 = {}, G0 = {}, Pt = {}, wa = {}, Ra = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isUndefinedCodePoint = e.isControlCodePoint = e.getSurrogatePairCodePoint = e.isSurrogatePair = e.isSurrogate = e.SEQUENCES = e.CODE_POINTS = e.REPLACEMENT_CHARACTER = void 0;
  const u = /* @__PURE__ */ new Set([
    65534,
    65535,
    131070,
    131071,
    196606,
    196607,
    262142,
    262143,
    327678,
    327679,
    393214,
    393215,
    458750,
    458751,
    524286,
    524287,
    589822,
    589823,
    655358,
    655359,
    720894,
    720895,
    786430,
    786431,
    851966,
    851967,
    917502,
    917503,
    983038,
    983039,
    1048574,
    1048575,
    1114110,
    1114111
  ]);
  e.REPLACEMENT_CHARACTER = "�", function(c) {
    c[c.EOF = -1] = "EOF", c[c.NULL = 0] = "NULL", c[c.TABULATION = 9] = "TABULATION", c[c.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", c[c.LINE_FEED = 10] = "LINE_FEED", c[c.FORM_FEED = 12] = "FORM_FEED", c[c.SPACE = 32] = "SPACE", c[c.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", c[c.QUOTATION_MARK = 34] = "QUOTATION_MARK", c[c.NUMBER_SIGN = 35] = "NUMBER_SIGN", c[c.AMPERSAND = 38] = "AMPERSAND", c[c.APOSTROPHE = 39] = "APOSTROPHE", c[c.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", c[c.SOLIDUS = 47] = "SOLIDUS", c[c.DIGIT_0 = 48] = "DIGIT_0", c[c.DIGIT_9 = 57] = "DIGIT_9", c[c.SEMICOLON = 59] = "SEMICOLON", c[c.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", c[c.EQUALS_SIGN = 61] = "EQUALS_SIGN", c[c.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", c[c.QUESTION_MARK = 63] = "QUESTION_MARK", c[c.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", c[c.LATIN_CAPITAL_F = 70] = "LATIN_CAPITAL_F", c[c.LATIN_CAPITAL_X = 88] = "LATIN_CAPITAL_X", c[c.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", c[c.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", c[c.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", c[c.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", c[c.LATIN_SMALL_F = 102] = "LATIN_SMALL_F", c[c.LATIN_SMALL_X = 120] = "LATIN_SMALL_X", c[c.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z", c[c.REPLACEMENT_CHARACTER = 65533] = "REPLACEMENT_CHARACTER";
  }(e.CODE_POINTS || (e.CODE_POINTS = {})), e.SEQUENCES = {
    DASH_DASH: "--",
    CDATA_START: "[CDATA[",
    DOCTYPE: "doctype",
    SCRIPT: "script",
    PUBLIC: "public",
    SYSTEM: "system"
  };
  function t(c) {
    return c >= 55296 && c <= 57343;
  }
  e.isSurrogate = t;
  function r(c) {
    return c >= 56320 && c <= 57343;
  }
  e.isSurrogatePair = r;
  function a(c, o) {
    return (c - 55296) * 1024 + 9216 + o;
  }
  e.getSurrogatePairCodePoint = a;
  function n(c) {
    return c !== 32 && c !== 10 && c !== 13 && c !== 9 && c !== 12 && c >= 1 && c <= 31 || c >= 127 && c <= 159;
  }
  e.isControlCodePoint = n;
  function i(c) {
    return c >= 64976 && c <= 65007 || u.has(c);
  }
  e.isUndefinedCodePoint = i;
})(Ra);
var cr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ERR = void 0, function(u) {
    u.controlCharacterInInputStream = "control-character-in-input-stream", u.noncharacterInInputStream = "noncharacter-in-input-stream", u.surrogateInInputStream = "surrogate-in-input-stream", u.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", u.endTagWithAttributes = "end-tag-with-attributes", u.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", u.unexpectedSolidusInTag = "unexpected-solidus-in-tag", u.unexpectedNullCharacter = "unexpected-null-character", u.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", u.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", u.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", u.missingEndTagName = "missing-end-tag-name", u.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", u.unknownNamedCharacterReference = "unknown-named-character-reference", u.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", u.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", u.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", u.eofBeforeTagName = "eof-before-tag-name", u.eofInTag = "eof-in-tag", u.missingAttributeValue = "missing-attribute-value", u.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", u.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", u.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", u.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", u.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", u.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", u.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", u.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", u.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", u.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", u.cdataInHtmlContent = "cdata-in-html-content", u.incorrectlyOpenedComment = "incorrectly-opened-comment", u.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", u.eofInDoctype = "eof-in-doctype", u.nestedComment = "nested-comment", u.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", u.eofInComment = "eof-in-comment", u.incorrectlyClosedComment = "incorrectly-closed-comment", u.eofInCdata = "eof-in-cdata", u.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", u.nullCharacterReference = "null-character-reference", u.surrogateCharacterReference = "surrogate-character-reference", u.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", u.controlCharacterReference = "control-character-reference", u.noncharacterCharacterReference = "noncharacter-character-reference", u.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", u.missingDoctypeName = "missing-doctype-name", u.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", u.duplicateAttribute = "duplicate-attribute", u.nonConformingDoctype = "non-conforming-doctype", u.missingDoctype = "missing-doctype", u.misplacedDoctype = "misplaced-doctype", u.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", u.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", u.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", u.openElementsLeftAfterEof = "open-elements-left-after-eof", u.abandonedHeadElementChild = "abandoned-head-element-child", u.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", u.nestedNoscriptInHead = "nested-noscript-in-head", u.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
  }(e.ERR || (e.ERR = {}));
})(cr);
Object.defineProperty(wa, "__esModule", { value: !0 });
wa.Preprocessor = void 0;
const Xe = Ra, ln = cr, v6 = 65536;
class x6 {
  constructor(u) {
    this.handler = u, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = v6, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(u) {
    const { line: t, col: r, offset: a } = this;
    return {
      code: u,
      startLine: t,
      endLine: t,
      startCol: r,
      endCol: r,
      startOffset: a,
      endOffset: a
    };
  }
  _err(u) {
    this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(u)));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
  }
  _processSurrogate(u) {
    if (this.pos !== this.html.length - 1) {
      const t = this.html.charCodeAt(this.pos + 1);
      if ((0, Xe.isSurrogatePair)(t))
        return this.pos++, this._addGap(), (0, Xe.getSurrogatePairCodePoint)(u, t);
    } else if (!this.lastChunkWritten)
      return this.endOfChunkHit = !0, Xe.CODE_POINTS.EOF;
    return this._err(ln.ERR.surrogateInInputStream), u;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
  }
  write(u, t) {
    this.html.length > 0 ? this.html += u : this.html = u, this.endOfChunkHit = !1, this.lastChunkWritten = t;
  }
  insertHtmlAtCurrentPos(u) {
    this.html = this.html.substring(0, this.pos + 1) + u + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
  }
  startsWith(u, t) {
    if (this.pos + u.length > this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, !1;
    if (t)
      return this.html.startsWith(u, this.pos);
    for (let r = 0; r < u.length; r++)
      if ((this.html.charCodeAt(this.pos + r) | 32) !== u.charCodeAt(r))
        return !1;
    return !0;
  }
  peek(u) {
    const t = this.pos + u;
    if (t >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, Xe.CODE_POINTS.EOF;
    const r = this.html.charCodeAt(t);
    return r === Xe.CODE_POINTS.CARRIAGE_RETURN ? Xe.CODE_POINTS.LINE_FEED : r;
  }
  advance() {
    if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, Xe.CODE_POINTS.EOF;
    let u = this.html.charCodeAt(this.pos);
    return u === Xe.CODE_POINTS.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, Xe.CODE_POINTS.LINE_FEED) : u === Xe.CODE_POINTS.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, (0, Xe.isSurrogate)(u) && (u = this._processSurrogate(u)), this.handler.onParseError === null || u > 31 && u < 127 || u === Xe.CODE_POINTS.LINE_FEED || u === Xe.CODE_POINTS.CARRIAGE_RETURN || u > 159 && u < 64976 || this._checkForProblematicCharacters(u), u);
  }
  _checkForProblematicCharacters(u) {
    (0, Xe.isControlCodePoint)(u) ? this._err(ln.ERR.controlCharacterInInputStream) : (0, Xe.isUndefinedCodePoint)(u) && this._err(ln.ERR.noncharacterInInputStream);
  }
  retreat(u) {
    for (this.pos -= u; this.pos < this.lastGapPos; )
      this.lastGapPos = this.gapStack.pop(), this.pos--;
    this.isEol = !1;
  }
}
wa.Preprocessor = x6;
var Ma = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getTokenAttr = e.TokenType = void 0, function(t) {
    t[t.CHARACTER = 0] = "CHARACTER", t[t.NULL_CHARACTER = 1] = "NULL_CHARACTER", t[t.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", t[t.START_TAG = 3] = "START_TAG", t[t.END_TAG = 4] = "END_TAG", t[t.COMMENT = 5] = "COMMENT", t[t.DOCTYPE = 6] = "DOCTYPE", t[t.EOF = 7] = "EOF", t[t.HIBERNATION = 8] = "HIBERNATION";
  }(e.TokenType || (e.TokenType = {}));
  function u(t, r) {
    for (let a = t.attrs.length - 1; a >= 0; a--)
      if (t.attrs[a].name === r)
        return t.attrs[a].value;
    return null;
  }
  e.getTokenAttr = u;
})(Ma);
var jd = {}, Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var Qn = {};
(function(e) {
  var u;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
  var t = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (u = String.fromCodePoint) !== null && u !== void 0 ? u : function(n) {
    var i = "";
    return n > 65535 && (n -= 65536, i += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), i += String.fromCharCode(n), i;
  };
  function r(n) {
    var i;
    return n >= 55296 && n <= 57343 || n > 1114111 ? 65533 : (i = t.get(n)) !== null && i !== void 0 ? i : n;
  }
  e.replaceCodePoint = r;
  function a(n) {
    return (0, e.fromCodePoint)(r(n));
  }
  e.default = a;
})(Qn);
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(l, g, T, A) {
    A === void 0 && (A = T);
    var D = Object.getOwnPropertyDescriptor(g, T);
    (!D || ("get" in D ? !g.__esModule : D.writable || D.configurable)) && (D = { enumerable: !0, get: function() {
      return g[T];
    } }), Object.defineProperty(l, A, D);
  } : function(l, g, T, A) {
    A === void 0 && (A = T), l[A] = g[T];
  }), t = C && C.__setModuleDefault || (Object.create ? function(l, g) {
    Object.defineProperty(l, "default", { enumerable: !0, value: g });
  } : function(l, g) {
    l.default = g;
  }), r = C && C.__importStar || function(l) {
    if (l && l.__esModule)
      return l;
    var g = {};
    if (l != null)
      for (var T in l)
        T !== "default" && Object.prototype.hasOwnProperty.call(l, T) && u(g, l, T);
    return t(g, l), g;
  }, a = C && C.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
  var n = a(Wi);
  e.htmlDecodeTree = n.default;
  var i = a(zi);
  e.xmlDecodeTree = i.default;
  var c = r(Qn);
  e.decodeCodePoint = c.default;
  var o = Qn;
  Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
    return o.replaceCodePoint;
  } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
    return o.fromCodePoint;
  } });
  var d;
  (function(l) {
    l[l.NUM = 35] = "NUM", l[l.SEMI = 59] = "SEMI", l[l.EQUALS = 61] = "EQUALS", l[l.ZERO = 48] = "ZERO", l[l.NINE = 57] = "NINE", l[l.LOWER_A = 97] = "LOWER_A", l[l.LOWER_F = 102] = "LOWER_F", l[l.LOWER_X = 120] = "LOWER_X", l[l.LOWER_Z = 122] = "LOWER_Z", l[l.UPPER_A = 65] = "UPPER_A", l[l.UPPER_F = 70] = "UPPER_F", l[l.UPPER_Z = 90] = "UPPER_Z";
  })(d || (d = {}));
  var s = 32, E;
  (function(l) {
    l[l.VALUE_LENGTH = 49152] = "VALUE_LENGTH", l[l.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", l[l.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(E = e.BinTrieFlags || (e.BinTrieFlags = {}));
  function b(l) {
    return l >= d.ZERO && l <= d.NINE;
  }
  function m(l) {
    return l >= d.UPPER_A && l <= d.UPPER_F || l >= d.LOWER_A && l <= d.LOWER_F;
  }
  function v(l) {
    return l >= d.UPPER_A && l <= d.UPPER_Z || l >= d.LOWER_A && l <= d.LOWER_Z || b(l);
  }
  function P(l) {
    return l === d.EQUALS || v(l);
  }
  var I;
  (function(l) {
    l[l.EntityStart = 0] = "EntityStart", l[l.NumericStart = 1] = "NumericStart", l[l.NumericDecimal = 2] = "NumericDecimal", l[l.NumericHex = 3] = "NumericHex", l[l.NamedEntity = 4] = "NamedEntity";
  })(I || (I = {}));
  var O;
  (function(l) {
    l[l.Legacy = 0] = "Legacy", l[l.Strict = 1] = "Strict", l[l.Attribute = 2] = "Attribute";
  })(O = e.DecodingMode || (e.DecodingMode = {}));
  var M = (
    /** @class */
    function() {
      function l(g, T, A) {
        this.decodeTree = g, this.emitCodePoint = T, this.errors = A, this.state = I.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = O.Strict;
      }
      return l.prototype.startEntity = function(g) {
        this.decodeMode = g, this.state = I.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, l.prototype.write = function(g, T) {
        switch (this.state) {
          case I.EntityStart:
            return g.charCodeAt(T) === d.NUM ? (this.state = I.NumericStart, this.consumed += 1, this.stateNumericStart(g, T + 1)) : (this.state = I.NamedEntity, this.stateNamedEntity(g, T));
          case I.NumericStart:
            return this.stateNumericStart(g, T);
          case I.NumericDecimal:
            return this.stateNumericDecimal(g, T);
          case I.NumericHex:
            return this.stateNumericHex(g, T);
          case I.NamedEntity:
            return this.stateNamedEntity(g, T);
        }
      }, l.prototype.stateNumericStart = function(g, T) {
        return T >= g.length ? -1 : (g.charCodeAt(T) | s) === d.LOWER_X ? (this.state = I.NumericHex, this.consumed += 1, this.stateNumericHex(g, T + 1)) : (this.state = I.NumericDecimal, this.stateNumericDecimal(g, T));
      }, l.prototype.addToNumericResult = function(g, T, A, D) {
        if (T !== A) {
          var k = A - T;
          this.result = this.result * Math.pow(D, k) + parseInt(g.substr(T, k), D), this.consumed += k;
        }
      }, l.prototype.stateNumericHex = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D) || m(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 16), this.emitNumericEntity(D, 3);
        }
        return this.addToNumericResult(g, A, T, 16), -1;
      }, l.prototype.stateNumericDecimal = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 10), this.emitNumericEntity(D, 2);
        }
        return this.addToNumericResult(g, A, T, 10), -1;
      }, l.prototype.emitNumericEntity = function(g, T) {
        var A;
        if (this.consumed <= T)
          return (A = this.errors) === null || A === void 0 || A.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (g === d.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === O.Strict)
          return 0;
        return this.emitCodePoint((0, c.replaceCodePoint)(this.result), this.consumed), this.errors && (g !== d.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, l.prototype.stateNamedEntity = function(g, T) {
        for (var A = this.decodeTree, D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14; T < g.length; T++, this.excess++) {
          var R = g.charCodeAt(T);
          if (this.treeIndex = B(A, D, this.treeIndex + Math.max(1, k), R), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === O.Attribute && // We shouldn't have consumed any characters after the entity,
            (k === 0 || // And there should be no invalid characters.
            P(R)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14, k !== 0) {
            if (R === d.SEMI)
              return this.emitNamedEntityData(this.treeIndex, k, this.consumed + this.excess);
            this.decodeMode !== O.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, l.prototype.emitNotTerminatedNamedEntity = function() {
        var g, T = this, A = T.result, D = T.decodeTree, k = (D[A] & E.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(A, k, this.consumed), (g = this.errors) === null || g === void 0 || g.missingSemicolonAfterCharacterReference(), this.consumed;
      }, l.prototype.emitNamedEntityData = function(g, T, A) {
        var D = this.decodeTree;
        return this.emitCodePoint(T === 1 ? D[g] & ~E.VALUE_LENGTH : D[g + 1], A), T === 3 && this.emitCodePoint(D[g + 2], A), A;
      }, l.prototype.end = function() {
        var g;
        switch (this.state) {
          case I.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== O.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case I.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case I.NumericHex:
            return this.emitNumericEntity(0, 3);
          case I.NumericStart:
            return (g = this.errors) === null || g === void 0 || g.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case I.EntityStart:
            return 0;
        }
      }, l;
    }()
  );
  e.EntityDecoder = M;
  function U(l) {
    var g = "", T = new M(l, function(A) {
      return g += (0, c.fromCodePoint)(A);
    });
    return function(D, k) {
      for (var R = 0, $ = 0; ($ = D.indexOf("&", $)) >= 0; ) {
        g += D.slice(R, $), T.startEntity(k);
        var J = T.write(
          D,
          // Skip the "&"
          $ + 1
        );
        if (J < 0) {
          R = $ + T.end();
          break;
        }
        R = $ + J, $ = J === 0 ? R + 1 : R;
      }
      var W = g + D.slice(R);
      return g = "", W;
    };
  }
  function B(l, g, T, A) {
    var D = (g & E.BRANCH_LENGTH) >> 7, k = g & E.JUMP_TABLE;
    if (D === 0)
      return k !== 0 && A === k ? T : -1;
    if (k) {
      var R = A - k;
      return R < 0 || R >= D ? -1 : l[T + R] - 1;
    }
    for (var $ = T, J = $ + D - 1; $ <= J; ) {
      var W = $ + J >>> 1, te = l[W];
      if (te < A)
        $ = W + 1;
      else if (te > A)
        J = W - 1;
      else
        return l[W + D];
    }
    return -1;
  }
  e.determineBranch = B;
  var w = U(n.default), F = U(i.default);
  function z(l, g) {
    return g === void 0 && (g = O.Legacy), w(l, g);
  }
  e.decodeHTML = z;
  function Z(l) {
    return w(l, O.Attribute);
  }
  e.decodeHTMLAttribute = Z;
  function ue(l) {
    return w(l, O.Strict);
  }
  e.decodeHTMLStrict = ue;
  function V(l) {
    return F(l, O.Strict);
  }
  e.decodeXML = V;
})(jd);
var Zu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.hasUnescapedText = e.isNumberedHeader = e.SPECIAL_ELEMENTS = e.getTagID = e.TAG_ID = e.TAG_NAMES = e.DOCUMENT_MODE = e.ATTRS = e.NS = void 0;
  var u;
  (function(s) {
    s.HTML = "http://www.w3.org/1999/xhtml", s.MATHML = "http://www.w3.org/1998/Math/MathML", s.SVG = "http://www.w3.org/2000/svg", s.XLINK = "http://www.w3.org/1999/xlink", s.XML = "http://www.w3.org/XML/1998/namespace", s.XMLNS = "http://www.w3.org/2000/xmlns/";
  })(u = e.NS || (e.NS = {})), function(s) {
    s.TYPE = "type", s.ACTION = "action", s.ENCODING = "encoding", s.PROMPT = "prompt", s.NAME = "name", s.COLOR = "color", s.FACE = "face", s.SIZE = "size";
  }(e.ATTRS || (e.ATTRS = {})), function(s) {
    s.NO_QUIRKS = "no-quirks", s.QUIRKS = "quirks", s.LIMITED_QUIRKS = "limited-quirks";
  }(e.DOCUMENT_MODE || (e.DOCUMENT_MODE = {}));
  var t;
  (function(s) {
    s.A = "a", s.ADDRESS = "address", s.ANNOTATION_XML = "annotation-xml", s.APPLET = "applet", s.AREA = "area", s.ARTICLE = "article", s.ASIDE = "aside", s.B = "b", s.BASE = "base", s.BASEFONT = "basefont", s.BGSOUND = "bgsound", s.BIG = "big", s.BLOCKQUOTE = "blockquote", s.BODY = "body", s.BR = "br", s.BUTTON = "button", s.CAPTION = "caption", s.CENTER = "center", s.CODE = "code", s.COL = "col", s.COLGROUP = "colgroup", s.DD = "dd", s.DESC = "desc", s.DETAILS = "details", s.DIALOG = "dialog", s.DIR = "dir", s.DIV = "div", s.DL = "dl", s.DT = "dt", s.EM = "em", s.EMBED = "embed", s.FIELDSET = "fieldset", s.FIGCAPTION = "figcaption", s.FIGURE = "figure", s.FONT = "font", s.FOOTER = "footer", s.FOREIGN_OBJECT = "foreignObject", s.FORM = "form", s.FRAME = "frame", s.FRAMESET = "frameset", s.H1 = "h1", s.H2 = "h2", s.H3 = "h3", s.H4 = "h4", s.H5 = "h5", s.H6 = "h6", s.HEAD = "head", s.HEADER = "header", s.HGROUP = "hgroup", s.HR = "hr", s.HTML = "html", s.I = "i", s.IMG = "img", s.IMAGE = "image", s.INPUT = "input", s.IFRAME = "iframe", s.KEYGEN = "keygen", s.LABEL = "label", s.LI = "li", s.LINK = "link", s.LISTING = "listing", s.MAIN = "main", s.MALIGNMARK = "malignmark", s.MARQUEE = "marquee", s.MATH = "math", s.MENU = "menu", s.META = "meta", s.MGLYPH = "mglyph", s.MI = "mi", s.MO = "mo", s.MN = "mn", s.MS = "ms", s.MTEXT = "mtext", s.NAV = "nav", s.NOBR = "nobr", s.NOFRAMES = "noframes", s.NOEMBED = "noembed", s.NOSCRIPT = "noscript", s.OBJECT = "object", s.OL = "ol", s.OPTGROUP = "optgroup", s.OPTION = "option", s.P = "p", s.PARAM = "param", s.PLAINTEXT = "plaintext", s.PRE = "pre", s.RB = "rb", s.RP = "rp", s.RT = "rt", s.RTC = "rtc", s.RUBY = "ruby", s.S = "s", s.SCRIPT = "script", s.SECTION = "section", s.SELECT = "select", s.SOURCE = "source", s.SMALL = "small", s.SPAN = "span", s.STRIKE = "strike", s.STRONG = "strong", s.STYLE = "style", s.SUB = "sub", s.SUMMARY = "summary", s.SUP = "sup", s.TABLE = "table", s.TBODY = "tbody", s.TEMPLATE = "template", s.TEXTAREA = "textarea", s.TFOOT = "tfoot", s.TD = "td", s.TH = "th", s.THEAD = "thead", s.TITLE = "title", s.TR = "tr", s.TRACK = "track", s.TT = "tt", s.U = "u", s.UL = "ul", s.SVG = "svg", s.VAR = "var", s.WBR = "wbr", s.XMP = "xmp";
  })(t = e.TAG_NAMES || (e.TAG_NAMES = {}));
  var r;
  (function(s) {
    s[s.UNKNOWN = 0] = "UNKNOWN", s[s.A = 1] = "A", s[s.ADDRESS = 2] = "ADDRESS", s[s.ANNOTATION_XML = 3] = "ANNOTATION_XML", s[s.APPLET = 4] = "APPLET", s[s.AREA = 5] = "AREA", s[s.ARTICLE = 6] = "ARTICLE", s[s.ASIDE = 7] = "ASIDE", s[s.B = 8] = "B", s[s.BASE = 9] = "BASE", s[s.BASEFONT = 10] = "BASEFONT", s[s.BGSOUND = 11] = "BGSOUND", s[s.BIG = 12] = "BIG", s[s.BLOCKQUOTE = 13] = "BLOCKQUOTE", s[s.BODY = 14] = "BODY", s[s.BR = 15] = "BR", s[s.BUTTON = 16] = "BUTTON", s[s.CAPTION = 17] = "CAPTION", s[s.CENTER = 18] = "CENTER", s[s.CODE = 19] = "CODE", s[s.COL = 20] = "COL", s[s.COLGROUP = 21] = "COLGROUP", s[s.DD = 22] = "DD", s[s.DESC = 23] = "DESC", s[s.DETAILS = 24] = "DETAILS", s[s.DIALOG = 25] = "DIALOG", s[s.DIR = 26] = "DIR", s[s.DIV = 27] = "DIV", s[s.DL = 28] = "DL", s[s.DT = 29] = "DT", s[s.EM = 30] = "EM", s[s.EMBED = 31] = "EMBED", s[s.FIELDSET = 32] = "FIELDSET", s[s.FIGCAPTION = 33] = "FIGCAPTION", s[s.FIGURE = 34] = "FIGURE", s[s.FONT = 35] = "FONT", s[s.FOOTER = 36] = "FOOTER", s[s.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", s[s.FORM = 38] = "FORM", s[s.FRAME = 39] = "FRAME", s[s.FRAMESET = 40] = "FRAMESET", s[s.H1 = 41] = "H1", s[s.H2 = 42] = "H2", s[s.H3 = 43] = "H3", s[s.H4 = 44] = "H4", s[s.H5 = 45] = "H5", s[s.H6 = 46] = "H6", s[s.HEAD = 47] = "HEAD", s[s.HEADER = 48] = "HEADER", s[s.HGROUP = 49] = "HGROUP", s[s.HR = 50] = "HR", s[s.HTML = 51] = "HTML", s[s.I = 52] = "I", s[s.IMG = 53] = "IMG", s[s.IMAGE = 54] = "IMAGE", s[s.INPUT = 55] = "INPUT", s[s.IFRAME = 56] = "IFRAME", s[s.KEYGEN = 57] = "KEYGEN", s[s.LABEL = 58] = "LABEL", s[s.LI = 59] = "LI", s[s.LINK = 60] = "LINK", s[s.LISTING = 61] = "LISTING", s[s.MAIN = 62] = "MAIN", s[s.MALIGNMARK = 63] = "MALIGNMARK", s[s.MARQUEE = 64] = "MARQUEE", s[s.MATH = 65] = "MATH", s[s.MENU = 66] = "MENU", s[s.META = 67] = "META", s[s.MGLYPH = 68] = "MGLYPH", s[s.MI = 69] = "MI", s[s.MO = 70] = "MO", s[s.MN = 71] = "MN", s[s.MS = 72] = "MS", s[s.MTEXT = 73] = "MTEXT", s[s.NAV = 74] = "NAV", s[s.NOBR = 75] = "NOBR", s[s.NOFRAMES = 76] = "NOFRAMES", s[s.NOEMBED = 77] = "NOEMBED", s[s.NOSCRIPT = 78] = "NOSCRIPT", s[s.OBJECT = 79] = "OBJECT", s[s.OL = 80] = "OL", s[s.OPTGROUP = 81] = "OPTGROUP", s[s.OPTION = 82] = "OPTION", s[s.P = 83] = "P", s[s.PARAM = 84] = "PARAM", s[s.PLAINTEXT = 85] = "PLAINTEXT", s[s.PRE = 86] = "PRE", s[s.RB = 87] = "RB", s[s.RP = 88] = "RP", s[s.RT = 89] = "RT", s[s.RTC = 90] = "RTC", s[s.RUBY = 91] = "RUBY", s[s.S = 92] = "S", s[s.SCRIPT = 93] = "SCRIPT", s[s.SECTION = 94] = "SECTION", s[s.SELECT = 95] = "SELECT", s[s.SOURCE = 96] = "SOURCE", s[s.SMALL = 97] = "SMALL", s[s.SPAN = 98] = "SPAN", s[s.STRIKE = 99] = "STRIKE", s[s.STRONG = 100] = "STRONG", s[s.STYLE = 101] = "STYLE", s[s.SUB = 102] = "SUB", s[s.SUMMARY = 103] = "SUMMARY", s[s.SUP = 104] = "SUP", s[s.TABLE = 105] = "TABLE", s[s.TBODY = 106] = "TBODY", s[s.TEMPLATE = 107] = "TEMPLATE", s[s.TEXTAREA = 108] = "TEXTAREA", s[s.TFOOT = 109] = "TFOOT", s[s.TD = 110] = "TD", s[s.TH = 111] = "TH", s[s.THEAD = 112] = "THEAD", s[s.TITLE = 113] = "TITLE", s[s.TR = 114] = "TR", s[s.TRACK = 115] = "TRACK", s[s.TT = 116] = "TT", s[s.U = 117] = "U", s[s.UL = 118] = "UL", s[s.SVG = 119] = "SVG", s[s.VAR = 120] = "VAR", s[s.WBR = 121] = "WBR", s[s.XMP = 122] = "XMP";
  })(r = e.TAG_ID || (e.TAG_ID = {}));
  const a = /* @__PURE__ */ new Map([
    [t.A, r.A],
    [t.ADDRESS, r.ADDRESS],
    [t.ANNOTATION_XML, r.ANNOTATION_XML],
    [t.APPLET, r.APPLET],
    [t.AREA, r.AREA],
    [t.ARTICLE, r.ARTICLE],
    [t.ASIDE, r.ASIDE],
    [t.B, r.B],
    [t.BASE, r.BASE],
    [t.BASEFONT, r.BASEFONT],
    [t.BGSOUND, r.BGSOUND],
    [t.BIG, r.BIG],
    [t.BLOCKQUOTE, r.BLOCKQUOTE],
    [t.BODY, r.BODY],
    [t.BR, r.BR],
    [t.BUTTON, r.BUTTON],
    [t.CAPTION, r.CAPTION],
    [t.CENTER, r.CENTER],
    [t.CODE, r.CODE],
    [t.COL, r.COL],
    [t.COLGROUP, r.COLGROUP],
    [t.DD, r.DD],
    [t.DESC, r.DESC],
    [t.DETAILS, r.DETAILS],
    [t.DIALOG, r.DIALOG],
    [t.DIR, r.DIR],
    [t.DIV, r.DIV],
    [t.DL, r.DL],
    [t.DT, r.DT],
    [t.EM, r.EM],
    [t.EMBED, r.EMBED],
    [t.FIELDSET, r.FIELDSET],
    [t.FIGCAPTION, r.FIGCAPTION],
    [t.FIGURE, r.FIGURE],
    [t.FONT, r.FONT],
    [t.FOOTER, r.FOOTER],
    [t.FOREIGN_OBJECT, r.FOREIGN_OBJECT],
    [t.FORM, r.FORM],
    [t.FRAME, r.FRAME],
    [t.FRAMESET, r.FRAMESET],
    [t.H1, r.H1],
    [t.H2, r.H2],
    [t.H3, r.H3],
    [t.H4, r.H4],
    [t.H5, r.H5],
    [t.H6, r.H6],
    [t.HEAD, r.HEAD],
    [t.HEADER, r.HEADER],
    [t.HGROUP, r.HGROUP],
    [t.HR, r.HR],
    [t.HTML, r.HTML],
    [t.I, r.I],
    [t.IMG, r.IMG],
    [t.IMAGE, r.IMAGE],
    [t.INPUT, r.INPUT],
    [t.IFRAME, r.IFRAME],
    [t.KEYGEN, r.KEYGEN],
    [t.LABEL, r.LABEL],
    [t.LI, r.LI],
    [t.LINK, r.LINK],
    [t.LISTING, r.LISTING],
    [t.MAIN, r.MAIN],
    [t.MALIGNMARK, r.MALIGNMARK],
    [t.MARQUEE, r.MARQUEE],
    [t.MATH, r.MATH],
    [t.MENU, r.MENU],
    [t.META, r.META],
    [t.MGLYPH, r.MGLYPH],
    [t.MI, r.MI],
    [t.MO, r.MO],
    [t.MN, r.MN],
    [t.MS, r.MS],
    [t.MTEXT, r.MTEXT],
    [t.NAV, r.NAV],
    [t.NOBR, r.NOBR],
    [t.NOFRAMES, r.NOFRAMES],
    [t.NOEMBED, r.NOEMBED],
    [t.NOSCRIPT, r.NOSCRIPT],
    [t.OBJECT, r.OBJECT],
    [t.OL, r.OL],
    [t.OPTGROUP, r.OPTGROUP],
    [t.OPTION, r.OPTION],
    [t.P, r.P],
    [t.PARAM, r.PARAM],
    [t.PLAINTEXT, r.PLAINTEXT],
    [t.PRE, r.PRE],
    [t.RB, r.RB],
    [t.RP, r.RP],
    [t.RT, r.RT],
    [t.RTC, r.RTC],
    [t.RUBY, r.RUBY],
    [t.S, r.S],
    [t.SCRIPT, r.SCRIPT],
    [t.SECTION, r.SECTION],
    [t.SELECT, r.SELECT],
    [t.SOURCE, r.SOURCE],
    [t.SMALL, r.SMALL],
    [t.SPAN, r.SPAN],
    [t.STRIKE, r.STRIKE],
    [t.STRONG, r.STRONG],
    [t.STYLE, r.STYLE],
    [t.SUB, r.SUB],
    [t.SUMMARY, r.SUMMARY],
    [t.SUP, r.SUP],
    [t.TABLE, r.TABLE],
    [t.TBODY, r.TBODY],
    [t.TEMPLATE, r.TEMPLATE],
    [t.TEXTAREA, r.TEXTAREA],
    [t.TFOOT, r.TFOOT],
    [t.TD, r.TD],
    [t.TH, r.TH],
    [t.THEAD, r.THEAD],
    [t.TITLE, r.TITLE],
    [t.TR, r.TR],
    [t.TRACK, r.TRACK],
    [t.TT, r.TT],
    [t.U, r.U],
    [t.UL, r.UL],
    [t.SVG, r.SVG],
    [t.VAR, r.VAR],
    [t.WBR, r.WBR],
    [t.XMP, r.XMP]
  ]);
  function n(s) {
    var E;
    return (E = a.get(s)) !== null && E !== void 0 ? E : r.UNKNOWN;
  }
  e.getTagID = n;
  const i = r;
  e.SPECIAL_ELEMENTS = {
    [u.HTML]: /* @__PURE__ */ new Set([
      i.ADDRESS,
      i.APPLET,
      i.AREA,
      i.ARTICLE,
      i.ASIDE,
      i.BASE,
      i.BASEFONT,
      i.BGSOUND,
      i.BLOCKQUOTE,
      i.BODY,
      i.BR,
      i.BUTTON,
      i.CAPTION,
      i.CENTER,
      i.COL,
      i.COLGROUP,
      i.DD,
      i.DETAILS,
      i.DIR,
      i.DIV,
      i.DL,
      i.DT,
      i.EMBED,
      i.FIELDSET,
      i.FIGCAPTION,
      i.FIGURE,
      i.FOOTER,
      i.FORM,
      i.FRAME,
      i.FRAMESET,
      i.H1,
      i.H2,
      i.H3,
      i.H4,
      i.H5,
      i.H6,
      i.HEAD,
      i.HEADER,
      i.HGROUP,
      i.HR,
      i.HTML,
      i.IFRAME,
      i.IMG,
      i.INPUT,
      i.LI,
      i.LINK,
      i.LISTING,
      i.MAIN,
      i.MARQUEE,
      i.MENU,
      i.META,
      i.NAV,
      i.NOEMBED,
      i.NOFRAMES,
      i.NOSCRIPT,
      i.OBJECT,
      i.OL,
      i.P,
      i.PARAM,
      i.PLAINTEXT,
      i.PRE,
      i.SCRIPT,
      i.SECTION,
      i.SELECT,
      i.SOURCE,
      i.STYLE,
      i.SUMMARY,
      i.TABLE,
      i.TBODY,
      i.TD,
      i.TEMPLATE,
      i.TEXTAREA,
      i.TFOOT,
      i.TH,
      i.THEAD,
      i.TITLE,
      i.TR,
      i.TRACK,
      i.UL,
      i.WBR,
      i.XMP
    ]),
    [u.MATHML]: /* @__PURE__ */ new Set([i.MI, i.MO, i.MN, i.MS, i.MTEXT, i.ANNOTATION_XML]),
    [u.SVG]: /* @__PURE__ */ new Set([i.TITLE, i.FOREIGN_OBJECT, i.DESC]),
    [u.XLINK]: /* @__PURE__ */ new Set(),
    [u.XML]: /* @__PURE__ */ new Set(),
    [u.XMLNS]: /* @__PURE__ */ new Set()
  };
  function c(s) {
    return s === i.H1 || s === i.H2 || s === i.H3 || s === i.H4 || s === i.H5 || s === i.H6;
  }
  e.isNumberedHeader = c;
  const o = /* @__PURE__ */ new Set([
    t.STYLE,
    t.SCRIPT,
    t.XMP,
    t.IFRAME,
    t.NOEMBED,
    t.NOFRAMES,
    t.PLAINTEXT
  ]);
  function d(s, E) {
    return o.has(s) || E && s === t.NOSCRIPT;
  }
  e.hasUnescapedText = d;
})(Zu);
Object.defineProperty(Pt, "__esModule", { value: !0 });
Pt.Tokenizer = Pt.TokenizerMode = void 0;
const N6 = wa, _ = Ra, eu = Ma, Mu = jd, G = cr, fn = Zu, I6 = /* @__PURE__ */ new Map([
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var x;
(function(e) {
  e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.NAMED_CHARACTER_REFERENCE = 72] = "NAMED_CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 73] = "AMBIGUOUS_AMPERSAND", e[e.NUMERIC_CHARACTER_REFERENCE = 74] = "NUMERIC_CHARACTER_REFERENCE", e[e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START", e[e.HEXADEMICAL_CHARACTER_REFERENCE = 76] = "HEXADEMICAL_CHARACTER_REFERENCE", e[e.DECIMAL_CHARACTER_REFERENCE = 77] = "DECIMAL_CHARACTER_REFERENCE", e[e.NUMERIC_CHARACTER_REFERENCE_END = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
})(x || (x = {}));
Pt.TokenizerMode = {
  DATA: x.DATA,
  RCDATA: x.RCDATA,
  RAWTEXT: x.RAWTEXT,
  SCRIPT_DATA: x.SCRIPT_DATA,
  PLAINTEXT: x.PLAINTEXT,
  CDATA_SECTION: x.CDATA_SECTION
};
function L0(e) {
  return e >= _.CODE_POINTS.DIGIT_0 && e <= _.CODE_POINTS.DIGIT_9;
}
function I0(e) {
  return e >= _.CODE_POINTS.LATIN_CAPITAL_A && e <= _.CODE_POINTS.LATIN_CAPITAL_Z;
}
function D6(e) {
  return e >= _.CODE_POINTS.LATIN_SMALL_A && e <= _.CODE_POINTS.LATIN_SMALL_Z;
}
function tt(e) {
  return D6(e) || I0(e);
}
function Kn(e) {
  return tt(e) || L0(e);
}
function $d(e) {
  return e >= _.CODE_POINTS.LATIN_CAPITAL_A && e <= _.CODE_POINTS.LATIN_CAPITAL_F;
}
function Vd(e) {
  return e >= _.CODE_POINTS.LATIN_SMALL_A && e <= _.CODE_POINTS.LATIN_SMALL_F;
}
function C6(e) {
  return L0(e) || $d(e) || Vd(e);
}
function _r(e) {
  return e + 32;
}
function Yd(e) {
  return e === _.CODE_POINTS.SPACE || e === _.CODE_POINTS.LINE_FEED || e === _.CODE_POINTS.TABULATION || e === _.CODE_POINTS.FORM_FEED;
}
function S6(e) {
  return e === _.CODE_POINTS.EQUALS_SIGN || Kn(e);
}
function Hc(e) {
  return Yd(e) || e === _.CODE_POINTS.SOLIDUS || e === _.CODE_POINTS.GREATER_THAN_SIGN;
}
let O6 = class {
  constructor(u, t) {
    this.options = u, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = x.DATA, this.returnState = x.DATA, this.charRefCode = -1, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new N6.Preprocessor(t), this.currentLocation = this.getCurrentLocation(-1);
  }
  //Errors
  _err(u) {
    var t, r;
    (r = (t = this.handler).onParseError) === null || r === void 0 || r.call(t, this.preprocessor.getError(u));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(u) {
    return this.options.sourceCodeLocationInfo ? {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - u,
      startOffset: this.preprocessor.offset - u,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    } : null;
  }
  _runParsingLoop() {
    if (!this.inLoop) {
      for (this.inLoop = !0; this.active && !this.paused; ) {
        this.consumedAfterSnapshot = 0;
        const u = this._consume();
        this._ensureHibernation() || this._callState(u);
      }
      this.inLoop = !1;
    }
  }
  //API
  pause() {
    this.paused = !0;
  }
  resume(u) {
    if (!this.paused)
      throw new Error("Parser was already resumed");
    this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || u == null || u());
  }
  write(u, t, r) {
    this.active = !0, this.preprocessor.write(u, t), this._runParsingLoop(), this.paused || r == null || r();
  }
  insertHtmlAtCurrentPos(u) {
    this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(u), this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    return this.preprocessor.endOfChunkHit ? (this._unconsume(this.consumedAfterSnapshot), this.active = !1, !0) : !1;
  }
  //Consumption
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _unconsume(u) {
    this.consumedAfterSnapshot -= u, this.preprocessor.retreat(u);
  }
  _reconsumeInState(u, t) {
    this.state = u, this._callState(t);
  }
  _advanceBy(u) {
    this.consumedAfterSnapshot += u;
    for (let t = 0; t < u; t++)
      this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(u, t) {
    return this.preprocessor.startsWith(u, t) ? (this._advanceBy(u.length - 1), !0) : !1;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: eu.TokenType.START_TAG,
      tagName: "",
      tagID: fn.TAG_ID.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: eu.TokenType.END_TAG,
      tagName: "",
      tagID: fn.TAG_ID.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(u) {
    this.currentToken = {
      type: eu.TokenType.COMMENT,
      data: "",
      location: this.getCurrentLocation(u)
    };
  }
  _createDoctypeToken(u) {
    this.currentToken = {
      type: eu.TokenType.DOCTYPE,
      name: u,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(u, t) {
    this.currentCharacterToken = {
      type: u,
      chars: t,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(u) {
    this.currentAttr = {
      name: u,
      value: ""
    }, this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var u, t;
    const r = this.currentToken;
    if ((0, eu.getTokenAttr)(r, this.currentAttr.name) === null) {
      if (r.attrs.push(this.currentAttr), r.location && this.currentLocation) {
        const a = (u = (t = r.location).attrs) !== null && u !== void 0 ? u : t.attrs = /* @__PURE__ */ Object.create(null);
        a[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
      }
    } else
      this._err(G.ERR.duplicateAttribute);
  }
  _leaveAttrValue() {
    this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
  }
  //Token emission
  prepareToken(u) {
    this._emitCurrentCharacterToken(u.location), this.currentToken = null, u.location && (u.location.endLine = this.preprocessor.line, u.location.endCol = this.preprocessor.col + 1, u.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const u = this.currentToken;
    this.prepareToken(u), u.tagID = (0, fn.getTagID)(u.tagName), u.type === eu.TokenType.START_TAG ? (this.lastStartTagName = u.tagName, this.handler.onStartTag(u)) : (u.attrs.length > 0 && this._err(G.ERR.endTagWithAttributes), u.selfClosing && this._err(G.ERR.endTagWithTrailingSolidus), this.handler.onEndTag(u)), this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(u) {
    this.prepareToken(u), this.handler.onComment(u), this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(u) {
    this.prepareToken(u), this.handler.onDoctype(u), this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(u) {
    if (this.currentCharacterToken) {
      switch (u && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = u.startLine, this.currentCharacterToken.location.endCol = u.startCol, this.currentCharacterToken.location.endOffset = u.startOffset), this.currentCharacterToken.type) {
        case eu.TokenType.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case eu.TokenType.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case eu.TokenType.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const u = this.getCurrentLocation(0);
    u && (u.endLine = u.startLine, u.endCol = u.startCol, u.endOffset = u.startOffset), this._emitCurrentCharacterToken(u), this.handler.onEof({ type: eu.TokenType.EOF, location: u }), this.active = !1;
  }
  //Characters emission
  //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(u, t) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type !== u)
        this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
      else {
        this.currentCharacterToken.chars += t;
        return;
      }
    this._createCharacterToken(u, t);
  }
  _emitCodePoint(u) {
    const t = Yd(u) ? eu.TokenType.WHITESPACE_CHARACTER : u === _.CODE_POINTS.NULL ? eu.TokenType.NULL_CHARACTER : eu.TokenType.CHARACTER;
    this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(u));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(u) {
    this._appendCharToCurrentCharacterToken(eu.TokenType.CHARACTER, u);
  }
  // Character reference helpers
  _matchNamedCharacterReference(u) {
    let t = null, r = 0, a = !1;
    for (let n = 0, i = Mu.htmlDecodeTree[0]; n >= 0 && (n = (0, Mu.determineBranch)(Mu.htmlDecodeTree, i, n + 1, u), !(n < 0)); u = this._consume()) {
      r += 1, i = Mu.htmlDecodeTree[n];
      const c = i & Mu.BinTrieFlags.VALUE_LENGTH;
      if (c) {
        const o = (c >> 14) - 1;
        if (u !== _.CODE_POINTS.SEMICOLON && this._isCharacterReferenceInAttribute() && S6(this.preprocessor.peek(1)) ? (t = [_.CODE_POINTS.AMPERSAND], n += o) : (t = o === 0 ? [Mu.htmlDecodeTree[n] & ~Mu.BinTrieFlags.VALUE_LENGTH] : o === 1 ? [Mu.htmlDecodeTree[++n]] : [Mu.htmlDecodeTree[++n], Mu.htmlDecodeTree[++n]], r = 0, a = u !== _.CODE_POINTS.SEMICOLON), o === 0) {
          this._consume();
          break;
        }
      }
    }
    return this._unconsume(r), a && !this.preprocessor.endOfChunkHit && this._err(G.ERR.missingSemicolonAfterCharacterReference), this._unconsume(1), t;
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === x.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === x.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === x.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(u) {
    this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(u) : this._emitCodePoint(u);
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(u) {
    switch (this.state) {
      case x.DATA: {
        this._stateData(u);
        break;
      }
      case x.RCDATA: {
        this._stateRcdata(u);
        break;
      }
      case x.RAWTEXT: {
        this._stateRawtext(u);
        break;
      }
      case x.SCRIPT_DATA: {
        this._stateScriptData(u);
        break;
      }
      case x.PLAINTEXT: {
        this._statePlaintext(u);
        break;
      }
      case x.TAG_OPEN: {
        this._stateTagOpen(u);
        break;
      }
      case x.END_TAG_OPEN: {
        this._stateEndTagOpen(u);
        break;
      }
      case x.TAG_NAME: {
        this._stateTagName(u);
        break;
      }
      case x.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(u);
        break;
      }
      case x.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(u);
        break;
      }
      case x.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(u);
        break;
      }
      case x.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(u);
        break;
      }
      case x.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(u);
        break;
      }
      case x.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(u);
        break;
      }
      case x.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(u);
        break;
      }
      case x.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(u);
        break;
      }
      case x.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(u);
        break;
      }
      case x.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(u);
        break;
      }
      case x.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(u);
        break;
      }
      case x.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(u);
        break;
      }
      case x.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(u);
        break;
      }
      case x.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(u);
        break;
      }
      case x.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(u);
        break;
      }
      case x.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(u);
        break;
      }
      case x.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(u);
        break;
      }
      case x.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(u);
        break;
      }
      case x.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(u);
        break;
      }
      case x.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(u);
        break;
      }
      case x.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(u);
        break;
      }
      case x.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(u);
        break;
      }
      case x.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(u);
        break;
      }
      case x.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(u);
        break;
      }
      case x.ATTRIBUTE_NAME: {
        this._stateAttributeName(u);
        break;
      }
      case x.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(u);
        break;
      }
      case x.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(u);
        break;
      }
      case x.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(u);
        break;
      }
      case x.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(u);
        break;
      }
      case x.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(u);
        break;
      }
      case x.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(u);
        break;
      }
      case x.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(u);
        break;
      }
      case x.BOGUS_COMMENT: {
        this._stateBogusComment(u);
        break;
      }
      case x.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(u);
        break;
      }
      case x.COMMENT_START: {
        this._stateCommentStart(u);
        break;
      }
      case x.COMMENT_START_DASH: {
        this._stateCommentStartDash(u);
        break;
      }
      case x.COMMENT: {
        this._stateComment(u);
        break;
      }
      case x.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(u);
        break;
      }
      case x.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(u);
        break;
      }
      case x.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(u);
        break;
      }
      case x.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(u);
        break;
      }
      case x.COMMENT_END_DASH: {
        this._stateCommentEndDash(u);
        break;
      }
      case x.COMMENT_END: {
        this._stateCommentEnd(u);
        break;
      }
      case x.COMMENT_END_BANG: {
        this._stateCommentEndBang(u);
        break;
      }
      case x.DOCTYPE: {
        this._stateDoctype(u);
        break;
      }
      case x.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(u);
        break;
      }
      case x.DOCTYPE_NAME: {
        this._stateDoctypeName(u);
        break;
      }
      case x.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(u);
        break;
      }
      case x.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(u);
        break;
      }
      case x.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(u);
        break;
      }
      case x.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(u);
        break;
      }
      case x.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(u);
        break;
      }
      case x.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(u);
        break;
      }
      case x.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(u);
        break;
      }
      case x.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(u);
        break;
      }
      case x.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(u);
        break;
      }
      case x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(u);
        break;
      }
      case x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(u);
        break;
      }
      case x.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(u);
        break;
      }
      case x.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(u);
        break;
      }
      case x.CDATA_SECTION: {
        this._stateCdataSection(u);
        break;
      }
      case x.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(u);
        break;
      }
      case x.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(u);
        break;
      }
      case x.CHARACTER_REFERENCE: {
        this._stateCharacterReference(u);
        break;
      }
      case x.NAMED_CHARACTER_REFERENCE: {
        this._stateNamedCharacterReference(u);
        break;
      }
      case x.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(u);
        break;
      }
      case x.NUMERIC_CHARACTER_REFERENCE: {
        this._stateNumericCharacterReference(u);
        break;
      }
      case x.HEXADEMICAL_CHARACTER_REFERENCE_START: {
        this._stateHexademicalCharacterReferenceStart(u);
        break;
      }
      case x.HEXADEMICAL_CHARACTER_REFERENCE: {
        this._stateHexademicalCharacterReference(u);
        break;
      }
      case x.DECIMAL_CHARACTER_REFERENCE: {
        this._stateDecimalCharacterReference(u);
        break;
      }
      case x.NUMERIC_CHARACTER_REFERENCE_END: {
        this._stateNumericCharacterReferenceEnd(u);
        break;
      }
      default:
        throw new Error("Unknown state");
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(u) {
    switch (u) {
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.TAG_OPEN;
        break;
      }
      case _.CODE_POINTS.AMPERSAND: {
        this.returnState = x.DATA, this.state = x.CHARACTER_REFERENCE;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this._emitCodePoint(u);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(u);
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(u) {
    switch (u) {
      case _.CODE_POINTS.AMPERSAND: {
        this.returnState = x.RCDATA, this.state = x.CHARACTER_REFERENCE;
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(u);
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(u) {
    switch (u) {
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(u);
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(u) {
    switch (u) {
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(u);
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(u) {
    switch (u) {
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(u);
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(u) {
    if (tt(u))
      this._createStartTagToken(), this.state = x.TAG_NAME, this._stateTagName(u);
    else
      switch (u) {
        case _.CODE_POINTS.EXCLAMATION_MARK: {
          this.state = x.MARKUP_DECLARATION_OPEN;
          break;
        }
        case _.CODE_POINTS.SOLIDUS: {
          this.state = x.END_TAG_OPEN;
          break;
        }
        case _.CODE_POINTS.QUESTION_MARK: {
          this._err(G.ERR.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = x.BOGUS_COMMENT, this._stateBogusComment(u);
          break;
        }
        case _.CODE_POINTS.EOF: {
          this._err(G.ERR.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
          break;
        }
        default:
          this._err(G.ERR.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = x.DATA, this._stateData(u);
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(u) {
    if (tt(u))
      this._createEndTagToken(), this.state = x.TAG_NAME, this._stateTagName(u);
    else
      switch (u) {
        case _.CODE_POINTS.GREATER_THAN_SIGN: {
          this._err(G.ERR.missingEndTagName), this.state = x.DATA;
          break;
        }
        case _.CODE_POINTS.EOF: {
          this._err(G.ERR.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
          break;
        }
        default:
          this._err(G.ERR.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = x.BOGUS_COMMENT, this._stateBogusComment(u);
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED: {
        this.state = x.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case _.CODE_POINTS.SOLIDUS: {
        this.state = x.SELF_CLOSING_START_TAG;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.DATA, this.emitCurrentTagToken();
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), t.tagName += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        t.tagName += String.fromCodePoint(I0(u) ? _r(u) : u);
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(u) {
    u === _.CODE_POINTS.SOLIDUS ? this.state = x.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = x.RCDATA, this._stateRcdata(u));
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(u) {
    tt(u) ? (this.state = x.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(u)) : (this._emitChars("</"), this.state = x.RCDATA, this._stateRcdata(u));
  }
  handleSpecialEndTag(u) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
      return !this._ensureHibernation();
    this._createEndTagToken();
    const t = this.currentToken;
    switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        return this._advanceBy(this.lastStartTagName.length), this.state = x.BEFORE_ATTRIBUTE_NAME, !1;
      case _.CODE_POINTS.SOLIDUS:
        return this._advanceBy(this.lastStartTagName.length), this.state = x.SELF_CLOSING_START_TAG, !1;
      case _.CODE_POINTS.GREATER_THAN_SIGN:
        return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = x.DATA, !1;
      default:
        return !this._ensureHibernation();
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(u) {
    this.handleSpecialEndTag(u) && (this._emitChars("</"), this.state = x.RCDATA, this._stateRcdata(u));
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(u) {
    u === _.CODE_POINTS.SOLIDUS ? this.state = x.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = x.RAWTEXT, this._stateRawtext(u));
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(u) {
    tt(u) ? (this.state = x.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(u)) : (this._emitChars("</"), this.state = x.RAWTEXT, this._stateRawtext(u));
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(u) {
    this.handleSpecialEndTag(u) && (this._emitChars("</"), this.state = x.RAWTEXT, this._stateRawtext(u));
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(u) {
    switch (u) {
      case _.CODE_POINTS.SOLIDUS: {
        this.state = x.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case _.CODE_POINTS.EXCLAMATION_MARK: {
        this.state = x.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"), this.state = x.SCRIPT_DATA, this._stateScriptData(u);
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(u) {
    tt(u) ? (this.state = x.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(u)) : (this._emitChars("</"), this.state = x.SCRIPT_DATA, this._stateScriptData(u));
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(u) {
    this.handleSpecialEndTag(u) && (this._emitChars("</"), this.state = x.SCRIPT_DATA, this._stateScriptData(u));
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(u) {
    u === _.CODE_POINTS.HYPHEN_MINUS ? (this.state = x.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = x.SCRIPT_DATA, this._stateScriptData(u));
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(u) {
    u === _.CODE_POINTS.HYPHEN_MINUS ? (this.state = x.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = x.SCRIPT_DATA, this._stateScriptData(u));
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(u) {
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this.state = x.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(u);
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(u) {
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this.state = x.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this.state = x.SCRIPT_DATA_ESCAPED, this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = x.SCRIPT_DATA_ESCAPED, this._emitCodePoint(u);
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(u) {
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this.state = x.SCRIPT_DATA_ESCAPED, this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = x.SCRIPT_DATA_ESCAPED, this._emitCodePoint(u);
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(u) {
    u === _.CODE_POINTS.SOLIDUS ? this.state = x.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : tt(u) ? (this._emitChars("<"), this.state = x.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(u)) : (this._emitChars("<"), this.state = x.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(u));
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(u) {
    tt(u) ? (this.state = x.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(u)) : (this._emitChars("</"), this.state = x.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(u));
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(u) {
    this.handleSpecialEndTag(u) && (this._emitChars("</"), this.state = x.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(u));
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(u) {
    if (this.preprocessor.startsWith(_.SEQUENCES.SCRIPT, !1) && Hc(this.preprocessor.peek(_.SEQUENCES.SCRIPT.length))) {
      this._emitCodePoint(u);
      for (let t = 0; t < _.SEQUENCES.SCRIPT.length; t++)
        this._emitCodePoint(this._consume());
      this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else
      this._ensureHibernation() || (this.state = x.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(u));
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(u) {
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(u);
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(u) {
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(u);
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(u) {
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(_.REPLACEMENT_CHARACTER);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(u);
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(u) {
    u === _.CODE_POINTS.SOLIDUS ? (this.state = x.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(u));
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(u) {
    if (this.preprocessor.startsWith(_.SEQUENCES.SCRIPT, !1) && Hc(this.preprocessor.peek(_.SEQUENCES.SCRIPT.length))) {
      this._emitCodePoint(u);
      for (let t = 0; t < _.SEQUENCES.SCRIPT.length; t++)
        this._emitCodePoint(this._consume());
      this.state = x.SCRIPT_DATA_ESCAPED;
    } else
      this._ensureHibernation() || (this.state = x.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(u));
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(u) {
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        break;
      case _.CODE_POINTS.SOLIDUS:
      case _.CODE_POINTS.GREATER_THAN_SIGN:
      case _.CODE_POINTS.EOF: {
        this.state = x.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(u);
        break;
      }
      case _.CODE_POINTS.EQUALS_SIGN: {
        this._err(G.ERR.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = x.ATTRIBUTE_NAME;
        break;
      }
      default:
        this._createAttr(""), this.state = x.ATTRIBUTE_NAME, this._stateAttributeName(u);
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(u) {
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
      case _.CODE_POINTS.SOLIDUS:
      case _.CODE_POINTS.GREATER_THAN_SIGN:
      case _.CODE_POINTS.EOF: {
        this._leaveAttrName(), this.state = x.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(u);
        break;
      }
      case _.CODE_POINTS.EQUALS_SIGN: {
        this._leaveAttrName(), this.state = x.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case _.CODE_POINTS.QUOTATION_MARK:
      case _.CODE_POINTS.APOSTROPHE:
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        this._err(G.ERR.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(u);
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this.currentAttr.name += _.REPLACEMENT_CHARACTER;
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(I0(u) ? _r(u) : u);
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(u) {
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        break;
      case _.CODE_POINTS.SOLIDUS: {
        this.state = x.SELF_CLOSING_START_TAG;
        break;
      }
      case _.CODE_POINTS.EQUALS_SIGN: {
        this.state = x.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.DATA, this.emitCurrentTagToken();
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""), this.state = x.ATTRIBUTE_NAME, this._stateAttributeName(u);
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(u) {
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        break;
      case _.CODE_POINTS.QUOTATION_MARK: {
        this.state = x.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.APOSTROPHE: {
        this.state = x.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.missingAttributeValue), this.state = x.DATA, this.emitCurrentTagToken();
        break;
      }
      default:
        this.state = x.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(u);
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(u) {
    switch (u) {
      case _.CODE_POINTS.QUOTATION_MARK: {
        this.state = x.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case _.CODE_POINTS.AMPERSAND: {
        this.returnState = x.ATTRIBUTE_VALUE_DOUBLE_QUOTED, this.state = x.CHARACTER_REFERENCE;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this.currentAttr.value += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(u);
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(u) {
    switch (u) {
      case _.CODE_POINTS.APOSTROPHE: {
        this.state = x.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case _.CODE_POINTS.AMPERSAND: {
        this.returnState = x.ATTRIBUTE_VALUE_SINGLE_QUOTED, this.state = x.CHARACTER_REFERENCE;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this.currentAttr.value += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(u);
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(u) {
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED: {
        this._leaveAttrValue(), this.state = x.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case _.CODE_POINTS.AMPERSAND: {
        this.returnState = x.ATTRIBUTE_VALUE_UNQUOTED, this.state = x.CHARACTER_REFERENCE;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = x.DATA, this.emitCurrentTagToken();
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), this.currentAttr.value += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.QUOTATION_MARK:
      case _.CODE_POINTS.APOSTROPHE:
      case _.CODE_POINTS.LESS_THAN_SIGN:
      case _.CODE_POINTS.EQUALS_SIGN:
      case _.CODE_POINTS.GRAVE_ACCENT: {
        this._err(G.ERR.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(u);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(u);
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(u) {
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED: {
        this._leaveAttrValue(), this.state = x.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case _.CODE_POINTS.SOLIDUS: {
        this._leaveAttrValue(), this.state = x.SELF_CLOSING_START_TAG;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = x.DATA, this.emitCurrentTagToken();
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.missingWhitespaceBetweenAttributes), this.state = x.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(u);
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(u) {
    switch (u) {
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        const t = this.currentToken;
        t.selfClosing = !0, this.state = x.DATA, this.emitCurrentTagToken();
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.unexpectedSolidusInTag), this.state = x.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(u);
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.DATA, this.emitCurrentComment(t);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), t.data += _.REPLACEMENT_CHARACTER;
        break;
      }
      default:
        t.data += String.fromCodePoint(u);
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(u) {
    this._consumeSequenceIfMatch(_.SEQUENCES.DASH_DASH, !0) ? (this._createCommentToken(_.SEQUENCES.DASH_DASH.length + 1), this.state = x.COMMENT_START) : this._consumeSequenceIfMatch(_.SEQUENCES.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(_.SEQUENCES.DOCTYPE.length + 1), this.state = x.DOCTYPE) : this._consumeSequenceIfMatch(_.SEQUENCES.CDATA_START, !0) ? this.inForeignNode ? this.state = x.CDATA_SECTION : (this._err(G.ERR.cdataInHtmlContent), this._createCommentToken(_.SEQUENCES.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = x.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(G.ERR.incorrectlyOpenedComment), this._createCommentToken(2), this.state = x.BOGUS_COMMENT, this._stateBogusComment(u));
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(u) {
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this.state = x.COMMENT_START_DASH;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.abruptClosingOfEmptyComment), this.state = x.DATA;
        const t = this.currentToken;
        this.emitCurrentComment(t);
        break;
      }
      default:
        this.state = x.COMMENT, this._stateComment(u);
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this.state = x.COMMENT_END;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.abruptClosingOfEmptyComment), this.state = x.DATA, this.emitCurrentComment(t);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += "-", this.state = x.COMMENT, this._stateComment(u);
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this.state = x.COMMENT_END_DASH;
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        t.data += "<", this.state = x.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), t.data += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += String.fromCodePoint(u);
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.EXCLAMATION_MARK: {
        t.data += "!", this.state = x.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case _.CODE_POINTS.LESS_THAN_SIGN: {
        t.data += "<";
        break;
      }
      default:
        this.state = x.COMMENT, this._stateComment(u);
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(u) {
    u === _.CODE_POINTS.HYPHEN_MINUS ? this.state = x.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = x.COMMENT, this._stateComment(u));
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(u) {
    u === _.CODE_POINTS.HYPHEN_MINUS ? this.state = x.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = x.COMMENT_END_DASH, this._stateCommentEndDash(u));
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(u) {
    u !== _.CODE_POINTS.GREATER_THAN_SIGN && u !== _.CODE_POINTS.EOF && this._err(G.ERR.nestedComment), this.state = x.COMMENT_END, this._stateCommentEnd(u);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        this.state = x.COMMENT_END;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += "-", this.state = x.COMMENT, this._stateComment(u);
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.DATA, this.emitCurrentComment(t);
        break;
      }
      case _.CODE_POINTS.EXCLAMATION_MARK: {
        this.state = x.COMMENT_END_BANG;
        break;
      }
      case _.CODE_POINTS.HYPHEN_MINUS: {
        t.data += "-";
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += "--", this.state = x.COMMENT, this._stateComment(u);
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.HYPHEN_MINUS: {
        t.data += "--!", this.state = x.COMMENT_END_DASH;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.incorrectlyClosedComment), this.state = x.DATA, this.emitCurrentComment(t);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
        break;
      }
      default:
        t.data += "--!", this.state = x.COMMENT, this._stateComment(u);
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(u) {
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED: {
        this.state = x.BEFORE_DOCTYPE_NAME;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(u);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), this._createDoctypeToken(null);
        const t = this.currentToken;
        t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.missingWhitespaceBeforeDoctypeName), this.state = x.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(u);
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(u) {
    if (I0(u))
      this._createDoctypeToken(String.fromCharCode(_r(u))), this.state = x.DOCTYPE_NAME;
    else
      switch (u) {
        case _.CODE_POINTS.SPACE:
        case _.CODE_POINTS.LINE_FEED:
        case _.CODE_POINTS.TABULATION:
        case _.CODE_POINTS.FORM_FEED:
          break;
        case _.CODE_POINTS.NULL: {
          this._err(G.ERR.unexpectedNullCharacter), this._createDoctypeToken(_.REPLACEMENT_CHARACTER), this.state = x.DOCTYPE_NAME;
          break;
        }
        case _.CODE_POINTS.GREATER_THAN_SIGN: {
          this._err(G.ERR.missingDoctypeName), this._createDoctypeToken(null);
          const t = this.currentToken;
          t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = x.DATA;
          break;
        }
        case _.CODE_POINTS.EOF: {
          this._err(G.ERR.eofInDoctype), this._createDoctypeToken(null);
          const t = this.currentToken;
          t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(u)), this.state = x.DOCTYPE_NAME;
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED: {
        this.state = x.AFTER_DOCTYPE_NAME;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), t.name += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.name += String.fromCodePoint(I0(u) ? _r(u) : u);
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        break;
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._consumeSequenceIfMatch(_.SEQUENCES.PUBLIC, !1) ? this.state = x.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(_.SEQUENCES.SYSTEM, !1) ? this.state = x.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(G.ERR.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = x.BOGUS_DOCTYPE, this._stateBogusDoctype(u));
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED: {
        this.state = x.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case _.CODE_POINTS.QUOTATION_MARK: {
        this._err(G.ERR.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = x.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.APOSTROPHE: {
        this._err(G.ERR.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = x.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = x.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = x.BOGUS_DOCTYPE, this._stateBogusDoctype(u);
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        break;
      case _.CODE_POINTS.QUOTATION_MARK: {
        t.publicId = "", this.state = x.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.APOSTROPHE: {
        t.publicId = "", this.state = x.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = x.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = x.BOGUS_DOCTYPE, this._stateBogusDoctype(u);
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.QUOTATION_MARK: {
        this.state = x.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), t.publicId += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = x.DATA;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.publicId += String.fromCodePoint(u);
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.APOSTROPHE: {
        this.state = x.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), t.publicId += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = x.DATA;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.publicId += String.fromCodePoint(u);
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED: {
        this.state = x.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case _.CODE_POINTS.QUOTATION_MARK: {
        this._err(G.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.APOSTROPHE: {
        this._err(G.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = x.BOGUS_DOCTYPE, this._stateBogusDoctype(u);
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        break;
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(t), this.state = x.DATA;
        break;
      }
      case _.CODE_POINTS.QUOTATION_MARK: {
        t.systemId = "", this.state = x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.APOSTROPHE: {
        t.systemId = "", this.state = x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = x.BOGUS_DOCTYPE, this._stateBogusDoctype(u);
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED: {
        this.state = x.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case _.CODE_POINTS.QUOTATION_MARK: {
        this._err(G.ERR.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.APOSTROPHE: {
        this._err(G.ERR.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = x.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = x.BOGUS_DOCTYPE, this._stateBogusDoctype(u);
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        break;
      case _.CODE_POINTS.QUOTATION_MARK: {
        t.systemId = "", this.state = x.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.APOSTROPHE: {
        t.systemId = "", this.state = x.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = x.DATA, this.emitCurrentDoctype(t);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = x.BOGUS_DOCTYPE, this._stateBogusDoctype(u);
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.QUOTATION_MARK: {
        this.state = x.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), t.systemId += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = x.DATA;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.systemId += String.fromCodePoint(u);
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.APOSTROPHE: {
        this.state = x.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter), t.systemId += _.REPLACEMENT_CHARACTER;
        break;
      }
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this._err(G.ERR.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = x.DATA;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        t.systemId += String.fromCodePoint(u);
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.SPACE:
      case _.CODE_POINTS.LINE_FEED:
      case _.CODE_POINTS.TABULATION:
      case _.CODE_POINTS.FORM_FEED:
        break;
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(t), this.state = x.DATA;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
      default:
        this._err(G.ERR.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = x.BOGUS_DOCTYPE, this._stateBogusDoctype(u);
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(u) {
    const t = this.currentToken;
    switch (u) {
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(t), this.state = x.DATA;
        break;
      }
      case _.CODE_POINTS.NULL: {
        this._err(G.ERR.unexpectedNullCharacter);
        break;
      }
      case _.CODE_POINTS.EOF: {
        this.emitCurrentDoctype(t), this._emitEOFToken();
        break;
      }
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(u) {
    switch (u) {
      case _.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
        this.state = x.CDATA_SECTION_BRACKET;
        break;
      }
      case _.CODE_POINTS.EOF: {
        this._err(G.ERR.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(u);
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(u) {
    u === _.CODE_POINTS.RIGHT_SQUARE_BRACKET ? this.state = x.CDATA_SECTION_END : (this._emitChars("]"), this.state = x.CDATA_SECTION, this._stateCdataSection(u));
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(u) {
    switch (u) {
      case _.CODE_POINTS.GREATER_THAN_SIGN: {
        this.state = x.DATA;
        break;
      }
      case _.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"), this.state = x.CDATA_SECTION, this._stateCdataSection(u);
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference(u) {
    u === _.CODE_POINTS.NUMBER_SIGN ? this.state = x.NUMERIC_CHARACTER_REFERENCE : Kn(u) ? (this.state = x.NAMED_CHARACTER_REFERENCE, this._stateNamedCharacterReference(u)) : (this._flushCodePointConsumedAsCharacterReference(_.CODE_POINTS.AMPERSAND), this._reconsumeInState(this.returnState, u));
  }
  // Named character reference state
  //------------------------------------------------------------------
  _stateNamedCharacterReference(u) {
    const t = this._matchNamedCharacterReference(u);
    if (!this._ensureHibernation())
      if (t) {
        for (let r = 0; r < t.length; r++)
          this._flushCodePointConsumedAsCharacterReference(t[r]);
        this.state = this.returnState;
      } else
        this._flushCodePointConsumedAsCharacterReference(_.CODE_POINTS.AMPERSAND), this.state = x.AMBIGUOUS_AMPERSAND;
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(u) {
    Kn(u) ? this._flushCodePointConsumedAsCharacterReference(u) : (u === _.CODE_POINTS.SEMICOLON && this._err(G.ERR.unknownNamedCharacterReference), this._reconsumeInState(this.returnState, u));
  }
  // Numeric character reference state
  //------------------------------------------------------------------
  _stateNumericCharacterReference(u) {
    this.charRefCode = 0, u === _.CODE_POINTS.LATIN_SMALL_X || u === _.CODE_POINTS.LATIN_CAPITAL_X ? this.state = x.HEXADEMICAL_CHARACTER_REFERENCE_START : L0(u) ? (this.state = x.DECIMAL_CHARACTER_REFERENCE, this._stateDecimalCharacterReference(u)) : (this._err(G.ERR.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(_.CODE_POINTS.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(_.CODE_POINTS.NUMBER_SIGN), this._reconsumeInState(this.returnState, u));
  }
  // Hexademical character reference start state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReferenceStart(u) {
    C6(u) ? (this.state = x.HEXADEMICAL_CHARACTER_REFERENCE, this._stateHexademicalCharacterReference(u)) : (this._err(G.ERR.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(_.CODE_POINTS.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(_.CODE_POINTS.NUMBER_SIGN), this._unconsume(2), this.state = this.returnState);
  }
  // Hexademical character reference state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReference(u) {
    $d(u) ? this.charRefCode = this.charRefCode * 16 + u - 55 : Vd(u) ? this.charRefCode = this.charRefCode * 16 + u - 87 : L0(u) ? this.charRefCode = this.charRefCode * 16 + u - 48 : u === _.CODE_POINTS.SEMICOLON ? this.state = x.NUMERIC_CHARACTER_REFERENCE_END : (this._err(G.ERR.missingSemicolonAfterCharacterReference), this.state = x.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(u));
  }
  // Decimal character reference state
  //------------------------------------------------------------------
  _stateDecimalCharacterReference(u) {
    L0(u) ? this.charRefCode = this.charRefCode * 10 + u - 48 : u === _.CODE_POINTS.SEMICOLON ? this.state = x.NUMERIC_CHARACTER_REFERENCE_END : (this._err(G.ERR.missingSemicolonAfterCharacterReference), this.state = x.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(u));
  }
  // Numeric character reference end state
  //------------------------------------------------------------------
  _stateNumericCharacterReferenceEnd(u) {
    if (this.charRefCode === _.CODE_POINTS.NULL)
      this._err(G.ERR.nullCharacterReference), this.charRefCode = _.CODE_POINTS.REPLACEMENT_CHARACTER;
    else if (this.charRefCode > 1114111)
      this._err(G.ERR.characterReferenceOutsideUnicodeRange), this.charRefCode = _.CODE_POINTS.REPLACEMENT_CHARACTER;
    else if ((0, _.isSurrogate)(this.charRefCode))
      this._err(G.ERR.surrogateCharacterReference), this.charRefCode = _.CODE_POINTS.REPLACEMENT_CHARACTER;
    else if ((0, _.isUndefinedCodePoint)(this.charRefCode))
      this._err(G.ERR.noncharacterCharacterReference);
    else if ((0, _.isControlCodePoint)(this.charRefCode) || this.charRefCode === _.CODE_POINTS.CARRIAGE_RETURN) {
      this._err(G.ERR.controlCharacterReference);
      const t = I6.get(this.charRefCode);
      t !== void 0 && (this.charRefCode = t);
    }
    this._flushCodePointConsumedAsCharacterReference(this.charRefCode), this._reconsumeInState(this.returnState, u);
  }
};
Pt.Tokenizer = O6;
var ka = {};
Object.defineProperty(ka, "__esModule", { value: !0 });
ka.OpenElementStack = void 0;
const j = Zu, Xd = /* @__PURE__ */ new Set([j.TAG_ID.DD, j.TAG_ID.DT, j.TAG_ID.LI, j.TAG_ID.OPTGROUP, j.TAG_ID.OPTION, j.TAG_ID.P, j.TAG_ID.RB, j.TAG_ID.RP, j.TAG_ID.RT, j.TAG_ID.RTC]), Fc = /* @__PURE__ */ new Set([
  ...Xd,
  j.TAG_ID.CAPTION,
  j.TAG_ID.COLGROUP,
  j.TAG_ID.TBODY,
  j.TAG_ID.TD,
  j.TAG_ID.TFOOT,
  j.TAG_ID.TH,
  j.TAG_ID.THEAD,
  j.TAG_ID.TR
]), yr = /* @__PURE__ */ new Map([
  [j.TAG_ID.APPLET, j.NS.HTML],
  [j.TAG_ID.CAPTION, j.NS.HTML],
  [j.TAG_ID.HTML, j.NS.HTML],
  [j.TAG_ID.MARQUEE, j.NS.HTML],
  [j.TAG_ID.OBJECT, j.NS.HTML],
  [j.TAG_ID.TABLE, j.NS.HTML],
  [j.TAG_ID.TD, j.NS.HTML],
  [j.TAG_ID.TEMPLATE, j.NS.HTML],
  [j.TAG_ID.TH, j.NS.HTML],
  [j.TAG_ID.ANNOTATION_XML, j.NS.MATHML],
  [j.TAG_ID.MI, j.NS.MATHML],
  [j.TAG_ID.MN, j.NS.MATHML],
  [j.TAG_ID.MO, j.NS.MATHML],
  [j.TAG_ID.MS, j.NS.MATHML],
  [j.TAG_ID.MTEXT, j.NS.MATHML],
  [j.TAG_ID.DESC, j.NS.SVG],
  [j.TAG_ID.FOREIGN_OBJECT, j.NS.SVG],
  [j.TAG_ID.TITLE, j.NS.SVG]
]), P6 = [j.TAG_ID.H1, j.TAG_ID.H2, j.TAG_ID.H3, j.TAG_ID.H4, j.TAG_ID.H5, j.TAG_ID.H6], L6 = [j.TAG_ID.TR, j.TAG_ID.TEMPLATE, j.TAG_ID.HTML], w6 = [j.TAG_ID.TBODY, j.TAG_ID.TFOOT, j.TAG_ID.THEAD, j.TAG_ID.TEMPLATE, j.TAG_ID.HTML], R6 = [j.TAG_ID.TABLE, j.TAG_ID.TEMPLATE, j.TAG_ID.HTML], M6 = [j.TAG_ID.TD, j.TAG_ID.TH];
class k6 {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(u, t, r) {
    this.treeAdapter = t, this.handler = r, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = j.TAG_ID.UNKNOWN, this.current = u;
  }
  //Index of element
  _indexOf(u) {
    return this.items.lastIndexOf(u, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === j.TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === j.NS.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(u, t) {
    this.stackTop++, this.items[this.stackTop] = u, this.current = u, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(u, t, !0);
  }
  pop() {
    const u = this.current;
    this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(u, !0);
  }
  replace(u, t) {
    const r = this._indexOf(u);
    this.items[r] = t, r === this.stackTop && (this.current = t);
  }
  insertAfter(u, t, r) {
    const a = this._indexOf(u) + 1;
    this.items.splice(a, 0, t), this.tagIDs.splice(a, 0, r), this.stackTop++, a === this.stackTop && this._updateCurrentElement(), this.handler.onItemPush(this.current, this.currentTagId, a === this.stackTop);
  }
  popUntilTagNamePopped(u) {
    let t = this.stackTop + 1;
    do
      t = this.tagIDs.lastIndexOf(u, t - 1);
    while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== j.NS.HTML);
    this.shortenToLength(t < 0 ? 0 : t);
  }
  shortenToLength(u) {
    for (; this.stackTop >= u; ) {
      const t = this.current;
      this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < u);
    }
  }
  popUntilElementPopped(u) {
    const t = this._indexOf(u);
    this.shortenToLength(t < 0 ? 0 : t);
  }
  popUntilPopped(u, t) {
    const r = this._indexOfTagNames(u, t);
    this.shortenToLength(r < 0 ? 0 : r);
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(P6, j.NS.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(M6, j.NS.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0, this.shortenToLength(1);
  }
  _indexOfTagNames(u, t) {
    for (let r = this.stackTop; r >= 0; r--)
      if (u.includes(this.tagIDs[r]) && this.treeAdapter.getNamespaceURI(this.items[r]) === t)
        return r;
    return -1;
  }
  clearBackTo(u, t) {
    const r = this._indexOfTagNames(u, t);
    this.shortenToLength(r + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(R6, j.NS.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(w6, j.NS.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(L6, j.NS.HTML);
  }
  remove(u) {
    const t = this._indexOf(u);
    t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(u, !1)));
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === j.TAG_ID.BODY ? this.items[1] : null;
  }
  contains(u) {
    return this._indexOf(u) > -1;
  }
  getCommonAncestor(u) {
    const t = this._indexOf(u) - 1;
    return t >= 0 ? this.items[t] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === j.TAG_ID.HTML;
  }
  //Element in scope
  hasInScope(u) {
    for (let t = this.stackTop; t >= 0; t--) {
      const r = this.tagIDs[t], a = this.treeAdapter.getNamespaceURI(this.items[t]);
      if (r === u && a === j.NS.HTML)
        return !0;
      if (yr.get(r) === a)
        return !1;
    }
    return !0;
  }
  hasNumberedHeaderInScope() {
    for (let u = this.stackTop; u >= 0; u--) {
      const t = this.tagIDs[u], r = this.treeAdapter.getNamespaceURI(this.items[u]);
      if ((0, j.isNumberedHeader)(t) && r === j.NS.HTML)
        return !0;
      if (yr.get(t) === r)
        return !1;
    }
    return !0;
  }
  hasInListItemScope(u) {
    for (let t = this.stackTop; t >= 0; t--) {
      const r = this.tagIDs[t], a = this.treeAdapter.getNamespaceURI(this.items[t]);
      if (r === u && a === j.NS.HTML)
        return !0;
      if ((r === j.TAG_ID.UL || r === j.TAG_ID.OL) && a === j.NS.HTML || yr.get(r) === a)
        return !1;
    }
    return !0;
  }
  hasInButtonScope(u) {
    for (let t = this.stackTop; t >= 0; t--) {
      const r = this.tagIDs[t], a = this.treeAdapter.getNamespaceURI(this.items[t]);
      if (r === u && a === j.NS.HTML)
        return !0;
      if (r === j.TAG_ID.BUTTON && a === j.NS.HTML || yr.get(r) === a)
        return !1;
    }
    return !0;
  }
  hasInTableScope(u) {
    for (let t = this.stackTop; t >= 0; t--) {
      const r = this.tagIDs[t];
      if (this.treeAdapter.getNamespaceURI(this.items[t]) === j.NS.HTML) {
        if (r === u)
          return !0;
        if (r === j.TAG_ID.TABLE || r === j.TAG_ID.TEMPLATE || r === j.TAG_ID.HTML)
          return !1;
      }
    }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let u = this.stackTop; u >= 0; u--) {
      const t = this.tagIDs[u];
      if (this.treeAdapter.getNamespaceURI(this.items[u]) === j.NS.HTML) {
        if (t === j.TAG_ID.TBODY || t === j.TAG_ID.THEAD || t === j.TAG_ID.TFOOT)
          return !0;
        if (t === j.TAG_ID.TABLE || t === j.TAG_ID.HTML)
          return !1;
      }
    }
    return !0;
  }
  hasInSelectScope(u) {
    for (let t = this.stackTop; t >= 0; t--) {
      const r = this.tagIDs[t];
      if (this.treeAdapter.getNamespaceURI(this.items[t]) === j.NS.HTML) {
        if (r === u)
          return !0;
        if (r !== j.TAG_ID.OPTION && r !== j.TAG_ID.OPTGROUP)
          return !1;
      }
    }
    return !0;
  }
  //Implied end tags
  generateImpliedEndTags() {
    for (; Xd.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    for (; Fc.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsWithExclusion(u) {
    for (; this.currentTagId !== u && Fc.has(this.currentTagId); )
      this.pop();
  }
}
ka.OpenElementStack = k6;
var Wd = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.FormattingElementList = e.EntryType = void 0;
  const u = 3;
  var t;
  (function(n) {
    n[n.Marker = 0] = "Marker", n[n.Element = 1] = "Element";
  })(t = e.EntryType || (e.EntryType = {}));
  const r = { type: t.Marker };
  class a {
    constructor(i) {
      this.treeAdapter = i, this.entries = [], this.bookmark = null;
    }
    //Noah Ark's condition
    //OPTIMIZATION: at first we try to find possible candidates for exclusion using
    //lightweight heuristics without thorough attributes check.
    _getNoahArkConditionCandidates(i, c) {
      const o = [], d = c.length, s = this.treeAdapter.getTagName(i), E = this.treeAdapter.getNamespaceURI(i);
      for (let b = 0; b < this.entries.length; b++) {
        const m = this.entries[b];
        if (m.type === t.Marker)
          break;
        const { element: v } = m;
        if (this.treeAdapter.getTagName(v) === s && this.treeAdapter.getNamespaceURI(v) === E) {
          const P = this.treeAdapter.getAttrList(v);
          P.length === d && o.push({ idx: b, attrs: P });
        }
      }
      return o;
    }
    _ensureNoahArkCondition(i) {
      if (this.entries.length < u)
        return;
      const c = this.treeAdapter.getAttrList(i), o = this._getNoahArkConditionCandidates(i, c);
      if (o.length < u)
        return;
      const d = new Map(c.map((E) => [E.name, E.value]));
      let s = 0;
      for (let E = 0; E < o.length; E++) {
        const b = o[E];
        b.attrs.every((m) => d.get(m.name) === m.value) && (s += 1, s >= u && this.entries.splice(b.idx, 1));
      }
    }
    //Mutations
    insertMarker() {
      this.entries.unshift(r);
    }
    pushElement(i, c) {
      this._ensureNoahArkCondition(i), this.entries.unshift({
        type: t.Element,
        element: i,
        token: c
      });
    }
    insertElementAfterBookmark(i, c) {
      const o = this.entries.indexOf(this.bookmark);
      this.entries.splice(o, 0, {
        type: t.Element,
        element: i,
        token: c
      });
    }
    removeEntry(i) {
      const c = this.entries.indexOf(i);
      c >= 0 && this.entries.splice(c, 1);
    }
    /**
     * Clears the list of formatting elements up to the last marker.
     *
     * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
     */
    clearToLastMarker() {
      const i = this.entries.indexOf(r);
      i >= 0 ? this.entries.splice(0, i + 1) : this.entries.length = 0;
    }
    //Search
    getElementEntryInScopeWithTagName(i) {
      const c = this.entries.find((o) => o.type === t.Marker || this.treeAdapter.getTagName(o.element) === i);
      return c && c.type === t.Element ? c : null;
    }
    getElementEntry(i) {
      return this.entries.find((c) => c.type === t.Element && c.element === i);
    }
  }
  e.FormattingElementList = a;
})(Wd);
var Ba = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultTreeAdapter = void 0;
  const u = Zu;
  function t(r) {
    return {
      nodeName: "#text",
      value: r,
      parentNode: null
    };
  }
  e.defaultTreeAdapter = {
    //Node construction
    createDocument() {
      return {
        nodeName: "#document",
        mode: u.DOCUMENT_MODE.NO_QUIRKS,
        childNodes: []
      };
    },
    createDocumentFragment() {
      return {
        nodeName: "#document-fragment",
        childNodes: []
      };
    },
    createElement(r, a, n) {
      return {
        nodeName: r,
        tagName: r,
        attrs: n,
        namespaceURI: a,
        childNodes: [],
        parentNode: null
      };
    },
    createCommentNode(r) {
      return {
        nodeName: "#comment",
        data: r,
        parentNode: null
      };
    },
    //Tree mutation
    appendChild(r, a) {
      r.childNodes.push(a), a.parentNode = r;
    },
    insertBefore(r, a, n) {
      const i = r.childNodes.indexOf(n);
      r.childNodes.splice(i, 0, a), a.parentNode = r;
    },
    setTemplateContent(r, a) {
      r.content = a;
    },
    getTemplateContent(r) {
      return r.content;
    },
    setDocumentType(r, a, n, i) {
      const c = r.childNodes.find((o) => o.nodeName === "#documentType");
      if (c)
        c.name = a, c.publicId = n, c.systemId = i;
      else {
        const o = {
          nodeName: "#documentType",
          name: a,
          publicId: n,
          systemId: i,
          parentNode: null
        };
        e.defaultTreeAdapter.appendChild(r, o);
      }
    },
    setDocumentMode(r, a) {
      r.mode = a;
    },
    getDocumentMode(r) {
      return r.mode;
    },
    detachNode(r) {
      if (r.parentNode) {
        const a = r.parentNode.childNodes.indexOf(r);
        r.parentNode.childNodes.splice(a, 1), r.parentNode = null;
      }
    },
    insertText(r, a) {
      if (r.childNodes.length > 0) {
        const n = r.childNodes[r.childNodes.length - 1];
        if (e.defaultTreeAdapter.isTextNode(n)) {
          n.value += a;
          return;
        }
      }
      e.defaultTreeAdapter.appendChild(r, t(a));
    },
    insertTextBefore(r, a, n) {
      const i = r.childNodes[r.childNodes.indexOf(n) - 1];
      i && e.defaultTreeAdapter.isTextNode(i) ? i.value += a : e.defaultTreeAdapter.insertBefore(r, t(a), n);
    },
    adoptAttributes(r, a) {
      const n = new Set(r.attrs.map((i) => i.name));
      for (let i = 0; i < a.length; i++)
        n.has(a[i].name) || r.attrs.push(a[i]);
    },
    //Tree traversing
    getFirstChild(r) {
      return r.childNodes[0];
    },
    getChildNodes(r) {
      return r.childNodes;
    },
    getParentNode(r) {
      return r.parentNode;
    },
    getAttrList(r) {
      return r.attrs;
    },
    //Node data
    getTagName(r) {
      return r.tagName;
    },
    getNamespaceURI(r) {
      return r.namespaceURI;
    },
    getTextNodeContent(r) {
      return r.value;
    },
    getCommentNodeContent(r) {
      return r.data;
    },
    getDocumentTypeNodeName(r) {
      return r.name;
    },
    getDocumentTypeNodePublicId(r) {
      return r.publicId;
    },
    getDocumentTypeNodeSystemId(r) {
      return r.systemId;
    },
    //Node types
    isTextNode(r) {
      return r.nodeName === "#text";
    },
    isCommentNode(r) {
      return r.nodeName === "#comment";
    },
    isDocumentTypeNode(r) {
      return r.nodeName === "#documentType";
    },
    isElementNode(r) {
      return Object.prototype.hasOwnProperty.call(r, "tagName");
    },
    // Source code location
    setNodeSourceCodeLocation(r, a) {
      r.sourceCodeLocation = a;
    },
    getNodeSourceCodeLocation(r) {
      return r.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation(r, a) {
      r.sourceCodeLocation = Object.assign(Object.assign({}, r.sourceCodeLocation), a);
    }
  };
})(Ba);
var d0 = {};
Object.defineProperty(d0, "__esModule", { value: !0 });
d0.getDocumentMode = d0.isConforming = void 0;
const Gt = Zu, zd = "html", B6 = "about:legacy-compat", U6 = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", Qd = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
], H6 = [
  ...Qd,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
], F6 = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]), Kd = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], q6 = [
  ...Kd,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function qc(e, u) {
  return u.some((t) => e.startsWith(t));
}
function G6(e) {
  return e.name === zd && e.publicId === null && (e.systemId === null || e.systemId === B6);
}
d0.isConforming = G6;
function j6(e) {
  if (e.name !== zd)
    return Gt.DOCUMENT_MODE.QUIRKS;
  const { systemId: u } = e;
  if (u && u.toLowerCase() === U6)
    return Gt.DOCUMENT_MODE.QUIRKS;
  let { publicId: t } = e;
  if (t !== null) {
    if (t = t.toLowerCase(), F6.has(t))
      return Gt.DOCUMENT_MODE.QUIRKS;
    let r = u === null ? H6 : Qd;
    if (qc(t, r))
      return Gt.DOCUMENT_MODE.QUIRKS;
    if (r = u === null ? Kd : q6, qc(t, r))
      return Gt.DOCUMENT_MODE.LIMITED_QUIRKS;
  }
  return Gt.DOCUMENT_MODE.NO_QUIRKS;
}
d0.getDocumentMode = j6;
var Qi = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.isIntegrationPoint = e.adjustTokenSVGTagName = e.adjustTokenXMLAttrs = e.adjustTokenSVGAttrs = e.adjustTokenMathMLAttrs = e.causesExit = e.SVG_TAG_NAMES_ADJUSTMENT_MAP = void 0;
  const u = Zu, t = {
    TEXT_HTML: "text/html",
    APPLICATION_XML: "application/xhtml+xml"
  }, r = "definitionurl", a = "definitionURL", n = new Map([
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
  ].map((I) => [I.toLowerCase(), I])), i = /* @__PURE__ */ new Map([
    ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: u.NS.XLINK }],
    ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: u.NS.XLINK }],
    ["xlink:href", { prefix: "xlink", name: "href", namespace: u.NS.XLINK }],
    ["xlink:role", { prefix: "xlink", name: "role", namespace: u.NS.XLINK }],
    ["xlink:show", { prefix: "xlink", name: "show", namespace: u.NS.XLINK }],
    ["xlink:title", { prefix: "xlink", name: "title", namespace: u.NS.XLINK }],
    ["xlink:type", { prefix: "xlink", name: "type", namespace: u.NS.XLINK }],
    ["xml:base", { prefix: "xml", name: "base", namespace: u.NS.XML }],
    ["xml:lang", { prefix: "xml", name: "lang", namespace: u.NS.XML }],
    ["xml:space", { prefix: "xml", name: "space", namespace: u.NS.XML }],
    ["xmlns", { prefix: "", name: "xmlns", namespace: u.NS.XMLNS }],
    ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: u.NS.XMLNS }]
  ]);
  e.SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
  ].map((I) => [I.toLowerCase(), I]));
  const c = /* @__PURE__ */ new Set([
    u.TAG_ID.B,
    u.TAG_ID.BIG,
    u.TAG_ID.BLOCKQUOTE,
    u.TAG_ID.BODY,
    u.TAG_ID.BR,
    u.TAG_ID.CENTER,
    u.TAG_ID.CODE,
    u.TAG_ID.DD,
    u.TAG_ID.DIV,
    u.TAG_ID.DL,
    u.TAG_ID.DT,
    u.TAG_ID.EM,
    u.TAG_ID.EMBED,
    u.TAG_ID.H1,
    u.TAG_ID.H2,
    u.TAG_ID.H3,
    u.TAG_ID.H4,
    u.TAG_ID.H5,
    u.TAG_ID.H6,
    u.TAG_ID.HEAD,
    u.TAG_ID.HR,
    u.TAG_ID.I,
    u.TAG_ID.IMG,
    u.TAG_ID.LI,
    u.TAG_ID.LISTING,
    u.TAG_ID.MENU,
    u.TAG_ID.META,
    u.TAG_ID.NOBR,
    u.TAG_ID.OL,
    u.TAG_ID.P,
    u.TAG_ID.PRE,
    u.TAG_ID.RUBY,
    u.TAG_ID.S,
    u.TAG_ID.SMALL,
    u.TAG_ID.SPAN,
    u.TAG_ID.STRONG,
    u.TAG_ID.STRIKE,
    u.TAG_ID.SUB,
    u.TAG_ID.SUP,
    u.TAG_ID.TABLE,
    u.TAG_ID.TT,
    u.TAG_ID.U,
    u.TAG_ID.UL,
    u.TAG_ID.VAR
  ]);
  function o(I) {
    const O = I.tagID;
    return O === u.TAG_ID.FONT && I.attrs.some(({ name: U }) => U === u.ATTRS.COLOR || U === u.ATTRS.SIZE || U === u.ATTRS.FACE) || c.has(O);
  }
  e.causesExit = o;
  function d(I) {
    for (let O = 0; O < I.attrs.length; O++)
      if (I.attrs[O].name === r) {
        I.attrs[O].name = a;
        break;
      }
  }
  e.adjustTokenMathMLAttrs = d;
  function s(I) {
    for (let O = 0; O < I.attrs.length; O++) {
      const M = n.get(I.attrs[O].name);
      M != null && (I.attrs[O].name = M);
    }
  }
  e.adjustTokenSVGAttrs = s;
  function E(I) {
    for (let O = 0; O < I.attrs.length; O++) {
      const M = i.get(I.attrs[O].name);
      M && (I.attrs[O].prefix = M.prefix, I.attrs[O].name = M.name, I.attrs[O].namespace = M.namespace);
    }
  }
  e.adjustTokenXMLAttrs = E;
  function b(I) {
    const O = e.SVG_TAG_NAMES_ADJUSTMENT_MAP.get(I.tagName);
    O != null && (I.tagName = O, I.tagID = (0, u.getTagID)(I.tagName));
  }
  e.adjustTokenSVGTagName = b;
  function m(I, O) {
    return O === u.NS.MATHML && (I === u.TAG_ID.MI || I === u.TAG_ID.MO || I === u.TAG_ID.MN || I === u.TAG_ID.MS || I === u.TAG_ID.MTEXT);
  }
  function v(I, O, M) {
    if (O === u.NS.MATHML && I === u.TAG_ID.ANNOTATION_XML) {
      for (let U = 0; U < M.length; U++)
        if (M[U].name === u.ATTRS.ENCODING) {
          const B = M[U].value.toLowerCase();
          return B === t.TEXT_HTML || B === t.APPLICATION_XML;
        }
    }
    return O === u.NS.SVG && (I === u.TAG_ID.FOREIGN_OBJECT || I === u.TAG_ID.DESC || I === u.TAG_ID.TITLE);
  }
  function P(I, O, M, U) {
    return (!U || U === u.NS.HTML) && v(I, O, M) || (!U || U === u.NS.MATHML) && m(I, O);
  }
  e.isIntegrationPoint = P;
})(Qi);
Object.defineProperty(G0, "__esModule", { value: !0 });
G0.Parser = void 0;
const Ke = Pt, $6 = ka, Gc = Wd, V6 = Ba, jc = d0, Uu = Qi, $e = cr, Jd = Ra, f = Zu, Re = Ma, Y6 = "hidden", X6 = 8, W6 = 3;
var S;
(function(e) {
  e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(S || (S = {}));
const z6 = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
}, Zd = /* @__PURE__ */ new Set([f.TAG_ID.TABLE, f.TAG_ID.TBODY, f.TAG_ID.TFOOT, f.TAG_ID.THEAD, f.TAG_ID.TR]), $c = {
  scriptingEnabled: !0,
  sourceCodeLocationInfo: !1,
  treeAdapter: V6.defaultTreeAdapter,
  onParseError: null
};
let Q6 = class {
  constructor(u, t, r = null, a = null) {
    this.fragmentContext = r, this.scriptHandler = a, this.currentToken = null, this.stopped = !1, this.insertionMode = S.INITIAL, this.originalInsertionMode = S.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = Object.assign(Object.assign({}, $c), u), this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new Ke.Tokenizer(this.options, this), this.activeFormattingElements = new Gc.FormattingElementList(this.treeAdapter), this.fragmentContextID = r ? (0, f.getTagID)(this.treeAdapter.getTagName(r)) : f.TAG_ID.UNKNOWN, this._setContextModes(r ?? this.document, this.fragmentContextID), this.openElements = new $6.OpenElementStack(this.document, this.treeAdapter, this);
  }
  // API
  static parse(u, t) {
    const r = new this(t);
    return r.tokenizer.write(u, !0), r.document;
  }
  static getFragmentParser(u, t) {
    const r = Object.assign(Object.assign({}, $c), t);
    u ?? (u = r.treeAdapter.createElement(f.TAG_NAMES.TEMPLATE, f.NS.HTML, []));
    const a = r.treeAdapter.createElement("documentmock", f.NS.HTML, []), n = new this(r, a, u);
    return n.fragmentContextID === f.TAG_ID.TEMPLATE && n.tmplInsertionModeStack.unshift(S.IN_TEMPLATE), n._initTokenizerForFragmentParsing(), n._insertFakeRootElement(), n._resetInsertionMode(), n._findFormInFragmentContext(), n;
  }
  getFragment() {
    const u = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(u, t), t;
  }
  //Errors
  _err(u, t, r) {
    var a;
    if (!this.onParseError)
      return;
    const n = (a = u.location) !== null && a !== void 0 ? a : z6, i = {
      code: t,
      startLine: n.startLine,
      startCol: n.startCol,
      startOffset: n.startOffset,
      endLine: r ? n.startLine : n.endLine,
      endCol: r ? n.startCol : n.endCol,
      endOffset: r ? n.startOffset : n.endOffset
    };
    this.onParseError(i);
  }
  //Stack events
  onItemPush(u, t, r) {
    var a, n;
    (n = (a = this.treeAdapter).onItemPush) === null || n === void 0 || n.call(a, u), r && this.openElements.stackTop > 0 && this._setContextModes(u, t);
  }
  onItemPop(u, t) {
    var r, a;
    if (this.options.sourceCodeLocationInfo && this._setEndLocation(u, this.currentToken), (a = (r = this.treeAdapter).onItemPop) === null || a === void 0 || a.call(r, u, this.openElements.current), t) {
      let n, i;
      this.openElements.stackTop === 0 && this.fragmentContext ? (n = this.fragmentContext, i = this.fragmentContextID) : { current: n, currentTagId: i } = this.openElements, this._setContextModes(n, i);
    }
  }
  _setContextModes(u, t) {
    const r = u === this.document || this.treeAdapter.getNamespaceURI(u) === f.NS.HTML;
    this.currentNotInHTML = !r, this.tokenizer.inForeignNode = !r && !this._isIntegrationPoint(t, u);
  }
  _switchToTextParsing(u, t) {
    this._insertElement(u, f.NS.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = S.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = S.TEXT, this.originalInsertionMode = S.IN_BODY, this.tokenizer.state = Ke.TokenizerMode.PLAINTEXT;
  }
  //Fragment parsing
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  _findFormInFragmentContext() {
    let u = this.fragmentContext;
    for (; u; ) {
      if (this.treeAdapter.getTagName(u) === f.TAG_NAMES.FORM) {
        this.formElement = u;
        break;
      }
      u = this.treeAdapter.getParentNode(u);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== f.NS.HTML))
      switch (this.fragmentContextID) {
        case f.TAG_ID.TITLE:
        case f.TAG_ID.TEXTAREA: {
          this.tokenizer.state = Ke.TokenizerMode.RCDATA;
          break;
        }
        case f.TAG_ID.STYLE:
        case f.TAG_ID.XMP:
        case f.TAG_ID.IFRAME:
        case f.TAG_ID.NOEMBED:
        case f.TAG_ID.NOFRAMES:
        case f.TAG_ID.NOSCRIPT: {
          this.tokenizer.state = Ke.TokenizerMode.RAWTEXT;
          break;
        }
        case f.TAG_ID.SCRIPT: {
          this.tokenizer.state = Ke.TokenizerMode.SCRIPT_DATA;
          break;
        }
        case f.TAG_ID.PLAINTEXT: {
          this.tokenizer.state = Ke.TokenizerMode.PLAINTEXT;
          break;
        }
      }
  }
  //Tree mutation
  _setDocumentType(u) {
    const t = u.name || "", r = u.publicId || "", a = u.systemId || "";
    if (this.treeAdapter.setDocumentType(this.document, t, r, a), u.location) {
      const i = this.treeAdapter.getChildNodes(this.document).find((c) => this.treeAdapter.isDocumentTypeNode(c));
      i && this.treeAdapter.setNodeSourceCodeLocation(i, u.location);
    }
  }
  _attachElementToTree(u, t) {
    if (this.options.sourceCodeLocationInfo) {
      const r = t && Object.assign(Object.assign({}, t), { startTag: t });
      this.treeAdapter.setNodeSourceCodeLocation(u, r);
    }
    if (this._shouldFosterParentOnInsertion())
      this._fosterParentElement(u);
    else {
      const r = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(r, u);
    }
  }
  _appendElement(u, t) {
    const r = this.treeAdapter.createElement(u.tagName, t, u.attrs);
    this._attachElementToTree(r, u.location);
  }
  _insertElement(u, t) {
    const r = this.treeAdapter.createElement(u.tagName, t, u.attrs);
    this._attachElementToTree(r, u.location), this.openElements.push(r, u.tagID);
  }
  _insertFakeElement(u, t) {
    const r = this.treeAdapter.createElement(u, f.NS.HTML, []);
    this._attachElementToTree(r, null), this.openElements.push(r, t);
  }
  _insertTemplate(u) {
    const t = this.treeAdapter.createElement(u.tagName, f.NS.HTML, u.attrs), r = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(t, r), this._attachElementToTree(t, u.location), this.openElements.push(t, u.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, null);
  }
  _insertFakeRootElement() {
    const u = this.treeAdapter.createElement(f.TAG_NAMES.HTML, f.NS.HTML, []);
    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(u, null), this.treeAdapter.appendChild(this.openElements.current, u), this.openElements.push(u, f.TAG_ID.HTML);
  }
  _appendCommentNode(u, t) {
    const r = this.treeAdapter.createCommentNode(u.data);
    this.treeAdapter.appendChild(t, r), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, u.location);
  }
  _insertCharacters(u) {
    let t, r;
    if (this._shouldFosterParentOnInsertion() ? ({ parent: t, beforeElement: r } = this._findFosterParentingLocation(), r ? this.treeAdapter.insertTextBefore(t, u.chars, r) : this.treeAdapter.insertText(t, u.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, u.chars)), !u.location)
      return;
    const a = this.treeAdapter.getChildNodes(t), n = r ? a.lastIndexOf(r) : a.length, i = a[n - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
      const { endLine: o, endCol: d, endOffset: s } = u.location;
      this.treeAdapter.updateNodeSourceCodeLocation(i, { endLine: o, endCol: d, endOffset: s });
    } else
      this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, u.location);
  }
  _adoptNodes(u, t) {
    for (let r = this.treeAdapter.getFirstChild(u); r; r = this.treeAdapter.getFirstChild(u))
      this.treeAdapter.detachNode(r), this.treeAdapter.appendChild(t, r);
  }
  _setEndLocation(u, t) {
    if (this.treeAdapter.getNodeSourceCodeLocation(u) && t.location) {
      const r = t.location, a = this.treeAdapter.getTagName(u), n = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        t.type === Re.TokenType.END_TAG && a === t.tagName ? {
          endTag: Object.assign({}, r),
          endLine: r.endLine,
          endCol: r.endCol,
          endOffset: r.endOffset
        } : {
          endLine: r.startLine,
          endCol: r.startCol,
          endOffset: r.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(u, n);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(u) {
    if (!this.currentNotInHTML)
      return !1;
    let t, r;
    return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, r = this.fragmentContextID) : { current: t, currentTagId: r } = this.openElements, u.tagID === f.TAG_ID.SVG && this.treeAdapter.getTagName(t) === f.TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === f.NS.MATHML ? !1 : (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (u.tagID === f.TAG_ID.MGLYPH || u.tagID === f.TAG_ID.MALIGNMARK) && !this._isIntegrationPoint(r, t, f.NS.HTML)
    );
  }
  _processToken(u) {
    switch (u.type) {
      case Re.TokenType.CHARACTER: {
        this.onCharacter(u);
        break;
      }
      case Re.TokenType.NULL_CHARACTER: {
        this.onNullCharacter(u);
        break;
      }
      case Re.TokenType.COMMENT: {
        this.onComment(u);
        break;
      }
      case Re.TokenType.DOCTYPE: {
        this.onDoctype(u);
        break;
      }
      case Re.TokenType.START_TAG: {
        this._processStartTag(u);
        break;
      }
      case Re.TokenType.END_TAG: {
        this.onEndTag(u);
        break;
      }
      case Re.TokenType.EOF: {
        this.onEof(u);
        break;
      }
      case Re.TokenType.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(u);
        break;
      }
    }
  }
  //Integration points
  _isIntegrationPoint(u, t, r) {
    const a = this.treeAdapter.getNamespaceURI(t), n = this.treeAdapter.getAttrList(t);
    return Uu.isIntegrationPoint(u, a, n, r);
  }
  //Active formatting elements reconstruction
  _reconstructActiveFormattingElements() {
    const u = this.activeFormattingElements.entries.length;
    if (u) {
      const t = this.activeFormattingElements.entries.findIndex((a) => a.type === Gc.EntryType.Marker || this.openElements.contains(a.element)), r = t < 0 ? u - 1 : t - 1;
      for (let a = r; a >= 0; a--) {
        const n = this.activeFormattingElements.entries[a];
        this._insertElement(n.token, this.treeAdapter.getNamespaceURI(n.element)), n.element = this.openElements.current;
      }
    }
  }
  //Close elements
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = S.IN_ROW;
  }
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(f.TAG_ID.P), this.openElements.popUntilTagNamePopped(f.TAG_ID.P);
  }
  //Insertion modes
  _resetInsertionMode() {
    for (let u = this.openElements.stackTop; u >= 0; u--)
      switch (u === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[u]) {
        case f.TAG_ID.TR: {
          this.insertionMode = S.IN_ROW;
          return;
        }
        case f.TAG_ID.TBODY:
        case f.TAG_ID.THEAD:
        case f.TAG_ID.TFOOT: {
          this.insertionMode = S.IN_TABLE_BODY;
          return;
        }
        case f.TAG_ID.CAPTION: {
          this.insertionMode = S.IN_CAPTION;
          return;
        }
        case f.TAG_ID.COLGROUP: {
          this.insertionMode = S.IN_COLUMN_GROUP;
          return;
        }
        case f.TAG_ID.TABLE: {
          this.insertionMode = S.IN_TABLE;
          return;
        }
        case f.TAG_ID.BODY: {
          this.insertionMode = S.IN_BODY;
          return;
        }
        case f.TAG_ID.FRAMESET: {
          this.insertionMode = S.IN_FRAMESET;
          return;
        }
        case f.TAG_ID.SELECT: {
          this._resetInsertionModeForSelect(u);
          return;
        }
        case f.TAG_ID.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case f.TAG_ID.HTML: {
          this.insertionMode = this.headElement ? S.AFTER_HEAD : S.BEFORE_HEAD;
          return;
        }
        case f.TAG_ID.TD:
        case f.TAG_ID.TH: {
          if (u > 0) {
            this.insertionMode = S.IN_CELL;
            return;
          }
          break;
        }
        case f.TAG_ID.HEAD: {
          if (u > 0) {
            this.insertionMode = S.IN_HEAD;
            return;
          }
          break;
        }
      }
    this.insertionMode = S.IN_BODY;
  }
  _resetInsertionModeForSelect(u) {
    if (u > 0)
      for (let t = u - 1; t > 0; t--) {
        const r = this.openElements.tagIDs[t];
        if (r === f.TAG_ID.TEMPLATE)
          break;
        if (r === f.TAG_ID.TABLE) {
          this.insertionMode = S.IN_SELECT_IN_TABLE;
          return;
        }
      }
    this.insertionMode = S.IN_SELECT;
  }
  //Foster parenting
  _isElementCausesFosterParenting(u) {
    return Zd.has(u);
  }
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  _findFosterParentingLocation() {
    for (let u = this.openElements.stackTop; u >= 0; u--) {
      const t = this.openElements.items[u];
      switch (this.openElements.tagIDs[u]) {
        case f.TAG_ID.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(t) === f.NS.HTML)
            return { parent: this.treeAdapter.getTemplateContent(t), beforeElement: null };
          break;
        }
        case f.TAG_ID.TABLE: {
          const r = this.treeAdapter.getParentNode(t);
          return r ? { parent: r, beforeElement: t } : { parent: this.openElements.items[u - 1], beforeElement: null };
        }
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  _fosterParentElement(u) {
    const t = this._findFosterParentingLocation();
    t.beforeElement ? this.treeAdapter.insertBefore(t.parent, u, t.beforeElement) : this.treeAdapter.appendChild(t.parent, u);
  }
  //Special elements
  _isSpecialElement(u, t) {
    const r = this.treeAdapter.getNamespaceURI(u);
    return f.SPECIAL_ELEMENTS[r].has(t);
  }
  onCharacter(u) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      I4(this, u);
      return;
    }
    switch (this.insertionMode) {
      case S.INITIAL: {
        v0(this, u);
        break;
      }
      case S.BEFORE_HTML: {
        w0(this, u);
        break;
      }
      case S.BEFORE_HEAD: {
        R0(this, u);
        break;
      }
      case S.IN_HEAD: {
        M0(this, u);
        break;
      }
      case S.IN_HEAD_NO_SCRIPT: {
        k0(this, u);
        break;
      }
      case S.AFTER_HEAD: {
        B0(this, u);
        break;
      }
      case S.IN_BODY:
      case S.IN_CAPTION:
      case S.IN_CELL:
      case S.IN_TEMPLATE: {
        u1(this, u);
        break;
      }
      case S.TEXT:
      case S.IN_SELECT:
      case S.IN_SELECT_IN_TABLE: {
        this._insertCharacters(u);
        break;
      }
      case S.IN_TABLE:
      case S.IN_TABLE_BODY:
      case S.IN_ROW: {
        bn(this, u);
        break;
      }
      case S.IN_TABLE_TEXT: {
        c1(this, u);
        break;
      }
      case S.IN_COLUMN_GROUP: {
        ea(this, u);
        break;
      }
      case S.AFTER_BODY: {
        ua(this, u);
        break;
      }
      case S.AFTER_AFTER_BODY: {
        Lr(this, u);
        break;
      }
    }
  }
  onNullCharacter(u) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      N4(this, u);
      return;
    }
    switch (this.insertionMode) {
      case S.INITIAL: {
        v0(this, u);
        break;
      }
      case S.BEFORE_HTML: {
        w0(this, u);
        break;
      }
      case S.BEFORE_HEAD: {
        R0(this, u);
        break;
      }
      case S.IN_HEAD: {
        M0(this, u);
        break;
      }
      case S.IN_HEAD_NO_SCRIPT: {
        k0(this, u);
        break;
      }
      case S.AFTER_HEAD: {
        B0(this, u);
        break;
      }
      case S.TEXT: {
        this._insertCharacters(u);
        break;
      }
      case S.IN_TABLE:
      case S.IN_TABLE_BODY:
      case S.IN_ROW: {
        bn(this, u);
        break;
      }
      case S.IN_COLUMN_GROUP: {
        ea(this, u);
        break;
      }
      case S.AFTER_BODY: {
        ua(this, u);
        break;
      }
      case S.AFTER_AFTER_BODY: {
        Lr(this, u);
        break;
      }
    }
  }
  onComment(u) {
    if (this.skipNextNewLine = !1, this.currentNotInHTML) {
      Jn(this, u);
      return;
    }
    switch (this.insertionMode) {
      case S.INITIAL:
      case S.BEFORE_HTML:
      case S.BEFORE_HEAD:
      case S.IN_HEAD:
      case S.IN_HEAD_NO_SCRIPT:
      case S.AFTER_HEAD:
      case S.IN_BODY:
      case S.IN_TABLE:
      case S.IN_CAPTION:
      case S.IN_COLUMN_GROUP:
      case S.IN_TABLE_BODY:
      case S.IN_ROW:
      case S.IN_CELL:
      case S.IN_SELECT:
      case S.IN_SELECT_IN_TABLE:
      case S.IN_TEMPLATE:
      case S.IN_FRAMESET:
      case S.AFTER_FRAMESET: {
        Jn(this, u);
        break;
      }
      case S.IN_TABLE_TEXT: {
        x0(this, u);
        break;
      }
      case S.AFTER_BODY: {
        rp(this, u);
        break;
      }
      case S.AFTER_AFTER_BODY:
      case S.AFTER_AFTER_FRAMESET: {
        ap(this, u);
        break;
      }
    }
  }
  onDoctype(u) {
    switch (this.skipNextNewLine = !1, this.insertionMode) {
      case S.INITIAL: {
        np(this, u);
        break;
      }
      case S.BEFORE_HEAD:
      case S.IN_HEAD:
      case S.IN_HEAD_NO_SCRIPT:
      case S.AFTER_HEAD: {
        this._err(u, $e.ERR.misplacedDoctype);
        break;
      }
      case S.IN_TABLE_TEXT: {
        x0(this, u);
        break;
      }
    }
  }
  onStartTag(u) {
    this.skipNextNewLine = !1, this.currentToken = u, this._processStartTag(u), u.selfClosing && !u.ackSelfClosing && this._err(u, $e.ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   */
  _processStartTag(u) {
    this.shouldProcessStartTagTokenInForeignContent(u) ? D4(this, u) : this._startTagOutsideForeignContent(u);
  }
  _startTagOutsideForeignContent(u) {
    switch (this.insertionMode) {
      case S.INITIAL: {
        v0(this, u);
        break;
      }
      case S.BEFORE_HTML: {
        ip(this, u);
        break;
      }
      case S.BEFORE_HEAD: {
        sp(this, u);
        break;
      }
      case S.IN_HEAD: {
        wu(this, u);
        break;
      }
      case S.IN_HEAD_NO_SCRIPT: {
        lp(this, u);
        break;
      }
      case S.AFTER_HEAD: {
        bp(this, u);
        break;
      }
      case S.IN_BODY: {
        Ye(this, u);
        break;
      }
      case S.IN_TABLE: {
        l0(this, u);
        break;
      }
      case S.IN_TABLE_TEXT: {
        x0(this, u);
        break;
      }
      case S.IN_CAPTION: {
        o4(this, u);
        break;
      }
      case S.IN_COLUMN_GROUP: {
        Zi(this, u);
        break;
      }
      case S.IN_TABLE_BODY: {
        Fa(this, u);
        break;
      }
      case S.IN_ROW: {
        qa(this, u);
        break;
      }
      case S.IN_CELL: {
        f4(this, u);
        break;
      }
      case S.IN_SELECT: {
        d1(this, u);
        break;
      }
      case S.IN_SELECT_IN_TABLE: {
        h4(this, u);
        break;
      }
      case S.IN_TEMPLATE: {
        m4(this, u);
        break;
      }
      case S.AFTER_BODY: {
        E4(this, u);
        break;
      }
      case S.IN_FRAMESET: {
        T4(this, u);
        break;
      }
      case S.AFTER_FRAMESET: {
        y4(this, u);
        break;
      }
      case S.AFTER_AFTER_BODY: {
        v4(this, u);
        break;
      }
      case S.AFTER_AFTER_FRAMESET: {
        x4(this, u);
        break;
      }
    }
  }
  onEndTag(u) {
    this.skipNextNewLine = !1, this.currentToken = u, this.currentNotInHTML ? C4(this, u) : this._endTagOutsideForeignContent(u);
  }
  _endTagOutsideForeignContent(u) {
    switch (this.insertionMode) {
      case S.INITIAL: {
        v0(this, u);
        break;
      }
      case S.BEFORE_HTML: {
        cp(this, u);
        break;
      }
      case S.BEFORE_HEAD: {
        op(this, u);
        break;
      }
      case S.IN_HEAD: {
        dp(this, u);
        break;
      }
      case S.IN_HEAD_NO_SCRIPT: {
        fp(this, u);
        break;
      }
      case S.AFTER_HEAD: {
        hp(this, u);
        break;
      }
      case S.IN_BODY: {
        Ha(this, u);
        break;
      }
      case S.TEXT: {
        Zp(this, u);
        break;
      }
      case S.IN_TABLE: {
        j0(this, u);
        break;
      }
      case S.IN_TABLE_TEXT: {
        x0(this, u);
        break;
      }
      case S.IN_CAPTION: {
        d4(this, u);
        break;
      }
      case S.IN_COLUMN_GROUP: {
        l4(this, u);
        break;
      }
      case S.IN_TABLE_BODY: {
        Zn(this, u);
        break;
      }
      case S.IN_ROW: {
        o1(this, u);
        break;
      }
      case S.IN_CELL: {
        b4(this, u);
        break;
      }
      case S.IN_SELECT: {
        l1(this, u);
        break;
      }
      case S.IN_SELECT_IN_TABLE: {
        p4(this, u);
        break;
      }
      case S.IN_TEMPLATE: {
        g4(this, u);
        break;
      }
      case S.AFTER_BODY: {
        b1(this, u);
        break;
      }
      case S.IN_FRAMESET: {
        _4(this, u);
        break;
      }
      case S.AFTER_FRAMESET: {
        A4(this, u);
        break;
      }
      case S.AFTER_AFTER_BODY: {
        Lr(this, u);
        break;
      }
    }
  }
  onEof(u) {
    switch (this.insertionMode) {
      case S.INITIAL: {
        v0(this, u);
        break;
      }
      case S.BEFORE_HTML: {
        w0(this, u);
        break;
      }
      case S.BEFORE_HEAD: {
        R0(this, u);
        break;
      }
      case S.IN_HEAD: {
        M0(this, u);
        break;
      }
      case S.IN_HEAD_NO_SCRIPT: {
        k0(this, u);
        break;
      }
      case S.AFTER_HEAD: {
        B0(this, u);
        break;
      }
      case S.IN_BODY:
      case S.IN_TABLE:
      case S.IN_CAPTION:
      case S.IN_COLUMN_GROUP:
      case S.IN_TABLE_BODY:
      case S.IN_ROW:
      case S.IN_CELL:
      case S.IN_SELECT:
      case S.IN_SELECT_IN_TABLE: {
        n1(this, u);
        break;
      }
      case S.TEXT: {
        e4(this, u);
        break;
      }
      case S.IN_TABLE_TEXT: {
        x0(this, u);
        break;
      }
      case S.IN_TEMPLATE: {
        f1(this, u);
        break;
      }
      case S.AFTER_BODY:
      case S.IN_FRAMESET:
      case S.AFTER_FRAMESET:
      case S.AFTER_AFTER_BODY:
      case S.AFTER_AFTER_FRAMESET: {
        Ji(this, u);
        break;
      }
    }
  }
  onWhitespaceCharacter(u) {
    if (this.skipNextNewLine && (this.skipNextNewLine = !1, u.chars.charCodeAt(0) === Jd.CODE_POINTS.LINE_FEED)) {
      if (u.chars.length === 1)
        return;
      u.chars = u.chars.substr(1);
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(u);
      return;
    }
    switch (this.insertionMode) {
      case S.IN_HEAD:
      case S.IN_HEAD_NO_SCRIPT:
      case S.AFTER_HEAD:
      case S.TEXT:
      case S.IN_COLUMN_GROUP:
      case S.IN_SELECT:
      case S.IN_SELECT_IN_TABLE:
      case S.IN_FRAMESET:
      case S.AFTER_FRAMESET: {
        this._insertCharacters(u);
        break;
      }
      case S.IN_BODY:
      case S.IN_CAPTION:
      case S.IN_CELL:
      case S.IN_TEMPLATE:
      case S.AFTER_BODY:
      case S.AFTER_AFTER_BODY:
      case S.AFTER_AFTER_FRAMESET: {
        e1(this, u);
        break;
      }
      case S.IN_TABLE:
      case S.IN_TABLE_BODY:
      case S.IN_ROW: {
        bn(this, u);
        break;
      }
      case S.IN_TABLE_TEXT: {
        i1(this, u);
        break;
      }
    }
  }
};
G0.Parser = Q6;
function K6(e, u) {
  let t = e.activeFormattingElements.getElementEntryInScopeWithTagName(u.tagName);
  return t ? e.openElements.contains(t.element) ? e.openElements.hasInScope(u.tagID) || (t = null) : (e.activeFormattingElements.removeEntry(t), t = null) : a1(e, u), t;
}
function J6(e, u) {
  let t = null, r = e.openElements.stackTop;
  for (; r >= 0; r--) {
    const a = e.openElements.items[r];
    if (a === u.element)
      break;
    e._isSpecialElement(a, e.openElements.tagIDs[r]) && (t = a);
  }
  return t || (e.openElements.shortenToLength(r < 0 ? 0 : r), e.activeFormattingElements.removeEntry(u)), t;
}
function Z6(e, u, t) {
  let r = u, a = e.openElements.getCommonAncestor(u);
  for (let n = 0, i = a; i !== t; n++, i = a) {
    a = e.openElements.getCommonAncestor(i);
    const c = e.activeFormattingElements.getElementEntry(i), o = c && n >= W6;
    !c || o ? (o && e.activeFormattingElements.removeEntry(c), e.openElements.remove(i)) : (i = ep(e, c), r === u && (e.activeFormattingElements.bookmark = c), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(i, r), r = i);
  }
  return r;
}
function ep(e, u) {
  const t = e.treeAdapter.getNamespaceURI(u.element), r = e.treeAdapter.createElement(u.token.tagName, t, u.token.attrs);
  return e.openElements.replace(u.element, r), u.element = r, r;
}
function up(e, u, t) {
  const r = e.treeAdapter.getTagName(u), a = (0, f.getTagID)(r);
  if (e._isElementCausesFosterParenting(a))
    e._fosterParentElement(t);
  else {
    const n = e.treeAdapter.getNamespaceURI(u);
    a === f.TAG_ID.TEMPLATE && n === f.NS.HTML && (u = e.treeAdapter.getTemplateContent(u)), e.treeAdapter.appendChild(u, t);
  }
}
function tp(e, u, t) {
  const r = e.treeAdapter.getNamespaceURI(t.element), { token: a } = t, n = e.treeAdapter.createElement(a.tagName, r, a.attrs);
  e._adoptNodes(u, n), e.treeAdapter.appendChild(u, n), e.activeFormattingElements.insertElementAfterBookmark(n, a), e.activeFormattingElements.removeEntry(t), e.openElements.remove(t.element), e.openElements.insertAfter(u, n, a.tagID);
}
function Ki(e, u) {
  for (let t = 0; t < X6; t++) {
    const r = K6(e, u);
    if (!r)
      break;
    const a = J6(e, r);
    if (!a)
      break;
    e.activeFormattingElements.bookmark = r;
    const n = Z6(e, a, r.element), i = e.openElements.getCommonAncestor(r.element);
    e.treeAdapter.detachNode(n), i && up(e, i, n), tp(e, a, r);
  }
}
function Jn(e, u) {
  e._appendCommentNode(u, e.openElements.currentTmplContentOrNode);
}
function rp(e, u) {
  e._appendCommentNode(u, e.openElements.items[0]);
}
function ap(e, u) {
  e._appendCommentNode(u, e.document);
}
function Ji(e, u) {
  if (e.stopped = !0, u.location) {
    const t = e.fragmentContext ? 0 : 2;
    for (let r = e.openElements.stackTop; r >= t; r--)
      e._setEndLocation(e.openElements.items[r], u);
    if (!e.fragmentContext && e.openElements.stackTop >= 0) {
      const r = e.openElements.items[0], a = e.treeAdapter.getNodeSourceCodeLocation(r);
      if (a && !a.endTag && (e._setEndLocation(r, u), e.openElements.stackTop >= 1)) {
        const n = e.openElements.items[1], i = e.treeAdapter.getNodeSourceCodeLocation(n);
        i && !i.endTag && e._setEndLocation(n, u);
      }
    }
  }
}
function np(e, u) {
  e._setDocumentType(u);
  const t = u.forceQuirks ? f.DOCUMENT_MODE.QUIRKS : jc.getDocumentMode(u);
  jc.isConforming(u) || e._err(u, $e.ERR.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, t), e.insertionMode = S.BEFORE_HTML;
}
function v0(e, u) {
  e._err(u, $e.ERR.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, f.DOCUMENT_MODE.QUIRKS), e.insertionMode = S.BEFORE_HTML, e._processToken(u);
}
function ip(e, u) {
  u.tagID === f.TAG_ID.HTML ? (e._insertElement(u, f.NS.HTML), e.insertionMode = S.BEFORE_HEAD) : w0(e, u);
}
function cp(e, u) {
  const t = u.tagID;
  (t === f.TAG_ID.HTML || t === f.TAG_ID.HEAD || t === f.TAG_ID.BODY || t === f.TAG_ID.BR) && w0(e, u);
}
function w0(e, u) {
  e._insertFakeRootElement(), e.insertionMode = S.BEFORE_HEAD, e._processToken(u);
}
function sp(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.HEAD: {
      e._insertElement(u, f.NS.HTML), e.headElement = e.openElements.current, e.insertionMode = S.IN_HEAD;
      break;
    }
    default:
      R0(e, u);
  }
}
function op(e, u) {
  const t = u.tagID;
  t === f.TAG_ID.HEAD || t === f.TAG_ID.BODY || t === f.TAG_ID.HTML || t === f.TAG_ID.BR ? R0(e, u) : e._err(u, $e.ERR.endTagWithoutMatchingOpenElement);
}
function R0(e, u) {
  e._insertFakeElement(f.TAG_NAMES.HEAD, f.TAG_ID.HEAD), e.headElement = e.openElements.current, e.insertionMode = S.IN_HEAD, e._processToken(u);
}
function wu(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.BASE:
    case f.TAG_ID.BASEFONT:
    case f.TAG_ID.BGSOUND:
    case f.TAG_ID.LINK:
    case f.TAG_ID.META: {
      e._appendElement(u, f.NS.HTML), u.ackSelfClosing = !0;
      break;
    }
    case f.TAG_ID.TITLE: {
      e._switchToTextParsing(u, Ke.TokenizerMode.RCDATA);
      break;
    }
    case f.TAG_ID.NOSCRIPT: {
      e.options.scriptingEnabled ? e._switchToTextParsing(u, Ke.TokenizerMode.RAWTEXT) : (e._insertElement(u, f.NS.HTML), e.insertionMode = S.IN_HEAD_NO_SCRIPT);
      break;
    }
    case f.TAG_ID.NOFRAMES:
    case f.TAG_ID.STYLE: {
      e._switchToTextParsing(u, Ke.TokenizerMode.RAWTEXT);
      break;
    }
    case f.TAG_ID.SCRIPT: {
      e._switchToTextParsing(u, Ke.TokenizerMode.SCRIPT_DATA);
      break;
    }
    case f.TAG_ID.TEMPLATE: {
      e._insertTemplate(u), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = S.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(S.IN_TEMPLATE);
      break;
    }
    case f.TAG_ID.HEAD: {
      e._err(u, $e.ERR.misplacedStartTagForHeadElement);
      break;
    }
    default:
      M0(e, u);
  }
}
function dp(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HEAD: {
      e.openElements.pop(), e.insertionMode = S.AFTER_HEAD;
      break;
    }
    case f.TAG_ID.BODY:
    case f.TAG_ID.BR:
    case f.TAG_ID.HTML: {
      M0(e, u);
      break;
    }
    case f.TAG_ID.TEMPLATE: {
      Ut(e, u);
      break;
    }
    default:
      e._err(u, $e.ERR.endTagWithoutMatchingOpenElement);
  }
}
function Ut(e, u) {
  e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== f.TAG_ID.TEMPLATE && e._err(u, $e.ERR.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(f.TAG_ID.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(u, $e.ERR.endTagWithoutMatchingOpenElement);
}
function M0(e, u) {
  e.openElements.pop(), e.insertionMode = S.AFTER_HEAD, e._processToken(u);
}
function lp(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.BASEFONT:
    case f.TAG_ID.BGSOUND:
    case f.TAG_ID.HEAD:
    case f.TAG_ID.LINK:
    case f.TAG_ID.META:
    case f.TAG_ID.NOFRAMES:
    case f.TAG_ID.STYLE: {
      wu(e, u);
      break;
    }
    case f.TAG_ID.NOSCRIPT: {
      e._err(u, $e.ERR.nestedNoscriptInHead);
      break;
    }
    default:
      k0(e, u);
  }
}
function fp(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.NOSCRIPT: {
      e.openElements.pop(), e.insertionMode = S.IN_HEAD;
      break;
    }
    case f.TAG_ID.BR: {
      k0(e, u);
      break;
    }
    default:
      e._err(u, $e.ERR.endTagWithoutMatchingOpenElement);
  }
}
function k0(e, u) {
  const t = u.type === Re.TokenType.EOF ? $e.ERR.openElementsLeftAfterEof : $e.ERR.disallowedContentInNoscriptInHead;
  e._err(u, t), e.openElements.pop(), e.insertionMode = S.IN_HEAD, e._processToken(u);
}
function bp(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.BODY: {
      e._insertElement(u, f.NS.HTML), e.framesetOk = !1, e.insertionMode = S.IN_BODY;
      break;
    }
    case f.TAG_ID.FRAMESET: {
      e._insertElement(u, f.NS.HTML), e.insertionMode = S.IN_FRAMESET;
      break;
    }
    case f.TAG_ID.BASE:
    case f.TAG_ID.BASEFONT:
    case f.TAG_ID.BGSOUND:
    case f.TAG_ID.LINK:
    case f.TAG_ID.META:
    case f.TAG_ID.NOFRAMES:
    case f.TAG_ID.SCRIPT:
    case f.TAG_ID.STYLE:
    case f.TAG_ID.TEMPLATE:
    case f.TAG_ID.TITLE: {
      e._err(u, $e.ERR.abandonedHeadElementChild), e.openElements.push(e.headElement, f.TAG_ID.HEAD), wu(e, u), e.openElements.remove(e.headElement);
      break;
    }
    case f.TAG_ID.HEAD: {
      e._err(u, $e.ERR.misplacedStartTagForHeadElement);
      break;
    }
    default:
      B0(e, u);
  }
}
function hp(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.BODY:
    case f.TAG_ID.HTML:
    case f.TAG_ID.BR: {
      B0(e, u);
      break;
    }
    case f.TAG_ID.TEMPLATE: {
      Ut(e, u);
      break;
    }
    default:
      e._err(u, $e.ERR.endTagWithoutMatchingOpenElement);
  }
}
function B0(e, u) {
  e._insertFakeElement(f.TAG_NAMES.BODY, f.TAG_ID.BODY), e.insertionMode = S.IN_BODY, Ua(e, u);
}
function Ua(e, u) {
  switch (u.type) {
    case Re.TokenType.CHARACTER: {
      u1(e, u);
      break;
    }
    case Re.TokenType.WHITESPACE_CHARACTER: {
      e1(e, u);
      break;
    }
    case Re.TokenType.COMMENT: {
      Jn(e, u);
      break;
    }
    case Re.TokenType.START_TAG: {
      Ye(e, u);
      break;
    }
    case Re.TokenType.END_TAG: {
      Ha(e, u);
      break;
    }
    case Re.TokenType.EOF: {
      n1(e, u);
      break;
    }
  }
}
function e1(e, u) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(u);
}
function u1(e, u) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(u), e.framesetOk = !1;
}
function pp(e, u) {
  e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], u.attrs);
}
function mp(e, u) {
  const t = e.openElements.tryPeekProperlyNestedBodyElement();
  t && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(t, u.attrs));
}
function gp(e, u) {
  const t = e.openElements.tryPeekProperlyNestedBodyElement();
  e.framesetOk && t && (e.treeAdapter.detachNode(t), e.openElements.popAllUpToHtmlElement(), e._insertElement(u, f.NS.HTML), e.insertionMode = S.IN_FRAMESET);
}
function Ep(e, u) {
  e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), e._insertElement(u, f.NS.HTML);
}
function Tp(e, u) {
  e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), (0, f.isNumberedHeader)(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(u, f.NS.HTML);
}
function _p(e, u) {
  e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), e._insertElement(u, f.NS.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function yp(e, u) {
  const t = e.openElements.tmplCount > 0;
  (!e.formElement || t) && (e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), e._insertElement(u, f.NS.HTML), t || (e.formElement = e.openElements.current));
}
function Ap(e, u) {
  e.framesetOk = !1;
  const t = u.tagID;
  for (let r = e.openElements.stackTop; r >= 0; r--) {
    const a = e.openElements.tagIDs[r];
    if (t === f.TAG_ID.LI && a === f.TAG_ID.LI || (t === f.TAG_ID.DD || t === f.TAG_ID.DT) && (a === f.TAG_ID.DD || a === f.TAG_ID.DT)) {
      e.openElements.generateImpliedEndTagsWithExclusion(a), e.openElements.popUntilTagNamePopped(a);
      break;
    }
    if (a !== f.TAG_ID.ADDRESS && a !== f.TAG_ID.DIV && a !== f.TAG_ID.P && e._isSpecialElement(e.openElements.items[r], a))
      break;
  }
  e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), e._insertElement(u, f.NS.HTML);
}
function vp(e, u) {
  e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), e._insertElement(u, f.NS.HTML), e.tokenizer.state = Ke.TokenizerMode.PLAINTEXT;
}
function xp(e, u) {
  e.openElements.hasInScope(f.TAG_ID.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(f.TAG_ID.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(u, f.NS.HTML), e.framesetOk = !1;
}
function Np(e, u) {
  const t = e.activeFormattingElements.getElementEntryInScopeWithTagName(f.TAG_NAMES.A);
  t && (Ki(e, u), e.openElements.remove(t.element), e.activeFormattingElements.removeEntry(t)), e._reconstructActiveFormattingElements(), e._insertElement(u, f.NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, u);
}
function Ip(e, u) {
  e._reconstructActiveFormattingElements(), e._insertElement(u, f.NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, u);
}
function Dp(e, u) {
  e._reconstructActiveFormattingElements(), e.openElements.hasInScope(f.TAG_ID.NOBR) && (Ki(e, u), e._reconstructActiveFormattingElements()), e._insertElement(u, f.NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, u);
}
function Cp(e, u) {
  e._reconstructActiveFormattingElements(), e._insertElement(u, f.NS.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function Sp(e, u) {
  e.treeAdapter.getDocumentMode(e.document) !== f.DOCUMENT_MODE.QUIRKS && e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), e._insertElement(u, f.NS.HTML), e.framesetOk = !1, e.insertionMode = S.IN_TABLE;
}
function t1(e, u) {
  e._reconstructActiveFormattingElements(), e._appendElement(u, f.NS.HTML), e.framesetOk = !1, u.ackSelfClosing = !0;
}
function r1(e) {
  const u = (0, Re.getTokenAttr)(e, f.ATTRS.TYPE);
  return u != null && u.toLowerCase() === Y6;
}
function Op(e, u) {
  e._reconstructActiveFormattingElements(), e._appendElement(u, f.NS.HTML), r1(u) || (e.framesetOk = !1), u.ackSelfClosing = !0;
}
function Pp(e, u) {
  e._appendElement(u, f.NS.HTML), u.ackSelfClosing = !0;
}
function Lp(e, u) {
  e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), e._appendElement(u, f.NS.HTML), e.framesetOk = !1, u.ackSelfClosing = !0;
}
function wp(e, u) {
  u.tagName = f.TAG_NAMES.IMG, u.tagID = f.TAG_ID.IMG, t1(e, u);
}
function Rp(e, u) {
  e._insertElement(u, f.NS.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Ke.TokenizerMode.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = S.TEXT;
}
function Mp(e, u) {
  e.openElements.hasInButtonScope(f.TAG_ID.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(u, Ke.TokenizerMode.RAWTEXT);
}
function kp(e, u) {
  e.framesetOk = !1, e._switchToTextParsing(u, Ke.TokenizerMode.RAWTEXT);
}
function Vc(e, u) {
  e._switchToTextParsing(u, Ke.TokenizerMode.RAWTEXT);
}
function Bp(e, u) {
  e._reconstructActiveFormattingElements(), e._insertElement(u, f.NS.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === S.IN_TABLE || e.insertionMode === S.IN_CAPTION || e.insertionMode === S.IN_TABLE_BODY || e.insertionMode === S.IN_ROW || e.insertionMode === S.IN_CELL ? S.IN_SELECT_IN_TABLE : S.IN_SELECT;
}
function Up(e, u) {
  e.openElements.currentTagId === f.TAG_ID.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(u, f.NS.HTML);
}
function Hp(e, u) {
  e.openElements.hasInScope(f.TAG_ID.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(u, f.NS.HTML);
}
function Fp(e, u) {
  e.openElements.hasInScope(f.TAG_ID.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(f.TAG_ID.RTC), e._insertElement(u, f.NS.HTML);
}
function qp(e, u) {
  e._reconstructActiveFormattingElements(), Uu.adjustTokenMathMLAttrs(u), Uu.adjustTokenXMLAttrs(u), u.selfClosing ? e._appendElement(u, f.NS.MATHML) : e._insertElement(u, f.NS.MATHML), u.ackSelfClosing = !0;
}
function Gp(e, u) {
  e._reconstructActiveFormattingElements(), Uu.adjustTokenSVGAttrs(u), Uu.adjustTokenXMLAttrs(u), u.selfClosing ? e._appendElement(u, f.NS.SVG) : e._insertElement(u, f.NS.SVG), u.ackSelfClosing = !0;
}
function Yc(e, u) {
  e._reconstructActiveFormattingElements(), e._insertElement(u, f.NS.HTML);
}
function Ye(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.I:
    case f.TAG_ID.S:
    case f.TAG_ID.B:
    case f.TAG_ID.U:
    case f.TAG_ID.EM:
    case f.TAG_ID.TT:
    case f.TAG_ID.BIG:
    case f.TAG_ID.CODE:
    case f.TAG_ID.FONT:
    case f.TAG_ID.SMALL:
    case f.TAG_ID.STRIKE:
    case f.TAG_ID.STRONG: {
      Ip(e, u);
      break;
    }
    case f.TAG_ID.A: {
      Np(e, u);
      break;
    }
    case f.TAG_ID.H1:
    case f.TAG_ID.H2:
    case f.TAG_ID.H3:
    case f.TAG_ID.H4:
    case f.TAG_ID.H5:
    case f.TAG_ID.H6: {
      Tp(e, u);
      break;
    }
    case f.TAG_ID.P:
    case f.TAG_ID.DL:
    case f.TAG_ID.OL:
    case f.TAG_ID.UL:
    case f.TAG_ID.DIV:
    case f.TAG_ID.DIR:
    case f.TAG_ID.NAV:
    case f.TAG_ID.MAIN:
    case f.TAG_ID.MENU:
    case f.TAG_ID.ASIDE:
    case f.TAG_ID.CENTER:
    case f.TAG_ID.FIGURE:
    case f.TAG_ID.FOOTER:
    case f.TAG_ID.HEADER:
    case f.TAG_ID.HGROUP:
    case f.TAG_ID.DIALOG:
    case f.TAG_ID.DETAILS:
    case f.TAG_ID.ADDRESS:
    case f.TAG_ID.ARTICLE:
    case f.TAG_ID.SECTION:
    case f.TAG_ID.SUMMARY:
    case f.TAG_ID.FIELDSET:
    case f.TAG_ID.BLOCKQUOTE:
    case f.TAG_ID.FIGCAPTION: {
      Ep(e, u);
      break;
    }
    case f.TAG_ID.LI:
    case f.TAG_ID.DD:
    case f.TAG_ID.DT: {
      Ap(e, u);
      break;
    }
    case f.TAG_ID.BR:
    case f.TAG_ID.IMG:
    case f.TAG_ID.WBR:
    case f.TAG_ID.AREA:
    case f.TAG_ID.EMBED:
    case f.TAG_ID.KEYGEN: {
      t1(e, u);
      break;
    }
    case f.TAG_ID.HR: {
      Lp(e, u);
      break;
    }
    case f.TAG_ID.RB:
    case f.TAG_ID.RTC: {
      Hp(e, u);
      break;
    }
    case f.TAG_ID.RT:
    case f.TAG_ID.RP: {
      Fp(e, u);
      break;
    }
    case f.TAG_ID.PRE:
    case f.TAG_ID.LISTING: {
      _p(e, u);
      break;
    }
    case f.TAG_ID.XMP: {
      Mp(e, u);
      break;
    }
    case f.TAG_ID.SVG: {
      Gp(e, u);
      break;
    }
    case f.TAG_ID.HTML: {
      pp(e, u);
      break;
    }
    case f.TAG_ID.BASE:
    case f.TAG_ID.LINK:
    case f.TAG_ID.META:
    case f.TAG_ID.STYLE:
    case f.TAG_ID.TITLE:
    case f.TAG_ID.SCRIPT:
    case f.TAG_ID.BGSOUND:
    case f.TAG_ID.BASEFONT:
    case f.TAG_ID.TEMPLATE: {
      wu(e, u);
      break;
    }
    case f.TAG_ID.BODY: {
      mp(e, u);
      break;
    }
    case f.TAG_ID.FORM: {
      yp(e, u);
      break;
    }
    case f.TAG_ID.NOBR: {
      Dp(e, u);
      break;
    }
    case f.TAG_ID.MATH: {
      qp(e, u);
      break;
    }
    case f.TAG_ID.TABLE: {
      Sp(e, u);
      break;
    }
    case f.TAG_ID.INPUT: {
      Op(e, u);
      break;
    }
    case f.TAG_ID.PARAM:
    case f.TAG_ID.TRACK:
    case f.TAG_ID.SOURCE: {
      Pp(e, u);
      break;
    }
    case f.TAG_ID.IMAGE: {
      wp(e, u);
      break;
    }
    case f.TAG_ID.BUTTON: {
      xp(e, u);
      break;
    }
    case f.TAG_ID.APPLET:
    case f.TAG_ID.OBJECT:
    case f.TAG_ID.MARQUEE: {
      Cp(e, u);
      break;
    }
    case f.TAG_ID.IFRAME: {
      kp(e, u);
      break;
    }
    case f.TAG_ID.SELECT: {
      Bp(e, u);
      break;
    }
    case f.TAG_ID.OPTION:
    case f.TAG_ID.OPTGROUP: {
      Up(e, u);
      break;
    }
    case f.TAG_ID.NOEMBED: {
      Vc(e, u);
      break;
    }
    case f.TAG_ID.FRAMESET: {
      gp(e, u);
      break;
    }
    case f.TAG_ID.TEXTAREA: {
      Rp(e, u);
      break;
    }
    case f.TAG_ID.NOSCRIPT: {
      e.options.scriptingEnabled ? Vc(e, u) : Yc(e, u);
      break;
    }
    case f.TAG_ID.PLAINTEXT: {
      vp(e, u);
      break;
    }
    case f.TAG_ID.COL:
    case f.TAG_ID.TH:
    case f.TAG_ID.TD:
    case f.TAG_ID.TR:
    case f.TAG_ID.HEAD:
    case f.TAG_ID.FRAME:
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.THEAD:
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.COLGROUP:
      break;
    default:
      Yc(e, u);
  }
}
function jp(e, u) {
  if (e.openElements.hasInScope(f.TAG_ID.BODY) && (e.insertionMode = S.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
    const t = e.openElements.tryPeekProperlyNestedBodyElement();
    t && e._setEndLocation(t, u);
  }
}
function $p(e, u) {
  e.openElements.hasInScope(f.TAG_ID.BODY) && (e.insertionMode = S.AFTER_BODY, b1(e, u));
}
function Vp(e, u) {
  const t = u.tagID;
  e.openElements.hasInScope(t) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(t));
}
function Yp(e) {
  const u = e.openElements.tmplCount > 0, { formElement: t } = e;
  u || (e.formElement = null), (t || u) && e.openElements.hasInScope(f.TAG_ID.FORM) && (e.openElements.generateImpliedEndTags(), u ? e.openElements.popUntilTagNamePopped(f.TAG_ID.FORM) : t && e.openElements.remove(t));
}
function Xp(e) {
  e.openElements.hasInButtonScope(f.TAG_ID.P) || e._insertFakeElement(f.TAG_NAMES.P, f.TAG_ID.P), e._closePElement();
}
function Wp(e) {
  e.openElements.hasInListItemScope(f.TAG_ID.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(f.TAG_ID.LI), e.openElements.popUntilTagNamePopped(f.TAG_ID.LI));
}
function zp(e, u) {
  const t = u.tagID;
  e.openElements.hasInScope(t) && (e.openElements.generateImpliedEndTagsWithExclusion(t), e.openElements.popUntilTagNamePopped(t));
}
function Qp(e) {
  e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function Kp(e, u) {
  const t = u.tagID;
  e.openElements.hasInScope(t) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(t), e.activeFormattingElements.clearToLastMarker());
}
function Jp(e) {
  e._reconstructActiveFormattingElements(), e._insertFakeElement(f.TAG_NAMES.BR, f.TAG_ID.BR), e.openElements.pop(), e.framesetOk = !1;
}
function a1(e, u) {
  const t = u.tagName, r = u.tagID;
  for (let a = e.openElements.stackTop; a > 0; a--) {
    const n = e.openElements.items[a], i = e.openElements.tagIDs[a];
    if (r === i && (r !== f.TAG_ID.UNKNOWN || e.treeAdapter.getTagName(n) === t)) {
      e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= a && e.openElements.shortenToLength(a);
      break;
    }
    if (e._isSpecialElement(n, i))
      break;
  }
}
function Ha(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.A:
    case f.TAG_ID.B:
    case f.TAG_ID.I:
    case f.TAG_ID.S:
    case f.TAG_ID.U:
    case f.TAG_ID.EM:
    case f.TAG_ID.TT:
    case f.TAG_ID.BIG:
    case f.TAG_ID.CODE:
    case f.TAG_ID.FONT:
    case f.TAG_ID.NOBR:
    case f.TAG_ID.SMALL:
    case f.TAG_ID.STRIKE:
    case f.TAG_ID.STRONG: {
      Ki(e, u);
      break;
    }
    case f.TAG_ID.P: {
      Xp(e);
      break;
    }
    case f.TAG_ID.DL:
    case f.TAG_ID.UL:
    case f.TAG_ID.OL:
    case f.TAG_ID.DIR:
    case f.TAG_ID.DIV:
    case f.TAG_ID.NAV:
    case f.TAG_ID.PRE:
    case f.TAG_ID.MAIN:
    case f.TAG_ID.MENU:
    case f.TAG_ID.ASIDE:
    case f.TAG_ID.BUTTON:
    case f.TAG_ID.CENTER:
    case f.TAG_ID.FIGURE:
    case f.TAG_ID.FOOTER:
    case f.TAG_ID.HEADER:
    case f.TAG_ID.HGROUP:
    case f.TAG_ID.DIALOG:
    case f.TAG_ID.ADDRESS:
    case f.TAG_ID.ARTICLE:
    case f.TAG_ID.DETAILS:
    case f.TAG_ID.SECTION:
    case f.TAG_ID.SUMMARY:
    case f.TAG_ID.LISTING:
    case f.TAG_ID.FIELDSET:
    case f.TAG_ID.BLOCKQUOTE:
    case f.TAG_ID.FIGCAPTION: {
      Vp(e, u);
      break;
    }
    case f.TAG_ID.LI: {
      Wp(e);
      break;
    }
    case f.TAG_ID.DD:
    case f.TAG_ID.DT: {
      zp(e, u);
      break;
    }
    case f.TAG_ID.H1:
    case f.TAG_ID.H2:
    case f.TAG_ID.H3:
    case f.TAG_ID.H4:
    case f.TAG_ID.H5:
    case f.TAG_ID.H6: {
      Qp(e);
      break;
    }
    case f.TAG_ID.BR: {
      Jp(e);
      break;
    }
    case f.TAG_ID.BODY: {
      jp(e, u);
      break;
    }
    case f.TAG_ID.HTML: {
      $p(e, u);
      break;
    }
    case f.TAG_ID.FORM: {
      Yp(e);
      break;
    }
    case f.TAG_ID.APPLET:
    case f.TAG_ID.OBJECT:
    case f.TAG_ID.MARQUEE: {
      Kp(e, u);
      break;
    }
    case f.TAG_ID.TEMPLATE: {
      Ut(e, u);
      break;
    }
    default:
      a1(e, u);
  }
}
function n1(e, u) {
  e.tmplInsertionModeStack.length > 0 ? f1(e, u) : Ji(e, u);
}
function Zp(e, u) {
  var t;
  u.tagID === f.TAG_ID.SCRIPT && ((t = e.scriptHandler) === null || t === void 0 || t.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function e4(e, u) {
  e._err(u, $e.ERR.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(u);
}
function bn(e, u) {
  if (Zd.has(e.openElements.currentTagId))
    switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = S.IN_TABLE_TEXT, u.type) {
      case Re.TokenType.CHARACTER: {
        c1(e, u);
        break;
      }
      case Re.TokenType.WHITESPACE_CHARACTER: {
        i1(e, u);
        break;
      }
    }
  else
    sr(e, u);
}
function u4(e, u) {
  e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(u, f.NS.HTML), e.insertionMode = S.IN_CAPTION;
}
function t4(e, u) {
  e.openElements.clearBackToTableContext(), e._insertElement(u, f.NS.HTML), e.insertionMode = S.IN_COLUMN_GROUP;
}
function r4(e, u) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(f.TAG_NAMES.COLGROUP, f.TAG_ID.COLGROUP), e.insertionMode = S.IN_COLUMN_GROUP, Zi(e, u);
}
function a4(e, u) {
  e.openElements.clearBackToTableContext(), e._insertElement(u, f.NS.HTML), e.insertionMode = S.IN_TABLE_BODY;
}
function n4(e, u) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(f.TAG_NAMES.TBODY, f.TAG_ID.TBODY), e.insertionMode = S.IN_TABLE_BODY, Fa(e, u);
}
function i4(e, u) {
  e.openElements.hasInTableScope(f.TAG_ID.TABLE) && (e.openElements.popUntilTagNamePopped(f.TAG_ID.TABLE), e._resetInsertionMode(), e._processStartTag(u));
}
function c4(e, u) {
  r1(u) ? e._appendElement(u, f.NS.HTML) : sr(e, u), u.ackSelfClosing = !0;
}
function s4(e, u) {
  !e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(u, f.NS.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function l0(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.TD:
    case f.TAG_ID.TH:
    case f.TAG_ID.TR: {
      n4(e, u);
      break;
    }
    case f.TAG_ID.STYLE:
    case f.TAG_ID.SCRIPT:
    case f.TAG_ID.TEMPLATE: {
      wu(e, u);
      break;
    }
    case f.TAG_ID.COL: {
      r4(e, u);
      break;
    }
    case f.TAG_ID.FORM: {
      s4(e, u);
      break;
    }
    case f.TAG_ID.TABLE: {
      i4(e, u);
      break;
    }
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.THEAD: {
      a4(e, u);
      break;
    }
    case f.TAG_ID.INPUT: {
      c4(e, u);
      break;
    }
    case f.TAG_ID.CAPTION: {
      u4(e, u);
      break;
    }
    case f.TAG_ID.COLGROUP: {
      t4(e, u);
      break;
    }
    default:
      sr(e, u);
  }
}
function j0(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.TABLE: {
      e.openElements.hasInTableScope(f.TAG_ID.TABLE) && (e.openElements.popUntilTagNamePopped(f.TAG_ID.TABLE), e._resetInsertionMode());
      break;
    }
    case f.TAG_ID.TEMPLATE: {
      Ut(e, u);
      break;
    }
    case f.TAG_ID.BODY:
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.COL:
    case f.TAG_ID.COLGROUP:
    case f.TAG_ID.HTML:
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TD:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.TH:
    case f.TAG_ID.THEAD:
    case f.TAG_ID.TR:
      break;
    default:
      sr(e, u);
  }
}
function sr(e, u) {
  const t = e.fosterParentingEnabled;
  e.fosterParentingEnabled = !0, Ua(e, u), e.fosterParentingEnabled = t;
}
function i1(e, u) {
  e.pendingCharacterTokens.push(u);
}
function c1(e, u) {
  e.pendingCharacterTokens.push(u), e.hasNonWhitespacePendingCharacterToken = !0;
}
function x0(e, u) {
  let t = 0;
  if (e.hasNonWhitespacePendingCharacterToken)
    for (; t < e.pendingCharacterTokens.length; t++)
      sr(e, e.pendingCharacterTokens[t]);
  else
    for (; t < e.pendingCharacterTokens.length; t++)
      e._insertCharacters(e.pendingCharacterTokens[t]);
  e.insertionMode = e.originalInsertionMode, e._processToken(u);
}
const s1 = /* @__PURE__ */ new Set([f.TAG_ID.CAPTION, f.TAG_ID.COL, f.TAG_ID.COLGROUP, f.TAG_ID.TBODY, f.TAG_ID.TD, f.TAG_ID.TFOOT, f.TAG_ID.TH, f.TAG_ID.THEAD, f.TAG_ID.TR]);
function o4(e, u) {
  const t = u.tagID;
  s1.has(t) ? e.openElements.hasInTableScope(f.TAG_ID.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(f.TAG_ID.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = S.IN_TABLE, l0(e, u)) : Ye(e, u);
}
function d4(e, u) {
  const t = u.tagID;
  switch (t) {
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.TABLE: {
      e.openElements.hasInTableScope(f.TAG_ID.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(f.TAG_ID.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = S.IN_TABLE, t === f.TAG_ID.TABLE && j0(e, u));
      break;
    }
    case f.TAG_ID.BODY:
    case f.TAG_ID.COL:
    case f.TAG_ID.COLGROUP:
    case f.TAG_ID.HTML:
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TD:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.TH:
    case f.TAG_ID.THEAD:
    case f.TAG_ID.TR:
      break;
    default:
      Ha(e, u);
  }
}
function Zi(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.COL: {
      e._appendElement(u, f.NS.HTML), u.ackSelfClosing = !0;
      break;
    }
    case f.TAG_ID.TEMPLATE: {
      wu(e, u);
      break;
    }
    default:
      ea(e, u);
  }
}
function l4(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.COLGROUP: {
      e.openElements.currentTagId === f.TAG_ID.COLGROUP && (e.openElements.pop(), e.insertionMode = S.IN_TABLE);
      break;
    }
    case f.TAG_ID.TEMPLATE: {
      Ut(e, u);
      break;
    }
    case f.TAG_ID.COL:
      break;
    default:
      ea(e, u);
  }
}
function ea(e, u) {
  e.openElements.currentTagId === f.TAG_ID.COLGROUP && (e.openElements.pop(), e.insertionMode = S.IN_TABLE, e._processToken(u));
}
function Fa(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.TR: {
      e.openElements.clearBackToTableBodyContext(), e._insertElement(u, f.NS.HTML), e.insertionMode = S.IN_ROW;
      break;
    }
    case f.TAG_ID.TH:
    case f.TAG_ID.TD: {
      e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(f.TAG_NAMES.TR, f.TAG_ID.TR), e.insertionMode = S.IN_ROW, qa(e, u);
      break;
    }
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.COL:
    case f.TAG_ID.COLGROUP:
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.THEAD: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = S.IN_TABLE, l0(e, u));
      break;
    }
    default:
      l0(e, u);
  }
}
function Zn(e, u) {
  const t = u.tagID;
  switch (u.tagID) {
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.THEAD: {
      e.openElements.hasInTableScope(t) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = S.IN_TABLE);
      break;
    }
    case f.TAG_ID.TABLE: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = S.IN_TABLE, j0(e, u));
      break;
    }
    case f.TAG_ID.BODY:
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.COL:
    case f.TAG_ID.COLGROUP:
    case f.TAG_ID.HTML:
    case f.TAG_ID.TD:
    case f.TAG_ID.TH:
    case f.TAG_ID.TR:
      break;
    default:
      j0(e, u);
  }
}
function qa(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.TH:
    case f.TAG_ID.TD: {
      e.openElements.clearBackToTableRowContext(), e._insertElement(u, f.NS.HTML), e.insertionMode = S.IN_CELL, e.activeFormattingElements.insertMarker();
      break;
    }
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.COL:
    case f.TAG_ID.COLGROUP:
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.THEAD:
    case f.TAG_ID.TR: {
      e.openElements.hasInTableScope(f.TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = S.IN_TABLE_BODY, Fa(e, u));
      break;
    }
    default:
      l0(e, u);
  }
}
function o1(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.TR: {
      e.openElements.hasInTableScope(f.TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = S.IN_TABLE_BODY);
      break;
    }
    case f.TAG_ID.TABLE: {
      e.openElements.hasInTableScope(f.TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = S.IN_TABLE_BODY, Zn(e, u));
      break;
    }
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.THEAD: {
      (e.openElements.hasInTableScope(u.tagID) || e.openElements.hasInTableScope(f.TAG_ID.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = S.IN_TABLE_BODY, Zn(e, u));
      break;
    }
    case f.TAG_ID.BODY:
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.COL:
    case f.TAG_ID.COLGROUP:
    case f.TAG_ID.HTML:
    case f.TAG_ID.TD:
    case f.TAG_ID.TH:
      break;
    default:
      j0(e, u);
  }
}
function f4(e, u) {
  const t = u.tagID;
  s1.has(t) ? (e.openElements.hasInTableScope(f.TAG_ID.TD) || e.openElements.hasInTableScope(f.TAG_ID.TH)) && (e._closeTableCell(), qa(e, u)) : Ye(e, u);
}
function b4(e, u) {
  const t = u.tagID;
  switch (t) {
    case f.TAG_ID.TD:
    case f.TAG_ID.TH: {
      e.openElements.hasInTableScope(t) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(t), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = S.IN_ROW);
      break;
    }
    case f.TAG_ID.TABLE:
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.THEAD:
    case f.TAG_ID.TR: {
      e.openElements.hasInTableScope(t) && (e._closeTableCell(), o1(e, u));
      break;
    }
    case f.TAG_ID.BODY:
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.COL:
    case f.TAG_ID.COLGROUP:
    case f.TAG_ID.HTML:
      break;
    default:
      Ha(e, u);
  }
}
function d1(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.OPTION: {
      e.openElements.currentTagId === f.TAG_ID.OPTION && e.openElements.pop(), e._insertElement(u, f.NS.HTML);
      break;
    }
    case f.TAG_ID.OPTGROUP: {
      e.openElements.currentTagId === f.TAG_ID.OPTION && e.openElements.pop(), e.openElements.currentTagId === f.TAG_ID.OPTGROUP && e.openElements.pop(), e._insertElement(u, f.NS.HTML);
      break;
    }
    case f.TAG_ID.INPUT:
    case f.TAG_ID.KEYGEN:
    case f.TAG_ID.TEXTAREA:
    case f.TAG_ID.SELECT: {
      e.openElements.hasInSelectScope(f.TAG_ID.SELECT) && (e.openElements.popUntilTagNamePopped(f.TAG_ID.SELECT), e._resetInsertionMode(), u.tagID !== f.TAG_ID.SELECT && e._processStartTag(u));
      break;
    }
    case f.TAG_ID.SCRIPT:
    case f.TAG_ID.TEMPLATE: {
      wu(e, u);
      break;
    }
  }
}
function l1(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.OPTGROUP: {
      e.openElements.stackTop > 0 && e.openElements.currentTagId === f.TAG_ID.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === f.TAG_ID.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === f.TAG_ID.OPTGROUP && e.openElements.pop();
      break;
    }
    case f.TAG_ID.OPTION: {
      e.openElements.currentTagId === f.TAG_ID.OPTION && e.openElements.pop();
      break;
    }
    case f.TAG_ID.SELECT: {
      e.openElements.hasInSelectScope(f.TAG_ID.SELECT) && (e.openElements.popUntilTagNamePopped(f.TAG_ID.SELECT), e._resetInsertionMode());
      break;
    }
    case f.TAG_ID.TEMPLATE: {
      Ut(e, u);
      break;
    }
  }
}
function h4(e, u) {
  const t = u.tagID;
  t === f.TAG_ID.CAPTION || t === f.TAG_ID.TABLE || t === f.TAG_ID.TBODY || t === f.TAG_ID.TFOOT || t === f.TAG_ID.THEAD || t === f.TAG_ID.TR || t === f.TAG_ID.TD || t === f.TAG_ID.TH ? (e.openElements.popUntilTagNamePopped(f.TAG_ID.SELECT), e._resetInsertionMode(), e._processStartTag(u)) : d1(e, u);
}
function p4(e, u) {
  const t = u.tagID;
  t === f.TAG_ID.CAPTION || t === f.TAG_ID.TABLE || t === f.TAG_ID.TBODY || t === f.TAG_ID.TFOOT || t === f.TAG_ID.THEAD || t === f.TAG_ID.TR || t === f.TAG_ID.TD || t === f.TAG_ID.TH ? e.openElements.hasInTableScope(t) && (e.openElements.popUntilTagNamePopped(f.TAG_ID.SELECT), e._resetInsertionMode(), e.onEndTag(u)) : l1(e, u);
}
function m4(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.BASE:
    case f.TAG_ID.BASEFONT:
    case f.TAG_ID.BGSOUND:
    case f.TAG_ID.LINK:
    case f.TAG_ID.META:
    case f.TAG_ID.NOFRAMES:
    case f.TAG_ID.SCRIPT:
    case f.TAG_ID.STYLE:
    case f.TAG_ID.TEMPLATE:
    case f.TAG_ID.TITLE: {
      wu(e, u);
      break;
    }
    case f.TAG_ID.CAPTION:
    case f.TAG_ID.COLGROUP:
    case f.TAG_ID.TBODY:
    case f.TAG_ID.TFOOT:
    case f.TAG_ID.THEAD: {
      e.tmplInsertionModeStack[0] = S.IN_TABLE, e.insertionMode = S.IN_TABLE, l0(e, u);
      break;
    }
    case f.TAG_ID.COL: {
      e.tmplInsertionModeStack[0] = S.IN_COLUMN_GROUP, e.insertionMode = S.IN_COLUMN_GROUP, Zi(e, u);
      break;
    }
    case f.TAG_ID.TR: {
      e.tmplInsertionModeStack[0] = S.IN_TABLE_BODY, e.insertionMode = S.IN_TABLE_BODY, Fa(e, u);
      break;
    }
    case f.TAG_ID.TD:
    case f.TAG_ID.TH: {
      e.tmplInsertionModeStack[0] = S.IN_ROW, e.insertionMode = S.IN_ROW, qa(e, u);
      break;
    }
    default:
      e.tmplInsertionModeStack[0] = S.IN_BODY, e.insertionMode = S.IN_BODY, Ye(e, u);
  }
}
function g4(e, u) {
  u.tagID === f.TAG_ID.TEMPLATE && Ut(e, u);
}
function f1(e, u) {
  e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(f.TAG_ID.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(u)) : Ji(e, u);
}
function E4(e, u) {
  u.tagID === f.TAG_ID.HTML ? Ye(e, u) : ua(e, u);
}
function b1(e, u) {
  var t;
  if (u.tagID === f.TAG_ID.HTML) {
    if (e.fragmentContext || (e.insertionMode = S.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === f.TAG_ID.HTML) {
      e._setEndLocation(e.openElements.items[0], u);
      const r = e.openElements.items[1];
      r && !(!((t = e.treeAdapter.getNodeSourceCodeLocation(r)) === null || t === void 0) && t.endTag) && e._setEndLocation(r, u);
    }
  } else
    ua(e, u);
}
function ua(e, u) {
  e.insertionMode = S.IN_BODY, Ua(e, u);
}
function T4(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.FRAMESET: {
      e._insertElement(u, f.NS.HTML);
      break;
    }
    case f.TAG_ID.FRAME: {
      e._appendElement(u, f.NS.HTML), u.ackSelfClosing = !0;
      break;
    }
    case f.TAG_ID.NOFRAMES: {
      wu(e, u);
      break;
    }
  }
}
function _4(e, u) {
  u.tagID === f.TAG_ID.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== f.TAG_ID.FRAMESET && (e.insertionMode = S.AFTER_FRAMESET));
}
function y4(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.NOFRAMES: {
      wu(e, u);
      break;
    }
  }
}
function A4(e, u) {
  u.tagID === f.TAG_ID.HTML && (e.insertionMode = S.AFTER_AFTER_FRAMESET);
}
function v4(e, u) {
  u.tagID === f.TAG_ID.HTML ? Ye(e, u) : Lr(e, u);
}
function Lr(e, u) {
  e.insertionMode = S.IN_BODY, Ua(e, u);
}
function x4(e, u) {
  switch (u.tagID) {
    case f.TAG_ID.HTML: {
      Ye(e, u);
      break;
    }
    case f.TAG_ID.NOFRAMES: {
      wu(e, u);
      break;
    }
  }
}
function N4(e, u) {
  u.chars = Jd.REPLACEMENT_CHARACTER, e._insertCharacters(u);
}
function I4(e, u) {
  e._insertCharacters(u), e.framesetOk = !1;
}
function h1(e) {
  for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== f.NS.HTML && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current); )
    e.openElements.pop();
}
function D4(e, u) {
  if (Uu.causesExit(u))
    h1(e), e._startTagOutsideForeignContent(u);
  else {
    const t = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(t);
    r === f.NS.MATHML ? Uu.adjustTokenMathMLAttrs(u) : r === f.NS.SVG && (Uu.adjustTokenSVGTagName(u), Uu.adjustTokenSVGAttrs(u)), Uu.adjustTokenXMLAttrs(u), u.selfClosing ? e._appendElement(u, r) : e._insertElement(u, r), u.ackSelfClosing = !0;
  }
}
function C4(e, u) {
  if (u.tagID === f.TAG_ID.P || u.tagID === f.TAG_ID.BR) {
    h1(e), e._endTagOutsideForeignContent(u);
    return;
  }
  for (let t = e.openElements.stackTop; t > 0; t--) {
    const r = e.openElements.items[t];
    if (e.treeAdapter.getNamespaceURI(r) === f.NS.HTML) {
      e._endTagOutsideForeignContent(u);
      break;
    }
    const a = e.treeAdapter.getTagName(r);
    if (a.toLowerCase() === u.tagName) {
      u.tagName = a, e.openElements.shortenToLength(t);
      break;
    }
  }
}
var f0 = {}, p1 = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0, e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var u = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  e.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(a, n) {
    return a.codePointAt(n);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(a, n) {
      return (a.charCodeAt(n) & 64512) === 55296 ? (a.charCodeAt(n) - 55296) * 1024 + a.charCodeAt(n + 1) - 56320 + 65536 : a.charCodeAt(n);
    }
  );
  function t(a) {
    for (var n = "", i = 0, c; (c = e.xmlReplacer.exec(a)) !== null; ) {
      var o = c.index, d = a.charCodeAt(o), s = u.get(d);
      s !== void 0 ? (n += a.substring(i, o) + s, i = o + 1) : (n += "".concat(a.substring(i, o), "&#x").concat((0, e.getCodePoint)(a, o).toString(16), ";"), i = e.xmlReplacer.lastIndex += +((d & 64512) === 55296));
    }
    return n + a.substr(i);
  }
  e.encodeXML = t, e.escape = t;
  function r(a, n) {
    return function(c) {
      for (var o, d = 0, s = ""; o = a.exec(c); )
        d !== o.index && (s += c.substring(d, o.index)), s += n.get(o[0].charCodeAt(0)), d = o.index + 1;
      return s + c.substring(d);
    };
  }
  e.escapeUTF8 = r(/[&<>'"]/g, u), e.escapeAttribute = r(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), e.escapeText = r(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(p1);
Object.defineProperty(f0, "__esModule", { value: !0 });
f0.serializeOuter = f0.serialize = void 0;
const Ee = Zu, m1 = p1, S4 = Ba, O4 = /* @__PURE__ */ new Set([
  Ee.TAG_NAMES.AREA,
  Ee.TAG_NAMES.BASE,
  Ee.TAG_NAMES.BASEFONT,
  Ee.TAG_NAMES.BGSOUND,
  Ee.TAG_NAMES.BR,
  Ee.TAG_NAMES.COL,
  Ee.TAG_NAMES.EMBED,
  Ee.TAG_NAMES.FRAME,
  Ee.TAG_NAMES.HR,
  Ee.TAG_NAMES.IMG,
  Ee.TAG_NAMES.INPUT,
  Ee.TAG_NAMES.KEYGEN,
  Ee.TAG_NAMES.LINK,
  Ee.TAG_NAMES.META,
  Ee.TAG_NAMES.PARAM,
  Ee.TAG_NAMES.SOURCE,
  Ee.TAG_NAMES.TRACK,
  Ee.TAG_NAMES.WBR
]);
function g1(e, u) {
  return u.treeAdapter.isElementNode(e) && u.treeAdapter.getNamespaceURI(e) === Ee.NS.HTML && O4.has(u.treeAdapter.getTagName(e));
}
const E1 = { treeAdapter: S4.defaultTreeAdapter, scriptingEnabled: !0 };
function P4(e, u) {
  const t = Object.assign(Object.assign({}, E1), u);
  return g1(e, t) ? "" : T1(e, t);
}
f0.serialize = P4;
function L4(e, u) {
  const t = Object.assign(Object.assign({}, E1), u);
  return _1(e, t);
}
f0.serializeOuter = L4;
function T1(e, u) {
  let t = "";
  const r = u.treeAdapter.isElementNode(e) && u.treeAdapter.getTagName(e) === Ee.TAG_NAMES.TEMPLATE && u.treeAdapter.getNamespaceURI(e) === Ee.NS.HTML ? u.treeAdapter.getTemplateContent(e) : e, a = u.treeAdapter.getChildNodes(r);
  if (a)
    for (const n of a)
      t += _1(n, u);
  return t;
}
function _1(e, u) {
  return u.treeAdapter.isElementNode(e) ? w4(e, u) : u.treeAdapter.isTextNode(e) ? M4(e, u) : u.treeAdapter.isCommentNode(e) ? k4(e, u) : u.treeAdapter.isDocumentTypeNode(e) ? B4(e, u) : "";
}
function w4(e, u) {
  const t = u.treeAdapter.getTagName(e);
  return `<${t}${R4(e, u)}>${g1(e, u) ? "" : `${T1(e, u)}</${t}>`}`;
}
function R4(e, { treeAdapter: u }) {
  let t = "";
  for (const r of u.getAttrList(e)) {
    if (t += " ", !r.namespace)
      t += r.name;
    else
      switch (r.namespace) {
        case Ee.NS.XML: {
          t += `xml:${r.name}`;
          break;
        }
        case Ee.NS.XMLNS: {
          r.name !== "xmlns" && (t += "xmlns:"), t += r.name;
          break;
        }
        case Ee.NS.XLINK: {
          t += `xlink:${r.name}`;
          break;
        }
        default:
          t += `${r.prefix}:${r.name}`;
      }
    t += `="${(0, m1.escapeAttribute)(r.value)}"`;
  }
  return t;
}
function M4(e, u) {
  const { treeAdapter: t } = u, r = t.getTextNodeContent(e), a = t.getParentNode(e), n = a && t.isElementNode(a) && t.getTagName(a);
  return n && t.getNamespaceURI(a) === Ee.NS.HTML && (0, Ee.hasUnescapedText)(n, u.scriptingEnabled) ? r : (0, m1.escapeText)(r);
}
function k4(e, { treeAdapter: u }) {
  return `<!--${u.getCommentNodeContent(e)}-->`;
}
function B4(e, { treeAdapter: u }) {
  return `<!DOCTYPE ${u.getDocumentTypeNodeName(e)}>`;
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.parseFragment = e.parse = e.TokenizerMode = e.Tokenizer = e.Token = e.html = e.foreignContent = e.ErrorCodes = e.serializeOuter = e.serialize = e.Parser = e.defaultTreeAdapter = void 0;
  const u = G0;
  var t = Ba;
  Object.defineProperty(e, "defaultTreeAdapter", { enumerable: !0, get: function() {
    return t.defaultTreeAdapter;
  } });
  var r = G0;
  Object.defineProperty(e, "Parser", { enumerable: !0, get: function() {
    return r.Parser;
  } });
  var a = f0;
  Object.defineProperty(e, "serialize", { enumerable: !0, get: function() {
    return a.serialize;
  } }), Object.defineProperty(e, "serializeOuter", { enumerable: !0, get: function() {
    return a.serializeOuter;
  } });
  var n = cr;
  Object.defineProperty(e, "ErrorCodes", { enumerable: !0, get: function() {
    return n.ERR;
  } }), e.foreignContent = Qi, e.html = Zu, e.Token = Ma;
  var i = Pt;
  Object.defineProperty(e, "Tokenizer", { enumerable: !0, get: function() {
    return i.Tokenizer;
  } }), Object.defineProperty(e, "TokenizerMode", { enumerable: !0, get: function() {
    return i.TokenizerMode;
  } });
  function c(d, s) {
    return u.Parser.parse(d, s);
  }
  e.parse = c;
  function o(d, s, E) {
    typeof d == "string" && (E = s, s = d, d = null);
    const b = u.Parser.getFragmentParser(d, E);
    return b.tokenizer.write(s, !0), b.getFragment();
  }
  e.parseFragment = o;
})(q0);
var y1 = {}, A1 = {}, le = {}, ht = C && C.__extends || function() {
  var e = function(u, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (r[n] = a[n]);
    }, e(u, t);
  };
  return function(u, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(u, t);
    function r() {
      this.constructor = u;
    }
    u.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), U0 = C && C.__assign || function() {
  return U0 = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, U0.apply(this, arguments);
};
Object.defineProperty(le, "__esModule", { value: !0 });
le.cloneNode = le.hasChildren = le.isDocument = le.isDirective = le.isComment = le.isText = le.isCDATA = le.isTag = le.Element = le.Document = le.CDATA = le.NodeWithChildren = le.ProcessingInstruction = le.Comment = le.Text = le.DataNode = le.Node = void 0;
var fu = Le, ec = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(u) {
        this.parent = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(u) {
        this.prev = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(u) {
        this.next = u;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(u) {
      return u === void 0 && (u = !1), uc(this, u);
    }, e;
  }()
);
le.Node = ec;
var Ga = (
  /** @class */
  function(e) {
    ht(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.data = t, r;
    }
    return Object.defineProperty(u.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(ec)
);
le.DataNode = Ga;
var v1 = (
  /** @class */
  function(e) {
    ht(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = fu.ElementType.Text, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Ga)
);
le.Text = v1;
var x1 = (
  /** @class */
  function(e) {
    ht(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = fu.ElementType.Comment, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Ga)
);
le.Comment = x1;
var N1 = (
  /** @class */
  function(e) {
    ht(u, e);
    function u(t, r) {
      var a = e.call(this, r) || this;
      return a.name = t, a.type = fu.ElementType.Directive, a;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Ga)
);
le.ProcessingInstruction = N1;
var ja = (
  /** @class */
  function(e) {
    ht(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.children = t, r;
    }
    return Object.defineProperty(u.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(ec)
);
le.NodeWithChildren = ja;
var I1 = (
  /** @class */
  function(e) {
    ht(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = fu.ElementType.CDATA, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(ja)
);
le.CDATA = I1;
var D1 = (
  /** @class */
  function(e) {
    ht(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = fu.ElementType.Root, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(ja)
);
le.Document = D1;
var C1 = (
  /** @class */
  function(e) {
    ht(u, e);
    function u(t, r, a, n) {
      a === void 0 && (a = []), n === void 0 && (n = t === "script" ? fu.ElementType.Script : t === "style" ? fu.ElementType.Style : fu.ElementType.Tag);
      var i = e.call(this, a) || this;
      return i.name = t, i.attribs = r, i.type = n, i;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(r) {
          var a, n;
          return {
            name: r,
            value: t.attribs[r],
            namespace: (a = t["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[r],
            prefix: (n = t["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(ja)
);
le.Element = C1;
function S1(e) {
  return (0, fu.isTag)(e);
}
le.isTag = S1;
function O1(e) {
  return e.type === fu.ElementType.CDATA;
}
le.isCDATA = O1;
function P1(e) {
  return e.type === fu.ElementType.Text;
}
le.isText = P1;
function L1(e) {
  return e.type === fu.ElementType.Comment;
}
le.isComment = L1;
function w1(e) {
  return e.type === fu.ElementType.Directive;
}
le.isDirective = w1;
function R1(e) {
  return e.type === fu.ElementType.Root;
}
le.isDocument = R1;
function U4(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
le.hasChildren = U4;
function uc(e, u) {
  u === void 0 && (u = !1);
  var t;
  if (P1(e))
    t = new v1(e.data);
  else if (L1(e))
    t = new x1(e.data);
  else if (S1(e)) {
    var r = u ? hn(e.children) : [], a = new C1(e.name, U0({}, e.attribs), r);
    r.forEach(function(o) {
      return o.parent = a;
    }), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = U0({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = U0({}, e["x-attribsPrefix"])), t = a;
  } else if (O1(e)) {
    var r = u ? hn(e.children) : [], n = new I1(r);
    r.forEach(function(d) {
      return d.parent = n;
    }), t = n;
  } else if (R1(e)) {
    var r = u ? hn(e.children) : [], i = new D1(r);
    r.forEach(function(d) {
      return d.parent = i;
    }), e["x-mode"] && (i["x-mode"] = e["x-mode"]), t = i;
  } else if (w1(e)) {
    var c = new N1(e.name, e.data);
    e["x-name"] != null && (c["x-name"] = e["x-name"], c["x-publicId"] = e["x-publicId"], c["x-systemId"] = e["x-systemId"]), t = c;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
le.cloneNode = uc;
function hn(e) {
  for (var u = e.map(function(r) {
    return uc(r, !0);
  }), t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t];
  return u;
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(c, o, d, s) {
    s === void 0 && (s = d);
    var E = Object.getOwnPropertyDescriptor(o, d);
    (!E || ("get" in E ? !o.__esModule : E.writable || E.configurable)) && (E = { enumerable: !0, get: function() {
      return o[d];
    } }), Object.defineProperty(c, s, E);
  } : function(c, o, d, s) {
    s === void 0 && (s = d), c[s] = o[d];
  }), t = C && C.__exportStar || function(c, o) {
    for (var d in c)
      d !== "default" && !Object.prototype.hasOwnProperty.call(o, d) && u(o, c, d);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var r = Le, a = le;
  t(le, e);
  var n = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, i = (
    /** @class */
    function() {
      function c(o, d, s) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (s = d, d = n), typeof o == "object" && (d = o, o = void 0), this.callback = o ?? null, this.options = d ?? n, this.elementCB = s ?? null;
      }
      return c.prototype.onparserinit = function(o) {
        this.parser = o;
      }, c.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, c.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, c.prototype.onerror = function(o) {
        this.handleCallback(o);
      }, c.prototype.onclosetag = function() {
        this.lastNode = null;
        var o = this.tagStack.pop();
        this.options.withEndIndices && (o.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(o);
      }, c.prototype.onopentag = function(o, d) {
        var s = this.options.xmlMode ? r.ElementType.Tag : void 0, E = new a.Element(o, d, void 0, s);
        this.addNode(E), this.tagStack.push(E);
      }, c.prototype.ontext = function(o) {
        var d = this.lastNode;
        if (d && d.type === r.ElementType.Text)
          d.data += o, this.options.withEndIndices && (d.endIndex = this.parser.endIndex);
        else {
          var s = new a.Text(o);
          this.addNode(s), this.lastNode = s;
        }
      }, c.prototype.oncomment = function(o) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += o;
          return;
        }
        var d = new a.Comment(o);
        this.addNode(d), this.lastNode = d;
      }, c.prototype.oncommentend = function() {
        this.lastNode = null;
      }, c.prototype.oncdatastart = function() {
        var o = new a.Text(""), d = new a.CDATA([o]);
        this.addNode(d), o.parent = d, this.lastNode = o;
      }, c.prototype.oncdataend = function() {
        this.lastNode = null;
      }, c.prototype.onprocessinginstruction = function(o, d) {
        var s = new a.ProcessingInstruction(o, d);
        this.addNode(s);
      }, c.prototype.handleCallback = function(o) {
        if (typeof this.callback == "function")
          this.callback(o, this.dom);
        else if (o)
          throw o;
      }, c.prototype.addNode = function(o) {
        var d = this.tagStack[this.tagStack.length - 1], s = d.children[d.children.length - 1];
        this.options.withStartIndices && (o.startIndex = this.parser.startIndex), this.options.withEndIndices && (o.endIndex = this.parser.endIndex), d.children.push(o), s && (o.prev = s, s.next = o), o.parent = d, this.lastNode = null;
      }, c;
    }()
  );
  e.DomHandler = i, e.default = i;
})(A1);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.adapter = e.serializeDoctypeContent = void 0;
  const u = q0, t = A1;
  function r(i) {
    return new t.Text(i);
  }
  function a(i) {
    const c = i.includes('"') ? "'" : '"';
    return c + i + c;
  }
  function n(i, c, o) {
    let d = "!DOCTYPE ";
    return i && (d += i), c ? d += ` PUBLIC ${a(c)}` : o && (d += " SYSTEM"), o && (d += ` ${a(o)}`), d;
  }
  e.serializeDoctypeContent = n, e.adapter = {
    // Re-exports from domhandler
    isCommentNode: t.isComment,
    isElementNode: t.isTag,
    isTextNode: t.isText,
    //Node construction
    createDocument() {
      const i = new t.Document([]);
      return i["x-mode"] = u.html.DOCUMENT_MODE.NO_QUIRKS, i;
    },
    createDocumentFragment() {
      return new t.Document([]);
    },
    createElement(i, c, o) {
      const d = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), E = /* @__PURE__ */ Object.create(null);
      for (let m = 0; m < o.length; m++) {
        const v = o[m].name;
        d[v] = o[m].value, s[v] = o[m].namespace, E[v] = o[m].prefix;
      }
      const b = new t.Element(i, d, []);
      return b.namespace = c, b["x-attribsNamespace"] = s, b["x-attribsPrefix"] = E, b;
    },
    createCommentNode(i) {
      return new t.Comment(i);
    },
    //Tree mutation
    appendChild(i, c) {
      const o = i.children[i.children.length - 1];
      o && (o.next = c, c.prev = o), i.children.push(c), c.parent = i;
    },
    insertBefore(i, c, o) {
      const d = i.children.indexOf(o), { prev: s } = o;
      s && (s.next = c, c.prev = s), o.prev = c, c.next = o, i.children.splice(d, 0, c), c.parent = i;
    },
    setTemplateContent(i, c) {
      e.adapter.appendChild(i, c);
    },
    getTemplateContent(i) {
      return i.children[0];
    },
    setDocumentType(i, c, o, d) {
      const s = n(c, o, d);
      let E = i.children.find((b) => (0, t.isDirective)(b) && b.name === "!doctype");
      E ? E.data = s ?? null : (E = new t.ProcessingInstruction("!doctype", s), e.adapter.appendChild(i, E)), E["x-name"] = c ?? void 0, E["x-publicId"] = o ?? void 0, E["x-systemId"] = d ?? void 0;
    },
    setDocumentMode(i, c) {
      i["x-mode"] = c;
    },
    getDocumentMode(i) {
      return i["x-mode"];
    },
    detachNode(i) {
      if (i.parent) {
        const c = i.parent.children.indexOf(i), { prev: o, next: d } = i;
        i.prev = null, i.next = null, o && (o.next = d), d && (d.prev = o), i.parent.children.splice(c, 1), i.parent = null;
      }
    },
    insertText(i, c) {
      const o = i.children[i.children.length - 1];
      o && (0, t.isText)(o) ? o.data += c : e.adapter.appendChild(i, r(c));
    },
    insertTextBefore(i, c, o) {
      const d = i.children[i.children.indexOf(o) - 1];
      d && (0, t.isText)(d) ? d.data += c : e.adapter.insertBefore(i, r(c), o);
    },
    adoptAttributes(i, c) {
      for (let o = 0; o < c.length; o++) {
        const d = c[o].name;
        typeof i.attribs[d] > "u" && (i.attribs[d] = c[o].value, i["x-attribsNamespace"][d] = c[o].namespace, i["x-attribsPrefix"][d] = c[o].prefix);
      }
    },
    //Tree traversing
    getFirstChild(i) {
      return i.children[0];
    },
    getChildNodes(i) {
      return i.children;
    },
    getParentNode(i) {
      return i.parent;
    },
    getAttrList(i) {
      return i.attributes;
    },
    //Node data
    getTagName(i) {
      return i.name;
    },
    getNamespaceURI(i) {
      return i.namespace;
    },
    getTextNodeContent(i) {
      return i.data;
    },
    getCommentNodeContent(i) {
      return i.data;
    },
    getDocumentTypeNodeName(i) {
      var c;
      return (c = i["x-name"]) !== null && c !== void 0 ? c : "";
    },
    getDocumentTypeNodePublicId(i) {
      var c;
      return (c = i["x-publicId"]) !== null && c !== void 0 ? c : "";
    },
    getDocumentTypeNodeSystemId(i) {
      var c;
      return (c = i["x-systemId"]) !== null && c !== void 0 ? c : "";
    },
    //Node types
    isDocumentTypeNode(i) {
      return (0, t.isDirective)(i) && i.name === "!doctype";
    },
    // Source code location
    setNodeSourceCodeLocation(i, c) {
      c && (i.startIndex = c.startOffset, i.endIndex = c.endOffset), i.sourceCodeLocation = c;
    },
    getNodeSourceCodeLocation(i) {
      return i.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation(i, c) {
      c.endOffset != null && (i.endIndex = c.endOffset), i.sourceCodeLocation = Object.assign(Object.assign({}, i.sourceCodeLocation), c);
    }
  };
})(y1);
var H4 = C && C.__spreadArray || function(e, u, t) {
  if (t || arguments.length === 2)
    for (var r = 0, a = u.length, n; r < a; r++)
      (n || !(r in u)) && (n || (n = Array.prototype.slice.call(u, 0, r)), n[r] = u[r]);
  return e.concat(n || Array.prototype.slice.call(u));
};
Object.defineProperty(o0, "__esModule", { value: !0 });
o0.renderWithParse5 = o0.parseWithParse5 = void 0;
var F4 = Nu, ei = q0, M1 = y1;
function q4(e, u, t, r) {
  var a = {
    scriptingEnabled: typeof u.scriptingEnabled == "boolean" ? u.scriptingEnabled : !0,
    treeAdapter: M1.adapter,
    sourceCodeLocationInfo: u.sourceCodeLocationInfo
  };
  return t ? (0, ei.parse)(e, a) : (0, ei.parseFragment)(r, e, a);
}
o0.parseWithParse5 = q4;
var G4 = { treeAdapter: M1.adapter };
function j4(e) {
  for (var u, t = ("length" in e) ? e : [e], r = 0; r < t.length; r += 1) {
    var a = t[r];
    (0, F4.isDocument)(a) && (u = Array.prototype.splice).call.apply(u, H4([t, r, 1], a.children, !1));
  }
  for (var n = "", r = 0; r < t.length; r += 1) {
    var a = t[r];
    n += (0, ei.serializeOuter)(a, G4);
  }
  return n;
}
o0.renderWithParse5 = j4;
var k1 = {}, $0 = {}, tc = {}, V0 = {}, rc = {};
Object.defineProperty(rc, "__esModule", { value: !0 });
rc.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var ac = {};
Object.defineProperty(ac, "__esModule", { value: !0 });
ac.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(e) {
    return e.charCodeAt(0);
  })
);
var ui = {};
(function(e) {
  var u;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.replaceCodePoint = e.fromCodePoint = void 0;
  var t = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  e.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (u = String.fromCodePoint) !== null && u !== void 0 ? u : function(n) {
    var i = "";
    return n > 65535 && (n -= 65536, i += String.fromCharCode(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), i += String.fromCharCode(n), i;
  };
  function r(n) {
    var i;
    return n >= 55296 && n <= 57343 || n > 1114111 ? 65533 : (i = t.get(n)) !== null && i !== void 0 ? i : n;
  }
  e.replaceCodePoint = r;
  function a(n) {
    return (0, e.fromCodePoint)(r(n));
  }
  e.default = a;
})(ui);
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(l, g, T, A) {
    A === void 0 && (A = T);
    var D = Object.getOwnPropertyDescriptor(g, T);
    (!D || ("get" in D ? !g.__esModule : D.writable || D.configurable)) && (D = { enumerable: !0, get: function() {
      return g[T];
    } }), Object.defineProperty(l, A, D);
  } : function(l, g, T, A) {
    A === void 0 && (A = T), l[A] = g[T];
  }), t = C && C.__setModuleDefault || (Object.create ? function(l, g) {
    Object.defineProperty(l, "default", { enumerable: !0, value: g });
  } : function(l, g) {
    l.default = g;
  }), r = C && C.__importStar || function(l) {
    if (l && l.__esModule)
      return l;
    var g = {};
    if (l != null)
      for (var T in l)
        T !== "default" && Object.prototype.hasOwnProperty.call(l, T) && u(g, l, T);
    return t(g, l), g;
  }, a = C && C.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXML = e.decodeHTMLStrict = e.decodeHTMLAttribute = e.decodeHTML = e.determineBranch = e.EntityDecoder = e.DecodingMode = e.BinTrieFlags = e.fromCodePoint = e.replaceCodePoint = e.decodeCodePoint = e.xmlDecodeTree = e.htmlDecodeTree = void 0;
  var n = a(rc);
  e.htmlDecodeTree = n.default;
  var i = a(ac);
  e.xmlDecodeTree = i.default;
  var c = r(ui);
  e.decodeCodePoint = c.default;
  var o = ui;
  Object.defineProperty(e, "replaceCodePoint", { enumerable: !0, get: function() {
    return o.replaceCodePoint;
  } }), Object.defineProperty(e, "fromCodePoint", { enumerable: !0, get: function() {
    return o.fromCodePoint;
  } });
  var d;
  (function(l) {
    l[l.NUM = 35] = "NUM", l[l.SEMI = 59] = "SEMI", l[l.EQUALS = 61] = "EQUALS", l[l.ZERO = 48] = "ZERO", l[l.NINE = 57] = "NINE", l[l.LOWER_A = 97] = "LOWER_A", l[l.LOWER_F = 102] = "LOWER_F", l[l.LOWER_X = 120] = "LOWER_X", l[l.LOWER_Z = 122] = "LOWER_Z", l[l.UPPER_A = 65] = "UPPER_A", l[l.UPPER_F = 70] = "UPPER_F", l[l.UPPER_Z = 90] = "UPPER_Z";
  })(d || (d = {}));
  var s = 32, E;
  (function(l) {
    l[l.VALUE_LENGTH = 49152] = "VALUE_LENGTH", l[l.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", l[l.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(E = e.BinTrieFlags || (e.BinTrieFlags = {}));
  function b(l) {
    return l >= d.ZERO && l <= d.NINE;
  }
  function m(l) {
    return l >= d.UPPER_A && l <= d.UPPER_F || l >= d.LOWER_A && l <= d.LOWER_F;
  }
  function v(l) {
    return l >= d.UPPER_A && l <= d.UPPER_Z || l >= d.LOWER_A && l <= d.LOWER_Z || b(l);
  }
  function P(l) {
    return l === d.EQUALS || v(l);
  }
  var I;
  (function(l) {
    l[l.EntityStart = 0] = "EntityStart", l[l.NumericStart = 1] = "NumericStart", l[l.NumericDecimal = 2] = "NumericDecimal", l[l.NumericHex = 3] = "NumericHex", l[l.NamedEntity = 4] = "NamedEntity";
  })(I || (I = {}));
  var O;
  (function(l) {
    l[l.Legacy = 0] = "Legacy", l[l.Strict = 1] = "Strict", l[l.Attribute = 2] = "Attribute";
  })(O = e.DecodingMode || (e.DecodingMode = {}));
  var M = (
    /** @class */
    function() {
      function l(g, T, A) {
        this.decodeTree = g, this.emitCodePoint = T, this.errors = A, this.state = I.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = O.Strict;
      }
      return l.prototype.startEntity = function(g) {
        this.decodeMode = g, this.state = I.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, l.prototype.write = function(g, T) {
        switch (this.state) {
          case I.EntityStart:
            return g.charCodeAt(T) === d.NUM ? (this.state = I.NumericStart, this.consumed += 1, this.stateNumericStart(g, T + 1)) : (this.state = I.NamedEntity, this.stateNamedEntity(g, T));
          case I.NumericStart:
            return this.stateNumericStart(g, T);
          case I.NumericDecimal:
            return this.stateNumericDecimal(g, T);
          case I.NumericHex:
            return this.stateNumericHex(g, T);
          case I.NamedEntity:
            return this.stateNamedEntity(g, T);
        }
      }, l.prototype.stateNumericStart = function(g, T) {
        return T >= g.length ? -1 : (g.charCodeAt(T) | s) === d.LOWER_X ? (this.state = I.NumericHex, this.consumed += 1, this.stateNumericHex(g, T + 1)) : (this.state = I.NumericDecimal, this.stateNumericDecimal(g, T));
      }, l.prototype.addToNumericResult = function(g, T, A, D) {
        if (T !== A) {
          var k = A - T;
          this.result = this.result * Math.pow(D, k) + parseInt(g.substr(T, k), D), this.consumed += k;
        }
      }, l.prototype.stateNumericHex = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D) || m(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 16), this.emitNumericEntity(D, 3);
        }
        return this.addToNumericResult(g, A, T, 16), -1;
      }, l.prototype.stateNumericDecimal = function(g, T) {
        for (var A = T; T < g.length; ) {
          var D = g.charCodeAt(T);
          if (b(D))
            T += 1;
          else
            return this.addToNumericResult(g, A, T, 10), this.emitNumericEntity(D, 2);
        }
        return this.addToNumericResult(g, A, T, 10), -1;
      }, l.prototype.emitNumericEntity = function(g, T) {
        var A;
        if (this.consumed <= T)
          return (A = this.errors) === null || A === void 0 || A.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (g === d.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === O.Strict)
          return 0;
        return this.emitCodePoint((0, c.replaceCodePoint)(this.result), this.consumed), this.errors && (g !== d.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, l.prototype.stateNamedEntity = function(g, T) {
        for (var A = this.decodeTree, D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14; T < g.length; T++, this.excess++) {
          var R = g.charCodeAt(T);
          if (this.treeIndex = B(A, D, this.treeIndex + Math.max(1, k), R), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === O.Attribute && // We shouldn't have consumed any characters after the entity,
            (k === 0 || // And there should be no invalid characters.
            P(R)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (D = A[this.treeIndex], k = (D & E.VALUE_LENGTH) >> 14, k !== 0) {
            if (R === d.SEMI)
              return this.emitNamedEntityData(this.treeIndex, k, this.consumed + this.excess);
            this.decodeMode !== O.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, l.prototype.emitNotTerminatedNamedEntity = function() {
        var g, T = this, A = T.result, D = T.decodeTree, k = (D[A] & E.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(A, k, this.consumed), (g = this.errors) === null || g === void 0 || g.missingSemicolonAfterCharacterReference(), this.consumed;
      }, l.prototype.emitNamedEntityData = function(g, T, A) {
        var D = this.decodeTree;
        return this.emitCodePoint(T === 1 ? D[g] & ~E.VALUE_LENGTH : D[g + 1], A), T === 3 && this.emitCodePoint(D[g + 2], A), A;
      }, l.prototype.end = function() {
        var g;
        switch (this.state) {
          case I.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== O.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case I.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case I.NumericHex:
            return this.emitNumericEntity(0, 3);
          case I.NumericStart:
            return (g = this.errors) === null || g === void 0 || g.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case I.EntityStart:
            return 0;
        }
      }, l;
    }()
  );
  e.EntityDecoder = M;
  function U(l) {
    var g = "", T = new M(l, function(A) {
      return g += (0, c.fromCodePoint)(A);
    });
    return function(D, k) {
      for (var R = 0, $ = 0; ($ = D.indexOf("&", $)) >= 0; ) {
        g += D.slice(R, $), T.startEntity(k);
        var J = T.write(
          D,
          // Skip the "&"
          $ + 1
        );
        if (J < 0) {
          R = $ + T.end();
          break;
        }
        R = $ + J, $ = J === 0 ? R + 1 : R;
      }
      var W = g + D.slice(R);
      return g = "", W;
    };
  }
  function B(l, g, T, A) {
    var D = (g & E.BRANCH_LENGTH) >> 7, k = g & E.JUMP_TABLE;
    if (D === 0)
      return k !== 0 && A === k ? T : -1;
    if (k) {
      var R = A - k;
      return R < 0 || R >= D ? -1 : l[T + R] - 1;
    }
    for (var $ = T, J = $ + D - 1; $ <= J; ) {
      var W = $ + J >>> 1, te = l[W];
      if (te < A)
        $ = W + 1;
      else if (te > A)
        J = W - 1;
      else
        return l[W + D];
    }
    return -1;
  }
  e.determineBranch = B;
  var w = U(n.default), F = U(i.default);
  function z(l, g) {
    return g === void 0 && (g = O.Legacy), w(l, g);
  }
  e.decodeHTML = z;
  function Z(l) {
    return w(l, O.Attribute);
  }
  e.decodeHTMLAttribute = Z;
  function ue(l) {
    return w(l, O.Strict);
  }
  e.decodeHTMLStrict = ue;
  function V(l) {
    return F(l, O.Strict);
  }
  e.decodeXML = V;
})(V0);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.QuoteType = void 0;
  var u = V0, t;
  (function(b) {
    b[b.Tab = 9] = "Tab", b[b.NewLine = 10] = "NewLine", b[b.FormFeed = 12] = "FormFeed", b[b.CarriageReturn = 13] = "CarriageReturn", b[b.Space = 32] = "Space", b[b.ExclamationMark = 33] = "ExclamationMark", b[b.Number = 35] = "Number", b[b.Amp = 38] = "Amp", b[b.SingleQuote = 39] = "SingleQuote", b[b.DoubleQuote = 34] = "DoubleQuote", b[b.Dash = 45] = "Dash", b[b.Slash = 47] = "Slash", b[b.Zero = 48] = "Zero", b[b.Nine = 57] = "Nine", b[b.Semi = 59] = "Semi", b[b.Lt = 60] = "Lt", b[b.Eq = 61] = "Eq", b[b.Gt = 62] = "Gt", b[b.Questionmark = 63] = "Questionmark", b[b.UpperA = 65] = "UpperA", b[b.LowerA = 97] = "LowerA", b[b.UpperF = 70] = "UpperF", b[b.LowerF = 102] = "LowerF", b[b.UpperZ = 90] = "UpperZ", b[b.LowerZ = 122] = "LowerZ", b[b.LowerX = 120] = "LowerX", b[b.OpeningSquareBracket = 91] = "OpeningSquareBracket";
  })(t || (t = {}));
  var r;
  (function(b) {
    b[b.Text = 1] = "Text", b[b.BeforeTagName = 2] = "BeforeTagName", b[b.InTagName = 3] = "InTagName", b[b.InSelfClosingTag = 4] = "InSelfClosingTag", b[b.BeforeClosingTagName = 5] = "BeforeClosingTagName", b[b.InClosingTagName = 6] = "InClosingTagName", b[b.AfterClosingTagName = 7] = "AfterClosingTagName", b[b.BeforeAttributeName = 8] = "BeforeAttributeName", b[b.InAttributeName = 9] = "InAttributeName", b[b.AfterAttributeName = 10] = "AfterAttributeName", b[b.BeforeAttributeValue = 11] = "BeforeAttributeValue", b[b.InAttributeValueDq = 12] = "InAttributeValueDq", b[b.InAttributeValueSq = 13] = "InAttributeValueSq", b[b.InAttributeValueNq = 14] = "InAttributeValueNq", b[b.BeforeDeclaration = 15] = "BeforeDeclaration", b[b.InDeclaration = 16] = "InDeclaration", b[b.InProcessingInstruction = 17] = "InProcessingInstruction", b[b.BeforeComment = 18] = "BeforeComment", b[b.CDATASequence = 19] = "CDATASequence", b[b.InSpecialComment = 20] = "InSpecialComment", b[b.InCommentLike = 21] = "InCommentLike", b[b.BeforeSpecialS = 22] = "BeforeSpecialS", b[b.SpecialStartSequence = 23] = "SpecialStartSequence", b[b.InSpecialTag = 24] = "InSpecialTag", b[b.BeforeEntity = 25] = "BeforeEntity", b[b.BeforeNumericEntity = 26] = "BeforeNumericEntity", b[b.InNamedEntity = 27] = "InNamedEntity", b[b.InNumericEntity = 28] = "InNumericEntity", b[b.InHexEntity = 29] = "InHexEntity";
  })(r || (r = {}));
  function a(b) {
    return b === t.Space || b === t.NewLine || b === t.Tab || b === t.FormFeed || b === t.CarriageReturn;
  }
  function n(b) {
    return b === t.Slash || b === t.Gt || a(b);
  }
  function i(b) {
    return b >= t.Zero && b <= t.Nine;
  }
  function c(b) {
    return b >= t.LowerA && b <= t.LowerZ || b >= t.UpperA && b <= t.UpperZ;
  }
  function o(b) {
    return b >= t.UpperA && b <= t.UpperF || b >= t.LowerA && b <= t.LowerF;
  }
  var d;
  (function(b) {
    b[b.NoValue = 0] = "NoValue", b[b.Unquoted = 1] = "Unquoted", b[b.Single = 2] = "Single", b[b.Double = 3] = "Double";
  })(d = e.QuoteType || (e.QuoteType = {}));
  var s = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
    // `</title`
  }, E = (
    /** @class */
    function() {
      function b(m, v) {
        var P = m.xmlMode, I = P === void 0 ? !1 : P, O = m.decodeEntities, M = O === void 0 ? !0 : O;
        this.cbs = v, this.state = r.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = r.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = I, this.decodeEntities = M, this.entityTrie = I ? u.xmlDecodeTree : u.htmlDecodeTree;
      }
      return b.prototype.reset = function() {
        this.state = r.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = r.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
      }, b.prototype.write = function(m) {
        this.offset += this.buffer.length, this.buffer = m, this.parse();
      }, b.prototype.end = function() {
        this.running && this.finish();
      }, b.prototype.pause = function() {
        this.running = !1;
      }, b.prototype.resume = function() {
        this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
      }, b.prototype.getIndex = function() {
        return this.index;
      }, b.prototype.getSectionStart = function() {
        return this.sectionStart;
      }, b.prototype.stateText = function(m) {
        m === t.Lt || !this.decodeEntities && this.fastForwardTo(t.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = r.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && m === t.Amp && (this.state = r.BeforeEntity);
      }, b.prototype.stateSpecialStartSequence = function(m) {
        var v = this.sequenceIndex === this.currentSequence.length, P = v ? (
          // If we are at the end of the sequence, make sure the tag name has ended
          n(m)
        ) : (
          // Otherwise, do a case-insensitive comparison
          (m | 32) === this.currentSequence[this.sequenceIndex]
        );
        if (!P)
          this.isSpecial = !1;
        else if (!v) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0, this.state = r.InTagName, this.stateInTagName(m);
      }, b.prototype.stateInSpecialTag = function(m) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (m === t.Gt || a(m)) {
            var v = this.index - this.currentSequence.length;
            if (this.sectionStart < v) {
              var P = this.index;
              this.index = v, this.cbs.ontext(this.sectionStart, v), this.index = P;
            }
            this.isSpecial = !1, this.sectionStart = v + 2, this.stateInClosingTagName(m);
            return;
          }
          this.sequenceIndex = 0;
        }
        (m | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === s.TitleEnd ? this.decodeEntities && m === t.Amp && (this.state = r.BeforeEntity) : this.fastForwardTo(t.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(m === t.Lt);
      }, b.prototype.stateCDATASequence = function(m) {
        m === s.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === s.Cdata.length && (this.state = r.InCommentLike, this.currentSequence = s.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = r.InDeclaration, this.stateInDeclaration(m));
      }, b.prototype.fastForwardTo = function(m) {
        for (; ++this.index < this.buffer.length + this.offset; )
          if (this.buffer.charCodeAt(this.index - this.offset) === m)
            return !0;
        return this.index = this.buffer.length + this.offset - 1, !1;
      }, b.prototype.stateInCommentLike = function(m) {
        m === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === s.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = r.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : m !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }, b.prototype.isTagStartChar = function(m) {
        return this.xmlMode ? !n(m) : c(m);
      }, b.prototype.startSpecial = function(m, v) {
        this.isSpecial = !0, this.currentSequence = m, this.sequenceIndex = v, this.state = r.SpecialStartSequence;
      }, b.prototype.stateBeforeTagName = function(m) {
        if (m === t.ExclamationMark)
          this.state = r.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (m === t.Questionmark)
          this.state = r.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(m)) {
          var v = m | 32;
          this.sectionStart = this.index, !this.xmlMode && v === s.TitleEnd[2] ? this.startSpecial(s.TitleEnd, 3) : this.state = !this.xmlMode && v === s.ScriptEnd[2] ? r.BeforeSpecialS : r.InTagName;
        } else
          m === t.Slash ? this.state = r.BeforeClosingTagName : (this.state = r.Text, this.stateText(m));
      }, b.prototype.stateInTagName = function(m) {
        n(m) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m));
      }, b.prototype.stateBeforeClosingTagName = function(m) {
        a(m) || (m === t.Gt ? this.state = r.Text : (this.state = this.isTagStartChar(m) ? r.InClosingTagName : r.InSpecialComment, this.sectionStart = this.index));
      }, b.prototype.stateInClosingTagName = function(m) {
        (m === t.Gt || a(m)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.AfterClosingTagName, this.stateAfterClosingTagName(m));
      }, b.prototype.stateAfterClosingTagName = function(m) {
        (m === t.Gt || this.fastForwardTo(t.Gt)) && (this.state = r.Text, this.baseState = r.Text, this.sectionStart = this.index + 1);
      }, b.prototype.stateBeforeAttributeName = function(m) {
        m === t.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = r.InSpecialTag, this.sequenceIndex = 0) : this.state = r.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : m === t.Slash ? this.state = r.InSelfClosingTag : a(m) || (this.state = r.InAttributeName, this.sectionStart = this.index);
      }, b.prototype.stateInSelfClosingTag = function(m) {
        m === t.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = r.Text, this.baseState = r.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : a(m) || (this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m));
      }, b.prototype.stateInAttributeName = function(m) {
        (m === t.Eq || n(m)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = r.AfterAttributeName, this.stateAfterAttributeName(m));
      }, b.prototype.stateAfterAttributeName = function(m) {
        m === t.Eq ? this.state = r.BeforeAttributeValue : m === t.Slash || m === t.Gt ? (this.cbs.onattribend(d.NoValue, this.index), this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m)) : a(m) || (this.cbs.onattribend(d.NoValue, this.index), this.state = r.InAttributeName, this.sectionStart = this.index);
      }, b.prototype.stateBeforeAttributeValue = function(m) {
        m === t.DoubleQuote ? (this.state = r.InAttributeValueDq, this.sectionStart = this.index + 1) : m === t.SingleQuote ? (this.state = r.InAttributeValueSq, this.sectionStart = this.index + 1) : a(m) || (this.sectionStart = this.index, this.state = r.InAttributeValueNq, this.stateInAttributeValueNoQuotes(m));
      }, b.prototype.handleInAttributeValue = function(m, v) {
        m === v || !this.decodeEntities && this.fastForwardTo(v) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(v === t.DoubleQuote ? d.Double : d.Single, this.index), this.state = r.BeforeAttributeName) : this.decodeEntities && m === t.Amp && (this.baseState = this.state, this.state = r.BeforeEntity);
      }, b.prototype.stateInAttributeValueDoubleQuotes = function(m) {
        this.handleInAttributeValue(m, t.DoubleQuote);
      }, b.prototype.stateInAttributeValueSingleQuotes = function(m) {
        this.handleInAttributeValue(m, t.SingleQuote);
      }, b.prototype.stateInAttributeValueNoQuotes = function(m) {
        a(m) || m === t.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(d.Unquoted, this.index), this.state = r.BeforeAttributeName, this.stateBeforeAttributeName(m)) : this.decodeEntities && m === t.Amp && (this.baseState = this.state, this.state = r.BeforeEntity);
      }, b.prototype.stateBeforeDeclaration = function(m) {
        m === t.OpeningSquareBracket ? (this.state = r.CDATASequence, this.sequenceIndex = 0) : this.state = m === t.Dash ? r.BeforeComment : r.InDeclaration;
      }, b.prototype.stateInDeclaration = function(m) {
        (m === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = r.Text, this.sectionStart = this.index + 1);
      }, b.prototype.stateInProcessingInstruction = function(m) {
        (m === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = r.Text, this.sectionStart = this.index + 1);
      }, b.prototype.stateBeforeComment = function(m) {
        m === t.Dash ? (this.state = r.InCommentLike, this.currentSequence = s.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = r.InDeclaration;
      }, b.prototype.stateInSpecialComment = function(m) {
        (m === t.Gt || this.fastForwardTo(t.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = r.Text, this.sectionStart = this.index + 1);
      }, b.prototype.stateBeforeSpecialS = function(m) {
        var v = m | 32;
        v === s.ScriptEnd[3] ? this.startSpecial(s.ScriptEnd, 4) : v === s.StyleEnd[3] ? this.startSpecial(s.StyleEnd, 4) : (this.state = r.InTagName, this.stateInTagName(m));
      }, b.prototype.stateBeforeEntity = function(m) {
        this.entityExcess = 1, this.entityResult = 0, m === t.Number ? this.state = r.BeforeNumericEntity : m === t.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = r.InNamedEntity, this.stateInNamedEntity(m));
      }, b.prototype.stateInNamedEntity = function(m) {
        if (this.entityExcess += 1, this.trieIndex = (0, u.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, m), this.trieIndex < 0) {
          this.emitNamedEntity(), this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var v = this.trieCurrent & u.BinTrieFlags.VALUE_LENGTH;
        if (v) {
          var P = (v >> 14) - 1;
          if (!this.allowLegacyEntity() && m !== t.Semi)
            this.trieIndex += P;
          else {
            var I = this.index - this.entityExcess + 1;
            I > this.sectionStart && this.emitPartial(this.sectionStart, I), this.entityResult = this.trieIndex, this.trieIndex += P, this.entityExcess = 0, this.sectionStart = this.index + 1, P === 0 && this.emitNamedEntity();
          }
        }
      }, b.prototype.emitNamedEntity = function() {
        if (this.state = this.baseState, this.entityResult !== 0) {
          var m = (this.entityTrie[this.entityResult] & u.BinTrieFlags.VALUE_LENGTH) >> 14;
          switch (m) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~u.BinTrieFlags.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }, b.prototype.stateBeforeNumericEntity = function(m) {
        (m | 32) === t.LowerX ? (this.entityExcess++, this.state = r.InHexEntity) : (this.state = r.InNumericEntity, this.stateInNumericEntity(m));
      }, b.prototype.emitNumericEntity = function(m) {
        var v = this.index - this.entityExcess - 1, P = v + 2 + +(this.state === r.InHexEntity);
        P !== this.index && (v > this.sectionStart && this.emitPartial(this.sectionStart, v), this.sectionStart = this.index + Number(m), this.emitCodePoint((0, u.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
      }, b.prototype.stateInNumericEntity = function(m) {
        m === t.Semi ? this.emitNumericEntity(!0) : i(m) ? (this.entityResult = this.entityResult * 10 + (m - t.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, b.prototype.stateInHexEntity = function(m) {
        m === t.Semi ? this.emitNumericEntity(!0) : i(m) ? (this.entityResult = this.entityResult * 16 + (m - t.Zero), this.entityExcess++) : o(m) ? (this.entityResult = this.entityResult * 16 + ((m | 32) - t.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, b.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === r.Text || this.baseState === r.InSpecialTag);
      }, b.prototype.cleanup = function() {
        this.running && this.sectionStart !== this.index && (this.state === r.Text || this.state === r.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === r.InAttributeValueDq || this.state === r.InAttributeValueSq || this.state === r.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }, b.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      }, b.prototype.parse = function() {
        for (; this.shouldContinue(); ) {
          var m = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case r.Text: {
              this.stateText(m);
              break;
            }
            case r.SpecialStartSequence: {
              this.stateSpecialStartSequence(m);
              break;
            }
            case r.InSpecialTag: {
              this.stateInSpecialTag(m);
              break;
            }
            case r.CDATASequence: {
              this.stateCDATASequence(m);
              break;
            }
            case r.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(m);
              break;
            }
            case r.InAttributeName: {
              this.stateInAttributeName(m);
              break;
            }
            case r.InCommentLike: {
              this.stateInCommentLike(m);
              break;
            }
            case r.InSpecialComment: {
              this.stateInSpecialComment(m);
              break;
            }
            case r.BeforeAttributeName: {
              this.stateBeforeAttributeName(m);
              break;
            }
            case r.InTagName: {
              this.stateInTagName(m);
              break;
            }
            case r.InClosingTagName: {
              this.stateInClosingTagName(m);
              break;
            }
            case r.BeforeTagName: {
              this.stateBeforeTagName(m);
              break;
            }
            case r.AfterAttributeName: {
              this.stateAfterAttributeName(m);
              break;
            }
            case r.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(m);
              break;
            }
            case r.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(m);
              break;
            }
            case r.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(m);
              break;
            }
            case r.AfterClosingTagName: {
              this.stateAfterClosingTagName(m);
              break;
            }
            case r.BeforeSpecialS: {
              this.stateBeforeSpecialS(m);
              break;
            }
            case r.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(m);
              break;
            }
            case r.InSelfClosingTag: {
              this.stateInSelfClosingTag(m);
              break;
            }
            case r.InDeclaration: {
              this.stateInDeclaration(m);
              break;
            }
            case r.BeforeDeclaration: {
              this.stateBeforeDeclaration(m);
              break;
            }
            case r.BeforeComment: {
              this.stateBeforeComment(m);
              break;
            }
            case r.InProcessingInstruction: {
              this.stateInProcessingInstruction(m);
              break;
            }
            case r.InNamedEntity: {
              this.stateInNamedEntity(m);
              break;
            }
            case r.BeforeEntity: {
              this.stateBeforeEntity(m);
              break;
            }
            case r.InHexEntity: {
              this.stateInHexEntity(m);
              break;
            }
            case r.InNumericEntity: {
              this.stateInNumericEntity(m);
              break;
            }
            default:
              this.stateBeforeNumericEntity(m);
          }
          this.index++;
        }
        this.cleanup();
      }, b.prototype.finish = function() {
        this.state === r.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
      }, b.prototype.handleTrailingData = function() {
        var m = this.buffer.length + this.offset;
        this.state === r.InCommentLike ? this.currentSequence === s.CdataEnd ? this.cbs.oncdata(this.sectionStart, m, 0) : this.cbs.oncomment(this.sectionStart, m, 0) : this.state === r.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === r.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === r.InTagName || this.state === r.BeforeAttributeName || this.state === r.BeforeAttributeValue || this.state === r.AfterAttributeName || this.state === r.InAttributeName || this.state === r.InAttributeValueSq || this.state === r.InAttributeValueDq || this.state === r.InAttributeValueNq || this.state === r.InClosingTagName || this.cbs.ontext(this.sectionStart, m);
      }, b.prototype.emitPartial = function(m, v) {
        this.baseState !== r.Text && this.baseState !== r.InSpecialTag ? this.cbs.onattribdata(m, v) : this.cbs.ontext(m, v);
      }, b.prototype.emitCodePoint = function(m) {
        this.baseState !== r.Text && this.baseState !== r.InSpecialTag ? this.cbs.onattribentity(m) : this.cbs.ontextentity(m);
      }, b;
    }()
  );
  e.default = E;
})(tc);
var $4 = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), V4 = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), Y4 = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && $4(u, e, t);
  return V4(u, e), u;
};
Object.defineProperty($0, "__esModule", { value: !0 });
$0.Parser = void 0;
var Ar = Y4(tc), Xc = V0, jt = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), me = /* @__PURE__ */ new Set(["p"]), Wc = /* @__PURE__ */ new Set(["thead", "tbody"]), zc = /* @__PURE__ */ new Set(["dd", "dt"]), Qc = /* @__PURE__ */ new Set(["rt", "rp"]), X4 = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", me],
  ["h1", me],
  ["h2", me],
  ["h3", me],
  ["h4", me],
  ["h5", me],
  ["h6", me],
  ["select", jt],
  ["input", jt],
  ["output", jt],
  ["button", jt],
  ["datalist", jt],
  ["textarea", jt],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", zc],
  ["dt", zc],
  ["address", me],
  ["article", me],
  ["aside", me],
  ["blockquote", me],
  ["details", me],
  ["div", me],
  ["dl", me],
  ["fieldset", me],
  ["figcaption", me],
  ["figure", me],
  ["footer", me],
  ["form", me],
  ["header", me],
  ["hr", me],
  ["main", me],
  ["nav", me],
  ["ol", me],
  ["pre", me],
  ["section", me],
  ["table", me],
  ["ul", me],
  ["rt", Qc],
  ["rp", Qc],
  ["tbody", Wc],
  ["tfoot", Wc]
]), W4 = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), Kc = /* @__PURE__ */ new Set(["math", "svg"]), Jc = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), z4 = /\s|\//, Q4 = (
  /** @class */
  function() {
    function e(u, t) {
      t === void 0 && (t = {});
      var r, a, n, i, c;
      this.options = t, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = u ?? {}, this.lowerCaseTagNames = (r = t.lowerCaseTags) !== null && r !== void 0 ? r : !t.xmlMode, this.lowerCaseAttributeNames = (a = t.lowerCaseAttributeNames) !== null && a !== void 0 ? a : !t.xmlMode, this.tokenizer = new ((n = t.Tokenizer) !== null && n !== void 0 ? n : Ar.default)(this.options, this), (c = (i = this.cbs).onparserinit) === null || c === void 0 || c.call(i, this);
    }
    return e.prototype.ontext = function(u, t) {
      var r, a, n = this.getSlice(u, t);
      this.endIndex = t - 1, (a = (r = this.cbs).ontext) === null || a === void 0 || a.call(r, n), this.startIndex = t;
    }, e.prototype.ontextentity = function(u) {
      var t, r, a = this.tokenizer.getSectionStart();
      this.endIndex = a - 1, (r = (t = this.cbs).ontext) === null || r === void 0 || r.call(t, (0, Xc.fromCodePoint)(u)), this.startIndex = a;
    }, e.prototype.isVoidElement = function(u) {
      return !this.options.xmlMode && W4.has(u);
    }, e.prototype.onopentagname = function(u, t) {
      this.endIndex = t;
      var r = this.getSlice(u, t);
      this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r);
    }, e.prototype.emitOpenTag = function(u) {
      var t, r, a, n;
      this.openTagStart = this.startIndex, this.tagname = u;
      var i = !this.options.xmlMode && X4.get(u);
      if (i)
        for (; this.stack.length > 0 && i.has(this.stack[this.stack.length - 1]); ) {
          var c = this.stack.pop();
          (r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, c, !0);
        }
      this.isVoidElement(u) || (this.stack.push(u), Kc.has(u) ? this.foreignContext.push(!0) : Jc.has(u) && this.foreignContext.push(!1)), (n = (a = this.cbs).onopentagname) === null || n === void 0 || n.call(a, u), this.cbs.onopentag && (this.attribs = {});
    }, e.prototype.endOpenTag = function(u) {
      var t, r;
      this.startIndex = this.openTagStart, this.attribs && ((r = (t = this.cbs).onopentag) === null || r === void 0 || r.call(t, this.tagname, this.attribs, u), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
    }, e.prototype.onopentagend = function(u) {
      this.endIndex = u, this.endOpenTag(!1), this.startIndex = u + 1;
    }, e.prototype.onclosetag = function(u, t) {
      var r, a, n, i, c, o;
      this.endIndex = t;
      var d = this.getSlice(u, t);
      if (this.lowerCaseTagNames && (d = d.toLowerCase()), (Kc.has(d) || Jc.has(d)) && this.foreignContext.pop(), this.isVoidElement(d))
        !this.options.xmlMode && d === "br" && ((a = (r = this.cbs).onopentagname) === null || a === void 0 || a.call(r, "br"), (i = (n = this.cbs).onopentag) === null || i === void 0 || i.call(n, "br", {}, !0), (o = (c = this.cbs).onclosetag) === null || o === void 0 || o.call(c, "br", !1));
      else {
        var s = this.stack.lastIndexOf(d);
        if (s !== -1)
          if (this.cbs.onclosetag)
            for (var E = this.stack.length - s; E--; )
              this.cbs.onclosetag(this.stack.pop(), E !== 0);
          else
            this.stack.length = s;
        else
          !this.options.xmlMode && d === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
      }
      this.startIndex = t + 1;
    }, e.prototype.onselfclosingtag = function(u) {
      this.endIndex = u, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = u + 1) : this.onopentagend(u);
    }, e.prototype.closeCurrentTag = function(u) {
      var t, r, a = this.tagname;
      this.endOpenTag(u), this.stack[this.stack.length - 1] === a && ((r = (t = this.cbs).onclosetag) === null || r === void 0 || r.call(t, a, !u), this.stack.pop());
    }, e.prototype.onattribname = function(u, t) {
      this.startIndex = u;
      var r = this.getSlice(u, t);
      this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r;
    }, e.prototype.onattribdata = function(u, t) {
      this.attribvalue += this.getSlice(u, t);
    }, e.prototype.onattribentity = function(u) {
      this.attribvalue += (0, Xc.fromCodePoint)(u);
    }, e.prototype.onattribend = function(u, t) {
      var r, a;
      this.endIndex = t, (a = (r = this.cbs).onattribute) === null || a === void 0 || a.call(r, this.attribname, this.attribvalue, u === Ar.QuoteType.Double ? '"' : u === Ar.QuoteType.Single ? "'" : u === Ar.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
    }, e.prototype.getInstructionName = function(u) {
      var t = u.search(z4), r = t < 0 ? u : u.substr(0, t);
      return this.lowerCaseTagNames && (r = r.toLowerCase()), r;
    }, e.prototype.ondeclaration = function(u, t) {
      this.endIndex = t;
      var r = this.getSlice(u, t);
      if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(a), "!".concat(r));
      }
      this.startIndex = t + 1;
    }, e.prototype.onprocessinginstruction = function(u, t) {
      this.endIndex = t;
      var r = this.getSlice(u, t);
      if (this.cbs.onprocessinginstruction) {
        var a = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(a), "?".concat(r));
      }
      this.startIndex = t + 1;
    }, e.prototype.oncomment = function(u, t, r) {
      var a, n, i, c;
      this.endIndex = t, (n = (a = this.cbs).oncomment) === null || n === void 0 || n.call(a, this.getSlice(u, t - r)), (c = (i = this.cbs).oncommentend) === null || c === void 0 || c.call(i), this.startIndex = t + 1;
    }, e.prototype.oncdata = function(u, t, r) {
      var a, n, i, c, o, d, s, E, b, m;
      this.endIndex = t;
      var v = this.getSlice(u, t - r);
      this.options.xmlMode || this.options.recognizeCDATA ? ((n = (a = this.cbs).oncdatastart) === null || n === void 0 || n.call(a), (c = (i = this.cbs).ontext) === null || c === void 0 || c.call(i, v), (d = (o = this.cbs).oncdataend) === null || d === void 0 || d.call(o)) : ((E = (s = this.cbs).oncomment) === null || E === void 0 || E.call(s, "[CDATA[".concat(v, "]]")), (m = (b = this.cbs).oncommentend) === null || m === void 0 || m.call(b)), this.startIndex = t + 1;
    }, e.prototype.onend = function() {
      var u, t;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = this.stack.length; r > 0; this.cbs.onclosetag(this.stack[--r], !0))
          ;
      }
      (t = (u = this.cbs).onend) === null || t === void 0 || t.call(u);
    }, e.prototype.reset = function() {
      var u, t, r, a;
      (t = (u = this.cbs).onreset) === null || t === void 0 || t.call(u), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (a = (r = this.cbs).onparserinit) === null || a === void 0 || a.call(r, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
    }, e.prototype.parseComplete = function(u) {
      this.reset(), this.end(u);
    }, e.prototype.getSlice = function(u, t) {
      for (; u - this.bufferOffset >= this.buffers[0].length; )
        this.shiftBuffer();
      for (var r = this.buffers[0].slice(u - this.bufferOffset, t - this.bufferOffset); t - this.bufferOffset > this.buffers[0].length; )
        this.shiftBuffer(), r += this.buffers[0].slice(0, t - this.bufferOffset);
      return r;
    }, e.prototype.shiftBuffer = function() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }, e.prototype.write = function(u) {
      var t, r;
      if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(u), this.tokenizer.running && (this.tokenizer.write(u), this.writeIndex++);
    }, e.prototype.end = function(u) {
      var t, r;
      if (this.ended) {
        (r = (t = this.cbs).onerror) === null || r === void 0 || r.call(t, new Error(".end() after done!"));
        return;
      }
      u && this.write(u), this.ended = !0, this.tokenizer.end();
    }, e.prototype.pause = function() {
      this.tokenizer.pause();
    }, e.prototype.resume = function() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }, e.prototype.parseChunk = function(u) {
      this.write(u);
    }, e.prototype.done = function(u) {
      this.end(u);
    }, e;
  }()
);
$0.Parser = Q4;
var Ju = {}, fe = {}, pt = C && C.__extends || function() {
  var e = function(u, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (r[n] = a[n]);
    }, e(u, t);
  };
  return function(u, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    e(u, t);
    function r() {
      this.constructor = u;
    }
    u.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
}(), H0 = C && C.__assign || function() {
  return H0 = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, H0.apply(this, arguments);
};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.cloneNode = fe.hasChildren = fe.isDocument = fe.isDirective = fe.isComment = fe.isText = fe.isCDATA = fe.isTag = fe.Element = fe.Document = fe.CDATA = fe.NodeWithChildren = fe.ProcessingInstruction = fe.Comment = fe.Text = fe.DataNode = fe.Node = void 0;
var bu = Le, nc = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(u) {
        this.parent = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(u) {
        this.prev = u;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(u) {
        this.next = u;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(u) {
      return u === void 0 && (u = !1), ic(this, u);
    }, e;
  }()
);
fe.Node = nc;
var $a = (
  /** @class */
  function(e) {
    pt(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.data = t, r;
    }
    return Object.defineProperty(u.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(t) {
        this.data = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(nc)
);
fe.DataNode = $a;
var B1 = (
  /** @class */
  function(e) {
    pt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = bu.ElementType.Text, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }($a)
);
fe.Text = B1;
var U1 = (
  /** @class */
  function(e) {
    pt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = bu.ElementType.Comment, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }($a)
);
fe.Comment = U1;
var H1 = (
  /** @class */
  function(e) {
    pt(u, e);
    function u(t, r) {
      var a = e.call(this, r) || this;
      return a.name = t, a.type = bu.ElementType.Directive, a;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }($a)
);
fe.ProcessingInstruction = H1;
var Va = (
  /** @class */
  function(e) {
    pt(u, e);
    function u(t) {
      var r = e.call(this) || this;
      return r.children = t, r;
    }
    return Object.defineProperty(u.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var t;
        return (t = this.children[0]) !== null && t !== void 0 ? t : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(t) {
        this.children = t;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(nc)
);
fe.NodeWithChildren = Va;
var F1 = (
  /** @class */
  function(e) {
    pt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = bu.ElementType.CDATA, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Va)
);
fe.CDATA = F1;
var q1 = (
  /** @class */
  function(e) {
    pt(u, e);
    function u() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.type = bu.ElementType.Root, t;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Va)
);
fe.Document = q1;
var G1 = (
  /** @class */
  function(e) {
    pt(u, e);
    function u(t, r, a, n) {
      a === void 0 && (a = []), n === void 0 && (n = t === "script" ? bu.ElementType.Script : t === "style" ? bu.ElementType.Style : bu.ElementType.Tag);
      var i = e.call(this, a) || this;
      return i.name = t, i.attribs = r, i.type = n, i;
    }
    return Object.defineProperty(u.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(t) {
        this.name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(u.prototype, "attributes", {
      get: function() {
        var t = this;
        return Object.keys(this.attribs).map(function(r) {
          var a, n;
          return {
            name: r,
            value: t.attribs[r],
            namespace: (a = t["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[r],
            prefix: (n = t["x-attribsPrefix"]) === null || n === void 0 ? void 0 : n[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), u;
  }(Va)
);
fe.Element = G1;
function j1(e) {
  return (0, bu.isTag)(e);
}
fe.isTag = j1;
function $1(e) {
  return e.type === bu.ElementType.CDATA;
}
fe.isCDATA = $1;
function V1(e) {
  return e.type === bu.ElementType.Text;
}
fe.isText = V1;
function Y1(e) {
  return e.type === bu.ElementType.Comment;
}
fe.isComment = Y1;
function X1(e) {
  return e.type === bu.ElementType.Directive;
}
fe.isDirective = X1;
function W1(e) {
  return e.type === bu.ElementType.Root;
}
fe.isDocument = W1;
function K4(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
fe.hasChildren = K4;
function ic(e, u) {
  u === void 0 && (u = !1);
  var t;
  if (V1(e))
    t = new B1(e.data);
  else if (Y1(e))
    t = new U1(e.data);
  else if (j1(e)) {
    var r = u ? pn(e.children) : [], a = new G1(e.name, H0({}, e.attribs), r);
    r.forEach(function(o) {
      return o.parent = a;
    }), e.namespace != null && (a.namespace = e.namespace), e["x-attribsNamespace"] && (a["x-attribsNamespace"] = H0({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (a["x-attribsPrefix"] = H0({}, e["x-attribsPrefix"])), t = a;
  } else if ($1(e)) {
    var r = u ? pn(e.children) : [], n = new F1(r);
    r.forEach(function(d) {
      return d.parent = n;
    }), t = n;
  } else if (W1(e)) {
    var r = u ? pn(e.children) : [], i = new q1(r);
    r.forEach(function(d) {
      return d.parent = i;
    }), e["x-mode"] && (i["x-mode"] = e["x-mode"]), t = i;
  } else if (X1(e)) {
    var c = new H1(e.name, e.data);
    e["x-name"] != null && (c["x-name"] = e["x-name"], c["x-publicId"] = e["x-publicId"], c["x-systemId"] = e["x-systemId"]), t = c;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return t.startIndex = e.startIndex, t.endIndex = e.endIndex, e.sourceCodeLocation != null && (t.sourceCodeLocation = e.sourceCodeLocation), t;
}
fe.cloneNode = ic;
function pn(e) {
  for (var u = e.map(function(r) {
    return ic(r, !0);
  }), t = 1; t < u.length; t++)
    u[t].prev = u[t - 1], u[t - 1].next = u[t];
  return u;
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(c, o, d, s) {
    s === void 0 && (s = d);
    var E = Object.getOwnPropertyDescriptor(o, d);
    (!E || ("get" in E ? !o.__esModule : E.writable || E.configurable)) && (E = { enumerable: !0, get: function() {
      return o[d];
    } }), Object.defineProperty(c, s, E);
  } : function(c, o, d, s) {
    s === void 0 && (s = d), c[s] = o[d];
  }), t = C && C.__exportStar || function(c, o) {
    for (var d in c)
      d !== "default" && !Object.prototype.hasOwnProperty.call(o, d) && u(o, c, d);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var r = Le, a = fe;
  t(fe, e);
  var n = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, i = (
    /** @class */
    function() {
      function c(o, d, s) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof d == "function" && (s = d, d = n), typeof o == "object" && (d = o, o = void 0), this.callback = o ?? null, this.options = d ?? n, this.elementCB = s ?? null;
      }
      return c.prototype.onparserinit = function(o) {
        this.parser = o;
      }, c.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, c.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, c.prototype.onerror = function(o) {
        this.handleCallback(o);
      }, c.prototype.onclosetag = function() {
        this.lastNode = null;
        var o = this.tagStack.pop();
        this.options.withEndIndices && (o.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(o);
      }, c.prototype.onopentag = function(o, d) {
        var s = this.options.xmlMode ? r.ElementType.Tag : void 0, E = new a.Element(o, d, void 0, s);
        this.addNode(E), this.tagStack.push(E);
      }, c.prototype.ontext = function(o) {
        var d = this.lastNode;
        if (d && d.type === r.ElementType.Text)
          d.data += o, this.options.withEndIndices && (d.endIndex = this.parser.endIndex);
        else {
          var s = new a.Text(o);
          this.addNode(s), this.lastNode = s;
        }
      }, c.prototype.oncomment = function(o) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += o;
          return;
        }
        var d = new a.Comment(o);
        this.addNode(d), this.lastNode = d;
      }, c.prototype.oncommentend = function() {
        this.lastNode = null;
      }, c.prototype.oncdatastart = function() {
        var o = new a.Text(""), d = new a.CDATA([o]);
        this.addNode(d), o.parent = d, this.lastNode = o;
      }, c.prototype.oncdataend = function() {
        this.lastNode = null;
      }, c.prototype.onprocessinginstruction = function(o, d) {
        var s = new a.ProcessingInstruction(o, d);
        this.addNode(s);
      }, c.prototype.handleCallback = function(o) {
        if (typeof this.callback == "function")
          this.callback(o, this.dom);
        else if (o)
          throw o;
      }, c.prototype.addNode = function(o) {
        var d = this.tagStack[this.tagStack.length - 1], s = d.children[d.children.length - 1];
        this.options.withStartIndices && (o.startIndex = this.parser.startIndex), this.options.withEndIndices && (o.endIndex = this.parser.endIndex), d.children.push(o), s && (o.prev = s, s.next = o), o.parent = d, this.lastNode = null;
      }, c;
    }()
  );
  e.DomHandler = i, e.default = i;
})(Ju);
var wr = {}, vu = {}, or = {}, z1 = {}, Lt = {}, cc = {};
Object.defineProperty(cc, "__esModule", { value: !0 });
function vr(e) {
  for (var u = 1; u < e.length; u++)
    e[u][0] += e[u - 1][0] + 1;
  return e;
}
cc.default = new Map(/* @__PURE__ */ vr([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ vr([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ vr([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ vr([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var ta = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.getCodePoint = e.xmlReplacer = void 0, e.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var u = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  e.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(a, n) {
    return a.codePointAt(n);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(a, n) {
      return (a.charCodeAt(n) & 64512) === 55296 ? (a.charCodeAt(n) - 55296) * 1024 + a.charCodeAt(n + 1) - 56320 + 65536 : a.charCodeAt(n);
    }
  );
  function t(a) {
    for (var n = "", i = 0, c; (c = e.xmlReplacer.exec(a)) !== null; ) {
      var o = c.index, d = a.charCodeAt(o), s = u.get(d);
      s !== void 0 ? (n += a.substring(i, o) + s, i = o + 1) : (n += "".concat(a.substring(i, o), "&#x").concat((0, e.getCodePoint)(a, o).toString(16), ";"), i = e.xmlReplacer.lastIndex += +((d & 64512) === 55296));
    }
    return n + a.substr(i);
  }
  e.encodeXML = t, e.escape = t;
  function r(a, n) {
    return function(c) {
      for (var o, d = 0, s = ""; o = a.exec(c); )
        d !== o.index && (s += c.substring(d, o.index)), s += n.get(o[0].charCodeAt(0)), d = o.index + 1;
      return s + c.substring(d);
    };
  }
  e.escapeUTF8 = r(/[&<>'"]/g, u), e.escapeAttribute = r(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), e.escapeText = r(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(ta);
var J4 = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Lt, "__esModule", { value: !0 });
Lt.encodeNonAsciiHTML = Lt.encodeHTML = void 0;
var Z4 = J4(cc), Q1 = ta, em = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function um(e) {
  return K1(em, e);
}
Lt.encodeHTML = um;
function tm(e) {
  return K1(Q1.xmlReplacer, e);
}
Lt.encodeNonAsciiHTML = tm;
function K1(e, u) {
  for (var t = "", r = 0, a; (a = e.exec(u)) !== null; ) {
    var n = a.index;
    t += u.substring(r, n);
    var i = u.charCodeAt(n), c = Z4.default.get(i);
    if (typeof c == "object") {
      if (n + 1 < u.length) {
        var o = u.charCodeAt(n + 1), d = typeof c.n == "number" ? c.n === o ? c.o : void 0 : c.n.get(o);
        if (d !== void 0) {
          t += d, r = e.lastIndex += 1;
          continue;
        }
      }
      c = c.v;
    }
    if (c !== void 0)
      t += c, r = n + 1;
    else {
      var s = (0, Q1.getCodePoint)(u, n);
      t += "&#x".concat(s.toString(16), ";"), r = e.lastIndex += +(s !== i);
    }
  }
  return t + u.substr(r);
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeXMLStrict = e.decodeHTML5Strict = e.decodeHTML4Strict = e.decodeHTML5 = e.decodeHTML4 = e.decodeHTMLAttribute = e.decodeHTMLStrict = e.decodeHTML = e.decodeXML = e.DecodingMode = e.EntityDecoder = e.encodeHTML5 = e.encodeHTML4 = e.encodeNonAsciiHTML = e.encodeHTML = e.escapeText = e.escapeAttribute = e.escapeUTF8 = e.escape = e.encodeXML = e.encode = e.decodeStrict = e.decode = e.EncodingMode = e.EntityLevel = void 0;
  var u = V0, t = Lt, r = ta, a;
  (function(b) {
    b[b.XML = 0] = "XML", b[b.HTML = 1] = "HTML";
  })(a = e.EntityLevel || (e.EntityLevel = {}));
  var n;
  (function(b) {
    b[b.UTF8 = 0] = "UTF8", b[b.ASCII = 1] = "ASCII", b[b.Extensive = 2] = "Extensive", b[b.Attribute = 3] = "Attribute", b[b.Text = 4] = "Text";
  })(n = e.EncodingMode || (e.EncodingMode = {}));
  function i(b, m) {
    m === void 0 && (m = a.XML);
    var v = typeof m == "number" ? m : m.level;
    if (v === a.HTML) {
      var P = typeof m == "object" ? m.mode : void 0;
      return (0, u.decodeHTML)(b, P);
    }
    return (0, u.decodeXML)(b);
  }
  e.decode = i;
  function c(b, m) {
    var v;
    m === void 0 && (m = a.XML);
    var P = typeof m == "number" ? { level: m } : m;
    return (v = P.mode) !== null && v !== void 0 || (P.mode = u.DecodingMode.Strict), i(b, P);
  }
  e.decodeStrict = c;
  function o(b, m) {
    m === void 0 && (m = a.XML);
    var v = typeof m == "number" ? { level: m } : m;
    return v.mode === n.UTF8 ? (0, r.escapeUTF8)(b) : v.mode === n.Attribute ? (0, r.escapeAttribute)(b) : v.mode === n.Text ? (0, r.escapeText)(b) : v.level === a.HTML ? v.mode === n.ASCII ? (0, t.encodeNonAsciiHTML)(b) : (0, t.encodeHTML)(b) : (0, r.encodeXML)(b);
  }
  e.encode = o;
  var d = ta;
  Object.defineProperty(e, "encodeXML", { enumerable: !0, get: function() {
    return d.encodeXML;
  } }), Object.defineProperty(e, "escape", { enumerable: !0, get: function() {
    return d.escape;
  } }), Object.defineProperty(e, "escapeUTF8", { enumerable: !0, get: function() {
    return d.escapeUTF8;
  } }), Object.defineProperty(e, "escapeAttribute", { enumerable: !0, get: function() {
    return d.escapeAttribute;
  } }), Object.defineProperty(e, "escapeText", { enumerable: !0, get: function() {
    return d.escapeText;
  } });
  var s = Lt;
  Object.defineProperty(e, "encodeHTML", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(e, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return s.encodeNonAsciiHTML;
  } }), Object.defineProperty(e, "encodeHTML4", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(e, "encodeHTML5", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } });
  var E = V0;
  Object.defineProperty(e, "EntityDecoder", { enumerable: !0, get: function() {
    return E.EntityDecoder;
  } }), Object.defineProperty(e, "DecodingMode", { enumerable: !0, get: function() {
    return E.DecodingMode;
  } }), Object.defineProperty(e, "decodeXML", { enumerable: !0, get: function() {
    return E.decodeXML;
  } }), Object.defineProperty(e, "decodeHTML", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return E.decodeHTMLAttribute;
  } }), Object.defineProperty(e, "decodeHTML4", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML5", { enumerable: !0, get: function() {
    return E.decodeHTML;
  } }), Object.defineProperty(e, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return E.decodeHTMLStrict;
  } }), Object.defineProperty(e, "decodeXMLStrict", { enumerable: !0, get: function() {
    return E.decodeXML;
  } });
})(z1);
var b0 = {};
Object.defineProperty(b0, "__esModule", { value: !0 });
b0.attributeNames = b0.elementNames = void 0;
b0.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
b0.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(e) {
  return [e.toLowerCase(), e];
}));
var zt = C && C.__assign || function() {
  return zt = Object.assign || function(e) {
    for (var u, t = 1, r = arguments.length; t < r; t++) {
      u = arguments[t];
      for (var a in u)
        Object.prototype.hasOwnProperty.call(u, a) && (e[a] = u[a]);
    }
    return e;
  }, zt.apply(this, arguments);
}, rm = C && C.__createBinding || (Object.create ? function(e, u, t, r) {
  r === void 0 && (r = t);
  var a = Object.getOwnPropertyDescriptor(u, t);
  (!a || ("get" in a ? !u.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
    return u[t];
  } }), Object.defineProperty(e, r, a);
} : function(e, u, t, r) {
  r === void 0 && (r = t), e[r] = u[t];
}), am = C && C.__setModuleDefault || (Object.create ? function(e, u) {
  Object.defineProperty(e, "default", { enumerable: !0, value: u });
} : function(e, u) {
  e.default = u;
}), nm = C && C.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var u = {};
  if (e != null)
    for (var t in e)
      t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && rm(u, e, t);
  return am(u, e), u;
};
Object.defineProperty(or, "__esModule", { value: !0 });
or.render = void 0;
var zu = nm(Le), ra = z1, J1 = b0, im = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function cm(e) {
  return e.replace(/"/g, "&quot;");
}
function sm(e, u) {
  var t;
  if (e) {
    var r = ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) === !1 ? cm : u.xmlMode || u.encodeEntities !== "utf8" ? ra.encodeXML : ra.escapeAttribute;
    return Object.keys(e).map(function(a) {
      var n, i, c = (n = e[a]) !== null && n !== void 0 ? n : "";
      return u.xmlMode === "foreign" && (a = (i = J1.attributeNames.get(a)) !== null && i !== void 0 ? i : a), !u.emptyAttrs && !u.xmlMode && c === "" ? a : "".concat(a, '="').concat(r(c), '"');
    }).join(" ");
  }
}
var Zc = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function Ya(e, u) {
  u === void 0 && (u = {});
  for (var t = ("length" in e) ? e : [e], r = "", a = 0; a < t.length; a++)
    r += om(t[a], u);
  return r;
}
or.render = Ya;
or.default = Ya;
function om(e, u) {
  switch (e.type) {
    case zu.Root:
      return Ya(e.children, u);
    case zu.Doctype:
    case zu.Directive:
      return bm(e);
    case zu.Comment:
      return mm(e);
    case zu.CDATA:
      return pm(e);
    case zu.Script:
    case zu.Style:
    case zu.Tag:
      return fm(e, u);
    case zu.Text:
      return hm(e, u);
  }
}
var dm = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), lm = /* @__PURE__ */ new Set(["svg", "math"]);
function fm(e, u) {
  var t;
  u.xmlMode === "foreign" && (e.name = (t = J1.elementNames.get(e.name)) !== null && t !== void 0 ? t : e.name, e.parent && dm.has(e.parent.name) && (u = zt(zt({}, u), { xmlMode: !1 }))), !u.xmlMode && lm.has(e.name) && (u = zt(zt({}, u), { xmlMode: "foreign" }));
  var r = "<".concat(e.name), a = sm(e.attribs, u);
  return a && (r += " ".concat(a)), e.children.length === 0 && (u.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    u.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    u.selfClosingTags && Zc.has(e.name)
  )) ? (u.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += Ya(e.children, u)), (u.xmlMode || !Zc.has(e.name)) && (r += "</".concat(e.name, ">"))), r;
}
function bm(e) {
  return "<".concat(e.data, ">");
}
function hm(e, u) {
  var t, r = e.data || "";
  return ((t = u.encodeEntities) !== null && t !== void 0 ? t : u.decodeEntities) !== !1 && !(!u.xmlMode && e.parent && im.has(e.parent.name)) && (r = u.xmlMode || u.encodeEntities !== "utf8" ? (0, ra.encodeXML)(r) : (0, ra.escapeText)(r)), r;
}
function pm(e) {
  return "<![CDATA[".concat(e.children[0].data, "]]>");
}
function mm(e) {
  return "<!--".concat(e.data, "-->");
}
var gm = C && C.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(vu, "__esModule", { value: !0 });
vu.innerText = vu.textContent = vu.getText = vu.getInnerHTML = vu.getOuterHTML = void 0;
var Gu = Ju, Em = gm(or), Tm = Le;
function Z1(e, u) {
  return (0, Em.default)(e, u);
}
vu.getOuterHTML = Z1;
function _m(e, u) {
  return (0, Gu.hasChildren)(e) ? e.children.map(function(t) {
    return Z1(t, u);
  }).join("") : "";
}
vu.getInnerHTML = _m;
function Rr(e) {
  return Array.isArray(e) ? e.map(Rr).join("") : (0, Gu.isTag)(e) ? e.name === "br" ? `
` : Rr(e.children) : (0, Gu.isCDATA)(e) ? Rr(e.children) : (0, Gu.isText)(e) ? e.data : "";
}
vu.getText = Rr;
function ti(e) {
  return Array.isArray(e) ? e.map(ti).join("") : (0, Gu.hasChildren)(e) && !(0, Gu.isComment)(e) ? ti(e.children) : (0, Gu.isText)(e) ? e.data : "";
}
vu.textContent = ti;
function ri(e) {
  return Array.isArray(e) ? e.map(ri).join("") : (0, Gu.hasChildren)(e) && (e.type === Tm.ElementType.Tag || (0, Gu.isCDATA)(e)) ? ri(e.children) : (0, Gu.isText)(e) ? e.data : "";
}
vu.innerText = ri;
var Ge = {};
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.prevElementSibling = Ge.nextElementSibling = Ge.getName = Ge.hasAttrib = Ge.getAttributeValue = Ge.getSiblings = Ge.getParent = Ge.getChildren = void 0;
var sc = Ju;
function el(e) {
  return (0, sc.hasChildren)(e) ? e.children : [];
}
Ge.getChildren = el;
function ul(e) {
  return e.parent || null;
}
Ge.getParent = ul;
function ym(e) {
  var u, t, r = ul(e);
  if (r != null)
    return el(r);
  for (var a = [e], n = e.prev, i = e.next; n != null; )
    a.unshift(n), u = n, n = u.prev;
  for (; i != null; )
    a.push(i), t = i, i = t.next;
  return a;
}
Ge.getSiblings = ym;
function Am(e, u) {
  var t;
  return (t = e.attribs) === null || t === void 0 ? void 0 : t[u];
}
Ge.getAttributeValue = Am;
function vm(e, u) {
  return e.attribs != null && Object.prototype.hasOwnProperty.call(e.attribs, u) && e.attribs[u] != null;
}
Ge.hasAttrib = vm;
function xm(e) {
  return e.name;
}
Ge.getName = xm;
function Nm(e) {
  for (var u, t = e.next; t !== null && !(0, sc.isTag)(t); )
    u = t, t = u.next;
  return t;
}
Ge.nextElementSibling = Nm;
function Im(e) {
  for (var u, t = e.prev; t !== null && !(0, sc.isTag)(t); )
    u = t, t = u.prev;
  return t;
}
Ge.prevElementSibling = Im;
var su = {};
Object.defineProperty(su, "__esModule", { value: !0 });
su.prepend = su.prependChild = su.append = su.appendChild = su.replaceElement = su.removeElement = void 0;
function dr(e) {
  if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
    var u = e.parent.children, t = u.lastIndexOf(e);
    t >= 0 && u.splice(t, 1);
  }
  e.next = null, e.prev = null, e.parent = null;
}
su.removeElement = dr;
function Dm(e, u) {
  var t = u.prev = e.prev;
  t && (t.next = u);
  var r = u.next = e.next;
  r && (r.prev = u);
  var a = u.parent = e.parent;
  if (a) {
    var n = a.children;
    n[n.lastIndexOf(e)] = u, e.parent = null;
  }
}
su.replaceElement = Dm;
function Cm(e, u) {
  if (dr(u), u.next = null, u.parent = e, e.children.push(u) > 1) {
    var t = e.children[e.children.length - 2];
    t.next = u, u.prev = t;
  } else
    u.prev = null;
}
su.appendChild = Cm;
function Sm(e, u) {
  dr(u);
  var t = e.parent, r = e.next;
  if (u.next = r, u.prev = e, e.next = u, u.parent = t, r) {
    if (r.prev = u, t) {
      var a = t.children;
      a.splice(a.lastIndexOf(r), 0, u);
    }
  } else
    t && t.children.push(u);
}
su.append = Sm;
function Om(e, u) {
  if (dr(u), u.parent = e, u.prev = null, e.children.unshift(u) !== 1) {
    var t = e.children[1];
    t.prev = u, u.next = t;
  } else
    u.next = null;
}
su.prependChild = Om;
function Pm(e, u) {
  dr(u);
  var t = e.parent;
  if (t) {
    var r = t.children;
    r.splice(r.indexOf(e), 0, u);
  }
  e.prev && (e.prev.next = u), u.parent = t, u.prev = e.prev, u.next = e, e.prev = u;
}
su.prepend = Pm;
var Je = {};
Object.defineProperty(Je, "__esModule", { value: !0 });
Je.findAll = Je.existsOne = Je.findOne = Je.findOneChild = Je.find = Je.filter = void 0;
var Xa = Ju;
function Lm(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), tl(e, Array.isArray(u) ? u : [u], t, r);
}
Je.filter = Lm;
function tl(e, u, t, r) {
  for (var a = [], n = [u], i = [0]; ; ) {
    if (i[0] >= n[0].length) {
      if (i.length === 1)
        return a;
      n.shift(), i.shift();
      continue;
    }
    var c = n[0][i[0]++];
    if (e(c) && (a.push(c), --r <= 0))
      return a;
    t && (0, Xa.hasChildren)(c) && c.children.length > 0 && (i.unshift(0), n.unshift(c.children));
  }
}
Je.find = tl;
function wm(e, u) {
  return u.find(e);
}
Je.findOneChild = wm;
function rl(e, u, t) {
  t === void 0 && (t = !0);
  for (var r = null, a = 0; a < u.length && !r; a++) {
    var n = u[a];
    if ((0, Xa.isTag)(n))
      e(n) ? r = n : t && n.children.length > 0 && (r = rl(e, n.children, !0));
    else
      continue;
  }
  return r;
}
Je.findOne = rl;
function al(e, u) {
  return u.some(function(t) {
    return (0, Xa.isTag)(t) && (e(t) || al(e, t.children));
  });
}
Je.existsOne = al;
function Rm(e, u) {
  for (var t = [], r = [u], a = [0]; ; ) {
    if (a[0] >= r[0].length) {
      if (r.length === 1)
        return t;
      r.shift(), a.shift();
      continue;
    }
    var n = r[0][a[0]++];
    (0, Xa.isTag)(n) && (e(n) && t.push(n), n.children.length > 0 && (a.unshift(0), r.unshift(n.children)));
  }
}
Je.findAll = Rm;
var xu = {};
Object.defineProperty(xu, "__esModule", { value: !0 });
xu.getElementsByTagType = xu.getElementsByTagName = xu.getElementById = xu.getElements = xu.testElement = void 0;
var Nt = Ju, Wa = Je, aa = {
  tag_name: function(e) {
    return typeof e == "function" ? function(u) {
      return (0, Nt.isTag)(u) && e(u.name);
    } : e === "*" ? Nt.isTag : function(u) {
      return (0, Nt.isTag)(u) && u.name === e;
    };
  },
  tag_type: function(e) {
    return typeof e == "function" ? function(u) {
      return e(u.type);
    } : function(u) {
      return u.type === e;
    };
  },
  tag_contains: function(e) {
    return typeof e == "function" ? function(u) {
      return (0, Nt.isText)(u) && e(u.data);
    } : function(u) {
      return (0, Nt.isText)(u) && u.data === e;
    };
  }
};
function nl(e, u) {
  return typeof u == "function" ? function(t) {
    return (0, Nt.isTag)(t) && u(t.attribs[e]);
  } : function(t) {
    return (0, Nt.isTag)(t) && t.attribs[e] === u;
  };
}
function Mm(e, u) {
  return function(t) {
    return e(t) || u(t);
  };
}
function il(e) {
  var u = Object.keys(e).map(function(t) {
    var r = e[t];
    return Object.prototype.hasOwnProperty.call(aa, t) ? aa[t](r) : nl(t, r);
  });
  return u.length === 0 ? null : u.reduce(Mm);
}
function km(e, u) {
  var t = il(e);
  return t ? t(u) : !0;
}
xu.testElement = km;
function Bm(e, u, t, r) {
  r === void 0 && (r = 1 / 0);
  var a = il(e);
  return a ? (0, Wa.filter)(a, u, t, r) : [];
}
xu.getElements = Bm;
function Um(e, u, t) {
  return t === void 0 && (t = !0), Array.isArray(u) || (u = [u]), (0, Wa.findOne)(nl("id", e), u, t);
}
xu.getElementById = Um;
function Hm(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Wa.filter)(aa.tag_name(e), u, t, r);
}
xu.getElementsByTagName = Hm;
function Fm(e, u, t, r) {
  return t === void 0 && (t = !0), r === void 0 && (r = 1 / 0), (0, Wa.filter)(aa.tag_type(e), u, t, r);
}
xu.getElementsByTagType = Fm;
var cl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.uniqueSort = e.compareDocumentPosition = e.DocumentPosition = e.removeSubsets = void 0;
  var u = Ju;
  function t(i) {
    for (var c = i.length; --c >= 0; ) {
      var o = i[c];
      if (c > 0 && i.lastIndexOf(o, c - 1) >= 0) {
        i.splice(c, 1);
        continue;
      }
      for (var d = o.parent; d; d = d.parent)
        if (i.includes(d)) {
          i.splice(c, 1);
          break;
        }
    }
    return i;
  }
  e.removeSubsets = t;
  var r;
  (function(i) {
    i[i.DISCONNECTED = 1] = "DISCONNECTED", i[i.PRECEDING = 2] = "PRECEDING", i[i.FOLLOWING = 4] = "FOLLOWING", i[i.CONTAINS = 8] = "CONTAINS", i[i.CONTAINED_BY = 16] = "CONTAINED_BY";
  })(r = e.DocumentPosition || (e.DocumentPosition = {}));
  function a(i, c) {
    var o = [], d = [];
    if (i === c)
      return 0;
    for (var s = (0, u.hasChildren)(i) ? i : i.parent; s; )
      o.unshift(s), s = s.parent;
    for (s = (0, u.hasChildren)(c) ? c : c.parent; s; )
      d.unshift(s), s = s.parent;
    for (var E = Math.min(o.length, d.length), b = 0; b < E && o[b] === d[b]; )
      b++;
    if (b === 0)
      return r.DISCONNECTED;
    var m = o[b - 1], v = m.children, P = o[b], I = d[b];
    return v.indexOf(P) > v.indexOf(I) ? m === c ? r.FOLLOWING | r.CONTAINED_BY : r.FOLLOWING : m === i ? r.PRECEDING | r.CONTAINS : r.PRECEDING;
  }
  e.compareDocumentPosition = a;
  function n(i) {
    return i = i.filter(function(c, o, d) {
      return !d.includes(c, o + 1);
    }), i.sort(function(c, o) {
      var d = a(c, o);
      return d & r.PRECEDING ? -1 : d & r.FOLLOWING ? 1 : 0;
    }), i;
  }
  e.uniqueSort = n;
})(cl);
var za = {};
Object.defineProperty(za, "__esModule", { value: !0 });
za.getFeed = void 0;
var qm = vu, lr = xu;
function Gm(e) {
  var u = na(Xm, e);
  return u ? u.name === "feed" ? jm(u) : $m(u) : null;
}
za.getFeed = Gm;
function jm(e) {
  var u, t = e.children, r = {
    type: "atom",
    items: (0, lr.getElementsByTagName)("entry", t).map(function(i) {
      var c, o = i.children, d = { media: sl(o) };
      au(d, "id", "id", o), au(d, "title", "title", o);
      var s = (c = na("link", o)) === null || c === void 0 ? void 0 : c.attribs.href;
      s && (d.link = s);
      var E = st("summary", o) || st("content", o);
      E && (d.description = E);
      var b = st("updated", o);
      return b && (d.pubDate = new Date(b)), d;
    })
  };
  au(r, "id", "id", t), au(r, "title", "title", t);
  var a = (u = na("link", t)) === null || u === void 0 ? void 0 : u.attribs.href;
  a && (r.link = a), au(r, "description", "subtitle", t);
  var n = st("updated", t);
  return n && (r.updated = new Date(n)), au(r, "author", "email", t, !0), r;
}
function $m(e) {
  var u, t, r = (t = (u = na("channel", e.children)) === null || u === void 0 ? void 0 : u.children) !== null && t !== void 0 ? t : [], a = {
    type: e.name.substr(0, 3),
    id: "",
    items: (0, lr.getElementsByTagName)("item", e.children).map(function(i) {
      var c = i.children, o = { media: sl(c) };
      au(o, "id", "guid", c), au(o, "title", "title", c), au(o, "link", "link", c), au(o, "description", "description", c);
      var d = st("pubDate", c) || st("dc:date", c);
      return d && (o.pubDate = new Date(d)), o;
    })
  };
  au(a, "title", "title", r), au(a, "link", "link", r), au(a, "description", "description", r);
  var n = st("lastBuildDate", r);
  return n && (a.updated = new Date(n)), au(a, "author", "managingEditor", r, !0), a;
}
var Vm = ["url", "type", "lang"], Ym = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function sl(e) {
  return (0, lr.getElementsByTagName)("media:content", e).map(function(u) {
    for (var t = u.attribs, r = {
      medium: t.medium,
      isDefault: !!t.isDefault
    }, a = 0, n = Vm; a < n.length; a++) {
      var i = n[a];
      t[i] && (r[i] = t[i]);
    }
    for (var c = 0, o = Ym; c < o.length; c++) {
      var i = o[c];
      t[i] && (r[i] = parseInt(t[i], 10));
    }
    return t.expression && (r.expression = t.expression), r;
  });
}
function na(e, u) {
  return (0, lr.getElementsByTagName)(e, u, !0, 1)[0];
}
function st(e, u, t) {
  return t === void 0 && (t = !1), (0, qm.textContent)((0, lr.getElementsByTagName)(e, u, t, 1)).trim();
}
function au(e, u, t, r, a) {
  a === void 0 && (a = !1);
  var n = st(t, r, a);
  n && (e[u] = n);
}
function Xm(e) {
  return e === "rss" || e === "feed" || e === "rdf:RDF";
}
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(a, n, i, c) {
    c === void 0 && (c = i);
    var o = Object.getOwnPropertyDescriptor(n, i);
    (!o || ("get" in o ? !n.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return n[i];
    } }), Object.defineProperty(a, c, o);
  } : function(a, n, i, c) {
    c === void 0 && (c = i), a[c] = n[i];
  }), t = C && C.__exportStar || function(a, n) {
    for (var i in a)
      i !== "default" && !Object.prototype.hasOwnProperty.call(n, i) && u(n, a, i);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.hasChildren = e.isDocument = e.isComment = e.isText = e.isCDATA = e.isTag = void 0, t(vu, e), t(Ge, e), t(su, e), t(Je, e), t(xu, e), t(cl, e), t(za, e);
  var r = Ju;
  Object.defineProperty(e, "isTag", { enumerable: !0, get: function() {
    return r.isTag;
  } }), Object.defineProperty(e, "isCDATA", { enumerable: !0, get: function() {
    return r.isCDATA;
  } }), Object.defineProperty(e, "isText", { enumerable: !0, get: function() {
    return r.isText;
  } }), Object.defineProperty(e, "isComment", { enumerable: !0, get: function() {
    return r.isComment;
  } }), Object.defineProperty(e, "isDocument", { enumerable: !0, get: function() {
    return r.isDocument;
  } }), Object.defineProperty(e, "hasChildren", { enumerable: !0, get: function() {
    return r.hasChildren;
  } });
})(wr);
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(O, M, U, B) {
    B === void 0 && (B = U);
    var w = Object.getOwnPropertyDescriptor(M, U);
    (!w || ("get" in w ? !M.__esModule : w.writable || w.configurable)) && (w = { enumerable: !0, get: function() {
      return M[U];
    } }), Object.defineProperty(O, B, w);
  } : function(O, M, U, B) {
    B === void 0 && (B = U), O[B] = M[U];
  }), t = C && C.__setModuleDefault || (Object.create ? function(O, M) {
    Object.defineProperty(O, "default", { enumerable: !0, value: M });
  } : function(O, M) {
    O.default = M;
  }), r = C && C.__importStar || function(O) {
    if (O && O.__esModule)
      return O;
    var M = {};
    if (O != null)
      for (var U in O)
        U !== "default" && Object.prototype.hasOwnProperty.call(O, U) && u(M, O, U);
    return t(M, O), M;
  }, a = C && C.__importDefault || function(O) {
    return O && O.__esModule ? O : { default: O };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomUtils = e.parseFeed = e.getFeed = e.ElementType = e.Tokenizer = e.createDomStream = e.parseDOM = e.parseDocument = e.DefaultHandler = e.DomHandler = e.Parser = void 0;
  var n = $0, i = $0;
  Object.defineProperty(e, "Parser", { enumerable: !0, get: function() {
    return i.Parser;
  } });
  var c = Ju, o = Ju;
  Object.defineProperty(e, "DomHandler", { enumerable: !0, get: function() {
    return o.DomHandler;
  } }), Object.defineProperty(e, "DefaultHandler", { enumerable: !0, get: function() {
    return o.DomHandler;
  } });
  function d(O, M) {
    var U = new c.DomHandler(void 0, M);
    return new n.Parser(U, M).end(O), U.root;
  }
  e.parseDocument = d;
  function s(O, M) {
    return d(O, M).children;
  }
  e.parseDOM = s;
  function E(O, M, U) {
    var B = new c.DomHandler(O, M, U);
    return new n.Parser(B, M);
  }
  e.createDomStream = E;
  var b = tc;
  Object.defineProperty(e, "Tokenizer", { enumerable: !0, get: function() {
    return a(b).default;
  } }), e.ElementType = r(Le);
  var m = wr, v = wr;
  Object.defineProperty(e, "getFeed", { enumerable: !0, get: function() {
    return v.getFeed;
  } });
  var P = { xmlMode: !0 };
  function I(O, M) {
    return M === void 0 && (M = P), (0, m.getFeed)(s(O, M));
  }
  e.parseFeed = I, e.DomUtils = r(wr);
})(k1);
(function(e) {
  var u = C && C.__createBinding || (Object.create ? function(v, P, I, O) {
    O === void 0 && (O = I);
    var M = Object.getOwnPropertyDescriptor(P, I);
    (!M || ("get" in M ? !P.__esModule : M.writable || M.configurable)) && (M = { enumerable: !0, get: function() {
      return P[I];
    } }), Object.defineProperty(v, O, M);
  } : function(v, P, I, O) {
    O === void 0 && (O = I), v[O] = P[I];
  }), t = C && C.__setModuleDefault || (Object.create ? function(v, P) {
    Object.defineProperty(v, "default", { enumerable: !0, value: P });
  } : function(v, P) {
    v.default = P;
  }), r = C && C.__exportStar || function(v, P) {
    for (var I in v)
      I !== "default" && !Object.prototype.hasOwnProperty.call(P, I) && u(P, v, I);
  }, a = C && C.__importStar || function(v) {
    if (v && v.__esModule)
      return v;
    var P = {};
    if (v != null)
      for (var I in v)
        I !== "default" && Object.prototype.hasOwnProperty.call(v, I) && u(P, v, I);
    return t(P, v), P;
  }, n = C && C.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.root = e.parseHTML = e.merge = e.contains = e.text = e.xml = e.html = e.load = void 0, r(Gs, e);
  var i = ca, c = Ot, o = o0, d = n(m0), s = k1, E = (0, c.getParse)(function(v, P, I, O) {
    return P.xmlMode || P._useHtmlParser2 ? (0, s.parseDocument)(v, P) : (0, o.parseWithParse5)(v, P, I, O);
  });
  e.load = (0, i.getLoad)(E, function(v, P) {
    return P.xmlMode || P._useHtmlParser2 ? (0, d.default)(v, P) : (0, o.renderWithParse5)(v);
  }), e.default = (0, e.load)([]);
  var b = Ce;
  Object.defineProperty(e, "html", { enumerable: !0, get: function() {
    return b.html;
  } }), Object.defineProperty(e, "xml", { enumerable: !0, get: function() {
    return b.xml;
  } }), Object.defineProperty(e, "text", { enumerable: !0, get: function() {
    return b.text;
  } });
  var m = a(Ce);
  e.contains = m.contains, e.merge = m.merge, e.parseHTML = m.parseHTML, e.root = m.root;
})(qs);
var mn = {}, ol = { exports: {} }, dl = { exports: {} };
(function(e, u) {
  e.exports = t;
  function t(a) {
    return r.bind(null, a);
  }
  function r(a) {
    var n = [].slice.call(arguments, 1);
    n.unshift("[" + a + "]"), Pu.process.stderr.write(n.join(" ") + `
`);
  }
})(dl);
var oc = dl.exports;
(function(e, u) {
  oc("lex"), e.exports = t;
  function t(r) {
    var a = "", n, i = 0, c = -1, o = 0, d = 1, s = "before-selector", E = [s], b = {}, m = [], v = [
      "media",
      "keyframes",
      { name: "-webkit-keyframes", type: "keyframes", prefix: "-webkit-" },
      { name: "-moz-keyframes", type: "keyframes", prefix: "-moz-" },
      { name: "-ms-keyframes", type: "keyframes", prefix: "-ms-" },
      { name: "-o-keyframes", type: "keyframes", prefix: "-o-" },
      "font-face",
      { name: "import", state: "before-at-value" },
      { name: "charset", state: "before-at-value" },
      "supports",
      "viewport",
      { name: "namespace", state: "before-at-value" },
      "document",
      { name: "-moz-document", type: "document", prefix: "-moz-" },
      "page"
    ];
    function P() {
      return Z(), r[c];
    }
    function I(R) {
      return R ? E[E.length - 1 - R] : s;
    }
    function O(R) {
      var $ = c + 1;
      return R === r.slice($, $ + R.length);
    }
    function M(R) {
      var $ = r.slice(c).indexOf(R);
      return $ > 0 ? $ : !1;
    }
    function U(R) {
      return R === B(1);
    }
    function B(R) {
      return r[c + (R || 1)];
    }
    function w() {
      var R = E.pop();
      return s = E[E.length - 1], R;
    }
    function F(R) {
      return s = R, E.push(s), E.length;
    }
    function z(R) {
      var $ = s;
      return E[E.length - 1] = s = R, $;
    }
    function Z(R) {
      if ((R || 1) == 1)
        r[c] == `
` ? (d++, i = 1) : i++, c++;
      else {
        var $ = r.slice(c, c + R).split(`
`);
        $.length > 1 && (d += $.length - 1, i = 1), i += $[$.length - 1].length, c = c + R;
      }
    }
    function ue() {
      b.end = {
        line: d,
        col: i
      }, m.push(b), a = "", b = {};
    }
    function V(R) {
      b = {
        type: R,
        start: {
          line: d,
          col: i
        }
      };
    }
    for (; n = P(); )
      switch (n) {
        case " ":
          switch (I()) {
            case "selector":
            case "value":
            case "value-paren":
            case "at-group":
            case "at-value":
            case "comment":
            case "double-string":
            case "single-string":
              a += n;
              break;
          }
          break;
        case `
`:
        case "	":
        case "\r":
        case "\f":
          switch (I()) {
            case "value":
            case "value-paren":
            case "at-group":
            case "comment":
            case "single-string":
            case "double-string":
            case "selector":
              a += n;
              break;
            case "at-value":
              n === `
` && (b.value = a.trim(), ue(), w());
              break;
          }
          break;
        case ":":
          switch (I()) {
            case "name":
              b.name = a.trim(), a = "", z("before-value");
              break;
            case "before-selector":
              a += n, V("selector"), F("selector");
              break;
            case "before-value":
              z("value"), a += n;
              break;
            default:
              a += n;
              break;
          }
          break;
        case ";":
          switch (I()) {
            case "name":
            case "before-value":
            case "value":
              a.trim().length > 0 && (b.value = a.trim(), ue()), z("before-name");
              break;
            case "value-paren":
              a += n;
              break;
            case "at-value":
              b.value = a.trim(), ue(), w();
              break;
            case "before-name":
              break;
            default:
              a += n;
              break;
          }
          break;
        case "{":
          switch (I()) {
            case "selector":
              if (B(-1) === "\\") {
                a += n;
                break;
              }
              b.text = a.trim(), ue(), z("before-name"), o = o + 1;
              break;
            case "at-group":
              switch (b.name = a.trim(), b.type) {
                case "font-face":
                case "viewport":
                case "page":
                  F("before-name");
                  break;
                default:
                  F("before-selector");
              }
              ue(), o = o + 1;
              break;
            case "name":
            case "at-rule":
              b.name = a.trim(), ue(), F("before-name"), o = o + 1;
              break;
            case "comment":
            case "double-string":
            case "single-string":
              a += n;
              break;
            case "before-value":
              z("value"), a += n;
              break;
          }
          break;
        case "}":
          switch (I()) {
            case "before-name":
            case "name":
            case "before-value":
            case "value":
              a && (b.value = a.trim()), b.name && b.value && ue(), V("end"), ue(), w(), I() === "at-group" && (V("at-group-end"), ue(), w()), o > 0 && (o = o - 1);
              break;
            case "at-group":
            case "before-selector":
            case "selector":
              if (B(-1) === "\\") {
                a += n;
                break;
              }
              o > 0 && I(1) === "at-group" && (V("at-group-end"), ue()), o > 1 && w(), o > 0 && (o = o - 1);
              break;
            case "double-string":
            case "single-string":
            case "comment":
              a += n;
              break;
          }
          break;
        case '"':
        case "'":
          switch (I()) {
            case "double-string":
              n === '"' && B(-1) !== "\\" && w();
              break;
            case "single-string":
              n === "'" && B(-1) !== "\\" && w();
              break;
            case "before-at-value":
              z("at-value"), F(n === '"' ? "double-string" : "single-string");
              break;
            case "before-value":
              z("value"), F(n === '"' ? "double-string" : "single-string");
              break;
            case "comment":
              break;
            default:
              B(-1) !== "\\" && F(n === '"' ? "double-string" : "single-string");
          }
          a += n;
          break;
        case "/":
          switch (I()) {
            case "comment":
            case "double-string":
            case "single-string":
              a += n;
              break;
            case "before-value":
            case "selector":
            case "name":
            case "value":
              if (U("*")) {
                var l = M("*/");
                l && Z(l + 1);
              } else
                I() == "before-value" && z("value"), a += n;
              break;
            default:
              U("*") ? (V("comment"), F("comment"), Z()) : a += n;
              break;
          }
          break;
        case "*":
          switch (I()) {
            case "comment":
              U("/") ? (b.text = a, Z(), ue(), w()) : a += n;
              break;
            case "before-selector":
              a += n, V("selector"), F("selector");
              break;
            case "before-value":
              z("value"), a += n;
              break;
            default:
              a += n;
          }
          break;
        case "@":
          switch (I()) {
            case "comment":
            case "double-string":
            case "single-string":
              a += n;
              break;
            case "before-value":
              z("value"), a += n;
              break;
            default:
              for (var g = !1, T, A, D = 0, k = v.length; !g && D < k; ++D)
                A = v[D], T = A.name || A, O(T) && (g = !0, V(T), F(A.state || "at-group"), Z(T.length), A.prefix && (b.prefix = A.prefix), A.type && (b.type = A.type));
              g || (a += n);
              break;
          }
          break;
        case "(":
          switch (I()) {
            case "value":
              F("value-paren");
              break;
            case "before-value":
              z("value");
              break;
          }
          a += n;
          break;
        case ")":
          switch (I()) {
            case "value-paren":
              w();
              break;
            case "before-value":
              z("value");
              break;
          }
          a += n;
          break;
        default:
          switch (I()) {
            case "before-selector":
              V("selector"), F("selector");
              break;
            case "before-name":
              V("property"), z("name");
              break;
            case "before-value":
              z("value");
              break;
            case "before-at-value":
              z("at-value");
              break;
          }
          a += n;
          break;
      }
    return m;
  }
})(ol);
var ll = ol.exports, fl = { exports: {} };
(function(e, u) {
  oc("parse");
  var t = ll;
  e.exports = c;
  var r, a, n, i;
  function c(w, F) {
    F || (F = {}), r = !!F.comments, n = !!F.position, a = 0, i = Array.isArray(w) ? w.slice() : t(w);
    for (var z, Z = [], ue; ue = d(); )
      z = O(ue), z && Z.push(z);
    return {
      type: "stylesheet",
      stylesheet: {
        rules: Z
      }
    };
  }
  function o(w, F) {
    F || (F = {});
    for (var z, Z = ["type", "name", "value"], ue = {}, V = 0; V < Z.length; ++V)
      z = Z[V], w[z] && (ue[z] = F[z] || w[z]);
    for (Z = Object.keys(F), V = 0; V < Z.length; ++V)
      z = Z[V], ue[z] || (ue[z] = F[z]);
    return n && (ue.position = {
      start: w.start,
      end: w.end
    }), ue;
  }
  function d() {
    var w = i.shift();
    return w;
  }
  function s(w) {
    a = a + 1;
    var F = {};
    switch (w.type) {
      case "font-face":
      case "viewport":
        F.declarations = U();
        break;
      case "page":
        F.prefix = w.prefix, F.declarations = U();
        break;
      default:
        F.prefix = w.prefix, F.rules = B();
    }
    return o(w, F);
  }
  function E(w) {
    return o(w);
  }
  function b(w) {
    return o(w);
  }
  function m(w) {
    return o(w, { text: w.text });
  }
  function v(w) {
    return o(w);
  }
  function P(w) {
    return o(w);
  }
  function I(w) {
    function F(z) {
      return z.trim();
    }
    return o(w, {
      type: "rule",
      selectors: w.text.split(",").map(F),
      declarations: U()
    });
  }
  function O(w) {
    switch (w.type) {
      case "property":
        return P(w);
      case "selector":
        return I(w);
      case "at-group-end":
        a = a - 1;
        return;
      case "media":
      case "keyframes":
        return s(w);
      case "comment":
        if (r)
          return m(w);
        break;
      case "charset":
        return b(w);
      case "import":
        return E(w);
      case "namespace":
        return v(w);
      case "font-face":
      case "supports":
      case "viewport":
      case "document":
      case "page":
        return s(w);
    }
  }
  function M(w) {
    for (var F, z = [], Z; (Z = d()) && w && w(Z); )
      F = O(Z), F && z.push(F);
    return Z && Z.type !== "end" && i.unshift(Z), z;
  }
  function U() {
    return M(function(w) {
      return w.type === "property" || w.type === "comment";
    });
  }
  function B() {
    return M(function() {
      return a;
    });
  }
})(fl);
var Wm = fl.exports, bl = { exports: {} };
(function(e, u) {
  oc("stringify");
  var t, r, a, n, i, c;
  e.exports = o;
  function o(B, w) {
    w || (w = {}), a = w.indentation || "", r = !!w.compress, t = !!w.comments, n = 1, r ? i = c = "" : (i = `
`, c = " ");
    var F = v(B.stylesheet.rules, M).join(`
`).trim();
    return F;
  }
  function d(B) {
    if (B) {
      n += B;
      return;
    }
    return r ? "" : Array(n).join(a || "");
  }
  function s(B) {
    return "@" + B.type + " " + B.value + ";" + i;
  }
  function E(B) {
    var w = "", F = B.prefix || "";
    B.name && (w = " " + B.name);
    var z = B.type !== "page";
    return "@" + F + B.type + w + c + P(B, z) + i;
  }
  function b(B) {
    return t ? "/*" + (B.text || "") + "*/" + i : "";
  }
  function m(B) {
    var w;
    return B.selectors ? w = B.selectors.join("," + i) : (w = "@" + B.type, w += B.name ? " " + B.name : ""), d() + w + c + P(B) + i;
  }
  function v(B, w) {
    return B.reduce(function(F, z) {
      var Z = z.type === "comment" ? b(z) : w(z);
      return Z && F.push(Z), F;
    }, []);
  }
  function P(B, w) {
    var F = B.declarations, z = O;
    return B.rules && (F = B.rules, z = m), F = I(F, z), F && (F = i + F + (w ? "" : i)), "{" + F + d() + "}";
  }
  function I(B, w) {
    if (!B)
      return "";
    d(1);
    var F = v(B, w);
    return d(-1), F.length ? F.join(i) : "";
  }
  function O(B) {
    if (B.type === "property")
      return U(B);
  }
  function M(B) {
    switch (B.type) {
      case "rule":
        return m(B);
      case "media":
      case "keyframes":
        return E(B);
      case "comment":
        return b(B);
      case "import":
      case "charset":
      case "namespace":
        return s(B);
      case "font-face":
      case "supports":
      case "viewport":
      case "document":
      case "page":
        return E(B);
    }
  }
  function U(B) {
    var w = B.name ? B.name + ":" + c : "";
    return d() + w + B.value + ";";
  }
})(bl);
var zm = bl.exports, Qm = {
  lex: ll,
  parse: Wm,
  stringify: zm
}, hl = { exports: {} }, Km = /([-.*+?^${}()|[\]\/\\])/g, Jm = /\\/g, yt = function(e) {
  return (e + "").replace(Km, "\\$1");
}, _t = function(e) {
  return (e + "").replace(Jm, "");
}, Zm = RegExp(
  /*
  #!/usr/bin/env ruby
  puts "\t\t" + DATA.read.gsub(/\(\?x\)|\s+#.*$|\s+|\\$|\\n/,'')
  __END__
      "(?x)^(?:\
        \\s* ( , ) \\s*               # Separator          \n\
      | \\s* ( <combinator>+ ) \\s*   # Combinator         \n\
      |      ( \\s+ )                 # CombinatorChildren \n\
      |      ( <unicode>+ | \\* )     # Tag                \n\
      | \\#  ( <unicode>+       )     # ID                 \n\
      | \\.  ( <unicode>+       )     # ClassName          \n\
      |                               # Attribute          \n\
      \\[  \
          \\s* (<unicode1>+)  (?:  \
              \\s* ([*^$!~|]?=)  (?:  \
                  \\s* (?:\
                      ([\"']?)(.*?)\\9 \
                  )\
              )  \
          )?  \\s*  \
      \\](?!\\]) \n\
      |   :+ ( <unicode>+ )(?:\
      \\( (?:\
          (?:([\"'])([^\\12]*)\\12)|((?:\\([^)]+\\)|[^()]*)+)\
      ) \\)\
      )?\
      )"
  */
  `^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:(["']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:(["'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)`.replace(/<combinator>/, "[" + yt(">+~`!@$%^&={}\\;</") + "]").replace(/<unicode>/g, "(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g, "(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")
), pl = function(u) {
  this.combinator = u || " ", this.tag = "*";
};
pl.prototype.toString = function() {
  if (!this.raw) {
    var e = "", u, t;
    if (e += this.tag || "*", this.id && (e += "#" + this.id), this.classes && (e += "." + this.classList.join(".")), this.attributes)
      for (u = 0; t = this.attributes[u++]; )
        e += "[" + t.name + (t.operator ? t.operator + '"' + t.value + '"' : "") + "]";
    if (this.pseudos)
      for (u = 0; t = this.pseudos[u++]; )
        e += ":" + t.name, t.value && (e += "(" + t.value + ")");
    this.raw = e;
  }
  return this.raw;
};
var ml = function() {
  this.length = 0;
};
ml.prototype.toString = function() {
  if (!this.raw) {
    for (var e = "", u = 0, t; t = this[u++]; )
      u !== 1 && (e += " "), t.combinator !== " " && (e += t.combinator + " "), e += t;
    this.raw = e;
  }
  return this.raw;
};
var e8 = function(e, u, t, r, a, n, i, c, o, d, s, E, b, m, v, P) {
  var I, O;
  if ((u || !this.length) && (I = this[this.length++] = new ml(), u))
    return "";
  if (I || (I = this[this.length - 1]), (t || r || !I.length) && (O = I[I.length++] = new pl(t)), O || (O = I[I.length - 1]), a)
    O.tag = _t(a);
  else if (n)
    O.id = _t(n);
  else if (i) {
    var M = _t(i), U = O.classes || (O.classes = {});
    if (!U[M]) {
      U[M] = yt(i);
      var B = O.classList || (O.classList = []);
      B.push(M), B.sort();
    }
  } else
    b ? (P = P || v, (O.pseudos || (O.pseudos = [])).push({
      type: E.length == 1 ? "class" : "element",
      name: _t(b),
      escapedName: yt(b),
      value: P ? _t(P) : null,
      escapedValue: P ? yt(P) : null
    })) : c && (s = s ? yt(s) : null, (O.attributes || (O.attributes = [])).push({
      operator: o,
      name: _t(c),
      escapedName: yt(c),
      value: s ? _t(s) : null,
      escapedValue: s ? yt(s) : null
    }));
  return "";
}, gl = function(u) {
  this.length = 0;
  for (var t = this, r = u, a; u; ) {
    if (a = u.replace(Zm, function() {
      return e8.apply(t, arguments);
    }), a === u)
      throw new Error(r + " is an invalid expression");
    u = a;
  }
};
gl.prototype.toString = function() {
  if (!this.raw) {
    for (var e = [], u = 0, t; t = this[u++]; )
      e.push(t);
    this.raw = e.join(", ");
  }
  return this.raw;
};
var es = {}, u8 = function(e) {
  return e == null ? null : (e = ("" + e).replace(/^\s+|\s+$/g, ""), es[e] || (es[e] = new gl(e)));
}, t8 = u8;
(function(e, u) {
  var t = t8;
  e.exports = r;
  function r(n, i) {
    this.text = n, this.spec = void 0, this.styleAttribute = i || !1;
  }
  r.prototype.parsed = function() {
    return this.tokens || (this.tokens = a(this.text)), this.tokens;
  }, r.prototype.specificity = function() {
    var n = this.styleAttribute;
    return this.spec || (this.spec = i(this.text, this.parsed())), this.spec;
    function i(c, o) {
      for (var d = o || a(c), s = [n ? 1 : 0, 0, 0, 0], E = [], b = 0; b < d.length; b++) {
        var m = d[b], v = m.pseudos;
        if (m.id && s[1]++, m.attributes && (s[2] += m.attributes.length), m.classList && (s[2] += m.classList.length), m.tag && m.tag !== "*" && s[3]++, v) {
          s[3] += v.length;
          for (var P = 0; P < v.length; P++)
            v[P].name === "not" && (E.push(v[P].value), s[3]--);
        }
      }
      for (var I = E.length; I--; )
        for (var O = i(E[I]), M = 4; M--; )
          s[M] += O[M];
      return s;
    }
  };
  function a(n) {
    try {
      return t(n)[0];
    } catch {
      return [];
    }
  }
})(hl);
var r8 = hl.exports, gn = { exports: {} }, us;
function a8() {
  return us || (us = 1, function(e, u) {
    e.exports = r;
    var t = dc();
    function r(a, n, i, c, o) {
      this.prop = a, this.value = n, this.selector = i, this.priority = c || 0, this.additionalPriority = o || [];
    }
    r.prototype.compareFunc = function(a) {
      var n = [];
      n.push.apply(n, this.selector.specificity()), n.push.apply(n, this.additionalPriority), n[0] += this.priority;
      var i = [];
      return i.push.apply(i, a.selector.specificity()), i.push.apply(i, a.additionalPriority), i[0] += a.priority, t.compareFunc(n, i);
    }, r.prototype.compare = function(a) {
      var n = this.compareFunc(a);
      return n === 1 ? this : a;
    }, r.prototype.toString = function() {
      return this.prop + ": " + this.value.replace(/['"]+/g, "") + ";";
    };
  }(gn)), gn.exports;
}
var ts;
function dc() {
  return ts || (ts = 1, function(e) {
    var u = Qm, t = r8, r = a8();
    e.Selector = t, e.Property = r;
    /**
     * Returns an array of the selectors.
     *
     * @license Sizzle CSS Selector Engine - MIT
     * @param {String} selectorText from mensch
     * @api public
     */
    e.extract = function(n) {
      for (var i = 0, c = [], o = "", d = 0, s = n.length; d < s; d++) {
        var E = n.charAt(d);
        i ? ((E === "]" || E === ")") && i--, o += E) : E === "," ? (c.push(o), o = "") : ((E === "[" || E === "(") && i++, (o.length || E !== "," && E !== `
` && E !== " ") && (o += E));
      }
      return o.length && c.push(o), c;
    }, e.parseCSS = function(a) {
      for (var n = u.parse(a, { position: !0, comments: !0 }), i = typeof n.stylesheet < "u" && n.stylesheet.rules ? n.stylesheet.rules : [], c = [], o = 0, d = i.length; o < d; o++)
        if (i[o].type == "rule")
          for (var s = i[o], E = s.selectors, b = 0, m = E.length; b < m; b++)
            c.push([E[b], s.declarations]);
      return c;
    }, e.getPreservedText = function(a, n, i) {
      for (var c = u.parse(a, { position: !0, comments: !0 }), o = typeof c.stylesheet < "u" && c.stylesheet.rules ? c.stylesheet.rules : [], d = [], s = o.length - 1; s >= 0; s--)
        (n.fontFaces && o[s].type === "font-face" || n.mediaQueries && o[s].type === "media" || n.keyFrames && o[s].type === "keyframes" || n.pseudos && o[s].selectors && this.matchesPseudo(o[s].selectors[0], i)) && d.unshift(
          u.stringify(
            { stylesheet: { rules: [o[s]] } },
            { comments: !1, indentation: "  " }
          )
        ), o[s].position.start;
      return d.length === 0 ? !1 : `
` + d.join(`
`) + `
`;
    }, e.normalizeLineEndings = function(a) {
      return a.replace(/\r\n/g, `
`).replace(/\n/g, `\r
`);
    }, e.matchesPseudo = function(a, n) {
      return n.find(function(i) {
        return a.indexOf(i) > -1;
      });
    }, e.compareFunc = function(a, n) {
      for (var i = Math.min(a.length, n.length), c = 0; c < i; c++)
        if (a[c] !== n[c])
          return a[c] > n[c] ? 1 : -1;
      return a.length - n.length;
    }, e.compare = function(a, n) {
      return e.compareFunc(a, n) == 1 ? a : n;
    }, e.getDefaultOptions = function(a) {
      var n = Object.assign({
        extraCss: "",
        insertPreservedExtraCss: !0,
        applyStyleTags: !0,
        removeStyleTags: !0,
        preserveMediaQueries: !0,
        preserveFontFaces: !0,
        preserveKeyFrames: !0,
        preservePseudos: !0,
        applyWidthAttributes: !0,
        applyHeightAttributes: !0,
        applyAttributesTableElements: !0,
        url: ""
      }, a);
      return n.webResources = n.webResources || {}, n;
    };
  }(mn)), mn;
}
(function(e) {
  var u = qs;
  dc();
  var t = function(a, n, i) {
    return n = Object.assign({ decodeEntities: !1, _useHtmlParser2: !0 }, n), a = i(a), u.load(a, n);
  }, r = function() {
    var a = [], n = function(c) {
      var o = e.exports.codeBlocks;
      return Object.keys(o).forEach(function(d) {
        var s = new RegExp(o[d].start + "([\\S\\s]*?)" + o[d].end, "g");
        c = c.replace(s, function(E, b) {
          return a.push(E), "JUICE_CODE_BLOCK_" + (a.length - 1) + "_";
        });
      }), c;
    }, i = function(c) {
      for (var o = 0; o < a.length; o++) {
        var d = new RegExp("JUICE_CODE_BLOCK_" + o + '_(="")?', "gi");
        c = c.replace(d, function() {
          return a[o];
        });
      }
      return c;
    };
    return {
      encodeEntities: n,
      decodeEntities: i
    };
  };
  e.exports = function(a, n, i, c) {
    var o = r(), d = t(a, n, o.encodeEntities), s = [d];
    s.push.apply(s, c);
    var E = i.apply(void 0, s) || d;
    return n && n.xmlMode ? o.decodeEntities(E.xml()) : o.decodeEntities(E.html());
  }, e.exports.codeBlocks = {
    EJS: { start: "<%", end: "%>" },
    HBS: { start: "{{", end: "}}" }
  };
})(Fs);
var n8 = Fs.exports, lc = {};
lc.romanize = function(e) {
  if (isNaN(e))
    return NaN;
  for (var u = String(+e).split(""), t = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
  ], r = "", a = 3; a--; )
    r = (t[+u.pop() + a * 10] || "") + r;
  return Array(+u.join("") + 1).join("M") + r;
};
lc.alphanumeric = function(e) {
  for (var u = "", t; e > 0; )
    t = (e - 1) % 26, u = String.fromCharCode(65 + t) + u, e = (e - t) / 26 | 0;
  return u || void 0;
};
var ut = dc(), xr = lc, i8 = function(u) {
  u.ignoredPseudos = ["hover", "active", "focus", "visited", "link"], u.widthElements = ["TABLE", "TD", "TH", "IMG"], u.heightElements = ["TABLE", "TD", "TH", "IMG"], u.tableElements = ["TABLE", "TH", "TR", "TD", "CAPTION", "COLGROUP", "COL", "THEAD", "TBODY", "TFOOT"], u.nonVisualElements = ["HEAD", "TITLE", "BASE", "LINK", "STYLE", "META", "SCRIPT", "NOSCRIPT"], u.styleToAttribute = {
    "background-color": "bgcolor",
    "background-image": "background",
    "text-align": "align",
    "vertical-align": "valign"
  }, u.excludedProperties = [], u.juiceDocument = s, u.inlineDocument = t;
  function t(m, v, P) {
    P = P || {};
    var I = ut.parseCSS(v), O = [], M = "style", U = {};
    if (P.styleAttributeName && (M = P.styleAttributeName), I.forEach(F), O.forEach(z), P.inlinePseudoElements && O.forEach(Z), P.applyWidthAttributes && O.forEach(function(g) {
      ue(g, "width");
    }), P.applyHeightAttributes && O.forEach(function(g) {
      ue(g, "height");
    }), P.applyAttributesTableElements && O.forEach(l), P.insertPreservedExtraCss && P.extraCss) {
      var B = ut.getPreservedText(P.extraCss, {
        mediaQueries: P.preserveMediaQueries,
        fontFaces: P.preserveFontFaces,
        keyFrames: P.preserveKeyFrames
      });
      if (B) {
        var w = null;
        P.insertPreservedExtraCss !== !0 ? w = m(P.insertPreservedExtraCss) : (w = m("head"), w.length || (w = m("body")), w.length || (w = m.root())), w.first().append("<style>" + B + "</style>");
      }
    }
    function F(g) {
      var T = g[0], A = g[1], D = new ut.Selector(T), k = D.parsed();
      if (k) {
        for (var R = c(k), $ = 0; $ < k.length; ++$) {
          var J = k[$];
          if (J.pseudos)
            for (var W = 0; W < J.pseudos.length; ++W) {
              var te = J.pseudos[W];
              if (u.ignoredPseudos.indexOf(te.name) >= 0)
                return;
            }
        }
        if (R) {
          var re = k[k.length - 1], we = re.pseudos;
          re.pseudos = d(re.pseudos), T = k.toString(), re.pseudos = we;
        }
        var Iu;
        try {
          Iu = m(T);
        } catch {
          return;
        }
        Iu.each(function() {
          var he = this;
          if (he.name && u.nonVisualElements.indexOf(he.name.toUpperCase()) >= 0)
            return;
          if (he.counterProps || (he.counterProps = he.parent && he.parent.counterProps ? Object.create(he.parent.counterProps) : {}), R) {
            var hu = "pseudo" + R, Du = he[hu];
            Du || (Du = he[hu] = m("<span />").get(0), Du.pseudoElementType = R, Du.pseudoElementParent = he, Du.counterProps = he.counterProps, he[hu] = Du), he = Du;
          }
          if (!he.styleProps) {
            if (he.styleProps = {}, m(he).attr(M)) {
              var ye = "* { " + m(he).attr(M) + " } ";
              gt(ut.parseCSS(ye)[0][1], new ut.Selector("<style>", !0));
            }
            O.push(he);
          }
          function mt(Be, Ve) {
            for (var _e = Ve.split(/\s+/), je = 0; je < _e.length; je++) {
              var Se = _e[je], Ne = parseInt(_e[je + 1], 10);
              isNaN(Ne) ? Be.counterProps[Se] = U[Se] = 0 : Be.counterProps[Se] = U[_e[je++]] = Ne;
            }
          }
          function xe(Be, Ve) {
            for (var _e = Ve.split(/\s+/), je = 0; je < _e.length; je++) {
              var Se = _e[je];
              if (Be.counterProps[Se] !== void 0) {
                var Ne = parseInt(_e[je + 1], 10);
                isNaN(Ne) ? Be.counterProps[Se] = U[Se] += 1 : Be.counterProps[Se] = U[_e[je++]] += Ne;
              }
            }
          }
          function gt(Be, Ve) {
            for (var _e = 0, je = Be.length; _e < je; _e++)
              if (Be[_e].type == "property") {
                var Se = Be[_e].name, Ne = Be[_e].value;
                Se === "counter-reset" && mt(he, Ne), Se === "counter-increment" && xe(he, Ne);
                var Et = Ne.match(/!important$/) !== null;
                Et && !P.preserveImportant && (Ne = r(Ne));
                var et = [Be[_e].position.start.line, Be[_e].position.start.col], Y = new ut.Property(Se, Ne, Ve, Et ? 2 : 0, et), Q = he.styleProps[Se];
                u.excludedProperties.indexOf(Se) < 0 && (Q && Q.compare(Y) === Y || !Q) && (Q && Q.selector !== Ve ? delete he.styleProps[Se] : Q && (Y.nextProp = Q), he.styleProps[Se] = Y);
              }
          }
          gt(A, D);
        });
      }
    }
    function z(g) {
      Object.keys(g.styleProps).length;
      var T = [];
      Object.keys(g.styleProps).forEach(function(D) {
        for (var k = g.styleProps[D]; typeof k < "u"; )
          T.push(k), k = k.nextProp;
      }), T.sort(function(D, k) {
        return D.compareFunc(k);
      });
      var A = T.filter(function(D) {
        return D.prop !== "content";
      }).map(function(D) {
        return D.prop + ": " + D.value.replace(/["]/g, "'") + ";";
      }).join(" ");
      A && m(g).attr(M, A);
    }
    function Z(g) {
      if (g.pseudoElementType && g.styleProps.content) {
        var T = i(g);
        T.img ? (g.name = "img", m(g).attr("src", T.img)) : m(g).text(T);
        var A = g.pseudoElementParent;
        g.pseudoElementType === "before" ? m(A).prepend(g) : m(A).append(g);
      }
    }
    function ue(g, T) {
      if (g.name) {
        var A = g.name.toUpperCase();
        if (u[T + "Elements"].indexOf(A) > -1) {
          for (var D in g.styleProps)
            if (g.styleProps[D].prop === T) {
              var k = g.styleProps[D].value;
              if (P.preserveImportant && (k = r(k)), k.match(/(px|auto)/)) {
                var R = k.replace("px", "");
                m(g).attr(T, R);
                return;
              }
              if (u.tableElements.indexOf(A) > -1 && k.match(/\%/)) {
                m(g).attr(T, k);
                return;
              }
            }
        }
      }
    }
    function V(g) {
      return g.indexOf("url(") !== 0 ? g : g.replace(/^url\((["'])?([^"']+)\1\)$/, "$2");
    }
    function l(g) {
      if (g.name) {
        var T = g.name.toUpperCase(), A = Object.keys(u.styleToAttribute);
        if (u.tableElements.indexOf(T) > -1) {
          for (var D in g.styleProps)
            if (A.indexOf(g.styleProps[D].prop) > -1) {
              var k = u.styleToAttribute[g.styleProps[D].prop], R = g.styleProps[D].value;
              if (P.preserveImportant && (R = r(R)), k === "background" && (R = V(R)), /(linear|radial)-gradient\(/i.test(R))
                continue;
              m(g).attr(k, R);
            }
        }
      }
    }
  }
  function r(m) {
    return m.replace(/\s*!important$/, "");
  }
  function a(m, v) {
    for (; m; ) {
      if (v in m.styleProps)
        return m.styleProps[v].value;
      var m = m.pseudoElementParent || m.parent;
    }
  }
  function n(m, v) {
    switch (v) {
      case "lower-roman":
        return xr.romanize(m).toLowerCase();
      case "upper-roman":
        return xr.romanize(m);
      case "lower-latin":
      case "lower-alpha":
        return xr.alphanumeric(m).toLowerCase();
      case "upper-latin":
      case "upper-alpha":
        return xr.alphanumeric(m);
      default:
        return m.toString();
    }
  }
  function i(m) {
    var v = m.styleProps.content.value;
    if (v === "none" || v === "normal")
      return "";
    var P = v.match(/^\s*url\s*\(\s*(.*?)\s*\)\s*$/i);
    if (P) {
      var I = P[1].replace(/^['"]|['"]$/g, "");
      return { img: I };
    }
    for (var O = [], M = v.split(/['"]/), U = 0; U < M.length; U++)
      if (M[U] !== "") {
        var B = M[U].match(/var\s*\(\s*(.*?)\s*(,\s*(.*?)\s*)?\s*\)/i);
        if (B) {
          var w = a(m, B[1]) || B[2];
          O.push(w.replace(/^['"]|['"]$/g, ""));
          continue;
        }
        var F = M[U].match(/counter\s*\(\s*(.*?)\s*(,\s*(.*?)\s*)?\s*\)/i);
        if (F && F[1] in m.counterProps) {
          var z = m.counterProps[F[1]];
          O.push(n(z, F[3]));
          continue;
        }
        var Z = M[U].match(/attr\s*\(\s*(.*?)\s*\)/i);
        if (Z) {
          var ue = Z[1];
          O.push(
            m.pseudoElementParent ? m.pseudoElementParent.attribs[ue] : m.attribs[ue]
          );
          continue;
        }
        O.push(M[U]);
      }
    return v = O.join(""), v = v.replace(/\\/g, ""), v;
  }
  function c(m) {
    if (m.length !== 0) {
      var v = m[m.length - 1].pseudos;
      if (v) {
        for (var P = 0; P < v.length; P++)
          if (o(v[P]))
            return v[P].name;
      }
    }
  }
  function o(m) {
    return m.name === "before" || m.name === "after";
  }
  function d(m) {
    return m.filter(function(v) {
      return !o(v);
    });
  }
  function s(m, v) {
    v = ut.getDefaultOptions(v);
    var P = b(m, v);
    return P += `
` + v.extraCss, t(m, P, v), m;
  }
  function E(m, v) {
    var P = [], I = m("style"), O, M, U;
    return I.each(function() {
      U = this;
      var B = !!U.childNodes;
      if (O = B ? U.childNodes : U.children, O.length !== 1) {
        v.removeStyleTags && m(U).remove();
        return;
      }
      if (M = O[0].data, v.applyStyleTags && m(U).attr("data-embed") === void 0 && P.push(M), v.removeStyleTags && m(U).attr("data-embed") === void 0) {
        var w = B ? U.childNodes[0].nodeValue : U.children[0].data, F = ut.getPreservedText(w, {
          mediaQueries: v.preserveMediaQueries,
          fontFaces: v.preserveFontFaces,
          keyFrames: v.preserveKeyFrames,
          pseudos: v.preservePseudos
        }, u.ignoredPseudos);
        F ? B ? U.childNodes[0].nodeValue = F : U.children[0].data = F : m(U).remove();
      }
      m(U).removeAttr("data-embed");
    }), P;
  }
  function b(m, v) {
    var P = E(m, v), I = P.join(`
`);
    return I;
  }
  return u;
}, fc = n8, c8 = i8, Y0 = c8(function(e, u) {
  return fc(e, { xmlMode: u && u.xmlMode }, s8, [u]);
}), s8 = function(e, u) {
  return Y0.juiceDocument(e, u);
};
Y0.inlineContent = function(e, u, t) {
  return fc(e, { xmlMode: t && t.xmlMode }, Y0.inlineDocument, [u, t]);
};
Y0.codeBlocks = fc.codeBlocks;
var o8 = Y0;
const ai = /* @__PURE__ */ Ti(o8);
class fr {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(u, t, r) {
    this.property = u, this.normal = t, r && (this.space = r);
  }
}
fr.prototype.property = {};
fr.prototype.normal = {};
fr.prototype.space = null;
function El(e, u) {
  const t = {}, r = {};
  let a = -1;
  for (; ++a < e.length; )
    Object.assign(t, e[a].property), Object.assign(r, e[a].normal);
  return new fr(t, r, u);
}
function X0(e) {
  return e.toLowerCase();
}
class Su {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(u, t) {
    this.property = u, this.attribute = t;
  }
}
Su.prototype.space = null;
Su.prototype.boolean = !1;
Su.prototype.booleanish = !1;
Su.prototype.overloadedBoolean = !1;
Su.prototype.number = !1;
Su.prototype.commaSeparated = !1;
Su.prototype.spaceSeparated = !1;
Su.prototype.commaOrSpaceSeparated = !1;
Su.prototype.mustUseProperty = !1;
Su.prototype.defined = !1;
let d8 = 0;
const ae = Ht(), Oe = Ht(), Tl = Ht(), X = Ht(), Te = Ht(), e0 = Ht(), pu = Ht();
function Ht() {
  return 2 ** ++d8;
}
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ae,
  booleanish: Oe,
  commaOrSpaceSeparated: pu,
  commaSeparated: e0,
  number: X,
  overloadedBoolean: Tl,
  spaceSeparated: Te
}, Symbol.toStringTag, { value: "Module" })), En = Object.keys(ni);
class bc extends Su {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(u, t, r, a) {
    let n = -1;
    if (super(u, t), rs(this, "space", a), typeof r == "number")
      for (; ++n < En.length; ) {
        const i = En[n];
        rs(this, En[n], (r & ni[i]) === ni[i]);
      }
  }
}
bc.prototype.defined = !0;
function rs(e, u, t) {
  t && (e[u] = t);
}
const l8 = {}.hasOwnProperty;
function _0(e) {
  const u = {}, t = {};
  let r;
  for (r in e.properties)
    if (l8.call(e.properties, r)) {
      const a = e.properties[r], n = new bc(
        r,
        e.transform(e.attributes || {}, r),
        a,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (n.mustUseProperty = !0), u[r] = n, t[X0(r)] = r, t[X0(n.attribute)] = r;
    }
  return new fr(u, t, e.space);
}
const _l = _0({
  space: "xlink",
  transform(e, u) {
    return "xlink:" + u.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), yl = _0({
  space: "xml",
  transform(e, u) {
    return "xml:" + u.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Al(e, u) {
  return u in e ? e[u] : u;
}
function vl(e, u) {
  return Al(e, u.toLowerCase());
}
const xl = _0({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: vl,
  properties: { xmlns: null, xmlnsXLink: null }
}), Nl = _0({
  transform(e, u) {
    return u === "role" ? u : "aria-" + u.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Oe,
    ariaAutoComplete: null,
    ariaBusy: Oe,
    ariaChecked: Oe,
    ariaColCount: X,
    ariaColIndex: X,
    ariaColSpan: X,
    ariaControls: Te,
    ariaCurrent: null,
    ariaDescribedBy: Te,
    ariaDetails: null,
    ariaDisabled: Oe,
    ariaDropEffect: Te,
    ariaErrorMessage: null,
    ariaExpanded: Oe,
    ariaFlowTo: Te,
    ariaGrabbed: Oe,
    ariaHasPopup: null,
    ariaHidden: Oe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Te,
    ariaLevel: X,
    ariaLive: null,
    ariaModal: Oe,
    ariaMultiLine: Oe,
    ariaMultiSelectable: Oe,
    ariaOrientation: null,
    ariaOwns: Te,
    ariaPlaceholder: null,
    ariaPosInSet: X,
    ariaPressed: Oe,
    ariaReadOnly: Oe,
    ariaRelevant: null,
    ariaRequired: Oe,
    ariaRoleDescription: Te,
    ariaRowCount: X,
    ariaRowIndex: X,
    ariaRowSpan: X,
    ariaSelected: Oe,
    ariaSetSize: X,
    ariaSort: null,
    ariaValueMax: X,
    ariaValueMin: X,
    ariaValueNow: X,
    ariaValueText: null,
    role: null
  }
}), f8 = _0({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: vl,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: e0,
    acceptCharset: Te,
    accessKey: Te,
    action: null,
    allow: null,
    allowFullScreen: ae,
    allowPaymentRequest: ae,
    allowUserMedia: ae,
    alt: null,
    as: null,
    async: ae,
    autoCapitalize: null,
    autoComplete: Te,
    autoFocus: ae,
    autoPlay: ae,
    blocking: Te,
    capture: ae,
    charSet: null,
    checked: ae,
    cite: null,
    className: Te,
    cols: X,
    colSpan: null,
    content: null,
    contentEditable: Oe,
    controls: ae,
    controlsList: Te,
    coords: X | e0,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ae,
    defer: ae,
    dir: null,
    dirName: null,
    disabled: ae,
    download: Tl,
    draggable: Oe,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ae,
    formTarget: null,
    headers: Te,
    height: X,
    hidden: ae,
    high: X,
    href: null,
    hrefLang: null,
    htmlFor: Te,
    httpEquiv: Te,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ae,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ae,
    itemId: null,
    itemProp: Te,
    itemRef: Te,
    itemScope: ae,
    itemType: Te,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ae,
    low: X,
    manifest: null,
    max: null,
    maxLength: X,
    media: null,
    method: null,
    min: null,
    minLength: X,
    multiple: ae,
    muted: ae,
    name: null,
    nonce: null,
    noModule: ae,
    noValidate: ae,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: ae,
    optimum: X,
    pattern: null,
    ping: Te,
    placeholder: null,
    playsInline: ae,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ae,
    referrerPolicy: null,
    rel: Te,
    required: ae,
    reversed: ae,
    rows: X,
    rowSpan: X,
    sandbox: Te,
    scope: null,
    scoped: ae,
    seamless: ae,
    selected: ae,
    shadowRootDelegatesFocus: ae,
    shadowRootMode: null,
    shape: null,
    size: X,
    sizes: null,
    slot: null,
    span: X,
    spellCheck: Oe,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: X,
    step: null,
    style: null,
    tabIndex: X,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ae,
    useMap: null,
    value: Oe,
    width: X,
    wrap: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Te,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: X,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: X,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: ae,
    // Lists. Use CSS to reduce space between items instead
    declare: ae,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: X,
    // `<img>` and `<object>`
    leftMargin: X,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: X,
    // `<body>`
    marginWidth: X,
    // `<body>`
    noResize: ae,
    // `<frame>`
    noHref: ae,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ae,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ae,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: X,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Oe,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: X,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: X,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: ae,
    disableRemotePlayback: ae,
    prefix: null,
    property: null,
    results: X,
    security: null,
    unselectable: null
  }
}), b8 = _0({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Al,
  properties: {
    about: pu,
    accentHeight: X,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: X,
    amplitude: X,
    arabicForm: null,
    ascent: X,
    attributeName: null,
    attributeType: null,
    azimuth: X,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: X,
    by: null,
    calcMode: null,
    capHeight: X,
    className: Te,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: X,
    diffuseConstant: X,
    direction: null,
    display: null,
    dur: null,
    divisor: X,
    dominantBaseline: null,
    download: ae,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: X,
    enableBackground: null,
    end: null,
    event: null,
    exponent: X,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: X,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: e0,
    g2: e0,
    glyphName: e0,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: X,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: X,
    horizOriginX: X,
    horizOriginY: X,
    id: null,
    ideographic: X,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: X,
    k: X,
    k1: X,
    k2: X,
    k3: X,
    k4: X,
    kernelMatrix: pu,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: X,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: X,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: X,
    overlineThickness: X,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: X,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Te,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: X,
    pointsAtY: X,
    pointsAtZ: X,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: pu,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: pu,
    rev: pu,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: pu,
    requiredFeatures: pu,
    requiredFonts: pu,
    requiredFormats: pu,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: X,
    specularExponent: X,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: X,
    strikethroughThickness: X,
    string: null,
    stroke: null,
    strokeDashArray: pu,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: X,
    strokeOpacity: X,
    strokeWidth: null,
    style: null,
    surfaceScale: X,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: pu,
    tabIndex: X,
    tableValues: null,
    target: null,
    targetX: X,
    targetY: X,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: pu,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: X,
    underlineThickness: X,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: X,
    values: null,
    vAlphabetic: X,
    vMathematical: X,
    vectorEffect: null,
    vHanging: X,
    vIdeographic: X,
    version: null,
    vertAdvY: X,
    vertOriginX: X,
    vertOriginY: X,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: X,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), h8 = /^data[-\w.:]+$/i, as = /-[a-z]/g, p8 = /[A-Z]/g;
function Qa(e, u) {
  const t = X0(u);
  let r = u, a = Su;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && h8.test(u)) {
    if (u.charAt(4) === "-") {
      const n = u.slice(5).replace(as, g8);
      r = "data" + n.charAt(0).toUpperCase() + n.slice(1);
    } else {
      const n = u.slice(4);
      if (!as.test(n)) {
        let i = n.replace(p8, m8);
        i.charAt(0) !== "-" && (i = "-" + i), u = "data" + i;
      }
    }
    a = bc;
  }
  return new a(r, u);
}
function m8(e) {
  return "-" + e.toLowerCase();
}
function g8(e) {
  return e.charAt(1).toUpperCase();
}
const br = El([yl, _l, xl, Nl, f8], "html"), Ft = El([yl, _l, xl, Nl, b8], "svg");
function ii(e) {
  const u = [], t = String(e || "");
  let r = t.indexOf(","), a = 0, n = !1;
  for (; !n; ) {
    r === -1 && (r = t.length, n = !0);
    const i = t.slice(a, r).trim();
    (i || !n) && u.push(i), a = r + 1, r = t.indexOf(",", a);
  }
  return u;
}
function Il(e, u) {
  const t = u || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
const ns = /[#.]/g;
function E8(e, u) {
  const t = e || "", r = {};
  let a = 0, n, i;
  for (; a < t.length; ) {
    ns.lastIndex = a;
    const c = ns.exec(t), o = t.slice(a, c ? c.index : t.length);
    o && (n ? n === "#" ? r.id = o : Array.isArray(r.className) ? r.className.push(o) : r.className = [o] : i = o, a += o.length), c && (n = c[0], a++);
  }
  return {
    type: "element",
    // @ts-expect-error: tag name is parsed.
    tagName: i || u || "div",
    properties: r,
    children: []
  };
}
function ci(e) {
  const u = String(e || "").trim();
  return u ? u.split(/[ \t\n\r\f]+/g) : [];
}
function Dl(e) {
  return e.join(" ").trim();
}
const T8 = /* @__PURE__ */ new Set(["button", "menu", "reset", "submit"]), si = {}.hasOwnProperty;
function Cl(e, u, t) {
  const r = t && v8(t);
  function a(n, i, ...c) {
    let o = -1, d;
    if (n == null) {
      d = { type: "root", children: [] };
      const s = (
        /** @type {Child} */
        i
      );
      c.unshift(s);
    } else if (d = E8(n, u), d.tagName = d.tagName.toLowerCase(), r && si.call(r, d.tagName) && (d.tagName = r[d.tagName]), _8(i, d.tagName)) {
      let s;
      for (s in i)
        si.call(i, s) && y8(e, d.properties, s, i[s]);
    } else
      c.unshift(i);
    for (; ++o < c.length; )
      oi(d.children, c[o]);
    return d.type === "element" && d.tagName === "template" && (d.content = { type: "root", children: d.children }, d.children = []), d;
  }
  return a;
}
function _8(e, u) {
  return e == null || typeof e != "object" || Array.isArray(e) ? !1 : u === "input" || !e.type || typeof e.type != "string" ? !0 : "children" in e && Array.isArray(e.children) ? !1 : u === "button" ? T8.has(e.type.toLowerCase()) : !("value" in e);
}
function y8(e, u, t, r) {
  const a = Qa(e, t);
  let n = -1, i;
  if (r != null) {
    if (typeof r == "number") {
      if (Number.isNaN(r))
        return;
      i = r;
    } else
      typeof r == "boolean" ? i = r : typeof r == "string" ? a.spaceSeparated ? i = ci(r) : a.commaSeparated ? i = ii(r) : a.commaOrSpaceSeparated ? i = ci(ii(r).join(" ")) : i = is(a, a.property, r) : Array.isArray(r) ? i = r.concat() : i = a.property === "style" ? A8(r) : String(r);
    if (Array.isArray(i)) {
      const c = [];
      for (; ++n < i.length; ) {
        const o = (
          /** @type {number | string} */
          is(a, a.property, i[n])
        );
        c[n] = o;
      }
      i = c;
    }
    if (a.property === "className" && Array.isArray(u.className)) {
      const c = (
        /** @type {number | string} */
        i
      );
      i = u.className.concat(c);
    }
    u[a.property] = i;
  }
}
function oi(e, u) {
  let t = -1;
  if (u != null)
    if (typeof u == "string" || typeof u == "number")
      e.push({ type: "text", value: String(u) });
    else if (Array.isArray(u))
      for (; ++t < u.length; )
        oi(e, u[t]);
    else if (typeof u == "object" && "type" in u)
      u.type === "root" ? oi(e, u.children) : e.push(u);
    else
      throw new Error("Expected node, nodes, or string, got `" + u + "`");
}
function is(e, u, t) {
  if (typeof t == "string") {
    if (e.number && t && !Number.isNaN(Number(t)))
      return Number(t);
    if ((e.boolean || e.overloadedBoolean) && (t === "" || X0(t) === X0(u)))
      return !0;
  }
  return t;
}
function A8(e) {
  const u = [];
  let t;
  for (t in e)
    si.call(e, t) && u.push([t, e[t]].join(": "));
  return u.join("; ");
}
function v8(e) {
  const u = {};
  let t = -1;
  for (; ++t < e.length; )
    u[e[t].toLowerCase()] = e[t];
  return u;
}
const x8 = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
], N8 = Cl(br, "div"), I8 = Cl(Ft, "g", x8), Tn = /\r?\n|\r/g;
function D8(e) {
  const u = String(e), t = [];
  for (Tn.lastIndex = 0; Tn.test(u); )
    t.push(Tn.lastIndex);
  return t.push(u.length + 1), { toPoint: r, toOffset: a };
  function r(n) {
    let i = -1;
    if (typeof n == "number" && n > -1 && n < t[t.length - 1]) {
      for (; ++i < t.length; )
        if (t[i] > n)
          return {
            line: i + 1,
            column: n - (i > 0 ? t[i - 1] : 0) + 1,
            offset: n
          };
    }
  }
  function a(n) {
    const i = n && n.line, c = n && n.column;
    if (typeof i == "number" && typeof c == "number" && !Number.isNaN(i) && !Number.isNaN(c) && i - 1 in t) {
      const o = (t[i - 2] || 0) + c - 1 || 0;
      if (o > -1 && o < t[t.length - 1])
        return o;
    }
  }
}
const C8 = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
}, Sl = {}.hasOwnProperty, S8 = Object.prototype;
function O8(e, u) {
  const t = u || {};
  return hc(
    {
      file: t.file || void 0,
      location: !1,
      schema: t.space === "svg" ? Ft : br,
      verbose: t.verbose || !1
    },
    e
  );
}
function hc(e, u) {
  let t;
  switch (u.nodeName) {
    case "#comment": {
      const r = (
        /** @type {P5Comment} */
        u
      );
      return t = { type: "comment", value: r.data }, Mr(e, r, t), t;
    }
    case "#document":
    case "#document-fragment": {
      const r = (
        /** @type {P5Document | P5DocumentFragment} */
        u
      ), a = "mode" in r ? r.mode === "quirks" || r.mode === "limited-quirks" : !1;
      if (t = {
        type: "root",
        children: Ol(e, u.childNodes),
        data: { quirksMode: a }
      }, e.file && e.location) {
        const n = String(e.file), i = D8(n), c = i.toPoint(0), o = i.toPoint(n.length);
        t.position = { start: c, end: o };
      }
      return t;
    }
    case "#documentType": {
      const r = (
        /** @type {P5DocumentType} */
        u
      );
      return t = { type: "doctype" }, Mr(e, r, t), t;
    }
    case "#text": {
      const r = (
        /** @type {P5Text} */
        u
      );
      return t = { type: "text", value: r.value }, Mr(e, r, t), t;
    }
    default:
      return t = P8(
        e,
        /** @type {P5Element} */
        u
      ), t;
  }
}
function Ol(e, u) {
  let t = -1;
  const r = [];
  for (; ++t < u.length; ) {
    const a = (
      /** @type {RootContent} */
      hc(e, u[t])
    );
    r.push(a);
  }
  return r;
}
function P8(e, u) {
  const t = e.schema;
  e.schema = u.namespaceURI === C8.svg ? Ft : br;
  let r = -1;
  const a = {};
  for (; ++r < u.attrs.length; ) {
    const c = u.attrs[r], o = (c.prefix ? c.prefix + ":" : "") + c.name;
    Sl.call(S8, o) || (a[o] = c.value);
  }
  const i = (e.schema.space === "svg" ? I8 : N8)(u.tagName, a, Ol(e, u.childNodes));
  if (Mr(e, u, i), i.tagName === "template") {
    const c = (
      /** @type {P5Template} */
      u
    ), o = c.sourceCodeLocation, d = o && o.startTag && Qt(o.startTag), s = o && o.endTag && Qt(o.endTag), E = (
      /** @type {Root} */
      hc(e, c.content)
    );
    d && s && e.file && (E.position = { start: d.end, end: s.start }), i.content = E;
  }
  return e.schema = t, i;
}
function Mr(e, u, t) {
  if ("sourceCodeLocation" in u && u.sourceCodeLocation && e.file) {
    const r = L8(e, t, u.sourceCodeLocation);
    r && (e.location = !0, t.position = r);
  }
}
function L8(e, u, t) {
  const r = Qt(t);
  if (u.type === "element") {
    const a = u.children[u.children.length - 1];
    if (r && !t.endTag && a && a.position && a.position.end && (r.end = Object.assign({}, a.position.end)), e.verbose) {
      const n = {};
      let i;
      if (t.attrs)
        for (i in t.attrs)
          Sl.call(t.attrs, i) && (n[Qa(e.schema, i).property] = Qt(
            t.attrs[i]
          ));
      t.startTag;
      const c = Qt(t.startTag), o = t.endTag ? Qt(t.endTag) : void 0, d = { opening: c };
      o && (d.closing = o), d.properties = n, u.data = { position: d };
    }
  }
  return r;
}
function Qt(e) {
  const u = cs({
    line: e.startLine,
    column: e.startCol,
    offset: e.startOffset
  }), t = cs({
    line: e.endLine,
    column: e.endCol,
    offset: e.endOffset
  });
  return u || t ? { start: u, end: t } : void 0;
}
function cs(e) {
  return e.line && e.column ? e : void 0;
}
function w8(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? ss(e.position) : "start" in e || "end" in e ? ss(e) : "line" in e || "column" in e ? di(e) : "";
}
function di(e) {
  return os(e && e.line) + ":" + os(e && e.column);
}
function ss(e) {
  return di(e && e.start) + "-" + di(e && e.end);
}
function os(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ze extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(u, t, r) {
    super(), typeof t == "string" && (r = t, t = void 0);
    let a = "", n = {}, i = !1;
    if (t && ("line" in t && "column" in t ? n = { place: t } : "start" in t && "end" in t ? n = { place: t } : "type" in t ? n = {
      ancestors: [t],
      place: t.position
    } : n = { ...t }), typeof u == "string" ? a = u : !n.cause && u && (i = !0, a = u.message, n.cause = u), !n.ruleId && !n.source && typeof r == "string") {
      const o = r.indexOf(":");
      o === -1 ? n.ruleId = r : (n.source = r.slice(0, o), n.ruleId = r.slice(o + 1));
    }
    if (!n.place && n.ancestors && n.ancestors) {
      const o = n.ancestors[n.ancestors.length - 1];
      o && (n.place = o.position);
    }
    const c = n.place && "start" in n.place ? n.place.start : n.place;
    this.ancestors = n.ancestors || void 0, this.cause = n.cause || void 0, this.column = c ? c.column : void 0, this.fatal = void 0, this.file, this.message = a, this.line = c ? c.line : void 0, this.name = w8(n.place) || "1:1", this.place = n.place || void 0, this.reason = this.message, this.ruleId = n.ruleId || void 0, this.source = n.source || void 0, this.stack = i && n.cause && typeof n.cause.stack == "string" ? n.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Ze.prototype.file = "";
Ze.prototype.name = "";
Ze.prototype.reason = "";
Ze.prototype.message = "";
Ze.prototype.stack = "";
Ze.prototype.column = void 0;
Ze.prototype.line = void 0;
Ze.prototype.ancestors = void 0;
Ze.prototype.cause = void 0;
Ze.prototype.fatal = void 0;
Ze.prototype.place = void 0;
Ze.prototype.ruleId = void 0;
Ze.prototype.source = void 0;
const ku = { basename: R8, dirname: M8, extname: k8, join: B8, sep: "/" };
function R8(e, u) {
  if (u !== void 0 && typeof u != "string")
    throw new TypeError('"ext" argument must be a string');
  hr(e);
  let t = 0, r = -1, a = e.length, n;
  if (u === void 0 || u.length === 0 || u.length > e.length) {
    for (; a--; )
      if (e.codePointAt(a) === 47) {
        if (n) {
          t = a + 1;
          break;
        }
      } else
        r < 0 && (n = !0, r = a + 1);
    return r < 0 ? "" : e.slice(t, r);
  }
  if (u === e)
    return "";
  let i = -1, c = u.length - 1;
  for (; a--; )
    if (e.codePointAt(a) === 47) {
      if (n) {
        t = a + 1;
        break;
      }
    } else
      i < 0 && (n = !0, i = a + 1), c > -1 && (e.codePointAt(a) === u.codePointAt(c--) ? c < 0 && (r = a) : (c = -1, r = i));
  return t === r ? r = i : r < 0 && (r = e.length), e.slice(t, r);
}
function M8(e) {
  if (hr(e), e.length === 0)
    return ".";
  let u = -1, t = e.length, r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        u = t;
        break;
      }
    } else
      r || (r = !0);
  return u < 0 ? e.codePointAt(0) === 47 ? "/" : "." : u === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, u);
}
function k8(e) {
  hr(e);
  let u = e.length, t = -1, r = 0, a = -1, n = 0, i;
  for (; u--; ) {
    const c = e.codePointAt(u);
    if (c === 47) {
      if (i) {
        r = u + 1;
        break;
      }
      continue;
    }
    t < 0 && (i = !0, t = u + 1), c === 46 ? a < 0 ? a = u : n !== 1 && (n = 1) : a > -1 && (n = -1);
  }
  return a < 0 || t < 0 || // We saw a non-dot character immediately before the dot.
  n === 0 || // The (right-most) trimmed path component is exactly `..`.
  n === 1 && a === t - 1 && a === r + 1 ? "" : e.slice(a, t);
}
function B8(...e) {
  let u = -1, t;
  for (; ++u < e.length; )
    hr(e[u]), e[u] && (t = t === void 0 ? e[u] : t + "/" + e[u]);
  return t === void 0 ? "." : U8(t);
}
function U8(e) {
  hr(e);
  const u = e.codePointAt(0) === 47;
  let t = H8(e, !u);
  return t.length === 0 && !u && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), u ? "/" + t : t;
}
function H8(e, u) {
  let t = "", r = 0, a = -1, n = 0, i = -1, c, o;
  for (; ++i <= e.length; ) {
    if (i < e.length)
      c = e.codePointAt(i);
    else {
      if (c === 47)
        break;
      c = 47;
    }
    if (c === 47) {
      if (!(a === i - 1 || n === 1))
        if (a !== i - 1 && n === 2) {
          if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
            if (t.length > 2) {
              if (o = t.lastIndexOf("/"), o !== t.length - 1) {
                o < 0 ? (t = "", r = 0) : (t = t.slice(0, o), r = t.length - 1 - t.lastIndexOf("/")), a = i, n = 0;
                continue;
              }
            } else if (t.length > 0) {
              t = "", r = 0, a = i, n = 0;
              continue;
            }
          }
          u && (t = t.length > 0 ? t + "/.." : "..", r = 2);
        } else
          t.length > 0 ? t += "/" + e.slice(a + 1, i) : t = e.slice(a + 1, i), r = i - a - 1;
      a = i, n = 0;
    } else
      c === 46 && n > -1 ? n++ : n = -1;
  }
  return t;
}
function hr(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const F8 = { cwd: q8 };
function q8() {
  return "/";
}
function li(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function G8(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!li(e)) {
    const u = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw u.code = "ERR_INVALID_ARG_TYPE", u;
  }
  if (e.protocol !== "file:") {
    const u = new TypeError("The URL must be of scheme file");
    throw u.code = "ERR_INVALID_URL_SCHEME", u;
  }
  return j8(e);
}
function j8(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const u = e.pathname;
  let t = -1;
  for (; ++t < u.length; )
    if (u.codePointAt(t) === 37 && u.codePointAt(t + 1) === 50) {
      const r = u.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const a = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw a.code = "ERR_INVALID_FILE_URL_PATH", a;
      }
    }
  return decodeURIComponent(u);
}
const _n = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class fi {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(u) {
    let t;
    u ? li(u) ? t = { path: u } : typeof u == "string" || $8(u) ? t = { value: u } : t = u : t = {}, this.cwd = F8.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < _n.length; ) {
      const n = _n[r];
      n in t && t[n] !== void 0 && t[n] !== null && (this[n] = n === "history" ? [...t[n]] : t[n]);
    }
    let a;
    for (a in t)
      _n.includes(a) || (this[a] = t[a]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? ku.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(u) {
    An(u, "basename"), yn(u, "basename"), this.path = ku.join(this.dirname || "", u);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? ku.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(u) {
    ds(this.basename, "dirname"), this.path = ku.join(u || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? ku.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(u) {
    if (yn(u, "extname"), ds(this.dirname, "extname"), u) {
      if (u.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (u.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ku.join(this.dirname, this.stem + (u || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(u) {
    li(u) && (u = G8(u)), An(u, "path"), this.path !== u && this.history.push(u);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? ku.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(u) {
    An(u, "stem"), yn(u, "stem"), this.path = ku.join(this.dirname || "", u + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(u, t, r) {
    const a = this.message(u, t, r);
    throw a.fatal = !0, a;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(u, t, r) {
    const a = this.message(u, t, r);
    return a.fatal = void 0, a;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(u, t, r) {
    const a = new Ze(
      // @ts-expect-error: the overloads are fine.
      u,
      t,
      r
    );
    return this.path && (a.name = this.path + ":" + a.name, a.file = this.path), a.fatal = !1, this.messages.push(a), a;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(u) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(u || void 0).decode(this.value);
  }
}
function yn(e, u) {
  if (e && e.includes(ku.sep))
    throw new Error(
      "`" + u + "` cannot be a path: did not expect `" + ku.sep + "`"
    );
}
function An(e, u) {
  if (!e)
    throw new Error("`" + u + "` cannot be empty");
}
function ds(e, u) {
  if (!e)
    throw new Error("Setting `" + u + "` requires `path` to be set too");
}
function $8(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const V8 = {
  /** @type {ErrorInfo} */
  abandonedHeadElementChild: {
    reason: "Unexpected metadata element after head",
    description: "Unexpected element after head. Expected the element before `</head>`",
    url: !1
  },
  /** @type {ErrorInfo} */
  abruptClosingOfEmptyComment: {
    reason: "Unexpected abruptly closed empty comment",
    description: "Unexpected `>` or `->`. Expected `-->` to close comments"
  },
  /** @type {ErrorInfo} */
  abruptDoctypePublicIdentifier: {
    reason: "Unexpected abruptly closed public identifier",
    description: "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"
  },
  /** @type {ErrorInfo} */
  abruptDoctypeSystemIdentifier: {
    reason: "Unexpected abruptly closed system identifier",
    description: "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"
  },
  /** @type {ErrorInfo} */
  absenceOfDigitsInNumericCharacterReference: {
    reason: "Unexpected non-digit at start of numeric character reference",
    description: "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"
  },
  /** @type {ErrorInfo} */
  cdataInHtmlContent: {
    reason: "Unexpected CDATA section in HTML",
    description: "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"
  },
  /** @type {ErrorInfo} */
  characterReferenceOutsideUnicodeRange: {
    reason: "Unexpected too big numeric character reference",
    description: "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"
  },
  /** @type {ErrorInfo} */
  closingOfElementWithOpenChildElements: {
    reason: "Unexpected closing tag with open child elements",
    description: "Unexpectedly closing tag. Expected other tags to be closed first",
    url: !1
  },
  /** @type {ErrorInfo} */
  controlCharacterInInputStream: {
    reason: "Unexpected control character",
    description: "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"
  },
  /** @type {ErrorInfo} */
  controlCharacterReference: {
    reason: "Unexpected control character reference",
    description: "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"
  },
  /** @type {ErrorInfo} */
  disallowedContentInNoscriptInHead: {
    reason: "Disallowed content inside `<noscript>` in `<head>`",
    description: "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",
    url: !1
  },
  /** @type {ErrorInfo} */
  duplicateAttribute: {
    reason: "Unexpected duplicate attribute",
    description: "Unexpectedly double attribute. Expected attributes to occur only once"
  },
  /** @type {ErrorInfo} */
  endTagWithAttributes: {
    reason: "Unexpected attribute on closing tag",
    description: "Unexpected attribute. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  endTagWithTrailingSolidus: {
    reason: "Unexpected slash at end of closing tag",
    description: "Unexpected `%c-1`. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  endTagWithoutMatchingOpenElement: {
    reason: "Unexpected unopened end tag",
    description: "Unexpected end tag. Expected no end tag or another end tag",
    url: !1
  },
  /** @type {ErrorInfo} */
  eofBeforeTagName: {
    reason: "Unexpected end of file",
    description: "Unexpected end of file. Expected tag name instead"
  },
  /** @type {ErrorInfo} */
  eofInCdata: {
    reason: "Unexpected end of file in CDATA",
    description: "Unexpected end of file. Expected `]]>` to close the CDATA"
  },
  /** @type {ErrorInfo} */
  eofInComment: {
    reason: "Unexpected end of file in comment",
    description: "Unexpected end of file. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  eofInDoctype: {
    reason: "Unexpected end of file in doctype",
    description: "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"
  },
  /** @type {ErrorInfo} */
  eofInElementThatCanContainOnlyText: {
    reason: "Unexpected end of file in element that can only contain text",
    description: "Unexpected end of file. Expected text or a closing tag",
    url: !1
  },
  /** @type {ErrorInfo} */
  eofInScriptHtmlCommentLikeText: {
    reason: "Unexpected end of file in comment inside script",
    description: "Unexpected end of file. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  eofInTag: {
    reason: "Unexpected end of file in tag",
    description: "Unexpected end of file. Expected `>` to close the tag"
  },
  /** @type {ErrorInfo} */
  incorrectlyClosedComment: {
    reason: "Incorrectly closed comment",
    description: "Unexpected `%c-1`. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  incorrectlyOpenedComment: {
    reason: "Incorrectly opened comment",
    description: "Unexpected `%c`. Expected `<!--` to open the comment"
  },
  /** @type {ErrorInfo} */
  invalidCharacterSequenceAfterDoctypeName: {
    reason: "Invalid sequence after doctype name",
    description: "Unexpected sequence at `%c`. Expected `public` or `system`"
  },
  /** @type {ErrorInfo} */
  invalidFirstCharacterOfTagName: {
    reason: "Invalid first character in tag name",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  misplacedDoctype: {
    reason: "Misplaced doctype",
    description: "Unexpected doctype. Expected doctype before head",
    url: !1
  },
  /** @type {ErrorInfo} */
  misplacedStartTagForHeadElement: {
    reason: "Misplaced `<head>` start tag",
    description: "Unexpected start tag `<head>`. Expected `<head>` directly after doctype",
    url: !1
  },
  /** @type {ErrorInfo} */
  missingAttributeValue: {
    reason: "Missing attribute value",
    description: "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctype: {
    reason: "Missing doctype before other content",
    description: "Expected a `<!doctype html>` before anything else",
    url: !1
  },
  /** @type {ErrorInfo} */
  missingDoctypeName: {
    reason: "Missing doctype name",
    description: "Unexpected doctype end at `%c`. Expected `html` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctypePublicIdentifier: {
    reason: "Missing public identifier in doctype",
    description: "Unexpected `%c`. Expected identifier for `public` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctypeSystemIdentifier: {
    reason: "Missing system identifier in doctype",
    description: 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'
  },
  /** @type {ErrorInfo} */
  missingEndTagName: {
    reason: "Missing name in end tag",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  missingQuoteBeforeDoctypePublicIdentifier: {
    reason: "Missing quote before public identifier in doctype",
    description: "Unexpected `%c`. Expected `\"` or `'` instead"
  },
  /** @type {ErrorInfo} */
  missingQuoteBeforeDoctypeSystemIdentifier: {
    reason: "Missing quote before system identifier in doctype",
    description: "Unexpected `%c`. Expected `\"` or `'` instead"
  },
  /** @type {ErrorInfo} */
  missingSemicolonAfterCharacterReference: {
    reason: "Missing semicolon after character reference",
    description: "Unexpected `%c`. Expected `;` instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceAfterDoctypePublicKeyword: {
    reason: "Missing whitespace after public identifier in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceAfterDoctypeSystemKeyword: {
    reason: "Missing whitespace after system identifier in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBeforeDoctypeName: {
    reason: "Missing whitespace before doctype name",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBetweenAttributes: {
    reason: "Missing whitespace between attributes",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
    reason: "Missing whitespace between public and system identifiers in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  nestedComment: {
    reason: "Unexpected nested comment",
    description: "Unexpected `<!--`. Expected `-->`"
  },
  /** @type {ErrorInfo} */
  nestedNoscriptInHead: {
    reason: "Unexpected nested `<noscript>` in `<head>`",
    description: "Unexpected `<noscript>`. Expected a closing tag or a meta element",
    url: !1
  },
  /** @type {ErrorInfo} */
  nonConformingDoctype: {
    reason: "Unexpected non-conforming doctype declaration",
    description: 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',
    url: !1
  },
  /** @type {ErrorInfo} */
  nonVoidHtmlElementStartTagWithTrailingSolidus: {
    reason: "Unexpected trailing slash on start tag of non-void element",
    description: "Unexpected `/`. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  noncharacterCharacterReference: {
    reason: "Unexpected noncharacter code point referenced by character reference",
    description: "Unexpected code point. Do not use noncharacters in HTML"
  },
  /** @type {ErrorInfo} */
  noncharacterInInputStream: {
    reason: "Unexpected noncharacter character",
    description: "Unexpected code point `%x`. Do not use noncharacters in HTML"
  },
  /** @type {ErrorInfo} */
  nullCharacterReference: {
    reason: "Unexpected NULL character referenced by character reference",
    description: "Unexpected code point. Do not use NULL characters in HTML"
  },
  /** @type {ErrorInfo} */
  openElementsLeftAfterEof: {
    reason: "Unexpected end of file",
    description: "Unexpected end of file. Expected closing tag instead",
    url: !1
  },
  /** @type {ErrorInfo} */
  surrogateCharacterReference: {
    reason: "Unexpected surrogate character referenced by character reference",
    description: "Unexpected code point. Do not use lone surrogate characters in HTML"
  },
  /** @type {ErrorInfo} */
  surrogateInInputStream: {
    reason: "Unexpected surrogate character",
    description: "Unexpected code point `%x`. Do not use lone surrogate characters in HTML"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterAfterDoctypeSystemIdentifier: {
    reason: "Invalid character after system identifier in doctype",
    description: "Unexpected character at `%c`. Expected `>`"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterInAttributeName: {
    reason: "Unexpected character in attribute name",
    description: "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterInUnquotedAttributeValue: {
    reason: "Unexpected character in unquoted attribute value",
    description: "Unexpected `%c`. Quote the attribute value to include it"
  },
  /** @type {ErrorInfo} */
  unexpectedEqualsSignBeforeAttributeName: {
    reason: "Unexpected equals sign before attribute name",
    description: "Unexpected `%c`. Add an attribute name before it"
  },
  /** @type {ErrorInfo} */
  unexpectedNullCharacter: {
    reason: "Unexpected NULL character",
    description: "Unexpected code point `%x`. Do not use NULL characters in HTML"
  },
  /** @type {ErrorInfo} */
  unexpectedQuestionMarkInsteadOfTagName: {
    reason: "Unexpected question mark instead of tag name",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  unexpectedSolidusInTag: {
    reason: "Unexpected slash in tag",
    description: "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"
  },
  /** @type {ErrorInfo} */
  unknownNamedCharacterReference: {
    reason: "Unexpected unknown named character reference",
    description: "Unexpected character reference. Expected known named character references"
  }
}, Y8 = "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-", X8 = /-[a-z]/g, W8 = /%c(?:([-+])(\d+))?/g, z8 = /%x/g, Q8 = { 2: !0, 1: !1, 0: null }, K8 = {};
function J8(e, u) {
  const t = u || K8, r = t.onerror, a = e instanceof fi ? e : new fi(e), n = t.fragment ? q0.parseFragment : q0.parse, i = String(a), c = n(i, {
    sourceCodeLocationInfo: !0,
    // Note `parse5` types currently do not allow `undefined`.
    onParseError: t.onerror ? o : null,
    scriptingEnabled: !1
  });
  return (
    /** @type {Root} */
    O8(c, {
      file: a,
      space: t.space,
      verbose: t.verbose
    })
  );
  function o(d) {
    const s = d.code, E = Z8(s), b = t[E], m = b ?? !0, v = typeof m == "number" ? m : m ? 1 : 0;
    if (v) {
      const I = V8[E], O = new Ze(P(I.reason), {
        place: {
          start: {
            line: d.startLine,
            column: d.startCol,
            offset: d.startOffset
          },
          end: {
            line: d.endLine,
            column: d.endCol,
            offset: d.endOffset
          }
        },
        ruleId: s,
        source: "hast-util-from-html"
      });
      a.path && (O.file = a.path, O.name = a.path + ":" + O.name), O.fatal = Q8[v], O.note = P(I.description), O.url = I.url === !1 ? void 0 : Y8 + s, r(O);
    }
    function P(I) {
      return I.replace(W8, O).replace(z8, M);
      function O(U, B, w) {
        const F = (w ? Number.parseInt(w, 10) : 0) * (B === "-" ? -1 : 1), z = i.charAt(d.startOffset + F);
        return ug(z);
      }
      function M() {
        return tg(i.charCodeAt(d.startOffset));
      }
    }
  }
}
function Z8(e) {
  return (
    /** @type {ErrorCode} */
    e.replace(X8, eg)
  );
}
function eg(e) {
  return e.charAt(1).toUpperCase();
}
function ug(e) {
  return e === "`" ? "` ` `" : e;
}
function tg(e) {
  return "0x" + e.toString(16).toUpperCase();
}
function rg(e) {
  const u = this, { emitParseErrors: t, ...r } = { ...u.data("settings"), ...e };
  u.parser = a;
  function a(n, i) {
    return J8(n, {
      ...r,
      onerror: t ? function(c) {
        i.path && (c.name = i.path + ":" + c.name, c.file = i.path), i.messages.push(c);
      } : void 0
    });
  }
}
const ag = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
], ls = {}.hasOwnProperty;
function Pl(e, u) {
  const t = u || {};
  function r(a, ...n) {
    let i = r.invalid;
    const c = r.handlers;
    if (a && ls.call(a, e)) {
      const o = String(a[e]);
      i = ls.call(c, o) ? c[o] : r.unknown;
    }
    if (i)
      return i.call(this, a, ...n);
  }
  return r.handlers = t.handlers || {}, r.invalid = t.invalid, r.unknown = t.unknown, r;
}
function ng(e, u) {
  if (e = e.replace(
    u.subset ? ig(u.subset) : /["&'<>`]/g,
    r
  ), u.subset || u.escapeOnly)
    return e;
  return e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, t).replace(
    // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
    /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
    r
  );
  function t(a, n, i) {
    return u.format(
      (a.charCodeAt(0) - 55296) * 1024 + a.charCodeAt(1) - 56320 + 65536,
      i.charCodeAt(n + 2),
      u
    );
  }
  function r(a, n, i) {
    return u.format(
      a.charCodeAt(0),
      i.charCodeAt(n + 1),
      u
    );
  }
}
function ig(e) {
  const u = [];
  let t = -1;
  for (; ++t < e.length; )
    u.push(e[t].replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"));
  return new RegExp("(?:" + u.join("|") + ")", "g");
}
function cg(e, u, t) {
  const r = "&#x" + e.toString(16).toUpperCase();
  return t && u && !/[\dA-Fa-f]/.test(String.fromCharCode(u)) ? r : r + ";";
}
function sg(e, u, t) {
  const r = "&#" + String(e);
  return t && u && !/\d/.test(String.fromCharCode(u)) ? r : r + ";";
}
const og = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml"
], vn = {
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  fnof: "ƒ",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  bull: "•",
  hellip: "…",
  prime: "′",
  Prime: "″",
  oline: "‾",
  frasl: "⁄",
  weierp: "℘",
  image: "ℑ",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  permil: "‰",
  lsaquo: "‹",
  rsaquo: "›",
  euro: "€"
}, dg = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], Ll = {}.hasOwnProperty, bi = {};
let Nr;
for (Nr in vn)
  Ll.call(vn, Nr) && (bi[vn[Nr]] = Nr);
function lg(e, u, t, r) {
  const a = String.fromCharCode(e);
  if (Ll.call(bi, a)) {
    const n = bi[a], i = "&" + n;
    return t && og.includes(n) && !dg.includes(n) && (!r || u && u !== 61 && /[^\da-z]/i.test(String.fromCharCode(u))) ? i : i + ";";
  }
  return "";
}
function fg(e, u, t) {
  let r = cg(e, u, t.omitOptionalSemicolons), a;
  if ((t.useNamedReferences || t.useShortestReferences) && (a = lg(
    e,
    u,
    t.omitOptionalSemicolons,
    t.attribute
  )), (t.useShortestReferences || !a) && t.useShortestReferences) {
    const n = sg(e, u, t.omitOptionalSemicolons);
    n.length < r.length && (r = n);
  }
  return a && (!t.useShortestReferences || a.length < r.length) ? a : r;
}
function u0(e, u) {
  return ng(e, Object.assign({ format: fg }, u));
}
function bg(e, u, t, r) {
  return r.settings.bogusComments ? "<?" + u0(
    e.value,
    Object.assign({}, r.settings.characterReferences, { subset: [">"] })
  ) + ">" : "<!--" + e.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, a) + "-->";
  function a(n) {
    return u0(
      n,
      Object.assign({}, r.settings.characterReferences, {
        subset: ["<", ">"]
      })
    );
  }
}
function hg(e, u, t, r) {
  return "<!" + (r.settings.upperDoctype ? "DOCTYPE" : "doctype") + (r.settings.tightDoctype ? "" : " ") + "html>";
}
function fs(e, u) {
  const t = String(e);
  if (typeof u != "string")
    throw new TypeError("Expected character");
  let r = 0, a = t.indexOf(u);
  for (; a !== -1; )
    r++, a = t.indexOf(u, a + u.length);
  return r;
}
const pg = /[ \t\n\f\r]/g;
function Ka(e) {
  return typeof e == "object" ? e.type === "text" ? bs(e.value) : !1 : bs(e);
}
function bs(e) {
  return e.replace(pg, "") === "";
}
const ke = Rl(1), wl = Rl(-1), mg = [];
function Rl(e) {
  return u;
  function u(t, r, a) {
    const n = t ? t.children : mg;
    let i = (r || 0) + e, c = n[i];
    if (!a)
      for (; c && Ka(c); )
        i += e, c = n[i];
    return c;
  }
}
const gg = {}.hasOwnProperty;
function Ml(e) {
  return u;
  function u(t, r, a) {
    return gg.call(e, t.tagName) && e[t.tagName](t, r, a);
  }
}
const pc = Ml({
  body: Tg,
  caption: xn,
  colgroup: xn,
  dd: vg,
  dt: Ag,
  head: xn,
  html: Eg,
  li: yg,
  optgroup: xg,
  option: Ng,
  p: _g,
  rp: hs,
  rt: hs,
  tbody: Dg,
  td: ps,
  tfoot: Cg,
  th: ps,
  thead: Ig,
  tr: Sg
});
function xn(e, u, t) {
  const r = ke(t, u, !0);
  return !r || r.type !== "comment" && !(r.type === "text" && Ka(r.value.charAt(0)));
}
function Eg(e, u, t) {
  const r = ke(t, u);
  return !r || r.type !== "comment";
}
function Tg(e, u, t) {
  const r = ke(t, u);
  return !r || r.type !== "comment";
}
function _g(e, u, t) {
  const r = ke(t, u);
  return r ? r.type === "element" && (r.tagName === "address" || r.tagName === "article" || r.tagName === "aside" || r.tagName === "blockquote" || r.tagName === "details" || r.tagName === "div" || r.tagName === "dl" || r.tagName === "fieldset" || r.tagName === "figcaption" || r.tagName === "figure" || r.tagName === "footer" || r.tagName === "form" || r.tagName === "h1" || r.tagName === "h2" || r.tagName === "h3" || r.tagName === "h4" || r.tagName === "h5" || r.tagName === "h6" || r.tagName === "header" || r.tagName === "hgroup" || r.tagName === "hr" || r.tagName === "main" || r.tagName === "menu" || r.tagName === "nav" || r.tagName === "ol" || r.tagName === "p" || r.tagName === "pre" || r.tagName === "section" || r.tagName === "table" || r.tagName === "ul") : !t || // Confusing parent.
  !(t.type === "element" && (t.tagName === "a" || t.tagName === "audio" || t.tagName === "del" || t.tagName === "ins" || t.tagName === "map" || t.tagName === "noscript" || t.tagName === "video"));
}
function yg(e, u, t) {
  const r = ke(t, u);
  return !r || r.type === "element" && r.tagName === "li";
}
function Ag(e, u, t) {
  const r = ke(t, u);
  return !!(r && r.type === "element" && (r.tagName === "dt" || r.tagName === "dd"));
}
function vg(e, u, t) {
  const r = ke(t, u);
  return !r || r.type === "element" && (r.tagName === "dt" || r.tagName === "dd");
}
function hs(e, u, t) {
  const r = ke(t, u);
  return !r || r.type === "element" && (r.tagName === "rp" || r.tagName === "rt");
}
function xg(e, u, t) {
  const r = ke(t, u);
  return !r || r.type === "element" && r.tagName === "optgroup";
}
function Ng(e, u, t) {
  const r = ke(t, u);
  return !r || r.type === "element" && (r.tagName === "option" || r.tagName === "optgroup");
}
function Ig(e, u, t) {
  const r = ke(t, u);
  return !!(r && r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot"));
}
function Dg(e, u, t) {
  const r = ke(t, u);
  return !r || r.type === "element" && (r.tagName === "tbody" || r.tagName === "tfoot");
}
function Cg(e, u, t) {
  return !ke(t, u);
}
function Sg(e, u, t) {
  const r = ke(t, u);
  return !r || r.type === "element" && r.tagName === "tr";
}
function ps(e, u, t) {
  const r = ke(t, u);
  return !r || r.type === "element" && (r.tagName === "td" || r.tagName === "th");
}
const Og = Ml({
  body: wg,
  colgroup: Rg,
  head: Lg,
  html: Pg,
  tbody: Mg
});
function Pg(e) {
  const u = ke(e, -1);
  return !u || u.type !== "comment";
}
function Lg(e) {
  const u = e.children, t = [];
  let r = -1;
  for (; ++r < u.length; ) {
    const a = u[r];
    if (a.type === "element" && (a.tagName === "title" || a.tagName === "base")) {
      if (t.includes(a.tagName))
        return !1;
      t.push(a.tagName);
    }
  }
  return u.length > 0;
}
function wg(e) {
  const u = ke(e, -1, !0);
  return !u || u.type !== "comment" && !(u.type === "text" && Ka(u.value.charAt(0))) && !(u.type === "element" && (u.tagName === "meta" || u.tagName === "link" || u.tagName === "script" || u.tagName === "style" || u.tagName === "template"));
}
function Rg(e, u, t) {
  const r = wl(t, u), a = ke(e, -1, !0);
  return t && r && r.type === "element" && r.tagName === "colgroup" && pc(r, t.children.indexOf(r), t) ? !1 : !!(a && a.type === "element" && a.tagName === "col");
}
function Mg(e, u, t) {
  const r = wl(t, u), a = ke(e, -1);
  return t && r && r.type === "element" && (r.tagName === "thead" || r.tagName === "tbody") && pc(r, t.children.indexOf(r), t) ? !1 : !!(a && a.type === "element" && a.tagName === "tr");
}
const Ir = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    [`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")],
    [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    [`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")],
    [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function kg(e, u, t, r) {
  const a = r.schema, n = a.space === "svg" ? !1 : r.settings.omitOptionalTags;
  let i = a.space === "svg" ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase());
  const c = [];
  let o;
  a.space === "html" && e.tagName === "svg" && (r.schema = Ft);
  const d = Bg(r, e.properties), s = r.all(
    a.space === "html" && e.tagName === "template" ? e.content : e
  );
  return r.schema = a, s && (i = !1), (d || !n || !Og(e, u, t)) && (c.push("<", e.tagName, d ? " " + d : ""), i && (a.space === "svg" || r.settings.closeSelfClosing) && (o = d.charAt(d.length - 1), (!r.settings.tightSelfClosing || o === "/" || o && o !== '"' && o !== "'") && c.push(" "), c.push("/")), c.push(">")), c.push(s), !i && (!n || !pc(e, u, t)) && c.push("</" + e.tagName + ">"), c.join("");
}
function Bg(e, u) {
  const t = [];
  let r = -1, a;
  if (u) {
    for (a in u)
      if (u[a] !== null && u[a] !== void 0) {
        const n = Ug(e, a, u[a]);
        n && t.push(n);
      }
  }
  for (; ++r < t.length; ) {
    const n = e.settings.tightAttributes ? t[r].charAt(t[r].length - 1) : void 0;
    r !== t.length - 1 && n !== '"' && n !== "'" && (t[r] += " ");
  }
  return t.join("");
}
function Ug(e, u, t) {
  const r = Qa(e.schema, u), a = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, n = e.settings.allowDangerousCharacters ? 0 : 1;
  let i = e.quote, c;
  if (r.overloadedBoolean && (t === r.attribute || t === "") ? t = !0 : (r.boolean || r.overloadedBoolean && typeof t != "string") && (t = !!t), t == null || t === !1 || typeof t == "number" && Number.isNaN(t))
    return "";
  const o = u0(
    r.attribute,
    Object.assign({}, e.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: Ir.name[a][n]
    })
  );
  return t === !0 || (t = Array.isArray(t) ? (r.commaSeparated ? Il : Dl)(t, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(t), e.settings.collapseEmptyAttributes && !t) ? o : (e.settings.preferUnquoted && (c = u0(
    t,
    Object.assign({}, e.settings.characterReferences, {
      attribute: !0,
      subset: Ir.unquoted[a][n]
    })
  )), c !== t && (e.settings.quoteSmart && fs(t, i) > fs(t, e.alternative) && (i = e.alternative), c = i + u0(
    t,
    Object.assign({}, e.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: (i === "'" ? Ir.single : Ir.double)[a][n],
      attribute: !0
    })
  ) + i), o + (c && "=" + c));
}
function kl(e, u, t, r) {
  return t && t.type === "element" && (t.tagName === "script" || t.tagName === "style") ? e.value : u0(
    e.value,
    Object.assign({}, r.settings.characterReferences, {
      subset: ["<", "&"]
    })
  );
}
function Hg(e, u, t, r) {
  return r.settings.allowDangerousHtml ? e.value : kl(e, u, t, r);
}
function Fg(e, u, t, r) {
  return r.all(e);
}
const qg = Pl("type", {
  invalid: Gg,
  unknown: jg,
  handlers: { comment: bg, doctype: hg, element: kg, raw: Hg, root: Fg, text: kl }
});
function Gg(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function jg(e) {
  const u = (
    /** @type {Nodes} */
    e
  );
  throw new Error("Cannot compile unknown node `" + u.type + "`");
}
const $g = {}, Vg = {}, Yg = [];
function Xg(e, u) {
  const t = u || $g, r = t.quote || '"', a = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'")
    throw new Error("Invalid quote `" + r + "`, expected `'` or `\"`");
  return {
    one: Wg,
    all: zg,
    settings: {
      omitOptionalTags: t.omitOptionalTags || !1,
      allowParseErrors: t.allowParseErrors || !1,
      allowDangerousCharacters: t.allowDangerousCharacters || !1,
      quoteSmart: t.quoteSmart || !1,
      preferUnquoted: t.preferUnquoted || !1,
      tightAttributes: t.tightAttributes || !1,
      upperDoctype: t.upperDoctype || !1,
      tightDoctype: t.tightDoctype || !1,
      bogusComments: t.bogusComments || !1,
      tightCommaSeparatedLists: t.tightCommaSeparatedLists || !1,
      tightSelfClosing: t.tightSelfClosing || !1,
      collapseEmptyAttributes: t.collapseEmptyAttributes || !1,
      allowDangerousHtml: t.allowDangerousHtml || !1,
      voids: t.voids || ag,
      characterReferences: t.characterReferences || Vg,
      closeSelfClosing: t.closeSelfClosing || !1,
      closeEmptyElements: t.closeEmptyElements || !1
    },
    schema: t.space === "svg" ? Ft : br,
    quote: r,
    alternative: a
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function Wg(e, u, t) {
  return qg(e, u, t, this);
}
function zg(e) {
  const u = [], t = e && e.children || Yg;
  let r = -1;
  for (; ++r < t.length; )
    u[r] = this.one(t[r], r, e);
  return u.join("");
}
function Bl(e) {
  const u = this, t = { ...u.data("settings"), ...e };
  u.compiler = r;
  function r(a) {
    return Xg(a, t);
  }
}
function ms(e) {
  if (e)
    throw e;
}
var kr = Object.prototype.hasOwnProperty, Ul = Object.prototype.toString, gs = Object.defineProperty, Es = Object.getOwnPropertyDescriptor, Ts = function(u) {
  return typeof Array.isArray == "function" ? Array.isArray(u) : Ul.call(u) === "[object Array]";
}, _s = function(u) {
  if (!u || Ul.call(u) !== "[object Object]")
    return !1;
  var t = kr.call(u, "constructor"), r = u.constructor && u.constructor.prototype && kr.call(u.constructor.prototype, "isPrototypeOf");
  if (u.constructor && !t && !r)
    return !1;
  var a;
  for (a in u)
    ;
  return typeof a > "u" || kr.call(u, a);
}, ys = function(u, t) {
  gs && t.name === "__proto__" ? gs(u, t.name, {
    enumerable: !0,
    configurable: !0,
    value: t.newValue,
    writable: !0
  }) : u[t.name] = t.newValue;
}, As = function(u, t) {
  if (t === "__proto__")
    if (kr.call(u, t)) {
      if (Es)
        return Es(u, t).value;
    } else
      return;
  return u[t];
}, Qg = function e() {
  var u, t, r, a, n, i, c = arguments[0], o = 1, d = arguments.length, s = !1;
  for (typeof c == "boolean" && (s = c, c = arguments[1] || {}, o = 2), (c == null || typeof c != "object" && typeof c != "function") && (c = {}); o < d; ++o)
    if (u = arguments[o], u != null)
      for (t in u)
        r = As(c, t), a = As(u, t), c !== a && (s && a && (_s(a) || (n = Ts(a))) ? (n ? (n = !1, i = r && Ts(r) ? r : []) : i = r && _s(r) ? r : {}, ys(c, { name: t, newValue: e(s, i, a) })) : typeof a < "u" && ys(c, { name: t, newValue: a }));
  return c;
};
const Nn = /* @__PURE__ */ Ti(Qg);
function hi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const u = Object.getPrototypeOf(e);
  return (u === null || u === Object.prototype || Object.getPrototypeOf(u) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Kg() {
  const e = [], u = { run: t, use: r };
  return u;
  function t(...a) {
    let n = -1;
    const i = a.pop();
    if (typeof i != "function")
      throw new TypeError("Expected function as last argument, not " + i);
    c(null, ...a);
    function c(o, ...d) {
      const s = e[++n];
      let E = -1;
      if (o) {
        i(o);
        return;
      }
      for (; ++E < a.length; )
        (d[E] === null || d[E] === void 0) && (d[E] = a[E]);
      a = d, s ? Jg(s, c)(...d) : i(null, ...d);
    }
  }
  function r(a) {
    if (typeof a != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + a
      );
    return e.push(a), u;
  }
}
function Jg(e, u) {
  let t;
  return r;
  function r(...i) {
    const c = e.length > i.length;
    let o;
    c && i.push(a);
    try {
      o = e.apply(this, i);
    } catch (d) {
      const s = (
        /** @type {Error} */
        d
      );
      if (c && t)
        throw s;
      return a(s);
    }
    c || (o instanceof Promise ? o.then(n, a) : o instanceof Error ? a(o) : n(o));
  }
  function a(i, ...c) {
    t || (t = !0, u(i, ...c));
  }
  function n(i) {
    a(null, i);
  }
}
const Zg = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), a = r[e], n = function() {
      return a.apply(n, arguments);
    };
    Object.setPrototypeOf(n, r);
    const i = Object.getOwnPropertyNames(a);
    for (const c of i) {
      const o = Object.getOwnPropertyDescriptor(a, c);
      o && Object.defineProperty(n, c, o);
    }
    return n;
  }
), eE = {}.hasOwnProperty;
class mc extends Zg {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Kg();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@link Processor `Processor`}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const u = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new mc()
    );
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      u.use(...r);
    }
    return u.data(Nn(!0, {}, this.namespace)), u;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > 👉 **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > 👉 **Note**: to register custom data in TypeScript, augment the
   * > {@link Data `Data`} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(u, t) {
    return typeof u == "string" ? arguments.length === 2 ? (Cn("data", this.frozen), this.namespace[u] = t, this) : eE.call(this.namespace, u) && this.namespace[u] || void 0 : u ? (Cn("data", this.frozen), this.namespace = u, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const u = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const a = t.call(u, ...r);
      typeof a == "function" && this.transformers.use(a);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > 👉 **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(u) {
    this.freeze();
    const t = Dr(u), r = this.parser || this.Parser;
    return In("parse", r), r(String(t), t);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > 👉 **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(u, t) {
    const r = this;
    return this.freeze(), In("process", this.parser || this.Parser), Dn("process", this.compiler || this.Compiler), t ? a(void 0, t) : new Promise(a);
    function a(n, i) {
      const c = Dr(u), o = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(c)
      );
      r.run(o, c, function(s, E, b) {
        if (s || !E || !b)
          return d(s);
        const m = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          E
        ), v = r.stringify(m, b);
        rE(v) ? b.value = v : b.result = v, d(
          s,
          /** @type {VFileWithOutput<CompileResult>} */
          b
        );
      });
      function d(s, E) {
        s || !E ? i(s) : n ? n(E) : t(void 0, E);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > 👉 **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(u) {
    let t = !1, r;
    return this.freeze(), In("processSync", this.parser || this.Parser), Dn("processSync", this.compiler || this.Compiler), this.process(u, a), xs("processSync", "process", t), r;
    function a(n, i) {
      t = !0, ms(n), r = i;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > 👉 **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(u, t, r) {
    vs(u), this.freeze();
    const a = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? n(void 0, r) : new Promise(n);
    function n(i, c) {
      const o = Dr(t);
      a.run(u, o, d);
      function d(s, E, b) {
        const m = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          E || u
        );
        s ? c(s) : i ? i(m) : r(void 0, m, b);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > 👉 **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(u, t) {
    let r = !1, a;
    return this.run(u, t, n), xs("runSync", "run", r), a;
    function n(i, c) {
      ms(i), a = c, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > 👉 **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > 👉 **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > 👉 **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@link CompileResultMap `CompileResultMap`}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(u, t) {
    this.freeze();
    const r = Dr(t), a = this.compiler || this.Compiler;
    return Dn("stringify", a), vs(u), a(u, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > 👉 **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(u, ...t) {
    const r = this.attachers, a = this.namespace;
    if (Cn("use", this.frozen), u != null)
      if (typeof u == "function")
        o(u, t);
      else if (typeof u == "object")
        Array.isArray(u) ? c(u) : i(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    return this;
    function n(d) {
      if (typeof d == "function")
        o(d, []);
      else if (typeof d == "object")
        if (Array.isArray(d)) {
          const [s, ...E] = (
            /** @type {PluginTuple<Array<unknown>>} */
            d
          );
          o(s, E);
        } else
          i(d);
      else
        throw new TypeError("Expected usable value, not `" + d + "`");
    }
    function i(d) {
      if (!("plugins" in d) && !("settings" in d))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      c(d.plugins), d.settings && (a.settings = Nn(!0, a.settings, d.settings));
    }
    function c(d) {
      let s = -1;
      if (d != null)
        if (Array.isArray(d))
          for (; ++s < d.length; ) {
            const E = d[s];
            n(E);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + d + "`");
    }
    function o(d, s) {
      let E = -1, b = -1;
      for (; ++E < r.length; )
        if (r[E][0] === d) {
          b = E;
          break;
        }
      if (b === -1)
        r.push([d, ...s]);
      else if (s.length > 0) {
        let [m, ...v] = s;
        const P = r[b][1];
        hi(P) && hi(m) && (m = Nn(!0, P, m)), r[b] = [d, m, ...v];
      }
    }
  }
}
const uE = new mc().freeze();
function In(e, u) {
  if (typeof u != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Dn(e, u) {
  if (typeof u != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Cn(e, u) {
  if (u)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function vs(e) {
  if (!hi(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function xs(e, u, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + u + "` instead"
    );
}
function Dr(e) {
  return tE(e) ? e : new fi(e);
}
function tE(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function rE(e) {
  return typeof e == "string" || aE(e);
}
function aE(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const nE = uE().use(rg).use(Bl).freeze(), Hl = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return oE;
    if (typeof e == "function")
      return Ja(e);
    if (typeof e == "object")
      return Array.isArray(e) ? iE(e) : cE(e);
    if (typeof e == "string")
      return sE(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function iE(e) {
  const u = [];
  let t = -1;
  for (; ++t < e.length; )
    u[t] = Hl(e[t]);
  return Ja(r);
  function r(...a) {
    let n = -1;
    for (; ++n < u.length; )
      if (u[n].apply(this, a))
        return !0;
    return !1;
  }
}
function cE(e) {
  const u = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ja(t);
  function t(r) {
    const a = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let n;
    for (n in e)
      if (a[n] !== u[n])
        return !1;
    return !0;
  }
}
function sE(e) {
  return Ja(u);
  function u(t) {
    return t && t.type === e;
  }
}
function Ja(e) {
  return u;
  function u(t, r, a) {
    return !!(dE(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      a || void 0
    ));
  }
}
function oE() {
  return !0;
}
function dE(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Fl = [], lE = !0, pi = !1, ql = "skip";
function fE(e, u, t, r) {
  let a;
  typeof u == "function" && typeof t != "function" ? (r = t, t = u) : a = u;
  const n = Hl(a), i = r ? -1 : 1;
  c(e, void 0, [])();
  function c(o, d, s) {
    const E = (
      /** @type {Record<string, unknown>} */
      o && typeof o == "object" ? o : {}
    );
    if (typeof E.type == "string") {
      const m = (
        // `hast`
        typeof E.tagName == "string" ? E.tagName : (
          // `xast`
          typeof E.name == "string" ? E.name : void 0
        )
      );
      Object.defineProperty(b, "name", {
        value: "node (" + (o.type + (m ? "<" + m + ">" : "")) + ")"
      });
    }
    return b;
    function b() {
      let m = Fl, v, P, I;
      if ((!u || n(o, d, s[s.length - 1] || void 0)) && (m = bE(t(o, s)), m[0] === pi))
        return m;
      if ("children" in o && o.children) {
        const O = (
          /** @type {UnistParent} */
          o
        );
        if (O.children && m[0] !== ql)
          for (P = (r ? O.children.length : -1) + i, I = s.concat(O); P > -1 && P < O.children.length; ) {
            const M = O.children[P];
            if (v = c(M, P, I)(), v[0] === pi)
              return v;
            P = typeof v[1] == "number" ? v[1] : P + i;
          }
      }
      return m;
    }
  }
}
function bE(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [lE, e] : e == null ? Fl : [e];
}
function mi(e, u, t, r) {
  let a, n, i;
  typeof u == "function" && typeof t != "function" ? (n = void 0, i = u, a = t) : (n = u, i = t, a = r), fE(e, n, c, a);
  function c(o, d) {
    const s = d[d.length - 1], E = s ? s.children.indexOf(o) : void 0;
    return i(o, E, s);
  }
}
const Br = {}, D0 = {};
function hE(e, u) {
  let t = u;
  for (let r = 0; r < e.length; r++) {
    const a = r === e.length - 1, n = e.charAt(r), i = t[n] || (t[n] = { chars: {} });
    a && (i.self = e), t = i.chars;
  }
}
function Ns(e) {
  if (e.length === 0)
    return Br;
  const u = {};
  for (const t of e)
    hE(t, u);
  return u;
}
function Is(e) {
  if (e.length === 0)
    return D0;
  const u = {};
  for (const t of e)
    u[t] = !0;
  return u;
}
const Ds = {}, pE = {
  type: "String",
  optional: !0
};
function mE(e) {
  const u = {
    optional: !1
  };
  function t(r) {
    if (u.type && u.type !== r)
      throw new Error(`Conflicting pseudo-class argument type: "${u.type}" vs "${r}".`);
    u.type = r;
  }
  for (const r of e)
    r === "NoArgument" && (u.optional = !0), r === "Formula" && t("Formula"), r === "FormulaOfSelector" && (t("Formula"), u.ofSelector = !0), r === "String" && t("String"), r === "Selector" && t("Selector");
  return u;
}
function gE(e) {
  const u = {};
  for (const t of Object.keys(e)) {
    const r = e[t];
    if (r)
      for (const a of r)
        (u[a] || (u[a] = [])).push(t);
  }
  return u;
}
function EE(e) {
  const u = gE(e), t = {};
  for (const r of Object.keys(u)) {
    const a = u[r];
    a && (t[r] = mE(a));
  }
  return t;
}
const TE = {}, _E = { wildcard: !0 };
function C0(e) {
  return e ? typeof e == "boolean" ? _E : e : TE;
}
function pr(e, u) {
  const t = { ...e };
  if ("tag" in u)
    if (u.tag) {
      t.tag = { ...C0(e.tag) };
      const r = C0(u.tag);
      "wildcard" in r && (t.tag.wildcard = r.wildcard);
    } else
      t.tag = void 0;
  if ("ids" in u && (t.ids = u.ids), "classNames" in u && (t.classNames = u.classNames), "namespace" in u)
    if (u.namespace) {
      t.namespace = { ...C0(e.namespace) };
      const r = C0(u.namespace);
      "wildcard" in r && (t.namespace.wildcard = r.wildcard);
    } else
      t.namespace = void 0;
  if ("combinators" in u && (u.combinators ? t.combinators = t.combinators ? t.combinators.concat(u.combinators) : u.combinators : t.combinators = void 0), "attributes" in u && (u.attributes ? (t.attributes = { ...e.attributes }, "unknownCaseSensitivityModifiers" in u.attributes && (t.attributes.unknownCaseSensitivityModifiers = u.attributes.unknownCaseSensitivityModifiers), "operators" in u.attributes && (t.attributes.operators = u.attributes.operators ? t.attributes.operators ? t.attributes.operators.concat(u.attributes.operators) : u.attributes.operators : void 0), "caseSensitivityModifiers" in u.attributes && (t.attributes.caseSensitivityModifiers = u.attributes.caseSensitivityModifiers ? t.attributes.caseSensitivityModifiers ? t.attributes.caseSensitivityModifiers.concat(u.attributes.caseSensitivityModifiers) : u.attributes.caseSensitivityModifiers : void 0)) : t.attributes = void 0), "pseudoElements" in u && (u.pseudoElements ? (t.pseudoElements = { ...e.pseudoElements }, "unknown" in u.pseudoElements && (t.pseudoElements.unknown = u.pseudoElements.unknown), "notation" in u.pseudoElements && (t.pseudoElements.notation = u.pseudoElements.notation), "definitions" in u.pseudoElements && (t.pseudoElements.definitions = u.pseudoElements.definitions ? t.pseudoElements.definitions ? t.pseudoElements.definitions.concat(u.pseudoElements.definitions) : u.pseudoElements.definitions : void 0)) : t.pseudoElements = void 0), "pseudoClasses" in u)
    if (u.pseudoClasses) {
      if (t.pseudoClasses = { ...e.pseudoClasses }, "unknown" in u.pseudoClasses && (t.pseudoClasses.unknown = u.pseudoClasses.unknown), "definitions" in u.pseudoClasses) {
        const r = u.pseudoClasses.definitions;
        if (r) {
          t.pseudoClasses.definitions = {
            ...t.pseudoClasses.definitions
          };
          const a = t.pseudoClasses.definitions;
          for (const n of Object.keys(r)) {
            const i = r[n], c = a[n];
            i ? a[n] = c ? c.concat(i) : i : a[n] = void 0;
          }
        } else
          t.pseudoClasses.definitions = void 0;
      }
    } else
      t.pseudoClasses = void 0;
  return t;
}
const Gl = {
  tag: {},
  ids: !0,
  classNames: !0,
  combinators: [],
  pseudoElements: {
    unknown: "reject",
    notation: "singleColon",
    definitions: ["first-letter", "first-line"]
  },
  pseudoClasses: {
    unknown: "reject",
    definitions: {
      NoArgument: ["link", "visited", "active"]
    }
  }
}, jl = pr(Gl, {
  tag: { wildcard: !0 },
  combinators: [">", "+"],
  attributes: {
    unknownCaseSensitivityModifiers: "reject",
    operators: ["=", "~=", "|="]
  },
  pseudoElements: {
    definitions: ["before", "after"]
  },
  pseudoClasses: {
    unknown: "reject",
    definitions: {
      NoArgument: ["hover", "focus", "first-child"],
      String: ["lang"]
    }
  }
}), gi = pr(jl, {
  namespace: {
    wildcard: !0
  },
  combinators: ["~"],
  attributes: {
    operators: ["^=", "$=", "*="]
  },
  pseudoElements: {
    notation: "both"
  },
  pseudoClasses: {
    definitions: {
      NoArgument: [
        "root",
        "last-child",
        "first-of-type",
        "last-of-type",
        "only-child",
        "only-of-type",
        "empty",
        "target",
        "enabled",
        "disabled",
        "checked",
        "indeterminate"
      ],
      Formula: ["nth-child", "nth-last-child", "nth-of-type", "nth-last-of-type"],
      Selector: ["not"]
    }
  }
}), Ei = pr(gi, {
  combinators: ["||"],
  attributes: {
    caseSensitivityModifiers: ["i", "I", "s", "S"]
  },
  pseudoClasses: {
    definitions: {
      NoArgument: [
        "any-link",
        "local-link",
        "target-within",
        "scope",
        "current",
        "past",
        "future",
        "focus-within",
        "focus-visible",
        "read-write",
        "read-only",
        "placeholder-shown",
        "default",
        "valid",
        "invalid",
        "in-range",
        "out-of-range",
        "required",
        "optional",
        "blank",
        "user-invalid"
      ],
      Formula: ["nth-col", "nth-last-col"],
      String: ["dir"],
      FormulaOfSelector: ["nth-child", "nth-last-child"],
      Selector: ["current", "is", "where", "has"]
    }
  }
}), yE = pr(Ei, {
  pseudoElements: {
    unknown: "accept"
  },
  pseudoClasses: {
    unknown: "accept"
  },
  attributes: {
    unknownCaseSensitivityModifiers: "accept"
  }
}), Cs = {
  css1: Gl,
  css2: jl,
  css3: gi,
  "selectors-3": gi,
  "selectors-4": Ei,
  latest: Ei,
  progressive: yE
};
function Cr(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "-" || e === "_";
}
function AE(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "-" || e === "_";
}
function N0(e) {
  return e >= "a" && e <= "f" || e >= "A" && e <= "F" || e >= "0" && e <= "9";
}
const vE = {
  n: `
`,
  r: "\r",
  t: "	",
  f: "\f",
  "\\": "\\"
}, Ss = {
  " ": !0,
  "	": !0,
  "\n": !0,
  "\r": !0,
  "\f": !0
}, xE = {
  '"': !0,
  "'": !0
}, Os = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0
}, Sn = "css-selector-parser parse error: ";
function NE(e = {}) {
  const { syntax: u = "latest", substitutes: t, strict: r = !0 } = e;
  let a = typeof u == "string" ? Cs[u] : u;
  a.baseSyntax && (a = pr(Cs[a.baseSyntax], a));
  const [n, i] = a.tag ? [!0, !!C0(a.tag).wildcard] : [!1, !1], c = !!a.ids, o = !!a.classNames, d = !!a.namespace, s = a.namespace && (a.namespace === !0 || a.namespace.wildcard === !0);
  if (d && !n)
    throw new Error(`${Sn}Namespaces cannot be enabled while tags are disabled.`);
  const E = !!t, b = a.combinators ? Ns(a.combinators) : Br, [m, v, P, I] = a.attributes ? [
    !0,
    a.attributes.operators ? Ns(a.attributes.operators) : Br,
    a.attributes.caseSensitivityModifiers ? Is(a.attributes.caseSensitivityModifiers) : D0,
    a.attributes.unknownCaseSensitivityModifiers === "accept"
  ] : [!1, Br, D0, !1], O = I || Object.keys(P).length > 0, [M, U, B] = a.pseudoClasses ? [
    !0,
    a.pseudoClasses.definitions ? EE(a.pseudoClasses.definitions) : Ds,
    a.pseudoClasses.unknown === "accept"
  ] : [!1, Ds, !1], [w, F, z, Z, ue] = a.pseudoElements ? [
    !0,
    a.pseudoElements.notation === "singleColon" || a.pseudoElements.notation === "both",
    !a.pseudoElements.notation || a.pseudoElements.notation === "doubleColon" || a.pseudoElements.notation === "both",
    a.pseudoElements.definitions ? Is(a.pseudoElements.definitions) : D0,
    a.pseudoElements.unknown === "accept"
  ] : [!1, !1, !1, D0, !1];
  let V = "", l = V.length, g = 0, T = "";
  const A = (Y) => T === Y, D = () => A("*") || Cr(T) || A("\\"), k = (Y) => {
    g = Y, T = V.charAt(g);
  }, R = () => {
    g++, T = V.charAt(g);
  }, $ = () => {
    const Y = T;
    return g++, T = V.charAt(g), Y;
  };
  function J(Y) {
    const Q = Math.min(l - 1, g), ee = new Error(`${Sn}${Y} Pos: ${Q}.`);
    throw ee.position = Q, ee.name = "ParserError", ee;
  }
  function W(Y, Q) {
    if (!Y)
      return J(Q);
  }
  const te = () => {
    W(g < l, "Unexpected end of input.");
  }, re = () => g >= l, we = (Y) => {
    W(g < l, `Expected "${Y}" but end of input reached.`), W(T === Y, `Expected "${Y}" but "${T}" found.`), g++, T = V.charAt(g);
  };
  function Iu(Y) {
    const Q = he(Y, g);
    if (Q)
      return g += Q.length, T = V.charAt(g), Q;
  }
  function he(Y, Q) {
    const ee = V.charAt(Q), ce = Y[ee];
    if (ce) {
      const Ru = he(ce.chars, Q + 1);
      if (Ru)
        return Ru;
      if (ce.self)
        return ce.self;
    }
  }
  function hu() {
    let Y = $();
    for (; N0(T); )
      Y += $();
    return A(" ") && R(), String.fromCharCode(parseInt(Y, 16));
  }
  function Du(Y) {
    let Q = "";
    for (we(Y); g < l; ) {
      if (A(Y))
        return R(), Q;
      if (A("\\")) {
        R();
        let ee;
        if (A(Y))
          Q += Y;
        else if ((ee = vE[T]) !== void 0)
          Q += ee;
        else if (N0(T)) {
          Q += hu();
          continue;
        } else
          Q += T;
      } else
        Q += T;
      R();
    }
    return Q;
  }
  function ye() {
    let Y = "";
    for (; g < l; )
      if (AE(T))
        Y += $();
      else if (A("\\"))
        R(), te(), N0(T) ? Y += hu() : Y += $();
      else
        return Y;
    return Y;
  }
  function mt() {
    let Y = "";
    for (; g < l && !A(")"); )
      if (A("\\")) {
        if (R(), re() && !r)
          return (Y + "\\").trim();
        te(), N0(T) ? Y += hu() : Y += $();
      } else
        Y += $();
    return Y.trim();
  }
  function xe() {
    for (; Ss[T]; )
      R();
  }
  function gt(Y = !1) {
    xe();
    const Q = [et(Y)];
    for (; A(","); )
      R(), xe(), Q.push(et(Y));
    return {
      type: "Selector",
      rules: Q
    };
  }
  function Be() {
    we("["), xe();
    let Y;
    if (A("|"))
      W(d, "Namespaces are not enabled."), R(), Y = {
        type: "Attribute",
        name: ye(),
        namespace: { type: "NoNamespace" }
      };
    else if (A("*"))
      W(d, "Namespaces are not enabled."), W(s, "Wildcard namespace is not enabled."), R(), we("|"), Y = {
        type: "Attribute",
        name: ye(),
        namespace: { type: "WildcardNamespace" }
      };
    else {
      const Q = ye();
      if (Y = {
        type: "Attribute",
        name: Q
      }, A("|")) {
        const ee = g;
        R(), Cr(T) || A("\\") ? (W(d, "Namespaces are not enabled."), Y = {
          type: "Attribute",
          name: ye(),
          namespace: { type: "NamespaceName", name: Q }
        }) : k(ee);
      }
    }
    if (W(Y.name, "Expected attribute name."), xe(), re() && !r)
      return Y;
    if (A("]"))
      R();
    else {
      if (Y.operator = Iu(v), W(Y.operator, "Expected a valid attribute selector operator."), xe(), te(), xE[T] ? Y.value = {
        type: "String",
        value: Du(T)
      } : E && A("$") ? (R(), Y.value = {
        type: "Substitution",
        name: ye()
      }, W(Y.value.name, "Expected substitute name.")) : (Y.value = {
        type: "String",
        value: ye()
      }, W(Y.value.value, "Expected attribute value.")), xe(), re() && !r || !A("]") && (Y.caseSensitivityModifier = ye(), W(Y.caseSensitivityModifier, "Expected end of attribute selector."), W(O, "Attribute case sensitivity modifiers are not enabled."), W(I || P[Y.caseSensitivityModifier], "Unknown attribute case sensitivity modifier."), xe(), re() && !r))
        return Y;
      we("]");
    }
    return Y;
  }
  function Ve() {
    let Y = "";
    for (; Os[T]; )
      Y += $();
    return W(Y !== "", "Formula parse error."), parseInt(Y);
  }
  const _e = () => A("-") || A("+") || Os[T];
  function je() {
    if (A("e") || A("o")) {
      const ce = ye();
      if (ce === "even")
        return xe(), [2, 0];
      if (ce === "odd")
        return xe(), [2, 1];
    }
    let Y = null, Q = 1;
    if (A("-") && (R(), Q = -1), _e() && (A("+") && R(), Y = Ve(), !A("\\") && !A("n")))
      return [0, Y * Q];
    Y === null && (Y = 1), Y *= Q;
    let ee;
    if (A("\\") ? (R(), N0(T) ? ee = hu() : ee = $()) : ee = $(), W(ee === "n", 'Formula parse error: expected "n".'), xe(), A("+") || A("-")) {
      const ce = A("+") ? 1 : -1;
      return R(), xe(), [Y, ce * Ve()];
    } else
      return [Y, 0];
  }
  function Se(Y) {
    const Q = {
      type: "PseudoClass",
      name: Y
    };
    let ee = U[Y];
    if (!ee && B && (ee = pE), W(ee, `Unknown pseudo-class: "${Y}".`), ee = ee, A("(")) {
      if (R(), xe(), E && A("$"))
        R(), Q.argument = {
          type: "Substitution",
          name: ye()
        }, W(Q.argument.name, "Expected substitute name.");
      else if (ee.type === "String")
        Q.argument = {
          type: "String",
          value: mt()
        }, W(Q.argument.value, "Expected pseudo-class argument value.");
      else if (ee.type === "Selector")
        Q.argument = gt(!0);
      else if (ee.type === "Formula") {
        const [ce, Ru] = je();
        if (Q.argument = {
          type: "Formula",
          a: ce,
          b: Ru
        }, ee.ofSelector && (xe(), A("o") || A("\\"))) {
          const Ue = ye();
          W(Ue === "of", "Formula of selector parse error."), xe(), Q.argument = {
            type: "FormulaOfSelector",
            a: ce,
            b: Ru,
            selector: et()
          };
        }
      } else
        return J("Invalid pseudo-class signature.");
      if (xe(), re() && !r)
        return Q;
      we(")");
    } else
      W(ee.optional, `Argument is required for pseudo-class "${Y}".`);
    return Q;
  }
  function Ne() {
    return A("*") ? (W(i, "Wildcard tag name is not enabled."), R(), { type: "WildcardTag" }) : Cr(T) || A("\\") ? (W(n, "Tag names are not enabled."), {
      type: "TagName",
      name: ye()
    }) : J("Expected tag name.");
  }
  function Et() {
    if (A("*")) {
      const Y = g;
      if (R(), !A("|") || (R(), !D()))
        return k(Y), Ne();
      W(d, "Namespaces are not enabled."), W(s, "Wildcard namespace is not enabled.");
      const Q = Ne();
      return Q.namespace = { type: "WildcardNamespace" }, Q;
    } else if (A("|")) {
      W(d, "Namespaces are not enabled."), R();
      const Y = Ne();
      return Y.namespace = { type: "NoNamespace" }, Y;
    } else if (Cr(T) || A("\\")) {
      const Y = ye();
      if (!A("|"))
        return W(n, "Tag names are not enabled."), {
          type: "TagName",
          name: Y
        };
      const Q = g;
      if (R(), !D())
        return k(Q), {
          type: "TagName",
          name: Y
        };
      W(d, "Namespaces are not enabled.");
      const ee = Ne();
      return ee.namespace = { type: "NamespaceName", name: Y }, ee;
    } else
      return J("Expected tag name.");
  }
  function et(Y = !1) {
    const Q = {};
    let ee = !0;
    if (Y) {
      const ce = Iu(b);
      ce && (Q.combinator = ce, xe());
    }
    for (; g < l; ) {
      if (D())
        W(ee, "Unexpected tag/namespace start."), Q.tag = Et();
      else if (A("|")) {
        const ce = g;
        if (R(), D())
          W(ee, "Unexpected tag/namespace start."), k(ce), Q.tag = Et();
        else {
          k(ce);
          break;
        }
      } else if (A(".")) {
        W(o, "Class names are not enabled."), R();
        const ce = ye();
        W(ce, "Expected class name."), (Q.classNames = Q.classNames || []).push(ce);
      } else if (A("#")) {
        W(c, "IDs are not enabled."), R();
        const ce = ye();
        W(ce, "Expected ID name."), (Q.ids = Q.ids || []).push(ce);
      } else if (A("["))
        W(m, "Attributes are not enabled."), (Q.attributes = Q.attributes || []).push(Be());
      else if (A(":")) {
        let ce = !1, Ru = !1;
        R(), A(":") && (W(w, "Pseudo elements are not enabled."), W(z, "Pseudo elements double colon notation is not enabled."), ce = !0, R());
        const Ue = ye();
        if (W(ce || Ue, "Expected pseudo-class name."), W(!ce || Ue, "Expected pseudo-element name."), W(!ce || ue || Z[Ue], `Unknown pseudo-element "${Ue}".`), Ru = w && (ce || !ce && F && Z[Ue]), Ru) {
          if (Q.pseudoElement = Ue, !Ss[T] && !A(",") && !A(")") && !re())
            return J("Pseudo-element should be the last component of a CSS selector rule.");
        } else
          W(M, "Pseudo classes are not enabled."), (Q.pseudoClasses = Q.pseudoClasses || []).push(Se(Ue));
      } else
        break;
      ee = !1;
    }
    if (ee)
      return re() ? J("Expected rule but end of input reached.") : J(`Expected rule but "${T}" found.`);
    if (Q.type = "Rule", xe(), !re() && !A(",") && !A(")")) {
      const ce = Iu(b);
      xe(), Q.nestedRule = et(), Q.nestedRule.combinator = ce;
    }
    return Q;
  }
  return (Y) => {
    if (typeof Y != "string")
      throw new Error(`${Sn}Expected string input.`);
    return V = Y, l = V.length, g = 0, T = V.charAt(0), gt();
  };
}
const IE = NE({ syntax: "selectors-4" });
function DE(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `string` as selector, not `" + e + "`");
  return IE(e);
}
const $l = "֑-߿יִ-﷽ﹰ-ﻼ", Vl = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", CE = new RegExp("^[^" + Vl + "]*[" + $l + "]"), SE = new RegExp("^[^" + $l + "]*[" + Vl + "]");
function OE(e) {
  const u = String(e || "");
  return CE.test(u) ? "rtl" : SE.test(u) ? "ltr" : "neutral";
}
function PE(e) {
  return "children" in e ? Yl(e) : "value" in e ? e.value : "";
}
function LE(e) {
  return e.type === "text" ? e.value : "children" in e ? Yl(e) : "";
}
function Yl(e) {
  let u = -1;
  const t = [];
  for (; ++u < e.children.length; )
    t[u] = LE(e.children[u]);
  return t.join("");
}
function wE(e, u) {
  const t = e.schema, r = e.language, a = e.direction, n = e.editableOrEditingHost;
  let i;
  if (u.type === "element") {
    const d = u.properties.xmlLang || u.properties.lang, s = u.properties.type || "text", E = Ps(u);
    d != null && (e.language = String(d)), t && t.space === "html" ? (u.properties.contentEditable === "true" && (e.editableOrEditingHost = !0), u.tagName === "svg" && (e.schema = Ft), E === "rtl" ? i = E : /* Explicit `[dir=ltr]`. */ E === "ltr" || // HTML with an invalid or no `[dir]`.
    E !== "auto" && u.tagName === "html" || // `input[type=tel]` with an invalid or no `[dir]`.
    E !== "auto" && u.tagName === "input" && s === "tel" ? i = "ltr" : (E === "auto" || u.tagName === "bdi") && (u.tagName === "textarea" ? i = On(PE(u)) : u.tagName === "input" && (s === "email" || s === "search" || s === "tel" || s === "text") ? i = u.properties.value ? On(String(u.properties.value)) : "ltr" : mi(u, o)), i && (e.direction = i)) : e.editableOrEditingHost && (e.editableOrEditingHost = !1);
  }
  return c;
  function c() {
    e.schema = t, e.language = r, e.direction = a, e.editableOrEditingHost = n;
  }
  function o(d) {
    if (d.type === "text")
      return i = On(d.value), i ? pi : void 0;
    if (d !== u && d.type === "element" && (d.tagName === "bdi" || d.tagName === "script" || d.tagName === "style" || d.tagName === "textare" || Ps(d)))
      return ql;
  }
}
function On(e) {
  const u = OE(e);
  return u === "neutral" ? void 0 : u;
}
function Ps(e) {
  const u = e.type === "element" && typeof e.properties.dir == "string" ? e.properties.dir.toLowerCase() : void 0;
  return u === "auto" || u === "ltr" || u === "rtl" ? u : void 0;
}
function RE(e, u, t) {
  let r = -1;
  if (e.attributes) {
    for (; ++r < e.attributes.length; )
      if (!ME(e.attributes[r], u, t))
        return !1;
  }
  return !0;
}
function ME(e, u, t) {
  const r = Qa(t, e.name), a = u.properties[r.property];
  let n = kE(a, r);
  if (!e.value)
    return n !== void 0;
  e.value.type;
  let i = e.value.value;
  if (e.caseSensitivityModifier === "i" && (i = i.toLowerCase(), n && (n = n.toLowerCase())), n !== void 0)
    switch (e.operator) {
      case "=":
        return i === n;
      case "$=":
        return i === n.slice(-i.length);
      case "*=":
        return n.includes(i);
      case "^=":
        return i === n.slice(0, i.length);
      case "|=":
        return i === n || i === n.slice(0, i.length) && n.charAt(i.length) === "-";
      case "~=":
        return (
          // For all other values (including comma-separated lists), return whether this
          // is an exact match.
          i === n || // If this is a space-separated list, and the query is contained in it, return
          // true.
          ci(n).includes(i)
        );
    }
  return !1;
}
function kE(e, u) {
  if (e != null)
    if (typeof e == "boolean") {
      if (e)
        return u.attribute;
    } else if (Array.isArray(e)) {
      if (e.length > 0)
        return (u.commaSeparated ? Il : Dl)(e);
    } else
      return String(e);
}
const BE = [];
function UE(e, u) {
  const t = (
    /** @type {Readonly<Array<string>>} */
    u.properties.className || BE
  );
  let r = -1;
  if (e.classNames) {
    for (; ++r < e.classNames.length; )
      if (!t.includes(e.classNames[r]))
        return !1;
  }
  return !0;
}
function HE(e, u) {
  const t = e.ids;
  return t.length === 1 && u.properties.id === t[0];
}
function FE(e, u) {
  return e.tag, e.tag.type === "WildcardTag" || e.tag.name === u.tagName;
}
function qE(e, u) {
  return function(t, r) {
    let a = Ls(t, "tag");
    const n = Ls(
      r ?? "*",
      "range"
    ), i = [];
    let c = -1;
    for (; ++c < n.length; ) {
      const o = n[c].toLowerCase();
      if (!u && o === "*")
        continue;
      let d = -1;
      const s = [];
      for (; ++d < a.length; )
        if (e(a[d].toLowerCase(), o)) {
          if (!u)
            return (
              /** @type {IsFilter extends true ? Tags : Tag|undefined} */
              a[d]
            );
          i.push(a[d]);
        } else
          s.push(a[d]);
      a = s;
    }
    return (
      /** @type {IsFilter extends true ? Tags : Tag|undefined} */
      u ? i : void 0
    );
  };
}
const GE = qE(function(e, u) {
  const t = e.split("-"), r = u.split("-");
  let a = 0, n = 0;
  if (r[n] !== "*" && t[a] !== r[n])
    return !1;
  for (a++, n++; n < r.length; ) {
    if (r[n] === "*") {
      n++;
      continue;
    }
    if (!t[a])
      return !1;
    if (t[a] === r[n]) {
      a++, n++;
      continue;
    }
    if (t[a].length === 1)
      return !1;
    a++;
  }
  return !0;
}, !0);
function Ls(e, u) {
  const t = e && typeof e == "string" ? [e] : e;
  if (!t || typeof t != "object" || !("length" in t))
    throw new Error(
      "Invalid " + u + " `" + t + "`, expected non-empty string"
    );
  return t;
}
const jE = {}.hasOwnProperty;
function wt(e, u) {
  const t = e.type === "element" && jE.call(e.properties, u) && e.properties[u];
  return t != null && t !== !1;
}
const $E = Gn.default || Gn, VE = Pl("name", {
  handlers: {
    "any-link": XE,
    blank: WE,
    checked: zE,
    dir: QE,
    disabled: Xl,
    empty: KE,
    enabled: JE,
    "first-child": ZE,
    "first-of-type": eT,
    has: uT,
    is: Wl,
    lang: rT,
    "last-child": aT,
    "last-of-type": nT,
    not: iT,
    "nth-child": cT,
    "nth-last-child": sT,
    "nth-last-of-type": oT,
    "nth-of-type": dT,
    "only-child": lT,
    "only-of-type": fT,
    optional: bT,
    "read-only": hT,
    "read-write": zl,
    required: Ql,
    root: pT,
    scope: mT
  },
  invalid: tT,
  unknown: gT
});
function YE(e, u, t, r, a) {
  const n = e.pseudoClasses;
  let i = -1;
  for (; ++i < n.length; )
    if (!VE(n[i], u, t, r, a))
      return !1;
  return !0;
}
function XE(e, u) {
  return (u.tagName === "a" || u.tagName === "area" || u.tagName === "link") && wt(u, "href");
}
function Vu(e, u) {
  if (e.shallow)
    throw new Error("Cannot use `:" + u.name + "` without parent");
}
function WE(e, u) {
  return !Kl(u, t);
  function t(r) {
    return r.type === "element" || r.type === "text" && !Ka(r);
  }
}
function zE(e, u) {
  return u.tagName === "input" || u.tagName === "menuitem" ? !!((u.properties.type === "checkbox" || u.properties.type === "radio") && wt(u, "checked")) : u.tagName === "option" ? wt(u, "selected") : !1;
}
function QE(e, u, t, r, a) {
  return e.argument, e.argument.type, a.direction === e.argument.value;
}
function Xl(e, u) {
  return (u.tagName === "button" || u.tagName === "input" || u.tagName === "select" || u.tagName === "textarea" || u.tagName === "optgroup" || u.tagName === "option" || u.tagName === "menuitem" || u.tagName === "fieldset") && wt(u, "disabled");
}
function KE(e, u) {
  return !Kl(u, t);
  function t(r) {
    return r.type === "element" || r.type === "text";
  }
}
function JE(e, u) {
  return !Xl(e, u);
}
function ZE(e, u, t, r, a) {
  return Vu(a, e), a.elementIndex === 0;
}
function eT(e, u, t, r, a) {
  return Vu(a, e), a.typeIndex === 0;
}
function Za(e) {
  let u = e._cachedFn;
  if (!u) {
    const t = e.argument;
    if (t.type !== "Formula")
      throw new Error(
        "Expected `nth` formula, such as `even` or `2n+1` (`of` is not yet supported)"
      );
    u = $E(t.a + "n+" + t.b), e._cachedFn = u;
  }
  return u;
}
function uT(e, u, t, r, a) {
  e.argument, e.argument.type;
  const n = {
    ...a,
    // Not found yet.
    found: !1,
    // One result is enough.
    one: !0,
    results: [],
    rootQuery: e.argument,
    scopeElements: [u],
    // Do walk deep.
    shallow: !1
  };
  return gc(n, { type: "root", children: u.children }), n.results.length > 0;
}
function tT() {
}
function Wl(e, u, t, r, a) {
  e.argument, e.argument.type;
  const n = {
    ...a,
    // Not found yet.
    found: !1,
    // One result is enough.
    one: !0,
    results: [],
    rootQuery: e.argument,
    scopeElements: [u],
    // Do walk deep.
    shallow: !1
  };
  return gc(n, u), n.results[0] === u;
}
function rT(e, u, t, r, a) {
  return e.argument, e.argument.type, a.language !== "" && a.language !== void 0 && GE(a.language, ii(e.argument.value)).length > 0;
}
function aT(e, u, t, r, a) {
  return Vu(a, e), !!(a.elementCount && a.elementIndex === a.elementCount - 1);
}
function nT(e, u, t, r, a) {
  return Vu(a, e), typeof a.typeIndex == "number" && typeof a.typeCount == "number" && a.typeIndex === a.typeCount - 1;
}
function iT(e, u, t, r, a) {
  return !Wl(e, u, t, r, a);
}
function cT(e, u, t, r, a) {
  const n = Za(e);
  return Vu(a, e), typeof a.elementIndex == "number" && n(a.elementIndex);
}
function sT(e, u, t, r, a) {
  const n = Za(e);
  return Vu(a, e), !!(typeof a.elementCount == "number" && typeof a.elementIndex == "number" && n(a.elementCount - a.elementIndex - 1));
}
function oT(e, u, t, r, a) {
  const n = Za(e);
  return Vu(a, e), typeof a.typeCount == "number" && typeof a.typeIndex == "number" && n(a.typeCount - 1 - a.typeIndex);
}
function dT(e, u, t, r, a) {
  const n = Za(e);
  return Vu(a, e), typeof a.typeIndex == "number" && n(a.typeIndex);
}
function lT(e, u, t, r, a) {
  return Vu(a, e), a.elementCount === 1;
}
function fT(e, u, t, r, a) {
  return Vu(a, e), a.typeCount === 1;
}
function bT(e, u) {
  return !Ql(e, u);
}
function hT(e, u, t, r, a) {
  return !zl(e, u, t, r, a);
}
function zl(e, u, t, r, a) {
  return u.tagName === "input" || u.tagName === "textarea" ? !wt(u, "readOnly") && !wt(u, "disabled") : !!a.editableOrEditingHost;
}
function Ql(e, u) {
  return (u.tagName === "input" || u.tagName === "textarea" || u.tagName === "select") && wt(u, "required");
}
function pT(e, u, t, r, a) {
  return !!((!r || r.type === "root") && a.schema && (a.schema.space === "html" || a.schema.space === "svg") && (u.tagName === "html" || u.tagName === "svg"));
}
function mT(e, u, t, r, a) {
  return a.scopeElements.includes(u);
}
function Kl(e, u) {
  const t = e.children;
  let r = -1;
  for (; ++r < t.length; )
    if (u(t[r]))
      return !0;
  return !1;
}
function gT(e) {
  const u = (
    /** @type {AstPseudoClass} */
    e
  );
  throw new Error("Unknown pseudo-selector `" + u.name + "`");
}
function ET(e, u, t, r, a) {
  if (e.pseudoElement)
    throw new Error("Invalid selector: `::" + e.pseudoElement + "`");
  return !!((!e.tag || FE(e, u)) && (!e.classNames || UE(e, u)) && (!e.ids || HE(e, u)) && (!e.attributes || RE(e, u, a.schema)) && (!e.pseudoClasses || YE(e, u, t, r, a)));
}
const TT = [];
function gc(e, u) {
  u && Jl(e, [], u, void 0, void 0, u);
}
function Pn(e, u, t) {
  const r = e[u];
  r ? r.push(t) : e[u] = [t];
}
function _T(e, u, t, r) {
  const a = Ur(u.descendant, u.directChild);
  let n, i = -1;
  const c = { count: 0, types: /* @__PURE__ */ new Map() }, o = { count: 0, types: /* @__PURE__ */ new Map() };
  for (; ++i < t.children.length; )
    ws(c, t.children[i]);
  for (i = -1; ++i < t.children.length; ) {
    const d = t.children[i], s = d.type === "element" ? d.tagName.toUpperCase() : void 0;
    if (e.elementIndex = o.count, e.typeIndex = s && o.types.get(s) || 0, e.elementCount = c.count, e.typeCount = s ? c.types.get(s) : 0, "children" in d) {
      const E = Ur(a, n), b = Jl(
        e,
        E,
        t.children[i],
        i,
        t,
        r
      );
      n = Ur(b.generalSibling, b.adjacentSibling);
    }
    if (e.one && e.found)
      break;
    ws(o, t.children[i]);
  }
}
function yT(e, u, t, r, a) {
  const n = {
    adjacentSibling: void 0,
    descendant: void 0,
    directChild: void 0,
    generalSibling: void 0
  };
  let i = -1;
  for (; ++i < u.length; ) {
    const c = u[i];
    if (e.one && e.found)
      break;
    if (e.shallow && c.nestedRule)
      throw new Error("Expected selector without nesting");
    if (ET(c, t, r, a, e)) {
      const o = c.nestedRule;
      if (o) {
        const d = o.combinator === "+" ? "adjacentSibling" : o.combinator === "~" ? "generalSibling" : o.combinator === ">" ? "directChild" : "descendant";
        Pn(n, d, o);
      } else
        e.found = !0, e.results.includes(t) || e.results.push(t);
    }
    c.combinator === void 0 ? Pn(n, "descendant", c) : c.combinator === "~" && Pn(n, "generalSibling", c);
  }
  return n;
}
function Ur(e, u) {
  return e && u && e.length > 0 && u.length > 0 ? [...e, ...u] : e && e.length > 0 ? e : u && u.length > 0 ? u : TT;
}
function ws(e, u) {
  if (u.type === "element") {
    const t = u.tagName.toUpperCase(), r = (e.types.get(t) || 0) + 1;
    e.count++, e.types.set(t, r);
  }
}
function Jl(e, u, t, r, a, n) {
  let i = {
    adjacentSibling: void 0,
    descendant: void 0,
    directChild: void 0,
    generalSibling: void 0
  };
  const c = wE(e, t);
  if (t.type === "element") {
    let o = e.rootQuery.rules;
    a && a !== n && (o = e.rootQuery.rules.filter(
      (d) => d.combinator === void 0 || d.combinator === ">" && a === n
    )), i = yT(
      e,
      // Try the root rules for this element too.
      Ur(u, o),
      t,
      r,
      a
    );
  }
  return "children" in t && !e.shallow && !(e.one && e.found) && _T(e, i, t, n), c(), i;
}
function AT(e, u, t) {
  const r = vT(e, u, t);
  return gc(r, u || void 0), r.results;
}
function vT(e, u, t) {
  return {
    direction: "ltr",
    editableOrEditingHost: !1,
    elementCount: void 0,
    elementIndex: void 0,
    found: !1,
    language: void 0,
    one: !1,
    // State of the query.
    results: [],
    rootQuery: DE(e),
    schema: t === "svg" ? Ft : br,
    scopeElements: u ? u.type === "root" ? u.children : [u] : [],
    shallow: !1,
    typeIndex: void 0,
    typeCount: void 0
  };
}
const xT = (e) => {
  const { selector: u, rewrite: t } = e || {};
  return (r) => {
    if (!(!t || typeof t != "function")) {
      if (u && typeof u == "string") {
        const a = AT(u, r);
        a && a.length > 0 && mi(r, a, (n, i, c) => {
          t(n, i, c);
        });
        return;
      }
      mi(r, (a, n, i) => {
        t(a, n, i);
      });
    }
  };
}, NT = xT, IT = `*{margin:0;padding:0;box-sizing:border-box}table,tr,td{height:100%}img{outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;display:block}a img{border:none}table{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt}a[href^=tel],a[href^=sms]{text-decoration:none;pointer-events:none;cursor:default}
`, DT = `#outlook a{padding:0}.ReadMsgBody,.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:100%}body,table,td,p,a,li,blockquote{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}table td{border-collapse:collapse}img{-ms-interpolation-mode:bicubic}@media only screen and (max-device-width: 480px){a[href^=tel],a[href^=sms]{-webkit-text-decoration:default!important;text-decoration:default!important;pointer-events:auto!important;cursor:default!important}}@media only screen and (min-device-width: 768px) and (max-device-width: 1024px){a[href^=tel],a[href^=sms]{-webkit-text-decoration:default!important;text-decoration:default!important;pointer-events:auto!important;cursor:default!important}}
`, Zl = Kt.resolve(__dirname, "../tailwind.config.cjs"), CT = async (e, u) => new Promise((t, r) => {
  const a = rf(e, u);
  let n = Pu.Buffer.alloc(0), i = Pu.Buffer.alloc(0);
  a.stdout.on("data", (c) => {
    n = Pu.Buffer.concat([n, c]);
  }), a.stderr.on("data", (c) => {
    i = Pu.Buffer.concat([i, c]);
  }), a.on("error", (c) => {
    r({
      error: c,
      stdout: n.toString(),
      stderr: i.toString()
    });
  }), a.on("close", (c) => {
    if (c == null) {
      r({
        error: new Error("Process exited with null exit code."),
        stdout: n.toString(),
        stderr: i.toString()
      });
      return;
    }
    t({
      exit_code: c,
      stdout: n.toString(),
      stderr: i.toString()
    });
  });
}), ST = (e) => ({
  type: "element",
  tagName: "style",
  children: [{ type: "text", value: e }]
}), OT = (e) => {
  const u = /(--[a-zA-Z0-9-_]+)\s*:\s(.+?);/g, t = /var\((\s*--[a-zA-Z0-9-_]+\s*)(?:\)|,\s*(.*)\))/, r = /* @__PURE__ */ new Map();
  let a = e.replace(u, (c, o, d) => (r.set(o.trim(), d.trim()), "")), i = 1e3;
  for (; a.match(t); ) {
    if (i--, i <= 0)
      throw new Error("Max Cycles for replacement exceeded");
    a = a.replace(
      t,
      (c, o, d) => {
        const s = o.trim();
        return r.has(s) ? r.get(s) ?? "" : (d ?? "").trim();
      }
    );
  }
  return a;
}, Rs = (e, u) => nE().use(NT, {
  rewrite: (r) => {
    var a;
    if (r.type !== "element")
      return r;
    if (r.tagName === "head" && u != null) {
      const n = [
        ...r.children,
        ...u.map((i) => ST(i))
      ];
      r.children = n;
    }
    if (((a = r.properties) == null ? void 0 : a.style) != null) {
      const n = OT(`${r.properties.style}`);
      r.properties = {
        ...r.properties,
        style: n
      };
    }
  }
}).use(Bl).processSync(e).toString(), Ms = (e) => {
  const u = new RegExp("(?<=\\:)[a-z0-9-]+(?=\\:)", "g");
  (e.match(u) || []).forEach((r) => {
    ai.ignoredPseudos.includes(r) || ai.ignoredPseudos.push(r);
  });
}, PT = (e, u, t) => {
  const r = {
    inlinePseudoElements: !0,
    preserveImportant: !0,
    applyStyleTags: !0,
    removeStyleTags: !0,
    insertPreservedExtraCss: !0,
    preservePseudos: !0,
    preserveFontFaces: !0,
    preserveMediaQueries: !0,
    preserveKeyFrames: !0
    // !BUG - this is not working
    // resolveCSSVariables: true,
  };
  Ms(u), t != null ? t.forEach((c) => {
    Ms(c);
  }) : t = [];
  const a = Rs(e, [u]), n = ai(a, r);
  let i = Rs(n, t);
  return i = i.replace(/&#x27;/g, "'"), i;
}, LT = async (e, u) => {
  const t = require.resolve("tailwindcss/lib/cli.js"), r = u.tailwindConfigPath ?? Zl, a = Kt.join(en.tmpdir(), "mailwind-input.html");
  rt.writeFileSync(a, e);
  const n = Kt.join(en.tmpdir(), "mailwind-input.css");
  rt.writeFileSync(n, u.css ?? "");
  const i = Kt.join(en.tmpdir(), "mailwind-output.css");
  rt.writeFileSync(i, "");
  const c = [
    t,
    "--config",
    r,
    "--output",
    i,
    "--content",
    a
  ];
  u.css && (c.push("--input"), c.push(n));
  const o = await CT(ks.argv0, c);
  if (o.exit_code !== 0) {
    console.error("Failed to run Tailwind."), console.error(o.stderr);
    return;
  }
  const d = rt.readFileSync(i, "utf-8") ?? "";
  return {
    html: PT(e, d, [IT, DT]),
    css: d
  };
}, wT = tf(uf(Pu.process.argv)).option("input-html", {
  alias: "i",
  describe: "The path to your input HTML file",
  type: "string",
  default: Kt.resolve(__dirname, "../email.html"),
  demandOption: !0
}).option("output-html", {
  alias: "o",
  describe: "The path to the inlined HTML file that will be generated",
  type: "string",
  default: Kt.resolve(__dirname, "../email.output.html"),
  demandOption: !0
}).option("input-css", {
  alias: "c",
  type: "string",
  describe: "The path to your custom CSS file"
}).option("output-css", {
  type: "string",
  describe: "The path to the CSS file that will be generated"
}).option("tailwind-config", {
  type: "string",
  describe: "The path to your custom Tailwind config file",
  default: Zl
}).option("reset", {
  type: "string",
  describe: "Set to `false` to disable extended resets",
  default: "false"
}), RT = async () => {
  console.log("Running mailwind...");
  const e = await wT.argv, u = e["input-html"], t = e["output-html"], r = e["input-css"], a = e["output-css"], n = e["tailwind-config"], i = e.reset, c = rt.readFileSync(u, "utf-8"), o = {
    css: r != null ? rt.readFileSync(r, "utf-8") : void 0,
    tailwindConfigPath: n,
    reset: i !== "false"
  }, d = await LT(c, o);
  d == null && (console.log("Failed to generate output."), Pu.process.exit(1));
  const { html: s, css: E } = d;
  t != null && rt.writeFileSync(t, s), a != null && rt.writeFileSync(a, E);
};
RT().catch((e) => {
  console.error(e), Pu.process.exit(1);
});
//# sourceMappingURL=mailwind.js.map
