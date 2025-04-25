/*
function number(){
    return 10;
};
console.log(number());
*/
//fat arraw function
let number=()=>{
    return 12;
};
console.log(number());
//if there is no bracket i can create function without first bracket and if I return something in that line I can remove the return
 let date= ()=> 19;
 console.log(date());
 let myName=()=> console.log("Naim Ahmed");
 myName();

 // with parameter 
 let myAge=(n)=>n;
 console.log(myAge(25));
 //If there is only one parameter then I can omit first bracket also
 let mySalary = n=>n;
 console.log(mySalary(20000));
 const mySavings=(salary,expense)=>salary-expense;
 console.log(mySavings(20000,16000)); 

 let student={
    name:"Naim",
    id: "011201050",
    language: ["Bangla","English","German"],
    printLanguage: function(){
        this.language.forEach(function(lang){
            console.log("${this.name} loves ${lang}")
        })
    }
 };
 student.printLanguage();
