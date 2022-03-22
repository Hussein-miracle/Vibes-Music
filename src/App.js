import React from "react";
import {Routes , Route} from "react-router-dom"

import './App.css';


import Home from "./pages/home/home";
import Favourites from "./pages/favourites/favourites";
import PlayingNow from "./pages/playing-now/playing-now";
import ContactUs from "./pages/contact-us/contact-us";

function App() {
  return (
    <div className="App"> 

        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/liked-songs" element={<Favourites/>} />
          <Route path="/current-song" element={<PlayingNow/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes> 
    
    </div>
  );
}

export default App;
