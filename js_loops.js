// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// 1.
// for (i = 0; i <= 1000; i+=100) {
//   console.log(i);
// }

// 2.
// for (i = 1; i < 128; i*=2) {
//   console.log(i);
// }

// 3.
// for (i = 0; i <= 10; i+=2) {
//   console.log(i);
// }

// // 4.
// for (i = 3; i <= 15; i+=3) {
//   console.log(i);
// }

// 5.
// for (i = 9; i >=0; i--) {
//   console.log(i);
// }

// 6.
// for (i = 1; i <= 4; i++) {
//   console.log(i);
//   console.log(i);
//   console.log(i);
// }

// //7.
// function repeat() {}
//   for(j=1; j<=3; j++) {
//     for (i = 0; i <= 4; i++) {
//       console.log(i);
//     };
// };
// repeat()

// //1-25 even/odd
// for (i = 0; i <= 25; i++) {
//   if(i%2===0) {
//     console.log(i + " is Even");
//   }
//   else {
//     console.log(i + " is Odd");
//   }
// }


// //FIZZ BUZZ
// for (i=1; i <= 50; i++)
// {
//     if (i % 15 === 0)
//         console.log("FizzBuzz");
//     else if (i % 3 === 0)
//         console.log("Fizz");
//     else if (i % 5 === 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }

// 3&5 multiples sum
var sum = 0
for(i=1; i<1000; i++)  {
  if(i%3 === 0 || i%5 ===0)
  sum +=i;
}
console.log(sum);
// for(j=0; j<1000; j+=5)  {
//   five += j;
// }
// console.log(three);



// // # triangle
// for (i = "#"; i.length < 7; i += "#")
// console.log(i);
