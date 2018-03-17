function solution(args) {
    let negativeCount = 0;

    for (let i = 0; i < 3; i++) {
        let number = Number(args[i]);

        if (number < 0) {
            negativeCount++;
        }
        else if (number === 0) {
            negativeCount = 0;
            break;
        }
    }

    if (negativeCount % 2 === 0) {
        console.log("Positive");
    }
    else {
        console.log("Negative");
    }
}

solution(["2", "3", "-1"]);
solution(["5", "4", "3"]);
solution(["-3", "-4", "5"]);