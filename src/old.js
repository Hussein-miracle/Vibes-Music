import React from 'react'

const old = () => {
  return (
    <div>
        <nav class="nav">
          <div class="buttons">
            <button class="btn-1">
              <svg class="icon-white icon-size-2" id="menu__close">
                <use xlink:href="./icons/sprite.svg#icon-arrow-left"></use>
              </svg>
            </button>

            <button id="toggle-btn" class="btn-2">
              <svg class="icon-white icon-size-2" id="toggle">
                <use
                  xlink:href="./icons/sprite.svg#icon-moon
              "
                ></use>
              </svg>
            </button>
          </div>

          <img class="nav__user" src="./images/sukuna.jpg" alt="User image" />

          <ul class="nav__items">
            <li class="nav__item">
              <a class="nav__links" href="#">
                <svg
                  class="icon-white icon-size-1 link__icon liked-songs__icon"
                >
                  <use xlink:href="./icons/sprite.svg#icon-user"></use>
                </svg>
                <p>Profile</p></a
              >
            </li>
            <li class="nav__item">
              <a
                class="nav__links liked-songs"
                href="./likedSongs/likedSongs.html"
              >
                <svg
                  class="icon-white icon-size-1 link__icon liked-songs__icon"
                >
                  <use xlink:href="./icons/sprite.svg#icon-heart"></use>
                </svg>

                <p>Likes</p>
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__links" href="#">
                <svg class="icon-white icon-size-1 link__icon">
                  <use
                    xlink:href="./icons/sprite.svg#icon-chat-bubble-dots"
                  ></use>
                </svg>
                <p>Contact</p></a
              >
            </li>

            <li class="nav__item">
              <a class="nav__links faq" href="#">
                <svg class="icon-white icon-size-1 link__icon">
                  <use xlink:href="./icons/sprite.svg#icon-bulb"></use>
                </svg>
                <p>FAQs</p>
              </a>
            </li>

            <li class="nav__item">
              <a class="nav__links" href="#">
                <svg class="icon-white icon-size-1 link__icon settings__icon">
                  <use xlink:href="./icons/sprite.svg#icon-cog"></use>
                </svg>

                <p>Settings</p>
              </a>
            </li>
          </ul>
        </nav>
        <audio src="./music/Love_Nwantinti.mp3" id="music"></audio>

        
        <div class="wrapper">

          <div class="wrapper-homepage">
            <header class="header__topbar">
              <div class="menu">
                <svg class="menu__icon">
                  <use xlink:href="./icons/sprite.svg#icon-menu"></use>
                </svg>
              </div>
  
              <form class="search" id="search">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search music title or name"
                />
  
                <label for="search">
                  <button>
                    <svg class="search__icon">
                      <use xlink:href="./icons/sprite.svg#icon-search"></use>
                    </svg>
                  </button>
                </label>
              </form>
            </header> 
  
            <section class="content">
              <div class="recommended">
                <h2 class="content__header">Recommended for you</h2>
  
                <div class="recommended__cards cards__container">
                  <div class="recommended__card-1 recommended-song  mg-rt">
                    <img
                      src="./images/Peru_Remix.jpg"
                      alt="Peru_Remix recommended"
                      class="recommended__card--img" data-index="1"
                    />
                    <h3 class="recommended__card--name">Peru_Remix</h3>
                    <h4 class="recommended__card--artist-name">Fire-DML ft Ed-Sheeran</h4>
                  </div>
  
                  <div class="recommended__card-2 recommended-song  mg-rt">
                    <img
                      src="./images/Mood.jpg"
                      alt="Mood by 24kGoldin and ian-dior"
                      class="recommended__card--img" data-index="8"
                      
                    />
                    <h3 class="recommended__card--name">Mood</h3>
                    <h4 class="recommended__card--artist-name">24kGoldn-ft.-Iann-Dior</h4>
                  </div>


                  <div class="recommended__card-3 recommended-song  mg-rt">
                    <img
                      src="./images/Love_Nwantinti.jpg"
                      alt="Ckay Love_Nwantinti"
                      class="recommended__card--img" data-index="0"
                    />
                    <h3 class="recommended__card--name">Love_Nwantinti</h3>
                    <h4 class="recommended__card--artist-name">Ckay</h4>
                  </div>
  
                  <div class="recommended__card-4 recommended-song  mg-rt">
                    <img
                      src="./images/Young_Dumb_Broke.jpg"
                      alt="Young_Dumb_Broke Khalid"
                      class="recommended__card--img" data-index="3"
                    />
                    <h3 class="recommended__card--name">Young_Dumb_Broke</h3>
                    <h4 class="recommended__card--artist-name">Khalid</h4>
                  </div>
                  


                </div>
              </div>
  
              <div class="playlist">
                <h2 class="content__header">My playlist</h2>
  
                <div class="playlist__cards cards__container">
                  <div class="playlist__card playlist-song mg-rt">
                    <img
                      src="./images/Habibi.jpg"
                      alt="Ricky Rich FT ARAM Mafia"
                      class="playlist__card--img" data-index="6"
                    />
                    <h3 class="playlist__card--name">Habibi</h3>
                  </div>
  
                  <div class="playlist__card playlist-song mg-rt">
                    <img
                      src="./images/Industry-Baby.jpg"
                      alt="Industry-Baby by LIL-NAS-x"
                      class="playlist__card--img" data-index="5"
                    />
                    <h3 class="playlist__card--name">Industry-Baby</h3>
                  </div>
                  <div class="playlist__card playlist-song mg-rt">
                    <img
                      src="./images/Baby-Riddim.jpg"
                      alt="Baby-Riddim by FAVE"
                      class="playlist__card--img" data-index="4"
                    />
                    <h3 class="playlist__card--name">Baby-Riddim</h3>
                  </div>
                  

                  <div class="playlist__card playlist-song mg-rt">
                    <img
                      src="./images/Montero-Call-Me-By-Your-Name.jpg"
                      alt="Montero-Call-Me-By-Your-Name"
                      class="playlist__card--img" data-index="7"
                    />
                    <h3 class="playlist__card--name">Montero-Call-Me-By-Your-Name</h3>
                  </div>
                  <div class="playlist__card playlist-song mg-rt">
                    <img
                      src="./images/Feeling.jpg"
                      alt="Feeling buju"
                      class="playlist__card--img" data-index="2"
                    />
                    <h3 class="playlist__card--name">Feeling</h3>
                  </div>
                </div>
              </div>

            </section>

            

          </div>
          

          

          <section class="music-player">
            <div class="progress">
              <div class="progress-bar"></div>
            </div>

            <div class="main-controls">
                <div class="music-player__content">
                  <a href="#">
                    <img
                      src="./images/Love_Nwantinti.jpg"
                      alt="Ckay-Love_Nwantinti"
                      class="music-player__content-img"
                    />
                  </a>

                  <div class="music-player__content--details">
                    <h3 class="music-player__content--title">Love_Nwantinti</h3>

                    <h4 class="music-player__content--artist-name dim-text">
                      Ckay
                    </h4>
                  </div>
                </div>

                <div class="music-player__control">
                  
                    <button class="music-btn__backward">
                      <svg
                        class="music-control__backward icon-music-controls icon-white-2"
                      >
                        <use xlink:href="./icons/sprite.svg#icon-previous2"></use>
                      </svg>
                    </button>

                    <button class="music-btn__play">
                      <svg class="music-control__play icon-music-controls icon-white-2">
                        <use xlink:href="./icons/sprite.svg#icon-play3"></use>
                      </svg>
                    </button>

                    <button class="music-btn__forward">
                      <svg
                        class="music-control__forward icon-music-controls icon-white-2"
                      >
                        <use xlink:href="./icons/sprite.svg#icon-next2"></use>
                      </svg>
                    </button>
                  
                </div>
            </div>

          </section>

        </div></div>
  )
}

export default old