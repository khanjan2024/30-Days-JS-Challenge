//Activity 1
//Task 1
let number=0;
if(number>0){
    console.log("The number is positive");
}else if(number<0){
    console.log("The number is negative");
}else{
    console.log("The number is zero");
}
//Task 2
let age=17;
if(age>=18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote")
}


//Activity 2
//Task 3
let num1=89;
num2=145;
num3=344;
if(num1>num2 && num1>num3){
    console.log(" First Number is largest");
}else if(num2>num1 && num2>num3){
    console.log(" Second Number is largest");
}else{
    console.log(" Third Number is largest");
}

// Activity 3
//Task 4
let day=6;
let dayName;
switch(day){
    case 1:
        dayName="Monday";
        break;
    case 2:
        dayName="Tuesday";
        
        break;
    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;
    case 5:
        dayName="Friday";
        
        break;
    case 6:
        dayName="Saturday";
        break;
    case 7:
        dayName="sunday";
        break;
        default:"Invalid day";

}
console.log(dayName);
//Task 5
let marks=50 ;
let Grade;
switch(true){
    case (marks>=90 && marks<=100):
        Grade="A";
        break;
    case (marks>=80 && marks<90):
        Grade="B";
        
        break;
    case (marks>=70 && marks<80):
        Grade="C";
        break;
    case (marks>=60 && marks<70):
        Grade="D";
        break;
    case(marks>=0 && marks<60):
        Grade="F";
         break;
        default:"Invalid marks";

}
console.log(Grade);

// Activity 4
//Task 6
let newNumber=77;
let res=newNumber%2===0?"Even":"Odd";
console.log("The number is : ",res);


//Activity 5
//Task 7
let year=4500;
let result=(year % 4===0 &&(year %100 !==0 || year %400 ===0))?"Leapyear":"Not Leapyear";
console.log("The year is : ",result);
