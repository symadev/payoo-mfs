// console.log('button clicking file added');

// Step 1: Set event handler
document.getElementById('button-login').addEventListener('click', function(event) {

    // Step 2: Prevent default behavior (reloading the page)
    event.preventDefault(); // <-- Prevent form submission on button click

    console.log('button clicking file added');

    // Step 3: Get the phone number
    const phoneNumber = document.getElementById('phone-number').value; // Get the value of the input field
    console.log(phoneNumber); // Log the phone number value

});
