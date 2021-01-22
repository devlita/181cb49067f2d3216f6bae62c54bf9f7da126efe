import '../App.css';
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="p-2 navbar-light bg-light">
                    <div class="navbar-brand d-flex" href="#">
                        <span class="material-icons">arrow_back</span>
                        <div>
                            <p class="fs-7 text-muted">ALAMAT PENGANTARAN</p>
                            <button 
                                type="button" 
                                class="btn border-0 .bg-transparent fs-6" 
                                data-toggle="modal" 
                                data-target="#bottom_modal"
                            >
                                Tokopedia Tower 
                                <span class="material-icons redL">expand_more</span>
                            </button>
                        </div>
                    </div>
                </nav>
                <div class="modal bottom fade" id="bottom_modal" tabindex="-1" role="dialog" aria-labelledby="bottom_modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="m-2 d-flex justify-content-end">
                                <button type="button" class="btn close" data-dismiss="modal" aria-label="Close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>    
                            </div>
                            <div class="modal-header">
                                <h5 class="modal-title">Cek makanan yang tersedia di lokasi kamu!</h5>
                            </div>
                            <div class="modal-body">
                                <div>
                                Kulina
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
    
export default Navbar