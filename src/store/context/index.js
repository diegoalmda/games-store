import React, { useEffect, useReducer, useState } from 'react';
import { initialState, reducer } from '../index';
import { addItem, removeItem, removeAll } from '../actions/cart';

export const CartContext = React.createContext(initialState);

const Context = (props) => {
  
  const [state, dispatch] = useReducer(reducer, initialState); 

  const [totalSum, setTotalSum] = useState(0);

  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const total = state.reduce(((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qt)), 0).toFixed(2);
    setTotalSum(total);
  });

  return (
    <CartContext.Provider value={{
      cart: state,
      pushItem: a => addItem(dispatch, a),
      deleteItem: r => removeItem(dispatch, r),
      calcTotal: totalSum,
      openCartFunction: o => setOpenCart(o),
      openCart,
      deleteAll: r => removeAll(dispatch, r),
    }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default Context;