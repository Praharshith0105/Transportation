function openPaymentDialog() {
    document.getElementById("paymentDialog").style.display = "block";
}

function closePaymentDialog() {
    document.getElementById("paymentDialog").style.display = "none";
}

function processPayment() {
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    if (paymentMethod === "creditCard") {
        // Implement credit card payment processing logic here
        alert("Processing payment via Credit Card");
    } else if (paymentMethod === "cash") {
        // Implement cash payment processing logic here
        alert("Processing payment via Cash");
    }

    // Close the dialog after processing payment
    closePaymentDialog();
}