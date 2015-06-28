var expect = require('chai').expect
  , proxy = require('./')

describe('proxy', function() {
  it('should proxy function', function() {
    expect(proxy(String)('foo')).to.equal('foo')
  })

  it('should proxy function with different context', function() {
    var fn = function(){ result = this }
      , result

    proxy(fn, {'foo':1})('bar')
    expect(result).to.eql({'foo':1})
  })

  it('should proxy function with different return value', function() {
    expect(proxy(String, 0, 'foo')('bar')).to.equal('foo')
  })

})