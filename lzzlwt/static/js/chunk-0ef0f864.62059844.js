(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0ef0f864"],{1173:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"24c5":function(t,e,n){"use strict";function r(){}function o(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e}function i(t,e){if(!t._n){t._n=!0;var n=t._c;b(function(){for(var r=t._v,i=1==t._s,c=0,a=function(e){var n,c,a,s=i?e.ok:e.fail,u=e.resolve,f=e.reject,h=e.domain;try{s?(i||(2==t._h&&C(t),t._h=1),!0===s?n=r:(h&&h.enter(),n=s(r),h&&(h.exit(),a=!0)),n===e.promise?f(O("Promise-chain cycle")):(c=o(n))?c.call(n,u,f):u(n)):f(r)}catch(e){h&&!a&&h.exit(),f(e)}};n.length>c;)a(n[c++]);t._c=[],t._n=!1,e&&!t._h&&M(t)})}}function c(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),i(e,!0))}var a,s,u,f,h=n("b8e3"),l=n("e53d"),v=n("d864"),p=n("40c3"),d=n("63b6"),y=n("f772"),m=n("79aa"),g=n("1173"),w=n("a22a"),_=n("f201"),x=n("4178").set,b=n("aba2")(),E=n("656e"),L=n("4439"),j=n("bc13"),P=n("cd78"),k="Promise",O=l.TypeError,T=l.process,S=T&&T.versions,R=S&&S.v8||"",F=l[k],N="process"==p(T),G=s=E.f,A=!!function(){try{var t=F.resolve(1),e=(t.constructor={})[n("5168")("species")]=function(t){t(r,r)};return(N||"function"==typeof PromiseRejectionEvent)&&t.then(r)instanceof e&&0!==R.indexOf("6.6")&&-1===j.indexOf("Chrome/66")}catch(t){}}(),M=function(t){x.call(l,function(){var e,n,r,o=t._v,i=I(t);if(i&&(e=L(function(){N?T.emit("unhandledRejection",o,t):(n=l.onunhandledrejection)?n({promise:t,reason:o}):(r=l.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=N||I(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},C=function(t){x.call(l,function(){var e;N?T.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})})},B=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw O("Promise can't be resolved itself");(e=o(t))?b(function(){var r={_w:n,_d:!1};try{e.call(t,v(B,r,1),v(c,r,1))}catch(t){c.call(r,t)}}):(n._v=t,n._s=1,i(n,!1))}catch(t){c.call({_w:n,_d:!1},t)}}};A||(F=function(t){g(this,F,k,"_h"),m(t),a.call(this);try{t(v(B,this,1),v(c,this,1))}catch(t){c.call(this,t)}},(a=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n("5c95")(F.prototype,{then:function(t,e){var n=G(_(this,F));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=N?T.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&i(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),u=function(){var t=new a;this.promise=t,this.resolve=v(B,t,1),this.reject=v(c,t,1)},E.f=G=function(t){return t===F||t===f?new u(t):s(t)}),d(d.G+d.W+d.F*!A,{Promise:F}),n("45f2")(F,k),n("4c95")(k),f=n("584a")[k],d(d.S+d.F*!A,k,{reject:function(t){var e=G(this);return(0,e.reject)(t),e.promise}}),d(d.S+d.F*(h||!A),k,{resolve:function(t){return P(h&&this===f?F:this,t)}}),d(d.S+d.F*!(A&&n("4ee1")(function(t){F.all(t).catch(r)})),k,{all:function(t){var e=this,n=G(e),r=n.resolve,o=n.reject,i=L(function(){var n=[],i=0,c=1;w(t,!1,function(t){var a=i++,s=!1;n.push(void 0),c++,e.resolve(t).then(function(t){s||(s=!0,n[a]=t,--c||r(n))},o)}),--c||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=G(e),r=n.reject,o=L(function(){w(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},3024:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"36c36":function(t,e,n){"use strict";n.r(e),n("96cf");var r=n("795b"),o=n.n(r);function i(t,e,n,r,i,c,a){try{var s=t[c](a),u=s.value}catch(t){return void n(t)}s.done?e(u):o.a.resolve(u).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new o.a(function(r,o){var c=t.apply(e,n);function a(t){i(c,r,o,a,s,"next",t)}function s(t){i(c,r,o,a,s,"throw",t)}a(void 0)})}}var a,s,u={name:"saoyisao",data:function(){return{}},computed:{},mounted:function(){this.test(),this.takeLongTime().then(function(t){})},methods:{getSomething:function(){return"something"},testAsync:(s=c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve("hello async"));case 1:case"end":return t.stop()}},t)})),function(){return s.apply(this,arguments)}),test:(a=c(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getSomething();case 2:return t.sent,t.next=5,this.testAsync();case 5:t.sent;case 7:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),takeLongTime:function(){return new Promise(function(t){setTimeout(function(){return t("long_time_value")},1e3)})}}},f=n("2877"),h=Object(f.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n    sadasdasdasdasdasdasd\n")])},[],!1,null,"2b2cbdfd",null);e.default=h.exports},"3c11":function(t,e,n){"use strict";var r=n("63b6"),o=n("584a"),i=n("e53d"),c=n("f201"),a=n("cd78");r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},4178:function(t,e,n){function r(){var t=+this;if(w.hasOwnProperty(t)){var e=w[t];delete w[t],e()}}function o(t){r.call(t.data)}var i,c,a,s=n("d864"),u=n("3024"),f=n("32fc"),h=n("1ec9"),l=n("e53d"),v=l.process,p=l.setImmediate,d=l.clearImmediate,y=l.MessageChannel,m=l.Dispatch,g=0,w={},_="onreadystatechange";p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return w[++g]=function(){u("function"==typeof t?t:Function(t),e)},i(g),g},d=function(t){delete w[t]},"process"==n("6b4c")(v)?i=function(t){v.nextTick(s(r,t,1))}:m&&m.now?i=function(t){m.now(s(r,t,1))}:y?(a=(c=new y).port2,c.port1.onmessage=o,i=s(a.postMessage,a,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(i=function(t){l.postMessage(t+"","*")},l.addEventListener("message",o,!1)):i=_ in h("script")?function(t){f.appendChild(h("script"))[_]=function(){f.removeChild(this),r.call(t)}}:function(t){setTimeout(s(r,t,1),0)}),t.exports={set:p,clear:d}},"43fc":function(t,e,n){"use strict";var r=n("63b6"),o=n("656e"),i=n("4439");r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},"4c95":function(t,e,n){"use strict";var r=n("e53d"),o=n("584a"),i=n("d9f6"),c=n("8e60"),a=n("5168")("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];c&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},"5c95":function(t,e,n){var r=n("35e8");t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},"656e":function(t,e,n){"use strict";var r=n("79aa");function o(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new o(t)}},"696e":function(t,e,n){n("c207"),n("1654"),n("6c1c"),n("24c5"),n("3c11"),n("43fc"),t.exports=n("584a").Promise},"795b":function(t,e,n){t.exports=n("696e")},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new k(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===l)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return T()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=L(c,n);if(a){if(a===p)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?v:h,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,c),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",l="executing",v="completed",p={};function d(){}function y(){}function m(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(O([])));_&&_!==n&&r.call(_,i)&&(g=_);var x=m.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,c){var a=u(t[n],t,o);if("throw"!==a.type){var s=a.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,c)},function(t){e("throw",t,i,c)}):Promise.resolve(f).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,c)})}c(a.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:T}}function T(){return{value:e,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[a]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(E.prototype),E.prototype[c]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,o){var i=new E(s(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(x),x[a]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},a22a:function(t,e,n){var r=n("d864"),o=n("b0dc"),i=n("3702"),c=n("e4ae"),a=n("b447"),s=n("7cd6"),u={},f={};(e=t.exports=function(t,e,n,h,l){var v,p,d,y,m=l?function(){return t}:s(t),g=r(n,h,e?2:1),w=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(v=a(t.length);w<v;w++)if((y=e?g(c(p=t[w])[0],p[1]):g(t[w]))===u||y===f)return y}else for(d=m.call(t);!(p=d.next()).done;)if((y=o(d,g,p.value,e))===u||y===f)return y}).BREAK=u,e.RETURN=f},aba2:function(t,e,n){var r=n("e53d"),o=n("4178").set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,a=r.Promise,s="process"==n("6b4c")(c);t.exports=function(){function t(){var t,r;for(s&&(t=c.domain)&&t.exit();e;){r=e.fn,e=e.next;try{r()}catch(t){throw e?u():n=void 0,t}}n=void 0,t&&t.enter()}var e,n,u;if(s)u=function(){c.nextTick(t)};else if(!i||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);u=function(){f.then(t)}}else u=function(){o.call(r,t)};else{var h=!0,l=document.createTextNode("");new i(t).observe(l,{characterData:!0}),u=function(){l.data=h=!h}}return function(t){var r={fn:t,next:void 0};n&&(n.next=r),e||(e=r,u()),n=r}}},bc13:function(t,e,n){var r=n("e53d").navigator;t.exports=r&&r.userAgent||""},cd78:function(t,e,n){var r=n("e4ae"),o=n("f772"),i=n("656e");t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},f201:function(t,e,n){var r=n("e4ae"),o=n("79aa"),i=n("5168")("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}}}]);