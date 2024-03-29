//problem 

//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
//Example
//With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

//1 * (2 + 3) = 5
//1 * 2 * 3 = 6
//1 + 2 * 3 = 7
//(1 + 2) * 3 = 9
//So the maximum value that you can obtain is 9.


//answer 1

function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
  }

//answer 2

function expressionMatter(a, b, c) {
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
  }

//answer 3

function expressionMatter(a, b, c) {
  
  if(a==1 && b==1 && c==1){
    return 3;
  }
  
  if(a!=1 && b!=1 && c!=1){
    return a*b*c;
  }
  if(a==1 && b!=1 && c!=1){
    return (a+b)*c
  }
   if(a!=1 && b!=1 && c==1){
    return a*(b+c);
  }
 
  if(a!=1 && b==1 && c==1){
    return a*2;
  }
 
  if(a==1 && b==1 && c!=1){
    return c*2;
  }
 
  if(a==1 && b!=1 && c==1){
    if(a==c){
      return a+b+c;
    }
    if(a>c){
      return a*(b+c);
    }
    if(a<c){
      return (a+b)*c;
    }
  }
  
  if(a!=1 && b==1 && c!=1){
    if(a==c){
      return (a+b)*c;
    }
    if(a>c){
      return a*(b+c);
    }
    if(a<c){
      return (a+b)*c;
    } 
  } 
}
