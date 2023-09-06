console.log("in script 1")
// i want to have a simple calc functionality
// add, sub, divide, mul

function add (a,b) {
    return a+b
}

function sub (a,b) {
    return a-b
}

function mul (a,b){
    return a*b
}

function div (a,b){
    return a/b
}

console.log(add(1,2))

function defaultFunc() {
    return "In default"
}

//named exports
export {
    add,
    sub,
    mul,
    div
}

//default export
export default defaultFunc