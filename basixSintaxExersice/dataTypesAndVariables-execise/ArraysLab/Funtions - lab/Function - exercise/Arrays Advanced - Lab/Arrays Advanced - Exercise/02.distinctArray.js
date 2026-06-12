function distinctArray(arr){
    let row = [];

    for(let num of arr){
        if(!row.includes(num)){
            row.push(num);
        }
    }
    console.log(row.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);