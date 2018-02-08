var divide = function(x, y) {
  // divide the numbers and handle the case where y
  // is zero (see the tests)
  if (y===0) return { isError: true, message: 'cannot divide by zero' }

return x/y
}

var divideByThenAdd = function(x, y, z) {
  var division = divide(x, y)

  // handle the case where divide returns an error
   if (division.isError) return division
  return division + z
}

module.exports = {
  divide,
  divideByThenAdd
}
