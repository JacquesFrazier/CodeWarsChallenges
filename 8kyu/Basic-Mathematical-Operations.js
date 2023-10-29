//problem

//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

//answer 1

function basicOp(operation, value1, value2){
    const rules = {"+": value1 + value2, "-": value1 - value2, "*": value1 * value2, "/": value1 / value2 };
    return rules[operation];
  }

//answer 2

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

//answer 3

function basicOp(o, a, b) {
    return eval(a+o+b);
  }













//continue to pratice 

//problem
//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7


//solution
function basicOp(operation, value1, value2) {
switch(operation){

    case '+' : 
    return value1 + value2;
    break;
    case '-':
    return value1 - value2;
    break;
    case '*':
    return value1 * value2;
    break;
    case '/':
    return value1 / value2;
    break;
    default: 
    return 0;
    break;

}
    
}



