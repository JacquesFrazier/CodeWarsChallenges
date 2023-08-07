//problem 

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


//answer 1

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

//answer 2

function removeExclamationMarks(s) {
    return s.split('!').join('');
  }