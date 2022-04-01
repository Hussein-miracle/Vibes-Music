import React,{useState,useEffect,useRef} from "react";
import {connect} from "react-redux";
import {motion} from "framer-motion";
import {Swipeable} from "react-swipeable"
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./playing-now.styles.scss";
import svgCont from "../../assets/icons/sprite.svg";
import SliderCard from "../../components/slider-card/slider-card.component";
import PlayingNowPlayer from "../../components/playing-now-player/playing-now-player";

// import {selectMusicsData} from "../../redux/musics/musics.selectors";
import {selectBgMode , selectAllMusics } from "../../redux/user/user.selectors";

const PlayingNow = ({light,musics}) => {
    const [sliderPosition,setSliderPosition] = useState(0);
    const [progress , setProgress] = useState("0%")
    const audioTag = useRef(null); 

    const setCurrentProgress = (e) =>{
    const {duration , currentTime} = e.target;
    let percent = `${(currentTime / duration) * 100}%`;
    setProgress(percent)

  }


  const seekProgress = (e) =>{
    console.log(e)
    let positionClicked = e.clientX 
    let totalWidth = e.target.clientWidth;
    let seekTo = (positionClicked / totalWidth) ;
    audioTag.current.currentTime = seekTo * audioTag.current?.duration;
    setProgress(`${seekTo * 100}`)


  }



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


                <Swipeable 
                // ref={slider} 
                 className="playing-now__content--cards-container" whileTap={{
                    cursor:"grabbing"
                }}
               
                preventDefaultTouchmoveEvent={false}
                onSwiped={handleSwiped}>
                 
                    
                        <Swiper
        className="slider__inner" 
        onSlideChange={(e) => console.log(e.dir)}
      onSwiper={(swiper) => console.log(swiper)}

      effect={'coverflow'}
    initialSlide={0}

    grabCursor={true}
    centeredSlides={true}
    // scale={1.8}
    coverflowEffect = {{
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 1 ,
        slideShadows: true,
        scale:3
    }
  }
  breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.75,
            spaceBetween: 10
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1.75,
            spaceBetween: 18
          }
        }}
    >
      
       {
                            musics.map(({id,imgURL,title,artists},index) =>
                            <SwiperSlide key={id}>
                                <SliderCard 
                                id={id}
                                index={index}
                                position={sliderPosition}
                                title={title} 
                                addartists
                                artists={artists} 
                                light={light} 
                                imgURL={imgURL} />
                                
                                </SwiperSlide>
                                )
                        }

    </Swiper>

            
                </Swipeable>
                <PlayingNowPlayer/>

            </div>

            


        </section>       
    )
}


const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    musics:selectAllMusics
})


export default connect(mapStateToProps)(PlayingNow);