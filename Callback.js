let names = ["Johan", "Niels", "Henrik"];

let rows = names.map(function(name,index){

    return "<td>" + name + "</td>"
});

console.log(rows);

let rowStr = rows.join(" ");
let table = `<table>
<tbody>
$(rows)


</tbody>

</table>
`