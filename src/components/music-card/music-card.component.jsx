import React,{useState} from "react";


import img from "../../assets/images/monstersGoBump.jpg"

import "./music-card.styles.scss"
const MusicCard = ({imgURL,title,addArtists,artists}) => {

    return (
        <div className="music-card">

            <div className="music-card__img-container">
                <img 
                className="music-card__img-container--img-1"
                src={`${imgURL}`} alt={`${title}`} />
                <img 
                className="music-card__img-container--img-2"
                src={`${imgURL}`} alt={`${title}`} />
            </div>

            <h3 className="music-card__title">{title}</h3>

            {addArtists ? (<h5 className="music-card__name">{artists}</h5>) : null }

        </div>
    )
}

export default MusicCard;