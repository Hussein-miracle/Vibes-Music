import React from 'react';
import "./playlist.styles.scss"
import MusicCard from "../music-card/music-card.component";

import data from "../../data.js"

const Playlist = () => {
    return (
        <div className="playlist">
                    <h2 className="playlist__header">My playlist</h2>

    
                    <div className="playlist__cards">

            {
                data.slice(6,13).map(({imgURL,title,id}) =>  <MusicCard key={id} imgURL={imgURL} title={title} />)
            }
    
                    
                    </div>
                </div>
    )
}

export default Playlist;