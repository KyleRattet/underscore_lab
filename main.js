// //alert("test")
//
// var _ = {
// ///average
//   averageCalc: function (array) {   var total = 0;
//   //for loop to add all of the numbers
//       for (i=0; i <array.length; i++){
//         total = total + array[i]
//       }
//       ///returns the value of total/how many in the array
//       return (total/(array.length)) }
//       ,
// ///contains
//   contains: function(array,num) {
//       array.includes(num)
//     }
//     ,
// ///first - returns the first element in an array
//   first: function(array) {
//     //find first index
//     return array[0]
//   }
//   ,
// ///last - returns last element in an array
//   last: function (array) {
//     return array.pop()
//   }
//   ,
//
// ///max - returns the maximum value in an array
//   max: function (array) {
//     ///loop container
//     var lastNum = 0;
//     for (var i = 0; i < array.length; i++) {
//       if (array[i] > lastNum) {
//         lastNum = array[i]
//       }
//     }
//     return lastNum
//   }
//   ,
//
// ///min - returns the min. value in an array
//   min: function (array) {
//     ///for loop to compare number vs what is in the array
//     var min = Infinity;
//     for (var i = 0; i < array.length; i++) {
//       //if array element is less than the last name,
//       //set the array element to last number
//       if (array[i] < min) {
//         min = array[i]
//       }
//     }
//     return min
//   }
//   ,
//
// //shuffle -- shuffle - Returns a shuffled copy of the list, using a version of
// //the Fisher-Yates shuffle. Don't worry about implementing that exact shuffle
// //alogrithm. Start by creating your own simple shuffle.
//
//   // shuffle: function (array) {
//   //   for (var i = array.length - 1; i > 0; i--) {
//   //     var j = Math.floor(Math.random()*(i+1));
//   //     var temp = array[i];
//   //     array[i]= array[j];
//   //     array[j]= temp;
//   //   }
//   //   return array;
//   // }
//
//   shuffle: function (array) {
//     for (var i = 0; i < array.length; i--) {
//       var indexRandom = Math.floor(Math.random()*(i+1));
//       var temp = array[i];
//       array[i]= array[indexRandom];
//       array[indexRandom]= temp;
//     }
//     return array;
//   }
//
// //shuffle function pseudo code
// //1. start with an array
// //2. make a copy of the array, so we aren't impacting the original array
// //3. assign an array literal container (blank array)
// //4. for loop to loop through each element of the array copy
// //5. generate random index number
// //6. grab an element from the original array with random index
// //7. exit for loop
// //8. return array
//
// shuffle: function (array) {
//   var arrayCopy = array;
//   var shuffled = [];
//     while (arrayCopy.length > 0){
//       var randomIndex = Math.floor(Math.random()*arrayCopy.length);
//       shuffled.push(arrayCopy[randomIndex]);
//       arrayCopy.splice(randomIndex, 1);
//   }
//   return shuffled;
// }
// //sample --  Produce a random sample from the list. Pass a number to return n
// //random elements from the list. Otherwise a single random item will be returned.
//   sample: function (array) {
//
//   }
//
// ,
//
// //difference -- returns the values from array that are not present in the other array.
//   difference: function (array1, array2) {
//     var same = [];
//     var diff = [];
//
//     for (var i = 0; i < array1.length; i++) {
//       return array[i]
//     }
//     }
//
//
//
//   ,
// }
//
//
// //shuffle notes (mike)
//
// // -get current index (deck.length)
// // -enter loop (loop until no more elements remain in array)
// //      - generate random number for index
// //      - get current element
// //      - swap current with random
// //      - update current index
// //      - return array
//
// var deck =  [
//    '&#x1F0A1','&#x1F0A2','&#x1F0A3','&#x1F0A4','&#x1F0A5','&#x1F0A6','&#x1F0A7',
//    '&#x1F0A8','&#x1F0A9','&#x1F0AA','&#x1F0AB','&#x1F0AD','&#x1F0AE','&#x1F0B1',
//    '&#x1F0B2','&#x1F0B3','&#x1F0B4','&#x1F0B5','&#x1F0B6','&#x1F0B7','&#x1F0B8',
//    '&#x1F0B9','&#x1F0BA','&#x1F0BB','&#x1F0BD','&#x1F0BE','&#x1F0C1','&#x1F0C2',
//    '&#x1F0C3','&#x1F0C4','&#x1F0C5','&#x1F0C6','&#x1F0C7','&#x1F0C8','&#x1F0C9',
//    '&#x1F0CA','&#x1F0CB','&#x1F0CD','&#x1F0CE','&#x1F0D1','&#x1F0D2','&#x1F0D3',
//    '&#x1F0D4','&#x1F0D5','&#x1F0D6','&#x1F0D7','&#x1F0D8','&#x1F0D9','&#x1F0DA',
//    '&#x1F0DB','&#x1F0DD', '&#x1F0DE'
//  ];
//
// //array index start at zero,
// var currentIndex = deck.length;
//
// while(0 !== currentIndex){
//   var randomIndex = Math.floor(Math.random()* currentIndex);
//   //get current element
//
//   //index start at zero, need to decrement one each time
//   currentIndex -=1;
//   var tempValue = deck[currentIndex];
//   //console.log(currentIndex)
//   //swap current with random
//   deck[currentIndex] = deck[randomIndex];
//   deck[randomIndex] = tempValue;
//
//
//
// }
//
// //function to update the dom from shuffle example
// //card id
// updateDom(deck[0], "card");
//
// function updateDom(html, id) {
//   var element = document.getElementById(id);
//   element.innerHTML = html;
// // }
//
// var personalInfo = [
//   {name:'Chuck', age:22},
//   {name:'bob', age:90},
//   {name:'sally', age:2},
// ]
//
// function oldestPerson(array) {
//   //assign variable to house olders person
//   var ageMax = [];
//   var indexValue;
//   //for loop to iterate through array
//   for (var i = 0; i < array.length; i++) {
//     if(array[i].age > ageMax){
//       ageMax = array[i].age;
//       indexValue = i;
//     }
//   }
//   ///return the oldest
//   return personalInfo[indexValue].name;
//
// }
//
// console.log(oldestPerson(personalInfo));

///longest word

// function longestWord(string) {
//   //split up sting to form new array of each word
//   var soloString = string.split(" ");
//   var indexValue;
//   var longString = 0;
//   //for loop comparing string length
//   for (var i = 0; i < soloString.length; i++) {
//     if(soloString[i].length > longString){
//       longString = soloString[i].length;
//       indexValue = i;
//     }
//   }
//   return soloString[indexValue];
//
// }
//
// console.log(longestWord("what am i hthhththtS"));


//find max value of an array
myArray = [3,5,7,10];

function max(array) {
  var maxNum = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] > maxNum){
      maxNum = array[i];
    }
  }
  return maxNum;

}

console.log(max(myArray));

function foo(){
var bar = function() {
    return 3;
};
return bar();
var bar = function() {
    return 8;
};
}
