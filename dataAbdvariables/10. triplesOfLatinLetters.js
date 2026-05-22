function triplesOfLatinLetters(n){
    let number = Number(n);

    let alphaBet = 'abcdefghijklmnopqrstuvwxys';

    for(let i = 0; i < n; i++){
        let result = "" + alphaBet[i];

        for(let j = 0; j < n; j++){
            let secondResult = result + alphaBet[j];

            for(let k = 0; k < n; k++){
                let thirdresult = secondResult + alphaBet[k];

                console.log(thirdresult);
            }
        }
    }
}
triplesOfLatinLetters('3');