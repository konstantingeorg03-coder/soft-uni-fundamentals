function loadingBar(percent){
    let loaded = percent / 10;

    let notLoaded = 10 - loaded;

    let loadedBar = '';

    for(let i = 0; i < loaded; i++){
        loadedBar += '%';
    }

    let pointsLoaded = '';

    for(let i = 0; i < notLoaded; i++){
        pointsLoaded += '.';
    }
    
    if(percent === 100){
        console.log('100% Complete!');
        console.log(`[${loadedBar}]`);
    }else{
        console.log(`${percent}% [${loadedBar}${pointsLoaded}]`);
        console.log('Still loading...');
    }
}
loadingBar(30)