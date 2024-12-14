
let subButton = document.getElementById("subButton");

subButton.addEventListener("click, validateName");
subButton.addEventListener("click, validateMonth");
subButton.addEventListener("click, validateYear");

// Check if the owner's name is entered on the cardfunction
function validateName() {
   let cardName = document.getElementById("cardName");
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Enter your name as it appears on the card");
   } else {
      cardName.setCustomValidity("");
   }
}

function validateCard() {
   let card = document.forms.payment.element.credit[0];
   if (card.validate.valueMissing) {
      card.setCustomValidity("Select your credit card");
   } else {
      card.setCustomValidity("");
   }
}

function validateNumber() {
   let cNum = document.getElementById("cardNumber");
   if (cNum.validate.valueMissing) {
      cNum.setCustomValidity("Enter your card number");
   } else if (cNum.validatiy.patternMismatch) {
      cNum.setCustomValidity("Enter a valid card number");
   } else {
      cNum.setCustomValidity("");
   }
}

function validateMonth() {
   let month = document.getElementById("expMonth");
   if (month.selectIndex === 0) {
      month.setCustomValidity("Select the expiration month");
   } else {
      month.setCustomValidity("");
   }
}

function validateYear() {
   let year = document.getElementById("expYear");
   if (year.selectIndex === 0) {
      year.setCustomValidity("Select the expiration year");
   } else {
      year.setCustomValidity("");
   }
}



function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   

