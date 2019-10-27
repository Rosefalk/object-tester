"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _ObjectTester = _interopRequireDefault(require("./ObjectTester"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assert = _chai["default"].assert;
var objectTester = new _ObjectTester["default"]();
describe('Testing if foo: {foo: \'bar\'} is in cache', function () {
  it('It is not', function () {
    assert.equal(objectTester.getData('foo'), undefined);
  });
});
describe('Adding foo: {foo: \'bar\'} to cache', function () {
  it('foo does not exist in cache, this is an update', function () {
    assert.equal(objectTester.hasUpdated('foo', {
      foo: 'bar'
    }), true);
  });
  it('Cache now holds a copy of foo', function () {
    assert.equal(objectTester.isMatch(objectTester.getData('foo'), {
      foo: 'bar'
    }), true);
  });
  it('Repeating operation, foo is now cached so this is not an update', function () {
    assert.equal(objectTester.hasUpdated('foo', {
      foo: 'bar'
    }), false);
  });
});
describe('Updating foo to be {foo: \'bar\' bar: \'foo\'}', function () {
  it('This is an update', function () {
    assert.equal(objectTester.hasUpdated('foo', {
      foo: 'bar',
      bar: 'foo'
    }), true);
  });
  it('Cache now holds a copy of foo updated with bar', function () {
    assert.equal(objectTester.isMatch(objectTester.getData('foo'), {
      foo: 'bar',
      bar: 'foo'
    }), true);
  });
});
describe('Purging cache for foo removes all knowledge of what we have done so far', function () {
  it('foo is being properly deleted from cache', function () {
    assert.equal(objectTester.purgeCache('foo'), true);
  });
  it('foo no longer exist in cache', function () {
    assert.equal(objectTester.getData('foo'), undefined);
  });
});