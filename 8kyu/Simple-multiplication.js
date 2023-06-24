//problem
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//answer 1
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

//answer 2 
function simpleMultiplication(number){
	if(number % 2 == 0){
		return number * 8;
	}
	else{
		return number * 9;
	}
}
