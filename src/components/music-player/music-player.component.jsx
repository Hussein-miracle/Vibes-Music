import React,{useState,useRef,useEffect} from 'react';
import {connect} from "react-redux";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";


import {selectBgMode,selectCurrentMusic,selectPlayState} from "../../redux/user/user.selectors";

import { playMusic,pauseMusic , playNextMusic , playPreviousMusic,setMusicDetails } from '../../redux/user/user.actions';
import {getMusicIndex} from '../../redux/user/user.utils';
import svgContainer from "../../assets/icons/sprite.svg";
import "./music-player.styles.scss";



const MusicPlayer = ({light,currentMusic,play,playMusic,pauseMusic,playPrevious,playNext,setMusicDetails}) => {
  const {id,imgURL,srcURL,title,artists} = currentMusic;
  const [progress , setProgress] = useState("0%");
  const [musicUpdate,setMusicUpdate] = useState({
    time:0,
    dur:0 ,
    index: getMusicIndex(id)
  })


  const audioTag = useRef(null); 

  useEffect(()=>{
    if(audioTag && audioTag?.current?.isConnected){
      setProgress("0%");
      if(play){
        audioTag.current.play();
      }else{
        audioTag.current.pause();
      }
    }
  },[currentMusic,play])


  const handleUpdatePlayingNowPlayer = () => {
    setMusicDetails(musicUpdate);
  }

  const setCurrentProgress = (e) =>{
    const {duration , currentTime} = e.target;
    let percent = `${(currentTime / duration) * 100}%`;
    setProgress(percent);
    setMusicUpdate({
        time:currentTime,
        dur:duration,
        index:getMusicIndex(id)
    })


  }


  const seekProgress = (e) =>{
    // console.log(e)
    let positionClicked = e.clientX 
    let totalWidth = e.target.clientWidth;
    let seekTo = (positionClicked / totalWidth) ;
    audioTag.current.currentTime = seekTo * audioTag.current?.duration;
    setProgress(`${seekTo * 100}`);



  }

  const handleMusicEnded = (e) => {
    // console.log(e);
    setProgress("0%");
    pauseMusic();
    playNext(id);
    
  }



  const handleDrag = (e) => {
    // console.log(e)
    let positionClicked = e.clientX 
    let totalWidth = e.target.clientWidth;
    let seekTo = (positionClicked / totalWidth) ;
    audioTag.current.currentTime = seekTo * audioTag.current?.duration;
    setProgress(`${seekTo * 100}`)
  }
  const handleDragEnd = (e) => {
    let positionClicked = e.clientX 
    let totalWidth = e.target.clientWidth;
    let seekTo = (positionClicked / totalWidth) ;
    audioTag.current.currentTime = seekTo * audioTag.current?.duration;
    setProgress(`${seekTo * 100}`)
    // console.log(e)
  }

  
const renderPause = () => {
    let pauseBtn = null;
    if(light){
      pauseBtn = <svg 
      onClick={() => pauseMusic()}
      className="music-control__play icon-music-controls icon-white-2" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.58792 0.645264V14.9963M7.9852 0.645264V14.9963" stroke="#091127" strokeWidth="2.00263"/>
            </svg>
    }else{
      pauseBtn = <svg 
      onClick={() => pauseMusic()}
      className="music-control__play icon-music-controls icon-white-2" width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.29613 0.0691986V24.5196M12.2961 0.0691986V24.5196" stroke="#EAF0FF" strokeWidth="3"/>
                </svg>
    }

    return pauseBtn;
}


const renderPlay = () => {
      let playBtn = null;
     if(light){
      playBtn = <svg 
      onClick={() => playMusic()}
      className="music-control__play icon-music-controls icon-white-2" style={{
        fill:"var(--dark)"
      }}>
                        <use href={`${svgContainer}#icon-play3`}></use>
                      </svg>;
     }else{
      playBtn = <svg 
      onClick={() => playMusic()}
       className="music-control__play icon-music-controls icon-white-2" style={{
        fill:"var(--light)"
      }}>
                        <use href={`${svgContainer}#icon-play3`}></use>
                      </svg>;
     }
  
     return playBtn;
}


    return (
        <div className="music-player" 
         style={{
           backgroundColor:light ? "var(--light)" : "var(--dark)"
         }}
         >

            <div className="progress" 
            onClick={seekProgress}
            style={{
           backgroundColor:light ? "var(--light2-l)" : "var(--light2-d)"
         }} 
            >
              <div className="progress-bar"
              // onDrag={handleDrag}
              // onDragEnd={handleDragEnd}
                  style={{
              backgroundColor:light ? "var(--dark)" : "var(--light)",
              filter:light ? "brightness(0)" : "brightness(0.9)",
              width: progress
              //  width: 
            }} >

          </div>
            </div>

              <audio src={`${srcURL}`} ref={audioTag} preload="metadata" id={id.toString()} 
              onTimeUpdate={setCurrentProgress} 
              onEnded={handleMusicEnded} 
              />

            <div className="main-controls">
                <div className="music-player__content">
                  <Link to="/current-song">
                    <img
                    onClick={handleUpdatePlayingNowPlayer}
                      src={`${imgURL}`}
                      alt={`${title}`}
                      className="music-player__content-img"
                    />
                  </Link>

                  <div className="music-player__content--details"
                  onClick={handleUpdatePlayingNowPlayer}>
                    <Link to="/current-song">
                    <h3 className="music-player__content--title"
                    style={{
           color:light ? "var(--dark)" : "var(--light)"
         }}
                    >{title}</h3>

                    <h4 className="music-player__content--artist-name"  
                    style={{
           color:light ? "var(--text-w-l)" : "var(--text-w-d)"
         }}>
                      {artists}
                    </h4>
                    </Link>
                  </div>
                </div>

                <div className="music-player__control">
                  
                    <button className="music-btn__backward">
                      {
                        light ?    
                        <svg 
                        onClick={()=> playPrevious(currentMusic.id)}
                        className="music-control__backward icon-music-controls icon-white-2"
                        width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0172 15.7536L17.4363 16.5692C17.7416 16.7866 18.1428 16.8153 18.476 16.6436C18.8091 16.4718 19.0185 16.1284 19.0185 15.7536H18.0172ZM18.0172 1.88784H19.0185C19.0185 1.51302 18.8091 1.16958 18.476 0.99783C18.1428 0.826082 17.7416 0.854788 17.4363 1.07222L18.0172 1.88784ZM8.28216 8.82071L7.70131 8.00509C7.43749 8.19297 7.28084 8.49684 7.28084 8.82071C7.28084 9.14459 7.43749 9.44846 7.70131 9.63633L8.28216 8.82071ZM19.0185 15.7536V1.88784H17.0158V15.7536H19.0185ZM17.4363 1.07222L7.70131 8.00509L8.86301 9.63633L18.598 2.70346L17.4363 1.07222ZM7.70131 9.63633L17.4363 16.5692L18.598 14.938L8.86301 8.00509L7.70131 9.63633ZM2.32991 16.4469V1.19456H0.327278V16.4469H2.32991Z" fill="#091127"/>
</svg>

                        :
                        <svg 
                        onClick={()=> playPrevious(currentMusic.id)}
                        className="music-control__backward icon-music-controls icon-white-2"
                        width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.028 22.859L24.1082 24.044C24.5606 24.3951 25.1734 24.458 25.6876 24.2062C26.2019 23.9543 26.528 23.4317 26.528 22.859H25.028ZM25.028 1.72917H26.528C26.528 1.15653 26.2019 0.633862 25.6876 0.382021C25.1734 0.130178 24.5606 0.193115 24.1082 0.544233L25.028 1.72917ZM11.4168 12.2941L10.4971 11.1092C10.131 11.3933 9.91683 11.8307 9.91683 12.2941C9.91683 12.7575 10.131 13.1949 10.4971 13.479L11.4168 12.2941ZM26.528 22.859V1.72917H23.528V22.859H26.528ZM24.1082 0.544233L10.4971 11.1092L12.3366 13.479L25.9477 2.9141L24.1082 0.544233ZM10.4971 13.479L24.1082 24.044L25.9477 21.6741L12.3366 11.1092L10.4971 13.479ZM3.19461 23.9155V0.672676H0.194607V23.9155H3.19461Z" fill="#EAF0FF"/>
</svg>

                      }
                    </button>

                    <button className="music-btn__play">
                      { play ? renderPause() : renderPlay()  }                      
                    </button>

                    <button className="music-btn__forward">

                      {
                        light ?
<svg 
onClick={()=> playNext(currentMusic.id)}
className="music-control__forward icon-music-controls icon-white-2" 
width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.55597 1.8879L2.13682 1.07228C1.83151 0.854842 1.43032 0.826137 1.09716 0.997885C0.763997 1.16963 0.554655 1.51307 0.554655 1.8879H1.55597ZM1.55597 15.7536H0.554655C0.554655 16.1285 0.763997 16.4719 1.09716 16.6436C1.43032 16.8154 1.83151 16.7867 2.13682 16.5693L1.55597 15.7536ZM11.291 8.82077L11.8718 9.63639C12.1356 9.44851 12.2923 9.14464 12.2923 8.82077C12.2923 8.49689 12.1356 8.19302 11.8718 8.00515L11.291 8.82077ZM0.554655 1.8879V15.7536H2.55728V1.8879H0.554655ZM2.13682 16.5693L11.8718 9.63639L10.7101 8.00515L0.975116 14.938L2.13682 16.5693ZM11.8718 8.00515L2.13682 1.07228L0.975116 2.70352L10.7101 9.63639L11.8718 8.00515ZM17.2432 1.19461V16.4469H19.2459V1.19461H17.2432Z" fill="#091127"/>
</svg>

:  <svg 
onClick={()=> playNext(currentMusic.id)}
className="music-control__forward icon-music-controls icon-white-2"
width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.56438 1.72918L2.48412 0.544244C2.03177 0.193124 1.41897 0.130187 0.904688 0.382027C0.390405 0.633868 0.0643768 1.15654 0.0643768 1.72918H1.56438ZM1.56438 22.859H0.0643768C0.0643768 23.4317 0.390405 23.9543 0.904688 24.2062C1.41897 24.458 2.03177 24.3951 2.48412 24.044L1.56438 22.859ZM15.1754 12.2941L16.0952 13.479C16.4612 13.1949 16.6754 12.7575 16.6754 12.2941C16.6754 11.8307 16.4612 11.3933 16.0952 11.1092L15.1754 12.2941ZM0.0643768 1.72918V22.859H3.06438V1.72918H0.0643768ZM2.48412 24.044L16.0952 13.479L14.2557 11.1092L0.644629 21.6741L2.48412 24.044ZM16.0952 11.1092L2.48412 0.544244L0.644629 2.91411L14.2557 13.479L16.0952 11.1092ZM23.3976 0.672684V23.9155H26.3976V0.672684H23.3976Z" fill="#EAF0FF"/>
</svg>


                      }
                      

                    </button>
                  
                </div>
            </div>

          </div>
    )
}

const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    currentMusic:selectCurrentMusic,
    play:selectPlayState
})

const mapDispatchToProps = (dispatch) => ({
  playMusic: () => dispatch(playMusic()),
  pauseMusic: () => dispatch(pauseMusic()),
  playNext: (curMusicIndex) => dispatch(playNextMusic(curMusicIndex)),
  playPrevious: (curMusicIndex) => dispatch(playPreviousMusic(curMusicIndex)),
  setMusicDetails: (musicDet) => dispatch(setMusicDetails(musicDet)),
})

export default connect(mapStateToProps,mapDispatchToProps)(MusicPlayer);