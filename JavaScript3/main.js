require('./main.css');

import 'bootstrap/dist/css/bootstrap.css';
var _ = require('lodash');

const name = 'Scotch.io';


function Person(fName, lName, sport) {

    this.firstName = fName;
    this.lastName = lName;
    this.favoriteSport = sport;

}


const persons = [

    new Person("Jan", "Hans", "Øge"),
    new Person("Mads", "Peter", "Lars"),
    new Person("Jane", "Bane", "Kokane"),
    new Person("Han", "Solo", "Sutter")

];

function makeTable(persons) {

    var g = _.keysIn(new Person);

    g = g.map((item) => {

        return _.startCase(item);

    });


    var table = `
<table class=table>
<thead>`;

g.forEach((value) =>{

    table +="<td>" + value + "</td>"
});


table += "</thead><tbody>";

persons.forEach((person) =>{

    table += "<tr>";

    _.mapKeys(person, (value, key) =>{

        table +="<td>" + value + "</td>"
    });

    table += "</tr>";

});

table += "</tbody></table>"

return table;
}

const table = makeTable(persons);

var g = document;
document.getElementById("my-table").innerHTML = table;