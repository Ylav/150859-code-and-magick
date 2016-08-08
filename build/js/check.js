"use strict";

function getMessage(a, b) {
  var numberOfSteps = 0;
  var distancePath = 0;
  var message;

  if  (typeof a === 'boolean') {
    if (a === true) {
      message = ('Я попал в ' + b);
      }
    else {
      message = ('Я никуда не попал');
      }
    }
  if (typeof a === 'number') {
    message = ('Я прыгнул на ' + a * 100 + ' сантиметров');
  }
  if ((Array.isArray(a) && Array.isArray(b)) === true) {
    for (var i = 0; i < a.length; i++) {
      numberOfSteps += a[i] * b[i];
    }
    message = ('Я прошёл ' + numberOfSteps + ' метров');
  }
  if (Array.isArray(a) === true && Array.isArray(b) === false) {
    for (var j = 0; j < a.length; j++) {
      distancePath += a[j];
    }
    message = ('Я прошёл ' + distancePath + ' метров');
  }

return message;
}
