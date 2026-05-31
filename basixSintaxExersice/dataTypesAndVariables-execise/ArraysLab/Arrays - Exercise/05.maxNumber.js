function maxNumber(arr) {
    let topNums = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (rightNum > currentNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topNums.push(currentNum);
        }
    }

    console.log(topNums.join(' '));
}

maxNumber([1, 4, 3, 2]);
