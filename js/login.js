// console.log('button clicking file added');

// Step 1: Set event handler
document.getElementById('button-login').addEventListener('click', function(event) {

    // Step 2: Prevent default behavior (reloading the page)
    event.preventDefault(); // <-- Prevent form submission on button click

    // console.log('button clicking file added');

    // Step 3: Get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value; // Get the value of the input field
    const pinNumber = document.getElementById('pin-number').value; // Get the value of the input field
    console.log(phoneNumber); // Log the phone number value
    console.log(pinNumber); // Log the phone number value

//validate the number and pin
    //this is temporary //you should not do like this

    if(phoneNumber==='5' && pinNumber==='1234'){
        console.log('you are logged in');
        window.location.href='/home.html'
        //window.location.href is used to get or set the entire URL of the current page.
    }
    else{
        alert('you are putting wrong' );
    }

});
