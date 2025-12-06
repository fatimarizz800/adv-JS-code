//Short Circut

// let x = 7
// let answer = x == 7 && "greater"
// console.log(answer)
// answer = x > 7 && "less"
// console.log(answer)
// answer = x > 7 || "less"
// console.log(answer)
// answer = x < 8 || "less"
// console.log(answer)

// arrow function
// const name=()=>{
//     console.log("Hello!");

// }
// name()
// name()
// name()
// name()
// name()
// name()

// let num =[1,2,3,4,5,6,7,8,9,10]
// const checkEven=(x)=> {
//     if (x % 2 == 0){
//         return x
//     }

// }
// let Even =num.map((x)=>checkEven(x))
// console.log(Even);\


// let num =[1,2,3,4,5,6,7,8,9,10]
// let five =num.filter((n)=> n % 5 == 0)
// console.log(five)
// let emp_data =document.getElementById("emp_data")


// const employees = [
//   { id: 1,  name: "Alice Johnson",      age: 28, department: "Engineering",  salary: 72000 },
//   { id: 2,  name: "Michael Smith",      age: 34, department: "Marketing",    salary: 65000 },
//   { id: 3,  name: "Sophia Martinez",    age: 26, department: "Design",       salary: 58000 },
//   { id: 4,  name: "Daniel Brown",       age: 41, department: "Engineering",  salary: 90000 },
//   { id: 5,  name: "Emma Wilson",        age: 29, department: "HR",           salary: 54000 },
//   { id: 6,  name: "James Lee",          age: 32, department: "Finance",      salary: 83000 },
//   { id: 7,  name: "Olivia Davis",       age: 30, department: "Engineering",  salary: 75000 },
//   { id: 8,  name: "Benjamin Taylor",    age: 27, department: "Support",      salary: 47000 },
//   { id: 9,  name: "Ava Anderson",       age: 38, department: "Management",   salary: 105000 },
//   { id: 10, name: "Ethan Thomas",       age: 25, department: "Marketing",    salary: 52000 },
//   { id: 11, name: "Mia White",          age: 33, department: "HR",           salary: 60000 },
//   { id: 12, name: "Jacob Harris",       age: 45, department: "Finance",      salary: 94000 },
//   { id: 13, name: "Charlotte Moore",    age: 31, department: "Engineering",  salary: 80000 },
//   { id: 14, name: "Henry Martin",       age: 36, department: "Support",      salary: 50000 },
//   { id: 15, name: "Amelia Thompson",    age: 29, department: "Design",       salary: 61000 },
//   { id: 16, name: "Logan Garcia",       age: 40, department: "Management",   salary: 110000 },
//   { id: 17, name: "Harper Martinez",    age: 28, department: "Engineering",  salary: 77000 },
//   { id: 18, name: "William Rodriguez",  age: 37, department: "Finance",      salary: 88000 },
//   { id: 19, name: "Evelyn Clark",       age: 26, deprtment: "HR",           salary: 53000 },
//   { id: 20, name: "Liam Walker",        age: 35, department: "Marketing",    salary: 69000 }
// ];

// let highSalary =employees
// .filter((emp)=> emp.salary >60000)
// .filter((e)=> e.department =="Engineering" )
// console.log(highSalary);

// let highSalary_details=highSalary.map((emp)=>{
// emp_data.innerHTML+=`
// <ul>
// <li>Name: ${emp.name}</li>
// <li>Age: ${emp.age}</li>
// <li>department:${emp.department}</li>
// <li>Salary:${emp.salary}</li>
// </ul>
// `
// }
// )

// let num =[1,2,3,4,5,6,7,8,9,10]
// num.forEach((val)=> console.log(val))


const products = [
    { name: "Laptop", price: 999 },
    { name: "Headphones", price: 199 },
    { name: "Keyboard", price: 49 },
    { name: "Monitor", price: 299 },
    { name: "Mouse", price: 29 }
];

// products.forEach((p)=> console.log(`${p.name}:${p.price}`)
// )

// products.forEach((p)=>{
//     if (p.price >= 100) {
// console.log(`${p.name} : ${p.price}`);

//     }
// })
// let pro =[]
// products.forEach((p)=>{
//     if(p.price >= 100){
//     pro.push(`${p.name} : ${p.price}`)
//     }
// })
// console.log(pro);

// products.forEach((p)=> p.price += 50)
// console.log(products);

// let numbers =[1,22,3,4,5,6,7,8,9,10]
// let sum = numbers.reduce((acc ,num)=>acc + num)
// console.log(sum);

// let max =numbers.reduce((max,curr)=>max >curr ?max :curr)
// console.log(max);






