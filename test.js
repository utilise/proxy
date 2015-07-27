var expect = require('chai').expect
  , wrap = require('utilise.wrap')
  , proxy = require('./')

describe('proxy', function() {
  it('should proxy function', function() {
    expect(proxy(String)('foo')).to.equal('foo')
  })

  it('should proxy function with different context', function() {
    var fn = function(){ result = this }
      , result

    proxy(fn, 0, {'foo':1})('bar')
    expect(result).to.eql({'foo':1})
  })

  it('should proxy function with different return value', function() {
    expect(proxy(String, 'foo')('bar')).to.equal('foo')
  })

  it('should proxy function with functional return value', function() {
    expect(proxy(String, wrap('baz'))('bar')).to.equal('baz')
  })

})