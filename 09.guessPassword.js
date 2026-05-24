function guessPassword(array){
      for(let i = 1; i <= array.length; i++){
        let sum = 0;

        let numberAsString = String(i);

        for(let j = 0; j < numberAsString.length; j++){
            let currenDigit = numberAsString[j];

            sum += Number(currenDigit);
        }
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
}
guessPassword(['Acer','login','go','let me in','recA'])