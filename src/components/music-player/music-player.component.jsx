import React from 'react';


import svgContainer from "../../assets/icons/sprite.svg";

const MusicPlayer = () => {
    return (
        <div className="music-player">
            <div className="progress">
              <div className="progress-bar"></div>
            </div>

            <div className="main-controls">
                <div className="music-player__content">
                  <a href="#">
                    <img
                      src="./images/Love_Nwantinti.jpg"
                      alt="Ckay-Love_Nwantinti"
                      className="music-player__content-img"
                    />
                  </a>

                  <div className="music-player__content--details">
                    <h3 className="music-player__content--title">Love_Nwantinti</h3>

                    <h4 className="music-player__content--artist-name dim-text">
                      Ckay
                    </h4>
                  </div>
                </div>

                <div className="music-player__control">
                  
                    <button className="music-btn__backward">
                      <svg
                        className="music-control__backward icon-music-controls icon-white-2"
                      >
                        <use href={`${svgContainer}#icon-previous2`}></use>
                      </svg>
                    </button>

                    <button className="music-btn__play">
                      <svg className="music-control__play icon-music-controls icon-white-2">
                        <use href={`${svgContainer}#icon-play3`}></use>
                      </svg>
                    </button>

                    <button className="music-btn__forward">
                      <svg
                        className="music-control__forward icon-music-controls icon-white-2"
                      >
                        <use href={`${svgContainer}#icon-next2`}></use>
                      </svg>
                    </button>
                  
                </div>
            </div>

          </div>
    )
}

export default MusicPlayer;