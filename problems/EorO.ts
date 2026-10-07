//we are going to use function here as well and inside of it we are going to use the if-esle statement 
//why;- a function allows us to take the input and manupulate how ever we like
//what;- the function name will be EvenorOdd, and it will have number has parameter, 
//where:- it wiil be declared at the start of the file, using the keyword function
import * as fs from "fs";
let input;                //delcaring value here so we can enter the number to be checked if it is even or odd
let stringtonumb;         //string to number so we can convert them

function EvenorOdd(numb:number){ //parameters are used in function because it acts like an input 
    //why;- we are using if else condition here, where if will have condition in it to check the output
    //where:-right after the declaration of the function
    //what:- if is a keyword that is used to creat condition in TS and JS, here we are using num
    //when num get devided by the 2 and equal to 0, we can say it is an even, else odd

    if(numb%2===0){// if the number entered in is divided by 2 is reminder should be 0
     console.log("Even");
    }
    else //or else print odd
    console.log("Odd");
}
//why:- because the input that is coming in the function is always string? so we have to read the file 
//and trim it
//where:- we do it after the function is written, so the output can go through it
//what:- using readfilesynch method with trim method
input=fs.readFileSync(0,"utf-8").trim();  //here std is declared with the 0, which means input

//why;- converting the incoming string value into number
//where:- after the triming and reading of the file.
//what;- storing input value in the stringtonumber varaible
stringtonumb=Number(input); 
EvenorOdd(stringtonumb);    //calling the funtion