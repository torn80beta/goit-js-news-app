function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},r={},s=t.parcelRequired7c6;function o(e,t){return function(){return e.apply(t,arguments)}}null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("cxTnx",(function(e,t){e.exports=function(){var t,n;function i(){return t.apply(null,arguments)}function r(e){t=e}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function o(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(a(e,t))return!1;return!0}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function u(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){var n,i=[],r=e.length;for(n=0;n<r;++n)i.push(t(e[n],n));return i}function f(e,t){for(var n in t)a(t,n)&&(e[n]=t[n]);return a(t,"toString")&&(e.toString=t.toString),a(t,"valueOf")&&(e.valueOf=t.valueOf),e}function p(e,t,n,i){return qn(e,t,n,i,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function g(e){return null==e._pf&&(e._pf=m()),e._pf}function y(e){if(null==e._isValid){var t=g(e),i=n.call(t.parsedDateParts,(function(e){return null!=e})),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&i);if(e._strict&&(r=r&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return r;e._isValid=r}return e._isValid}function v(e){var t=p(NaN);return null!=e?f(g(t),e):g(t).userInvalidated=!0,t}n=Array.prototype.some?Array.prototype.some:function(e){var t,n=Object(this),i=n.length>>>0;for(t=0;t<i;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};var _=i.momentProperties=[],w=!1;function b(e,t){var n,i,r,s=_.length;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)l(r=t[i=_[n]])||(e[i]=r);return e}function D(e){b(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===w&&(w=!0,i.updateOffset(this),w=!1)}function S(e){return e instanceof D||null!=e&&null!=e._isAMomentObject}function k(e){!1===i.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function E(e,t){var n=!0;return f((function(){if(null!=i.deprecationHandler&&i.deprecationHandler(null,e),n){var r,s,o,c=[],l=arguments.length;for(s=0;s<l;s++){if(r="","object"==typeof arguments[s]){for(o in r+="\n["+s+"] ",arguments[0])a(arguments[0],o)&&(r+=o+": "+arguments[0][o]+", ");r=r.slice(0,-2)}else r=arguments[s];c.push(r)}k(e+"\nArguments: "+Array.prototype.slice.call(c).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)}),t)}var T,I={};function O(e,t){null!=i.deprecationHandler&&i.deprecationHandler(e,t),I[e]||(k(t),I[e]=!0)}function C(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function M(e){var t,n;for(n in e)a(e,n)&&(C(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function R(e,t){var n,i=f({},e);for(n in t)a(t,n)&&(o(e[n])&&o(t[n])?(i[n]={},f(i[n],e[n]),f(i[n],t[n])):null!=t[n]?i[n]=t[n]:delete i[n]);for(n in e)a(e,n)&&!a(t,n)&&o(e[n])&&(i[n]=f({},i[n]));return i}function A(e){null!=e&&this.set(e)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null,T=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)a(e,t)&&n.push(t);return n};var N={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function P(e,t,n){var i=this._calendar[e]||this._calendar.sameElse;return C(i)?i.call(t,n):i}function L(e,t,n){var i=""+Math.abs(e),r=t-i.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}var x=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,F={},$={};function B(e,t,n,i){var r=i;"string"==typeof i&&(r=function(){return this[i]()}),e&&($[e]=r),t&&($[t[0]]=function(){return L(r.apply(this,arguments),t[1],t[2])}),n&&($[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)})}function H(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function j(e){var t,n,i=e.match(x);for(t=0,n=i.length;t<n;t++)$[i[t]]?i[t]=$[i[t]]:i[t]=H(i[t]);return function(t){var r,s="";for(r=0;r<n;r++)s+=C(i[r])?i[r].call(t,e):i[r];return s}}function V(e,t){return e.isValid()?(t=Y(t,e.localeData()),F[t]=F[t]||j(t),F[t](e)):e.localeData().invalidDate()}function Y(e,t){var n=5;function i(e){return t.longDateFormat(e)||e}for(U.lastIndex=0;n>=0&&U.test(e);)e=e.replace(U,i),U.lastIndex=0,n-=1;return e}var W={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function z(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(x).map((function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e})).join(""),this._longDateFormat[e])}var G="Invalid date";function q(){return this._invalidDate}var K="%d",J=/\d{1,2}/;function Z(e){return this._ordinal.replace("%d",e)}var Q={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function X(e,t,n,i){var r=this._relativeTime[n];return C(r)?r(e,t,n,i):r.replace(/%d/i,e)}function ee(e,t){var n=this._relativeTime[e>0?"future":"past"];return C(n)?n(t):n.replace(/%s/i,t)}var te={};function ne(e,t){var n=e.toLowerCase();te[n]=te[n+"s"]=te[t]=e}function ie(e){return"string"==typeof e?te[e]||te[e.toLowerCase()]:void 0}function re(e){var t,n,i={};for(n in e)a(e,n)&&(t=ie(n))&&(i[t]=e[n]);return i}var se={};function oe(e,t){se[e]=t}function ae(e){var t,n=[];for(t in e)a(e,t)&&n.push({unit:t,priority:se[t]});return n.sort((function(e,t){return e.priority-t.priority})),n}function ce(e){return e%4==0&&e%100!=0||e%400==0}function le(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function he(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=le(t)),n}function ue(e,t){return function(n){return null!=n?(fe(this,e,n),i.updateOffset(this,t),this):de(this,e)}}function de(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function fe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ce(e.year())&&1===e.month()&&29===e.date()?(n=he(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Xe(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function pe(e){return C(this[e=ie(e)])?this[e]():this}function me(e,t){if("object"==typeof e){var n,i=ae(e=re(e)),r=i.length;for(n=0;n<r;n++)this[i[n].unit](e[i[n].unit])}else if(C(this[e=ie(e)]))return this[e](t);return this}var ge,ye=/\d/,ve=/\d\d/,_e=/\d{3}/,we=/\d{4}/,be=/[+-]?\d{6}/,De=/\d\d?/,Se=/\d\d\d\d?/,ke=/\d\d\d\d\d\d?/,Ee=/\d{1,3}/,Te=/\d{1,4}/,Ie=/[+-]?\d{1,6}/,Oe=/\d+/,Ce=/[+-]?\d+/,Me=/Z|[+-]\d\d:?\d\d/gi,Re=/Z|[+-]\d\d(?::?\d\d)?/gi,Ae=/[+-]?\d+(\.\d{1,3})?/,Ne=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function Pe(e,t,n){ge[e]=C(t)?t:function(e,i){return e&&n?n:t}}function Le(e,t){return a(ge,e)?ge[e](t._strict,t._locale):new RegExp(xe(e))}function xe(e){return Ue(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,n,i,r){return t||n||i||r})))}function Ue(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}ge={};var Fe={};function $e(e,t){var n,i,r=t;for("string"==typeof e&&(e=[e]),h(t)&&(r=function(e,n){n[t]=he(e)}),i=e.length,n=0;n<i;n++)Fe[e[n]]=r}function Be(e,t){$e(e,(function(e,n,i,r){i._w=i._w||{},t(e,i._w,i,r)}))}function He(e,t,n){null!=t&&a(Fe,e)&&Fe[e](t,n._a,n,e)}var je,Ve=0,Ye=1,We=2,ze=3,Ge=4,qe=5,Ke=6,Je=7,Ze=8;function Qe(e,t){return(e%t+t)%t}function Xe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Qe(t,12);return e+=(t-n)/12,1===n?ce(e)?29:28:31-n%7%2}je=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},B("M",["MM",2],"Mo",(function(){return this.month()+1})),B("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)})),B("MMMM",0,0,(function(e){return this.localeData().months(this,e)})),ne("month","M"),oe("month",8),Pe("M",De),Pe("MM",De,ve),Pe("MMM",(function(e,t){return t.monthsShortRegex(e)})),Pe("MMMM",(function(e,t){return t.monthsRegex(e)})),$e(["M","MM"],(function(e,t){t[Ye]=he(e)-1})),$e(["MMM","MMMM"],(function(e,t,n,i){var r=n._locale.monthsParse(e,i,n._strict);null!=r?t[Ye]=r:g(n).invalidMonth=e}));var et="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),tt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),nt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,it=Ne,rt=Ne;function st(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||nt).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone}function ot(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[nt.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function at(e,t,n){var i,r,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)s=p([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(s,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(r=je.call(this._shortMonthsParse,o))?r:null:-1!==(r=je.call(this._longMonthsParse,o))?r:null:"MMM"===t?-1!==(r=je.call(this._shortMonthsParse,o))||-1!==(r=je.call(this._longMonthsParse,o))?r:null:-1!==(r=je.call(this._longMonthsParse,o))||-1!==(r=je.call(this._shortMonthsParse,o))?r:null}function ct(e,t,n){var i,r,s;if(this._monthsParseExact)return at.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(r=p([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(s="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[i]=new RegExp(s.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[i].test(e))return i;if(n&&"MMM"===t&&this._shortMonthsParse[i].test(e))return i;if(!n&&this._monthsParse[i].test(e))return i}}function lt(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=he(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Xe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function ht(e){return null!=e?(lt(this,e),i.updateOffset(this,!0),this):de(this,"Month")}function ut(){return Xe(this.year(),this.month())}function dt(e){return this._monthsParseExact?(a(this,"_monthsRegex")||pt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=it),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ft(e){return this._monthsParseExact?(a(this,"_monthsRegex")||pt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=rt),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function pt(){function e(e,t){return t.length-e.length}var t,n,i=[],r=[],s=[];for(t=0;t<12;t++)n=p([2e3,t]),i.push(this.monthsShort(n,"")),r.push(this.months(n,"")),s.push(this.months(n,"")),s.push(this.monthsShort(n,""));for(i.sort(e),r.sort(e),s.sort(e),t=0;t<12;t++)i[t]=Ue(i[t]),r[t]=Ue(r[t]);for(t=0;t<24;t++)s[t]=Ue(s[t]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function mt(e){return ce(e)?366:365}B("Y",0,0,(function(){var e=this.year();return e<=9999?L(e,4):"+"+e})),B(0,["YY",2],0,(function(){return this.year()%100})),B(0,["YYYY",4],0,"year"),B(0,["YYYYY",5],0,"year"),B(0,["YYYYYY",6,!0],0,"year"),ne("year","y"),oe("year",1),Pe("Y",Ce),Pe("YY",De,ve),Pe("YYYY",Te,we),Pe("YYYYY",Ie,be),Pe("YYYYYY",Ie,be),$e(["YYYYY","YYYYYY"],Ve),$e("YYYY",(function(e,t){t[Ve]=2===e.length?i.parseTwoDigitYear(e):he(e)})),$e("YY",(function(e,t){t[Ve]=i.parseTwoDigitYear(e)})),$e("Y",(function(e,t){t[Ve]=parseInt(e,10)})),i.parseTwoDigitYear=function(e){return he(e)+(he(e)>68?1900:2e3)};var gt=ue("FullYear",!0);function yt(){return ce(this.year())}function vt(e,t,n,i,r,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,i,r,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,i,r,s,o),a}function _t(e){var t,n;return e<100&&e>=0?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function wt(e,t,n){var i=7+t-n;return-(7+_t(e,0,i).getUTCDay()-t)%7+i-1}function bt(e,t,n,i,r){var s,o,a=1+7*(t-1)+(7+n-i)%7+wt(e,i,r);return a<=0?o=mt(s=e-1)+a:a>mt(e)?(s=e+1,o=a-mt(e)):(s=e,o=a),{year:s,dayOfYear:o}}function Dt(e,t,n){var i,r,s=wt(e.year(),t,n),o=Math.floor((e.dayOfYear()-s-1)/7)+1;return o<1?i=o+St(r=e.year()-1,t,n):o>St(e.year(),t,n)?(i=o-St(e.year(),t,n),r=e.year()+1):(r=e.year(),i=o),{week:i,year:r}}function St(e,t,n){var i=wt(e,t,n),r=wt(e+1,t,n);return(mt(e)-i+r)/7}function kt(e){return Dt(e,this._week.dow,this._week.doy).week}B("w",["ww",2],"wo","week"),B("W",["WW",2],"Wo","isoWeek"),ne("week","w"),ne("isoWeek","W"),oe("week",5),oe("isoWeek",5),Pe("w",De),Pe("ww",De,ve),Pe("W",De),Pe("WW",De,ve),Be(["w","ww","W","WW"],(function(e,t,n,i){t[i.substr(0,1)]=he(e)}));var Et={dow:0,doy:6};function Tt(){return this._week.dow}function It(){return this._week.doy}function Ot(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Ct(e){var t=Dt(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function Mt(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}function Rt(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function At(e,t){return e.slice(t,7).concat(e.slice(0,t))}B("d",0,"do","day"),B("dd",0,0,(function(e){return this.localeData().weekdaysMin(this,e)})),B("ddd",0,0,(function(e){return this.localeData().weekdaysShort(this,e)})),B("dddd",0,0,(function(e){return this.localeData().weekdays(this,e)})),B("e",0,0,"weekday"),B("E",0,0,"isoWeekday"),ne("day","d"),ne("weekday","e"),ne("isoWeekday","E"),oe("day",11),oe("weekday",11),oe("isoWeekday",11),Pe("d",De),Pe("e",De),Pe("E",De),Pe("dd",(function(e,t){return t.weekdaysMinRegex(e)})),Pe("ddd",(function(e,t){return t.weekdaysShortRegex(e)})),Pe("dddd",(function(e,t){return t.weekdaysRegex(e)})),Be(["dd","ddd","dddd"],(function(e,t,n,i){var r=n._locale.weekdaysParse(e,i,n._strict);null!=r?t.d=r:g(n).invalidWeekday=e})),Be(["d","e","E"],(function(e,t,n,i){t[i]=he(e)}));var Nt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Pt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Lt="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),xt=Ne,Ut=Ne,Ft=Ne;function $t(e,t){var n=s(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?At(n,this._week.dow):e?n[e.day()]:n}function Bt(e){return!0===e?At(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ht(e){return!0===e?At(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function jt(e,t,n){var i,r,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)s=p([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(s,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(r=je.call(this._weekdaysParse,o))?r:null:"ddd"===t?-1!==(r=je.call(this._shortWeekdaysParse,o))?r:null:-1!==(r=je.call(this._minWeekdaysParse,o))?r:null:"dddd"===t?-1!==(r=je.call(this._weekdaysParse,o))||-1!==(r=je.call(this._shortWeekdaysParse,o))||-1!==(r=je.call(this._minWeekdaysParse,o))?r:null:"ddd"===t?-1!==(r=je.call(this._shortWeekdaysParse,o))||-1!==(r=je.call(this._weekdaysParse,o))||-1!==(r=je.call(this._minWeekdaysParse,o))?r:null:-1!==(r=je.call(this._minWeekdaysParse,o))||-1!==(r=je.call(this._weekdaysParse,o))||-1!==(r=je.call(this._shortWeekdaysParse,o))?r:null}function Vt(e,t,n){var i,r,s;if(this._weekdaysParseExact)return jt.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(r=p([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(s="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[i]=new RegExp(s.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[i].test(e))return i;if(n&&"ddd"===t&&this._shortWeekdaysParse[i].test(e))return i;if(n&&"dd"===t&&this._minWeekdaysParse[i].test(e))return i;if(!n&&this._weekdaysParse[i].test(e))return i}}function Yt(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=Mt(e,this.localeData()),this.add(e-t,"d")):t}function Wt(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function zt(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=Rt(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Gt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=xt),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function qt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ut),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Kt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ft),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Jt(){function e(e,t){return t.length-e.length}var t,n,i,r,s,o=[],a=[],c=[],l=[];for(t=0;t<7;t++)n=p([2e3,1]).day(t),i=Ue(this.weekdaysMin(n,"")),r=Ue(this.weekdaysShort(n,"")),s=Ue(this.weekdays(n,"")),o.push(i),a.push(r),c.push(s),l.push(i),l.push(r),l.push(s);o.sort(e),a.sort(e),c.sort(e),l.sort(e),this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Zt(){return this.hours()%12||12}function Qt(){return this.hours()||24}function Xt(e,t){B(e,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}function en(e,t){return t._meridiemParse}function tn(e){return"p"===(e+"").toLowerCase().charAt(0)}B("H",["HH",2],0,"hour"),B("h",["hh",2],0,Zt),B("k",["kk",2],0,Qt),B("hmm",0,0,(function(){return""+Zt.apply(this)+L(this.minutes(),2)})),B("hmmss",0,0,(function(){return""+Zt.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)})),B("Hmm",0,0,(function(){return""+this.hours()+L(this.minutes(),2)})),B("Hmmss",0,0,(function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)})),Xt("a",!0),Xt("A",!1),ne("hour","h"),oe("hour",13),Pe("a",en),Pe("A",en),Pe("H",De),Pe("h",De),Pe("k",De),Pe("HH",De,ve),Pe("hh",De,ve),Pe("kk",De,ve),Pe("hmm",Se),Pe("hmmss",ke),Pe("Hmm",Se),Pe("Hmmss",ke),$e(["H","HH"],ze),$e(["k","kk"],(function(e,t,n){var i=he(e);t[ze]=24===i?0:i})),$e(["a","A"],(function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e})),$e(["h","hh"],(function(e,t,n){t[ze]=he(e),g(n).bigHour=!0})),$e("hmm",(function(e,t,n){var i=e.length-2;t[ze]=he(e.substr(0,i)),t[Ge]=he(e.substr(i)),g(n).bigHour=!0})),$e("hmmss",(function(e,t,n){var i=e.length-4,r=e.length-2;t[ze]=he(e.substr(0,i)),t[Ge]=he(e.substr(i,2)),t[qe]=he(e.substr(r)),g(n).bigHour=!0})),$e("Hmm",(function(e,t,n){var i=e.length-2;t[ze]=he(e.substr(0,i)),t[Ge]=he(e.substr(i))})),$e("Hmmss",(function(e,t,n){var i=e.length-4,r=e.length-2;t[ze]=he(e.substr(0,i)),t[Ge]=he(e.substr(i,2)),t[qe]=he(e.substr(r))}));var nn=/[ap]\.?m?\.?/i,rn=ue("Hours",!0);function sn(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var on,an={calendar:N,longDateFormat:W,invalidDate:G,ordinal:K,dayOfMonthOrdinalParse:J,relativeTime:Q,months:et,monthsShort:tt,week:Et,weekdays:Nt,weekdaysMin:Lt,weekdaysShort:Pt,meridiemParse:nn},cn={},ln={};function hn(e,t){var n,i=Math.min(e.length,t.length);for(n=0;n<i;n+=1)if(e[n]!==t[n])return n;return i}function un(e){return e?e.toLowerCase().replace("_","-"):e}function dn(e){for(var t,n,i,r,s=0;s<e.length;){for(t=(r=un(e[s]).split("-")).length,n=(n=un(e[s+1]))?n.split("-"):null;t>0;){if(i=pn(r.slice(0,t).join("-")))return i;if(n&&n.length>=t&&hn(r,n)>=t-1)break;t--}s++}return on}function fn(e){return null!=e.match("^[^/\\\\]*$")}function pn(t){var n=null;if(void 0===cn[t]&&e&&e.exports&&fn(t))try{n=on._abbr,(void 0)("./locale/"+t),mn(n)}catch(e){cn[t]=null}return cn[t]}function mn(e,t){var n;return e&&((n=l(t)?vn(e):gn(e,t))?on=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),on._abbr}function gn(e,t){if(null!==t){var n,i=an;if(t.abbr=e,null!=cn[e])O("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=cn[e]._config;else if(null!=t.parentLocale)if(null!=cn[t.parentLocale])i=cn[t.parentLocale]._config;else{if(null==(n=pn(t.parentLocale)))return ln[t.parentLocale]||(ln[t.parentLocale]=[]),ln[t.parentLocale].push({name:e,config:t}),null;i=n._config}return cn[e]=new A(R(i,t)),ln[e]&&ln[e].forEach((function(e){gn(e.name,e.config)})),mn(e),cn[e]}return delete cn[e],null}function yn(e,t){if(null!=t){var n,i,r=an;null!=cn[e]&&null!=cn[e].parentLocale?cn[e].set(R(cn[e]._config,t)):(null!=(i=pn(e))&&(r=i._config),t=R(r,t),null==i&&(t.abbr=e),(n=new A(t)).parentLocale=cn[e],cn[e]=n),mn(e)}else null!=cn[e]&&(null!=cn[e].parentLocale?(cn[e]=cn[e].parentLocale,e===mn()&&mn(e)):null!=cn[e]&&delete cn[e]);return cn[e]}function vn(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return on;if(!s(e)){if(t=pn(e))return t;e=[e]}return dn(e)}function _n(){return T(cn)}function wn(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[Ye]<0||n[Ye]>11?Ye:n[We]<1||n[We]>Xe(n[Ve],n[Ye])?We:n[ze]<0||n[ze]>24||24===n[ze]&&(0!==n[Ge]||0!==n[qe]||0!==n[Ke])?ze:n[Ge]<0||n[Ge]>59?Ge:n[qe]<0||n[qe]>59?qe:n[Ke]<0||n[Ke]>999?Ke:-1,g(e)._overflowDayOfYear&&(t<Ve||t>We)&&(t=We),g(e)._overflowWeeks&&-1===t&&(t=Je),g(e)._overflowWeekday&&-1===t&&(t=Ze),g(e).overflow=t),e}var bn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Dn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Sn=/Z|[+-]\d\d(?::?\d\d)?/,kn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],En=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Tn=/^\/?Date\((-?\d+)/i,In=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,On={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Cn(e){var t,n,i,r,s,o,a=e._i,c=bn.exec(a)||Dn.exec(a),l=kn.length,h=En.length;if(c){for(g(e).iso=!0,t=0,n=l;t<n;t++)if(kn[t][1].exec(c[1])){r=kn[t][0],i=!1!==kn[t][2];break}if(null==r)return void(e._isValid=!1);if(c[3]){for(t=0,n=h;t<n;t++)if(En[t][1].exec(c[3])){s=(c[2]||" ")+En[t][0];break}if(null==s)return void(e._isValid=!1)}if(!i&&null!=s)return void(e._isValid=!1);if(c[4]){if(!Sn.exec(c[4]))return void(e._isValid=!1);o="Z"}e._f=r+(s||"")+(o||""),Hn(e)}else e._isValid=!1}function Mn(e,t,n,i,r,s){var o=[Rn(e),tt.indexOf(t),parseInt(n,10),parseInt(i,10),parseInt(r,10)];return s&&o.push(parseInt(s,10)),o}function Rn(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function An(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Nn(e,t,n){return!e||Pt.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(g(n).weekdayMismatch=!0,n._isValid=!1,!1)}function Pn(e,t,n){if(e)return On[e];if(t)return 0;var i=parseInt(n,10),r=i%100;return(i-r)/100*60+r}function Ln(e){var t,n=In.exec(An(e._i));if(n){if(t=Mn(n[4],n[3],n[2],n[5],n[6],n[7]),!Nn(n[1],t,e))return;e._a=t,e._tzm=Pn(n[8],n[9],n[10]),e._d=_t.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function xn(e){var t=Tn.exec(e._i);null===t?(Cn(e),!1===e._isValid&&(delete e._isValid,Ln(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:i.createFromInputFallback(e)))):e._d=new Date(+t[1])}function Un(e,t,n){return null!=e?e:null!=t?t:n}function Fn(e){var t=new Date(i.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function $n(e){var t,n,i,r,s,o=[];if(!e._d){for(i=Fn(e),e._w&&null==e._a[We]&&null==e._a[Ye]&&Bn(e),null!=e._dayOfYear&&(s=Un(e._a[Ve],i[Ve]),(e._dayOfYear>mt(s)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=_t(s,0,e._dayOfYear),e._a[Ye]=n.getUTCMonth(),e._a[We]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ze]&&0===e._a[Ge]&&0===e._a[qe]&&0===e._a[Ke]&&(e._nextDay=!0,e._a[ze]=0),e._d=(e._useUTC?_t:vt).apply(null,o),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ze]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(g(e).weekdayMismatch=!0)}}function Bn(e){var t,n,i,r,s,o,a,c,l;null!=(t=e._w).GG||null!=t.W||null!=t.E?(s=1,o=4,n=Un(t.GG,e._a[Ve],Dt(Kn(),1,4).year),i=Un(t.W,1),((r=Un(t.E,1))<1||r>7)&&(c=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,l=Dt(Kn(),s,o),n=Un(t.gg,e._a[Ve],l.year),i=Un(t.w,l.week),null!=t.d?((r=t.d)<0||r>6)&&(c=!0):null!=t.e?(r=t.e+s,(t.e<0||t.e>6)&&(c=!0)):r=s),i<1||i>St(n,s,o)?g(e)._overflowWeeks=!0:null!=c?g(e)._overflowWeekday=!0:(a=bt(n,i,r,s,o),e._a[Ve]=a.year,e._dayOfYear=a.dayOfYear)}function Hn(e){if(e._f!==i.ISO_8601)if(e._f!==i.RFC_2822){e._a=[],g(e).empty=!0;var t,n,r,s,o,a,c,l=""+e._i,h=l.length,u=0;for(c=(r=Y(e._f,e._locale).match(x)||[]).length,t=0;t<c;t++)s=r[t],(n=(l.match(Le(s,e))||[])[0])&&((o=l.substr(0,l.indexOf(n))).length>0&&g(e).unusedInput.push(o),l=l.slice(l.indexOf(n)+n.length),u+=n.length),$[s]?(n?g(e).empty=!1:g(e).unusedTokens.push(s),He(s,n,e)):e._strict&&!n&&g(e).unusedTokens.push(s);g(e).charsLeftOver=h-u,l.length>0&&g(e).unusedInput.push(l),e._a[ze]<=12&&!0===g(e).bigHour&&e._a[ze]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ze]=jn(e._locale,e._a[ze],e._meridiem),null!==(a=g(e).era)&&(e._a[Ve]=e._locale.erasConvertYear(a,e._a[Ve])),$n(e),wn(e)}else Ln(e);else Cn(e)}function jn(e,t,n){var i;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((i=e.isPM(n))&&t<12&&(t+=12),i||12!==t||(t=0),t):t}function Vn(e){var t,n,i,r,s,o,a=!1,c=e._f.length;if(0===c)return g(e).invalidFormat=!0,void(e._d=new Date(NaN));for(r=0;r<c;r++)s=0,o=!1,t=b({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[r],Hn(t),y(t)&&(o=!0),s+=g(t).charsLeftOver,s+=10*g(t).unusedTokens.length,g(t).score=s,a?s<i&&(i=s,n=t):(null==i||s<i||o)&&(i=s,n=t,o&&(a=!0));f(e,n||t)}function Yn(e){if(!e._d){var t=re(e._i),n=void 0===t.day?t.date:t.day;e._a=d([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],(function(e){return e&&parseInt(e,10)})),$n(e)}}function Wn(e){var t=new D(wn(zn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function zn(e){var t=e._i,n=e._f;return e._locale=e._locale||vn(e._l),null===t||void 0===n&&""===t?v({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),S(t)?new D(wn(t)):(u(t)?e._d=t:s(n)?Vn(e):n?Hn(e):Gn(e),y(e)||(e._d=null),e))}function Gn(e){var t=e._i;l(t)?e._d=new Date(i.now()):u(t)?e._d=new Date(t.valueOf()):"string"==typeof t?xn(e):s(t)?(e._a=d(t.slice(0),(function(e){return parseInt(e,10)})),$n(e)):o(t)?Yn(e):h(t)?e._d=new Date(t):i.createFromInputFallback(e)}function qn(e,t,n,i,r){var a={};return!0!==t&&!1!==t||(i=t,t=void 0),!0!==n&&!1!==n||(i=n,n=void 0),(o(e)&&c(e)||s(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=r,a._l=n,a._i=e,a._f=t,a._strict=i,Wn(a)}function Kn(e,t,n,i){return qn(e,t,n,i,!1)}i.createFromInputFallback=E("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})),i.ISO_8601=function(){},i.RFC_2822=function(){};var Jn=E("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Kn.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()})),Zn=E("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Kn.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:v()}));function Qn(e,t){var n,i;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Kn();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}function Xn(){return Qn("isBefore",[].slice.call(arguments,0))}function ei(){return Qn("isAfter",[].slice.call(arguments,0))}var ti=function(){return Date.now?Date.now():+new Date},ni=["year","quarter","month","week","day","hour","minute","second","millisecond"];function ii(e){var t,n,i=!1,r=ni.length;for(t in e)if(a(e,t)&&(-1===je.call(ni,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<r;++n)if(e[ni[n]]){if(i)return!1;parseFloat(e[ni[n]])!==he(e[ni[n]])&&(i=!0)}return!0}function ri(){return this._isValid}function si(){return Oi(NaN)}function oi(e){var t=re(e),n=t.year||0,i=t.quarter||0,r=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,c=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=ii(t),this._milliseconds=+h+1e3*l+6e4*c+36e5*a,this._days=+o+7*s,this._months=+r+3*i+12*n,this._data={},this._locale=vn(),this._bubble()}function ai(e){return e instanceof oi}function ci(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function li(e,t,n){var i,r=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),o=0;for(i=0;i<r;i++)(n&&e[i]!==t[i]||!n&&he(e[i])!==he(t[i]))&&o++;return o+s}function hi(e,t){B(e,0,0,(function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+L(~~(e/60),2)+t+L(~~e%60,2)}))}hi("Z",":"),hi("ZZ",""),Pe("Z",Re),Pe("ZZ",Re),$e(["Z","ZZ"],(function(e,t,n){n._useUTC=!0,n._tzm=di(Re,e)}));var ui=/([\+\-]|\d\d)/gi;function di(e,t){var n,i,r=(t||"").match(e);return null===r?null:0===(i=60*(n=((r[r.length-1]||[])+"").match(ui)||["-",0,0])[1]+he(n[2]))?0:"+"===n[0]?i:-i}function fi(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(S(e)||u(e)?e.valueOf():Kn(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),i.updateOffset(n,!1),n):Kn(e).local()}function pi(e){return-Math.round(e._d.getTimezoneOffset())}function mi(e,t,n){var r,s=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=di(Re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(r=pi(this)),this._offset=e,this._isUTC=!0,null!=r&&this.add(r,"m"),s!==e&&(!t||this._changeInProgress?Ni(this,Oi(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?s:pi(this)}function gi(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function yi(e){return this.utcOffset(0,e)}function vi(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(pi(this),"m")),this}function _i(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=di(Me,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function wi(e){return!!this.isValid()&&(e=e?Kn(e).utcOffset():0,(this.utcOffset()-e)%60==0)}function bi(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Di(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e,t={};return b(t,this),(t=zn(t))._a?(e=t._isUTC?p(t._a):Kn(t._a),this._isDSTShifted=this.isValid()&&li(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Si(){return!!this.isValid()&&!this._isUTC}function ki(){return!!this.isValid()&&this._isUTC}function Ei(){return!!this.isValid()&&this._isUTC&&0===this._offset}i.updateOffset=function(){};var Ti=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Ii=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Oi(e,t){var n,i,r,s=e,o=null;return ai(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:h(e)||!isNaN(+e)?(s={},t?s[t]=+e:s.milliseconds=+e):(o=Ti.exec(e))?(n="-"===o[1]?-1:1,s={y:0,d:he(o[We])*n,h:he(o[ze])*n,m:he(o[Ge])*n,s:he(o[qe])*n,ms:he(ci(1e3*o[Ke]))*n}):(o=Ii.exec(e))?(n="-"===o[1]?-1:1,s={y:Ci(o[2],n),M:Ci(o[3],n),w:Ci(o[4],n),d:Ci(o[5],n),h:Ci(o[6],n),m:Ci(o[7],n),s:Ci(o[8],n)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(r=Ri(Kn(s.from),Kn(s.to)),(s={}).ms=r.milliseconds,s.M=r.months),i=new oi(s),ai(e)&&a(e,"_locale")&&(i._locale=e._locale),ai(e)&&a(e,"_isValid")&&(i._isValid=e._isValid),i}function Ci(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Mi(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Ri(e,t){var n;return e.isValid()&&t.isValid()?(t=fi(t,e),e.isBefore(t)?n=Mi(e,t):((n=Mi(t,e)).milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Ai(e,t){return function(n,i){var r;return null===i||isNaN(+i)||(O(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=i,i=r),Ni(this,Oi(n,i),e),this}}function Ni(e,t,n,r){var s=t._milliseconds,o=ci(t._days),a=ci(t._months);e.isValid()&&(r=null==r||r,a&&lt(e,de(e,"Month")+a*n),o&&fe(e,"Date",de(e,"Date")+o*n),s&&e._d.setTime(e._d.valueOf()+s*n),r&&i.updateOffset(e,o||a))}Oi.fn=oi.prototype,Oi.invalid=si;var Pi=Ai(1,"add"),Li=Ai(-1,"subtract");function xi(e){return"string"==typeof e||e instanceof String}function Ui(e){return S(e)||u(e)||xi(e)||h(e)||$i(e)||Fi(e)||null==e}function Fi(e){var t,n,i=o(e)&&!c(e),r=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],l=s.length;for(t=0;t<l;t+=1)n=s[t],r=r||a(e,n);return i&&r}function $i(e){var t=s(e),n=!1;return t&&(n=0===e.filter((function(t){return!h(t)&&xi(e)})).length),t&&n}function Bi(e){var t,n,i=o(e)&&!c(e),r=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<s.length;t+=1)n=s[t],r=r||a(e,n);return i&&r}function Hi(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function ji(e,t){1===arguments.length&&(arguments[0]?Ui(arguments[0])?(e=arguments[0],t=void 0):Bi(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Kn(),r=fi(n,this).startOf("day"),s=i.calendarFormat(this,r)||"sameElse",o=t&&(C(t[s])?t[s].call(this,n):t[s]);return this.format(o||this.localeData().calendar(s,this,Kn(n)))}function Vi(){return new D(this)}function Yi(e,t){var n=S(e)?e:Kn(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=ie(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function Wi(e,t){var n=S(e)?e:Kn(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=ie(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function zi(e,t,n,i){var r=S(e)?e:Kn(e),s=S(t)?t:Kn(t);return!!(this.isValid()&&r.isValid()&&s.isValid())&&("("===(i=i||"()")[0]?this.isAfter(r,n):!this.isBefore(r,n))&&(")"===i[1]?this.isBefore(s,n):!this.isAfter(s,n))}function Gi(e,t){var n,i=S(e)?e:Kn(e);return!(!this.isValid()||!i.isValid())&&("millisecond"===(t=ie(t)||"millisecond")?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function qi(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Ki(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Ji(e,t,n){var i,r,s;if(!this.isValid())return NaN;if(!(i=fi(e,this)).isValid())return NaN;switch(r=6e4*(i.utcOffset()-this.utcOffset()),t=ie(t)){case"year":s=Zi(this,i)/12;break;case"month":s=Zi(this,i);break;case"quarter":s=Zi(this,i)/3;break;case"second":s=(this-i)/1e3;break;case"minute":s=(this-i)/6e4;break;case"hour":s=(this-i)/36e5;break;case"day":s=(this-i-r)/864e5;break;case"week":s=(this-i-r)/6048e5;break;default:s=this-i}return n?s:le(s)}function Zi(e,t){if(e.date()<t.date())return-Zi(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(n,"months");return-(n+(t-i<0?(t-i)/(i-e.clone().add(n-1,"months")):(t-i)/(e.clone().add(n+1,"months")-i)))||0}function Qi(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Xi(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?V(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):C(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+6e4*this.utcOffset()).toISOString().replace("Z",V(n,"Z")):V(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function er(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,i,r="moment",s="";return this.isLocal()||(r=0===this.utcOffset()?"moment.utc":"moment.parseZone",s="Z"),e="["+r+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",i=s+'[")]',this.format(e+t+n+i)}function tr(e){e||(e=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var t=V(this,e);return this.localeData().postformat(t)}function nr(e,t){return this.isValid()&&(S(e)&&e.isValid()||Kn(e).isValid())?Oi({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ir(e){return this.from(Kn(),e)}function rr(e,t){return this.isValid()&&(S(e)&&e.isValid()||Kn(e).isValid())?Oi({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function sr(e){return this.to(Kn(),e)}function or(e){var t;return void 0===e?this._locale._abbr:(null!=(t=vn(e))&&(this._locale=t),this)}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ar=E("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){return void 0===e?this.localeData():this.locale(e)}));function cr(){return this._locale}var lr=1e3,hr=60*lr,ur=60*hr,dr=3506328*ur;function fr(e,t){return(e%t+t)%t}function pr(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-dr:new Date(e,t,n).valueOf()}function mr(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-dr:Date.UTC(e,t,n)}function gr(e){var t,n;if(void 0===(e=ie(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?mr:pr,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=fr(t+(this._isUTC?0:this.utcOffset()*hr),ur);break;case"minute":t=this._d.valueOf(),t-=fr(t,hr);break;case"second":t=this._d.valueOf(),t-=fr(t,lr)}return this._d.setTime(t),i.updateOffset(this,!0),this}function yr(e){var t,n;if(void 0===(e=ie(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?mr:pr,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=ur-fr(t+(this._isUTC?0:this.utcOffset()*hr),ur)-1;break;case"minute":t=this._d.valueOf(),t+=hr-fr(t,hr)-1;break;case"second":t=this._d.valueOf(),t+=lr-fr(t,lr)-1}return this._d.setTime(t),i.updateOffset(this,!0),this}function vr(){return this._d.valueOf()-6e4*(this._offset||0)}function _r(){return Math.floor(this.valueOf()/1e3)}function wr(){return new Date(this.valueOf())}function br(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Dr(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Sr(){return this.isValid()?this.toISOString():null}function kr(){return y(this)}function Er(){return f({},g(this))}function Tr(){return g(this).overflow}function Ir(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Or(e,t){var n,r,s,o=this._eras||vn("en")._eras;for(n=0,r=o.length;n<r;++n)switch("string"==typeof o[n].since&&(s=i(o[n].since).startOf("day"),o[n].since=s.valueOf()),typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":s=i(o[n].until).startOf("day").valueOf(),o[n].until=s.valueOf()}return o}function Cr(e,t,n){var i,r,s,o,a,c=this.eras();for(e=e.toUpperCase(),i=0,r=c.length;i<r;++i)if(s=c[i].name.toUpperCase(),o=c[i].abbr.toUpperCase(),a=c[i].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return c[i];break;case"NNNN":if(s===e)return c[i];break;case"NNNNN":if(a===e)return c[i]}else if([s,o,a].indexOf(e)>=0)return c[i]}function Mr(e,t){var n=e.since<=e.until?1:-1;return void 0===t?i(e.since).year():i(e.since).year()+(t-e.offset)*n}function Rr(){var e,t,n,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),i[e].since<=n&&n<=i[e].until)return i[e].name;if(i[e].until<=n&&n<=i[e].since)return i[e].name}return""}function Ar(){var e,t,n,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),i[e].since<=n&&n<=i[e].until)return i[e].narrow;if(i[e].until<=n&&n<=i[e].since)return i[e].narrow}return""}function Nr(){var e,t,n,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),i[e].since<=n&&n<=i[e].until)return i[e].abbr;if(i[e].until<=n&&n<=i[e].since)return i[e].abbr}return""}function Pr(){var e,t,n,r,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(n=s[e].since<=s[e].until?1:-1,r=this.clone().startOf("day").valueOf(),s[e].since<=r&&r<=s[e].until||s[e].until<=r&&r<=s[e].since)return(this.year()-i(s[e].since).year())*n+s[e].offset;return this.year()}function Lr(e){return a(this,"_erasNameRegex")||jr.call(this),e?this._erasNameRegex:this._erasRegex}function xr(e){return a(this,"_erasAbbrRegex")||jr.call(this),e?this._erasAbbrRegex:this._erasRegex}function Ur(e){return a(this,"_erasNarrowRegex")||jr.call(this),e?this._erasNarrowRegex:this._erasRegex}function Fr(e,t){return t.erasAbbrRegex(e)}function $r(e,t){return t.erasNameRegex(e)}function Br(e,t){return t.erasNarrowRegex(e)}function Hr(e,t){return t._eraYearOrdinalRegex||Oe}function jr(){var e,t,n=[],i=[],r=[],s=[],o=this.eras();for(e=0,t=o.length;e<t;++e)i.push(Ue(o[e].name)),n.push(Ue(o[e].abbr)),r.push(Ue(o[e].narrow)),s.push(Ue(o[e].name)),s.push(Ue(o[e].abbr)),s.push(Ue(o[e].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+i.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}function Vr(e,t){B(0,[e,e.length],0,t)}function Yr(e){return Jr.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Wr(e){return Jr.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function zr(){return St(this.year(),1,4)}function Gr(){return St(this.isoWeekYear(),1,4)}function qr(){var e=this.localeData()._week;return St(this.year(),e.dow,e.doy)}function Kr(){var e=this.localeData()._week;return St(this.weekYear(),e.dow,e.doy)}function Jr(e,t,n,i,r){var s;return null==e?Dt(this,i,r).year:(t>(s=St(e,i,r))&&(t=s),Zr.call(this,e,t,n,i,r))}function Zr(e,t,n,i,r){var s=bt(e,t,n,i,r),o=_t(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Qr(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}B("N",0,0,"eraAbbr"),B("NN",0,0,"eraAbbr"),B("NNN",0,0,"eraAbbr"),B("NNNN",0,0,"eraName"),B("NNNNN",0,0,"eraNarrow"),B("y",["y",1],"yo","eraYear"),B("y",["yy",2],0,"eraYear"),B("y",["yyy",3],0,"eraYear"),B("y",["yyyy",4],0,"eraYear"),Pe("N",Fr),Pe("NN",Fr),Pe("NNN",Fr),Pe("NNNN",$r),Pe("NNNNN",Br),$e(["N","NN","NNN","NNNN","NNNNN"],(function(e,t,n,i){var r=n._locale.erasParse(e,i,n._strict);r?g(n).era=r:g(n).invalidEra=e})),Pe("y",Oe),Pe("yy",Oe),Pe("yyy",Oe),Pe("yyyy",Oe),Pe("yo",Hr),$e(["y","yy","yyy","yyyy"],Ve),$e(["yo"],(function(e,t,n,i){var r;n._locale._eraYearOrdinalRegex&&(r=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Ve]=n._locale.eraYearOrdinalParse(e,r):t[Ve]=parseInt(e,10)})),B(0,["gg",2],0,(function(){return this.weekYear()%100})),B(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),Vr("gggg","weekYear"),Vr("ggggg","weekYear"),Vr("GGGG","isoWeekYear"),Vr("GGGGG","isoWeekYear"),ne("weekYear","gg"),ne("isoWeekYear","GG"),oe("weekYear",1),oe("isoWeekYear",1),Pe("G",Ce),Pe("g",Ce),Pe("GG",De,ve),Pe("gg",De,ve),Pe("GGGG",Te,we),Pe("gggg",Te,we),Pe("GGGGG",Ie,be),Pe("ggggg",Ie,be),Be(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,n,i){t[i.substr(0,2)]=he(e)})),Be(["gg","GG"],(function(e,t,n,r){t[r]=i.parseTwoDigitYear(e)})),B("Q",0,"Qo","quarter"),ne("quarter","Q"),oe("quarter",7),Pe("Q",ye),$e("Q",(function(e,t){t[Ye]=3*(he(e)-1)})),B("D",["DD",2],"Do","date"),ne("date","D"),oe("date",9),Pe("D",De),Pe("DD",De,ve),Pe("Do",(function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})),$e(["D","DD"],We),$e("Do",(function(e,t){t[We]=he(e.match(De)[0])}));var Xr=ue("Date",!0);function es(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}B("DDD",["DDDD",3],"DDDo","dayOfYear"),ne("dayOfYear","DDD"),oe("dayOfYear",4),Pe("DDD",Ee),Pe("DDDD",_e),$e(["DDD","DDDD"],(function(e,t,n){n._dayOfYear=he(e)})),B("m",["mm",2],0,"minute"),ne("minute","m"),oe("minute",14),Pe("m",De),Pe("mm",De,ve),$e(["m","mm"],Ge);var ts=ue("Minutes",!1);B("s",["ss",2],0,"second"),ne("second","s"),oe("second",15),Pe("s",De),Pe("ss",De,ve),$e(["s","ss"],qe);var ns,is,rs=ue("Seconds",!1);for(B("S",0,0,(function(){return~~(this.millisecond()/100)})),B(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),B(0,["SSS",3],0,"millisecond"),B(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),B(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),B(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),B(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),B(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),B(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),ne("millisecond","ms"),oe("millisecond",16),Pe("S",Ee,ye),Pe("SS",Ee,ve),Pe("SSS",Ee,_e),ns="SSSS";ns.length<=9;ns+="S")Pe(ns,Oe);function ss(e,t){t[Ke]=he(1e3*("0."+e))}for(ns="S";ns.length<=9;ns+="S")$e(ns,ss);function os(){return this._isUTC?"UTC":""}function as(){return this._isUTC?"Coordinated Universal Time":""}is=ue("Milliseconds",!1),B("z",0,0,"zoneAbbr"),B("zz",0,0,"zoneName");var cs=D.prototype;function ls(e){return Kn(1e3*e)}function hs(){return Kn.apply(null,arguments).parseZone()}function us(e){return e}cs.add=Pi,cs.calendar=ji,cs.clone=Vi,cs.diff=Ji,cs.endOf=yr,cs.format=tr,cs.from=nr,cs.fromNow=ir,cs.to=rr,cs.toNow=sr,cs.get=pe,cs.invalidAt=Tr,cs.isAfter=Yi,cs.isBefore=Wi,cs.isBetween=zi,cs.isSame=Gi,cs.isSameOrAfter=qi,cs.isSameOrBefore=Ki,cs.isValid=kr,cs.lang=ar,cs.locale=or,cs.localeData=cr,cs.max=Zn,cs.min=Jn,cs.parsingFlags=Er,cs.set=me,cs.startOf=gr,cs.subtract=Li,cs.toArray=br,cs.toObject=Dr,cs.toDate=wr,cs.toISOString=Xi,cs.inspect=er,"undefined"!=typeof Symbol&&null!=Symbol.for&&(cs[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),cs.toJSON=Sr,cs.toString=Qi,cs.unix=_r,cs.valueOf=vr,cs.creationData=Ir,cs.eraName=Rr,cs.eraNarrow=Ar,cs.eraAbbr=Nr,cs.eraYear=Pr,cs.year=gt,cs.isLeapYear=yt,cs.weekYear=Yr,cs.isoWeekYear=Wr,cs.quarter=cs.quarters=Qr,cs.month=ht,cs.daysInMonth=ut,cs.week=cs.weeks=Ot,cs.isoWeek=cs.isoWeeks=Ct,cs.weeksInYear=qr,cs.weeksInWeekYear=Kr,cs.isoWeeksInYear=zr,cs.isoWeeksInISOWeekYear=Gr,cs.date=Xr,cs.day=cs.days=Yt,cs.weekday=Wt,cs.isoWeekday=zt,cs.dayOfYear=es,cs.hour=cs.hours=rn,cs.minute=cs.minutes=ts,cs.second=cs.seconds=rs,cs.millisecond=cs.milliseconds=is,cs.utcOffset=mi,cs.utc=yi,cs.local=vi,cs.parseZone=_i,cs.hasAlignedHourOffset=wi,cs.isDST=bi,cs.isLocal=Si,cs.isUtcOffset=ki,cs.isUtc=Ei,cs.isUTC=Ei,cs.zoneAbbr=os,cs.zoneName=as,cs.dates=E("dates accessor is deprecated. Use date instead.",Xr),cs.months=E("months accessor is deprecated. Use month instead",ht),cs.years=E("years accessor is deprecated. Use year instead",gt),cs.zone=E("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",gi),cs.isDSTShifted=E("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Di);var ds=A.prototype;function fs(e,t,n,i){var r=vn(),s=p().set(i,t);return r[n](s,e)}function ps(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return fs(e,t,n,"month");var i,r=[];for(i=0;i<12;i++)r[i]=fs(e,i,n,"month");return r}function ms(e,t,n,i){"boolean"==typeof e?(h(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,h(t)&&(n=t,t=void 0),t=t||"");var r,s=vn(),o=e?s._week.dow:0,a=[];if(null!=n)return fs(t,(n+o)%7,i,"day");for(r=0;r<7;r++)a[r]=fs(t,(r+o)%7,i,"day");return a}function gs(e,t){return ps(e,t,"months")}function ys(e,t){return ps(e,t,"monthsShort")}function vs(e,t,n){return ms(e,t,n,"weekdays")}function _s(e,t,n){return ms(e,t,n,"weekdaysShort")}function ws(e,t,n){return ms(e,t,n,"weekdaysMin")}ds.calendar=P,ds.longDateFormat=z,ds.invalidDate=q,ds.ordinal=Z,ds.preparse=us,ds.postformat=us,ds.relativeTime=X,ds.pastFuture=ee,ds.set=M,ds.eras=Or,ds.erasParse=Cr,ds.erasConvertYear=Mr,ds.erasAbbrRegex=xr,ds.erasNameRegex=Lr,ds.erasNarrowRegex=Ur,ds.months=st,ds.monthsShort=ot,ds.monthsParse=ct,ds.monthsRegex=ft,ds.monthsShortRegex=dt,ds.week=kt,ds.firstDayOfYear=It,ds.firstDayOfWeek=Tt,ds.weekdays=$t,ds.weekdaysMin=Ht,ds.weekdaysShort=Bt,ds.weekdaysParse=Vt,ds.weekdaysRegex=Gt,ds.weekdaysShortRegex=qt,ds.weekdaysMinRegex=Kt,ds.isPM=tn,ds.meridiem=sn,mn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===he(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),i.lang=E("moment.lang is deprecated. Use moment.locale instead.",mn),i.langData=E("moment.langData is deprecated. Use moment.localeData instead.",vn);var bs=Math.abs;function Ds(){var e=this._data;return this._milliseconds=bs(this._milliseconds),this._days=bs(this._days),this._months=bs(this._months),e.milliseconds=bs(e.milliseconds),e.seconds=bs(e.seconds),e.minutes=bs(e.minutes),e.hours=bs(e.hours),e.months=bs(e.months),e.years=bs(e.years),this}function Ss(e,t,n,i){var r=Oi(t,n);return e._milliseconds+=i*r._milliseconds,e._days+=i*r._days,e._months+=i*r._months,e._bubble()}function ks(e,t){return Ss(this,e,t,1)}function Es(e,t){return Ss(this,e,t,-1)}function Ts(e){return e<0?Math.floor(e):Math.ceil(e)}function Is(){var e,t,n,i,r,s=this._milliseconds,o=this._days,a=this._months,c=this._data;return s>=0&&o>=0&&a>=0||s<=0&&o<=0&&a<=0||(s+=864e5*Ts(Cs(a)+o),o=0,a=0),c.milliseconds=s%1e3,e=le(s/1e3),c.seconds=e%60,t=le(e/60),c.minutes=t%60,n=le(t/60),c.hours=n%24,o+=le(n/24),a+=r=le(Os(o)),o-=Ts(Cs(r)),i=le(a/12),a%=12,c.days=o,c.months=a,c.years=i,this}function Os(e){return 4800*e/146097}function Cs(e){return 146097*e/4800}function Ms(e){if(!this.isValid())return NaN;var t,n,i=this._milliseconds;if("month"===(e=ie(e))||"quarter"===e||"year"===e)switch(t=this._days+i/864e5,n=this._months+Os(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Cs(this._months)),e){case"week":return t/7+i/6048e5;case"day":return t+i/864e5;case"hour":return 24*t+i/36e5;case"minute":return 1440*t+i/6e4;case"second":return 86400*t+i/1e3;case"millisecond":return Math.floor(864e5*t)+i;default:throw new Error("Unknown unit "+e)}}function Rs(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*he(this._months/12):NaN}function As(e){return function(){return this.as(e)}}var Ns=As("ms"),Ps=As("s"),Ls=As("m"),xs=As("h"),Us=As("d"),Fs=As("w"),$s=As("M"),Bs=As("Q"),Hs=As("y");function js(){return Oi(this)}function Vs(e){return e=ie(e),this.isValid()?this[e+"s"]():NaN}function Ys(e){return function(){return this.isValid()?this._data[e]:NaN}}var Ws=Ys("milliseconds"),zs=Ys("seconds"),Gs=Ys("minutes"),qs=Ys("hours"),Ks=Ys("days"),Js=Ys("months"),Zs=Ys("years");function Qs(){return le(this.days()/7)}var Xs=Math.round,eo={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function to(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}function no(e,t,n,i){var r=Oi(e).abs(),s=Xs(r.as("s")),o=Xs(r.as("m")),a=Xs(r.as("h")),c=Xs(r.as("d")),l=Xs(r.as("M")),h=Xs(r.as("w")),u=Xs(r.as("y")),d=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||c<=1&&["d"]||c<n.d&&["dd",c];return null!=n.w&&(d=d||h<=1&&["w"]||h<n.w&&["ww",h]),(d=d||l<=1&&["M"]||l<n.M&&["MM",l]||u<=1&&["y"]||["yy",u])[2]=t,d[3]=+e>0,d[4]=i,to.apply(null,d)}function io(e){return void 0===e?Xs:"function"==typeof e&&(Xs=e,!0)}function ro(e,t){return void 0!==eo[e]&&(void 0===t?eo[e]:(eo[e]=t,"s"===e&&(eo.ss=t-1),!0))}function so(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,i,r=!1,s=eo;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(r=e),"object"==typeof t&&(s=Object.assign({},eo,t),null!=t.s&&null==t.ss&&(s.ss=t.s-1)),i=no(this,!r,s,n=this.localeData()),r&&(i=n.pastFuture(+this,i)),n.postformat(i)}var oo=Math.abs;function ao(e){return(e>0)-(e<0)||+e}function co(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,i,r,s,o,a,c=oo(this._milliseconds)/1e3,l=oo(this._days),h=oo(this._months),u=this.asSeconds();return u?(e=le(c/60),t=le(e/60),c%=60,e%=60,n=le(h/12),h%=12,i=c?c.toFixed(3).replace(/\.?0+$/,""):"",r=u<0?"-":"",s=ao(this._months)!==ao(u)?"-":"",o=ao(this._days)!==ao(u)?"-":"",a=ao(this._milliseconds)!==ao(u)?"-":"",r+"P"+(n?s+n+"Y":"")+(h?s+h+"M":"")+(l?o+l+"D":"")+(t||e||c?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(c?a+i+"S":"")):"P0D"}var lo=oi.prototype;return lo.isValid=ri,lo.abs=Ds,lo.add=ks,lo.subtract=Es,lo.as=Ms,lo.asMilliseconds=Ns,lo.asSeconds=Ps,lo.asMinutes=Ls,lo.asHours=xs,lo.asDays=Us,lo.asWeeks=Fs,lo.asMonths=$s,lo.asQuarters=Bs,lo.asYears=Hs,lo.valueOf=Rs,lo._bubble=Is,lo.clone=js,lo.get=Vs,lo.milliseconds=Ws,lo.seconds=zs,lo.minutes=Gs,lo.hours=qs,lo.days=Ks,lo.weeks=Qs,lo.months=Js,lo.years=Zs,lo.humanize=so,lo.toISOString=co,lo.toString=co,lo.toJSON=co,lo.locale=or,lo.localeData=cr,lo.toIsoString=E("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",co),lo.lang=ar,B("X",0,0,"unix"),B("x",0,0,"valueOf"),Pe("x",Ce),Pe("X",Ae),$e("X",(function(e,t,n){n._d=new Date(1e3*parseFloat(e))})),$e("x",(function(e,t,n){n._d=new Date(he(e))})),
//! moment.js
i.version="2.29.4",r(Kn),i.fn=cs,i.min=Xn,i.max=ei,i.now=ti,i.utc=p,i.unix=ls,i.months=gs,i.isDate=u,i.locale=mn,i.invalid=v,i.duration=Oi,i.isMoment=S,i.weekdays=vs,i.parseZone=hs,i.localeData=vn,i.isDuration=ai,i.monthsShort=ys,i.weekdaysMin=ws,i.defineLocale=gn,i.updateLocale=yn,i.locales=_n,i.weekdaysShort=_s,i.normalizeUnits=ie,i.relativeTimeRounding=io,i.relativeTimeThreshold=ro,i.calendarFormat=Hi,i.prototype=cs,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},i}()})),s("kyEFX").register(JSON.parse('{"5ZPII":"favorite.627d3bda.js","Vj47w":"location.565ce5d9.svg","5UbS1":"favorite.5d507db5.css"}'));const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,l=(h=Object.create(null),e=>{const t=a.call(e);return h[t]||(h[t]=t.slice(8,-1).toLowerCase())});var h;const u=e=>(e=e.toLowerCase(),t=>l(t)===e),d=e=>t=>typeof t===e,{isArray:f}=Array,p=d("undefined");const m=u("ArrayBuffer");const g=d("string"),y=d("function"),v=d("number"),_=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==l(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=u("Date"),D=u("File"),S=u("Blob"),k=u("FileList"),E=u("URLSearchParams");function T(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),f(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function I(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,C=e=>!p(e)&&e!==O;const M=(R="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>R&&e instanceof R);var R;const A=u("HTMLFormElement"),N=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=u("RegExp"),L=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};T(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},x={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var U={isArray:f,isArrayBuffer:m,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||a.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer),t},isString:g,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:_,isPlainObject:w,isUndefined:p,isDate:b,isFile:D,isBlob:S,isRegExp:P,isFunction:y,isStream:e=>_(e)&&y(e.pipe),isURLSearchParams:E,isTypedArray:M,isFileList:k,forEach:T,merge:function e(){const{caseless:t}=C(this)&&this||{},n={},i=(i,r)=>{const s=t&&I(n,r)||r;w(n[s])&&w(i)?n[s]=e(n[s],i):w(i)?n[s]=e({},i):f(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&T(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(T(t,((t,i)=>{n&&y(t)?e[i]=o(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:u,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:A,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:L,freezeMethods:e=>{L(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];y(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:I,global:O,isContextDefined:C,ALPHABET:x,generateString:(e=16,t=x.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(_(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=f(e)?[]:{};return T(e,((e,t)=>{const s=n(e,i+1);!p(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)}};function F(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}U.inherits(F,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $=F.prototype,B={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{B[e]={value:e}})),Object.defineProperties(F,B),Object.defineProperty($,"isAxiosError",{value:!0}),F.from=(e,t,n,i,r,s)=>{const o=Object.create($);return U.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),F.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var H,j,V,Y=F;j=function(e){var t,n,i=X(e),r=i[0],s=i[1],o=new K(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)t=q[e.charCodeAt(n)]<<18|q[e.charCodeAt(n+1)]<<12|q[e.charCodeAt(n+2)]<<6|q[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=q[e.charCodeAt(n)]<<2|q[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=q[e.charCodeAt(n)]<<10|q[e.charCodeAt(n+1)]<<4|q[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},V=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(ee(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(G[t>>2]+G[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(G[t>>10]+G[t>>4&63]+G[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var W,z,G=[],q=[],K="undefined"!=typeof Uint8Array?Uint8Array:Array,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Z=0,Q=J.length;Z<Q;++Z)G[Z]=J[Z],q[J.charCodeAt(Z)]=Z;function X(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ee(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(G[(r=i)>>18&63]+G[r>>12&63]+G[r>>6&63]+G[63&r]);return s.join("")}q["-".charCodeAt(0)]=62,q["_".charCodeAt(0)]=63,W=function(e,t,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,h=-7,u=n?r-1:0,d=n?-1:1,f=e[t+u];for(u+=d,s=f&(1<<-h)-1,f>>=-h,h+=a;h>0;s=256*s+e[t+u],u+=d,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=i;h>0;o=256*o+e[t+u],u+=d,h-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=l}return(f?-1:1)*o*Math.pow(2,s-i)},z=function(e,t,n,i,r,s){var o,a,c,l=8*s-r-1,h=(1<<l)-1,u=h>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+u>=1?d/c:d*Math.pow(2,1-u))*c>=2&&(o++,c/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(t*c-1)*Math.pow(2,r),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;e[n+f]=255&o,f+=p,o/=256,l-=8);e[n+f-p]|=128*m};const te="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;H=ie;function ne(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,ie.prototype),t}function ie(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return oe(e)}return re(e,t,n)}function re(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ie.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|he(e,t);let i=ne(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Ve(e,Uint8Array)){const t=new Uint8Array(e);return ce(t.buffer,t.byteOffset,t.byteLength)}return ae(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ve(e,ArrayBuffer)||e&&Ve(e.buffer,ArrayBuffer))return ce(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Ve(e,SharedArrayBuffer)||e&&Ve(e.buffer,SharedArrayBuffer)))return ce(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return ie.from(i,t,n);const r=function(e){if(ie.isBuffer(e)){const t=0|le(e.length),n=ne(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Ye(e.length)?ne(0):ae(e);if("Buffer"===e.type&&Array.isArray(e.data))return ae(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ie.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function se(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function oe(e){return se(e),ne(e<0?0:0|le(e))}function ae(e){const t=e.length<0?0:0|le(e.length),n=ne(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function ce(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,ie.prototype),i}function le(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function he(e,t){if(ie.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ve(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Be(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return He(e).length;default:if(r)return i?-1:Be(e).length;t=(""+t).toLowerCase(),r=!0}}function ue(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return ke(this,t,n);case"utf8":case"utf-8":return be(this,t,n);case"ascii":return De(this,t,n);case"latin1":case"binary":return Se(this,t,n);case"base64":return we(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ee(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function de(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function fe(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ye(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=ie.from(t,i)),ie.isBuffer(t))return 0===t.length?-1:pe(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):pe(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function pe(e,t,n,i,r){let s,o=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(e,s)===l(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(e,s+i)!==l(t,i)){n=!1;break}if(n)return s}return-1}function me(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(Ye(i))return o;e[n+o]=i}return o}function ge(e,t,n,i){return je(Be(t,e.length-n),e,n,i)}function ye(e,t,n,i){return je(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function ve(e,t,n,i){return je(He(t),e,n,i)}function _e(e,t,n,i){return je(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function we(e,t,n){return 0===t&&n===e.length?V(e):V(e.slice(t,n))}function be(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}ie.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ie.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ie.prototype,"parent",{enumerable:!0,get:function(){if(ie.isBuffer(this))return this.buffer}}),Object.defineProperty(ie.prototype,"offset",{enumerable:!0,get:function(){if(ie.isBuffer(this))return this.byteOffset}}),ie.poolSize=8192,ie.from=function(e,t,n){return re(e,t,n)},Object.setPrototypeOf(ie.prototype,Uint8Array.prototype),Object.setPrototypeOf(ie,Uint8Array),ie.alloc=function(e,t,n){return function(e,t,n){return se(e),e<=0?ne(e):void 0!==t?"string"==typeof n?ne(e).fill(t,n):ne(e).fill(t):ne(e)}(e,t,n)},ie.allocUnsafe=function(e){return oe(e)},ie.allocUnsafeSlow=function(e){return oe(e)},ie.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ie.prototype},ie.compare=function(e,t){if(Ve(e,Uint8Array)&&(e=ie.from(e,e.offset,e.byteLength)),Ve(t,Uint8Array)&&(t=ie.from(t,t.offset,t.byteLength)),!ie.isBuffer(e)||!ie.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},ie.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ie.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ie.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=ie.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Ve(t,Uint8Array))r+t.length>i.length?(ie.isBuffer(t)||(t=ie.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!ie.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},ie.byteLength=he,ie.prototype._isBuffer=!0,ie.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)de(this,t,t+1);return this},ie.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)de(this,t,t+3),de(this,t+1,t+2);return this},ie.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)de(this,t,t+7),de(this,t+1,t+6),de(this,t+2,t+5),de(this,t+3,t+4);return this},ie.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?be(this,0,e):ue.apply(this,arguments)},ie.prototype.toLocaleString=ie.prototype.toString,ie.prototype.equals=function(e){if(!ie.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ie.compare(this,e)},ie.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},te&&(ie.prototype[te]=ie.prototype.inspect),ie.prototype.compare=function(e,t,n,i,r){if(Ve(e,Uint8Array)&&(e=ie.from(e,e.offset,e.byteLength)),!ie.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){s=c[e],o=l[e];break}return s<o?-1:o<s?1:0},ie.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ie.prototype.indexOf=function(e,t,n){return fe(this,e,t,n,!0)},ie.prototype.lastIndexOf=function(e,t,n){return fe(this,e,t,n,!1)},ie.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return me(this,e,t,n);case"utf8":case"utf-8":return ge(this,e,t,n);case"ascii":case"latin1":case"binary":return ye(this,e,t,n);case"base64":return ve(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _e(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},ie.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function De(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Se(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function ke(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=We[e[i]];return r}function Ee(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function Te(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Ie(e,t,n,i,r,s){if(!ie.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function Oe(e,t,n,i,r){xe(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Ce(e,t,n,i,r){xe(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Me(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Re(e,t,n,i,r){return t=+t,n>>>=0,r||Me(e,0,n,4),z(e,t,n,i,23,4),n+4}function Ae(e,t,n,i,r){return t=+t,n>>>=0,r||Me(e,0,n,8),z(e,t,n,i,52,8),n+8}ie.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,ie.prototype),i},ie.prototype.readUintLE=ie.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Te(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},ie.prototype.readUintBE=ie.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Te(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},ie.prototype.readUint8=ie.prototype.readUInt8=function(e,t){return e>>>=0,t||Te(e,1,this.length),this[e]},ie.prototype.readUint16LE=ie.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Te(e,2,this.length),this[e]|this[e+1]<<8},ie.prototype.readUint16BE=ie.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Te(e,2,this.length),this[e]<<8|this[e+1]},ie.prototype.readUint32LE=ie.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Te(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ie.prototype.readUint32BE=ie.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Te(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ie.prototype.readBigUInt64LE=ze((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Fe(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),ie.prototype.readBigUInt64BE=ze((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Fe(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),ie.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Te(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},ie.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Te(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},ie.prototype.readInt8=function(e,t){return e>>>=0,t||Te(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ie.prototype.readInt16LE=function(e,t){e>>>=0,t||Te(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ie.prototype.readInt16BE=function(e,t){e>>>=0,t||Te(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ie.prototype.readInt32LE=function(e,t){return e>>>=0,t||Te(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ie.prototype.readInt32BE=function(e,t){return e>>>=0,t||Te(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ie.prototype.readBigInt64LE=ze((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Fe(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),ie.prototype.readBigInt64BE=ze((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Fe(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),ie.prototype.readFloatLE=function(e,t){return e>>>=0,t||Te(e,4,this.length),W(this,e,!0,23,4)},ie.prototype.readFloatBE=function(e,t){return e>>>=0,t||Te(e,4,this.length),W(this,e,!1,23,4)},ie.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Te(e,8,this.length),W(this,e,!0,52,8)},ie.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Te(e,8,this.length),W(this,e,!1,52,8)},ie.prototype.writeUintLE=ie.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Ie(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},ie.prototype.writeUintBE=ie.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Ie(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},ie.prototype.writeUint8=ie.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,1,255,0),this[t]=255&e,t+1},ie.prototype.writeUint16LE=ie.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ie.prototype.writeUint16BE=ie.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ie.prototype.writeUint32LE=ie.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ie.prototype.writeUint32BE=ie.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ie.prototype.writeBigUInt64LE=ze((function(e,t=0){return Oe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ie.prototype.writeBigUInt64BE=ze((function(e,t=0){return Ce(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ie.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Ie(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},ie.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Ie(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},ie.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ie.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ie.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ie.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ie.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Ie(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ie.prototype.writeBigInt64LE=ze((function(e,t=0){return Oe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ie.prototype.writeBigInt64BE=ze((function(e,t=0){return Ce(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ie.prototype.writeFloatLE=function(e,t,n){return Re(this,e,t,!0,n)},ie.prototype.writeFloatBE=function(e,t,n){return Re(this,e,t,!1,n)},ie.prototype.writeDoubleLE=function(e,t,n){return Ae(this,e,t,!0,n)},ie.prototype.writeDoubleBE=function(e,t,n){return Ae(this,e,t,!1,n)},ie.prototype.copy=function(e,t,n,i){if(!ie.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},ie.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!ie.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=ie.isBuffer(e)?e:ie.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const Ne={};function Pe(e,t,n){Ne[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function Le(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function xe(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new Ne.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){Ue(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Fe(t,e.length-(n+1))}(i,r,s)}function Ue(e,t){if("number"!=typeof e)throw new Ne.ERR_INVALID_ARG_TYPE(t,"number",e)}function Fe(e,t,n){if(Math.floor(e)!==e)throw Ue(e,n),new Ne.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Ne.ERR_BUFFER_OUT_OF_BOUNDS;throw new Ne.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}Pe("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Pe("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),Pe("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Le(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Le(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const $e=/[^+/0-9A-Za-z-_]/g;function Be(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function He(e){return j(function(e){if((e=(e=e.split("=")[0]).trim().replace($e,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function je(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Ve(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Ye(e){return e!=e}const We=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function ze(e){return"undefined"==typeof BigInt?Ge:e}function Ge(){throw new Error("BigInt not supported")}var qe=H;function Ke(e){return U.isPlainObject(e)||U.isArray(e)}function Je(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function Ze(e,t,n){return e?e.concat(t).map((function(e,t){return e=Je(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Qe=U.toFlatObject(U,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Xe=function(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!U.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!a&&U.isBlob(e))throw new Y("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):qe.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(U.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(U.isArray(e)&&function(e){return U.isArray(e)&&!e.some(Ke)}(e)||(U.isFileList(e)||U.endsWith(n,"[]"))&&(a=U.toArray(e)))return n=Je(n),a.forEach((function(e,i){!U.isUndefined(e)&&null!==e&&t.append(!0===o?Ze([n],i,s):null===o?n:n+"[]",c(e))})),!1;return!!Ke(e)||(t.append(Ze(r,n,s),c(e)),!1)}const h=[],u=Object.assign(Qe,{defaultVisitor:l,convertValue:c,isVisitable:Ke});if(!U.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!U.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),U.forEach(n,(function(n,s){!0===(!(U.isUndefined(n)||null===n)&&r.call(t,n,U.isString(s)?s.trim():s,i,u))&&e(n,i?i.concat(s):[s])})),h.pop()}}(e),t};function et(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function tt(e,t){this._pairs=[],e&&Xe(e,this,t)}const nt=tt.prototype;nt.append=function(e,t){this._pairs.push([e,t])},nt.toString=function(e){const t=e?function(t){return e.call(this,t,et)}:et;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var it=tt;function rt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function st(e,t,n){if(!t)return e;const i=n&&n.encode||rt,r=n&&n.serialize;let s;if(s=r?r(t,n):U.isURLSearchParams(t)?t.toString():new it(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var ot=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},at={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ct={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:it,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function lt(e,t){return Xe(e,new ct.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return ct.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var ht=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&U.isArray(i)?i.length:s,a)return U.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&U.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&U.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,((e,i)=>{t(function(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const ut={"Content-Type":void 0};const dt={transitional:at,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=U.isObject(e);r&&U.isHTMLForm(e)&&(e=new FormData(e));if(U.isFormData(e))return i&&i?JSON.stringify(ht(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return lt(e,this.formSerializer).toString();if((s=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Xe(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(U.isString(e))try{return(t||JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||dt.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&U.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Y.from(e,Y.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],(function(e){dt.headers[e]={}})),U.forEach(["post","put","patch"],(function(e){dt.headers[e]=U.merge(ut)}));var ft=dt;const pt=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var mt=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&pt[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const gt=Symbol("internals");function yt(e){return e&&String(e).trim().toLowerCase()}function vt(e){return!1===e||null==e?e:U.isArray(e)?e.map(vt):String(e)}function _t(e,t,n,i,r){return U.isFunction(i)?i.call(this,t,n):(r&&(t=n),U.isString(t)?U.isString(i)?-1!==t.indexOf(i):U.isRegExp(i)?i.test(t):void 0:void 0)}let wt=Symbol.iterator,bt=Symbol.toStringTag;class Dt{set(e,t,n){const i=this;function r(e,t,n){const r=yt(t);if(!r)throw new Error("header name must be a non-empty string");const s=U.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=vt(e))}const s=(e,t)=>U.forEach(e,((e,n)=>r(e,n,t)));return U.isPlainObject(e)||e instanceof this.constructor?s(e,t):U.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(mt(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=yt(e)){const n=U.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(U.isFunction(t))return t.call(this,e,n);if(U.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=yt(e)){const n=U.findKey(this,e);return!(!n||void 0===this[n]||t&&!_t(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=yt(e)){const r=U.findKey(n,e);!r||t&&!_t(0,n[r],r,t)||(delete n[r],i=!0)}}return U.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!_t(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return U.forEach(this,((i,r)=>{const s=U.findKey(n,r);if(s)return t[s]=vt(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=vt(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return U.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&U.isArray(n)?n.join(", "):n)})),t}[wt](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[bt](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[gt]=this[gt]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=yt(e);t[i]||(!function(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return U.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}Dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.freezeMethods(Dt.prototype),U.freezeMethods(Dt);var St=Dt;function kt(e,t){const n=this||ft,i=t||n,r=St.from(i.headers);let s=i.data;return U.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function Et(e){return!(!e||!e.__CANCEL__)}function Tt(e,t,n){Y.call(this,null==e?"canceled":e,Y.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(Tt,Y,{__CANCEL__:!0});var It=Tt;function Ot(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Ct=ct.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),U.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),U.isString(i)&&o.push("path="+i),U.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Mt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Rt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Mt(e,t):t}var At=ct.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=U.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Nt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Pt=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let h=o,u=0;for(;h!==s;)u+=n[h++],h%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*u/d):void 0}};function Lt(e,t){let n=0;const i=Pt(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}const xt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=St.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}U.isFormData(i)&&(ct.isStandardBrowserEnv||ct.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=Rt(e.baseURL,e.url);function h(){if(!c)return;const i=St.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());Ot((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),st(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(h)},c.onabort=function(){c&&(n(new Y("Request aborted",Y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new Y("Network Error",Y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||at;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Y(t,i.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,c)),c=null},ct.isStandardBrowserEnv){const t=(e.withCredentials||At(l))&&e.xsrfCookieName&&Ct.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&U.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Lt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Lt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new It(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const u=Nt(l);u&&-1===ct.protocols.indexOf(u)?n(new Y("Unsupported protocol "+u+":",Y.ERR_BAD_REQUEST,e)):c.send(i||null)}))}};U.forEach(xt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Ut={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=U.isString(n)?xt[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new Y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(U.hasOwnProp(xt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!U.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:xt};function Ft(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new It(null,e)}function $t(e){Ft(e),e.headers=St.from(e.headers),e.data=kt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ut.getAdapter(e.adapter||ft.adapter)(e).then((function(t){return Ft(e),t.data=kt.call(e,e.transformResponse,t),t.headers=St.from(t.headers),t}),(function(t){return Et(t)||(Ft(e),t&&t.response&&(t.response.data=kt.call(e,e.transformResponse,t.response),t.response.headers=St.from(t.response.headers))),Promise.reject(t)}))}const Bt=e=>e instanceof St?e.toJSON():e;function Ht(e,t){t=t||{};const n={};function i(e,t,n){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:n},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function r(e,t,n){return U.isUndefined(t)?U.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!U.isUndefined(t))return i(void 0,t)}function o(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(Bt(e),Bt(t),!0)};return U.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const s=c[i]||r,o=s(e[i],t[i],i);U.isUndefined(o)&&s!==a||(n[i]=o)})),n}const jt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{jt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Vt={};jt.transitional=function(e,t,n){function i(e,t){return"[Axios v1.3.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new Y(i(r," has been removed"+(t?" in "+t:"")),Y.ERR_DEPRECATED);return t&&!Vt[r]&&(Vt[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var Yt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new Y("option "+s+" must be "+n,Y.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Y("Unknown option "+s,Y.ERR_BAD_OPTION)}},validators:jt};const Wt=Yt.validators;class zt{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ht(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let s;void 0!==n&&Yt.assertOptions(n,{silentJSONParsing:Wt.transitional(Wt.boolean),forcedJSONParsing:Wt.transitional(Wt.boolean),clarifyTimeoutError:Wt.transitional(Wt.boolean)},!1),void 0!==i&&Yt.assertOptions(i,{encode:Wt.function,serialize:Wt.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&U.merge(r.common,r[t.method]),s&&U.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=St.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let h,u=0;if(!a){const e=[$t.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),h=e.length,l=Promise.resolve(t);u<h;)l=l.then(e[u++],e[u++]);return l}h=o.length;let d=t;for(u=0;u<h;){const e=o[u++],t=o[u++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=$t.call(this,d)}catch(e){return Promise.reject(e)}for(u=0,h=c.length;u<h;)l=l.then(c[u++],c[u++]);return l}getUri(e){return st(Rt((e=Ht(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new ot,response:new ot}}}U.forEach(["delete","get","head","options"],(function(e){zt.prototype[e]=function(t,n){return this.request(Ht(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(Ht(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}zt.prototype[e]=t(),zt.prototype[e+"Form"]=t(!0)}));var Gt=zt;class qt{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new qt((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new It(e,i,r),t(n.reason))}))}}var Kt=qt;const Jt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jt).forEach((([e,t])=>{Jt[t]=e}));var Zt=Jt;const Qt=function e(t){const n=new Gt(t),i=o(Gt.prototype.request,n);return U.extend(i,Gt.prototype,n,{allOwnKeys:!0}),U.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Ht(t,n))},i}(ft);Qt.Axios=Gt,Qt.CanceledError=It,Qt.CancelToken=Kt,Qt.isCancel=Et,Qt.VERSION="1.3.4",Qt.toFormData=Xe,Qt.AxiosError=Y,Qt.Cancel=Qt.CanceledError,Qt.all=function(e){return Promise.all(e)},Qt.spread=function(e){return function(t){return e.apply(null,t)}},Qt.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},Qt.mergeConfig=Ht,Qt.AxiosHeaders=St,Qt.formToJSON=e=>ht(U.isHTMLForm(e)?new FormData(e):e),Qt.HttpStatusCode=Zt,Qt.default=Qt;var Xt=Qt;const{Axios:en,AxiosError:tn,CanceledError:nn,isCancel:rn,CancelToken:sn,VERSION:on,all:an,Cancel:cn,isAxiosError:ln,spread:hn,toFormData:un,AxiosHeaders:dn,HttpStatusCode:fn,formToJSON:pn,mergeConfig:mn}=Xt,gn=Xt.create();const yn=new class{async getMostPopularNews(){try{return await gn.get(this.mostPopUrl).then((e=>(e.statusText="OK",console.log(e.data.results),e.data.results)))}catch(e){console.log(e.message)}}async getNewsBySearchQuery(e){this.setSearchQuery(e),this.setSearchUrl();try{return await gn.get(this.searchUrl).then((e=>(e.statusText="OK",console.log(this.searchUrl),this.totalHits=e.data.response.meta.hits,this.totalHits=e.data.response.meta.hits,e.data.response.docs)))}catch(e){console.log(e.message)}}async getCategories(){try{return await gn.get(this.sectionListUrl).then((e=>(e.statusText="OK",console.log(e.data.results),e.data.results)))}catch(e){console.log(e.message)}}async getNewsByCategory(e){this.setPage(e),this.setCategorySearchUrl();try{return await gn.get(this.categorySearchUrl).then((e=>(e.statusText="OK",console.log(this.categorySearchUrl),console.log(e.data.results),this.totalHits=e.data.num_results,e.data.results)))}catch(e){console.log(e.message)}}getTotalHits(){return console.log(this.totalHits),this.totalHits}setPage(e){this.page=e}resetPage(){this.page=1}getPage(){return this.page}setSearchQuery(e){this.searchQuery=e}setSearchUrl(){this.searchUrl=`${this.BASE_URL}${this.SEARCH_URL}?q=${this.searchQuery}&page=${this.page}&api-key=${this.API_KEY}`}setCategorySearchUrl(){this.categorySearchUrl=`${this.BASE_URL}${this.CATEGORY_URL}${this.category}.json?limit=${this.limit}&offset=${this.page}&api-key=${this.API_KEY}`}constructor(){this.BASE_URL="https://api.nytimes.com/svc/",this.API_KEY="73zrfLwsQvyOL4F8B4EmM5lidJ3O3t7Z",this.POP_URL="mostpopular/v2/viewed/1.json",this.SEARCH_URL="search/v2/articlesearch.json",this.CATEGORY_URL="news/v3/content/all/",this.totalHits=0,this.mostPopUrl=`${this.BASE_URL}${this.POP_URL}?api-key=${this.API_KEY}`,this.page=1,this.searchQuery="election",this.searchUrl=`${this.BASE_URL}${this.SEARCH_URL}?q=${this.searchQuery}&page=${this.page}&api-key=${this.API_KEY}`,this.sectionListUrl=`${this.BASE_URL}news/v3/content/section-list.json?api-key=${this.API_KEY}`,this.category="world",this.limit=20,this.categorySearchUrl=`${this.BASE_URL}${this.CATEGORY_URL}${this.category}.json?limit=${this.limit}&offset=${this.page}&api-key=${this.API_KEY}`}};let vn=new class{createPagination(e,t){let n,i;this.totalPages=e,e<=10?(n=1,i=e):t<=3?(n=1,i=4):t+2>=e?(n=e-3,i=e):(n=t-1,i=t+1);const r=[];for(let e=n;e<=i;e++)r.push(e);let s=[];n>1&&(s.push('<button class="page__btn arrow-left"></button>'),s.push('<button class="page__btn">1</button>'),s.push('<button class="page__btn pre-dots">...</button>'));for(let e of r)e===t?s.push(`<button class="current--page">${e}</button>`):s.push(e);return i<e&&(s.push('<button class="page__btn post-dots">...</button>'),s.push(`<button class="page__btn">${e}</button>`),s.push('<button class="page__btn arrow-right"></button>')),s}renderPagination(e){for(let t of e){const e=document.createElement("li");e.classList.add("page-item"),e.innerHTML="number"==typeof t?`<button class="page__btn page__num">${t}</button>`:t,this.paginationContainer.appendChild(e)}}genCurrentPage(){return this.currentPage}constructor(){this.paginationContainer=document.getElementById("pagination-container"),this.currentPage=1,this.totalPages}};async function _n(e){if(e.classList.contains("arrow-left")){vn.currentPage=+vn.currentPage-1,vn.paginationContainer.innerHTML="";const e=vn.createPagination(vn.totalPages,vn.currentPage);vn.renderPagination(e)}else if(e.classList.contains("arrow-right")){vn.currentPage=+vn.currentPage+1,vn.paginationContainer.innerHTML="";const e=vn.createPagination(vn.totalPages,vn.currentPage);vn.renderPagination(e)}else if(e.classList.contains("post-dots")){vn.currentPage=Math.ceil((+vn.currentPage+ +vn.totalPages)/2),vn.paginationContainer.innerHTML="";const e=vn.createPagination(vn.totalPages,vn.currentPage);vn.renderPagination(e)}else if(e.classList.contains("pre-dots")){vn.currentPage=Math.ceil(+vn.currentPage/2),vn.paginationContainer.innerHTML="";const e=vn.createPagination(vn.totalPages,vn.currentPage);vn.renderPagination(e)}else{e=e.textContent,vn.currentPage=+e,vn.paginationContainer.innerHTML="";const t=vn.createPagination(vn.totalPages,vn.currentPage);vn.renderPagination(t)}}const wn=document.querySelector(".gallery");function bn(e){const t=e.map((({abstract:e,pub_date:t,multimedia:n,headline:i,keywords:r})=>`<div class="card">\n\n            <div class="card-photo">\n            <div class="photo"><a href="" alt=""></a>\n      \t\t<img src="https://www.nytimes.com/${n[0].url}" alt="${r.value}" width = "300" height = "220" loading="lazy" />\n\t\t\n            <div class="card-category"></div>\n            <button type="button" class="add-to-favorite">Add to favorite</button>\n\t        </div>\n\n            <h2 class="card-title">${i.main}</h2>\n            <p class="card-info">${e}</p>\n\t        <span class="card-date">${t}</span>\n            <button type="button" class="read-more">Read more</button>\n \n            </div>`)).join("");wn.innerHTML=t}var Dn,Sn,kn,En=Dn={};function Tn(){throw new Error("setTimeout has not been defined")}function In(){throw new Error("clearTimeout has not been defined")}function On(e){if(Sn===setTimeout)return setTimeout(e,0);if((Sn===Tn||!Sn)&&setTimeout)return Sn=setTimeout,setTimeout(e,0);try{return Sn(e,0)}catch(t){try{return Sn.call(null,e,0)}catch(t){return Sn.call(this,e,0)}}}!function(){try{Sn="function"==typeof setTimeout?setTimeout:Tn}catch(e){Sn=Tn}try{kn="function"==typeof clearTimeout?clearTimeout:In}catch(e){kn=In}}();var Cn,Mn=[],Rn=!1,An=-1;function Nn(){Rn&&Cn&&(Rn=!1,Cn.length?Mn=Cn.concat(Mn):An=-1,Mn.length&&Pn())}function Pn(){if(!Rn){var e=On(Nn);Rn=!0;for(var t=Mn.length;t;){for(Cn=Mn,Mn=[];++An<t;)Cn&&Cn[An].run();An=-1,t=Mn.length}Cn=null,Rn=!1,function(e){if(kn===clearTimeout)return clearTimeout(e);if((kn===In||!kn)&&clearTimeout)return kn=clearTimeout,clearTimeout(e);try{kn(e)}catch(t){try{return kn.call(null,e)}catch(t){return kn.call(this,e)}}}(e)}}function Ln(e,t){this.fun=e,this.array=t}function xn(){}En.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Mn.push(new Ln(e,t)),1!==Mn.length||Rn||On(Pn)},Ln.prototype.run=function(){this.fun.apply(null,this.array)},En.title="browser",En.browser=!0,En.env={},En.argv=[],En.version="",En.versions={},En.on=xn,En.addListener=xn,En.once=xn,En.off=xn,En.removeListener=xn,En.removeAllListeners=xn,En.emit=xn,En.prependListener=xn,En.prependOnceListener=xn,En.listeners=function(e){return[]},En.binding=function(e){throw new Error("process.binding is not supported")},En.cwd=function(){return"/"},En.chdir=function(e){throw new Error("process.chdir is not supported")},En.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Fn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Un(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new $n;const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bn=function(e){return function(e){const t=Un(e);return Fn.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Hn=function(e){try{return Fn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jn=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Vn=()=>{try{return jn()||(()=>{if(void 0===Dn||void 0===Dn.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Hn(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Yn=e=>{var t,n;return null===(n=null===(t=Vn())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Wn=e=>{var t;return null===(t=Vn())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function qn(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Kn(){const e=Gn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Jn(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Zn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Xn,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Zn(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Xn=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ti(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(ni(n)&&ni(s)){if(!ti(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function ni(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ii(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ri(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function si(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(e,t){const n=new ai(e,t);return n.subscribe.bind(n)}class ai{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ci),void 0===i.error&&(i.error=ci),void 0===i.complete&&(i.complete=ci);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ci(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function li(e){return e&&e._delegate?e._delegate:e}class hi{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new zn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class di{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ui(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=[];var pi,mi;(mi=pi||(pi={}))[mi.DEBUG=0]="DEBUG",mi[mi.VERBOSE=1]="VERBOSE",mi[mi.INFO=2]="INFO",mi[mi.WARN=3]="WARN",mi[mi.ERROR=4]="ERROR",mi[mi.SILENT=5]="SILENT";const gi={debug:pi.DEBUG,verbose:pi.VERBOSE,info:pi.INFO,warn:pi.WARN,error:pi.ERROR,silent:pi.SILENT},yi=pi.INFO,vi={[pi.DEBUG]:"log",[pi.VERBOSE]:"log",[pi.INFO]:"info",[pi.WARN]:"warn",[pi.ERROR]:"error"},_i=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=vi[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class wi{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pi))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?gi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pi.DEBUG,...e),this._logHandler(this,pi.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pi.VERBOSE,...e),this._logHandler(this,pi.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pi.INFO,...e),this._logHandler(this,pi.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pi.WARN,...e),this._logHandler(this,pi.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pi.ERROR,...e),this._logHandler(this,pi.ERROR,...e)}constructor(e){this.name=e,this._logLevel=yi,this._logHandler=_i,this._userLogHandler=null,fi.push(this)}}let bi,Di;const Si=new WeakMap,ki=new WeakMap,Ei=new WeakMap,Ti=new WeakMap,Ii=new WeakMap;let Oi={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ki.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ei.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ri(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ci(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Di||(Di=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ai(this),t),Ri(Si.get(this))}:function(...t){return Ri(e.apply(Ai(this),t))}:function(t,...n){const i=e.call(Ai(this),t,...n);return Ei.set(i,t.sort?t.sort():[t]),Ri(i)}}function Mi(e){return"function"==typeof e?Ci(e):(e instanceof IDBTransaction&&function(e){if(ki.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));ki.set(e,t)}(e),t=e,(bi||(bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Oi):e);var t}function Ri(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Ri(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Si.set(t,e)})).catch((()=>{})),Ii.set(t,e),t}(e);if(Ti.has(e))return Ti.get(e);const t=Mi(e);return t!==e&&(Ti.set(e,t),Ii.set(t,e)),t}const Ai=e=>Ii.get(e);function Ni(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Ri(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Ri(o.result),e.oldVersion,e.newVersion,Ri(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Pi=["get","getKey","getAll","getAllKeys","count"],Li=["put","add","delete","clear"],xi=new Map;function Ui(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(xi.get(t))return xi.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Li.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Pi.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return xi.set(t,s),s}Oi=(e=>({...e,get:(t,n,i)=>Ui(t,n)||e.get(t,n,i),has:(t,n)=>!!Ui(t,n)||e.has(t,n)}))(Oi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const $i=new wi("@firebase/app"),Bi={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Hi=new Map,ji=new Map;function Vi(e,t){try{e.container.addComponent(t)}catch(n){$i.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Yi(e){const t=e.name;if(ji.has(t))return $i.debug(`There were multiple attempts to register component ${t}.`),!1;ji.set(t,e);for(const t of Hi.values())Vi(t,e);return!0}function Wi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zi=new Qn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zi.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new hi("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw zi.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=Vn())||void 0===s?void 0:s.config),!n)throw zi.create("no-options");const o=Hi.get(r);if(o){if(ti(n,o.options)&&ti(i,o.config))return o;throw zi.create("duplicate-app",{appName:r})}const a=new di(r);for(const e of ji.values())a.addComponent(e);const c=new Gi(n,i,a);return Hi.set(r,c),c}function Ki(e="[DEFAULT]"){const t=Hi.get(e);if(!t&&"[DEFAULT]"===e)return qi();if(!t)throw zi.create("no-app",{appName:e});return t}function Ji(e,t,n){var i;let r=null!==(i=Bi[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void $i.warn(e.join(" "))}Yi(new hi(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Zi=null;function Qi(){return Zi||(Zi=Ni("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw zi.create("idb-open",{originalErrorMessage:e.message})}))),Zi}async function Xi(e,t){try{const n=(await Qi()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,er(e)),n.done}catch(e){if(e instanceof Zn)$i.warn(e.message);else{const t=zi.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});$i.warn(t.message)}}}function er(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=nr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=nr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),rr(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),rr(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Bn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ir(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function nr(){return(new Date).toISOString().substring(0,10)}class ir{async runIndexedDBEnvironmentCheck(){return!!Jn()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Qi()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(er(e))}catch(e){if(e instanceof Zn)$i.warn(e.message);else{const t=zi.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});$i.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function rr(e){return Bn(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sr;sr="",Yi(new hi("platform-logger",(e=>new Fi(e)),"PRIVATE")),Yi(new hi("heartbeat",(e=>new tr(e)),"PRIVATE")),Ji("@firebase/app","0.9.5",sr),Ji("@firebase/app","0.9.5","esm2017"),Ji("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ji("firebase","9.18.0","app");function or(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function ar(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cr=ar,lr=new Qn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),hr=new wi("@firebase/auth");function ur(e,...t){hr.logLevel<=pi.ERROR&&hr.error(`Auth (9.18.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e,...t){throw mr(e,...t)}function fr(e,...t){return mr(e,...t)}function pr(e,t,n){const i=Object.assign(Object.assign({},cr()),{[t]:n});return new Qn("auth","Firebase",i).create(t,{appName:e.name})}function mr(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return lr.create(e,...t)}function gr(e,t,...n){if(!e)throw mr(t,...n)}function yr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ur(t),new Error(t)}function vr(e,t){e||yr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map;function wr(e){vr(e instanceof Function,"Expected a class definition");let t=_r.get(e);return t?(vr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_r.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function br(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Dr(){return"http:"===Sr()||"https:"===Sr()}function Sr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Dr()||qn()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{get(){return kr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,vr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gn())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e,t){vr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Cr=new Er(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Rr(e,t,n,i,r={}){return Ar(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=ii(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ir.fetch()(Pr(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ar(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Or),t);try{const t=new Lr(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw xr(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xr(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw xr(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw xr(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw pr(e,a,o);dr(e,a)}}catch(t){if(t instanceof Zn)throw t;dr(e,"internal-error",{message:String(t)})}}async function Nr(e,t,n,i,r={}){const s=await Rr(e,t,n,i,r);return"mfaPendingCredential"in s&&dr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Pr(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Tr(e.config,r):`${e.config.apiScheme}://${r}`}class Lr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(fr(this.auth,"network-request-failed"))),Cr.get())}))}}function xr(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=fr(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ur(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){return 1e3*Number(e)}function $r(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const e=Hn(n);return e?JSON.parse(e):(ur("Failed to decode base64 JWT payload"),null)}catch(e){return ur("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Br(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Zn&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Hr{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{_initializeTime(){this.lastSignInTime=Ur(this.lastLoginAt),this.creationTime=Ur(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Br(e,async function(e,t){return Rr(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));gr(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=or(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const h=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jr(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){gr(e.idToken,"internal-error"),gr(void 0!==e.idToken,"internal-error"),gr(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=$r(e);return gr(t,"internal-error"),gr(void 0!==t.exp,"internal-error"),gr(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return gr(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ar(e,{},(async()=>{const n=ii({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Pr(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ir.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Yr;return n&&(gr("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(gr("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(gr("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return yr("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(e,t){gr("string"==typeof e||void 0===e,"internal-error",{appName:t})}class zr{async getIdToken(e){const t=await Br(this,this.stsTokenManager.getToken(this.auth,e));return gr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=li(e),i=await n.getIdToken(t),r=$r(i);gr(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ur(Fr(r.auth_time)),issuedAtTime:Ur(Fr(r.iat)),expirationTime:Ur(Fr(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=li(e);await Vr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(gr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){gr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Vr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Br(this,async function(e,t){return Rr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:D}=t;gr(v&&D,e,"internal-error");const S=Yr.fromJSON(this.name,D);gr("string"==typeof v,e,"internal-error"),Wr(h,e.name),Wr(u,e.name),gr("boolean"==typeof _,e,"internal-error"),gr("boolean"==typeof w,e,"internal-error"),Wr(d,e.name),Wr(f,e.name),Wr(p,e.name),Wr(m,e.name),Wr(g,e.name),Wr(y,e.name);const k=new zr({uid:v,auth:e,email:u,emailVerified:_,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(k.providerData=b.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const i=new Yr;i.updateFromServerResponse(t);const r=new zr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Vr(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=or(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jr(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Gr.type="NONE";const qr=Gr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e,t,n){return`firebase:${e}:${t}:${n}`}class Jr{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Jr(wr(qr),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||wr(qr);const s=Kr(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=zr._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Jr(r,e,n)):new Jr(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Kr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Kr("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ts(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(is(t))return"Blackberry";if(rs(t))return"Webos";if(Xr(t))return"Safari";if((t.includes("chrome/")||es(t))&&!t.includes("edge/"))return"Chrome";if(ns(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Qr(e=Gn()){return/firefox\//i.test(e)}function Xr(e=Gn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function es(e=Gn()){return/crios\//i.test(e)}function ts(e=Gn()){return/iemobile/i.test(e)}function ns(e=Gn()){return/android/i.test(e)}function is(e=Gn()){return/blackberry/i.test(e)}function rs(e=Gn()){return/webos/i.test(e)}function ss(e=Gn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function os(){return Kn()&&10===document.documentMode}function as(e=Gn()){return ss(e)||ns(e)||rs(e)||is(e)||/windows phone/i.test(e)||ts(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cs(e,t=[]){let n;switch(e){case"Browser":n=Zr(Gn());break;case"Worker":n=`${Zr(Gn())}-${e}`;break;default:n=e}return`${n}/JsCore/9.18.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return gr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vr(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?li(e):null;return t&&gr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&gr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(wr(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;gr(t,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return gr(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return gr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ds(this),this.idTokenSubscription=new ds(this),this.beforeStateQueue=new ls(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function us(e){return li(e)}class ds{get next(){return gr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=oi((e=>this.observer=e))}}function fs(e,t,n){const i=us(e);gr(i._canInitEmulator,i,"emulator-config-failed"),gr(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=ps(t),{host:o,port:a}=function(e){const t=ps(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:ms(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:ms(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function ps(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ms(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class gs{toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,t){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(e,t){return Rr(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs extends gs{static _fromEmailAndPassword(e,t){return new vs(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new vs(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nr(e,"POST","/v1/accounts:signInWithPassword",Mr(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Nr(e,"POST","/v1/accounts:signInWithEmailLink",Mr(e,t))}(e,{email:this._email,oobCode:this._password});default:dr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ys(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Nr(e,"POST","/v1/accounts:signInWithEmailLink",Mr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:dr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(e,t){return Nr(e,"POST","/v1/accounts:signInWithIdp",Mr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends gs{static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=or(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new ws(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return _s(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,_s(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_s(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ii(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds extends gs{static _fromVerification(e,t){return new Ds({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ds({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Nr(e,"POST","/v1/accounts:signInWithPhoneNumber",Mr(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Nr(e,"POST","/v1/accounts:signInWithPhoneNumber",Mr(e,t));if(n.temporaryProof)throw xr(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Nr(e,"POST","/v1/accounts:signInWithPhoneNumber",Mr(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),bs)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Ds({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{static parseLink(e){const t=function(e){const t=ri(si(e)).link,n=t?ri(si(t)).deep_link_id:null,i=ri(si(e)).deep_link_id;return(i?ri(si(i)).link:null)||i||n||t||e}(e);try{return new Ss(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=ri(si(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);gr(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{static credential(e,t){return vs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ss.parseLink(t);return gr(n,"argument-error"),vs._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=ks.PROVIDER_ID}}ks.PROVIDER_ID="password",ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Es{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is extends Ts{static credential(e){return ws._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Is.FACEBOOK_SIGN_IN_METHOD="facebook.com",Is.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os extends Ts{static credential(e,t){return ws._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Os.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Os.GOOGLE_SIGN_IN_METHOD="google.com",Os.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs extends Ts{static credential(e){return ws._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Cs.GITHUB_SIGN_IN_METHOD="github.com",Cs.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms extends Ts{static credential(e,t){return ws._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ms.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Ms.TWITTER_SIGN_IN_METHOD="twitter.com",Ms.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await zr._fromIdTokenResponse(e,n,i),s=As(n);return new Rs({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=As(n);return new Rs({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function As(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns extends Zn{static _fromErrorAndOperation(e,t,n,i){return new Ns(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Ps(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ns._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(e,t,n=!1){const i=await Br(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Rs._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xs(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Br(e,Ps(i,r,t,e),n);gr(s.idToken,i,"internal-error");const o=$r(s.idToken);gr(o,i,"internal-error");const{sub:a}=o;return gr(e.uid===a,i,"user-mismatch"),Rs._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&dr(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(e,t,n=!1){const i="signIn",r=await Ps(e,i,t),s=await Rs._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Fs(e,t){return Us(us(e),t)}function $s(e,t,n){return Fs(li(e),ks.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Bs{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);os()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Gn();return Xr(e)||ss(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=as(),this._shouldAllowMigration=!0}}Hs.type="LOCAL";const js=Hs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends Bs{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Vs.type="SESSION";const Ys=Vs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ws(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zs(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ws.receivers=[];class Gs{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=zs("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ks(){return void 0!==qs().WorkerGlobalScope&&"function"==typeof qs().importScripts}class Js{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Zs(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Qs(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Js(e).toPromise()}(),t(await Qs()))}))}))}async function Xs(e,t,n){const i=Zs(e,!0).put({fbase_key:t,value:n});return new Js(i).toPromise()}function eo(e,t){const n=Zs(e,!0).delete(t);return new Js(n).toPromise()}class to{async _openDb(){return this.db||(this.db=await Qs()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ks()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(Ks()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qs();return await Xs(e,"__sak","1"),await eo(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xs(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Zs(e,!1).get(t),i=await new Js(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>eo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Zs(e,!1).getAll();return new Js(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}to.type="LOCAL";const no=to;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=fr("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ro(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ro("rcb"),new Er(3e4,6e4);async function so(e,t,n){var i;const r=await n.verify();try{let s;if(gr("string"==typeof r,e,"argument-error"),gr("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){gr("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Rr(e,"POST","/v2/accounts/mfaEnrollment:start",Mr(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{gr("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;gr(n,e,"missing-multi-factor-info");const o=await function(e,t){return Rr(e,"POST","/v2/accounts/mfaSignIn:start",Mr(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Rr(e,"POST","/v1/accounts:sendVerificationCode",Mr(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oo{verifyPhoneNumber(e,t){return so(this.auth,e,li(t))}static credential(e,t){return Ds._fromVerification(e,t)}static credentialFromResult(e){const t=e;return oo.credentialFromTaggedObject(t)}static credentialFromError(e){return oo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ds._fromTokenResponse(t,n):null}constructor(e){this.providerId=oo.PROVIDER_ID,this.auth=us(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ao(e,t){return t?wr(t):(gr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oo.PROVIDER_ID="phone",oo.PHONE_SIGN_IN_METHOD="phone";class co extends gs{_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _s(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function lo(e){return Us(e.auth,new co(e),e.bypassAuthState)}function ho(e){const{auth:t,user:n}=e;return gr(n,t,"internal-error"),xs(n,new co(e),e.bypassAuthState)}async function uo(e){const{auth:t,user:n}=e;return gr(n,t,"internal-error"),Ls(n,new co(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lo;case"linkViaPopup":case"linkViaRedirect":return uo;case"reauthViaPopup":case"reauthViaRedirect":return ho;default:dr(this.auth,"internal-error")}}resolve(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Er(2e3,1e4);class mo extends fo{async executeNotNull(){const e=await this.execute();return gr(e,this.auth,"internal-error"),e}async onExecution(){vr(1===this.filter.length,"Popup operations only handle one event");const e=zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(fr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,po.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,mo.currentPopupAction&&mo.currentPopupAction.cancel(),mo.currentPopupAction=this}}mo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const go=new Map;class yo extends fo{async execute(){let e=go.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=wo(t),i=_o(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function vo(e,t){go.set(e._key(),t)}function _o(e){return wr(e._redirectPersistence)}function wo(e){return Kr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(e,t,n=!1){const i=us(e),r=ao(i,t),s=new yo(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Do{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ko(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ko(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(fr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(So(e))}saveEventToCache(e){this.cachedEventUids.add(So(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function So(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ko({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Eo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,To=/^https?/;async function Io(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Rr(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Oo(e))return}catch(e){}dr(e,"unauthorized-domain")}function Oo(e){const t=br(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!To.test(n))return!1;if(Eo.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Er(3e4,6e4);function Mo(){const e=qs().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ro=null;function Ao(e){return Ro=Ro||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){Mo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mo(),n(fr(e,"network-request-failed"))},timeout:Co.get()})}if(null===(r=null===(i=qs().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=qs().gapi)||void 0===s?void 0:s.load)){const t=ro("iframefcb");return qs()[t]=()=>{gapi.load?o():n(fr(e,"network-request-failed"))},io(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ro=null,e}))}(e),Ro}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Er(5e3,15e3),Po={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xo(e){const t=e.config;gr(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Tr(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.18.0"},r=Lo.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ii(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Uo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Fo{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function $o(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Uo),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Gn().toLowerCase();n&&(a=es(l)?"_blank":n),Qr(l)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Gn()){var t;return ss(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Fo(null);const u=window.open(t||"",a,h);gr(u,e,"popup-blocked");try{u.focus()}catch(e){}return new Fo(u)}function Bo(e,t,n,i,r,s){gr(e.config.authDomain,e,"auth-domain-config-required"),gr(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.18.0",eventId:r};if(t instanceof Es){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ei(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ts){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Tr(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ii(a).slice(1)}`}const Ho=class{async _openPopup(e,t,n,i){var r;vr(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return $o(e,Bo(e,t,n,br(),i),zs())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Bo(e,t,n,br(),i),qs().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(vr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ao(e),n=qs().gapi;return gr(n,e,"internal-error"),t.open({where:document.body,url:xo(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Po,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=fr(e,"network-request-failed"),s=qs().setTimeout((()=>{i(r)}),No.get());function o(){qs().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Do(e);return t.register("authEvent",(t=>{gr(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),dr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Io(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return as()||Xr()||ss()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ys,this._completeRedirectFn=bo,this._overrideRedirectResult=vo}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){gr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vo=Wn("authIdTokenMaxAge")||300;let Yo=null;var Wo;Wo="Browser",Yi(new hi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((e,n)=>{gr(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),gr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:Wo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cs(Wo)},o=new hs(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(wr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Yi(new hi("auth-internal",(e=>{const t=us(e.getProvider("auth").getImmediate());return new jo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ji("@firebase/auth","0.21.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wo)),Ji("@firebase/auth","0.21.5","esm2017");const zo=function(e=Ki()){const t=Wi(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Wi(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ti(n.getOptions(),null!=t?t:{}))return e;dr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Ho,persistence:[no,js,Ys]}),i=Wn("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Vo)return;const i=null==t?void 0:t.token;Yo!==i&&(Yo=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){li(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){li(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=Yn("auth");return s&&fs(n,`http://${s}`),n}(qi({apiKey:"AIzaSyBSt5AK9ankO22Qk0ytWWjzBr4utQCOgH8",authDomain:"fir-test-4ec8b.firebaseapp.com",projectId:"fir-test-4ec8b",storageBucket:"fir-test-4ec8b.appspot.com",messagingSenderId:"941413940221",appId:"1:941413940221:web:19b2f749a8bacf86113794"})),Go={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function qo(){Go.modal.classList.toggle("is-hidden")}Go.openModalBtn.addEventListener("click",(function(){"Logout"===Go.openModalBtn.textContent?async function(){await zo.signOut()}():qo()})),Go.closeModalBtn.addEventListener("click",qo);const Ko=document.querySelector(".loginState"),Jo=document.querySelector(".button-authorization"),Zo=document.getElementById("modal-error-message-area");const Qo={themeSwitcherEl:document.querySelector("#theme"),bodyEl:document.body,lightTextEls:document.querySelectorAll(".light-text"),switcherLightEl:document.querySelector(".switcher__text-light"),switcherDarkEl:document.querySelector(".switcher__text-dark"),linksEl:document.querySelectorAll(".nav__link"),logoEl:document.querySelector(".header__logo"),searchInputEl:document.querySelector(".search-form__input"),searchIconEl:document.querySelector(".search-form__icon")};"dark"===localStorage.getItem("selectedTheme")&&(Qo.themeSwitcherEl.checked=!0,Qo.bodyEl.classList.add("dark-mode"),Qo.switcherLightEl.classList.add("switcher-dark"),Qo.switcherDarkEl.classList.add("switcher-light"),Qo.linksEl.forEach((e=>e.classList.add("light-text"))),Qo.logoEl.classList.add("light-text"),Qo.searchInputEl.classList.add("search-form__input--dark"),Qo.searchIconEl.classList.add("search-form__icon--dark"),Qo.searchIconEl.setAttribute("fill","#fff")),Qo.themeSwitcherEl.addEventListener("change",(function(){Qo.bodyEl.classList.toggle("dark-mode"),Qo.switcherLightEl.classList.toggle("switcher-dark"),Qo.switcherDarkEl.classList.toggle("switcher-light"),Qo.linksEl.forEach((e=>e.classList.toggle("light-text"))),Qo.logoEl.classList.toggle("light-text"),Qo.searchInputEl.classList.toggle("search-form__input--dark"),Qo.searchIconEl.classList.toggle("search-form__icon--dark"),Qo.searchIconEl.setAttribute("fill",Qo.bodyEl.classList.contains("dark-mode")?"#fff":""),localStorage.setItem("selectedTheme",Qo.bodyEl.classList.contains("dark-mode")?"dark":"light")}));var Xo,ea=s("cxTnx");Xo=new URL(s("kyEFX").resolve("Vj47w"),import.meta.url).toString();const ta=document.querySelector("#weather");let na;const ia=n(ea)(new Date),ra=ia.format("D MMM YYYY"),sa=ia.format("ddd");navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){let t=e.coords.latitude,i=e.coords.longitude;na=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${i}&units=metric&appid=92b7ae078a5ceba812c34c84b6f882cb`,async function(){try{const t=await fetch(na);e(await t.json())}catch(e){console.log(e.message)}function e(e){const t=e.name,i=Math.round(e.main.temp),r=e.weather[0].main,s=e.weather[0].icon,o=`<div class="weather-header">\n<p class="weather-temp">${i}&deg;</p>\n<div class="weather-main">\n  <p class="weather-status">${r}</p>\n  <div class="weather-city_box">\n  <img class="location-icon" src ="${n(Xo)}" alt = "location" width = "27" height = "27">\n  <p class="weather-city">${t}</p>\n    </div>\n</div>\n</div>\n\n<img class="weather-icon" src="http://openweathermap.org/img/wn/${s}@2x.png" alt="${r}" >\n\n<ul class="weather-date">\n<li class="weather-day">${sa}</li>\n<li class="weather-month">${ra}</li>\n</ul>`;ta.innerHTML=o}}()})):alert("Your browser not support geolocation api");var oa=n(function(){var e={d:function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return V}});var n={days:"days",months:"months",years:"years",day:"day",month:"month",year:"year",eventChangeViewDate:"changeViewDate",eventChangeCurrentView:"changeCurrentView",eventChangeFocusDate:"changeFocusDate",eventChangeSelectedDate:"changeSelectedDate",eventChangeTime:"changeTime",eventChangeLastSelectedDate:"changeLastSelectedDate",actionSelectDate:"selectDate",actionUnselectDate:"unselectDate",cssClassWeekend:"-weekend-"},i={classes:"",inline:!1,locale:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.MM.yyyy",timeFormat:"HH:mm",firstDay:1},startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"T",toggleSelected:!0,keyboardNav:!0,selectedDates:!1,container:"",isMobile:!1,visible:!1,position:"bottom left",offset:12,view:n.days,minView:n.days,showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:", ",range:!1,dynamicRange:!0,buttons:!1,monthsField:"monthsShort",showEvent:"focus",autoClose:!1,prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MMMM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:!1,onChangeViewDate:!1,onChangeView:!1,onRenderCell:!1,onShow:!1,onHide:!1,onClickDayName:!1};function r(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?t.querySelector(e):e}function s(){let{tagName:e="div",className:t="",innerHtml:n="",id:i="",attrs:r={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=document.createElement(e);return t&&s.classList.add(...t.split(" ")),i&&(s.id=i),n&&(s.innerHTML=n),r&&o(s,r),s}function o(e,t){for(let[n,i]of Object.entries(t))void 0!==i&&e.setAttribute(n,i);return e}function a(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function c(e){let t=e.getHours(),{hours:n,dayPeriod:i}=l(t);return{year:e.getFullYear(),month:e.getMonth(),fullMonth:e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,date:e.getDate(),fullDate:e.getDate()<10?"0"+e.getDate():e.getDate(),day:e.getDay(),hours:t,fullHours:h(t),hours12:n,dayPeriod:i,fullHours12:h(n),minutes:e.getMinutes(),fullMinutes:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}}function l(e){return{dayPeriod:e>11?"pm":"am",hours:e%12==0?12:e%12}}function h(e){return e<10?"0"+e:e}function u(e){let t=10*Math.floor(e.getFullYear()/10);return[t,t+9]}function d(){let e=[];for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.forEach((t=>{if("object"==typeof t)for(let n in t)t[n]&&e.push(n);else t&&e.push(t)})),e.join(" ")}function f(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.days;if(!e||!t)return!1;let r=c(e),s=c(t);return{[n.days]:r.date===s.date&&r.month===s.month&&r.year===s.year,[n.months]:r.month===s.month&&r.year===s.year,[n.years]:r.year===s.year}[i]}function p(e,t,n){let i=g(e,!1).getTime(),r=g(t,!1).getTime();return n?i>=r:i>r}function m(e,t){return!p(e,t,!0)}function g(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Date(e.getTime());return"boolean"!=typeof t||t||y(n),n}function y(e){return e.setHours(0,0,0,0),e}function v(e,t,n){e.length?e.forEach((e=>{e.addEventListener(t,n)})):e.addEventListener(t,n)}function _(e,t){return!(!e||e===document||e instanceof DocumentFragment)&&(e.matches(t)?e:_(e.parentNode,t))}function w(e,t,n){return e>n?n:e<t?t:e}function b(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return n.filter((e=>e)).forEach((t=>{for(let[n,i]of Object.entries(t))if(void 0!==i&&"[object Object]"===i.toString()){let t=void 0!==e[n]?e[n].toString():void 0,r=i.toString(),s=Array.isArray(i)?[]:{};e[n]=e[n]?t!==r?s:e[n]:s,b(e[n],i)}else e[n]=i})),e}function D(e){let t=e;return e instanceof Date||(t=new Date(e)),isNaN(t.getTime())&&(console.log(`Unable to convert value "${e}" to Date object`),t=!1),t}function S(e){let t="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+t+")("+e+")($|<|"+t+")","g")}function k(e,t,n){return i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t,"string"),(t="symbol"==typeof i?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var i}class E{init(){let{range:e,onRenderCell:t}=this.opts;t&&(this.customData=t({date:this.date,cellType:this.singleType,datepicker:this.dp})),this._createElement(),this._bindDatepickerEvents(),this._handleInitialFocusStatus(),this.dp.hasSelectedDates&&(this._handleSelectedStatus(),e&&this._handleRangeStatus())}_bindDatepickerEvents(){this.dp.on(n.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(n.eventChangeFocusDate,this.onChangeFocusDate)}unbindDatepickerEvents(){this.dp.off(n.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(n.eventChangeFocusDate,this.onChangeFocusDate)}_createElement(){var e;let{year:t,month:n,date:i}=c(this.date),r=(null===(e=this.customData)||void 0===e?void 0:e.attrs)||{};this.$cell=s({className:this._getClassName(),attrs:{"data-year":t,"data-month":n,"data-date":i,...r}})}_getClassName(){var e,t;let i=new Date,{selectOtherMonths:r,selectOtherYears:s}=this.opts,{minDate:o,maxDate:a}=this.dp,{day:l}=c(this.date),h=this._isOutOfMinMaxRange(),u=null===(e=this.customData)||void 0===e?void 0:e.disabled,p=d("air-datepicker-cell",`-${this.singleType}-`,{"-current-":f(i,this.date,this.type),"-min-date-":o&&f(o,this.date,this.type),"-max-date-":a&&f(a,this.date,this.type)}),m="";switch(this.type){case n.days:m=d({"-weekend-":this.dp.isWeekend(l),"-other-month-":this.isOtherMonth,"-disabled-":this.isOtherMonth&&!r||h||u});break;case n.months:m=d({"-disabled-":h||u});break;case n.years:m=d({"-other-decade-":this.isOtherDecade,"-disabled-":h||this.isOtherDecade&&!s||u})}return d(p,m,null===(t=this.customData)||void 0===t?void 0:t.classes)}_getHtml(){var e;let{year:t,month:i,date:r}=c(this.date),{showOtherMonths:s,showOtherYears:o}=this.opts;if(null!==(e=this.customData)&&void 0!==e&&e.html)return this.customData.html;switch(this.type){case n.days:return!s&&this.isOtherMonth?"":r;case n.months:return this.dp.locale[this.opts.monthsField][i];case n.years:return!o&&this.isOtherDecade?"":t}}_isOutOfMinMaxRange(){let{minDate:e,maxDate:t}=this.dp,{type:i,date:r}=this,{month:s,year:o,date:a}=c(r),l=i===n.days,h=i===n.years,u=!!e&&new Date(o,h?e.getMonth():s,l?a:e.getDate()),d=!!t&&new Date(o,h?t.getMonth():s,l?a:t.getDate());return e&&t?m(u,e)||p(d,t):e?m(u,e):t?p(d,t):void 0}destroy(){this.unbindDatepickerEvents()}_handleRangeStatus(){let{rangeDateFrom:e,rangeDateTo:t}=this.dp,n=d({"-in-range-":e&&t&&(i=this.date,r=e,s=t,p(i,r)&&m(i,s)),"-range-from-":e&&f(this.date,e,this.type),"-range-to-":t&&f(this.date,t,this.type)});var i,r,s;this.$cell.classList.remove("-range-from-","-range-to-","-in-range-"),n&&this.$cell.classList.add(...n.split(" "))}_handleSelectedStatus(){let e=this.dp._checkIfDateIsSelected(this.date,this.type);e?this.select():!e&&this.selected&&this.removeSelect()}_handleInitialFocusStatus(){f(this.dp.focusDate,this.date,this.type)&&this.focus()}get isDisabled(){return this.$cell.matches(".-disabled-")}get isOtherMonth(){return this.dp.isOtherMonth(this.date)}get isOtherDecade(){return this.dp.isOtherDecade(this.date)}constructor(){let{type:e,date:t,dp:n,opts:i,body:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k(this,"focus",(()=>{this.$cell.classList.add("-focus-"),this.focused=!0})),k(this,"removeFocus",(()=>{this.$cell.classList.remove("-focus-"),this.focused=!1})),k(this,"select",(()=>{this.$cell.classList.add("-selected-"),this.selected=!0})),k(this,"removeSelect",(()=>{this.$cell.classList.remove("-selected-","-range-from-","-range-to-"),this.selected=!1})),k(this,"onChangeSelectedDate",(()=>{this.isDisabled||(this._handleSelectedStatus(),this.opts.range&&this._handleRangeStatus())})),k(this,"onChangeFocusDate",(e=>{if(!e)return void(this.focused&&this.removeFocus());let t=f(e,this.date,this.type);t?this.focus():!t&&this.focused&&this.removeFocus(),this.opts.range&&this._handleRangeStatus()})),k(this,"render",(()=>(this.$cell.innerHTML=this._getHtml(),this.$cell.adpCell=this,this.$cell))),this.type=e,this.singleType=this.type.slice(0,-1),this.date=t,this.dp=n,this.opts=i,this.body=r,this.customData=!1,this.init()}}function T(e,t,n){return i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t,"string"),(t="symbol"==typeof i?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var i}let I={[n.days]:`<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${n.days}-"></div>`,[n.months]:`<div class="air-datepicker-body--cells -${n.months}-"></div>`,[n.years]:`<div class="air-datepicker-body--cells -${n.years}-"></div>`};const O=".air-datepicker-cell";class C{init(){this._buildBaseHtml(),this.type===n.days&&this.renderDayNames(),this.render(),this._bindEvents(),this._bindDatepickerEvents()}_bindEvents(){let{range:e,dynamicRange:t}=this.opts;v(this.$el,"mouseover",this.onMouseOverCell),v(this.$el,"mouseout",this.onMouseOutCell),v(this.$el,"click",this.onClickBody),e&&t&&(v(this.$el,"mousedown",this.onMouseDown),v(this.$el,"mousemove",this.onMouseMove),v(window.document,"mouseup",this.onMouseUp))}_bindDatepickerEvents(){this.dp.on(n.eventChangeViewDate,this.onChangeViewDate),this.dp.on(n.eventChangeCurrentView,this.onChangeCurrentView)}_buildBaseHtml(){this.$el=s({className:`air-datepicker-body -${this.type}-`,innerHtml:I[this.type]}),this.$names=r(".air-datepicker-body--day-names",this.$el),this.$cells=r(".air-datepicker-body--cells",this.$el)}_getDayNamesHtml(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.dp.locale.firstDay,t="",i=this.dp.isWeekend,{onClickDayName:r}=this.opts,s=e,o=0;for(;o<7;){let e=s%7;t+=`<div class="${d("air-datepicker-body--day-name",{[n.cssClassWeekend]:i(e),"-clickable-":!!r})}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`,o++,s++}return t}_getDaysCells(){let{viewDate:e,locale:{firstDay:t}}=this.dp,n=a(e),{year:i,month:r}=c(e),s=new Date(i,r,1),o=new Date(i,r,n),l=s.getDay()-t,h=6-o.getDay()+t;l=l<0?l+7:l,h=h>6?h-7:h;let u=function(e,t){let{year:n,month:i,date:r}=c(e);return new Date(n,i,r-t)}(s,l),d=n+l+h,f=u.getDate(),{year:p,month:m}=c(u),g=0;for(;g<d;){let e=new Date(p,m,f+g);this._generateCell(e),g++}}_generateCell(e){let{type:t,dp:n,opts:i}=this,r=new E({type:t,dp:n,opts:i,date:e,body:this});return this.cells.push(r),r}_generateDayCells(){this._getDaysCells()}_generateMonthCells(){let{year:e}=this.dp.parsedViewDate,t=0;for(;t<12;)this.cells.push(this._generateCell(new Date(e,t))),t++}_generateYearCells(){let e=u(this.dp.viewDate),t=e[0]-1,n=e[1]+1,i=t;for(;i<=n;)this.cells.push(this._generateCell(new Date(i,0))),i++}renderDayNames(){this.$names.innerHTML=this._getDayNamesHtml()}_generateCells(){switch(this.type){case n.days:this._generateDayCells();break;case n.months:this._generateMonthCells();break;case n.years:this._generateYearCells()}}show(){this.isVisible=!0,this.$el.classList.remove("-hidden-")}hide(){this.isVisible=!1,this.$el.classList.add("-hidden-")}destroyCells(){this.cells.forEach((e=>e.destroy())),this.cells=[],this.$cells.innerHTML=""}destroy(){this.destroyCells(),this.dp.off(n.eventChangeViewDate,this.onChangeViewDate),this.dp.off(n.eventChangeCurrentView,this.onChangeCurrentView)}constructor(e){let{dp:t,type:i,opts:r}=e;T(this,"handleClick",(e=>{let t=e.target.closest(O).adpCell;if(t.isDisabled)return;if(!this.dp.isMinViewReached)return void this.dp.down();let n=this.dp._checkIfDateIsSelected(t.date,t.type);n?this.dp._handleAlreadySelectedDates(n,t.date):this.dp.selectDate(t.date)})),T(this,"handleDayNameClick",(e=>{let t=e.target.getAttribute("data-day-index");this.opts.onClickDayName({dayIndex:Number(t),datepicker:this.dp})})),T(this,"onChangeCurrentView",(e=>{e!==this.type?this.hide():(this.show(),this.render())})),T(this,"onMouseOverCell",(e=>{let t=_(e.target,O);this.dp.setFocusDate(!!t&&t.adpCell.date)})),T(this,"onMouseOutCell",(()=>{this.dp.setFocusDate(!1)})),T(this,"onClickBody",(e=>{let{onClickDayName:t}=this.opts,n=e.target;n.closest(O)&&this.handleClick(e),t&&n.closest(".air-datepicker-body--day-name")&&this.handleDayNameClick(e)})),T(this,"onMouseDown",(e=>{this.pressed=!0;let t=_(e.target,O),n=t&&t.adpCell;f(n.date,this.dp.rangeDateFrom)&&(this.rangeFromFocused=!0),f(n.date,this.dp.rangeDateTo)&&(this.rangeToFocused=!0)})),T(this,"onMouseMove",(e=>{if(!this.pressed||!this.dp.isMinViewReached)return;e.preventDefault();let t=_(e.target,O),n=t&&t.adpCell,{selectedDates:i,rangeDateTo:r,rangeDateFrom:s}=this.dp;if(!n||n.isDisabled)return;let{date:o}=n;if(2===i.length){if(this.rangeFromFocused&&!p(o,r)){let{hours:e,minutes:t}=c(s);o.setHours(e),o.setMinutes(t),this.dp.rangeDateFrom=o,this.dp.replaceDate(s,o)}if(this.rangeToFocused&&!m(o,s)){let{hours:e,minutes:t}=c(r);o.setHours(e),o.setMinutes(t),this.dp.rangeDateTo=o,this.dp.replaceDate(r,o)}}})),T(this,"onMouseUp",(()=>{this.pressed=!1,this.rangeFromFocused=!1,this.rangeToFocused=!1})),T(this,"onChangeViewDate",((e,t)=>{if(!this.isVisible)return;let i=u(e),r=u(t);switch(this.dp.currentView){case n.days:if(f(e,t,n.months))return;break;case n.months:if(f(e,t,n.years))return;break;case n.years:if(i[0]===r[0]&&i[1]===r[1])return}this.render()})),T(this,"render",(()=>{this.destroyCells(),this._generateCells(),this.cells.forEach((e=>{this.$cells.appendChild(e.render())}))})),this.dp=t,this.type=i,this.opts=r,this.cells=[],this.$el="",this.pressed=!1,this.isVisible=!0,this.init()}}function M(e,t,n){return i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t,"string"),(t="symbol"==typeof i?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var i}class R{init(){this._createElement(),this._buildBaseHtml(),this._defineDOM(),this.render(),this.handleNavStatus(),this._bindEvents(),this._bindDatepickerEvents()}_defineDOM(){this.$title=r(".air-datepicker-nav--title",this.$el),this.$prev=r('[data-action="prev"]',this.$el),this.$next=r('[data-action="next"]',this.$el)}_bindEvents(){this.$el.addEventListener("click",this.onClickNav),this.$title.addEventListener("click",this.onClickNavTitle)}_bindDatepickerEvents(){this.dp.on(n.eventChangeViewDate,this.onChangeViewDate),this.dp.on(n.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.on(n.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.on(n.eventChangeTime,this.render))}destroy(){this.dp.off(n.eventChangeViewDate,this.onChangeViewDate),this.dp.off(n.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.off(n.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.off(n.eventChangeTime,this.render))}_createElement(){this.$el=s({tagName:"nav",className:"air-datepicker-nav"})}_getTitle(){let{dp:e,opts:t}=this,n=t.navTitles[e.currentView];return"function"==typeof n?n(e):e.formatDate(e.viewDate,n)}handleNavStatus(){let{disableNavWhenOutOfRange:e}=this.opts,{minDate:t,maxDate:i}=this.dp;if(!t&&!i||!e)return;let{year:r,month:s}=this.dp.parsedViewDate,o=!!t&&c(t),a=!!i&&c(i);switch(this.dp.currentView){case n.days:t&&o.month>=s&&o.year>=r&&this._disableNav("prev"),i&&a.month<=s&&a.year<=r&&this._disableNav("next");break;case n.months:t&&o.year>=r&&this._disableNav("prev"),i&&a.year<=r&&this._disableNav("next");break;case n.years:{let e=u(this.dp.viewDate);t&&o.year>=e[0]&&this._disableNav("prev"),i&&a.year<=e[1]&&this._disableNav("next");break}}}_disableNav(e){r('[data-action="'+e+'"]',this.$el).classList.add("-disabled-")}_resetNavStatus(){!function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];e.length?e.forEach((e=>{e.classList.remove(...n)})):e.classList.remove(...n)}(this.$el.querySelectorAll(".air-datepicker-nav--action"),"-disabled-")}_buildBaseHtml(){let{prevHtml:e,nextHtml:t}=this.opts;this.$el.innerHTML=`<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`}get isNavIsFunction(){let{navTitles:e}=this.opts;return Object.keys(e).find((t=>"function"==typeof e[t]))}constructor(e){let{dp:t,opts:n}=e;M(this,"onClickNav",(e=>{let t=_(e.target,".air-datepicker-nav--action");if(!t)return;let n=t.dataset.action;this.dp[n]()})),M(this,"onChangeViewDate",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),M(this,"onChangeCurrentView",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),M(this,"onClickNavTitle",(()=>{this.dp.isFinalView||this.dp.up()})),M(this,"update",(()=>{let{prevHtml:e,nextHtml:t}=this.opts;this.$prev.innerHTML=e,this.$next.innerHTML=t,this._resetNavStatus(),this.render(),this.handleNavStatus()})),M(this,"renderDelay",(()=>{setTimeout(this.render)})),M(this,"render",(()=>{this.$title.innerHTML=this._getTitle(),function(e,t){for(let n in t)t[n]?e.classList.add(n):e.classList.remove(n)}(this.$title,{"-disabled-":this.dp.isFinalView})})),this.dp=t,this.opts=n,this.init()}}var A={today:{content:e=>e.locale.today,onClick:e=>e.setViewDate(new Date)},clear:{content:e=>e.locale.clear,onClick:e=>e.clear()}};class N{init(){this.createElement(),this.render()}createElement(){this.$el=s({className:"air-datepicker-buttons"})}destroy(){this.$el.parentNode.removeChild(this.$el)}clearHtml(){return this.$el.innerHTML="",this}generateButtons(){let{buttons:e}=this.opts;Array.isArray(e)||(e=[e]),e.forEach((e=>{let t=e;"string"==typeof e&&A[e]&&(t=A[e]);let n=this.createButton(t);t.onClick&&this.attachEventToButton(n,t.onClick),this.$el.appendChild(n)}))}attachEventToButton(e,t){e.addEventListener("click",(()=>{t(this.dp)}))}createButton(e){let{content:t,className:n,tagName:i="button",attrs:r={}}=e;return s({tagName:i,innerHtml:`<span tabindex='-1'>${"function"==typeof t?t(this.dp):t}</span>`,className:d("air-datepicker-button",n),attrs:r})}render(){this.generateButtons()}constructor(e){let{dp:t,opts:n}=e;this.dp=t,this.opts=n,this.init()}}function P(e,t,n){return i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t,"string"),(t="symbol"==typeof i?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var i}class L{init(){this.setTime(this.dp.lastSelectedDate||this.dp.viewDate),this.createElement(),this.buildHtml(),this.defineDOM(),this.render(),this.bindDatepickerEvents(),this.bindDOMEvents()}bindDatepickerEvents(){this.dp.on(n.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(n.eventChangeLastSelectedDate,this.onChangeLastSelectedDate)}bindDOMEvents(){let e="input";navigator.userAgent.match(/trident/gi)&&(e="change"),v(this.$ranges,e,this.onChangeInputRange),v(this.$ranges,"mouseenter",this.onMouseEnterLeave),v(this.$ranges,"mouseleave",this.onMouseEnterLeave),v(this.$ranges,"focus",this.onFocus),v(this.$ranges,"mousedown",this.onFocus),v(this.$ranges,"blur",this.onBlur)}createElement(){this.$el=s({className:d("air-datepicker-time",{"-am-pm-":this.dp.ampm})})}destroy(){this.dp.off(n.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(n.eventChangeLastSelectedDate,this.onChangeLastSelectedDate),this.$el.parentNode.removeChild(this.$el)}buildHtml(){let{ampm:e,hours:t,displayHours:n,minutes:i,minHours:r,minMinutes:s,maxHours:o,maxMinutes:a,dayPeriod:c,opts:{hoursStep:l,minutesStep:u}}=this;this.$el.innerHTML=`<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${h(n)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${h(i)}</span>   `+(e?`<span class='air-datepicker-time--current-ampm'>${c}</span>`:"")+'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">'+`      <input type="range" name="hours" value="${t}" min="${r}" max="${o}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">`+`      <input type="range" name="minutes" value="${i}" min="${s}" max="${a}" step="${u}"/>   </div></div>`}defineDOM(){let e=e=>r(e,this.$el);this.$ranges=this.$el.querySelectorAll('[type="range"]'),this.$hours=e('[name="hours"]'),this.$minutes=e('[name="minutes"]'),this.$hoursText=e(".air-datepicker-time--current-hours"),this.$minutesText=e(".air-datepicker-time--current-minutes"),this.$ampm=e(".air-datepicker-time--current-ampm")}setTime(e){this.setMinMaxTime(e),this.setCurrentTime(e)}addTimeToDate(e){e&&(e.setHours(this.hours),e.setMinutes(this.minutes))}setMinMaxTime(e){if(this.setMinMaxTimeFromOptions(),e){let{minDate:t,maxDate:n}=this.dp;t&&f(e,t)&&this.setMinTimeFromMinDate(t),n&&f(e,n)&&this.setMaxTimeFromMaxDate(n)}}setCurrentTime(e){let{hours:t,minutes:n}=e?c(e):this;this.hours=w(t,this.minHours,this.maxHours),this.minutes=w(n,this.minMinutes,this.maxMinutes)}setMinMaxTimeFromOptions(){let{minHours:e,minMinutes:t,maxHours:n,maxMinutes:i}=this.opts;this.minHours=w(e,0,23),this.minMinutes=w(t,0,59),this.maxHours=w(n,0,23),this.maxMinutes=w(i,0,59)}setMinTimeFromMinDate(e){let{lastSelectedDate:t}=this.dp;this.minHours=e.getHours(),t&&t.getHours()>e.getHours()?this.minMinutes=this.opts.minMinutes:this.minMinutes=e.getMinutes()}setMaxTimeFromMaxDate(e){let{lastSelectedDate:t}=this.dp;this.maxHours=e.getHours(),t&&t.getHours()<e.getHours()?this.maxMinutes=this.opts.maxMinutes:this.maxMinutes=e.getMinutes()}updateSliders(){o(this.$hours,{min:this.minHours,max:this.maxHours}).value=this.hours,o(this.$minutes,{min:this.minMinutes,max:this.maxMinutes}).value=this.minutes}updateText(){this.$hoursText.innerHTML=h(this.displayHours),this.$minutesText.innerHTML=h(this.minutes),this.ampm&&(this.$ampm.innerHTML=this.dayPeriod)}set hours(e){this._hours=e;let{hours:t,dayPeriod:n}=l(e);this.displayHours=this.ampm?t:e,this.dayPeriod=n}get hours(){return this._hours}render(){this.updateSliders(),this.updateText()}constructor(){let{opts:e,dp:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P(this,"toggleTimepickerIsActive",(e=>{this.dp.timepickerIsActive=e})),P(this,"onChangeSelectedDate",(e=>{let{date:t,updateTime:n=!1}=e;t&&(this.setMinMaxTime(t),this.setCurrentTime(!!n&&t),this.addTimeToDate(t))})),P(this,"onChangeLastSelectedDate",(e=>{e&&(this.setTime(e),this.render())})),P(this,"onChangeInputRange",(e=>{let t=e.target;this[t.getAttribute("name")]=t.value,this.updateText(),this.dp.trigger(n.eventChangeTime,{hours:this.hours,minutes:this.minutes})})),P(this,"onMouseEnterLeave",(e=>{let t=e.target.getAttribute("name"),n=this.$minutesText;"hours"===t&&(n=this.$hoursText),n.classList.toggle("-focus-")})),P(this,"onFocus",(()=>{this.toggleTimepickerIsActive(!0)})),P(this,"onBlur",(()=>{this.toggleTimepickerIsActive(!1)})),this.opts=e,this.dp=t;let{timeFormat:i}=this.dp.locale;i&&(i.match(S("h"))||i.match(S("hh")))&&(this.ampm=!0),this.init()}}function x(e,t,n){return i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t,"string"),(t="symbol"==typeof i?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var i}class U{init(){this.bindKeyboardEvents()}bindKeyboardEvents(){let{$el:e}=this.dp;e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp)}destroy(){let{$el:e}=this.dp;e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("keyup",this.onKeyUp),this.hotKeys=null,this.pressedKeys=null}getInitialFocusDate(){let{focusDate:e,currentView:t,selectedDates:i,parsedViewDate:{year:r,month:s}}=this.dp,o=e||i[i.length-1];if(!o)switch(t){case n.days:o=new Date(r,s,(new Date).getDate());break;case n.months:o=new Date(r,s,1);break;case n.years:o=new Date(r,0,1)}return o}focusNextCell(e){let t=this.getInitialFocusDate(),{currentView:i}=this.dp,{days:r,months:s,years:o}=n,a=c(t),l=a.year,h=a.month,u=a.date;switch(e){case"ArrowLeft":i===r&&(u-=1),i===s&&(h-=1),i===o&&(l-=1);break;case"ArrowUp":i===r&&(u-=7),i===s&&(h-=3),i===o&&(l-=4);break;case"ArrowRight":i===r&&(u+=1),i===s&&(h+=1),i===o&&(l+=1);break;case"ArrowDown":i===r&&(u+=7),i===s&&(h+=3),i===o&&(l+=4)}let d=this.dp.getClampedDate(new Date(l,h,u));this.dp.setFocusDate(d,{viewDateTransition:!0})}registerKey(e){this.pressedKeys.add(e)}removeKey(e){this.pressedKeys.delete(e)}constructor(e){let{dp:t,opts:n}=e;x(this,"pressedKeys",new Set),x(this,"hotKeys",new Map([[[["Control","ArrowRight"],["Control","ArrowUp"]],e=>e.month++],[[["Control","ArrowLeft"],["Control","ArrowDown"]],e=>e.month--],[[["Shift","ArrowRight"],["Shift","ArrowUp"]],e=>e.year++],[[["Shift","ArrowLeft"],["Shift","ArrowDown"]],e=>e.year--],[[["Alt","ArrowRight"],["Alt","ArrowUp"]],e=>e.year+=10],[[["Alt","ArrowLeft"],["Alt","ArrowDown"]],e=>e.year-=10],[["Control","Shift","ArrowUp"],(e,t)=>t.up()]])),x(this,"handleHotKey",(e=>{let t=this.hotKeys.get(e),n=c(this.getInitialFocusDate());t(n,this.dp);let{year:i,month:r,date:s}=n,o=a(new Date(i,r));o<s&&(s=o);let l=this.dp.getClampedDate(new Date(i,r,s));this.dp.setFocusDate(l,{viewDateTransition:!0})})),x(this,"isHotKeyPressed",(()=>{let e=!1,t=this.pressedKeys.size,n=e=>this.pressedKeys.has(e);for(let[i]of this.hotKeys){if(e)break;if(Array.isArray(i[0]))i.forEach((r=>{e||t!==r.length||(e=r.every(n)&&i)}));else{if(t!==i.length)continue;e=i.every(n)&&i}}return e})),x(this,"isArrow",(e=>e>=37&&e<=40)),x(this,"onKeyDown",(e=>{let{key:t,which:n}=e,{dp:i,dp:{focusDate:r},opts:s}=this;this.registerKey(t);let o=this.isHotKeyPressed();if(o)return e.preventDefault(),void this.handleHotKey(o);if(this.isArrow(n))return e.preventDefault(),void this.focusNextCell(t);if("Enter"===t){if(i.currentView!==s.minView)return void i.down();if(r){let e=i._checkIfDateIsSelected(r);return void(e?i._handleAlreadySelectedDates(e,r):i.selectDate(r))}}"Escape"===t&&this.dp.hide()})),x(this,"onKeyUp",(e=>{this.removeKey(e.key)})),this.dp=t,this.opts=n,this.init()}}let F={on(e,t){this.__events||(this.__events={}),this.__events[e]?this.__events[e].push(t):this.__events[e]=[t]},off(e,t){this.__events&&this.__events[e]&&(this.__events[e]=this.__events[e].filter((e=>e!==t)))},removeAllEvents(){this.__events={}},trigger(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this.__events&&this.__events[e]&&this.__events[e].forEach((e=>{e(...n)}))}};function $(e,t,n){return i=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t,"string"),(t="symbol"==typeof i?i:String(i))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var i}let B="",H="",j=!1;class V{static buildGlobalContainer(e){j=!0,B=s({className:e,id:e}),r("body").appendChild(B)}init(){let{opts:e,treatAsInline:t,opts:{inline:n,isMobile:i,selectedDates:s,keyboardNav:o,onlyTimepicker:a}}=this,c=r("body");(!j||j&&B&&!c.contains(B))&&!n&&this.elIsInput&&!this.$customContainer&&V.buildGlobalContainer(V.defaultGlobalContainerId),!i||H||t||this._createMobileOverlay(),this._handleLocale(),this._bindSubEvents(),this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this.elIsInput&&(n||this._bindEvents(),o&&!a&&(this.keyboardNav=new U({dp:this,opts:e}))),s&&this.selectDate(s,{silent:!0}),this.opts.visible&&!t&&this.show(),i&&!t&&this.$el.setAttribute("readonly",!0),t&&this._createComponents()}_createMobileOverlay(){H=s({className:"air-datepicker-overlay"}),B.appendChild(H)}_createComponents(){let{opts:e,treatAsInline:t,opts:{inline:n,buttons:i,timepicker:r,position:s,classes:o,onlyTimepicker:a,isMobile:c}}=this;this._buildBaseHtml(),this.elIsInput&&(n||this._setPositionClasses(s)),!n&&this.elIsInput||this.$datepicker.classList.add("-inline-"),o&&this.$datepicker.classList.add(...o.split(" ")),a&&this.$datepicker.classList.add("-only-timepicker-"),c&&!t&&this._addMobileAttributes(),this.views[this.currentView]=new C({dp:this,type:this.currentView,opts:e}),this.nav=new R({dp:this,opts:e}),r&&this._addTimepicker(),i&&this._addButtons(),this.$content.appendChild(this.views[this.currentView].$el),this.$nav.appendChild(this.nav.$el)}_destroyComponents(){for(let e in this.views)this.views[e].destroy();this.views={},this.nav.destroy(),this.timepicker&&this.timepicker.destroy()}_addMobileAttributes(){H.addEventListener("click",this._onClickOverlay),this.$datepicker.classList.add("-is-mobile-"),this.$el.setAttribute("readonly",!0)}_removeMobileAttributes(){H.removeEventListener("click",this._onClickOverlay),this.$datepicker.classList.remove("-is-mobile-"),this.initialReadonly||""===this.initialReadonly||this.$el.removeAttribute("readonly")}_createMinMaxDates(){let{minDate:e,maxDate:t}=this.opts;this.minDate=!!e&&D(e),this.maxDate=!!t&&D(t)}_addTimepicker(){this.$timepicker=s({className:"air-datepicker--time"}),this.$datepicker.appendChild(this.$timepicker),this.timepicker=new L({dp:this,opts:this.opts}),this.$timepicker.appendChild(this.timepicker.$el)}_addButtons(){this.$buttons=s({className:"air-datepicker--buttons"}),this.$datepicker.appendChild(this.$buttons),this.buttons=new N({dp:this,opts:this.opts}),this.$buttons.appendChild(this.buttons.$el)}_bindSubEvents(){this.on(n.eventChangeSelectedDate,this._onChangeSelectedDate),this.on(n.eventChangeFocusDate,this._onChangeFocusedDate),this.on(n.eventChangeTime,this._onChangeTime)}_buildBaseHtml(){let{inline:e}=this.opts;var t,n;this.elIsInput?e?(t=this.$datepicker,(n=this.$el).parentNode.insertBefore(t,n.nextSibling)):this.$container.appendChild(this.$datepicker):this.$el.appendChild(this.$datepicker),this.$datepicker.innerHTML='<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>',this.$content=r(".air-datepicker--content",this.$datepicker),this.$pointer=r(".air-datepicker--pointer",this.$datepicker),this.$nav=r(".air-datepicker--navigation",this.$datepicker)}_handleLocale(){let{locale:e,dateFormat:t,firstDay:n,timepicker:i,onlyTimepicker:r,timeFormat:s,dateTimeSeparator:o}=this.opts;var a;this.locale=(a=e,JSON.parse(JSON.stringify(a))),t&&(this.locale.dateFormat=t),void 0!==s&&""!==s&&(this.locale.timeFormat=s);let{timeFormat:c}=this.locale;if(""!==n&&(this.locale.firstDay=n),i&&"function"!=typeof t){let e=c?o:"";this.locale.dateFormat=[this.locale.dateFormat,c||""].join(e)}r&&"function"!=typeof t&&(this.locale.dateFormat=this.locale.timeFormat)}_setPositionClasses(e){if("function"==typeof e)return void this.$datepicker.classList.add("-custom-position-");let t=(e=e.split(" "))[0],n=`air-datepicker -${t}-${e[1]}- -from-${t}-`;this.$datepicker.classList.add(...n.split(" "))}_bindEvents(){this.$el.addEventListener(this.opts.showEvent,this._onFocus),this.$el.addEventListener("blur",this._onBlur),this.$datepicker.addEventListener("mousedown",this._onMouseDown),this.$datepicker.addEventListener("mouseup",this._onMouseUp),window.addEventListener("resize",this._onResize)}_limitViewDateByMaxMinDates(){let{viewDate:e,minDate:t,maxDate:n}=this;n&&p(e,n)&&this.setViewDate(n),t&&m(e,t)&&this.setViewDate(t)}formatDate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.viewDate,t=arguments.length>1?arguments[1]:void 0;if(e=D(e),!(e instanceof Date))return;let n=t,i=this.locale,r=c(e),s=r.dayPeriod,o=u(e),a=V.replacer,l={T:e.getTime(),m:r.minutes,mm:r.fullMinutes,h:r.hours12,hh:r.fullHours12,H:r.hours,HH:r.fullHours,aa:s,AA:s.toUpperCase(),E:i.daysShort[r.day],EEEE:i.days[r.day],d:r.date,dd:r.fullDate,M:r.month+1,MM:r.fullMonth,MMM:i.monthsShort[r.month],MMMM:i.months[r.month],yy:r.year.toString().slice(-2),yyyy:r.year,yyyy1:o[0],yyyy2:o[1]};for(let[e,t]of Object.entries(l))n=a(n,S(e),t);return n}down(e){this._handleUpDownActions(e,"down")}up(e){this._handleUpDownActions(e,"up")}selectDate(e){let t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currentView:r,parsedViewDate:s,selectedDates:o}=this,{updateTime:a}=i,{moveToOtherMonthsOnSelect:c,moveToOtherYearsOnSelect:l,multipleDates:h,range:u,autoClose:d}=this.opts,f=o.length;if(Array.isArray(e))return e.forEach((e=>{this.selectDate(e,i)})),new Promise((e=>{setTimeout(e)}));if((e=D(e))instanceof Date){if(r===n.days&&e.getMonth()!==s.month&&c&&(t=new Date(e.getFullYear(),e.getMonth(),1)),r===n.years&&e.getFullYear()!==s.year&&l&&(t=new Date(e.getFullYear(),0,1)),t&&this.setViewDate(t),h&&!u){if(f===h)return;this._checkIfDateIsSelected(e)||o.push(e)}else if(u)switch(f){case 1:o.push(e),this.rangeDateTo||(this.rangeDateTo=e),p(this.rangeDateFrom,this.rangeDateTo)&&(this.rangeDateTo=this.rangeDateFrom,this.rangeDateFrom=e),this.selectedDates=[this.rangeDateFrom,this.rangeDateTo];break;case 2:this.selectedDates=[e],this.rangeDateFrom=e,this.rangeDateTo="";break;default:this.selectedDates=[e],this.rangeDateFrom=e}else this.selectedDates=[e];return this.trigger(n.eventChangeSelectedDate,{action:n.actionSelectDate,silent:null==i?void 0:i.silent,date:e,updateTime:a}),this._updateLastSelectedDate(e),d&&!this.timepickerIsActive&&this.visible&&(h||u?u&&1===f&&this.hide():this.hide()),new Promise((e=>{setTimeout(e)}))}}unselectDate(e){let t=this.selectedDates,i=this;if((e=D(e))instanceof Date)return t.some(((r,s)=>{if(f(r,e))return t.splice(s,1),i.selectedDates.length?i._updateLastSelectedDate(i.selectedDates[i.selectedDates.length-1]):(i.rangeDateFrom="",i.rangeDateTo="",i._updateLastSelectedDate(!1)),this.trigger(n.eventChangeSelectedDate,{action:n.actionUnselectDate,date:e}),!0}))}replaceDate(e,t){let i=this.selectedDates.find((t=>f(t,e,this.currentView))),r=this.selectedDates.indexOf(i);r<0||f(this.selectedDates[r],t,this.currentView)||(this.selectedDates[r]=t,this.trigger(n.eventChangeSelectedDate,{action:n.actionSelectDate,date:t,updateTime:!0}),this._updateLastSelectedDate(t))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.selectedDates=[],this.rangeDateFrom=!1,this.rangeDateTo=!1,this.trigger(n.eventChangeSelectedDate,{action:n.actionUnselectDate,silent:e.silent}),new Promise((e=>{setTimeout(e)}))}show(){let{onShow:e,isMobile:t}=this.opts;this._cancelScheduledCall(),this.visible||this.hideAnimation||this._createComponents(),this.setPosition(this.opts.position),this.$datepicker.classList.add("-active-"),this.visible=!0,e&&this._scheduleCallAfterTransition(e),t&&this._showMobileOverlay()}hide(){let{onHide:e,isMobile:t}=this.opts,n=this._hasTransition();this.visible=!1,this.hideAnimation=!0,this.$datepicker.classList.remove("-active-"),this.customHide&&this.customHide(),this.elIsInput&&this.$el.blur(),this._scheduleCallAfterTransition((t=>{!this.customHide&&(t&&n||!t&&!n)&&this._finishHide(),e&&e(t)})),t&&H.classList.remove("-active-")}_triggerOnSelect(){let e=[],t=[],{selectedDates:n,locale:i,opts:{onSelect:r,multipleDates:s,range:o}}=this,a=s||o,c="function"==typeof i.dateFormat;n.length&&(e=n.map(g),t=c?s?i.dateFormat(e):e.map((e=>i.dateFormat(e))):e.map((e=>this.formatDate(e,i.dateFormat)))),r({date:a?e:e[0],formattedDate:a?t:t[0],datepicker:this})}_handleAlreadySelectedDates(e,t){let{range:n,toggleSelected:i}=this.opts;n?i?this.unselectDate(t):2!==this.selectedDates.length&&this.selectDate(t):i&&this.unselectDate(t),i||this._updateLastSelectedDate(e)}_handleUpDownActions(e,t){if(!((e=D(e||this.focusDate||this.viewDate))instanceof Date))return;let n="up"===t?this.viewIndex+1:this.viewIndex-1;n>2&&(n=2),n<0&&(n=0),this.setViewDate(new Date(e.getFullYear(),e.getMonth(),1)),this.setCurrentView(this.viewIndexes[n])}_handleRangeOnFocus(){1===this.selectedDates.length&&(p(this.selectedDates[0],this.focusDate)?(this.rangeDateTo=this.selectedDates[0],this.rangeDateFrom=this.focusDate):(this.rangeDateTo=this.focusDate,this.rangeDateFrom=this.selectedDates[0]))}getCell(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.day;if(!((e=D(e))instanceof Date))return;let{year:i,month:r,date:s}=c(e),o=`[data-year="${i}"]`,a=`[data-month="${r}"]`,l={[n.day]:`${o}${a}[data-date="${s}"]`,[n.month]:`${o}${a}`,[n.year]:`${o}`};return this.views[this.currentView].$el.querySelector(l[t])}_showMobileOverlay(){H.classList.add("-active-")}_hasTransition(){return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e,t)=>parseFloat(t)+e),0)>0}get shouldUpdateDOM(){return this.visible||this.treatAsInline}get parsedViewDate(){return c(this.viewDate)}get currentViewSingular(){return this.currentView.slice(0,-1)}get curDecade(){return u(this.viewDate)}get viewIndex(){return this.viewIndexes.indexOf(this.currentView)}get isFinalView(){return this.currentView===n.years}get hasSelectedDates(){return this.selectedDates.length>0}get isMinViewReached(){return this.currentView===this.opts.minView||this.currentView===n.days}get $container(){return this.$customContainer||B}static replacer(e,t,n){return e.replace(t,(function(e,t,i,r){return t+n+r}))}constructor(e,t){var o=this;if($(this,"viewIndexes",[n.days,n.months,n.years]),$(this,"next",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case n.days:this.setViewDate(new Date(e,t+1,1));break;case n.months:this.setViewDate(new Date(e+1,t,1));break;case n.years:this.setViewDate(new Date(e+10,0,1))}})),$(this,"prev",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case n.days:this.setViewDate(new Date(e,t-1,1));break;case n.months:this.setViewDate(new Date(e-1,t,1));break;case n.years:this.setViewDate(new Date(e-10,0,1))}})),$(this,"_finishHide",(()=>{this.hideAnimation=!1,this._destroyComponents(),this.$container.removeChild(this.$datepicker)})),$(this,"setPosition",(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("function"==typeof(e=e||o.opts.position))return void(o.customHide=e({$datepicker:o.$datepicker,$target:o.$el,$pointer:o.$pointer,isViewChange:t,done:o._finishHide}));let n,i,{isMobile:r}=o.opts,s=o.$el.getBoundingClientRect(),a=o.$el.getBoundingClientRect(),c=o.$datepicker.offsetParent,l=o.$el.offsetParent,h=o.$datepicker.getBoundingClientRect(),u=e.split(" "),d=window.scrollY,f=window.scrollX,p=o.opts.offset,m=u[0],g=u[1];if(r)o.$datepicker.style.cssText="left: 50%; top: 50%";else{if(c===l&&c!==document.body&&(a={top:o.$el.offsetTop,left:o.$el.offsetLeft,width:s.width,height:o.$el.offsetHeight},d=0,f=0),c!==l&&c!==document.body){let e=c.getBoundingClientRect();a={top:s.top-e.top,left:s.left-e.left,width:s.width,height:s.height},d=0,f=0}switch(m){case"top":n=a.top-h.height-p;break;case"right":i=a.left+a.width+p;break;case"bottom":n=a.top+a.height+p;break;case"left":i=a.left-h.width-p}switch(g){case"top":n=a.top;break;case"right":i=a.left+a.width-h.width;break;case"bottom":n=a.top+a.height-h.height;break;case"left":i=a.left;break;case"center":/left|right/.test(m)?n=a.top+a.height/2-h.height/2:i=a.left+a.width/2-h.width/2}o.$datepicker.style.cssText=`left: ${i+f}px; top: ${n+d}px`}})),$(this,"_setInputValue",(()=>{let{opts:e,$altField:t,locale:{dateFormat:n}}=this,{altFieldDateFormat:i,altField:r}=e;r&&t&&(t.value=this._getInputValue(i)),this.$el.value=this._getInputValue(n)})),$(this,"_getInputValue",(e=>{let{selectedDates:t,opts:n}=this,{multipleDates:i,multipleDatesSeparator:r}=n;if(!t.length)return"";let s="function"==typeof e,o=s?e(i?t:t[0]):t.map((t=>this.formatDate(t,e)));return o=s?o:o.join(r),o})),$(this,"_checkIfDateIsSelected",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.days,i=!1;return o.selectedDates.some((n=>{let r=f(e,n,t);return i=r&&n,r})),i})),$(this,"_scheduleCallAfterTransition",(e=>{this._cancelScheduledCall(),e&&e(!1),this._onTransitionEnd=()=>{e&&e(!0)},this.$datepicker.addEventListener("transitionend",this._onTransitionEnd,{once:!0})})),$(this,"_cancelScheduledCall",(()=>{this.$datepicker.removeEventListener("transitionend",this._onTransitionEnd)})),$(this,"setViewDate",(e=>{if(!((e=D(e))instanceof Date))return;if(f(e,this.viewDate))return;let t=this.viewDate;this.viewDate=e;let{onChangeViewDate:i}=this.opts;if(i){let{month:e,year:t}=this.parsedViewDate;i({month:e,year:t,decade:this.curDecade})}this.trigger(n.eventChangeViewDate,e,t)})),$(this,"setFocusDate",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!e||(e=D(e))instanceof Date)&&(o.focusDate=e,o.opts.range&&e&&o._handleRangeOnFocus(),o.trigger(n.eventChangeFocusDate,e,t))})),$(this,"setCurrentView",(e=>{if(this.viewIndexes.includes(e)){if(this.currentView=e,this.elIsInput&&this.visible&&this.setPosition(void 0,!0),this.trigger(n.eventChangeCurrentView,e),!this.views[e]){let t=this.views[e]=new C({dp:this,opts:this.opts,type:e});this.shouldUpdateDOM&&this.$content.appendChild(t.$el)}this.opts.onChangeView&&this.opts.onChangeView(e)}})),$(this,"_updateLastSelectedDate",(e=>{this.lastSelectedDate=e,this.trigger(n.eventChangeLastSelectedDate,e)})),$(this,"destroy",(()=>{let{showEvent:e,isMobile:t}=this.opts,n=this.$datepicker.parentNode;n&&n.removeChild(this.$datepicker),this.$el.removeEventListener(e,this._onFocus),this.$el.removeEventListener("blur",this._onBlur),window.removeEventListener("resize",this._onResize),t&&this._removeMobileAttributes(),this.keyboardNav&&this.keyboardNav.destroy(),this.views=null,this.nav=null,this.$datepicker=null,this.opts=null,this.$customContainer=null,this.viewDate=null,this.focusDate=null,this.selectedDates=null,this.rangeDateFrom=null,this.rangeDateTo=null})),$(this,"update",(e=>{let t=b({},this.opts);b(this.opts,e);let{timepicker:i,buttons:r,range:s,selectedDates:o,isMobile:a}=this.opts,c=this.visible||this.treatAsInline;this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this._handleLocale(),!t.selectedDates&&o&&this.selectDate(o),e.view&&this.setCurrentView(e.view),this._setInputValue(),t.range&&!s?(this.rangeDateTo=!1,this.rangeDateFrom=!1):!t.range&&s&&this.selectedDates.length&&(this.rangeDateFrom=this.selectedDates[0],this.rangeDateTo=this.selectedDates[1]),t.timepicker&&!i?(c&&this.timepicker.destroy(),this.timepicker=!1,this.$timepicker.parentNode.removeChild(this.$timepicker)):!t.timepicker&&i&&this._addTimepicker(),!t.buttons&&r?this._addButtons():t.buttons&&!r?(this.buttons.destroy(),this.$buttons.parentNode.removeChild(this.$buttons)):c&&t.buttons&&r&&this.buttons.clearHtml().render(),!t.isMobile&&a?(this.treatAsInline||H||this._createMobileOverlay(),this._addMobileAttributes(),this.visible&&this._showMobileOverlay()):t.isMobile&&!a&&(this._removeMobileAttributes(),this.visible&&(H.classList.remove("-active-"),"function"!=typeof this.opts.position&&this.setPosition())),c&&(this.nav.update(),this.views[this.currentView].render(),this.currentView===n.days&&this.views[this.currentView].renderDayNames())})),$(this,"isOtherMonth",(e=>{let{month:t}=c(e);return t!==this.parsedViewDate.month})),$(this,"isOtherYear",(e=>{let{year:t}=c(e);return t!==this.parsedViewDate.year})),$(this,"isOtherDecade",(e=>{let{year:t}=c(e),[n,i]=u(this.viewDate);return t<n||t>i})),$(this,"_onChangeSelectedDate",(e=>{let{silent:t}=e;setTimeout((()=>{this._setInputValue(),this.opts.onSelect&&!t&&this._triggerOnSelect()}))})),$(this,"_onChangeFocusedDate",(function(e){let{viewDateTransition:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;let n=!1;t&&(n=o.isOtherMonth(e)||o.isOtherYear(e)||o.isOtherDecade(e)),n&&o.setViewDate(e)})),$(this,"_onChangeTime",(e=>{let{hours:t,minutes:n}=e,i=new Date,{lastSelectedDate:r,opts:{onSelect:s}}=this,o=r;r||(o=i);let a=this.getCell(o,this.currentViewSingular),c=a&&a.adpCell;c&&c.isDisabled||(o.setHours(t),o.setMinutes(n),r?(this._setInputValue(),s&&this._triggerOnSelect()):this.selectDate(o))})),$(this,"_onFocus",(e=>{this.visible||this.show()})),$(this,"_onBlur",(e=>{this.inFocus||!this.visible||this.opts.isMobile||this.hide()})),$(this,"_onMouseDown",(e=>{this.inFocus=!0})),$(this,"_onMouseUp",(e=>{this.inFocus=!1,this.$el.focus()})),$(this,"_onResize",(()=>{this.visible&&"function"!=typeof this.opts.position&&this.setPosition()})),$(this,"_onClickOverlay",(()=>{this.visible&&this.hide()})),$(this,"isWeekend",(e=>this.opts.weekends.includes(e))),$(this,"getClampedDate",(e=>{let{minDate:t,maxDate:n}=this,i=e;return n&&p(e,n)?i=n:t&&m(e,t)&&(i=t),i})),this.$el=r(e),!this.$el)return;this.$datepicker=s({className:"air-datepicker"}),this.opts=b({},i,t),this.$customContainer=!!this.opts.container&&r(this.opts.container),this.$altField=r(this.opts.altField||!1);let{view:a,startDate:l}=this.opts;l||(this.opts.startDate=new Date),"INPUT"===this.$el.nodeName&&(this.elIsInput=!0),this.inited=!1,this.visible=!1,this.viewDate=D(this.opts.startDate),this.focusDate=!1,this.initialReadonly=this.$el.getAttribute("readonly"),this.customHide=!1,this.currentView=a,this.selectedDates=[],this.views={},this.keys=[],this.rangeDateFrom="",this.rangeDateTo="",this.timepickerIsActive=!1,this.treatAsInline=this.opts.inline||!this.elIsInput,this.init()}}var Y;return $(V,"defaults",i),$(V,"version","3.3.5"),$(V,"defaultGlobalContainerId","air-datepicker-global-container"),Y=V.prototype,Object.assign(Y,F),t.default}());document.querySelector(".order-form").addEventListener("submit",(async function(e){e.preventDefault();const t=e.target.email.value,n=e.target.password.value;try{await $s(zo,t,n).then((e=>{e.user&&qo()}))}catch(e){Zo.textContent="Wrong email or password. Please, try again.",console.log(e.message)}})),async function(){var e,t,n;e=e=>{e?(Jo.textContent="Logout",function(e){Ko.innerHTML=`<p>${e.email}</p>`}(e)):(Jo.textContent="Log In",Ko.innerHTML="")},li(zo).onAuthStateChanged(e,t,n)}();const aa=document.querySelector(".search-form");aa.addEventListener("submit",(function(e){e.preventDefault();const t=aa.query.value;console.log(t),yn.resetPage();let n=[];yn.getNewsBySearchQuery(t).then((e=>{n=e,console.log(n),yn.getTotalHits(),bn(n)}))})),vn.renderPagination(vn.createPagination(50,1)),document.getElementById("pagination-container").addEventListener("click",(e=>{if("BUTTON"===e.target.nodeName){_n(e.target);let t=[];yn.getNewsByCategory(vn.genCurrentPage()).then((e=>{t=e,yn.getTotalHits()}))}}));document.querySelector("ul.news__filtr-menu").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;document.querySelector(".news__filtr-menu-button--active").classList.remove("news__filtr-menu-button--active"),e.target.classList.add("news__filtr-menu-button--active")}));const ca=document.querySelector(".date-form__input");document.querySelector(".date-form__input");ca.addEventListener("click",(function(){new oa(".date-form__input",{autoClose:!0,position:"bottom center",dateFormat:"dd/MM/yyyy"})}));
//# sourceMappingURL=favorite.627d3bda.js.map
