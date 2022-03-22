import {combineReducers} from "redux";
import userReducer from "./redux/user/user.reducer";
import musicsReducer from "./redux/musics/musics.reducer";


const rootReducer = combineReducers({
    user:userReducer,
    musics:musicsReducer
})

export default rootReducer;