import data from "../../data.js"
// import MusicsActionsTypes from "./musics.types";
// import  from "./musics.actio";


const INITITAL_STATE = {
    currentMusic : data[0]
}

const musicsReducer = (state=INITITAL_STATE,action) => {
    switch(action.type){

       default:
            return state;
    }
}

export default musicsReducer;