// console.log("Hello World");
//var let const
// var a=10;
// console.log(a);
// var a=20;
// console.log(a);
// let b=23;
// console.log(b);
//let reassign cheyan patilA.blockinte ulil kodtha patum.
// {
//     let b=20;
//     console.log(b);
// }
// let b=30;
// console.log(b);
// let a=10;
// let b=20;
// console.log(a+b);
// console.log(b-a);
// console.log(a*b);
// console.log(b/a);
// console.log(b%a);
// let a=10;
// let b=20;//double equal to check value,=== check data type
// if(a===b){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
//  if(b>a){
//      console.log(a+=3);
//  }
// let a="Adithya";
// let b="Chandra";
// let d="Ts";
// c=a+b+d;
// console.log(`My name is ${a} ${b} ${d}`);//backtick method
// let car={
//     model:"Alto 800",
//     color:"Red",
//     Price:120000,
// }
// console.log(car);
// console.log(car.model);
// console.log(car.Price);
//  c=car.model+car.Price;
// console.log(`${car.model} ${car.Price}`);
// let student={
//     Name:"Adithya",
//     College:"CCE",
//     Class:"s4",
//     Address:{
//         address1:"Thaliyassery House",
//         address2:"Edathirinnji (P.O)",
//     }
// }
// console.log(student);
// console.log(student.Name);
// console.log(student.Address.address1);
// console.log(`${student.Name} ${student.Address.address1}`)
// let fruits=["Apple","Mango","Orange"];
// console.log(fruits[2]);
// fruits.push("Pineapple");
// fruits.unshift("guava");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// let toddoo=[
//     {
//         id:1,
//         task:"Buy Book"
//     },
//     {
//         id:2,
//         task:"Hide"
//     },
//     {
//         id:3,
//         task:"GUn"
//     },
// ]
// console.log(toddoo);
// console.log(toddoo[01].task);
// function addTwoNumbers(a,b){
//     console.log(a+b);
// }
// subTwoNumbers(20,60);
// function subTwoNumbers(a,b){
//     console.log(b-a);
// }
// subTwoNumbers(20,60);
// function muTwoNumbers(a,b){
//     console.log(a*b);
// }
// muTwoNumbers(20,60);
// function divTwoNumbers(a,b){
//     console.log(b/a);
// }
// divTwoNumbers(2,60);
// add = (a,b) =>console.log(a+b);
// add(20,75);
// sub = (a,b) =>console.log(b-a);
// sub(20,75);
// multi =(a,b) =>console.log(a*b);
// multi(3,7);
 add1 = (a,b) => {
    c=a+b;
    console.log(c);
    if(c>=10){
        console.log("Number is greater than 10");
    }
    else{
        console.log("Number is less than 10");
    }
}
add1(34,3);
let numbers =[1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
print = (numbers) =>{
for (let i=0;i<numbers.length;i++){
        console.log(numbers[i]);

}}
print(numbers);
print = (numbers) =>{
    let i=0;
    while(i<numbers.length){
        console.log(numbers[i]);
        i++;
    }}
    print(numbers);
print = (numbers) =>{
    i=0;
    do{
        console.log(numbers[i]);
        i++;
    }
    while(i<numbers.length);
}
     print(numbers);