//problem
Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26

//answer 1
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}

//answer 2
function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}

//answer 3
const lowercaseCount = str => str.replace(/[^a-z]/g, '').length;

//answer 4
const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;

//answer 5
function lowercaseCount(str){
    //How many?
    var lowerCounter = 0;
    
    var abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for (var index = 0; index < str.length; index++) {
        var character = str[index];
        
        if (abcArray.indexOf(character) >= 0) {
            lowerCounter++;
        }
    }
    
    return lowerCounter;
}
