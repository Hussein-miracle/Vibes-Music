import React from "react";
import {motion} from "framer-motion";
import {connect} from "react-redux";
import "./music-card.styles.scss";
import {setCurrentMusic,likeMusic} from "../../redux/user/user.actions";


const MusicCard = ({imgURL,title,addArtists,artists,light,id,setCurrentMusic,likeMusic}) => {


    return (
        <motion.div className="music-card" 
        onClick={() => setCurrentMusic(id)}

        onDoubleClick={() => likeMusic(id)}
        
        >

            <motion.div className="music-card__img-container" title={artists} >
                <img 
                className="music-card__img-container--img-1"
                src={`${imgURL}`} alt={`${title}`} title={artists} />
                <img 
                className="music-card__img-container--img-2"
                src={`${imgURL}`} alt={`${title}`} />
            </motion.div>

            <h3 className="music-card__title" style={{
                color:light ? "var(--dark)" : "var(--light)"
            }}>{title}</h3>

            {addArtists ? (<h5 className="music-card__name"
            style={{
                color:light ? "var(--dark)" : "var(--light)"
            }}
            >{artists}</h5>) : null }

        </motion.div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentMusic :  (musicID) => dispatch(setCurrentMusic(musicID)),
    likeMusic: (id) => dispatch(likeMusic(id))  
})

export default connect(null,mapDispatchToProps)(MusicCard);