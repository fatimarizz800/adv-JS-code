// short circut

// let name = "haider"
// let answer = name != "haider" && "invalid name"

// console.log(answer);

// answer = name == "haider" && "correct name"

// console.log(answer);

// answer = name != "haider" || "invalid name"
// console.log(answer);
// answer = name == "haider" || "invalid name"
// console.log(answer);

// arrow function

// const name =()=>{
//     console.log("hello!")
// }
// name()
// name()
// name()
// name()
// name()
// name()

// let name =["raju","baju","saju","taju","kaju","laju","ladu","faju"]
// let addition = name.map((x)=>`${x} haider`)
// console.log(addition)

// let num =[1,2,3,4,5,6,7,8,9,10]

// const chuckeven=(x)=>{
// if(x % 2 == 0){
//     return x
// }
// }
// let even = num.map((x)=>chuckeven(x))
// console.log(even);


let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let odd =num.filter((a)=>a % 2 != 0)
console.log(odd);



