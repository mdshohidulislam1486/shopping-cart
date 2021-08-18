function shoppingCart(product, isIncreasing, price){
    const productInput = document.getElementById(product +'-number');
    let productNumber = parseInt(productInput.value)
    if(isIncreasing == true ){
        productInput.value = productNumber + 1
    } else if(isIncreasing == false && productNumber > 0)
    productInput.value = productNumber - 1

    const pirceInput = document.getElementById(product + "-total");
    productNumber = productInput.value;
    pirceInput.innerText = productNumber * price
    totalCalculator()

}

function getInput(product){
    const productInput = document.getElementById(product +'-number').value;
    const productTextToNum = parseInt(productInput)
    return productTextToNum;
}

function totalCalculator(){
    const getPhoneTotal = getInput('phone') * 59;
    const getCaseTotal = getInput('case') * 1219;

const subTotalInput = document.getElementById('subtotal');
const subTotalAmount = parseInt(getPhoneTotal) + parseInt(getCaseTotal);
const totalSubToatal = subTotalAmount
subTotalInput.innerText =totalSubToatal;

const tax = document.getElementById('tax-amount');
const taxaAmount = totalSubToatal / 10 
tax.innerText = taxaAmount;

const totalInput = document.getElementById('total-amount');
totalInput.innerText = totalSubToatal + taxaAmount;

}



document.getElementById('phone-plus').addEventListener('click', function(){
    shoppingCart('phone', true, 59)

})
document.getElementById('phone-minus').addEventListener('click', function(){
    shoppingCart('phone', false, 59)
    
})
document.getElementById('case-plus').addEventListener('click', function(){
    shoppingCart('case', true, 1219) 
    
})
document.getElementById('case-minus').addEventListener('click', function(){
    shoppingCart('case', false, 1219) 
    
})

