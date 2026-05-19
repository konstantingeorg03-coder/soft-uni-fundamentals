function guessPassword(array){
    let username = array[0];
    let correctPassword = username.split(''). reverse().join('');
    let currentTry = 1;
    for(let i = 1; i < array.length; i++){
        let passwordGuess = array[i];
        if(passwordGuess === correctPassword){
            console.log(`User ${username} logged in.`);
            break;
        }else{
            if(currentTry === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
            currentTry++;
        }
    }
}
guessPassword(['Acer','login','go','let me in','recA'])