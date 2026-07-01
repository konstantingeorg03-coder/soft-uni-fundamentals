function solve(arr){
    let newArr = [];

    for(let command of arr){
        if(command.includes('addMovie')){
            let token = command.split('addMovie ');
            let usedToken = token[1];

            newArr.push({name: usedToken})
        }else if(command.includes('directedBy')){
            let token = command.split(' directedBy ');
            let [movieName, movieDirector] = token;

            let movieFound = newArr.find(movie => movie.name === movieName);
            if(movieFound){
                movieFound.director = movieDirector;
            }
        }else if(command.includes('onDate')){
            let token = command.split(' onDate ');
            let [movieName, date] = token;

            let movieFound = newArr.find(movie => movie.name === movieName);
            if(movieFound){
                movieFound.date = movieFound;

            }
        }
    }

    for(let dataObj of newArr){
        if(dataObj.name && dataObj.director && dataObj.date){
            console.log(dataObj);
        }
    }
}
solve([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]);