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