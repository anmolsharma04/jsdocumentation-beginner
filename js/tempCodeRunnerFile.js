console.log("hii anmol here"); //print messages in console
console.log("i love js");

//variables in js 
name="tony stark";  
console.log(name);

age=24;
console.log(age);

x=null;
console.log(x);

y=undefined;
console.log(y);

//js is dynamically typed language ie-- you can store anything in any variable

// let keyword--cannot be re declared but can be updated
// var keyword(bad idea)--- can be re declared and can be updated( block scope)
// const keyword--- cannot be re declared or updated( block scope)
let anmol="sharma";

let b;
console.log(b); // gives op undefined

const a=10;
console.log(a);

//block scope
{
    let a=10;
    console.log(a);
}
// both will have different op in spite of having same variable name 
{
    let a=20;
    console.log(a);
}

//data types in javascript
// two types primitive and non-primitive

//PRIMITIVE
//1. number

let animal=24;
typeof animal;



