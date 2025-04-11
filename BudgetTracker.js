// Function to get user input
function getUserInput(promptMessage, isNumber = false) {
    const userInput = prompt(promptMessage);
    return isNumber ? parseFloat(userInput) : userInput;
}

// Function to get expenses
function getExpenses(numOfExp) {
    const expenses = [];
    for (let i = 0; i < numOfExp; i++) {
        let message = `Enter Expense ${i + 1}:`;
        let expense = getUserInput(message, true);
        if (isNaN(expense) || expense < 0) {
            alert("Invalid Expense. Setting the expense to zero");
            expense = 0;
        }
        expenses.push(expense);
    }
    return expenses;
}

// Function to calculate total expenses 
function totalExpenses(expenses) {
    let totalExp = 0;
    for (let j = 0; j < expenses.length; j++) {
        totalExp += expenses[j];
    }
    return totalExp;
}

// Function to calculate balance 
function calculateBalance(income, totalExp) {
    return income - totalExp;
}

// Function to show financial status
function financialStatus(balance) {
    if (balance >= 5000) {
        return "Excellent... Your Savings is more than 5000";
    } else if (balance >= 3000 && balance <= 4999) {
        return "Good... Your Savings is between 3000-5000";
    } else if (balance >= 1000 && balance <= 2999) {
        return "Critical... Your Savings is between 1000-3000";
    } else {
        return "LOW... You should save more";
    }
}

// Function to check financial condition
function financialCondition(userBudget) {
    if (userBudget.totalExp > userBudget.income) {
        return "Your Expense is more than your Income";
    } else {
        return "Your Income is more than your Expense";
    }
}

// Function to display result 
function displayResult(userBudget) {
    document.querySelector('.details').innerHTML = 
        `Name: ${userBudget.username}<br>
         Income: ${userBudget.income}<br>
         Expense: ${userBudget.totalExp}<br>
         Savings: ${userBudget.balance}`;
    
    document.querySelector('.condition').innerHTML = 
        `${userBudget.condition}<br>${userBudget.savings}`;
}

// Main Function
function budgetTracker() {
    // Object for budget tracker 
    let userBudget = {
        username: '',
        income: 0,
        expenses: [],
        totalExp: 0,
        balance: 0,
        savings: '',     
        condition: ''    
    };

    userBudget.username = getUserInput("Enter your name:");
    userBudget.income = getUserInput("Your Income:", true);
    const numOfExp = getUserInput("Number of expenses:", true); 

    if (isNaN(userBudget.income) || isNaN(numOfExp) || userBudget.income < 0 || numOfExp < 0) {
        alert("Invalid Input. Please enter valid numbers.");
        return;
    }
    userBudget.expenses = getExpenses(numOfExp); 
    userBudget.totalExp = totalExpenses(userBudget.expenses); 
    userBudget.balance = calculateBalance(userBudget.income, userBudget.totalExp); 
    userBudget.savings = financialStatus(userBudget.balance);
    userBudget.condition = financialCondition(userBudget);
    displayResult(userBudget);
}

// Call the main function
budgetTracker();
