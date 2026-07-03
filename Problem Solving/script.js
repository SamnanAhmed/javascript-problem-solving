// (1) Reverse a stirng 

let str = "Samnan";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);



// // (2) Count vowels in string


const countVowels = (string) => {

    let vowels = "aeiou";
    let count = 0;
    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }

    console.log(`Vowels in ${string} are ${count}`);
}

countVowels("Samnan");



// (3) Sum of positive numbers in array

const sumPosArrr = (arr) => {

    let sum = arr.filter(n => n >= 0).reduce((acc, val) => {
        return acc + val;
    })

    console.log(`Sum of positive numbers in array ${arr} is ${sum}`);

}

sumPosArrr([1, 2, 3, 4, 5, -6, 7, 8, 9, -10]);



// (4) Filter odd/ even numbers 

const evenodd = (num) => {

    if (typeof num !== "number") {
        return;
    }

    if (num % 2 === 0) {
        console.log(`${num} is even number`);
    }
    else {
        console.log(`${num} is odd number`);
    }
}

evenodd(22);
evenodd(11);



// (5) Remove duplicates from array


const noDuplicates = (arr) => {

    let rem_dup = arr.filter((item, index) => arr.indexOf(item) === index);
    console.log(`Array with out duplicates is ${rem_dup}`);

}

noDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 2]);



// (6) Flatten Nested Array 1 level

const flattenArray = (arr) => {
    let result = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            result.push(...item); // values ko expand kar dei ga spread operator agar value array hui to
        } else {
            result.push(item);  // agar value array nahi hui to usko wese hi store kar lei ga 
        }
    });

    console.log(`Flatten Array is ${result}`);
}

flattenArray([1, 2, 3, 4, [5, 6, 7], 8, 9, 10]);




// (7) Find the longest word in sentence

const longestWord = (sentence) => {

    if (sentence.trim() === "") return;

    // sabse pehle words ko alag krna hai jaha jaha space hai split sy...

    let arr_of_worrds = sentence.split(" ");

    // ab har word ki length count bhi karni hai or compare bhi jiski sab sa zyya length hui wo longest word hoga

    let longest_word = arr_of_worrds.reduce((longest, current) => longest.length < current.length ? current : longest);
    console.log(`Longest word in sentence is ${longest_word}`);

}
longestWord("I am a Web Developer and i love to create responsive and user friendly websites");



// (8) Find common elements in two arrays

const commNum = (arr_1, arr_2) => {
    let common = [];

    for (let i = 0; i < arr_1.length; i++) {

        for (let j = 0; j < arr_2.length; j++) {
            if (arr_1[i] === arr_2[j]) {

                common.push(arr_1[i]);
            }

        }
    }
    console.log(`Common number in arr_1 & arr_2 are ${common} `);
}


commNum([1, 2, 3, 4, 5], [6, 3, 8, 4, 10]);



// (9) Check if a string is palindrome, without reverse() 

const palindromCheck = (str) => {

    if (typeof str !== "string") return;

    str = str.toLowerCase().trim();
    let rev_str = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str[i];
    }

    if (str === rev_str) {
        console.log(`${str} is palindrome`);
    }
    else {
        console.log(`${str} is not palindrome`);
    }

}

palindromCheck("Madam");
palindromCheck("Samnan");



// (10) Find the largest and smallest number without Math.max/Math.min

const largeSmall = (arr) => {
    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 0; i <= arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
        if (smallest > arr[i]) {
            smallest = arr[i];
        }
    }
    console.log(`Largest Number is ${largest}`);
    console.log(`Smallest Number in array is ${smallest}`);
}
largeSmall([1, 2, 3, 4, 5]);



// (11) Find duplicates in an array

let arr = [1, 2, 3, 4, 6, 6, 7, 8, 9, 2,];

let find_dup = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(`Duplicates in array are ${find_dup}`);



// (12) Find the missing number in [1,2,4,5]

let arr = [1, 4, 2];

// finding sum of array using reduce 

let sum = arr.reduce((acc, item) => acc + item);

// n is last number of array 

let n = arr.length + 1

// n * (n+1) / 2--- it s formula used to find sum of n nunmbers with out missing value 

let expected_sum = n * (n + 1) / 2;

console.log(`Missing number in array is: ${expected_sum - sum}`);



// (13) Three students scored [80, 92, 75], given as [{name, score}].
//  Write a function that returns the name of the highest scorer.

let students = [
    { name: "Ali", score: 80 },
    { name: "Sara", score: 92 },
    { name: "Zain", score: 75 }
];

const highestscorer = (students) => {

    let top_student = students[0];

    for (let i = 0; i <= students.length - 1; i++) {
        if (students[i].score > top_student.score) {
            top_student = students[i];
        }
    }
    return top_student;
}

console.log(highestscorer(students));



// (14) A teacher has 23 candies to split evenly among 5 students.
//  Write a function that returns how many candies each student gets, and how many are left over.

const splitCandies = (candies, students) => {

    let candies_per_student = Math.floor(candies / students);
    let candies_left = candies % students;

    console.log(`Total candies are ${candies} and Students are ${students}, Each student get ${candies_per_student} candies & ${candies_left} candies are left after distribution`);
}

splitCandies(23, 5);

// (15) A CRM holds 10 contacts, and 4 of them are marked as duplicates.
//  Write a function that returns the percentage that's clean.

const clean_percentage = (contacts, duplicates) => {

    let clean_contacts = contacts - duplicates;

    let percentage = (clean_contacts * 100) / contacts;

    console.log(`Percentage of clean contacts is ${percentage}`);

}

clean_percentage(10, 4);




// (16) Write a function to check whether a number is Armstrong number or not 


const checkArmstrong = (n) => {

    let sum = 0;    // ismai num store hoga end mai jisko compare karna hai 
    let num_lenght = 0;  // yei hamei number ki length bataey ga 
    let temp = n;   // num ki lenght jan ny ke liye uski value ek temporary variable mai store ki gai hai 

    while (temp > 0) {  // jab tak num 0 sa bara hai tab tak loop chalei gi
        temp = Math.floor(temp / 10); // har loop mai num ek digit end sai kum hota jaye ga 
        num_lenght++;  // or har digit jab kum hoga oskei bad hamary length variable ki value +1 ho jaey gi
    }
    let temp_2 = n;
    while (temp_2 > 0) { // jab tak n 0 sai bara hai tab tak loop chalei gi 
        let digit = temp_2 % 10;  // % ka use kar kei last digit nikala jaye ga har bari 
        sum += digit ** num_lenght;  // sum mai us digit ko num_lenght ki power di jaye gi like first iteration in this case will be sum = 0 + 3**3
        temp_2 = Math.floor(temp_2 / 10);  // number ka last wala digit nikal diya jaye ga 
    }
    if (sum === n) { // ab agar sum === ata hai num kei to armstrong hai warna nahi
        console.log(`${n} is Armstrong number`);
    }
    else {
        console.log(`${n} is not Armstrong number`)
    }
}

checkArmstrong(153);