const username=prompt("Enter your name: ");
const income=parseFloat(prompt("Your Income: "));
const numOfExp=parseInt(prompt("Number of expense: "));

if(isNaN(income) || isNaN(numOfExp) || income<0 || numOfExp<0){
    alert("Invalid Input. please enter valid number");
}
else{
    let totalExp=0;
    for(let i=0;i<numOfExp;i++){
        const expenses = [];
        let expense = parseFloat(prompt("Enter expenses: "));
        if(isNaN(expense) || expense<0){
            alert("Invalid Expense. Setting the expense to zero");
            expense=0;
        }
        expenses.push(expense);
        for(let j=0;j<expenses.length;j++){
            totalExp=totalExp+expenses[j];
        }
    }
    const balance=income-totalExp;
    let savings='';
    if (balance>=5000){
        savings="Excellent... Your Savings is more than 5000";
    }
    else if(balance>=3000 && balance<=4999){
        savings="Good... Your Savings is between 3000-5000";
    }
    else if(balance>=1000 && balance<=2999){
        savings="Critical... Your Savings is between 1000-3000";
    }
    else{
        savings="LOW... Your should save more";
    }

    let status='';
    if(totalExp>income){
        status='Your Expanse is more than your Income';
    }
    else{
        status='Your Income is more than your Expanse';
    }
    document.querySelector('.details').innerHTML="Name: "+username+"<br>Income: "+income+"<br>Expense: "+totalExp+"<br>Savings: "+balance;
    document.querySelector('.condition').innerHTML=status+"<br>"+savings;
}


