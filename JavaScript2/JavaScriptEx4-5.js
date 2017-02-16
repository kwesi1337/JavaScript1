
/*EX-4 Template literals
 Execute this example And use template literals whenever it makes sense for all the following exercises.
 */


var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

console.log(message);


/*
EX-5 - Rest Parameter and the spread operator
A) Implement the function f(..) below:
    function f(x,y,...rest){
    ...
    }
So this statement:
    console. log ( f( 5 , 2 , true , 2 , "hello World" ,[ 1 , 2 , 3 ], new Date(),{}));
Will produce this output (should obviously work for any number/type of arguments):
Sum: 7
rest value 1 is a: Boolean
rest value 2 is a: Number
rest value 3 is a: String
rest value 4 is a: Array
rest value 5 is a: Date
rest value 6 is a: Object
Hint: With es2015 you can get the class name using
*/


function f(x, y,boolean,z, String, arrayNum, date, obj){

    return `
Sum: ${x + y};
value 1: ${boolean.constructor.name};
value 2: ${z.constructor.name};
value 3: ${String.constructor.name};
value 4: ${arrayNum.constructor.name};
value 5: ${date.constructor.name};
value 6: ${obj.constructor.name};
`

}

console.log(f(5, 2, true, 2, "hej", [1, 2, 3], new Date(),{}));

var rest = [true, 2, "hej", [1,2,3,4], new Date(),{}];
var restParams = [ ... rest];

console.log(f(5,2, ... restParams));
console.log(chars);


