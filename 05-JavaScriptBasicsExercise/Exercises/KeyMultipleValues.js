function solution(args) {
    let dictionary = {};

    for (let i = 0; i < args.length - 1; i++) {
        let input = args[i].split(/ +/);

        if (!(input[0] in dictionary)){
            dictionary[input[0]] = [];
        }
        dictionary[input[0]].push(input[1]);
    }

    let query = args[args.length - 1];

    if (query in dictionary){
        for (let obj of dictionary[query]) {
            console.log(obj);
        }
    }
    else{
        console.log("None");
    }
}

solution(["key value", "key eulav", "test tset", "key"]);
solution(["3 test", "3 test1", "4 test2", "4 test3", "4 test5", "4"]);
solution(["3 bla", "3 alb", "2"]);