function solve(arr){

    class Song{

        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsNum = arr[0];

    let allSongs = [];

    for(let i = 1; i <= songsNum; i++){
        let data = arr[i].split('_');

        let typeList = data[0];
        let name = data[1];
        let time = data[2];

        let songNew = new Song(typeList, name, time);

        allSongs.push(songNew);
    }
    
    let searchTerm = arr.pop();

    if(searchTerm !== 'all'){
        allSongs = allSongs.filter(s => s.typeList === searchTerm);
    }

    let songNames = allSongs.map(s => s.name)

    for(let songName of songNames){
        console.log(songName);
    }
}
solve([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']);

solve([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']);

solve([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']);