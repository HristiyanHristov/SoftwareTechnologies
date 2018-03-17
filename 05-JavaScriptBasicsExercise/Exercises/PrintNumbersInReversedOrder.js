function print(args) {
    args.reverse();
    for (let number of args) {
        console.log(number);
    }
}

print([10, 15, 20]);
print([5, 5.5, 24, -3]);
print([20, 1, 20, 1, 20]);