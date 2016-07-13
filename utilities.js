function max(array) {
  var maximum = 0;
  for (var i = 0; i < array.length; i++)  {
    if (maximum < array[i]) {
      maximum = array[i];
    };
  // var highest = Math.max(array);
  // return highest;
}
return maximum;
}
console.log(max([2,3,4,5,6]));
