 function movies(arr){
    let moviesArr = [];

    for(let command of arr){
        if(command.includes('addMovie')){
            let tokens = command.split('addMovie ');
            let movieName = tokens[1];
            
            moviesArr.push({ name: movieName});
        }else if(command.includes('directedBy')){
            let tokens = command.split(' directedBy ');
            let [nameMovie, movieDirector] = tokens;

            let movieFound = moviesArr.find(movie => movie.name === nameMovie);

            if(movieFound){
                movieFound.director = movieDirector;

            }
        }else if(command.includes('onDate')){
            let tokens = command.split(' onDate ');
            let [nameMovie, movieDate] = tokens;

            let movieFound = moviesArr.find(movie => movie.name === nameMovie);

            if(movieFound){
                movieFound.date = movieDate; 
                
            }
        }
    }

    for(let movieObj of moviesArr){
            if(movieObj.name && movieObj.director && movieObj.date){
                console.log(JSON.stringify(movieObj));
            }
        }
}
movies([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]);