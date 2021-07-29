import React from 'react';
import { Select, SortContainer } from './styled';

const SortComponent = () => {
  return (
    <SortContainer>
      <h2>Ordenar games por: </h2>
      <Select>
          <option value="sortByPrice">Mais barato</option>
          <option value="sortBYPopularity">Mais populares</option>
          <option value="sortByAlphabetical">Ordem alfabética</option>
      </Select>
    </SortContainer>
  )
}

export default SortComponent;