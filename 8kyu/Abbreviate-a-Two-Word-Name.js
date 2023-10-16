//problem
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F

//answer

function abbrevName(name){
    return name.split(' ').map((name) => name[0]).join('.').toUpperCase()
  }







//continue to pratice 












//problem
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F

//solution -> did better than before but you should have used name instead of c

function convertName(name){
    return name.split(' ').map((c) => c == name[0]).join('.').toUpperCase();
}


