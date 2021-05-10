"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var Str=/*#__PURE__*/function(){function Str(){_classCallCheck(this,Str);this.snakeCache={};this.camelCache={};this.studlyCache={}}_createClass(Str,[{key:"ctypeLower",value:function ctypeLower(str){return /^[a-z]+$/.test(str)}/**
     *
     * @param {String} str
     * @returns {String}
     */},{key:"lcfirst",value:function lcfirst(str){return str.charAt(0).toLowerCase()+str.substr(1)}/**
     *
     * @param {String} str1
     * @param {String} str2
     * @param {Number} length
     * @returns {Number}
     */},{key:"strncmp",value:function strncmp(str1,str2,length){str1=str1.substring(0,length);str2=str2.substring(0,length);return str1===str2?0:str1>str2?1:-1}/**
     *
     * @param {String} str
     * @param {String} delimiters
     * @returns {String}
     */},{key:"ucwords",value:function ucwords(str){var delimiters=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"\\s\\t\\r\\n\\f\\v";return str.replace(new RegExp("(^(.)|["+delimiters+"]+(.))","g"),function($1){return $1.toUpperCase()})}/**
     *
     * @param {String} subject
     * @param {String} search
     * @returns {String}
     */},{key:"after",value:function after(subject,search){if(search===""){return subject}var position=subject.indexOf(search);if(position===-1){return subject}return subject.substr(position+search.length)}/**
     *
     * @param {String} subject
     * @param {String} search
     * @returns {String}
     */},{key:"afterLast",value:function afterLast(subject,search){if(search===""){return subject}var position=subject.lastIndexOf(search);if(position===-1){return subject}return subject.substr(position+search.length)}/**
     *
     * @param {String} subject
     * @param {String} search
     * @returns {String}
     */},{key:"before",value:function before(subject,search){return search===""?subject:subject.split(search)[0]}/**
     *
     * @param {String} subject
     * @param {String} search
     * @returns {String}
     */},{key:"beforeLast",value:function beforeLast(subject,search){if(search===""){return subject}var position=subject.lastIndexOf(search);if(position===-1){return subject}return subject.substr(0,position)}/**
     *
     * @param {String} subject
     * @param {String} from
     * @param {String} to
     * @returns {String}
     */},{key:"between",value:function between(subject,from,to){if(from===""||to===""){return subject}return this.beforeLast(this.after(subject,from),to)}/**
     *
     * @param {String} value
     * @returns {String}
     */},{key:"camel",value:function camel(value){if(value in this.camelCache){return this.camelCache[value]}return this.camelCache[value]=this.lcfirst(this.studly(value))}/**
     *
     * @param {String} haystack
     * @param {String[]|String} needles
     * @returns {boolean}
     */},{key:"contains",value:function contains(haystack,needles){if(typeof needles==="string"){needles=[needles]}return needles.some(function(needle){return needle!==""&&haystack.indexOf(needle)!==-1})}/**
     *
     * @param {String} haystack
     * @param {String[]} needles
     * @returns {boolean}
     */},{key:"containsAll",value:function containsAll(haystack,needles){var _this=this;return needles.every(function(needle){return _this.contains(haystack,needle)})}/**
     *
     * @param {String} haystack
     * @param {String[]|String} needles
     * @returns {boolean}
     */},{key:"endsWith",value:function endsWith(haystack,needles){if(typeof needles==="string"){needles=[needles]}return needles.some(function(needle){return needle!==""&&needle!==null&&haystack.substr(-needle.length)===needle})}},{key:"snake",value:function snake(value){var delimiter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"_";var key=value;if(key in this.snakeCache){if(delimiter in this.snakeCache[key]){return this.snakeCache[key][delimiter]}}else{this.snakeCache[key]={}}if(!this.ctypeLower(value)){value=this.ucwords(value).replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/,"");value=value.replace(/((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))(?=[A-Z])/,"$1"+delimiter).toLowerCase()}return this.snakeCache[key][delimiter]=value}/**
     *
     * @param {String} haystack
     * @param {String[]|String} needles
     * @returns {boolean}
     */},{key:"startsWith",value:function startsWith(haystack,needles){var _this2=this;if(typeof needles==="string"){needles=[needles]}return needles.some(function(needle){return needle!==""&&needle!==null&&_this2.strncmp(haystack,needle,needle.length)===0})}/**
     *
     * @param {String} value
     * @returns {String}
     */},{key:"studly",value:function studly(value){var key=value;if(key in this.studlyCache){return this.studlyCache[key]}value=this.ucwords(value.replace(/[-_]/g," "));return this.studlyCache[key]=value.replace(/\s+/g,"")}}]);return Str}();var _default=new Str;exports["default"]=_default;
//# sourceMappingURL=str.js.map