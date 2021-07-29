import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../store/context';
import { CartCountContainer } from './styled';

const CartCount = (props) => {
    const { cart, openCartFunction, openCart } = useContext(CartContext);

    const [showNumber, setShowNumber] = useState(false); 

    useEffect(() => {
        if(cart.length > 0) {
            setShowNumber(true);
        } 
    }, [cart, openCart]);

    let image = 'cart-icon.svg';
    
    return (
        <CartCountContainer showQT={showNumber}>
            <div>
                <img src={`${process.env.REACT_APP_PUBLIC_URL}${image}`} onClick={openCartFunction(true)}/>
                {cart.length > 0 ?
                    <span id="count">{cart.length}</span>
                    :<span></span>
                }
            </div>
        </CartCountContainer>
    )
};

export default CartCount;