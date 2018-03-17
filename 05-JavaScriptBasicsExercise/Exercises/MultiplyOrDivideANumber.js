function multiply(args) {
    let number = Number(args[0]);
    let multiplier = Number(args[1]);

    if (multiplier >= number){
        console.log(number * multiplier);
    }
    else
    {
        console.log(number / multiplier);
    }
}

multiply(["2", "3"]);
multiply(["13", "13"]);
multiply(["3", "2"]);
multiply(["144", "12"]);