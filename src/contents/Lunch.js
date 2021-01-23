import React, { Component } from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';

class Lunch extends Component {
    render() {
        return (
            <LunchMenu>
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </LunchMenu>
        )
    }
}

const LunchMenu = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default Lunch;