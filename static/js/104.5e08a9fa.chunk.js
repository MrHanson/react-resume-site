(this["webpackJsonpreact-resume-site"]=this["webpackJsonpreact-resume-site"]||[]).push([[104],{534:function(e,r,t){!function(e){"use strict";e.defineMode("tcl",(function(){function e(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}var r=e("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),t=e("if elseif else and not or eq ne in ni for foreach while switch"),n=/[+\-*&%=<>!?^\/\|]/;function a(e,r,t){return r.tokenize=t,t(e,r)}function o(e,o){var c=o.beforeParams;o.beforeParams=!1;var u=e.next();if('"'!=u&&"'"!=u||!o.inParams){if(/[\[\]{}\(\),;\.]/.test(u))return"("==u&&c?o.inParams=!0:")"==u&&(o.inParams=!1),null;if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if("#"==u)return e.eat("*")?a(e,o,s):"#"==u&&e.match(/ *\[ *\[/)?a(e,o,l):(e.skipToEnd(),"comment");if('"'==u)return e.skipTo(/"/),"comment";if("$"==u)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),o.beforeParams=!0,"builtin";if(n.test(u))return e.eatWhile(n),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var f=e.current().toLowerCase();return r&&r.propertyIsEnumerable(f)?"keyword":t&&t.propertyIsEnumerable(f)?(o.beforeParams=!0,"keyword"):null}return a(e,o,i(u))}function i(e){return function(r,t){for(var n,a=!1,i=!1;null!=(n=r.next());){if(n==e&&!a){i=!0;break}a=!a&&"\\"==n}return i&&(t.tokenize=o),"string"}}function s(e,r){for(var t,n=!1;t=e.next();){if("#"==t&&n){r.tokenize=o;break}n="*"==t}return"comment"}function l(e,r){for(var t,n=0;t=e.next();){if("#"==t&&2==n){r.tokenize=o;break}"]"==t?n++:" "!=t&&(n=0)}return"meta"}return{startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},lineComment:"#"}})),e.defineMIME("text/x-tcl","tcl")}(t(90))}}]);
//# sourceMappingURL=104.5e08a9fa.chunk.js.map