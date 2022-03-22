import React from "react";
import {motion} from "framer-motion";
import "./music-card.styles.scss";


const MusicCard = ({imgURL,title,addArtists,artists,light}) => {

    return (
        <motion.div className="music-card" 
        drag
         dragElastic={3} dragConstraints= {{
                left:0,
                right:0,
                top:0,
                bottom:0
            }}
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

export default MusicCard;