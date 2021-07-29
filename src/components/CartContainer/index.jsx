import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../store/context';

import { 
  Container, 
  ContainerCart, 
  ContainerImage, 
  ContainerInfo, 
  ContainerButtons, 
  Span,
  ResultContainer
} from './styled';

const CartContainer = (props) => {

  const { cart, pushItem, deleteItem, calcTotal, openCart } = useContext(CartContext);

  const [show, setShow] = useState(false); 
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if(cart.length > 0 || openCart) {
      setShow(true);
    } 
    if(cart.length == 0) {
      setShow(false);
    }
    
  }, [cart, openCart]);

  const loadValue = (price, qt) => {
    return (price * qt).toFixed(2);
  }

  

  return (
    <Container showCart={show}>
      <Span><button onClick={() => setShow(false)}>Fechar carrinho [x]</button></Span>
      <h2>Itens adicionados:</h2>
      {cart.map((item) => {
                        
        return(
          <ContainerCart key={item.id}>
            <ContainerImage>
              <img src={`${process.env.REACT_APP_PUBLIC_URL}${item.image}`} />
            </ContainerImage>
            <ContainerInfo>
              <p>{item.name}</p>
              <span>Preço: {loadValue(item.price, item.qt)}</span>
              <span>Quantidade: {item.qt}</span>
            <ContainerButtons>
              <button className="edit" onClick={() => pushItem(item)} >+</button>
              <button className="delete" onClick={() => deleteItem(item)} >-</button>
            </ContainerButtons>
            </ContainerInfo>
          </ContainerCart>
          
        );
      })}
      <ResultContainer>
        <p>Valor total: {calcTotal}</p>
        <button>Fechar compra</button>
      </ResultContainer>
    </Container>
  )
}

export default CartContainer;