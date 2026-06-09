function negativeOrPositiveNumbers(arr){
    arr = arr.map(Number);

    let row = [];

    for(let number of arr){

        if(number < 0){
            row.unshift(number);
        }else{
            row.push(number);
        }
    }

    for(let number of row){
        console.log(number);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);