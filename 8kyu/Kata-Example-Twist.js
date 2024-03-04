//problem 
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.

//solution
var websites = new Array(1000).fill("codewars");

//solution 2
var websites = [];
while (websites.length < 1000) websites.push("codewars")

//solution 3
var websites = []
for (i=0; i<1000; i++)
{
  websites.push("codewars");
}
