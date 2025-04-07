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
function financialCondition(totalExp, income) {
    if (totalExp > income) {
        return "Your Expense is more than your Income";
    } else {
        return "Your Income is more than your Expense";
    }
}

// Function to display result 
function displayResult(username, income, totalExp, balance, condition, savings) {
    document.querySelector('.details').innerHTML = 
        `Name: ${username}<br>Income: ${income}<br>Expense: ${totalExp}<br>Savings: ${balance}`;
    
    document.querySelector('.condition').innerHTML = 
        `${condition}<br>${savings}`;
}

// Main Function
function budgetTracker() {
    const username = getUserInput("Enter your name:");
    const income = getUserInput("Your Income:", true);
    const numOfExp = getUserInput("Number of expenses:", true);

    if (isNaN(income) || isNaN(numOfExp) || income < 0 || numOfExp < 0) {
        alert("Invalid Input. Please enter valid numbers.");
        return;
    }

    const expenses = getExpenses(numOfExp);
    const totalExp = totalExpenses(expenses);
    const balance = calculateBalance(income, totalExp);
    const savings = financialStatus(balance);
    const condition = financialCondition(totalExp, income);

    displayResult(username, income, totalExp, balance, condition, savings);
}

// Call the main function
budgetTracker();
