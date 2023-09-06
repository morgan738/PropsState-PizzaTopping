import {add}   from "./script1";
import potato from "./script1";
import chalk from "chalk";

console.log("in script 2")
const sum = add(1,3)
console.log(sum)
// const diff = sub(4,2)
// console.log(diff)

const str = potato()
console.log(chalk.blue(str))