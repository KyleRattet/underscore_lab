var _ = {
  average: function (array) {
    //add up individual elements within the array
    //divide by the total number of elements(length)
    //return average
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total/array.length;
  },
  // contains - returns true if a given value is present in an array
  contains: function(array, num) {
    present = false;
    for (var i = 0; i < array.length; i++) {
      // console.log("i" + i);
      // console.log("array[i] " + array[i]);
      if (num === array[i]) {
        // console.log("num " + num);
        present = true;
      }
    } return present;
  },

  first: function(array) {
    return array[0];
  },

  last: function(array) {
    return array.pop();
  },

  max: function(array){
    var maxNum = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      }
    } return maxNum;
  },

  min: function(array) {
    var minNum = Infinity;
    for (var i = 0; i < array.length; i++) {
      if (array[i] < minNum) {
        minNum = array[i]
      }
    } return minNum;
  },

  shuffle: function(array) {
    ///create new array copy to keep the original intact
    var arrayCopy = array;
    //generate random index number shuffle
    var shuffled = [];
      while(arrayCopy.length > 0) {
        var randomIndex = Math.floor(Math.random()*arrayCopy.length);
        shuffled.push(arrayCopy[randomIndex]);
        arrayCopy.splice(randomIndex,1);
      }
    return shuffled;
  },

  sample: function(array, numToReturn) {
    ///set default numToReturn to 1 if nothing given
    if(numToReturn === null) {
      return numToReturn = 1;
    }
    var sampleArray = _.shuffle(array);
    return sampleArray.splice(0,numToReturn);
  },

  difference: function(array1,array2){
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
      if (_.contains(array2, array1[i]) == false) {
        newArray.push(array1[i]);
      }
    } return newArray;
  },

  indexOf: function(array, num) {
    present = false;
    for (var i = 0; i < array.length; i++) {
      if (num === array[i]){
        present = true;
        return i;
      }
      if (present != true) {
        return -1;
      }
    }
  },

  pluck: function (array, property) {
    var plucked = [];
    for (var i = 0; i < array.length; i++) {
      plucked.push(array[i].age);
    }
    return plucked;
  },

  //each
  //each - iterates over an array and calls a
  //given function with each element

   each: function(array, function) {
     var newArray = [];
     for (i in array) {
       newArray.push(function(array[i]));
     }
   }

}

var peeps = [
  {name: "Bob", age: 32},
  {name: "Steve", age :12},
]
