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