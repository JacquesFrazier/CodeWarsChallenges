//problem 

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//For example:

//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//answer 1

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

//answer 2

function uniqueInOrder(it) {
    var result = []
    var last
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== last) {
        result.push(last = it[i])
      }
    }
    
    return result
  }

//answer 3

var uniqueInOrder = function (iterable){
	return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

//answer 4

const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])

//answer 5

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    var result = []; // this array will store unique elements
      for (var i = 0, length = iterable.length; i < length; i++){
    // we step through the elements in iterable from the beginning to the end
          if (iterable.indexOf(iterable[i]) !== iterable.indexOf(iterable[i + 1])) {
              // and add an element to the result array every time this is different from the following element
        result.push(iterable[i]);
          }
      }
      return result;
  }