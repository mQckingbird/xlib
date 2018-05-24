
;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


!(function(root) {

    function Grapnel(opts) {
        "use strict";

        var self = this; // Scope reference
        this.events = {}; // Event Listeners
        this.state = null; // Router state object
        this.options = opts || {}; // Options
        this.options.env = this.options.env || (!!(Object.keys(root).length === 0 && process && process.browser !== true) ? 'server' : 'client');
        this.options.mode = this.options.mode || (!!(this.options.env !== 'server' && this.options.pushState && root.history && root.history.pushState) ? 'pushState' : 'hashchange');
        this.version = '0.6.4'; // Version

        if ('function' === typeof root.addEventListener) {
            root.addEventListener('hashchange', function() {
                self.trigger('hashchange');
            });

            root.addEventListener('popstate', function(e) {
                // Make sure popstate doesn't run on init -- this is a common issue with Safari and old versions of Chrome
                if (self.state && self.state.previousState === null) return false;

                self.trigger('navigate');
            });
        }

        return this;
    };
    /**
     * Create a RegExp Route from a string
     * This is the heart of the router and I've made it as small as possible!
     *
     * @param {String} Path of route
     * @param {Array} Array of keys to fill
     * @param {Bool} Case sensitive comparison
     * @param {Bool} Strict mode
     */
    Grapnel.regexRoute = function(path, keys, sensitive, strict) {
        if (path instanceof RegExp) return path;
        if (path instanceof Array) path = '(' + path.join('|') + ')';
        // Build route RegExp
        path = path.concat(strict ? '' : '/?')
            .replace(/\/\(/g, '(?:/')
            .replace(/\+/g, '__plus__')
            .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(_, slash, format, key, capture, optional) {
                keys.push({
                    name: key,
                    optional: !!optional
                });
                slash = slash || '';

                return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || (format && '([^/.]+?)' || '([^/]+?)')) + ')' + (optional || '');
            })
            .replace(/([\/.])/g, '\\$1')
            .replace(/__plus__/g, '(.+)')
            .replace(/\*/g, '(.*)');

        return new RegExp('^' + path + '$', sensitive ? '' : 'i');
    };
    /**
     * ForEach workaround utility
     *
     * @param {Array} to iterate
     * @param {Function} callback
     */
    Grapnel._forEach = function(a, callback) {
        if (typeof Array.prototype.forEach === 'function') return Array.prototype.forEach.call(a, callback);
        // Replicate forEach()
        return function(c, next) {
            for (var i = 0, n = this.length; i < n; ++i) {
                c.call(next, this[i], i, this);
            }
        }.call(a, callback);
    };
    /**
     * Add an route and handler
     *
     * @param {String|RegExp} route name
     * @return {self} Router
     */
    Grapnel.prototype.get = Grapnel.prototype.add = function(route) {
        var self = this,
            middleware = Array.prototype.slice.call(arguments, 1, -1),
            handler = Array.prototype.slice.call(arguments, -1)[0],
            request = new Request(route);

        var invoke = function RouteHandler() {
            // Build request parameters
            var req = request.parse(self.path());
            // Check if matches are found
            if (req.match) {
                // Match found
                var extra = {
                    route: route,
                    params: req.params,
                    req: req,
                    regex: req.match
                };
                // Create call stack -- add middleware first, then handler
                var stack = new CallStack(self, extra).enqueue(middleware.concat(handler));
                // Trigger main event
                self.trigger('match', stack, req);
                // Continue?
                if (!stack.runCallback) return self;
                // Previous state becomes current state
                stack.previousState = self.state;
                // Save new state
                self.state = stack;
                // Prevent this handler from being called if parent handler in stack has instructed not to propagate any more events
                if (stack.parent() && stack.parent().propagateEvent === false) {
                    stack.propagateEvent = false;
                    return self;
                }
                // Call handler
                stack.callback();
            }
            // Returns self
            return self;
        };
        // Event name
        var eventName = (self.options.mode !== 'pushState' && self.options.env !== 'server') ? 'hashchange' : 'navigate';
        // Invoke when route is defined, and once again when app navigates
        return invoke().on(eventName, invoke);
    };
    /**
     * Fire an event listener
     *
     * @param {String} event name
     * @param {Mixed} [attributes] Parameters that will be applied to event handler
     * @return {self} Router
     */
    Grapnel.prototype.trigger = function(event) {
        var self = this,
            params = Array.prototype.slice.call(arguments, 1);
        // Call matching events
        if (this.events[event]) {
            Grapnel._forEach(this.events[event], function(fn) {
                fn.apply(self, params);
            });
        }

        return this;
    };
    /**
     * Add an event listener
     *
     * @param {String} event name (multiple events can be called when separated by a space " ")
     * @param {Function} callback
     * @return {self} Router
     */
    Grapnel.prototype.on = Grapnel.prototype.bind = function(event, handler) {
        var self = this,
            events = event.split(' ');

        Grapnel._forEach(events, function(event) {
            if (self.events[event]) {
                self.events[event].push(handler);
            } else {
                self.events[event] = [handler];
            }
        });

        return this;
    };
    /**
     * Allow event to be called only once
     *
     * @param {String} event name(s)
     * @param {Function} callback
     * @return {self} Router
     */
    Grapnel.prototype.once = function(event, handler) {
        var ran = false;

        return this.on(event, function() {
            if (ran) return false;
            ran = true;
            handler.apply(this, arguments);
            handler = null;
            return true;
        });
    };
    /**
     * @param {String} Route context (without trailing slash)
     * @param {[Function]} Middleware (optional)
     * @return {Function} Adds route to context
     */
    Grapnel.prototype.context = function(context) {
        var self = this,
            middleware = Array.prototype.slice.call(arguments, 1);

        return function() {
            var value = arguments[0],
                submiddleware = (arguments.length > 2) ? Array.prototype.slice.call(arguments, 1, -1) : [],
                handler = Array.prototype.slice.call(arguments, -1)[0],
                prefix = (context.slice(-1) !== '/' && value !== '/' && value !== '') ? context + '/' : context,
                path = (value.substr(0, 1) !== '/') ? value : value.substr(1),
                pattern = prefix + path;

            return self.add.apply(self, [pattern].concat(middleware).concat(submiddleware).concat([handler]));
        }
    };
    /**
     * Navigate through history API
     *
     * @param {String} Pathname
     * @return {self} Router
     */
    Grapnel.prototype.navigate = function(path) {
        return this.path(path).trigger('navigate');
    };

    Grapnel.prototype.path = function(pathname) {
        var self = this,
            frag;

        if ('string' === typeof pathname) {
            // Set path
            if (self.options.mode === 'pushState') {
                frag = (self.options.root) ? (self.options.root + pathname) : pathname;
                root.history.pushState({}, null, frag);
            } else if (root.location) {
                root.location.hash = (self.options.hashBang ? '!' : '') + pathname;
            } else {
                root._pathname = pathname || '';
            }

            return this;
        } else if ('undefined' === typeof pathname) {
            // Get path
            if (self.options.mode === 'pushState') {
                frag = root.location.pathname.replace(self.options.root, '');
            } else if (self.options.mode !== 'pushState' && root.location) {
                frag = (root.location.hash) ? root.location.hash.split((self.options.hashBang ? '#!' : '#'))[1] : '';
            } else {
                frag = root._pathname || '';
            }

            return frag;
        } else if (pathname === false) {
            // Clear path
            if (self.options.mode === 'pushState') {
                root.history.pushState({}, null, self.options.root || '/');
            } else if (root.location) {
                root.location.hash = (self.options.hashBang) ? '!' : '';
            }

            return self;
        }
    };
    /**
     * Create routes based on an object
     *
     * @param {Object} [Options, Routes]
     * @param {Object Routes}
     * @return {self} Router
     */
    Grapnel.listen = function() {
        var opts, routes;
        if (arguments[0] && arguments[1]) {
            opts = arguments[0];
            routes = arguments[1];
        } else {
            routes = arguments[0];
        }
        // Return a new Grapnel instance
        return (function() {
            // TODO: Accept multi-level routes
            for (var key in routes) {
                this.add.call(this, key, routes[key]);
            }

            return this;
        }).call(new Grapnel(opts || {}));
    };
    /**
     * Create a call stack that can be enqueued by handlers and middleware
     *
     * @param {Object} Router
     * @param {Object} Extend
     * @return {self} CallStack
     */
    function CallStack(router, extendObj) {
        this.stack = CallStack.global.slice(0);
        this.router = router;
        this.runCallback = true;
        this.callbackRan = false;
        this.propagateEvent = true;
        this.value = router.path();

        for (var key in extendObj) {
            this[key] = extendObj[key];
        }

        return this;
    };
    /**
     * Build request parameters and allow them to be checked against a string (usually the current path)
     *
     * @param {String} Route
     * @return {self} Request 
     */
    function Request(route) {
        this.route = route;
        this.keys = [];
        this.regex = Grapnel.regexRoute(route, this.keys);
    };
    // This allows global middleware
    CallStack.global = [];
    /**
     * Prevent a callback from being called
     *
     * @return {self} CallStack 
     */
    CallStack.prototype.preventDefault = function() {
        this.runCallback = false;
    };
    /**
     * Prevent any future callbacks from being called
     *
     * @return {self} CallStack 
     */
    CallStack.prototype.stopPropagation = function() {
        this.propagateEvent = false;
    };
    /**
     * Get parent state
     *
     * @return {Object} Previous state 
     */
    CallStack.prototype.parent = function() {
        var hasParentEvents = !!(this.previousState && this.previousState.value && this.previousState.value == this.value);
        return (hasParentEvents) ? this.previousState : false;
    };
    /**
     * Run a callback (calls to next)
     *
     * @return {self} CallStack 
     */
    CallStack.prototype.callback = function() {
        this.callbackRan = true;
        this.timeStamp = Date.now();
        this.next();
    };
    /**
     * Add handler or middleware to the stack
     *
     * @param {Function|Array} Handler or a array of handlers
     * @param {Int} Index to start inserting
     * @return {self} CallStack 
     */
    CallStack.prototype.enqueue = function(handler, atIndex) {
        var handlers = (!Array.isArray(handler)) ? [handler] : ((atIndex < handler.length) ? handler.reverse() : handler);

        while (handlers.length) {
            this.stack.splice(atIndex || this.stack.length + 1, 0, handlers.shift());
        }

        return this;
    };
    /**
     * Call to next item in stack -- this adds the `req`, `event`, and `next()` arguments to all middleware
     *
     * @return {self} CallStack 
     */
    CallStack.prototype.next = function() {
        var self = this;

        return this.stack.shift().call(this.router, this.req, this, function next() {
            self.next.call(self);
        });
    };
    /**
     * Match a path string -- returns a request object if there is a match -- returns false otherwise
     *
     * @return {Object} req
     */
    Request.prototype.parse = function(path) {
        var match = path.match(this.regex),
            self = this;

        var req = {
            params: {},
            keys: this.keys,
            matches: (match || []).slice(1),
            match: match
        };
        // Build parameters
        Grapnel._forEach(req.matches, function(value, i) {
            var key = (self.keys[i] && self.keys[i].name) ? self.keys[i].name : i;
            // Parameter key will be its key or the iteration index. This is useful if a wildcard (*) is matched
            req.params[key] = (value) ? decodeURIComponent(value) : undefined;
        });

        return req;
    };

    // Append utility constructors to Grapnel
    Grapnel.CallStack = CallStack;
    Grapnel.Request = Request;

    if ('function' === typeof root.define && !root.define.amd.grapnel) {
        root.define(function(require, exports, module) {
            root.define.amd.grapnel = true;
            return Grapnel;
        });
    } else if ('object' === typeof module && 'object' === typeof module.exports) {
        module.exports = exports = Grapnel;
    } else {
        root.Grapnel = Grapnel;
    }

}).call({}, ('object' === typeof window) ? window : this);
/*

var router = new Grapnel({ pushState : true, hashBang : true });

router.get('/products/:category/:id?', function(req){
    var id = req.params.id,
        category = req.params.category

    console.log(category, id);
});

router.get('/tiempo', function(req){
    console.log("tiempo!");
     $("#matikbirdpath").load("views/rooms.html", function(res){
                console.log(res);
                console.log("hola");
            });
});
router.get('/', function(req){
    console.log(req.user);
    console.log("hola!");
    $("#matikbirdpath").load("views/rooms.html", function(res){
                console.log(res);
                console.log("hola");
            });
});

router.navigate('/');
*/
