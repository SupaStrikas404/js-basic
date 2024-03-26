const myCoding = ["js", "cpp", "c", "java", "py", "css"]

// forEach Loop is not return anything.
// const value = myCoding.forEach(item => {
//     console.log(item);
//     return item
// });
// console.log(value);


// Filter 


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNum.filter((item) => {
    return item > 5
})

console.log(newNum);