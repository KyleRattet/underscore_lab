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
    var min = Infinity;
    for (var i = 0; i < array.length; i++) {
      //if array element is less than the last name,
      //set the array element to last number
      if (array[i] < min) {
        min = array[i]
      }
    }
    return min
  }
  ,

//shuffle -- shuffle - Returns a shuffled copy of the list, using a version of
//the Fisher-Yates shuffle. Don't worry about implementing that exact shuffle
//alogrithm. Start by creating your own simple shuffle.

  // shuffle: function (array) {
  //   for (var i = array.length - 1; i > 0; i--) {
  //     var j = Math.floor(Math.random()*(i+1));
  //     var temp = array[i];
  //     array[i]= array[j];
  //     array[j]= temp;
  //   }
  //   return array;
  // }

  shuffle: function (array) {
    for (var i = 0; i < array.length; i--) {
      var indexRandom = Math.floor(Math.random()*(i+1));
      var temp = array[i];
      array[i]= array[indexRandom];
      array[indexRandom]= temp;
    }
    return array;
  }

//shuffle function pseudo code
//1. start with an array
//2. make a copy of the array, so we aren't impacting the original array
//3. assign an array literal container (blank array)
//4. for loop to loop through each element of the array copy
//5. generate random index number
//6. grab an element from the original array with random index
//7. exit for loop
//8. return array

shuffle: function (array) {
  var arrayCopy = array;
  var shuffled = [];
    while (arrayCopy.length > 0){
      var randomIndex = Math.floor(Math.random()*arrayCopy.length);
      shuffled.push(arrayCopy[randomIndex]);
      arrayCopy.splice(randomIndex, 1);
  }
  return shuffled;
}
//sample --  Produce a random sample from the list. Pass a number to return n
//random elements from the list. Otherwise a single random item will be returned.
  sample: function (array) {

  }

,

//difference -- returns the values from array that are not present in the other array.
  difference: function (array1, array2) {
    var same = [];
    var diff = [];

    for (var i = 0; i < array1.length; i++) {
      return array[i]
    }
    }



  ,
}
