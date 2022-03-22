import React from 'react';
import{Link} from "react-router-dom";
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectMusicsData} from "../../redux/musics/musics.selectors";
import {selectBgMode} from "../../redux/user/user.selectors";
import MusicCard from "../../components/music-card/music-card.component";
import MusicPlayer from "../../components/music-player/music-player.component"
import "./favourites.styles.scss";


const Favourites = ({ light ,musics}) => {
let song = musics[17];
    // console.log(song  ,"home sonng"
  // console.log(musics,"[favs]")
  return (
    <div className="favourites" style={{
      backgroundColor: light ? "var(--light)" : "var(--dark)"
    }}>

      <div className="favourites__header">
        
        <div className="favourites__header--btns">
          
            <Link to="/">
              {
            light ? <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8927 7.24024L8.2927 0.84024M1.8927 7.24024L8.2927 13.6402M1.8927 7.24024H21.8927" stroke="#091127" strokeWidth="2"/>
</svg>  :

<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29077 7.38935L8.69077 0.989349M2.29077 7.38935L8.69077 13.7893M2.29077 7.38935H22.2908" stroke="#EAF0FF" strokeWidth="2"/>
</svg>

          }
            </Link>
        
          
          


{
  light ?  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4927 4.84023L10.8927 4.84023M10.8927 4.84023C10.8927 3.07292 9.45999 1.64023 7.69268 1.64023C5.92536 1.64023 4.49268 3.07292 4.49268 4.84023M10.8927 4.84023C10.8927 6.60754 9.45999 8.04023 7.69268 8.04023C5.92536 8.04023 4.49268 6.60754 4.49268 4.84023M4.49268 4.84023L0.492676 4.84023M24.4927 17.6402L20.4927 17.6402M20.4927 17.6402C20.4927 15.8729 19.06 14.4402 17.2927 14.4402C15.5254 14.4402 14.0927 15.8729 14.0927 17.6402M20.4927 17.6402C20.4927 19.4075 19.06 20.8402 17.2927 20.8402C15.5254 20.8402 14.0927 19.4075 14.0927 17.6402M14.0927 17.6402L0.492676 17.6402" stroke="#091127" strokeWidth="2"/>
</svg>  :  


<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.8907 4.98934L11.2907 4.98934M11.2907 4.98934C11.2907 3.22203 9.85806 1.78934 8.09075 1.78934C6.32344 1.78934 4.89075 3.22203 4.89075 4.98934M11.2907 4.98934C11.2907 6.75665 9.85806 8.18934 8.09075 8.18934C6.32344 8.18934 4.89075 6.75665 4.89075 4.98934M4.89075 4.98934L0.890747 4.98934M24.8907 17.7893L20.8907 17.7893M20.8907 17.7893C20.8907 16.022 19.4581 14.5893 17.6907 14.5893C15.9234 14.5893 14.4907 16.022 14.4907 17.7893M20.8907 17.7893C20.8907 19.5566 19.4581 20.9893 17.6907 20.9893C15.9234 20.9893 14.4907 19.5566 14.4907 17.7893M14.4907 17.7893L0.890747 17.7893" stroke="#EAF0FF" stroke-width="2"/>
</svg>


}


          

        </div>

        


      </div>

      <section className="favourites__container">
        <h1 className="favourites__container--title" style={{
          color: light ? "var(--dark)" : "var(--light)"
        }}>Liked Songs</h1>



        <div className="favourites__content">
          {
          musics.slice(9).map(({imgURL,title,addArtists,artists,id}) => <MusicCard
          key={id}
          imgURL={imgURL}
          title={title}
          addArtists
          artists={artists}
          light={light}
          />)
        }
        </div>
        <div style={{
                        marginTop:"4rem"
                    }}></div>
        <MusicPlayer song={song} />
      </section>

    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    musics:selectMusicsData
})


export default connect(mapStateToProps)(Favourites);