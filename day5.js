//Activity 1
//Task 1
function oddOreven(number){
    if(number%2===0){
    return "The number is even";
    }else{
      return "The number is odd";
    }
   
}
console.log(oddOreven(0));
//Task 2
function square(num){
   square=num*num;
   return square;
}
console.log( square(16));


//Activity 2
//Task 3
const greaterNumber=function(a,b){
  if(a>b){
    return "A is larger than B"
  }else{
    return "B is larger than A"
  }
}
console.log(greaterNumber(2,3))
//Task 4
const concatStr=function(str1,str2){
return str1 +str2;

}
console.log(concatStr("messi played for"," barcelona between 2004 and 2021"));





// Activity 3
//Task 5
const sum=(a,b)=>{
 return a+b;
}
console.log(sum(2,3));
//Task 6
const conatainChar=(str,char)=>str.includes(char);
console.log(conatainChar("Hello","e"))
console.log(conatainChar("Hello","a"))


//Activity 4
//Task 7
function multiplication(a,b=1){
  return a*b;
}
console.log(multiplication(3,1));
//Task 8
function person(name,age=37){
  return `Hello ,today ${name} turned ${age}`;
  
}
console.log(person("Rohit sharma",37));



//Activity 5
//Task 9
function callFunction(func,num){
  return function(){
    for(let i=0;i<num;i++){
      func();
    }
  }
}
const sayHello=()=>console.log("hello");
const sayhellofivetimes=callFunction(sayHello,5);
sayhellofivetimes();
//Task 10
function composeFunctions(func1,func2,value){
  return func2(func1(value));
}
const add9=(x)=>x+9;
const multiplyBy5=(x)=>x*5;

const result=composeFunctions(add9,multiplyBy5,9);
console.log(result);
