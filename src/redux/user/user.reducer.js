import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    lightMode:true,
    menuDisplay:false

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
        default:
            return state;
    }
}

export default userReducer;