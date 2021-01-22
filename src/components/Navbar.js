import '../App.css';
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="p-2 navbar-light bg-light">
                    <div class="navbar-brand d-flex" href="#">
                        <span class="material-icons">arrow_back</span>
                        <div>
                            <p class="fs-7 text-muted">ALAMAT PENGANTARAN</p>
                            <div class="d-flex">
                                <p class="m-0 fs-6">Tokopedia Tower</p>
                                <span class="material-icons redL">expand_more</span>
                            </div>
                        </div>
                    </div>
            </nav>
            )
        }
    }
    
export default Navbar