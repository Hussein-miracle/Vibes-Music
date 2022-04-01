import {createSelector} from "reselect";

const selectUser = (state) => state.user ;

export const selectBgMode = createSelector(
    [selectUser],
    (user) => user.lightMode
)
export const selectMenuDisplay = createSelector(
    [selectUser],
    (user) => user.menuDisplay
)


export const selectCurrentMusic =  createSelector(
    [selectUser],
    (user)=> user.currentMusic 
)


export const selectAllMusics =  createSelector(
    [selectUser],
    (user)=> user.allMusics
)

export const selectLikedMusics =  createSelector(
    [selectUser],
    (user)=> user.likedMusics
)

export const selectPlayState =  createSelector(
    [selectUser],
    (user)=> user.play
)