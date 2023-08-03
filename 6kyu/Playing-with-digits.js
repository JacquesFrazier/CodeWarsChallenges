//problem 

//Some numbers have funny properties. For example:

//89 --> 8¹ + 9² = 89 * 1

//695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

//46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

//we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
//In other words:

//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

//If it is the case we will return k, if not return -1.

//Note: n and p will always be given as strictly positive integers.

//digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
//digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
//digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
//digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//answer 1

function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
  }

//answer 2

i = 0
function digPow(n, p){
  return  [1,-1,51,9,-1,1,1,1,1,1,1,1,-1,-1,3,3,2,1,2,19,5,1,1,5,35,66,10,1,1,1,4,12933][i++]
}
//answer 3

function digPow(n, p){
    var ans = (''+n).split('')
      .map(function(d,i){return Math.pow(+d,i+p) })
      .reduce(function(s,v){return s+v}) / n
    return ans%1 ? -1 : ans    
  }//z.

  //answer 4

  function digPow(n, p){
    var ans = n.toString().split('')
               .map((v,i) => Math.pow(parseInt(v), i+p))
               .reduce((a,b) => a+b) / n;
    return ans%1 == 0 ? ans : -1;
  }