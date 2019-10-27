"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObjectTester =
/*#__PURE__*/
function () {
  function ObjectTester(cache) {
    _classCallCheck(this, ObjectTester);

    this.cache = cache && Object ? cache : {}; // preloads or sets empty cache
  }

  _createClass(ObjectTester, [{
    key: "hasUpdated",
    value: function hasUpdated(key, obj) {
      // Saves an internal copy of the object for comparisons
      var match = this.isMatch(this.getData(key), obj);
      this.setData(key, obj);
      return !match;
    }
  }, {
    key: "isMatch",
    value: function isMatch(obj1, obj2) {
      // Only correctly matches enumerables
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
  }, {
    key: "purgeCache",
    value: function purgeCache(key) {
      // If you want to free memory
      return this.getData(key) !== undefined ? delete this.cache[key] : false; // delete returns true 🤷
    }
  }, {
    key: "getData",
    value: function getData(key) {
      return this.cache[key] ? this.cache[key] : undefined;
    }
  }, {
    key: "setData",
    value: function setData(key, data) {
      return this.cache[key] = data;
    }
  }]);

  return ObjectTester;
}();

exports["default"] = ObjectTester;