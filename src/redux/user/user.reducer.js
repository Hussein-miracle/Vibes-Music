import UserActionTypes from "./user.types";
import { playClickedMusic ,generateRandomMusic,addMusicToLikedMusics ,getPreviousMusic , getNextMusic} from "./user.utils";
import data from "../../data.js"
// import MusicsActionsTypes from "./musics.types";


const INITIAL_STATE = {
    lightMode:!true,
    menuDisplay:false,
    currentMusic:data[0]    ,  
    allMusics:data,
    likedMusics:[],
    play:false

}

const userReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case UserActionTypes.CHANGE_MODE: 
                return {
                    ...state,
                    lightMode:!state.lightMode
                }
        case UserActionTypes.OPEN_MENU: 
                return {
                    ...state,
                    menuDisplay:true
                }
        case UserActionTypes.CLOSE_MENU: 
                return {
                    ...state,
                    menuDisplay:false
                }
        case UserActionTypes.PLAY_MUSIC: 
                return {
                    ...state,
                    play:true
                }
        case UserActionTypes.PAUSE_MUSIC: 
                return {
                    ...state,
                    play:false
                }
        case UserActionTypes.PLAY_NEXT_MUSIC: 
                return {
                    ...state,
                    currentMusic:getNextMusic(state.allMusics,action.payload),
                    play:true
                }
        case UserActionTypes.PLAY_PREVIOUS_MUSIC: 
                return {
                    ...state,
                    currentMusic:getPreviousMusic(state.allMusics,action.payload),
                    play:true
                }
        case UserActionTypes.LIKE_MUSIC: 
                return {
                    ...state,
                    likedMusics: addMusicToLikedMusics(state.likedMusics,state.allMusics,action.payload) 
                }
        case UserActionTypes.SET_CURRENT_MUSIC: 
                return {
                    ...state,
                    currentMusic:playClickedMusic(state.allMusics,action.payload)
                }
        default:
            return {...state,currentMusic:data[10]};
    }
}

export default userReducer;