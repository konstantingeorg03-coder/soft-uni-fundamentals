function solve(text){
    let usedNum = text.length / 2;

    let mid1 = text.substring(0, usedNum).split('').reverse().join('');
    let mid2 = text.substring(usedNum, text.length).split('').reverse().join('');

    console.log(mid1);
    console.log(mid2);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');