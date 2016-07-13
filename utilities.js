function max(array, callback) {
  var maximum = array[0];
  for (var i = 0; i < array.length; i++)  {
    if (maximum < array[i]) {
      maximum = array[i];
    };
  }
  return callback(maximum);
}

function min(array, callback) {
  var minimum = array[0];
  for (var i = 0; i < array.length; i++)  {
    if (minimum > array[i]) {
      minimum = array[i];
    };
  }
  return callback(minimum);
}

module.exports = {
  max: max,
  min: min
};
