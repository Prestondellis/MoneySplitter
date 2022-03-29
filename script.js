'use strict'

let splitSubTotal = 0
let regSubTotal = 0
let total = 0
let presTotal = 0
let sydTotal = 0
const ghost = document.querySelector('.ghost')
const whoPaid = document.querySelector('#whoPaid')
const regList = document.querySelector('#regList')
const splitList = document.querySelector('#splitList')
const totalText = document.querySelector('#total') 
let person = ''
const whoOwesWho = function(presTotal, sydTotal){
    if(presTotal > sydTotal){
        total = (presTotal - sydTotal) * 0.01
        totalText.textContent = 'Syd owes Pres $' + total
    } else if (sydTotal > presTotal){
        total = (sydTotal - presTotal) * 0.01
        totalText.textContent = 'Pres owes Syd $' + total
    } else {
        totalText.textContent = 'No money is owed (both amounts are equal)'
    }
}
document.querySelector('#presBtn').addEventListener
('click',function() {
    ghost.classList.remove('hidden')
    whoPaid.textContent = 'Preston paid for this transaction.'
    person = 'Preston'
})

document.querySelector('#sydBtn').addEventListener
('click',function() {
    ghost.classList.remove('hidden')
    whoPaid.textContent = 'Sydni paid for this transaction.'
    person = 'Sydni'
})

document.querySelector('#regBtn').addEventListener
('click', function() {
    const price = Number(document.querySelector('#regInput').value)
    regSubTotal += Math.round(price * 100)
    regList.textContent = '$' + (regSubTotal / 100) + ' '
    document.querySelector('#regInput').value = null
})

document.querySelector('#splitBtn').addEventListener
('click', function() {
    const price = Number(document.querySelector('#splitInput').value)
    splitSubTotal += Math.round((price / 2) * 100)
    splitList.textContent = '$' + (splitSubTotal / 100) + ' '
    document.querySelector('#splitInput').value = null
})

document.querySelector('#addToTotal').addEventListener
('click', function(){
    if (person === 'Preston') {
        presTotal += regSubTotal + splitSubTotal
    } else if (person === 'Sydni'){
        sydTotal += regSubTotal + splitSubTotal
    }
    console.log(presTotal, sydTotal)
    whoOwesWho(presTotal, sydTotal)
    regSubTotal = 0
    splitSubTotal = 0
    regList.textContent = regSubTotal
    splitList.textContent = splitSubTotal
    ghost.classList.add('hidden')
})

document.querySelector('#deleteBtn').addEventListener
('click', function(){
    regSubTotal = 0
    splitSubTotal = 0
    regList.textContent = regSubTotal
    splitList.textContent = splitSubTotal
    ghost.classList.add('hidden')
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        let regPrice = Number(document.querySelector('#regInput').value)
        let splitPrice = Number(document.querySelector('#splitInput').value)
        if (regPrice > 0) {
            regSubTotal += Math.round(regPrice * 100)
            regList.textContent = '$' + (regSubTotal / 100) + ' '
            document.querySelector('#regInput').value = null
        } else if (splitPrice > 0){
            splitSubTotal += Math.round((splitPrice / 2) * 100)
            splitList.textContent = '$' + (splitSubTotal / 100) + ' '
            document.querySelector('#splitInput').value = null
        }
    }
})
