import React,{useState} from 'react';

import SearchInput from "../../components/search-input/search-input.component";
import Recommended from '../../components/recommended/recommended.component';
import Playlist from '../../components/playlist/playlist.component';
import Sidebar from '../../components/sidebar/sidebar.component';
// import MusicPlayer from '../../components/music-player/music-player.component';

import svgContainer from "../../assets/icons/sprite.svg"


import "./home.styles.scss";


// console.log(data)

const Home = () => {
    const [light,setLight] = useState(false)
    return (
        <div className="home">
            <header className="home__header">
                <div className="home__menu">

                  {light ? <svg className="home__menu--icon" width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.60889H24.0199" stroke="#091127" strokeWidth="2"/>
                        <path d="M0 10.1012L24.0198 10.1012" stroke="#091127" strokeWidth="2"/>
                </svg>
                :

                                <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1.55798H24.0199" stroke="#EAF0FF" strokeWidth="2"/>
<path d="M0 10.0503L24.0198 10.0503" stroke="#EAF0FF" strokeWidth="2"/>
</svg>

            }  



                </div>
                <SearchInput/>
            </header> 

            <section className="home__content">
                <section className="home__content--left">
                    <Sidebar/>
                </section>
                <section className="home__content--right">
                    <Recommended/>
                    <Playlist/>
                </section>
                
            </section>
            
        </div>
    )
}

export default Home;