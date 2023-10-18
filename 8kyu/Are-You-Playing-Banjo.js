//problem 
//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//name + " plays banjo" 
//name + " does not play banjo"
//Names given are always valid strings.

//answer 1

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
  }

//answer 3

function areYouPlayingBanjo(name) {
    if (name.startsWith("R") || name.startsWith("r")) {
      return name + " plays banjo";
    } else return name + " does not play banjo";
}

//answer 2

  function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }











//continue pratice









//problem 
//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//name + " plays banjo" 
//name + " does not play banjo"
//Names given are always valid strings.


//solution
function banjoName(name){
    return name[0] === 'r'.toLowerCase() ? return name + "plays bango" 
        : return name + "does not play banjo";


        
}






