import React,{Suspense,lazy} from "react";
import {Routes , Route,Navigate} from "react-router-dom"

import './App.css';
import Spinner from "./components/spinner/spinner";

import MusicPlayer from "./components/music-player/music-player.component";
import Home from "./pages/home/home";
import LikedSongs from "./pages/liked-songs/liked-songs";
import PlayingNow from "./pages/playing-now/playing-now";
import ContactUs from "./pages/contact-us/contact-us";


// const Home = lazy(()=> import("./pages/home/home"));
// const  LikedSongs  = lazy(()=> import("./pages/liked-songs/liked-songs"));
// const PlayingNow = lazy(()=> import("./pages/playing-now/playing-now"));
// const ContactUs = lazy(()=> import("./pages/contact-us/contact-us"));
// const Music = lazy(()=> import("./pages/contact-us/contact-us"));
// import MusicPlayer from "./components/music-player/music-player.component";

function App() {
  return (
    <div className="App"> 
    {/* <Suspense fallback={<Spinner/>}> */}
        <Routes>
          {/* <Route path="/"  element={<Navigate to="/home" />} >
        
            <MusicPlayer/>
          </Route> */}
          <Route path="/home"  element={<Home/>} />
          <Route path="/liked-songs" element={<LikedSongs/>} />
          
          <Route path="/current-song" element={<PlayingNow/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes> 
    {/* </Suspense> */}
    </div>
  );
}

export default App;
