// Add an event handler to the add money form
document.getElementById('add-money-form').addEventListener('submit', function(event) {
    // Prevent page reload
    event.preventDefault();  

    // Get money amount and pin input values
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addPiInput = document.getElementById('add-pin-number').value;

    console.log(addMoneyInput);
    console.log(addPiInput);

    // Verify pin number
    if (addPiInput === '1234') {
        console.log('Adding your money to your account');
        alert('Money added successfully!');
    } else {
        alert('Failed to add money! Please try again.');
    }
});



    
