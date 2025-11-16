// var let const

// var 
// - used to store data
// - can be reassigned
// - can be redeclare
// - Intitialize at top (Global Scope)

// let 
// - used to store data
// - can be reassigned
// - cannot be redeclare
// - Not Intitialize at top (Block Scope)

// const 
// - used to store data 
// - cannot be reassigned
// - cannot be redeclare
// - Not Intitialize at top (Block Scope)

// --------------------------------------------------
// console.log(x)
// var x = 10

// console.log(x)
// let x = 10

// console.log(x)
// const x = 10


// --------------------------------
// var a = 10
// console.log(a)
// a = 20
// console.log(a)


// let a = 10
// console.log(a)
// a = 20
// console.log(a)

// const a = 10
// console.log(a)
// a = 20
// console.log(a)


// --------------------------------------------
// var a = 10
// console.log(a)
// a = 20
// console.log(a)
// var a = 50
// console.log(a)


// let a = 10
// console.log(a)
// a = 20
// console.log(a)
// let a = 50
// console.log(a)

// const a = 10
// console.log(a)
// a = 20
// console.log(a)
// const a = 50
// console.log(a)

// templete literials
// var name ="fatima"
// console.log(`what is your name ${name}`);

// var Naam ="mera naam haider ha"
// console.log(`ap ka naam kia ha?? ${Naam}`)

// --------------------------------------
// Ternary Operator

// var age = 17
// if (age >= 18){
//     console.log("Allowed")
// } else{
//     console.log("Not Allowed")
// }

// age >= 18 ? console.log("Allowed") : console.log("Not Allowed")


// var eatingsugar = 
// eatingsugar <= 4 ? console.log("survive") : console.log("dibatetise")


// var fiona_age=9 
// fiona_age >= 12 ?console.log("  fattttt cat"):console.log(" smalllll cat")

// var x = 4
// var answer = x > 4 ? "Greater" : "Less"
// console.log(answer)

// ---------------------------------
// Short Circuit

// var x = 4
// var answer = x >= 4 && "Greater"
// console.log(answer)

// var x = 4
// var answer = x > 4 || "Less"
// console.log(answer)


// --------------------------------------------------
// Spread Operator
// var arr = [1,2,3,4,5,6]
// var newArr = [...arr,7,8,9,10]
// console.log(newArr)

// var newData = [...newArr,11,12,13]
// console.log(newData)

// var haider_obj = {
//     name: "Haider",
//     Age: 50,
//     class: 2,
//     car: "CIVIC"
// }

// var haider_school = {
//     ...haider_obj, school: "ABCD", grade: "A"
// }

// console.log(haider_school)

// ------------------------------------------
// Rest Operator & Destructuring

// var arr = [1,2,3,4,5,6,7,8,9,10]
// var [a,b,c,...rest] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(rest)

// let student = {
//     name:"Haider",
//     age:12,
//     class: "5 Class",
//     school:"ABC",
//     fav_color: "black"
// }

// let {name,age,...rest} = student
// console.log(name);
// console.log(age);
// console.log(rest);

// --------------------------------------------------
// Pass By Value

// let n = 10;

// function modify(x) {
//     x = 20;
//     console.log("Inside function: ", x);
// }

// modify(n);
// console.log("Outside function: ", n);

//  Pass by reference
// let obj = { name: "Haider" };

// function modify(o) {
//     o.name = "Fatima";
//     console.log("Inside function: ", o.name);
// }

// modify(obj);
// console.log("Outside function: ", obj.name);

// let arr = [1,2,3,4,5,6]

// function modify(a) {
//     a[1] = "Fatima";
//     console.log("Inside function: ", a);
// }

// modify(arr);
// console.log("Outside function: ", arr);

// ------------------------------------------------------
// OBJECT METHODS

// let student = {
//     name:"Haider",
//     age:12,
//     class: "5 Class",
//     school:"ABC",
//     fav_color: "black"
// }
// // console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))
// Object.freeze(student)
// student.name = "ABXYZ"
// console.log(Object.values(student))

// -------------------------------------------------
// FUNCTIONS

// function Haider(){
    
// }
// function Haider(){
    
// }
// Haider()

// ARROW FUNCTION

// const Haider = ()=>{
//     console.log("MAI CHAL GYA")
// }

// Haider()
// Haider()
// Haider()
// Haider()
// Haider()
// Haider()
