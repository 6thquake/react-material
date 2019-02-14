// Copyright 2012 Google Inc. All rights reserved.
(function() {
  var data = {
    resource: {
      version: '1',
      macros: [],
      tags: [],
      predicates: [],
      rules: [],
    },
    runtime: [[], []],
  };

  var ba = this,
    ea = function() {
      if (null === ca) {
        var a;
        a: {
          var b = ba.document.querySelector('script[nonce]');
          if (b) {
            var c = b.nonce || b.getAttribute('nonce');
            if (c && da.test(c)) {
              a = c;
              break a;
            }
          }
          a = null;
        }
        ca = a || '';
      }
      return ca;
    },
    da = /^[\w+/_-]+[=]{0,2}$/,
    ca = null,
    fa = function(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.ye = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.ie = function(a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
          d[e - 2] = arguments[e];
        return b.prototype[c].apply(a, d);
      };
    };
  var g = function(a, b) {
    this.s = a;
    this.Qc = b;
  };
  g.prototype.fd = function() {
    return this.s;
  };
  g.prototype.getType = g.prototype.fd;
  g.prototype.getData = function() {
    return this.Qc;
  };
  g.prototype.getData = g.prototype.getData;
  var ha = function(a) {
      return (
        ('number' === typeof a && 0 <= a && isFinite(a) && 0 === a % 1) ||
        ('string' === typeof a && '-' !== a[0] && a === '' + parseInt(a, 10))
      );
    },
    ia = function() {
      this.da = {};
      this.qa = !1;
    };
  ia.prototype.get = function(a) {
    return this.da['dust.' + a];
  };
  ia.prototype.set = function(a, b) {
    !this.qa && (this.da['dust.' + a] = b);
  };
  ia.prototype.has = function(a) {
    return this.da.hasOwnProperty('dust.' + a);
  };
  var ja = function(a) {
    var b = [],
      c;
    for (c in a.da) a.da.hasOwnProperty(c) && b.push(c.substr(5));
    return b;
  };
  ia.prototype.remove = function(a) {
    !this.qa && delete this.da['dust.' + a];
  };
  ia.prototype.D = function() {
    this.qa = !0;
  };
  var u = function(a) {
    this.fa = new ia();
    this.h = [];
    a = a || [];
    for (var b in a)
      a.hasOwnProperty(b) && (ha(b) ? (this.h[Number(b)] = a[Number(b)]) : this.fa.set(b, a[b]));
  };
  u.prototype.toString = function() {
    for (var a = [], b = 0; b < this.h.length; b++) {
      var c = this.h[b];
      null === c || void 0 === c ? a.push('') : a.push(c.toString());
    }
    return a.join(',');
  };
  u.prototype.set = function(a, b) {
    if ('length' == a) {
      if (!ha(b)) throw 'RangeError: Length property must be a valid integer.';
      this.h.length = Number(b);
    } else ha(a) ? (this.h[Number(a)] = b) : this.fa.set(a, b);
  };
  u.prototype.set = u.prototype.set;
  u.prototype.get = function(a) {
    return 'length' == a ? this.length() : ha(a) ? this.h[Number(a)] : this.fa.get(a);
  };
  u.prototype.get = u.prototype.get;
  u.prototype.length = function() {
    return this.h.length;
  };
  u.prototype.M = function() {
    for (var a = ja(this.fa), b = 0; b < this.h.length; b++) a.push(b + '');
    return new u(a);
  };
  u.prototype.getKeys = u.prototype.M;
  u.prototype.remove = function(a) {
    ha(a) ? delete this.h[Number(a)] : this.fa.remove(a);
  };
  u.prototype.remove = u.prototype.remove;
  u.prototype.pop = function() {
    return this.h.pop();
  };
  u.prototype.pop = u.prototype.pop;
  u.prototype.push = function(a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  u.prototype.push = u.prototype.push;
  u.prototype.shift = function() {
    return this.h.shift();
  };
  u.prototype.shift = u.prototype.shift;
  u.prototype.splice = function(a, b, c) {
    return new u(this.h.splice.apply(this.h, arguments));
  };
  u.prototype.splice = u.prototype.splice;
  u.prototype.unshift = function(a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  u.prototype.unshift = u.prototype.unshift;
  u.prototype.has = function(a) {
    return (ha(a) && this.h.hasOwnProperty(a)) || this.fa.has(a);
  };
  var ka = function() {
    function a(a, b) {
      c[a] = b;
    }
    function b() {
      c = {};
    }
    var c = {},
      d = {
        add: a,
        reset: b,
        create: function(d) {
          var e = {
            add: a,
            request: function(a, b) {
              return c[a] ? c[a].apply(d, Array.prototype.slice.call(arguments, 1)) : !1;
            },
            reset: b,
          };
          e.add = e.add;
          e.request = e.request;
          e.reset = e.reset;
          return e;
        },
      };
    d.add = d.add;
    d.reset = d.reset;
    return d;
  };
  var la = function() {
    function a(a, c) {
      if (b[a]) {
        if (b[a].Ea + c > b[a].max) throw Error('Quota exceeded');
        b[a].Ea += c;
      }
    }
    var b = {},
      c = void 0,
      d = void 0,
      e = {
        Bd: function(a) {
          c = a;
        },
        Eb: function() {
          c && a(c, 1);
        },
        Cd: function(a) {
          d = a;
        },
        O: function(b) {
          d && a(d, b);
        },
        Td: function(a, c) {
          b[a] = b[a] || { Ea: 0 };
          b[a].max = c;
        },
        ed: function(a) {
          return (b[a] && b[a].Ea) || 0;
        },
        reset: function() {
          b = {};
        },
        Kc: a,
      };
    e.onFnConsume = e.Bd;
    e.consumeFn = e.Eb;
    e.onStorageConsume = e.Cd;
    e.consumeStorage = e.O;
    e.setMax = e.Td;
    e.getConsumed = e.ed;
    e.reset = e.reset;
    e.consume = e.Kc;
    return e;
  };
  var na = function(a, b, c) {
    this.F = a;
    this.U = b;
    this.T = c;
    this.h = new ia();
  };
  na.prototype.add = function(a, b) {
    this.h.qa ||
      (this.F.O(('string' === typeof a ? a.length : 1) + ('string' === typeof b ? b.length : 1)),
      this.h.set(a, b));
  };
  na.prototype.add = na.prototype.add;
  na.prototype.set = function(a, b) {
    this.h.qa ||
      (this.T && this.T.has(a)
        ? this.T.set(a, b)
        : (this.F.O(
            ('string' === typeof a ? a.length : 1) + ('string' === typeof b ? b.length : 1),
          ),
          this.h.set(a, b)));
  };
  na.prototype.set = na.prototype.set;
  na.prototype.get = function(a) {
    return this.h.has(a) ? this.h.get(a) : this.T ? this.T.get(a) : void 0;
  };
  na.prototype.get = na.prototype.get;
  na.prototype.has = function(a) {
    return !!this.h.has(a) || !(!this.T || !this.T.has(a));
  };
  na.prototype.has = na.prototype.has;
  na.prototype.C = function() {
    return this.F;
  };
  na.prototype.D = function() {
    this.h.D();
  };
  var oa = function(a) {
      return '[object Array]' == Object.prototype.toString.call(Object(a));
    },
    pa = function(a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return 'number' == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    };
  var v = function(a, b) {
    ia.call(this);
    this.Rb = a;
    this.cd = b;
  };
  fa(v, ia);
  var ra = function(a, b) {
      for (var c, d = 0; d < b.length && !((c = qa(a, b[d])), c instanceof g); d++);
      return c;
    },
    qa = function(a, b) {
      var c = a.get(String(b[0]));
      if (!(c && c instanceof v)) throw 'Attempting to execute non-function ' + b[0] + '.';
      return c.i.apply(c, [a].concat(b.slice(1)));
    };
  v.prototype.toString = function() {
    return this.Rb;
  };
  v.prototype.getName = function() {
    return this.Rb;
  };
  v.prototype.getName = v.prototype.getName;
  v.prototype.M = function() {
    return new u(ja(this));
  };
  v.prototype.getKeys = v.prototype.M;
  v.prototype.i = function(a, b) {
    var c,
      d = {
        A: function() {
          return a;
        },
        evaluate: function(b) {
          var c = a;
          return oa(b) ? qa(c, b) : b;
        },
        ma: function(b) {
          return ra(a, b);
        },
        C: function() {
          return a.C();
        },
        oe: function() {
          c || (c = a.U.create(d));
          return c;
        },
      };
    a.C().Eb();
    return this.cd.apply(d, Array.prototype.slice.call(arguments, 1));
  };
  v.prototype.invoke = v.prototype.i;
  var x = function() {
    ia.call(this);
  };
  fa(x, ia);
  x.prototype.M = function() {
    return new u(ja(this));
  };
  x.prototype.getKeys =
    x.prototype.M; /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var sa = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    ta = function(a) {
      if (null == a) return String(a);
      var b = sa.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : 'object';
    },
    ua = function(a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    va = function(a) {
      if (!a || 'object' != ta(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !ua(a, 'constructor') && !ua(a.constructor.prototype, 'isPrototypeOf'))
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || ua(a, b);
    },
    y = function(a, b) {
      var c = b || ('array' == ta(a) ? [] : {}),
        d;
      for (d in a)
        if (ua(a, d)) {
          var e = a[d];
          'array' == ta(e)
            ? ('array' != ta(c[d]) && (c[d] = []), (c[d] = y(e, c[d])))
            : va(e)
            ? (va(c[d]) || (c[d] = {}), (c[d] = y(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var wa = function(a) {
      if (a instanceof u) {
        for (var b = [], c = a.length(), d = 0; d < c; d++) a.has(d) && (b[d] = wa(a.get(d)));
        return b;
      }
      if (a instanceof x) {
        for (var e = {}, f = a.M(), h = f.length(), k = 0; k < h; k++)
          e[f.get(k)] = wa(a.get(f.get(k)));
        return e;
      }
      return a instanceof v
        ? function() {
            for (var b = Array.prototype.slice.call(arguments, 0), c = 0; c < b.length; c++)
              b[c] = xa(b[c]);
            var d = new na(la(), ka());
            return wa(a.i.apply(a, [d].concat(b)));
          }
        : a;
    },
    xa = function(a) {
      if (oa(a)) {
        for (var b = [], c = 0; c < a.length; c++) a.hasOwnProperty(c) && (b[c] = xa(a[c]));
        return new u(b);
      }
      if (va(a)) {
        var d = new x(),
          e;
        for (e in a) a.hasOwnProperty(e) && d.set(e, xa(a[e]));
        return d;
      }
      if ('function' === typeof a)
        return new v('', function(b) {
          for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; d++)
            c[d] = wa(this.evaluate(c[d]));
          return xa(a.apply(a, c));
        });
      var f = typeof a;
      if (null === a || 'string' === f || 'number' === f || 'boolean' === f) return a;
    };
  var ya = {
    control: function(a, b) {
      return new g(a, this.evaluate(b));
    },
    fn: function(a, b, c) {
      var d = this.A(),
        e = this.evaluate(b);
      if (!(e instanceof u)) throw 'Error: non-List value given for Fn argument names.';
      var f = Array.prototype.slice.call(arguments, 2);
      this.C().O(a.length + f.length);
      return new v(
        a,
        (function() {
          return function(a) {
            for (
              var b = new na(d.F, d.U, d), c = Array.prototype.slice.call(arguments, 0), h = 0;
              h < c.length;
              h++
            )
              if (((c[h] = this.evaluate(c[h])), c[h] instanceof g)) return c[h];
            for (var n = e.get('length'), p = 0; p < n; p++)
              p < c.length ? b.set(e.get(p), c[p]) : b.set(e.get(p), void 0);
            b.set('arguments', new u(c));
            var q = ra(b, f);
            if (q instanceof g) return 'return' === q.s ? q.getData() : q;
          };
        })(),
      );
    },
    list: function(a) {
      var b = this.C();
      b.O(arguments.length);
      for (var c = new u(), d = 0; d < arguments.length; d++) {
        var e = this.evaluate(arguments[d]);
        'string' === typeof e && b.O(e.length ? e.length - 1 : 0);
        c.push(e);
      }
      return c;
    },
    map: function(a) {
      for (var b = this.C(), c = new x(), d = 0; d < arguments.length - 1; d += 2) {
        var e = this.evaluate(arguments[d]) + '',
          f = this.evaluate(arguments[d + 1]),
          h = e.length;
        h += 'string' === typeof f ? f.length : 1;
        b.O(h);
        c.set(e, f);
      }
      return c;
    },
    undefined: function() {},
  };
  var z = function() {
    this.F = la();
    this.U = ka();
    this.na = new na(this.F, this.U);
  };
  z.prototype.N = function(a, b) {
    var c = new v(a, b);
    c.D();
    this.na.set(a, c);
  };
  z.prototype.addInstruction = z.prototype.N;
  z.prototype.Db = function(a, b) {
    ya.hasOwnProperty(a) && this.N(b || a, ya[a]);
  };
  z.prototype.addNativeInstruction = z.prototype.Db;
  z.prototype.C = function() {
    return this.F;
  };
  z.prototype.getQuota = z.prototype.C;
  z.prototype.Ka = function() {
    this.F = la();
    this.na.F = this.F;
  };
  z.prototype.resetQuota = z.prototype.Ka;
  z.prototype.Pd = function() {
    this.U = ka();
    this.na.U = this.U;
  };
  z.prototype.resetPermissions = z.prototype.Pd;
  z.prototype.K = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.ib(c);
  };
  z.prototype.execute = z.prototype.K;
  z.prototype.ib = function(a) {
    for (var b, c = 0; c < arguments.length; c++) {
      var d = qa(this.na, arguments[c]);
      b =
        d instanceof g ||
        d instanceof v ||
        d instanceof u ||
        d instanceof x ||
        null === d ||
        void 0 === d ||
        'string' === typeof d ||
        'number' === typeof d ||
        'boolean' === typeof d
          ? d
          : void 0;
    }
    return b;
  };
  z.prototype.run = z.prototype.ib;
  z.prototype.D = function() {
    this.na.D();
  };
  z.prototype.makeImmutable = z.prototype.D;
  var Aa = function(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  };
  var Ba = {
    Wd: 'concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString'.split(
      ' ',
    ),
    concat: function(a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof u)
          for (var e = arguments[d], f = 0; f < e.length(); f++) c.push(e.get(f));
        else c.push(arguments[d]);
      return new u(c);
    },
    every: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.i(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function(a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
        this.has(e) && b.i(a, this.get(e), e, this) && d.push(this.get(e));
      return new u(d);
    },
    forEach: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.i(a, this.get(d), d, this);
    },
    hasOwnProperty: function(a, b) {
      return this.has(b);
    },
    indexOf: function(a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function(a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function(a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function(a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
        this.has(e) && (d[e] = b.i(a, this.get(e), e, this));
      return new u(d);
    },
    pop: function() {
      return this.pop();
    },
    push: function(a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function(a, b, c) {
      var d = this.length(),
        e,
        f;
      if (void 0 !== c) (e = c), (f = 0);
      else {
        if (0 == d) throw 'TypeError: Reduce on List with no elements.';
        for (var h = 0; h < d; h++)
          if (this.has(h)) {
            e = this.get(h);
            f = h + 1;
            break;
          }
        if (h == d) throw 'TypeError: Reduce on List with no elements.';
      }
      for (h = f; h < d; h++) this.has(h) && (e = b.i(a, e, this.get(h), h, this));
      return e;
    },
    reduceRight: function(a, b, c) {
      var d = this.length(),
        e,
        f;
      if (void 0 !== c) (e = c), (f = d - 1);
      else {
        if (0 == d) throw 'TypeError: ReduceRight on List with no elements.';
        for (var h = 1; h <= d; h++)
          if (this.has(d - h)) {
            e = this.get(d - h);
            f = d - (h + 1);
            break;
          }
        if (h > d) throw 'TypeError: ReduceRight on List with no elements.';
      }
      for (h = f; 0 <= h; h--) this.has(h) && (e = b.i(a, e, this.get(h), h, this));
      return e;
    },
    reverse: function() {
      for (var a = Aa(this), b = a.length - 1, c = 0; 0 <= b; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function() {
      return this.shift();
    },
    slice: function(a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new u(e);
    },
    some: function(a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.i(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function(a, b) {
      var c = Aa(this);
      void 0 === b
        ? c.sort()
        : c.sort(function(c, d) {
            return Number(b.i(a, c, d));
          });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
    },
    splice: function(a, b, c, d) {
      return this.splice.apply(
        this,
        Array.prototype.splice.call(arguments, 1, arguments.length - 1),
      );
    },
    toString: function() {
      return this.toString();
    },
    unshift: function(a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    },
  };
  var B = {
      Pb: {
        ADD: 0,
        AND: 1,
        APPLY: 2,
        ASSIGN: 3,
        BREAK: 4,
        CASE: 5,
        CONTINUE: 6,
        CONTROL: 49,
        CREATE_ARRAY: 7,
        CREATE_OBJECT: 8,
        DEFAULT: 9,
        DEFN: 50,
        DIVIDE: 10,
        DO: 11,
        EQUALS: 12,
        EXPRESSION_LIST: 13,
        FN: 51,
        FOR: 14,
        FOR_IN: 47,
        GET: 15,
        GET_CONTAINER_VARIABLE: 48,
        GET_INDEX: 16,
        GET_PROPERTY: 17,
        GREATER_THAN: 18,
        GREATER_THAN_EQUALS: 19,
        IDENTITY_EQUALS: 20,
        IDENTITY_NOT_EQUALS: 21,
        IF: 22,
        LESS_THAN: 23,
        LESS_THAN_EQUALS: 24,
        MODULUS: 25,
        MULTIPLY: 26,
        NEGATE: 27,
        NOT: 28,
        NOT_EQUALS: 29,
        NULL: 45,
        OR: 30,
        PLUS_EQUALS: 31,
        POST_DECREMENT: 32,
        POST_INCREMENT: 33,
        PRE_DECREMENT: 34,
        PRE_INCREMENT: 35,
        QUOTE: 46,
        RETURN: 36,
        SET_PROPERTY: 43,
        SUBTRACT: 37,
        SWITCH: 38,
        TERNARY: 39,
        TYPEOF: 40,
        UNDEFINED: 44,
        VAR: 41,
        WHILE: 42,
      },
    },
    Ca = 'charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim'.split(
      ' ',
    ),
    Da = new g('break'),
    Ea = new g('continue');
  B.add = function(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  };
  B.and = function(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  };
  B.apply = function(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof u)) throw 'Error: Non-List argument given to Apply instruction.';
    if (null === a || void 0 === a) throw "TypeError: Can't read property " + b + ' of ' + a + '.';
    if ('boolean' == typeof a || 'number' == typeof a) {
      if ('toString' == b) return a.toString();
      throw 'TypeError: ' + a + '.' + b + ' is not a function.';
    }
    if ('string' == typeof a) {
      if (0 <= pa(Ca, b)) return xa(a[b].apply(a, Aa(c)));
      throw 'TypeError: ' + b + ' is not a function';
    }
    if (a instanceof u) {
      if (a.has(b)) {
        var d = a.get(b);
        if (d instanceof v) {
          var e = Aa(c);
          e.unshift(this.A());
          return d.i.apply(d, e);
        }
        throw 'TypeError: ' + b + ' is not a function';
      }
      if (0 <= pa(Ba.Wd, b)) return (e = Aa(c)), e.unshift(this.A()), Ba[b].apply(a, e);
    }
    if (a instanceof v || a instanceof x) {
      if (a.has(b)) {
        d = a.get(b);
        if (d instanceof v) return (e = Aa(c)), e.unshift(this.A()), d.i.apply(d, e);
        throw 'TypeError: ' + b + ' is not a function';
      }
      if ('toString' == b) return a instanceof v ? a.getName() : a.toString();
      if ('hasOwnProperty' == b) return a.has.apply(a, Aa(c));
    }
    throw "TypeError: Object has no '" + b + "' property.";
  };
  B.assign = function(a, b) {
    a = this.evaluate(a);
    if ('string' != typeof a) throw 'Invalid key name given for assignment.';
    var c = this.A();
    if (!c.has(a)) throw 'Attempting to assign to undefined value ' + b;
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  };
  B['break'] = function() {
    return Da;
  };
  B['case'] = function(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof g) return d;
    }
  };
  B['continue'] = function() {
    return Ea;
  };
  B.Rc = function(a, b, c) {
    var d = new u();
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var f = [B.Pb.FN, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
    this.A().set(a, this.evaluate(f));
  };
  B.Uc = function(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  };
  B.Xc = function(a, b) {
    return this.evaluate(a) == this.evaluate(b);
  };
  B.Zc = function(a) {
    for (var b, c = 0; c < arguments.length; c++) b = this.evaluate(arguments[c]);
    return b;
  };
  B.dd = function(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.A();
    if ('string' == typeof b)
      for (var e = 0; e < b.length; e++) {
        d.set(a, e);
        var f = this.ma(c);
        if (f instanceof g) {
          if ('break' == f.s) break;
          if ('return' == f.s) return f;
        }
      }
    else if (b instanceof x || b instanceof u || b instanceof v) {
      var h = b.M(),
        k = h.length();
      for (e = 0; e < k; e++)
        if ((d.set(a, h.get(e)), (f = this.ma(c)), f instanceof g)) {
          if ('break' == f.s) break;
          if ('return' == f.s) return f;
        }
    }
  };
  B.get = function(a) {
    return this.A().get(this.evaluate(a));
  };
  B.Nb = function(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (void 0 === a || null === a) throw 'TypeError: cannot access property of ' + a + '.';
    a instanceof x || a instanceof u || a instanceof v
      ? (c = a.get(b))
      : 'string' == typeof a && ('length' == b ? (c = a.length) : ha(b) && (c = a[b]));
    return c;
  };
  B.gd = function(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  };
  B.hd = function(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  };
  B.md = function(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  };
  B.nd = function(a, b) {
    return this.evaluate(a) !== this.evaluate(b);
  };
  B['if'] = function(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = this.ma(d);
    if (e instanceof g) return e;
  };
  B.ud = function(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  };
  B.vd = function(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  };
  B.wd = function(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  };
  B.multiply = function(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  };
  B.xd = function(a) {
    return -this.evaluate(a);
  };
  B.yd = function(a) {
    return !this.evaluate(a);
  };
  B.zd = function(a, b) {
    return this.evaluate(a) != this.evaluate(b);
  };
  B['null'] = function() {
    return null;
  };
  B.or = function(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  };
  B.Xb = function(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  };
  B.Yb = function(a) {
    return this.evaluate(a);
  };
  B.quote = function(a) {
    return Array.prototype.slice.apply(arguments);
  };
  B['return'] = function(a) {
    return new g('return', this.evaluate(a));
  };
  B.setProperty = function(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (null === a || void 0 === a) throw "TypeError: Can't set property " + b + ' of ' + a + '.';
    (a instanceof v || a instanceof u || a instanceof x) && a.set(b, c);
    return c;
  };
  B.Vd = function(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  };
  B['switch'] = function(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!oa(b) || !oa(c)) throw 'Error: Malformed switch instruction.';
    for (var d, e = !1, f = 0; f < b.length; f++)
      if (e || a === this.evaluate(b[f]))
        if (((d = this.evaluate(c[f])), d instanceof g)) {
          var h = d.s;
          if ('break' == h) return;
          if ('return' == h || 'continue' == h) return d;
        } else e = !0;
    if (
      c.length == b.length + 1 &&
      ((d = this.evaluate(c[c.length - 1])),
      d instanceof g && ('return' == d.s || 'continue' == d.s))
    )
      return d;
  };
  B.Xd = function(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  };
  B['typeof'] = function(a) {
    a = this.evaluate(a);
    return a instanceof v ? 'function' : typeof a;
  };
  B.undefined = function() {};
  B['var'] = function(a) {
    for (var b = this.A(), c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      'string' != typeof d || b.add(d, void 0);
    }
  };
  B['while'] = function(a, b, c, d) {
    var e,
      f = this.evaluate(d);
    if (this.evaluate(c) && ((e = this.ma(f)), e instanceof g)) {
      if ('break' == e.s) return;
      if ('return' == e.s) return e;
    }
    for (; this.evaluate(a); ) {
      e = this.ma(f);
      if (e instanceof g) {
        if ('break' == e.s) break;
        if ('return' == e.s) return e;
      }
      this.evaluate(b);
    }
  };
  var Ga = function() {
    this.Ob = !1;
    this.P = new z();
    Fa(this);
    this.Ob = !0;
  };
  Ga.prototype.sd = function() {
    return this.Ob;
  };
  Ga.prototype.isInitialized = Ga.prototype.sd;
  Ga.prototype.K = function(a) {
    return this.P.ib(a);
  };
  Ga.prototype.execute = Ga.prototype.K;
  Ga.prototype.D = function() {
    this.P.D();
  };
  Ga.prototype.makeImmutable = Ga.prototype.D;
  var Fa = function(a) {
    function b(a, b) {
      e.P.Db(a, String(b));
    }
    function c(a, b) {
      e.P.N(String(d[a]), b);
    }
    var d = B.Pb,
      e = a;
    b('control', d.CONTROL);
    b('fn', d.FN);
    b('list', d.CREATE_ARRAY);
    b('map', d.CREATE_OBJECT);
    b('undefined', d.UNDEFINED);
    c('ADD', B.add);
    c('AND', B.and);
    c('APPLY', B.apply);
    c('ASSIGN', B.assign);
    c('BREAK', B['break']);
    c('CASE', B['case']);
    c('CONTINUE', B['continue']);
    c('DEFAULT', B['case']);
    c('DEFN', B.Rc);
    c('DIVIDE', B.Uc);
    c('EQUALS', B.Xc);
    c('EXPRESSION_LIST', B.Zc);
    c('FOR_IN', B.dd);
    c('GET', B.get);
    c('GET_INDEX', B.Nb);
    c('GET_PROPERTY', B.Nb);
    c('GREATER_THAN', B.gd);
    c('GREATER_THAN_EQUALS', B.hd);
    c('IDENTITY_EQUALS', B.md);
    c('IDENTITY_NOT_EQUALS', B.nd);
    c('IF', B['if']);
    c('LESS_THAN', B.ud);
    c('LESS_THAN_EQUALS', B.vd);
    c('MODULUS', B.wd);
    c('MULTIPLY', B.multiply);
    c('NEGATE', B.xd);
    c('NOT', B.yd);
    c('NOT_EQUALS', B.zd);
    c('NULL', B['null']);
    c('OR', B.or);
    c('POST_DECREMENT', B.Xb);
    c('POST_INCREMENT', B.Xb);
    c('PRE_DECREMENT', B.Yb);
    c('PRE_INCREMENT', B.Yb);
    c('QUOTE', B.quote);
    c('RETURN', B['return']);
    c('SET_PROPERTY', B.setProperty);
    c('SUBTRACT', B.Vd);
    c('SWITCH', B['switch']);
    c('TERNARY', B.Xd);
    c('TYPEOF', B['typeof']);
    c('VAR', B['var']);
    c('WHILE', B['while']);
  };
  Ga.prototype.N = function(a, b) {
    this.P.N(a, b);
  };
  Ga.prototype.addInstruction = Ga.prototype.N;
  Ga.prototype.C = function() {
    return this.P.C();
  };
  Ga.prototype.getQuota = Ga.prototype.C;
  Ga.prototype.Ka = function() {
    this.P.Ka();
  };
  Ga.prototype.resetQuota = Ga.prototype.Ka;
  var Ha = function() {
    this.Ha = {};
  };
  Ha.prototype.get = function(a) {
    return this.Ha.hasOwnProperty(a) ? this.Ha[a] : void 0;
  };
  Ha.prototype.add = function(a, b) {
    if (this.Ha.hasOwnProperty(a))
      throw 'Attempting to add a function which already exists: ' + a + '.';
    var c = new v(a, function() {
      for (var a = Array.prototype.slice.call(arguments, 0), c = 0; c < a.length; c++)
        a[c] = this.evaluate(a[c]);
      return b.apply(this, a);
    });
    c.D();
    this.Ha[a] = c;
  };
  Ha.prototype.addAll = function(a) {
    for (var b in a) a.hasOwnProperty(b) && this.add(b, a[b]);
  };
  var C = window,
    F = document,
    Ia = navigator,
    Ja = function(a, b) {
      var c = C[a];
      C[a] = void 0 === c ? b : c;
      return C[a];
    },
    Ka = function(a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function() {
              a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b());
            }));
    },
    J = function(a, b, c) {
      var d = F.createElement('script');
      d.type = 'text/javascript';
      d.async = !0;
      d.src = a;
      Ka(d, b);
      c && (d.onerror = c);
      ea() && d.setAttribute('nonce', ea());
      var e = F.getElementsByTagName('script')[0] || F.body || F.head;
      e.parentNode.insertBefore(d, e);
      return d;
    },
    La = function(a, b) {
      var c = F.createElement('iframe');
      c.height = '0';
      c.width = '0';
      c.style.display = 'none';
      c.style.visibility = 'hidden';
      var d = (F.body && F.body.lastChild) || F.body || F.head;
      d.parentNode.insertBefore(c, d);
      Ka(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    P = function(a, b, c) {
      var d = new Image(1, 1);
      d.onload = function() {
        d.onload = null;
        b && b();
      };
      d.onerror = function() {
        d.onerror = null;
        c && c();
      };
      d.src = a;
    },
    Ma = function(a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    },
    Na = function(a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent('on' + b, c);
    },
    Q = function(a) {
      C.setTimeout(a, 0);
    },
    Pa = function(a) {
      var b = F.getElementById(a);
      if (b && Oa(b, 'id') != a)
        for (var c = 1; c < document.all[a].length; c++)
          if (Oa(document.all[a][c], 'id') == a) return document.all[a][c];
      return b;
    },
    Oa = function(a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Qa = function(a) {
      var b = a.innerText || a.textContent || '';
      b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '));
      return b;
    },
    Ra = function(a) {
      var b = F.createElement('div');
      b.innerHTML = 'A<div>' + a + '</div>';
      b = b.lastChild;
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
      return c;
    };
  var Sa = function(a, b) {
      for (var c = a.split('&'), d = 0; d < c.length; d++) {
        var e = c[d].split('=');
        if (decodeURIComponent(e[0]).replace(/\+/g, ' ') == b)
          return decodeURIComponent(e.slice(1).join('=')).replace(/\+/g, ' ');
      }
    },
    R = function(a, b, c, d, e) {
      var f,
        h = a.protocol || C.location.protocol;
      h = h.replace(':', '').toLowerCase();
      b && (b = String(b).toLowerCase());
      switch (b) {
        case 'protocol':
          f = h;
          break;
        case 'host':
          f = (a.hostname || C.location.hostname).split(':')[0].toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case 'port':
          f = String(
            1 * (a.hostname ? a.port : C.location.port) ||
              ('http' == h ? 80 : 'https' == h ? 443 : ''),
          );
          break;
        case 'path':
          f = '/' == a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname;
          var l = f.split('/');
          0 <= pa(d || [], l[l.length - 1]) && (l[l.length - 1] = '');
          f = l.join('/');
          break;
        case 'query':
          f = a.search.replace('?', '');
          e && (f = Sa(f, e));
          break;
        case 'fragment':
          f = a.hash.replace('#', '');
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    Ta = function(a) {
      var b = '';
      a && a.href && (b = a.hash ? a.href.replace(a.hash, '') : a.href);
      return b;
    },
    S = function(a) {
      var b = F.createElement('a');
      a && (b.href = a);
      return b;
    };
  var Wa = function() {
      this.Wb = new Ga();
      var a = new Ha();
      a.addAll(Ua());
      Va(this, function(b) {
        return a.get(b);
      });
    },
    Ua = function() {
      return {
        callInWindow: Xa,
        getCurrentUrl: Ya,
        getInWindow: Za,
        getReferrer: $a,
        getUrlComponent: bb,
        getUrlFragment: cb,
        isPlainObject: db,
        loadIframe: eb,
        loadJavaScript: fb,
        removeUrlFragment: gb,
        replaceAll: hb,
        sendTrackingBeacon: kb,
        setInWindow: lb,
      };
    };
  Wa.prototype.K = function(a) {
    return this.Wb.K(a);
  };
  Wa.prototype.execute = Wa.prototype.K;
  var Va = function(a, b) {
    a.Wb.N('require', b);
  };
  function Xa(a, b) {
    for (var c = a.split('.'), d = C, e = d[c[0]], f = 1; e && f < c.length; f++)
      (d = e), (e = e[c[f]]);
    if ('function' == ta(e)) {
      var h = [];
      for (f = 1; f < arguments.length; f++) h.push(wa(arguments[f]));
      e.apply(d, h);
    }
  }
  function Ya() {
    return C.location.href;
  }
  function Za(a, b, c) {
    for (var d = a.split('.'), e = C, f = 0; f < d.length - 1; f++)
      if (((e = e[d[f]]), void 0 === e || null === e)) return;
    b && (void 0 === e[d[f]] || (c && !e[d[f]])) && (e[d[f]] = wa(b));
    return xa(e[d[f]]);
  }
  function $a() {
    return F.referrer;
  }
  function bb(a, b, c, d, e) {
    var f;
    if (d && d instanceof u) {
      f = [];
      for (var h = 0; h < d.length(); h++) {
        var k = d.get(h);
        'string' == typeof k && f.push(k);
      }
    }
    return R(S(a), b, c, f, e);
  }
  function cb(a) {
    return R(S(a), 'fragment');
  }
  function db(a) {
    return a instanceof x;
  }
  function eb(a, b) {
    var c = this.A();
    La(a, function() {
      b instanceof v && b.i(c);
    });
  }
  var mb = {};
  function fb(a, b, c, d) {
    var e = this.A(),
      f = function() {
        b instanceof v && b.i(e);
      },
      h = function() {
        c instanceof v && c.i(e);
      };
    d
      ? mb[d]
        ? (mb[d].onSuccess.push(f), mb[d].onFailure.push(h))
        : ((mb[d] = { onSuccess: [f], onFailure: [h] }),
          (f = function() {
            for (var a = mb[d].onSuccess, b = 0; b < a.length; b++) Q(a[b]);
            a.push = function(a) {
              Q(a);
              return 0;
            };
          }),
          (h = function() {
            for (var a = mb[d].onFailure, b = 0; b < a.length; b++) Q(a[b]);
            mb[d] = null;
          }),
          J(a, f, h))
      : J(a, f, h);
  }
  function gb(a) {
    return Ta(S(a));
  }
  function hb(a, b, c) {
    return a.replace(new RegExp(b, 'g'), c);
  }
  function kb(a, b, c) {
    var d = this.A();
    P(
      a,
      function() {
        b instanceof v && b.i(d);
      },
      function() {
        c instanceof v && c.i(d);
      },
    );
  }
  function lb(a, b, c) {
    for (var d = a.split('.'), e = C, f = 0; f < d.length - 1; f++)
      if (((e = e[d[f]]), void 0 === e)) return !1;
    return void 0 === e[d[f]] || c ? ((e[d[f]] = wa(b)), !0) : !1;
  }
  var Jb,
    Kb = [],
    Lb = [],
    Mb = [],
    Nb = [],
    Ob = [],
    Pb = {},
    Ub,
    Vb,
    Wb,
    Xb = function(a) {
      var b = a['function'];
      if (!b) throw 'Error: No function name given for function call.';
      if (Pb[b]) {
        var c = {},
          d;
        for (d in a) a.hasOwnProperty(d) && 0 === d.indexOf('vtp_') && (c[d] = a[d]);
        return Pb[b](c);
      }
      var e = new x(),
        f;
      for (f in a) a.hasOwnProperty(f) && 0 === f.indexOf('vtp_') && e.set(f.substr(4), xa(a[f]));
      var h = Jb([b, e]);
      h instanceof g && 'return' === h.s && (h = h.getData());
      return wa(h);
    },
    Zb = function(a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Yb(a[e], b, c));
      return d;
    },
    Yb = function(a, b, c) {
      if (oa(a)) {
        var d;
        switch (a[0]) {
          case 'function_id':
            return a[1];
          case 'list':
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Yb(a[e], b, c));
            return d;
          case 'macro':
            var f = a[1];
            if (c[f]) return;
            var h = Kb[f];
            if (!h || b(h)) return;
            c[f] = !0;
            try {
              var k = Zb(h, b, c);
              d = Xb(k);
              Wb && (d = Wb.Mc(d, k));
            } catch (w) {
              d = !1;
            }
            c[f] = !1;
            return d;
          case 'map':
            d = {};
            for (var l = 1; l < a.length; l += 2) d[Yb(a[l], b, c)] = Yb(a[l + 1], b, c);
            return d;
          case 'template':
            d = [];
            for (var m = !1, n = 1; n < a.length; n++) {
              var p = Yb(a[n], b, c);
              Vb && (m = m || p === Vb.ya);
              d.push(p);
            }
            return Vb && m ? Vb.Nc(d) : d.join('');
          case 'escape':
            d = Yb(a[1], b, c);
            if (Vb && oa(a[1]) && 'macro' === a[1][0] && Vb.td(a)) return Vb.Gd(d);
            d = String(d);
            for (var q = 2; q < a.length; q++) nb[a[q]] && (d = nb[a[q]](d));
            return d;
          case 'tag':
            var t = a[1];
            if (!Nb[t]) throw Error('Unable to resolve tag reference ' + t + '.');
            return (d = { Kb: a[2], index: t });
          case 'zb':
            var r = $b({ function: a[1], arg0: a[2], arg1: a[3], ignore_case: a[5] }, b, c);
            a[4] && (r = !r);
            return r;
          default:
            throw Error('Attempting to expand unknown Value type: ' + a[0] + '.');
        }
      }
      return a;
    },
    $b = function(a, b, c) {
      try {
        return Ub(Zb(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return null;
    };
  var ac = null,
    dc = function(a) {
      function b(a) {
        for (var b = 0; b < a.length; b++) d[a[b]] = !0;
      }
      var c = [],
        d = [];
      ac = bc(a);
      for (var e = 0; e < Lb.length; e++) {
        var f = Lb[e],
          h = cc(f);
        if (h) {
          for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
          b(f.block || []);
        } else null === h && b(f.block || []);
      }
      var m = [];
      for (e = 0; e < Nb.length; e++) c[e] && !d[e] && (m[e] = !0);
      return m;
    },
    cc = function(a) {
      for (var b = a['if'] || [], c = 0; c < b.length; c++) {
        var d = ac(b[c]);
        if (!d) return null === d ? null : !1;
      }
      var e = a.unless || [];
      for (c = 0; c < e.length; c++) {
        d = ac(e[c]);
        if (null === d) return null;
        if (d) return !1;
      }
      return !0;
    };
  var bc = function(a) {
    var b = [];
    return function(c) {
      void 0 === b[c] && (b[c] = $b(Mb[c], a));
      return b[c];
    };
  }; /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
  var gc = {},
    hc = null;
  gc.m = '';
  var ic = null,
    jc = '//www.googletagmanager.com/a?id=' + gc.m + '&cv=1',
    kc = {},
    lc = {};
  var mc = function() {},
    nc = function(a) {
      return 'function' == typeof a;
    },
    oc = function(a) {
      return 'string' == ta(a);
    },
    pc = function(a) {
      return 'number' == ta(a) && !isNaN(a);
    },
    qc = function(a) {
      return Math.round(Number(a)) || 0;
    },
    rc = function(a) {
      return 'false' == String(a).toLowerCase() ? !1 : !!a;
    },
    sc = function(a) {
      var b = [];
      if (oa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    tc = function(a) {
      return a ? a.replace(/^\s+|\s+$/g, '') : '';
    },
    uc = function(a, b) {
      if (!pc(a) || !pc(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    vc = function() {
      this.prefix = 'gtm.';
      this.values = {};
    };
  vc.prototype.set = function(a, b) {
    this.values[this.prefix + a] = b;
  };
  vc.prototype.get = function(a) {
    return this.values[this.prefix + a];
  };
  vc.prototype.contains = function(a) {
    return void 0 !== this.get(a);
  };
  var wc = function() {
      var a = hc.sequence || 0;
      hc.sequence = a + 1;
      return a;
    },
    xc = function(a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    yc = function(a) {
      var b = !1;
      return function() {
        if (!b)
          try {
            a();
          } catch (c) {}
        b = !0;
      };
    };
  var T = (function() {
    var a = function(a) {
      return {
        toString: function() {
          return a;
        },
      };
    };
    return {
      sb: a('convert_case_to'),
      tb: a('convert_false_to'),
      ub: a('convert_null_to'),
      vb: a('convert_true_to'),
      wb: a('convert_undefined_to'),
      I: a('function'),
      ec: a('instance_name'),
      fc: a('live_only'),
      gc: a('malware_disabled'),
      hc: a('once_per_event'),
      yb: a('once_per_load'),
      zb: a('setup_tags'),
      ic: a('tag_id'),
      Ab: a('teardown_tags'),
    };
  })();
  var zc = new vc(),
    Ac = {},
    Dc = {
      set: function(a, b) {
        y(Bc(a, b), Ac);
      },
      get: function(a) {
        return Cc(a, 2);
      },
      reset: function() {
        zc = new vc();
        Ac = {};
      },
    },
    Cc = function(a, b) {
      return 2 != b ? zc.get(a) : Ec(a);
    },
    Ec = function(a, b, c) {
      var d = a.split('.');
      var e = function(a, b) {
        for (var c = 0; void 0 !== a && c < d.length; c++) {
          if (null === a) return !1;
          a = a[d[c]];
        }
        return void 0 !== a || 1 < c ? a : b.length ? e(Fc(b.pop()), b) : Gc(d);
      };
      return e(Ac.eventModel, [b, c]);
      return Gc(d);
    },
    Gc = function(a) {
      for (var b = Ac, c = 0; c < a.length; c++) {
        if (null === b) return !1;
        if (void 0 === b) break;
        b = b[a[c]];
      }
      return b;
    };
  var Fc = function(a) {
      if (a) {
        var b = Gc(['gtag', 'targets', a]);
        return va(b) ? b : void 0;
      }
    },
    Jc = function(a, b) {
      function c(a) {
        if (a) for (var b in a) a.hasOwnProperty(b) && (d[b] = null);
      }
      var d = {};
      c(Ac);
      delete d.eventModel;
      c(Fc(a));
      c(Fc(b));
      c(Ac.eventModel);
      var e = [],
        f;
      for (f in d) d.hasOwnProperty(f) && e.push(f);
      return e;
    };
  var Kc = function(a, b) {
      zc.set(a, b);
      y(Bc(a, b), Ac);
    },
    Bc = function(a, b) {
      for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    };
  var Lc = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Mc = {
      customPixels: ['nonGooglePixels'],
      html: [
        'customScripts',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      customScripts: [
        'html',
        'customPixels',
        'nonGooglePixels',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ['nonGooglePixels'],
      nonGoogleIframes: ['nonGooglePixels'],
    },
    Nc = {
      customPixels: ['customScripts', 'html'],
      html: ['customScripts'],
      customScripts: ['html'],
      nonGooglePixels: [
        'customPixels',
        'customScripts',
        'html',
        'nonGoogleScripts',
        'nonGoogleIframes',
      ],
      nonGoogleScripts: ['customScripts', 'html'],
      nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
    },
    Oc = function(a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    };
  var Pc = function(a) {
    var b = Cc('gtm.whitelist');
    b = 'gct get gtagaw gtagfl gtaggf gtagua et p13n e oid op v visitor_property u f cid cn css eq ew ge gt lc le lt re sw um'.split(
      ' ',
    );
    var c = b && Oc(sc(b), Mc),
      d = Cc('gtm.blacklist') || Cc('tagTypeBlacklist') || [];
    Lc.test(C.location && C.location.hostname) &&
      ((d = sc(d)), d.push('nonGooglePixels', 'nonGoogleScripts'));
    var e = d && Oc(sc(d), Nc),
      f = {};
    return function(h) {
      var k = h && h[T.I];
      if (!k || 'string' != typeof k) return !0;
      k = k.replace(/_/g, '');
      if (void 0 !== f[k]) return f[k];
      var l = lc[k] || [],
        m = a(k);
      if (b) {
        var n;
        if ((n = m))
          a: {
            if (0 > pa(c, k))
              if (l && 0 < l.length)
                for (var p = 0; p < l.length; p++) {
                  if (0 > pa(c, l[p])) {
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (d) {
        var t;
        if (!(t = 0 <= pa(e, k)))
          a: {
            for (var r = l || [], w = new vc(), E = 0; E < e.length; E++) w.set(e[E], !0);
            for (E = 0; E < r.length; E++)
              if (w.get(r[E])) {
                t = !0;
                break a;
              }
            t = !1;
          }
        q = t;
      }
      return (f[k] = !m || q);
    };
  };
  var Qc = {
    Mc: function(a, b) {
      b[T.sb] && 'string' === typeof a && (a = 1 == b[T.sb] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(T.ub) && null === a && (a = b[T.ub]);
      b.hasOwnProperty(T.wb) && void 0 === a && (a = b[T.wb]);
      b.hasOwnProperty(T.vb) && !0 === a && (a = b[T.vb]);
      b.hasOwnProperty(T.tb) && !1 === a && (a = b[T.tb]);
      return a;
    },
  };
  var Rc = function(a) {
      var b = hc.zones;
      !b && a && (b = hc.zones = a());
      return b;
    },
    Sc = {
      active: !0,
      isWhitelisted: function() {
        return !0;
      },
    };
  var Tc = !1,
    Uc = 0,
    Vc = [];
  function Wc(a) {
    if (!Tc) {
      var b = F.createEventObject,
        c = 'complete' == F.readyState,
        d = 'interactive' == F.readyState;
      if (!a || 'readystatechange' != a.type || c || (!b && d)) {
        Tc = !0;
        for (var e = 0; e < Vc.length; e++) Q(Vc[e]);
      }
      Vc.push = function() {
        for (var a = 0; a < arguments.length; a++) Q(arguments[a]);
        return 0;
      };
    }
  }
  function Xc() {
    if (!Tc && 140 > Uc) {
      Uc++;
      try {
        F.documentElement.doScroll('left'), Wc();
      } catch (a) {
        C.setTimeout(Xc, 50);
      }
    }
  }
  var Yc = function(a) {
    Tc ? a() : Vc.push(a);
  };
  var Zc = !1,
    $c = function() {
      return C.GoogleAnalyticsObject && C[C.GoogleAnalyticsObject];
    };
  var ad = function(a) {
      C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || 'ga');
      var b = C.GoogleAnalyticsObject;
      if (!C[b]) {
        var c = function() {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(new Date());
        C[b] = c;
      }
      return C[b];
    },
    bd = function(a, b, c, d) {
      b = String(b)
        .replace(/\s+/g, '')
        .split(',');
      var e = $c();
      e(a + 'require', 'linker');
      e(a + 'linker:autoLink', b, c, d);
    };
  var fd = function() {
      return (
        '&tc=' +
        Nb.filter(function(a) {
          return a;
        }).length
      );
    },
    gd = '0.005000' > Math.random(),
    hd = '',
    id = function() {
      hd = [jc, '&v=3&t=t', '&pid=' + uc(), '&rv=64'].join('');
    },
    jd = {},
    kd = '',
    ld = void 0,
    md = {},
    nd = {},
    od = void 0,
    pd = 2,
    qd = 1e3,
    rd = function() {
      pd = 2;
    },
    sd = function() {
      var a = ld;
      return void 0 === a ? '' : [hd, jd[a] ? '' : '&es=1', md[a], fd(), kd, '&z=0'].join('');
    },
    td = function() {
      od && (C.clearTimeout(od), (od = void 0));
      void 0 === ld ||
        (jd[ld] && !kd) ||
        (nd[ld] || 0 >= pd-- || 0 >= qd-- ? (nd[ld] = !0) : (P(sd()), (jd[ld] = !0), (kd = '')));
    },
    ud = function(a, b, c) {
      if (gd && !nd[a] && b) {
        a !== ld && (td(), (ld = a));
        var d = c + String(b[T.I] || '').replace(/_/g, '');
        kd = kd ? kd + '.' + d : '&tr=' + d;
        od || (od = C.setTimeout(td, 500));
        2022 <= sd().length && td();
      }
    };
  function vd(a, b, c, d, e, f) {
    var h = Nb[a],
      k = wd(a, b, c, d, e, f);
    if (!k) return null;
    var l = Yb(h[T.zb], f.R, []);
    if (l && l.length) {
      var m = l[0];
      k = vd(m.index, b, k, 1 === m.Kb ? e : k, e, f);
    }
    return k;
  }
  function wd(a, b, c, d, e, f) {
    function h() {
      var b = Zb(k, f.R);
      b.vtp_gtmOnSuccess = function() {
        ud(f.id, Nb[a], '5');
        c();
      };
      b.vtp_gtmOnFailure = function() {
        ud(f.id, Nb[a], '6');
        d();
      };
      b.vtp_gtmTagId = k.tag_id;
      if (k[T.gc]) d();
      else {
        ud(f.id, k, '1');
        try {
          Xb(b);
        } catch (E) {
          ud(f.id, k, '7');
          e();
        }
      }
    }
    var k = Nb[a];
    if (f.R(k)) return null;
    var l = Yb(k[T.Ab], f.R, []);
    if (l && l.length) {
      var m = l[0],
        n = vd(m.index, b, c, d, e, f);
      if (!n) return null;
      c = n;
      d = 2 === m.Kb ? e : n;
    }
    if (k[T.yb] || k[T.hc]) {
      var p = k[T.yb] ? Ob : b,
        q = c,
        t = d;
      if (!p[a]) {
        h = yc(h);
        var r = xd(a, p, h);
        c = r.H;
        d = r.S;
      }
      return function() {
        p[a](q, t);
      };
    }
    return h;
  }
  function xd(a, b, c) {
    var d = [],
      e = [];
    b[a] = yd(d, e, c);
    return {
      H: function() {
        b[a] = zd;
        for (var c = 0; c < d.length; c++) d[c]();
      },
      S: function() {
        b[a] = Ad;
        for (var c = 0; c < e.length; c++) e[c]();
      },
    };
  }
  function yd(a, b, c) {
    return function(d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function zd(a) {
    a();
  }
  function Ad(a, b) {
    b();
  }
  function Bd(a) {
    var b = 0,
      c = 0,
      d = !1;
    return {
      add: function() {
        c++;
        return yc(function() {
          b++;
          d && b >= c && a();
        });
      },
      uc: function() {
        d = !0;
        b >= c && a();
      },
    };
  }
  function Cd(a, b) {
    if (!gd) return;
    var c = function(a) {
      var d = b.R(Nb[a]) ? '3' : '4',
        f = Yb(Nb[a][T.zb], b.R, []);
      f && f.length && c(f[0].index);
      ud(b.id, Nb[a], d);
      var h = Yb(Nb[a][T.Ab], b.R, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var Dd = !1;
  var Ed = function(a, b) {
    var c = {};
    c[T.I] = '__' + a;
    for (var d in b) b.hasOwnProperty(d) && (c['vtp_' + d] = b[d]);
    for (d in void 0) (void 0).hasOwnProperty(d) && (c[d] = (void 0)[d]);
    Nb.push(c);
    return Nb.length - 1;
  };
  var Fd = /[A-Z]+/,
    Gd = /\s/,
    Hd = function(a) {
      if (oc(a) && ((a = a.trim()), !Gd.test(a))) {
        var b = a.indexOf('-');
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Fd.test(c)) {
            for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++) if (!d[e]) return;
            return { id: a, prefix: c, containerId: c + '-' + d[0], ca: d };
          }
        }
      }
    };
  var Id = null,
    Jd = {},
    Kd = {},
    Ld;
  function Md() {
    Id = Id || !hc.gtagRegistered;
    hc.gtagRegistered = !0;
    return Id;
  }
  var Nd = function(a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = y(b, void 0)),
      b.event_callback && (c.eventCallback = b.event_callback),
      b.event_timeout && (c.eventTimeout = b.event_timeout));
    return c;
  };
  function Od(a) {
    if (void 0 === Kd[a.id]) {
      var b;
      if ('UA' == a.prefix) b = Ed('gtagua', { trackingId: a.id });
      else if ('AW' == a.prefix) b = Ed('gtagaw', { conversionId: a });
      else if ('DC' == a.prefix) b = Ed('gtagfl', { targetId: a.id });
      else if ('GF' == a.prefix) b = Ed('gtaggf', { conversionId: a });
      else if ('G' == a.prefix) b = Ed('get', { trackingId: a.id, isAutoTag: !0 });
      else return;
      if (!Ld) {
        var c = { name: 'send_to', dataLayerVersion: 2 },
          d = {};
        d[T.I] = '__v';
        for (var e in c) c.hasOwnProperty(e) && (d['vtp_' + e] = c[e]);
        Kb.push(d);
        Ld = ['macro', Kb.length - 1];
      }
      var f = {
        arg0: Ld,
        arg1: a.id,
        ignore_case: !1,
      };
      f[T.I] = '_lc';
      Mb.push(f);
      var h = { if: [Mb.length - 1], add: [b] };
      h['if'] && (h.add || h.block) && Lb.push(h);
      Kd[a.id] = b;
    }
  }
  var Qd = {
      event: function(a) {
        var b = a[1];
        if (oc(b) && !(3 < a.length)) {
          var c;
          if (2 < a.length) {
            if (!va(a[2])) return;
            c = a[2];
          }
          var d = Nd(b, c);
          var e;
          var f = c,
            h = Cc('gtag.fields.send_to', 2);
          oc(h) || (h = 'send_to');
          var k = f && f[h];
          void 0 === k && ((k = Cc(h, 2)), void 0 === k && (k = 'default'));
          if (oc(k) || oa(k)) {
            for (
              var l,
                m = k
                  .toString()
                  .replace(/\s+/g, '')
                  .split(','),
                n = [],
                p = 0;
              p < m.length;
              p++
            )
              0 <= m[p].indexOf('-') ? n.push(m[p]) : (n = n.concat(Jd[m[p]] || []));
            l = n;
            for (var q = {}, t = 0; t < l.length; ++t) {
              var r = Hd(l[t]);
              r && (q[r.id] = r);
            }
            var w = [],
              E;
            for (E in q)
              if (q.hasOwnProperty(E)) {
                var K = q[E];
                'AW' === K.prefix && K.ca[1] && w.push(K.containerId);
              }
            for (var A = 0; A < w.length; ++A) delete q[w[A]];
            var N = [],
              D;
            for (D in q) q.hasOwnProperty(D) && N.push(q[D]);
            e = N;
          } else e = void 0;
          if (!e) return;
          var O = Md();
          O || Pd();
          for (var I = [], L = 0; O && L < e.length; L++) {
            var H = e[L];
            I.push(H.id);
            Od(H);
          }
          d.eventModel = d.eventModel || {};
          0 < e.length ? (d.eventModel.send_to = I.join()) : delete d.eventModel.send_to;
          return d;
        }
      },
      set: function(a) {
        var b;
        2 == a.length && va(a[1])
          ? (b = y(a[1], void 0))
          : 3 == a.length && oc(a[1]) && ((b = {}), (b[a[1]] = a[2]));
        if (b) return (b.eventModel = y(b, void 0)), (b.event = 'gtag.set'), (b._clear = !0), b;
      },
      js: function(a) {
        if (2 == a.length && a[1].getTime) return { event: 'gtm.js', 'gtm.start': a[1].getTime() };
      },
      config: function(a) {
        var b = a[2] || {};
        if (2 > a.length || !oc(a[1]) || !va(b)) return;
        var c = Hd(a[1]);
        if (!c) return;
        Md() ? Od(c) : Pd();
        var d = c.id,
          e;
        for (e in Jd)
          if (Jd.hasOwnProperty(e)) {
            var f = pa(Jd[e], d);
            0 <= f && Jd[e].splice(f, 1);
          }
        var h = c.id,
          k = b.groups || 'default';
        k = k.toString().split(',');
        for (var l = 0; l < k.length; l++) (Jd[k[l]] = Jd[k[l]] || []), Jd[k[l]].push(h);
        delete b.groups;
        Kc('gtag.targets.' + c.id, void 0);
        Kc('gtag.targets.' + c.id, y(b, void 0));
        return Nd('gtag.config', { send_to: c.id });
      },
    },
    Pd = yc(function() {});
  var Yd = !1,
    Zd = [];
  function $d() {
    if (!Yd) {
      Yd = !0;
      for (var a = 0; a < Zd.length; a++) Q(Zd[a]);
    }
  }
  var ae = [],
    be = !1,
    ce = function(a) {
      var b = a.eventCallback,
        c = yc(function() {
          nc(b) &&
            Q(function() {
              b(gc.m);
            });
        }),
        d = a.eventTimeout;
      d && C.setTimeout(c, Number(d));
      return c;
    },
    de = function() {
      for (var a = !1; !be && 0 < ae.length; ) {
        be = !0;
        delete Ac.eventModel;
        var b = ae.shift();
        if (nc(b))
          try {
            b.call(Dc);
          } catch (Rd) {}
        else if (oa(b)) {
          var c = b;
          if (oc(c[0])) {
            var d = c[0].split('.'),
              e = d.pop(),
              f = c.slice(1),
              h = Cc(d.join('.'), 2);
            if (void 0 !== h && null !== h)
              try {
                h[e].apply(h, f);
              } catch (Rd) {}
          }
        } else {
          var k = b;
          if (
            k &&
            ('[object Arguments]' == Object.prototype.toString.call(k) ||
              Object.prototype.hasOwnProperty.call(k, 'callee'))
          ) {
            a: {
              var l = b;
              if (l.length && oc(l[0])) {
                var m = Qd[l[0]];
                if (m) {
                  b = m(l);
                  break a;
                }
              }
              b = void 0;
            }
            if (!b) {
              be = !1;
              continue;
            }
          }
          var n;
          var p = void 0,
            q = b,
            t = q._clear;
          for (p in q) q.hasOwnProperty(p) && '_clear' !== p && (t && Kc(p, void 0), Kc(p, q[p]));
          var r = q.event;
          if (r) {
            var w = q['gtm.uniqueEventId'];
            w || ((w = wc()), (q['gtm.uniqueEventId'] = w), Kc('gtm.uniqueEventId', w));
            ic = r;
            var E;
            var K,
              A,
              N = q,
              D = N.event,
              O = N['gtm.uniqueEventId'],
              I = hc.zones;
            A = I ? I.checkState(gc.m, O) : Sc;
            if (A.active) {
              var L = ce(N);
              c: {
                var H = A.isWhitelisted;
                if ('gtm.js' == D) {
                  if (Dd) {
                    K = !1;
                    break c;
                  }
                  Dd = !0;
                }
                var M = O,
                  G = D;
                if (gd && !(0 >= qd) && ld !== M) {
                  td();
                  ld = M;
                  kd = '';
                  var V = md,
                    aa = M,
                    ma,
                    za = G;
                  ma = 0 === za.indexOf('gtm.') ? encodeURIComponent(za) : '*';
                  V[aa] = '&e=' + ma + '&eid=' + M;
                  od || (od = C.setTimeout(td, 500));
                }
                var ib = Pc(H),
                  ab = { id: O, name: D, Gc: L || mc, R: ib, La: dc(ib) };
                for (
                  var Hc, Rb = ab, Ud = Bd(Rb.Gc), Hf = [], Sb = [], jb = 0;
                  jb < Nb.length;
                  jb++
                )
                  if (Rb.La[jb]) {
                    var If = Nb[jb];
                    var vb = Ud.add();
                    try {
                      var Vd = vd(jb, Hf, vb, vb, vb, Rb);
                      Vd ? Sb.push(Vd) : (Cd(jb, Rb), vb());
                    } catch (Rd) {
                      vb();
                    }
                  }
                Ud.uc();
                for (var Ic = 0; Ic < Sb.length; Ic++) Sb[Ic]();
                Hc = 0 < Sb.length;
                if ('gtm.js' === D || 'gtm.sync' === D)
                  d: {
                  }
                if (Hc) {
                  for (
                    var Jf = {
                        __cl: !0,
                        __evl: !0,
                        __fsl: !0,
                        __hl: !0,
                        __jel: !0,
                        __lcl: !0,
                        __sdl: !0,
                        __tl: !0,
                        __ytl: !0,
                      },
                      Tb = 0;
                    Tb < ab.La.length;
                    Tb++
                  )
                    if (ab.La[Tb]) {
                      var Xd = Nb[Tb];
                      if (Xd && !Jf[Xd[T.I]]) {
                        K = !0;
                        break c;
                      }
                    }
                  K = !1;
                } else K = Hc;
              }
              E = K ? !0 : !1;
            } else E = !1;
            ic = null;
            n = E;
          } else n = !1;
          a = n || a;
        }
        be = !1;
      }
      return !a;
    },
    ee = function() {
      var a = de();
      try {
        var b = C['dataLayer'].hide;
        if (b && void 0 !== b[gc.m] && b.end) {
          b[gc.m] = !1;
          var c = !0,
            d;
          for (d in b)
            if (b.hasOwnProperty(d) && !0 === b[d]) {
              c = !1;
              break;
            }
          c && (b.end(), (b.end = null));
        }
      } catch (e) {}
      return a;
    },
    fe = function() {
      var a = Ja('dataLayer', []),
        b = Ja('google_tag_manager', {});
      b = b['dataLayer'] = b['dataLayer'] || {};
      Vc.push(function() {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: 'gtm.dom' }));
      });
      Zd.push(function() {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: 'gtm.load' }));
      });
      var c = a.push;
      a.push = function() {
        var b = [].slice.call(arguments, 0);
        c.apply(a, b);
        for (ae.push.apply(ae, b); 300 < this.length; ) this.shift();
        return de();
      };
      ae.push.apply(ae, a.slice(0));
      Q(ee);
    };
  var ge = {};
  ge.ya = new String('undefined');
  ge.Pa = {};
  var he = function(a) {
    this.resolve = function(b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === ge.ya ? b : a[d]);
      return c.join('');
    };
  };
  he.prototype.toString = function() {
    return this.resolve('undefined');
  };
  he.prototype.valueOf = he.prototype.toString;
  ge.Nc = function(a) {
    return new he(a);
  };
  var ie = {};
  ge.Nd = function(a, b) {
    var c = wc();
    ie[c] = [a, b];
    return c;
  };
  ge.Fb = function(a) {
    var b = a ? 0 : 1;
    return function(a) {
      var c = ie[a];
      if (c && 'function' === typeof c[b]) c[b]();
      ie[a] = void 0;
    };
  };
  ge.td = function(a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  ge.Gd = function(a) {
    if (a === ge.ya) return a;
    var b = wc();
    ge.Pa[b] = a;
    return 'google_tag_manager["' + gc.m + '"].macro(' + b + ')';
  };
  ge.jc = he;
  var je = new vc(),
    ke = function(a, b) {
      function c(a) {
        var b = S(a),
          c = R(b, 'protocol'),
          d = R(b, 'host', !0),
          e = R(b, 'port'),
          f = R(b, 'path')
            .toLowerCase()
            .replace(/\/$/, '');
        if (void 0 === c || ('http' == c && '80' == e) || ('https' == c && '443' == e))
          (c = 'web'), (e = 'default');
        return [c, d, e, f];
      }
      for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
        if (d[f] !== e[f]) return !1;
      return !0;
    };
  function le(a) {
    var b = a.arg0,
      c = a.arg1;
    switch (a['function']) {
      case '_cn':
        return 0 <= String(b).indexOf(String(c));
      case '_css':
        var d;
        a: {
          if (b) {
            var e = [
              'matches',
              'webkitMatchesSelector',
              'mozMatchesSelector',
              'msMatchesSelector',
              'oMatchesSelector',
            ];
            try {
              for (var f = 0; f < e.length; f++)
                if (b[e[f]]) {
                  d = b[e[f]](c);
                  break a;
                }
            } catch (r) {}
          }
          d = !1;
        }
        return d;
      case '_ew':
        var h, k;
        h = String(b);
        k = String(c);
        var l = h.length - k.length;
        return 0 <= l && h.indexOf(k, l) == l;
      case '_eq':
        return String(b) == String(c);
      case '_ge':
        return Number(b) >= Number(c);
      case '_gt':
        return Number(b) > Number(c);
      case '_lc':
        var m;
        m = String(b).split(',');
        return 0 <= pa(m, String(c));
      case '_le':
        return Number(b) <= Number(c);
      case '_lt':
        return Number(b) < Number(c);
      case '_re':
        var n;
        var p = a.ignore_case ? 'i' : void 0;
        try {
          var q = String(c) + p,
            t = je.get(q);
          t || ((t = new RegExp(c, p)), je.set(q, t));
          n = t.test(b);
        } catch (r) {
          n = !1;
        }
        return n;
      case '_sw':
        return 0 == String(b).indexOf(String(c));
      case '_um':
        return ke(b, c);
    }
    return !1;
  }
  function me(a, b, c, d) {
    return (d || 'https:' == C.location.protocol ? a : b) + c;
  }
  function ne(a, b) {
    for (var c = b || (a instanceof u ? new u() : new x()), d = a.M(), e = 0; e < d.length(); e++) {
      var f = d.get(e);
      if (a.has(f)) {
        var h = a.get(f);
        h instanceof u
          ? (c.get(f) instanceof u || c.set(f, new u()), ne(h, c.get(f)))
          : h instanceof x
          ? (c.get(f) instanceof x || c.set(f, new x()), ne(h, c.get(f)))
          : c.set(f, h);
      }
    }
    return c;
  }
  function oe() {
    return gc.m;
  }
  function pe() {
    return new Date().getTime();
  }
  function qe(a, b) {
    return xa(Cc(a, b || 2));
  }
  function re() {
    return ic;
  }
  function se(a) {
    return Ra('<a href="' + a + '"></a>')[0].href;
  }
  function te(a) {
    return qc(wa(a));
  }
  function ue(a) {
    return null === a ? 'null' : void 0 === a ? 'undefined' : a.toString();
  }
  function ve(a, b) {
    return uc(a, b);
  }
  function we(a, b, c) {
    if (!(a instanceof u)) return null;
    for (var d = new x(), e = !1, f = 0; f < a.length(); f++) {
      var h = a.get(f);
      h instanceof x && h.has(b) && h.has(c) && (d.set(h.get(b), h.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var xe = function() {
    var a = new Ha();
    a.addAll(Ua());
    a.addAll({
      buildSafeUrl: me,
      decodeHtmlUrl: se,
      copy: ne,
      generateUniqueNumber: wc,
      getContainerId: oe,
      getCurrentTime: pe,
      getDataLayerValue: qe,
      getEventName: re,
      makeInteger: te,
      makeString: ue,
      randomInteger: ve,
      tableToMap: we,
    });
    return function(b) {
      return a.get(b);
    };
  };
  var ye = new Wa(),
    ze = function() {
      var a = data.runtime || [];
      Jb = function(a) {
        return ye.K(a);
      };
      Ub = le;
      Va(ye, xe());
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (!oa(c) || 3 > c.length) {
          if (0 == c.length) continue;
          break;
        }
        ye.K(c);
      }
    };
  var Ae = function(a, b) {
    var c = function() {};
    c.prototype = a.prototype;
    var d = new c();
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d;
  };
  var Be = function(a) {
      return encodeURIComponent(a);
    },
    Ce = function(a) {
      var b = ['veinteractive.com', 've-interactive.cn'];
      if (!a) return !1;
      var c = R(S(a), 'host');
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    };
  var U = function(a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    },
    De = function(a, b) {
      y(a, b);
    },
    Ee = function(a) {
      return qc(a);
    },
    Fe = function(a, b) {
      return pa(a, b);
    };
  var Ge = function(a) {
      var b = {
        'gtm.element': a,
        'gtm.elementClasses': a.className,
        'gtm.elementId': a['for'] || Oa(a, 'id') || '',
        'gtm.elementTarget': a.formTarget || a.target || '',
      };
      b['gtm.elementUrl'] =
        (a.attributes && a.attributes.formaction ? a.formAction : '') ||
        a.action ||
        a.href ||
        a.src ||
        a.code ||
        a.codebase ||
        '';
      return b;
    },
    He = function(a) {
      hc.hasOwnProperty('autoEventsSettings') || (hc.autoEventsSettings = {});
      var b = hc.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Ie = function(a, b, c, d) {
      var e = He(a),
        f = xc(e, b, d);
      e[b] = c(f);
    },
    Je = function(a, b, c) {
      var d = He(a);
      return xc(d, b, c);
    };
  var Ke = /(^|\.)doubleclick\.net$/i,
    Le = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Me = function(a, b, c) {
      for (var d = String(b || F.cookie).split(';'), e = [], f = 0; f < d.length; f++) {
        var h = d[f].split('='),
          k = tc(h[0]);
        if (k && k == a) {
          var l = tc(h.slice(1).join('='));
          l && !1 !== c && (l = decodeURIComponent(l));
          e.push(l);
        }
      }
      return e;
    },
    Ne = function(a, b, c, d, e, f) {
      f && (b = encodeURIComponent(b));
      var h = a + '=' + b + '; ';
      c && (h += 'path=' + c + '; ');
      e && (h += 'expires=' + e.toGMTString() + '; ');
      var k, l;
      if ('auto' == d) {
        var m = R(C.location, 'host', !0).split('.');
        if (4 == m.length && /^[0-9]*$/.exec(m[3])) l = ['none'];
        else {
          for (var n = [], p = m.length - 2; 0 <= p; p--) n.push(m.slice(p).join('.'));
          n.push('none');
          l = n;
        }
      } else l = [d || 'none'];
      k = l;
      for (var q = F.cookie, t = 0; t < k.length; t++) {
        var r = h,
          w = k[t],
          E = c;
        if (Ke.test(C.location.hostname) || ('/' == E && Le.test(w))) break;
        'none' != k[t] && (r += 'domain=' + k[t] + ';');
        F.cookie = r;
        if (q != F.cookie || 0 <= pa(Me(a), b)) break;
      }
    };
  var Oe = !1;
  if (F.querySelectorAll)
    try {
      var Pe = F.querySelectorAll(':root');
      Pe && 1 == Pe.length && Pe[0] == F.documentElement && (Oe = !0);
    } catch (a) {}
  var Qe = Oe;
  var Re = function(a) {
      for (
        var b = [],
          c = document.cookie.split(';'),
          d = new RegExp('^\\s*' + a + '=\\s*(.*?)\\s*$'),
          e = 0;
        e < c.length;
        e++
      ) {
        var f = c[e].match(d);
        f && b.push(f[1]);
      }
      return b;
    },
    Ue = function(a, b, c) {
      var d = Se(a);
      if (1 === d.length) return d[0].id;
      if (0 !== d.length) {
        d = Te(
          d,
          function(a) {
            return a.Vc;
          },
          b,
        );
        if (1 === d.length) return d[0].id;
        d = Te(
          d,
          function(a) {
            return a.Ed;
          },
          c,
        );
        return d[0] ? d[0].id : void 0;
      }
    },
    Xe = function(a, b, c, d, e) {
      c = void 0 === c ? '/' : c;
      var f = (d = void 0 === d ? 'auto' : d),
        h = c;
      if (Ve.test(document.location.hostname) || ('/' === h && We.test(f))) return !1;
      var k = b;
      k && 1200 < k.length && (k = k.substring(0, 1200));
      b = k;
      var l = a + '=' + b + '; path=' + c + '; ';
      void 0 !== e && (l += 'expires=' + new Date(new Date().getTime() + e).toGMTString() + '; ');
      if ('auto' === d) {
        var m = !1,
          n;
        a: {
          var p = [],
            q = document.location.hostname.split('.');
          if (4 === q.length) {
            var t = q[q.length - 1];
            if (parseInt(t, 10).toString() === t) {
              n = ['none'];
              break a;
            }
          }
          for (var r = q.length - 2; 0 <= r; r--) p.push(q.slice(r).join('.'));
          p.push('none');
          n = p;
        }
        for (var w = n, E = 0; E < w.length && !m; E++) m = Xe(a, b, c, w[E], e);
        return m;
      }
      d && 'none' !== d && (l += 'domain=' + d + ';');
      var K = document.cookie;
      document.cookie = l;
      return K != document.cookie || 0 <= Re(a).indexOf(b);
    };
  function Te(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c ? d.push(k) : void 0 === f || l < f ? ((e = [k]), (f = l)) : l === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Se(a) {
    for (var b = Ye, c = [], d = Re(a), e = 0; e < d.length; e++) {
      var f = d[e].split('.'),
        h = f.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = f.shift();
        k &&
          ((k = k.split('-')), c.push({ id: f.join('.'), Vc: 1 * k[0] || 1, Ed: 1 * k[1] || 1 }));
      }
    }
    return c;
  }
  var We = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ve = /(^|\.)doubleclick\.net$/i;
  var Ze = window,
    $e = document;
  function af(a) {
    if (!a) return 1;
    a = 0 === a.indexOf('.') ? a.substr(1) : a;
    return a.split('.').length;
  }
  function bf(a) {
    if (!a || '/' === a) return 1;
    '/' !== a[0] && (a = '/' + a);
    '/' !== a[a.length - 1] && (a += '/');
    return a.split('/').length - 1;
  }
  var Ye = ['1'],
    cf = {},
    df = function(a) {
      return cf[(void 0 === a ? '_gcl' : a) + '_dcu'];
    },
    ff = function(a, b, c) {
      b = void 0 === b ? 'auto' : b;
      c = void 0 === c ? '/' : c;
      var d,
        e = void 0 === a ? '_gcl' : a;
      d = (void 0 === e ? '_gcl' : e) + '_dcu';
      if (!cf[d] && !ef(d, b, c)) {
        for (
          var f,
            h = Ze.navigator.userAgent + ($e.cookie || '') + ($e.referrer || ''),
            k = h.length,
            l = Ze.history.length;
          0 < l;

        )
          h += l-- ^ k++;
        var m = 1,
          n,
          p,
          q;
        if (h)
          for (m = 0, p = h.length - 1; 0 <= p; p--)
            (q = h.charCodeAt(p)),
              (m = ((m << 6) & 268435455) + q + (q << 14)),
              (n = m & 266338304),
              (m = 0 != n ? m ^ (n >> 21) : m);
        var t = [
            Math.round(2147483647 * Math.random()) ^ (m & 2147483647),
            Math.round(Date.now() / 1e3),
          ].join('.'),
          r = '' + af(void 0),
          w = bf(void 0);
        1 < w && (r += '-' + w);
        f = ['1', r, t].join('.');
        Xe(d, f, c, b, 7776e6);
        ef(d, b, c);
      }
    };
  function ef(a, b, c) {
    var d,
      e = af(b);
    (d = Ue(a, e, bf(c))) && (cf[a] = d);
    return d;
  }
  var gf = function(a) {
    for (
      var b = [], c = F.cookie.split(';'), d = new RegExp('^\\s*' + a + '=\\s*(.*?)\\s*$'), e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f && b.push(f[1]);
    }
    var h = [];
    if (!b || 0 == b.length) return h;
    for (var k = 0; k < b.length; k++) {
      var l = b[k].split('.');
      3 == l.length && 'GCL' == l[0] && l[1] && h.push(l[2]);
    }
    return h;
  };
  var hf = /^\w+$/,
    jf = /^[\w-]+$/,
    kf = /^\d+\.fls\.doubleclick\.net$/;
  function lf(a) {
    return a && 'string' == typeof a && a.match(hf) ? a : '_gcl';
  }
  function mf(a) {
    if (a) {
      if ('string' == typeof a) {
        var b = lf(a);
        return { la: b, ka: b };
      }
      if (a && 'object' == typeof a) return { la: lf(a.dc), ka: lf(a.aw) };
    }
    return { la: '_gcl', ka: '_gcl' };
  }
  function nf(a) {
    var b = S(C.location.href),
      c = R(b, 'host', !1);
    if (c && c.match(kf)) {
      var d = R(b, 'path').split(a + '=');
      if (1 < d.length) return d[1].split(';')[0].split('?')[0];
    }
  }
  function of(a) {
    return a.filter(function(a) {
      return jf.test(a);
    });
  }
  var qf = function(a) {
      var b = nf('gclaw');
      if (b) return b.split('.');
      var c = mf(a);
      if ('_gcl' == c.ka) {
        var d = pf();
        if (d && (null == d.G || 'aw.ds' == d.G)) return [d.ba];
      }
      return of(gf(c.ka + '_aw'));
    },
    rf = function(a) {
      var b = nf('gcldc');
      if (b) return b.split('.');
      var c = mf(a);
      if ('_gcl' == c.la) {
        var d = pf();
        if (d && ('ds' == d.G || 'aw.ds' == d.G)) return [d.ba];
      }
      return of(gf(c.la + '_dc'));
    };
  function pf() {
    var a = S(C.location.href),
      b = R(a, 'query', !1, void 0, 'gclid'),
      c = R(a, 'query', !1, void 0, 'gclsrc');
    if (!b || !c) {
      var d = R(a, 'fragment');
      b = b || Sa(d, 'gclid');
      c = c || Sa(d, 'gclsrc');
    }
    return void 0 !== b && b.match(jf) ? { ba: b, G: c } : null;
  }
  var sf = function(a, b, c) {
      var d = mf(a);
      c = c || 'auto';
      b = b || '/';
      var e = pf();
      if (null != e) {
        var f = new Date().getTime(),
          h = new Date(f + 7776e6),
          k = ['GCL', Math.round(f / 1e3), e.ba].join('.');
        (e.G && 'aw.ds' != e.G) || Ne(d.ka + '_aw', k, b, c, h, !0);
        ('aw.ds' != e.G && 'ds' != e.G) || Ne(d.la + '_dc', k, b, c, h, !0);
      }
    },
    tf = function() {
      var a = nf('gac');
      if (a) return decodeURIComponent(a);
      for (
        var b = [], c = F.cookie.split(';'), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0;
        e < c.length;
        e++
      ) {
        var f = c[e].match(d);
        f && b.push({ lb: f[1], value: f[2] });
      }
      var h = {};
      if (b && b.length)
        for (var k = 0; k < b.length; k++) {
          var l = b[k].value.split('.');
          '1' == l[0] &&
            3 == l.length &&
            l[1] &&
            (h[b[k].lb] || (h[b[k].lb] = []), h[b[k].lb].push({ timestamp: l[1], ba: l[2] }));
        }
      var m = [],
        n;
      for (n in h)
        if (h.hasOwnProperty(n)) {
          for (var p = [], q = h[n], t = 0; t < q.length; t++) p.push(q[t].ba);
          p = of(p);
          p.length && m.push(n + ':' + p.join(','));
        }
      return m.join(';');
    },
    uf = function(a, b, c) {};
  var vf;
  a: {
    vf = 'g';
    break a;
    vf = 'G';
  }
  var wf = { '': 'n', UA: 'u', AW: 'a', DC: 'd', GTM: vf },
    xf = function(a) {
      var b = gc.m.split('-'),
        c = b[0].toUpperCase();
      return (wf[c] || 'i') + '64' + (a && 'GTM' === c ? b[1] : '');
    };
  var yf = function(a) {
      return !(void 0 === a || null === a || 0 === (a + '').length);
    },
    zf = function(a, b) {
      var c;
      if (2 === b.B) return a('ord', uc(1e11, 1e13)), !0;
      if (3 === b.B) return a('ord', '1'), a('num', uc(1e11, 1e13)), !0;
      if (4 === b.B) return yf(b.sessionId) && a('ord', b.sessionId), !0;
      if (5 === b.B) c = '1';
      else if (6 === b.B) c = b.Zb;
      else return !1;
      yf(c) && a('qty', c);
      yf(b.Ta) && a('cost', b.Ta);
      yf(b.mb) && a('ord', b.mb);
      return !0;
    },
    Af = encodeURIComponent,
    Bf = function(a, b) {
      function c(a, b, c) {
        f.hasOwnProperty(a) || ((b += ''), (e += ';' + a + '=' + (c ? b : Af(b))));
      }
      var d = a.Va,
        e = a.protocol;
      e += a.Ma ? '//' + d + '.fls.doubleclick.net/activityi' : '//ad.doubleclick.net/activity';
      e += ';src=' + Af(d) + (';type=' + Af(a.Wa)) + (';cat=' + Af(a.ja));
      var f = a.Pc || {},
        h;
      for (h in f) f.hasOwnProperty(h) && (e += ';' + Af(h) + '=' + Af(f[h] + ''));
      if (zf(c, a)) {
        yf(a.ob) && c('u', a.ob);
        yf(a.tran) && c('tran', a.tran);
        c('gtm', xf());
        if (a.Sa) {
          var k = rf(a.Z);
          k && k.length && c('gcldc', k.join('.'));
          var l = qf(a.Z);
          l && l.length && c('gclaw', l.join('.'));
          var m = tf();
          m && c('gac', m);
        }
        yf(a.eb) && c('prd', a.eb, !0);
        for (var p in a.va) a.va.hasOwnProperty(p) && c(p, a.va[p]);
        e += b || '';
        yf(a.Ia) && c('~oref', a.Ia);
        a.Ma ? La(e + '?', a.H) : P(e + '?', a.H, a.S);
      } else Q(a.S);
    };
  var Cf = function(a) {
    return null === a || void 0 === a || 0 === String(a).length
      ? ''
      : encodeURIComponent(String(a));
  };
  var Df = !!C.MutationObserver,
    Ef = void 0,
    Ff = function(a) {
      if (!Ef) {
        var b = function() {
          var a = F.body;
          if (a)
            if (Df)
              new MutationObserver(function() {
                for (var a = 0; a < Ef.length; a++) Q(Ef[a]);
              }).observe(a, { childList: !0, subtree: !0 });
            else {
              var b = !1;
              Ma(a, 'DOMNodeInserted', function() {
                b ||
                  ((b = !0),
                  Q(function() {
                    b = !1;
                    for (var a = 0; a < Ef.length; a++) Q(Ef[a]);
                  }));
              });
            }
        };
        Ef = [];
        F.body ? b() : Q(b);
      }
      Ef.push(a);
    };
  var Tf = 'www.googletagmanager.com/gtm.js';
  Tf = 'www.googletagmanager.com/gtag/js';
  var Uf = Tf,
    Vf = function(a, b, c, d) {
      Ma(a, b, c, d);
    },
    Wf = function(a, b) {
      return C.setTimeout(a, b);
    },
    Xf = function(a, b, c) {
      J(a, b, c);
    },
    Yf = {},
    Zf = function(a, b, c) {
      var d = Yf[a];
      if (void 0 === d) {
        var e = function(a, b) {
          return function() {
            a.status = b;
            for (var c = 2 == b ? a.bc : a.Jb, d = 0; d < c.length; d++) C.setTimeout(c[d], 0);
          };
        };
        d = { status: 1, bc: [], Jb: [], Rd: void 0 };
        d.we = J(a, e(d, 2), e(d, 3));
        Yf[a] = d;
      }
      0 === d.status && (d.Rd(), (d.status = 2));
      2 === d.status
        ? b && b()
        : 3 === d.status
        ? c && c()
        : 1 === d.status && (b && d.bc.push(b), c && d.Jb.push(c));
    },
    $f = function() {
      return C.location.href;
    },
    ag = function(a) {
      return R(S(a), 'fragment');
    },
    W = function(a, b) {
      return Cc(a, b || 2);
    },
    bg = function(a, b, c) {
      b && ((a.eventCallback = b), c && (a.eventTimeout = c));
      return C['dataLayer'].push(a);
    },
    cg = function(a, b) {
      C[a] = b;
    },
    X = function(a, b, c) {
      b && (void 0 === C[a] || (c && !C[a])) && (C[a] = b);
      return C[a];
    },
    dg = function(a, b) {
      var c;
      a: {
        var d;
        d = 100;
        for (var e = {}, f = 0; f < b.length; f++) e[b[f]] = !0;
        for (var h = a, k = 0; h && k <= d; k++) {
          if (e[String(h.tagName).toLowerCase()]) {
            c = h;
            break a;
          }
          h = h.parentElement;
        }
        c = null;
      }
      return c;
    },
    Y = function(a, b, c, d) {
      var e = !d && 'http:' == C.location.protocol;
      e && (e = 2 !== eg());
      return (e ? b : a) + c;
    };
  var fg = function(a) {
      var b = 0;
      return b;
    },
    gg = function(a) {},
    hg = function(a) {
      var b = !1;
      return b;
    },
    ig = function(a, b) {
      var c;
      a: {
        if (a && oa(a))
          for (var d = 0; d < a.length; d++)
            if (a[d] && b(a[d])) {
              c = a[d];
              break a;
            }
        c = void 0;
      }
      return c;
    },
    jg = function(a, b, c, d) {
      Ie(a, b, c, d);
    },
    kg = function(a, b, c) {
      return Je(a, b, c);
    },
    lg = function(a) {
      return !!Je(a, 'init', !1);
    },
    mg = function(a) {
      He(a).init = !0;
    };
  var eg = function() {
    var a = Uf;
    a = a.toLowerCase();
    for (
      var b = 'https://' + a, c = 'http://' + a, d = 1, e = F.getElementsByTagName('script'), f = 0;
      f < e.length && 100 > f;
      f++
    ) {
      var h = e[f].src;
      if (h) {
        h = h.toLowerCase();
        if (0 === h.indexOf(c)) return 3;
        1 === d && 0 === h.indexOf(b) && (d = 2);
      }
    }
    return d;
  };
  var og = function(a, b) {
    return Ec(a, b, void 0);
  };
  var pg = function(a, b) {
    var c = Uf + '?id=' + encodeURIComponent(a) + '&l=dataLayer';
    if (b)
      for (var d in b)
        b[d] && b.hasOwnProperty(d) && (c += '&' + d + '=' + encodeURIComponent(b[d]));
    var e = Y('https://', 'http://', c);
    J(e, void 0, void 0);
  };
  var rg = function(a, b, c) {
    a instanceof ge.jc && ((a = a.resolve(ge.Nd(b, c))), (b = mc));
    return { Xa: a, H: b };
  };
  var sg = function(a, b) {
      var c = new Date().getTime();
      this.n = a;
      this.t = c;
      this.p = b;
    },
    tg = function() {
      this.c = 1;
      this.e = [];
      this.p = null;
    };
  function ug(a) {
    var b = hc,
      c = (b.gss = b.gss || {});
    return (c[a] = c[a] || new tg());
  }
  var vg = function(a, b) {
      ug(a).p = b;
    },
    wg = function(a) {};
  var Bg = function(a) {
      if (1 === ug(a).c) {
        ug(a).c = 2;
        var b = encodeURIComponent(a);
        J('www.googletagmanager.com/gtag/js?id=' + b + '&l=dataLayer&cx=c');
      }
    },
    Cg = function(a, b) {};
  var Z = { a: {} };
  (Z.a.e = ['google']),
    (function() {
      (function(a) {
        Z.__e = a;
        Z.__e.b = 'e';
        Z.__e.g = !0;
      })(function() {
        return ic;
      });
    })();

  (Z.a.v = ['google']),
    (function() {
      (function(a) {
        Z.__v = a;
        Z.__v.b = 'v';
        Z.__v.g = !0;
      })(function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = W(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue;
      });
    })();

  (Z.a.gtagaw = ['google']),
    (function() {
      var a = !1,
        b = !1,
        c = [],
        d = 'send_to aw_remarketing aw_remarketing_only custom_params send_page_view language value currency transaction_id user_id conversion_linker conversion_cookie_prefix page_location page_referrer phone_conversion_number phone_conversion_callback phone_conversion_css_class items aw_merchant_id aw_feed_country aw_feed_language discount disable_merchant_reported_purchases'.split(
          ' ',
        ),
        e = function(a) {
          var b = X('google_trackConversion'),
            c = a.gtm_onFailure;
          'function' == typeof b ? b(a) || c() : c();
        },
        f = function() {
          for (; 0 < c.length; ) e(c.shift());
        },
        h = function() {
          a ||
            ((a = !0),
            Xf(
              Y('https://', 'http://', 'www.googleadservices.com/pagead/conversion_async.js'),
              function() {
                f();
                c = { push: e };
              },
              function() {
                f();
                a = !1;
              },
            ));
        },
        k = function(a, c, d, e) {
          if (c) {
            var f = a.ca[0],
              h = a.ca[1],
              k = X('_googWcmImpl', function() {
                k.q = k.q || [];
                k.q.push(arguments);
              });
            X('_googWcmAk', f);
            b || ((b = !0), Xf(Y('https://', 'http://', 'www.gstatic.com/wcm/loader.js')));
            var l = { ak: f, cl: h };
            void 0 === d && (l.autoreplace = c);
            k(2, d, l, c, e, new Date(), e);
          }
        },
        l = function(a) {
          if (a) {
            for (var b = [], c = 0; c < a.length; ++c) {
              var d = a[c];
              d && b.push({ item_id: d.id, quantity: d.quantity, value: d.price });
            }
            return b;
          }
        };
      (function(a) {
        Z.__gtagaw = a;
        Z.__gtagaw.b = 'gtagaw';
        Z.__gtagaw.g = !0;
      })(function(a) {
        var b = a.vtp_conversionId,
          e = ic,
          f = 'gtag.config' == e,
          m = b.ca[0],
          r = b.ca[1],
          w = void 0 !== r,
          E = b.containerId,
          K = w ? b.id : void 0,
          A = function(a) {
            return Ec(a, E, K);
          },
          N = !1 !== A('conversion_linker'),
          D = A('conversion_cookie_prefix');
        f && N && sf(D, void 0, void 0);
        if (f && w) {
          var O = A('phone_conversion_number'),
            I = A('phone_conversion_callback'),
            L = A('phone_conversion_css_class'),
            H = A('phone_conversion_options');
          k(b, O, I || L, H);
        }
        var M = !1 === A('aw_remarketing') || !1 === A('send_page_view');
        if (!f || (!w && !M)) {
          !0 === A('aw_remarketing_only') && (w = !1);
          var G = {
            google_conversion_id: m,
            google_remarketing_only: !w,
            onload_callback: a.vtp_gtmOnSuccess,
            gtm_onFailure: a.vtp_gtmOnFailure,
            google_conversion_format: '3',
            google_conversion_color: 'ffffff',
            google_conversion_domain: '',
            google_conversion_label: r,
            google_conversion_language: A('language'),
            google_conversion_value: A('value'),
            google_conversion_currency: A('currency'),
            google_conversion_order_id: A('transaction_id'),
            google_user_id: A('user_id'),
            google_conversion_page_url: A('page_location'),
            google_conversion_referrer_url: A('page_referrer'),
            google_gtm: xf(void 0),
            google_read_gcl_cookie_opt_out: !N,
          };
          N &&
            D &&
            (va(D) ? (G.google_gcl_cookie_prefix = D.aw) : (G.google_gcl_cookie_prefix = D));
          var V = (function() {
            var a = A('custom_params'),
              b = { event: e };
            if (oa(a)) {
              for (var c = 0; c < a.length; ++c) {
                var f = a[c],
                  h = A(f);
                void 0 !== h && (b[f] = h);
              }
              return b;
            }
            var k = A('eventModel');
            if (!k) return null;
            y(k, b);
            for (var l = 0; l < d.length; ++l) delete b[d[l]];
            return b;
          })();
          V && (G.google_custom_params = V);
          if (w && 'purchase' == e && A('aw_merchant_id')) {
            G.google_conversion_merchant_id = A('aw_merchant_id');
            G.google_basket_feed_country = A('aw_feed_country');
            G.google_basket_feed_language = A('aw_feed_language');
            G.google_basket_discount = A('discount');
            G.google_basket_transaction_type = e;
            G.google_disable_merchant_reported_conversions =
              !0 === A('disable_merchant_reported_purchases');
            var aa = l(A('items'));
            aa && (G.google_conversion_items = aa);
          }
          c.push(G);
        }
        h();
      });
    })();

  (Z.a.gtagfl = []),
    (function() {
      function a(a) {
        var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
        if (b) {
          var c = { standard: 2, unique: 3, per_session: 4, transactions: 5, items_sold: 6, '': 1 }[
            (b[5] || '').toLowerCase()
          ];
          if (c)
            return {
              containerId: 'DC-' + b[1],
              cc: b[3] ? a : '',
              nc: b[1],
              mc: b[3] || '',
              ja: b[4] || '',
              B: c,
            };
        }
      }
      function b(a, b) {
        function c(b, c, e) {
          void 0 !== e && 0 !== (e + '').length && d.push(b + c + ':' + a(e + ''));
        }
        var d = [],
          e = b('items') || [];
        if (oa(e))
          for (var l = 0; l < e.length; l++) {
            var m = e[l],
              n = l + 1;
            c('i', n, m.id);
            c('p', n, m.price);
            c('q', n, m.quantity);
            c('c', n, b('country'));
            c('l', n, b('language'));
          }
        return d.join('|');
      }
      function c(a, b, c) {
        var d = /^u([1-9]\d?|100)$/,
          e = a('custom_map') || {},
          f = Jc(b, c),
          m = {},
          n = {};
        if (va(e))
          for (var p in e)
            if (e.hasOwnProperty(p) && d.test(p)) {
              var q = e[p];
              oc(q) && (m[p] = q);
            }
        for (var t = 0; t < f.length; t++) {
          var r = f[t];
          d.test(r) && (m[r] = r);
        }
        for (var w in m) m.hasOwnProperty(w) && (n[w] = a(m[w]));
        return n;
      }
      (function(a) {
        Z.__gtagfl = a;
        Z.__gtagfl.b = 'gtagfl';
        Z.__gtagfl.g = !0;
      })(function(d) {
        var e = d.vtp_gtmOnSuccess,
          f = d.vtp_gtmOnFailure,
          h = a(d.vtp_targetId);
        if (h) {
          var k = function(a) {
              return Ec(a, h.containerId, h.cc || void 0);
            },
            l = !1 !== k('conversion_linker'),
            m = k('conversion_cookie_prefix');
          if ('gtag.config' === ic) l && (sf(m, void 0, void 0), uf(m, void 0, void 0)), Q(e);
          else {
            var n = {},
              p = k('dc_custom_params');
            if (va(p))
              for (var q in p)
                if (p.hasOwnProperty(q)) {
                  var t = p[q];
                  void 0 !== t && null !== t && (n[q] = t);
                }
            var r = '';
            if (5 === h.B || 6 === h.B) r = b(Be, k);
            var w = c(k, h.containerId, h.cc),
              E = 3 === eg(),
              K = !0 === k('allow_custom_scripts'),
              A = {
                ja: h.ja,
                Sa: l,
                Z: m,
                Ta: k('value'),
                B: h.B,
                Pc: n,
                Va: h.nc,
                Wa: h.mc,
                S: f,
                H: e,
                Ia: Ta(S($f())),
                eb: r,
                protocol: E ? 'http:' : 'https:',
                Zb: k('quantity'),
                Ma: K,
                sessionId: k('session_id'),
                mb: k('transaction_id'),
                va: w,
              };
            Bf(A, void 0);
          }
        } else Q(f);
      });
    })();
  (Z.a.gtaggf = ['google']),
    (function() {
      var a = function(a) {
        if (a) {
          for (var b = [], d = 0, e = 0; e < a.length; ++e) {
            var f = a[e];
            f &&
              'FlightSegment' === f.category &&
              ((b[d] = {
                cabin: f.cabin,
                fare_product: f.fare_product,
                booking_code: f.booking_code,
                flight_number: f.flight_number,
                origin: f.origin,
                destination: f.destination,
                departure_date_time: f.start_date,
              }),
              d++);
          }
          return b;
        }
      };
      (function(a) {
        Z.__gtaggf = a;
        Z.__gtaggf.b = 'gtaggf';
        Z.__gtaggf.g = !0;
      })(function(b) {
        var c = ic,
          d = b.vtp_gtmOnSuccess,
          e = b.vtp_gtmOnFailure,
          f = function(a) {
            return Ec(a, k, h.id);
          };
        if ('gtag.config' === c) Q(d);
        else {
          var h = b.vtp_conversionId,
            k = h.containerId,
            l = { conversion_id: h.ca[0], onFailure: e, onSuccess: d };
          if ('purchase' === c) {
            var m = {
                partner_id: f('client_id'),
                trip_type: f('trip_type'),
                total_price: f('value'),
                currency: f('currency'),
                flight_segment: a(f('items')),
              },
              n = f('passengers');
            n &&
              'object' === typeof n &&
              ((m.passengers_total = n.total),
              (m.passengers_adult = n.adult),
              (m.passengers_child = n.child),
              (m.passengers_infant_in_seat = n.infant_in_seat),
              (m.passengers_infant_on_lap = n.infant_on_lap),
              (m.passengers_senior = n.senior));
            l.conversion_data = m;
          }
          if (l)
            try {
              l.conversion_id &&
                l.conversion_data &&
                P(
                  'https://www.googletraveladservices.com/travel/flights/clk' +
                    ('/pagead/conversion/' + Cf(l.conversion_id) + '/?') +
                    '&conversion_data=' +
                    Cf(JSON.stringify(l.conversion_data)),
                  l.H,
                  l.S,
                );
            } catch (p) {}
        }
      });
    })();

  (Z.a.gtagua = ['google']),
    (function() {
      var a,
        b = {
          client_id: 1,
          client_storage: 'storage',
          cookie_name: 1,
          cookie_domain: 1,
          cookie_expires: 1,
          cookie_path: 1,
          cookie_update: 1,
          sample_rate: 1,
          site_speed_sample_rate: 1,
          use_amp_client_id: 1,
          store_gac: 1,
          conversion_linker: 'storeGac',
        },
        c = {
          anonymize_ip: 1,
          app_id: 1,
          app_installer_id: 1,
          app_name: 1,
          app_version: 1,
          campaign: {
            name: 'campaignName',
            source: 'campaignSource',
            medium: 'campaignMedium',
            term: 'campaignTerm',
            content: 'campaignContent',
            id: 'campaignId',
          },
          currency: 'currencyCode',
          description: 'exDescription',
          fatal: 'exFatal',
          language: 1,
          non_interaction: 1,
          page_hostname: 'hostname',
          page_referrer: 'referrer',
          page_path: 'page',
          page_location: 'location',
          page_title: 'title',
          screen_name: 1,
          transport_type: 'transport',
          user_id: 1,
        },
        d = {
          content_id: 1,
          event_category: 1,
          event_action: 1,
          event_label: 1,
          link_attribution: 1,
          linker: 1,
          method: 1,
          name: 1,
          send_page_view: 1,
          value: 1,
        },
        e = { cookie_name: 1, cookie_expires: 'duration', levels: 1 },
        f = {
          anonymize_ip: 1,
          fatal: 1,
          non_interaction: 1,
          use_amp_client_id: 1,
          send_page_view: 1,
          store_gac: 1,
          conversion_linker: 1,
        },
        h = function(a, b, c, d) {
          if (void 0 !== c)
            if ((f[b] && (c = rc(c)), 'anonymize_ip' != b || c || (c = void 0), 1 === a))
              d[k(b)] = c;
            else if (oc(a)) d[a] = c;
            else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
        },
        k = function(a) {
          return a && oc(a)
            ? a.replace(/(_[a-z])/g, function(a) {
                return a[1].toUpperCase();
              })
            : a;
        },
        l = function(a, b, c) {
          a.hasOwnProperty(b) || (a[b] = c);
        },
        m = function(a, e, f) {
          var k = {},
            m = {},
            n = {},
            p = og('custom_map', a);
          if (va(p))
            for (var q in p)
              if (p.hasOwnProperty(q) && /^(dimension|metric)\d+$/.test(q)) {
                var r = og(p[q], a);
                void 0 !== r && l(m, q, r);
              }
          for (var w = Jc(a, void 0), t = 0; t < w.length; ++t) {
            var H = w[t],
              M = og(H, a);
            d.hasOwnProperty(H)
              ? h(d[H], H, M, k)
              : c.hasOwnProperty(H)
              ? h(c[H], H, M, m)
              : b.hasOwnProperty(H)
              ? h(b[H], H, M, n)
              : /^(dimension|metric|content_group)\d+$/.test(H) && h(1, H, M, m);
          }
          var G = String(ic);
          l(n, 'cookieDomain', 'auto');
          l(m, 'forceSSL', !0);
          var V = 'general';
          0 <=
          Fe(
            'add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option'.split(
              ' ',
            ),
            G,
          )
            ? (V = 'ecommerce')
            : 0 <=
              Fe(
                'generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results'.split(
                  ' ',
                ),
                G,
              )
            ? (V = 'engagement')
            : 'exception' == G && (V = 'error');
          l(k, 'eventCategory', V);
          0 <= Fe(['view_item', 'view_item_list', 'view_promotion', 'view_search_results'], G) &&
            l(m, 'nonInteraction', !0);
          'login' == G || 'sign_up' == G || 'share' == G
            ? l(k, 'eventLabel', og('method', a))
            : 'search' == G || 'view_search_results' == G
            ? l(k, 'eventLabel', og('search_term', a))
            : 'select_content' == G && l(k, 'eventLabel', og('content_type', a));
          var aa = k.linker || {};
          if (aa.accept_incoming || (0 != aa.accept_incoming && aa.domains)) n.allowLinker = !0;
          !1 === og('allow_display_features', a) && (m.displayFeaturesTask = null);
          n.name = e;
          m['&gtm'] = xf(!0);
          m.hitCallback = f;
          k.L = m;
          k.Gb = n;
          return k;
        },
        n = function(a) {
          function b(a) {
            var b = y(a, void 0);
            b.list = a.list_name;
            b.listPosition = a.list_position;
            b.position = a.list_position || a.creative_slot;
            b.creative = a.creative_name;
            return b;
          }
          function c(a) {
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && c.push(b(a[d]));
            return c.length ? c : void 0;
          }
          function d(a) {
            return {
              id: e('transaction_id'),
              affiliation: e('affiliation'),
              revenue: e('value'),
              tax: e('tax'),
              shipping: e('shipping'),
              coupon: e('coupon'),
              list: e('list_name') || a,
            };
          }
          for (
            var e = function(b) {
                return Ec(b, a, void 0);
              },
              f = e('items'),
              h,
              k = 0;
            f && k < f.length && !(h = f[k].list_name);
            k++
          );
          var m = e('custom_map');
          if (va(m))
            for (k = 0; f && k < f.length; ++k) {
              var n = f[k],
                p;
              for (p in m)
                m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && l(n, p, n[m[p]]);
            }
          var q = null,
            t = ic,
            G = e('promotions');
          'purchase' == t || 'refund' == t
            ? (q = { action: t, ia: d(), ea: c(f) })
            : 'add_to_cart' == t
            ? (q = { action: 'add', ea: c(f) })
            : 'remove_from_cart' == t
            ? (q = { action: 'remove', ea: c(f) })
            : 'view_item' == t
            ? (q = {
                action: 'detail',
                ia: d(h),
                ea: c(f),
              })
            : 'view_item_list' == t
            ? (q = { action: 'impressions', od: c(f) })
            : 'view_promotion' == t
            ? (q = { action: 'promo_view', fb: c(G) })
            : 'select_content' == t && G && 0 < G.length
            ? (q = { action: 'promo_click', fb: c(G) })
            : 'select_content' == t
            ? (q = { action: 'click', ia: { list: e('list_name') || h }, ea: c(f) })
            : 'begin_checkout' == t || 'checkout_progress' == t
            ? (q = {
                action: 'checkout',
                ea: c(f),
                ia: {
                  step: 'begin_checkout' == t ? 1 : e('checkout_step'),
                  option: e('checkout_option'),
                },
              })
            : 'set_checkout_option' == t &&
              (q = {
                action: 'checkout_option',
                ia: { step: e('checkout_step'), option: e('checkout_option') },
              });
          q && (q.ke = e('currency'));
          return q;
        },
        p = {},
        q = function(a, b) {
          var c = p[a];
          p[a] = y(b, void 0);
          if (!c) return !1;
          for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
          for (d in c) if (c.hasOwnProperty(d) && c[d] !== b[d]) return !0;
          return !1;
        };
      (function(a) {
        Z.__gtagua = a;
        Z.__gtagua.b = 'gtagua';
        Z.__gtagua.g = !0;
      })(function(b) {
        var c = b.vtp_trackingId,
          d = ad(void 0),
          f = 'gtag_' + c.split('-').join('_'),
          p = function(a) {
            var b = [].slice.call(arguments, 0);
            b[0] = f + '.' + b[0];
            d.apply(window, b);
          },
          t = function() {
            var a = function(a, b) {
                for (var c = 0; b && c < b.length; c++) p(a, b[c]);
              },
              b = n(c);
            if (b) {
              var d = b.action;
              if ('impressions' == d) a('ec:addImpression', b.od);
              else if ('promo_click' == d || 'promo_view' == d) {
                var e = b.fb;
                a('ec:addPromo', b.fb);
                e && 0 < e.length && 'promo_click' == d && p('ec:setAction', d);
              } else a('ec:addProduct', b.ea), p('ec:setAction', d, b.ia);
            }
          },
          N = function() {
            var a = og('optimize_id', c);
            a && (p('require', a, { dataLayer: 'dataLayer' }), p('require', 'render'));
          },
          D = m(c, f, b.vtp_gtmOnSuccess);
        q(f, D.Gb) &&
          d(function() {
            $c() && $c().remove(f);
          });
        d('create', c, D.Gb);
        (function() {
          var a = og('custom_map', c);
          d(function() {
            if (va(a)) {
              var b = D.L,
                c = $c().getByName(f),
                d;
              for (d in a)
                if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d)) {
                  var e = c.get(k(a[d]));
                  l(b, d, e);
                }
            }
          });
        })();
        (function(a) {
          if (a) {
            var b = {};
            if (va(a)) for (var c in e) e.hasOwnProperty(c) && h(e[c], c, a[c], b);
            p('require', 'linkid', b);
          }
        })(D.linkAttribution);
        var O = D.linker;
        O && O.domains && bd(f + '.', O.domains, !!O.use_anchor, !!O.decorate_forms);
        var I = function(a, b, c) {
            c && (b = '' + b);
            D.L[a] = b;
          },
          L = ic;
        'page_view' == L
          ? (N(), p('send', 'pageview', D.L))
          : 'gtag.config' == L
          ? (N(), 0 != D.sendPageView && p('send', 'pageview', D.L))
          : 'screen_view' == L
          ? p('send', 'screenview', D.L)
          : 'timing_complete' == L
          ? (I('timingCategory', D.eventCategory, !0),
            I('timingVar', D.name, !0),
            I('timingValue', qc(D.value)),
            void 0 !== D.eventLabel && I('timingLabel', D.eventLabel, !0),
            p('send', 'timing', D.L))
          : 'exception' == L
          ? p('send', 'exception', D.L)
          : (0 <=
              Fe(
                'view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress'.split(
                  ' ',
                ),
                L,
              ) && (p('require', 'ec', 'ec.js'), t()),
            I('eventCategory', D.eventCategory, !0),
            I('eventAction', D.eventAction || L, !0),
            void 0 !== D.eventLabel && I('eventLabel', D.eventLabel, !0),
            void 0 !== D.value && I('eventValue', qc(D.value)),
            p('send', 'event', D.L));
        a ||
          ((a = !0),
          Xf(
            'https://www.google-analytics.com/analytics.js',
            function() {
              $c().loaded || b.vtp_gtmOnFailure();
            },
            b.vtp_gtmOnFailure,
          ));
      });
    })();
  var Dg = {
    macro: function(a) {
      if (ge.Pa.hasOwnProperty(a)) return ge.Pa[a];
    },
  };
  Dg.dataLayer = Dc;
  Dg.onHtmlSuccess = ge.Fb(!0);
  Dg.onHtmlFailure = ge.Fb(!1);
  Dg.callback = function(a) {
    kc.hasOwnProperty(a) && nc(kc[a]) && kc[a]();
    delete kc[a];
  };
  Dg.zc = function() {
    hc[gc.m] = Dg;
    lc = Z.a;
    Vb = Vb || ge;
    Wb = Qc;
  };
  Dg.pd = function() {
    hc = C.google_tag_manager = C.google_tag_manager || {};
    if (hc[gc.m]) {
      var a = hc.zones;
      a && a.unregisterChild(gc.m);
    } else {
      for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Kb.push(c[d]);
      for (var e = b.tags || [], f = 0; f < e.length; f++) Nb.push(e[f]);
      for (var h = b.predicates || [], k = 0; k < h.length; k++) Mb.push(h[k]);
      for (var l = b.rules || [], m = 0; m < l.length; m++) {
        for (var n = l[m], p = {}, q = 0; q < n.length; q++)
          p[n[q][0]] = Array.prototype.slice.call(n[q], 1);
        Lb.push(p);
      }
      Pb = Z;
      ze();
      Dg.zc();
      fe();
      Tc = !1;
      Uc = 0;
      if (('interactive' == F.readyState && !F.createEventObject) || 'complete' == F.readyState)
        Wc();
      else {
        Ma(F, 'DOMContentLoaded', Wc);
        Ma(F, 'readystatechange', Wc);
        if (F.createEventObject && F.documentElement.doScroll) {
          var t = !0;
          try {
            t = !C.frameElement;
          } catch (w) {}
          t && Xc();
        }
        Ma(C, 'load', Wc);
      }
      Yd = !1;
      'complete' === F.readyState ? $d() : Ma(C, 'load', $d);
      a: {
        if (!gd) break a;
        id();
        pd = 2;
        ld = void 0;
        md = {};
        jd = {};
        od = void 0;
        nd = {};
        kd = '';
        C.setInterval(id, 864e5);
        C.setInterval(rd, 1e3);
      }
    }
  };
  Dg.pd();
})();
