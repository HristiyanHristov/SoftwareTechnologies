function symmetricNumbers(arr) {
    let range = Number(arr[0]), res = "";
    for (let i = 1; i <= range; i++) {
        if (isSymmetric(i.toString())) {
            res += i + " ";
        }
    }

    console.log(res);

    function isSymmetric(str) {
        for (let i = 0; i < str.length / 2; i++){
            if(str[i] !== str[str.length - (i+1)]){
                return false;
            }
        }

        return true;
    }
}

symmetricNumbers(["100"]);
symmetricNumbers(["750"]);