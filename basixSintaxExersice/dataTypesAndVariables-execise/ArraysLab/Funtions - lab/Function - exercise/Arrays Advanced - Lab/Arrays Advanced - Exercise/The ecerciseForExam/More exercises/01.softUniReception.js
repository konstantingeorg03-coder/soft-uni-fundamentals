function softUniReception(arr){
    let first = Number(arr.shift());
    let second = Number(arr.shift());
    let third = Number(arr.shift());
    let students = Number(arr.shift());
    let hours = 0;
    let work = first + second + third;

    while(students > 0){
        hours++;

        if(hours % 4 !== 0){
            students -= work;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5',
'6',
'4',
'20'])