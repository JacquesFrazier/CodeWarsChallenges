//problem
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

//answer 1
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

//answer 2
function validatePIN (pin) {
  
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}

//answer 3
function validatePIN (pin) {
  //return true or false
	var n = pin.length;
  if( n != 4 && n != 6)
  		return false;
  for (var i in pin)
  		if (pin[i] > '9' || pin[i] < '0')
      		return false;
  return true;
}
