//problem 

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//Examples
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 
//Notes
//Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//answer 1

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

//answer 2

function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}

//answer 3

function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }

//answer 4

function duplicateEncode(word){
    let newString = '';
    word = word.toLowerCase() || word
      word.split('').filter((x, index) => {
        if(word.indexOf(x) !== index){
          newString += ')'
        }else if(word.lastIndexOf(x) !== index){
          newString += ')'
        }else{
          newString += '('
        }
      })
      return newString;       
}