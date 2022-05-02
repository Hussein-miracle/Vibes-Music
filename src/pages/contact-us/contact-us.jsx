import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectBgMode} from "../../redux/user/user.selectors";
import "./contact-us.styles.scss";


const ContactUs = ({light}) => {
    return (
        <div className="contact-us" style={{
            backgroundColor:  light ?  "var(--light)" : "var(--dark)"
        }}>
            Contact Us
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    light:selectBgMode
})


export default connect(mapStateToProps)(ContactUs);