import React, { useState, useContext } from 'react';
import { CartContext } from '../../store/context';

import { 
    GamesContainer, 
    ItemContainer,  
    ItemSection,
    Select,
    SortContainer,
    CatalogContainer

} from './styled';

const data = require('../../contants/products.json');
const convertData = JSON.stringify(data);
const retrievedData = JSON.parse(convertData);

const GamesCatalog = () => {    
    const { cart, pushItem, deleteItem } = useContext(CartContext);
    const [sortBy, setSortBy] = useState(retrievedData);
    
    function compare(a, b) {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
    }

    const selectSort = (value) => {
        switch(value) {
            case 'sortByPrice':            
                const resultPrice = retrievedData.sort((current, next) => current.price - next.price).map((item) => {
                    return item;
                })
                setSortBy(resultPrice);
                break;
            case 'sortBYPopularity':
                const resultScore = retrievedData.sort((current, next) => next.score - current.score).map((item) => {
                    return item;
                })
                setSortBy(resultScore);
                break;
            case 'sortByAlphabetical':
                const resultAlphabetical = retrievedData.sort((current, next) => compare(current.name, next.name)).map((item) => {
                    return item;
                })
                setSortBy(resultAlphabetical);
                break;
            default: 
                break;
        }
    }

  return(
    <CatalogContainer>
        <SortContainer>
        <h2>Ordenar games por: </h2>
        <Select onChange={(e) => selectSort(e.target.value)}>
            <option value="sortByPrice">Mais barato</option>
            <option value="sortBYPopularity">Mais populares</option>
            <option value="sortByAlphabetical">Ordem alfabética</option>
        </Select>
        </SortContainer>
        <GamesContainer>
                {sortBy.map((item) => {
            
                    return(
                        <ItemContainer key={item.id}>
                            <ItemSection>
                                <img src={`${process.env.REACT_APP_PUBLIC_URL}${item.image}`} alt="Capa do jogo" />
                                <h3>{item.name}</h3>                                
                                <div className="description">
                                    <p><span>Preço: </span>R$ {item.price.toFixed(2)}</p> 
                                    <button id="btn" onClick={() => pushItem(item)}>Adicionar ao carrinho</button>
                                </div>
                            </ItemSection>
                        </ItemContainer>
                    );
                })}
        </GamesContainer>
    </CatalogContainer>
  );
};

export default GamesCatalog;