(this["webpackJsonpreact-resume-site"]=this["webpackJsonpreact-resume-site"]||[]).push([[50],{473:function(e,t,r){!function(e){"use strict";e.defineMode("elm",(function(){function e(e,t,r){return t(r),r(e,t)}var t=/[a-z]/,r=/[A-Z]/,n=/[a-zA-Z0-9_]/,i=/[0-9]/,o=/[0-9A-Fa-f]/,u=/[-&*+.\\/<>=?^|:]/,a=/[(),[\]{}]/,f=/[ \v\f]/;function s(){return function(s,x){if(s.eatWhile(f))return null;var k=s.next();if(a.test(k))return"{"===k&&s.eat("-")?e(s,x,c(1)):"["===k&&s.match("glsl|")?e(s,x,h):"builtin";if("'"===k)return e(s,x,m);if('"'===k)return s.eat('"')?s.eat('"')?e(s,x,l):"string":e(s,x,p);if(r.test(k))return s.eatWhile(n),"variable-2";if(t.test(k)){var d=1===s.pos;return s.eatWhile(n),d?"def":"variable"}if(i.test(k)){if("0"===k){if(s.eat(/[xX]/))return s.eatWhile(o),"number"}else s.eatWhile(i);return s.eat(".")&&s.eatWhile(i),s.eat(/[eE]/)&&(s.eat(/[-+]/),s.eatWhile(i)),"number"}return u.test(k)?"-"===k&&s.eat("-")?(s.skipToEnd(),"comment"):(s.eatWhile(u),"keyword"):"_"===k?"keyword":"error"}}function c(e){return 0==e?s():function(t,r){for(;!t.eol();){var n=t.next();if("{"==n&&t.eat("-"))++e;else if("-"==n&&t.eat("}")&&0===--e)return r(s()),"comment"}return r(c(e)),"comment"}}function l(e,t){for(;!e.eol();)if('"'===e.next()&&e.eat('"')&&e.eat('"'))return t(s()),"string";return"string"}function p(e,t){for(;e.skipTo('\\"');)e.next(),e.next();return e.skipTo('"')?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function m(e,t){for(;e.skipTo("\\'");)e.next(),e.next();return e.skipTo("'")?(e.next(),t(s()),"string"):(e.skipToEnd(),t(s()),"error")}function h(e,t){for(;!e.eol();)if("|"===e.next()&&e.eat("]"))return t(s()),"string";return"string"}var x={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};return{startState:function(){return{f:s()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return x.hasOwnProperty(n)?"keyword":r}}})),e.defineMIME("text/x-elm","elm")}(r(90))}}]);
//# sourceMappingURL=50.6a8f72ce.chunk.js.map