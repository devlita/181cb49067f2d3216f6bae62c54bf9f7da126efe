import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const menus = ['Lunch', 'Dinner'];

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("LDbar").style.visibility = "visible";
    } else {
        document.getElementById("LDbar").style.visibility = "hidden";
    }
    prevScrollpos = currentScrollPos;
}

function LDbar() {
    return (
        <div id="LDbar" className="fixed-top bg-white" style={{"top": "7rem"}}>
            {menus && menus.map((value, index) => {
                return (
                <LunchDinner key={index}>
                    <Link 
                        to={`/${value}`}
                    >
                        { value }
                    </Link>
                </LunchDinner>
                )
            })}
        </div>
    )

}

const LunchDinner = styled(Button)`
    width: 50%;
    font-size: 1.2rem;
    font-weight: 600 !important;
`;

export default LDbar