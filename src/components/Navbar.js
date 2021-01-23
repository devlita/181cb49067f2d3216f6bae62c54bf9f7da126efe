import '../App.css';
import React, { Component } from 'react';
import styled, { TextSub } from './styled';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/Close';

import Mapbar from './Mapbar';
import Calendar from './Calendar';

class Navbar extends Component {    
    render() {
        return (
            <div>
                <Topbar>
                    <div className="top">
                        <div>
                            <IconButton aria-label="arrow_back">
                                <ArrowBackIcon className="black"/>
                            </IconButton>
                        </div>
                        <div>
                            <TextSub>ALAMAT PENGANTARAN</TextSub>
                            <div>
                                <p>Location</p>
                                <Button 
                                    data-toggle="modal" 
                                    data-target="#bottom_modal"
                                >
                                    <KeyboardArrowDownIcon className="redL"/>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Calendar />
                </Topbar>
                <Calendar />
                <div className="modal bottom fade" id="bottom_modal" tabindex="-1" role="dialog" aria-labelledby="bottom_modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="d-flex justify-content-end">
                                <IconButton data-dismiss="modal" aria-label="Close" >
                                    <CloseIcon fontSize="small" className="black"/>
                                </IconButton>    
                            </div>
                            <div className="modal-header">
                                <h5 className="modal-title">Cek makanan yang tersedia di lokasi kamu!</h5>
                            </div>
                            <div className="modal-body">
                                <Mapbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }

const Topbar = styled.nav`
    background-color: #f9f9f9;
    position: fixed;
    top: 0;
    width: 100%;
    .top{
        display: flex;
        align-items: center;
        > div:first-child {
            width: auto;
        }
        > div:last-child {
            width: 100%;
            padding-top: 0.5rem;
            >div {
                display: flex;
                align-items: center;
                font-size: 1.2rem;
                font-weight: 600;
            }
        }
        .black {
            color: var(--textMain);
        }
        .redL {
            color: var(--redL);
        }
    }
`;

export default Navbar