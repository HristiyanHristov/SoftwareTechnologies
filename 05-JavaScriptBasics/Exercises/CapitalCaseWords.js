function capitalWords(arr) {
    let text = arr.join(",");

    console.log(text.split(/[^\w]/)
        .filter(w => w !== '')
        .filter(w => w === w.toUpperCase()).join(", "));
}