import React from 'react';
import {connect} from "react-redux";
import "./recommended.styles.scss";
import {createStructuredSelector} from "reselect"

import {selectBgMode} from "../../redux/user/user.selectors";
import {selectMusicsData} from "../../redux/musics/musics.selectors";
import MusicCard from "../music-card/music-card.component";



const Recommended = ({light,musics}) => {
  return (
    <div className="recommended">
                <h2 className="recommended__header"
                style={{
                  color: light ? "var(--dark)" : "var(--light)"
                }}
                >Recommended for you</h2>
  
                <div className="recommended__cards">

                  {
                    musics.slice(0,8).map(({imgURL,title,addArtists,artists,id}) => <MusicCard 
                    light={light}
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
const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    musics:selectMusicsData
})


export default connect(mapStateToProps)(Recommended);
