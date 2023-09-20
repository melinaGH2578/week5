function isValidISBN10(isbn) {
    isbn = isbn.replace(/[-\s]/g, '');
  
   
    if (isbn.length !== 10) {
      return false;
    }
 
    
    for (let i = 0; i < 9; i++) {
      if (isbn.charAt(i) < '0' || isbn.charAt(i) > '9') {
        return false;
      }
      }

      let sum = 0;
      for (let i = 0; i <9; i++)
      sum += isbn.charAt(i) * (i + 1);

      let lastChar = isbn.charAt(9);
      if (lastChar === 'x') {
        sum += 10*10;

      } else if (lastChar < '0' || lastChar > '9') {
        return false;

      } else {
        sum += lastChar * 10;

        return sum % 11 ===0;
      }

    }
//       if (isNaN(digit)) {
//         return false;
//       }
//       sum += digit * (i + 1);
//     }
//     const lastChar = digits[9];
//     const lastDigit = lastChar === "X" ? 10 : parseInt(lastChar);
//     if (isNaN(lastDigit)) {
//       return false;
//     }
//     sum += lastDigit * 10;
  
//     return sum % 11 === 0;
//   }
