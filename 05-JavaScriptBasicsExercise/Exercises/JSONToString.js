function solution(args) {
    let obj = {};

    for (let word of args) {
        let data = word.split(/ -> /);

        let num = Number(data[1]);
        if (isNaN(num)) {
            obj[data[0]] = data[1];
        }
        else {
            obj[data[0]] = num;
        }
    }

    console.log(JSON.stringify(obj));
}

solution([
    "name -> Angel",
    "surname -> Georgiev",
    "age -> 20",
    "grade -> 6.00",
    "date -> 23/05/1995",
    "town -> Sofia"
]);