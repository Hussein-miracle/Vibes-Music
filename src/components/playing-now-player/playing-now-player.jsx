import React,{useState,useRef} from "react";
import {connect} from "react-redux";
import {motion} from "framer-motion";
import {createStructuredSelector} from "reselect";
import LikeButton from "../like-button/like-button";
import "./playing-now-player.styles.scss";

//svg buttons
import {ReactComponent as PreviousDarkBtn} from "../../assets/icons/p-n-previous-btn-dark.svg";
import {ReactComponent as PreviousLightBtn} from "../../assets/icons/p-n-previous-btn-light.svg";
import {ReactComponent as PlayDarkBtn} from "../../assets/icons/p-n-play-btn-dark.svg";
import {ReactComponent as PlayLightBtn} from "../../assets/icons/p-n-play-btn-light.svg";
import {ReactComponent as NextDarkBtn} from "../../assets/icons/p-n-next-btn-dark.svg";
import {ReactComponent as NextLightBtn} from "../../assets/icons/p-n-next-btn-light.svg";
import {ReactComponent as SpeakerBtn} from "../../assets/icons/speaker.svg";
import {ReactComponent as ShuffleBtn} from "../../assets/icons/shuffle.svg";
import {ReactComponent as RepeatBtn} from "../../assets/icons/repeat.svg";



import {selectBgMode,selectCurrentMusic,selectPlayState,selectAllMusics } from "../../redux/user/user.selectors";

import { playMusic,pauseMusic , playNextMusic , playPreviousMusic} from '../../redux/user/user.actions';


const PlayingNowPlayer = ({light,currentMusic,play,playMusic,pauseMusic,playPrevious,playNext}) => {
    const {id,imgURL,srcURL,title,artists} = currentMusic;
  const [progress , setProgress] = useState("0%")


  const audio = useRef(null); 
    return (
        <div className="playing-now-player"
        style={{
           backgroundColor:light ? "var(--light)" : "var(--dark)"
         }} 
         >

<audio src={`${srcURL}`} ref={audio} preload="metadata" id={id.toString()} 
            //   onTimeUpdate={setCurrentProgress} 
            //   onEnded={handleMusicEnded}
              />
        <div className="playing-now-player__btns-1">
            <button>
                <SpeakerBtn/>
            </button>
            <div className="playing-now-player__btns-1--left">

                <button>
                    <ShuffleBtn/>
                </button>

                <button className="repeat-btn">
                    <RepeatBtn/>
                    <span>1</span>
                </button>

            </div>
            
        </div>


        <section className="progress-container">

            <div className="progress-timestamps" style={{
                color:light ? "var(--dark)" : "#fff"
            }}>
                <span className="current-time">{`${"00:00"}`}</span>  
                <span className="duration">{`${"00:00"}`}</span>
            </div>

            <div className="playing-now-player__progress"
            style={{
                backgroundColor:light ? "var(--light2-l)" : "var(--light2-d)"
            }}
            >
                <div className="playing-now-player__progress--bar" 
                style={{
                backgroundColor:light ? "var(--dark)" : "var(--light)",
                filter:light ? "brightness(0)" : "brightness(0.9)",
                //    width: progress
         }} >

                </div>

            </div>
        </section>


        <div className="playing-now-player__btns-2">
            <button>
                {light ?<PreviousDarkBtn/>:<PreviousLightBtn/>}
            </button>
            <button>
                {light ? <PlayDarkBtn/>:<PlayLightBtn/>}
            </button>
            <button>
                {light ? <NextDarkBtn/>:<NextLightBtn/>}
            </button>
        </div>



</div>
    )
}

const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    musics:selectAllMusics,
    play:selectPlayState,
    currentMusic:selectCurrentMusic,
})

const mapDispatchToProps = (dispatch) => ({
  playMusic: () => dispatch(playMusic()),
  pauseMusic: () => dispatch(pauseMusic()),
  playNext: (curMusicIndex) => dispatch(playNextMusic(curMusicIndex)),
  playPrevious: (curMusicIndex) => dispatch(playPreviousMusic(curMusicIndex)),
})

export default connect(mapStateToProps,mapDispatchToProps)(PlayingNowPlayer);