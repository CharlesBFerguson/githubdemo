//
// Homework 11-29-2020
//
var num1;
num1=13;

console.log("// Homework 11-29-2020");
console.log("Rated PG-" + 13);
console.log(2 + true);

//
// Homework 11-30-2020
//
        // Exercise Conditional - Step 1

console.log(" ");
console.log("// Homework 11-30-2020");
var count=2;
var answer=2*(count+5);
console.log(answer);
// console.log(2*(count+5)); also works

// modulo of 14/3 should return 2
var answerMod3=(2*(count+5)%3);
console.log(answerMod3); // console.log(2*(count+5)%3); also works

// modulo of 14/2 should return 0
var answerMod2=(2*(count+5)%2);
console.log(answerMod2); // console.log(2*(count+5)%2); also works
// Expected result of 0 achieved


        // Exercise Conditional - Steps 2-3

if(answerMod2==0){
    console.log("modulus 2 returns 0 is "+true);
} else {
    console.log("modulus 2 returns 0 is "+false);
}

        // Exercise Conditional - Steps 4-5

// Change any number in the following 3 variables to affect results
// Change all numbers in the following 3 variables to affect results
var eighth=12.5;
var quarter=25;
var half=50;

if(eighth*8===100){
    console.log("12.5 * 8 = 100");
} else {
    console.log("Does NOT equal 100");
}
if(quarter*4===100){
    console.log("25 * 4 = 100");
} else {
    console.log("Does NOT equal 100");
}
if(half*2===100){
    console.log("50 * 2 = 100");
} else {
    console.log("Does NOT equal 100");
}
if(eighth*8===100 && quarter*4===100 && half*2===100){
    console.log("The three conditions EACH equal 100");
} else if(eighth*8===100 || quarter*4===100 || half*2===100){
    console.log("At least one condition equals 100");
} else {
    console.log("At least one condition does NOT equal 100");
}

// Exercise Loop - Steps 1-2

var count=1

for(count;count<51;count++){
    console.log(count);
}

        // Exercise Loop - Step 3
// ??

        // Exercise Loop - Step 4

var count=1

for(count;count<51;count++){
    if(count%3===0){
        console.log(count+" fizz");
} else {console.log(count);
}}
