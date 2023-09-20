function incrementString(str) {
   
    const lastDigitIndex = str.search(/\d(?=\D*$)/);
  
    if (lastDigitIndex === -1) {
     
      return str + "1";
    } else {
     
      const prefix = str.slice(0, lastDigitIndex);
      const suffix = str.slice(lastDigitIndex);
  
     
      const incremented = (parseInt(suffix) + 1). toString(). padStart(suffix.length, "0");
  
    
      return prefix + incremented;
    }
  }