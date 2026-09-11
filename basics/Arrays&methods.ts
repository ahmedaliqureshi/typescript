//Arrays


// variables which are going to hold array value, will be declared with datatype array
const Name3:string[]=[]; 
console.log(Name3);  // shows empty array

const Name4:string[]=[];  
Name4.push("qwer","abc","234","ddf");  //note: number in string will show, but number without string will throw error

//ARRAY METHODS

console.log(Name4); //shows array with qwer,abc,234,ddf in it
console.log(Name4.at(0))  //acessing specific element in the array put index of it,gives qwer
console.log(Name4.length);// gives the lenght of the array, which is 4
