$(document).ready(function () {
    // $('selector').action()
    // $('p').click(); //click on p
    $('p').click(function () {
        console.log("You clicked on P");
        $(this).hide()
    })

    // hide p on click
})



// $(document).ready(function () {
//     // $('selector').action()
//     // $('p').click(); //click on p
//     $('p').click(function () {
//         console.log("You clicked on P");
//         $(this).hide()
//     })

//     // hide p on click
// })
// let avg = 0
// function calculateAverage(number) {
//     if (number.length > 0) {
//         for (let i = 0; i < number.length; i++) {
//             avg = avg + number[i]
//             if (i === number.length - 1) {
//                 let final = avg / number.length
//                 return final
//             }
//         }
//     } else {
//         return 0
//     }


// }

// console.log(calculateAverage([100]));


// let final = []
// function dedupe(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (const x in numbers) {
//             if (numbers[i] === x) {
//                 console.log(numbers[i]);
//                 console.log(x);

//             } else {
//                 // console.log(numbers);
//             }
//         }
//     }
// }
// dedupe([1, 2, 4, 4, 1, 2])

// program to remove duplicate value from an array

// function dedupe(numbers) {

//     let uniqueArr = [];

//     // loop through array
//     for (let i of numbers) {
//         if (uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }

// const array = [1, 2, 3, 2, 3];

// // calling the function
// // passing array argument
// dedupe(array);


// let avg = 0
// function calculateAverage(number) {
//     if (number.length > 0) {
//         for (let i = 0; i < number.length; i++) {
//             avg = avg + number[i]
//             if (i === number.length - 1) {
//                 let final = avg / number.length
//                 return final
//             }
//         }
//     } else {
//         return 0
//     }


// }

// console.log(calculateAverage([4, 10, 4, 10]));


// 3333333
// function isPangram(string) {
//     let strArr = string.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//     for (let i = 0; i < alphabet.length; i++) {
//         if (strArr.indexOf(alphabet[i]) < 0) {
//             return false;
//         }
//     }
//     return true;
// }

// 444444444444444444444444444444444444

let counter = 1
let x
let array = []
let final = ''
function strExpand(str) {
    const data = str.split("")
    for (x of data) {

        function check(dataa) {
            for (let i = 0; i < data.length; i++) {
                if (dataa === data[i + 1]) {
                    counter = counter + 1
                }
            }

        }
        check(x)
        // console.log(counter);
        array.push(x + counter)
        counter = 0
    }
    // console.log(array);
    let unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
    for (const fin of unique) {
        // console.log(fin);
        final = final + fin
    }
    return final
}

console.log(strExpand('aeebbccd'));

// strExpand('aeebbccd') // 'a1e2b2c2d1'
