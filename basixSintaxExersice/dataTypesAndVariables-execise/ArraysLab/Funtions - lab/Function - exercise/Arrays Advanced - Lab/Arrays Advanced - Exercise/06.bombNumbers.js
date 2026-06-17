function bombNumbers(arr1, arr2) {
    let [bombNum, bombPower] = arr2;

    while (arr1.includes(bombNum)) {
        let index = arr1.indexOf(bombNum);

        let startIndex = index - bombPower;

        if (startIndex < 0) {
            startIndex = 0;
        }

        let count = bombPower * 2 + 1;

        arr1.splice(startIndex, count);
    }

    let sum = arr1.reduce((total, num) => total + num, 0);

    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
                   [4, 2]);