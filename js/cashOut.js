document.getElementById('btn-cash-out').addEventListener('click', function(event){

    event.preventDefault();
    // console.log('add the cash out section');





    const cashOut = document.getElementById('input-cash-out').value;

    const cashOutNumber= parseFloat(cashOut);
    const cashOutPin = document.getElementById('cash-out-pin').value;

    // console.log(cashOut);
    // console.log(cashOutPin);




    if(cashOutPin ==='1234'){
        console.log('the money is reducing');
        const balance = document.getElementById('account-balance').innerText;
        // console.log(balance);
        const balanceNumber =parseFloat(balance);
        //   reduce the balance

        const newBalance = balanceNumber - cashOutNumber;

        // update the ui balance

        document.getElementById('account-balance').innerText =  newBalance;
    }
    else{
        alert('failed to cash out! please try again later' );
    }
});