//first we need to create a function that will hold the statement and then we can just put the emily on in console.log 
//why:- function allow us to take the input and display it however we want it, as compare to hardcoding it. 
//where:- function and its name and parameter are declared initially in this file.
//what:- function has a prameter names name and it's datatype is string, then in the function we are taking the doing the simple 
// printing simple statements.
import * as fs from "fs";  
let input   //declaring an variable named input, using let because it is more flexible
function helloworld(name:string)   //function name, with the datatype of string
{
    console.log(`Hello, ${name}!`); 
    console.log('Welcome to programming!'); //simple single line of statement
}
input=fs.readFileSync(0,"utf-8").trim()//varibale input stores the value of file system and reads it, and using trim method so remove white space
helloworld (input); //here we are storing the input varible

//return and console where wrong to be used to print the output of the function
//just type the name of the function and put the value in it
