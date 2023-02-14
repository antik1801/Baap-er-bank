// console.log('withdraw Js file connected');
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withDrawField = document.getElementById('withdraw-field');
    const withDrawFieldString = withDrawField.value ;
    if(isNaN(withDrawFieldString) || withDrawFieldString == '0'|| withDrawFieldString == ''){
        alert('Please enter a correct value');
    }
    else{
        const withDrawFieldAmount = parseFloat(withDrawFieldString);
        
        const WithdrawText = document.getElementById('withdraw-text');
        const WithdrawTextString = WithdrawText.innerText;
        const WithdrawAmount = parseFloat(WithdrawTextString);
        
        const withdrawTotal = withDrawFieldAmount + WithdrawAmount ;
        WithdrawText.innerText = withdrawTotal;
        document.getElementById('withdraw-field').value = '';
        
        withDrawField.removeAttribute('placeholder');
        
        const balanceTotalText = document.getElementById('Balance-total-text');
        const balanceTotalTextString = balanceTotalText.innerText;
        const balanceTotal = parseFloat(balanceTotalTextString);

        const remainBalance = balanceTotal - withDrawFieldAmount;
        if(remainBalance <= -1){
            alert("Don't have sufficient balance!")
            WithdrawText.innerText = WithdrawAmount;
            
        }
        else{
            balanceTotalText.innerText = remainBalance;
        }

          
    }
})