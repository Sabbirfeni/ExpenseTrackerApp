let currentBalance = document.getElementById('balance');
let totalIncome = document.getElementById('totalIncome');
let totalExpense = document.getElementById('totalExpense');

let addIncomeBtn = document.getElementById('addIncome');
let addExpenseBtn = document.getElementById('addExpense');

let historyContainer = document.getElementById('transactionHistory');
let date = new Date().getDate();
let getMonth = new Date().getMonth();
let getFullYear = new Date().getFullYear();

let fullDate = date + '/' + getMonth + '/' + getFullYear;

let updateBalance = 0;
let updateExpense = 0;

// Event Listener for Adding income
addIncomeBtn.addEventListener('click', () => {

    let transactionName = document.getElementById('transactionName');
    let transactionAmount = document.getElementById('transactionAmount');

    if(transactionName.value !== '' && transactionAmount.value !== 0) {
        let dateContainer = document.createElement('span');
        let transactionNameHistory = document.createElement('span');
        let transactionAmountHistory = document.createElement('span');
        transactionAmountHistory.classList.add('incomeAdd');
    
        dateContainer.innerText = fullDate;
        transactionNameHistory.innerText = transactionName.value;
        transactionAmountHistory.innerText = '$ ' + transactionAmount.value;
    
        historyContainer.appendChild(dateContainer);
        historyContainer.appendChild(transactionNameHistory);
        historyContainer.appendChild(transactionAmountHistory);
        historyContainer.appendChild(document.createElement('br'));
        
        updateBalance += Number(transactionAmount.value);
    
        currentBalance.innerText = updateBalance;
        totalIncome.innerText = updateBalance;
    
        transactionName.value = '';
        transactionAmount.value = '';
    }
})


// Event Listener for Adding income
addExpenseBtn.addEventListener('click', () => {
    let transactionName = document.getElementById('transactionName');
    let transactionAmount = document.getElementById('transactionAmount');

    let dateContainer = document.createElement('span');
    let transactionNameHistory = document.createElement('span');
    let transactionAmountHistory = document.createElement('span');
    transactionAmountHistory.classList.add('expenseAdd');

    dateContainer.innerText = fullDate;
    transactionNameHistory.innerText = transactionName.value;
    transactionAmountHistory.innerText = '$ ' + transactionAmount.value;

    historyContainer.appendChild(dateContainer);
    historyContainer.appendChild(transactionNameHistory);
    historyContainer.appendChild(transactionAmountHistory);
    historyContainer.appendChild(document.createElement('br'));

    updateExpense += Number(transactionAmount.value);
    updateBalance -= Number(transactionAmount.value);

    currentBalance.innerText = updateBalance;
    totalExpense.innerText = updateExpense;

    transactionName.value = '';
    transactionAmount.value = '';
})


