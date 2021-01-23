import React, { Component } from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';

class Calendar extends Component {
    render() {
        return (
            <div>
                <InputBox>
                    <LocationOnIcon />
                    <input 
                        type="text"
                        placeholder="location..."
                    />
                </InputBox>
                <Result>

                </Result>
            </div>
        )
    }
}

const InputBox = styled.div`
    width: 18rem;
    border: 1px solid gray;
    border-radius: 1rem;
    padding: 0.2rem;
    input {
        border: none !important;
    }
`;

const Result = styled.div`
    height: 60vh;
`;

export default Calendar