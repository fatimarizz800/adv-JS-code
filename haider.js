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


// let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let odd =num.filter((a)=>a % 2 != 0)
// console.log(odd);

// let mobileditels =document.getElementById("mobileditels")

// const mobiles = [
//     { brand: "Apple", model: "iPhone 15", price: 999, ram: "6GB", storage: "128GB", battery: "3349mAh", camera: "48MP" },
//     { brand: "Apple", model: "iPhone 14", price: 799, ram: "6GB", storage: "128GB", battery: "3279mAh", camera: "12MP" },

//     { brand: "Samsung", model: "Galaxy S24", price: 899, ram: "8GB", storage: "256GB", battery: "4000mAh", camera: "50MP" },
//     { brand: "Samsung", model: "Galaxy S23 Ultra", price: 1199, ram: "12GB", storage: "512GB", battery: "5000mAh", camera: "200MP" },

//     { brand: "Xiaomi", model: "Redmi Note 13", price: 229, ram: "6GB", storage: "128GB", battery: "5000mAh", camera: "108MP" },
//     { brand: "Xiaomi", model: "Mi 13 Pro", price: 799, ram: "12GB", storage: "256GB", battery: "4820mAh", camera: "50MP" },

//     { brand: "OnePlus", model: "OnePlus 12", price: 899, ram: "16GB", storage: "512GB", battery: "5400mAh", camera: "50MP" },
//     { brand: "OnePlus", model: "OnePlus Nord 3", price: 449, ram: "8GB", storage: "128GB", battery: "5000mAh", camera: "50MP" },

//     { brand: "Google", model: "Pixel 8", price: 699, ram: "8GB", storage: "128GB", battery: "4575mAh", camera: "50MP" },
//     { brand: "Google", model: "Pixel 8 Pro", price: 999, ram: "12GB", storage: "256GB", battery: "5050mAh", camera: "50MP" },

//     { brand: "Vivo", model: "Vivo X90", price: 699, ram: "8GB", storage: "256GB", battery: "4810mAh", camera: "50MP" },
//     { brand: "Vivo", model: "Vivo Y100", price: 349, ram: "8GB", storage: "128GB", battery: "4500mAh", camera: "64MP" },

//     { brand: "Oppo", model: "Oppo Reno 10", price: 499, ram: "8GB", storage: "256GB", battery: "4600mAh", camera: "64MP" },
//     { brand: "Oppo", model: "Oppo A78", price: 249, ram: "8GB", storage: "128GB", battery: "5000mAh", camera: "50MP" },

//     { brand: "Realme", model: "Realme 11 Pro", price: 379, ram: "8GB", storage: "256GB", battery: "5000mAh", camera: "100MP" },
//     { brand: "Realme", model: "Realme Narzo 60", price: 219, ram: "6GB", storage: "128GB", battery: "5000mAh", camera: "64MP" },

//     { brand: "Motorola", model: "Moto Edge 40", price: 599, ram: "8GB", storage: "256GB", battery: "4400mAh", camera: "50MP" },
//     { brand: "Motorola", model: "Moto G54", price: 199, ram: "8GB", storage: "128GB", battery: "6000mAh", camera: "50MP" },

//     { brand: "Huawei", model: "P60 Pro", price: 1099, ram: "12GB", storage: "256GB", battery: "4810mAh", camera: "48MP" },
//     { brand: "Huawei", model: "Nova 11", price: 399, ram: "8GB", storage: "256GB", battery: "4500mAh", camera: "50MP" }
// ]
// let mobilebrands = mobiles.map((mobile) => {
//     mobileditels.innerHTML +=`
//     <p>brand name is ${mobile.brand}, model name is ${mobile.model}, price is ${mobile.price}, ram is ${mobile.ram}, 
//     storage is ${mobile.storage}, battery is ${mobile.battery}, camera is ${mobile.camera}
//     </p>
//     `
// })

// let mobileexpensive =mobiles.filter((mobilehaha)=> mobilehaha.price >= 900)
// console.log(mobileexpensive);





