// arrow function that prints out a string and a value thats been passed through 
const declare = (Value)=>{
console.log("Data Representation & Querying " + Value);
}
//arrow function that adds two variables that have been passed through
const calc = (num1, num2)=>{
    answer = num1 + num2; //variable that stores the value of the two variables added together
    console.log(num1 + " + " + num2 + " is " + (answer));
}

declare(21);//declares the function and passes through a number
calc(5, 5); //two numbers passed through to be added together and the answer is returned back


const ages = [25, 31, 42, 77];

//multiplies all the values of the array by two
function multiply(num){
if(num <= 70)//if the numbers in the arra are less than 70 mutiply by 2
{
   return num * 2;
}
}
//returns a new array with with the values of the old array multiplied by two
const newArr = ages.map(multiply);
//prints out the new array
console.log(newArr);

