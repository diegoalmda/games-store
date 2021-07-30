import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../store/context';
import { CartCountContainer, CountContainer } from './styled';

const CartCount = (props) => {
    const { cart, openCartFunction, openCart } = useContext(CartContext);

    const [showNumber, setShowNumber] = useState(false); 

    useEffect(() => {
        if(cart.length > 0) {
            setShowNumber(true);
        } 
        if(cart.length > 0 && openCart) {
            setShowNumber(true);
        }
    }, [cart]);

    let image = 'cart-icon.svg';

    const handleClick = () => {
        if(cart.length > 0) {
            openCartFunction(true);
            console.log(openCart);
        }
    }
    
    return (
        <CartCountContainer showQT={showNumber}>
            <CountContainer showQT={showNumber} onClick={() => handleClick()} >
                <img src={`${process.env.REACT_APP_PUBLIC_URL}${image}`} alt="Carrinho de compras" />
                {cart.length > 0 ?
                    <span id="count">{cart.length}</span>
                    :<p></p>
                }
            </CountContainer>
        </CartCountContainer>
    )
};

export default CartCount;