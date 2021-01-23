import React, { Component } from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';

class Dinner extends Component {
    render() {
        return (
            <DinnerMenu>
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </DinnerMenu>
        )
    }
}

const DinnerMenu = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default Dinner;