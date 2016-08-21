'use strict';

function getMessage(a, b) {
  var numberOfSteps = 0;
  var distancePath = 0;

  if  (typeof a === 'boolean') {
    if (a === true) {
      return ('Я попал в ' + b);
      }
    else {
      return ('Я никуда не попал');
      }
    }
  if (typeof a === 'number') {
    return ('Я прыгнул на ' + a * 100 + ' сантиметров');
  }
<<<<<<< HEAD
  if (Array.isArray(a) === true && Array.isArray(b) === true) {
=======
  if (Array.isArray(a) && Array.isArray(b)) {
>>>>>>> 292a6a3fa87ca423c48ccc5a39e6682f71f32977
    for (var i = 0; i < a.length; i++) {
      numberOfSteps += a[i] * b[i];
    }
    return ('Я прошёл ' + numberOfSteps + ' метров');
  }
<<<<<<< HEAD
  if (Array.isArray(a) === true && Array.isArray(b) === false) {
=======
  if (Array.isArray(a)) {
>>>>>>> 292a6a3fa87ca423c48ccc5a39e6682f71f32977
    for (var j = 0; j < a.length; j++) {
      distancePath += a[j];
    }
    return ('Я прошёл ' + distancePath + ' метров');
  }
}
