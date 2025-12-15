
function capitalizeWords(text) {
  let words = text.split(" ");     
  let result = [];                 

  for (let i = 0; i < words.length; i++) {  
    let word = words[i];  
    let newWord =
      word[0].toUpperCase() + word.slice(1); 
    result.push(newWord); 
  }

  return result.join(" "); 

}














function isNumber(phone) {
  return phone.startsWith("+7") && phone.length == 12;
}


console.log(isNumber("+71234567800"));
console.log(isNumber("+7123456789"));
console.log(isNumber("71234567890"));
