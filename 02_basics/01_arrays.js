const myarr = [1,4,6,3,8]

myarr.push(9)
console.log(myarr);

myarr.unshift(-1)
console.log(myarr)

myarr.shift()
myarr.shift()
console.log(myarr);

console.log(myarr.includes(6));
console.log(myarr.indexOf(6));


const temp = myarr.join("")
console.log(temp);
console.log(typeof temp);

const arr1 = [9,8,7,6,5,4]
console.log("Original Array ", arr1);

const arr2 = arr1.slice(1,4)
console.log("Original Array ", arr1)
console.log("Slice obtained Array ", arr2)

const arr3 = arr1.splice(1,4)
console.log("Original Array ", arr1)
console.log("Splice obtained Array ", arr3)


