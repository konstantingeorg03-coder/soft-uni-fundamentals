function triplesOfLatinLetters(n){
    let number = Number(n);

    let alphaBet = 'absdefghijklmnopqrstuvwxyz';

    for(let i = 0; i < n; i++){
        let result = " " + alphaBet[i];

        for(let j = 0; j < n; j++){
            let secondResult = result + alphaBet[j];

            for(let k = 0; k < n; k++){
                let thirdResult = secondResult + alphaBet[k];
                console.log(thirdResult);
            }
        }
    }
}
triplesOfLatinLetters('3');