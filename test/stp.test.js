var assert = require("assert");
var stp = require("../");

describe('stp', function() {

  it('compile', function() {
    var fn = stp("hello ${name}");
    assert.equal(typeof fn, 'function');
    var rs = fn({ name: "word" });
    assert.equal(rs, 'hello word');
  });

  it('parse', function() {
    var rs = stp("hello ${name}", { name: "word" });
    assert.equal(rs, 'hello word');
  });

});