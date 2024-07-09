document.addEventListener('DOMContentLoaded',programFunction);
const add=document.querySelector('#add');
const withdraw=document.querySelector('#withdraw');
const amount=document.querySelector('#add-withdraw');
const form=document.querySelector('#form');
const errorDiv=document.querySelector('#error');
const oneButton=document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const zeroButton = document.querySelector('#zero');

let spanBalance=document.querySelector('#balance');
let balance=0;
let newBalance=0;
function programFunction(){
    balance=JSON.parse(localStorage.getItem('balance')) || 0;
    console.log(add, withdraw,spanBalance, newBalance, errorDiv, amount);
    buttons();
}
function uploadBalance(){
    spanBalance.textContent=balance;
    syncUpLS();
}
function buttons(){
    uploadBalance()
    add.addEventListener('click', addButton);
    withdraw.addEventListener('click', withdrawButton)
    amount.addEventListener('blur', amountFunction)
    zeroButton.addEventListener('click', numbers)
    oneButton.addEventListener('click', numbers);
    twoButton.addEventListener('click', numbers);
    threeButton.addEventListener('click', numbers);
    fourButton.addEventListener('click', numbers);
    fiveButton.addEventListener('click', numbers);
    sixButton.addEventListener('click', numbers);
    sevenButton.addEventListener('click', numbers);
    eightButton.addEventListener('click', numbers);
    nineButton.addEventListener('click', numbers);
    zeroButton.addEventListener('click', numbers);
}
function numbers(e){
    amount.value+=parseFloat(e.target.value);
    newBalance=parseFloat(amount.value);
}
function addButton(){
    balance+=newBalance;
    reset();
    uploadBalance();
}
function withdrawButton(){
    balance-=newBalance;
    reset();
    uploadBalance();
}
function amountFunction(e){
    if(e.target.value===''){
        reset();
        return;
    }else if (!/^-?\d+(\.\d+)?$/.test(e.target.value)){
        error();
        reset();
        return;
    }
    newBalance=parseFloat(e.target.value);
}
function error(){
    resetDiv();
    const erromsj=document.createElement('p');
    erromsj.textContent='Invalid Amount'
    erromsj.classList.add('error');
    console.log(erromsj)
    errorDiv.appendChild(erromsj);
    setTimeout(()=>{
        erromsj.remove()
    },2000)
}
function reset(){
    newBalance=0;
    form.reset();
}
function resetDiv(){
    while(errorDiv.firstChild){
        errorDiv.removeChild(errorDiv.firstChild);
    }
}
function syncUpLS(){
    localStorage.setItem('balance', JSON.stringify(balance));
}