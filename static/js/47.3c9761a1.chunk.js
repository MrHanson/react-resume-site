(this["webpackJsonpreact-resume-site"]=this["webpackJsonpreact-resume-site"]||[]).push([[47],{470:function(e,t,a){!function(e){"use strict";e.defineMode("ebnf",(function(t){var a={slash:0,parenthesis:1},c={comment:0,_string:1,characterClass:2},r=null;return t.bracesMode&&(r=e.getMode(t,t.bracesMode)),{startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(t,n){if(t){switch(0===n.stack.length&&('"'==t.peek()||"'"==t.peek()?(n.stringType=t.peek(),t.next(),n.stack.unshift(c._string)):t.match(/^\/\*/)?(n.stack.unshift(c.comment),n.commentType=a.slash):t.match(/^\(\*/)&&(n.stack.unshift(c.comment),n.commentType=a.parenthesis)),n.stack[0]){case c._string:for(;n.stack[0]===c._string&&!t.eol();)t.peek()===n.stringType?(t.next(),n.stack.shift()):"\\"===t.peek()?(t.next(),t.next()):t.match(/^.[^\\\"\']*/);return n.lhs?"property string":"string";case c.comment:for(;n.stack[0]===c.comment&&!t.eol();)n.commentType===a.slash&&t.match(/\*\//)||n.commentType===a.parenthesis&&t.match(/\*\)/)?(n.stack.shift(),n.commentType=null):t.match(/^.[^\*]*/);return"comment";case c.characterClass:for(;n.stack[0]===c.characterClass&&!t.eol();)t.match(/^[^\]\\]+/)||t.match(/^\\./)||n.stack.shift();return"operator"}var s=t.peek();if(null!==r&&(n.braced||"{"===s)){null===n.localState&&(n.localState=e.startState(r));var i=r.token(t,n.localState),m=t.current();if(!i)for(var h=0;h<m.length;h++)"{"===m[h]?(0===n.braced&&(i="matchingbracket"),n.braced++):"}"===m[h]&&(n.braced--,0===n.braced&&(i="matchingbracket"));return i}switch(s){case"[":return t.next(),n.stack.unshift(c.characterClass),"bracket";case":":case"|":case";":return t.next(),"operator";case"%":if(t.match("%%"))return"header";if(t.match(/[%][A-Za-z]+/))return"keyword";if(t.match(/[%][}]/))return"matchingbracket";break;case"/":if(t.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(t.match(/[\][a-z]+/))return"string-2";case".":if(t.match("."))return"atom";case"*":case"-":case"+":case"^":if(t.match(s))return"atom";case"$":if(t.match("$$"))return"builtin";if(t.match(/[$][0-9]+/))return"variable-3";case"<":if(t.match(/<<[a-zA-Z_]+>>/))return"builtin"}return t.match(/^\/\//)?(t.skipToEnd(),"comment"):t.match(/return/)?"operator":t.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?t.match(/(?=[\(.])/)?"variable":t.match(/(?=[\s\n]*[:=])/)?"def":"variable-2":-1!=["[","]","(",")"].indexOf(t.peek())?(t.next(),"bracket"):(t.eatSpace()||t.next(),null)}}}})),e.defineMIME("text/x-ebnf","ebnf")}(a(90))}}]);
//# sourceMappingURL=47.3c9761a1.chunk.js.map