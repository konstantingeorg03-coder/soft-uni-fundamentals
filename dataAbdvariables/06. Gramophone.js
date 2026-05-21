function Gramophone(bandName, albumName, songAlbumName){
    let songtime = (albumName.length * bandName.length) * songAlbumName.length / 2;
    
    let rotation = Math.ceil(songtime / 2.5);

    console.log(`The plate was rotated ${rotation} times.`);
}
Gramophone('Black Sabbath', 'Paranoid', 'War Pigs');