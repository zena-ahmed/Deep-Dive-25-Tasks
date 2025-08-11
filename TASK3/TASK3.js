//variables
const name="zena";
let age=20;
var enrollmentStatus = true; 
let grades=[90,80,70];


//operators
let sum=90+80+70;
let average=sum/grades.length; //let average=sum/3;
var passed =average>=60
console.log(passed);

//if/else/elseif
if(average>=90){
    console.log("Excellent");
}
else if(average>=75){
    console.log("Very Good");
}
else if(average>=60){
    console.log("Good");
}
else{
    console.log("Failed");
}



//switch
let number=prompt("Enter a subject number (1,2 or 3):");
let mathGrade = 85;
let scienceGrade = 75;
let englishGrade = 65;

switch(number){
case "1":
    console.log("Math Grade: " + mathGrade);
    break;
case "2":
    console.log("Science Grade: " + scienceGrade);
    break;
case "3":
    console.log("English Grade: " + englishGrade);
    break;
default:
    console.log("Invalid subject number");
    break;
}



//loops-for
for(let i=0; i<grades.length; i++){
    console.log(grades[i]);
}



//functions
function calctotalgrades(){
    let total = 0;
    for(let i=0; i<grades.length; i++){
        total += grades[i];
    }
    console.log("Total Grades: " + total);
}
const calcAverage = (grades) => grades.reduce((a, b) => a + b, 0) / grades.length;
console.log("Average Grade: " + calcAverage(grades));



//while
let num=10;
while(num<10){
    console.log("done");
}



// do while
let num2=10;
do{
    console.log("done");
}
while(num2<10);



//array
let numbers = [1, 2, 3, 4, 5,6];
let sumOfNumbers = 0;
for(let i=0; i<numbers.length; i++){
sumOfNumbers += numbers[i];
}
console.log("Sum of Numbers: " + sumOfNumbers);
while(numbers <=numbers.length > 0){
    sumOfNumbers += numbers[i];
    i++;
}
console.log("Sum of Numbers: " + sumOfNumbers);