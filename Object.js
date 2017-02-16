var person1 = { name: "Peter", birth: 1994, hobby: "Gaming", mail: "gamer123@1337.dk"};

for (var key in person1){

    console.log(key + ":" + person1[key]);
    delete person1.birth;

    console.log(person1.hasOwnProperty("birth"));

    function Person(name, birth, mail){

        var name = name;
        var birth = birth;
        var hobby = hobby;
        var mail = mail;

        return {

            getDetails: function(){

                return name + ", " + birth + ", " + hobby + "," + mail;

            },
            setAge: function(age){

                birth = age;
            },
            setName: function (name){
                name = name;
            }

            
        }
    }
    var newPerson = new Person("Mads", 1850, "Amerikaner", "Mads123@123.dk");
    console.log(newPerson.getDetails());

    newPerson.setAge(19);
    newPerson.setName("Svan");
    console.log(newPerson.getDetails());
    
}