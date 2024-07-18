//Activity 1
//Task 1
let arr=[1,2,3,4,5];
console.log(arr);
//Task 2
console.log(arr[0]);
console.log(arr[4]);


//Activity 2
//Task 3 
let Numbers=[23,24,25,26];
Numbers.push(27);
console.log(Numbers);
//Task 4

let newNumbers=[67,68,69,70];
newNumbers.pop()
console.log(newNumbers);
//Task 5
let shiftArr=[45,46,47,48];
shiftArr.shift();
console.log(shiftArr);
//Task 6
let unshiftArr=[12,13,14,15,16];
unshiftArr.unshift(45);
console.log(unshiftArr);



//Activity 3
//Task 7
const numbers=[1,2,3,4,5];
const doubled=numbers.map(num=>num*2);
console.log(doubled);
//Task 8
const randomNumber=[3,4,5,6,7,8,9,10,11,12];
const evenNumber=randomNumber.filter(num=>num%2===0);
console.log(evenNumber);
//Task 9
const reduceArr=[17,18,19,20,21,22,23];
const newArr=reduceArr.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},0);
console.log(newArr);



//Activity 4
//Task 10
let cities=["Guwahati","Mumbai","Delhi"];
for(let i=0;i<cities.length;i++){
    console.log(cities[i]);
}
//Task 11
let footballClubs=["Barcelona","Real Madrid","Liverpool"]
footballClubs.forEach(function(footballClubs){
    console.log(footballClubs);
});



//Activity 5
//Task 12
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);
//Task 13
let specificElement=matrix[1][2];
console.log(specificElement);
