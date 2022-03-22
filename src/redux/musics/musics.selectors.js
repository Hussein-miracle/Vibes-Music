import {createSelector} from "reselect";

const selectMusics = ( (state) => state.musics )

export const selectMusicsData = createSelector (
    [selectMusics],
    (musics)=> musics.musicsData 
)
export const selectCurrentMusic =  createSelector(
    [selectMusics],
    (musics)=> musics.currentMusic 
)