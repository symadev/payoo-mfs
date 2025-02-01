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

        // get the current balance
        const balance = document.getElementById('account-balance').innerText;
console.log( typeof balance);

//add money input with balance
const addMoneyNumber = parseFloat(addMoneyInput);
const balanceNumber = parseFloat(balance)
const newBalance =addMoneyNumber +balanceNumber;
console.log(newBalance);


//update the balance in the ui

document.getElementById('account-balance').innerText = newBalance;



    } else {
        alert('Failed to add money! Please try again.');
    }
});



    
