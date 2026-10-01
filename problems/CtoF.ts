//why:- ok first we are going to take an input from the user, so we are going to keep this as a
//function, fucntion will allow us to put any value in and get value we want. 
//where:- at start of the file. 
//what;- using function key word to declare the function,we are keeping the name conversion, 
//in parameter we are using the vaibale called number with number data type
import * as fs from "fs";                                                   // fs is used to read the files
let temp;                                                                   //declaring a variable temp to store manupilated celcius data into fahrenheit
let input;                                                                  //declaring another variable to take the input from the user and trim it
let stringtonumb;                                                           // using a variable to store the conversion
function conversion(value:number){
    temp=value*9/5+32;                                                      // the logic of converions beteween celcius and fahrenheite
    console.log(`${value} Celsius = ${temp.toFixed(1)} Fahrenheit`);        //printing, .tofixed helps in removing the small errors occuring
}
input=fs.readFileSync(0,"utf-8").trim();                                    //taking the input and triming white space, and it converts the value into string
stringtonumb=Number(input);                                                 //using Number() method to take incoming string value and convert it to number
conversion(stringtonumb);                                                   // we are entering the number in celcius to be converted
console.log(typeof input, typeof stringtonumb);


//value cannot be used out of the function, acts as input value
//temp cannot be used as it stores the modified data, acts like store
//input is one kind of variable left, which takes it and put it in the function, but here i am getting error



