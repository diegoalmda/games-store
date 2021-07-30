import styled from 'styled-components';

export const CatalogContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Select = styled.select`
  border: 1rem;
  outline: 0;
  border-radius: .4rem;
  background-color: #02124a;
  color: #fff;
  padding: 1rem;
  margin-left: 1rem;

  &:nth-child(2) {
    color: #fff;
    font-size: 1.2rem;    
  }

  option {
    @media screen and (max-width: 600px) {
      font-size: .8rem;
      width: inherit;
    }
  }

  @media screen and (max-width: 900px) {
    padding: .5rem;
    margin: .5rem 0;
  }
`;

export const SortContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 800px) {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
  }

  @media screen and (max-width: 900px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const GamesContainer = styled.div`
  display: grid;
  margin: 0 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem 1rem;
  padding: 1rem;
  justify-items: center;

  @media screen and (max-width: 1350px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    margin: 0 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem 1rem;
    padding: 1rem;
    justify-items: center;
  }
`;

export const Image = styled.img`
  width: 3rem;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  text-align: center;

  img {
    height:15rem;

    @media screen and (max-width: 1050px) {
      height:20rem;
    }

    @media screen and (max-width: 800px) {
      height:25rem;
    }
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  button {
    cursor: pointer;
    margin: 1rem;
    background-color: #0000FF;
    padding: .5rem;
    border-radius: .5rem;
    color: #fff;
    font-weight: bold;

    &:hover {
      font-weight: bold;
      transform: scale(1.2);
    }
  }
`;

export const ItemSection = styled.div`
  display: flex;
  max-width: 15rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  img {
    padding: 0 0 1.3rem 0;

    @media screen and (max-width: 1050px) {
      padding: 0 0 2.3rem 0;
    }
  }
`;
