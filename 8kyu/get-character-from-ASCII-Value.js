//problem 

//Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

//65 --> 'A'
//97 --> 'a'
//48 --> '0
//For ASCII table, you can refer to http://www.asciitable.com/

//answer 1

function getChar(c) {
    return String.fromCharCode(c)
  }

//answer 2

const CHAR_CODES = []

CHAR_CODES[32]= " "
CHAR_CODES[33]= "!"	
CHAR_CODES[34]= '"'	
CHAR_CODES[35]= "#"	
CHAR_CODES[36]= "$"	
CHAR_CODES[37]= "%"	
CHAR_CODES[38]= "&"	
CHAR_CODES[39]= "'"	
CHAR_CODES[40]= "("	
CHAR_CODES[41]= ")"	
CHAR_CODES[42]= "*"	
CHAR_CODES[43]= "+"	
CHAR_CODES[44]= ","	
CHAR_CODES[45]= "-"	
CHAR_CODES[46]= "."	
CHAR_CODES[47]= "/"	
CHAR_CODES[48]= "0"	
CHAR_CODES[49]= "1"	
CHAR_CODES[50]= "2"	
CHAR_CODES[51]= "3"	
CHAR_CODES[52]= "4"	
CHAR_CODES[53]= "5"	
CHAR_CODES[54]= "6"	
CHAR_CODES[55]= "7"	
CHAR_CODES[56]= "8"	
CHAR_CODES[57]= "9"	
CHAR_CODES[58]= ":"	
CHAR_CODES[59]= ";"	
CHAR_CODES[60]= "<"	
CHAR_CODES[61]= "="	
CHAR_CODES[62]= ">"	
CHAR_CODES[63]= "?"	
CHAR_CODES[64]= "@"	
CHAR_CODES[65]= "A"	
CHAR_CODES[66]= "B"	
CHAR_CODES[67]= "C"	
CHAR_CODES[68]= "D"	
CHAR_CODES[69]= "E"	
CHAR_CODES[70]= "F"	
CHAR_CODES[71]= "G"	
CHAR_CODES[72]= "H"	
CHAR_CODES[73]= "I"	
CHAR_CODES[74]= "J"	
CHAR_CODES[75]= "K"	
CHAR_CODES[76]= "L"	
CHAR_CODES[77]= "M"	
CHAR_CODES[78]= "N"	
CHAR_CODES[79]= "O"	
CHAR_CODES[80]= "P"	
CHAR_CODES[81]= "Q"	
CHAR_CODES[82]= "R"	
CHAR_CODES[83]= "S"	
CHAR_CODES[84]= "T"	
CHAR_CODES[85]= "U"	
CHAR_CODES[86]= "V"	
CHAR_CODES[87]= "W"	
CHAR_CODES[88]= "X"	
CHAR_CODES[89]= "Y"	
CHAR_CODES[90]= "Z"	
CHAR_CODES[91]= "["	
CHAR_CODES[92]= "\\"	
CHAR_CODES[93]= "]"	
CHAR_CODES[94]= "^"	
CHAR_CODES[95]= "_"	
CHAR_CODES[96]= "`"	
CHAR_CODES[97]= "a"	
CHAR_CODES[98]= "b"	
CHAR_CODES[99]= "c"	
CHAR_CODES[100]= "d"
CHAR_CODES[101]= "e"
CHAR_CODES[102]= "f"
CHAR_CODES[103]= "g"
CHAR_CODES[104]= "h"
CHAR_CODES[105]= "i"
CHAR_CODES[106]= "j"
CHAR_CODES[107]= "k"
CHAR_CODES[108]= "l"
CHAR_CODES[109]= "m"
CHAR_CODES[110]= "n"
CHAR_CODES[111]= "o"
CHAR_CODES[112]= "p"
CHAR_CODES[113]= "q"
CHAR_CODES[114]= "r"
CHAR_CODES[115]= "s"
CHAR_CODES[116]= "t"
CHAR_CODES[117]= "u"
CHAR_CODES[118]= "v"
CHAR_CODES[119]= "w"
CHAR_CODES[120]= "x"
CHAR_CODES[121]= "y"
CHAR_CODES[122]= "z"
CHAR_CODES[123]= "{"
CHAR_CODES[124]= "|"
CHAR_CODES[125]= "}"
CHAR_CODES[126]= "~"


function getChar(index){
  return CHAR_CODES[index]
}