/* global describe it */
const expect = require('expect')
const hello = require('../index')

describe('hello', function () {
  it('should be a function', function () {
    expect(hello).toBeA('function')
  })

  it('should return a string', function () {
    expect(hello()).toBeA('string')
  })

  it('should return "hello ${arguments[0]}"', function () {
    expect(hello()).toEqual('hello')
    expect(hello('foo')).toEqual('hello foo')
    expect(hello(42)).toEqual('hello 42')
  })
})
