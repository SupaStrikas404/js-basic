// For Loop 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 7) {
//         console.log("Thala for a reason.");
//     }
//     console.log(element);
// }


for (let i = 0; i <= 10; i++) {
    console.log(`Outer value is: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop is ${j} and value is: ${i}`);

    }
}