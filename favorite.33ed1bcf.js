function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},s=t.parcelRequired7c6;function o(e,t){return function(){return e.apply(t,arguments)}}null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("cxTnx",(function(e,t){e.exports=function(){var t,n;function r(){return t.apply(null,arguments)}function i(e){t=e}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function o(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(a(e,t))return!1;return!0}function u(e){return void 0===e}function l(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){var n,r=[],i=e.length;for(n=0;n<i;++n)r.push(t(e[n],n));return r}function f(e,t){for(var n in t)a(t,n)&&(e[n]=t[n]);return a(t,"toString")&&(e.toString=t.toString),a(t,"valueOf")&&(e.valueOf=t.valueOf),e}function p(e,t,n,r){return qn(e,t,n,r,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function g(e){return null==e._pf&&(e._pf=m()),e._pf}function y(e){if(null==e._isValid){var t=g(e),r=n.call(t.parsedDateParts,(function(e){return null!=e})),i=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r);if(e._strict&&(i=i&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function _(e){var t=p(NaN);return null!=e?f(g(t),e):g(t).userInvalidated=!0,t}n=Array.prototype.some?Array.prototype.some:function(e){var t,n=Object(this),r=n.length>>>0;for(t=0;t<r;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};var v=r.momentProperties=[],w=!1;function b(e,t){var n,r,i,s=v.length;if(u(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),u(t._i)||(e._i=t._i),u(t._f)||(e._f=t._f),u(t._l)||(e._l=t._l),u(t._strict)||(e._strict=t._strict),u(t._tzm)||(e._tzm=t._tzm),u(t._isUTC)||(e._isUTC=t._isUTC),u(t._offset)||(e._offset=t._offset),u(t._pf)||(e._pf=g(t)),u(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)u(i=t[r=v[n]])||(e[r]=i);return e}function E(e){b(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===w&&(w=!0,r.updateOffset(this),w=!1)}function S(e){return e instanceof E||null!=e&&null!=e._isAMomentObject}function T(e){!1===r.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function k(e,t){var n=!0;return f((function(){if(null!=r.deprecationHandler&&r.deprecationHandler(null,e),n){var i,s,o,c=[],u=arguments.length;for(s=0;s<u;s++){if(i="","object"==typeof arguments[s]){for(o in i+="\n["+s+"] ",arguments[0])a(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];c.push(i)}T(e+"\nArguments: "+Array.prototype.slice.call(c).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)}),t)}var I,O={};function R(e,t){null!=r.deprecationHandler&&r.deprecationHandler(e,t),O[e]||(T(t),O[e]=!0)}function D(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function A(e){var t,n;for(n in e)a(e,n)&&(D(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function N(e,t){var n,r=f({},e);for(n in t)a(t,n)&&(o(e[n])&&o(t[n])?(r[n]={},f(r[n],e[n]),f(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)a(e,n)&&!a(t,n)&&o(e[n])&&(r[n]=f({},r[n]));return r}function C(e){null!=e&&this.set(e)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null,I=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)a(e,t)&&n.push(t);return n};var M={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function P(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return D(r)?r.call(t,n):r}function L(e,t,n){var r=""+Math.abs(e),i=t-r.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var U=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,x=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,B={},F={};function j(e,t,n,r){var i=r;"string"==typeof r&&(i=function(){return this[r]()}),e&&(F[e]=i),t&&(F[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(F[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function Y(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function H(e){var t,n,r=e.match(U);for(t=0,n=r.length;t<n;t++)F[r[t]]?r[t]=F[r[t]]:r[t]=Y(r[t]);return function(t){var i,s="";for(i=0;i<n;i++)s+=D(r[i])?r[i].call(t,e):r[i];return s}}function W(e,t){return e.isValid()?(t=V(t,e.localeData()),B[t]=B[t]||H(t),B[t](e)):e.localeData().invalidDate()}function V(e,t){var n=5;function r(e){return t.longDateFormat(e)||e}for(x.lastIndex=0;n>=0&&x.test(e);)e=e.replace(x,r),x.lastIndex=0,n-=1;return e}var $={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function z(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(U).map((function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e})).join(""),this._longDateFormat[e])}var G="Invalid date";function q(){return this._invalidDate}var K="%d",J=/\d{1,2}/;function Z(e){return this._ordinal.replace("%d",e)}var Q={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function X(e,t,n,r){var i=this._relativeTime[n];return D(i)?i(e,t,n,r):i.replace(/%d/i,e)}function ee(e,t){var n=this._relativeTime[e>0?"future":"past"];return D(n)?n(t):n.replace(/%s/i,t)}var te={};function ne(e,t){var n=e.toLowerCase();te[n]=te[n+"s"]=te[t]=e}function re(e){return"string"==typeof e?te[e]||te[e.toLowerCase()]:void 0}function ie(e){var t,n,r={};for(n in e)a(e,n)&&(t=re(n))&&(r[t]=e[n]);return r}var se={};function oe(e,t){se[e]=t}function ae(e){var t,n=[];for(t in e)a(e,t)&&n.push({unit:t,priority:se[t]});return n.sort((function(e,t){return e.priority-t.priority})),n}function ce(e){return e%4==0&&e%100!=0||e%400==0}function ue(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function le(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=ue(t)),n}function he(e,t){return function(n){return null!=n?(fe(this,e,n),r.updateOffset(this,t),this):de(this,e)}}function de(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function fe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ce(e.year())&&1===e.month()&&29===e.date()?(n=le(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Xe(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function pe(e){return D(this[e=re(e)])?this[e]():this}function me(e,t){if("object"==typeof e){var n,r=ae(e=ie(e)),i=r.length;for(n=0;n<i;n++)this[r[n].unit](e[r[n].unit])}else if(D(this[e=re(e)]))return this[e](t);return this}var ge,ye=/\d/,_e=/\d\d/,ve=/\d{3}/,we=/\d{4}/,be=/[+-]?\d{6}/,Ee=/\d\d?/,Se=/\d\d\d\d?/,Te=/\d\d\d\d\d\d?/,ke=/\d{1,3}/,Ie=/\d{1,4}/,Oe=/[+-]?\d{1,6}/,Re=/\d+/,De=/[+-]?\d+/,Ae=/Z|[+-]\d\d:?\d\d/gi,Ne=/Z|[+-]\d\d(?::?\d\d)?/gi,Ce=/[+-]?\d+(\.\d{1,3})?/,Me=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function Pe(e,t,n){ge[e]=D(t)?t:function(e,r){return e&&n?n:t}}function Le(e,t){return a(ge,e)?ge[e](t._strict,t._locale):new RegExp(Ue(e))}function Ue(e){return xe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,n,r,i){return t||n||r||i})))}function xe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}ge={};var Be={};function Fe(e,t){var n,r,i=t;for("string"==typeof e&&(e=[e]),l(t)&&(i=function(e,n){n[t]=le(e)}),r=e.length,n=0;n<r;n++)Be[e[n]]=i}function je(e,t){Fe(e,(function(e,n,r,i){r._w=r._w||{},t(e,r._w,r,i)}))}function Ye(e,t,n){null!=t&&a(Be,e)&&Be[e](t,n._a,n,e)}var He,We=0,Ve=1,$e=2,ze=3,Ge=4,qe=5,Ke=6,Je=7,Ze=8;function Qe(e,t){return(e%t+t)%t}function Xe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Qe(t,12);return e+=(t-n)/12,1===n?ce(e)?29:28:31-n%7%2}He=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},j("M",["MM",2],"Mo",(function(){return this.month()+1})),j("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)})),j("MMMM",0,0,(function(e){return this.localeData().months(this,e)})),ne("month","M"),oe("month",8),Pe("M",Ee),Pe("MM",Ee,_e),Pe("MMM",(function(e,t){return t.monthsShortRegex(e)})),Pe("MMMM",(function(e,t){return t.monthsRegex(e)})),Fe(["M","MM"],(function(e,t){t[Ve]=le(e)-1})),Fe(["MMM","MMMM"],(function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);null!=i?t[Ve]=i:g(n).invalidMonth=e}));var et="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),tt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),nt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,rt=Me,it=Me;function st(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||nt).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone}function ot(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[nt.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function at(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=p([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=He.call(this._shortMonthsParse,o))?i:null:-1!==(i=He.call(this._longMonthsParse,o))?i:null:"MMM"===t?-1!==(i=He.call(this._shortMonthsParse,o))||-1!==(i=He.call(this._longMonthsParse,o))?i:null:-1!==(i=He.call(this._longMonthsParse,o))||-1!==(i=He.call(this._shortMonthsParse,o))?i:null}function ct(e,t,n){var r,i,s;if(this._monthsParseExact)return at.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=p([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function ut(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=le(t);else if(!l(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Xe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function lt(e){return null!=e?(ut(this,e),r.updateOffset(this,!0),this):de(this,"Month")}function ht(){return Xe(this.year(),this.month())}function dt(e){return this._monthsParseExact?(a(this,"_monthsRegex")||pt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=rt),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ft(e){return this._monthsParseExact?(a(this,"_monthsRegex")||pt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=it),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function pt(){function e(e,t){return t.length-e.length}var t,n,r=[],i=[],s=[];for(t=0;t<12;t++)n=p([2e3,t]),r.push(this.monthsShort(n,"")),i.push(this.months(n,"")),s.push(this.months(n,"")),s.push(this.monthsShort(n,""));for(r.sort(e),i.sort(e),s.sort(e),t=0;t<12;t++)r[t]=xe(r[t]),i[t]=xe(i[t]);for(t=0;t<24;t++)s[t]=xe(s[t]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function mt(e){return ce(e)?366:365}j("Y",0,0,(function(){var e=this.year();return e<=9999?L(e,4):"+"+e})),j(0,["YY",2],0,(function(){return this.year()%100})),j(0,["YYYY",4],0,"year"),j(0,["YYYYY",5],0,"year"),j(0,["YYYYYY",6,!0],0,"year"),ne("year","y"),oe("year",1),Pe("Y",De),Pe("YY",Ee,_e),Pe("YYYY",Ie,we),Pe("YYYYY",Oe,be),Pe("YYYYYY",Oe,be),Fe(["YYYYY","YYYYYY"],We),Fe("YYYY",(function(e,t){t[We]=2===e.length?r.parseTwoDigitYear(e):le(e)})),Fe("YY",(function(e,t){t[We]=r.parseTwoDigitYear(e)})),Fe("Y",(function(e,t){t[We]=parseInt(e,10)})),r.parseTwoDigitYear=function(e){return le(e)+(le(e)>68?1900:2e3)};var gt=he("FullYear",!0);function yt(){return ce(this.year())}function _t(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function vt(e){var t,n;return e<100&&e>=0?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function wt(e,t,n){var r=7+t-n;return-(7+vt(e,0,r).getUTCDay()-t)%7+r-1}function bt(e,t,n,r,i){var s,o,a=1+7*(t-1)+(7+n-r)%7+wt(e,r,i);return a<=0?o=mt(s=e-1)+a:a>mt(e)?(s=e+1,o=a-mt(e)):(s=e,o=a),{year:s,dayOfYear:o}}function Et(e,t,n){var r,i,s=wt(e.year(),t,n),o=Math.floor((e.dayOfYear()-s-1)/7)+1;return o<1?r=o+St(i=e.year()-1,t,n):o>St(e.year(),t,n)?(r=o-St(e.year(),t,n),i=e.year()+1):(i=e.year(),r=o),{week:r,year:i}}function St(e,t,n){var r=wt(e,t,n),i=wt(e+1,t,n);return(mt(e)-r+i)/7}function Tt(e){return Et(e,this._week.dow,this._week.doy).week}j("w",["ww",2],"wo","week"),j("W",["WW",2],"Wo","isoWeek"),ne("week","w"),ne("isoWeek","W"),oe("week",5),oe("isoWeek",5),Pe("w",Ee),Pe("ww",Ee,_e),Pe("W",Ee),Pe("WW",Ee,_e),je(["w","ww","W","WW"],(function(e,t,n,r){t[r.substr(0,1)]=le(e)}));var kt={dow:0,doy:6};function It(){return this._week.dow}function Ot(){return this._week.doy}function Rt(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Dt(e){var t=Et(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function At(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}function Nt(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ct(e,t){return e.slice(t,7).concat(e.slice(0,t))}j("d",0,"do","day"),j("dd",0,0,(function(e){return this.localeData().weekdaysMin(this,e)})),j("ddd",0,0,(function(e){return this.localeData().weekdaysShort(this,e)})),j("dddd",0,0,(function(e){return this.localeData().weekdays(this,e)})),j("e",0,0,"weekday"),j("E",0,0,"isoWeekday"),ne("day","d"),ne("weekday","e"),ne("isoWeekday","E"),oe("day",11),oe("weekday",11),oe("isoWeekday",11),Pe("d",Ee),Pe("e",Ee),Pe("E",Ee),Pe("dd",(function(e,t){return t.weekdaysMinRegex(e)})),Pe("ddd",(function(e,t){return t.weekdaysShortRegex(e)})),Pe("dddd",(function(e,t){return t.weekdaysRegex(e)})),je(["dd","ddd","dddd"],(function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e})),je(["d","e","E"],(function(e,t,n,r){t[r]=le(e)}));var Mt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Pt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Lt="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ut=Me,xt=Me,Bt=Me;function Ft(e,t){var n=s(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ct(n,this._week.dow):e?n[e.day()]:n}function jt(e){return!0===e?Ct(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Yt(e){return!0===e?Ct(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ht(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=p([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=He.call(this._weekdaysParse,o))?i:null:"ddd"===t?-1!==(i=He.call(this._shortWeekdaysParse,o))?i:null:-1!==(i=He.call(this._minWeekdaysParse,o))?i:null:"dddd"===t?-1!==(i=He.call(this._weekdaysParse,o))||-1!==(i=He.call(this._shortWeekdaysParse,o))||-1!==(i=He.call(this._minWeekdaysParse,o))?i:null:"ddd"===t?-1!==(i=He.call(this._shortWeekdaysParse,o))||-1!==(i=He.call(this._weekdaysParse,o))||-1!==(i=He.call(this._minWeekdaysParse,o))?i:null:-1!==(i=He.call(this._minWeekdaysParse,o))||-1!==(i=He.call(this._weekdaysParse,o))||-1!==(i=He.call(this._shortWeekdaysParse,o))?i:null}function Wt(e,t,n){var r,i,s;if(this._weekdaysParseExact)return Ht.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=p([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function Vt(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=At(e,this.localeData()),this.add(e-t,"d")):t}function $t(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function zt(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=Nt(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Gt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=Ut),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function qt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=xt),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Kt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Jt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Bt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Jt(){function e(e,t){return t.length-e.length}var t,n,r,i,s,o=[],a=[],c=[],u=[];for(t=0;t<7;t++)n=p([2e3,1]).day(t),r=xe(this.weekdaysMin(n,"")),i=xe(this.weekdaysShort(n,"")),s=xe(this.weekdays(n,"")),o.push(r),a.push(i),c.push(s),u.push(r),u.push(i),u.push(s);o.sort(e),a.sort(e),c.sort(e),u.sort(e),this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Zt(){return this.hours()%12||12}function Qt(){return this.hours()||24}function Xt(e,t){j(e,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}function en(e,t){return t._meridiemParse}function tn(e){return"p"===(e+"").toLowerCase().charAt(0)}j("H",["HH",2],0,"hour"),j("h",["hh",2],0,Zt),j("k",["kk",2],0,Qt),j("hmm",0,0,(function(){return""+Zt.apply(this)+L(this.minutes(),2)})),j("hmmss",0,0,(function(){return""+Zt.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)})),j("Hmm",0,0,(function(){return""+this.hours()+L(this.minutes(),2)})),j("Hmmss",0,0,(function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)})),Xt("a",!0),Xt("A",!1),ne("hour","h"),oe("hour",13),Pe("a",en),Pe("A",en),Pe("H",Ee),Pe("h",Ee),Pe("k",Ee),Pe("HH",Ee,_e),Pe("hh",Ee,_e),Pe("kk",Ee,_e),Pe("hmm",Se),Pe("hmmss",Te),Pe("Hmm",Se),Pe("Hmmss",Te),Fe(["H","HH"],ze),Fe(["k","kk"],(function(e,t,n){var r=le(e);t[ze]=24===r?0:r})),Fe(["a","A"],(function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e})),Fe(["h","hh"],(function(e,t,n){t[ze]=le(e),g(n).bigHour=!0})),Fe("hmm",(function(e,t,n){var r=e.length-2;t[ze]=le(e.substr(0,r)),t[Ge]=le(e.substr(r)),g(n).bigHour=!0})),Fe("hmmss",(function(e,t,n){var r=e.length-4,i=e.length-2;t[ze]=le(e.substr(0,r)),t[Ge]=le(e.substr(r,2)),t[qe]=le(e.substr(i)),g(n).bigHour=!0})),Fe("Hmm",(function(e,t,n){var r=e.length-2;t[ze]=le(e.substr(0,r)),t[Ge]=le(e.substr(r))})),Fe("Hmmss",(function(e,t,n){var r=e.length-4,i=e.length-2;t[ze]=le(e.substr(0,r)),t[Ge]=le(e.substr(r,2)),t[qe]=le(e.substr(i))}));var nn=/[ap]\.?m?\.?/i,rn=he("Hours",!0);function sn(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var on,an={calendar:M,longDateFormat:$,invalidDate:G,ordinal:K,dayOfMonthOrdinalParse:J,relativeTime:Q,months:et,monthsShort:tt,week:kt,weekdays:Mt,weekdaysMin:Lt,weekdaysShort:Pt,meridiemParse:nn},cn={},un={};function ln(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function hn(e){return e?e.toLowerCase().replace("_","-"):e}function dn(e){for(var t,n,r,i,s=0;s<e.length;){for(t=(i=hn(e[s]).split("-")).length,n=(n=hn(e[s+1]))?n.split("-"):null;t>0;){if(r=pn(i.slice(0,t).join("-")))return r;if(n&&n.length>=t&&ln(i,n)>=t-1)break;t--}s++}return on}function fn(e){return null!=e.match("^[^/\\\\]*$")}function pn(t){var n=null;if(void 0===cn[t]&&e&&e.exports&&fn(t))try{n=on._abbr,(void 0)("./locale/"+t),mn(n)}catch(e){cn[t]=null}return cn[t]}function mn(e,t){var n;return e&&((n=u(t)?_n(e):gn(e,t))?on=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),on._abbr}function gn(e,t){if(null!==t){var n,r=an;if(t.abbr=e,null!=cn[e])R("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=cn[e]._config;else if(null!=t.parentLocale)if(null!=cn[t.parentLocale])r=cn[t.parentLocale]._config;else{if(null==(n=pn(t.parentLocale)))return un[t.parentLocale]||(un[t.parentLocale]=[]),un[t.parentLocale].push({name:e,config:t}),null;r=n._config}return cn[e]=new C(N(r,t)),un[e]&&un[e].forEach((function(e){gn(e.name,e.config)})),mn(e),cn[e]}return delete cn[e],null}function yn(e,t){if(null!=t){var n,r,i=an;null!=cn[e]&&null!=cn[e].parentLocale?cn[e].set(N(cn[e]._config,t)):(null!=(r=pn(e))&&(i=r._config),t=N(i,t),null==r&&(t.abbr=e),(n=new C(t)).parentLocale=cn[e],cn[e]=n),mn(e)}else null!=cn[e]&&(null!=cn[e].parentLocale?(cn[e]=cn[e].parentLocale,e===mn()&&mn(e)):null!=cn[e]&&delete cn[e]);return cn[e]}function _n(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return on;if(!s(e)){if(t=pn(e))return t;e=[e]}return dn(e)}function vn(){return I(cn)}function wn(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[Ve]<0||n[Ve]>11?Ve:n[$e]<1||n[$e]>Xe(n[We],n[Ve])?$e:n[ze]<0||n[ze]>24||24===n[ze]&&(0!==n[Ge]||0!==n[qe]||0!==n[Ke])?ze:n[Ge]<0||n[Ge]>59?Ge:n[qe]<0||n[qe]>59?qe:n[Ke]<0||n[Ke]>999?Ke:-1,g(e)._overflowDayOfYear&&(t<We||t>$e)&&(t=$e),g(e)._overflowWeeks&&-1===t&&(t=Je),g(e)._overflowWeekday&&-1===t&&(t=Ze),g(e).overflow=t),e}var bn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,En=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Sn=/Z|[+-]\d\d(?::?\d\d)?/,Tn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],kn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],In=/^\/?Date\((-?\d+)/i,On=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Rn={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dn(e){var t,n,r,i,s,o,a=e._i,c=bn.exec(a)||En.exec(a),u=Tn.length,l=kn.length;if(c){for(g(e).iso=!0,t=0,n=u;t<n;t++)if(Tn[t][1].exec(c[1])){i=Tn[t][0],r=!1!==Tn[t][2];break}if(null==i)return void(e._isValid=!1);if(c[3]){for(t=0,n=l;t<n;t++)if(kn[t][1].exec(c[3])){s=(c[2]||" ")+kn[t][0];break}if(null==s)return void(e._isValid=!1)}if(!r&&null!=s)return void(e._isValid=!1);if(c[4]){if(!Sn.exec(c[4]))return void(e._isValid=!1);o="Z"}e._f=i+(s||"")+(o||""),Yn(e)}else e._isValid=!1}function An(e,t,n,r,i,s){var o=[Nn(e),tt.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function Nn(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Cn(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Mn(e,t,n){return!e||Pt.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(g(n).weekdayMismatch=!0,n._isValid=!1,!1)}function Pn(e,t,n){if(e)return Rn[e];if(t)return 0;var r=parseInt(n,10),i=r%100;return(r-i)/100*60+i}function Ln(e){var t,n=On.exec(Cn(e._i));if(n){if(t=An(n[4],n[3],n[2],n[5],n[6],n[7]),!Mn(n[1],t,e))return;e._a=t,e._tzm=Pn(n[8],n[9],n[10]),e._d=vt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Un(e){var t=In.exec(e._i);null===t?(Dn(e),!1===e._isValid&&(delete e._isValid,Ln(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:r.createFromInputFallback(e)))):e._d=new Date(+t[1])}function xn(e,t,n){return null!=e?e:null!=t?t:n}function Bn(e){var t=new Date(r.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Fn(e){var t,n,r,i,s,o=[];if(!e._d){for(r=Bn(e),e._w&&null==e._a[$e]&&null==e._a[Ve]&&jn(e),null!=e._dayOfYear&&(s=xn(e._a[We],r[We]),(e._dayOfYear>mt(s)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=vt(s,0,e._dayOfYear),e._a[Ve]=n.getUTCMonth(),e._a[$e]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=r[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ze]&&0===e._a[Ge]&&0===e._a[qe]&&0===e._a[Ke]&&(e._nextDay=!0,e._a[ze]=0),e._d=(e._useUTC?vt:_t).apply(null,o),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ze]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}function jn(e){var t,n,r,i,s,o,a,c,u;null!=(t=e._w).GG||null!=t.W||null!=t.E?(s=1,o=4,n=xn(t.GG,e._a[We],Et(Kn(),1,4).year),r=xn(t.W,1),((i=xn(t.E,1))<1||i>7)&&(c=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,u=Et(Kn(),s,o),n=xn(t.gg,e._a[We],u.year),r=xn(t.w,u.week),null!=t.d?((i=t.d)<0||i>6)&&(c=!0):null!=t.e?(i=t.e+s,(t.e<0||t.e>6)&&(c=!0)):i=s),r<1||r>St(n,s,o)?g(e)._overflowWeeks=!0:null!=c?g(e)._overflowWeekday=!0:(a=bt(n,r,i,s,o),e._a[We]=a.year,e._dayOfYear=a.dayOfYear)}function Yn(e){if(e._f!==r.ISO_8601)if(e._f!==r.RFC_2822){e._a=[],g(e).empty=!0;var t,n,i,s,o,a,c,u=""+e._i,l=u.length,h=0;for(c=(i=V(e._f,e._locale).match(U)||[]).length,t=0;t<c;t++)s=i[t],(n=(u.match(Le(s,e))||[])[0])&&((o=u.substr(0,u.indexOf(n))).length>0&&g(e).unusedInput.push(o),u=u.slice(u.indexOf(n)+n.length),h+=n.length),F[s]?(n?g(e).empty=!1:g(e).unusedTokens.push(s),Ye(s,n,e)):e._strict&&!n&&g(e).unusedTokens.push(s);g(e).charsLeftOver=l-h,u.length>0&&g(e).unusedInput.push(u),e._a[ze]<=12&&!0===g(e).bigHour&&e._a[ze]>0&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ze]=Hn(e._locale,e._a[ze],e._meridiem),null!==(a=g(e).era)&&(e._a[We]=e._locale.erasConvertYear(a,e._a[We])),Fn(e),wn(e)}else Ln(e);else Dn(e)}function Hn(e,t,n){var r;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((r=e.isPM(n))&&t<12&&(t+=12),r||12!==t||(t=0),t):t}function Wn(e){var t,n,r,i,s,o,a=!1,c=e._f.length;if(0===c)return g(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<c;i++)s=0,o=!1,t=b({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yn(t),y(t)&&(o=!0),s+=g(t).charsLeftOver,s+=10*g(t).unusedTokens.length,g(t).score=s,a?s<r&&(r=s,n=t):(null==r||s<r||o)&&(r=s,n=t,o&&(a=!0));f(e,n||t)}function Vn(e){if(!e._d){var t=ie(e._i),n=void 0===t.day?t.date:t.day;e._a=d([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],(function(e){return e&&parseInt(e,10)})),Fn(e)}}function $n(e){var t=new E(wn(zn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function zn(e){var t=e._i,n=e._f;return e._locale=e._locale||_n(e._l),null===t||void 0===n&&""===t?_({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),S(t)?new E(wn(t)):(h(t)?e._d=t:s(n)?Wn(e):n?Yn(e):Gn(e),y(e)||(e._d=null),e))}function Gn(e){var t=e._i;u(t)?e._d=new Date(r.now()):h(t)?e._d=new Date(t.valueOf()):"string"==typeof t?Un(e):s(t)?(e._a=d(t.slice(0),(function(e){return parseInt(e,10)})),Fn(e)):o(t)?Vn(e):l(t)?e._d=new Date(t):r.createFromInputFallback(e)}function qn(e,t,n,r,i){var a={};return!0!==t&&!1!==t||(r=t,t=void 0),!0!==n&&!1!==n||(r=n,n=void 0),(o(e)&&c(e)||s(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=r,$n(a)}function Kn(e,t,n,r){return qn(e,t,n,r,!1)}r.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})),r.ISO_8601=function(){},r.RFC_2822=function(){};var Jn=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Kn.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:_()})),Zn=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Kn.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:_()}));function Qn(e,t){var n,r;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Kn();for(n=t[0],r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](n)||(n=t[r]);return n}function Xn(){return Qn("isBefore",[].slice.call(arguments,0))}function er(){return Qn("isAfter",[].slice.call(arguments,0))}var tr=function(){return Date.now?Date.now():+new Date},nr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function rr(e){var t,n,r=!1,i=nr.length;for(t in e)if(a(e,t)&&(-1===He.call(nr,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<i;++n)if(e[nr[n]]){if(r)return!1;parseFloat(e[nr[n]])!==le(e[nr[n]])&&(r=!0)}return!0}function ir(){return this._isValid}function sr(){return Rr(NaN)}function or(e){var t=ie(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,c=t.minute||0,u=t.second||0,l=t.millisecond||0;this._isValid=rr(t),this._milliseconds=+l+1e3*u+6e4*c+36e5*a,this._days=+o+7*s,this._months=+i+3*r+12*n,this._data={},this._locale=_n(),this._bubble()}function ar(e){return e instanceof or}function cr(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function ur(e,t,n){var r,i=Math.min(e.length,t.length),s=Math.abs(e.length-t.length),o=0;for(r=0;r<i;r++)(n&&e[r]!==t[r]||!n&&le(e[r])!==le(t[r]))&&o++;return o+s}function lr(e,t){j(e,0,0,(function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+L(~~(e/60),2)+t+L(~~e%60,2)}))}lr("Z",":"),lr("ZZ",""),Pe("Z",Ne),Pe("ZZ",Ne),Fe(["Z","ZZ"],(function(e,t,n){n._useUTC=!0,n._tzm=dr(Ne,e)}));var hr=/([\+\-]|\d\d)/gi;function dr(e,t){var n,r,i=(t||"").match(e);return null===i?null:0===(r=60*(n=((i[i.length-1]||[])+"").match(hr)||["-",0,0])[1]+le(n[2]))?0:"+"===n[0]?r:-r}function fr(e,t){var n,i;return t._isUTC?(n=t.clone(),i=(S(e)||h(e)?e.valueOf():Kn(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),r.updateOffset(n,!1),n):Kn(e).local()}function pr(e){return-Math.round(e._d.getTimezoneOffset())}function mr(e,t,n){var i,s=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=dr(Ne,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(i=pr(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),s!==e&&(!t||this._changeInProgress?Mr(this,Rr(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?s:pr(this)}function gr(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function yr(e){return this.utcOffset(0,e)}function _r(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(pr(this),"m")),this}function vr(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=dr(Ae,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function wr(e){return!!this.isValid()&&(e=e?Kn(e).utcOffset():0,(this.utcOffset()-e)%60==0)}function br(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Er(){if(!u(this._isDSTShifted))return this._isDSTShifted;var e,t={};return b(t,this),(t=zn(t))._a?(e=t._isUTC?p(t._a):Kn(t._a),this._isDSTShifted=this.isValid()&&ur(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Sr(){return!!this.isValid()&&!this._isUTC}function Tr(){return!!this.isValid()&&this._isUTC}function kr(){return!!this.isValid()&&this._isUTC&&0===this._offset}r.updateOffset=function(){};var Ir=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Or=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Rr(e,t){var n,r,i,s=e,o=null;return ar(e)?s={ms:e._milliseconds,d:e._days,M:e._months}:l(e)||!isNaN(+e)?(s={},t?s[t]=+e:s.milliseconds=+e):(o=Ir.exec(e))?(n="-"===o[1]?-1:1,s={y:0,d:le(o[$e])*n,h:le(o[ze])*n,m:le(o[Ge])*n,s:le(o[qe])*n,ms:le(cr(1e3*o[Ke]))*n}):(o=Or.exec(e))?(n="-"===o[1]?-1:1,s={y:Dr(o[2],n),M:Dr(o[3],n),w:Dr(o[4],n),d:Dr(o[5],n),h:Dr(o[6],n),m:Dr(o[7],n),s:Dr(o[8],n)}):null==s?s={}:"object"==typeof s&&("from"in s||"to"in s)&&(i=Nr(Kn(s.from),Kn(s.to)),(s={}).ms=i.milliseconds,s.M=i.months),r=new or(s),ar(e)&&a(e,"_locale")&&(r._locale=e._locale),ar(e)&&a(e,"_isValid")&&(r._isValid=e._isValid),r}function Dr(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Ar(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Nr(e,t){var n;return e.isValid()&&t.isValid()?(t=fr(t,e),e.isBefore(t)?n=Ar(e,t):((n=Ar(t,e)).milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Cr(e,t){return function(n,r){var i;return null===r||isNaN(+r)||(R(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=r,r=i),Mr(this,Rr(n,r),e),this}}function Mr(e,t,n,i){var s=t._milliseconds,o=cr(t._days),a=cr(t._months);e.isValid()&&(i=null==i||i,a&&ut(e,de(e,"Month")+a*n),o&&fe(e,"Date",de(e,"Date")+o*n),s&&e._d.setTime(e._d.valueOf()+s*n),i&&r.updateOffset(e,o||a))}Rr.fn=or.prototype,Rr.invalid=sr;var Pr=Cr(1,"add"),Lr=Cr(-1,"subtract");function Ur(e){return"string"==typeof e||e instanceof String}function xr(e){return S(e)||h(e)||Ur(e)||l(e)||Fr(e)||Br(e)||null==e}function Br(e){var t,n,r=o(e)&&!c(e),i=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],u=s.length;for(t=0;t<u;t+=1)n=s[t],i=i||a(e,n);return r&&i}function Fr(e){var t=s(e),n=!1;return t&&(n=0===e.filter((function(t){return!l(t)&&Ur(e)})).length),t&&n}function jr(e){var t,n,r=o(e)&&!c(e),i=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<s.length;t+=1)n=s[t],i=i||a(e,n);return r&&i}function Yr(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Hr(e,t){1===arguments.length&&(arguments[0]?xr(arguments[0])?(e=arguments[0],t=void 0):jr(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Kn(),i=fr(n,this).startOf("day"),s=r.calendarFormat(this,i)||"sameElse",o=t&&(D(t[s])?t[s].call(this,n):t[s]);return this.format(o||this.localeData().calendar(s,this,Kn(n)))}function Wr(){return new E(this)}function Vr(e,t){var n=S(e)?e:Kn(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=re(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function $r(e,t){var n=S(e)?e:Kn(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=re(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function zr(e,t,n,r){var i=S(e)?e:Kn(e),s=S(t)?t:Kn(t);return!!(this.isValid()&&i.isValid()&&s.isValid())&&("("===(r=r||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===r[1]?this.isBefore(s,n):!this.isAfter(s,n))}function Gr(e,t){var n,r=S(e)?e:Kn(e);return!(!this.isValid()||!r.isValid())&&("millisecond"===(t=re(t)||"millisecond")?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function qr(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Kr(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Jr(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(!(r=fr(e,this)).isValid())return NaN;switch(i=6e4*(r.utcOffset()-this.utcOffset()),t=re(t)){case"year":s=Zr(this,r)/12;break;case"month":s=Zr(this,r);break;case"quarter":s=Zr(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:ue(s)}function Zr(e,t){if(e.date()<t.date())return-Zr(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(n,"months");return-(n+(t-r<0?(t-r)/(r-e.clone().add(n-1,"months")):(t-r)/(e.clone().add(n+1,"months")-r)))||0}function Qr(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Xr(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?W(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):D(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+6e4*this.utcOffset()).toISOString().replace("Z",W(n,"Z")):W(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ei(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,r,i="moment",s="";return this.isLocal()||(i=0===this.utcOffset()?"moment.utc":"moment.parseZone",s="Z"),e="["+i+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",r=s+'[")]',this.format(e+t+n+r)}function ti(e){e||(e=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var t=W(this,e);return this.localeData().postformat(t)}function ni(e,t){return this.isValid()&&(S(e)&&e.isValid()||Kn(e).isValid())?Rr({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ri(e){return this.from(Kn(),e)}function ii(e,t){return this.isValid()&&(S(e)&&e.isValid()||Kn(e).isValid())?Rr({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function si(e){return this.to(Kn(),e)}function oi(e){var t;return void 0===e?this._locale._abbr:(null!=(t=_n(e))&&(this._locale=t),this)}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var ai=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){return void 0===e?this.localeData():this.locale(e)}));function ci(){return this._locale}var ui=1e3,li=60*ui,hi=60*li,di=3506328*hi;function fi(e,t){return(e%t+t)%t}function pi(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-di:new Date(e,t,n).valueOf()}function mi(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-di:Date.UTC(e,t,n)}function gi(e){var t,n;if(void 0===(e=re(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?mi:pi,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=fi(t+(this._isUTC?0:this.utcOffset()*li),hi);break;case"minute":t=this._d.valueOf(),t-=fi(t,li);break;case"second":t=this._d.valueOf(),t-=fi(t,ui)}return this._d.setTime(t),r.updateOffset(this,!0),this}function yi(e){var t,n;if(void 0===(e=re(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?mi:pi,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=hi-fi(t+(this._isUTC?0:this.utcOffset()*li),hi)-1;break;case"minute":t=this._d.valueOf(),t+=li-fi(t,li)-1;break;case"second":t=this._d.valueOf(),t+=ui-fi(t,ui)-1}return this._d.setTime(t),r.updateOffset(this,!0),this}function _i(){return this._d.valueOf()-6e4*(this._offset||0)}function vi(){return Math.floor(this.valueOf()/1e3)}function wi(){return new Date(this.valueOf())}function bi(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Ei(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Si(){return this.isValid()?this.toISOString():null}function Ti(){return y(this)}function ki(){return f({},g(this))}function Ii(){return g(this).overflow}function Oi(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ri(e,t){var n,i,s,o=this._eras||_n("en")._eras;for(n=0,i=o.length;n<i;++n)switch("string"==typeof o[n].since&&(s=r(o[n].since).startOf("day"),o[n].since=s.valueOf()),typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":s=r(o[n].until).startOf("day").valueOf(),o[n].until=s.valueOf()}return o}function Di(e,t,n){var r,i,s,o,a,c=this.eras();for(e=e.toUpperCase(),r=0,i=c.length;r<i;++r)if(s=c[r].name.toUpperCase(),o=c[r].abbr.toUpperCase(),a=c[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return c[r];break;case"NNNN":if(s===e)return c[r];break;case"NNNNN":if(a===e)return c[r]}else if([s,o,a].indexOf(e)>=0)return c[r]}function Ai(e,t){var n=e.since<=e.until?1:-1;return void 0===t?r(e.since).year():r(e.since).year()+(t-e.offset)*n}function Ni(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].name;if(r[e].until<=n&&n<=r[e].since)return r[e].name}return""}function Ci(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].narrow;if(r[e].until<=n&&n<=r[e].since)return r[e].narrow}return""}function Mi(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until)return r[e].abbr;if(r[e].until<=n&&n<=r[e].since)return r[e].abbr}return""}function Pi(){var e,t,n,i,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(n=s[e].since<=s[e].until?1:-1,i=this.clone().startOf("day").valueOf(),s[e].since<=i&&i<=s[e].until||s[e].until<=i&&i<=s[e].since)return(this.year()-r(s[e].since).year())*n+s[e].offset;return this.year()}function Li(e){return a(this,"_erasNameRegex")||Hi.call(this),e?this._erasNameRegex:this._erasRegex}function Ui(e){return a(this,"_erasAbbrRegex")||Hi.call(this),e?this._erasAbbrRegex:this._erasRegex}function xi(e){return a(this,"_erasNarrowRegex")||Hi.call(this),e?this._erasNarrowRegex:this._erasRegex}function Bi(e,t){return t.erasAbbrRegex(e)}function Fi(e,t){return t.erasNameRegex(e)}function ji(e,t){return t.erasNarrowRegex(e)}function Yi(e,t){return t._eraYearOrdinalRegex||Re}function Hi(){var e,t,n=[],r=[],i=[],s=[],o=this.eras();for(e=0,t=o.length;e<t;++e)r.push(xe(o[e].name)),n.push(xe(o[e].abbr)),i.push(xe(o[e].narrow)),s.push(xe(o[e].name)),s.push(xe(o[e].abbr)),s.push(xe(o[e].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}function Wi(e,t){j(0,[e,e.length],0,t)}function Vi(e){return Ji.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function $i(e){return Ji.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function zi(){return St(this.year(),1,4)}function Gi(){return St(this.isoWeekYear(),1,4)}function qi(){var e=this.localeData()._week;return St(this.year(),e.dow,e.doy)}function Ki(){var e=this.localeData()._week;return St(this.weekYear(),e.dow,e.doy)}function Ji(e,t,n,r,i){var s;return null==e?Et(this,r,i).year:(t>(s=St(e,r,i))&&(t=s),Zi.call(this,e,t,n,r,i))}function Zi(e,t,n,r,i){var s=bt(e,t,n,r,i),o=vt(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Qi(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}j("N",0,0,"eraAbbr"),j("NN",0,0,"eraAbbr"),j("NNN",0,0,"eraAbbr"),j("NNNN",0,0,"eraName"),j("NNNNN",0,0,"eraNarrow"),j("y",["y",1],"yo","eraYear"),j("y",["yy",2],0,"eraYear"),j("y",["yyy",3],0,"eraYear"),j("y",["yyyy",4],0,"eraYear"),Pe("N",Bi),Pe("NN",Bi),Pe("NNN",Bi),Pe("NNNN",Fi),Pe("NNNNN",ji),Fe(["N","NN","NNN","NNNN","NNNNN"],(function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?g(n).era=i:g(n).invalidEra=e})),Pe("y",Re),Pe("yy",Re),Pe("yyy",Re),Pe("yyyy",Re),Pe("yo",Yi),Fe(["y","yy","yyy","yyyy"],We),Fe(["yo"],(function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[We]=n._locale.eraYearOrdinalParse(e,i):t[We]=parseInt(e,10)})),j(0,["gg",2],0,(function(){return this.weekYear()%100})),j(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),Wi("gggg","weekYear"),Wi("ggggg","weekYear"),Wi("GGGG","isoWeekYear"),Wi("GGGGG","isoWeekYear"),ne("weekYear","gg"),ne("isoWeekYear","GG"),oe("weekYear",1),oe("isoWeekYear",1),Pe("G",De),Pe("g",De),Pe("GG",Ee,_e),Pe("gg",Ee,_e),Pe("GGGG",Ie,we),Pe("gggg",Ie,we),Pe("GGGGG",Oe,be),Pe("ggggg",Oe,be),je(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,n,r){t[r.substr(0,2)]=le(e)})),je(["gg","GG"],(function(e,t,n,i){t[i]=r.parseTwoDigitYear(e)})),j("Q",0,"Qo","quarter"),ne("quarter","Q"),oe("quarter",7),Pe("Q",ye),Fe("Q",(function(e,t){t[Ve]=3*(le(e)-1)})),j("D",["DD",2],"Do","date"),ne("date","D"),oe("date",9),Pe("D",Ee),Pe("DD",Ee,_e),Pe("Do",(function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})),Fe(["D","DD"],$e),Fe("Do",(function(e,t){t[$e]=le(e.match(Ee)[0])}));var Xi=he("Date",!0);function es(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}j("DDD",["DDDD",3],"DDDo","dayOfYear"),ne("dayOfYear","DDD"),oe("dayOfYear",4),Pe("DDD",ke),Pe("DDDD",ve),Fe(["DDD","DDDD"],(function(e,t,n){n._dayOfYear=le(e)})),j("m",["mm",2],0,"minute"),ne("minute","m"),oe("minute",14),Pe("m",Ee),Pe("mm",Ee,_e),Fe(["m","mm"],Ge);var ts=he("Minutes",!1);j("s",["ss",2],0,"second"),ne("second","s"),oe("second",15),Pe("s",Ee),Pe("ss",Ee,_e),Fe(["s","ss"],qe);var ns,rs,is=he("Seconds",!1);for(j("S",0,0,(function(){return~~(this.millisecond()/100)})),j(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),j(0,["SSS",3],0,"millisecond"),j(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),j(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),j(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),j(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),j(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),j(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),ne("millisecond","ms"),oe("millisecond",16),Pe("S",ke,ye),Pe("SS",ke,_e),Pe("SSS",ke,ve),ns="SSSS";ns.length<=9;ns+="S")Pe(ns,Re);function ss(e,t){t[Ke]=le(1e3*("0."+e))}for(ns="S";ns.length<=9;ns+="S")Fe(ns,ss);function os(){return this._isUTC?"UTC":""}function as(){return this._isUTC?"Coordinated Universal Time":""}rs=he("Milliseconds",!1),j("z",0,0,"zoneAbbr"),j("zz",0,0,"zoneName");var cs=E.prototype;function us(e){return Kn(1e3*e)}function ls(){return Kn.apply(null,arguments).parseZone()}function hs(e){return e}cs.add=Pr,cs.calendar=Hr,cs.clone=Wr,cs.diff=Jr,cs.endOf=yi,cs.format=ti,cs.from=ni,cs.fromNow=ri,cs.to=ii,cs.toNow=si,cs.get=pe,cs.invalidAt=Ii,cs.isAfter=Vr,cs.isBefore=$r,cs.isBetween=zr,cs.isSame=Gr,cs.isSameOrAfter=qr,cs.isSameOrBefore=Kr,cs.isValid=Ti,cs.lang=ai,cs.locale=oi,cs.localeData=ci,cs.max=Zn,cs.min=Jn,cs.parsingFlags=ki,cs.set=me,cs.startOf=gi,cs.subtract=Lr,cs.toArray=bi,cs.toObject=Ei,cs.toDate=wi,cs.toISOString=Xr,cs.inspect=ei,"undefined"!=typeof Symbol&&null!=Symbol.for&&(cs[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),cs.toJSON=Si,cs.toString=Qr,cs.unix=vi,cs.valueOf=_i,cs.creationData=Oi,cs.eraName=Ni,cs.eraNarrow=Ci,cs.eraAbbr=Mi,cs.eraYear=Pi,cs.year=gt,cs.isLeapYear=yt,cs.weekYear=Vi,cs.isoWeekYear=$i,cs.quarter=cs.quarters=Qi,cs.month=lt,cs.daysInMonth=ht,cs.week=cs.weeks=Rt,cs.isoWeek=cs.isoWeeks=Dt,cs.weeksInYear=qi,cs.weeksInWeekYear=Ki,cs.isoWeeksInYear=zi,cs.isoWeeksInISOWeekYear=Gi,cs.date=Xi,cs.day=cs.days=Vt,cs.weekday=$t,cs.isoWeekday=zt,cs.dayOfYear=es,cs.hour=cs.hours=rn,cs.minute=cs.minutes=ts,cs.second=cs.seconds=is,cs.millisecond=cs.milliseconds=rs,cs.utcOffset=mr,cs.utc=yr,cs.local=_r,cs.parseZone=vr,cs.hasAlignedHourOffset=wr,cs.isDST=br,cs.isLocal=Sr,cs.isUtcOffset=Tr,cs.isUtc=kr,cs.isUTC=kr,cs.zoneAbbr=os,cs.zoneName=as,cs.dates=k("dates accessor is deprecated. Use date instead.",Xi),cs.months=k("months accessor is deprecated. Use month instead",lt),cs.years=k("years accessor is deprecated. Use year instead",gt),cs.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",gr),cs.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Er);var ds=C.prototype;function fs(e,t,n,r){var i=_n(),s=p().set(r,t);return i[n](s,e)}function ps(e,t,n){if(l(e)&&(t=e,e=void 0),e=e||"",null!=t)return fs(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=fs(e,r,n,"month");return i}function ms(e,t,n,r){"boolean"==typeof e?(l(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,l(t)&&(n=t,t=void 0),t=t||"");var i,s=_n(),o=e?s._week.dow:0,a=[];if(null!=n)return fs(t,(n+o)%7,r,"day");for(i=0;i<7;i++)a[i]=fs(t,(i+o)%7,r,"day");return a}function gs(e,t){return ps(e,t,"months")}function ys(e,t){return ps(e,t,"monthsShort")}function _s(e,t,n){return ms(e,t,n,"weekdays")}function vs(e,t,n){return ms(e,t,n,"weekdaysShort")}function ws(e,t,n){return ms(e,t,n,"weekdaysMin")}ds.calendar=P,ds.longDateFormat=z,ds.invalidDate=q,ds.ordinal=Z,ds.preparse=hs,ds.postformat=hs,ds.relativeTime=X,ds.pastFuture=ee,ds.set=A,ds.eras=Ri,ds.erasParse=Di,ds.erasConvertYear=Ai,ds.erasAbbrRegex=Ui,ds.erasNameRegex=Li,ds.erasNarrowRegex=xi,ds.months=st,ds.monthsShort=ot,ds.monthsParse=ct,ds.monthsRegex=ft,ds.monthsShortRegex=dt,ds.week=Tt,ds.firstDayOfYear=Ot,ds.firstDayOfWeek=It,ds.weekdays=Ft,ds.weekdaysMin=Yt,ds.weekdaysShort=jt,ds.weekdaysParse=Wt,ds.weekdaysRegex=Gt,ds.weekdaysShortRegex=qt,ds.weekdaysMinRegex=Kt,ds.isPM=tn,ds.meridiem=sn,mn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===le(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),r.lang=k("moment.lang is deprecated. Use moment.locale instead.",mn),r.langData=k("moment.langData is deprecated. Use moment.localeData instead.",_n);var bs=Math.abs;function Es(){var e=this._data;return this._milliseconds=bs(this._milliseconds),this._days=bs(this._days),this._months=bs(this._months),e.milliseconds=bs(e.milliseconds),e.seconds=bs(e.seconds),e.minutes=bs(e.minutes),e.hours=bs(e.hours),e.months=bs(e.months),e.years=bs(e.years),this}function Ss(e,t,n,r){var i=Rr(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function Ts(e,t){return Ss(this,e,t,1)}function ks(e,t){return Ss(this,e,t,-1)}function Is(e){return e<0?Math.floor(e):Math.ceil(e)}function Os(){var e,t,n,r,i,s=this._milliseconds,o=this._days,a=this._months,c=this._data;return s>=0&&o>=0&&a>=0||s<=0&&o<=0&&a<=0||(s+=864e5*Is(Ds(a)+o),o=0,a=0),c.milliseconds=s%1e3,e=ue(s/1e3),c.seconds=e%60,t=ue(e/60),c.minutes=t%60,n=ue(t/60),c.hours=n%24,o+=ue(n/24),a+=i=ue(Rs(o)),o-=Is(Ds(i)),r=ue(a/12),a%=12,c.days=o,c.months=a,c.years=r,this}function Rs(e){return 4800*e/146097}function Ds(e){return 146097*e/4800}function As(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if("month"===(e=re(e))||"quarter"===e||"year"===e)switch(t=this._days+r/864e5,n=this._months+Rs(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Ds(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}}function Ns(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*le(this._months/12):NaN}function Cs(e){return function(){return this.as(e)}}var Ms=Cs("ms"),Ps=Cs("s"),Ls=Cs("m"),Us=Cs("h"),xs=Cs("d"),Bs=Cs("w"),Fs=Cs("M"),js=Cs("Q"),Ys=Cs("y");function Hs(){return Rr(this)}function Ws(e){return e=re(e),this.isValid()?this[e+"s"]():NaN}function Vs(e){return function(){return this.isValid()?this._data[e]:NaN}}var $s=Vs("milliseconds"),zs=Vs("seconds"),Gs=Vs("minutes"),qs=Vs("hours"),Ks=Vs("days"),Js=Vs("months"),Zs=Vs("years");function Qs(){return ue(this.days()/7)}var Xs=Math.round,eo={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function to(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function no(e,t,n,r){var i=Rr(e).abs(),s=Xs(i.as("s")),o=Xs(i.as("m")),a=Xs(i.as("h")),c=Xs(i.as("d")),u=Xs(i.as("M")),l=Xs(i.as("w")),h=Xs(i.as("y")),d=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||c<=1&&["d"]||c<n.d&&["dd",c];return null!=n.w&&(d=d||l<=1&&["w"]||l<n.w&&["ww",l]),(d=d||u<=1&&["M"]||u<n.M&&["MM",u]||h<=1&&["y"]||["yy",h])[2]=t,d[3]=+e>0,d[4]=r,to.apply(null,d)}function ro(e){return void 0===e?Xs:"function"==typeof e&&(Xs=e,!0)}function io(e,t){return void 0!==eo[e]&&(void 0===t?eo[e]:(eo[e]=t,"s"===e&&(eo.ss=t-1),!0))}function so(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,r,i=!1,s=eo;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(i=e),"object"==typeof t&&(s=Object.assign({},eo,t),null!=t.s&&null==t.ss&&(s.ss=t.s-1)),r=no(this,!i,s,n=this.localeData()),i&&(r=n.pastFuture(+this,r)),n.postformat(r)}var oo=Math.abs;function ao(e){return(e>0)-(e<0)||+e}function co(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,r,i,s,o,a,c=oo(this._milliseconds)/1e3,u=oo(this._days),l=oo(this._months),h=this.asSeconds();return h?(e=ue(c/60),t=ue(e/60),c%=60,e%=60,n=ue(l/12),l%=12,r=c?c.toFixed(3).replace(/\.?0+$/,""):"",i=h<0?"-":"",s=ao(this._months)!==ao(h)?"-":"",o=ao(this._days)!==ao(h)?"-":"",a=ao(this._milliseconds)!==ao(h)?"-":"",i+"P"+(n?s+n+"Y":"")+(l?s+l+"M":"")+(u?o+u+"D":"")+(t||e||c?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(c?a+r+"S":"")):"P0D"}var uo=or.prototype;return uo.isValid=ir,uo.abs=Es,uo.add=Ts,uo.subtract=ks,uo.as=As,uo.asMilliseconds=Ms,uo.asSeconds=Ps,uo.asMinutes=Ls,uo.asHours=Us,uo.asDays=xs,uo.asWeeks=Bs,uo.asMonths=Fs,uo.asQuarters=js,uo.asYears=Ys,uo.valueOf=Ns,uo._bubble=Os,uo.clone=Hs,uo.get=Ws,uo.milliseconds=$s,uo.seconds=zs,uo.minutes=Gs,uo.hours=qs,uo.days=Ks,uo.weeks=Qs,uo.months=Js,uo.years=Zs,uo.humanize=so,uo.toISOString=co,uo.toString=co,uo.toJSON=co,uo.locale=oi,uo.localeData=ci,uo.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",co),uo.lang=ai,j("X",0,0,"unix"),j("x",0,0,"valueOf"),Pe("x",De),Pe("X",Ce),Fe("X",(function(e,t,n){n._d=new Date(1e3*parseFloat(e))})),Fe("x",(function(e,t,n){n._d=new Date(le(e))})),
//! moment.js
r.version="2.29.4",i(Kn),r.fn=cs,r.min=Xn,r.max=er,r.now=tr,r.utc=p,r.unix=us,r.months=gs,r.isDate=h,r.locale=mn,r.invalid=_,r.duration=Rr,r.isMoment=S,r.weekdays=_s,r.parseZone=ls,r.localeData=_n,r.isDuration=ar,r.monthsShort=ys,r.weekdaysMin=ws,r.defineLocale=gn,r.updateLocale=yn,r.locales=vn,r.weekdaysShort=vs,r.normalizeUnits=re,r.relativeTimeRounding=ro,r.relativeTimeThreshold=io,r.calendarFormat=Yr,r.prototype=cs,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r}()})),s("kyEFX").register(JSON.parse('{"5ZPII":"favorite.33ed1bcf.js","Vj47w":"location.565ce5d9.svg"}'));const{toString:a}=Object.prototype,{getPrototypeOf:c}=Object,u=(l=Object.create(null),e=>{const t=a.call(e);return l[t]||(l[t]=t.slice(8,-1).toLowerCase())});var l;const h=e=>(e=e.toLowerCase(),t=>u(t)===e),d=e=>t=>typeof t===e,{isArray:f}=Array,p=d("undefined");const m=h("ArrayBuffer");const g=d("string"),y=d("function"),_=d("number"),v=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==u(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=h("Date"),E=h("File"),S=h("Blob"),T=h("FileList"),k=h("URLSearchParams");function I(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),f(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function O(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,D=e=>!p(e)&&e!==R;const A=(N="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>N&&e instanceof N);var N;const C=h("HTMLFormElement"),M=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=h("RegExp"),L=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},U={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var x={isArray:f,isArrayBuffer:m,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||a.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer),t},isString:g,isNumber:_,isBoolean:e=>!0===e||!1===e,isObject:v,isPlainObject:w,isUndefined:p,isDate:b,isFile:E,isBlob:S,isRegExp:P,isFunction:y,isStream:e=>v(e)&&y(e.pipe),isURLSearchParams:k,isTypedArray:A,isFileList:T,forEach:I,merge:function e(){const{caseless:t}=D(this)&&this||{},n={},r=(r,i)=>{const s=t&&O(n,i)||i;w(n[s])&&w(r)?n[s]=e(n[s],r):w(r)?n[s]=e({},r):f(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&I(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(I(t,((t,r)=>{n&&y(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:h,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!_(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:C,hasOwnProperty:M,hasOwnProp:M,reduceDescriptors:L,freezeMethods:e=>{L(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:O,global:R,isContextDefined:D,ALPHABET:U,generateString:(e=16,t=U.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=f(e)?[]:{};return I(e,((e,t)=>{const s=n(e,r+1);!p(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)}};function B(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}x.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const F=B.prototype,j={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{j[e]={value:e}})),Object.defineProperties(B,j),Object.defineProperty(F,"isAxiosError",{value:!0}),B.from=(e,t,n,r,i,s)=>{const o=Object.create(F);return x.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),B.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var Y,H,W,V=B;H=function(e){var t,n,r=X(e),i=r[0],s=r[1],o=new K(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,c=s>0?i-4:i;for(n=0;n<c;n+=4)t=q[e.charCodeAt(n)]<<18|q[e.charCodeAt(n+1)]<<12|q[e.charCodeAt(n+2)]<<6|q[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=q[e.charCodeAt(n)]<<2|q[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=q[e.charCodeAt(n)]<<10|q[e.charCodeAt(n+1)]<<4|q[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},W=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(ee(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(G[t>>2]+G[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(G[t>>10]+G[t>>4&63]+G[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var $,z,G=[],q=[],K="undefined"!=typeof Uint8Array?Uint8Array:Array,J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Z=0,Q=J.length;Z<Q;++Z)G[Z]=J[Z],q[J.charCodeAt(Z)]=Z;function X(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ee(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(G[(i=r)>>18&63]+G[i>>12&63]+G[i>>6&63]+G[63&i]);return s.join("")}q["-".charCodeAt(0)]=62,q["_".charCodeAt(0)]=63,$=function(e,t,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+e[t+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+e[t+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},z=function(e,t,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(t*c-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[n+f]=255&o,f+=p,o/=256,u-=8);e[n+f-p]|=128*m};const te="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Y=re;function ne(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,re.prototype),t}function re(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return oe(e)}return ie(e,t,n)}function ie(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!re.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|le(e,t);let r=ne(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(We(e,Uint8Array)){const t=new Uint8Array(e);return ce(t.buffer,t.byteOffset,t.byteLength)}return ae(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(We(e,ArrayBuffer)||e&&We(e.buffer,ArrayBuffer))return ce(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(We(e,SharedArrayBuffer)||e&&We(e.buffer,SharedArrayBuffer)))return ce(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return re.from(r,t,n);const i=function(e){if(re.isBuffer(e)){const t=0|ue(e.length),n=ne(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Ve(e.length)?ne(0):ae(e);if("Buffer"===e.type&&Array.isArray(e.data))return ae(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return re.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function se(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function oe(e){return se(e),ne(e<0?0:0|ue(e))}function ae(e){const t=e.length<0?0:0|ue(e.length),n=ne(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function ce(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,re.prototype),r}function ue(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function le(e,t){if(re.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||We(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return je(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Ye(e).length;default:if(i)return r?-1:je(e).length;t=(""+t).toLowerCase(),i=!0}}function he(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Te(this,t,n);case"utf8":case"utf-8":return be(this,t,n);case"ascii":return Ee(this,t,n);case"latin1":case"binary":return Se(this,t,n);case"base64":return we(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function de(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function fe(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ve(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=re.from(t,r)),re.isBuffer(t))return 0===t.length?-1:pe(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):pe(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function pe(e,t,n,r,i){let s,o=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return-1}function me(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(Ve(r))return o;e[n+o]=r}return o}function ge(e,t,n,r){return He(je(t,e.length-n),e,n,r)}function ye(e,t,n,r){return He(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function _e(e,t,n,r){return He(Ye(t),e,n,r)}function ve(e,t,n,r){return He(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function we(e,t,n){return 0===t&&n===e.length?W(e):W(e.slice(t,n))}function be(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}re.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),re.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(re.prototype,"parent",{enumerable:!0,get:function(){if(re.isBuffer(this))return this.buffer}}),Object.defineProperty(re.prototype,"offset",{enumerable:!0,get:function(){if(re.isBuffer(this))return this.byteOffset}}),re.poolSize=8192,re.from=function(e,t,n){return ie(e,t,n)},Object.setPrototypeOf(re.prototype,Uint8Array.prototype),Object.setPrototypeOf(re,Uint8Array),re.alloc=function(e,t,n){return function(e,t,n){return se(e),e<=0?ne(e):void 0!==t?"string"==typeof n?ne(e).fill(t,n):ne(e).fill(t):ne(e)}(e,t,n)},re.allocUnsafe=function(e){return oe(e)},re.allocUnsafeSlow=function(e){return oe(e)},re.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==re.prototype},re.compare=function(e,t){if(We(e,Uint8Array)&&(e=re.from(e,e.offset,e.byteLength)),We(t,Uint8Array)&&(t=re.from(t,t.offset,t.byteLength)),!re.isBuffer(e)||!re.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},re.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},re.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return re.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=re.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(We(t,Uint8Array))i+t.length>r.length?(re.isBuffer(t)||(t=re.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!re.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},re.byteLength=le,re.prototype._isBuffer=!0,re.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)de(this,t,t+1);return this},re.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)de(this,t,t+3),de(this,t+1,t+2);return this},re.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)de(this,t,t+7),de(this,t+1,t+6),de(this,t+2,t+5),de(this,t+3,t+4);return this},re.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?be(this,0,e):he.apply(this,arguments)},re.prototype.toLocaleString=re.prototype.toString,re.prototype.equals=function(e){if(!re.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===re.compare(this,e)},re.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},te&&(re.prototype[te]=re.prototype.inspect),re.prototype.compare=function(e,t,n,r,i){if(We(e,Uint8Array)&&(e=re.from(e,e.offset,e.byteLength)),!re.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==u[e]){s=c[e],o=u[e];break}return s<o?-1:o<s?1:0},re.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},re.prototype.indexOf=function(e,t,n){return fe(this,e,t,n,!0)},re.prototype.lastIndexOf=function(e,t,n){return fe(this,e,t,n,!1)},re.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return me(this,e,t,n);case"utf8":case"utf-8":return ge(this,e,t,n);case"ascii":case"latin1":case"binary":return ye(this,e,t,n);case"base64":return _e(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ve(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},re.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ee(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function Se(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function Te(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=$e[e[r]];return i}function ke(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function Ie(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Oe(e,t,n,r,i,s){if(!re.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function Re(e,t,n,r,i){Ue(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function De(e,t,n,r,i){Ue(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Ae(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ne(e,t,n,r,i){return t=+t,n>>>=0,i||Ae(e,0,n,4),z(e,t,n,r,23,4),n+4}function Ce(e,t,n,r,i){return t=+t,n>>>=0,i||Ae(e,0,n,8),z(e,t,n,r,52,8),n+8}re.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,re.prototype),r},re.prototype.readUintLE=re.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ie(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},re.prototype.readUintBE=re.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ie(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},re.prototype.readUint8=re.prototype.readUInt8=function(e,t){return e>>>=0,t||Ie(e,1,this.length),this[e]},re.prototype.readUint16LE=re.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Ie(e,2,this.length),this[e]|this[e+1]<<8},re.prototype.readUint16BE=re.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Ie(e,2,this.length),this[e]<<8|this[e+1]},re.prototype.readUint32LE=re.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},re.prototype.readUint32BE=re.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},re.prototype.readBigUInt64LE=ze((function(e){xe(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Be(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),re.prototype.readBigUInt64BE=ze((function(e){xe(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Be(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),re.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Ie(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},re.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Ie(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},re.prototype.readInt8=function(e,t){return e>>>=0,t||Ie(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},re.prototype.readInt16LE=function(e,t){e>>>=0,t||Ie(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},re.prototype.readInt16BE=function(e,t){e>>>=0,t||Ie(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},re.prototype.readInt32LE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},re.prototype.readInt32BE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},re.prototype.readBigInt64LE=ze((function(e){xe(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Be(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),re.prototype.readBigInt64BE=ze((function(e){xe(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Be(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),re.prototype.readFloatLE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),$(this,e,!0,23,4)},re.prototype.readFloatBE=function(e,t){return e>>>=0,t||Ie(e,4,this.length),$(this,e,!1,23,4)},re.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Ie(e,8,this.length),$(this,e,!0,52,8)},re.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Ie(e,8,this.length),$(this,e,!1,52,8)},re.prototype.writeUintLE=re.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Oe(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},re.prototype.writeUintBE=re.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Oe(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},re.prototype.writeUint8=re.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,1,255,0),this[t]=255&e,t+1},re.prototype.writeUint16LE=re.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},re.prototype.writeUint16BE=re.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},re.prototype.writeUint32LE=re.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},re.prototype.writeUint32BE=re.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},re.prototype.writeBigUInt64LE=ze((function(e,t=0){return Re(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),re.prototype.writeBigUInt64BE=ze((function(e,t=0){return De(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),re.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Oe(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},re.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Oe(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},re.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},re.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},re.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},re.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},re.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Oe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},re.prototype.writeBigInt64LE=ze((function(e,t=0){return Re(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),re.prototype.writeBigInt64BE=ze((function(e,t=0){return De(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),re.prototype.writeFloatLE=function(e,t,n){return Ne(this,e,t,!0,n)},re.prototype.writeFloatBE=function(e,t,n){return Ne(this,e,t,!1,n)},re.prototype.writeDoubleLE=function(e,t,n){return Ce(this,e,t,!0,n)},re.prototype.writeDoubleBE=function(e,t,n){return Ce(this,e,t,!1,n)},re.prototype.copy=function(e,t,n,r){if(!re.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},re.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!re.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=re.isBuffer(e)?e:re.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const Me={};function Pe(e,t,n){Me[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function Le(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function Ue(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new Me.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){xe(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Be(t,e.length-(n+1))}(r,i,s)}function xe(e,t){if("number"!=typeof e)throw new Me.ERR_INVALID_ARG_TYPE(t,"number",e)}function Be(e,t,n){if(Math.floor(e)!==e)throw xe(e,n),new Me.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Me.ERR_BUFFER_OUT_OF_BOUNDS;throw new Me.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}Pe("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Pe("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),Pe("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=Le(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=Le(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const Fe=/[^+/0-9A-Za-z-_]/g;function je(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Ye(e){return H(function(e){if((e=(e=e.split("=")[0]).trim().replace(Fe,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function He(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function We(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Ve(e){return e!=e}const $e=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function ze(e){return"undefined"==typeof BigInt?Ge:e}function Ge(){throw new Error("BigInt not supported")}var qe=Y;function Ke(e){return x.isPlainObject(e)||x.isArray(e)}function Je(e){return x.endsWith(e,"[]")?e.slice(0,-2):e}function Ze(e,t,n){return e?e.concat(t).map((function(e,t){return e=Je(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Qe=x.toFlatObject(x,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Xe=function(e,t,n){if(!x.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=x.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!x.isUndefined(t[e])}))).metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&x.isSpecCompliantForm(t);if(!x.isFunction(i))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(x.isDate(e))return e.toISOString();if(!a&&x.isBlob(e))throw new V("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(e)||x.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):qe.from(e):e}function u(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(x.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(x.isArray(e)&&function(e){return x.isArray(e)&&!e.some(Ke)}(e)||(x.isFileList(e)||x.endsWith(n,"[]"))&&(a=x.toArray(e)))return n=Je(n),a.forEach((function(e,r){!x.isUndefined(e)&&null!==e&&t.append(!0===o?Ze([n],r,s):null===o?n:n+"[]",c(e))})),!1;return!!Ke(e)||(t.append(Ze(i,n,s),c(e)),!1)}const l=[],h=Object.assign(Qe,{defaultVisitor:u,convertValue:c,isVisitable:Ke});if(!x.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!x.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),x.forEach(n,(function(n,s){!0===(!(x.isUndefined(n)||null===n)&&i.call(t,n,x.isString(s)?s.trim():s,r,h))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t};function et(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function tt(e,t){this._pairs=[],e&&Xe(e,this,t)}const nt=tt.prototype;nt.append=function(e,t){this._pairs.push([e,t])},nt.toString=function(e){const t=e?function(t){return e.call(this,t,et)}:et;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var rt=tt;function it(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function st(e,t,n){if(!t)return e;const r=n&&n.encode||it,i=n&&n.serialize;let s;if(s=i?i(t,n):x.isURLSearchParams(t)?t.toString():new rt(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var ot=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},at={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ct={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:rt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ut(e,t){return Xe(e,new ct.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ct.isNode&&x.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var lt=function(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&x.isArray(r)?r.length:s,a)return x.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&x.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&x.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(x.isFormData(e)&&x.isFunction(e.entries)){const n={};return x.forEachEntry(e,((e,r)=>{t(function(e){return x.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ht={"Content-Type":void 0};const dt={transitional:at,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=x.isObject(e);i&&x.isHTMLForm(e)&&(e=new FormData(e));if(x.isFormData(e))return r&&r?JSON.stringify(lt(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ut(e,this.formSerializer).toString();if((s=x.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Xe(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(x.isString(e))try{return(t||JSON.parse)(e),x.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||dt.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&x.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw V.from(e,V.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};x.forEach(["delete","get","head"],(function(e){dt.headers[e]={}})),x.forEach(["post","put","patch"],(function(e){dt.headers[e]=x.merge(ht)}));var ft=dt;const pt=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var mt=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&pt[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const gt=Symbol("internals");function yt(e){return e&&String(e).trim().toLowerCase()}function _t(e){return!1===e||null==e?e:x.isArray(e)?e.map(_t):String(e)}function vt(e,t,n,r,i){return x.isFunction(r)?r.call(this,t,n):(i&&(t=n),x.isString(t)?x.isString(r)?-1!==t.indexOf(r):x.isRegExp(r)?r.test(t):void 0:void 0)}let wt=Symbol.iterator,bt=Symbol.toStringTag;class Et{set(e,t,n){const r=this;function i(e,t,n){const i=yt(t);if(!i)throw new Error("header name must be a non-empty string");const s=x.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=_t(e))}const s=(e,t)=>x.forEach(e,((e,n)=>i(e,n,t)));return x.isPlainObject(e)||e instanceof this.constructor?s(e,t):x.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?s(mt(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=yt(e)){const n=x.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(x.isFunction(t))return t.call(this,e,n);if(x.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=yt(e)){const n=x.findKey(this,e);return!(!n||void 0===this[n]||t&&!vt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=yt(e)){const i=x.findKey(n,e);!i||t&&!vt(0,n[i],i,t)||(delete n[i],r=!0)}}return x.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!vt(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return x.forEach(this,((r,i)=>{const s=x.findKey(n,i);if(s)return t[s]=_t(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=_t(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return x.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&x.isArray(n)?n.join(", "):n)})),t}[wt](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[bt](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[gt]=this[gt]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=yt(e);t[r]||(!function(e,t){const n=x.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return x.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}Et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),x.freezeMethods(Et.prototype),x.freezeMethods(Et);var St=Et;function Tt(e,t){const n=this||ft,r=t||n,i=St.from(r.headers);let s=r.data;return x.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function kt(e){return!(!e||!e.__CANCEL__)}function It(e,t,n){V.call(this,null==e?"canceled":e,V.ERR_CANCELED,t,n),this.name="CanceledError"}x.inherits(It,V,{__CANCEL__:!0});var Ot=It;function Rt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new V("Request failed with status code "+n.status,[V.ERR_BAD_REQUEST,V.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Dt=ct.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),x.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),x.isString(r)&&o.push("path="+r),x.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function At(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Nt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?At(e,t):t}var Ct=ct.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=x.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Mt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Pt=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;for(;l!==s;)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}};function Lt(e,t){let n=0;const r=Pt(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const Ut={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=St.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}x.isFormData(r)&&(ct.isStandardBrowserEnv||ct.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const u=Nt(e.baseURL,e.url);function l(){if(!c)return;const r=St.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());Rt((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),st(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new V("Request aborted",V.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new V("Network Error",V.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||at;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new V(t,r.clarifyTimeoutError?V.ETIMEDOUT:V.ECONNABORTED,e,c)),c=null},ct.isStandardBrowserEnv){const t=(e.withCredentials||Ct(u))&&e.xsrfCookieName&&Dt.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&x.forEach(i.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),x.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Lt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Lt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new Ot(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=Mt(u);h&&-1===ct.protocols.indexOf(h)?n(new V("Unsupported protocol "+h+":",V.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};x.forEach(Ut,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var xt={getAdapter:e=>{e=x.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=x.isString(n)?Ut[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new V(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(x.hasOwnProp(Ut,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!x.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ut};function Bt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ot(null,e)}function Ft(e){Bt(e),e.headers=St.from(e.headers),e.data=Tt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return xt.getAdapter(e.adapter||ft.adapter)(e).then((function(t){return Bt(e),t.data=Tt.call(e,e.transformResponse,t),t.headers=St.from(t.headers),t}),(function(t){return kt(t)||(Bt(e),t&&t.response&&(t.response.data=Tt.call(e,e.transformResponse,t.response),t.response.headers=St.from(t.response.headers))),Promise.reject(t)}))}const jt=e=>e instanceof St?e.toJSON():e;function Yt(e,t){t=t||{};const n={};function r(e,t,n){return x.isPlainObject(e)&&x.isPlainObject(t)?x.merge.call({caseless:n},e,t):x.isPlainObject(t)?x.merge({},t):x.isArray(t)?t.slice():t}function i(e,t,n){return x.isUndefined(t)?x.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!x.isUndefined(t))return r(void 0,t)}function o(e,t){return x.isUndefined(t)?x.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(jt(e),jt(t),!0)};return x.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const s=c[r]||i,o=s(e[r],t[r],r);x.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Ht={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ht[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Wt={};Ht.transitional=function(e,t,n){function r(e,t){return"[Axios v1.3.4] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new V(r(i," has been removed"+(t?" in "+t:"")),V.ERR_DEPRECATED);return t&&!Wt[i]&&(Wt[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Vt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new V("options must be an object",V.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new V("option "+s+" must be "+n,V.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new V("Unknown option "+s,V.ERR_BAD_OPTION)}},validators:Ht};const $t=Vt.validators;class zt{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Yt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&Vt.assertOptions(n,{silentJSONParsing:$t.transitional($t.boolean),forcedJSONParsing:$t.transitional($t.boolean),clarifyTimeoutError:$t.transitional($t.boolean)},!1),void 0!==r&&Vt.assertOptions(r,{encode:$t.function,serialize:$t.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&x.merge(i.common,i[t.method]),s&&x.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=St.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[Ft.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);h<l;)u=u.then(e[h++],e[h++]);return u}l=o.length;let d=t;for(h=0;h<l;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Ft.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,l=c.length;h<l;)u=u.then(c[h++],c[h++]);return u}getUri(e){return st(Nt((e=Yt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new ot,response:new ot}}}x.forEach(["delete","get","head","options"],(function(e){zt.prototype[e]=function(t,n){return this.request(Yt(n||{},{method:e,url:t,data:(n||{}).data}))}})),x.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Yt(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}zt.prototype[e]=t(),zt.prototype[e+"Form"]=t(!0)}));var Gt=zt;class qt{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new qt((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Ot(e,r,i),t(n.reason))}))}}var Kt=qt;const Jt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jt).forEach((([e,t])=>{Jt[t]=e}));var Zt=Jt;const Qt=function e(t){const n=new Gt(t),r=o(Gt.prototype.request,n);return x.extend(r,Gt.prototype,n,{allOwnKeys:!0}),x.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Yt(t,n))},r}(ft);Qt.Axios=Gt,Qt.CanceledError=Ot,Qt.CancelToken=Kt,Qt.isCancel=kt,Qt.VERSION="1.3.4",Qt.toFormData=Xe,Qt.AxiosError=V,Qt.Cancel=Qt.CanceledError,Qt.all=function(e){return Promise.all(e)},Qt.spread=function(e){return function(t){return e.apply(null,t)}},Qt.isAxiosError=function(e){return x.isObject(e)&&!0===e.isAxiosError},Qt.mergeConfig=Yt,Qt.AxiosHeaders=St,Qt.formToJSON=e=>lt(x.isHTMLForm(e)?new FormData(e):e),Qt.HttpStatusCode=Zt,Qt.default=Qt;var Xt=Qt;const{Axios:en,AxiosError:tn,CanceledError:nn,isCancel:rn,CancelToken:sn,VERSION:on,all:an,Cancel:cn,isAxiosError:un,spread:ln,toFormData:hn,AxiosHeaders:dn,HttpStatusCode:fn,formToJSON:pn,mergeConfig:mn}=Xt,gn=Xt.create();const yn=new class{async getMostPopularNews(){try{return await gn.get(this.mostPopUrl).then((e=>(e.statusText="OK",console.log(e.data.results),e.data.results)))}catch(e){console.log(e.message)}}async getNewsBySearchQuery(e){this.setSearchQuery(e),this.setSearchUrl();try{return await gn.get(this.searchUrl).then((e=>(e.statusText="OK",console.log(this.searchUrl),this.totalHits=e.data.response.meta.hits,this.totalHits=e.data.response.meta.hits,e.data.response.docs)))}catch(e){console.log(e.message)}}async getCategories(){try{return await gn.get(this.sectionListUrl).then((e=>(e.statusText="OK",console.log(e.data.results),e.data.results)))}catch(e){console.log(e.message)}}async getNewsByCategory(e){this.setPage(e),this.setCategorySearchUrl();try{return await gn.get(this.categorySearchUrl).then((e=>(e.statusText="OK",console.log(this.categorySearchUrl),console.log(e.data.results),this.totalHits=e.data.num_results,e.data.results)))}catch(e){console.log(e.message)}}getTotalHits(){return console.log(this.totalHits),this.totalHits}setPage(e){this.page=e}resetPage(){this.page=1}getPage(){return this.page}setSearchQuery(e){this.searchQuery=e}setSearchUrl(){this.searchUrl=`${this.BASE_URL}${this.SEARCH_URL}?q=${this.searchQuery}&page=${this.page}&api-key=${this.API_KEY}`}setCategorySearchUrl(){this.categorySearchUrl=`${this.BASE_URL}${this.CATEGORY_URL}${this.category}.json?limit=${this.limit}&offset=${this.page}&api-key=${this.API_KEY}`}constructor(){this.BASE_URL="https://api.nytimes.com/svc/",this.API_KEY="73zrfLwsQvyOL4F8B4EmM5lidJ3O3t7Z",this.POP_URL="mostpopular/v2/viewed/1.json",this.SEARCH_URL="search/v2/articlesearch.json",this.CATEGORY_URL="news/v3/content/all/",this.totalHits=0,this.mostPopUrl=`${this.BASE_URL}${this.POP_URL}?api-key=${this.API_KEY}`,this.page=1,this.searchQuery="election",this.searchUrl=`${this.BASE_URL}${this.SEARCH_URL}?q=${this.searchQuery}&page=${this.page}&api-key=${this.API_KEY}`,this.sectionListUrl=`${this.BASE_URL}news/v3/content/section-list.json?api-key=${this.API_KEY}`,this.category="world",this.limit=20,this.categorySearchUrl=`${this.BASE_URL}${this.CATEGORY_URL}${this.category}.json?limit=${this.limit}&offset=${this.page}&api-key=${this.API_KEY}`}};let _n=new class{createPagination(e,t){let n,r;this.totalPages=e,e<=10?(n=1,r=e):t<=3?(n=1,r=4):t+2>=e?(n=e-3,r=e):(n=t-1,r=t+1);const i=[];for(let e=n;e<=r;e++)i.push(e);let s=[];n>1&&(s.push('<button class="page__btn arrow-left"></button>'),s.push('<button class="page__btn">1</button>'),s.push('<button class="page__btn pre-dots">...</button>'));for(let e of i)e===t?s.push(`<button class="current--page">${e}</button>`):s.push(e);return r<e&&(s.push('<button class="page__btn post-dots">...</button>'),s.push(`<button class="page__btn">${e}</button>`),s.push('<button class="page__btn arrow-right"></button>')),s}renderPagination(e){for(let t of e){const e=document.createElement("li");e.classList.add("page-item"),e.innerHTML="number"==typeof t?`<button class="page__btn page__num">${t}</button>`:t,this.paginationContainer.appendChild(e)}}genCurrentPage(){return this.currentPage}constructor(){this.paginationContainer=document.getElementById("pagination-container"),this.currentPage=1,this.totalPages}};async function vn(e){if(e.classList.contains("arrow-left")){_n.currentPage=+_n.currentPage-1,_n.paginationContainer.innerHTML="";const e=_n.createPagination(_n.totalPages,_n.currentPage);_n.renderPagination(e)}else if(e.classList.contains("arrow-right")){_n.currentPage=+_n.currentPage+1,_n.paginationContainer.innerHTML="";const e=_n.createPagination(_n.totalPages,_n.currentPage);_n.renderPagination(e)}else if(e.classList.contains("post-dots")){_n.currentPage=Math.ceil((+_n.currentPage+ +_n.totalPages)/2),_n.paginationContainer.innerHTML="";const e=_n.createPagination(_n.totalPages,_n.currentPage);_n.renderPagination(e)}else if(e.classList.contains("pre-dots")){_n.currentPage=Math.ceil(+_n.currentPage/2),_n.paginationContainer.innerHTML="";const e=_n.createPagination(_n.totalPages,_n.currentPage);_n.renderPagination(e)}else{e=e.textContent,_n.currentPage=+e,_n.paginationContainer.innerHTML="";const t=_n.createPagination(_n.totalPages,_n.currentPage);_n.renderPagination(t)}}const wn=document.querySelector(".gallery");function bn(e){const t=e.map((({abstract:e,pub_date:t,multimedia:n,headline:r,keywords:i})=>`<div class="card">\n\n            <div class="card-photo">\n            <div class="photo"><a href="" alt=""></a>\n      \t\t<img src="https://www.nytimes.com/${n[0].url}" alt="${i.value}" width = "300" height = "220" loading="lazy" />\n\t\t\n            <div class="card-category"></div>\n            <button type="button" class="add-to-favorite">Add to favorite</button>\n\t        </div>\n\n            <h2 class="card-title">${r.main}</h2>\n            <p class="card-info">${e}</p>\n\t        <span class="card-date">${t}</span>\n            <button type="button" class="read-more">Read more</button>\n \n            </div>`)).join("");wn.innerHTML=t}var En,Sn,Tn,kn=En={};function In(){throw new Error("setTimeout has not been defined")}function On(){throw new Error("clearTimeout has not been defined")}function Rn(e){if(Sn===setTimeout)return setTimeout(e,0);if((Sn===In||!Sn)&&setTimeout)return Sn=setTimeout,setTimeout(e,0);try{return Sn(e,0)}catch(t){try{return Sn.call(null,e,0)}catch(t){return Sn.call(this,e,0)}}}!function(){try{Sn="function"==typeof setTimeout?setTimeout:In}catch(e){Sn=In}try{Tn="function"==typeof clearTimeout?clearTimeout:On}catch(e){Tn=On}}();var Dn,An=[],Nn=!1,Cn=-1;function Mn(){Nn&&Dn&&(Nn=!1,Dn.length?An=Dn.concat(An):Cn=-1,An.length&&Pn())}function Pn(){if(!Nn){var e=Rn(Mn);Nn=!0;for(var t=An.length;t;){for(Dn=An,An=[];++Cn<t;)Dn&&Dn[Cn].run();Cn=-1,t=An.length}Dn=null,Nn=!1,function(e){if(Tn===clearTimeout)return clearTimeout(e);if((Tn===On||!Tn)&&clearTimeout)return Tn=clearTimeout,clearTimeout(e);try{Tn(e)}catch(t){try{return Tn.call(null,e)}catch(t){return Tn.call(this,e)}}}(e)}}function Ln(e,t){this.fun=e,this.array=t}function Un(){}kn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];An.push(new Ln(e,t)),1!==An.length||Nn||Rn(Pn)},Ln.prototype.run=function(){this.fun.apply(null,this.array)},kn.title="browser",kn.browser=!0,kn.env={},kn.argv=[],kn.version="",kn.versions={},kn.on=Un,kn.addListener=Un,kn.once=Un,kn.off=Un,kn.removeListener=Un,kn.removeAllListeners=Un,kn.emit=Un,kn.prependListener=Un,kn.prependOnceListener=Un,kn.listeners=function(e){return[]},kn.binding=function(e){throw new Error("process.binding is not supported")},kn.cwd=function(){return"/"},kn.chdir=function(e){throw new Error("process.chdir is not supported")},kn.umask=function(){return 0};
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
const xn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Bn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new Fn;const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Fn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jn=function(e){return function(e){const t=xn(e);return Bn.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Yn=function(e){try{return Bn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const Hn=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Wn=()=>{try{return Hn()||(()=>{if(void 0===En||void 0===En.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Yn(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Vn=e=>{var t,n;return null===(n=null===(t=Wn())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},$n=e=>{var t;return null===(t=Wn())||void 0===t?void 0:t[`_${e}`]};
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
function Gn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function qn(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Kn(){const e=Gn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Jn(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Zn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Xn,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Zn(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Xn=/\{\$([^}]+)}/g;
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
 */function er(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function tr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(nr(n)&&nr(s)){if(!tr(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function nr(e){return null!==e&&"object"==typeof e}
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
function rr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ir(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function sr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function or(e,t){const n=new ar(e,t);return n.subscribe.bind(n)}class ar{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=cr),void 0===r.error&&(r.error=cr),void 0===r.complete&&(r.complete=cr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function cr(){}
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
function ur(e){return e&&e._delegate?e._delegate:e}class lr{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class hr{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new zn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class dr{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const fr=[];var pr,mr;(mr=pr||(pr={}))[mr.DEBUG=0]="DEBUG",mr[mr.VERBOSE=1]="VERBOSE",mr[mr.INFO=2]="INFO",mr[mr.WARN=3]="WARN",mr[mr.ERROR=4]="ERROR",mr[mr.SILENT=5]="SILENT";const gr={debug:pr.DEBUG,verbose:pr.VERBOSE,info:pr.INFO,warn:pr.WARN,error:pr.ERROR,silent:pr.SILENT},yr=pr.INFO,_r={[pr.DEBUG]:"log",[pr.VERBOSE]:"log",[pr.INFO]:"info",[pr.WARN]:"warn",[pr.ERROR]:"error"},vr=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=_r[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class wr{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?gr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pr.DEBUG,...e),this._logHandler(this,pr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pr.VERBOSE,...e),this._logHandler(this,pr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pr.INFO,...e),this._logHandler(this,pr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pr.WARN,...e),this._logHandler(this,pr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pr.ERROR,...e),this._logHandler(this,pr.ERROR,...e)}constructor(e){this.name=e,this._logLevel=yr,this._logHandler=vr,this._userLogHandler=null,fr.push(this)}}let br,Er;const Sr=new WeakMap,Tr=new WeakMap,kr=new WeakMap,Ir=new WeakMap,Or=new WeakMap;let Rr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Tr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||kr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Dr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Er||(Er=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Cr(this),t),Nr(Sr.get(this))}:function(...t){return Nr(e.apply(Cr(this),t))}:function(t,...n){const r=e.call(Cr(this),t,...n);return kr.set(r,t.sort?t.sort():[t]),Nr(r)}}function Ar(e){return"function"==typeof e?Dr(e):(e instanceof IDBTransaction&&function(e){if(Tr.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Tr.set(e,t)}(e),t=e,(br||(br=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Rr):e);var t}function Nr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Nr(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Sr.set(t,e)})).catch((()=>{})),Or.set(t,e),t}(e);if(Ir.has(e))return Ir.get(e);const t=Ar(e);return t!==e&&(Ir.set(e,t),Or.set(t,e)),t}const Cr=e=>Or.get(e);function Mr(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Nr(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Nr(o.result),e.oldVersion,e.newVersion,Nr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Pr=["get","getKey","getAll","getAllKeys","count"],Lr=["put","add","delete","clear"],Ur=new Map;function xr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ur.get(t))return Ur.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Lr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Pr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Ur.set(t,s),s}Rr=(e=>({...e,get:(t,n,r)=>xr(t,n)||e.get(t,n,r),has:(t,n)=>!!xr(t,n)||e.has(t,n)}))(Rr);
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
class Br{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Fr=new wr("@firebase/app"),jr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Yr=new Map,Hr=new Map;function Wr(e,t){try{e.container.addComponent(t)}catch(n){Fr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Vr(e){const t=e.name;if(Hr.has(t))return Fr.debug(`There were multiple attempts to register component ${t}.`),!1;Hr.set(t,e);for(const t of Yr.values())Wr(t,e);return!0}function $r(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const zr=new Qn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Gr{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new lr("app",(()=>this),"PUBLIC"))}}
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
 */function qr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw zr.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=Wn())||void 0===s?void 0:s.config),!n)throw zr.create("no-options");const o=Yr.get(i);if(o){if(tr(n,o.options)&&tr(r,o.config))return o;throw zr.create("duplicate-app",{appName:i})}const a=new dr(i);for(const e of Hr.values())a.addComponent(e);const c=new Gr(n,r,a);return Yr.set(i,c),c}function Kr(e="[DEFAULT]"){const t=Yr.get(e);if(!t&&"[DEFAULT]"===e)return qr();if(!t)throw zr.create("no-app",{appName:e});return t}function Jr(e,t,n){var r;let i=null!==(r=jr[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Fr.warn(e.join(" "))}Vr(new lr(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Zr=null;function Qr(){return Zr||(Zr=Mr("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw zr.create("idb-open",{originalErrorMessage:e.message})}))),Zr}async function Xr(e,t){try{const n=(await Qr()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,ei(e)),n.done}catch(e){if(e instanceof Zn)Fr.warn(e.message);else{const t=zr.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Fr.warn(t.message)}}}function ei(e){return`${e.name}!${e.options.appId}`}
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
 */class ti{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ni();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ni(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ii(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ii(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=jn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ri(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function ni(){return(new Date).toISOString().substring(0,10)}class ri{async runIndexedDBEnvironmentCheck(){return!!Jn()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Qr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ei(e))}catch(e){if(e instanceof Zn)Fr.warn(e.message);else{const t=zr.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Fr.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ii(e){return jn(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var si;si="",Vr(new lr("platform-logger",(e=>new Br(e)),"PRIVATE")),Vr(new lr("heartbeat",(e=>new ti(e)),"PRIVATE")),Jr("@firebase/app","0.9.5",si),Jr("@firebase/app","0.9.5","esm2017"),Jr("fire-js","");
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
Jr("firebase","9.18.0","app");function oi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ai(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ci=ai,ui=new Qn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),li=new wr("@firebase/auth");function hi(e,...t){li.logLevel<=pr.ERROR&&li.error(`Auth (9.18.0): ${e}`,...t)}
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
 */function di(e,...t){throw mi(e,...t)}function fi(e,...t){return mi(e,...t)}function pi(e,t,n){const r=Object.assign(Object.assign({},ci()),{[t]:n});return new Qn("auth","Firebase",r).create(t,{appName:e.name})}function mi(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ui.create(e,...t)}function gi(e,t,...n){if(!e)throw mi(t,...n)}function yi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw hi(t),new Error(t)}function _i(e,t){e||yi(t)}
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
 */const vi=new Map;function wi(e){_i(e instanceof Function,"Expected a class definition");let t=vi.get(e);return t?(_i(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vi.set(e,t),t)}
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
function bi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ei(){return"http:"===Si()||"https:"===Si()}function Si(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Ti(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ei()||qn()||"connection"in navigator))||navigator.onLine}
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
class ki{get(){return Ti()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,_i(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gn())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function Ii(e,t){_i(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Oi{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ri={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Di=new ki(3e4,6e4);
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
 */function Ai(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ni(e,t,n,r,i={}){return Ci(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=rr(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Oi.fetch()(Pi(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ci(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ri),t);try{const t=new Li(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Ui(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ui(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Ui(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Ui(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw pi(e,a,o);di(e,a)}}catch(t){if(t instanceof Zn)throw t;di(e,"internal-error",{message:String(t)})}}async function Mi(e,t,n,r,i={}){const s=await Ni(e,t,n,r,i);return"mfaPendingCredential"in s&&di(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Pi(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ii(e.config,i):`${e.config.apiScheme}://${i}`}class Li{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(fi(this.auth,"network-request-failed"))),Di.get())}))}}function Ui(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fi(e,t,r);return i.customData._tokenResponse=n,i}
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
function xi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Bi(e){return 1e3*Number(e)}function Fi(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return hi("JWT malformed, contained fewer than 3 sections"),null;try{const e=Yn(n);return e?JSON.parse(e):(hi("Failed to decode base64 JWT payload"),null)}catch(e){return hi("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function ji(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Zn&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Yi{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Hi{_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function Wi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ji(e,async function(e,t){return Ni(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));gi(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=oi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hi(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Vi{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){gi(e.idToken,"internal-error"),gi(void 0!==e.idToken,"internal-error"),gi(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Fi(e);return gi(t,"internal-error"),gi(void 0!==t.exp,"internal-error"),gi(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return gi(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Ci(e,{},(async()=>{const n=rr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Pi(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Oi.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Vi;return n&&(gi("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(gi("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(gi("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return yi("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function $i(e,t){gi("string"==typeof e||void 0===e,"internal-error",{appName:t})}class zi{async getIdToken(e){const t=await ji(this,this.stsTokenManager.getToken(this.auth,e));return gi(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ur(e),r=await n.getIdToken(t),i=Fi(r);gi(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xi(Bi(i.auth_time)),issuedAtTime:xi(Bi(i.iat)),expirationTime:xi(Bi(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ur(e);await Wi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(gi(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){gi(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Wi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ji(this,async function(e,t){return Ni(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:E}=t;gi(_&&E,e,"internal-error");const S=Vi.fromJSON(this.name,E);gi("string"==typeof _,e,"internal-error"),$i(l,e.name),$i(h,e.name),gi("boolean"==typeof v,e,"internal-error"),gi("boolean"==typeof w,e,"internal-error"),$i(d,e.name),$i(f,e.name),$i(p,e.name),$i(m,e.name),$i(g,e.name),$i(y,e.name);const T=new zi({uid:_,auth:e,email:h,emailVerified:v,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new Vi;r.updateFromServerResponse(t);const i=new zi({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Wi(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=oi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hi(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class Gi{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Gi.type="NONE";const qi=Gi;
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
 */function Ki(e,t,n){return`firebase:${e}:${t}:${n}`}class Ji{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ji(wi(qi),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||wi(qi);const s=Ki(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=zi._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Ji(i,e,n)):new Ji(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Ki(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ki("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Zi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ts(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rs(t))return"Blackberry";if(is(t))return"Webos";if(Xi(t))return"Safari";if((t.includes("chrome/")||es(t))&&!t.includes("edge/"))return"Chrome";if(ns(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Qi(e=Gn()){return/firefox\//i.test(e)}function Xi(e=Gn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function es(e=Gn()){return/crios\//i.test(e)}function ts(e=Gn()){return/iemobile/i.test(e)}function ns(e=Gn()){return/android/i.test(e)}function rs(e=Gn()){return/blackberry/i.test(e)}function is(e=Gn()){return/webos/i.test(e)}function ss(e=Gn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function os(){return Kn()&&10===document.documentMode}function as(e=Gn()){return ss(e)||ns(e)||is(e)||rs(e)||/windows phone/i.test(e)||ts(e)}
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
function cs(e,t=[]){let n;switch(e){case"Browser":n=Zi(Gn());break;case"Worker":n=`${Zi(Gn())}-${e}`;break;default:n=e}return`${n}/JsCore/9.18.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class us{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class ls{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wi(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return gi(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wi(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ur(e):null;return t&&gi(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&gi(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(wi(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wi(e)||this._popupRedirectResolver;gi(t,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[wi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return gi(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return gi(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ds(this),this.idTokenSubscription=new ds(this),this.beforeStateQueue=new us(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ui,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function hs(e){return ur(e)}class ds{get next(){return gi(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=or((e=>this.observer=e))}}function fs(e,t,n){const r=hs(e);gi(r._canInitEmulator,r,"emulator-config-failed"),gi(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=ps(t),{host:o,port:a}=function(e){const t=ps(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ms(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ms(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function ps(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ms(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class gs{toJSON(){return yi("not implemented")}_getIdTokenResponse(e){return yi("not implemented")}_linkToIdToken(e,t){return yi("not implemented")}_getReauthenticationResolver(e){return yi("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function ys(e,t){return Ni(e,"POST","/v1/accounts:update",t)}
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
class _s extends gs{static _fromEmailAndPassword(e,t){return new _s(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new _s(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Mi(e,"POST","/v1/accounts:signInWithPassword",Ai(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Mi(e,"POST","/v1/accounts:signInWithEmailLink",Ai(e,t))}(e,{email:this._email,oobCode:this._password});default:di(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ys(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Mi(e,"POST","/v1/accounts:signInWithEmailLink",Ai(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:di(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function vs(e,t){return Mi(e,"POST","/v1/accounts:signInWithIdp",Ai(e,t))}
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
 */class ws extends gs{static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):di("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=oi(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ws(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return vs(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,vs(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vs(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rr(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
class Es extends gs{static _fromVerification(e,t){return new Es({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Es({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Mi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ai(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Mi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ai(e,t));if(n.temporaryProof)throw Ui(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Mi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ai(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),bs)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Es({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Ss{static parseLink(e){const t=function(e){const t=ir(sr(e)).link,n=t?ir(sr(t)).deep_link_id:null,r=ir(sr(e)).deep_link_id;return(r?ir(sr(r)).link:null)||r||n||t||e}(e);try{return new Ss(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=ir(sr(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);gi(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class Ts{static credential(e,t){return _s._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ss.parseLink(t);return gi(n,"argument-error"),_s._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Ts.PROVIDER_ID}}Ts.PROVIDER_ID="password",Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ks{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Is extends ks{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Os extends Is{static credential(e){return ws._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Os.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Os.FACEBOOK_SIGN_IN_METHOD="facebook.com",Os.PROVIDER_ID="facebook.com";
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
class Rs extends Is{static credential(e,t){return ws._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Rs.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Rs.GOOGLE_SIGN_IN_METHOD="google.com",Rs.PROVIDER_ID="google.com";
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
class Ds extends Is{static credential(e){return ws._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ds.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ds.GITHUB_SIGN_IN_METHOD="github.com",Ds.PROVIDER_ID="github.com";
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
class As extends Is{static credential(e,t){return ws._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return As.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}As.TWITTER_SIGN_IN_METHOD="twitter.com",As.PROVIDER_ID="twitter.com";
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
class Ns{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await zi._fromIdTokenResponse(e,n,r),s=Cs(n);return new Ns({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Cs(n);return new Ns({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Cs(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Ms extends Zn{static _fromErrorAndOperation(e,t,n,r){return new Ms(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ms.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Ps(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ms._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Ls(e,t,n=!1){const r=await ji(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ns._forOperation(e,"link",r)}
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
async function Us(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ji(e,Ps(r,i,t,e),n);gi(s.idToken,r,"internal-error");const o=Fi(s.idToken);gi(o,r,"internal-error");const{sub:a}=o;return gi(e.uid===a,r,"user-mismatch"),Ns._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&di(r,"user-mismatch"),e}}
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
 */async function xs(e,t,n=!1){const r="signIn",i=await Ps(e,r,t),s=await Ns._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Bs(e,t){return xs(hs(e),t)}function Fs(e,t,n){return Bs(ur(e),Ts.credential(t,n))}
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
class js{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Ys extends js{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);os()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Gn();return Xi(e)||ss(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=as(),this._shouldAllowMigration=!0}}Ys.type="LOCAL";const Hs=Ys;
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
 */class Ws extends js{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ws.type="SESSION";const Vs=Ws;
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
class $s{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new $s(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
 */$s.receivers=[];class Gs{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=zs("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
function Ks(){return void 0!==qs().WorkerGlobalScope&&"function"==typeof qs().importScripts}class Js{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Zs(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Qs(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Js(e).toPromise()}(),t(await Qs()))}))}))}async function Xs(e,t,n){const r=Zs(e,!0).put({fbase_key:t,value:n});return new Js(r).toPromise()}function eo(e,t){const n=Zs(e,!0).delete(t);return new Js(n).toPromise()}class to{async _openDb(){return this.db||(this.db=await Qs()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ks()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$s._getInstance(Ks()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qs();return await Xs(e,"__sak","1"),await eo(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xs(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Zs(e,!1).get(t),r=await new Js(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>eo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Zs(e,!1).getAll();return new Js(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}to.type="LOCAL";const no=to;
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
 */function ro(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=fi("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function io(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
io("rcb"),new ki(3e4,6e4);async function so(e,t,n){var r;const i=await n.verify();try{let s;if(gi("string"==typeof i,e,"argument-error"),gi("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){gi("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return Ni(e,"POST","/v2/accounts/mfaEnrollment:start",Ai(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{gi("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;gi(n,e,"missing-multi-factor-info");const o=await function(e,t){return Ni(e,"POST","/v2/accounts/mfaSignIn:start",Ai(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Ni(e,"POST","/v1/accounts:sendVerificationCode",Ai(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class oo{verifyPhoneNumber(e,t){return so(this.auth,e,ur(t))}static credential(e,t){return Es._fromVerification(e,t)}static credentialFromResult(e){const t=e;return oo.credentialFromTaggedObject(t)}static credentialFromError(e){return oo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Es._fromTokenResponse(t,n):null}constructor(e){this.providerId=oo.PROVIDER_ID,this.auth=hs(e)}}
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
function ao(e,t){return t?wi(t):(gi(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */oo.PROVIDER_ID="phone",oo.PHONE_SIGN_IN_METHOD="phone";class co extends gs{_getIdTokenResponse(e){return vs(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vs(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function uo(e){return xs(e.auth,new co(e),e.bypassAuthState)}function lo(e){const{auth:t,user:n}=e;return gi(n,t,"internal-error"),Us(n,new co(e),e.bypassAuthState)}async function ho(e){const{auth:t,user:n}=e;return gi(n,t,"internal-error"),Ls(n,new co(e),e.bypassAuthState)}
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
 */class fo{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uo;case"linkViaPopup":case"linkViaRedirect":return ho;case"reauthViaPopup":case"reauthViaRedirect":return lo;default:di(this.auth,"internal-error")}}resolve(e){_i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const po=new ki(2e3,1e4);class mo extends fo{async executeNotNull(){const e=await this.execute();return gi(e,this.auth,"internal-error"),e}async onExecution(){_i(1===this.filter.length,"Popup operations only handle one event");const e=zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(fi(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,po.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,mo.currentPopupAction&&mo.currentPopupAction.cancel(),mo.currentPopupAction=this}}mo.currentPopupAction=null;
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
const go=new Map;class yo extends fo{async execute(){let e=go.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=wo(t),r=vo(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function _o(e,t){go.set(e._key(),t)}function vo(e){return wi(e._redirectPersistence)}function wo(e){return Ki("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function bo(e,t,n=!1){const r=hs(e),i=ao(r,t),s=new yo(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Eo{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return To(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!To(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(fi(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(So(e))}saveEventToCache(e){this.cachedEventUids.add(So(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function So(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function To({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const ko=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Io=/^https?/;async function Oo(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ni(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ro(e))return}catch(e){}di(e,"unauthorized-domain")}function Ro(e){const t=bi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Io.test(n))return!1;if(ko.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Do=new ki(3e4,6e4);function Ao(){const e=qs().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let No=null;function Co(e){return No=No||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ao(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ao(),n(fi(e,"network-request-failed"))},timeout:Do.get()})}if(null===(i=null===(r=qs().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=qs().gapi)||void 0===s?void 0:s.load)){const t=io("iframefcb");return qs()[t]=()=>{gapi.load?o():n(fi(e,"network-request-failed"))},ro(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw No=null,e}))}(e),No}
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
 */const Mo=new ki(5e3,15e3),Po={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uo(e){const t=e.config;gi(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ii(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.18.0"},i=Lo.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rr(r).slice(1)}`}
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
const xo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Bo{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Fo(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},xo),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Gn().toLowerCase();n&&(a=es(u)?"_blank":n),Qi(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Gn()){var t;return ss(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new Bo(null);const h=window.open(t||"",a,l);gi(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Bo(h)}function jo(e,t,n,r,i,s){gi(e.config.authDomain,e,"auth-domain-config-required"),gi(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.18.0",eventId:i};if(t instanceof ks){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",er(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Is){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ii(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${rr(a).slice(1)}`}const Yo=class{async _openPopup(e,t,n,r){var i;_i(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Fo(e,jo(e,t,n,bi(),r),zs())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=jo(e,t,n,bi(),r),qs().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_i(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Co(e),n=qs().gapi;return gi(n,e,"internal-error"),t.open({where:document.body,url:Uo(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Po,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=fi(e,"network-request-failed"),s=qs().setTimeout((()=>{r(i)}),Mo.get());function o(){qs().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Eo(e);return t.register("authEvent",(t=>{gi(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),di(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Oo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return as()||Xi()||ss()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vs,this._completeRedirectFn=bo,this._overrideRedirectResult=_o}};
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
class Ho{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){gi(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const Wo=$n("authIdTokenMaxAge")||300;let Vo=null;var $o;$o="Browser",Vr(new lr("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{gi(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),gi(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:$o,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cs($o)},o=new ls(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Vr(new lr("auth-internal",(e=>{const t=hs(e.getProvider("auth").getImmediate());return new Ho(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Jr("@firebase/auth","0.21.5",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}($o)),Jr("@firebase/auth","0.21.5","esm2017");const zo=function(e=Kr()){const t=$r(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=$r(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(tr(n.getOptions(),null!=t?t:{}))return e;di(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Yo,persistence:[no,Hs,Vs]}),r=$n("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Wo)return;const r=null==t?void 0:t.token;Vo!==r&&(Vo=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){ur(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){ur(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=Vn("auth");return s&&fs(n,`http://${s}`),n}(qr({apiKey:"AIzaSyBSt5AK9ankO22Qk0ytWWjzBr4utQCOgH8",authDomain:"fir-test-4ec8b.firebaseapp.com",projectId:"fir-test-4ec8b",storageBucket:"fir-test-4ec8b.appspot.com",messagingSenderId:"941413940221",appId:"1:941413940221:web:19b2f749a8bacf86113794"})),Go={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function qo(){Go.modal.classList.toggle("is-hidden")}Go.openModalBtn.addEventListener("click",(function(){"Logout"===Go.openModalBtn.textContent?async function(){await zo.signOut()}():qo()})),Go.closeModalBtn.addEventListener("click",qo);const Ko=document.querySelector(".loginState"),Jo=document.querySelector(".button-authorization"),Zo=document.getElementById("modal-error-message-area");const Qo={themeSwitcherEl:document.querySelector("#theme"),bodyEl:document.body,lightTextEls:document.querySelectorAll(".light-text"),switcherLightEl:document.querySelector(".switcher__text-light"),switcherDarkEl:document.querySelector(".switcher__text-dark"),linksEl:document.querySelectorAll(".nav__link"),logoEl:document.querySelector(".header__logo"),searchInputEl:document.querySelector(".search-form__input"),searchIconEl:document.querySelector(".search-form__icon")};"dark"===localStorage.getItem("selectedTheme")&&(Qo.themeSwitcherEl.checked=!0,Qo.bodyEl.classList.add("dark-mode"),Qo.switcherLightEl.classList.add("switcher-dark"),Qo.switcherDarkEl.classList.add("switcher-light"),Qo.linksEl.forEach((e=>e.classList.add("light-text"))),Qo.logoEl.classList.add("light-text"),Qo.searchInputEl.classList.add("search-form__input--dark"),Qo.searchIconEl.classList.add("search-form__icon--dark"),Qo.searchIconEl.setAttribute("fill","#fff")),Qo.themeSwitcherEl.addEventListener("change",(function(){Qo.bodyEl.classList.toggle("dark-mode"),Qo.switcherLightEl.classList.toggle("switcher-dark"),Qo.switcherDarkEl.classList.toggle("switcher-light"),Qo.linksEl.forEach((e=>e.classList.toggle("light-text"))),Qo.logoEl.classList.toggle("light-text"),Qo.searchInputEl.classList.toggle("search-form__input--dark"),Qo.searchIconEl.classList.toggle("search-form__icon--dark"),Qo.searchIconEl.setAttribute("fill",Qo.bodyEl.classList.contains("dark-mode")?"#fff":""),localStorage.setItem("selectedTheme",Qo.bodyEl.classList.contains("dark-mode")?"dark":"light")}));var Xo,ea=s("cxTnx");Xo=new URL(s("kyEFX").resolve("Vj47w"),import.meta.url).toString();const ta=document.querySelector("#weather");let na;const ra=n(ea)(new Date),ia=ra.format("D MMM YYYY"),sa=ra.format("ddd");navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){let t=e.coords.latitude,r=e.coords.longitude;na=`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${r}&units=metric&appid=92b7ae078a5ceba812c34c84b6f882cb`,async function(){try{const t=await fetch(na);e(await t.json())}catch(e){console.log(e.message)}function e(e){const t=e.name,r=Math.round(e.main.temp),i=e.weather[0].main,s=e.weather[0].icon,o=`<div class="weather-header">\n<p class="weather-temp">${r}&deg;</p>\n<div class="weather-main">\n  <p class="weather-status">${i}</p>\n  <div class="weather-city_box">\n  <img class="location-icon" src ="${n(Xo)}" alt = "location" width = "27" height = "27">\n  <p class="weather-city">${t}</p>\n    </div>\n</div>\n</div>\n\n<img class="weather-icon" src="http://openweathermap.org/img/wn/${s}@2x.png" alt="${i}" >\n\n<ul class="weather-date">\n<li class="weather-day">${sa}</li>\n<li class="weather-month">${ia}</li>\n</ul>`;ta.innerHTML=o}}()})):alert("Your browser not support geolocation api");document.querySelector(".order-form").addEventListener("submit",(async function(e){e.preventDefault();const t=e.target.email.value,n=e.target.password.value;try{await Fs(zo,t,n).then((e=>{e.user&&qo()}))}catch(e){Zo.textContent="Wrong email or password. Please, try again.",console.log(e.message)}})),async function(){var e,t,n;e=e=>{e?(Jo.textContent="Logout",function(e){Ko.innerHTML=`<p>${e.email}</p>`}(e)):(Jo.textContent="Log In",Ko.innerHTML="")},ur(zo).onAuthStateChanged(e,t,n)}();const oa=document.querySelector(".search-form");oa.addEventListener("submit",(function(e){e.preventDefault();const t=oa.query.value;console.log(t),yn.resetPage();let n=[];yn.getNewsBySearchQuery(t).then((e=>{n=e,console.log(n),yn.getTotalHits(),bn(n)}))})),_n.renderPagination(_n.createPagination(50,1)),document.getElementById("pagination-container").addEventListener("click",(e=>{if("BUTTON"===e.target.nodeName){vn(e.target);let t=[];yn.getNewsByCategory(_n.genCurrentPage()).then((e=>{t=e,yn.getTotalHits()}))}}));document.querySelector("ul.news__filtr-menu").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;document.querySelector(".news__filtr-menu-button--active").classList.remove("news__filtr-menu-button--active"),e.target.classList.add("news__filtr-menu-button--active")}));
//# sourceMappingURL=favorite.33ed1bcf.js.map
