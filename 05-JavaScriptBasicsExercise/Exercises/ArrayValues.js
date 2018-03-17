function setValue(args) {
    let number = Number(args[0]);

    let numbers = [];
    for (let i = 0; i < number; i++) {
        numbers[i] = 0;
    }

    for (let i = 1; i < args.length; i++){
        let input = args[i].split(/ - /);
        numbers[Number(input[0])] = Number(input[1]);
    }

    for (let number of numbers) {
        console.log(number);
    }
}

setValue(["3", "0 - 5", "1 - 6", "2 - 7"]);
setValue(["5", "0 - 3", "3 - -1", "4 - 2"]);
setValue(["2", "0 - 5", "0 - 6", "0 - 7"]);