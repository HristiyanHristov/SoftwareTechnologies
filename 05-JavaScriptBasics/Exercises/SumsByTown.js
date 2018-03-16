function calculateSum(arr) {
    arr = arr.map(JSON.parse);
    let sum = {};

    for (let town of arr) {
        if (town.town in sum) {
            sum[town.town] += town.income;
        }
        else {
            sum[town.town] = town.income;
        }
    }

    let result = Object.keys(sum).sort();
    for (let town of result) {
        console.log(`${town} -> ${sum[town]}`);
    }
}

calculateSum(['{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}']);