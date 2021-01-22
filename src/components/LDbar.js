import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LDbar extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center">
                <a class="ld"><Link to="/lunch">Lunch</Link></a>
                <a class="ld"><Link to="/dinner">Dinner</Link></a>
            </div>
        )
        }
    }
    
export default LDbar