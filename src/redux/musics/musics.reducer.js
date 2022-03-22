import data from "../../data.js"
import MusicsActionsTypes from "./musics.types";
// import  from "./musics.actio";


const INITITAL_STATE = {
    musicsData : data,
    currentMusic:{},
}

const musicsReducer = (state=INITITAL_STATE,action) => {
    switch(action.type){
        case MusicsActionsTypes.SET_CURRENT_MUSIC :
            return {
                ...state,
                currentMusic:action.payload
            }
       default:
            return state;
    }
}

export default musicsReducer;