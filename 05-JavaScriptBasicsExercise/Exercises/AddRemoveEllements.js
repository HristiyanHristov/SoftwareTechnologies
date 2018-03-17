function addRemove(args) {
    let numbers = [];

    for (let i = 0; i < args.length; i++) {
        let input = args[i].split(/ +/);

        if (input[0] === "add") {
            numbers.push(Number(input[1]));
        }
        else {
            let index = Number(input[1]);

            if (index < numbers.length && index >= 0) {
                numbers.splice(Number(input[1]), 1);
            }
        }
    }

    for (let number of numbers) {
        console.log(number);
    }
}

addRemove(["add 3", "add 5", "add 7"]);
addRemove(["add 3", "add 5", "remove 1", "add 2"]);
addRemove(["add 3", "add 5", "remove 2", "remove 0", "add 7"]);