"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _str=_interopRequireDefault(require("./str"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var Manager=/*#__PURE__*/function(){function Manager(app){_classCallCheck(this,Manager);this.app=app;this.customCreators=[];this.drivers=[]}_createClass(Manager,[{key:"getDefaultDriver",value:function getDefaultDriver(){return null}},{key:"driver",value:function driver(){var _driver=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;_driver=_driver?_driver:this.getDefaultDriver();if(!_driver){return null}if(!this.drivers.hasOwnProperty(_driver)){this.drivers[_driver]=this.createDriver(_driver)}return this.drivers[_driver]}},{key:"createDriver",value:function createDriver(driver){if(this.customCreators.hasOwnProperty(driver)){return this.callCustomCreator(driver)}else{var method="create"+_str["default"].studly(driver)+"Driver";if(this.hasOwnProperty(method)){return this[method]()}}return null}},{key:"callCustomCreator",value:function callCustomCreator(driver){return this.customCreators[driver](this.app)}},{key:"extend",value:function extend(driver,callback){this.customCreators[driver]=callback;return this}},{key:"getDrivers",value:function getDrivers(){return this.drivers}},{key:"__call",value:function __call(method,params){var driver=this.driver();return driver.hasOwnProperty(method)?driver[method].apply(driver,_toConsumableArray(params)):null}}]);return Manager}();exports["default"]=Manager;
//# sourceMappingURL=manager.js.map