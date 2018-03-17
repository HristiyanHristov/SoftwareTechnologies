function solution(args) {
    let dictionary = {};

    for (let i = 0; i < args.length - 1; i++) {
        let input = args[i].split(/ +/);

        dictionary[input[0]] = input[1];
    }

    let query = args[args.length - 1];

    if (query in dictionary){
        console.log(dictionary[query]);
    }
    else{
        console.log("None");
    }
}

solution(["key value", "key eulav", "test tset", "key"]);
solution(["3 test", "3 test1", "4 test2", "4 test3", "4 test5", "4"]);
solution(["3 bla", "3 alb", "2"]);