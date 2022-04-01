export const playClickedMusic = (musics,musicId) => {
    
    const findMusic = musics.find( music => music.id  === musicId)
    // console.log(findMusic);

    return findMusic;
}

export const generateRandomMusic = (musics) => {
    const randomNum = Math.floor(Math.random() * musics.length);
    // console.log(randomNum)
    const randomMusic = musics[randomNum];
     console.log(randomMusic)


    return randomMusic;
}


export const addMusicToLikedMusics = (likedMusics,musics,musicId) => {

    const alreadyLiked = likedMusics.some((music) => music.id === musicId);

    if(!alreadyLiked){
        const foundMusic = musics.find( (music) => music.id === musicId);
        // console.log({...foundMusic,liked:true})
        return [...likedMusics,{...foundMusic,liked:true}];
    }


    

    return likedMusics;
}

export const getNextMusic = (musics,curMusicId) => {
    console.log(curMusicId);
    if(curMusicId > musics.length){
        return musics[0];
    }else{
        return musics[curMusicId];
    }

}


export const getPreviousMusic = (musics,curMusicId) => {
    console.log(curMusicId)
    if(curMusicId <= 0){
        return musics[musics.length - 1];
    }else{
        return musics[curMusicId];
    }
    
}