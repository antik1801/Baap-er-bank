function getElementByInputField(elementId){
    const getInput = document.getElementById(elementId);
    const getInputString = getInput.value;
    if(isNaN(getInputString)|| getInputString === 0){
        alert('Please enter the correct number!');
        return 0;
    }
    else{
    const getInputValue = parseFloat(getInputString);
    getInput.value = '';
    getInput.removeAttribute('placeholder');
    return getInputValue;
    }
}

function getTextElementById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementValue = parseFloat(textElementString);
    return textElementValue;
}

function getCalculationSum(value1, value2){
    return value1+value2;
}

function getCalculationSub(value1, value2){
    return value1 - value2;
}

function setElementText(elementId, value){
    const textElement = document.getElementById(elementId);
    if(value <= -1){
        alert('Insufficient Balance');
    }
    else{
        textElement.innerText = value; 
    }
}



document.getElementById('btn-diposit').addEventListener('click',function(){
    const getWithdraw = getElementByInputField('deposit-field');
    const previousWithdraw = getTextElementById('deposit-text');
    const balanceText = getTextElementById("Balance-total-text");
    const totalWithdraw = getCalculationSum(getWithdraw, previousWithdraw);
    setElementText("deposit-text", totalWithdraw);
    const balanceTotal = getCalculationSum(getWithdraw, balanceText);
    setElementText("Balance-total-text", balanceTotal);
})
document.getElementById("btn-withdraw").addEventListener('click',function(){
    const newWithdraw = getElementByInputField('withdraw-field');
    const previousWithdraw = getTextElementById('withdraw-text');
    const balanceText = getTextElementById("Balance-total-text");
    const totalWithdraw = getCalculationSum(newWithdraw, previousWithdraw);
    setElementText('withdraw-text', totalWithdraw);
    const restAmount = getCalculationSub(balanceText , newWithdraw);
    setElementText("Balance-total-text",restAmount);

})