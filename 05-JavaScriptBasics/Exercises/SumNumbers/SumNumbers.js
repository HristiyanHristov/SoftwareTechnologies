function sumNumbers() {
    let firstNum = document.getElementById("num1").value;
    let secondNum = document.getElementById("num2").value;

    let sum = Number(firstNum) + Number(secondNum);
    document.getElementById("result").innerHTML = `<span>${sum}</span>`;
    console.log(sum);
}