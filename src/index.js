const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let str = '';
    let tenNUm = '';
    let ch = '';
    let data = '';
    for(let i = 0; i < expr.length; i++) {
      let space = 0;
      tenNUm += expr[i];
      if(tenNUm.length == 10) {
       for(let l = 0; l < tenNUm.length; l++) {
        if(l == 0 && tenNUm[0] == '0') {
          while(tenNUm[l] == '0') {
            l++;
          }
        }
        data += tenNUm[l];
     
  
        if(data == '10' || data == '11') {
          if(data == '10') {
            ch += '.';
            data = '';
          } 
          if (data == '11') {
            ch += '-';
            data = '';
          }
        }
        if(data == '**********') {
          space++;
          data = '';
        }
  
        if(l+1 == tenNUm.length) {
          for(let key in MORSE_TABLE) {
            if(ch == key){
              
              str += MORSE_TABLE[key];
            }
          }
          if(space > 0) {
            str += ' ';
            space = 0;
          }
          tenNUm = '';
          ch = '';
        }
  
       }
      }
    }
    return str;

}

module.exports = {
    decode
}