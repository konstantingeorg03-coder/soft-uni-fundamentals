function rounding(num, presicion){
    if(presicion > 15){
        presicion = 15;
    }
    let formatedNum = num.toFixed(presicion);
    let result = parseFloat(formatedNum);
    console.log(result);
}
rounding(10.5, 3);