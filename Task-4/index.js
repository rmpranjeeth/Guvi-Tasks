var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];


//JSON iteration over for loop 
for (var i = 0; i < obj.length; i++){
    console.log(obj[i].person + " " + obj[i].age + " " + obj[i].company);
}

//JSON iteration over for in loop
for (var key in obj) {
    console.log(obj[key].person + " " + obj[key].age + " " + obj[key].company);
}

//JSON iteration over for of loop
for (var value of obj) {
    console.log(value.person + " " + value.age + " " + value.company)
}

//JSON iteration over forEach loop
obj.forEach(objs => console.log(objs.person + " " + objs.age + " " + objs.company));

