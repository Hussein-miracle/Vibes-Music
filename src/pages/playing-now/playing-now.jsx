import React,{useState,useEffect} from "react";
import {connect} from "react-redux";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import { Swipeable } from "react-swipeable";

import "./playing-now.styles.scss";
import svgCont from "../../assets/icons/sprite.svg";
import SliderCard from "../../components/slider-card/slider-card.component";

import {selectMusicsData} from "../../redux/musics/musics.selectors";
import {selectBgMode} from "../../redux/user/user.selectors";


const PlayingNow = ({light,musics}) => {
    const [sliderPosition,setSliderPosition] = useState(0);





    const handleSwiped = ({dir}) => {

        if(dir === "Left"){
          if(sliderPosition < musics.slice(0,18).length - 1){
             setSliderPosition(sliderPosition + 1);
            } 
            console.log("swiped Left") 
        }

        if(dir === "Right"){
            if(sliderPosition >  0){
                setSliderPosition(sliderPosition - 1)
            }

            console.log("swiped Right")
        }

    }

    return (
        <section className="playing-now" 
        style={{
            backgroundColor: light ? "var(--light)" : "var(--dark)",
            color:light ? "var(--dark)" : "var(--light)" 
        }}  >
            <header className="playing-now__header">
                
                    <Link to="/">
                        <button className="playing-now__header--btn">
                            <svg className="" style={{
                                fill:light ? "var(--dark)" : "var(--light)" 
                            }} >
                                <use  href ={`${svgCont}#icon-arrow-left`}></use>
                            </svg>
                        </button>
                    </Link>

                <h1 className="playing-now__header--title">Playing Now</h1>
            </header>

            <div className="playing-now__content">

                {/* <button onClick={handleSwipedLeft}>Left</button>
                <button onClick={handleSwipedRight}>Right</button> */}

                <Swipeable 
                // ref={slider} 
                 className="playing-now__content--cards-container slider " whileTap={{
                    cursor:"grabbing"
                }}
               
                preventDefaultTouchmoveEvent={false}
                onSwiped={handleSwiped}>
                                       <motion.div className="slider__inner" 
                    >
                        {
                            musics.slice(0,10).map(({id,imgURL,title,artists},index) =>
                                <SliderCard key={id}
                                index={index}
                                position={sliderPosition}
                                                title={title} 
                                                                addartists
                                                                artists={artists} 
                                                                light={light} 
                                                                imgURL={imgURL} />)
                        }
                    </motion.div>
                </Swipeable>

 
             
                
            </div>



        </section>       
    )
}


const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    musics:selectMusicsData
})


export default connect(mapStateToProps)(PlayingNow);