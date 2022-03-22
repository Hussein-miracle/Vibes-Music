import React from "react";
import {motion} from "framer-motion";

import "./slider-card.styles.scss";

const SliderCard = ({imgURL,title,addartists,artists,light,position,index}) => {
    return (
        <motion.div className="slider-card"
        // drag="x"
        //           dragElastic={3} dragConstraints= {{
        //         left:0,
        //         right:0,
        //         top:0,
        //         bottom:0
        //     }}
        initial= {{                                                                         scale:0,
      rotation:-180 }}
        animate={{
            rotate:0,
            // left:`${-30}vw`,
            left:`-${(index - position) * 60 -60}vw`,
            scale: index === position ? 1 : 0.75,

        }}
        transition={{
            type:"spring",
            duration:2,
            stiffness:260,
            damping:20,

        }}    >
        

            <div className="slider-card__img-container" title={artists}
    
        >
                <img className="slider-card__img-container--img-1" src={`${imgURL}`} alt={`${title}`} title={artists} />

                <img className="slider-card__img-container--img-2"src={`${imgURL}`} alt={`${title}`} />


            </div>

            <h3 className="slider-card__title" style={{
                color:light ? "var(--dark)" : "var(--light)"
            }}>{title}</h3>

            {addartists ? (<h5 className="slider-card__name"
            style={{
                color:light ? "var(--dark)" : "var(--light)"
            }}
            >{artists}</h5>) : null }



        </motion.div>
    )
}

export default SliderCard;