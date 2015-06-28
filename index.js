module.exports = function proxy(fn, ctx, ret){ 
  return function(){
    var result = fn.apply(ctx || this, arguments)
    return ret || result
  }
}