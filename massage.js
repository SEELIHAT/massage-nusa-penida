/*function sendMessageToWhatsApp(phoneNumber) {
    var message = "Hello, I would like to order.";

    // Replace spaces with %20 for URL
    message = encodeURIComponent(message);

    var url = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(url, '_blank');
  }*/
  /*function sendMessageToWhatsApp(phoneNumber) {
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
  function sendMessageToWhatsApp(phoneNumber, message) {
    var whatsappMessage = encodeURIComponent(message);
    window.open("https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + whatsappMessage, "_blank");
}

document.querySelectorAll('.buttt').forEach(button => {
    button.addEventListener('click', function() {
        let messageType = this.getAttribute('type');
        let message = this.parentNode.querySelector('.order').textContent.replace('Order:', '');
        sendMessageToWhatsApp('+6281338413449', message);
    });
});
