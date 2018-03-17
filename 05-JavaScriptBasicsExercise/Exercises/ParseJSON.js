function solution(args) {
    let info = [];

    for (let i = 0; i < args.length; i++) {
        info.push(JSON.parse(args[i]));
    }

    for (let obj of info) {
        console.log(`Name: ${obj.name}`);
        console.log(`Age: ${obj.age}`);
        console.log(`Date: ${obj.date}`);
    }
}

solution(['{\"name\":\"Gosho\",\"age\":10,\"date\":\"19/06/2005\"}',
    '{\"name\":\"Tosho\",\"age\":11,\"date\":\"04/04/2005\"}']);