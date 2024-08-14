import os from 'os'; //to write this way we had to change package json: type:module
import readline from 'readline-sync';
import fs, { readFile } from 'fs';
import { Employee as emp}  from './Employee.js';
import { log } from 'console';
// console.log("first line");
// //setTimeout(callback,time)
// setTimeout(() => {
//     console.log("middle line");
// }, 0);

// console.log("last line");

// // let os=require("os");

// console.log("Platform = "+os.platform());
// console.log("Architecture = "+os.arch());
// console.log("Version = "+os.version());

// let text = readline.question("Enter a text");
// let number = readline.question("Enter a number ");
// let display = readline.question("Display input y/n ");

// if (display.charAt(0).toLowerCase()=='y'){
//     console.log(text , number);
// }

// let pass = readline.question("Enter password");
// console.log(pass.match['*[0-9']);
// if(pass.length>8 && pass.match('*[0-9]') && pass.match('')){
// }


// FS

// let text1 = readline.question("Enter some text - ");
// fs.writeFileSync("demo.txt",text1)
// console.log("Done writing");

// fs.readFile('demo.txt', 'utf8', (err, data) => {
//     console.log("This is the file - "+data);
//   });

// let text2 = readline.question("Data to be appended - ");
// fs.appendFileSync('demo.txt'," "+text2)
// console.log("Data is appended");


let id = readline.question("Enter id - ")
let name = readline.question("Enter name - ")
let employee={
  id : id,
  name : name
}


  let data;
try {
  data = fs.readFileSync("dataset.json");
} catch (error) {
  data ="[]";
}

let employees = JSON.parse(data);

employees.push(employee);
fs.writeFileSync("dataset.json",JSON.stringify(employees))

let data1 = JSON.parse(fs.readFileSync("dataset.json"))
console.log(data1);
for (let i=0;i<data1.length;i++){
  let e =new emp(data1[i].id,data1[i].name)
  e.display()
}
