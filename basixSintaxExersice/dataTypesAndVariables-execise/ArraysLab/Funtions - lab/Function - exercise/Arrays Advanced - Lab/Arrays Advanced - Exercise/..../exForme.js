function solve(arr){
    let newArr = [];

    for(let command of arr){
        if(command.includes('addMovie')){
            let current = command.split('addMovie ');
            let movie = current[1];

            newArr.push({ name: movie});
        }else if(command.includes('directedBy')){
            let current = command.split(' directedBy ');
            let [nameMovie, movieDirector] = current;

            let movieFound = newArr.find(movie => movie.name === nameMovie);

            if(movieFound){
                movieFound.director = movieDirector;
            }
        }else if(command.includes('onDate')){
            let current = command.split(' onDate ');
            let [nameMovie, movieDate] = current;

            let movieFound = newArr.find(movie => movie.name === nameMovie);

            if(movieFound){
                movieFound.date = movieDate;
            }
        }
    }

    for(let data of newArr){
        if(data.name && data.director && data.date){
            console.log(JSON.stringify(data))
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