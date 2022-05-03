import React,{useState,useEffect} from "react";
import {connect,useSelector} from "react-redux";
import {motion} from "framer-motion";
import {Swipeable} from "react-swipeable"
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";


import "./playing-now.styles.scss";
import svgCont from "../../assets/icons/sprite.svg";
import SliderCard from "../../components/slider-card/slider-card.component";
import PlayingNowPlayer from "../../components/playing-now-player/playing-now-player";

import {selectBgMode , selectAllMusics ,selectCurrentMusic} from "../../redux/user/user.selectors";

const PlayingNow = ({light,musics,curMusic}) => {
    const musicIndex = useSelector((state) => state.user.musicPlayingDetails.index)
    const [sliderPosition,setSliderPosition] = useState(0);
   

    useEffect(() => {
        setSliderPosition(musicIndex);
    },[musicIndex])
 


  const  onLeftClick = () => {
            if(sliderPosition >  0){
                setSliderPosition(sliderPosition - 1)
                
            }
  }


  const onRightClick = () => {
          if(sliderPosition < musics.length - 1){
                setSliderPosition(sliderPosition + 1)
             
            } 
  }



    const handleSwiped = ({dir}) => {

        if(dir === "Right"){
          if(sliderPosition > 0){
             setSliderPosition(sliderPosition - 1)
            } 
            
        }

        if(dir === "Left"){
            if(sliderPosition < musics.length - 1){
             setSliderPosition(sliderPosition + 1);
            } 
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

                <Swipeable 
                 className="playing-now__content--cards-container" whileTap={{
                    cursor:"grabbing"
                }}
               
                preventDefaultTouchmoveEvent={false}
                onSwiped={handleSwiped}>



                <div className="row">
                    { musics.map ( ({imgURL,title,artists,id},index) => {
                        return  (
                            <SliderCard 
                            index={index}
                            key={id}
                            imgURL={imgURL}
                            title ={title}
                            artists={artists}
                            addartists
                            light={light}
                            position={sliderPosition}
                            id={id}
                            />
                        )
                    })

                    }
                </div>
                
      
                </Swipeable>



                <PlayingNowPlayer  setSliderPosition={setSliderPosition} handleClickedRight={onRightClick} handleClickedLeft={onLeftClick}/>

            </div>

        </section>       
    )
}


const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    musics:selectAllMusics,
    curMusic:selectCurrentMusic
})


export default connect(mapStateToProps)(PlayingNow);