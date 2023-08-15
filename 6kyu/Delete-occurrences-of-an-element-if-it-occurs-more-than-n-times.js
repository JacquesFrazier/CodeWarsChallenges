//problem 

//Enough is enough!
//Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
//He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

//Task
//Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
//For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
//With list [20,37,20,21] and number 1, the result would be [20,37,21].

//answer 1

function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }

//answer 2

const deleteNth = (a, x) => {
    let m = {};
    return a.filter( v => (m[v] = m[v]+1||1) <= x );
  }

//answer 3

function deleteNth(arr,x){
    var obj = {}
    return arr.filter(function(number){
      obj[number] = obj[number] ? obj[number] + 1 : 1
      return obj[number] <= x
    })
  }

//answer 4

function deleteNth(arr, x){
    return arr.reduce(function(a, v){
      return count(a, v) < x ? a.concat(v) : a;
    }, []);
  }
  
  function count(arr, z){
    return arr.filter(function(q){ return z == q }).length;
  }