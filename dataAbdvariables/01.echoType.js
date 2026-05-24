function echoType(input){
    let typeOfInput = typeof(input);
    console.log(typeOfInput);

    if(typeOfInput === 'string' || typeOfInput === 'number'){
        console.log(input);
    }else{
        console.log('Parameter is not suitable for printing');
    }
}
echoType('Hello, JavaScript!');