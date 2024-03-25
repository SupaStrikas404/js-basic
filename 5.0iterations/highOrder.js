// for of 

// ["", "", "", ""]
// [{}, {}, {}, {}]

/*
const myArr = ["Ram", "Sam", "Jadu", "Momo", "Bora"]
// const myArr = [1, 2, 3, 4, 5]
const msg = "Hello Kabir, Good Morning."

for (const val of myArr) {
    // console.log(val);
}
for (const ans of msg) {
    // console.log(`Each char is ${ans}`);
}
*/
// Maps 

const map = new Map();
map.set('IN', "India")
map.set('USA', "America")
map.set('UAE', "Arab")
map.set('UK', "United Kingdom")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":", value);
}

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rs: 'Rust',
    ts: 'TypeScript',
    rb: 'Ruby'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    console.log(`${key} is the shortcut of ${myObject[key]}`);
}