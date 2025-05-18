


// let c=[0,"a",null, undefined]
// let d=[]

// // truy van toi element thong qua index
// console.log(b[1])
// //duyet array thong qua index
let sum=0
for (let i = 1;i<=n; i++){
    sum+=i
}
console.log(sum)
// //duyet array => element
// for ( let element of b) {
//     console.log(element)
// }

// //them phan tu bang push
// let a=[1,2,3]
// a.push("Apple","c",5)
// console.log(a) 

// //cap nhap gia tri
// a[1]="OMG"


// //tim kiem phan tu
// console.log(b.indexOf("Huong"))
// console.log(b.indexOf("Huong1"))

//xoa phan tu bang splice


let b=["Phan","Diem", "Huong", "Huong", "Huong", "Huong", "Huong"]

// them phan tu bang splice
b.splice(1,0,"Banana"," Apple", "dgh")

--
//vua xoa vua them phan tu bang splice
b.splice(4,4,"Banana"," Apple", "dgh")
let person= { 
    firstName:"Huong",
    lastName:"Phan",
    phoneNumber: "0764835243",
}
console.log(person.lastName)
console.log(person["lastName"])