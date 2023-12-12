//Stack(Primitive), Heap(Non-Primitive)
/*
in Stack we simply get the copy of data 
where as in heap we get the refrance of the data 

*/

let myName="Mayur Satish Chipade"

let myAnotherName =myName

myAnotherName="mayur"

console.log(myName);
console.log(myAnotherName);


let userOne={
    name:"mayur",
    age:"22"
}
let userTwo=userOne

userTwo.age="23";

console.log(userOne.age)
console.log(userTwo.age)
