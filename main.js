//alert("test")

var _ = {
///average
  averageCalc: function (array) {   var total = 0;
  //for loop to add all of the numbers
      for (i=0; i <array.length; i++){
        total = total + array[i]
      }
      ///returns the value of total/how many in the array
      return (total/(array.length)) }
      ,
///contains
  contains: function(array,num) {
      array.includes(num)
    }
    ,
///first - returns the first element in an array
  first: function(array) {
    //find first index
    return array[0]
  }
  ,
///last - returns last element in an array
  last: function (array) {
    return array.pop()
  }
  ,

///max - returns the maximum value in an array
  max: function (array) {
    ///loop container
    var lastNum = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > lastNum) {
        lastNum = array[i]
      }
    }
    return lastNum
  }
  ,

///min - returns the min. value in an array
  min: function (array) {
    ///for loop to compare number vs what is in the array
    var lastNum = 0;
    ///start for loop
    for (var i = 0; i < array.length; i++) {
      if (array[i] < lastNum){
        lastNum = array[i]
      }
    }
    return lastNum
  }


}



//averageCalc
// var averageCalc = function (arr) {
//   //add container
//   var total = 0;
//   //for loop to add all of the numbers
//   for (i=0; i <arr.length; i++){
//     total = total + arr[i]
//   }
//   ///returns the value of total/how many in the array
//   return (total/(arr.length))
// }

//create variable to output average calculation of array
var resultsAvg = (averageCalc(object.numbers))
console.log(resultsAvg)

//.contains  - returns true is a given value is present in an array

function()

array = [2,3,4,5,6]
