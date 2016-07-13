// // function test(str) {
// //   return "test" + str
// // }
// //
// // console.log(test("ing"))
// //
// // console.log('////////////'
// // );
// //
// //
// 1.
//function oldestPerson() {
var people = {Chuck: 22, Brian: 46, Dave: 84, Nick: 63};

for (var key in people) {
  var oldest = 0;
  var person = 0;
  for(var i = 0; i < people.length; i++)  {
    if(oldest < people[key]) {
      oldest = people[i];
      //person = people[i]
    }
    return oldest;
  }
}
console.log(oldest);
//}
//console.log(oldestPerson());
//
//
// // 2.
// function longestWord(string)  {
//   var arrayString = string.split(' ');
//   var longest = 0;
//   var each = 0;
//   for(var i = 0; i < arrayString.length; i++)  {
//     if(longest <= arrayString[i].length)  {
//       longest = arrayString[i].length;
//       each = arrayString[i];
//     }
//   }
//   return each;
// }
//
// console.log('The longest word is ' +
// longestWord('to close insert tab here'));
//
// // // 4.
// // var f = [];
// // function factorial(num) {
// //   if (num < 0)  {
// //     return false;
// //   }
// //   if (num === 0 || num === 1)
// //     return 1;
// //   if (f[num] > 0)
// //     return f[num];
// //   return f[num] = factorial(num-1) * num;
// // }
// // console.log(factorial(5));
// // console.log(factorial(0));
// // console.log(factorial(1));
// // console.log(factorial(-1));





// // function final(start)  {
// var input = [[11, 13], [0, 2]];
// //Expected output = [[2, 0], [13, 11]]
// var next = 0;
// var final = [];
// for (var i = 0; i < input.length; i++) {
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//   }
// }
// console.log(next);
