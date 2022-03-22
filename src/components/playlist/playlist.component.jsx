import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";


import {selectMusicsData} from "../../redux/musics/musics.selectors";
import {selectBgMode} from "../../redux/user/user.selectors";
import MusicCard from "../music-card/music-card.component";


import "./playlist.styles.scss";

const Playlist = ({light,musics}) => {
    // console.log(musics,"[music in playkists]")
    return (
        <div className="playlist">
                    <h2 className="playlist__header" style={{
                  color: light ? "var(--dark)" : "var(--light)"
                }}>My playlist</h2>

    
                    <div className="playlist__cards">

            {
                musics.slice(9,17).map(({imgURL,title,id}) =>  <MusicCard light={light} key={id} imgURL={imgURL} title={title} />)
            }
    
                    
                    </div>
                </div>
    )
}


const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    musics:selectMusicsData
})


export default connect(mapStateToProps)(Playlist);