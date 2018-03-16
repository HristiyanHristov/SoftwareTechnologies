function sum(str) {
    let arr = str[0].split(" ");

    let num2 = Number(arr[1]);
    let num1 = Number(arr[0]);
    let num3 = Number(arr[2]);

    if (num1 + num2 === num3) {
        console.log(`${Math.min(num1, num2)} + ${Math.max(num1, num2)} = ${num3}`);
    }
    else if (num2 + num3 === num1) {
        console.log(`${Math.min(num2, num3)} + ${Math.max(num2, num3)} = ${num1}`);
    }
    else if (num1 + num3 === num2) {
        console.log(`${Math.min(num1, num3)} + ${Math.max(num1, num3)} = ${num2}`);
    }
    else {
        console.log("No");
    }
}

sum("8 15 7");
sum("-5 -3 -2");
sum("8 3 12");