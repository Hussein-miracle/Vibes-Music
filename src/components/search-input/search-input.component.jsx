import React,{useState} from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectBgMode} from "../../redux/user/user.selectors";

import "./search-input.styles.scss"



const SearchInput = ({light}) => {
    const [expand,setExpand] = useState(false);


    const handleClick = (e) => {
        setExpand((prevState) => {
            return !prevState
        })
    }
    return (
        <div className="search" id="search">
            
                    <input
                    style={{
                        width: expand ? "65%" : "0%",
                        opacity: expand ? 1 : 0,
                        color: light ?   "#1F1D36"  : "#fff",
                        // backgroundColor: light ? "#091127" : "#EAF0F" 
                    }}
                    type="text"
                    className="search__input"
                    id="search-input"
                    placeholder="Search music title or name"
                    />
    
                    
            <button className="search__btn" 
            onClick={handleClick}
            >
                
<svg width="20" height="21" viewBox="0 0 20 21" fill="none" 
                className="search__btn--icon" 
                xmlns="http://www.w3.org/2000/svg">
        <path d="M19 19.8041L13.8571 14.6613M8.71429 17.2327C4.4538 17.2327 1 13.7789 1 9.51842C1 5.25794 4.4538 1.80414 8.71429 1.80414C12.9748 1.80414 16.4286 5.25794 16.4286 9.51842C16.4286 13.7789 12.9748 17.2327 8.71429 17.2327Z" stroke={light ?  "var(--dark)" : "var(--light)" } strokeWidth="2"/>
                
                
</svg> 


            </button>
                    
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    light:selectBgMode
})


export default connect(mapStateToProps)(SearchInput);