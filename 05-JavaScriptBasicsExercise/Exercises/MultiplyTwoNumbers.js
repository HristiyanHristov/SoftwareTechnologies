function multiply(arg1) {
    let base = Number(arg1[0]);
    let multiplier = Number(arg1[1]);

    console.log(base * multiplier);
}

multiply(["2", "3"]);
multiply(["13", "13"]);
multiply(["1", "2"]);
multiply(["0", "50"]);