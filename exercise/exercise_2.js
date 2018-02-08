// example
var asyncAdd = function(x, y, cb) {
  setTimeout(() => {
    // no error in this example,
    // you will need to add an error case for the example below
    cb(null, x + y)
  }, 200)
}

var asyncDivide = function(x, y, cb) {
  setTimeout(() => {
    //  divide the numbers and handle the case where y is zero (see the tests)
    if (y === 0 ){
    cb ({ isError: true, message: 'cannot divide by zero' }) // this callback needs arguments
      }else {
        return cb(null, x/y)
        }
  }, 200)
}

// setTimeout(() => {

var asyncDivideByThenAdd = function(x, y, z, cb) {
  setTimeout(() => {
    asyncDivide(x, y, function (error, division) {
          if (error)    {
             cb(error)// this callback needs arguments
        }else {
            cb(null, division + z)
          }
// : handle the case where divide returns an error


})
  }, 200)
}
module.exports = {
  asyncDivide: asyncDivide,
  asyncDivideByThenAdd: asyncDivideByThenAdd
}
