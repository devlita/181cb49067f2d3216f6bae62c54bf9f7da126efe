import '../App.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("LDbar").style.top = "140px";
    } else {
        document.getElementById("LDbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}

class LDbar extends Component {
    render() {
        return (
            <div id="LDbar" class="d-flex justify-content-center sticky-top">
                <a class="ld"><Link to="/lunch">Lunch</Link></a>
                <a class="ld"><Link to="/dinner">Dinner</Link></a>
            </div>
        )
    }
}
    
export default LDbar