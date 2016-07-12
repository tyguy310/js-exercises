// console.log('sanity check');
//
//
// // 1.
// function sum(num1, num2) {
//   return num1 + num2;
// }
//
// var resultSum = sum(1, 2);
//
// console.log(resultSum === 3);
// console.log(resultSum === 2);
//
//
//
// console.log('//////////////');
//
//
// // 2.
// function isEqual(arg1, arg2)  {
//   if(arg1 === arg2) {
//     return true;
//   } else{
//     return false;
//   }
// }
// console.log(isEqual(1, 1));
// console.log(isEqual(1, 2));
// console.log(isEqual(1, '1'));
// console.log(isEqual('one', 'one'));
//
// // 3.
// function discountPercentage(origAmt, discount)  {
//   if (discount < 100 && discount > 0) {
//     return origAmt * (discount/100);
//   } else{
//     return "warning";
//   }
// }
//   console.log(discountPercentage(143,15))
//   console.log(discountPercentage(143,0))
//
// // 4.
// function capFirst(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }
// console.log(capFirst(""));

// // 5.
// function evenNumbers(integer) {
//   for(i = 0; i < integer; i += 2)  {
//      console.log(i);
//   }
// }
// evenNumbers(75)


// // 6.
// function isDivisible(int1, int2)  {
//   if( int2 === 0) {
//     return "Nice try";
//   } else if (int1 > 100 || int1 < 0)  {
//     return "Enter numbers between 0 and 100"
//   }
//   else if (int2 > 100 || int2 < 0)  {
//     return "Enter numbers between 0 and 100"
//   }
//   else if(int1 % int2 === 0)  {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isDivisible(42,5));
// console.log(isDivisible(42,6));
// console.log(isDivisible(42,0));
// console.log(isDivisible(105,4));


// 7.
function oddNumbers(digit) {

  if (digit > 100 || digit < 0) {
    console.log("Enter a number between 0 and 100");
  }

  else if (digit < 40 && digit >= 0) {
    for(i = 1; i < 40; i += 2)  {
      console.log(i);
    }
  }

  else {
    for(j = 41; j <= digit; j += 2)  {
      console.log(j);
    }
  }
}

oddNumbers(-1);
oddNumbers(67);
oddNumbers(25);
