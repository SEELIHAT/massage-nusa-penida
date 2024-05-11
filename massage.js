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
 
