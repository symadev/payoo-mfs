//show the cash out from

document.getElementById('show-cash-out-from').addEventListener('click', function() {
document.getElementById('cash-out-from').classList.remove('hidden');

//hide the add money from

document.getElementById('add-money-from').classList.add('hidden');


});

//show the add money from and hide the cash out from
document.getElementById('btn-add-money').addEventListener('click', function(){
    document.getElementById('add-money-from').classList.remove('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
});