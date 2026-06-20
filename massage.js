function sendMessageToWhatsApp(phoneNumber, pId) {
  var message = "Hello, I would like to order.";

  // Get the text content from the specified <p> element
  var additionalMessage = document.getElementById(pId).textContent;

  // Append the additional message to the main message
  message += " " + additionalMessage;

  // Replace spaces with %20 for URL
  message = encodeURIComponent(message);

  var url = "https://wa.me/" + phoneNumber + "?text=" + message;

  window.open(url, '_blank');
}

// FIRST TEXT
const sourceText1 =
"The perfect massage after your island adventure. Relax at Lunar Spa while admiring the ocean and majestic Mount Agung.";

const output1 = document.querySelector(".swim");

let visibleText1 = "";
let currentIndex1 = 0;
const maxChars1 = 35;

setInterval(() => {
    visibleText1 += sourceText1[currentIndex1];
    currentIndex1 = (currentIndex1 + 1) % sourceText1.length;

    if (visibleText1.length > maxChars1) {
        visibleText1 = visibleText1.slice(1);
    }

    output1.textContent = visibleText1;
}, 100);


// SECOND TEXT
const sourceText2 =
"Wonderful massage after your trip. Feel the magic touch of Indonesian culture and pure relaxation.";

const output2 = document.querySelector(".swimer");

let visibleText2 = "";
let currentIndex2 = 0;
const maxChars2 = 35;

setInterval(() => {
    visibleText2 += sourceText2[currentIndex2];
    currentIndex2 = (currentIndex2 + 1) % sourceText2.length;

    if (visibleText2.length > maxChars2) {
        visibleText2 = visibleText2.slice(1);
    }

    output2.textContent = visibleText2;
}, 100);

/*function sendMessageToWhatsApp(phoneNumber) {
    var message = "Hello, I would like to order.";

    // Replace spaces with %20 for URL
    message = encodeURIComponent(message);

    var url = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(url, '_blank');
  }*/
 /* function sendMessageToWhatsApp(phoneNumber) {
    var message = "Hello, I would like to order.";
  
    // Get the text content from the <p class="order"> element
    var additionalMessage = document.querySelector('.order').textContent;
  
    // Append the additional message to the main message
    message += " " + additionalMessage;

    
    // Replace spaces with %20 for URL
    message = encodeURIComponent(message);
  
    var url = "https://wa.me/" + phoneNumber + "?text=" + message;
  
    window.open(url, '_blank');
  }*/
 
