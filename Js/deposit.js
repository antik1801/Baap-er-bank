// Connection checking
// console.log('Connection successful');
// get deposit amount 
document.getElementById('btn-diposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    
    if(isNaN(newDepositAmountString) || newDepositAmountString === "" || newDepositAmountString === '0'){
        alert('Please enter a valid number!');
    }
    else{
        const newDepositAmount = parseFloat(newDepositAmountString);
        const depositeText = document.getElementById('deposit-text');
        const depositeTextString = depositeText.innerText;
        const depositAmount = parseFloat(depositeTextString);

        const totalDeposit = newDepositAmount + depositAmount;
        depositeText.innerText = totalDeposit ;
        
        const balanceTotalText = document.getElementById('Balance-total-text');
        const balanceTotalTextString = balanceTotalText.innerText;
        const balanceTotal = parseFloat(balanceTotalTextString);

        const bankTotal = balanceTotal + newDepositAmount ;
        
        balanceTotalText.innerText = bankTotal;
        depositField.value = '';
        
    }


})
