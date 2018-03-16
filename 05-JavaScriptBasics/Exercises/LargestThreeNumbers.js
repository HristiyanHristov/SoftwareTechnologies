function largestThreeNumbers(arr) {
    arr.sort((a, b) => b - a);

    for (let num of arr.slice(0, 3)) {
        console.log(num);
    }
}

largestThreeNumbers([1, 2]);