function addTwoNumber(number1, number2){
    console.log(number1+number2);
}

function multiplynumber(num1, num2){
    return num1*num2
}

function info(username = "Johny"){
    return `${username} just logged in the system`
}

function addtocart(...num1){   // ... -> rest operator
    return num1
}
console.log(addtocart(100, 200, 300, 400))  // takes all the value and convert it into array

function addtocart(val1, val2, ...num1){
    return num1
}

function handleObject(anyObj){
    return `Username is ${anyObj.name} and its prices is ${anyObj.price}`
}
console.log(handleObject({name:"Harry", price:49}))

