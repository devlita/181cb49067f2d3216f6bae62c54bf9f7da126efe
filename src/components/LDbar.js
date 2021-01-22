import '../App.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("LDbar").style.top = "160px";
    } else {
        document.getElementById("LDbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}

class LDbar extends Component {
    render() {
        return (
            <div id="LDbar" class="d-flex flex-row justify-content-center sticky-top">
                <div>
                    <Link to="/lunch">Lunch</Link>
                </div>
                <div>
                    <Link to="/dinner">Dinner</Link>
                </div>
            </div>
        )
    }
}
    
export default LDbar