
//Write a program that creates Objects containing these items.

//Datatype of person object
interface person{
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}

//Person Object
let person  :person={
    age : 21 ,
    name : 'Shabbir' ,
    nationality : 'Pakistani' ,
    student : true
}

//Print person
console.log(person); 

//Datatype of car object
interface car{
    maker : string,
    color : string,
    automatic : boolean
}
// Car Object
let car ={
    maker : 'Toyota' ,
    color : 'Black' ,
    automatic : true
}
//Print car
console.log(car);