/*!
 * surveyjs - Survey JavaScript library v1.0.11
 * Copyright (c) 2015-2018 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	else if(typeof define === 'function' && define.amd)
		define("Survey", ["knockout"], factory);
	else if(typeof exports === 'object')
		exports["Survey"] = factory(require("knockout"));
	else
		root["Survey"] = factory(root["ko"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __decorate; });
var __assign = Object["assign"] ||
    function (target) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    target[p] = s[p];
        }
        return target;
    };
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() {
        this.constructor = thisClass;
    }
    thisClass.prototype =
        baseClass === null
            ? Object.create(baseClass)
            : ((__.prototype = baseClass.prototype), new __());
}
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3
        ? target
        : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return JsonObjectProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomPropertiesCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return JsonMetadataClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return JsonMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JsonError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return JsonUnknownPropertyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return JsonMissingTypeErrorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return JsonMissingTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JsonIncorrectTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return JsonRequiredPropertyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JsonObject; });


var JsonObjectProperty = /** @class */ (function () {
    function JsonObjectProperty(name, isRequired) {
        if (isRequired === void 0) { isRequired = false; }
        this.name = name;
        this.typeValue = null;
        this.choicesValue = null;
        this.isRequiredValue = false;
        this.readOnlyValue = null;
        this.visibleValue = null;
        this.isLocalizableValue = null;
        this.choicesfunc = null;
        this.isSerializable = true;
        this.className = null;
        this.alternativeName = null;
        this.classNamePart = null;
        this.baseClassName = null;
        this.defaultValue = null;
        this.serializationProperty = null;
        this.onGetValue = null;
        this.onSetValue = null;
        this.isRequiredValue = isRequired;
    }
    Object.defineProperty(JsonObjectProperty.prototype, "type", {
        get: function () {
            return this.typeValue ? this.typeValue : "string";
        },
        set: function (value) {
            this.typeValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "isRequired", {
        get: function () {
            return this.isRequiredValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseGetValue", {
        get: function () {
            return this.onGetValue || this.serializationProperty;
        },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.isDefaultValue = function (value) {
        if (!__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].isValueEmpty(this.defaultValue))
            return this.defaultValue == value;
        return value === false || value === "" || __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].isValueEmpty(value);
    };
    JsonObjectProperty.prototype.getValue = function (obj) {
        if (this.onGetValue)
            return this.onGetValue(obj);
        if (this.serializationProperty)
            return obj[this.serializationProperty].getJson();
        return obj[this.name];
    };
    JsonObjectProperty.prototype.getPropertyValue = function (obj) {
        if (this.isLocalizable)
            return obj[this.serializationProperty].text;
        return this.getValue(obj);
    };
    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseSetValue", {
        get: function () {
            return this.onSetValue || this.serializationProperty;
        },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.setValue = function (obj, value, jsonConv) {
        if (this.onSetValue) {
            this.onSetValue(obj, value, jsonConv);
        }
        else {
            if (this.serializationProperty)
                obj[this.serializationProperty].setJson(value);
            else {
                if (value && typeof value === "string") {
                    if (this.type == "number") {
                        value = parseInt(value);
                    }
                    if (this.type == "boolean") {
                        value = value.toLowerCase() === "true";
                    }
                }
                obj[this.name] = value;
            }
        }
    };
    JsonObjectProperty.prototype.getObjType = function (objType) {
        if (!this.classNamePart)
            return objType;
        return objType.replace(this.classNamePart, "");
    };
    JsonObjectProperty.prototype.getClassName = function (className) {
        return this.classNamePart && className.indexOf(this.classNamePart) < 0
            ? className + this.classNamePart
            : className;
    };
    Object.defineProperty(JsonObjectProperty.prototype, "choices", {
        get: function () {
            return this.getChoices(null);
        },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.getChoices = function (obj) {
        if (this.choicesValue != null)
            return this.choicesValue;
        if (this.choicesfunc != null)
            return this.choicesfunc(obj);
        return null;
    };
    JsonObjectProperty.prototype.setChoices = function (value, valueFunc) {
        this.choicesValue = value;
        this.choicesfunc = valueFunc;
    };
    Object.defineProperty(JsonObjectProperty.prototype, "readOnly", {
        get: function () {
            return this.readOnlyValue != null ? this.readOnlyValue : false;
        },
        set: function (val) {
            this.readOnlyValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "visible", {
        get: function () {
            return this.visibleValue != null ? this.visibleValue : true;
        },
        set: function (val) {
            this.visibleValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "isLocalizable", {
        get: function () {
            return this.isLocalizableValue != null ? this.isLocalizableValue : false;
        },
        set: function (val) {
            this.isLocalizableValue = val;
        },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.mergeWith = function (prop) {
        var valuesNames = JsonObjectProperty.mergableValues;
        for (var i = 0; i < valuesNames.length; i++) {
            this.mergeValue(prop, valuesNames[i]);
        }
    };
    JsonObjectProperty.prototype.mergeValue = function (prop, valueName) {
        if (this[valueName] == null && prop[valueName] != null) {
            this[valueName] = prop[valueName];
        }
    };
    JsonObjectProperty.mergableValues = [
        "typeValue",
        "choicesValue",
        "readOnlyValue",
        "visibleValue",
        "isSerializable",
        "isLocalizableValue",
        "className",
        "alternativeName",
        "classNamePart",
        "baseClassName",
        "defaultValue",
        "serializationProperty",
        "onGetValue",
        "onSetValue"
    ];
    return JsonObjectProperty;
}());

var CustomPropertiesCollection = /** @class */ (function () {
    function CustomPropertiesCollection() {
    }
    CustomPropertiesCollection.addProperty = function (className, property) {
        var props = CustomPropertiesCollection.properties;
        if (!props[className]) {
            props[className] = [];
        }
        props[className].push(property);
    };
    CustomPropertiesCollection.removeProperty = function (className, propertyName) {
        var props = CustomPropertiesCollection.properties;
        if (!props[className])
            return;
        var properties = props[className];
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propertyName) {
                props[className].splice(i, 1);
                break;
            }
        }
    };
    CustomPropertiesCollection.addClass = function (className, parentClassName) {
        CustomPropertiesCollection.parentClasses[className] = parentClassName;
    };
    CustomPropertiesCollection.getProperties = function (className) {
        var res = [];
        var props = CustomPropertiesCollection.properties;
        while (className) {
            var properties = props[className];
            if (properties) {
                for (var i = 0; i < properties.length; i++) {
                    res.push(properties[i]);
                }
            }
            className = CustomPropertiesCollection.parentClasses[className];
        }
        return res;
    };
    CustomPropertiesCollection.createProperties = function (obj) {
        if (!obj || !obj.getType)
            return;
        CustomPropertiesCollection.createPropertiesCore(obj, obj.getType());
    };
    CustomPropertiesCollection.createPropertiesCore = function (obj, className) {
        var props = CustomPropertiesCollection.properties;
        if (props[className]) {
            CustomPropertiesCollection.createPropertiesInObj(obj, props[className]);
        }
        var parentClass = CustomPropertiesCollection.parentClasses[className];
        if (parentClass) {
            CustomPropertiesCollection.createPropertiesCore(obj, parentClass);
        }
    };
    CustomPropertiesCollection.createPropertiesInObj = function (obj, properties) {
        for (var i = 0; i < properties.length; i++) {
            CustomPropertiesCollection.createPropertyInObj(obj, properties[i]);
        }
    };
    CustomPropertiesCollection.createPropertyInObj = function (obj, prop) {
        if (obj[prop.name] || obj.hasOwnProperty(prop.name))
            return;
        if (prop.isLocalizable &&
            prop.serializationProperty &&
            !obj[prop.serializationProperty] &&
            obj.createCustomLocalizableObj) {
            obj.createCustomLocalizableObj(prop.name);
            var locDesc = {
                get: function () {
                    return obj.getLocalizableString(prop.name);
                }
            };
            Object.defineProperty(obj, prop.serializationProperty, locDesc);
            var desc = {
                get: function () {
                    return obj.getLocalizableStringText(prop.name, prop.defaultValue);
                },
                set: function (v) {
                    obj.setLocalizableStringText(prop.name, v);
                }
            };
            Object.defineProperty(obj, prop.name, desc);
        }
        else {
            var desc = {
                get: function () {
                    return obj.getPropertyValue(prop.name, prop.defaultValue);
                },
                set: function (v) {
                    obj.setPropertyValue(prop.name, v);
                }
            };
            Object.defineProperty(obj, prop.name, desc);
        }
    };
    CustomPropertiesCollection.properties = {};
    CustomPropertiesCollection.parentClasses = {};
    return CustomPropertiesCollection;
}());

var JsonMetadataClass = /** @class */ (function () {
    function JsonMetadataClass(name, properties, creator, parentName) {
        if (creator === void 0) { creator = null; }
        if (parentName === void 0) { parentName = null; }
        this.name = name;
        this.creator = creator;
        this.parentName = parentName;
        this.properties = null;
        this.requiredProperties = null;
        if (parentName) {
            CustomPropertiesCollection.addClass(name, parentName);
        }
        this.properties = new Array();
        for (var i = 0; i < properties.length; i++) {
            var prop = this.createProperty(properties[i]);
            if (prop) {
                this.properties.push(prop);
            }
        }
    }
    JsonMetadataClass.prototype.find = function (name) {
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == name)
                return this.properties[i];
        }
        return null;
    };
    JsonMetadataClass.prototype.createProperty = function (propInfo) {
        var propertyName = typeof propInfo === "string" ? propInfo : propInfo.name;
        if (!propertyName)
            return;
        var propertyType = null;
        var typeIndex = propertyName.indexOf(JsonMetadataClass.typeSymbol);
        if (typeIndex > -1) {
            propertyType = propertyName.substring(typeIndex + 1);
            propertyName = propertyName.substring(0, typeIndex);
        }
        var isRequired = this.getIsPropertyNameRequired(propertyName);
        propertyName = this.getPropertyName(propertyName);
        var prop = new JsonObjectProperty(propertyName, isRequired);
        if (propertyType) {
            prop.type = propertyType;
        }
        if (typeof propInfo === "object") {
            if (propInfo.type) {
                prop.type = propInfo.type;
            }
            if (!__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].isValueEmpty(propInfo.default)) {
                prop.defaultValue = propInfo.default;
            }
            if (!__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].isValueEmpty(propInfo.isSerializable)) {
                prop.isSerializable = propInfo.isSerializable;
            }
            if (propInfo.visible === false) {
                prop.visible = false;
            }
            if (propInfo.isRequired) {
                this.makePropertyRequired(prop.name);
            }
            if (propInfo.choices) {
                var choicesFunc = typeof propInfo.choices === "function" ? propInfo.choices : null;
                var choicesValue = typeof propInfo.choices !== "function" ? propInfo.choices : null;
                prop.setChoices(choicesValue, choicesFunc);
            }
            if (propInfo.onGetValue) {
                prop.onGetValue = propInfo.onGetValue;
            }
            if (propInfo.onSetValue) {
                prop.onSetValue = propInfo.onSetValue;
            }
            if (propInfo.isLocalizable) {
                propInfo.serializationProperty = "loc" + propInfo.name;
            }
            if (propInfo.serializationProperty) {
                prop.serializationProperty = propInfo.serializationProperty;
                var s;
                if (prop.serializationProperty &&
                    prop.serializationProperty.indexOf("loc") == 0) {
                    prop.isLocalizable = true;
                }
            }
            if (propInfo.isLocalizable) {
                prop.isLocalizable = propInfo.isLocalizable;
            }
            if (propInfo.className) {
                prop.className = propInfo.className;
            }
            if (propInfo.baseClassName) {
                prop.baseClassName = propInfo.baseClassName;
            }
            if (propInfo.classNamePart) {
                prop.classNamePart = propInfo.classNamePart;
            }
            if (propInfo.alternativeName) {
                prop.alternativeName = propInfo.alternativeName;
            }
        }
        return prop;
    };
    JsonMetadataClass.prototype.getIsPropertyNameRequired = function (propertyName) {
        return (propertyName.length > 0 &&
            propertyName[0] == JsonMetadataClass.requiredSymbol);
    };
    JsonMetadataClass.prototype.getPropertyName = function (propertyName) {
        if (!this.getIsPropertyNameRequired(propertyName))
            return propertyName;
        propertyName = propertyName.slice(1);
        this.makePropertyRequired(propertyName);
        return propertyName;
    };
    JsonMetadataClass.prototype.makePropertyRequired = function (propertyName) {
        if (!this.requiredProperties) {
            this.requiredProperties = new Array();
        }
        this.requiredProperties.push(propertyName);
    };
    JsonMetadataClass.requiredSymbol = "!";
    JsonMetadataClass.typeSymbol = ":";
    return JsonMetadataClass;
}());

var JsonMetadata = /** @class */ (function () {
    function JsonMetadata() {
        this.classes = {};
        this.childrenClasses = {};
        this.classProperties = {};
        this.classRequiredProperties = {};
    }
    JsonMetadata.prototype.addClass = function (name, properties, creator, parentName) {
        if (creator === void 0) { creator = null; }
        if (parentName === void 0) { parentName = null; }
        var metaDataClass = new JsonMetadataClass(name, properties, creator, parentName);
        this.classes[name] = metaDataClass;
        if (parentName) {
            var children = this.childrenClasses[parentName];
            if (!children) {
                this.childrenClasses[parentName] = [];
            }
            this.childrenClasses[parentName].push(metaDataClass);
        }
        return metaDataClass;
    };
    JsonMetadata.prototype.overrideClassCreatore = function (name, creator) {
        var metaDataClass = this.findClass(name);
        if (metaDataClass) {
            metaDataClass.creator = creator;
        }
    };
    JsonMetadata.prototype.getProperties = function (className) {
        var properties = this.classProperties[className];
        if (!properties) {
            properties = new Array();
            this.fillProperties(className, properties);
            this.classProperties[className] = properties;
        }
        return properties;
    };
    JsonMetadata.prototype.getDynamicProperties = function (obj) {
        if (obj.getDynamicProperties && obj.getDynamicType) {
            var names = obj.getDynamicProperties();
            return JsonObject.metaData.findProperties(obj.getDynamicType(), names);
        }
        return [];
    };
    JsonMetadata.prototype.getPropertiesByObj = function (obj) {
        if (!obj || !obj.getType)
            return [];
        var res = [];
        var props = this.getProperties(obj.getType());
        for (var i = 0; i < props.length; i++) {
            res.push(props[i]);
        }
        var dynamicProps = this.getDynamicProperties(obj);
        if (dynamicProps && dynamicProps.length > 0) {
            for (var i = 0; i < dynamicProps.length; i++) {
                res.push(dynamicProps[i]);
            }
        }
        return res;
    };
    JsonMetadata.prototype.findProperty = function (className, propertyName) {
        return this.findPropertyCore(this.getProperties(className), propertyName);
    };
    JsonMetadata.prototype.findProperties = function (className, propertyNames) {
        var result = [];
        var properties = this.getProperties(className);
        for (var i = 0; i < propertyNames.length; i++) {
            var prop = this.findPropertyCore(properties, propertyNames[i]);
            if (prop) {
                result.push(prop);
            }
        }
        return result;
    };
    JsonMetadata.prototype.findPropertyCore = function (properties, propertyName) {
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propertyName)
                return properties[i];
        }
        return null;
    };
    JsonMetadata.prototype.createClass = function (name) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return null;
        if (metaDataClass.creator)
            return metaDataClass.creator();
        var parentName = metaDataClass.parentName;
        while (parentName) {
            metaDataClass = this.findClass(parentName);
            if (!metaDataClass)
                return null;
            parentName = metaDataClass.parentName;
            if (metaDataClass.creator)
                return this.createCustomType(name, metaDataClass.creator);
        }
        return null;
    };
    JsonMetadata.prototype.createCustomType = function (name, creator) {
        var res = creator();
        res.customTypeName = name;
        res.customTemplateName = res.getTemplate
            ? res.getTemplate()
            : res.getType();
        res.getType = function () {
            return res.customTypeName;
        };
        res.getTemplate = function () {
            return res.customTemplateName;
        };
        CustomPropertiesCollection.createProperties(res);
        return res;
    };
    JsonMetadata.prototype.getChildrenClasses = function (name, canBeCreated) {
        if (canBeCreated === void 0) { canBeCreated = false; }
        var result = [];
        this.fillChildrenClasses(name, canBeCreated, result);
        return result;
    };
    JsonMetadata.prototype.getRequiredProperties = function (name) {
        var properties = this.classRequiredProperties[name];
        if (!properties) {
            properties = new Array();
            this.fillRequiredProperties(name, properties);
            this.classRequiredProperties[name] = properties;
        }
        return properties;
    };
    JsonMetadata.prototype.addProperties = function (className, propertiesInfos) {
        var metaDataClass = this.findClass(className);
        for (var i = 0; i < propertiesInfos.length; i++) {
            this.addCustomPropertyCore(metaDataClass, propertiesInfos[i]);
        }
    };
    JsonMetadata.prototype.addProperty = function (className, propertyInfo) {
        this.addCustomPropertyCore(this.findClass(className), propertyInfo);
    };
    JsonMetadata.prototype.addCustomPropertyCore = function (metaDataClass, propertyInfo) {
        if (!metaDataClass)
            return;
        var property = metaDataClass.createProperty(propertyInfo);
        if (property) {
            this.addPropertyToClass(metaDataClass, property);
            this.emptyClassPropertiesHash(metaDataClass);
            CustomPropertiesCollection.addProperty(metaDataClass.name, property);
        }
    };
    JsonMetadata.prototype.removeProperty = function (className, propertyName) {
        var metaDataClass = this.findClass(className);
        if (!metaDataClass)
            return false;
        var property = metaDataClass.find(propertyName);
        if (property) {
            this.removePropertyFromClass(metaDataClass, property);
            this.emptyClassPropertiesHash(metaDataClass);
            CustomPropertiesCollection.removeProperty(className, propertyName);
        }
    };
    JsonMetadata.prototype.addPropertyToClass = function (metaDataClass, property) {
        if (metaDataClass.find(property.name) != null)
            return;
        metaDataClass.properties.push(property);
    };
    JsonMetadata.prototype.removePropertyFromClass = function (metaDataClass, property) {
        var index = metaDataClass.properties.indexOf(property);
        if (index < 0)
            return;
        metaDataClass.properties.splice(index, 1);
        if (metaDataClass.requiredProperties) {
            index = metaDataClass.requiredProperties.indexOf(property.name);
            if (index >= 0) {
                metaDataClass.requiredProperties.splice(index, 1);
            }
        }
    };
    JsonMetadata.prototype.emptyClassPropertiesHash = function (metaDataClass) {
        this.classProperties[metaDataClass.name] = null;
        var childClasses = this.getChildrenClasses(metaDataClass.name);
        for (var i = 0; i < childClasses.length; i++) {
            this.classProperties[childClasses[i].name] = null;
        }
    };
    JsonMetadata.prototype.fillChildrenClasses = function (name, canBeCreated, result) {
        var children = this.childrenClasses[name];
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            if (!canBeCreated || children[i].creator) {
                result.push(children[i]);
            }
            this.fillChildrenClasses(children[i].name, canBeCreated, result);
        }
    };
    JsonMetadata.prototype.findClass = function (name) {
        return this.classes[name];
    };
    JsonMetadata.prototype.fillProperties = function (name, list) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return;
        if (metaDataClass.parentName) {
            this.fillProperties(metaDataClass.parentName, list);
        }
        for (var i = 0; i < metaDataClass.properties.length; i++) {
            this.addPropertyCore(metaDataClass.properties[i], list, list.length);
        }
    };
    JsonMetadata.prototype.addPropertyCore = function (property, list, endIndex) {
        var index = -1;
        for (var i = 0; i < endIndex; i++) {
            if (list[i].name == property.name) {
                index = i;
                break;
            }
        }
        if (index < 0) {
            list.push(property);
        }
        else {
            property.mergeWith(list[index]);
            list[index] = property;
        }
    };
    JsonMetadata.prototype.fillRequiredProperties = function (name, list) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return;
        if (metaDataClass.requiredProperties) {
            Array.prototype.push.apply(list, metaDataClass.requiredProperties);
        }
        if (metaDataClass.parentName) {
            this.fillRequiredProperties(metaDataClass.parentName, list);
        }
    };
    return JsonMetadata;
}());

var JsonError = /** @class */ (function () {
    function JsonError(type, message) {
        this.type = type;
        this.message = message;
        this.description = "";
        this.at = -1;
    }
    JsonError.prototype.getFullDescription = function () {
        return this.message + (this.description ? "\n" + this.description : "");
    };
    return JsonError;
}());

var JsonUnknownPropertyError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonUnknownPropertyError, _super);
    function JsonUnknownPropertyError(propertyName, className) {
        var _this = _super.call(this, "unknownproperty", "The property '" +
            propertyName +
            "' in class '" +
            className +
            "' is unknown.") || this;
        _this.propertyName = propertyName;
        _this.className = className;
        var properties = JsonObject.metaData.getProperties(className);
        if (properties) {
            _this.description = "The list of available properties are: ";
            for (var i = 0; i < properties.length; i++) {
                if (i > 0)
                    _this.description += ", ";
                _this.description += properties[i].name;
            }
            _this.description += ".";
        }
        return _this;
    }
    return JsonUnknownPropertyError;
}(JsonError));

var JsonMissingTypeErrorBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonMissingTypeErrorBase, _super);
    function JsonMissingTypeErrorBase(baseClassName, type, message) {
        var _this = _super.call(this, type, message) || this;
        _this.baseClassName = baseClassName;
        _this.type = type;
        _this.message = message;
        _this.description = "The following types are available: ";
        var types = JsonObject.metaData.getChildrenClasses(baseClassName, true);
        for (var i = 0; i < types.length; i++) {
            if (i > 0)
                _this.description += ", ";
            _this.description += "'" + types[i].name + "'";
        }
        _this.description += ".";
        return _this;
    }
    return JsonMissingTypeErrorBase;
}(JsonError));

var JsonMissingTypeError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonMissingTypeError, _super);
    function JsonMissingTypeError(propertyName, baseClassName) {
        var _this = _super.call(this, baseClassName, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" +
            propertyName +
            "'.") || this;
        _this.propertyName = propertyName;
        _this.baseClassName = baseClassName;
        return _this;
    }
    return JsonMissingTypeError;
}(JsonMissingTypeErrorBase));

var JsonIncorrectTypeError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonIncorrectTypeError, _super);
    function JsonIncorrectTypeError(propertyName, baseClassName) {
        var _this = _super.call(this, baseClassName, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" +
            propertyName +
            "'.") || this;
        _this.propertyName = propertyName;
        _this.baseClassName = baseClassName;
        return _this;
    }
    return JsonIncorrectTypeError;
}(JsonMissingTypeErrorBase));

var JsonRequiredPropertyError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonRequiredPropertyError, _super);
    function JsonRequiredPropertyError(propertyName, className) {
        var _this = _super.call(this, "requiredproperty", "The property '" +
            propertyName +
            "' is required in class '" +
            className +
            "'.") || this;
        _this.propertyName = propertyName;
        _this.className = className;
        return _this;
    }
    return JsonRequiredPropertyError;
}(JsonError));

var JsonObject = /** @class */ (function () {
    function JsonObject() {
        this.errors = new Array();
    }
    Object.defineProperty(JsonObject, "metaData", {
        get: function () {
            return JsonObject.metaDataValue;
        },
        enumerable: true,
        configurable: true
    });
    JsonObject.prototype.toJsonObject = function (obj) {
        return this.toJsonObjectCore(obj, null);
    };
    JsonObject.prototype.toObject = function (jsonObj, obj) {
        if (!jsonObj)
            return;
        var properties = null;
        if (obj.getType) {
            properties = JsonObject.metaData.getProperties(obj.getType());
        }
        if (!properties)
            return;
        if (obj.startLoadingFromJson) {
            obj.startLoadingFromJson();
        }
        properties = this.addDynamicProperties(obj, jsonObj, properties);
        for (var key in jsonObj) {
            if (key == JsonObject.typePropertyName)
                continue;
            if (key == JsonObject.positionPropertyName) {
                obj[key] = jsonObj[key];
                continue;
            }
            var property = this.findProperty(properties, key);
            if (!property) {
                this.addNewError(new JsonUnknownPropertyError(key.toString(), obj.getType()), jsonObj);
                continue;
            }
            this.valueToObj(jsonObj[key], obj, key, property);
        }
        if (obj.endLoadingFromJson) {
            obj.endLoadingFromJson();
        }
    };
    JsonObject.prototype.toJsonObjectCore = function (obj, property) {
        if (!obj.getType)
            return obj;
        var result = {};
        if (property != null && !property.className) {
            result[JsonObject.typePropertyName] = property.getObjType(obj.getType());
        }
        this.propertiesToJson(obj, JsonObject.metaData.getProperties(obj.getType()), result);
        this.propertiesToJson(obj, this.getDynamicProperties(obj), result);
        return result;
    };
    JsonObject.prototype.getDynamicProperties = function (obj) {
        if (obj.getDynamicProperties && obj.getDynamicType) {
            var names = obj.getDynamicProperties();
            return JsonObject.metaData.findProperties(obj.getDynamicType(), names);
        }
        return [];
    };
    JsonObject.prototype.addDynamicProperties = function (obj, jsonObj, properties) {
        if (!obj.getDynamicPropertyName)
            return properties;
        var dynamicPropName = obj.getDynamicPropertyName();
        if (!dynamicPropName)
            return properties;
        if (jsonObj[dynamicPropName]) {
            obj[dynamicPropName] = jsonObj[dynamicPropName];
        }
        var dynamicProperties = this.getDynamicProperties(obj);
        var res = [];
        for (var i = 0; i < properties.length; i++) {
            res.push(properties[i]);
        }
        for (var i = 0; i < dynamicProperties.length; i++) {
            res.push(dynamicProperties[i]);
        }
        return res;
    };
    JsonObject.prototype.propertiesToJson = function (obj, properties, json) {
        for (var i = 0; i < properties.length; i++) {
            this.valueToJson(obj, json, properties[i]);
        }
    };
    JsonObject.prototype.valueToJson = function (obj, result, property) {
        if (property.isSerializable === false)
            return;
        var value = property.getValue(obj);
        if (property.isDefaultValue(value))
            return;
        if (this.isValueArray(value)) {
            var arrValue = [];
            for (var i = 0; i < value.length; i++) {
                arrValue.push(this.toJsonObjectCore(value[i], property));
            }
            value = arrValue.length > 0 ? arrValue : null;
        }
        else {
            value = this.toJsonObjectCore(value, property);
        }
        if (!property.isDefaultValue(value)) {
            result[property.name] = value;
        }
    };
    JsonObject.prototype.valueToObj = function (value, obj, key, property) {
        if (value == null)
            return;
        if (property != null && property.hasToUseSetValue) {
            property.setValue(obj, value, this);
            return;
        }
        if (this.isValueArray(value)) {
            this.valueToArray(value, obj, property.name, property);
            return;
        }
        var newObj = this.createNewObj(value, property);
        if (newObj.newObj) {
            this.toObject(value, newObj.newObj);
            value = newObj.newObj;
        }
        if (!newObj.error) {
            if (property != null) {
                property.setValue(obj, value, this);
            }
            else {
                obj[property.name] = value;
            }
        }
    };
    JsonObject.prototype.isValueArray = function (value) {
        return value && Array.isArray(value);
    };
    JsonObject.prototype.createNewObj = function (value, property) {
        var result = { newObj: null, error: null };
        var className = value[JsonObject.typePropertyName];
        if (!className && property != null && property.className) {
            className = property.className;
        }
        className = property.getClassName(className);
        result.newObj = className
            ? JsonObject.metaData.createClass(className)
            : null;
        result.error = this.checkNewObjectOnErrors(result.newObj, value, property, className);
        return result;
    };
    JsonObject.prototype.checkNewObjectOnErrors = function (newObj, value, property, className) {
        var error = null;
        if (newObj) {
            var requiredProperties = JsonObject.metaData.getRequiredProperties(className);
            if (requiredProperties) {
                for (var i = 0; i < requiredProperties.length; i++) {
                    if (!value[requiredProperties[i]]) {
                        error = new JsonRequiredPropertyError(requiredProperties[i], className);
                        break;
                    }
                }
            }
        }
        else {
            if (property.baseClassName) {
                if (!className) {
                    error = new JsonMissingTypeError(property.name, property.baseClassName);
                }
                else {
                    error = new JsonIncorrectTypeError(property.name, property.baseClassName);
                }
            }
        }
        if (error) {
            this.addNewError(error, value);
        }
        return error;
    };
    JsonObject.prototype.addNewError = function (error, jsonObj) {
        if (jsonObj && jsonObj[JsonObject.positionPropertyName]) {
            error.at = jsonObj[JsonObject.positionPropertyName].start;
        }
        this.errors.push(error);
    };
    JsonObject.prototype.valueToArray = function (value, obj, key, property) {
        if (obj[key] && value.length > 0)
            obj[key].splice(0, obj[key].length);
        if (!obj[key])
            obj[key] = [];
        for (var i = 0; i < value.length; i++) {
            var newValue = this.createNewObj(value[i], property);
            if (newValue.newObj) {
                obj[key].push(newValue.newObj);
                this.toObject(value[i], newValue.newObj);
            }
            else {
                if (!newValue.error) {
                    obj[key].push(value[i]);
                }
            }
        }
    };
    JsonObject.prototype.findProperty = function (properties, key) {
        if (!properties)
            return null;
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            if (prop.name == key || prop.alternativeName == key)
                return prop;
        }
        return null;
    };
    JsonObject.typePropertyName = "type";
    JsonObject.positionPropertyName = "pos";
    JsonObject.metaDataValue = new JsonMetadata();
    return JsonObject;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return surveyLocalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyStrings; });
var surveyLocalization = {
    currentLocale: "",
    defaultLocale: "en",
    locales: {},
    supportedLocales: [],
    getString: function (strName) {
        var loc = this.currentLocale
            ? this.locales[this.currentLocale]
            : this.locales[this.defaultLocale];
        if (!loc || !loc[strName])
            loc = this.locales[this.defaultLocale];
        return loc[strName];
    },
    getLocales: function () {
        var res = [];
        res.push("");
        if (this.supportedLocales && this.supportedLocales.length > 0) {
            for (var i = 0; i < this.supportedLocales.length; i++) {
                res.push(this.supportedLocales[i]);
            }
        }
        else {
            for (var key in this.locales) {
                res.push(key);
            }
        }
        res.sort();
        return res;
    }
};
var surveyStrings = {
    pagePrevText: "Previous",
    pageNextText: "Next",
    completeText: "Complete",
    startSurveyText: "Start",
    otherItemText: "Other (describe)",
    progressText: "Page {0} of {1}",
    emptySurvey: "There is no visible page or question in the survey.",
    completingSurvey: "Thank you for completing the survey!",
    completingSurveyBefore: "Our records show that you have already completed this survey.",
    loadingSurvey: "Survey is loading...",
    optionsCaption: "Choose...",
    value: "value",
    requiredError: "Please answer the question.",
    requiredErrorInPanel: "Please answer at least one question.",
    requiredInAllRowsError: "Please answer questions in all rows.",
    numericError: "The value should be numeric.",
    textMinLength: "Please enter at least {0} characters.",
    textMaxLength: "Please enter less than {0} characters.",
    textMinMaxLength: "Please enter more than {0} and less than {1} characters.",
    minRowCountError: "Please fill in at least {0} rows.",
    minSelectError: "Please select at least {0} variants.",
    maxSelectError: "Please select no more than {0} variants.",
    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
    numericMin: "The '{0}' should be equal or more than {1}",
    numericMax: "The '{0}' should be equal or less than {1}",
    invalidEmail: "Please enter a valid e-mail address.",
    urlRequestError: "The request returned error '{0}'. {1}",
    urlGetChoicesError: "The request returned empty data or the 'path' property is incorrect",
    exceedMaxSize: "The file size should not exceed {0}.",
    otherRequiredError: "Please enter the other value.",
    uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
    confirmDelete: "Do you want to delete the record?",
    keyDuplicationError: "This value should be unique.",
    addRow: "Add row",
    removeRow: "Remove",
    addPanel: "Add new",
    removePanel: "Remove",
    choices_Item: "item",
    matrix_column: "Column",
    matrix_row: "Row",
    savingData: "The results are saving on the server...",
    savingDataError: "An error occurred and we could not save the results.",
    savingDataSuccess: "The results were saved successfully!",
    saveAgainButton: "Try again",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "You have spent {0} on this page and {1} in total.",
    timerSpentPage: "You have spent {0} on this page.",
    timerSpentSurvey: "You have spent {0} in total.",
    timerLimitAll: "You have spent {0} of {1} on this page and {2} of {3} in total.",
    timerLimitPage: "You have spent {0} of {1} on this page.",
    timerLimitSurvey: "You have spent {0} of {1} in total.",
    cleanCaption: "Clean"
};
surveyLocalization.locales["en"] = surveyStrings;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ElementFactory; });

//TODO replace completely with ElementFactory
var QuestionFactory = /** @class */ (function () {
    function QuestionFactory() {
        this.creatorHash = {};
    }
    Object.defineProperty(QuestionFactory, "DefaultChoices", {
        get: function () {
            return [
                __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("choices_Item") + "1",
                __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("choices_Item") + "2",
                __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("choices_Item") + "3"
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFactory, "DefaultColums", {
        get: function () {
            var colName = __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("matrix_column") + " ";
            return [colName + "1", colName + "2", colName + "3"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFactory, "DefaultRows", {
        get: function () {
            var rowName = __WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].getString("matrix_row") + " ";
            return [rowName + "1", rowName + "2"];
        },
        enumerable: true,
        configurable: true
    });
    QuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
        this.creatorHash[questionType] = questionCreator;
    };
    QuestionFactory.prototype.clear = function () {
        this.creatorHash = {};
    };
    QuestionFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    QuestionFactory.prototype.createQuestion = function (questionType, name) {
        var creator = this.creatorHash[questionType];
        if (creator == null)
            return null;
        return creator(name);
    };
    QuestionFactory.Instance = new QuestionFactory();
    return QuestionFactory;
}());

var ElementFactory = /** @class */ (function () {
    function ElementFactory() {
        this.creatorHash = {};
    }
    ElementFactory.prototype.registerElement = function (elementType, elementCreator) {
        this.creatorHash[elementType] = elementCreator;
    };
    ElementFactory.prototype.clear = function () {
        this.creatorHash = {};
    };
    ElementFactory.prototype.getAllTypes = function () {
        var result = QuestionFactory.Instance.getAllTypes();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    ElementFactory.prototype.createElement = function (elementType, name) {
        var creator = this.creatorHash[elementType];
        if (creator == null)
            return QuestionFactory.Instance.createQuestion(elementType, name);
        return creator(name);
    };
    ElementFactory.Instance = new ElementFactory();
    return ElementFactory;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localizablestring__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Event; });





/**
 * The base class for SurveyJS objects.
 */
var Base = /** @class */ (function () {
    function Base() {
        this.propertyHash = {};
        this.localizableStrings = {};
        this.arraysInfo = {};
        this.onPropChangeFunctions = [];
        this.isLoadingFromJsonValue = false;
        this.onPropertyChanged = new Event();
        __WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* CustomPropertiesCollection */].createProperties(this);
    }
    /**
     * A static methods that returns true if a value underfined, null, empty string or empty array.
     * @param value
     */
    Base.prototype.isValueEmpty = function (value) {
        return __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].isValueEmpty(value);
    };
    Base.prototype.IsPropertyEmpty = function (value) {
        return value !== "" && this.isValueEmpty(value);
    };
    /**
     * Returns the type of the object as a string as it represents in the json.
     */
    Base.prototype.getType = function () {
        return "base";
    };
    /**
     * Returns the element template name without prefix. Typically it equals to getType()
     * @see getType
     */
    Base.prototype.getTemplate = function () {
        return this.getType();
    };
    Object.defineProperty(Base.prototype, "isLoadingFromJson", {
        /**
         * Returns true if the object is loading from Json at the current moment.
         */
        get: function () {
            return this.isLoadingFromJsonValue;
        },
        enumerable: true,
        configurable: true
    });
    Base.prototype.startLoadingFromJson = function () {
        this.isLoadingFromJsonValue = true;
    };
    Base.prototype.endLoadingFromJson = function () {
        this.isLoadingFromJsonValue = false;
    };
    Base.prototype.onLocaleChanged = function () {
        for (var key in this.arraysInfo) {
            var item = this.arraysInfo[key];
            if (item && item.isItemValues) {
                var arr = this.getPropertyValue(key);
                if (arr)
                    __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].NotifyArrayOnLocaleChanged(arr);
            }
        }
        for (var key in this.localizableStrings) {
            var item = this.getLocalizableString(key);
            if (item)
                item.onChanged();
        }
    };
    /**
     * Returns the property value by name
     * @param name property name
     */
    Base.prototype.getPropertyValue = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var res = this.propertyHash[name];
        if (this.IsPropertyEmpty(res) && defaultValue != null)
            return defaultValue;
        return res;
    };
    Base.prototype.setPropertyValueCore = function (propertiesHash, name, val) {
        if (this.setPropertyValueCoreHandler)
            this.setPropertyValueCoreHandler(propertiesHash, name, val);
        else
            propertiesHash[name] = val;
    };
    /**
     * set property value
     * @param name property name
     * @param val new property value
     */
    Base.prototype.setPropertyValue = function (name, val) {
        var oldValue = this.propertyHash[name];
        if (oldValue && Array.isArray(oldValue)) {
            if (this.isTwoValueEquals(oldValue, val))
                return;
            var arrayInfo = this.arraysInfo[name];
            this.setArray(oldValue, val, arrayInfo ? arrayInfo.isItemValues : false, arrayInfo ? arrayInfo.onPush : null);
            this.propertyValueChanged(name, oldValue, oldValue);
        }
        else {
            this.setPropertyValueCore(this.propertyHash, name, val);
            if (!this.isTwoValueEquals(oldValue, val)) {
                this.propertyValueChanged(name, oldValue, val);
            }
        }
    };
    Base.prototype.propertyValueChanged = function (name, oldValue, newValue) {
        if (this.isLoadingFromJson)
            return;
        this.onPropertyChanged.fire(this, {
            name: name,
            oldValue: oldValue,
            newValue: newValue
        });
        for (var i = 0; i < this.onPropChangeFunctions.length; i++) {
            if (this.onPropChangeFunctions[i].name == name)
                this.onPropChangeFunctions[i].func();
        }
    };
    /**
     * Register a function that will be called on a property value changed.
     * @param name the property name
     * @param func the function with no parameters that will be called on property changed.
     * @param key an optional parameter. If there is already a registered function for this property witht the same key, it will be overwritten.
     */
    Base.prototype.registerFunctionOnPropertyValueChanged = function (name, func, key) {
        if (key === void 0) { key = null; }
        if (key) {
            for (var i = 0; i < this.onPropChangeFunctions.length; i++) {
                var item = this.onPropChangeFunctions[i];
                if (item.name == name && item.key == key) {
                    item.func = func;
                    return;
                }
            }
        }
        this.onPropChangeFunctions.push({ name: name, func: func, key: key });
    };
    /**
     * Register a function that will be called on a property value changed from the names list.
     * @param names the list of properties names
     * @param func the function with no parameters that will be called on property changed.
     * @param key an optional parameter. If there is already a registered function for this property witht the same key, it will be overwritten.
     */
    Base.prototype.registerFunctionOnPropertiesValueChanged = function (names, func, key) {
        if (key === void 0) { key = null; }
        for (var i = 0; i < names.length; i++) {
            this.registerFunctionOnPropertyValueChanged(names[i], func, key);
        }
    };
    /**
     * Unregister notification on property value changed
     * @param name the property name
     * @param key the key with which you have registered the notification for this property. It can be null.
     */
    Base.prototype.unRegisterFunctionOnPropertyValueChanged = function (name, key) {
        if (key === void 0) { key = null; }
        for (var i = 0; i < this.onPropChangeFunctions.length; i++) {
            var item = this.onPropChangeFunctions[i];
            if (item.name == name && item.key == key) {
                this.onPropChangeFunctions.splice(i, 1);
                return;
            }
        }
    };
    /**
     * Unregister notification on property value changed for all properties in the names list.
     * @param names the list of properties names
     * @param key the key with which you have registered the notification for this property. It can be null.
     */
    Base.prototype.unRegisterFunctionOnPropertiesValueChanged = function (names, key) {
        if (key === void 0) { key = null; }
        for (var i = 0; i < names.length; i++) {
            this.unRegisterFunctionOnPropertyValueChanged(names[i], key);
        }
    };
    Base.prototype.createCustomLocalizableObj = function (name) {
        var locStr = this.getLocalizableString(name);
        if (locStr || !this["getLocale"])
            return;
        this.createLocalizableString(name, this);
    };
    Base.prototype.createLocalizableString = function (name, owner, useMarkDown) {
        if (useMarkDown === void 0) { useMarkDown = false; }
        var locStr = new __WEBPACK_IMPORTED_MODULE_1__localizablestring__["a" /* LocalizableString */](owner, useMarkDown);
        this.localizableStrings[name] = locStr;
        return locStr;
    };
    Base.prototype.getLocalizableString = function (name) {
        return this.localizableStrings[name];
    };
    Base.prototype.getLocalizableStringText = function (name, defaultStr) {
        if (defaultStr === void 0) { defaultStr = ""; }
        var locStr = this.getLocalizableString(name);
        if (!locStr)
            return "";
        var res = locStr.text;
        return res ? res : defaultStr;
    };
    Base.prototype.setLocalizableStringText = function (name, value) {
        var locStr = this.getLocalizableString(name);
        if (!locStr)
            return;
        var oldValue = locStr.text;
        if (oldValue === value)
            return;
        locStr.text = value;
        this.propertyValueChanged(name, oldValue, value);
    };
    Base.prototype.createItemValues = function (name) {
        var self = this;
        var result = this.createNewArray(name, function (item) {
            item.locOwner = self;
        });
        this.arraysInfo[name].isItemValues = true;
        return result;
    };
    Base.prototype.createNewArray = function (name, onPush, onRemove) {
        if (onPush === void 0) { onPush = null; }
        if (onRemove === void 0) { onRemove = null; }
        var newArray = new Array();
        this.setPropertyValueCore(this.propertyHash, name, newArray);
        this.arraysInfo[name] = { onPush: onPush, isItemValues: false };
        var self = this;
        newArray.push = function (value) {
            var result = Array.prototype.push.call(newArray, value);
            if (onPush)
                onPush(value);
            self.propertyValueChanged(name, newArray, newArray);
            return result;
        };
        newArray.pop = function () {
            var result = Array.prototype.pop.call(newArray);
            if (onRemove)
                onRemove(result);
            self.propertyValueChanged(name, newArray, newArray);
            return result;
        };
        newArray.splice = function (start, deleteCount) {
            var items = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                items[_i - 2] = arguments[_i];
            }
            if (!start)
                start = 0;
            if (!deleteCount)
                deleteCount = 0;
            var result = (_a = Array.prototype.splice).call.apply(_a, [newArray,
                start,
                deleteCount].concat(items));
            if (!items)
                items = [];
            if (onRemove && result) {
                for (var i = 0; i < result.length; i++) {
                    onRemove(result[i]);
                }
            }
            if (onPush) {
                for (var i = 0; i < items.length; i++) {
                    onPush(items[i], start + i);
                }
            }
            self.propertyValueChanged(name, newArray, newArray);
            return result;
            var _a;
        };
        return newArray;
    };
    Base.prototype.setArray = function (src, dest, isItemValues, onPush) {
        src.length = 0;
        if (!dest)
            return;
        for (var i = 0; i < dest.length; i++) {
            if (isItemValues) {
                var item = dest[i];
                item = new __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */](null);
                item.setData(dest[i]);
                Array.prototype.push.call(src, item);
            }
            else {
                Array.prototype.push.call(src, dest[i]);
            }
            if (onPush)
                onPush(src[i]);
        }
    };
    Base.prototype.isTwoValueEquals = function (x, y) {
        return __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].isTwoValueEquals(x, y);
    };
    Base.commentPrefix = "-Comment";
    return Base;
}());

var SurveyError = /** @class */ (function () {
    function SurveyError() {
    }
    SurveyError.prototype.getText = function () {
        throw new Error("This method is abstract");
    };
    return SurveyError;
}());

var SurveyElement = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyElement, _super);
    function SurveyElement(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.selectedElementInDesignValue = _this;
        _this.errorsValue = [];
        return _this;
    }
    SurveyElement.ScrollElementToTop = function (elementId) {
        if (!elementId)
            return false;
        var el = document.getElementById(elementId);
        if (!el || !el.scrollIntoView)
            return false;
        var elemTop = el.getBoundingClientRect().top;
        if (elemTop < 0)
            el.scrollIntoView();
        return elemTop < 0;
    };
    SurveyElement.GetFirstNonTextElement = function (elements) {
        if (!elements || !elements.length)
            return;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment")
                return elements[i];
        }
        return null;
    };
    SurveyElement.FocusElement = function (elementId) {
        if (!elementId)
            return false;
        var el = document.getElementById(elementId);
        if (el) {
            el.focus();
            return true;
        }
        return false;
    };
    SurveyElement.setVisibleIndex = function (questions, index, showIndex) {
        var startIndex = index;
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            if (!showIndex || !q.visible || !q.hasTitle) {
                q.setVisibleIndex(-1);
            }
            else {
                index += q.setVisibleIndex(index);
            }
        }
        return index - startIndex;
    };
    SurveyElement.prototype.setSurveyImpl = function (value) {
        this.surveyImplValue = value;
        if (!this.surveyImplValue)
            return;
        this.surveyDataValue = this.surveyImplValue.geSurveyData();
        this.surveyValue = this.surveyImplValue.getSurvey();
        this.textProcessorValue = this.surveyImplValue.getTextProcessor();
        this.onSetData();
    };
    Object.defineProperty(SurveyElement.prototype, "surveyImpl", {
        get: function () {
            return this.surveyImplValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyElement.prototype, "data", {
        get: function () {
            return this.surveyDataValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyElement.prototype, "survey", {
        /**
         * Returns the survey object.
         */
        get: function () {
            return this.surveyValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyElement.prototype, "isDesignMode", {
        /**
         * Returns true if the question in design mode right now.
         */
        get: function () {
            return this.survey && this.survey.isDesignMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyElement.prototype, "isLoadingFromJson", {
        get: function () {
            if (this.survey)
                return this.survey.isLoadingFromJson;
            return this.isLoadingFromJsonValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyElement.prototype, "errors", {
        /**
         * The list of errors. It is created by callig hasErrors functions
         * @see hasErrors
         */
        get: function () {
            return this.errorsValue;
        },
        set: function (val) {
            this.errorsValue = val;
        },
        enumerable: true,
        configurable: true
    });
    SurveyElement.prototype.getElementsInDesign = function (includeHidden) {
        if (includeHidden === void 0) { includeHidden = false; }
        return [];
    };
    Object.defineProperty(SurveyElement.prototype, "selectedElementInDesign", {
        get: function () {
            return this.selectedElementInDesignValue;
        },
        set: function (val) {
            this.selectedElementInDesignValue = val;
        },
        enumerable: true,
        configurable: true
    });
    SurveyElement.prototype.updateCustomWidgets = function () { };
    SurveyElement.prototype.onSurveyLoad = function () { };
    SurveyElement.prototype.endLoadingFromJson = function () {
        _super.prototype.endLoadingFromJson.call(this);
        if (!this.survey) {
            this.onSurveyLoad();
        }
    };
    Object.defineProperty(SurveyElement.prototype, "textProcessor", {
        get: function () {
            return this.textProcessorValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyElement.prototype.getProcessedHtml = function (html) {
        if (!html || !this.textProcessor)
            return html;
        return this.textProcessor.processText(html, true);
    };
    SurveyElement.prototype.onSetData = function () { };
    SurveyElement.prototype.getPage = function (parent) {
        while (parent && parent.parent)
            parent = parent.parent;
        if (parent && parent.getType() == "page")
            return parent;
        return null;
    };
    SurveyElement.prototype.setPage = function (parent, val) {
        var oldPage = this.getPage(parent);
        if (oldPage === val)
            return;
        if (parent)
            parent.removeElement(this);
        if (val) {
            val.addElement(this, -1);
        }
    };
    SurveyElement.prototype.copyCssClasses = function (dest, source) {
        if (!source)
            return;
        if (typeof source === "string" || source instanceof String) {
            dest["root"] = source;
        }
        else {
            for (var key in source) {
                dest[key] = source[key];
            }
        }
    };
    return SurveyElement;
}(Base));

var Event = /** @class */ (function () {
    function Event() {
    }
    Object.defineProperty(Event.prototype, "isEmpty", {
        get: function () {
            return this.callbacks == null || this.callbacks.length == 0;
        },
        enumerable: true,
        configurable: true
    });
    Event.prototype.fire = function (sender, options) {
        if (this.callbacks == null)
            return;
        for (var i = 0; i < this.callbacks.length; i++) {
            var callResult = this.callbacks[i](sender, options);
        }
    };
    Event.prototype.add = function (func) {
        if (this.callbacks == null) {
            this.callbacks = new Array();
        }
        this.callbacks.push(func);
    };
    Event.prototype.remove = function (func) {
        if (this.callbacks == null)
            return;
        var index = this.callbacks.indexOf(func, 0);
        if (index != undefined) {
            this.callbacks.splice(index, 1);
        }
    };
    return Event;
}());



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koquestionbase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionImplementor; });





var QuestionImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionImplementor, _super);
    function QuestionImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question = question;
        var self = _this;
        question.valueChangedCallback = function () {
            self.onValueChanged();
        };
        question.commentChangedCallback = function () {
            self.onCommentChanged();
        };
        question.errorsChangedCallback = function () {
            self.onErrorsChanged();
        };
        question.titleChangedCallback = function () {
            self.onVisibleIndexChanged();
        };
        question.registerFunctionOnPropertyValueChanged("visibleIndex", function () {
            self.onVisibleIndexChanged();
        });
        question.registerFunctionOnPropertyValueChanged("isReadOnly", function () {
            self.onReadOnlyChanged();
        });
        _this.koDummy = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        _this.koValue = _this.createkoValue();
        _this.koComment = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.question.comment);
        _this.koErrors(_this.question.errors);
        _this.koIsReadOnly = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.question.isReadOnly);
        _this.koValue.subscribe(function (newValue) {
            self.updateValue(newValue);
        });
        _this.koComment.subscribe(function (newValue) {
            self.updateComment(newValue);
        });
        _this.question["koValue"] = _this.koValue;
        _this.question["koComment"] = _this.koComment;
        _this.question["koIsReadOnly"] = _this.koIsReadOnly;
        _this.question["koQuestionAfterRender"] = function (el, con) {
            self.koQuestionAfterRender(el, con);
        };
        return _this;
    }
    QuestionImplementor.prototype.updateQuestion = function () {
        this.updateKoDummy();
    };
    QuestionImplementor.prototype.onValueChanged = function () {
        var val = this.question.value;
        if (__WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* Helpers */].isTwoValueEquals(val, this.koValue()))
            return;
        this.setkoValue(val);
    };
    QuestionImplementor.prototype.onCommentChanged = function () {
        var val = this.question.comment;
        if (__WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* Helpers */].isTwoValueEquals(val, this.koValue()))
            return;
        this.koComment(val);
    };
    QuestionImplementor.prototype.onVisibleIndexChanged = function () {
        this.updateKoDummy();
    };
    QuestionImplementor.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        this.onReadOnlyChanged();
    };
    QuestionImplementor.prototype.onReadOnlyChanged = function () {
        this.koIsReadOnly(this.question.isReadOnly);
    };
    QuestionImplementor.prototype.onErrorsChanged = function () {
        this.koErrors(this.question.errors);
    };
    QuestionImplementor.prototype.createkoValue = function () {
        return __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.question.value);
    };
    QuestionImplementor.prototype.setkoValue = function (newValue) {
        this.koValue(newValue);
    };
    QuestionImplementor.prototype.updateValue = function (newValue) {
        this.question.value = newValue;
    };
    QuestionImplementor.prototype.updateComment = function (newValue) {
        this.question.comment = newValue;
    };
    QuestionImplementor.prototype.getNo = function () {
        return this.question.visibleIndex > -1
            ? this.question.visibleIndex + 1 + ". "
            : "";
    };
    QuestionImplementor.prototype.updateKoDummy = function () {
        this.koDummy(this.koDummy() + 1);
        this.question.locTitle.onChanged();
    };
    QuestionImplementor.prototype.koQuestionAfterRender = function (elements, con) {
        var el = __WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
        var tEl = elements[0];
        if (tEl.nodeName === "#text")
            tEl.data = "";
        tEl = elements[elements.length - 1];
        if (tEl.nodeName === "#text")
            tEl.data = "";
        if (el && this.question.customWidget)
            this.question.customWidget.afterRender(this.question, el);
    };
    return QuestionImplementor;
}(__WEBPACK_IMPORTED_MODULE_2__koquestionbase__["a" /* QuestionImplementorBase */]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionbase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__textPreProcessor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conditions__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });









/**
 * Extends question base class with title, value, errors and other functionality
 */
var Question = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Question, _super);
    function Question(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.validatorsValue = _this.createNewArray("validators");
        _this.isvalueChangedCallbackFiring = false;
        _this.isValueChangedInSurvey = false;
        var self = _this;
        var locTitleValue = _this.createLocalizableString("title", _this, true);
        locTitleValue.onRenderedHtmlCallback = function (text) {
            return self.fullTitle;
        };
        var locDescriptionValue = _this.createLocalizableString("description", _this, true);
        locDescriptionValue.onGetTextCallback = function (html) {
            return self.getProcessedHtml(html);
        };
        _this.createLocalizableString("commentText", _this, true);
        _this.createLocalizableString("requiredErrorText", _this);
        return _this;
    }
    Question.prototype.getValueName = function () {
        return this.valueName ? this.valueName : this.name;
    };
    Object.defineProperty(Question.prototype, "valueName", {
        get: function () {
            return this.getPropertyValue("valueName", "");
        },
        set: function (val) {
            this.setPropertyValue("valueName", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "isAllowTitleLeft", {
        /**
         * Returns true if the question may have a title located on the left
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.getType = function () {
        return "question";
    };
    Object.defineProperty(Question.prototype, "hasTitle", {
        get: function () {
            return this.getTitleLocation() !== "hidden";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasDescription", {
        get: function () {
            return this.description != "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "titleLocation", {
        /**
         * Set this property different from "default" to set the specific question title location for this panel/page.
         * @see SurveyModel.questionTitleLocation
         */
        get: function () {
            return this.getPropertyValue("questionTitleLocation", "default");
        },
        set: function (value) {
            var isVisibilityChanged = this.titleLocation == "hidden" || value == "hidden";
            this.setPropertyValue("questionTitleLocation", value.toLowerCase());
            if (isVisibilityChanged && this.survey) {
                this.survey.questionVisibilityChanged(this, this.visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Return the title location based on question titleLocation property and QuestionTitleLocation of it's parents
     * @see titleLocation
     * @see PanelModelBase.QuestionTitleLocation
     * @see SurveyModel.QuestionTitleLocation
     */
    Question.prototype.getTitleLocation = function () {
        var location = this.getTitleLocationCore();
        if (location === "left" && !this.isAllowTitleLeft)
            location = "top";
        return location;
    };
    Question.prototype.getTitleLocationCore = function () {
        if (this.titleLocation !== "default")
            return this.titleLocation;
        var location = "top";
        if (this.parent) {
            location = this.parent.getQuestionTitleLocation();
        }
        else if (this.survey) {
            location = this.survey.questionTitleLocation;
        }
        return location;
    };
    Object.defineProperty(Question.prototype, "hasTitleOnLeft", {
        get: function () {
            return this.hasTitle && this.getTitleLocation() === "left";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasTitleOnTop", {
        get: function () {
            return this.hasTitle && this.getTitleLocation() === "top";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasTitleOnBottom", {
        get: function () {
            return this.hasTitle && this.getTitleLocation() === "bottom";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasTitleOnLeftTop", {
        get: function () {
            if (!this.hasTitle)
                return false;
            var location = this.getTitleLocation();
            return location === "left" || location === "top";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "errorLocation", {
        get: function () {
            return this.survey ? this.survey.questionErrorLocation : "top";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasInput", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "inputId", {
        get: function () {
            return this.id + "i";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "title", {
        /**
         * Question title. Use survey questionTitleTemplate property to change the title question is rendered. If it is empty, then question name property is used.
         * @see SurveyModel.questionTitleTemplate
         */
        get: function () {
            return this.getLocalizableStringText("title", this.name);
        },
        set: function (val) {
            this.setLocalizableStringText("title", val);
            this.fireCallback(this.titleChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locTitle", {
        get: function () {
            return this.getLocalizableString("title");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "description", {
        /**
         * Question description. It renders under question title by using smaller font. Unlike the title, description can be empty.
         * @see title
         */
        get: function () {
            return this.getLocalizableStringText("description");
        },
        set: function (val) {
            this.setLocalizableStringText("description", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locDescription", {
        get: function () {
            return this.getLocalizableString("description");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "requiredErrorText", {
        /**
         * The custom text that will be shown on required error. Use this property, if you do not want to show the default text.
         */
        get: function () {
            return this.getLocalizableStringText("requiredErrorText");
        },
        set: function (val) {
            this.setLocalizableStringText("requiredErrorText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locRequiredErrorText", {
        get: function () {
            return this.getLocalizableString("requiredErrorText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "commentText", {
        /**
         * Use it to get or set the comment value.
         */
        get: function () {
            return this.getLocalizableStringText("commentText", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText"));
        },
        set: function (val) {
            this.setLocalizableStringText("commentText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locCommentText", {
        get: function () {
            return this.getLocalizableString("commentText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locTitleHtml", {
        get: function () {
            var res = this.locTitle.textOrHtml;
            return res ? res : this.name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a copy of question errors survey. For some questions like matrix and panel dynamic it includes the errors of nested questions.
     */
    Question.prototype.getAllErrors = function () {
        return this.errors.slice();
    };
    Object.defineProperty(Question.prototype, "processedTitle", {
        /**
         * Returns the rendred question title.
         */
        get: function () {
            return this.getProcessedHtml(this.locTitleHtml);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "fullTitle", {
        /**
         * Returns the title after processing the question template.
         * @see SurveyModel.questionTitleTemplate
         */
        get: function () {
            if (this.survey && this.survey.getQuestionTitleTemplate()) {
                if (!this.textPreProcessor) {
                    var self = this;
                    this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_7__textPreProcessor__["a" /* TextPreProcessor */]();
                    this.textPreProcessor.onProcess = function (textValue) {
                        self.getProcessedTextValue(textValue);
                    };
                }
                return this.textPreProcessor.process(this.survey.getQuestionTitleTemplate());
            }
            var requireText = this.requiredText;
            if (requireText)
                requireText += " ";
            var no = this.no;
            if (no)
                no += ". ";
            return no + requireText + this.processedTitle;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.focus = function (onError) {
        if (onError === void 0) { onError = false; }
        __WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].ScrollElementToTop(this.id);
        var id = !onError
            ? this.getFirstInputElementId()
            : this.getFirstErrorInputElementId();
        if (__WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].FocusElement(id)) {
            this.fireCallback(this.focusCallback);
        }
    };
    Question.prototype.updateCssClasses = function (res, surveyCss) {
        _super.prototype.updateCssClasses.call(this, res, surveyCss);
        if (this.isRequired) {
            if (surveyCss.question.required) {
                res.root += " " + surveyCss.question.required;
            }
            if (surveyCss.question.titleRequired) {
                res.title += " " + surveyCss.question.titleRequired;
            }
        }
    };
    Question.prototype.getFirstInputElementId = function () {
        return this.inputId;
    };
    Question.prototype.getFirstErrorInputElementId = function () {
        return this.getFirstInputElementId();
    };
    Question.prototype.getProcessedTextValue = function (textValue) {
        var name = textValue.name.toLocaleLowerCase();
        textValue.isExists = name == "no" || name == "title" || name == "require";
        if (name == "no")
            textValue.value = this.no;
        if (name == "title")
            textValue.value = this.processedTitle;
        if (name == "require")
            textValue.value = this.requiredText;
    };
    Question.prototype.supportComment = function () {
        return false;
    };
    Question.prototype.supportOther = function () {
        return false;
    };
    Object.defineProperty(Question.prototype, "isRequired", {
        /**
         * Set this property to true, to make the question a required. If a user doesn't answer the question then a validation error will be generated.
         */
        get: function () {
            return this.getPropertyValue("isRequired", false);
        },
        set: function (val) {
            if (this.isRequired == val)
                return;
            this.setPropertyValue("isRequired", val);
            this.fireCallback(this.titleChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasComment", {
        get: function () {
            return this.getPropertyValue("hasComment", false);
        },
        set: function (val) {
            if (!this.supportComment())
                return;
            this.setPropertyValue("hasComment", val);
            if (this.hasComment)
                this.hasOther = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasOther", {
        get: function () {
            return this.getPropertyValue("hasOther", false);
        },
        set: function (val) {
            if (!this.supportOther() || this.hasOther == val)
                return;
            this.setPropertyValue("hasOther", val);
            if (this.hasOther)
                this.hasComment = false;
            this.hasOtherChanged();
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.hasOtherChanged = function () { };
    Object.defineProperty(Question.prototype, "isReadOnly", {
        /**
         * Retuns true if readOnly property is true or survey is in display mode.
         * @see SurveyModel.model
         * @see readOnly
         */
        get: function () {
            return this.readOnly || (this.survey != null && this.survey.isDisplayMode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "readOnly", {
        /**
         * Set it to true to make a question readonly.
         */
        /**
         * Set it to true to make the question readonly.
         */
        get: function () {
            return this.getPropertyValue("readOnly", false);
        },
        set: function (val) {
            if (this.readOnly == val)
                return;
            this.setPropertyValue("readOnly", val);
            this.onReadOnlyChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "enableIf", {
        /**
         * An expression that returns true or false. If it returns false the Question becomes read only and an end-user will not able to answer on the qustion. The library runs the expression on survey start and on changing a question value. If the property is empty then readOnly property is used.
         * @see readOnly
         * @see isReadOnly
         */
        get: function () {
            return this.getPropertyValue("enableIf", "");
        },
        set: function (val) {
            this.setPropertyValue("enableIf", val);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.runCondition = function (values) {
        _super.prototype.runCondition.call(this, values);
        if (!this.enableIf)
            return;
        if (!this.conditionEnabelRunner)
            this.conditionEnabelRunner = new __WEBPACK_IMPORTED_MODULE_8__conditions__["a" /* ConditionRunner */](this.enableIf);
        this.conditionEnabelRunner.expression = this.enableIf;
        this.readOnly = !this.conditionEnabelRunner.run(values);
    };
    Question.prototype.onReadOnlyChanged = function () {
        this.setPropertyValue("isReadOnly", this.isReadOnly);
    };
    Question.prototype.onAnyValueChanged = function (name) {
        if (!name)
            return;
        var titleValue = this.locTitle.text;
        if (!titleValue)
            return;
        if (titleValue.toLocaleLowerCase().indexOf("{" + name.toLowerCase()) > -1) {
            this.fireCallback(this.titleChangedCallback);
        }
    };
    Object.defineProperty(Question.prototype, "no", {
        get: function () {
            if (this.visibleIndex < 0)
                return "";
            var startIndex = 1;
            var isNumeric = true;
            var str = "";
            if (this.survey && this.survey.questionStartIndex) {
                str = this.survey.questionStartIndex;
                if (parseInt(str))
                    startIndex = parseInt(str);
                else if (str.length == 1)
                    isNumeric = false;
            }
            if (isNumeric)
                return (this.visibleIndex + startIndex).toString();
            return String.fromCharCode(str.charCodeAt(0) + this.visibleIndex);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        if (this.defaultValue) {
            this.updateValueWithDefaults();
        }
    };
    Question.prototype.onSetData = function () {
        _super.prototype.onSetData.call(this);
        this.onSurveyValueChanged(this.value);
        if (this.defaultValue) {
            this.updateValueWithDefaults();
        }
    };
    Object.defineProperty(Question.prototype, "value", {
        /**
         * Get/Set the question value.
         * @see SurveyMode.setValue
         * @see SurveyMode.getValue
         */
        get: function () {
            return this.valueFromData(this.getValueCore());
        },
        set: function (newValue) {
            this.setNewValue(newValue);
            if (this.isvalueChangedCallbackFiring)
                return;
            this.isvalueChangedCallbackFiring = true;
            this.fireCallback(this.valueChangedCallback);
            this.isvalueChangedCallbackFiring = false;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.clearValue = function () {
        this.value = null;
        this.comment = null;
    };
    Question.prototype.canClearValueAsInvisible = function () {
        if (this.isVisible)
            return false;
        if (!this.survey || !this.valueName)
            return true;
        return !this.survey.hasVisibleQuestionByValueName(this.valueName);
    };
    Question.prototype.clearValueIfInvisible = function () {
        if (this.canClearValueAsInvisible()) {
            this.clearValue();
        }
    };
    Object.defineProperty(Question.prototype, "displayValue", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "defaultValue", {
        /**
         * Set the default value to the question. It will be assign to the question on loading the survey from JSON or adding a question to the survey or on setting this property of the value is empty.
         */
        get: function () {
            return this.getPropertyValue("defaultValue");
        },
        set: function (val) {
            this.setPropertyValue("defaultValue", val);
            this.updateValueWithDefaults();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "correctAnswer", {
        /**
         * The correct answer on the question. Set this value if you are doing a quiz.
         * @see SurveyModel.correctAnswers
         * @see SurveyModel.inCorrectAnswers
         */
        get: function () {
            return this.getPropertyValue("correctAnswer");
        },
        set: function (val) {
            this.setPropertyValue("correctAnswer", val);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.isAnswerCorrect = function () {
        if (this.isValueEmpty(this.value) || this.isValueEmpty(this.correctAnswer))
            return false;
        return this.isTwoValueEquals(this.value, this.correctAnswer);
    };
    Question.prototype.updateValueWithDefaults = function () {
        if (this.isLoadingFromJson ||
            (!this.isDesignMode && this.isValueEmpty(this.defaultValue)))
            return;
        if (!this.isDesignMode && !this.isEmpty())
            return;
        this.setDefaultValue();
    };
    Question.prototype.setDefaultValue = function () {
        this.value = this.defaultValue;
    };
    Object.defineProperty(Question.prototype, "comment", {
        /**
         * The question comment value.
         */
        get: function () {
            return this.getComment();
        },
        set: function (newValue) {
            if (this.comment == newValue)
                return;
            this.setComment(newValue);
            this.fireCallback(this.commentChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.getComment = function () {
        return this.data != null
            ? this.data.getComment(this.getValueName())
            : this.questionComment;
    };
    Question.prototype.setComment = function (newValue) {
        this.setNewComment(newValue);
    };
    /**
     * Returns true if the question value is empty
     */
    Question.prototype.isEmpty = function () {
        return this.isValueEmpty(this.value);
    };
    Object.defineProperty(Question.prototype, "validators", {
        /**
         * The list of question validators.
         */
        get: function () {
            return this.validatorsValue;
        },
        set: function (val) {
            this.setPropertyValue("validators", val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns true if threre is a validation error(s) in the question.
     * @param fireCallback set it to true to show an error in UI.
     */
    Question.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        this.checkForErrors(fireCallback);
        return this.errors.length > 0;
    };
    Object.defineProperty(Question.prototype, "currentErrorCount", {
        /**
         * Returns the validation errors count.
         */
        get: function () {
            return this.errors.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "requiredText", {
        /**
         * Returns the char/string for a required question.
         * @see SurveyModel.requiredText
         */
        get: function () {
            return this.survey != null && this.isRequired
                ? this.survey.requiredText
                : "";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add error into the question error list.
     * @param error
     */
    Question.prototype.addError = function (error) {
        this.errors.push(error);
        this.fireCallback(this.errorsChangedCallback);
    };
    Question.prototype.checkForErrors = function (fireCallback) {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        if (this.isVisible && !this.isReadOnly) {
            this.collectErrors();
        }
        if (fireCallback &&
            (errorLength != this.errors.length || errorLength > 0)) {
            this.fireCallback(this.errorsChangedCallback);
        }
    };
    Question.prototype.collectErrors = function () {
        this.onCheckForErrors(this.errors);
        if (this.errors.length == 0 && !this.isEmpty()) {
            var error = this.runValidators();
            if (error) {
                //validators may change the question value.
                this.errors = [];
                this.errors.push(error);
            }
        }
        if (this.survey && this.errors.length == 0) {
            var error = this.fireSurveyValidation();
            if (error) {
                this.errors.push(error);
            }
        }
    };
    Question.prototype.fireSurveyValidation = function () {
        if (this.validateValueCallback)
            return this.validateValueCallback();
        return this.survey ? this.survey.validateQuestion(this) : null;
    };
    Question.prototype.onCheckForErrors = function (errors) {
        if (this.hasRequiredError()) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["c" /* AnswerRequiredError */](this.requiredErrorText));
        }
    };
    Question.prototype.hasRequiredError = function () {
        return this.isRequired && this.isEmpty();
    };
    Question.prototype.runValidators = function () {
        return new __WEBPACK_IMPORTED_MODULE_6__validator__["a" /* ValidatorRunner */]().run(this);
    };
    Question.prototype.setNewValue = function (newValue) {
        this.setNewValueInData(newValue);
        this.onValueChanged();
    };
    Question.prototype.setNewValueInData = function (newValue) {
        if (!this.isValueChangedInSurvey) {
            newValue = this.valueToData(newValue);
            this.setValueCore(newValue);
        }
    };
    Question.prototype.getValueCore = function () {
        return this.data != null
            ? this.data.getValue(this.getValueName())
            : this.questionValue;
    };
    Question.prototype.setValueCore = function (newValue) {
        if (this.data != null) {
            this.data.setValue(this.getValueName(), newValue);
        }
        else {
            this.questionValue = newValue;
        }
    };
    Question.prototype.valueFromData = function (val) {
        return val;
    };
    Question.prototype.valueToData = function (val) {
        return val;
    };
    Question.prototype.onValueChanged = function () { };
    Question.prototype.setNewComment = function (newValue) {
        if (this.data != null) {
            this.data.setComment(this.getValueName(), newValue);
        }
        else
            this.questionComment = newValue;
    };
    //IQuestion
    Question.prototype.onSurveyValueChanged = function (newValue) {
        this.isValueChangedInSurvey = true;
        this.value = this.valueFromData(newValue);
        this.fireCallback(this.commentChangedCallback);
        this.isValueChangedInSurvey = false;
    };
    //IValidatorOwner
    Question.prototype.getValidatorTitle = function () {
        return null;
    };
    Object.defineProperty(Question.prototype, "validatedValue", {
        get: function () {
            return this.value;
        },
        set: function (val) {
            this.value = val;
        },
        enumerable: true,
        configurable: true
    });
    return Question;
}(__WEBPACK_IMPORTED_MODULE_2__questionbase__["a" /* QuestionBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("question", [
    { name: "title:text", serializationProperty: "locTitle" },
    { name: "description:text", serializationProperty: "locDescription" },
    { name: "commentText", serializationProperty: "locCommentText" },
    "valueName",
    "enableIf:condition",
    "defaultValue:value",
    "correctAnswer:value",
    "isRequired:boolean",
    {
        name: "requiredErrorText:text",
        serializationProperty: "locRequiredErrorText"
    },
    "readOnly:boolean",
    {
        name: "validators:validators",
        baseClassName: "surveyvalidator",
        classNamePart: "validator"
    },
    {
        name: "titleLocation",
        default: "default",
        choices: ["default", "top", "bottom", "left", "hidden"]
    }
], null, "questionbase");


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AnswerRequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OneAnswerRequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RequreNumericError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ExceedSizeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomError; });



var AnswerRequiredError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AnswerRequiredError, _super);
    function AnswerRequiredError(customErrorText) {
        if (customErrorText === void 0) { customErrorText = null; }
        var _this = _super.call(this) || this;
        _this.customErrorText = customErrorText;
        return _this;
    }
    AnswerRequiredError.prototype.getText = function () {
        return this.customErrorText
            ? this.customErrorText
            : __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("requiredError");
    };
    return AnswerRequiredError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));

var OneAnswerRequiredError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](OneAnswerRequiredError, _super);
    function OneAnswerRequiredError(customErrorText) {
        if (customErrorText === void 0) { customErrorText = null; }
        var _this = _super.call(this) || this;
        _this.customErrorText = customErrorText;
        return _this;
    }
    OneAnswerRequiredError.prototype.getText = function () {
        return this.customErrorText
            ? this.customErrorText
            : __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("requiredErrorInPanel");
    };
    return OneAnswerRequiredError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));

var RequreNumericError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](RequreNumericError, _super);
    function RequreNumericError() {
        return _super.call(this) || this;
    }
    RequreNumericError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("numericError");
    };
    return RequreNumericError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));

var ExceedSizeError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ExceedSizeError, _super);
    function ExceedSizeError(maxSize) {
        var _this = _super.call(this) || this;
        _this.maxSize = maxSize;
        return _this;
    }
    ExceedSizeError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */]
            .getString("exceedMaxSize")["format"](this.getTextSize());
    };
    ExceedSizeError.prototype.getTextSize = function () {
        var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        var fixed = [0, 0, 2, 3, 3];
        if (this.maxSize == 0)
            return "0 Byte";
        var i = Math.floor(Math.log(this.maxSize) / Math.log(1024));
        var value = this.maxSize / Math.pow(1024, i);
        return value.toFixed(fixed[i]) + " " + sizes[i];
    };
    return ExceedSizeError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));

var CustomError = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](CustomError, _super);
    function CustomError(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    CustomError.prototype.getText = function () {
        return this.text;
    };
    return CustomError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyError */]));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    /**
     * A static methods that returns true if a value underfined, null, empty string or empty array.
     * @param value
     */
    Helpers.isValueEmpty = function (value) {
        if (Array.isArray(value) && value.length === 0)
            return true;
        if (value && (typeof value === "string" || value instanceof String)) {
            value = value.trim();
        }
        return !value && value !== 0 && value !== false;
    };
    Helpers.isArrayContainsEqual = function (x, y) {
        if (!Array.isArray(x) || !Array.isArray(y))
            return false;
        if (x.length !== y.length)
            return false;
        for (var i = 0; i < x.length; i++) {
            var j = 0;
            for (; j < y.length; j++) {
                if (Helpers.isTwoValueEquals(x[i], y[j]))
                    break;
            }
            if (j === y.length)
                return false;
        }
        return true;
    };
    Helpers.isTwoValueEquals = function (x, y) {
        if (x === y)
            return true;
        if (!(x instanceof Object) || !(y instanceof Object))
            return false;
        for (var p in x) {
            if (!x.hasOwnProperty(p))
                continue;
            if (!y.hasOwnProperty(p))
                return false;
            if (x[p] === y[p])
                continue;
            if (typeof x[p] !== "object")
                return false;
            if (!this.isTwoValueEquals(x[p], y[p]))
                return false;
        }
        for (p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
                return false;
        }
        return true;
    };
    Helpers.randomizeArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    return Helpers;
}());

if (!String.prototype["format"]) {
    String.prototype["format"] = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != "undefined" ? args[number] : match;
        });
    };
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localizablestring__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemValue; });



/**
 * Array of ItemValue is used in checkox, dropdown and radiogroup choices, matrix columns and rows.
 * It has two main properties: value and text. If text is empty, value is used for displaying.
 * The text property is localizable and support markdown.
 */
var ItemValue = /** @class */ (function () {
    function ItemValue(value, text) {
        if (text === void 0) { text = null; }
        this.locTextValue = new __WEBPACK_IMPORTED_MODULE_0__localizablestring__["a" /* LocalizableString */](null, true);
        var self = this;
        this.locTextValue.onGetTextCallback = function (text) {
            return text ? text : !self.isValueEmpty ? self.value.toString() : null;
        };
        if (text)
            this.locText.text = text;
        this.value = value;
    }
    ItemValue.createArray = function (locOwner) {
        var items = [];
        ItemValue.setupArray(items, locOwner);
        return items;
    };
    ItemValue.setupArray = function (items, locOwner) {
        items.push = function (value) {
            var result = Array.prototype.push.call(this, value);
            value.locOwner = locOwner;
            return result;
        };
        items.splice = function (start, deleteCount) {
            var items = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                items[_i - 2] = arguments[_i];
            }
            var result = (_a = Array.prototype.splice).call.apply(_a, [this,
                start,
                deleteCount].concat(items));
            if (!items)
                items = [];
            for (var i = 0; i < items.length; i++) {
                items[i].locOwner = locOwner;
            }
            return result;
            var _a;
        };
    };
    ItemValue.setData = function (items, values) {
        items.length = 0;
        for (var i = 0; i < values.length; i++) {
            var value = values[i];
            var item = new ItemValue(null);
            item.setData(value);
            items.push(item);
        }
    };
    ItemValue.getData = function (items) {
        var result = new Array();
        for (var i = 0; i < items.length; i++) {
            result.push(items[i].getData());
        }
        return result;
    };
    ItemValue.getItemByValue = function (items, val) {
        for (var i = 0; i < items.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].isTwoValueEquals(items[i].value, val))
                return items[i];
        }
        return null;
    };
    ItemValue.getTextOrHtmlByValue = function (items, val) {
        var item = ItemValue.getItemByValue(items, val);
        return item !== null ? item.locText.textOrHtml : "";
    };
    ItemValue.NotifyArrayOnLocaleChanged = function (items) {
        for (var i = 0; i < items.length; i++) {
            items[i].locText.onChanged();
        }
    };
    ItemValue.prototype.getType = function () {
        return "itemvalue";
    };
    Object.defineProperty(ItemValue.prototype, "locText", {
        get: function () {
            return this.locTextValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "locOwner", {
        get: function () {
            return this.locText.owner;
        },
        set: function (value) {
            this.locText.owner = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "value", {
        get: function () {
            return this.itemValue;
        },
        set: function (newValue) {
            this.itemValue = newValue;
            if (!this.itemValue)
                return;
            var str = this.itemValue.toString();
            var index = str.indexOf(ItemValue.Separator);
            if (index > -1) {
                this.itemValue = str.slice(0, index);
                this.text = str.slice(index + 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "hasText", {
        get: function () {
            return this.locText.pureText ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "text", {
        get: function () {
            return this.locText.text;
        },
        set: function (newText) {
            this.locText.text = newText;
        },
        enumerable: true,
        configurable: true
    });
    ItemValue.prototype.getData = function () {
        var customAttributes = this.getCustomAttributes();
        var textJson = this.locText.getJson();
        if (!customAttributes && !textJson)
            return this.value;
        var value = this.value;
        if (value && value["pos"])
            delete value["pos"];
        var result = { value: value };
        if (textJson)
            result["text"] = textJson;
        if (customAttributes) {
            for (var key in customAttributes) {
                result[key] = customAttributes[key];
            }
        }
        return result;
    };
    ItemValue.prototype.setData = function (value) {
        if (typeof value.value !== "undefined") {
            var exception = null;
            if (this.isObjItemValue(value)) {
                value.itemValue = value.itemValue;
                this.locText.setJson(value.locText.getJson());
                exception = ItemValue.itemValueProp;
            }
            this.copyAttributes(value, exception);
        }
        else {
            this.value = value;
        }
    };
    Object.defineProperty(ItemValue.prototype, "isValueEmpty", {
        get: function () {
            return !this.itemValue && this.itemValue !== 0 && this.itemValue !== false;
        },
        enumerable: true,
        configurable: true
    });
    ItemValue.prototype.isObjItemValue = function (obj) {
        return typeof obj.getType !== "undefined" && obj.getType() == "itemvalue";
    };
    ItemValue.prototype.copyAttributes = function (src, exceptons) {
        for (var key in src) {
            if (typeof src[key] == "function")
                continue;
            if (exceptons && exceptons.indexOf(key) > -1)
                continue;
            if (key == "text") {
                this.locText.setJson(src[key]);
            }
            else {
                this[key] = src[key];
            }
        }
    };
    ItemValue.prototype.getCustomAttributes = function () {
        var result = null;
        for (var key in this) {
            if (typeof this[key] == "function" ||
                ItemValue.itemValueProp.indexOf(key) > -1 ||
                key == "itemValue")
                continue;
            if (result == null)
                result = {};
            result[key] = this[key];
        }
        return result;
    };
    ItemValue.Separator = "|";
    ItemValue.itemValueProp = [
        "text",
        "value",
        "hasText",
        "locOwner",
        "locText",
        "isValueEmpty",
        "locTextValue",
        "pos"
    ];
    return ItemValue;
}());

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("itemvalue", [
    "!value",
    {
        name: "text",
        onGetValue: function (obj) {
            return obj.locText.pureText;
        }
    }
]);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultStandardCss; });
var surveyCss = {
    currentType: "",
    getCss: function () {
        var loc = this.currentType ? this[this.currentType] : defaultStandardCss;
        if (!loc)
            loc = defaultStandardCss;
        return loc;
    }
};
var defaultStandardCss = {
    root: "sv_main sv_default_css",
    header: "sv_header",
    body: "sv_body",
    footer: "sv_nav",
    navigationButton: "",
    completedPage: "sv_completed_page",
    navigation: {
        complete: "sv_complete_btn",
        prev: "sv_prev_btn",
        next: "sv_next_btn",
        start: "sv_start_btn"
    },
    progress: "sv_progress",
    progressBar: "sv_progress_bar",
    page: {
        root: "sv_p_root",
        title: "",
        description: ""
    },
    // TODO: move to the page object
    pageTitle: "sv_page_title",
    pageDescription: "",
    row: "sv_row",
    question: {
        mainRoot: "sv_q sv_qstn",
        title: "sv_q_title",
        description: "sv_q_description",
        comment: "",
        required: "",
        titleRequired: "",
        indent: 20,
        footer: "sv_q_footer"
    },
    panel: { title: "sv_p_title", description: "", container: "sv_p_container" },
    error: { root: "sv_q_erbox", icon: "", item: "" },
    boolean: { root: "sv_qcbc sv_qbln", item: "sv_q_checkbox" },
    checkbox: {
        root: "sv_qcbc sv_qcbx",
        item: "sv_q_checkbox",
        label: "sv_q_checkbox_label",
        itemControl: "sv_q_checkbox_control_item",
        controlLabel: "sv_q_checkbox_control_label",
        other: "sv_q_other sv_q_checkbox_other"
    },
    comment: "",
    dropdown: {
        root: "",
        control: "sv_q_dropdown_control",
        selectWrapper: "sv_select_wrapper",
        other: "sv_q_other"
    },
    matrix: { root: "sv_q_matrix", label: "sv_q_m_label" },
    matrixdropdown: { root: "sv_q_matrix_dropdown" },
    matrixdynamic: {
        root: "sv_q_matrix_dynamic",
        button: "sv_matrix_dynamic_button"
    },
    paneldynamic: { root: "sv_panel_dynamic", title: "sv_p_title", button: "" },
    multipletext: {
        root: "sv_q_mt",
        itemTitle: "sv_q_mt_title",
        row: "sv_q_mt_row",
        itemValue: "sv_q_mt_item_value sv_q_text_root"
    },
    radiogroup: {
        root: "sv_qcbc",
        item: "sv_q_radiogroup",
        label: "sv_q_radiogroup_label",
        itemControl: "sv_q_radiogroup_control_item",
        controlLabel: "",
        other: "sv_q_other sv_q_radiogroup_other"
    },
    rating: {
        root: "sv_q_rating",
        item: "sv_q_rating_item",
        selected: "active",
        minText: "sv_q_rating_min_text",
        itemText: "sv_q_rating_item_text",
        maxText: "sv_q_rating_max_text"
    },
    text: "sv_q_text_root",
    expression: "",
    file: {
        root: "sv_q_file",
        placeholderInput: "sv_q_file_placeholder",
        preview: "sv_q_file_preview",
        removeButton: "sv_q_file_remove_button"
    },
    saveData: {
        root: "",
        saving: "",
        error: "",
        success: "",
        saveAgainButton: ""
    },
    window: {
        root: "sv_window",
        body: "sv_window_content",
        header: {
            root: "sv_window_title",
            title: "",
            button: "",
            buttonExpanded: "",
            buttonCollapsed: ""
        }
    }
};
surveyCss["standard"] = defaultStandardCss;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koquestion__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionSelectBaseImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionCheckboxBaseImplementor; });



var QuestionSelectBaseImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionSelectBaseImplementor, _super);
    function QuestionSelectBaseImplementor(question) {
        var _this = _super.call(this, question) || this;
        var self = _this;
        _this.koOtherVisible = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            self.koValue();
            return self.isOtherSelected;
        });
        _this.koVisibleChoices = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](self.question.visibleChoices);
        question.choicesChangedCallback = function () {
            self.koVisibleChoices(self.question.visibleChoices);
        };
        _this.question["koOtherVisible"] = _this.koOtherVisible;
        _this.question["koVisibleChoices"] = _this.koVisibleChoices;
        return _this;
    }
    Object.defineProperty(QuestionSelectBaseImplementor.prototype, "isOtherSelected", {
        get: function () {
            return this.question.isOtherSelected;
        },
        enumerable: true,
        configurable: true
    });
    return QuestionSelectBaseImplementor;
}(__WEBPACK_IMPORTED_MODULE_2__koquestion__["a" /* QuestionImplementor */]));

var QuestionCheckboxBaseImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxBaseImplementor, _super);
    function QuestionCheckboxBaseImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koWidth = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.colWidth);
        _this.question["koWidth"] = _this.koWidth;
        _this.question["koAfterRender"] = _this.koAfterRender;
        var self = _this;
        _this.question.colCountChangedCallback = function () {
            self.onColCountChanged();
        };
        return _this;
    }
    QuestionCheckboxBaseImplementor.prototype.onColCountChanged = function () {
        this.question["koWidth"] = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.colWidth);
    };
    Object.defineProperty(QuestionCheckboxBaseImplementor.prototype, "colWidth", {
        get: function () {
            var colCount = this.question.colCount;
            return colCount > 0 ? 100 / colCount + "%" : "";
        },
        enumerable: true,
        configurable: true
    });
    QuestionCheckboxBaseImplementor.prototype.koAfterRender = function (el, con) {
        var tEl = el[0];
        if (tEl.nodeName == "#text")
            tEl.data = "";
        tEl = el[el.length - 1];
        if (tEl.nodeName == "#text")
            tEl.data = "";
    };
    return QuestionCheckboxBaseImplementor;
}(QuestionSelectBaseImplementor));



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conditionsParser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functionsfactory__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditionProcessValue__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Operand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FunctionOperand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ExpressionOperand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ConditionOperand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConditionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ExpressionRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionRunner; });




var Operand = /** @class */ (function () {
    function Operand(origionalValue) {
        this.origionalValue = origionalValue;
    }
    Operand.prototype.getValue = function (processValue) {
        var res = this.getSimpleValue(this.origionalValue);
        if (res.isSimple)
            return res.value;
        var val = this.removeQuotesAndEscapes(this.origionalValue);
        if (processValue) {
            var name = this.getValueName(val);
            if (name) {
                if (!processValue.hasValue(name))
                    return null;
                val = processValue.getValue(name);
                return this.getSimpleValue(val).value;
            }
        }
        return val;
    };
    Object.defineProperty(Operand.prototype, "isBoolean", {
        get: function () {
            return this.isBooleanValue(this.origionalValue);
        },
        enumerable: true,
        configurable: true
    });
    Operand.prototype.toString = function () {
        var val = this.origionalValue;
        if (val && (!this.isNumeric(val) && !this.isBooleanValue(val)))
            val = "'" + val + "'";
        return val;
    };
    Operand.prototype.removeQuotesAndEscapes = function (val) {
        if (val.length > 0 && (val[0] == "'" || val[0] == '"'))
            val = val.substr(1);
        var len = val.length;
        if (len > 0 && (val[len - 1] == "'" || val[len - 1] == '"'))
            val = val.substr(0, len - 1);
        if (val) {
            val = val.replace("\\'", "'");
            val = val.replace('\\"', '"');
        }
        return val;
    };
    Operand.prototype.getValueName = function (val) {
        if (val.length < 3 || val[0] != "{" || val[val.length - 1] != "}")
            return null;
        return val.substr(1, val.length - 2);
    };
    Operand.prototype.isBooleanValue = function (value) {
        return (value &&
            (value.toLowerCase() === "true" || value.toLowerCase() === "false"));
    };
    Operand.prototype.isNumeric = function (value) {
        if (value &&
            (value.indexOf("-") > -1 ||
                value.indexOf("+") > 1 ||
                value.indexOf("*") > -1 ||
                value.indexOf("/") > -1 ||
                value.indexOf("%") > -1))
            return false;
        var val = parseFloat(value);
        if (isNaN(val))
            return false;
        return isFinite(val);
    };
    Operand.prototype.getSimpleValue = function (val) {
        var res = { isSimple: false, value: val };
        if (val === undefined || val === "undefined") {
            res.value = null;
            res.isSimple = true;
            return res;
        }
        if (!val || typeof val != "string") {
            res.isSimple = true;
            return res;
        }
        if (this.isNumeric(val)) {
            res.isSimple = true;
            res.value = parseFloat(val);
            return res;
        }
        if (this.isBooleanValue(val)) {
            res.value = val.toLowerCase() == "true";
            res.isSimple = true;
            return res;
        }
        return res;
    };
    return Operand;
}());

var FunctionOperand = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](FunctionOperand, _super);
    function FunctionOperand(origionalValue) {
        var _this = _super.call(this, origionalValue) || this;
        _this.origionalValue = origionalValue;
        _this.parameters = new Array();
        return _this;
    }
    FunctionOperand.prototype.getValue = function (processValue) {
        var paramValues = [];
        for (var i = 0; i < this.parameters.length; i++) {
            paramValues.push(this.parameters[i].getValue(processValue));
        }
        return __WEBPACK_IMPORTED_MODULE_2__functionsfactory__["a" /* FunctionFactory */].Instance.run(this.origionalValue, paramValues);
    };
    FunctionOperand.prototype.toString = function () {
        var res = this.origionalValue + "(";
        for (var i = 0; i < this.parameters.length; i++) {
            if (i > 0)
                res += ", ";
            res += this.parameters[i].toString();
        }
        return res;
    };
    return FunctionOperand;
}(Operand));

var ExpressionOperand = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ExpressionOperand, _super);
    function ExpressionOperand() {
        return _super.call(this, null) || this;
    }
    ExpressionOperand.prototype.getValue = function (processValue) {
        if (!this.left || !this.right)
            return null;
        var l = this.left.getValue(processValue);
        var r = this.right.getValue(processValue);
        if (this.operator == "+") {
            return l + r;
        }
        if (this.operator == "-") {
            return l - r;
        }
        if (this.operator == "*") {
            return l * r;
        }
        if (this.operator == "/") {
            if (!r)
                return null;
            return l / r;
        }
        if (this.operator == "%") {
            if (!r)
                return null;
            return l % r;
        }
        return null;
    };
    ExpressionOperand.prototype.toString = function () {
        var res = this.left ? this.left.toString() : "";
        res += " " + this.operator + " ";
        if (this.right)
            res += this.right.toString();
        return res;
    };
    return ExpressionOperand;
}(Operand));

var ConditionOperand = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ConditionOperand, _super);
    function ConditionOperand(root) {
        if (root === void 0) { root = null; }
        var _this = _super.call(this, null) || this;
        if (root)
            _this.root = root;
        return _this;
    }
    ConditionOperand.prototype.getValue = function (processValue) {
        if (!this.root)
            return false;
        this.processValue = processValue;
        return this.runNode(this.root);
    };
    ConditionOperand.prototype.toString = function () {
        return this.root ? this.root.toString() : "";
    };
    ConditionOperand.prototype.runNode = function (node) {
        var onFirstFail = node.connective == "and";
        for (var i = 0; i < node.children.length; i++) {
            var res = this.runNodeCondition(node.children[i]);
            if (!res && onFirstFail)
                return false;
            if (res && !onFirstFail)
                return true;
        }
        return onFirstFail;
    };
    ConditionOperand.prototype.runNodeCondition = function (value) {
        if (value["children"])
            return this.runNode(value);
        if (value["left"])
            return this.runCondition(value);
        return false;
    };
    ConditionOperand.prototype.runCondition = function (condition) {
        return condition.performExplicit(condition.left, condition.right, this.processValue);
    };
    return ConditionOperand;
}(Operand));

var Condition = /** @class */ (function () {
    function Condition() {
        this.opValue = "equal";
        this.leftValue = null;
        this.rightValue = null;
    }
    Object.defineProperty(Condition, "operators", {
        get: function () {
            if (Condition.operatorsValue != null)
                return Condition.operatorsValue;
            Condition.operatorsValue = {
                empty: function (left, right) {
                    if (left == null)
                        return true;
                    return !left;
                },
                notempty: function (left, right) {
                    if (left == null)
                        return false;
                    return !!left;
                },
                equal: function (left, right) {
                    if ((left == null && right != null) || (left != null && right == null))
                        return false;
                    if (left == null && right == null)
                        return true;
                    return left == right;
                },
                notequal: function (left, right) {
                    if ((left == null && right != null) || (left != null && right == null))
                        return true;
                    if (left == null && right == null)
                        return false;
                    return left != right;
                },
                contains: function (left, right) {
                    return Condition.operatorsValue.containsCore(left, right, true);
                },
                notcontains: function (left, right) {
                    return Condition.operatorsValue.containsCore(left, right, false);
                },
                containsCore: function (left, right, isContains) {
                    if (!left)
                        return false;
                    if (!left.length) {
                        left = left.toString();
                    }
                    if (typeof left === "string" || left instanceof String) {
                        if (!right)
                            return false;
                        right = right.toString();
                        var found = left.indexOf(right) > -1;
                        return isContains ? found : !found;
                    }
                    for (var i = 0; i < left.length; i++) {
                        if (left[i] == right)
                            return isContains;
                    }
                    return !isContains;
                },
                greater: function (left, right) {
                    if (left == null || right == null)
                        return false;
                    return left > right;
                },
                less: function (left, right) {
                    if (left == null || right == null)
                        return false;
                    return left < right;
                },
                greaterorequal: function (left, right) {
                    if (left == null || right == null)
                        return false;
                    return left >= right;
                },
                lessorequal: function (left, right) {
                    if (left == null || right == null)
                        return false;
                    return left <= right;
                }
            };
            return Condition.operatorsValue;
        },
        enumerable: true,
        configurable: true
    });
    Condition.getOperator = function (opName) {
        return Condition.operators[opName];
    };
    Condition.setOperator = function (opName, func) {
        Condition.operators[opName] = func;
    };
    Condition.isCorrectOperator = function (opName) {
        if (!opName)
            return false;
        opName = opName.toLowerCase();
        return Condition.operators[opName] != undefined;
    };
    Condition.isNoRightOperation = function (op) {
        return op == "empty" || op == "notempty";
    };
    Object.defineProperty(Condition.prototype, "left", {
        get: function () {
            return this.leftValue;
        },
        set: function (val) {
            this.leftValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Condition.prototype, "right", {
        get: function () {
            return this.rightValue;
        },
        set: function (val) {
            this.rightValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Condition.prototype, "operator", {
        get: function () {
            return this.opValue;
        },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (!Condition.operators[value])
                return;
            this.opValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Condition.prototype.perform = function (left, right, processValue) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        if (processValue === void 0) { processValue = null; }
        if (!left)
            left = this.left;
        if (!right)
            right = this.right;
        return this.performExplicit(left, right, processValue);
    };
    Condition.prototype.performExplicit = function (left, right, processValue) {
        var leftValue = left ? left.getValue(processValue) : null;
        if (!right && (leftValue === true || leftValue === false))
            return leftValue;
        var rightValue = right ? right.getValue(processValue) : null;
        return Condition.operators[this.operator](leftValue, rightValue);
    };
    Condition.prototype.toString = function () {
        if (!this.right || !this.operator)
            return "";
        var left = this.left.toString();
        var res = left + " " + this.operationToString();
        if (Condition.isNoRightOperation(this.operator))
            return res;
        var right = this.right.toString();
        return res + " " + right;
    };
    Condition.prototype.operationToString = function () {
        var op = this.operator;
        if (op == "equal")
            return "=";
        if (op == "notequal")
            return "!=";
        if (op == "greater")
            return ">";
        if (op == "less")
            return "<";
        if (op == "greaterorequal")
            return ">=";
        if (op == "lessorequal")
            return "<=";
        return op;
    };
    Condition.operatorsValue = null;
    return Condition;
}());

var ConditionNode = /** @class */ (function () {
    function ConditionNode() {
        this.connectiveValue = "and";
        this.children = [];
    }
    Object.defineProperty(ConditionNode.prototype, "connective", {
        get: function () {
            return this.connectiveValue;
        },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (value == "&" || value == "&&")
                value = "and";
            if (value == "|" || value == "||")
                value = "or";
            if (value != "and" && value != "or")
                return;
            this.connectiveValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConditionNode.prototype, "isEmpty", {
        get: function () {
            return this.children.length == 0;
        },
        enumerable: true,
        configurable: true
    });
    ConditionNode.prototype.clear = function () {
        this.children = [];
        this.connective = "and";
    };
    ConditionNode.prototype.toString = function () {
        if (this.isEmpty)
            return "";
        var res = "";
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            var nodeText = child.toString();
            if (child.children && child.children.length > 0) {
                nodeText = "(" + nodeText + ")";
            }
            if (nodeText) {
                if (res)
                    res += " " + this.connective + " ";
                res += nodeText;
            }
        }
        return res;
    };
    return ConditionNode;
}());

var ExpressionRunner = /** @class */ (function () {
    function ExpressionRunner(expression) {
        this.expression = expression;
        this.processValue = new __WEBPACK_IMPORTED_MODULE_3__conditionProcessValue__["a" /* ProcessValue */]();
    }
    Object.defineProperty(ExpressionRunner.prototype, "expression", {
        get: function () {
            return this.expressionValue;
        },
        set: function (value) {
            if (this.expression == value)
                return;
            this.expressionValue = value;
            this.operand = new __WEBPACK_IMPORTED_MODULE_1__conditionsParser__["a" /* ConditionsParser */]().parseExpression(this.expressionValue);
        },
        enumerable: true,
        configurable: true
    });
    ExpressionRunner.prototype.run = function (values) {
        if (!this.operand)
            return null;
        this.processValue.values = values;
        return this.operand.getValue(this.processValue);
    };
    return ExpressionRunner;
}());

var ConditionRunner = /** @class */ (function () {
    function ConditionRunner(expression) {
        this.root = new ConditionNode();
        this.expression = expression;
    }
    Object.defineProperty(ConditionRunner.prototype, "expression", {
        get: function () {
            return this.expressionValue;
        },
        set: function (value) {
            if (this.expression == value)
                return;
            this.expressionValue = value;
            new __WEBPACK_IMPORTED_MODULE_1__conditionsParser__["a" /* ConditionsParser */]().parse(this.expressionValue, this.root);
        },
        enumerable: true,
        configurable: true
    });
    ConditionRunner.prototype.run = function (values) {
        var condition = new ConditionOperand(this.root);
        var processValue = new __WEBPACK_IMPORTED_MODULE_3__conditionProcessValue__["a" /* ProcessValue */]();
        processValue.values = values;
        return condition.getValue(processValue);
    };
    return ConditionRunner;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessValue; });

var ProcessValue = /** @class */ (function () {
    function ProcessValue() {
        this.values = null;
    }
    ProcessValue.prototype.getFirstName = function (text) {
        if (!text)
            return text;
        var res = "";
        for (var i = 0; i < text.length; i++) {
            var ch = text[i];
            if (ch == "." || ch == "[")
                break;
            res += ch;
        }
        return res;
    };
    ProcessValue.prototype.hasValue = function (text, values) {
        if (values === void 0) { values = null; }
        if (!values)
            values = this.values;
        var res = this.getValueCore(text, values);
        return res.hasValue;
    };
    ProcessValue.prototype.getValue = function (text, values) {
        if (values === void 0) { values = null; }
        if (!values)
            values = this.values;
        var res = this.getValueCore(text, values);
        return res.value;
    };
    ProcessValue.prototype.getValueCore = function (text, values) {
        var res = { hasValue: false, value: null };
        var curValue = values;
        if (!curValue)
            return res;
        var isFirst = true;
        while (text && text.length > 0) {
            var isArray = !isFirst && text[0] == "[";
            if (!isArray) {
                if (!isFirst)
                    text = text.substr(1);
                var curName = this.getFirstName(text);
                if (!curName)
                    return res;
                if (__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* Helpers */].isValueEmpty(curValue[curName]))
                    return res;
                curValue = curValue[curName];
                text = text.substr(curName.length);
            }
            else {
                if (!Array.isArray(curValue))
                    return res;
                var index = 1;
                var str = "";
                while (index < text.length && text[index] != "]") {
                    str += text[index];
                    index++;
                }
                text = index < text.length ? text.substr(index + 1) : "";
                index = this.getIntValue(str);
                if (index < 0 || index >= curValue.length)
                    return res;
                curValue = curValue[index];
            }
            isFirst = false;
        }
        res.value = curValue;
        res.hasValue = true;
        return res;
    };
    ProcessValue.prototype.getIntValue = function (str) {
        if (str == "0" || ((str | 0) > 0 && str % 1 == 0))
            return Number(str);
        return -1;
    };
    return ProcessValue;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__textPreProcessor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conditionProcessValue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return matrixDropdownColumnTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MatrixDropdownColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MatrixDropdownCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatrixDropdownRowModelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDropdownModelBase; });










function onUpdateSelectBaseCellQuestion(cellQuestion, column, question, data) {
    if (cellQuestion.hasOther) {
        cellQuestion.storeOthersAsComment = false;
    }
    if ((!cellQuestion.choices || cellQuestion.choices.length == 0) &&
        cellQuestion.choicesByUrl.isEmpty) {
        cellQuestion.choices = question.choices;
    }
    if (!cellQuestion.choicesByUrl.isEmpty) {
        cellQuestion.choicesByUrl.run(data);
    }
}
var matrixDropdownColumnTypes = {
    dropdown: {
        properties: [
            "choices",
            "choicesOrder",
            "choicesByUrl",
            "optionsCaption",
            "otherText"
        ],
        onCellQuestionUpdate: function (cellQuestion, column, question, data) {
            onUpdateSelectBaseCellQuestion(cellQuestion, column, question, data);
            if (!cellQuestion.optionsCaption)
                cellQuestion.optionsCaption = question.optionsCaption;
        }
    },
    checkbox: {
        properties: ["choices", "choicesOrder", "choicesByUrl", "otherText"],
        onCellQuestionUpdate: function (cellQuestion, column, question, data) {
            onUpdateSelectBaseCellQuestion(cellQuestion, column, question, data);
            cellQuestion.colCount =
                column.colCount > -1 ? column.colCount : question.columnColCount;
        }
    },
    radiogroup: {
        properties: ["choices", "choicesOrder", "choicesByUrl", "otherText"],
        onCellQuestionUpdate: function (cellQuestion, column, question, data) {
            onUpdateSelectBaseCellQuestion(cellQuestion, column, question, data);
            cellQuestion.colCount =
                column.colCount > -1 ? column.colCount : question.columnColCount;
        }
    },
    text: {
        properties: ["placeHolder", "inputType"],
        onCellQuestionUpdate: function (cellQuestion, column, question, data) { }
    },
    comment: {
        properties: ["placeHolder"],
        onCellQuestionUpdate: function (cellQuestion, column, question, data) { }
    },
    boolean: {
        properties: ["defaultValue"],
        onCellQuestionUpdate: function (cellQuestion, column, question, data) {
            cellQuestion.showTitle = true;
        }
    },
    expression: {
        properties: ["expression"],
        onCellQuestionUpdate: function (cellQuestion, column, question, data) { }
    }
};
var MatrixDropdownColumn = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdownColumn, _super);
    function MatrixDropdownColumn(name, title) {
        if (title === void 0) { title = null; }
        var _this = _super.call(this) || this;
        _this.colOwnerValue = null;
        _this.updateTemplateQuestion();
        _this.name = name;
        if (title)
            _this.title = title;
        return _this;
    }
    MatrixDropdownColumn.getColumnTypes = function () {
        var res = [];
        for (var key in matrixDropdownColumnTypes) {
            res.push(key);
        }
        return res;
    };
    MatrixDropdownColumn.prototype.getDynamicPropertyName = function () {
        return "cellType";
    };
    MatrixDropdownColumn.prototype.getDynamicType = function () {
        return this.calcCellQuestionType();
    };
    MatrixDropdownColumn.prototype.getDynamicProperties = function () {
        var qType = this.calcCellQuestionType();
        var qDefinition = matrixDropdownColumnTypes[qType];
        if (qDefinition)
            return qDefinition.properties;
        return [];
    };
    Object.defineProperty(MatrixDropdownColumn.prototype, "colOwner", {
        get: function () {
            return this.colOwnerValue;
        },
        set: function (value) {
            this.colOwnerValue = value;
            this.updateTemplateQuestion();
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownColumn.prototype.getType = function () {
        return "matrixdropdowncolumn";
    };
    Object.defineProperty(MatrixDropdownColumn.prototype, "cellType", {
        get: function () {
            return this.getPropertyValue("cellType", "default");
        },
        set: function (val) {
            val = val.toLocaleLowerCase();
            this.setPropertyValue("cellType", val);
            this.updateTemplateQuestion();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "templateQuestion", {
        get: function () {
            return this.templateQuestionValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "name", {
        get: function () {
            return this.templateQuestion.name;
        },
        set: function (val) {
            this.templateQuestion.name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "title", {
        get: function () {
            return this.templateQuestion.title;
        },
        set: function (val) {
            this.templateQuestion.title = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "locTitle", {
        get: function () {
            return this.templateQuestion.locTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "fullTitle", {
        get: function () {
            return this.getFullTitle(this.locTitle.textOrHtml);
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownColumn.prototype.getFullTitle = function (str) {
        if (!str)
            str = this.name;
        if (this.isRequired) {
            var requireText = this.colOwner ? this.colOwner.getRequiredText() : "";
            if (requireText)
                requireText += " ";
            str = requireText + str;
        }
        return str;
    };
    Object.defineProperty(MatrixDropdownColumn.prototype, "isRequired", {
        get: function () {
            return this.templateQuestion.isRequired;
        },
        set: function (val) {
            this.templateQuestion.isRequired = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "readOnly", {
        get: function () {
            return this.templateQuestion.readOnly;
        },
        set: function (val) {
            this.templateQuestion.readOnly = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "hasOther", {
        get: function () {
            return this.templateQuestion.hasOther;
        },
        set: function (val) {
            this.templateQuestion.hasOther = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "visibleIf", {
        get: function () {
            return this.templateQuestion.visibleIf;
        },
        set: function (val) {
            this.templateQuestion.visibleIf = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "enableIf", {
        get: function () {
            return this.templateQuestion.enableIf;
        },
        set: function (val) {
            this.templateQuestion.enableIf = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "validators", {
        get: function () {
            return this.templateQuestion.validators;
        },
        set: function (val) {
            this.templateQuestion.validators = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "minWidth", {
        get: function () {
            return this.getPropertyValue("minWidth", "");
        },
        set: function (val) {
            this.setPropertyValue("minWidth", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "colCount", {
        get: function () {
            return this.getPropertyValue("colCount", -1);
        },
        set: function (val) {
            if (val < -1 || val > 4)
                return;
            this.setPropertyValue("colCount", val);
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownColumn.prototype.getLocale = function () {
        return this.colOwner ? this.colOwner.getLocale() : "";
    };
    MatrixDropdownColumn.prototype.getMarkdownHtml = function (text) {
        return this.colOwner ? this.colOwner.getMarkdownHtml(text) : null;
    };
    MatrixDropdownColumn.prototype.createCellQuestion = function (data) {
        var qType = this.calcCellQuestionType();
        var cellQuestion = this.createNewQuestion(qType);
        this.updateCellQuestion(cellQuestion, data);
        return cellQuestion;
    };
    MatrixDropdownColumn.prototype.updateCellQuestion = function (cellQuestion, data) {
        this.setQuestionProperties(cellQuestion);
        var qType = this.calcCellQuestionType();
        var qDefinition = matrixDropdownColumnTypes[qType];
        if (qDefinition && qDefinition["onCellQuestionUpdate"]) {
            qDefinition["onCellQuestionUpdate"](cellQuestion, this, this.colOwner, data);
        }
    };
    MatrixDropdownColumn.prototype.defaultCellTypeChanged = function () {
        this.updateTemplateQuestion();
    };
    MatrixDropdownColumn.prototype.calcCellQuestionType = function () {
        if (this.cellType !== "default")
            return this.cellType;
        if (this.colOwner)
            return this.colOwner.getCellType();
        return "dropdown";
    };
    MatrixDropdownColumn.prototype.updateTemplateQuestion = function () {
        var prevCellType = this.templateQuestion
            ? this.templateQuestion.getType()
            : "";
        var curCellType = this.calcCellQuestionType();
        if (curCellType === prevCellType)
            return;
        if (this.templateQuestion) {
            this.removeProperties(prevCellType);
        }
        this.templateQuestionValue = this.createNewQuestion(curCellType);
        this.templateQuestion.locOwner = this;
        this.addProperties(curCellType);
        var self = this;
        this.templateQuestion.locTitle.onRenderedHtmlCallback = function (text) {
            return self.getFullTitle(text);
        };
        this.templateQuestion.onPropertyChanged.add(function () {
            self.doColumnPropertiesChanged();
        });
    };
    MatrixDropdownColumn.prototype.createNewQuestion = function (cellType) {
        var question = __WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.createClass(cellType);
        this.setQuestionProperties(question);
        return question;
    };
    MatrixDropdownColumn.prototype.setQuestionProperties = function (question) {
        if (this.templateQuestion) {
            var json = new __WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */]().toJsonObject(this.templateQuestion);
            json.type = question.getType();
            new __WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */]().toObject(json, question);
        }
    };
    MatrixDropdownColumn.prototype.propertyValueChanged = function (name, oldValue, newValue) {
        _super.prototype.propertyValueChanged.call(this, name, oldValue, newValue);
        this.doColumnPropertiesChanged();
    };
    MatrixDropdownColumn.prototype.doColumnPropertiesChanged = function () {
        if (this.colOwner != null && !this.isLoadingFromJson) {
            this.colOwner.onColumnPropertiesChanged(this);
        }
    };
    MatrixDropdownColumn.prototype.getProperties = function (curCellType) {
        var qDef = matrixDropdownColumnTypes[curCellType];
        if (!qDef || !qDef.properties)
            return [];
        return __WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.findProperties(curCellType, qDef.properties);
    };
    MatrixDropdownColumn.prototype.removeProperties = function (curCellType) {
        var properties = this.getProperties(curCellType);
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            delete this[prop.name];
            if (prop.serializationProperty) {
                delete this[prop.serializationProperty];
            }
        }
    };
    MatrixDropdownColumn.prototype.addProperties = function (curCellType) {
        var question = this.templateQuestion;
        var properties = this.getProperties(curCellType);
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            this.addProperty(question, prop.name, false);
            if (prop.serializationProperty) {
                this.addProperty(question, prop.serializationProperty, true);
            }
        }
    };
    MatrixDropdownColumn.prototype.addProperty = function (question, propName, isReadOnly) {
        var desc = {
            configurable: true,
            get: function () {
                return question[propName];
            }
        };
        if (!isReadOnly) {
            desc["set"] = function (v) {
                question[propName] = v;
            };
        }
        Object.defineProperty(this, propName, desc);
    };
    return MatrixDropdownColumn;
}(__WEBPACK_IMPORTED_MODULE_4__base__["a" /* Base */]));

var MatrixDropdownCell = /** @class */ (function () {
    function MatrixDropdownCell(column, row, data) {
        var _this = this;
        this.column = column;
        this.row = row;
        this.data = data;
        this.questionValue = data.createQuestion(this.row, this.column);
        this.questionValue.validateValueCallback = function () {
            return data.validateCell(row, column.name, row.value);
        };
        __WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* CustomPropertiesCollection */].getProperties(column.getType()).forEach(function (property) {
            var propertyName = property.name;
            if (column[propertyName] !== undefined &&
                _this.questionValue.getPropertyValue(propertyName, null) == null) {
                _this.questionValue[propertyName] = column[propertyName];
            }
        });
        Object.keys(column).forEach(function (key) { });
        this.questionValue.updateCustomWidget();
    }
    Object.defineProperty(MatrixDropdownCell.prototype, "question", {
        get: function () {
            return this.questionValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownCell.prototype, "value", {
        get: function () {
            return this.question.value;
        },
        set: function (value) {
            this.question.value = value;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownCell.prototype.runCondition = function (values) {
        this.question.runCondition(values);
    };
    return MatrixDropdownCell;
}());

var MatrixDropdownRowModelBase = /** @class */ (function () {
    function MatrixDropdownRowModelBase(data, value) {
        this.rowValues = {};
        this.isSettingValue = false;
        this.cells = [];
        this.data = data;
        this.value = value;
        this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_5__textPreProcessor__["a" /* TextPreProcessor */]();
        var self = this;
        this.textPreProcessor.onProcess = function (textValue) {
            self.getProcessedTextValue(textValue);
        };
        for (var i = 0; i < this.data.columns.length; i++) {
            if (this.rowValues[this.data.columns[i].name] === undefined) {
                this.rowValues[this.data.columns[i].name] = null;
            }
        }
        this.idValue = MatrixDropdownRowModelBase.getId();
    }
    MatrixDropdownRowModelBase.getId = function () {
        return "srow_" + MatrixDropdownRowModelBase.idCounter++;
    };
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "id", {
        get: function () {
            return this.idValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "rowName", {
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "value", {
        get: function () {
            return this.rowValues;
        },
        set: function (value) {
            this.isSettingValue = true;
            this.rowValues = {};
            if (value != null) {
                for (var key in value) {
                    this.rowValues[key] = value[key];
                }
            }
            for (var i = 0; i < this.cells.length; i++) {
                this.cells[i].question.onSurveyValueChanged(this.getValue(this.cells[i].column.name));
            }
            this.isSettingValue = false;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownRowModelBase.prototype.getAllValues = function () {
        return this.value;
    };
    MatrixDropdownRowModelBase.prototype.onAnyValueChanged = function (name) {
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].question.onAnyValueChanged(name);
        }
    };
    MatrixDropdownRowModelBase.prototype.getValue = function (name) {
        return this.rowValues[name];
    };
    MatrixDropdownRowModelBase.prototype.setValue = function (name, newValue) {
        if (this.isSettingValue)
            return;
        if (newValue === "")
            newValue = null;
        if (newValue != null) {
            this.rowValues[name] = newValue;
        }
        else {
            delete this.rowValues[name];
        }
        this.data.onRowChanged(this, name, this.value);
        this.onAnyValueChanged("row");
    };
    MatrixDropdownRowModelBase.prototype.getComment = function (name) {
        var result = this.getValue(name + __WEBPACK_IMPORTED_MODULE_4__base__["a" /* Base */].commentPrefix);
        return result ? result : "";
    };
    MatrixDropdownRowModelBase.prototype.setComment = function (name, newValue) {
        this.setValue(name + __WEBPACK_IMPORTED_MODULE_4__base__["a" /* Base */].commentPrefix, newValue);
    };
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "isEmpty", {
        get: function () {
            var val = this.value;
            if (__WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].isValueEmpty(val))
                return true;
            for (var key in val) {
                if (val[key] !== undefined && val[key] !== null)
                    return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownRowModelBase.prototype.getQuestionByColumn = function (column) {
        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].column == column)
                return this.cells[i].question;
        }
        return null;
    };
    MatrixDropdownRowModelBase.prototype.getLocale = function () {
        return this.data ? this.data.getLocale() : "";
    };
    MatrixDropdownRowModelBase.prototype.getMarkdownHtml = function (text) {
        return this.data ? this.data.getMarkdownHtml(text) : null;
    };
    MatrixDropdownRowModelBase.prototype.onLocaleChanged = function () {
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].question.onLocaleChanged();
        }
    };
    MatrixDropdownRowModelBase.prototype.runCondition = function (values) {
        values["row"] = this.value;
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].runCondition(values);
        }
    };
    MatrixDropdownRowModelBase.prototype.buildCells = function () {
        var columns = this.data.columns;
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            this.cells.push(this.createCell(column));
        }
    };
    MatrixDropdownRowModelBase.prototype.createCell = function (column) {
        return new MatrixDropdownCell(column, this, this.data);
    };
    MatrixDropdownRowModelBase.prototype.geSurveyData = function () {
        return this;
    };
    MatrixDropdownRowModelBase.prototype.getSurvey = function () {
        return this.data ? this.data.getSurvey() : null;
    };
    //ITextProcessor
    MatrixDropdownRowModelBase.prototype.getProcessedTextValue = function (textValue) {
        var firstName = new __WEBPACK_IMPORTED_MODULE_6__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(textValue.name);
        textValue.isExists = firstName == "row";
        if (!textValue.isExists)
            return;
        //name should start with the row
        var values = { row: this.value };
        textValue.value = new __WEBPACK_IMPORTED_MODULE_6__conditionProcessValue__["a" /* ProcessValue */]().getValue(textValue.name, values);
    };
    MatrixDropdownRowModelBase.prototype.getTextProcessor = function () {
        return this;
    };
    MatrixDropdownRowModelBase.prototype.processText = function (text, returnDisplayValue) {
        text = this.textPreProcessor.process(text, returnDisplayValue);
        return this.getSurvey().processText(text, returnDisplayValue);
    };
    MatrixDropdownRowModelBase.prototype.processTextEx = function (text) {
        text = this.processText(text, true);
        var hasAllValuesOnLastRun = this.textPreProcessor.hasAllValuesOnLastRun;
        var res = this.getSurvey().processTextEx(text);
        res.hasAllValuesOnLastRun =
            res.hasAllValuesOnLastRun && hasAllValuesOnLastRun;
        return res;
    };
    MatrixDropdownRowModelBase.idCounter = 1;
    return MatrixDropdownRowModelBase;
}());

/**
 * A base class for matrix dropdown and matrix dynamic questions.
 */
var QuestionMatrixDropdownModelBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdownModelBase, _super);
    function QuestionMatrixDropdownModelBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.isRowChanging = false;
        _this.generatedVisibleRows = null;
        var self = _this;
        _this.columnsValue = _this.createNewArray("columns", function (item) {
            item.colOwner = self;
        });
        _this.choicesValue = _this.createItemValues("choices");
        _this.createLocalizableString("optionsCaption", _this);
        _this.registerFunctionOnPropertyValueChanged("columns", function () {
            self.generatedVisibleRows = null;
            self.fireCallback(self.columnsChangedCallback);
        });
        return _this;
    }
    QuestionMatrixDropdownModelBase.addDefaultColumns = function (matrix) {
        var colNames = __WEBPACK_IMPORTED_MODULE_9__questionfactory__["a" /* QuestionFactory */].DefaultColums;
        for (var i = 0; i < colNames.length; i++)
            matrix.addColumn(colNames[i]);
    };
    QuestionMatrixDropdownModelBase.prototype.getType = function () {
        return "matrixdropdownbase";
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "isAllowTitleLeft", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columns", {
        /**
         * The list of matrix columns.
         */
        get: function () {
            return this.columnsValue;
        },
        set: function (value) {
            this.setPropertyValue("columns", value);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.onMatrixRowCreated = function (row) {
        if (!this.survey)
            return;
        var options = {
            rowValue: row.value,
            row: row,
            column: null,
            columnName: null,
            cell: null,
            cellQuestion: null,
            value: null
        };
        for (var i = 0; i < this.columns.length; i++) {
            options.column = this.columns[i];
            options.columnName = options.column.name;
            var cell = row.cells[i];
            options.cell = cell;
            options.cellQuestion = cell.question;
            options.value = cell.value;
            this.survey.matrixCellCreated(this, options);
        }
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "cellType", {
        /**
         * Use this property to change the default cell type.
         */
        get: function () {
            return this.getPropertyValue("cellType", "dropdown");
        },
        set: function (val) {
            val = val.toLowerCase();
            if (this.cellType == val)
                return;
            this.setPropertyValue("cellType", val);
            this.updateColumnsCellType();
            this.fireCallback(this.updateCellsCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.updateColumnsCellType = function () {
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[i].defaultCellTypeChanged();
        }
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnColCount", {
        /**
         * The default column count for radiogroup and checkbox  cell types.
         */
        get: function () {
            return this.getPropertyValue("columnColCount", 0);
        },
        set: function (value) {
            if (value < 0 || value > 4)
                return;
            this.setPropertyValue("columnColCount", value);
            this.fireCallback(this.updateCellsCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnMinWidth", {
        /**
         * Use this property to set the mimimum column width.
         */
        get: function () {
            return this.getPropertyValue("columnMinWidth", "");
        },
        set: function (val) {
            this.setPropertyValue("columnMinWidth", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "horizontalScroll", {
        /**
         * Set this property to true to show the horizontal scroll.
         */
        get: function () {
            return this.getPropertyValue("horizontalScroll", false);
        },
        set: function (val) {
            this.setPropertyValue("horizontalScroll", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.getRequiredText = function () {
        return this.survey ? this.survey.requiredText : "";
    };
    QuestionMatrixDropdownModelBase.prototype.onColumnPropertiesChanged = function (column) {
        if (!this.generatedVisibleRows)
            return;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var row = this.generatedVisibleRows[i];
            for (var j = 0; j < row.cells.length; j++) {
                if (row.cells[j].column !== column)
                    continue;
                column.updateCellQuestion(row.cells[j].question, row);
                break;
            }
        }
    };
    QuestionMatrixDropdownModelBase.prototype.getCellType = function () {
        return this.cellType;
    };
    QuestionMatrixDropdownModelBase.prototype.runCondition = function (values) {
        _super.prototype.runCondition.call(this, values);
        this.runCellsCondition(values);
    };
    QuestionMatrixDropdownModelBase.prototype.runCellsCondition = function (values) {
        if (!this.generatedVisibleRows)
            return;
        var newValues = {};
        if (values && values instanceof Object) {
            newValues = JSON.parse(JSON.stringify(values));
        }
        newValues["row"] = {};
        var rows = this.generatedVisibleRows;
        for (var i = 0; i < rows.length; i++) {
            rows[i].runCondition(newValues);
        }
    };
    QuestionMatrixDropdownModelBase.prototype.onLocaleChanged = function () {
        _super.prototype.onLocaleChanged.call(this);
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[i].onLocaleChanged();
        }
        var rows = this.visibleRows;
        if (!rows)
            return;
        for (var i = 0; i < rows.length; i++) {
            rows[i].onLocaleChanged();
        }
        this.fireCallback(this.updateCellsCallback);
    };
    /**
     * Returns the column by it's name. Retuns null if a column with this name doesn't exist.
     * @param column
     */
    QuestionMatrixDropdownModelBase.prototype.getColumnName = function (columnName) {
        for (var i = 0; i < this.columns.length; i++) {
            if (this.columns[i].name == columnName)
                return this.columns[i];
        }
        return null;
    };
    /**
     * Returns the column width.
     * @param column
     */
    QuestionMatrixDropdownModelBase.prototype.getColumnWidth = function (column) {
        return column.minWidth ? column.minWidth : this.columnMinWidth;
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "choices", {
        /**
         * The default choices for dropdown, checkbox and radiogroup cell types.
         */
        get: function () {
            return this.choicesValue;
        },
        set: function (val) {
            this.setPropertyValue("choices", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "optionsCaption", {
        /**
         * The default options caption for dropdown cell type.
         */
        get: function () {
            return this.getLocalizableStringText("optionsCaption", __WEBPACK_IMPORTED_MODULE_8__surveyStrings__["a" /* surveyLocalization */].getString("optionsCaption"));
        },
        set: function (val) {
            this.setLocalizableStringText("optionsCaption", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "locOptionsCaption", {
        get: function () {
            return this.getLocalizableString("optionsCaption");
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.addColumn = function (name, title) {
        if (title === void 0) { title = null; }
        var column = new MatrixDropdownColumn(name, title);
        this.columnsValue.push(column);
        return column;
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "visibleRows", {
        /**
         * Returns the rows model objects that used during rendering.
         */
        get: function () {
            if (this.isLoadingFromJson)
                return;
            if (!this.generatedVisibleRows) {
                this.generatedVisibleRows = this.generateRows();
                if (this.data) {
                    this.runCellsCondition(this.data.getAllValues());
                }
            }
            return this.generatedVisibleRows;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        this.generatedVisibleRows = null;
    };
    /**
     * Returns the row value. If the row value is empty, the object is empty: {}.
     * @param rowIndex row index from 0 to visible row count - 1.
     */
    QuestionMatrixDropdownModelBase.prototype.getRowValue = function (rowIndex) {
        if (rowIndex < 0)
            return null;
        var visRows = this.visibleRows;
        if (rowIndex >= visRows.length)
            return null;
        var newValue = this.createNewValue(this.value);
        return this.getRowValueCore(visRows[rowIndex], newValue);
    };
    /**
     * Set the row value.
     * @param rowIndex row index from 0 to visible row count - 1.
     * @param rowValue an object {"column name": columnValue,... }
     */
    QuestionMatrixDropdownModelBase.prototype.setRowValue = function (rowIndex, rowValue) {
        if (rowIndex < 0)
            return null;
        var visRows = this.visibleRows;
        if (rowIndex >= visRows.length)
            return null;
        this.onRowChanged(visRows[rowIndex], "", rowValue);
        this.onValueChanged();
    };
    QuestionMatrixDropdownModelBase.prototype.generateRows = function () {
        return null;
    };
    QuestionMatrixDropdownModelBase.prototype.createNewValue = function (curValue) {
        return !curValue ? {} : curValue;
    };
    QuestionMatrixDropdownModelBase.prototype.getRowValueCore = function (row, questionValue, create) {
        if (create === void 0) { create = false; }
        var result = questionValue[row.rowName] ? questionValue[row.rowName] : null;
        if (!result && create) {
            result = {};
            questionValue[row.rowName] = result;
        }
        return result;
    };
    QuestionMatrixDropdownModelBase.prototype.getRowDisplayValue = function (row, rowValue) {
        for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];
            if (rowValue[column.name]) {
                rowValue[column.name] = row.cells[i].question.displayValue;
            }
        }
        return rowValue;
    };
    QuestionMatrixDropdownModelBase.prototype.onBeforeValueChanged = function (val) { };
    QuestionMatrixDropdownModelBase.prototype.onValueChanged = function () {
        if (this.isRowChanging)
            return;
        this.onBeforeValueChanged(this.value);
        if (!this.generatedVisibleRows || this.generatedVisibleRows.length == 0)
            return;
        this.isRowChanging = true;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var row = this.generatedVisibleRows[i];
            this.generatedVisibleRows[i].value = this.getRowValueCore(row, val);
        }
        this.isRowChanging = false;
    };
    QuestionMatrixDropdownModelBase.prototype.supportGoNextPageAutomatic = function () {
        var rows = this.generatedVisibleRows;
        if (!rows)
            rows = this.visibleRows;
        if (!rows)
            return true;
        for (var i = 0; i < rows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            if (!cells)
                continue;
            for (var colIndex = 0; colIndex < cells.length; colIndex++) {
                var question = cells[colIndex].question;
                if (question &&
                    (!question.supportGoNextPageAutomatic() || !question.value))
                    return false;
            }
        }
        return true;
    };
    QuestionMatrixDropdownModelBase.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var errosInColumns = this.hasErrorInColumns(fireCallback);
        return _super.prototype.hasErrors.call(this, fireCallback) || errosInColumns;
    };
    QuestionMatrixDropdownModelBase.prototype.getAllErrors = function () {
        var result = _super.prototype.getAllErrors.call(this);
        var rows = this.generatedVisibleRows;
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            for (var j = 0; j < row.cells.length; j++) {
                var errors = row.cells[j].question.getAllErrors();
                if (errors && errors.length > 0) {
                    result = result.concat(errors);
                }
            }
        }
        return result;
    };
    QuestionMatrixDropdownModelBase.prototype.hasErrorInColumns = function (fireCallback) {
        if (!this.generatedVisibleRows)
            return false;
        var res = false;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            if (!cells)
                continue;
            for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
                if (!cells[colIndex])
                    continue;
                var question = cells[colIndex].question;
                res =
                    (question && question.visible && question.hasErrors(fireCallback)) ||
                        res;
            }
        }
        return res;
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstInputElementId = function () {
        var question = this.getFirstCellQuestion(false);
        return question ? question.inputId : _super.prototype.getFirstInputElementId.call(this);
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstErrorInputElementId = function () {
        var question = this.getFirstCellQuestion(true);
        return question ? question.inputId : _super.prototype.getFirstErrorInputElementId.call(this);
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstCellQuestion = function (onError) {
        if (!this.generatedVisibleRows)
            return null;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
                if (!onError)
                    return cells[colIndex].question;
                if (cells[colIndex].question.currentErrorCount > 0)
                    return cells[colIndex].question;
            }
        }
        return null;
    };
    //IMatrixDropdownData
    QuestionMatrixDropdownModelBase.prototype.createQuestion = function (row, column) {
        return this.createQuestionCore(row, column);
    };
    QuestionMatrixDropdownModelBase.prototype.createQuestionCore = function (row, column) {
        var question = column.createCellQuestion(row);
        if (this.isReadOnly) {
            question.readOnly = true;
        }
        question.setSurveyImpl(row);
        return question;
    };
    QuestionMatrixDropdownModelBase.prototype.deleteRowValue = function (newValue, row) {
        delete newValue[row.rowName];
        return Object.keys(newValue).length == 0 ? null : newValue;
    };
    QuestionMatrixDropdownModelBase.prototype.onAnyValueChanged = function (name) {
        if (this.isLoadingFromJson)
            return;
        var rows = this.visibleRows;
        for (var i = 0; i < rows.length; i++) {
            rows[i].onAnyValueChanged(name);
        }
    };
    QuestionMatrixDropdownModelBase.prototype.onCellValueChanged = function (row, columnName, rowValue) {
        if (!this.survey)
            return;
        var self = this;
        var getQuestion = function (colName) {
            for (var i = 0; self.columns.length; i++) {
                if (self.columns[i].name == colName) {
                    return row.cells[i].question;
                }
            }
            return null;
        };
        var options = {
            row: row,
            columnName: columnName,
            rowValue: rowValue,
            value: rowValue[columnName],
            getCellQuestion: getQuestion
        };
        this.survey.matrixCellValueChanged(this, options);
    };
    QuestionMatrixDropdownModelBase.prototype.validateCell = function (row, columnName, rowValue) {
        if (!this.survey)
            return;
        var self = this;
        var options = {
            row: row,
            columnName: columnName,
            rowValue: rowValue,
            value: rowValue[columnName]
        };
        return this.survey.matrixCellValidate(this, options);
    };
    QuestionMatrixDropdownModelBase.prototype.onRowChanged = function (row, columnName, newRowValue) {
        var oldValue = this.createNewValue(this.value);
        if (this.isMatrixValueEmpty(oldValue))
            oldValue = null;
        var newValue = this.createNewValue(this.value);
        var rowValue = this.getRowValueCore(row, newValue, true);
        if (!rowValue)
            rowValue = {};
        for (var key in rowValue)
            delete rowValue[key];
        if (newRowValue) {
            newRowValue = JSON.parse(JSON.stringify(newRowValue));
            for (var key in newRowValue) {
                if (!this.isValueEmpty(newRowValue[key])) {
                    rowValue[key] = newRowValue[key];
                }
            }
        }
        if (Object.keys(rowValue).length == 0) {
            newValue = this.deleteRowValue(newValue, row);
        }
        if (this.isTwoValueEquals(oldValue, newValue))
            return;
        this.isRowChanging = true;
        this.setNewValue(newValue);
        this.isRowChanging = false;
        if (columnName) {
            this.onCellValueChanged(row, columnName, rowValue);
        }
    };
    QuestionMatrixDropdownModelBase.prototype.isMatrixValueEmpty = function (val) {
        if (!val)
            return;
        if (Array.isArray(val)) {
            for (var i = 0; i < val.length; i++) {
                if (Object.keys(val[i]).length > 0)
                    return false;
            }
            return true;
        }
        return Object.keys(val).length == 0;
    };
    QuestionMatrixDropdownModelBase.prototype.getSurvey = function () {
        return this.survey;
    };
    return QuestionMatrixDropdownModelBase;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("matrixdropdowncolumn", [
    "name",
    { name: "title", serializationProperty: "locTitle" },
    {
        name: "cellType",
        default: "default",
        choices: function () {
            var res = MatrixDropdownColumn.getColumnTypes();
            res.splice(0, 0, "default");
            return res;
        }
    },
    { name: "colCount", default: -1, choices: [-1, 0, 1, 2, 3, 4] },
    "isRequired:boolean",
    "hasOther:boolean",
    "readOnly:boolean",
    "minWidth",
    "visibleIf:condition",
    "enableIf:condition",
    {
        name: "validators:validators",
        baseClassName: "surveyvalidator",
        classNamePart: "validator"
    }
], function () {
    return new MatrixDropdownColumn("");
});
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("matrixdropdownbase", [
    {
        name: "columns:matrixdropdowncolumns",
        className: "matrixdropdowncolumn"
    },
    "horizontalScroll:boolean",
    {
        name: "choices:itemvalues",
        onGetValue: function (obj) {
            return __WEBPACK_IMPORTED_MODULE_7__itemvalue__["a" /* ItemValue */].getData(obj.choices);
        },
        onSetValue: function (obj, value) {
            obj.choices = value;
        }
    },
    { name: "optionsCaption", serializationProperty: "locOptionsCaption" },
    {
        name: "cellType",
        default: "dropdown",
        choices: function () {
            return MatrixDropdownColumn.getColumnTypes();
        }
    },
    { name: "columnColCount", default: 0, choices: [0, 1, 2, 3, 4] },
    "columnMinWidth"
], function () {
    return new QuestionMatrixDropdownModelBase("");
}, "question");


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextPreProcessorItem */
/* unused harmony export TextPreProcessorValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPreProcessor; });
var TextPreProcessorItem = /** @class */ (function () {
    function TextPreProcessorItem() {
    }
    return TextPreProcessorItem;
}());

var TextPreProcessorValue = /** @class */ (function () {
    function TextPreProcessorValue(name, returnDisplayValue) {
        this.name = name;
        this.returnDisplayValue = returnDisplayValue;
        this.isExists = false;
    }
    return TextPreProcessorValue;
}());

var TextPreProcessor = /** @class */ (function () {
    function TextPreProcessor() {
        this.hasAllValuesOnLastRunValue = false;
    }
    TextPreProcessor.prototype.process = function (text, returnDisplayValue) {
        if (returnDisplayValue === void 0) { returnDisplayValue = false; }
        this.hasAllValuesOnLastRunValue = true;
        if (!text)
            return text;
        if (!this.onProcess)
            return text;
        var items = this.getItems(text);
        for (var i = items.length - 1; i >= 0; i--) {
            var item = items[i];
            var name = this.getName(text.substring(item.start + 1, item.end));
            if (!this.canProcessName(name))
                continue;
            var textValue = new TextPreProcessorValue(name, returnDisplayValue);
            this.onProcess(textValue);
            if (!textValue.isExists) {
                this.hasAllValuesOnLastRunValue = false;
                continue;
            }
            if (textValue.value == null) {
                textValue.value = "";
                this.hasAllValuesOnLastRunValue = false;
            }
            text =
                text.substr(0, item.start) +
                    textValue.value +
                    text.substr(item.end + 1);
        }
        return text;
    };
    Object.defineProperty(TextPreProcessor.prototype, "hasAllValuesOnLastRun", {
        get: function () {
            return this.hasAllValuesOnLastRunValue;
        },
        enumerable: true,
        configurable: true
    });
    TextPreProcessor.prototype.getItems = function (text) {
        var items = [];
        var length = text.length;
        var start = -1;
        var ch = "";
        for (var i = 0; i < length; i++) {
            ch = text[i];
            if (ch == "{")
                start = i;
            if (ch == "}") {
                if (start > -1) {
                    var item = new TextPreProcessorItem();
                    item.start = start;
                    item.end = i;
                    items.push(item);
                }
                start = -1;
            }
        }
        return items;
    };
    TextPreProcessor.prototype.getName = function (name) {
        if (!name)
            return;
        return name.trim();
    };
    TextPreProcessor.prototype.canProcessName = function (name) {
        if (!name)
            return false;
        for (var i = 0; i < name.length; i++) {
            var ch = name[i];
            if (ch == " " || ch == "-" || ch == "&")
                return false;
        }
        return true;
    };
    return TextPreProcessor;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kopage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templateText__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionCustomWidgets__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localizablestring__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Survey; });









__WEBPACK_IMPORTED_MODULE_7__questionCustomWidgets__["a" /* CustomWidgetCollection */].Instance.onCustomWidgetAdded.add(function (customWidget) {
    if (customWidget.widgetJson.isDefaultRender)
        return;
    if (!customWidget.htmlTemplate)
        customWidget.htmlTemplate =
            "<div>'htmlTemplate' attribute is missed.</div>";
    new __WEBPACK_IMPORTED_MODULE_6__templateText__["a" /* SurveyTemplateText */]().replaceText(customWidget.htmlTemplate, "widget", customWidget.name);
});
var Survey = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Survey, _super);
    function Survey(jsonObj, renderedElement, css) {
        if (jsonObj === void 0) { jsonObj = null; }
        if (renderedElement === void 0) { renderedElement = null; }
        if (css === void 0) { css = null; }
        var _this = _super.call(this, jsonObj) || this;
        //TODO remove it, since there is onAfterRenderSurvey
        _this.onRendered = new __WEBPACK_IMPORTED_MODULE_3__base__["b" /* Event */]();
        _this.isFirstRender = true;
        if (css) {
            _this.css = css;
        }
        if (renderedElement) {
            _this.renderedElement = renderedElement;
        }
        if (typeof __WEBPACK_IMPORTED_MODULE_1_knockout__ === "undefined")
            throw new Error("knockoutjs library is not loaded.");
        var self = _this;
        _this.registerFunctionOnPropertyValueChanged("timeSpent", function () {
            self.onTimeSpentChanged();
        });
        _this.render(renderedElement);
        return _this;
    }
    Object.defineProperty(Survey, "cssType", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].currentType;
        },
        set: function (value) {
            __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].currentType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "cssNavigationComplete", {
        get: function () {
            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.complete);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "cssNavigationPrev", {
        get: function () {
            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.prev);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "cssNavigationStart", {
        get: function () {
            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "cssNavigationNext", {
        get: function () {
            return this.getNavigationCss(this.css.navigationButton, this.css.navigation.next);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "completedCss", {
        get: function () {
            var css = __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].getCss();
            return css.body + " " + css.completedPage;
        },
        enumerable: true,
        configurable: true
    });
    Survey.prototype.getNavigationCss = function (main, btn) {
        var res = "";
        if (main)
            res = main;
        if (btn)
            res += " " + btn;
        return res;
    };
    Object.defineProperty(Survey.prototype, "css", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].getCss();
        },
        set: function (value) {
            this.mergeValues(value, this.css);
        },
        enumerable: true,
        configurable: true
    });
    Survey.prototype.render = function (element) {
        if (element === void 0) { element = null; }
        this.updateCustomWidgets(this.currentPage);
        var self = this;
        if (element && typeof element == "string") {
            element = document.getElementById(element);
        }
        if (element) {
            this.renderedElement = element;
        }
        element = this.renderedElement;
        if (!element)
            return;
        element.innerHTML = this.getHtmlTemplate();
        self.startTimerFromUI();
        self.applyBinding();
    };
    Survey.prototype.koEventAfterRender = function (element, survey) {
        survey.onRendered.fire(self, {});
        survey.afterRenderSurvey(element);
    };
    Survey.prototype.loadSurveyFromService = function (surveyId, clientId, renderedElement) {
        if (surveyId === void 0) { surveyId = null; }
        if (clientId === void 0) { clientId = null; }
        if (renderedElement === void 0) { renderedElement = null; }
        if (renderedElement) {
            this.renderedElement = renderedElement;
        }
        _super.prototype.loadSurveyFromService.call(this, surveyId, clientId);
    };
    Survey.prototype.setCompleted = function () {
        _super.prototype.setCompleted.call(this);
        this.updateKoCurrentPage();
    };
    Survey.prototype.start = function () {
        _super.prototype.start.call(this);
        this.updateKoCurrentPage();
    };
    Survey.prototype.createNewPage = function (name) {
        return new __WEBPACK_IMPORTED_MODULE_4__kopage__["b" /* Page */](name);
    };
    Survey.prototype.getHtmlTemplate = function () {
        return __WEBPACK_IMPORTED_MODULE_6__templateText__["b" /* koTemplate */];
    };
    Survey.prototype.onBeforeCreating = function () {
        var _this = this;
        var self = this;
        this.dummyObservable = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        this.koCurrentPage = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.currentPage);
        this.koIsNavigationButtonsShowing = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            _this.dummyObservable();
            return _this.isNavigationButtonsShowing;
        });
        this.koIsFirstPage = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            _this.dummyObservable();
            return _this.isFirstPage;
        });
        this.koIsLastPage = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            _this.dummyObservable();
            return _this.isLastPage;
        });
        this.koProgressText = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            _this.dummyObservable();
            return _this.progressText;
        });
        this.koProgress = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            _this.dummyObservable();
            return _this.getProgress();
        });
        this.koState = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.state);
        this.koCompletedState = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        this.koCompletedStateText = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        this.koCompletedStateCss = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        this.koTimerInfoText = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.timerInfoText);
        this.koAfterRenderPage = function (elements, con) {
            var el = __WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
            if (el)
                self.afterRenderPage(el);
        };
    };
    Survey.prototype.currentPageChanged = function (newValue, oldValue) {
        this.updateKoCurrentPage();
        _super.prototype.currentPageChanged.call(this, newValue, oldValue);
        if (!this.isDesignMode)
            this.scrollToTopOnPageChange();
    };
    Survey.prototype.pageVisibilityChanged = function (page, newValue) {
        _super.prototype.pageVisibilityChanged.call(this, page, newValue);
        this.updateKoCurrentPage();
    };
    Survey.prototype.onLoadSurveyFromService = function () {
        this.render();
    };
    Survey.prototype.onLoadingSurveyFromService = function () {
        this.render();
    };
    Survey.prototype.setCompletedState = function (value, text) {
        _super.prototype.setCompletedState.call(this, value, text);
        this.koCompletedState(this.completedState);
        this.koCompletedStateText(this.completedStateText);
        this.koCompletedStateCss(this.completedState !== "" ? this.css.saveData[this.completedState] : "");
    };
    Survey.prototype.onTimeSpentChanged = function () {
        this.koTimerInfoText(this.timerInfoText);
    };
    Survey.prototype.applyBinding = function () {
        if (!this.renderedElement)
            return;
        this.updateKoCurrentPage();
        __WEBPACK_IMPORTED_MODULE_1_knockout__["cleanNode"](this.renderedElement);
        if (!this.isFirstRender) {
            this.updateCurrentPageQuestions();
        }
        this.isFirstRender = false;
        __WEBPACK_IMPORTED_MODULE_1_knockout__["applyBindings"](this, this.renderedElement);
    };
    Survey.prototype.updateKoCurrentPage = function () {
        if (this.isLoadingFromJson)
            return;
        this.dummyObservable(this.dummyObservable() + 1);
        if (this.currentPage !== this.koCurrentPage()) {
            this.koCurrentPage(this.currentPage);
        }
        this.koState(this.state);
    };
    Survey.prototype.updateCurrentPageQuestions = function () {
        var questions = this.currentPage ? this.currentPage.questions : [];
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            if (q.visible)
                q["updateQuestion"]();
        }
    };
    return Survey;
}(__WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyModel */]));

__WEBPACK_IMPORTED_MODULE_8__localizablestring__["a" /* LocalizableString */].prototype["onCreating"] = function () {
    var self = this;
    this.koReRender = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
    this.koRenderedHtml = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
        self.koReRender();
        return self.renderedHtml;
    });
};
__WEBPACK_IMPORTED_MODULE_8__localizablestring__["a" /* LocalizableString */].prototype["onChanged"] = function () {
    this.koReRender(this.koReRender() + 1);
};
__WEBPACK_IMPORTED_MODULE_1_knockout__["components"].register("survey", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var survey = __WEBPACK_IMPORTED_MODULE_1_knockout__["unwrap"](params.survey);
            survey.render();
            return params.survey;
        }
    },
    template: __WEBPACK_IMPORTED_MODULE_6__templateText__["b" /* koTemplate */]
});
__WEBPACK_IMPORTED_MODULE_1_knockout__["bindingHandlers"]["surveyProp"] = {
    update: function (element, valueAccessor, allBindingsAccessor) {
        var value = __WEBPACK_IMPORTED_MODULE_1_knockout__["utils"].unwrapObservable(valueAccessor()) || {};
        for (var propName in value) {
            if (typeof propName == "string") {
                var propValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["utils"].unwrapObservable(value[propName]);
                element[propName] = propValue;
            }
        }
    }
};
__WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyModel */].platform = "knockout";


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizableString; });
/**
 * The class represents the string that supports multi-languages and markdown.
 * It uses in all objects where support for multi-languages and markdown is required.
 */
var LocalizableString = /** @class */ (function () {
    function LocalizableString(owner, useMarkdown) {
        if (useMarkdown === void 0) { useMarkdown = false; }
        this.owner = owner;
        this.useMarkdown = useMarkdown;
        this.values = {};
        this.htmlValues = {};
        this.onGetTextCallback = null;
        this.onCreating();
    }
    Object.defineProperty(LocalizableString.prototype, "locale", {
        get: function () {
            return this.owner ? this.owner.getLocale() : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "text", {
        get: function () {
            var res = this.pureText;
            if (this.onGetTextCallback)
                res = this.onGetTextCallback(res);
            return res;
        },
        set: function (value) {
            this.setLocaleText(this.locale, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "pureText", {
        get: function () {
            var loc = this.locale;
            if (!loc)
                loc = LocalizableString.defaultLocale;
            var res = this.values[loc];
            if (!res && loc !== LocalizableString.defaultLocale) {
                res = this.values[LocalizableString.defaultLocale];
            }
            if (!res)
                res = "";
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "hasHtml", {
        get: function () {
            return this.hasHtmlValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "html", {
        get: function () {
            if (!this.hasHtml)
                return "";
            return this.getHtmlValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "textOrHtml", {
        get: function () {
            return this.hasHtml ? this.getHtmlValue() : this.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "renderedHtml", {
        get: function () {
            var res = this.textOrHtml;
            return this.onRenderedHtmlCallback ? this.onRenderedHtmlCallback(res) : res;
        },
        enumerable: true,
        configurable: true
    });
    LocalizableString.prototype.getLocaleText = function (loc) {
        if (!loc)
            loc = LocalizableString.defaultLocale;
        var res = this.values[loc];
        return res ? res : "";
    };
    LocalizableString.prototype.setLocaleText = function (loc, value) {
        if (value == this.getLocaleText(loc))
            return;
        if (!loc)
            loc = LocalizableString.defaultLocale;
        delete this.htmlValues[loc];
        if (!value) {
            if (this.values[loc])
                delete this.values[loc];
        }
        else {
            if (typeof value === "string") {
                if (loc != LocalizableString.defaultLocale &&
                    value == this.getLocaleText(LocalizableString.defaultLocale)) {
                    this.setLocaleText(loc, null);
                }
                else {
                    this.values[loc] = value;
                    if (loc == LocalizableString.defaultLocale) {
                        this.deleteValuesEqualsToDefault(value);
                    }
                }
            }
        }
        this.onChanged();
    };
    LocalizableString.prototype.getJson = function () {
        var keys = Object.keys(this.values);
        if (keys.length == 0)
            return null;
        if (keys.length == 1 && keys[0] == LocalizableString.defaultLocale)
            return this.values[keys[0]];
        return this.values;
    };
    LocalizableString.prototype.setJson = function (value) {
        this.values = {};
        this.htmlValues = {};
        if (!value)
            return;
        if (typeof value === "string") {
            this.setLocaleText(null, value);
        }
        else {
            for (var key in value) {
                this.setLocaleText(key, value[key]);
            }
        }
        this.onChanged();
    };
    LocalizableString.prototype.onChanged = function () { };
    LocalizableString.prototype.onCreating = function () { };
    LocalizableString.prototype.hasHtmlValue = function () {
        if (!this.owner || !this.useMarkdown)
            return false;
        var text = this.text;
        if (!text)
            return false;
        var loc = this.locale;
        if (!loc)
            loc = LocalizableString.defaultLocale;
        if (!(loc in this.htmlValues)) {
            this.htmlValues[loc] = this.owner.getMarkdownHtml(text);
        }
        return this.htmlValues[loc] ? true : false;
    };
    LocalizableString.prototype.getHtmlValue = function () {
        var loc = this.locale;
        if (!loc)
            loc = LocalizableString.defaultLocale;
        return this.htmlValues[loc];
    };
    LocalizableString.prototype.deleteValuesEqualsToDefault = function (defaultValue) {
        var keys = Object.keys(this.values);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == LocalizableString.defaultLocale)
                continue;
            if (this.values[keys[i]] == defaultValue)
                delete this.values[keys[i]];
        }
    };
    LocalizableString.defaultLocale = "default";
    return LocalizableString;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditions__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuestionRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelModelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PanelModel; });







var QuestionRowModel = /** @class */ (function () {
    function QuestionRowModel(panel) {
        this.panel = panel;
        this.elements = [];
        this.visibleValue = panel.isDesignMode;
    }
    Object.defineProperty(QuestionRowModel.prototype, "questions", {
        //TODO remove after updating react and vue
        get: function () {
            return this.elements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRowModel.prototype, "visible", {
        get: function () {
            return this.visibleValue;
        },
        set: function (val) {
            if (val == this.visible)
                return;
            this.visibleValue = val;
            this.onVisibleChanged();
        },
        enumerable: true,
        configurable: true
    });
    QuestionRowModel.prototype.updateVisible = function () {
        this.visible = this.calcVisible();
        this.setWidth();
    };
    QuestionRowModel.prototype.addElement = function (q) {
        this.elements.push(q);
        this.updateVisible();
    };
    QuestionRowModel.prototype.onVisibleChanged = function () {
        if (this.visibilityChangedCallback)
            this.visibilityChangedCallback();
    };
    QuestionRowModel.prototype.setWidth = function () {
        var visCount = this.getVisibleCount();
        if (visCount == 0)
            return;
        var counter = 0;
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].isVisible) {
                var q = this.elements[i];
                q.renderWidth = q.width ? q.width : Math.floor(100 / visCount) + "%";
                q.rightIndent = counter < visCount - 1 ? 1 : 0;
                counter++;
            }
            else {
                this.elements[i].renderWidth = "";
            }
        }
    };
    QuestionRowModel.prototype.getVisibleCount = function () {
        var res = 0;
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].isVisible)
                res++;
        }
        return res;
    };
    QuestionRowModel.prototype.calcVisible = function () {
        return this.getVisibleCount() > 0;
    };
    return QuestionRowModel;
}());

/**
 * A base class for a Panel and Page objects.
 */
var PanelModelBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PanelModelBase, _super);
    function PanelModelBase(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowValues = null;
        _this.conditionRunner = null;
        _this.isQuestionsReady = false;
        _this.questionsValue = new Array();
        _this.elementsValue = _this.createNewArray("elements", function (item) {
            self.onAddElement(item, self.elementsValue.length);
        }, function (item) {
            self.onRemoveElement(item);
        });
        _this.registerFunctionOnPropertyValueChanged("elements", function () {
            self.markQuestionListDirty();
            self.onRowsChanged();
        });
        _this.id = PanelModelBase.getPanelId();
        var self = _this;
        var locTitleValue = _this.createLocalizableString("title", _this, true);
        locTitleValue.onRenderedHtmlCallback = function (text) {
            return self.getRenderedTitle(text);
        };
        var locDescriptionValue = _this.createLocalizableString("description", _this, true);
        locDescriptionValue.onGetTextCallback = function (html) {
            return self.getProcessedHtml(html);
        };
        _this.createLocalizableString("requiredErrorText", _this);
        return _this;
    }
    PanelModelBase.getPanelId = function () {
        return "sp_" + PanelModelBase.panelCounter++;
    };
    PanelModelBase.prototype.setSurveyImpl = function (value) {
        _super.prototype.setSurveyImpl.call(this, value);
        if (this.isDesignMode)
            this.onVisibleChanged();
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].setSurveyImpl(value);
        }
    };
    PanelModelBase.prototype.endLoadingFromJson = function () {
        _super.prototype.endLoadingFromJson.call(this);
        this.markQuestionListDirty();
        this.onRowsChanged();
    };
    Object.defineProperty(PanelModelBase.prototype, "title", {
        /**
         * PanelModel or PageModel title property.
         * @description
         */
        get: function () {
            return this.getLocalizableStringText("title");
        },
        set: function (val) {
            this.setLocalizableStringText("title", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "locTitle", {
        get: function () {
            return this.getLocalizableString("title");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "description", {
        /**
         * PanelModel or PageModel description property. It renders under title by using smaller font. Unlike the title, description can be empty.
         * @see title
         */
        get: function () {
            return this.getLocalizableStringText("description");
        },
        set: function (val) {
            this.setLocalizableStringText("description", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "locDescription", {
        get: function () {
            return this.getLocalizableString("description");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "hasDescription", {
        get: function () {
            return this.description != "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "requiredErrorText", {
        /**
         * The custom text that will be shown on required error. Use this property, if you do not want to show the default text.
         */
        get: function () {
            return this.getLocalizableStringText("requiredErrorText");
        },
        set: function (val) {
            this.setLocalizableStringText("requiredErrorText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "locRequiredErrorText", {
        get: function () {
            return this.getLocalizableString("requiredErrorText");
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getLocale = function () {
        return this.survey
            ? this.survey.getLocale()
            : "";
    };
    PanelModelBase.prototype.getMarkdownHtml = function (text) {
        return this.survey
            ? this.survey.getMarkdownHtml(text)
            : null;
    };
    Object.defineProperty(PanelModelBase.prototype, "parent", {
        /**
         * A parent element. It is always null for the Page object and always not null for the Panel object. Panel object may contain Questions and other Panels.
         */
        get: function () {
            return this.getPropertyValue("parent", null);
        },
        set: function (val) {
            this.setPropertyValue("parent", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "visibleIf", {
        /**
         * An expression that returns true or false. If it returns true the Panel becomes visible and if it returns false the Panel becomes invisible. The library runs the expression on survey start and on changing a question value. If the property is empty then visible property is used.
         * @see visible
         */
        get: function () {
            return this.getPropertyValue("visibleIf", "");
        },
        set: function (val) {
            this.setPropertyValue("visibleIf", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "cssClasses", {
        get: function () {
            var classes = { error: {} };
            this.copyCssClasses(classes, this.css);
            this.copyCssClasses(classes.error, this.css.error);
            if (this.survey) {
                this.survey.updatePanelCssClasses(this, classes);
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "css", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].getCss();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "id", {
        /**
         * A unique element identificator. It is generated automatically.
         */
        get: function () {
            return this.getPropertyValue("id");
        },
        set: function (val) {
            this.setPropertyValue("id", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "isPanel", {
        /**
         * Returns true if the current object is Panel. Returns false if the current object is Page (a root Panel).
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "questions", {
        /**
         * Returns the list of all questions located in the Panel/Page, including in the nested Panels.
         * @see QuestionBase
         * @see elements
         */
        get: function () {
            if (!this.isQuestionsReady) {
                this.questionsValue = [];
                for (var i = 0; i < this.elements.length; i++) {
                    var el = this.elements[i];
                    if (el.isPanel) {
                        var qs = el.questions;
                        for (var j = 0; j < qs.length; j++) {
                            this.questionsValue.push(qs[j]);
                        }
                    }
                    else {
                        this.questionsValue.push(el);
                    }
                }
                this.isQuestionsReady = true;
            }
            return this.questionsValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the question by its name
     * @param name the question name
     */
    PanelModelBase.prototype.getQuestionByName = function (name) {
        var questions = this.questions;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].name == name)
                return questions[i];
        }
        return null;
    };
    PanelModelBase.prototype.getQuestionByValueName = function (valueName) {
        var questions = this.questions;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].getValueName() == valueName)
                return questions[i];
        }
        return null;
    };
    PanelModelBase.prototype.getValue = function () {
        var data = {};
        for (var i = 0; i < this.questions.length; i++) {
            var q = this.questions[i];
            if (q.isEmpty())
                continue;
            data[q.getValueName()] = q["value"];
        }
        return data;
    };
    PanelModelBase.prototype.markQuestionListDirty = function () {
        this.isQuestionsReady = false;
        if (this.parent)
            this.parent.markQuestionListDirty();
    };
    Object.defineProperty(PanelModelBase.prototype, "elements", {
        /**
         * Returns the list of the elements in the object, Panel/Page. Elements can be questions or panels. The function doesn't return elements in the nested Panels.
         */
        get: function () {
            return this.elementsValue;
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getElementsInDesign = function (includeHidden) {
        if (includeHidden === void 0) { includeHidden = false; }
        return this.elements;
    };
    /**
     * Returns true if the current element belongs to the Panel/Page. It looks in nested Panels as well.
     * @param element
     * @see PanelModel
     */
    PanelModelBase.prototype.containsElement = function (element) {
        for (var i = 0; i < this.elements.length; i++) {
            var el = this.elements[i];
            if (el == element)
                return true;
            if (el.isPanel) {
                if (el.containsElement(element))
                    return true;
            }
        }
        return false;
    };
    Object.defineProperty(PanelModelBase.prototype, "isRequired", {
        /**
         * Set this property to true, to require the answer at least in one question in the panel.
         */
        get: function () {
            return this.getPropertyValue("isRequired", false);
        },
        set: function (val) {
            this.setPropertyValue("isRequired", val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns true, if there is an error on this Page or inside the current Panel
     * @param fireCallback set it to true, to show errors in UI
     * @param focuseOnFirstError set it to true to focuse on the first question that doesn't pass the validation
     */
    PanelModelBase.prototype.hasErrors = function (fireCallback, focuseOnFirstError) {
        if (fireCallback === void 0) { fireCallback = true; }
        if (focuseOnFirstError === void 0) { focuseOnFirstError = false; }
        var rec = {
            fireCallback: fireCallback,
            focuseOnFirstError: focuseOnFirstError,
            firstErrorQuestion: null,
            result: false
        };
        this.hasErrorsCore(rec);
        if (rec.firstErrorQuestion) {
            rec.firstErrorQuestion.focus(true);
        }
        return rec.result;
    };
    PanelModelBase.prototype.hasErrorsInPanels = function (rec) {
        var errorLength = this.errors.length;
        this.errors = [];
        this.hasRequiredError(rec);
        if (this.survey) {
            var customError = this.survey.validatePanel(this);
            if (customError) {
                this.errors.push(customError);
                rec.result = true;
            }
        }
        if (rec.fireCallback &&
            (errorLength != this.errors.length || errorLength > 0)) {
            if (this.errorsChangedCallback)
                this.errorsChangedCallback();
        }
    };
    PanelModelBase.prototype.hasRequiredError = function (rec) {
        if (!this.isRequired)
            return;
        var visQuestions = [];
        this.addQuestionsToList(visQuestions, true);
        if (visQuestions.length == 0)
            return;
        for (var i = 0; i < visQuestions.length; i++) {
            if (!visQuestions[i].isEmpty())
                return;
        }
        rec.result = true;
        this.errors.push(new __WEBPACK_IMPORTED_MODULE_6__error__["b" /* OneAnswerRequiredError */](this.requiredErrorText));
        if (!rec.firstErrorQuestion) {
            rec.firstErrorQuestion = visQuestions[0];
        }
    };
    PanelModelBase.prototype.hasErrorsCore = function (rec) {
        for (var i = 0; i < this.elements.length; i++) {
            if (!this.elements[i].isVisible)
                continue;
            if (this.elements[i].isPanel) {
                this.elements[i].hasErrorsCore(rec);
            }
            else {
                var question = this.elements[i];
                if (question.isReadOnly)
                    continue;
                if (question.hasErrors(rec.fireCallback)) {
                    if (rec.focuseOnFirstError && rec.firstErrorQuestion == null) {
                        rec.firstErrorQuestion = question;
                    }
                    rec.result = true;
                }
            }
        }
        this.hasErrorsInPanels(rec);
    };
    /**
     * Fill list array with the questions.
     * @param list
     * @param visibleOnly set it to true to get visible questions only
     */
    PanelModelBase.prototype.addQuestionsToList = function (list, visibleOnly, includingDesignTime) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (includingDesignTime === void 0) { includingDesignTime = false; }
        this.addElementsToList(list, visibleOnly, includingDesignTime, false);
    };
    /**
     * Fill list array with the panels.
     * @param list
     */
    PanelModelBase.prototype.addPanelsIntoList = function (list, visibleOnly, includingDesignTime) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (includingDesignTime === void 0) { includingDesignTime = false; }
        this.addElementsToList(list, visibleOnly, includingDesignTime, true);
    };
    PanelModelBase.prototype.addElementsToList = function (list, visibleOnly, includingDesignTime, isPanel) {
        if (visibleOnly && !this.visible)
            return;
        this.addElementsToListCore(list, this.elements, visibleOnly, includingDesignTime, isPanel);
    };
    PanelModelBase.prototype.addElementsToListCore = function (list, elements, visibleOnly, includingDesignTime, isPanel) {
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (visibleOnly && !el.visible)
                continue;
            if ((isPanel && el.isPanel) || (!isPanel && !el.isPanel)) {
                list.push(el);
            }
            if (el.isPanel) {
                el.addElementsToListCore(list, el.elements, visibleOnly, includingDesignTime, isPanel);
            }
            else {
                if (includingDesignTime) {
                    this.addElementsToListCore(list, el.getElementsInDesign(false), visibleOnly, includingDesignTime, isPanel);
                }
            }
        }
    };
    Object.defineProperty(PanelModelBase.prototype, "rows", {
        get: function () {
            if (!this.rowValues) {
                this.rowValues = this.buildRows();
            }
            return this.rowValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "isActive", {
        /**
         * Returns true if the current object is Page and it is the current page.
         */
        get: function () {
            return !this.survey || this.survey.currentPage == this.root;
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.updateCustomWidgets = function () {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].updateCustomWidgets();
        }
    };
    Object.defineProperty(PanelModelBase.prototype, "questionTitleLocation", {
        /**
         * Set this property different from "default" to set the specific question title location for this panel/page.
         * @see SurveyModel.questionTitleLocation
         */
        get: function () {
            return this.getPropertyValue("questionTitleLocation", "default");
        },
        set: function (value) {
            this.setPropertyValue("questionTitleLocation", value.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getQuestionTitleLocation = function () {
        if (this.onGetQuestionTitleLocation)
            return this.onGetQuestionTitleLocation();
        if (this.questionTitleLocation != "default")
            return this.questionTitleLocation;
        if (this.parent)
            return this.parent.getQuestionTitleLocation();
        return this.survey ? this.survey.questionTitleLocation : "top";
    };
    Object.defineProperty(PanelModelBase.prototype, "root", {
        get: function () {
            var res = this;
            while (res.parent)
                res = res.parent;
            return res;
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.createRow = function () {
        return new QuestionRowModel(this);
    };
    PanelModelBase.prototype.onSurveyLoad = function () {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].onSurveyLoad();
        }
        if (this.rowsChangedCallback)
            this.rowsChangedCallback();
    };
    PanelModelBase.prototype.onRowsChanged = function () {
        this.rowValues = null;
        if (this.rowsChangedCallback && !this.isLoadingFromJson)
            this.rowsChangedCallback();
    };
    PanelModelBase.prototype.onAddElement = function (element, index) {
        element.setSurveyImpl(this.surveyImpl);
        element.parent = this;
        if (element.isPanel) {
            var p = element;
            if (this.survey) {
                this.survey.panelAdded(p, index, this, this.root);
            }
        }
        else {
            if (this.survey) {
                var q = element;
                this.survey.questionAdded(q, index, this, this.root);
            }
        }
        var self = this;
        element.registerFunctionOnPropertiesValueChanged(["visible", "isVisible"], function () {
            self.onElementVisibilityChanged(element);
        }, this.id);
        element.registerFunctionOnPropertyValueChanged("startWithNewLine", function () {
            self.onElementStartWithNewLineChanged(element);
        }, this.id);
    };
    PanelModelBase.prototype.onRemoveElement = function (element) {
        element.parent = null;
        element.unRegisterFunctionOnPropertiesValueChanged(["visible", "isVisible", "startWithNewLine"], this.id);
        if (!element.isPanel) {
            if (this.survey)
                this.survey.questionRemoved(element);
        }
        else {
            if (this.survey)
                this.survey.panelRemoved(element);
        }
    };
    PanelModelBase.prototype.onElementVisibilityChanged = function (element) {
        if (this.rowValues) {
            this.updateRowsVisibility(element);
        }
        if (this.parent) {
            this.parent.onElementVisibilityChanged(this);
        }
    };
    PanelModelBase.prototype.onElementStartWithNewLineChanged = function (element) {
        this.onRowsChanged();
    };
    PanelModelBase.prototype.updateRowsVisibility = function (element) {
        for (var i = 0; i < this.rowValues.length; i++) {
            var row = this.rowValues[i];
            if (row.elements.indexOf(element) > -1) {
                row.updateVisible();
                break;
            }
        }
    };
    PanelModelBase.prototype.buildRows = function () {
        var result = new Array();
        var lastRowVisibleIndex = -1;
        var self = this;
        for (var i = 0; i < this.elements.length; i++) {
            var el = this.elements[i];
            var isNewRow = i == 0 || el.startWithNewLine;
            var row = isNewRow ? this.createRow() : result[result.length - 1];
            if (isNewRow)
                result.push(row);
            row.addElement(el);
        }
        for (var i = 0; i < result.length; i++) {
            result[i].updateVisible();
        }
        return result;
    };
    Object.defineProperty(PanelModelBase.prototype, "processedTitle", {
        /**
         * Returns rendered title text or html.
         */
        get: function () {
            return this.getRenderedTitle(this.locTitle.textOrHtml);
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getRenderedTitle = function (str) {
        return this.textProcessor != null
            ? this.textProcessor.processText(str, true)
            : str;
    };
    Object.defineProperty(PanelModelBase.prototype, "visible", {
        /**
         * Use it to get/set the object visibility.
         * @see visibleIf
         */
        get: function () {
            return this.getPropertyValue("visible", true);
        },
        set: function (value) {
            if (value === this.visible)
                return;
            this.setPropertyValue("visible", value);
            this.setPropertyValue("isVisible", this.isVisible);
            if (!this.isLoadingFromJson)
                this.onVisibleChanged();
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.onVisibleChanged = function () {
        this.setPropertyValue("isVisible", this.isVisible);
    };
    Object.defineProperty(PanelModelBase.prototype, "isVisible", {
        /**
         * Returns true if object is visible or survey is in design mode right now.
         */
        get: function () {
            return this.isDesignMode || this.getIsPageVisible(null);
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getIsPageVisible = function (exceptionQuestion) {
        if (!this.visible)
            return false;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i] == exceptionQuestion)
                continue;
            if (this.questions[i].visible)
                return true;
        }
        return false;
    };
    /**
     * Add an elememnt into Panel or Page.
     * @param element
     * @param index element index in the elements array
     */
    PanelModelBase.prototype.addElement = function (element, index) {
        if (index === void 0) { index = -1; }
        if (element == null)
            return;
        if (index < 0 || index >= this.elements.length) {
            this.elements.push(element);
        }
        else {
            this.elements.splice(index, 0, element);
        }
    };
    /**
     * Add a question into Panel or Page.
     * @param question
     * @param index element index in the elements array
     */
    PanelModelBase.prototype.addQuestion = function (question, index) {
        if (index === void 0) { index = -1; }
        this.addElement(question, index);
    };
    /**
     * Add a panel into Panel or Page.
     * @param panel
     * @param index element index in the elements array
     */
    PanelModelBase.prototype.addPanel = function (panel, index) {
        if (index === void 0) { index = -1; }
        this.addElement(panel, index);
    };
    /**
     * Creates a new question and adds it into the end of the elements list.
     * @param questionType the possible values are: "text", "checkbox", "dropdown", "matrix", "html", "matrixdynamic", "matrixdropdown" and so on.
     * @param name a question name
     */
    PanelModelBase.prototype.addNewQuestion = function (questionType, name) {
        if (name === void 0) { name = null; }
        var question = __WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.createQuestion(questionType, name);
        this.addQuestion(question);
        return question;
    };
    /**
     * Creates a new panel and adds it into the end of the elements list.
     * @param name a panel name
     */
    PanelModelBase.prototype.addNewPanel = function (name) {
        if (name === void 0) { name = null; }
        var panel = this.createNewPanel(name);
        this.addPanel(panel);
        return panel;
    };
    PanelModelBase.prototype.createNewPanel = function (name) {
        return new PanelModel(name);
    };
    /**
     * Remove an element (Panel or Question) from the elements list.
     * @param element
     * @see elements
     */
    PanelModelBase.prototype.removeElement = function (element) {
        var index = this.elements.indexOf(element);
        if (index < 0) {
            for (var i = 0; i < this.elements.length; i++) {
                if (this.elements[i].removeElement(element))
                    return true;
            }
            return false;
        }
        this.elements.splice(index, 1);
        return true;
    };
    /**
     * Remove question  from the elements list.
     * @param question
     * @see elements
     * @see removeElement
     */
    PanelModelBase.prototype.removeQuestion = function (question) {
        this.removeElement(question);
    };
    PanelModelBase.prototype.runCondition = function (values) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].runCondition(values);
        }
        if (!this.visibleIf)
            return;
        if (!this.conditionRunner)
            this.conditionRunner = new __WEBPACK_IMPORTED_MODULE_3__conditions__["a" /* ConditionRunner */](this.visibleIf);
        this.conditionRunner.expression = this.visibleIf;
        this.visible = this.conditionRunner.run(values);
    };
    PanelModelBase.prototype.onLocaleChanged = function () {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].onLocaleChanged();
        }
        this.locTitle.onChanged();
    };
    PanelModelBase.prototype.onAnyValueChanged = function (name) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].onAnyValueChanged(name);
        }
        var titleValue = this.locTitle.text;
        if (!titleValue)
            return;
        if (titleValue.toLocaleLowerCase().indexOf("{" + name.toLowerCase()) > -1) {
            this.locTitle.onChanged();
        }
    };
    PanelModelBase.panelCounter = 100;
    return PanelModelBase;
}(__WEBPACK_IMPORTED_MODULE_2__base__["c" /* SurveyElement */]));

/**
 * A container element, similar to the Page objects. However, unlike the Page, Panel can't be a root.
 * It may contain questions and other panels.
 */
var PanelModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PanelModel, _super);
    function PanelModel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        var self = _this;
        _this.registerFunctionOnPropertyValueChanged("state", function () {
            if (self.stateChangedCallback)
                self.stateChangedCallback();
        });
        return _this;
    }
    PanelModel.prototype.getType = function () {
        return "panel";
    };
    Object.defineProperty(PanelModel.prototype, "isPanel", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "page", {
        /**
         * Get/set the page where the panel is located.
         */
        get: function () {
            return this.getPage(this.parent);
        },
        set: function (val) {
            this.setPage(this.parent, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "state", {
        /**
         * Set this property to "collapsed" to render only Panel title and expanded button and to "expanded" to render the collapsed button in the Panel caption
         */
        get: function () {
            return this.getPropertyValue("state", "default");
        },
        set: function (val) {
            this.setPropertyValue("state", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "isCollapsed", {
        /**
         * Returns true if the Panel is in the collapsed state
         * @see state
         * @see collapse
         * @see isExpanded
         */
        get: function () {
            return this.state == "collapsed";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "isExpanded", {
        /**
         * Returns true if the Panel is in the expanded state
         * @see state
         * @see expand
         * @see isCollapsed
         */
        get: function () {
            if (this.isDesignMode)
                return;
            return this.state == "expanded";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Collapse the Panel
     * @see state
     */
    PanelModel.prototype.collapse = function () {
        if (this.isDesignMode)
            return;
        this.state = "collapsed";
    };
    /**
     * Expand the Panel
     * @see state
     */
    PanelModel.prototype.expand = function () {
        this.state = "expanded";
    };
    PanelModel.prototype.hasErrorsCore = function (rec) {
        _super.prototype.hasErrorsCore.call(this, rec);
        if (this.isCollapsed && rec.result && rec.fireCallback) {
            this.expand();
        }
    };
    PanelModel.prototype.getRenderedTitle = function (str) {
        if (!str) {
            if (this.isCollapsed || this.isExpanded)
                return this.name;
            if (this.isDesignMode)
                return "[" + this.name + "]";
        }
        return _super.prototype.getRenderedTitle.call(this, str);
    };
    Object.defineProperty(PanelModel.prototype, "width", {
        /**
         * The Panel width.
         */
        get: function () {
            return this.getPropertyValue("width");
        },
        set: function (val) {
            this.setPropertyValue("width", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "innerIndent", {
        /**
         * The inner indent. Set this property to increase the panel content margin.
         */
        get: function () {
            return this.getPropertyValue("innerIndent", 0);
        },
        set: function (val) {
            this.setPropertyValue("innerIndent", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "renderWidth", {
        get: function () {
            return this.getPropertyValue("renderWidth");
        },
        set: function (val) {
            this.setPropertyValue("renderWidth", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "startWithNewLine", {
        /**
         * The Panel renders on the new line if the property is true. If the property is false, the panel tries to render on the same line/row with a previous question/panel.
         */
        get: function () {
            return this.getPropertyValue("startWithNewLine", true);
        },
        set: function (value) {
            this.setPropertyValue("startWithNewLine", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "rightIndent", {
        /**
         * The right indent of the Panel.
         */
        get: function () {
            return this.getPropertyValue("rightIndent", 0);
        },
        set: function (val) {
            this.setPropertyValue("rightIndent", val);
        },
        enumerable: true,
        configurable: true
    });
    PanelModel.prototype.onVisibleChanged = function () {
        _super.prototype.onVisibleChanged.call(this);
        this.setPropertyValue("isVisible", this.isVisible);
        if (this.survey != null) {
            this.survey.panelVisibilityChanged(this, this.visible);
        }
    };
    return PanelModel;
}(PanelModelBase));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("panelbase", [
    "name",
    {
        name: "elements",
        alternativeName: "questions",
        baseClassName: "question",
        visible: false
    },
    { name: "visible:boolean", default: true },
    "visibleIf:condition",
    {
        name: "questionTitleLocation",
        default: "default",
        choices: ["default", "top", "bottom", "left"]
    },
    { name: "title:text", serializationProperty: "locTitle" },
    { name: "description:text", serializationProperty: "locDescription" }
], function () {
    return new PanelModelBase();
});
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("panel", [
    {
        name: "state",
        default: "default",
        choices: ["default", "collapsed", "expanded"]
    },
    "isRequired:boolean",
    {
        name: "requiredErrorText:text",
        serializationProperty: "locRequiredErrorText"
    },
    { name: "startWithNewLine:boolean", default: true },
    { name: "innerIndent:number", default: 0, choices: [0, 1, 2, 3] },
    {
        name: "page",
        isSerializable: false,
        choices: function (obj) {
            var survey = obj ? obj.survey : null;
            return survey ? survey.pages : [];
        }
    }
], function () {
    return new PanelModel();
}, "panelbase");


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__choicesRestfull__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckboxBase; });








/**
 * It is a base class for checkbox, dropdown and radiogroup questions.
 */
var QuestionSelectBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionSelectBase, _super);
    function QuestionSelectBase(name) {
        var _this = _super.call(this, name) || this;
        _this.visibleChoicesCache = null;
        _this.otherItemValue = new __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */]("other", __WEBPACK_IMPORTED_MODULE_5__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText"));
        _this.choicesFromUrl = null;
        _this.cachedValueForUrlRequests = null;
        _this.isSettingComment = false;
        var self = _this;
        _this.choicesValues = _this.createItemValues("choices");
        _this.choicesByUrl = _this.createRestfull();
        _this.choicesByUrl.owner = _this;
        _this.createLocalizableString("otherText", _this, true);
        _this.createLocalizableString("otherErrorText", _this, true);
        _this.otherItemValue.locOwner = _this;
        _this.choicesByUrl.getResultCallback = function (items) {
            self.onLoadChoicesFromUrl(items);
        };
        return _this;
    }
    Object.defineProperty(QuestionSelectBase.prototype, "otherItem", {
        /**
         * Returns the other item. By using this property, you may change programmatically it's value and text.
         */
        get: function () {
            this.otherItemValue.text = this.otherText;
            return this.otherItemValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "isOtherSelected", {
        /**
         * Returns true if a user select the 'other' item.
         */
        get: function () {
            return this.getStoreOthersAsComment()
                ? this.getHasOther(this.value)
                : this.getHasOther(this.cachedValue);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.getHasOther = function (val) {
        return val == this.otherItem.value;
    };
    Object.defineProperty(QuestionSelectBase.prototype, "validatedValue", {
        get: function () {
            return this.valueToDataCore(this.value);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.createRestfull = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__choicesRestfull__["a" /* ChoicesRestfull */]();
    };
    QuestionSelectBase.prototype.getComment = function () {
        if (this.getStoreOthersAsComment())
            return _super.prototype.getComment.call(this);
        return this.commentValue;
    };
    QuestionSelectBase.prototype.setComment = function (newValue) {
        if (this.getStoreOthersAsComment())
            _super.prototype.setComment.call(this, newValue);
        else {
            if (!this.isSettingComment && newValue != this.commentValue) {
                this.isSettingComment = true;
                this.commentValue = newValue;
                if (this.isOtherSelected) {
                    this.setNewValueInData(this.cachedValue);
                }
                this.isSettingComment = false;
            }
        }
    };
    QuestionSelectBase.prototype.setNewValue = function (newValue) {
        this.cachedValueForUrlRequests = newValue;
        _super.prototype.setNewValue.call(this, newValue);
    };
    QuestionSelectBase.prototype.valueFromData = function (val) {
        if (this.getStoreOthersAsComment())
            return _super.prototype.valueFromData.call(this, val);
        this.cachedValue = this.valueFromDataCore(val);
        return this.cachedValue;
    };
    QuestionSelectBase.prototype.valueToData = function (val) {
        if (this.getStoreOthersAsComment())
            return _super.prototype.valueToData.call(this, val);
        this.cachedValue = val;
        return this.valueToDataCore(val);
    };
    QuestionSelectBase.prototype.valueFromDataCore = function (val) {
        if (!this.hasUnknownValue(val))
            return val;
        if (val == this.otherItem.value)
            return val;
        this.comment = val;
        return this.otherItem.value;
    };
    QuestionSelectBase.prototype.valueToDataCore = function (val) {
        if (val == this.otherItem.value && this.getComment()) {
            val = this.getComment();
        }
        return val;
    };
    QuestionSelectBase.prototype.hasUnknownValue = function (val) {
        if (!val)
            return false;
        var items = this.activeChoices;
        for (var i = 0; i < items.length; i++) {
            if (items[i].value == val)
                return false;
        }
        return true;
    };
    Object.defineProperty(QuestionSelectBase.prototype, "choices", {
        /**
         * The list of items. Every item has value and text. If text is empty, the value is rendered. The item text supports markdown.
         * @see choicesByUrl
         */
        get: function () {
            return this.choicesValues;
        },
        set: function (newValue) {
            this.setPropertyValue("choices", newValue);
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "storeOthersAsComment", {
        /**
         * By default the entered text in the others input in the checkbox/radiogroup/dropdown are stored as "question name " + "-Comment". The value itself is "question name": "others". Set this property to false, to store the entered text directly in the "question name" key.
         * @see SurveyModel.storeOthersAsComment
         */
        get: function () {
            return this.getPropertyValue("storeOthersAsComment", true);
        },
        set: function (val) {
            this.setPropertyValue("storeOthersAsComment", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.hasOtherChanged = function () {
        this.onVisibleChoicesChanged();
    };
    Object.defineProperty(QuestionSelectBase.prototype, "choicesOrder", {
        /**
         * Use this property to render items in a specific order.
         */
        get: function () {
            return this.getPropertyValue("choicesOrder", "none");
        },
        set: function (val) {
            val = val.toLowerCase();
            if (val == this.choicesOrder)
                return;
            this.setPropertyValue("choicesOrder", val);
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "otherText", {
        /**
         * Use this property to set the different text for other item.
         */
        get: function () {
            return this.getLocalizableStringText("otherText", __WEBPACK_IMPORTED_MODULE_5__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText"));
        },
        set: function (val) {
            this.setLocalizableStringText("otherText", val);
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "locOtherText", {
        get: function () {
            return this.getLocalizableString("otherText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "otherErrorText", {
        /**
         * The text that shows when the other item is choosed by the other input is empty.
         */
        get: function () {
            return this.getLocalizableStringText("otherErrorText", __WEBPACK_IMPORTED_MODULE_5__surveyStrings__["a" /* surveyLocalization */].getString("otherRequiredError"));
        },
        set: function (val) {
            this.setLocalizableStringText("otherErrorText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "locOtherErrorText", {
        get: function () {
            return this.getLocalizableString("otherErrorText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "visibleChoices", {
        /**
         * The list of items as they will be rendered. If needed items are sorted and the other item is added.
         * @see hasOther
         * @see choicesOrder
         */
        get: function () {
            if (!this.hasOther && this.choicesOrder == "none")
                return this.activeChoices;
            if (!this.visibleChoicesCache) {
                this.visibleChoicesCache = this.sortVisibleChoices(this.activeChoices.slice());
                if (this.hasOther) {
                    this.visibleChoicesCache.push(this.otherItem);
                }
            }
            return this.visibleChoicesCache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "displayValue", {
        /**
         * Returns the text for the current value. If the value is null then returns empty string. If 'other' is selected then returns the text for other value.
         */
        get: function () {
            if (this.isEmpty())
                return "";
            return this.getDisplayValue(this.visibleChoices, this.value);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.getDisplayValue = function (items, val) {
        if (val == this.otherItemValue.value)
            return this.comment ? this.comment : "";
        var str = __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].getTextOrHtmlByValue(items, val);
        return str == "" && val ? val : str;
    };
    Object.defineProperty(QuestionSelectBase.prototype, "activeChoices", {
        get: function () {
            return this.choicesFromUrl ? this.choicesFromUrl : this.choices;
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.supportComment = function () {
        return true;
    };
    QuestionSelectBase.prototype.supportOther = function () {
        return true;
    };
    QuestionSelectBase.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (!this.hasOther || !this.isOtherSelected || this.comment)
            return;
        errors.push(new __WEBPACK_IMPORTED_MODULE_6__error__["a" /* CustomError */](this.otherErrorText));
    };
    QuestionSelectBase.prototype.setSurveyImpl = function (value) {
        _super.prototype.setSurveyImpl.call(this, value);
        this.runChoicesByUrl();
    };
    QuestionSelectBase.prototype.onLocaleChanged = function () {
        _super.prototype.onLocaleChanged.call(this);
        this.onVisibleChoicesChanged();
    };
    QuestionSelectBase.prototype.getStoreOthersAsComment = function () {
        return (this.storeOthersAsComment &&
            (this.survey != null ? this.survey.storeOthersAsComment : true));
    };
    QuestionSelectBase.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        this.runChoicesByUrl();
        this.onVisibleChoicesChanged();
    };
    QuestionSelectBase.prototype.onAnyValueChanged = function (name) {
        _super.prototype.onAnyValueChanged.call(this, name);
        this.runChoicesByUrl();
    };
    QuestionSelectBase.prototype.runChoicesByUrl = function () {
        if (!this.choicesByUrl || this.isLoadingFromJson)
            return;
        var processor = this.surveyImpl
            ? this.surveyImpl.getTextProcessor()
            : this.textProcessor;
        if (!processor)
            processor = this.survey;
        if (!processor)
            return;
        this.choicesByUrl.run(processor);
    };
    QuestionSelectBase.prototype.onLoadChoicesFromUrl = function (array) {
        var errorCount = this.errors.length;
        this.errors = [];
        if (this.choicesByUrl && this.choicesByUrl.error) {
            this.errors.push(this.choicesByUrl.error);
        }
        if (errorCount > 0 || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        var newChoices = null;
        var cachedValues = this.createCachedValueForUrlRequests(this.cachedValueForUrlRequests);
        if (array && array.length > 0) {
            newChoices = new Array();
            __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].setData(newChoices, array);
        }
        this.choicesFromUrl = newChoices;
        if (newChoices) {
            var newValue = this.updateCachedValueForUrlRequests(cachedValues);
            if (newValue) {
                this.value = newValue.value;
            }
        }
        this.onVisibleChoicesChanged();
    };
    QuestionSelectBase.prototype.createCachedValueForUrlRequests = function (val) {
        if (this.isValueEmpty(val))
            return null;
        if (Array.isArray(val)) {
            var res = [];
            for (var i = 0; i < val.length; i++) {
                res.push(this.createCachedValueForUrlRequests(val[i]));
            }
            return res;
        }
        return { value: val, isExists: !this.hasUnknownValue(val) };
    };
    QuestionSelectBase.prototype.updateCachedValueForUrlRequests = function (val) {
        if (this.isValueEmpty(val))
            return null;
        if (Array.isArray(val)) {
            var res = [];
            for (var i = 0; i < val.length; i++) {
                var updatedValue = this.updateCachedValueForUrlRequests(val[i]);
                if (updatedValue && !this.isValueEmpty(updatedValue.value)) {
                    res.push(updatedValue.value);
                }
            }
            return { value: res };
        }
        var value = val.isExists && this.hasUnknownValue(val.value) ? null : val.value;
        return { value: value };
    };
    QuestionSelectBase.prototype.onVisibleChoicesChanged = function () {
        if (this.isLoadingFromJson)
            return;
        this.visibleChoicesCache = null;
        this.fireCallback(this.choicesChangedCallback);
    };
    QuestionSelectBase.prototype.sortVisibleChoices = function (array) {
        var order = this.choicesOrder.toLowerCase();
        if (order == "asc")
            return this.sortArray(array, 1);
        if (order == "desc")
            return this.sortArray(array, -1);
        if (order == "random")
            return this.randomizeArray(array);
        return array;
    };
    QuestionSelectBase.prototype.sortArray = function (array, mult) {
        return array.sort(function (a, b) {
            if (a.text < b.text)
                return -1 * mult;
            if (a.text > b.text)
                return 1 * mult;
            return 0;
        });
    };
    QuestionSelectBase.prototype.randomizeArray = function (array) {
        return __WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* Helpers */].randomizeArray(array);
    };
    QuestionSelectBase.prototype.clearUnusedValues = function () {
        _super.prototype.clearUnusedValues.call(this);
        if (!this.isOtherSelected && !this.hasComment) {
            this.comment = null;
        }
    };
    return QuestionSelectBase;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

/**
 * A base class for checkbox and radiogroup questions. It introduced a colCount property.
 */
var QuestionCheckboxBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxBase, _super);
    function QuestionCheckboxBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.colCountValue = 1;
        return _this;
    }
    Object.defineProperty(QuestionCheckboxBase.prototype, "colCount", {
        /**
         * The number of columns for radiogroup and checkbox questions. Items are rendred in one line if the value is 0.
         */
        get: function () {
            return this.colCountValue;
        },
        set: function (value) {
            if (value < 0 || value > 5)
                return;
            this.colCountValue = value;
            this.fireCallback(this.colCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    return QuestionCheckboxBase;
}(QuestionSelectBase));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("selectbase", [
    "hasComment:boolean",
    "hasOther:boolean",
    {
        name: "choices:itemvalues",
        onGetValue: function (obj) {
            return __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].getData(obj.choices);
        },
        onSetValue: function (obj, value) {
            obj.choices = value;
        }
    },
    {
        name: "choicesOrder",
        default: "none",
        choices: ["none", "asc", "desc", "random"]
    },
    {
        name: "choicesByUrl:restfull",
        className: "ChoicesRestfull",
        onGetValue: function (obj) {
            return obj.choicesByUrl.getData();
        },
        onSetValue: function (obj, value) {
            obj.choicesByUrl.setData(value);
        }
    },
    { name: "otherText", serializationProperty: "locOtherText" },
    { name: "otherErrorText", serializationProperty: "locOtherErrorText" },
    { name: "storeOthersAsComment:boolean", default: true }
], null, "question");
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("checkboxbase", [{ name: "colCount:number", default: 1, choices: [0, 1, 2, 3, 4, 5] }], null, "selectbase");


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRow; });
/* unused harmony export PanelImplementorBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Page; });







var QuestionRow = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRow, _super);
    function QuestionRow(panel) {
        var _this = _super.call(this, panel) || this;
        _this.panel = panel;
        _this.koVisible = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.visible);
        _this.koElements = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        var self = _this;
        _this.koGetType = function (el) {
            return self.getElementType(el);
        };
        _this.koElementAfterRender = function (el, con) {
            return self.elementAfterRender(el, con);
        };
        return _this;
    }
    QuestionRow.prototype.addElement = function (q) {
        _super.prototype.addElement.call(this, q);
        this.koElements(this.elements);
    };
    QuestionRow.prototype.onVisibleChanged = function () {
        this.koVisible(this.visible);
        _super.prototype.onVisibleChanged.call(this);
    };
    QuestionRow.prototype.getElementType = function (el) {
        return el.isPanel ? "survey-panel" : "survey-question";
    };
    QuestionRow.prototype.koAfterRender = function (el, con) {
        for (var i = 0; i < el.length; i++) {
            var tEl = el[i];
            var nName = tEl.nodeName;
            if (nName == "#text")
                tEl.data = "";
        }
    };
    QuestionRow.prototype.elementAfterRender = function (elements, con) {
        if (!this.panel || !this.panel.survey)
            return;
        var el = __WEBPACK_IMPORTED_MODULE_5__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
        if (!el)
            return;
        var element = con;
        if (element.isPanel) {
            this.panel.survey.afterRenderPanel(con, el);
        }
        else {
            this.panel.survey.afterRenderQuestion(con, el);
        }
    };
    return QuestionRow;
}(__WEBPACK_IMPORTED_MODULE_3__panel__["c" /* QuestionRowModel */]));

var PanelImplementorBase = /** @class */ (function () {
    function PanelImplementorBase(panel) {
        this.panel = panel;
        var self = this;
        this.koRows = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.panel.rowsChangedCallback = function () {
            self.koRows(self.panel.rows);
        };
        this.panel["koRows"] = this.koRows;
    }
    return PanelImplementorBase;
}());

var Panel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Panel, _super);
    function Panel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        new PanelImplementorBase(_this);
        _this.onCreating();
        var self = _this;
        _this.koElementType = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("survey-panel");
        _this.koVisible = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.isVisible);
        _this.koRenderWidth = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.renderWidth);
        _this.koErrors = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.errors);
        _this.koCss = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            return self.cssClasses;
        });
        _this.koIsCollapsed = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.isCollapsed);
        _this.koIsExpanded = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.isExpanded);
        _this.stateChangedCallback = function () {
            self.onStateChanged();
        };
        _this.errorsChangedCallback = function () {
            self.koErrors(self.errors);
        };
        _this.doExpand = function () {
            self.changeExpanded();
        };
        _this.registerFunctionOnPropertiesValueChanged(["renderWidth", "innerIndent", "rightIndent"], function () {
            self.onRenderWidthChanged();
        });
        _this.koInnerMargin = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.getIndentSize(_this.innerIndent));
        return _this;
    }
    Panel.prototype.createRow = function () {
        return new QuestionRow(this);
    };
    Panel.prototype.onCreating = function () { };
    Panel.prototype.onNumChanged = function (value) {
        this.locTitle.onChanged();
    };
    Panel.prototype.onRenderWidthChanged = function () {
        this.koRenderWidth(this.renderWidth);
        this.koInnerMargin(this.getIndentSize(this.innerIndent));
    };
    Panel.prototype.onStateChanged = function () {
        this.koIsCollapsed(this.isCollapsed);
        this.koIsExpanded(this.isExpanded);
    };
    Panel.prototype.changeExpanded = function () {
        if (!this.isCollapsed && !this.isExpanded)
            return;
        if (this.isCollapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    Panel.prototype.endLoadingFromJson = function () {
        _super.prototype.endLoadingFromJson.call(this);
        this.koVisible(this.isVisible);
        this.onStateChanged();
    };
    Panel.prototype.onVisibleChanged = function () {
        _super.prototype.onVisibleChanged.call(this);
        this.koVisible(this.isVisible);
    };
    Panel.prototype.getIndentSize = function (indent) {
        if (indent < 1)
            return "";
        if (!this.data)
            return "";
        var css = this.survey["css"];
        if (!css)
            return "";
        return indent * css.question.indent + "px";
    };
    return Panel;
}(__WEBPACK_IMPORTED_MODULE_3__panel__["b" /* PanelModel */]));

var Page = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Page, _super);
    function Page(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        new PanelImplementorBase(_this);
        _this.onCreating();
        return _this;
    }
    Page.prototype.createRow = function () {
        return new QuestionRow(this);
    };
    Page.prototype.createNewPanel = function (name) {
        return new Panel(name);
    };
    Page.prototype.onCreating = function () { };
    Page.prototype.onNumChanged = function (value) {
        this.locTitle.onChanged();
    };
    return Page;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* PageModel */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("panel", function () {
    return new Panel();
});
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("page", function () {
    return new Page();
});
__WEBPACK_IMPORTED_MODULE_6__questionfactory__["b" /* ElementFactory */].Instance.registerElement("panel", function (name) {
    return new Panel(name);
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionImplementorBase; });

var QuestionImplementorBase = /** @class */ (function () {
    function QuestionImplementorBase(question) {
        this.question = question;
        var self = this;
        question.registerFunctionOnPropertyValueChanged("isVisible", function () {
            self.onVisibilityChanged();
        });
        question.registerFunctionOnPropertiesValueChanged(["renderWidth", "indent", "rightIndent"], function () {
            self.onRenderWidthChanged();
        });
        question.surveyLoadCallback = function () {
            self.onSurveyLoad();
        };
        this.koTemplateName = __WEBPACK_IMPORTED_MODULE_0_knockout__["pureComputed"](function () {
            return self.getTemplateName();
        });
        this.koElementType = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("survey-question");
        this.koVisible = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.question.isVisible);
        this.koRenderWidth = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.question.renderWidth);
        this.koErrors = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koPaddingLeft = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](self.getIndentSize(self.question.indent));
        this.koPaddingRight = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](self.getIndentSize(self.question.rightIndent));
        this.question["koElementType"] = this.koElementType;
        this.question["koTemplateName"] = this.koTemplateName;
        this.question["koVisible"] = this.koVisible;
        this.question["koRenderWidth"] = this.koRenderWidth;
        this.question["koErrors"] = this.koErrors;
        this.question["koPaddingLeft"] = this.koPaddingLeft;
        this.question["koPaddingRight"] = this.koPaddingRight;
        this.question["updateQuestion"] = function () {
            self.updateQuestion();
        };
        this.question["koCss"] = __WEBPACK_IMPORTED_MODULE_0_knockout__["pureComputed"](function () {
            return self.question.cssClasses;
        });
        this.question["koRootClass"] = __WEBPACK_IMPORTED_MODULE_0_knockout__["pureComputed"](function () {
            if (self.question.survey.questionTitleLocation === "left") {
                return self.question.cssClasses.mainRoot + " sv_qstn_left";
            }
            return self.question.cssClasses.mainRoot;
        });
    }
    QuestionImplementorBase.prototype.updateQuestion = function () { };
    QuestionImplementorBase.prototype.onSurveyLoad = function () {
        this.onVisibilityChanged();
    };
    QuestionImplementorBase.prototype.onVisibilityChanged = function () {
        this.koVisible(this.question.isVisible);
    };
    QuestionImplementorBase.prototype.onRenderWidthChanged = function () {
        this.koRenderWidth(this.question.renderWidth);
        this.koPaddingLeft(this.getIndentSize(this.question.indent));
        this.koPaddingRight(this.getIndentSize(this.question.rightIndent));
    };
    QuestionImplementorBase.prototype.getIndentSize = function (indent) {
        if (indent < 1)
            return "";
        return indent * this.question.cssClasses.indent + "px";
    };
    QuestionImplementorBase.prototype.getTemplateName = function () {
        if (this.question.customWidget &&
            !this.question.customWidget.widgetJson.isDefaultRender)
            return "survey-widget-" + this.question.customWidget.name;
        return "survey-question-" + this.question.getTemplate();
    };
    return QuestionImplementorBase;
}());



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panel__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModel; });





/**
 * The page object. It has elements collection, that contains questions and panels.
 */
var PageModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PageModel, _super);
    function PageModel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.hasShownValue = false;
        return _this;
    }
    PageModel.prototype.getType = function () {
        return "page";
    };
    PageModel.prototype.toString = function () {
        return this.name;
    };
    Object.defineProperty(PageModel.prototype, "visibleIndex", {
        /**
         * The visible index of the page. It has values from 0 to visible page count - 1.
         * @see SurveyModel.visiblePages
         * @see SurveyModel.pages
         */
        get: function () {
            return this.getPropertyValue("visibleIndex", -1);
        },
        set: function (val) {
            this.setPropertyValue("visibleIndex", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "isStarted", {
        /**
         * Returns true, if the page is started page in the survey. It can be shown on the start only and the end-user could not comeback to it after it passed it.
         */
        get: function () {
            return this.survey && this.survey.isPageStarted(this);
        },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.getIsPageVisible = function (exceptionQuestion) {
        if (this.isStarted)
            return false;
        return _super.prototype.getIsPageVisible.call(this, exceptionQuestion);
    };
    Object.defineProperty(PageModel.prototype, "num", {
        get: function () {
            return this.getPropertyValue("num", -1);
        },
        set: function (val) {
            if (this.num == val)
                return;
            this.setPropertyValue("num", val);
            this.onNumChanged(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "navigationButtonsVisibility", {
        /**
         * Set this property to "hide" to make "Prev", "Next" and "Complete" buttons are invisible for this page. Set this property to "show" to make these buttons visible, even if survey showNavigationButtons property is false.
         * @see SurveyMode.showNavigationButtons
         */
        get: function () {
            return this.getPropertyValue("navigationButtonsVisibility", "inherit");
        },
        set: function (val) {
            this.setPropertyValue("navigationButtonsVisibility", val.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.getRenderedTitle = function (str) {
        str = _super.prototype.getRenderedTitle.call(this, str);
        if (this.num > 0) {
            str = this.num + ". " + str;
        }
        return str;
    };
    Object.defineProperty(PageModel.prototype, "wasShown", {
        /**
         * The property returns true, if the page has been shown to the end-user.
         */
        get: function () {
            return this.hasShownValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "hasShown", {
        get: function () {
            return this.wasShown;
        },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.setWasShown = function (val) {
        if (this.survey.isDesignMode)
            return;
        if (val == this.hasShownValue)
            return;
        if (val == true && this.areQuestionsRandomized) {
            this.randomizeElements();
        }
        this.hasShownValue = val;
    };
    PageModel.prototype.randomizeElements = function () {
        var oldElements = [];
        for (var i = 0; i < this.elements.length; i++) {
            oldElements.push(this.elements[i]);
        }
        var newElements = __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].randomizeArray(oldElements);
        this.elements.splice(0, this.elements.length);
        for (var i = 0; i < newElements.length; i++) {
            this.elements.push(newElements[i]);
        }
    };
    Object.defineProperty(PageModel.prototype, "areQuestionsRandomized", {
        /**
         * The property returns true, if the elements are randomized on the page
         * @see hasShown
         * @see questionsOrder
         * @see SurveyModel.questionsOrder
         */
        get: function () {
            var order = this.questionsOrder == "default" && this.survey
                ? this.survey.questionsOrder
                : this.questionsOrder;
            return order == "random";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "questionsOrder", {
        /**
         * Use this property to randomize questions. Set it to 'random' to randomize questions, 'initial' to keep them in the same order or 'default' to use the Survey questionsOrder property
         * @see SurveyModel.questionsOrder
         * @see areQuestionsRandomized
         */
        get: function () {
            return this.getPropertyValue("questionsOrder", "default");
        },
        set: function (val) {
            this.setPropertyValue("questionsOrder", val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call it to focus the input on the first question
     */
    PageModel.prototype.focusFirstQuestion = function () {
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            if (!question.visible || !question.hasInput)
                continue;
            this.questions[i].focus();
            break;
        }
    };
    /**
     * Call it to focus the input of the first question that has an error.
     */
    PageModel.prototype.focusFirstErrorQuestion = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (!this.questions[i].visible ||
                this.questions[i].currentErrorCount == 0)
                continue;
            this.questions[i].focus(true);
            break;
        }
    };
    /**
     * Call it to scroll to the page top.
     */
    PageModel.prototype.scrollToTop = function () {
        __WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].ScrollElementToTop(this.id);
    };
    Object.defineProperty(PageModel.prototype, "timeSpent", {
        /**
         * Time in seconds end-user spent on this page
         */
        get: function () {
            return this.getPropertyValue("timeSpent", 0);
        },
        set: function (val) {
            this.setPropertyValue("timeSpent", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageModel.prototype, "maxTimeToFinish", {
        /**
         * The maximum time in seconds that end-user has to complete the page. If the value is 0 or less, the end-user has unlimited number of time to finish the page.
         * @see startTimer
         * @see SurveyModel.maxTimeToFinishPage
         */
        get: function () {
            return this.getPropertyValue("maxTimeToFinish", 0);
        },
        set: function (val) {
            this.setPropertyValue("maxTimeToFinish", val);
        },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.onNumChanged = function (value) { };
    PageModel.prototype.onVisibleChanged = function () {
        _super.prototype.onVisibleChanged.call(this);
        if (this.survey != null) {
            this.survey.pageVisibilityChanged(this, this.visible);
        }
    };
    return PageModel;
}(__WEBPACK_IMPORTED_MODULE_4__panel__["a" /* PanelModelBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("page", [
    {
        name: "navigationButtonsVisibility",
        default: "inherit",
        choices: ["inherit", "show", "hide"]
    },
    {
        name: "questionsOrder",
        default: "default",
        choices: ["default", "initial", "random"]
    },
    { name: "maxTimeToFinish:number", default: 0 }
], function () {
    return new PageModel();
}, "panelbase");


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionCustomWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomWidgetCollection; });

var QuestionCustomWidget = /** @class */ (function () {
    function QuestionCustomWidget(name, widgetJson) {
        this.name = name;
        this.widgetJson = widgetJson;
        this.htmlTemplate = widgetJson.htmlTemplate ? widgetJson.htmlTemplate : "";
    }
    QuestionCustomWidget.prototype.afterRender = function (question, el) {
        if (this.widgetJson.afterRender)
            this.widgetJson.afterRender(question, el);
    };
    QuestionCustomWidget.prototype.willUnmount = function (question, el) {
        if (this.widgetJson.willUnmount)
            this.widgetJson.willUnmount(question, el);
    };
    QuestionCustomWidget.prototype.isFit = function (question) {
        if (this.isLibraryLoaded() && this.widgetJson.isFit)
            return this.widgetJson.isFit(question);
        return false;
    };
    QuestionCustomWidget.prototype.activatedByChanged = function (activatedBy) {
        if (this.isLibraryLoaded() && this.widgetJson.activatedByChanged) {
            this.widgetJson.activatedByChanged(activatedBy);
        }
    };
    QuestionCustomWidget.prototype.isLibraryLoaded = function () {
        if (this.widgetJson.widgetIsLoaded)
            return this.widgetJson.widgetIsLoaded() == true;
        return true;
    };
    Object.defineProperty(QuestionCustomWidget.prototype, "isDefaultRender", {
        get: function () {
            return this.widgetJson.isDefaultRender;
        },
        enumerable: true,
        configurable: true
    });
    return QuestionCustomWidget;
}());

var CustomWidgetCollection = /** @class */ (function () {
    function CustomWidgetCollection() {
        this.widgetsValues = [];
        this.widgetsActivatedBy = {};
        this.onCustomWidgetAdded = new __WEBPACK_IMPORTED_MODULE_0__base__["b" /* Event */]();
    }
    Object.defineProperty(CustomWidgetCollection.prototype, "widgets", {
        get: function () {
            return this.widgetsValues;
        },
        enumerable: true,
        configurable: true
    });
    CustomWidgetCollection.prototype.addCustomWidget = function (widgetJson, activatedBy) {
        if (activatedBy === void 0) { activatedBy = "property"; }
        var name = widgetJson.name;
        if (!name) {
            name = "widget_" + this.widgets.length + 1;
        }
        var customWidget = new QuestionCustomWidget(name, widgetJson);
        this.widgetsValues.push(customWidget);
        this.widgetsActivatedBy[name] = activatedBy;
        customWidget.activatedByChanged(activatedBy);
        this.onCustomWidgetAdded.fire(customWidget, null);
    };
    /**
     * Returns the way the custom wiget is activated. It can be activated by a property ("property"), question type ("type") or by new/custom question type ("customtype").
     * @param widgetName the custom widget name
     * @see setActivatedBy
     */
    CustomWidgetCollection.prototype.getActivatedBy = function (widgetName) {
        var res = this.widgetsActivatedBy[widgetName];
        return res ? res : "property";
    };
    /**
     * Sets the way the custom wiget is activated. The activation types are: property ("property"), question type ("type") or new/custom question type ("customtype"). A custom wiget may support all or only some of this activation types.
     * @param widgetName
     * @param activatedBy there are three possible variants: "property", "type" and "customtype"
     */
    CustomWidgetCollection.prototype.setActivatedBy = function (widgetName, activatedBy) {
        if (!widgetName || !activatedBy)
            return;
        var widget = this.getCustomWidgetByName(widgetName);
        if (!widget)
            return;
        this.widgetsActivatedBy[widgetName] = activatedBy;
        widget.activatedByChanged(activatedBy);
    };
    CustomWidgetCollection.prototype.clear = function () {
        this.widgetsValues = [];
    };
    CustomWidgetCollection.prototype.getCustomWidgetByName = function (name) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].name == name)
                return this.widgets[i];
        }
        return null;
    };
    CustomWidgetCollection.prototype.getCustomWidget = function (question) {
        for (var i = 0; i < this.widgetsValues.length; i++) {
            if (this.widgetsValues[i].isFit(question))
                return this.widgetsValues[i];
        }
        return null;
    };
    CustomWidgetCollection.Instance = new CustomWidgetCollection();
    return CustomWidgetCollection;
}());



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionTextModel; });




/**
 * A Model for an input text question.
 */
var QuestionTextModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionTextModel, _super);
    function QuestionTextModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("placeHolder", _this);
        return _this;
    }
    QuestionTextModel.prototype.getType = function () {
        return "text";
    };
    Object.defineProperty(QuestionTextModel.prototype, "inputType", {
        /**
         * Use this property to change the default input type.
         */
        get: function () {
            return this.getPropertyValue("inputType", "text");
        },
        set: function (val) {
            val = val.toLowerCase();
            if (val == "datetime_local")
                val = "datetime-local";
            this.setPropertyValue("inputType", val.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionTextModel.prototype, "size", {
        /**
         * The text input size
         */
        get: function () {
            return this.getPropertyValue("size", 25);
        },
        set: function (val) {
            this.setPropertyValue("size", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionTextModel.prototype.isEmpty = function () {
        return _super.prototype.isEmpty.call(this) || this.value === "";
    };
    QuestionTextModel.prototype.supportGoNextPageAutomatic = function () {
        return true;
    };
    Object.defineProperty(QuestionTextModel.prototype, "placeHolder", {
        /**
         * The input place holder.
         */
        get: function () {
            return this.getLocalizableStringText("placeHolder");
        },
        set: function (val) {
            this.setLocalizableStringText("placeHolder", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionTextModel.prototype, "locPlaceHolder", {
        get: function () {
            return this.getLocalizableString("placeHolder");
        },
        enumerable: true,
        configurable: true
    });
    QuestionTextModel.prototype.setNewValue = function (newValue) {
        newValue = this.correctValueType(newValue);
        _super.prototype.setNewValue.call(this, newValue);
    };
    QuestionTextModel.prototype.correctValueType = function (newValue) {
        if (!newValue)
            return newValue;
        if (this.inputType == "number" || this.inputType == "range") {
            return this.isNumber(newValue) ? parseFloat(newValue) : "";
        }
        return newValue;
    };
    QuestionTextModel.prototype.isNumber = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return QuestionTextModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("text", [
    {
        name: "inputType",
        default: "text",
        choices: [
            "color",
            "date",
            "datetime",
            "datetime-local",
            "email",
            "month",
            "number",
            "password",
            "range",
            "tel",
            "text",
            "time",
            "url",
            "week"
        ]
    },
    { name: "size:number", default: 25 },
    { name: "placeHolder", serializationProperty: "locPlaceHolder" }
], function () {
    return new QuestionTextModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_1__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("text", function (name) {
    return new QuestionTextModel(name);
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditions__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionCustomWidgets__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });






/**
 * A base class for all questions. QuestionBase doesn't have information about title, values, errors and so on.
 * Those properties are defined in the Question class.
 */
var QuestionBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionBase, _super);
    function QuestionBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.conditionRunner = null;
        _this.isCustomWidgetRequested = false;
        _this.customWidgetData = { isNeedRender: true };
        /**
         * The event is fired when the survey change it's locale
         * @see SurveyModel.locale
         */
        _this.localeChanged = new __WEBPACK_IMPORTED_MODULE_1__base__["b" /* Event */]();
        _this.locOwner = null;
        _this.id = QuestionBase.getQuestionId();
        _this.onCreating();
        return _this;
    }
    QuestionBase.getQuestionId = function () {
        return "sq_" + QuestionBase.questionCounter++;
    };
    QuestionBase.prototype.getType = function () {
        return "questionbase";
    };
    QuestionBase.prototype.setSurveyImpl = function (value) {
        _super.prototype.setSurveyImpl.call(this, value);
        if (this.survey && this.survey.isDesignMode)
            this.onVisibleChanged();
    };
    Object.defineProperty(QuestionBase.prototype, "parent", {
        /**
         * A parent element. It can be panel or page.
         */
        get: function () {
            return this.getPropertyValue("parent", null);
        },
        set: function (val) {
            this.setPropertyValue("parent", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.isAnswerCorrect = function () {
        return false;
    };
    QuestionBase.prototype.getValueName = function () {
        return this.name;
    };
    Object.defineProperty(QuestionBase.prototype, "page", {
        /**
         * Get/set the page where the question is located.
         */
        get: function () {
            return this.getPage(this.parent);
        },
        set: function (val) {
            this.setPage(this.parent, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "isPanel", {
        /**
         * Always returns false.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "visible", {
        /**
         * Use it to get/set the question visibility.
         * @see visibleIf
         */
        get: function () {
            return this.getPropertyValue("visible", true);
        },
        set: function (val) {
            if (val == this.visible)
                return;
            this.setPropertyValue("visible", val);
            this.onVisibleChanged();
            if (this.survey) {
                this.survey.questionVisibilityChanged(this, this.visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.onVisibleChanged = function () {
        this.setPropertyValue("isVisible", this.isVisible);
        if (!this.isVisible && this.errors && this.errors.length > 0) {
            this.errors = [];
            this.fireCallback(this.errorsChangedCallback);
        }
    };
    Object.defineProperty(QuestionBase.prototype, "visibleIf", {
        /**
         * An expression that returns true or false. If it returns true the Question becomes visible and if it returns false the Question becomes invisible. The library runs the expression on survey start and on changing a question value. If the property is empty then visible property is used.
         * @see visible
         */
        get: function () {
            return this.getPropertyValue("visibleIf", "");
        },
        set: function (val) {
            this.setPropertyValue("visibleIf", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "isVisible", {
        /**
         * Returns true if the question is visible or survey is in design mode right now.
         */
        get: function () {
            return this.visible || this.isDesignMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "isReadOnly", {
        /**
         * Returns true if there is no input in the question. It always returns true for html question or survey is in 'display' mode.
         * @see QuestionHtmlModel
         * @see SurveyModel.mode
         * @see Question.readOnly
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "visibleIndex", {
        /**
         * Returns the visible index of the question in the survey. It can be from 0 to all visible questions count - 1
         */
        get: function () {
            return this.getPropertyValue("visibleIndex", -1);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns true if there is at least one error on question validation.
     * @param fireCallback set it to true to show error in UI
     */
    QuestionBase.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        return false;
    };
    /**
     * Returns true if the question value is empty
     */
    QuestionBase.prototype.isEmpty = function () {
        return true;
    };
    Object.defineProperty(QuestionBase.prototype, "currentErrorCount", {
        /**
         * Returns the number of erros on validation.
         */
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasTitle", {
        /**
         * Returns false if the question doesn't have a title property, for example: QuestionHtmlModel
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasDescription", {
        /**
         * Returns false if the question doesn't have a description property, for example: QuestionHtmlModel, or description property is empty.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasInput", {
        /**
         * Returns false if the question doesn't have an input element, for example: QuestionHtmlModel
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasComment", {
        /**
         * Returns true, if you can have a comment for the question.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "id", {
        /**
         * The unique identificator. It is generated automatically.
         */
        get: function () {
            return this.getPropertyValue("id");
        },
        set: function (val) {
            this.setPropertyValue("id", val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the list of errors that has in the question. For example, isRequired error.
     */
    QuestionBase.prototype.getAllErrors = function () {
        return [];
    };
    Object.defineProperty(QuestionBase.prototype, "customWidget", {
        /**
         * The link to the custom widget.
         */
        get: function () {
            if (!this.isCustomWidgetRequested && !this.customWidgetValue) {
                this.isCustomWidgetRequested = true;
                this.updateCustomWidget();
            }
            return this.customWidgetValue;
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.updateCustomWidget = function () {
        this.customWidgetValue = __WEBPACK_IMPORTED_MODULE_5__questionCustomWidgets__["a" /* CustomWidgetCollection */].Instance.getCustomWidget(this);
    };
    Object.defineProperty(QuestionBase.prototype, "startWithNewLine", {
        /**
         * The Question renders on the new line if the property is true. If the property is false, the question tries to render on the same line/row with a previous question/panel.
         */
        get: function () {
            return this.getPropertyValue("startWithNewLine", true);
        },
        set: function (val) {
            if (this.startWithNewLine == val)
                return;
            this.setPropertyValue("startWithNewLine", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "cssClasses", {
        /**
         * Returns all css classes that used for rendering the question. You may use survey.updateQuestionCssClasses event to override css classes for a question.
         * @see SurveyModel.updateQuestionCssClasses
         */
        get: function () {
            var surveyCss = this.css;
            var classes = { error: {} };
            this.copyCssClasses(classes, surveyCss.question);
            this.copyCssClasses(classes.error, surveyCss.error);
            this.updateCssClasses(classes, surveyCss);
            if (this.survey) {
                this.survey.updateQuestionCssClasses(this, classes);
            }
            return classes;
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.getRootCss = function (classes) {
        return classes.question.root;
    };
    QuestionBase.prototype.updateCssClasses = function (res, surveyCss) {
        var objCss = surveyCss[this.getType()];
        if (objCss === undefined || objCss === null)
            return;
        if (typeof objCss === "string" || objCss instanceof String) {
            res.root = objCss;
        }
        else {
            for (var key in objCss) {
                res[key] = objCss[key];
            }
        }
    };
    Object.defineProperty(QuestionBase.prototype, "css", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssstandard__["b" /* surveyCss */].getCss();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "width", {
        /**
         * Use it to set the specific width to the question.
         */
        get: function () {
            return this.getPropertyValue("width", "");
        },
        set: function (val) {
            this.setPropertyValue("width", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "renderWidth", {
        /**
         * The rendered width of the question.
         */
        get: function () {
            return this.getPropertyValue("renderWidth", "");
        },
        set: function (val) {
            this.setPropertyValue("renderWidth", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "indent", {
        /**
         * Set it different from 0 to increase the left padding.
         */
        get: function () {
            return this.getPropertyValue("indent", 0);
        },
        set: function (val) {
            this.setPropertyValue("indent", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "rightIndent", {
        /**
         * Set it different from 0 to increase the right padding.
         */
        get: function () {
            return this.getPropertyValue("rightIndent", 0);
        },
        set: function (val) {
            this.setPropertyValue("rightIndent", val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Focus the question input.
     * @param onError Focus if there is an error.
     */
    QuestionBase.prototype.focus = function (onError) {
        if (onError === void 0) { onError = false; }
    };
    QuestionBase.prototype.fireCallback = function (callback) {
        if (callback)
            callback();
    };
    QuestionBase.prototype.onCreating = function () { };
    /**
     * Run visibleIf and enableIf expressions. If visibleIf or/and enabledIf are not empty, then the results of performing the expression (true or false) set to the visible/readOnly properties.
     * @param values Typically survey results
     * @see visible
     * @see visibleIf
     * @see readOnly
     * @see enableIf
     */
    QuestionBase.prototype.runCondition = function (values) {
        if (!this.visibleIf)
            return;
        if (!this.conditionRunner)
            this.conditionRunner = new __WEBPACK_IMPORTED_MODULE_3__conditions__["a" /* ConditionRunner */](this.visibleIf);
        this.conditionRunner.expression = this.visibleIf;
        this.visible = this.conditionRunner.run(values);
    };
    //IQuestion
    QuestionBase.prototype.onSurveyValueChanged = function (newValue) { };
    QuestionBase.prototype.onSurveyLoad = function () {
        this.fireCallback(this.surveyLoadCallback);
    };
    QuestionBase.prototype.setVisibleIndex = function (val) {
        if (this.visibleIndex == val)
            return 1;
        this.setPropertyValue("visibleIndex", val);
        return 1;
    };
    QuestionBase.prototype.removeElement = function (element) {
        return false;
    };
    QuestionBase.prototype.supportGoNextPageAutomatic = function () {
        return false;
    };
    QuestionBase.prototype.clearUnusedValues = function () { };
    Object.defineProperty(QuestionBase.prototype, "displayValue", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.clearValue = function () { };
    QuestionBase.prototype.clearValueIfInvisible = function () { };
    QuestionBase.prototype.onLocaleChanged = function () {
        _super.prototype.onLocaleChanged.call(this);
        this.localeChanged.fire(this, this.getLocale());
    };
    QuestionBase.prototype.onReadOnlyChanged = function () { };
    QuestionBase.prototype.onAnyValueChanged = function (name) { };
    //ILocalizableOwner
    /**
     * Returns the current survey locale
     * @see SurveyModel.locale
     */
    QuestionBase.prototype.getLocale = function () {
        return this.survey
            ? this.survey.getLocale()
            : this.locOwner ? this.locOwner.getLocale() : "";
    };
    QuestionBase.prototype.getMarkdownHtml = function (text) {
        return this.survey
            ? this.survey.getMarkdownHtml(text)
            : this.locOwner ? this.locOwner.getMarkdownHtml(text) : null;
    };
    QuestionBase.questionCounter = 100;
    return QuestionBase;
}(__WEBPACK_IMPORTED_MODULE_1__base__["c" /* SurveyElement */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("questionbase", [
    "!name",
    { name: "visible:boolean", default: true },
    "visibleIf:condition",
    { name: "width" },
    { name: "startWithNewLine:boolean", default: true },
    { name: "indent:number", default: 0, choices: [0, 1, 2, 3] },
    {
        name: "page",
        isSerializable: false,
        choices: function (obj) {
            var survey = obj ? obj.survey : null;
            return survey ? survey.pages : [];
        }
    }
]);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textPreProcessor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stylesmanager__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__surveytimer__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyModel; });











/**
 * Survey object contains information about the survey. Pages, Questions, flow logic and etc.
 */
var SurveyModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyModel, _super);
    function SurveyModel(jsonObj) {
        if (jsonObj === void 0) { jsonObj = null; }
        var _this = _super.call(this) || this;
        _this.currentPageValue = null;
        _this.valuesHash = {};
        _this.variablesHash = {};
        _this.localeValue = "";
        _this.isCompleted = false;
        _this.isStartedState = false;
        _this.isCompletedBefore = false;
        _this.isLoading = false;
        _this.completedStateValue = "";
        _this.completedStateTextValue = "";
        _this.isTimerStarted = false;
        /**
         * The event is fired after a user click on 'Complete' button and finished the survey. You may use it to send the data to your web server.
         * <br/> sender the survey object that fires the event
         * <br/> options.showDataSaving(text) call this method to show that the survey is saving the data on your server. The text is an optional parameter to show your message instead of default.
         * <br/> options.showDataSavingError(text) call this method to show that there is an error on saving the data on your server. If you want to show a custom error, use an optional text parameter.
         * <br/> options.showDataSavingSuccess(text) call this method to show that the data were successful saved on the server.
         * <br/> options.showDataSavingClear call this method to hide the text about the saving progress.
         * @see data
         * @see clearInvisibleValues
         * @see completeLastPage
         * @see surveyPostId
         */
        _this.onComplete = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired after the survey changed it's state from "starting" to "running". The "starting" state means that survey shows the started page.
         * The firstPageIsStarted property should be set to the true, if you want to have the started page in your survey. The end-user should click on the "Start" button to start the survey.
         * @see firstPageIsStarted
         */
        _this.onStarted = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on clicking 'Next' page if sendResultOnPageNext is set to true. You may use it to save the intermediate results, for example, if your survey is large enough.
         * <br/> sender the survey object that fires the event
         * @see sendResultOnPageNext
         */
        _this.onPartialSend = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired when another page becomes the current. Typically it happens when a user click on 'Next' or 'Prev' buttons.
         * <br/> sender the survey object that fires the event
         * <br/> option.oldCurrentPage the previous current/active page
         * <br/> option.newCurrentPage a new current/active page
         * @see currentPage
         * @see currentPageNo
         * @see nextPage
         * @see prevPage
         * @see completeLastPage
         */
        _this.onCurrentPageChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired when the question value is changed. It can be done via UI by a user or programmatically on calling setValue method.
         * <br/> sender the survey object that fires the event
         * <br/> options.name the value name that has been changed
         * <br/> options.question a question which question.name equals to the value name. If there are several questions with the same name, the first question is taken. If there is no such questions, the options.question is null.
         * <br/> options.value a new value
         * @see setValue
         */
        _this.onValueChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on changing a question visibility.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a question which visibility has been changed
         * <br/> options.name a question name
         * <br/> options.visible a question visible boolean value
         * @see QuestionBase.visibile
         * @see QuestionBase.visibileIf
         */
        _this.onVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on changing a page visibility.
         * <br/> sender the survey object that fires the event
         * <br/> options.page a page  which visibility has been changed
         * <br/> options.visible a page visible boolean value
         * @see PageModel.visibile
         * @see PageModel.visibileIf
         */
        _this.onPageVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on changing a panel visibility.
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a panel which visibility has been changed
         * <br/> options.visible a panel visible boolean value
         * @see PanelModel.visibile
         * @see PanelModel.visibileIf
         */
        _this.onPanelVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a new question into survey.
         * 'question': question, 'name': question.name, 'index': index, 'parentPanel': parentPanel, 'rootPanel': rootPanel
         * <br/> sender the survey object that fires the event
         * <br/> options.question a newly added question object.
         * <br/> options.name a question name
         * <br/> options.index a index of the question in the container (page or panel)
         * <br/> options.parentPanel a container where question is located. It can be page or panel.
         * <br/> options.rootPanel typically it is a page.
         * @see QuestionBase
         */
        _this.onQuestionAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on removing a question from survey
         * <br/> sender the survey object that fires the event
         * <br/> options.question a removed question object.
         * <br/> options.name a question name
         * @see QuestionBase
         */
        _this.onQuestionRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a panel into survey
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a newly added panel object.
         * <br/> options.name a panel name
         * <br/> options.index a index of the panel in the container (page or panel)
         * <br/> options.parentPanel a container where question is located. It can be page or panel.
         * <br/> options.rootPanel typically it is a page.
         * @see PanelModel
         */
        _this.onPanelAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on removing a panel from survey
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a removed panel object.
         * <br/> options.name a panel name
         * @see PanelModel
         */
        _this.onPanelRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a page into survey
         * <br/> sender the survey object that fires the event
         * <br/> options.page a newly added panel object.
         * @see PanelModel
         */
        _this.onPageAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on validating value in a question. Set your error to options.error and survey will show the error for the question and block completing the survey or going to the next page.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a question
         * <br/> options.name a question name
         * <br/> options.value the current question value
         * <br/> options.error an error string. It is empty by default.
         * @see onServerValidateQuestions
         */
        _this.onValidateQuestion = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * Use this event to modify the html before rendering, for example html on 'Thank you' page. Options has one parameter: options.html.
         * <br/> sender the survey object that fires the event
         * <br/> options.html an html that you may change before text processing and then rendering.
         * @see completedHtml
         * @see loadingHtml
         * @see QuestionHtmlModel.html
         */
        /**
         * The event is fired on validating a panel. Set your error to options.error and survey will show the error for the panel and block completing the survey or going to the next page.
         * <br/> sender the survey object that fires the event
         * <br/> options.name a panel name
         * <br/> options.error an error string. It is empty by default.
         * @see onValidateQuestion
         */
        _this.onValidatePanel = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onProcessHtml = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * Use this event to process the markdown text.
         * <br/> sender the survey object that fires the event
         * <br/> options.text a text that is going to be rendered
         * <br/> options.html a html. It is null by default. Set it and survey will use it instead of options.text
         */
        _this.onTextMarkdown = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event fires when it get response from the [dxsurvey.com](http://www.dxsurvey.com) service on saving survey results. Use it to find out if the results have been saved successful.
         * <br/> sender the survey object that fires the event
         * <br/> options.success it is true if the results were sent to the service successful
         * <br/> options.response a response from the service
         */
        _this.onSendResult = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * Use it to get results after calling the getResult method. It returns a simple analytic from [dxsurvey.com](http://www.dxsurvey.com) service.
         * <br/> sender the survey object that fires the event
         * <br/> options.success it is true if the results were got from the service successful
         * <br/> options.data the object {AnswersCount, QuestionResult : {} }. AnswersCount is the number of posted survey results. QuestionResult is an object with all possible unique answers to the question and number of these answers.
         * <br/> options.dataList an array of objects {name, value}, where 'name' is an unique value/answer to the question and value is a number/count of such answers.
         * <br/> options.response the server response
         * @see getResult
         */
        _this.onGetResult = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on uploading the file in QuestionFile. You may use it to change the file name or tells the library do not accept the file. There are three properties in options: options.name, options.file and options.accept.
         * <br/> sender the survey object that fires the event
         * name: name, file: file, accept: accept
         * <br/> name the file name
         * <br/> file the Javascript File object
         * <br/> accept a boolean value, true by default. Set it to false to deny this file to upload
         * @see uploadFile
         */
        _this.onUploadFile = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired before rendering a question. Use it to override the default question css classes.
         * There are two parameters in options: options.question and options.cssClasses
         * <br/> sender the survey object that fires the event
         * <br/> options.question a question for which you may change the css classes
         * <br/> options.cssClasses an object with css classes. For example {root: "table", button: "button"}. You may change them to your own css classes.
         */
        _this.onUpdateQuestionCssClasses = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired before rendering a panel or page. Use it to override the default panel/page css classes.
         * There are two parameters in options: options.panel and options.cssClasses
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a panel for which you may change the css classes
         * <br/> options.cssClasses an object with css classes. For example {title: "sv_p_title", description: "small"}. You may change them to your own css classes.
         */
        _this.onUpdatePanelCssClasses = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired right after survey is rendered in DOM. options.htmlElement is the root element.
         * <br/> sender the survey object that fires the event
         * <br/> options.htmlElement a root html element binded with the survey object
         */
        _this.onAfterRenderSurvey = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired right after a page is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.currentPage, options.htmlElement
         * <br/> sender the survey object that fires the event
         * <br/> options.page a page object for which the event is fired. Typically the current/active page.
         * <br/> options.htmlElement an html element binded with the page object
         */
        _this.onAfterRenderPage = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired right after a question is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.question, options.htmlElement
         * <br/> sender the survey object that fires the event
         * <br/> options.question a question object for which the event is fired
         * <br/> options.htmlElement an html element binded with the question object
         */
        _this.onAfterRenderQuestion = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired right after a panel is rendred in DOM. Use it to modify html elements. There are two parameters in options: options.panel, options.htmlElement
         * <br/> sender the survey object that fires the event
         * <br/> options.panel a panel object for which the event is fired
         * <br/> options.htmlElement an html element binded with the panel object
         */
        _this.onAfterRenderPanel = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a new row in Matrix Dynamic question.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a matrix question.
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDynamicModel.visibleRows
         */
        _this.onMatrixRowAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on removing a row from Matrix Dynamic question.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a matrix question.
         * <br/> options.rowIndex a removed row index.
         * <br/> options.row a removed row object.
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDynamicModel.visibleRows
         */
        _this.onMatrixRowRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired for every cell created in Matrix Dymic and Matrix Dropdown questions.
         * <br/> options.question - the matrix question
         * <br/> options.cell - the matrix cell
         * <br/> options.cellQuestion - the question/editor in the cell. You may customize it, change it's properties, like choices or visible.
         * <br/> options.rowValue - the value of the current row. To access the value of paticular column use: options.rowValue["columnValue"]
         * <br/> options.column - the matrix column object
         * <br/> options.columName - the matrix column name
         * <br/> options.row - the matrix row object
         * @see onMatrixRowAdded
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDropdownModel
         */
        _this.onMatrixCellCreated = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired for every cell after is has been rendered in DOM.
         * <br/> options.question - the matrix question
         * <br/> options.cell - the matrix cell
         * <br/> options.cellQuestion - the question/editor in the cell.
         * <br/> options.htmlElement a html element binded with the cellQuestion object
         * <br/> options.column - the matrix column object
         * <br/> options.row - the matrix row object
         * @see onMatrixCellCreated
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDropdownModel
         */
        _this.onMatrixAfterCellRender = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired when cell value is changed in Matrix Dymic and Matrix Dropdown questions.
         * <br/> options.question - the matrix question
         * <br/> options.columName - the matrix column name
         * <br/> options.value - a new value
         * <br/> options.row - the matrix row object
         * <br/> options.getCellQuestion(columnName) - the function that returns the cell question by column name.
         * @see onMatrixRowAdded
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDropdownModel
         */
        _this.onMatrixCellValueChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired when Matrix Dymic and Matrix Dropdown questions validate the cell value.
         * <br/> options.question - the matrix question
         * <br/> options.columName - the matrix column name
         * <br/> options.value - a cell value
         * <br/> options.row - the matrix row object
         * <br/> options.getCellQuestion(columnName) - the function that returns the cell question by column name.
         * @see onMatrixRowAdded
         * @see QuestionMatrixDynamicModel
         * @see QuestionMatrixDropdownModel
         */
        _this.onMatrixCellValidate = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on adding a new panel in Panel Dynamic question.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a panel question.
         * @see QuestionPanelDynamicModel
         * @see QuestionPanelDynamicModel.panels
         */
        _this.onDynamicPanelAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired on removing a panel from Panel Dynamic question.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a panel question.
         * <br/> options.panelIndex a removed panel index.
         * @see QuestionPanelDynamicModel
         * @see QuestionPanelDynamicModel.panels
         */
        _this.onDynamicPanelRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired every second if the method startTimer has been called.
         * @see startTimer
         * @see timeSpent
         * @see Page.timeSpent
         */
        _this.onTimer = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The event is fired before displaying a new information in the Timer Panel. Use it to change the default text.
         * <br/> options.text - the timer panel info text.
         */
        _this.onTimerPanelInfoText = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * Use this event to define, if the answer on the question is correct or not.
         * <br/> sender the survey object that fires the event
         * <br/> options.question a question on which you have to decide if the answer is correct or not.
         * <br/> options.result return true, if the answer is correct or false if the answer is not correct. Use questions value and correctAnswer properties to return the correct value.
         * @see Question.value
         * @see Question.correctAnswer
         */
        _this.onIsAnswerCorrect = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        /**
         * The list of errors on loading survey json. If the list is empty after loading a json then the json is correct and there is no errors in it.
         * @see JsonError
         */
        _this.jsonErrors = null;
        _this.origionalPages = null;
        _this.timerFunc = null;
        var self = _this;
        var locTitleValue = _this.createLocalizableString("title", _this, true);
        locTitleValue.onRenderedHtmlCallback = function (text) {
            return self.processedTitle;
        };
        _this.createLocalizableString("completedHtml", _this);
        _this.createLocalizableString("completedBeforeHtml", _this);
        _this.createLocalizableString("loadingHtml", _this);
        _this.createLocalizableString("startSurvey", _this);
        _this.createLocalizableString("pagePrev", _this);
        _this.createLocalizableString("pageNext", _this);
        _this.createLocalizableString("complete", _this);
        _this.createLocalizableString("questionTitleTemplate", _this, true);
        _this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_4__textPreProcessor__["a" /* TextPreProcessor */]();
        _this.textPreProcessor.onProcess = function (textValue) {
            self.getProcessedTextValue(textValue);
        };
        _this.pagesValue = _this.createNewArray("pages", function (value) {
            self.doOnPageAdded(value);
        });
        _this.triggersValue = _this.createNewArray("triggers", function (value) {
            value.setOwner(self);
        });
        _this.registerFunctionOnPropertyValueChanged("firstPageIsStarted", function () {
            self.onFirstPageIsStartedChanged();
        });
        _this.registerFunctionOnPropertyValueChanged("isSinglePage", function () {
            self.onIsSinglePageChanged();
        });
        _this.onBeforeCreating();
        if (jsonObj) {
            if (typeof jsonObj === "string" || jsonObj instanceof String) {
                jsonObj = JSON.parse(jsonObj);
            }
            if (jsonObj && jsonObj.clientId) {
                _this.clientId = jsonObj.clientId;
            }
            _this.setJsonObject(jsonObj);
            if (_this.surveyId) {
                _this.loadSurveyFromService(_this.surveyId, _this.clientId);
            }
        }
        _this.onCreating();
        return _this;
    }
    Object.defineProperty(SurveyModel.prototype, "platformName", {
        get: function () {
            return SurveyModel.platform;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "commentPrefix", {
        /**
         * You may show comments input for the most of questions. The entered text in the comment input will be saved as 'question name' + 'commentPrefix'.
         * @see data
         */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */].commentPrefix;
        },
        set: function (val) {
            __WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */].commentPrefix = val;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.getType = function () {
        return "survey";
    };
    Object.defineProperty(SurveyModel.prototype, "pages", {
        /**
         * The list of all pages in the survey, including invisible.
         * @see PageModel
         * @see visiblePages
         */
        get: function () {
            return this.pagesValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "triggers", {
        /**
         * The list of triggers in the survey.
         * @see SurveyTrigger
         */
        get: function () {
            return this.triggersValue;
        },
        set: function (val) {
            this.setPropertyValue("triggers", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "surveyId", {
        /**
         * Set this property to automatically load survey Json from [dxsurvey.com](http://www.dxsurvey.com) service.
         * @see loadSurveyFromService
         */
        get: function () {
            return this.getPropertyValue("surveyId", "");
        },
        set: function (val) {
            this.setPropertyValue("surveyId", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "surveyPostId", {
        /**
         * Set this property to automatically save the data into the [dxsurvey.com](http://www.dxsurvey.com) service.
         * @see onComplete
         * @see surveyShowDataSaving
         */
        get: function () {
            return this.getPropertyValue("surveyPostId", "");
        },
        set: function (val) {
            this.setPropertyValue("surveyPostId", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "clientId", {
        /**
         * Use this property as indentificator for a user, for example e-mail or unique customer id in your web application. If you are loading survey or posting survey results  from/to [dxsurvey.com](http://www.dxsurvey.com) service, then the library do not allow to run the same survey the second time. On the second run, the user will see the 'Thank you' page.
         */
        get: function () {
            return this.getPropertyValue("clientId", "");
        },
        set: function (val) {
            this.setPropertyValue("clientId", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "cookieName", {
        /**
         * If the property is not empty, before starting to run the survey, the library checkes if the cookie with this name exists. If it is true, the survey goes to complete mode and an user sees the 'Thank you' page. On completing the survey the cookie with this name is created.
         */
        get: function () {
            return this.getPropertyValue("cookieName", "");
        },
        set: function (val) {
            this.setPropertyValue("cookieName", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "sendResultOnPageNext", {
        /**
         * Set it to true, to save results on completing every page. onPartialSend event is fired.
         * @see onPartialSend
         * @see clientId
         */
        get: function () {
            return this.getPropertyValue("sendResultOnPageNext", false);
        },
        set: function (val) {
            this.setPropertyValue("sendResultOnPageNext", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "surveyShowDataSaving", {
        /**
         * Set this property to true, to show the progress on saving/sending data into the [dxsurvey.com](http://www.dxsurvey.com) service.
         * @see surveyPostId
         */
        get: function () {
            return this.getPropertyValue("surveyShowDataSaving", false);
        },
        set: function (val) {
            this.setPropertyValue("surveyShowDataSaving", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "focusFirstQuestionAutomatic", {
        /**
         * On showing the next or previous page, a first input is focused, if the property set to true.
         */
        get: function () {
            return this.getPropertyValue("focusFirstQuestionAutomatic", true);
        },
        set: function (val) {
            this.setPropertyValue("focusFirstQuestionAutomatic", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showNavigationButtons", {
        /**
         * Set it to false to hide 'Prev', 'Next' and 'Complete' buttons. It makes sense if you are going to create a custom navigation or have just one page or on setting goNextPageAutomatic property.
         * @see goNextPageAutomatic
         * @see showPrevButton
         */
        get: function () {
            return this.getPropertyValue("showNavigationButtons", true);
        },
        set: function (val) {
            this.setPropertyValue("showNavigationButtons", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showPrevButton", {
        /**
         * Set it to false to hide the 'Prev' to disable for end-users go back to their answers.
         * @see showNavigationButtons
         */
        get: function () {
            return this.getPropertyValue("showPrevButton", true);
        },
        set: function (val) {
            this.setPropertyValue("showPrevButton", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showTitle", {
        /**
         * Set it to false hide survey title.
         * @see title
         */
        get: function () {
            return this.getPropertyValue("showTitle", true);
        },
        set: function (val) {
            this.setPropertyValue("showTitle", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showPageTitles", {
        /**
         * Set it to false to hide page titles.
         * @see PageModel.title
         */
        get: function () {
            return this.getPropertyValue("showPageTitles", true);
        },
        set: function (val) {
            this.setPropertyValue("showPageTitles", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showCompletedPage", {
        /**
         * On finishing the survey the 'Thank you', page on complete, is shown. Set the property to false, to hide the 'Thank you' page.
         * @see data
         * @see onComplete
         */
        get: function () {
            return this.getPropertyValue("showCompletedPage", true);
        },
        set: function (val) {
            this.setPropertyValue("showCompletedPage", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "requiredText", {
        /**
         * A char/string that will be rendered in the title required questions.
         * @see QuestionBase.title
         */
        get: function () {
            return this.getPropertyValue("requiredText", "*");
        },
        set: function (val) {
            this.setPropertyValue("requiredText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionStartIndex", {
        /**
         * By default the first question index is 1. You may start it from 100 or from 'A', by setting 100 or 'A' to this property.
         * @see QuestionBase.title
         * @see requiredText
         */
        get: function () {
            return this.getPropertyValue("questionStartIndex", "");
        },
        set: function (val) {
            this.setPropertyValue("questionStartIndex", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "storeOthersAsComment", {
        /**
         * By default the entered text in the others input in the checkbox/radiogroup/dropdown are stored as "question name " + "-Comment". The value itself is "question name": "others". Set this property to false, to store the entered text directly in the "question name" key.
         * @see commentPrefix
         */
        get: function () {
            return this.getPropertyValue("storeOthersAsComment", true);
        },
        set: function (val) {
            this.setPropertyValue("storeOthersAsComment", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "goNextPageAutomatic", {
        /**
         * Set it to the one of the following constants if you want to go to the next page without pressing 'Next' button when all questions are anwered.
         * true - go next page and submit automatically
         * "autogonext" - go next page automatically but do not submit
         * false - do not go next page and not submit automatically
         * @see showNavigationButtons
         */
        get: function () {
            return this.getPropertyValue("goNextPageAutomatic", false);
        },
        set: function (val) {
            this.setPropertyValue("goNextPageAutomatic", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "clearInvisibleValues", {
        /**
         * Set it to 'none' to include the invisible values into the survey data.
         * </br> Set it to 'onHidden' to clear the question value when it becomes invisible.
         * </br> Leave it equals to 'onComplete', to remove from data property values of invisible questions on survey complete. In this case, the invisible questions will not be stored on the server.
         * </br> The default value is 'onComplete'.
         * @see QuestionBase.visible
         * @see onComplete
         */
        get: function () {
            return this.getPropertyValue("clearInvisibleValues", "onComplete");
        },
        set: function (val) {
            if (val === true)
                val = "onComplete";
            if (val === false)
                val = "none";
            this.setPropertyValue("clearInvisibleValues", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locale", {
        /**
         * Use it to change the survey locale. By default it is empty, 'en'. You may set it to 'de' - german, 'fr' - french and so on. The library has built-in localization for several languages. The library has a multi-language support as well.
         */
        get: function () {
            return this.localeValue;
        },
        set: function (value) {
            this.localeValue = value;
            this.setPropertyValue("locale", value);
            __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].currentLocale = value;
            for (var i = 0; i < this.pages.length; i++) {
                this.pages[i].onLocaleChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    //ILocalizableOwner
    SurveyModel.prototype.getLocale = function () {
        return this.locale;
    };
    SurveyModel.prototype.getMarkdownHtml = function (text) {
        var options = { text: text, html: null };
        this.onTextMarkdown.fire(this, options);
        return options.html;
    };
    SurveyModel.prototype.getLocString = function (str) {
        return __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].getString(str);
    };
    Object.defineProperty(SurveyModel.prototype, "emptySurveyText", {
        /**
         * Returns the text that renders when there is no any visible page and question.
         */
        get: function () {
            return this.getLocString("emptySurvey");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "title", {
        /**
         * Survey title.
         */
        get: function () {
            return this.getLocalizableStringText("title");
        },
        set: function (value) {
            this.setLocalizableStringText("title", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locTitle", {
        get: function () {
            return this.getLocalizableString("title");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completedHtml", {
        /**
         * The html that shows on completed ('Thank you') page. Set it to change the default text.
         * @see showCompletedPage
         * @see locale
         */
        get: function () {
            return this.getLocalizableStringText("completedHtml");
        },
        set: function (value) {
            this.setLocalizableStringText("completedHtml", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locCompletedHtml", {
        get: function () {
            return this.getLocalizableString("completedHtml");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completedBeforeHtml", {
        /**
         * The html that shows if the end user has already completed the survey.
         * @see clientId
         * @see locale
         */
        get: function () {
            return this.getLocalizableStringText("completedBeforeHtml");
        },
        set: function (value) {
            this.setLocalizableStringText("completedBeforeHtml", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locCompletedBeforeHtml", {
        get: function () {
            return this.getLocalizableString("completedBeforeHtml");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "loadingHtml", {
        /**
         * The html that shows on loading survey Json from the dxsurvey.com service.
         * @see surveyId
         * @see locale
         */
        get: function () {
            return this.getLocalizableStringText("loadingHtml");
        },
        set: function (value) {
            this.setLocalizableStringText("loadingHtml", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locLoadingHtml", {
        get: function () {
            return this.getLocalizableString("loadingHtml");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "startSurveyText", {
        /**
         * A text that renders on the 'Start' button. Set it to change the default text.
         * The start button is shown on the started page. You have to set firstPageIsStarted property to true, to have the started page.
         * @see firstPageIsStarted
         * @see locale
         */
        get: function () {
            return this.getLocalizableStringText("startSurvey", this.getLocString("startSurveyText"));
        },
        set: function (newValue) {
            this.setLocalizableStringText("startSurvey", newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locStartSurveyText", {
        get: function () {
            return this.getLocalizableString("startSurvey");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pagePrevText", {
        /**
         * A text that renders on the 'Prev' button. Set it to change the default text.
         * @see locale
         */
        get: function () {
            return this.getLocalizableStringText("pagePrev", this.getLocString("pagePrevText"));
        },
        set: function (newValue) {
            this.setLocalizableStringText("pagePrev", newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locPagePrevText", {
        get: function () {
            return this.getLocalizableString("pagePrev");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pageNextText", {
        /**
         * A text that renders on the 'Next' button. Set it to change the default text.
         * @see locale
         */
        get: function () {
            return this.getLocalizableStringText("pageNext", this.getLocString("pageNextText"));
        },
        set: function (newValue) {
            this.setLocalizableStringText("pageNext", newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locPageNextText", {
        get: function () {
            return this.getLocalizableString("pageNext");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completeText", {
        /**
         * A text that renders on the 'Complete' button. Set it to change the default text.
         * @see locale
         */
        get: function () {
            return this.getLocalizableStringText("complete", this.getLocString("completeText"));
        },
        set: function (newValue) {
            this.setLocalizableStringText("complete", newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "locCompleteText", {
        get: function () {
            return this.getLocalizableString("complete");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionTitleTemplate", {
        /**
         * A template for a question title.
         * @see QuestionModel.title
         */
        get: function () {
            return this.getLocalizableStringText("questionTitleTemplate");
        },
        set: function (value) {
            this.setLocalizableStringText("questionTitleTemplate", value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the question title template
     * @see questionTitleTemplate
     * @see QuestionModel.title
     */
    SurveyModel.prototype.getQuestionTitleTemplate = function () {
        return this.locQuestionTitleTemplate.textOrHtml;
    };
    Object.defineProperty(SurveyModel.prototype, "locQuestionTitleTemplate", {
        get: function () {
            return this.getLocalizableString("questionTitleTemplate");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showPageNumbers", {
        /**
         * Set this property to false to turn off the numbering on pages titles.
         */
        get: function () {
            return this.getPropertyValue("showPageNumbers", false);
        },
        set: function (value) {
            if (value === this.showPageNumbers)
                return;
            this.setPropertyValue("showPageNumbers", value);
            this.updateVisibleIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showQuestionNumbers", {
        /**
         * Set this property to "off" to turn off the numbering on questions titles or "onpage" to start numbering on every page. The default value is "on".
         */
        get: function () {
            return this.getPropertyValue("showQuestionNumbers", "on");
        },
        set: function (value) {
            value = value.toLowerCase();
            value = value === "onpage" ? "onPage" : value;
            if (value === this.showQuestionNumbers)
                return;
            this.setPropertyValue("showQuestionNumbers", value);
            this.updateVisibleIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showProgressBar", {
        /**
         * Set this property to "top" to show the progress bar on the bottom or to "bottom" to show it on the bottom.
         */
        get: function () {
            return this.getPropertyValue("showProgressBar", "off");
        },
        set: function (newValue) {
            this.setPropertyValue("showProgressBar", newValue.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "processedTitle", {
        /**
         * Returns the text/html that renders as survey title.
         */
        get: function () {
            return this.processText(this.locTitle.textOrHtml, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionTitleLocation", {
        /**
         * Set this property to 'bottom' or 'left' to show question title under the question or on the left.
         * <br/><b>Note:</b> Some questions, for example matrixes, do not support 'left' value. The title for them will be displayed on the top.
         */
        get: function () {
            return this.getPropertyValue("questionTitleLocation", "top");
        },
        set: function (value) {
            this.setPropertyValue("questionTitleLocation", value.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionErrorLocation", {
        /**
         * Set this property to 'bottom' to show question error(s) under the question.
         */
        get: function () {
            return this.getPropertyValue("questionErrorLocation", "top");
        },
        set: function (value) {
            this.setPropertyValue("questionErrorLocation", value.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "mode", {
        /**
         * Set this mode to 'display' to make the survey read-only. The default value is 'edit'.
         */
        get: function () {
            return this.getPropertyValue("mode", "edit");
        },
        set: function (value) {
            value = value.toLowerCase();
            if (value == this.mode)
                return;
            if (value != "edit" && value != "display")
                return;
            this.setPropertyValue("mode", value);
            var questions = this.getAllQuestions();
            for (var i = 0; i < questions.length; i++) {
                questions[i].onReadOnlyChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "data", {
        /**
         * An object that stores the survey results/data. You may set it directly as { 'question name': questionValue, ... }
         * @see setValue
         * @see getValue
         */
        get: function () {
            var result = {};
            for (var key in this.valuesHash) {
                result[key] = this.valuesHash[key];
            }
            return result;
        },
        set: function (data) {
            this.valuesHash = {};
            if (data) {
                for (var key in data) {
                    this.setDataValueCore(this.valuesHash, key, data[key]);
                    this.checkTriggers(key, data[key], false);
                }
            }
            this.notifyAllQuestionsOnValueChanged();
            this.runConditions();
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.getAllValues = function () {
        return this.data;
    };
    SurveyModel.prototype.setDataValueCore = function (valuesHash, key, value) {
        valuesHash[key] = value;
    };
    Object.defineProperty(SurveyModel.prototype, "comments", {
        /**
         * Returns all comments from the data.
         * @see data
         */
        get: function () {
            var result = {};
            for (var key in this.valuesHash) {
                if (key.indexOf(this.commentPrefix) > 0) {
                    result[key] = this.valuesHash[key];
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "visiblePages", {
        /**
         * Returns the list of visible pages. If all pages are visible then it is the same as pages property.
         * @see pages
         * @see PageModel.visible
         * @see PageModel.visibleIf
         */
        get: function () {
            if (this.isDesignMode)
                return this.pages;
            var result = new Array();
            for (var i = 0; i < this.pages.length; i++) {
                if (this.pages[i].isVisible) {
                    result.push(this.pages[i]);
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isEmpty", {
        /**
         * Returns true if there is no any page in the survey. The survey is empty.
         */
        get: function () {
            return this.pages.length == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "PageCount", {
        /**
         * depricated, misspelling, use pageCount property
         */
        get: function () {
            return this.pageCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pageCount", {
        /**
         * Returns the survey pages count.
         * @see visiblePageCount
         * @see pages
         */
        get: function () {
            return this.pages.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "visiblePageCount", {
        /**
         * Returns the survey visible pages count
         * @see pageCount
         * @see visiblePages
         */
        get: function () {
            return this.visiblePages.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "startedPage", {
        /**
         * Returns the started Page. firstPageIsStarted property should be equals to true
         * @see firstPageIsStarted
         */
        get: function () {
            return this.firstPageIsStarted && this.pages.length > 0
                ? this.pages[0]
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "currentPage", {
        /**
         * Returns the current survey page. If survey is rendred then it is a page that a user can see/edit.
         */
        get: function () {
            var vPages = this.visiblePages;
            if (this.currentPageValue != null) {
                if (vPages.indexOf(this.currentPageValue) < 0) {
                    this.currentPage = null;
                }
            }
            if (this.currentPageValue == null && vPages.length > 0) {
                this.currentPage = vPages[0];
            }
            return this.currentPageValue;
        },
        set: function (value) {
            var vPages = this.visiblePages;
            if (value != null && vPages.indexOf(value) < 0)
                return;
            if (value == this.currentPageValue)
                return;
            var oldValue = this.currentPageValue;
            this.currentPageValue = value;
            if (value) {
                value.updateCustomWidgets();
                value.setWasShown(true);
            }
            this.currentPageChanged(value, oldValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "currentPageNo", {
        /**
         * The index of the current page in the visible pages array. It starts from 0.
         */
        get: function () {
            return this.visiblePages.indexOf(this.currentPage);
        },
        set: function (value) {
            var vPages = this.visiblePages;
            if (value < 0 || value >= this.visiblePages.length)
                return;
            this.currentPage = this.visiblePages[value];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionsOrder", {
        /**
         * Use this property to randomize questions. Set it to 'random' to randomize questions, 'initial' to keep them in the same order. You can randomize questions on a specific page.
         * @see SurveyPage.questionsOrder
         */
        get: function () {
            return this.getPropertyValue("questionsOrder", "initial");
        },
        set: function (val) {
            this.setPropertyValue("questionsOrder", val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the input focus to the first question with the input.
     */
    SurveyModel.prototype.focusFirstQuestion = function () {
        var page = this.currentPage;
        if (page) {
            page.scrollToTop();
            page.focusFirstQuestion();
        }
    };
    SurveyModel.prototype.scrollToTopOnPageChange = function () {
        var page = this.currentPage;
        if (!page)
            return;
        page.scrollToTop();
        if (this.focusFirstQuestionAutomatic) {
            page.focusFirstQuestion();
        }
    };
    Object.defineProperty(SurveyModel.prototype, "state", {
        /**
         * Returns the current survey state: 'loading' - loading from the json, 'completed' - a user has completed the survey,
         * 'starting' - the started page is showing, running' - a user answers a questions right now, 'empty' - there is nothing to show in the current survey.
         */
        get: function () {
            if (this.isLoading)
                return "loading";
            if (this.isCompleted)
                return "completed";
            if (this.isCompletedBefore)
                return "completedbefore";
            if (!this.isDesignMode &&
                this.isEditMode &&
                this.isStartedState &&
                this.startedPage)
                return "starting";
            return this.currentPage ? "running" : "empty";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completedState", {
        get: function () {
            return this.completedStateValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completedStateText", {
        get: function () {
            return this.completedStateTextValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setCompletedState = function (value, text) {
        this.completedStateValue = value;
        if (!text) {
            if (value == "saving")
                text = this.getLocString("savingData");
            if (value == "error")
                text = this.getLocString("savingDataError");
            if (value == "success")
                text = this.getLocString("savingDataSuccess");
        }
        this.completedStateTextValue = text;
    };
    /**
     * Clear the survey data and state. If the survey has a 'completed' state, it will have a 'running' state.
     * @param clearData clear the data
     * @param gotoFirstPage make the first page as a current page.
     * @see data
     * @see state
     * @see currentPage
     */
    SurveyModel.prototype.clear = function (clearData, gotoFirstPage) {
        if (clearData === void 0) { clearData = true; }
        if (gotoFirstPage === void 0) { gotoFirstPage = true; }
        if (clearData) {
            this.data = null;
            this.variablesHash = {};
        }
        this.timeSpent = 0;
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].timeSpent = 0;
            this.pages[i].setWasShown(false);
        }
        this.isCompleted = false;
        this.isCompletedBefore = false;
        this.isLoading = false;
        this.isStartedState = this.firstPageIsStarted;
        if (gotoFirstPage && this.visiblePageCount > 0) {
            this.currentPage = this.visiblePages[0];
        }
    };
    SurveyModel.prototype.mergeValues = function (src, dest) {
        if (!dest || !src)
            return;
        for (var key in src) {
            var value = src[key];
            if (value && typeof value === "object") {
                if (!dest[key])
                    dest[key] = {};
                this.mergeValues(value, dest[key]);
            }
            else {
                dest[key] = value;
            }
        }
    };
    SurveyModel.prototype.updateCustomWidgets = function (page) {
        if (!page)
            return;
        page.updateCustomWidgets();
    };
    SurveyModel.prototype.currentPageChanged = function (newValue, oldValue) {
        this.onCurrentPageChanged.fire(this, {
            oldCurrentPage: oldValue,
            newCurrentPage: newValue
        });
    };
    /**
     * Returns the progress that a user made by answering on the survey.
     */
    SurveyModel.prototype.getProgress = function () {
        if (this.currentPage == null)
            return 0;
        var index = this.visiblePages.indexOf(this.currentPage) + 1;
        return Math.ceil(index * 100 / this.visiblePageCount);
    };
    Object.defineProperty(SurveyModel.prototype, "isNavigationButtonsShowing", {
        /**
         * Returns true if navigation buttons: 'Prev', 'Next' or 'Complete' are shown.
         */
        get: function () {
            if (this.isDesignMode)
                return false;
            var page = this.currentPage;
            if (!page)
                return false;
            return (page.navigationButtonsVisibility == "show" ||
                (page.navigationButtonsVisibility != "hide" && this.showNavigationButtons));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isEditMode", {
        /**
         * Returns true if the survey in the edit mode.
         * @see mode
         */
        get: function () {
            return this.mode == "edit";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isDisplayMode", {
        /**
         * Returns true if the survey in the display mode.
         * @see mode
         */
        get: function () {
            return this.mode == "display";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isDesignMode", {
        /**
         * Returns true if the survey in the design mode. It is used by SurveyJS Editor
         * @see setDesignMode
         */
        get: function () {
            return this.getPropertyValue("isDesignMode", false);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call it to set the survey into the design mode.
     * @param value use true to set the survey into the design mode.
     */
    SurveyModel.prototype.setDesignMode = function (value) {
        this.setPropertyValue("isDesignMode", value);
        this.onIsSinglePageChanged();
    };
    Object.defineProperty(SurveyModel.prototype, "hasCookie", {
        /**
         * Returns true, if a user has already completed the survey on this browser and there is a cookie about it. Survey goes to 'completed' state if the function returns true.
         * @see cookieName
         * @see setCookie
         * @see deleteCookie
         * @see state
         */
        get: function () {
            if (!this.cookieName)
                return false;
            var cookies = document.cookie;
            return cookies && cookies.indexOf(this.cookieName + "=true") > -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the cookie with cookieName in the browser. It is done automatically on survey complete if cookieName is not empty.
     * @see cookieName
     * @see hasCookie
     * @see deleteCookie
     */
    SurveyModel.prototype.setCookie = function () {
        if (!this.cookieName)
            return;
        document.cookie =
            this.cookieName + "=true; expires=Fri, 31 Dec 9999 0:0:0 GMT";
    };
    /**
     * Delete the cookie with cookieName in the browser.
     * @see cookieName
     * @see hasCookie
     * @see setCookie
     */
    SurveyModel.prototype.deleteCookie = function () {
        if (!this.cookieName)
            return;
        document.cookie = this.cookieName + "=;";
    };
    /**
     * Call it to go to the next page. It returns false, if it is the last page. If there is an error, for example required question is empty, the function returns false as well.
     * @see isCurrentPageHasErrors
     * @see prevPage
     * @see completeLastPage
     */
    SurveyModel.prototype.nextPage = function () {
        if (this.isLastPage)
            return false;
        if (this.isEditMode && this.isCurrentPageHasErrors)
            return false;
        if (this.doServerValidation())
            return false;
        this.doNextPage();
        return true;
    };
    Object.defineProperty(SurveyModel.prototype, "isCurrentPageHasErrors", {
        /**
         * Returns true, if there is any error on the current page. For example, the required question is empty or a question validation is failed.
         * @see nextPage
         */
        get: function () {
            if (this.currentPage == null)
                return true;
            return this.currentPage.hasErrors(true, true);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call it to go to the previous page. It returns false if the current page is the first page already. It doesn't perform any checks, required questions can be empty.
     * @see isFirstPage
     */
    SurveyModel.prototype.prevPage = function () {
        if (this.isFirstPage)
            return false;
        var vPages = this.visiblePages;
        var index = vPages.indexOf(this.currentPage);
        this.currentPage = vPages[index - 1];
    };
    /**
     * Call it to complete the survey, if the current page is the last one. It returns false if there is an error on the page. If there is no errors on the page, it calls doComplete and returns true.
     * @see isCurrentPageHasErrors
     * @see nextPage
     * @see doComplete
     */
    SurveyModel.prototype.completeLastPage = function () {
        if (this.isEditMode && this.isCurrentPageHasErrors)
            return false;
        if (this.doServerValidation())
            return false;
        this.doComplete();
        return true;
    };
    Object.defineProperty(SurveyModel.prototype, "isSinglePage", {
        /**
         * Set this property to true, if you want to combine all your pages in one page. Pages will be converted into panels.
         */
        get: function () {
            return this.getPropertyValue("isSinglePage", false);
        },
        set: function (val) {
            this.setPropertyValue("isSinglePage", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "firstPageIsStarted", {
        /**
         * Set this property to true, to make the first page your starting page. The end-user could not comeback to the start page and it is not count in the progress.
         */
        get: function () {
            return this.getPropertyValue("firstPageIsStarted", false);
        },
        set: function (val) {
            this.setPropertyValue("firstPageIsStarted", val);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.isPageStarted = function (page) {
        return (this.firstPageIsStarted && this.pages.length > 0 && this.pages[0] === page);
    };
    SurveyModel.prototype.onFirstPageIsStartedChanged = function () {
        if (this.pages.length == 0)
            return;
        this.isStartedState = this.firstPageIsStarted;
        this.pageVisibilityChanged(this.pages[0], !this.firstPageIsStarted);
    };
    SurveyModel.prototype.onIsSinglePageChanged = function () {
        if (!this.isSinglePage || this.isDesignMode) {
            if (this.origionalPages) {
                this.pages.splice(0, this.pages.length);
                for (var i = 0; i < this.origionalPages.length; i++) {
                    this.pages.push(this.origionalPages[i]);
                }
            }
            this.origionalPages = null;
        }
        else {
            this.origionalPages = this.pages.slice(0, this.pages.length);
            var startIndex = this.firstPageIsStarted ? 1 : 0;
            var singlePage = this.createSinglePage(startIndex);
            var deletedLen = this.pages.length - startIndex;
            this.pages.splice(startIndex, deletedLen, singlePage);
        }
    };
    SurveyModel.prototype.createSinglePage = function (startIndex) {
        var single = this.createNewPage("all");
        single.setSurveyImpl(this);
        for (var i = startIndex; i < this.pages.length; i++) {
            var page = this.pages[i];
            var panel = single.addNewPanel(page.name);
            var json = new __WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */]().toJsonObject(page);
            new __WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */]().toObject(json, panel);
        }
        return single;
    };
    Object.defineProperty(SurveyModel.prototype, "isFirstPage", {
        /**
         * Returns true if the current page is the first one.
         */
        get: function () {
            if (this.currentPage == null)
                return true;
            return this.visiblePages.indexOf(this.currentPage) == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isShowPrevButton", {
        get: function () {
            if (this.isFirstPage || !this.showPrevButton)
                return false;
            if (this.maxTimeToFinish > 0)
                return false;
            var page = this.visiblePages[this.currentPageNo - 1];
            return this.getPageMaxTimeToFinish(page) <= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isLastPage", {
        /**
         * Returns true if the current page is the last one.
         */
        get: function () {
            if (this.currentPage == null)
                return true;
            var vPages = this.visiblePages;
            return vPages.indexOf(this.currentPage) == vPages.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Call it to complete the survey. It writes cookie if cookieName property is not empty, set the survey into 'completed' state, fire onComplete event and sendResult into [dxsurvey.com](http://www.dxsurvey.com) service if surveyPostId property is not empty. It doesn't perform any validation, unlike completeLastPage function.
     * @see cookieName
     * @see state
     * @see onComplete
     * @see surveyPostId
     * @see completeLastPage
     */
    SurveyModel.prototype.doComplete = function () {
        var previousCookie = this.hasCookie;
        this.stopTimer();
        this.clearUnusedValues();
        this.setCookie();
        this.setCompleted();
        var self = this;
        var onCompleteOptions = {
            showDataSaving: function (text) {
                self.setCompletedState("saving", text);
            },
            showDataSavingError: function (text) {
                self.setCompletedState("error", text);
            },
            showDataSavingSuccess: function (text) {
                self.setCompletedState("success", text);
            },
            showDataSavingClear: function (text) {
                self.setCompletedState("", "");
            }
        };
        this.onComplete.fire(this, onCompleteOptions);
        if (!previousCookie && this.surveyPostId) {
            this.sendResult();
        }
    };
    /**
     * Start the survey. Change the mode from "starting" to "running". You need to call it, if there is a started page in your survey, otherwise it does nothing.
     * @see firstPageIsStarted
     */
    SurveyModel.prototype.start = function () {
        if (!this.firstPageIsStarted)
            return;
        this.isStartedState = false;
        this.startTimerFromUI();
        this.onStarted.fire(this, {});
    };
    Object.defineProperty(SurveyModel.prototype, "isValidatingOnServer", {
        /**
         * Returns true, if at the current moment the question values on the current page are validating on the server.
         * @see onServerValidateQuestions
         */
        get: function () {
            return this.getPropertyValue("isValidatingOnServer", false);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setIsValidatingOnServer = function (val) {
        if (val == this.isValidatingOnServer)
            return;
        this.setPropertyValue("isValidatingOnServer", val);
        this.onIsValidatingOnServerChanged();
    };
    SurveyModel.prototype.onIsValidatingOnServerChanged = function () { };
    SurveyModel.prototype.doServerValidation = function () {
        if (!this.onServerValidateQuestions)
            return false;
        var self = this;
        var options = {
            data: {},
            errors: {},
            survey: this,
            complete: function () {
                self.completeServerValidation(options);
            }
        };
        for (var i = 0; i < this.currentPage.questions.length; i++) {
            var question = this.currentPage.questions[i];
            if (!question.visible)
                continue;
            var value = this.getValue(question.getValueName());
            if (!this.isValueEmpty(value))
                options.data[question.getValueName()] = value;
        }
        this.setIsValidatingOnServer(true);
        this.onServerValidateQuestions(this, options);
        return true;
    };
    SurveyModel.prototype.completeServerValidation = function (options) {
        this.setIsValidatingOnServer(false);
        if (!options && !options.survey)
            return;
        var self = options.survey;
        var hasErrors = false;
        if (options.errors) {
            for (var name in options.errors) {
                var question = self.getQuestionByName(name);
                if (question && question["errors"]) {
                    hasErrors = true;
                    question["addError"](new __WEBPACK_IMPORTED_MODULE_8__error__["a" /* CustomError */](options.errors[name]));
                }
            }
        }
        if (!hasErrors) {
            if (self.isLastPage)
                self.doComplete();
            else
                self.doNextPage();
        }
    };
    SurveyModel.prototype.doNextPage = function () {
        this.checkOnPageTriggers();
        if (this.sendResultOnPageNext) {
            this.sendResult(this.surveyPostId, this.clientId, true);
        }
        var vPages = this.visiblePages;
        var index = vPages.indexOf(this.currentPage);
        this.currentPage = vPages[index + 1];
    };
    SurveyModel.prototype.setCompleted = function () {
        this.isCompleted = true;
    };
    Object.defineProperty(SurveyModel.prototype, "processedCompletedHtml", {
        /**
         * Returns the html for completed 'Thank you' page.
         * @see completedHtml
         */
        get: function () {
            if (this.completedHtml) {
                return this.processHtml(this.completedHtml);
            }
            return "<h3>" + this.getLocString("completingSurvey") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "processedCompletedBeforeHtml", {
        /**
         * Returns the html showing that the user has already completed the survey
         * @see completedHtml
         */
        get: function () {
            if (this.completedBeforeHtml) {
                return this.processHtml(this.completedBeforeHtml);
            }
            return "<h3>" + this.getLocString("completingSurveyBefore") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "processedLoadingHtml", {
        /**
         * Returns the html that shows on loading the json.
         */
        get: function () {
            if (this.loadingHtml) {
                return this.processHtml(this.loadingHtml);
            }
            return "<h3>" + this.getLocString("loadingSurvey") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "progressText", {
        /**
         * Returns the text for the current progress.
         */
        get: function () {
            if (this.currentPage == null)
                return "";
            var vPages = this.visiblePages;
            var index = vPages.indexOf(this.currentPage) + 1;
            return this.getLocString("progressText")["format"](index, vPages.length);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.afterRenderSurvey = function (htmlElement) {
        this.onAfterRenderSurvey.fire(this, {
            survey: this,
            htmlElement: htmlElement
        });
    };
    SurveyModel.prototype.updateQuestionCssClasses = function (question, cssClasses) {
        this.onUpdateQuestionCssClasses.fire(this, {
            question: question,
            cssClasses: cssClasses
        });
    };
    SurveyModel.prototype.updatePanelCssClasses = function (panel, cssClasses) {
        this.onUpdatePanelCssClasses.fire(this, {
            panel: panel,
            cssClasses: cssClasses
        });
    };
    SurveyModel.prototype.afterRenderPage = function (htmlElement) {
        if (this.onAfterRenderPage.isEmpty)
            return;
        this.onAfterRenderPage.fire(this, {
            page: this.currentPage,
            htmlElement: htmlElement
        });
    };
    SurveyModel.prototype.afterRenderQuestion = function (question, htmlElement) {
        this.onAfterRenderQuestion.fire(this, {
            question: question,
            htmlElement: htmlElement
        });
    };
    SurveyModel.prototype.afterRenderPanel = function (panel, htmlElement) {
        this.onAfterRenderPanel.fire(this, {
            panel: panel,
            htmlElement: htmlElement
        });
    };
    SurveyModel.prototype.matrixRowAdded = function (question) {
        this.onMatrixRowAdded.fire(this, { question: question });
    };
    SurveyModel.prototype.matrixRowRemoved = function (question, rowIndex, row) {
        this.onMatrixRowRemoved.fire(this, {
            question: question,
            rowIndex: rowIndex,
            row: row
        });
    };
    SurveyModel.prototype.matrixCellCreated = function (question, options) {
        options.question = question;
        this.onMatrixCellCreated.fire(this, options);
    };
    SurveyModel.prototype.matrixAfterCellRender = function (question, options) {
        options.question = question;
        this.onMatrixAfterCellRender.fire(this, options);
    };
    SurveyModel.prototype.matrixCellValueChanged = function (question, options) {
        options.question = question;
        this.onMatrixCellValueChanged.fire(this, options);
    };
    SurveyModel.prototype.matrixCellValidate = function (question, options) {
        options.question = question;
        this.onMatrixCellValidate.fire(this, options);
        return options.error ? new __WEBPACK_IMPORTED_MODULE_8__error__["a" /* CustomError */](options.error) : null;
    };
    SurveyModel.prototype.dynamicPanelAdded = function (question) {
        this.onDynamicPanelAdded.fire(this, { question: question });
    };
    SurveyModel.prototype.dynamicPanelRemoved = function (question, panelIndex) {
        this.onDynamicPanelRemoved.fire(this, {
            question: question,
            panelIndex: panelIndex
        });
    };
    /**
     * Upload the file into servey
     * @param name question name
     * @param file uploading file
     * @param storeDataAsText set it to true to encode file content into the survey results
     * @param uploadingCallback a call back function to get the status on uploading the file
     */
    SurveyModel.prototype.uploadFile = function (name, file, storeDataAsText, uploadingCallback) {
        var accept = true;
        this.onUploadFile.fire(this, { name: name, file: file, accept: accept });
        if (!accept)
            return false;
        if (!storeDataAsText && this.surveyPostId) {
            this.uploadFileCore(name, file, uploadingCallback);
        }
        return true;
    };
    SurveyModel.prototype.createSurveyService = function () {
        return new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]();
    };
    SurveyModel.prototype.uploadFileCore = function (name, file, uploadingCallback) {
        var self = this;
        if (uploadingCallback)
            uploadingCallback("uploading");
        this.createSurveyService().sendFile(this.surveyPostId, file, function (success, response) {
            if (uploadingCallback)
                uploadingCallback(success ? "success" : "error");
            if (success) {
                self.setValue(name, response);
            }
        });
    };
    SurveyModel.prototype.getPage = function (index) {
        return this.pages[index];
    };
    /**
     * Add a page into the survey
     * @param page
     * @see addNewPage
     */
    SurveyModel.prototype.addPage = function (page) {
        if (page == null)
            return;
        this.pages.push(page);
        this.updateVisibleIndexes();
    };
    /**
     * Creates a new page and adds it into the survey. Genarates a new name if the name parameter is not set.
     * @param name a page name
     * @see addPage
     */
    SurveyModel.prototype.addNewPage = function (name) {
        if (name === void 0) { name = null; }
        var page = this.createNewPage(name);
        this.addPage(page);
        return page;
    };
    /**
     * Remove the page from the survey
     * @param page
     */
    SurveyModel.prototype.removePage = function (page) {
        var index = this.pages.indexOf(page);
        if (index < 0)
            return;
        this.pages.splice(index, 1);
        if (this.currentPageValue == page) {
            this.currentPage = this.pages.length > 0 ? this.pages[0] : null;
        }
        this.updateVisibleIndexes();
    };
    /**
     * Returns a question by its name
     * @param name a question name
     * @param caseInsensitive
     * @see getQuestionByValueName
     */
    SurveyModel.prototype.getQuestionByName = function (name, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var questions = this.getAllQuestions();
        if (caseInsensitive)
            name = name.toLowerCase();
        for (var i = 0; i < questions.length; i++) {
            var questionName = questions[i].name;
            if (caseInsensitive)
                questionName = questionName.toLowerCase();
            if (questionName == name)
                return questions[i];
        }
        return null;
    };
    /**
     * Returns a question by its value name
     * @param valueName a question name
     * @param caseInsensitive
     * @see getQuestionByName
     * @see Question.valueName
     */
    SurveyModel.prototype.getQuestionByValueName = function (valueName, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var questions = this.getAllQuestions();
        if (caseInsensitive)
            valueName = valueName.toLowerCase();
        for (var i = 0; i < questions.length; i++) {
            var questionValueName = questions[i].getValueName();
            if (caseInsensitive)
                questionValueName = questionValueName.toLowerCase();
            if (questionValueName == valueName)
                return questions[i];
        }
        return null;
    };
    /**
     * Get a list of questions by their names
     * @param names the array of names
     * @param caseInsensitive
     */
    SurveyModel.prototype.getQuestionsByNames = function (names, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var result = [];
        if (!names)
            return result;
        for (var i = 0; i < names.length; i++) {
            if (!names[i])
                continue;
            var question = this.getQuestionByName(names[i], caseInsensitive);
            if (question)
                result.push(question);
        }
        return result;
    };
    /**
     * Returns a page on which an element (question or panel) is placed.
     * @param element Question or Panel
     */
    SurveyModel.prototype.getPageByElement = function (element) {
        for (var i = 0; i < this.pages.length; i++) {
            var page = this.pages[i];
            if (page.containsElement(element))
                return page;
        }
        return null;
    };
    /**
     * Returns a page on which a question is located
     * @param question
     */
    SurveyModel.prototype.getPageByQuestion = function (question) {
        return this.getPageByElement(question);
    };
    /**
     * Returns a page by it's name.
     * @param name
     */
    SurveyModel.prototype.getPageByName = function (name) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].name == name)
                return this.pages[i];
        }
        return null;
    };
    /**
     * Rertuns a list of pages by their names
     * @param names a list of pages names
     */
    SurveyModel.prototype.getPagesByNames = function (names) {
        var result = [];
        if (!names)
            return result;
        for (var i = 0; i < names.length; i++) {
            if (!names[i])
                continue;
            var page = this.getPageByName(names[i]);
            if (page)
                result.push(page);
        }
        return result;
    };
    /**
     * Returns the list of all questions in the survey
     * @param visibleOnly set it true, if you want to get only visible questions
     */
    SurveyModel.prototype.getAllQuestions = function (visibleOnly, includingDesignTime) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (includingDesignTime === void 0) { includingDesignTime = false; }
        var result = new Array();
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].addQuestionsToList(result, visibleOnly, includingDesignTime);
        }
        return result;
    };
    /**
     * Returns quiz questions. All visible questions that has input(s) widgets.
     */
    SurveyModel.prototype.getQuizQuestions = function () {
        var result = new Array();
        var startIndex = this.firstPageIsStarted ? 1 : 0;
        for (var i = startIndex; i < this.pages.length; i++) {
            if (!this.pages[i].isVisible)
                continue;
            var questions = this.pages[i].questions;
            for (var j = 0; j < questions.length; j++) {
                var q = questions[j];
                if (q.isVisible && q.hasInput) {
                    result.push(q);
                }
            }
        }
        return result;
    };
    /**
     * Returns the list of all panels in the survey
     */
    SurveyModel.prototype.getAllPanels = function (visibleOnly, includingDesignTime) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (includingDesignTime === void 0) { includingDesignTime = false; }
        var result = new Array();
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].addPanelsIntoList(result, visibleOnly, includingDesignTime);
        }
        return result;
    };
    SurveyModel.prototype.createNewPage = function (name) {
        return new __WEBPACK_IMPORTED_MODULE_3__page__["a" /* PageModel */](name);
    };
    SurveyModel.prototype.notifyQuestionOnValueChanged = function (valueName, newValue) {
        var questions = this.getAllQuestions();
        var question = null;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].getValueName() != valueName)
                continue;
            question = questions[i];
            this.doSurveyValueChanged(question, newValue);
            this.onValueChanged.fire(this, {
                name: valueName,
                question: question,
                value: newValue
            });
        }
        if (!question) {
            this.onValueChanged.fire(this, {
                name: valueName,
                question: null,
                value: newValue
            });
        }
        this.notifyElementsOnAnyValueOrVariableChanged(valueName);
    };
    SurveyModel.prototype.notifyElementsOnAnyValueOrVariableChanged = function (name) {
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].onAnyValueChanged(name);
        }
    };
    SurveyModel.prototype.notifyAllQuestionsOnValueChanged = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            this.doSurveyValueChanged(questions[i], this.getValue(questions[i].getValueName()));
        }
    };
    SurveyModel.prototype.doSurveyValueChanged = function (question, newValue) {
        question.onSurveyValueChanged(newValue);
    };
    SurveyModel.prototype.checkOnPageTriggers = function () {
        var questions = this.getCurrentPageQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var value = this.getValue(question.getValueName());
            this.checkTriggers(question.getValueName(), value, true);
        }
    };
    SurveyModel.prototype.getCurrentPageQuestions = function () {
        var result = [];
        var page = this.currentPage;
        if (!page)
            return result;
        for (var i = 0; i < page.questions.length; i++) {
            var question = page.questions[i];
            if (!question.visible || !question.name)
                continue;
            result.push(question);
        }
        return result;
    };
    SurveyModel.prototype.checkTriggers = function (name, newValue, isOnNextPage) {
        for (var i = 0; i < this.triggers.length; i++) {
            var trigger = this.triggers[i];
            if (trigger.name == name && trigger.isOnNextPage == isOnNextPage) {
                trigger.check(newValue);
            }
        }
    };
    SurveyModel.prototype.doElementsOnLoad = function () {
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].onSurveyLoad();
        }
    };
    SurveyModel.prototype.runConditions = function () {
        var pages = this.pages;
        for (var i = 0; i < pages.length; i++) {
            pages[i].runCondition(this.valuesHash);
        }
    };
    /**
     * Send the survey result into [dxsurvey.com](http://www.dxsurvey.com) service.
     * @param postId [dxsurvey.com](http://www.dxsurvey.com) service postId
     * @param clientId Typically a customer e-mail or an identificator
     * @param isPartialCompleted Set it to true if the survey is not completed yet and it is an intermediate results
     * @see surveyPostId
     * @see clientId
     */
    SurveyModel.prototype.sendResult = function (postId, clientId, isPartialCompleted) {
        if (postId === void 0) { postId = null; }
        if (clientId === void 0) { clientId = null; }
        if (isPartialCompleted === void 0) { isPartialCompleted = false; }
        if (!this.isEditMode)
            return;
        if (isPartialCompleted && this.onPartialSend) {
            this.onPartialSend.fire(this, null);
        }
        if (!postId && this.surveyPostId) {
            postId = this.surveyPostId;
        }
        if (!postId)
            return;
        if (clientId) {
            this.clientId = clientId;
        }
        if (isPartialCompleted && !this.clientId)
            return;
        var self = this;
        if (this.surveyShowDataSaving) {
            this.setCompletedState("saving", "");
        }
        this.createSurveyService().sendResult(postId, this.data, function (success, response) {
            if (self.surveyShowDataSaving) {
                if (success) {
                    self.setCompletedState("success", "");
                }
                else {
                    self.setCompletedState("error", "");
                }
            }
            self.onSendResult.fire(self, { success: success, response: response });
        }, this.clientId, isPartialCompleted);
    };
    /**
     * It calls the [dxsurvey.com](http://www.dxsurvey.com) service and on callback fires onGetResult event with all answers that your users made for a question.
     * @param resultId [dxsurvey.com](http://www.dxsurvey.com) service resultId
     * @param name The question name
     * @see onGetResult
     */
    SurveyModel.prototype.getResult = function (resultId, name) {
        var self = this;
        this.createSurveyService().getResult(resultId, name, function (success, data, dataList, response) {
            self.onGetResult.fire(self, {
                success: success,
                data: data,
                dataList: dataList,
                response: response
            });
        });
    };
    /**
     * Loads the survey Json from the [dxsurvey.com](http://www.dxsurvey.com) service. If clientId is not null and user has already completed the survey, the survey will go into "completedbefore" state.
     * @param surveyId [dxsurvey.com](http://www.dxsurvey.com) service surveyId
     * @param clientId indentificator for a user, for example e-mail or unique customer id in your web application.
     * @see state
     */
    SurveyModel.prototype.loadSurveyFromService = function (surveyId, cliendId) {
        if (surveyId === void 0) { surveyId = null; }
        if (cliendId === void 0) { cliendId = null; }
        if (surveyId) {
            this.surveyId = surveyId;
        }
        if (cliendId) {
            this.clientId = cliendId;
        }
        var self = this;
        this.isLoading = true;
        this.onLoadingSurveyFromService();
        if (cliendId) {
            this.createSurveyService().getSurveyJsonAndIsCompleted(this.surveyId, this.clientId, function (success, json, isCompleted, response) {
                self.isLoading = false;
                if (success) {
                    self.isCompletedBefore = isCompleted == "completed";
                    self.loadSurveyFromServiceJson(json);
                }
            });
        }
        else {
            this.createSurveyService().loadSurvey(this.surveyId, function (success, result, response) {
                self.isLoading = false;
                if (success) {
                    self.loadSurveyFromServiceJson(result);
                }
            });
        }
    };
    SurveyModel.prototype.loadSurveyFromServiceJson = function (json) {
        if (!json)
            return;
        this.setJsonObject(json);
        this.notifyAllQuestionsOnValueChanged();
        this.onLoadSurveyFromService();
    };
    SurveyModel.prototype.onLoadingSurveyFromService = function () { };
    SurveyModel.prototype.onLoadSurveyFromService = function () { };
    SurveyModel.prototype.checkPageVisibility = function (question, oldQuestionVisible) {
        var page = this.getPageByQuestion(question);
        if (!page)
            return;
        var newValue = page.isVisible;
        if (newValue != page.getIsPageVisible(question) || oldQuestionVisible) {
            this.pageVisibilityChanged(page, newValue);
        }
    };
    SurveyModel.prototype.updateVisibleIndexes = function () {
        this.updatePageVisibleIndexes(this.showPageNumbers);
        if (this.showQuestionNumbers == "onPage") {
            var visPages = this.visiblePages;
            for (var i = 0; i < visPages.length; i++) {
                this.updateQuestionVisibleIndexes(visPages[i].questions, true);
            }
        }
        else {
            this.updateQuestionVisibleIndexes(this.getAllQuestions(false), this.showQuestionNumbers == "on");
        }
    };
    SurveyModel.prototype.updatePageVisibleIndexes = function (showIndex) {
        var index = 0;
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].visibleIndex = this.pages[i].visible ? index++ : -1;
            this.pages[i].num =
                showIndex && this.pages[i].visible
                    ? this.pages[i].visibleIndex + 1
                    : -1;
        }
    };
    SurveyModel.prototype.updateQuestionVisibleIndexes = function (questions, showIndex) {
        __WEBPACK_IMPORTED_MODULE_2__base__["c" /* SurveyElement */].setVisibleIndex(questions, 0, showIndex);
    };
    SurveyModel.prototype.setJsonObject = function (jsonObj) {
        if (!jsonObj)
            return;
        this.jsonErrors = null;
        var jsonConverter = new __WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */]();
        jsonConverter.toObject(jsonObj, this);
        if (jsonConverter.errors.length > 0) {
            this.jsonErrors = jsonConverter.errors;
        }
    };
    SurveyModel.prototype.endLoadingFromJson = function () {
        this.isStartedState = this.firstPageIsStarted;
        this.onIsSinglePageChanged();
        this.runConditions();
        this.updateVisibleIndexes();
        _super.prototype.endLoadingFromJson.call(this);
        if (this.hasCookie) {
            this.doComplete();
        }
        this.doElementsOnLoad();
    };
    SurveyModel.prototype.onBeforeCreating = function () { };
    SurveyModel.prototype.onCreating = function () { };
    SurveyModel.prototype.getProcessedTextValue = function (textValue) {
        var name = textValue.name.toLocaleLowerCase();
        if (name === "pageno") {
            textValue.isExists = true;
            var page = this.currentPage;
            textValue.value = page != null ? this.visiblePages.indexOf(page) + 1 : 0;
            return;
        }
        if (name === "pagecount") {
            textValue.isExists = true;
            textValue.value = this.visiblePageCount;
            return;
        }
        if (name === "correctedanswers" || name === "correctedanswercount") {
            textValue.isExists = true;
            textValue.value = this.getCorrectedAnswerCount();
            return;
        }
        if (name === "incorrectedanswers" || name === "incorrectedanswercount") {
            textValue.isExists = true;
            textValue.value = this.getInCorrectedAnswerCount();
            return;
        }
        if (name === "questioncount") {
            textValue.isExists = true;
            textValue.value = this.getQuizQuestions().length;
            return;
        }
        var firstName = new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        var variable = this.getVariable(name);
        if (variable !== undefined) {
            textValue.isExists = true;
            textValue.value = variable;
            return;
        }
        var question = this.getQuestionByValueName(firstName, true);
        if (question) {
            textValue.isExists = true;
            name = question.getValueName() + name.substr(firstName.length);
            name = name.toLocaleLowerCase();
            var values = {};
            values[firstName] = textValue.returnDisplayValue
                ? question.displayValue
                : this.getValue(firstName);
            textValue.value = new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, values);
            return;
        }
        var value = this.getValue(textValue.name);
        if (value !== undefined) {
            textValue.isExists = true;
            textValue.value = value;
        }
    };
    SurveyModel.prototype.clearUnusedValues = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            questions[i].clearUnusedValues();
        }
        if (this.clearInvisibleValues == "onComplete") {
            this.clearInvisibleQuestionValues();
        }
    };
    SurveyModel.prototype.hasVisibleQuestionByValueName = function (valueName) {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].getValueName() == valueName && questions[i].isVisible)
                return true;
        }
        return false;
    };
    SurveyModel.prototype.clearInvisibleQuestionValues = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            questions[i].clearValueIfInvisible();
        }
    };
    /**
     * Returns a variable value. Variable, unlike values, are not stored in the survey results.
     * @param name A variable name
     * @see SetVariable
     */
    SurveyModel.prototype.getVariable = function (name) {
        if (!name)
            return null;
        return this.variablesHash[name];
    };
    /**
     * Sets a variable value. Variable, unlike values, are not stored in the survey results.
     * @param name A variable name
     * @param newValue
     * @see GetVariable
     */
    SurveyModel.prototype.setVariable = function (name, newValue) {
        if (!name)
            return;
        this.variablesHash[name] = newValue;
        this.notifyElementsOnAnyValueOrVariableChanged(name);
    };
    //ISurvey data
    SurveyModel.prototype.getUnbindValue = function (value) {
        if (value && value instanceof Object) {
            //do not return the same object instance!!!
            return JSON.parse(JSON.stringify(value));
        }
        return value;
    };
    /**
     * Returns a question value
     * @param name A question name
     * @see data
     * @see setValue
     */
    SurveyModel.prototype.getValue = function (name) {
        if (!name || name.length == 0)
            return null;
        var value = this.valuesHash[name];
        return this.getUnbindValue(value);
    };
    /**
     * Sets a question value. It runs all triggers and conditions (visibleIf properties). Goes to the next page if goNextPageAutomatic is true and all questions on the current page are answered correctly.
     * @param name A question name
     * @param newValue
     * @see data
     * @see getValue
     * @see PageModel.visibleIf
     * @see QuestionBase.visibleIf
     * @see goNextPageAutomatic
     */
    SurveyModel.prototype.setValue = function (name, newValue) {
        if (this.isValueEqual(name, newValue))
            return;
        if (this.isValueEmpty(newValue)) {
            delete this.valuesHash[name];
        }
        else {
            newValue = this.getUnbindValue(newValue);
            this.setDataValueCore(this.valuesHash, name, newValue);
        }
        this.notifyQuestionOnValueChanged(name, newValue);
        this.checkTriggers(name, newValue, false);
        this.runConditions();
        this.tryGoNextPageAutomatic(name);
    };
    SurveyModel.prototype.isValueEqual = function (name, newValue) {
        if (newValue == "")
            newValue = null;
        var oldValue = this.getValue(name);
        if (newValue === null || oldValue === null)
            return newValue === oldValue;
        return this.isTwoValueEquals(newValue, oldValue);
    };
    SurveyModel.prototype.doOnPageAdded = function (page) {
        page.setSurveyImpl(this);
        if (!page.name)
            page.name = this.generateNewName(this.pages, "page");
        var options = { page: page };
        this.onPageAdded.fire(this, options);
    };
    SurveyModel.prototype.generateNewName = function (elements, baseName) {
        var keys = {};
        for (var i = 0; i < elements.length; i++)
            keys[elements[i]["name"]] = true;
        var index = 1;
        while (keys[baseName + index])
            index++;
        return baseName + index;
    };
    SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
        if (!this.goNextPageAutomatic || !this.currentPage)
            return;
        var question = this.getQuestionByValueName(name);
        if (question &&
            (!question.visible || !question.supportGoNextPageAutomatic()))
            return;
        var questions = this.getCurrentPageQuestions();
        for (var i = 0; i < questions.length; i++) {
            var value = this.getValue(questions[i].getValueName());
            if (questions[i].hasInput && this.isValueEmpty(value))
                return;
        }
        if (!this.currentPage.hasErrors(true, false)) {
            if (!this.isLastPage) {
                this.nextPage();
            }
            else {
                if (this.goNextPageAutomatic === true) {
                    this.completeLastPage();
                }
            }
        }
    };
    /**
     * Returns the comment value
     * @param name
     * @see setComment
     */
    SurveyModel.prototype.getComment = function (name) {
        var result = this.data[name + this.commentPrefix];
        if (result == null)
            result = "";
        return result;
    };
    /**
     * Set the comment value
     * @param name
     * @param newValue
     * @see getComment
     */
    SurveyModel.prototype.setComment = function (name, newValue) {
        var commentName = name + this.commentPrefix;
        if (newValue === "" || newValue === null) {
            delete this.valuesHash[commentName];
        }
        else {
            this.setDataValueCore(this.valuesHash, commentName, newValue);
            this.tryGoNextPageAutomatic(name);
        }
        var question = this.getQuestionByName(name);
        if (question) {
            this.onValueChanged.fire(this, {
                name: commentName,
                question: question,
                value: newValue
            });
        }
    };
    /**
     * Remove the value from the survey result.
     * @param {string} name The name of the value. Typically it is a question name
     */
    SurveyModel.prototype.clearValue = function (name) {
        this.setValue(name, null);
        this.setComment(name, null);
    };
    SurveyModel.prototype.questionVisibilityChanged = function (question, newValue) {
        this.updateVisibleIndexes();
        this.onVisibleChanged.fire(this, {
            question: question,
            name: question.name,
            visible: newValue
        });
        this.checkPageVisibility(question, !newValue);
        if (question &&
            !question.visible &&
            this.clearInvisibleValues == "onHidden") {
            question.clearValue();
        }
    };
    SurveyModel.prototype.pageVisibilityChanged = function (page, newValue) {
        this.updateVisibleIndexes();
        this.onPageVisibleChanged.fire(this, { page: page, visible: newValue });
    };
    SurveyModel.prototype.panelVisibilityChanged = function (panel, newValue) {
        this.updateVisibleIndexes();
        this.onPanelVisibleChanged.fire(this, { panel: panel, visible: newValue });
    };
    SurveyModel.prototype.questionAdded = function (question, index, parentPanel, rootPanel) {
        if (!question.name)
            question.name = this.generateNewName(this.getAllQuestions(false, true), "question");
        this.updateVisibleIndexes();
        this.onQuestionAdded.fire(this, {
            question: question,
            name: question.name,
            index: index,
            parentPanel: parentPanel,
            rootPanel: rootPanel
        });
    };
    SurveyModel.prototype.questionRemoved = function (question) {
        this.updateVisibleIndexes();
        this.onQuestionRemoved.fire(this, {
            question: question,
            name: question.name
        });
    };
    SurveyModel.prototype.panelAdded = function (panel, index, parentPanel, rootPanel) {
        if (!panel.name)
            panel.name = this.generateNewName(this.getAllPanels(false, true), "panel");
        this.updateVisibleIndexes();
        this.onPanelAdded.fire(this, {
            panel: panel,
            name: panel.name,
            index: index,
            parentPanel: parentPanel,
            rootPanel: rootPanel
        });
    };
    SurveyModel.prototype.panelRemoved = function (panel) {
        this.updateVisibleIndexes();
        this.onPanelRemoved.fire(this, { panel: panel, name: panel.name });
    };
    SurveyModel.prototype.validateQuestion = function (question) {
        if (this.onValidateQuestion.isEmpty)
            return null;
        var options = {
            name: question.name,
            question: question,
            value: this.getValue(question.name),
            error: null
        };
        this.onValidateQuestion.fire(this, options);
        return options.error ? new __WEBPACK_IMPORTED_MODULE_8__error__["a" /* CustomError */](options.error) : null;
    };
    SurveyModel.prototype.validatePanel = function (panel) {
        if (this.onValidatePanel.isEmpty)
            return null;
        var options = {
            name: panel.name,
            panel: panel,
            error: null
        };
        this.onValidatePanel.fire(this, options);
        return options.error ? new __WEBPACK_IMPORTED_MODULE_8__error__["a" /* CustomError */](options.error) : null;
    };
    SurveyModel.prototype.processHtml = function (html) {
        var options = { html: html };
        this.onProcessHtml.fire(this, options);
        return this.processText(options.html, true);
    };
    SurveyModel.prototype.processText = function (text, returnDisplayValue) {
        return this.textPreProcessor.process(text, returnDisplayValue);
    };
    SurveyModel.prototype.processTextEx = function (text) {
        var res = {
            text: this.textPreProcessor.process(text),
            hasAllValuesOnLastRun: true
        };
        res.hasAllValuesOnLastRun = this.textPreProcessor.hasAllValuesOnLastRun;
        return res;
    };
    /**
     * Returns the number of corrected answers on quiz
     */
    SurveyModel.prototype.getCorrectedAnswerCount = function () {
        var questions = this.getQuizQuestions();
        var counter = 0;
        var options = { question: null, result: false };
        for (var i = 0; i < questions.length; i++) {
            options.question = questions[i];
            options.result = options.question.isAnswerCorrect();
            this.onIsAnswerCorrect.fire(this, options);
            if (options.result)
                counter++;
        }
        return counter;
    };
    /**
     * Returns the number of incorrected answers on quiz
     */
    SurveyModel.prototype.getInCorrectedAnswerCount = function () {
        var questions = this.getQuizQuestions();
        return questions.length - this.getCorrectedAnswerCount();
    };
    SurveyModel.prototype.getCorrectedAnswers = function () {
        return this.getCorrectedAnswerCount();
    };
    SurveyModel.prototype.getInCorrectedAnswers = function () {
        return this.getInCorrectedAnswerCount();
    };
    Object.defineProperty(SurveyModel.prototype, "showTimerPanel", {
        /**
         * Set it to 'top' or 'bottom' if you want to show the Panel with information about how much time the end-user spent of the survey/page.
         * If the value doesn't equal 'none' then survey calls startTimer() method on survey rendering.
         * @see showTimerPanelMode
         * @see startTimer
         * @see stopTimer
         */
        get: function () {
            return this.getPropertyValue("showTimerPanel", "none");
        },
        set: function (val) {
            this.setPropertyValue("showTimerPanel", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isTimerPanelShowingOnTop", {
        get: function () {
            return this.isTimerStarted && this.showTimerPanel == "top";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isTimerPanelShowingOnBottom", {
        get: function () {
            return this.isTimerStarted && this.showTimerPanel == "bottom";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showTimerPanelMode", {
        /**
         * Set this property to 'page' or 'survey' to show the timer information for page or survey only.
         * Use onTimerPanelInfoText event to change the default text.
         * @see showTimerPanel
         * @see onTimerPanelInfoText
         */
        get: function () {
            return this.getPropertyValue("showTimerPanelMode", "all");
        },
        set: function (val) {
            this.setPropertyValue("showTimerPanelMode", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "timerInfoText", {
        get: function () {
            var options = { text: this.getTimerInfoText() };
            this.onTimerPanelInfoText.fire(this, options);
            return options.text;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.getTimerInfoText = function () {
        var page = this.currentPage;
        if (!page)
            return "";
        var pageSpent = this.getDisplayTime(page.timeSpent);
        var surveySpent = this.getDisplayTime(this.timeSpent);
        var pageLimitSec = this.getPageMaxTimeToFinish(page);
        var pageLimit = this.getDisplayTime(pageLimitSec);
        var surveyLimit = this.getDisplayTime(this.maxTimeToFinish);
        if (this.showTimerPanelMode == "page")
            return this.getTimerInfoPageText(page, pageSpent, pageLimit);
        if (this.showTimerPanelMode == "survey")
            return this.getTimerInfoSurveyText(surveySpent, surveyLimit);
        if (this.showTimerPanelMode == "all") {
            if (pageLimitSec <= 0 && this.maxTimeToFinish <= 0) {
                return this.getLocString("timerSpentAll")["format"](pageSpent, surveySpent);
            }
            if (pageLimitSec > 0 && this.maxTimeToFinish > 0) {
                return this.getLocString("timerLimitAll")["format"](pageSpent, pageLimit, surveySpent, surveyLimit);
            }
            var pageText = this.getTimerInfoPageText(page, pageSpent, pageLimit);
            var surveyText = this.getTimerInfoSurveyText(surveySpent, surveyLimit);
            return pageText + " " + surveyText;
        }
        return "";
    };
    SurveyModel.prototype.getTimerInfoPageText = function (page, pageSpent, pageLimit) {
        return this.getPageMaxTimeToFinish(page) > 0
            ? this.getLocString("timerLimitPage")["format"](pageSpent, pageLimit)
            : this.getLocString("timerSpentPage")["format"](pageSpent, pageLimit);
    };
    SurveyModel.prototype.getTimerInfoSurveyText = function (surveySpent, surveyLimit) {
        return this.maxTimeToFinish > 0
            ? this.getLocString("timerLimitSurvey")["format"](surveySpent, surveyLimit)
            : this.getLocString("timerSpentSurvey")["format"](surveySpent, surveyLimit);
    };
    SurveyModel.prototype.getDisplayTime = function (val) {
        var min = Math.floor(val / 60);
        var sec = val % 60;
        var res = "";
        if (min > 0) {
            res += min + " " + this.getLocString("timerMin");
        }
        if (res && sec == 0)
            return res;
        if (res)
            res += " ";
        return res + sec + " " + this.getLocString("timerSec");
    };
    /**
     * Call this method to start timer that will calculate how much time end-user spends on the survey or on pages
     * @see stopTimer
     * @see timeSpent
     */
    SurveyModel.prototype.startTimer = function () {
        if (this.isTimerStarted || this.isDesignMode)
            return;
        var self = this;
        this.timerFunc = function () {
            self.doTimer();
        };
        this.isTimerStarted = true;
        __WEBPACK_IMPORTED_MODULE_10__surveytimer__["a" /* SurveyTimer */].instance.start(this.timerFunc);
    };
    SurveyModel.prototype.startTimerFromUI = function () {
        if (this.showTimerPanel != "none" && this.state === "running") {
            this.startTimer();
        }
    };
    /**
     * Stop the timer.
     * @see startTimer
     * @see timeSpent
     */
    SurveyModel.prototype.stopTimer = function () {
        if (!this.isTimerStarted)
            return;
        this.isTimerStarted = false;
        __WEBPACK_IMPORTED_MODULE_10__surveytimer__["a" /* SurveyTimer */].instance.stop(this.timerFunc);
    };
    Object.defineProperty(SurveyModel.prototype, "timeSpent", {
        /**
         * Returns the time in seconds end-user spends on the survey
         * @see startTimer
         * @see PageModel.timeSpent
         */
        get: function () {
            return this.getPropertyValue("timeSpent", 0);
        },
        set: function (val) {
            this.setPropertyValue("timeSpent", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "maxTimeToFinish", {
        /**
         * The maximum time in seconds that end-user has to complete the survey. If the value is 0 or less, the end-user has unlimited number of time to finish the survey.
         * @see startTimer
         * @see maxTimeToFinishPage
         */
        get: function () {
            return this.getPropertyValue("maxTimeToFinish", 0);
        },
        set: function (val) {
            this.setPropertyValue("maxTimeToFinish", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "maxTimeToFinishPage", {
        /**
         * The maximum time in seconds that end-user has to complete a page in the survey. If the value is 0 or less, the end-user has unlimited time. You may override this value for every page.
         * @see startTimer
         * @see maxTimeToFinish
         * @see PageModel.maxTimeToFinish
         */
        get: function () {
            return this.getPropertyValue("maxTimeToFinishPage", 0);
        },
        set: function (val) {
            this.setPropertyValue("maxTimeToFinishPage", val);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.getPageMaxTimeToFinish = function (page) {
        if (!page || page.maxTimeToFinish < 0)
            return 0;
        return page.maxTimeToFinish > 0
            ? page.maxTimeToFinish
            : this.maxTimeToFinishPage;
    };
    SurveyModel.prototype.doTimer = function () {
        var page = this.currentPage;
        if (page) {
            page.timeSpent = page.timeSpent + 1;
        }
        this.timeSpent = this.timeSpent + 1;
        this.onTimer.fire(this, {});
        if (this.maxTimeToFinish > 0 && this.maxTimeToFinish == this.timeSpent) {
            this.completeLastPage();
        }
        if (page) {
            var pageLimit = this.getPageMaxTimeToFinish(page);
            if (pageLimit > 0 && pageLimit == page.timeSpent) {
                if (this.isLastPage) {
                    this.completeLastPage();
                }
                else {
                    this.nextPage();
                }
            }
        }
    };
    //ISurveyImplementor
    SurveyModel.prototype.geSurveyData = function () {
        return this;
    };
    SurveyModel.prototype.getSurvey = function () {
        return this;
    };
    SurveyModel.prototype.getTextProcessor = function () {
        return this;
    };
    //ISurveyTriggerOwner
    SurveyModel.prototype.getObjects = function (pages, questions) {
        var result = [];
        Array.prototype.push.apply(result, this.getPagesByNames(pages));
        Array.prototype.push.apply(result, this.getQuestionsByNames(questions));
        return result;
    };
    SurveyModel.prototype.setTriggerValue = function (name, value, isVariable) {
        if (!name)
            return;
        if (isVariable) {
            this.setVariable(name, value);
        }
        else {
            this.setValue(name, value);
        }
    };
    SurveyModel.stylesManager = new __WEBPACK_IMPORTED_MODULE_9__stylesmanager__["a" /* StylesManager */]();
    SurveyModel.platform = "unknown";
    return SurveyModel;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("survey", [
    {
        name: "locale",
        choices: function () {
            return __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].getLocales();
        }
    },
    { name: "title:text", serializationProperty: "locTitle" },
    { name: "focusFirstQuestionAutomatic:boolean", default: true },
    { name: "completedHtml:html", serializationProperty: "locCompletedHtml" },
    {
        name: "completedBeforeHtml:html",
        serializationProperty: "locCompletedBeforeHtml"
    },
    { name: "loadingHtml:html", serializationProperty: "locLoadingHtml" },
    { name: "pages", className: "page", visible: false },
    {
        name: "questions",
        alternativeName: "elements",
        baseClassName: "question",
        visible: false,
        onGetValue: function (obj) {
            return null;
        },
        onSetValue: function (obj, value, jsonConverter) {
            var page = obj.addNewPage("");
            jsonConverter.toObject({ questions: value }, page);
        }
    },
    {
        name: "triggers:triggers",
        baseClassName: "surveytrigger",
        classNamePart: "trigger"
    },
    { name: "surveyId", visible: false },
    { name: "surveyPostId", visible: false },
    { name: "surveyShowDataSaving", visible: false },
    "cookieName",
    "sendResultOnPageNext:boolean",
    { name: "showNavigationButtons:boolean", default: true },
    { name: "showPrevButton:boolean", default: true },
    { name: "showTitle:boolean", default: true },
    { name: "showPageTitles:boolean", default: true },
    { name: "showCompletedPage:boolean", default: true },
    {
        name: "questionsOrder",
        default: "initial",
        choices: ["initial", "random"]
    },
    "showPageNumbers:boolean",
    {
        name: "showQuestionNumbers",
        default: "on",
        choices: ["on", "onPage", "off"]
    },
    {
        name: "questionTitleLocation",
        default: "top",
        choices: ["top", "bottom", "left"]
    },
    { name: "questionErrorLocation", default: "top", choices: ["top", "bottom"] },
    {
        name: "showProgressBar",
        default: "off",
        choices: ["off", "top", "bottom"]
    },
    { name: "mode", default: "edit", choices: ["edit", "display"] },
    { name: "storeOthersAsComment:boolean", default: true },
    "goNextPageAutomatic:boolean",
    {
        name: "clearInvisibleValues",
        default: "onComplete",
        choices: ["none", "onComplete", "onHidden"]
    },
    { name: "startSurveyText", serializationProperty: "locStartSurveyText" },
    { name: "pagePrevText", serializationProperty: "locPagePrevText" },
    { name: "pageNextText", serializationProperty: "locPageNextText" },
    { name: "completeText", serializationProperty: "locCompleteText" },
    { name: "requiredText", default: "*" },
    "questionStartIndex",
    {
        name: "questionTitleTemplate",
        serializationProperty: "locQuestionTitleTemplate"
    },
    { name: "firstPageIsStarted:boolean", default: false },
    { name: "isSinglePage:boolean", default: false },
    { name: "maxTimeToFinish:number", default: 0 },
    { name: "maxTimeToFinishPage:number", default: 0 },
    {
        name: "showTimerPanel",
        default: "none",
        choices: ["none", "top", "bottom"]
    },
    {
        name: "showTimerPanelMode",
        default: "all",
        choices: ["all", "page", "survey"]
    }
]);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ValidatorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SurveyValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NumericValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TextValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnswerCountValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RegexValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EmailValidator; });





var ValidatorResult = /** @class */ (function () {
    function ValidatorResult(value, error) {
        if (error === void 0) { error = null; }
        this.value = value;
        this.error = error;
    }
    return ValidatorResult;
}());

/**
 * Base SurveyJS validator class.
 */
var SurveyValidator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyValidator, _super);
    function SurveyValidator() {
        var _this = _super.call(this) || this;
        _this.text = "";
        return _this;
    }
    SurveyValidator.prototype.getErrorText = function (name) {
        if (this.text)
            return this.text;
        return this.getDefaultErrorText(name);
    };
    SurveyValidator.prototype.getDefaultErrorText = function (name) {
        return "";
    };
    SurveyValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        return null;
    };
    return SurveyValidator;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

var ValidatorRunner = /** @class */ (function () {
    function ValidatorRunner() {
    }
    ValidatorRunner.prototype.run = function (owner) {
        for (var i = 0; i < owner.validators.length; i++) {
            var validatorResult = owner.validators[i].validate(owner.validatedValue, owner.getValidatorTitle());
            if (validatorResult != null) {
                if (validatorResult.error)
                    return validatorResult.error;
                if (validatorResult.value) {
                    owner.validatedValue = validatorResult.value;
                }
            }
        }
        return null;
    };
    return ValidatorRunner;
}());

/**
 * Validate numeric values.
 */
var NumericValidator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](NumericValidator, _super);
    function NumericValidator(minValue, maxValue) {
        if (minValue === void 0) { minValue = null; }
        if (maxValue === void 0) { maxValue = null; }
        var _this = _super.call(this) || this;
        _this.minValue = minValue;
        _this.maxValue = maxValue;
        return _this;
    }
    NumericValidator.prototype.getType = function () {
        return "numericvalidator";
    };
    NumericValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!this.isNumber(value)) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["d" /* RequreNumericError */]());
        }
        var result = new ValidatorResult(parseFloat(value));
        if (this.minValue !== null && this.minValue > result.value) {
            result.error = new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name));
            return result;
        }
        if (this.maxValue !== null && this.maxValue < result.value) {
            result.error = new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name));
            return result;
        }
        return typeof value === "number" ? null : result;
    };
    NumericValidator.prototype.getDefaultErrorText = function (name) {
        var vName = name ? name : __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("value");
        if (this.minValue !== null && this.maxValue !== null) {
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */]
                .getString("numericMinMax")["format"](vName, this.minValue, this.maxValue);
        }
        else {
            if (this.minValue !== null) {
                return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */]
                    .getString("numericMin")["format"](vName, this.minValue);
            }
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */]
                .getString("numericMax")["format"](vName, this.maxValue);
        }
    };
    NumericValidator.prototype.isNumber = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return NumericValidator;
}(SurveyValidator));

/**
 * Validate text values
 */
var TextValidator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](TextValidator, _super);
    function TextValidator(minLength, maxLength) {
        if (minLength === void 0) { minLength = 0; }
        if (maxLength === void 0) { maxLength = 0; }
        var _this = _super.call(this) || this;
        _this.minLength = minLength;
        _this.maxLength = maxLength;
        return _this;
    }
    TextValidator.prototype.getType = function () {
        return "textvalidator";
    };
    TextValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (this.minLength > 0 && value.length < this.minLength) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
        }
        if (this.maxLength > 0 && value.length > this.maxLength) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
        }
        return null;
    };
    TextValidator.prototype.getDefaultErrorText = function (name) {
        if (this.minLength > 0 && this.maxLength > 0)
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */]
                .getString("textMinMaxLength")["format"](this.minLength, this.maxLength);
        if (this.minLength > 0)
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */]
                .getString("textMinLength")["format"](this.minLength);
        return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */]
            .getString("textMaxLength")["format"](this.maxLength);
    };
    return TextValidator;
}(SurveyValidator));

var AnswerCountValidator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AnswerCountValidator, _super);
    function AnswerCountValidator(minCount, maxCount) {
        if (minCount === void 0) { minCount = null; }
        if (maxCount === void 0) { maxCount = null; }
        var _this = _super.call(this) || this;
        _this.minCount = minCount;
        _this.maxCount = maxCount;
        return _this;
    }
    AnswerCountValidator.prototype.getType = function () {
        return "answercountvalidator";
    };
    AnswerCountValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (value == null || value.constructor != Array)
            return null;
        var count = value.length;
        if (this.minCount && count < this.minCount) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */]
                .getString("minSelectError")["format"](this.minCount))));
        }
        if (this.maxCount && count > this.maxCount) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */]
                .getString("maxSelectError")["format"](this.maxCount))));
        }
        return null;
    };
    AnswerCountValidator.prototype.getDefaultErrorText = function (name) {
        return name;
    };
    return AnswerCountValidator;
}(SurveyValidator));

/**
 * Use it to validate the text by regular expressions.
 */
var RegexValidator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](RegexValidator, _super);
    function RegexValidator(regex) {
        if (regex === void 0) { regex = null; }
        var _this = _super.call(this) || this;
        _this.regex = regex;
        return _this;
    }
    RegexValidator.prototype.getType = function () {
        return "regexvalidator";
    };
    RegexValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!this.regex || !value)
            return null;
        var re = new RegExp(this.regex);
        if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
                var res = this.hasError(re, value[i], name);
                if (res)
                    return res;
            }
        }
        return this.hasError(re, value, name);
    };
    RegexValidator.prototype.hasError = function (re, value, name) {
        if (re.test(value))
            return null;
        return new ValidatorResult(value, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
    };
    return RegexValidator;
}(SurveyValidator));

/**
 * Validate e-mail address in the text input
 */
var EmailValidator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](EmailValidator, _super);
    function EmailValidator() {
        var _this = _super.call(this) || this;
        _this.re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return _this;
    }
    EmailValidator.prototype.getType = function () {
        return "emailvalidator";
    };
    EmailValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!value)
            return null;
        if (this.re.test(value))
            return null;
        return new ValidatorResult(value, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
    };
    EmailValidator.prototype.getDefaultErrorText = function (name) {
        return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("invalidEmail");
    };
    return EmailValidator;
}(SurveyValidator));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.addClass("surveyvalidator", ["text"]);
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.addClass("numericvalidator", ["minValue:number", "maxValue:number"], function () {
    return new NumericValidator();
}, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.addClass("textvalidator", ["minLength:number", "maxLength:number"], function () {
    return new TextValidator();
}, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.addClass("answercountvalidator", ["minCount:number", "maxCount:number"], function () {
    return new AnswerCountValidator();
}, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.addClass("regexvalidator", ["regex"], function () {
    return new RegexValidator();
}, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.addClass("emailvalidator", [], function () {
    return new EmailValidator();
}, "surveyvalidator");


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_matrixdropdown__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_matrixdropdownbase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__koquestion__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixBaseImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDropdown; });







var QuestionMatrixBaseImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixBaseImplementor, _super);
    function QuestionMatrixBaseImplementor(question) {
        var _this = _super.call(this, question) || this;
        var self = _this;
        _this.koCellAfterRender = function (el, con) {
            return self.cellAfterRender(el, con);
        };
        _this.question["koCellAfterRender"] = _this.koCellAfterRender;
        return _this;
    }
    QuestionMatrixBaseImplementor.prototype.cellAfterRender = function (elements, con) {
        if (!this.question.survey)
            return;
        var el = __WEBPACK_IMPORTED_MODULE_1__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
        if (!el)
            return;
        var cell = con;
        if (cell.question.customWidget) {
            cell.question.customWidget.afterRender(cell.question, el);
        }
        var options = {
            cell: cell,
            cellQuestion: cell.question,
            htmlElement: el,
            row: cell.row,
            column: cell.column
        };
        this.question.survey.matrixAfterCellRender(this.question, options);
    };
    return QuestionMatrixBaseImplementor;
}(__WEBPACK_IMPORTED_MODULE_6__koquestion__["a" /* QuestionImplementor */]));

var QuestionMatrixDropdown = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdown, _super);
    function QuestionMatrixDropdown(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionMatrixBaseImplementor(_this);
        return _this;
    }
    return QuestionMatrixDropdown;
}(__WEBPACK_IMPORTED_MODULE_2__question_matrixdropdown__["a" /* QuestionMatrixDropdownModel */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("matrixdropdown", function () {
    return new QuestionMatrixDropdown("");
});
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdropdown", function (name) {
    var q = new QuestionMatrixDropdown(name);
    q.choices = [1, 2, 3, 4, 5];
    q.rows = __WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].DefaultRows;
    __WEBPACK_IMPORTED_MODULE_3__question_matrixdropdownbase__["a" /* QuestionMatrixDropdownModelBase */].addDefaultColumns(q);
    return q;
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_text__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion__ = __webpack_require__(6);
/* unused harmony export QuestionTextImplementor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionText; });





var QuestionTextImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionTextImplementor, _super);
    function QuestionTextImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question = question;
        return _this;
    }
    QuestionTextImplementor.prototype.updateValue = function (newValue) {
        _super.prototype.updateValue.call(this, newValue);
        if (newValue !== this.question.value) {
            this.koValue(this.question.value);
        }
    };
    return QuestionTextImplementor;
}(__WEBPACK_IMPORTED_MODULE_4__koquestion__["a" /* QuestionImplementor */]));

var QuestionText = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionText, _super);
    function QuestionText(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionTextImplementor(_this);
        return _this;
    }
    return QuestionText;
}(__WEBPACK_IMPORTED_MODULE_1__question_text__["a" /* QuestionTextModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("text", function () {
    return new QuestionText("");
});
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("text", function (name) {
    return new QuestionText(name);
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return koTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTemplateText; });
var koTemplate = __webpack_require__(103);
var SurveyTemplateText = /** @class */ (function () {
    function SurveyTemplateText() {
    }
    SurveyTemplateText.prototype.addText = function (newText, id, name) {
        id = this.getId(id, name);
        this.text =
            this.text +
                '<script type="text/html" ' +
                id +
                ">" +
                newText +
                "</script>";
    };
    SurveyTemplateText.prototype.replaceText = function (replaceText, id, questionType) {
        if (questionType === void 0) { questionType = null; }
        var posId = this.getId(id, questionType);
        var pos = this.text.indexOf(posId);
        if (pos < 0) {
            this.addText(replaceText, id, questionType);
            return;
        }
        pos = this.text.indexOf(">", pos);
        if (pos < 0)
            return;
        var startPos = pos + 1;
        var endString = "</script>";
        pos = this.text.indexOf(endString, startPos);
        if (pos < 0)
            return;
        this.text =
            this.text.substr(0, startPos) + replaceText + this.text.substr(pos);
    };
    SurveyTemplateText.prototype.getId = function (id, questionType) {
        var result = 'id="survey-' + id;
        if (questionType) {
            result += "-" + questionType;
        }
        return result + '"';
    };
    Object.defineProperty(SurveyTemplateText.prototype, "text", {
        get: function () {
            return koTemplate;
        },
        set: function (value) {
            koTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyTemplateText;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoicesRestfull; });






var XmlParser = /** @class */ (function () {
    function XmlParser() {
        this.parser = new DOMParser();
    }
    XmlParser.prototype.assignValue = function (target, name, value) {
        if (Array.isArray(target[name])) {
            target[name].push(value);
        }
        else if (target[name] !== undefined) {
            target[name] = [target[name]].concat(value);
        }
        else if (typeof value === "object" &&
            Object.keys(value).length === 1 &&
            Object.keys(value)[0] === name) {
            target[name] = value[name];
        }
        else {
            target[name] = value;
        }
    };
    XmlParser.prototype.xml2Json = function (xmlNode, result) {
        if (xmlNode.children && xmlNode.children.length > 0) {
            for (var i = 0; i < xmlNode.children.length; i++) {
                var childNode = xmlNode.children[i];
                var childObject = {};
                this.xml2Json(childNode, childObject);
                this.assignValue(result, childNode.nodeName, childObject);
            }
        }
        else {
            this.assignValue(result, xmlNode.nodeName, xmlNode.textContent);
        }
    };
    XmlParser.prototype.parseXmlString = function (xmlString) {
        var xmlRoot = this.parser.parseFromString(xmlString, "text/xml");
        var json = {};
        this.xml2Json(xmlRoot, json);
        return json;
    };
    return XmlParser;
}());
/**
 * A definition for filling choices for checkbox, dropdown and radiogroup questions from resfull services.
 * The run method call a restfull service and results can be get on getREsultCallback.
 */
var ChoicesRestfull = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ChoicesRestfull, _super);
    function ChoicesRestfull() {
        var _this = _super.call(this) || this;
        _this.lastObjHash = "";
        _this.processedUrl = "";
        _this.processedPath = "";
        _this.error = null;
        return _this;
    }
    ChoicesRestfull.getCachedItemsResult = function (obj) {
        var hash = obj.objHash;
        var res = ChoicesRestfull.itemsResult[hash];
        if (!res)
            return false;
        if (obj.getResultCallback) {
            obj.getResultCallback(res);
        }
        return true;
    };
    ChoicesRestfull.prototype.run = function (textProcessor) {
        if (textProcessor === void 0) { textProcessor = null; }
        if (!this.url || !this.getResultCallback)
            return;
        this.processedText(textProcessor);
        if (!this.processedUrl) {
            this.getResultCallback([]);
            return;
        }
        if (this.lastObjHash == this.objHash)
            return;
        this.lastObjHash = this.objHash;
        if (this.useChangedItemsResults())
            return;
        this.error = null;
        this.sendRequest();
    };
    ChoicesRestfull.prototype.useChangedItemsResults = function () {
        return ChoicesRestfull.getCachedItemsResult(this);
    };
    ChoicesRestfull.prototype.processedText = function (textProcessor) {
        if (textProcessor) {
            var pUrl = textProcessor.processTextEx(this.url);
            var pPath = textProcessor.processTextEx(this.path);
            if (!pUrl.hasAllValuesOnLastRun || !pPath.hasAllValuesOnLastRun) {
                this.processedUrl = "";
                this.processedPath = "";
            }
            else {
                this.processedUrl = pUrl.text;
                this.processedPath = pPath.text;
            }
        }
        else {
            this.processedUrl = this.url;
            this.processedPath = this.path;
        }
    };
    ChoicesRestfull.prototype.parseResponse = function (response) {
        var parsedResponse;
        if (!!response &&
            typeof response.indexOf === "function" &&
            response.indexOf("<") === 0) {
            var parser = new XmlParser();
            parsedResponse = parser.parseXmlString(response);
        }
        else {
            try {
                parsedResponse = JSON.parse(response);
            }
            catch (_a) {
                parsedResponse = (response || "")
                    .split("\n")
                    .map(function (s) { return s.trim(" "); })
                    .filter(function (s) { return !!s; });
            }
        }
        return parsedResponse;
    };
    ChoicesRestfull.prototype.sendRequest = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", this.processedUrl);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var self = this;
        xhr.onload = function () {
            if (xhr.status === 200) {
                self.onLoad(self.parseResponse(xhr.response));
            }
            else {
                self.onError(xhr.statusText, xhr.responseText);
            }
        };
        var options = { request: xhr };
        if (!!ChoicesRestfull.onBeforeSendRequest) {
            ChoicesRestfull.onBeforeSendRequest(this, options);
        }
        options.request.send();
    };
    ChoicesRestfull.prototype.getType = function () {
        return "choicesByUrl";
    };
    Object.defineProperty(ChoicesRestfull.prototype, "isEmpty", {
        get: function () {
            return !this.url && !this.path && !this.valueName && !this.titleName;
        },
        enumerable: true,
        configurable: true
    });
    ChoicesRestfull.prototype.getCustomPropertiesNames = function () {
        var properties = this.getCustomProperties();
        var res = new Array();
        for (var i = 0; i < properties.length; i++) {
            res.push(this.getCustomPropertyName(properties[i].name));
        }
        return res;
    };
    ChoicesRestfull.prototype.getCustomPropertyName = function (propertyName) {
        return propertyName + "Name";
    };
    ChoicesRestfull.prototype.getCustomProperties = function () {
        var properties = __WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.getProperties(this.itemValueType);
        var res = [];
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name === "value" || properties[i].name === "text")
                continue;
            res.push(properties[i]);
        }
        return res;
    };
    ChoicesRestfull.prototype.setData = function (json) {
        this.clear();
        if (json.url)
            this.url = json.url;
        if (json.path)
            this.path = json.path;
        if (json.valueName)
            this.valueName = json.valueName;
        if (json.titleName)
            this.titleName = json.titleName;
        var properties = this.getCustomPropertiesNames();
        for (var i = 0; i < properties.length; i++) {
            if (json[properties[i]])
                this[properties[i]] = json[properties[i]];
        }
    };
    ChoicesRestfull.prototype.getData = function () {
        if (this.isEmpty)
            return null;
        var res = {};
        if (this.url)
            res["url"] = this.url;
        if (this.path)
            res["path"] = this.path;
        if (this.valueName)
            res["valueName"] = this.valueName;
        if (this.titleName)
            res["titleName"] = this.titleName;
        var properties = this.getCustomPropertiesNames();
        for (var i = 0; i < properties.length; i++) {
            if (this[properties[i]])
                res[properties[i]] = this[properties[i]];
        }
        return res;
    };
    Object.defineProperty(ChoicesRestfull.prototype, "url", {
        get: function () {
            return this.getPropertyValue("url", "");
        },
        set: function (val) {
            this.setPropertyValue("url", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChoicesRestfull.prototype, "path", {
        get: function () {
            return this.getPropertyValue("path", "");
        },
        set: function (val) {
            this.setPropertyValue("path", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChoicesRestfull.prototype, "valueName", {
        get: function () {
            return this.getPropertyValue("valueName", "");
        },
        set: function (val) {
            this.setPropertyValue("valueName", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChoicesRestfull.prototype, "titleName", {
        get: function () {
            return this.getPropertyValue("titleName", "");
        },
        set: function (val) {
            this.setPropertyValue("titleName", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChoicesRestfull.prototype, "itemValueType", {
        get: function () {
            if (!this.owner)
                return "itemvalue";
            var prop = __WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.findProperty(this.owner.getType(), "choices");
            if (!prop)
                return "itemvalue";
            if (prop.type == "itemvalues")
                return "itemvalue";
            return prop.type;
        },
        enumerable: true,
        configurable: true
    });
    ChoicesRestfull.prototype.clear = function () {
        this.url = "";
        this.path = "";
        this.valueName = "";
        this.titleName = "";
        var properties = this.getCustomPropertiesNames();
        for (var i = 0; i < properties.length; i++) {
            if (this[properties[i]])
                this[properties[i]] = "";
        }
    };
    ChoicesRestfull.prototype.onLoad = function (result) {
        var items = [];
        result = this.getResultAfterPath(result);
        if (result && result["length"]) {
            for (var i = 0; i < result.length; i++) {
                var itemValue = result[i];
                if (!itemValue)
                    continue;
                var value = this.getValue(itemValue);
                var title = this.getTitle(itemValue);
                var item = new __WEBPACK_IMPORTED_MODULE_2__itemvalue__["a" /* ItemValue */](value, title);
                this.setCustomProperties(item, itemValue);
                items.push(item);
            }
        }
        else {
            this.error = new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("urlGetChoicesError"));
        }
        ChoicesRestfull.itemsResult[this.objHash] = items;
        this.getResultCallback(items);
    };
    ChoicesRestfull.prototype.setCustomProperties = function (item, itemValue) {
        var properties = this.getCustomProperties();
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            var val = this.getValueCore(itemValue, this.getPropertyBinding(prop.name));
            if (!this.isValueEmpty(val)) {
                item[prop.name] = val;
            }
        }
    };
    ChoicesRestfull.prototype.getPropertyBinding = function (propertyName) {
        if (this[this.getCustomPropertyName(propertyName)])
            return this[this.getCustomPropertyName(propertyName)];
        if (this[propertyName])
            return this[propertyName];
        return propertyName;
    };
    ChoicesRestfull.prototype.onError = function (status, response) {
        this.error = new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */]
            .getString("urlRequestError")["format"](status, response));
        this.getResultCallback([]);
    };
    ChoicesRestfull.prototype.getResultAfterPath = function (result) {
        if (!result)
            return result;
        if (!this.processedPath)
            return result;
        var pathes = this.getPathes();
        for (var i = 0; i < pathes.length; i++) {
            result = result[pathes[i]];
            if (!result)
                return null;
        }
        return result;
    };
    ChoicesRestfull.prototype.getPathes = function () {
        var pathes = [];
        if (this.processedPath.indexOf(";") > -1) {
            pathes = this.path.split(";");
        }
        else {
            pathes = this.processedPath.split(",");
        }
        if (pathes.length == 0)
            pathes.push(this.processedPath);
        return pathes;
    };
    ChoicesRestfull.prototype.getValue = function (item) {
        if (!item)
            return null;
        if (this.valueName)
            return this.getValueCore(item, this.valueName);
        if (!(item instanceof Object))
            return item;
        var len = Object.keys(item).length;
        if (len < 1)
            return null;
        return item[Object.keys(item)[0]];
    };
    ChoicesRestfull.prototype.getTitle = function (item) {
        var title = this.titleName ? this.titleName : "title";
        return this.getValueCore(item, title);
    };
    ChoicesRestfull.prototype.getValueCore = function (item, property) {
        if (!item)
            return null;
        if (property.indexOf(".") < 0)
            return item[property];
        var properties = property.split(".");
        for (var i = 0; i < properties.length; i++) {
            item = item[properties[i]];
            if (!item)
                return null;
        }
        return item;
    };
    Object.defineProperty(ChoicesRestfull.prototype, "objHash", {
        get: function () {
            return (this.processedUrl +
                ";" +
                this.processedPath +
                ";" +
                this.valueName +
                ";" +
                this.titleName);
        },
        enumerable: true,
        configurable: true
    });
    ChoicesRestfull.itemsResult = {};
    return ChoicesRestfull;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.addClass("choicesByUrl", ["url", "path", "valueName", "titleName"], function () {
    return new ChoicesRestfull();
});


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conditions__ = __webpack_require__(13);
/* unused harmony export ConditionsParserError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionsParser; });

var ConditionsParserError = /** @class */ (function () {
    function ConditionsParserError(at, code) {
        this.at = at;
        this.code = code;
    }
    return ConditionsParserError;
}());

var ConditionsParser = /** @class */ (function () {
    function ConditionsParser() {
        this.ERROR_OperatorExpected = "OPERATOR_EXPECTED";
        this.ERROR_RightPartExpected = "RIGHTPART_EXPECTED";
        this.ERROR_ExpressionExpected = "EXPRESSION_EXPECTED";
        this.ERROR_EndExpected = "END_EXPECTED";
    }
    ConditionsParser.prototype.parse = function (text, root) {
        this.setProperties(text, root);
        return this.parseText();
    };
    ConditionsParser.prototype.createCondition = function (text) {
        var root = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* ConditionNode */]();
        if (!this.parse(text, root)) {
            root = null;
        }
        return root;
    };
    ConditionsParser.prototype.parseExpression = function (text) {
        this.setProperties(text, new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* ConditionNode */]());
        return this.readExpressionOperand();
    };
    Object.defineProperty(ConditionsParser.prototype, "error", {
        get: function () {
            return this.errorValue;
        },
        enumerable: true,
        configurable: true
    });
    ConditionsParser.prototype.createError = function (code) {
        if (this.errorValue)
            return;
        this.errorValue = new ConditionsParserError(this.at, code);
    };
    ConditionsParser.prototype.setProperties = function (text, root) {
        this.text = text;
        this.at = 0;
        this.length = this.text.length;
        this.root = root;
        this.root.clear();
        this.node = this.root;
        this.expressionNodes = [];
        this.expressionNodes.push(this.node);
        this.errorValue = null;
    };
    ConditionsParser.prototype.toString = function (root) {
        return root.toString();
    };
    ConditionsParser.prototype.parseText = function () {
        var res = this.readConditions();
        if (this.at < this.length) {
            this.createError(this.ERROR_EndExpected);
        }
        return res && this.at >= this.length;
    };
    ConditionsParser.prototype.readConditions = function () {
        var res = this.readCondition();
        if (!res)
            return res;
        var connective = this.readConnective();
        if (connective) {
            this.addConnective(connective);
            return this.readConditions();
        }
        return true;
    };
    ConditionsParser.prototype.readCondition = function () {
        var expRes = this.readExpression();
        if (expRes < 0)
            return false;
        if (expRes == 1)
            return true;
        var left = this.readExpressionOperand();
        if (!left) {
            this.createError(this.ERROR_ExpressionExpected);
            return false;
        }
        var op = this.readOperator();
        if (!op) {
            if (left.isBoolean) {
                var c = new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* Condition */]();
                c.left = left;
                this.addCondition(c);
                return true;
            }
            this.createError(this.ERROR_OperatorExpected);
            return false;
        }
        var c = new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* Condition */]();
        c.left = left;
        c.operator = op;
        if (!__WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* Condition */].isNoRightOperation(op)) {
            var right = this.readExpressionOperand();
            if (!right) {
                this.createError(this.ERROR_RightPartExpected);
                return false;
            }
            c.right = right;
        }
        this.addCondition(c);
        return true;
    };
    ConditionsParser.prototype.readOperand = function () {
        var str = this.readString();
        if (!str)
            return null;
        var params = this.readParameters();
        if (params) {
            var res = new __WEBPACK_IMPORTED_MODULE_0__conditions__["d" /* FunctionOperand */](str);
            res.parameters = params;
            return res;
        }
        return new __WEBPACK_IMPORTED_MODULE_0__conditions__["e" /* Operand */](str);
    };
    ConditionsParser.prototype.readExpression = function () {
        this.skip();
        if (this.at >= this.length || this.ch != "(")
            return 0;
        this.at++;
        this.pushExpression();
        var res = this.readConditions();
        if (res) {
            this.skip();
            res = this.ch == ")";
            this.at++;
            this.popExpression();
            return 1;
        }
        return -1;
    };
    ConditionsParser.prototype.readExpressionOperand = function (prevExpr, stack) {
        if (prevExpr === void 0) { prevExpr = null; }
        if (stack === void 0) { stack = null; }
        this.skip();
        if (this.at >= this.length)
            return null;
        var isOpenBracket = this.isOpenBracket(this.ch);
        if (isOpenBracket) {
            this.at++;
            this.pushExpression();
        }
        var a = this.readOperand();
        if (!a)
            return null;
        var operator = this.readOperandOperator();
        if (!operator) {
            if (prevExpr != null) {
                prevExpr.right = a;
                a = prevExpr;
            }
            if (this.isCloseBracket(this.ch)) {
                prevExpr = stack && stack.length > 0 ? stack.pop() : null;
                var saveAt = this.at;
                this.at++;
                operator = this.readOperandOperator();
                var doPopExpression = operator || (prevExpr && prevExpr["isOpenBracket"]);
                if (!operator) {
                    this.at = saveAt + (doPopExpression ? 1 : 0);
                }
                if (doPopExpression) {
                    this.popExpression();
                }
            }
            if (operator) {
                var expr = new __WEBPACK_IMPORTED_MODULE_0__conditions__["f" /* ExpressionOperand */]();
                expr.left = prevExpr ? prevExpr : a;
                expr.operator = operator;
                return this.readExpressionOperand(expr, stack);
            }
            return a;
        }
        var expr = new __WEBPACK_IMPORTED_MODULE_0__conditions__["f" /* ExpressionOperand */]();
        expr["isOpenBracket"] = isOpenBracket;
        expr.left = a;
        expr.operator = operator;
        if (!stack) {
            stack = [];
        }
        if (stack.length == 0 || isOpenBracket) {
            stack.push(expr);
        }
        if (prevExpr) {
            if (!isOpenBracket &&
                (this.isHighPriorityOperand(prevExpr.operator) ||
                    !this.isHighPriorityOperand(operator))) {
                prevExpr.right = a;
                expr.left = prevExpr;
                var index = stack.indexOf(prevExpr);
                if (index > -1) {
                    stack[index] = expr;
                }
            }
            else {
                prevExpr.right = this.readExpressionOperand(expr, stack);
                return prevExpr;
            }
        }
        return this.readExpressionOperand(expr, stack);
    };
    Object.defineProperty(ConditionsParser.prototype, "ch", {
        get: function () {
            return this.text.charAt(this.at);
        },
        enumerable: true,
        configurable: true
    });
    ConditionsParser.prototype.skip = function () {
        while (this.at < this.length && this.isSpace(this.ch))
            this.at++;
    };
    ConditionsParser.prototype.isSpace = function (c) {
        return c == " " || c == "\n" || c == "\t" || c == "\r";
    };
    ConditionsParser.prototype.isQuotes = function (c) {
        return c == "'" || c == '"';
    };
    ConditionsParser.prototype.isComma = function (c) {
        return c == ",";
    };
    ConditionsParser.prototype.isOperatorChar = function (c) {
        return (c == ">" ||
            c == "<" ||
            c == "=" ||
            c == "!" ||
            c == "+" ||
            c == "-" ||
            c == "*" ||
            c == "/" ||
            c == "%");
    };
    ConditionsParser.prototype.isOpenBracket = function (c) {
        return c == "(";
    };
    ConditionsParser.prototype.isCloseBracket = function (c) {
        return c == ")";
    };
    ConditionsParser.prototype.isBrackets = function (c) {
        return this.isOpenBracket(c) || this.isCloseBracket(c);
    };
    ConditionsParser.prototype.readString = function () {
        this.skip();
        if (this.at >= this.length)
            return null;
        var start = this.at;
        var hasQuotes = this.isQuotes(this.ch);
        var hasBraces = this.ch == "{";
        if (hasQuotes)
            this.at++;
        var isFirstOpCh = this.isOperatorChar(this.ch);
        var isPrevEspape = false;
        while (this.at < this.length) {
            if (hasBraces) {
                var isBrace = this.ch == "}";
                this.at++;
                if (isBrace)
                    break;
                else
                    continue;
            }
            if (!hasQuotes && this.isSpace(this.ch))
                break;
            if (this.isQuotes(this.ch) && !isPrevEspape) {
                if (hasQuotes)
                    this.at++;
                break;
            }
            if (!hasQuotes) {
                if (this.ch != "-" && isFirstOpCh != this.isOperatorChar(this.ch))
                    break;
                if (this.isBrackets(this.ch) || this.isComma(this.ch))
                    break;
            }
            isPrevEspape = this.ch === "\\";
            this.at++;
        }
        if (this.at <= start)
            return null;
        var res = this.text.substr(start, this.at - start);
        if (res) {
            if (res.length > 1 && this.isQuotes(res[0])) {
                var len = res.length - 1;
                if (this.isQuotes(res[res.length - 1]))
                    len--;
                res = res.substr(1, len);
            }
        }
        return res;
    };
    ConditionsParser.prototype.readParameter = function () {
        var openedBrackets = 0;
        var startIndex = this.at;
        while (this.at < this.length) {
            if (this.isOpenBracket(this.ch))
                openedBrackets++;
            if (this.isCloseBracket(this.ch))
                openedBrackets--;
            if (openedBrackets < 0)
                break;
            if (openedBrackets === 0 && this.ch === ",")
                break;
            this.at++;
        }
        var paramStr = this.text.substring(startIndex, this.at);
        if (!paramStr)
            return null;
        var parser = new ConditionsParser();
        var node = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* ConditionNode */]();
        if (parser.parse(paramStr, node)) {
            return new __WEBPACK_IMPORTED_MODULE_0__conditions__["g" /* ConditionOperand */](node);
        }
        return parser.parseExpression(paramStr);
    };
    ConditionsParser.prototype.readParameters = function () {
        if (!this.isOpenBracket(this.ch))
            return null;
        var params = [];
        while (this.at < this.length && !this.isCloseBracket(this.ch)) {
            this.at++;
            var operand = this.readParameter(); //this.readExpressionOperand();
            if (operand) {
                params.push(operand);
            }
        }
        this.at++;
        return params;
    };
    ConditionsParser.prototype.isHighPriorityOperand = function (op) {
        return op == "*" || op == "/" || op == "%";
    };
    ConditionsParser.prototype.readOperandOperator = function () {
        this.skip();
        if (this.ch == "+" ||
            this.ch == "-" ||
            this.ch == "*" ||
            this.ch == "/" ||
            this.ch == "%") {
            var res = this.ch;
            this.at++;
            return res;
        }
        return null;
    };
    ConditionsParser.prototype.readOperator = function () {
        this.skip();
        var curAt = this.at;
        var op = this.readString();
        if (!op)
            return null;
        op = op.toLowerCase();
        if (op == ">")
            op = "greater";
        if (op == "<")
            op = "less";
        if (op == ">=" || op == "=>")
            op = "greaterorequal";
        if (op == "<=" || op == "=<")
            op = "lessorequal";
        if (op == "=" || op == "==")
            op = "equal";
        if (op == "<>" || op == "!=")
            op = "notequal";
        if (op == "equals")
            op = "equal";
        if (op == "notequals")
            op = "notequals";
        if (op == "contain" || op == "*=")
            op = "contains";
        if (op == "notcontain")
            op = "notcontains";
        if (__WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* Condition */].isCorrectOperator(op))
            return op;
        this.at = curAt;
        return null;
    };
    ConditionsParser.prototype.readConnective = function () {
        var con = this.readString();
        if (!con)
            return null;
        con = con.toLowerCase();
        if (con == "&" || con == "&&")
            con = "and";
        if (con == "|" || con == "||")
            con = "or";
        if (con != "and" && con != "or")
            con = null;
        return con;
    };
    ConditionsParser.prototype.pushExpression = function () {
        var node = null;
        this.expressionNodes.push(node);
        this.node = node;
    };
    ConditionsParser.prototype.makeNodeCondition = function () {
        if (!this.node || !this.node.children) {
            this.node = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* ConditionNode */]();
            this.expressionNodes[this.expressionNodes.length - 1] = this.node;
        }
    };
    ConditionsParser.prototype.popExpression = function () {
        var node = this.expressionNodes.pop();
        this.node = this.expressionNodes[this.expressionNodes.length - 1];
        if (node) {
            this.makeNodeCondition();
            this.node.children.push(node);
        }
    };
    ConditionsParser.prototype.addCondition = function (c) {
        this.makeNodeCondition();
        this.node.children.push(c);
    };
    ConditionsParser.prototype.addConnective = function (con) {
        this.makeNodeCondition();
        if (this.node.children.length < 2) {
            this.node.connective = con;
        }
        else {
            if (this.node.connective != con) {
                var oldCon = this.node.connective;
                var oldChildren = this.node.children;
                this.node.clear();
                this.node.connective = con;
                var oldNode = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* ConditionNode */]();
                oldNode.connective = oldCon;
                oldNode.children = oldChildren;
                this.node.children.push(oldNode);
                var newNode = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* ConditionNode */]();
                this.node.children.push(newNode);
                this.node = newNode;
            }
        }
    };
    return ConditionsParser;
}());



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dxSurveyService; });
/**
 * The class contains methods to work with www.dxsurvey.com service.
 */
var dxSurveyService = /** @class */ (function () {
    //public static serviceUrl: string = "http://localhost:50488/api/Survey";
    function dxSurveyService() {
    }
    dxSurveyService.prototype.loadSurvey = function (surveyId, onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", dxSurveyService.serviceUrl + "/getSurvey?surveyId=" + surveyId);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = JSON.parse(xhr.response);
            onLoad(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.getSurveyJsonAndIsCompleted = function (surveyId, clientId, onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", dxSurveyService.serviceUrl +
            "/getSurveyAndIsCompleted?surveyId=" +
            surveyId +
            "&clientId=" +
            clientId);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            var result = JSON.parse(xhr.response);
            var surveyJson = result ? result.survey : null;
            var isCompleted = result ? result.isCompleted : null;
            onLoad(xhr.status == 200, surveyJson, isCompleted, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.sendResult = function (postId, result, onSendResult, clientId, isPartialCompleted) {
        if (clientId === void 0) { clientId = null; }
        if (isPartialCompleted === void 0) { isPartialCompleted = false; }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", dxSurveyService.serviceUrl + "/post/");
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        var data = { postId: postId, surveyResult: JSON.stringify(result) };
        if (clientId)
            data["clientId"] = clientId;
        if (isPartialCompleted)
            data["isPartialCompleted"] = true;
        var dataStringify = JSON.stringify(data);
        var self = this;
        xhr.onload = xhr.onerror = function () {
            if (!onSendResult)
                return;
            onSendResult(xhr.status == 200, xhr.response);
        };
        xhr.send(dataStringify);
    };
    dxSurveyService.prototype.sendFile = function (postId, file, onSendFile) {
        var xhr = new XMLHttpRequest();
        xhr.onload = xhr.onerror = function () {
            if (!onSendFile)
                return;
            onSendFile(xhr.status == 200, JSON.parse(xhr.response));
        };
        xhr.open("POST", dxSurveyService.serviceUrl + "/upload/", true);
        var formData = new FormData();
        formData.append("file", file);
        formData.append("postId", postId);
        xhr.send(formData);
    };
    dxSurveyService.prototype.getResult = function (resultId, name, onGetResult) {
        var xhr = new XMLHttpRequest();
        var data = "resultId=" + resultId + "&name=" + name;
        xhr.open("GET", dxSurveyService.serviceUrl + "/getResult?" + data);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var self = this;
        xhr.onload = function () {
            var result = null;
            var list = null;
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                list = [];
                for (var key in result.QuestionResult) {
                    var el = { name: key, value: result.QuestionResult[key] };
                    list.push(el);
                }
            }
            onGetResult(xhr.status == 200, result, list, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.isCompleted = function (resultId, clientId, onIsCompleted) {
        var xhr = new XMLHttpRequest();
        var data = "resultId=" + resultId + "&clientId=" + clientId;
        xhr.open("GET", dxSurveyService.serviceUrl + "/isCompleted?" + data);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var self = this;
        xhr.onload = function () {
            var result = null;
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
            }
            onIsCompleted(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey";
    return dxSurveyService;
}());



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionFactory; });
var FunctionFactory = /** @class */ (function () {
    function FunctionFactory() {
        this.functionHash = {};
    }
    FunctionFactory.prototype.register = function (name, func) {
        this.functionHash[name] = func;
    };
    FunctionFactory.prototype.clear = function () {
        this.functionHash = {};
    };
    FunctionFactory.prototype.getAll = function () {
        var result = [];
        for (var key in this.functionHash) {
            result.push(key);
        }
        return result.sort();
    };
    FunctionFactory.prototype.run = function (name, params) {
        var func = this.functionHash[name];
        if (!func)
            return null;
        return func(params);
    };
    FunctionFactory.Instance = new FunctionFactory();
    return FunctionFactory;
}());

function sum(params) {
    var res = 0;
    for (var i = 0; i < params.length; i++) {
        res += params[i];
    }
    return res;
}
FunctionFactory.Instance.register("sum", sum);
function sumInArray(params) {
    if (params.length != 2)
        return 0;
    var arr = params[0];
    if (!Array.isArray(arr))
        return;
    var name = params[1];
    if (typeof name !== "string" && !(name instanceof String))
        return 0;
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (item && item[name]) {
            res += item[name];
        }
    }
    return res;
}
FunctionFactory.Instance.register("sumInArray", sumInArray);
function iif(params) {
    if (!params && params.length !== 3)
        return "";
    return params[0] ? params[1] : params[2];
}
FunctionFactory.Instance.register("iif", iif);
function age(params) {
    if (!params && params.length < 1)
        return null;
    if (!params[0])
        return null;
    var birthDay = new Date(params[0]);
    var ageDifMs = Date.now() - birthDay.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
FunctionFactory.Instance.register("age", age);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBooleanModel; });




/**
 * A Model for a boolean question.
 */
var QuestionBooleanModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionBooleanModel, _super);
    function QuestionBooleanModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("label", _this, true);
        return _this;
    }
    QuestionBooleanModel.prototype.getType = function () {
        return "boolean";
    };
    Object.defineProperty(QuestionBooleanModel.prototype, "isIndeterminate", {
        /**
         * Returns true if the question check will be rendered in indeterminate mode. value is empty.
         */
        get: function () {
            return this.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "hasTitle", {
        get: function () {
            return this.showTitle;
        },
        enumerable: true,
        configurable: true
    });
    QuestionBooleanModel.prototype.supportGoNextPageAutomatic = function () {
        return true;
    };
    Object.defineProperty(QuestionBooleanModel.prototype, "checkedValue", {
        /**
         * Get/set question value in 3 modes: indeterminate (value is empty), true (check is set) and false (check is unset).
         * @see valueTrue
         * @see valueFalse
         */
        get: function () {
            if (this.isEmpty())
                return null;
            return this.value == this.getValueTrue();
        },
        set: function (val) {
            if (this.isValueEmpty(val)) {
                this.value = null;
            }
            else {
                this.value = val == true ? this.getValueTrue() : this.getValueFalse();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "defaultValue", {
        /**
         * Set the default state of the check: "indeterminate" - default (value is empty/null), "true" - value equals valueTrue or true, "false" - value equals valueFalse or false.
         */
        get: function () {
            return this.getPropertyValue("defaultValue", "indeterminate");
        },
        set: function (val) {
            this.setPropertyValue("defaultValue", val);
            this.updateValueWithDefaults();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "label", {
        /**
         * The checkbox label. If it is empty and showTitle is false then title is rendered
         * @see showTitle
         * @see title
         */
        get: function () {
            return this.getLocalizableStringText("label");
        },
        set: function (val) {
            this.setLocalizableStringText("label", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "locLabel", {
        get: function () {
            return this.getLocalizableString("label");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "locDisplayLabel", {
        get: function () {
            if (this.locLabel.text)
                return this.locLabel;
            return this.showTitle ? this.locLabel : this.locTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "showTitle", {
        /**
         * Set this property to true to show the question title. It is hidden by default.
         */
        get: function () {
            return this.getPropertyValue("showTitle");
        },
        set: function (val) {
            this.setPropertyValue("showTitle", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "valueTrue", {
        /**
         * Set this property, if you want to have a different value from true when check is set.
         */
        get: function () {
            return this.getPropertyValue("valueTrue");
        },
        set: function (val) {
            this.setPropertyValue("valueTrue", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBooleanModel.prototype, "valueFalse", {
        /**
         * Set this property, if you want to have a different value from false when check is unset.
         */
        get: function () {
            return this.getPropertyValue("valueFalse");
        },
        set: function (val) {
            this.setPropertyValue("valueFalse", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionBooleanModel.prototype.getValueTrue = function () {
        return this.valueTrue ? this.valueTrue : true;
    };
    QuestionBooleanModel.prototype.getValueFalse = function () {
        return this.valueFalse ? this.valueFalse : false;
    };
    QuestionBooleanModel.prototype.setDefaultValue = function () {
        if (this.defaultValue == "true")
            this.checkedValue = true;
        if (this.defaultValue == "false")
            this.checkedValue = false;
        if (this.defaultValue == "indeterminate")
            this.value = null;
    };
    return QuestionBooleanModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("boolean", [
    {
        name: "defaultValue:dropdown",
        alternativeName: "booleanDefaultValue",
        default: "indeterminate",
        choices: ["indeterminate", "false", "true"]
    },
    { name: "label:text", serializationProperty: "locLabel" },
    "showTitle:boolean",
    "valueTrue",
    "valueFalse"
], function () {
    return new QuestionBooleanModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_1__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("boolean", function (name) {
    return new QuestionBooleanModel(name);
});


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckboxModel; });





/**
 * A Model for a checkbox question
 */
var QuestionCheckboxModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxModel, _super);
    function QuestionCheckboxModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Object.defineProperty(QuestionCheckboxModel.prototype, "displayValue", {
        get: function () {
            if (this.isEmpty())
                return "";
            var items = this.visibleChoices;
            var values = this.value;
            var str = "";
            for (var i = 0; i < values.length; i++) {
                var valStr = this.getDisplayValue(items, values[i]);
                if (valStr) {
                    if (str)
                        str += ", ";
                    str += valStr;
                }
            }
            return str;
        },
        enumerable: true,
        configurable: true
    });
    QuestionCheckboxModel.prototype.isAnswerCorrect = function () {
        return __WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* Helpers */].isArrayContainsEqual(this.value, this.correctAnswer);
    };
    QuestionCheckboxModel.prototype.getHasOther = function (val) {
        if (!val || !Array.isArray(val))
            return false;
        return val.indexOf(this.otherItem.value) >= 0;
    };
    QuestionCheckboxModel.prototype.valueFromData = function (val) {
        if (!val)
            return val;
        if (!Array.isArray(val))
            return [val];
        return _super.prototype.valueFromData.call(this, val);
    };
    QuestionCheckboxModel.prototype.valueFromDataCore = function (val) {
        for (var i = 0; i < val.length; i++) {
            if (val[i] == this.otherItem.value)
                return val;
            if (this.hasUnknownValue(val[i])) {
                this.comment = val[i];
                var newVal = val.slice();
                newVal[i] = this.otherItem.value;
                return newVal;
            }
        }
        return val;
    };
    QuestionCheckboxModel.prototype.valueToDataCore = function (val) {
        if (!val || !val.length)
            return val;
        for (var i = 0; i < val.length; i++) {
            if (val[i] == this.otherItem.value) {
                if (this.getComment()) {
                    var newVal = val.slice();
                    newVal[i] = this.getComment();
                    return newVal;
                }
            }
        }
        return val;
    };
    QuestionCheckboxModel.prototype.getType = function () {
        return "checkbox";
    };
    return QuestionCheckboxModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["a" /* QuestionCheckboxBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("checkbox", [], function () {
    return new QuestionCheckboxModel("");
}, "checkboxbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("checkbox", function (name) {
    var q = new QuestionCheckboxModel(name);
    q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices;
    return q;
});


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCommentModel; });




/**
 * A Model for a comment question
 */
var QuestionCommentModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCommentModel, _super);
    function QuestionCommentModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("placeHolder", _this);
        return _this;
    }
    Object.defineProperty(QuestionCommentModel.prototype, "placeHolder", {
        /**
         * Use this property to set the input place holder.
         */
        get: function () {
            return this.getLocalizableStringText("placeHolder");
        },
        set: function (val) {
            this.setLocalizableStringText("placeHolder", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionCommentModel.prototype, "locPlaceHolder", {
        get: function () {
            return this.getLocalizableString("placeHolder");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionCommentModel.prototype, "rows", {
        /**
         * The html rows attribute.
         */
        get: function () {
            return this.getPropertyValue("rows", 4);
        },
        set: function (val) {
            this.setPropertyValue("rows", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionCommentModel.prototype, "cols", {
        /**
         * The html cols attribute.
         */
        get: function () {
            return this.getPropertyValue("cols", 50);
        },
        set: function (val) {
            this.setPropertyValue("cols", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionCommentModel.prototype.getType = function () {
        return "comment";
    };
    QuestionCommentModel.prototype.isEmpty = function () {
        return _super.prototype.isEmpty.call(this) || this.value === "";
    };
    return QuestionCommentModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("comment", [
    { name: "cols:number", default: 50 },
    { name: "rows:number", default: 4 },
    { name: "placeHolder", serializationProperty: "locPlaceHolder" }
], function () {
    return new QuestionCommentModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("comment", function (name) {
    return new QuestionCommentModel(name);
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDropdownModel; });





/**
 * A Model for a dropdown question
 */
var QuestionDropdownModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionDropdownModel, _super);
    function QuestionDropdownModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("optionsCaption", _this);
        return _this;
    }
    Object.defineProperty(QuestionDropdownModel.prototype, "optionsCaption", {
        /**
         * Use this property to set the options caption different from the default value. The default value is taken from localization strings.
         */
        get: function () {
            return this.getLocalizableStringText("optionsCaption", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("optionsCaption"));
        },
        set: function (val) {
            this.setLocalizableStringText("optionsCaption", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionDropdownModel.prototype, "locOptionsCaption", {
        get: function () {
            return this.getLocalizableString("optionsCaption");
        },
        enumerable: true,
        configurable: true
    });
    QuestionDropdownModel.prototype.getType = function () {
        return "dropdown";
    };
    QuestionDropdownModel.prototype.supportGoNextPageAutomatic = function () {
        return true;
    };
    return QuestionDropdownModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["b" /* QuestionSelectBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("dropdown", [{ name: "optionsCaption", serializationProperty: "locOptionsCaption" }], function () {
    return new QuestionDropdownModel("");
}, "selectbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("dropdown", function (name) {
    var q = new QuestionDropdownModel(name);
    q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices;
    return q;
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionEmptyModel; });



/**
 * A Model for an question that renders empty "div" tag. It used as a base class for some custom widgets
 */
var QuestionEmptyModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionEmptyModel, _super);
    function QuestionEmptyModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionEmptyModel.prototype.getType = function () {
        return "empty";
    };
    return QuestionEmptyModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("empty", [], function () {
    return new QuestionEmptyModel("");
}, "question");


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conditions__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionExpressionModel; });





/**
 * A Model for expression question. It is a read-only question. It calculates value based on epxression property.
 */
var QuestionExpressionModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionExpressionModel, _super);
    function QuestionExpressionModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("format", _this);
        var self = _this;
        _this.registerFunctionOnPropertyValueChanged("expression", function () {
            if (self.expressionRunner) {
                self.expressionRunner = new __WEBPACK_IMPORTED_MODULE_4__conditions__["h" /* ExpressionRunner */](self.expression);
            }
        });
        return _this;
    }
    QuestionExpressionModel.prototype.getType = function () {
        return "expression";
    };
    Object.defineProperty(QuestionExpressionModel.prototype, "format", {
        /**
         * Use this property to display the value in your own format. Make sure you have "{0}" substring in your string, to display the actual value.
         */
        get: function () {
            return this.getLocalizableStringText("format", "");
        },
        set: function (val) {
            this.setLocalizableStringText("format", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionExpressionModel.prototype, "locFormat", {
        get: function () {
            return this.getLocalizableString("format");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionExpressionModel.prototype, "expression", {
        /**
         * The Expression that used to calculate the question value. You may use standard operators like +, -, * and /, squares (). Here is the example of accessing the question value {questionname}.
         * <br/>Example: "({quantity} * {price}) * (100 - {discount}) / 100"
         */
        get: function () {
            return this.getPropertyValue("expression", "");
        },
        set: function (val) {
            this.setPropertyValue("expression", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionExpressionModel.prototype.runCondition = function (values) {
        _super.prototype.runCondition.call(this, values);
        if (!this.expression || this.expressionIsRunning)
            return;
        this.expressionIsRunning = true;
        if (!this.expressionRunner)
            this.expressionRunner = new __WEBPACK_IMPORTED_MODULE_4__conditions__["h" /* ExpressionRunner */](this.expression);
        this.value = this.expressionRunner.run(values);
        this.expressionIsRunning = false;
    };
    Object.defineProperty(QuestionExpressionModel.prototype, "displayValue", {
        get: function () {
            var val = this.isValueEmpty(this.value) ? this.defaultValue : this.value;
            if (this.isValueEmpty(val))
                return "";
            var str = this.getValueAsStr(val);
            if (!this.format)
                return str;
            return this.format["format"](str);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionExpressionModel.prototype, "displayStyle", {
        /**
         * You may set this property to "decimal", "currency" or "percent". If you set it to "currency", you may use the currency property to display the value in currency different from USD.
         * @see currency
         */
        get: function () {
            return this.getPropertyValue("displayStyle", "none");
        },
        set: function (val) {
            this.setPropertyValue("displayStyle", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionExpressionModel.prototype, "currency", {
        /**
         * Use it to display the value in the currency differen from USD. The displayStype should be set to "currency".
         * @see displayStyle
         */
        get: function () {
            return this.getPropertyValue("currency", "USD");
        },
        set: function (val) {
            if (getCurrecyCodes().indexOf(val) < 0)
                return;
            this.setPropertyValue("currency", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionExpressionModel.prototype, "useGrouping", {
        get: function () {
            return this.getPropertyValue("useGrouping", true);
        },
        set: function (val) {
            this.setPropertyValue("useGrouping", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionExpressionModel.prototype.getValueAsStr = function (val) {
        if (this.displayStyle != "none" &&
            !isNaN(parseFloat(val)) &&
            isFinite(val)) {
            var locale = this.getLocale();
            if (!locale)
                locale = "en";
            var options = {
                style: this.displayStyle,
                currency: this.currency,
                useGrouping: this.useGrouping
            };
            return val.toLocaleString(locale, options);
        }
        return val.toString();
    };
    return QuestionExpressionModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

function getCurrecyCodes() {
    return [
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BOV",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CDF",
        "CHE",
        "CHF",
        "CHW",
        "CLF",
        "CLP",
        "CNY",
        "COP",
        "COU",
        "CRC",
        "CUC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "GBP",
        "GEL",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KMF",
        "KPW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRO",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MXV",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLL",
        "SOS",
        "SRD",
        "SSP",
        "STD",
        "SVC",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD",
        "USN",
        "UYI",
        "UYU",
        "UZS",
        "VEF",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XAG",
        "XAU",
        "XBA",
        "XBB",
        "XBC",
        "XBD",
        "XCD",
        "XDR",
        "XOF",
        "XPD",
        "XPF",
        "XPT",
        "XSU",
        "XTS",
        "XUA",
        "XXX",
        "YER",
        "ZAR",
        "ZAR",
        "ZMW",
        "ZWL"
    ];
}
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("expression", [
    "expression:expression",
    { name: "format", serializationProperty: "locFormat" },
    {
        name: "displayStyle",
        default: "decimal",
        choices: ["none", "decimal", "currency", "percent"]
    },
    {
        name: "currency",
        choices: function () {
            return getCurrecyCodes();
        },
        default: "USD"
    },
    { name: "useGrouping:boolean", default: true },
    { name: "commentText", visible: false },
    { name: "enableIf", visible: false },
    { name: "isRequired", visible: false },
    { name: "readOnly", visible: false },
    { name: "requiredErrorText", visible: false },
    { name: "validators", visible: false }
], function () {
    return new QuestionExpressionModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("expression", function (name) {
    return new QuestionExpressionModel(name);
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyStrings__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFileModel; });






/**
 * A Model for a file question
 */
var QuestionFileModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionFileModel, _super);
    function QuestionFileModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.isUploading = false;
        _this.previewValue = [];
        return _this;
    }
    QuestionFileModel.prototype.getType = function () {
        return "file";
    };
    Object.defineProperty(QuestionFileModel.prototype, "showPreview", {
        /**
         * Set it to true, to show the preview for the image files.
         */
        get: function () {
            return this.getPropertyValue("showPreview", false);
        },
        set: function (val) {
            this.setPropertyValue("showPreview", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "allowMultiple", {
        /**
         * Set it to true, to allow select multiple files.
         */
        get: function () {
            return this.getPropertyValue("allowMultiple", false);
        },
        set: function (val) {
            this.setPropertyValue("allowMultiple", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "imageHeight", {
        /**
         * The image height.
         */
        get: function () {
            return this.getPropertyValue("imageHeight");
        },
        set: function (val) {
            this.setPropertyValue("imageHeight", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "imageWidth", {
        /**
         * The image width.
         */
        get: function () {
            return this.getPropertyValue("imageWidth");
        },
        set: function (val) {
            this.setPropertyValue("imageWidth", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "storeDataAsText", {
        /**
         * Set it to false if you do not want to serialize file content as text in the survey.data.
         * In this case, you have to write the code onUploadFile event to store the file content.
         * @see SurveyModel.onUploadFile
         */
        get: function () {
            return this.getPropertyValue("storeDataAsText", true);
        },
        set: function (val) {
            this.setPropertyValue("storeDataAsText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "maxSize", {
        /**
         * Use this property to setup the maximum allowed file size.
         */
        get: function () {
            return this.getPropertyValue("maxSize", 0);
        },
        set: function (val) {
            this.setPropertyValue("maxSize", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionFileModel.prototype, "cleanButtonCaption", {
        /**
         * The clean files value button caption.
         */
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_5__surveyStrings__["a" /* surveyLocalization */].getString("cleanCaption");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clear value programmatically.
     */
    QuestionFileModel.prototype.clear = function () {
        this.value = undefined;
        this.previewValue = [];
        this.fireCallback(this.previewValueLoadedCallback);
    };
    /**
     * Load file programmatically.
     * @param file
     */
    QuestionFileModel.prototype.loadFile = function (file) {
        this.loadFiles([file]);
    };
    /**
     * Load multiple files programmatically.
     * @param files
     */
    QuestionFileModel.prototype.loadFiles = function (files) {
        var _this = this;
        if (this.survey &&
            !files.every(function (file) {
                return _this.survey.uploadFile(_this.name, file, _this.storeDataAsText, function (status) { return (_this.isUploading = status === "uploading"); });
            })) {
            return;
        }
        this.setFilesValue(files);
    };
    QuestionFileModel.prototype.setFileValue = function (file) {
        this.setFilesValue([file]);
    };
    QuestionFileModel.prototype.setFilesValue = function (files) {
        var _this = this;
        if (!FileReader) {
            return;
        }
        if (!this.showPreview && !this.storeDataAsText) {
            return;
        }
        if (files.every(function (file) { return _this.checkFileForErrors(file); })) {
            return;
        }
        this.previewValue = [];
        files.forEach(function (file) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                if (_this.storeDataAsText) {
                    _this.value = (_this.value || []).concat([fileReader.result]);
                }
                if (_this.showPreview && _this.isFileImage(file)) {
                    _this.previewValue = _this.previewValue.concat([fileReader.result]);
                    _this.fireCallback(_this.previewValueLoadedCallback);
                }
            };
            fileReader.readAsDataURL(file);
        });
    };
    QuestionFileModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.isUploading) {
            errors.push(new __WEBPACK_IMPORTED_MODULE_4__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_5__surveyStrings__["a" /* surveyLocalization */].getString("uploadingFile")));
        }
    };
    QuestionFileModel.prototype.checkFileForErrors = function (file) {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        if (this.maxSize > 0 && file.size > this.maxSize) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_4__error__["e" /* ExceedSizeError */](this.maxSize));
        }
        if (errorLength != this.errors.length || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        return this.errors.length > 0;
    };
    QuestionFileModel.prototype.isFileImage = function (file) {
        if (!file || !file.type)
            return;
        var str = file.type.toLowerCase();
        return str.indexOf("image") == 0;
    };
    return QuestionFileModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("file", [
    "showPreview:boolean",
    "allowMultiple:boolean",
    "imageHeight",
    "imageWidth",
    { name: "storeDataAsText:boolean", default: true },
    "maxSize:number"
], function () {
    return new QuestionFileModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("file", function (name) {
    return new QuestionFileModel(name);
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionbase__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHtmlModel; });




/**
 * A Model for html question. Unlike other questions it doesn't have value and title.
 */
var QuestionHtmlModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionHtmlModel, _super);
    function QuestionHtmlModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.createLocalizableString("html", _this);
        return _this;
    }
    QuestionHtmlModel.prototype.getType = function () {
        return "html";
    };
    Object.defineProperty(QuestionHtmlModel.prototype, "html", {
        get: function () {
            return this.getLocalizableStringText("html", "");
        },
        set: function (val) {
            this.setLocalizableStringText("html", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionHtmlModel.prototype, "locHtml", {
        get: function () {
            return this.getLocalizableString("html");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionHtmlModel.prototype, "processedHtml", {
        get: function () {
            return this.survey ? this.survey.processHtml(this.html) : this.html;
        },
        enumerable: true,
        configurable: true
    });
    return QuestionHtmlModel;
}(__WEBPACK_IMPORTED_MODULE_1__questionbase__["a" /* QuestionBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("html", [{ name: "html:html", serializationProperty: "locHtml" }], function () {
    return new QuestionHtmlModel("");
}, "questionbase");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("html", function (name) {
    return new QuestionHtmlModel(name);
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixModel; });







var MatrixRowModel = /** @class */ (function () {
    function MatrixRowModel(item, fullName, data, value) {
        this.fullName = fullName;
        this.item = item;
        this.data = data;
        this.rowValue = value;
    }
    Object.defineProperty(MatrixRowModel.prototype, "name", {
        get: function () {
            return this.item.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixRowModel.prototype, "text", {
        get: function () {
            return this.item.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixRowModel.prototype, "locText", {
        get: function () {
            return this.item.locText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixRowModel.prototype, "value", {
        get: function () {
            return this.rowValue;
        },
        set: function (newValue) {
            this.rowValue = newValue;
            if (this.data)
                this.data.onMatrixRowChanged(this);
            this.onValueChanged();
        },
        enumerable: true,
        configurable: true
    });
    MatrixRowModel.prototype.onValueChanged = function () { };
    return MatrixRowModel;
}());

/**
 * A Model for a simple matrix question.
 */
var QuestionMatrixModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixModel, _super);
    function QuestionMatrixModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.isRowChanging = false;
        _this.columnsValue = _this.createItemValues("columns");
        _this.rowsValue = _this.createItemValues("rows");
        return _this;
    }
    QuestionMatrixModel.prototype.getType = function () {
        return "matrix";
    };
    Object.defineProperty(QuestionMatrixModel.prototype, "isAllowTitleLeft", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "isAllRowRequired", {
        /**
         * Set this property to true, if you want a user to answer all rows.
         */
        get: function () {
            return this.getPropertyValue("isAllRowRequired", false);
        },
        set: function (val) {
            this.setPropertyValue("isAllRowRequired", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "hasRows", {
        /**
         * Returns true, if there is at least one row.
         */
        get: function () {
            return this.rowsValue.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "columns", {
        /**
         * The list of columns. A column has a value and an optional text
         */
        get: function () {
            return this.columnsValue;
        },
        set: function (newValue) {
            this.setPropertyValue("columns", newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "rows", {
        /**
         * The list of rows. A row has a value and an optional text
         */
        get: function () {
            return this.rowsValue;
        },
        set: function (newValue) {
            this.setPropertyValue("rows", newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "visibleRows", {
        /**
         * Returns the list of rows as model objects.
         */
        get: function () {
            var result = new Array();
            var val = this.value;
            if (!val)
                val = {};
            for (var i = 0; i < this.rows.length; i++) {
                if (!this.rows[i].value)
                    continue;
                result.push(this.createMatrixRow(this.rows[i], this.name + "_" + this.rows[i].value.toString(), val[this.rows[i].value]));
            }
            if (result.length == 0) {
                result.push(this.createMatrixRow(new __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */](null), this.name, val));
            }
            this.generatedVisibleRows = result;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixModel.prototype.supportGoNextPageAutomatic = function () {
        return this.hasValuesInAllRows();
    };
    QuestionMatrixModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.hasErrorInRows()) {
            errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("requiredInAllRowsError")));
        }
    };
    QuestionMatrixModel.prototype.hasErrorInRows = function () {
        if (!this.isAllRowRequired)
            return false;
        return !this.hasValuesInAllRows();
    };
    QuestionMatrixModel.prototype.hasValuesInAllRows = function () {
        var rows = this.generatedVisibleRows;
        if (!rows)
            rows = this.visibleRows;
        if (!rows)
            return true;
        for (var i = 0; i < rows.length; i++) {
            var val = rows[i].value;
            if (!val)
                return false;
        }
        return true;
    };
    QuestionMatrixModel.prototype.createMatrixRow = function (item, fullName, value) {
        return new MatrixRowModel(item, fullName, this, value);
    };
    QuestionMatrixModel.prototype.onValueChanged = function () {
        if (this.isRowChanging ||
            !this.generatedVisibleRows ||
            this.generatedVisibleRows.length == 0)
            return;
        this.isRowChanging = true;
        var val = this.value;
        if (!val)
            val = {};
        if (this.rows.length == 0) {
            this.generatedVisibleRows[0].value = val;
        }
        else {
            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
                var row = this.generatedVisibleRows[i];
                var rowVal = val[row.name] ? val[row.name] : null;
                this.generatedVisibleRows[i].value = rowVal;
            }
        }
        this.isRowChanging = false;
    };
    Object.defineProperty(QuestionMatrixModel.prototype, "displayValue", {
        get: function () {
            var values = this.value;
            if (!values)
                return values;
            for (var key in values) {
                values[key] = __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */].getTextOrHtmlByValue(this.columns, values[key]);
            }
            return values;
        },
        enumerable: true,
        configurable: true
    });
    //IMatrixData
    QuestionMatrixModel.prototype.onMatrixRowChanged = function (row) {
        if (this.isRowChanging)
            return;
        this.isRowChanging = true;
        if (!this.hasRows) {
            this.setNewValue(row.value);
        }
        else {
            var newValue = this.value;
            if (!newValue) {
                newValue = {};
            }
            newValue[row.name] = row.value;
            this.setNewValue(newValue);
        }
        this.isRowChanging = false;
    };
    return QuestionMatrixModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.addClass("matrix", [
    {
        name: "columns:itemvalues",
        onGetValue: function (obj) {
            return __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */].getData(obj.columns);
        },
        onSetValue: function (obj, value) {
            obj.columns = value;
        }
    },
    {
        name: "rows:itemvalues",
        onGetValue: function (obj) {
            return __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */].getData(obj.rows);
        },
        onSetValue: function (obj, value) {
            obj.rows = value;
        }
    },
    "isAllRowRequired:boolean"
], function () {
    return new QuestionMatrixModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrix", function (name) {
    var q = new QuestionMatrixModel(name);
    q.rows = __WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].DefaultRows;
    q.columns = __WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].DefaultColums;
    return q;
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatrixDropdownRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDropdownModel; });





var MatrixDropdownRowModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdownRowModel, _super);
    function MatrixDropdownRowModel(name, item, data, value) {
        var _this = _super.call(this, data, value) || this;
        _this.name = name;
        _this.item = item;
        _this.buildCells();
        return _this;
    }
    Object.defineProperty(MatrixDropdownRowModel.prototype, "rowName", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModel.prototype, "text", {
        get: function () {
            return this.item.text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModel.prototype, "locText", {
        get: function () {
            return this.item.locText;
        },
        enumerable: true,
        configurable: true
    });
    return MatrixDropdownRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["b" /* MatrixDropdownRowModelBase */]));

/**
 * A Model for a matrix dropdown question. You may use a dropdown, checkbox, radiogroup, text and comment questions as a cell editors.
 */
var QuestionMatrixDropdownModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdownModel, _super);
    function QuestionMatrixDropdownModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowsValue = _this.createItemValues("rows");
        var self = _this;
        _this.registerFunctionOnPropertyValueChanged("rows", function () {
            self.generatedVisibleRows = null;
        });
        return _this;
    }
    QuestionMatrixDropdownModel.prototype.getType = function () {
        return "matrixdropdown";
    };
    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "displayValue", {
        get: function () {
            var values = this.value;
            if (!values)
                return values;
            var rows = this.visibleRows;
            for (var i = 0; i < rows.length; i++) {
                var rowValue = this.rows[i].value;
                var val = values[rowValue];
                if (!val)
                    continue;
                values[rowValue] = this.getRowDisplayValue(rows[i], val);
            }
            return values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "rows", {
        /**
         * The list of rows. A row has a value and an optional text
         */
        get: function () {
            return this.rowsValue;
        },
        set: function (val) {
            this.setPropertyValue("rows", val);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModel.prototype.generateRows = function () {
        var result = new Array();
        if (!this.rows || this.rows.length === 0)
            return result;
        var val = this.value;
        if (!val)
            val = {};
        for (var i = 0; i < this.rows.length; i++) {
            if (!this.rows[i].value)
                continue;
            result.push(this.createMatrixRow(this.rows[i], val[this.rows[i].value]));
        }
        return result;
    };
    QuestionMatrixDropdownModel.prototype.createMatrixRow = function (item, value) {
        var row = new MatrixDropdownRowModel(item.value, item, this, value);
        this.onMatrixRowCreated(row);
        return row;
    };
    return QuestionMatrixDropdownModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["a" /* QuestionMatrixDropdownModelBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("matrixdropdown", [
    {
        name: "rows:itemvalues",
        onGetValue: function (obj) {
            return __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a" /* ItemValue */].getData(obj.rows);
        },
        onSetValue: function (obj, value) {
            obj.rows = value;
        }
    }
], function () {
    return new QuestionMatrixDropdownModel("");
}, "matrixdropdownbase");
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdropdown", function (name) {
    var q = new QuestionMatrixDropdownModel(name);
    q.choices = [1, 2, 3, 4, 5];
    q.rows = __WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].DefaultColums;
    __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["a" /* QuestionMatrixDropdownModelBase */].addDefaultColumns(q);
    return q;
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatrixDynamicRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDynamicModel; });






var MatrixDynamicRowModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDynamicRowModel, _super);
    function MatrixDynamicRowModel(index, data, value) {
        var _this = _super.call(this, data, value) || this;
        _this.index = index;
        _this.buildCells();
        return _this;
    }
    Object.defineProperty(MatrixDynamicRowModel.prototype, "rowName", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    return MatrixDynamicRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["b" /* MatrixDropdownRowModelBase */]));

/**
 * A Model for a matrix dymanic question. You may use a dropdown, checkbox, radiogroup, text and comment questions as a cell editors.
 * An end-user may dynamically add/remove rows, unlike in matrix dropdown question.
 */
var QuestionMatrixDynamicModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDynamicModel, _super);
    function QuestionMatrixDynamicModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowCounter = 0;
        _this.rowCountValue = 2;
        _this.createLocalizableString("confirmDeleteText", _this);
        _this.createLocalizableString("keyDuplicationError", _this);
        _this.createLocalizableString("addRowText", _this);
        _this.createLocalizableString("removeRowText", _this);
        return _this;
    }
    QuestionMatrixDynamicModel.prototype.getType = function () {
        return "matrixdynamic";
    };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "confirmDelete", {
        /**
         * Set it to true, to show a confirmation dialog on removing a row
         * @see ConfirmDeleteText
         */
        get: function () {
            return this.getPropertyValue("confirmDelete", false);
        },
        set: function (val) {
            this.setPropertyValue("confirmDelete", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "keyName", {
        /**
         * Set it to a column name and the library shows duplication error, if there are same values in different rows in the column.
         * @see keyDuplicationError
         */
        get: function () {
            return this.getPropertyValue("keyName", "");
        },
        set: function (val) {
            this.setPropertyValue("keyName", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "rowCount", {
        /**
         * The number of rows in the matrix.
         * @see minRowCount
         * @see maxRowCount
         */
        get: function () {
            return this.rowCountValue;
        },
        set: function (val) {
            if (val < 0 || val > QuestionMatrixDynamicModel.MaxRowCount)
                return;
            var prevValue = this.rowCountValue;
            this.rowCountValue = val;
            if (this.value && this.value.length > val) {
                var qVal = this.value;
                qVal.splice(val);
                this.value = qVal;
            }
            if (this.isLoadingFromJson)
                return;
            if (this.generatedVisibleRows) {
                this.generatedVisibleRows.splice(val);
                for (var i = prevValue; i < val; i++) {
                    this.generatedVisibleRows.push(this.createMatrixRow(null));
                }
            }
            this.fireCallback(this.rowCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "minRowCount", {
        /**
         * The minimum row count. A user could not delete a row if the rowCount equals to minRowCount
         * @see rowCount
         * @see maxRowCount
         */
        get: function () {
            return this.getPropertyValue("minRowCount", 0);
        },
        set: function (val) {
            if (val < 0)
                val = 0;
            if (val == this.minRowCount || val > this.maxRowCount)
                return;
            this.setPropertyValue("minRowCount", val);
            if (this.rowCount < val)
                this.rowCount = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "maxRowCount", {
        /**
         * The maximum row count. A user could not add a row if the rowCount equals to maxRowCount
         * @see rowCount
         * @see minRowCount
         */
        get: function () {
            return this.getPropertyValue("maxRowCount", QuestionMatrixDynamicModel.MaxRowCount);
        },
        set: function (val) {
            if (val <= 0)
                return;
            if (val > QuestionMatrixDynamicModel.MaxRowCount)
                val = QuestionMatrixDynamicModel.MaxRowCount;
            if (val == this.maxRowCount || val < this.minRowCount)
                return;
            this.setPropertyValue("maxRowCount", val);
            if (this.rowCount > val)
                this.rowCount = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "canAddRow", {
        /**
         * Returns true, if a new row can be added.
         * @see maxRowCount
         * @see canRemoveRow
         * @see rowCount
         */
        get: function () {
            return this.rowCount < this.maxRowCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "canRemoveRow", {
        /**
         * Returns true, if a row can be removed.
         * @see minRowCount
         * @see canAddRow
         * @see rowCount
         */
        get: function () {
            return this.rowCount > this.minRowCount;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates and add a new row.
     */
    QuestionMatrixDynamicModel.prototype.addRow = function () {
        if (!this.canAddRow)
            return;
        var prevRowCount = this.rowCount;
        this.rowCount = this.rowCount + 1;
        if (this.data) {
            this.runCellsCondition(this.data.getAllValues());
        }
        if (this.survey) {
            if (prevRowCount + 1 == this.rowCount)
                this.survey.matrixRowAdded(this);
        }
    };
    /**
     * Removes a row by it's index. If confirmDelete is true, show a confirmation dialog
     * @param index a row index, from 0 to rowCount - 1
     * @see removeRow
     * @see confirmDelete
     */
    QuestionMatrixDynamicModel.prototype.removeRowUI = function (value) {
        if (!this.confirmDelete || confirm(this.confirmDeleteText)) {
            this.removeRow(value);
        }
    };
    /**
     * Removes a row by it's index.
     * @param index a row index, from 0 to rowCount - 1
     */
    QuestionMatrixDynamicModel.prototype.removeRow = function (index) {
        if (!this.canRemoveRow)
            return;
        if (index < 0 || index >= this.rowCount)
            return;
        if (this.survey) {
            var row = this.generatedVisibleRows
                ? this.generatedVisibleRows[index]
                : null;
            this.survey.matrixRowRemoved(this, index, row);
        }
        if (this.generatedVisibleRows && index < this.generatedVisibleRows.length) {
            this.generatedVisibleRows.splice(index, 1);
        }
        if (this.value) {
            var val = this.createNewValue(this.value);
            val.splice(index, 1);
            val = this.deleteRowValue(val, null);
            this.value = val;
        }
        this.rowCountValue--;
        this.fireCallback(this.rowCountChangedCallback);
    };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "confirmDeleteText", {
        /**
         * Use this property to change the default text showing in the confirmation delete dialog on removing a row.
         */
        get: function () {
            return this.getLocalizableStringText("confirmDeleteText", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("confirmDelete"));
        },
        set: function (val) {
            this.setLocalizableStringText("confirmDeleteText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "locConfirmDeleteText", {
        get: function () {
            return this.getLocalizableString("confirmDeleteText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "keyDuplicationError", {
        /**
         * The duplication value error text. Set it to show the text different from the default.
         * @see keyName
         */
        get: function () {
            return this.getLocalizableStringText("keyDuplicationError", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("keyDuplicationError"));
        },
        set: function (val) {
            this.setLocalizableStringText("keyDuplicationError", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "locKeyDuplicationError", {
        get: function () {
            return this.getLocalizableString("keyDuplicationError");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "addRowText", {
        /**
         * Use this property to change the default value of add row button text.
         */
        get: function () {
            return this.getLocalizableStringText("addRowText", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("addRow"));
        },
        set: function (val) {
            this.setLocalizableStringText("addRowText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "locAddRowText", {
        get: function () {
            return this.getLocalizableString("addRowText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "removeRowText", {
        /**
         * Use this property to change the default value of remove row button text.
         */
        get: function () {
            return this.getLocalizableStringText("removeRowText", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("removeRow"));
        },
        set: function (val) {
            this.setLocalizableStringText("removeRowText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "locRemoveRowText", {
        get: function () {
            return this.getLocalizableString("removeRowText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "displayValue", {
        get: function () {
            var values = this.value;
            if (!values)
                return values;
            var rows = this.visibleRows;
            for (var i = 0; i < rows.length && i < values.length; i++) {
                var val = values[i];
                if (!val)
                    continue;
                values[i] = this.getRowDisplayValue(rows[i], val);
            }
            return values;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDynamicModel.prototype.supportGoNextPageAutomatic = function () {
        return false;
    };
    QuestionMatrixDynamicModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.hasErrorInRows()) {
            errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */]
                .getString("minRowCountError")["format"](this.minRowCount)));
        }
    };
    QuestionMatrixDynamicModel.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var prevValue = _super.prototype.hasErrors.call(this, fireCallback);
        return this.isValueDuplicated() || prevValue;
    };
    QuestionMatrixDynamicModel.prototype.hasErrorInRows = function () {
        if (this.minRowCount <= 0 || !this.generatedVisibleRows)
            return false;
        var res = false;
        var setRowCount = 0;
        for (var rowIndex = 0; rowIndex < this.generatedVisibleRows.length; rowIndex++) {
            var row = this.generatedVisibleRows[rowIndex];
            if (!row.isEmpty)
                setRowCount++;
        }
        return setRowCount < this.minRowCount;
    };
    QuestionMatrixDynamicModel.prototype.isValueDuplicated = function () {
        if (!this.keyName || !this.generatedVisibleRows)
            return false;
        var column = this.getColumnName(this.keyName);
        if (!column)
            return false;
        var keyValues = [];
        var res = false;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            res =
                this.isValueDuplicatedInRow(this.generatedVisibleRows[i], column, keyValues) || res;
        }
        return res;
    };
    QuestionMatrixDynamicModel.prototype.isValueDuplicatedInRow = function (row, column, keyValues) {
        var question = row.getQuestionByColumn(column);
        if (!question || question.isEmpty())
            return false;
        var value = question.value;
        for (var i = 0; i < keyValues.length; i++) {
            if (value == keyValues[i]) {
                question.addError(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](this.keyDuplicationError));
                return true;
            }
        }
        keyValues.push(value);
        return false;
    };
    QuestionMatrixDynamicModel.prototype.generateRows = function () {
        var result = new Array();
        if (this.rowCount === 0)
            return result;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.rowCount; i++) {
            result.push(this.createMatrixRow(this.getRowValueByIndex(val, i)));
        }
        return result;
    };
    QuestionMatrixDynamicModel.prototype.createMatrixRow = function (value) {
        var row = new MatrixDynamicRowModel(this.rowCounter++, this, value);
        this.onMatrixRowCreated(row);
        return row;
    };
    QuestionMatrixDynamicModel.prototype.onBeforeValueChanged = function (val) {
        var newRowCount = val && Array.isArray(val) ? val.length : 0;
        if (newRowCount <= this.rowCount)
            return;
        this.rowCountValue = newRowCount;
        if (this.generatedVisibleRows) {
            this.generatedVisibleRows = null;
            this.generatedVisibleRows = this.visibleRows;
        }
    };
    QuestionMatrixDynamicModel.prototype.createNewValue = function (curValue) {
        var result = curValue;
        if (!result || !Array.isArray(result))
            result = [];
        var r = [];
        if (result.length > this.rowCount)
            result.splice(this.rowCount - 1);
        for (var i = result.length; i < this.rowCount; i++) {
            result.push({});
        }
        return result;
    };
    QuestionMatrixDynamicModel.prototype.deleteRowValue = function (newValue, row) {
        var isEmpty = true;
        for (var i = 0; i < newValue.length; i++) {
            if (Object.keys(newValue[i]).length > 0) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty ? null : newValue;
    };
    QuestionMatrixDynamicModel.prototype.getRowValueByIndex = function (questionValue, index) {
        return index >= 0 && index < questionValue.length
            ? questionValue[index]
            : null;
    };
    QuestionMatrixDynamicModel.prototype.getRowValueCore = function (row, questionValue, create) {
        if (create === void 0) { create = false; }
        if (!this.generatedVisibleRows)
            return {};
        return this.getRowValueByIndex(questionValue, this.generatedVisibleRows.indexOf(row));
    };
    QuestionMatrixDynamicModel.MaxRowCount = 100;
    return QuestionMatrixDynamicModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["a" /* QuestionMatrixDropdownModelBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("matrixdynamic", [
    { name: "rowCount:number", default: 2 },
    { name: "minRowCount:number", default: 0 },
    {
        name: "maxRowCount:number",
        default: QuestionMatrixDynamicModel.MaxRowCount
    },
    { name: "keyName" },
    {
        name: "keyDuplicationError",
        serializationProperty: "locKeyDuplicationError"
    },
    { name: "confirmDelete:boolean" },
    {
        name: "confirmDeleteText",
        serializationProperty: "locConfirmDeleteText"
    },
    { name: "addRowText", serializationProperty: "locAddRowText" },
    { name: "removeRowText", serializationProperty: "locRemoveRowText" }
], function () {
    return new QuestionMatrixDynamicModel("");
}, "matrixdropdownbase");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdynamic", function (name) {
    var q = new QuestionMatrixDynamicModel(name);
    q.choices = [1, 2, 3, 4, 5];
    __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["a" /* QuestionMatrixDropdownModelBase */].addDefaultColumns(q);
    return q;
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_text__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__error__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleTextItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMultipleTextModel; });








var MultipleTextItemModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MultipleTextItemModel, _super);
    function MultipleTextItemModel(name, title) {
        if (name === void 0) { name = null; }
        if (title === void 0) { title = null; }
        var _this = _super.call(this) || this;
        _this.validators = new Array();
        _this.editorValue = _this.createEditor(name);
        _this.editor.titleLocation = "left";
        if (title) {
            _this.title = title;
        }
        return _this;
    }
    MultipleTextItemModel.prototype.getType = function () {
        return "multipletextitem";
    };
    Object.defineProperty(MultipleTextItemModel.prototype, "id", {
        get: function () {
            return this.editor.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "name", {
        /**
         * The item name.
         */
        get: function () {
            return this.editor.name;
        },
        set: function (val) {
            this.editor.name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "editor", {
        get: function () {
            return this.editorValue;
        },
        enumerable: true,
        configurable: true
    });
    MultipleTextItemModel.prototype.createEditor = function (name) {
        return new __WEBPACK_IMPORTED_MODULE_4__question_text__["a" /* QuestionTextModel */](name);
    };
    MultipleTextItemModel.prototype.setData = function (data) {
        this.data = data;
        if (data) {
            this.editor.setSurveyImpl(this);
        }
    };
    Object.defineProperty(MultipleTextItemModel.prototype, "isRequired", {
        /**
         * Set this property to true, to make the item a required. If a user doesn't fill the item then a validation error will be generated.
         */
        get: function () {
            return this.editor.isRequired;
        },
        set: function (val) {
            this.editor.isRequired = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "inputType", {
        /**
         * Use this property to change the default input type.
         */
        get: function () {
            return this.editor.inputType;
        },
        set: function (val) {
            this.editor.inputType = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "title", {
        /**
         * Item title. If it is empty, the item name is rendered as title. This property supports markdown.
         * @see name
         */
        get: function () {
            return this.editor.title;
        },
        set: function (val) {
            this.editor.title = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "locTitle", {
        get: function () {
            return this.editor.locTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "fullTitle", {
        /**
         * Returns the text or html for rendering the title.
         */
        get: function () {
            return this.editor.fullTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "placeHolder", {
        /**
         * The input place holder.
         */
        get: function () {
            return this.editor.placeHolder;
        },
        set: function (val) {
            this.editor.placeHolder = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "locPlaceHolder", {
        get: function () {
            return this.editor.locPlaceHolder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "value", {
        /**
         * The item value.
         */
        get: function () {
            return this.data ? this.data.getMultipleTextValue(this.name) : null;
        },
        set: function (value) {
            if (this.data != null) {
                this.data.setMultipleTextValue(this.name, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MultipleTextItemModel.prototype.onValueChanged = function (newValue) {
        if (this.valueChangedCallback)
            this.valueChangedCallback(newValue);
    };
    //ISurveyImpl
    MultipleTextItemModel.prototype.geSurveyData = function () {
        return this;
    };
    MultipleTextItemModel.prototype.getSurvey = function () {
        return this.data ? this.data.getSurvey() : null;
    };
    MultipleTextItemModel.prototype.getTextProcessor = function () {
        return this.data ? this.data.getTextProcessor() : null;
    };
    //ISurveyData
    MultipleTextItemModel.prototype.getValue = function (name) {
        if (!this.data)
            return null;
        return this.data.getMultipleTextValue(name);
    };
    MultipleTextItemModel.prototype.setValue = function (name, value) {
        if (this.data) {
            this.data.setMultipleTextValue(name, value);
        }
    };
    MultipleTextItemModel.prototype.getComment = function (name) {
        return null;
    };
    MultipleTextItemModel.prototype.setComment = function (name, newValue) { };
    MultipleTextItemModel.prototype.getAllValues = function () {
        if (this.data)
            return this.data.getAllValues();
        return this.value;
    };
    //IValidatorOwner
    MultipleTextItemModel.prototype.getValidatorTitle = function () {
        return this.title;
    };
    Object.defineProperty(MultipleTextItemModel.prototype, "validatedValue", {
        get: function () {
            return this.value;
        },
        set: function (val) {
            this.value = val;
        },
        enumerable: true,
        configurable: true
    });
    return MultipleTextItemModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

/**
 * A Model for a multiple text question.
 */
var QuestionMultipleTextModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMultipleTextModel, _super);
    function QuestionMultipleTextModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.itemsValues = new Array();
        _this.isMultipleItemValueChanging = false;
        var self = _this;
        _this.itemsValues = _this.createNewArray("items", function (item) {
            item.setData(self);
        });
        _this.registerFunctionOnPropertyValueChanged("items", function () {
            self.fireCallback(self.colCountChangedCallback);
        });
        _this.registerFunctionOnPropertyValueChanged("colCount", function () {
            self.fireCallback(self.colCountChangedCallback);
        });
        return _this;
    }
    QuestionMultipleTextModel.prototype.getType = function () {
        return "multipletext";
    };
    QuestionMultipleTextModel.prototype.setSurveyImpl = function (value) {
        _super.prototype.setSurveyImpl.call(this, value);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].setData(this);
        }
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "isAllowTitleLeft", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMultipleTextModel.prototype.endLoadingFromJson = function () {
        _super.prototype.endLoadingFromJson.call(this);
        this.fireCallback(this.colCountChangedCallback);
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "items", {
        /**
         * The list of input items.
         */
        get: function () {
            return this.itemsValues;
        },
        set: function (val) {
            this.setPropertyValue("items", val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a new text item.
     * @param name a item name
     * @param title a item title (optional)
     */
    QuestionMultipleTextModel.prototype.addItem = function (name, title) {
        if (title === void 0) { title = null; }
        var item = this.createTextItem(name, title);
        this.items.push(item);
        return item;
    };
    QuestionMultipleTextModel.prototype.onLocaleChanged = function () {
        _super.prototype.onLocaleChanged.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].onLocaleChanged();
        }
    };
    QuestionMultipleTextModel.prototype.supportGoNextPageAutomatic = function () {
        for (var i = 0; i < this.items.length; i++) {
            if (!this.items[i].value)
                return false;
        }
        return true;
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "colCount", {
        /**
         * The number of columns. Items are rendred in one line if the value is 0.
         */
        get: function () {
            return this.getPropertyValue("colCount", 1);
        },
        set: function (val) {
            if (val < 1 || val > 4)
                return;
            this.setPropertyValue("colCount", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMultipleTextModel.prototype, "itemSize", {
        /**
         * The default text input size.
         */
        get: function () {
            return this.getPropertyValue("itemSize", 25);
        },
        set: function (val) {
            this.setPropertyValue("itemSize", val);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the list of rendered rows.
     */
    QuestionMultipleTextModel.prototype.getRows = function () {
        var colCount = this.colCount;
        var items = this.items;
        var rows = [];
        var index = 0;
        for (var i = 0; i < items.length; i++) {
            if (index == 0) {
                rows.push([]);
            }
            rows[rows.length - 1].push(items[i]);
            index++;
            if (index >= colCount) {
                index = 0;
            }
        }
        return rows;
    };
    QuestionMultipleTextModel.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        this.onItemValueChanged();
    };
    QuestionMultipleTextModel.prototype.createTextItem = function (name, title) {
        return new MultipleTextItemModel(name, title);
    };
    QuestionMultipleTextModel.prototype.onItemValueChanged = function () {
        if (this.isMultipleItemValueChanging)
            return;
        for (var i = 0; i < this.items.length; i++) {
            var itemValue = null;
            if (this.value && this.items[i].name in this.value) {
                itemValue = this.value[this.items[i].name];
            }
            this.items[i].onValueChanged(itemValue);
        }
    };
    QuestionMultipleTextModel.prototype.runValidators = function () {
        var error = _super.prototype.runValidators.call(this);
        if (error != null)
            return error;
        for (var i = 0; i < this.items.length; i++) {
            error = new __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* ValidatorRunner */]().run(this.items[i]);
            if (error != null)
                return error;
        }
        return null;
    };
    QuestionMultipleTextModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.isRequired && !item.value) {
                errors.push(new __WEBPACK_IMPORTED_MODULE_7__error__["c" /* AnswerRequiredError */]());
            }
        }
    };
    //IMultipleTextData
    QuestionMultipleTextModel.prototype.getMultipleTextValue = function (name) {
        if (!this.value)
            return null;
        return this.value[name];
    };
    QuestionMultipleTextModel.prototype.setMultipleTextValue = function (name, value) {
        this.isMultipleItemValueChanging = true;
        var newValue = this.value;
        if (!newValue) {
            newValue = {};
        }
        newValue[name] = value;
        this.setNewValue(newValue);
        this.isMultipleItemValueChanging = false;
    };
    QuestionMultipleTextModel.prototype.getSurvey = function () {
        return this.survey;
    };
    QuestionMultipleTextModel.prototype.getTextProcessor = function () {
        return this.textProcessor;
    };
    QuestionMultipleTextModel.prototype.getAllValues = function () {
        return this.data ? this.data.getAllValues() : null;
    };
    QuestionMultipleTextModel.prototype.getIsRequiredText = function () {
        return this.survey ? this.survey.requiredText : "";
    };
    return QuestionMultipleTextModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_5__jsonobject__["b" /* JsonObject */].metaData.addClass("multipletextitem", [
    "name",
    "isRequired:boolean",
    { name: "placeHolder", serializationProperty: "locPlaceHolder" },
    {
        name: "inputType",
        default: "text",
        choices: [
            "color",
            "date",
            "datetime",
            "datetime-local",
            "email",
            "month",
            "number",
            "password",
            "range",
            "tel",
            "text",
            "time",
            "url",
            "week"
        ]
    },
    { name: "title", serializationProperty: "locTitle" },
    {
        name: "validators:validators",
        baseClassName: "surveyvalidator",
        classNamePart: "validator"
    }
], function () {
    return new MultipleTextItemModel("");
});
__WEBPACK_IMPORTED_MODULE_5__jsonobject__["b" /* JsonObject */].metaData.addClass("multipletext", [
    { name: "!items:textitems", className: "multipletextitem" },
    { name: "itemSize:number", default: 25 },
    { name: "colCount:number", default: 1, choices: [1, 2, 3, 4] }
], function () {
    return new QuestionMultipleTextModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("multipletext", function (name) {
    var q = new QuestionMultipleTextModel(name);
    q.addItem("text1");
    q.addItem("text2");
    return q;
});


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyStrings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textPreProcessor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conditionProcessValue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__panel__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionPanelDynamicItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPanelDynamicModel; });










var QuestionPanelDynamicItem = /** @class */ (function () {
    function QuestionPanelDynamicItem(data, panel) {
        this.data = data;
        this.panelValue = panel;
        var self = this;
        this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_3__textPreProcessor__["a" /* TextPreProcessor */]();
        this.textPreProcessor.onProcess = function (textValue) {
            self.getProcessedTextValue(textValue);
        };
        this.panel.setSurveyImpl(this);
        this.panel.updateCustomWidgets();
    }
    Object.defineProperty(QuestionPanelDynamicItem.prototype, "panel", {
        get: function () {
            return this.panelValue;
        },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicItem.prototype.runCondition = function (values) {
        this.panel.runCondition(values);
    };
    QuestionPanelDynamicItem.prototype.getValue = function (name) {
        var values = this.data.getPanelItemData(this);
        return values[name];
    };
    QuestionPanelDynamicItem.prototype.setValue = function (name, newValue) {
        this.data.setPanelItemData(this, name, newValue);
    };
    QuestionPanelDynamicItem.prototype.getComment = function (name) {
        var result = this.getValue(name + __WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */].commentPrefix);
        return result ? result : "";
    };
    QuestionPanelDynamicItem.prototype.setComment = function (name, newValue) {
        this.setValue(name + __WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */].commentPrefix, newValue);
    };
    QuestionPanelDynamicItem.prototype.onSurveyValueChanged = function () {
        var questions = this.panel.questions;
        var values = this.data.getPanelItemData(this);
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            q.onSurveyValueChanged(values[q.getValueName()]);
        }
    };
    QuestionPanelDynamicItem.prototype.setVisibleIndex = function (index, showIndex) {
        return __WEBPACK_IMPORTED_MODULE_1__base__["c" /* SurveyElement */].setVisibleIndex(this.panel.questions, index, showIndex);
    };
    QuestionPanelDynamicItem.prototype.getAllValues = function () {
        return this.data.getPanelItemData(this);
    };
    QuestionPanelDynamicItem.prototype.geSurveyData = function () {
        return this;
    };
    QuestionPanelDynamicItem.prototype.getSurvey = function () {
        return this.data ? this.data.getSurvey() : null;
    };
    QuestionPanelDynamicItem.prototype.getTextProcessor = function () {
        return this;
    };
    //ITextProcessor
    QuestionPanelDynamicItem.prototype.getProcessedTextValue = function (textValue) {
        if (textValue.name == QuestionPanelDynamicItem.IndexVariableName) {
            textValue.isExists = true;
            textValue.value = this.data.getItemIndex(this) + 1;
            return;
        }
        var firstName = new __WEBPACK_IMPORTED_MODULE_4__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(textValue.name);
        textValue.isExists = firstName == QuestionPanelDynamicItem.ItemVariableName;
        if (!textValue)
            return;
        //name should start with the panel
        textValue.name = textValue.name.replace(QuestionPanelDynamicItem.ItemVariableName + ".", "");
        var firstName = new __WEBPACK_IMPORTED_MODULE_4__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(textValue.name);
        var question = this.panel.getQuestionByValueName(firstName);
        var values = {};
        if (question) {
            values[firstName] = textValue.returnDisplayValue
                ? question.displayValue
                : question.value;
        }
        else {
            var allValues = this.getAllValues();
            if (allValues) {
                values[firstName] = allValues[firstName];
            }
        }
        textValue.value = new __WEBPACK_IMPORTED_MODULE_4__conditionProcessValue__["a" /* ProcessValue */]().getValue(textValue.name, values);
    };
    QuestionPanelDynamicItem.prototype.processText = function (text, returnDisplayValue) {
        text = this.textPreProcessor.process(text, returnDisplayValue);
        var survey = this.getSurvey();
        return survey ? survey.processText(text, returnDisplayValue) : text;
    };
    QuestionPanelDynamicItem.prototype.processTextEx = function (text) {
        text = this.processText(text, true);
        var hasAllValuesOnLastRun = this.textPreProcessor.hasAllValuesOnLastRun;
        var res = { hasAllValuesOnLastRun: true, text: text };
        if (this.getSurvey()) {
            res = this.getSurvey().processTextEx(text);
        }
        res.hasAllValuesOnLastRun =
            res.hasAllValuesOnLastRun && hasAllValuesOnLastRun;
        return res;
    };
    QuestionPanelDynamicItem.prototype.onAnyValueChanged = function (name) {
        this.panel.onAnyValueChanged(name);
        this.panel.onAnyValueChanged(QuestionPanelDynamicItem.ItemVariableName);
    };
    QuestionPanelDynamicItem.ItemVariableName = "panel";
    QuestionPanelDynamicItem.IndexVariableName = "panelIndex";
    return QuestionPanelDynamicItem;
}());

/**
 * A Model for a panel dymanic question. You setup the template panel, but adding elements (any question or a panel) and assign a text to it's title, and this panel will be used as a template on creating dynamic panels. The number of panels is defined by panelCount property.
 * An end-user may dynamically add/remove panels, unless you forbidden this.
 */
var QuestionPanelDynamicModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionPanelDynamicModel, _super);
    function QuestionPanelDynamicModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.itemsValue = new Array();
        _this.loadingPanelCount = 0;
        _this.currentIndexValue = -1;
        _this.templateValue = _this.createAndSetupNewPanelObject();
        _this.template.renderWidth = "100%";
        _this.template.selectedElementInDesign = _this;
        var self = _this;
        _this.oldTemplateRowsChangedCallback = _this.template.rowsChangedCallback;
        _this.template.rowsChangedCallback = function () {
            self.templateOnRowsChanged();
            if (self.oldTemplateRowsChangedCallback)
                self.oldTemplateRowsChangedCallback();
        };
        _this.createLocalizableString("confirmDeleteText", _this);
        _this.createLocalizableString("keyDuplicationError", _this);
        _this.createLocalizableString("panelAddText", _this);
        _this.createLocalizableString("panelRemoveText", _this);
        _this.createLocalizableString("panelPrevText", _this);
        _this.createLocalizableString("panelNextText", _this);
        return _this;
    }
    QuestionPanelDynamicModel.prototype.setSurveyImpl = function (value) {
        _super.prototype.setSurveyImpl.call(this, value);
        this.template.setSurveyImpl(this.surveyImpl);
    };
    QuestionPanelDynamicModel.prototype.templateOnRowsChanged = function () {
        if (this.isLoadingFromJson)
            return;
        this.rebuildPanels();
    };
    QuestionPanelDynamicModel.prototype.getType = function () {
        return "paneldynamic";
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isAllowTitleLeft", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.removeElement = function (element) {
        return this.template.removeElement(element);
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "template", {
        /**
         * The template Panel. This panel is used as a template on creatign dynamic panels
         * @see  templateElements
         * @see templateTitle
         * @see panelCount
         */
        get: function () {
            return this.templateValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "templateElements", {
        /**
         * The template Panel elements, questions and panels.
         * @see  templateElements
         * @see template
         * @see panelCount
         */
        get: function () {
            return this.template.elements;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "templateTitle", {
        /**
         * The template Panel title property.
         * @see  templateElements
         * @see template
         * @see panelCount
         */
        get: function () {
            return this.template.title;
        },
        set: function (newValue) {
            this.template.title = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locTemplateTitle", {
        get: function () {
            return this.template.locTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "templateDescription", {
        /**
         * The template Panel description property.
         * @see  templateElements
         * @see template
         * @see panelCount
         * @see templateTitle
         */
        get: function () {
            return this.template.description;
        },
        set: function (newValue) {
            this.template.description = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locTemplateDescription", {
        get: function () {
            return this.template.locDescription;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "items", {
        get: function () {
            return this.itemsValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panels", {
        /**
         * The array of dynamic panels created based on panel template
         * @see template
         * @see panelCount
         */
        get: function () {
            var res = [];
            for (var i = 0; i < this.items.length; i++) {
                res.push(this.items[i].panel);
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "currentIndex", {
        /**
         * The index of current active dynamical panel when the renderMode is not "list". If there is no dymamic panel (panelCount = 0) or renderMode equals "list" it returns -1, otherwise it returns a value from 0 to panelCount - 1.
         * @see currentPanel
         * @see panels
         * @see panelCount
         * @see renderMode
         */
        get: function () {
            if (this.isRenderModeList)
                return -1;
            if (this.currentIndexValue < 0 && this.panelCount > 0) {
                this.currentIndexValue = 0;
            }
            if (this.currentIndexValue >= this.panelCount) {
                this.currentIndexValue = this.panelCount - 1;
            }
            return this.currentIndexValue;
        },
        set: function (val) {
            if (val >= this.panelCount)
                val = this.panelCount - 1;
            this.currentIndexValue = val;
            this.fireCallback(this.currentIndexChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "currentPanel", {
        /**
         * The current active dynamical panel when the renderMode is not "list". If there is no dymamic panel (panelCount = 0) or renderMode equals "list" it returns null.
         * @see currenIndex
         * @see panels
         * @see panelCount
         * @see renderMode
         */
        get: function () {
            var index = this.currentIndex;
            if (index < 0 || index >= this.panels.length)
                return null;
            return this.panels[index];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "confirmDelete", {
        /**
         * Set it to true, to show a confirmation dialog on removing a panel
         * @see ConfirmDeleteText
         */
        get: function () {
            return this.getPropertyValue("confirmDelete", false);
        },
        set: function (val) {
            this.setPropertyValue("confirmDelete", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "keyName", {
        /**
         * Set it to a question name used in the template panel and the library shows duplication error, if there are same values in different panels of this question.
         * @see keyDuplicationError
         */
        get: function () {
            return this.getPropertyValue("keyName", "");
        },
        set: function (val) {
            this.setPropertyValue("keyName", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "confirmDeleteText", {
        /**
         * Use this property to change the default text showing in the confirmation delete dialog on removing a panel.
         */
        get: function () {
            return this.getLocalizableStringText("confirmDeleteText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("confirmDelete"));
        },
        set: function (val) {
            this.setLocalizableStringText("confirmDeleteText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locConfirmDeleteText", {
        get: function () {
            return this.getLocalizableString("confirmDeleteText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "keyDuplicationError", {
        /**
         * The duplication value error text. Set it to show the text different from the default.
         * @see keyName
         */
        get: function () {
            return this.getLocalizableStringText("keyDuplicationError", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("keyDuplicationError"));
        },
        set: function (val) {
            this.setLocalizableStringText("keyDuplicationError", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locKeyDuplicationError", {
        get: function () {
            return this.getLocalizableString("keyDuplicationError");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelPrevText", {
        /**
         * Use this property to change the default previous button text. Previous button shows the previous panel, change the currentPanel, when the renderMode doesn't equal to "list".
         * @see currentPanel
         * @see currentIndex
         * @see renderMode
         */
        get: function () {
            return this.getLocalizableStringText("panelPrevText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("pagePrevText"));
        },
        set: function (val) {
            this.setLocalizableStringText("panelPrevText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locPanelPrevText", {
        get: function () {
            return this.getLocalizableString("panelPrevText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelNextText", {
        /**
         * Use this property to change the default next button text. Next button shows the next panel, change the currentPanel, when the renderMode doesn't equal to "list".
         * @see currentPanel
         * @see currentIndex
         * @see renderMode
         */
        get: function () {
            return this.getLocalizableStringText("panelNextText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("pageNextText"));
        },
        set: function (val) {
            this.setLocalizableStringText("panelNextText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locPanelNextText", {
        get: function () {
            return this.getLocalizableString("panelNextText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelAddText", {
        /**
         * Use this property to change the default value of add panel button text.
         */
        get: function () {
            return this.getLocalizableStringText("panelAddText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("addPanel"));
        },
        set: function (value) {
            this.setLocalizableStringText("panelAddText", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locPanelAddText", {
        get: function () {
            return this.getLocalizableString("panelAddText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelRemoveText", {
        /**
         * Use this property to change the default value of remove panel button text.
         */
        get: function () {
            return this.getLocalizableStringText("panelRemoveText", __WEBPACK_IMPORTED_MODULE_2__surveyStrings__["a" /* surveyLocalization */].getString("removePanel"));
        },
        set: function (val) {
            this.setLocalizableStringText("panelRemoveText", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "locPanelRemoveText", {
        get: function () {
            return this.getLocalizableString("panelRemoveText");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isProgressTopShowing", {
        /**
         * Returns true when the renderMode equals to "progressTop" or "progressTopBottom"
         */
        get: function () {
            return (this.renderMode == "progressTop" || this.renderMode == "progressTopBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isProgressBottomShowing", {
        /**
         * Returns true when the renderMode equals to "progressBottom" or "progressTopBottom"
         */
        get: function () {
            return (this.renderMode == "progressBottom" ||
                this.renderMode == "progressTopBottom");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isPrevButtonShowing", {
        /**
         * Returns true when currentIndex is more than 0.
         * @see currenIndex
         * @see currenPanel
         */
        get: function () {
            return this.currentIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isNextButtonShowing", {
        /**
         * Returns true when currentIndex is more than or equal 0 and less then panelCount - 1.
         * @see currenIndex
         * @see currenPanel
         * @see panelCount
         */
        get: function () {
            return this.currentIndex >= 0 && this.currentIndex < this.panelCount - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isRangeShowing", {
        /**
         * Returns true when showRangeInProgress equals to true, renderMode doesn't equal to "list" and panelCount is >= 2.
         */
        get: function () {
            return (this.showRangeInProgress &&
                (this.currentIndex >= 0 && this.panelCount > 1));
        },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.getElementsInDesign = function (includeHidden) {
        if (includeHidden === void 0) { includeHidden = false; }
        return includeHidden ? [this.template] : this.templateElements;
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "panelCount", {
        /**
         * Use this property to get/set the number of dynamic panels.
         * @see template
         * @see minPanelCount
         * @see maxPanelCount
         * @see addPanel
         * @see removePanel
         * @see removePanelUI
         */
        get: function () {
            return this.isLoadingFromJson || this.isDesignMode
                ? this.loadingPanelCount
                : this.items.length;
        },
        set: function (val) {
            if (val < 0)
                return;
            if (this.isLoadingFromJson || this.isDesignMode) {
                this.loadingPanelCount = val;
                return;
            }
            if (val == this.items.length || this.isDesignMode)
                return;
            for (var i = this.panelCount; i < val; i++) {
                this.items.push(this.createNewItem());
            }
            if (val < this.panelCount)
                this.items.splice(val, this.panelCount - val);
            this.setValueBasedOnPanelCount();
            this.reRunCondition();
            this.fireCallback(this.panelCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.setValueBasedOnPanelCount = function () {
        var value = this.value;
        if (!value || !Array.isArray(value))
            value = [];
        if (value.length == this.panelCount)
            return;
        for (var i = value.length; i < this.panelCount; i++)
            value.push({});
        if (value.length > this.panelCount)
            value.splice(this.panelCount, value.length - this.panelCount);
        this.value = value;
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "minPanelCount", {
        /**
         * The minimum panel count. A user could not delete a panel if the panelCount equals to minPanelCount
         * @see panelCount
         * @see maxPanelCount
         */
        get: function () {
            return this.getPropertyValue("minPanelCount", 0);
        },
        set: function (val) {
            if (val < 0)
                val = 0;
            if (val == this.minPanelCount || val > this.maxPanelCount)
                return;
            this.setPropertyValue("minPanelCount", val);
            if (this.panelCount < val)
                this.panelCount = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "maxPanelCount", {
        /**
         * The maximum panel count. A user could not add a panel if the panelCount equals to maxPanelCount
         * @see panelCount
         * @see minPanelCount
         */
        get: function () {
            return this.getPropertyValue("maxPanelCount", QuestionPanelDynamicModel.MaxPanelCount);
        },
        set: function (val) {
            if (val <= 0)
                return;
            if (val > QuestionPanelDynamicModel.MaxPanelCount)
                val = QuestionPanelDynamicModel.MaxPanelCount;
            if (val == this.maxPanelCount || val < this.minPanelCount)
                return;
            this.setPropertyValue("maxPanelCount", val);
            if (this.panelCount > val)
                this.panelCount = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "allowAddPanel", {
        /**
         * Set this property to false to hide the 'Add New' button
         * @see allowRemovePanel
         */
        get: function () {
            return this.getPropertyValue("allowAddPanel", true);
        },
        set: function (val) {
            this.setPropertyValue("allowAddPanel", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "allowRemovePanel", {
        /**
         * Set this property to false to hide the 'Remove' button
         * @see allowAddPanel
         */
        get: function () {
            return this.getPropertyValue("allowRemovePanel", true);
        },
        set: function (val) {
            this.setPropertyValue("allowRemovePanel", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "templateTitleLocation", {
        /**
         * Set this property different from "default" to set the specific question title location for the template questions.
         * @see SurveyModel.questionTitleLocation
         * @see PanelModelBase.questionTitleLocation
         */
        get: function () {
            return this.getPropertyValue("templateTitleLocation", "default");
        },
        set: function (value) {
            this.setPropertyValue("templateTitleLocation", value.toLowerCase());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "showQuestionNumbers", {
        /**
         * Use this property to show/hide the numbers in titles in questions inside a dynamic panel.
         * By default the value is "off". You may set it to "onPanel" and the first question inside a dynamic panel will start with 1 or "onSurvey" to include nested questions in dymamic panels into global survey question numbering.
         */
        get: function () {
            return this.getPropertyValue("showQuestionNumbers", "off");
        },
        set: function (val) {
            this.setPropertyValue("showQuestionNumbers", val);
            if (!this.isLoadingFromJson && this.survey) {
                this.survey.questionVisibilityChanged(this, this.visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "showRangeInProgress", {
        /**
         * Shows the range from 1 to panelCount when renderMode doesn't equal to "list". Set to false to hide this element.
         * @see panelCount
         * @see renderMode
         */
        get: function () {
            return this.getPropertyValue("showRangeInProgress", true);
        },
        set: function (val) {
            this.setPropertyValue("showRangeInProgress", val);
            this.fireCallback(this.currentIndexChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "renderMode", {
        /**
         * By default the property equals to "list" and all dynamic panels are rendered one by one on the page. You may change it to: "progressTop", "progressBottom" or "progressTopBottom" to render only one dynamic panel at once. The progress and navigation elements can be rendred on top, bottom or both.
         */
        get: function () {
            return this.getPropertyValue("renderMode", "list");
        },
        set: function (val) {
            this.setPropertyValue("renderMode", val);
            this.fireCallback(this.renderModeChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "isRenderModeList", {
        /**
         * Returns true when renderMode equals to "list".
         * @see renderMode
         */
        get: function () {
            return this.renderMode == "list";
        },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.setVisibleIndex = function (value) {
        var startIndex = this.showQuestionNumbers == "onSurvey" ? value : 0;
        for (var i = 0; i < this.items.length; i++) {
            var counter = this.items[i].setVisibleIndex(startIndex, this.showQuestionNumbers != "off");
            if (this.showQuestionNumbers == "onSurvey") {
                startIndex += counter;
            }
        }
        _super.prototype.setVisibleIndex.call(this, this.showQuestionNumbers != "onSurvey" ? value : -1);
        return this.showQuestionNumbers != "onSurvey" ? 1 : startIndex - value;
    };
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "canAddPanel", {
        /**
         * Returns true when an end user may add a new panel. The question is not read only and panelCount less than maxPanelCount
         * @see isReadOnly
         * @see panelCount
         * @see maxPanelCount
         */
        get: function () {
            if (this.survey && this.survey.isDesignMode)
                return false;
            return (this.allowAddPanel &&
                !this.isReadOnly &&
                this.panelCount < this.maxPanelCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionPanelDynamicModel.prototype, "canRemovePanel", {
        /**
         * Returns true when an end user may remove a panel. The question is not read only and panelCount is more than minPanelCount
         * @see isReadOnly
         * @see panelCount
         * @see minPanelCount
         */
        get: function () {
            if (this.survey && this.survey.isDesignMode)
                return false;
            return (this.allowRemovePanel &&
                !this.isReadOnly &&
                this.panelCount > this.minPanelCount);
        },
        enumerable: true,
        configurable: true
    });
    QuestionPanelDynamicModel.prototype.rebuildPanels = function () {
        var items = new Array();
        if (this.isDesignMode) {
            items.push(new QuestionPanelDynamicItem(this, this.template));
            if (this.oldTemplateRowsChangedCallback) {
                this.oldTemplateRowsChangedCallback();
            }
            this.rebuildTemplateRowsInElements(this.template.elements);
        }
        else {
            for (var i = 0; i < this.panelCount; i++) {
                items.push(this.createNewItem());
            }
        }
        this.itemsValue = items;
        this.reRunCondition();
        this.fireCallback(this.panelCountChangedCallback);
    };
    QuestionPanelDynamicModel.prototype.rebuildTemplateRowsInElements = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            if (!elements[i].isPanel)
                continue;
            var panel = elements[i];
            if (panel.rowsChangedCallback)
                panel.rowsChangedCallback();
            this.rebuildTemplateRowsInElements(panel.elements);
        }
    };
    /**
     * Add a new dynamic panel based on the template Panel. It checks if canAddPanel returns true and then calls addPanel method.
     * @see template
     * @see panelCount
     * @see panels
     * @see canAddPanel
     */
    QuestionPanelDynamicModel.prototype.addPanelUI = function () {
        if (!this.canAddPanel)
            return null;
        return this.addPanel();
    };
    /**
     * Add a new dynamic panel based on the template Panel.
     * @see template
     * @see panelCount
     * @see panels
     */
    QuestionPanelDynamicModel.prototype.addPanel = function () {
        this.panelCount++;
        if (!this.isRenderModeList) {
            this.currentIndex = this.panelCount - 1;
        }
        if (this.survey)
            this.survey.dynamicPanelAdded(this);
        return this.items[this.panelCount - 1].panel;
    };
    /**
     * Call removePanel function. Do nothing is canRemovePanel returns false. If confirmDelete set to true, it shows the confirmation dialog first.
     * @param value a panel or panel index
     * @see removePanel
     * @see confirmDelete
     * @see confirmDeleteText
     * @see canRemovePanel
     *
     */
    QuestionPanelDynamicModel.prototype.removePanelUI = function (value) {
        if (!this.canRemovePanel)
            return;
        if (!this.confirmDelete || confirm(this.confirmDeleteText)) {
            this.removePanel(value);
        }
    };
    /**
     * Removes a dynamic panel from the panels array.
     * @param value a panel or panel index
     * @see panels
     * @see template
     */
    QuestionPanelDynamicModel.prototype.removePanel = function (value) {
        var index = this.getPanelIndex(value);
        if (index < 0 || index >= this.panelCount)
            return;
        this.items.splice(index, 1);
        var value = this.value;
        if (!value || !Array.isArray(value) || index >= value.length)
            return;
        value.splice(index, 1);
        QuestionPanelDynamicModel.isPanelRemoving = true;
        this.value = value;
        QuestionPanelDynamicModel.isPanelRemoving = false;
        this.fireCallback(this.panelCountChangedCallback);
        if (this.survey)
            this.survey.dynamicPanelRemoved(this, index);
    };
    QuestionPanelDynamicModel.prototype.getPanelIndex = function (val) {
        if (!isNaN(parseFloat(val)) && isFinite(val))
            return val;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i] === val || this.items[i].panel === val)
                return i;
        }
        return -1;
    };
    QuestionPanelDynamicModel.prototype.onSurveyLoad = function () {
        if (this.loadingPanelCount > 0) {
            this.panelCount = this.loadingPanelCount;
        }
        if (this.isDesignMode) {
            this.rebuildPanels();
        }
        _super.prototype.onSurveyLoad.call(this);
    };
    QuestionPanelDynamicModel.prototype.runCondition = function (values) {
        _super.prototype.runCondition.call(this, values);
        this.runPanelsCondition(values);
    };
    QuestionPanelDynamicModel.prototype.reRunCondition = function () {
        if (!this.data)
            return;
        this.runCondition(this.data.getAllValues());
    };
    QuestionPanelDynamicModel.prototype.runPanelsCondition = function (values) {
        var newValues = {};
        if (values && values instanceof Object) {
            newValues = JSON.parse(JSON.stringify(values));
        }
        for (var i = 0; i < this.items.length; i++) {
            newValues[QuestionPanelDynamicItem.ItemVariableName] = this.getPanelItemData(this.items[i]);
            newValues[QuestionPanelDynamicItem.IndexVariableName] = i;
            this.items[i].runCondition(newValues);
        }
    };
    QuestionPanelDynamicModel.prototype.onAnyValueChanged = function (name) {
        _super.prototype.onAnyValueChanged.call(this, name);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].onAnyValueChanged(name);
        }
    };
    QuestionPanelDynamicModel.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var errosInPanels = this.hasErrorInPanels(fireCallback);
        return _super.prototype.hasErrors.call(this, fireCallback) || errosInPanels;
    };
    QuestionPanelDynamicModel.prototype.clearValueIfInvisible = function () {
        _super.prototype.clearValueIfInvisible.call(this);
        for (var i = 0; i < this.panels.length; i++) {
            var questions = this.panels[i].questions;
            for (var j = 0; j < questions.length; j++) {
                questions[j].clearValueIfInvisible();
            }
        }
    };
    QuestionPanelDynamicModel.prototype.getAllErrors = function () {
        var result = _super.prototype.getAllErrors.call(this);
        for (var i = 0; i < this.panels.length; i++) {
            var questions = this.panels[i].questions;
            for (var j = 0; j < questions.length; j++) {
                var errors = questions[j].getAllErrors();
                if (errors && errors.length > 0) {
                    result = result.concat(errors);
                }
            }
        }
        return result;
    };
    QuestionPanelDynamicModel.prototype.hasErrorInPanels = function (fireCallback) {
        var res = false;
        var panels = this.panels;
        var keyValues = [];
        for (var i = 0; i < panels.length; i++) {
            var pnlError = panels[i].hasErrors(fireCallback);
            pnlError = this.isValueDuplicated(panels[i], keyValues) || pnlError;
            if (!this.isRenderModeList && pnlError && !res) {
                this.currentIndex = i;
            }
            res = pnlError || res;
        }
        return res;
    };
    QuestionPanelDynamicModel.prototype.isValueDuplicated = function (panel, keyValues) {
        if (!this.keyName)
            return false;
        var question = panel.getQuestionByValueName(this.keyName);
        if (!question || question.isEmpty())
            return false;
        var value = question.value;
        for (var i = 0; i < keyValues.length; i++) {
            if (value == keyValues[i]) {
                question.addError(new __WEBPACK_IMPORTED_MODULE_9__error__["a" /* CustomError */](this.keyDuplicationError));
                return true;
            }
        }
        keyValues.push(value);
        return false;
    };
    QuestionPanelDynamicModel.prototype.createNewItem = function () {
        return new QuestionPanelDynamicItem(this, this.createNewPanel());
    };
    QuestionPanelDynamicModel.prototype.createNewPanel = function () {
        var panel = this.createAndSetupNewPanelObject();
        var jObj = new __WEBPACK_IMPORTED_MODULE_7__jsonobject__["b" /* JsonObject */]();
        var json = jObj.toJsonObject(this.template);
        jObj.toObject(json, panel);
        panel.renderWidth = "100%";
        return panel;
    };
    QuestionPanelDynamicModel.prototype.createAndSetupNewPanelObject = function () {
        var panel = this.createNewPanelObject();
        var self = this;
        panel.onGetQuestionTitleLocation = function () {
            return self.getTemplateQuestionTitleLocation();
        };
        return panel;
    };
    QuestionPanelDynamicModel.prototype.getTemplateQuestionTitleLocation = function () {
        return this.templateTitleLocation != "default"
            ? this.templateTitleLocation
            : this.getTitleLocationCore();
    };
    QuestionPanelDynamicModel.prototype.createNewPanelObject = function () {
        return new __WEBPACK_IMPORTED_MODULE_6__panel__["b" /* PanelModel */]();
    };
    QuestionPanelDynamicModel.prototype.onValueChanged = function () {
        if (this.isValueChangingInternally)
            return;
        var val = this.value;
        var newPanelCount = val && Array.isArray(val) ? val.length : 0;
        if (!QuestionPanelDynamicModel.isPanelRemoving &&
            newPanelCount <= this.panelCount)
            return;
        this.panelCount = newPanelCount;
    };
    QuestionPanelDynamicModel.prototype.onSurveyValueChanged = function (newValue) {
        _super.prototype.onSurveyValueChanged.call(this, newValue);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].onSurveyValueChanged();
        }
    };
    QuestionPanelDynamicModel.prototype.onSetData = function () {
        _super.prototype.onSetData.call(this);
        if (this.isDesignMode) {
            this.template.setSurveyImpl(this.surveyImpl);
            if (!this.isLoadingFromJson) {
                this.rebuildPanels();
            }
        }
    };
    //IQuestionPanelDynamicData
    QuestionPanelDynamicModel.prototype.getItemIndex = function (item) {
        return this.items.indexOf(item);
    };
    QuestionPanelDynamicModel.prototype.getPanelItemData = function (item) {
        var index = this.items.indexOf(item);
        var qValue = this.value;
        if (index < 0 &&
            Array.isArray(qValue) &&
            qValue.length > this.items.length) {
            index = qValue.length - 1;
        }
        if (index < 0)
            return {};
        if (!qValue || !Array.isArray(qValue) || qValue.length <= index)
            return {};
        return qValue[index];
    };
    QuestionPanelDynamicModel.prototype.setPanelItemData = function (item, name, val) {
        var index = this.items.indexOf(item);
        if (index < 0)
            index = this.items.length;
        var qValue = this.value;
        if (!qValue || !Array.isArray(qValue)) {
            qValue = [];
        }
        if (qValue.length <= index) {
            for (var i = qValue.length; i <= index; i++) {
                qValue.push({});
            }
        }
        if (!qValue[index])
            qValue[index] = {};
        if (!this.isValueEmpty(val)) {
            qValue[index][name] = val;
        }
        else {
            delete qValue[index][name];
        }
        this.isValueChangingInternally = true;
        this.value = qValue;
        this.isValueChangingInternally = false;
    };
    QuestionPanelDynamicModel.prototype.getSurvey = function () {
        return this.survey;
    };
    QuestionPanelDynamicModel.MaxPanelCount = 100;
    QuestionPanelDynamicModel.isPanelRemoving = false;
    return QuestionPanelDynamicModel;
}(__WEBPACK_IMPORTED_MODULE_5__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_7__jsonobject__["b" /* JsonObject */].metaData.addClass("paneldynamic", [
    { name: "templateElements", alternativeName: "questions", visible: false },
    { name: "templateTitle:text", serializationProperty: "locTemplateTitle" },
    {
        name: "templateDescription:text",
        serializationProperty: "locTemplateDescription"
    },
    { name: "allowAddPanel:boolean", default: true },
    { name: "allowRemovePanel:boolean", default: true },
    {
        name: "panelCount:number",
        default: 0,
        choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    { name: "minPanelCount:number", default: 0 },
    {
        name: "maxPanelCount:number",
        default: QuestionPanelDynamicModel.MaxPanelCount
    },
    { name: "keyName" },
    {
        name: "keyDuplicationError",
        serializationProperty: "locKeyDuplicationError"
    },
    { name: "confirmDelete:boolean" },
    {
        name: "confirmDeleteText",
        serializationProperty: "locConfirmDeleteText"
    },
    { name: "panelAddText", serializationProperty: "locPanelAddText" },
    { name: "panelRemoveText", serializationProperty: "locPanelRemoveText" },
    { name: "panelPrevText", serializationProperty: "locPanelPrevText" },
    { name: "panelNextText", serializationProperty: "locPanelNextText" },
    {
        name: "showQuestionNumbers",
        default: "off",
        choices: ["off", "onPanel", "onSurvey"]
    },
    { name: "showRangeInProgress", default: true },
    {
        name: "renderMode",
        default: "list",
        choices: ["list", "progressTop", "progressBottom", "progressTopBottom"]
    },
    {
        name: "templateTitleLocation",
        default: "default",
        choices: ["default", "top", "bottom", "left"]
    }
], function () {
    return new QuestionPanelDynamicModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_8__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("paneldynamic", function (name) {
    return new QuestionPanelDynamicModel(name);
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRadiogroupModel; });




/**
 * A Model for a radiogroup question.
 */
var QuestionRadiogroupModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRadiogroupModel, _super);
    function QuestionRadiogroupModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionRadiogroupModel.prototype.getType = function () {
        return "radiogroup";
    };
    QuestionRadiogroupModel.prototype.supportGoNextPageAutomatic = function () {
        return true;
    };
    return QuestionRadiogroupModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["a" /* QuestionCheckboxBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.addClass("radiogroup", [], function () {
    return new QuestionRadiogroupModel("");
}, "checkboxbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("radiogroup", function (name) {
    var q = new QuestionRadiogroupModel(name);
    q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices;
    return q;
});


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__itemvalue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRatingModel; });





/**
 * A Model for a rating question.
 */
var QuestionRatingModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRatingModel, _super);
    function QuestionRatingModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rates = _this.createItemValues("rates");
        var self = _this;
        _this.registerFunctionOnPropertyValueChanged("rates", function () {
            self.fireCallback(self.rateValuesChangedCallback);
        });
        _this.onPropertyChanged.add(function (sender, options) {
            if (options.name == "rateMin" ||
                options.name == "rateMax" ||
                options.name == "rateStep") {
                self.fireCallback(self.rateValuesChangedCallback);
            }
        });
        var locMinRateDescriptionValue = _this.createLocalizableString("minRateDescription", _this, true);
        var locMaxRateDescriptionValue = _this.createLocalizableString("maxRateDescription", _this, true);
        locMinRateDescriptionValue.onGetTextCallback = function (text) {
            return text ? text + " " : text;
        };
        locMaxRateDescriptionValue.onGetTextCallback = function (text) {
            return text ? " " + text : text;
        };
        return _this;
    }
    QuestionRatingModel.prototype.onSurveyLoad = function () {
        _super.prototype.onSurveyLoad.call(this);
        this.fireCallback(this.rateValuesChangedCallback);
    };
    Object.defineProperty(QuestionRatingModel.prototype, "rateValues", {
        /**
         * The list of rate items. Every item has value and text. If text is empty, the value is rendered. The item text supports markdown. If it is empty the array is generated by using rateMin, rateMax and rateStep properties.
         * @see rateMin
         * @see rateMax
         * @see rateStep
         */
        get: function () {
            return this.rates;
        },
        set: function (val) {
            this.setPropertyValue("rates", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "rateMin", {
        /**
         * This property is used to generate rate values if rateValues array is empty. It is the first value in the rating. The default value is 1.
         * @see rateValues
         * @see rateMax
         * @see rateStep
         */
        get: function () {
            return this.getPropertyValue("rateMin", 1);
        },
        set: function (val) {
            if (val > this.rateMax - this.rateStep)
                val = this.rateMax - this.rateStep;
            this.setPropertyValue("rateMin", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "rateMax", {
        /**
         * This property is used to generate rate values if rateValues array is empty. It is the last value in the rating. The default value is 5.
         * @see rateValues
         * @see rateMin
         * @see rateStep
         */
        get: function () {
            return this.getPropertyValue("rateMax", 5);
        },
        set: function (val) {
            if (val < this.rateMin + this.rateStep)
                val = this.rateMin + this.rateStep;
            this.setPropertyValue("rateMax", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "rateStep", {
        /**
         * This property is used to generate rate values if rateValues array is empty. It is the step value. The number of rate values are (rateMax - rateMin) / rateStep. The default value is 1.
         * @see rateValues
         * @see rateMin
         * @see rateMax
         */
        get: function () {
            return this.getPropertyValue("rateStep", 1);
        },
        set: function (val) {
            if (val <= 0)
                val = 1;
            if (val > this.rateMax - this.rateMin)
                val = this.rateMax - this.rateMin;
            this.setPropertyValue("rateStep", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "visibleRateValues", {
        get: function () {
            if (this.rateValues.length > 0)
                return this.rateValues;
            var res = [];
            var value = this.rateMin;
            while (value <= this.rateMax &&
                res.length < QuestionRatingModel.MaximumRateValueCount) {
                res.push(new __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */](value));
                value += this.rateStep;
            }
            return res;
        },
        enumerable: true,
        configurable: true
    });
    QuestionRatingModel.prototype.getType = function () {
        return "rating";
    };
    QuestionRatingModel.prototype.supportGoNextPageAutomatic = function () {
        return true;
    };
    QuestionRatingModel.prototype.supportComment = function () {
        return true;
    };
    QuestionRatingModel.prototype.supportOther = function () {
        return true;
    };
    Object.defineProperty(QuestionRatingModel.prototype, "minRateDescription", {
        /**
         * The description of minimum (first) item.
         */
        get: function () {
            return this.getLocalizableStringText("minRateDescription");
        },
        set: function (val) {
            this.setLocalizableStringText("minRateDescription", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "locMinRateDescription", {
        get: function () {
            return this.getLocalizableString("minRateDescription");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "maxRateDescription", {
        /**
         * The description of maximum (last) item.
         */
        get: function () {
            return this.getLocalizableStringText("maxRateDescription");
        },
        set: function (val) {
            this.setLocalizableStringText("maxRateDescription", val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "locMaxRateDescription", {
        get: function () {
            return this.getLocalizableString("maxRateDescription");
        },
        enumerable: true,
        configurable: true
    });
    QuestionRatingModel.MaximumRateValueCount = 20;
    return QuestionRatingModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.addClass("rating", [
    "hasComment:boolean",
    {
        name: "rateValues:itemvalues",
        onGetValue: function (obj) {
            return __WEBPACK_IMPORTED_MODULE_1__itemvalue__["a" /* ItemValue */].getData(obj.rateValues);
        },
        onSetValue: function (obj, value) {
            obj.rateValues = value;
        }
    },
    { name: "rateMin:number", default: 1 },
    { name: "rateMax:number", default: 5 },
    { name: "rateStep:number", default: 1 },
    {
        name: "minRateDescription",
        alternativeName: "mininumRateDescription",
        serializationProperty: "locMinRateDescription"
    },
    {
        name: "maxRateDescription",
        alternativeName: "maximumRateDescription",
        serializationProperty: "locMaxRateDescription"
    }
], function () {
    return new QuestionRatingModel("");
}, "question");
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("rating", function (name) {
    return new QuestionRatingModel(name);
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylesManager; });
var StylesManager = /** @class */ (function () {
    function StylesManager() {
        this.sheet = null;
        this.sheet = StylesManager.findSheet(StylesManager.SurveyJSStylesSheetId);
        if (!this.sheet) {
            this.sheet = StylesManager.createSheet(StylesManager.SurveyJSStylesSheetId);
            this.initializeStyles(this.sheet);
        }
    }
    StylesManager.findSheet = function (styleSheetId) {
        for (var i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].ownerNode["id"] === styleSheetId) {
                return document.styleSheets[i];
            }
        }
        return null;
    };
    StylesManager.createSheet = function (styleSheetId) {
        var style = document.createElement("style");
        style.id = styleSheetId;
        // Add a media (and/or media query) here if you'd like!
        // style.setAttribute("media", "screen")
        // style.setAttribute("media", "only screen and (max-width : 1024px)")
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
    };
    StylesManager.applyTheme = function (themeName, themeSelector) {
        if (themeName === void 0) { themeName = "default"; }
        if (themeSelector === void 0) { themeSelector = ".sv_main"; }
        var sheet = StylesManager.findSheet(themeName + themeSelector);
        if (!sheet) {
            sheet = StylesManager.createSheet(themeName + themeSelector);
            var theme_1 = StylesManager.ThemeColors[themeName] ||
                StylesManager.ThemeColors["default"];
            Object.keys(StylesManager.ThemeCss).forEach(function (selector) {
                var cssRuleText = StylesManager.ThemeCss[selector];
                Object.keys(theme_1).forEach(function (colorVariableName) {
                    return (cssRuleText = cssRuleText.replace(new RegExp("\\" + colorVariableName, "g"), theme_1[colorVariableName]));
                });
                sheet.insertRule(themeSelector + selector + " { " + cssRuleText + " }", 0);
            });
        }
    };
    StylesManager.prototype.initializeStyles = function (sheet) {
        Object.keys(StylesManager.Styles).forEach(function (selector) {
            return sheet.insertRule(selector + " { " + StylesManager.Styles[selector] + " }", 0);
        });
    };
    StylesManager.SurveyJSStylesSheetId = "surveyjs";
    StylesManager.Styles = {
        // ".sv_bootstrap_css":
        //   "position: relative; width: 100%; background-color: #f4f4f4",
        // ".sv_bootstrap_css .sv_custom_header":
        //   "position: absolute; width: 100%; height: 275px; background-color: #e7e7e7;",
        // ".sv_bootstrap_css .sv_container":
        //   "max-width: 80%; margin: auto; position: relative; color: #6d7072; padding: 0 1em;",
        // ".sv_bootstrap_css .panel-body":
        //   "background-color: white; padding: 1em 1em 5em 1em; border-top: 2px solid lightgray;",
        ".sv_bootstrap_css .sv_qstn": "padding: 0.5em 1em 1.5em 1em;",
        ".sv_bootstrap_css .sv_qcbc input[type=checkbox], .sv_bootstrap_css .sv_qcbc input[type=radio]": "vertical-align: middle; margin-top: -1px",
        ".sv_bootstrapmaterial_css .sv_q_radiogroup_control_label": "display: inline; position: static;",
        ".sv_qstn": "display: inline-block; vertical-align: top;",
        ".progress": "width: 60%;",
        ".progress-bar": "width: auto; margin-left: 2px; margin-right: 2px;",
        ".sv_p_container": "display: inline-block; vertical-align: top;",
        ".sv_qbln .checkbox-material": "margin-right: 3px;",
        ".sv_qcbx .checkbox-material": "margin-right: 5px;",
        ".sv_qcbx .checkbox label": "justify-content: left; display: inline-block;",
        ".sv_qstn .radio label": "justify-content: left; display: inline-block;",
        ".sv_qstn label.sv_q_m_label": "position: absolute; margin: 0;",
        ".sv_q_mt_item_value": "float: left;",
        ".sv_qstn.sv_qstn_left": "margin-top: 0.75em;",
        ".sv_qstn .title-left": "float: left; margin-right: 1em;",
        ".sv_qstn .content-left": "overflow: hidden",
        ".sv_q_radiogroup_inline .sv_q_radiogroup_other": "display: inline-block;",
        ".sv_q_checkbox_inline .sv_q_checkbox_other": "display: inline-block;",
        ".sv_q_checkbox_inline, .sv_q_radiogroup_inline": "line-height: 2.5em;",
        ".form-inline .sv_q_checkbox_inline:not(:last-child)": "margin-right: 1em;",
        ".form-inline .sv_q_radiogroup_inline:not(:last-child)": "margin-right: 1em;",
        ".sv_qstn fieldset": "border: none; margin: 0; padding: 0;",
        "fieldset.form-inline": "display: inline-block;",
        ".sv_qstn .sv_q_file_placeholder": "display:none",
        ".sv_p_title": "cursor: pointer; padding-left: 1em; padding-bottom: 0.3em;",
        ".sv_p_title .sv_panel_icon": "float: right; margin-right: 1em;",
        ".sv_p_title .sv_panel_icon::before": "content: ''; background-repeat: no-repeat; background-position: center; padding: 0.5em; display: inline-block; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMCAxMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAgMTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiM2RDcwNzI7fQ0KPC9zdHlsZT4NCjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMiwyIDAsNCA1LDkgMTAsNCA4LDIgNSw1ICIvPg0KPC9zdmc+DQo=);",
        ".sv_p_title .sv_panel_icon.sv_expanded::before": "transform: rotate(180deg);",
        ".sv_q_file > input[type=file], .sv_q_file > button": "display: inline-block;",
        ".sv_q_file_preview": "display: inline-block;",
        ".sv_q_file_remove_button": "line-height: normal;"
    };
    StylesManager.ThemeColors = {
        default: {
            "$header-background-color": "#e7e7e7",
            "$body-container-background-color": "#f4f4f4",
            "$main-color": "#1ab394",
            "$main-hover-color": "#0aa384",
            "$body-background-color": "white",
            "$inputs-background-color": "white",
            "$text-color": "#6d7072",
            "$header-color": "#6d7072",
            "$border-color": "#e7e7e7",
            "$error-color": "#ed5565",
            "$error-background-color": "#fd6575"
        },
        orange: {
            "$header-background-color": "#4a4a4a",
            "$body-container-background-color": "#f8f8f8",
            "$main-color": "#f78119",
            "$main-hover-color": "#e77109",
            "$body-background-color": "white",
            "$inputs-background-color": "white",
            "$text-color": "#4a4a4a",
            "$header-color": "#f78119",
            "$border-color": "#e7e7e7",
            "$error-color": "#ed5565",
            "$error-background-color": "#fd6575"
        },
        darkblue: {
            "$header-background-color": "#d9d8dd",
            "$body-container-background-color": "#f6f7f2",
            "$main-color": "#3c4f6d",
            "$main-hover-color": "#2c3f5d",
            "$body-background-color": "white",
            "$inputs-background-color": "white",
            "$text-color": "#4a4a4a",
            "$header-color": "#6d7072",
            "$border-color": "#e7e7e7",
            "$error-color": "#ed5565",
            "$error-background-color": "#fd6575"
        },
        darkrose: {
            "$header-background-color": "#ddd2ce",
            "$body-container-background-color": "#f7efed",
            "$main-color": "#68656e",
            "$main-hover-color": "#58555e",
            "$body-background-color": "white",
            "$inputs-background-color": "white",
            "$text-color": "#4a4a4a",
            "$header-color": "#6d7072",
            "$border-color": "#e7e7e7",
            "$error-color": "#ed5565",
            "$error-background-color": "#fd6575"
        },
        stone: {
            "$header-background-color": "#cdccd2",
            "$body-container-background-color": "#efedf4",
            "$main-color": "#0f0f33",
            "$main-hover-color": "#191955",
            "$body-background-color": "white",
            "$inputs-background-color": "white",
            "$text-color": "#0f0f33",
            "$header-color": "#0f0f33",
            "$border-color": "#e7e7e7",
            "$error-color": "#ed5565",
            "$error-background-color": "#fd6575"
        },
        winter: {
            "$header-background-color": "#82b8da",
            "$body-container-background-color": "#dae1e7",
            "$main-color": "#3c3b40",
            "$main-hover-color": "#1e1d20",
            "$body-background-color": "white",
            "$inputs-background-color": "white",
            "$text-color": "#000",
            "$header-color": "#000",
            "$border-color": "#e7e7e7",
            "$error-color": "#ed5565",
            "$error-background-color": "#fd6575"
        },
        winterstone: {
            "$header-background-color": "#323232",
            "$body-container-background-color": "#f8f8f8",
            "$main-color": "#5ac8fa",
            "$main-hover-color": "#06a1e7",
            "$body-background-color": "white",
            "$inputs-background-color": "white",
            "$text-color": "#000",
            "$header-color": "#fff",
            "$border-color": "#e7e7e7",
            "$error-color": "#ed5565",
            "$error-background-color": "#fd6575"
        }
    };
    StylesManager.ThemeCss = {
        ".sv_default_css": "background-color: $body-container-background-color;",
        ".sv_default_css hr": "border-color: $border-color;",
        ".sv_default_css input[type='button'], .sv_default_css button": "color: $body-background-color; background-color: $main-color;",
        ".sv_default_css input[type='button']:hover, .sv_default_css button:hover": "background-color: $main-hover-color;",
        ".sv_default_css .sv_header": "color: $header-color;",
        ".sv_default_css .sv_custom_header": "background-color: $header-background-color;",
        ".sv_default_css .sv_container": "color: $text-color;",
        ".sv_default_css .sv_body": "background-color: $body-background-color; border-color: $main-color;",
        ".sv_default_css .sv_progress": "background-color: $border-color;",
        ".sv_default_css .sv_progress_bar": "background-color: $main-color;",
        ".sv_default_css .sv_p_root > .sv_row": "border-color: $border-color;",
        ".sv_default_css .sv_p_root > .sv_row:nth-child(odd)": "background-color: $body-background-color;",
        ".sv_default_css .sv_p_root > .sv_row:nth-child(even)": "background-color: $body-container-background-color;",
        ".sv_default_css .sv_q_other input": "color: $text-color; border-color: $border-color; background-color: $inputs-background-color;",
        ".sv_default_css .sv_q_text_root": "color: $text-color; border-color: $border-color; background-color: $inputs-background-color;",
        ".sv_default_css .sv_q_dropdown_control": "color: $text-color; border-color: $border-color; background-color: $inputs-background-color;",
        ".sv_default_css input[type='text']": "color: $text-color; border-color: $border-color; background-color: $inputs-background-color;",
        ".sv_default_css select": "color: $text-color; border-color: $border-color; background-color: $inputs-background-color;",
        ".sv_default_css textarea": "color: $text-color; border-color: $border-color; background-color: $inputs-background-color;",
        ".sv_default_css .sv_q_other input:focus": "border-color: $main-color;",
        ".sv_default_css .sv_q_text_root:focus": "border-color: $main-color;",
        ".sv_default_css .sv_q_dropdown_control:focus": "border-color: $main-color;",
        ".sv_default_css input[type='text']:focus": "border-color: $main-color;",
        ".sv_default_css select:focus": "border-color: $main-color;",
        ".sv_default_css textarea:focus": "border-color: $main-color;",
        ".sv_default_css .sv_select_wrapper": "background-color: $body-background-color;",
        ".sv_default_css .sv_select_wrapper::before": "background-color: $main-color;",
        ".sv_default_css .sv_q_rating_item.active .sv_q_rating_item_text": "background-color: $main-hover-color; border-color: $main-hover-color; color: $body-background-color;",
        ".sv_default_css .sv_q_rating_item .sv_q_rating_item_text": "border-color: $border-color;",
        ".sv_default_css .sv_q_rating_item .sv_q_rating_item_text:hover": "border-color: $main-hover-color;",
        ".sv_default_css table.sv_q_matrix tr": "border-color: $border-color;",
        ".sv_default_css table.sv_q_matrix_dropdown tr": "border-color: $border-color;",
        ".sv_default_css table.sv_q_matrix_dynamic tr": "border-color: $border-color;"
    };
    return StylesManager;
}());



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyWindowModel; });



/**
 * A Model for a survey running in the Window.
 */
var SurveyWindowModel = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyWindowModel, _super);
    function SurveyWindowModel(jsonObj, initialModel) {
        if (initialModel === void 0) { initialModel = null; }
        var _this = _super.call(this) || this;
        _this.isExpandedValue = false;
        if (initialModel) {
            _this.surveyValue = initialModel;
        }
        else {
            _this.surveyValue = _this.createSurvey(jsonObj);
        }
        _this.surveyValue.showTitle = false;
        if ("undefined" !== typeof document) {
            _this.windowElement = document.createElement("div");
        }
        return _this;
    }
    SurveyWindowModel.prototype.getType = function () {
        return "window";
    };
    Object.defineProperty(SurveyWindowModel.prototype, "survey", {
        /**
         * A survey object.
         * @see SurveyModel
         */
        get: function () {
            return this.surveyValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "isShowing", {
        /**
         * Returns true if the window is currently showing. Set it to true to show the window and false to hide it.
         * @see show
         * @see hide
         */
        get: function () {
            return this.isShowingValue;
        },
        set: function (val) {
            if (this.isShowing == val)
                return;
            this.isShowingValue = val;
            if (this.showingChangedCallback)
                this.showingChangedCallback();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Show the window
     * @see hide
     * @see isShowing
     */
    SurveyWindowModel.prototype.show = function () {
        this.isShowing = true;
    };
    /**
     * Hide the window
     * @see show
     * @see isShowing
     */
    SurveyWindowModel.prototype.hide = function () {
        this.isShowing = false;
    };
    Object.defineProperty(SurveyWindowModel.prototype, "isExpanded", {
        /**
         * Returns true if the window is expanded. Set it to true to expand the window or false to collapse it.
         * @see expand
         * @see collapse
         */
        get: function () {
            return this.isExpandedValue;
        },
        set: function (val) {
            if (val)
                this.expand();
            else
                this.collapse();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "title", {
        /**
         * The window and survey title.
         */
        get: function () {
            return this.survey.title;
        },
        set: function (value) {
            this.survey.title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "locTitle", {
        get: function () {
            return this.survey.locTitle;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Expand the window to show the survey.
     */
    SurveyWindowModel.prototype.expand = function () {
        this.expandcollapse(true);
    };
    /**
     * Collapse the window and show survey title only.
     */
    SurveyWindowModel.prototype.collapse = function () {
        this.expandcollapse(false);
    };
    SurveyWindowModel.prototype.createSurvey = function (jsonObj) {
        return new __WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyModel */](jsonObj);
    };
    SurveyWindowModel.prototype.expandcollapse = function (value) {
        if (this.isExpandedValue == value)
            return;
        this.isExpandedValue = value;
        if (this.expandedChangedCallback)
            this.expandedChangedCallback();
    };
    SurveyWindowModel.surveyElementName = "windowSurveyJS";
    return SurveyWindowModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(4);
/* unused harmony export surveyTimerFunctions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTimer; });

var surveyTimerFunctions = {
    setInterval: function (func) {
        return window.setInterval(func, 1000);
    },
    clearInterval: function (timerId) {
        window.clearInterval(timerId);
    }
};
var SurveyTimer = /** @class */ (function () {
    function SurveyTimer() {
        this.listenerCounter = 0;
        this.timerId = -1;
        this.onTimer = new __WEBPACK_IMPORTED_MODULE_0__base__["b" /* Event */]();
    }
    Object.defineProperty(SurveyTimer, "instance", {
        get: function () {
            if (!SurveyTimer.instanceValue) {
                SurveyTimer.instanceValue = new SurveyTimer();
            }
            return SurveyTimer.instanceValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyTimer.prototype.start = function (func) {
        if (func === void 0) { func = null; }
        if (func) {
            this.onTimer.add(func);
        }
        if (this.timerId < 0) {
            var self = this;
            this.timerId = surveyTimerFunctions.setInterval(function () {
                self.doTimer();
            });
        }
        this.listenerCounter++;
    };
    SurveyTimer.prototype.stop = function (func) {
        if (func === void 0) { func = null; }
        if (func) {
            this.onTimer.remove(func);
        }
        this.listenerCounter--;
        if (this.listenerCounter == 0 && this.timerId > -1) {
            surveyTimerFunctions.clearInterval(this.timerId);
            this.timerId = -1;
        }
    };
    SurveyTimer.prototype.doTimer = function () {
        if (this.timerId < 0)
            return;
        this.onTimer.fire(this, {});
    };
    SurveyTimer.instanceValue = null;
    return SurveyTimer;
}());



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cssstandard__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultBootstrapCss; });

var defaultBootstrapCss = {
    root: "sv_bootstrap_css",
    header: "panel-heading card-header",
    body: "panel-body card-block",
    footer: "panel-footer card-footer",
    navigationButton: "",
    completedPage: "",
    navigation: {
        complete: "sv_complete_btn",
        prev: "sv_prev_btn",
        next: "sv_next_btn",
        start: "sv_start_btn"
    },
    progress: "progress center-block mx-auto mb-4",
    progressBar: "progress-bar",
    page: {
        root: "",
        title: "",
        description: ""
    },
    pageTitle: "",
    pageDescription: "small",
    row: "",
    question: {
        mainRoot: "sv_qstn",
        title: "",
        description: "small",
        comment: "form-control",
        required: "",
        titleRequired: "",
        indent: 20
    },
    panel: {
        title: "sv_p_title",
        description: "small",
        container: "sv_p_container"
    },
    error: {
        root: "alert alert-danger",
        icon: "glyphicon glyphicon-exclamation-sign",
        item: ""
    },
    boolean: { root: "sv_qbln form-inline checkbox", item: "" },
    checkbox: {
        root: "sv_qcbc sv_qcbx form-inline",
        item: "checkbox",
        itemControl: "",
        controlLabel: "",
        other: "sv_q_checkbox_other"
    },
    comment: "form-control",
    dropdown: { root: "", control: "form-control", other: "" },
    matrix: { root: "table", label: "sv_q_m_label" },
    matrixdropdown: { root: "table" },
    matrixdynamic: { root: "table", button: "button" },
    paneldynamic: { root: "", button: "button" },
    multipletext: {
        root: "table",
        itemTitle: "",
        itemValue: "sv_q_mt_item_value form-control"
    },
    radiogroup: {
        root: "sv_qcbc form-inline",
        item: "radio",
        label: "",
        itemControl: "",
        controlLabel: "",
        other: "sv_q_radiogroup_other"
    },
    rating: {
        root: "btn-group",
        item: "btn btn-default btn-secondary",
        selected: "active",
        minText: "sv_q_rating_min_text",
        itemText: "sv_q_rating_item_text",
        maxText: "sv_q_rating_max_text"
    },
    text: "form-control",
    expression: "form-control",
    file: {
        root: "sv_q_file",
        placeholderInput: "sv_q_file_placeholder",
        preview: "sv_q_file_preview",
        removeButton: "sv_q_file_remove_button"
    },
    saveData: {
        root: "",
        saving: "alert alert-info",
        error: "alert alert-danger",
        success: "alert alert-success",
        saveAgainButton: ""
    },
    window: {
        root: "modal-content",
        body: "modal-body",
        header: {
            root: "modal-header panel-title",
            title: "pull-left",
            button: "glyphicon pull-right",
            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up",
            buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
        }
    }
};
__WEBPACK_IMPORTED_MODULE_0__cssstandard__["b" /* surveyCss */]["bootstrap"] = defaultBootstrapCss;


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cssstandard__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultBootstrapMaterialCss; });

var defaultBootstrapMaterialCss = {
    root: "sv_bootstrapmaterial_css",
    header: "panel-heading",
    body: "panel-body",
    footer: "panel-footer",
    navigationButton: "",
    completedPage: "",
    navigation: {
        complete: "sv_complete_btn",
        prev: "sv_prev_btn",
        next: "sv_next_btn",
        start: "sv_start_btn"
    },
    progress: "progress center-block mx-auto mb-4",
    progressBar: "progress-bar",
    page: {
        root: "",
        title: "",
        description: ""
    },
    pageTitle: "",
    pageDescription: "small",
    row: "",
    question: {
        mainRoot: "sv_qstn form-group",
        title: "",
        description: "small",
        comment: "form-control",
        required: "",
        titleRequired: "",
        indent: 20
    },
    panel: {
        title: "sv_p_title",
        description: "small",
        container: "sv_p_container"
    },
    error: {
        root: "alert alert-danger",
        icon: "glyphicon glyphicon-exclamation-sign",
        item: ""
    },
    boolean: { root: "sv_qbln form-inline checkbox", item: "" },
    checkbox: {
        root: "sv_qcbx form-inline",
        item: "checkbox",
        itemControl: "",
        controlLabel: "",
        other: "sv_q_checkbox_other"
    },
    comment: "form-control",
    dropdown: { root: "", control: "form-control", other: "" },
    matrix: {
        root: "table",
        row: "form-group",
        label: "sv_q_m_label radio-inline",
        itemValue: "form-control"
    },
    matrixdropdown: { root: "table", itemValue: "form-group" },
    matrixdynamic: { root: "table", button: "button", itemValue: "form-group" },
    paneldynamic: { root: "", button: "button" },
    multipletext: {
        root: "table",
        itemTitle: "",
        row: "form-group",
        itemValue: "sv_q_mt_item_value form-control"
    },
    radiogroup: {
        root: "",
        item: "radio",
        label: "",
        itemControl: "",
        controlLabel: "sv_q_radiogroup_control_label",
        other: "sv_q_radiogroup_other"
    },
    rating: {
        root: "btn-group",
        item: "btn btn-default btn-secondary",
        selected: "active",
        minText: "sv_q_rating_min_text",
        itemText: "sv_q_rating_item_text",
        maxText: "sv_q_rating_max_text"
    },
    text: "form-control",
    expression: "form-control",
    file: {
        root: "form-group is-fileinput sv_q_file",
        placeholderInput: "",
        preview: "sv_q_file_preview",
        removeButton: "sv_q_file_remove_button"
    },
    saveData: {
        root: "",
        saving: "alert alert-info",
        error: "alert alert-danger",
        success: "alert alert-success",
        saveAgainButton: ""
    },
    window: {
        root: "modal-content",
        body: "modal-body",
        header: {
            root: "modal-header panel-title",
            title: "pull-left",
            button: "glyphicon pull-right",
            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up",
            buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
        }
    }
};
__WEBPACK_IMPORTED_MODULE_0__cssstandard__["b" /* surveyCss */]["bootstrapmaterial"] = defaultBootstrapMaterialCss;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_arabic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localization_catalan__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localization_czech__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localization_danish__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localization_dutch__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localization_finnish__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localization_french__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__localization_georgian__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localization_german__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__localization_greek__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__localization_hebrew__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__localization_hungarian__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__localization_icelandic__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__localization_italian__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__localization_latvian__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__localization_persian__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__localization_polish__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__localization_portuguese__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__localization_romanian__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__localization_russian__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__localization_simplified_chinese__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__localization_spanish__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__localization_swedish__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__localization_turkish__ = __webpack_require__(128);


























/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__helpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemvalue__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__itemvalue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__base__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_4__base__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__base__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__base__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localizablestring__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_5__localizablestring__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__functionsfactory__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_7__functionsfactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conditions__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__conditions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_8__conditions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_8__conditions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__conditionsParser__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_9__conditionsParser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__conditionProcessValue__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_10__conditionProcessValue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__error__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_11__error__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_11__error__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_11__error__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__jsonobject__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_12__jsonobject__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrixdropdownbase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__question_matrixdropdown__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_14__question_matrixdropdown__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_14__question_matrixdropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__question_matrixdynamic__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_15__question_matrixdynamic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_15__question_matrixdynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__question_matrix__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_16__question_matrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_16__question_matrix__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__question_multipletext__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_17__question_multipletext__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_17__question_multipletext__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__panel__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_18__panel__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_18__panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_18__panel__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_19__page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__question__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_20__question__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__questionbase__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_21__questionbase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__question_empty__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_22__question_empty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__question_baseselect__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_23__question_baseselect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_23__question_baseselect__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__question_checkbox__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_24__question_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__question_comment__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_25__question_comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__question_dropdown__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_26__question_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__questionfactory__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_27__questionfactory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_27__questionfactory__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__question_file__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_28__question_file__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__question_html__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_29__question_html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__question_radiogroup__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_30__question_radiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__question_rating__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_31__question_rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__question_expression__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_32__question_expression__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__question_text__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_33__question_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__question_boolean__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_34__question_boolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__question_paneldynamic__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_35__question_paneldynamic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_35__question_paneldynamic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__surveytimer__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_36__surveytimer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__survey__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_37__survey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__trigger__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_38__trigger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_38__trigger__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_38__trigger__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return __WEBPACK_IMPORTED_MODULE_38__trigger__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return __WEBPACK_IMPORTED_MODULE_38__trigger__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__surveyWindow__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return __WEBPACK_IMPORTED_MODULE_39__surveyWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__textPreProcessor__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return __WEBPACK_IMPORTED_MODULE_40__textPreProcessor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__dxSurveyService__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return __WEBPACK_IMPORTED_MODULE_41__dxSurveyService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__surveyStrings__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return __WEBPACK_IMPORTED_MODULE_42__surveyStrings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return __WEBPACK_IMPORTED_MODULE_42__surveyStrings__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__questionCustomWidgets__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return __WEBPACK_IMPORTED_MODULE_43__questionCustomWidgets__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return __WEBPACK_IMPORTED_MODULE_43__questionCustomWidgets__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__stylesmanager__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return __WEBPACK_IMPORTED_MODULE_44__stylesmanager__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Version; });
// styles

var Version;
Version = "" + "1.0.11";












































//Uncomment to include the "date" question type.
//export {default as QuestionDateModel} from "../../plugins/question_date";


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyWindow__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kosurvey__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyWindow; });




var koTemplate = __webpack_require__(104);
var SurveyWindow = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyWindow, _super);
    function SurveyWindow(jsonObj, initialModel) {
        if (jsonObj === void 0) { jsonObj = null; }
        if (initialModel === void 0) { initialModel = null; }
        var _this = _super.call(this, jsonObj, initialModel) || this;
        _this.koExpanded = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        _this.koExpandedCss = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.getButtonCss());
        var self = _this;
        _this.expandedChangedCallback = function () {
            self.koExpanded(self.isExpanded);
            self.koExpandedCss(self.getButtonCss());
        };
        _this.showingChangedCallback = function () {
            self.doShowingChanged();
        };
        _this.doExpand = function () {
            self.changeExpanded();
        };
        _this.survey.onComplete.add(function (sender) {
            self.onComplete();
        });
        return _this;
    }
    SurveyWindow.prototype.createSurvey = function (jsonObj) {
        return new __WEBPACK_IMPORTED_MODULE_3__kosurvey__["a" /* Survey */](jsonObj);
    };
    Object.defineProperty(SurveyWindow.prototype, "template", {
        get: function () {
            return this.templateValue ? this.templateValue : this.getDefaultTemplate();
        },
        set: function (value) {
            this.templateValue = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveyWindow.prototype.doShowingChanged = function () {
        if (this.isShowing) {
            this.windowElement.innerHTML = this.template;
            __WEBPACK_IMPORTED_MODULE_1_knockout__["cleanNode"](this.windowElement);
            __WEBPACK_IMPORTED_MODULE_1_knockout__["applyBindings"](this, this.windowElement);
            document.body.appendChild(this.windowElement);
            this.survey.render(SurveyWindow.surveyElementName);
        }
        else {
            document.body.removeChild(this.windowElement);
            this.windowElement.innerHTML = "";
        }
    };
    SurveyWindow.prototype.getDefaultTemplate = function () {
        return koTemplate;
    };
    Object.defineProperty(SurveyWindow.prototype, "css", {
        get: function () {
            return this.survey["css"];
        },
        enumerable: true,
        configurable: true
    });
    SurveyWindow.prototype.changeExpanded = function () {
        this.expandcollapse(!this.isExpanded);
    };
    SurveyWindow.prototype.onComplete = function () {
        this.hide();
    };
    SurveyWindow.prototype.getButtonCss = function () {
        return this.koExpanded()
            ? this.css.window.header.buttonCollapsed
            : this.css.window.header.buttonExpanded;
    };
    return SurveyWindow;
}(__WEBPACK_IMPORTED_MODULE_2__surveyWindow__["a" /* SurveyWindowModel */]));



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_boolean__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koquestion__ = __webpack_require__(6);
/* unused harmony export QuestionBooleanImplementor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBoolean; });






var QuestionBooleanImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionBooleanImplementor, _super);
    function QuestionBooleanImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question = question;
        _this.koIndeterminate = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.question.isIndeterminate);
        _this.koCheckedValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.question.checkedValue);
        var self = _this;
        _this.koCheckedValue.subscribe(function (newValue) {
            self.updateCheckedValue(newValue);
        });
        _this.question["koIndeterminate"] = _this.koIndeterminate;
        _this.question["koCheckedValue"] = _this.koCheckedValue;
        return _this;
    }
    QuestionBooleanImplementor.prototype.setkoValue = function (newValue) {
        _super.prototype.setkoValue.call(this, newValue);
        this.koIndeterminate(this.question.isIndeterminate);
        if (this.koCheckedValue() != this.question.checkedValue) {
            this.koCheckedValue(this.question.checkedValue);
        }
    };
    QuestionBooleanImplementor.prototype.updateCheckedValue = function (newValue) {
        this.question.checkedValue = newValue;
    };
    QuestionBooleanImplementor.prototype.isIndeterminate = function () {
        return !this.question.value && this.question.value !== false;
    };
    return QuestionBooleanImplementor;
}(__WEBPACK_IMPORTED_MODULE_5__koquestion__["a" /* QuestionImplementor */]));

var QuestionBoolean = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionBoolean, _super);
    function QuestionBoolean(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionBooleanImplementor(_this);
        return _this;
    }
    QuestionBoolean.prototype.getItemCss = function (row, column) {
        var isChecked = this["koCheckedValue"]();
        var itemClass = this["koCss"]().item + (isChecked ? " checked" : "");
        return itemClass;
    };
    return QuestionBoolean;
}(__WEBPACK_IMPORTED_MODULE_2__question_boolean__["a" /* QuestionBooleanModel */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("boolean", function () {
    return new QuestionBoolean("");
});
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("boolean", function (name) {
    return new QuestionBoolean(name);
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koquestion_baseselect__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_checkbox__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckbox; });






var QuestionCheckboxImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxImplementor, _super);
    function QuestionCheckboxImplementor(question) {
        return _super.call(this, question) || this;
    }
    QuestionCheckboxImplementor.prototype.createkoValue = function () {
        return this.question.value
            ? __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](this.question.value)
            : __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
    };
    QuestionCheckboxImplementor.prototype.setkoValue = function (newValue) {
        if (newValue) {
            this.koValue([].concat(newValue));
        }
        else {
            this.koValue([]);
        }
    };
    return QuestionCheckboxImplementor;
}(__WEBPACK_IMPORTED_MODULE_2__koquestion_baseselect__["b" /* QuestionCheckboxBaseImplementor */]));
var QuestionCheckbox = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckbox, _super);
    function QuestionCheckbox(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionCheckboxImplementor(_this);
        return _this;
    }
    QuestionCheckbox.prototype.getItemClass = function (item) {
        var isChecked = this["koValue"]() && this["koValue"]().indexOf(item.value) !== -1;
        var itemClass = this.cssClasses.item +
            (this.colCount === 0 ? " sv_q_checkbox_inline" : "");
        if (isChecked)
            itemClass += " checked";
        return itemClass;
    };
    return QuestionCheckbox;
}(__WEBPACK_IMPORTED_MODULE_5__question_checkbox__["a" /* QuestionCheckboxModel */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("checkbox", function () {
    return new QuestionCheckbox("");
});
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("checkbox", function (name) {
    var q = new QuestionCheckbox(name);
    q.choices = __WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].DefaultChoices;
    return q;
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_comment__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComment; });





var QuestionComment = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionComment, _super);
    function QuestionComment(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_4__koquestion__["a" /* QuestionImplementor */](_this);
        return _this;
    }
    return QuestionComment;
}(__WEBPACK_IMPORTED_MODULE_3__question_comment__["a" /* QuestionCommentModel */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("comment", function () {
    return new QuestionComment("");
});
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("comment", function (name) {
    return new QuestionComment(name);
});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_dropdown__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion_baseselect__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDropdown; });





var QuestionDropdown = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionDropdown, _super);
    function QuestionDropdown(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_4__koquestion_baseselect__["a" /* QuestionSelectBaseImplementor */](_this);
        return _this;
    }
    return QuestionDropdown;
}(__WEBPACK_IMPORTED_MODULE_1__question_dropdown__["a" /* QuestionDropdownModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("dropdown", function () {
    return new QuestionDropdown("");
});
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("dropdown", function (name) {
    var q = new QuestionDropdown(name);
    q.choices = __WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].DefaultChoices;
    return q;
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_empty__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koquestion__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionEmpty; });




var QuestionEmpty = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionEmpty, _super);
    function QuestionEmpty(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_3__koquestion__["a" /* QuestionImplementor */](_this);
        return _this;
    }
    return QuestionEmpty;
}(__WEBPACK_IMPORTED_MODULE_1__question_empty__["a" /* QuestionEmptyModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("empty", function () {
    return new QuestionEmpty("");
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_expression__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koquestion__ = __webpack_require__(6);
/* unused harmony export QuestionExpressionImplementor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionExpression; });






var QuestionExpressionImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionExpressionImplementor, _super);
    function QuestionExpressionImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question = question;
        _this.koDisplayValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.question.displayValue);
        _this.question["koDisplayValue"] = _this.koDisplayValue;
        return _this;
    }
    QuestionExpressionImplementor.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        this.koDisplayValue(this.question.displayValue);
    };
    return QuestionExpressionImplementor;
}(__WEBPACK_IMPORTED_MODULE_5__koquestion__["a" /* QuestionImplementor */]));

var QuestionExpression = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionExpression, _super);
    function QuestionExpression(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionExpressionImplementor(_this);
        return _this;
    }
    return QuestionExpression;
}(__WEBPACK_IMPORTED_MODULE_2__question_expression__["a" /* QuestionExpressionModel */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("expression", function () {
    return new QuestionExpression("");
});
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("expression", function (name) {
    return new QuestionExpression(name);
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_file__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koquestion__ = __webpack_require__(6);
/* unused harmony export QuestionFileImplementor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFile; });






var QuestionFileImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionFileImplementor, _super);
    function QuestionFileImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koDataUpdater = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        _this.koHasValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        _this.onLoadPreview = function () {
            _this.koDataUpdater(_this.koDataUpdater() + 1);
        };
        var self = _this;
        _this.koData = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () {
            self.koDataUpdater();
            return self.question.previewValue;
        });
        _this.question["koData"] = _this.koData;
        _this.question["koHasValue"] = _this.koHasValue;
        _this.question.previewValueLoadedCallback =
            self.onLoadPreview;
        _this.question["dochange"] = function (data, event) {
            var src = event.target || event.srcElement;
            self.onChange(src);
        };
        _this.question["doclean"] = function (data, event) {
            var src = event.target || event.srcElement;
            _this.question.clear();
            src.parentElement.querySelectorAll("input")[0].value = "";
            _this.koHasValue(false);
        };
        return _this;
    }
    QuestionFileImplementor.prototype.onChange = function (src) {
        if (!window["FileReader"])
            return;
        if (!src || !src.files || src.files.length < 1)
            return;
        var files = [];
        for (var i = 0; i < src.files.length; i++) {
            files.push(src.files[i]);
        }
        this.question.loadFiles(files);
        this.koHasValue(true);
    };
    return QuestionFileImplementor;
}(__WEBPACK_IMPORTED_MODULE_5__koquestion__["a" /* QuestionImplementor */]));

var QuestionFile = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionFile, _super);
    function QuestionFile(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionFileImplementor(_this);
        return _this;
    }
    return QuestionFile;
}(__WEBPACK_IMPORTED_MODULE_4__question_file__["a" /* QuestionFileModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("file", function () {
    return new QuestionFile("");
});
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("file", function (name) {
    return new QuestionFile(name);
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koquestionbase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_html__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHtml; });





var QuestionHtml = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionHtml, _super);
    function QuestionHtml(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_3__koquestionbase__["a" /* QuestionImplementorBase */](_this);
        return _this;
    }
    return QuestionHtml;
}(__WEBPACK_IMPORTED_MODULE_4__question_html__["a" /* QuestionHtmlModel */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("html", function () {
    return new QuestionHtml("");
});
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("html", function (name) {
    return new QuestionHtml(name);
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_matrix__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koquestion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrix; });






var MatrixRow = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixRow, _super);
    function MatrixRow(item, fullName, data, value) {
        var _this = _super.call(this, item, fullName, data, value) || this;
        _this.fullName = fullName;
        _this.isValueUpdating = false;
        _this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.value);
        var self = _this;
        _this.koValue.subscribe(function (newValue) {
            if (self.isValueUpdating)
                true;
            self.value = newValue;
        });
        return _this;
    }
    MatrixRow.prototype.onValueChanged = function () {
        this.isValueUpdating = true;
        this.koValue(this.value);
        this.isValueUpdating = false;
    };
    return MatrixRow;
}(__WEBPACK_IMPORTED_MODULE_2__question_matrix__["a" /* MatrixRowModel */]));

var QuestionMatrix = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrix, _super);
    function QuestionMatrix(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_3__koquestion__["a" /* QuestionImplementor */](_this);
        return _this;
    }
    QuestionMatrix.prototype.createMatrixRow = function (item, fullName, value) {
        return new MatrixRow(item, fullName, this, value);
    };
    QuestionMatrix.prototype.getItemCss = function (row, column) {
        var isChecked = row.koValue() == column.value;
        var itemClass = this["koCss"]().label + (isChecked ? " checked" : "");
        return itemClass;
    };
    return QuestionMatrix;
}(__WEBPACK_IMPORTED_MODULE_2__question_matrix__["b" /* QuestionMatrixModel */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("matrix", function () {
    return new QuestionMatrix("");
});
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrix", function (name) {
    var q = new QuestionMatrix(name);
    q.rows = __WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].DefaultRows;
    q.columns = __WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].DefaultColums;
    return q;
});


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion_matrixdropdown__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_matrixdynamic__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_matrixdropdownbase__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDynamicImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixDynamic; });







var QuestionMatrixDynamicImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDynamicImplementor, _super);
    function QuestionMatrixDynamicImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRecalc = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        _this.koRows = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            this.koRecalc();
            return this.question.visibleRows;
        }, _this);
        _this.koOverflowX = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            return this.question.horizontalScroll
                ? "scroll"
                : "none";
        }, _this);
        _this.question["koRows"] = _this.koRows;
        var self = _this;
        _this.koAddRowClick = function () {
            self.addRow();
        };
        _this.koRemoveRowClick = function (data) {
            self.removeRow(data);
        };
        _this.koCanAddRow = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.canAddRow;
        });
        _this.koCanRemoveRow = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.canRemoveRow;
        });
        _this.question["koAddRowClick"] = _this.koAddRowClick;
        _this.question["koRemoveRowClick"] = _this.koRemoveRowClick;
        _this.question["koOverflowX"] = _this.koOverflowX;
        _this.question["koCanAddRow"] = _this.koCanAddRow;
        _this.question["koCanRemoveRow"] = _this.koCanRemoveRow;
        _this
            .question.rowCountChangedCallback = function () {
            self.onRowCountChanged();
        };
        _this.question.columnsChangedCallback = function () {
            self.onColumnChanged();
        };
        _this.question.updateCellsCallback = function () {
            self.onUpdateCells();
        };
        return _this;
    }
    QuestionMatrixDynamicImplementor.prototype.onUpdateCells = function () {
        //Genereate rows again.
        var rows = this.question["generatedVisibleRows"];
        var columns = this.question.columns;
        if (rows && rows.length > 0 && columns && columns.length > 0)
            this.onColumnChanged();
    };
    QuestionMatrixDynamicImplementor.prototype.onColumnChanged = function () {
        var rows = this.question.visibleRows;
        this.onRowCountChanged();
    };
    QuestionMatrixDynamicImplementor.prototype.onRowCountChanged = function () {
        this.koRecalc(this.koRecalc() + 1);
    };
    QuestionMatrixDynamicImplementor.prototype.addRow = function () {
        this.question.addRow();
    };
    QuestionMatrixDynamicImplementor.prototype.removeRow = function (row) {
        var rows = this.question.visibleRows;
        var index = rows.indexOf(row);
        if (index > -1) {
            this.question.removeRowUI(index);
        }
    };
    return QuestionMatrixDynamicImplementor;
}(__WEBPACK_IMPORTED_MODULE_4__koquestion_matrixdropdown__["b" /* QuestionMatrixBaseImplementor */]));

var QuestionMatrixDynamic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDynamic, _super);
    function QuestionMatrixDynamic(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionMatrixDynamicImplementor(_this);
        return _this;
    }
    return QuestionMatrixDynamic;
}(__WEBPACK_IMPORTED_MODULE_5__question_matrixdynamic__["a" /* QuestionMatrixDynamicModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("matrixdynamic", function () {
    return new QuestionMatrixDynamic("");
});
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdynamic", function (name) {
    var q = new QuestionMatrixDynamic(name);
    q.choices = [1, 2, 3, 4, 5];
    q.rowCount = 2;
    __WEBPACK_IMPORTED_MODULE_6__question_matrixdropdownbase__["a" /* QuestionMatrixDropdownModelBase */].addDefaultColumns(q);
    return q;
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_multipletext__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koquestion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion_text__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleTextItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMultipleTextImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuestionMultipleText; });







var MultipleTextItem = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MultipleTextItem, _super);
    function MultipleTextItem(name, title) {
        if (name === void 0) { name = null; }
        if (title === void 0) { title = null; }
        var _this = _super.call(this, name, title) || this;
        _this.name = name;
        _this.isKOValueUpdating = false;
        _this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.value);
        var self = _this;
        _this.koValue.subscribe(function (newValue) {
            if (!self.isKOValueUpdating) {
                self.value = newValue;
            }
        });
        return _this;
    }
    MultipleTextItem.prototype.createEditor = function (name) {
        return new __WEBPACK_IMPORTED_MODULE_4__koquestion_text__["a" /* QuestionText */](name);
    };
    MultipleTextItem.prototype.onValueChanged = function (newValue) {
        this.isKOValueUpdating = true;
        this.koValue(newValue);
        this.isKOValueUpdating = false;
    };
    return MultipleTextItem;
}(__WEBPACK_IMPORTED_MODULE_2__question_multipletext__["a" /* MultipleTextItemModel */]));

var QuestionMultipleTextImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMultipleTextImplementor, _super);
    function QuestionMultipleTextImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRows = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](_this.question.getRows());
        _this.question["koRows"] = _this.koRows;
        _this.onColCountChanged();
        var self = _this;
        _this
            .question.colCountChangedCallback = function () {
            self.onColCountChanged();
        };
        return _this;
    }
    QuestionMultipleTextImplementor.prototype.onColCountChanged = function () {
        this.koRows(this.question.getRows());
    };
    return QuestionMultipleTextImplementor;
}(__WEBPACK_IMPORTED_MODULE_3__koquestion__["a" /* QuestionImplementor */]));

var QuestionMultipleText = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMultipleText, _super);
    function QuestionMultipleText(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionMultipleTextImplementor(_this);
        return _this;
    }
    QuestionMultipleText.prototype.createTextItem = function (name, title) {
        return new MultipleTextItem(name, title);
    };
    return QuestionMultipleText;
}(__WEBPACK_IMPORTED_MODULE_2__question_multipletext__["b" /* QuestionMultipleTextModel */]));

__WEBPACK_IMPORTED_MODULE_5__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("multipletextitem", function () {
    return new MultipleTextItem("");
});
__WEBPACK_IMPORTED_MODULE_5__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("multipletext", function () {
    return new QuestionMultipleText("");
});
__WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("multipletext", function (name) {
    var q = new QuestionMultipleText(name);
    q.addItem("text1");
    q.addItem("text2");
    return q;
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koquestion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_paneldynamic__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kopage__ = __webpack_require__(21);
/* unused harmony export QuestionPanelDynamicImplementor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPanelDynamic; });








var QuestionPanelDynamicImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionPanelDynamicImplementor, _super);
    function QuestionPanelDynamicImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRecalc = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        _this.koPanels = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            this.koRecalc();
            return this.question.panels;
        }, _this);
        _this.question["koPanels"] = _this.koPanels;
        var self = _this;
        _this.koAddPanelClick = function () {
            self.addPanel();
        };
        _this.koRemovePanelClick = function (data) {
            self.removePanel(data);
        };
        _this.koPrevPanelClick = function () {
            self.question.currentIndex--;
        };
        _this.koNextPanelClick = function () {
            self.question.currentIndex++;
        };
        _this.koCanAddPanel = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.canAddPanel;
        });
        _this.koCanRemovePanel = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.canRemovePanel;
        });
        _this.koIsPrevButton = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.isPrevButtonShowing;
        });
        _this.koIsNextButton = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.isNextButtonShowing;
        });
        _this.koIsRange = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.isRangeShowing;
        });
        _this.koPanel = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.currentPanel;
        });
        _this.koIsList = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.isRenderModeList;
        });
        _this.koIsProgressTop = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.isProgressTopShowing;
        });
        _this.koIsProgressBottom = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.isProgressBottomShowing;
        });
        _this.koRangeValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](self.question.currentIndex);
        _this.koRangeValue.subscribe(function (newValue) {
            self.question.currentIndex = newValue;
        });
        _this.koRangeMax = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            self.koRecalc();
            return self.question.panelCount - 1;
        });
        _this.question["koAddPanelClick"] = _this.koAddPanelClick;
        _this.question["koRemovePanelClick"] = _this.koRemovePanelClick;
        _this.question["koPrevPanelClick"] = _this.koPrevPanelClick;
        _this.question["koNextPanelClick"] = _this.koNextPanelClick;
        _this.question["koCanAddPanel"] = _this.koCanAddPanel;
        _this.question["koCanRemovePanel"] = _this.koCanRemovePanel;
        _this.question["koPanel"] = _this.koPanel;
        _this.question["koIsList"] = _this.koIsList;
        _this.question["koIsProgressTop"] = _this.koIsProgressTop;
        _this.question["koIsProgressBottom"] = _this.koIsProgressBottom;
        _this.question["koIsPrevButton"] = _this.koIsPrevButton;
        _this.question["koIsNextButton"] = _this.koIsNextButton;
        _this.question["koIsRange"] = _this.koIsRange;
        _this.question["koRangeValue"] = _this.koRangeValue;
        _this.question["koRangeMax"] = _this.koRangeMax;
        _this.question["koPanelAfterRender"] = function (el, con) {
            self.panelAfterRender(el, con);
        };
        _this
            .question.panelCountChangedCallback = function () {
            self.onPanelCountChanged();
        };
        _this
            .question.renderModeChangedCallback = function () {
            self.onRenderModeChanged();
        };
        _this
            .question.currentIndexChangedCallback = function () {
            self.onCurrentIndexChanged();
        };
        return _this;
    }
    QuestionPanelDynamicImplementor.prototype.onPanelCountChanged = function () {
        this.onCurrentIndexChanged();
    };
    QuestionPanelDynamicImplementor.prototype.onRenderModeChanged = function () {
        this.onCurrentIndexChanged();
    };
    QuestionPanelDynamicImplementor.prototype.onCurrentIndexChanged = function () {
        this.koRecalc(this.koRecalc() + 1);
        this.koRangeValue(this.question.currentIndex);
    };
    QuestionPanelDynamicImplementor.prototype.addPanel = function () {
        this.question.addPanelUI();
    };
    QuestionPanelDynamicImplementor.prototype.removePanel = function (val) {
        var q = this.question;
        if (!q.isRenderModeList) {
            val = q.currentPanel;
        }
        q.removePanelUI(val);
    };
    QuestionPanelDynamicImplementor.prototype.panelAfterRender = function (elements, con) {
        if (!this.question || !this.question.survey)
            return;
        var el = __WEBPACK_IMPORTED_MODULE_2__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
        this.question.survey.afterRenderPanel(con, el);
    };
    return QuestionPanelDynamicImplementor;
}(__WEBPACK_IMPORTED_MODULE_5__koquestion__["a" /* QuestionImplementor */]));

var QuestionPanelDynamic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionPanelDynamic, _super);
    function QuestionPanelDynamic(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionPanelDynamicImplementor(_this);
        return _this;
    }
    QuestionPanelDynamic.prototype.createNewPanelObject = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__kopage__["c" /* Panel */]();
    };
    return QuestionPanelDynamic;
}(__WEBPACK_IMPORTED_MODULE_6__question_paneldynamic__["a" /* QuestionPanelDynamicModel */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("paneldynamic", function () {
    return new QuestionPanelDynamic("");
});
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("paneldynamic", function (name) {
    return new QuestionPanelDynamic(name);
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_radiogroup__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion_baseselect__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRadiogroup; });





var QuestionRadiogroup = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRadiogroup, _super);
    function QuestionRadiogroup(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_4__koquestion_baseselect__["b" /* QuestionCheckboxBaseImplementor */](_this);
        return _this;
    }
    QuestionRadiogroup.prototype.getItemClass = function (item) {
        var itemClass = this.cssClasses.item +
            (this.colCount === 0 ? " sv_q_radiogroup_inline" : "");
        if (item.value === this["koValue"]())
            itemClass += " checked";
        return itemClass;
    };
    return QuestionRadiogroup;
}(__WEBPACK_IMPORTED_MODULE_1__question_radiogroup__["a" /* QuestionRadiogroupModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("radiogroup", function () {
    return new QuestionRadiogroup("");
});
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("radiogroup", function (name) {
    var q = new QuestionRadiogroup(name);
    q.choices = __WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].DefaultChoices;
    return q;
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koquestion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_rating__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRating; });






var QuestionRatingImplementor = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRatingImplementor, _super);
    function QuestionRatingImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koVisibleRateValues = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](_this.getValues());
        _this.question["koVisibleRateValues"] = _this.koVisibleRateValues;
        var self = _this;
        _this.koChange = function (val) {
            self.koValue(val.itemValue);
        };
        _this.question["koChange"] = _this.koChange;
        _this.question.rateValuesChangedCallback = function () {
            self.onRateValuesChanged();
        };
        _this.question["koGetCss"] = function (val) {
            var css = self.question.itemCss;
            var selected = self.question.selectedCss;
            return self.question["koValue"]() == val.value
                ? css + " " + selected
                : css;
        };
        return _this;
    }
    QuestionRatingImplementor.prototype.onRateValuesChanged = function () {
        this.koVisibleRateValues(this.getValues());
    };
    QuestionRatingImplementor.prototype.getValues = function () {
        return this.question.visibleRateValues;
    };
    return QuestionRatingImplementor;
}(__WEBPACK_IMPORTED_MODULE_2__koquestion__["a" /* QuestionImplementor */]));
var QuestionRating = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRating, _super);
    function QuestionRating(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionRatingImplementor(_this);
        return _this;
    }
    QuestionRating.prototype.onSetData = function () {
        var css = this.survey ? this.survey["css"] : null;
        if (css && css.rating) {
            this.itemCss = css.rating.item;
            this.selectedCss = css.rating.selected;
        }
    };
    return QuestionRating;
}(__WEBPACK_IMPORTED_MODULE_3__question_rating__["a" /* QuestionRatingModel */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["b" /* JsonObject */].metaData.overrideClassCreatore("rating", function () {
    return new QuestionRating("");
});
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("rating", function (name) {
    return new QuestionRating(name);
});


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-comment\">\r\n    <!-- ko ifnot: question.koIsReadOnly -->\r\n    <input data-bind=\"value: $data.question.koComment, visible: $data.visible, css: question.koCss().comment, attr: { 'aria-label': !!question.locTitle && question.locTitle.renderedHtml }\" />\r\n    <!-- /ko -->\r\n    <!-- ko if: question.koIsReadOnly -->\r\n    <div data-bind=\"text: $data.question.koComment, visible: $data.visible, css: question.koCss().comment\"></div>\r\n    <!-- /ko -->\r\n</script>\r\n";

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<!-- ko template: { name: 'survey-content', afterRender: koEventAfterRender } -->\r\n<!-- /ko -->\r\n<script type=\"text/html\" id=\"survey-content\">\r\n    <div data-bind=\"css: css.root, afterRender: koEventAfterRender\">\r\n        <div class=\"sv_custom_header\"></div>\r\n        <div class=\"sv_container\">\r\n            <div data-bind=\"css: css.header, visible: (title.length > 0) && showTitle && koState() == 'running'\">\r\n                <h3>\r\n                    <!-- ko template: { name: 'survey-string', data: locTitle } -->\r\n                    <!-- /ko -->\r\n                </h3>\r\n            </div>\r\n            <!-- ko if: koState() == \"starting\" -->\r\n            <div data-bind=\"css: css.body\">\r\n                <div data-bind=\"attr: { id: startedPage.id }, template: { name: 'survey-page', data: startedPage, afterRender: koAfterRenderPage }\"></div>\r\n                <div data-bind=\"visible: koIsNavigationButtonsShowing, css: css.footer\">\r\n                    <input type=\"button\" data-bind=\"value: startSurveyText, click: start, css: cssNavigationStart\" />\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: koState() == \"running\" -->\r\n            <div data-bind=\"css: css.body\">\r\n                <!-- ko if: isTimerPanelShowingOnTop -->\r\n                <!-- ko template: { name: 'survey-timerpanel'} -->\r\n                <!-- /ko -->\r\n                <!-- /ko -->\r\n                <div data-bind=\"visible: showProgressBar =='top', template: 'survey-progress'\"></div>\r\n                <div data-bind=\"attr: { id: koCurrentPage().id }, template: { name: 'survey-page', data: koCurrentPage, afterRender: koAfterRenderPage }\"></div>\r\n                <div style=\"margin-top:1em\" data-bind=\"visible: showProgressBar =='bottom', template: 'survey-progress'\"></div>\r\n                <!-- ko if: isTimerPanelShowingOnBottom -->\r\n                <!-- ko template: { name: 'survey-timerpanel'} -->\r\n                <!-- /ko -->\r\n                <!-- /ko -->\r\n                <div data-bind=\"visible: koIsNavigationButtonsShowing, css: css.footer\">\r\n                    <input type=\"button\" data-bind=\"value: pagePrevText, click: prevPage, visible: !koIsFirstPage() && isShowPrevButton, css: cssNavigationPrev\"\r\n                    />\r\n                    <input type=\"button\" data-bind=\"value: pageNextText, click: nextPage, visible: !koIsLastPage(), css: cssNavigationNext\" />\r\n                    <input type=\"button\" data-bind=\"value: completeText, click: completeLastPage, visible: koIsLastPage() && isEditMode, css: cssNavigationComplete\"\r\n                    />\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: koState() == \"completed\" && showCompletedPage -->\r\n            <div data-bind=\"html: processedCompletedHtml, css: completedCss\"></div>\r\n            <div data-bind=\"visible: koCompletedState() != '', css: css.saveData.root\">\r\n                <div data-bind=\"css: koCompletedStateCss\">\r\n                    <span data-bind=\"text:koCompletedStateText\"></span>\r\n                    <input type=\"button\" data-bind=\"visible: koCompletedState() == 'error', value: getLocString('saveAgainButton'), click: doComplete, css: css.saveData.saveAgainButton\"\r\n                    />\r\n                </div>\r\n            </div>\r\n            <!-- /ko -->\r\n            <!-- ko if: koState() == \"completedbefore\" -->\r\n            <div data-bind=\"html: processedCompletedBeforeHtml, css: css.body\"></div>\r\n            <!-- /ko -->\r\n            <!-- ko if: koState() == \"loading\" -->\r\n            <div data-bind=\"html: processedLoadingHtml, css: css.body\"></div>\r\n            <!-- /ko -->\r\n            <!-- ko if: koState() == \"empty\" -->\r\n            <div data-bind=\"text:emptySurveyText, css: css.body\"></div>\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n</script>";

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-matrixcell\">\r\n    <td data-bind=\"css: $context.question.koCss().itemValue\">\r\n        <div data-bind=\"visible: cell.question.koVisible\">\r\n            <!-- ko template: { name: 'survey-question-errors', data: cell.question } -->\r\n            <!-- /ko -->\r\n            <!-- ko template: { name: question.koTemplateName(), data: cell.question, as: 'question' } -->\r\n            <!-- /ko -->\r\n        </div>\r\n    </td>\r\n</script>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-page\">\r\n    <div data-bind=\"css: data.css.page.root\">\r\n        <h4 data-bind=\"visible: (processedTitle.length > 0) && data.showPageTitles, css: data.css.pageTitle\">\r\n            <!-- ko template: { name: 'survey-string', data: locTitle } -->\r\n            <!-- /ko -->\r\n        </h4>\r\n        <div data-bind=\"visible: hasDescription, css: data.css.pageDescription\">\r\n            <!-- ko template: { name: 'survey-string', data: locDescription } -->\r\n            <!-- /ko -->\r\n        </div>\r\n        <!-- ko template: { name: 'survey-rows', data: $data} -->\r\n        <!-- /ko -->\r\n    </div>\r\n</script>";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-panel\">\r\n    <div data-bind=\"style:{ width: koRenderWidth }, attr: {id: id}, css: cssClasses.panel.container\">\r\n        <h4 data-bind=\"visible: (processedTitle.length > 0), css: cssClasses.panel.title, click: doExpand\">\r\n            <!-- ko template: { name: 'survey-string', data: locTitle } -->\r\n            <!-- /ko -->\r\n            <span class=\"sv_panel_icon\" data-bind=\"visible: koIsCollapsed() || koIsExpanded() ,css: {sv_expanded: !koIsCollapsed()}\"></span>\r\n        </h4>\r\n        <div data-bind=\"visible: hasDescription, css: cssClasses.panel.description\">\r\n            <!-- ko template: { name: 'survey-string', data: locDescription } -->\r\n            <!-- /ko -->\r\n        </div>\r\n        <!-- ko template: { name: 'survey-question-errors', data: $data } -->\r\n        <!-- /ko -->\r\n        <div data-bind=\"visible: !koIsCollapsed(), style: { paddingLeft: koInnerMargin }\">\r\n            <!-- ko template: { name: 'survey-rows', data: $data} -->\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n</script>";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-progress\">\r\n    <div data-bind=\"css: css.progress\">\r\n        <div data-bind=\"css: css.progressBar, style:{width: koProgress() + '%'}\"\r\n            role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n            <span data-bind=\"text:koProgressText\"></span>\r\n        </div>\r\n    </div>\r\n</script>";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-boolean\">\r\n    <form data-bind=\"css: question.koCss().root\">\r\n        <label data-bind=\"css: question.getItemCss()\">\r\n            <input type=\"checkbox\" data-bind=\"attr: {name: question.name, id: question.inputId, 'aria-label': question.locTitle.renderedHtml}, checked: question.koCheckedValue, surveyProp: {indeterminate: question.koIndeterminate}, enable: !question.koIsReadOnly()\" />\r\n            <span class=\"checkbox-material\"><span class=\"check\"></span></span>\r\n            <!-- ko template: { name: 'survey-string', data: locDisplayLabel } --><!-- /ko -->\r\n        </label>\r\n    </form>\r\n</script>";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-checkbox\">\r\n    <fieldset data-bind=\"css: question.koCss().root\">\r\n        <!-- ko foreach: { data: question.koVisibleChoices, as: 'item', afterRender: question.koAfterRender}  -->\r\n        <div data-bind=\"style:{display: 'inline-block', width: question.koWidth}, css: question.getItemClass(item)\">\r\n            <label data-bind=\"css: question.koCss().label\">\r\n                <input type=\"checkbox\" data-bind=\"attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : '', 'aria-label': question.locTitle.renderedHtml }, checked: question.koValue, enable: !question.koIsReadOnly(), css: question.koCss().itemControl\"\r\n                />\r\n                <span class=\"checkbox-material\">\r\n                    <span class=\"check\"></span>\r\n                </span>\r\n                <span data-bind=\"css: question.koCss().controlLabel\">\r\n                    <!-- ko template: { name: 'survey-string', data: item.locText } -->\r\n                    <!-- /ko -->\r\n                </span>\r\n            </label>\r\n            <!-- ko if: question.hasOther && ($index() == question.koVisibleChoices().length-1) -->\r\n            <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': question.koOtherVisible } }, css: question.koCss().other\"></div>\r\n            <!-- /ko -->\r\n        </div>\r\n        <!-- /ko -->\r\n        <legend style=\"display: none;\" data-bind=\"text: question.locTitle.renderedHtml\"></legend>\r\n    </fieldset>\r\n</script>";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-comment\">\r\n    <textarea type=\"text\" data-bind=\"attr: {'readonly': question.koIsReadOnly(), cols: question.cols, rows: question.rows, id: question.inputId, placeholder: question.placeHolder, 'aria-label': question.locTitle.renderedHtml}, value:question.koValue, css: question.koCss().root\"></textarea>\r\n</script>\r\n";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-dropdown\">\r\n    <!-- ko ifnot: question.koIsReadOnly -->\r\n    <div data-bind=\"css: question.koCss().selectWrapper\">\r\n        <select data-bind=\"attr: {id: question.inputId, 'aria-label': question.locTitle.renderedHtml}, options: question.koVisibleChoices, optionsText: 'text', optionsValue: 'value', value: question.koValue, optionsCaption: question.optionsCaption, css: question.koCss().control\"></select>\r\n    </div>\r\n    <!-- /ko -->\r\n    <!-- ko if: question.koIsReadOnly -->\r\n    <div data-bind=\"text: question.hasOther && question.isOtherSelected ? question.otherText : question.displayValue, css: question.koCss().control\"></div>\r\n    <!-- /ko -->\r\n    <div data-bind=\"visible: question.hasOther\">\r\n        <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': question.koOtherVisible } }, css: question.koCss().other\"></div>\r\n    </div>\r\n</script>";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-empty\">\r\n<div></div>\r\n</script>\r\n";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-errors\">\r\n    <div role=\"alert\" data-bind=\"visible: koErrors().length > 0, foreach: { data: koErrors, as: 'error'}, css: question.koCss().error.root\">\r\n        <div>\r\n            <span aria-hidden=\"true\" data-bind=\"css: question.koCss().error.icon\"></span>\r\n            <span data-bind=\"text:error.getText(), css: question.koCss().error.item\"></span>\r\n        </div>\r\n    </div>\r\n</script>\r\n";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-expression\">\r\n    <div data-bind=\"text:question.koDisplayValue, css: question.koCss().root\"></div>\r\n</script>";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-file\">\r\n    <div data-bind=\"css: question.cssClasses.root\">\r\n        <!-- ko ifnot: question.koIsReadOnly -->\r\n        <input type=\"file\" data-bind=\"attr: {id: question.inputId, 'aria-label': question.locTitle.renderedHtml, multiple: question.allowMultiple ? 'multiple' : undefined }, event: {change: question.dochange}\">\r\n        <!-- ko if: question.koHasValue -->\r\n        <button data-bind=\"css: question.cssClasses.removeButton, click: question.doclean, text: question.cleanButtonCaption\"></button>\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n        <!-- ko if: question.koIsReadOnly -->\r\n        <input type=\"text\" readonly data-bind=\"css: 'form-control ' + question.cssClasses.placeholderInput, attr: { placeholder: question.title }\"\r\n        />\r\n        <!-- /ko -->\r\n        <div data-bind=\"foreach: question.koData, visible: question.koHasValue\">\r\n            <img data-bind=\"attr: { src: $data, height: question.imageHeight, width: question.imageWidth }, visible: question.showPreview, css: question.cssClasses.preview\"\r\n                alt=\"File preview\">\r\n        </div>\r\n    </div>\r\n</script>";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-html\">\r\n    <div data-bind=\"html: question.processedHtml\"></div>\r\n</script>\r\n";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrix\">\r\n    <fieldset>\r\n        <table data-bind=\"css: question.koCss().root\">\r\n            <thead>\r\n                <tr>\r\n                    <td data-bind=\"visible: question.hasRows\"></td>\r\n                    <!-- ko foreach: question.columns -->\r\n                    <th>\r\n                        <!-- ko template: { name: 'survey-string', data: locText } -->\r\n                        <!-- /ko -->\r\n                    </th>\r\n                    <!-- /ko -->\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <!-- ko foreach: { data: question.visibleRows, as: 'row' } -->\r\n                <tr data-bind=\"css: question.koCss().row\">\r\n                    <td data-bind=\"visible: question.hasRows\">\r\n                        <!-- ko template: { name: 'survey-string', data: row.locText } -->\r\n                        <!-- /ko -->\r\n                    </td>\r\n                    <!-- ko foreach: question.columns -->\r\n                    <td>\r\n                        <label data-bind=\"css: question.getItemCss(row, $data)\">\r\n                            <input type=\"radio\" data-bind=\"css: question.koCss().itemValue, attr: {name: row.fullName, 'aria-label': question.locTitle.renderedHtml, value: $data.value, id: ($index() == 0) && ($parentContext.$index() == 0) ? question.inputId : ''}, checked: row.koValue, enable: !question.koIsReadOnly()\"\r\n                            />\r\n                            <span class=\"circle\"></span>\r\n                            <span class=\"check\"></span>\r\n                            <span style=\"display: none\" data-bind=\"text: $data.locText.text\"></span>\r\n                        </label>\r\n                    </td>\r\n                    <!-- /ko -->\r\n                </tr>\r\n                <!-- /ko -->\r\n            </tbody>\r\n        </table>\r\n        <legend style=\"display: none;\" data-bind=\"text: question.locTitle.renderedHtml\"></legend>\r\n    </fieldset>\r\n</script>\r\n<script type=\"text/html\" id=\"survey-text\">\r\n    <span data-bind=\"text:$data.renderedHtml\"></span>\r\n</script>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrixdropdown\">\r\n    <div data-bind=\"style: {overflowX: question.horizontalScroll? 'scroll': ''}\">\r\n        <table data-bind=\"css: question.koCss().root\">\r\n            <thead>\r\n                <tr>\r\n                    <td></td>\r\n                    <!-- ko foreach: question.columns -->\r\n                    <th data-bind=\"style: { minWidth: question.getColumnWidth($data) }\"><!-- ko template: { name: 'survey-string', data: locTitle } --><!-- /ko --></th>\r\n                    <!-- /ko -->\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <!-- ko foreach: { data: question.visibleRows, as: 'row' } -->\r\n                <tr>\r\n                    <td><!-- ko template: { name: 'survey-string', data: row.locText } --><!-- /ko --></td>\r\n                    <!-- ko foreach: row.cells-->\r\n                        <!-- ko template: { name: 'survey-matrixcell', data: $data, as: \"cell\", afterRender: $data.data.koCellAfterRender } -->\r\n                        <!-- /ko -->\r\n                        <!-- /ko -->\r\n                </tr>\r\n                <!-- /ko -->\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</script>\r\n";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrixdynamic\">\r\n    <div data-bind=\"style: {overflowX: question.horizontalScroll? 'scroll': ''}\">\r\n        <table data-bind=\"css: question.koCss().root\">\r\n            <thead>\r\n                <tr>\r\n                    <!-- ko foreach: question.columns -->\r\n                    <th data-bind=\"style: { minWidth: question.getColumnWidth($data) }\">\r\n                        <!-- ko template: { name: 'survey-string', data: locTitle } -->\r\n                        <!-- /ko -->\r\n                    </th>\r\n                    <!-- /ko -->\r\n                    <!-- ko ifnot: question.koIsReadOnly -->\r\n                    <td></td>\r\n                    <!-- /ko -->\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <!-- ko foreach: { data: question.koRows, as: 'row' } -->\r\n                <tr>\r\n                    <!-- ko foreach: row.cells-->\r\n                    <!-- ko template: { name: 'survey-matrixcell', data: $data, as: \"cell\", afterRender: $data.data.koCellAfterRender } -->\r\n                    <!-- /ko -->\r\n                    <!-- /ko -->\r\n                    <!-- ko ifnot: question.koIsReadOnly -->\r\n                    <td>\r\n                        <input type=\"button\" data-bind=\"visible: question.koCanRemoveRow, click:question.koRemoveRowClick, css: question.koCss().button, value: question.removeRowText\"\r\n                        />\r\n                    </td>\r\n                    <!-- /ko -->\r\n                </tr>\r\n                <!-- /ko -->\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div data-bind=\"css: question.koCss().footer\">\r\n        <!-- ko ifnot: question.koIsReadOnly() || !question.koCanAddRow() -->\r\n        <input type=\"button\" data-bind=\"click:question.koAddRowClick, css: question.koCss().button, value: question.addRowText\" />\r\n        <!-- /ko -->\r\n    </div>\r\n</script>";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-multipletext\">\r\n    <table data-bind=\"css: question.koCss().root, foreach: { data:  question.koRows, as: 'row' }\">\r\n        <tr data-bind=\"foreach: { data: row, as: 'item' }, css: question.koCss().row\">\r\n            <td data-bind=\"css: question.koCss().itemTitle\"><!-- ko template: { name: 'survey-string', data: item.locTitle } --><!-- /ko --></td>\r\n            <td>\r\n                <!-- ko ifnot: question.koIsReadOnly -->\r\n                <input data-bind=\"attr: {attr: {id: item.id}, type: item.inputType, size: question.itemSize, id: ($index() == 0) ? question.inputId : '', placeholder: item.placeHolder, 'aria-label': question.locTitle.renderedHtml}, value: item.koValue, css: question.koCss().itemValue\" />\r\n                <!-- /ko -->\r\n                <!-- ko if: question.koIsReadOnly -->\r\n                <div data-bind=\"attr: {size: question.itemSize}, text: item.koValue, css: question.koCss().itemValue\"></div>\r\n                <!-- /ko -->\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</script>\r\n";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-paneldynamic-navigator\">\r\n    <input type=\"range\" min=\"0\" style=\"width:25%;float:left;margin:5px\" data-bind=\"visible: koIsRange, value: question.koRangeValue, attr: {max: question.koRangeMax}\" />\r\n    <input type=\"button\" style=\"float:left;margin:5px\" data-bind=\"visible: question.koIsPrevButton, click:question.koPrevPanelClick, css: question.koCss().button, value: question.panelPrevText\" />\r\n    <input type=\"button\" style=\"float:left;margin:5px\" data-bind=\"visible: question.koIsNextButton, click:question.koNextPanelClick, css: question.koCss().button, value: question.panelNextText\" />\r\n    <input type=\"button\" style=\"float:left;margin:5px\" data-bind=\"visible:question.koCanAddPanel, click:question.koAddPanelClick, css: question.koCss().button, value: question.panelAddText\" />\r\n</script>\r\n";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-paneldynamic\">\r\n    <div data-bind=\"css: question.koCss().root\">\r\n        <!-- ko if: question.koIsList() -->\r\n        <!-- ko foreach: { data: question.koPanels } -->\r\n        <!-- ko template: { name: 'survey-panel', data: $data, as: 'question', afterRender: question.koPanelAfterRender } -->\r\n        <!-- /ko -->\r\n        <input type=\"button\" style=\"margin-top:5px\" data-bind=\"visible: question.koCanRemovePanel, click:question.koRemovePanelClick, css: question.koCss().button, value: question.panelRemoveText\"\r\n        />\r\n        <hr/>\r\n        <!-- /ko -->\r\n        <input type=\"button\" data-bind=\"visible:question.koCanAddPanel, click:question.koAddPanelClick, css: question.koCss().button, value: question.panelAddText\"\r\n        />\r\n        <!-- /ko -->\r\n        <!-- ko ifnot: question.koIsList()  -->\r\n        <div data-bind=\"visible:question.koIsProgressTop\">\r\n            <!-- ko template: { name: 'survey-question-paneldynamic-navigator', data: question, as: 'question'} -->\r\n            <!-- /ko -->\r\n        </div>\r\n        <!-- ko template: { name: 'survey-panel', data: question.koPanel(), as: 'question', afterRender: question.koPanelAfterRender } -->\r\n        <!-- /ko -->\r\n        <input type=\"button\" style=\"margin-top:5px\" data-bind=\"visible: question.koCanRemovePanel, click:question.koRemovePanelClick, css: question.koCss().button, value: question.panelRemoveText\"\r\n        />\r\n        <div data-bind=\"visible:question.koIsProgressBottom\">\r\n            <!-- ko template: { name: 'survey-question-paneldynamic-navigator', data: question, as: 'question'} -->\r\n            <!-- /ko -->\r\n        </div>\r\n        <!-- /ko -->\r\n    </div>\r\n</script>";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-radiogroup\">\r\n    <fieldset data-bind=\"css: question.koCss().root\">\r\n        <!-- ko foreach: { data: question.koVisibleChoices, as: 'item', afterRender: question.koAfterRender}  -->\r\n        <div data-bind=\"style:{display: 'inline-block', width: question.koWidth}, css: question.getItemClass(item)\">\r\n            <label data-bind=\"css: question.koCss().label\">\r\n                <input type=\"radio\" data-bind=\"attr: {name: question.name + '_' + question.id, value: item.value, id: ($index() == 0) ? question.inputId : '', 'aria-label': question.locTitle.renderedHtml}, checked: question.koValue, enable: !question.koIsReadOnly(), css: question.koCss().itemControl\"\r\n                />\r\n                <span class=\"circle\"></span>\r\n                <span class=\"check\"></span>\r\n                <span data-bind=\"css: question.koCss().controlLabel\">\r\n                    <!-- ko template: { name: 'survey-string', data: item.locText } -->\r\n                    <!-- /ko -->\r\n                </span>\r\n            </label>\r\n            <!-- ko if: question.hasOther && ($index() == question.koVisibleChoices().length-1) -->\r\n            <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': question.koOtherVisible}}, css: question.koCss().other\"></div>\r\n            <!-- /ko -->\r\n        </div>\r\n        <!-- /ko -->\r\n        <legend style=\"display: none;\" data-bind=\"text: question.locTitle.renderedHtml\"></legend>\r\n    </fieldset>\r\n</script>";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-rating\">\r\n    <div data-bind=\"css: question.koCss().root\">\r\n        <!-- ko foreach: question.koVisibleRateValues -->\r\n        <label data-bind=\"css: question.koGetCss($data)\">\r\n            <input type=\"radio\" style=\"display: none;\" data-bind=\"attr: {name: question.name, id: question.name + $index(), value: $data.value, 'aria-label': $data.locText.text}, event: { change: question.koChange}, enable: !question.koIsReadOnly()\"\r\n            />\r\n            <!-- ko if: $index() == 0 -->\r\n            <span data-bind=\"css: question.koCss().minText\">\r\n                <!-- ko template: { name: 'survey-string', data: question.locMinRateDescription } -->\r\n                <!-- /ko -->\r\n            </span>\r\n            <!-- /ko -->\r\n\r\n            <span data-bind=\"css: question.koCss().itemText\">\r\n                <!-- ko template: { name: 'survey-string', data: $data.locText } -->\r\n                <!-- /ko -->\r\n            </span>\r\n\r\n            <!-- ko if: $index() == (question.koVisibleRateValues().length-1) -->\r\n            <span data-bind=\"css: question.koCss().maxText\">\r\n                <!-- ko template: { name: 'survey-string', data: question.locMaxRateDescription } -->\r\n                <!-- /ko -->\r\n            </span>\r\n            <!-- /ko -->\r\n        </label>\r\n        <!-- /ko -->\r\n    </div>\r\n    <div data-bind=\"visible: question.hasOther\">\r\n        <div data-bind=\"template: { name: 'survey-comment', data: {'question': question } }\"></div>\r\n    </div>\r\n</script>";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-text\">\r\n    <!-- ko ifnot: question.koIsReadOnly -->\r\n    <input data-bind=\"attr: {type: question.inputType, size: question.size, id: question.inputId, placeholder: question.placeHolder, 'aria-label': question.locTitle.renderedHtml}, value:question.koValue, css: question.koCss().root\"/>\r\n    <!-- /ko -->\r\n    <!-- ko if: question.koIsReadOnly -->\r\n    <div data-bind=\"text:question.koValue, css: question.koCss().root\"></div>\r\n    <!-- /ko -->\r\n</script>\r\n";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question\">\r\n    <div data-bind=\"css: question.koRootClass, style: { paddingLeft: question.koPaddingLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth }, attr: {id: question.id}\">\r\n        <div data-bind=\"css: {'title-left': question.hasTitleOnLeft}\">\r\n            <!-- ko if: question.hasTitleOnLeftTop -->\r\n            <!--ko template: { name: 'survey-question-title', data: question  } -->\r\n            <!-- /ko -->\r\n            <!-- /ko -->\r\n        </div>\r\n\r\n        <div data-bind=\"css: {'content-left': question.hasTitleOnLeft}\">\r\n            <!-- ko if: question.errorLocation == 'top' -->\r\n            <!-- ko template: { name: 'survey-question-errors', data: question } -->\r\n            <!-- /ko -->\r\n            <!-- /ko -->\r\n            <!-- ko template: { name: question.koTemplateName(), data: question, afterRender: question.koQuestionAfterRender } -->\r\n            <!-- /ko -->\r\n            <div data-bind=\"visible: question.hasComment\">\r\n                <div data-bind=\"text:question.commentText\"></div>\r\n                <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': true } }\"></div>\r\n            </div>\r\n            <!-- ko if: question.errorLocation == 'bottom' -->\r\n            <!-- ko template: { name: 'survey-question-errors', data: question } -->\r\n            <!-- /ko -->\r\n            <!-- /ko -->\r\n            <!-- ko if: question.hasTitleOnBottom -->\r\n            <!--ko template: { name: 'survey-question-title', data: question  } -->\r\n            <!-- /ko -->\r\n            <!-- /ko -->\r\n        </div>\r\n    </div>\r\n</script>";

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-title\">\r\n    <h5 data-bind=\"css: koCss().title\">\r\n        <!-- ko template: { name: 'survey-string', data: locTitle } --><!-- /ko -->\r\n    </h5>\r\n    <div data-bind=\"visible: hasDescription, css: koCss().description\">\r\n        <!-- ko template: { name: 'survey-string', data: locDescription } --><!-- /ko -->\r\n    </div>\r\n</script>";

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-rows\">\r\n    <!-- ko foreach: { data: koRows, as: 'row'} -->\r\n    <!-- ko if: row.koVisible -->\r\n    <div data-bind=\"css: panel.cssClasses.row\">\r\n        <!-- ko foreach: { data: row.koElements, as: 'question' , afterRender: row.koAfterRender } -->\r\n        <!-- ko if: question.koVisible -->\r\n        <!-- ko template: { name: question.koElementType, data: question, afterRender: $parent.koElementAfterRender } -->\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n    </div>\r\n    <!-- /ko -->\r\n    <!-- /ko -->\r\n</script>";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-string\">\r\n    <!-- ko ifnot: hasHtml -->\r\n    <span style=\"position: static;\" data-bind=\"text: koRenderedHtml\"></span>\r\n    <!-- /ko -->\r\n    <!-- ko if: hasHtml -->\r\n    <span style=\"position: static;\" data-bind=\"html: koRenderedHtml\"></span>\r\n    <!-- /ko -->\r\n</script>\r\n";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-timerpanel\">\r\n    <div data-bind=\"text:koTimerInfoText\"></div>\r\n</script>\r\n";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(75) + "\n" + __webpack_require__(74) + "\n" + __webpack_require__(77) + "\n" + __webpack_require__(78) + "\n" + __webpack_require__(79) + "\n" + __webpack_require__(100) + "\n" + __webpack_require__(101) + "\n" + __webpack_require__(102) + "\n" + __webpack_require__(76) + "\n" + __webpack_require__(98) + "\n" + __webpack_require__(99) + "\n" + __webpack_require__(81) + "\n" + __webpack_require__(82) + "\n" + __webpack_require__(83) + "\n" + __webpack_require__(85) + "\n" + __webpack_require__(87) + "\n" + __webpack_require__(88) + "\n" + __webpack_require__(89) + "\n" + __webpack_require__(90) + "\n" + __webpack_require__(91) + "\n" + __webpack_require__(94) + "\n" + __webpack_require__(93) + "\n" + __webpack_require__(92) + "\n" + __webpack_require__(95) + "\n" + __webpack_require__(96) + "\n" + __webpack_require__(97) + "\n" + __webpack_require__(80) + "\n" + __webpack_require__(84) + "\n" + __webpack_require__(86) + "\n";

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: fixed; bottom: 3px; right: 10px;\" data-bind=\"css: css.window.root\">\n    <div data-bind=\"css: css.window.header.root\">\n        <span data-bind=\"click:doExpand\" style=\"width: 100%; cursor: pointer;\">\n            <span style=\"padding-right:10px\" data-bind=\"css: css.window.header.title, text: locTitle.koRenderedHtml\"></span>\n            <span aria-hidden=\"true\" data-bind=\"css: koExpandedCss\"></span>\n        </span>\n    </div>\n    <div data-bind=\"visible:koExpanded, css: css.window.body\">\n        <div id=\"windowSurveyJS\"></div>\n    </div>\n</div>";

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export arabicSurveyStrings */

var arabicSurveyStrings = {
    pagePrevText: "السابق",
    pageNextText: "التالي",
    completeText: "انهاء- تم",
    progressText: "{1} صفحة {0} من",
    otherItemText: "نص آخر",
    emptySurvey: "لا توجد صفحة مرئية أو سؤال في المسح",
    completingSurvey: "شكرا لك لاستكمال الاستبيان!",
    loadingSurvey: "...يتم تحميل الاستبيان",
    optionsCaption: "...اختر",
    requiredError: ".يرجى الإجابة على السؤال",
    requiredInAllRowsError: "يرجى الإجابة على الأسئلة في جميع الصفوف",
    numericError: "يجب أن تكون القيمة الرقمية.",
    textMinLength: "الرجاء إدخال ما لا يقل عن {0} حرف",
    textMaxLength: "الرجاء إدخال أقل من {0} حرف",
    textMinMaxLength: "يرجى إدخال أكثر من {0} وأقل من {1} حرف",
    minRowCountError: "يرجى ملء ما لا يقل عن {0} الصفوف",
    minSelectError: "يرجى تحديد ما لا يقل عن {0} المتغيرات",
    maxSelectError: "يرجى تحديد ما لا يزيد عن {0} المتغيرات",
    numericMinMax: "و'{0}' يجب أن تكون مساوية أو أكثر من {1} ويساوي أو أقل من {2}ا",
    numericMin: "و'{0}' يجب أن تكون مساوية أو أكثر من {1}ا",
    numericMax: "و'{0}' يجب أن تكون مساوية أو أقل من {1}ا",
    invalidEmail: "رجاء قم بإدخال بريد الكتروني صحيح",
    urlRequestError: "طلب إرجاع خطأ '{0}'. {1}ا",
    urlGetChoicesError: "عاد طلب بيانات فارغة أو 'المسار' ممتلكات غير صحيحة ",
    exceedMaxSize: "وينبغي ألا يتجاوز حجم الملف {0}ا",
    otherRequiredError: "الرجاء إدخال قيمة أخرى",
    uploadingFile: "الملف الخاص بك تحميل. يرجى الانتظار عدة ثوان وحاول مرة أخرى",
    addRow: "اضافة صف",
    removeRow: "إزالة صف"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ar"] = arabicSurveyStrings;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export catalanSurveyStrings */

var catalanSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Següent",
    completeText: "Complet",
    otherItemText: "Un altre (descrigui)",
    progressText: "Pàgina {0} de {1}",
    emptySurvey: "No hi ha cap pàgina visible o pregunta a l'enquesta.",
    completingSurvey: "Gràcies per completar l'enquesta!",
    loadingSurvey: "L'enquesta s'està carregant ...",
    optionsCaption: "Selecciona ...",
    requiredError: "Si us plau contesti la pregunta.",
    requiredInAllRowsError: "Si us plau contesti les preguntes de cada filera.",
    numericError: "L'estimació ha de ser numèrica.",
    textMinLength: "Si us plau entre almenys {0} símbols.",
    textMaxLength: "Si us plau entre menys de {0} símbols.",
    textMinMaxLength: "Si us plau entre més de {0} i menys de {1} símbols.",
    minRowCountError: "Si us plau ompli almenys {0} fileres.",
    minSelectError: "Si us plau seleccioni almenys {0} variants.",
    maxSelectError: "Si us plau seleccioni no més de {0} variants.",
    numericMinMax: "El '{0}' deu ser igual o més de {1} i igual o menys de {2}",
    numericMin: "El '{0}' ha de ser igual o més de {1}",
    numericMax: "El '{0}' ha de ser igual o menys de {1}",
    invalidEmail: "Si us plau afegiu un correu electrònic vàlid.",
    urlRequestError: "La sol·licitud va tornar error '{0}'. {1}",
    urlGetChoicesError: "La sol·licitud va tornar buida de dates o la propietat 'trajectòria' no és correcta",
    exceedMaxSize: "La mida de l'arxiu no pot excedir {0}.",
    otherRequiredError: "Si us plau afegiu l'altra estimació.",
    uploadingFile: "El seu arxiu s'està pujant. Si us plau esperi uns segons i intenteu-ho de nou.",
    addRow: "Afegiu una filera",
    removeRow: "Eliminar una filera",
    choices_firstItem: "primer article",
    choices_secondItem: "segon article",
    choices_thirdItem: "tercer article",
    matrix_column: "Columna",
    matrix_row: "Filera"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ca"] = catalanSurveyStrings;


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export czechSurveyStrings */

var czechSurveyStrings = {
    pagePrevText: "Předchozí",
    pageNextText: "Další",
    completeText: "Hotovo",
    otherItemText: "Jiná odpověď (napište)",
    progressText: "Strana {0} z {1}",
    emptySurvey: "Průzkumu neobsahuje žádné otázky.",
    completingSurvey: "Děkujeme za vyplnění průzkumu!",
    loadingSurvey: "Probíhá načítání průzkumu...",
    optionsCaption: "Vyber...",
    requiredError: "Odpovězte prosím na otázku.",
    requiredInAllRowsError: "Odpovězte prosím na všechny otázky.",
    numericError: "V tomto poli lze zadat pouze čísla.",
    textMinLength: "Zadejte prosím alespoň {0} znaků.",
    textMaxLength: "Zadejte prosím méně než {0} znaků.",
    textMinMaxLength: "Zadejte prosím více než {0} a méně než {1} znaků.",
    minRowCountError: "Vyplňte prosím alespoň {0} řádků.",
    minSelectError: "Vyberte prosím alespoň {0} varianty.",
    maxSelectError: "Nevybírejte prosím více než {0} variant.",
    numericMinMax: "Odpověď '{0}' by mělo být větší nebo rovno {1} a menší nebo rovno {2}",
    numericMin: "Odpověď '{0}' by mělo být větší nebo rovno {1}",
    numericMax: "Odpověď '{0}' by mělo být menší nebo rovno {1}",
    invalidEmail: "Zadejte prosím platnou e-mailovou adresu.",
    urlRequestError: "Požadavek vrátil chybu '{0}'. {1}",
    urlGetChoicesError: "Požadavek nevrátil data nebo cesta je neplatná",
    exceedMaxSize: "Velikost souboru by neměla být větší než {0}.",
    otherRequiredError: "Zadejte prosím jinou hodnotu.",
    uploadingFile: "Váš soubor se nahrává. Zkuste to prosím za několik sekund.",
    addRow: "Přidat řádek",
    removeRow: "Odstranit"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["cz"] = czechSurveyStrings;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export danishSurveyStrings */

var danishSurveyStrings = {
    pagePrevText: "Tilbage",
    pageNextText: "Videre",
    completeText: "Færdig",
    progressText: "Side {0} af {1}",
    emptySurvey: "Der er ingen synlige spørgsmål.",
    completingSurvey: "Mange tak for din besvarelse!",
    loadingSurvey: "Spørgeskemaet hentes fra serveren...",
    otherItemText: "Valgfrit svar...",
    optionsCaption: "Vælg...",
    requiredError: "Besvar venligst spørgsmålet.",
    numericError: "Angiv et tal.",
    textMinLength: "Angiv mindst {0} tegn.",
    minSelectError: "Vælg venligst mindst  {0} svarmulighed(er).",
    maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
    numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
    numericMin: "'{0}' skal være lig med eller større end {1}",
    numericMax: "'{0}' skal være lig med eller mindre end {1}",
    invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
    exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
    otherRequiredError: "Angiv en værdi for dit valgfrie svar."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["da"] = danishSurveyStrings;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export dutchSurveyStrings */
//Created on behalf https://github.com/Frank13

var dutchSurveyStrings = {
    pagePrevText: "Vorige",
    pageNextText: "Volgende",
    completeText: "Afsluiten",
    otherItemText: "Andere",
    progressText: "Pagina {0} van {1}",
    emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
    completingSurvey: "Bedankt om deze vragenlijst in te vullen",
    loadingSurvey: "De vragenlijst is aan het laden...",
    optionsCaption: "Kies...",
    requiredError: "Gelieve een antwoord in te vullen",
    numericError: "Het antwoord moet een getal zijn",
    textMinLength: "Gelieve minsten {0} karakters in te vullen.",
    minSelectError: "Gelieve minimum {0} antwoorden te selecteren.",
    maxSelectError: "Gelieve niet meer dan {0} antwoorden te selecteren.",
    numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
    numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    invalidEmail: "Gelieve een geldig e-mailadres in te vullen.",
    exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}.",
    otherRequiredError: "Gelieve het veld 'Andere' in te vullen"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["nl"] = dutchSurveyStrings;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export finnishSurveyStrings */

var finnishSurveyStrings = {
    pagePrevText: "Edellinen",
    pageNextText: "Seuraava",
    completeText: "Valmis",
    otherItemText: "Muu (kuvaile)",
    progressText: "Sivu {0}/{1}",
    emptySurvey: "Tässä kyselyssä ei ole yhtäkään näkyvillä olevaa sivua tai kysymystä.",
    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
    loadingSurvey: "Kyselyä ladataan palvelimelta...",
    optionsCaption: "Valitse...",
    requiredError: "Vastaa kysymykseen, kiitos.",
    numericError: "Arvon tulee olla numeerinen.",
    textMinLength: "Ole hyvä ja syötä vähintään {0} merkkiä.",
    minSelectError: "Ole hyvä ja valitse vähintään {0} vaihtoehtoa.",
    maxSelectError: "Ole hyvä ja valitse enintään {0} vaihtoehtoa.",
    numericMinMax: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1} ja vähemmän tai yhtä suuri kuin {2}",
    numericMin: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1}",
    numericMax: "'{0}' täytyy olla vähemmän tai yhtä suuri kuin {1}",
    invalidEmail: "Syötä validi sähköpostiosoite.",
    otherRequiredError: 'Ole hyvä ja syötä "Muu (kuvaile)"'
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fi"] = finnishSurveyStrings;


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export frenchSurveyStrings */
//Created on behalf https://github.com/Frank13

var frenchSurveyStrings = {
    pagePrevText: "Pr\u00e9c\u00e9dent",
    pageNextText: "Suivant",
    completeText: "Terminer",
    otherItemText: "Autre (pr\u00e9ciser)",
    progressText: "Page {0} sur {1}",
    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
    completingSurvey: "Merci d'avoir r\u00e9pondu au questionnaire!",
    loadingSurvey: "Le questionnaire est en cours de chargement...",
    optionsCaption: "Choisissez...",
    requiredError: "La r\u00e9ponse \u00e0 cette question est obligatoire.",
    requiredInAllRowsError: "Toutes les lignes sont obligatoires",
    numericError: "La r\u00e9ponse doit \u00eatre un nombre.",
    textMinLength: "Merci d'entrer au moins {0} symboles.",
    minSelectError: "Merci de s\u00e9lectionner au moins {0}r\u00e9ponses.",
    maxSelectError: "Merci de s\u00e9lectionner au plus {0}r\u00e9ponses.",
    numericMinMax: "Votre r\u00e9ponse '{0}' doit \u00eatresup\u00e9rieure ou \u00e9gale \u00e0 {1} et inf\u00e9rieure ou\u00e9gale \u00e0 {2}",
    numericMin: "Votre r\u00e9ponse '{0}' doit \u00eatresup\u00e9rieure ou \u00e9gale \u00e0 {1}",
    numericMax: "Votre r\u00e9ponse '{0}' doit \u00eatreinf\u00e9rieure ou \u00e9gale \u00e0 {1}",
    invalidEmail: "Merci d'entrer une adresse mail valide.",
    exceedMaxSize: "La taille du fichier ne doit pas exc\u00e9der {0}.",
    otherRequiredError: "Merci de pr\u00e9ciser le champ 'Autre'."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fr"] = frenchSurveyStrings;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export georgianSurveyStrings */

var georgianSurveyStrings = {
    pagePrevText: "უკან",
    pageNextText: "შემდეგ",
    completeText: "დასრულება",
    progressText: "გვერდი {0} / {1}",
    emptySurvey: "არცერთი კითხვა არ არის.",
    completingSurvey: "გმადლობთ კითხვარის შევსებისთვის!",
    loadingSurvey: "ჩატვირთვა სერვერიდან...",
    otherItemText: "სხვა (გთხოვთ მიუთითეთ)",
    optionsCaption: "არჩევა...",
    requiredError: "გთხოვთ უპასუხეთ კითხვას.",
    numericError: "პასუხი უნდა იყოს რიცხვი.",
    textMinLength: "გთხოვთ შეიყვანეთ არანაკლებ {0} სიმბოლო.",
    minSelectError: "გთხოვთ აირჩიეთ არანაკლებ {0} ვარიანტი.",
    maxSelectError: "გთხოვთ აირჩიეთ არაუმეტეს {0} ვარიანტი.",
    numericMinMax: "'{0}' უნდა იყოს მეტი ან ტოლი, ვიდრე {1}, და ნაკლები ან ტოლი ვიდრე {2}",
    numericMin: "'{0}' უნდა იყოს მეტი ან ტოლი ვიდრე {1}",
    numericMax: "'{0}' უნდა იყოს ნაკლები ან ტოლი ვიდრე {1}",
    invalidEmail: "გთხოვთ შეიყვანოთ ელ. ფოსტის რეალური მისამართი.",
    otherRequiredEror: "გთხოვთ შეავსეთ ველი 'სხვა'"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ka"] = georgianSurveyStrings;


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export germanSurveyStrings */

var germanSurveyStrings = {
    pagePrevText: "Zurück",
    pageNextText: "Weiter",
    completeText: "Absenden",
    progressText: "Seite {0} von {1}",
    emptySurvey: "Es gibt keine sichtbare Frage.",
    completingSurvey: "Vielen Dank für die Beantwortung des Fragebogens!",
    loadingSurvey: "Der Fragebogen wird vom Server geladen...",
    otherItemText: "Benutzerdefinierte Antwort...",
    optionsCaption: "Wählen...",
    requiredError: "Bitte beantworten Sie diese Frage.",
    numericError: "Der Wert sollte eine Zahl sein.",
    textMinLength: "Bitte geben Sie mindestens {0} Zeichen ein.",
    minSelectError: "Bitte wählen Sie mindestens {0} Einträge.",
    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Einträge.",
    numericMinMax: "'{0}' sollte gleich oder größer sein als {1} und gleich oder kleiner als {2}.",
    numericMin: "'{0}' sollte gleich oder größer sein als {1}.",
    numericMax: "'{0}' sollte gleich oder kleiner als {1} sein.",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail Adresse ein.",
    exceedMaxSize: "Die Dateigröße darf {0} KB nicht überschreiten.",
    otherRequiredError: "Bitte geben Sie Ihre benutzerdefinierte Antwort ein."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["de"] = germanSurveyStrings;


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export greekSurveyStrings */
//Created by https://github.com/agelospanagiotakis

var greekSurveyStrings = {
    pagePrevText: "Προηγούμενο",
    pageNextText: "Επόμενο",
    completeText: "Ολοκλήρωση",
    otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
    progressText: "Σελίδα {0} από {1}",
    emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
    completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτου του ερωτηματολογίου!",
    loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
    optionsCaption: "Επιλέξτε...",
    requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
    requiredInAllRowsError: "Παρακαλώ απαντήστε στις ερωτήσεις σε όλες τις γραμμές.",
    numericError: "Η τιμή πρέπει να είναι αριθμιτική.",
    textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} σύμβολα.",
    minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
    minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
    maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
    numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
    numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
    numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
    invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
    urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
    urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδότητα 'μονοπάτι/path' είναι εσφαλέμένη",
    exceedMaxSize: "Το μέγεθος δεν μπορεί να υπερβένει τα {0}.",
    otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
    uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε καποια δευτερόλεπτα και δοκιμάστε ξανά.",
    addRow: "Προσθήκη γραμμής",
    removeRow: "Αφαίρεση"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["gr"] = greekSurveyStrings;


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export hebrewSurveyStrings */

var hebrewSurveyStrings = {
    pagePrevText: "אחורה",
    pageNextText: "קדימה",
    completeText: "סיום",
    progressText: "דף {1} מתוך {0}",
    emptySurvey: "אין שאלות",
    completingSurvey: "תודה על מילוי השאלון!",
    loadingSurvey: "טעינה מהשרת...",
    otherItemText: "אחר (נא לתאר)",
    optionsCaption: "בחר...",
    requiredError: "אנא השב על השאלה",
    numericError: "התשובה צריכה להיות מספר.",
    textMinLength: "הזן לפחות {0} תווים.",
    minSelectError: "בחר לפחות {0} אפשרויות.",
    maxSelectError: "בחר עד {0} אפשרויות.",
    numericMinMax: "'{0}' חייב להיות שווה או גדול מ {1}, ושווה ל- {2} או פחות מ- {}}",
    numericMin: "'{0}' חייב להיות שווה או גדול מ {1}",
    numericMax: "'{0}' חייב להיות שווה או קטן מ {1}",
    invalidEmail: 'הזן כתובת דוא"ל חוקית.',
    otherRequiredError: 'נא להזין נתונים בשדה "אחר"'
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["he"] = hebrewSurveyStrings;


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export hungarianSurveyStrings */

var hungarianSurveyStrings = {
    pagePrevText: "Vissza",
    pageNextText: "Tovább",
    completeText: "Kész",
    otherItemText: "Egyéb (adja meg)",
    progressText: "{0}./{1} oldal",
    emptySurvey: "There is no visible page or question in the survey.",
    completingSurvey: "Köszönjük, hogy kitöltötte felmérésünket!",
    completingSurveyBefore: "Már kitöltötte a felmérést.",
    loadingSurvey: "Felmérés betöltése...",
    optionsCaption: "Válasszon...",
    value: "érték",
    requiredError: "Kérjük, válaszolja meg ezt a kérdést!",
    requiredInAllRowsError: "Kérjük adjon választ minden sorban!",
    numericError: "Az érték szám kell, hogy legyen!",
    textMinLength: "Adjon meg legalább {0} karaktert!",
    textMaxLength: "Legfeljebb {0} karaktert adjon meg!",
    textMinMaxLength: "Adjon meg legalább {0}, de legfeljebb {1} karaktert!",
    minRowCountError: "Töltsön ki minimum {0} sort!",
    minSelectError: "Válasszon ki legalább {0} lehetőséget!",
    maxSelectError: "Ne válasszon többet, mint {0} lehetőség!",
    numericMinMax: "'{0}' legyen nagyobb, vagy egyenlő, mint {1} és kisebb, vagy egyenlő, mint {2}!",
    numericMin: "'{0}' legyen legalább {1}!",
    numericMax: "The '{0}' ne legyen nagyobb, mint {1}!",
    invalidEmail: "Adjon meg egy valós email címet!",
    urlRequestError: "A lekérdezés hibával tért vissza: '{0}'. {1}",
    urlGetChoicesError: "A lekérdezés üres adattal tért vissza, vagy a 'path' paraméter helytelen.",
    exceedMaxSize: "A méret nem lehet nagyobb, mint {0}.",
    otherRequiredError: "Adja meg az egyéb értéket!",
    uploadingFile: "Feltöltés folyamatban. Várjon pár másodpercet, majd próbálja újra.",
    confirmDelete: "Törli ezt a rekordot?",
    keyDuplicationError: "Az értéknek egyedinek kell lennie.",
    addRow: "Sor hozzáadása",
    removeRow: "Eltávolítás",
    addPanel: "Új hozzáadása",
    removePanel: "Eltávolítás",
    choices_Item: "elem",
    matrix_column: "Oszlop",
    matrix_row: "Sor",
    savingData: "Eredmény mentése a szerverre...",
    savingDataError: "Egy hiba folytán nem tudtuk elmenteni az eredményt.",
    savingDataSuccess: "Eredmény sikeresen mentve!",
    saveAgainButton: "Próbálja újra"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["hu"] = hungarianSurveyStrings;


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export icelandicSurveyStrings */

var icelandicSurveyStrings = {
    pagePrevText: "Tilbaka",
    pageNextText: "Áfram",
    completeText: "Lokið",
    otherItemText: "Hinn (skýring)",
    progressText: "Síða {0} of {1}",
    emptySurvey: "Það er enginn síða eða spurningar í þessari könnun.",
    completingSurvey: "Takk fyrir að fyllja út þessa könnun!",
    loadingSurvey: "Könnunin er að hlaða...",
    optionsCaption: "Veldu...",
    requiredError: "Vinsamlegast svarið spurningunni.",
    requiredInAllRowsError: "Vinsamlegast svarið spurningum í öllum röðum.",
    numericError: "Þetta gildi verður að vera tala.",
    textMinLength: "Það ætti að vera minnst {0} tákn.",
    textMaxLength: "Það ætti að vera mest {0} tákn.",
    textMinMaxLength: "Það ætti að vera fleiri en {0} og færri en {1} tákn.",
    minRowCountError: "Vinsamlegast fyllið úr að minnsta kosti {0} raðir.",
    minSelectError: "Vinsamlegast veljið að minnsta kosti {0} möguleika.",
    maxSelectError: "Vinsamlegast veljið ekki fleiri en {0} möguleika.",
    numericMinMax: "'{0}' ætti að vera meira en eða jafnt og {1} minna en eða jafnt og {2}",
    numericMin: "{0}' ætti að vera meira en eða jafnt og {1}",
    numericMax: "'{0}' ætti að vera minna en eða jafnt og {1}",
    invalidEmail: "Vinsamlegast sláið inn gilt netfang.",
    urlRequestError: "Beiðninn skilaði eftirfaranadi villu '{0}'. {1}",
    urlGetChoicesError: "Beiðninng skilaði engum gögnum eða slóðinn var röng",
    exceedMaxSize: "Skráinn skal ekki vera stærri en {0}.",
    otherRequiredError: "Vinamlegast fyllið út hitt gildið.",
    uploadingFile: "Skráinn þín var send. Vinsamlegast bíðið í nokkrar sekúndur og reynið aftur.",
    addRow: "Bæta við röð",
    removeRow: "Fjarlægja",
    choices_firstItem: "fyrsti hlutur",
    choices_secondItem: "annar hlutur",
    choices_thirdItem: "þriðji hlutur",
    matrix_column: "Dálkur",
    matrix_row: "Röð"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["is"] = icelandicSurveyStrings;


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export italianSurveyStrings */

var italianSurveyStrings = {
    pagePrevText: "Precedente",
    pageNextText: "Successivo",
    completeText: "Salva",
    otherItemText: "Altro (descrivi)",
    progressText: "Pagina {0} di {1}",
    emptySurvey: "Non ci sono pagine o domande visibili nel questionario.",
    completingSurvey: "Grazie per aver completato il questionario!",
    loadingSurvey: "Caricamento del questionario in corso...",
    optionsCaption: "Scegli...",
    requiredError: "Campo obbligatorio",
    requiredInAllRowsError: "Completare tutte le righe",
    numericError: "Il valore deve essere numerico",
    textMinLength: "Inserire almeno {0} caratteri",
    textMaxLength: "Lunghezza massima consentita {0} caratteri",
    textMinMaxLength: "Inserire una stringa con minimo {0} e massimo {1} caratteri",
    minRowCountError: "Completare almeno {0} righe.",
    minSelectError: "Selezionare almeno {0} varianti.",
    maxSelectError: "Selezionare massimo {0} varianti.",
    numericMinMax: "'{0}' deve essere uguale o superiore a {1} e uguale o inferiore a {2}",
    numericMin: "'{0}' deve essere uguale o superiore a {1}",
    numericMax: "'{0}' deve essere uguale o inferiore a {1}",
    invalidEmail: "Inserire indirizzo mail valido",
    urlRequestError: "La richiesta ha risposto con un errore '{0}'. {1}",
    urlGetChoicesError: "La richiesta ha risposto null oppure il percorso non è corretto",
    exceedMaxSize: "Il file non può eccedere {0}",
    otherRequiredError: "Inserire il valore 'altro'",
    uploadingFile: "File in caricamento. Attendi alcuni secondi e riprova",
    addRow: "Aggiungi riga",
    removeRow: "Rimuovi riga",
    choices_Item: "Elemento",
    matrix_column: "Colonna",
    matrix_row: "Riga"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["it"] = italianSurveyStrings;


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export latvianSurveyStrings */

var latvianSurveyStrings = {
    pagePrevText: "Atpakaļ",
    pageNextText: "Tālāk",
    completeText: "Pabeigt",
    progressText: "Lappuse {0} no {1}",
    emptySurvey: "Nav neviena jautājuma.",
    completingSurvey: "Pateicamies Jums par anketas aizpildīšanu!",
    loadingSurvey: "Ielāde no servera...",
    otherItemText: "Cits (lūdzu, aprakstiet!)",
    optionsCaption: "Izvēlēties...",
    requiredError: "Lūdzu, atbildiet uz jautājumu!",
    numericError: "Atbildei ir jābūt skaitlim.",
    textMinLength: "Lūdzu, ievadiet vismaz {0} simbolus.",
    minSelectError: "Lūdzu, izvēlieties vismaz {0} variantu.",
    maxSelectError: "Lūdzu, izvēlieties ne vairak par {0} variantiem.",
    numericMinMax: "'{0}' jābūt vienādam vai lielākam nekā {1}, un vienādam vai mazākam, nekā {2}",
    numericMin: "'{0}' jābūt vienādam vai lielākam {1}",
    numericMax: "'{0}' jābūt vienādam vai lielākam {1}",
    invalidEmail: "Lūdzu, ievadiet patiesu e-pasta adresi!",
    otherRequiredError: 'Lūdzu, ievadiet datus laukā "Cits"'
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["lv"] = latvianSurveyStrings;


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export persianSurveyStrings */

var persianSurveyStrings = {
    pagePrevText: "قبلی",
    pageNextText: "بعدی",
    completeText: "تکمیل",
    otherItemText: "دیگر(توضیح)",
    progressText: "صفحه {0} از {1}",
    emptySurvey: "صفحه ای یا گزینه ای برای این پرسشنامه موجود نیست.",
    completingSurvey: "از شما بابت تکمیل این پرسشنامه متشکریم",
    completingSurveyBefore: "به نظر می رسد هم هم اکنون پرسشنامه را تکمیل کرده اید.",
    loadingSurvey: "درحال ایجاد پرسشنامه",
    optionsCaption: "انتخاب کنید...",
    value: "مقدار",
    requiredError: "لطفا به سوال پاسخ دهید",
    requiredInAllRowsError: "لطفا به تمام سطر های سوالات پاسخ دهید",
    numericError: "مقدار باید عددی باشد",
    textMinLength: "لطفا حداقل  {0} حرف وارد کنید",
    textMaxLength: "لطفا کمتر از  {0} حرف وارد کنید.",
    textMinMaxLength: "لطفا بیشتر از  {0} حرف و کمتر از {1} حرف وارد کنید.",
    minRowCountError: "لطفا حداقل {0} سطر وارد کنید.",
    minSelectError: "حداقل {0} انتخاب کنید.",
    maxSelectError: "لطفا بیشتر از  {0} انتخاب کنید.",
    numericMinMax: "'{0}' باید بین {1} و {2} باشد",
    numericMin: "'{0}' بزرگتر مساوی {1} باشد",
    numericMax: "'{0}' باید کوچکتر یا مساوی {1} باشد",
    invalidEmail: "لطفا ایمیل صحیح درج کنید",
    urlRequestError: "درخواست با خطا روبرو شد: '{0}'. {1}",
    urlGetChoicesError: "درخواست مسیری خالی بازگشت داده یا مسیر درست تنظیم نشده",
    exceedMaxSize: "بیشترین حجم مجاز فایل: {0}",
    otherRequiredError: "مقدار 'دیگر' را وارد کنید",
    uploadingFile: "فایل در حال آیلود می باشد. لطفا صبر کنید.",
    confirmDelete: "آیا مایل به حذف این ردیف هستید؟",
    keyDuplicationError: "این مقدار باید غیر تکراری باشد",
    addRow: "سطر جدید",
    removeRow: "حذف",
    addPanel: "جدید",
    removePanel: "حذف",
    choices_Item: "آیتم",
    matrix_column: "ستون",
    matrix_row: "سطر",
    savingData: "نتایج در حال ذخیره سازی در سرور می باشد",
    savingDataError: "خطایی در ذخیره سازی نتایج رخ داده است",
    savingDataSuccess: "نتایج با موفقیت ذخیره شد",
    saveAgainButton: "مجدد تلاش کنید"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fa"] = persianSurveyStrings;


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export polishSurveyStrings */

var polishSurveyStrings = {
    pagePrevText: "Wstecz",
    pageNextText: "Dalej",
    completeText: "Gotowe",
    otherItemText: "Inna odpowiedź (wpisz)",
    progressText: "Strona {0} z {1}",
    emptySurvey: "Nie ma widocznych pytań.",
    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
    loadingSurvey: "Trwa wczytywanie ankiety...",
    optionsCaption: "Wybierz...",
    requiredError: "Proszę odpowiedzieć na to pytanie.",
    requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
    numericError: "W tym polu można wpisać tylko liczby.",
    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
    textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
    textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
    minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
    invalidEmail: "Proszę podać prawidłowy adres email.",
    urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
    urlGetChoicesError: "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
    otherRequiredError: "Proszę podać inną odpowiedź.",
    uploadingFile: "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
    addRow: "Dodaj wiersz",
    removeRow: "Usuń"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["pl"] = polishSurveyStrings;


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export portugueseSurveyStrings */

var portugueseSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Próximo",
    completeText: "Finalizar",
    otherItemText: "Outros (descrever)",
    progressText: "Pagina {0} de {1}",
    emptySurvey: "Não há página visível ou pergunta na pesquisa.",
    completingSurvey: "Obrigado por finalizar a pesquisa!",
    completingSurveyBefore: "Nossos registros mostram que você já finalizou a pesquisa.",
    loadingSurvey: "A pesquisa está carregando...",
    optionsCaption: "Selecione...",
    value: "valor",
    requiredError: "Por favor, responda a pergunta.",
    requiredInAllRowsError: "Por favor, responda as perguntas em todas as linhas.",
    numericError: "O valor deve ser numérico.",
    textMinLength: "Por favor, insira pelo menos {0} caracteres.",
    textMaxLength: "Por favor, insira menos de {0} caracteres.",
    textMinMaxLength: "Por favor, insira mais de {0} e menos de {1} caracteres.",
    minRowCountError: "Preencha pelo menos {0} linhas.",
    minSelectError: "Selecione pelo menos {0} opções.",
    maxSelectError: "Por favor, selecione não mais do que {0} opções.",
    numericMinMax: "O '{0}' deve ser igual ou superior a {1} e igual ou menor que {2}",
    numericMin: "O '{0}' deve ser igual ou superior a {1}",
    numericMax: "O '{0}' deve ser igual ou inferior a {1}",
    invalidEmail: "Por favor, informe um e-mail válido.",
    urlRequestError: "A requisição retornou o erro '{0}'. {1}",
    urlGetChoicesError: "A requisição não retornou dados ou o 'caminho' da requisição não está correto",
    exceedMaxSize: "O tamanho do arquivo não deve exceder {0}.",
    otherRequiredError: "Por favor, informe o outro valor.",
    uploadingFile: "Seu arquivo está sendo carregado. Por favor, aguarde alguns segundos e tente novamente.",
    addRow: "Adicionar linha",
    removeRow: "Remover linha",
    addPanel: "Adicionar novo",
    removePanel: "Remover",
    choices_Item: "item",
    matrix_column: "Coluna",
    matrix_row: "Linha",
    savingData: "Os resultados esto sendo salvos no servidor...",
    savingDataError: "Ocorreu um erro e não foi possível salvar os resultados.",
    savingDataSuccess: "Os resultados foram salvos com sucesso!",
    saveAgainButton: "Tente novamente"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["pt"] = portugueseSurveyStrings;


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export romanianSurveyStrings */

var romanianSurveyStrings = {
    pagePrevText: "Precedent",
    pageNextText: "Următor",
    completeText: "Finalizare",
    otherItemText: "Altul(precizaţi)",
    progressText: "Pagina {0} din {1}",
    emptySurvey: "Nu sunt întrebări pentru acest chestionar",
    completingSurvey: "Vă mulţumim pentru timpul acordat!",
    loadingSurvey: "Chestionarul se încarcă...",
    optionsCaption: "Alegeţi...",
    requiredError: "Răspunsul la această întrebare este obligatoriu.",
    requiredInAllRowsError: "Toate răspunsurile sunt obligatorii",
    numericError: "Răspunsul trebuie să fie numeric.",
    textMinLength: "Trebuie să introduceți minim {0} caractere.",
    minSelectError: "Trebuie să selectați minim {0} opţiuni.",
    maxSelectError: "Trebuie să selectați maxim {0} opţiuni.",
    numericMinMax: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1} şî mai mic sau egal cu {2}",
    numericMin: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1}",
    numericMax: "Răspunsul '{0}' trebuie să fie mai mic sau egal ca {1}",
    invalidEmail: "Trebuie să introduceţi o adresa de email validă.",
    exceedMaxSize: "Dimensiunea fişierului nu trebuie să depăşească {0}.",
    otherRequiredError: "Trebuie să completați câmpul 'Altul'.",
    completingSurveyBefore: "Din înregistrările noastre reiese că ați completat deja acest chestionar.",
    value: "valoare",
    requiredErrorInPanel: "Vă rugăm să răspundeți la cel puțin o întrebare.",
    textMaxLength: "Trebuie să introduceți maxim {0} caractere.",
    textMinMaxLength: "Trebuie să introduceți mai mult de {0} și mai puțin de {1} caractere.",
    minRowCountError: "Trebuie să completați minim {0} rânduri.",
    urlRequestError: "Request-ul a returnat eroarea '{0}'. {1}",
    urlGetChoicesError: "Request-ul nu a returnat date sau proprietatea 'path' este incorectă",
    uploadingFile: "Fișierul dumneavoastră este în curs de încărcare. Vă rugăm așteptați câteva secunde și reveniți apoi.",
    confirmDelete: "Sunteți sigur că doriți să ștergeți înregistrarea?",
    keyDuplicationError: "Valoarea trebuie să fie unică.",
    addRow: "Adăugare rând",
    removeRow: "Ștergere",
    addPanel: "Adăugare",
    removePanel: "Ștergere",
    choices_Item: "opțiune",
    matrix_column: "Coloană",
    matrix_row: "Rând",
    savingData: "Rezultatele sunt în curs de salvare...",
    savingDataError: "A intervenit o eroare, rezultatele nu au putut fi salvate.",
    savingDataSuccess: "Rezultatele au fost salvate cu succes!",
    saveAgainButton: "Încercați din nou",
    timerMin: "min",
    timerSec: "sec",
    timerSpentAll: "Ați petrecut {0} pe această pagină și {1} în total.",
    timerSpentPage: "Ați petrecut {0} pe această pagină.",
    timerSpentSurvey: "Ați petrecut {0} în total.",
    timerLimitAll: "Ați petrecut {0} din {1} pe această pagină și {2} din {3} în total.",
    timerLimitPage: "Ați petrecut {0} din {1} pe această pagină.",
    timerLimitSurvey: "Ați petrecut {0} din {1} în total."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ro"] = romanianSurveyStrings;


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export russianSurveyStrings */

var russianSurveyStrings = {
    pagePrevText: "Назад",
    pageNextText: "Далее",
    completeText: "Готово",
    progressText: "Страница {0} из {1}",
    emptySurvey: "Нет ни одного вопроса.",
    completingSurvey: "Благодарим Вас за заполнение анкеты!",
    loadingSurvey: "Загрузка с сервера...",
    otherItemText: "Другое (пожалуйста, опишите)",
    optionsCaption: "Выбрать...",
    requiredError: "Пожалуйста, ответьте на вопрос.",
    numericError: "Ответ должен быть числом.",
    textMinLength: "Пожалуйста, введите хотя бы {0} символов.",
    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
    numericMinMax: "'{0}' должно быть равным или больше, чем {1}, и равным или меньше, чем {2}",
    numericMin: "'{0}' должно быть равным или больше, чем {1}",
    numericMax: "'{0}' должно быть равным или меньше, чем {1}",
    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
    otherRequiredError: 'Пожалуйста, введите данные в поле "Другое"'
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ru"] = russianSurveyStrings;


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export simplifiedChineseSurveyStrings */

var simplifiedChineseSurveyStrings = {
    pagePrevText: "上一页",
    pageNextText: "下一页",
    completeText: "提交问卷",
    otherItemText: "填写其他答案",
    progressText: "第 {0} 页, 共 {1} 页",
    emptySurvey: "问卷中没有问题或页面",
    completingSurvey: "感谢您的参与!",
    loadingSurvey: "问卷正在加载中...",
    optionsCaption: "请选择...",
    requiredError: "请填写此问题",
    requiredInAllRowsError: "请填写所有行中问题",
    numericError: "答案必须是个数字",
    textMinLength: "答案长度至少 {0} 个字符",
    textMaxLength: "答案长度不能超过 {0} 个字符",
    textMinMaxLength: "答案长度必须在 {0} - {1} 个字符之间",
    minRowCountError: "最少需要填写 {0} 行答案",
    minSelectError: "最少需要选择 {0} 项答案",
    maxSelectError: "最多只能选择 {0} 项答案",
    numericMinMax: "答案 '{0}' 必须大于等于 {1} 且小于等于 {2}",
    numericMin: "答案 '{0}' 必须大于等于 {1}",
    numericMax: "答案 '{0}' 必须小于等于 {1}",
    invalidEmail: "请输入有效的 Email 地址",
    urlRequestError: "载入选项时发生错误 '{0}': {1}",
    urlGetChoicesError: "未能载入有效的选项或请求参数路径有误",
    exceedMaxSize: "文件大小不能超过 {0}",
    otherRequiredError: "请完成其他问题",
    uploadingFile: "文件上传中... 请耐心等待几秒后重试",
    addRow: "添加答案",
    removeRow: "删除答案",
    choices_Item: "选项",
    matrix_column: "列",
    matrix_row: "行",
    savingData: "正在将结果保存到服务器...",
    savingDataError: "在保存结果过程中发生了错误，结果未能保存",
    savingDataSuccess: "结果保存成功!",
    saveAgainButton: "请重试"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["zh-cn"] = simplifiedChineseSurveyStrings;


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export spanishSurveyStrings */

var spanishSurveyStrings = {
    pagePrevText: "Anterior",
    pageNextText: "Siguiente",
    completeText: "Completo",
    otherItemText: "Otro (describa)",
    progressText: "Página {0} de {1}",
    emptySurvey: "No hay página visible o pregunta en la encuesta.",
    completingSurvey: "Gracias por completar la encuesta!",
    loadingSurvey: "La encuesta está cargando...",
    optionsCaption: "Seleccione...",
    requiredError: "Por favor conteste la pregunta.",
    requiredInAllRowsError: "Por favor conteste las preguntas en cada hilera.",
    numericError: "La estimación debe ser numérica.",
    textMinLength: "Por favor entre por lo menos {0} símbolos.",
    textMaxLength: "Por favor entre menos de {0} símbolos.",
    textMinMaxLength: "Por favor entre más de {0} y menos de {1} símbolos.",
    minRowCountError: "Por favor llene por lo menos {0} hileras.",
    minSelectError: "Por favor seleccione por lo menos {0} variantes.",
    maxSelectError: "Por favor seleccione no más de {0} variantes.",
    numericMinMax: "El '{0}' debe de ser igual o más de {1} y igual o menos de {2}",
    numericMin: "El '{0}' debe ser igual o más de {1}",
    numericMax: "El '{0}' debe ser igual o menos de {1}",
    invalidEmail: "Por favor agregue un correo electrónico válido.",
    urlRequestError: "La solicitud regresó error '{0}'. {1}",
    urlGetChoicesError: "La solicitud regresó vacío de data o la propiedad 'trayectoria' no es correcta",
    exceedMaxSize: "El tamaño del archivo no debe de exceder {0}.",
    otherRequiredError: "Por favor agregue la otra estimación.",
    uploadingFile: "Su archivo se está subiendo. Por favor espere unos segundos e intente de nuevo.",
    addRow: "Agregue una hilera",
    removeRow: "Eliminar una hilera",
    choices_firstItem: "primer artículo",
    choices_secondItem: "segundo artículo",
    choices_thirdItem: "tercera artículo",
    matrix_column: "Columna",
    matrix_row: "Hilera"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["es"] = spanishSurveyStrings;


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export swedishSurveyStrings */
//Create by Mattias Asplund

var swedishSurveyStrings = {
    pagePrevText: "Föregående",
    pageNextText: "Nästa",
    completeText: "Färdig",
    otherItemText: "Annat (beskriv)",
    progressText: "Sida {0} av {1}",
    emptySurvey: "Det finns ingen synlig sida eller fråga i enkäten.",
    completingSurvey: "Tack för att du genomfört enkäten!!",
    loadingSurvey: "Enkäten laddas...",
    optionsCaption: "Välj...",
    requiredError: "Var vänlig besvara frågan.",
    requiredInAllRowsError: "Var vänlig besvara frågorna på alla rader.",
    numericError: "Värdet ska vara numeriskt.",
    textMinLength: "Var vänlig ange minst {0} tecken.",
    minRowCountError: "Var vänlig fyll i minst {0} rader.",
    minSelectError: "Var vänlig välj åtminstone {0} varianter.",
    maxSelectError: "Var vänlig välj inte fler än {0} varianter.",
    numericMinMax: "'{0}' ska vara lika med eller mer än {1} samt lika med eller mindre än {2}",
    numericMin: "'{0}' ska vara lika med eller mer än {1}",
    numericMax: "'{0}' ska vara lika med eller mindre än {1}",
    invalidEmail: "Var vänlig ange en korrekt e-postadress.",
    urlRequestError: "Förfrågan returnerade felet '{0}'. {1}",
    urlGetChoicesError: "Antingen returnerade förfrågan ingen data eller så är egenskapen 'path' inte korrekt",
    exceedMaxSize: "Filstorleken får ej överstiga {0}.",
    otherRequiredError: "Var vänlig ange det andra värdet.",
    uploadingFile: "Din fil laddas upp. Var vänlig vänta några sekunder och försök sedan igen.",
    addRow: "Lägg till rad",
    removeRow: "Ta bort"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["sv"] = swedishSurveyStrings;


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(2);
/* unused harmony export turkishSurveyStrings */

var turkishSurveyStrings = {
    pagePrevText: "Geri",
    pageNextText: "İleri",
    completeText: "Anketi Tamamla",
    otherItemText: "Diğer (açıklayınız)",
    progressText: "Sayfa {0} / {1}",
    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
    completingSurvey: "Anketimizi tamamladığınız için teşekkür ederiz.",
    loadingSurvey: "Anket sunucudan yükleniyor ...",
    optionsCaption: "Seçiniz ...",
    requiredError: "Lütfen soruya cevap veriniz",
    numericError: "Girilen değer numerik olmalıdır",
    textMinLength: "En az {0} sembol giriniz.",
    minRowCountError: "Lütfen en az {0} satırı doldurun.",
    minSelectError: "Lütfen en az {0} seçeneği seçiniz.",
    maxSelectError: "Lütfen {0} adetten fazla seçmeyiniz.",
    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
    invalidEmail: "Lütfen geçerli bir eposta adresi giriniz.",
    urlRequestError: "Talebi şu hatayı döndü '{0}'. {1}",
    urlGetChoicesError: "Talep herhangi bir veri dönmedi ya da 'path' özelliği hatalı.",
    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
    otherRequiredError: "Lütfen diğer değerleri giriniz.",
    uploadingFile: "Dosyanız yükleniyor. LÜtfen birkaç saniye bekleyin ve tekrar deneyin.",
    addRow: "Satır Ekle",
    removeRow: "Kaldır"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["tr"] = turkishSurveyStrings;


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyTriggerVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyTriggerComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyTriggerSetValue; });



/**
 * A base class for all triggers.
 * A trigger calls a method when the expression change the result: from false to true or from true to false.
 * Please note, it runs only one changing the expression result.
 */
var Trigger = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Trigger, _super);
    function Trigger() {
        var _this = _super.call(this) || this;
        _this.opValue = "equal";
        return _this;
    }
    Object.defineProperty(Trigger, "operators", {
        get: function () {
            if (Trigger.operatorsValue != null)
                return Trigger.operatorsValue;
            Trigger.operatorsValue = {
                empty: function (value, expectedValue) {
                    return !value;
                },
                notempty: function (value, expectedValue) {
                    return !!value;
                },
                equal: function (value, expectedValue) {
                    return value == expectedValue;
                },
                notequal: function (value, expectedValue) {
                    return value != expectedValue;
                },
                contains: function (value, expectedValue) {
                    return value && value["indexOf"] && value.indexOf(expectedValue) > -1;
                },
                notcontains: function (value, expectedValue) {
                    return (!value || !value["indexOf"] || value.indexOf(expectedValue) == -1);
                },
                greater: function (value, expectedValue) {
                    return value > expectedValue;
                },
                less: function (value, expectedValue) {
                    return value < expectedValue;
                },
                greaterorequal: function (value, expectedValue) {
                    return value >= expectedValue;
                },
                lessorequal: function (value, expectedValue) {
                    return value <= expectedValue;
                }
            };
            return Trigger.operatorsValue;
        },
        enumerable: true,
        configurable: true
    });
    Trigger.prototype.getType = function () {
        return "triggerbase";
    };
    Object.defineProperty(Trigger.prototype, "operator", {
        get: function () {
            return this.opValue;
        },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (!Trigger.operators[value])
                return;
            this.opValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Trigger.prototype.check = function (value) {
        if (Trigger.operators[this.operator](value, this.value)) {
            this.onSuccess();
        }
        else {
            this.onFailure();
        }
    };
    Trigger.prototype.onSuccess = function () { };
    Trigger.prototype.onFailure = function () { };
    Trigger.operatorsValue = null;
    return Trigger;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

/**
 * It extends the Trigger base class and add properties required for SurveyJS classes.
 */
var SurveyTrigger = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTrigger, _super);
    function SurveyTrigger() {
        var _this = _super.call(this) || this;
        _this.owner = null;
        return _this;
    }
    SurveyTrigger.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    Object.defineProperty(SurveyTrigger.prototype, "isOnNextPage", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return SurveyTrigger;
}(Trigger));

/**
 * If expression returns true, it makes questions/pages visible.
 * Ohterwise it makes them invisible.
 */
var SurveyTriggerVisible = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerVisible, _super);
    function SurveyTriggerVisible() {
        var _this = _super.call(this) || this;
        _this.pages = [];
        _this.questions = [];
        return _this;
    }
    SurveyTriggerVisible.prototype.getType = function () {
        return "visibletrigger";
    };
    SurveyTriggerVisible.prototype.onSuccess = function () {
        this.onTrigger(this.onItemSuccess);
    };
    SurveyTriggerVisible.prototype.onFailure = function () {
        this.onTrigger(this.onItemFailure);
    };
    SurveyTriggerVisible.prototype.onTrigger = function (func) {
        if (!this.owner)
            return;
        var objects = this.owner.getObjects(this.pages, this.questions);
        for (var i = 0; i < objects.length; i++) {
            func(objects[i]);
        }
    };
    SurveyTriggerVisible.prototype.onItemSuccess = function (item) {
        item.visible = true;
    };
    SurveyTriggerVisible.prototype.onItemFailure = function (item) {
        item.visible = false;
    };
    return SurveyTriggerVisible;
}(SurveyTrigger));

/**
 * If expression returns true, it completes the survey.
 */
var SurveyTriggerComplete = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerComplete, _super);
    function SurveyTriggerComplete() {
        return _super.call(this) || this;
    }
    SurveyTriggerComplete.prototype.getType = function () {
        return "completetrigger";
    };
    Object.defineProperty(SurveyTriggerComplete.prototype, "isOnNextPage", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    SurveyTriggerComplete.prototype.onSuccess = function () {
        if (this.owner)
            this.owner.doComplete();
    };
    return SurveyTriggerComplete;
}(SurveyTrigger));

var SurveyTriggerSetValue = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerSetValue, _super);
    function SurveyTriggerSetValue() {
        return _super.call(this) || this;
    }
    SurveyTriggerSetValue.prototype.getType = function () {
        return "setvaluetrigger";
    };
    SurveyTriggerSetValue.prototype.onSuccess = function () {
        if (!this.setToName || !this.owner)
            return;
        this.owner.setTriggerValue(this.setToName, this.setValue, this.isVariable);
    };
    return SurveyTriggerSetValue;
}(SurveyTrigger));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("trigger", ["operator", "!value"]);
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("surveytrigger", ["!name"], null, "trigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("visibletrigger", ["pages", "questions"], function () {
    return new SurveyTriggerVisible();
}, "surveytrigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("completetrigger", [], function () {
    return new SurveyTriggerComplete();
}, "surveytrigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["b" /* JsonObject */].metaData.addClass("setvaluetrigger", ["!setToName", "setValue", "isVariable:boolean"], function () {
    return new SurveyTriggerSetValue();
}, "surveytrigger");


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks_model__ = __webpack_require__(58);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AnswerCountValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NumericValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RegexValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidatorResult", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidatorRunner", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ItemValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyElement", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LocalizableString", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ChoicesRestfull", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FunctionFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Condition", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionNode", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionRunner", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionsParser", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProcessValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ExceedSizeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RequreNumericError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonIncorrectTypeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMetadataClass", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMissingTypeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMissingTypeErrorBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonObject", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonObjectProperty", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonRequiredPropertyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonUnknownPropertyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownCell", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownColumn", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matrixDropdownColumnTypes", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownRowModelBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdownModelBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdownModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDynamicRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamicModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MultipleTextItemModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleTextModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PanelModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PanelModelBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PageModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_0"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionEmptyModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_4"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionSelectBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_5"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_6"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCommentModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_7"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionDropdownModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_8"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_9"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ElementFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionFileModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_11"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionHtmlModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_12"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRadiogroupModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_13"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRatingModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_14"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionExpressionModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_15"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionTextModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_16"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionBooleanModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_17"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionPanelDynamicModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_18"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionPanelDynamicItem", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_19"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTimer", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_20"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_21"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTrigger", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_22"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerComplete", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_23"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerSetValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_24"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerVisible", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_25"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_26"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyWindowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_27"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextPreProcessor", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_28"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dxSurveyService", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_29"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyLocalization", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_30"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_31"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCustomWidget", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_32"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CustomWidgetCollection", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_33"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StylesManager", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_34"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunks_localization__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStandardCss", function() { return __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssbootstrap__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBootstrapCss", function() { return __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssbootstrap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssbootstrapmaterial__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBootstrapMaterialCss", function() { return __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssbootstrapmaterial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__knockout_kosurvey__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return __WEBPACK_IMPORTED_MODULE_7__knockout_kosurvey__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return __WEBPACK_IMPORTED_MODULE_7__knockout_kosurvey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__knockout_kopage__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRow", function() { return __WEBPACK_IMPORTED_MODULE_8__knockout_kopage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return __WEBPACK_IMPORTED_MODULE_8__knockout_kopage__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return __WEBPACK_IMPORTED_MODULE_8__knockout_kopage__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__knockout_koquestionbase__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionImplementorBase", function() { return __WEBPACK_IMPORTED_MODULE_9__knockout_koquestionbase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__knockout_koquestion__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionImplementor", function() { return __WEBPACK_IMPORTED_MODULE_10__knockout_koquestion__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__knockout_koquestion_baseselect__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSelectBaseImplementor", function() { return __WEBPACK_IMPORTED_MODULE_11__knockout_koquestion_baseselect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxBaseImplementor", function() { return __WEBPACK_IMPORTED_MODULE_11__knockout_koquestion_baseselect__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__knockout_koquestion_checkbox__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckbox", function() { return __WEBPACK_IMPORTED_MODULE_12__knockout_koquestion_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__knockout_koquestion_comment__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComment", function() { return __WEBPACK_IMPORTED_MODULE_13__knockout_koquestion_comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__knockout_koquestion_dropdown__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDropdown", function() { return __WEBPACK_IMPORTED_MODULE_14__knockout_koquestion_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__knockout_koquestion_file__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFile", function() { return __WEBPACK_IMPORTED_MODULE_15__knockout_koquestion_file__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__knockout_koquestion_html__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionHtml", function() { return __WEBPACK_IMPORTED_MODULE_16__knockout_koquestion_html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__knockout_koquestion_matrix__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixRow", function() { return __WEBPACK_IMPORTED_MODULE_17__knockout_koquestion_matrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrix", function() { return __WEBPACK_IMPORTED_MODULE_17__knockout_koquestion_matrix__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__knockout_koquestion_matrixdropdown__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdown", function() { return __WEBPACK_IMPORTED_MODULE_18__knockout_koquestion_matrixdropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__knockout_koquestion_matrixdynamic__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamicImplementor", function() { return __WEBPACK_IMPORTED_MODULE_19__knockout_koquestion_matrixdynamic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_19__knockout_koquestion_matrixdynamic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__knockout_koquestion_paneldynamic__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPanelDynamic", function() { return __WEBPACK_IMPORTED_MODULE_20__knockout_koquestion_paneldynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__knockout_koquestion_multipletext__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleTextItem", function() { return __WEBPACK_IMPORTED_MODULE_21__knockout_koquestion_multipletext__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleTextImplementor", function() { return __WEBPACK_IMPORTED_MODULE_21__knockout_koquestion_multipletext__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleText", function() { return __WEBPACK_IMPORTED_MODULE_21__knockout_koquestion_multipletext__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__knockout_koquestion_radiogroup__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRadiogroup", function() { return __WEBPACK_IMPORTED_MODULE_22__knockout_koquestion_radiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__knockout_koquestion_rating__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRating", function() { return __WEBPACK_IMPORTED_MODULE_23__knockout_koquestion_rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__knockout_koquestion_text__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionText", function() { return __WEBPACK_IMPORTED_MODULE_24__knockout_koquestion_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__knockout_koquestion_boolean__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBoolean", function() { return __WEBPACK_IMPORTED_MODULE_25__knockout_koquestion_boolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__knockout_koquestion_empty__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionEmpty", function() { return __WEBPACK_IMPORTED_MODULE_26__knockout_koquestion_empty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__knockout_koquestion_expression__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionExpression", function() { return __WEBPACK_IMPORTED_MODULE_27__knockout_koquestion_expression__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__knockout_koSurveyWindow__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyWindow", function() { return __WEBPACK_IMPORTED_MODULE_28__knockout_koSurveyWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__knockout_templateText__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTemplateText", function() { return __WEBPACK_IMPORTED_MODULE_29__knockout_templateText__["a"]; });
// model

// localization

// helpers

// css standard

// css bootstrap

// css bootstrap + material

// styles

// knockout

























//Uncomment to include the "date" question type.
//export {QuestionDate} from "../plugins/knockout/koquestion_date";


/***/ })
/******/ ]);
});