import React, { Component } from 'react'
import styled, { TextSub } from './styled';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class MenuCard extends Component {
    state = {
        showCart: false
    }
    
    toggleCartHandler = () => {
        const isVisible = this.state.showCart;
        this.setState({
        showCart: !isVisible
        });
    }

    render() {
        let cart = null;

        if (this.state.showCart) {
        cart = (
            <div className="mb-2 cart d-flex justify-content-between">
                <div className="m-2 text-start">
                    <p className="m-0">Rp 35,000</p>
                    <p className="m-0 fs-7">Termasuk ongkos kirim</p>
                </div>
                <CartButton>
                    <ShoppingCartIcon />
                </CartButton>
            </div>
            );
        }

        return (
            <div>
                <Menu>
                    <div className="card-image">
                        <img 
                            src="https://i.postimg.cc/43Xg6Ht7/lunch1.jpg" 
                            alt="roasted chicken"
                        />
                    </div>
                    <div className="card-body">
                        <div className="body-desc">
                            <div className="rating">
                                <p>4.5</p>
                                <Star>
                                    <StarIcon fontSize="small" />
                                    <StarIcon fontSize="small"/>
                                    <StarIcon fontSize="small"/>
                                    <StarIcon fontSize="small"/>
                                    <StarHalfIcon fontSize="small"/>
                                </Star>
                            </div>
                            <div className="desc">
                                <p>Roasted Chicken with Scrambled Egg</p>
                                <TextSub>by Kulina . Uptown Lunch</TextSub>
                            </div>
                        </div>
                        <div className="body-price">
                            <p>Rp 35.000</p>
                            <AddButton 
                                fontSize="small"
                                onClick={this.toggleCartHandler}
                            >
                                ADD
                                <AddIcon size="small"/>
                            </AddButton>
                        </div>
                    </div>
                </Menu>
                <div class="fixed-bottom mx-2">{cart}</div>
            </div>
        )
    }
}

const Menu = styled.div`
    border-radius: 1rem;
    box-shadow: var(--shadow);
    margin: 1rem;
    width: 18rem;
    overflow: hidden;
    .card-image {
        width: 18rem;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .card-body {
        padding: 1rem;
        font-weight: 600;
        .body-desc {
            .rating {
                display: flex;
                p {
                    padding-right: 0.5rem;
                    color: var(--textSub);
                }
            }
        }
        .body-price {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

const Star = styled.div`
    color: var(--redL);
`;

const AddButton = styled(Button)`
    background: var(--redL) !important;
    color: white !important;
    padding: 0.5rem;
`;

const CartButton = styled(IconButton)`
    color: white !important;
    padding: 0.5rem;
`;

export default MenuCard