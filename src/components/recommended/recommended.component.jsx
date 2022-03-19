import React from 'react';
import "./recommended.styles.scss";

import MusicCard from "../music-card/music-card.component";

import data from "../../data.js"
// console.log(data)

// console.log(MusicCard)

const Recommended = () => {
  return (
    <div className="recommended">
                <h2 className="recommended__header">Recommended for you</h2>
  
                <div className="recommended__cards">

                  {
                    data.slice(0,6).map(({imgURL,title,addArtists,artists,id}) => <MusicCard 

                    key={`${id}`}
                    imgURL={imgURL}
                    title={title}
                    addArtists
                    artists={artists}

                    />)
                  }

                </div>
    </div>
  )
}

export default Recommended;
