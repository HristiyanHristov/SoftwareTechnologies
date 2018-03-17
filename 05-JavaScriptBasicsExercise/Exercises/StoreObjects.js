function solution(args) {
    let info = [];

    for (let i = 0; i < args.length; i++) {
        let input = args[i].split(/ -> /);

        info.push({
            name: input[0],
            age: input[1],
            grade: input[2]
        });
    }

    for (let obj of info) {
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Grade: ${obj.grade}`);
    }
}

solution(["Pesho -> 13 -> 6.00",
    "Ivan -> 12 -> 5.57",
    "Toni -> 13 -> 4.90"]);