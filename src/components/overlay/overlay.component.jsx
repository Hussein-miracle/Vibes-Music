import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";


import {selectBgMode , selectMenuDisplay} from "../../redux/user/user.selectors";


import "./overlay.styles.scss";

const Overlay = ({light,show}) => {
  return (
    <div className="overlay"
    style={{
        backgroundColor: light ? "hsla(220, 65%, 9%, 0.61)" : "hsla(227, 47%, 96%, 0.62)",
        visibility:show ? "visible" : "hidden"
    }}>
 
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    light:selectBgMode,
    show:selectMenuDisplay
})


export default connect(mapStateToProps)(Overlay);