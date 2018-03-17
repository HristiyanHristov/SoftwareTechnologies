function print(args) {
    for (let i = 0; ; i++) {
        if (args[i] === "Stop") {
            break;
        }
        console.log(args[i]);
    }
}

print(["Line 1",
"Line 2",
"Line 3",
"Stop"]);

print(["3",
    "6",
    "5",
    "4",
    "Stop",
    "10",
    "12"
]);