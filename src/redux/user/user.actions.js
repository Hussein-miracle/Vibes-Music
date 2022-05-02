import UserActionTypes from "./user.types";

export const  changeMode = () => ({
    type:UserActionTypes.CHANGE_MODE
})


export const openMenu = () => {
    return {
        type:UserActionTypes.OPEN_MENU
    }
}
export const  getRandomMusic = () => {
    return {
        type:UserActionTypes.SET_RANDOM_MUSIC
    }
}


export const closeMenu = () => {
    return {
        type:UserActionTypes.CLOSE_MENU
    }
}

export const setCurrentMusic = (musicId) => ({
    type:UserActionTypes.SET_CURRENT_MUSIC,
    payload:musicId
})
export const repeatCurrentMusic = (musicId) => ({
    type:UserActionTypes.REPEAT_CURRENT_MUSIC,
    payload:musicId
})

export const playMusic = () => {
    return {
        type:UserActionTypes.PLAY_MUSIC,
    }
}


export const pauseMusic = () => {
    return {
        type:UserActionTypes.PAUSE_MUSIC,

    }
}
export const likeMusic = (musicId) => {
    return {
        type:UserActionTypes.LIKE_MUSIC,
        payload:musicId

    }
}

export const playNextMusic = (curMusicIndex) => {
    return {
        type:UserActionTypes.PLAY_NEXT_MUSIC,
        payload:curMusicIndex
    }
}
export const playPreviousMusic = (curMusicIndex) => {
    return {
        type:UserActionTypes.PLAY_PREVIOUS_MUSIC,
        payload:curMusicIndex
    }
}


export const setMusicDetails = (musicDetail) => {
    return {
        type:UserActionTypes.SET_MUSIC_DETAILS,
        payload:musicDetail
    }
}
