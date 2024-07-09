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

//2.string
let fullname="anmol sharma is great";
console.log(fullname);

//3. boolean-- have true and false only
let bool= true;
console.log(bool);

//4. undefined 
//5. null
//6.bigint   6 and 7 are not important
//7.symbol

//NON PRIMITIVE
//EX-ARRAYS , OBJECTS

//OBJECTS
// const obj key can be updated not const alonely

const student={
    naam : "anmol sharma",
    age : 20,
    cgpa : 9.9,
    ispass : true,
};

console.log(student);
console.log(student["naam"]);
console.log(student["age"]);
student["age"]=student["age"]+1;
console.log(student["age"]);


//comparision operator 

let m=10;
let n=20;
console.log("10==20",m==n); // return either true or false
//conditional statements

let lic=25;
if(lic>18){
    console.log("can drive");
}
else{
    console.log("cannot drive");
}

let mic=30;
if(mic<30){
    console.log("less than 30");
}
else if(mic>30){
    console.log("greater than 30");
}
else{
    console.log("perfecctly 30");
}

//ternary operator 

let pop=20;
let result=pop>18?"adult":"not adult"; // read as if pop>18 then adult  and if not true then not adult
console.log(result);

// alert -- create pop up one time
alert("hello welcome!! this site contains the learning stuff of js , created by -- ANMOL SHH!! ");

//PROMPT--pop up with input

let web=prompt("enter your name");
console.log(web);

//looping
// for loop

for(let dp=0;dp<6;dp++){
    console.log("anmol");
}
// while loop

let p=0;
while(p>5){
    console.log("ehehhe");
    p++;
}

//do while loop
let u=0;
do{
    console.log("jijijij");
    u++;
}while(u<=10);

//for of loop , for strings and arrays

let str="sharma";
for(let i of str){
    console.log("i=",i);
}

//for in loop used in object

let home= {
    nme: "rahul kumar",
    aage: 40,
    ccgpa: 9,
}
for(let i in home){
    console.log(i);
}

// strings properties
let rts="anmol";
console.log(rts.length);
console.log(rts[1]);
// similarly .touppercase()
// .tolowercase()
// .trim()  removes spaces 

// ARRAYS IN JS 
// strings are immutable -- cannot b changed 
// arrays are mutable --- can be changable 
let heros=["anmol", "sharma", "thor"];
let numbers=[1,2,3,4,5];
let info=["rahul",87,"delhi"];
console.log(heros);
for(let ind=0;ind<heros.length;ind++){
    console.log(heros[ind]);
}

//array methods
//push()--add somrthing at end 
//pop()----delete from end & return
//tostring()---convert array to string

let fooditems=["potato","bhindi","gajar","matar"];
console.log(fooditems);
fooditems.push("gobhi","tamatar");
console.log(fooditems);
fooditems.pop("gobhi");
fooditems.pop("tamatar");
console.log(fooditems);
//console.log(fooditems.tostring());

//contact()---joins multiple arrays and return 
//unshift()---add to start
//shift()---delete from start and return 

let marks=["hiii","hloo","hegaaaa"];
let avg=["34","48"];
let mult= marks.concat(avg);
console.log(mult);
marks.unshift("hooo");
console.log(marks);
marks.shift("hoo");
console.log(marks);

//slice()--return a piece of array 
//splice()--change original array(add , remove , replace)

//console.log(marks.slice(1,2));
console.log(marks.splice(2,2,101,102));   // 2 index se 2 element delete kra or 101 , 102 us place pr add kra

///FUNCTIONS 

function myfunction(){   //function defining 
    console.log();
}

myfunction();     // calling of function 
myfunction();


function myfunction2(number){      // function containing parameters 
    console.log(number);
}

myfunction2(55);                  // parameter passsed during calling 
myfunction2(48);

//ARROW FUNCTION 
let arrowsum = (a,b) => {         //method of modern javascript
    console.log(a+b);
};
arrowsum(5,6);

//for each loop in arrays
// functions inside the js are may be passed as a parameters known as callback function

function abc(){
    console.log("hello wowrld");
}
function myfunc(abc){
    return abc;
}

let arr=[1,2,3,4,5,];
arr.forEach(function printval(val){   //for passes each value of an array 
console.log(val);  
});

//some more array methods
//map method

let nums=[1,2,3,4,5,6,7,8]; // returns same value in new array
let newarr=nums.map((val)=>{
    return val*2;
});

//filter method
let evenarr=nums.filter((val)=>{
    return val%2===0;
});
console.log(evenarr);

//reduce method 
// ressult id 1st element of array and current is second element of array their sum is stored in result 
let arrr=[1,2,3,4];
const output=arrr.reduce((res,curr)=>{
return  res+curr;
});
console.log(output);




////////////////////////////////////////////DOM//////////////////////////////////////////////////////////////////
// ALL THE CODE IS WRITTEN INSIDE THE WINDOW OBJECT--IT IS A GLOBAL OBJECT 

//for the DOM refer to the screenshots in the pc itself 
//next targets 
//events
//asyncs
//api
//promise
//fetch 

 
//EVENTS 
//all events run sequntially in js , except some exceptions 
//clicking , drag , drop by mouse or keyboard are events 

//approach 1
//document.getElementById('owl').onclick=function(){
//    alert("owl clicked ")
//}

//approach 2
document.getElementById('owl').addEventListener('click', function(e){
    alert("owl clicked")
    e.stopPropagation()
} , false  //default parameter false 
);

//e is event object , contains info like what is the position of mouse cursor at the time of clicking , height and width of the browser etc , timestamp of clicking etc   
//event propagation follows bubbling up order----when false
//reverse----when true
//e.stoppropagation() stops bubbling up propagation 

// assighnment--removing content when clicked 
// document.querySelector('#images').addEventListener('click',function(){
//     console.log(e.target.parentNode);
//     let removeit = e.targrt.parentNode
//     removeit.remove()
// },false)


//ASYNCS 

//asyncs are asynchronous code 
// js is synchronous
//it is single threaded language 
// Asynchronous programming in JavaScript allows you to perform tasks without blocking the main thread. This means that JavaScript can start a task and move on to the next one without waiting for the first task to complete. This is useful for tasks like fetching data from a server, reading files, or any operation that takes time to complete.

// Key Concepts
// Synchronous vs. Asynchronous:

// Synchronous: Tasks are performed one after another. Each task waits for the previous one to complete before starting. Think of it like standing in line at a checkout counter.
// Asynchronous: Tasks can be initiated and then left to complete on their own while the program moves on to the next task. It's like placing an order at a restaurant and then waiting at your table for the food while you chat with friends.

//PROMISES
//task scheduled cannot be compleated at the instant but they are arranged in the queue to execute it's promise :-)
//promise creation 

const promiseone = new Promise(function(resolve , reject){
//any asyncs tasks 

setTimeout(() => {
    console.log('async task complete')
    resolve() //necessary connection to connect .then() 
}, 1000);

})

//.then let us know about what will happen when promise fulfilled 
//.then has connection with resolve 
promiseone.then(function(){
    console.log("promise consumed");
})

//other method
new promiseone((resolve , reject)=>{

    setTimeout(function(){
        console.log("async task 2");

    }, 1000);
}).then(function(){
    console.log("async part 2 resolved")
})

//FETCH API
// let 
//here pro is promise 
//syntax of fetch

let pro = fetch("https:goweather.herokuapp.com/weather/Ny") //make an http request to weather api
//when the request is successful , convert the response as json
pro.then((value)=>{
    return value.json()
})
//when json is converted , log it to the console
.then((value2)=>{
    console.log(value2)
})

//////////////////////////////////JS ENDS HERE AT A BEGINNER LEVEL //////////////////////////////////////////////

















