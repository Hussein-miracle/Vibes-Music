import UserActionTypes from "./user.types";

export const  changeMode = () => ({
    type:UserActionTypes.CHANGE_MODE
})


export const openMenu = () => {
    return {
        type:UserActionTypes.OPEN_MENU
    }
}


export const closeMenu = () => {
    return {
        type:UserActionTypes.CLOSE_MENU
    }
}

export const playCurrentMusic = (music) => {
    return {
        type:UserActionTypes.PLAY_CURRENT_MUSIC,
        payload:music
    }
}

export const pauseCurrentMusic = (music) => {
    return {
        type:UserActionTypes.PAUSE_CURRENT_MUSIC,
        payload:music
    }
}

export const playNextMusic = (music) => {
    return {
        type:UserActionTypes.PLAY_NEXT_MUSIC,
        payload:music
    }
}
export const playPreviousMusic = (music) => {
    return {
        type:UserActionTypes.PLAY_PREVIOUS_MUSIC,
        payload:music
    }
}
