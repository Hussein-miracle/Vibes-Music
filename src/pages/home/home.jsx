import React from 'react';
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect"
import { selectBgMode } from "../../redux/user/user.selectors";

import SearchInput from "../../components/search-input/search-input.component";
import Recommended from '../../components/recommended/recommended.component';
import Playlist from '../../components/playlist/playlist.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import MusicPlayer from "../../components/music-player/music-player.component";
import MobileNav from '../../components/mobile-nav/mobile-nav.component';
import Overlay from "../../components/overlay/overlay.component";

import "./home.styles.scss";

import { openMenu} from '../../redux/user/user.actions';


const Home = ({light,openMobileNav}) => {

    return (
        <div className="home"
        style={{
            backgroundColor:  light ?  "var(--light)" : "var(--dark)"
        }}
        >
             <Overlay/>
             <MobileNav/>
            <header className="home__header">
                <div className="home__menu">

                    <button className="home__menu--btn" 
                        onClick={() => openMobileNav()}
                        >
                        { light ? 
                        <svg className="home__menu--icon" width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1.60889H24.0199" stroke="#091127" strokeWidth="2"/>
                                <path d="M0 10.1012L24.0198 10.1012" stroke="#091127" strokeWidth="2"/>
                        </svg>
                        :

                        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.55798H24.0199" stroke="#EAF0FF" strokeWidth="2"/>
                            <path d="M0 10.0503L24.0198 10.0503" stroke="#EAF0FF" strokeWidth="2"/>
                        </svg>       }  

                </button>

                </div>
                <SearchInput />
            </header> 

            <section className="home__content">
               
                <section className="home__content--left">
                    <Sidebar/>
                </section>

                <section className="home__content--right">
                    <Recommended/>
                    <Playlist/>
                    <div style={{
                        marginTop:"4rem"
                    }}></div>
                    
                </section>

                 <MusicPlayer/>
            </section>
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    light:selectBgMode
})
const mapDispatchToProps = dispatch => ({
    openMobileNav: () => dispatch(openMenu()) 
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);