let names = ["John", "Kevin", "Roberto"];

function filter(arr, callback) {

    let arrToReturn = [];
    arr.forEach(function (value, index) {

        if (callback(value) === true) {

            arrToReturn.push(value);
        }
    });

    return arrToReturn
}



/////



Array.prototype.myFilter = function (func) {

    let arrToReturn = [];
    let length = this.length;

    for (i = 0; i < length; i++) {

        let prob = this[i];
        if (func.call(1, prob) === true) {


            arrToReturn.push(this[i]);
        }
    };

    return arrToReturn;
};

Array.prototype.myMap = function (func) {

    let arrToReturn = [];
    let length = this.length;

    for (i = 0; i < length; i++) {

        let prop = this[i];
        let newProp = func.call(1, prop);
        arrToReturn.push(newProp);

    }

    return arrToReturn;

};

let numbers = [1, 5, 3, 20, 7];

let newArray = numbers.myFilter(function (prop) {

    if (prop > 2) return true;
});

console.log(newArray);

let dblArray = numbers.myMap(function (prop) {

    return prob * 2;
});


console.log(dblArray);

////////

let persons = ["Jan", "Henrik", "Per", "Svan"];

let listItems = persons.map(function (prop) {

    return "<li>" + prop + "</li>";

});

console.log(
    "<ul>" +
    listItems.join(

    ) +
    "</ul>"
)

let persons = [{ name: "Mads", phone: "1337" },
{ name: "Hans", phone:"13372"}, {name: "Kasper", phone:"13373"}];

let toStringArr = persons.map(function(obj){

    return obj.name + ", " + obj.phone;
});

console.log(toStringArr);