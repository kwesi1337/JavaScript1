/*
Assuming we had these variables (for example passed in via a HTTP request):
let fName = "Kurt" ;
let lName = "Wonnegut" ;
let age = 98
Create an object, using the Property Shorthand notation with a fName, lName and age property. */


let fName = "Jan";
let lName = "Hans";
let age = 50;

let obj = {fName, lName, age};


console.log(obj);



/*
EX7 Destructing Assignment
A) Given these declarations: let fName = "Kurt" , lName = "Wonnegut" ;
Implement a one-liner (using Array matching) to swap the two values so this statement:
    console.log( `First: ${ fName} , Last: ${ lName} ` );
 Will print: First: Wonnegut, Last: Kurt
    */


    [fName,lName] = [lName, fName];
    console.log(`First: ${fName}, Last: ${lName}`);

        /*
B) Given the method below
function blaa(){
    return {
        firstName : "Kurt" ,
        lastName : "Wonnegut" ,
        gender : "Male" ,
        email : "kurt@wonnegut.dk" ,
        phone : "12345" ,
    }
}
Implement a one-liner (using the object matching shorthand notation) that will initialize (only) two
variables lastName and phone .*/

function initVar(){

    return {

        firstName : "Jan",
        lastName : "Johan",
        gender : "Male",
        email : "JanJohan@123.dk",
        phone : "12345"

    }
    
}

var {lastName, phone} = initVar();
console.log(lastName, phone);
