import React, { Component } from 'react';
import MenuCard from '../components/MenuCard';

class Dinner extends Component {
    render() {
        return (
            <div class="container-fluid" style={{"marginTop": "180px"}}>
                <div>
                    <h1>Dinner</h1>
                </div>
                <div class="d-flex flex-wrap justify-content-center">
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </div>
            </div>
        )
    }
}

export default Dinner;