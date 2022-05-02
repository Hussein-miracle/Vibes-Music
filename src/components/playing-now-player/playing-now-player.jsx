import React,{useState,useRef,useEffect} from "react";
import {connect,useSelector,useDispatch} from "react-redux";
import {motion} from "framer-motion";
import {createStructuredSelector} from "reselect";
import svgContainer from "../../assets/icons/sprite.svg"; 
import "./playing-now-player.styles.scss";

//svg buttons
import {ReactComponent as PreviousDarkBtn} from "../../assets/icons/p-n-previous-btn-dark.svg";
import {ReactComponent as PreviousLightBtn} from "../../assets/icons/p-n-previous-btn-light.svg";
import {ReactComponent as PauseDarkBtn} from "../../assets/icons/p-n-pause-btn-dark.svg";
import {ReactComponent as PauseLightBtn} from "../../assets/icons/p-n-pause-btn-light.svg";
import {ReactComponent as NextDarkBtn} from "../../assets/icons/p-n-next-btn-dark.svg";
import {ReactComponent as NextLightBtn} from "../../assets/icons/p-n-next-btn-light.svg";
import {ReactComponent as SpeakerBtn} from "../../assets/icons/speaker.svg";
import {ReactComponent as ShuffleBtn} from "../../assets/icons/shuffle.svg";
import {ReactComponent as RepeatBtn} from "../../assets/icons/repeat.svg";



import {selectBgMode,selectCurrentMusic,selectPlayState,selectAllMusics} from "../../redux/user/user.selectors";

import { playMusic,pauseMusic , playNextMusic , playPreviousMusic ,getRandomMusic ,repeatCurrentMusic} from '../../redux/user/user.actions';


const PlayingNowPlayer = ({light,currentMusic,play,playMusic,pauseMusic,playPrevious,playNext,musics,handleClickedRight ,handleClickedLeft}) => {
    const  dispatch = useDispatch();
    const {id,srcURL} = currentMusic;
    const [repeat,setRepeat] = useState(false)
  const [progress , setProgress] = useState("0%")
  const [curTime , setCurTime] = useState({minutes:0,seconds:0});
  const [duratio, setDuratio] = useState({minutes:0,seconds:0});
  const [muted,setMuted] = useState(false)
  const musicDetails = useSelector((state)=>state.user.musicPlayingDetails)
  

  const audio = useRef(null); 


  useEffect(()=>{

    if(musicDetails.time > 0 && musicDetails.dur > 0 && !!audio){
        audio.current.currentTime = musicDetails.time;

        if(play){
            audio.current.play();
            playMusic();
        }

        if(!play){
            audio.current.pause();
            pauseMusic();
        }
        
    }else if(musicDetails.time === 0 && musicDetails.dur === 0 && !!audio){
        audio.current.src = srcURL;
    }

    
    // if(audio?.current?.currenTime && musicDetails.time){
    //       audio.current.currentTime = musicDetails.time;
    //     //   setDuratio(handleTime(audio.current.duration));
    //     //   setCurTime(handleTime(audio.current.currentTime));
    //     //   playMusic()
    //   }

    //   if(!play  && audio?.current?.currentTime){
    //         audio.current.play();
    //         playMusic();
    //     }

    

  },[musicDetails])


  useEffect(()=>{
    if(audio && audio?.current?.isConnected){
      if(play){
        audio.current.play();
      }else{
        audio.current.pause();
      }
    }
  },[currentMusic,play])
//   useEffect(()=> {

//       if(audio && !isNaN(audio?.current?.currentTime)){
//           setDuratio(handleTime(audio.current.duration));
//           setCurTime(handleTime(audio.current.currentTime));
//       }

//   },[audio?.current?.currentTime])





  const handleTime = (timeInSecs) => {
        let mins =   Math.floor(timeInSecs / 60) < 10 ? `0${ Math.floor(timeInSecs / 60)}` : `${ Math.floor(timeInSecs / 60)}`;
        let secs =   Math.floor(timeInSecs % 60) < 10 ?  `0${Math.floor(timeInSecs % 60)}` : `${Math.floor(timeInSecs % 60)}` ;

    return    {minutes:mins,seconds:secs};
  }



  const setCurrentProgress = (e) =>{
    const {duration , currentTime} = e.target;
    let percent = `${(currentTime / duration) * 100}%`;
    setCurTime(handleTime(currentTime))
    setDuratio(handleTime(duration));
    setProgress(percent)


  }

  const seekProgress = (e) =>{
    console.log(e)
    let positionClicked = e.clientX 
    let totalWidth = e.target.clientWidth;
    let seekTo = (positionClicked / totalWidth) ;
    audio.current.currentTime = seekTo * audio.current?.duration;
    setProgress(`${seekTo * 100}`);



  }

  const handleRepeat = () => {
    setRepeat(!repeat)
    dispatch(repeatCurrentMusic(currentMusic.id))
  }


  const handleMute = () => {
      setMuted(!muted);

      if(audio && !muted){
          audio.current.volume = 0;
      }else{
          audio.current.volume = 1;
      }
      
  }

    const handleNext = () => {
        playNext(id);
    }

    const handlePrevious = () =>{
        playPrevious(id);
    }

  const renderPlay = () => {
      let playBtn = null;
     if(light){
      playBtn = <svg 
      onClick={playMusic}
      className="music-control__play icon-music-controls icon-white-2" style={{
        fill:"var(--dark)"
      }}>
                        <use href={`${svgContainer}#icon-play3`}></use>
                      </svg>;
     }else{
      playBtn = <svg 
      onClick={playMusic}
       className="music-control__play icon-music-controls icon-white-2" style={{
        fill:"var(--light)"
      }}>
                        <use href={`${svgContainer}#icon-play3`}></use>
                      </svg>;
     }
  
     return playBtn;
    }

    const renderPause = () => light ?  <PauseDarkBtn onClick={pauseMusic}/>:<PauseLightBtn onClick={pauseMusic}/> ;


    return (
        <div className="playing-now-player"
        style={{
           backgroundColor:light ? "var(--light)" : "var(--dark)"
         }} 
         >

<audio src={`${srcURL}`} ref={audio} preload="metadata" id={id.toString()} 
              onTimeUpdate={setCurrentProgress} 
              onEnded={()=> dispatch(playNextMusic(id))}
              />
        <div className="playing-now-player__btns-1">
            <button>
                <SpeakerBtn onClick={handleMute} title={`${muted ? "Click to Unmute" : "Click to Mute"}`}/>
            </button>

<div className="btns">


    
    
    <button onClick={handleClickedLeft}>{
            light ? <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8927 7.24024L8.2927 0.84024M1.8927 7.24024L8.2927 13.6402M1.8927 7.24024H21.8927" stroke="#091127" strokeWidth="2"/>
</svg>  :

<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29077 7.38935L8.69077 0.989349M2.29077 7.38935L8.69077 13.7893M2.29077 7.38935H22.2908" stroke="#EAF0FF" strokeWidth="2"/>
</svg>

          }</button>


    <button onClick={handleClickedRight} className="right">{
            light ? <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8927 7.24024L8.2927 0.84024M1.8927 7.24024L8.2927 13.6402M1.8927 7.24024H21.8927" stroke="#091127" strokeWidth="2"/>
</svg>  :

<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29077 7.38935L8.69077 0.989349M2.29077 7.38935L8.69077 13.7893M2.29077 7.38935H22.2908" stroke="#EAF0FF" strokeWidth="2"/>
</svg>

          }</button>
</div>

            <div className="playing-now-player__btns-1--left">

                <button>
                    <ShuffleBtn onClick={()=> dispatch(getRandomMusic(musics))}/>
                </button>

                <button className="repeat-btn" onClick={handleRepeat}>
                    <RepeatBtn />
                    <span style={{
                        opacity: repeat ? 1 : 0
                    }}> 1</span>
                    
                </button>

            </div>
            
        </div>


        <section className="progress-container">

            <div className="progress-timestamps" style={{
                color:light ? "var(--dark)" : "#fff"
            }}>
                
                <span className="current-time">{`${curTime.minutes && (!isNaN(curTime.minutes)) ? curTime.minutes : "00"}:${curTime.seconds && (!isNaN(curTime.seconds))  ? curTime.seconds : "00"}`}</span>
                <span className="duration">{`${duratio.minutes && (!isNaN(duratio.minutes)) ? duratio.minutes : "00"}:${duratio.seconds && (!isNaN(duratio.seconds)) ? duratio.seconds : "00"}`}</span>
            </div>

            <div className="playing-now-player__progress"
            onClick={seekProgress}
            style={{
                backgroundColor:light ? "var(--light2-l)" : "var(--light2-d)"
            }}
            >
                <div className="playing-now-player__progress--bar" 
                style={{
                backgroundColor:light ? "var(--dark)" : "var(--light)",
                filter:light ? "brightness(0)" : "brightness(0.9)",
                   width: progress
         }} >

                </div>

            </div>
        </section>


        <div className="playing-now-player__btns-2">
            <button>
                {light ?
                <PreviousDarkBtn 
                onClick={handlePrevious}/>:<PreviousLightBtn
                onClick={handlePrevious}/> }
            </button>
            <button>
                { play ? renderPause() : renderPlay()  }
            </button>
            <button>
                {light ? <NextDarkBtn onClick={handleNext}/>:<NextLightBtn onClick={handleNext}/>}
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
  playPrevious: (curMusicIndex) => dispatch(playPreviousMusic(curMusicIndex))
})

export default connect(mapStateToProps,mapDispatchToProps)(PlayingNowPlayer);