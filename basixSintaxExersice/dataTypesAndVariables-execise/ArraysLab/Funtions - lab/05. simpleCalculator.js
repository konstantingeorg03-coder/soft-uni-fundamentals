function calculator(first, second, operator){
    let operation;

    if(operator === 'multiply'){
        operation = (x, y) => (x * y);
    }else if(operator === 'divide'){
        operation = (x, y) => (x / y);
    }else if(operator === 'add'){
        operation = (x, y) => (x + y);
    }else if(operator === 'subtract'){
        operation = (x, y) => (x - y);
    }

    return operation(first, second);
}
