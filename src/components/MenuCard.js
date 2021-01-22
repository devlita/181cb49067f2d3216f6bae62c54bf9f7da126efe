import React, { Component } from 'react'

class MenuCard extends Component {
    render() {
        return (
            <div class="card m-3 rounded-4 border-0 shadow" style={{"width": "18rem"}}>
                <img src="https://i.postimg.cc/43Xg6Ht7/lunch1.jpg" class="roundedtop" style={{"width": "18rem"}}/>
                <div class="card-body">
                    <div class="card-text">
                        <div class="d-flex flex-row">
                            <p class="fs-6 muted">4.5</p>
                            <span class="material-icons md-16 redL mt-1">star</span>
                            <span class="material-icons md-16 redL mt-1">star</span>
                            <span class="material-icons md-16 redL mt-1">star</span>
                            <span class="material-icons md-16 redL mt-1">star</span>
                            <span class="material-icons md-16 redL mt-1">star_half</span>
                        </div>
                        <p class="fs-6">Roasted Chicken with Scrambled Egg</p>
                        <p class="fs-7">by Kulina . Uptown Lunch</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>Rp 35.000</p>
                        <button href="#" class="btn btn-danger d-flex">
                            ADD
                            <span class="material-icons">add</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuCard